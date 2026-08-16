# DA–DE A2 — OWNER review Misc sectionaccents-17

Avots: `reports/da-a2-full-audit.md` / `reports/temp/da-a2-audit-data.json`
Findings: **1402–1402** (1 ieraksti)
Fails: `reports/da-a2-owner-review-sectionaccents-17.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-a2-owner-decisions-${slug}.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).
> sectionAccents: var lietot **FJERN `termins`** vai pilnu jaunu tekstu.

## Finding 1402

**Audit ID:** DA-A2-1402
**Card ID:** a2-ueber
**ID / path:** `a2-ueber.study.sectionAccents.examples.lv.purple.[0][1]`
**DE (read-only):** über
**Severity:** MEDIUM
**Field:** `study.sectionAccents.examples.lv.purple.[0][1]`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** lamp
**PROPOSED_DA:** FJERN «lamp»
**Problēma:** sectionAccents stale — termins nav Study saturā
**Audita pamatojums:** Akcentu sistēma jāsasaista ar faktisko dāņu tekstu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---
