# DA–DE Kurss — OWNER review final post-repair Group 04

Avots: [da-kurss-final-post-repair-audit.md](./da-kurss-final-post-repair-audit.md)
Findings: **151–200** (50 ieraksti)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA saturu.

## Finding 1

**Audit ID:** DA-KURSS-FPR-0151
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[32]`
**Field type:** `sectionItem`
**DE (read-only):** reinigen
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** reinigen — to clean
**PROPOSED_DA:** reinigen — at rense
**Problēma:** English gloss "to clean" instead of Danish at rense.
**Audita pamatojums:** English gloss "to clean" instead of Danish at rense.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-FPR-0152
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[35]`
**Field type:** `sectionItem`
**DE (read-only):** machen
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** machen — to do / make
**PROPOSED_DA:** machen — at gøre
**Problēma:** English gloss "to do / make" instead of Danish at gøre.
**Audita pamatojums:** English gloss "to do / make" instead of Danish at gøre.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-FPR-0153
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[38]`
**Field type:** `sectionItem`
**DE (read-only):** stehen
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** stehen — to stand
**PROPOSED_DA:** stehen — at stå
**Problēma:** English gloss "to stand" instead of Danish at stå.
**Audita pamatojums:** English gloss "to stand" instead of Danish at stå.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-FPR-0154
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[45]`
**Field type:** `sectionItem`
**DE (read-only):** halten
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** halten — hold
**PROPOSED_DA:** halten — at holde
**Problēma:** English gloss "hold" instead of Danish at holde.
**Audita pamatojums:** English gloss "hold" instead of Danish at holde.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-FPR-0155
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[48]`
**Field type:** `sectionItem`
**DE (read-only):** tief
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** tief — deep
**PROPOSED_DA:** tief — dyb
**Problēma:** English gloss "deep" instead of Danish dyb/dybt.
**Audita pamatojums:** English gloss "deep" instead of Danish dyb/dybt.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-FPR-0156
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvis præfikset er ubetonet, er det ubetonet.
**PROPOSED_DA:** Hvis præfikset er ubetonet, adskilles det ikke.
**Problēma:** Tautological/wrong meaning; LV/DE require "unstressed prefix does not separate", not "unstressed means unstressed".
**Audita pamatojums:** Tautological/wrong meaning; LV/DE require "unstressed prefix does not separate", not "unstressed means unstressed".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-FPR-0157
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[12].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Feminine navneord dannet med -in take -nen i flertal.
**PROPOSED_DA:** Feminine navneord dannet med -in får -nen i flertal.
**Problēma:** Mixed English "take" in otherwise Danish grammar note.
**Audita pamatojums:** Mixed English "take" in otherwise Danish grammar note.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-FPR-0158
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
**PROPOSED_DA:** I ordet Kopf udtales pf så begge konsonanter kan høres.
**Problēma:** Latvian source text left in DA pronunciation field.
**Audita pamatojums:** Latvian source text left in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-FPR-0159
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[19].lv`
**Field type:** `cardLv`
**DE (read-only):** Er turnt.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Han træner.
**PROPOSED_DA:** Han laver gymnastik.
**Problēma:** DE turnen means gymnastics/exercises; DA træner means general training.
**Audita pamatojums:** DE turnen means gymnastics/exercises; DA træner means general training.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-FPR-0160
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[20].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie turnen sie?
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvordan træner de?
**PROPOSED_DA:** Hvordan laver de gymnastik?
**Problēma:** Same turnen vs træner semantic mismatch in question form.
**Audita pamatojums:** Same turnen vs træner semantic mismatch in question form.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-FPR-0161
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv`
**Field type:** `cardLv`
**DE (read-only):** Sie strecken beide Arme aus.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** De strækker begge hænder ud.
**PROPOSED_DA:** De strækker begge arme ud.
**Problēma:** DE Arme are arms; DA hænder means hands.
**Audita pamatojums:** DE Arme are arms; DA hænder means hands.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-FPR-0162
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[26].lv`
**Field type:** `cardLv`
**DE (read-only):** Peter und Anna atmen tief.
**Severity:** HIGH
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Peter und Anna trækker vejret dybt.
**PROPOSED_DA:** Peter og Anna trækker vejret dybt.
**Problēma:** German conjunction und left in DA sentence.
**Audita pamatojums:** German conjunction und left in DA sentence.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-FPR-0163
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, Robert und Johann turnen nicht.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Nej, Robert og Jan træner ikke.
**PROPOSED_DA:** Nej, Robert og Jan laver ikke gymnastik.
**Problēma:** DE turnen means gymnastics; DA træner means general training/exercise.
**Audita pamatojums:** DE turnen means gymnastics; DA træner means general training/exercise.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-KURSS-FPR-0164
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
**PROPOSED_DA:** ß skrives i midten eller enden af ordet efter lang vokal eller diftong: die Füße, die Straße, ich muss, er muss.
**Problēma:** Latvian text in DA pronunciation field.
**Audita pamatojums:** Latvian text in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-KURSS-FPR-0165
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
**PROPOSED_DA:** Hvis andre former har ss, kan ß stå før endelsen: müssen, ich muss, du musst, ihr müsst.
**Problēma:** Latvian text in DA pronunciation field.
**Audita pamatojums:** Latvian text in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-KURSS-FPR-0166
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
**PROPOSED_DA:** Når g efterfølges af t, lyder g tættere på k: du magst, ihr mögt.
**Problēma:** Latvian text in DA pronunciation field.
**Audita pamatojums:** Latvian text in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-KURSS-FPR-0167
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
**PROPOSED_DA:** Lignende på dansk i ordet "smags": g før s lyder tættere på k.
**Problēma:** Latvian text in DA pronunciation field.
**Audita pamatojums:** Latvian text in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-KURSS-FPR-0168
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[4].lv`
**Field type:** `cardLv`
**DE (read-only):** Du musst den Brief schreiben.
**Severity:** MEDIUM
**Category:** TRANSLATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Du skal skrive et brev.
**PROPOSED_DA:** Du skal skrive brevet.
**Problēma:** DE den Brief (definite); DA missing definite article on brev.
**Audita pamatojums:** DE den Brief (definite); DA missing definite article on brev.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-KURSS-FPR-0169
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[7].lv`
**Field type:** `cardLv`
**DE (read-only):** Ich mag die Suppe nicht essen, denn sie mundet mir nicht.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Jeg vil ikke spise suppe, fordi jeg ikke kan lide det.
**PROPOSED_DA:** Jeg vil ikke spise suppe, fordi jeg ikke kan lide den.
**Problēma:** Pronoun det does not match feminine/suppe; should be den.
**Audita pamatojums:** Pronoun det does not match feminine/suppe; should be den.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-KURSS-FPR-0170
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** der Apfel
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Apfel — apple
**PROPOSED_DA:** der Apfel — æble
**Problēma:** English gloss apple; owner pattern uses Danish (cf. kirsebær).
**Audita pamatojums:** English gloss apple; owner pattern uses Danish (cf. kirsebær).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-KURSS-FPR-0171
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[17]`
**Field type:** `sectionItem`
**DE (read-only):** die Äpfel
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Äpfel — apples
**PROPOSED_DA:** die Äpfel — æbler
**Problēma:** English gloss apples instead of Danish æbler.
**Audita pamatojums:** English gloss apples instead of Danish æbler.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-KURSS-FPR-0172
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[22]`
**Field type:** `sectionItem`
**DE (read-only):** die Pflaume
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Pflaume — plum
**PROPOSED_DA:** die Pflaume — blomme
**Problēma:** English gloss plum instead of Danish blomme.
**Audita pamatojums:** English gloss plum instead of Danish blomme.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-KURSS-FPR-0173
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[23]`
**Field type:** `sectionItem`
**DE (read-only):** die Pflaumen
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Pflaumen — plums
**PROPOSED_DA:** die Pflaumen — blommer
**Problēma:** English gloss plums instead of Danish blommer.
**Audita pamatojums:** English gloss plums instead of Danish blommer.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-KURSS-FPR-0174
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[25]`
**Field type:** `sectionItem`
**DE (read-only):** die Kirschen
**Severity:** MEDIUM
**Category:** LOCALIZATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Kirschen — cherries
**PROPOSED_DA:** die Kirschen — kirsebær
**Problēma:** English gloss cherries; singular kirsebær already localized elsewhere.
**Audita pamatojums:** English gloss cherries; singular kirsebær already localized elsewhere.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-KURSS-FPR-0175
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[27]`
**Field type:** `sectionItem`
**DE (read-only):** reif
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** reif — come in / ripen
**PROPOSED_DA:** reif — moden
**Problēma:** Nonsense English "come in / ripen"; DE/LV mean ripe/mature.
**Audita pamatojums:** Nonsense English "come in / ripen"; DE/LV mean ripe/mature.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-KURSS-FPR-0176
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[28]`
**Field type:** `sectionItem`
**DE (read-only):** unreif
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** unreif — don't come in / don't ripen
**PROPOSED_DA:** unreif — umoden
**Problēma:** Nonsense English "don't come in / don't ripen"; should mean unripe/immature.
**Audita pamatojums:** Nonsense English "don't come in / don't ripen"; should mean unripe/immature.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-KURSS-FPR-0177
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[0]`
**Field type:** `grammarExamples`
**DE (read-only):** müssen
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** müssen — vajadzēt aiz nepieciešamības vai pārliecības
**PROPOSED_DA:** müssen — at være nødt til af nødvendighed eller overbevisning
**Problēma:** Latvian grammar gloss left in DA field.
**Audita pamatojums:** Latvian grammar gloss left in DA field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-KURSS-FPR-0178
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
**PROPOSED_DA:** I ordet Äpfel udtales ä kort, fordi to konsonanter følger efter vokalen.
**Problēma:** Latvian text in DA pronunciation field.
**Audita pamatojums:** Latvian text in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-KURSS-FPR-0179
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
**PROPOSED_DA:** I ordet schälen udtales ä langt, fordi én konsonant følger efter vokalen.
**Problēma:** Latvian text in DA pronunciation field.
**Audita pamatojums:** Latvian text in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** DA-KURSS-FPR-0180
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
**PROPOSED_DA:** Husk: diftongen ei udtales som ai: reif, unreif.
**Problēma:** Latvian text in DA pronunciation field.
**Audita pamatojums:** Latvian text in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** DA-KURSS-FPR-0181
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[1].lv`
**Field type:** `cardLv`
**DE (read-only):** Franz ist gesund, er darf arbeiten.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Franz er rask, han må arbejde.
**PROPOSED_DA:** Må bedstefar arbejde?
**Problēma:** DE darf expresses permission; DA kan means ability/can.
**Audita pamatojums:** DE darf expresses permission; DA kan means ability/can.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** DA-KURSS-FPR-0182
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Isst du einen Apfel oder eine Birne?
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Har du spist et æble eller en pære?
**PROPOSED_DA:** Spiser du et æble eller en pære?
**Problēma:** DE present Isst du; DA uses past Har du spist.
**Audita pamatojums:** DE present Isst du; DA uses past Har du spist.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** DA-KURSS-FPR-0183
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[9].lv`
**Field type:** `cardLv`
**DE (read-only):** Die Birne mundet sehr gut.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Pære smager meget godt.
**PROPOSED_DA:** Pæren smager meget godt.
**Problēma:** Missing definite article; DE die Birne requires Pæren.
**Audita pamatojums:** Missing definite article; DE die Birne requires Pæren.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** DA-KURSS-FPR-0184
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** Vārdos wem, dem, den, der
**Severity:** CRITICAL
**Category:** CORRUPTION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdos wem, dem, den, der — In wem, dem, den, der, the e is long and narrow.
**PROPOSED_DA:** I ordene wem, dem, den, der udtales e langt og smalt.
**Problēma:** Latvian/English mixed corruption in DA pronunciation field.
**Audita pamatojums:** Latvian/English mixed corruption in DA pronunciation field.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** DA-KURSS-FPR-0185
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[1].lv`
**Field type:** `cardLv`
**DE (read-only):** Er ruft den Sohn und die Tochter.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Han ringer til sin søn og datter.
**PROPOSED_DA:** Han kalder på sin søn og datter.
**Problēma:** DE ruft means calls out/summons; DA ringer til implies telephoning.
**Audita pamatojums:** DE ruft means calls out/summons; DA ringer til implies telephoning.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** DA-KURSS-FPR-0186
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[9].lv`
**Field type:** `cardLv`
**DE (read-only):** Der Hund ist treu.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hunden er trofast.
**PROPOSED_DA:** Hvordan er hundene?
**Problēma:** DE die Hunde definite plural; DA hunde lacks definite article.
**Audita pamatojums:** DE die Hunde definite plural; DA hunde lacks definite article.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** DA-KURSS-FPR-0187
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[12].lv`
**Field type:** `cardLv`
**DE (read-only):** Wer nähert sich den Schülern und Schülerinnen?
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad nærmer sig skoledrenge og piger?
**PROPOSED_DA:** Hvem nærmer sig skoledrenge og piger?
**Problēma:** Interrogative Hvad (what) used for DE Wer (who); reverses meaning.
**Audita pamatojums:** Interrogative Hvad (what) used for DE Wer (who); reverses meaning.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** DA-KURSS-FPR-0188
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[13].lv`
**Field type:** `cardLv`
**DE (read-only):** Der Lehrer nähert sich den Schülern und Schülerinnen.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Læreren henvender sig til eleverne.
**PROPOSED_DA:** Læreren nærmer sig eleverne.
**Problēma:** DE sich nähern = approach; DA henvender sig til = addresses/speaks to.
**Audita pamatojums:** DE sich nähern = approach; DA henvender sig til = addresses/speaks to.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** DA-KURSS-FPR-0189
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** PEDAGOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Det tyske spørgsmål "med hvad?" udtrykkes på to måder.
**PROPOSED_DA:** Det tyske spørgsmål om med hvem/med hvad udtrykkes på to måder: mit wem? — om personer, womit? — om ting.
**Problēma:** Grammar note omits the mit wem? vs womit? distinction (persons vs things) that the lesson teaches and that LV master conveys.
**Audita pamatojums:** Grammar note omits the mit wem? vs womit? distinction (persons vs things) that the lesson teaches and that LV master conveys.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** DA-KURSS-FPR-0190
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[11].lv`
**Field type:** `cardLv`
**DE (read-only):** Womit schneidet er das Papier entzwei?
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad klipper han papiret med?
**PROPOSED_DA:** Hvad klipper han papiret over med?
**Problēma:** German entzwei (in two/in half) is lost; Danish only asks the instrument, not cutting apart.
**Audita pamatojums:** German entzwei (in two/in half) is lost; Danish only asks the instrument, not cutting apart.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** DA-KURSS-FPR-0191
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[15].lv`
**Field type:** `cardLv`
**DE (read-only):** Womit hältst du den Spaten?
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad holder du skovlen med?
**PROPOSED_DA:** Hvad holder du spaden med?
**Problēma:** Spaten is a spade, not a skovl (scoop/shovel); wrong tool noun vs DE.
**Audita pamatojums:** Spaten is a spade, not a skovl (scoop/shovel); wrong tool noun vs DE.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** DA-KURSS-FPR-0192
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[16].lv`
**Field type:** `cardLv`
**DE (read-only):** Ich halte den Spaten mit der Hand.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Jeg holder en skovl med hånden.
**PROPOSED_DA:** Jeg holder spaden med hånden.
**Problēma:** Uses indefinite skovl instead of definite den Spaten; wrong noun (spade vs scoop).
**Audita pamatojums:** Uses indefinite skovl instead of definite den Spaten; wrong noun (spade vs scoop).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** DA-KURSS-FPR-0193
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv`
**Field type:** `cardLv`
**DE (read-only):** Mit wem geht der Bruder?
**Severity:** HIGH
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad går broderen med?
**PROPOSED_DA:** Med hvem går broderen?
**Problēma:** Hvad går … med? is ungrammatical for mit wem; needs med hvem and correct word order.
**Audita pamatojums:** Hvad går … med? is ungrammatical for mit wem; needs med hvem and correct word order.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** DA-KURSS-FPR-0194
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv`
**Field type:** `cardLv`
**DE (read-only):** Der Bruder geht mit dem Vater, mit der Mutter, mit dem Lehrer, mit dem Onkel, mit der Tante, mit dem Vetter, mit der Base.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** En bror går med sin far, med sin mor, med sin lærer, med sin onkel, med sin moster, med sin kusine, med sin kusine.
**PROPOSED_DA:** Broren går med sin far, med sin mor, med sin lærer, med sin onkel, med sin moster, med sin fætter og med sin kusine.
**Problēma:** En bror (a brother) vs der Bruder (the brother); Vetter/Base rendered as two identical kusine.
**Audita pamatojums:** En bror (a brother) vs der Bruder (the brother); Vetter/Base rendered as two identical kusine.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** DA-KURSS-FPR-0195
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Wohin / wo, Akkusativ vai Dativ ar an / in / auf
**PROPOSED_DA:** Wohin / wo, Akkusativ eller Dativ med an / in / auf
**Problēma:** Latvian vai (or) and ar (with) remain untranslated in the Danish subtitle.
**Audita pamatojums:** Latvian vai (or) and ar (with) remain untranslated in the Danish subtitle.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** DA-KURSS-FPR-0196
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** der Krug
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Krug — mug
**PROPOSED_DA:** der Krug — krukke / kande
**Problēma:** Krug is a jug or pitcher; mug (krus/kop) is the wrong vessel type.
**Audita pamatojums:** Krug is a jug or pitcher; mug (krus/kop) is the wrong vessel type.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** DA-KURSS-FPR-0197
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** PEDAGOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvis handlingen indikerer en retnings- eller stedsændring, bruges Akkusativ. Spørgsmål: wohin? - hvor?
**PROPOSED_DA:** Hvis handlingen indikerer en retnings- eller stedsændring, bruges Akkusativ. Spørgsmål: wohin? – hvorhen?
**Problēma:** wohin? (where to) glossed as hvor? (where); direction vs location distinction lost.
**Audita pamatojums:** wohin? (where to) glossed as hvor? (where); direction vs location distinction lost.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** DA-KURSS-FPR-0198
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[4].lv`
**Field type:** `cardLv`
**DE (read-only):** Der Mann stellt die Bank an das Fenster.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Manden sætter bænken ved vinduet.
**PROPOSED_DA:** Manden sætter bænken op ad vinduet.
**Problēma:** an das Fenster means against the window; ved vinduet (by/at) does not match DE placement.
**Audita pamatojums:** an das Fenster means against the window; ved vinduet (by/at) does not match DE placement.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** DA-KURSS-FPR-0199
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Die Kinder gehen in den Wald.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Børn går i skoven.
**PROPOSED_DA:** Børnene går ind i skoven.
**Problēma:** in den Wald is wohin? (into the forest); i skoven is wo? (already in the forest).
**Audita pamatojums:** in den Wald is wohin? (into the forest); i skoven is wo? (already in the forest).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** DA-KURSS-FPR-0200
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[7].lv`
**Field type:** `cardLv`
**DE (read-only):** Sie suchen Beeren in dem Walde.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** De plukker bær i skoven.
**PROPOSED_DA:** De leder efter bær i skoven.
**Problēma:** suchen means search/look for; plukker (pick) changes the action vs DE.
**Audita pamatojums:** suchen means search/look for; plukker (pick) changes the action vs DE.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---
