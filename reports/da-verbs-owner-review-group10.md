# DA–DE Verbs — OWNER review Group 10

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **451–500** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group10.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 451

**Audit ID:** DA-VERB-0451
**Verb/Card ID:** `verb-149`
**ID / path:** `verb-149.imperfektKonjunktiv`
**DE (read-only):** stob vai stiebte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skummet
**PROPOSED_DA:** Det ville støve
**Problēma:** Subjunctive field shows wrong indicative.
**Audita pamatojums:** Copied wrong form; subjunctive needs ville + infinitive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 452

**Audit ID:** DA-VERB-0452
**Verb/Card ID:** `verb-149`
**ID / path:** `verb-149.infinitiv.lv`
**DE (read-only):** stieben
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skum / hvirvel
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 453

**Audit ID:** DA-VERB-0453
**Verb/Card ID:** `verb-149`
**ID / path:** `verb-149.partizipVergangenheit`
**DE (read-only):** gestoben vai gestiebt
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Forkælet
**PROPOSED_DA:** Støvet
**Problēma:** Wrong translation entirely.
**Audita pamatojums:** 'Forkælet' means spoiled; gestoben = whirled up (dust).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 454

**Audit ID:** DA-VERB-0454
**Verb/Card ID:** `verb-149`
**ID / path:** `verb-149.praesens`
**DE (read-only):** es stiebt
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tas sat
**PROPOSED_DA:** Der støver
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Tas sat' is not Danish; es stiebt = dust flies/whirls.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 455

**Audit ID:** DA-VERB-0455
**Verb/Card ID:** `verb-150`
**ID / path:** `verb-150.imperfektIndikativ`
**DE (read-only):** stank
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lugtede
**PROPOSED_DA:** Det stank
**Problēma:** Wrong verb form and missing subject.
**Audita pamatojums:** Missing subject and wrong verb; stank matches German Präteritum of stinken.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 456

**Audit ID:** DA-VERB-0456
**Verb/Card ID:** `verb-150`
**ID / path:** `verb-150.imperfektKonjunktiv`
**DE (read-only):** stank
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lugtede
**PROPOSED_DA:** Det ville stinke
**Problēma:** Indicative past used instead of conditional.
**Audita pamatojums:** Konjunktiv II needs conditional; 'Lugtede' is indicative and semantically weak.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 457

**Audit ID:** DA-VERB-0457
**Verb/Card ID:** `verb-150`
**ID / path:** `verb-150.infinitiv`
**DE (read-only):** stinken
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At lugte
**PROPOSED_DA:** At stinke
**Problēma:** Semantic mismatch: neutral smell vs stink.
**Audita pamatojums:** stinken means to stink; 'At lugte' is neutral smell.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 458

**Audit ID:** DA-VERB-0458
**Verb/Card ID:** `verb-150`
**ID / path:** `verb-150.partizipVergangenheit`
**DE (read-only):** gestunken
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ildelugtende
**PROPOSED_DA:** Stunket
**Problēma:** Adjective used instead of past participle.
**Audita pamatojums:** 'Ildelugtende' is an adjective; Partizip II should be 'Stunket'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 459

**Audit ID:** DA-VERB-0459
**Verb/Card ID:** `verb-150`
**ID / path:** `verb-150.praesens`
**DE (read-only):** es stinkt
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det er sjovt
**PROPOSED_DA:** Det stinker
**Problēma:** Completely wrong translation.
**Audita pamatojums:** 'Det er sjovt' means 'That is funny' and has no relation to 'es stinkt'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 460

**Audit ID:** DA-VERB-0460
**Verb/Card ID:** `verb-151`
**ID / path:** `verb-151.imperfektKonjunktiv`
**DE (read-only):** er stieße
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han skubbede
**PROPOSED_DA:** Han ville skubbe
**Problēma:** Preterite form in Konjunktiv field.
**Audita pamatojums:** Konjunktiv II requires conditional 'ville + infinitive', not preterite 'skubbede'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 461

**Audit ID:** DA-VERB-0461
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.imperfektIndikativ`
**DE (read-only):** er strich
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han malede / stribet
**PROPOSED_DA:** Han strygede
**Problēma:** Participle form in past-tense field.
**Audita pamatojums:** 'stribet' is a participle, not Präteritum; mixed variants.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 462

**Audit ID:** DA-VERB-0462
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.imperfektIndikativ.lv`
**DE (read-only):** er strich
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han malede / stribet
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 463

**Audit ID:** DA-VERB-0463
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.imperfektKonjunktiv`
**DE (read-only):** er striche
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville male / strippe
**PROPOSED_DA:** Han ville stryge
**Problēma:** Wrong alternative in multi-variant Konjunktiv.
**Audita pamatojums:** 'strippe' means undress; unrelated to streichen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 464

**Audit ID:** DA-VERB-0464
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.imperfektKonjunktiv.lv`
**DE (read-only):** er striche
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville male / strippe
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 465

**Audit ID:** DA-VERB-0465
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.infinitiv`
**DE (read-only):** streichen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Maling/strimmel
**PROPOSED_DA:** At stryge
**Problēma:** Noun phrase instead of Danish infinitive.
**Audita pamatojums:** 'Maling/strimmel' are nouns, not a verb infinitive for streichen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 466

**Audit ID:** DA-VERB-0466
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.partizipVergangenheit`
**DE (read-only):** gestrichen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Malet / stribet
**PROPOSED_DA:** Strøget
**Problēma:** Multi-variant participle chain.
**Audita pamatojums:** Multi-variant participle list; single teaching form needed.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 467

**Audit ID:** DA-VERB-0467
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.partizipVergangenheit.lv`
**DE (read-only):** gestrichen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Malet / stribet
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 468

**Audit ID:** DA-VERB-0468
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.praesens`
**DE (read-only):** er streicht
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han maler / striber
**PROPOSED_DA:** Han stryger
**Problēma:** Multi-variant chain with imprecise alternatives.
**Audita pamatojums:** Multi-variant string; primary sense of streichen here is strike/paint over.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 469

**Audit ID:** DA-VERB-0469
**Verb/Card ID:** `verb-152`
**ID / path:** `verb-152.praesens.lv`
**DE (read-only):** er streicht
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han maler / striber
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 470

**Audit ID:** DA-VERB-0470
**Verb/Card ID:** `verb-153`
**ID / path:** `verb-153.imperfektIndikativ`
**DE (read-only):** er stritt
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kæmpede
**PROPOSED_DA:** Han skændtes
**Problēma:** Physical fight instead of quarrel.
**Audita pamatojums:** Past of skændes matches arguing, not fighting.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 471

**Audit ID:** DA-VERB-0471
**Verb/Card ID:** `verb-153`
**ID / path:** `verb-153.imperfektKonjunktiv`
**DE (read-only):** er stritte
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville kæmpe
**PROPOSED_DA:** Han ville skændes
**Problēma:** Physical fight instead of quarrel.
**Audita pamatojums:** Conditional quarrel form needed for Konjunktiv II.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 472

**Audit ID:** DA-VERB-0472
**Verb/Card ID:** `verb-153`
**ID / path:** `verb-153.infinitiv`
**DE (read-only):** streiten
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At kæmpe
**PROPOSED_DA:** At skændes
**Problēma:** Fight vs quarrel semantic mismatch.
**Audita pamatojums:** streiten = quarrel/argue, not physical fight ('At kæmpe').
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 473

**Audit ID:** DA-VERB-0473
**Verb/Card ID:** `verb-153`
**ID / path:** `verb-153.partizipVergangenheit`
**DE (read-only):** gestritten
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kæmpede
**PROPOSED_DA:** Skændtes
**Problēma:** Past tense in Partizip II field.
**Audita pamatojums:** 'Kæmpede' is preterite, not a past participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 474

**Audit ID:** DA-VERB-0474
**Verb/Card ID:** `verb-153`
**ID / path:** `verb-153.praesens`
**DE (read-only):** er streitet
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kæmper
**PROPOSED_DA:** Han skændes
**Problēma:** Physical fight instead of quarrel.
**Audita pamatojums:** 'Han kæmper' means to fight; streiten is to quarrel.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 475

**Audit ID:** DA-VERB-0475
**Verb/Card ID:** `verb-154`
**ID / path:** `verb-154.infinitiv`
**DE (read-only):** tragen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Rede
**PROPOSED_DA:** At bære
**Problēma:** Wrong word unrelated to tragen.
**Audita pamatojums:** 'Rede' means nest/speech; tragen = carry/wear.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 476

**Audit ID:** DA-VERB-0476
**Verb/Card ID:** `verb-154`
**ID / path:** `verb-154.infinitiv.lv`
**DE (read-only):** tragen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Rede
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-35 (DE: bringen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 477

**Audit ID:** DA-VERB-0477
**Verb/Card ID:** `verb-154`
**ID / path:** `verb-154.partizipVergangenheit`
**DE (read-only):** getragen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Reder
**PROPOSED_DA:** Båret
**Problēma:** Wrong participle unrelated to tragen.
**Audita pamatojums:** 'Reder' means nests; getragen = carried/worn.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 478

**Audit ID:** DA-VERB-0478
**Verb/Card ID:** `verb-155`
**ID / path:** `verb-155.imperfektIndikativ`
**DE (read-only):** er traf
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han stødte på
**PROPOSED_DA:** Han mødte
**Problēma:** Inconsistent translation between present and past.
**Audita pamatojums:** Present uses 'møder' but past uses 'stødte på'; inconsistent for same verb sense.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 479

**Audit ID:** DA-VERB-0479
**Verb/Card ID:** `verb-155`
**ID / path:** `verb-155.infinitiv`
**DE (read-only):** treffen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sastapt
**PROPOSED_DA:** At møde
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Sastapt' is Latvian, not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 480

**Audit ID:** DA-VERB-0480
**Verb/Card ID:** `verb-155`
**ID / path:** `verb-155.partizipVergangenheit`
**DE (read-only):** getroffen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sastapts
**PROPOSED_DA:** Mødt
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Sastapts' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 481

**Audit ID:** DA-VERB-0481
**Verb/Card ID:** `verb-156`
**ID / path:** `verb-156.infinitiv`
**DE (read-only):** treiben
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Jage
**PROPOSED_DA:** At drive
**Problēma:** Chase vs drive semantic mismatch.
**Audita pamatojums:** treiben = drive/herd/float; 'Jage' means hunt/chase.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 482

**Audit ID:** DA-VERB-0482
**Verb/Card ID:** `verb-156`
**ID / path:** `verb-156.partizipVergangenheit`
**DE (read-only):** getrieben
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Jaget
**PROPOSED_DA:** Drevet
**Problēma:** Hunted participle for driven verb.
**Audita pamatojums:** 'Jaget' means hunted; getrieben = driven.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 483

**Audit ID:** DA-VERB-0483
**Verb/Card ID:** `verb-157`
**ID / path:** `verb-157.imperfektIndikativ`
**DE (read-only):** er trat
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han stod / gik
**PROPOSED_DA:** Han trådte
**Problēma:** Wrong past verbs in multi-variant chain.
**Audita pamatojums:** 'stod/gik' do not match trat (stepped).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 484

**Audit ID:** DA-VERB-0484
**Verb/Card ID:** `verb-157`
**ID / path:** `verb-157.imperfektIndikativ.lv`
**DE (read-only):** er trat
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han stod / gik
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 485

**Audit ID:** DA-VERB-0485
**Verb/Card ID:** `verb-157`
**ID / path:** `verb-157.imperfektKonjunktiv`
**DE (read-only):** er träte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville stå/gå
**PROPOSED_DA:** Han ville træde
**Problēma:** Multi-variant Konjunktiv with wrong verbs.
**Audita pamatojums:** Konjunktiv should mirror stepping sense, not stand/go variants.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 486

**Audit ID:** DA-VERB-0486
**Verb/Card ID:** `verb-157`
**ID / path:** `verb-157.infinitiv`
**DE (read-only):** treten
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Gå ind/gå
**PROPOSED_DA:** At træde
**Problēma:** Multi-variant infinitive phrase.
**Audita pamatojums:** treten = step/tread; infinitive should be a single verb form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 487

**Audit ID:** DA-VERB-0487
**Verb/Card ID:** `verb-157`
**ID / path:** `verb-157.partizipVergangenheit`
**DE (read-only):** getreten (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Stod / gik
**PROPOSED_DA:** Trådt
**Problēma:** Past tense forms in Partizip II field.
**Audita pamatojums:** 'Stod / gik' are past forms, not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 488

**Audit ID:** DA-VERB-0488
**Verb/Card ID:** `verb-157`
**ID / path:** `verb-157.partizipVergangenheit.lv`
**DE (read-only):** getreten (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Stod / gik
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 489

**Audit ID:** DA-VERB-0489
**Verb/Card ID:** `verb-157`
**ID / path:** `verb-157.praesens`
**DE (read-only):** er tritt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han går ind / går
**PROPOSED_DA:** Han træder
**Problēma:** Multi-variant present chain.
**Audita pamatojums:** Multi-variant present; treten core sense is to step.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 490

**Audit ID:** DA-VERB-0490
**Verb/Card ID:** `verb-157`
**ID / path:** `verb-157.praesens.lv`
**DE (read-only):** er tritt
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han går ind / går
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 491

**Audit ID:** DA-VERB-0491
**Verb/Card ID:** `verb-158`
**ID / path:** `verb-158.infinitiv`
**DE (read-only):** trinken
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Dzert
**PROPOSED_DA:** At drikke
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Dzert' is Latvian for drink.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 492

**Audit ID:** DA-VERB-0492
**Verb/Card ID:** `verb-158`
**ID / path:** `verb-158.partizipVergangenheit`
**DE (read-only):** getrunken
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Dzerts
**PROPOSED_DA:** Drukket
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Dzerts' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 493

**Audit ID:** DA-VERB-0493
**Verb/Card ID:** `verb-161`
**ID / path:** `verb-161.infinitiv`
**DE (read-only):** verderben
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Til skade
**PROPOSED_DA:** At ødelægge
**Problēma:** Phrase instead of infinitive.
**Audita pamatojums:** 'Til skade' is a prepositional phrase, not an infinitive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 494

**Audit ID:** DA-VERB-0494
**Verb/Card ID:** `verb-162`
**ID / path:** `verb-162.infinitiv`
**DE (read-only):** verdrießen
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At forårsage irritation
**PROPOSED_DA:** At ærgre
**Problēma:** Overlong non-idiomatic infinitive phrase.
**Audita pamatojums:** verdrießen = vex/annoy; long phrase is non-standard for verb cards.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 495

**Audit ID:** DA-VERB-0495
**Verb/Card ID:** `verb-162`
**ID / path:** `verb-162.partizipVergangenheit`
**DE (read-only):** verdrossen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ked af det
**PROPOSED_DA:** Ærgeret
**Problēma:** Adjective phrase in Partizip II field.
**Audita pamatojums:** 'Ked af det' is an adjective phrase, not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 496

**Audit ID:** DA-VERB-0496
**Verb/Card ID:** `verb-163`
**ID / path:** `verb-163.infinitiv`
**DE (read-only):** vergessen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Aizmirst
**PROPOSED_DA:** At glemme
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Aizmirst' is Latvian for forget.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 497

**Audit ID:** DA-VERB-0497
**Verb/Card ID:** `verb-163`
**ID / path:** `verb-163.partizipVergangenheit`
**DE (read-only):** vergessen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Aizmirsts
**PROPOSED_DA:** Glemt
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Aizmirsts' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 498

**Audit ID:** DA-VERB-0498
**Verb/Card ID:** `verb-165`
**ID / path:** `verb-165.infinitiv`
**DE (read-only):** wachsen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Augt
**PROPOSED_DA:** At vokse
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Augt' is Latvian for grow.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 499

**Audit ID:** DA-VERB-0499
**Verb/Card ID:** `verb-165`
**ID / path:** `verb-165.partizipVergangenheit`
**DE (read-only):** gewachsen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Audzis
**PROPOSED_DA:** Vokset
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Audzis' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 500

**Audit ID:** DA-VERB-0500
**Verb/Card ID:** `verb-167`
**ID / path:** `verb-167.imperfektIndikativ`
**DE (read-only):** wob
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Auda
**PROPOSED_DA:** Han vævede
**Problēma:** Foreign remnant in Präteritum field.
**Audita pamatojums:** 'Auda' is Latvian, not Danish past.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
