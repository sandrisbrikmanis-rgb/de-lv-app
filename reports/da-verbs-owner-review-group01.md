# DA–DE Verbs — OWNER review Group 01

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **1–50** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group01.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1

**Audit ID:** DA-VERB-0001
**Verb/Card ID:** `verb-0`
**ID / path:** `verb-0.infinitiv.lv`
**DE (read-only):** backen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cept
**PROPOSED_DA:** (Natural Danish)
**Problēma:** Foreign remnant: LV
**Audita pamatojums:** DA must be natural Danish without foreign fragments
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-VERB-0002
**Verb/Card ID:** `verb-0`
**ID / path:** `verb-0.infinitiv.lv`
**DE (read-only):** backen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cept
**PROPOSED_DA:** At bage
**Problēma:** Latvian infinitive remnant (cept); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (cept); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-VERB-0003
**Verb/Card ID:** `verb-0`
**ID / path:** `verb-0.partizipVergangenheit.lv`
**DE (read-only):** gebacken
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cepts / izcepts
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-VERB-0004
**Verb/Card ID:** `verb-0`
**ID / path:** `verb-0.partizipVergangenheit.lv`
**DE (read-only):** gebacken
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cepts / izcepts
**PROPOSED_DA:** (Danish past participle)
**Problēma:** Possible LV-style participle remnant in Partizip II field
**Audita pamatojums:** Partizip II should use Danish participle forms
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-VERB-0005
**Verb/Card ID:** `verb-0`
**ID / path:** `verb-0.partizipVergangenheit.lv`
**DE (read-only):** gebacken
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Cepts / izcepts
**PROPOSED_DA:** Bagt
**Problēma:** Latvian participle forms with multi-variant chain; needs single Danish past participle.
**Audita pamatojums:** Latvian participle forms with multi-variant chain; needs single Danish past participle.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-VERB-0006
**Verb/Card ID:** `verb-1`
**ID / path:** `verb-1.partizipVergangenheit.lv`
**DE (read-only):** befohlen
**Severity:** MEDIUM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kommanderede
**PROPOSED_DA:** Kommanderet
**Problēma:** Preterite form given where past participle is required.
**Audita pamatojums:** Preterite form given where past participle is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-VERB-0007
**Verb/Card ID:** `verb-2`
**ID / path:** `verb-2.partizipVergangenheit.lv`
**DE (read-only):** begonnen
**Severity:** MEDIUM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Startede
**PROPOSED_DA:** Startet
**Problēma:** Preterite form given where past participle is required.
**Audita pamatojums:** Preterite form given where past participle is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-VERB-0008
**Verb/Card ID:** `verb-3`
**ID / path:** `verb-3.imperfektIndikativ.lv`
**DE (read-only):** er biss
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kodede
**PROPOSED_DA:** Han bed
**Problēma:** Wrong verb entirely (kodede = coded); does not translate beißen.
**Audita pamatojums:** Wrong verb entirely (kodede = coded); does not translate beißen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-VERB-0009
**Verb/Card ID:** `verb-3`
**ID / path:** `verb-3.imperfektKonjunktiv.lv`
**DE (read-only):** er bisse
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bider
**PROPOSED_DA:** Han ville bide
**Problēma:** Present tense given where Konjunktiv II (ville + infinitive) is required.
**Audita pamatojums:** Present tense given where Konjunktiv II (ville + infinitive) is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-VERB-0010
**Verb/Card ID:** `verb-3`
**ID / path:** `verb-3.infinitiv.lv`
**DE (read-only):** beißen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kost
**PROPOSED_DA:** At bide
**Problēma:** Latvian infinitive remnant (kost); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (kost); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-VERB-0011
**Verb/Card ID:** `verb-3`
**ID / path:** `verb-3.partizipVergangenheit.lv`
**DE (read-only):** gebissen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kosts / sakosts
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-VERB-0012
**Verb/Card ID:** `verb-3`
**ID / path:** `verb-3.partizipVergangenheit.lv`
**DE (read-only):** gebissen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kosts / sakosts
**PROPOSED_DA:** (Danish past participle)
**Problēma:** Possible LV-style participle remnant in Partizip II field
**Audita pamatojums:** Partizip II should use Danish participle forms
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-VERB-0013
**Verb/Card ID:** `verb-3`
**ID / path:** `verb-3.partizipVergangenheit.lv`
**DE (read-only):** gebissen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kosts / sakosts
**PROPOSED_DA:** Bidt
**Problēma:** Latvian participle forms with multi-variant chain; not Danish.
**Audita pamatojums:** Latvian participle forms with multi-variant chain; not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-VERB-0014
**Verb/Card ID:** `verb-4`
**ID / path:** `verb-4.partizipVergangenheit.lv`
**DE (read-only):** geborgen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skjult / gemt
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-VERB-0015
**Verb/Card ID:** `verb-4`
**ID / path:** `verb-4.partizipVergangenheit.lv`
**DE (read-only):** geborgen
**Severity:** MEDIUM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skjult / gemt
**PROPOSED_DA:** Gemt
**Problēma:** Multi-variant translation chain; card should use one teaching form.
**Audita pamatojums:** Multi-variant translation chain; card should use one teaching form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-VERB-0016
**Verb/Card ID:** `verb-5`
**ID / path:** `verb-5.imperfektKonjunktiv.lv`
**DE (read-only):** er bärste / er börste
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Brister han
**PROPOSED_DA:** Han ville briste
**Problēma:** Present tense given where Konjunktiv II is required.
**Audita pamatojums:** Present tense given where Konjunktiv II is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-VERB-0017
**Verb/Card ID:** `verb-6`
**ID / path:** `verb-6.imperfektIndikativ.lv`
**DE (read-only):** er bewog
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Opfordrede han
**PROPOSED_DA:** Han bevægede
**Problēma:** Opfordrede means urged; does not translate bewog (moved).
**Audita pamatojums:** Opfordrede means urged; does not translate bewog (moved).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-VERB-0018
**Verb/Card ID:** `verb-6`
**ID / path:** `verb-6.imperfektKonjunktiv.lv`
**DE (read-only):** er bewöge
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville opmuntre
**PROPOSED_DA:** Han ville bevæge
**Problēma:** opmuntre (encourage) does not match bewöge (would move).
**Audita pamatojums:** opmuntre (encourage) does not match bewöge (would move).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-VERB-0019
**Verb/Card ID:** `verb-6`
**ID / path:** `verb-6.infinitiv.lv`
**DE (read-only):** bewegen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At opmuntre
**PROPOSED_DA:** At bevæge
**Problēma:** bewegen means to move; opmuntre means to encourage — wrong verb meaning.
**Audita pamatojums:** bewegen means to move; opmuntre means to encourage — wrong verb meaning.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-VERB-0020
**Verb/Card ID:** `verb-6`
**ID / path:** `verb-6.partizipVergangenheit.lv`
**DE (read-only):** bewogen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Opmuntret
**PROPOSED_DA:** Bevæget
**Problēma:** Opmuntret (encouraged) does not translate bewogen (moved).
**Audita pamatojums:** Opmuntret (encouraged) does not translate bewogen (moved).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-VERB-0021
**Verb/Card ID:** `verb-6`
**ID / path:** `verb-6.praesens.lv`
**DE (read-only):** er bewegt
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Spørger han
**PROPOSED_DA:** Han bevæger
**Problēma:** Spørger means asks; does not translate bewegt (moves).
**Audita pamatojums:** Spørger means asks; does not translate bewegt (moves).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-VERB-0022
**Verb/Card ID:** `verb-8`
**ID / path:** `verb-8.partizipVergangenheit.lv`
**DE (read-only):** geboten
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lovet / tilbudt
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-VERB-0023
**Verb/Card ID:** `verb-8`
**ID / path:** `verb-8.partizipVergangenheit.lv`
**DE (read-only):** geboten
**Severity:** MEDIUM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lovet / tilbudt
**PROPOSED_DA:** Tilbudt
**Problēma:** Multi-variant chain; bieten as offer needs one participle form.
**Audita pamatojums:** Multi-variant chain; bieten as offer needs one participle form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-VERB-0024
**Verb/Card ID:** `verb-9`
**ID / path:** `verb-9.imperfektIndikativ.lv`
**DE (read-only):** er band
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han såede
**PROPOSED_DA:** Han bandt
**Problēma:** såede (sowed) is wrong verb; does not translate band (bound).
**Audita pamatojums:** såede (sowed) is wrong verb; does not translate band (bound).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-VERB-0025
**Verb/Card ID:** `verb-9`
**ID / path:** `verb-9.imperfektKonjunktiv.lv`
**DE (read-only):** er bände
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han sigtede
**PROPOSED_DA:** Han ville binde
**Problēma:** sigtede (aimed) is wrong verb; does not translate bände.
**Audita pamatojums:** sigtede (aimed) is wrong verb; does not translate bände.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-VERB-0026
**Verb/Card ID:** `verb-9`
**ID / path:** `verb-9.infinitiv.lv`
**DE (read-only):** binden
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sit
**PROPOSED_DA:** At binde
**Problēma:** Latvian infinitive remnant (siet); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (siet); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-VERB-0027
**Verb/Card ID:** `verb-9`
**ID / path:** `verb-9.partizipVergangenheit.lv`
**DE (read-only):** gebunden
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Siets
**PROPOSED_DA:** Bundet
**Problēma:** Latvian participle remnant (siets); not Danish.
**Audita pamatojums:** Latvian participle remnant (siets); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-VERB-0028
**Verb/Card ID:** `verb-9`
**ID / path:** `verb-9.praesens.lv`
**DE (read-only):** er bindet
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han hø
**PROPOSED_DA:** Han binder
**Problēma:** Truncated/garbled form; does not translate bindet.
**Audita pamatojums:** Truncated/garbled form; does not translate bindet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-VERB-0029
**Verb/Card ID:** `verb-10`
**ID / path:** `verb-10.imperfektIndikativ.lv`
**DE (read-only):** er bat
**Severity:** MEDIUM
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Spurgte han
**PROPOSED_DA:** Han bad
**Problēma:** Inconsistent with praesens 'tigger' (beg); spurgte means asked, not begged.
**Audita pamatojums:** Inconsistent with praesens 'tigger' (beg); spurgte means asked, not begged.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** DA-VERB-0030
**Verb/Card ID:** `verb-10`
**ID / path:** `verb-10.partizipVergangenheit.lv`
**DE (read-only):** gebeten
**Severity:** MEDIUM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Anmodet om
**PROPOSED_DA:** Bedet
**Problēma:** Prepositional phrase given where past participle is required.
**Audita pamatojums:** Prepositional phrase given where past participle is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** DA-VERB-0031
**Verb/Card ID:** `verb-12`
**ID / path:** `verb-12.imperfektIndikativ.lv`
**DE (read-only):** es gor / es gärte
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det gærer
**PROPOSED_DA:** Det gærede
**Problēma:** Present tense repeated for past tense slot.
**Audita pamatojums:** Present tense repeated for past tense slot.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** DA-VERB-0032
**Verb/Card ID:** `verb-12`
**ID / path:** `verb-12.imperfektKonjunktiv.lv`
**DE (read-only):** es göre / es gärte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det ville være bittert
**PROPOSED_DA:** Det ville gære
**Problēma:** Completely wrong meaning (would be bitter); does not translate gären subjunctive.
**Audita pamatojums:** Completely wrong meaning (would be bitter); does not translate gären subjunctive.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** DA-VERB-0033
**Verb/Card ID:** `verb-12`
**ID / path:** `verb-12.partizipVergangenheit.lv`
**DE (read-only):** gegoren / gegärt
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Rug
**PROPOSED_DA:** Gæret
**Problēma:** Rug is a noun (rye); not a past participle for gären.
**Audita pamatojums:** Rug is a noun (rye); not a past participle for gären.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** DA-VERB-0034
**Verb/Card ID:** `verb-13`
**ID / path:** `verb-13.partizipVergangenheit.lv`
**DE (read-only):** geboren
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Født / blev født
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** DA-VERB-0035
**Verb/Card ID:** `verb-13`
**ID / path:** `verb-13.partizipVergangenheit.lv`
**DE (read-only):** geboren
**Severity:** MEDIUM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Født / blev født
**PROPOSED_DA:** Født
**Problēma:** Multi-variant translation chain; card should use one teaching form.
**Audita pamatojums:** Multi-variant translation chain; card should use one teaching form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** DA-VERB-0036
**Verb/Card ID:** `verb-13`
**ID / path:** `verb-13.praesens.lv`
**DE (read-only):** sie gebiert
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** I hendes mave
**PROPOSED_DA:** Hun føder
**Problēma:** Prepositional phrase, not a conjugated verb form.
**Audita pamatojums:** Prepositional phrase, not a conjugated verb form.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** DA-VERB-0037
**Verb/Card ID:** `verb-14`
**ID / path:** `verb-14.imperfektIndikativ.lv`
**DE (read-only):** es gelang
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det virkede
**PROPOSED_DA:** Det lykkedes
**Problēma:** virkede (worked) does not capture gelangen (to succeed).
**Audita pamatojums:** virkede (worked) does not capture gelangen (to succeed).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** DA-VERB-0038
**Verb/Card ID:** `verb-14`
**ID / path:** `verb-14.imperfektKonjunktiv.lv`
**DE (read-only):** es gelänge
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tas izdotos
**PROPOSED_DA:** Det ville lykkes
**Problēma:** Latvian subjunctive form (tas izdotos); not Danish.
**Audita pamatojums:** Latvian subjunctive form (tas izdotos); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** DA-VERB-0039
**Verb/Card ID:** `verb-14`
**ID / path:** `verb-14.infinitiv.lv`
**DE (read-only):** gelingen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izdoties
**PROPOSED_DA:** At lykkes
**Problēma:** Latvian infinitive remnant (izdoties); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (izdoties); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** DA-VERB-0040
**Verb/Card ID:** `verb-14`
**ID / path:** `verb-14.partizipVergangenheit.lv`
**DE (read-only):** gelungen (es ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izdevies
**PROPOSED_DA:** Lykkedes
**Problēma:** Latvian participle remnant (izdevies); not Danish.
**Audita pamatojums:** Latvian participle remnant (izdevies); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** DA-VERB-0041
**Verb/Card ID:** `verb-14`
**ID / path:** `verb-14.praesens.lv`
**DE (read-only):** es gelingt
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tas izdodas
**PROPOSED_DA:** Det lykkes
**Problēma:** Latvian present form (tas izdodas); not Danish.
**Audita pamatojums:** Latvian present form (tas izdodas); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** DA-VERB-0042
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.imperfektIndikativ.lv`
**DE (read-only):** er galt
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han passede / var fit
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** DA-VERB-0043
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.imperfektIndikativ.lv`
**DE (read-only):** er galt
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han passede / var fit
**PROPOSED_DA:** Det gjaldt
**Problēma:** English remnant 'fit' and wrong construction; gelten is impersonal.
**Audita pamatojums:** English remnant 'fit' and wrong construction; gelten is impersonal.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** DA-VERB-0044
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.imperfektKonjunktiv.lv`
**DE (read-only):** er gölte / es gälte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville passe / det ville passe
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** DA-VERB-0045
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.imperfektKonjunktiv.lv`
**DE (read-only):** er gölte / es gälte
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville passe / det ville passe
**PROPOSED_DA:** Det ville gælde
**Problēma:** Multi-variant chain; gelten subjunctive is impersonal.
**Audita pamatojums:** Multi-variant chain; gelten subjunctive is impersonal.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** DA-VERB-0046
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.partizipVergangenheit.lv`
**DE (read-only):** gegolten
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Anvendt / var gyldig
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** DA-VERB-0047
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.partizipVergangenheit.lv`
**DE (read-only):** gegolten
**Severity:** MEDIUM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Anvendt / var gyldig
**PROPOSED_DA:** Gået
**Problēma:** Multi-variant chain; neither form is a natural Danish participle for gegolten.
**Audita pamatojums:** Multi-variant chain; neither form is a natural Danish participle for gegolten.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** DA-VERB-0048
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.praesens.lv`
**DE (read-only):** er gilt
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han passer / er gyldig
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** DA-VERB-0049
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.praesens.lv`
**DE (read-only):** er gilt
**Severity:** MEDIUM
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han passer / er gyldig
**PROPOSED_DA:** Det gælder
**Problēma:** Multi-variant chain; gelten is impersonal (es gilt) — not 'han passer'.
**Audita pamatojums:** Multi-variant chain; gelten is impersonal (es gilt) — not 'han passer'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** DA-VERB-0050
**Verb/Card ID:** `verb-16`
**ID / path:** `verb-16.partizipVergangenheit.lv`
**DE (read-only):** genesen (er ist)
**Severity:** MEDIUM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Blive rask
**PROPOSED_DA:** Blevet rask
**Problēma:** Infinitive phrase given where past participle is required.
**Audita pamatojums:** Infinitive phrase given where past participle is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
