# DA–DE Kurss — OWNER review — final closure Group 01

Avots: `reports/da-kurss-final-closure-audit.md`
Findings: **001–050** (50 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir Luna ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 1

**Audit ID:** `DA-KURSS-FCA-0001`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <div class="lesson1-info lesson1-vardini-info"><span class="lesson1-info-icon" aria-hidden="true">i</span><span>Den omtrentlige udtale af ord er angivet i parentes med lettiske bogstaver.<br>Dette bør også følges i fremtidige forelæsninger.</span></div>
**PROPOSED_DA:** <div class="lesson1-info lesson1-vardini-info"><span class="lesson1-info-icon" aria-hidden="true">i</span><span>Den omtrentlige udtale af ordene er angivet i parentes med lettiske bogstaver.<br>Dette bør også følges i fremtidige lektioner.</span></div>
**Problēma:** Feltet indeholder lettisk tekst i den danske lektion og bruger desuden det mindre passende forelæsninger om kursuslektioner.
**Audita pamatojums:** Feltet indeholder lettisk tekst i den danske lektion og bruger desuden det mindre passende forelæsninger om kursuslektioner.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** `DA-KURSS-FCA-0001`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Objekter i klassen, egenskaber og oversættelse
**PROPOSED_DA:** Genstande i klasseværelset, egenskaber og oversættelse
**Problēma:** “Genstande i klasseværelset” er mere naturligt og præcist end “objekter i klassen”.
**Audita pamatojums:** “Genstande i klasseværelset” er mere naturligt og præcist end “objekter i klassen”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** `DA-KURSS-FCA-0002`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <div class="kurss-example">Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.</div><div class="kurss-example">Wir (vīr) — vi. Ordet wir udtales altid langt.</div>
**PROPOSED_DA:** <div class="kurss-example">Ordenes korrekte udtale, angivet med lettiske bogstaver, er opført i lektionerne.</div><div class="kurss-example">Wir (vīr) — vi. I ordet wir udtales i'et altid langt.</div>
**Problēma:** Den første eksempeltekst er på lettisk og skal oversættes til dansk.
**Audita pamatojums:** Den første eksempeltekst er på lettisk og skal oversættes til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** `DA-KURSS-FCA-0002`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Wen?, akkusativ, sitzen, fragen og -in endelse.
**PROPOSED_DA:** Wen?, akkusativ, sitzen, fragen og endelsen -in.
**Problēma:** Den bestemte form “endelsen” og placeringen af suffikset giver en mere naturlig dansk formulering.
**Audita pamatojums:** Den bestemte form “endelsen” og placeringen af suffikset giver en mere naturlig dansk formulering.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** `DA-KURSS-FCA-0003`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <strong>remove <span class="lesson1-ending-accent">-da</span></strong>
**PROPOSED_DA:** <strong>fjern <span class="lesson1-ending-accent">-en</span></strong>
**Problēma:** Teksten indeholder den engelske rest remove og den forkerte endelse -da; tysk infinitiv ender her på -en.
**Audita pamatojums:** Teksten indeholder den engelske rest remove og den forkerte endelse -da; tysk infinitiv ender her på -en.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** `DA-KURSS-FCA-0003`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[17].lv`
**Field type:** `cardLv`
**DE (read-only):** Grüße den Lehrer und die Lehrerin!
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Hils læreren og lærerinden!
**PROPOSED_DA:** Hils på læreren og lærerinden!
**Problēma:** Danish normally uses hilse på when greeting a person; the current wording is understandable but less idiomatic.
**Audita pamatojums:** Danish normally uses hilse på when greeting a person; the current wording is understandable but less idiomatic.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** `DA-KURSS-FCA-0004`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** <strong>Ende</strong><span>E/st/t</span>
**PROPOSED_DA:** <strong>Endelse</strong><span>e/st/t</span>
**Problēma:** Ende er tysk, ikke dansk, og den danske grammatiske term er endelse.
**Audita pamatojums:** Ende er tysk, ikke dansk, og den danske grammatiske term er endelse.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** `DA-KURSS-FCA-0004`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[7].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Dansk dobbelt negation udtrykkes ikke på tysk med nægtelsesordet kein. Nægtelsesordet kein står kun foran substantivet.
**PROPOSED_DA:** Dobbelt negation på dansk udtrykkes ikke på tysk med nægtelsesordet kein. Nægtelsesordet kein står kun foran substantivet.
**Problēma:** Formuleringen "Dansk dobbelt negation" er unaturlig; "dobbelt negation på dansk" er den naturlige danske ordstilling.
**Audita pamatojums:** Formuleringen "Dansk dobbelt negation" er unaturlig; "dobbelt negation på dansk" er den naturlige danske ordstilling.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** `DA-KURSS-FCA-0005`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** <span>ihr</span><strong>steht</strong><span>Du står</span>
**PROPOSED_DA:** <span>ihr</span><strong>steht</strong><span>I står</span>
**Problēma:** ihr betyder I, ikke Du; samme fejl forekommer også i singen-eksemplet.
**Audita pamatojums:** ihr betyder I, ikke Du; samme fejl forekommer også i singen-eksemplet.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** `DA-KURSS-FCA-0005`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[2].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Wie bruges, når man udtrykker lighed. als bruges, når man udtrykker ulighed.
**PROPOSED_DA:** Wie bruges, når man udtrykker lighed. Als bruges, når man udtrykker ulighed.
**Problēma:** Als skal skrives med stort begyndelsesbogstav efter punktum.
**Audita pamatojums:** Als skal skrives med stort begyndelsesbogstav efter punktum.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** `DA-KURSS-FCA-0006`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** <span>ihr</span><strong>singt</strong><span>Du synger</span>
**PROPOSED_DA:** <span>ihr</span><strong>singt</strong><span>I synger</span>
**Problēma:** ihr-formen er oversat med du-formen; den korrekte danske oversættelse er I synger.
**Audita pamatojums:** ihr-formen er oversat med du-formen; den korrekte danske oversættelse er I synger.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** `DA-KURSS-FCA-0006`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Hvis præfiksdelen er betonet, adskilles den i præsens og placeres sidst i sætningen.
**PROPOSED_DA:** Hvis præfikset er betonet, adskilles det i præsens og placeres sidst i sætningen.
**Problēma:** Præfikset er den naturlige danske grammatiske betegnelse; præfiksdelen virker unødigt tungt.
**Audita pamatojums:** Præfikset er den naturlige danske grammatiske betegnelse; præfiksdelen virker unødigt tungt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** `DA-KURSS-FCA-0007`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** wer (vēr) — hvad?
**PROPOSED_DA:** wer (vēr) — hvem?
**Problēma:** Det tyske spørgeord wer betyder hvem, ikke hvad.
**Audita pamatojums:** Det tyske spørgeord wer betyder hvem, ikke hvad.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** `DA-KURSS-FCA-0007`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv`
**Field type:** `cardLv`
**DE (read-only):** Womit arbeiten wir?
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Med hvad arbejder vi?
**PROPOSED_DA:** Hvad arbejder vi med?
**Problēma:** “Hvad arbejder vi med?” is the natural contemporary Danish word order; the current phrasing is unusually formal and stiff.
**Audita pamatojums:** “Hvad arbejder vi med?” is the natural contemporary Danish word order; the current phrasing is unusually formal and stiff.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** `DA-KURSS-FCA-0008`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Dialoger, ord, udtale, grammatik og oversæt
**PROPOSED_DA:** Dialoger, ord, udtale, grammatik og oversættelse
**Problēma:** Oversæt er et verbum, mens resten af opremsningen er substantiver; oversættelse giver korrekt parallel struktur.
**Audita pamatojums:** Oversæt er et verbum, mens resten af opremsningen er substantiver; oversættelse giver korrekt parallel struktur.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** `DA-KURSS-FCA-0008`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Disse verber angiver ofte retning og besvarer derfor spørgsmålet wohin?.
**PROPOSED_DA:** Disse verber angiver ofte retning og besvarer derfor spørgsmålet wohin?
**Problēma:** Et spørgsmålstegn afslutter allerede sætningen; det efterfølgende punktum er overflødigt.
**Audita pamatojums:** Et spørgsmålstegn afslutter allerede sætningen; det efterfølgende punktum er overflødigt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** `DA-KURSS-FCA-0009`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** <div class="lesson1-card-grid"> <div class="kurss-example">spielen — at spille</div> <div class="kurss-example">nein — nej</div> <div class="kurss-example">nicht — ikke</div> <div class="kurss-example">arbeiten — at arbejde</div> <div class="kurss-example">fragen — at spørge</div> <div class="kurss-example">was tut er? — hvad laver han?</div> <div class="kurss-example">fragen — hvad gør de/de?</div> <div class="kurss-example">Aber - men</div> <div class="kurss-example">was tut er? — svar</div> <…
**PROPOSED_DA:** <div class="lesson1-card-grid"> <div class="kurss-example">spielen — at spille</div> <div class="kurss-example">nein — nej</div> <div class="kurss-example">nicht — ikke</div> <div class="kurss-example">arbeiten — at arbejde</div> <div class="kurss-example">fragen — at spørge</div> <div class="kurss-example">was tut er? — hvad laver han?</div> <div class="kurss-example">was tun sie? — hvad laver de?</div> <div class="kurss-example">aber — men</div> <div class="kurss-example">antworten — at svare<…
**Problēma:** Ordlisten er alvorligt korrumperet: flere danske betydninger er forskudt, og svar, beregne, uafgjort og Marie står på forkerte poster.
**Audita pamatojums:** Ordlisten er alvorligt korrumperet: flere danske betydninger er forskudt, og svar, beregne, uafgjort og Marie står på forkerte poster.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** `DA-KURSS-FCA-0009`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Disse verber angiver ofte placering eller tilstand og besvarer derfor spørgsmålet wo?.
**PROPOSED_DA:** Disse verber angiver ofte placering eller tilstand og besvarer derfor spørgsmålet wo?
**Problēma:** Et spørgsmålstegn afslutter allerede sætningen; det efterfølgende punktum er overflødigt.
**Audita pamatojums:** Et spørgsmålstegn afslutter allerede sætningen; det efterfølgende punktum er overflødigt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** `DA-KURSS-FCA-0010`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <div class="kurss-example">Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.</div>
**PROPOSED_DA:** <div class="kurss-example">I ordene arbeiten og zeichnen udtales diftongen ei omtrent som en dansk åben e-lyd efterfulgt af i.</div>
**Problēma:** Eksempelteksten er på lettisk og er derfor ikke dansk kursusindhold.
**Audita pamatojums:** Eksempelteksten er på lettisk og er derfor ikke dansk kursusindhold.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** `DA-KURSS-FCA-0010`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[2].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** CONSISTENCY
**CURRENT_DA:** Hvis verbets stamme ender på t, d, m, n, så indsættes der i 2. og 3. person ental og i 2. person flertal ofte en -e- mellem stammen og slutningen for bedre udtale.
**PROPOSED_DA:** Hvis verbets stamme ender på t, d, m eller n, indsættes der i 2. og 3. person ental samt i 2. person flertal ofte et -e- mellem stammen og endelsen for at lette udtalen.
**Problēma:** “Slutningen” er mindre præcist og inkonsekvent med den grammatiske term “endelse”; “et -e-” og formuleringen er mere idiomatisk.
**Audita pamatojums:** “Slutningen” er mindre præcist og inkonsekvent med den grammatiske term “endelse”; “et -e-” og formuleringen er mere idiomatisk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** `DA-KURSS-FCA-0011`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** GRAMMAR
**CURRENT_DA:** <div class="kurss-example">Du arbeite</div><div class="kurss-example">Er arbeit</div><div class="kurss-example">Sie arbeit</div><div class="kurss-example">Ihr arbeit</div>
**PROPOSED_DA:** <div class="kurss-example">Du arbeitest</div><div class="kurss-example">Er arbeitet</div><div class="kurss-example">Sie arbeitet</div><div class="kurss-example">Ihr arbeitet</div>
**Problēma:** De tyske verbformer mangler den nødvendige endelse -est/-et i arbeiten-tabellen.
**Audita pamatojums:** De tyske verbformer mangler den nødvendige endelse -est/-et i arbeiten-tabellen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** `DA-KURSS-FCA-0011`
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Der Montag — mandag
**PROPOSED_DA:** der Montag — mandag
**Problēma:** In the embedded German example, the definite article is lowercase: der Montag.
**Audita pamatojums:** In the embedded German example, the definite article is lowercase: der Montag.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** `DA-KURSS-FCA-0012`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <span class="lesson1-training-text">Wen spørger?</span>
**PROPOSED_DA:** <span class="lesson1-training-text">Hvem spørger?</span>
**Problēma:** Wen er tysk og står som fremmed rest i den danske træningsprompt.
**Audita pamatojums:** Wen er tysk og står som fremmed rest i den danske træningsprompt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** `DA-KURSS-FCA-0012`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.4.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.
**PROPOSED_DA:** akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.
**Problēma:** På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør derfor ikke have tysk substantivisk versal.
**Audita pamatojums:** På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør derfor ikke have tysk substantivisk versal.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** `DA-KURSS-FCA-0013`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Artikler, stedsangivelser og oversættelse
**PROPOSED_DA:** Dialoger, ord, udtale, grammatik og oversættelse
**Problēma:** Undertitlen beskriver ikke lektionens faktiske indhold, som også omfatter dialoger, ord, udtale og grammatik.
**Audita pamatojums:** Undertitlen beskriver ikke lektionens faktiske indhold, som også omfatter dialoger, ord, udtale og grammatik.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** `DA-KURSS-FCA-0013`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.5.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Wen?, Akkusativ, sitzen, fragen og endelsen -in.
**PROPOSED_DA:** Wen?, akkusativ, sitzen, fragen og endelsen -in.
**Problēma:** På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør ikke følge tysk substantivkapitalisering.
**Audita pamatojums:** På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør ikke følge tysk substantivkapitalisering.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** `DA-KURSS-FCA-0014`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** <div class="kurss-example">wer — her</div><div class="kurss-example">was — der</div>
**PROPOSED_DA:** <div class="kurss-example">wer — hvem</div><div class="kurss-example">was — hvad</div>
**Problēma:** De tyske spørgeord wer og was er oversat forkert som her og der.
**Audita pamatojums:** De tyske spørgeord wer og was er oversat forkert som her og der.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** `DA-KURSS-FCA-0014`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.7.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Imperativ, tiltaleform og flertal.
**PROPOSED_DA:** imperativ, tiltaleform og flertal.
**Problēma:** På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »imperativ« bør ikke have versal.
**Audita pamatojums:** På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »imperativ« bør ikke have versal.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** `DA-KURSS-FCA-0015`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** <div class="kurss-example">die Bank — ligge ned</div><div class="kurss-example">eine Bank — er der/er en bog her?</div><div class="kurss-example">liegen — en bog</div>
**PROPOSED_DA:** <div class="kurss-example">die Bank — bænken</div><div class="kurss-example">eine Bank — en bænk</div><div class="kurss-example">liegen — ligge</div>
**Problēma:** Flere betydninger er forskudt mellem posterne; Bank, eine Bank og liegen har ikke de viste danske oversættelser.
**Audita pamatojums:** Flere betydninger er forskudt mellem posterne; Bank, eine Bank og liegen har ikke de viste danske oversættelser.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** `DA-KURSS-FCA-0015`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.8.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Refleksive verber, e → i/ie-skift og Akkusativ.
**PROPOSED_DA:** Refleksive verber, e → i/ie-skift og akkusativ.
**Problēma:** På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør ikke have tysk substantivisk versal.
**Audita pamatojums:** På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør ikke have tysk substantivisk versal.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** `DA-KURSS-FCA-0016`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <div class="kurss-example">Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).</div><div class="kurss-example">ck ir divkāršs k: dick (dikk).</div>
**PROPOSED_DA:** <div class="kurss-example">Den lange i-lyd på tysk skrives med ie: liegen (līgen), hier (hīr), wie (vī).</div><div class="kurss-example">ck er et dobbelt k: dick (dikk).</div>
**Problēma:** Den første udtaletekst er på lettisk og skal oversættes til dansk.
**Audita pamatojums:** Den første udtaletekst er på lettisk og skal oversættes til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** `DA-KURSS-FCA-0017`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <div class="kurss-example">Ja galotne -Er hvad? spørger om emner.</div>
**PROPOSED_DA:** <div class="kurss-example">Med was? spørger man om ting.</div>
**Problēma:** Sætningen er en blanding af dansk og lettisk og indeholder en meningsforstyrrende resttekst.
**Audita pamatojums:** Sætningen er en blanding af dansk og lettisk og indeholder en meningsforstyrrende resttekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** `DA-KURSS-FCA-0018`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** <div class="kurss-example">Was liegt hier? — dø</div>
**PROPOSED_DA:** <div class="kurss-example">Was liegt hier? — die</div>
**Problēma:** Den tyske artikel die er fejlagtigt oversat til det danske ord dø.
**Audita pamatojums:** Den tyske artikel die er fejlagtigt oversat til det danske ord dø.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** `DA-KURSS-FCA-0019`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** <span>5</span>Stehen / liegen / hængen
**PROPOSED_DA:** <span>5</span>Stå / ligge / hænge
**Problēma:** Overskriften blander tyske infinitiver med dansk; alle tre led bør være danske eller tyske konsekvent.
**Audita pamatojums:** Overskriften blander tyske infinitiver med dansk; alle tre led bør være danske eller tyske konsekvent.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** `DA-KURSS-FCA-0020`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** <span class="lesson1-training-text">Tæller du?</span>
**PROPOSED_DA:** <span class="lesson1-training-text">Regner du?</span>
**Problēma:** I denne lektion betyder rechnen at regne, ikke at tælle; prompten bør derfor være Regner du?
**Audita pamatojums:** I denne lektion betyder rechnen at regne, ikke at tælle; prompten bør derfor være Regner du?
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** `DA-KURSS-FCA-0021`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > h3`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** <h3>Foredrag 4</h3>
**PROPOSED_DA:** <h3>Lektion 4</h3>
**Problēma:** “Foredrag” betyder lecture/tale og er ikke den rette betegnelse for en kursuslektion.
**Audita pamatojums:** “Foredrag” betyder lecture/tale og er ikke den rette betegnelse for en kursuslektion.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** `DA-KURSS-FCA-0022`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > vocabulary`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** er nimmt (nimt) — fjerklædt; der Federhalter (dēr fēderhalter) — show; einen Federhalter — sort; weiß (veis) — fjer; eine Feder — lægge ned; spitz (špic) — læg ned; legt hin — kniv; das Mädchen (mētchen) — kniv; das Messer — skarp; ein Messer — stub; scharf — så; stumpf (štumpf) — ud; dann — gå ud, gå ud
**PROPOSED_DA:** er nimmt (nimt) — han tager; der Federhalter (dēr fēderhalter) — penneholder; einen Federhalter — en penneholder; weiß (veis) — hvid; eine Feder — en fjer; spitz (špic) — spids; legt hin — lægger ned; das Mädchen (mētchen) — pige; das Messer — kniv; ein Messer — en kniv; scharf — skarp; stumpf (štumpf) — stump; dann — så; hinaus — ud; hinausgehen — gå ud
**Problēma:** Flere danske gloser er forskudte eller forkerte, så ordforrådssektionen giver misvisende oversættelser.
**Audita pamatojums:** Flere danske gloser er forskudte eller forkerte, så ordforrådssektionen giver misvisende oversættelser.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** `DA-KURSS-FCA-0023`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > pronunciation`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.
**PROPOSED_DA:** h på tysk kan både være en lyd og en længdemarkør for den foregående vokal.
**Problēma:** Dette er lettisk tekst, ikke dansk.
**Audita pamatojums:** Dette er lettisk tekst, ikke dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** `DA-KURSS-FCA-0024`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > grammar > pronunciation`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
**PROPOSED_DA:** Hvis h er en længdemarkør, udtales det ikke som en lyd: nehmen (nēmen).
**Problēma:** Lettisk tekst er indsat i den danske grammatiksektion.
**Audita pamatojums:** Lettisk tekst er indsat i den danske grammatiksektion.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** `DA-KURSS-FCA-0025`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > grammar > pronunciation`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
**PROPOSED_DA:** Hvis der kun følger én konsonant efter vokalen, udtales vokalen langt: die (dī), Feder (fēder), den (dēn).
**Problēma:** Lettisk tekst er indsat i den danske grammatiksektion.
**Audita pamatojums:** Lettisk tekst er indsat i den danske grammatiksektion.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** `DA-KURSS-FCA-0026`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > grammar > adjective examples`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**CURRENT_DA:** sie — Die Messer synd klein
**PROPOSED_DA:** sie — Die Messer sind klein
**Problēma:** “synd” er en dansk stavefejl; den tyske verbumsform er “sind”.
**Audita pamatojums:** “synd” er en dansk stavefejl; den tyske verbumsform er “sind”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** `DA-KURSS-FCA-0027`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > pronunciation`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).
**PROPOSED_DA:** tz er en fordoblet z-lyd og udtales som z: sitzen (zicen).
**Problēma:** Dette er lettisk tekst, ikke dansk.
**Audita pamatojums:** Dette er lettisk tekst, ikke dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** `DA-KURSS-FCA-0028`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > pronunciation`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** v vācu vārdos izrunā kā f: der Vater (fāter).
**PROPOSED_DA:** v udtales som f i tyske ord: der Vater (fāter).
**Problēma:** Dette er lettisk tekst, ikke dansk.
**Audita pamatojums:** Dette er lettisk tekst, ikke dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** `DA-KURSS-FCA-0029`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > grammar`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
**PROPOSED_DA:** På tysk er spørgsmålet wer? for personer og was? for genstande i nominativ.
**Problēma:** Lettisk tekst er indsat i den danske grammatiksektion.
**Audita pamatojums:** Lettisk tekst er indsat i den danske grammatiksektion.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** `DA-KURSS-FCA-0030`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > grammar > -in`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Daudz sieviešu kārtas vārdu atvasina ar galotni -Dø Lehrerin
**PROPOSED_DA:** Mange feminine substantiver dannes med endelsen -in: die Lehrerin.
**Problēma:** Sætningen indeholder lettisk tekst og den ødelagte rest “-Dø”.
**Audita pamatojums:** Sætningen indeholder lettisk tekst og den ødelagte rest “-Dø”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** `DA-KURSS-FCA-0031`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > training aria-label`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** aria-label="Lesson 5 translation card"
**PROPOSED_DA:** aria-label="Oversættelseskort til lektion 5"
**Problēma:** ARIA-labelen er på engelsk i ellers dansk brugergrænsefladetekst.
**Audita pamatojums:** ARIA-labelen er på engelsk i ellers dansk brugergrænsefladetekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** `DA-KURSS-FCA-0032`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > vocabulary`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** legt hin — læg ned; aufmachen — løsne; er macht auf — han løsner; der Hammer — forhammer; die Hämmer — forhammer; wie sind die Dinge? — hvad er tingene?; dort — der
**PROPOSED_DA:** legt hin — lægger ned; aufmachen — åbne; er macht auf — han åbner; der Hammer — hammer; die Hämmer — hamre; wie sind die Dinge? — hvordan er tingene?; dort — dér
**Problēma:** Flere gloser er grammatisk eller semantisk forkerte og giver ikke den tyske betydning.
**Audita pamatojums:** Flere gloser er grammatisk eller semantisk forkerte og giver ikke den tyske betydning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** `DA-KURSS-FCA-0033`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > pronunciation`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ä ir patskaņa a pārskanojums, un to izrunā kā īso vai garo šauro e.
**PROPOSED_DA:** ä er en omlyd af vokalen a og udtales som et kort eller langt, lukket e.
**Problēma:** Dette er lettisk tekst, ikke dansk.
**Audita pamatojums:** Dette er lettisk tekst, ikke dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** `DA-KURSS-FCA-0034`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > pronunciation`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar apaļi veidotām lūpām izrunāt i.
**PROPOSED_DA:** ü er en omlyd af vokalen u. Når den udtales, skal læberne rundes kraftigt, mens man forsøger at udtale i med rundede læber.
**Problēma:** Dette er lettisk tekst, ikke dansk.
**Audita pamatojums:** Dette er lettisk tekst, ikke dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** `DA-KURSS-FCA-0035`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > grammar`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Piemēri: fünf, der Schlüssel (šlūsel).
**PROPOSED_DA:** Eksempler: fünf, der Schlüssel (šlūsel).
**Problēma:** “Piemēri” er lettisk og er en fremmed rest i den danske tekst.
**Audita pamatojums:** “Piemēri” er lettisk og er en fremmed rest i den danske tekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---
