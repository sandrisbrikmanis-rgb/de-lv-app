# DA–DE Verbs final post-repair audit

**Date:** 2026-08-16
**Auditor:** GPT-5.6 Luna (READ-ONLY)
**Scope:** Production `data/da/verbs.js` after all OWNER repairs (original + regression reapply + linguistic)
**Production changes during audit:** 0

## COVERAGE

| Metric | Value |
|--------|-------|
| Total verbs | **189** |
| Audited verbs | **189** |
| Total DA fields | **945** |
| Audited DA fields | **945** |
| Coverage | **100% PASS** |

## OWNER REGRESSION

| Metric | Value |
|--------|-------|
| Signed LABOT fields expected (unique) | **497** |
| Original signed | **497** |
| Regression signed | **188** |
| OWNER_MATCH | **497/497** |
| OWNER_MISMATCH | **0** |
| Missing card/field | **0** |
| Critical artifacts (LABOT) | **0** |

## LINGUISTIC FINDINGS (Luna)

| Severity | Count |
|----------|-------|
| CRITICAL | **0** |
| HIGH | **37** |
| MEDIUM | **27** |
| LOW | **0** |
| Luna batches | **19** (945 forms) |
| Luna loaded | **19/19** |

## TECHNICAL

| Check | Result |
|-------|--------|
| Syntax | **PASS** |
| Structure/count | **PASS** |
| IDs/order | **PASS** |
| Mirror | **PASS** |
| DE changes vs baseline | **0** |
| DE READ-ONLY | **PASS** |
| LV remnants | **0** |
| EN/placeholder | **0** |
| OWNER artifacts | **0** |
| Empty DA | **0** |

### Verdict

**NEEDS OWNER REVIEW**

## Findings

### DA-VERB-FPR-0001 [HIGH] PARADIGM

- **Verb/Card ID:** `verb-2`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er begann
- **DA_CURRENT:** Begyndte han
- **Problem:** Mixed verb stems within paradigm
- **Reason:** Infinitive and other forms use 'starte' (starter, ville starte, Startet), but preterite uses 'begyndte' from a different verb (begynde). Paradigm must stay on one stem.
- **PROPOSED_DA:** Han startede

### DA-VERB-FPR-0002 [MEDIUM] PARADIGM

- **Verb/Card ID:** `verb-4`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geborgen
- **DA_CURRENT:** Bjærget
- **Problem:** Participle from different verb than rest of card
- **Reason:** Present, preterite, and subjunctive use 'gemme sig' (hide), but the participle 'Bjærget' belongs to 'bjærge' (rescue). Participle should match the chosen paradigm: 'Gemt' or 'Skjult'.
- **PROPOSED_DA:** Gemt

### DA-VERB-FPR-0003 [MEDIUM] PARADIGM

- **Verb/Card ID:** `verb-5`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er barst / er borst
- **DA_CURRENT:** Brød han ud
- **Problem:** Preterite from wrong verb stem
- **Reason:** Card infinitive is 'Briste' (burst) with present 'Brister han', but preterite uses 'brød' from 'bryde' (break) in a phrasal idiom. Standard preterite of briste is 'bristede'.
- **PROPOSED_DA:** Han bristede

### DA-VERB-FPR-0004 [HIGH] PARADIGM

- **Verb/Card ID:** `verb-5`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geborsten (er ist)
- **DA_CURRENT:** Brudt
- **Problem:** Wrong past participle for infinitive stem
- **Reason:** 'Brudt' is the participle of 'bryde' (break), not 'briste' (burst). For bersten the participle should be 'Bristet'.
- **PROPOSED_DA:** Bristet

### DA-VERB-FPR-0005 [MEDIUM] PARADIGM

- **Verb/Card ID:** `verb-8`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geboten
- **DA_CURRENT:** Tilbudt
- **Problem:** Participle from different verb than rest of card
- **Reason:** Infinitive through subjunctive consistently use 'love' (promise: Lover, Lovede, ville love), but participle 'Tilbudt' is from 'tilbyde' (offer). Should be 'Lovet' to match the paradigm.
- **PROPOSED_DA:** Lovet

### DA-VERB-FPR-0006 [HIGH] SEMANTICS

- **Verb/Card ID:** `verb-10`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** bitten
- **DA_CURRENT:** At spørge
- **Problem:** Wrong verb meaning in infinitive
- **Reason:** bitten means to beg/request, not to ask (spørge). The rest of the card correctly uses beg semantics (tigger, bad, ville bede, Bedt). Infinitive should align.
- **PROPOSED_DA:** At bede

### DA-VERB-FPR-0007 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-15`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** gelten
- **DA_CURRENT:** Komme til nytte
- **Problem:** Infinitive does not match paradigm verb
- **Reason:** All other forms use 'gælde' (Det gælder, Det gjaldt, Det ville gælde, Gældt). The infinitive phrase 'Komme til nytte' introduces a different construction and verb entirely.
- **PROPOSED_DA:** At gælde

### DA-VERB-FPR-0008 [MEDIUM] PARADIGM

- **Verb/Card ID:** `verb-24`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gegriffen
- **DA_CURRENT:** Grebet
- **Problem:** Participle from different verb than rest of card
- **Reason:** Infinitive through subjunctive use 'fange' (catch: fanger, fangede, ville fange), but participle 'Grebet' is from 'gribe' (grasp/seize), which better matches greifen. Participle should be 'Fanget' to match the paradigm.
- **PROPOSED_DA:** Fanget

### DA-VERB-FPR-0009 [MEDIUM] GRAMMAR

- **Verb/Card ID:** `verb-29`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er kniff
- **DA_CURRENT:** Han knibede
- **Problem:** Non-standard preterite form
- **Reason:** Danish strong verb 'knibe' has preterite 'knib', not the regularised 'knibede'. Standard paradigm: kniber, knib, knibet.
- **PROPOSED_DA:** Han knib

### DA-VERB-FPR-0010 [HIGH] PARADIGM

- **Verb/Card ID:** `verb-32`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er brät
- **DA_CURRENT:** Han bager
- **Problem:** Present tense from wrong verb stem
- **Reason:** Infinitive is 'At stege' (roast/fry) but present uses 'bager' from 'bage' (bake). braten means to roast/fry, not bake.
- **PROPOSED_DA:** Han steger

### DA-VERB-FPR-0011 [HIGH] PARADIGM

- **Verb/Card ID:** `verb-32`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er briet
- **DA_CURRENT:** Han bagte
- **Problem:** Preterite from wrong verb stem
- **Reason:** Uses 'bagte' (baked) instead of preterite of 'stege'. Should be 'stegte' to match infinitive 'At stege'.
- **PROPOSED_DA:** Han stegte

### DA-VERB-FPR-0012 [HIGH] PARADIGM

- **Verb/Card ID:** `verb-32`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er briete
- **DA_CURRENT:** Han ville bage
- **Problem:** Subjunctive uses wrong verb stem
- **Reason:** Uses 'bage' (bake) instead of 'stege' (roast/fry), inconsistent with infinitive 'At stege' and participle 'Stegt'.
- **PROPOSED_DA:** Han ville stege

### DA-VERB-FPR-0013 [HIGH] SEMANTICS

- **Verb/Card ID:** `verb-35`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er brächte
- **DA_CURRENT:** Han ville bære
- **Problem:** Wrong verb in subjunctive
- **Reason:** 'bære' means to carry; bringen means to bring. Rest of card uses 'bringe' (bringer, bragte, Bragt). Subjunctive should use 'bringe', not 'bære'.
- **PROPOSED_DA:** Han ville bringe

### DA-VERB-FPR-0014 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-39`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er dringt
- **DA_CURRENT:** Han bryder ind
- **Problem:** Present uses different verb than infinitive
- **Reason:** Infinitive and participle use 'trænge ind' (penetrate), but present uses 'bryde ind' (break in). dringen means to penetrate/press through; forms should stay on one verb.
- **PROPOSED_DA:** Han trænger ind

### DA-VERB-FPR-0015 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-39`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er drang
- **DA_CURRENT:** Han brød ind
- **Problem:** Preterite uses different verb than infinitive
- **Reason:** Uses 'brød ind' (broke in) from 'bryde' instead of preterite of 'trænge ind'. Should be 'trængte ind' to match infinitive 'At trænge ind'.
- **PROPOSED_DA:** Han trængte ind

### DA-VERB-FPR-0016 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-39`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er dränge
- **DA_CURRENT:** Han ville bryde ind
- **Problem:** Subjunctive uses different verb than infinitive
- **Reason:** Uses 'bryde ind' instead of 'trænge ind', inconsistent with infinitive and participle on the same card.
- **PROPOSED_DA:** Han ville trænge ind

### DA-VERB-FPR-0017 [MEDIUM] GRAMMAR

- **Verb/Card ID:** `verb-40`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** dünken
- **DA_CURRENT:** Det ser ud til
- **Problem:** Periphrastic phrase instead of infinitive
- **Reason:** Infinitive slot requires a verb form. 'Det ser ud til' is an impersonal periphrasis, not an infinitive. Danish infinitive for dünken (to seem) should be 'At synes' or similar verb form.
- **PROPOSED_DA:** At synes

### DA-VERB-FPR-0018 [MEDIUM] GRAMMAR

- **Verb/Card ID:** `verb-40`
- **Field:** `praesens.lv`
- **DE_CURRENT:** es dünkt
- **DA_CURRENT:** Det ser ud til
- **Problem:** Periphrastic phrase instead of conjugated present
- **Reason:** Present-tense slot requires a conjugated verb. 'Det ser ud til' is a fixed impersonal phrase without finite verb inflection matching es dünkt.
- **PROPOSED_DA:** Det synes

### DA-VERB-FPR-0019 [MEDIUM] PARADIGM

- **Verb/Card ID:** `verb-41`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** durfte
- **DA_CURRENT:** Var tilladt
- **Problem:** Passive periphrasis instead of conjugated preterite
- **Reason:** durfte requires the modal preterite 'måtte' (was allowed to). 'Var tilladt' is a passive adjective phrase, not a conjugated form of the modal verb matching the rest of the paradigm (må, Tilladt).
- **PROPOSED_DA:** Han måtte

### DA-VERB-FPR-0020 [MEDIUM] PARADIGM

- **Verb/Card ID:** `verb-41`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** durfte
- **DA_CURRENT:** Var tilladt
- **Problem:** Passive periphrasis instead of subjunctive form
- **Reason:** Konjunktiv II of dürfen should render as 'ville må' or 'måtte' depending on context, not the passive 'Var tilladt'. Should align with infinitive 'At få lov' and present 'Han må'.
- **PROPOSED_DA:** Han ville få lov

### DA-VERB-FPR-0021 [MEDIUM] SEMANTICS

- **Verb/Card ID:** `verb-42`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er empfiehlt
- **DA_CURRENT:** Foreslår han
- **Problem:** Wrong verb meaning in present tense
- **Reason:** empfehlen means to recommend; 'foreslår' means to suggest/propose. Infinitive correctly uses 'At anbefale' (recommend). Present should match.
- **PROPOSED_DA:** Han anbefaler

### DA-VERB-FPR-0022 [MEDIUM] SEMANTICS

- **Verb/Card ID:** `verb-42`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er empfahl
- **DA_CURRENT:** Foreslog han
- **Problem:** Wrong verb meaning in preterite
- **Reason:** 'Foreslog' (suggested) does not match empfahl (recommended). Should use preterite of 'anbefale' to stay consistent with infinitive and participle 'Anbefalet'.
- **PROPOSED_DA:** Han anbefalede

### DA-VERB-FPR-0023 [HIGH] GRAMMAR

- **Verb/Card ID:** `verb-42`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er empfähle / er empföhle
- **DA_CURRENT:** Han vil anbefale
- **Problem:** Indicative future instead of subjunctive
- **Reason:** Konjunktiv II requires 'ville' + infinitive, not indicative/future 'vil'. 'Han vil anbefale' is future tense, not subjunctive rendering of er empföhle.
- **PROPOSED_DA:** Han ville anbefale

### DA-VERB-FPR-0024 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-52`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geflohen (er ist)
- **DA_CURRENT:** Flygtet
- **Problem:** Inconsistent verb stem within fliehen card.
- **Reason:** Infinitiv and finite forms use løbe væk (run away) but the participle uses flygte (Flygtet). One German verb needs one Danish lemma across all forms.
- **PROPOSED_DA:** Løbet væk

### DA-VERB-FPR-0025 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-57`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er gedeiht
- **DA_CURRENT:** Han lykkes
- **Problem:** Inconsistent verb stem within gedeihen card.
- **Reason:** Infinitiv is At trives but present uses lykkes (succeed). Learners cannot reconcile two different lemmas for one German verb.
- **PROPOSED_DA:** Han trives

### DA-VERB-FPR-0026 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-57`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er gediehe
- **DA_CURRENT:** Han ville lykkes
- **Problem:** Inconsistent verb stem within gedeihen card.
- **Reason:** Konjunktiv II uses lykkes while infinitiv is At trives; align to one stem across the card.
- **PROPOSED_DA:** Han ville trives

### DA-VERB-FPR-0027 [HIGH] PARADIGM

- **Verb/Card ID:** `verb-57`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gediehen (er ist)
- **DA_CURRENT:** Trivedes
- **Problem:** Preterite form in participle slot.
- **Reason:** Trivedes is the preterite/passive of trives, not a past participle. gediehen (sein) requires Trivedet (har trivedet).
- **PROPOSED_DA:** Trivedet

### DA-VERB-FPR-0028 [HIGH] PARADIGM

- **Verb/Card ID:** `verb-75`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** mahlen
- **DA_CURRENT:** Malt
- **Problem:** Past participle used instead of infinitive.
- **Reason:** Malt is a participle; the infinitiv slot requires At male, matching maler/malede/Malt on this mahlen (grind) card.
- **PROPOSED_DA:** At male

### DA-VERB-FPR-0029 [HIGH] SEMANTICS

- **Verb/Card ID:** `verb-81`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er muss
- **DA_CURRENT:** Han har brug for
- **Problem:** Semantic mismatch vs German müssen (must).
- **Reason:** Han har brug for means need; müssen is must/have to. Infinitiv At skulle on this card confirms skulle/må modal, not brug for.
- **PROPOSED_DA:** Han skal

### DA-VERB-FPR-0030 [HIGH] PARADIGM

- **Verb/Card ID:** `verb-86`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** preisen
- **DA_CURRENT:** Ros
- **Problem:** Noun used instead of verb infinitive.
- **Reason:** Ros is a noun (praise); infinitiv slot requires the verb At rose, matching roser/rost/rose/Roset on the same card.
- **PROPOSED_DA:** At rose

### DA-VERB-FPR-0031 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-88`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geraten
- **DA_CURRENT:** Foreslået/nævnt
- **Problem:** Participle does not match raten/råde paradigm on card.
- **Reason:** Other forms use råde (At råde, Han råder, Han rådede). Foreslået/nævnt (suggested/mentioned) breaks the lemma and is a slash variant chain.
- **PROPOSED_DA:** Rådet

### DA-VERB-FPR-0032 [HIGH] SEMANTICS

- **Verb/Card ID:** `verb-93`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er riecht
- **DA_CURRENT:** Han lugter
- **Problem:** Wrong smell direction for riechen.
- **Reason:** Han lugter means he emits odor; riechen (er riecht) is perceiving smell. Danish needs kan lugte or an impersonal construction, not subject-emits-odor lugter.
- **PROPOSED_DA:** Han kan lugte

### DA-VERB-FPR-0033 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-94`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er rang
- **DA_CURRENT:** Han brød sammen
- **Problem:** Wrong verb in preterite slot.
- **Reason:** Han brød sammen is bryde (break/collapse); ringen maps to kæmpe on infinitiv/praesens/participle (At kæmpe, Han kæmper, Kæmpet).
- **PROPOSED_DA:** Han kæmpede

### DA-VERB-FPR-0034 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-94`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er ränge
- **DA_CURRENT:** Han ville bryde
- **Problem:** Wrong verb in Konjunktiv II slot.
- **Reason:** Han ville bryde is bryde; ringen Konjunktiv must use kæmpe to match the rest of the card paradigm.
- **PROPOSED_DA:** Han ville kæmpe

### DA-VERB-FPR-0035 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-95`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er rann
- **DA_CURRENT:** Det flød
- **Problem:** Inconsistent verb stem within rinnen card.
- **Reason:** Infinitiv At sive and praesens Det siver use sive; preterite switches to flyde (Det flød).
- **PROPOSED_DA:** Det sivede

### DA-VERB-FPR-0036 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-95`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er ränne / er rönne
- **DA_CURRENT:** Det ville flyde
- **Problem:** Inconsistent verb stem within rinnen card.
- **Reason:** Konjunktiv II uses flyde while infinitiv/praesens use sive; one German verb needs one Danish lemma.
- **PROPOSED_DA:** Det ville sive

### DA-VERB-FPR-0037 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-95`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geronnen (er ist)
- **DA_CURRENT:** Størknet
- **Problem:** Third lemma on same rinnen card.
- **Reason:** Størknet (coagulate) does not match sive/trickle forms; geronnen coagulate sense conflicts with At sive/Det siver on the same card.
- **PROPOSED_DA:** Sivet

### DA-VERB-FPR-0038 [MEDIUM] PARADIGM

- **Verb/Card ID:** `verb-97`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** salzen
- **DA_CURRENT:** Til salt
- **Problem:** Non-infinitive phrase in infinitiv slot.
- **Reason:** Til salt is not a verb infinitive; salzen requires At salte, matching salter/saltede/Saltet on the same card.
- **PROPOSED_DA:** At salte

### DA-VERB-FPR-0039 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-101`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** schallen
- **DA_CURRENT:** At gjalde
- **Problem:** Inconsistent verb stem within schallen card.
- **Reason:** Infinitiv uses gjalde (archaic/rare) but praesens, preterite, and participle all follow lyde (Det lyder / Det lød / Lydt). Learners see two different Danish lemmas for one German verb.
- **PROPOSED_DA:** At lyde

### DA-VERB-FPR-0040 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-108`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** schinden
- **DA_CURRENT:** Pine
- **Problem:** Inconsistent verb stem within schinden card.
- **Reason:** Infinitiv and Konjunktiv II use pine, but praesens, preterite, and participle use plage (Han plager / Han plagede / Plaget). schinden needs one consistent Danish lemma across all forms.
- **PROPOSED_DA:** At plage

### DA-VERB-FPR-0041 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-108`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** schindete
- **DA_CURRENT:** Han ville pine
- **Problem:** Inconsistent verb stem within schinden card.
- **Reason:** Konjunktiv II uses pine while all other indicative forms use plage. Align to plage (Han ville plage) or switch the whole card to pine.
- **PROPOSED_DA:** Han ville plage

### DA-VERB-FPR-0042 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-112`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er schliff
- **DA_CURRENT:** Han kværnede
- **Problem:** Inconsistent verb stem within schleifen card.
- **Reason:** Infinitiv and present use slibe (grind/hone), but preterite uses kværne (mill/grind grain). schleifen in the sharpen/hone sense should stay on the slibe paradigm (Han sleb / Han slibede).
- **PROPOSED_DA:** Han sleb

### DA-VERB-FPR-0043 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-112`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geschliffen
- **DA_CURRENT:** Poleret
- **Problem:** Inconsistent verb stem within schleifen card.
- **Reason:** Participle uses polere (polish) while infinitiv is At slibe. Past participle of slibe is Slibet, not Poleret — three different Danish verbs appear on one card.
- **PROPOSED_DA:** Slibet

### DA-VERB-FPR-0044 [HIGH] SEMANTICS

- **Verb/Card ID:** `verb-120`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er schreit
- **DA_CURRENT:** Råber han
- **Problem:** Semantic mismatch and paradigm split on schreien card.
- **Reason:** schreien means scream/shriek; råbe means shout/call. Infinitiv (At skrige) and participle (Skreget) use skrige, but present uses råbe. Present should be Han skriger.
- **PROPOSED_DA:** Han skriger

### DA-VERB-FPR-0045 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-120`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er schrie
- **DA_CURRENT:** Råbte han
- **Problem:** Inconsistent verb stem within schreien card.
- **Reason:** Preterite uses råbe (Råbte) while infinitiv and participle use skrige. Preterite of skrige is Han skreg.
- **PROPOSED_DA:** Han skreg

### DA-VERB-FPR-0046 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-120`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er schriee
- **DA_CURRENT:** Ville han råbe
- **Problem:** Inconsistent verb stem within schreien card.
- **Reason:** Konjunktiv II uses råbe while the card lemma is skrige. Should be Han ville skrige.
- **PROPOSED_DA:** Han ville skrige

### DA-VERB-FPR-0047 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-121`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er schreitet
- **DA_CURRENT:** Han går
- **Problem:** Inconsistent verb stem within schreiten card.
- **Reason:** Infinitiv is At skride (stride) but present uses generic gå. schreiten denotes striding, not ordinary walking.
- **PROPOSED_DA:** Han skrider

### DA-VERB-FPR-0048 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-121`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er schritt
- **DA_CURRENT:** Han gik
- **Problem:** Inconsistent verb stem within schreiten card.
- **Reason:** Preterite uses gik (gå) while infinitiv and participle use skride (Skredet). Preterite of skride is Han skred.
- **PROPOSED_DA:** Han skred

### DA-VERB-FPR-0049 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-121`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er schritte
- **DA_CURRENT:** Han ville gå
- **Problem:** Inconsistent verb stem within schreiten card.
- **Reason:** Konjunktiv II uses gå while the card lemma is skride.
- **PROPOSED_DA:** Han ville skride

### DA-VERB-FPR-0050 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-122`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geschwiegen
- **DA_CURRENT:** Forstummet
- **Problem:** Inconsistent verb stem within schweigen card.
- **Reason:** Infinitiv is At tie (be silent) but participle uses forstumme (become mute). Participle of tie is tiet.
- **PROPOSED_DA:** Tiet

### DA-VERB-FPR-0051 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-127`
- **Field:** `infinitiv.lv`
- **DE_CURRENT:** schwören
- **DA_CURRENT:** At bande
- **Problem:** Inconsistent verb stem within schwören card.
- **Reason:** Infinitiv uses bande (curse/profanity) but all conjugated forms use sværge (swear an oath). schwören primarily maps to sværge in Danish.
- **PROPOSED_DA:** At sværge

### DA-VERB-FPR-0052 [HIGH] SEMANTICS

- **Verb/Card ID:** `verb-134`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er sönne / er sänne
- **DA_CURRENT:** Ville han undre sig
- **Problem:** Semantic mismatch on sinnen card.
- **Reason:** sinnen means ponder/reflect (grunde over). undre sig means wonder/be surprised — a different verb and meaning. Konjunktiv II should follow grunde over (Han ville grunde over).
- **PROPOSED_DA:** Han ville grunde over

### DA-VERB-FPR-0053 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-139`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er spleißt
- **DA_CURRENT:** Han forbinder
- **Problem:** Inconsistent verb stem within spleißen card.
- **Reason:** Infinitiv is At splejse (splice, e.g. cables/fibers) but present uses generic forbinde (connect). spleißen in technical use maps to splejse throughout.
- **PROPOSED_DA:** Han splejser

### DA-VERB-FPR-0054 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-142`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er sprang
- **DA_CURRENT:** Han sprang
- **Problem:** Inconsistent verb stem within springen card.
- **Reason:** Infinitiv, present, Konjunktiv II, and participle use hoppe (Han hopper / Han ville hoppe / Hoppet), but preterite uses sprang from springe. Preterite of hoppe is Han hoppede.
- **PROPOSED_DA:** Han hoppede

### DA-VERB-FPR-0055 [HIGH] GRAMMAR

- **Verb/Card ID:** `verb-145`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gestanden
- **DA_CURRENT:** Stående
- **Problem:** Wrong part-of-speech for past participle.
- **Reason:** Stående is a present participle/adjective ('standing'), not the past participle of stå. gestanden maps to Stået (havde stået).
- **PROPOSED_DA:** Stået

### DA-VERB-FPR-0056 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-147`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** gestiegen (er ist)
- **DA_CURRENT:** Steget
- **Problem:** Inconsistent verb stem within steigen card.
- **Reason:** Infinitiv, present, and preterite use klatre (Han klatrer / Han klatrede), but participle uses Steget from stige. Participle of klatre is Klatret.
- **PROPOSED_DA:** Klatret

### DA-VERB-FPR-0057 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-155`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er träfe
- **DA_CURRENT:** Han ville støde på
- **Problem:** Inconsistent verb lemma within treffen card.
- **Reason:** Infinitiv, Präsens, Präteritum, and Partizip II all use møde (møder / mødte / Mødt), but Konjunktiv II uses støde på (encounter). After owner repair aligned past to mødte, Konjunktiv II remains on a different verb.
- **PROPOSED_DA:** Han ville møde

### DA-VERB-FPR-0058 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-161`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er verdarb
- **DA_CURRENT:** Han beskadigede
- **Problem:** Mixed verb stems within verderben card.
- **Reason:** Infinitiv and Präsens use ødelægge/ødelægger (ruin/destroy), but Präteritum uses beskadigede from beskadige (damage). Learners cannot derive one Danish paradigm for verderben.
- **PROPOSED_DA:** Han ødelagde

### DA-VERB-FPR-0059 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-161`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er verdürbe
- **DA_CURRENT:** Han ville skade
- **Problem:** Mixed verb stems within verderben card.
- **Reason:** Konjunktiv II uses skade (harm) while infinitiv is At ødelægge and Präsens is ødelægger. Conditional should mirror the same lemma as the rest of the card.
- **PROPOSED_DA:** Han ville ødelægge

### DA-VERB-FPR-0060 [HIGH] CONSISTENCY

- **Verb/Card ID:** `verb-161`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** verdorben
- **DA_CURRENT:** Beskadiget
- **Problem:** Participle from wrong verb stem.
- **Reason:** Beskadiget is the participle of beskadige, not ødelægge. verdorben maps to ødelægge; standard participle is Ødelagt.
- **PROPOSED_DA:** Ødelagt

### DA-VERB-FPR-0061 [MEDIUM] SEMANTICS

- **Verb/Card ID:** `verb-165`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er wuchs
- **DA_CURRENT:** Han voksede op
- **Problem:** Added auf sense not present in German source.
- **Reason:** er wuchs means he grew; voksede op specifically means grew up (aufwachsen). Präsens and other forms use plain vokse without op.
- **PROPOSED_DA:** Han voksede

### DA-VERB-FPR-0062 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-172`
- **Field:** `partizipVergangenheit.lv`
- **DE_CURRENT:** geworden
- **DA_CURRENT:** Er blevet
- **Problem:** Participle field includes auxiliary verb.
- **Reason:** All other cards store bare participles (Gjort, Blevet, Vokset). geworden → blevet; the auxiliary er is not used on other sein-auxiliary German verbs in this set (e.g. verb-165 Vokset, verb-168 Viget).
- **PROPOSED_DA:** Blevet

### DA-VERB-FPR-0063 [MEDIUM] CONSISTENCY

- **Verb/Card ID:** `verb-179`
- **Field:** `praesens.lv`
- **DE_CURRENT:** er zeiht
- **DA_CURRENT:** Han giver skylden
- **Problem:** Present form uses different lemma than rest of card.
- **Reason:** Infinitiv is At bebrejde and Präteritum/Konjunktiv use bebrejde/bebrejdede, but Präsens is an idiomatic phrase with giver (give). Learners cannot conjugate one verb across all forms.
- **PROPOSED_DA:** Han bebrejder

### DA-VERB-FPR-0064 [MEDIUM] GRAMMAR

- **Verb/Card ID:** `verb-183`
- **Field:** `imperfektKonjunktiv.lv`
- **DE_CURRENT:** er erwöge
- **DA_CURRENT:** Ville han overveje
- **Problem:** Inverted word order in Konjunktiv II field.
- **Reason:** Standard er-form cards use subject-first conditional (Han ville overveje). Präsens and Präteritum on this card were owner-repaired to Han overvejer / Han overvejede; Konjunktiv II still uses inverted Ville han overveje.
- **PROPOSED_DA:** Han ville overveje
