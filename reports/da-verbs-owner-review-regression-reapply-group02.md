# DA–DE Verbs — OWNER review regression reapply Group 02

Avots: [da-verbs-owner-repairs-final-regression-audit.md](./da-verbs-owner-repairs-final-regression-audit.md)
Findings: **51–100** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-regression-reapply-group02.md`
> **Trase:** Reapply — signed OWNER lēmums jau pastāv; production vēl rāda LABOT.

> **PROPOSED_DA** ir Luna ieteikums / signed OWNER mērķis — **nav** automātiski apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1
**Reg ID:** DA-VERB-RR-0051
**Orig audit:** DA-VERB-0159
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.infinitiv.lv`
**DE (read-only):** fressen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT sluges
**SIGNED_OWNER (existing):** At æde
**PROPOSED_DA:** At æde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 2
**Reg ID:** DA-VERB-RR-0052
**Orig audit:** DA-VERB-0160
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.partizipVergangenheit.lv`
**DE (read-only):** gefressen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Ædt
**PROPOSED_DA:** Ædt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 3
**Reg ID:** DA-VERB-RR-0053
**Orig audit:** DA-VERB-0162
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.praesens.lv`
**DE (read-only):** er frisst
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT sluger natural Danish form)
**SIGNED_OWNER (existing):** Han æder
**PROPOSED_DA:** Han æder
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 4
**Reg ID:** DA-VERB-RR-0054
**Orig audit:** DA-VERB-0163
**Verb/Card ID:** `verb-55`
**ID / path:** `verb-55.imperfektIndikativ.lv`
**DE (read-only):** er fror
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han frøs
**PROPOSED_DA:** Han frøs
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 5
**Reg ID:** DA-VERB-RR-0055
**Orig audit:** DA-VERB-0164
**Verb/Card ID:** `verb-55`
**ID / path:** `verb-55.imperfektKonjunktiv.lv`
**DE (read-only):** er fröre
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT fryse
**SIGNED_OWNER (existing):** Han ville fryse
**PROPOSED_DA:** Han ville fryse
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 6
**Reg ID:** DA-VERB-RR-0056
**Orig audit:** DA-VERB-0165
**Verb/Card ID:** `verb-55`
**ID / path:** `verb-55.infinitiv.lv`
**DE (read-only):** frieren
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At fryse
**PROPOSED_DA:** At fryse
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 7
**Reg ID:** DA-VERB-RR-0057
**Orig audit:** DA-VERB-0166
**Verb/Card ID:** `verb-55`
**ID / path:** `verb-55.partizipVergangenheit.lv`
**DE (read-only):** gefroren
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Frosset
**PROPOSED_DA:** Frosset
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 8
**Reg ID:** DA-VERB-RR-0058
**Orig audit:** DA-VERB-0167
**Verb/Card ID:** `verb-56`
**ID / path:** `verb-56.infinitiv.lv`
**DE (read-only):** geben
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At give
**PROPOSED_DA:** At give
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 9
**Reg ID:** DA-VERB-RR-0059
**Orig audit:** DA-VERB-0168
**Verb/Card ID:** `verb-56`
**ID / path:** `verb-56.partizipVergangenheit.lv`
**DE (read-only):** gegeben
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Givet
**PROPOSED_DA:** Givet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 10
**Reg ID:** DA-VERB-RR-0060
**Orig audit:** DA-VERB-0170
**Verb/Card ID:** `verb-57`
**ID / path:** `verb-57.infinitiv.lv`
**DE (read-only):** gedeihen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT Danish for this verb)
**SIGNED_OWNER (existing):** At trives
**PROPOSED_DA:** At trives
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 11
**Reg ID:** DA-VERB-RR-0061
**Orig audit:** DA-VERB-0171
**Verb/Card ID:** `verb-57`
**ID / path:** `verb-57.partizipVergangenheit.lv`
**DE (read-only):** gediehen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Trivedes
**PROPOSED_DA:** Trivet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 12
**Reg ID:** DA-VERB-RR-0062
**Orig audit:** DA-VERB-0172
**Verb/Card ID:** `verb-58`
**ID / path:** `verb-58.infinitiv.lv`
**DE (read-only):** gehen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At gå
**PROPOSED_DA:** At gå
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 13
**Reg ID:** DA-VERB-RR-0063
**Orig audit:** DA-VERB-0173
**Verb/Card ID:** `verb-58`
**ID / path:** `verb-58.partizipVergangenheit.lv`
**DE (read-only):** gegangen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Gået
**PROPOSED_DA:** Gået
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 14
**Reg ID:** DA-VERB-RR-0064
**Orig audit:** DA-VERB-0174
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.imperfektIndikativ.lv`
**DE (read-only):** er gewann
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han vandt
**PROPOSED_DA:** Han vandt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 15
**Reg ID:** DA-VERB-RR-0065
**Orig audit:** DA-VERB-0175
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.imperfektKonjunktiv.lv`
**DE (read-only):** er gewönne / er gewänne
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT er gewänne vinde
**SIGNED_OWNER (existing):** Han ville vinde
**PROPOSED_DA:** Han ville vinde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 16
**Reg ID:** DA-VERB-RR-0066
**Orig audit:** DA-VERB-0176
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.infinitiv.lv`
**DE (read-only):** gewinnen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At vinde
**PROPOSED_DA:** At vinde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 17
**Reg ID:** DA-VERB-RR-0067
**Orig audit:** DA-VERB-0177
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.partizipVergangenheit.lv`
**DE (read-only):** gewonnen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Vundet
**PROPOSED_DA:** Vundet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 18
**Reg ID:** DA-VERB-RR-0068
**Orig audit:** DA-VERB-0178
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.praesens.lv`
**DE (read-only):** er gewinnt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han vinder
**PROPOSED_DA:** Han vinder
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 19
**Reg ID:** DA-VERB-RR-0069
**Orig audit:** DA-VERB-0179
**Verb/Card ID:** `verb-60`
**ID / path:** `verb-60.imperfektIndikativ.lv`
**DE (read-only):** hatte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han havde
**PROPOSED_DA:** Han havde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 20
**Reg ID:** DA-VERB-RR-0070
**Orig audit:** DA-VERB-0180
**Verb/Card ID:** `verb-60`
**ID / path:** `verb-60.imperfektKonjunktiv.lv`
**DE (read-only):** hatte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han havde
**PROPOSED_DA:** Han havde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 21
**Reg ID:** DA-VERB-RR-0071
**Orig audit:** DA-VERB-0181
**Verb/Card ID:** `verb-60`
**ID / path:** `verb-60.infinitiv.lv`
**DE (read-only):** haben
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT være/tilhøre
**SIGNED_OWNER (existing):** At have
**PROPOSED_DA:** At have
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 22
**Reg ID:** DA-VERB-RR-0072
**Orig audit:** DA-VERB-0182
**Verb/Card ID:** `verb-60`
**ID / path:** `verb-60.partizipVergangenheit.lv`
**DE (read-only):** gehabt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Haft
**PROPOSED_DA:** Haft
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 23
**Reg ID:** DA-VERB-RR-0073
**Orig audit:** DA-VERB-0183
**Verb/Card ID:** `verb-61`
**ID / path:** `verb-61.imperfektIndikativ.lv`
**DE (read-only):** er hielt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han holdt
**PROPOSED_DA:** Han holdt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 24
**Reg ID:** DA-VERB-RR-0074
**Orig audit:** DA-VERB-0184
**Verb/Card ID:** `verb-61`
**ID / path:** `verb-61.partizipVergangenheit.lv`
**DE (read-only):** gehalten
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Holdt
**PROPOSED_DA:** Holdt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 25
**Reg ID:** DA-VERB-RR-0075
**Orig audit:** DA-VERB-0185
**Verb/Card ID:** `verb-61`
**ID / path:** `verb-61.praesens.lv`
**DE (read-only):** er hält
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han holder
**PROPOSED_DA:** Han holder
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 26
**Reg ID:** DA-VERB-RR-0076
**Orig audit:** DA-VERB-0187
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.imperfektIndikativ.lv`
**DE (read-only):** er hieß
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT han blev kaldt natural Danish form)
**SIGNED_OWNER (existing):** Han hed
**PROPOSED_DA:** Han hed
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 27
**Reg ID:** DA-VERB-RR-0077
**Orig audit:** DA-VERB-0189
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.imperfektKonjunktiv.lv`
**DE (read-only):** er hieße
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT kalde / han natural ville blive Danish form) kaldt
**SIGNED_OWNER (existing):** Han ville hedde
**PROPOSED_DA:** Han ville hedde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 28
**Reg ID:** DA-VERB-RR-0078
**Orig audit:** DA-VERB-0190
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.infinitiv.lv`
**DE (read-only):** heißen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At hedde
**PROPOSED_DA:** At hedde
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 29
**Reg ID:** DA-VERB-RR-0079
**Orig audit:** DA-VERB-0191
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.partizipVergangenheit.lv`
**DE (read-only):** geheißen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Heddet
**PROPOSED_DA:** Heddet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 30
**Reg ID:** DA-VERB-RR-0080
**Orig audit:** DA-VERB-0193
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.praesens.lv`
**DE (read-only):** er heißt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT han kaldes natural Danish form)
**SIGNED_OWNER (existing):** Han hedder
**PROPOSED_DA:** Han hedder
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 31
**Reg ID:** DA-VERB-RR-0081
**Orig audit:** DA-VERB-0194
**Verb/Card ID:** `verb-63`
**ID / path:** `verb-63.partizipVergangenheit.lv`
**DE (read-only):** geholfen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Hjulpet
**PROPOSED_DA:** Hjulpet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 32
**Reg ID:** DA-VERB-RR-0082
**Orig audit:** DA-VERB-0195
**Verb/Card ID:** `verb-65`
**ID / path:** `verb-65.imperfektIndikativ.lv`
**DE (read-only):** konnte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han kunne
**PROPOSED_DA:** Han kunne
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 33
**Reg ID:** DA-VERB-RR-0083
**Orig audit:** DA-VERB-0196
**Verb/Card ID:** `verb-65`
**ID / path:** `verb-65.imperfektKonjunktiv.lv`
**DE (read-only):** konnte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han kunne
**PROPOSED_DA:** Han kunne
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 34
**Reg ID:** DA-VERB-RR-0084
**Orig audit:** DA-VERB-0197
**Verb/Card ID:** `verb-65`
**ID / path:** `verb-65.partizipVergangenheit.lv`
**DE (read-only):** gekonnt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Kunnet
**PROPOSED_DA:** Kunnet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 35
**Reg ID:** DA-VERB-RR-0085
**Orig audit:** DA-VERB-0198
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.imperfektIndikativ.lv`
**DE (read-only):** er kroch
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han krøb
**PROPOSED_DA:** Han krøb
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 36
**Reg ID:** DA-VERB-RR-0086
**Orig audit:** DA-VERB-0199
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.imperfektKonjunktiv.lv`
**DE (read-only):** er kröche
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT krybe
**SIGNED_OWNER (existing):** Han ville krybe
**PROPOSED_DA:** Han ville krybe
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 37
**Reg ID:** DA-VERB-RR-0087
**Orig audit:** DA-VERB-0200
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.infinitiv.lv`
**DE (read-only):** kriechen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At krybe
**PROPOSED_DA:** At krybe
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group04.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 38
**Reg ID:** DA-VERB-RR-0088
**Orig audit:** DA-VERB-0201
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.partizipVergangenheit.lv`
**DE (read-only):** gekrochen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT (er ist)
**SIGNED_OWNER (existing):** Krøbet
**PROPOSED_DA:** Krøbet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 39
**Reg ID:** DA-VERB-RR-0089
**Orig audit:** DA-VERB-0202
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.praesens.lv`
**DE (read-only):** er kriecht
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han kryber
**PROPOSED_DA:** Han kryber
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 40
**Reg ID:** DA-VERB-RR-0090
**Orig audit:** DA-VERB-0204
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.imperfektIndikativ.lv`
**DE (read-only):** er lud
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT / inviterede natural Danish form)
**SIGNED_OWNER (existing):** Han læssede
**PROPOSED_DA:** Han læssede
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 41
**Reg ID:** DA-VERB-RR-0091
**Orig audit:** DA-VERB-0206
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.imperfektKonjunktiv.lv`
**DE (read-only):** er lüde
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT indlæse / natural invitere Danish form)
**SIGNED_OWNER (existing):** Han ville læsse
**PROPOSED_DA:** Han ville læsse
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 42
**Reg ID:** DA-VERB-RR-0092
**Orig audit:** DA-VERB-0207
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.infinitiv.lv`
**DE (read-only):** laden
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT at invitere
**SIGNED_OWNER (existing):** At læsse
**PROPOSED_DA:** At læsse
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 43
**Reg ID:** DA-VERB-RR-0093
**Orig audit:** DA-VERB-0209
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.partizipVergangenheit.lv`
**DE (read-only):** geladen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT inviteret natural Danish form)
**SIGNED_OWNER (existing):** Læsset
**PROPOSED_DA:** Læsset
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 44
**Reg ID:** DA-VERB-RR-0094
**Orig audit:** DA-VERB-0211
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.praesens.lv`
**DE (read-only):** er lädt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT inviterer natural Danish form)
**SIGNED_OWNER (existing):** Han læsser
**PROPOSED_DA:** Han læsser
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 45
**Reg ID:** DA-VERB-RR-0095
**Orig audit:** DA-VERB-0213
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.imperfektIndikativ.lv`
**DE (read-only):** er ließ
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT / tilladt natural Danish form)
**SIGNED_OWNER (existing):** Han lod
**PROPOSED_DA:** Han lod
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 46
**Reg ID:** DA-VERB-RR-0096
**Orig audit:** DA-VERB-0215
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.imperfektKonjunktiv.lv`
**DE (read-only):** er ließe
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT sætte / lade natural Danish form)
**SIGNED_OWNER (existing):** Han ville lade
**PROPOSED_DA:** Han ville lade
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 47
**Reg ID:** DA-VERB-RR-0097
**Orig audit:** DA-VERB-0216
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.infinitiv.lv`
**DE (read-only):** lassen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT lade
**SIGNED_OWNER (existing):** At lade
**PROPOSED_DA:** At lade
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 48
**Reg ID:** DA-VERB-RR-0098
**Orig audit:** DA-VERB-0218
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.partizipVergangenheit.lv`
**DE (read-only):** gelassen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT tilladt natural Danish form)
**SIGNED_OWNER (existing):** Ladet
**PROPOSED_DA:** Ladet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 49
**Reg ID:** DA-VERB-RR-0099
**Orig audit:** DA-VERB-0220
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.praesens.lv`
**DE (read-only):** er lässt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT lader natural Danish form)
**SIGNED_OWNER (existing):** Han lader
**PROPOSED_DA:** Han lader
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 50
**Reg ID:** DA-VERB-RR-0100
**Orig audit:** DA-VERB-0221
**Verb/Card ID:** `verb-69`
**ID / path:** `verb-69.infinitiv.lv`
**DE (read-only):** laufen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At løbe
**PROPOSED_DA:** At løbe
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---