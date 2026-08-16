# DA–DE Kurss — OWNER review — final post-repair Group 06

Avots: `reports/da-kurss-final-post-repair-audit.md`
Findings: **251–300** (50 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir audita ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 251

**Audit ID:** `DA-KURSS-FPR-0251`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** wischen
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** wischen — at tørre / aftørre
**PROPOSED_DA:** wischen — at tørre af / aftørre
**Problēma:** "Tørre" alene betyder normalt dry; det tyske verbum bør her gengives som "tørre af".
**Audita pamatojums:** "Tørre" alene betyder normalt dry; det tyske verbum bør her gengives som "tørre af".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 252

**Audit ID:** `DA-KURSS-FPR-0252`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Præpositionen mit står altid med dativkasus. dansk: mit = med.
**PROPOSED_DA:** Præpositionen mit styrer altid dativ. På dansk betyder mit = med.
**Problēma:** »Står med dativkasus« og »dansk:« er ikke idiomatisk dansk i denne grammatiske forklaring.
**Audita pamatojums:** »Står med dativkasus« og »dansk:« er ikke idiomatisk dansk i denne grammatiske forklaring.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 253

**Audit ID:** `DA-KURSS-FPR-0253`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Det tyske spørgsmål om med hvem/med hvad udtrykkes på to måder: mit wem? — om personer, womit? — om ting.
**PROPOSED_DA:** På tysk udtrykkes spørgsmålet »med hvem/med hvad?« på to måder: mit wem? bruges om personer, og womit? bruges om ting.
**Problēma:** Formuleringen »spørgsmålet om med hvem/med hvad« er klodset og mangler en tydelig syntaktisk parallel.
**Audita pamatojums:** Formuleringen »spørgsmålet om med hvem/med hvad« er klodset og mangler en tydelig syntaktisk parallel.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 254

**Audit ID:** `DA-KURSS-FPR-0254`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Fegen og wischen mener begge at feje, men brugen er anderledes.
**PROPOSED_DA:** Fegen betyder at feje, mens wischen betyder at tørre eller viske; de bruges forskelligt.
**Problēma:** Wischen betyder ikke »at feje«, men at tørre eller viske. Den nuværende forklaring sammenblander de to verbers betydning.
**Audita pamatojums:** Wischen betyder ikke »at feje«, men at tørre eller viske. Den nuværende forklaring sammenblander de to verbers betydning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 255

**Audit ID:** `DA-KURSS-FPR-0255`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Attende foredrag: wohin / wo, Akkusativ eller Dativ med en / in / auf.
**PROPOSED_DA:** Attende lektion: wohin / wo, Akkusativ eller Dativ med an / in / auf.
**Problēma:** "foredrag" conflicts with the lesson title and "en" is a typo for the German preposition "an".
**Audita pamatojums:** "foredrag" conflicts with the lesson title and "en" is a typo for the German preposition "an".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 256

**Audit ID:** `DA-KURSS-FPR-0256`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Navne
**PROPOSED_DA:** Ord
**Problēma:** "Navne" means names, but this section contains vocabulary items; "Ord" is the appropriate Danish heading.
**Audita pamatojums:** "Navne" means names, but this section contains vocabulary items; "Ord" is the appropriate Danish heading.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 257

**Audit ID:** `DA-KURSS-FPR-0257`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** die Krüge
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** die Krüge — mugs
**PROPOSED_DA:** die Krüge — kander
**Problēma:** "mugs" is an English remnant and does not translate German "Krüge"; the Danish plural is "kander".
**Audita pamatojums:** "mugs" is an English remnant and does not translate German "Krüge"; the Danish plural is "kander".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 258

**Audit ID:** `DA-KURSS-FPR-0258`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[21]`
**Field type:** `sectionItem`
**DE (read-only):** die Diele
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** die Diele — gulv
**PROPOSED_DA:** die Diele — entré
**Problēma:** German "Diele" means an entrance hall or hallway here, not a floor; "gulv" translates "Fußboden".
**Audita pamatojums:** German "Diele" means an entrance hall or hallway here, not a floor; "gulv" translates "Fußboden".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 259

**Audit ID:** `DA-KURSS-FPR-0259`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** GRAMMAR
**CURRENT_DA:** Præpositioner an, in, auf kan stå både med Akkusativ og med Dativ.
**PROPOSED_DA:** Præpositionerne an, in og auf kan bruges både med Akkusativ og med Dativ.
**Problēma:** The original has number agreement and omits "og" in the list; "kan bruges" is the natural Danish formulation.
**Audita pamatojums:** The original has number agreement and omits "og" in the list; "kan bruges" is the natural Danish formulation.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 260

**Audit ID:** `DA-KURSS-FPR-0260`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Hvis handlingen angiver en retnings- eller stedsændring, bruges Akkusativ. Spørgsmål: wohin? — hvorhen?
**PROPOSED_DA:** Hvis handlingen angiver en retning eller en ændring af placering, bruges Akkusativ. Spørgsmålet er: wohin? — hvorhen?
**Problēma:** "retnings- eller stedsændring" is awkward Danish and the sentence lacks the natural phrase "Spørgsmålet er".
**Audita pamatojums:** "retnings- eller stedsændring" is awkward Danish and the sentence lacks the natural phrase "Spørgsmålet er".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 261

**Audit ID:** `DA-KURSS-FPR-0261`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Navneord står normalt uden en artikel.
**PROPOSED_DA:** Stofnavne står normalt uden en artikel.
**Problēma:** The section concerns mass nouns, not nouns in general; "Navneord" overgeneralizes the grammar rule.
**Audita pamatojums:** The section concerns mass nouns, not nouns in general; "Navneord" overgeneralizes the grammar rule.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 262

**Audit ID:** `DA-KURSS-FPR-0262`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[6].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Hvis stoffet er nævnt i en bestemt mængde eller et bestemt sted, så bruges artiklen.
**PROPOSED_DA:** Hvis stoffet omtales i en bestemt mængde eller på et bestemt sted, bruges artiklen.
**Problēma:** The preposition is wrong for a place ("på"), and "omtales" is the appropriate verb in this grammatical explanation.
**Audita pamatojums:** The preposition is wrong for a place ("på"), and "omtales" is the appropriate verb in this grammatical explanation.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 263

**Audit ID:** `DA-KURSS-FPR-0263`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Hvis præpositionen i ikke oversættes som "in", men udtrykker en placering, kan den oversættes med lokativ.
**PROPOSED_DA:** Hvis præpositionen in ikke oversættes som "ind i", men udtrykker en placering, kan den oversættes med lokativ.
**Problēma:** The text discusses German "in" and must distinguish the directional meaning "ind i" from the locative meaning.
**Audita pamatojums:** The text discusses German "in" and must distinguish the directional meaning "ind i" from the locative meaning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 264

**Audit ID:** `DA-KURSS-FPR-0264`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[8].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Gamle former som dem Tische, dem Kruge, im Walde bruges ofte kortere i dag: dem Tisch, dem Krug, im Wald.
**PROPOSED_DA:** Gamle former som dem Tische, dem Kruge og im Walde bruges i dag ofte i en kortere form: dem Tisch, dem Krug og im Wald.
**Problēma:** The original phrasing "bruges ofte kortere" is not idiomatic Danish; the forms are used "i en kortere form".
**Audita pamatojums:** The original phrasing "bruges ofte kortere" is not idiomatic Danish; the forms are used "i en kortere form".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 265

**Audit ID:** `DA-KURSS-FPR-0265`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[3].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** I ordet wohin udtales h: wo
**Severity:** LOW
**Category:** GRAMMAR
**CURRENT_DA:** I ordet wohin udtales h: wo-hin.
**PROPOSED_DA:** I ordet wohin udtales h’et: wo-hin.
**Problēma:** Kolonet efter h er grammatisk unaturligt; ejestedordet h’et gør formuleringen korrekt på dansk.
**Audita pamatojums:** Kolonet efter h er grammatisk unaturligt; ejestedordet h’et gør formuleringen korrekt på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 266

**Audit ID:** `DA-KURSS-FPR-0266`
**Lesson/ID:** `lesson18`
**Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** LOW
**Category:** GRAMMAR
**CURRENT_DA:** I ordet wo er o langt: wo.
**PROPOSED_DA:** I ordet wo er o’et langt: wo.
**Problēma:** Bogstavnavnet skal have bestemt form: o’et.
**Audita pamatojums:** Bogstavnavnet skal have bestemt form: o’et.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 267

**Audit ID:** `DA-KURSS-FPR-0267`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Wechselpræpositionen: vor, hinter, unter, über, neben, zwischen
**PROPOSED_DA:** Skiftepræpositioner: vor, hinter, unter, über, neben, zwischen
**Problēma:** Wechselpræpositionen er tysk og ikke korrekt dansk; lektionens titel bør være på dansk.
**Audita pamatojums:** Wechselpræpositionen er tysk og ikke korrekt dansk; lektionens titel bør være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 268

**Audit ID:** `DA-KURSS-FPR-0268`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** REGISTER
**CURRENT_DA:** Nittende forelæsning: vor, hinter, unter, über, neben, zwischen med Akkusativ eller Dativ.
**PROPOSED_DA:** Nittende lektion: vor, hinter, unter, über, neben, zwischen med Akkusativ eller Dativ.
**Problēma:** Forelæsning betyder lecture og passer ikke til en sprogkursuslektion; lektion er den naturlige betegnelse.
**Audita pamatojums:** Forelæsning betyder lecture og passer ikke til en sprogkursuslektion; lektion er den naturlige betegnelse.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 269

**Audit ID:** `DA-KURSS-FPR-0269`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Navne
**PROPOSED_DA:** Ord
**Problēma:** Navne betyder names, mens afsnittet er en ordliste; den danske oversættelse bør være Ord.
**Audita pamatojums:** Navne betyder names, mens afsnittet er en ordliste; den danske oversættelse bør være Ord.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 270

**Audit ID:** `DA-KURSS-FPR-0270`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[37]`
**Field type:** `sectionItem`
**DE (read-only):** so
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** so — so
**PROPOSED_DA:** så — så
**Problēma:** Det tyske adverbium »so« oversættes til dansk »så«, ikke »so«.
**Audita pamatojums:** Det tyske adverbium »so« oversættes til dansk »så«, ikke »so«.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 271

**Audit ID:** `DA-KURSS-FPR-0271`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[0].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Wechselpräpositionen
**PROPOSED_DA:** Vekselpræpositioner
**Problēma:** Overskriften står på tysk; den bør oversættes til dansk.
**Audita pamatojums:** Overskriften står på tysk; den bør oversættes til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 272

**Audit ID:** `DA-KURSS-FPR-0272`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Hvis der er en retning/bevægelse til et sted, er spørgsmålet, hvorhen? og bruger Akkusativ.
**PROPOSED_DA:** Hvis der er en retning eller bevægelse hen imod et sted, er spørgsmålet »wohin?«, og der bruges Akkusativ.
**Problēma:** Det tyske målord »wohin?« erstattes fejlagtigt af dansk »hvorhen?«, og formuleringen er grammatisk tung.
**Audita pamatojums:** Det tyske målord »wohin?« erstattes fejlagtigt af dansk »hvorhen?«, og formuleringen er grammatisk tung.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 273

**Audit ID:** `DA-KURSS-FPR-0273`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[2].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Hvis der er en placering, er spørgsmålet hvor? og bruger dativ.
**PROPOSED_DA:** Hvis der er tale om en placering, er spørgsmålet »wo?«, og der bruges Dativ.
**Problēma:** Det tyske målord »wo?« bør stå uændret i forklaringen, og sætningen bør formuleres mere idiomatisk.
**Audita pamatojums:** Det tyske målord »wo?« bør stå uændret i forklaringen, og sætningen bør formuleres mere idiomatisk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 274

**Audit ID:** `DA-KURSS-FPR-0274`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[6].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Gehen - gå, når handlingen betyder at gå kontinuerligt. treten - at gå ind, at nærme sig, at træde på, hvis gang ender med en pause i handlingen.
**PROPOSED_DA:** Gehen betyder »at gå«, når handlingen foregår kontinuerligt. Treten betyder »at gå ind«, »at nærme sig« eller »at træde på«, når gangen ender med en pause i handlingen.
**Problēma:** Sætningen har upræcis tegnsætning, inkonsekvent stort begyndelsesbogstav og den unaturlige formulering »hvis gang«.
**Audita pamatojums:** Sætningen har upræcis tegnsætning, inkonsekvent stort begyndelsesbogstav og den unaturlige formulering »hvis gang«.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 275

**Audit ID:** `DA-KURSS-FPR-0275`
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** LOW
**Category:** CONSISTENCY
**CURRENT_DA:** I ordet der Strauch udtales st som sht.
**PROPOSED_DA:** I ordet der Strauch udtales st som št.
**Problēma:** Den fonetiske gengivelse er inkonsekvent med »št« i den foregående udtaleangivelse.
**Audita pamatojums:** Den fonetiske gengivelse er inkonsekvent med »št« i den foregående udtaleangivelse.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 276

**Audit ID:** `DA-KURSS-FPR-0276`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Navne
**PROPOSED_DA:** Ordforråd
**Problēma:** »Navne« betyder navne på personer eller ting; sektionen er et ordforrådsafsnit og bør hedde »Ordforråd«.
**Audita pamatojums:** »Navne« betyder navne på personer eller ting; sektionen er et ordforrådsafsnit og bør hedde »Ordforråd«.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 277

**Audit ID:** `DA-KURSS-FPR-0277`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** der Boden
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Boden — attic / floor / ground
**PROPOSED_DA:** der Boden — loft / gulv / jord
**Problēma:** De engelske oversættelser attic, floor og ground er ikke oversat til dansk.
**Audita pamatojums:** De engelske oversættelser attic, floor og ground er ikke oversat til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 278

**Audit ID:** `DA-KURSS-FPR-0278`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[20]`
**Field type:** `sectionItem`
**DE (read-only):** der Ofen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Ofen — oven
**PROPOSED_DA:** der Ofen — ovn
**Problēma:** Oven er et engelsk ord og ikke den danske oversættelse af der Ofen.
**Audita pamatojums:** Oven er et engelsk ord og ikke den danske oversættelse af der Ofen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 279

**Audit ID:** `DA-KURSS-FPR-0279`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Dativs ar wann?
**PROPOSED_DA:** Dativ ved wann?
**Problēma:** ar er lettisk og hører ikke hjemme i den danske overskrift.
**Audita pamatojums:** ar er lettisk og hører ikke hjemme i den danske overskrift.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 280

**Audit ID:** `DA-KURSS-FPR-0280`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Tidsord, der besvarer spørgsmålet wann? i lektion 19 og 20
**PROPOSED_DA:** Tidsord, der besvarer spørgsmålet wann? i lektion 19 og 20, står med dativ. Dativ svarer ikke kun på wo? — hvor?, men også på wann? — hvornår?
**Problēma:** Teksten nævner ikke, at tidsordene står med dativ, eller at dativ også svarer på wann?; den er derfor ufuldstændig.
**Audita pamatojums:** Teksten nævner ikke, at tidsordene står med dativ, eller at dativ også svarer på wann?; den er derfor ufuldstændig.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 281

**Audit ID:** `DA-KURSS-FPR-0281`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** I verbet tragen i 2. og 3. person ental tager stammevokalen a Umlaut.
**PROPOSED_DA:** I verbet tragen får stammevokalen a i 2. og 3. person ental en umlaut.
**Problēma:** Udtrykket tager stammevokalen a Umlaut er grammatisk og idiomatisk forkert på dansk.
**Audita pamatojums:** Udtrykket tager stammevokalen a Umlaut er grammatisk og idiomatisk forkert på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 282

**Audit ID:** `DA-KURSS-FPR-0282`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** I ordene der Ofen, der Boden er o langt.
**PROPOSED_DA:** I ordene der Ofen og der Boden er o'et langt.
**Problēma:** Formuleringen er grammatisk unaturlig; vokalen bør omtales som o'et og forbindes med og.
**Audita pamatojums:** Formuleringen er grammatisk unaturlig; vokalen bør omtales som o'et og forbindes med og.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 283

**Audit ID:** `DA-KURSS-FPR-0283`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** sch udtales som sh: der Schornstein, der Mensch.
**PROPOSED_DA:** sch udtales som sh: der Schornstein, der Mensch.
**Problēma:** Ingen reel fejl; formuleringen er acceptabel som en enkel udtaleangivelse.
**Audita pamatojums:** Ingen reel fejl; formuleringen er acceptabel som en enkel udtaleangivelse.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 284

**Audit ID:** `DA-KURSS-FPR-0284`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** I ordene das Haus, das Holz udtales h tydeligt.
**PROPOSED_DA:** I ordene das Haus og das Holz udtales h'et tydeligt.
**Problēma:** Der mangler artikel og korrekt konstruktion omkring bogstavet h; den nuværende formulering er grammatisk fejlbehæftet.
**Audita pamatojums:** Der mangler artikel og korrekt konstruktion omkring bogstavet h; den nuværende formulering er grammatisk fejlbehæftet.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 285

**Audit ID:** `DA-KURSS-FPR-0285`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** I ordene die Wohnung, wohnen markerer h lang vokal og udtales ikke.
**PROPOSED_DA:** I ordene die Wohnung og wohnen markerer h'et en lang vokal og udtales ikke.
**Problēma:** Der mangler artikel ved h'et og en ubestemt artikel foran lang vokal; forbindelsen mellem eksemplerne er også forkert.
**Audita pamatojums:** Der mangler artikel ved h'et og en ubestemt artikel foran lang vokal; forbindelsen mellem eksemplerne er også forkert.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 286

**Audit ID:** `DA-KURSS-FPR-0286`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[2].task`
**Field type:** `cardTask`
**DE (read-only):** Der Schornsteinfeger steht auf dem Dach.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 287

**Audit ID:** `DA-KURSS-FPR-0287`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[3].task`
**Field type:** `cardTask`
**DE (read-only):** Der Knecht arbeitet auf dem Feld.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 288

**Audit ID:** `DA-KURSS-FPR-0288`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[4].task`
**Field type:** `cardTask`
**DE (read-only):** Die Magd arbeitet auf der Wiese.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 289

**Audit ID:** `DA-KURSS-FPR-0289`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[5].task`
**Field type:** `cardTask`
**DE (read-only):** Der Holzhauer sägt das Holz in der Scheune.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 290

**Audit ID:** `DA-KURSS-FPR-0290`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[6].task`
**Field type:** `cardTask`
**DE (read-only):** Der Schüler stellt das Glas auf die Kommode.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 291

**Audit ID:** `DA-KURSS-FPR-0291`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[7].task`
**Field type:** `cardTask`
**DE (read-only):** Der Jäger geht in den Wald.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 292

**Audit ID:** `DA-KURSS-FPR-0292`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[8].task`
**Field type:** `cardTask`
**DE (read-only):** Die Katze kriecht unter die Bank.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 293

**Audit ID:** `DA-KURSS-FPR-0293`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[9].task`
**Field type:** `cardTask`
**DE (read-only):** Der Ball rollt unter den Schrank.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 294

**Audit ID:** `DA-KURSS-FPR-0294`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[10].task`
**Field type:** `cardTask`
**DE (read-only):** Dieser Mann geht über die Brücke.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 295

**Audit ID:** `DA-KURSS-FPR-0295`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[11].task`
**Field type:** `cardTask`
**DE (read-only):** Jener Mann steht unter der Brücke.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 296

**Audit ID:** `DA-KURSS-FPR-0296`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[12].task`
**Field type:** `cardTask`
**DE (read-only):** Ein Spiegel hängt an der Wand.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 297

**Audit ID:** `DA-KURSS-FPR-0297`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[13].task`
**Field type:** `cardTask`
**DE (read-only):** Der Bruder stellt die Vase vor den Spiegel.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 298

**Audit ID:** `DA-KURSS-FPR-0298`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[14].task`
**Field type:** `cardTask`
**DE (read-only):** Das Kind geht gern auf die Straße.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 299

**Audit ID:** `DA-KURSS-FPR-0299`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[15].task`
**Field type:** `cardTask`
**DE (read-only):** Das Kind spielt gern auf der Straße.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 300

**Audit ID:** `DA-KURSS-FPR-0300`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[16].task`
**Field type:** `cardTask`
**DE (read-only):** Das Kind spielt gern in dem Garten.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vælg den rigtige kasus: wo/wann → dativ, wohin → akkusativ.
**PROPOSED_DA:** Vælg den rigtige kasus: wo → dativ, wohin → akkusativ.
**Problēma:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Audita pamatojums:** “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---
