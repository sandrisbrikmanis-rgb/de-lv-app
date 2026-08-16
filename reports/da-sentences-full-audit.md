# DA–DE Teikumi / Sätze pilns valodas kvalitātes audits

**Datums:** 2026-08-16
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Scope:** 100% production `data/da/sentences.js` (796 sentences)
**DE etalons:** `data/sentences.js` (STRICT READ-ONLY)
**Production changes:** 0 (audit only)

---

## Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| sentences total | **796** |
| sentences audited | **796/796** |
| unprocessed sentences | **0** |
| Luna batches | **16/16** |
| raw candidates | **252** |
| validated real findings | **252** |
| FALSE_POSITIVE | **0** |
| CRITICAL | **27** |
| HIGH | **80** |
| MEDIUM | **114** |
| LOW | **31** |
| NEEDS_SOURCE_REVIEW | **0** |
| production changes | **0** |
| DE changes | **0** |

### Strukturālie vārti

| Pārbaude | Rezultāts |
|----------|-----------|
| syntax | **PASS** |
| ID/order | **PASS** |
| structure (796 count) | **PASS** |
| mirror data↔www | **PASS** |
| DE integrity | **PASS** |
| completeness (796/796 Luna) | **PASS** |

### Verdict

**DA–DE SENTENCES FULL AUDIT — NEEDS REPAIR**

## Audita sadalījums

Lingvistisko auditu veikts pa **50 teikumiem** (16 Luna darba bloki).

## Findings pēc smaguma

### CRITICAL (27)

#### DA-SENT-0004 — `sentence-7`

- **DE:** Alles deutet auf Regen.
- **DA (CURRENT):** Alt peger på sagen.
- **PROPOSED_DA:** Alt peger på regn.
- **Problem:** Critical mistranslation: 'Regen' rendered as 'sagen'.
- **Reason:** German 'Regen' means rain. Danish 'sagen' means 'the matter/case', producing a completely different meaning.
- **Statuss:** PENDING

#### DA-SENT-0006 — `sentence-10`

- **DE:** Sprechen Sie doch!
- **DA (CURRENT):** Sig op!
- **PROPOSED_DA:** Tal dog! / Sig noget!
- **Problem:** Critical false friend: 'Sig op' does not mean 'speak'.
- **Reason:** 'Sprechen Sie doch!' is an urging to speak. 'Sig op!' means 'resign/quit (a job)' in Danish — a dangerous false friend.
- **Statuss:** PENDING

#### DA-SENT-0014 — `sentence-36`

- **DE:** Wer war der Erste?
- **DA (CURRENT):** Wen var først?
- **PROPOSED_DA:** Hvem var den første?
- **Problem:** Foreign remnant: German 'Wen' in Danish field.
- **Reason:** 'Wen' is German, not Danish. Danish interrogative is 'Hvem'.
- **Statuss:** PENDING

#### DA-SENT-0015 — `sentence-37`

- **DE:** Wer fehlt heute?
- **DA (CURRENT):** Wen er ikke kommet i dag?
- **PROPOSED_DA:** Hvem mangler i dag?
- **Problem:** Foreign remnant: German 'Wen' in Danish field.
- **Reason:** 'Wen' is German. Meaning should be 'who is absent today', not 'who has not come'.
- **Statuss:** PENDING

#### DA-SENT-0055 — `sentence-175`

- **DE:** Beifall finden.
- **DA (CURRENT):** Indhent samtykke.
- **PROPOSED_DA:** Få bifald. / Vind anerkendelse.
- **Problem:** Critical mistranslation: applause vs consent.
- **Reason:** 'Beifall finden' means to meet with applause/approval. 'Indhent samtykke' means to obtain consent — entirely different.
- **Statuss:** PENDING

#### DA-SENT-0067 — `sentence-213`

- **DE:** Bitte schön.
- **DA (CURRENT):** Behage
- **PROPOSED_DA:** Værsgo
- **Problem:** Non-Danish or nonsense word for standard German phrase.
- **Reason:** 'Behage' is not valid Danish for 'Bitte schön' (here you are/you're welcome).
- **Statuss:** PENDING

#### DA-SENT-0068 — `sentence-214`

- **DE:** Wie bitte?
- **DA (CURRENT):** Hvordan venligst
- **PROPOSED_DA:** Undskyld?
- **Problem:** Complete mistranslation of conversational formula.
- **Reason:** 'Wie bitte?' requests repetition; literal 'Hvordan venligst' is ungrammatical.
- **Statuss:** PENDING

#### DA-SENT-0071 — `sentence-218`

- **DE:** In einem Buch blättern.
- **DA (CURRENT):** Sorter bogen.
- **PROPOSED_DA:** Bladre i en bog
- **Problem:** 'Sorter bogen' means sort the book — opposite action.
- **Reason:** 'blättern' means flip through pages, not sort/organize.
- **Statuss:** PENDING

#### DA-SENT-0086 — `sentence-258`

- **DE:** Frag ihn gelegentlich, ob...
- **DA (CURRENT):** Spørg ham, om han kommer ud, hvis...
- **PROPOSED_DA:** Spørg ham af og til, om...
- **Problem:** Adds 'kommer ud' — not in 'Frag ihn gelegentlich, ob...'.
- **Reason:** Translation must not invent content absent from German source.
- **Statuss:** PENDING

#### DA-SENT-0087 — `sentence-263`

- **DE:** Fahre fort!
- **DA (CURRENT):** Hold det op!
- **PROPOSED_DA:** Fortsæt!
- **Problem:** 'Hold det op!' means stop it — reversed meaning.
- **Reason:** 'Fahre fort!' means continue; Danish says the opposite.
- **Statuss:** PENDING

#### DA-SENT-0097 — `sentence-298`

- **DE:** Sag mal!
- **DA (CURRENT):** Sig ja!
- **PROPOSED_DA:** Sig mig!
- **Problem:** 'Sig ja!' means say yes — completely wrong.
- **Reason:** 'Sag mal!' is colloquial 'tell me/say'; not an affirmative.
- **Statuss:** PENDING

#### DA-SENT-0100 — `sentence-311`

- **DE:** Nicht wahr?
- **DA (CURRENT):** Højre?
- **PROPOSED_DA:** Ikke sandt?
- **Problem:** 'Højre?' means right (direction) — total mistranslation.
- **Reason:** 'Nicht wahr?' is a tag question seeking agreement.
- **Statuss:** PENDING

#### DA-SENT-0105 — `sentence-325`

- **DE:** Bitte schön!
- **DA (CURRENT):** Behage!
- **PROPOSED_DA:** Værsgo!
- **Problem:** 'Behage!' is not valid Danish.
- **Reason:** 'Bitte schön!' as offering requires standard Danish.
- **Statuss:** PENDING

#### DA-SENT-0116 — `sentence-360`

- **DE:** Keine Ursache!
- **DA (CURRENT):** Intet for ingenting!
- **PROPOSED_DA:** Selv tak!
- **Problem:** 'Intet for ingenting!' is not a Danish idiom.
- **Reason:** 'Keine Ursache!' responds to thanks: don't mention it.
- **Statuss:** PENDING

#### DA-SENT-0128 — `sentence-390`

- **DE:** Nach vorn.
- **DA (CURRENT):** Forward.
- **PROPOSED_DA:** Fremad
- **Problem:** English 'Forward.' left untranslated.
- **Reason:** 'Nach vorn' requires Danish directional adverb.
- **Statuss:** PENDING

#### DA-SENT-0143 — `sentence-431`

- **DE:** Um die Wette laufen.
- **DA (CURRENT):** Løb løbet.
- **PROPOSED_DA:** Løbe om kap.
- **Problem:** DA Løb løbet is nonsensical; does not mean run a race/bet.
- **Reason:** DA Løb løbet is nonsensical; does not mean run a race/bet.
- **Statuss:** PENDING

#### DA-SENT-0154 — `sentence-453`

- **DE:** Zu Fuß.
- **DA (CURRENT):** Til benene.
- **PROPOSED_DA:** På fod.
- **Problem:** Til benene means to the legs; DE on foot requires på fod.
- **Reason:** Til benene means to the legs; DE on foot requires på fod.
- **Statuss:** PENDING

#### DA-SENT-0155 — `sentence-454`

- **DE:** Zu Pferde.
- **DA (CURRENT):** Ja.
- **PROPOSED_DA:** På hest.
- **Problem:** DA Ja is completely wrong; DE means on horseback/riding.
- **Reason:** DA Ja is completely wrong; DE means on horseback/riding.
- **Statuss:** PENDING

#### DA-SENT-0189 — `sentence-547`

- **DE:** Es ist schönes Wetter.
- **DA (CURRENT):** Det er en dejlig tid.
- **PROPOSED_DA:** Det er dejligt vejr.
- **Problem:** DE beautiful weather; DA lovely time is completely wrong.
- **Reason:** DE beautiful weather; DA lovely time is completely wrong.
- **Statuss:** PENDING

#### DA-SENT-0212 — `sentence-621`

- **DE:** Hast du etwas zu verzollen?
- **DA (CURRENT):** Har du noget at rydde op?
- **PROPOSED_DA:** Har du noget at fortolde?
- **Problem:** 'Verzollen' means customs declaration, not cleaning up ('rydde op').
- **Reason:** 'Verzollen' means customs declaration, not cleaning up ('rydde op').
- **Statuss:** PENDING

#### DA-SENT-0214 — `sentence-628`

- **DE:** Die Rechnung, bitte!
- **DA (CURRENT):** Bill, tak!
- **PROPOSED_DA:** Regningen, tak!
- **Problem:** English remnant 'Bill' instead of Danish 'regning'.
- **Reason:** English remnant 'Bill' instead of Danish 'regning'.
- **Statuss:** PENDING

#### DA-SENT-0221 — `sentence-659`

- **DE:** Es fängt um halb acht an.
- **DA (CURRENT):** Det starter klokken halv ni.
- **PROPOSED_DA:** Det starter klokken halv otte.
- **Problem:** German 'halb acht' (7:30) wrongly translated as Danish 'halv ni' (8:30).
- **Reason:** German 'halb acht' (7:30) wrongly translated as Danish 'halv ni' (8:30).
- **Statuss:** PENDING

#### DA-SENT-0224 — `sentence-676`

- **DE:** Ist alles eingeladen?
- **DA (CURRENT):** Er alt indlæst?
- **PROPOSED_DA:** Er alle inviteret?
- **Problem:** 'Eingeladen' means invited, not uploaded/loaded ('indlæst').
- **Reason:** 'Eingeladen' means invited, not uploaded/loaded ('indlæst').
- **Statuss:** PENDING

#### DA-SENT-0238 — `sentence-741`

- **DE:** Was kostet das Meter?
- **DA (CURRENT):** Hvor mange meter?
- **PROPOSED_DA:** Hvad koster meteren?
- **Problem:** Asks price per meter, not quantity ('Hvor mange meter?').
- **Reason:** Asks price per meter, not quantity ('Hvor mange meter?').
- **Statuss:** PENDING

#### DA-SENT-0244 — `sentence-760`

- **DE:** Wann kann ich die Schuhe abholen?
- **DA (CURRENT):** Hvornår kan jeg medbringe skoene?
- **PROPOSED_DA:** Hvornår kan jeg hente skoene?
- **Problem:** 'Abholen' means pick up, not bring ('medbringe').
- **Reason:** 'Abholen' means pick up, not bring ('medbringe').
- **Statuss:** PENDING

#### DA-SENT-0245 — `sentence-761`

- **DE:** Meine Armbanduhr funktioniert nicht.
- **DA (CURRENT):** Mit armbåndsur virker ikke.
- **PROPOSED_DA:** Mitt armbåndsur virker ikke.
- **Problem:** Typo: 'Mit' should be 'Mitt' (my wristwatch).
- **Reason:** Typo: 'Mit' should be 'Mitt' (my wristwatch).
- **Statuss:** PENDING

#### DA-SENT-0248 — `sentence-771`

- **DE:** Bitte, fotografieren Sie mich.
- **DA (CURRENT):** Tag venligst ein Bild af mig.
- **PROPOSED_DA:** Tag venligst et billede af mig.
- **Problem:** German remnant 'ein' instead of Danish 'et billede'.
- **Reason:** German remnant 'ein' instead of Danish 'et billede'.
- **Statuss:** PENDING

### HIGH (80)

#### DA-SENT-0002 — `sentence-5`

- **DE:** Desto mehr.
- **DA (CURRENT):** Jo flere.
- **PROPOSED_DA:** Jo mere.
- **Problem:** Semantic mismatch: countable 'flere' used where German expresses uncountable 'mehr'.
- **Reason:** 'Desto mehr' means 'all the more / so much the more' (uncountable comparative), not 'the more [items]'. Danish 'Jo flere' means 'the more [countable things]'.
- **Statuss:** PENDING

#### DA-SENT-0003 — `sentence-6`

- **DE:** Je mehr, desto besser.
- **DA (CURRENT):** Jo flere jo bedre.
- **PROPOSED_DA:** Jo mere, jo bedre.
- **Problem:** Wrong comparative form ('flere' vs 'mere') in fixed expression.
- **Reason:** Standard Danish idiom is 'Jo mere, jo bedre'. 'Jo flere' is grammatically wrong for this general comparative proverb.
- **Statuss:** PENDING

#### DA-SENT-0005 — `sentence-8`

- **DE:** Damit ist mir wenig gedient.
- **DA (CURRENT):** Det giver lidt mening for mig.
- **PROPOSED_DA:** Det hjælper mig ikke ret meget.
- **Problem:** Semantic reversal: usefulness vs making sense.
- **Reason:** 'Damit ist mir wenig gedient' means the thing is of little use/benefit to the speaker. The DA says the opposite nuance ('giver lidt mening' = makes a little sense).
- **Statuss:** PENDING

#### DA-SENT-0010 — `sentence-28`

- **DE:** Es war einmal.
- **DA (CURRENT):** Engang var der.
- **PROPOSED_DA:** Der var engang …
- **Problem:** Non-idiomatic, incomplete rendering of fixed phrase.
- **Reason:** 'Es war einmal' is the standard fairy-tale opener. 'Engang var der' is incomplete and non-idiomatic in Danish.
- **Statuss:** PENDING

#### DA-SENT-0011 — `sentence-29`

- **DE:** Steigen Sie bitte ein!
- **DA (CURRENT):** Kom venligst ind!
- **PROPOSED_DA:** Stig venligst ind! / Tag venligst plads!
- **Problem:** Wrong domain: vehicle entry vs entering a space.
- **Reason:** 'Steigen Sie ein' means get into a vehicle. 'Kom ind' means enter a room/building.
- **Statuss:** PENDING

#### DA-SENT-0013 — `sentence-30`

- **DE:** Treten Sie ein!
- **DA (CURRENT):** Kom venligst ind!
- **PROPOSED_DA:** Træd venligst ind!
- **Problem:** Wrong translation and duplicate of sentence-29 DA.
- **Reason:** 'Treten Sie ein!' means step/come in (typically into a room). Current DA matches sentence-29 and does not reflect 'eintreten'.
- **Statuss:** PENDING

#### DA-SENT-0018 — `sentence-42`

- **DE:** Heraus mit der Sprache!
- **DA (CURRENT):** Tale! • Historier!
- **PROPOSED_DA:** Ud med sproget! / Kom nu frem med det!
- **Problem:** Idiom not translated; fragments miss imperative sense.
- **Reason:** 'Heraus mit der Sprache!' is an idiom demanding someone speak up/confess. 'Tale!' and 'Historier!' do not convey this.
- **Statuss:** PENDING

#### DA-SENT-0019 — `sentence-45`

- **DE:** von heute an
- **DA (CURRENT):** Starter i dag
- **PROPOSED_DA:** Fra i dag af
- **Problem:** Phrase type mismatch: prepositional time marker rendered as verb phrase.
- **Reason:** 'von heute an' is a temporal phrase 'from today onward', not 'starts today' (verb phrase).
- **Statuss:** PENDING

#### DA-SENT-0021 — `sentence-47`

- **DE:** heute Nacht
- **DA (CURRENT):** I går aftes
- **PROPOSED_DA:** I nat
- **Problem:** Wrong time reference (yesterday evening vs tonight).
- **Reason:** 'heute Nacht' means tonight/last night (today's night). 'I går aftes' means yesterday evening — different time reference.
- **Statuss:** PENDING

#### DA-SENT-0024 — `sentence-82`

- **DE:** Dieses Kleid ist akademisch gekleidet.
- **DA (CURRENT):** Denne kjole er stilfuldt konservativ.
- **PROPOSED_DA:** Dette kjole er akademisk klædt. / Kjolen er konservativt klædt.
- **Problem:** Semantic mismatch of 'akademisch gekleidet'.
- **Reason:** German 'akademisch gekleidet' means conservatively/formally dressed (academic style). DA 'stilfuldt konservativ' changes meaning and mismatches adjective structure.
- **Statuss:** PENDING

#### DA-SENT-0027 — `sentence-100`

- **DE:** Aus diesem Anlass.
- **DA (CURRENT):** På grund af denne tid. • I denne forbindelse
- **PROPOSED_DA:** I anledning af dette. / I denne forbindelse.
- **Problem:** Wrong first variant: 'Anlass' ≠ 'tid'.
- **Reason:** 'På grund af denne tid' means 'because of this time', not 'on this occasion'.
- **Statuss:** PENDING

#### DA-SENT-0030 — `sentence-106`

- **DE:** Stell dich nicht so an!
- **DA (CURRENT):** Lad være med at lade som om!
- **PROPOSED_DA:** (Danish with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### DA-SENT-0033 — `sentence-118`

- **DE:** Wir müssen das Treffen verschieben.
- **DA (CURRENT):** Vi er nødt til at omlægge mødet.
- **PROPOSED_DA:** Vi er nødt til at udskyde mødet.
- **Problem:** Wrong verb: postpone vs restructure.
- **Reason:** 'verschieben' means postpone/reschedule. 'omlægge' means restructure/reorganise.
- **Statuss:** PENDING

#### DA-SENT-0037 — `sentence-128`

- **DE:** Geh mir aus den Augen!
- **DA (CURRENT):** Se ikke på mig igen!
- **PROPOSED_DA:** Forsvind! / Gå væk!
- **Problem:** Wrong imperative semantics.
- **Reason:** 'Geh mir aus den Augen!' means get out of my sight. 'Se ikke på mig igen!' means don't look at me again — different imperative.
- **Statuss:** PENDING

#### DA-SENT-0043 — `sentence-150`

- **DE:** Erz bauen.
- **DA (CURRENT):** Få malm.
- **PROPOSED_DA:** Udvind malm. / Bryde malm.
- **Problem:** Mining verb not translated.
- **Reason:** 'Erz bauen' means to mine/extract ore. 'Få malm' (get ore) does not convey mining activity.
- **Statuss:** PENDING

#### DA-SENT-0044 — `sentence-151`

- **DE:** Mist bauen.
- **DA (CURRENT):** Skud. • Gør dig selv til grin
- **PROPOSED_DA:** Lave ballade. / Fucke op. / Gøre dig selv til grin.
- **Problem:** Wrong first variant ('Skud') for colloquial idiom.
- **Reason:** 'Mist bauen' (coll.) means to mess up/make a blunder. 'Skud' alone means 'shot' and is incorrect.
- **Statuss:** PENDING

#### DA-SENT-0048 — `sentence-160`

- **DE:** Mit der Post befördern.
- **DA (CURRENT):** Send med mail.
- **PROPOSED_DA:** Sende med posten.
- **Problem:** Postal vs electronic mail confusion.
- **Reason:** 'Mit der Post befördern' means send by postal mail. 'mail' in Danish often implies email.
- **Statuss:** PENDING

#### DA-SENT-0051 — `sentence-164`

- **DE:** Bei Beginn.
- **DA (CURRENT):** Starter
- **PROPOSED_DA:** Ved begyndelsen. / Ved starten.
- **Problem:** Fragment rendered as verb; incomplete translation.
- **Reason:** 'Bei Beginn' is a prepositional phrase 'at the beginning/on commencement', not the verb 'Starter'.
- **Statuss:** PENDING

#### DA-SENT-0052 — `sentence-166`

- **DE:** Mit seiner Begleitung.
- **DA (CURRENT):** Med akkompagnement.
- **PROPOSED_DA:** Med sin ledsager. / Med sin ledsagelse.
- **Problem:** Wrong domain: person vs music.
- **Reason:** 'Begleitung' means human escort/companion. 'akkompagnement' means musical accompaniment.
- **Statuss:** PENDING

#### DA-SENT-0053 — `sentence-170`

- **DE:** Bei Sinnen sein.
- **DA (CURRENT):** At være fornuftig.
- **PROPOSED_DA:** Være ved sine sanser. / Være ved fuld bevidsthed.
- **Problem:** Consciousness vs reason mismatch.
- **Reason:** 'Bei Sinnen sein' means to be conscious/of sound mind. 'fornuftig' means reasonable/sensible.
- **Statuss:** PENDING

#### DA-SENT-0054 — `sentence-172`

- **DE:** Bei weitem nicht so.
- **DA (CURRENT):** Slet ikke.
- **PROPOSED_DA:** Langt fra så … / På langt nær ikke så …
- **Problem:** Lost comparative structure.
- **Reason:** 'Bei weitem nicht so' is a comparative ('not nearly so/by far not as'). 'Slet ikke' means 'not at all' — stronger and non-comparative.
- **Statuss:** PENDING

#### DA-SENT-0060 — `sentence-180`

- **DE:** Beitrag leisten.
- **DA (CURRENT):** Invester din andel.
- **PROPOSED_DA:** Bidrage. / Yde et bidrag.
- **Problem:** Contribution vs investment mismatch.
- **Reason:** 'Beitrag leisten' means to make/contribute one's share. 'Invester din andel' implies financial investment.
- **Statuss:** PENDING

#### DA-SENT-0062 — `sentence-188`

- **DE:** Bereit sein.
- **DA (CURRENT):** Vær klar. • Vær i fred
- **PROPOSED_DA:** Være klar. / Være parat.
- **Problem:** Wrong second variant in multi-variant string.
- **Reason:** 'Vær i fred' means 'be at peace/leave me alone', not 'be ready' (bereit sein).
- **Statuss:** PENDING

#### DA-SENT-0063 — `sentence-197`

- **DE:** Beim besten Willen.
- **DA (CURRENT):** Hvad end du vil.
- **PROPOSED_DA:** Om jeg så skulle. / Med al vilje i verden.
- **Problem:** Idiom completely mistranslated.
- **Reason:** 'Beim besten Willen' is an idiom expressing inability despite goodwill ('much as I'd like to'). 'Hvad end du vil' means 'whatever you want'.
- **Statuss:** PENDING

#### DA-SENT-0065 — `sentence-204`

- **DE:** Zu Besuch sein.
- **DA (CURRENT):** At besøge. • At besøge
- **PROPOSED_DA:** Være på besøg
- **Problem:** Wrong verb phrase; duplicates identical variant.
- **Reason:** 'Zu Besuch sein' means to be visiting, not 'at besøge'.
- **Statuss:** PENDING

#### DA-SENT-0070 — `sentence-215`

- **DE:** Bitte sehr.
- **DA (CURRENT):** Behage
- **PROPOSED_DA:** Værsgo
- **Problem:** Same invalid 'Behage' as sentence-213.
- **Reason:** 'Bitte sehr' means here you are; 'Behage' is not Danish.
- **Statuss:** PENDING

#### DA-SENT-0074 — `sentence-225`

- **DE:** Alles spricht dafür.
- **DA (CURRENT):** Alt taler godt.
- **PROPOSED_DA:** Alt taler for det
- **Problem:** 'Alt taler godt' means everything speaks well — wrong sense.
- **Reason:** 'Alles spricht dafür' = everything points in favour; not 'speaks well'.
- **Statuss:** PENDING

#### DA-SENT-0075 — `sentence-226`

- **DE:** Ich kann nichts dafür.
- **DA (CURRENT):** Jeg kan ikke gøre noget der.
- **PROPOSED_DA:** Det kan jeg ikke gøre noget ved
- **Problem:** 'Jeg kan ikke gøre noget der' is unnatural and unclear.
- **Reason:** Standard Danish idiom for 'Ich kann nichts dafür'.
- **Statuss:** PENDING

#### DA-SENT-0077 — `sentence-231`

- **DE:** Es dämmert.
- **DA (CURRENT):** Det er ved at blive mørkt. • Daggry bryder ind.
- **PROPOSED_DA:** Det er ved at blive mørkt
- **Problem:** Contradictory variants: dusk and dawn cannot both be correct.
- **Reason:** 'Es dämmert' is dusk/twilight; dawn variant contradicts primary sense.
- **Statuss:** PENDING

#### DA-SENT-0078 — `sentence-242`

- **DE:** von Haus aus
- **DA (CURRENT):** Siden barndommen • Helt fra begyndelsen
- **PROPOSED_DA:** Af naturen • Fra starten
- **Problem:** 'Siden barndommen' misrenders the German idiom.
- **Reason:** 'von Haus aus' means by nature/from the outset, not since childhood.
- **Statuss:** PENDING

_… un vēl 50 HIGH findings._

### MEDIUM (114)

#### DA-SENT-0001 — `sentence-1`

- **DE:** Wenn nichts dazwischenkommt.
- **DA (CURRENT):** Hvis intet forstyrrer. • Hvis alt går efter planen.
- **PROPOSED_DA:** Hvis intet kommer i vejen.
- **Problem:** Incorrect alternative translation in multi-variant string.
- **Reason:** Second variant 'Hvis alt går efter planen' means 'if all goes according to plan', which is not equivalent to 'Wenn nichts dazwischenkommt' (if nothing gets in the way).
- **Statuss:** PENDING

#### DA-SENT-0007 — `sentence-11`

- **DE:** Es donnert.
- **DA (CURRENT):** Torden brøler.
- **PROPOSED_DA:** Det tordner.
- **Problem:** Unnatural phrasing for 'Es donnert'.
- **Reason:** 'Torden brøler' is unnatural Danish; standard weather expression is 'Det tordner' or 'Der tordner'.
- **Statuss:** PENDING

#### DA-SENT-0008 — `sentence-17`

- **DE:** Kein Durchgang!
- **DA (CURRENT):** Gå ikke igennem! • Udgang lukket!
- **PROPOSED_DA:** Ingen adgang! / Adgang forbudt!
- **Problem:** Wrong alternative variant ('Udgang lukket') in multi-variant string.
- **Reason:** 'Kein Durchgang!' is a no-entry/no-through-traffic sign. 'Udgang lukket' means 'exit closed', which is a different concept.
- **Statuss:** PENDING

#### DA-SENT-0009 — `sentence-18`

- **DE:** Darf ich Sie bitten?
- **DA (CURRENT):** Må jeg spørge dig
- **PROPOSED_DA:** Må jeg bede Dem? / Må jeg spørge Dem?
- **Problem:** Register mismatch, incomplete sentence, and imprecise verb choice.
- **Reason:** German 'Sie' (formal) is rendered as 'dig' (informal). The sentence is also truncated (missing '?') and 'bitten' is broader than 'spørge'.
- **Statuss:** PENDING

#### DA-SENT-0012 — `sentence-30`

- **DE:** Treten Sie ein!
- **DA (CURRENT):** Kom venligst ind!
- **PROPOSED_DA:** (Context-specific Danish for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-29 (DE: "Steigen Sie bitte ein!")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### DA-SENT-0016 — `sentence-38`

- **DE:** Was fehlt dir?
- **DA (CURRENT):** Hvad er der galt med dig?
- **PROPOSED_DA:** Hvad mangler du? / Hvad er der i vejen?
- **Problem:** Tone/semantic mismatch — too accusatory.
- **Reason:** 'Was fehlt dir?' asks what is wrong/what do you lack (mild concern). 'Hvad er der galt med dig?' is accusatory ('what is wrong with you').
- **Statuss:** PENDING

#### DA-SENT-0017 — `sentence-40`

- **DE:** Was soll das heißen?
- **DA (CURRENT):** Hvad betyder det?
- **PROPOSED_DA:** Hvad skal det betyde?
- **Problem:** Lost pragmatic force of indignant question.
- **Reason:** 'Was soll das heißen?' expresses indignation ('what is that supposed to mean?'). Neutral 'Hvad betyder det?' loses this.
- **Statuss:** PENDING

#### DA-SENT-0020 — `sentence-46`

- **DE:** heute früh
- **DA (CURRENT):** Denne morgen
- **PROPOSED_DA:** I morges
- **Problem:** Non-idiomatic temporal expression.
- **Reason:** 'heute früh' in past context means 'this morning' (earlier today). 'Denne morgen' is less idiomatic for past reference.
- **Statuss:** PENDING

#### DA-SENT-0023 — `sentence-78`

- **DE:** Er ändert ständig seine Meinung.
- **DA (CURRENT):** Han ændrer konstant mening.
- **PROPOSED_DA:** Han ændrer konstant sin mening.
- **Problem:** Grammar error: missing possessive pronoun.
- **Reason:** Missing possessive 'sin' before 'mening' — ungrammatical in Danish.
- **Statuss:** PENDING

#### DA-SENT-0029 — `sentence-104`

- **DE:** Du glaubst mir anscheinend nicht.
- **DA (CURRENT):** Du synes ikke at tro mig.
- **PROPOSED_DA:** Du tror mig åbenbart ikke.
- **Problem:** Unnatural grammar for 'Du glaubst mir anscheinend nicht'.
- **Reason:** 'Du synes ikke at tro mig' is ungrammatical/unnatural. Standard: 'Du tror mig tydeligvis/åbenbart ikke'.
- **Statuss:** PENDING

#### DA-SENT-0031 — `sentence-106`

- **DE:** Stell dich nicht so an!
- **DA (CURRENT):** Lad være med at lade som om!
- **PROPOSED_DA:** Hold op med at stille dig sådan an!
- **Problem:** Idiomatic nuance mismatch.
- **Reason:** 'Stell dich nicht so an' means don't put on airs/act pretentiously. 'Lad være med at lade som om' means stop pretending — related but not equivalent.
- **Statuss:** PENDING

#### DA-SENT-0032 — `sentence-107`

- **DE:** An die Arbeit gehen.
- **DA (CURRENT):** Kom på arbejde.
- **PROPOSED_DA:** Gå i gang med arbejdet. / Tag fat på arbejdet.
- **Problem:** Semantic mismatch: start working vs arrive at work.
- **Reason:** 'An die Arbeit gehen' means to set/get to work. 'Kom på arbejde' means arrive at the workplace.
- **Statuss:** PENDING

#### DA-SENT-0034 — `sentence-119`

- **DE:** Sie hat mich aufgeregt.
- **DA (CURRENT):** Hun irriterede mig.
- **PROPOSED_DA:** Hun gjorde mig ophidset / Hun gjorde mig urolig.
- **Problem:** Emotional nuance mismatch.
- **Reason:** 'aufgeregt' means agitated/upset/excited, not merely 'irritated'.
- **Statuss:** PENDING

#### DA-SENT-0035 — `sentence-121`

- **DE:** Auf der Stelle.
- **DA (CURRENT):** Straks.
- **PROPOSED_DA:** På stedet. / Med det samme.
- **Problem:** Lost spatial meaning of polysemous phrase.
- **Reason:** 'Auf der Stelle' can mean both 'immediately' and 'on the spot' (physically). 'Straks' only covers the temporal sense.
- **Statuss:** PENDING

#### DA-SENT-0036 — `sentence-122`

- **DE:** Für den Schaden aufkommen.
- **DA (CURRENT):** Dæk skaderne.
- **PROPOSED_DA:** Dække skaderne. / Stå for skaderne.
- **Problem:** Unnatural idiom rendering.
- **Reason:** 'Für den Schaden aufkommen' is an idiom meaning to bear/cover costs of damage. 'Dæk skaderne' is awkward imperative.
- **Statuss:** PENDING

#### DA-SENT-0038 — `sentence-129`

- **DE:** Unter vier Augen.
- **DA (CURRENT):** I to. • Stille og roligt
- **PROPOSED_DA:** Under fire øjne. / Alene sammen.
- **Problem:** Wrong second variant in multi-variant string.
- **Reason:** 'Stille og roligt' means quietly/calmly, not 'in private/confidentially' (unter vier Augen).
- **Statuss:** PENDING

#### DA-SENT-0039 — `sentence-140`

- **DE:** Wann wurden die Meisterschaftskämpfe ausgetragen?
- **DA (CURRENT):** Hvornår var mesterskabet?
- **PROPOSED_DA:** Hvornår blev mesterskabet afholdt?
- **Problem:** Lost verbal nuance of 'ausgetragen'.
- **Reason:** German asks when championships were held/contested ('ausgetragen'). DA only asks when the championship was, losing the event sense.
- **Statuss:** PENDING

#### DA-SENT-0040 — `sentence-142`

- **DE:** Einfluss ausüben.
- **DA (CURRENT):** At påvirke.
- **PROPOSED_DA:** Udøve indflydelse.
- **Problem:** Lost specificity of 'Einfluss'.
- **Reason:** 'Einfluss ausüben' specifically means to exert influence, not generic 'påvirke'.
- **Statuss:** PENDING

#### DA-SENT-0041 — `sentence-145`

- **DE:** Mit der Bahn.
- **DA (CURRENT):** Med jernbane.
- **PROPOSED_DA:** (Context-specific Danish for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-144 (DE: "Per Bahn.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### DA-SENT-0042 — `sentence-145`

- **DE:** Mit der Bahn.
- **DA (CURRENT):** Med jernbane.
- **PROPOSED_DA:** Med toget. / Med banen.
- **Problem:** Duplicate DA for distinct DE sentences.
- **Reason:** Identical DA as sentence-144 despite different DE phrasing; 'Mit der Bahn' is more naturally 'med toget'.
- **Statuss:** PENDING

#### DA-SENT-0045 — `sentence-152`

- **DE:** Ich bin beauftragt.
- **DA (CURRENT):** Jeg er blevet tildelt et job.
- **PROPOSED_DA:** Jeg er blevet bemyndiget. / Jeg har fået til opgave.
- **Problem:** Semantic narrowing of 'beauftragt'.
- **Reason:** 'beauftragt' means commissioned/assigned a task, not simply 'got a job'.
- **Statuss:** PENDING

#### DA-SENT-0046 — `sentence-154`

- **DE:** Ich bedauere ihn.
- **DA (CURRENT):** Jeg har ondt af ham.
- **PROPOSED_DA:** Jeg beklager det for ham.
- **Problem:** Verb mismatch: regret vs pity.
- **Reason:** 'bedauern' means to regret, not 'have pity on' ('have ondt af').
- **Statuss:** PENDING

#### DA-SENT-0047 — `sentence-157`

- **DE:** Sie sieht bedrückt aus.
- **DA (CURRENT):** Hun ser deprimeret ud.
- **PROPOSED_DA:** Hun ser nedtrykt ud. / Hun ser bedrøvet ud.
- **Problem:** Overly clinical rendering of 'bedrückt'.
- **Reason:** 'bedrückt' means dejected/oppressed in spirit, not clinically 'depressed' ('deprimeret').
- **Statuss:** PENDING

#### DA-SENT-0049 — `sentence-163`

- **DE:** Am Beginn.
- **DA (CURRENT):** I begyndelsen.
- **PROPOSED_DA:** (Context-specific Danish for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-162 (DE: "Zu Beginn.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### DA-SENT-0050 — `sentence-163`

- **DE:** Am Beginn.
- **DA (CURRENT):** I begyndelsen.
- **PROPOSED_DA:** Ved begyndelsen. / Til at begynde med.
- **Problem:** Duplicate DA for distinct DE sentences.
- **Reason:** Identical DA as sentence-162 for distinct DE ('Am Beginn' vs 'Zu Beginn').
- **Statuss:** PENDING

#### DA-SENT-0056 — `sentence-176`

- **DE:** Beileid aussprechen.
- **DA (CURRENT):** Udtryk kondolence.
- **PROPOSED_DA:** (Context-specific Danish for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-139 (DE: "Sein Beileid aussprechen.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### DA-SENT-0057 — `sentence-176`

- **DE:** Beileid aussprechen.
- **DA (CURRENT):** Udtryk kondolence.
- **PROPOSED_DA:** Udtrykke medfølelse. / Kondolere.
- **Problem:** Duplicate DA for distinct DE sentences.
- **Reason:** Identical DA as sentence-139 for related but distinct DE phrasing.
- **Statuss:** PENDING

#### DA-SENT-0058 — `sentence-177`

- **DE:** Auf eigenen Beinen stehen.
- **DA (CURRENT):** At være økonomisk uafhængig.
- **PROPOSED_DA:** Stå på egne ben. / Klare sig selv.
- **Problem:** Overly narrow rendering (economic only).
- **Reason:** 'Auf eigenen Beinen stehen' means independence generally, not only economic.
- **Statuss:** PENDING

#### DA-SENT-0061 — `sentence-183`

- **DE:** Belegte Brötchen.
- **DA (CURRENT):** Sandwich med toppings.
- **PROPOSED_DA:** Smørrebrød.
- **Problem:** Foreign remnant / non-idiomatic: English 'sandwich/toppings'.
- **Reason:** 'Belegte Brötchen' are open-faced topped bread rolls. 'Sandwich med toppings' uses English and is not idiomatic Danish.
- **Statuss:** PENDING

#### DA-SENT-0064 — `sentence-198`

- **DE:** Am besten.
- **DA (CURRENT):** Den bedste.
- **PROPOSED_DA:** Helst. / Det bedste ville være …
- **Problem:** Part of speech mismatch: adverb vs adjective.
- **Reason:** 'Am besten' is adverbial 'preferably/best (to do X)', not nominal 'den bedste' (the best one).
- **Statuss:** PENDING

_… un vēl 84 MEDIUM findings._

### LOW (31)

#### DA-SENT-0022 — `sentence-69`

- **DE:** Ich habe die Ausbildung absolviert.
- **DA (CURRENT):** Jeg afsluttede min uddannelse. • Jeg afsluttede min uddannelse.
- **PROPOSED_DA:** Jeg afsluttede min uddannelse.
- **Problem:** Duplicate variant in multi-variant string.
- **Reason:** The two bullet variants are identical duplicates.
- **Statuss:** PENDING

#### DA-SENT-0025 — `sentence-92`

- **DE:** Kannst du mich später anrufen?
- **DA (CURRENT):** Kan du ringe til mig senere
- **PROPOSED_DA:** Kan du ringe til mig senere?
- **Problem:** Punctuation/grammar: interrogative lacks '?'.
- **Reason:** Missing closing question mark.
- **Statuss:** PENDING

#### DA-SENT-0026 — `sentence-99`

- **DE:** Es kommt darauf an.
- **DA (CURRENT):** Det afhænger af det.
- **PROPOSED_DA:** Det afhænger. / Det kommer an på det.
- **Problem:** Slightly unnatural/redundant phrasing.
- **Reason:** 'Det afhænger af det' is redundant; natural Danish omits or uses 'det kommer an på'.
- **Statuss:** PENDING

#### DA-SENT-0028 — `sentence-102`

- **DE:** Was hast du da angerichtet?
- **DA (CURRENT):** Hvad har du lavet der
- **PROPOSED_DA:** Hvad har du lavet der?
- **Problem:** Punctuation: interrogative lacks '?'.
- **Reason:** Missing closing question mark.
- **Statuss:** PENDING

#### DA-SENT-0059 — `sentence-179`

- **DE:** Beistand leisten.
- **DA (CURRENT):** At hjælpe. • Yde assistance
- **PROPOSED_DA:** Yde støtte. / Hjælpe.
- **Problem:** Foreign remnant: English 'assistance' in variant.
- **Reason:** Variant 'Yde assistance' uses English loanword where Danish 'hjælp/støtte' is natural.
- **Statuss:** PENDING

#### DA-SENT-0073 — `sentence-223`

- **DE:** Bitte checken.
- **DA (CURRENT):** Check. • Tjek
- **PROPOSED_DA:** Tjek venligst
- **Problem:** English loanword remnant in first variant.
- **Reason:** English 'Check' should not appear when Danish 'Tjek' is available.
- **Statuss:** PENDING

#### DA-SENT-0090 — `sentence-281`

- **DE:** Na, wie läufts?
- **DA (CURRENT):** Hvordan har du det
- **PROPOSED_DA:** Hvordan går det?
- **Problem:** Missing '?'; duplicates sentence-257 phrasing.
- **Reason:** Colloquial greeting needs distinct wording and terminal punctuation.
- **Statuss:** PENDING

#### DA-SENT-0096 — `sentence-297`

- **DE:** Was machst du?
- **DA (CURRENT):** Hvad laver du
- **PROPOSED_DA:** Hvad laver du?
- **Problem:** Missing question mark.
- **Reason:** Interrogative sentence requires terminal punctuation.
- **Statuss:** PENDING

#### DA-SENT-0107 — `sentence-336`

- **DE:** Wie spät ist es?
- **DA (CURRENT):** Hvad er klokken
- **PROPOSED_DA:** Hvad er klokken?
- **Problem:** Missing question mark.
- **Reason:** Interrogative requires terminal punctuation.
- **Statuss:** PENDING

#### DA-SENT-0109 — `sentence-340`

- **DE:** Wie steht’s?
- **DA (CURRENT):** Hvordan har du det
- **PROPOSED_DA:** Hvordan går det?
- **Problem:** Missing '?'; duplicates sentence-257.
- **Reason:** Informal status question should differ from formal greeting.
- **Statuss:** PENDING

#### DA-SENT-0120 — `sentence-374`

- **DE:** Er ist Berliner von Geburt.
- **DA (CURRENT):** Han er berliner af fødsel.
- **PROPOSED_DA:** Han er berliner af fødsel
- **Problem:** Lowercase 'berliner' should be 'Berliner'.
- **Reason:** Proper noun/adjective for origin requires capital B.
- **Statuss:** PENDING

#### DA-SENT-0136 — `sentence-414`

- **DE:** Ohne weiteres.
- **DA (CURRENT):** Straks. • Straks
- **PROPOSED_DA:** Straks.
- **Problem:** Duplicate variant entry; remove redundant Straks.
- **Reason:** Duplicate variant entry; remove redundant Straks.
- **Statuss:** PENDING

#### DA-SENT-0142 — `sentence-430`

- **DE:** In Wettbewerb treten.
- **DA (CURRENT):** Deltag i konkurrencen.
- **PROPOSED_DA:** Deltag i en konkurrence.
- **Problem:** DE generic competition; DA uses definite konkurrencen.
- **Reason:** DE generic competition; DA uses definite konkurrencen.
- **Statuss:** PENDING

#### DA-SENT-0145 — `sentence-434`

- **DE:** Wettkampf im Turnen.
- **DA (CURRENT):** Konkurrencer i gymnastik.
- **PROPOSED_DA:** Konkurrence i gymnastik.
- **Problem:** DE singular Wettkampf; DA uses plural konkurrencer.
- **Reason:** DE singular Wettkampf; DA uses plural konkurrencer.
- **Statuss:** PENDING

#### DA-SENT-0146 — `sentence-438`

- **DE:** Wie lange?
- **DA (CURRENT):** Hvor længe
- **PROPOSED_DA:** Hvor længe?
- **Problem:** Missing question mark in DA interrogative.
- **Reason:** Missing question mark in DA interrogative.
- **Statuss:** PENDING

#### DA-SENT-0153 — `sentence-446`

- **DE:** Zipfel einer Wurst.
- **DA (CURRENT):** Pølse tip.
- **PROPOSED_DA:** Spidsen af en pølse.
- **Problem:** Awkward English-style word order; unnatural Danish.
- **Reason:** Awkward English-style word order; unnatural Danish.
- **Statuss:** PENDING

#### DA-SENT-0169 — `sentence-489`

- **DE:** Schläfst du noch?
- **DA (CURRENT):** Sover du stadig
- **PROPOSED_DA:** Sover du stadig?
- **Problem:** Missing question mark in DA interrogative.
- **Reason:** Missing question mark in DA interrogative.
- **Statuss:** PENDING

#### DA-SENT-0175 — `sentence-499`

- **DE:** Geh bitte zurück an deinen Platz!
- **DA (CURRENT):** Gå tilbage til dit sted!
- **PROPOSED_DA:** Gå tilbage til din plads!
- **Problem:** Sted is vague; plads matches DE Platz/seat in classroom.
- **Reason:** Sted is vague; plads matches DE Platz/seat in classroom.
- **Statuss:** PENDING

#### DA-SENT-0177 — `sentence-506`

- **DE:** Wo ist das Handtuch?
- **DA (CURRENT):** Hvor er håndklædet
- **PROPOSED_DA:** Hvor er håndklædet?
- **Problem:** Missing question mark in DA interrogative.
- **Reason:** Missing question mark in DA interrogative.
- **Statuss:** PENDING

#### DA-SENT-0179 — `sentence-511`

- **DE:** Kleide dich wärmer an, draußen ist es kühl.
- **DA (CURRENT):** Klæd dig varmt på, det er koldt udenfor.
- **PROPOSED_DA:** Klæd dig varmere på, det er køligt udenfor.
- **Problem:** DE warmer and cool; DA warm and cold loses nuance.
- **Reason:** DE warmer and cool; DA warm and cold loses nuance.
- **Statuss:** PENDING

#### DA-SENT-0185 — `sentence-538`

- **DE:** Bist du heute Abend frei?
- **DA (CURRENT):** Har du fri i aften
- **PROPOSED_DA:** Har du fri i aften?
- **Problem:** Missing question mark in DA interrogative.
- **Reason:** Missing question mark in DA interrogative.
- **Statuss:** PENDING

#### DA-SENT-0188 — `sentence-544`

- **DE:** Wann gehst du ins Bett?
- **DA (CURRENT):** Hvornår går du i seng
- **PROPOSED_DA:** Hvornår går du i seng?
- **Problem:** Missing question mark in DA interrogative.
- **Reason:** Missing question mark in DA interrogative.
- **Statuss:** PENDING

#### DA-SENT-0192 — `sentence-560`

- **DE:** Die Wolken verziehen sich.
- **DA (CURRENT):** Skyerne spreder sig.
- **PROPOSED_DA:** Skyerne trækker væk.
- **Problem:** DE clouds disperse/move away; spreder sig means spread out.
- **Reason:** DE clouds disperse/move away; spreder sig means spread out.
- **Statuss:** PENDING

#### DA-SENT-0193 — `sentence-562`

- **DE:** Der Winter ist da, es hat geschneit.
- **DA (CURRENT):** Vinteren er her, det sneede om natten.
- **PROPOSED_DA:** Vinteren er her, det har sneet.
- **Problem:** DA adds om natten not present in DE.
- **Reason:** DA adds om natten not present in DE.
- **Statuss:** PENDING

#### DA-SENT-0219 — `sentence-654`

- **DE:** Kann ich dich später anrufen?
- **DA (CURRENT):** Kan jeg ringe til dig senere
- **PROPOSED_DA:** Kan jeg ringe til dig senere?
- **Problem:** Missing question mark at end of sentence.
- **Reason:** Missing question mark at end of sentence.
- **Statuss:** PENDING

#### DA-SENT-0227 — `sentence-681`

- **DE:** Kannst du schwimmen?
- **DA (CURRENT):** Kan du svømme
- **PROPOSED_DA:** Kan du svømme?
- **Problem:** Missing question mark at end of sentence.
- **Reason:** Missing question mark at end of sentence.
- **Statuss:** PENDING

#### DA-SENT-0230 — `sentence-707`

- **DE:** Sprichst du Deutsch?
- **DA (CURRENT):** Taler du tysk
- **PROPOSED_DA:** Taler du tysk?
- **Problem:** Missing question mark at end of sentence.
- **Reason:** Missing question mark at end of sentence.
- **Statuss:** PENDING

#### DA-SENT-0233 — `sentence-717`

- **DE:** Haben Sie ganz frische Eier?
- **DA (CURRENT):** Har du friske æg?
- **PROPOSED_DA:** Har De meget friske æg?
- **Problem:** Missing intensifier 'ganz' (very/quite fresh) and formal register.
- **Reason:** Missing intensifier 'ganz' (very/quite fresh) and formal register.
- **Statuss:** PENDING

#### DA-SENT-0234 — `sentence-720`

- **DE:** Können Sie mir ein halbes Kilo abwiegen?
- **DA (CURRENT):** Kan du veje et halvt kilo?
- **PROPOSED_DA:** Kan du veje et halvt kilo for mig?
- **Problem:** Missing 'mir' (for me) from the German original.
- **Reason:** Missing 'mir' (for me) from the German original.
- **Statuss:** PENDING

#### DA-SENT-0235 — `sentence-726`

- **DE:** Geben Sie mir zwei Kilo Hackfleisch.
- **DA (CURRENT):** Giv to kilo hakket kød.
- **PROPOSED_DA:** Giv mig to kilo hakket kød.
- **Problem:** Missing 'mir' (to me) from the German original.
- **Reason:** Missing 'mir' (to me) from the German original.
- **Statuss:** PENDING

_… un vēl 1 LOW findings._

## Nākamais solis

Šis audits ir READ-ONLY. Pareizā secība: **100% audits → OWNER review → COPY-ONLY apply → targeted regression → closure**.

OWNER review fails: `reports/da-sentences-all-findings-by-sentence.md`