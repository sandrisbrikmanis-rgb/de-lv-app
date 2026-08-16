# DA–DE Kurss — OWNER review — final closure Group 03

Avots: [da-kurss-final-closure-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-final-closure-audit-fffe/reports/da-kurss-final-closure-audit.md) · [GitHub indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-final-closure-audit-fffe/reports/da-kurss-owner-review-final-closure-GITHUB.md)
Findings: **101–131** (31 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir Luna ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 101

**Audit ID:** `DA-KURSS-FCA-0086`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[12].lv`
**Field type:** `cardLv`
**DE (read-only):** Er schneidet das Papier mit der Schere entzwei.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Han klipper papiret med en saks.
**PROPOSED_DA:** Han klipper papiret over med en saks.
**Problēma:** Den danske sætning mangler betydningen 'entzwei'/'over' og siger kun, at han klipper papiret med en saks.
**Audita pamatojums:** Den danske sætning mangler betydningen 'entzwei'/'over' og siger kun, at han klipper papiret med en saks.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 102

**Audit ID:** `DA-KURSS-FCA-0087`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[8].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Gamle former som dem Tische, dem Kruge og im Walde bruges i dag ofte i en kortere form: dem Tisch, dem Krug og im Wald.
**PROPOSED_DA:** Gamle former som dem Tische, dem Kruge og im Walde erstattes i dag ofte af kortere former: dem Tisch, dem Krug og im Wald.
**Problēma:** Konstruktionen “bruges ... i en kortere form” er unaturlig og gør forholdet mellem de gamle og de korte former uklart.
**Audita pamatojums:** Konstruktionen “bruges ... i en kortere form” er unaturlig og gør forholdet mellem de gamle og de korte former uklart.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 103

**Audit ID:** `DA-KURSS-FCA-0088`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[11].lv`
**Field type:** `cardLv`
**DE (read-only):** Der Schüler legt die Hefte in die Mappe.
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** Eleven lægger notesbøgerne i posen.
**PROPOSED_DA:** Eleven lægger hæfterne i mappen.
**Problēma:** Både Hefte og Mappe er oversat forkert: notesbøgerne/posen betyder henholdsvis notesbøger/tasken i stedet for hæfterne/mappen.
**Audita pamatojums:** Både Hefte og Mappe er oversat forkert: notesbøgerne/posen betyder henholdsvis notesbøger/tasken i stedet for hæfterne/mappen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 104

**Audit ID:** `DA-KURSS-FCA-0089`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[12].lv`
**Field type:** `cardLv`
**DE (read-only):** Wo sind die Hefte?
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hvor er notesbøgerne?
**PROPOSED_DA:** Hvor er hæfterne?
**Problēma:** Det tyske Hefte svarer her til hæfterne, ikke notesbøgerne.
**Audita pamatojums:** Det tyske Hefte svarer her til hæfterne, ikke notesbøgerne.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 105

**Audit ID:** `DA-KURSS-FCA-0090`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv`
**Field type:** `cardLv`
**DE (read-only):** Die Hefte sind jetzt in der Mappe.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Notesbøgerne er nu i mappen.
**PROPOSED_DA:** Hæfterne er nu i mappen.
**Problēma:** Notesbøgerne oversætter Hefte upræcist; den tilsvarende danske betegnelse er hæfterne.
**Audita pamatojums:** Notesbøgerne oversætter Hefte upræcist; den tilsvarende danske betegnelse er hæfterne.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 106

**Audit ID:** `DA-KURSS-FCA-0091`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[17].lv`
**Field type:** `cardLv`
**DE (read-only):** Der Lehrer sitzt in der Klasse.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Læreren sidder i klasseværelset.
**PROPOSED_DA:** Læreren sidder i klassen.
**Problēma:** Klasseværelset betyder det fysiske lokale, mens den tyske tekst siger i klassen.
**Audita pamatojums:** Klasseværelset betyder det fysiske lokale, mens den tyske tekst siger i klassen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 107

**Audit ID:** `DA-KURSS-FCA-0092`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** I ordet der Strauch udtales st som sht.
**PROPOSED_DA:** I ordet der Strauch udtales st som št.
**Problēma:** Translitterationen af den tyske lyd [ʃt] bør være konsekvent med den foregående formulering og skrives »št«, ikke »sht«.
**Audita pamatojums:** Translitterationen af den tyske lyd [ʃt] bør være konsekvent med den foregående formulering og skrives »št«, ikke »sht«.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 108

**Audit ID:** `DA-KURSS-FCA-0093`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** I ordet wachsen udtales ch som k.
**PROPOSED_DA:** I ordet wachsen udtales ch som ks.
**Problēma:** I »wachsen« repræsenterer ch lyden [ks], ikke kun [k].
**Audita pamatojums:** I »wachsen« repræsenterer ch lyden [ks], ikke kun [k].
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 109

**Audit ID:** `DA-KURSS-FCA-0094`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[7].lv`
**Field type:** `cardLv`
**DE (read-only):** Er nennt und zeigt dem Lehrer die Städte, die Berge und die Flüsse.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Han navngiver og viser læreren byer, bjerge og floder.
**PROPOSED_DA:** Han nævner og viser læreren byerne, bjergene og floderne.
**Problēma:** “Navngiver” betyder at give noget et navn; her betyder tysk “nennt” at nævne/opremse. De tyske bestemte artikler mangler også.
**Audita pamatojums:** “Navngiver” betyder at give noget et navn; her betyder tysk “nennt” at nævne/opremse. De tyske bestemte artikler mangler også.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 110

**Audit ID:** `DA-KURSS-FCA-0095`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[8].lv`
**Field type:** `cardLv`
**DE (read-only):** So arbeitet der Lehrer in der Klasse.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Sådan arbejder en lærer i et klasseværelse.
**PROPOSED_DA:** Sådan arbejder læreren i klassen.
**Problēma:** Den danske tekst ændrer den bestemte form og oversætter »in der Klasse« mindre idiomatisk som »i et klasseværelse«.
**Audita pamatojums:** Den danske tekst ændrer den bestemte form og oversætter »in der Klasse« mindre idiomatisk som »i et klasseværelse«.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 111

**Audit ID:** `DA-KURSS-FCA-0096`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Tyvende foredrag: hus, etager, Dativ/Akkusativ og sammensatte navneord.
**PROPOSED_DA:** Tyvende lektion: hus, etager, Dativ/Akkusativ og sammensatte navneord.
**Problēma:** »Foredrag« betyder typisk en tale eller præsentation; i en kursuslektion er »lektion« den naturlige betegnelse.
**Audita pamatojums:** »Foredrag« betyder typisk en tale eller præsentation; i en kursuslektion er »lektion« den naturlige betegnelse.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 112

**Audit ID:** `DA-KURSS-FCA-0097`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[3].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Sammensatte navneord tager normalt artiklen i det sidste ord.
**PROPOSED_DA:** Sammensatte navneord får normalt artiklen fra det sidste ord.
**Problēma:** Formuleringen "tager ... artiklen i det sidste ord" er unaturlig på dansk; artiklen følger normalt det sidste led.
**Audita pamatojums:** Formuleringen "tager ... artiklen i det sidste ord" er unaturlig på dansk; artiklen følger normalt det sidste led.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 113

**Audit ID:** `DA-KURSS-FCA-0098`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[11].prompt`
**Field type:** `cardPrompt`
**DE (read-only):** Jener Mann steht unter der Brücke.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Jener Mann steht unter (die Brücke).
**PROPOSED_DA:** Den mand står under (broen).
**Problēma:** Feltet indeholder tysk i stedet for dansk.
**Audita pamatojums:** Feltet indeholder tysk i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 114

**Audit ID:** `DA-KURSS-FCA-0099`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[0].lv`
**Field type:** `cardLv`
**DE (read-only):** Was ist hoch?
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Kas ir augsts?
**PROPOSED_DA:** Hvad er højt?
**Problēma:** Feltet indeholder lettisk i stedet for dansk.
**Audita pamatojums:** Feltet indeholder lettisk i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 115

**Audit ID:** `DA-KURSS-FCA-0100`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[9].lv`
**Field type:** `cardLv`
**DE (read-only):** Wo ist der Boden?
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hvor er loftet?
**PROPOSED_DA:** 
**Problēma:** Danish “loftet” means attic, matching the Latvian reference; German “Boden” means floor.
**Audita pamatojums:** Danish “loftet” means attic, matching the Latvian reference; German “Boden” means floor.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 116

**Audit ID:** `DA-KURSS-FCA-0101`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Enogtyvende forelæsning: woher / wohin / wo, von / aus / mit + Dativ.
**PROPOSED_DA:** Enogtyvende lektion: woher / wohin / wo, von / aus / mit + Dativ.
**Problēma:** “Forelæsning” betyder foredrag/lecture, mens lektionens titel bruger “Lektion 21”; “lektion” er den semantisk og terminologisk konsistente formulering.
**Audita pamatojums:** “Forelæsning” betyder foredrag/lecture, mens lektionens titel bruger “Lektion 21”; “lektion” er den semantisk og terminologisk konsistente formulering.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 117

**Audit ID:** `DA-KURSS-FCA-0102`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].examples[2]`
**Field type:** `grammarExamples`
**DE (read-only):** aus
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** aus — no / iz
**PROPOSED_DA:** aus — fra
**Problēma:** “no / iz” are Latvian remnants; the Danish translation of “aus” is “fra”.
**Audita pamatojums:** “no / iz” are Latvian remnants; the Danish translation of “aus” is “fra”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 118

**Audit ID:** `DA-KURSS-FCA-0103`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[2].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Woher? — no kurienes?
**PROPOSED_DA:** Woher? — hvorfra?
**Problēma:** Den lettiske oversættelse "no kurienes?" er et fremmedsprogsremnant i den danske kursustekst.
**Audita pamatojums:** Den lettiske oversættelse "no kurienes?" er et fremmedsprogsremnant i den danske kursustekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 119

**Audit ID:** `DA-KURSS-FCA-0104`
**Lesson/ID:** `kurssVerbBasicsLesson`
**Path:** `COURSE_LESSON_HTML.kurssVerbBasicsLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** <h3>Verbers grundlag</h3> <p class="kurss-lesson-intro">1. lektions verber og bøjninger.</p>
**PROPOSED_DA:** <h3>Grundlæggende verber</h3> <p class="kurss-lesson-intro">Verber og bøjninger fra lektion 1.</p>
**Problēma:** “Verbers grundlag” is unnatural Danish, and “1. lektions verber” is an incorrect/awkward genitive construction.
**Audita pamatojums:** “Verbers grundlag” is unnatural Danish, and “1. lektions verber” is an incorrect/awkward genitive construction.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 120

**Audit ID:** `DA-KURSS-FCA-0105`
**Lesson/ID:** `lesson3`
**Path:** `lesson3TrainingCardsDa[14].front`
**Field type:** `trainingFront`
**DE (read-only):** Liegt dort ein Heft?
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** Ligger der en notesbog?
**PROPOSED_DA:** Ligger der et hæfte?
**Problēma:** “Heft” is more consistently translated as “hæfte”; “notesbog” means notebook and differs from the established Danish term “hæfte”.
**Audita pamatojums:** “Heft” is more consistently translated as “hæfte”; “notesbog” means notebook and differs from the established Danish term “hæfte”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 121

**Audit ID:** `DA-KURSS-FCA-0106`
**Lesson/ID:** `lesson3`
**Path:** `lesson3TrainingCardsDa[15].front`
**Field type:** `trainingFront`
**DE (read-only):** Ja, dort liegt ein Heft.
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** Ja, der er en notesbog.
**PROPOSED_DA:** Ja, der ligger et hæfte.
**Problēma:** The Danish should preserve the German verb “liegt” and use the established equivalent “hæfte” rather than “notesbog”.
**Audita pamatojums:** The Danish should preserve the German verb “liegt” and use the established equivalent “hæfte” rather than “notesbog”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 122

**Audit ID:** `DA-KURSS-FCA-0107`
**Lesson/ID:** `lesson4`
**Path:** `lesson4TrainingCardsDa[0].front`
**Field type:** `trainingFront`
**DE (read-only):** Das Mädchen nimmt einen Federhalter.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Pigen tager en fyldepenholder.
**PROPOSED_DA:** Pigen tager en penneholder.
**Problēma:** “Federhalter” betyder penneholder, ikke specifikt fyldepenholder; den danske oversættelse indsnævrer betydningen.
**Audita pamatojums:** “Federhalter” betyder penneholder, ikke specifikt fyldepenholder; den danske oversættelse indsnævrer betydningen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 123

**Audit ID:** `DA-KURSS-FCA-0108`
**Lesson/ID:** `lesson4`
**Path:** `lesson4TrainingCardsDa[1].front`
**Field type:** `trainingFront`
**DE (read-only):** Der Federhalter ist nicht weiß, er ist schwarz.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Fyldepenholderen er ikke hvid, den er sort.
**PROPOSED_DA:** Penneholderen er ikke hvid, den er sort.
**Problēma:** “Federhalter” er oversat som fyldepenholder, hvilket fejlagtigt specificerer genstanden som en fountainpenholder.
**Audita pamatojums:** “Federhalter” er oversat som fyldepenholder, hvilket fejlagtigt specificerer genstanden som en fountainpenholder.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 124

**Audit ID:** `DA-KURSS-FCA-0109`
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsDa[10].front`
**Field type:** `trainingFront`
**DE (read-only):** Das Mädchen nimmt den Federhalter, die Feder und das Messer.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Pigen tager fyldepenholderen, fjeren og kniven.
**PROPOSED_DA:** Pigen tager penneholderen, fjeren og kniven.
**Problēma:** Fyldepenholderen betyder en holder til en fyldepen, mens Federhalter svarer til penneholderen.
**Audita pamatojums:** Fyldepenholderen betyder en holder til en fyldepen, mens Federhalter svarer til penneholderen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 125

**Audit ID:** `DA-KURSS-FCA-0110`
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[14].front`
**Field type:** `trainingFront`
**DE (read-only):** Das sind Federn.
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** De er fjer.
**PROPOSED_DA:** Det er fjer.
**Problēma:** Ved identifikation af ting bruges normalt det på dansk; De er fjer lyder som en henvisning til allerede nævnte fjer.
**Audita pamatojums:** Ved identifikation af ting bruges normalt det på dansk; De er fjer lyder som en henvisning til allerede nævnte fjer.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 126

**Audit ID:** `DA-KURSS-FCA-0111`
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[18].front`
**Field type:** `trainingFront`
**DE (read-only):** Das ist ein Federhalter.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Det er en fyldepenholder.
**PROPOSED_DA:** Det er en penneholder.
**Problēma:** Fyldepenholder betyder en holder til en fyldepen, mens Federhalter her betyder en almindelig penneholder.
**Audita pamatojums:** Fyldepenholder betyder en holder til en fyldepen, mens Federhalter her betyder en almindelig penneholder.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 127

**Audit ID:** `DA-KURSS-FCA-0112`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Sæt den rigtige bøjning og lav flertal!
**PROPOSED_DA:** Sæt ordet i den rigtige bøjning, og dan flertalsformen!
**Problēma:** Man sætter ikke en bøjning; formuleringen er unaturlig og mangler, hvad der skal bøjes.
**Audita pamatojums:** Man sætter ikke en bøjning; formuleringen er unaturlig og mangler, hvad der skal bøjes.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 128

**Audit ID:** `DA-KURSS-FCA-0113`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Form 2/3: Ihr (flertal)
**PROPOSED_DA:** Form 2/3: I (flertal)
**Problēma:** “Ihr” er tysk og bør erstattes af det danske flertalspronomen “I”.
**Audita pamatojums:** “Ihr” er tysk og bør erstattes af det danske flertalspronomen “I”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 129

**Audit ID:** `DA-KURSS-FCA-0114`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formSie`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Form 3/3: Sie (høflig form)
**PROPOSED_DA:** Form 3/3: De (høflig form)
**Problēma:** “Sie” er tysk og bør erstattes af det danske høflige pronomen “De”.
**Audita pamatojums:** “Sie” er tysk og bør erstattes af det danske høflige pronomen “De”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 130

**Audit ID:** `DA-KURSS-FCA-0115`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.19.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen.
**PROPOSED_DA:** Vekselpræpositioner: vor, hinter, unter, über, neben, zwischen.
**Problēma:** Den tyske grammatiske betegnelse bør oversættes til dansk; præpositionerne bevares som tyske målord.
**Audita pamatojums:** Den tyske grammatiske betegnelse bør oversættes til dansk; præpositionerne bevares som tyske målord.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 131

**Audit ID:** `DA-KURSS-FCA-0116`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.20.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Haus, etage, Dativ/Akkusativ og sammensatte substantiver.
**PROPOSED_DA:** Hus, etage, dativ/akkusativ og sammensatte substantiver.
**Problēma:** Haus er tysk og bør oversættes til dansk; danske grammatisk-termer skrives normalt med små bogstaver.
**Audita pamatojums:** Haus er tysk og bør oversættes til dansk; danske grammatisk-termer skrives normalt med små bogstaver.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---
