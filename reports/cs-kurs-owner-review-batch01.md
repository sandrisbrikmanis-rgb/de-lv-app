CS–DE KURS OWNER REVIEW — BATCH 01

READ-ONLY OWNER review packet. No production changes. Cursor does not assign NEW values.

Objects: 40
Findings: 42
Lessons: kurssLesson1 … kurssLesson8
CRITICAL: 0
HIGH: 42
MEDIUM: 0
FALSE_POSITIVE_CANDIDATE: 1
CURRENT_MATCH: 42
CURRENT_MISMATCH: 0
OWNER decisions: 0
Production changes: 0

---

## OBJECT 001

### Identifikācija
- OWNER object: 001
- Object key: data/cs/courseLessons.js|kurssLesson1|kurssLesson1/subtitle
- Lesson: kurssLesson1
- Section: kurssLesson1/subtitle
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson1/subtitle

### Faktiskais saturs
- Field: subtitle
- CURRENT (CURRENT_MATCH): Přítomná časová slovesa, podstatná jména, gramatika a překlad

### Pedagoģisks konteksts
- LV MASTER: Darbības vārdi tagadnē, vārdiņi, gramatika un pārtulko
- DE TARGET: lesson1

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: subtitle
- Reason: [Luna TRANSLATION] „Přítomná časová slovesa“ is unnatural Czech.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 377

### OWNER DECISION
Status: PENDING
Field: subtitle
CURRENT: Přítomná časová slovesa, podstatná jména, gramatika a překlad
NEW:
OWNER NOTE:

---

## OBJECT 002

### Identifikācija
- OWNER object: 002
- Object key: data/cs/courseLessons.js|kurssLesson1|kurssLesson1/title
- Lesson: kurssLesson1
- Section: kurssLesson1/title
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson1/title

### Faktiskais saturs
- Field: title
- CURRENT (CURRENT_MATCH): Přednáška 1

### Pedagoģisks konteksts
- LV MASTER: Lekcija 1
- DE TARGET: lesson1

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: title
- Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 376

### OWNER DECISION
Status: PENDING
Field: title
CURRENT: Přednáška 1
NEW:
OWNER NOTE:

---

## OBJECT 003

### Identifikācija
- OWNER object: 003
- Object key: data/cs/courseLessons.js|kurssLesson2|kurssLesson2/title
- Lesson: kurssLesson2
- Section: kurssLesson2/title
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson2/title

### Faktiskais saturs
- Field: title
- CURRENT (CURRENT_MATCH): Přednáška 2

### Pedagoģisks konteksts
- LV MASTER: Lekcija 2
- DE TARGET: lesson2

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: title
- Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 378

### OWNER DECISION
Status: PENDING
Field: title
CURRENT: Přednáška 2
NEW:
OWNER NOTE:

---

## OBJECT 004

### Identifikācija
- OWNER object: 004
- Object key: data/cs/courseLessons.js|kurssLesson3|kurssLesson3/title
- Lesson: kurssLesson3
- Section: kurssLesson3/title
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson3/title

### Faktiskais saturs
- Field: title
- CURRENT (CURRENT_MATCH): Přednáška 3

### Pedagoģisks konteksts
- LV MASTER: Lekcija 3
- DE TARGET: lesson3

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: title
- Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 379

### OWNER DECISION
Status: PENDING
Field: title
CURRENT: Přednáška 3
NEW:
OWNER NOTE:

---

## OBJECT 005

### Identifikācija
- OWNER object: 005
- Object key: data/cs/courseLessons.js|kurssLesson4|kurssLesson4/legacyHtml
- Lesson: kurssLesson4
- Section: kurssLesson4/legacyHtml
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson4/legacyHtml

### Faktiskais saturs (legacy HTML)
- Field: legacyHtml(stripped)
- Problem fragment: Přednáška 4 Akuzativ, nehmen, hinlegen, hinausgehen a přídavná jména. 1. Dialogy / věty ⌃ Paul kommt und nimmt einen Fed
- Context after: Přednáška 4 Akuzativ, nehmen, hinlegen, hinausgehen a přídavná jména. 1. Dialogy / věty ⌃ Paul kommt und nimmt einen Federhalter. Er zeigt den Federhalter. Er fragt: "Wie ist der F
- CURRENT (CURRENT_MATCH): see machine-readable full value in `reports/temp/cs-kurs-owner-review-source.json`
- Full CURRENT length: 2759 chars
- LV MASTER fragment: Lekcija 4 Akuzatīvs, nehmen, hinlegen, hinausgehen un īpašības vārdi. 1. Dialogi / teikumi ⌃ Paul kommt und nimmt einen Federhalter. Er zeigt den Federhalter. Er fragt: „Wie ist der Federhalter?“ Olga antwortet: „Der Federhalter ist schwarz.“ Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz. Marie kommt und nimmt eine Feder. Sie fragt: „Wie ist die Feder?“ Olga antwortet: „Die Feder ist spitz.“ Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz. W…

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: legacyHtml(stripped)
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 13

### OWNER DECISION
Status: PENDING
Field: legacyHtml(stripped)
CURRENT: Přednáška 4 Akuzativ, nehmen, hinlegen, hinausgehen a přídavná jména. 1. Dialogy / věty ⌃ Paul kommt und nimmt einen Federhalter. Er zeigt den Federhalter. Er fragt: "Wie ist der Federhalter?" Olga odpovídá: "Der Federhalter ist schwarz." Je Federhalter weiß? Ne, der Federhalter ist nicht weiß, er i…
NEW:
OWNER NOTE:

---

## OBJECT 006

### Identifikācija
- OWNER object: 006
- Object key: data/cs/courseLessons.js|kurssLesson4|kurssLesson4/title
- Lesson: kurssLesson4
- Section: kurssLesson4/title
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson4/title

### Faktiskais saturs
- Field: title
- CURRENT (CURRENT_MATCH): Přednáška 4

### Pedagoģisks konteksts
- LV MASTER: Lekcija 4
- DE TARGET: lesson4

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: title
- Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 380

### OWNER DECISION
Status: PENDING
Field: title
CURRENT: Přednáška 4
NEW:
OWNER NOTE:

---

## OBJECT 007

### Identifikācija
- OWNER object: 007
- Object key: data/cs/courseLessons.js|kurssLesson5|kurssLesson5/legacyHtml
- Lesson: kurssLesson5
- Section: kurssLesson5/legacyHtml
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson5/legacyHtml

### Faktiskais saturs (legacy HTML)
- Field: legacyHtml(stripped)
- Problem fragment: Přednáška 5 Wen?, akuzativ, sitzen, fragen a -in koncovka. 1. Dialogy / věty ⌄ Wer sitzt und fragt? Der Lehrer sitzt und
- Context after: Přednáška 5 Wen?, akuzativ, sitzen, fragen a -in koncovka. 1. Dialogy / věty ⌄ Wer sitzt und fragt? Der Lehrer sitzt und fragt. Kdo stojí a odpovídá? Der Schüler stojí a odpovídá. 
- CURRENT (CURRENT_MATCH): see machine-readable full value in `reports/temp/cs-kurs-owner-review-source.json`
- Full CURRENT length: 2321 chars
- LV MASTER fragment: Lekcija 5 Wen?, akuzatīvs, sitzen, fragen un -in galotne. 1. Dialogi / teikumi ⌄ Wer sitzt und fragt? Der Lehrer sitzt und fragt. Wer steht und antwortet? Der Schüler steht und antwortet. Wie antwortet der Schüler? Der Schüler antwortet gut. Wen lobt der Lehrer? Der Lehrer lobt den Schüler. Wie ist der Schüler? Der Schüler ist klein. Ist der Schüler klein oder groß? Er ist klein. Wen fragt die Lehrerin? Die Lehrerin fragt die Schülerin. Wie antwortet die Schülerin? Die Schülerin antwortet schlec…

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: legacyHtml(stripped)
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 12

### OWNER DECISION
Status: PENDING
Field: legacyHtml(stripped)
CURRENT: Přednáška 5 Wen?, akuzativ, sitzen, fragen a -in koncovka. 1. Dialogy / věty ⌄ Wer sitzt und fragt? Der Lehrer sitzt und fragt. Kdo stojí a odpovídá? Der Schüler stojí a odpovídá. Co antwortet der Schüler? Der Schüler antwortet gut. Wen lobt der Lehrer? Der Lehrer lobt den Schüler. Wie ist der Schül…
NEW:
OWNER NOTE:

---

## OBJECT 008

### Identifikācija
- OWNER object: 008
- Object key: data/cs/courseLessons.js|kurssLesson5|kurssLesson5/subtitle
- Lesson: kurssLesson5
- Section: kurssLesson5/subtitle
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson5/subtitle

### Faktiskais saturs
- Field: subtitle
- CURRENT (CURRENT_MATCH): Wen?, akuzativ, sitzen, fragen a -in koncovka.

### Pedagoģisks konteksts
- LV MASTER: Wen?, akuzatīvs, sitzen, fragen un -in galotne.
- DE TARGET: lesson5

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: subtitle
- Reason: [Luna TRANSLATION] The word order „-in koncovka“ is ungrammatical or highly unnatural.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 382

### OWNER DECISION
Status: PENDING
Field: subtitle
CURRENT: Wen?, akuzativ, sitzen, fragen a -in koncovka.
NEW:
OWNER NOTE:

---

## OBJECT 009

### Identifikācija
- OWNER object: 009
- Object key: data/cs/courseLessons.js|kurssLesson5|kurssLesson5/title
- Lesson: kurssLesson5
- Section: kurssLesson5/title
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson5/title

### Faktiskais saturs
- Field: title
- CURRENT (CURRENT_MATCH): Přednáška 5

### Pedagoģisks konteksts
- LV MASTER: Lekcija 5
- DE TARGET: lesson5

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: title
- Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 381

### OWNER DECISION
Status: PENDING
Field: title
CURRENT: Přednáška 5
NEW:
OWNER NOTE:

---

## OBJECT 010

### Identifikācija
- OWNER object: 010
- Object key: data/cs/courseLessons.js|kurssLesson6|kurssLesson6/legacyHtml
- Lesson: kurssLesson6
- Section: kurssLesson6/legacyHtml
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson6/legacyHtml

### Faktiskais saturs (legacy HTML)
- Field: COURSE_LESSON_HTML
- Problem fragment: Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.
- Context before: Přednáška 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1.
- Context after:  Dialogy / věty ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Messer, zwei Messer, drei Messer. Er legt die Messer wieder hin. Alle Messer sind scharf. Dan
- CURRENT (CURRENT_MATCH): see machine-readable full value in `reports/temp/cs-kurs-owner-review-source.json`
- Full CURRENT length: 9622 chars
- LV MASTER fragment: Lekcija 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogi / teikumi ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Me

- Field: legacyHtml(stripped)
- Problem fragment: Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas
- Context before: Přednáška 6 
- Context after: Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogy / věty ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Messer, zwei Messer, drei
- CURRENT (CURRENT_MATCH): see machine-readable full value in `reports/temp/cs-kurs-owner-review-source.json`
- Full CURRENT length: 4666 chars
- LV MASTER fragment: Lekcija 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogi / teikumi ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Me

- Field: legacyHtml
- Problem fragment: Přednáška 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogy / věty ⌄ Hier liegt ein Bleisti
- Context after: Přednáška 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogy / věty ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Messer, zwei Messer, drei Messer.
- CURRENT (CURRENT_MATCH): see machine-readable full value in `reports/temp/cs-kurs-owner-review-source.json`
- Full CURRENT length: 9622 chars
- LV MASTER fragment: Lekcija 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogi / teikumi ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Messer, zwei Messer, drei Messer. Er legt die Messer wieder hin. Alle Messer sind scharf. Dann nimmt er wieder ein Messer. Er macht das Messer auf. Er nimmt den Bleistift. Er spitzt den Bleistift an. Er legt das Messer hin. Er setzt sich und zeichnet. Was zeichnet er? Er zeichnet einen Schlüssel. Gertrud zeichnet ein Fenster und e…

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: COURSE_LESSON_HTML
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 10

#### Finding 2
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: legacyHtml(stripped)
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 11

#### Finding 3
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: legacyHtml
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 14

### OWNER DECISION
Status: PENDING

Change 1
Field: COURSE_LESSON_HTML
CURRENT: 
    <h3>Přednáška 6</h3>
    <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>

    <details class="lesson1-accordion" open>
      <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogy / věty</span><span class="lesson1-chev…
NEW:

Change 2
Field: legacyHtml(stripped)
CURRENT: Přednáška 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogy / věty ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Messer, zwei Messer, drei Messer. Er legt die Messer wieder hin. Alle Messer sind scharf. Dann je wieder ein Messer. Er macht das Mes…
NEW:

Change 3
Field: legacyHtml
CURRENT: 
    <h3>Přednáška 6</h3>
    <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>

    <details class="lesson1-accordion" open>
      <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogy / věty</span><span class="lesson1-chev…
NEW:

OWNER NOTE:

---

## OBJECT 011

### Identifikācija
- OWNER object: 011
- Object key: data/cs/courseLessons.js|kurssLesson6|kurssLesson6/subtitle
- Lesson: kurssLesson6
- Section: kurssLesson6/subtitle
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson6/subtitle

### Faktiskais saturs
- Field: subtitle
- CURRENT (CURRENT_MATCH): Slovesa, podmínky místa a překlad

### Pedagoģisks konteksts
- LV MASTER: Darbības vārdi, vietas apstākļi un pārtulko
- DE TARGET: lesson6

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: subtitle
- Reason: [Luna TRANSLATION] „Podmínky místa“ is a literal and unnatural rendering of the grammatical topic.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 384

### OWNER DECISION
Status: PENDING
Field: subtitle
CURRENT: Slovesa, podmínky místa a překlad
NEW:
OWNER NOTE:

---

## OBJECT 012

### Identifikācija
- OWNER object: 012
- Object key: data/cs/courseLessons.js|kurssLesson6|kurssLesson6/title
- Lesson: kurssLesson6
- Section: kurssLesson6/title
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson6/title

### Faktiskais saturs
- Field: title
- CURRENT (CURRENT_MATCH): Přednáška 6

### Pedagoģisks konteksts
- LV MASTER: Lekcija 6
- DE TARGET: lesson6

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: title
- Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 383

### OWNER DECISION
Status: PENDING
Field: title
CURRENT: Přednáška 6
NEW:
OWNER NOTE:

---

## OBJECT 013

### Identifikācija
- OWNER object: 013
- Object key: data/cs/courseLessons.js|kurssLesson7|kurssLesson7/subtitle
- Lesson: kurssLesson7
- Section: kurssLesson7/subtitle
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson7/subtitle

### Faktiskais saturs
- Field: subtitle
- CURRENT (CURRENT_MATCH): Imperativ, forma adresy a množné číslo.

### Pedagoģisks konteksts
- LV MASTER: Pavēles izteiksme, uzrunas forma un daudzskaitlis.
- DE TARGET: lesson7

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: subtitle
- Reason: [Luna TRANSLATION] „Forma adresy“ is not idiomatic Czech for a form of address.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 386

### OWNER DECISION
Status: PENDING
Field: subtitle
CURRENT: Imperativ, forma adresy a množné číslo.
NEW:
OWNER NOTE:

---

## OBJECT 014

### Identifikācija
- OWNER object: 014
- Object key: data/cs/courseLessons.js|kurssLesson7|kurssLesson7/title
- Lesson: kurssLesson7
- Section: kurssLesson7/title
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson7/title

### Faktiskais saturs
- Field: title
- CURRENT (CURRENT_MATCH): Přednáška 7

### Pedagoģisks konteksts
- LV MASTER: Lekcija 7
- DE TARGET: lesson7

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: title
- Reason: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 385

### OWNER DECISION
Status: PENDING
Field: title
CURRENT: Přednáška 7
NEW:
OWNER NOTE:

---

## OBJECT 015

### Identifikācija
- OWNER object: 015
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[0]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[0]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[0]

### Faktiskais saturs
- Field: sections[1].items[0]
- CURRENT (CURRENT_MATCH): Alle — visi

### Pedagoģisks konteksts
- LV MASTER: alle — visi
- DE TARGET: Alle

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[0]
- Reason: [Luna TRANSLATION] „visi“ is Latvian, not Czech.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 389

### OWNER DECISION
Status: PENDING
Field: sections[1].items[0]
CURRENT: Alle — visi
NEW:
OWNER NOTE:

---

## OBJECT 016

### Identifikācija
- OWNER object: 016
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[1]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[1]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[1]

### Faktiskais saturs
- Field: sections[1].items[1]
- CURRENT (CURRENT_MATCH): Aufstehen — vstát

### Pedagoģisks konteksts
- LV MASTER: aufstehen — piecelties
- DE TARGET: Aufstehen

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[1]
- Reason: [Luna TRANSLATION] The Czech text „vstát“ is correct, but the DE reference gloss „vst“ appears truncated.
- AUDIT_RECOMMENDATION: (OWNER review)
- Audit finding IDs: 390

### OWNER DECISION
Status: PENDING
Field: sections[1].items[1]
CURRENT: Aufstehen — vstát
NEW:
OWNER NOTE:

---

## OBJECT 017

### Identifikācija
- OWNER object: 017
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[10]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[10]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[10]

### Faktiskais saturs
- Field: sections[1].items[10]
- CURRENT (CURRENT_MATCH): Setzt euch (zect oich) — sēstieties!

### Pedagoģisks konteksts
- LV MASTER: setzt euch (zect oich) — sēstieties!
- DE TARGET: Setzt euch (zect oich)

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[10]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 19

### OWNER DECISION
Status: PENDING
Field: sections[1].items[10]
CURRENT: Setzt euch (zect oich) — sēstieties!
NEW:
OWNER NOTE:

---

## OBJECT 018

### Identifikācija
- OWNER object: 018
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[11]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[11]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[11]

### Faktiskais saturs
- Field: sections[1].items[11]
- CURRENT (CURRENT_MATCH): Sie setzen sich — viņi apsēžas

### Pedagoģisks konteksts
- LV MASTER: sie setzen sich — viņi apsēžas
- DE TARGET: Sie setzen sich

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[11]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 20

### OWNER DECISION
Status: PENDING
Field: sections[1].items[11]
CURRENT: Sie setzen sich — viņi apsēžas
NEW:
OWNER NOTE:

---

## OBJECT 019

### Identifikācija
- OWNER object: 019
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[12]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[12]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[12]

### Faktiskais saturs
- Field: sections[1].items[12]
- CURRENT (CURRENT_MATCH): Fragen (ar akuzatīvu) — jautāt

### Pedagoģisks konteksts
- LV MASTER: fragen (ar akuzatīvu) — jautāt
- DE TARGET: Fragen (ar akuzatīvu)

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[12]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 21

### OWNER DECISION
Status: PENDING
Field: sections[1].items[12]
CURRENT: Fragen (ar akuzatīvu) — jautāt
NEW:
OWNER NOTE:

---

## OBJECT 020

### Identifikācija
- OWNER object: 020
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[13]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[13]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[13]

### Faktiskais saturs
- Field: sections[1].items[13]
- CURRENT (CURRENT_MATCH): Sprechen — runāt

### Pedagoģisks konteksts
- LV MASTER: sprechen — runāt
- DE TARGET: Sprechen

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[13]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 22

### OWNER DECISION
Status: PENDING
Field: sections[1].items[13]
CURRENT: Sprechen — runāt
NEW:
OWNER NOTE:

---

## OBJECT 021

### Identifikācija
- OWNER object: 021
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[15]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[15]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[15]

### Faktiskais saturs
- Field: sections[1].items[15]
- CURRENT (CURRENT_MATCH): Aber — bet

### Pedagoģisks konteksts
- LV MASTER: aber — bet
- DE TARGET: Aber

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[15]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Aber — ale
- Audit finding IDs: 394

### OWNER DECISION
Status: PENDING
Field: sections[1].items[15]
CURRENT: Aber — bet
NEW:
OWNER NOTE:

---

## OBJECT 022

### Identifikācija
- OWNER object: 022
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[16]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[16]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[16]

### Faktiskais saturs
- Field: sections[1].items[16]
- CURRENT (CURRENT_MATCH): Sehr (zēr) — ļoti

### Pedagoģisks konteksts
- LV MASTER: sehr (zēr) — ļoti
- DE TARGET: Sehr (zēr)

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[16]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 23

### OWNER DECISION
Status: PENDING
Field: sections[1].items[16]
CURRENT: Sehr (zēr) — ļoti
NEW:
OWNER NOTE:

---

## OBJECT 023

### Identifikācija
- OWNER object: 023
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[17]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[17]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[17]

### Faktiskais saturs
- Field: sections[1].items[17]
- CURRENT (CURRENT_MATCH): Leise — klusi

### Pedagoģisks konteksts
- LV MASTER: leise — klusi
- DE TARGET: Leise

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[17]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Leise — tiše
- Audit finding IDs: 395

### OWNER DECISION
Status: PENDING
Field: sections[1].items[17]
CURRENT: Leise — klusi
NEW:
OWNER NOTE:

---

## OBJECT 024

### Identifikācija
- OWNER object: 024
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[18]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[18]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[18]

### Faktiskais saturs
- Field: sections[1].items[18]
- CURRENT (CURRENT_MATCH): Laut — skaļi

### Pedagoģisks konteksts
- LV MASTER: laut — skaļi
- DE TARGET: Laut

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[18]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 24

### OWNER DECISION
Status: PENDING
Field: sections[1].items[18]
CURRENT: Laut — skaļi
NEW:
OWNER NOTE:

---

## OBJECT 025

### Identifikācija
- OWNER object: 025
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[19]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[19]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[19]

### Faktiskais saturs
- Field: sections[1].items[19]
- CURRENT (CURRENT_MATCH): Jetzt (ject) — tagad

### Pedagoģisks konteksts
- LV MASTER: jetzt (ject) — tagad
- DE TARGET: Jetzt (ject)

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[19]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Jetzt (ject) — teď
- Audit finding IDs: 396

### OWNER DECISION
Status: PENDING
Field: sections[1].items[19]
CURRENT: Jetzt (ject) — tagad
NEW:
OWNER NOTE:

---

## OBJECT 026

### Identifikācija
- OWNER object: 026
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[2]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[2]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[2]

### Faktiskais saturs
- Field: sections[1].items[2]
- CURRENT (CURRENT_MATCH): Stehen auf — pieceļas

### Pedagoģisks konteksts
- LV MASTER: stehen auf — pieceļas
- DE TARGET: Stehen auf

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[2]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 15

### OWNER DECISION
Status: PENDING
Field: sections[1].items[2]
CURRENT: Stehen auf — pieceļas
NEW:
OWNER NOTE:

---

## OBJECT 027

### Identifikācija
- OWNER object: 027
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[21]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[21]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[21]

### Faktiskais saturs
- Field: sections[1].items[21]
- CURRENT (CURRENT_MATCH): Lies! — lasi!

### Pedagoģisks konteksts
- LV MASTER: lies! — lasi!
- DE TARGET: Lies!

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[21]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Lies! — čti!
- Audit finding IDs: 397

### OWNER DECISION
Status: PENDING
Field: sections[1].items[21]
CURRENT: Lies! — lasi!
NEW:
OWNER NOTE:

---

## OBJECT 028

### Identifikācija
- OWNER object: 028
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[22]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[22]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[22]

### Faktiskais saturs
- Field: sections[1].items[22]
- CURRENT (CURRENT_MATCH): Gut — labi

### Pedagoģisks konteksts
- LV MASTER: gut — labi
- DE TARGET: Gut

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[22]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Gut — dobře
- Audit finding IDs: 398

### OWNER DECISION
Status: PENDING
Field: sections[1].items[22]
CURRENT: Gut — labi
NEW:
OWNER NOTE:

---

## OBJECT 029

### Identifikācija
- OWNER object: 029
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[23]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[23]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[23]

### Faktiskais saturs
- Field: sections[1].items[23]
- CURRENT (CURRENT_MATCH): Schlecht — slikti

### Pedagoģisks konteksts
- LV MASTER: schlecht — slikti
- DE TARGET: Schlecht

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[23]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Schlecht — špatně
- Audit finding IDs: 399

### OWNER DECISION
Status: PENDING
Field: sections[1].items[23]
CURRENT: Schlecht — slikti
NEW:
OWNER NOTE:

---

## OBJECT 030

### Identifikācija
- OWNER object: 030
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[24]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[24]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[24]

### Faktiskais saturs
- Field: sections[1].items[24]
- CURRENT (CURRENT_MATCH): Deutlich (doitlich) — skaidri, saprotami

### Pedagoģisks konteksts
- LV MASTER: deutlich (doitlich) — skaidri, saprotami
- DE TARGET: Deutlich (doitlich)

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[24]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Deutlich (doitlich) — zřetelně, srozumitelně
- Audit finding IDs: 400

### OWNER DECISION
Status: PENDING
Field: sections[1].items[24]
CURRENT: Deutlich (doitlich) — skaidri, saprotami
NEW:
OWNER NOTE:

---

## OBJECT 031

### Identifikācija
- OWNER object: 031
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[25]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[25]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[25]

### Faktiskais saturs
- Field: sections[1].items[25]
- CURRENT (CURRENT_MATCH): Schreiben — rakstīt

### Pedagoģisks konteksts
- LV MASTER: schreiben — rakstīt
- DE TARGET: Schreiben

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[25]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 25

### OWNER DECISION
Status: PENDING
Field: sections[1].items[25]
CURRENT: Schreiben — rakstīt
NEW:
OWNER NOTE:

---

## OBJECT 032

### Identifikācija
- OWNER object: 032
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[26]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[26]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[26]

### Faktiskais saturs
- Field: sections[1].items[26]
- CURRENT (CURRENT_MATCH): Endlich (entlich) — beidzot

### Pedagoģisks konteksts
- LV MASTER: endlich (entlich) — beidzot
- DE TARGET: Endlich (entlich)

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[26]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Endlich (entlich) — konečně
- Audit finding IDs: 401

### OWNER DECISION
Status: PENDING
Field: sections[1].items[26]
CURRENT: Endlich (entlich) — beidzot
NEW:
OWNER NOTE:

---

## OBJECT 033

### Identifikācija
- OWNER object: 033
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[27]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[27]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[27]

### Faktiskais saturs
- Field: sections[1].items[27]
- CURRENT (CURRENT_MATCH): Erzählen (ercēlen) — stāstīt

### Pedagoģisks konteksts
- LV MASTER: erzählen (ercēlen) — stāstīt
- DE TARGET: Erzählen (ercēlen)

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status candidate: FALSE_POSITIVE_CANDIDATE
- False positive note: Detector flagged: Foreign/script issue LV_DIACRITIC Possible false positive: (ercēlen) is pronunciation notation with macron, not Latvian leftover text.
- Field: sections[1].items[27]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 26

### OWNER DECISION
Status: PENDING
Field: sections[1].items[27]
CURRENT: Erzählen (ercēlen) — stāstīt
NEW:
OWNER NOTE:

---

## OBJECT 034

### Identifikācija
- OWNER object: 034
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[28]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[28]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[28]

### Faktiskais saturs
- Field: sections[1].items[28]
- CURRENT (CURRENT_MATCH): Zuhören — klausīties

### Pedagoģisks konteksts
- LV MASTER: zuhören — klausīties
- DE TARGET: Zuhören

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[28]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 27

### OWNER DECISION
Status: PENDING
Field: sections[1].items[28]
CURRENT: Zuhören — klausīties
NEW:
OWNER NOTE:

---

## OBJECT 035

### Identifikācija
- OWNER object: 035
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[29]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[29]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[29]

### Faktiskais saturs
- Field: sections[1].items[29]
- CURRENT (CURRENT_MATCH): Sie hören zu — viņi klausās

### Pedagoģisks konteksts
- LV MASTER: sie hören zu — viņi klausās
- DE TARGET: Sie hören zu

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[29]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 28

### OWNER DECISION
Status: PENDING
Field: sections[1].items[29]
CURRENT: Sie hören zu — viņi klausās
NEW:
OWNER NOTE:

---

## OBJECT 036

### Identifikācija
- OWNER object: 036
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[3]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[3]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[3]

### Faktiskais saturs
- Field: sections[1].items[3]
- CURRENT (CURRENT_MATCH): Grüßen (grüsen) — sveicināt

### Pedagoģisks konteksts
- LV MASTER: grüßen (grüsen) — sveicināt
- DE TARGET: Grüßen (grüsen)

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[3]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 16

### OWNER DECISION
Status: PENDING
Field: sections[1].items[3]
CURRENT: Grüßen (grüsen) — sveicināt
NEW:
OWNER NOTE:

---

## OBJECT 037

### Identifikācija
- OWNER object: 037
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[31]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[31]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[31]

### Faktiskais saturs
- Field: sections[1].items[31]
- CURRENT (CURRENT_MATCH): Der Arbeiter — strādnieks

### Pedagoģisks konteksts
- LV MASTER: der Arbeiter — strādnieks
- DE TARGET: Der Arbeiter

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[31]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 29

### OWNER DECISION
Status: PENDING
Field: sections[1].items[31]
CURRENT: Der Arbeiter — strādnieks
NEW:
OWNER NOTE:

---

## OBJECT 038

### Identifikācija
- OWNER object: 038
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[32]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[32]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[32]

### Faktiskais saturs
- Field: sections[1].items[32]
- CURRENT (CURRENT_MATCH): Der Müller — dzirnavnieks

### Pedagoģisks konteksts
- LV MASTER: der Müller — dzirnavnieks
- DE TARGET: Der Müller

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[32]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Der Müller — mlynář
- Audit finding IDs: 402

### OWNER DECISION
Status: PENDING
Field: sections[1].items[32]
CURRENT: Der Müller — dzirnavnieks
NEW:
OWNER NOTE:

---

## OBJECT 039

### Identifikācija
- OWNER object: 039
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[33]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[33]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[33]

### Faktiskais saturs
- Field: sections[1].items[33]
- CURRENT (CURRENT_MATCH): Der Tischler — galdnieks

### Pedagoģisks konteksts
- LV MASTER: der Tischler — galdnieks
- DE TARGET: Der Tischler

### Findings

#### Finding 1
- Severity: HIGH
- Source: LUNA
- Type: TRANSLATION
- Status: OWNER_REVIEW
- Field: sections[1].items[33]
- Reason: [Luna TRANSLATION] 
- AUDIT_RECOMMENDATION: Der Tischler — truhlář
- Audit finding IDs: 403

### OWNER DECISION
Status: PENDING
Field: sections[1].items[33]
CURRENT: Der Tischler — galdnieks
NEW:
OWNER NOTE:

---

## OBJECT 040

### Identifikācija
- OWNER object: 040
- Object key: data/cs/courseLessons.js|kurssLesson8|kurssLesson8/section[1]/item[34]
- Lesson: kurssLesson8
- Section: kurssLesson8/section[1]/item[34]
- File: data/cs/courseLessons.js
- Object ID / Location: kurssLesson8/section[1]/item[34]

### Faktiskais saturs
- Field: sections[1].items[34]
- CURRENT (CURRENT_MATCH): Der Bäcker (dēr beker) — maiznieks

### Pedagoģisks konteksts
- LV MASTER: der Bäcker (dēr beker) — maiznieks
- DE TARGET: Der Bäcker (dēr beker)

### Findings

#### Finding 1
- Severity: HIGH
- Source: DETERMINISTIC
- Type: LV_DIACRITIC
- Status: OWNER_REVIEW
- Field: sections[1].items[34]
- Reason: Foreign/script issue: LV_DIACRITIC
- AUDIT_RECOMMENDATION: (OWNER: Czech replacement per LV MASTER meaning)
- Audit finding IDs: 30

### OWNER DECISION
Status: PENDING
Field: sections[1].items[34]
CURRENT: Der Bäcker (dēr beker) — maiznieks
NEW:
OWNER NOTE:

---

## COVERAGE
Batch 1 objects: 40/40
Batch 1 findings: 42/42
OWNER PENDING: 40/40