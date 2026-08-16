# DA–DE Kurss — OWNER review final post-repair Group 05

Avots: [da-kurss-final-post-repair-audit.md](./da-kurss-final-post-repair-audit.md)
Findings: **201–248** (48 ieraksti)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA saturu.

## Finding 1

**Audit ID:** DA-KURSS-FPR-0201
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv`
**Field type:** `cardLv`
**DE (read-only):** Die Hefte sind jetzt in der Mappe.
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Bogstaverne er nu i posen.
**PROPOSED_DA:** Notesbøgerne er nu i mappen.
**Problēma:** Hefte are exercise books/notebooks; Bogstaverne means letters of the alphabet.
**Audita pamatojums:** Hefte are exercise books/notebooks; Bogstaverne means letters of the alphabet.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-FPR-0202
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[15].lv`
**Field type:** `cardLv`
**DE (read-only):** Er geht in die Klasse.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Han går i klassen.
**PROPOSED_DA:** Han går ind i klassen.
**Problēma:** in die Klasse is wohin? (into the classroom); i klassen is static location (wo?).
**Audita pamatojums:** in die Klasse is wohin? (into the classroom); i klassen is static location (wo?).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-FPR-0203
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** das Bild
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** das Bild — image / picture
**PROPOSED_DA:** das Bild — billede
**Problēma:** English glosses image/picture instead of Danish billede.
**Audita pamatojums:** English glosses image/picture instead of Danish billede.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-FPR-0204
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** der Großvater
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Großvater — grandfather
**PROPOSED_DA:** der Großvater — bedstefar
**Problēma:** Vocabulary gloss is English, not Danish.
**Audita pamatojums:** Vocabulary gloss is English, not Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-FPR-0205
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[15]`
**Field type:** `sectionItem`
**DE (read-only):** die Großmutter
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Großmutter — grandmother
**PROPOSED_DA:** die Großmutter — bedstemor
**Problēma:** Vocabulary gloss is English, not Danish.
**Audita pamatojums:** Vocabulary gloss is English, not Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-FPR-0206
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[3].lv`
**Field type:** `cardLv`
**DE (read-only):** Er zeigt den Schülern und Schülerinnen viele Länder, Städte, Berge, Seen und Flüsse.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Han viser drengene og pigerne mange byer, lande, bjerge, søer og floder.
**PROPOSED_DA:** Han viser eleverne mange lande, byer, bjerge, søer og floder.
**Problēma:** Schüler/Schülerinnen are pupils/students, not generic drenge og piger.
**Audita pamatojums:** Schüler/Schülerinnen are pupils/students, not generic drenge og piger.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-FPR-0207
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[4].lv`
**Field type:** `cardLv`
**DE (read-only):** Dann ruft der Lehrer einen Schüler auf.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Så ringer læreren til eleven.
**PROPOSED_DA:** Så kalder læreren på eleven.
**Problēma:** ruft … auf means calls on (summons to speak); ringer til implies a phone call.
**Audita pamatojums:** ruft … auf means calls on (summons to speak); ringer til implies a phone call.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-FPR-0208
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** das Stockwerk
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** das Stockwerk — floor
**PROPOSED_DA:** das Stockwerk — etage
**Problēma:** Vocabulary gloss is English floor instead of Danish etage.
**Audita pamatojums:** Vocabulary gloss is English floor instead of Danish etage.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-FPR-0209
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** das Vorhaus
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** das Vorhaus — hall / corridor
**PROPOSED_DA:** das Vorhaus — forhus / gang
**Problēma:** English glosses hall/corridor instead of Danish.
**Audita pamatojums:** English glosses hall/corridor instead of Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-FPR-0210
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** der Boden
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Boden — attic / floor / ground
**PROPOSED_DA:** der Boden — loft / gulv / jord
**Problēma:** English multi-gloss instead of Danish equivalents.
**Audita pamatojums:** English multi-gloss instead of Danish equivalents.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-FPR-0211
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** der Schornsteinfeger
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Schornsteinfeger — chimney sweep
**PROPOSED_DA:** der Schornsteinfeger — skorstensfejer
**Problēma:** Vocabulary gloss is English, not Danish.
**Audita pamatojums:** Vocabulary gloss is English, not Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-FPR-0212
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[22]`
**Field type:** `sectionItem`
**DE (read-only):** bald
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** bald — soon
**PROPOSED_DA:** bald — snart
**Problēma:** Vocabulary gloss is English soon instead of Danish snart.
**Audita pamatojums:** Vocabulary gloss is English soon instead of Danish snart.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-FPR-0213
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[24]`
**Field type:** `sectionItem`
**DE (read-only):** licht
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** licht — light
**PROPOSED_DA:** licht — lyst
**Problēma:** English light instead of Danish lyst (licht = light-colored).
**Audita pamatojums:** English light instead of Danish lyst (licht = light-colored).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-KURSS-FPR-0214
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Trafikord, der besvarer spørgsmålet wann? i Foredrag 19 og 20. — hvornår?, står med Dativ. Dativen svarer ikke kun til wo? — hvor?, men også på wann? - hvornår?
**PROPOSED_DA:** Tidsord, der besvarer spørgsmålet wann? i lektion 19 og 20 — hvornår?, står med dativ. Dativ svarer ikke kun til wo? — hvor?, men også på wann? — hvornår?
**Problēma:** Trafikord (traffic words) is wrong for temporal wann? words; should be tidsord.
**Audita pamatojums:** Trafikord (traffic words) is wrong for temporal wann? words; should be tidsord.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-KURSS-FPR-0215
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[2].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** -e- starp celmu un galotni
**PROPOSED_DA:** -e- mellem stamme og endelse
**Problēma:** Grammar heading is untranslated Latvian.
**Audita pamatojums:** Grammar heading is untranslated Latvian.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-KURSS-FPR-0216
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[4].lv`
**Field type:** `cardLv`
**DE (read-only):** Woraus sind die Türen?
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad er døren lavet af?
**PROPOSED_DA:** Hvad er dørene lavet af?
**Problēma:** German uses plural die Türen; Danish uses singular døren.
**Audita pamatojums:** German uses plural die Türen; Danish uses singular døren.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-KURSS-FPR-0217
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[20].lv`
**Field type:** `cardLv`
**DE (read-only):** Wohin musst du das Holz tragen?
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvor skal du have brænde med?
**PROPOSED_DA:** Hvor skal du bære brændet hen?
**Problēma:** Ungrammatical and misaligned: DE asks where to carry wood (wohin/tragen), not have-with.
**Audita pamatojums:** Ungrammatical and misaligned: DE asks where to carry wood (wohin/tragen), not have-with.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-KURSS-FPR-0218
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[23].lv`
**Field type:** `cardLv`
**DE (read-only):** Was brennt hell?
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad brænder stærkt?
**PROPOSED_DA:** Hvad brænder klart?
**Problēma:** hell means brightly; stærkt (strongly) changes the meaning vs DE.
**Audita pamatojums:** hell means brightly; stærkt (strongly) changes the meaning vs DE.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-KURSS-FPR-0219
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** treten
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** treten — go / come / take a step
**PROPOSED_DA:** treten — at gå / træde / tage et skridt
**Problēma:** Vocabulary gloss is English instead of Danish.
**Audita pamatojums:** Vocabulary gloss is English instead of Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-KURSS-FPR-0220
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** er tritt
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** er tritt — he goes / takes a step
**PROPOSED_DA:** er tritt — han går / tager et skridt
**Problēma:** Conjugation gloss is English instead of Danish.
**Audita pamatojums:** Conjugation gloss is English instead of Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-KURSS-FPR-0221
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** holen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** holen — bring / deliver
**PROPOSED_DA:** holen — hente / bringe
**Problēma:** Vocabulary gloss is English instead of Danish.
**Audita pamatojums:** Vocabulary gloss is English instead of Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-KURSS-FPR-0222
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[18]`
**Field type:** `sectionItem`
**DE (read-only):** er sieht
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** er sieht — he sees
**PROPOSED_DA:** er sieht — han ser
**Problēma:** Conjugation gloss is English instead of Danish.
**Audita pamatojums:** Conjugation gloss is English instead of Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-KURSS-FPR-0223
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversæt
**Problēma:** Section title uses infinitive Oversætte; all other lessons use imperative Oversæt.
**Audita pamatojums:** Section title uses infinitive Oversætte; all other lessons use imperative Oversæt.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-KURSS-FPR-0224
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Artikler</h3> <div class="articles-info articles-intro-info"> <span class="articles-info-icon">i</span> <div>Den tyske artikel falder ikke altid sammen med det engelske kønssystem. Derfor læres navneord bedst sammen med artiklen.</div> </div> <section class="articles-block"> <h4 class="articles-header"><span>•</span>Eksempler på artikler</h4> <div class="articles-grid"> <div class="kurss-example">Der Tisch - bord</div> <div class="kurss-example">Die Tür - døren</div> <div class="kurss-exampl…
**PROPOSED_DA:** Ofte DIE
**Problēma:** Section heading renders German article DIE as DØR (door).
**Audita pamatojums:** Section heading renders German article DIE as DØR (door).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-KURSS-FPR-0225
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Artikler</h3> <div class="articles-info articles-intro-info"> <span class="articles-info-icon">i</span> <div>Den tyske artikel falder ikke altid sammen med det engelske kønssystem. Derfor læres navneord bedst sammen med artiklen.</div> </div> <section class="articles-block"> <h4 class="articles-header"><span>•</span>Eksempler på artikler</h4> <div class="articles-grid"> <div class="kurss-example">Der Tisch - bord</div> <div class="kurss-example">Die Tür - døren</div> <div class="kurss-exampl…
**PROPOSED_DA:** Der Montag — mandag
**Problēma:** Example gloss uses wrong Danish 'Passer' instead of German article example.
**Audita pamatojums:** Example gloss uses wrong Danish 'Passer' instead of German article example.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-KURSS-FPR-0226
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** 
  <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info">
    <span class="artikuli-info-icon">i</span>
    <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div>
  </div> 
  <section class="artikuli-block">
    <h4 class="artikuli-header"><span>N</span>Nominativ - hvad?</h4>
    <div class="artikuli-grid"><div class="kurss-example">Ich - jeg</div><div class="kurss-example">Du - dig</div><div class="kurss-example">Øh - han</div><div class="kurss-example">Sie - hun</div><d…
**PROPOSED_DA:** Er — han
**Problēma:** German er glossed as 'Øh' instead of pronoun Er.
**Audita pamatojums:** German er glossed as 'Øh' instead of pronoun Er.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-KURSS-FPR-0227
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** 
  <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info">
    <span class="artikuli-info-icon">i</span>
    <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div>
  </div> 
  <section class="artikuli-block">
    <h4 class="artikuli-header"><span>N</span>Nominativ - hvad?</h4>
    <div class="artikuli-grid"><div class="kurss-example">Ich - jeg</div><div class="kurss-example">Du - dig</div><div class="kurss-example">Øh - han</div><div class="kurss-example">Sie - hun</div><d…
**PROPOSED_DA:** Du — du
**Problēma:** Nominativ du glossed with accusative form dig.
**Audita pamatojums:** Nominativ du glossed with accusative form dig.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-KURSS-FPR-0228
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** 
  <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info">
    <span class="artikuli-info-icon">i</span>
    <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div>
  </div> 
  <section class="artikuli-block">
    <h4 class="artikuli-header"><span>N</span>Nominativ - hvad?</h4>
    <div class="artikuli-grid"><div class="kurss-example">Ich - jeg</div><div class="kurss-example">Du - dig</div><div class="kurss-example">Øh - han</div><div class="kurss-example">Sie - hun</div><d…
**PROPOSED_DA:** Wir danken euch. – Vi takker jer.
**Problēma:** Example omits indirect object in Danish gloss; German euch misspelled as Euk.
**Audita pamatojums:** Example omits indirect object in Danish gloss; German euch misspelled as Euk.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-KURSS-FPR-0229
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">Tarm (få) - godt</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><di…
**PROPOSED_DA:** gut (gūt) — godt
**Problēma:** German gut wrongly glossed as Tarm.
**Audita pamatojums:** German gut wrongly glossed as Tarm.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** DA-KURSS-FPR-0230
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for begynderen.</p> <section class="kurss-lesson-section"> <h4>Konsonanter</h4> <div class="kurss-examples"><div class="kurss-example">Das Rad (rāt) - hjul</div><div class="kurss-example">Die Räder (rēder) - hjul</div><div class="kurss-example">Dårlig (bāt) - dårlig</div><div class="kur…
**PROPOSED_DA:** Bad (bāt) — bad
**Problēma:** German Bad glossed as Dårlig.
**Audita pamatojums:** German Bad glossed as Dårlig.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** DA-KURSS-FPR-0231
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Sætningsstruktur</h3> <p class="kurss-lesson-intro">I en spørgsmålssætning kommer verbet normalt først på tysk.</p> <section class="kurss-lesson-section"> <h4>Eksempler</h4> <div class="kurss-examples"><div class="kurss-example">Du kommst. — Du kommer.</div><div class="kurss-example">Kommst du? — Kommer du?</div><div class="kurss-example">Er singt. — Han synger.</div><div class="kurss-example">Singt er? — Synger han?</div><div class="kurss-example">Stehst du? — Står du?</div><div class="kurs…
**PROPOSED_DA:** Was tust du? — Hvad laver du?
**Problēma:** Danish side repeats German instead of translating.
**Audita pamatojums:** Danish side repeats German instead of translating.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** DA-KURSS-FPR-0232
**Lesson/ID:** `kurssSentenceStructureLesson`
**Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Sætningsstruktur</h3> <p class="kurss-lesson-intro">I en spørgsmålssætning kommer verbet normalt først på tysk.</p> <section class="kurss-lesson-section"> <h4>Eksempler</h4> <div class="kurss-examples"><div class="kurss-example">Du kommst. — Du kommer.</div><div class="kurss-example">Kommst du? — Kommer du?</div><div class="kurss-example">Er singt. — Han synger.</div><div class="kurss-example">Singt er? — Synger han?</div><div class="kurss-example">Stehst du? — Står du?</div><div class="kurs…
**PROPOSED_DA:** Paul fragt nicht. — Paul spørger ikke.
**Problēma:** Negation examples pair wrong DE/DA sentences.
**Audita pamatojums:** Negation examples pair wrong DE/DA sentences.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** DA-KURSS-FPR-0233
**Lesson/ID:** `lesson3`
**Path:** `lesson3TrainingCardsDa[0].front`
**Field type:** `trainingFront`
**DE (read-only):** Rechnest du?
**Severity:** LOW
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Tæller du
**PROPOSED_DA:** Tæller du?
**Problēma:** Question missing final punctuation.
**Audita pamatojums:** Question missing final punctuation.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** DA-KURSS-FPR-0234
**Lesson/ID:** `lesson2`
**Path:** `lesson2TrainingCardsDa[1].front`
**Field type:** `trainingFront`
**DE (read-only):** Paul fragt.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Spørger Paul.
**PROPOSED_DA:** Paul spørger.
**Problēma:** DE Paul fragt. is a statement; DA uses inverted question-like word order.
**Audita pamatojums:** DE Paul fragt. is a statement; DA uses inverted question-like word order.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** DA-KURSS-FPR-0235
**Lesson/ID:** `lesson3`
**Path:** `lesson3TrainingCardsDa[5].front`
**Field type:** `trainingFront`
**DE (read-only):** Hier liegt ein Buch.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Her er bogen.
**PROPOSED_DA:** Her ligger en bog.
**Problēma:** DE Hier liegt ein Buch; DA 'Her er bogen' loses the lying-position sense.
**Audita pamatojums:** DE Hier liegt ein Buch; DA 'Her er bogen' loses the lying-position sense.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** DA-KURSS-FPR-0236
**Lesson/ID:** `lesson3`
**Path:** `lesson3TrainingCardsDa[21].front`
**Field type:** `trainingFront`
**DE (read-only):** Dort hängt eine Tafel.
**Severity:** LOW
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Der hænger en tavle der.
**PROPOSED_DA:** Der hænger en tavle.
**Problēma:** Redundant second 'der' in DA sentence.
**Audita pamatojums:** Redundant second 'der' in DA sentence.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** DA-KURSS-FPR-0237
**Lesson/ID:** `lesson4`
**Path:** `lesson4TrainingCardsDa[9].front`
**Field type:** `trainingFront`
**DE (read-only):** Nein, es ist scharf.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Nej, den er skarp.
**PROPOSED_DA:** Nej, det er skarpt.
**Problēma:** DE es ist scharf (neuter); DA uses den for neuter noun.
**Audita pamatojums:** DE es ist scharf (neuter); DA uses den for neuter noun.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** DA-KURSS-FPR-0238
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsDa[2].front`
**Field type:** `trainingFront`
**DE (read-only):** Was nimmst du?
**Severity:** LOW
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvad tager du
**PROPOSED_DA:** Hvad tager du?
**Problēma:** Question missing final punctuation.
**Audita pamatojums:** Question missing final punctuation.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** DA-KURSS-FPR-0239
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsDa[5].front`
**Field type:** `trainingFront`
**DE (read-only):** Der Lehrer fragt den Schüler.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Spørger læreren eleven.
**PROPOSED_DA:** Læreren spørger eleven.
**Problēma:** DE Der Lehrer fragt den Schüler; DA uses inverted V2-breaking order.
**Audita pamatojums:** DE Der Lehrer fragt den Schüler; DA uses inverted V2-breaking order.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** DA-KURSS-FPR-0240
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsDa[10].front`
**Field type:** `trainingFront`
**DE (read-only):** Das Mädchen nimmt den Federhalter, die Feder und das Messer.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Pigen tager en fjerpen, en fjer og en kniv.
**PROPOSED_DA:** Pigen tager en fyldepenholder, en fjer og en kniv.
**Problēma:** DE Federhalter, Feder, Messer; DA replaces pen holder with fjerpen.
**Audita pamatojums:** DE Federhalter, Feder, Messer; DA replaces pen holder with fjerpen.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** DA-KURSS-FPR-0241
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsDa[11].front`
**Field type:** `trainingFront`
**DE (read-only):** Sie legt das Messer und den Federhalter hin.
**Severity:** MEDIUM
**Category:** TERMINOLOGY
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hun lægger kniven og fjerpen.
**PROPOSED_DA:** Hun lægger kniven og fyldepenholderen.
**Problēma:** DE Federhalter; DA uses fjerpen instead of established fyldepenholder.
**Audita pamatojums:** DE Federhalter; DA uses fjerpen instead of established fyldepenholder.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** DA-KURSS-FPR-0242
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[9].front`
**Field type:** `trainingFront`
**DE (read-only):** Ich lege zwei Nadeln hin.
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Jeg satte to nåle.
**PROPOSED_DA:** Jeg lægger to nåle.
**Problēma:** DE Ich lege zwei Nadeln hin; DA uses past tense satte with wrong meaning.
**Audita pamatojums:** DE Ich lege zwei Nadeln hin; DA uses past tense satte with wrong meaning.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** DA-KURSS-FPR-0243
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[12].front`
**Field type:** `trainingFront`
**DE (read-only):** Das sind Deckel.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Det er låg.
**PROPOSED_DA:** De er låg.
**Problēma:** DE Das sind Deckel (plural); DA uses singular det er.
**Audita pamatojums:** DE Das sind Deckel (plural); DA uses singular det er.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** DA-KURSS-FPR-0244
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.sections.exerciseCombined`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Übung / Øvelse
**PROPOSED_DA:** Øvelse
**Problēma:** German Übung prefix left in combined section label.
**Audita pamatojums:** German Übung prefix left in combined section label.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** DA-KURSS-FPR-0245
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Übung I — Brug den rigtige bøjning
**PROPOSED_DA:** Øvelse I — Brug den rigtige bøjning
**Problēma:** German Übung label in DA exercise metadata.
**Audita pamatojums:** German Übung label in DA exercise metadata.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** DA-KURSS-FPR-0246
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.translate`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Übung II — oversæt
**PROPOSED_DA:** Øvelse II — oversæt
**Problēma:** German Übung label in DA exercise metadata.
**Audita pamatojums:** German Übung label in DA exercise metadata.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** DA-KURSS-FPR-0247
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.10.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Sein, können, helbred, alder og erhverv.
**PROPOSED_DA:** Sein, können, sundhed, alder og erhverv.
**Problēma:** helbred is archaic/indirect; LV master uses health sense (veselība → sundhed).
**Audita pamatojums:** helbred is archaic/indirect; LV master uses health sense (veselība → sundhed).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** DA-KURSS-FPR-0248
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.11.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Haben, kein/keine/keinen, possessiv og sammensatte substantiver.
**PROPOSED_DA:** Haben, kein/keine/keinen, ejedord og sammensatte substantiver.
**Problēma:** possessiv is not standard Danish UI wording; LV piederība → ejedord.
**Audita pamatojums:** possessiv is not standard Danish UI wording; LV piederība → ejedord.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:**

---
