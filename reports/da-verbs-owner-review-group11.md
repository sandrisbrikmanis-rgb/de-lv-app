# DA–DE Verbs — OWNER review Group 11

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **501–550** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group11.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 501

**Audit ID:** DA-VERB-0501
**Verb/Card ID:** `verb-167`
**ID / path:** `verb-167.imperfektKonjunktiv`
**DE (read-only):** wob
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Auda
**PROPOSED_DA:** Han ville væve
**Problēma:** Foreign remnant in Konjunktiv field.
**Audita pamatojums:** 'Auda' is Latvian; Konjunktiv needs conditional Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 502

**Audit ID:** DA-VERB-0502
**Verb/Card ID:** `verb-167`
**ID / path:** `verb-167.infinitiv`
**DE (read-only):** weben
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Aust
**PROPOSED_DA:** At væve
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Aust' is Latvian for weave.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 503

**Audit ID:** DA-VERB-0503
**Verb/Card ID:** `verb-167`
**ID / path:** `verb-167.partizipVergangenheit`
**DE (read-only):** gewoben
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izausts
**PROPOSED_DA:** Vævet
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Izausts' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 504

**Audit ID:** DA-VERB-0504
**Verb/Card ID:** `verb-168`
**ID / path:** `verb-168.partizipVergangenheit`
**DE (read-only):** gewichen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Trække sig tilbage
**PROPOSED_DA:** Viget
**Problēma:** Infinitive phrase in Partizip II field.
**Audita pamatojums:** 'Trække sig tilbage' is an infinitive phrase, not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 505

**Audit ID:** DA-VERB-0505
**Verb/Card ID:** `verb-169`
**ID / path:** `verb-169.imperfektIndikativ`
**DE (read-only):** er wies
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Viste han
**PROPOSED_DA:** Han viste
**Problēma:** Unnatural inverted word order.
**Audita pamatojums:** Inverted 'Viste han' is unnatural for standard er-form teaching.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 506

**Audit ID:** DA-VERB-0506
**Verb/Card ID:** `verb-169`
**ID / path:** `verb-169.praesens`
**DE (read-only):** er weist
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Viser han
**PROPOSED_DA:** Han viser
**Problēma:** Unnatural inverted word order.
**Audita pamatojums:** Inverted 'Viser han' is unnatural for standard er-form teaching.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 507

**Audit ID:** DA-VERB-0507
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.imperfektIndikativ`
**DE (read-only):** er wandte / es wendete
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han vred / vendte sig
**PROPOSED_DA:** Han vendte
**Problēma:** Multi-variant Präteritum chain.
**Audita pamatojums:** Multi-variant past mixes unrelated verbs.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 508

**Audit ID:** DA-VERB-0508
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.imperfektIndikativ.lv`
**DE (read-only):** er wandte / es wendete
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han vred / vendte sig
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 509

**Audit ID:** DA-VERB-0509
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.imperfektKonjunktiv`
**DE (read-only):** er wendete
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville ændre / omgøre
**PROPOSED_DA:** Han ville vende
**Problēma:** Multi-variant Konjunktiv chain.
**Audita pamatojums:** Multi-variant Konjunktiv with change/undo instead of turn.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 510

**Audit ID:** DA-VERB-0510
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.imperfektKonjunktiv.lv`
**DE (read-only):** er wendete
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville ændre / omgøre
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 511

**Audit ID:** DA-VERB-0511
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.infinitiv`
**DE (read-only):** wenden
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ændre / beskære
**PROPOSED_DA:** At vende
**Problēma:** Multi-variant infinitive with wrong senses.
**Audita pamatojums:** wenden = turn; 'ændre/beskære' are different verbs.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 512

**Audit ID:** DA-VERB-0512
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.infinitiv.lv`
**DE (read-only):** wenden
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ændre / beskære
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 513

**Audit ID:** DA-VERB-0513
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.partizipVergangenheit`
**DE (read-only):** gewandt / gewendet
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ændret/omgjort
**PROPOSED_DA:** Vendt
**Problēma:** Wrong participle senses.
**Audita pamatojums:** 'Ændret/omgjort' do not match gewandt/gewendet (turned).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 514

**Audit ID:** DA-VERB-0514
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.praesens`
**DE (read-only):** er wendet
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han vrider / vender sig
**PROPOSED_DA:** Han vender
**Problēma:** Multi-variant present chain.
**Audita pamatojums:** Multi-variant present mixes turn and twist senses.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 515

**Audit ID:** DA-VERB-0515
**Verb/Card ID:** `verb-170`
**ID / path:** `verb-170.praesens.lv`
**DE (read-only):** er wendet
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han vrider / vender sig
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 516

**Audit ID:** DA-VERB-0516
**Verb/Card ID:** `verb-171`
**ID / path:** `verb-171.imperfektIndikativ`
**DE (read-only):** er warb
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han foreslog
**PROPOSED_DA:** Han rekrutterede
**Problēma:** Propose vs recruit semantic mismatch.
**Audita pamatojums:** Past of propose does not match warb (recruited/advertised).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 517

**Audit ID:** DA-VERB-0517
**Verb/Card ID:** `verb-171`
**ID / path:** `verb-171.imperfektKonjunktiv`
**DE (read-only):** er würbe
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville foreslå
**PROPOSED_DA:** Han ville rekruttere
**Problēma:** Propose vs recruit semantic mismatch.
**Audita pamatojums:** Konjunktiv should reflect werben sense.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 518

**Audit ID:** DA-VERB-0518
**Verb/Card ID:** `verb-171`
**ID / path:** `verb-171.infinitiv`
**DE (read-only):** werben
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At foreslå
**PROPOSED_DA:** At rekruttere
**Problēma:** Propose vs recruit semantic mismatch.
**Audita pamatojums:** werben = recruit/advertise, not propose.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 519

**Audit ID:** DA-VERB-0519
**Verb/Card ID:** `verb-171`
**ID / path:** `verb-171.partizipVergangenheit`
**DE (read-only):** geworben
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Foreslået at
**PROPOSED_DA:** Rekrutteret
**Problēma:** Malformed participle with trailing 'at'.
**Audita pamatojums:** 'Foreslået at' is malformed and not a clean participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 520

**Audit ID:** DA-VERB-0520
**Verb/Card ID:** `verb-171`
**ID / path:** `verb-171.praesens`
**DE (read-only):** er wirbt
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han foreslår
**PROPOSED_DA:** Han rekrutterer
**Problēma:** Propose vs recruit semantic mismatch.
**Audita pamatojums:** 'Han foreslår' means propose; werben is recruit.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 521

**Audit ID:** DA-VERB-0521
**Verb/Card ID:** `verb-172`
**ID / path:** `verb-172.imperfektIndikativ`
**DE (read-only):** wurde
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Blev
**PROPOSED_DA:** Han blev
**Problēma:** Missing subject in Präteritum field.
**Audita pamatojums:** Bare 'Blev' lacks subject expected in er-form cards.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 522

**Audit ID:** DA-VERB-0522
**Verb/Card ID:** `verb-172`
**ID / path:** `verb-172.imperfektKonjunktiv`
**DE (read-only):** wurde
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Blev
**PROPOSED_DA:** Han ville blive
**Problēma:** Preterite form in Konjunktiv field.
**Audita pamatojums:** Konjunktiv II needs conditional, not identical Präteritum 'Blev'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 523

**Audit ID:** DA-VERB-0523
**Verb/Card ID:** `verb-173`
**ID / path:** `verb-173.imperfektKonjunktiv`
**DE (read-only):** er würfe
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kastede
**PROPOSED_DA:** Han ville kaste
**Problēma:** Preterite form in Konjunktiv field.
**Audita pamatojums:** Konjunktiv II needs conditional, not preterite 'kastede'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 524

**Audit ID:** DA-VERB-0524
**Verb/Card ID:** `verb-173`
**ID / path:** `verb-173.infinitiv`
**DE (read-only):** werfen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Mest
**PROPOSED_DA:** At kaste
**Problēma:** Wrong word unrelated to werfen.
**Audita pamatojums:** 'Mest' means 'most'; werfen = throw.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 525

**Audit ID:** DA-VERB-0525
**Verb/Card ID:** `verb-173`
**ID / path:** `verb-173.infinitiv.lv`
**DE (read-only):** werfen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Mest
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-115 (DE: schmeißen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 526

**Audit ID:** DA-VERB-0526
**Verb/Card ID:** `verb-173`
**ID / path:** `verb-173.partizipVergangenheit`
**DE (read-only):** geworfen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Mests
**PROPOSED_DA:** Kastet
**Problēma:** Wrong word in Partizip II field.
**Audita pamatojums:** 'Mests' is superlative/adjective fragment, not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 527

**Audit ID:** DA-VERB-0527
**Verb/Card ID:** `verb-174`
**ID / path:** `verb-174.partizipVergangenheit`
**DE (read-only):** gewogen
**Severity:** MEDIUM
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Vægtet
**PROPOSED_DA:** Vejet
**Problēma:** Non-standard participle form.
**Audita pamatojums:** Standard Danish participle of veje is 'Vejet', not 'Vægtet'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 528

**Audit ID:** DA-VERB-0528
**Verb/Card ID:** `verb-175`
**ID / path:** `verb-175.imperfektIndikativ`
**DE (read-only):** er wand
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han fletter
**PROPOSED_DA:** Han vred sig
**Problēma:** Present tense in past field.
**Audita pamatojums:** 'Han fletter' is present tense in Präteritum field.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 529

**Audit ID:** DA-VERB-0529
**Verb/Card ID:** `verb-175`
**ID / path:** `verb-175.imperfektKonjunktiv`
**DE (read-only):** er wände
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville flette
**PROPOSED_DA:** Han ville vride sig
**Problēma:** Wrong verb sense in Konjunktiv.
**Audita pamatojums:** Braiding (flette) does not match winden (writhe).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 530

**Audit ID:** DA-VERB-0530
**Verb/Card ID:** `verb-175`
**ID / path:** `verb-175.infinitiv`
**DE (read-only):** winden
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fletning
**PROPOSED_DA:** At vride sig
**Problēma:** Noun instead of infinitive.
**Audita pamatojums:** 'Fletning' is a noun; winden = writhe/wiggle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 531

**Audit ID:** DA-VERB-0531
**Verb/Card ID:** `verb-175`
**ID / path:** `verb-175.partizipVergangenheit`
**DE (read-only):** gewunden
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Flettet
**PROPOSED_DA:** Vredet
**Problēma:** Braided participle for writhe verb.
**Audita pamatojums:** 'Flettet' means braided; gewunden = writhed/wound.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 532

**Audit ID:** DA-VERB-0532
**Verb/Card ID:** `verb-175`
**ID / path:** `verb-175.praesens`
**DE (read-only):** er windet
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han pin
**PROPOSED_DA:** Han vrir sig
**Problēma:** Incomplete or wrong present form.
**Audita pamatojums:** 'Han pin' is incomplete/non-verb; winden = writhe.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 533

**Audit ID:** DA-VERB-0533
**Verb/Card ID:** `verb-176`
**ID / path:** `verb-176.infinitiv.lv`
**DE (read-only):** wissen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At vide
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-27 (DE: kennen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 534

**Audit ID:** DA-VERB-0534
**Verb/Card ID:** `verb-176`
**ID / path:** `verb-176.partizipVergangenheit`
**DE (read-only):** gewusst
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kendt
**PROPOSED_DA:** Vidst
**Problēma:** Kennen participle used for wissen.
**Audita pamatojums:** 'Kendt' matches kennen; wissen = vide → vidst.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 535

**Audit ID:** DA-VERB-0535
**Verb/Card ID:** `verb-177`
**ID / path:** `verb-177.imperfektIndikativ`
**DE (read-only):** wollte
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ville
**PROPOSED_DA:** Han ville
**Problēma:** Missing subject in Präteritum field.
**Audita pamatojums:** Bare 'Ville' lacks subject expected in person-form cards.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 536

**Audit ID:** DA-VERB-0536
**Verb/Card ID:** `verb-177`
**ID / path:** `verb-177.imperfektKonjunktiv`
**DE (read-only):** wollte
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ville
**PROPOSED_DA:** Han ville
**Problēma:** Missing subject in Konjunktiv field.
**Audita pamatojums:** Bare 'Ville' lacks subject; ambiguous without 'Han'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 537

**Audit ID:** DA-VERB-0537
**Verb/Card ID:** `verb-177`
**ID / path:** `verb-177.partizipVergangenheit`
**DE (read-only):** gewollt
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ville
**PROPOSED_DA:** Villet
**Problēma:** Past tense in Partizip II field.
**Audita pamatojums:** 'Ville' is preterite, not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 538

**Audit ID:** DA-VERB-0538
**Verb/Card ID:** `verb-178`
**ID / path:** `verb-178.imperfektIndikativ`
**DE (read-only):** wrang
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izgrieza
**PROPOSED_DA:** Han vred
**Problēma:** Foreign remnant in Präteritum field.
**Audita pamatojums:** 'Izgrieza' is Latvian, not Danish past.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 539

**Audit ID:** DA-VERB-0539
**Verb/Card ID:** `verb-178`
**ID / path:** `verb-178.imperfektKonjunktiv`
**DE (read-only):** wrang
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izgrieza
**PROPOSED_DA:** Han ville vride
**Problēma:** Foreign remnant in Konjunktiv field.
**Audita pamatojums:** 'Izgrieza' is Latvian; Konjunktiv needs conditional Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 540

**Audit ID:** DA-VERB-0540
**Verb/Card ID:** `verb-178`
**ID / path:** `verb-178.infinitiv`
**DE (read-only):** wringen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izgriezt / izspiest
**PROPOSED_DA:** At vride
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Izgriezt / izspiest' is Latvian, not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 541

**Audit ID:** DA-VERB-0541
**Verb/Card ID:** `verb-178`
**ID / path:** `verb-178.infinitiv.lv`
**DE (read-only):** wringen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izgriezt / izspiest
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 542

**Audit ID:** DA-VERB-0542
**Verb/Card ID:** `verb-178`
**ID / path:** `verb-178.partizipVergangenheit`
**DE (read-only):** gewrungen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izgriezts
**PROPOSED_DA:** Vrungen
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Izgriezts' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 543

**Audit ID:** DA-VERB-0543
**Verb/Card ID:** `verb-178`
**ID / path:** `verb-178.praesens`
**DE (read-only):** er wringt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han skærer ud
**PROPOSED_DA:** Han vrier
**Problēma:** Cut out instead of wring.
**Audita pamatojums:** wringen = wring; 'skærer ud' means cut out.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 544

**Audit ID:** DA-VERB-0544
**Verb/Card ID:** `verb-179`
**ID / path:** `verb-179.imperfektIndikativ`
**DE (read-only):** zieh
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Vainoja
**PROPOSED_DA:** Han bebrejdede
**Problēma:** Foreign remnant in Präteritum field.
**Audita pamatojums:** 'Vainoja' is Latvian, not Danish past.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 545

**Audit ID:** DA-VERB-0545
**Verb/Card ID:** `verb-179`
**ID / path:** `verb-179.imperfektKonjunktiv`
**DE (read-only):** zieh
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Vainoja
**PROPOSED_DA:** Han ville bebrejde
**Problēma:** Foreign remnant in Konjunktiv field.
**Audita pamatojums:** 'Vainoja' is Latvian; Konjunktiv needs conditional Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 546

**Audit ID:** DA-VERB-0546
**Verb/Card ID:** `verb-179`
**ID / path:** `verb-179.infinitiv`
**DE (read-only):** zeihen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Vainot
**PROPOSED_DA:** At bebrejde
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Vainot' is Latvian for blame.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 547

**Audit ID:** DA-VERB-0547
**Verb/Card ID:** `verb-179`
**ID / path:** `verb-179.partizipVergangenheit`
**DE (read-only):** geziehen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Vainojis
**PROPOSED_DA:** Bebrejdet
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Vainojis' is Latvian participle remnant.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 548

**Audit ID:** DA-VERB-0548
**Verb/Card ID:** `verb-180`
**ID / path:** `verb-180.infinitiv`
**DE (read-only):** ziehen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lyst
**PROPOSED_DA:** At trække
**Problēma:** Wrong word unrelated to ziehen.
**Audita pamatojums:** 'Lyst' means desire/list; ziehen = pull/draw.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 549

**Audit ID:** DA-VERB-0549
**Verb/Card ID:** `verb-180`
**ID / path:** `verb-180.partizipVergangenheit`
**DE (read-only):** gezogen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bygds
**PROPOSED_DA:** Trukket
**Problēma:** Foreign remnant in Partizip II field.
**Audita pamatojums:** 'Bygds' is a foreign/remnant form, not Danish participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 550

**Audit ID:** DA-VERB-0550
**Verb/Card ID:** `verb-181`
**ID / path:** `verb-181.infinitiv`
**DE (read-only):** zwingen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Piepiest
**PROPOSED_DA:** At tvinge
**Problēma:** Foreign remnant in infinitive field.
**Audita pamatojums:** 'Piepiest' is Latvian, not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
