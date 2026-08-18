# DA–DE Kurss — OWNER review — Lekcijas 8–21, training, UI

Avots: `reports/da-kurss-full-audit.md` · `reports/temp/da-kurss-full-audit.json`
Findings: **1–13** (13 ieraksti)
Auditors: **GPT-5.6 Luna** (READ-ONLY)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-kurss-full-luna-owner-decisions-04-lessons-08-21-misc.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

## Finding 1

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-001
**Source audit ID:** `DA-KURSS-L0032`
**Lesson/ID:** `lesson8`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[27].lv`
**DE (read-only):** Sprich nicht leise!
**Severity:** LOW
**Category:** NATURALNESS
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Tal ikke stille!
**PROPOSED_DA:** Tal ikke lavt!
**Problēma:** “Tal ikke stille!” is understandable but less idiomatic here; “Tal ikke lavt!” is the natural Danish equivalent and matches the parallel card.
**Audita pamatojums:** “Tal ikke stille!” is understandable but less idiomatic here; “Tal ikke lavt!” is the natural Danish equivalent and matches the parallel card.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-002
**Source audit ID:** `DA-KURSS-L0033`
**Lesson/ID:** `lesson8`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[33].lv`
**DE (read-only):** Sprich nicht leise!
**Severity:** LOW
**Category:** NATURALNESS
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Tal ikke stille!
**PROPOSED_DA:** Tal ikke lavt!
**Problēma:** “Tal ikke stille!” is understandable but less idiomatic here; “Tal ikke lavt!” is the natural Danish equivalent and matches the parallel card.
**Audita pamatojums:** “Tal ikke stille!” is understandable but less idiomatic here; “Tal ikke lavt!” is the natural Danish equivalent and matches the parallel card.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-003
**Source audit ID:** `DA-KURSS-L0034`
**Lesson/ID:** `lesson11`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[0].text`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `grammarText`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Hjælpeverbet haben på tysk udtrykker begrebet tilhørsforhold. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.
**PROPOSED_DA:** Hjælpeverbet haben på tysk udtrykker begrebet besiddelse. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.
**Problēma:** Tilhørsforhold betyder primært affiliation eller belonging; her beskrives haben som udtryk for besiddelse.
**Audita pamatojums:** Tilhørsforhold betyder primært affiliation eller belonging; her beskrives haben som udtryk for besiddelse.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-004
**Source audit ID:** `DA-KURSS-L0035`
**Lesson/ID:** `lesson12`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].lv`
**DE (read-only):** Er heißt Johann.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Han hedder Jan.
**PROPOSED_DA:** Han hedder Johann.
**Problēma:** Det danske navn Jan svarer ikke til det tyske Johann; navnet bør bevares i oversættelsen.
**Audita pamatojums:** Det danske navn Jan svarer ikke til det tyske Johann; navnet bør bevares i oversættelsen.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-005
**Source audit ID:** `DA-KURSS-L0036`
**Lesson/ID:** `lesson12`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv`
**DE (read-only):** Franz ist am größten.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Frans er den største.
**PROPOSED_DA:** Franz er den største.
**Problēma:** Det danske navn Frans svarer ikke til det tyske Franz; navnet bør være konsistent med den tyske kildetekst.
**Audita pamatojums:** Det danske navn Frans svarer ikke til det tyske Franz; navnet bør være konsistent med den tyske kildetekst.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-006
**Source audit ID:** `DA-KURSS-L0037`
**Lesson/ID:** `lesson12`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[20].lv`
**DE (read-only):** Sie heißen Elsa, Martha und Alma.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Deres navne er Elsa, Marta og Alma.
**PROPOSED_DA:** Deres navne er Elsa, Martha og Alma.
**Problēma:** Personnavnet bør følge den tyske kilde: Martha, ikke Marta.
**Audita pamatojums:** Personnavnet bør følge den tyske kilde: Martha, ikke Marta.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-007
**Source audit ID:** `DA-KURSS-L0038`
**Lesson/ID:** `lesson13`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
**DE (read-only):** Nein, Robert und Johann turnen nicht.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Nej, Robert og Jan laver ikke gymnastik.
**PROPOSED_DA:** Nej, Robert og Johann laver ikke gymnastik.
**Problēma:** Det danske navn Jan matcher ikke det tyske Johann i den tilsvarende sætning.
**Audita pamatojums:** Det danske navn Jan matcher ikke det tyske Johann i den tilsvarende sætning.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-008
**Source audit ID:** `DA-KURSS-L0039`
**Lesson/ID:** ``
**ID / path:** `COURSE_LESSON_DATA.kurssLesson19.intro`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**Field:** `intro`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Nittende lektion: vor, hinter, unter, über, neben, zwischen med Akkusativ eller Dativ.
**PROPOSED_DA:** Nittende lektion: vor, hinter, unter, über, neben, zwischen med akkusativ eller dativ.
**Problēma:** Kasusbetegnelser skrives normalt med små bogstaver på dansk, i modsætning til tysk.
**Audita pamatojums:** Kasusbetegnelser skrives normalt med små bogstaver på dansk, i modsætning til tysk.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-009
**Source audit ID:** `DA-KURSS-L0040`
**Lesson/ID:** `lesson20`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[11]`
**DE (read-only):** der Boden
**Severity:** MEDIUM
**Category:** TRANSLATION
**Field:** `sectionItem`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** der Boden — loft / gulv / jord
**PROPOSED_DA:** der Boden — gulv / jord / bund
**Problēma:** Loft betyder attic/ceiling på dansk og svarer ikke til det tyske Boden. Gulv, jord og bund er passende betydninger.
**Audita pamatojums:** Loft betyder attic/ceiling på dansk og svarer ikke til det tyske Boden. Gulv, jord og bund er passende betydninger.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-010
**Source audit ID:** `DA-KURSS-L0041`
**Lesson/ID:** `lesson20`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[3].lv`
**DE (read-only):** Woraus sind die Mauern?
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Hvad er væggene lavet af?
**PROPOSED_DA:** Hvad er murene lavet af?
**Problēma:** Tysk 'Mauern' betyder mure, ikke det bredere 'vægge'.
**Audita pamatojums:** Tysk 'Mauern' betyder mure, ikke det bredere 'vægge'.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-011
**Source audit ID:** `DA-KURSS-L0042`
**Lesson/ID:** `lesson20`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[6].lv`
**DE (read-only):** Wo sind zehn Wohnungen?
**Severity:** MEDIUM
**Category:** GRAMMAR
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Hvor er ti lejligheder?
**PROPOSED_DA:** Hvor er der ti lejligheder?
**Problēma:** Ved eksistens på dansk kræver sætningen normalt 'der': 'Hvor er der ti lejligheder?'
**Audita pamatojums:** Ved eksistens på dansk kræver sætningen normalt 'der': 'Hvor er der ti lejligheder?'
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-012
**Source audit ID:** `DA-KURSS-L0043`
**Lesson/ID:** `lesson20`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[9].lv`
**DE (read-only):** Wo ist der Boden?
**Severity:** NEEDS_SOURCE_REVIEW
**Category:** SEMANTICS
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Hvor er loftet?
**PROPOSED_DA:** Hvor er loftet?
**Problēma:** DA betyder 'loftet' (attic/loft), mens DE betyder 'gulvet'. LV-masteren støtter DA; DE-kilden bør kontrolleres.
**Audita pamatojums:** DA betyder 'loftet' (attic/loft), mens DE betyder 'gulvet'. LV-masteren støtter DA; DE-kilden bør kontrolleres.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-013
**Source audit ID:** `DA-KURSS-L0063`
**Lesson/ID:** `ui`
**ID / path:** `LANGUAGE_UI_STRINGS.kurss.hints.exerciseCardAria`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**Field:** `uiString`
**Production file:** `languages/da/ui.js`
**CURRENT_DA:** {title} øvelseskort
**PROPOSED_DA:** Øvelseskort: {title}
**Problēma:** Som aria-label lyder '{title} øvelseskort' unaturligt og mangler en tydelig relation mellem titlen og kortet.
**Audita pamatojums:** Som aria-label lyder '{title} øvelseskort' unaturligt og mangler en tydelig relation mellem titlen og kortet.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---
