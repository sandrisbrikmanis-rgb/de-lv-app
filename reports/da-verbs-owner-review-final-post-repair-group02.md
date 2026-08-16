# DA–DE Verbs — OWNER review Group 02

Avots: [da-verbs-final-post-repair-audit.md](./da-verbs-final-post-repair-audit.md)
Findings: **51–64** (14 ieraksti)
Fails: `reports/da-verbs-owner-review-final-post-repair-group02.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1

**Audit ID:** DA-VERB-FPR-0051
**Verb/Card ID:** `verb-127`
**ID / path:** `verb-127.infinitiv.lv`
**DE (read-only):** schwören
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At bande
**PROPOSED_DA:** At sværge
**Problēma:** Inconsistent verb stem within schwören card.
**Audita pamatojums:** Infinitiv uses bande (curse/profanity) but all conjugated forms use sværge (swear an oath). schwören primarily maps to sværge in Danish.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-VERB-FPR-0052
**Verb/Card ID:** `verb-134`
**ID / path:** `verb-134.imperfektKonjunktiv.lv`
**DE (read-only):** er sönne / er sänne
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ville han undre sig
**PROPOSED_DA:** Han ville grunde over
**Problēma:** Semantic mismatch on sinnen card.
**Audita pamatojums:** sinnen means ponder/reflect (grunde over). undre sig means wonder/be surprised — a different verb and meaning. Konjunktiv II should follow grunde over (Han ville grunde over).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-VERB-FPR-0053
**Verb/Card ID:** `verb-139`
**ID / path:** `verb-139.praesens.lv`
**DE (read-only):** er spleißt
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han forbinder
**PROPOSED_DA:** Han splejser
**Problēma:** Inconsistent verb stem within spleißen card.
**Audita pamatojums:** Infinitiv is At splejse (splice, e.g. cables/fibers) but present uses generic forbinde (connect). spleißen in technical use maps to splejse throughout.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-VERB-FPR-0054
**Verb/Card ID:** `verb-142`
**ID / path:** `verb-142.imperfektIndikativ.lv`
**DE (read-only):** er sprang
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han sprang
**PROPOSED_DA:** Han hoppede
**Problēma:** Inconsistent verb stem within springen card.
**Audita pamatojums:** Infinitiv, present, Konjunktiv II, and participle use hoppe (Han hopper / Han ville hoppe / Hoppet), but preterite uses sprang from springe. Preterite of hoppe is Han hoppede.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-VERB-FPR-0055
**Verb/Card ID:** `verb-145`
**ID / path:** `verb-145.partizipVergangenheit.lv`
**DE (read-only):** gestanden
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Stående
**PROPOSED_DA:** Stået
**Problēma:** Wrong part-of-speech for past participle.
**Audita pamatojums:** Stående is a present participle/adjective ('standing'), not the past participle of stå. gestanden maps to Stået (havde stået).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-VERB-FPR-0056
**Verb/Card ID:** `verb-147`
**ID / path:** `verb-147.partizipVergangenheit.lv`
**DE (read-only):** gestiegen (er ist)
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Steget
**PROPOSED_DA:** Klatret
**Problēma:** Inconsistent verb stem within steigen card.
**Audita pamatojums:** Infinitiv, present, and preterite use klatre (Han klatrer / Han klatrede), but participle uses Steget from stige. Participle of klatre is Klatret.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-VERB-FPR-0057
**Verb/Card ID:** `verb-155`
**ID / path:** `verb-155.imperfektKonjunktiv.lv`
**DE (read-only):** er träfe
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville støde på
**PROPOSED_DA:** Han ville møde
**Problēma:** Inconsistent verb lemma within treffen card.
**Audita pamatojums:** Infinitiv, Präsens, Präteritum, and Partizip II all use møde (møder / mødte / Mødt), but Konjunktiv II uses støde på (encounter). After owner repair aligned past to mødte, Konjunktiv II remains on a different verb.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-VERB-FPR-0058
**Verb/Card ID:** `verb-161`
**ID / path:** `verb-161.imperfektIndikativ.lv`
**DE (read-only):** er verdarb
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han beskadigede
**PROPOSED_DA:** Han ødelagde
**Problēma:** Mixed verb stems within verderben card.
**Audita pamatojums:** Infinitiv and Präsens use ødelægge/ødelægger (ruin/destroy), but Präteritum uses beskadigede from beskadige (damage). Learners cannot derive one Danish paradigm for verderben.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-VERB-FPR-0059
**Verb/Card ID:** `verb-161`
**ID / path:** `verb-161.imperfektKonjunktiv.lv`
**DE (read-only):** er verdürbe
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville skade
**PROPOSED_DA:** Han ville ødelægge
**Problēma:** Mixed verb stems within verderben card.
**Audita pamatojums:** Konjunktiv II uses skade (harm) while infinitiv is At ødelægge and Präsens is ødelægger. Conditional should mirror the same lemma as the rest of the card.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-VERB-FPR-0060
**Verb/Card ID:** `verb-161`
**ID / path:** `verb-161.partizipVergangenheit.lv`
**DE (read-only):** verdorben
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Beskadiget
**PROPOSED_DA:** Ødelagt
**Problēma:** Participle from wrong verb stem.
**Audita pamatojums:** Beskadiget is the participle of beskadige, not ødelægge. verdorben maps to ødelægge; standard participle is Ødelagt.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-VERB-FPR-0061
**Verb/Card ID:** `verb-165`
**ID / path:** `verb-165.imperfektIndikativ.lv`
**DE (read-only):** er wuchs
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han voksede op
**PROPOSED_DA:** Han voksede
**Problēma:** Added auf sense not present in German source.
**Audita pamatojums:** er wuchs means he grew; voksede op specifically means grew up (aufwachsen). Präsens and other forms use plain vokse without op.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-VERB-FPR-0062
**Verb/Card ID:** `verb-172`
**ID / path:** `verb-172.partizipVergangenheit.lv`
**DE (read-only):** geworden
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Er blevet
**PROPOSED_DA:** Blevet
**Problēma:** Participle field includes auxiliary verb.
**Audita pamatojums:** All other cards store bare participles (Gjort, Blevet, Vokset). geworden → blevet; the auxiliary er is not used on other sein-auxiliary German verbs in this set (e.g. verb-165 Vokset, verb-168 Viget).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-VERB-FPR-0063
**Verb/Card ID:** `verb-179`
**ID / path:** `verb-179.praesens.lv`
**DE (read-only):** er zeiht
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han giver skylden
**PROPOSED_DA:** Han bebrejder
**Problēma:** Present form uses different lemma than rest of card.
**Audita pamatojums:** Infinitiv is At bebrejde and Präteritum/Konjunktiv use bebrejde/bebrejdede, but Präsens is an idiomatic phrase with giver (give). Learners cannot conjugate one verb across all forms.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-VERB-FPR-0064
**Verb/Card ID:** `verb-183`
**ID / path:** `verb-183.imperfektKonjunktiv.lv`
**DE (read-only):** er erwöge
**Severity:** MEDIUM
**Category:** GRAMMAR
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ville han overveje
**PROPOSED_DA:** Han ville overveje
**Problēma:** Inverted word order in Konjunktiv II field.
**Audita pamatojums:** Standard er-form cards use subject-first conditional (Han ville overveje). Präsens and Präteritum on this card were owner-repaired to Han overvejer / Han overvejede; Konjunktiv II still uses inverted Ville han overveje.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---
