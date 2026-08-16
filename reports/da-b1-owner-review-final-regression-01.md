# DA–DE B1 — OWNER review final regression 01

Avots: [`da-b1-final-repair-regression-audit.md`](./da-b1-final-repair-regression-audit.md)
Findings: **1–11** (11 ieraksti — residual stale sectionAccents pēc pilna repair)
Fails: `reports/da-b1-owner-review-final-regression-01.md`

> **PROPOSED_DA** = ieteikums (parasti **FJERN `termins`**). Ieraksti lēmumu laukā **OWNER_DECISION** vai tabulā [`da-b1-owner-decisions-final-regression-01.md`](./da-b1-owner-decisions-final-regression-01.md).
> **DE lauki nemainīt.** sectionAccents: **FJERN `termins`** noņem akcentu; alternatīvi var norādīt jaunu akcenta terminu, ja tas atbilst Study DA tekstam.

## Kopsavilkuma tabula

| # | Reg ID | Card ID | Field | CURRENT |
|--:|---|---|---|---|
| 1 | DA-B1-FRR-0001 | `b1-absetzen` | `study.sectionAccents.examples[2].lv.purple.[0]` | minister |
| 2 | DA-B1-FRR-0002 | `b1-bestehen` | `study.sectionAccents.examples[0].lv.purple.[0]` | problem |
| 3 | DA-B1-FRR-0003 | `b1-dienen` | `study.sectionAccents.important.purple.[0]` | dienen |
| 4 | DA-B1-FRR-0004 | `b1-einführen` | `study.sectionAccents.comparison[1].meaning.purple.[0]` | import |
| 5 | DA-B1-FRR-0005 | `b1-einhalten` | `study.sectionAccents.comparison[2].meaning.purple.[0]` | Hold |
| 6 | DA-B1-FRR-0006 | `b1-festhalten` | `study.sectionAccents.comparison[1].meaning.purple.[0]` | Hold |
| 7 | DA-B1-FRR-0007 | `b1-hupe` | `study.sectionAccents.explanation.purple.[0]` | horn |
| 8 | DA-B1-FRR-0008 | `b1-hupe` | `study.sectionAccents.examples[1].lv.purple.[0]` | horn |
| 9 | DA-B1-FRR-0009 | `b1-kante` | `study.sectionAccents.explanation.purple.[0]` | facet |
| 10 | DA-B1-FRR-0010 | `b1-senden` | `study.sectionAccents.examples[0].lv.purple.[0]` | send |
| 11 | DA-B1-FRR-0011 | `b1-übergeben` | `study.sectionAccents.examples[0].lv.purple.[0]` | give |

---

## Finding 1

**Reg ID:** DA-B1-FRR-0001
**Audit ID:** DA-B1-FRR-0001
**Card ID:** b1-absetzen
**ID / path:** `b1-absetzen.study.sectionAccents.examples[2].lv.purple.[0]`
**DE (read-only):** absetzen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples[2].lv.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** minister
**PROPOSED_DA:** FJERN «minister»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Ministeren blev fjernet fra embedet.)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 2

**Reg ID:** DA-B1-FRR-0002
**Audit ID:** DA-B1-FRR-0002
**Card ID:** b1-bestehen
**ID / path:** `b1-bestehen.study.sectionAccents.examples[0].lv.purple.[0]`
**DE (read-only):** bestehen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples[0].lv.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** problem
**PROPOSED_DA:** FJERN «problem»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Problemet eksisterer stadig.)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 3

**Reg ID:** DA-B1-FRR-0003
**Audit ID:** DA-B1-FRR-0003
**Card ID:** b1-dienen
**ID / path:** `b1-dienen.study.sectionAccents.important.purple.[0]`
**DE (read-only):** dienen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.important.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** dienen
**PROPOSED_DA:** FJERN «dienen»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Dien er ikke sædvanligt at "hjælpe en mand" • At hjælpe er normalt helfen.)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 4

**Reg ID:** DA-B1-FRR-0004
**Audit ID:** DA-B1-FRR-0004
**Card ID:** b1-einführen
**ID / path:** `b1-einführen.study.sectionAccents.comparison[1].meaning.purple.[0]`
**DE (read-only):** einführen
**Severity:** MEDIUM
**Field:** `study.sectionAccents.comparison[1].meaning.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** import
**PROPOSED_DA:** FJERN «import»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: At importere)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 5

**Reg ID:** DA-B1-FRR-0005
**Audit ID:** DA-B1-FRR-0005
**Card ID:** b1-einhalten
**ID / path:** `b1-einhalten.study.sectionAccents.comparison[2].meaning.purple.[0]`
**DE (read-only):** einhalten
**Severity:** MEDIUM
**Field:** `study.sectionAccents.comparison[2].meaning.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** Hold
**PROPOSED_DA:** FJERN «Hold»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Holde/holde sig til)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 6

**Reg ID:** DA-B1-FRR-0006
**Audit ID:** DA-B1-FRR-0006
**Card ID:** b1-festhalten
**ID / path:** `b1-festhalten.study.sectionAccents.comparison[1].meaning.purple.[0]`
**DE (read-only):** festhalten
**Severity:** MEDIUM
**Field:** `study.sectionAccents.comparison[1].meaning.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** Hold
**PROPOSED_DA:** FJERN «Hold»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Holde)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 7

**Reg ID:** DA-B1-FRR-0007
**Audit ID:** DA-B1-FRR-0007
**Card ID:** b1-hupe
**ID / path:** `b1-hupe.study.sectionAccents.explanation.purple.[0]`
**DE (read-only):** Hupe
**Severity:** MEDIUM
**Field:** `study.sectionAccents.explanation.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** horn
**PROPOSED_DA:** FJERN «horn»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Hovedidé: die Hupe er et bilhorn eller et skibshorn. Det advarer andre i trafikken. Flertal: die Hupen.)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 8

**Reg ID:** DA-B1-FRR-0008
**Audit ID:** DA-B1-FRR-0008
**Card ID:** b1-hupe
**ID / path:** `b1-hupe.study.sectionAccents.examples[1].lv.purple.[0]`
**DE (read-only):** Hupe
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples[1].lv.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** horn
**PROPOSED_DA:** FJERN «horn»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Bilhornet er knækket.)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 9

**Reg ID:** DA-B1-FRR-0009
**Audit ID:** DA-B1-FRR-0009
**Card ID:** b1-kante
**ID / path:** `b1-kante.study.sectionAccents.explanation.purple.[0]`
**DE (read-only):** Kante
**Severity:** MEDIUM
**Field:** `study.sectionAccents.explanation.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** facet
**PROPOSED_DA:** FJERN «facet»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Hovedidé: die Kante er kanten eller facetten af et objekt. Det er ikke en almindelig territorial grænse, men en fysisk skarp eller klar kant.)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 10

**Reg ID:** DA-B1-FRR-0010
**Audit ID:** DA-B1-FRR-0010
**Card ID:** b1-senden
**ID / path:** `b1-senden.study.sectionAccents.examples[0].lv.purple.[0]`
**DE (read-only):** senden
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples[0].lv.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** send
**PROPOSED_DA:** FJERN «send»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Jeg sender dig en besked.)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---

## Finding 11

**Reg ID:** DA-B1-FRR-0011
**Audit ID:** DA-B1-FRR-0011
**Card ID:** b1-übergeben
**ID / path:** `b1-übergeben.study.sectionAccents.examples[0].lv.purple.[0]`
**DE (read-only):** übergeben
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples[0].lv.purple.[0]`
**Production file:** `data/da/b1.js`
**CURRENT:** give
**PROPOSED_DA:** FJERN «give»
**Problēma:** sectionAccents stale — termins nav Study DA saturā
**Audita pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Jeg giver dig nøglen.)
**Avots:** Final repair regression audit (`reports/da-b1-final-repair-regression-audit.md`)

**OWNER_DECISION:**

---
