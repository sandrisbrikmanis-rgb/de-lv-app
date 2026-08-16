# DA–DE Verbs — OWNER review Group 06

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **251–300** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group06.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 251

**Audit ID:** DA-VERB-0251
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.infinitiv`
**DE (read-only):** müssen
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At have brug for
**PROPOSED_DA:** At skulle / at måtte
**Problēma:** Semantic mismatch (need vs must)
**Audita pamatojums:** müssen = must (skulle/måtte), not have need for.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 252

**Audit ID:** DA-VERB-0252
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.partizipVergangenheit`
**DE (read-only):** gemusst
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Nødvendige
**PROPOSED_DA:** Måttet
**Problēma:** Adjective used instead of past participle
**Audita pamatojums:** Nødvendige is an adjective; gemusst = måttet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 253

**Audit ID:** DA-VERB-0253
**Verb/Card ID:** `verb-83`
**ID / path:** `verb-83.imperfektIndikativ`
**DE (read-only):** er nannte
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ringede han
**PROPOSED_DA:** Han navngav
**Problēma:** Wrong verb meaning and inverted word order
**Audita pamatojums:** Ringede (rang/called by phone) is not nennen; should be navngav.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 254

**Audit ID:** DA-VERB-0254
**Verb/Card ID:** `verb-83`
**ID / path:** `verb-83.infinitiv`
**DE (read-only):** nennen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Nosaukt
**PROPOSED_DA:** At navngive
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Nosaukt is Latvian; nennen = at navngive / at hedde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 255

**Audit ID:** DA-VERB-0255
**Verb/Card ID:** `verb-83`
**ID / path:** `verb-83.partizipVergangenheit`
**DE (read-only):** genannt
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Nosaukts
**PROPOSED_DA:** Navngivet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Nosaukts is Latvian; genannt = navngivet / kaldt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 256

**Audit ID:** DA-VERB-0256
**Verb/Card ID:** `verb-83`
**ID / path:** `verb-83.praesens`
**DE (read-only):** er nennt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han navngav
**PROPOSED_DA:** Han navngiver
**Problēma:** Past tense used instead of present
**Audita pamatojums:** navngav is preterite; nennt = navngiver.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 257

**Audit ID:** DA-VERB-0257
**Verb/Card ID:** `verb-84`
**ID / path:** `verb-84.imperfektIndikativ`
**DE (read-only):** er pfiff
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fløjtede han
**PROPOSED_DA:** Han fløjtede
**Problēma:** Inverted word order
**Audita pamatojums:** Danish person forms normally use Han fløjtede.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 258

**Audit ID:** DA-VERB-0258
**Verb/Card ID:** `verb-84`
**ID / path:** `verb-84.infinitiv`
**DE (read-only):** pfeifen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Svilpot
**PROPOSED_DA:** At fløjte
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Svilpot is Latvian; pfeifen = at fløjte.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 259

**Audit ID:** DA-VERB-0259
**Verb/Card ID:** `verb-84`
**ID / path:** `verb-84.partizipVergangenheit`
**DE (read-only):** gepfiffen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Svilpots
**PROPOSED_DA:** Fløjtet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Svilpots is Latvian; gepfiffen = fløjtet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 260

**Audit ID:** DA-VERB-0260
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.imperfektIndikativ`
**DE (read-only):** pflegte vai pflog
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kopa
**PROPOSED_DA:** Han plejede
**Problēma:** Latvian remnant in past tense
**Audita pamatojums:** Kopa is Latvian, not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 261

**Audit ID:** DA-VERB-0261
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.imperfektKonjunktiv`
**DE (read-only):** pflegte vai pflog
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kopa
**PROPOSED_DA:** Han ville pleje
**Problēma:** Latvian remnant in subjunctive
**Audita pamatojums:** Kopa is Latvian, not Danish subjunctive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 262

**Audit ID:** DA-VERB-0262
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.infinitiv`
**DE (read-only):** pflegen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kopt
**PROPOSED_DA:** At pleje
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Kopt is Latvian; pflegen = at pleje / at vænne sig til.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 263

**Audit ID:** DA-VERB-0263
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.partizipVergangenheit`
**DE (read-only):** gepflegt vai gepflogen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kopter
**PROPOSED_DA:** Plejet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Kopter is Latvian; gepflegt = plejet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 264

**Audit ID:** DA-VERB-0264
**Verb/Card ID:** `verb-85`
**ID / path:** `verb-85.praesens`
**DE (read-only):** er pflegt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bekymrer sig
**PROPOSED_DA:** Han plejer
**Problēma:** Semantic mismatch (worry vs care for)
**Audita pamatojums:** pflegen = pleje/tend; bekymrer sig means worry.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 265

**Audit ID:** DA-VERB-0265
**Verb/Card ID:** `verb-86`
**ID / path:** `verb-86.partizipVergangenheit`
**DE (read-only):** gepriesen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Rost
**PROPOSED_DA:** Roset
**Problēma:** Wrong word (rust vs praised)
**Audita pamatojums:** Rost means rust; gepriesen = roset / lovprist.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 266

**Audit ID:** DA-VERB-0266
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.imperfektIndikativ`
**DE (read-only):** er quoll
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han modnede
**PROPOSED_DA:** Det svulmede op
**Problēma:** Wrong verb meaning (ripened vs swelled)
**Audita pamatojums:** quoll = svulmede, not modnede (ripened).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 267

**Audit ID:** DA-VERB-0267
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.imperfektKonjunktiv`
**DE (read-only):** er quölle
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han tyk
**PROPOSED_DA:** Det ville svulme op
**Problēma:** Garbled/incomplete subjunctive form
**Audita pamatojums:** Han tyk is not a valid Danish subjunctive phrase.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 268

**Audit ID:** DA-VERB-0268
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.infinitiv`
**DE (read-only):** quellen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bryst
**PROPOSED_DA:** At svulme op
**Problēma:** Noun used instead of verb; wrong meaning
**Audita pamatojums:** Bryst (chest/breast) does not translate quellen (swell/spring).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 269

**Audit ID:** DA-VERB-0269
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.partizipVergangenheit`
**DE (read-only):** gequollen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Uzbredis
**PROPOSED_DA:** Svulmet op
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Uzbredis is Latvian; gequollen = svulmet op.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 270

**Audit ID:** DA-VERB-0270
**Verb/Card ID:** `verb-87`
**ID / path:** `verb-87.praesens`
**DE (read-only):** er quillt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bliver tyk
**PROPOSED_DA:** Det svulmer op
**Problēma:** Awkward/wrong rendering of swell verb
**Audita pamatojums:** quellen = svulme op / vælde frem, not bliver tyk (become thick).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 271

**Audit ID:** DA-VERB-0271
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.imperfektIndikativ`
**DE (read-only):** er riet
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han foreslog / foreslog
**PROPOSED_DA:** Han rådede
**Problēma:** Duplicate variant in translation chain
**Audita pamatojums:** foreslog / foreslog repeats the same form uselessly.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 272

**Audit ID:** DA-VERB-0272
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.imperfektIndikativ.lv`
**DE (read-only):** er riet
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han foreslog / foreslog
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 273

**Audit ID:** DA-VERB-0273
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.imperfektKonjunktiv`
**DE (read-only):** er riete
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville foreslå / nævne
**PROPOSED_DA:** Han ville råde
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one subjunctive form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 274

**Audit ID:** DA-VERB-0274
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.imperfektKonjunktiv.lv`
**DE (read-only):** er riete
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville foreslå / nævne
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 275

**Audit ID:** DA-VERB-0275
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.infinitiv`
**DE (read-only):** raten
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Foreslå/omtale
**PROPOSED_DA:** At råde
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one infinitive form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 276

**Audit ID:** DA-VERB-0276
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.praesens`
**DE (read-only):** er rät
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han anbefaler / min
**PROPOSED_DA:** Han råder
**Problēma:** Truncated/garbled variant in chain
**Audita pamatojums:** min is an incomplete fragment, not a valid verb form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 277

**Audit ID:** DA-VERB-0277
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.praesens.lv`
**DE (read-only):** er rät
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han anbefaler / min
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 278

**Audit ID:** DA-VERB-0278
**Verb/Card ID:** `verb-89`
**ID / path:** `verb-89.imperfektIndikativ`
**DE (read-only):** er rieb
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han gnider
**PROPOSED_DA:** Han gned
**Problēma:** Present tense used instead of past
**Audita pamatojums:** gnider is present; rieb = gned.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 279

**Audit ID:** DA-VERB-0279
**Verb/Card ID:** `verb-89`
**ID / path:** `verb-89.infinitiv`
**DE (read-only):** reiben
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Berzt
**PROPOSED_DA:** At gnide
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Berzt is Latvian; reiben = at gnide.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 280

**Audit ID:** DA-VERB-0280
**Verb/Card ID:** `verb-89`
**ID / path:** `verb-89.partizipVergangenheit`
**DE (read-only):** gerieben
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Berzts
**PROPOSED_DA:** Gnidet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Berzts is Latvian; gerieben = gnidet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 281

**Audit ID:** DA-VERB-0281
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.imperfektIndikativ`
**DE (read-only):** er riss
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Knækkede han
**PROPOSED_DA:** Han rev
**Problēma:** Wrong verb meaning (broke vs tore)
**Audita pamatojums:** riss = rev (tore); knækkede means broke/snapped.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 282

**Audit ID:** DA-VERB-0282
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.imperfektKonjunktiv`
**DE (read-only):** er risse
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Knækkede han
**PROPOSED_DA:** Han ville rive
**Problēma:** Indicative past used instead of subjunctive
**Audita pamatojums:** Knækkede han is past indicative, not Konjunktiv of reißen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 283

**Audit ID:** DA-VERB-0283
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.infinitiv`
**DE (read-only):** reißen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Raut
**PROPOSED_DA:** At rive
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Raut is Latvian; reißen = at rive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 284

**Audit ID:** DA-VERB-0284
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.partizipVergangenheit`
**DE (read-only):** gerissen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Rauts
**PROPOSED_DA:** Revet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Rauts is Latvian; gerissen = revet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 285

**Audit ID:** DA-VERB-0285
**Verb/Card ID:** `verb-90`
**ID / path:** `verb-90.praesens`
**DE (read-only):** er reißt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Snapper han
**PROPOSED_DA:** Han river
**Problēma:** Inverted word order and wrong verb
**Audita pamatojums:** Snapper (snaps) with verb-first order does not match reißen (rive).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 286

**Audit ID:** DA-VERB-0286
**Verb/Card ID:** `verb-91`
**ID / path:** `verb-91.partizipVergangenheit`
**DE (read-only):** geritten (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Red
**PROPOSED_DA:** Ridt
**Problēma:** Simple past used instead of past participle
**Audita pamatojums:** Red is preterite; geritten (sein) = er er ridt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 287

**Audit ID:** DA-VERB-0287
**Verb/Card ID:** `verb-92`
**ID / path:** `verb-92.infinitiv`
**DE (read-only):** rennen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skriet
**PROPOSED_DA:** At løbe
**Problēma:** Latvian remnant; duplicate of verb-69
**Audita pamatojums:** Skriet is Latvian and duplicates laufen infinitiv.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 288

**Audit ID:** DA-VERB-0288
**Verb/Card ID:** `verb-92`
**ID / path:** `verb-92.infinitiv.lv`
**DE (read-only):** rennen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skriet
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-69 (DE: laufen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 289

**Audit ID:** DA-VERB-0289
**Verb/Card ID:** `verb-92`
**ID / path:** `verb-92.partizipVergangenheit`
**DE (read-only):** gerannt
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Løb
**PROPOSED_DA:** Løbet
**Problēma:** Simple past used instead of past participle
**Audita pamatojums:** Løb is preterite; gerannt = løbet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 290

**Audit ID:** DA-VERB-0290
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.imperfektIndikativ`
**DE (read-only):** er roch
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han synger
**PROPOSED_DA:** Han lugtede
**Problēma:** Wrong verb meaning (sing vs smell)
**Audita pamatojums:** roch = lugtede, not synger (sings).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 291

**Audit ID:** DA-VERB-0291
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.imperfektKonjunktiv`
**DE (read-only):** er röche
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han havn
**PROPOSED_DA:** Han ville lugte
**Problēma:** Garbled/incomplete subjunctive form
**Audita pamatojums:** Han havn is truncated nonsense, not a valid subjunctive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 292

**Audit ID:** DA-VERB-0292
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.infinitiv`
**DE (read-only):** riechen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ost
**PROPOSED_DA:** At lugte
**Problēma:** Noun used instead of verb
**Audita pamatojums:** Ost (cheese) does not translate riechen (smell).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 293

**Audit ID:** DA-VERB-0293
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.partizipVergangenheit`
**DE (read-only):** gerochen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Osts
**PROPOSED_DA:** Lugtet
**Problēma:** Noun derivative instead of participle
**Audita pamatojums:** Osts relates to cheese; gerochen = lugtet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 294

**Audit ID:** DA-VERB-0294
**Verb/Card ID:** `verb-94`
**ID / path:** `verb-94.infinitiv`
**DE (read-only):** ringen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lauzties
**PROPOSED_DA:** At kæmpe
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Lauzties is Latvian; ringen (wrestle/struggle) = at kæmpe.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 295

**Audit ID:** DA-VERB-0295
**Verb/Card ID:** `verb-94`
**ID / path:** `verb-94.partizipVergangenheit`
**DE (read-only):** gerungen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Laucies
**PROPOSED_DA:** Kæmpet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Laucies is Latvian; gerungen = kæmpet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 296

**Audit ID:** DA-VERB-0296
**Verb/Card ID:** `verb-94`
**ID / path:** `verb-94.praesens`
**DE (read-only):** er ringt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han knækker
**PROPOSED_DA:** Han kæmper
**Problēma:** Wrong verb meaning (break vs wrestle)
**Audita pamatojums:** ringen = kæmpe, not knækker (breaks).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 297

**Audit ID:** DA-VERB-0297
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.imperfektIndikativ`
**DE (read-only):** er rann
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han løb
**PROPOSED_DA:** Det flød
**Problēma:** Wrong verb meaning (ran vs flowed)
**Audita pamatojums:** rann = flød, not løb.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 298

**Audit ID:** DA-VERB-0298
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.imperfektKonjunktiv`
**DE (read-only):** er ränne / er rönne
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville løbe
**PROPOSED_DA:** Det ville flyde
**Problēma:** Wrong verb meaning in subjunctive
**Audita pamatojums:** Konjunktiv of rinnen should use flyde, not løbe.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 299

**Audit ID:** DA-VERB-0299
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.infinitiv.lv`
**DE (read-only):** rinnen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At flyde
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-53 (DE: fließen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 300

**Audit ID:** DA-VERB-0300
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.partizipVergangenheit`
**DE (read-only):** geronnen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Flød / koagulerede
**PROPOSED_DA:** Størknet
**Problēma:** Multi-variant translation chain
**Audita pamatojums:** Verb card should use one participle form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
