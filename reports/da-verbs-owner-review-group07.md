# DA–DE Verbs — OWNER review Group 07

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **301–350** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group07.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 301

**Audit ID:** DA-VERB-0301
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.partizipVergangenheit.lv`
**DE (read-only):** geronnen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Flød / koagulerede
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 302

**Audit ID:** DA-VERB-0302
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.praesens`
**DE (read-only):** er rinnt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han løber
**PROPOSED_DA:** Det flyder
**Problēma:** Wrong verb meaning (run vs flow)
**Audita pamatojums:** rinnen = flyde, not løbe.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 303

**Audit ID:** DA-VERB-0303
**Verb/Card ID:** `verb-96`
**ID / path:** `verb-96.imperfektIndikativ`
**DE (read-only):** er rief
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ringede han
**PROPOSED_DA:** Han råbte
**Problēma:** Wrong verb sense and inverted word order
**Audita pamatojums:** rief = råbte; ringede means phoned.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 304

**Audit ID:** DA-VERB-0304
**Verb/Card ID:** `verb-96`
**ID / path:** `verb-96.imperfektKonjunktiv`
**DE (read-only):** er riefe
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville ringe
**PROPOSED_DA:** Han ville råbe
**Problēma:** Wrong verb sense in subjunctive
**Audita pamatojums:** Konjunktiv of rufen should use råbe, not ringe.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 305

**Audit ID:** DA-VERB-0305
**Verb/Card ID:** `verb-96`
**ID / path:** `verb-96.infinitiv`
**DE (read-only):** rufen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Saut
**PROPOSED_DA:** At råbe
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Saut is Latvian; rufen = at råbe / at kalde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 306

**Audit ID:** DA-VERB-0306
**Verb/Card ID:** `verb-96`
**ID / path:** `verb-96.infinitiv.lv`
**DE (read-only):** rufen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Saut
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-62 (DE: heißen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 307

**Audit ID:** DA-VERB-0307
**Verb/Card ID:** `verb-96`
**ID / path:** `verb-96.partizipVergangenheit`
**DE (read-only):** gerufen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Saukts
**PROPOSED_DA:** Råbt
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Saukts is Latvian; gerufen = råbt / kaldt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 308

**Audit ID:** DA-VERB-0308
**Verb/Card ID:** `verb-96`
**ID / path:** `verb-96.praesens`
**DE (read-only):** er ruft
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ringer han
**PROPOSED_DA:** Han råber
**Problēma:** Wrong verb sense (phone call vs shout)
**Audita pamatojums:** rufen = råbe/kalde; ringe means telephone call.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 309

**Audit ID:** DA-VERB-0309
**Verb/Card ID:** `verb-97`
**ID / path:** `verb-97.praesens`
**DE (read-only):** er salzt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han saltede
**PROPOSED_DA:** Han salter
**Problēma:** Past tense used instead of present
**Audita pamatojums:** saltede is preterite; salzt = salter.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 310

**Audit ID:** DA-VERB-0310
**Verb/Card ID:** `verb-98`
**ID / path:** `verb-98.imperfektIndikativ`
**DE (read-only):** er soff
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han drak / drak
**PROPOSED_DA:** Han drak
**Problēma:** Duplicate variant in translation chain
**Audita pamatojums:** Han drak / drak repeats the same form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 311

**Audit ID:** DA-VERB-0311
**Verb/Card ID:** `verb-98`
**ID / path:** `verb-98.imperfektIndikativ.lv`
**DE (read-only):** er soff
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han drak / drak
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 312

**Audit ID:** DA-VERB-0312
**Verb/Card ID:** `verb-98`
**ID / path:** `verb-98.imperfektKonjunktiv`
**DE (read-only):** er söffe
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville drikke / drikke
**PROPOSED_DA:** Han ville drikke
**Problēma:** Duplicate variant in translation chain
**Audita pamatojums:** Han ville drikke / drikke repeats the same form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 313

**Audit ID:** DA-VERB-0313
**Verb/Card ID:** `verb-98`
**ID / path:** `verb-98.imperfektKonjunktiv.lv`
**DE (read-only):** er söffe
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville drikke / drikke
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 314

**Audit ID:** DA-VERB-0314
**Verb/Card ID:** `verb-98`
**ID / path:** `verb-98.infinitiv`
**DE (read-only):** saufen
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tørre / drikke
**PROPOSED_DA:** At drikke
**Problēma:** Multi-variant with wrong sense (dry vs drink)
**Audita pamatojums:** saufen = drink heavily; tørre (dry) is incorrect.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 315

**Audit ID:** DA-VERB-0315
**Verb/Card ID:** `verb-98`
**ID / path:** `verb-98.infinitiv.lv`
**DE (read-only):** saufen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tørre / drikke
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 316

**Audit ID:** DA-VERB-0316
**Verb/Card ID:** `verb-98`
**ID / path:** `verb-98.partizipVergangenheit`
**DE (read-only):** gesoffen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Dzerts
**PROPOSED_DA:** Drukket
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Dzerts is Latvian; gesoffen = drukket.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 317

**Audit ID:** DA-VERB-0317
**Verb/Card ID:** `verb-100`
**ID / path:** `verb-100.partizipVergangenheit`
**DE (read-only):** geschaffen
**Severity:** MEDIUM
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Oprettet
**PROPOSED_DA:** Skabt
**Problēma:** Participle nuance mismatch: oprettet vs skabt.
**Audita pamatojums:** geschaffen means created/made; 'Oprettet' suggests institutional establishment rather than general creation.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 318

**Audit ID:** DA-VERB-0318
**Verb/Card ID:** `verb-101`
**ID / path:** `verb-101.imperfektIndikativ`
**DE (read-only):** schallte vai scholl
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lød
**PROPOSED_DA:** Det lød
**Problēma:** Bare past form without subject.
**Audita pamatojums:** Missing subject; German uses impersonal 'es'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 319

**Audit ID:** DA-VERB-0319
**Verb/Card ID:** `verb-101`
**ID / path:** `verb-101.imperfektKonjunktiv`
**DE (read-only):** schallte vai scholl
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lød
**PROPOSED_DA:** Det ville lyde
**Problēma:** Subjunctive field shows indicative past.
**Audita pamatojums:** Copied indicative 'Lød'; Konjunktiv II needs auxiliary + infinitive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 320

**Audit ID:** DA-VERB-0320
**Verb/Card ID:** `verb-101`
**ID / path:** `verb-101.infinitiv.lv`
**DE (read-only):** schallen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At lyde
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-28 (DE: klingen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 321

**Audit ID:** DA-VERB-0321
**Verb/Card ID:** `verb-101`
**ID / path:** `verb-101.partizipVergangenheit`
**DE (read-only):** geschallt
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lød
**PROPOSED_DA:** Lydt
**Problēma:** Past tense used instead of participle.
**Audita pamatojums:** 'Lød' is past tense, not past participle of lyde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 322

**Audit ID:** DA-VERB-0322
**Verb/Card ID:** `verb-101`
**ID / path:** `verb-101.praesens`
**DE (read-only):** es schallt
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tas skan
**PROPOSED_DA:** Det lyder
**Problēma:** Gibberish/corruption instead of Danish present form.
**Audita pamatojums:** 'Tas skan' is not Danish. German 'es schallt' = it resounds/sounds.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 323

**Audit ID:** DA-VERB-0323
**Verb/Card ID:** `verb-102`
**ID / path:** `verb-102.imperfektIndikativ.lv`
**DE (read-only):** er schied
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han blev skilt / skilt
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 324

**Audit ID:** DA-VERB-0324
**Verb/Card ID:** `verb-102`
**ID / path:** `verb-102.imperfektKonjunktiv.lv`
**DE (read-only):** er schiede
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville skilles / skilles
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 325

**Audit ID:** DA-VERB-0325
**Verb/Card ID:** `verb-102`
**ID / path:** `verb-102.infinitiv`
**DE (read-only):** scheiden
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skilsmisse/opbrud
**PROPOSED_DA:** At skilles
**Problēma:** Infinitiv field uses nouns instead of verb.
**Audita pamatojums:** Noun phrases 'Skilsmisse/opbrud' are not infinitive verb forms.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 326

**Audit ID:** DA-VERB-0326
**Verb/Card ID:** `verb-102`
**ID / path:** `verb-102.partizipVergangenheit`
**DE (read-only):** geschieden (er hat / er ist)
**Severity:** MEDIUM
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Separeret/skilt
**PROPOSED_DA:** Skilt
**Problēma:** Multi-variant adjective instead of single participle.
**Audita pamatojums:** Partizip II should be a participle, not adjective list with slash variants.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 327

**Audit ID:** DA-VERB-0327
**Verb/Card ID:** `verb-102`
**ID / path:** `verb-102.praesens.lv`
**DE (read-only):** er scheidet
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han er ved at skilles / skilles
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 328

**Audit ID:** DA-VERB-0328
**Verb/Card ID:** `verb-103`
**ID / path:** `verb-103.imperfektIndikativ.lv`
**DE (read-only):** er schien
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han lyste / syntes
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 329

**Audit ID:** DA-VERB-0329
**Verb/Card ID:** `verb-103`
**ID / path:** `verb-103.imperfektKonjunktiv.lv`
**DE (read-only):** er schiene
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville skinne / synes
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 330

**Audit ID:** DA-VERB-0330
**Verb/Card ID:** `verb-103`
**ID / path:** `verb-103.infinitiv.lv`
**DE (read-only):** scheinen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skinne / fremstå
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 331

**Audit ID:** DA-VERB-0331
**Verb/Card ID:** `verb-103`
**ID / path:** `verb-103.partizipVergangenheit`
**DE (read-only):** geschienen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lyste / syntes
**PROPOSED_DA:** Skinnet / syntes
**Problēma:** Past tense instead of past participle.
**Audita pamatojums:** Field shows finite past forms, not participles.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 332

**Audit ID:** DA-VERB-0332
**Verb/Card ID:** `verb-103`
**ID / path:** `verb-103.partizipVergangenheit.lv`
**DE (read-only):** geschienen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lyste / syntes
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 333

**Audit ID:** DA-VERB-0333
**Verb/Card ID:** `verb-103`
**ID / path:** `verb-103.praesens.lv`
**DE (read-only):** er scheint
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han skinner / synes
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 334

**Audit ID:** DA-VERB-0334
**Verb/Card ID:** `verb-104`
**ID / path:** `verb-104.imperfektIndikativ`
**DE (read-only):** er schalt
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han spærrede
**PROPOSED_DA:** Han skældte ud
**Problēma:** Wrong verb entirely.
**Audita pamatojums:** 'Han spærrede' means 'he blocked', not scolded.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 335

**Audit ID:** DA-VERB-0335
**Verb/Card ID:** `verb-104`
**ID / path:** `verb-104.imperfektKonjunktiv`
**DE (read-only):** er schölte / er schälte
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han barberer sig
**PROPOSED_DA:** Han ville skælde ud
**Problēma:** Completely wrong translation.
**Audita pamatojums:** 'Han barberer sig' means 'he shaves' — unrelated to schelten.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 336

**Audit ID:** DA-VERB-0336
**Verb/Card ID:** `verb-104`
**ID / path:** `verb-104.infinitiv`
**DE (read-only):** schelten
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bart
**PROPOSED_DA:** At skælde ud
**Problēma:** Completely wrong translation — corruption.
**Audita pamatojums:** 'Bart' is unrelated (German/Danish 'beard'). schelten = scold/rebuke.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 337

**Audit ID:** DA-VERB-0337
**Verb/Card ID:** `verb-104`
**ID / path:** `verb-104.partizipVergangenheit`
**DE (read-only):** gescholten
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skæg
**PROPOSED_DA:** Skældt ud
**Problēma:** Wrong word — corruption.
**Audita pamatojums:** 'Skæg' means beard, not gescholten.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 338

**Audit ID:** DA-VERB-0338
**Verb/Card ID:** `verb-104`
**ID / path:** `verb-104.praesens`
**DE (read-only):** er schilt
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skælder han ud
**PROPOSED_DA:** Han skælder ud
**Problēma:** Inverted word order.
**Audita pamatojums:** Danish typically uses subject-verb order for er … forms.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 339

**Audit ID:** DA-VERB-0339
**Verb/Card ID:** `verb-105`
**ID / path:** `verb-105.imperfektIndikativ`
**DE (read-only):** schor vai scherte
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cirpa
**PROPOSED_DA:** Han barberede sig
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Cirpa' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 340

**Audit ID:** DA-VERB-0340
**Verb/Card ID:** `verb-105`
**ID / path:** `verb-105.imperfektKonjunktiv`
**DE (read-only):** schor vai scherte
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cirpa
**PROPOSED_DA:** Han ville barbere sig
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Cirpa' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 341

**Audit ID:** DA-VERB-0341
**Verb/Card ID:** `verb-105`
**ID / path:** `verb-105.infinitiv`
**DE (read-only):** scheren
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cirpt
**PROPOSED_DA:** At barbere sig / at klippe
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Cirpt' is not Danish. scheren = shave/shear.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 342

**Audit ID:** DA-VERB-0342
**Verb/Card ID:** `verb-105`
**ID / path:** `verb-105.partizipVergangenheit`
**DE (read-only):** geschoren vai geschert
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Apcirpts
**PROPOSED_DA:** Barberet
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Apcirpts' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 343

**Audit ID:** DA-VERB-0343
**Verb/Card ID:** `verb-105`
**ID / path:** `verb-105.praesens`
**DE (read-only):** er schert
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han skærer
**PROPOSED_DA:** Han barberer sig
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han skærer' means cut; scheren (reflexive) = shave.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 344

**Audit ID:** DA-VERB-0344
**Verb/Card ID:** `verb-106`
**ID / path:** `verb-106.infinitiv`
**DE (read-only):** schieben
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Stump
**PROPOSED_DA:** At skubbe
**Problēma:** Wrong word — corruption.
**Audita pamatojums:** 'Stump' means stump/stub, not push.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 345

**Audit ID:** DA-VERB-0345
**Verb/Card ID:** `verb-106`
**ID / path:** `verb-106.partizipVergangenheit`
**DE (read-only):** geschoben
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Stumper
**PROPOSED_DA:** Skubbet
**Problēma:** Wrong word — corruption.
**Audita pamatojums:** 'Stumper' is unrelated to geschoben.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 346

**Audit ID:** DA-VERB-0346
**Verb/Card ID:** `verb-107`
**ID / path:** `verb-107.partizipVergangenheit`
**DE (read-only):** geschossen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skud
**PROPOSED_DA:** Skudt
**Problēma:** Noun instead of past participle.
**Audita pamatojums:** 'Skud' is noun (shot); participle of skyde is skudt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 347

**Audit ID:** DA-VERB-0347
**Verb/Card ID:** `verb-108`
**ID / path:** `verb-108.imperfektIndikativ`
**DE (read-only):** schindete
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Plaget
**PROPOSED_DA:** Han plagede
**Problēma:** Bare form without subject.
**Audita pamatojums:** Missing subject; shows participle/adjective only.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 348

**Audit ID:** DA-VERB-0348
**Verb/Card ID:** `verb-108`
**ID / path:** `verb-108.imperfektKonjunktiv`
**DE (read-only):** schindete
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Plaget
**PROPOSED_DA:** Han ville pine
**Problēma:** Subjunctive field shows indicative form.
**Audita pamatojums:** Copied indicative participle; subjunctive needs ville + infinitive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 349

**Audit ID:** DA-VERB-0349
**Verb/Card ID:** `verb-109`
**ID / path:** `verb-109.infinitiv.lv`
**DE (read-only):** schlafen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At sove
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-73 (DE: liegen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 350

**Audit ID:** DA-VERB-0350
**Verb/Card ID:** `verb-109`
**ID / path:** `verb-109.partizipVergangenheit`
**DE (read-only):** geschlafen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sov
**PROPOSED_DA:** Sovet
**Problēma:** Past tense instead of participle.
**Audita pamatojums:** 'Sov' is past tense; participle of sove is sovet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
