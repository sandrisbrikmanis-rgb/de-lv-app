# EN–DE B1 HIGH REGRESSION FINDINGS VALIDATION

**Generated:** 2026-08-09T12:40:47.433Z

## Input

| Metric | Value |
| --- | --- |
| Regression cards | 220 |
| Regression findings supplied | 291 |
| Findings validated | 291 |
| Coverage | 100% |

## Validation summary

| Metric | Count |
| --- | --- |
| VALIDATED REAL ISSUES | 214 |
| FALSE POSITIVES | 77 |

### Origin of validated real issues

| Origin | Count |
| --- | --- |
| TRUE REGRESSION | 4 |
| PRE-EXISTING / NEWLY DISCOVERED | 210 |
| INDETERMINATE | 0 |

### Validated severity (real issues only)

| Severity | Count |
| --- | --- |
| CRITICAL | 0 |
| HIGH | 3 |
| MEDIUM | 211 |
| LOW | 0 |

### sectionAccents (real issues only)

| Kind | Count |
| --- | --- |
| TECHNICAL | 143 |
| PEDAGOGICAL | 3 |

| Repair candidates | 214 |

## Arithmetic validation

- REAL + FALSE POSITIVE = 291 (expected 291) — PASS
- Origin sum = 214 (expected 214) — PASS

## Production

- Changes: 0
- DE READ-ONLY: PASS
- Mirror parity: PASS

## Validated findings (detail)

### Finding #1 — b1-abschnitt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Abschnitt means a section or part of a text. It is used for text, road, job or time.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Abschnitt means a section or part of a text. It is used for text, road, job or time.
- **VALIDATED FINAL:** Main idea: Abschnitt means a section or part of a text. It is used for text, road, job or time.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #2 — b1-antrag (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Antrag means submission or formal application. In meetings, it can also mean a proposal for voting.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Antrag means submission or formal application. In meetings, it can also mean a proposal for voting.
- **VALIDATED FINAL:** Main idea: Antrag means submission or formal application. In meetings, it can also mean a proposal for voting.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #3 — b1-berichten (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Sie berichtet über das Projekt. = She reports on the project.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Sie berichtet über das Projekt. = She reports on the project.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #4 — b1-berichten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** notikumiem
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** notikumiem
- **VALIDATED FINAL:** REPLACE: notikumiem → Berichten
- **VALIDATION REASON:** Latvian/source token "notikumiem" not present in English target field; pedagogically invalid for EN learners.
- **OWNER VERDICT:** PENDING

### Finding #5 — b1-blase (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Blase means blister, blister or bubble. It is usually a blister on the skin, a blister in the body, a bubble in water or air.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Blase means blister, blister or bubble. It is usually a blister on the skin, a blister in the body, a bub
- **VALIDATED FINAL:** Main idea: Blase means blister, blister or bubble. It is usually a blister on the skin, a blister in the body, a bub
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #6 — b1-blase (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tulzna
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tulzna
- **VALIDATED FINAL:** REPLACE: accent → Foot
- **VALIDATION REASON:** Accent token "tulzna" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #7 — b1-bloß (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tikai
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tikai
- **VALIDATED FINAL:** REPLACE: accent → conversation
- **VALIDATION REASON:** Accent token "tikai" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #8 — b1-bloß (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[1]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** kails/pliks
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** kails/pliks
- **VALIDATED FINAL:** REPLACE: accent → conversation
- **VALIDATION REASON:** Accent token "kails/pliks" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #9 — b1-fördern (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Das fördert die Entwicklung. = It promotes development.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Das fördert die Entwicklung. = It promotes development.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #10 — b1-handeln (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[1]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** par ko ir teksts
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** par ko ir teksts
- **VALIDATED FINAL:** REPLACE: accent → handeln
- **VALIDATION REASON:** Accent token "par ko ir teksts" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #11 — b1-handeln (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[2]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tirgojas
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tirgojas
- **VALIDATED FINAL:** REPLACE: accent → handeln
- **VALIDATION REASON:** Accent token "tirgojas" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #12 — b1-hort (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.
- **VALIDATED FINAL:** Main idea: Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #13 — b1-jagen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Der Hund jagt die Katze. = The dog chases the cat.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Der Hund jagt die Katze. = The dog chases the cat.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #14 — b1-jagen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** goals
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** goals
- **VALIDATED FINAL:** REPLACE: accent → jagen
- **VALIDATION REASON:** Accent token "goals" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #15 — b1-kader (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: der Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: der Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.
- **VALIDATED FINAL:** Main Idea: Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #16 — b1-kern (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: der Kern means kernel, seed/seed, or essence of a thing. It is used both for fruits and figuratively for the most important idea.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: der Kern means kernel, seed/seed, or essence of a thing. It is used both for fruits and figuratively for the 
- **VALIDATED FINAL:** Main Idea: Kern means kernel, seed/seed, or essence of a thing. It is used both for fruits and figuratively for the 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #17 — b1-kern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** in the fetus
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** in the fetus
- **VALIDATED FINAL:** REPLACE: accent → Kern
- **VALIDATION REASON:** Accent token "in the fetus" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #18 — b1-kern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[1]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** in the case
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** in the case
- **VALIDATED FINAL:** REPLACE: accent → Kern
- **VALIDATION REASON:** Accent token "in the case" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #19 — b1-kern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[2]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** in the argument
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** in the argument
- **VALIDATED FINAL:** REPLACE: accent → Kern
- **VALIDATION REASON:** Accent token "in the argument" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #20 — b1-kommando (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: das Kommando is a command or command, especially in a military, sporting or organised situation. It can also mean a control unit.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: das Kommando is a command or command, especially in a military, sporting or organised situation. It can also 
- **VALIDATED FINAL:** Main Idea: Kommando is a command or command, especially in a military, sporting or organised situation. It can also 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #21 — b1-kommando (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** komandu
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** komandu
- **VALIDATED FINAL:** REPLACE: accent → Wait
- **VALIDATION REASON:** Accent token "komandu" not found in field-targeted English text for comparison[0].example.
- **OWNER VERDICT:** PENDING

### Finding #22 — b1-kurs (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** der Kurs
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** der Kurs
- **VALIDATED FINAL:** Kurs
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #23 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** kurss
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** kurss
- **VALIDATED FINAL:** REPLACE: accent → Course
- **VALIDATION REASON:** Accent token "kurss" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #24 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Kurss
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Kurss
- **VALIDATED FINAL:** REPLACE: accent → The
- **VALIDATION REASON:** Accent token "Kurss" not found in field-targeted English text for comparison[0].example.
- **OWNER VERDICT:** PENDING

### Finding #25 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** virziens
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** virziens
- **VALIDATED FINAL:** REPLACE: accent → Direction
- **VALIDATION REASON:** Accent token "virziens" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #26 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Virziens
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Virziens
- **VALIDATED FINAL:** REPLACE: accent → The
- **VALIDATION REASON:** Accent token "Virziens" not found in field-targeted English text for comparison[1].example.
- **OWNER VERDICT:** PENDING

### Finding #27 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Stunda
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Stunda
- **VALIDATED FINAL:** REPLACE: accent → The
- **VALIDATION REASON:** Accent token "Stunda" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #28 — b1-kastanie (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Kastanie can mean both the chestnut tree and the chestnut fruit itself. The context shows which meaning is intended.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Kastanie can mean both the chestnut tree and the chestnut fruit itself. The context shows which meaning i
- **VALIDATED FINAL:** Main idea: Kastanie can mean both the chestnut tree and the chestnut fruit itself. The context shows which meaning i
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #29 — b1-kastanie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** kastanis
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** kastanis
- **VALIDATED FINAL:** REPLACE: accent → Chestnut
- **VALIDATION REASON:** Accent token "kastanis" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #30 — b1-kastanie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Kastanis
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Kastanis
- **VALIDATED FINAL:** REPLACE: accent → Chestnut
- **VALIDATION REASON:** Accent token "Kastanis" not found in field-targeted English text for comparison[0].example.
- **OWNER VERDICT:** PENDING

### Finding #31 — b1-kastanie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** rieksts
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** rieksts
- **VALIDATED FINAL:** REPLACE: accent → Nut
- **VALIDATION REASON:** Accent token "rieksts" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #32 — b1-kastanie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Rieksts
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Rieksts
- **VALIDATED FINAL:** REPLACE: accent → The
- **VALIDATION REASON:** Accent token "Rieksts" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #33 — b1-rasen (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: rasen means to rush or rush very quickly, often too quickly. For a storm, it can mean raging.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** If speed sounds too fast, fast is often enough.
- **VALIDATED FINAL:** If speed sounds too fast is often enough.
- **VALIDATION REASON:** Repeated word in learner-facing English reduces naturalness.
- **OWNER VERDICT:** PENDING

### Finding #34 — b1-rasen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** braukt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** braukt
- **VALIDATED FINAL:** REPLACE: accent → Drive
- **VALIDATION REASON:** Accent token "braukt" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #35 — b1-rasen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** too big
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** too big
- **VALIDATED FINAL:** REPLACE: accent → speed
- **VALIDATION REASON:** Accent token "too big" not found in field-targeted English text for tip[null].null.
- **OWNER VERDICT:** PENDING

### Finding #36 — b1-rasen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** braukt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** braukt
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #37 — b1-schale (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: die Schale is the rind, shell, or outer covering of a fruit. It can also mean a bowl or vessel.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: die Schale is the rind, shell, or outer covering of a fruit. It can also mean a bowl or vessel.
- **VALIDATED FINAL:** Main Idea: Schale is the rind, shell, or outer covering of a fruit. It can also mean a bowl or vessel.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #38 — b1-schale (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** miza
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** miza
- **VALIDATED FINAL:** REPLACE: accent → Rind
- **VALIDATION REASON:** Accent token "miza" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #39 — b1-schlag (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: der Schlag means a blow or blow. In context, it can also be a lightning strike, a clock strike, or a type.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: der Schlag means a blow or blow. In context, it can also be a lightning strike, a clock strike, or a type.
- **VALIDATED FINAL:** Main Idea: Schlag means a blow or blow. In context, it can also be a lightning strike, a clock strike, or a type.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #40 — b1-schlag (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** nosit
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** nosit
- **VALIDATED FINAL:** REPLACE: accent → clock
- **VALIDATION REASON:** Accent token "nosit" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #41 — b1-schlag (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** sitiens
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** sitiens
- **VALIDATED FINAL:** REPLACE: accent → blow
- **VALIDATION REASON:** Accent token "sitiens" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #42 — b1-schlag (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Stoß
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Stoß
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "Stoß" matches target section text (comparison[1].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #43 — b1-schlag (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** zibens
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** zibens
- **VALIDATED FINAL:** REPLACE: accent → Lightning
- **VALIDATION REASON:** Accent token "zibens" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #44 — b1-senken (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Die Firma senkt die Preise. = The company lowers prices.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** To lower, lower
- **VALIDATED FINAL:** To lower
- **VALIDATION REASON:** Repeated word in learner-facing English reduces naturalness.
- **OWNER VERDICT:** PENDING

### Finding #45 — b1-senken (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Die Firma senkt die Preise. = The company lowers prices.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Die Firma senkt die Preise. = The company lowers prices.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #46 — b1-senken (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** noliec
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** noliec
- **VALIDATED FINAL:** REPLACE: accent → She
- **VALIDATION REASON:** Accent token "noliec" not found in field-targeted English text for examples[1].lv.
- **OWNER VERDICT:** PENDING

### Finding #47 — b1-senken (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** pieklusiniet
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** pieklusiniet
- **VALIDATED FINAL:** REPLACE: accent → Please
- **VALIDATION REASON:** Accent token "pieklusiniet" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #48 — b1-senken (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** kristies
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** kristies
- **VALIDATED FINAL:** REPLACE: accent → fall
- **VALIDATION REASON:** Accent token "kristies" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #49 — b1-senken (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** pacelt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** pacelt
- **VALIDATED FINAL:** REPLACE: accent → Lift
- **VALIDATION REASON:** Accent token "pacelt" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #50 — b1-sich-sorgen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich kümmere mich um das Kind. = I take care of the child.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich kümmere mich um das Kind. = I take care of the child.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #51 — b1-stellung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Stellung means position or condition. It is used for body posture, workplace and stance.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Stellung means position or condition. It is used for body posture, workplace and stance.
- **VALIDATED FINAL:** Main idea: Stellung means position or condition. It is used for body posture, workplace and stance.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #52 — b1-stellung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** darba vietu
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** darba vietu
- **VALIDATED FINAL:** REPLACE: accent → looking
- **VALIDATION REASON:** Accent token "darba vietu" not found in field-targeted English text for examples[1].lv.
- **OWNER VERDICT:** PENDING

### Finding #53 — b1-stellung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** darbavieta
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** darbavieta
- **VALIDATED FINAL:** REPLACE: accent → Place
- **VALIDATION REASON:** Accent token "darbavieta" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #54 — b1-stellung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** darba vietu
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** darba vietu
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #55 — b1-tank (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: der Tank is usually a fuel or liquid tank. In a military context, the more common German word for tank is der Panzer.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: der Tank is usually a fuel or liquid tank. In a military context, the more common German word for tank is der
- **VALIDATED FINAL:** Main Idea: Tank is usually a fuel or liquid tank. In a military context, the more common German word for tank is der
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #56 — b1-tank (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Tanks
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Tanks
- **VALIDATED FINAL:** REPLACE: accent → tank
- **VALIDATION REASON:** Accent token "Tanks" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #57 — b1-tank (HIGH SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tvertne
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tvertne
- **VALIDATED FINAL:** REPLACE: tvertne → Tank
- **VALIDATION REASON:** Latvian/source token "tvertne" not present in English target field; pedagogically invalid for EN learners.
- **OWNER VERDICT:** PENDING

### Finding #58 — b1-tank (HIGH SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tvertne
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tvertne
- **VALIDATED FINAL:** REPLACE: tvertne → Vessel
- **VALIDATION REASON:** Latvian/source token "tvertne" not present in English target field; pedagogically invalid for EN learners.
- **OWNER VERDICT:** PENDING

### Finding #59 — b1-tank (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tanks
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tanks
- **VALIDATED FINAL:** REPLACE: accent → tank
- **VALIDATION REASON:** Accent token "tanks" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #60 — b1-tank (HIGH SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tvertne
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tvertne
- **VALIDATED FINAL:** REPLACE: tvertne → tank
- **VALIDATION REASON:** Latvian/source token "tvertne" not present in English target field; pedagogically invalid for EN learners.
- **OWNER VERDICT:** PENDING

### Finding #61 — b1-verlegen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** nevaru to atrast
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** nevaru to atrast
- **VALIDATED FINAL:** REPLACE: accent → put
- **VALIDATION REASON:** Accent token "nevaru to atrast" not found in field-targeted English text for examples[1].lv.
- **OWNER VERDICT:** PENDING

### Finding #62 — b1-verlegen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** izdod
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** izdod
- **VALIDATED FINAL:** REPLACE: accent → publishing
- **VALIDATION REASON:** Accent token "izdod" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #63 — b1-bildschirm (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Bildschimmer is a screen - the display surface of a computer monitor, phone, tablet or television. Plural: die Bildschimmer.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: d
- **VALIDATED FINAL:** Main idea: Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: d
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #64 — b1-block (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Block means block or notepad. In the context of the material, it can be a lump or a large piece.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Block means block or notepad. In the context of the material, it can be a lump or a large piece.
- **VALIDATED FINAL:** Main idea: Block means block or notepad. In the context of the material, it can be a lump or a large piece.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #65 — b1-bogen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Bogen means bow. Depending on the context, it can also be an arch or a page, such as Fragebogen.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Bogen means bow. Depending on the context, it can also be an arch or a page, such as Fragebogen.
- **VALIDATED FINAL:** Main idea: Bogen means bow. Depending on the context, it can also be an arch or a page, such as Fragebogen.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #66 — b1-dahin (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Daher kommt das Problem. = That's where the problem comes from.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Daher kommt das Problem. = That's where the problem comes from.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #67 — b1-darstellen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich zeige dir das Bild. = I show you a picture.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich zeige dir das Bild. = I show you a picture.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #68 — b1-decken (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich decke das Kind zu. = I covered the baby.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich decke das Kind zu. = I covered the baby.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #69 — b1-dienen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich nutze das Programm. = I use the programme.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich nutze das Programm. = I use the programme.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #70 — b1-durchführen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich mache die Arbeit. = I do the work.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich mache die Arbeit. = I do the work.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #71 — b1-einfluss (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Einfluss means influence on a person, decision or situation. A very common construction is Einfluss auf + ko?.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Einfluss means influence on a person, decision, or situation. A very common construction is Einfluss auf 
- **VALIDATED FINAL:** Main idea: Einfluss means influence on a person, decision, or situation. A very common construction is Einfluss auf 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #72 — b1-einführen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich stelle das Projekt vor. = I present the project.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich stelle das Projekt vor. = I present the project.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #73 — b1-einführung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Einführung means introduction or introduction. In a text or course, it is an introduction • In a new system, rules or product - implementation.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Einführung means introduction or implementation. In a text or course, it is an introduction; for a new sy
- **VALIDATED FINAL:** Main idea: Einführung means introduction or implementation. In a text or course, it is an introduction; for a new sy
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #74 — b1-sich-eingewöhnen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich gewöhne mich an das Klima. = I'm getting used to the climate.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich gewöhne mich an das Klima. = I'm getting used to the climate.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #75 — b1-einhalten (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Wir halten die Frist ein. = We meet the deadline.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Wir halten die Frist ein. = We meet the deadline.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #76 — b1-einheit (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Einheit means unity. It can be a unit of study, a technical unit or a unit of measurement depending on the context.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Einheit means a unit. It can be a unit of study, a technical unit, or a unit of measurement depending on 
- **VALIDATED FINAL:** Main idea: Einheit means a unit. It can be a unit of study, a technical unit, or a unit of measurement depending on 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #77 — b1-einholen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich hole das Kind ab. = I will go after the child.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich hole das Kind ab. = I will go after the child.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #78 — b1-einsatz (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Einsatz means active use or involvement in a particular situation. Common phrases are im Einsatz and zum Einsatz kommen • In games Einsatz can also be a bet.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Einsatz means active use or involvement in a particular situation. Common phrases are im Einsatz and zum 
- **VALIDATED FINAL:** Main idea: Einsatz means active use or involvement in a particular situation. Common phrases are im Einsatz and zum 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #79 — b1-einsetzen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Wir setzen die Software ein. = We use software.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Wir setzen die Software ein. = We use software.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #80 — b1-empfangen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich begrüße die Gäste. = I welcome guests.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich begrüße die Gäste. = I welcome guests.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #81 — b1-entfernen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Entfernen Sie die Datei. = Delete the file.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Entfernen Sie die Datei. = Delete the file.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #82 — b1-enthalten (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich halte die Tasche. = I'm holding a bag.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich halte die Tasche. = I'm holding a bag.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #83 — b1-entsprechen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Sie antwortet auf die Frage. = She answers the question.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Sie antwortet auf die Frage. = She answers the question.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #84 — b1-eröffnen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich öffne die Tür. = I open the door.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich öffne die Tür. = I open the door.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #85 — b1-ersetzen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Wir tauschen das Teil aus. = We replace the part.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Wir tauschen das Teil aus. = We replace the part.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #86 — b1-fassen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Er greift nach der Tasche. = He reaches for his bag.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Er greift nach der Tasche. = He reaches for his bag.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #87 — b1-festhalten (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Halte das Seil fest. = Hold the rope tight.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Halte das Seil fest. = Hold the rope tight.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #88 — b1-festlegen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Der Arzt bestimmt die Dosis. = The doctor determines the dose.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Der Arzt bestimmt die Dosis. = The doctor determines the dose.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #89 — b1-folge (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: die Folge most often means a consequence or result that follows an event. In a media context, Folge means an episode of a series, programme or podcast.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: die Folge most often means a consequence or result that follows an event. In a media context, Folge means an 
- **VALIDATED FINAL:** Main Idea: Folge most often means a consequence or result that follows an event. In a media context, Folge means an 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #90 — b1-futter (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: das Futter usually means animal food. In the context of clothing, Futter means the lining of a jacket, coat, or bag.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: das Futter usually means animal food. In the context of clothing, Futter means the lining of a jacket, coat, 
- **VALIDATED FINAL:** Main idea: Futter usually means animal food. In the context of clothing, Futter means the lining of a jacket, coat, 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #91 — b1-gehalt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: das Gehalt means salary or wages. Der Gehalt, on the other hand, means content—the essence of a letter, speech, or contract. The article completely changes the meaning and the plural.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: das Gehalt means salary or wages. Der Gehalt, on the other hand, means content—the essence of a letter, speec
- **VALIDATED FINAL:** Main idea: Gehalt means salary or wages. Der Gehalt, on the other hand, means content—the essence of a letter, speec
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #92 — b1-geschlecht (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: das Geschlecht means gender in humans or animals. In the grammar of the language, it means gender, such as masculine, feminine or no gender.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: das Geschlecht means gender in humans or animals. In the grammar of the language, it means gender, such as ma
- **VALIDATED FINAL:** Main idea: Geschlecht means gender in humans or animals. In the grammar of the language, it means gender, such as ma
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #93 — b1-gewinn (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Gewinn means profit - money left over after costs. In games, contests and lotteries, it means winning.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Gewinn means profit - money left over after costs. In games, contests, and lotteries, it means a win or a
- **VALIDATED FINAL:** Main idea: Gewinn means profit - money left over after costs. In games, contests, and lotteries, it means a win or a
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #94 — b1-sich-gewöhnen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich gewöhne das Kind daran. = I am getting the child used to it.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich gewöhne das Kind daran. = I am getting the child used to it.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #95 — b1-gitter (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: das Gitter means grid or grate - a structure with openings near a window, door, cage or ventilation.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: das Gitter means grid or grate - a structure with openings near a window, door, cage or ventilation.
- **VALIDATED FINAL:** Main idea: Gitter means grid or grate - a structure with openings near a window, door, cage or ventilation.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #96 — b1-greifen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Nimm bitte das Glas. = Take a glass, please.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Nimm bitte das Glas. = Take a glass, please.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #97 — b1-griff (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can also be a grip.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can a
- **VALIDATED FINAL:** Main idea: Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can a
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #98 — b1-herausgeben (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich gebe das Buch zurück. = I return the book.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich gebe das Buch zurück. = I return the book.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #99 — b1-hinweis (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Hinweis is an instruction, note, or piece of information that helps you notice, understand, or find something.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Hinweis is an instruction, note, or piece of information that helps you notice, understand, or find somet
- **VALIDATED FINAL:** Main idea: Hinweis is an instruction, note, or piece of information that helps you notice, understand, or find somet
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #100 — b1-horchen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Sie horcht an der Tür. = She listens at the door.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Sie horcht an der Tür. = She listens at the door.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #101 — b1-hupe (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Hupe is a car horn or a ship's horn. It warns others in traffic. Plural: die Hupen.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Hupe is a car horn or a ship's horn. It warns others in traffic. Plural: die Hupen.
- **VALIDATED FINAL:** Main idea: Hupe is a car horn or a ship's horn. It warns others in traffic. Plural: Hupen.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #102 — b1-kiefer (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Kiefer means jaw. With another article, die Kiefer means pine, so the article is especially important for this card.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Kiefer means jaw. With another article, die Kiefer means pine, so the article is especially important for
- **VALIDATED FINAL:** Main idea: Kiefer means jaw. With another article, Kiefer means pine, so the article is especially important for
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #103 — b1-kippen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Dreh die Karte um. = Flip the card over.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Dreh die Karte um. = Flip the card over.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #104 — b1-kreuzen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Wir überqueren die Straße. = We cross the street.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Wir überqueren die Straße. = We cross the street.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #105 — b1-kreuzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** überqueren
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** überqueren
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "überqueren" matches target section text (comparison[1].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #106 — b1-kreuzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** to mark
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** to mark
- **VALIDATED FINAL:** REPLACE: accent → Mark
- **VALIDATION REASON:** Accent token "to mark" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #107 — b1-kündigen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** break
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** break
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "break" matches target section text (comparison[0].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #108 — b1-kündigen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** dismissed
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** dismissed
- **VALIDATED FINAL:** REPLACE: accent → The
- **VALIDATION REASON:** Accent token "dismissed" not found in field-targeted English text for comparison[1].example.
- **OWNER VERDICT:** PENDING

### Finding #109 — b1-kündigen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** I stopped
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** I stopped
- **VALIDATED FINAL:** REPLACE: accent → dropped
- **VALIDATION REASON:** Accent token "I stopped" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #110 — b1-kuppeln (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Das Kabel verbindet die Geräte. = The cable connects the devices.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Das Kabel verbindet die Geräte. = The cable connects the devices.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #111 — b1-kuppeln (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** savienot
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** savienot
- **VALIDATED FINAL:** REPLACE: accent → connect
- **VALIDATION REASON:** Accent token "savienot" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #112 — b1-laden (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** piekrauts
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** piekrauts
- **VALIDATED FINAL:** REPLACE: accent → The
- **VALIDATION REASON:** Accent token "piekrauts" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #113 — b1-lager (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: das Lager is usually a warehouse or storage place. In another context, it may be a camp or technical bearing.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: das Lager is usually a warehouse or storage place. In another context, it may be a camp or technical bearing.
- **VALIDATED FINAL:** Main idea: Lager is usually a warehouse or storage place. In another context, it may be a camp or technical bearing.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #114 — b1-lager (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** noliktava
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** noliktava
- **VALIDATED FINAL:** REPLACE: accent → Warehouse
- **VALIDATION REASON:** Accent token "noliktava" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #115 — b1-lager (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Nometne
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Nometne
- **VALIDATED FINAL:** REPLACE: accent → The
- **VALIDATION REASON:** Accent token "Nometne" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #116 — b1-inhalt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Inhalt is content - in a text, a bag, a container or a file. Technically, it can also mean volume.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Inhalt is content - in a text, a bag, a container or a file. Technically, it can also mean volume.
- **VALIDATED FINAL:** Main idea: Inhalt is content - in a text, a bag, a container or a file. Technically, it can also mean volume.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #117 — b1-kante (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Kante is the edge or facet of an object. It is not an ordinary territorial boundary, but a physical sharp or clear edge.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp
- **VALIDATED FINAL:** Main idea: Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #118 — b1-kante (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Mala
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Mala
- **VALIDATED FINAL:** REPLACE: accent → The
- **VALIDATION REASON:** Accent token "Mala" not found in field-targeted English text for comparison[0].example.
- **OWNER VERDICT:** PENDING

### Finding #119 — b1-kante (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** mala
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** mala
- **VALIDATED FINAL:** REPLACE: accent → Edge
- **VALIDATION REASON:** Accent token "mala" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #120 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.blue
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** landet
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** landet
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "landet" not found in field-targeted English text for comparison[0].example.
- **OWNER VERDICT:** PENDING

### Finding #121 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** sits down
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** sits down
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "sits down" not found in field-targeted English text for comparison[0].example.
- **OWNER VERDICT:** PENDING

### Finding #122 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** TRUE REGRESSION
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** ierasties
- **HIGH REPAIR SOURCE:** #12
- **HIGH REPAIR CHANGED THIS FIELD:** YES
- **CURRENT PRODUCTION:** arrive
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "arrive" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #123 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** dock with a ship
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** dock with a ship
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "dock with a ship" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #124 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** legt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** legt
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "legt" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #125 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** stops by
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** stops by
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "stops by" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #126 — b1-leisten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** veikt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** veikt
- **VALIDATED FINAL:** REPLACE: accent → Perform
- **VALIDATION REASON:** Accent token "veikt" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #127 — b1-leisten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** veic
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** veic
- **VALIDATED FINAL:** REPLACE: accent → She
- **VALIDATION REASON:** Accent token "veic" not found in field-targeted English text for comparison[0].example.
- **OWNER VERDICT:** PENDING

### Finding #128 — b1-leisten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** paveikt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** paveikt
- **VALIDATED FINAL:** REPLACE: accent → accomplish
- **VALIDATION REASON:** Accent token "paveikt" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #129 — b1-leistung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Leistung means performance, accomplishment or achievement. In engineering, it means power, for example for a motor or a device.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Leistung means performance, accomplishment or achievement. In engineering, it means power, for example fo
- **VALIDATED FINAL:** Main idea: Leistung means performance, accomplishment or achievement. In engineering, it means power, for example fo
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #130 — b1-locker (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: locker means loose or loose, when something is not tightly secured. It means relaxed about people, conversation or mood.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Tight, tight
- **VALIDATED FINAL:** Tight
- **VALIDATION REASON:** Repeated word in learner-facing English reduces naturalness.
- **OWNER VERDICT:** PENDING

### Finding #131 — b1-locker (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** stingrs
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** stingrs
- **VALIDATED FINAL:** REPLACE: accent → Tight
- **VALIDATION REASON:** Accent token "stingrs" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #132 — b1-los (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: das Los is a lottery that is drawn or bought. In a more serious, figurative language, it can also mean the fate of a person.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: das Los is a lottery ticket or lot that is drawn or bought. In a more serious, figurative language, it can al
- **VALIDATED FINAL:** Main idea: Los is a lottery ticket or lot that is drawn or bought. In a more serious, figurative language, it can al
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #133 — b1-los (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** likteni
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** likteni
- **VALIDATED FINAL:** REPLACE: accent → accepted
- **VALIDATION REASON:** Accent token "likteni" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #134 — b1-macht (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: die Macht means the power or ability to influence people, decisions, and policies. Die Kraft is usually used for physical strength.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: die Macht means the power or ability to influence people, decisions, and policies. Die Kraft is usually used 
- **VALIDATED FINAL:** Main Idea: Macht means the power or ability to influence people, decisions, and policies. Die Kraft is usually used 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #135 — b1-macht (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** vara
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** vara
- **VALIDATED FINAL:** REPLACE: accent → Power
- **VALIDATION REASON:** Accent token "vara" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #136 — b1-macht (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** ietekme
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** ietekme
- **VALIDATED FINAL:** REPLACE: accent → Influence
- **VALIDATION REASON:** Accent token "ietekme" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #137 — b1-maß (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: das Maß means measure, limit or extent. In the plural, die Maße usually means dimensions.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: das Maß means measure, limit or extent. In the plural, die Maße usually means dimensions.
- **VALIDATED FINAL:** Main idea: Maß means measure, limit or extent. In the plural, Maße usually means dimensions.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #138 — b1-maß (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** TRUE REGRESSION
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** event
- **HIGH REPAIR SOURCE:** #12
- **HIGH REPAIR CHANGED THIS FIELD:** YES
- **CURRENT PRODUCTION:** action / measure
- **VALIDATED FINAL:** REPLACE: accent → Measure
- **VALIDATION REASON:** Accent token "action / measure" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #139 — b1-nachfrage (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Nachfacht in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inq
- **VALIDATED FINAL:** Main idea: Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inq
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #140 — b1-neigung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Neigung means a tendency or inclination towards something. In a technical context, it can also mean slope.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Neigung means a tendency or inclination towards something. In a technical context, it can also mean slope
- **VALIDATED FINAL:** Main idea: Neigung means a tendency or inclination towards something. In a technical context, it can also mean slope
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #141 — b1-neigung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** interese
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** interese
- **VALIDATED FINAL:** REPLACE: accent → Interest
- **VALIDATION REASON:** Accent token "interese" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #142 — b1-nerven (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** ärgert
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** ärgert
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "ärgert" matches target section text (comparison[2].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #143 — b1-nüchtern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** neiereibis
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** neiereibis
- **VALIDATED FINAL:** REPLACE: accent → drunk
- **VALIDATION REASON:** Accent token "neiereibis" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #144 — b1-objekt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: das Objekt is the object, thing or building that is being talked about. In grammar, Objekt means complement.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: das Objekt is the object, thing or building that is being talked about. In grammar, Objekt means object.
- **VALIDATED FINAL:** Main idea: Objekt is the object, thing or building that is being talked about. In grammar, Objekt means object.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #145 — b1-objekt (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** objekts
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** objekts
- **VALIDATED FINAL:** REPLACE: accent → Object
- **VALIDATION REASON:** Accent token "objekts" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #146 — b1-objekt (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** subjekts
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** subjekts
- **VALIDATED FINAL:** REPLACE: accent → Object
- **VALIDATION REASON:** Accent token "subjekts" not found in field-targeted English text for tip[null].null.
- **OWNER VERDICT:** PENDING

### Finding #147 — b1-periode (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Periode means a period of time or a cycle. In medicine and in everyday life, it can mean menstruation.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Periode means a period of time or a cycle. In medicine and in everyday life, it can mean menstruation.
- **VALIDATED FINAL:** Main idea: Periode means a period of time or a cycle. In medicine and in everyday life, it can mean menstruation.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #148 — b1-pflegen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Er kümmert sich um das Kind. = He takes care of the child.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Er kümmert sich um das Kind. = He takes care of the child.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #149 — b1-probe (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Probe means test, sample or attempt. The meaning is determined by the situation.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Probe means test, sample or attempt. The meaning is determined by the situation.
- **VALIDATED FINAL:** Main idea: Probe means test, sample or attempt. The meaning is determined by the situation.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #150 — b1-probe (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** an attempt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** an attempt
- **VALIDATED FINAL:** REPLACE: accent → Concert
- **VALIDATION REASON:** Accent token "an attempt" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #151 — b1-rang (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: der Rang means rank, rank, or place in a hierarchy. In a theatre, this may mean the balcony level.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: der Rang means rank, level, or place in a hierarchy. In a theatre, this may mean the balcony level.
- **VALIDATED FINAL:** Main Idea: Rang means rank, level, or place in a hierarchy. In a theatre, this may mean the balcony level.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #152 — b1-rang (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** on the balcony
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** on the balcony
- **VALIDATED FINAL:** REPLACE: accent → seats
- **VALIDATION REASON:** Accent token "on the balcony" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #153 — b1-rang (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** In the theatre
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** In the theatre
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #154 — b1-rate (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Rate is a regular part of a payment, such as an installment purchase. der Rat with one -e means advice.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Rate is a regular part of a payment, such as an installment purchase. der Rat with one -e means advice.
- **VALIDATED FINAL:** Main idea: Rate is a regular part of a payment, such as an installment purchase. Rat with one -e means advice.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #155 — b1-rate (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** iemaksa
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** iemaksa
- **VALIDATED FINAL:** REPLACE: accent → Contribution
- **VALIDATION REASON:** Accent token "iemaksa" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #156 — b1-rate (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** padoms
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** padoms
- **VALIDATED FINAL:** REPLACE: accent → Advice
- **VALIDATION REASON:** Accent token "padoms" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #157 — b1-rate (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** nomaksa
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** nomaksa
- **VALIDATED FINAL:** REPLACE: accent → Payment
- **VALIDATION REASON:** Accent token "nomaksa" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #158 — b1-räumen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Die Polizei räumt die Straße. = The police clear the street.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Die Polizei räumt die Straße. = The police clear the street.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #159 — b1-räumen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** sort out
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** sort out
- **VALIDATED FINAL:** REPLACE: accent → Please
- **VALIDATION REASON:** Accent token "sort out" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #160 — b1-räumen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** release
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** release
- **VALIDATED FINAL:** REPLACE: accent → clear
- **VALIDATION REASON:** Accent token "release" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #161 — b1-rausch (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Rausch is intoxication or a state of intoxication. In a figurative sense, it can also be a strong excitement.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Rausch is intoxication or a state of intoxication. In a figurative sense, it can also be a strong excitem
- **VALIDATED FINAL:** Main idea: Rausch is intoxication or a state of intoxication. In a figurative sense, it can also be a strong excitem
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #162 — b1-rausch (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** apreibumu
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** apreibumu
- **VALIDATED FINAL:** REPLACE: accent → experienced
- **VALIDATION REASON:** Accent token "apreibumu" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #163 — b1-rausch (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** reibums
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** reibums
- **VALIDATED FINAL:** REPLACE: accent → Intoxication
- **VALIDATION REASON:** Accent token "reibums" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #164 — b1-rausch (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** prieks
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** prieks
- **VALIDATED FINAL:** REPLACE: accent → Pleasure
- **VALIDATION REASON:** Accent token "prieks" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #165 — b1-rausch (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** prieks
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** prieks
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #166 — b1-reißen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** bursting
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** bursting
- **VALIDATED FINAL:** REPLACE: accent → burst
- **VALIDATION REASON:** Accent token "bursting" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #167 — b1-richten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** in court
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** in court
- **VALIDATED FINAL:** REPLACE: accent → judge
- **VALIDATION REASON:** Accent token "in court" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #168 — b1-richten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** spriest
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** spriest
- **VALIDATED FINAL:** REPLACE: accent → judge
- **VALIDATION REASON:** Accent token "spriest" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #169 — b1-rösten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** bake in the oven
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** bake in the oven
- **VALIDATED FINAL:** REPLACE: accent → Bake
- **VALIDATION REASON:** Accent token "bake in the oven" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #170 — b1-rüsten (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich bereite das Essen vor. = I prepared the food.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich bereite das Essen vor. = I prepared the food.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #171 — b1-rüsten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** sagatavot
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** sagatavot
- **VALIDATED FINAL:** REPLACE: accent → prepare
- **VALIDATION REASON:** Accent token "sagatavot" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #172 — b1-rüsten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** armament
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** armament
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "armament" matches target section text (comparison[2].meaning). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #173 — b1-saat (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Saat means seed, sowing or sown field. For one individual seed, der Samen is more commonly used.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Saat means seed, sowing or sown field. For one individual seed, der Samen is more commonly used.
- **VALIDATED FINAL:** Main idea: Saat means seed, sowing or sown field. For one individual seed, Samen is more commonly used.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #174 — b1-schicht (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Schicht means layer or layer. In a work context, it means change.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** die Schicht
- **VALIDATED FINAL:** Schicht
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #175 — b1-schmelzen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich taue das Fleisch auf. = I thawed the meat.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich taue das Fleisch auf. = I thawed the meat.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #176 — b1-schmelzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** kust
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** kust
- **VALIDATED FINAL:** REPLACE: accent → melt
- **VALIDATION REASON:** Accent token "kust" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #177 — b1-schmieren (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Er streicht die Wand. = He is painting the wall.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Er streicht die Wand. = He is painting the wall.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #178 — b1-schmieren (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** to paint
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** to paint
- **VALIDATED FINAL:** REPLACE: accent → spread
- **VALIDATION REASON:** Accent token "to paint" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #179 — b1-schmieren (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** öle
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** öle
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "öle" matches target section text (comparison[2].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #180 — b1-schnitt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Schnitt is a cut or the result of cutting. Depending on the field, this can be a cut, a film montage, or an average.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Schnitt is a cut or the result of cutting. Depending on the field, this can be a cut, a film montage, or 
- **VALIDATED FINAL:** Main idea: Schnitt is a cut or the result of cutting. Depending on the field, this can be a cut, a film montage, or 
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #181 — b1-schuldig (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** die Schuld
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** die Schuld
- **VALIDATED FINAL:** Schuld
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #182 — b1-schuldig (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** owed
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** owed
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #183 — b1-schützen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Er bewacht das Haus. = He guards the house.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Er bewacht das Haus. = He guards the house.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #184 — b1-schützen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** must be protected
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** must be protected
- **VALIDATED FINAL:** REPLACE: accent → must
- **VALIDATION REASON:** Accent token "must be protected" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #185 — b1-schützen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** TRUE REGRESSION
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** kam?
- **HIGH REPAIR SOURCE:** #13
- **HIGH REPAIR CHANGED THIS FIELD:** YES
- **CURRENT PRODUCTION:** whom?
- **VALIDATED FINAL:** REPLACE: accent → Protects
- **VALIDATION REASON:** Accent token "whom?" not found in field-targeted English text for tip[null].null.
- **OWNER VERDICT:** PENDING

### Finding #186 — b1-senden (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich schicke dir das Foto. = I send you a photo.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich schicke dir das Foto. = I send you a photo.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #187 — b1-senden (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** übertragen
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** übertragen
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "übertragen" matches target section text (comparison[2].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #188 — b1-sinn (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: der Sinn means sense or meaning. In phrases it can also mean feeling, for example Sinn für Humor.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main Idea: der Sinn means sense or meaning. In phrases it can also mean feeling, for example Sinn für Humor.
- **VALIDATED FINAL:** Main Idea: Sinn means sense or meaning. In phrases it can also mean feeling, for example Sinn für Humor.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #189 — b1-sitz (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Sitz means a seat or seat. For a company or institution, it means domicile.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** der Sitz means a seat or seating place. For a company or institution, it means headquarters.
- **VALIDATED FINAL:** Sitz means a seat or seating place. For a company or institution, it means headquarters.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #190 — b1-sitz (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** residence
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** residence
- **VALIDATED FINAL:** REPLACE: accent → company
- **VALIDATION REASON:** Accent token "residence" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #191 — b1-sitz (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** residence
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** residence
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #192 — b1-sowie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** und
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** und
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "und" not found in field-targeted English text for comparison[1].example.
- **OWNER VERDICT:** PENDING

### Finding #193 — b1-sowie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Sobald
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Sobald
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "Sobald" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #194 — b1-spannung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: die Spannung means tension or tension. In technical language, especially in electricity, it means voltage.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Spannung means tension or strain. In technical language, especially in electricity, it means voltage.
- **VALIDATED FINAL:** Main idea: Spannung means tension or strain. In technical language, especially in electricity, it means voltage.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #195 — b1-spannung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Spriegums
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Spriegums
- **VALIDATED FINAL:** REPLACE: accent → voltage
- **VALIDATION REASON:** Accent token "Spriegums" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #196 — b1-spannung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** spriedze
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** spriedze
- **VALIDATED FINAL:** REPLACE: accent → Tension
- **VALIDATION REASON:** Accent token "spriedze" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #197 — b1-spannung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** spriedze
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** spriedze
- **VALIDATED FINAL:** REPLACE: accent → Tension
- **VALIDATION REASON:** Accent token "spriedze" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #198 — b1-spannung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** spriegums
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** spriegums
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #199 — b1-spitze (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Spitze is a pointed end or highest point. In a figurative sense, it can be leadership or a position at the top.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Spitze is a pointed end or highest point. In a figurative sense, it can be leadership or a position at th
- **VALIDATED FINAL:** Main idea: Spitze is a pointed end or highest point. In a figurative sense, it can be leadership or a position at th
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #200 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** under the leadership
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** under the leadership
- **VALIDATED FINAL:** REPLACE: accent → She
- **VALIDATION REASON:** Accent token "under the leadership" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #201 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** virsotne
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** virsotne
- **VALIDATED FINAL:** REPLACE: accent → Mountain
- **VALIDATION REASON:** Accent token "virsotne" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #202 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** beigas
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** beigas
- **VALIDATED FINAL:** REPLACE: accent → end
- **VALIDATION REASON:** Accent token "beigas" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #203 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** punkts
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** punkts
- **VALIDATED FINAL:** REPLACE: accent → sharpest
- **VALIDATION REASON:** Accent token "punkts" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #204 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** under the leadership
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** under the leadership
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #205 — b1-stift (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** The main idea: der Stift is everyday writing - pencil or pen. Technically, it can also be a pin or small metal part.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** The main idea: der Stift is everyday writing - pencil or pen. Technically, it can also be a pin or small metal part.
- **VALIDATED FINAL:** The main idea: Stift is everyday writing - pencil or pen. Technically, it can also be a pin or small metal part.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #206 — b1-stillen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Die Mutter stillt das Baby. = A mother is nursing a child.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Die Mutter stillt das Baby. = A mother is nursing a child.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #207 — b1-stoßen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Er stößt gegen die Tür. = He hits the door.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Er stößt gegen die Tür. = He hits the door.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #208 — b1-stoßen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** we bumped into
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** we bumped into
- **VALIDATED FINAL:** REPLACE: accent → ran
- **VALIDATION REASON:** Accent token "we bumped into" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #209 — b1-stoßen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** stumt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** stumt
- **VALIDATED FINAL:** REPLACE: accent → Push
- **VALIDATION REASON:** Accent token "stumt" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #210 — b1-stoßen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** satikt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** satikt
- **VALIDATED FINAL:** REPLACE: accent → meet
- **VALIDATION REASON:** Accent token "satikt" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #211 — b1-streichen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich lösche die Datei. = I will delete the file.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich lösche die Datei. = I will delete the file.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #212 — b1-streichen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** to draw
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** to draw
- **VALIDATED FINAL:** REPLACE: accent → Draw
- **VALIDATION REASON:** Accent token "to draw" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #213 — b1-strom (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Strom is most often electricity or electric current in everyday life. In another context, it may be a large river or stream.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Strom is most often electricity or electric current in everyday life. In another context, it may be a lar
- **VALIDATED FINAL:** Main idea: Strom is most often electricity or electric current in everyday life. In another context, it may be a lar
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #214 — b1-strom (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** upe
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** upe
- **VALIDATED FINAL:** REPLACE: accent → river
- **VALIDATION REASON:** Accent token "upe" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #215 — b1-stürzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** krist
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** krist
- **VALIDATED FINAL:** REPLACE: accent → Fall
- **VALIDATION REASON:** Accent token "krist" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #216 — b1-szene (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Szene means a scene in a film, theatre or a specific situation. Colloquially, it can also mean a certain environment of people.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** die Szene
- **VALIDATED FINAL:** Szene
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #217 — b1-szene (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** skatuve
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** skatuve
- **VALIDATED FINAL:** REPLACE: accent → Stage
- **VALIDATION REASON:** Accent token "skatuve" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #218 — b1-tau (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main Idea: der Tau means dew—drops of water on grass or leaves. It is uncountable (singular only). Das Tau, on the other hand, means a ship's tow or rope.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** der Tau
- **VALIDATED FINAL:** Tau
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #219 — b1-taufen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** saukt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** saukt
- **VALIDATED FINAL:** REPLACE: accent → call
- **VALIDATION REASON:** Accent token "saukt" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #220 — b1-taufen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** In the church
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** In the church
- **VALIDATED FINAL:** REPLACE: accent → church
- **VALIDATION REASON:** Accent token "In the church" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #221 — b1-titel (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Titel means the title of a book, song, film or text. It can also mean a title, such as an academic or sports title.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Titel means the title of a book, song, film or text. It can also mean a title, such as an academic or spo
- **VALIDATED FINAL:** Main idea: Titel means the title of a book, song, film or text. It can also mean a title, such as an academic or spo
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #222 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tituls
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tituls
- **VALIDATED FINAL:** REPLACE: accent → title
- **VALIDATION REASON:** Accent token "tituls" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #223 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** nosaukums
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** nosaukums
- **VALIDATED FINAL:** REPLACE: accent → Name
- **VALIDATION REASON:** Accent token "nosaukums" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #224 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** virsraksts
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** virsraksts
- **VALIDATED FINAL:** REPLACE: accent → Title
- **VALIDATION REASON:** Accent token "virsraksts" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #225 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Überschrift
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Überschrift
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "Überschrift" matches target section text (comparison[1].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #226 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.yellow[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** For the book
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** For the book
- **VALIDATED FINAL:** REPLACE: accent → book
- **VALIDATION REASON:** Accent token "For the book" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #227 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.yellow[1]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** dziesmai
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** dziesmai
- **VALIDATED FINAL:** REPLACE: accent → book
- **VALIDATION REASON:** Accent token "dziesmai" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #228 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.yellow[2]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** filmai
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** filmai
- **VALIDATED FINAL:** REPLACE: accent → book
- **VALIDATION REASON:** Accent token "filmai" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #229 — b1-ton (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Ton means sound or tone. It is used for audio, voice, music, nuance of colour and manner of conversation.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: der Ton means sound or tone. It is used for audio, voice, music, nuance of colour and manner of conversation.
- **VALIDATED FINAL:** Main idea: Ton means sound or tone. It is used for audio, voice, music, nuance of colour and manner of conversation.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #230 — b1-ton (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** tonis
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** tonis
- **VALIDATED FINAL:** REPLACE: accent → shade
- **VALIDATION REASON:** Accent token "tonis" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #231 — b1-ton (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** balss
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** balss
- **VALIDATED FINAL:** REPLACE: accent → Voice
- **VALIDATION REASON:** Accent token "balss" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #232 — b1-ton (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** skan
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** skan
- **VALIDATED FINAL:** REPLACE: accent → What
- **VALIDATION REASON:** Accent token "skan" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #233 — b1-ton (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** runas manieri
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** runas manieri
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #234 — b1-trauen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** don't dare
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** don't dare
- **VALIDATED FINAL:** REPLACE: accent → does
- **VALIDATION REASON:** Accent token "don't dare" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #235 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** dzen
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** dzen
- **VALIDATED FINAL:** REPLACE: accent → wind
- **VALIDATION REASON:** Accent token "dzen" not found in field-targeted English text for examples[1].lv.
- **OWNER VERDICT:** PENDING

### Finding #236 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** nodarboties
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** nodarboties
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "nodarboties" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #237 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** machst
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** machst
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "machst" not found in field-targeted English text for comparison[1].example.
- **OWNER VERDICT:** PENDING

### Finding #238 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** TRUE REGRESSION
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** chase
- **HIGH REPAIR SOURCE:** #13
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Drive; urge
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "Drive; urge" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #239 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** treibt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** treibt
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "treibt" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #240 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.green
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** uns
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** uns
- **VALIDATED FINAL:** REMOVE
- **VALIDATION REASON:** Accent token "uns" not found in field-targeted English text for comparison[2].example.
- **OWNER VERDICT:** PENDING

### Finding #241 — b1-trennen (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Die Wand trennt die Zimmer. = A wall separates the rooms.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** To separate, separate
- **VALIDATED FINAL:** To separate
- **VALIDATION REASON:** Repeated word in learner-facing English reduces naturalness.
- **OWNER VERDICT:** PENDING

### Finding #242 — b1-trennen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Die Wand trennt die Zimmer. = A wall separates the rooms.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Die Wand trennt die Zimmer. = A wall separates the rooms.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #243 — b1-trennen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** broke up
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** broke up
- **VALIDATED FINAL:** REPLACE: accent → divorced
- **VALIDATION REASON:** Accent token "broke up" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #244 — b1-übergeben (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich gebe dir das Buch. = I give you a book.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich gebe dir das Buch. = I give you a book.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #245 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** have to throw up
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** have to throw up
- **VALIDATED FINAL:** REPLACE: accent → sick
- **VALIDATION REASON:** Accent token "have to throw up" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #246 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** nodot
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** nodot
- **VALIDATED FINAL:** REPLACE: accent → hand
- **VALIDATION REASON:** Accent token "nodot" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #247 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.blue
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** übergebe
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** übergebe
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "übergebe" matches target section text (comparison[0].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #248 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** dot
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** dot
- **VALIDATED FINAL:** REPLACE: accent → give
- **VALIDATION REASON:** Accent token "dot" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #249 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** vemt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** vemt
- **VALIDATED FINAL:** REPLACE: accent → Throw
- **VALIDATION REASON:** Accent token "vemt" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #250 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** nodot
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** nodot
- **VALIDATED FINAL:** REPLACE: accent → Without
- **VALIDATION REASON:** Accent token "nodot" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #251 — b1-überholen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Er überholt das Auto. = He overtakes the car.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Er überholt das Auto. = He overtakes the car.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #252 — b1-überholen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** under repair
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** under repair
- **VALIDATED FINAL:** REPLACE: accent → workshop
- **VALIDATION REASON:** Accent token "under repair" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #253 — b1-überholen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.blue
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** überholt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** überholt
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "überholt" matches target section text (comparison[0].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #254 — b1-überholen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** surpasses
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** surpasses
- **VALIDATED FINAL:** REPLACE: accent → Beating
- **VALIDATION REASON:** Accent token "surpasses" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #255 — b1-überholen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.blue
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** überholen
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** überholen
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #256 — b1-übernehmen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich übernehme die Aufgabe. = I take over the task.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich übernehme die Aufgabe. = I take over the task.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #257 — b1-übernehmen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** takes on
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** takes on
- **VALIDATED FINAL:** REPLACE: accent → company
- **VALIDATION REASON:** Accent token "takes on" not found in field-targeted English text for examples[1].lv.
- **OWNER VERDICT:** PENDING

### Finding #258 — b1-übernehmen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.blue
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** übernehme
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** übernehme
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "übernehme" matches target section text (comparison[0].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #259 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** apejam
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** apejam
- **VALIDATED FINAL:** REPLACE: accent → bypass
- **VALIDATION REASON:** Accent token "apejam" not found in field-targeted English text for examples[1].lv.
- **OWNER VERDICT:** PENDING

### Finding #260 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** apiet
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** apiet
- **VALIDATED FINAL:** REPLACE: accent → must
- **VALIDATION REASON:** Accent token "apiet" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #261 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** apieties
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** apieties
- **VALIDATED FINAL:** REPLACE: accent → Get
- **VALIDATION REASON:** Accent token "apieties" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #262 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** behave
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** behave
- **VALIDATED FINAL:** REPLACE: accent → treat
- **VALIDATION REASON:** Accent token "behave" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #263 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** apiet
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** apiet
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #264 — b1-unterhalten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** we talked
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** we talked
- **VALIDATED FINAL:** REPLACE: accent → long
- **VALIDATION REASON:** Accent token "we talked" not found in field-targeted English text for examples[1].lv.
- **OWNER VERDICT:** PENDING

### Finding #265 — b1-untersuchung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Untersuchung means investigation, examination or study. The context determines whether it is a doctor, a police officer, or a scientist.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** die Untersuchung
- **VALIDATED FINAL:** Untersuchung
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #266 — b1-untersuchung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.green[1]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** policija
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** policija
- **VALIDATED FINAL:** REPLACE: accent → doctor
- **VALIDATION REASON:** Accent token "policija" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #267 — b1-verändern (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Das verändert die Situation. = This changes the situation.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Das verändert die Situation. = This changes the situation.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #268 — b1-verändern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** ändere
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** ändere
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "ändere" matches target section text (comparison[1].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #269 — b1-verband (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: In medicine, der Verband is a bandage. In the language of organizations, it means an association or a federation.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: In medicine, der Verband is a bandage. In the language of organizations, it means an association or a federat
- **VALIDATED FINAL:** Main idea: In medicine, Verband is a bandage. In the language of organizations, it means an association or a federat
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #270 — b1-verband (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** savienojums
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** savienojums
- **VALIDATED FINAL:** REPLACE: accent → Connection
- **VALIDATION REASON:** Accent token "savienojums" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #271 — b1-verbindung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: die Verbindung means a connection or link between things, people, places or systems.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Main idea: die Verbindung means a connection or link between things, people, places or systems.
- **VALIDATED FINAL:** Main idea: Verbindung means a connection or link between things, people, places or systems.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #272 — b1-verbindung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Has
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Has
- **VALIDATED FINAL:** REPLACE: accent → There
- **VALIDATION REASON:** Accent token "Has" not found in field-targeted English text for examples[1].lv.
- **OWNER VERDICT:** PENDING

### Finding #273 — b1-verbindung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** saikne
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** saikne
- **VALIDATED FINAL:** REPLACE: accent → have
- **VALIDATION REASON:** Accent token "saikne" not found in field-targeted English text for examples[2].lv.
- **OWNER VERDICT:** PENDING

### Finding #274 — b1-verbindung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** savienojums
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** savienojums
- **VALIDATED FINAL:** REPLACE: accent → Connection
- **VALIDATION REASON:** Accent token "savienojums" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #275 — b1-verbindung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** saikne
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** saikne
- **VALIDATED FINAL:** REPLACE: accent → Internet
- **VALIDATION REASON:** Accent token "saikne" not found in field-targeted English text for tip[null].leftBlocks.
- **OWNER VERDICT:** PENDING

### Finding #276 — b1-verbrennen (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Ich zünde die Kerze an. = I light a candle.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** To burn, burn up, burn yourself
- **VALIDATED FINAL:** To burn up, burn yourself
- **VALIDATION REASON:** Repeated word in learner-facing English reduces naturalness.
- **OWNER VERDICT:** PENDING

### Finding #277 — b1-verbrennen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich zünde die Kerze an. = I light a candle.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich zünde die Kerze an. = I light a candle.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #278 — b1-verbrennen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** degt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** degt
- **VALIDATED FINAL:** REPLACE: accent → burn
- **VALIDATION REASON:** Accent token "degt" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #279 — b1-verderben (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Er macht das Handy kaputt. = He breaks the phone.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Er macht das Handy kaputt. = He breaks the phone.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #280 — b1-verderben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** salauzt
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** salauzt
- **VALIDATED FINAL:** REPLACE: accent → Break
- **VALIDATION REASON:** Accent token "salauzt" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #281 — b1-verletzen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Er bricht die Regel. = He breaks the rule.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Er bricht die Regel. = He breaks the rule.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #282 — b1-verletzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** savainot
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** savainot
- **VALIDATED FINAL:** REPLACE: accent → injure
- **VALIDATION REASON:** Accent token "savainot" not found in field-targeted English text for comparison[0].meaning.
- **OWNER VERDICT:** PENDING

### Finding #283 — b1-verletzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** apvainot
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** apvainot
- **VALIDATED FINAL:** REPLACE: accent → Insult
- **VALIDATION REASON:** Accent token "apvainot" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #284 — b1-verletzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** to violate
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** to violate
- **VALIDATED FINAL:** REPLACE: accent → Break
- **VALIDATION REASON:** Accent token "to violate" not found in field-targeted English text for comparison[2].meaning.
- **OWNER VERDICT:** PENDING

### Finding #285 — b1-verletzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** to violate
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** to violate
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #286 — b1-versichern (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich versichere das Auto. = I insure the car.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich versichere das Auto. = I insure the car.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #287 — b1-versichern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** to provide
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** to provide
- **VALIDATED FINAL:** REPLACE: accent → secure
- **VALIDATION REASON:** Accent token "to provide" not found in field-targeted English text for comparison[1].meaning.
- **OWNER VERDICT:** PENDING

### Finding #288 — b1-wechsel (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** VALIDATED REAL ISSUE
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **REPAIR REQUIRED:** YES
- **PRE-REPAIR VALUE:** Main idea: der Wechsel means change or change. In special phrases such as Exchange rate, the meaning becomes specific.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** der Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.
- **VALIDATED FINAL:** Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.
- **VALIDATION REASON:** German article with capitalized noun in monolingual English learner-facing text; remove article for EN learner readability.
- **OWNER VERDICT:** PENDING

### Finding #289 — b1-wechsel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Änderung
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Änderung
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Field-targeted validation: "Änderung" matches target section text (comparison[1].example). Regression audit used whole-card text scan.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #290 — b1-zugeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.important.red
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** pievienot
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** pievienot
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** Accent path targets German DE highlight field; regression audit incorrectly flagged non-English accent slot.
- **OWNER VERDICT:** NOT REQUIRED

### Finding #291 — b1-zünden (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **VALIDATION STATUS:** FALSE POSITIVE
- **ORIGIN:** NOT APPLICABLE — FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **PRE-REPAIR VALUE:** Ich zünde die Kerze an. = I light a candle.
- **HIGH REPAIR SOURCE:** NONE
- **HIGH REPAIR CHANGED THIS FIELD:** NO
- **CURRENT PRODUCTION:** Ich zünde die Kerze an. = I light a candle.
- **VALIDATED FINAL:** KEEP
- **VALIDATION REASON:** German article appears only in the German half of a bilingual comparison.example string; legitimate DE content.
- **OWNER VERDICT:** NOT REQUIRED

---

**REGRESSION VALIDATION: COMPLETE**
**HIGH CYCLE: NOT CLOSED**

**Next:** EN–DE B1 HIGH REGRESSION OWNER REVIEW — ALL VALIDATED REPAIR CANDIDATES