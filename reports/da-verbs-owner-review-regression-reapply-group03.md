# DA–DE Verbs — OWNER review regression reapply Group 03

Avots: [da-verbs-owner-repairs-final-regression-audit.md](./da-verbs-owner-repairs-final-regression-audit.md)
Findings: **101–150** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-regression-reapply-group03.md`
> **Trase:** Reapply — signed OWNER lēmums jau pastāv; production vēl rāda LABOT.

> **PROPOSED_DA** ir Luna ieteikums / signed OWNER mērķis — **nav** automātiski apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1
**Reg ID:** DA-VERB-RR-0101
**Orig audit:** DA-VERB-0222
**Verb/Card ID:** `verb-69`
**ID / path:** `verb-69.partizipVergangenheit.lv`
**DE (read-only):** gelaufen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT ist)
**SIGNED_OWNER (existing):** Løbet
**PROPOSED_DA:** Løbet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 2
**Reg ID:** DA-VERB-RR-0102
**Orig audit:** DA-VERB-0223
**Verb/Card ID:** `verb-70`
**ID / path:** `verb-70.infinitiv.lv`
**DE (read-only):** leiden
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At lide
**PROPOSED_DA:** At lide
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 3
**Reg ID:** DA-VERB-RR-0103
**Orig audit:** DA-VERB-0224
**Verb/Card ID:** `verb-70`
**ID / path:** `verb-70.partizipVergangenheit.lv`
**DE (read-only):** gelitten
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Lidt
**PROPOSED_DA:** Lidt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 4
**Reg ID:** DA-VERB-RR-0104
**Orig audit:** DA-VERB-0225
**Verb/Card ID:** `verb-71`
**ID / path:** `verb-71.infinitiv.lv`
**DE (read-only):** leihen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At låne
**PROPOSED_DA:** At låne
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 5
**Reg ID:** DA-VERB-RR-0105
**Orig audit:** DA-VERB-0226
**Verb/Card ID:** `verb-71`
**ID / path:** `verb-71.partizipVergangenheit.lv`
**DE (read-only):** geliehen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Lånt
**PROPOSED_DA:** Lånt
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 6
**Reg ID:** DA-VERB-RR-0106
**Orig audit:** DA-VERB-0227
**Verb/Card ID:** `verb-72`
**ID / path:** `verb-72.partizipVergangenheit.lv`
**DE (read-only):** gelesen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Læst
**PROPOSED_DA:** Læst
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 7
**Reg ID:** DA-VERB-RR-0107
**Orig audit:** DA-VERB-0228
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.imperfektIndikativ.lv`
**DE (read-only):** er lag
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han lå
**PROPOSED_DA:** Han lå
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 8
**Reg ID:** DA-VERB-RR-0108
**Orig audit:** DA-VERB-0229
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.imperfektKonjunktiv.lv`
**DE (read-only):** er läge
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT sove ligge
**SIGNED_OWNER (existing):** Han ville ligge
**PROPOSED_DA:** Han ville ligge
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 9
**Reg ID:** DA-VERB-RR-0109
**Orig audit:** DA-VERB-0230
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.infinitiv.lv`
**DE (read-only):** liegen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At ligge
**PROPOSED_DA:** At ligge
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 10
**Reg ID:** DA-VERB-RR-0110
**Orig audit:** DA-VERB-0231
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.partizipVergangenheit.lv`
**DE (read-only):** gelegen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Ligget
**PROPOSED_DA:** Ligget
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 11
**Reg ID:** DA-VERB-RR-0111
**Orig audit:** DA-VERB-0232
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.praesens.lv`
**DE (read-only):** er liegt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han ligger
**PROPOSED_DA:** Han ligger
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 12
**Reg ID:** DA-VERB-RR-0112
**Orig audit:** DA-VERB-0233
**Verb/Card ID:** `verb-74`
**ID / path:** `verb-74.infinitiv.lv`
**DE (read-only):** lügen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At lyve
**PROPOSED_DA:** At lyve
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 13
**Reg ID:** DA-VERB-RR-0113
**Orig audit:** DA-VERB-0234
**Verb/Card ID:** `verb-74`
**ID / path:** `verb-74.partizipVergangenheit.lv`
**DE (read-only):** gelogen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Løjet
**PROPOSED_DA:** Løjet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 14
**Reg ID:** DA-VERB-RR-0114
**Orig audit:** DA-VERB-0235
**Verb/Card ID:** `verb-75`
**ID / path:** `verb-75.imperfektIndikativ.lv`
**DE (read-only):** er mahlte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han malede
**PROPOSED_DA:** Han malede
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 15
**Reg ID:** DA-VERB-RR-0115
**Orig audit:** DA-VERB-0236
**Verb/Card ID:** `verb-75`
**ID / path:** `verb-75.imperfektKonjunktiv.lv`
**DE (read-only):** er malte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT male
**SIGNED_OWNER (existing):** Han ville male
**PROPOSED_DA:** Han ville male
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 16
**Reg ID:** DA-VERB-RR-0116
**Orig audit:** DA-VERB-0237
**Verb/Card ID:** `verb-76`
**ID / path:** `verb-76.partizipVergangenheit.lv`
**DE (read-only):** gemieden
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Undgået
**PROPOSED_DA:** Undgået
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 17
**Reg ID:** DA-VERB-RR-0117
**Orig audit:** DA-VERB-0238
**Verb/Card ID:** `verb-77`
**ID / path:** `verb-77.imperfektIndikativ.lv`
**DE (read-only):** er molk / er melkte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT melkte
**SIGNED_OWNER (existing):** Han malkede
**PROPOSED_DA:** Han malkede
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 18
**Reg ID:** DA-VERB-RR-0118
**Orig audit:** DA-VERB-0239
**Verb/Card ID:** `verb-77`
**ID / path:** `verb-77.infinitiv.lv`
**DE (read-only):** melken
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At malke
**PROPOSED_DA:** At malke
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 19
**Reg ID:** DA-VERB-RR-0119
**Orig audit:** DA-VERB-0240
**Verb/Card ID:** `verb-77`
**ID / path:** `verb-77.partizipVergangenheit.lv`
**DE (read-only):** gemolken / gemelkt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT gemelkt
**SIGNED_OWNER (existing):** Malket
**PROPOSED_DA:** Malket
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 20
**Reg ID:** DA-VERB-RR-0120
**Orig audit:** DA-VERB-0241
**Verb/Card ID:** `verb-77`
**ID / path:** `verb-77.praesens.lv`
**DE (read-only):** er milkt / er melkt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT er melkt
**SIGNED_OWNER (existing):** Han malker
**PROPOSED_DA:** Han malker
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 21
**Reg ID:** DA-VERB-RR-0121
**Orig audit:** DA-VERB-0242
**Verb/Card ID:** `verb-79`
**ID / path:** `verb-79.infinitiv.lv`
**DE (read-only):** misslingen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At mislykkes
**PROPOSED_DA:** At mislykkes
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 22
**Reg ID:** DA-VERB-RR-0122
**Orig audit:** DA-VERB-0243
**Verb/Card ID:** `verb-79`
**ID / path:** `verb-79.partizipVergangenheit.lv`
**DE (read-only):** misslungen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Mislykket
**PROPOSED_DA:** Mislykket
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 23
**Reg ID:** DA-VERB-RR-0123
**Orig audit:** DA-VERB-0244
**Verb/Card ID:** `verb-79`
**ID / path:** `verb-79.praesens.lv`
**DE (read-only):** es misslingt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Det mislykkes
**PROPOSED_DA:** Det mislykkes
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 24
**Reg ID:** DA-VERB-RR-0124
**Orig audit:** DA-VERB-0245
**Verb/Card ID:** `verb-80`
**ID / path:** `verb-80.imperfektIndikativ.lv`
**DE (read-only):** mochte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT lide
**SIGNED_OWNER (existing):** Han kunne lide
**PROPOSED_DA:** Han kunne lide
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 25
**Reg ID:** DA-VERB-RR-0125
**Orig audit:** DA-VERB-0246
**Verb/Card ID:** `verb-80`
**ID / path:** `verb-80.imperfektKonjunktiv.lv`
**DE (read-only):** mochte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT lide
**SIGNED_OWNER (existing):** Han kunne lide
**PROPOSED_DA:** Han kunne lide
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 26
**Reg ID:** DA-VERB-RR-0126
**Orig audit:** DA-VERB-0247
**Verb/Card ID:** `verb-80`
**ID / path:** `verb-80.infinitiv.lv`
**DE (read-only):** mögen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At kunne lide
**PROPOSED_DA:** At kunne lide
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 27
**Reg ID:** DA-VERB-RR-0127
**Orig audit:** DA-VERB-0248
**Verb/Card ID:** `verb-80`
**ID / path:** `verb-80.partizipVergangenheit.lv`
**DE (read-only):** gemocht
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Kunnet lide
**PROPOSED_DA:** Kunnet lide
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 28
**Reg ID:** DA-VERB-RR-0128
**Orig audit:** DA-VERB-0249
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.imperfektIndikativ.lv`
**DE (read-only):** musste
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han måtte
**PROPOSED_DA:** Han måtte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 29
**Reg ID:** DA-VERB-RR-0129
**Orig audit:** DA-VERB-0250
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.imperfektKonjunktiv.lv`
**DE (read-only):** musste
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han måtte
**PROPOSED_DA:** Han måtte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group05.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 30
**Reg ID:** DA-VERB-RR-0130
**Orig audit:** DA-VERB-0251
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.infinitiv.lv`
**DE (read-only):** müssen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT at måtte
**SIGNED_OWNER (existing):** At skulle
**PROPOSED_DA:** At skulle
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 31
**Reg ID:** DA-VERB-RR-0131
**Orig audit:** DA-VERB-0252
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.partizipVergangenheit.lv`
**DE (read-only):** gemusst
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Måttet
**PROPOSED_DA:** Måttet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 32
**Reg ID:** DA-VERB-RR-0132
**Orig audit:** DA-VERB-0253
**Verb/Card ID:** `verb-83`
**ID / path:** `verb-83.imperfektIndikativ.lv`
**DE (read-only):** er nannte
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han navngav
**PROPOSED_DA:** Han navngav
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 33
**Reg ID:** DA-VERB-RR-0133
**Orig audit:** DA-VERB-0254
**Verb/Card ID:** `verb-83`
**ID / path:** `verb-83.infinitiv.lv`
**DE (read-only):** nennen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At navngive
**PROPOSED_DA:** At navngive
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 34
**Reg ID:** DA-VERB-RR-0134
**Orig audit:** DA-VERB-0255
**Verb/Card ID:** `verb-83`
**ID / path:** `verb-83.partizipVergangenheit.lv`
**DE (read-only):** genannt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Navngivet
**PROPOSED_DA:** Navngivet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 35
**Reg ID:** DA-VERB-RR-0135
**Orig audit:** DA-VERB-0256
**Verb/Card ID:** `verb-83`
**ID / path:** `verb-83.praesens.lv`
**DE (read-only):** er nennt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han navngiver
**PROPOSED_DA:** Han navngiver
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 36
**Reg ID:** DA-VERB-RR-0136
**Orig audit:** DA-VERB-0257
**Verb/Card ID:** `verb-84`
**ID / path:** `verb-84.imperfektIndikativ.lv`
**DE (read-only):** er pfiff
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han fløjtede
**PROPOSED_DA:** Han fløjtede
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 37
**Reg ID:** DA-VERB-RR-0137
**Orig audit:** DA-VERB-0258
**Verb/Card ID:** `verb-84`
**ID / path:** `verb-84.infinitiv.lv`
**DE (read-only):** pfeifen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At fløjte
**PROPOSED_DA:** At fløjte
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 38
**Reg ID:** DA-VERB-RR-0138
**Orig audit:** DA-VERB-0259
**Verb/Card ID:** `verb-84`
**ID / path:** `verb-84.partizipVergangenheit.lv`
**DE (read-only):** gepfiffen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Fløjtet
**PROPOSED_DA:** Fløjtet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 39
**Reg ID:** DA-VERB-RR-0139
**Orig audit:** DA-VERB-0260
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.imperfektIndikativ.lv`
**DE (read-only):** pflegte vai pflog
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT pflog
**SIGNED_OWNER (existing):** Han plejede
**PROPOSED_DA:** Han plejede
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 40
**Reg ID:** DA-VERB-RR-0140
**Orig audit:** DA-VERB-0261
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.imperfektKonjunktiv.lv`
**DE (read-only):** pflegte vai pflog
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT pflog pleje
**SIGNED_OWNER (existing):** Han ville pleje
**PROPOSED_DA:** Han ville pleje
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 41
**Reg ID:** DA-VERB-RR-0141
**Orig audit:** DA-VERB-0262
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.infinitiv.lv`
**DE (read-only):** pflegen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At pleje
**PROPOSED_DA:** At pleje
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 42
**Reg ID:** DA-VERB-RR-0142
**Orig audit:** DA-VERB-0263
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.partizipVergangenheit.lv`
**DE (read-only):** gepflegt vai gepflogen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT gepflogen
**SIGNED_OWNER (existing):** Plejet
**PROPOSED_DA:** Plejet
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 43
**Reg ID:** DA-VERB-RR-0143
**Orig audit:** DA-VERB-0264
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.praesens.lv`
**DE (read-only):** er pflegt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Han plejer
**PROPOSED_DA:** Han plejer
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 44
**Reg ID:** DA-VERB-RR-0144
**Orig audit:** DA-VERB-0265
**Verb/Card ID:** `verb-86`
**ID / path:** `verb-86.partizipVergangenheit.lv`
**DE (read-only):** gepriesen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** Roset
**PROPOSED_DA:** Roset
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 45
**Reg ID:** DA-VERB-RR-0145
**Orig audit:** DA-VERB-0266
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.imperfektIndikativ.lv`
**DE (read-only):** er quoll
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT op
**SIGNED_OWNER (existing):** Det svulmede op
**PROPOSED_DA:** Det svulmede op
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 46
**Reg ID:** DA-VERB-RR-0146
**Orig audit:** DA-VERB-0267
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.imperfektKonjunktiv.lv`
**DE (read-only):** er quölle
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT svulme op op
**SIGNED_OWNER (existing):** Det ville svulme
**PROPOSED_DA:** Det ville svulme op
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 47
**Reg ID:** DA-VERB-RR-0147
**Orig audit:** DA-VERB-0268
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.infinitiv.lv`
**DE (read-only):** quellen
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT
**SIGNED_OWNER (existing):** At svulme op
**PROPOSED_DA:** At svulme op
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 48
**Reg ID:** DA-VERB-RR-0148
**Orig audit:** DA-VERB-0269
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.partizipVergangenheit.lv`
**DE (read-only):** gequollen (er ist)
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT (er ist)
**SIGNED_OWNER (existing):** Svulmet op
**PROPOSED_DA:** Svulmet op
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 49
**Reg ID:** DA-VERB-RR-0149
**Orig audit:** DA-VERB-0270
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.praesens.lv`
**DE (read-only):** er quillt
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT op
**SIGNED_OWNER (existing):** Det svulmer op
**PROPOSED_DA:** Det svulmer op
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---
## Finding 50
**Reg ID:** DA-VERB-RR-0150
**Orig audit:** DA-VERB-0272
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.imperfektIndikativ.lv`
**DE (read-only):** er riet
**Severity:** CRITICAL
**Category:** REAPPLY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** LABOT foreslog natural Danish form)
**SIGNED_OWNER (existing):** Han rådede
**PROPOSED_DA:** Han rådede
**Problēma:** OWNER repair not applied — production still shows LABOT/parser corruption
**Audita pamatojums:** Signed OWNER decision exists but apply parser failed. Re-apply COPY-ONLY with fixed parser.
**Signed avots:** `da-verbs-owner-decisions-signed-group06.md`
**Avots:** GPT-5.6 Luna regression audit (`reports/da-verbs-owner-repairs-final-regression-audit.md`)
**OWNER_DECISION:**
---