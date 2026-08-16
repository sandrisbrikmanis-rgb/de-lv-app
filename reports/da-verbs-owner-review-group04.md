# DA–DE Verbs — OWNER review Group 04

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **151–200** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group04.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 151

**Audit ID:** DA-VERB-0151
**Verb/Card ID:** `verb-53`
**ID / path:** `verb-53.imperfektIndikativ`
**DE (read-only):** er floss
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han løb
**PROPOSED_DA:** Han flød
**Problēma:** Wrong verb meaning (ran instead of flowed)
**Audita pamatojums:** fließen past = flød, not løb.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 152

**Audit ID:** DA-VERB-0152
**Verb/Card ID:** `verb-53`
**ID / path:** `verb-53.imperfektKonjunktiv`
**DE (read-only):** er flösse
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville løbe
**PROPOSED_DA:** Han ville flyde
**Problēma:** Wrong verb meaning in subjunctive
**Audita pamatojums:** Konjunktiv of fließen should use flyde, not løbe.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 153

**Audit ID:** DA-VERB-0153
**Verb/Card ID:** `verb-53`
**ID / path:** `verb-53.partizipVergangenheit`
**DE (read-only):** geflossen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bestået
**PROPOSED_DA:** Flydt
**Problēma:** Completely wrong participle meaning
**Audita pamatojums:** Bestået (passed) does not translate geflossen; should be flydt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 154

**Audit ID:** DA-VERB-0154
**Verb/Card ID:** `verb-53`
**ID / path:** `verb-53.praesens`
**DE (read-only):** er fließt
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han løber
**PROPOSED_DA:** Han flyder
**Problēma:** Wrong verb meaning (run instead of flow)
**Audita pamatojums:** fließen = flyde; løbe translates fließen incorrectly.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 155

**Audit ID:** DA-VERB-0155
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.imperfektIndikativ`
**DE (read-only):** er frass
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han spiste / slugte
**PROPOSED_DA:** Han slugte
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one teaching form, not spiste / slugte.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 156

**Audit ID:** DA-VERB-0156
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.imperfektIndikativ.lv`
**DE (read-only):** er frass
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han spiste / slugte
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 157

**Audit ID:** DA-VERB-0157
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.imperfektKonjunktiv`
**DE (read-only):** er fräße
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville spise / morgenmad
**PROPOSED_DA:** Han ville sluge
**Problēma:** Malformed subjunctive with noun fragment
**Audita pamatojums:** morgenmad is a noun, not a verb form; Konjunktiv must be a finite verb phrase.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 158

**Audit ID:** DA-VERB-0158
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.imperfektKonjunktiv.lv`
**DE (read-only):** er fräße
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville spise / morgenmad
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 159

**Audit ID:** DA-VERB-0159
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.infinitiv`
**DE (read-only):** fressen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Spise i morgen
**PROPOSED_DA:** At æde / at sluges
**Problēma:** Nonsensical infinitiv translation
**Audita pamatojums:** Spise i morgen (eat tomorrow) is not a valid rendering of fressen (devour, esp. animals).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 160

**Audit ID:** DA-VERB-0160
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.partizipVergangenheit`
**DE (read-only):** gefressen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Spist/morgen
**PROPOSED_DA:** Slugt
**Problēma:** Malformed participle with stray noun
**Audita pamatojums:** Spist/morgen is not a valid Danish participle for gefressen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 161

**Audit ID:** DA-VERB-0161
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.praesens`
**DE (read-only):** er frisst
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han spiser / sluger
**PROPOSED_DA:** Han sluger
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one teaching form, not spiser / sluger.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 162

**Audit ID:** DA-VERB-0162
**Verb/Card ID:** `verb-54`
**ID / path:** `verb-54.praesens.lv`
**DE (read-only):** er frisst
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han spiser / sluger
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 163

**Audit ID:** DA-VERB-0163
**Verb/Card ID:** `verb-55`
**ID / path:** `verb-55.imperfektIndikativ`
**DE (read-only):** er fror
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ø
**PROPOSED_DA:** Han frøs
**Problēma:** Truncated/garbled form
**Audita pamatojums:** Han ø is incomplete and unusable as a Danish past-tense form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 164

**Audit ID:** DA-VERB-0164
**Verb/Card ID:** `verb-55`
**ID / path:** `verb-55.imperfektKonjunktiv`
**DE (read-only):** er fröre
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han frøs
**PROPOSED_DA:** Han ville fryse
**Problēma:** Simple past used instead of subjunctive
**Audita pamatojums:** Han frøs is indicative past; Konjunktiv II of frieren is han ville fryse.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 165

**Audit ID:** DA-VERB-0165
**Verb/Card ID:** `verb-55`
**ID / path:** `verb-55.infinitiv`
**DE (read-only):** frieren
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Salt
**PROPOSED_DA:** At fryse
**Problēma:** Noun used instead of verb infinitive
**Audita pamatojums:** Salt (salt) is not Danish for frieren (freeze); should be at fryse.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 166

**Audit ID:** DA-VERB-0166
**Verb/Card ID:** `verb-55`
**ID / path:** `verb-55.partizipVergangenheit`
**DE (read-only):** gefroren
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Salis
**PROPOSED_DA:** Frosset
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Salis is not Danish; gefroren = frosset.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 167

**Audit ID:** DA-VERB-0167
**Verb/Card ID:** `verb-56`
**ID / path:** `verb-56.infinitiv`
**DE (read-only):** geben
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Prik
**PROPOSED_DA:** At give
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Prik is Latvian, not Danish; geben = at give.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 168

**Audit ID:** DA-VERB-0168
**Verb/Card ID:** `verb-56`
**ID / path:** `verb-56.partizipVergangenheit`
**DE (read-only):** gegeben
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Prikker
**PROPOSED_DA:** Givet
**Problēma:** Wrong participle form
**Audita pamatojums:** Prikker is not the Danish past participle of give; gegeben = givet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 169

**Audit ID:** DA-VERB-0169
**Verb/Card ID:** `verb-57`
**ID / path:** `verb-57.infinitiv`
**DE (read-only):** gedeihen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izdoties
**PROPOSED_DA:** At trives
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Izdoties is Latvian; gedeihen = at trives / at lykkes.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 170

**Audit ID:** DA-VERB-0170
**Verb/Card ID:** `verb-57`
**ID / path:** `verb-57.infinitiv.lv`
**DE (read-only):** gedeihen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izdoties
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-14 (DE: gelingen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 171

**Audit ID:** DA-VERB-0171
**Verb/Card ID:** `verb-57`
**ID / path:** `verb-57.partizipVergangenheit`
**DE (read-only):** gediehen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izdevies
**PROPOSED_DA:** Trived
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Izdevies is Latvian; gediehen (sein) = er er trived.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 172

**Audit ID:** DA-VERB-0172
**Verb/Card ID:** `verb-58`
**ID / path:** `verb-58.infinitiv`
**DE (read-only):** gehen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Iet
**PROPOSED_DA:** At gå
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Iet is Latvian; gehen = at gå.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 173

**Audit ID:** DA-VERB-0173
**Verb/Card ID:** `verb-58`
**ID / path:** `verb-58.partizipVergangenheit`
**DE (read-only):** gegangen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Gik
**PROPOSED_DA:** Gået
**Problēma:** Simple past used instead of past participle
**Audita pamatojums:** Gik is preterite; gegangen (sein) = er er gået.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 174

**Audit ID:** DA-VERB-0174
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.imperfektIndikativ`
**DE (read-only):** er gewann
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han fik
**PROPOSED_DA:** Han vandt
**Problēma:** Semantic mismatch (got vs won)
**Audita pamatojums:** gewinnen past = vandt, not fik.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 175

**Audit ID:** DA-VERB-0175
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.imperfektKonjunktiv`
**DE (read-only):** er gewönne / er gewänne
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville få
**PROPOSED_DA:** Han ville vinde
**Problēma:** Semantic mismatch in subjunctive
**Audita pamatojums:** Konjunktiv of gewinnen should use vinde, not få.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 176

**Audit ID:** DA-VERB-0176
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.infinitiv`
**DE (read-only):** gewinnen
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At opnå
**PROPOSED_DA:** At vinde
**Problēma:** Semantic mismatch (obtain vs win)
**Audita pamatojums:** gewinnen = win (vinde), not obtain (opnå).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 177

**Audit ID:** DA-VERB-0177
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.partizipVergangenheit`
**DE (read-only):** gewonnen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Opnået
**PROPOSED_DA:** Vundet
**Problēma:** Semantic mismatch in participle
**Audita pamatojums:** gewonnen = vundet (won), not opnået (obtained).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 178

**Audit ID:** DA-VERB-0178
**Verb/Card ID:** `verb-59`
**ID / path:** `verb-59.praesens`
**DE (read-only):** er gewinnt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han får
**PROPOSED_DA:** Han vinder
**Problēma:** Semantic mismatch (get vs win)
**Audita pamatojums:** gewinnen present = vinder, not får (get).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 179

**Audit ID:** DA-VERB-0179
**Verb/Card ID:** `verb-60`
**ID / path:** `verb-60.imperfektIndikativ`
**DE (read-only):** hatte
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bija
**PROPOSED_DA:** Han havde
**Problēma:** Latvian remnant in past tense
**Audita pamatojums:** Bija is Latvian; hatte = havde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 180

**Audit ID:** DA-VERB-0180
**Verb/Card ID:** `verb-60`
**ID / path:** `verb-60.imperfektKonjunktiv`
**DE (read-only):** hatte
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bija
**PROPOSED_DA:** Han havde
**Problēma:** Latvian remnant in subjunctive
**Audita pamatojums:** Bija is Latvian; Konjunktiv II of haben = havde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 181

**Audit ID:** DA-VERB-0181
**Verb/Card ID:** `verb-60`
**ID / path:** `verb-60.infinitiv`
**DE (read-only):** haben
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At være/tilhøre
**PROPOSED_DA:** At have
**Problēma:** Semantic mismatch (be/belong vs have)
**Audita pamatojums:** haben = have; være/tilhøre conflates unrelated verbs.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 182

**Audit ID:** DA-VERB-0182
**Verb/Card ID:** `verb-60`
**ID / path:** `verb-60.partizipVergangenheit`
**DE (read-only):** gehabt
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bijis
**PROPOSED_DA:** Haft
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Bijis is Latvian; gehabt = haft.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 183

**Audit ID:** DA-VERB-0183
**Verb/Card ID:** `verb-61`
**ID / path:** `verb-61.imperfektIndikativ`
**DE (read-only):** er hielt
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Holdt han
**PROPOSED_DA:** Han holdt
**Problēma:** Inverted word order
**Audita pamatojums:** Danish person forms normally use Han holdt, not verb-first Holdt han.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 184

**Audit ID:** DA-VERB-0184
**Verb/Card ID:** `verb-61`
**ID / path:** `verb-61.partizipVergangenheit`
**DE (read-only):** gehalten
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Afholdt
**PROPOSED_DA:** Holdt
**Problēma:** Semantic mismatch in participle
**Audita pamatojums:** Afholdt means held (an event); halten (hold) = holdt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 185

**Audit ID:** DA-VERB-0185
**Verb/Card ID:** `verb-61`
**ID / path:** `verb-61.praesens`
**DE (read-only):** er hält
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han der
**PROPOSED_DA:** Han holder
**Problēma:** Garbled present-tense form
**Audita pamatojums:** Han der is not a valid Danish conjugation of holde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 186

**Audit ID:** DA-VERB-0186
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.imperfektIndikativ`
**DE (read-only):** er hieß
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kaldte / han blev kaldt
**PROPOSED_DA:** Han hed
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one form; heißen past = hed.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 187

**Audit ID:** DA-VERB-0187
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.imperfektIndikativ.lv`
**DE (read-only):** er hieß
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kaldte / han blev kaldt
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 188

**Audit ID:** DA-VERB-0188
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.imperfektKonjunktiv`
**DE (read-only):** er hieße
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville kalde / han ville blive kaldt
**PROPOSED_DA:** Han ville hedde
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one subjunctive form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 189

**Audit ID:** DA-VERB-0189
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.imperfektKonjunktiv.lv`
**DE (read-only):** er hieße
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville kalde / han ville blive kaldt
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 190

**Audit ID:** DA-VERB-0190
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.infinitiv`
**DE (read-only):** heißen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Saut
**PROPOSED_DA:** At hedde
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Saut is Latvian; heißen (be called) = at hedde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 191

**Audit ID:** DA-VERB-0191
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.partizipVergangenheit`
**DE (read-only):** geheißen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Saukts
**PROPOSED_DA:** Heddet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Saukts is Latvian; geheißen = heddet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 192

**Audit ID:** DA-VERB-0192
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.praesens`
**DE (read-only):** er heißt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kalder / han kaldes
**PROPOSED_DA:** Han hedder
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one form; heißen = hedde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 193

**Audit ID:** DA-VERB-0193
**Verb/Card ID:** `verb-62`
**ID / path:** `verb-62.praesens.lv`
**DE (read-only):** er heißt
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kalder / han kaldes
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 194

**Audit ID:** DA-VERB-0194
**Verb/Card ID:** `verb-63`
**ID / path:** `verb-63.partizipVergangenheit`
**DE (read-only):** geholfen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Hjalp
**PROPOSED_DA:** Hjulpet
**Problēma:** Simple past used instead of past participle
**Audita pamatojums:** Hjalp is preterite; geholfen = hjulpet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 195

**Audit ID:** DA-VERB-0195
**Verb/Card ID:** `verb-65`
**ID / path:** `verb-65.imperfektIndikativ`
**DE (read-only):** konnte
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kunne
**PROPOSED_DA:** Han kunne
**Problēma:** Infinitive used instead of past tense
**Audita pamatojums:** Kunne alone is infinitive; konnte = han kunne.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 196

**Audit ID:** DA-VERB-0196
**Verb/Card ID:** `verb-65`
**ID / path:** `verb-65.imperfektKonjunktiv`
**DE (read-only):** konnte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kunne
**PROPOSED_DA:** Han kunne
**Problēma:** Infinitive used instead of subjunctive form
**Audita pamatojums:** Konjunktiv II of können is kunne as finite form (han kunne), not bare infinitive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 197

**Audit ID:** DA-VERB-0197
**Verb/Card ID:** `verb-65`
**ID / path:** `verb-65.partizipVergangenheit`
**DE (read-only):** gekonnt
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kunne
**PROPOSED_DA:** Kunnet
**Problēma:** Infinitive used instead of participle
**Audita pamatojums:** gekonnt = kunnet, not infinitive kunne.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 198

**Audit ID:** DA-VERB-0198
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.imperfektIndikativ`
**DE (read-only):** er kroch
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han regnede
**PROPOSED_DA:** Han krøb
**Problēma:** Wrong verb meaning (rained vs crawled)
**Audita pamatojums:** kroch = krøb, not regnede.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 199

**Audit ID:** DA-VERB-0199
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.imperfektKonjunktiv`
**DE (read-only):** er kröche
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han regner
**PROPOSED_DA:** Han ville krybe
**Problēma:** Present tense used instead of subjunctive
**Audita pamatojums:** Han regner is present indicative; Konjunktiv needs ville krybe.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 200

**Audit ID:** DA-VERB-0200
**Verb/Card ID:** `verb-66`
**ID / path:** `verb-66.infinitiv`
**DE (read-only):** kriechen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det regner
**PROPOSED_DA:** At krybe
**Problēma:** Completely wrong verb meaning
**Audita pamatojums:** Det regner (it rains) has no relation to kriechen (crawl).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
