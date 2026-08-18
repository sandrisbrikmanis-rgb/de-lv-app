# DA–DE Kurss — OWNER review — Statiskie HTML paneļi (6)

Avots: `reports/da-kurss-full-audit.md` · `reports/temp/da-kurss-full-audit.json`
Findings: **1–18** (18 ieraksti)
Auditors: **GPT-5.6 Luna** (READ-ONLY)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-kurss-full-luna-owner-decisions-02-static-html.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

## Finding 1

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-001
**Source audit ID:** `DA-KURSS-0008`
**Lesson/ID:** `kurssPronunciationLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">gut — god</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><div class…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, ZERO_WIDTH
**Audita pamatojums:** Detected: LV_DIAC, ZERO_WIDTH
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-002
**Source audit ID:** `DA-KURSS-0009`
**Lesson/ID:** `kurssConsonantsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for begynderen.</p> <section class="kurss-lesson-section"> <h4>Konsonanter</h4> <div class="kurss-examples"><div class="kurss-example">Das Rad (rāt) - hjul</div><div class="kurss-example">Die Räder (rēder) - hjul</div><div class="kurss-example">Bad — bad</div><div class="kurss-example">…
**PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
**Problēma:** Foreign/script: LV_DIAC, ZERO_WIDTH
**Audita pamatojums:** Detected: LV_DIAC, ZERO_WIDTH
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · deterministic

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-003
**Source audit ID:** `DA-KURSS-L0037`
**Lesson/ID:** `kurssArticlesLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h3>Artikler</h3> ...
**PROPOSED_DA:** <h3>Artikler</h3> ...
**Problēma:** HTML-feltet indeholder mange engelske rester og fejlagtige oversættelser, bl.a. "often DER", "DØR ofte" og "egnet til BMW".
**Audita pamatojums:** HTML-feltet indeholder mange engelske rester og fejlagtige oversættelser, bl.a. "often DER", "DØR ofte" og "egnet til BMW".
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-004
**Source audit ID:** `DA-KURSS-L0038`
**Lesson/ID:** `kurssArticlesLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <p class="artikuli-explain">For nogle ord kan artiklen ikke bestemmes pålideligt af slutningen eller den lettiske oprindelse. ...</p>
**PROPOSED_DA:** <p class="artikuli-explain">For nogle ord kan artiklen ikke bestemmes pålideligt af slutningen eller det danske køn. De studeres bedst sammen med artiklen.</p>
**Problēma:** "lettiske oprindelse" er en rest fra kildesproget og passer ikke til dansk måltekst.
**Audita pamatojums:** "lettiske oprindelse" er en rest fra kildesproget og passer ikke til dansk måltekst.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-005
**Source audit ID:** `DA-KURSS-L0039`
**Lesson/ID:** `kurssArticlesLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">-er → often DER, for example: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
**PROPOSED_DA:** <div class="kurss-example">-er → ofte DER, for eksempel: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
**Problēma:** Eksemplet indeholder engelsk tekst i et dansk felt.
**Audita pamatojums:** Eksemplet indeholder engelsk tekst i et dansk felt.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-006
**Source audit ID:** `DA-KURSS-L0040`
**Lesson/ID:** `kurssArticlesLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h4 class="artikuli-header"><span>♀</span>DØR ofte</h4>
**PROPOSED_DA:** <h4 class="artikuli-header"><span>♀</span>Ofte DIE</h4>
**Problēma:** "DØR" er den danske betydning af die, ikke det tyske artikelnavn.
**Audita pamatojums:** "DØR" er den danske betydning af die, ikke det tyske artikelnavn.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-007
**Source audit ID:** `DA-KURSS-L0041`
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">Ihn - hans (v.)</div><div class="kurss-example">Sie - hans (s.)</div><div class="kurss-example">Mig - det</div><div class="kurss-example">Han - os</div>
**PROPOSED_DA:** <div class="kurss-example">Ihn - ham (m.)</div><div class="kurss-example">Sie - hende (f.)</div><div class="kurss-example">Es - det</div><div class="kurss-example">Uns - os</div>
**Problēma:** Akkusativ-tabellen har flere alvorlige betydningsfejl: køn, pronominer og tyske former er blandet sammen.
**Audita pamatojums:** Akkusativ-tabellen har flere alvorlige betydningsfejl: køn, pronominer og tyske former er blandet sammen.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-008
**Source audit ID:** `DA-KURSS-L0042`
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** ORTHOGRAPHY
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">Wir mögen <span class="case-red">Euk</span>. – Vi kan lide dig.</div><div class="kurss-example">Wir danken <span class="case-green">Euk</span>. – Vi takker.</div>
**PROPOSED_DA:** <div class="kurss-example">Wir mögen <span class="case-red">Euch</span>. – Vi kan lide jer.</div><div class="kurss-example">Wir danken <span class="case-green">Euch</span>. – Vi takker jer.</div>
**Problēma:** "Euk" er en stavefejl i den tyske form, og dansk "dig" er forkert ved flertalspronomenet euch.
**Audita pamatojums:** "Euk" er en stavefejl i den tyske form, og dansk "dig" er forkert ved flertalspronomenet euch.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-009
**Source audit ID:** `DA-KURSS-L0043`
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <li><span class="case-blue">Nominativ</span> - subject of the sentence (who does?)</li><li><span class="case-red">Akkusativ</span> - direct object (what?)</li><li><span class="case-green">Dativ</span> - indirect object (to whom?)</li>
**PROPOSED_DA:** <li><span class="case-blue">Nominativ</span> - sætningens subjekt (hvem gør noget?)</li><li><span class="case-red">Akkusativ</span> - direkte objekt (hvad?)</li><li><span class="case-green">Dativ</span> - indirekte objekt (til hvem?)</li>
**Problēma:** Oversigten står delvist på engelsk i et ellers dansk HTML-felt.
**Audita pamatojums:** Oversigten står delvist på engelsk i et ellers dansk HTML-felt.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-010
**Source audit ID:** `DA-KURSS-L0044`
**Lesson/ID:** `kurssPronounsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div>The Nominative is always the subject of the sentence, while the Akkusativ and Dativ are the objects. Look at the verb and ask: <span class="case-red">Hvad?</span> or <span class="case-green">Wen?</span></div>
**PROPOSED_DA:** <div>Nominativ er altid sætningens subjekt, mens Akkusativ og Dativ er objekterne. Se på verbet, og spørg: <span class="case-red">Hvad?</span> eller <span class="case-green">Hvem?</span></div>
**Problēma:** Infoboksen er på engelsk, og "Wen?" er tysk i en dansk forklaring; dansk bør være "Hvem?".
**Audita pamatojums:** Infoboksen er på engelsk, og "Wen?" er tysk i en dansk forklaring; dansk bør være "Hvem?".
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-011
**Source audit ID:** `DA-KURSS-L0045`
**Lesson/ID:** `kurssPronunciationLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">Hytte (hūt) - hat</div><div class="kurss-example">Schlaf — sov</div>
**PROPOSED_DA:** <div class="kurss-example">warm (varm) - varm</div><div class="kurss-example">Hut (hūt) - hat</div><div class="kurss-example">Schlaf (šlāf) - søvn</div>
**Problēma:** De tyske eksempelord er oversat eller erstattet med danske ord, og Schlaf mangler dansk betydelse og udtalehint.
**Audita pamatojums:** De tyske eksempelord er oversat eller erstattet med danske ord, og Schlaf mangler dansk betydelse og udtalehint.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-012
**Source audit ID:** `DA-KURSS-L0046`
**Lesson/ID:** `kurssPronunciationLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">Scharf (tørklæde) - ass</div><div class="kurss-example">Häuser (hoizer) - hjem</div><div class="kurss-example">Ihm (īm) - for skinke</div>
**PROPOSED_DA:** <div class="kurss-example">scharf (šarf) - skarp</div><div class="kurss-example">Häuser (hoizer) - huse</div><div class="kurss-example">ihm (īm) - ham</div>
**Problēma:** Flere eksempler har alvorligt forkerte danske betydninger, herunder "tørklæde", "hjem" og "for skinke".
**Audita pamatojums:** Flere eksempler har alvorligt forkerte danske betydninger, herunder "tørklæde", "hjem" og "for skinke".
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-013
**Source audit ID:** `DA-KURSS-L0047`
**Lesson/ID:** `kurssPronunciationLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** TRANSLATION
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <h4>Langt i = dvs</h4> ... <p>Langt i på tysk skrives ofte som dvs.</p>
**PROPOSED_DA:** <h4>Langt i = ie</h4> ... <p>Langt i på tysk skrives ofte som ie.</p>
**Problēma:** "dvs." er dansk forkortelse for "det vil sige"; her skulle den tyske stavemåde "ie" stå.
**Audita pamatojums:** "dvs." er dansk forkortelse for "det vil sige"; her skulle den tyske stavemåde "ie" stå.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-014
**Source audit ID:** `DA-KURSS-L0048`
**Lesson/ID:** `kurssConsonantsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">Zeichnen (caihnen) - uafgjort</div><div class="kurss-example">Zahl (kylling) - nummer</div>
**PROPOSED_DA:** <div class="kurss-example">Zeichnen (caihnen) - tegne</div><div class="kurss-example">Zahl (cāl) - tal</div>
**Problēma:** Betydningerne er forkerte: zeichnen betyder "tegne", og Zahl betyder "tal"; "kylling" er en fejl.
**Audita pamatojums:** Betydningerne er forkerte: zeichnen betyder "tegne", og Zahl betyder "tal"; "kylling" er en fejl.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-015
**Source audit ID:** `DA-KURSS-L0049`
**Lesson/ID:** `kurssConsonantsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**DE (read-only):** —
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <p>''et' i begyndelsen af ​​et ord lyder ofte som et 'z'.</p>
**PROPOSED_DA:** <p>"s" i begyndelsen af et ord lyder ofte som "z".</p>
**Problēma:** Forklaringen indeholder en ødelagt tekstrest ("''et'") og identificerer ikke bogstavet s korrekt.
**Audita pamatojums:** Forklaringen indeholder en ødelagt tekstrest ("''et'") og identificerer ikke bogstavet s korrekt.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-016
**Source audit ID:** `DA-KURSS-L0050`
**Lesson/ID:** `kurssConsonantsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">Vater (fäter) - langt</div><div class="kurss-example">Vier (fīr) - ild</div>
**PROPOSED_DA:** <div class="kurss-example">Vater (fāter) - far</div><div class="kurss-example">Vier (fīr) - fire</div>
**Problēma:** Vater betyder "far", og vier betyder "fire"; de nuværende danske betydninger er forkerte.
**Audita pamatojums:** Vater betyder "far", og vier betyder "fire"; de nuværende danske betydninger er forkerte.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-017
**Source audit ID:** `DA-KURSS-L0051`
**Lesson/ID:** `kurssConsonantsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">SS → s</li>
**PROPOSED_DA:** <div class="kurss-example">ß → s</li>
**Problēma:** Opsummeringen bruger SS, mens lektionen handler om det tyske bogstav ß.
**Audita pamatojums:** Opsummeringen bruger SS, mens lektionen handler om det tyske bogstav ß.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-KURSS-LUNA-02STATICHTML-018
**Source audit ID:** `DA-KURSS-L0053`
**Lesson/ID:** `kurssSentenceStructureLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**Field:** `legacyHtml`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** <div class="kurss-example">Sie singen nicht. — Spiller du?</div> ... <div class="kurss-example">Wen arbejder?</div> ... <div class="kurss-example">Vi zählt og tegner.</div>
**PROPOSED_DA:** <div class="kurss-example">Sie singen nicht. — De synger ikke.</div> ... <div class="kurss-example">Hvem arbejder?</div> ... <div class="kurss-example">Vi regner og tegner.</div>
**Problēma:** Dialogeksemplerne er fejljusteret, indeholder den tyske rest "Wen" og en ikke-dansk rest "zählt".
**Audita pamatojums:** Dialogeksemplerne er fejljusteret, indeholder den tyske rest "Wen" og en ikke-dansk rest "zählt".
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---
