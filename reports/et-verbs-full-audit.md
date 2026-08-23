# ET–DE Darbības vārdi / Verbs pilns valodas kvalitātes audits

**Datums:** 2026-08-23
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Scope:** 100% production `data/et/verbs.js`
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
| raw candidates | **197** |
| validated real findings | **197** |
| FALSE_POSITIVE | **0** |
| CRITICAL | **0** |
| HIGH | **79** |
| MEDIUM | **115** |
| LOW | **3** |
| NEEDS_SOURCE_REVIEW | **0** |
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

**ET–DE VERBS FULL AUDIT — NEEDS REPAIR**

## Audita sadalījums

Lingvistisko auditu veikts pa **50 verb entries** (visas formas katrā verb kontekstā).

### HIGH (79)

#### ET-VERB-0001 — `verb-3` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebissen
- **ET_CURRENT:** hammustatud / ära hammustatud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0003 — `verb-4` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geborgen
- **ET_CURRENT:** peidetud / päästetud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0004 — `verb-8` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geboten
- **ET_CURRENT:** pakutud / pakutud välja
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0007 — `verb-13` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geboren
- **ET_CURRENT:** sünnitatud / sündinud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0008 — `verb-15` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er gölte / es gälte
- **ET_CURRENT:** ta kehtiks / see kehtiks
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0009 — `verb-24` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gegriffen
- **ET_CURRENT:** haaratud / kinni haaratud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0010 — `verb-27` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** kannte
- **ET_CURRENT:** ta tundis
- **PROPOSED_ET:** ta tunneks
- **Problem:** Konjunktiv II peab eesti keeles olema tingiv kõneviis, mitte lihtminevik.
- **Reason:** Konjunktiv II peab eesti keeles olema tingiv kõneviis, mitte lihtminevik.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0012 — `verb-31` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** blich
- **ET_CURRENT:** ta pleegitas
- **PROPOSED_ET:** ta pleegitaks
- **Problem:** Konjunktiv II nõuab eesti keeles tingivat vormi, mitte indikatiivi minevikku.
- **Reason:** Konjunktiv II nõuab eesti keeles tingivat vormi, mitte indikatiivi minevikku.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0014 — `verb-33` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebrochen
- **ET_CURRENT:** murtud / katki murtud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0015 — `verb-34` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** brannte
- **ET_CURRENT:** ta põles
- **PROPOSED_ET:** ta põleks
- **Problem:** Konjunktiv II peab eesti keeles olema tingiv kõneviis, mitte indikatiivi minevik.
- **Reason:** Konjunktiv II peab eesti keeles olema tingiv kõneviis, mitte indikatiivi minevik.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0016 — `verb-35` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gebracht
- **ET_CURRENT:** toodud / kohale toodud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0017 — `verb-37` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** dingte
- **ET_CURRENT:** ta palkas
- **PROPOSED_ET:** ta palkaks
- **Problem:** Konjunktiv II vorm peab olema eesti keeles tingiv, mitte indikatiivne minevikuvorm.
- **Reason:** Konjunktiv II vorm peab olema eesti keeles tingiv, mitte indikatiivne minevikuvorm.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0019 — `verb-40` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** deuchte
- **ET_CURRENT:** see tundus
- **PROPOSED_ET:** see tunduks
- **Problem:** Konjunktiv II peab eesti keeles olema tingiv kõneviis, mitte lihtminevik.
- **Reason:** Konjunktiv II peab eesti keeles olema tingiv kõneviis, mitte lihtminevik.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0020 — `verb-41` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** durfte
- **ET_CURRENT:** ta tohtis
- **PROPOSED_ET:** ta tohiks
- **Problem:** Konjunktiv II nõuab eesti keeles tingivat vormi, mitte indikatiivi minevikku.
- **Reason:** Konjunktiv II nõuab eesti keeles tingivat vormi, mitte indikatiivi minevikku.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0022 — `verb-46` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gegessen
- **ET_CURRENT:** söödud / ära söödud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0023 — `verb-47` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gefahren (er ist)
- **ET_CURRENT:** sõitnud / ära sõitnud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0024 — `verb-49` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gefangen
- **ET_CURRENT:** püütud / kinni püütud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0025 — `verb-54` / `imperfektIndikativ.lv`

- **DE_CURRENT:** er frass
- **ET_CURRENT:** ta sõi / kugistas
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0026 — `verb-54` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er fräße
- **ET_CURRENT:** ta sööks / kugistaks
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0029 — `verb-54` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gefressen
- **ET_CURRENT:** ära söödud / kugistatud
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0031 — `verb-54` / `praesens.lv`

- **DE_CURRENT:** er frisst
- **ET_CURRENT:** ta sööb / kugistab
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0035 — `verb-57` / `imperfektIndikativ.lv`

- **DE_CURRENT:** er gedieh
- **ET_CURRENT:** tal õnnestus
- **PROPOSED_ET:** ta edenes
- **Problem:** The current form means he succeeded, not he thrived.
- **Reason:** The current form means he succeeded, not he thrived.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0036 — `verb-57` / `imperfektKonjunktiv.lv`

- **DE_CURRENT:** er gediehe
- **ET_CURRENT:** tal õnnestuks
- **PROPOSED_ET:** ta edeneks
- **Problem:** The current form expresses success rather than thriving.
- **Reason:** The current form expresses success rather than thriving.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0038 — `verb-57` / `infinitiv.lv`

- **DE_CURRENT:** gedeihen
- **ET_CURRENT:** õnnestuma
- **PROPOSED_ET:** edenema
- **Problem:** Gedeihen means to thrive or prosper, not to succeed in the sense of õnnestuma.
- **Reason:** Gedeihen means to thrive or prosper, not to succeed in the sense of õnnestuma.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0039 — `verb-57` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gediehen (er ist)
- **ET_CURRENT:** õnnestunud
- **PROPOSED_ET:** edenenud
- **Problem:** The participle must match the corrected thrive meaning.
- **Reason:** The participle must match the corrected thrive meaning.
- **Statuss:** PENDING
- **OWNER_DECISION:**

_… un vēl 54 HIGH findings._

### MEDIUM (115)

#### ET-VERB-0002 — `verb-4` / `infinitiv.lv`

- **DE_CURRENT:** bergen
- **ET_CURRENT:** peitma / päästma
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0005 — `verb-12` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gegoren / gegärt
- **ET_CURRENT:** kääritanud
- **PROPOSED_ET:** käärinud
- **Problem:** Praegune vorm tähendab millegi kääritamist; saksa verb on siin intransitiivne.
- **Reason:** Praegune vorm tähendab millegi kääritamist; saksa verb on siin intransitiivne.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0006 — `verb-12` / `praesens.lv`

- **DE_CURRENT:** es gärt
- **ET_CURRENT:** see kääritab
- **PROPOSED_ET:** see käärib
- **Problem:** Käärima on siin intransitiivne: miski käärib, mitte ei käärita midagi.
- **Reason:** Käärima on siin intransitiivne: miski käärib, mitte ei käärita midagi.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0011 — `verb-27` / `infinitiv.lv`

- **DE_CURRENT:** kennen
- **ET_CURRENT:** tundma / teadma
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0013 — `verb-32` / `infinitiv.lv`

- **DE_CURRENT:** braten
- **ET_CURRENT:** küpsetama
- **PROPOSED_ET:** (Distinct Estonian for this verb)
- **Problem:** Duplicate infinitiv ET shared with verb-0 (DE: backen)
- **Reason:** Different German verbs should not share identical ET infinitiv
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0018 — `verb-37` / `infinitiv.lv`

- **DE_CURRENT:** dingen
- **ET_CURRENT:** palkama / kokku leppima
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0021 — `verb-43` / `infinitiv.lv`

- **DE_CURRENT:** empfinden
- **ET_CURRENT:** tundma
- **PROPOSED_ET:** (Distinct Estonian for this verb)
- **Problem:** Duplicate infinitiv ET shared with verb-27 (DE: kennen)
- **Reason:** Different German verbs should not share identical ET infinitiv
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0027 — `verb-54` / `infinitiv.lv`

- **DE_CURRENT:** fressen
- **ET_CURRENT:** sööma / kugistama
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0028 — `verb-54` / `infinitiv.lv`

- **DE_CURRENT:** fressen
- **ET_CURRENT:** sööma / kugistama
- **PROPOSED_ET:** (Distinct Estonian for this verb)
- **Problem:** Duplicate infinitiv ET shared with verb-46 (DE: essen)
- **Reason:** Different German verbs should not share identical ET infinitiv
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0030 — `verb-54` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gefressen
- **ET_CURRENT:** ära söödud / kugistatud
- **PROPOSED_ET:** söönud / kugistanud
- **Problem:** German participle is active here; current Estonian forms are passive.
- **Reason:** German participle is active here; current Estonian forms are passive.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0032 — `verb-55` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gefroren
- **ET_CURRENT:** külmunud
- **PROPOSED_ET:** külmetanud
- **Problem:** The paradigm translates frieren as feeling cold, but külmunud means frozen.
- **Reason:** The paradigm translates frieren as feeling cold, but külmunud means frozen.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0033 — `verb-56` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gegeben
- **ET_CURRENT:** antud
- **PROPOSED_ET:** andnud
- **Problem:** German participle is active in this paradigm; antud is passive.
- **Reason:** German participle is active in this paradigm; antud is passive.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0034 — `verb-57` / `imperfektIndikativ.lv`

- **DE_CURRENT:** er gedieh
- **ET_CURRENT:** tal õnnestus
- **PROPOSED_ET:** (Natural Estonian: ta …)
- **Problem:** Unnatural ET word order for person form
- **Reason:** Estonian er-forms typically use ta + verb (e.g. ta küpsetab)
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0037 — `verb-57` / `infinitiv.lv`

- **DE_CURRENT:** gedeihen
- **ET_CURRENT:** õnnestuma
- **PROPOSED_ET:** (Distinct Estonian for this verb)
- **Problem:** Duplicate infinitiv ET shared with verb-14 (DE: gelingen)
- **Reason:** Different German verbs should not share identical ET infinitiv
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0040 — `verb-57` / `praesens.lv`

- **DE_CURRENT:** er gedeiht
- **ET_CURRENT:** tal õnnestub
- **PROPOSED_ET:** (Natural Estonian: ta …)
- **Problem:** Unnatural ET word order for person form
- **Reason:** Estonian er-forms typically use ta + verb (e.g. ta küpsetab)
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0042 — `verb-59` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gewonnen
- **ET_CURRENT:** võidetud
- **PROPOSED_ET:** võitnud
- **Problem:** German participle is active; võidetud is passive.
- **Reason:** German participle is active; võidetud is passive.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0044 — `verb-60` / `infinitiv.lv`

- **DE_CURRENT:** haben
- **ET_CURRENT:** olema / omama
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0045 — `verb-60` / `praesens.lv`

- **DE_CURRENT:** er hat
- **ET_CURRENT:** tal on
- **PROPOSED_ET:** (Natural Estonian: ta …)
- **Problem:** Unnatural ET word order for person form
- **Reason:** Estonian er-forms typically use ta + verb (e.g. ta küpsetab)
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0046 — `verb-61` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gehalten
- **ET_CURRENT:** hoitud
- **PROPOSED_ET:** hoidnud
- **Problem:** German participle is active here; hoitud is passive.
- **Reason:** German participle is active here; hoitud is passive.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0050 — `verb-63` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geholfen
- **ET_CURRENT:** aidatud
- **PROPOSED_ET:** aidanud
- **Problem:** German participle is active; aidatud is passive.
- **Reason:** German participle is active; aidatud is passive.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0054 — `verb-65` / `infinitiv.lv`

- **DE_CURRENT:** können
- **ET_CURRENT:** suutma / oskama
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0058 — `verb-67` / `infinitiv.lv`

- **DE_CURRENT:** laden
- **ET_CURRENT:** laadima / kutsuma
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0063 — `verb-68` / `infinitiv.lv`

- **DE_CURRENT:** lassen
- **ET_CURRENT:** panema / laskma
- **PROPOSED_ET:** (Single natural Estonian form)
- **Problem:** Multi-variant translation chain (• or /)
- **Reason:** Verb card is not a dictionary; keep one teaching form
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0066 — `verb-70` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gelitten
- **ET_CURRENT:** kannatatud
- **PROPOSED_ET:** kannatanud
- **Problem:** German participle is active; kannatatud is passive.
- **Reason:** German participle is active; kannatatud is passive.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0067 — `verb-71` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geliehen
- **ET_CURRENT:** laenatud
- **PROPOSED_ET:** laenanud
- **Problem:** German participle is active; laenatud is passive.
- **Reason:** German participle is active; laenatud is passive.
- **Statuss:** PENDING
- **OWNER_DECISION:**

_… un vēl 90 MEDIUM findings._

### LOW (3)

#### ET-VERB-0102 — `verb-95` / `partizipVergangenheit.lv`

- **DE_CURRENT:** geronnen (er ist)
- **ET_CURRENT:** voolanud / kokku vajunud
- **PROPOSED_ET:** voolanud
- **Problem:** Kokku vajunud means collapsed and is not a meaning of rinnen here.
- **Reason:** Kokku vajunud means collapsed and is not a meaning of rinnen here.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0145 — `verb-147` / `praesens.lv`

- **DE_CURRENT:** er steigt
- **ET_CURRENT:** ta roniab
- **PROPOSED_ET:** ta ronib
- **Problem:** Tegusõna „ronima“ 3. pöörde olevik on „ronib“, mitte „roniab“.
- **Reason:** Tegusõna „ronima“ 3. pöörde olevik on „ronib“, mitte „roniab“.
- **Statuss:** PENDING
- **OWNER_DECISION:**

#### ET-VERB-0191 — `verb-186` / `partizipVergangenheit.lv`

- **DE_CURRENT:** gehangen
- **ET_CURRENT:** ripnud
- **PROPOSED_ET:** rippunud
- **Problem:** Verbi „rippuma“ korrektne nud-vorm on „rippunud“.
- **Reason:** Verbi „rippuma“ korrektne nud-vorm on „rippunud“.
- **Statuss:** PENDING
- **OWNER_DECISION:**

## Nākamais sols

OWNER review → COPY-ONLY apply → targeted regression → closure.
