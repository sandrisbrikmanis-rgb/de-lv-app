# DA–DE A2 — OWNER review (29 FINAL tip sectionAccents)

Avots: [da-a2-post-regression-audit.md](./da-a2-post-regression-audit.md) + [da-a2-full-audit.md](./da-a2-full-audit.md)

## Kopsavilkums

| Metrika | Skaits |
|---------|-------:|
| Raw findings (full re-scan) | **30** |
| Reālie tip sectionAccent | **29** |
| FALSE_POSITIVE (ārpus review) | **1** |
| OWNER review ieraksti | **29/29** |
| Production changes (šis posms) | **0** |
| DE changes | **0** |

### FALSE_POSITIVE (nemainīt, nav šajā review sarakstā)

- **`a2-Weste-1584`** / `lv` = **Vest** — dāņu homogrāfs; regex `vest` ≠ LV kļūda. Statuss: **FALSE_POSITIVE**. Production **NEMAINĪT**.

---

> **PROPOSED** = ieteikums pēc faktiskā `study.tip` DA teksta konkrētajā blokā — nav automātiski apstiprināts.
> **DE nemainīt.** Tikai `study.sectionAccents.tip.*` termini.
> Statusi: **LABOT** (precīzs DA terms) | **FJERN** `termins` | **FALSE_POSITIVE**
> Aizpildi **Statuss** un **OWNER_DECISION** [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md).
> Tikai pēc apstiprinājuma — COPY-ONLY apply.

## 1. DA-A2-FINAL-0001

**Audit ID:** DA-A2-0001
**Card ID:** `a2-abstellen` (de: abstellen)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]`
**CURRENT term:** `somu`
**Tip bloks (DA, validācijas konteksts):** Hvis det er en bil, cykel eller taske, så tænk på at parkere eller stille væk.
**Visi tip bloki (DA):** Hvis det er en bil, cykel eller taske, så tænk på at parkere eller stille væk. | Når det kommer til vand, gas eller elektricitet, så tænk på at slukke for det. | Når man taler om en motor eller et vækkeur, kan abstellen betyde at slukke. | Når det kommer til TV, computer eller ly…
**Problēma:** sectionAccent termins `somu` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** taske (CURRENT `somu` → NEW `taske`) — Tip bloks: «…cykel eller taske…» — LV somu → DA taske

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 2. DA-A2-FINAL-0002

**Audit ID:** DA-A2-0002
**Card ID:** `a2-abstellen` (de: abstellen)
**Field:** `study.sectionAccents.tip.rightBlocks.text.yellow.[1][1]`
**CURRENT term:** `datoru`
**Tip bloks (DA, validācijas konteksts):** Når det kommer til TV, computer eller lys, bruges normalt ausschalten.
**Visi tip bloki (DA):** Hvis det er en bil, cykel eller taske, så tænk på at parkere eller stille væk. | Når det kommer til vand, gas eller elektricitet, så tænk på at slukke for det. | Når man taler om en motor eller et vækkeur, kan abstellen betyde at slukke. | Når det kommer til TV, computer eller ly…
**Problēma:** sectionAccent termins `datoru` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** computer (CURRENT `datoru` → NEW `computer`) — Tip bloks: «TV, computer eller lys…» — LV datoru → DA computer

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 3. DA-A2-FINAL-0003

**Audit ID:** DA-A2-0003
**Card ID:** `a2-angreifen` (de: angreifen)
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][1]`
**CURRENT term:** `apvaino`
**Tip bloks (DA, validācijas konteksts):** Hvis nogen bare fornærmer med ord, er et mere præcist ord ofte policyigen.
**Visi tip bloki (DA):** Hvis der er et fysisk eller direkte angreb, bruges angerifen. | Hvis nogen bare fornærmer med ord, er et mere præcist ord ofte policyigen.
**Problēma:** sectionAccent termins `apvaino` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** fornærmer (CURRENT `apvaino` → NEW `fornærmer`) — Tip bloks: «…fornærmer med ord…» — LV apvaino → DA fornærmer

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 4. DA-A2-FINAL-0004

**Audit ID:** DA-A2-0004
**Card ID:** `a2-artikel` (de: Artikel)
**Field:** `study.sectionAccents.tip.leftBlocks.text.orange.[0][0]`
**CURRENT term:** `raksts`
**Tip bloks (DA, validācijas konteksts):** I tekster og medier betyder Artikel normalt artikel.
**Visi tip bloki (DA):** I tekster og medier betyder Artikel normalt artikel. | I butik eller grammatik ændres betydningen af Artikel: vare eller artikel.
**Problēma:** sectionAccent termins `raksts` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** artikel (CURRENT `raksts` → NEW `artikel`) — Tip bloks: «…Artikel normalt artikel» — LV raksts → DA artikel

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 5. DA-A2-FINAL-0005

**Audit ID:** DA-A2-0005
**Card ID:** `a2-artikel` (de: Artikel)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]`
**CURRENT term:** `raksts`
**Tip bloks (DA, validācijas konteksts):** I tekster og medier betyder Artikel normalt artikel.
**Visi tip bloki (DA):** I tekster og medier betyder Artikel normalt artikel. | I butik eller grammatik ændres betydningen af Artikel: vare eller artikel.
**Problēma:** sectionAccent termins `raksts` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** artikel (CURRENT `raksts` → NEW `artikel`) — same block as #4 — yellow slot

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 6. DA-A2-FINAL-0006

**Audit ID:** DA-A2-0006
**Card ID:** `a2-artikel` (de: Artikel)
**Field:** `study.sectionAccents.tip.leftBlocks.text.green.[0][1]`
**CURRENT term:** `prece`
**Tip bloks (DA, validācijas konteksts):** I butik eller grammatik ændres betydningen af Artikel: vare eller artikel.
**Visi tip bloki (DA):** I tekster og medier betyder Artikel normalt artikel. | I butik eller grammatik ændres betydningen af Artikel: vare eller artikel.
**Problēma:** sectionAccent termins `prece` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** vare (CURRENT `prece` → NEW `vare`) — Tip bloks: «…Artikel: vare eller artikel» — LV prece → DA vare

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 7. DA-A2-FINAL-0007

**Audit ID:** DA-A2-0007
**Card ID:** `a2-artikel` (de: Artikel)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[6][1]`
**CURRENT term:** `prece`
**Tip bloks (DA, validācijas konteksts):** I butik eller grammatik ændres betydningen af Artikel: vare eller artikel.
**Visi tip bloki (DA):** I tekster og medier betyder Artikel normalt artikel. | I butik eller grammatik ændres betydningen af Artikel: vare eller artikel.
**Problēma:** sectionAccent termins `prece` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** vare (CURRENT `prece` → NEW `vare`) — same block as #6 — yellow slot

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 8. DA-A2-FINAL-0008

**Audit ID:** DA-A2-0008
**Card ID:** `a2-bauer` (de: Bauer)
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][0]`
**CURRENT term:** `zemnieks`
**Tip bloks (DA, validācijas konteksts):** Hvis sætningen omfatter mark, køer eller gård, betyder der Bauer landmand.
**Visi tip bloki (DA):** Hvis sætningen omfatter mark, køer eller gård, betyder der Bauer landmand. | Hvis sætningen indeholder skak, bræt eller træk, betyder der Bauer bonde.
**Problēma:** sectionAccent termins `zemnieks` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** landmand (CURRENT `zemnieks` → NEW `landmand`) — Tip bloks: «…Bauer landmand» — LV zemnieks → DA landmand

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 9. DA-A2-FINAL-0009

**Audit ID:** DA-A2-0009
**Card ID:** `a2-bestimmt` (de: bestimmt)
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][0]`
**CURRENT term:** `noteikti`
**Tip bloks (DA, validācijas konteksts):** Hvis bestimmt står for tanken om hele sætningen, betyder det ofte sikkert eller sandsynligvis.
**Visi tip bloki (DA):** Hvis bestimmt står for tanken om hele sætningen, betyder det ofte sikkert eller sandsynligvis. | Når bestimmt kommer før en substantivform, betyder det ofte bestemt eller specifik.
**Problēma:** sectionAccent termins `noteikti` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** sikkert (CURRENT `noteikti` → NEW `sikkert`) — Tip bloks: «…oftere sikkert eller sandsynligvis» — LV noteikti → DA sikkert

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 10. DA-A2-FINAL-0010

**Audit ID:** DA-A2-0010
**Card ID:** `a2-bestimmt` (de: bestimmt)
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][1]`
**CURRENT term:** `noteikts`
**Tip bloks (DA, validācijas konteksts):** Når bestimmt kommer før en substantivform, betyder det ofte bestemt eller specifik.
**Visi tip bloki (DA):** Hvis bestimmt står for tanken om hele sætningen, betyder det ofte sikkert eller sandsynligvis. | Når bestimmt kommer før en substantivform, betyder det ofte bestemt eller specifik.
**Problēma:** sectionAccent termins `noteikts` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** bestemt (CURRENT `noteikts` → NEW `bestemt`) — Tip bloks: «…bestemt eller specifik» — LV noteikts → DA bestemt

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 11. DA-A2-FINAL-0011

**Audit ID:** DA-A2-0011
**Card ID:** `a2-birne` (de: Birne)
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][1]`
**CURRENT term:** `spuldze`
**Tip bloks (DA, validācijas konteksts):** Når det kommer til en lampe eller et lys, kan die Birne betyde en pære.
**Visi tip bloki (DA):** Når det kommer til mad eller frugt, betyder die Birne pære. | Når det kommer til en lampe eller et lys, kan die Birne betyde en pære.
**Problēma:** sectionAccent termins `spuldze` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** pære (CURRENT `spuldze` → NEW `pære`) — Tip bloks: «…die Birne betyde en pære» — LV spuldze → DA pære

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 12. DA-A2-FINAL-0012

**Audit ID:** DA-A2-0012
**Card ID:** `a2-borgen` (de: borgen)
**Field:** `study.sectionAccents.tip.leftBlocks.text.green.[0][1]`
**CURRENT term:** `aizdot`
**Tip bloks (DA, validācijas konteksts):** dir/ihm borgen betyder ofte at låne ud til en anden.
**Visi tip bloki (DA):** Mir borgen betyder ofte at låne til sig selv. | dir/ihm borgen betyder ofte at låne ud til en anden.
**Problēma:** sectionAccent termins `aizdot` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** låne (CURRENT `aizdot` → NEW `låne`) — Tip bloks: «…at låne ud til en anden» — LV aizdot → DA låne

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 13. DA-A2-FINAL-0013

**Audit ID:** DA-A2-0013
**Card ID:** `a2-borgen` (de: borgen)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]`
**CURRENT term:** `aizdot`
**Tip bloks (DA, validācijas konteksts):** dir/ihm borgen betyder ofte at låne ud til en anden.
**Visi tip bloki (DA):** Mir borgen betyder ofte at låne til sig selv. | dir/ihm borgen betyder ofte at låne ud til en anden.
**Problēma:** sectionAccent termins `aizdot` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** låne (CURRENT `aizdot` → NEW `låne`) — same block as #12 — yellow slot

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 14. DA-A2-FINAL-0014

**Audit ID:** DA-A2-0014
**Card ID:** `a2-damit` (de: damit)
**Field:** `study.sectionAccents.tip.leftBlocks.text.green.[0][1]`
**CURRENT term:** `lai`
**Tip bloks (DA, validācijas konteksts):** Hvis tanken er målet "at få noget til at ske", bruges damit også ofte.
**Visi tip bloki (DA):** Hvis tanken er "med denne ting", brug damit. | Hvis tanken er målet "at få noget til at ske", bruges damit også ofte.
**Problēma:** sectionAccent termins `lai` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** damit (CURRENT `lai` → NEW `damit`) — Tip bloks par damit — LV lai → DA damit (faktisk tip teksts)

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 15. DA-A2-FINAL-0015

**Audit ID:** DA-A2-0015
**Card ID:** `a2-eben` (de: eben)
**Field:** `study.sectionAccents.tip.leftBlocks.text.red.[0][0]`
**CURRENT term:** `tikko`
**Tip bloks (DA, validācijas konteksts):** Når eben er ledsaget af en tid, betyder det ofte 'lige nu' eller 'lige nu'.
**Visi tip bloki (DA):** Når eben er ledsaget af en tid, betyder det ofte 'lige nu' eller 'lige nu'. | Hvis eben lyder som en holdning, siger på dansk ofte "simpelthen", "jamen sådan er det" eller "men".
**Problēma:** sectionAccent termins `tikko` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** lige (CURRENT `tikko` → NEW `lige`) — Tip bloks: «…'lige nu'…» — LV tikko → DA lige

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 16. DA-A2-FINAL-0016

**Audit ID:** DA-A2-0016
**Card ID:** `a2-eben` (de: eben)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]`
**CURRENT term:** `tikko`
**Tip bloks (DA, validācijas konteksts):** Når eben er ledsaget af en tid, betyder det ofte 'lige nu' eller 'lige nu'.
**Visi tip bloki (DA):** Når eben er ledsaget af en tid, betyder det ofte 'lige nu' eller 'lige nu'. | Hvis eben lyder som en holdning, siger på dansk ofte "simpelthen", "jamen sådan er det" eller "men".
**Problēma:** sectionAccent termins `tikko` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** lige (CURRENT `tikko` → NEW `lige`) — same block as #15 — yellow slot

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 17. DA-A2-FINAL-0017

**Audit ID:** DA-A2-0017
**Card ID:** `a2-führen` (de: führen)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]`
**CURRENT term:** `firmu`
**Tip bloks (DA, validācijas konteksts):** Når det kommer til et team, firma eller samtale, betyder führen ofte "at lede."
**Visi tip bloki (DA):** Når det kommer til en vej, betyder führen ofte 'at føre et sted hen'. | Når det kommer til et team, firma eller samtale, betyder führen ofte "at lede."
**Problēma:** sectionAccent termins `firmu` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** firma (CURRENT `firmu` → NEW `firma`) — Tip bloks: «…team, firma eller samtale…» — LV firmu → DA firma

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 18. DA-A2-FINAL-0018

**Audit ID:** DA-A2-0018
**Card ID:** `a2-genau` (de: genau)
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[1][1]`
**CURRENT term:** `tikko`
**Tip bloks (DA, validācijas konteksts):** Når det kommer til 'lige nu', er gerade mere almindelig; hvis for "bare", fungerer eben ofte.
**Visi tip bloki (DA):** Når det kommer til nøjagtighed, bruges genau. | Når det kommer til 'lige nu', er gerade mere almindelig; hvis for "bare", fungerer eben ofte.
**Problēma:** sectionAccent termins `tikko` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** lige (CURRENT `tikko` → NEW `lige`) — Tip bloks: «…'lige nu'…» — LV tikko → DA lige

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 19. DA-A2-FINAL-0019

**Audit ID:** DA-A2-0019
**Card ID:** `a2-geschäft` (de: Geschäft)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**CURRENT term:** `veikalu`
**Tip bloks (DA, validācijas konteksts):** Ins Geschäft betyder normalt at gå i butikken.
**Visi tip bloki (DA):** Ins Geschäft betyder normalt at gå i butikken. | ein gutes Geschäft machen betyder at gøre en god handel.
**Problēma:** sectionAccent termins `veikalu` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** butikken (CURRENT `veikalu` → NEW `butikken`) — Tip bloks: «…at gå i butikken» — LV veikalu → DA butikken

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 20. DA-A2-FINAL-0020

**Audit ID:** DA-A2-0020
**Card ID:** `a2-grund` (de: Grund)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]`
**CURRENT term:** `iemesla`
**Tip bloks (DA, validācijas konteksts):** Aus diesem Grund er en meget almindelig sætning og betyder 'af denne grund'.
**Visi tip bloki (DA):** Aus diesem Grund er en meget almindelig sætning og betyder 'af denne grund'. | Med hus, jord eller sø kan Grund betyde fundament, grund eller bund.
**Problēma:** sectionAccent termins `iemesla` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** grund (CURRENT `iemesla` → NEW `grund`) — Tip bloks: «…'af denne grund'» — LV iemesla → DA grund

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 21. DA-A2-FINAL-0021

**Audit ID:** DA-A2-0021
**Card ID:** `a2-note` (de: Note)
**Field:** `study.sectionAccents.tip.leftBlocks.text.green.[0][1]`
**CURRENT term:** `nots`
**Tip bloks (DA, validācijas konteksts):** I musik betyder Note musikseddel, og seddel er en pengeseddel.
**Visi tip bloki (DA):** I skolen betyder Note næsten altid karakter. | I musik betyder Note musikseddel, og seddel er en pengeseddel.
**Problēma:** sectionAccent termins `nots` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** seddel (CURRENT `nots` → NEW `seddel`) — Tip bloks: «…musikseddel, og seddel…» — LV nots → DA seddel

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 22. DA-A2-FINAL-0022

**Audit ID:** DA-A2-0022
**Card ID:** `a2-note` (de: Note)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]`
**CURRENT term:** `nots`
**Tip bloks (DA, validācijas konteksts):** I musik betyder Note musikseddel, og seddel er en pengeseddel.
**Visi tip bloki (DA):** I skolen betyder Note næsten altid karakter. | I musik betyder Note musikseddel, og seddel er en pengeseddel.
**Problēma:** sectionAccent termins `nots` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** seddel (CURRENT `nots` → NEW `seddel`) — same block as #21 — yellow slot

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 23. DA-A2-FINAL-0023

**Audit ID:** DA-A2-0023
**Card ID:** `a2-rolle` (de: Rolle)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]`
**CURRENT term:** `lomu`
**Tip bloks (DA, validācijas konteksts):** Eine Rolle spielen betyder 'at spille en rolle' eller 'at have en rolle'.
**Visi tip bloki (DA):** Eine Rolle spielen betyder 'at spille en rolle' eller 'at have en rolle'. | Når man henviser til papir, stof eller en genstand, betyder Rolle normalt en rulle.
**Problēma:** sectionAccent termins `lomu` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** rolle (CURRENT `lomu` → NEW `rolle`) — Tip bloks: «…spille en rolle…» — LV lomu → DA rolle

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 24. DA-A2-FINAL-0024

**Audit ID:** DA-A2-0024
**Card ID:** `a2-scheinen` (de: scheinen)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]`
**CURRENT term:** `Saule`
**Tip bloks (DA, validācijas konteksts):** Sol eller lys + scheinen betyder at skinne.
**Visi tip bloki (DA):** Sol eller lys + scheinen betyder at skinne. | Person/situation + scheint ... zu sein betyder at virke.
**Problēma:** sectionAccent termins `Saule` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** Sol (CURRENT `Saule` → NEW `Sol`) — Tip bloks: «Sol eller lys + scheinen…» — LV Saule → DA Sol

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 25. DA-A2-FINAL-0025

**Audit ID:** DA-A2-0025
**Card ID:** `a2-schuld` (de: Schuld)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]`
**CURRENT term:** `vaina`
**Tip bloks (DA, validācijas konteksts):** Schuld i ental betyder normalt skyld eller ansvar.
**Visi tip bloki (DA):** Schuld i ental betyder normalt skyld eller ansvar. | Schulden i flertal betyder gæld, ikke blot fejl.
**Problēma:** sectionAccent termins `vaina` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** skyld (CURRENT `vaina` → NEW `skyld`) — Tip bloks: «…skyld eller ansvar» — LV vaina → DA skyld

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 26. DA-A2-FINAL-0026

**Audit ID:** DA-A2-0026
**Card ID:** `a2-schuld` (de: Schuld)
**Field:** `study.sectionAccents.tip.leftBlocks.text.orange.[0][0]`
**CURRENT term:** `vaina`
**Tip bloks (DA, validācijas konteksts):** Schuld i ental betyder normalt skyld eller ansvar.
**Visi tip bloki (DA):** Schuld i ental betyder normalt skyld eller ansvar. | Schulden i flertal betyder gæld, ikke blot fejl.
**Problēma:** sectionAccent termins `vaina` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** skyld (CURRENT `vaina` → NEW `skyld`) — same block as #25 — orange slot

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 27. DA-A2-FINAL-0027

**Audit ID:** DA-A2-0027
**Card ID:** `a2-steigen` (de: steigen)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]`
**CURRENT term:** `cenas`
**Tip bloks (DA, validācijas konteksts):** Hvis noget går op, er steigen ofte passende: priser, temperatur, vandstand.
**Visi tip bloki (DA):** Hvis noget går op, er steigen ofte passende: priser, temperatur, vandstand. | Ved transport bruges som regel einsteigen og aussteigen, ikke kun steigen.
**Problēma:** sectionAccent termins `cenas` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** priser (CURRENT `cenas` → NEW `priser`) — Tip bloks: «…priser, temperatur, vandstand» — LV cenas → DA priser

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 28. DA-A2-FINAL-0028

**Audit ID:** DA-A2-0028
**Card ID:** `a2-stelle` (de: Stelle)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]`
**CURRENT term:** `vietu`
**Tip bloks (DA, validācijas konteksts):** im Text / an dieser Stelle betyder et bestemt sted i teksten eller situationen.
**Visi tip bloki (DA):** Eine Stelle suchen betyder som regel at søge job. | im Text / an dieser Stelle betyder et bestemt sted i teksten eller situationen.
**Problēma:** sectionAccent termins `vietu` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** sted (CURRENT `vietu` → NEW `sted`) — Tip bloks: «…et bestemt sted i teksten…» — LV vietu → DA sted

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---

## 29. DA-A2-FINAL-0029

**Audit ID:** DA-A2-0029
**Card ID:** `a2-wählen` (de: wählen)
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]`
**CURRENT term:** `numuru`
**Tip bloks (DA, validācijas konteksts):** Nummer wählen betyder at ringe til et telefonnummer.
**Visi tip bloki (DA):** I forbindelse med partier eller kandidater betyder wählen at stemme/stemme. | Nummer wählen betyder at ringe til et telefonnummer.
**Problēma:** sectionAccent termins `numuru` nav atrodams DA Study tip tekstā (stale LV atlikums)
**PROPOSED (LABOT):** nummer (CURRENT `numuru` → NEW `nummer`) — Tip bloks: «Nummer wählen…telefonnummer» — LV numuru → DA nummer

**OWNER_DECISION:** _(aizpildi [decisions tabulā](./da-a2-owner-decisions-final29-sectionaccents.md))_

---
