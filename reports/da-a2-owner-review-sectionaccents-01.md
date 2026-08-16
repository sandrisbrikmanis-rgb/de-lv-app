# DA–DE A2 — OWNER review Misc sectionaccents-01

Avots: `reports/da-a2-full-audit.md` / `reports/temp/da-a2-audit-data.json`
Findings: **6–87** (50 ieraksti)
Fails: `reports/da-a2-owner-review-sectionaccents-01.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-a2-owner-decisions-${slug}.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).
> sectionAccents: var lietot **FJERN `termins`** vai pilnu jaunu tekstu.

## Finding 6

**Audit ID:** DA-A2-0006
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks[0].text.green[0]`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.sectionAccents.tip.leftBlocks[0].text.green[0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** atiet
**PROPOSED_DA:** afgår
**Problēma:** Svešvalodu/artefaktu pazīmes: LV_WORD
**Audita pamatojums:** DA saturā nedrīkst palikt LV/EN/CS/PL atlikumi vai artefakti
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-A2-0012
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.green.[0][0]`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.sectionAccents.tip.leftBlocks.text.green.[0][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** atiet
**PROPOSED_DA:** atiet
**Problēma:** sectionAccents svešvalodu termins: LV_WORD
**Audita pamatojums:** Akcentu terminiem jāatbilst dāņu Study saturam
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-A2-0013
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** autobusa
**PROPOSED_DA:** FJERN «autobusa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-A2-0014
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** vilciena
**PROPOSED_DA:** FJERN «vilciena»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-A2-0015
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** grafiku
**PROPOSED_DA:** FJERN «grafiku»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-A2-0016
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** runa
**PROPOSED_DA:** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-A2-0017
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.orange.[0][1]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.orange.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** aizbraukt
**PROPOSED_DA:** FJERN «aizbraukt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-A2-0018
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.red.[0][1]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.red.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** to go on a journey
**PROPOSED_DA:** FJERN «to go on a journey»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-A2-0019
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** to people
**PROPOSED_DA:** FJERN «to people»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-A2-0020
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** on a trip
**PROPOSED_DA:** FJERN «on a trip»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-A2-0021
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** often
**PROPOSED_DA:** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-A2-0022
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]`
**DE (read-only):** abfahren
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** runa
**PROPOSED_DA:** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-A2-0029
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.sectionAccents.examples.lv.purple.[0][5]`
**DE (read-only):** abgeben
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples.lv.purple.[0][5]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** return
**PROPOSED_DA:** FJERN «return»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** DA-A2-0030
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.sectionAccents.examples.lv.purple.[1][5]`
**DE (read-only):** abgeben
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples.lv.purple.[1][5]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** return
**PROPOSED_DA:** FJERN «return»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** DA-A2-0031
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.sectionAccents.tip.leftBlocks.text.purple.[0][0]`
**DE (read-only):** abgeben
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** nodots vai atdots
**PROPOSED_DA:** FJERN «nodots vai atdots»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** DA-A2-0032
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.sectionAccents.tip.leftBlocks.text.purple.[0][1]`
**DE (read-only):** abgeben
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** iesniegt
**PROPOSED_DA:** FJERN «iesniegt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** DA-A2-0036
**Card ID:** a2-bringen
**ID / path:** `a2-bringen.study.sectionAccents.examples.lv.purple.[0][2]`
**DE (read-only):** bringen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples.lv.purple.[0][2]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** bring
**PROPOSED_DA:** FJERN «bring»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** DA-A2-0042
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]`
**DE (read-only):** absagen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[0][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** koncertu
**PROPOSED_DA:** FJERN «koncertu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** DA-A2-0043
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**DE (read-only):** absagen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** the event
**PROPOSED_DA:** FJERN «the event»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** DA-A2-0044
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]`
**DE (read-only):** absagen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** the meeting
**PROPOSED_DA:** FJERN «the meeting»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** DA-A2-0045
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]`
**DE (read-only):** absagen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** lieto
**PROPOSED_DA:** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** DA-A2-0046
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]`
**DE (read-only):** absagen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** proposal
**PROPOSED_DA:** FJERN «proposal»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** DA-A2-0047
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]`
**DE (read-only):** absagen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** offer
**PROPOSED_DA:** FJERN «offer»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** DA-A2-0048
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]`
**DE (read-only):** absagen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** more often
**PROPOSED_DA:** FJERN «more often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** DA-A2-0049
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]`
**DE (read-only):** absagen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** lieto
**PROPOSED_DA:** FJERN «lieto»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 53

**Audit ID:** DA-A2-0053
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** the key
**PROPOSED_DA:** FJERN «the key»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 54

**Audit ID:** DA-A2-0054
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[2][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** often
**PROPOSED_DA:** FJERN «often»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 55

**Audit ID:** DA-A2-0055
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** nevis
**PROPOSED_DA:** FJERN «nevis»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 56

**Audit ID:** DA-A2-0056
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** tikai
**PROPOSED_DA:** FJERN «tikai»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 57

**Audit ID:** DA-A2-0057
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.green.[0][1]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.green.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** conclude
**PROPOSED_DA:** FJERN «conclude»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 58

**Audit ID:** DA-A2-0058
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[1][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** projektu
**PROPOSED_DA:** FJERN «projektu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 59

**Audit ID:** DA-A2-0059
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** conclude
**PROPOSED_DA:** FJERN «conclude»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 60

**Audit ID:** DA-A2-0060
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[3][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** pabeigt
**PROPOSED_DA:** FJERN «pabeigt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 61

**Audit ID:** DA-A2-0061
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[4][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** contract
**PROPOSED_DA:** FJERN «contract»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 62

**Audit ID:** DA-A2-0062
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]`
**DE (read-only):** abschließen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[5][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** runa
**PROPOSED_DA:** FJERN «runa»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 70

**Audit ID:** DA-A2-0070
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.examples.lv.purple.[0][0]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples.lv.purple.[0][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** park
**PROPOSED_DA:** FJERN «park»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 71

**Audit ID:** DA-A2-0071
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.leftBlocks.text.purple.[0][0]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** novietot
**PROPOSED_DA:** FJERN «novietot»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 72

**Audit ID:** DA-A2-0072
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.leftBlocks.text.purple.[1][0]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[1][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** nolikt
**PROPOSED_DA:** FJERN «nolikt»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 73

**Audit ID:** DA-A2-0073
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[1][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** bicycle
**PROPOSED_DA:** FJERN «bicycle»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 74

**Audit ID:** DA-A2-0074
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.leftBlocks.text.purple.[0][1]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** disable
**PROPOSED_DA:** FJERN «disable»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 75

**Audit ID:** DA-A2-0075
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** water
**PROPOSED_DA:** FJERN «water»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 76

**Audit ID:** DA-A2-0076
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.yellow.[2][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** electricity
**PROPOSED_DA:** FJERN «electricity»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 77

**Audit ID:** DA-A2-0077
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.rightBlocks.text.purple.[0][0]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.rightBlocks.text.purple.[0][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** turn off
**PROPOSED_DA:** FJERN «turn off»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 78

**Audit ID:** DA-A2-0078
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.rightBlocks.text.yellow.[0][0]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.rightBlocks.text.yellow.[0][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** motoru
**PROPOSED_DA:** FJERN «motoru»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 79

**Audit ID:** DA-A2-0079
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.rightBlocks.text.yellow.[1][0]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.rightBlocks.text.yellow.[1][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** alarm clock
**PROPOSED_DA:** FJERN «alarm clock»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 80

**Audit ID:** DA-A2-0080
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.rightBlocks.text.purple.[0][1]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.rightBlocks.text.purple.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** turn off
**PROPOSED_DA:** FJERN «turn off»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 81

**Audit ID:** DA-A2-0081
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.sectionAccents.tip.rightBlocks.text.yellow.[2][1]`
**DE (read-only):** abstellen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.rightBlocks.text.yellow.[2][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** gaismu
**PROPOSED_DA:** FJERN «gaismu»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 85

**Audit ID:** DA-A2-0085
**Card ID:** a2-angewandt
**ID / path:** `a2-angewandt.study.sectionAccents.comparison.example.purple.[0][1]`
**DE (read-only):** angewandt
**Severity:** MEDIUM
**Field:** `study.sectionAccents.comparison.example.purple.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** praktiske
**PROPOSED_DA:** FJERN «praktiske»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 86

**Audit ID:** DA-A2-0086
**Card ID:** a2-angewandt
**ID / path:** `a2-angewandt.study.sectionAccents.comparison.example.purple.[1][1]`
**DE (read-only):** angewandt
**Severity:** MEDIUM
**Field:** `study.sectionAccents.comparison.example.purple.[1][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** praktiske
**PROPOSED_DA:** FJERN «praktiske»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 87

**Audit ID:** DA-A2-0087
**Card ID:** a2-angewandt
**ID / path:** `a2-angewandt.study.sectionAccents.tip.leftBlocks.text.purple.[0][0]`
**DE (read-only):** angewandt
**Severity:** MEDIUM
**Field:** `study.sectionAccents.tip.leftBlocks.text.purple.[0][0]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** practical
**PROPOSED_DA:** FJERN «practical»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---
