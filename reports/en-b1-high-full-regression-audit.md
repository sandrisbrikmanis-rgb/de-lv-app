# EN–DE B1 HIGH FULL TARGETED REGRESSION AUDIT

**Generated:** 2026-08-09T12:30:17.994Z

## Scope

| Metric | Value |
| --- | --- |
| HIGH repair cycles included | #1–#13 (4 with repair logs) |
| Repair cycles missing logs | 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| Repaired audit entries represented | 568 |
| Unique repaired production cards | 220 |
| Unique cards regression-audited | 220 |
| Coverage | 100% |
| Missing cards | 0 |
| Duplicate logical cards | 0 |
| Changed/repaired fields represented | 58 |

## Regression findings

| Severity | Count |
| --- | --- |
| CRITICAL | 0 |
| HIGH | 3 |
| MEDIUM | 288 |
| LOW | 0 |

| sectionAccents | Count |
| --- | --- |
| TECHNICAL regressions | 169 |
| PEDAGOGICAL regressions | 3 |
| DE source issues | 0 |

## Validation

| Check | Result |
| --- | --- |
| JavaScript syntax | PASS |
| Structural/schema parity | PASS |
| ID parity | PASS |
| Order parity | PASS |
| Card count | 3367 |
| Mirror parity | PASS |
| UTF-8/mojibake | PASS |
| Suspicious Unicode | PASS |
| DE READ-ONLY | PASS |

**Production changes:** 0

**REGRESSION RESULT:** FAIL — REPAIR REQUIRED

**HIGH CYCLE:** NOT CLOSED

**TARGETED REGRESSION:** COMPLETE (this audit)

## Regression findings detail

### REGRESSION FINDING 1

**Card ID:** b1-abschnitt
**Production identity:** b1-abschnitt
**Production index:** 74
**HIGH repair source:** #1

**DE:** Abschnitt
**Current top-level EN:** Stage

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Abschnitt means a section or part of a text. It is used for text, road, job or time.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Abschnitt means a section or part of a text. It is used for text, road, job or time.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 2

**Card ID:** b1-antrag
**Production identity:** b1-antrag
**Production index:** 157
**HIGH repair source:** #1

**DE:** Antrag
**Current top-level EN:** Submission

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Antrag means submission or formal application. In meetings, it can also mean a proposal for voting.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Antrag means submission or formal application. In meetings, it can also mean a proposal for voting.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 3

**Card ID:** b1-berichten
**Production identity:** b1-berichten
**Production index:** 363
**HIGH repair source:** #1

**DE:** berichten
**Current top-level EN:** To report

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Sie berichtet über das Projekt. = She reports on the project.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Sie berichtet über Projekt. = She reports on the project.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 4

**Card ID:** b1-berichten
**Production identity:** b1-berichten
**Production index:** 363
**HIGH repair source:** #1

**DE:** berichten
**Current top-level EN:** To report

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
notikumiem

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "notikumiem"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 5

**Card ID:** b1-blase
**Production identity:** b1-blase
**Production index:** 455
**HIGH repair source:** #1

**DE:** Blase
**Current top-level EN:** Bladder

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Blase means blister, blister or bubble. It is usually a blister on the skin, a blister in the body, a bub

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Blase means blister, blister or bubble. It is usually a blister on the skin, a blister in the body, a bubble in water or air.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 6

**Card ID:** b1-blase
**Production identity:** b1-blase
**Production index:** 455
**HIGH repair source:** #1

**DE:** Blase
**Current top-level EN:** Bladder

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
tulzna

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "tulzna"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 7

**Card ID:** b1-bloß
**Production identity:** b1-bloß
**Production index:** 467
**HIGH repair source:** #1

**DE:** bloß
**Current top-level EN:** Only

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
tikai

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "tikai"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 8

**Card ID:** b1-bloß
**Production identity:** b1-bloß
**Production index:** 467
**HIGH repair source:** #1

**DE:** bloß
**Current top-level EN:** Only

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[1]



**CURRENT PRODUCTION:**
kails/pliks

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "kails/pliks"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 9

**Card ID:** b1-fördern
**Production identity:** b1-fördern
**Production index:** 932
**HIGH repair source:** #1

**DE:** fördern
**Current top-level EN:** Promote

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Das fördert die Entwicklung. = It promotes development.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Das fördert Entwicklung. = It promotes development.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 10

**Card ID:** b1-handeln
**Production identity:** b1-handeln
**Production index:** 1193
**HIGH repair source:** #1

**DE:** handeln
**Current top-level EN:** To act

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[1]



**CURRENT PRODUCTION:**
par ko ir teksts

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "par ko ir teksts"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 11

**Card ID:** b1-handeln
**Production identity:** b1-handeln
**Production index:** 1193
**HIGH repair source:** #1

**DE:** handeln
**Current top-level EN:** To act

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[2]



**CURRENT PRODUCTION:**
tirgojas

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "tirgojas"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 12

**Card ID:** b1-hort
**Production identity:** b1-hort
**Production index:** 1314
**HIGH repair source:** #1

**DE:** Hort
**Current top-level EN:** Extended day group • Children's day centre

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 13

**Card ID:** b1-jagen
**Production identity:** b1-jagen
**Production index:** 1406
**HIGH repair source:** #1

**DE:** jagen
**Current top-level EN:** To hunt

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Der Hund jagt die Katze. = The dog chases the cat.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Der Hund jagt Katze. = The dog chases the cat.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 14

**Card ID:** b1-jagen
**Production identity:** b1-jagen
**Production index:** 1406
**HIGH repair source:** #1

**DE:** jagen
**Current top-level EN:** To hunt

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
goals

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "goals"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 15

**Card ID:** b1-kader
**Production identity:** b1-kader
**Production index:** 1444
**HIGH repair source:** #1

**DE:** Kader
**Current top-level EN:** Composition • Core

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: der Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 16

**Card ID:** b1-kern
**Production identity:** b1-kern
**Production index:** 1497
**HIGH repair source:** #1

**DE:** Kern
**Current top-level EN:** Core

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: der Kern means kernel, seed/seed, or essence of a thing. It is used both for fruits and figuratively for the 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Kern means kernel, seed/seed, or essence of a thing. It is used both for fruits and figuratively for the most important idea.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 17

**Card ID:** b1-kern
**Production identity:** b1-kern
**Production index:** 1497
**HIGH repair source:** #1

**DE:** Kern
**Current top-level EN:** Core

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
in the fetus

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "in the fetus"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 18

**Card ID:** b1-kern
**Production identity:** b1-kern
**Production index:** 1497
**HIGH repair source:** #1

**DE:** Kern
**Current top-level EN:** Core

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[1]



**CURRENT PRODUCTION:**
in the case

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "in the case"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 19

**Card ID:** b1-kern
**Production identity:** b1-kern
**Production index:** 1497
**HIGH repair source:** #1

**DE:** Kern
**Current top-level EN:** Core

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[2]



**CURRENT PRODUCTION:**
in the argument

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "in the argument"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 20

**Card ID:** b1-kommando
**Production identity:** b1-kommando
**Production index:** 1570
**HIGH repair source:** #1

**DE:** Kommando
**Current top-level EN:** Command

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: das Kommando is a command or command, especially in a military, sporting or organised situation. It can also 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Kommando is a command or command, especially in a military, sporting or organised situation. It can also mean a control unit.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 21

**Card ID:** b1-kommando
**Production identity:** b1-kommando
**Production index:** 1570
**HIGH repair source:** #1

**DE:** Kommando
**Current top-level EN:** Command

**Affected field:** sectionAccents.comparison[0].example.purple



**CURRENT PRODUCTION:**
komandu

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "komandu"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 22

**Card ID:** b1-kurs
**Production identity:** b1-kurs
**Production index:** 1679
**HIGH repair source:** #1

**DE:** Kurs
**Current top-level EN:** Course

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
der Kurs

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Kurs

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 23

**Card ID:** b1-kurs
**Production identity:** b1-kurs
**Production index:** 1679
**HIGH repair source:** #1

**DE:** Kurs
**Current top-level EN:** Course

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
kurss

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "kurss"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 24

**Card ID:** b1-kurs
**Production identity:** b1-kurs
**Production index:** 1679
**HIGH repair source:** #1

**DE:** Kurs
**Current top-level EN:** Course

**Affected field:** sectionAccents.comparison[0].example.purple



**CURRENT PRODUCTION:**
Kurss

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Kurss"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 25

**Card ID:** b1-kurs
**Production identity:** b1-kurs
**Production index:** 1679
**HIGH repair source:** #1

**DE:** Kurs
**Current top-level EN:** Course

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
virziens

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "virziens"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 26

**Card ID:** b1-kurs
**Production identity:** b1-kurs
**Production index:** 1679
**HIGH repair source:** #1

**DE:** Kurs
**Current top-level EN:** Course

**Affected field:** sectionAccents.comparison[1].example.purple



**CURRENT PRODUCTION:**
Virziens

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Virziens"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 27

**Card ID:** b1-kurs
**Production identity:** b1-kurs
**Production index:** 1679
**HIGH repair source:** #1

**DE:** Kurs
**Current top-level EN:** Course

**Affected field:** sectionAccents.comparison[2].example.purple



**CURRENT PRODUCTION:**
Stunda

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Stunda"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 28

**Card ID:** b1-kastanie
**Production identity:** b1-kastanie
**Production index:** 1711
**HIGH repair source:** #1

**DE:** Kastanie
**Current top-level EN:** Chestnut

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Kastanie can mean both the chestnut tree and the chestnut fruit itself. The context shows which meaning i

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Kastanie can mean both the chestnut tree and the chestnut fruit itself. The context shows which meaning is intended.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 29

**Card ID:** b1-kastanie
**Production identity:** b1-kastanie
**Production index:** 1711
**HIGH repair source:** #1

**DE:** Kastanie
**Current top-level EN:** Chestnut

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
kastanis

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "kastanis"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 30

**Card ID:** b1-kastanie
**Production identity:** b1-kastanie
**Production index:** 1711
**HIGH repair source:** #1

**DE:** Kastanie
**Current top-level EN:** Chestnut

**Affected field:** sectionAccents.comparison[0].example.purple



**CURRENT PRODUCTION:**
Kastanis

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Kastanis"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 31

**Card ID:** b1-kastanie
**Production identity:** b1-kastanie
**Production index:** 1711
**HIGH repair source:** #1

**DE:** Kastanie
**Current top-level EN:** Chestnut

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
rieksts

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "rieksts"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 32

**Card ID:** b1-kastanie
**Production identity:** b1-kastanie
**Production index:** 1711
**HIGH repair source:** #1

**DE:** Kastanie
**Current top-level EN:** Chestnut

**Affected field:** sectionAccents.comparison[2].example.purple



**CURRENT PRODUCTION:**
Rieksts

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Rieksts"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 33

**Card ID:** b1-rasen
**Production identity:** b1-rasen
**Production index:** 2216
**HIGH repair source:** #1

**DE:** rasen
**Current top-level EN:** To ionise

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
If speed sounds too fast, fast is often enough.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** NATURALNESS

**LUNA REGRESSION RECOMMENDED:**
If speed sounds too fast is often enough.

**REASON:**
Repeated word: fast, fast

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 34

**Card ID:** b1-rasen
**Production identity:** b1-rasen
**Production index:** 2216
**HIGH repair source:** #1

**DE:** rasen
**Current top-level EN:** To ionise

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
braukt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "braukt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 35

**Card ID:** b1-rasen
**Production identity:** b1-rasen
**Production index:** 2216
**HIGH repair source:** #1

**DE:** rasen
**Current top-level EN:** To ionise

**Affected field:** sectionAccents.tip.red



**CURRENT PRODUCTION:**
too big

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "too big"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 36

**Card ID:** b1-rasen
**Production identity:** b1-rasen
**Production index:** 2216
**HIGH repair source:** #1

**DE:** rasen
**Current top-level EN:** To ionise

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
braukt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "braukt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 37

**Card ID:** b1-schale
**Production identity:** b1-schale
**Production index:** 2405
**HIGH repair source:** #1

**DE:** Schale
**Current top-level EN:** Bark

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: die Schale is the rind, shell, or outer covering of a fruit. It can also mean a bowl or vessel.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Schale is the rind, shell, or outer covering of a fruit. It can also mean a bowl or vessel.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 38

**Card ID:** b1-schale
**Production identity:** b1-schale
**Production index:** 2405
**HIGH repair source:** #1

**DE:** Schale
**Current top-level EN:** Bark

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
miza

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "miza"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 39

**Card ID:** b1-schlag
**Production identity:** b1-schlag
**Production index:** 2447
**HIGH repair source:** #1

**DE:** Schlag
**Current top-level EN:** A blow

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: der Schlag means a blow or blow. In context, it can also be a lightning strike, a clock strike, or a type.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Schlag means a blow or blow. In context, it can also be a lightning strike, a clock strike, or a type.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 40

**Card ID:** b1-schlag
**Production identity:** b1-schlag
**Production index:** 2447
**HIGH repair source:** #1

**DE:** Schlag
**Current top-level EN:** A blow

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
nosit

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "nosit"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 41

**Card ID:** b1-schlag
**Production identity:** b1-schlag
**Production index:** 2447
**HIGH repair source:** #1

**DE:** Schlag
**Current top-level EN:** A blow

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
sitiens

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "sitiens"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 42

**Card ID:** b1-schlag
**Production identity:** b1-schlag
**Production index:** 2447
**HIGH repair source:** #1

**DE:** Schlag
**Current top-level EN:** A blow

**Affected field:** sectionAccents.comparison[1].example.red



**CURRENT PRODUCTION:**
Stoß

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Stoß"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 43

**Card ID:** b1-schlag
**Production identity:** b1-schlag
**Production index:** 2447
**HIGH repair source:** #1

**DE:** Schlag
**Current top-level EN:** A blow

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
zibens

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "zibens"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 44

**Card ID:** b1-senken
**Production identity:** b1-senken
**Production index:** 2603
**HIGH repair source:** #1

**DE:** senken
**Current top-level EN:** To lower

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
To lower, lower

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** NATURALNESS

**LUNA REGRESSION RECOMMENDED:**
To lower

**REASON:**
Repeated word: lower, lower

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 45

**Card ID:** b1-senken
**Production identity:** b1-senken
**Production index:** 2603
**HIGH repair source:** #1

**DE:** senken
**Current top-level EN:** To lower

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Die Firma senkt die Preise. = The company lowers prices.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Die Firma senkt Preise. = The company lowers prices.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 46

**Card ID:** b1-senken
**Production identity:** b1-senken
**Production index:** 2603
**HIGH repair source:** #1

**DE:** senken
**Current top-level EN:** To lower

**Affected field:** sectionAccents.examples[1].lv.red



**CURRENT PRODUCTION:**
noliec

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "noliec"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 47

**Card ID:** b1-senken
**Production identity:** b1-senken
**Production index:** 2603
**HIGH repair source:** #1

**DE:** senken
**Current top-level EN:** To lower

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
pieklusiniet

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "pieklusiniet"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 48

**Card ID:** b1-senken
**Production identity:** b1-senken
**Production index:** 2603
**HIGH repair source:** #1

**DE:** senken
**Current top-level EN:** To lower

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
kristies

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "kristies"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 49

**Card ID:** b1-senken
**Production identity:** b1-senken
**Production index:** 2603
**HIGH repair source:** #1

**DE:** senken
**Current top-level EN:** To lower

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
pacelt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "pacelt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 50

**Card ID:** b1-sich-sorgen
**Production identity:** b1-sich-sorgen
**Production index:** 2655
**HIGH repair source:** #1

**DE:** sich sorgen
**Current top-level EN:** To worry

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich kümmere mich um das Kind. = I take care of the child.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich kümmere mich um Kind. = I take care of the child.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 51

**Card ID:** b1-stellung
**Production identity:** b1-stellung
**Production index:** 2743
**HIGH repair source:** #1

**DE:** Stellung
**Current top-level EN:** Condition

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Stellung means position or condition. It is used for body posture, workplace and stance.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Stellung means position or condition. It is used for body posture, workplace and stance.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 52

**Card ID:** b1-stellung
**Production identity:** b1-stellung
**Production index:** 2743
**HIGH repair source:** #1

**DE:** Stellung
**Current top-level EN:** Condition

**Affected field:** sectionAccents.examples[1].lv.red



**CURRENT PRODUCTION:**
darba vietu

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "darba vietu"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 53

**Card ID:** b1-stellung
**Production identity:** b1-stellung
**Production index:** 2743
**HIGH repair source:** #1

**DE:** Stellung
**Current top-level EN:** Condition

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
darbavieta

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "darbavieta"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 54

**Card ID:** b1-stellung
**Production identity:** b1-stellung
**Production index:** 2743
**HIGH repair source:** #1

**DE:** Stellung
**Current top-level EN:** Condition

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
darba vietu

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "darba vietu"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 55

**Card ID:** b1-tank
**Production identity:** b1-tank
**Production index:** 2841
**HIGH repair source:** #1

**DE:** Tank
**Current top-level EN:** Tank

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: der Tank is usually a fuel or liquid tank. In a military context, the more common German word for tank is der

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Tank is usually a fuel or liquid tank. In a military context, the more common German word for tank is der Panzer.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 56

**Card ID:** b1-tank
**Production identity:** b1-tank
**Production index:** 2841
**HIGH repair source:** #1

**DE:** Tank
**Current top-level EN:** Tank

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
Tanks

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Tanks"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 57

**Card ID:** b1-tank
**Production identity:** b1-tank
**Production index:** 2841
**HIGH repair source:** #1

**DE:** Tank
**Current top-level EN:** Tank

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
tvertne

**REGRESSION VERDICT:** FAIL

**SEVERITY:** HIGH
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Replace with matching English token from target field

**REASON:**
Latvian/source token in sectionAccent: "tvertne"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 58

**Card ID:** b1-tank
**Production identity:** b1-tank
**Production index:** 2841
**HIGH repair source:** #1

**DE:** Tank
**Current top-level EN:** Tank

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
tvertne

**REGRESSION VERDICT:** FAIL

**SEVERITY:** HIGH
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Replace with matching English token from target field

**REASON:**
Latvian/source token in sectionAccent: "tvertne"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 59

**Card ID:** b1-tank
**Production identity:** b1-tank
**Production index:** 2841
**HIGH repair source:** #1

**DE:** Tank
**Current top-level EN:** Tank

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
tanks

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "tanks"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 60

**Card ID:** b1-tank
**Production identity:** b1-tank
**Production index:** 2841
**HIGH repair source:** #1

**DE:** Tank
**Current top-level EN:** Tank

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
tvertne

**REGRESSION VERDICT:** FAIL

**SEVERITY:** HIGH
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Replace with matching English token from target field

**REASON:**
Latvian/source token in sectionAccent: "tvertne"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 61

**Card ID:** b1-verlegen
**Production identity:** b1-verlegen
**Production index:** 3088
**HIGH repair source:** #1

**DE:** verlegen
**Current top-level EN:** To move

**Affected field:** sectionAccents.examples[1].lv.red



**CURRENT PRODUCTION:**
nevaru to atrast

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "nevaru to atrast"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 62

**Card ID:** b1-verlegen
**Production identity:** b1-verlegen
**Production index:** 3088
**HIGH repair source:** #1

**DE:** verlegen
**Current top-level EN:** To move

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
izdod

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "izdod"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 63

**Card ID:** b1-bildschirm
**Production identity:** b1-bildschirm
**Production index:** 443
**HIGH repair source:** #11

**DE:** Bildschirm
**Current top-level EN:** Screen

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: d

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: die Bildschirme.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 64

**Card ID:** b1-block
**Production identity:** b1-block
**Production index:** 465
**HIGH repair source:** #11

**DE:** Block
**Current top-level EN:** Block

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Block means block or notepad. In the context of the material, it can be a lump or a large piece.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Block means block or notepad. In the context of the material, it can be a lump or a large piece.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 65

**Card ID:** b1-bogen
**Production identity:** b1-bogen
**Production index:** 474
**HIGH repair source:** #11

**DE:** Bogen
**Current top-level EN:** Bow

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Bogen means bow. Depending on the context, it can also be an arch or a page, such as Fragebogen.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Bogen means bow. Depending on the context, it can also be an arch or a page, such as Fragebogen.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 66

**Card ID:** b1-dahin
**Production identity:** b1-dahin
**Production index:** 556
**HIGH repair source:** #11

**DE:** dahin
**Current top-level EN:** There / to there

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Daher kommt das Problem. = That's where the problem comes from.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Daher kommt Problem. = That's where the problem comes from.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 67

**Card ID:** b1-darstellen
**Production identity:** b1-darstellen
**Production index:** 563
**HIGH repair source:** #11

**DE:** darstellen
**Current top-level EN:** To represent

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich zeige dir das Bild. = I show you a picture.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich zeige dir Bild. = I show you a picture.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 68

**Card ID:** b1-decken
**Production identity:** b1-decken
**Production index:** 570
**HIGH repair source:** #11

**DE:** decken
**Current top-level EN:** To cover

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich decke das Kind zu. = I covered the baby.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich decke Kind zu. = I covered the baby.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 69

**Card ID:** b1-dienen
**Production identity:** b1-dienen
**Production index:** 588
**HIGH repair source:** #11

**DE:** dienen
**Current top-level EN:** To serve

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich nutze das Programm. = I use the programme.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich nutze Programm. = I use the programme.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 70

**Card ID:** b1-durchführen
**Production identity:** b1-durchführen
**Production index:** 628
**HIGH repair source:** #11

**DE:** durchführen
**Current top-level EN:** Perform

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich mache die Arbeit. = I do the work.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich mache Arbeit. = I do the work.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 71

**Card ID:** b1-einfluss
**Production identity:** b1-einfluss
**Production index:** 672
**HIGH repair source:** #11

**DE:** Einfluss
**Current top-level EN:** Influence

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Einfluss means influence on a person, decision, or situation. A very common construction is Einfluss auf 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Einfluss means influence on a person, decision, or situation. A very common construction is Einfluss auf + accusative.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 72

**Card ID:** b1-einführen
**Production identity:** b1-einführen
**Production index:** 674
**HIGH repair source:** #11

**DE:** einführen
**Current top-level EN:** To introduce

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich stelle das Projekt vor. = I present the project.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich stelle Projekt vor. = I present the project.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 73

**Card ID:** b1-einführung
**Production identity:** b1-einführung
**Production index:** 675
**HIGH repair source:** #11

**DE:** Einführung
**Current top-level EN:** Introduction

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Einführung means introduction or implementation. In a text or course, it is an introduction; for a new sy

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Einführung means introduction or implementation. In a text or course, it is an introduction; for a new system, rule, or product, it can mean implementation.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 74

**Card ID:** b1-sich-eingewöhnen
**Production identity:** b1-sich-eingewöhnen
**Production index:** 676
**HIGH repair source:** #11

**DE:** sich eingewöhnen
**Current top-level EN:** Get used to

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich gewöhne mich an das Klima. = I'm getting used to the climate.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich gewöhne mich an Klima. = I'm getting used to the climate.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 75

**Card ID:** b1-einhalten
**Production identity:** b1-einhalten
**Production index:** 677
**HIGH repair source:** #11

**DE:** einhalten
**Current top-level EN:** To observe

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Wir halten die Frist ein. = We meet the deadline.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Wir halten Frist ein. = We meet the deadline.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 76

**Card ID:** b1-einheit
**Production identity:** b1-einheit
**Production index:** 679
**HIGH repair source:** #11

**DE:** Einheit
**Current top-level EN:** Unit

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Einheit means a unit. It can be a unit of study, a technical unit, or a unit of measurement depending on 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Einheit means a unit. It can be a unit of study, a technical unit, or a unit of measurement depending on the context.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 77

**Card ID:** b1-einholen
**Production identity:** b1-einholen
**Production index:** 682
**HIGH repair source:** #11

**DE:** einholen
**Current top-level EN:** Collect

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich hole das Kind ab. = I will go after the child.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich hole Kind ab. = I will go after the child.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 78

**Card ID:** b1-einsatz
**Production identity:** b1-einsatz
**Production index:** 701
**HIGH repair source:** #11

**DE:** Einsatz
**Current top-level EN:** Use

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Einsatz means active use or involvement in a particular situation. Common phrases are im Einsatz and zum 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Einsatz means active use or involvement in a particular situation. Common phrases are im Einsatz and zum Einsatz kommen. In games, Einsatz can also mean a stake.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 79

**Card ID:** b1-einsetzen
**Production identity:** b1-einsetzen
**Production index:** 708
**HIGH repair source:** #11

**DE:** einsetzen
**Current top-level EN:** To use

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Wir setzen die Software ein. = We use software.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Wir setzen Software ein. = We use software.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 80

**Card ID:** b1-empfangen
**Production identity:** b1-empfangen
**Production index:** 740
**HIGH repair source:** #11

**DE:** empfangen
**Current top-level EN:** To receive

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich begrüße die Gäste. = I welcome guests.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich begrüße Gäste. = I welcome guests.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 81

**Card ID:** b1-entfernen
**Production identity:** b1-entfernen
**Production index:** 750
**HIGH repair source:** #11

**DE:** entfernen
**Current top-level EN:** Remove

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Entfernen Sie die Datei. = Delete the file.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Entfernen Sie Datei. = Delete the file.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 82

**Card ID:** b1-enthalten
**Production identity:** b1-enthalten
**Production index:** 754
**HIGH repair source:** #11

**DE:** enthalten
**Current top-level EN:** To contain

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich halte die Tasche. = I'm holding a bag.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich halte Tasche. = I'm holding a bag.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 83

**Card ID:** b1-entsprechen
**Production identity:** b1-entsprechen
**Production index:** 761
**HIGH repair source:** #11

**DE:** entsprechen
**Current top-level EN:** Corresponds to

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Sie antwortet auf die Frage. = She answers the question.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Sie antwortet auf Frage. = She answers the question.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 84

**Card ID:** b1-eröffnen
**Production identity:** b1-eröffnen
**Production index:** 813
**HIGH repair source:** #11

**DE:** eröffnen
**Current top-level EN:** To open

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich öffne die Tür. = I open the door.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich öffne Tür. = I open the door.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 85

**Card ID:** b1-ersetzen
**Production identity:** b1-ersetzen
**Production index:** 821
**HIGH repair source:** #11

**DE:** ersetzen
**Current top-level EN:** To replace

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Wir tauschen das Teil aus. = We replace the part.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Wir tauschen Teil aus. = We replace the part.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 86

**Card ID:** b1-fassen
**Production identity:** b1-fassen
**Production index:** 869
**HIGH repair source:** #11

**DE:** fassen
**Current top-level EN:** To grasp

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Er greift nach der Tasche. = He reaches for his bag.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Er greift nach Tasche. = He reaches for his bag.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 87

**Card ID:** b1-festhalten
**Production identity:** b1-festhalten
**Production index:** 889
**HIGH repair source:** #11

**DE:** festhalten
**Current top-level EN:** Hold tight

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Halte das Seil fest. = Hold the rope tight.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Halte Seil fest. = Hold the rope tight.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 88

**Card ID:** b1-festlegen
**Production identity:** b1-festlegen
**Production index:** 890
**HIGH repair source:** #11

**DE:** festlegen
**Current top-level EN:** Determine

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Der Arzt bestimmt die Dosis. = The doctor determines the dose.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Der Arzt bestimmt Dosis. = The doctor determines the dose.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 89

**Card ID:** b1-folge
**Production identity:** b1-folge
**Production index:** 929
**HIGH repair source:** #11

**DE:** Folge
**Current top-level EN:** Consequences

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: die Folge most often means a consequence or result that follows an event. In a media context, Folge means an 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Folge most often means a consequence or result that follows an event. In a media context, Folge means an episode of a series, programme or podcast.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 90

**Card ID:** b1-futter
**Production identity:** b1-futter
**Production index:** 972
**HIGH repair source:** #11

**DE:** Futter
**Current top-level EN:** Feed

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: das Futter usually means animal food. In the context of clothing, Futter means the lining of a jacket, coat, 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Futter usually means animal food. In the context of clothing, Futter means the lining of a jacket, coat, or bag.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 91

**Card ID:** b1-gehalt
**Production identity:** b1-gehalt
**Production index:** 1027
**HIGH repair source:** #11

**DE:** Gehalt
**Current top-level EN:** Salary

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: das Gehalt means salary or wages. Der Gehalt, on the other hand, means content—the essence of a letter, speec

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Gehalt means salary or wages. Der Gehalt, on the other hand, means content—the essence of a letter, speech, or contract. The article completely changes the meaning and the plural.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 92

**Card ID:** b1-geschlecht
**Production identity:** b1-geschlecht
**Production index:** 1086
**HIGH repair source:** #12

**DE:** Geschlecht
**Current top-level EN:** Gender

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: das Geschlecht means gender in humans or animals. In the grammar of the language, it means gender, such as ma

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Geschlecht means gender in humans or animals. In the grammar of the language, it means gender, such as masculine, feminine, or neuter gender.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 93

**Card ID:** b1-gewinn
**Production identity:** b1-gewinn
**Production index:** 1105
**HIGH repair source:** #12

**DE:** Gewinn
**Current top-level EN:** Profit

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Gewinn means profit - money left over after costs. In games, contests, and lotteries, it means a win or a

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Gewinn means profit - money left over after costs. In games, contests, and lotteries, it means a win or a prize.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 94

**Card ID:** b1-sich-gewöhnen
**Production identity:** b1-sich-gewöhnen
**Production index:** 1110
**HIGH repair source:** #12

**DE:** sich gewöhnen
**Current top-level EN:** Get used to

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich gewöhne das Kind daran. = I am getting the child used to it.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich gewöhne Kind daran. = I am getting the child used to it.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 95

**Card ID:** b1-gitter
**Production identity:** b1-gitter
**Production index:** 1115
**HIGH repair source:** #12

**DE:** Gitter
**Current top-level EN:** Grid

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: das Gitter means grid or grate - a structure with openings near a window, door, cage or ventilation.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Gitter means grid or grate - a structure with openings near a window, door, cage or ventilation.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 96

**Card ID:** b1-greifen
**Production identity:** b1-greifen
**Production index:** 1140
**HIGH repair source:** #12

**DE:** greifen
**Current top-level EN:** To grasp

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Nimm bitte das Glas. = Take a glass, please.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Nimm bitte Glas. = Take a glass, please.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 97

**Card ID:** b1-griff
**Production identity:** b1-griff
**Production index:** 1144
**HIGH repair source:** #12

**DE:** Griff
**Current top-level EN:** The handle

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can a

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can also be a grip.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 98

**Card ID:** b1-herausgeben
**Production identity:** b1-herausgeben
**Production index:** 1247
**HIGH repair source:** #12

**DE:** herausgeben
**Current top-level EN:** Issue

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich gebe das Buch zurück. = I return the book.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich gebe Buch zurück. = I return the book.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 99

**Card ID:** b1-hinweis
**Production identity:** b1-hinweis
**Production index:** 1276
**HIGH repair source:** #12

**DE:** Hinweis
**Current top-level EN:** Instruction

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Hinweis is an instruction, note, or piece of information that helps you notice, understand, or find somet

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Hinweis is an instruction, note, or piece of information that helps you notice, understand, or find something.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 100

**Card ID:** b1-horchen
**Production identity:** b1-horchen
**Production index:** 1309
**HIGH repair source:** #12

**DE:** horchen
**Current top-level EN:** To listen

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Sie horcht an der Tür. = She listens at the door.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Sie horcht an Tür. = She listens at the door.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 101

**Card ID:** b1-hupe
**Production identity:** b1-hupe
**Production index:** 1329
**HIGH repair source:** #12

**DE:** Hupe
**Current top-level EN:** Horn

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Hupe is a car horn or a ship's horn. It warns others in traffic. Plural: die Hupen.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Hupe is a car horn or a ship's horn. It warns others in traffic. Plural: die Hupen.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 102

**Card ID:** b1-kiefer
**Production identity:** b1-kiefer
**Production index:** 1503
**HIGH repair source:** #12

**DE:** Kiefer
**Current top-level EN:** Jaw

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Kiefer means jaw. With another article, die Kiefer means pine, so the article is especially important for

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Kiefer means jaw. With another article, die Kiefer means pine, so the article is especially important for this card.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 103

**Card ID:** b1-kippen
**Production identity:** b1-kippen
**Production index:** 1508
**HIGH repair source:** #12

**DE:** kippen
**Current top-level EN:** Overturn

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Dreh die Karte um. = Flip the card over.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Dreh Karte um. = Flip the card over.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 104

**Card ID:** b1-kreuzen
**Production identity:** b1-kreuzen
**Production index:** 1634
**HIGH repair source:** #12

**DE:** kreuzen
**Current top-level EN:** To cross

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Wir überqueren die Straße. = We cross the street.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Wir überqueren Straße. = We cross the street.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 105

**Card ID:** b1-kreuzen
**Production identity:** b1-kreuzen
**Production index:** 1634
**HIGH repair source:** #12

**DE:** kreuzen
**Current top-level EN:** To cross

**Affected field:** sectionAccents.comparison[1].example.red



**CURRENT PRODUCTION:**
überqueren

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "überqueren"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 106

**Card ID:** b1-kreuzen
**Production identity:** b1-kreuzen
**Production index:** 1634
**HIGH repair source:** #12

**DE:** kreuzen
**Current top-level EN:** To cross

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
to mark

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "to mark"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 107

**Card ID:** b1-kündigen
**Production identity:** b1-kündigen
**Production index:** 1665
**HIGH repair source:** #12

**DE:** kündigen
**Current top-level EN:** To quit one’s job / to give notice

**Affected field:** sectionAccents.comparison[0].example.purple



**CURRENT PRODUCTION:**
break

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "break"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 108

**Card ID:** b1-kündigen
**Production identity:** b1-kündigen
**Production index:** 1665
**HIGH repair source:** #12

**DE:** kündigen
**Current top-level EN:** To quit one’s job / to give notice

**Affected field:** sectionAccents.comparison[1].example.purple



**CURRENT PRODUCTION:**
dismissed

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "dismissed"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 109

**Card ID:** b1-kündigen
**Production identity:** b1-kündigen
**Production index:** 1665
**HIGH repair source:** #12

**DE:** kündigen
**Current top-level EN:** To quit one’s job / to give notice

**Affected field:** sectionAccents.comparison[2].example.purple



**CURRENT PRODUCTION:**
I stopped

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "I stopped"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 110

**Card ID:** b1-kuppeln
**Production identity:** b1-kuppeln
**Production index:** 1675
**HIGH repair source:** #12

**DE:** kuppeln
**Current top-level EN:** To connect

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Das Kabel verbindet die Geräte. = The cable connects the devices.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Das Kabel verbindet Geräte. = The cable connects the devices.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 111

**Card ID:** b1-kuppeln
**Production identity:** b1-kuppeln
**Production index:** 1675
**HIGH repair source:** #12

**DE:** kuppeln
**Current top-level EN:** To connect

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
savienot

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "savienot"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 112

**Card ID:** b1-laden
**Production identity:** b1-laden
**Production index:** 1700
**HIGH repair source:** #12

**DE:** laden
**Current top-level EN:** To load

**Affected field:** sectionAccents.comparison[2].example.purple



**CURRENT PRODUCTION:**
piekrauts

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "piekrauts"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 113

**Card ID:** b1-lager
**Production identity:** b1-lager
**Production index:** 1704
**HIGH repair source:** #12

**DE:** Lager
**Current top-level EN:** Warehouse

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: das Lager is usually a warehouse or storage place. In another context, it may be a camp or technical bearing.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Lager is usually a warehouse or storage place. In another context, it may be a camp or technical bearing.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 114

**Card ID:** b1-lager
**Production identity:** b1-lager
**Production index:** 1704
**HIGH repair source:** #12

**DE:** Lager
**Current top-level EN:** Warehouse

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
noliktava

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "noliktava"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 115

**Card ID:** b1-lager
**Production identity:** b1-lager
**Production index:** 1704
**HIGH repair source:** #12

**DE:** Lager
**Current top-level EN:** Warehouse

**Affected field:** sectionAccents.comparison[2].example.purple



**CURRENT PRODUCTION:**
Nometne

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Nometne"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 116

**Card ID:** b1-inhalt
**Production identity:** b1-inhalt
**Production index:** 1709
**HIGH repair source:** #12

**DE:** Inhalt
**Current top-level EN:** Content

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Inhalt is content - in a text, a bag, a container or a file. Technically, it can also mean volume.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Inhalt is content - in a text, a bag, a container or a file. Technically, it can also mean volume.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 117

**Card ID:** b1-kante
**Production identity:** b1-kante
**Production index:** 1710
**HIGH repair source:** #12

**DE:** Kante
**Current top-level EN:** Edge

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp or clearly defined edge.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 118

**Card ID:** b1-kante
**Production identity:** b1-kante
**Production index:** 1710
**HIGH repair source:** #12

**DE:** Kante
**Current top-level EN:** Edge

**Affected field:** sectionAccents.comparison[0].example.purple



**CURRENT PRODUCTION:**
Mala

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Mala"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 119

**Card ID:** b1-kante
**Production identity:** b1-kante
**Production index:** 1710
**HIGH repair source:** #12

**DE:** Kante
**Current top-level EN:** Edge

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
mala

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "mala"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 120

**Card ID:** b1-landen
**Production identity:** b1-landen
**Production index:** 1715
**HIGH repair source:** #12

**DE:** landen
**Current top-level EN:** To land

**Affected field:** sectionAccents.comparison[0].example.blue



**CURRENT PRODUCTION:**
landet

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "landet"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 121

**Card ID:** b1-landen
**Production identity:** b1-landen
**Production index:** 1715
**HIGH repair source:** #12

**DE:** landen
**Current top-level EN:** To land

**Affected field:** sectionAccents.comparison[0].example.purple



**CURRENT PRODUCTION:**
sits down

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "sits down"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 122

**Card ID:** b1-landen
**Production identity:** b1-landen
**Production index:** 1715
**HIGH repair source:** #12

**DE:** landen
**Current top-level EN:** To land

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
arrive

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "arrive"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 123

**Card ID:** b1-landen
**Production identity:** b1-landen
**Production index:** 1715
**HIGH repair source:** #12

**DE:** landen
**Current top-level EN:** To land

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
dock with a ship

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "dock with a ship"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 124

**Card ID:** b1-landen
**Production identity:** b1-landen
**Production index:** 1715
**HIGH repair source:** #12

**DE:** landen
**Current top-level EN:** To land

**Affected field:** sectionAccents.comparison[2].example.red



**CURRENT PRODUCTION:**
legt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "legt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 125

**Card ID:** b1-landen
**Production identity:** b1-landen
**Production index:** 1715
**HIGH repair source:** #12

**DE:** landen
**Current top-level EN:** To land

**Affected field:** sectionAccents.comparison[2].example.purple



**CURRENT PRODUCTION:**
stops by

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "stops by"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 126

**Card ID:** b1-leisten
**Production identity:** b1-leisten
**Production index:** 1761
**HIGH repair source:** #12

**DE:** leisten
**Current top-level EN:** Perform

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
veikt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "veikt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 127

**Card ID:** b1-leisten
**Production identity:** b1-leisten
**Production index:** 1761
**HIGH repair source:** #12

**DE:** leisten
**Current top-level EN:** Perform

**Affected field:** sectionAccents.comparison[0].example.purple



**CURRENT PRODUCTION:**
veic

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "veic"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 128

**Card ID:** b1-leisten
**Production identity:** b1-leisten
**Production index:** 1761
**HIGH repair source:** #12

**DE:** leisten
**Current top-level EN:** Perform

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
paveikt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "paveikt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 129

**Card ID:** b1-leistung
**Production identity:** b1-leistung
**Production index:** 1762
**HIGH repair source:** #12

**DE:** Leistung
**Current top-level EN:** An achievement

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Leistung means performance, accomplishment or achievement. In engineering, it means power, for example fo

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Leistung means performance, accomplishment or achievement. In engineering, it means power, for example for a motor or a device.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 130

**Card ID:** b1-locker
**Production identity:** b1-locker
**Production index:** 1791
**HIGH repair source:** #12

**DE:** locker
**Current top-level EN:** Loose

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Tight, tight

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** NATURALNESS

**LUNA REGRESSION RECOMMENDED:**
Tight

**REASON:**
Repeated word: Tight, tight

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 131

**Card ID:** b1-locker
**Production identity:** b1-locker
**Production index:** 1791
**HIGH repair source:** #12

**DE:** locker
**Current top-level EN:** Loose

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
stingrs

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "stingrs"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 132

**Card ID:** b1-los
**Production identity:** b1-los
**Production index:** 1798
**HIGH repair source:** #12

**DE:** Los
**Current top-level EN:** Lot

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: das Los is a lottery ticket or lot that is drawn or bought. In a more serious, figurative language, it can al

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Los is a lottery ticket or lot that is drawn or bought. In a more serious, figurative language, it can also mean the fate of a person.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 133

**Card ID:** b1-los
**Production identity:** b1-los
**Production index:** 1798
**HIGH repair source:** #12

**DE:** Los
**Current top-level EN:** Lot

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
likteni

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "likteni"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 134

**Card ID:** b1-macht
**Production identity:** b1-macht
**Production index:** 1814
**HIGH repair source:** #12

**DE:** Macht
**Current top-level EN:** Power

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: die Macht means the power or ability to influence people, decisions, and policies. Die Kraft is usually used 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Macht means the power or ability to influence people, decisions, and policies. Die Kraft is usually used for physical strength.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 135

**Card ID:** b1-macht
**Production identity:** b1-macht
**Production index:** 1814
**HIGH repair source:** #12

**DE:** Macht
**Current top-level EN:** Power

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
vara

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "vara"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 136

**Card ID:** b1-macht
**Production identity:** b1-macht
**Production index:** 1814
**HIGH repair source:** #12

**DE:** Macht
**Current top-level EN:** Power

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
ietekme

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "ietekme"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 137

**Card ID:** b1-maß
**Production identity:** b1-maß
**Production index:** 1844
**HIGH repair source:** #12

**DE:** Maß
**Current top-level EN:** Measure

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: das Maß means measure, limit or extent. In the plural, die Maße usually means dimensions.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Maß means measure, limit or extent. In the plural, die Maße usually means dimensions.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 138

**Card ID:** b1-maß
**Production identity:** b1-maß
**Production index:** 1844
**HIGH repair source:** #12

**DE:** Maß
**Current top-level EN:** Measure

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
action / measure

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "action / measure"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 139

**Card ID:** b1-nachfrage
**Production identity:** b1-nachfrage
**Production index:** 1943
**HIGH repair source:** #12

**DE:** Nachfrage
**Current top-level EN:** Request

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inq

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 140

**Card ID:** b1-neigung
**Production identity:** b1-neigung
**Production index:** 1973
**HIGH repair source:** #12

**DE:** Neigung
**Current top-level EN:** Inclination

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Neigung means a tendency or inclination towards something. In a technical context, it can also mean slope

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Neigung means a tendency or inclination towards something. In a technical context, it can also mean slope.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 141

**Card ID:** b1-neigung
**Production identity:** b1-neigung
**Production index:** 1973
**HIGH repair source:** #12

**DE:** Neigung
**Current top-level EN:** Inclination

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
interese

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "interese"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 142

**Card ID:** b1-nerven
**Production identity:** b1-nerven
**Production index:** 1976
**HIGH repair source:** #12

**DE:** nerven
**Current top-level EN:** To annoy

**Affected field:** sectionAccents.comparison[2].example.red



**CURRENT PRODUCTION:**
ärgert

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "ärgert"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 143

**Card ID:** b1-nüchtern
**Production identity:** b1-nüchtern
**Production index:** 1999
**HIGH repair source:** #12

**DE:** nüchtern
**Current top-level EN:** Not drunk

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
neiereibis

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "neiereibis"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 144

**Card ID:** b1-objekt
**Production identity:** b1-objekt
**Production index:** 2010
**HIGH repair source:** #12

**DE:** Objekt
**Current top-level EN:** Object

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: das Objekt is the object, thing or building that is being talked about. In grammar, Objekt means object.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Objekt is the object, thing or building that is being talked about. In grammar, Objekt means object.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 145

**Card ID:** b1-objekt
**Production identity:** b1-objekt
**Production index:** 2010
**HIGH repair source:** #12

**DE:** Objekt
**Current top-level EN:** Object

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
objekts

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "objekts"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 146

**Card ID:** b1-objekt
**Production identity:** b1-objekt
**Production index:** 2010
**HIGH repair source:** #12

**DE:** Objekt
**Current top-level EN:** Object

**Affected field:** sectionAccents.tip.red



**CURRENT PRODUCTION:**
subjekts

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "subjekts"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 147

**Card ID:** b1-periode
**Production identity:** b1-periode
**Production index:** 2080
**HIGH repair source:** #12

**DE:** Periode
**Current top-level EN:** Period

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Periode means a period of time or a cycle. In medicine and in everyday life, it can mean menstruation.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Periode means a period of time or a cycle. In medicine and in everyday life, it can mean menstruation.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 148

**Card ID:** b1-pflegen
**Production identity:** b1-pflegen
**Production index:** 2099
**HIGH repair source:** #12

**DE:** pflegen
**Current top-level EN:** To take care of; to tend

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Er kümmert sich um das Kind. = He takes care of the child.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Er kümmert sich um Kind. = He takes care of the child.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 149

**Card ID:** b1-probe
**Production identity:** b1-probe
**Production index:** 2165
**HIGH repair source:** #12

**DE:** Probe
**Current top-level EN:** Test; sample; rehearsal

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Probe means test, sample or attempt. The meaning is determined by the situation.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Probe means test, sample or attempt. The meaning is determined by the situation.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 150

**Card ID:** b1-probe
**Production identity:** b1-probe
**Production index:** 2165
**HIGH repair source:** #12

**DE:** Probe
**Current top-level EN:** Test; sample; rehearsal

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
an attempt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "an attempt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 151

**Card ID:** b1-rang
**Production identity:** b1-rang
**Production index:** 2213
**HIGH repair source:** #12

**DE:** Rang
**Current top-level EN:** Rank

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: der Rang means rank, level, or place in a hierarchy. In a theatre, this may mean the balcony level.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Rang means rank, level, or place in a hierarchy. In a theatre, this may mean the balcony level.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 152

**Card ID:** b1-rang
**Production identity:** b1-rang
**Production index:** 2213
**HIGH repair source:** #12

**DE:** Rang
**Current top-level EN:** Rank

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
on the balcony

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "on the balcony"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 153

**Card ID:** b1-rang
**Production identity:** b1-rang
**Production index:** 2213
**HIGH repair source:** #12

**DE:** Rang
**Current top-level EN:** Rank

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
In the theatre

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "In the theatre"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 154

**Card ID:** b1-rate
**Production identity:** b1-rate
**Production index:** 2225
**HIGH repair source:** #12

**DE:** Rate
**Current top-level EN:** Installment

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Rate is a regular part of a payment, such as an installment purchase. der Rat with one -e means advice.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Rate is a regular part of a payment, such as an installment purchase. der Rat with one -e means advice.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 155

**Card ID:** b1-rate
**Production identity:** b1-rate
**Production index:** 2225
**HIGH repair source:** #12

**DE:** Rate
**Current top-level EN:** Installment

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
iemaksa

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "iemaksa"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 156

**Card ID:** b1-rate
**Production identity:** b1-rate
**Production index:** 2225
**HIGH repair source:** #12

**DE:** Rate
**Current top-level EN:** Installment

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
padoms

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "padoms"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 157

**Card ID:** b1-rate
**Production identity:** b1-rate
**Production index:** 2225
**HIGH repair source:** #12

**DE:** Rate
**Current top-level EN:** Installment

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
nomaksa

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "nomaksa"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 158

**Card ID:** b1-räumen
**Production identity:** b1-räumen
**Production index:** 2235
**HIGH repair source:** #12

**DE:** räumen
**Current top-level EN:** To clear; to vacate; to move out

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Die Polizei räumt die Straße. = The police clear the street.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Die Polizei räumt Straße. = The police clear the street.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 159

**Card ID:** b1-räumen
**Production identity:** b1-räumen
**Production index:** 2235
**HIGH repair source:** #12

**DE:** räumen
**Current top-level EN:** To clear; to vacate; to move out

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
sort out

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "sort out"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 160

**Card ID:** b1-räumen
**Production identity:** b1-räumen
**Production index:** 2235
**HIGH repair source:** #12

**DE:** räumen
**Current top-level EN:** To clear; to vacate; to move out

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
release

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "release"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 161

**Card ID:** b1-rausch
**Production identity:** b1-rausch
**Production index:** 2237
**HIGH repair source:** #12

**DE:** Rausch
**Current top-level EN:** Intoxication

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Rausch is intoxication or a state of intoxication. In a figurative sense, it can also be a strong excitem

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Rausch is intoxication or a state of intoxication. In a figurative sense, it can also be a strong excitement.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 162

**Card ID:** b1-rausch
**Production identity:** b1-rausch
**Production index:** 2237
**HIGH repair source:** #12

**DE:** Rausch
**Current top-level EN:** Intoxication

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
apreibumu

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "apreibumu"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 163

**Card ID:** b1-rausch
**Production identity:** b1-rausch
**Production index:** 2237
**HIGH repair source:** #12

**DE:** Rausch
**Current top-level EN:** Intoxication

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
reibums

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "reibums"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 164

**Card ID:** b1-rausch
**Production identity:** b1-rausch
**Production index:** 2237
**HIGH repair source:** #12

**DE:** Rausch
**Current top-level EN:** Intoxication

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
prieks

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "prieks"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 165

**Card ID:** b1-rausch
**Production identity:** b1-rausch
**Production index:** 2237
**HIGH repair source:** #12

**DE:** Rausch
**Current top-level EN:** Intoxication

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
prieks

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "prieks"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 166

**Card ID:** b1-reißen
**Production identity:** b1-reißen
**Production index:** 2276
**HIGH repair source:** #12

**DE:** reißen
**Current top-level EN:** To tear; to rip; to burst

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
bursting

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "bursting"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 167

**Card ID:** b1-richten
**Production identity:** b1-richten
**Production index:** 2307
**HIGH repair source:** #12

**DE:** richten
**Current top-level EN:** Direct

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
in court

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "in court"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 168

**Card ID:** b1-richten
**Production identity:** b1-richten
**Production index:** 2307
**HIGH repair source:** #12

**DE:** richten
**Current top-level EN:** Direct

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
spriest

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "spriest"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 169

**Card ID:** b1-rösten
**Production identity:** b1-rösten
**Production index:** 2336
**HIGH repair source:** #13

**DE:** rösten
**Current top-level EN:** To toast

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
bake in the oven

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "bake in the oven"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 170

**Card ID:** b1-rüsten
**Production identity:** b1-rüsten
**Production index:** 2366
**HIGH repair source:** #13

**DE:** rüsten
**Current top-level EN:** To prepare

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich bereite das Essen vor. = I prepared the food.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich bereite Essen vor. = I prepared the food.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 171

**Card ID:** b1-rüsten
**Production identity:** b1-rüsten
**Production index:** 2366
**HIGH repair source:** #13

**DE:** rüsten
**Current top-level EN:** To prepare

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
sagatavot

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "sagatavot"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 172

**Card ID:** b1-rüsten
**Production identity:** b1-rüsten
**Production index:** 2366
**HIGH repair source:** #13

**DE:** rüsten
**Current top-level EN:** To prepare

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
armament

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "armament"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 173

**Card ID:** b1-saat
**Production identity:** b1-saat
**Production index:** 2370
**HIGH repair source:** #13

**DE:** Saat
**Current top-level EN:** Seed

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Saat means seed, sowing or sown field. For one individual seed, der Samen is more commonly used.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Saat means seed, sowing or sown field. For one individual seed, der Samen is more commonly used.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 174

**Card ID:** b1-schicht
**Production identity:** b1-schicht
**Production index:** 2427
**HIGH repair source:** #13

**DE:** Schicht
**Current top-level EN:** Layer

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
die Schicht

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Schicht

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 175

**Card ID:** b1-schmelzen
**Production identity:** b1-schmelzen
**Production index:** 2478
**HIGH repair source:** #13

**DE:** schmelzen
**Current top-level EN:** To melt

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich taue das Fleisch auf. = I thawed the meat.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich taue Fleisch auf. = I thawed the meat.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 176

**Card ID:** b1-schmelzen
**Production identity:** b1-schmelzen
**Production index:** 2478
**HIGH repair source:** #13

**DE:** schmelzen
**Current top-level EN:** To melt

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
kust

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "kust"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 177

**Card ID:** b1-schmieren
**Production identity:** b1-schmieren
**Production index:** 2484
**HIGH repair source:** #13

**DE:** schmieren
**Current top-level EN:** To spread • To smear

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Er streicht die Wand. = He is painting the wall.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Er streicht Wand. = He is painting the wall.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 178

**Card ID:** b1-schmieren
**Production identity:** b1-schmieren
**Production index:** 2484
**HIGH repair source:** #13

**DE:** schmieren
**Current top-level EN:** To spread • To smear

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
to paint

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "to paint"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 179

**Card ID:** b1-schmieren
**Production identity:** b1-schmieren
**Production index:** 2484
**HIGH repair source:** #13

**DE:** schmieren
**Current top-level EN:** To spread • To smear

**Affected field:** sectionAccents.comparison[2].example.red



**CURRENT PRODUCTION:**
öle

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "öle"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 180

**Card ID:** b1-schnitt
**Production identity:** b1-schnitt
**Production index:** 2500
**HIGH repair source:** #13

**DE:** Schnitt
**Current top-level EN:** Cut

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Schnitt is a cut or the result of cutting. Depending on the field, this can be a cut, a film montage, or 

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Schnitt is a cut or the result of cutting. Depending on the field, this can be a cut, a film montage, or an average.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 181

**Card ID:** b1-schuldig
**Production identity:** b1-schuldig
**Production index:** 2527
**HIGH repair source:** #13

**DE:** schuldig
**Current top-level EN:** Guilty

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
die Schuld

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Schuld

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 182

**Card ID:** b1-schuldig
**Production identity:** b1-schuldig
**Production index:** 2527
**HIGH repair source:** #13

**DE:** schuldig
**Current top-level EN:** Guilty

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
owed

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "owed"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 183

**Card ID:** b1-schützen
**Production identity:** b1-schützen
**Production index:** 2538
**HIGH repair source:** #13

**DE:** schützen
**Current top-level EN:** To protect

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Er bewacht das Haus. = He guards the house.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Er bewacht Haus. = He guards the house.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 184

**Card ID:** b1-schützen
**Production identity:** b1-schützen
**Production index:** 2538
**HIGH repair source:** #13

**DE:** schützen
**Current top-level EN:** To protect

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
must be protected

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "must be protected"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 185

**Card ID:** b1-schützen
**Production identity:** b1-schützen
**Production index:** 2538
**HIGH repair source:** #13

**DE:** schützen
**Current top-level EN:** To protect

**Affected field:** sectionAccents.tip.red



**CURRENT PRODUCTION:**
whom?

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "whom?"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 186

**Card ID:** b1-senden
**Production identity:** b1-senden
**Production index:** 2599
**HIGH repair source:** #13

**DE:** senden
**Current top-level EN:** To send

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich schicke dir das Foto. = I send you a photo.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich schicke dir Foto. = I send you a photo.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 187

**Card ID:** b1-senden
**Production identity:** b1-senden
**Production index:** 2599
**HIGH repair source:** #13

**DE:** senden
**Current top-level EN:** To send

**Affected field:** sectionAccents.comparison[2].example.red



**CURRENT PRODUCTION:**
übertragen

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "übertragen"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 188

**Card ID:** b1-sinn
**Production identity:** b1-sinn
**Production index:** 2630
**HIGH repair source:** #13

**DE:** Sinn
**Current top-level EN:** Meaning

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main Idea: der Sinn means sense or meaning. In phrases it can also mean feeling, for example Sinn für Humor.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main Idea: Sinn means sense or meaning. In phrases it can also mean feeling, for example Sinn für Humor.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 189

**Card ID:** b1-sitz
**Production identity:** b1-sitz
**Production index:** 2634
**HIGH repair source:** #13

**DE:** Sitz
**Current top-level EN:** Seat

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
der Sitz means a seat or seating place. For a company or institution, it means headquarters.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Sitz means a seat or seating place. For a company or institution, it means headquarters.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 190

**Card ID:** b1-sitz
**Production identity:** b1-sitz
**Production index:** 2634
**HIGH repair source:** #13

**DE:** Sitz
**Current top-level EN:** Seat

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
residence

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "residence"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 191

**Card ID:** b1-sitz
**Production identity:** b1-sitz
**Production index:** 2634
**HIGH repair source:** #13

**DE:** Sitz
**Current top-level EN:** Seat

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
residence

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "residence"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 192

**Card ID:** b1-sowie
**Production identity:** b1-sowie
**Production index:** 2660
**HIGH repair source:** #13

**DE:** sowie
**Current top-level EN:** As well as

**Affected field:** sectionAccents.comparison[1].example.red



**CURRENT PRODUCTION:**
und

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "und"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 193

**Card ID:** b1-sowie
**Production identity:** b1-sowie
**Production index:** 2660
**HIGH repair source:** #13

**DE:** sowie
**Current top-level EN:** As well as

**Affected field:** sectionAccents.comparison[2].example.red



**CURRENT PRODUCTION:**
Sobald

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Sobald"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 194

**Card ID:** b1-spannung
**Production identity:** b1-spannung
**Production index:** 2668
**HIGH repair source:** #13

**DE:** Spannung
**Current top-level EN:** Tension

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Spannung means tension or strain. In technical language, especially in electricity, it means voltage.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Spannung means tension or strain. In technical language, especially in electricity, it means voltage.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 195

**Card ID:** b1-spannung
**Production identity:** b1-spannung
**Production index:** 2668
**HIGH repair source:** #13

**DE:** Spannung
**Current top-level EN:** Tension

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
Spriegums

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Spriegums"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 196

**Card ID:** b1-spannung
**Production identity:** b1-spannung
**Production index:** 2668
**HIGH repair source:** #13

**DE:** Spannung
**Current top-level EN:** Tension

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
spriedze

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "spriedze"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 197

**Card ID:** b1-spannung
**Production identity:** b1-spannung
**Production index:** 2668
**HIGH repair source:** #13

**DE:** Spannung
**Current top-level EN:** Tension

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
spriedze

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "spriedze"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 198

**Card ID:** b1-spannung
**Production identity:** b1-spannung
**Production index:** 2668
**HIGH repair source:** #13

**DE:** Spannung
**Current top-level EN:** Tension

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
spriegums

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "spriegums"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 199

**Card ID:** b1-spitze
**Production identity:** b1-spitze
**Production index:** 2689
**HIGH repair source:** #13

**DE:** Spitze
**Current top-level EN:** Tip; peak

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Spitze is a pointed end or highest point. In a figurative sense, it can be leadership or a position at th

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Spitze is a pointed end or highest point. In a figurative sense, it can be leadership or a position at the top.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 200

**Card ID:** b1-spitze
**Production identity:** b1-spitze
**Production index:** 2689
**HIGH repair source:** #13

**DE:** Spitze
**Current top-level EN:** Tip; peak

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
under the leadership

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "under the leadership"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 201

**Card ID:** b1-spitze
**Production identity:** b1-spitze
**Production index:** 2689
**HIGH repair source:** #13

**DE:** Spitze
**Current top-level EN:** Tip; peak

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
virsotne

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "virsotne"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 202

**Card ID:** b1-spitze
**Production identity:** b1-spitze
**Production index:** 2689
**HIGH repair source:** #13

**DE:** Spitze
**Current top-level EN:** Tip; peak

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
beigas

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "beigas"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 203

**Card ID:** b1-spitze
**Production identity:** b1-spitze
**Production index:** 2689
**HIGH repair source:** #13

**DE:** Spitze
**Current top-level EN:** Tip; peak

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
punkts

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "punkts"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 204

**Card ID:** b1-spitze
**Production identity:** b1-spitze
**Production index:** 2689
**HIGH repair source:** #13

**DE:** Spitze
**Current top-level EN:** Tip; peak

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
under the leadership

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "under the leadership"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 205

**Card ID:** b1-stift
**Production identity:** b1-stift
**Production index:** 2758
**HIGH repair source:** #13

**DE:** Stift
**Current top-level EN:** Pencil

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
The main idea: der Stift is everyday writing - pencil or pen. Technically, it can also be a pin or small metal part.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
The main idea: Stift is everyday writing - pencil or pen. Technically, it can also be a pin or small metal part.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 206

**Card ID:** b1-stillen
**Production identity:** b1-stillen
**Production index:** 2762
**HIGH repair source:** #13

**DE:** stillen
**Current top-level EN:** To breastfeed

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Die Mutter stillt das Baby. = A mother is nursing a child.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Die Mutter stillt Baby. = A mother is nursing a child.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 207

**Card ID:** b1-stoßen
**Production identity:** b1-stoßen
**Production index:** 2776
**HIGH repair source:** #13

**DE:** stoßen
**Current top-level EN:** Push

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Er stößt gegen die Tür. = He hits the door.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Er stößt gegen Tür. = He hits the door.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 208

**Card ID:** b1-stoßen
**Production identity:** b1-stoßen
**Production index:** 2776
**HIGH repair source:** #13

**DE:** stoßen
**Current top-level EN:** Push

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
we bumped into

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "we bumped into"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 209

**Card ID:** b1-stoßen
**Production identity:** b1-stoßen
**Production index:** 2776
**HIGH repair source:** #13

**DE:** stoßen
**Current top-level EN:** Push

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
stumt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "stumt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 210

**Card ID:** b1-stoßen
**Production identity:** b1-stoßen
**Production index:** 2776
**HIGH repair source:** #13

**DE:** stoßen
**Current top-level EN:** Push

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
satikt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "satikt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 211

**Card ID:** b1-streichen
**Production identity:** b1-streichen
**Production index:** 2790
**HIGH repair source:** #13

**DE:** streichen
**Current top-level EN:** Delete

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich lösche die Datei. = I will delete the file.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich lösche Datei. = I will delete the file.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 212

**Card ID:** b1-streichen
**Production identity:** b1-streichen
**Production index:** 2790
**HIGH repair source:** #13

**DE:** streichen
**Current top-level EN:** Delete

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
to draw

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "to draw"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 213

**Card ID:** b1-strom
**Production identity:** b1-strom
**Production index:** 2804
**HIGH repair source:** #13

**DE:** Strom
**Current top-level EN:** Current

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Strom is most often electricity or electric current in everyday life. In another context, it may be a lar

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Strom is most often electricity or electric current in everyday life. In another context, it may be a large river or stream.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 214

**Card ID:** b1-strom
**Production identity:** b1-strom
**Production index:** 2804
**HIGH repair source:** #13

**DE:** Strom
**Current top-level EN:** Current

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
upe

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "upe"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 215

**Card ID:** b1-stürzen
**Production identity:** b1-stürzen
**Production index:** 2819
**HIGH repair source:** #13

**DE:** stürzen
**Current top-level EN:** Fall down

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
krist

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "krist"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 216

**Card ID:** b1-szene
**Production identity:** b1-szene
**Production index:** 2830
**HIGH repair source:** #13

**DE:** Szene
**Current top-level EN:** The scene

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
die Szene

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Szene

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 217

**Card ID:** b1-szene
**Production identity:** b1-szene
**Production index:** 2830
**HIGH repair source:** #13

**DE:** Szene
**Current top-level EN:** The scene

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
skatuve

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "skatuve"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 218

**Card ID:** b1-tau
**Production identity:** b1-tau
**Production index:** 2856
**HIGH repair source:** #13

**DE:** Tau
**Current top-level EN:** Dew

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
der Tau

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Tau

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 219

**Card ID:** b1-taufen
**Production identity:** b1-taufen
**Production index:** 2863
**HIGH repair source:** #13

**DE:** taufen
**Current top-level EN:** Baptise

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
saukt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "saukt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 220

**Card ID:** b1-taufen
**Production identity:** b1-taufen
**Production index:** 2863
**HIGH repair source:** #13

**DE:** taufen
**Current top-level EN:** Baptise

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
In the church

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "In the church"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 221

**Card ID:** b1-titel
**Production identity:** b1-titel
**Production index:** 2891
**HIGH repair source:** #13

**DE:** Titel
**Current top-level EN:** Title

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Titel means the title of a book, song, film or text. It can also mean a title, such as an academic or spo

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Titel means the title of a book, song, film or text. It can also mean a title, such as an academic or sports title.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 222

**Card ID:** b1-titel
**Production identity:** b1-titel
**Production index:** 2891
**HIGH repair source:** #13

**DE:** Titel
**Current top-level EN:** Title

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
tituls

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "tituls"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 223

**Card ID:** b1-titel
**Production identity:** b1-titel
**Production index:** 2891
**HIGH repair source:** #13

**DE:** Titel
**Current top-level EN:** Title

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
nosaukums

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "nosaukums"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 224

**Card ID:** b1-titel
**Production identity:** b1-titel
**Production index:** 2891
**HIGH repair source:** #13

**DE:** Titel
**Current top-level EN:** Title

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
virsraksts

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "virsraksts"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 225

**Card ID:** b1-titel
**Production identity:** b1-titel
**Production index:** 2891
**HIGH repair source:** #13

**DE:** Titel
**Current top-level EN:** Title

**Affected field:** sectionAccents.comparison[1].example.red



**CURRENT PRODUCTION:**
Überschrift

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Überschrift"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 226

**Card ID:** b1-titel
**Production identity:** b1-titel
**Production index:** 2891
**HIGH repair source:** #13

**DE:** Titel
**Current top-level EN:** Title

**Affected field:** sectionAccents.tip.leftBlocks[0].text.yellow[0]



**CURRENT PRODUCTION:**
For the book

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "For the book"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 227

**Card ID:** b1-titel
**Production identity:** b1-titel
**Production index:** 2891
**HIGH repair source:** #13

**DE:** Titel
**Current top-level EN:** Title

**Affected field:** sectionAccents.tip.leftBlocks[0].text.yellow[1]



**CURRENT PRODUCTION:**
dziesmai

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "dziesmai"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 228

**Card ID:** b1-titel
**Production identity:** b1-titel
**Production index:** 2891
**HIGH repair source:** #13

**DE:** Titel
**Current top-level EN:** Title

**Affected field:** sectionAccents.tip.leftBlocks[0].text.yellow[2]



**CURRENT PRODUCTION:**
filmai

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "filmai"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 229

**Card ID:** b1-ton
**Production identity:** b1-ton
**Production index:** 2896
**HIGH repair source:** #13

**DE:** Ton
**Current top-level EN:** Sound; tone

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: der Ton means sound or tone. It is used for audio, voice, music, nuance of colour and manner of conversation.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Ton means sound or tone. It is used for audio, voice, music, nuance of colour and manner of conversation.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 230

**Card ID:** b1-ton
**Production identity:** b1-ton
**Production index:** 2896
**HIGH repair source:** #13

**DE:** Ton
**Current top-level EN:** Sound; tone

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
tonis

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "tonis"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 231

**Card ID:** b1-ton
**Production identity:** b1-ton
**Production index:** 2896
**HIGH repair source:** #13

**DE:** Ton
**Current top-level EN:** Sound; tone

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
balss

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "balss"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 232

**Card ID:** b1-ton
**Production identity:** b1-ton
**Production index:** 2896
**HIGH repair source:** #13

**DE:** Ton
**Current top-level EN:** Sound; tone

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
skan

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "skan"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 233

**Card ID:** b1-ton
**Production identity:** b1-ton
**Production index:** 2896
**HIGH repair source:** #13

**DE:** Ton
**Current top-level EN:** Sound; tone

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
runas manieri

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "runas manieri"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 234

**Card ID:** b1-trauen
**Production identity:** b1-trauen
**Production index:** 2906
**HIGH repair source:** #13

**DE:** trauen
**Current top-level EN:** To trust

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
don't dare

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "don't dare"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 235

**Card ID:** b1-treiben
**Production identity:** b1-treiben
**Production index:** 2912
**HIGH repair source:** #13

**DE:** treiben
**Current top-level EN:** To do; to engage in

**Affected field:** sectionAccents.examples[1].lv.red



**CURRENT PRODUCTION:**
dzen

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "dzen"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 236

**Card ID:** b1-treiben
**Production identity:** b1-treiben
**Production index:** 2912
**HIGH repair source:** #13

**DE:** treiben
**Current top-level EN:** To do; to engage in

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
nodarboties

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "nodarboties"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 237

**Card ID:** b1-treiben
**Production identity:** b1-treiben
**Production index:** 2912
**HIGH repair source:** #13

**DE:** treiben
**Current top-level EN:** To do; to engage in

**Affected field:** sectionAccents.comparison[1].example.red



**CURRENT PRODUCTION:**
machst

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "machst"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 238

**Card ID:** b1-treiben
**Production identity:** b1-treiben
**Production index:** 2912
**HIGH repair source:** #13

**DE:** treiben
**Current top-level EN:** To do; to engage in

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
Drive; urge

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Drive; urge"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 239

**Card ID:** b1-treiben
**Production identity:** b1-treiben
**Production index:** 2912
**HIGH repair source:** #13

**DE:** treiben
**Current top-level EN:** To do; to engage in

**Affected field:** sectionAccents.comparison[2].example.red



**CURRENT PRODUCTION:**
treibt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "treibt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 240

**Card ID:** b1-treiben
**Production identity:** b1-treiben
**Production index:** 2912
**HIGH repair source:** #13

**DE:** treiben
**Current top-level EN:** To do; to engage in

**Affected field:** sectionAccents.comparison[2].example.green



**CURRENT PRODUCTION:**
uns

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "uns"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 241

**Card ID:** b1-trennen
**Production identity:** b1-trennen
**Production index:** 2914
**HIGH repair source:** #13

**DE:** trennen
**Current top-level EN:** To separate

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
To separate, separate

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** NATURALNESS

**LUNA REGRESSION RECOMMENDED:**
To separate

**REASON:**
Repeated word: separate, separate

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 242

**Card ID:** b1-trennen
**Production identity:** b1-trennen
**Production index:** 2914
**HIGH repair source:** #13

**DE:** trennen
**Current top-level EN:** To separate

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Die Wand trennt die Zimmer. = A wall separates the rooms.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Die Wand trennt Zimmer. = A wall separates the rooms.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 243

**Card ID:** b1-trennen
**Production identity:** b1-trennen
**Production index:** 2914
**HIGH repair source:** #13

**DE:** trennen
**Current top-level EN:** To separate

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
broke up

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "broke up"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 244

**Card ID:** b1-übergeben
**Production identity:** b1-übergeben
**Production index:** 2949
**HIGH repair source:** #13

**DE:** übergeben
**Current top-level EN:** To hand over

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich gebe dir das Buch. = I give you a book.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich gebe dir Buch. = I give you a book.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 245

**Card ID:** b1-übergeben
**Production identity:** b1-übergeben
**Production index:** 2949
**HIGH repair source:** #13

**DE:** übergeben
**Current top-level EN:** To hand over

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
have to throw up

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "have to throw up"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 246

**Card ID:** b1-übergeben
**Production identity:** b1-übergeben
**Production index:** 2949
**HIGH repair source:** #13

**DE:** übergeben
**Current top-level EN:** To hand over

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
nodot

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "nodot"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 247

**Card ID:** b1-übergeben
**Production identity:** b1-übergeben
**Production index:** 2949
**HIGH repair source:** #13

**DE:** übergeben
**Current top-level EN:** To hand over

**Affected field:** sectionAccents.comparison[0].example.blue



**CURRENT PRODUCTION:**
übergebe

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "übergebe"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 248

**Card ID:** b1-übergeben
**Production identity:** b1-übergeben
**Production index:** 2949
**HIGH repair source:** #13

**DE:** übergeben
**Current top-level EN:** To hand over

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
dot

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "dot"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 249

**Card ID:** b1-übergeben
**Production identity:** b1-übergeben
**Production index:** 2949
**HIGH repair source:** #13

**DE:** übergeben
**Current top-level EN:** To hand over

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
vemt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "vemt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 250

**Card ID:** b1-übergeben
**Production identity:** b1-übergeben
**Production index:** 2949
**HIGH repair source:** #13

**DE:** übergeben
**Current top-level EN:** To hand over

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
nodot

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "nodot"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 251

**Card ID:** b1-überholen
**Production identity:** b1-überholen
**Production index:** 2951
**HIGH repair source:** #13

**DE:** überholen
**Current top-level EN:** To overtake

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Er überholt das Auto. = He overtakes the car.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Er überholt Auto. = He overtakes the car.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 252

**Card ID:** b1-überholen
**Production identity:** b1-überholen
**Production index:** 2951
**HIGH repair source:** #13

**DE:** überholen
**Current top-level EN:** To overtake

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
under repair

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "under repair"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 253

**Card ID:** b1-überholen
**Production identity:** b1-überholen
**Production index:** 2951
**HIGH repair source:** #13

**DE:** überholen
**Current top-level EN:** To overtake

**Affected field:** sectionAccents.comparison[0].example.blue



**CURRENT PRODUCTION:**
überholt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "überholt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 254

**Card ID:** b1-überholen
**Production identity:** b1-überholen
**Production index:** 2951
**HIGH repair source:** #13

**DE:** überholen
**Current top-level EN:** To overtake

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
surpasses

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "surpasses"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 255

**Card ID:** b1-überholen
**Production identity:** b1-überholen
**Production index:** 2951
**HIGH repair source:** #13

**DE:** überholen
**Current top-level EN:** To overtake

**Affected field:** sectionAccents.important.blue



**CURRENT PRODUCTION:**
überholen

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "überholen"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 256

**Card ID:** b1-übernehmen
**Production identity:** b1-übernehmen
**Production index:** 2954
**HIGH repair source:** #13

**DE:** übernehmen
**Current top-level EN:** Take over

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich übernehme die Aufgabe. = I take over the task.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich übernehme Aufgabe. = I take over the task.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 257

**Card ID:** b1-übernehmen
**Production identity:** b1-übernehmen
**Production index:** 2954
**HIGH repair source:** #13

**DE:** übernehmen
**Current top-level EN:** Take over

**Affected field:** sectionAccents.examples[1].lv.red



**CURRENT PRODUCTION:**
takes on

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "takes on"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 258

**Card ID:** b1-übernehmen
**Production identity:** b1-übernehmen
**Production index:** 2954
**HIGH repair source:** #13

**DE:** übernehmen
**Current top-level EN:** Take over

**Affected field:** sectionAccents.comparison[0].example.blue



**CURRENT PRODUCTION:**
übernehme

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "übernehme"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 259

**Card ID:** b1-umgehen
**Production identity:** b1-umgehen
**Production index:** 2974
**HIGH repair source:** #13

**DE:** umgehen
**Current top-level EN:** To deal with; to bypass

**Affected field:** sectionAccents.examples[1].lv.red



**CURRENT PRODUCTION:**
apejam

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "apejam"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 260

**Card ID:** b1-umgehen
**Production identity:** b1-umgehen
**Production index:** 2974
**HIGH repair source:** #13

**DE:** umgehen
**Current top-level EN:** To deal with; to bypass

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
apiet

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "apiet"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 261

**Card ID:** b1-umgehen
**Production identity:** b1-umgehen
**Production index:** 2974
**HIGH repair source:** #13

**DE:** umgehen
**Current top-level EN:** To deal with; to bypass

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
apieties

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "apieties"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 262

**Card ID:** b1-umgehen
**Production identity:** b1-umgehen
**Production index:** 2974
**HIGH repair source:** #13

**DE:** umgehen
**Current top-level EN:** To deal with; to bypass

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
behave

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "behave"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 263

**Card ID:** b1-umgehen
**Production identity:** b1-umgehen
**Production index:** 2974
**HIGH repair source:** #13

**DE:** umgehen
**Current top-level EN:** To deal with; to bypass

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
apiet

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "apiet"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 264

**Card ID:** b1-unterhalten
**Production identity:** b1-unterhalten
**Production index:** 3022
**HIGH repair source:** #13

**DE:** unterhalten
**Current top-level EN:** Entertain

**Affected field:** sectionAccents.examples[1].lv.red



**CURRENT PRODUCTION:**
we talked

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "we talked"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 265

**Card ID:** b1-untersuchung
**Production identity:** b1-untersuchung
**Production index:** 3028
**HIGH repair source:** #13

**DE:** Untersuchung
**Current top-level EN:** Investigation

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
die Untersuchung

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Untersuchung

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 266

**Card ID:** b1-untersuchung
**Production identity:** b1-untersuchung
**Production index:** 3028
**HIGH repair source:** #13

**DE:** Untersuchung
**Current top-level EN:** Investigation

**Affected field:** sectionAccents.tip.leftBlocks[0].text.green[1]



**CURRENT PRODUCTION:**
policija

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "policija"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 267

**Card ID:** b1-verändern
**Production identity:** b1-verändern
**Production index:** 3040
**HIGH repair source:** #13

**DE:** verändern
**Current top-level EN:** To change

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Das verändert die Situation. = This changes the situation.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Das verändert Situation. = This changes the situation.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 268

**Card ID:** b1-verändern
**Production identity:** b1-verändern
**Production index:** 3040
**HIGH repair source:** #13

**DE:** verändern
**Current top-level EN:** To change

**Affected field:** sectionAccents.comparison[1].example.red



**CURRENT PRODUCTION:**
ändere

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "ändere"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 269

**Card ID:** b1-verband
**Production identity:** b1-verband
**Production index:** 3045
**HIGH repair source:** #13

**DE:** Verband
**Current top-level EN:** Bandage

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: In medicine, der Verband is a bandage. In the language of organizations, it means an association or a federat

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: In medicine, Verband is a bandage. In the language of organizations, it means an association or a federation.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 270

**Card ID:** b1-verband
**Production identity:** b1-verband
**Production index:** 3045
**HIGH repair source:** #13

**DE:** Verband
**Current top-level EN:** Bandage

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
savienojums

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "savienojums"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 271

**Card ID:** b1-verbindung
**Production identity:** b1-verbindung
**Production index:** 3047
**HIGH repair source:** #13

**DE:** Verbindung
**Current top-level EN:** Connection

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Main idea: die Verbindung means a connection or link between things, people, places or systems.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Main idea: Verbindung means a connection or link between things, people, places or systems.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 272

**Card ID:** b1-verbindung
**Production identity:** b1-verbindung
**Production index:** 3047
**HIGH repair source:** #13

**DE:** Verbindung
**Current top-level EN:** Connection

**Affected field:** sectionAccents.examples[1].lv.purple[0]



**CURRENT PRODUCTION:**
Has

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Has"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 273

**Card ID:** b1-verbindung
**Production identity:** b1-verbindung
**Production index:** 3047
**HIGH repair source:** #13

**DE:** Verbindung
**Current top-level EN:** Connection

**Affected field:** sectionAccents.examples[2].lv.red



**CURRENT PRODUCTION:**
saikne

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "saikne"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 274

**Card ID:** b1-verbindung
**Production identity:** b1-verbindung
**Production index:** 3047
**HIGH repair source:** #13

**DE:** Verbindung
**Current top-level EN:** Connection

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
savienojums

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "savienojums"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 275

**Card ID:** b1-verbindung
**Production identity:** b1-verbindung
**Production index:** 3047
**HIGH repair source:** #13

**DE:** Verbindung
**Current top-level EN:** Connection

**Affected field:** sectionAccents.tip.leftBlocks[0].text.purple[0]



**CURRENT PRODUCTION:**
saikne

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "saikne"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 276

**Card ID:** b1-verbrennen
**Production identity:** b1-verbrennen
**Production index:** 3055
**HIGH repair source:** #13

**DE:** verbrennen
**Current top-level EN:** To burn

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
To burn, burn up, burn yourself

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** NATURALNESS

**LUNA REGRESSION RECOMMENDED:**
To burn up, burn yourself

**REASON:**
Repeated word: burn, burn

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 277

**Card ID:** b1-verbrennen
**Production identity:** b1-verbrennen
**Production index:** 3055
**HIGH repair source:** #13

**DE:** verbrennen
**Current top-level EN:** To burn

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich zünde die Kerze an. = I light a candle.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich zünde Kerze an. = I light a candle.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 278

**Card ID:** b1-verbrennen
**Production identity:** b1-verbrennen
**Production index:** 3055
**HIGH repair source:** #13

**DE:** verbrennen
**Current top-level EN:** To burn

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
degt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "degt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 279

**Card ID:** b1-verderben
**Production identity:** b1-verderben
**Production index:** 3058
**HIGH repair source:** #13

**DE:** verderben
**Current top-level EN:** To spoil

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Er macht das Handy kaputt. = He breaks the phone.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Er macht Handy kaputt. = He breaks the phone.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 280

**Card ID:** b1-verderben
**Production identity:** b1-verderben
**Production index:** 3058
**HIGH repair source:** #13

**DE:** verderben
**Current top-level EN:** To spoil

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
salauzt

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "salauzt"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 281

**Card ID:** b1-verletzen
**Production identity:** b1-verletzen
**Production index:** 3089
**HIGH repair source:** #13

**DE:** verletzen
**Current top-level EN:** To hurt

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Er bricht die Regel. = He breaks the rule.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Er bricht Regel. = He breaks the rule.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 282

**Card ID:** b1-verletzen
**Production identity:** b1-verletzen
**Production index:** 3089
**HIGH repair source:** #13

**DE:** verletzen
**Current top-level EN:** To hurt

**Affected field:** sectionAccents.comparison[0].meaning.purple



**CURRENT PRODUCTION:**
savainot

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "savainot"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 283

**Card ID:** b1-verletzen
**Production identity:** b1-verletzen
**Production index:** 3089
**HIGH repair source:** #13

**DE:** verletzen
**Current top-level EN:** To hurt

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
apvainot

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "apvainot"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 284

**Card ID:** b1-verletzen
**Production identity:** b1-verletzen
**Production index:** 3089
**HIGH repair source:** #13

**DE:** verletzen
**Current top-level EN:** To hurt

**Affected field:** sectionAccents.comparison[2].meaning.purple



**CURRENT PRODUCTION:**
to violate

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "to violate"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 285

**Card ID:** b1-verletzen
**Production identity:** b1-verletzen
**Production index:** 3089
**HIGH repair source:** #13

**DE:** verletzen
**Current top-level EN:** To hurt

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
to violate

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "to violate"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 286

**Card ID:** b1-versichern
**Production identity:** b1-versichern
**Production index:** 3107
**HIGH repair source:** #13

**DE:** versichern
**Current top-level EN:** To insure

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich versichere das Auto. = I insure the car.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich versichere Auto. = I insure the car.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 287

**Card ID:** b1-versichern
**Production identity:** b1-versichern
**Production index:** 3107
**HIGH repair source:** #13

**DE:** versichern
**Current top-level EN:** To insure

**Affected field:** sectionAccents.comparison[1].meaning.purple



**CURRENT PRODUCTION:**
to provide

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "to provide"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 288

**Card ID:** b1-wechsel
**Production identity:** b1-wechsel
**Production index:** 3213
**HIGH repair source:** #13

**DE:** Wechsel
**Current top-level EN:** Shift

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
der Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 289

**Card ID:** b1-wechsel
**Production identity:** b1-wechsel
**Production index:** 3213
**HIGH repair source:** #13

**DE:** Wechsel
**Current top-level EN:** Shift

**Affected field:** sectionAccents.comparison[1].example.red



**CURRENT PRODUCTION:**
Änderung

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "Änderung"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 290

**Card ID:** b1-zugeben
**Production identity:** b1-zugeben
**Production index:** 3292
**HIGH repair source:** #13

**DE:** zugeben
**Current top-level EN:** To admit

**Affected field:** sectionAccents.important.red



**CURRENT PRODUCTION:**
pievienot

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT

**LUNA REGRESSION RECOMMENDED:**
Align highlight with an English token present in the learner-facing text

**REASON:**
Accent token not found in English text: "pievienot"

**OWNER VERDICT:** PENDING

---

### REGRESSION FINDING 291

**Card ID:** b1-zünden
**Production identity:** b1-zünden
**Production index:** 3296
**HIGH repair source:** #13

**DE:** zünden
**Current top-level EN:** Ignite; work or function

**Affected field:** learner-facing



**CURRENT PRODUCTION:**
Ich zünde die Kerze an. = I light a candle.

**REGRESSION VERDICT:** FAIL

**SEVERITY:** MEDIUM
**CATEGORY:** GRAMMAR

**LUNA REGRESSION RECOMMENDED:**
Ich zünde Kerze an. = I light a candle.

**REASON:**
German article appears inside English learner-facing text

**OWNER VERDICT:** PENDING

---
