# ET–DE Kurss — OWNER VIEW (group 07: findings 301–323)

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
Avots: `reports/et-kurss-full-audit.md` / `reports/temp/et-kurss-full-audit.json`
Findings: **23** ieraksti

> **PROPOSED_ET** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda decisions tabulu.
> **DE lauki nemainīt.** Apply tikai ET lauki pēc OWNER lēmuma.

## Finding 301 (Kurss)

**Finding:** 301
**Audit ID:** ET-KURSS-0301
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[16].task`
**Field type:** `cardTask`
**DE (read-only):** Das Kind spielt gern in dem Garten.
**CURRENT_ET:** Vali õige kääne: wo/wann → Dativ, wohin → Akkusativ.
**PROPOSED_ET:** Vali õige kääne: wo → Dativ, wohin → Akkusativ.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Problem:** Reeglis on „wann” vale; vastandus peab olema wo ja wohin.
**Reason:** Reeglis on „wann” vale; vastandus peab olema wo ja wohin.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 302 (Kurss)

**Finding:** 302
**Audit ID:** ET-KURSS-0302
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[19]`
**Field type:** `sectionItem`
**DE (read-only):** fleißig
**CURRENT_ET:** fleißig — usinasti
**PROPOSED_ET:** fleißig — usin
**Severity:** MEDIUM
**Category:** GRAMMAR
**Problem:** Saksa omadussõna „fleißig” on tõlgitud eestikeelse määrsõnana „usinasti”; sõnavaraloendis peaks olema omadussõna.
**Reason:** Saksa omadussõna „fleißig” on tõlgitud eestikeelse määrsõnana „usinasti”; sõnavaraloendis peaks olema omadussõna.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 303 (Kurss)

**Finding:** 303
**Audit ID:** ET-KURSS-0303
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[29]`
**Field type:** `sectionItem`
**DE (read-only):** die Säge
**CURRENT_ET:** die Säge — sae
**PROPOSED_ET:** die Säge — saag
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**Problem:** Eestikeelne vaste on kirjaveaga: „sae” on omastav vorm; tööriista nimetus on „saag”.
**Reason:** Eestikeelne vaste on kirjaveaga: „sae” on omastav vorm; tööriista nimetus on „saag”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 304 (Kurss)

**Finding:** 304
**Audit ID:** ET-KURSS-0304
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[2]`
**Field type:** `grammarExamples`
**DE (read-only):** aus
**CURRENT_ET:** aus — no / iz
**PROPOSED_ET:** aus — seest
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** Eestikeelses tekstis on läti keele jäänuk „iz”. See tuleb asendada eestikeelse vastega.
**Reason:** Eestikeelses tekstis on läti keele jäänuk „iz”. See tuleb asendada eestikeelse vastega.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 305 (Kurss)

**Finding:** 305
**Audit ID:** ET-KURSS-0305
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[4]`
**Field type:** `grammarExamples`
**DE (read-only):** von dem Felde / vom Felde
**CURRENT_ET:** von dem Felde / vom Felde — no lauka
**PROPOSED_ET:** von dem Felde / vom Felde — põllult
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** Eestikeelses tekstis on läti keele jäänuk „no lauka”. Tõlge peab olema eesti keeles.
**Reason:** Eestikeelses tekstis on läti keele jäänuk „no lauka”. Tõlge peab olema eesti keeles.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 306 (Kurss)

**Finding:** 306
**Audit ID:** ET-KURSS-0306
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsEt[8].front`
**Field type:** `trainingFront`
**DE (read-only):** Antwortet die Schülerin schlecht?
**CURRENT_ET:** Kas õpilane (naine) vastab halvasti?
**PROPOSED_ET:** Kas naisõpilane vastab halvasti?
**Severity:** MEDIUM
**Category:** NATURALNESS
**Problem:** Sulgudes olev „naine” on ebaloomulik märgend; saksa naissoost õpilase vaste on loomulikult „naisõpilane”.
**Reason:** Sulgudes olev „naine” on ebaloomulik märgend; saksa naissoost õpilase vaste on loomulikult „naisõpilane”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 307 (Kurss)

**Finding:** 307
**Audit ID:** ET-KURSS-0307
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsEt[9].front`
**Field type:** `trainingFront`
**DE (read-only):** Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut.
**CURRENT_ET:** Ei, õpilane (naine) ei vasta halvasti, tema vastab hästi.
**PROPOSED_ET:** Ei, naisõpilane ei vasta halvasti, tema vastab hästi.
**Severity:** MEDIUM
**Category:** NATURALNESS
**Problem:** Sulgudes olev „naine” on ebaloomulik märgend; saksa naissoost õpilase vaste on loomulikult „naisõpilane”.
**Reason:** Sulgudes olev „naine” on ebaloomulik märgend; saksa naissoost õpilase vaste on loomulikult „naisõpilane”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 308 (Kurss)

**Finding:** 308
**Audit ID:** ET-KURSS-0308
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsEt[4].lv`
**Field type:** `trainingLv`
**DE (read-only):** zählen
**CURRENT_ET:** lugema
**PROPOSED_ET:** loendama
**Severity:** HIGH
**Category:** SEMANTICS
**Problem:** „Lugema” tähendab „lesen” ehk lugema; saksa „zählen” vaste on „loendama”.
**Reason:** „Lugema” tähendab „lesen” ehk lugema; saksa „zählen” vaste on „loendama”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 309 (Kurss)

**Finding:** 309
**Audit ID:** ET-KURSS-0309
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.backToMain`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Tagasi peamisele ekraanile
**PROPOSED_ET:** Tagasi põhiekraanile
**Severity:** MEDIUM
**Category:** NATURALNESS
**Problem:** „Põhiekraan” on eesti keeles loomulikum ja kompaktsem vaste rakenduse põhivaatele kui „peamine ekraan”.
**Reason:** „Põhiekraan” on eesti keeles loomulikum ja kompaktsem vaste rakenduse põhivaatele kui „peamine ekraan”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 310 (Kurss)

**Finding:** 310
**Audit ID:** ET-KURSS-0310
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.pronunciationDesc`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Saksa keele häälte ja häälduse alused.
**PROPOSED_ET:** Saksa keele häälikute ja häälduse alused.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Problem:** Keeleõpetuses tähendavad „häälikud” speech sounds; „hääled” viitab pigem häältele või helidele.
**Reason:** Keeleõpetuses tähendavad „häälikud” speech sounds; „hääled” viitab pigem häältele või helidele.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 311 (Kurss)

**Finding:** 311
**Audit ID:** ET-KURSS-0311
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.articlesDesc`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Der, die, das ja kasutamise alused.
**PROPOSED_ET:** Der, die, das ja nende kasutamise alused.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Problem:** „Nende kasutamise” täpsustab, et jutt on artiklite kasutamisest; praegune sõnastus jätab seose ebamääraseks.
**Reason:** „Nende kasutamise” täpsustab, et jutt on artiklite kasutamisest; praegune sõnastus jätab seose ebamääraseks.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 312 (Kurss)

**Finding:** 312
**Audit ID:** ET-KURSS-0312
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonsDesc`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Õppetunnid järjestuses 1 kuni 21.
**PROPOSED_ET:** Õppetunnid järjekorras 1–21.
**Severity:** LOW
**Category:** NATURALNESS
**Problem:** „Järjekorras 1–21” on eesti keeles loomulikum kui „järjestuses 1 kuni 21”.
**Reason:** „Järjekorras 1–21” on eesti keeles loomulikum kui „järjestuses 1 kuni 21”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 313 (Kurss)

**Finding:** 313
**Audit ID:** ET-KURSS-0313
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.articlesSubtitle`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Der, die, das ja kasutamise alused.
**PROPOSED_ET:** Der, die, das ja nende kasutamise alused.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Problem:** „Nende kasutamise” täpsustab, et jutt on artiklite kasutamisest; praegune sõnastus jätab seose ebamääraseks.
**Reason:** „Nende kasutamise” täpsustab, et jutt on artiklite kasutamisest; praegune sõnastus jätab seose ebamääraseks.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 314 (Kurss)

**Finding:** 314
**Audit ID:** ET-KURSS-0314
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.pronunciationSubtitle`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Saksa keele häälte ja häälduse alused
**PROPOSED_ET:** Saksa keele häälikute ja häälduse alused
**Severity:** MEDIUM
**Category:** SEMANTICS
**Problem:** Keeleõpetuses tähendavad „häälikud” speech sounds; „hääled” viitab pigem häältele või helidele.
**Reason:** Keeleõpetuses tähendavad „häälikud” speech sounds; „hääled” viitab pigem häältele või helidele.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 315 (Kurss)

**Finding:** 315
**Audit ID:** ET-KURSS-0315
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonsSubtitle`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Õppetunnid järjestuses 1 kuni 21.
**PROPOSED_ET:** Õppetunnid järjekorras 1–21.
**Severity:** LOW
**Category:** NATURALNESS
**Problem:** „Järjekorras 1–21” on eesti keeles loomulikum kui „järjestuses 1 kuni 21”.
**Reason:** „Järjekorras 1–21” on eesti keeles loomulikum kui „järjestuses 1 kuni 21”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 316 (Kurss)

**Finding:** 316
**Audit ID:** ET-KURSS-0316
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.sections.exerciseCombined`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Übung / Harjutus
**PROPOSED_ET:** Harjutus
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** String sisaldab saksakeelset jäänukit „Übung”; eestikeelses kasutajaliideses peaks olema ainult „Harjutus”.
**Reason:** String sisaldab saksakeelset jäänukit „Übung”; eestikeelses kasutajaliideses peaks olema ainult „Harjutus”.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 317 (Kurss)

**Finding:** 317
**Audit ID:** ET-KURSS-0317
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.cta.transformSentence`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Muuda lauset.
**PROPOSED_ET:** Muuda lauset.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Problem:** Transitiivse verbi „muutma“ objekt on siin partitiivis: „muuda lauset“, mitte „muuda lause“.
**Reason:** Transitiivse verbi „muutma“ objekt on siin partitiivis: „muuda lauset“, mitte „muuda lause“.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 318 (Kurss)

**Finding:** 318
**Audit ID:** ET-KURSS-0318
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.cta.transformThirdSingular`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Muuda lause 3. isikus ainsuses.
**PROPOSED_ET:** Muuda lauset 3. isikus ainsuses.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Problem:** Transitiivse verbi „muutma“ objekt on siin partitiivis: „muuda lauset“.
**Reason:** Transitiivse verbi „muutma“ objekt on siin partitiivis: „muuda lauset“.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 319 (Kurss)

**Finding:** 319
**Audit ID:** ET-KURSS-0319
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.cta.transformFirstPlural`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Muuda lause 1. isikus mitmuses.
**PROPOSED_ET:** Muuda lauset 1. isikus mitmuses.
**Severity:** MEDIUM
**Category:** GRAMMAR
**Problem:** Transitiivse verbi „muutma“ objekt on siin partitiivis: „muuda lauset“.
**Reason:** Transitiivse verbi „muutma“ objekt on siin partitiivis: „muuda lauset“.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 320 (Kurss)

**Finding:** 320
**Audit ID:** ET-KURSS-0320
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Übung I — kasuta õiget käänet
**PROPOSED_ET:** Harjutus I — kasuta õiget käänet
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** „Übung“ on saksakeelne sõna ja ei kuulu eestikeelsesse kasutajaliidese teksti.
**Reason:** „Übung“ on saksakeelne sõna ja ei kuulu eestikeelsesse kasutajaliidese teksti.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 321 (Kurss)

**Finding:** 321
**Audit ID:** ET-KURSS-0321
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Pane õige kääne ja tee mitmus!
**PROPOSED_ET:** Vali õige kääne ja moodusta mitmus!
**Severity:** MEDIUM
**Category:** NATURALNESS
**Problem:** „Pane õige kääne“ ja „tee mitmus“ on eesti keeles ebaloomulikud väljendid; tavapärased on „vali“ ja „moodusta“.
**Reason:** „Pane õige kääne“ ja „tee mitmus“ on eesti keeles ebaloomulikud väljendid; tavapärased on „vali“ ja „moodusta“.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 322 (Kurss)

**Finding:** 322
**Audit ID:** ET-KURSS-0322
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.translate`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Übung II — tõlgi
**PROPOSED_ET:** Harjutus II — tõlgi
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Problem:** „Übung“ on saksakeelne sõna ja ei kuulu eestikeelsesse kasutajaliidese teksti.
**Reason:** „Übung“ on saksakeelne sõna ja ei kuulu eestikeelsesse kasutajaliidese teksti.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---

## Finding 323 (Kurss)

**Finding:** 323
**Audit ID:** ET-KURSS-0323
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.16.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**CURRENT_ET:** Dativ, geben, sich nähern.
**PROPOSED_ET:** Daativ, geben, sich nähern.
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Problem:** „Dativ“ on saksakeelne termin; eestikeelne grammatikatermin on „daativ“, nagu „akusatiiv“ samas menüüs.
**Reason:** „Dativ“ on saksakeelne termin; eestikeelne grammatikatermin on „daativ“, nagu „akusatiiv“ samas menüüs.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/et-kurss-full-audit.md`) · luna

---
