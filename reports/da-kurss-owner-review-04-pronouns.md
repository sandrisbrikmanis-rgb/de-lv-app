# DA–DE Kurss — OWNER review — Pronominer (statiskais panels)

Avots: LV etalons (`data/courseLessons.js`, `languages/lv/ui.js`) salīdzināts ar DA (`data/da/courseLessons.js`, `languages/da/ui.js`)
Findings: **1–8** (8 ieraksti)

> **PROPOSED_DA** ir ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-kurss-owner-decisions-04-pronouns.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **LV reference** = LV etalona paralelais lauks (nevis dāņu).

## Finding 1

**Audit ID:** DA-KURSS-04PRONOUNS-0001
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**DE (read-only):** —
**Severity:** INFO
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**LV reference:** <h3>Vietniekvārdi</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ un Dativ — vietniekvārdu formas.</div> </div> <section class="artikuli-block"> <h4 class="artikuli-header"><span>N</span>Nominativ — kas?</h4> <div class="artikuli-grid"><div class="kurss-example">ich — es</div><div class="kurss-example">du — tu</div><div class…
**CURRENT_DA:** <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div> </div> <section class="artikuli-block"> <h4 class="artikuli-header"><span>N</span>Nominativ - hvad?</h4> <div class="artikuli-grid"><div class="kurss-example">Ich - jeg</div><div class="kurss-example">Du - dig</div><div clas…
**PROPOSED_DA:** (Ja dabīgs dāņu tulkojums — NELABOT)
**Problēma:** Salīdzināt ar LV etalonu; ja dabīgs dāņu — NELABOT
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (html)

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-04PRONOUNS-0002
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > er`
**DE (read-only):** —
**Severity:** MEDIUM
**Field:** `kurss-example`
**Production file:** `data/da/courseLessons.js`
**LV reference:** er — viņš
**CURRENT_DA:** Øh — han
**PROPOSED_DA:** er — han
**Problēma:** Vācu er aizstāts ar “Øh”
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (html-extra)

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-04PRONOUNS-0003
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > du`
**DE (read-only):** —
**Severity:** MEDIUM
**Field:** `kurss-example`
**Production file:** `data/da/courseLessons.js`
**LV reference:** du — tu
**CURRENT_DA:** Du — dig
**PROPOSED_DA:** du — du
**Problēma:** Nominativ du, bet tulkojums “dig” (Akkusativ)
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (html-extra)

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-04PRONOUNS-0004
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > sie`
**DE (read-only):** —
**Severity:** MEDIUM
**Field:** `kurss-example`
**Production file:** `data/da/courseLessons.js`
**LV reference:** sie — viņa
**CURRENT_DA:** Sie — hun
**PROPOSED_DA:** sie — hun
**Problēma:** Lielais S = Sie (høflighed), nevis sie (viņa)
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (html-extra)

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-04PRONOUNS-0005
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > es`
**DE (read-only):** —
**Severity:** HIGH
**Field:** `kurss-example`
**Production file:** `data/da/courseLessons.js`
**LV reference:** es — tas
**CURRENT_DA:** Jeg — det
**PROPOSED_DA:** es — det
**Problēma:** “Jeg” nav vācu es
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (html-extra)

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-04PRONOUNS-0006
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > ihr`
**DE (read-only):** —
**Severity:** MEDIUM
**Field:** `kurss-example`
**Production file:** `data/da/courseLessons.js`
**LV reference:** ihr — jūs
**CURRENT_DA:** Ihr — dig
**PROPOSED_DA:** ihr — I
**Problēma:** Nominativ ihr, bet tulkojums “dig” (Akkusativ)
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (html-extra)

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-04PRONOUNS-0007
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > sie-plural`
**DE (read-only):** —
**Severity:** HIGH
**Field:** `kurss-example`
**Production file:** `data/da/courseLessons.js`
**LV reference:** sie — viņi / viņas
**CURRENT_DA:** Slips — de/hende
**PROPOSED_DA:** sie — de/hende
**Problēma:** “Slips” nav vācu sie
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (html-extra)

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-04PRONOUNS-0008
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson > Nominativ > Sie-formal`
**DE (read-only):** —
**Severity:** HIGH
**Field:** `kurss-example`
**Production file:** `data/da/courseLessons.js`
**LV reference:** Sie — Jūs (pieklājības)
**CURRENT_DA:** Slips — dig (høflighed)
**PROPOSED_DA:** Sie — De (høflighed)
**Problēma:** “Slips” nav vācu Sie
**Audita pamatojums:** Salīdzinājums ar LV etalonu; DE nemainīt.
**Avots:** DA–DE Kurss owner pack (html-extra)

**OWNER_DECISION:**

---
