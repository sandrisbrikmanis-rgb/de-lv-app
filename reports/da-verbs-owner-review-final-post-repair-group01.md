# DA–DE Verbs — OWNER review Group 01

Avots: [da-verbs-final-post-repair-audit.md](./da-verbs-final-post-repair-audit.md)
Findings: **1–50** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-final-post-repair-group01.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1

**Audit ID:** DA-VERB-FPR-0001
**Verb/Card ID:** `verb-2`
**ID / path:** `verb-2.imperfektIndikativ.lv`
**DE (read-only):** er begann
**Severity:** HIGH
**Category:** PARADIGM
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Begyndte han
**PROPOSED_DA:** Han startede
**Problēma:** Mixed verb stems within paradigm
**Audita pamatojums:** Infinitive and other forms use 'starte' (starter, ville starte, Startet), but preterite uses 'begyndte' from a different verb (begynde). Paradigm must stay on one stem.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-VERB-FPR-0002
**Verb/Card ID:** `verb-4`
**ID / path:** `verb-4.partizipVergangenheit.lv`
**DE (read-only):** geborgen
**Severity:** MEDIUM
**Category:** PARADIGM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Bjærget
**PROPOSED_DA:** Gemt
**Problēma:** Participle from different verb than rest of card
**Audita pamatojums:** Present, preterite, and subjunctive use 'gemme sig' (hide), but the participle 'Bjærget' belongs to 'bjærge' (rescue). Participle should match the chosen paradigm: 'Gemt' or 'Skjult'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-VERB-FPR-0003
**Verb/Card ID:** `verb-5`
**ID / path:** `verb-5.imperfektIndikativ.lv`
**DE (read-only):** er barst / er borst
**Severity:** MEDIUM
**Category:** PARADIGM
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Brød han ud
**PROPOSED_DA:** Han bristede
**Problēma:** Preterite from wrong verb stem
**Audita pamatojums:** Card infinitive is 'Briste' (burst) with present 'Brister han', but preterite uses 'brød' from 'bryde' (break) in a phrasal idiom. Standard preterite of briste is 'bristede'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-VERB-FPR-0004
**Verb/Card ID:** `verb-5`
**ID / path:** `verb-5.partizipVergangenheit.lv`
**DE (read-only):** geborsten (er ist)
**Severity:** HIGH
**Category:** PARADIGM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Brudt
**PROPOSED_DA:** Bristet
**Problēma:** Wrong past participle for infinitive stem
**Audita pamatojums:** 'Brudt' is the participle of 'bryde' (break), not 'briste' (burst). For bersten the participle should be 'Bristet'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-VERB-FPR-0005
**Verb/Card ID:** `verb-8`
**ID / path:** `verb-8.partizipVergangenheit.lv`
**DE (read-only):** geboten
**Severity:** MEDIUM
**Category:** PARADIGM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tilbudt
**PROPOSED_DA:** Lovet
**Problēma:** Participle from different verb than rest of card
**Audita pamatojums:** Infinitive through subjunctive consistently use 'love' (promise: Lover, Lovede, ville love), but participle 'Tilbudt' is from 'tilbyde' (offer). Should be 'Lovet' to match the paradigm.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-VERB-FPR-0006
**Verb/Card ID:** `verb-10`
**ID / path:** `verb-10.infinitiv.lv`
**DE (read-only):** bitten
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At spørge
**PROPOSED_DA:** At bede
**Problēma:** Wrong verb meaning in infinitive
**Audita pamatojums:** bitten means to beg/request, not to ask (spørge). The rest of the card correctly uses beg semantics (tigger, bad, ville bede, Bedt). Infinitive should align.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-VERB-FPR-0007
**Verb/Card ID:** `verb-15`
**ID / path:** `verb-15.infinitiv.lv`
**DE (read-only):** gelten
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Komme til nytte
**PROPOSED_DA:** At gælde
**Problēma:** Infinitive does not match paradigm verb
**Audita pamatojums:** All other forms use 'gælde' (Det gælder, Det gjaldt, Det ville gælde, Gældt). The infinitive phrase 'Komme til nytte' introduces a different construction and verb entirely.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-VERB-FPR-0008
**Verb/Card ID:** `verb-24`
**ID / path:** `verb-24.partizipVergangenheit.lv`
**DE (read-only):** gegriffen
**Severity:** MEDIUM
**Category:** PARADIGM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Grebet
**PROPOSED_DA:** Fanget
**Problēma:** Participle from different verb than rest of card
**Audita pamatojums:** Infinitive through subjunctive use 'fange' (catch: fanger, fangede, ville fange), but participle 'Grebet' is from 'gribe' (grasp/seize), which better matches greifen. Participle should be 'Fanget' to match the paradigm.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-VERB-FPR-0009
**Verb/Card ID:** `verb-29`
**ID / path:** `verb-29.imperfektIndikativ.lv`
**DE (read-only):** er kniff
**Severity:** MEDIUM
**Category:** GRAMMAR
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han knibede
**PROPOSED_DA:** Han knib
**Problēma:** Non-standard preterite form
**Audita pamatojums:** Danish strong verb 'knibe' has preterite 'knib', not the regularised 'knibede'. Standard paradigm: kniber, knib, knibet.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-VERB-FPR-0010
**Verb/Card ID:** `verb-32`
**ID / path:** `verb-32.praesens.lv`
**DE (read-only):** er brät
**Severity:** HIGH
**Category:** PARADIGM
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bager
**PROPOSED_DA:** Han steger
**Problēma:** Present tense from wrong verb stem
**Audita pamatojums:** Infinitive is 'At stege' (roast/fry) but present uses 'bager' from 'bage' (bake). braten means to roast/fry, not bake.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-VERB-FPR-0011
**Verb/Card ID:** `verb-32`
**ID / path:** `verb-32.imperfektIndikativ.lv`
**DE (read-only):** er briet
**Severity:** HIGH
**Category:** PARADIGM
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bagte
**PROPOSED_DA:** Han stegte
**Problēma:** Preterite from wrong verb stem
**Audita pamatojums:** Uses 'bagte' (baked) instead of preterite of 'stege'. Should be 'stegte' to match infinitive 'At stege'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-VERB-FPR-0012
**Verb/Card ID:** `verb-32`
**ID / path:** `verb-32.imperfektKonjunktiv.lv`
**DE (read-only):** er briete
**Severity:** HIGH
**Category:** PARADIGM
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville bage
**PROPOSED_DA:** Han ville stege
**Problēma:** Subjunctive uses wrong verb stem
**Audita pamatojums:** Uses 'bage' (bake) instead of 'stege' (roast/fry), inconsistent with infinitive 'At stege' and participle 'Stegt'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-VERB-FPR-0013
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.imperfektKonjunktiv.lv`
**DE (read-only):** er brächte
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville bære
**PROPOSED_DA:** Han ville bringe
**Problēma:** Wrong verb in subjunctive
**Audita pamatojums:** 'bære' means to carry; bringen means to bring. Rest of card uses 'bringe' (bringer, bragte, Bragt). Subjunctive should use 'bringe', not 'bære'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-VERB-FPR-0014
**Verb/Card ID:** `verb-39`
**ID / path:** `verb-39.praesens.lv`
**DE (read-only):** er dringt
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bryder ind
**PROPOSED_DA:** Han trænger ind
**Problēma:** Present uses different verb than infinitive
**Audita pamatojums:** Infinitive and participle use 'trænge ind' (penetrate), but present uses 'bryde ind' (break in). dringen means to penetrate/press through; forms should stay on one verb.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-VERB-FPR-0015
**Verb/Card ID:** `verb-39`
**ID / path:** `verb-39.imperfektIndikativ.lv`
**DE (read-only):** er drang
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han brød ind
**PROPOSED_DA:** Han trængte ind
**Problēma:** Preterite uses different verb than infinitive
**Audita pamatojums:** Uses 'brød ind' (broke in) from 'bryde' instead of preterite of 'trænge ind'. Should be 'trængte ind' to match infinitive 'At trænge ind'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-VERB-FPR-0016
**Verb/Card ID:** `verb-39`
**ID / path:** `verb-39.imperfektKonjunktiv.lv`
**DE (read-only):** er dränge
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville bryde ind
**PROPOSED_DA:** Han ville trænge ind
**Problēma:** Subjunctive uses different verb than infinitive
**Audita pamatojums:** Uses 'bryde ind' instead of 'trænge ind', inconsistent with infinitive and participle on the same card.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-VERB-FPR-0017
**Verb/Card ID:** `verb-40`
**ID / path:** `verb-40.infinitiv.lv`
**DE (read-only):** dünken
**Severity:** MEDIUM
**Category:** GRAMMAR
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det ser ud til
**PROPOSED_DA:** At synes
**Problēma:** Periphrastic phrase instead of infinitive
**Audita pamatojums:** Infinitive slot requires a verb form. 'Det ser ud til' is an impersonal periphrasis, not an infinitive. Danish infinitive for dünken (to seem) should be 'At synes' or similar verb form.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-VERB-FPR-0018
**Verb/Card ID:** `verb-40`
**ID / path:** `verb-40.praesens.lv`
**DE (read-only):** es dünkt
**Severity:** MEDIUM
**Category:** GRAMMAR
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det ser ud til
**PROPOSED_DA:** Det synes
**Problēma:** Periphrastic phrase instead of conjugated present
**Audita pamatojums:** Present-tense slot requires a conjugated verb. 'Det ser ud til' is a fixed impersonal phrase without finite verb inflection matching es dünkt.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-VERB-FPR-0019
**Verb/Card ID:** `verb-41`
**ID / path:** `verb-41.imperfektIndikativ.lv`
**DE (read-only):** durfte
**Severity:** MEDIUM
**Category:** PARADIGM
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Var tilladt
**PROPOSED_DA:** Han måtte
**Problēma:** Passive periphrasis instead of conjugated preterite
**Audita pamatojums:** durfte requires the modal preterite 'måtte' (was allowed to). 'Var tilladt' is a passive adjective phrase, not a conjugated form of the modal verb matching the rest of the paradigm (må, Tilladt).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-VERB-FPR-0020
**Verb/Card ID:** `verb-41`
**ID / path:** `verb-41.imperfektKonjunktiv.lv`
**DE (read-only):** durfte
**Severity:** MEDIUM
**Category:** PARADIGM
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Var tilladt
**PROPOSED_DA:** Han ville få lov
**Problēma:** Passive periphrasis instead of subjunctive form
**Audita pamatojums:** Konjunktiv II of dürfen should render as 'ville må' or 'måtte' depending on context, not the passive 'Var tilladt'. Should align with infinitive 'At få lov' and present 'Han må'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-VERB-FPR-0021
**Verb/Card ID:** `verb-42`
**ID / path:** `verb-42.praesens.lv`
**DE (read-only):** er empfiehlt
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Foreslår han
**PROPOSED_DA:** Han anbefaler
**Problēma:** Wrong verb meaning in present tense
**Audita pamatojums:** empfehlen means to recommend; 'foreslår' means to suggest/propose. Infinitive correctly uses 'At anbefale' (recommend). Present should match.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-VERB-FPR-0022
**Verb/Card ID:** `verb-42`
**ID / path:** `verb-42.imperfektIndikativ.lv`
**DE (read-only):** er empfahl
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Foreslog han
**PROPOSED_DA:** Han anbefalede
**Problēma:** Wrong verb meaning in preterite
**Audita pamatojums:** 'Foreslog' (suggested) does not match empfahl (recommended). Should use preterite of 'anbefale' to stay consistent with infinitive and participle 'Anbefalet'.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-VERB-FPR-0023
**Verb/Card ID:** `verb-42`
**ID / path:** `verb-42.imperfektKonjunktiv.lv`
**DE (read-only):** er empfähle / er empföhle
**Severity:** HIGH
**Category:** GRAMMAR
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han vil anbefale
**PROPOSED_DA:** Han ville anbefale
**Problēma:** Indicative future instead of subjunctive
**Audita pamatojums:** Konjunktiv II requires 'ville' + infinitive, not indicative/future 'vil'. 'Han vil anbefale' is future tense, not subjunctive rendering of er empföhle.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-VERB-FPR-0024
**Verb/Card ID:** `verb-52`
**ID / path:** `verb-52.partizipVergangenheit.lv`
**DE (read-only):** geflohen (er ist)
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Flygtet
**PROPOSED_DA:** Løbet væk
**Problēma:** Inconsistent verb stem within fliehen card.
**Audita pamatojums:** Infinitiv and finite forms use løbe væk (run away) but the participle uses flygte (Flygtet). One German verb needs one Danish lemma across all forms.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-VERB-FPR-0025
**Verb/Card ID:** `verb-57`
**ID / path:** `verb-57.praesens.lv`
**DE (read-only):** er gedeiht
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han lykkes
**PROPOSED_DA:** Han trives
**Problēma:** Inconsistent verb stem within gedeihen card.
**Audita pamatojums:** Infinitiv is At trives but present uses lykkes (succeed). Learners cannot reconcile two different lemmas for one German verb.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-VERB-FPR-0026
**Verb/Card ID:** `verb-57`
**ID / path:** `verb-57.imperfektKonjunktiv.lv`
**DE (read-only):** er gediehe
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville lykkes
**PROPOSED_DA:** Han ville trives
**Problēma:** Inconsistent verb stem within gedeihen card.
**Audita pamatojums:** Konjunktiv II uses lykkes while infinitiv is At trives; align to one stem across the card.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-VERB-FPR-0027
**Verb/Card ID:** `verb-57`
**ID / path:** `verb-57.partizipVergangenheit.lv`
**DE (read-only):** gediehen (er ist)
**Severity:** HIGH
**Category:** PARADIGM
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Trivedes
**PROPOSED_DA:** Trivedet
**Problēma:** Preterite form in participle slot.
**Audita pamatojums:** Trivedes is the preterite/passive of trives, not a past participle. gediehen (sein) requires Trivedet (har trivedet).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-VERB-FPR-0028
**Verb/Card ID:** `verb-75`
**ID / path:** `verb-75.infinitiv.lv`
**DE (read-only):** mahlen
**Severity:** HIGH
**Category:** PARADIGM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Malt
**PROPOSED_DA:** At male
**Problēma:** Past participle used instead of infinitive.
**Audita pamatojums:** Malt is a participle; the infinitiv slot requires At male, matching maler/malede/Malt on this mahlen (grind) card.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-VERB-FPR-0029
**Verb/Card ID:** `verb-81`
**ID / path:** `verb-81.praesens.lv`
**DE (read-only):** er muss
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han har brug for
**PROPOSED_DA:** Han skal
**Problēma:** Semantic mismatch vs German müssen (must).
**Audita pamatojums:** Han har brug for means need; müssen is must/have to. Infinitiv At skulle on this card confirms skulle/må modal, not brug for.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** DA-VERB-FPR-0030
**Verb/Card ID:** `verb-86`
**ID / path:** `verb-86.infinitiv.lv`
**DE (read-only):** preisen
**Severity:** HIGH
**Category:** PARADIGM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ros
**PROPOSED_DA:** At rose
**Problēma:** Noun used instead of verb infinitive.
**Audita pamatojums:** Ros is a noun (praise); infinitiv slot requires the verb At rose, matching roser/rost/rose/Roset on the same card.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** DA-VERB-FPR-0031
**Verb/Card ID:** `verb-88`
**ID / path:** `verb-88.partizipVergangenheit.lv`
**DE (read-only):** geraten
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Foreslået/nævnt
**PROPOSED_DA:** Rådet
**Problēma:** Participle does not match raten/råde paradigm on card.
**Audita pamatojums:** Other forms use råde (At råde, Han råder, Han rådede). Foreslået/nævnt (suggested/mentioned) breaks the lemma and is a slash variant chain.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** DA-VERB-FPR-0032
**Verb/Card ID:** `verb-93`
**ID / path:** `verb-93.praesens.lv`
**DE (read-only):** er riecht
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han lugter
**PROPOSED_DA:** Han kan lugte
**Problēma:** Wrong smell direction for riechen.
**Audita pamatojums:** Han lugter means he emits odor; riechen (er riecht) is perceiving smell. Danish needs kan lugte or an impersonal construction, not subject-emits-odor lugter.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** DA-VERB-FPR-0033
**Verb/Card ID:** `verb-94`
**ID / path:** `verb-94.imperfektIndikativ.lv`
**DE (read-only):** er rang
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han brød sammen
**PROPOSED_DA:** Han kæmpede
**Problēma:** Wrong verb in preterite slot.
**Audita pamatojums:** Han brød sammen is bryde (break/collapse); ringen maps to kæmpe on infinitiv/praesens/participle (At kæmpe, Han kæmper, Kæmpet).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** DA-VERB-FPR-0034
**Verb/Card ID:** `verb-94`
**ID / path:** `verb-94.imperfektKonjunktiv.lv`
**DE (read-only):** er ränge
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville bryde
**PROPOSED_DA:** Han ville kæmpe
**Problēma:** Wrong verb in Konjunktiv II slot.
**Audita pamatojums:** Han ville bryde is bryde; ringen Konjunktiv must use kæmpe to match the rest of the card paradigm.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** DA-VERB-FPR-0035
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.imperfektIndikativ.lv`
**DE (read-only):** er rann
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det flød
**PROPOSED_DA:** Det sivede
**Problēma:** Inconsistent verb stem within rinnen card.
**Audita pamatojums:** Infinitiv At sive and praesens Det siver use sive; preterite switches to flyde (Det flød).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** DA-VERB-FPR-0036
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.imperfektKonjunktiv.lv`
**DE (read-only):** er ränne / er rönne
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det ville flyde
**PROPOSED_DA:** Det ville sive
**Problēma:** Inconsistent verb stem within rinnen card.
**Audita pamatojums:** Konjunktiv II uses flyde while infinitiv/praesens use sive; one German verb needs one Danish lemma.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** DA-VERB-FPR-0037
**Verb/Card ID:** `verb-95`
**ID / path:** `verb-95.partizipVergangenheit.lv`
**DE (read-only):** geronnen (er ist)
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Størknet
**PROPOSED_DA:** Sivet
**Problēma:** Third lemma on same rinnen card.
**Audita pamatojums:** Størknet (coagulate) does not match sive/trickle forms; geronnen coagulate sense conflicts with At sive/Det siver on the same card.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** DA-VERB-FPR-0038
**Verb/Card ID:** `verb-97`
**ID / path:** `verb-97.infinitiv.lv`
**DE (read-only):** salzen
**Severity:** MEDIUM
**Category:** PARADIGM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Til salt
**PROPOSED_DA:** At salte
**Problēma:** Non-infinitive phrase in infinitiv slot.
**Audita pamatojums:** Til salt is not a verb infinitive; salzen requires At salte, matching salter/saltede/Saltet on the same card.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** DA-VERB-FPR-0039
**Verb/Card ID:** `verb-101`
**ID / path:** `verb-101.infinitiv.lv`
**DE (read-only):** schallen
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At gjalde
**PROPOSED_DA:** At lyde
**Problēma:** Inconsistent verb stem within schallen card.
**Audita pamatojums:** Infinitiv uses gjalde (archaic/rare) but praesens, preterite, and participle all follow lyde (Det lyder / Det lød / Lydt). Learners see two different Danish lemmas for one German verb.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** DA-VERB-FPR-0040
**Verb/Card ID:** `verb-108`
**ID / path:** `verb-108.infinitiv.lv`
**DE (read-only):** schinden
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Pine
**PROPOSED_DA:** At plage
**Problēma:** Inconsistent verb stem within schinden card.
**Audita pamatojums:** Infinitiv and Konjunktiv II use pine, but praesens, preterite, and participle use plage (Han plager / Han plagede / Plaget). schinden needs one consistent Danish lemma across all forms.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** DA-VERB-FPR-0041
**Verb/Card ID:** `verb-108`
**ID / path:** `verb-108.imperfektKonjunktiv.lv`
**DE (read-only):** schindete
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville pine
**PROPOSED_DA:** Han ville plage
**Problēma:** Inconsistent verb stem within schinden card.
**Audita pamatojums:** Konjunktiv II uses pine while all other indicative forms use plage. Align to plage (Han ville plage) or switch the whole card to pine.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** DA-VERB-FPR-0042
**Verb/Card ID:** `verb-112`
**ID / path:** `verb-112.imperfektIndikativ.lv`
**DE (read-only):** er schliff
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kværnede
**PROPOSED_DA:** Han sleb
**Problēma:** Inconsistent verb stem within schleifen card.
**Audita pamatojums:** Infinitiv and present use slibe (grind/hone), but preterite uses kværne (mill/grind grain). schleifen in the sharpen/hone sense should stay on the slibe paradigm (Han sleb / Han slibede).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** DA-VERB-FPR-0043
**Verb/Card ID:** `verb-112`
**ID / path:** `verb-112.partizipVergangenheit.lv`
**DE (read-only):** geschliffen
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Poleret
**PROPOSED_DA:** Slibet
**Problēma:** Inconsistent verb stem within schleifen card.
**Audita pamatojums:** Participle uses polere (polish) while infinitiv is At slibe. Past participle of slibe is Slibet, not Poleret — three different Danish verbs appear on one card.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** DA-VERB-FPR-0044
**Verb/Card ID:** `verb-120`
**ID / path:** `verb-120.praesens.lv`
**DE (read-only):** er schreit
**Severity:** HIGH
**Category:** SEMANTICS
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Råber han
**PROPOSED_DA:** Han skriger
**Problēma:** Semantic mismatch and paradigm split on schreien card.
**Audita pamatojums:** schreien means scream/shriek; råbe means shout/call. Infinitiv (At skrige) and participle (Skreget) use skrige, but present uses råbe. Present should be Han skriger.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** DA-VERB-FPR-0045
**Verb/Card ID:** `verb-120`
**ID / path:** `verb-120.imperfektIndikativ.lv`
**DE (read-only):** er schrie
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Råbte han
**PROPOSED_DA:** Han skreg
**Problēma:** Inconsistent verb stem within schreien card.
**Audita pamatojums:** Preterite uses råbe (Råbte) while infinitiv and participle use skrige. Preterite of skrige is Han skreg.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** DA-VERB-FPR-0046
**Verb/Card ID:** `verb-120`
**ID / path:** `verb-120.imperfektKonjunktiv.lv`
**DE (read-only):** er schriee
**Severity:** HIGH
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ville han råbe
**PROPOSED_DA:** Han ville skrige
**Problēma:** Inconsistent verb stem within schreien card.
**Audita pamatojums:** Konjunktiv II uses råbe while the card lemma is skrige. Should be Han ville skrige.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** DA-VERB-FPR-0047
**Verb/Card ID:** `verb-121`
**ID / path:** `verb-121.praesens.lv`
**DE (read-only):** er schreitet
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han går
**PROPOSED_DA:** Han skrider
**Problēma:** Inconsistent verb stem within schreiten card.
**Audita pamatojums:** Infinitiv is At skride (stride) but present uses generic gå. schreiten denotes striding, not ordinary walking.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** DA-VERB-FPR-0048
**Verb/Card ID:** `verb-121`
**ID / path:** `verb-121.imperfektIndikativ.lv`
**DE (read-only):** er schritt
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han gik
**PROPOSED_DA:** Han skred
**Problēma:** Inconsistent verb stem within schreiten card.
**Audita pamatojums:** Preterite uses gik (gå) while infinitiv and participle use skride (Skredet). Preterite of skride is Han skred.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** DA-VERB-FPR-0049
**Verb/Card ID:** `verb-121`
**ID / path:** `verb-121.imperfektKonjunktiv.lv`
**DE (read-only):** er schritte
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville gå
**PROPOSED_DA:** Han ville skride
**Problēma:** Inconsistent verb stem within schreiten card.
**Audita pamatojums:** Konjunktiv II uses gå while the card lemma is skride.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** DA-VERB-FPR-0050
**Verb/Card ID:** `verb-122`
**ID / path:** `verb-122.partizipVergangenheit.lv`
**DE (read-only):** geschwiegen
**Severity:** MEDIUM
**Category:** CONSISTENCY
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Forstummet
**PROPOSED_DA:** Tiet
**Problēma:** Inconsistent verb stem within schweigen card.
**Audita pamatojums:** Infinitiv is At tie (be silent) but participle uses forstumme (become mute). Participle of tie is tiet.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---
