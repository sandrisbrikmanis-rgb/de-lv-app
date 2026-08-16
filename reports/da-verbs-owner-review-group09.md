# DA–DE Verbs — OWNER review Group 09

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **401–450** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group09.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 401

**Audit ID:** DA-VERB-0401
**Verb/Card ID:** `verb-129`
**ID / path:** `verb-129.imperfektIndikativ`
**DE (read-only):** war
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bija
**PROPOSED_DA:** Han var
**Problēma:** Latvian remnant in Danish field.
**Audita pamatojums:** 'Bija' is Latvian for 'was', not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 402

**Audit ID:** DA-VERB-0402
**Verb/Card ID:** `verb-129`
**ID / path:** `verb-129.imperfektKonjunktiv`
**DE (read-only):** war
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bija
**PROPOSED_DA:** Han ville være
**Problēma:** Latvian remnant; wrong subjunctive form.
**Audita pamatojums:** 'Bija' is Latvian; Konjunktiv II of sein needs ville være.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 403

**Audit ID:** DA-VERB-0403
**Verb/Card ID:** `verb-129`
**ID / path:** `verb-129.infinitiv.lv`
**DE (read-only):** sein
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At være
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-60 (DE: haben)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 404

**Audit ID:** DA-VERB-0404
**Verb/Card ID:** `verb-129`
**ID / path:** `verb-129.partizipVergangenheit`
**DE (read-only):** gewesen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bijis
**PROPOSED_DA:** Været
**Problēma:** Latvian remnant in participle field.
**Audita pamatojums:** 'Bijis' is Latvian participle, not Danish gewesen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 405

**Audit ID:** DA-VERB-0405
**Verb/Card ID:** `verb-131`
**ID / path:** `verb-131.imperfektIndikativ`
**DE (read-only):** sott vai siedete
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kogt
**PROPOSED_DA:** Det kogte
**Problēma:** Participle in indicative field.
**Audita pamatojums:** Bare 'Kogt' is participle, not past indicative with subject.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 406

**Audit ID:** DA-VERB-0406
**Verb/Card ID:** `verb-131`
**ID / path:** `verb-131.imperfektKonjunktiv`
**DE (read-only):** sott vai siedete
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kogt
**PROPOSED_DA:** Det ville koge
**Problēma:** Subjunctive field shows participle.
**Audita pamatojums:** Copied participle; subjunctive needs ville + infinitive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 407

**Audit ID:** DA-VERB-0407
**Verb/Card ID:** `verb-131`
**ID / path:** `verb-131.partizipVergangenheit`
**DE (read-only):** gesotten vai gesiedet
**Severity:** MEDIUM
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kogt
**PROPOSED_DA:** Kogt
**Problēma:** Only correct form while others broken.
**Audita pamatojums:** Form OK as participle but inconsistent with other fields.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 408

**Audit ID:** DA-VERB-0408
**Verb/Card ID:** `verb-131`
**ID / path:** `verb-131.praesens`
**DE (read-only):** er siedet
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han laver mad
**PROPOSED_DA:** Det koger
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han laver mad' = cooks food; sieden = boil (liquid).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 409

**Audit ID:** DA-VERB-0409
**Verb/Card ID:** `verb-133`
**ID / path:** `verb-133.imperfektIndikativ`
**DE (read-only):** er sank
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han fandt på
**PROPOSED_DA:** Han sank
**Problēma:** Wrong verb entirely.
**Audita pamatojums:** 'Han fandt på' means he came up with; sank = sank.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 410

**Audit ID:** DA-VERB-0410
**Verb/Card ID:** `verb-133`
**ID / path:** `verb-133.infinitiv`
**DE (read-only):** sinken
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Grimt
**PROPOSED_DA:** At synke
**Problēma:** Wrong word — corruption.
**Audita pamatojums:** 'Grimt' means ugly; sinken = sink.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 411

**Audit ID:** DA-VERB-0411
**Verb/Card ID:** `verb-133`
**ID / path:** `verb-133.partizipVergangenheit`
**DE (read-only):** gesunken (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Grimis
**PROPOSED_DA:** Synket
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Grimis' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 412

**Audit ID:** DA-VERB-0412
**Verb/Card ID:** `verb-134`
**ID / path:** `verb-134.imperfektIndikativ`
**DE (read-only):** er sann
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Undrede han sig
**PROPOSED_DA:** Han grundede over
**Problēma:** Wrong verb sense.
**Audita pamatojums:** undrede sig ≠ sann (pondered).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 413

**Audit ID:** DA-VERB-0413
**Verb/Card ID:** `verb-134`
**ID / path:** `verb-134.infinitiv`
**DE (read-only):** sinnen
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At undre sig
**PROPOSED_DA:** At grunde over
**Problēma:** Wrong verb sense.
**Audita pamatojums:** sinnen = ponder/reflect; 'At undre sig' = wonder/be surprised.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 414

**Audit ID:** DA-VERB-0414
**Verb/Card ID:** `verb-134`
**ID / path:** `verb-134.partizipVergangenheit`
**DE (read-only):** gesonnen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sindede
**PROPOSED_DA:** Grundet over
**Problēma:** Non-standard/wrong participle.
**Audita pamatojums:** 'Sindede' is not standard for gesonnen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 415

**Audit ID:** DA-VERB-0415
**Verb/Card ID:** `verb-134`
**ID / path:** `verb-134.praesens`
**DE (read-only):** er sinnt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Undrer han sig
**PROPOSED_DA:** Han grunder over
**Problēma:** Wrong verb sense.
**Audita pamatojums:** undre sig ≠ sinnt (ponders).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 416

**Audit ID:** DA-VERB-0416
**Verb/Card ID:** `verb-135`
**ID / path:** `verb-135.partizipVergangenheit`
**DE (read-only):** gesessen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Satte sig ned
**PROPOSED_DA:** Siddet
**Problēma:** Wrong aspect/meaning for static sit.
**Audita pamatojums:** 'Satte sig ned' means sat down (movement); gesessen = been sitting.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 417

**Audit ID:** DA-VERB-0417
**Verb/Card ID:** `verb-136`
**ID / path:** `verb-136.imperfektIndikativ`
**DE (read-only):** sollte
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Burde have
**PROPOSED_DA:** Han skulle
**Problēma:** Incomplete translation.
**Audita pamatojums:** 'Burde have' is incomplete fragment.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 418

**Audit ID:** DA-VERB-0418
**Verb/Card ID:** `verb-136`
**ID / path:** `verb-136.imperfektKonjunktiv`
**DE (read-only):** sollte
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Burde have
**PROPOSED_DA:** Han skulle
**Problēma:** Incomplete translation.
**Audita pamatojums:** Same incomplete fragment as indicative.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 419

**Audit ID:** DA-VERB-0419
**Verb/Card ID:** `verb-136`
**ID / path:** `verb-136.infinitiv`
**DE (read-only):** sollen
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Behøver/være forpligtet
**PROPOSED_DA:** At skulle / at burde
**Problēma:** Wrong modal meaning.
**Audita pamatojums:** sollen = should/ought to; 'Behøver' = need/require.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 420

**Audit ID:** DA-VERB-0420
**Verb/Card ID:** `verb-136`
**ID / path:** `verb-136.partizipVergangenheit`
**DE (read-only):** gesollt
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Nødvendige
**PROPOSED_DA:** Skullet
**Problēma:** Adjective instead of participle.
**Audita pamatojums:** 'Nødvendige' is adjective (necessary), not participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 421

**Audit ID:** DA-VERB-0421
**Verb/Card ID:** `verb-136`
**ID / path:** `verb-136.praesens`
**DE (read-only):** er soll
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han har brug for
**PROPOSED_DA:** Han skal
**Problēma:** Wrong modal meaning.
**Audita pamatojums:** 'Han har brug for' = needs; er soll = he should.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 422

**Audit ID:** DA-VERB-0422
**Verb/Card ID:** `verb-137`
**ID / path:** `verb-137.partizipVergangenheit`
**DE (read-only):** gespien
**Severity:** MEDIUM
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Spyttede ud
**PROPOSED_DA:** Spyttet
**Problēma:** Past phrase instead of participle.
**Audita pamatojums:** 'Spyttede ud' is past phrase; participle is spyttet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 423

**Audit ID:** DA-VERB-0423
**Verb/Card ID:** `verb-138`
**ID / path:** `verb-138.imperfektIndikativ`
**DE (read-only):** er spann
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han snurrede
**PROPOSED_DA:** Han spandt
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han snurrede' = whirled; spann = spun.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 424

**Audit ID:** DA-VERB-0424
**Verb/Card ID:** `verb-138`
**ID / path:** `verb-138.infinitiv`
**DE (read-only):** spinnen
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Spin
**PROPOSED_DA:** At spinde
**Problēma:** Missing Danish infinitive form.
**Audita pamatojums:** 'Spin' is English/noun; Danish infinitive needed.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 425

**Audit ID:** DA-VERB-0425
**Verb/Card ID:** `verb-138`
**ID / path:** `verb-138.praesens`
**DE (read-only):** er spinnt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han vrider sig
**PROPOSED_DA:** Han spinde
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han vrider sig' = writhes; spinnt = spins (thread).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 426

**Audit ID:** DA-VERB-0426
**Verb/Card ID:** `verb-139`
**ID / path:** `verb-139.imperfektIndikativ`
**DE (read-only):** spliss
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Savienoja
**PROPOSED_DA:** Han splejsede
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Savienoja' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 427

**Audit ID:** DA-VERB-0427
**Verb/Card ID:** `verb-139`
**ID / path:** `verb-139.imperfektKonjunktiv`
**DE (read-only):** spliss
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Savienoja
**PROPOSED_DA:** Han ville splejse
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Savienoja' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 428

**Audit ID:** DA-VERB-0428
**Verb/Card ID:** `verb-139`
**ID / path:** `verb-139.infinitiv`
**DE (read-only):** spleißen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Savienot
**PROPOSED_DA:** At splejse
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Savienot' is not Danish; spleißen = splice (cables/fibers).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 429

**Audit ID:** DA-VERB-0429
**Verb/Card ID:** `verb-139`
**ID / path:** `verb-139.partizipVergangenheit`
**DE (read-only):** gesplissen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Savienoter
**PROPOSED_DA:** Splejset
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Savienoter' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 430

**Audit ID:** DA-VERB-0430
**Verb/Card ID:** `verb-141`
**ID / path:** `verb-141.imperfektIndikativ`
**DE (read-only):** er spross
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han trivedes
**PROPOSED_DA:** Det spirede
**Problēma:** Wrong verb sense.
**Audita pamatojums:** trivedes ≠ spross (sprouted).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 431

**Audit ID:** DA-VERB-0431
**Verb/Card ID:** `verb-141`
**ID / path:** `verb-141.imperfektKonjunktiv`
**DE (read-only):** er sprösse
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han hylde
**PROPOSED_DA:** Det ville spire
**Problēma:** Gibberish/wrong word.
**Audita pamatojums:** 'Han hylde' means shelf; not subjunctive sprout.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 432

**Audit ID:** DA-VERB-0432
**Verb/Card ID:** `verb-141`
**ID / path:** `verb-141.infinitiv`
**DE (read-only):** sprießen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Plaukt
**PROPOSED_DA:** At spire
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Plaukt' is not Danish; sprießen = sprout/shoot.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 433

**Audit ID:** DA-VERB-0433
**Verb/Card ID:** `verb-141`
**ID / path:** `verb-141.partizipVergangenheit`
**DE (read-only):** gesprossen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Plaucis
**PROPOSED_DA:** Spiret
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Plaucis' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 434

**Audit ID:** DA-VERB-0434
**Verb/Card ID:** `verb-141`
**ID / path:** `verb-141.praesens`
**DE (read-only):** er sprießt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han trives
**PROPOSED_DA:** Det spirer
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han trives' = thrives; sprießt = sprouts.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 435

**Audit ID:** DA-VERB-0435
**Verb/Card ID:** `verb-142`
**ID / path:** `verb-142.partizipVergangenheit`
**DE (read-only):** gesprungen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Linse
**PROPOSED_DA:** Hoppet
**Problēma:** Completely wrong word — corruption.
**Audita pamatojums:** 'Linse' means lentil; gesprungen = jumped.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 436

**Audit ID:** DA-VERB-0436
**Verb/Card ID:** `verb-143`
**ID / path:** `verb-143.imperfektIndikativ`
**DE (read-only):** er stach
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han slog
**PROPOSED_DA:** Han stak
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han slog' = hit; stach = stung/pricked.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 437

**Audit ID:** DA-VERB-0437
**Verb/Card ID:** `verb-143`
**ID / path:** `verb-143.infinitiv`
**DE (read-only):** stechen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Durt
**PROPOSED_DA:** At stikke
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Durt' is not Danish; stechen = sting/prick.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 438

**Audit ID:** DA-VERB-0438
**Verb/Card ID:** `verb-143`
**ID / path:** `verb-143.partizipVergangenheit`
**DE (read-only):** gestochen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Durts
**PROPOSED_DA:** Stukket
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Durts' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 439

**Audit ID:** DA-VERB-0439
**Verb/Card ID:** `verb-144`
**ID / path:** `verb-144.imperfektIndikativ`
**DE (read-only):** stak vai steckte
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fyldte
**PROPOSED_DA:** Han stak
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Fyldte' = filled; stak = stuck/put.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 440

**Audit ID:** DA-VERB-0440
**Verb/Card ID:** `verb-144`
**ID / path:** `verb-144.imperfektKonjunktiv`
**DE (read-only):** stak vai steckte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fyldte
**PROPOSED_DA:** Han ville stikke
**Problēma:** Wrong verb sense.
**Audita pamatojums:** Copied wrong 'Fyldte' for all non-present forms.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 441

**Audit ID:** DA-VERB-0441
**Verb/Card ID:** `verb-144`
**ID / path:** `verb-144.infinitiv.lv`
**DE (read-only):** stecken
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At stikke / stikke ind
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 442

**Audit ID:** DA-VERB-0442
**Verb/Card ID:** `verb-144`
**ID / path:** `verb-144.partizipVergangenheit`
**DE (read-only):** gesteckt
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fyldte
**PROPOSED_DA:** Stukket
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Fyldte' is past of fylde, not gesteckt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 443

**Audit ID:** DA-VERB-0443
**Verb/Card ID:** `verb-144`
**ID / path:** `verb-144.praesens`
**DE (read-only):** er steckt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han skubber
**PROPOSED_DA:** Han stikker
**Problēma:** Wrong verb sense.
**Audita pamatojums:** stecken = put/stick in; 'Han skubber' = pushes.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 444

**Audit ID:** DA-VERB-0444
**Verb/Card ID:** `verb-146`
**ID / path:** `verb-146.infinitiv`
**DE (read-only):** stehlen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Zagt
**PROPOSED_DA:** At stjæle
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Zagt' is not Danish; stehlen = steal.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 445

**Audit ID:** DA-VERB-0445
**Verb/Card ID:** `verb-146`
**ID / path:** `verb-146.partizipVergangenheit`
**DE (read-only):** gestohlen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Zagts
**PROPOSED_DA:** Stjålet
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Zagts' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 446

**Audit ID:** DA-VERB-0446
**Verb/Card ID:** `verb-147`
**ID / path:** `verb-147.partizipVergangenheit`
**DE (read-only):** gestiegen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Klatrede
**PROPOSED_DA:** Klatret
**Problēma:** Past tense instead of participle.
**Audita pamatojums:** 'Klatrede' is past tense; participle is klatret.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 447

**Audit ID:** DA-VERB-0447
**Verb/Card ID:** `verb-148`
**ID / path:** `verb-148.infinitiv`
**DE (read-only):** sterben
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Mirt
**PROPOSED_DA:** At dø
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Mirt' is not Danish; sterben = die.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 448

**Audit ID:** DA-VERB-0448
**Verb/Card ID:** `verb-148`
**ID / path:** `verb-148.partizipVergangenheit`
**DE (read-only):** gestorben (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Miris
**PROPOSED_DA:** Død
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Miris' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 449

**Audit ID:** DA-VERB-0449
**Verb/Card ID:** `verb-148`
**ID / path:** `verb-148.praesens`
**DE (read-only):** er stirbt
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han er døende
**PROPOSED_DA:** Han dør
**Problēma:** Progressive/dying vs simple present die.
**Audita pamatojums:** 'Han er døende' = he is dying; stirbt = he dies.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 450

**Audit ID:** DA-VERB-0450
**Verb/Card ID:** `verb-149`
**ID / path:** `verb-149.imperfektIndikativ`
**DE (read-only):** stob vai stiebte
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skummet
**PROPOSED_DA:** Det støvede
**Problēma:** Noun/wrong form in past field.
**Audita pamatojums:** 'Skummet' is noun foam; missing proper verb form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
