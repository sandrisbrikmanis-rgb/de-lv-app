# DA–DE A2 — OWNER review (29 LOW sectionAccent residuals)

Avots: [da-a2-targeted-regression-audit.md](./da-a2-targeted-regression-audit.md) (LOW = 29)

> Katram ierakstam aizpildi **Statuss** un **OWNER_DECISION** [decisions tabulā](./da-a2-owner-decisions-low29-sectionaccents.md).
> **PROPOSED** = Luna ieteikums pēc faktiskā DA Study teksta — nav automātiski apstiprināts.
> **DE nemainīt.** Tikai sectionAccents termini.
> Statusi: **LABOT** (precīzs DA terms) | **FJERN** `termins` | **FALSE_POSITIVE** (validators kļūdās)

## 1. DA-A2-REG-0001

**Card ID:** `a2-holen` (de: holen)
**Field:** `study.sectionAccents.examples[1].de.green[0]`
**CURRENT term:** holen
**Study context (`study.examples[1].de`):** Kannst du mich vom Bahnhof abholen?
**Problēma:** sectionAccent termins `holen` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** abholen — DE piemērā ir abholen, nevis holen

**OWNER_DECISION:**

---

## 2. DA-A2-REG-0002

**Card ID:** `a2-holen` (de: holen)
**Field:** `study.sectionAccents.examples[1].de.green[1]`
**CURRENT term:** holen
**Study context (`study.examples[1].de`):** Kannst du mich vom Bahnhof abholen?
**Problēma:** sectionAccent termins `holen` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** abholen — same as #1

**OWNER_DECISION:**

---

## 3. DA-A2-REG-0003

**Card ID:** `a2-aufnehmen` (de: aufnehmen)
**Field:** `study.sectionAccents.examples[1].lv.purple[0]`
**CURRENT term:** hospital
**Study context (`study.examples[1].lv`):** Hospitalet tager imod nye patienter.
**Problēma:** sectionAccent termins `hospital` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Hospitalet — DA tekstā: Hospitalet tager imod...

**OWNER_DECISION:**

---

## 4. DA-A2-REG-0004

**Card ID:** `a2-aufnehmen` (de: aufnehmen)
**Field:** `study.sectionAccents.comparison[2].meaning.purple[0]`
**CURRENT term:** Accept
**Study context (`study.comparison[2].meaning`):** Acceptere
**Problēma:** sectionAccent termins `Accept` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Acceptere — Aizstāt angļu Accept ar DA no comparison meaning

**OWNER_DECISION:**

---

## 5. DA-A2-REG-0005

**Card ID:** `a2-bank` (de: Bank)
**Field:** `study.sectionAccents.important[0].example.purple[0]`
**CURRENT term:** sandbank
**Study context (`study.important`):** {"text":"Bank er et kontekstord med forskellige flertalsformer.","example":"die Banken = banker (finanser). die Bänke = bænke. Sandbanke = sandbanke."}
**Problēma:** sectionAccent termins `sandbank` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Sandbanke — important tekstā ir Sandbanke

**OWNER_DECISION:**

---

## 6. DA-A2-REG-0006

**Card ID:** `a2-bank` (de: Bank)
**Field:** `study.sectionAccents.important[0].example.red[0]`
**CURRENT term:** Sandbank
**Study context (`study.important`):** {"text":"Bank er et kontekstord med forskellige flertalsformer.","example":"die Banken = banker (finanser). die Bänke = bænke. Sandbanke = sandbanke."}
**Problēma:** sectionAccent termins `Sandbank` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Sandbanke — same as #5

**OWNER_DECISION:**

---

## 7. DA-A2-REG-0007

**Card ID:** `a2-bedienung` (de: Bedienung)
**Field:** `study.sectionAccents.examples[0].lv.purple[0]`
**CURRENT term:** server
**Study context (`study.examples[0].lv`):** Serveren var meget venlig.
**Problēma:** sectionAccent termins `server` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Serveren — DA: Serveren var meget venlig

**OWNER_DECISION:**

---

## 8. DA-A2-REG-0008

**Card ID:** `a2-bedienung` (de: Bedienung)
**Field:** `study.sectionAccents.examples[1].lv.purple[0]`
**CURRENT term:** service
**Study context (`study.examples[1].lv`):** Servicen i restauranten var god.
**Problēma:** sectionAccent termins `service` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Servicen — DA: Servicen i restauranten...

**OWNER_DECISION:**

---

## 9. DA-A2-REG-0009

**Card ID:** `a2-behalten` (de: behalten)
**Field:** `study.sectionAccents.comparison[1].meaning.purple[0]`
**CURRENT term:** Hold
**Study context (`study.comparison[1].meaning`):** Holde
**Problēma:** sectionAccent termins `Hold` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Holde — DA meaning jau ir Holde

**OWNER_DECISION:**

---

## 10. DA-A2-REG-0010

**Card ID:** `a2-bekannt` (de: bekannt)
**Field:** `study.sectionAccents.examples[1].lv.purple[0]`
**CURRENT term:** problem
**Study context (`study.examples[1].lv`):** Problemet er kendt.
**Problēma:** sectionAccent termins `problem` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Problemet — DA: Problemet er kendt

**OWNER_DECISION:**

---

## 11. DA-A2-REG-0011

**Card ID:** `a2-bekannt` (de: bekannt)
**Field:** `study.sectionAccents.comparison[1].example.green[1]`
**CURRENT term:** kendt
**Study context (`study.comparison[1].example`):** Er ist berühmt. = Han er berømt.
**Problēma:** sectionAccent termins `kendt` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** berømt — DA comparison side: Han er berømt

**OWNER_DECISION:**

---

## 12. DA-A2-REG-0012

**Card ID:** `a2-bekannt` (de: bekannt)
**Field:** `study.sectionAccents.comparison[1].example.purple[0]`
**CURRENT term:** kendt
**Study context (`study.comparison[1].example`):** Er ist berühmt. = Han er berømt.
**Problēma:** sectionAccent termins `kendt` nav atrodams DA Study tekstā
**PROPOSED (FJERN):** FJERN `kendt` — duplikāts — pietiek ar berømt (#11)

**OWNER_DECISION:**

---

## 13. DA-A2-REG-0013

**Card ID:** `a2-damit` (de: damit)
**Field:** `study.sectionAccents.examples[2].lv.purple[0]`
**CURRENT term:** problem
**Study context (`study.examples[2].lv`):** Det har jeg ingen problemer med.
**Problēma:** sectionAccent termins `problem` nav atrodams DA Study tekstā
**PROPOSED (FJERN):** FJERN `problem` — DA lieto problemer, nevis problem

**OWNER_DECISION:**

---

## 14. DA-A2-REG-0014

**Card ID:** `a2-einschalten` (de: einschalten)
**Field:** `study.sectionAccents.examples[5].lv.purple[1]`
**CURRENT term:** radio
**Study context (`study.examples[5].lv`):** Kan du tænde for radioen
**Problēma:** sectionAccent termins `radio` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** radioen — DA: ...tænde for radioen

**OWNER_DECISION:**

---

## 15. DA-A2-REG-0015

**Card ID:** `a2-note` (de: Note)
**Field:** `study.sectionAccents.comparison[2].example.green[0]`
**CURRENT term:** note
**Study context (`study.comparison[2].example`):** Die Musiknote ist hoch. = Musiknoten er høj.
**Problēma:** sectionAccent termins `note` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Musiknoten — DA: Musiknoten er høj

**OWNER_DECISION:**

---

## 16. DA-A2-REG-0016

**Card ID:** `a2-note` (de: Note)
**Field:** `study.sectionAccents.comparison[2].example.yellow[5]`
**CURRENT term:** note
**Study context (`study.comparison[2].example`):** Die Musiknote ist hoch. = Musiknoten er høj.
**Problēma:** sectionAccent termins `note` nav atrodams DA Study tekstā
**PROPOSED (FJERN):** FJERN `note` — duplikāts yellow — pietiek ar Musiknoten (#15)

**OWNER_DECISION:**

---

## 17. DA-A2-REG-0017

**Card ID:** `a2-patient` (de: Patient)
**Field:** `study.sectionAccents.examples[0].lv.purple[0]`
**CURRENT term:** patient
**Study context (`study.examples[0].lv`):** Patienten venter i venteværelset.
**Problēma:** sectionAccent termins `patient` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** patienten — DA: Patienten venter...

**OWNER_DECISION:**

---

## 18. DA-A2-REG-0018

**Card ID:** `a2-patient` (de: Patient)
**Field:** `study.sectionAccents.examples[1].lv.purple[0]`
**CURRENT term:** patient
**Study context (`study.examples[1].lv`):** Lægen undersøger patienten.
**Problēma:** sectionAccent termins `patient` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** patienten — DA: ...undersøger patienten

**OWNER_DECISION:**

---

## 19. DA-A2-REG-0019

**Card ID:** `a2-patient` (de: Patient)
**Field:** `study.sectionAccents.examples[2].lv.purple[0]`
**CURRENT term:** patient
**Study context (`study.examples[2].lv`):** Patienten har det bedre.
**Problēma:** sectionAccent termins `patient` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** patienten — DA: Patienten har det bedre

**OWNER_DECISION:**

---

## 20. DA-A2-REG-0020

**Card ID:** `a2-stelle` (de: Stelle)
**Field:** `study.sectionAccents.important[0].example.yellow[0]`
**CURRENT term:** fragment
**Study context (`study.important`):** {"text":"Stelle betyder meget ofte mere end blot et fysisk sted.","example":"en dieser Stelle = på dette sted. eine Stelle suchen = at søge job. Tekststelle = t
**Problēma:** sectionAccent termins `fragment` nav atrodams DA Study tekstā
**PROPOSED (FJERN):** FJERN `fragment` — angļu stale; nav DA study saturā

**OWNER_DECISION:**

---

## 21. DA-A2-REG-0021

**Card ID:** `a2-stoff` (de: Stoff)
**Field:** `study.sectionAccents.examples[2].lv.purple[0]`
**CURRENT term:** material
**Study context (`study.examples[2].lv`):** Bomuld er et naturligt materiale.
**Problēma:** sectionAccent termins `material` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** materiale — DA: ...naturligt materiale

**OWNER_DECISION:**

---

## 22. DA-A2-REG-0022

**Card ID:** `a2-stoff` (de: Stoff)
**Field:** `study.sectionAccents.comparison[0].meaning.purple[2]`
**CURRENT term:** material
**Study context (`study.comparison[0].meaning`):** Stof / stof / materiale
**Problēma:** sectionAccent termins `material` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** materiale — meaning saturā ir materiale

**OWNER_DECISION:**

---

## 23. DA-A2-REG-0023

**Card ID:** `a2-stoff` (de: Stoff)
**Field:** `study.sectionAccents.comparison[1].meaning.purple[0]`
**CURRENT term:** Material
**Study context (`study.comparison[1].meaning`):** Materiale
**Problēma:** sectionAccent termins `Material` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Materiale — DA: Materiale (kapitālis)

**OWNER_DECISION:**

---

## 24. DA-A2-REG-0024

**Card ID:** `a2-tafel` (de: Tafel)
**Field:** `study.sectionAccents.examples[5].lv.purple[0]`
**CURRENT term:** menu
**Study context (`study.examples[5].lv`):** Menuen er på bordet.
**Problēma:** sectionAccent termins `menu` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** Menuen — DA: Menuen er på bordet

**OWNER_DECISION:**

---

## 25. DA-A2-REG-0025

**Card ID:** `a2-verbinden` (de: verbinden)
**Field:** `study.sectionAccents.comparison[0].example.blue[0]`
**CURRENT term:** forbinder
**Study context (`study.comparison[0].example`):** Die Brücke verbindet zwei Orte. = Tilts savieno divas vietas.
**Problēma:** sectionAccent termins `forbinder` nav atrodams DA Study tekstā
**PROPOSED (FJERN):** FJERN `forbinder` — comparison[0].example DA vēl LV — akcents pagaidām noņemams; comparison labojums atsevišķi

**OWNER_DECISION:**

---

## 26. DA-A2-REG-0026

**Card ID:** `a2-klein` (de: klein)
**Field:** `study.sectionAccents.examples[3].de.blue[0]`
**CURRENT term:** klein
**Study context (`study.examples[3].de`):** Ich habe eine kleine Tasche.
**Problēma:** sectionAccent termins `klein` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** kleine — DE piemērā: kleine Tasche

**OWNER_DECISION:**

---

## 27. DA-A2-REG-0027

**Card ID:** `a2-klein` (de: klein)
**Field:** `study.sectionAccents.examples[3].de.blue[1]`
**CURRENT term:** klein
**Study context (`study.examples[3].de`):** Ich habe eine kleine Tasche.
**Problēma:** sectionAccent termins `klein` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** kleine — same as #26

**OWNER_DECISION:**

---

## 28. DA-A2-REG-0028

**Card ID:** `a2-gleich` (de: gleich)
**Field:** `study.sectionAccents.examples[3].de.green[0]`
**CURRENT term:** gleich
**Study context (`study.examples[3].de`):** Wir haben die gleiche Tasche.
**Problēma:** sectionAccent termins `gleich` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** gleiche — DE piemērā: die gleiche Tasche

**OWNER_DECISION:**

---

## 29. DA-A2-REG-0029

**Card ID:** `a2-gleich` (de: gleich)
**Field:** `study.sectionAccents.examples[3].de.green[1]`
**CURRENT term:** gleich
**Study context (`study.examples[3].de`):** Wir haben die gleiche Tasche.
**Problēma:** sectionAccent termins `gleich` nav atrodams DA Study tekstā
**PROPOSED (LABOT):** gleiche — same as #28

**OWNER_DECISION:**

---
