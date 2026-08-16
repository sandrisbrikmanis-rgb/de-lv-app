# DA–DE Darbības vārdi / Verbs pilns valodas kvalitātes audits

**Datums:** 2026-08-16
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Scope:** 100% production `data/da/verbs.js`
**DE etalons:** `data/verbs.js` (STRICT READ-ONLY)
**Production changes:** 0

## Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| verbs total | **189** |
| verbs audited | **189/189** |
| verb forms total | **945** |
| verb forms audited | **945/945** |
| unprocessed verbs | **0** |
| unprocessed forms | **0** |
| Luna batches | **4/4** |
| raw candidates | **569** |
| validated real findings | **569** |
| FALSE_POSITIVE | **0** |
| CRITICAL | **189** |
| HIGH | **273** |
| MEDIUM | **102** |
| LOW | **3** |
| NEEDS_SOURCE_REVIEW | **2** |
| production changes | **0** |
| DE changes | **0** |

### Strukturālie vārti

| Pārbaude | Rezultāts |
|----------|-----------|
| syntax | **PASS** |
| ID/order | **PASS** |
| structure (189 verbs) | **PASS** |
| mirror | **PASS** |
| DE integrity | **PASS** |
| completeness | **PASS** |

### Verdict

**DA–DE VERBS FULL AUDIT — NEEDS REPAIR**

## Audita sadalījums

Lingvistisko auditu veikts pa **50 verb entries** (visas formas katrā verb kontekstā).

### CRITICAL (189)

#### DA-VERB-0146 — `verb-50` / `infinitiv`

- **DE_CURRENT:** finden
- **DA_CURRENT:** Atrast
- **PROPOSED_DA:** At finde
- **Problem:** Latvian remnant in infinitiv field
- **Reason:** Atrast is Latvian, not Danish; finden = at finde.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0147 — `verb-50` / `partizipVergangenheit`

- **DE_CURRENT:** gefunden
- **DA_CURRENT:** Atraster
- **PROPOSED_DA:** Fundet
- **Problem:** Latvian-style participle remnant
- **Reason:** Atraster is not natural Danish; Partizip II of finden is fundet.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0148 — `verb-51` / `infinitiv`

- **DE_CURRENT:** fliegen
- **DA_CURRENT:** Laisties
- **PROPOSED_DA:** At flyve
- **Problem:** Latvian remnant in infinitiv field
- **Reason:** Laisties is Latvian reflexive, not Danish; fliegen = at flyve.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0149 — `verb-51` / `partizipVergangenheit`

- **DE_CURRENT:** geflogen (er ist)
- **DA_CURRENT:** Lidojis
- **PROPOSED_DA:** Fløjet
- **Problem:** Latvian remnant in participle field
- **Reason:** Lidojis is Latvian; geflogen (sein) = er er fløjet.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0151 — `verb-53` / `imperfektIndikativ`

- **DE_CURRENT:** er floss
- **DA_CURRENT:** Han løb
- **PROPOSED_DA:** Han flød
- **Problem:** Wrong verb meaning (ran instead of flowed)
- **Reason:** fließen past = flød, not løb.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0152 — `verb-53` / `imperfektKonjunktiv`

- **DE_CURRENT:** er flösse
- **DA_CURRENT:** Han ville løbe
- **PROPOSED_DA:** Han ville flyde
- **Problem:** Wrong verb meaning in subjunctive
- **Reason:** Konjunktiv of fließen should use flyde, not løbe.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0153 — `verb-53` / `partizipVergangenheit`

- **DE_CURRENT:** geflossen (er ist)
- **DA_CURRENT:** Bestået
- **PROPOSED_DA:** Flydt
- **Problem:** Completely wrong participle meaning
- **Reason:** Bestået (passed) does not translate geflossen; should be flydt.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0154 — `verb-53` / `praesens`

- **DE_CURRENT:** er fließt
- **DA_CURRENT:** Han løber
- **PROPOSED_DA:** Han flyder
- **Problem:** Wrong verb meaning (run instead of flow)
- **Reason:** fließen = flyde; løbe translates fließen incorrectly.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0157 — `verb-54` / `imperfektKonjunktiv`

- **DE_CURRENT:** er fräße
- **DA_CURRENT:** Han ville spise / morgenmad
- **PROPOSED_DA:** Han ville sluge
- **Problem:** Malformed subjunctive with noun fragment
- **Reason:** morgenmad is a noun, not a verb form; Konjunktiv must be a finite verb phrase.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0159 — `verb-54` / `infinitiv`

- **DE_CURRENT:** fressen
- **DA_CURRENT:** Spise i morgen
- **PROPOSED_DA:** At æde / at sluges
- **Problem:** Nonsensical infinitiv translation
- **Reason:** Spise i morgen (eat tomorrow) is not a valid rendering of fressen (devour, esp. animals).
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0160 — `verb-54` / `partizipVergangenheit`

- **DE_CURRENT:** gefressen
- **DA_CURRENT:** Spist/morgen
- **PROPOSED_DA:** Slugt
- **Problem:** Malformed participle with stray noun
- **Reason:** Spist/morgen is not a valid Danish participle for gefressen.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0163 — `verb-55` / `imperfektIndikativ`

- **DE_CURRENT:** er fror
- **DA_CURRENT:** Han ø
- **PROPOSED_DA:** Han frøs
- **Problem:** Truncated/garbled form
- **Reason:** Han ø is incomplete and unusable as a Danish past-tense form.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0165 — `verb-55` / `infinitiv`

- **DE_CURRENT:** frieren
- **DA_CURRENT:** Salt
- **PROPOSED_DA:** At fryse
- **Problem:** Noun used instead of verb infinitive
- **Reason:** Salt (salt) is not Danish for frieren (freeze); should be at fryse.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0166 — `verb-55` / `partizipVergangenheit`

- **DE_CURRENT:** gefroren
- **DA_CURRENT:** Salis
- **PROPOSED_DA:** Frosset
- **Problem:** Latvian remnant in participle field
- **Reason:** Salis is not Danish; gefroren = frosset.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0167 — `verb-56` / `infinitiv`

- **DE_CURRENT:** geben
- **DA_CURRENT:** Prik
- **PROPOSED_DA:** At give
- **Problem:** Latvian remnant in infinitiv field
- **Reason:** Prik is Latvian, not Danish; geben = at give.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0168 — `verb-56` / `partizipVergangenheit`

- **DE_CURRENT:** gegeben
- **DA_CURRENT:** Prikker
- **PROPOSED_DA:** Givet
- **Problem:** Wrong participle form
- **Reason:** Prikker is not the Danish past participle of give; gegeben = givet.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0169 — `verb-57` / `infinitiv`

- **DE_CURRENT:** gedeihen
- **DA_CURRENT:** Izdoties
- **PROPOSED_DA:** At trives
- **Problem:** Latvian remnant in infinitiv field
- **Reason:** Izdoties is Latvian; gedeihen = at trives / at lykkes.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0171 — `verb-57` / `partizipVergangenheit`

- **DE_CURRENT:** gediehen (er ist)
- **DA_CURRENT:** Izdevies
- **PROPOSED_DA:** Trived
- **Problem:** Latvian remnant in participle field
- **Reason:** Izdevies is Latvian; gediehen (sein) = er er trived.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0172 — `verb-58` / `infinitiv`

- **DE_CURRENT:** gehen
- **DA_CURRENT:** Iet
- **PROPOSED_DA:** At gå
- **Problem:** Latvian remnant in infinitiv field
- **Reason:** Iet is Latvian; gehen = at gå.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0179 — `verb-60` / `imperfektIndikativ`

- **DE_CURRENT:** hatte
- **DA_CURRENT:** Bija
- **PROPOSED_DA:** Han havde
- **Problem:** Latvian remnant in past tense
- **Reason:** Bija is Latvian; hatte = havde.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0180 — `verb-60` / `imperfektKonjunktiv`

- **DE_CURRENT:** hatte
- **DA_CURRENT:** Bija
- **PROPOSED_DA:** Han havde
- **Problem:** Latvian remnant in subjunctive
- **Reason:** Bija is Latvian; Konjunktiv II of haben = havde.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0182 — `verb-60` / `partizipVergangenheit`

- **DE_CURRENT:** gehabt
- **DA_CURRENT:** Bijis
- **PROPOSED_DA:** Haft
- **Problem:** Latvian remnant in participle field
- **Reason:** Bijis is Latvian; gehabt = haft.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0185 — `verb-61` / `praesens`

- **DE_CURRENT:** er hält
- **DA_CURRENT:** Han der
- **PROPOSED_DA:** Han holder
- **Problem:** Garbled present-tense form
- **Reason:** Han der is not a valid Danish conjugation of holde.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0190 — `verb-62` / `infinitiv`

- **DE_CURRENT:** heißen
- **DA_CURRENT:** Saut
- **PROPOSED_DA:** At hedde
- **Problem:** Latvian remnant in infinitiv field
- **Reason:** Saut is Latvian; heißen (be called) = at hedde.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0191 — `verb-62` / `partizipVergangenheit`

- **DE_CURRENT:** geheißen
- **DA_CURRENT:** Saukts
- **PROPOSED_DA:** Heddet
- **Problem:** Latvian remnant in participle field
- **Reason:** Saukts is Latvian; geheißen = heddet.
- **Statuss:** PENDING
- **OWNER_DECISION:**

_… un vēl 164 CRITICAL findings._

### HIGH (273)

#### DA-VERB-0001 — `verb-0` / `infinitiv.lv`

- **DE_CURRENT:** backen
- **DA_CURRENT:** Cept
- **PROPOSED_DA:** (Natural Danish)
- **Problem:** Foreign remnant: LV
- **Reason:** DA must be natural Danish without foreign fragments
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0002 — `verb-0` / `infinitiv.lv`

- **DE_CURRENT:** backen
- **DA_CURRENT:** Cept
- **PROPOSED_DA:** At bage
- **Problem:** Latvian infinitive remnant (cept); not Danish.
- **Reason:** Latvian infinitive remnant (cept); not Danish.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0003 — `verb-0` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebacken
- **DA_CURRENT:** Cepts / izcepts
- **PROPOSED_DA:** (Single natural Danish form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0004 — `verb-0` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebacken
- **DA_CURRENT:** Cepts / izcepts
- **PROPOSED_DA:** (Danish past participle)
- **Problem:** Possible LV-style participle remnant in Partizip II field
- **Reason:** Partizip II should use Danish participle forms
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0005 — `verb-0` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebacken
- **DA_CURRENT:** Cepts / izcepts
- **PROPOSED_DA:** Bagt
- **Problem:** Latvian participle forms with multi-variant chain; needs single Danish past participle.
- **Reason:** Latvian participle forms with multi-variant chain; needs single Danish past participle.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0008 — `verb-3` / `imperfektIndikativ.lv`

- **DE_CURRENT:** er biss
- **DA_CURRENT:** Han kodede
- **PROPOSED_DA:** Han bed
- **Problem:** Wrong verb entirely (kodede = coded); does not translate beißen.
- **Reason:** Wrong verb entirely (kodede = coded); does not translate beißen.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0009 — `verb-3` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er bisse
- **DA_CURRENT:** Han bider
- **PROPOSED_DA:** Han ville bide
- **Problem:** Present tense given where Konjunktiv II (ville + infinitive) is required.
- **Reason:** Present tense given where Konjunktiv II (ville + infinitive) is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0010 — `verb-3` / `infinitiv.lv`

- **DE_CURRENT:** beißen
- **DA_CURRENT:** Kost
- **PROPOSED_DA:** At bide
- **Problem:** Latvian infinitive remnant (kost); not Danish.
- **Reason:** Latvian infinitive remnant (kost); not Danish.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0011 — `verb-3` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebissen
- **DA_CURRENT:** Kosts / sakosts
- **PROPOSED_DA:** (Single natural Danish form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0012 — `verb-3` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebissen
- **DA_CURRENT:** Kosts / sakosts
- **PROPOSED_DA:** (Danish past participle)
- **Problem:** Possible LV-style participle remnant in Partizip II field
- **Reason:** Partizip II should use Danish participle forms
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0013 — `verb-3` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebissen
- **DA_CURRENT:** Kosts / sakosts
- **PROPOSED_DA:** Bidt
- **Problem:** Latvian participle forms with multi-variant chain; not Danish.
- **Reason:** Latvian participle forms with multi-variant chain; not Danish.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0014 — `verb-4` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geborgen
- **DA_CURRENT:** Skjult / gemt
- **PROPOSED_DA:** (Single natural Danish form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0016 — `verb-5` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er bärste / er börste
- **DA_CURRENT:** Brister han
- **PROPOSED_DA:** Han ville briste
- **Problem:** Present tense given where Konjunktiv II is required.
- **Reason:** Present tense given where Konjunktiv II is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0017 — `verb-6` / `imperfektIndikativ.lv`

- **DE_CURRENT:** er bewog
- **DA_CURRENT:** Opfordrede han
- **PROPOSED_DA:** Han bevægede
- **Problem:** Opfordrede means urged; does not translate bewog (moved).
- **Reason:** Opfordrede means urged; does not translate bewog (moved).
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0018 — `verb-6` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er bewöge
- **DA_CURRENT:** Han ville opmuntre
- **PROPOSED_DA:** Han ville bevæge
- **Problem:** opmuntre (encourage) does not match bewöge (would move).
- **Reason:** opmuntre (encourage) does not match bewöge (would move).
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0019 — `verb-6` / `infinitiv.lv`

- **DE_CURRENT:** bewegen
- **DA_CURRENT:** At opmuntre
- **PROPOSED_DA:** At bevæge
- **Problem:** bewegen means to move; opmuntre means to encourage — wrong verb meaning.
- **Reason:** bewegen means to move; opmuntre means to encourage — wrong verb meaning.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0020 — `verb-6` / `partizipVergangenheit.lv`

- **DE_CURRENT:** bewogen
- **DA_CURRENT:** Opmuntret
- **PROPOSED_DA:** Bevæget
- **Problem:** Opmuntret (encouraged) does not translate bewogen (moved).
- **Reason:** Opmuntret (encouraged) does not translate bewogen (moved).
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0021 — `verb-6` / `praesens.lv`

- **DE_CURRENT:** er bewegt
- **DA_CURRENT:** Spørger han
- **PROPOSED_DA:** Han bevæger
- **Problem:** Spørger means asks; does not translate bewegt (moves).
- **Reason:** Spørger means asks; does not translate bewegt (moves).
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0022 — `verb-8` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geboten
- **DA_CURRENT:** Lovet / tilbudt
- **PROPOSED_DA:** (Single natural Danish form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0024 — `verb-9` / `imperfektIndikativ.lv`

- **DE_CURRENT:** er band
- **DA_CURRENT:** Han såede
- **PROPOSED_DA:** Han bandt
- **Problem:** såede (sowed) is wrong verb; does not translate band (bound).
- **Reason:** såede (sowed) is wrong verb; does not translate band (bound).
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0025 — `verb-9` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er bände
- **DA_CURRENT:** Han sigtede
- **PROPOSED_DA:** Han ville binde
- **Problem:** sigtede (aimed) is wrong verb; does not translate bände.
- **Reason:** sigtede (aimed) is wrong verb; does not translate bände.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0026 — `verb-9` / `infinitiv.lv`

- **DE_CURRENT:** binden
- **DA_CURRENT:** Sit
- **PROPOSED_DA:** At binde
- **Problem:** Latvian infinitive remnant (siet); not Danish.
- **Reason:** Latvian infinitive remnant (siet); not Danish.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0027 — `verb-9` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebunden
- **DA_CURRENT:** Siets
- **PROPOSED_DA:** Bundet
- **Problem:** Latvian participle remnant (siets); not Danish.
- **Reason:** Latvian participle remnant (siets); not Danish.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0028 — `verb-9` / `praesens.lv`

- **DE_CURRENT:** er bindet
- **DA_CURRENT:** Han hø
- **PROPOSED_DA:** Han binder
- **Problem:** Truncated/garbled form; does not translate bindet.
- **Reason:** Truncated/garbled form; does not translate bindet.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0031 — `verb-12` / `imperfektIndikativ.lv`

- **DE_CURRENT:** es gor / es gärte
- **DA_CURRENT:** Det gærer
- **PROPOSED_DA:** Det gærede
- **Problem:** Present tense repeated for past tense slot.
- **Reason:** Present tense repeated for past tense slot.
- **Statuss:** PENDING
- **OWNER_DECISION:**

_… un vēl 248 HIGH findings._

### MEDIUM (102)

#### DA-VERB-0006 — `verb-1` / `partizipVergangenheit.lv`

- **DE_CURRENT:** befohlen
- **DA_CURRENT:** Kommanderede
- **PROPOSED_DA:** Kommanderet
- **Problem:** Preterite form given where past participle is required.
- **Reason:** Preterite form given where past participle is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0007 — `verb-2` / `partizipVergangenheit.lv`

- **DE_CURRENT:** begonnen
- **DA_CURRENT:** Startede
- **PROPOSED_DA:** Startet
- **Problem:** Preterite form given where past participle is required.
- **Reason:** Preterite form given where past participle is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0015 — `verb-4` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geborgen
- **DA_CURRENT:** Skjult / gemt
- **PROPOSED_DA:** Gemt
- **Problem:** Multi-variant translation chain; card should use one teaching form.
- **Reason:** Multi-variant translation chain; card should use one teaching form.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0023 — `verb-8` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geboten
- **DA_CURRENT:** Lovet / tilbudt
- **PROPOSED_DA:** Tilbudt
- **Problem:** Multi-variant chain; bieten as offer needs one participle form.
- **Reason:** Multi-variant chain; bieten as offer needs one participle form.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0029 — `verb-10` / `imperfektIndikativ.lv`

- **DE_CURRENT:** er bat
- **DA_CURRENT:** Spurgte han
- **PROPOSED_DA:** Han bad
- **Problem:** Inconsistent with praesens 'tigger' (beg); spurgte means asked, not begged.
- **Reason:** Inconsistent with praesens 'tigger' (beg); spurgte means asked, not begged.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0030 — `verb-10` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebeten
- **DA_CURRENT:** Anmodet om
- **PROPOSED_DA:** Bedet
- **Problem:** Prepositional phrase given where past participle is required.
- **Reason:** Prepositional phrase given where past participle is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0035 — `verb-13` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geboren
- **DA_CURRENT:** Født / blev født
- **PROPOSED_DA:** Født
- **Problem:** Multi-variant translation chain; card should use one teaching form.
- **Reason:** Multi-variant translation chain; card should use one teaching form.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0045 — `verb-15` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er gölte / es gälte
- **DA_CURRENT:** Han ville passe / det ville passe
- **PROPOSED_DA:** Det ville gælde
- **Problem:** Multi-variant chain; gelten subjunctive is impersonal.
- **Reason:** Multi-variant chain; gelten subjunctive is impersonal.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0047 — `verb-15` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gegolten
- **DA_CURRENT:** Anvendt / var gyldig
- **PROPOSED_DA:** Gået
- **Problem:** Multi-variant chain; neither form is a natural Danish participle for gegolten.
- **Reason:** Multi-variant chain; neither form is a natural Danish participle for gegolten.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0049 — `verb-15` / `praesens.lv`

- **DE_CURRENT:** er gilt
- **DA_CURRENT:** Han passer / er gyldig
- **PROPOSED_DA:** Det gælder
- **Problem:** Multi-variant chain; gelten is impersonal (es gilt) — not 'han passer'.
- **Reason:** Multi-variant chain; gelten is impersonal (es gilt) — not 'han passer'.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0050 — `verb-16` / `partizipVergangenheit.lv`

- **DE_CURRENT:** genesen (er ist)
- **DA_CURRENT:** Blive rask
- **PROPOSED_DA:** Blevet rask
- **Problem:** Infinitive phrase given where past participle is required.
- **Reason:** Infinitive phrase given where past participle is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0051 — `verb-17` / `partizipVergangenheit.lv`

- **DE_CURRENT:** genossen
- **DA_CURRENT:** Nød
- **PROPOSED_DA:** Nydt
- **Problem:** Preterite form given where past participle is required.
- **Reason:** Preterite form given where past participle is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0062 — `verb-20` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geglichen
- **DA_CURRENT:** Lignede
- **PROPOSED_DA:** Lignet
- **Problem:** Preterite form given where past participle is required.
- **Reason:** Preterite form given where past participle is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0063 — `verb-21` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geglitten (er ist)
- **DA_CURRENT:** Gled
- **PROPOSED_DA:** Glidt
- **Problem:** Preterite form given where past participle is required.
- **Reason:** Preterite form given where past participle is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0068 — `verb-24` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gegriffen
- **DA_CURRENT:** Fanget/grebet
- **PROPOSED_DA:** Grebet
- **Problem:** Multi-variant chain with missing space; greifen = grasp/seize.
- **Reason:** Multi-variant chain with missing space; greifen = grasp/seize.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0082 — `verb-27` / `infinitiv.lv`

- **DE_CURRENT:** kennen
- **DA_CURRENT:** At vide / at vide
- **PROPOSED_DA:** (Single natural Danish form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0083 — `verb-27` / `infinitiv.lv`

- **DE_CURRENT:** kennen
- **DA_CURRENT:** At vide / at vide
- **PROPOSED_DA:** At kende
- **Problem:** Duplicate variant chain; kennen = know (person/place), not vide (know facts).
- **Reason:** Duplicate variant chain; kennen = know (person/place), not vide (know facts).
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0086 — `verb-28` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geklungen
- **DA_CURRENT:** Lød
- **PROPOSED_DA:** Klunget
- **Problem:** Preterite form given where past participle is required.
- **Reason:** Preterite form given where past participle is required.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0096 — `verb-32` / `infinitiv.lv`

- **DE_CURRENT:** braten
- **DA_CURRENT:** Cept
- **PROPOSED_DA:** (Distinct Danish for this verb)
- **Problem:** Duplicate infinitiv DA shared with verb-0 (DE: backen)
- **Reason:** Different German verbs should not share identical DA infinitiv
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0108 — `verb-34` / `praesens.lv`

- **DE_CURRENT:** er brennt
- **DA_CURRENT:** Han er i brand
- **PROPOSED_DA:** Han brænder
- **Problem:** Unnatural periphrasis; brennen present is simply 'brænder'.
- **Reason:** Unnatural periphrasis; brennen present is simply 'brænder'.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0114 — `verb-36` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er dächte
- **DA_CURRENT:** Ville han mene
- **PROPOSED_DA:** Han ville tænke
- **Problem:** mene (mean/opine) ≠ denken (think).
- **Reason:** mene (mean/opine) ≠ denken (think).
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0118 — `verb-37` / `infinitiv.lv`

- **DE_CURRENT:** dingen
- **DA_CURRENT:** At ansætte / at blive enige
- **PROPOSED_DA:** (Single natural Danish form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0124 — `verb-40` / `imperfektIndikativ.lv`

- **DE_CURRENT:** deuchte
- **DA_CURRENT:** Det virkede
- **PROPOSED_DA:** Det lod til
- **Problem:** dünken means to seem/appear; virkede (worked) is wrong meaning.
- **Reason:** dünken means to seem/appear; virkede (worked) is wrong meaning.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0125 — `verb-40` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** deuchte
- **DA_CURRENT:** Det virkede
- **PROPOSED_DA:** Det ville synes
- **Problem:** Duplicate wrong translation; dünken subjunctive ≠ virkede.
- **Reason:** Duplicate wrong translation; dünken subjunctive ≠ virkede.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0126 — `verb-41` / `praesens.lv`

- **DE_CURRENT:** er darf
- **DA_CURRENT:** Han kan
- **PROPOSED_DA:** Han må
- **Problem:** dürfen expresses permission (may); kan expresses ability (can).
- **Reason:** dürfen expresses permission (may); kan expresses ability (can).
- **Statuss:** PENDING
- **OWNER_DECISION:**

_… un vēl 77 MEDIUM findings._

### LOW (3)

#### DA-VERB-0137 — `verb-46` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gegessen
- **DA_CURRENT:** Spist / spist
- **PROPOSED_DA:** Spist
- **Problem:** Duplicate variant differing only in capitalization.
- **Reason:** Duplicate variant differing only in capitalization.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0145 — `verb-49` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gefangen
- **DA_CURRENT:** Fanget / fanget
- **PROPOSED_DA:** Fanget
- **Problem:** Duplicate variant differing only in capitalization.
- **Reason:** Duplicate variant differing only in capitalization.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0379 — `verb-119` / `praesens`

- **DE_CURRENT:** er schreibt
- **DA_CURRENT:** Skriver han
- **PROPOSED_DA:** Han skriver
- **Problem:** Inverted word order.
- **Reason:** Inverted order acceptable but project convention prefers Han + verb.
- **Statuss:** PENDING
- **OWNER_DECISION:**

### NEEDS_SOURCE_REVIEW (2)

#### DA-VERB-0081 — `verb-27` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** kannte
- **DA_CURRENT:** Pazina
- **PROPOSED_DA:** —
- **Problem:** DE Konjunktiv II should be 'er kennte', not Indikativ 'kannte'.
- **Reason:** DE Konjunktiv II should be 'er kennte', not Indikativ 'kannte'.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### DA-VERB-0094 — `verb-31` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** blich
- **DA_CURRENT:** Bleget
- **PROPOSED_DA:** —
- **Problem:** DE Konjunktiv II of bleichen should be 'er bliche', not Präteritum 'blich'.
- **Reason:** DE Konjunktiv II of bleichen should be 'er bliche', not Präteritum 'blich'.
- **Statuss:** PENDING
- **OWNER_DECISION:**

## Nākamais sols

OWNER review → COPY-ONLY apply → targeted regression → closure.
