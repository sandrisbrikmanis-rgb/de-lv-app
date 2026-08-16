# DA–DE Verbs — OWNER review regression reapply Group 04

Avots: [da-verbs-owner-repairs-final-regression-audit.md](./da-verbs-owner-repairs-final-regression-audit.md)
Findings: **151–175** (25 ieraksti)
Fails: `reports/da-verbs-owner-review-regression-reapply-group04.md`
> **Trase:** Reapply — signed OWNER lēmums jau pastāv; production vēl rāda LABOT.

> **PROPOSED_DA** ir Luna ieteikums / signed OWNER mērķis — **nav** automātiski apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1
**Reg ID:** DA-VERB-RR-0151
**Orig audit:** DA-VERB-0274
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.imperfektKonjunktiv.lv`
**DE (read-only):** er riete
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT foreslå / nævne natural Danish form)
**SIGNED_OWNER (existing):** Han ville råde
**PROPOSED_DA:** Han ville råde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 2
**Reg ID:** DA-VERB-RR-0152
**Orig audit:** DA-VERB-0275
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.infinitiv.lv`
**DE (read-only):** raten
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At råde
**PROPOSED_DA:** At råde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 3
**Reg ID:** DA-VERB-RR-0153
**Orig audit:** DA-VERB-0277
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.praesens.lv`
**DE (read-only):** er rät
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT min natural Danish form)
**SIGNED_OWNER (existing):** Han råder
**PROPOSED_DA:** Han råder
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 4
**Reg ID:** DA-VERB-RR-0154
**Orig audit:** DA-VERB-0278
**Verb/Card ID:** `verb-89`
**ID / path:** `verb-89.imperfektIndikativ.lv`
**DE (read-only):** er rieb
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han gned
**PROPOSED_DA:** Han gned
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 5
**Reg ID:** DA-VERB-RR-0155
**Orig audit:** DA-VERB-0279
**Verb/Card ID:** `verb-89`
**ID / path:** `verb-89.infinitiv.lv`
**DE (read-only):** reiben
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At gnide
**PROPOSED_DA:** At gnide
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 6
**Reg ID:** DA-VERB-RR-0156
**Orig audit:** DA-VERB-0280
**Verb/Card ID:** `verb-89`
**ID / path:** `verb-89.partizipVergangenheit.lv`
**DE (read-only):** gerieben
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Gnedet
**PROPOSED_DA:** Gnedet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 7
**Reg ID:** DA-VERB-RR-0157
**Orig audit:** DA-VERB-0281
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.imperfektIndikativ.lv`
**DE (read-only):** er riss
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han rev
**PROPOSED_DA:** Han rev
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 8
**Reg ID:** DA-VERB-RR-0158
**Orig audit:** DA-VERB-0282
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.imperfektKonjunktiv.lv`
**DE (read-only):** er risse
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT rive
**SIGNED_OWNER (existing):** Han ville rive
**PROPOSED_DA:** Han ville rive
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 9
**Reg ID:** DA-VERB-RR-0159
**Orig audit:** DA-VERB-0283
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.infinitiv.lv`
**DE (read-only):** reißen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At rive
**PROPOSED_DA:** At rive
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 10
**Reg ID:** DA-VERB-RR-0160
**Orig audit:** DA-VERB-0284
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.partizipVergangenheit.lv`
**DE (read-only):** gerissen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Revet
**PROPOSED_DA:** Revet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 11
**Reg ID:** DA-VERB-RR-0161
**Orig audit:** DA-VERB-0285
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.praesens.lv`
**DE (read-only):** er reißt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han river
**PROPOSED_DA:** Han river
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 12
**Reg ID:** DA-VERB-RR-0162
**Orig audit:** DA-VERB-0286
**Verb/Card ID:** `verb-91`
**ID / path:** `verb-91.partizipVergangenheit.lv`
**DE (read-only):** geritten (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Redet
**PROPOSED_DA:** Redet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 13
**Reg ID:** DA-VERB-RR-0163
**Orig audit:** DA-VERB-0288
**Verb/Card ID:** `verb-92`
**ID / path:** `verb-92.infinitiv.lv`
**DE (read-only):** rennen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT Danish for this verb)
**SIGNED_OWNER (existing):** At løbe stærkt
**PROPOSED_DA:** At løbe stærkt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 14
**Reg ID:** DA-VERB-RR-0164
**Orig audit:** DA-VERB-0289
**Verb/Card ID:** `verb-92`
**ID / path:** `verb-92.partizipVergangenheit.lv`
**DE (read-only):** gerannt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Løbet stærkt
**PROPOSED_DA:** Løbet stærkt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 15
**Reg ID:** DA-VERB-RR-0165
**Orig audit:** DA-VERB-0290
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.imperfektIndikativ.lv`
**DE (read-only):** er roch
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han lugtede
**PROPOSED_DA:** Han lugtede
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 16
**Reg ID:** DA-VERB-RR-0166
**Orig audit:** DA-VERB-0291
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.imperfektKonjunktiv.lv`
**DE (read-only):** er röche
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT lugte
**SIGNED_OWNER (existing):** Han ville lugte
**PROPOSED_DA:** Han ville lugte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 17
**Reg ID:** DA-VERB-RR-0167
**Orig audit:** DA-VERB-0292
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.infinitiv.lv`
**DE (read-only):** riechen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At lugte
**PROPOSED_DA:** At lugte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 18
**Reg ID:** DA-VERB-RR-0168
**Orig audit:** DA-VERB-0293
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.partizipVergangenheit.lv`
**DE (read-only):** gerochen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Lugtet
**PROPOSED_DA:** Lugtet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 19
**Reg ID:** DA-VERB-RR-0169
**Orig audit:** DA-VERB-0294
**Verb/Card ID:** `verb-94`
**ID / path:** `verb-94.infinitiv.lv`
**DE (read-only):** ringen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At kæmpe
**PROPOSED_DA:** At kæmpe
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 20
**Reg ID:** DA-VERB-RR-0170
**Orig audit:** DA-VERB-0295
**Verb/Card ID:** `verb-94`
**ID / path:** `verb-94.partizipVergangenheit.lv`
**DE (read-only):** gerungen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Kæmpet
**PROPOSED_DA:** Kæmpet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 21
**Reg ID:** DA-VERB-RR-0171
**Orig audit:** DA-VERB-0296
**Verb/Card ID:** `verb-94`
**ID / path:** `verb-94.praesens.lv`
**DE (read-only):** er ringt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han kæmper
**PROPOSED_DA:** Han kæmper
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 22
**Reg ID:** DA-VERB-RR-0172
**Orig audit:** DA-VERB-0297
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.imperfektIndikativ.lv`
**DE (read-only):** er rann
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Det flød
**PROPOSED_DA:** Det flød
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 23
**Reg ID:** DA-VERB-RR-0173
**Orig audit:** DA-VERB-0298
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.imperfektKonjunktiv.lv`
**DE (read-only):** er ränne / er rönne
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT er rönne flyde
**SIGNED_OWNER (existing):** Det ville flyde
**PROPOSED_DA:** Det ville flyde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 24
**Reg ID:** DA-VERB-RR-0174
**Orig audit:** DA-VERB-0299
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.infinitiv.lv`
**DE (read-only):** rinnen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT Danish for this verb)
**SIGNED_OWNER (existing):** At sive
**PROPOSED_DA:** At sive
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 25
**Reg ID:** DA-VERB-RR-0175
**Orig audit:** DA-VERB-0301
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.partizipVergangenheit.lv`
**DE (read-only):** geronnen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist) koagulerede
**SIGNED_OWNER (existing):** Størknet
**PROPOSED_DA:** Størknet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group07.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---