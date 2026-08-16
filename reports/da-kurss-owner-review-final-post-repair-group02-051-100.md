# DA–DE Kurss — OWNER review — final post-repair Group 02

Avots: `reports/da-kurss-final-post-repair-audit.md`
Findings: **051–100** (50 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir audita ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 51

**Audit ID:** `DA-KURSS-FPR-0051`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[18]`
**Field type:** `sectionItem`
**DE (read-only):** der Freund (dēr froint)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Freund (dēr froint) — ven
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 52

**Audit ID:** `DA-KURSS-FPR-0052`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]`
**Field type:** `sectionItem`
**DE (read-only):** der Stuhl (dēr štūl)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Stuhl (dēr štūl) — en stol
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 53

**Audit ID:** `DA-KURSS-FPR-0053`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]`
**Field type:** `sectionItem`
**DE (read-only):** die Landkarte (dī lantkarte)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** die Landkarte (dī lantkarte) — et landkort
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 54

**Audit ID:** `DA-KURSS-FPR-0054`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]`
**Field type:** `sectionItem`
**DE (read-only):** die Schwester (dī švester)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** die Schwester (dī švester) — søster
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 55

**Audit ID:** `DA-KURSS-FPR-0055`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** eu udtales som oi: der Freund (dēr froint), neun (noin).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 56

**Audit ID:** `DA-KURSS-FPR-0056`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** h fungerer ofte som længdetegn for den foregående vokal og udtales ikke: der Stuhl (dēr štūl), zehn (cēn).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 57

**Audit ID:** `DA-KURSS-FPR-0057`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** der Vetter (dēr feter)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Vetter (dēr feter) — fætter
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 58

**Audit ID:** `DA-KURSS-FPR-0058`
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]`
**Field type:** `sectionItem`
**DE (read-only):** das Gummi (das gumī)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** das Gummi (das gumī) — viskelæder
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 59

**Audit ID:** `DA-KURSS-FPR-0059`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** DA
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** DA-feltet kan lokaliseres til `I ordene wem, dem, den, der udtales e langt og smalt.`, men DE_CURRENT indeholder selv lettisk tekst (`Vārdos ...`). DE = STRICT READ-ONLY, tāpēc DE avots jāizskata atsevišķi.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 60

**Audit ID:** `DA-KURSS-FPR-0060`
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** gut (gūt) — godt
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 61

**Audit ID:** `DA-KURSS-FPR-0061`
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Bad (bāt) — bad
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 62

**Audit ID:** `DA-KURSS-FPR-0062`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Nuværende tid verber, substantiver, grammatik og oversæt
**PROPOSED_DA:** Verber i nutid, ord, grammatik og oversæt
**Problēma:** “Nuværende tid verber” er unaturligt dansk; “oversæt” bør stå parallelt med de øvrige emneangivelser.
**Audita pamatojums:** “Nuværende tid verber” er unaturligt dansk; “oversæt” bør stå parallelt med de øvrige emneangivelser.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 63

**Audit ID:** `DA-KURSS-FPR-0063`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#verb-conjugation`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** <span>ihr</span><strong>geht</strong><span>Du udstøder</span>
**PROPOSED_DA:** <span>ihr</span><strong>geht</strong><span>I går</span>
**Problēma:** “Du udstøder” er en forkert oversættelse af tysk ihr geht og modsiger både person og betydning.
**Audita pamatojums:** “Du udstøder” er en forkert oversættelse af tysk ihr geht og modsiger både person og betydning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 64

**Audit ID:** `DA-KURSS-FPR-0064`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#word-section`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Vārdā “wir” burts i tiek izrunāts gari.
**PROPOSED_DA:** I ordet “wir” udtales i’et langt.
**Problēma:** Hele sætningen er lettisk og er ikke oversat til dansk.
**Audita pamatojums:** Hele sætningen er lettisk og er ikke oversat til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 65

**Audit ID:** `DA-KURSS-FPR-0065`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#grammar`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <strong>Remove <span class="lesson1-ending-accent">-da</span> from base forms of the verb and add the ending.</strong>
**PROPOSED_DA:** <strong>Fjern <span class="lesson1-ending-accent">-en</span> fra verbets grundform, og tilføj endelsen.</strong>
**Problēma:** Engelsk tekst, forkert endelse (-da) og manglende dansk oversættelse forekommer i grammatikforklaringen.
**Audita pamatojums:** Engelsk tekst, forkert endelse (-da) og manglende dansk oversættelse forekommer i grammatikforklaringen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 66

**Audit ID:** `DA-KURSS-FPR-0066`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#examples`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** HIGH
**Category:** GRAMMAR
**CURRENT_DA:** <div class="kurss-example">er / sie → -Er kommet</div>
**PROPOSED_DA:** <div class="kurss-example">er / sie → -Er kommer</div>
**Problēma:** “kommet” er perfektum participium; eksemplet skal vise præsensformen “kommer”.
**Audita pamatojums:** “kommet” er perfektum participium; eksemplet skal vise præsensformen “kommer”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 67

**Audit ID:** `DA-KURSS-FPR-0067`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#question-examples`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** STRUCTURE
**CURRENT_DA:** <div class="kurss-example">ihr → -på dansk:<br><br></div><div class="kurss-example">sie → -Tysk på:<br><br></div>
**PROPOSED_DA:** <div class="kurss-example">Tysk: ihr kommt<br>Dansk: I kommer</div><div class="kurss-example">Tysk: Kommt ihr?<br>Dansk: Kommer I?</div>
**Problēma:** Indholdet er ødelagt med tomme felter og blandede sprog; eksemplerne giver ingen brugbar forklaring.
**Audita pamatojums:** Indholdet er ødelagt med tomme felter og blandede sprog; eksemplerne giver ingen brugbar forklaring.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 68

**Audit ID:** `DA-KURSS-FPR-0068`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#person-difference`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Latviešu valodā:<br>Tu nāc.<br>Vai tu nāc?
**PROPOSED_DA:** På lettisk:<br>Tu nāc.<br>Vai tu nāc?
**Problēma:** Lettisk resttekst er ikke oversat; den bør mindst have en dansk introduktion eller fjernes fra den danske version.
**Audita pamatojums:** Lettisk resttekst er ikke oversat; den bør mindst have en dansk introduktion eller fjernes fra den danske version.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 69

**Audit ID:** `DA-KURSS-FPR-0069`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#word-list`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** spielen — at spille • Spil; Nein - nej; Ikke - nej; nein — at arbejde; nicht — at spørge; arbeiten — hvad laver han?
**PROPOSED_DA:** spielen — at spille; nein — nej; nicht — ikke; arbeiten — at arbejde; fragen — at spørge; was tut er? — hvad laver han?
**Problēma:** Ordlisten er systematisk forskudt: flere tyske ord har forkerte danske betydninger, og “nein” er gentaget med forskellige fejl.
**Audita pamatojums:** Ordlisten er systematisk forskudt: flere tyske ord har forkerte danske betydninger, og “nein” er gentaget med forskellige fejl.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 70

**Audit ID:** `DA-KURSS-FPR-0070`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#pronunciation`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Vārdos ich, nicht, rechnen, zeichnen skaņu ch izrunā mīksti...
**PROPOSED_DA:** I ordene ich, nicht, rechnen og zeichnen udtales ch-lyden blødt, omtrent som i de lettiske ord technika og Frīdrihs.
**Problēma:** En hel lettisk sætning står uoversat midt i den danske udtalesektion.
**Audita pamatojums:** En hel lettisk sætning står uoversat midt i den danske udtalesektion.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 71

**Audit ID:** `DA-KURSS-FPR-0071`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#grammar-examples`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** GRAMMAR
**CURRENT_DA:** Ich recchne; Jeg tirsdag; Eh tut; Var tust du? - Was machst du?
**PROPOSED_DA:** Ich rechne; Ich tue; Er tut; Was tust du?
**Problēma:** Eksemplerne indeholder stavefejl, danske/tyske blandinger og meningsløse oversættelser.
**Audita pamatojums:** Eksemplerne indeholder stavefejl, danske/tyske blandinger og meningsløse oversættelser.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 72

**Audit ID:** `DA-KURSS-FPR-0072`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Artikler, stednavne og oversæt
**PROPOSED_DA:** Artikler, stedsangivelser og oversæt
**Problēma:** Lettisk “vietas vārdi” henviser her til stedangivelser som hier/dort, ikke stednavne.
**Audita pamatojums:** Lettisk “vietas vārdi” henviser her til stedangivelser som hier/dort, ikke stednavne.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 73

**Audit ID:** `DA-KURSS-FPR-0073`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml#word-list`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** Wer - hvad; Var - hvad; wer — her; was — der; hier — Der Tisch bord; der Tisch — bænk
**PROPOSED_DA:** wer — hvem; was — hvad; hier — her; dort — der; der Tisch — bord; ein Tisch — et bord
**Problēma:** Ordlisten er alvorligt forskudt og indeholder både forkerte oversættelser og blandede sprog.
**Audita pamatojums:** Ordlisten er alvorligt forskudt og indeholder både forkerte oversættelser og blandede sprog.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 74

**Audit ID:** `DA-KURSS-FPR-0074`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml#grammar`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Īpašības un apstākļu vārdos galotne -Med wer? spørger efter personer.
**PROPOSED_DA:** Med wer? spørger man efter personer.
**Problēma:** Lettisk tekst er sammenføjet med dansk uden mellemrum og ødelægger grammatikforklaringen.
**Audita pamatojums:** Lettisk tekst er sammenføjet med dansk uden mellemrum og ødelægger grammatikforklaringen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 75

**Audit ID:** `DA-KURSS-FPR-0075`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Objekter i klassen, egenskaber og oversætte
**PROPOSED_DA:** Objekter i klassen, egenskaber og oversæt
**Problēma:** “oversætte” er infinitiv og passer ikke grammatisk med de øvrige korte emneangivelser.
**Audita pamatojums:** “oversætte” er infinitiv og passer ikke grammatisk med de øvrige korte emneangivelser.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 76

**Audit ID:** `DA-KURSS-FPR-0076`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#word-list`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** nehmen (nēmen) — fjerklædt; zeigen — hvid; schwarz — fjer; die Feder — spids; hinlegen — pige
**PROPOSED_DA:** nehmen (nēmen) — at tage; zeigen — at vise; schwarz — sort; die Feder — fjer; hinlegen — lægge ned
**Problēma:** Ordlisten har mange systematiske forskydninger, hvor tyske ord er parret med forkerte danske betydninger.
**Audita pamatojums:** Ordlisten har mange systematiske forskydninger, hvor tyske ord er parret med forkerte danske betydninger.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 77

**Audit ID:** `DA-KURSS-FPR-0077`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#pronunciation`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Galotnes -Hvis h er en længdemarkør, udtales den ikke som en lyd: nehmen (nēmen).
**PROPOSED_DA:** Hvis h er en længdemarkør, udtales det ikke som en lyd: nehmen (nēmen).
**Problēma:** Lettisk ordet “Galotnes” står som en uoversat rest og giver en brudt dansk sætning.
**Audita pamatojums:** Lettisk ordet “Galotnes” står som en uoversat rest og giver en brudt dansk sætning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 78

**Audit ID:** `DA-KURSS-FPR-0078`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#grammar`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** HIGH
**Category:** NATURALNESS
**CURRENT_DA:** Kun mænds skifter runde.
**PROPOSED_DA:** Kun hankønsformen ændres.
**Problēma:** “mænds skifter runde” er en uforståelig maskinoversættelse af grammatikforklaringen.
**Audita pamatojums:** “mænds skifter runde” er en uforståelig maskinoversættelse af grammatikforklaringen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 79

**Audit ID:** `DA-KURSS-FPR-0079`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml#word-list`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** wen (vēn) — hvad; loben — ros; tadeln — pelt; der Vater (fāter) — langt
**PROPOSED_DA:** wen (vēn) — hvem; loben — at rose; tadeln — at skælde ud; der Vater (fāter) — far
**Problēma:** Flere ord har forkerte betydninger eller forkert lemmatisering, bl.a. wen, loben og der Vater.
**Audita pamatojums:** Flere ord har forkerte betydninger eller forkert lemmatisering, bl.a. wen, loben og der Vater.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 80

**Audit ID:** `DA-KURSS-FPR-0080`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml#grammar`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** på dansk svarer nominativ på spørgsmålet hvem?, og akkusativ på spørgsmålet hvad?.
**PROPOSED_DA:** På tysk svarer nominativ til spørgsmålet hvem?, og akkusativ til spørgsmålet hvem? eller hvad?, afhængigt af objektet.
**Problēma:** Forklaringen siger “på dansk” og angiver forkert, at akkusativ altid svarer til “hvad?”.
**Audita pamatojums:** Forklaringen siger “på dansk” og angiver forkert, at akkusativ altid svarer til “hvad?”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 81

**Audit ID:** `DA-KURSS-FPR-0081`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** Verber, betingelser for sted og oversætte
**PROPOSED_DA:** Tal, flertal, omlyd og flertalsformer af substantiver
**Problēma:** Undertitlen beskriver et andet emne end lektionens indhold, som handler om tal, flertal, omlyd og substantivernes pluralis.
**Audita pamatojums:** Undertitlen beskriver et andet emne end lektionens indhold, som handler om tal, flertal, omlyd og substantivernes pluralis.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 82

**Audit ID:** `DA-KURSS-FPR-0082`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml#word-list`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** anspitzen (anšpicen) — at spytte; er spitzt an — han spytter; leicht — lys; hier — hende
**PROPOSED_DA:** anspitzen (anšpicen) — spidse; er spitzt an — han spidser; leicht — let; hier — her
**Problēma:** Flere centrale gloser er forkert oversat, bl.a. anspitzen, leicht og hier.
**Audita pamatojums:** Flere centrale gloser er forkert oversat, bl.a. anspitzen, leicht og hier.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 83

**Audit ID:** `DA-KURSS-FPR-0083`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml#grammar`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Piemēri: hinlegen — og flertalsform: der Schüler ist klein • Die Schüler synd klein.
**PROPOSED_DA:** Eksempel på et adskilleligt verbum: hinlegen — er legt hin. Flertalsform: Der Schüler ist klein; die Schüler sind klein.
**Problēma:** Lettisk tekst, dansk og en stavefejl i tysk “synd” er blandet i samme eksempel.
**Audita pamatojums:** Lettisk tekst, dansk og en stavefejl i tysk “synd” er blandet i samme eksempel.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 84

**Audit ID:** `DA-KURSS-FPR-0084`
**Lesson/ID:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#word-list`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**CURRENT_DA:** singe — song; singt — You; singen Sie — tælle; der Müller — møller; öffnen — mirror; der Spiegel — skovl
**PROPOSED_DA:** singe — syng; singt — synger; singen Sie — syng; der Müller — møller; öffnen — åbne; der Spiegel — spejl
**Problēma:** Ordlisten indeholder engelske rester og mange forskudte eller forkerte oversættelser.
**Audita pamatojums:** Ordlisten indeholder engelske rester og mange forskudte eller forkerte oversættelser.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 85

**Audit ID:** `DA-KURSS-FPR-0085`
**Lesson/ID:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#grammar`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Kommandoer udtryk
**PROPOSED_DA:** Kommandoer
**Problēma:** Overskriften er grammatisk forkert; “kommandoer udtryk” er ikke idiomatisk dansk.
**Audita pamatojums:** Overskriften er grammatisk forkert; “kommandoer udtryk” er ikke idiomatisk dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 86

**Audit ID:** `DA-KURSS-FPR-0086`
**Lesson/ID:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#exercise`
**Field type:** `htmlFragment`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Übung / Øvelse; Fragen - at spørge
**PROPOSED_DA:** Øvelse; fragen — at spørge
**Problēma:** Den tyske UI-tekst “Übung” er en unødvendig fremmed rest i den danske version.
**Audita pamatojums:** Den tyske UI-tekst “Übung” er en unødvendig fremmed rest i den danske version.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 87

**Audit ID:** `DA-KURSS-FPR-0087`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Refleksive verber, e → i/ie ændre og akkusativ.
**PROPOSED_DA:** Refleksive verber, e → i/ie-ændring og akkusativ
**Problēma:** “ændre” er en forkert verbalform i denne opremsning; der skal bruges substantivet “ændring”.
**Audita pamatojums:** “ændre” er en forkert verbalform i denne opremsning; der skal bruges substantivet “ændring”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 88

**Audit ID:** `DA-KURSS-FPR-0088`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** ä udtales, som tidligere nævnt, både som en smal kort og en smal lang e
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** ä udtales, som tidligere nævnt, både som en smal kort og en smal lang e-lyd. Eksempler: der Bäcker (bēker), das Mädchen (mētchen).
**PROPOSED_DA:** ä udtales, som tidligere nævnt, både som en smal, kort e-lyd og som en smal, lang e-lyd. Eksempler: der Bäcker (bēker), das Mädchen (mētchen).
**Problēma:** Der mangler komma mellem de sideordnede adjektiver; gentagelse af »som« gør også formuleringen mere grammatisk klar.
**Audita pamatojums:** Der mangler komma mellem de sideordnede adjektiver; gentagelse af »som« gør også formuleringen mere grammatisk klar.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 89

**Audit ID:** `DA-KURSS-FPR-0089`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[19].lv`
**Field type:** `cardLv`
**DE (read-only):** Ich grüße das Fräulein.
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Jeg hilser frøkenen.
**PROPOSED_DA:** Jeg hilser på frøkenen.
**Problēma:** På moderne dansk hedder det normalt »hilse på nogen«; den nuværende formulering virker unaturlig eller forældet.
**Audita pamatojums:** På moderne dansk hedder det normalt »hilse på nogen«; den nuværende formulering virker unaturlig eller forældet.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 90

**Audit ID:** `DA-KURSS-FPR-0090`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[23].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, ich habe das Fenster nicht geöffnet.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Nein, jeg åbnede ikke vinduet.
**PROPOSED_DA:** Nej, jeg åbnede ikke vinduet.
**Problēma:** »Nein« er tysk og står som et fremmedsprogsrest i den danske tekst.
**Audita pamatojums:** »Nein« er tysk og står som et fremmedsprogsrest i den danske tekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 91

**Audit ID:** `DA-KURSS-FPR-0091`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[37].lv`
**Field type:** `cardLv`
**DE (read-only):** Herr Lehrer, bitte, setzen Sie sich!
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Hr. lærer, sæt dig venligst ned!
**PROPOSED_DA:** Lærer, sæt dig venligst ned!
**Problēma:** »Hr. lærer« er en unaturlig direkte tiltale på dansk; »Lærer« fungerer naturligt som tiltaleform.
**Audita pamatojums:** »Hr. lærer« er en unaturlig direkte tiltale på dansk; »Lærer« fungerer naturligt som tiltaleform.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 92

**Audit ID:** `DA-KURSS-FPR-0092`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversættelse
**Problēma:** Som sektionsoverskrift er infinitiven »Oversætte« mindre idiomatisk; substantivet »Oversættelse« passer til øvelsens titel.
**Audita pamatojums:** Som sektionsoverskrift er infinitiven »Oversætte« mindre idiomatisk; substantivet »Oversættelse« passer til øvelsens titel.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 93

**Audit ID:** `DA-KURSS-FPR-0093`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[4].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, ich habe das Fenster nicht geöffnet.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Nein, jeg åbnede ikke vinduet.
**PROPOSED_DA:** Nej, jeg åbnede ikke vinduet.
**Problēma:** »Nein« er tysk og står som et fremmedsprogsrest i den danske tekst.
**Audita pamatojums:** »Nein« er tysk og står som et fremmedsprogsrest i den danske tekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 94

**Audit ID:** `DA-KURSS-FPR-0094`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Flere emner, dieser/jener, ental og flertal
**PROPOSED_DA:** Flere genstande, dieser/jener, ental og flertal
**Problēma:** "Emner" betyder typisk topics; den latviske reference angiver flere genstande eller objekter.
**Audita pamatojums:** "Emner" betyder typisk topics; den latviske reference angiver flere genstande eller objekter.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 95

**Audit ID:** `DA-KURSS-FPR-0095`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Niende forelæsning: flertal af navneord, demonstrative pronominer dieser/jener, øvelser og oversættelse.
**PROPOSED_DA:** Niende lektion: flertal af navneord, demonstrative pronominer dieser/jener, øvelser og oversættelse.
**Problēma:** "Forelæsning" betyder lecture og passer dårligere til kursuslektionen end "lektion".
**Audita pamatojums:** "Forelæsning" betyder lecture og passer dårligere til kursuslektionen end "lektion".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 96

**Audit ID:** `DA-KURSS-FPR-0096`
**Lesson/ID:** `—`
**Path:** ``
**Field type:** `—`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** 
**PROPOSED_DA:** 
**Problēma:** —
**Audita pamatojums:** —
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 97

**Audit ID:** `DA-KURSS-FPR-0097`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** TRANSLATION
**CURRENT_DA:** Angiv pronominerne dieser og jener som bestemt artikel.
**PROPOSED_DA:** Bøj pronominerne dieser og jener som den bestemte artikel.
**Problēma:** "Angiv" betyder angiv eller list; referencebetydningen er, at pronominerne skal bøjes som den bestemte artikel.
**Audita pamatojums:** "Angiv" betyder angiv eller list; referencebetydningen er, at pronominerne skal bøjes som den bestemte artikel.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 98

**Audit ID:** `DA-KURSS-FPR-0098`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Übung / Øvelse
**PROPOSED_DA:** Øvelse
**Problēma:** Den tyske tekst "Übung" er en fremmedsprogsrest i det danske felt.
**Audita pamatojums:** Den tyske tekst "Übung" er en fremmedsprogsrest i det danske felt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 99

**Audit ID:** `DA-KURSS-FPR-0099`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Oversætte
**PROPOSED_DA:** Oversæt
**Problēma:** Som øvelsestitel er imperativen "Oversæt" naturligere end infinitiven "Oversætte".
**Audita pamatojums:** Som øvelsestitel er imperativen "Oversæt" naturligere end infinitiven "Oversætte".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 100

**Audit ID:** `DA-KURSS-FPR-0100`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[2].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, der Brief ist nicht kurz, er ist lang.
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Nein, brevet er ikke kort, det er langt.
**PROPOSED_DA:** Nej, brevet er ikke kort, det er langt.
**Problēma:** "Nein" er tysk og skal oversættes til dansk "Nej".
**Audita pamatojums:** "Nein" er tysk og skal oversættes til dansk "Nej".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---
