# DA–DE Verbs — OWNER review regression reapply Group 01

Avots: [da-verbs-owner-repairs-final-regression-audit.md](./da-verbs-owner-repairs-final-regression-audit.md)
Findings: **1–50** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-regression-reapply-group01.md`
> **Trase:** Reapply — signed OWNER lēmums jau pastāv; production vēl rāda LABOT.

> **PROPOSED_DA** ir Luna ieteikums / signed OWNER mērķis — **nav** automātiski apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1
**Reg ID:** DA-VERB-RR-0001
**Orig audit:** DA-VERB-0101
**Verb/Card ID:** `verb-33`
**ID / path:** `verb-33.infinitiv.lv`
**DE (read-only):** brechen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At bryde
**PROPOSED_DA:** At bryde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 2
**Reg ID:** DA-VERB-RR-0002
**Orig audit:** DA-VERB-0103
**Verb/Card ID:** `verb-33`
**ID / path:** `verb-33.partizipVergangenheit.lv`
**DE (read-only):** gebrochen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT salauzts
**SIGNED_OWNER (existing):** Brudt
**PROPOSED_DA:** Brudt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 3
**Reg ID:** DA-VERB-RR-0003
**Orig audit:** DA-VERB-0104
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.imperfektIndikativ.lv`
**DE (read-only):** brannte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han brændte
**PROPOSED_DA:** Han brændte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 4
**Reg ID:** DA-VERB-RR-0004
**Orig audit:** DA-VERB-0105
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.imperfektKonjunktiv.lv`
**DE (read-only):** brannte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT brænde
**SIGNED_OWNER (existing):** Han ville brænde
**PROPOSED_DA:** Han ville brænde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 5
**Reg ID:** DA-VERB-RR-0005
**Orig audit:** DA-VERB-0106
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.infinitiv.lv`
**DE (read-only):** brennen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At brænde
**PROPOSED_DA:** At brænde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 6
**Reg ID:** DA-VERB-RR-0006
**Orig audit:** DA-VERB-0107
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.partizipVergangenheit.lv`
**DE (read-only):** gebrannt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Brændt
**PROPOSED_DA:** Brændt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 7
**Reg ID:** DA-VERB-RR-0007
**Orig audit:** DA-VERB-0108
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.praesens.lv`
**DE (read-only):** er brennt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT brand
**SIGNED_OWNER (existing):** Han brænder
**PROPOSED_DA:** Han brænder
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 8
**Reg ID:** DA-VERB-RR-0008
**Orig audit:** DA-VERB-0109
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.imperfektIndikativ.lv`
**DE (read-only):** er brachte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han bragte
**PROPOSED_DA:** Han bragte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 9
**Reg ID:** DA-VERB-RR-0009
**Orig audit:** DA-VERB-0110
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.infinitiv.lv`
**DE (read-only):** bringen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At bringe
**PROPOSED_DA:** At bringe
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 10
**Reg ID:** DA-VERB-RR-0010
**Orig audit:** DA-VERB-0112
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.partizipVergangenheit.lv`
**DE (read-only):** gebracht
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT atnest
**SIGNED_OWNER (existing):** Bragt
**PROPOSED_DA:** Bragt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 11
**Reg ID:** DA-VERB-RR-0011
**Orig audit:** DA-VERB-0113
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.praesens.lv`
**DE (read-only):** er bringt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han bringer
**PROPOSED_DA:** Han bringer
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 12
**Reg ID:** DA-VERB-RR-0012
**Orig audit:** DA-VERB-0114
**Verb/Card ID:** `verb-36`
**ID / path:** `verb-36.imperfektKonjunktiv.lv`
**DE (read-only):** er dächte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT mene tænke
**SIGNED_OWNER (existing):** Han ville tænke
**PROPOSED_DA:** Han ville tænke
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 13
**Reg ID:** DA-VERB-RR-0013
**Orig audit:** DA-VERB-0115
**Verb/Card ID:** `verb-36`
**ID / path:** `verb-36.partizipVergangenheit.lv`
**DE (read-only):** gedacht
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Tænkt
**PROPOSED_DA:** Tænkt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 14
**Reg ID:** DA-VERB-RR-0014
**Orig audit:** DA-VERB-0116
**Verb/Card ID:** `verb-37`
**ID / path:** `verb-37.imperfektIndikativ.lv`
**DE (read-only):** dingte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han ansatte
**PROPOSED_DA:** Han ansatte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 15
**Reg ID:** DA-VERB-RR-0015
**Orig audit:** DA-VERB-0117
**Verb/Card ID:** `verb-37`
**ID / path:** `verb-37.imperfektKonjunktiv.lv`
**DE (read-only):** dingte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ansætte ansætte
**SIGNED_OWNER (existing):** Han ville
**PROPOSED_DA:** Han ville ansætte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 16
**Reg ID:** DA-VERB-RR-0016
**Orig audit:** DA-VERB-0118
**Verb/Card ID:** `verb-37`
**ID / path:** `verb-37.infinitiv.lv`
**DE (read-only):** dingen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT at blive natural enige Danish form)
**SIGNED_OWNER (existing):** At ansætte
**PROPOSED_DA:** At ansætte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 17
**Reg ID:** DA-VERB-RR-0017
**Orig audit:** DA-VERB-0119
**Verb/Card ID:** `verb-38`
**ID / path:** `verb-38.imperfektKonjunktiv.lv`
**DE (read-only):** er dräsche / er drösche
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT er drösche tilbede tærske
**SIGNED_OWNER (existing):** Han ville tærske
**PROPOSED_DA:** Han ville tærske
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 18
**Reg ID:** DA-VERB-RR-0018
**Orig audit:** DA-VERB-0120
**Verb/Card ID:** `verb-38`
**ID / path:** `verb-38.infinitiv.lv`
**DE (read-only):** dreschen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At tærske
**PROPOSED_DA:** At tærske
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 19
**Reg ID:** DA-VERB-RR-0019
**Orig audit:** DA-VERB-0121
**Verb/Card ID:** `verb-38`
**ID / path:** `verb-38.partizipVergangenheit.lv`
**DE (read-only):** gedroschen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Tærsket
**PROPOSED_DA:** Tærsket
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 20
**Reg ID:** DA-VERB-RR-0020
**Orig audit:** DA-VERB-0122
**Verb/Card ID:** `verb-39`
**ID / path:** `verb-39.infinitiv.lv`
**DE (read-only):** dringen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At trænge ind
**PROPOSED_DA:** At trænge ind
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 21
**Reg ID:** DA-VERB-RR-0021
**Orig audit:** DA-VERB-0123
**Verb/Card ID:** `verb-39`
**ID / path:** `verb-39.partizipVergangenheit.lv`
**DE (read-only):** gedrungen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Trængt ind
**PROPOSED_DA:** Trængt ind
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 22
**Reg ID:** DA-VERB-RR-0022
**Orig audit:** DA-VERB-0124
**Verb/Card ID:** `verb-40`
**ID / path:** `verb-40.imperfektIndikativ.lv`
**DE (read-only):** deuchte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Det lod til
**PROPOSED_DA:** Det lod til
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 23
**Reg ID:** DA-VERB-RR-0023
**Orig audit:** DA-VERB-0125
**Verb/Card ID:** `verb-40`
**ID / path:** `verb-40.imperfektKonjunktiv.lv`
**DE (read-only):** deuchte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT synes
**SIGNED_OWNER (existing):** Det ville synes
**PROPOSED_DA:** Det ville synes
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 24
**Reg ID:** DA-VERB-RR-0024
**Orig audit:** DA-VERB-0126
**Verb/Card ID:** `verb-41`
**ID / path:** `verb-41.praesens.lv`
**DE (read-only):** er darf
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han må
**PROPOSED_DA:** Han må
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 25
**Reg ID:** DA-VERB-RR-0025
**Orig audit:** DA-VERB-0127
**Verb/Card ID:** `verb-42`
**ID / path:** `verb-42.infinitiv.lv`
**DE (read-only):** empfehlen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At anbefale
**PROPOSED_DA:** At anbefale
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 26
**Reg ID:** DA-VERB-RR-0026
**Orig audit:** DA-VERB-0128
**Verb/Card ID:** `verb-42`
**ID / path:** `verb-42.partizipVergangenheit.lv`
**DE (read-only):** empfohlen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Anbefalet
**PROPOSED_DA:** Anbefalet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 27
**Reg ID:** DA-VERB-RR-0027
**Orig audit:** DA-VERB-0129
**Verb/Card ID:** `verb-43`
**ID / path:** `verb-43.infinitiv.lv`
**DE (read-only):** empfinden
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At føle
**PROPOSED_DA:** At føle
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 28
**Reg ID:** DA-VERB-RR-0028
**Orig audit:** DA-VERB-0130
**Verb/Card ID:** `verb-43`
**ID / path:** `verb-43.partizipVergangenheit.lv`
**DE (read-only):** empfunden
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Følt
**PROPOSED_DA:** Følt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 29
**Reg ID:** DA-VERB-RR-0029
**Orig audit:** DA-VERB-0131
**Verb/Card ID:** `verb-44`
**ID / path:** `verb-44.imperfektKonjunktiv.lv`
**DE (read-only):** er erlösche
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT forsvinde slukke slukkes
**SIGNED_OWNER (existing):** Det ville
**PROPOSED_DA:** Det ville gå ud
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 30
**Reg ID:** DA-VERB-RR-0030
**Orig audit:** DA-VERB-0132
**Verb/Card ID:** `verb-44`
**ID / path:** `verb-44.infinitiv.lv`
**DE (read-only):** erlöschen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At gå ud
**PROPOSED_DA:** At gå ud
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 31
**Reg ID:** DA-VERB-RR-0031
**Orig audit:** DA-VERB-0133
**Verb/Card ID:** `verb-44`
**ID / path:** `verb-44.partizipVergangenheit.lv`
**DE (read-only):** erloschen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Gået ud
**PROPOSED_DA:** Gået ud
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 32
**Reg ID:** DA-VERB-RR-0032
**Orig audit:** DA-VERB-0134
**Verb/Card ID:** `verb-45`
**ID / path:** `verb-45.infinitiv.lv`
**DE (read-only):** erschrecken
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT forvirret bange forskrækket
**SIGNED_OWNER (existing):** At blive
**PROPOSED_DA:** At blive forskrækket
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 33
**Reg ID:** DA-VERB-RR-0033
**Orig audit:** DA-VERB-0135
**Verb/Card ID:** `verb-45`
**ID / path:** `verb-45.partizipVergangenheit.lv`
**DE (read-only):** erschrocken (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT (er ist)
**SIGNED_OWNER (existing):** Forskrækket
**PROPOSED_DA:** Forskrækket
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 34
**Reg ID:** DA-VERB-RR-0034
**Orig audit:** DA-VERB-0137
**Verb/Card ID:** `verb-46`
**ID / path:** `verb-46.partizipVergangenheit.lv`
**DE (read-only):** gegessen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT spist
**SIGNED_OWNER (existing):** Spist
**PROPOSED_DA:** Spist
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 35
**Reg ID:** DA-VERB-RR-0035
**Orig audit:** DA-VERB-0138
**Verb/Card ID:** `verb-47`
**ID / path:** `verb-47.infinitiv.lv`
**DE (read-only):** fahren
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At køre
**PROPOSED_DA:** At køre
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 36
**Reg ID:** DA-VERB-RR-0036
**Orig audit:** DA-VERB-0140
**Verb/Card ID:** `verb-47`
**ID / path:** `verb-47.partizipVergangenheit.lv`
**DE (read-only):** gefahren (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist) aizbraucis
**SIGNED_OWNER (existing):** Kørt
**PROPOSED_DA:** Kørt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 37
**Reg ID:** DA-VERB-RR-0037
**Orig audit:** DA-VERB-0141
**Verb/Card ID:** `verb-48`
**ID / path:** `verb-48.infinitiv.lv`
**DE (read-only):** fallen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At falde
**PROPOSED_DA:** At falde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 38
**Reg ID:** DA-VERB-RR-0038
**Orig audit:** DA-VERB-0142
**Verb/Card ID:** `verb-48`
**ID / path:** `verb-48.partizipVergangenheit.lv`
**DE (read-only):** gefallen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Faldet
**PROPOSED_DA:** Faldet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 39
**Reg ID:** DA-VERB-RR-0039
**Orig audit:** DA-VERB-0145
**Verb/Card ID:** `verb-49`
**ID / path:** `verb-49.partizipVergangenheit.lv`
**DE (read-only):** gefangen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT fanget
**SIGNED_OWNER (existing):** Fanget
**PROPOSED_DA:** Fanget
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 40
**Reg ID:** DA-VERB-RR-0040
**Orig audit:** DA-VERB-0146
**Verb/Card ID:** `verb-50`
**ID / path:** `verb-50.infinitiv.lv`
**DE (read-only):** finden
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At finde
**PROPOSED_DA:** At finde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 41
**Reg ID:** DA-VERB-RR-0041
**Orig audit:** DA-VERB-0147
**Verb/Card ID:** `verb-50`
**ID / path:** `verb-50.partizipVergangenheit.lv`
**DE (read-only):** gefunden
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Fundet
**PROPOSED_DA:** Fundet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 42
**Reg ID:** DA-VERB-RR-0042
**Orig audit:** DA-VERB-0148
**Verb/Card ID:** `verb-51`
**ID / path:** `verb-51.infinitiv.lv`
**DE (read-only):** fliegen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At flyve
**PROPOSED_DA:** At flyve
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 43
**Reg ID:** DA-VERB-RR-0043
**Orig audit:** DA-VERB-0149
**Verb/Card ID:** `verb-51`
**ID / path:** `verb-51.partizipVergangenheit.lv`
**DE (read-only):** geflogen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Fløjet
**PROPOSED_DA:** Fløjet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 44
**Reg ID:** DA-VERB-RR-0044
**Orig audit:** DA-VERB-0150
**Verb/Card ID:** `verb-52`
**ID / path:** `verb-52.partizipVergangenheit.lv`
**DE (read-only):** geflohen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Flygtet
**PROPOSED_DA:** Flygtet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group03.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 45
**Reg ID:** DA-VERB-RR-0045
**Orig audit:** DA-VERB-0151
**Verb/Card ID:** `verb-53`
**ID / path:** `verb-53.imperfektIndikativ.lv`
**DE (read-only):** er floss
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han flød
**PROPOSED_DA:** Han flød
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 46
**Reg ID:** DA-VERB-RR-0046
**Orig audit:** DA-VERB-0152
**Verb/Card ID:** `verb-53`
**ID / path:** `verb-53.imperfektKonjunktiv.lv`
**DE (read-only):** er flösse
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT flyde
**SIGNED_OWNER (existing):** Han ville flyde
**PROPOSED_DA:** Han ville flyde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 47
**Reg ID:** DA-VERB-RR-0047
**Orig audit:** DA-VERB-0153
**Verb/Card ID:** `verb-53`
**ID / path:** `verb-53.partizipVergangenheit.lv`
**DE (read-only):** geflossen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT (er ist)
**SIGNED_OWNER (existing):** Flydt
**PROPOSED_DA:** Flydt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 48
**Reg ID:** DA-VERB-RR-0048
**Orig audit:** DA-VERB-0154
**Verb/Card ID:** `verb-53`
**ID / path:** `verb-53.praesens.lv`
**DE (read-only):** er fließt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han flyder
**PROPOSED_DA:** Han flyder
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 49
**Reg ID:** DA-VERB-RR-0049
**Orig audit:** DA-VERB-0156
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.imperfektIndikativ.lv`
**DE (read-only):** er frass
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT slugte natural Danish form)
**SIGNED_OWNER (existing):** Han åd
**PROPOSED_DA:** Han åd
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 50
**Reg ID:** DA-VERB-RR-0050
**Orig audit:** DA-VERB-0158
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.imperfektKonjunktiv.lv`
**DE (read-only):** er fräße
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT spise / natural morgenmad Danish form)
**SIGNED_OWNER (existing):** Han ville æde
**PROPOSED_DA:** Han ville æde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---