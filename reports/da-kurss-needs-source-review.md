# DA–DE Kurss — NEEDS_SOURCE_REVIEW (20)

Avots: `reports/da-kurss-owner-decisions.md` · post-Luna re-audits (69 findings)
Saistītais apply PR: **#581** (41 LABOT jau piemēroti)
Decisions veidne: [`da-kurss-needs-source-review-decisions.md`](./da-kurss-needs-source-review-decisions.md)

> **DE = STRICT READ-ONLY.** Šie 20 ieraksti **nav** piemēroti automātiski.
> Katram jāizvērtē pret **LV MASTER** (`data/courseLessons.js`) un jā sagatavo pilns dāņu HTML/teksts vai apstiprināts NELABOT/FALSE_POSITIVE.

## Kopsavilkums

| Grupa | Skaits | Severity mix |
|---|---:|---|
| lesson-01-legacyHtml | 2 | HIGH |
| lesson-02-legacyHtml | 2 | HIGH |
| lesson-03-legacyHtml | 2 | HIGH |
| lesson-04-legacyHtml | 2 | HIGH |
| lesson-05-legacyHtml | 2 | HIGH |
| lesson-06-legacyHtml | 2 | HIGH |
| lesson-07-legacyHtml | 1 | HIGH |
| subtitle | 1 | NEEDS_SOURCE_REVIEW |
| training-card | 1 | NEEDS_SOURCE_REVIEW |
| static-pronunciation | 1 | HIGH |
| static-consonants | 1 | HIGH |
| static-articles | 1 | HIGH |
| static-verb-basics | 1 | NEEDS_SOURCE_REVIEW |
| static-sentence-structure | 1 | CRITICAL |
| **Kopā** | **20** | |

## Blokējošie iemesli (OWNER)

| Tips | Findings | Apraksts |
|---|---:|---|
| Pilns `legacyHtml` (saīsināts auditā) | 1–7 | Nepietiek drošam COPY-ONLY; vajag LV MASTER salīdzinājumu |
| Statiskie HTML paneļi (veselums) | 8–9, 46, 61–62 | Paneļi jālabo kā viens autoritatīvs HTML, nevis fragmenti |
| Latvisks / nederīgs PROPOSED_DA | 10–11, 13–15, 17 | Luna PROPOSED nav dāņu; vajag manuālu lokalizāciju |
| Subtitle vs LV tēma | 16 | DA subtitle var būt korekts, bet jāapstiprina pret Lesson 6 struktūru |
| DE/source jautājums | 63 | DA korekts; iespējama DE avota kļūda — DA nemainīt bez avota afklaring |

## OWNER darba plūsma

1. Atver finding sadaļu zemāk (vai aizpildi [`decisions`](./da-kurss-needs-source-review-decisions.md)).
2. Salīdzini **LV MASTER** vs **CURRENT_DA** vs **PROPOSED_DA** (PROPOSED nav apstiprināts).
3. `Statuss` → LABOT | NELABOT | FALSE_POSITIVE | NEEDS_SOURCE_REVIEW (ja joprojām bloķēts).
4. `OWNER_DECISION` → pilns dāņu HTML/teksts COPY-ONLY apply, vai pamatojums kāpēc nemainīt.

## Decisions (aizpildāms)

| Finding | Audit ID | Lesson/ID | Path | Severity | Grupa | LV MASTER | Statuss | OWNER_DECISION |
|--:|---|---|---|---|---|---|---|---|
| 1 | DA-KURSS-0001 | `lesson1` | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | HIGH | lesson-01-legacyHtml | data/courseLessons.js → kurssLesson1.leg… | NEEDS_SOURCE_REVIEW | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 2 | DA-KURSS-0002 | `lesson2` | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | HIGH | lesson-02-legacyHtml | data/courseLessons.js → kurssLesson2.leg… | NEEDS_SOURCE_REVIEW | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 3 | DA-KURSS-0003 | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | HIGH | lesson-03-legacyHtml | data/courseLessons.js → kurssLesson3.leg… | NEEDS_SOURCE_REVIEW | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 4 | DA-KURSS-0004 | `lesson4` | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | HIGH | lesson-04-legacyHtml | data/courseLessons.js → kurssLesson4.leg… | NEEDS_SOURCE_REVIEW | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 5 | DA-KURSS-0005 | `lesson5` | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | HIGH | lesson-05-legacyHtml | data/courseLessons.js → kurssLesson5.leg… | NEEDS_SOURCE_REVIEW | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 6 | DA-KURSS-0006 | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | HIGH | lesson-06-legacyHtml | data/courseLessons.js → kurssLesson6.leg… | NEEDS_SOURCE_REVIEW | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 7 | DA-KURSS-0007 | `lesson7` | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | HIGH | lesson-07-legacyHtml | data/courseLessons.js → kurssLesson7.leg… | NEEDS_SOURCE_REVIEW | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 8 | DA-KURSS-0008 | `kurssPronunciationLesson` | `COURSE_LESSON_HTML.kurssPronunciationLesson` | HIGH | static-pronunciation | data/courseLessons.js → COURSE_LESSON_HT… | NEEDS_SOURCE_REVIEW | Izrunas paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu LV transkripciju mehāniska nomaiņa nav droša. |
| 9 | DA-KURSS-0009 | `kurssConsonantsLesson` | `COURSE_LESSON_HTML.kurssConsonantsLesson` | HIGH | static-consonants | data/courseLessons.js → COURSE_LESSON_HT… | NEEDS_SOURCE_REVIEW | Līdzskaņu paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu transkripciju mehāniska nomaiņa nav droša. |
| 10 | DA-KURSS-L0001 | `lesson1` | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | HIGH | lesson-01-legacyHtml | data/courseLessons.js → kurssLesson1.leg… | NEEDS_SOURCE_REVIEW | Audita PROPOSED_DA ir latviski, nevis dāniski. Nepieciešams pilns avota fragments un dāņu lokalizācija. |
| 11 | DA-KURSS-L0002 | `lesson2` | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | HIGH | lesson-02-legacyHtml | data/courseLessons.js → kurssLesson2.leg… | NEEDS_SOURCE_REVIEW | Audita PROPOSED_DA ir latviski, nevis dāniski, un aprakstītas vairākas semantiskas kļūdas vienā HTML laukā. Nepieciešams pilns avota fragments. |
| 13 | DA-KURSS-L0004 | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | HIGH | lesson-03-legacyHtml | data/courseLessons.js → kurssLesson3.leg… | NEEDS_SOURCE_REVIEW | Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments. |
| 14 | DA-KURSS-L0005 | `lesson4` | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | HIGH | lesson-04-legacyHtml | data/courseLessons.js → kurssLesson4.leg… | NEEDS_SOURCE_REVIEW | Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments. |
| 15 | DA-KURSS-L0006 | `lesson5` | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | HIGH | lesson-05-legacyHtml | data/courseLessons.js → kurssLesson5.leg… | NEEDS_SOURCE_REVIEW | Audita PROPOSED_DA ir latviski, nevis dāniski. Pilnais grammar/legacyHtml saturs jāpārskata pret avotu. |
| 16 | DA-KURSS-L0007 | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.subtitle` | NEEDS_SOURCE_REVIEW | subtitle | data/courseLessons.js → kurssLesson6.leg… | NEEDS_SOURCE_REVIEW | Pašreizējais dāņu subtitle ir valodiski korekts, bet audits norāda uz iespējamu neatbilstību LV MASTER tēmai. Pirms maiņas jāpārbauda faktiskā Lesson 6 struktūra. |
| 17 | DA-KURSS-L0008 | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | HIGH | lesson-06-legacyHtml | data/courseLessons.js → kurssLesson6.leg… | NEEDS_SOURCE_REVIEW | Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks ir plaši piesārņots. Nepieciešams pilns avota fragments. |
| 46 | DA-KURSS-L0037 | `kurssArticlesLesson` | `COURSE_LESSON_HTML.kurssArticlesLesson` | HIGH | static-articles | data/courseLessons.js → COURSE_LESSON_HT… | NEEDS_SOURCE_REVIEW | Hele artikelpanelet indeholder flere uafhængige fejl. Der kræves et komplet, autoritativt dansk HTML-felt før COPY-ONLY apply. |
| 61 | DA-KURSS-L0052 | `kurssVerbBasicsLesson` | `COURSE_LESSON_HTML.kurssVerbBasicsLesson` | NEEDS_SOURCE_REVIEW | static-verb-basics | data/courseLessons.js → COURSE_LESSON_HT… | NEEDS_SOURCE_REVIEW | Verb-panelet skal sammenlignes komplet med LV MASTER for struktur og indhold. Auditteksten indeholder ikke et fuldt autoritativt replacement. |
| 62 | DA-KURSS-L0053 | `kurssSentenceStructureLesson` | `COURSE_LESSON_HTML.kurssSentenceStructureLesson` | CRITICAL | static-sentence-structure | data/courseLessons.js → COURSE_LESSON_HT… | NEEDS_SOURCE_REVIEW | Panelet har flere fejljusterede eksempler. De viste delrettelser er korrekte, men hele HTML-feltet skal gennemgås samlet før COPY-ONLY apply. |
| 63 | DA-KURSS-L0054 | `lesson4` | `lesson4TrainingCardsDa[11].front` | NEEDS_SOURCE_REVIEW | training-card | data/courseLessons.js → kurssLesson4.leg… | NEEDS_SOURCE_REVIEW | DA-sætningen er korrekt som dansk, men audit peger på en mulig DE/source-fejl (`Es`). DE er STRICT READ-ONLY, så DA må ikke ændres uden source-afklaring. |

## Finding detaļas

### Finding 1 — lesson1 (lesson-01-legacyHtml)

- **Audit ID:** DA-KURSS-0001
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson1.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN, ZERO_WIDTH
- **Reason:** Detected: LV_DIAC, LV_WORD, EN, ZERO_WIDTH

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Lektion 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="lesson1-verb-icon">♟</span>kommen — at komme</h4> <div class="lesson1-conjugation"><span>ich</span><strong>komme</strong><span>Jeg kommer</span><span>du</span><strong>kommst</strong><span>Du kommer</span><span>er / sie</span><strong>kommt</strong><span>Han/hun kommer</span><span>wir</span><strong>kommen</strong><span>Vi kommer</span><span>ihr</span><strong>kommt</strong><span>I kommer</span><span>sie / Sie</span><strong>kommen</strong><span>De / Du kommer</span></div> </article> <article class="lesson1-verb-card"> <h4><span class="lesson1-verb-icon">♟</span>gehen — gå</h4> <div class="lesson1-conjugation"><span>ich</span><strong>gehe</strong><span>Jeg går</span><span>du</span><strong>gehst</stron…
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 2 — lesson2 (lesson-02-legacyHtml)

- **Audit ID:** DA-KURSS-0002
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson2.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN
- **Reason:** Detected: LV_DIAC, LV_WORD, EN

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nicht, er arbeitet.</div> <div class="kurss-example">Arbeitest du?<br>Nein, ich arbeite nicht, ich singe.</div> <div class="kurss-example">Was tut Paul?<br>Er spielt.</div> <div class="kurss-example">Was tut Marie?<br>Sie singt.</div> <div class="kurss-example">Paul spielt, aber Marie singt.</div> <div class="kurss-example">Singt ihr?<br>Nein, wir singen nicht, wir arbeiten.</div> <div class="kurss-example">Was tun Paul und Marie?<br>Sie fragen.<br>Sie antworten nicht.</div> <div class="kurss-example">Wer arbeitet?<br>Wir arbeiten.<br>Wir rechnen und zeichnen.</div> <div class="kurss-example">Sie kommen, sie fragen, sie antworten, sie arbeiten, sie spielen, sie singen, sie gehen.</div> </div> <…
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 3 — lesson3 (lesson-03-legacyHtml)

- **Audit ID:** DA-KURSS-0003
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson3.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **Reason:** Detected: LV_DIAC, LV_WORD

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 3</h3> <p class="kurss-lesson-intro">Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br>Paul und Anna kommen.</div><div class="kurss-example">Was steht hier?<br>Hier steht ein Tisch.</div><div class="kurss-example">Was steht dort?<br>Dort steht eine Bank.</div><div class="kurss-example">Was liegt hier?<br>Hier liegt ein Buch.</div><div class="kurss-example">Was liegt dort?<br>Dort liegt ein Heft.</div><div class="kurss-example">Was hängt hier?<br>Hier hängt ein Bild.</div><div class="kurss-example">Was hängt dort?<br>Dort hängt eine Tafel.</div><div class="kurss-example">Wie ist das Buch?<br>Das Buch ist dick.</div><div class="kurss-example">Wie ist das Heft?<br>Das Heft ist dünn.</div><div class="kurss-example">Wie ist die Bank?<br>Die Bank ist niedrig.</div><div class="kurss…
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 4 — lesson4 (lesson-04-legacyHtml)

- **Audit ID:** DA-KURSS-0004
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson4.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
- **Problem:** Foreign/script: LV_DIAC
- **Reason:** Detected: LV_DIAC

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class="kurss-example">Er fragt: „Wie ist der Federhalter?“</div><div class="kurss-example">Olga antwortet: „Der Federhalter ist schwarz.“</div><div class="kurss-example">Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.</div><div class="kurss-example">Marie kommt und nimmt eine Feder.</div><div class="kurss-example">Sie fragt: „Wie ist die Feder?“</div><div class="kurss-example">Olga antwortet: „Die Feder ist spitz.“</div><div class="kurss-example">Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.</div><div class="kurss-example">Was legt das Mädchen hin? Es legt die Feder hin.</div><div class="kurss-example">Was nimmst du? Ich nehme ein Messer.</d…
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 5 — lesson5 (lesson-05-legacyHtml)

- **Audit ID:** DA-KURSS-0005
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson5.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **Reason:** Detected: LV_DIAC, LV_WORD

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 5</h3> <p class="kurss-lesson-intro">Wen?, akkusativ, sitzen, fragen og -in endelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"> <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div> <div class="kurss-example">Wer steht und antwortet? Der Schüler steht und antwortet.</div> <div class="kurss-example">Wie antwortet der Schüler? Der Schüler antwortet gut.</div> <div class="kurss-example">Wen lobt der Lehrer? Der Lehrer lobt den Schüler.</div> <div class="kurss-example">Wie ist der Schüler? Der Schüler ist klein.</div> <div class="kurss-example">Ist der Schüler klein oder groß? Er ist klein.</div> <div class="kurss-example">Wen fragt die Lehrerin? Die Lehrerin fragt die Schülerin.</div> <div class="kurss-example">Wie antwortet die Schülerin? Die Schülerin antwortet schlecht.</div> <div class="kurss-example">Was tut die Lehrerin? Sie tadelt die Schülerin.</div> <div class="kurss-example">Die Schülerin ist nicht klein, sie ist groß.</div> <d…
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 6 — lesson6 (lesson-06-legacyHtml)

- **Audit ID:** DA-KURSS-0006
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson6.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **Reason:** Detected: LV_DIAC, LV_WORD

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 6</h3> <p class="kurss-lesson-intro">Tal, flertal, omlyd og flertalsformer af substantiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example">Edgar nimmt ein Messer, zwei Messer, drei Messer.</div><div class="kurss-example">Er legt die Messer wieder hin.</div><div class="kurss-example">Alle Messer sind scharf.</div><div class="kurss-example">Dann nimmt er wieder ein Messer.</div><div class="kurss-example">Er macht das Messer auf.</div><div class="kurss-example">Er nimmt den Bleistift.</div><div class="kurss-example">Er spitzt den Bleistift an.</div><div class="kurss-example">Er legt das Messer hin.</div><div class="kurss-example">Er setzt sich und zeichnet.</div><div class="kurss-example">Was zeichnet er? Er zeichnet einen Schlüssel.</div><div class="kurss-example">Gertrud zeichnet ein Fenster und eine Tafel.</div><div class="ku…
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 7 — lesson7 (lesson-07-legacyHtml)

- **Audit ID:** DA-KURSS-0007
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson7.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
- **Problem:** Foreign/script: LV_DIAC
- **Reason:** Detected: LV_DIAC

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Lektion 7</h3><p class="kurss-lesson-intro">Syvende lektion: imperativ, tiltaleform og flertal.</p><details class="lesson1-accordion" open><summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Was tust du? Ich singe ein Lied.</div><div class="kurss-example">Hans und Olga, singt ein Lied! Was tut ihr? Wir singen ein Lied.</div><div class="kurss-example">Fräulein Müller, singen Sie, bitte, ein Lied! Was tun Sie? Ich singe ein Lied.</div><div class="kurss-example">Hans, zähle die Teller! Was tut Hans? Er zählt die Teller.</div><div class="kurss-example">Hans und Olga, zählt die Teller! Was tun Hans und Olga? Sie zählen die Teller.</div><div class="kurss-example">Fräulein Müller, zählen Sie, bitte, die Teller!</div><div class="kurss-example">Hans, öffne das Fenster! Was tut Hans? Er öffnet das Fenster.</div><div class="kurss-example">Hans und Olga, öffnet die Fenster! Was tun Hans und Olga? Sie ö…
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 8 — kurssPronunciationLesson (static-pronunciation)

- **Audit ID:** DA-KURSS-0008
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **LV MASTER:** data/courseLessons.js → COURSE_LESSON_HTML.kurssPronunciationLesson (salīdzināt ar LV struktūru)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Izrunas paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu LV transkripciju mehāniska nomaiņa nav droša.
- **Problem:** Foreign/script: LV_DIAC, ZERO_WIDTH
- **Reason:** Detected: LV_DIAC, ZERO_WIDTH

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">gut — god</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><div class="kurss-example">Hytte (hūt) - hat</div><div class="kurss-example">Hof (hōf) - gårdhave</div><div class="kurss-example">Schlaf — sov</div></div> <p>Hvis en vokal efterfølges af én konsonant, udtales vokalen ofte lang.</p> </section> <section class="kurss-lesson-section"> <h4>Kort vokal</h4> <div class="kurss-examples"><div class="kurss-example">Pilz (pilc) - svamp</div><div class="kurss-example">Wort (vort) - ord</div><div class="kurss-example">Mund (munt) - mund</div><div class="kurss-example">Skaldet (balt) - snart</div><div class="kurss-example">Scharf (tørklæde) - ass</div><div class="kurss-example">Feld (filt) - felt</div><div class="kurss-example">Voll (fol) - fuld</div></div> <p>Hvis …
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 9 — kurssConsonantsLesson (static-consonants)

- **Audit ID:** DA-KURSS-0009
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **LV MASTER:** data/courseLessons.js → COURSE_LESSON_HTML.kurssConsonantsLesson (salīdzināt ar LV struktūru)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Līdzskaņu paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu transkripciju mehāniska nomaiņa nav droša.
- **Problem:** Foreign/script: LV_DIAC, ZERO_WIDTH
- **Reason:** Detected: LV_DIAC, ZERO_WIDTH

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for begynderen.</p> <section class="kurss-lesson-section"> <h4>Konsonanter</h4> <div class="kurss-examples"><div class="kurss-example">Das Rad (rāt) - hjul</div><div class="kurss-example">Die Räder (rēder) - hjul</div><div class="kurss-example">Bad — bad</div><div class="kurss-example">Bäder (bäder) - bade</div></div> <p>Konsonanter i slutningen af ​​et ord udtales ofte ikke, som de er skrevet.</p> </section> <section class="kurss-lesson-section"> <h4>ch</h4> <p>"ch" kan udtales blød eller hård. I nogle ord lyder det som "h", i andre nærmere "k".</p> <div class="kurss-examples"><div class="kurss-example">Rechnen (rehnen) - beregne</div><div class="kurss-example">Zeichnen (caihnen) - uafgjort</div><div class="kurss-example">Nicht (niht) - ikke</div><div class="kurss-example">Schlecht (šleht) - dårlig</div><div class="kurss-example">Mich (mih) - mig</div><div class="kurss-example">Dich (dih) - dig</div><div class="kurss-example">Strauch (štrauh) - busk</div><div class="kurss…
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
(OWNER: Danish replacement per DE/LV meaning)
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 10 — lesson1 (lesson-01-legacyHtml)

- **Audit ID:** DA-KURSS-L0001
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson1.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Audita PROPOSED_DA ir latviski, nevis dāniski. Nepieciešams pilns avota fragments un dāņu lokalizācija.
- **Problem:** Feltet indeholder lettisk tekst samt flere upræcise eller fejlagtige danske grammatik- og oversættelsesfragmenter.
- **Reason:** Feltet indeholder lettisk tekst samt flere upræcise eller fejlagtige danske grammatik- og oversættelsesfragmenter.

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Lektion 1</h3> ...
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 11 — lesson2 (lesson-02-legacyHtml)

- **Audit ID:** DA-KURSS-L0002
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson2.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Audita PROPOSED_DA ir latviski, nevis dāniski, un aprakstītas vairākas semantiskas kļūdas vienā HTML laukā. Nepieciešams pilns avota fragments.
- **Problem:** Feltet indeholder lettiske sætninger og en ordliste med alvorligt forkerte danske betydninger, fx »was tun sie? — beregne« og »antworten — Marie«.
- **Reason:** Feltet indeholder lettiske sætninger og en ordliste med alvorligt forkerte danske betydninger, fx »was tun sie? — beregne« og »antworten — Marie«.

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 2</h3> ...
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
Līdzskaņu kopojumu sp udtales som šp: spielen (špīlen).
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 13 — lesson3 (lesson-03-legacyHtml)

- **Audit ID:** DA-KURSS-L0004
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson3.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments.
- **Problem:** Feltet indeholder omfattende lettiske rester, forkerte ordlistebetydninger og en ødelagt Markdown-/HTML-lignende placeholder i træningskortet.
- **Reason:** Feltet indeholder omfattende lettiske rester, forkerte ordlistebetydninger og en ødelagt Markdown-/HTML-lignende placeholder i træningskortet.

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 3</h3> ...
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 14 — lesson4 (lesson-04-legacyHtml)

- **Audit ID:** DA-KURSS-L0005
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson4.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments.
- **Problem:** Feltet indeholder lettiske rester og flere alvorlige ordlistefejl, fx »einen Federhalter — sort« og »antworten — Marie«-lignende fejloversættelser.
- **Reason:** Feltet indeholder lettiske rester og flere alvorlige ordlistefejl, fx »einen Federhalter — sort« og »antworten — Marie«-lignende fejloversættelser.

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 4</h3> ...
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 15 — lesson5 (lesson-05-legacyHtml)

- **Audit ID:** DA-KURSS-L0006
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson5.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Audita PROPOSED_DA ir latviski, nevis dāniski. Pilnais grammar/legacyHtml saturs jāpārskata pret avotu.
- **Problem:** Feltet indeholder lettisk tekst i grammatikafsnittene og en forkert dansk gloss »wen — hvem«, hvor akkusativbetydningen bør fremgå som »hvem/den hvem«.
- **Reason:** Feltet indeholder lettisk tekst i grammatikafsnittene og en forkert dansk gloss »wen — hvem«, hvor akkusativbetydningen bør fremgå som »hvem/den hvem«.

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 5</h3> ...
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 16 — lesson6 (subtitle)

- **Audit ID:** DA-KURSS-L0007
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.subtitle`
- **LV MASTER:** data/courseLessons.js → kurssLesson6.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** NEEDS_SOURCE_REVIEW / SEMANTICS
- **OWNER iemesls:** Pašreizējais dāņu subtitle ir valodiski korekts, bet audits norāda uz iespējamu neatbilstību LV MASTER tēmai. Pirms maiņas jāpārbauda faktiskā Lesson 6 struktūra.
- **Problem:** Dansk tekst er sprogligt plausibel, men strukturreferencen beskriver et andet emne: verber, stedets adverbier og oversættelse.
- **Reason:** Dansk tekst er sprogligt plausibel, men strukturreferencen beskriver et andet emne: verber, stedets adverbier og oversættelse.

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
Tal, flertal, omlyd og flertalsformer af substantiver
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
Tal, flertal, omlyd og substantivernes flertalsformer
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 17 — lesson6 (lesson-06-legacyHtml)

- **Audit ID:** DA-KURSS-L0008
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **LV MASTER:** data/courseLessons.js → kurssLesson6.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks ir plaši piesārņots. Nepieciešams pilns avota fragments.
- **Problem:** Feltet er stærkt forurenet med lettisk tekst samt blandede, uoversatte og semantisk forkerte danske fragmenter.
- **Reason:** Feltet er stærkt forurenet med lettisk tekst samt blandede, uoversatte og semantisk forkerte danske fragmenter.

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Foredrag 6</h3> ...
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 46 — kurssArticlesLesson (static-articles)

- **Audit ID:** DA-KURSS-L0037
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **LV MASTER:** data/courseLessons.js → COURSE_LESSON_HTML.kurssArticlesLesson (salīdzināt ar LV struktūru)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** HIGH / FOREIGN_REMNANT
- **OWNER iemesls:** Hele artikelpanelet indeholder flere uafhængige fejl. Der kræves et komplet, autoritativt dansk HTML-felt før COPY-ONLY apply.
- **Problem:** HTML-feltet indeholder mange engelske rester og fejlagtige oversættelser, bl.a. "often DER", "DØR ofte" og "egnet til BMW".
- **Reason:** HTML-feltet indeholder mange engelske rester og fejlagtige oversættelser, bl.a. "often DER", "DØR ofte" og "egnet til BMW".

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Artikler</h3> ...
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
<h3>Artikler</h3> ...
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 61 — kurssVerbBasicsLesson (static-verb-basics)

- **Audit ID:** DA-KURSS-L0052
- **Path:** `COURSE_LESSON_HTML.kurssVerbBasicsLesson`
- **LV MASTER:** data/courseLessons.js → COURSE_LESSON_HTML.kurssVerbBasicsLesson (salīdzināt ar LV struktūru)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** NEEDS_SOURCE_REVIEW / STRUCTURE
- **OWNER iemesls:** Verb-panelet skal sammenlignes komplet med LV MASTER for struktur og indhold. Auditteksten indeholder ikke et fuldt autoritativt replacement.
- **Problem:** Dansk HTML afviger i flere punkter fra referenceindholdet; fuld kontrol af struktur og komplethed er nødvendig.
- **Reason:** Dansk HTML afviger i flere punkter fra referenceindholdet; fuld kontrol af struktur og komplethed er nødvendig.

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<h3>Grundlæggende verber</h3> ...
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
<h3>Grundlæggende verber</h3> ...
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 62 — kurssSentenceStructureLesson (static-sentence-structure)

- **Audit ID:** DA-KURSS-L0053
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
- **LV MASTER:** data/courseLessons.js → COURSE_LESSON_HTML.kurssSentenceStructureLesson (salīdzināt ar LV struktūru)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** CRITICAL / FOREIGN_REMNANT
- **OWNER iemesls:** Panelet har flere fejljusterede eksempler. De viste delrettelser er korrekte, men hele HTML-feltet skal gennemgås samlet før COPY-ONLY apply.
- **Problem:** Dialogeksemplerne er fejljusteret, indeholder den tyske rest "Wen" og en ikke-dansk rest "zählt".
- **Reason:** Dialogeksemplerne er fejljusteret, indeholder den tyske rest "Wen" og en ikke-dansk rest "zählt".

**DE (read-only):**

```
—
```

**CURRENT_DA (production snapshot auditā):**

```
<div class="kurss-example">Sie singen nicht. — Spiller du?</div> ... <div class="kurss-example">Wen arbejder?</div> ... <div class="kurss-example">Vi zählt og tegner.</div>
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
<div class="kurss-example">Sie singen nicht. — De synger ikke.</div> ... <div class="kurss-example">Hvem arbejder?</div> ... <div class="kurss-example">Vi regner og tegner.</div>
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

### Finding 63 — lesson4 (training-card)

- **Audit ID:** DA-KURSS-L0054
- **Path:** `lesson4TrainingCardsDa[11].front`
- **LV MASTER:** data/courseLessons.js → kurssLesson4.legacyHtml (LV MASTER)
- **DA production:** `data/da/courseLessons.js` / `data/da/courseTrainingCards.js`
- **Severity / Category:** NEEDS_SOURCE_REVIEW / SEMANTICS
- **OWNER iemesls:** DA-sætningen er korrekt som dansk, men audit peger på en mulig DE/source-fejl (`Es`). DE er STRICT READ-ONLY, så DA må ikke ændres uden source-afklaring.
- **Problem:** Det tyske subjekt „Es“ stemmer ikke med pigen/hun; den danske tekst er korrekt.
- **Reason:** Det tyske subjekt „Es“ stemmer ikke med pigen/hun; den danske tekst er korrekt.

**DE (read-only):**

```
Es geht hinaus und arbeitet.
```

**CURRENT_DA (production snapshot auditā):**

```
Hun går ud og arbejder.
```

**PROPOSED_DA (Luna ieteikums — NAV apstiprināts):**

```
Hun går ud og arbejder.
```

**OWNER lēmums (aizpildīt):**

- Statuss: NEEDS_SOURCE_REVIEW
- OWNER_DECISION:

---

## Copy/paste — agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
2	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
3	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
4	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
5	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
6	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
7	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
8	NEEDS_SOURCE_REVIEW	Izrunas paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu LV transkripciju mehāniska nomaiņa nav droša.
9	NEEDS_SOURCE_REVIEW	Līdzskaņu paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu transkripciju mehāniska nomaiņa nav droša.
10	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski. Nepieciešams pilns avota fragments un dāņu lokalizācija.
11	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski, un aprakstītas vairākas semantiskas kļūdas vienā HTML laukā. Nepieciešams pilns avota fragments.
13	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments.
14	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments.
15	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski. Pilnais grammar/legacyHtml saturs jāpārskata pret avotu.
16	NEEDS_SOURCE_REVIEW	Pašreizējais dāņu subtitle ir valodiski korekts, bet audits norāda uz iespējamu neatbilstību LV MASTER tēmai. Pirms maiņas jāpārbauda faktiskā Lesson 6 struktūra.
17	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks ir plaši piesārņots. Nepieciešams pilns avota fragments.
46	NEEDS_SOURCE_REVIEW	Hele artikelpanelet indeholder flere uafhængige fejl. Der kræves et komplet, autoritativt dansk HTML-felt før COPY-ONLY apply.
61	NEEDS_SOURCE_REVIEW	Verb-panelet skal sammenlignes komplet med LV MASTER for struktur og indhold. Auditteksten indeholder ikke et fuldt autoritativt replacement.
62	NEEDS_SOURCE_REVIEW	Panelet har flere fejljusterede eksempler. De viste delrettelser er korrekte, men hele HTML-feltet skal gennemgås samlet før COPY-ONLY apply.
63	NEEDS_SOURCE_REVIEW	DA-sætningen er korrekt som dansk, men audit peger på en mulig DE/source-fejl (`Es`). DE er STRICT READ-ONLY, så DA må ikke ændres uden source-afklaring.
```
