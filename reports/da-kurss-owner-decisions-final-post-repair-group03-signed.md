# DA–DE Kurss — OWNER review — final post-repair Group 03

Avots: `reports/da-kurss-final-post-repair-audit.md`
Findings: **101–150** (50 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir audita ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 101

**Audit ID:** `DA-KURSS-FPR-0101`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[12].lv`
**Field type:** `cardLv`
**DE (read-only):** Sind die Briefe lang oder kurz?
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Er bogstaverne lange eller korte?
**PROPOSED_DA:** Er brevene lange eller korte?
**Problēma:** Tysk "Briefe" betyder breve, ikke bogstaver; "bogstaverne" ændrer betydningen.
**Audita pamatojums:** Tysk "Briefe" betyder breve, ikke bogstaver; "bogstaverne" ændrer betydningen.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Er brevene lange eller korte?

---

## Finding 102

**Audit ID:** `DA-KURSS-FPR-0102`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** Tiende forelæsning: sein, können, kommandoformer, sundhed, alder og erhverv.
**PROPOSED_DA:** Tiende lektion: sein, können, kommandoformer, sundhed, alder og erhverv.
**Problēma:** "Forelæsning" betyder lecture og er inkonsistent med kursets øvrige brug af "lektion" for lesson.
**Audita pamatojums:** "Forelæsning" betyder lecture og er inkonsistent med kursets øvrige brug af "lektion" for lesson.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Tiende lektion: sein, können, kommandoformer, sundhed, alder og erhverv.

---

## Finding 103

**Audit ID:** `DA-KURSS-FPR-0103`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversæt
**Problēma:** Som sektionsoverskrift er imperativen "Oversæt" naturlig; "Oversætte" er infinitiv og lyder som en emnebetegnelse.
**Audita pamatojums:** Som sektionsoverskrift er imperativen "Oversæt" naturlig; "Oversætte" er infinitiv og lyder som en emnebetegnelse.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Oversæt

---

## Finding 104

**Audit ID:** `DA-KURSS-FPR-0104`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[5].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, er kann nicht arbeiten.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Nein, han kan ikke arbejde.
**PROPOSED_DA:** Nej, han kan ikke arbejde.
**Problēma:** “Nein” is German; the Danish negation is “Nej”.
**Audita pamatojums:** “Nein” is German; the Danish negation is “Nej”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Nej, han kan ikke arbejde.

---

## Finding 105

**Audit ID:** `DA-KURSS-FPR-0105`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[11].lv`
**Field type:** `cardLv`
**DE (read-only):** Wer bist du?
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Hvad er du?
**PROPOSED_DA:** Hvem er du?
**Problēma:** “Wer bist du?” asks who someone is, which is “Hvem er du?” in Danish, not “Hvad er du?”.
**Audita pamatojums:** “Wer bist du?” asks who someone is, which is “Hvem er du?” in Danish, not “Hvad er du?”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hvem er du?

---

## Finding 106

**Audit ID:** `DA-KURSS-FPR-0106`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[18].lv`
**Field type:** `cardLv`
**DE (read-only):** Die Lehrerin ist eine Frau.
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Læreren er en kvinde.
**PROPOSED_DA:** Lærerinden er en kvinde.
**Problēma:** The answer refers to a female teacher, but “Læreren” is grammatically masculine/common-gender and does not match “Lehrerin”.
**Audita pamatojums:** The answer refers to a female teacher, but “Læreren” is grammatically masculine/common-gender and does not match “Lehrerin”.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA: Læreren er en kvinde. Dāņu “lærer” ir dzimumneitrāls/common-gender profesijas apzīmējums; “lærerinde” ir novecojis un nav vajadzīgs.

---

## Finding 107

**Audit ID:** `DA-KURSS-FPR-0107`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Haben, kein/keine/keinen, besiddende og sammensatte navneord
**PROPOSED_DA:** Haben, kein/keine/keinen, besiddelse og sammensatte navneord
**Problēma:** “Besiddende” is an adjective and is not parallel to the surrounding nouns; “besiddelse” correctly denotes possession.
**Audita pamatojums:** “Besiddende” is an adjective and is not parallel to the surrounding nouns; “besiddelse” correctly denotes possession.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Haben, kein/keine/keinen, besiddelse og sammensatte navneord

---

## Finding 108

**Audit ID:** `DA-KURSS-FPR-0108`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[22]`
**Field type:** `sectionItem`
**DE (read-only):** die Stühle
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** die Stühle — stolene
**PROPOSED_DA:** die Stühle — stole
**Problēma:** German “die Stühle” is an indefinite plural; Danish “stolene” means “the chairs”.
**Audita pamatojums:** German “die Stühle” is an indefinite plural; Danish “stolene” means “the chairs”.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “stolene” ir iespējams noteiktais daudzskaitlis un DE “die” ir arī daudzskaitļa artikuls; audits nepierāda, ka kontekstā obligāti vajadzīga nenoteiktā forma.

---

## Finding 109

**Audit ID:** `DA-KURSS-FPR-0109`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[29]`
**Field type:** `sectionItem`
**DE (read-only):** die Schwestern
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** die Schwestern — søstrene
**PROPOSED_DA:** die Schwestern — søstre
**Problēma:** German “die Schwestern” is an indefinite plural; Danish “søstrene” means “the sisters”.
**Audita pamatojums:** German “die Schwestern” is an indefinite plural; Danish “søstrene” means “the sisters”.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “søstrene” ir iespējams noteiktais daudzskaitlis; audits nepierāda, ka kontekstā obligāti vajag “søstre”.

---

## Finding 110

**Audit ID:** `DA-KURSS-FPR-0110`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Hjælpeverbet haben på tysk udtrykker begrebet tilhørsforhold. på dansk udtrykkes det ofte med: Jeg har, du har, han har osv. t. t.
**PROPOSED_DA:** Hjælpeverbet haben på tysk udtrykker begrebet tilhørsforhold. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.
**Problēma:** The second sentence starts with a lowercase letter, and “t. t.” is an erroneous remnant; Danish uses “osv.” here.
**Audita pamatojums:** The second sentence starts with a lowercase letter, and “t. t.” is an erroneous remnant; Danish uses “osv.” here.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hjælpeverbet haben på tysk udtrykker begrebet tilhørsforhold. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.

---

## Finding 111

**Audit ID:** `DA-KURSS-FPR-0111`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** på dansk står den person, som noget tilhører, i dativ, og subjektet i nominativ. På tysk står personen i nominativ kasus og den besatte genstand i akkusativ.
**PROPOSED_DA:** På lettisk står den person, som noget tilhører, i dativ, og subjektet i nominativ. På tysk står personen i nominativ kasus og den besatte genstand i akkusativ.
**Problēma:** Teksten hævder fejlagtigt, at dansk har dativ i denne konstruktion; kildereferencen angiver lettisk. Sætningen starter også med lille bogstav.
**Audita pamatojums:** Teksten hævder fejlagtigt, at dansk har dativ i denne konstruktion; kildereferencen angiver lettisk. Sætningen starter også med lille bogstav.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** På lettisk står den person, som noget tilhører, i dativ, og subjektet i nominativ. På tysk står personen i nominativ kasus og den besatte genstand i akkusativ.

---

## Finding 112

**Audit ID:** `DA-KURSS-FPR-0112`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Verbet haben skal læres godt og bruges korrekt. Du bør også kende kommandoformerne.
**PROPOSED_DA:** Verbet haben skal læres grundigt og bruges korrekt. Du bør også kende imperativformerne.
**Problēma:** “Kommandoformerne” er ikke den naturlige grammatiske betegnelse; “imperativformerne” er præcist og idiomatisk.
**Audita pamatojums:** “Kommandoformerne” er ikke den naturlige grammatiske betegnelse; “imperativformerne” er præcist og idiomatisk.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Verbet haben skal læres grundigt og bruges korrekt. Du bør også kende imperativformerne.

---

## Finding 113

**Audit ID:** `DA-KURSS-FPR-0113`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[7].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Den dobbelte negation af det danske sprog udtrykkes ikke på tysk med det negative ord kein. Det negative ord kein står kun foran substantivet.
**PROPOSED_DA:** Dansk dobbelt negation udtrykkes ikke på tysk med nægtelsesordet kein. Nægtelsesordet kein står kun foran substantivet.
**Problēma:** “Af det danske sprog” og “det negative ord” er kluntede formuleringer; “på dansk” og “nægtelsesordet” er idiomatisk dansk.
**Audita pamatojums:** “Af det danske sprog” og “det negative ord” er kluntede formuleringer; “på dansk” og “nægtelsesordet” er idiomatisk dansk.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Dansk dobbelt negation udtrykkes ikke på tysk med nægtelsesordet kein. Nægtelsesordet kein står kun foran substantivet.

---

## Finding 114

**Audit ID:** `DA-KURSS-FPR-0114`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Hvis den fortællende sætning indeholder konjunktionen denn, forbliver verbet i 2. position. Konjunktionen denn zählt ikke som medlem af sætningen.
**PROPOSED_DA:** Hvis den fortællende sætning indeholder konjunktionen denn, forbliver verbet i 2. position. Konjunktionen denn tæller ikke som et led i sætningen.
**Problēma:** “zählt” er et tysk ord midt i den danske tekst. “Et led” er desuden den naturlige danske grammatikterm.
**Audita pamatojums:** “zählt” er et tysk ord midt i den danske tekst. “Et led” er desuden den naturlige danske grammatikterm.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hvis den fortællende sætning indeholder konjunktionen denn, forbliver verbet i 2. position. Konjunktionen denn tæller ikke som et led i sætningen.

---

## Finding 115

**Audit ID:** `DA-KURSS-FPR-0115`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[12].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Sammensatte navneord indledes med artiklen i det sidste navneord. Der lægges vægt på sagens første ord.
**PROPOSED_DA:** Sammensatte navneord får artikel efter det sidste navneord. Trykket ligger på det første led.
**Problēma:** “Sagens første ord” er en fejloversættelse og beskriver ikke korrekt første led i et sammensat navneord.
**Audita pamatojums:** “Sagens første ord” er en fejloversættelse og beskriver ikke korrekt første led i et sammensat navneord.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Sammensatte navneord får artikel efter det sidste navneord. Trykket ligger på det første led.

---

## Finding 116

**Audit ID:** `DA-KURSS-FPR-0116`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversæt
**Problēma:** Som instruktionsoverskrift bør imperativen “Oversæt” bruges; “Oversætte” er infinitiv og lyder ufuldstændigt her.
**Audita pamatojums:** Som instruktionsoverskrift bør imperativen “Oversæt” bruges; “Oversætte” er infinitiv og lyder ufuldstændigt her.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Oversæt

---

## Finding 117

**Audit ID:** `DA-KURSS-FPR-0117`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[5].lv`
**Field type:** `cardLv`
**DE (read-only):** Ich habe keine Hefte.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Jeg har ingen notesbøger.
**PROPOSED_DA:** Jeg har ingen hæfter.
**Problēma:** “Hefte” svarer her til “hæfter”, som allerede bruges i den foregående sætning; “notesbøger” ændrer ordvalget.
**Audita pamatojums:** “Hefte” svarer her til “hæfter”, som allerede bruges i den foregående sætning; “notesbøger” ændrer ordvalget.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Jeg har ingen hæfter.

---

## Finding 118

**Audit ID:** `DA-KURSS-FPR-0118`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Franz hat keine Feder und keinen Bleistift.
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Franc har ingen pen og ingen blyant.
**PROPOSED_DA:** Franz har ingen pen og ingen blyant.
**Problēma:** Personnavnet er translittereret som “Franc”, men den tyske original har “Franz”; navnet bør være konsekvent.
**Audita pamatojums:** Personnavnet er translittereret som “Franc”, men den tyske original har “Franz”; navnet bør være konsekvent.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. Personvārds dāņu mācību saturā drīkst būt lokalizēts; nav jāatdarina DE “Franz”.

---

## Finding 119

**Audit ID:** `DA-KURSS-FPR-0119`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[11].lv`
**Field type:** `cardLv`
**DE (read-only):** Was hat der Lehrer?
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Hvad har en lærer?
**PROPOSED_DA:** Hvad har læreren?
**Problēma:** Den tyske sætning refererer til en bestemt lærer (“der Lehrer”), mens den danske tekst bruger ubestemt form.
**Audita pamatojums:** Den tyske sætning refererer til en bestemt lærer (“der Lehrer”), mens den danske tekst bruger ubestemt form.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hvad har læreren?

---

## Finding 120

**Audit ID:** `DA-KURSS-FPR-0120`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[15].lv`
**Field type:** `cardLv`
**DE (read-only):** Was tut Anna?
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Hvor er Anna?
**PROPOSED_DA:** Hvad laver Anna?
**Problēma:** Den danske tekst spørger, hvor Anna er, mens den tyske original spørger, hvad Anna laver.
**Audita pamatojums:** Den danske tekst spørger, hvor Anna er, mens den tyske original spørger, hvad Anna laver.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hvad laver Anna?

---

## Finding 121

**Audit ID:** `DA-KURSS-FPR-0121`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[17].lv`
**Field type:** `cardLv`
**DE (read-only):** Schreibt Franz auch?
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Skriver Francis også?
**PROPOSED_DA:** Skriver Franz også?
**Problēma:** “Francis” matcher ikke navnet “Franz” i den tyske original og er inkonsekvent med den øvrige dialog.
**Audita pamatojums:** “Francis” matcher ikke navnet “Franz” i den tyske original og er inkonsekvent med den øvrige dialog.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. Lokalizēts personvārds “Francis” nav valodas kļūda.

---

## Finding 122

**Audit ID:** `DA-KURSS-FPR-0122`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[18].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, Franz schreibt nicht, er zeichnet.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Nein, Francis skriver ikke, han tegner.
**PROPOSED_DA:** Nej, Franz skriver ikke, han tegner.
**Problēma:** “Nein” er et tysk remnant i dansk tekst, og “Francis” afviger fra navnet “Franz” i originalen.
**Audita pamatojums:** “Nein” er et tysk remnant i dansk tekst, og “Francis” afviger fra navnet “Franz” i originalen.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Nej, Franz skriver ikke, han tegner.

---

## Finding 123

**Audit ID:** `DA-KURSS-FPR-0123`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[20].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, sie setzen sich und lernen.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Nein, de sætter sig ned og studerer.
**PROPOSED_DA:** Nej, de sætter sig ned og studerer.
**Problēma:** “Nein” er et tysk ord, der står tilbage i den danske oversættelse.
**Audita pamatojums:** “Nein” er et tysk ord, der står tilbage i den danske oversættelse.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Nej, de sætter sig ned og studerer.

---

## Finding 124

**Audit ID:** `DA-KURSS-FPR-0124`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Sammenlignende grader, als / wie, alder, adjektiver og farver.
**PROPOSED_DA:** Gradbøjning, als / wie, alder, adjektiver og farver.
**Problēma:** “Sammenlignende grader” er ikke idiomatisk dansk; “gradbøjning” er den almindelige grammatiske betegnelse.
**Audita pamatojums:** “Sammenlignende grader” er ikke idiomatisk dansk; “gradbøjning” er den almindelige grammatiske betegnelse.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Gradbøjning, als / wie, alder, adjektiver og farver.

---

## Finding 125

**Audit ID:** `DA-KURSS-FPR-0125`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Tolvte forelæsning: sammenlignende grader, als / wie, alder, adjektiver og farver.
**PROPOSED_DA:** Tolvte lektion: gradbøjning, als / wie, alder, adjektiver og farver.
**Problēma:** “Forelæsning” og “sammenlignende grader” passer dårligt til kursusformatet; “lektion” og “gradbøjning” er naturligere.
**Audita pamatojums:** “Forelæsning” og “sammenlignende grader” passer dårligt til kursusformatet; “lektion” og “gradbøjning” er naturligere.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Tolvte lektion: gradbøjning, als / wie, alder, adjektiver og farver.

---

## Finding 126

**Audit ID:** `DA-KURSS-FPR-0126`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[27]`
**Field type:** `sectionItem`
**DE (read-only):** die Blume
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** die Blume — blomsten
**PROPOSED_DA:** die Blume — blomst
**Problēma:** Den danske oversættelse bør stå i ubestemt form som opslagsord; »blomsten« er bestemt form.
**Audita pamatojums:** Den danske oversættelse bør stå i ubestemt form som opslagsord; »blomsten« er bestemt form.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “blomsten” semantiski atbilst “die Blume”; tikai DE artikuls nav pietiekams pamats piespiest dāņu nenoteikto opslagsformu.

---

## Finding 127

**Audit ID:** `DA-KURSS-FPR-0127`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[30]`
**Field type:** `sectionItem`
**DE (read-only):** die Kreide
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** die Kreide — kridtet
**PROPOSED_DA:** die Kreide — kridt
**Problēma:** »Kridtet« er bestemt form, mens den danske opslagsform her bør være »kridt«.
**Audita pamatojums:** »Kridtet« er bestemt form, mens den danske opslagsform her bør være »kridt«.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “kridtet” semantiski atbilst “die Kreide”; tikai DE artikuls nav pietiekams pamats piespiest dāņu nenoteikto formu.

---

## Finding 128

**Audit ID:** `DA-KURSS-FPR-0128`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** LOW
**Category:** GRAMMAR
**CURRENT_DA:** I ordene Schwester og am jüngsten udtales st som almindeligt st: Schwester (švester), jüngsten (jünksten).
**PROPOSED_DA:** I ordene Schwester og am jüngsten udtales st som et almindeligt st: Schwester (švester), jüngsten (jünksten).
**Problēma:** Efter »som« mangler den ubestemte artikel »et« i udtrykket »som et almindeligt st«.
**Audita pamatojums:** Efter »som« mangler den ubestemte artikel »et« i udtrykket »som et almindeligt st«.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** I ordene Schwester og am jüngsten udtales st som et almindeligt st: Schwester (švester), jüngsten (jünksten).

---

## Finding 129

**Audit ID:** `DA-KURSS-FPR-0129`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Adjektivers superlativgrad (Komparativ) dannes ud fra grundgraden (Positiv) med endelsen -er.
**PROPOSED_DA:** Adjektivers komparativgrad (Komparativ) dannes ud fra grundgraden (Positiv) med endelsen -er.
**Problēma:** Teksten kalder komparativgraden for superlativgrad, hvilket modsiger overskriften og den efterfølgende parentes.
**Audita pamatojums:** Teksten kalder komparativgraden for superlativgrad, hvilket modsiger overskriften og den efterfølgende parentes.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Adjektivers komparativgrad (Komparativ) dannes ud fra grundgraden (Positiv) med endelsen -er.

---

## Finding 130

**Audit ID:** `DA-KURSS-FPR-0130`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** De fleste enstavelsesadjektiver med stammevokalen a, o, u har en Umlaut i superlativgraden.
**PROPOSED_DA:** De fleste enstavelsesadjektiver med stammevokalen a, o, u har en Umlaut i komparativ- og superlativgraden.
**Problēma:** Umlaut forekommer normalt i både komparativ og superlativ, ikke kun i superlativ.
**Audita pamatojums:** Umlaut forekommer normalt i både komparativ og superlativ, ikke kun i superlativ.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** De fleste enstavelsesadjektiver med stammevokalen a, o, u har en Umlaut i komparativ- og superlativgraden.

---

## Finding 131

**Audit ID:** `DA-KURSS-FPR-0131`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[3].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** Den generelle grad (Superlativ) laves ved at tilføje endelsen -sten eller -esten til grundgraden og trafikordet am foran.
**PROPOSED_DA:** Den højeste grad (Superlativ) dannes ved at tilføje endelsen -sten eller -esten til grundgraden og sætte ordet am foran.
**Problēma:** »Generelle grad« og især »trafikordet« er fejloversættelser; den tyske grammatiske term er »ordet am«.
**Audita pamatojums:** »Generelle grad« og især »trafikordet« er fejloversættelser; den tyske grammatiske term er »ordet am«.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Den højeste grad (Superlativ) dannes ved at tilføje endelsen -sten eller -esten til grundgraden og sætte ordet am foran.

---

## Finding 132

**Audit ID:** `DA-KURSS-FPR-0132`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie heißt er?
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Hvad er hans navn?
**PROPOSED_DA:** Hvad hedder han?
**Problēma:** »Hvad hedder han?« er den naturlige og direkte danske ækvivalent til det tyske spørgsmål.
**Audita pamatojums:** »Hvad hedder han?« er den naturlige og direkte danske ækvivalent til det tyske spørgsmål.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hvad hedder han?

---

## Finding 133

**Audit ID:** `DA-KURSS-FPR-0133`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].lv`
**Field type:** `cardLv`
**DE (read-only):** Er heißt Johann.
**Severity:** HIGH
**Category:** NAMES
**CURRENT_DA:** Han hedder Jan.
**PROPOSED_DA:** Han hedder Johann.
**Problēma:** Det danske personnavn »Jan« matcher ikke det tyske »Johann« og bør ikke ændres til et andet navn.
**Audita pamatojums:** Det danske personnavn »Jan« matcher ikke det tyske »Johann« og bør ikke ændres til et andet navn.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “Jan” ir dabiski lokalizēts piemēra personvārds; nav jāmaina uz DE “Johann”.

---

## Finding 134

**Audit ID:** `DA-KURSS-FPR-0134`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[9].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie alt sind Sie?
**Severity:** MEDIUM
**Category:** REGISTER
**CURRENT_DA:** Hvor gammel er du?
**PROPOSED_DA:** Hvor gammel er De?
**Problēma:** Det tyske »Sie« er formelt, men det danske »du« er uformelt; tiltaleformen skal være konsekvent.
**Audita pamatojums:** Det tyske »Sie« er formelt, men det danske »du« er uformelt; tiltaleformen skal være konsekvent.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hvor gammel er De?

---

## Finding 135

**Audit ID:** `DA-KURSS-FPR-0135`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[12].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, Max ist nicht groß, Rudolf ist größer.
**Severity:** HIGH
**Category:** NAMES
**CURRENT_DA:** Nein, Max er ikke stor, Rudolph er større.
**PROPOSED_DA:** Nej, Max er ikke stor, Rudolf er større.
**Problēma:** »Nein« er et tysk remnant, og personnavnet skal matche det tyske »Rudolf«, ikke »Rudolph«.
**Audita pamatojums:** »Nein« er et tysk remnant, og personnavnet skal matche det tyske »Rudolf«, ikke »Rudolph«.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Nej, Max er ikke stor, Rudolph er større.

---

## Finding 136

**Audit ID:** `DA-KURSS-FPR-0136`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[13].lv`
**Field type:** `cardLv`
**DE (read-only):** Wer ist am größten?
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Hvad er det største?
**PROPOSED_DA:** Hvem er størst?
**Problēma:** »Hvad« og »det« spørger efter en ting, mens det tyske spørgsmål spørger, hvilken person der er størst.
**Audita pamatojums:** »Hvad« og »det« spørger efter en ting, mens det tyske spørgsmål spørger, hvilken person der er størst.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hvem er størst?

---

## Finding 137

**Audit ID:** `DA-KURSS-FPR-0137`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv`
**Field type:** `cardLv`
**DE (read-only):** Franz ist am größten.
**Severity:** HIGH
**Category:** NAMES
**CURRENT_DA:** Francis er den største.
**PROPOSED_DA:** Franz er den største.
**Problēma:** Det danske personnavn »Francis« matcher ikke det tyske »Franz«. Navnet skal bevares fra DE.
**Audita pamatojums:** Det danske personnavn »Francis« matcher ikke det tyske »Franz«. Navnet skal bevares fra DE.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “Francis” ir lokalizēts piemēra personvārds; nav jāmaina uz DE “Franz”.

---

## Finding 138

**Audit ID:** `DA-KURSS-FPR-0138`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[16].lv`
**Field type:** `cardLv`
**DE (read-only):** Die Mutter ist ebenso alt wie der Vater.
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Moderen er på samme alder som faderen.
**PROPOSED_DA:** Moderen er lige så gammel som faderen.
**Problēma:** Den nuværende formulering er forståelig, men »lige så gammel som« er mere idiomatisk og matcher »ebenso alt wie« direkte.
**Audita pamatojums:** Den nuværende formulering er forståelig, men »lige så gammel som« er mere idiomatisk og matcher »ebenso alt wie« direkte.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “Moderen er på samme alder som faderen.” ir gramatiski un semantiski korekts dāņu teikums; audita variants ir tikai stilistiska alternatīva.

---

## Finding 139

**Audit ID:** `DA-KURSS-FPR-0139`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Foredrag Tretten: Der Körper, kropsdele, motion, refleksive verber og flertal.
**PROPOSED_DA:** Lektion tretten: Der Körper, kropsdele, motion, refleksive verber og flertal.
**Problēma:** “Foredrag Tretten” betyder et foredrag, ikke en lektion, og passer ikke til lektionens titel eller kursuskontekst.
**Audita pamatojums:** “Foredrag Tretten” betyder et foredrag, ikke en lektion, og passer ikke til lektionens titel eller kursuskontekst.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Lektion tretten: Der Körper, kropsdele, motion, refleksive verber og flertal.

---

## Finding 140

**Audit ID:** `DA-KURSS-FPR-0140`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** das Bein
**Severity:** LOW
**Category:** CONSISTENCY
**CURRENT_DA:** das Bein — ben
**PROPOSED_DA:** das Bein — benet
**Problēma:** De øvrige tyske substantiver gengives i bestemt form; “ben” er ubestemt form og bryder derfor mønstret.
**Audita pamatojums:** De øvrige tyske substantiver gengives i bestemt form; “ben” er ubestemt form og bryder derfor mønstret.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. Vārdnīcas/uzskaitījuma ekvivalents “ben” ir korekts; nav pamata piespiest noteikto formu tikai DE artikula dēļ.

---

## Finding 141

**Audit ID:** `DA-KURSS-FPR-0141`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** die Beine
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** die Beine — ben
**PROPOSED_DA:** die Beine — benene
**Problēma:** “Ben” er ubestemt flertal eller ubestemt ental; den bestemte danske ækvivalent til die Beine er “benene”.
**Audita pamatojums:** “Ben” er ubestemt flertal eller ubestemt ental; den bestemte danske ækvivalent til die Beine er “benene”.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “ben” ir korekta dāņu daudzskaitļa pamatforma; DE artikuls automātiski nenosaka dāņu noteikto formu.

---

## Finding 142

**Audit ID:** `DA-KURSS-FPR-0142`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** die Füße
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** die Füße — fødder
**PROPOSED_DA:** die Füße — fødderne
**Problēma:** Den danske oversættelse mangler bestemt endelse; “die Füße” svarer til “fødderne”, ikke “fødder”.
**Audita pamatojums:** Den danske oversættelse mangler bestemt endelse; “die Füße” svarer til “fødderne”, ikke “fødder”.
**Avots:** luna

**Statuss:** NELABOT

**OWNER_DECISION:** Saglabāt CURRENT_DA. “fødder” ir korekta dāņu daudzskaitļa pamatforma; DE artikuls automātiski nenosaka dāņu noteikto formu.

---

## Finding 143

**Audit ID:** `DA-KURSS-FPR-0143`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Nogle verber med stammevokalen a eller au i nutid 2. og 3. person ental har en Umlaut.
**PROPOSED_DA:** Nogle verber med stammevokalen a eller au i nutid 2. og 3. person ental har en umlaut.
**Problēma:** Det tyske låneord “umlaut” skrives normalt med lille begyndelsesbogstav på dansk, især når overskriften allerede bruger “Omlyd”.
**Audita pamatojums:** Det tyske låneord “umlaut” skrives normalt med lille begyndelsesbogstav på dansk, især når overskriften allerede bruger “Omlyd”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Nogle verber med stammevokalen a eller au i nutid 2. og 3. person ental har en umlaut.

---

## Finding 144

**Audit ID:** `DA-KURSS-FPR-0144`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** Pronomenet jeder går i cirkler som artiklerne der / die / das.
**PROPOSED_DA:** Pronomenet jeder bøjes som artiklerne der / die / das.
**Problēma:** “Går i cirkler” er en fejlagtig oversættelse af betydningen “bøjes”.
**Audita pamatojums:** “Går i cirkler” er en fejlagtig oversættelse af betydningen “bøjes”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Pronomenet jeder bøjes som artiklerne der / die / das.

---

## Finding 145

**Audit ID:** `DA-KURSS-FPR-0145`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[12].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** CONSISTENCY
**CURRENT_DA:** Feminine navneord dannet med -in får -nen i flertal.
**PROPOSED_DA:** Hunkønsnavneord dannet med -in får -nen i flertal.
**Problēma:** “Feminine navneord” er forståeligt, men afviger fra den danske fagterm “hunkønsnavneord” i overskriften.
**Audita pamatojums:** “Feminine navneord” er forståeligt, men afviger fra den danske fagterm “hunkønsnavneord” i overskriften.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Hunkønsnavneord dannet med -in får -nen i flertal.

---

## Finding 146

**Audit ID:** `DA-KURSS-FPR-0146`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** h i ordet halten udtales.
**PROPOSED_DA:** h'et i ordet halten udtales.
**Problēma:** Bogstavet bør normalt markeres med den danske bestemte form “h'et”.
**Audita pamatojums:** Bogstavet bør normalt markeres med den danske bestemte form “h'et”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** h'et i ordet halten udtales.

---

## Finding 147

**Audit ID:** `DA-KURSS-FPR-0147`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** h i ordet fahren markerer vokalens længde.
**PROPOSED_DA:** h'et i ordet fahren markerer vokalens længde.
**Problēma:** Bogstavet bør normalt markeres med den danske bestemte form “h'et”.
**Audita pamatojums:** Bogstavet bør normalt markeres med den danske bestemte form “h'et”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** h'et i ordet fahren markerer vokalens længde.

---

## Finding 148

**Audit ID:** `DA-KURSS-FPR-0148`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** a i ordet halten udtales kort: halten.
**PROPOSED_DA:** a'et i ordet halten udtales kort: halten.
**Problēma:** Bogstavet bør normalt markeres med den danske bestemte form “a'et”.
**Audita pamatojums:** Bogstavet bør normalt markeres med den danske bestemte form “a'et”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** a'et i ordet halten udtales kort: halten.

---

## Finding 149

**Audit ID:** `DA-KURSS-FPR-0149`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** a i ordet tragen udtales langt: tragen.
**PROPOSED_DA:** a'et i ordet tragen udtales langt: tragen.
**Problēma:** Bogstavet bør normalt markeres med den danske bestemte form “a'et”.
**Audita pamatojums:** Bogstavet bør normalt markeres med den danske bestemte form “a'et”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** a'et i ordet tragen udtales langt: tragen.

---

## Finding 150

**Audit ID:** `DA-KURSS-FPR-0150`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversættelse
**Problēma:** Som dansk sektionsoverskrift er substantivet “Oversættelse” mere idiomatisk end infinitiven “Oversætte”.
**Audita pamatojums:** Som dansk sektionsoverskrift er substantivet “Oversættelse” mere idiomatisk end infinitiven “Oversætte”.
**Avots:** luna

**Statuss:** LABOT

**OWNER_DECISION:** Oversættelse

---
## OWNER kopsavilkums

- Pārskatīti: **50/50**
- LABOT: **37**
- NELABOT: **13**
- FALSE_POSITIVE: **0**
- NEEDS_SOURCE_REVIEW: **0**
- DE izmaiņas: **0**
