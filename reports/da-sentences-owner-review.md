# DA–DE Sätze — OWNER preview

**Auditors:** GPT-5.6 Luna (READ-ONLY)
Avots: `reports/da-sentences-full-audit.md` / `reports/temp/da-sentences-merged-audit.json`
Findings: **DA-SENT-0001–DA-SENT-0252** (252 ieraksti)
Fails: `reports/da-sentences-owner-review.md`

> **PROPOSED_DA** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.
> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda `da-sentences-owner-decisions.md`.
> **DE lauki nemainīt.** Apply tikai `(Sentence/Card ID, lv)` ar COPY-ONLY.

## Finding 1 (Sätze)

**Finding:** 1
**Audit ID:** DA-SENT-0001
**Sentence/Card ID:** `sentence-1`
**Field:** `lv`
**DE (read-only):** Wenn nichts dazwischenkommt.
**CURRENT_DA:** Hvis intet forstyrrer. • Hvis alt går efter planen.
**PROPOSED_DA:** Hvis intet kommer i vejen.
**Severity:** MEDIUM
**Problem:** Incorrect alternative translation in multi-variant string.
**Reason:** Second variant 'Hvis alt går efter planen' means 'if all goes according to plan', which is not equivalent to 'Wenn nichts dazwischenkommt' (if nothing gets in the way).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 2 (Sätze)

**Finding:** 2
**Audit ID:** DA-SENT-0002
**Sentence/Card ID:** `sentence-5`
**Field:** `lv`
**DE (read-only):** Desto mehr.
**CURRENT_DA:** Jo flere.
**PROPOSED_DA:** Jo mere.
**Severity:** HIGH
**Problem:** Semantic mismatch: countable 'flere' used where German expresses uncountable 'mehr'.
**Reason:** 'Desto mehr' means 'all the more / so much the more' (uncountable comparative), not 'the more [items]'. Danish 'Jo flere' means 'the more [countable things]'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 3 (Sätze)

**Finding:** 3
**Audit ID:** DA-SENT-0003
**Sentence/Card ID:** `sentence-6`
**Field:** `lv`
**DE (read-only):** Je mehr, desto besser.
**CURRENT_DA:** Jo flere jo bedre.
**PROPOSED_DA:** Jo mere, jo bedre.
**Severity:** HIGH
**Problem:** Wrong comparative form ('flere' vs 'mere') in fixed expression.
**Reason:** Standard Danish idiom is 'Jo mere, jo bedre'. 'Jo flere' is grammatically wrong for this general comparative proverb.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 4 (Sätze)

**Finding:** 4
**Audit ID:** DA-SENT-0004
**Sentence/Card ID:** `sentence-7`
**Field:** `lv`
**DE (read-only):** Alles deutet auf Regen.
**CURRENT_DA:** Alt peger på sagen.
**PROPOSED_DA:** Alt peger på regn.
**Severity:** CRITICAL
**Problem:** Critical mistranslation: 'Regen' rendered as 'sagen'.
**Reason:** German 'Regen' means rain. Danish 'sagen' means 'the matter/case', producing a completely different meaning.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 5 (Sätze)

**Finding:** 5
**Audit ID:** DA-SENT-0005
**Sentence/Card ID:** `sentence-8`
**Field:** `lv`
**DE (read-only):** Damit ist mir wenig gedient.
**CURRENT_DA:** Det giver lidt mening for mig.
**PROPOSED_DA:** Det hjælper mig ikke ret meget.
**Severity:** HIGH
**Problem:** Semantic reversal: usefulness vs making sense.
**Reason:** 'Damit ist mir wenig gedient' means the thing is of little use/benefit to the speaker. The DA says the opposite nuance ('giver lidt mening' = makes a little sense).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 6 (Sätze)

**Finding:** 6
**Audit ID:** DA-SENT-0006
**Sentence/Card ID:** `sentence-10`
**Field:** `lv`
**DE (read-only):** Sprechen Sie doch!
**CURRENT_DA:** Sig op!
**PROPOSED_DA:** Tal dog! / Sig noget!
**Severity:** CRITICAL
**Problem:** Critical false friend: 'Sig op' does not mean 'speak'.
**Reason:** 'Sprechen Sie doch!' is an urging to speak. 'Sig op!' means 'resign/quit (a job)' in Danish — a dangerous false friend.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 7 (Sätze)

**Finding:** 7
**Audit ID:** DA-SENT-0007
**Sentence/Card ID:** `sentence-11`
**Field:** `lv`
**DE (read-only):** Es donnert.
**CURRENT_DA:** Torden brøler.
**PROPOSED_DA:** Det tordner.
**Severity:** MEDIUM
**Problem:** Unnatural phrasing for 'Es donnert'.
**Reason:** 'Torden brøler' is unnatural Danish; standard weather expression is 'Det tordner' or 'Der tordner'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 8 (Sätze)

**Finding:** 8
**Audit ID:** DA-SENT-0008
**Sentence/Card ID:** `sentence-17`
**Field:** `lv`
**DE (read-only):** Kein Durchgang!
**CURRENT_DA:** Gå ikke igennem! • Udgang lukket!
**PROPOSED_DA:** Ingen adgang! / Adgang forbudt!
**Severity:** MEDIUM
**Problem:** Wrong alternative variant ('Udgang lukket') in multi-variant string.
**Reason:** 'Kein Durchgang!' is a no-entry/no-through-traffic sign. 'Udgang lukket' means 'exit closed', which is a different concept.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 9 (Sätze)

**Finding:** 9
**Audit ID:** DA-SENT-0009
**Sentence/Card ID:** `sentence-18`
**Field:** `lv`
**DE (read-only):** Darf ich Sie bitten?
**CURRENT_DA:** Må jeg spørge dig
**PROPOSED_DA:** Må jeg bede Dem? / Må jeg spørge Dem?
**Severity:** MEDIUM
**Problem:** Register mismatch, incomplete sentence, and imprecise verb choice.
**Reason:** German 'Sie' (formal) is rendered as 'dig' (informal). The sentence is also truncated (missing '?') and 'bitten' is broader than 'spørge'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 10 (Sätze)

**Finding:** 10
**Audit ID:** DA-SENT-0010
**Sentence/Card ID:** `sentence-28`
**Field:** `lv`
**DE (read-only):** Es war einmal.
**CURRENT_DA:** Engang var der.
**PROPOSED_DA:** Der var engang …
**Severity:** HIGH
**Problem:** Non-idiomatic, incomplete rendering of fixed phrase.
**Reason:** 'Es war einmal' is the standard fairy-tale opener. 'Engang var der' is incomplete and non-idiomatic in Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 11 (Sätze)

**Finding:** 11
**Audit ID:** DA-SENT-0011
**Sentence/Card ID:** `sentence-29`
**Field:** `lv`
**DE (read-only):** Steigen Sie bitte ein!
**CURRENT_DA:** Kom venligst ind!
**PROPOSED_DA:** Stig venligst ind! / Tag venligst plads!
**Severity:** HIGH
**Problem:** Wrong domain: vehicle entry vs entering a space.
**Reason:** 'Steigen Sie ein' means get into a vehicle. 'Kom ind' means enter a room/building.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 12 (Sätze)

**Finding:** 12
**Audit ID:** DA-SENT-0012
**Sentence/Card ID:** `sentence-30`
**Field:** `lv`
**DE (read-only):** Treten Sie ein!
**CURRENT_DA:** Kom venligst ind!
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-29 (DE: "Steigen Sie bitte ein!")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 13 (Sätze)

**Finding:** 13
**Audit ID:** DA-SENT-0013
**Sentence/Card ID:** `sentence-30`
**Field:** `lv`
**DE (read-only):** Treten Sie ein!
**CURRENT_DA:** Kom venligst ind!
**PROPOSED_DA:** Træd venligst ind!
**Severity:** HIGH
**Problem:** Wrong translation and duplicate of sentence-29 DA.
**Reason:** 'Treten Sie ein!' means step/come in (typically into a room). Current DA matches sentence-29 and does not reflect 'eintreten'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 14 (Sätze)

**Finding:** 14
**Audit ID:** DA-SENT-0014
**Sentence/Card ID:** `sentence-36`
**Field:** `lv`
**DE (read-only):** Wer war der Erste?
**CURRENT_DA:** Wen var først?
**PROPOSED_DA:** Hvem var den første?
**Severity:** CRITICAL
**Problem:** Foreign remnant: German 'Wen' in Danish field.
**Reason:** 'Wen' is German, not Danish. Danish interrogative is 'Hvem'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 15 (Sätze)

**Finding:** 15
**Audit ID:** DA-SENT-0015
**Sentence/Card ID:** `sentence-37`
**Field:** `lv`
**DE (read-only):** Wer fehlt heute?
**CURRENT_DA:** Wen er ikke kommet i dag?
**PROPOSED_DA:** Hvem mangler i dag?
**Severity:** CRITICAL
**Problem:** Foreign remnant: German 'Wen' in Danish field.
**Reason:** 'Wen' is German. Meaning should be 'who is absent today', not 'who has not come'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 16 (Sätze)

**Finding:** 16
**Audit ID:** DA-SENT-0016
**Sentence/Card ID:** `sentence-38`
**Field:** `lv`
**DE (read-only):** Was fehlt dir?
**CURRENT_DA:** Hvad er der galt med dig?
**PROPOSED_DA:** Hvad mangler du? / Hvad er der i vejen?
**Severity:** MEDIUM
**Problem:** Tone/semantic mismatch — too accusatory.
**Reason:** 'Was fehlt dir?' asks what is wrong/what do you lack (mild concern). 'Hvad er der galt med dig?' is accusatory ('what is wrong with you').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 17 (Sätze)

**Finding:** 17
**Audit ID:** DA-SENT-0017
**Sentence/Card ID:** `sentence-40`
**Field:** `lv`
**DE (read-only):** Was soll das heißen?
**CURRENT_DA:** Hvad betyder det?
**PROPOSED_DA:** Hvad skal det betyde?
**Severity:** MEDIUM
**Problem:** Lost pragmatic force of indignant question.
**Reason:** 'Was soll das heißen?' expresses indignation ('what is that supposed to mean?'). Neutral 'Hvad betyder det?' loses this.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 18 (Sätze)

**Finding:** 18
**Audit ID:** DA-SENT-0018
**Sentence/Card ID:** `sentence-42`
**Field:** `lv`
**DE (read-only):** Heraus mit der Sprache!
**CURRENT_DA:** Tale! • Historier!
**PROPOSED_DA:** Ud med sproget! / Kom nu frem med det!
**Severity:** HIGH
**Problem:** Idiom not translated; fragments miss imperative sense.
**Reason:** 'Heraus mit der Sprache!' is an idiom demanding someone speak up/confess. 'Tale!' and 'Historier!' do not convey this.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 19 (Sätze)

**Finding:** 19
**Audit ID:** DA-SENT-0019
**Sentence/Card ID:** `sentence-45`
**Field:** `lv`
**DE (read-only):** von heute an
**CURRENT_DA:** Starter i dag
**PROPOSED_DA:** Fra i dag af
**Severity:** HIGH
**Problem:** Phrase type mismatch: prepositional time marker rendered as verb phrase.
**Reason:** 'von heute an' is a temporal phrase 'from today onward', not 'starts today' (verb phrase).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 20 (Sätze)

**Finding:** 20
**Audit ID:** DA-SENT-0020
**Sentence/Card ID:** `sentence-46`
**Field:** `lv`
**DE (read-only):** heute früh
**CURRENT_DA:** Denne morgen
**PROPOSED_DA:** I morges
**Severity:** MEDIUM
**Problem:** Non-idiomatic temporal expression.
**Reason:** 'heute früh' in past context means 'this morning' (earlier today). 'Denne morgen' is less idiomatic for past reference.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 21 (Sätze)

**Finding:** 21
**Audit ID:** DA-SENT-0021
**Sentence/Card ID:** `sentence-47`
**Field:** `lv`
**DE (read-only):** heute Nacht
**CURRENT_DA:** I går aftes
**PROPOSED_DA:** I nat
**Severity:** HIGH
**Problem:** Wrong time reference (yesterday evening vs tonight).
**Reason:** 'heute Nacht' means tonight/last night (today's night). 'I går aftes' means yesterday evening — different time reference.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 22 (Sätze)

**Finding:** 22
**Audit ID:** DA-SENT-0022
**Sentence/Card ID:** `sentence-69`
**Field:** `lv`
**DE (read-only):** Ich habe die Ausbildung absolviert.
**CURRENT_DA:** Jeg afsluttede min uddannelse. • Jeg afsluttede min uddannelse.
**PROPOSED_DA:** Jeg afsluttede min uddannelse.
**Severity:** LOW
**Problem:** Duplicate variant in multi-variant string.
**Reason:** The two bullet variants are identical duplicates.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 23 (Sätze)

**Finding:** 23
**Audit ID:** DA-SENT-0023
**Sentence/Card ID:** `sentence-78`
**Field:** `lv`
**DE (read-only):** Er ändert ständig seine Meinung.
**CURRENT_DA:** Han ændrer konstant mening.
**PROPOSED_DA:** Han ændrer konstant sin mening.
**Severity:** MEDIUM
**Problem:** Grammar error: missing possessive pronoun.
**Reason:** Missing possessive 'sin' before 'mening' — ungrammatical in Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 24 (Sätze)

**Finding:** 24
**Audit ID:** DA-SENT-0024
**Sentence/Card ID:** `sentence-82`
**Field:** `lv`
**DE (read-only):** Dieses Kleid ist akademisch gekleidet.
**CURRENT_DA:** Denne kjole er stilfuldt konservativ.
**PROPOSED_DA:** Dette kjole er akademisk klædt. / Kjolen er konservativt klædt.
**Severity:** HIGH
**Problem:** Semantic mismatch of 'akademisch gekleidet'.
**Reason:** German 'akademisch gekleidet' means conservatively/formally dressed (academic style). DA 'stilfuldt konservativ' changes meaning and mismatches adjective structure.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 25 (Sätze)

**Finding:** 25
**Audit ID:** DA-SENT-0025
**Sentence/Card ID:** `sentence-92`
**Field:** `lv`
**DE (read-only):** Kannst du mich später anrufen?
**CURRENT_DA:** Kan du ringe til mig senere
**PROPOSED_DA:** Kan du ringe til mig senere?
**Severity:** LOW
**Problem:** Punctuation/grammar: interrogative lacks '?'.
**Reason:** Missing closing question mark.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 26 (Sätze)

**Finding:** 26
**Audit ID:** DA-SENT-0026
**Sentence/Card ID:** `sentence-99`
**Field:** `lv`
**DE (read-only):** Es kommt darauf an.
**CURRENT_DA:** Det afhænger af det.
**PROPOSED_DA:** Det afhænger. / Det kommer an på det.
**Severity:** LOW
**Problem:** Slightly unnatural/redundant phrasing.
**Reason:** 'Det afhænger af det' is redundant; natural Danish omits or uses 'det kommer an på'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 27 (Sätze)

**Finding:** 27
**Audit ID:** DA-SENT-0027
**Sentence/Card ID:** `sentence-100`
**Field:** `lv`
**DE (read-only):** Aus diesem Anlass.
**CURRENT_DA:** På grund af denne tid. • I denne forbindelse
**PROPOSED_DA:** I anledning af dette. / I denne forbindelse.
**Severity:** HIGH
**Problem:** Wrong first variant: 'Anlass' ≠ 'tid'.
**Reason:** 'På grund af denne tid' means 'because of this time', not 'on this occasion'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 28 (Sätze)

**Finding:** 28
**Audit ID:** DA-SENT-0028
**Sentence/Card ID:** `sentence-102`
**Field:** `lv`
**DE (read-only):** Was hast du da angerichtet?
**CURRENT_DA:** Hvad har du lavet der
**PROPOSED_DA:** Hvad har du lavet der?
**Severity:** LOW
**Problem:** Punctuation: interrogative lacks '?'.
**Reason:** Missing closing question mark.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 29 (Sätze)

**Finding:** 29
**Audit ID:** DA-SENT-0029
**Sentence/Card ID:** `sentence-104`
**Field:** `lv`
**DE (read-only):** Du glaubst mir anscheinend nicht.
**CURRENT_DA:** Du synes ikke at tro mig.
**PROPOSED_DA:** Du tror mig åbenbart ikke.
**Severity:** MEDIUM
**Problem:** Unnatural grammar for 'Du glaubst mir anscheinend nicht'.
**Reason:** 'Du synes ikke at tro mig' is ungrammatical/unnatural. Standard: 'Du tror mig tydeligvis/åbenbart ikke'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 30 (Sätze)

**Finding:** 30
**Audit ID:** DA-SENT-0030
**Sentence/Card ID:** `sentence-106`
**Field:** `lv`
**DE (read-only):** Stell dich nicht so an!
**CURRENT_DA:** Lad være med at lade som om!
**PROPOSED_DA:** (Danish with matching negation)
**Severity:** HIGH
**Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
**Reason:** Semantic parity requires negation alignment
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 31 (Sätze)

**Finding:** 31
**Audit ID:** DA-SENT-0031
**Sentence/Card ID:** `sentence-106`
**Field:** `lv`
**DE (read-only):** Stell dich nicht so an!
**CURRENT_DA:** Lad være med at lade som om!
**PROPOSED_DA:** Hold op med at stille dig sådan an!
**Severity:** MEDIUM
**Problem:** Idiomatic nuance mismatch.
**Reason:** 'Stell dich nicht so an' means don't put on airs/act pretentiously. 'Lad være med at lade som om' means stop pretending — related but not equivalent.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 32 (Sätze)

**Finding:** 32
**Audit ID:** DA-SENT-0032
**Sentence/Card ID:** `sentence-107`
**Field:** `lv`
**DE (read-only):** An die Arbeit gehen.
**CURRENT_DA:** Kom på arbejde.
**PROPOSED_DA:** Gå i gang med arbejdet. / Tag fat på arbejdet.
**Severity:** MEDIUM
**Problem:** Semantic mismatch: start working vs arrive at work.
**Reason:** 'An die Arbeit gehen' means to set/get to work. 'Kom på arbejde' means arrive at the workplace.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 33 (Sätze)

**Finding:** 33
**Audit ID:** DA-SENT-0033
**Sentence/Card ID:** `sentence-118`
**Field:** `lv`
**DE (read-only):** Wir müssen das Treffen verschieben.
**CURRENT_DA:** Vi er nødt til at omlægge mødet.
**PROPOSED_DA:** Vi er nødt til at udskyde mødet.
**Severity:** HIGH
**Problem:** Wrong verb: postpone vs restructure.
**Reason:** 'verschieben' means postpone/reschedule. 'omlægge' means restructure/reorganise.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 34 (Sätze)

**Finding:** 34
**Audit ID:** DA-SENT-0034
**Sentence/Card ID:** `sentence-119`
**Field:** `lv`
**DE (read-only):** Sie hat mich aufgeregt.
**CURRENT_DA:** Hun irriterede mig.
**PROPOSED_DA:** Hun gjorde mig ophidset / Hun gjorde mig urolig.
**Severity:** MEDIUM
**Problem:** Emotional nuance mismatch.
**Reason:** 'aufgeregt' means agitated/upset/excited, not merely 'irritated'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 35 (Sätze)

**Finding:** 35
**Audit ID:** DA-SENT-0035
**Sentence/Card ID:** `sentence-121`
**Field:** `lv`
**DE (read-only):** Auf der Stelle.
**CURRENT_DA:** Straks.
**PROPOSED_DA:** På stedet. / Med det samme.
**Severity:** MEDIUM
**Problem:** Lost spatial meaning of polysemous phrase.
**Reason:** 'Auf der Stelle' can mean both 'immediately' and 'on the spot' (physically). 'Straks' only covers the temporal sense.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 36 (Sätze)

**Finding:** 36
**Audit ID:** DA-SENT-0036
**Sentence/Card ID:** `sentence-122`
**Field:** `lv`
**DE (read-only):** Für den Schaden aufkommen.
**CURRENT_DA:** Dæk skaderne.
**PROPOSED_DA:** Dække skaderne. / Stå for skaderne.
**Severity:** MEDIUM
**Problem:** Unnatural idiom rendering.
**Reason:** 'Für den Schaden aufkommen' is an idiom meaning to bear/cover costs of damage. 'Dæk skaderne' is awkward imperative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 37 (Sätze)

**Finding:** 37
**Audit ID:** DA-SENT-0037
**Sentence/Card ID:** `sentence-128`
**Field:** `lv`
**DE (read-only):** Geh mir aus den Augen!
**CURRENT_DA:** Se ikke på mig igen!
**PROPOSED_DA:** Forsvind! / Gå væk!
**Severity:** HIGH
**Problem:** Wrong imperative semantics.
**Reason:** 'Geh mir aus den Augen!' means get out of my sight. 'Se ikke på mig igen!' means don't look at me again — different imperative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 38 (Sätze)

**Finding:** 38
**Audit ID:** DA-SENT-0038
**Sentence/Card ID:** `sentence-129`
**Field:** `lv`
**DE (read-only):** Unter vier Augen.
**CURRENT_DA:** I to. • Stille og roligt
**PROPOSED_DA:** Under fire øjne. / Alene sammen.
**Severity:** MEDIUM
**Problem:** Wrong second variant in multi-variant string.
**Reason:** 'Stille og roligt' means quietly/calmly, not 'in private/confidentially' (unter vier Augen).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 39 (Sätze)

**Finding:** 39
**Audit ID:** DA-SENT-0039
**Sentence/Card ID:** `sentence-140`
**Field:** `lv`
**DE (read-only):** Wann wurden die Meisterschaftskämpfe ausgetragen?
**CURRENT_DA:** Hvornår var mesterskabet?
**PROPOSED_DA:** Hvornår blev mesterskabet afholdt?
**Severity:** MEDIUM
**Problem:** Lost verbal nuance of 'ausgetragen'.
**Reason:** German asks when championships were held/contested ('ausgetragen'). DA only asks when the championship was, losing the event sense.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 40 (Sätze)

**Finding:** 40
**Audit ID:** DA-SENT-0040
**Sentence/Card ID:** `sentence-142`
**Field:** `lv`
**DE (read-only):** Einfluss ausüben.
**CURRENT_DA:** At påvirke.
**PROPOSED_DA:** Udøve indflydelse.
**Severity:** MEDIUM
**Problem:** Lost specificity of 'Einfluss'.
**Reason:** 'Einfluss ausüben' specifically means to exert influence, not generic 'påvirke'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 41 (Sätze)

**Finding:** 41
**Audit ID:** DA-SENT-0041
**Sentence/Card ID:** `sentence-145`
**Field:** `lv`
**DE (read-only):** Mit der Bahn.
**CURRENT_DA:** Med jernbane.
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-144 (DE: "Per Bahn.")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 42 (Sätze)

**Finding:** 42
**Audit ID:** DA-SENT-0042
**Sentence/Card ID:** `sentence-145`
**Field:** `lv`
**DE (read-only):** Mit der Bahn.
**CURRENT_DA:** Med jernbane.
**PROPOSED_DA:** Med toget. / Med banen.
**Severity:** MEDIUM
**Problem:** Duplicate DA for distinct DE sentences.
**Reason:** Identical DA as sentence-144 despite different DE phrasing; 'Mit der Bahn' is more naturally 'med toget'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 43 (Sätze)

**Finding:** 43
**Audit ID:** DA-SENT-0043
**Sentence/Card ID:** `sentence-150`
**Field:** `lv`
**DE (read-only):** Erz bauen.
**CURRENT_DA:** Få malm.
**PROPOSED_DA:** Udvind malm. / Bryde malm.
**Severity:** HIGH
**Problem:** Mining verb not translated.
**Reason:** 'Erz bauen' means to mine/extract ore. 'Få malm' (get ore) does not convey mining activity.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 44 (Sätze)

**Finding:** 44
**Audit ID:** DA-SENT-0044
**Sentence/Card ID:** `sentence-151`
**Field:** `lv`
**DE (read-only):** Mist bauen.
**CURRENT_DA:** Skud. • Gør dig selv til grin
**PROPOSED_DA:** Lave ballade. / Fucke op. / Gøre dig selv til grin.
**Severity:** HIGH
**Problem:** Wrong first variant ('Skud') for colloquial idiom.
**Reason:** 'Mist bauen' (coll.) means to mess up/make a blunder. 'Skud' alone means 'shot' and is incorrect.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 45 (Sätze)

**Finding:** 45
**Audit ID:** DA-SENT-0045
**Sentence/Card ID:** `sentence-152`
**Field:** `lv`
**DE (read-only):** Ich bin beauftragt.
**CURRENT_DA:** Jeg er blevet tildelt et job.
**PROPOSED_DA:** Jeg er blevet bemyndiget. / Jeg har fået til opgave.
**Severity:** MEDIUM
**Problem:** Semantic narrowing of 'beauftragt'.
**Reason:** 'beauftragt' means commissioned/assigned a task, not simply 'got a job'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 46 (Sätze)

**Finding:** 46
**Audit ID:** DA-SENT-0046
**Sentence/Card ID:** `sentence-154`
**Field:** `lv`
**DE (read-only):** Ich bedauere ihn.
**CURRENT_DA:** Jeg har ondt af ham.
**PROPOSED_DA:** Jeg beklager det for ham.
**Severity:** MEDIUM
**Problem:** Verb mismatch: regret vs pity.
**Reason:** 'bedauern' means to regret, not 'have pity on' ('have ondt af').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 47 (Sätze)

**Finding:** 47
**Audit ID:** DA-SENT-0047
**Sentence/Card ID:** `sentence-157`
**Field:** `lv`
**DE (read-only):** Sie sieht bedrückt aus.
**CURRENT_DA:** Hun ser deprimeret ud.
**PROPOSED_DA:** Hun ser nedtrykt ud. / Hun ser bedrøvet ud.
**Severity:** MEDIUM
**Problem:** Overly clinical rendering of 'bedrückt'.
**Reason:** 'bedrückt' means dejected/oppressed in spirit, not clinically 'depressed' ('deprimeret').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 48 (Sätze)

**Finding:** 48
**Audit ID:** DA-SENT-0048
**Sentence/Card ID:** `sentence-160`
**Field:** `lv`
**DE (read-only):** Mit der Post befördern.
**CURRENT_DA:** Send med mail.
**PROPOSED_DA:** Sende med posten.
**Severity:** HIGH
**Problem:** Postal vs electronic mail confusion.
**Reason:** 'Mit der Post befördern' means send by postal mail. 'mail' in Danish often implies email.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 49 (Sätze)

**Finding:** 49
**Audit ID:** DA-SENT-0049
**Sentence/Card ID:** `sentence-163`
**Field:** `lv`
**DE (read-only):** Am Beginn.
**CURRENT_DA:** I begyndelsen.
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-162 (DE: "Zu Beginn.")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 50 (Sätze)

**Finding:** 50
**Audit ID:** DA-SENT-0050
**Sentence/Card ID:** `sentence-163`
**Field:** `lv`
**DE (read-only):** Am Beginn.
**CURRENT_DA:** I begyndelsen.
**PROPOSED_DA:** Ved begyndelsen. / Til at begynde med.
**Severity:** MEDIUM
**Problem:** Duplicate DA for distinct DE sentences.
**Reason:** Identical DA as sentence-162 for distinct DE ('Am Beginn' vs 'Zu Beginn').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 51 (Sätze)

**Finding:** 51
**Audit ID:** DA-SENT-0051
**Sentence/Card ID:** `sentence-164`
**Field:** `lv`
**DE (read-only):** Bei Beginn.
**CURRENT_DA:** Starter
**PROPOSED_DA:** Ved begyndelsen. / Ved starten.
**Severity:** HIGH
**Problem:** Fragment rendered as verb; incomplete translation.
**Reason:** 'Bei Beginn' is a prepositional phrase 'at the beginning/on commencement', not the verb 'Starter'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 52 (Sätze)

**Finding:** 52
**Audit ID:** DA-SENT-0052
**Sentence/Card ID:** `sentence-166`
**Field:** `lv`
**DE (read-only):** Mit seiner Begleitung.
**CURRENT_DA:** Med akkompagnement.
**PROPOSED_DA:** Med sin ledsager. / Med sin ledsagelse.
**Severity:** HIGH
**Problem:** Wrong domain: person vs music.
**Reason:** 'Begleitung' means human escort/companion. 'akkompagnement' means musical accompaniment.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 53 (Sätze)

**Finding:** 53
**Audit ID:** DA-SENT-0053
**Sentence/Card ID:** `sentence-170`
**Field:** `lv`
**DE (read-only):** Bei Sinnen sein.
**CURRENT_DA:** At være fornuftig.
**PROPOSED_DA:** Være ved sine sanser. / Være ved fuld bevidsthed.
**Severity:** HIGH
**Problem:** Consciousness vs reason mismatch.
**Reason:** 'Bei Sinnen sein' means to be conscious/of sound mind. 'fornuftig' means reasonable/sensible.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 54 (Sätze)

**Finding:** 54
**Audit ID:** DA-SENT-0054
**Sentence/Card ID:** `sentence-172`
**Field:** `lv`
**DE (read-only):** Bei weitem nicht so.
**CURRENT_DA:** Slet ikke.
**PROPOSED_DA:** Langt fra så … / På langt nær ikke så …
**Severity:** HIGH
**Problem:** Lost comparative structure.
**Reason:** 'Bei weitem nicht so' is a comparative ('not nearly so/by far not as'). 'Slet ikke' means 'not at all' — stronger and non-comparative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 55 (Sätze)

**Finding:** 55
**Audit ID:** DA-SENT-0055
**Sentence/Card ID:** `sentence-175`
**Field:** `lv`
**DE (read-only):** Beifall finden.
**CURRENT_DA:** Indhent samtykke.
**PROPOSED_DA:** Få bifald. / Vind anerkendelse.
**Severity:** CRITICAL
**Problem:** Critical mistranslation: applause vs consent.
**Reason:** 'Beifall finden' means to meet with applause/approval. 'Indhent samtykke' means to obtain consent — entirely different.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 56 (Sätze)

**Finding:** 56
**Audit ID:** DA-SENT-0056
**Sentence/Card ID:** `sentence-176`
**Field:** `lv`
**DE (read-only):** Beileid aussprechen.
**CURRENT_DA:** Udtryk kondolence.
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-139 (DE: "Sein Beileid aussprechen.")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 57 (Sätze)

**Finding:** 57
**Audit ID:** DA-SENT-0057
**Sentence/Card ID:** `sentence-176`
**Field:** `lv`
**DE (read-only):** Beileid aussprechen.
**CURRENT_DA:** Udtryk kondolence.
**PROPOSED_DA:** Udtrykke medfølelse. / Kondolere.
**Severity:** MEDIUM
**Problem:** Duplicate DA for distinct DE sentences.
**Reason:** Identical DA as sentence-139 for related but distinct DE phrasing.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 58 (Sätze)

**Finding:** 58
**Audit ID:** DA-SENT-0058
**Sentence/Card ID:** `sentence-177`
**Field:** `lv`
**DE (read-only):** Auf eigenen Beinen stehen.
**CURRENT_DA:** At være økonomisk uafhængig.
**PROPOSED_DA:** Stå på egne ben. / Klare sig selv.
**Severity:** MEDIUM
**Problem:** Overly narrow rendering (economic only).
**Reason:** 'Auf eigenen Beinen stehen' means independence generally, not only economic.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 59 (Sätze)

**Finding:** 59
**Audit ID:** DA-SENT-0059
**Sentence/Card ID:** `sentence-179`
**Field:** `lv`
**DE (read-only):** Beistand leisten.
**CURRENT_DA:** At hjælpe. • Yde assistance
**PROPOSED_DA:** Yde støtte. / Hjælpe.
**Severity:** LOW
**Problem:** Foreign remnant: English 'assistance' in variant.
**Reason:** Variant 'Yde assistance' uses English loanword where Danish 'hjælp/støtte' is natural.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 60 (Sätze)

**Finding:** 60
**Audit ID:** DA-SENT-0060
**Sentence/Card ID:** `sentence-180`
**Field:** `lv`
**DE (read-only):** Beitrag leisten.
**CURRENT_DA:** Invester din andel.
**PROPOSED_DA:** Bidrage. / Yde et bidrag.
**Severity:** HIGH
**Problem:** Contribution vs investment mismatch.
**Reason:** 'Beitrag leisten' means to make/contribute one's share. 'Invester din andel' implies financial investment.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 61 (Sätze)

**Finding:** 61
**Audit ID:** DA-SENT-0061
**Sentence/Card ID:** `sentence-183`
**Field:** `lv`
**DE (read-only):** Belegte Brötchen.
**CURRENT_DA:** Sandwich med toppings.
**PROPOSED_DA:** Smørrebrød.
**Severity:** MEDIUM
**Problem:** Foreign remnant / non-idiomatic: English 'sandwich/toppings'.
**Reason:** 'Belegte Brötchen' are open-faced topped bread rolls. 'Sandwich med toppings' uses English and is not idiomatic Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 62 (Sätze)

**Finding:** 62
**Audit ID:** DA-SENT-0062
**Sentence/Card ID:** `sentence-188`
**Field:** `lv`
**DE (read-only):** Bereit sein.
**CURRENT_DA:** Vær klar. • Vær i fred
**PROPOSED_DA:** Være klar. / Være parat.
**Severity:** HIGH
**Problem:** Wrong second variant in multi-variant string.
**Reason:** 'Vær i fred' means 'be at peace/leave me alone', not 'be ready' (bereit sein).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 63 (Sätze)

**Finding:** 63
**Audit ID:** DA-SENT-0063
**Sentence/Card ID:** `sentence-197`
**Field:** `lv`
**DE (read-only):** Beim besten Willen.
**CURRENT_DA:** Hvad end du vil.
**PROPOSED_DA:** Om jeg så skulle. / Med al vilje i verden.
**Severity:** HIGH
**Problem:** Idiom completely mistranslated.
**Reason:** 'Beim besten Willen' is an idiom expressing inability despite goodwill ('much as I'd like to'). 'Hvad end du vil' means 'whatever you want'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 64 (Sätze)

**Finding:** 64
**Audit ID:** DA-SENT-0064
**Sentence/Card ID:** `sentence-198`
**Field:** `lv`
**DE (read-only):** Am besten.
**CURRENT_DA:** Den bedste.
**PROPOSED_DA:** Helst. / Det bedste ville være …
**Severity:** MEDIUM
**Problem:** Part of speech mismatch: adverb vs adjective.
**Reason:** 'Am besten' is adverbial 'preferably/best (to do X)', not nominal 'den bedste' (the best one).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 65 (Sätze)

**Finding:** 65
**Audit ID:** DA-SENT-0065
**Sentence/Card ID:** `sentence-204`
**Field:** `lv`
**DE (read-only):** Zu Besuch sein.
**CURRENT_DA:** At besøge. • At besøge
**PROPOSED_DA:** Være på besøg
**Severity:** HIGH
**Problem:** Wrong verb phrase; duplicates identical variant.
**Reason:** 'Zu Besuch sein' means to be visiting, not 'at besøge'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 66 (Sätze)

**Finding:** 66
**Audit ID:** DA-SENT-0066
**Sentence/Card ID:** `sentence-210`
**Field:** `lv`
**DE (read-only):** Alle beiden.
**CURRENT_DA:** Begge to.
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-173 (DE: "Alle beide.")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 67 (Sätze)

**Finding:** 67
**Audit ID:** DA-SENT-0067
**Sentence/Card ID:** `sentence-213`
**Field:** `lv`
**DE (read-only):** Bitte schön.
**CURRENT_DA:** Behage
**PROPOSED_DA:** Værsgo
**Severity:** CRITICAL
**Problem:** Non-Danish or nonsense word for standard German phrase.
**Reason:** 'Behage' is not valid Danish for 'Bitte schön' (here you are/you're welcome).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 68 (Sätze)

**Finding:** 68
**Audit ID:** DA-SENT-0068
**Sentence/Card ID:** `sentence-214`
**Field:** `lv`
**DE (read-only):** Wie bitte?
**CURRENT_DA:** Hvordan venligst
**PROPOSED_DA:** Undskyld?
**Severity:** CRITICAL
**Problem:** Complete mistranslation of conversational formula.
**Reason:** 'Wie bitte?' requests repetition; literal 'Hvordan venligst' is ungrammatical.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 69 (Sätze)

**Finding:** 69
**Audit ID:** DA-SENT-0069
**Sentence/Card ID:** `sentence-215`
**Field:** `lv`
**DE (read-only):** Bitte sehr.
**CURRENT_DA:** Behage
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-213 (DE: "Bitte schön.")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 70 (Sätze)

**Finding:** 70
**Audit ID:** DA-SENT-0070
**Sentence/Card ID:** `sentence-215`
**Field:** `lv`
**DE (read-only):** Bitte sehr.
**CURRENT_DA:** Behage
**PROPOSED_DA:** Værsgo
**Severity:** HIGH
**Problem:** Same invalid 'Behage' as sentence-213.
**Reason:** 'Bitte sehr' means here you are; 'Behage' is not Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 71 (Sätze)

**Finding:** 71
**Audit ID:** DA-SENT-0071
**Sentence/Card ID:** `sentence-218`
**Field:** `lv`
**DE (read-only):** In einem Buch blättern.
**CURRENT_DA:** Sorter bogen.
**PROPOSED_DA:** Bladre i en bog
**Severity:** CRITICAL
**Problem:** 'Sorter bogen' means sort the book — opposite action.
**Reason:** 'blättern' means flip through pages, not sort/organize.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 72 (Sätze)

**Finding:** 72
**Audit ID:** DA-SENT-0072
**Sentence/Card ID:** `sentence-219`
**Field:** `lv`
**DE (read-only):** Mit bloßen Füßen.
**CURRENT_DA:** Bare fødder.
**PROPOSED_DA:** Med bare fødder
**Severity:** MEDIUM
**Problem:** Missing preposition; noun phrase alone is incomplete.
**Reason:** German prepositional phrase needs Danish 'med'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 73 (Sätze)

**Finding:** 73
**Audit ID:** DA-SENT-0073
**Sentence/Card ID:** `sentence-223`
**Field:** `lv`
**DE (read-only):** Bitte checken.
**CURRENT_DA:** Check. • Tjek
**PROPOSED_DA:** Tjek venligst
**Severity:** LOW
**Problem:** English loanword remnant in first variant.
**Reason:** English 'Check' should not appear when Danish 'Tjek' is available.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 74 (Sätze)

**Finding:** 74
**Audit ID:** DA-SENT-0074
**Sentence/Card ID:** `sentence-225`
**Field:** `lv`
**DE (read-only):** Alles spricht dafür.
**CURRENT_DA:** Alt taler godt.
**PROPOSED_DA:** Alt taler for det
**Severity:** HIGH
**Problem:** 'Alt taler godt' means everything speaks well — wrong sense.
**Reason:** 'Alles spricht dafür' = everything points in favour; not 'speaks well'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 75 (Sätze)

**Finding:** 75
**Audit ID:** DA-SENT-0075
**Sentence/Card ID:** `sentence-226`
**Field:** `lv`
**DE (read-only):** Ich kann nichts dafür.
**CURRENT_DA:** Jeg kan ikke gøre noget der.
**PROPOSED_DA:** Det kan jeg ikke gøre noget ved
**Severity:** HIGH
**Problem:** 'Jeg kan ikke gøre noget der' is unnatural and unclear.
**Reason:** Standard Danish idiom for 'Ich kann nichts dafür'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 76 (Sätze)

**Finding:** 76
**Audit ID:** DA-SENT-0076
**Sentence/Card ID:** `sentence-230`
**Field:** `lv`
**DE (read-only):** Mit der Dame ziehen.
**CURRENT_DA:** Lav en dames bevægelse.
**PROPOSED_DA:** Spil damen
**Severity:** MEDIUM
**Problem:** Literal misreading of idiomatic 'ziehen'.
**Reason:** 'Mit der Dame ziehen' is a card-game idiom (play the queen), not a movement.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 77 (Sätze)

**Finding:** 77
**Audit ID:** DA-SENT-0077
**Sentence/Card ID:** `sentence-231`
**Field:** `lv`
**DE (read-only):** Es dämmert.
**CURRENT_DA:** Det er ved at blive mørkt. • Daggry bryder ind.
**PROPOSED_DA:** Det er ved at blive mørkt
**Severity:** HIGH
**Problem:** Contradictory variants: dusk and dawn cannot both be correct.
**Reason:** 'Es dämmert' is dusk/twilight; dawn variant contradicts primary sense.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 78 (Sätze)

**Finding:** 78
**Audit ID:** DA-SENT-0078
**Sentence/Card ID:** `sentence-242`
**Field:** `lv`
**DE (read-only):** von Haus aus
**CURRENT_DA:** Siden barndommen • Helt fra begyndelsen
**PROPOSED_DA:** Af naturen • Fra starten
**Severity:** HIGH
**Problem:** 'Siden barndommen' misrenders the German idiom.
**Reason:** 'von Haus aus' means by nature/from the outset, not since childhood.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 79 (Sätze)

**Finding:** 79
**Audit ID:** DA-SENT-0079
**Sentence/Card ID:** `sentence-245`
**Field:** `lv`
**DE (read-only):** Haben Sie die Güte!
**CURRENT_DA:** Vær så venlig!
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-244 (DE: "Seien Sie so gut!")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 80 (Sätze)

**Finding:** 80
**Audit ID:** DA-SENT-0080
**Sentence/Card ID:** `sentence-245`
**Field:** `lv`
**DE (read-only):** Haben Sie die Güte!
**CURRENT_DA:** Vær så venlig!
**PROPOSED_DA:** Vær så god!
**Severity:** MEDIUM
**Problem:** Duplicate of sentence-244; loses 'die Güte' nuance.
**Reason:** Distinct German polite formulas should have distinguishable Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 81 (Sätze)

**Finding:** 81
**Audit ID:** DA-SENT-0081
**Sentence/Card ID:** `sentence-246`
**Field:** `lv`
**DE (read-only):** Was hast du?
**CURRENT_DA:** Hvad er der galt med dig? • Hvad skete der?
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-38 (DE: "Was fehlt dir?")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 82 (Sätze)

**Finding:** 82
**Audit ID:** DA-SENT-0082
**Sentence/Card ID:** `sentence-246`
**Field:** `lv`
**DE (read-only):** Was hast du?
**CURRENT_DA:** Hvad er der galt med dig? • Hvad skete der?
**PROPOSED_DA:** Hvad er der galt?
**Severity:** MEDIUM
**Problem:** 'Hvad skete der?' means what happened — wrong sense.
**Reason:** 'Was hast du?' here means what's wrong; second variant shifts meaning.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 83 (Sätze)

**Finding:** 83
**Audit ID:** DA-SENT-0083
**Sentence/Card ID:** `sentence-251`
**Field:** `lv`
**DE (read-only):** gestern Abend
**CURRENT_DA:** I går aftes
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-47 (DE: "heute Nacht")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 84 (Sätze)

**Finding:** 84
**Audit ID:** DA-SENT-0084
**Sentence/Card ID:** `sentence-254`
**Field:** `lv`
**DE (read-only):** Mach keine Geschichten!
**CURRENT_DA:** Gør ikke noget sludder! • Lav ikke vittigheder!
**PROPOSED_DA:** Gør ikke op historier!
**Severity:** HIGH
**Problem:** Second variant 'Lav ikke vittigheder!' means don't make jokes.
**Reason:** 'Mach keine Geschichten!' means don't make up stories/excuses.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 85 (Sätze)

**Finding:** 85
**Audit ID:** DA-SENT-0085
**Sentence/Card ID:** `sentence-255`
**Field:** `lv`
**DE (read-only):** Geschweige denn...
**CURRENT_DA:** For ikke at nævne det. • Hvor ellers
**PROPOSED_DA:** End ikke
**Severity:** HIGH
**Problem:** Second variant 'Hvor ellers' is semantically unrelated.
**Reason:** 'Geschweige denn' means let alone/much less.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 86 (Sätze)

**Finding:** 86
**Audit ID:** DA-SENT-0086
**Sentence/Card ID:** `sentence-258`
**Field:** `lv`
**DE (read-only):** Frag ihn gelegentlich, ob...
**CURRENT_DA:** Spørg ham, om han kommer ud, hvis...
**PROPOSED_DA:** Spørg ham af og til, om...
**Severity:** CRITICAL
**Problem:** Adds 'kommer ud' — not in 'Frag ihn gelegentlich, ob...'.
**Reason:** Translation must not invent content absent from German source.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 87 (Sätze)

**Finding:** 87
**Audit ID:** DA-SENT-0087
**Sentence/Card ID:** `sentence-263`
**Field:** `lv`
**DE (read-only):** Fahre fort!
**CURRENT_DA:** Hold det op!
**PROPOSED_DA:** Fortsæt!
**Severity:** CRITICAL
**Problem:** 'Hold det op!' means stop it — reversed meaning.
**Reason:** 'Fahre fort!' means continue; Danish says the opposite.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 88 (Sätze)

**Finding:** 88
**Audit ID:** DA-SENT-0088
**Sentence/Card ID:** `sentence-269`
**Field:** `lv`
**DE (read-only):** Es jammert mich zu sehen...
**CURRENT_DA:** Trist at se...
**PROPOSED_DA:** Det gør mig ondt at se...
**Severity:** MEDIUM
**Problem:** 'Trist at se...' is fragmentary, not a natural sentence.
**Reason:** German has subject 'es'; Danish needs complete clause.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 89 (Sätze)

**Finding:** 89
**Audit ID:** DA-SENT-0089
**Sentence/Card ID:** `sentence-281`
**Field:** `lv`
**DE (read-only):** Na, wie läufts?
**CURRENT_DA:** Hvordan har du det
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-257 (DE: "Wie geht es Ihnen?")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 90 (Sätze)

**Finding:** 90
**Audit ID:** DA-SENT-0090
**Sentence/Card ID:** `sentence-281`
**Field:** `lv`
**DE (read-only):** Na, wie läufts?
**CURRENT_DA:** Hvordan har du det
**PROPOSED_DA:** Hvordan går det?
**Severity:** LOW
**Problem:** Missing '?'; duplicates sentence-257 phrasing.
**Reason:** Colloquial greeting needs distinct wording and terminal punctuation.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 91 (Sätze)

**Finding:** 91
**Audit ID:** DA-SENT-0091
**Sentence/Card ID:** `sentence-282`
**Field:** `lv`
**DE (read-only):** Es lebe!
**CURRENT_DA:** Længe leve!
**PROPOSED_DA:** Længe leve!
**Severity:** MEDIUM
**Problem:** Incomplete exclamation without the person/thing toasted.
**Reason:** 'Es lebe!' is a toast formula requiring an object in Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 92 (Sätze)

**Finding:** 92
**Audit ID:** DA-SENT-0092
**Sentence/Card ID:** `sentence-283`
**Field:** `lv`
**DE (read-only):** Leben Sie wohl!
**CURRENT_DA:** Lev sundt! • Farvel!
**PROPOSED_DA:** Farvel!
**Severity:** HIGH
**Problem:** First variant 'Lev sundt!' means live healthily — wrong sense.
**Reason:** 'Leben Sie wohl!' is a farewell, not health advice.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 93 (Sätze)

**Finding:** 93
**Audit ID:** DA-SENT-0093
**Sentence/Card ID:** `sentence-284`
**Field:** `lv`
**DE (read-only):** Was ist los?
**CURRENT_DA:** Hvad skete der?
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-253 (DE: "Was ist geschehen?")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 94 (Sätze)

**Finding:** 94
**Audit ID:** DA-SENT-0094
**Sentence/Card ID:** `sentence-284`
**Field:** `lv`
**DE (read-only):** Was ist los?
**CURRENT_DA:** Hvad skete der?
**PROPOSED_DA:** Hvad er der galt?
**Severity:** HIGH
**Problem:** 'Hvad skete der?' means what happened — wrong tense/sense.
**Reason:** 'Was ist los?' asks what's wrong/going on, not past events.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 95 (Sätze)

**Finding:** 95
**Audit ID:** DA-SENT-0095
**Sentence/Card ID:** `sentence-286`
**Field:** `lv`
**DE (read-only):** Das war ein anstrengender Tag.
**CURRENT_DA:** Det var en travl dag.
**PROPOSED_DA:** Det var en anstrengende dag
**Severity:** HIGH
**Problem:** 'Travl dag' means busy day — wrong adjective.
**Reason:** 'anstrengend' means exhausting/tiring, not busy.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 96 (Sätze)

**Finding:** 96
**Audit ID:** DA-SENT-0096
**Sentence/Card ID:** `sentence-297`
**Field:** `lv`
**DE (read-only):** Was machst du?
**CURRENT_DA:** Hvad laver du
**PROPOSED_DA:** Hvad laver du?
**Severity:** LOW
**Problem:** Missing question mark.
**Reason:** Interrogative sentence requires terminal punctuation.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 97 (Sätze)

**Finding:** 97
**Audit ID:** DA-SENT-0097
**Sentence/Card ID:** `sentence-298`
**Field:** `lv`
**DE (read-only):** Sag mal!
**CURRENT_DA:** Sig ja!
**PROPOSED_DA:** Sig mig!
**Severity:** CRITICAL
**Problem:** 'Sig ja!' means say yes — completely wrong.
**Reason:** 'Sag mal!' is colloquial 'tell me/say'; not an affirmative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 98 (Sätze)

**Finding:** 98
**Audit ID:** DA-SENT-0098
**Sentence/Card ID:** `sentence-299`
**Field:** `lv`
**DE (read-only):** Was meinen Sie damit?
**CURRENT_DA:** Hvad mener du med det? • Hvad synes du?
**PROPOSED_DA:** Hvad mener du med det?
**Severity:** HIGH
**Problem:** Second variant 'Hvad synes du?' means what do you think.
**Reason:** 'Was meinen Sie damit?' asks what is meant, not opinion.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 99 (Sätze)

**Finding:** 99
**Audit ID:** DA-SENT-0099
**Sentence/Card ID:** `sentence-310`
**Field:** `lv`
**DE (read-only):** Letzte Neuheit!
**CURRENT_DA:** De seneste nyheder!
**PROPOSED_DA:** Seneste nyhed!
**Severity:** HIGH
**Problem:** 'De seneste nyheder' means the latest news.
**Reason:** 'Letzte Neuheit' means latest novelty/product, not news.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 100 (Sätze)

**Finding:** 100
**Audit ID:** DA-SENT-0100
**Sentence/Card ID:** `sentence-311`
**Field:** `lv`
**DE (read-only):** Nicht wahr?
**CURRENT_DA:** Højre?
**PROPOSED_DA:** Ikke sandt?
**Severity:** CRITICAL
**Problem:** 'Højre?' means right (direction) — total mistranslation.
**Reason:** 'Nicht wahr?' is a tag question seeking agreement.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 101 (Sätze)

**Finding:** 101
**Audit ID:** DA-SENT-0101
**Sentence/Card ID:** `sentence-317`
**Field:** `lv`
**DE (read-only):** Nicht parken!
**CURRENT_DA:** Parkering er forbudt!
**PROPOSED_DA:** (Danish with matching negation)
**Severity:** HIGH
**Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
**Reason:** Semantic parity requires negation alignment
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 102 (Sätze)

**Finding:** 102
**Audit ID:** DA-SENT-0102
**Sentence/Card ID:** `sentence-317`
**Field:** `lv`
**DE (read-only):** Nicht parken!
**CURRENT_DA:** Parkering er forbudt!
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-316 (DE: "Parken verboten!")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 103 (Sätze)

**Finding:** 103
**Audit ID:** DA-SENT-0103
**Sentence/Card ID:** `sentence-320`
**Field:** `lv`
**DE (read-only):** Davon kann keine Rede sein.
**CURRENT_DA:** Det er udelukket.
**PROPOSED_DA:** (Danish with matching negation)
**Severity:** HIGH
**Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
**Reason:** Semantic parity requires negation alignment
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 104 (Sätze)

**Finding:** 104
**Audit ID:** DA-SENT-0104
**Sentence/Card ID:** `sentence-324`
**Field:** `lv`
**DE (read-only):** Schon gut!
**CURRENT_DA:** Det er allerede godt!
**PROPOSED_DA:** Det er okay
**Severity:** HIGH
**Problem:** 'Det er allerede godt!' means it is already good.
**Reason:** 'Schon gut!' dismisses concern: never mind/it's fine.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 105 (Sätze)

**Finding:** 105
**Audit ID:** DA-SENT-0105
**Sentence/Card ID:** `sentence-325`
**Field:** `lv`
**DE (read-only):** Bitte schön!
**CURRENT_DA:** Behage!
**PROPOSED_DA:** Værsgo!
**Severity:** CRITICAL
**Problem:** 'Behage!' is not valid Danish.
**Reason:** 'Bitte schön!' as offering requires standard Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 106 (Sätze)

**Finding:** 106
**Audit ID:** DA-SENT-0106
**Sentence/Card ID:** `sentence-335`
**Field:** `lv`
**DE (read-only):** Spaß beiseite!
**CURRENT_DA:** Ingen joke! • Jokes på kanten!
**PROPOSED_DA:** Spøg aside!
**Severity:** MEDIUM
**Problem:** English remnants 'joke' and 'Jokes' in Danish text.
**Reason:** Danish should avoid English 'joke/jokes' in variants.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 107 (Sätze)

**Finding:** 107
**Audit ID:** DA-SENT-0107
**Sentence/Card ID:** `sentence-336`
**Field:** `lv`
**DE (read-only):** Wie spät ist es?
**CURRENT_DA:** Hvad er klokken
**PROPOSED_DA:** Hvad er klokken?
**Severity:** LOW
**Problem:** Missing question mark.
**Reason:** Interrogative requires terminal punctuation.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 108 (Sätze)

**Finding:** 108
**Audit ID:** DA-SENT-0108
**Sentence/Card ID:** `sentence-340`
**Field:** `lv`
**DE (read-only):** Wie steht’s?
**CURRENT_DA:** Hvordan har du det
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-257 (DE: "Wie geht es Ihnen?")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 109 (Sätze)

**Finding:** 109
**Audit ID:** DA-SENT-0109
**Sentence/Card ID:** `sentence-340`
**Field:** `lv`
**DE (read-only):** Wie steht’s?
**CURRENT_DA:** Hvordan har du det
**PROPOSED_DA:** Hvordan går det?
**Severity:** LOW
**Problem:** Missing '?'; duplicates sentence-257.
**Reason:** Informal status question should differ from formal greeting.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 110 (Sätze)

**Finding:** 110
**Audit ID:** DA-SENT-0110
**Sentence/Card ID:** `sentence-341`
**Field:** `lv`
**DE (read-only):** Dieser Hut steht ihr gut.
**CURRENT_DA:** Denne hat klæder hende godt.
**PROPOSED_DA:** Den hat klæder hende godt
**Severity:** HIGH
**Problem:** 'Denne hat klæder hende godt' is ungrammatical.
**Reason:** Danish needs correct article and word order for 'stehen'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 111 (Sätze)

**Finding:** 111
**Audit ID:** DA-SENT-0111
**Sentence/Card ID:** `sentence-342`
**Field:** `lv`
**DE (read-only):** Guten Tag!
**CURRENT_DA:** Hej!
**PROPOSED_DA:** God dag!
**Severity:** MEDIUM
**Problem:** 'Hej!' is too informal for the German register.
**Reason:** 'Guten Tag!' is a formal daytime greeting.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 112 (Sätze)

**Finding:** 112
**Audit ID:** DA-SENT-0112
**Sentence/Card ID:** `sentence-347`
**Field:** `lv`
**DE (read-only):** Nicht übel!
**CURRENT_DA:** Meget godt! • Der er ingen indvendinger
**PROPOSED_DA:** Ikke dårligt!
**Severity:** HIGH
**Problem:** Second variant 'Der er ingen indvendinger' means no objections.
**Reason:** 'Nicht übel!' means not bad/pretty good.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 113 (Sätze)

**Finding:** 113
**Audit ID:** DA-SENT-0113
**Sentence/Card ID:** `sentence-350`
**Field:** `lv`
**DE (read-only):** So ist es üblich.
**CURRENT_DA:** Det er accepteret.
**PROPOSED_DA:** Sådan er det sædvanligt
**Severity:** HIGH
**Problem:** 'Det er accepteret' means it is accepted.
**Reason:** 'üblich' means usual/customary, not accepted.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 114 (Sätze)

**Finding:** 114
**Audit ID:** DA-SENT-0114
**Sentence/Card ID:** `sentence-354`
**Field:** `lv`
**DE (read-only):** umso mehr
**CURRENT_DA:** Jo flere
**PROPOSED_DA:** Desto mere
**Severity:** HIGH
**Problem:** 'Jo flere' means the more (quantity) — wrong idiom.
**Reason:** 'umso mehr' means all the more/increasingly.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 115 (Sätze)

**Finding:** 115
**Audit ID:** DA-SENT-0115
**Sentence/Card ID:** `sentence-356`
**Field:** `lv`
**DE (read-only):** Und ob!
**CURRENT_DA:** Og hvad ellers!
**PROPOSED_DA:** Jo da!
**Severity:** HIGH
**Problem:** 'Og hvad ellers!' means and what else — wrong sense.
**Reason:** 'Und ob!' is emphatic affirmation: you bet!
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 116 (Sätze)

**Finding:** 116
**Audit ID:** DA-SENT-0116
**Sentence/Card ID:** `sentence-360`
**Field:** `lv`
**DE (read-only):** Keine Ursache!
**CURRENT_DA:** Intet for ingenting!
**PROPOSED_DA:** Selv tak!
**Severity:** CRITICAL
**Problem:** 'Intet for ingenting!' is not a Danish idiom.
**Reason:** 'Keine Ursache!' responds to thanks: don't mention it.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 117 (Sätze)

**Finding:** 117
**Audit ID:** DA-SENT-0117
**Sentence/Card ID:** `sentence-367`
**Field:** `lv`
**DE (read-only):** Seine Ansicht vertreten.
**CURRENT_DA:** Forsvar din mening.
**PROPOSED_DA:** Forsvare sin mening
**Severity:** MEDIUM
**Problem:** Shifts to second person 'din'; loses represent/advocate sense.
**Reason:** 'Seine Ansicht vertreten' is third person; vertreten = advocate.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 118 (Sätze)

**Finding:** 118
**Audit ID:** DA-SENT-0118
**Sentence/Card ID:** `sentence-371`
**Field:** `lv`
**DE (read-only):** Vom Hörensagen.
**CURRENT_DA:** Efter at have hørt.
**PROPOSED_DA:** Efter sigende
**Severity:** HIGH
**Problem:** 'Efter at have hørt' means after having heard — wrong.
**Reason:** 'Vom Hörensagen' is the fixed phrase by hearsay.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 119 (Sätze)

**Finding:** 119
**Audit ID:** DA-SENT-0119
**Sentence/Card ID:** `sentence-373`
**Field:** `lv`
**DE (read-only):** Von Beruf.
**CURRENT_DA:** Af profession.
**PROPOSED_DA:** Af fag
**Severity:** MEDIUM
**Problem:** 'Af profession' is unnatural calque in Danish.
**Reason:** 'Von Beruf' needs natural Danish occupational phrase.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 120 (Sätze)

**Finding:** 120
**Audit ID:** DA-SENT-0120
**Sentence/Card ID:** `sentence-374`
**Field:** `lv`
**DE (read-only):** Er ist Berliner von Geburt.
**CURRENT_DA:** Han er berliner af fødsel.
**PROPOSED_DA:** Han er berliner af fødsel
**Severity:** LOW
**Problem:** Lowercase 'berliner' should be 'Berliner'.
**Reason:** Proper noun/adjective for origin requires capital B.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 121 (Sätze)

**Finding:** 121
**Audit ID:** DA-SENT-0121
**Sentence/Card ID:** `sentence-375`
**Field:** `lv`
**DE (read-only):** Er steht vor dem Fenster.
**CURRENT_DA:** Han står ved vinduet.
**PROPOSED_DA:** Han står foran vinduet
**Severity:** MEDIUM
**Problem:** 'Ved vinduet' means by/at the window — spatial mismatch.
**Reason:** 'vor dem Fenster' means in front of the window.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 122 (Sätze)

**Finding:** 122
**Audit ID:** DA-SENT-0122
**Sentence/Card ID:** `sentence-378`
**Field:** `lv`
**DE (read-only):** Vor Freude.
**CURRENT_DA:** For sjov.
**PROPOSED_DA:** Af glæde
**Severity:** HIGH
**Problem:** 'For sjov' means for fun — wrong emotion.
**Reason:** 'Vor Freude' expresses for/out of joy.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 123 (Sätze)

**Finding:** 123
**Audit ID:** DA-SENT-0123
**Sentence/Card ID:** `sentence-380`
**Field:** `lv`
**DE (read-only):** Im Voraus.
**CURRENT_DA:** Tidligere.
**PROPOSED_DA:** På forhånd
**Severity:** HIGH
**Problem:** 'Tidligere' means earlier/before — wrong temporal sense.
**Reason:** 'Im Voraus' means in advance.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 124 (Sätze)

**Finding:** 124
**Audit ID:** DA-SENT-0124
**Sentence/Card ID:** `sentence-381`
**Field:** `lv`
**DE (read-only):** Unter der Voraussetzung, dass...
**CURRENT_DA:** Forudsat at...
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-156 (DE: "Unter der Bedingung, dass...")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 125 (Sätze)

**Finding:** 125
**Audit ID:** DA-SENT-0125
**Sentence/Card ID:** `sentence-382`
**Field:** `lv`
**DE (read-only):** Unter dem Vorbehalt.
**CURRENT_DA:** Betinget.
**PROPOSED_DA:** Med forbehold
**Severity:** MEDIUM
**Problem:** Bare 'Betinget' is incomplete and ambiguous.
**Reason:** 'Unter dem Vorbehalt' is a legal/formal reservation.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 126 (Sätze)

**Finding:** 126
**Audit ID:** DA-SENT-0126
**Sentence/Card ID:** `sentence-383`
**Field:** `lv`
**DE (read-only):** Vorhanden sein.
**CURRENT_DA:** At være. • Vær til stede • Vær tilgængelig
**PROPOSED_DA:** Være til stede • Være tilgængelig
**Severity:** MEDIUM
**Problem:** First variant 'At være' is too generic; duplicates in list.
**Reason:** 'Vorhanden sein' means to be available/exist.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 127 (Sätze)

**Finding:** 127
**Audit ID:** DA-SENT-0127
**Sentence/Card ID:** `sentence-385`
**Field:** `lv`
**DE (read-only):** Vorkehrungen treffen.
**CURRENT_DA:** Træf foranstaltninger til beskyttelse.
**PROPOSED_DA:** Træffe foranstaltninger
**Severity:** MEDIUM
**Problem:** Adds 'til beskyttelse' not in 'Vorkehrungen treffen'.
**Reason:** Translation must not add 'protection' absent from German.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 128 (Sätze)

**Finding:** 128
**Audit ID:** DA-SENT-0128
**Sentence/Card ID:** `sentence-390`
**Field:** `lv`
**DE (read-only):** Nach vorn.
**CURRENT_DA:** Forward.
**PROPOSED_DA:** Fremad
**Severity:** CRITICAL
**Problem:** English 'Forward.' left untranslated.
**Reason:** 'Nach vorn' requires Danish directional adverb.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 129 (Sätze)

**Finding:** 129
**Audit ID:** DA-SENT-0129
**Sentence/Card ID:** `sentence-402`
**Field:** `lv`
**DE (read-only):** Auf eine Nachricht warten.
**CURRENT_DA:** Vent på beskeden.
**PROPOSED_DA:** Vent på en besked.
**Severity:** MEDIUM
**Problem:** DE indefinite eine Nachricht; DA uses definite beskeden.
**Reason:** DE indefinite eine Nachricht; DA uses definite beskeden.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 130 (Sätze)

**Finding:** 130
**Audit ID:** DA-SENT-0130
**Sentence/Card ID:** `sentence-403`
**Field:** `lv`
**DE (read-only):** Was wollen Sie?
**CURRENT_DA:** Hvad vil du?
**PROPOSED_DA:** Hvad vil De?
**Severity:** HIGH
**Problem:** Formal Sie in DE; DA uses informal du.
**Reason:** Formal Sie in DE; DA uses informal du.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 131 (Sätze)

**Finding:** 131
**Audit ID:** DA-SENT-0131
**Sentence/Card ID:** `sentence-406`
**Field:** `lv`
**DE (read-only):** Auf diesem Wege.
**CURRENT_DA:** På den måde. • For sådanne midler
**PROPOSED_DA:** På den måde.
**Severity:** MEDIUM
**Problem:** Second variant misrenders DE; means by such means, not on this way.
**Reason:** Second variant misrenders DE; means by such means, not on this way.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 132 (Sätze)

**Finding:** 132
**Audit ID:** DA-SENT-0132
**Sentence/Card ID:** `sentence-409`
**Field:** `lv`
**DE (read-only):** Von Rechts wegen.
**CURRENT_DA:** Ved retfærdighed.
**PROPOSED_DA:** Af ret.
**Severity:** HIGH
**Problem:** DE means by right/lawfully, not by justice/fairness.
**Reason:** DE means by right/lawfully, not by justice/fairness.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 133 (Sätze)

**Finding:** 133
**Audit ID:** DA-SENT-0133
**Sentence/Card ID:** `sentence-413`
**Field:** `lv`
**DE (read-only):** Art und Weise.
**CURRENT_DA:** Type.
**PROPOSED_DA:** Måde og form.
**Severity:** HIGH
**Problem:** DE manner/way; DA Type alone is incomplete and wrong.
**Reason:** DE manner/way; DA Type alone is incomplete and wrong.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 134 (Sätze)

**Finding:** 134
**Audit ID:** DA-SENT-0134
**Sentence/Card ID:** `sentence-414`
**Field:** `lv`
**DE (read-only):** Ohne weiteres.
**CURRENT_DA:** Straks. • Straks
**PROPOSED_DA:** (Danish with matching negation)
**Severity:** HIGH
**Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
**Reason:** Semantic parity requires negation alignment
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 135 (Sätze)

**Finding:** 135
**Audit ID:** DA-SENT-0135
**Sentence/Card ID:** `sentence-414`
**Field:** `lv`
**DE (read-only):** Ohne weiteres.
**CURRENT_DA:** Straks. • Straks
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-121 (DE: "Auf der Stelle.")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 136 (Sätze)

**Finding:** 136
**Audit ID:** DA-SENT-0136
**Sentence/Card ID:** `sentence-414`
**Field:** `lv`
**DE (read-only):** Ohne weiteres.
**CURRENT_DA:** Straks. • Straks
**PROPOSED_DA:** Straks.
**Severity:** LOW
**Problem:** Duplicate variant entry; remove redundant Straks.
**Reason:** Duplicate variant entry; remove redundant Straks.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 137 (Sätze)

**Finding:** 137
**Audit ID:** DA-SENT-0137
**Sentence/Card ID:** `sentence-419`
**Field:** `lv`
**DE (read-only):** Alle Welt.
**CURRENT_DA:** Hele verden. • Alle
**PROPOSED_DA:** Hele verden.
**Severity:** MEDIUM
**Problem:** Second variant Alle is incomplete fragment, not valid translation.
**Reason:** Second variant Alle is incomplete fragment, not valid translation.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 138 (Sätze)

**Finding:** 138
**Audit ID:** DA-SENT-0138
**Sentence/Card ID:** `sentence-423`
**Field:** `lv`
**DE (read-only):** Wer da?
**CURRENT_DA:** Hvad er der?
**PROPOSED_DA:** Hvem er der?
**Severity:** HIGH
**Problem:** DE asks who is there; DA asks what is there.
**Reason:** DE asks who is there; DA asks what is there.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 139 (Sätze)

**Finding:** 139
**Audit ID:** DA-SENT-0139
**Sentence/Card ID:** `sentence-427`
**Field:** `lv`
**DE (read-only):** Es ist zwei Euro wert.
**CURRENT_DA:** Det koster to euro.
**PROPOSED_DA:** Det er to euro værd.
**Severity:** MEDIUM
**Problem:** DE states value/worth; DA states price/cost.
**Reason:** DE states value/worth; DA states price/cost.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 140 (Sätze)

**Finding:** 140
**Audit ID:** DA-SENT-0140
**Sentence/Card ID:** `sentence-428`
**Field:** `lv`
**DE (read-only):** Nach Westen.
**CURRENT_DA:** Mod vest.
**PROPOSED_DA:** (Natural Danish sentence)
**Severity:** HIGH
**Problem:** Foreign remnant or artifact: LV
**Reason:** DA sentence must be natural Danish without foreign fragments
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 141 (Sätze)

**Finding:** 141
**Audit ID:** DA-SENT-0141
**Sentence/Card ID:** `sentence-429`
**Field:** `lv`
**DE (read-only):** Von Westen.
**CURRENT_DA:** Fra vest.
**PROPOSED_DA:** (Natural Danish sentence)
**Severity:** HIGH
**Problem:** Foreign remnant or artifact: LV
**Reason:** DA sentence must be natural Danish without foreign fragments
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 142 (Sätze)

**Finding:** 142
**Audit ID:** DA-SENT-0142
**Sentence/Card ID:** `sentence-430`
**Field:** `lv`
**DE (read-only):** In Wettbewerb treten.
**CURRENT_DA:** Deltag i konkurrencen.
**PROPOSED_DA:** Deltag i en konkurrence.
**Severity:** LOW
**Problem:** DE generic competition; DA uses definite konkurrencen.
**Reason:** DE generic competition; DA uses definite konkurrencen.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 143 (Sätze)

**Finding:** 143
**Audit ID:** DA-SENT-0143
**Sentence/Card ID:** `sentence-431`
**Field:** `lv`
**DE (read-only):** Um die Wette laufen.
**CURRENT_DA:** Løb løbet.
**PROPOSED_DA:** Løbe om kap.
**Severity:** CRITICAL
**Problem:** DA Løb løbet is nonsensical; does not mean run a race/bet.
**Reason:** DA Løb løbet is nonsensical; does not mean run a race/bet.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 144 (Sätze)

**Finding:** 144
**Audit ID:** DA-SENT-0144
**Sentence/Card ID:** `sentence-432`
**Field:** `lv`
**DE (read-only):** Was gilt die Wette?
**CURRENT_DA:** Hvad forhandler vi om?
**PROPOSED_DA:** Hvad er væddemålet?
**Severity:** HIGH
**Problem:** DE asks about bet stakes; DA asks what we negotiate about.
**Reason:** DE asks about bet stakes; DA asks what we negotiate about.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 145 (Sätze)

**Finding:** 145
**Audit ID:** DA-SENT-0145
**Sentence/Card ID:** `sentence-434`
**Field:** `lv`
**DE (read-only):** Wettkampf im Turnen.
**CURRENT_DA:** Konkurrencer i gymnastik.
**PROPOSED_DA:** Konkurrence i gymnastik.
**Severity:** LOW
**Problem:** DE singular Wettkampf; DA uses plural konkurrencer.
**Reason:** DE singular Wettkampf; DA uses plural konkurrencer.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 146 (Sätze)

**Finding:** 146
**Audit ID:** DA-SENT-0146
**Sentence/Card ID:** `sentence-438`
**Field:** `lv`
**DE (read-only):** Wie lange?
**CURRENT_DA:** Hvor længe
**PROPOSED_DA:** Hvor længe?
**Severity:** LOW
**Problem:** Missing question mark in DA interrogative.
**Reason:** Missing question mark in DA interrogative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 147 (Sätze)

**Finding:** 147
**Audit ID:** DA-SENT-0147
**Sentence/Card ID:** `sentence-439`
**Field:** `lv`
**DE (read-only):** Auf Wiederhören!
**CURRENT_DA:** Farvel!
**PROPOSED_DA:** Vi tales!
**Severity:** MEDIUM
**Problem:** DE phone farewell; generic Farvel loses auf Wiederhören sense.
**Reason:** DE phone farewell; generic Farvel loses auf Wiederhören sense.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 148 (Sätze)

**Finding:** 148
**Audit ID:** DA-SENT-0148
**Sentence/Card ID:** `sentence-440`
**Field:** `lv`
**DE (read-only):** Auf Wiedersehen!
**CURRENT_DA:** Farvel!
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-439 (DE: "Auf Wiederhören!")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 149 (Sätze)

**Finding:** 149
**Audit ID:** DA-SENT-0149
**Sentence/Card ID:** `sentence-440`
**Field:** `lv`
**DE (read-only):** Auf Wiedersehen!
**CURRENT_DA:** Farvel!
**PROPOSED_DA:** Vi ses!
**Severity:** MEDIUM
**Problem:** Generic Farvel; also duplicates sentence-439 DA for distinct DE farewells.
**Reason:** Generic Farvel; also duplicates sentence-439 DA for distinct DE farewells.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 150 (Sätze)

**Finding:** 150
**Audit ID:** DA-SENT-0150
**Sentence/Card ID:** `sentence-442`
**Field:** `lv`
**DE (read-only):** Herzlich willkommen!
**CURRENT_DA:** Varme hilsner!
**PROPOSED_DA:** Velkommen!
**Severity:** HIGH
**Problem:** DE welcomes; DA warm greetings is wrong meaning.
**Reason:** DE welcomes; DA warm greetings is wrong meaning.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 151 (Sätze)

**Finding:** 151
**Audit ID:** DA-SENT-0151
**Sentence/Card ID:** `sentence-443`
**Field:** `lv`
**DE (read-only):** Du musst ziehen.
**CURRENT_DA:** Du har et træk.
**PROPOSED_DA:** Du skal trække.
**Severity:** HIGH
**Problem:** DE imperative you must pull/draw; DA states you have a draw.
**Reason:** DE imperative you must pull/draw; DA states you have a draw.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 152 (Sätze)

**Finding:** 152
**Audit ID:** DA-SENT-0152
**Sentence/Card ID:** `sentence-444`
**Field:** `lv`
**DE (read-only):** Es zieht.
**CURRENT_DA:** Træk
**PROPOSED_DA:** Det trækker.
**Severity:** MEDIUM
**Problem:** DA fragment; incomplete sentence for there is a draft/it pulls.
**Reason:** DA fragment; incomplete sentence for there is a draft/it pulls.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 153 (Sätze)

**Finding:** 153
**Audit ID:** DA-SENT-0153
**Sentence/Card ID:** `sentence-446`
**Field:** `lv`
**DE (read-only):** Zipfel einer Wurst.
**CURRENT_DA:** Pølse tip.
**PROPOSED_DA:** Spidsen af en pølse.
**Severity:** LOW
**Problem:** Awkward English-style word order; unnatural Danish.
**Reason:** Awkward English-style word order; unnatural Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 154 (Sätze)

**Finding:** 154
**Audit ID:** DA-SENT-0154
**Sentence/Card ID:** `sentence-453`
**Field:** `lv`
**DE (read-only):** Zu Fuß.
**CURRENT_DA:** Til benene.
**PROPOSED_DA:** På fod.
**Severity:** CRITICAL
**Problem:** Til benene means to the legs; DE on foot requires på fod.
**Reason:** Til benene means to the legs; DE on foot requires på fod.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 155 (Sätze)

**Finding:** 155
**Audit ID:** DA-SENT-0155
**Sentence/Card ID:** `sentence-454`
**Field:** `lv`
**DE (read-only):** Zu Pferde.
**CURRENT_DA:** Ja.
**PROPOSED_DA:** På hest.
**Severity:** CRITICAL
**Problem:** DA Ja is completely wrong; DE means on horseback/riding.
**Reason:** DA Ja is completely wrong; DE means on horseback/riding.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 156 (Sätze)

**Finding:** 156
**Audit ID:** DA-SENT-0156
**Sentence/Card ID:** `sentence-463`
**Field:** `lv`
**DE (read-only):** Zugrunde legen.
**CURRENT_DA:** Sæt på grundlag. • Tag udgangspunkt i.
**PROPOSED_DA:** Ødelægge.
**Severity:** HIGH
**Problem:** Variants mean base on; DE here means destroy/lay waste (zugrunde legen).
**Reason:** Variants mean base on; DE here means destroy/lay waste (zugrunde legen).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 157 (Sätze)

**Finding:** 157
**Audit ID:** DA-SENT-0157
**Sentence/Card ID:** `sentence-465`
**Field:** `lv`
**DE (read-only):** Machen Sie bitte die Tür zu!
**CURRENT_DA:** Luk venligst døren!
**PROPOSED_DA:** Luk venligst døren, De!
**Severity:** MEDIUM
**Problem:** Formal Sie in DE; DA lacks formal address.
**Reason:** Formal Sie in DE; DA lacks formal address.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 158 (Sätze)

**Finding:** 158
**Audit ID:** DA-SENT-0158
**Sentence/Card ID:** `sentence-472`
**Field:** `lv`
**DE (read-only):** Zutritt verboten!
**CURRENT_DA:** Adgang er forbudt!
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-364 (DE: "Eintritt verboten!")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 159 (Sätze)

**Finding:** 159
**Audit ID:** DA-SENT-0159
**Sentence/Card ID:** `sentence-472`
**Field:** `lv`
**DE (read-only):** Zutritt verboten!
**CURRENT_DA:** Adgang er forbudt!
**PROPOSED_DA:** Adgang forbudt!
**Severity:** MEDIUM
**Problem:** Same DA as sentence-364 Eintritt verboten; distinct DE entries need distinct DA.
**Reason:** Same DA as sentence-364 Eintritt verboten; distinct DE entries need distinct DA.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 160 (Sätze)

**Finding:** 160
**Audit ID:** DA-SENT-0160
**Sentence/Card ID:** `sentence-477`
**Field:** `lv`
**DE (read-only):** Ohne Zweifel.
**CURRENT_DA:** Uden tøven.
**PROPOSED_DA:** Uden tvivl.
**Severity:** HIGH
**Problem:** DE without doubt; DA without hesitation is wrong meaning.
**Reason:** DE without doubt; DA without hesitation is wrong meaning.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 161 (Sätze)

**Finding:** 161
**Audit ID:** DA-SENT-0161
**Sentence/Card ID:** `sentence-481`
**Field:** `lv`
**DE (read-only):** Gute Reise!
**CURRENT_DA:** God rejse!
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-321 (DE: "Glückliche Reise!")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 162 (Sätze)

**Finding:** 162
**Audit ID:** DA-SENT-0162
**Sentence/Card ID:** `sentence-481`
**Field:** `lv`
**DE (read-only):** Gute Reise!
**CURRENT_DA:** God rejse!
**PROPOSED_DA:** God tur!
**Severity:** MEDIUM
**Problem:** Same DA as sentence-321 Glückliche Reise; distinct DE entries need distinct DA.
**Reason:** Same DA as sentence-321 Glückliche Reise; distinct DE entries need distinct DA.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 163 (Sätze)

**Finding:** 163
**Audit ID:** DA-SENT-0163
**Sentence/Card ID:** `sentence-482`
**Field:** `lv`
**DE (read-only):** Es freut mich, Sie kennenzulernen.
**CURRENT_DA:** Jeg er glad for at møde dig.
**PROPOSED_DA:** Jeg er glad for at møde Dem.
**Severity:** MEDIUM
**Problem:** Formal Sie in DE; DA uses informal dig.
**Reason:** Formal Sie in DE; DA uses informal dig.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 164 (Sätze)

**Finding:** 164
**Audit ID:** DA-SENT-0164
**Sentence/Card ID:** `sentence-483`
**Field:** `lv`
**DE (read-only):** Wären Sie bitte so nett?
**CURRENT_DA:** Vil du venligst være så venlig?
**PROPOSED_DA:** Vil De venligst være så venlig?
**Severity:** MEDIUM
**Problem:** Formal Sie in DE; DA uses informal du.
**Reason:** Formal Sie in DE; DA uses informal du.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 165 (Sätze)

**Finding:** 165
**Audit ID:** DA-SENT-0165
**Sentence/Card ID:** `sentence-484`
**Field:** `lv`
**DE (read-only):** Ich bin Ihnen sehr dankbar.
**CURRENT_DA:** Jeg er dig meget taknemmelig.
**PROPOSED_DA:** Jeg er Dem meget taknemmelig.
**Severity:** MEDIUM
**Problem:** Formal Ihnen in DE; DA uses informal dig.
**Reason:** Formal Ihnen in DE; DA uses informal dig.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 166 (Sätze)

**Finding:** 166
**Audit ID:** DA-SENT-0166
**Sentence/Card ID:** `sentence-485`
**Field:** `lv`
**DE (read-only):** Setzt euch bitte hin!
**CURRENT_DA:** Sæt dig ned, tak!
**PROPOSED_DA:** Sæt jer ned, tak!
**Severity:** HIGH
**Problem:** DE plural euch; DA uses singular dig.
**Reason:** DE plural euch; DA uses singular dig.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 167 (Sätze)

**Finding:** 167
**Audit ID:** DA-SENT-0167
**Sentence/Card ID:** `sentence-486`
**Field:** `lv`
**DE (read-only):** Ben, komm bitte an die Tafel!
**CURRENT_DA:** Ben, kom venligst til bestyrelsen!
**PROPOSED_DA:** Ben, kom venligst til tavlen!
**Severity:** HIGH
**Problem:** DE Tafel is blackboard; bestyrelsen means board of directors.
**Reason:** DE Tafel is blackboard; bestyrelsen means board of directors.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 168 (Sätze)

**Finding:** 168
**Audit ID:** DA-SENT-0168
**Sentence/Card ID:** `sentence-488`
**Field:** `lv`
**DE (read-only):** Geht bitte in die Sporthalle!
**CURRENT_DA:** Gå venligst i fitnesscenteret!
**PROPOSED_DA:** Gå venligst til gymnastiksalen!
**Severity:** MEDIUM
**Problem:** DE sports hall/gym; fitnesscenter is wrong venue.
**Reason:** DE sports hall/gym; fitnesscenter is wrong venue.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 169 (Sätze)

**Finding:** 169
**Audit ID:** DA-SENT-0169
**Sentence/Card ID:** `sentence-489`
**Field:** `lv`
**DE (read-only):** Schläfst du noch?
**CURRENT_DA:** Sover du stadig
**PROPOSED_DA:** Sover du stadig?
**Severity:** LOW
**Problem:** Missing question mark in DA interrogative.
**Reason:** Missing question mark in DA interrogative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 170 (Sätze)

**Finding:** 170
**Audit ID:** DA-SENT-0170
**Sentence/Card ID:** `sentence-490`
**Field:** `lv`
**DE (read-only):** Schlafen Sie noch?
**CURRENT_DA:** Sover du stadig?
**PROPOSED_DA:** Sover De stadig?
**Severity:** MEDIUM
**Problem:** Formal Sie in DE; DA uses informal du.
**Reason:** Formal Sie in DE; DA uses informal du.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 171 (Sätze)

**Finding:** 171
**Audit ID:** DA-SENT-0171
**Sentence/Card ID:** `sentence-491`
**Field:** `lv`
**DE (read-only):** Er ist fest eingeschlafen.
**CURRENT_DA:** Han sover hurtigt.
**PROPOSED_DA:** Han sover dybt.
**Severity:** HIGH
**Problem:** DE sound/fast asleep; hurtigt means quickly, wrong sense.
**Reason:** DE sound/fast asleep; hurtigt means quickly, wrong sense.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 172 (Sätze)

**Finding:** 172
**Audit ID:** DA-SENT-0172
**Sentence/Card ID:** `sentence-496`
**Field:** `lv`
**DE (read-only):** Lest bitte mit!
**CURRENT_DA:** Læs venligst videre!
**PROPOSED_DA:** Læs med!
**Severity:** HIGH
**Problem:** DE read along/with; videre means continue reading, wrong.
**Reason:** DE read along/with; videre means continue reading, wrong.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 173 (Sätze)

**Finding:** 173
**Audit ID:** DA-SENT-0173
**Sentence/Card ID:** `sentence-497`
**Field:** `lv`
**DE (read-only):** Emma, schau bitte nicht aus dem Fenster!
**CURRENT_DA:** Emma, ​​kig venligst ikke ud af vinduet!
**PROPOSED_DA:** (Natural Danish sentence)
**Severity:** MEDIUM
**Problem:** Foreign remnant or artifact: ZERO_WIDTH
**Reason:** DA sentence must be natural Danish without foreign fragments
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 174 (Sätze)

**Finding:** 174
**Audit ID:** DA-SENT-0174
**Sentence/Card ID:** `sentence-497`
**Field:** `lv`
**DE (read-only):** Emma, schau bitte nicht aus dem Fenster!
**CURRENT_DA:** Emma, ​​kig venligst ikke ud af vinduet!
**PROPOSED_DA:** Emma, kig venligst ikke ud af vinduet!
**Severity:** MEDIUM
**Problem:** Zero-width space artifact after comma in DA string.
**Reason:** Zero-width space artifact after comma in DA string.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 175 (Sätze)

**Finding:** 175
**Audit ID:** DA-SENT-0175
**Sentence/Card ID:** `sentence-499`
**Field:** `lv`
**DE (read-only):** Geh bitte zurück an deinen Platz!
**CURRENT_DA:** Gå tilbage til dit sted!
**PROPOSED_DA:** Gå tilbage til din plads!
**Severity:** LOW
**Problem:** Sted is vague; plads matches DE Platz/seat in classroom.
**Reason:** Sted is vague; plads matches DE Platz/seat in classroom.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 176 (Sätze)

**Finding:** 176
**Audit ID:** DA-SENT-0176
**Sentence/Card ID:** `sentence-503`
**Field:** `lv`
**DE (read-only):** Steh auf, Hanna, es klingelt!
**CURRENT_DA:** Rejs dig op, Hannah, klokken ringer!
**PROPOSED_DA:** Rejs dig, Hanna, der ringer!
**Severity:** MEDIUM
**Problem:** DE doorbell rings; klokken ringer means clock rings.
**Reason:** DE doorbell rings; klokken ringer means clock rings.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 177 (Sätze)

**Finding:** 177
**Audit ID:** DA-SENT-0177
**Sentence/Card ID:** `sentence-506`
**Field:** `lv`
**DE (read-only):** Wo ist das Handtuch?
**CURRENT_DA:** Hvor er håndklædet
**PROPOSED_DA:** Hvor er håndklædet?
**Severity:** LOW
**Problem:** Missing question mark in DA interrogative.
**Reason:** Missing question mark in DA interrogative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 178 (Sätze)

**Finding:** 178
**Audit ID:** DA-SENT-0178
**Sentence/Card ID:** `sentence-509`
**Field:** `lv`
**DE (read-only):** Ich möchte mich anziehen.
**CURRENT_DA:** Jeg vil gerne klædes på.
**PROPOSED_DA:** Jeg vil gerne tage tøj på.
**Severity:** MEDIUM
**Problem:** Klædes på is stilted; tage tøj på is natural Danish.
**Reason:** Klædes på is stilted; tage tøj på is natural Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 179 (Sätze)

**Finding:** 179
**Audit ID:** DA-SENT-0179
**Sentence/Card ID:** `sentence-511`
**Field:** `lv`
**DE (read-only):** Kleide dich wärmer an, draußen ist es kühl.
**CURRENT_DA:** Klæd dig varmt på, det er koldt udenfor.
**PROPOSED_DA:** Klæd dig varmere på, det er køligt udenfor.
**Severity:** LOW
**Problem:** DE warmer and cool; DA warm and cold loses nuance.
**Reason:** DE warmer and cool; DA warm and cold loses nuance.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 180 (Sätze)

**Finding:** 180
**Audit ID:** DA-SENT-0180
**Sentence/Card ID:** `sentence-514`
**Field:** `lv`
**DE (read-only):** Was gibt es Neues?
**CURRENT_DA:** Hvad er nyt?
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-261 (DE: "Was gibt’s Neues?")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 181 (Sätze)

**Finding:** 181
**Audit ID:** DA-SENT-0181
**Sentence/Card ID:** `sentence-514`
**Field:** `lv`
**DE (read-only):** Was gibt es Neues?
**CURRENT_DA:** Hvad er nyt?
**PROPOSED_DA:** Hvad nyt?
**Severity:** MEDIUM
**Problem:** Same DA as sentence-261; distinct DE entries should differ or note pair.
**Reason:** Same DA as sentence-261; distinct DE entries should differ or note pair.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 182 (Sätze)

**Finding:** 182
**Audit ID:** DA-SENT-0182
**Sentence/Card ID:** `sentence-519`
**Field:** `lv`
**DE (read-only):** Am liebsten trinke ich schwarzen Kaffee.
**CURRENT_DA:** Jeg drikker bedst sort kaffe.
**PROPOSED_DA:** Helst drikker jeg sort kaffe.
**Severity:** MEDIUM
**Problem:** DE most preferably; drikker bedst is unnatural for preference.
**Reason:** DE most preferably; drikker bedst is unnatural for preference.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 183 (Sätze)

**Finding:** 183
**Audit ID:** DA-SENT-0183
**Sentence/Card ID:** `sentence-528`
**Field:** `lv`
**DE (read-only):** Wann esst ihr zu Mittag?
**CURRENT_DA:** Hvornår spiser du frokost
**PROPOSED_DA:** Hvornår spiser I frokost?
**Severity:** MEDIUM
**Problem:** DE plural ihr; DA singular du; missing question mark.
**Reason:** DE plural ihr; DA singular du; missing question mark.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 184 (Sätze)

**Finding:** 184
**Audit ID:** DA-SENT-0184
**Sentence/Card ID:** `sentence-531`
**Field:** `lv`
**DE (read-only):** Wie schmeckt dir die Suppe?
**CURRENT_DA:** Hvordan kan du lide suppen?
**PROPOSED_DA:** Hvad synes du om suppen?
**Severity:** MEDIUM
**Problem:** Awkward DA; synes om is natural for how does it taste to you.
**Reason:** Awkward DA; synes om is natural for how does it taste to you.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 185 (Sätze)

**Finding:** 185
**Audit ID:** DA-SENT-0185
**Sentence/Card ID:** `sentence-538`
**Field:** `lv`
**DE (read-only):** Bist du heute Abend frei?
**CURRENT_DA:** Har du fri i aften
**PROPOSED_DA:** Har du fri i aften?
**Severity:** LOW
**Problem:** Missing question mark in DA interrogative.
**Reason:** Missing question mark in DA interrogative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 186 (Sätze)

**Finding:** 186
**Audit ID:** DA-SENT-0186
**Sentence/Card ID:** `sentence-539`
**Field:** `lv`
**DE (read-only):** Komm doch heute zum Mittagessen vorbei!
**CURRENT_DA:** Kom og besøg til frokost i dag!
**PROPOSED_DA:** Kom til frokost i dag!
**Severity:** MEDIUM
**Problem:** Awkward besøg til frokost; natural invite is kom til frokost.
**Reason:** Awkward besøg til frokost; natural invite is kom til frokost.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 187 (Sätze)

**Finding:** 187
**Audit ID:** DA-SENT-0187
**Sentence/Card ID:** `sentence-541`
**Field:** `lv`
**DE (read-only):** Bitte, bedien dich!
**CURRENT_DA:** Spis så meget du vil!
**PROPOSED_DA:** Tag for dig!
**Severity:** HIGH
**Problem:** DE help yourself; DA eat as much as you want is wrong.
**Reason:** DE help yourself; DA eat as much as you want is wrong.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 188 (Sätze)

**Finding:** 188
**Audit ID:** DA-SENT-0188
**Sentence/Card ID:** `sentence-544`
**Field:** `lv`
**DE (read-only):** Wann gehst du ins Bett?
**CURRENT_DA:** Hvornår går du i seng
**PROPOSED_DA:** Hvornår går du i seng?
**Severity:** LOW
**Problem:** Missing question mark in DA interrogative.
**Reason:** Missing question mark in DA interrogative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 189 (Sätze)

**Finding:** 189
**Audit ID:** DA-SENT-0189
**Sentence/Card ID:** `sentence-547`
**Field:** `lv`
**DE (read-only):** Es ist schönes Wetter.
**CURRENT_DA:** Det er en dejlig tid.
**PROPOSED_DA:** Det er dejligt vejr.
**Severity:** CRITICAL
**Problem:** DE beautiful weather; DA lovely time is completely wrong.
**Reason:** DE beautiful weather; DA lovely time is completely wrong.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 190 (Sätze)

**Finding:** 190
**Audit ID:** DA-SENT-0190
**Sentence/Card ID:** `sentence-558`
**Field:** `lv`
**DE (read-only):** Wir bekommen gleich ein Gewitter.
**CURRENT_DA:** Vi er ved at få en storm.
**PROPOSED_DA:** Vi får snart et uvejr med torden.
**Severity:** MEDIUM
**Problem:** DE thunderstorm; storm alone misses Gewitter/torden.
**Reason:** DE thunderstorm; storm alone misses Gewitter/torden.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 191 (Sätze)

**Finding:** 191
**Audit ID:** DA-SENT-0191
**Sentence/Card ID:** `sentence-559`
**Field:** `lv`
**DE (read-only):** Das Gewitter zieht vorüber.
**CURRENT_DA:** Stormen er forbi.
**PROPOSED_DA:** Uvejret er passeret.
**Severity:** MEDIUM
**Problem:** DE thunderstorm passing; stormen is too generic.
**Reason:** DE thunderstorm passing; stormen is too generic.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 192 (Sätze)

**Finding:** 192
**Audit ID:** DA-SENT-0192
**Sentence/Card ID:** `sentence-560`
**Field:** `lv`
**DE (read-only):** Die Wolken verziehen sich.
**CURRENT_DA:** Skyerne spreder sig.
**PROPOSED_DA:** Skyerne trækker væk.
**Severity:** LOW
**Problem:** DE clouds disperse/move away; spreder sig means spread out.
**Reason:** DE clouds disperse/move away; spreder sig means spread out.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 193 (Sätze)

**Finding:** 193
**Audit ID:** DA-SENT-0193
**Sentence/Card ID:** `sentence-562`
**Field:** `lv`
**DE (read-only):** Der Winter ist da, es hat geschneit.
**CURRENT_DA:** Vinteren er her, det sneede om natten.
**PROPOSED_DA:** Vinteren er her, det har sneet.
**Severity:** LOW
**Problem:** DA adds om natten not present in DE.
**Reason:** DA adds om natten not present in DE.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 194 (Sätze)

**Finding:** 194
**Audit ID:** DA-SENT-0194
**Sentence/Card ID:** `sentence-567`
**Field:** `lv`
**DE (read-only):** Wollen wir auf die Eisbahn gehen?
**CURRENT_DA:** Skal vi stå på skøjter?
**PROPOSED_DA:** Skal vi gå på skøjter?
**Severity:** MEDIUM
**Problem:** DE go to ice rink; stå på skøjter omits going to rink.
**Reason:** DE go to ice rink; stå på skøjter omits going to rink.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 195 (Sätze)

**Finding:** 195
**Audit ID:** DA-SENT-0195
**Sentence/Card ID:** `sentence-569`
**Field:** `lv`
**DE (read-only):** Es ist halb sieben.
**CURRENT_DA:** Klokken er halv otte.
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-500 (DE: "Es ist halb acht.")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 196 (Sätze)

**Finding:** 196
**Audit ID:** DA-SENT-0196
**Sentence/Card ID:** `sentence-569`
**Field:** `lv`
**DE (read-only):** Es ist halb sieben.
**CURRENT_DA:** Klokken er halv otte.
**PROPOSED_DA:** Klokken er halv syv.
**Severity:** HIGH
**Problem:** DE halb sieben=6:30; DA halv otte=7:30; also duplicates sentence-500 time phrase.
**Reason:** DE halb sieben=6:30; DA halv otte=7:30; also duplicates sentence-500 time phrase.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 197 (Sätze)

**Finding:** 197
**Audit ID:** DA-SENT-0197
**Sentence/Card ID:** `sentence-570`
**Field:** `lv`
**DE (read-only):** Meine Uhr geht fünf Minuten vor.
**CURRENT_DA:** Mit ur er hurtigt fem minutter.
**PROPOSED_DA:** Mit ur går fem minutter for.
**Severity:** HIGH
**Problem:** DA er hurtigt is ungrammatical; clock runs fast needs går for.
**Reason:** DA er hurtigt is ungrammatical; clock runs fast needs går for.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 198 (Sätze)

**Finding:** 198
**Audit ID:** DA-SENT-0198
**Sentence/Card ID:** `sentence-576`
**Field:** `lv`
**DE (read-only):** Wie geht es dir?
**CURRENT_DA:** Hvordan har du det
**PROPOSED_DA:** (Context-specific Danish for this DE sentence)
**Severity:** MEDIUM
**Problem:** Duplicate DA translation shared with sentence-257 (DE: "Wie geht es Ihnen?")
**Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 199 (Sätze)

**Finding:** 199
**Audit ID:** DA-SENT-0199
**Sentence/Card ID:** `sentence-576`
**Field:** `lv`
**DE (read-only):** Wie geht es dir?
**CURRENT_DA:** Hvordan har du det
**PROPOSED_DA:** Hvordan har du det?
**Severity:** MEDIUM
**Problem:** Same DA as formal sentence-257; missing question mark.
**Reason:** Same DA as formal sentence-257; missing question mark.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 200 (Sätze)

**Finding:** 200
**Audit ID:** DA-SENT-0200
**Sentence/Card ID:** `sentence-577`
**Field:** `lv`
**DE (read-only):** Entschuldige, ich möchte etwas mit dir besprechen.
**CURRENT_DA:** Undskyld mig, jeg vil diskutere noget med dig.
**PROPOSED_DA:** Undskyld, jeg vil tale med dig om noget.
**Severity:** MEDIUM
**Problem:** DE discuss/talk about; diskutere implies argue; Undskyld mig stilted.
**Reason:** DE discuss/talk about; diskutere implies argue; Undskyld mig stilted.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 201 (Sätze)

**Finding:** 201
**Audit ID:** DA-SENT-0201
**Sentence/Card ID:** `sentence-580`
**Field:** `lv`
**DE (read-only):** Ich komme, um dich zum Spaziergang abzuholen.
**CURRENT_DA:** Jeg kom for at tage dig en tur.
**PROPOSED_DA:** Jeg kommer for at hente dig til en gåtur.
**Severity:** HIGH
**Problem:** DA tage dig en tur is ungrammatical; DE pick up for walk.
**Reason:** DA tage dig en tur is ungrammatical; DE pick up for walk.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 202 (Sätze)

**Finding:** 202
**Audit ID:** DA-SENT-0202
**Sentence/Card ID:** `sentence-582`
**Field:** `lv`
**DE (read-only):** Ich bin zum ersten Mal in dieser Gegend.
**CURRENT_DA:** Jeg er her for første gang.
**PROPOSED_DA:** Det er første gang, jeg er i dette område.
**Severity:** MEDIUM
**Problem:** DE in this area/neighborhood; DA loses Gegend specificity.
**Reason:** DE in this area/neighborhood; DA loses Gegend specificity.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 203 (Sätze)

**Finding:** 203
**Audit ID:** DA-SENT-0203
**Sentence/Card ID:** `sentence-589`
**Field:** `lv`
**DE (read-only):** Wie komme ich am schnellsten zum Bahnhof?
**CURRENT_DA:** Hvordan kommer man hurtigere til stationen?
**PROPOSED_DA:** Hvordan kommer jeg hurtigst til stationen?
**Severity:** HIGH
**Problem:** DE fastest way; DA faster comparative is wrong degree.
**Reason:** DE fastest way; DA faster comparative is wrong degree.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 204 (Sätze)

**Finding:** 204
**Audit ID:** DA-SENT-0204
**Sentence/Card ID:** `sentence-595`
**Field:** `lv`
**DE (read-only):** In einer halben Stunde.
**CURRENT_DA:** Efter en halv time.
**PROPOSED_DA:** Om en halv time.
**Severity:** HIGH
**Problem:** DE in half an hour (from now); efter means after elapsed time.
**Reason:** DE in half an hour (from now); efter means after elapsed time.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 205 (Sätze)

**Finding:** 205
**Audit ID:** DA-SENT-0205
**Sentence/Card ID:** `sentence-596`
**Field:** `lv`
**DE (read-only):** Kann ich noch eine Kabine bekommen?
**CURRENT_DA:** Kan jeg stadig få en hytte?
**PROPOSED_DA:** Kan jeg stadig få en kahyt?
**Severity:** MEDIUM
**Problem:** DE ship cabin Kabine; hytte means cottage/hut.
**Reason:** DE ship cabin Kabine; hytte means cottage/hut.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 206 (Sätze)

**Finding:** 206
**Audit ID:** DA-SENT-0206
**Sentence/Card ID:** `sentence-599`
**Field:** `lv`
**DE (read-only):** Der Zug fährt um halb sieben ab.
**CURRENT_DA:** Toget går klokken halv otte.
**PROPOSED_DA:** Toget går klokken halv syv.
**Severity:** HIGH
**Problem:** DE halb sieben departure=6:30; DA halv otte wrongly gives 7:30.
**Reason:** DE halb sieben departure=6:30; DA halv otte wrongly gives 7:30.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 207 (Sätze)

**Finding:** 207
**Audit ID:** DA-SENT-0207
**Sentence/Card ID:** `sentence-607`
**Field:** `lv`
**DE (read-only):** Muss ich in Koblenz umsteigen?
**CURRENT_DA:** Skal jeg skifte plads i Koblenz?
**PROPOSED_DA:** Skal jeg skifte tog i Koblenz?
**Severity:** HIGH
**Problem:** 'Umsteigen' means changing trains, not changing seats ('skifte plads').
**Reason:** 'Umsteigen' means changing trains, not changing seats ('skifte plads').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 208 (Sätze)

**Finding:** 208
**Audit ID:** DA-SENT-0208
**Sentence/Card ID:** `sentence-608`
**Field:** `lv`
**DE (read-only):** Ja, dort musst du umsteigen.
**CURRENT_DA:** Ja, du skal skifte plads der.
**PROPOSED_DA:** Ja, du skal skifte tog der.
**Severity:** HIGH
**Problem:** 'Umsteigen' means changing trains, not changing seats ('skifte plads').
**Reason:** 'Umsteigen' means changing trains, not changing seats ('skifte plads').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 209 (Sätze)

**Finding:** 209
**Audit ID:** DA-SENT-0209
**Sentence/Card ID:** `sentence-609`
**Field:** `lv`
**DE (read-only):** Ist dieser Platz frei?
**CURRENT_DA:** Er dette sted ledigt?
**PROPOSED_DA:** Er dette sæde ledigt?
**Severity:** MEDIUM
**Problem:** 'Platz' here means seat, not place ('sted').
**Reason:** 'Platz' here means seat, not place ('sted').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 210 (Sätze)

**Finding:** 210
**Audit ID:** DA-SENT-0210
**Sentence/Card ID:** `sentence-617`
**Field:** `lv`
**DE (read-only):** Wo muss ich umsteigen?
**CURRENT_DA:** Hvor skal jeg overføre?
**PROPOSED_DA:** Hvor skal jeg skifte tog?
**Severity:** HIGH
**Problem:** 'Overføre' is not used for changing trains; 'skifte tog' is correct.
**Reason:** 'Overføre' is not used for changing trains; 'skifte tog' is correct.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 211 (Sätze)

**Finding:** 211
**Audit ID:** DA-SENT-0211
**Sentence/Card ID:** `sentence-619`
**Field:** `lv`
**DE (read-only):** Dieser Wagen ist für Nichtraucher.
**CURRENT_DA:** Denne vogn er ikke-ryger.
**PROPOSED_DA:** Denne vogn er for ikke-rygere.
**Severity:** MEDIUM
**Problem:** Awkward phrasing; standard Danish is 'for ikke-rygere'.
**Reason:** Awkward phrasing; standard Danish is 'for ikke-rygere'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 212 (Sätze)

**Finding:** 212
**Audit ID:** DA-SENT-0212
**Sentence/Card ID:** `sentence-621`
**Field:** `lv`
**DE (read-only):** Hast du etwas zu verzollen?
**CURRENT_DA:** Har du noget at rydde op?
**PROPOSED_DA:** Har du noget at fortolde?
**Severity:** CRITICAL
**Problem:** 'Verzollen' means customs declaration, not cleaning up ('rydde op').
**Reason:** 'Verzollen' means customs declaration, not cleaning up ('rydde op').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 213 (Sätze)

**Finding:** 213
**Audit ID:** DA-SENT-0213
**Sentence/Card ID:** `sentence-624`
**Field:** `lv`
**DE (read-only):** Haben Sie freie Zimmer?
**CURRENT_DA:** Har du nogle ledige værelser?
**PROPOSED_DA:** Har De ledige værelser?
**Severity:** MEDIUM
**Problem:** Formal German 'Sie' should map to formal Danish, not informal 'du'.
**Reason:** Formal German 'Sie' should map to formal Danish, not informal 'du'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 214 (Sätze)

**Finding:** 214
**Audit ID:** DA-SENT-0214
**Sentence/Card ID:** `sentence-628`
**Field:** `lv`
**DE (read-only):** Die Rechnung, bitte!
**CURRENT_DA:** Bill, tak!
**PROPOSED_DA:** Regningen, tak!
**Severity:** CRITICAL
**Problem:** English remnant 'Bill' instead of Danish 'regning'.
**Reason:** English remnant 'Bill' instead of Danish 'regning'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 215 (Sätze)

**Finding:** 215
**Audit ID:** DA-SENT-0215
**Sentence/Card ID:** `sentence-639`
**Field:** `lv`
**DE (read-only):** Kellner, zahlen bitte!
**CURRENT_DA:** Tjener, betal venligst!
**PROPOSED_DA:** Tjener, regningen, tak!
**Severity:** HIGH
**Problem:** Customer asks to pay the bill, not instructs waiter to pay.
**Reason:** Customer asks to pay the bill, not instructs waiter to pay.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 216 (Sätze)

**Finding:** 216
**Audit ID:** DA-SENT-0216
**Sentence/Card ID:** `sentence-645`
**Field:** `lv`
**DE (read-only):** Haben Sie etwas Erfrischendes?
**CURRENT_DA:** Har du noget forfriskende?
**PROPOSED_DA:** Har De noget forfriskende?
**Severity:** MEDIUM
**Problem:** Formal German 'Sie' should map to formal Danish, not informal 'du'.
**Reason:** Formal German 'Sie' should map to formal Danish, not informal 'du'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 217 (Sätze)

**Finding:** 217
**Audit ID:** DA-SENT-0217
**Sentence/Card ID:** `sentence-651`
**Field:** `lv`
**DE (read-only):** Erinnere mich morgen daran zu schreiben!
**CURRENT_DA:** Mind mig om at skrive under i morgen!
**PROPOSED_DA:** Mind mig om at skrive i morgen!
**Severity:** HIGH
**Problem:** 'Schreiben' means write, not sign ('skrive under').
**Reason:** 'Schreiben' means write, not sign ('skrive under').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 218 (Sätze)

**Finding:** 218
**Audit ID:** DA-SENT-0218
**Sentence/Card ID:** `sentence-652`
**Field:** `lv`
**DE (read-only):** Werfen Sie bitte diesen Brief in den Briefkasten.
**CURRENT_DA:** Send venligst dette brev i postkassen!
**PROPOSED_DA:** Smid venligst dette brev i postkassen!
**Severity:** MEDIUM
**Problem:** 'Werfen' means put/throw into mailbox; 'send' implies mailing, not depositing.
**Reason:** 'Werfen' means put/throw into mailbox; 'send' implies mailing, not depositing.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 219 (Sätze)

**Finding:** 219
**Audit ID:** DA-SENT-0219
**Sentence/Card ID:** `sentence-654`
**Field:** `lv`
**DE (read-only):** Kann ich dich später anrufen?
**CURRENT_DA:** Kan jeg ringe til dig senere
**PROPOSED_DA:** Kan jeg ringe til dig senere?
**Severity:** LOW
**Problem:** Missing question mark at end of sentence.
**Reason:** Missing question mark at end of sentence.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 220 (Sätze)

**Finding:** 220
**Audit ID:** DA-SENT-0220
**Sentence/Card ID:** `sentence-656`
**Field:** `lv`
**DE (read-only):** Bitte schneiden Sie mir die Haare.
**CURRENT_DA:** Klip venligst mit hår.
**PROPOSED_DA:** Vil De venligst klippe mit hår?
**Severity:** MEDIUM
**Problem:** Formal 'Sie' should use formal address 'De', not bare imperative.
**Reason:** Formal 'Sie' should use formal address 'De', not bare imperative.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 221 (Sätze)

**Finding:** 221
**Audit ID:** DA-SENT-0221
**Sentence/Card ID:** `sentence-659`
**Field:** `lv`
**DE (read-only):** Es fängt um halb acht an.
**CURRENT_DA:** Det starter klokken halv ni.
**PROPOSED_DA:** Det starter klokken halv otte.
**Severity:** CRITICAL
**Problem:** German 'halb acht' (7:30) wrongly translated as Danish 'halv ni' (8:30).
**Reason:** German 'halb acht' (7:30) wrongly translated as Danish 'halv ni' (8:30).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 222 (Sätze)

**Finding:** 222
**Audit ID:** DA-SENT-0222
**Sentence/Card ID:** `sentence-662`
**Field:** `lv`
**DE (read-only):** Wir lassen die Jacken in der Garderobe.
**CURRENT_DA:** Lad os lade jakkerne blive i garderoben.
**PROPOSED_DA:** Vi efterlader jakkerne i garderoben.
**Severity:** MEDIUM
**Problem:** Adds unsolicited 'lad os'; German simply states they leave jackets at cloakroom.
**Reason:** Adds unsolicited 'lad os'; German simply states they leave jackets at cloakroom.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 223 (Sätze)

**Finding:** 223
**Audit ID:** DA-SENT-0223
**Sentence/Card ID:** `sentence-674`
**Field:** `lv`
**DE (read-only):** Ich stehe mit meinem Freund in Kontakt.
**CURRENT_DA:** Jeg er i korrespondance med min ven.
**PROPOSED_DA:** Jeg holder kontakt med min ven.
**Severity:** MEDIUM
**Problem:** 'Korrespondance' implies letter-writing; 'in Kontakt' is general contact.
**Reason:** 'Korrespondance' implies letter-writing; 'in Kontakt' is general contact.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 224 (Sätze)

**Finding:** 224
**Audit ID:** DA-SENT-0224
**Sentence/Card ID:** `sentence-676`
**Field:** `lv`
**DE (read-only):** Ist alles eingeladen?
**CURRENT_DA:** Er alt indlæst?
**PROPOSED_DA:** Er alle inviteret?
**Severity:** CRITICAL
**Problem:** 'Eingeladen' means invited, not uploaded/loaded ('indlæst').
**Reason:** 'Eingeladen' means invited, not uploaded/loaded ('indlæst').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 225 (Sätze)

**Finding:** 225
**Audit ID:** DA-SENT-0225
**Sentence/Card ID:** `sentence-678`
**Field:** `lv`
**DE (read-only):** Nun können wir alles wieder aufräumen.
**CURRENT_DA:** Nu kan vi samle det hele igen.
**PROPOSED_DA:** Nu kan vi rydde op igen.
**Severity:** MEDIUM
**Problem:** 'Aufräumen' means tidy up, not gather/collect ('samle').
**Reason:** 'Aufräumen' means tidy up, not gather/collect ('samle').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 226 (Sätze)

**Finding:** 226
**Audit ID:** DA-SENT-0226
**Sentence/Card ID:** `sentence-679`
**Field:** `lv`
**DE (read-only):** Wie viele Zimmer habt ihr?
**CURRENT_DA:** Hvor mange rum har du?
**PROPOSED_DA:** Hvor mange rum har I?
**Severity:** MEDIUM
**Problem:** Plural 'ihr' wrongly rendered as singular informal 'du'.
**Reason:** Plural 'ihr' wrongly rendered as singular informal 'du'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 227 (Sätze)

**Finding:** 227
**Audit ID:** DA-SENT-0227
**Sentence/Card ID:** `sentence-681`
**Field:** `lv`
**DE (read-only):** Kannst du schwimmen?
**CURRENT_DA:** Kan du svømme
**PROPOSED_DA:** Kan du svømme?
**Severity:** LOW
**Problem:** Missing question mark at end of sentence.
**Reason:** Missing question mark at end of sentence.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 228 (Sätze)

**Finding:** 228
**Audit ID:** DA-SENT-0228
**Sentence/Card ID:** `sentence-689`
**Field:** `lv`
**DE (read-only):** Ich fühle mich nicht wohl.
**CURRENT_DA:** Jeg har det dårligt.
**PROPOSED_DA:** (Danish with matching negation)
**Severity:** HIGH
**Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
**Reason:** Semantic parity requires negation alignment
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 229 (Sätze)

**Finding:** 229
**Audit ID:** DA-SENT-0229
**Sentence/Card ID:** `sentence-706`
**Field:** `lv`
**DE (read-only):** Sei mit dem Essen noch vorsichtig.
**CURRENT_DA:** Vær forsigtig med mad.
**PROPOSED_DA:** Vær stadig forsigtig med maden.
**Severity:** MEDIUM
**Problem:** Missing 'noch/stadig' (still) and definite article on 'maden'.
**Reason:** Missing 'noch/stadig' (still) and definite article on 'maden'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 230 (Sätze)

**Finding:** 230
**Audit ID:** DA-SENT-0230
**Sentence/Card ID:** `sentence-707`
**Field:** `lv`
**DE (read-only):** Sprichst du Deutsch?
**CURRENT_DA:** Taler du tysk
**PROPOSED_DA:** Taler du tysk?
**Severity:** LOW
**Problem:** Missing question mark at end of sentence.
**Reason:** Missing question mark at end of sentence.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 231 (Sätze)

**Finding:** 231
**Audit ID:** DA-SENT-0231
**Sentence/Card ID:** `sentence-712`
**Field:** `lv`
**DE (read-only):** Ich suche immer Gelegenheit, Deutsch zu sprechen.
**CURRENT_DA:** Altid på udkig efter en mulighed for at tale tysk.
**PROPOSED_DA:** Jeg er altid på udkig efter en mulighed for at tale tysk.
**Severity:** MEDIUM
**Problem:** Sentence lacks subject; reads as fragment without 'Jeg er'.
**Reason:** Sentence lacks subject; reads as fragment without 'Jeg er'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 232 (Sätze)

**Finding:** 232
**Audit ID:** DA-SENT-0232
**Sentence/Card ID:** `sentence-716`
**Field:** `lv`
**DE (read-only):** Womit kann ich Ihnen helfen?
**CURRENT_DA:** Hvordan kan jeg hjælpe?
**PROPOSED_DA:** Hvad kan jeg hjælpe De med?
**Severity:** MEDIUM
**Problem:** Formal 'Ihnen' missing; informal phrasing drops the customer reference.
**Reason:** Formal 'Ihnen' missing; informal phrasing drops the customer reference.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 233 (Sätze)

**Finding:** 233
**Audit ID:** DA-SENT-0233
**Sentence/Card ID:** `sentence-717`
**Field:** `lv`
**DE (read-only):** Haben Sie ganz frische Eier?
**CURRENT_DA:** Har du friske æg?
**PROPOSED_DA:** Har De meget friske æg?
**Severity:** LOW
**Problem:** Missing intensifier 'ganz' (very/quite fresh) and formal register.
**Reason:** Missing intensifier 'ganz' (very/quite fresh) and formal register.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 234 (Sätze)

**Finding:** 234
**Audit ID:** DA-SENT-0234
**Sentence/Card ID:** `sentence-720`
**Field:** `lv`
**DE (read-only):** Können Sie mir ein halbes Kilo abwiegen?
**CURRENT_DA:** Kan du veje et halvt kilo?
**PROPOSED_DA:** Kan du veje et halvt kilo for mig?
**Severity:** LOW
**Problem:** Missing 'mir' (for me) from the German original.
**Reason:** Missing 'mir' (for me) from the German original.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 235 (Sätze)

**Finding:** 235
**Audit ID:** DA-SENT-0235
**Sentence/Card ID:** `sentence-726`
**Field:** `lv`
**DE (read-only):** Geben Sie mir zwei Kilo Hackfleisch.
**CURRENT_DA:** Giv to kilo hakket kød.
**PROPOSED_DA:** Giv mig to kilo hakket kød.
**Severity:** LOW
**Problem:** Missing 'mir' (to me) from the German original.
**Reason:** Missing 'mir' (to me) from the German original.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 236 (Sätze)

**Finding:** 236
**Audit ID:** DA-SENT-0236
**Sentence/Card ID:** `sentence-727`
**Field:** `lv`
**DE (read-only):** Ein Laib Brot, bitte, aber nicht zu knusprig.
**CURRENT_DA:** Et brød, tak, men ikke for hårdt.
**PROPOSED_DA:** Et brød, tak, men ikke for sprødt.
**Severity:** MEDIUM
**Problem:** 'Knusprig' means crispy/crunchy, not hard ('hårdt').
**Reason:** 'Knusprig' means crispy/crunchy, not hard ('hårdt').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 237 (Sätze)

**Finding:** 237
**Audit ID:** DA-SENT-0237
**Sentence/Card ID:** `sentence-733`
**Field:** `lv`
**DE (read-only):** Können Sie mir alles nach Hause liefern?
**CURRENT_DA:** Kan du levere alt hjem til dig?
**PROPOSED_DA:** Kan du levere det hele hjem til mig?
**Severity:** HIGH
**Problem:** 'Nach Hause liefern' means deliver to my home, not 'to you' ('til dig').
**Reason:** 'Nach Hause liefern' means deliver to my home, not 'to you' ('til dig').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 238 (Sätze)

**Finding:** 238
**Audit ID:** DA-SENT-0238
**Sentence/Card ID:** `sentence-741`
**Field:** `lv`
**DE (read-only):** Was kostet das Meter?
**CURRENT_DA:** Hvor mange meter?
**PROPOSED_DA:** Hvad koster meteren?
**Severity:** CRITICAL
**Problem:** Asks price per meter, not quantity ('Hvor mange meter?').
**Reason:** Asks price per meter, not quantity ('Hvor mange meter?').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 239 (Sätze)

**Finding:** 239
**Audit ID:** DA-SENT-0239
**Sentence/Card ID:** `sentence-742`
**Field:** `lv`
**DE (read-only):** Dieser Stoff gefällt mir.
**CURRENT_DA:** Jeg elsker dette stof.
**PROPOSED_DA:** Jeg kan lide dette stof.
**Severity:** MEDIUM
**Problem:** 'Gefällt mir' means I like it, not I love it ('elsker').
**Reason:** 'Gefällt mir' means I like it, not I love it ('elsker').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 240 (Sätze)

**Finding:** 240
**Audit ID:** DA-SENT-0240
**Sentence/Card ID:** `sentence-746`
**Field:** `lv`
**DE (read-only):** Geben Sie mir eine hellere.
**CURRENT_DA:** Giv lysere.
**PROPOSED_DA:** Giv mig en lysere.
**Severity:** MEDIUM
**Problem:** Incomplete sentence; missing object 'mir' and 'en' (a lighter one).
**Reason:** Incomplete sentence; missing object 'mir' and 'en' (a lighter one).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 241 (Sätze)

**Finding:** 241
**Audit ID:** DA-SENT-0241
**Sentence/Card ID:** `sentence-748`
**Field:** `lv`
**DE (read-only):** Welche Handschuhe wünschen Sie?
**CURRENT_DA:** Hvilken slags handsker vil du have?
**PROPOSED_DA:** Hvilken slags handsker ønsker De?
**Severity:** LOW
**Problem:** Formal 'Sie' rendered as informal 'du'.
**Reason:** Formal 'Sie' rendered as informal 'du'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 242 (Sätze)

**Finding:** 242
**Audit ID:** DA-SENT-0242
**Sentence/Card ID:** `sentence-750`
**Field:** `lv`
**DE (read-only):** So, nun passen sie gut.
**CURRENT_DA:** Så det fungerer fint nu.
**PROPOSED_DA:** Så passer de godt nu.
**Severity:** MEDIUM
**Problem:** 'Passen' means fit (clothing), not function/work ('fungerer').
**Reason:** 'Passen' means fit (clothing), not function/work ('fungerer').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 243 (Sätze)

**Finding:** 243
**Audit ID:** DA-SENT-0243
**Sentence/Card ID:** `sentence-759`
**Field:** `lv`
**DE (read-only):** Können Sie die Schuhe heute reparieren?
**CURRENT_DA:** Kan du ordne dine sko i dag?
**PROPOSED_DA:** Kan du reparere skoene i dag?
**Severity:** HIGH
**Problem:** 'Dine sko' implies customer's shoes addressed to shopkeeper; should be 'the shoes'.
**Reason:** 'Dine sko' implies customer's shoes addressed to shopkeeper; should be 'the shoes'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 244 (Sätze)

**Finding:** 244
**Audit ID:** DA-SENT-0244
**Sentence/Card ID:** `sentence-760`
**Field:** `lv`
**DE (read-only):** Wann kann ich die Schuhe abholen?
**CURRENT_DA:** Hvornår kan jeg medbringe skoene?
**PROPOSED_DA:** Hvornår kan jeg hente skoene?
**Severity:** CRITICAL
**Problem:** 'Abholen' means pick up, not bring ('medbringe').
**Reason:** 'Abholen' means pick up, not bring ('medbringe').
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 245 (Sätze)

**Finding:** 245
**Audit ID:** DA-SENT-0245
**Sentence/Card ID:** `sentence-761`
**Field:** `lv`
**DE (read-only):** Meine Armbanduhr funktioniert nicht.
**CURRENT_DA:** Mit armbåndsur virker ikke.
**PROPOSED_DA:** Mitt armbåndsur virker ikke.
**Severity:** CRITICAL
**Problem:** Typo: 'Mit' should be 'Mitt' (my wristwatch).
**Reason:** Typo: 'Mit' should be 'Mitt' (my wristwatch).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 246 (Sätze)

**Finding:** 246
**Audit ID:** DA-SENT-0246
**Sentence/Card ID:** `sentence-762`
**Field:** `lv`
**DE (read-only):** Sie geht fünf Minuten vor.
**CURRENT_DA:** Det er fem minutter for tidligt.
**PROPOSED_DA:** Den går fem minutter for hurtigt.
**Severity:** MEDIUM
**Problem:** Watch runs fast ('geht vor'), not that time is too early.
**Reason:** Watch runs fast ('geht vor'), not that time is too early.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 247 (Sätze)

**Finding:** 247
**Audit ID:** DA-SENT-0247
**Sentence/Card ID:** `sentence-769`
**Field:** `lv`
**DE (read-only):** Bitte packen Sie es ein und schicken Sie es mir nach Hause.
**CURRENT_DA:** Pak venligst og send hjem.
**PROPOSED_DA:** Pak det venligst ind og send det hjem til mig.
**Severity:** MEDIUM
**Problem:** Missing 'es/mir' (it, to me) and 'einpacken' (wrap/pack up).
**Reason:** Missing 'es/mir' (it, to me) and 'einpacken' (wrap/pack up).
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 248 (Sätze)

**Finding:** 248
**Audit ID:** DA-SENT-0248
**Sentence/Card ID:** `sentence-771`
**Field:** `lv`
**DE (read-only):** Bitte, fotografieren Sie mich.
**CURRENT_DA:** Tag venligst ein Bild af mig.
**PROPOSED_DA:** Tag venligst et billede af mig.
**Severity:** CRITICAL
**Problem:** German remnant 'ein' instead of Danish 'et billede'.
**Reason:** German remnant 'ein' instead of Danish 'et billede'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 249 (Sätze)

**Finding:** 249
**Audit ID:** DA-SENT-0249
**Sentence/Card ID:** `sentence-773`
**Field:** `lv`
**DE (read-only):** Wann kann ich das Probebild sehen?
**CURRENT_DA:** Hvornår kan jeg se en prøve?
**PROPOSED_DA:** Hvornår kan jeg se prøvebilledet?
**Severity:** MEDIUM
**Problem:** 'Probebild' is test/preview photo, not vague 'en prøve'.
**Reason:** 'Probebild' is test/preview photo, not vague 'en prøve'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 250 (Sätze)

**Finding:** 250
**Audit ID:** DA-SENT-0250
**Sentence/Card ID:** `sentence-776`
**Field:** `lv`
**DE (read-only):** Die Fotos sind gut geworden.
**CURRENT_DA:** Billederne blev godt.
**PROPOSED_DA:** Billederne blev gode.
**Severity:** MEDIUM
**Problem:** Plural subject requires plural adjective 'gode', not 'godt'.
**Reason:** Plural subject requires plural adjective 'gode', not 'godt'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 251 (Sätze)

**Finding:** 251
**Audit ID:** DA-SENT-0251
**Sentence/Card ID:** `sentence-785`
**Field:** `lv`
**DE (read-only):** Wie gefallen dir diese Ohrringe?
**CURRENT_DA:** Hvordan kan du lide disse øreringe?
**PROPOSED_DA:** Hvad synes du om disse øreringer?
**Severity:** HIGH
**Problem:** Ungrammatical construction; 'Hvordan kan du lide' is not valid Danish.
**Reason:** Ungrammatical construction; 'Hvordan kan du lide' is not valid Danish.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---

## Finding 252 (Sätze)

**Finding:** 252
**Audit ID:** DA-SENT-0252
**Sentence/Card ID:** `sentence-792`
**Field:** `lv`
**DE (read-only):** Bekomme ich die Schachtel gratis?
**CURRENT_DA:** Fik jeg kassen gratis?
**PROPOSED_DA:** Får jeg æsken gratis?
**Severity:** MEDIUM
**Problem:** Present question wrongly in past tense; 'Schachtel' is box ('æske'), not 'kasse'.
**Reason:** Present question wrongly in past tense; 'Schachtel' is box ('æske'), not 'kasse'.
**Statuss:** PENDING
**OWNER_DECISION:** [nav aizpildīts]

**Avots:** GPT-5.6 Luna audit (`reports/da-sentences-full-audit.md`)

---
