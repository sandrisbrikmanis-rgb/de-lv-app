# DA–DE Kurss — OWNER review — Statiskie HTML paneļi (6)

Avots: `reports/da-kurss-full-audit.md` · `reports/temp/da-kurss-full-audit.json`
Findings: **1–9** (9 ieraksti)
Auditors: **GPT-5.6 Luna** (READ-ONLY)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-kurss-full-luna-owner-decisions-02-static-html.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

## Finding 1

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-001
**Source audit ID:** `DA-KURSS-0008`
**Lesson/ID:** `kurssArticlesLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Artikler</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Det grammatiske køn på tysk svarer ikke altid til det grammatiske køn på dansk. Derfor er det bedst at lære substantiver sammen med deres artikel.</div> </div> <section class="artikuli-block"> <h4 class="artikuli-header"><span>•</span>Eksempler på artikler</h4> <div class="artikuli-grid"> <div class="kurss-example">Der Tisch - bord</div> <div class="kurss-example">Die Tür - døren</div…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: ZERO_WIDTH
**Audita pamatojums:** Detected: ZERO_WIDTH
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-002
**Source audit ID:** `DA-KURSS-0009`
**Lesson/ID:** `kurssPronunciationLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">Tarm (få) - godt</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><di…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, ZERO_WIDTH
**Audita pamatojums:** Detected: LV_DIAC, ZERO_WIDTH
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-003
**Source audit ID:** `DA-KURSS-0010`
**Lesson/ID:** `kurssConsonantsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for begynderen.</p> <section class="kurss-lesson-section"> <h4>Konsonanter</h4> <div class="kurss-examples"><div class="kurss-example">Das Rad (rāt) - hjul</div><div class="kurss-example">Die Räder (rēder) - hjul</div><div class="kurss-example">Dårlig (bāt) - dårlig</div><div class="kur…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, ZERO_WIDTH
**Audita pamatojums:** Detected: LV_DIAC, ZERO_WIDTH
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-004
**Source audit ID:** `DA-KURSS-L0044`
**Lesson/ID:** `kurssArticlesLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Artikler</h3> …
**PROPOSED_DA:** For nogle ord kan artiklen ikke bestemmes pålideligt ud fra endelsen eller den tyske oprindelse.
**Problēma:** Teksten indeholder en lettisk reference, selv om den er målrettet tyskundervisning.
**Audita pamatojums:** Teksten indeholder en lettisk reference, selv om den er målrettet tyskundervisning.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-005
**Source audit ID:** `DA-KURSS-L0048`
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Pronominer</h3> …
**PROPOSED_DA:** Nominativ, Akkusativ og Dativ – pronominernes former.
**Problēma:** Introens danske tekst er efterfulgt af lettisk HTML-indhold i samme felt.
**Audita pamatojums:** Introens danske tekst er efterfulgt af lettisk HTML-indhold i samme felt.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-006
**Source audit ID:** `DA-KURSS-L0052`
**Lesson/ID:** `kurssPronunciationLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Vokaler - lange og korte</h3> …
**PROPOSED_DA:** <div class="kurss-example">gut (gūt) - god</div>
**Problēma:** Flere ord er fejloversat eller udskiftet, fx “Tarm (få) - godt” hvor kildens gut betyder “god”.
**Audita pamatojums:** Flere ord er fejloversat eller udskiftet, fx “Tarm (få) - godt” hvor kildens gut betyder “god”.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-007
**Source audit ID:** `DA-KURSS-L0055`
**Lesson/ID:** `kurssConsonantsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Konsonanter og bogstavkombinationer</h3> …
**PROPOSED_DA:** <div class="kurss-example">Bad (bāt) - bad</div><div class="kurss-example">Bäder (bēder) - bade</div>
**Problēma:** Eksemplet bruger “Dårlig” i stedet for det tyske Bad og har dermed en forkert betydning.
**Audita pamatojums:** Eksemplet bruger “Dårlig” i stedet for det tyske Bad og har dermed en forkert betydning.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-008
**Source audit ID:** `DA-KURSS-L0058`
**Lesson/ID:** `kurssVerbBasicsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssVerbBasicsLesson`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Grundlæggende verber</h3> …
**PROPOSED_DA:** <h4>Verber fra lektion 2</h4>
**Problēma:** Selve verbtabellerne er overvejende korrekte, men nogle overskrifter og infinitivforklaringer er inkonsekvente med resten af materialet.
**Audita pamatojums:** Selve verbtabellerne er overvejende korrekte, men nogle overskrifter og infinitivforklaringer er inkonsekvente med resten af materialet.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-009
**Source audit ID:** `DA-KURSS-L0059`
**Lesson/ID:** `kurssSentenceStructureLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Sætningsstruktur</h3> …
**PROPOSED_DA:** <div class="kurss-example">Ich spiele nicht. — Jeg spiller ikke.</div><div class="kurss-example">Paul fragt nicht. — Paul spørger ikke.</div><div class="kurss-example">Er kommt nicht. — Han kommer ikke.</div><div class="kurss-example">Sie singen nicht. — De synger ikke.</div>
**Problēma:** Negationsafsnittets danske oversættelser er forskudt i forhold til de tyske sætninger og giver forkerte betydninger.
**Audita pamatojums:** Negationsafsnittets danske oversættelser er forskudt i forhold til de tyske sætninger og giver forkerte betydninger.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---
