# DA–DE Kurss — OWNER review final post-repair Group 03

Avots: [da-kurss-final-post-repair-audit.md](./da-kurss-final-post-repair-audit.md)
Findings: **101–150** (50 ieraksti)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA saturu.

## Finding 1

**Audit ID:** DA-KURSS-FPR-0101
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=…
**PROPOSED_DA:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=…
**Problēma:** Adjective section shows "Die Messer synd klein" — "synd" is not Danish (should be "er").
**Audita pamatojums:** Adjective section shows "Die Messer synd klein" — "synd" is not Danish (should be "er").
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-FPR-0102
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 5</h3> <p class="kurss-lesson-intro">Wen?, akkusativ, sitzen, fragen og -in endelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"> <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div> <div class="kurss-example">Wer steht und antwortet? Der Schüler st…
**PROPOSED_DA:** <h3>Foredrag 5</h3> <p class="kurss-lesson-intro">Wen?, akkusativ, sitzen, fragen og -in endelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"> <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div> <div class="kurss-example">Wer steht und antwortet? Der Schüler st…
**Problēma:** Vocabulary gloss wen (vēn) — hvad is wrong; wen means "hvem" (accusative of wer).
**Audita pamatojums:** Vocabulary gloss wen (vēn) — hvad is wrong; wen means "hvem" (accusative of wer).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-FPR-0103
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 6</h3> <p class="kurss-lesson-intro">Tal, flertal, omlyd og flertalsformer af substantiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example…
**PROPOSED_DA:** <h3>Foredrag 6</h3> <p class="kurss-lesson-intro">Tal, flertal, omlyd og flertalsformer af substantiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example…
**Problēma:** Ord section has multiple wrong glosses (anspitzen→at spytte, der Hammer→forhammer, leicht→lys, hier→hende).
**Audita pamatojums:** Ord section has multiple wrong glosses (anspitzen→at spytte, der Hammer→forhammer, leicht→lys, hier→hende).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-FPR-0104
**Lesson/ID:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 7</h3> <p class="kurss-lesson-intro">Syvende lektion: kommandoudtryk, tiltaleform og flertal.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Wa…
**PROPOSED_DA:** <h3>Foredrag 7</h3> <p class="kurss-lesson-intro">Syvende lektion: kommandoudtryk, tiltaleform og flertal.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Wa…
**Problēma:** Ord section vocabulary is scrambled with English remnants (singt→You, öffnen→mirror, der Spiegel entries misaligned).
**Audita pamatojums:** Ord section vocabulary is scrambled with English remnants (singt→You, öffnen→mirror, der Spiegel entries misaligned).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-FPR-0105
**Lesson/ID:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 7</h3> <p class="kurss-lesson-intro">Syvende lektion: kommandoudtryk, tiltaleform og flertal.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Wa…
**PROPOSED_DA:** <h3>Foredrag 7</h3> <p class="kurss-lesson-intro">Syvende lektion: kommandoudtryk, tiltaleform og flertal.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Wa…
**Problēma:** Section title mixes German "Übung" with Danish "Øvelse" inconsistently.
**Audita pamatojums:** Section title mixes German "Übung" with Danish "Øvelse" inconsistently.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-FPR-0106
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** stehen auf
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** stehen auf — rejser sig
**PROPOSED_DA:** stehen auf — står op
**Problēma:** Gloss "rejser sig" for stehen auf is imprecise; stehen auf means "står op" (get up), not merely "rejser sig".
**Audita pamatojums:** Gloss "rejser sig" for stehen auf is imprecise; stehen auf means "står op" (get up), not merely "rejser sig".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-FPR-0107
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** er spricht
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** er spricht — han taler
**PROPOSED_DA:** laut — højt
**Problēma:** English gloss "loudly" instead of Danish "højt".
**Audita pamatojums:** English gloss "loudly" instead of Danish "højt".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-FPR-0108
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[18]`
**Field type:** `sectionItem`
**DE (read-only):** laut
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** laut — loudly
**PROPOSED_DA:** laut — loudly
**Problēma:** English text remains in Danish content.
**Audita pamatojums:** English text remains in Danish content.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-FPR-0109
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Präsens: ich setze mich, du setzt dich, er/sie/es setzt sich, wir setzen uns, ihr setzt euch, sie setzen sich.
**PROPOSED_DA:** Präsens: ich setze mich, du setzt dich, er/sie/es setzt sich, wir setzen uns, ihr setzt euch, sie setzen sich.
**Problēma:** Danish text is identical to Latvian master — content was not translated.
**Audita pamatojums:** Danish text is identical to Latvian master — content was not translated.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-FPR-0110
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[18].lv`
**Field type:** `cardLv`
**DE (read-only):** Wen grüßt du?
**Severity:** HIGH
**Category:** PEDAGOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvor er du?
**PROPOSED_DA:** Hr. lærer, sæt Dem venligst ned!
**Problēma:** DE uses formal Sie (setzen Sie sich), but DA uses informal "sæt dig" instead of formal "sæt Dem".
**Audita pamatojums:** DE uses formal Sie (setzen Sie sich), but DA uses informal "sæt dig" instead of formal "sæt Dem".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-FPR-0111
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[0].lv`
**Field type:** `cardLv`
**DE (read-only):** Grüße den Lehrer und die Lehrerin!
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hils på læreren og læreren.
**PROPOSED_DA:** Hils på læreren og lærerinden!
**Problēma:** DA repeats "læreren" twice; DE distinguishes Lehrer (m) and Lehrerin (f). Missing lærerinden.
**Audita pamatojums:** DA repeats "læreren" twice; DE distinguishes Lehrer (m) and Lehrerin (f). Missing lærerinden.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-FPR-0112
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[3].lv`
**Field type:** `cardLv`
**DE (read-only):** Was machen Sie?
**Severity:** HIGH
**Category:** PEDAGOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad laver du?
**PROPOSED_DA:** Hvad laver De?
**Problēma:** DE uses formal Sie (Was machen Sie?), but DA uses informal "Hvad laver du?".
**Audita pamatojums:** DE uses formal Sie (Was machen Sie?), but DA uses informal "Hvad laver du?".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-FPR-0113
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Herr Lehrer, setzen Sie sich und lesen Sie!
**Severity:** HIGH
**Category:** PEDAGOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hr. lærer, sæt dig ned og læs!
**PROPOSED_DA:** Hr. lærer, sæt Dem ned og læs!
**Problēma:** DE formal imperative (setzen Sie sich und lesen Sie), DA uses informal du-forms.
**Audita pamatojums:** DE formal imperative (setzen Sie sich und lesen Sie), DA uses informal du-forms.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-KURSS-FPR-0114
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[10].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie ist dieser Teller?
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad er denne plade?
**PROPOSED_DA:** Hvordan er denne tallerken?
**Problēma:** DE "Wie ist dieser Teller?" asks about quality/state; DA "Hvad er denne plade?" uses wrong noun (plade vs tallerken) and wrong question type.
**Audita pamatojums:** DE "Wie ist dieser Teller?" asks about quality/state; DA "Hvad er denne plade?" uses wrong noun (plade vs tallerken) and wrong question type.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-KURSS-FPR-0115
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** wir sind
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** wir sind — we are
**PROPOSED_DA:** wir sind — vi er
**Problēma:** English gloss "we are" instead of Danish "vi er".
**Audita pamatojums:** English gloss "we are" instead of Danish "vi er".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-KURSS-FPR-0116
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** wir können
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** wir können — we can
**PROPOSED_DA:** wir können — vi kan
**Problēma:** English gloss "we can" instead of Danish "vi kan".
**Audita pamatojums:** English gloss "we can" instead of Danish "vi kan".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-KURSS-FPR-0117
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** seien Sie gesund
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** seien Sie gesund — be healthy!
**PROPOSED_DA:** seien Sie gesund — vær rask!
**Problēma:** English gloss "be healthy!" instead of Danish.
**Audita pamatojums:** English gloss "be healthy!" instead of Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-KURSS-FPR-0118
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[15]`
**Field type:** `sectionItem`
**DE (read-only):** der Mann
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Mann — husband, man
**PROPOSED_DA:** der Mann — mand, ægtemand
**Problēma:** English gloss "husband, man" instead of Danish "mand, ægtemand".
**Audita pamatojums:** English gloss "husband, man" instead of Danish "mand, ægtemand".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-KURSS-FPR-0119
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hjælpeverb sein - at være bue rodet. Derfor skal det læres godt.
**PROPOSED_DA:** Hjælpeverbet sein (at være) bøjes uregelmæssigt. Derfor skal det læres godt.
**Problēma:** "Hjælpeverb sein - at være bue rodet" is garbled/ungrammatical Danish; likely corruption of "bøjes uregelmæssigt".
**Audita pamatojums:** "Hjælpeverb sein - at være bue rodet" is garbled/ungrammatical Danish; likely corruption of "bøjes uregelmæssigt".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-KURSS-FPR-0120
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[0].lv`
**Field type:** `cardLv`
**DE (read-only):** Bist du gesund?
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvor er dine fartøjer?
**PROPOSED_DA:** Er du sund?
**Problēma:** DE "Bist du gesund?" (Are you healthy?) translated as "Hvor er dine fartøjer?" (Where are your vessels?) — completely unrelated.
**Audita pamatojums:** DE "Bist du gesund?" (Are you healthy?) translated as "Hvor er dine fartøjer?" (Where are your vessels?) — completely unrelated.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-KURSS-FPR-0121
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[2].lv`
**Field type:** `cardLv`
**DE (read-only):** Ist Paul gesund?
**Severity:** MEDIUM
**Category:** NATURALNESS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Er Paul rask?
**PROPOSED_DA:** Er Paul sund?
**Problēma:** "Er Paul rask?" is unnatural; Danish prefers "Er Paul sund?" to match gesund.
**Audita pamatojums:** "Er Paul rask?" is unnatural; Danish prefers "Er Paul sund?" to match gesund.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-KURSS-FPR-0122
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[13].lv`
**Field type:** `cardLv`
**DE (read-only):** Anna, spitz diesen Bleistift an!
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Anna, spids den blyant!
**PROPOSED_DA:** Anna, spids denne blyant!
**Problēma:** DE uses demonstrative diesen (this), but DA uses definite den without denne.
**Audita pamatojums:** DE uses demonstrative diesen (this), but DA uses definite den without denne.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-KURSS-FPR-0123
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[14].lv`
**Field type:** `cardLv`
**DE (read-only):** Herr Lehrer, bitte spitzen Sie diesen Bleistift an!
**Severity:** HIGH
**Category:** PEDAGOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hr. lærer, vær venlig at spidse denne blyant!
**PROPOSED_DA:** Hr. lærer, spids venligst denne blyant!
**Problēma:** DE formal Sie imperative, DA uses informal du-form and awkward "vær venlig at".
**Audita pamatojums:** DE formal Sie imperative, DA uses informal du-form and awkward "vær venlig at".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-KURSS-FPR-0124
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[15].lv`
**Field type:** `cardLv`
**DE (read-only):** Leg jenen Bleistift hin!
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Læg den blyant fra dig!
**PROPOSED_DA:** Læg den blyant derhen!
**Problēma:** DE jener (that one yonder) rendered as bare den; loses demonstrative distinction taught in lesson.
**Audita pamatojums:** DE jener (that one yonder) rendered as bare den; loses demonstrative distinction taught in lesson.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-KURSS-FPR-0125
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[7].lv`
**Field type:** `cardLv`
**DE (read-only):** Ja, er ist sehr alt.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Ja, han er meget gammel.
**PROPOSED_DA:** Hvem er du?
**Problēma:** DE "Wer bist du?" (Who are you?) translated as "Hvad er du?" (What are you?) — wrong question word.
**Audita pamatojums:** DE "Wer bist du?" (Who are you?) translated as "Hvad er du?" (What are you?) — wrong question word.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-KURSS-FPR-0126
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[23]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Anna schreibt und fragt: „Franz, schreibst du auch?“
**PROPOSED_DA:** Anna schreibt und fragt: „Franz, schreibst du auch?“
**Problēma:** Danish text is identical to Latvian master — content was not translated.
**Audita pamatojums:** Danish text is identical to Latvian master — content was not translated.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-KURSS-FPR-0127
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[24]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Franz antwortet: „Ich kann nicht schreiben. Ich habe kein Heft, keine Feder und keinen Bleistift.“
**PROPOSED_DA:** Franz antwortet: „Ich kann nicht schreiben. Ich habe kein Heft, keine Feder und keinen Bleistift.“
**Problēma:** Danish text is identical to Latvian master — content was not translated.
**Audita pamatojums:** Danish text is identical to Latvian master — content was not translated.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-KURSS-FPR-0128
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[25]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Anna sagt: „Nimm dieses Heft und diesen Bleistift. Wir arbeiten zusammen.“
**PROPOSED_DA:** Anna sagt: „Nimm dieses Heft und diesen Bleistift. Wir arbeiten zusammen.“
**Problēma:** Danish text is identical to Latvian master — content was not translated.
**Audita pamatojums:** Danish text is identical to Latvian master — content was not translated.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-KURSS-FPR-0129
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** die Brüder
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Brüder — brothers
**PROPOSED_DA:** die Brüder — brothers
**Problēma:** English text remains in Danish content.
**Audita pamatojums:** English text remains in Danish content.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** DA-KURSS-FPR-0130
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[2].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie sind die Bücher?
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad er bøgerne?
**PROPOSED_DA:** Hvordan er bøgerne?
**Problēma:** DE "Wie sind die Bücher?" asks about quality (how are the books), but DA "Hvad er bøgerne?" asks what they are.
**Audita pamatojums:** DE "Wie sind die Bücher?" asks about quality (how are the books), but DA "Hvad er bøgerne?" asks what they are.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** DA-KURSS-FPR-0131
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[4].lv`
**Field type:** `cardLv`
**DE (read-only):** Fräulein Müller, haben Sie Hefte?
**Severity:** HIGH
**Category:** PEDAGOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Frøken Müller, har du notesbøger?
**PROPOSED_DA:** Frøken Müller, har De notesbøger?
**Problēma:** DE formal Sie (haben Sie Hefte?), DA uses informal "har du".
**Audita pamatojums:** DE formal Sie (haben Sie Hefte?), DA uses informal "har du".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** DA-KURSS-FPR-0132
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[14].lv`
**Field type:** `cardLv`
**DE (read-only):** Das Kind ist glücklich, denn es hat einen Vater und eine Mutter.
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Barnet er lykkeligt, fordi barnet har en far og en mor.
**PROPOSED_DA:** Hvad laver Anna?
**Problēma:** DE "Was tut Anna?" (What is Anna doing?) translated as "Hvor er Anna?" (Where is Anna?).
**Audita pamatojums:** DE "Was tut Anna?" (What is Anna doing?) translated as "Hvor er Anna?" (Where is Anna?).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** DA-KURSS-FPR-0133
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[16].lv`
**Field type:** `cardLv`
**DE (read-only):** Sie schreibt.
**Severity:** LOW
**Category:** NAMES
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hun skriver.
**PROPOSED_DA:** Skriver Franz også?
**Problēma:** German name Franz rendered as "Francis" — inconsistent with course convention (Franz elsewhere).
**Audita pamatojums:** German name Franz rendered as "Francis" — inconsistent with course convention (Franz elsewhere).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** DA-KURSS-FPR-0134
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** ich heiße
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** ich heiße — jeg hedder
**PROPOSED_DA:** so alt wie — lige så gammel som
**Problēma:** English gloss "as old as" instead of Danish "lige så gammel som".
**Audita pamatojums:** English gloss "as old as" instead of Danish "lige så gammel som".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** DA-KURSS-FPR-0135
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** so alt wie
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** so alt wie — as old as
**PROPOSED_DA:** so alt wie — as old as
**Problēma:** English text remains in Danish content.
**Audita pamatojums:** English text remains in Danish content.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** DA-KURSS-FPR-0136
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[4].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie heißt du?
**Severity:** MEDIUM
**Category:** NATURALNESS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad er dit navn?
**PROPOSED_DA:** Hvad hedder du?
**Problēma:** "Hvad er dit navn?" for Wie heißt du? is acceptable but less idiomatic than "Hvad hedder du?".
**Audita pamatojums:** "Hvad er dit navn?" for Wie heißt du? is acceptable but less idiomatic than "Hvad hedder du?".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** DA-KURSS-FPR-0137
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie heißt er?
**Severity:** LOW
**Category:** NAMES
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad er hans navn?
**PROPOSED_DA:** Han hedder Johann.
**Problēma:** German Johann rendered as "Jan" — acceptable localization but inconsistent with other name handling.
**Audita pamatojums:** German Johann rendered as "Jan" — acceptable localization but inconsistent with other name handling.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** DA-KURSS-FPR-0138
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[8].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie heißen Sie?
**Severity:** HIGH
**Category:** PEDAGOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad er dit navn?
**PROPOSED_DA:** Hvad hedder De?
**Problēma:** DE formal Sie (Wie heißen Sie?), DA uses informal "Hvad er dit navn?".
**Audita pamatojums:** DE formal Sie (Wie heißen Sie?), DA uses informal "Hvad er dit navn?".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** DA-KURSS-FPR-0139
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[12].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, Max ist nicht groß, Rudolf ist größer.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Nein, Max er ikke stor, Rudolph er større.
**PROPOSED_DA:** Hvem er den største?
**Problēma:** DE "Wer ist am größten?" (Who is tallest?) translated as "Hvad er det største?" (What is the biggest?).
**Audita pamatojums:** DE "Wer ist am größten?" (Who is tallest?) translated as "Hvad er det største?" (What is the biggest?).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** DA-KURSS-FPR-0140
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[21].lv`
**Field type:** `cardLv`
**DE (read-only):** Wieviel Brüder haben Sie?
**Severity:** MEDIUM
**Category:** REGISTER
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvor mange brødre har du?
**PROPOSED_DA:** Hvor mange brødre har De?
**Problēma:** DE uses formal Sie; DA uses informal du.
**Audita pamatojums:** DE uses formal Sie; DA uses informal du.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** DA-KURSS-FPR-0141
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[31].lv`
**Field type:** `cardLv`
**DE (read-only):** Sind Sie glücklich?
**Severity:** MEDIUM
**Category:** REGISTER
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Er du glad?
**PROPOSED_DA:** Er De glad?
**Problēma:** DE uses formal Sie (Sind Sie glücklich?); DA uses informal du.
**Audita pamatojums:** DE uses formal Sie (Sind Sie glücklich?); DA uses informal du.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** DA-KURSS-FPR-0142
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** das Bein
**Severity:** HIGH
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** das Bein — leg
**PROPOSED_DA:** das Bein — ben
**Problēma:** English gloss "leg" in DA vocabulary slot; lesson uses Danish elsewhere (e.g. benet).
**Audita pamatojums:** English gloss "leg" in DA vocabulary slot; lesson uses Danish elsewhere (e.g. benet).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** DA-KURSS-FPR-0143
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** die Beine
**Severity:** HIGH
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Beine — legs
**PROPOSED_DA:** die Beine — ben
**Problēma:** English gloss "legs" instead of Danish ben.
**Audita pamatojums:** English gloss "legs" instead of Danish ben.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** DA-KURSS-FPR-0144
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** die Füße
**Severity:** HIGH
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Füße — feet
**PROPOSED_DA:** die Füße — fødder
**Problēma:** English gloss "feet" instead of Danish fødder.
**Audita pamatojums:** English gloss "feet" instead of Danish fødder.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** DA-KURSS-FPR-0145
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** rund
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** rund — round
**PROPOSED_DA:** rund — rund
**Problēma:** English gloss "round" instead of Danish rund.
**Audita pamatojums:** English gloss "round" instead of Danish rund.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** DA-KURSS-FPR-0146
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** lang
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** lang — long
**PROPOSED_DA:** lang — lang
**Problēma:** English gloss "long" instead of Danish lang.
**Audita pamatojums:** English gloss "long" instead of Danish lang.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** DA-KURSS-FPR-0147
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** kurz
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** kurz — short
**PROPOSED_DA:** kurz — kort
**Problēma:** English gloss "short" instead of Danish kort.
**Audita pamatojums:** English gloss "short" instead of Danish kort.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** DA-KURSS-FPR-0148
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[18]`
**Field type:** `sectionItem`
**DE (read-only):** dünn
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** dünn — thin / thin
**PROPOSED_DA:** dünn — tynd
**Problēma:** English gloss "thin / thin" instead of Danish tynd.
**Audita pamatojums:** English gloss "thin / thin" instead of Danish tynd.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** DA-KURSS-FPR-0149
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[20]`
**Field type:** `sectionItem`
**DE (read-only):** vorn
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** vorn — in front
**PROPOSED_DA:** vorn — foran
**Problēma:** English gloss "in front" instead of Danish foran.
**Audita pamatojums:** English gloss "in front" instead of Danish foran.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** DA-KURSS-FPR-0150
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[22]`
**Field type:** `sectionItem`
**DE (read-only):** hinten
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** hinten — behind
**PROPOSED_DA:** hinten — bagved
**Problēma:** English gloss "behind" instead of Danish bagved.
**Audita pamatojums:** English gloss "behind" instead of Danish bagved.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---
