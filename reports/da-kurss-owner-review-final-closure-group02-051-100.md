# DA–DE Kurss — OWNER review — final closure Group 02

Avots: [da-kurss-final-closure-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-final-closure-audit-fffe/reports/da-kurss-final-closure-audit.md) · [GitHub indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-final-closure-audit-fffe/reports/da-kurss-owner-review-final-closure-GITHUB.md)
Findings: **051–100** (50 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir Luna ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 51

**Audit ID:** `DA-KURSS-FCA-0036`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > grammar`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
**PROPOSED_DA:** Pronomenet på tysk har en entals- og en flertalsform: der Schüler ist klein; die Schüler sind klein.
**Problēma:** Dette er lettisk tekst, ikke dansk.
**Audita pamatojums:** Dette er lettisk tekst, ikke dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 52

**Audit ID:** `DA-KURSS-FCA-0037`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > grammar`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.
**PROPOSED_DA:** Det demonstrative pronomen ændrer sig i tal og køn på dansk, men på tysk bruges én form: das.
**Problēma:** Sætningen er på lettisk og nævner desuden det forkerte målsprog i den danske lektion.
**Audita pamatojums:** Sætningen er på lettisk og nævner desuden det forkerte målsprog i den danske lektion.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 53

**Audit ID:** `DA-KURSS-FCA-0038`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > training aria-label`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** aria-label="Lesson 6 translation card"
**PROPOSED_DA:** aria-label="Oversættelseskort til lektion 6"
**Problēma:** ARIA-labelen er på engelsk i ellers dansk brugergrænsefladetekst.
**Audita pamatojums:** ARIA-labelen er på engelsk i ellers dansk brugergrænsefladetekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 54

**Audit ID:** `DA-KURSS-FCA-0039`
**Lesson/ID:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <h3>Foredrag 7</h3> <p class="kurss-lesson-intro">Syvende lektion: kommandoudtryk, tiltaleform og flertal.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Wa…
**PROPOSED_DA:** <h3>Lektion 7</h3><p class="kurss-lesson-intro">Syvende lektion: imperativ, tiltaleform og flertal.</p><details class="lesson1-accordion" open><summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Was tust du?…
**Problēma:** Feltet indeholder omfattende lettisk tekst samt ødelagte dansk-lettiske sammenføjninger. Ordlisten har også mange forkerte og forskudte oversættelser.
**Audita pamatojums:** Feltet indeholder omfattende lettisk tekst samt ødelagte dansk-lettiske sammenføjninger. Ordlisten har også mange forkerte og forskudte oversættelser.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 55

**Audit ID:** `DA-KURSS-FCA-0040`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** På dansk har refleksive verber ikke en særlig bøjning. På tysk bøjes de som andre verber, men med det refleksive pronomen sich.
**PROPOSED_DA:** På lettisk har refleksive verber en særlig endelse og bøjning. På tysk bøjes de som andre verber, men med et refleksivt pronomen, f.eks. sich.
**Problēma:** Danish is used instead of Latvian, and the statement incorrectly implies that sich is the only reflexive pronoun.
**Audita pamatojums:** Danish is used instead of Latvian, and the statement incorrectly implies that sich is the only reflexive pronoun.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 56

**Audit ID:** `DA-KURSS-FCA-0041`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Übung / Øvelse
**PROPOSED_DA:** Øvelse
**Problēma:** The German word Übung remains in the Danish section title without a clear need.
**Audita pamatojums:** The German word Übung remains in the Danish section title without a clear need.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 57

**Audit ID:** `DA-KURSS-FCA-0042`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].description`
**Field type:** `sectionDescription`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Übung I - Brug den korrekte bøjning. Übung II - Oversættelseskort.
**PROPOSED_DA:** Øvelse I – Brug den korrekte bøjning. Øvelse II – Oversættelseskort.
**Problēma:** The German label Übung remains twice in otherwise Danish text.
**Audita pamatojums:** The German label Übung remains twice in otherwise Danish text.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 58

**Audit ID:** `DA-KURSS-FCA-0043`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[37].lv`
**Field type:** `cardLv`
**DE (read-only):** Herr Lehrer, bitte, setzen Sie sich!
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Lærer, sæt dig venligst ned!
**PROPOSED_DA:** Hr. lærer, sæt Dem venligst ned!
**Problēma:** Den danske tekst udelader tiltaleformen »Herr« og bruger uformelt »dig« i stedet for den formelle tiltale i den tyske sætning.
**Audita pamatojums:** Den danske tekst udelader tiltaleformen »Herr« og bruger uformelt »dig« i stedet for den formelle tiltale i den tyske sætning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 59

**Audit ID:** `DA-KURSS-FCA-0044`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[8].lv`
**Field type:** `cardLv`
**DE (read-only):** Sprich nicht leise!
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Tal ikke stille!
**PROPOSED_DA:** Tal ikke lavt!
**Problēma:** “Tal ikke stille!” er forståeligt, men “Tal ikke lavt!” er den mere naturlige danske formulering for “Sprich nicht leise!”.
**Audita pamatojums:** “Tal ikke stille!” er forståeligt, men “Tal ikke lavt!” er den mere naturlige danske formulering for “Sprich nicht leise!”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 60

**Audit ID:** `DA-KURSS-FCA-0045`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[18].lv`
**Field type:** `cardLv`
**DE (read-only):** Herr Lehrer, bitte, setzen Sie sich!
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hr. lærer, sæt dig venligst ned!
**PROPOSED_DA:** Hr. lærer, sæt Dem venligst ned!
**Problēma:** Det tyske høflige Sie-formen svarer til dansk tiltale med Dem, ikke det uformelle dig.
**Audita pamatojums:** Det tyske høflige Sie-formen svarer til dansk tiltale med Dem, ikke det uformelle dig.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 61

**Audit ID:** `DA-KURSS-FCA-0046`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[0].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Påpegende pronomener
**PROPOSED_DA:** Påpegende pronominer
**Problēma:** På dansk er den almindelige grammatiske pluralisform af "pronomen" "pronominer".
**Audita pamatojums:** På dansk er den almindelige grammatiske pluralisform af "pronomen" "pronominer".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 62

**Audit ID:** `DA-KURSS-FCA-0047`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[15].lv`
**Field type:** `cardLv`
**DE (read-only):** Was ist der Lehrer?
**Severity:** NEEDS_SOURCE_REVIEW
**Category:** SEMANTICS
**CURRENT_DA:** Hvad er læreren?
**PROPOSED_DA:** Hvem er læreren?
**Problēma:** “Hvad er læreren?” is unnatural for identifying a person. The German “Was ist der Lehrer?” may also indicate a source issue.
**Audita pamatojums:** “Hvad er læreren?” is unnatural for identifying a person. The German “Was ist der Lehrer?” may also indicate a source issue.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 63

**Audit ID:** `DA-KURSS-FCA-0048`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[18].lv`
**Field type:** `cardLv`
**DE (read-only):** Die Lehrerin ist eine Frau.
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** Læreren er en kvinde.
**PROPOSED_DA:** Lærerinden er en kvinde.
**Problēma:** “Læreren” is masculine or gender-neutral, but the German sentence explicitly refers to a female teacher.
**Audita pamatojums:** “Læreren” is masculine or gender-neutral, but the German sentence explicitly refers to a female teacher.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 64

**Audit ID:** `DA-KURSS-FCA-0049`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[29]`
**Field type:** `sectionItem`
**DE (read-only):** die Schwestern
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** die Schwestern — søstrene
**PROPOSED_DA:** die Schwestern — søstre
**Problēma:** Den tyske pluralform er ikke bestemt; dansk "søstrene" betyder "die Schwestern" i bestemt form.
**Audita pamatojums:** Den tyske pluralform er ikke bestemt; dansk "søstrene" betyder "die Schwestern" i bestemt form.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 65

**Audit ID:** `DA-KURSS-FCA-0050`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Dansk dativ og tysk nominativ/akkusativ
**PROPOSED_DA:** Lettisk dativ og tysk nominativ/akkusativ
**Problēma:** Der står lettisk i teksten og kildereferencen; Dansk er en forkert sprogangivelse.
**Audita pamatojums:** Der står lettisk i teksten og kildereferencen; Dansk er en forkert sprogangivelse.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 66

**Audit ID:** `DA-KURSS-FCA-0051`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** På lettisk står den person, som noget tilhører, i dativ, og subjektet i nominativ. På tysk står personen i nominativ kasus og den besatte genstand i akkusativ.
**PROPOSED_DA:** På lettisk står den person, som noget tilhører, i dativ, og den besatte genstand i nominativ. På tysk står personen i nominativ kasus og den besatte genstand i akkusativ.
**Problēma:** Subjektet er forkert her; det er den besatte genstand, der står i nominativ på lettisk.
**Audita pamatojums:** Subjektet er forkert her; det er den besatte genstand, der står i nominativ på lettisk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 67

**Audit ID:** `DA-KURSS-FCA-0052`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hvis den fortællende sætning indeholder konjunktionen denn, forbliver verbet i 2. position. Konjunktionen denn tæller ikke som et led i sætningen.
**PROPOSED_DA:** Hvis den fremsættende sætning indeholder konjunktionen denn, står verbet på andenpladsen. Konjunktionen denn tæller ikke som et sætningsled.
**Problēma:** "Fortællende sætning" er ikke den rette danske grammatiske term for en deklarativ sætning; "fremsættende sætning" er korrekt.
**Audita pamatojums:** "Fortællende sætning" er ikke den rette danske grammatiske term for en deklarativ sætning; "fremsættende sætning" er korrekt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 68

**Audit ID:** `DA-KURSS-FCA-0053`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Franz hat keine Feder und keinen Bleistift.
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Franc har ingen pen og ingen blyant.
**PROPOSED_DA:** Franz har ingen pen og ingen blyant.
**Problēma:** Navnet er skrevet som “Franc” på dansk, men den tyske kildetekst bruger “Franz”. Egennavne skal bevares i overensstemmelse med DE.
**Audita pamatojums:** Navnet er skrevet som “Franc” på dansk, men den tyske kildetekst bruger “Franz”. Egennavne skal bevares i overensstemmelse med DE.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 69

**Audit ID:** `DA-KURSS-FCA-0054`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[17].lv`
**Field type:** `cardLv`
**DE (read-only):** Schreibt Franz auch?
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Skriver Francis også?
**PROPOSED_DA:** Skriver Franz også?
**Problēma:** Navnet er Francis i stedet for Franz som i den tyske kildetekst; det ligner en rest fra LV-referencen.
**Audita pamatojums:** Navnet er Francis i stedet for Franz som i den tyske kildetekst; det ligner en rest fra LV-referencen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 70

**Audit ID:** `DA-KURSS-FCA-0055`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[27]`
**Field type:** `sectionItem`
**DE (read-only):** die Blume
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** die Blume — blomsten
**PROPOSED_DA:** die Blume — blomst
**Problēma:** Den danske gloss er bestemt, mens den fungerer som en ubestemt ordbogsform; den bør være »blomst« for at følge den øvrige stil.
**Audita pamatojums:** Den danske gloss er bestemt, mens den fungerer som en ubestemt ordbogsform; den bør være »blomst« for at følge den øvrige stil.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 71

**Audit ID:** `DA-KURSS-FCA-0056`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[30]`
**Field type:** `sectionItem`
**DE (read-only):** die Kreide
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** die Kreide — kridtet
**PROPOSED_DA:** die Kreide — kridt
**Problēma:** Den danske gloss er bestemt, mens den fungerer som en ubestemt ordbogsform; »kridt« er den korrekte lemmaform.
**Audita pamatojums:** Den danske gloss er bestemt, mens den fungerer som en ubestemt ordbogsform; »kridt« er den korrekte lemmaform.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 72

**Audit ID:** `DA-KURSS-FCA-0057`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** De fleste enstavelsesadjektiver med stammevokalen a, o, u har en Umlaut i komparativ- og superlativgraden.
**PROPOSED_DA:** De fleste enstavelsesadjektiver med stammevokalen a, o, u har omlyd i komparativ- og superlativgraden.
**Problēma:** Overskriften bruger det danske fagudtryk omlyd, mens teksten unødvendigt skifter til det tyske Umlaut; formuleringen med en Umlaut er også mindre naturlig.
**Audita pamatojums:** Overskriften bruger det danske fagudtryk omlyd, mens teksten unødvendigt skifter til det tyske Umlaut; formuleringen med en Umlaut er også mindre naturlig.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 73

**Audit ID:** `DA-KURSS-FCA-0058`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversæt
**Problēma:** Som instruktionsoverskrift bør imperativen Oversæt bruges; Oversætte er infinitiv og lyder mindre naturligt i denne kontekst.
**Audita pamatojums:** Som instruktionsoverskrift bør imperativen Oversæt bruges; Oversætte er infinitiv og lyder mindre naturligt i denne kontekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 74

**Audit ID:** `DA-KURSS-FCA-0059`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].lv`
**Field type:** `cardLv`
**DE (read-only):** Er heißt Johann.
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Han hedder Jan.
**PROPOSED_DA:** Han hedder Johan.
**Problēma:** Det danske navn bør svare til det tyske Johann; Jan er et andet navn.
**Audita pamatojums:** Det danske navn bør svare til det tyske Johann; Jan er et andet navn.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 75

**Audit ID:** `DA-KURSS-FCA-0060`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[12].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, Max ist nicht groß, Rudolf ist größer.
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Nej, Max er ikke stor, Rudolph er større.
**PROPOSED_DA:** Nej, Max er ikke stor, Rudolf er større.
**Problēma:** Navnet er stavet Rudolph på dansk, men Rudolf i den tyske reference. Navne bør være konsistente på tværs af sætningen.
**Audita pamatojums:** Navnet er stavet Rudolph på dansk, men Rudolf i den tyske reference. Navne bør være konsistente på tværs af sætningen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 76

**Audit ID:** `DA-KURSS-FCA-0061`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv`
**Field type:** `cardLv`
**DE (read-only):** Franz ist am größten.
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Francis er den største.
**PROPOSED_DA:** Franz er den største.
**Problēma:** Det danske navn Francis svarer ikke til Franz i den tyske reference. Navnet bør bevares konsistent.
**Audita pamatojums:** Det danske navn Francis svarer ikke til Franz i den tyske reference. Navnet bør bevares konsistent.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 77

**Audit ID:** `DA-KURSS-FCA-0062`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** der Fuß
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** der Fuß — foden
**PROPOSED_DA:** der Fuß — fod
**Problēma:** Den danske oversættelse er bestemt form; som ordbogsform skal den være ubestemt: »fod«.
**Audita pamatojums:** Den danske oversættelse er bestemt form; som ordbogsform skal den være ubestemt: »fod«.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 78

**Audit ID:** `DA-KURSS-FCA-0063`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[19]`
**Field type:** `sectionItem`
**DE (read-only):** die Brust
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** die Brust — brystet
**PROPOSED_DA:** die Brust — bryst
**Problēma:** Den danske oversættelse er bestemt form; som ordbogsform skal den være ubestemt: »bryst«.
**Audita pamatojums:** Den danske oversættelse er bestemt form; som ordbogsform skal den være ubestemt: »bryst«.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 79

**Audit ID:** `DA-KURSS-FCA-0064`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** Nogle verber med stammevokalen a eller au i nutid 2. og 3. person ental har en umlaut.
**PROPOSED_DA:** Nogle verber med stammevokalen a eller au får en omlyd i 2. og 3. person ental i nutid.
**Problēma:** Teksten bruger både den danske term omlyd i overskriften og det tyske lånord umlaut i forklaringen; ordstillingen er også mindre naturlig.
**Audita pamatojums:** Teksten bruger både den danske term omlyd i overskriften og det tyske lånord umlaut i forklaringen; ordstillingen er også mindre naturlig.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 80

**Audit ID:** `DA-KURSS-FCA-0065`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** sich umkehren — vende sig
**PROPOSED_DA:** sich umkehren — vende sig om
**Problēma:** Den danske oversættelse mangler om, som er nødvendig for at gengive betydningen af umkehren og det tilsvarende eksempel kehr dich um.
**Audita pamatojums:** Den danske oversættelse mangler om, som er nødvendig for at gengive betydningen af umkehren og det tilsvarende eksempel kehr dich um.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 81

**Audit ID:** `DA-KURSS-FCA-0066`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[27].lv`
**Field type:** `cardLv`
**DE (read-only):** Turnt Robert auch?
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Træner Robert også?
**PROPOSED_DA:** Laver Robert også gymnastik?
**Problēma:** Træner betyder typisk at træne, ikke specifikt at lave gymnastik som i den tyske sætning.
**Audita pamatojums:** Træner betyder typisk at træne, ikke specifikt at lave gymnastik som i den tyske sætning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 82

**Audit ID:** `DA-KURSS-FCA-0067`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, Robert und Johann turnen nicht.
**Severity:** HIGH
**Category:** NAMES
**CURRENT_DA:** Nej, Robert og Jan laver ikke gymnastik.
**PROPOSED_DA:** Nej, Robert og Johann laver ikke gymnastik.
**Problēma:** Det danske navn Jan svarer ikke til personnavnet Johann i den tyske kildetekst.
**Audita pamatojums:** Det danske navn Jan svarer ikke til personnavnet Johann i den tyske kildetekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 83

**Audit ID:** `DA-KURSS-FCA-0068`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[29].lv`
**Field type:** `cardLv`
**DE (read-only):** Robert, turne!
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Robert, motionér!
**PROPOSED_DA:** Robert, lav gymnastik!
**Problēma:** Motionér betyder at dyrke motion generelt og gengiver ikke den specifikke opfordring til at lave gymnastik.
**Audita pamatojums:** Motionér betyder at dyrke motion generelt og gengiver ikke den specifikke opfordring til at lave gymnastik.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 84

**Audit ID:** `DA-KURSS-FCA-0069`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[30].lv`
**Field type:** `cardLv`
**DE (read-only):** Robert und Johann, turnt!
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Robert og Jan, motionér!
**PROPOSED_DA:** Robert og Johann, motionér!
**Problēma:** Navnet Jan svarer ikke til Johann i den tyske kildetekst; personnavnet bør bevares som Johann.
**Audita pamatojums:** Navnet Jan svarer ikke til Johann i den tyske kildetekst; personnavnet bør bevares som Johann.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 85

**Audit ID:** `DA-KURSS-FCA-0070`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[6].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Müssen betyder at have behov for eller at være nødt til.
**PROPOSED_DA:** Müssen betyder at skulle eller at være nødt til.
**Problēma:** “Have behov for” svarer snarere til brauchen; müssen udtrykker nødvendighed eller pligt.
**Audita pamatojums:** “Have behov for” svarer snarere til brauchen; müssen udtrykker nødvendighed eller pligt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 86

**Audit ID:** `DA-KURSS-FCA-0071`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversæt
**Problēma:** Som instruktion eller sektionsoverskrift bør imperativen være “Oversæt”; “oversætte” er infinitiv og lyder ufuldstændigt her.
**Audita pamatojums:** Som instruktion eller sektionsoverskrift bør imperativen være “Oversæt”; “oversætte” er infinitiv og lyder ufuldstændigt her.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 87

**Audit ID:** `DA-KURSS-FCA-0072`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Sollen, dürfen, essen, frugt
**PROPOSED_DA:** Skulle, måtte, spise, frugt
**Problēma:** Tre tyske ord står uberørt i den danske undertitel. De bør oversættes til dansk, så undertitlen er sprogligt konsekvent.
**Audita pamatojums:** Tre tyske ord står uberørt i den danske undertitel. De bør oversættes til dansk, så undertitlen er sprogligt konsekvent.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 88

**Audit ID:** `DA-KURSS-FCA-0073`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Femtende forelæsning: sollen, dürfen, essen og frugtord.
**PROPOSED_DA:** Femtende lektion: sollen, dürfen, essen og frugtord.
**Problēma:** “Lektion” er den naturlige danske betegnelse i en kursusserie; “forelæsning” betyder snarere en akademisk lecture.
**Audita pamatojums:** “Lektion” er den naturlige danske betegnelse i en kursusserie; “forelæsning” betyder snarere en akademisk lecture.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 89

**Audit ID:** `DA-KURSS-FCA-0074`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Navne
**PROPOSED_DA:** Ord
**Problēma:** “Navne” betyder names, men afsnittet indeholder tyske ord og bøjninger, ikke person- eller stednavne.
**Audita pamatojums:** “Navne” betyder names, men afsnittet indeholder tyske ord og bøjninger, ikke person- eller stednavne.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 90

**Audit ID:** `DA-KURSS-FCA-0075`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversæt
**Problēma:** Som sektionsoverskrift og instruktion bør imperativen »Oversæt« bruges; »Oversætte« er infinitiv.
**Audita pamatojums:** Som sektionsoverskrift og instruktion bør imperativen »Oversæt« bruges; »Oversætte« er infinitiv.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 91

**Audit ID:** `DA-KURSS-FCA-0076`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[15].lv`
**Field type:** `cardLv`
**DE (read-only):** Das Kind soll das Messer nicht nehmen, denn das Messer ist scharf.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Et barn bør ikke tage en kniv, fordi kniven er skarp.
**PROPOSED_DA:** Barnet bør ikke tage kniven, fordi kniven er skarp.
**Problēma:** Danish uses indefinite nouns, but German refers to the specific child and knife with definite articles.
**Audita pamatojums:** Danish uses indefinite nouns, but German refers to the specific child and knife with definite articles.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 92

**Audit ID:** `DA-KURSS-FCA-0077`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[4].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Feminine navneord har ikke en endelse i dativ ental.
**PROPOSED_DA:** Hunkønsnavneord har ingen endelse i dativ ental.
**Problēma:** “Feminine” er ikke dansk fagterminologi her; brug det danske “hunkønsnavneord”.
**Audita pamatojums:** “Feminine” er ikke dansk fagterminologi her; brug det danske “hunkønsnavneord”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 93

**Audit ID:** `DA-KURSS-FCA-0078`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** DA
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** DA-feltet kan lokaliseres til `I ordene wem, dem, den, der udtales e langt og smalt.`, men DE_CURRENT indeholder selv lettisk tekst (`Vārdos ...`). DE = STRICT READ-ONLY, tāpēc DE avots jāizskata atsevišķi.
**PROPOSED_DA:** I ordene wem, dem, den, der udtales e langt og smalt.
**Problēma:** Feltet indeholder meta-tekst, lettisk og tekniske instruktioner i stedet for den danske udtalevejledning.
**Audita pamatojums:** Feltet indeholder meta-tekst, lettisk og tekniske instruktioner i stedet for den danske udtalevejledning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 94

**Audit ID:** `DA-KURSS-FCA-0079`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversæt
**Problēma:** Som instruktion er imperativformen “Oversæt” korrekt; “Oversætte” er infinitiv og fungerer ikke naturligt som opgaveoverskrift.
**Audita pamatojums:** Som instruktion er imperativformen “Oversæt” korrekt; “Oversætte” er infinitiv og fungerer ikke naturligt som opgaveoverskrift.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 95

**Audit ID:** `DA-KURSS-FCA-0080`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[10].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie sind die Hunde?
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Hvordan er hunde?
**PROPOSED_DA:** Hvordan er hundene?
**Problēma:** Den tyske bestemthed er ikke gengivet: 'Die Hunde' svarer til 'hundene', ikke det ubestemte 'hunde'.
**Audita pamatojums:** Den tyske bestemthed er ikke gengivet: 'Die Hunde' svarer til 'hundene', ikke det ubestemte 'hunde'.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 96

**Audit ID:** `DA-KURSS-FCA-0081`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** die Diele
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** die Diele — gulv
**PROPOSED_DA:** die Diele — forstue
**Problēma:** Die Diele betyder en forstue, entré eller gang; »gulv« er en forkert betydning.
**Audita pamatojums:** Die Diele betyder en forstue, entré eller gang; »gulv« er en forkert betydning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 97

**Audit ID:** `DA-KURSS-FCA-0082`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[4].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** I verberne helfen og werfen i 2. og 3. person ental ændres stammen e til i.
**PROPOSED_DA:** I verberne helfen og werfen ændres stammens e til i i 2. og 3. person ental.
**Problēma:** Efter ændres kræver stammen genitiv: stammens e. Den nuværende formulering er grammatisk ukorrekt på dansk.
**Audita pamatojums:** Efter ændres kræver stammen genitiv: stammens e. Den nuværende formulering er grammatisk ukorrekt på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 98

**Audit ID:** `DA-KURSS-FCA-0083`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[4].cards[3].prompt`
**Field type:** `cardPrompt`
**DE (read-only):** Der Knecht arbeitet mit dem Spaten, mit diesem Beil, mit jener Säge.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Womit arbeitet der Knecht? (der Spaten, dieses Beil, jene Säge)
**PROPOSED_DA:** Hvad arbejder karlen med? (spaden, denne økse, den dér sav)
**Problēma:** Feltet indeholder tysk tekst i stedet for dansk og bør oversættes til dansk.
**Audita pamatojums:** Feltet indeholder tysk tekst i stedet for dansk og bør oversættes til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 99

**Audit ID:** `DA-KURSS-FCA-0084`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[4].cards[4].prompt`
**Field type:** `cardPrompt`
**DE (read-only):** Der Knecht hilft diesem Tischler, jener Frau, dem Fräulein.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein)
**PROPOSED_DA:** Hvem hjælper karlen? (denne snedker, den dér kvinde, frøkenen)
**Problēma:** Feltet indeholder tysk tekst i stedet for dansk og bør oversættes til dansk.
**Audita pamatojums:** Feltet indeholder tysk tekst i stedet for dansk og bør oversættes til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 100

**Audit ID:** `DA-KURSS-FCA-0085`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[9].lv`
**Field type:** `cardLv`
**DE (read-only):** Wem hilft der Knabe?
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Hvem hjælper drengen?
**PROPOSED_DA:** Hvem er det, drengen hjælper?
**Problēma:** Den danske formulering er tvetydig og læses naturligt som 'Hvem hjælper drengen?' i stedet for 'Hvem hjælper drengen?' som objekt.
**Audita pamatojums:** Den danske formulering er tvetydig og læses naturligt som 'Hvem hjælper drengen?' i stedet for 'Hvem hjælper drengen?' som objekt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---
