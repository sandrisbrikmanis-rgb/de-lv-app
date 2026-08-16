# DA–DE Verbs — OWNER review Group 12

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **551–569** (19 ieraksti)
Fails: `reports/da-verbs-owner-review-group12.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 551

**Audit ID:** DA-VERB-0551
**Verb/Card ID:** `verb-181`
**ID / path:** `verb-181.partizipVergangenheit`
**DE (read-only):** gezwungen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Piepiests
**PROPOSED_DA:** Tvunget
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Piepiests' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 552

**Audit ID:** DA-VERB-0552
**Verb/Card ID:** `verb-183`
**ID / path:** `verb-183.imperfektIndikativ`
**DE (read-only):** er erwog
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Overvejede han
**PROPOSED_DA:** Han overvejede
**Problēma:** Unnatural inverted word order.
**Audita pamatojums:** Inverted 'Overvejede han' is unnatural for standard er-form teaching.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 553

**Audit ID:** DA-VERB-0553
**Verb/Card ID:** `verb-183`
**ID / path:** `verb-183.praesens`
**DE (read-only):** er erwägt
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Overvejer han
**PROPOSED_DA:** Han overvejer
**Problēma:** Unnatural inverted word order.
**Audita pamatojums:** Inverted 'Overvejer han' is unnatural for standard er-form teaching.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 554

**Audit ID:** DA-VERB-0554
**Verb/Card ID:** `verb-184`
**ID / path:** `verb-184.imperfektIndikativ`
**DE (read-only):** er focht
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kæmpede
**PROPOSED_DA:** Han fægtede
**Problēma:** Generic fight instead of fencing.
**Audita pamatojums:** Past should reflect fencing sense.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 555

**Audit ID:** DA-VERB-0555
**Verb/Card ID:** `verb-184`
**ID / path:** `verb-184.imperfektKonjunktiv`
**DE (read-only):** er föchte
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville kæmpe
**PROPOSED_DA:** Han ville fægte
**Problēma:** Generic fight instead of fencing.
**Audita pamatojums:** Konjunktiv should reflect fencing sense.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 556

**Audit ID:** DA-VERB-0556
**Verb/Card ID:** `verb-184`
**ID / path:** `verb-184.infinitiv`
**DE (read-only):** fechten
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At kæmpe
**PROPOSED_DA:** At fægte
**Problēma:** Generic fight instead of fencing.
**Audita pamatojums:** fechten = fence/fight with weapons; distinct from streiten quarrel.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 557

**Audit ID:** DA-VERB-0557
**Verb/Card ID:** `verb-184`
**ID / path:** `verb-184.infinitiv.lv`
**DE (read-only):** fechten
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At kæmpe
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-153 (DE: streiten)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 558

**Audit ID:** DA-VERB-0558
**Verb/Card ID:** `verb-184`
**ID / path:** `verb-184.partizipVergangenheit`
**DE (read-only):** gefochten
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kæmpede
**PROPOSED_DA:** Fægtet
**Problēma:** Past tense in Partizip II field.
**Audita pamatojums:** 'Kæmpede' is preterite, not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 559

**Audit ID:** DA-VERB-0559
**Verb/Card ID:** `verb-184`
**ID / path:** `verb-184.praesens`
**DE (read-only):** er ficht
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kæmper
**PROPOSED_DA:** Han fægter
**Problēma:** Generic fight instead of fencing.
**Audita pamatojums:** 'Han kæmper' is generic fight; fechten is fencing.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 560

**Audit ID:** DA-VERB-0560
**Verb/Card ID:** `verb-185`
**ID / path:** `verb-185.imperfektIndikativ`
**DE (read-only):** er flocht
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han fletter
**PROPOSED_DA:** Han flettede
**Problēma:** Present tense in past field.
**Audita pamatojums:** 'Han fletter' is present tense in Präteritum field.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 561

**Audit ID:** DA-VERB-0561
**Verb/Card ID:** `verb-185`
**ID / path:** `verb-185.infinitiv`
**DE (read-only):** flechten
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fletning
**PROPOSED_DA:** At flette
**Problēma:** Noun instead of infinitive.
**Audita pamatojums:** 'Fletning' is a noun; flechten = braid/plait.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 562

**Audit ID:** DA-VERB-0562
**Verb/Card ID:** `verb-185`
**ID / path:** `verb-185.infinitiv.lv`
**DE (read-only):** flechten
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fletning
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-175 (DE: winden)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 563

**Audit ID:** DA-VERB-0563
**Verb/Card ID:** `verb-185`
**ID / path:** `verb-185.praesens`
**DE (read-only):** er flicht
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han pin
**PROPOSED_DA:** Han fletter
**Problēma:** Incomplete or wrong present form.
**Audita pamatojums:** 'Han pin' is incomplete/non-verb.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 564

**Audit ID:** DA-VERB-0564
**Verb/Card ID:** `verb-186`
**ID / path:** `verb-186.imperfektKonjunktiv`
**DE (read-only):** er hinge
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville hænge sig
**PROPOSED_DA:** Han ville hænge
**Problēma:** Unwarranted reflexive in Konjunktiv.
**Audita pamatojums:** Added reflexive 'sig' is not in German source; hangen here is simple hang.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 565

**Audit ID:** DA-VERB-0565
**Verb/Card ID:** `verb-186`
**ID / path:** `verb-186.partizipVergangenheit`
**DE (read-only):** gehangen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Hæng på
**PROPOSED_DA:** Hængt
**Problēma:** Imperative phrase in Partizip II field.
**Audita pamatojums:** 'Hæng på' is an imperative phrase, not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 566

**Audit ID:** DA-VERB-0566
**Verb/Card ID:** `verb-187`
**ID / path:** `verb-187.partizipVergangenheit`
**DE (read-only):** gespalten
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Dele
**PROPOSED_DA:** Splittet
**Problēma:** Infinitive in Partizip II field.
**Audita pamatojums:** 'Dele' is an infinitive, not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 567

**Audit ID:** DA-VERB-0567
**Verb/Card ID:** `verb-187`
**ID / path:** `verb-187.praesens`
**DE (read-only):** er spaltet
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han deler sig
**PROPOSED_DA:** Han splitter
**Problēma:** Divide instead of split.
**Audita pamatojums:** spalten = split; 'deler sig' means divide/share.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 568

**Audit ID:** DA-VERB-0568
**Verb/Card ID:** `verb-188`
**ID / path:** `verb-188.infinitiv`
**DE (read-only):** verzeihen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Piedot
**PROPOSED_DA:** At tilgive
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Piedot' is Latvian for forgive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 569

**Audit ID:** DA-VERB-0569
**Verb/Card ID:** `verb-188`
**ID / path:** `verb-188.partizipVergangenheit`
**DE (read-only):** verziehen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Piedoter
**PROPOSED_DA:** Tilgivet
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Piedoter' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
