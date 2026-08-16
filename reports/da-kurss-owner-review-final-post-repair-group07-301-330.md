# DA–DE Kurss — OWNER review — final post-repair Group 07

Avots: `reports/da-kurss-final-post-repair-audit.md`
Findings: **301–330** (30 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir audita ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 301

**Audit ID:** `DA-KURSS-FPR-0301`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Wo sind zehn Wohnungen?
**Severity:** LOW
**Category:** SEMANTICS
**CURRENT_DA:** Hvor er de ti lejligheder?
**PROPOSED_DA:** Hvor er ti lejligheder?
**Problēma:** “de ti lejligheder” betyder “de ti bestemte lejligheder”, mens den tyske tekst blot nævner ti lejligheder.
**Audita pamatojums:** “de ti lejligheder” betyder “de ti bestemte lejligheder”, mens den tyske tekst blot nævner ti lejligheder.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 302

**Audit ID:** `DA-KURSS-FPR-0302`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[11].lv`
**Field type:** `cardLv`
**DE (read-only):** Wohin steigt der Schornsteinfeger?
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Hvor går skorstensfejeren hen?
**PROPOSED_DA:** Hvor klatrer skorstensfejeren hen?
**Problēma:** Det tyske “steigt” betyder, at skorstensfejeren klatrer eller stiger, ikke blot går.
**Audita pamatojums:** Det tyske “steigt” betyder, at skorstensfejeren klatrer eller stiger, ikke blot går.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 303

**Audit ID:** `DA-KURSS-FPR-0303`
**Lesson/ID:** `lesson20`
**Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[21].lv`
**Field type:** `cardLv`
**DE (read-only):** Wohin steckst du das Holz?
**Severity:** LOW
**Category:** SEMANTICS
**CURRENT_DA:** Hvor putter du brændet?
**PROPOSED_DA:** Hvor putter du brændet hen?
**Problēma:** “Hvor ... hen?” gengiver tysk “Wohin” tydeligere og angiver retning, som den nuværende formulering udelader.
**Audita pamatojums:** “Hvor ... hen?” gengiver tysk “Wohin” tydeligere og angiver retning, som den nuværende formulering udelader.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 304

**Audit ID:** `DA-KURSS-FPR-0304`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Navne
**PROPOSED_DA:** Ord
**Problēma:** Afsnittet indeholder gloser og ikke person- eller stednavne; “Ord” passer til indholdet.
**Audita pamatojums:** Afsnittet indeholder gloser og ikke person- eller stednavne; “Ord” passer til indholdet.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 305

**Audit ID:** `DA-KURSS-FPR-0305`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[19]`
**Field type:** `sectionItem`
**DE (read-only):** fleißig
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** fleißig — flittigt
**PROPOSED_DA:** fleißig — flittig
**Problēma:** Som opslagsord er fleißig et adjektiv, så den danske grundform bør være flittig, ikke neutrum/adverbiet flittigt.
**Audita pamatojums:** Som opslagsord er fleißig et adjektiv, så den danske grundform bør være flittig, ikke neutrum/adverbiet flittigt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 306

**Audit ID:** `DA-KURSS-FPR-0306`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** Forholdet von kan smelte sammen med artiklen.
**PROPOSED_DA:** Præpositionen von kan smelte sammen med artiklen.
**Problēma:** von er en præposition, ikke et forhold. Den nuværende formulering bruger et forkert dansk grammatisk fagudtryk.
**Audita pamatojums:** von er en præposition, ikke et forhold. Den nuværende formulering bruger et forkert dansk grammatisk fagudtryk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 307

**Audit ID:** `DA-KURSS-FPR-0307`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[10].lv`
**Field type:** `cardLv`
**DE (read-only):** Wir kommen vom Freunde.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vi kommer fra en ven.
**PROPOSED_DA:** Vi kommer fra vennen.
**Problēma:** Det tyske vom angiver den bestemte ven; den danske formulering bruger ubestemt artikel.
**Audita pamatojums:** Det tyske vom angiver den bestemte ven; den danske formulering bruger ubestemt artikel.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 308

**Audit ID:** `DA-KURSS-FPR-0308`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[11].lv`
**Field type:** `cardLv`
**DE (read-only):** Wir kommen von der Freundin.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Vi kommer fra en kæreste.
**PROPOSED_DA:** Vi kommer fra kæresten.
**Problēma:** Den tyske præposition von der refererer til en bestemt kvindelig ven eller kæreste; dansk har ubestemt artikel.
**Audita pamatojums:** Den tyske præposition von der refererer til en bestemt kvindelig ven eller kæreste; dansk har ubestemt artikel.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 309

**Audit ID:** `DA-KURSS-FPR-0309`
**Lesson/ID:** `lesson21`
**Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[13].lv`
**Field type:** `cardLv`
**DE (read-only):** Alle kommen vom Freunde, von der Freundin, vom Lehrer.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Alle kommer fra en ven, fra en kæreste, fra en lærer.
**PROPOSED_DA:** Alle kommer fra vennen, fra kæresten, fra læreren.
**Problēma:** Alle tre tyske præpositionsformer er bestemte; dansk bruger fejlagtigt ubestemte former i de første to led og sidste led.
**Audita pamatojums:** Alle tre tyske præpositionsformer er bestemte; dansk bruger fejlagtigt ubestemte former i de første to led og sidste led.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 310

**Audit ID:** `DA-KURSS-FPR-0310`
**Lesson/ID:** `lesson2`
**Path:** `lesson2TrainingCardsDa[5].front`
**Field type:** `trainingFront`
**DE (read-only):** Singen Paul und Marie?
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Synger Paul og Maria?
**PROPOSED_DA:** Synger Paul og Marie?
**Problēma:** Det tyske personnavn Marie er ændret til Maria i den danske tekst.
**Audita pamatojums:** Det tyske personnavn Marie er ændret til Maria i den danske tekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 311

**Audit ID:** `DA-KURSS-FPR-0311`
**Lesson/ID:** `lesson2`
**Path:** `lesson2TrainingCardsDa[10].front`
**Field type:** `trainingFront`
**DE (read-only):** Ja, wir zeichnen, aber Marie spielt.
**Severity:** MEDIUM
**Category:** NAMES
**CURRENT_DA:** Ja, vi tegner, men Maria spiller.
**PROPOSED_DA:** Ja, vi tegner, men Marie spiller.
**Problēma:** Det tyske personnavn Marie er ændret til Maria i den danske tekst.
**Audita pamatojums:** Det tyske personnavn Marie er ændret til Maria i den danske tekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 312

**Audit ID:** `DA-KURSS-FPR-0312`
**Lesson/ID:** `lesson3`
**Path:** `lesson3TrainingCardsDa[0].front`
**Field type:** `trainingFront`
**DE (read-only):** Rechnest du?
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Tæller du?
**PROPOSED_DA:** Regner du?
**Problēma:** Rechnen betyder her at regne/beregne, ikke at tælle.
**Audita pamatojums:** Rechnen betyder her at regne/beregne, ikke at tælle.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 313

**Audit ID:** `DA-KURSS-FPR-0313`
**Lesson/ID:** `lesson3`
**Path:** `lesson3TrainingCardsDa[2].front`
**Field type:** `trainingFront`
**DE (read-only):** Was steht dort?
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Hvad står der?
**PROPOSED_DA:** Hvad står derovre?
**Problēma:** Hvad står der? forstås normalt som et spørgsmål om tekst; derovre gengiver her stedhenvisningen dort.
**Audita pamatojums:** Hvad står der? forstås normalt som et spørgsmål om tekst; derovre gengiver her stedhenvisningen dort.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 314

**Audit ID:** `DA-KURSS-FPR-0314`
**Lesson/ID:** `lesson3`
**Path:** `lesson3TrainingCardsDa[3].front`
**Field type:** `trainingFront`
**DE (read-only):** Dort steht ein Tisch.
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Der er et bord.
**PROPOSED_DA:** Der står et bord.
**Problēma:** Den danske tekst ændrer står til er og mister dermed den tyske betydning om bordets placering.
**Audita pamatojums:** Den danske tekst ændrer står til er og mister dermed den tyske betydning om bordets placering.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 315

**Audit ID:** `DA-KURSS-FPR-0315`
**Lesson/ID:** `lesson4`
**Path:** `lesson4TrainingCardsDa[0].front`
**Field type:** `trainingFront`
**DE (read-only):** Das Mädchen nimmt einen Federhalter.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Pigen tager en fyldepenholder.
**PROPOSED_DA:** Pigen tager en penneholder.
**Problēma:** DA uses an overly specific and inconsistent term; German Federhalter is naturally rendered as penneholder here.
**Audita pamatojums:** DA uses an overly specific and inconsistent term; German Federhalter is naturally rendered as penneholder here.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 316

**Audit ID:** `DA-KURSS-FPR-0316`
**Lesson/ID:** `lesson4`
**Path:** `lesson4TrainingCardsDa[1].front`
**Field type:** `trainingFront`
**DE (read-only):** Der Federhalter ist nicht weiß, er ist schwarz.
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** Fyldepenholderen er ikke hvid, den er sort.
**PROPOSED_DA:** Penneholderen er ikke hvid, den er sort.
**Problēma:** The noun should be consistent with the corrected term penneholder used elsewhere for Federhalter.
**Audita pamatojums:** The noun should be consistent with the corrected term penneholder used elsewhere for Federhalter.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 317

**Audit ID:** `DA-KURSS-FPR-0317`
**Lesson/ID:** `lesson4`
**Path:** `lesson4TrainingCardsDa[2].front`
**Field type:** `trainingFront`
**DE (read-only):** Paul nimmt eine Feder.
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Paul tager fjeren.
**PROPOSED_DA:** Paul tager en fjer.
**Problēma:** German has an indefinite article; DA incorrectly uses the definite form fjeren.
**Audita pamatojums:** German has an indefinite article; DA incorrectly uses the definite form fjeren.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 318

**Audit ID:** `DA-KURSS-FPR-0318`
**Lesson/ID:** `lesson4`
**Path:** `lesson4TrainingCardsDa[11].front`
**Field type:** `trainingFront`
**DE (read-only):** Es geht hinaus und arbeitet.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hun går ud og arbejder.
**PROPOSED_DA:** 
**Problēma:** DA correctly uses Hun according to the context and source reference; DE incorrectly uses the neuter pronoun Es.
**Audita pamatojums:** DA correctly uses Hun according to the context and source reference; DE incorrectly uses the neuter pronoun Es.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 319

**Audit ID:** `DA-KURSS-FPR-0319`
**Lesson/ID:** `lesson4`
**Path:** `lesson4TrainingCardsDa[13].front`
**Field type:** `trainingFront`
**DE (read-only):** Olga zeigt ein Buch.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Olga viser bogen frem.
**PROPOSED_DA:** Olga viser en bog frem.
**Problēma:** DA uses the definite bogen, whereas German specifies an indefinite book.
**Audita pamatojums:** DA uses the definite bogen, whereas German specifies an indefinite book.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 320

**Audit ID:** `DA-KURSS-FPR-0320`
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsDa[9].front`
**Field type:** `trainingFront`
**DE (read-only):** Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut.
**Severity:** MEDIUM
**Category:** CONSISTENCY
**CURRENT_DA:** Nej, eleven svarer ikke dårligt, hun svarer godt.
**PROPOSED_DA:** Nej, elevinden svarer ikke dårligt, hun svarer godt.
**Problēma:** The previous question identifies a female pupil as elevinden; switching to the generic eleven is inconsistent with the stated referent.
**Audita pamatojums:** The previous question identifies a female pupil as elevinden; switching to the generic eleven is inconsistent with the stated referent.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 321

**Audit ID:** `DA-KURSS-FPR-0321`
**Lesson/ID:** `lesson5`
**Path:** `lesson5TrainingCardsDa[10].front`
**Field type:** `trainingFront`
**DE (read-only):** Das Mädchen nimmt den Federhalter, die Feder und das Messer.
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** Pigen tager en penneholder, en pen og en kniv.
**PROPOSED_DA:** Pigen tager penneholderen, fjeren og kniven.
**Problēma:** DA incorrectly uses indefinite nouns and translates Feder as pen; the German objects are all definite and Feder is fjer here.
**Audita pamatojums:** DA incorrectly uses indefinite nouns and translates Feder as pen; the German objects are all definite and Feder is fjer here.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 322

**Audit ID:** `DA-KURSS-FPR-0322`
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[7].front`
**Field type:** `trainingFront`
**DE (read-only):** Wieviel Teller?
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hvor mange plader?
**PROPOSED_DA:** Hvor mange tallerkener?
**Problēma:** I denne kontekst betyder tysk Teller tallerkener; plader er normalt flade skiver eller plader, ikke bordservice.
**Audita pamatojums:** I denne kontekst betyder tysk Teller tallerkener; plader er normalt flade skiver eller plader, ikke bordservice.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 323

**Audit ID:** `DA-KURSS-FPR-0323`
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[16].front`
**Field type:** `trainingFront`
**DE (read-only):** Der Lehrer nimmt ein Messer und spitzt den Bleistift an.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Læreren tager en kniv og spidser en blyant.
**PROPOSED_DA:** Læreren tager en kniv og spidser blyanten.
**Problēma:** Den tyske tekst har bestemt form: den Bleistift. Den danske tekst gør blyanten ubestemt og ændrer dermed referencen.
**Audita pamatojums:** Den tyske tekst har bestemt form: den Bleistift. Den danske tekst gør blyanten ubestemt og ændrer dermed referencen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 324

**Audit ID:** `DA-KURSS-FPR-0324`
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[18].front`
**Field type:** `trainingFront`
**DE (read-only):** Das ist ein Federhalter.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Det er en fyldepenholder.
**PROPOSED_DA:** Det er en penneholder.
**Problēma:** Federhalter betyder penneholder. Fyldepenholder er en smallere betydning og svarer til en holder til en fyldepen.
**Audita pamatojums:** Federhalter betyder penneholder. Fyldepenholder er en smallere betydning og svarer til en holder til en fyldepen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 325

**Audit ID:** `DA-KURSS-FPR-0325`
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[19].front`
**Field type:** `trainingFront`
**DE (read-only):** Wie ist der Federhalter?
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hvordan er fyldepenholderen?
**PROPOSED_DA:** Hvordan er penneholderen?
**Problēma:** Federhalter bør oversættes som penneholder, ikke fyldepenholder, som har en mere specifik betydning.
**Audita pamatojums:** Federhalter bør oversættes som penneholder, ikke fyldepenholder, som har en mere specifik betydning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 326

**Audit ID:** `DA-KURSS-FPR-0326`
**Lesson/ID:** `lesson6`
**Path:** `lesson6TrainingCardsDa[20].front`
**Field type:** `trainingFront`
**DE (read-only):** Der Federhalter ist schwarz.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Fyldepenholderen er sort.
**PROPOSED_DA:** Penneholderen er sort.
**Problēma:** Federhalter bør gengives som penneholder; fyldepenholder indsnævrer betydningen til en fountain-pen-holder.
**Audita pamatojums:** Federhalter bør gengives som penneholder; fyldepenholder indsnævrer betydningen til en fountain-pen-holder.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 327

**Audit ID:** `DA-KURSS-FPR-0327`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.pronounsDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** LOW
**Category:** GRAMMAR
**CURRENT_DA:** Nominativ, Akkusativ og Dativ former.
**PROPOSED_DA:** Former i nominativ, akkusativ og dativ.
**Problēma:** Den nuværende formulering mangler en naturlig præposition eller sammensætning mellem kasusnavnene og former.
**Audita pamatojums:** Den nuværende formulering mangler en naturlig præposition eller sammensætning mellem kasusnavnene og former.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 328

**Audit ID:** `DA-KURSS-FPR-0328`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.verbBasics`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Verbets grundlag
**PROPOSED_DA:** Grundlæggende verber
**Problēma:** Verbets grundlag er en unaturlig og uklar overskrift på dansk for et afsnit om verbets grundlæggende emner.
**Audita pamatojums:** Verbets grundlag er en unaturlig og uklar overskrift på dansk for et afsnit om verbets grundlæggende emner.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 329

**Audit ID:** `DA-KURSS-FPR-0329`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Form 2/3: I (flertal)
**PROPOSED_DA:** Form 2/3: Ihr (flertal)
**Problēma:** Den tyske tiltaleform "Ihr" er fejlagtigt erstattet af det danske pronomen "I"; de øvrige labels bevarer de tyske former.
**Audita pamatojums:** Den tyske tiltaleform "Ihr" er fejlagtigt erstattet af det danske pronomen "I"; de øvrige labels bevarer de tyske former.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 330

**Audit ID:** `DA-KURSS-FPR-0330`
**Lesson/ID:** `ui`
**Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.11.menuDesc`
**Field type:** `uiString`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Haben, kein/keine/keinen, ejedord og sammensatte substantiver.
**PROPOSED_DA:** Haben, kein/keine/keinen, ejestedord og sammensatte substantiver.
**Problēma:** Det korrekte danske fagudtryk for possessive pronominer er "ejestedord"; "ejedord" er ikke standard dansk.
**Audita pamatojums:** Det korrekte danske fagudtryk for possessive pronominer er "ejestedord"; "ejedord" er ikke standard dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---
