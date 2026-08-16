# DA–DE Verbs — OWNER review regression linguistic

Avots: [da-verbs-owner-repairs-final-regression-audit.md](./da-verbs-owner-repairs-final-regression-audit.md)
Findings: **1–13** (13 ieraksti)
Fails: `reports/da-verbs-owner-review-regression-linguistic.md`
> **Trase:** Linguistic — production atbilst signed repair, bet regression audits atrada reālu DA kļūdu.

> **PROPOSED_DA** ir Luna ieteikums / signed OWNER mērķis — **nav** automātiski apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1
**Reg ID:** DA-VERB-RL-0001
**Orig audit:** DA-VERB-REG-0201
**Verb/Card ID:** `verb-29`
**ID / path:** `verb-29.partizipVergangenheit.lv`
**DE (read-only):** gekniffen
**Severity:** MEDIUM
**Category:** PARADIGM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Knebet
**PROPOSED_DA:** Knibet
**Problēma:** Non-standard past participle form
**Audita pamatojums:** Standard Danish paradigm for at knibe is kniber, knib, har knibet. 'Knebet' is not a valid participle of knibe and does not match gekniffen (pinched/squeezed).
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 2
**Reg ID:** DA-VERB-RL-0002
**Orig audit:** DA-VERB-REG-0209
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.praesens.lv`
**DE (read-only):** er rinnt
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det flyder
**PROPOSED_DA:** Det siver
**Problēma:** Inconsistent verb stem within same card
**Audita pamatojums:** Owner-approved infinitiv on this card is At sive (trickle/drip) to distinguish rinnen from fließen, but praesens uses flyde (Det flyder). Learners see two different Danish lemmas for one German verb; align to sive (Det siver) or use flyde throughout.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 3
**Reg ID:** DA-VERB-RL-0003
**Orig audit:** DA-VERB-REG-0210
**Verb/Card ID:** `verb-117`
**ID / path:** `verb-117.imperfektIndikativ.lv`
**DE (read-only):** schnaubte vai schnob
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han fnøs
**PROPOSED_DA:** Han hvæsed
**Problēma:** Inconsistent verb stem within schnauben card.
**Audita pamatojums:** Infinitiv uses At hvæse (snort/puff) but preterite uses fnøs from fnyse (sneeze). schnauben needs one consistent Danish lemma across all forms.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 4
**Reg ID:** DA-VERB-RL-0004
**Orig audit:** DA-VERB-REG-0211
**Verb/Card ID:** `verb-117`
**ID / path:** `verb-117.imperfektKonjunktiv.lv`
**DE (read-only):** schnaubte vai schnob
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville fnyse
**PROPOSED_DA:** Han ville hvæse
**Problēma:** Inconsistent verb stem within schnauben card.
**Audita pamatojums:** Konjunktiv II uses fnyse while infinitiv is At hvæse. Learners cannot reconcile mixed lemmas for one German verb.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 5
**Reg ID:** DA-VERB-RL-0005
**Orig audit:** DA-VERB-REG-0212
**Verb/Card ID:** `verb-117`
**ID / path:** `verb-117.partizipVergangenheit.lv`
**DE (read-only):** geschnaubt vai geschnoben
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fnyst
**PROPOSED_DA:** Hvæset
**Problēma:** Non-standard past participle form.
**Audita pamatojums:** Fnyst is not a valid Danish participle. Standard forms are Fnyset (fnyse) or, aligned with card infinitiv At hvæse, Hvæset.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 6
**Reg ID:** DA-VERB-RL-0006
**Orig audit:** DA-VERB-REG-0213
**Verb/Card ID:** `verb-117`
**ID / path:** `verb-117.praesens.lv`
**DE (read-only):** er schnaubt
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han fnyser
**PROPOSED_DA:** Han hvæser
**Problēma:** Semantic mismatch vs German schnauben.
**Audita pamatojums:** Han fnyser means 'he sneezes', not snort/puff. Infinitiv At hvæse is semantically correct for schnauben; present should be Han hvæser.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 7
**Reg ID:** DA-VERB-RL-0007
**Orig audit:** DA-VERB-REG-0214
**Verb/Card ID:** `verb-133`
**ID / path:** `verb-133.partizipVergangenheit.lv`
**DE (read-only):** gesunken (er ist)
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sunket
**PROPOSED_DA:** Synket
**Problēma:** Misspelled past participle.
**Audita pamatojums:** Past participle of synke is synket, not sunket; sunket is a non-standard spelling likely influenced by German gesunken.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 8
**Reg ID:** DA-VERB-RL-0008
**Orig audit:** DA-VERB-REG-0215
**Verb/Card ID:** `verb-136`
**ID / path:** `verb-136.infinitiv.lv`
**DE (read-only):** sollen
**Severity:** MEDIUM
**Category:** STYLE
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At skulle / at burde
**PROPOSED_DA:** At skulle
**Problēma:** Slash variant in infinitive field.
**Audita pamatojums:** Two alternative infinitives in one slot; pick one canonical form (at skulle) for consistent flashcard display.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 9
**Reg ID:** DA-VERB-RL-0009
**Orig audit:** DA-VERB-REG-0217
**Verb/Card ID:** `verb-149`
**ID / path:** `verb-149.imperfektIndikativ.lv`
**DE (read-only):** stob vai stiebte
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det støvede
**PROPOSED_DA:** Det hvirvlede
**Problēma:** Inconsistent verb stem within same card.
**Audita pamatojums:** Past indicative uses støve while infinitiv, praesens, and participle use hvirvle; stieben needs one consistent Danish lemma across all forms.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 10
**Reg ID:** DA-VERB-RL-0010
**Orig audit:** DA-VERB-REG-0218
**Verb/Card ID:** `verb-149`
**ID / path:** `verb-149.imperfektKonjunktiv.lv`
**DE (read-only):** stob vai stiebte
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det ville støve
**PROPOSED_DA:** Det ville hvirvle
**Problēma:** Inconsistent verb stem within same card.
**Audita pamatojums:** Subjunctive uses støve while other conjugations use hvirvle; learners cannot reconcile mixed lemmas for one German verb.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 11
**Reg ID:** DA-VERB-RL-0011
**Orig audit:** DA-VERB-REG-0219
**Verb/Card ID:** `verb-150`
**ID / path:** `verb-150.partizipVergangenheit.lv`
**DE (read-only):** gestunken
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Stinket
**PROPOSED_DA:** Stunket
**Problēma:** Non-standard past participle for stinke.
**Audita pamatojums:** Danish stinke conjugates stinker → stank → har stunket (DDO: -r, stank, -t). 'Stinket' is at best a rare literary variant (ODS: l. br.); the standard teaching form matching gestunken is Stunket.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 12
**Reg ID:** DA-VERB-RL-0012
**Orig audit:** DA-VERB-REG-0220
**Verb/Card ID:** `verb-162`
**ID / path:** `verb-162.partizipVergangenheit.lv`
**DE (read-only):** verdrossen
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ærgeret
**PROPOSED_DA:** Ærgret
**Problēma:** Misspelled past participle for ærgre.
**Audita pamatojums:** Danish ærgre conjugates ærgrer → ærgrede → har ærgret (DDO: -r, -de, -t). 'Ærgeret' inserts an extra e; the correct participle is Ærgret.
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 13
**Reg ID:** DA-VERB-RL-0013
**Orig audit:** DA-VERB-REG-0221
**Verb/Card ID:** `verb-178`
**ID / path:** `verb-178.partizipVergangenheit.lv`
**DE (read-only):** gewrungen
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Vrundet
**PROPOSED_DA:** Vredet
**Problēma:** Non-standard participle form for vride.
**Audita pamatojums:** Danish vride (wring) conjugates vride → vred → vredet. 'Vrundet' is not a valid participle in standard Danish (ordnet.dk/ddo, DinOrdbog). gewrungen from wringen maps to the same Danish verb vride, so the participle must be Vredet — the same form already used correctly on verb-175 (winden writhe).
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---