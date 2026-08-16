# DA–DE Verbs — OWNER review Group 08

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **351–400** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group08.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 351

**Audit ID:** DA-VERB-0351
**Verb/Card ID:** `verb-110`
**ID / path:** `verb-110.infinitiv`
**DE (read-only):** schlagen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Søster
**PROPOSED_DA:** At slå
**Problēma:** Completely wrong translation — corruption.
**Audita pamatojums:** 'Søster' means sister, not schlagen (strike/hit).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 352

**Audit ID:** DA-VERB-0352
**Verb/Card ID:** `verb-110`
**ID / path:** `verb-110.partizipVergangenheit`
**DE (read-only):** geschlagen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Søster
**PROPOSED_DA:** Slået
**Problēma:** Completely wrong translation — corruption.
**Audita pamatojums:** 'Søster' repeated — not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 353

**Audit ID:** DA-VERB-0353
**Verb/Card ID:** `verb-111`
**ID / path:** `verb-111.imperfektIndikativ`
**DE (read-only):** er schlich
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han regnede
**PROPOSED_DA:** Han sneg sig
**Problēma:** Wrong verb entirely.
**Audita pamatojums:** 'Han regnede' means it rained; schlich = crept.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 354

**Audit ID:** DA-VERB-0354
**Verb/Card ID:** `verb-111`
**ID / path:** `verb-111.imperfektKonjunktiv`
**DE (read-only):** er schliche
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han regner
**PROPOSED_DA:** Han ville snige sig
**Problēma:** Wrong verb and tense.
**Audita pamatojums:** 'Han regner' is present rain, not subjunctive creep.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 355

**Audit ID:** DA-VERB-0355
**Verb/Card ID:** `verb-111`
**ID / path:** `verb-111.infinitiv`
**DE (read-only):** schleichen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det regner
**PROPOSED_DA:** At snige sig
**Problēma:** Wrong verb entirely.
**Audita pamatojums:** 'Det regner' means it rains; schleichen = creep/sneak.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 356

**Audit ID:** DA-VERB-0356
**Verb/Card ID:** `verb-111`
**ID / path:** `verb-111.infinitiv.lv`
**DE (read-only):** schleichen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det regner
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-66 (DE: kriechen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 357

**Audit ID:** DA-VERB-0357
**Verb/Card ID:** `verb-111`
**ID / path:** `verb-111.partizipVergangenheit`
**DE (read-only):** geschlichen (er ist)
**Severity:** MEDIUM
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Gik bort
**PROPOSED_DA:** Sneget sig
**Problēma:** Loose semantic mismatch.
**Audita pamatojums:** 'Gik bort' is generic departure; geschlichen = sneaked/crawled.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 358

**Audit ID:** DA-VERB-0358
**Verb/Card ID:** `verb-111`
**ID / path:** `verb-111.praesens`
**DE (read-only):** er schleicht
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han læner sig
**PROPOSED_DA:** Han sniger sig
**Problēma:** Wrong verb entirely.
**Audita pamatojums:** 'Han læner sig' means he leans; schleicht = creeps.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 359

**Audit ID:** DA-VERB-0359
**Verb/Card ID:** `verb-112`
**ID / path:** `verb-112.imperfektKonjunktiv`
**DE (read-only):** er schliffe
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville male
**PROPOSED_DA:** Han ville slibe
**Problēma:** Wrong verb sense.
**Audita pamatojums:** Subjunctive preserves wrong paint verb.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 360

**Audit ID:** DA-VERB-0360
**Verb/Card ID:** `verb-112`
**ID / path:** `verb-112.infinitiv`
**DE (read-only):** schleifen
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At male
**PROPOSED_DA:** At slibe / at polere
**Problēma:** Wrong verb sense.
**Audita pamatojums:** schleifen = grind/polish; 'At male' = to paint.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 361

**Audit ID:** DA-VERB-0361
**Verb/Card ID:** `verb-112`
**ID / path:** `verb-112.praesens`
**DE (read-only):** er schleift
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han maler
**PROPOSED_DA:** Han sliber
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han maler' = paints; schleift = grinds/polishes.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 362

**Audit ID:** DA-VERB-0362
**Verb/Card ID:** `verb-114`
**ID / path:** `verb-114.imperfektKonjunktiv`
**DE (read-only):** er schlänge
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han morgen
**PROPOSED_DA:** Han ville sluge
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Han morgen' is not valid Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 363

**Audit ID:** DA-VERB-0363
**Verb/Card ID:** `verb-114`
**ID / path:** `verb-114.infinitiv`
**DE (read-only):** schlingen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** I morgen
**PROPOSED_DA:** At sluge
**Problēma:** Completely wrong translation — corruption.
**Audita pamatojums:** 'I morgen' means tomorrow; schlingen = swallow/devour.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 364

**Audit ID:** DA-VERB-0364
**Verb/Card ID:** `verb-114`
**ID / path:** `verb-114.partizipVergangenheit`
**DE (read-only):** geschlungen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Morgenen
**PROPOSED_DA:** Slugt
**Problēma:** Completely wrong translation — corruption.
**Audita pamatojums:** 'Morgenen' means the morning; not a participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 365

**Audit ID:** DA-VERB-0365
**Verb/Card ID:** `verb-115`
**ID / path:** `verb-115.imperfektKonjunktiv`
**DE (read-only):** er schmisse
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kastede
**PROPOSED_DA:** Han ville kaste
**Problēma:** Subjunctive field shows indicative past.
**Audita pamatojums:** Copied indicative; Konjunktiv II needs ville + infinitive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 366

**Audit ID:** DA-VERB-0366
**Verb/Card ID:** `verb-115`
**ID / path:** `verb-115.infinitiv`
**DE (read-only):** schmeißen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Mest
**PROPOSED_DA:** At kaste
**Problēma:** Wrong word — corruption.
**Audita pamatojums:** 'Mest' means most; schmeißen = throw.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 367

**Audit ID:** DA-VERB-0367
**Verb/Card ID:** `verb-115`
**ID / path:** `verb-115.partizipVergangenheit`
**DE (read-only):** geschmissen
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Mests
**PROPOSED_DA:** Kastet
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Mests' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 368

**Audit ID:** DA-VERB-0368
**Verb/Card ID:** `verb-116`
**ID / path:** `verb-116.imperfektIndikativ`
**DE (read-only):** er schmolz
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Stønnede han
**PROPOSED_DA:** Han smeltede
**Problēma:** Wrong verb entirely.
**Audita pamatojums:** 'Stønnede han' means he groaned; schmolz = melted.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 369

**Audit ID:** DA-VERB-0369
**Verb/Card ID:** `verb-116`
**ID / path:** `verb-116.imperfektKonjunktiv`
**DE (read-only):** er schmölze
**Severity:** CRITICAL
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bevægede sig
**PROPOSED_DA:** Han ville smelte
**Problēma:** Wrong verb entirely.
**Audita pamatojums:** 'Han bevægede sig' means he moved; not melt subjunctive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 370

**Audit ID:** DA-VERB-0370
**Verb/Card ID:** `verb-116`
**ID / path:** `verb-116.infinitiv`
**DE (read-only):** schmelzen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kust
**PROPOSED_DA:** At smelte
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Kust' is not Danish; schmelzen = melt.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 371

**Audit ID:** DA-VERB-0371
**Verb/Card ID:** `verb-116`
**ID / path:** `verb-116.partizipVergangenheit`
**DE (read-only):** geschmolzen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kusis
**PROPOSED_DA:** Smeltet
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Kusis' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 372

**Audit ID:** DA-VERB-0372
**Verb/Card ID:** `verb-117`
**ID / path:** `verb-117.imperfektIndikativ`
**DE (read-only):** schnaubte vai schnob
**Severity:** MEDIUM
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Snøftede
**PROPOSED_DA:** Han snøftede
**Problēma:** Bare past form without subject.
**Audita pamatojums:** Missing subject.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 373

**Audit ID:** DA-VERB-0373
**Verb/Card ID:** `verb-117`
**ID / path:** `verb-117.imperfektKonjunktiv`
**DE (read-only):** schnaubte vai schnob
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Snøftede
**PROPOSED_DA:** Han ville fnyse
**Problēma:** Subjunctive field shows indicative past.
**Audita pamatojums:** Copied indicative; subjunctive needs ville + infinitive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 374

**Audit ID:** DA-VERB-0374
**Verb/Card ID:** `verb-117`
**ID / path:** `verb-117.partizipVergangenheit`
**DE (read-only):** geschnaubt vai geschnoben
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fnyse
**PROPOSED_DA:** Fnyset
**Problēma:** Infinitive instead of participle.
**Audita pamatojums:** 'Fnyse' is infinitive; participle needed.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 375

**Audit ID:** DA-VERB-0375
**Verb/Card ID:** `verb-117`
**ID / path:** `verb-117.praesens`
**DE (read-only):** er schnaubt
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fnyser han
**PROPOSED_DA:** Han fnyser
**Problēma:** Unnatural word order.
**Audita pamatojums:** Inverted word order; Danish teaching form uses Han + verb.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 376

**Audit ID:** DA-VERB-0376
**Verb/Card ID:** `verb-118`
**ID / path:** `verb-118.infinitiv`
**DE (read-only):** schneiden
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Griezt
**PROPOSED_DA:** At skære
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Griezt' is not Danish; schneiden = cut.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 377

**Audit ID:** DA-VERB-0377
**Verb/Card ID:** `verb-118`
**ID / path:** `verb-118.partizipVergangenheit`
**DE (read-only):** geschnitten
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Griezts
**PROPOSED_DA:** Skåret
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Griezts' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 378

**Audit ID:** DA-VERB-0378
**Verb/Card ID:** `verb-118`
**ID / path:** `verb-118.praesens`
**DE (read-only):** er schneidet
**Severity:** CRITICAL
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han spinder
**PROPOSED_DA:** Han skærer
**Problēma:** Wrong verb entirely.
**Audita pamatojums:** 'Han spinder' means spin; schneidet = cuts.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 379

**Audit ID:** DA-VERB-0379
**Verb/Card ID:** `verb-119`
**ID / path:** `verb-119.praesens`
**DE (read-only):** er schreibt
**Severity:** LOW
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skriver han
**PROPOSED_DA:** Han skriver
**Problēma:** Inverted word order.
**Audita pamatojums:** Inverted order acceptable but project convention prefers Han + verb.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 380

**Audit ID:** DA-VERB-0380
**Verb/Card ID:** `verb-120`
**ID / path:** `verb-120.infinitiv`
**DE (read-only):** schreien
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kliegt
**PROPOSED_DA:** At skrige
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Kliegt' is not Danish; schreien = shout/scream.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 381

**Audit ID:** DA-VERB-0381
**Verb/Card ID:** `verb-120`
**ID / path:** `verb-120.partizipVergangenheit`
**DE (read-only):** geschrien
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kliegts
**PROPOSED_DA:** Skreget
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Kliegts' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 382

**Audit ID:** DA-VERB-0382
**Verb/Card ID:** `verb-121`
**ID / path:** `verb-121.infinitiv`
**DE (read-only):** schreiten
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Gå
**PROPOSED_DA:** At skride
**Problēma:** Generic verb instead of specific translation.
**Audita pamatojums:** 'Gå' is generic walk; schreiten = stride/march (formal).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 383

**Audit ID:** DA-VERB-0383
**Verb/Card ID:** `verb-121`
**ID / path:** `verb-121.partizipVergangenheit`
**DE (read-only):** geschritten (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Gik
**PROPOSED_DA:** Skredet
**Problēma:** Past tense instead of participle.
**Audita pamatojums:** 'Gik' is past tense; participle of skride is skredet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 384

**Audit ID:** DA-VERB-0384
**Verb/Card ID:** `verb-122`
**ID / path:** `verb-122.infinitiv`
**DE (read-only):** schweigen
**Severity:** MEDIUM
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tie stille
**PROPOSED_DA:** At tie
**Problēma:** Malformed infinitive.
**Audita pamatojums:** Typo/missing infinitive marker: 'Tie stille' → 'At tie'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 385

**Audit ID:** DA-VERB-0385
**Verb/Card ID:** `verb-122`
**ID / path:** `verb-122.praesens`
**DE (read-only):** er schweigt
**Severity:** MEDIUM
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han er tavs
**PROPOSED_DA:** Han tier
**Problēma:** Adjective phrase instead of finite verb.
**Audita pamatojums:** 'Han er tavs' is adjective (he is silent); schweigt = he keeps silent (verb).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 386

**Audit ID:** DA-VERB-0386
**Verb/Card ID:** `verb-123`
**ID / path:** `verb-123.imperfektIndikativ`
**DE (read-only):** er schwoll
**Severity:** CRITICAL
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han pampas
**PROPOSED_DA:** Det svulmede
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Han pampas' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 387

**Audit ID:** DA-VERB-0387
**Verb/Card ID:** `verb-123`
**ID / path:** `verb-123.imperfektKonjunktiv`
**DE (read-only):** er schwölle
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville pumpe
**PROPOSED_DA:** Det ville svulme
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han ville pumpe' means pump; schwölle = would swell.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 388

**Audit ID:** DA-VERB-0388
**Verb/Card ID:** `verb-123`
**ID / path:** `verb-123.infinitiv`
**DE (read-only):** schwellen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Pampt
**PROPOSED_DA:** At svulme
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Pampt' is not Danish; schwellen = swell.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 389

**Audit ID:** DA-VERB-0389
**Verb/Card ID:** `verb-123`
**ID / path:** `verb-123.partizipVergangenheit`
**DE (read-only):** geschwollen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Pampis
**PROPOSED_DA:** Svulmet
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Pampis' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 390

**Audit ID:** DA-VERB-0390
**Verb/Card ID:** `verb-123`
**ID / path:** `verb-123.praesens`
**DE (read-only):** er schwillt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han tuder
**PROPOSED_DA:** Det svulmer
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han tuder' means wail/cry; schwillt = swells.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 391

**Audit ID:** DA-VERB-0391
**Verb/Card ID:** `verb-124`
**ID / path:** `verb-124.partizipVergangenheit`
**DE (read-only):** geschwommen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Svømmede
**PROPOSED_DA:** Svømmet
**Problēma:** Past tense instead of participle.
**Audita pamatojums:** 'Svømmede' is past tense; participle is svømmet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 392

**Audit ID:** DA-VERB-0392
**Verb/Card ID:** `verb-125`
**ID / path:** `verb-125.infinitiv`
**DE (read-only):** schwinden
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Zust
**PROPOSED_DA:** At forsvinde
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Zust' is not Danish; schwinden = fade/disappear.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 393

**Audit ID:** DA-VERB-0393
**Verb/Card ID:** `verb-125`
**ID / path:** `verb-125.partizipVergangenheit`
**DE (read-only):** geschwunden (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Zudis
**PROPOSED_DA:** Forsvundet
**Problēma:** Gibberish corruption.
**Audita pamatojums:** 'Zudis' is not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 394

**Audit ID:** DA-VERB-0394
**Verb/Card ID:** `verb-126`
**ID / path:** `verb-126.imperfektIndikativ`
**DE (read-only):** er schwang
**Severity:** HIGH
**Field:** `imperfektIndikativ`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han vinkede
**PROPOSED_DA:** Han svingede
**Problēma:** Wrong verb sense.
**Audita pamatojums:** vinkede ≠ schwang (swung).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 395

**Audit ID:** DA-VERB-0395
**Verb/Card ID:** `verb-126`
**ID / path:** `verb-126.imperfektKonjunktiv`
**DE (read-only):** er schwänge
**Severity:** HIGH
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville vinke
**PROPOSED_DA:** Han ville svinge
**Problēma:** Wrong verb sense.
**Audita pamatojums:** Subjunctive preserves wrong wave verb.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 396

**Audit ID:** DA-VERB-0396
**Verb/Card ID:** `verb-126`
**ID / path:** `verb-126.infinitiv`
**DE (read-only):** schwingen
**Severity:** HIGH
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bølge
**PROPOSED_DA:** At svinge
**Problēma:** Noun instead of verb infinitive.
**Audita pamatojums:** 'Bølge' is noun (wave); schwingen = swing.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 397

**Audit ID:** DA-VERB-0397
**Verb/Card ID:** `verb-126`
**ID / path:** `verb-126.partizipVergangenheit`
**DE (read-only):** geschwungen
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Vinkede
**PROPOSED_DA:** Svinget
**Problēma:** Past tense instead of participle.
**Audita pamatojums:** 'Vinkede' is past tense of vinke, not participle of svinge.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 398

**Audit ID:** DA-VERB-0398
**Verb/Card ID:** `verb-126`
**ID / path:** `verb-126.praesens`
**DE (read-only):** er schwingt
**Severity:** HIGH
**Field:** `praesens`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han vinker
**PROPOSED_DA:** Han svinger
**Problēma:** Wrong verb sense.
**Audita pamatojums:** 'Han vinker' = waves (hand); schwingt = swings.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 399

**Audit ID:** DA-VERB-0399
**Verb/Card ID:** `verb-127`
**ID / path:** `verb-127.imperfektKonjunktiv`
**DE (read-only):** er schwöre
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville bande
**PROPOSED_DA:** Han ville sværge
**Problēma:** Semantic nuance mismatch.
**Audita pamatojums:** 'bande' is curse/swear obscenely; schwören = swear an oath (sværge).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 400

**Audit ID:** DA-VERB-0400
**Verb/Card ID:** `verb-128`
**ID / path:** `verb-128.partizipVergangenheit`
**DE (read-only):** gesehen
**Severity:** MEDIUM
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Set
**PROPOSED_DA:** Set
**Problēma:** Participle form underspecified.
**Audita pamatojums:** 'Set' is ambiguous/noun-like; standard participle of se is set (or 'set' as adj). Acceptable but 'set' as sole form is thin.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
