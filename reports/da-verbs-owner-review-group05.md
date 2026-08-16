# DA–DE Verbs — OWNER review Group 05

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **201–250** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group05.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 201

**Audit ID:** DA-VERB-0201
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.partizipVergangenheit`
**DE (read-only):** gekrochen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Gik bort
**PROPOSED_DA:** Krøbet
**Problēma:** Wrong participle meaning
**Audita pamatojums:** Gik bort (went away) does not translate gekrochen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 202

**Audit ID:** DA-VERB-0202
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.praesens`
**DE (read-only):** er kriecht
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han læner sig
**PROPOSED_DA:** Han kryber
**Problēma:** Wrong verb meaning (lean vs crawl)
**Audita pamatojums:** kriechen = krybe, not læne sig.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 203

**Audit ID:** DA-VERB-0203
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.imperfektIndikativ`
**DE (read-only):** er lud
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han indlæste / inviterede
**PROPOSED_DA:** Han læssede
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one past-tense form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 204

**Audit ID:** DA-VERB-0204
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.imperfektIndikativ.lv`
**DE (read-only):** er lud
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han indlæste / inviterede
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 205

**Audit ID:** DA-VERB-0205
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.imperfektKonjunktiv`
**DE (read-only):** er lüde
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville indlæse / invitere
**PROPOSED_DA:** Han ville læsse
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one subjunctive form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 206

**Audit ID:** DA-VERB-0206
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.imperfektKonjunktiv.lv`
**DE (read-only):** er lüde
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville indlæse / invitere
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 207

**Audit ID:** DA-VERB-0207
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.infinitiv`
**DE (read-only):** laden
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At indlæse, at invitere
**PROPOSED_DA:** At læsse
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one infinitive teaching form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 208

**Audit ID:** DA-VERB-0208
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.partizipVergangenheit`
**DE (read-only):** geladen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Indlæst / inviteret
**PROPOSED_DA:** Læsset
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one participle form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 209

**Audit ID:** DA-VERB-0209
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.partizipVergangenheit.lv`
**DE (read-only):** geladen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Indlæst / inviteret
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 210

**Audit ID:** DA-VERB-0210
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.praesens`
**DE (read-only):** er lädt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han stabler / inviterer
**PROPOSED_DA:** Han læsser
**Problēma:** Wrong sense in multi-variant chain
**Audita pamatojums:** stablere (stack) is not a standard rendering of laden (load); invitere is a separate sense.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 211

**Audit ID:** DA-VERB-0211
**Verb/Card ID:** `verb-67`
**ID / path:** `verb-67.praesens.lv`
**DE (read-only):** er lädt
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han stabler / inviterer
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 212

**Audit ID:** DA-VERB-0212
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.imperfektIndikativ`
**DE (read-only):** er ließ
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han beordrede / tilladt
**PROPOSED_DA:** Han lod
**Problēma:** Malformed past form with participle fragment
**Audita pamatojums:** tilladt is a participle, not a conjugated past of lade.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 213

**Audit ID:** DA-VERB-0213
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.imperfektIndikativ.lv`
**DE (read-only):** er ließ
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han beordrede / tilladt
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 214

**Audit ID:** DA-VERB-0214
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.imperfektKonjunktiv`
**DE (read-only):** er ließe
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville sætte / lade
**PROPOSED_DA:** Han ville lade
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one subjunctive form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 215

**Audit ID:** DA-VERB-0215
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.imperfektKonjunktiv.lv`
**DE (read-only):** er ließe
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville sætte / lade
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 216

**Audit ID:** DA-VERB-0216
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.infinitiv`
**DE (read-only):** lassen
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At sætte, at lade
**PROPOSED_DA:** At lade
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one infinitive teaching form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 217

**Audit ID:** DA-VERB-0217
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.partizipVergangenheit`
**DE (read-only):** gelassen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sætte / tilladt
**PROPOSED_DA:** Ladt
**Problēma:** Infinitive/participle mix instead of past participle
**Audita pamatojums:** Sætte is infinitive; gelassen = ladet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 218

**Audit ID:** DA-VERB-0218
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.partizipVergangenheit.lv`
**DE (read-only):** gelassen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sætte / tilladt
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 219

**Audit ID:** DA-VERB-0219
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.praesens`
**DE (read-only):** er lässt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han sætter / lader
**PROPOSED_DA:** Han lader
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one present form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 220

**Audit ID:** DA-VERB-0220
**Verb/Card ID:** `verb-68`
**ID / path:** `verb-68.praesens.lv`
**DE (read-only):** er lässt
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han sætter / lader
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 221

**Audit ID:** DA-VERB-0221
**Verb/Card ID:** `verb-69`
**ID / path:** `verb-69.infinitiv`
**DE (read-only):** laufen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skriet
**PROPOSED_DA:** At løbe
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Skriet is Latvian; laufen = at løbe.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 222

**Audit ID:** DA-VERB-0222
**Verb/Card ID:** `verb-69`
**ID / path:** `verb-69.partizipVergangenheit`
**DE (read-only):** gelaufen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Løb
**PROPOSED_DA:** Løbet
**Problēma:** Simple past used instead of past participle
**Audita pamatojums:** Løb is preterite; gelaufen (sein) = er er løbet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 223

**Audit ID:** DA-VERB-0223
**Verb/Card ID:** `verb-70`
**ID / path:** `verb-70.infinitiv`
**DE (read-only):** leiden
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cyst
**PROPOSED_DA:** At lide
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Cyst is Latvian; leiden = at lide.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 224

**Audit ID:** DA-VERB-0224
**Verb/Card ID:** `verb-70`
**ID / path:** `verb-70.partizipVergangenheit`
**DE (read-only):** gelitten
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cyster
**PROPOSED_DA:** Lidt
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Cyster is Latvian; gelitten = lidt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 225

**Audit ID:** DA-VERB-0225
**Verb/Card ID:** `verb-71`
**ID / path:** `verb-71.infinitiv`
**DE (read-only):** leihen
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Låne/låne
**PROPOSED_DA:** At låne
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one infinitive form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 226

**Audit ID:** DA-VERB-0226
**Verb/Card ID:** `verb-71`
**ID / path:** `verb-71.partizipVergangenheit`
**DE (read-only):** geliehen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Udlånt/lånt
**PROPOSED_DA:** Lånt
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one participle form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 227

**Audit ID:** DA-VERB-0227
**Verb/Card ID:** `verb-72`
**ID / path:** `verb-72.partizipVergangenheit`
**DE (read-only):** gelesen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Læse
**PROPOSED_DA:** Læst
**Problēma:** Infinitive used instead of past participle
**Audita pamatojums:** Læse is infinitive; gelesen = læst.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 228

**Audit ID:** DA-VERB-0228
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.imperfektIndikativ`
**DE (read-only):** er lag
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han sov
**PROPOSED_DA:** Han lå
**Problēma:** Wrong verb meaning (slept vs lay)
**Audita pamatojums:** lag = lå, not sov.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 229

**Audit ID:** DA-VERB-0229
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.imperfektKonjunktiv`
**DE (read-only):** er läge
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville sove
**PROPOSED_DA:** Han ville ligge
**Problēma:** Wrong verb meaning in subjunctive
**Audita pamatojums:** Konjunktiv of liegen should use ligge, not sove.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 230

**Audit ID:** DA-VERB-0230
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.infinitiv`
**DE (read-only):** liegen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At sove
**PROPOSED_DA:** At ligge
**Problēma:** Wrong verb meaning (sleep vs lie)
**Audita pamatojums:** liegen = ligge; sove translates schlafen, not liegen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 231

**Audit ID:** DA-VERB-0231
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.partizipVergangenheit`
**DE (read-only):** gelegen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sov
**PROPOSED_DA:** Ligget
**Problēma:** Wrong participle meaning and form
**Audita pamatojums:** Sov is sleep preterite; gelegen = ligget.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 232

**Audit ID:** DA-VERB-0232
**Verb/Card ID:** `verb-73`
**ID / path:** `verb-73.praesens`
**DE (read-only):** er liegt
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han sover
**PROPOSED_DA:** Han ligger
**Problēma:** Wrong verb meaning (sleep vs lie)
**Audita pamatojums:** liegt = ligger, not sover.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 233

**Audit ID:** DA-VERB-0233
**Verb/Card ID:** `verb-74`
**ID / path:** `verb-74.infinitiv`
**DE (read-only):** lügen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Melot
**PROPOSED_DA:** At lyve
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Melot is Latvian; lügen = at lyve.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 234

**Audit ID:** DA-VERB-0234
**Verb/Card ID:** `verb-74`
**ID / path:** `verb-74.partizipVergangenheit`
**DE (read-only):** gelogen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Melots
**PROPOSED_DA:** Løjet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Melots is Latvian; gelogen = løjet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 235

**Audit ID:** DA-VERB-0235
**Verb/Card ID:** `verb-75`
**ID / path:** `verb-75.imperfektIndikativ`
**DE (read-only):** er mahlte
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kant
**PROPOSED_DA:** Han malede
**Problēma:** Garbled/nonsensical past form
**Audita pamatojums:** Han kant is not a valid Danish conjugation of male.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 236

**Audit ID:** DA-VERB-0236
**Verb/Card ID:** `verb-75`
**ID / path:** `verb-75.imperfektKonjunktiv`
**DE (read-only):** er malte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han maler
**PROPOSED_DA:** Han ville male
**Problēma:** Present tense used instead of subjunctive
**Audita pamatojums:** Han maler is present; Konjunktiv needs han ville male.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 237

**Audit ID:** DA-VERB-0237
**Verb/Card ID:** `verb-76`
**ID / path:** `verb-76.partizipVergangenheit`
**DE (read-only):** gemieden
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Undgås
**PROPOSED_DA:** Undgået
**Problēma:** Passive present used instead of past participle
**Audita pamatojums:** Undgås is passive present; gemieden = undgået.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 238

**Audit ID:** DA-VERB-0238
**Verb/Card ID:** `verb-77`
**ID / path:** `verb-77.imperfektIndikativ`
**DE (read-only):** er molk / er melkte
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han fejede
**PROPOSED_DA:** Han malkede
**Problēma:** Wrong verb meaning (swept vs milked)
**Audita pamatojums:** molk = malkede, not fejede.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 239

**Audit ID:** DA-VERB-0239
**Verb/Card ID:** `verb-77`
**ID / path:** `verb-77.infinitiv`
**DE (read-only):** melken
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Slaukt
**PROPOSED_DA:** At malke
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Slaukt is Latvian; melken = at malke.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 240

**Audit ID:** DA-VERB-0240
**Verb/Card ID:** `verb-77`
**ID / path:** `verb-77.partizipVergangenheit`
**DE (read-only):** gemolken / gemelkt
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Slaukts
**PROPOSED_DA:** Malket
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Slaukts is Latvian; gemolken = malket.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 241

**Audit ID:** DA-VERB-0241
**Verb/Card ID:** `verb-77`
**ID / path:** `verb-77.praesens`
**DE (read-only):** er milkt / er melkt
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han fejer
**PROPOSED_DA:** Han malker
**Problēma:** Wrong verb meaning (sweep vs milk)
**Audita pamatojums:** melken = malke, not feje (sweep).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 242

**Audit ID:** DA-VERB-0242
**Verb/Card ID:** `verb-79`
**ID / path:** `verb-79.infinitiv`
**DE (read-only):** misslingen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Neizdoties
**PROPOSED_DA:** At mislykkes
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Neizdoties is Latvian; misslingen = at mislykkes.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 243

**Audit ID:** DA-VERB-0243
**Verb/Card ID:** `verb-79`
**ID / path:** `verb-79.partizipVergangenheit`
**DE (read-only):** misslungen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Neizdevies
**PROPOSED_DA:** Mislykket
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Neizdevies is Latvian; misslungen = mislykket.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 244

**Audit ID:** DA-VERB-0244
**Verb/Card ID:** `verb-79`
**ID / path:** `verb-79.praesens`
**DE (read-only):** es misslingt
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tas neizdodas
**PROPOSED_DA:** Det mislykkes
**Problēma:** Latvian remnant in present form
**Audita pamatojums:** Tas neizdodas is Latvian; misslingt = det mislykkes.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 245

**Audit ID:** DA-VERB-0245
**Verb/Card ID:** `verb-80`
**ID / path:** `verb-80.imperfektIndikativ`
**DE (read-only):** mochte
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Patika
**PROPOSED_DA:** Han kunne lide
**Problēma:** Latvian remnant in past tense
**Audita pamatojums:** Patika is Latvian; mochte = kunne lide / liked.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 246

**Audit ID:** DA-VERB-0246
**Verb/Card ID:** `verb-80`
**ID / path:** `verb-80.imperfektKonjunktiv`
**DE (read-only):** mochte
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Patika
**PROPOSED_DA:** Han kunne lide
**Problēma:** Latvian remnant in subjunctive
**Audita pamatojums:** Patika is Latvian, not Danish subjunctive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 247

**Audit ID:** DA-VERB-0247
**Verb/Card ID:** `verb-80`
**ID / path:** `verb-80.infinitiv`
**DE (read-only):** mögen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Patik
**PROPOSED_DA:** At kunne lide
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Patik is Latvian; mögen = at kunne lide.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 248

**Audit ID:** DA-VERB-0248
**Verb/Card ID:** `verb-80`
**ID / path:** `verb-80.partizipVergangenheit`
**DE (read-only):** gemocht
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Paticis
**PROPOSED_DA:** Kunnet lide
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Paticis is Latvian; gemocht = kunnet lide.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 249

**Audit ID:** DA-VERB-0249
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.imperfektIndikativ`
**DE (read-only):** musste
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Burde have
**PROPOSED_DA:** Han måtte
**Problēma:** Wrong modal meaning (should vs must)
**Audita pamatojums:** musste = måtte (had to), not burde have (should have).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 250

**Audit ID:** DA-VERB-0250
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.imperfektKonjunktiv`
**DE (read-only):** musste
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Burde have
**PROPOSED_DA:** Han måtte
**Problēma:** Wrong modal meaning in subjunctive
**Audita pamatojums:** Konjunktiv of müssen should use måtte, not burde have.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
