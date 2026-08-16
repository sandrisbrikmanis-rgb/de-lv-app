# DA–DE A2 — OWNER review Misc part 01

Avots: `reports/da-a2-full-audit.md` / `reports/temp/da-a2-audit-data.json`
Findings: **5–660** (50 ieraksti)
Fails: `reports/da-a2-owner-review-misc-01.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-a2-owner-decisions-${slug}.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).
> sectionAccents: var lietot **FJERN `termins`** vai pilnu jaunu tekstu.

## Finding 5

**Audit ID:** DA-A2-0005
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.important.text`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.important.text`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Abfahren nav “aizvest”.
**PROPOSED_DA:** Abfahren nav “aizvest”.
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-A2-0007
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.accents.blue[11]`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.accents.blue[11]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** atiet
**PROPOSED_DA:** afgår
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-A2-0008
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.accents.green[1]`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.accents.green[1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** atiet
**PROPOSED_DA:** afgår
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-A2-0009
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.accents.purple[2]`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.accents.purple[2]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** aizbraukt prom
**PROPOSED_DA:** aizbraukt væk
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-A2-0010
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.accents.purple[3]`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.accents.purple[3]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** atiet / noiet
**PROPOSED_DA:** afgår / noiet
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-A2-0011
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.accents.purple[5]`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.accents.purple[5]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** braukt
**PROPOSED_DA:** braukt
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-A2-0023
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.lv`
**DE (read-only):** abgeben
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Overdrag • Giv væk • Indsend
**PROPOSED_DA:** Overdrag • Giv væk
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** DA-A2-0033
**Card ID:** a2-abgemacht-6
**ID / path:** `a2-abgemacht-6.lv`
**DE (read-only):** abgemacht
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Afgjort • Besluttet • Aftalt
**PROPOSED_DA:** Afgjort • Besluttet
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** DA-A2-0034
**Card ID:** a2-holen
**ID / path:** `a2-holen.study.explanation[1]`
**DE (read-only):** holen
**Severity:** MEDIUM
**Field:** `study.explanation[1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Holen betyder hovedsageligt: ​​gå og hent.
**PROPOSED_DA:** Holen betyder hovedsageligt: gå og hent.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** DA-A2-0035
**Card ID:** a2-bringen
**ID / path:** `a2-bringen.study.explanation[1]`
**DE (read-only):** bringen
**Severity:** MEDIUM
**Field:** `study.explanation[1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Bringen betyder hovedsageligt: ​​at bringe hertil.
**PROPOSED_DA:** Bringen betyder hovedsageligt: at bringe hertil.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** DA-A2-0050
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.lv`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** For at låse • For at afslutte • For at fuldføre
**PROPOSED_DA:** For at låse • For at afslutte
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 63

**Audit ID:** DA-A2-0063
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.lv`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Læg ned • Placer • Af
**PROPOSED_DA:** Læg ned • Placer
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 64

**Audit ID:** DA-A2-0064
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.explanation[0]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.explanation[0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Hovedidé: betydningen af ​​abstellen bestemmes af objektet: parker bilen eller tasken, sluk for vandet eller elektriciteten, sluk for motoren, ret problemet.
**PROPOSED_DA:** Hovedidé: betydningen af abstellen bestemmes af objektet: parker bilen eller tasken, sluk for vandet eller elektriciteten, sluk for motoren, ret problemet.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 82

**Audit ID:** DA-A2-0082
**Card ID:** a2-angewandt
**ID / path:** `a2-angewandt.lv`
**DE (read-only):** angewandt
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Anvendt • Anvendt • Praktisk
**PROPOSED_DA:** Anvendt • Anvendt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 100

**Audit ID:** DA-A2-0100
**Card ID:** a2-anhänger
**ID / path:** `a2-anhänger.lv`
**DE (read-only):** Anhänger
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Trailer • Supporter • Vedhæng
**PROPOSED_DA:** Trailer • Supporter
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 146

**Audit ID:** DA-A2-0146
**Card ID:** a2-anstellen
**ID / path:** `a2-anstellen.study.examples[2].lv`
**DE (read-only):** anstellen
**Severity:** MEDIUM
**Field:** `study.examples[2].lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Vi står for enden af ​​rækken.
**PROPOSED_DA:** Vi står for enden af rækken.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 170

**Audit ID:** DA-A2-0170
**Card ID:** a2-artikel
**ID / path:** `a2-artikel.study.tip.leftBlocks[1].text`
**DE (read-only):** Artikel
**Severity:** MEDIUM
**Field:** `study.tip.leftBlocks[1].text`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** I butik eller grammatik ændres betydningen af ​​Artikel: vare eller artikel.
**PROPOSED_DA:** I butik eller grammatik ændres betydningen af Artikel: vare eller artikel.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 177

**Audit ID:** DA-A2-0177
**Card ID:** a2-aufheben
**ID / path:** `a2-aufheben.lv`
**DE (read-only):** aufheben
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Hæv • Annuller • Gem
**PROPOSED_DA:** Hæv • Annuller
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 196

**Audit ID:** DA-A2-0196
**Card ID:** a2-aufnahme
**ID / path:** `a2-aufnahme.lv`
**DE (read-only):** Aufnahme
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Optagelse • Optagelse • Foto
**PROPOSED_DA:** Optagelse • Optagelse
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 216

**Audit ID:** DA-A2-0216
**Card ID:** a2-aufrichtig
**ID / path:** `a2-aufrichtig.lv`
**DE (read-only):** aufrichtig
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Oprigtig • Oprigtig • Åben
**PROPOSED_DA:** Oprigtig • Oprigtig
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 227

**Audit ID:** DA-A2-0227
**Card ID:** a2-aufrufen
**ID / path:** `a2-aufrufen.lv`
**DE (read-only):** aufrufen
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ring op • Åbn • Inviter
**PROPOSED_DA:** Ring op • Åbn
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 316

**Audit ID:** DA-A2-0316
**Card ID:** a2-bahn
**ID / path:** `a2-bahn.study.accents.purple[1]`
**DE (read-only):** Bahn
**Severity:** HIGH
**Field:** `study.accents.purple[1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** vilciens
**PROPOSED_DA:** vilciens
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 317

**Audit ID:** DA-A2-0317
**Card ID:** a2-bahn
**ID / path:** `a2-bahn.study.accents.purple[2]`
**DE (read-only):** Bahn
**Severity:** HIGH
**Field:** `study.accents.purple[2]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Vilciens
**PROPOSED_DA:** Toget
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 318

**Audit ID:** DA-A2-0318
**Card ID:** a2-bahn
**ID / path:** `a2-bahn.study.accents.purple[3]`
**DE (read-only):** Bahn
**Severity:** HIGH
**Field:** `study.accents.purple[3]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** braukt ar vilcienu
**PROPOSED_DA:** braukt ar vilcienu
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 347

**Audit ID:** DA-A2-0347
**Card ID:** a2-bauen
**ID / path:** `a2-bauen.lv`
**DE (read-only):** bauen
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Byg • Byg • Lav
**PROPOSED_DA:** Byg • Byg
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 361

**Audit ID:** DA-A2-0361
**Card ID:** a2-bauer
**ID / path:** `a2-bauer.study.explanation`
**DE (read-only):** Bauer
**Severity:** MEDIUM
**Field:** `study.explanation`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Hovedidé: der Bauer betyder oftest bonde, men i skak betyder det bonde. I hverdagen er der Bauer normalt en person, der arbejder i landbruget. I skaksammenhæng er der Bauer en af ​​brikkerne. Farmer er ikke hovedbetydningen af ​​A2. Konteksten gør det normalt klart, om det er en person eller en skak…
**PROPOSED_DA:** Hovedidé: der Bauer betyder oftest bonde, men i skak betyder det bonde. I hverdagen er der Bauer normalt en person, der arbejder i landbruget. I skaksammenhæng er der Bauer en af brikkerne. Farmer er ikke hovedbetydningen af A2. Konteksten gør det normalt klart, om det er en person eller en skakbrik…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 377

**Audit ID:** DA-A2-0377
**Card ID:** a2-bedienung
**ID / path:** `a2-bedienung.study.explanation`
**DE (read-only):** Bedienung
**Severity:** MEDIUM
**Field:** `study.explanation`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Hovedidé: die Bedienung kan betyde tjeneste eller en person, der tjener. I en restaurant kan dette ofte være en tjener eller tjener/servitrice. Med apparater kan die Bedienung også betyde brug eller kontrol. Besætning er ikke hovedbetydningen af ​​A2. Konteksten afgør, om det er en proces eller en p…
**PROPOSED_DA:** Hovedidé: die Bedienung kan betyde tjeneste eller en person, der tjener. I en restaurant kan dette ofte være en tjener eller tjener/servitrice. Med apparater kan die Bedienung også betyde brug eller kontrol. Besætning er ikke hovedbetydningen af A2. Konteksten afgør, om det er en proces eller en per…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 399

**Audit ID:** DA-A2-0399
**Card ID:** a2-beißen-223
**ID / path:** `a2-beißen-223.lv`
**DE (read-only):** beißen
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** At bide • At bide • At bide
**PROPOSED_DA:** At bide • At bide
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 415

**Audit ID:** DA-A2-0415
**Card ID:** a2-beliebt-227
**ID / path:** `a2-beliebt-227.lv`
**DE (read-only):** beliebt
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Favorit • Favorit • Populær
**PROPOSED_DA:** Favorit • Favorit
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 416

**Audit ID:** DA-A2-0416
**Card ID:** a2-besonders-240
**ID / path:** `a2-besonders-240.lv`
**DE (read-only):** besonders
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Specielt • Specielt • Specielt
**PROPOSED_DA:** Specielt • Specielt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 417

**Audit ID:** DA-A2-0417
**Card ID:** a2-bestellen
**ID / path:** `a2-bestellen.study.explanation`
**DE (read-only):** bestellen
**Severity:** MEDIUM
**Field:** `study.explanation`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Hovedidé: bestellen i hverdagen betyder ofte at bestille eller reservere. Det bruges til mad på en restaurant, varer på internettet og nogle gange til bordreservation. I udtrykket Grüße bestellen betyder det at overbringe hilsner. Den landbrugsmæssige betydning af 'dyrke en mark' er ikke hovedbetydn…
**PROPOSED_DA:** Hovedidé: bestellen i hverdagen betyder ofte at bestille eller reservere. Det bruges til mad på en restaurant, varer på internettet og nogle gange til bordreservation. I udtrykket Grüße bestellen betyder det at overbringe hilsner. Den landbrugsmæssige betydning af 'dyrke en mark' er ikke hovedbetydn…
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 440

**Audit ID:** DA-A2-0440
**Card ID:** a2-bitte-study
**ID / path:** `a2-bitte-study.study.explanation[1]`
**DE (read-only):** Bitte
**Severity:** MEDIUM
**Field:** `study.explanation[1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Bitte betyder hovedsageligt: ​​høflighed.
**PROPOSED_DA:** Die Bitte betyder hovedsageligt: høflighed.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 454

**Audit ID:** DA-A2-0454
**Card ID:** a2-boden
**ID / path:** `a2-boden.study.examples[5].lv`
**DE (read-only):** Boden
**Severity:** MEDIUM
**Field:** `study.examples[5].lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der er stadig vand i bunden af ​​flasken.
**PROPOSED_DA:** Der er stadig vand i bunden af flasken.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 458

**Audit ID:** DA-A2-0458
**Card ID:** a2-boden
**ID / path:** `a2-boden.study.comparison[4].meaning`
**DE (read-only):** Boden
**Severity:** MEDIUM
**Field:** `study.comparison[4].meaning`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Bunden af ​​flasken
**PROPOSED_DA:** Bunden af flasken
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 459

**Audit ID:** DA-A2-0459
**Card ID:** a2-boden
**ID / path:** `a2-boden.study.important.text`
**DE (read-only):** Boden
**Severity:** MEDIUM
**Field:** `study.important.text`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Betydningen af ​​Boden varierer fra sted til sted.
**PROPOSED_DA:** Betydningen af Boden varierer fra sted til sted.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 460

**Audit ID:** DA-A2-0460
**Card ID:** a2-boden
**ID / path:** `a2-boden.study.important.example`
**DE (read-only):** Boden
**Severity:** MEDIUM
**Field:** `study.important.example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** auf dem Boden = på gulvet. fruchtbarer Boden = frugtbar jord. Boden der Flasche = bunden af ​​flasken.
**PROPOSED_DA:** auf dem Boden = på gulvet. fruchtbarer Boden = frugtbar jord. Boden der Flasche = bunden af flasken.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 471

**Audit ID:** DA-A2-0471
**Card ID:** a2-borgen
**ID / path:** `a2-borgen.study.important.text`
**DE (read-only):** borgen
**Severity:** MEDIUM
**Field:** `study.important.text`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Betydningen af ​​borgen afhænger af retningen.
**PROPOSED_DA:** Betydningen af borgen afhænger af retningen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 489

**Audit ID:** DA-A2-0489
**Card ID:** a2-Briefkasten-290
**ID / path:** `a2-Briefkasten-290.lv`
**DE (read-only):** Briefkasten
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Postkasse • ​​Brevkasse
**PROPOSED_DA:** Postkasse • Brevkasse
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 490

**Audit ID:** DA-A2-0490
**Card ID:** a2-Chance-306
**ID / path:** `a2-Chance-306.lv`
**DE (read-only):** Chance
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Mulighed • Udsigt • Mulighed
**PROPOSED_DA:** Mulighed • Udsigt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 491

**Audit ID:** DA-A2-0491
**Card ID:** a2-dabei
**ID / path:** `a2-dabei.study.explanation[3]`
**DE (read-only):** dabei
**Severity:** MEDIUM
**Field:** `study.explanation[3]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** I daglig tale betyder dabe ofte også foruden • "udover" er en sekundær variant, ikke betydningen af ​​hovedtitlen.
**PROPOSED_DA:** I daglig tale betyder dabe ofte også foruden • "udover" er en sekundær variant, ikke betydningen af hovedtitlen.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 508

**Audit ID:** DA-A2-0508
**Card ID:** a2-dafür
**ID / path:** `a2-dafür.lv`
**DE (read-only):** dafür
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** For at • At • Dog
**PROPOSED_DA:** For at • At
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 539

**Audit ID:** DA-A2-0539
**Card ID:** a2-darauf
**ID / path:** `a2-darauf.lv`
**DE (read-only):** darauf
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** På den • På den • Efter det
**PROPOSED_DA:** På den • På den
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 576

**Audit ID:** DA-A2-0576
**Card ID:** a2-davor
**ID / path:** `a2-davor.study.explanation[2]`
**DE (read-only):** davor
**Severity:** MEDIUM
**Field:** `study.explanation[2]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** I betydningen af ​​tid betyder davor før.
**PROPOSED_DA:** I betydningen af tid betyder davor før.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 580

**Audit ID:** DA-A2-0580
**Card ID:** a2-davor
**ID / path:** `a2-davor.study.important[0]`
**DE (read-only):** davor
**Severity:** MEDIUM
**Field:** `study.important[0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Betydningen af ​​davor ændres i henhold til kontekst.
**PROPOSED_DA:** Betydningen af davor ændres i henhold til kontekst.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 581

**Audit ID:** DA-A2-0581
**Card ID:** a2-dazu
**ID / path:** `a2-dazu.study.explanation[2]`
**DE (read-only):** dazu
**Severity:** MEDIUM
**Field:** `study.explanation[2]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Det kan betyde ved siden af ​​eller nærværende, hvis der tilføjes noget.
**PROPOSED_DA:** Det kan betyde ved siden af eller nærværende, hvis der tilføjes noget.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 587

**Audit ID:** DA-A2-0587
**Card ID:** a2-decke
**ID / path:** `a2-decke.study.important[1]`
**DE (read-only):** Decke
**Severity:** MEDIUM
**Field:** `study.important[1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** das Dach er et tag på ydersiden eller toppen af ​​en bygning.
**PROPOSED_DA:** das Dach er et tag på ydersiden eller toppen af en bygning.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 592

**Audit ID:** DA-A2-0592
**Card ID:** a2-deutlich-340
**ID / path:** `a2-deutlich-340.lv`
**DE (read-only):** deutlich
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Klar • Klar • Forståelig
**PROPOSED_DA:** Klar • Klar
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 616

**Audit ID:** DA-A2-0616
**Card ID:** a2-doppelt-349
**ID / path:** `a2-doppelt-349.lv`
**DE (read-only):** doppelt
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Dobbelt • Dobbelt • Dobbelt
**PROPOSED_DA:** Dobbelt • Dobbelt
**Problēma:** Garā sinonīmu ķēde priekšpusē (3+ • segmenti)
**Audita pamatojums:** A2 galvenajā laukā ieteicams 1–2 dabiski dāņu sinonīmi
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 617

**Audit ID:** DA-A2-0617
**Card ID:** a2-dünn
**ID / path:** `a2-dünn.study.explanation[0]`
**DE (read-only):** dünn
**Severity:** MEDIUM
**Field:** `study.explanation[0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Hovedidé: Betydningen af ​​dünn ændrer sig alt efter sagen: en person er tynd, papir er tyndt, hår kan være sparsomt, suppe kan være flydende.
**PROPOSED_DA:** Hovedidé: Betydningen af dünn ændrer sig alt efter sagen: en person er tynd, papir er tyndt, hår kan være sparsomt, suppe kan være flydende.
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 660

**Audit ID:** DA-A2-0660
**Card ID:** a2-einschalten
**ID / path:** `a2-einschalten.study.explanation`
**DE (read-only):** einschalten
**Severity:** MEDIUM
**Field:** `study.explanation`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Einschalten betyder oftest tænd for enheden. Den bruges til lys, TV, computer eller radio. Det kan også betyde at involvere en person eller institution i løsningen af ​​et problem. Nogle gange kan processen aktiveres automatisk. Betydningen fremgår tydeligt af objektet: Licht, Fernseher, Anwalt elle…
**PROPOSED_DA:** Einschalten betyder oftest tænd for enheden. Den bruges til lys, TV, computer eller radio. Det kan også betyde at involvere en person eller institution i løsningen af et problem. Nogle gange kan processen aktiveres automatisk. Betydningen fremgår tydeligt af objektet: Licht, Fernseher, Anwalt eller …
**Problēma:** Svešvalodu/artefaktu pazīmes: ZERO_WIDTH
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---
