# EN–DE B1 HIGH REGRESSION OWNER REVIEW

**Generated:** 2026-08-09T12:46:24.714Z

**Status:** EN–DE B1 HIGH REGRESSION OWNER REVIEW: COMPLETE — no production changes

## Input

| Metric | Value |
| --- | --- |
| Validated real issues | 214 |
| False positives excluded | 77 |
| GRAMMAR false positives excluded | 51 |
| SECTIONACCENT false positives excluded | 26 |

## OWNER decisions

| Metric | Value |
| --- | --- |
| Reviewed | 214/214 |
| LABOT | 214 |
| NELABOT | 0 |
| PENDING | 0 |

## Origin (unchanged from validation)

| Origin | Count |
| --- | --- |
| TRUE REGRESSION | 4 |
| PRE-EXISTING / NEWLY DISCOVERED | 210 |
| INDETERMINATE | 0 |

## Severity

| Severity | Count |
| --- | --- |
| CRITICAL | 0 |
| HIGH | 3 |
| MEDIUM | 211 |
| LOW | 0 |

## sectionAccents

| Kind | Count |
| --- | --- |
| TECHNICAL | 143 |
| PEDAGOGICAL | 3 |

## Traceability

| Metric | Value |
| --- | --- |
| OWNER FINAL present | 214/214 |
| Repair mappings present | 214/214 |
| Missing mappings | 0 |
| Conflicting mappings | 0 |
| Current value mismatches (audit vs production) | 0 |
| Unique production cards | 103 |

## Production

- Changes: 0
- DE READ-ONLY: PASS
- Mirror parity: PASS

## Key OWNER FINAL (HIGH + TRUE REGRESSION)

### b1-tank — 3 HIGH `tvertne` (PRE-EXISTING)

| Field | OWNER FINAL |
| --- | --- |
| comparison[0].meaning.purple | Tank |
| comparison[1].meaning.purple | Vessel |
| tip.leftBlocks[0].text.purple[0] | tank |

### TRUE REGRESSION (4)

| Card | Field | OWNER FINAL | Source |
| --- | --- | --- | --- |
| b1-landen | comparison[1].meaning.purple | __REMOVE_ACCENT__ | HIGH #12 |
| b1-maß | comparison[2].meaning.purple | Measure | HIGH #12 |
| b1-schützen | tip.red | Protects | HIGH #13 |
| b1-treiben | comparison[2].meaning.purple | __REMOVE_ACCENT__ | HIGH #13 |

---

**REGRESSION AUDIT:** COMPLETE
**REGRESSION VALIDATION:** COMPLETE
**REGRESSION OWNER REVIEW:** COMPLETE
**REGRESSION REPAIR:** READY / NOT STARTED
**MICRO-REGRESSION:** NOT STARTED
**HIGH CYCLE:** NOT CLOSED

**Next:** EN–DE B1 HIGH REGRESSION REPAIR — ALL 214 OWNER-APPROVED FINDINGS

## All findings (detail)

### Finding #1 — b1-abschnitt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Abschnitt means a section or part of a text. It is used for text, road, job or time.
- **VALIDATED FINAL:** Main idea: Abschnitt means a section or part of a text. It is used for text, road, job or time.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Abschnitt means a section or part of a text. It is used for text, road, job or time.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #2 — b1-antrag (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Antrag means submission or formal application. In meetings, it can also mean a proposal for voting.
- **VALIDATED FINAL:** Main idea: Antrag means submission or formal application. In meetings, it can also mean a proposal for voting.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Antrag means submission or formal application. In meetings, it can also mean a proposal for voting.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #4 — b1-berichten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** notikumiem
- **VALIDATED FINAL:** REPLACE: notikumiem → Berichten
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Berichten
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #63 — b1-bildschirm (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: d
- **VALIDATED FINAL:** Main idea: Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: d
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: d
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #5 — b1-blase (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Blase means blister, blister or bubble. It is usually a blister on the skin, a blister in the body, a bub
- **VALIDATED FINAL:** Main idea: Blase means blister, blister or bubble. It is usually a blister on the skin, a blister in the body, a bub
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Blase means blister, blister or bubble. It is usually a blister on the skin, a blister in the body, a bub
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #6 — b1-blase (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tulzna
- **VALIDATED FINAL:** REPLACE: accent → Foot
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Foot
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #64 — b1-block (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Block means block or notepad. In the context of the material, it can be a lump or a large piece.
- **VALIDATED FINAL:** Main idea: Block means block or notepad. In the context of the material, it can be a lump or a large piece.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Block means block or notepad. In the context of the material, it can be a lump or a large piece.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #7 — b1-bloß (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tikai
- **VALIDATED FINAL:** REPLACE: accent → conversation
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** conversation
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #8 — b1-bloß (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** kails/pliks
- **VALIDATED FINAL:** REPLACE: accent → conversation
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** conversation
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #65 — b1-bogen (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Bogen means bow. Depending on the context, it can also be an arch or a page, such as Fragebogen.
- **VALIDATED FINAL:** Main idea: Bogen means bow. Depending on the context, it can also be an arch or a page, such as Fragebogen.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Bogen means bow. Depending on the context, it can also be an arch or a page, such as Fragebogen.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #71 — b1-einfluss (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Einfluss means influence on a person, decision, or situation. A very common construction is Einfluss auf 
- **VALIDATED FINAL:** Main idea: Einfluss means influence on a person, decision, or situation. A very common construction is Einfluss auf 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Einfluss means influence on a person, decision, or situation. A very common construction is Einfluss auf
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #73 — b1-einführung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Einführung means introduction or implementation. In a text or course, it is an introduction; for a new sy
- **VALIDATED FINAL:** Main idea: Einführung means introduction or implementation. In a text or course, it is an introduction; for a new sy
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Einführung means introduction or implementation. In a text or course, it is an introduction; for a new sy
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #76 — b1-einheit (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Einheit means a unit. It can be a unit of study, a technical unit, or a unit of measurement depending on 
- **VALIDATED FINAL:** Main idea: Einheit means a unit. It can be a unit of study, a technical unit, or a unit of measurement depending on 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Einheit means a unit. It can be a unit of study, a technical unit, or a unit of measurement depending on
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #78 — b1-einsatz (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Einsatz means active use or involvement in a particular situation. Common phrases are im Einsatz and zum 
- **VALIDATED FINAL:** Main idea: Einsatz means active use or involvement in a particular situation. Common phrases are im Einsatz and zum 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Einsatz means active use or involvement in a particular situation. Common phrases are im Einsatz and zum
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #89 — b1-folge (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: die Folge most often means a consequence or result that follows an event. In a media context, Folge means an 
- **VALIDATED FINAL:** Main Idea: Folge most often means a consequence or result that follows an event. In a media context, Folge means an 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Folge most often means a consequence or result that follows an event. In a media context, Folge means an
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #90 — b1-futter (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: das Futter usually means animal food. In the context of clothing, Futter means the lining of a jacket, coat, 
- **VALIDATED FINAL:** Main idea: Futter usually means animal food. In the context of clothing, Futter means the lining of a jacket, coat, 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Futter usually means animal food. In the context of clothing, Futter means the lining of a jacket, coat,
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #91 — b1-gehalt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: das Gehalt means salary or wages. Der Gehalt, on the other hand, means content—the essence of a letter, speec
- **VALIDATED FINAL:** Main idea: Gehalt means salary or wages. Der Gehalt, on the other hand, means content—the essence of a letter, speec
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Gehalt means salary or wages. Der Gehalt, on the other hand, means content—the essence of a letter, speec
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #92 — b1-geschlecht (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: das Geschlecht means gender in humans or animals. In the grammar of the language, it means gender, such as ma
- **VALIDATED FINAL:** Main idea: Geschlecht means gender in humans or animals. In the grammar of the language, it means gender, such as ma
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Geschlecht means gender in humans or animals. In the grammar of the language, it means gender, such as ma
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #93 — b1-gewinn (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Gewinn means profit - money left over after costs. In games, contests, and lotteries, it means a win or a
- **VALIDATED FINAL:** Main idea: Gewinn means profit - money left over after costs. In games, contests, and lotteries, it means a win or a
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Gewinn means profit - money left over after costs. In games, contests, and lotteries, it means a win or a
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #95 — b1-gitter (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: das Gitter means grid or grate - a structure with openings near a window, door, cage or ventilation.
- **VALIDATED FINAL:** Main idea: Gitter means grid or grate - a structure with openings near a window, door, cage or ventilation.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Gitter means grid or grate - a structure with openings near a window, door, cage or ventilation.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #97 — b1-griff (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can a
- **VALIDATED FINAL:** Main idea: Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can a
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can a
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #10 — b1-handeln (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** par ko ir teksts
- **VALIDATED FINAL:** REPLACE: accent → handeln
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** handeln
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #11 — b1-handeln (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tirgojas
- **VALIDATED FINAL:** REPLACE: accent → handeln
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** handeln
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #99 — b1-hinweis (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Hinweis is an instruction, note, or piece of information that helps you notice, understand, or find somet
- **VALIDATED FINAL:** Main idea: Hinweis is an instruction, note, or piece of information that helps you notice, understand, or find somet
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Hinweis is an instruction, note, or piece of information that helps you notice, understand, or find somet
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #12 — b1-hort (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.
- **VALIDATED FINAL:** Main idea: Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Hort (also Schulhort/Kinderhort) is an after-school care facility for school-aged children.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #101 — b1-hupe (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Hupe is a car horn or a ship's horn. It warns others in traffic. Plural: die Hupen.
- **VALIDATED FINAL:** Main idea: Hupe is a car horn or a ship's horn. It warns others in traffic. Plural: Hupen.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Hupe is a car horn or a ship's horn. It warns others in traffic. Plural: Hupen.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #14 — b1-jagen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** goals
- **VALIDATED FINAL:** REPLACE: accent → jagen
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** jagen
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #15 — b1-kader (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: der Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.
- **VALIDATED FINAL:** Main Idea: Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Kader means a (qualified) cadre or nucleus—a group of people with a specific role or qualification.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #16 — b1-kern (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: der Kern means kernel, seed/seed, or essence of a thing. It is used both for fruits and figuratively for the 
- **VALIDATED FINAL:** Main Idea: Kern means kernel, seed/seed, or essence of a thing. It is used both for fruits and figuratively for the 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Kern means kernel, seed/seed, or essence of a thing. It is used both for fruits and figuratively for the
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #17 — b1-kern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** in the fetus
- **VALIDATED FINAL:** REPLACE: accent → Kern
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Kern
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #18 — b1-kern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** in the case
- **VALIDATED FINAL:** REPLACE: accent → Kern
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Kern
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #19 — b1-kern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** in the argument
- **VALIDATED FINAL:** REPLACE: accent → Kern
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Kern
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #102 — b1-kiefer (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Kiefer means jaw. With another article, die Kiefer means pine, so the article is especially important for
- **VALIDATED FINAL:** Main idea: Kiefer means jaw. With another article, Kiefer means pine, so the article is especially important for
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Kiefer means jaw. With another article, Kiefer means pine, so the article is especially important for
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #20 — b1-kommando (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: das Kommando is a command or command, especially in a military, sporting or organised situation. It can also 
- **VALIDATED FINAL:** Main Idea: Kommando is a command or command, especially in a military, sporting or organised situation. It can also 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Kommando is a command or command, especially in a military, sporting or organised situation. It can also
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #21 — b1-kommando (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **Repair field:** study.sectionAccents.comparison[0].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** komandu
- **VALIDATED FINAL:** REPLACE: accent → Wait
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Wait
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #106 — b1-kreuzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** to mark
- **VALIDATED FINAL:** REPLACE: accent → Mark
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Mark
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #108 — b1-kündigen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.purple
- **Repair field:** study.sectionAccents.comparison[1].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** dismissed
- **VALIDATED FINAL:** REPLACE: accent → The
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #109 — b1-kündigen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **Repair field:** study.sectionAccents.comparison[2].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** I stopped
- **VALIDATED FINAL:** REPLACE: accent → dropped
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** dropped
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #111 — b1-kuppeln (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** savienot
- **VALIDATED FINAL:** REPLACE: accent → connect
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** connect
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #22 — b1-kurs (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.comparison[0].word
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** der Kurs
- **VALIDATED FINAL:** Kurs
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Kurs
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #23 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** kurss
- **VALIDATED FINAL:** REPLACE: accent → Course
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Course
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #24 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **Repair field:** study.sectionAccents.comparison[0].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Kurss
- **VALIDATED FINAL:** REPLACE: accent → The
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #25 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** virziens
- **VALIDATED FINAL:** REPLACE: accent → Direction
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Direction
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #26 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.purple
- **Repair field:** study.sectionAccents.comparison[1].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Virziens
- **VALIDATED FINAL:** REPLACE: accent → The
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #27 — b1-kurs (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **Repair field:** study.sectionAccents.comparison[2].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Stunda
- **VALIDATED FINAL:** REPLACE: accent → The
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #112 — b1-laden (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **Repair field:** study.sectionAccents.comparison[2].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** piekrauts
- **VALIDATED FINAL:** REPLACE: accent → The
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #113 — b1-lager (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: das Lager is usually a warehouse or storage place. In another context, it may be a camp or technical bearing.
- **VALIDATED FINAL:** Main idea: Lager is usually a warehouse or storage place. In another context, it may be a camp or technical bearing.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Lager is usually a warehouse or storage place. In another context, it may be a camp or technical bearing.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #114 — b1-lager (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** noliktava
- **VALIDATED FINAL:** REPLACE: accent → Warehouse
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Warehouse
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #115 — b1-lager (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **Repair field:** study.sectionAccents.comparison[2].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Nometne
- **VALIDATED FINAL:** REPLACE: accent → The
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #116 — b1-inhalt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Inhalt is content - in a text, a bag, a container or a file. Technically, it can also mean volume.
- **VALIDATED FINAL:** Main idea: Inhalt is content - in a text, a bag, a container or a file. Technically, it can also mean volume.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Inhalt is content - in a text, a bag, a container or a file. Technically, it can also mean volume.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #117 — b1-kante (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp
- **VALIDATED FINAL:** Main idea: Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #118 — b1-kante (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **Repair field:** study.sectionAccents.comparison[0].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Mala
- **VALIDATED FINAL:** REPLACE: accent → The
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #119 — b1-kante (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** mala
- **VALIDATED FINAL:** REPLACE: accent → Edge
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Edge
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #28 — b1-kastanie (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Kastanie can mean both the chestnut tree and the chestnut fruit itself. The context shows which meaning i
- **VALIDATED FINAL:** Main idea: Kastanie can mean both the chestnut tree and the chestnut fruit itself. The context shows which meaning i
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Kastanie can mean both the chestnut tree and the chestnut fruit itself. The context shows which meaning i
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #29 — b1-kastanie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** kastanis
- **VALIDATED FINAL:** REPLACE: accent → Chestnut
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Chestnut
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #30 — b1-kastanie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **Repair field:** study.sectionAccents.comparison[0].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Kastanis
- **VALIDATED FINAL:** REPLACE: accent → Chestnut
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Chestnut
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #31 — b1-kastanie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** rieksts
- **VALIDATED FINAL:** REPLACE: accent → Nut
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Nut
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #32 — b1-kastanie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **Repair field:** study.sectionAccents.comparison[2].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Rieksts
- **VALIDATED FINAL:** REPLACE: accent → The
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #120 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.blue
- **Repair field:** study.sectionAccents.comparison[0].example.blue
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** landet
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #121 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **Repair field:** study.sectionAccents.comparison[0].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** sits down
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #122 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** TRUE REGRESSION
- **CURRENT:** arrive
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #123 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** dock with a ship
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #124 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **Repair field:** study.sectionAccents.comparison[2].example.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** legt
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #125 — b1-landen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.purple
- **Repair field:** study.sectionAccents.comparison[2].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** stops by
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #126 — b1-leisten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** veikt
- **VALIDATED FINAL:** REPLACE: accent → Perform
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Perform
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #127 — b1-leisten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].example.purple
- **Repair field:** study.sectionAccents.comparison[0].example.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** veic
- **VALIDATED FINAL:** REPLACE: accent → She
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** She
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #128 — b1-leisten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** paveikt
- **VALIDATED FINAL:** REPLACE: accent → accomplish
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** accomplish
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #129 — b1-leistung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Leistung means performance, accomplishment or achievement. In engineering, it means power, for example fo
- **VALIDATED FINAL:** Main idea: Leistung means performance, accomplishment or achievement. In engineering, it means power, for example fo
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Leistung means performance, accomplishment or achievement. In engineering, it means power, for example fo
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #130 — b1-locker (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **Repair field:** study.comparison[2].meaning
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Tight, tight
- **VALIDATED FINAL:** Tight
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Tight
- **OWNER NOTE:** OWNER approved regression naturalness correction (VALIDATED FINAL).

### Finding #131 — b1-locker (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** stingrs
- **VALIDATED FINAL:** REPLACE: accent → Tight
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Tight
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #132 — b1-los (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: das Los is a lottery ticket or lot that is drawn or bought. In a more serious, figurative language, it can al
- **VALIDATED FINAL:** Main idea: Los is a lottery ticket or lot that is drawn or bought. In a more serious, figurative language, it can al
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Los is a lottery ticket or lot that is drawn or bought. In a more serious, figurative language, it can al
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #133 — b1-los (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** likteni
- **VALIDATED FINAL:** REPLACE: accent → accepted
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** accepted
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #134 — b1-macht (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: die Macht means the power or ability to influence people, decisions, and policies. Die Kraft is usually used 
- **VALIDATED FINAL:** Main Idea: Macht means the power or ability to influence people, decisions, and policies. Die Kraft is usually used 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Macht means the power or ability to influence people, decisions, and policies. Die Kraft is usually used
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #135 — b1-macht (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** vara
- **VALIDATED FINAL:** REPLACE: accent → Power
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Power
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #136 — b1-macht (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** ietekme
- **VALIDATED FINAL:** REPLACE: accent → Influence
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Influence
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #137 — b1-maß (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: das Maß means measure, limit or extent. In the plural, die Maße usually means dimensions.
- **VALIDATED FINAL:** Main idea: Maß means measure, limit or extent. In the plural, Maße usually means dimensions.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Maß means measure, limit or extent. In the plural, Maße usually means dimensions.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #138 — b1-maß (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** TRUE REGRESSION
- **CURRENT:** action / measure
- **VALIDATED FINAL:** REPLACE: accent → Measure
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Measure
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #139 — b1-nachfrage (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inq
- **VALIDATED FINAL:** Main idea: Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inq
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inq
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #140 — b1-neigung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Neigung means a tendency or inclination towards something. In a technical context, it can also mean slope
- **VALIDATED FINAL:** Main idea: Neigung means a tendency or inclination towards something. In a technical context, it can also mean slope
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Neigung means a tendency or inclination towards something. In a technical context, it can also mean slope
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #141 — b1-neigung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** interese
- **VALIDATED FINAL:** REPLACE: accent → Interest
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Interest
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #143 — b1-nüchtern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** neiereibis
- **VALIDATED FINAL:** REPLACE: accent → drunk
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** drunk
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #144 — b1-objekt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: das Objekt is the object, thing or building that is being talked about. In grammar, Objekt means object.
- **VALIDATED FINAL:** Main idea: Objekt is the object, thing or building that is being talked about. In grammar, Objekt means object.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Objekt is the object, thing or building that is being talked about. In grammar, Objekt means object.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #145 — b1-objekt (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** objekts
- **VALIDATED FINAL:** REPLACE: accent → Object
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Object
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #146 — b1-objekt (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.red
- **Repair field:** study.sectionAccents.tip.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** subjekts
- **VALIDATED FINAL:** REPLACE: accent → Object
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Object
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #147 — b1-periode (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Periode means a period of time or a cycle. In medicine and in everyday life, it can mean menstruation.
- **VALIDATED FINAL:** Main idea: Periode means a period of time or a cycle. In medicine and in everyday life, it can mean menstruation.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Periode means a period of time or a cycle. In medicine and in everyday life, it can mean menstruation.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #149 — b1-probe (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Probe means test, sample or attempt. The meaning is determined by the situation.
- **VALIDATED FINAL:** Main idea: Probe means test, sample or attempt. The meaning is determined by the situation.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Probe means test, sample or attempt. The meaning is determined by the situation.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #150 — b1-probe (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** an attempt
- **VALIDATED FINAL:** REPLACE: accent → Concert
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Concert
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #151 — b1-rang (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: der Rang means rank, level, or place in a hierarchy. In a theatre, this may mean the balcony level.
- **VALIDATED FINAL:** Main Idea: Rang means rank, level, or place in a hierarchy. In a theatre, this may mean the balcony level.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Rang means rank, level, or place in a hierarchy. In a theatre, this may mean the balcony level.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #152 — b1-rang (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** on the balcony
- **VALIDATED FINAL:** REPLACE: accent → seats
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** seats
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #33 — b1-rasen (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **Repair field:** study.tip
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** If speed sounds too fast, fast is often enough.
- **VALIDATED FINAL:** If speed sounds too fast is often enough.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** If speed sounds too fast is often enough.
- **OWNER NOTE:** OWNER approved regression naturalness correction (VALIDATED FINAL).

### Finding #34 — b1-rasen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** braukt
- **VALIDATED FINAL:** REPLACE: accent → Drive
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Drive
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #35 — b1-rasen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.red
- **Repair field:** study.sectionAccents.tip.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** too big
- **VALIDATED FINAL:** REPLACE: accent → speed
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** speed
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #154 — b1-rate (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Rate is a regular part of a payment, such as an installment purchase. der Rat with one -e means advice.
- **VALIDATED FINAL:** Main idea: Rate is a regular part of a payment, such as an installment purchase. Rat with one -e means advice.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Rate is a regular part of a payment, such as an installment purchase. Rat with one -e means advice.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #155 — b1-rate (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** iemaksa
- **VALIDATED FINAL:** REPLACE: accent → Contribution
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Contribution
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #156 — b1-rate (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** padoms
- **VALIDATED FINAL:** REPLACE: accent → Advice
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Advice
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #157 — b1-rate (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** nomaksa
- **VALIDATED FINAL:** REPLACE: accent → Payment
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Payment
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #159 — b1-räumen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** sort out
- **VALIDATED FINAL:** REPLACE: accent → Please
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Please
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #160 — b1-räumen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** release
- **VALIDATED FINAL:** REPLACE: accent → clear
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** clear
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #161 — b1-rausch (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Rausch is intoxication or a state of intoxication. In a figurative sense, it can also be a strong excitem
- **VALIDATED FINAL:** Main idea: Rausch is intoxication or a state of intoxication. In a figurative sense, it can also be a strong excitem
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Rausch is intoxication or a state of intoxication. In a figurative sense, it can also be a strong excitem
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #162 — b1-rausch (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** apreibumu
- **VALIDATED FINAL:** REPLACE: accent → experienced
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** experienced
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #163 — b1-rausch (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** reibums
- **VALIDATED FINAL:** REPLACE: accent → Intoxication
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Intoxication
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #164 — b1-rausch (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** prieks
- **VALIDATED FINAL:** REPLACE: accent → Pleasure
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Pleasure
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #166 — b1-reißen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** bursting
- **VALIDATED FINAL:** REPLACE: accent → burst
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** burst
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #167 — b1-richten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** in court
- **VALIDATED FINAL:** REPLACE: accent → judge
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** judge
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #168 — b1-richten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** spriest
- **VALIDATED FINAL:** REPLACE: accent → judge
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** judge
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #169 — b1-rösten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** bake in the oven
- **VALIDATED FINAL:** REPLACE: accent → Bake
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Bake
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #171 — b1-rüsten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** sagatavot
- **VALIDATED FINAL:** REPLACE: accent → prepare
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** prepare
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #173 — b1-saat (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Saat means seed, sowing or sown field. For one individual seed, der Samen is more commonly used.
- **VALIDATED FINAL:** Main idea: Saat means seed, sowing or sown field. For one individual seed, Samen is more commonly used.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Saat means seed, sowing or sown field. For one individual seed, Samen is more commonly used.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #37 — b1-schale (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: die Schale is the rind, shell, or outer covering of a fruit. It can also mean a bowl or vessel.
- **VALIDATED FINAL:** Main Idea: Schale is the rind, shell, or outer covering of a fruit. It can also mean a bowl or vessel.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Schale is the rind, shell, or outer covering of a fruit. It can also mean a bowl or vessel.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #38 — b1-schale (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** miza
- **VALIDATED FINAL:** REPLACE: accent → Rind
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Rind
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #174 — b1-schicht (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.comparison[0].word
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** die Schicht
- **VALIDATED FINAL:** Schicht
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Schicht
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #39 — b1-schlag (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: der Schlag means a blow or blow. In context, it can also be a lightning strike, a clock strike, or a type.
- **VALIDATED FINAL:** Main Idea: Schlag means a blow or blow. In context, it can also be a lightning strike, a clock strike, or a type.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Schlag means a blow or blow. In context, it can also be a lightning strike, a clock strike, or a type.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #40 — b1-schlag (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** nosit
- **VALIDATED FINAL:** REPLACE: accent → clock
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** clock
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #41 — b1-schlag (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** sitiens
- **VALIDATED FINAL:** REPLACE: accent → blow
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** blow
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #43 — b1-schlag (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** zibens
- **VALIDATED FINAL:** REPLACE: accent → Lightning
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Lightning
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #176 — b1-schmelzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** kust
- **VALIDATED FINAL:** REPLACE: accent → melt
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** melt
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #178 — b1-schmieren (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** to paint
- **VALIDATED FINAL:** REPLACE: accent → spread
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** spread
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #180 — b1-schnitt (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Schnitt is a cut or the result of cutting. Depending on the field, this can be a cut, a film montage, or 
- **VALIDATED FINAL:** Main idea: Schnitt is a cut or the result of cutting. Depending on the field, this can be a cut, a film montage, or 
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Schnitt is a cut or the result of cutting. Depending on the field, this can be a cut, a film montage, or
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #181 — b1-schuldig (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.comparison[1].word
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** die Schuld
- **VALIDATED FINAL:** Schuld
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Schuld
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #184 — b1-schützen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** must be protected
- **VALIDATED FINAL:** REPLACE: accent → must
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** must
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #185 — b1-schützen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.red
- **Repair field:** study.sectionAccents.tip.red
- **ORIGIN:** TRUE REGRESSION
- **CURRENT:** whom?
- **VALIDATED FINAL:** REPLACE: accent → Protects
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Protects
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #44 — b1-senken (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **Repair field:** study.comparison[0].meaning
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** To lower, lower
- **VALIDATED FINAL:** To lower
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** To lower
- **OWNER NOTE:** OWNER approved regression naturalness correction (VALIDATED FINAL).

### Finding #46 — b1-senken (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **Repair field:** study.sectionAccents.examples[1].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** noliec
- **VALIDATED FINAL:** REPLACE: accent → She
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** She
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #47 — b1-senken (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** pieklusiniet
- **VALIDATED FINAL:** REPLACE: accent → Please
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Please
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #48 — b1-senken (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** kristies
- **VALIDATED FINAL:** REPLACE: accent → fall
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** fall
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #49 — b1-senken (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** pacelt
- **VALIDATED FINAL:** REPLACE: accent → Lift
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Lift
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #188 — b1-sinn (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: der Sinn means sense or meaning. In phrases it can also mean feeling, for example Sinn für Humor.
- **VALIDATED FINAL:** Main Idea: Sinn means sense or meaning. In phrases it can also mean feeling, for example Sinn für Humor.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Sinn means sense or meaning. In phrases it can also mean feeling, for example Sinn für Humor.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #189 — b1-sitz (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** der Sitz means a seat or seating place. For a company or institution, it means headquarters.
- **VALIDATED FINAL:** Sitz means a seat or seating place. For a company or institution, it means headquarters.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Sitz means a seat or seating place. For a company or institution, it means headquarters.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #190 — b1-sitz (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** residence
- **VALIDATED FINAL:** REPLACE: accent → company
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** company
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #192 — b1-sowie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **Repair field:** study.sectionAccents.comparison[1].example.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** und
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #193 — b1-sowie (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **Repair field:** study.sectionAccents.comparison[2].example.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Sobald
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #194 — b1-spannung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Spannung means tension or strain. In technical language, especially in electricity, it means voltage.
- **VALIDATED FINAL:** Main idea: Spannung means tension or strain. In technical language, especially in electricity, it means voltage.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Spannung means tension or strain. In technical language, especially in electricity, it means voltage.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #195 — b1-spannung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Spriegums
- **VALIDATED FINAL:** REPLACE: accent → voltage
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** voltage
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #196 — b1-spannung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** spriedze
- **VALIDATED FINAL:** REPLACE: accent → Tension
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Tension
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #197 — b1-spannung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** spriedze
- **VALIDATED FINAL:** REPLACE: accent → Tension
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Tension
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #199 — b1-spitze (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Spitze is a pointed end or highest point. In a figurative sense, it can be leadership or a position at th
- **VALIDATED FINAL:** Main idea: Spitze is a pointed end or highest point. In a figurative sense, it can be leadership or a position at th
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Spitze is a pointed end or highest point. In a figurative sense, it can be leadership or a position at th
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #200 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** under the leadership
- **VALIDATED FINAL:** REPLACE: accent → She
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** She
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #201 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** virsotne
- **VALIDATED FINAL:** REPLACE: accent → Mountain
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Mountain
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #202 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** beigas
- **VALIDATED FINAL:** REPLACE: accent → end
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** end
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #203 — b1-spitze (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** punkts
- **VALIDATED FINAL:** REPLACE: accent → sharpest
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** sharpest
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #51 — b1-stellung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Stellung means position or condition. It is used for body posture, workplace and stance.
- **VALIDATED FINAL:** Main idea: Stellung means position or condition. It is used for body posture, workplace and stance.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Stellung means position or condition. It is used for body posture, workplace and stance.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #52 — b1-stellung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **Repair field:** study.sectionAccents.examples[1].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** darba vietu
- **VALIDATED FINAL:** REPLACE: accent → looking
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** looking
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #53 — b1-stellung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** darbavieta
- **VALIDATED FINAL:** REPLACE: accent → Place
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Place
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #205 — b1-stift (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** The main idea: der Stift is everyday writing - pencil or pen. Technically, it can also be a pin or small metal part.
- **VALIDATED FINAL:** The main idea: Stift is everyday writing - pencil or pen. Technically, it can also be a pin or small metal part.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** The main idea: Stift is everyday writing - pencil or pen. Technically, it can also be a pin or small metal part.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #208 — b1-stoßen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** we bumped into
- **VALIDATED FINAL:** REPLACE: accent → ran
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** ran
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #209 — b1-stoßen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** stumt
- **VALIDATED FINAL:** REPLACE: accent → Push
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Push
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #210 — b1-stoßen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** satikt
- **VALIDATED FINAL:** REPLACE: accent → meet
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** meet
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #212 — b1-streichen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** to draw
- **VALIDATED FINAL:** REPLACE: accent → Draw
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Draw
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #213 — b1-strom (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Strom is most often electricity or electric current in everyday life. In another context, it may be a lar
- **VALIDATED FINAL:** Main idea: Strom is most often electricity or electric current in everyday life. In another context, it may be a lar
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Strom is most often electricity or electric current in everyday life. In another context, it may be a lar
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #214 — b1-strom (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** upe
- **VALIDATED FINAL:** REPLACE: accent → river
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** river
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #215 — b1-stürzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** krist
- **VALIDATED FINAL:** REPLACE: accent → Fall
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Fall
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #216 — b1-szene (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.comparison[0].word
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** die Szene
- **VALIDATED FINAL:** Szene
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Szene
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #217 — b1-szene (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** skatuve
- **VALIDATED FINAL:** REPLACE: accent → Stage
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Stage
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #55 — b1-tank (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main Idea: der Tank is usually a fuel or liquid tank. In a military context, the more common German word for tank is der
- **VALIDATED FINAL:** Main Idea: Tank is usually a fuel or liquid tank. In a military context, the more common German word for tank is der
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main Idea: Tank is usually a fuel or liquid tank. In a military context, the more common German word for tank is der
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #56 — b1-tank (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Tanks
- **VALIDATED FINAL:** REPLACE: accent → tank
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** tank
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #57 — b1-tank (HIGH SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tvertne
- **VALIDATED FINAL:** REPLACE: tvertne → Tank
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Tank
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #58 — b1-tank (HIGH SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tvertne
- **VALIDATED FINAL:** REPLACE: tvertne → Vessel
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Vessel
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #59 — b1-tank (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tanks
- **VALIDATED FINAL:** REPLACE: accent → tank
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** tank
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #60 — b1-tank (HIGH SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tvertne
- **VALIDATED FINAL:** REPLACE: tvertne → tank
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** tank
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #218 — b1-tau (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.comparison[0].word
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** der Tau
- **VALIDATED FINAL:** Tau
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Tau
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #219 — b1-taufen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** saukt
- **VALIDATED FINAL:** REPLACE: accent → call
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** call
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #220 — b1-taufen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** In the church
- **VALIDATED FINAL:** REPLACE: accent → church
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** church
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #221 — b1-titel (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Titel means the title of a book, song, film or text. It can also mean a title, such as an academic or spo
- **VALIDATED FINAL:** Main idea: Titel means the title of a book, song, film or text. It can also mean a title, such as an academic or spo
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Titel means the title of a book, song, film or text. It can also mean a title, such as an academic or spo
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #222 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tituls
- **VALIDATED FINAL:** REPLACE: accent → title
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** title
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #223 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** nosaukums
- **VALIDATED FINAL:** REPLACE: accent → Name
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Name
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #224 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** virsraksts
- **VALIDATED FINAL:** REPLACE: accent → Title
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Title
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #226 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.yellow[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.yellow[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** For the book
- **VALIDATED FINAL:** REPLACE: accent → book
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** book
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #227 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.yellow[1]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.yellow[1]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** dziesmai
- **VALIDATED FINAL:** REPLACE: accent → book
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** book
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #228 — b1-titel (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.yellow[2]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.yellow[2]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** filmai
- **VALIDATED FINAL:** REPLACE: accent → book
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** book
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #229 — b1-ton (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: der Ton means sound or tone. It is used for audio, voice, music, nuance of colour and manner of conversation.
- **VALIDATED FINAL:** Main idea: Ton means sound or tone. It is used for audio, voice, music, nuance of colour and manner of conversation.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Ton means sound or tone. It is used for audio, voice, music, nuance of colour and manner of conversation.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #230 — b1-ton (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** tonis
- **VALIDATED FINAL:** REPLACE: accent → shade
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** shade
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #231 — b1-ton (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** balss
- **VALIDATED FINAL:** REPLACE: accent → Voice
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Voice
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #232 — b1-ton (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** skan
- **VALIDATED FINAL:** REPLACE: accent → What
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** What
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #234 — b1-trauen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** don't dare
- **VALIDATED FINAL:** REPLACE: accent → does
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** does
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #235 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **Repair field:** study.sectionAccents.examples[1].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** dzen
- **VALIDATED FINAL:** REPLACE: accent → wind
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** wind
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #236 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** nodarboties
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #237 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].example.red
- **Repair field:** study.sectionAccents.comparison[1].example.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** machst
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #238 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** TRUE REGRESSION
- **CURRENT:** Drive; urge
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #239 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.red
- **Repair field:** study.sectionAccents.comparison[2].example.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** treibt
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #240 — b1-treiben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].example.green
- **Repair field:** study.sectionAccents.comparison[2].example.green
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** uns
- **VALIDATED FINAL:** REMOVE
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** __REMOVE_ACCENT__
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #241 — b1-trennen (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **Repair field:** study.comparison[0].meaning
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** To separate, separate
- **VALIDATED FINAL:** To separate
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** To separate
- **OWNER NOTE:** OWNER approved regression naturalness correction (VALIDATED FINAL).

### Finding #243 — b1-trennen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** broke up
- **VALIDATED FINAL:** REPLACE: accent → divorced
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** divorced
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #245 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** have to throw up
- **VALIDATED FINAL:** REPLACE: accent → sick
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** sick
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #246 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** nodot
- **VALIDATED FINAL:** REPLACE: accent → hand
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** hand
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #248 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** dot
- **VALIDATED FINAL:** REPLACE: accent → give
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** give
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #249 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** vemt
- **VALIDATED FINAL:** REPLACE: accent → Throw
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Throw
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #250 — b1-übergeben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** nodot
- **VALIDATED FINAL:** REPLACE: accent → Without
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Without
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #252 — b1-überholen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** under repair
- **VALIDATED FINAL:** REPLACE: accent → workshop
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** workshop
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #254 — b1-überholen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** surpasses
- **VALIDATED FINAL:** REPLACE: accent → Beating
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Beating
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #257 — b1-übernehmen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **Repair field:** study.sectionAccents.examples[1].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** takes on
- **VALIDATED FINAL:** REPLACE: accent → company
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** company
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #259 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **Repair field:** study.sectionAccents.examples[1].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** apejam
- **VALIDATED FINAL:** REPLACE: accent → bypass
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** bypass
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #260 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** apiet
- **VALIDATED FINAL:** REPLACE: accent → must
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** must
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #261 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** apieties
- **VALIDATED FINAL:** REPLACE: accent → Get
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Get
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #262 — b1-umgehen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** behave
- **VALIDATED FINAL:** REPLACE: accent → treat
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** treat
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #264 — b1-unterhalten (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **Repair field:** study.sectionAccents.examples[1].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** we talked
- **VALIDATED FINAL:** REPLACE: accent → long
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** long
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #265 — b1-untersuchung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.comparison[0].word
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** die Untersuchung
- **VALIDATED FINAL:** Untersuchung
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Untersuchung
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #266 — b1-untersuchung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.green[1]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.green[1]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** policija
- **VALIDATED FINAL:** REPLACE: accent → doctor
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** doctor
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #269 — b1-verband (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: In medicine, der Verband is a bandage. In the language of organizations, it means an association or a federat
- **VALIDATED FINAL:** Main idea: In medicine, Verband is a bandage. In the language of organizations, it means an association or a federat
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: In medicine, Verband is a bandage. In the language of organizations, it means an association or a federat
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #270 — b1-verband (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** savienojums
- **VALIDATED FINAL:** REPLACE: accent → Connection
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Connection
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #271 — b1-verbindung (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Main idea: die Verbindung means a connection or link between things, people, places or systems.
- **VALIDATED FINAL:** Main idea: Verbindung means a connection or link between things, people, places or systems.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Main idea: Verbindung means a connection or link between things, people, places or systems.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).

### Finding #272 — b1-verbindung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.purple[0]
- **Repair field:** study.sectionAccents.examples[1].lv.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** Has
- **VALIDATED FINAL:** REPLACE: accent → There
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** There
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #273 — b1-verbindung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** saikne
- **VALIDATED FINAL:** REPLACE: accent → have
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** have
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #274 — b1-verbindung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** savienojums
- **VALIDATED FINAL:** REPLACE: accent → Connection
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Connection
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #275 — b1-verbindung (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Repair field:** study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** saikne
- **VALIDATED FINAL:** REPLACE: accent → Internet
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Internet
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #276 — b1-verbrennen (MEDIUM NATURALNESS)

- **Field:** learner-facing
- **Repair field:** study.comparison[0].meaning
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** To burn, burn up, burn yourself
- **VALIDATED FINAL:** To burn up, burn yourself
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** To burn up, burn yourself
- **OWNER NOTE:** OWNER approved regression naturalness correction (VALIDATED FINAL).

### Finding #278 — b1-verbrennen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** degt
- **VALIDATED FINAL:** REPLACE: accent → burn
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** burn
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #280 — b1-verderben (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** salauzt
- **VALIDATED FINAL:** REPLACE: accent → Break
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Break
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #61 — b1-verlegen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[1].lv.red
- **Repair field:** study.sectionAccents.examples[1].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** nevaru to atrast
- **VALIDATED FINAL:** REPLACE: accent → put
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** put
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #62 — b1-verlegen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.examples[2].lv.red
- **Repair field:** study.sectionAccents.examples[2].lv.red
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** izdod
- **VALIDATED FINAL:** REPLACE: accent → publishing
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** publishing
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #282 — b1-verletzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[0].meaning.purple
- **Repair field:** study.sectionAccents.comparison[0].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** savainot
- **VALIDATED FINAL:** REPLACE: accent → injure
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** injure
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #283 — b1-verletzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** apvainot
- **VALIDATED FINAL:** REPLACE: accent → Insult
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Insult
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #284 — b1-verletzen (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[2].meaning.purple
- **Repair field:** study.sectionAccents.comparison[2].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** to violate
- **VALIDATED FINAL:** REPLACE: accent → Break
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Break
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #287 — b1-versichern (MEDIUM SECTIONACCENT)

- **Field:** sectionAccents.comparison[1].meaning.purple
- **Repair field:** study.sectionAccents.comparison[1].meaning.purple
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** to provide
- **VALIDATED FINAL:** REPLACE: accent → secure
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** secure
- **OWNER NOTE:** OWNER approved regression sectionAccent correction (VALIDATED FINAL).

### Finding #288 — b1-wechsel (MEDIUM GRAMMAR)

- **Field:** learner-facing
- **Repair field:** study.explanation
- **ORIGIN:** PRE-EXISTING / NEWLY DISCOVERED
- **CURRENT:** der Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.
- **VALIDATED FINAL:** Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.
- **OWNER VERDICT:** LABOT
- **OWNER FINAL:** Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.
- **OWNER NOTE:** OWNER approved regression grammar correction (VALIDATED FINAL).
