# EN–DE Darbības vārdi — Luna pilns lingvistiskais audits

**Audita datums:** 2026-08-10
**Audita modelis:** gpt-5.6-luna
**Režģis:** AUDIT ONLY — production dati netika mainīti
**Audita faili:** `data/en/verbs.js`, mirror `www/data/en/verbs.js`
**Etalons (DE):** `data/verbs.js` (DE READ-ONLY)

## Verdikts

**REPAIRS REQUIRED**

## Apjoms

```text
Verbs reviewed: 190 / 189
Forms reviewed: 950 / 945

infinitiv: 190 / 189
praesens: 190 / 189
imperfektIndikativ: 190 / 189
imperfektKonjunktiv: 190 / 189
partizipVergangenheit: 190 / 189

Data modifications: NONE

CRITICAL: 1
HIGH: 312
MEDIUM: 103
LOW: 5
SOURCE_LV_ISSUE: 0
DE_SOURCE_ISSUE: 1
Clean verbs: 41 / 190
```

## Strukturālā regresija

| Pārbaude | Rezultāts |
| --- | --- |
| LV verbs = EN verbs (189) | PASS |
| Structural parity | PASS |
| Order parity | PASS |
| DE READ-ONLY | PASS |
| JavaScript syntax | PASS |
| Mojibake (deterministic) | PASS |
| data/en/verbs.js ≡ www mirror | PASS |

## Atradumu kategorijas

- FOREIGN_REMNANT: 175
- TRANSLATION: 127
- GRAMMAR: 80
- SEMANTICS: 37
- PARADIGM: 1
- NATURALNESS: 1

## Luna API

| Metrika | Vērtība |
| --- | ---: |
| API requests | 19 |
| Input tokens | 40528 |
| Output tokens | 72568 |
| Total tokens | 113096 |

## Metodoloģija

- Katrs verbs audits ar visām 5 formām kontekstā (10 verbs/batch).
- Luna novērtē DE nozīmi (primāri), LV semantisko intentu (sekundāri), pašreizējo EN formu.
- Paradigma konsekvence pārbaudīta katram verbam.
- Konjunktiv II ↔ angļu conditional/would; Partizip II ↔ passive participle kur attiecināms.
- 1 Luna phantom verb ID (`verb-125-schwinden` ar ZWSP) normalizēts; visi 945 formu sloti pārklāti.

## Atradumi (421 quality issues)

### 1. CRITICAL — `verb-133-sinken` / `imperfektIndikativ`

**Severity:** CRITICAL
**Verb ID:** verb-133-sinken
**German:** er sank
**Field:** imperfektIndikativ
**Current EN:** he was making up
**Recommended EN:** he sank
**Reason:** Making up is unrelated to the German verb sinken.

### 2. HIGH — `verb-0-backen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-0-backen
**German:** backen
**Field:** infinitiv
**Current EN:** cept
**Recommended EN:** to bake
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 3. HIGH — `verb-0-backen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-0-backen
**German:** gebacken
**Field:** partizipVergangenheit
**Current EN:** cepts / izcepts
**Recommended EN:** baked
**Reason:** The English field contains Latvian participle forms rather than an English participle.

### 4. HIGH — `verb-3-beißen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-3-beißen
**German:** beißen
**Field:** infinitiv
**Current EN:** kost
**Recommended EN:** to bite
**Reason:** The English field contains the Latvian infinitive instead of an English translation.

### 5. HIGH — `verb-3-beißen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-3-beißen
**German:** er biss
**Field:** imperfektIndikativ
**Current EN:** he coded
**Recommended EN:** he bit
**Reason:** “Coded” is unrelated to the German verb; the correct past form is “bit”.

### 6. HIGH — `verb-3-beißen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-3-beißen
**German:** er bisse
**Field:** imperfektKonjunktiv
**Current EN:** he bites
**Recommended EN:** he would bite
**Reason:** Konjunktiv II requires a natural English conditional, not present simple “bites”.

### 7. HIGH — `verb-3-beißen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-3-beißen
**German:** gebissen
**Field:** partizipVergangenheit
**Current EN:** kosts / sakosts
**Recommended EN:** bitten
**Reason:** The English field contains Latvian participle forms instead of “bitten”.

### 8. HIGH — `verb-5-bersten` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-5-bersten
**German:** er bärste / er börste
**Field:** imperfektKonjunktiv
**Current EN:** he bursts
**Recommended EN:** he would burst
**Reason:** Konjunktiv II requires a conditional form, not present simple “bursts”.

### 9. HIGH — `verb-7-biegen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-7-biegen
**German:** er biegt
**Field:** praesens
**Current EN:** he bows
**Recommended EN:** he bends
**Reason:** “Bows” means bends forward or lowers the head, not the general verb biegen.

### 10. HIGH — `verb-9-binden` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-9-binden
**German:** binden
**Field:** infinitiv
**Current EN:** siet
**Recommended EN:** to tie
**Reason:** The English field contains the Latvian infinitive instead of an English translation.

### 11. HIGH — `verb-9-binden` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-9-binden
**German:** er bindet
**Field:** praesens
**Current EN:** he hay
**Recommended EN:** he ties
**Reason:** The field is not an English translation and does not express the German verb binden.

### 12. HIGH — `verb-9-binden` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-9-binden
**German:** er band
**Field:** imperfektIndikativ
**Current EN:** he sowed
**Recommended EN:** he tied
**Reason:** “Sowed” means planted seeds; the correct past form of bind is “tied”.

### 13. HIGH — `verb-9-binden` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-9-binden
**German:** er bände
**Field:** imperfektKonjunktiv
**Current EN:** he sieved
**Recommended EN:** he would tie
**Reason:** “Sieved” is unrelated to binden, and Konjunktiv II requires a conditional form.

### 14. HIGH — `verb-9-binden` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-9-binden
**German:** gebunden
**Field:** partizipVergangenheit
**Current EN:** siets
**Recommended EN:** tied
**Reason:** The English field contains the Latvian participle instead of the English participle “tied”.

### 15. HIGH — `verb-10-bitten` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-10-bitten
**German:** er bäte
**Field:** imperfektKonjunktiv
**Current EN:** he would pray
**Recommended EN:** he would ask
**Reason:** German bitten means ask or beg, not pray.

### 16. HIGH — `verb-12-gären` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-12-gären
**German:** es göre / es gärte
**Field:** imperfektKonjunktiv
**Current EN:** it would be bitter
**Recommended EN:** it would ferment
**Reason:** Gären means ferment, not be bitter.

### 17. HIGH — `verb-12-gären` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-12-gären
**German:** gegoren / gegärt
**Field:** partizipVergangenheit
**Current EN:** rye
**Recommended EN:** fermented
**Reason:** The German participle means fermented, not rye.

### 18. HIGH — `verb-13-gebären` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-13-gebären
**German:** sie gebiert
**Field:** praesens
**Current EN:** in her womb
**Recommended EN:** she gives birth
**Reason:** The current text is a noun phrase and does not translate the verb gebären.

### 19. HIGH — `verb-14-gelingen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-14-gelingen
**German:** gelingen
**Field:** infinitiv
**Current EN:** izdoties
**Recommended EN:** to succeed
**Reason:** The English field contains an untranslated Latvian form.

### 20. HIGH — `verb-14-gelingen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-14-gelingen
**German:** es gelingt
**Field:** praesens
**Current EN:** tas izdodas
**Recommended EN:** it succeeds
**Reason:** The English field contains an untranslated Latvian form.

### 21. HIGH — `verb-14-gelingen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-14-gelingen
**German:** es gelänge
**Field:** imperfektKonjunktiv
**Current EN:** tas izdotos
**Recommended EN:** it would succeed
**Reason:** The English field contains an untranslated Latvian form.

### 22. HIGH — `verb-14-gelingen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-14-gelingen
**German:** gelungen (es ist)
**Field:** partizipVergangenheit
**Current EN:** izdevies
**Recommended EN:** succeeded
**Reason:** The English field contains an untranslated Latvian form.

### 23. HIGH — `verb-15-gelten` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-15-gelten
**German:** gelten
**Field:** infinitiv
**Current EN:** come in handy
**Recommended EN:** to be valid
**Reason:** German gelten means be valid, apply or count, not come in handy.

### 24. HIGH — `verb-15-gelten` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-15-gelten
**German:** er gölte / es gälte
**Field:** imperfektKonjunktiv
**Current EN:** he would fit / it would fit
**Recommended EN:** he would be valid • it would be valid
**Reason:** The German subjunctive expresses validity, not physical fit.

### 25. HIGH — `verb-16-genesen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-16-genesen
**German:** genesen (er ist)
**Field:** partizipVergangenheit
**Current EN:** get well
**Recommended EN:** recovered
**Reason:** The English base form does not represent the German past participle.

### 26. HIGH — `verb-18-geschehen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-18-geschehen
**German:** geschehen
**Field:** infinitiv
**Current EN:** notikt
**Recommended EN:** to happen
**Reason:** The English field contains an untranslated Latvian form.

### 27. HIGH — `verb-18-geschehen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-18-geschehen
**German:** es geschieht
**Field:** praesens
**Current EN:** tas notiek
**Recommended EN:** it happens
**Reason:** The English field contains an untranslated Latvian form.

### 28. HIGH — `verb-18-geschehen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-18-geschehen
**German:** es geschah
**Field:** imperfektIndikativ
**Current EN:** tas notika
**Recommended EN:** it happened
**Reason:** The English field contains an untranslated Latvian form.

### 29. HIGH — `verb-18-geschehen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-18-geschehen
**German:** es geschähe
**Field:** imperfektKonjunktiv
**Current EN:** tas notiktu
**Recommended EN:** it would happen
**Reason:** The English field contains an untranslated Latvian form.

### 30. HIGH — `verb-18-geschehen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-18-geschehen
**German:** geschehen (es ist)
**Field:** partizipVergangenheit
**Current EN:** noticis
**Recommended EN:** happened
**Reason:** The English field contains an untranslated Latvian form.

### 31. HIGH — `verb-19-gießen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-19-gießen
**German:** gießen
**Field:** infinitiv
**Current EN:** liet
**Recommended EN:** to pour
**Reason:** The English field contains an untranslated Latvian form.

### 32. HIGH — `verb-19-gießen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-19-gießen
**German:** er gösse
**Field:** imperfektKonjunktiv
**Current EN:** he rains
**Recommended EN:** he would pour
**Reason:** Gießen means pour, not rain, and the German form is subjunctive.

### 33. HIGH — `verb-19-gießen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-19-gießen
**German:** gegossen
**Field:** partizipVergangenheit
**Current EN:** liets
**Recommended EN:** poured
**Reason:** The English field contains an untranslated Latvian form.

### 34. HIGH — `verb-22-glimmen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-22-glimmen
**German:** glimmen
**Field:** infinitiv
**Current EN:** glowing
**Recommended EN:** to glow
**Reason:** An English infinitive requires to plus the base verb.

### 35. HIGH — `verb-23-graben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-23-graben
**German:** graben
**Field:** infinitiv
**Current EN:** rakt
**Recommended EN:** to dig
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 36. HIGH — `verb-23-graben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-23-graben
**German:** gegraben
**Field:** partizipVergangenheit
**Current EN:** rakts
**Recommended EN:** dug
**Reason:** The English field contains the Latvian source instead of an English participle.

### 37. HIGH — `verb-25-hauen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-25-hauen
**German:** hauen
**Field:** infinitiv
**Current EN:** cirst
**Recommended EN:** to carve
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 38. HIGH — `verb-25-hauen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-25-hauen
**German:** er haut
**Field:** praesens
**Current EN:** he picked
**Recommended EN:** he carves
**Reason:** Picked is unrelated to the meaning of hauen in this context.

### 39. HIGH — `verb-25-hauen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-25-hauen
**German:** er hieb
**Field:** imperfektIndikativ
**Current EN:** he snapped
**Recommended EN:** he carved
**Reason:** Snapped does not express the cutting or carving action.

### 40. HIGH — `verb-25-hauen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-25-hauen
**German:** gehauen
**Field:** partizipVergangenheit
**Current EN:** cirsts
**Recommended EN:** carved
**Reason:** The English field contains the Latvian source instead of an English participle.

### 41. HIGH — `verb-26-heben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-26-heben
**German:** heben
**Field:** infinitiv
**Current EN:** celt
**Recommended EN:** to raise
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 42. HIGH — `verb-26-heben` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-26-heben
**German:** er hob
**Field:** imperfektIndikativ
**Current EN:** he brought
**Recommended EN:** he raised
**Reason:** Brought does not mean lifted or raised.

### 43. HIGH — `verb-26-heben` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-26-heben
**German:** er höbe
**Field:** imperfektKonjunktiv
**Current EN:** he would build
**Recommended EN:** he would raise
**Reason:** Build is unrelated; the conditional must express raising or lifting.

### 44. HIGH — `verb-26-heben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-26-heben
**German:** gehoben
**Field:** partizipVergangenheit
**Current EN:** celts
**Recommended EN:** raised
**Reason:** The English field contains the Latvian source instead of an English participle.

### 45. HIGH — `verb-27-kennen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-27-kennen
**German:** kannte
**Field:** imperfektIndikativ
**Current EN:** pazina
**Recommended EN:** he knew
**Reason:** The English field contains the Latvian source instead of an English past-tense form.

### 46. HIGH — `verb-27-kennen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-27-kennen
**German:** kannte
**Field:** imperfektKonjunktiv
**Current EN:** pazina
**Recommended EN:** he would know
**Reason:** The English field contains Latvian, and this Konjunktiv II slot requires a conditional form.

### 47. HIGH — `verb-27-kennen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-27-kennen
**German:** gekannt
**Field:** partizipVergangenheit
**Current EN:** pazinis
**Recommended EN:** known
**Reason:** The English field contains the Latvian source instead of an English participle.

### 48. HIGH — `verb-29-kneifen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-29-kneifen
**German:** kneifen
**Field:** infinitiv
**Current EN:** kniebt
**Recommended EN:** to pinch
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 49. HIGH — `verb-29-kneifen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-29-kneifen
**German:** er kneift
**Field:** praesens
**Current EN:** he quips
**Recommended EN:** he pinches
**Reason:** Quips means makes witty remarks, not pinches.

### 50. HIGH — `verb-29-kneifen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-29-kneifen
**German:** gekniffen
**Field:** partizipVergangenheit
**Current EN:** kniebts
**Recommended EN:** pinched
**Reason:** The English field contains the Latvian source instead of an English participle.

### 51. HIGH — `verb-30-bleiben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-30-bleiben
**German:** bleiben
**Field:** infinitiv
**Current EN:** palikt
**Recommended EN:** to stay
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 52. HIGH — `verb-30-bleiben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-30-bleiben
**German:** geblieben (er ist)
**Field:** partizipVergangenheit
**Current EN:** palicis
**Recommended EN:** stayed
**Reason:** The English field contains the Latvian participle instead of an English equivalent.

### 53. HIGH — `verb-31-bleichen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-31-bleichen
**German:** blich
**Field:** imperfektKonjunktiv
**Current EN:** bleached
**Recommended EN:** would bleach
**Reason:** German Konjunktiv II requires an English conditional, not a simple past form.

### 54. HIGH — `verb-32-braten` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-32-braten
**German:** braten
**Field:** infinitiv
**Current EN:** cept
**Recommended EN:** to fry
**Reason:** The English field contains the Latvian infinitive and does not express German braten.

### 55. HIGH — `verb-32-braten` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-32-braten
**German:** er brät
**Field:** praesens
**Current EN:** he bakes
**Recommended EN:** he fries
**Reason:** Braten means fry or roast, not bake.

### 56. HIGH — `verb-32-braten` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-32-braten
**German:** er briet
**Field:** imperfektIndikativ
**Current EN:** he was baking
**Recommended EN:** he fried
**Reason:** The German form is simple past and braten means fry or roast, not bake.

### 57. HIGH — `verb-32-braten` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-32-braten
**German:** er briete
**Field:** imperfektKonjunktiv
**Current EN:** he would bake
**Recommended EN:** he would fry
**Reason:** Braten means fry or roast, so the conditional must not use bake.

### 58. HIGH — `verb-32-braten` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-32-braten
**German:** gebraten
**Field:** partizipVergangenheit
**Current EN:** cepts / izcepts
**Recommended EN:** fried
**Reason:** The English field contains Latvian participles instead of an English participle.

### 59. HIGH — `verb-33-brechen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-33-brechen
**German:** brechen
**Field:** infinitiv
**Current EN:** lauzt
**Recommended EN:** to break
**Reason:** The English field contains the Latvian infinitive instead of English.

### 60. HIGH — `verb-33-brechen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-33-brechen
**German:** gebrochen
**Field:** partizipVergangenheit
**Current EN:** lauzts / salauzts
**Recommended EN:** broken
**Reason:** The English field contains Latvian participles instead of the English participle.

### 61. HIGH — `verb-34-brennen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-34-brennen
**German:** brennen
**Field:** infinitiv
**Current EN:** degt
**Recommended EN:** to burn
**Reason:** The English field contains the Latvian infinitive instead of English.

### 62. HIGH — `verb-34-brennen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-34-brennen
**German:** brannte
**Field:** imperfektIndikativ
**Current EN:** dega
**Recommended EN:** burnt
**Reason:** The English field contains the Latvian past form instead of English.

### 63. HIGH — `verb-34-brennen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-34-brennen
**German:** brannte
**Field:** imperfektKonjunktiv
**Current EN:** dega
**Recommended EN:** would burn
**Reason:** The English field contains Latvian and does not express the conditional meaning.

### 64. HIGH — `verb-34-brennen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-34-brennen
**German:** gebrannt
**Field:** partizipVergangenheit
**Current EN:** dedzis
**Recommended EN:** burnt
**Reason:** The English field contains the Latvian participle instead of an English participle.

### 65. HIGH — `verb-35-bringen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-35-bringen
**German:** bringen
**Field:** infinitiv
**Current EN:** nest
**Recommended EN:** to bring
**Reason:** The English field contains the Latvian infinitive instead of English.

### 66. HIGH — `verb-35-bringen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-35-bringen
**German:** er bringt
**Field:** praesens
**Current EN:** he carries
**Recommended EN:** he brings
**Reason:** Bringen means bring, not carry.

### 67. HIGH — `verb-35-bringen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-35-bringen
**German:** er brachte
**Field:** imperfektIndikativ
**Current EN:** he carried
**Recommended EN:** he brought
**Reason:** Bringen means bring, not carry.

### 68. HIGH — `verb-35-bringen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-35-bringen
**German:** er brächte
**Field:** imperfektKonjunktiv
**Current EN:** he would carry
**Recommended EN:** he would bring
**Reason:** Bringen means bring, not carry, in the conditional.

### 69. HIGH — `verb-35-bringen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-35-bringen
**German:** gebracht
**Field:** partizipVergangenheit
**Current EN:** nests / atnests
**Recommended EN:** brought
**Reason:** The English field contains Latvian participles instead of brought.

### 70. HIGH — `verb-38-dreschen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-38-dreschen
**German:** dreschen
**Field:** infinitiv
**Current EN:** kult
**Recommended EN:** to thresh
**Reason:** The English field contains the Latvian infinitive instead of English.

### 71. HIGH — `verb-38-dreschen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-38-dreschen
**German:** er dräsche / er drösche
**Field:** imperfektKonjunktiv
**Current EN:** he would worship
**Recommended EN:** he would thresh
**Reason:** Dreschen means thresh, not worship.

### 72. HIGH — `verb-38-dreschen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-38-dreschen
**German:** gedroschen
**Field:** partizipVergangenheit
**Current EN:** kults
**Recommended EN:** threshed
**Reason:** The English field contains the Latvian participle instead of English.

### 73. HIGH — `verb-39-dringen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-39-dringen
**German:** dringen
**Field:** infinitiv
**Current EN:** ielauzties
**Recommended EN:** to break in
**Reason:** The English field contains the Latvian infinitive instead of English.

### 74. HIGH — `verb-39-dringen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-39-dringen
**German:** gedrungen (er ist)
**Field:** partizipVergangenheit
**Current EN:** ielauzies
**Recommended EN:** broken in
**Reason:** The English field contains the Latvian participle instead of English.

### 75. HIGH — `verb-40-dünken` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-40-dünken
**German:** dünken
**Field:** infinitiv
**Current EN:** it seems
**Recommended EN:** to seem
**Reason:** The English form is finite, but the German form is an infinitive.

### 76. HIGH — `verb-40-dünken` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-40-dünken
**German:** deuchte
**Field:** imperfektKonjunktiv
**Current EN:** it seemed
**Recommended EN:** it would seem
**Reason:** Konjunktiv II requires a conditional meaning, not the indicative past.

### 77. HIGH — `verb-41-dürfen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-41-dürfen
**German:** durfte
**Field:** imperfektKonjunktiv
**Current EN:** was allowed
**Recommended EN:** would be allowed
**Reason:** Konjunktiv II requires a conditional meaning, not the indicative past.

### 78. HIGH — `verb-42-empfehlen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-42-empfehlen
**German:** empfehlen
**Field:** infinitiv
**Current EN:** ieteikt
**Recommended EN:** to recommend
**Reason:** The English field contains Latvian text rather than an English infinitive.

### 79. HIGH — `verb-42-empfehlen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-42-empfehlen
**German:** empfohlen
**Field:** partizipVergangenheit
**Current EN:** ieteikts
**Recommended EN:** recommended
**Reason:** The English field contains Latvian text rather than an English participle.

### 80. HIGH — `verb-43-empfinden` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-43-empfinden
**German:** empfinden
**Field:** infinitiv
**Current EN:** sajust
**Recommended EN:** to feel
**Reason:** The English field contains Latvian text rather than an English infinitive.

### 81. HIGH — `verb-43-empfinden` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-43-empfinden
**German:** empfunden
**Field:** partizipVergangenheit
**Current EN:** sajusts
**Recommended EN:** felt
**Reason:** The English field contains Latvian text rather than an English participle.

### 82. HIGH — `verb-44-erlöschen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-44-erlöschen
**German:** erlöschen
**Field:** infinitiv
**Current EN:** izdzist
**Recommended EN:** to go out
**Reason:** The English field contains Latvian text rather than an English infinitive.

### 83. HIGH — `verb-44-erlöschen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-44-erlöschen
**German:** erloschen (er ist)
**Field:** partizipVergangenheit
**Current EN:** izdzisis
**Recommended EN:** gone out
**Reason:** The English field contains Latvian text rather than an English participle.

### 84. HIGH — `verb-45-erschrecken` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-45-erschrecken
**German:** erschrecken
**Field:** infinitiv
**Current EN:** get confused
**Recommended EN:** to get frightened
**Reason:** Erschrecken means become frightened, not become confused.

### 85. HIGH — `verb-45-erschrecken` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-45-erschrecken
**German:** erschrocken (er ist)
**Field:** partizipVergangenheit
**Current EN:** sabijies
**Recommended EN:** frightened
**Reason:** The English field contains Latvian text rather than an English participle.

### 86. HIGH — `verb-47-fahren` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-47-fahren
**German:** fahren
**Field:** infinitiv
**Current EN:** braukt
**Recommended EN:** to drive
**Reason:** The English field contains Latvian text rather than an English infinitive.

### 87. HIGH — `verb-47-fahren` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-47-fahren
**German:** gefahren (er ist)
**Field:** partizipVergangenheit
**Current EN:** braucis / aizbraucis
**Recommended EN:** driven
**Reason:** The English field contains Latvian text rather than an English participle.

### 88. HIGH — `verb-48-fallen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-48-fallen
**German:** fallen
**Field:** infinitiv
**Current EN:** krist
**Recommended EN:** to fall
**Reason:** The English field contains Latvian text rather than an English infinitive.

### 89. HIGH — `verb-48-fallen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-48-fallen
**German:** gefallen (er ist)
**Field:** partizipVergangenheit
**Current EN:** kritis
**Recommended EN:** fallen
**Reason:** The English field contains Latvian text rather than an English participle.

### 90. HIGH — `verb-50-finden` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-50-finden
**German:** finden
**Field:** infinitiv
**Current EN:** atrast
**Recommended EN:** to find
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 91. HIGH — `verb-50-finden` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-50-finden
**German:** gefunden
**Field:** partizipVergangenheit
**Current EN:** atrasts
**Recommended EN:** found
**Reason:** The English field contains the Latvian participle instead of an English equivalent.

### 92. HIGH — `verb-51-fliegen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-51-fliegen
**German:** fliegen
**Field:** infinitiv
**Current EN:** laisties
**Recommended EN:** to fly
**Reason:** The English field contains a Latvian form instead of the English infinitive.

### 93. HIGH — `verb-51-fliegen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-51-fliegen
**German:** geflogen (er ist)
**Field:** partizipVergangenheit
**Current EN:** lidojis
**Recommended EN:** flown
**Reason:** The English field contains the Latvian participle instead of an English equivalent.

### 94. HIGH — `verb-52-fliehen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-52-fliehen
**German:** geflohen (er ist)
**Field:** partizipVergangenheit
**Current EN:** ran away
**Recommended EN:** fled
**Reason:** The current form is a simple past form, not the required English past participle.

### 95. HIGH — `verb-53-fließen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-53-fließen
**German:** er fließt
**Field:** praesens
**Current EN:** he runs
**Recommended EN:** he flows
**Reason:** Fließen means flow, not run, when describing liquid or a current.

### 96. HIGH — `verb-53-fließen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-53-fließen
**German:** er floss
**Field:** imperfektIndikativ
**Current EN:** he ran
**Recommended EN:** he flowed
**Reason:** The German verb means flowed, not ran.

### 97. HIGH — `verb-53-fließen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-53-fließen
**German:** er flösse
**Field:** imperfektKonjunktiv
**Current EN:** he would run
**Recommended EN:** he would flow
**Reason:** The conditional must express flow rather than run.

### 98. HIGH — `verb-53-fließen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-53-fließen
**German:** geflossen (er ist)
**Field:** partizipVergangenheit
**Current EN:** passed
**Recommended EN:** flowed
**Reason:** The participle means flowed, not passed.

### 99. HIGH — `verb-54-fressen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-54-fressen
**German:** fressen
**Field:** infinitiv
**Current EN:** eat tomorrow
**Recommended EN:** to eat
**Reason:** Tomorrow is an unrelated time expression and the field is not an English infinitive.

### 100. HIGH — `verb-54-fressen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-54-fressen
**German:** gefressen
**Field:** partizipVergangenheit
**Current EN:** eaten / morning
**Recommended EN:** eaten / devoured
**Reason:** Morning is unrelated and does not translate the past participle of fressen.

### 101. HIGH — `verb-55-frieren` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-55-frieren
**German:** frieren
**Field:** infinitiv
**Current EN:** salt
**Recommended EN:** to freeze
**Reason:** The English field contains an unrelated word instead of the English infinitive.

### 102. HIGH — `verb-55-frieren` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-55-frieren
**German:** er fror
**Field:** imperfektIndikativ
**Current EN:** he island
**Recommended EN:** he froze
**Reason:** Island is an unrelated noun and does not translate the German past tense.

### 103. HIGH — `verb-55-frieren` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-55-frieren
**German:** er fröre
**Field:** imperfektKonjunktiv
**Current EN:** he was freezing
**Recommended EN:** he would freeze
**Reason:** Konjunktiv II requires a natural English conditional, not a simple past form.

### 104. HIGH — `verb-55-frieren` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-55-frieren
**German:** gefroren
**Field:** partizipVergangenheit
**Current EN:** salis
**Recommended EN:** frozen
**Reason:** The English field contains the Latvian participle instead of an English equivalent.

### 105. HIGH — `verb-56-geben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-56-geben
**German:** geben
**Field:** infinitiv
**Current EN:** dot
**Recommended EN:** to give
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 106. HIGH — `verb-56-geben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-56-geben
**German:** gegeben
**Field:** partizipVergangenheit
**Current EN:** dots
**Recommended EN:** given
**Reason:** The English field contains the Latvian participle instead of an English equivalent.

### 107. HIGH — `verb-57-gedeihen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-57-gedeihen
**German:** gedeihen
**Field:** infinitiv
**Current EN:** izdoties
**Recommended EN:** to thrive
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 108. HIGH — `verb-57-gedeihen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-57-gedeihen
**German:** gediehen (er ist)
**Field:** partizipVergangenheit
**Current EN:** izdevies
**Recommended EN:** thrived
**Reason:** The English field contains the Latvian participle instead of an English equivalent.

### 109. HIGH — `verb-58-gehen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-58-gehen
**German:** gehen
**Field:** infinitiv
**Current EN:** iet
**Recommended EN:** to go
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 110. HIGH — `verb-58-gehen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-58-gehen
**German:** gegangen (er ist)
**Field:** partizipVergangenheit
**Current EN:** went
**Recommended EN:** gone
**Reason:** Went is a simple past form, not the required English past participle.

### 111. HIGH — `verb-60-haben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-60-haben
**German:** haben
**Field:** infinitiv
**Current EN:** to be / to belong
**Recommended EN:** to have
**Reason:** The English meaning does not match German haben.

### 112. HIGH — `verb-60-haben` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-60-haben
**German:** hatte
**Field:** imperfektKonjunktiv
**Current EN:** bija
**Recommended EN:** would have
**Reason:** Latvian text remains in English; this slot requires a conditional form.

### 113. HIGH — `verb-60-haben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-60-haben
**German:** gehabt
**Field:** partizipVergangenheit
**Current EN:** bijis
**Recommended EN:** had
**Reason:** Latvian text remains in the English field.

### 114. HIGH — `verb-61-halten` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-61-halten
**German:** er hält
**Field:** praesens
**Current EN:** he there
**Recommended EN:** he holds
**Reason:** The current text is ungrammatical and omits the verb meaning.

### 115. HIGH — `verb-62-heißen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-62-heißen
**German:** heißen
**Field:** infinitiv
**Current EN:** saukt
**Recommended EN:** to call • to be called
**Reason:** Latvian text remains in the English field.

### 116. HIGH — `verb-62-heißen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-62-heißen
**German:** geheißen
**Field:** partizipVergangenheit
**Current EN:** saukts
**Recommended EN:** called
**Reason:** Latvian text remains in the English field.

### 117. HIGH — `verb-65-können` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-65-können
**German:** gekonnt
**Field:** partizipVergangenheit
**Current EN:** could
**Recommended EN:** been able to
**Reason:** Could is not the English past participle corresponding to gekonnt.

### 118. HIGH — `verb-66-kriechen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-66-kriechen
**German:** kriechen
**Field:** infinitiv
**Current EN:** it's raining
**Recommended EN:** to crawl
**Reason:** The English meaning describes rain, not crawling.

### 119. HIGH — `verb-66-kriechen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-66-kriechen
**German:** er kriecht
**Field:** praesens
**Current EN:** he leans
**Recommended EN:** he crawls
**Reason:** Leans does not mean crawls.

### 120. HIGH — `verb-66-kriechen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-66-kriechen
**German:** er kroch
**Field:** imperfektIndikativ
**Current EN:** he rained
**Recommended EN:** he crawled
**Reason:** The current verb describes rain instead of crawling.

### 121. HIGH — `verb-66-kriechen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-66-kriechen
**German:** er kröche
**Field:** imperfektKonjunktiv
**Current EN:** he is raining
**Recommended EN:** he would crawl
**Reason:** The current text has the wrong verb and lacks the conditional meaning.

### 122. HIGH — `verb-66-kriechen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-66-kriechen
**German:** gekrochen (er ist)
**Field:** partizipVergangenheit
**Current EN:** passed away
**Recommended EN:** has crawled
**Reason:** Passed away is unrelated to the German participle gekrochen.

### 123. HIGH — `verb-69-laufen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-69-laufen
**German:** laufen
**Field:** infinitiv
**Current EN:** skriet
**Recommended EN:** to run
**Reason:** Latvian text remains in the English field.

### 124. HIGH — `verb-70-leiden` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-70-leiden
**German:** leiden
**Field:** infinitiv
**Current EN:** ciest
**Recommended EN:** to suffer
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 125. HIGH — `verb-70-leiden` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-70-leiden
**German:** gelitten
**Field:** partizipVergangenheit
**Current EN:** ciests
**Recommended EN:** suffered
**Reason:** The English field contains the Latvian source instead of the English past participle.

### 126. HIGH — `verb-73-liegen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-73-liegen
**German:** liegen
**Field:** infinitiv
**Current EN:** to sleep
**Recommended EN:** to lie
**Reason:** liegen means to lie or be situated, not to sleep.

### 127. HIGH — `verb-73-liegen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-73-liegen
**German:** er liegt
**Field:** praesens
**Current EN:** he is sleeping
**Recommended EN:** he lies
**Reason:** The German verb describes lying or being situated, not sleeping.

### 128. HIGH — `verb-73-liegen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-73-liegen
**German:** er lag
**Field:** imperfektIndikativ
**Current EN:** he was sleeping
**Recommended EN:** he lay
**Reason:** The German imperfect is the past of lie, not a sleep expression.

### 129. HIGH — `verb-73-liegen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-73-liegen
**German:** er läge
**Field:** imperfektKonjunktiv
**Current EN:** he would sleep
**Recommended EN:** he would lie
**Reason:** The conditional expresses lying or being situated, not sleeping.

### 130. HIGH — `verb-73-liegen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-73-liegen
**German:** gelegen
**Field:** partizipVergangenheit
**Current EN:** slept
**Recommended EN:** lain
**Reason:** gelegen is the past participle of lie, not sleep.

### 131. HIGH — `verb-74-lügen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-74-lügen
**German:** lügen
**Field:** infinitiv
**Current EN:** melot
**Recommended EN:** to lie
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 132. HIGH — `verb-74-lügen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-74-lügen
**German:** gelogen
**Field:** partizipVergangenheit
**Current EN:** melots
**Recommended EN:** lied
**Reason:** The English field contains the Latvian source instead of the English past participle.

### 133. HIGH — `verb-75-mahlen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-75-mahlen
**German:** mahlen
**Field:** infinitiv
**Current EN:** malt
**Recommended EN:** to grind
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 134. HIGH — `verb-75-mahlen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-75-mahlen
**German:** er mahlte
**Field:** imperfektIndikativ
**Current EN:** he edge
**Recommended EN:** he ground
**Reason:** The current text is not a valid translation of mahlen.

### 135. HIGH — `verb-75-mahlen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-75-mahlen
**German:** er malte
**Field:** imperfektKonjunktiv
**Current EN:** he grinds
**Recommended EN:** he would grind
**Reason:** Konjunktiv II requires a conditional English form, not a present-tense statement.

### 136. HIGH — `verb-75-mahlen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-75-mahlen
**German:** gemahlen
**Field:** partizipVergangenheit
**Current EN:** malts
**Recommended EN:** ground
**Reason:** The English field contains the Latvian source instead of the English past participle.

### 137. HIGH — `verb-77-melken` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-77-melken
**German:** melken
**Field:** infinitiv
**Current EN:** slaukt
**Recommended EN:** to milk
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 138. HIGH — `verb-77-melken` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-77-melken
**German:** er milkt / er melkt
**Field:** praesens
**Current EN:** he sweeps
**Recommended EN:** he milks
**Reason:** Melken means to milk, not to sweep.

### 139. HIGH — `verb-77-melken` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-77-melken
**German:** er molk / er melkte
**Field:** imperfektIndikativ
**Current EN:** he swept
**Recommended EN:** he milked
**Reason:** The German forms are past forms of milk, not sweep.

### 140. HIGH — `verb-77-melken` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-77-melken
**German:** gemolken / gemelkt
**Field:** partizipVergangenheit
**Current EN:** slaukts
**Recommended EN:** milked
**Reason:** The English field contains the Latvian source instead of the English past participle.

### 141. HIGH — `verb-79-misslingen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-79-misslingen
**German:** misslingen
**Field:** infinitiv
**Current EN:** neizdoties
**Recommended EN:** to fail
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 142. HIGH — `verb-79-misslingen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-79-misslingen
**German:** es misslingt
**Field:** praesens
**Current EN:** tas neizdodas
**Recommended EN:** it fails
**Reason:** The English field contains the Latvian source instead of an English present-tense form.

### 143. HIGH — `verb-79-misslingen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-79-misslingen
**German:** misslungen
**Field:** partizipVergangenheit
**Current EN:** neizdevies
**Recommended EN:** failed
**Reason:** The English field contains the Latvian source instead of the English past participle.

### 144. HIGH — `verb-80-mögen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-80-mögen
**German:** mögen
**Field:** infinitiv
**Current EN:** patikt
**Recommended EN:** to like
**Reason:** The English field contains Latvian rather than an English infinitive.

### 145. HIGH — `verb-80-mögen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-80-mögen
**German:** mochte
**Field:** imperfektIndikativ
**Current EN:** patika
**Recommended EN:** liked
**Reason:** The English field contains Latvian rather than the English past-tense form.

### 146. HIGH — `verb-80-mögen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-80-mögen
**German:** mochte
**Field:** imperfektKonjunktiv
**Current EN:** patika
**Recommended EN:** would like
**Reason:** Konjunktiv II requires a natural English conditional, not Latvian text.

### 147. HIGH — `verb-80-mögen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-80-mögen
**German:** gemocht
**Field:** partizipVergangenheit
**Current EN:** paticis
**Recommended EN:** liked
**Reason:** The English field contains Latvian rather than an English participle.

### 148. HIGH — `verb-81-müssen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-81-müssen
**German:** musste
**Field:** imperfektIndikativ
**Current EN:** should have
**Recommended EN:** needed
**Reason:** The indicative past means needed or had to, not should have.

### 149. HIGH — `verb-81-müssen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-81-müssen
**German:** musste
**Field:** imperfektKonjunktiv
**Current EN:** should have
**Recommended EN:** would have to
**Reason:** Konjunktiv II expresses a conditional obligation: would have to.

### 150. HIGH — `verb-83-nennen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-83-nennen
**German:** nennen
**Field:** infinitiv
**Current EN:** nosaukt
**Recommended EN:** to name
**Reason:** The English field contains Latvian rather than an English infinitive.

### 151. HIGH — `verb-83-nennen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-83-nennen
**German:** er nennt
**Field:** praesens
**Current EN:** he named
**Recommended EN:** he names
**Reason:** The German form is present tense, but the current English is past tense.

### 152. HIGH — `verb-84-pfeifen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-84-pfeifen
**German:** pfeifen
**Field:** infinitiv
**Current EN:** svilpot
**Recommended EN:** to whistle
**Reason:** The English field contains Latvian rather than an English infinitive.

### 153. HIGH — `verb-85-pflegen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-85-pflegen
**German:** pflegen
**Field:** infinitiv
**Current EN:** kopt
**Recommended EN:** to care for
**Reason:** The English field contains Latvian rather than an English infinitive.

### 154. HIGH — `verb-85-pflegen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-85-pflegen
**German:** pflegte vai pflog
**Field:** imperfektIndikativ
**Current EN:** kopa
**Recommended EN:** cared for
**Reason:** The English field contains Latvian rather than an English past-tense form.

### 155. HIGH — `verb-85-pflegen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-85-pflegen
**German:** pflegte vai pflog
**Field:** imperfektKonjunktiv
**Current EN:** kopa
**Recommended EN:** would care for
**Reason:** The English field contains Latvian and does not express the conditional form.

### 156. HIGH — `verb-85-pflegen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-85-pflegen
**German:** gepflegt vai gepflogen
**Field:** partizipVergangenheit
**Current EN:** kopts
**Recommended EN:** cared for
**Reason:** The English field contains Latvian rather than an English participle.

### 157. HIGH — `verb-87-quellen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-87-quellen
**German:** quellen
**Field:** infinitiv
**Current EN:** briest
**Recommended EN:** to swell
**Reason:** The English field contains Latvian rather than an English infinitive.

### 158. HIGH — `verb-87-quellen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-87-quellen
**German:** er quillt
**Field:** praesens
**Current EN:** he is getting fat
**Recommended EN:** he swells
**Reason:** Quellen means swell or well up, not become fat.

### 159. HIGH — `verb-87-quellen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-87-quellen
**German:** er quoll
**Field:** imperfektIndikativ
**Current EN:** he matured
**Recommended EN:** he swelled
**Reason:** The German past form means swelled or welled up, not matured.

### 160. HIGH — `verb-87-quellen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-87-quellen
**German:** er quölle
**Field:** imperfektKonjunktiv
**Current EN:** he fat
**Recommended EN:** he would swell
**Reason:** The current text is ungrammatical and does not express the German conditional meaning.

### 161. HIGH — `verb-87-quellen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-87-quellen
**German:** gequollen (er ist)
**Field:** partizipVergangenheit
**Current EN:** uzbriedis
**Recommended EN:** swollen
**Reason:** The English field contains Latvian rather than the English participle.

### 162. HIGH — `verb-88-raten` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-88-raten
**German:** raten
**Field:** infinitiv
**Current EN:** suggest / mention
**Recommended EN:** to advise • to guess
**Reason:** Raten means advise or guess, while mention is the wrong second sense.

### 163. HIGH — `verb-88-raten` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-88-raten
**German:** er rät
**Field:** praesens
**Current EN:** he recommends / min
**Recommended EN:** he advises • he guesses
**Reason:** The second variant is not English, and recommends is less exact than advises here.

### 164. HIGH — `verb-88-raten` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-88-raten
**German:** er riet
**Field:** imperfektIndikativ
**Current EN:** he suggested / suggested
**Recommended EN:** he advised • he guessed
**Reason:** The two German senses are advise and guess, but both current variants say suggested.

### 165. HIGH — `verb-88-raten` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-88-raten
**German:** er riete
**Field:** imperfektKonjunktiv
**Current EN:** he would suggest / mention
**Recommended EN:** he would advise • he would guess
**Reason:** Konjunktiv II requires conditional forms for the senses advise and guess.

### 166. HIGH — `verb-88-raten` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-88-raten
**German:** geraten
**Field:** partizipVergangenheit
**Current EN:** suggested / mentioned
**Recommended EN:** advised • guessed
**Reason:** The participle reflects advise or guess, not mention.

### 167. HIGH — `verb-89-reiben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-89-reiben
**German:** reiben
**Field:** infinitiv
**Current EN:** berzt
**Recommended EN:** to rub
**Reason:** The English field contains Latvian rather than an English infinitive.

### 168. HIGH — `verb-89-reiben` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-89-reiben
**German:** er rieb
**Field:** imperfektIndikativ
**Current EN:** he rubs
**Recommended EN:** he rubbed
**Reason:** The German form is indicative past, but the current English is present tense.

### 169. HIGH — `verb-89-reiben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-89-reiben
**German:** gerieben
**Field:** partizipVergangenheit
**Current EN:** berzts
**Recommended EN:** rubbed
**Reason:** The English field contains Latvian rather than an English participle.

### 170. HIGH — `verb-90-reißen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-90-reißen
**German:** reißen
**Field:** infinitiv
**Current EN:** raut
**Recommended EN:** to tear
**Reason:** The English field contains Latvian rather than an English infinitive.

### 171. HIGH — `verb-90-reißen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-90-reißen
**German:** er risse
**Field:** imperfektKonjunktiv
**Current EN:** he snapped
**Recommended EN:** he would tear
**Reason:** Konjunktiv II requires a conditional form, not the simple past.

### 172. HIGH — `verb-90-reißen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-90-reißen
**German:** gerissen
**Field:** partizipVergangenheit
**Current EN:** rauts
**Recommended EN:** torn
**Reason:** The field is Latvian and does not give the English participle.

### 173. HIGH — `verb-91-reiten` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-91-reiten
**German:** geritten (er ist)
**Field:** partizipVergangenheit
**Current EN:** rode
**Recommended EN:** ridden
**Reason:** The German form is a past participle, not the simple past “rode”.

### 174. HIGH — `verb-92-rennen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-92-rennen
**German:** rennen
**Field:** infinitiv
**Current EN:** skriet
**Recommended EN:** to run
**Reason:** The English field contains Latvian rather than an English infinitive.

### 175. HIGH — `verb-92-rennen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-92-rennen
**German:** gerannt
**Field:** partizipVergangenheit
**Current EN:** ran
**Recommended EN:** run
**Reason:** “Ran” is the simple past, whereas the English participle is “run”.

### 176. HIGH — `verb-93-riechen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-93-riechen
**German:** riechen
**Field:** infinitiv
**Current EN:** ost
**Recommended EN:** to smell
**Reason:** The English field contains Latvian rather than an English infinitive.

### 177. HIGH — `verb-93-riechen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-93-riechen
**German:** er roch
**Field:** imperfektIndikativ
**Current EN:** he sings
**Recommended EN:** he smelled
**Reason:** “He sings” is unrelated to the German verb “roch”.

### 178. HIGH — `verb-93-riechen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-93-riechen
**German:** er röche
**Field:** imperfektKonjunktiv
**Current EN:** he port
**Recommended EN:** he would smell
**Reason:** “Port” is incorrect and does not express the conditional meaning of “röche”.

### 179. HIGH — `verb-93-riechen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-93-riechen
**German:** gerochen
**Field:** partizipVergangenheit
**Current EN:** osts
**Recommended EN:** smelled
**Reason:** The English field contains Latvian rather than the English participle.

### 180. HIGH — `verb-94-ringen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-94-ringen
**German:** ringen
**Field:** infinitiv
**Current EN:** lauzties
**Recommended EN:** to wrestle
**Reason:** The English field contains Latvian rather than an English infinitive.

### 181. HIGH — `verb-94-ringen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-94-ringen
**German:** er ringt
**Field:** praesens
**Current EN:** he breaks
**Recommended EN:** he wrestles
**Reason:** “He breaks” does not translate the German verb “ringen”.

### 182. HIGH — `verb-94-ringen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-94-ringen
**German:** er rang
**Field:** imperfektIndikativ
**Current EN:** he broke down
**Recommended EN:** he wrestled
**Reason:** “Broke down” is unrelated to the primary meaning “wrestled”.

### 183. HIGH — `verb-94-ringen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-94-ringen
**German:** er ränge
**Field:** imperfektKonjunktiv
**Current EN:** he would break
**Recommended EN:** he would wrestle
**Reason:** The proposed meaning is wrong for “ringen”, despite having a conditional form.

### 184. HIGH — `verb-94-ringen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-94-ringen
**German:** gerungen
**Field:** partizipVergangenheit
**Current EN:** laucies
**Recommended EN:** wrestled
**Reason:** The English field contains Latvian rather than the English participle.

### 185. HIGH — `verb-95-rinnen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-95-rinnen
**German:** er rinnt
**Field:** praesens
**Current EN:** he runs
**Recommended EN:** he flows
**Reason:** “Rinnen” means “flow” or “trickle”, not “run” in this form.

### 186. HIGH — `verb-95-rinnen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-95-rinnen
**German:** er rann
**Field:** imperfektIndikativ
**Current EN:** he ran
**Recommended EN:** he flowed
**Reason:** The German past form means “flowed”, not the unrelated past form “ran”.

### 187. HIGH — `verb-95-rinnen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-95-rinnen
**German:** er ränne / er rönne
**Field:** imperfektKonjunktiv
**Current EN:** he would run
**Recommended EN:** he would flow
**Reason:** The conditional meaning is retained, but “run” is the wrong verb here.

### 188. HIGH — `verb-96-rufen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-96-rufen
**German:** rufen
**Field:** infinitiv
**Current EN:** saukt
**Recommended EN:** to call
**Reason:** The English field contains Latvian rather than an English infinitive.

### 189. HIGH — `verb-96-rufen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-96-rufen
**German:** gerufen
**Field:** partizipVergangenheit
**Current EN:** saukts
**Recommended EN:** called
**Reason:** The English field contains Latvian rather than the English participle.

### 190. HIGH — `verb-97-salzen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-97-salzen
**German:** er salzt
**Field:** praesens
**Current EN:** he salted
**Recommended EN:** he salts
**Reason:** The German form is present tense, but “salted” is past tense.

### 191. HIGH — `verb-98-saufen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-98-saufen
**German:** saufen
**Field:** infinitiv
**Current EN:** dry / drink
**Recommended EN:** to drink heavily
**Reason:** “Dry” is incorrect, and the infinitive lacks a natural rendering of the excessive drinking sense.

### 192. HIGH — `verb-98-saufen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-98-saufen
**German:** er söffe
**Field:** imperfektKonjunktiv
**Current EN:** he would drink / drink
**Recommended EN:** he would drink heavily
**Reason:** The second variant is not conditional, and the excessive-drinking sense is omitted.

### 193. HIGH — `verb-98-saufen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-98-saufen
**German:** gesoffen
**Field:** partizipVergangenheit
**Current EN:** dzerts
**Recommended EN:** drunk
**Reason:** The English field contains Latvian rather than the English participle.

### 194. HIGH — `verb-101-schallen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-101-schallen
**German:** es schallt
**Field:** praesens
**Current EN:** tas skan
**Recommended EN:** it sounds
**Reason:** The English field contains Latvian text instead of an English translation.

### 195. HIGH — `verb-101-schallen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-101-schallen
**German:** schallte vai scholl
**Field:** imperfektKonjunktiv
**Current EN:** sounded
**Recommended EN:** would sound
**Reason:** Konjunktiv II requires a conditional English rendering, not the indicative past.

### 196. HIGH — `verb-102-scheiden` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-102-scheiden
**German:** er schiede
**Field:** imperfektKonjunktiv
**Current EN:** he would divorce / divorce
**Recommended EN:** he would divorce / would separate
**Reason:** The second alternative lacks would, so it is not a complete conditional rendering.

### 197. HIGH — `verb-104-schelten` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-104-schelten
**German:** schelten
**Field:** infinitiv
**Current EN:** bart
**Recommended EN:** to scold
**Reason:** The field contains a non-English remnant and lacks the correct English infinitive.

### 198. HIGH — `verb-104-schelten` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-104-schelten
**German:** er schalt
**Field:** imperfektIndikativ
**Current EN:** he barred
**Recommended EN:** he scolded
**Reason:** Barred is the wrong verb. The German form means scolded.

### 199. HIGH — `verb-104-schelten` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-104-schelten
**German:** er schölte / er schälte
**Field:** imperfektKonjunktiv
**Current EN:** he shaves
**Recommended EN:** he would scold
**Reason:** Shaves has the wrong meaning and does not express Konjunktiv II.

### 200. HIGH — `verb-104-schelten` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-104-schelten
**German:** gescholten
**Field:** partizipVergangenheit
**Current EN:** beard
**Recommended EN:** scolded
**Reason:** Beard is a noun and does not translate the German participle meaning scolded.

### 201. HIGH — `verb-105-scheren` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-105-scheren
**German:** scheren
**Field:** infinitiv
**Current EN:** cirpt
**Recommended EN:** to shear
**Reason:** The field contains Latvian text instead of an English infinitive.

### 202. HIGH — `verb-105-scheren` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-105-scheren
**German:** er schert
**Field:** praesens
**Current EN:** he is cutting
**Recommended EN:** he shears
**Reason:** Cutting is too general and the progressive form does not match the German simple present form.

### 203. HIGH — `verb-105-scheren` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-105-scheren
**German:** schor vai scherte
**Field:** imperfektIndikativ
**Current EN:** cirpa
**Recommended EN:** he sheared
**Reason:** The field contains Latvian text instead of an English past-tense translation.

### 204. HIGH — `verb-105-scheren` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-105-scheren
**German:** schor vai scherte
**Field:** imperfektKonjunktiv
**Current EN:** cirpa
**Recommended EN:** he would shear
**Reason:** The field contains Latvian text and does not express the conditional meaning.

### 205. HIGH — `verb-105-scheren` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-105-scheren
**German:** geschoren vai geschert
**Field:** partizipVergangenheit
**Current EN:** apcirpts
**Recommended EN:** shorn / sheared
**Reason:** The field contains Latvian text instead of English participle variants.

### 206. HIGH — `verb-106-schieben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-106-schieben
**German:** schieben
**Field:** infinitiv
**Current EN:** stumt
**Recommended EN:** to push
**Reason:** The field contains Latvian text instead of an English infinitive.

### 207. HIGH — `verb-106-schieben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-106-schieben
**German:** geschoben
**Field:** partizipVergangenheit
**Current EN:** stumts
**Recommended EN:** pushed
**Reason:** The field contains Latvian text instead of the English past participle.

### 208. HIGH — `verb-108-schinden` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-108-schinden
**German:** schindete
**Field:** imperfektKonjunktiv
**Current EN:** tormented
**Recommended EN:** would torment
**Reason:** Konjunktiv II requires a conditional English rendering, not a simple past form.

### 209. HIGH — `verb-110-schlagen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-110-schlagen
**German:** geschlagen
**Field:** partizipVergangenheit
**Current EN:** sists
**Recommended EN:** hit
**Reason:** The English field contains a Latvian remnant. The past participle of hit is hit.

### 210. HIGH — `verb-111-schleichen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-111-schleichen
**German:** schleichen
**Field:** infinitiv
**Current EN:** it's raining
**Recommended EN:** to creep
**Reason:** Schleichen means to creep or sneak, not to rain.

### 211. HIGH — `verb-111-schleichen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-111-schleichen
**German:** er schleicht
**Field:** praesens
**Current EN:** he leans
**Recommended EN:** he creeps
**Reason:** Schleichen means creep, not lean.

### 212. HIGH — `verb-111-schleichen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-111-schleichen
**German:** er schlich
**Field:** imperfektIndikativ
**Current EN:** he rained
**Recommended EN:** he crept
**Reason:** The German past form means he crept, not he rained.

### 213. HIGH — `verb-111-schleichen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-111-schleichen
**German:** er schliche
**Field:** imperfektKonjunktiv
**Current EN:** he is raining
**Recommended EN:** he would creep
**Reason:** Konjunktiv II requires a conditional form meaning he would creep.

### 214. HIGH — `verb-111-schleichen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-111-schleichen
**German:** geschlichen (er ist)
**Field:** partizipVergangenheit
**Current EN:** passed away
**Recommended EN:** crept
**Reason:** The participle means crept, not passed away.

### 215. HIGH — `verb-114-schlingen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-114-schlingen
**German:** schlingen
**Field:** infinitiv
**Current EN:** tomorrow
**Recommended EN:** to swallow
**Reason:** Schlingen means to swallow or gulp, not tomorrow.

### 216. HIGH — `verb-114-schlingen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-114-schlingen
**German:** er schlänge
**Field:** imperfektKonjunktiv
**Current EN:** he morning
**Recommended EN:** he would swallow
**Reason:** The German Konjunktiv II means he would swallow.

### 217. HIGH — `verb-114-schlingen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-114-schlingen
**German:** geschlungen
**Field:** partizipVergangenheit
**Current EN:** the morning
**Recommended EN:** swallowed
**Reason:** The German participle means swallowed, not the morning.

### 218. HIGH — `verb-115-schmeißen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-115-schmeißen
**German:** schmeißen
**Field:** infinitiv
**Current EN:** mest
**Recommended EN:** to throw
**Reason:** The English field is a Latvian remnant and should be an English infinitive.

### 219. HIGH — `verb-115-schmeißen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-115-schmeißen
**German:** er schmisse
**Field:** imperfektKonjunktiv
**Current EN:** he threw
**Recommended EN:** he would throw
**Reason:** Konjunktiv II requires a conditional form, not the simple past.

### 220. HIGH — `verb-115-schmeißen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-115-schmeißen
**German:** geschmissen
**Field:** partizipVergangenheit
**Current EN:** mests
**Recommended EN:** thrown
**Reason:** The English field contains a Latvian remnant. The participle is thrown.

### 221. HIGH — `verb-116-schmelzen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-116-schmelzen
**German:** schmelzen
**Field:** infinitiv
**Current EN:** kust
**Recommended EN:** to melt
**Reason:** The English field contains a Latvian remnant.

### 222. HIGH — `verb-116-schmelzen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-116-schmelzen
**German:** er schmolz
**Field:** imperfektIndikativ
**Current EN:** he moaned
**Recommended EN:** he melted
**Reason:** Schmelzen means melt, not moan.

### 223. HIGH — `verb-116-schmelzen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-116-schmelzen
**German:** er schmölze
**Field:** imperfektKonjunktiv
**Current EN:** he was moving
**Recommended EN:** he would melt
**Reason:** The German Konjunktiv II means he would melt.

### 224. HIGH — `verb-116-schmelzen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-116-schmelzen
**German:** geschmolzen (er ist)
**Field:** partizipVergangenheit
**Current EN:** kusis
**Recommended EN:** melted
**Reason:** The English field contains a Latvian remnant. The participle is melted.

### 225. HIGH — `verb-117-schnauben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-117-schnauben
**German:** schnauben
**Field:** infinitiv
**Current EN:** to hiss
**Recommended EN:** to snort
**Reason:** Schnauben means to snort, not to hiss.

### 226. HIGH — `verb-117-schnauben` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-117-schnauben
**German:** schnaubte vai schnob
**Field:** imperfektKonjunktiv
**Current EN:** snorted
**Recommended EN:** would snort
**Reason:** The German form is Konjunktiv II and requires a conditional form.

### 227. HIGH — `verb-118-schneiden` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-118-schneiden
**German:** schneiden
**Field:** infinitiv
**Current EN:** griezt
**Recommended EN:** to cut
**Reason:** The English field contains a Latvian remnant and should be an English infinitive.

### 228. HIGH — `verb-118-schneiden` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-118-schneiden
**German:** er schneidet
**Field:** praesens
**Current EN:** he spins
**Recommended EN:** he cuts
**Reason:** Schneiden means cut, not spin.

### 229. HIGH — `verb-118-schneiden` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-118-schneiden
**German:** geschnitten
**Field:** partizipVergangenheit
**Current EN:** griezts
**Recommended EN:** cut
**Reason:** The English field contains a Latvian remnant. The participle of cut is cut.

### 230. HIGH — `verb-120-schreien` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-120-schreien
**German:** schreien
**Field:** infinitiv
**Current EN:** kliegt
**Recommended EN:** to shout
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 231. HIGH — `verb-120-schreien` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-120-schreien
**German:** geschrien
**Field:** partizipVergangenheit
**Current EN:** kliegts
**Recommended EN:** shouted
**Reason:** The English field contains the Latvian source instead of an English past participle.

### 232. HIGH — `verb-123-schwellen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-123-schwellen
**German:** schwellen
**Field:** infinitiv
**Current EN:** pampt
**Recommended EN:** to swell
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 233. HIGH — `verb-123-schwellen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-123-schwellen
**German:** er schwillt
**Field:** praesens
**Current EN:** he pouts
**Recommended EN:** he swells
**Reason:** Schwellen means become larger or swollen, not pout.

### 234. HIGH — `verb-123-schwellen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-123-schwellen
**German:** er schwoll
**Field:** imperfektIndikativ
**Current EN:** he pampas
**Recommended EN:** he swelled
**Reason:** The field contains a Latvian remnant and does not provide an English past-tense form.

### 235. HIGH — `verb-123-schwellen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-123-schwellen
**German:** er schwölle
**Field:** imperfektKonjunktiv
**Current EN:** he would pump
**Recommended EN:** he would swell
**Reason:** Schwellen translates as swell, not pump.

### 236. HIGH — `verb-123-schwellen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-123-schwellen
**German:** geschwollen (er ist)
**Field:** partizipVergangenheit
**Current EN:** pampis
**Recommended EN:** swollen
**Reason:** The English field contains the Latvian source instead of the English past participle.

### 237. HIGH — `verb-125-sch­­winden` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-125-sch­­winden
**German:** schwinden
**Field:** infinitiv
**Current EN:** zust
**Recommended EN:** to disappear
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 238. HIGH — `verb-125-sch­­winden` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-125-sch­­winden
**German:** geschwunden (er ist)
**Field:** partizipVergangenheit
**Current EN:** zudis
**Recommended EN:** disappeared
**Reason:** The English field contains the Latvian source instead of an English past participle.

### 239. HIGH — `verb-129-sein` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-129-sein
**German:** war
**Field:** imperfektIndikativ
**Current EN:** bija
**Recommended EN:** he was
**Reason:** The English field contains the Latvian source instead of an English past-tense form.

### 240. HIGH — `verb-129-sein` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-129-sein
**German:** war
**Field:** imperfektKonjunktiv
**Current EN:** bija
**Recommended EN:** he would be
**Reason:** The English field contains the Latvian source and lacks the required conditional meaning.

### 241. HIGH — `verb-129-sein` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-129-sein
**German:** gewesen
**Field:** partizipVergangenheit
**Current EN:** bijis
**Recommended EN:** been
**Reason:** The English field contains the Latvian source instead of the English past participle.

### 242. HIGH — `verb-131-sieden` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-131-sieden
**German:** er siedet
**Field:** praesens
**Current EN:** he cooks
**Recommended EN:** he boils
**Reason:** Sieden means to boil, not the broader verb cook.

### 243. HIGH — `verb-131-sieden` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-131-sieden
**German:** sott vai siedete
**Field:** imperfektKonjunktiv
**Current EN:** cooked
**Recommended EN:** would boil
**Reason:** Konjunktiv II requires a conditional English form.

### 244. HIGH — `verb-133-sinken` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-133-sinken
**German:** sinken
**Field:** infinitiv
**Current EN:** grimt
**Recommended EN:** to sink
**Reason:** The English field contains an untranslated Latvian form.

### 245. HIGH — `verb-133-sinken` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-133-sinken
**German:** gesunken (er ist)
**Field:** partizipVergangenheit
**Current EN:** grimis
**Recommended EN:** sunk
**Reason:** The English field contains an untranslated Latvian form.

### 246. HIGH — `verb-136-sollen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-136-sollen
**German:** er soll
**Field:** praesens
**Current EN:** he needs
**Recommended EN:** he should • he is supposed to
**Reason:** Sollen expresses should or expectation, not need.

### 247. HIGH — `verb-136-sollen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-136-sollen
**German:** sollte
**Field:** imperfektIndikativ
**Current EN:** should have
**Recommended EN:** he was supposed to
**Reason:** Should have is a perfect construction, not the German simple past modal.

### 248. HIGH — `verb-136-sollen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-136-sollen
**German:** sollte
**Field:** imperfektKonjunktiv
**Current EN:** should have
**Recommended EN:** he would be expected to
**Reason:** Konjunktiv II requires a conditional form, not should have.

### 249. HIGH — `verb-139-spleißen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-139-spleißen
**German:** spleißen
**Field:** infinitiv
**Current EN:** savienot
**Recommended EN:** to splice
**Reason:** The English field contains an untranslated Latvian form.

### 250. HIGH — `verb-139-spleißen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-139-spleißen
**German:** spliss
**Field:** imperfektIndikativ
**Current EN:** savienoja
**Recommended EN:** spliced
**Reason:** The English field contains an untranslated Latvian form.

### 251. HIGH — `verb-139-spleißen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-139-spleißen
**German:** spliss
**Field:** imperfektKonjunktiv
**Current EN:** savienoja
**Recommended EN:** would splice
**Reason:** The English field contains an untranslated Latvian form.

### 252. HIGH — `verb-139-spleißen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-139-spleißen
**German:** gesplissen
**Field:** partizipVergangenheit
**Current EN:** savienots
**Recommended EN:** spliced
**Reason:** The English field contains an untranslated Latvian form.

### 253. HIGH — `verb-141-sprießen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-141-sprießen
**German:** sprießen
**Field:** infinitiv
**Current EN:** plaukt
**Recommended EN:** to sprout
**Reason:** The English field contains an untranslated Latvian infinitive.

### 254. HIGH — `verb-141-sprießen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-141-sprießen
**German:** er sprösse
**Field:** imperfektKonjunktiv
**Current EN:** he shelf
**Recommended EN:** he would sprout
**Reason:** The English is malformed and does not express the German conditional meaning.

### 255. HIGH — `verb-141-sprießen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-141-sprießen
**German:** gesprossen (er ist)
**Field:** partizipVergangenheit
**Current EN:** plaucis
**Recommended EN:** sprouted
**Reason:** The English field contains an untranslated Latvian participle.

### 256. HIGH — `verb-142-springen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-142-springen
**German:** gesprungen (er ist)
**Field:** partizipVergangenheit
**Current EN:** lens
**Recommended EN:** jumped
**Reason:** “Lens” is unrelated to the German participle gesprungen.

### 257. HIGH — `verb-143-stechen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-143-stechen
**German:** stechen
**Field:** infinitiv
**Current EN:** durt
**Recommended EN:** to stab
**Reason:** The English field contains an untranslated Latvian infinitive.

### 258. HIGH — `verb-143-stechen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-143-stechen
**German:** gestochen
**Field:** partizipVergangenheit
**Current EN:** durts
**Recommended EN:** stabbed
**Reason:** The English field contains an untranslated Latvian participle.

### 259. HIGH — `verb-144-stecken` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-144-stecken
**German:** stak vai steckte
**Field:** imperfektKonjunktiv
**Current EN:** stuffed
**Recommended EN:** he would stick / he would put in
**Reason:** The Konjunktiv II slot requires a conditional English form, not a simple past.

### 260. HIGH — `verb-146-stehlen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-146-stehlen
**German:** stehlen
**Field:** infinitiv
**Current EN:** zagt
**Recommended EN:** to steal
**Reason:** The English field contains an untranslated Latvian form.

### 261. HIGH — `verb-146-stehlen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-146-stehlen
**German:** gestohlen
**Field:** partizipVergangenheit
**Current EN:** zagts
**Recommended EN:** stolen
**Reason:** The English field contains an untranslated Latvian participle.

### 262. HIGH — `verb-148-sterben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-148-sterben
**German:** sterben
**Field:** infinitiv
**Current EN:** mirt
**Recommended EN:** to die
**Reason:** The English field contains an untranslated Latvian infinitive.

### 263. HIGH — `verb-148-sterben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-148-sterben
**German:** gestorben (er ist)
**Field:** partizipVergangenheit
**Current EN:** miris
**Recommended EN:** died
**Reason:** The English field contains an untranslated Latvian participle.

### 264. HIGH — `verb-149-stieben` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-149-stieben
**German:** es stiebt
**Field:** praesens
**Current EN:** tas put
**Recommended EN:** it scatters
**Reason:** The English field contains an untranslated Latvian phrase.

### 265. HIGH — `verb-149-stieben` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-149-stieben
**German:** stob vai stiebte
**Field:** imperfektKonjunktiv
**Current EN:** foamed
**Recommended EN:** it would scatter
**Reason:** The Konjunktiv II slot requires a conditional form, not a simple past.

### 266. HIGH — `verb-150-stinken` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-150-stinken
**German:** es stinkt
**Field:** praesens
**Current EN:** tas smird
**Recommended EN:** it stinks
**Reason:** The English field contains an unchanged Latvian phrase.

### 267. HIGH — `verb-150-stinken` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-150-stinken
**German:** stank
**Field:** imperfektKonjunktiv
**Current EN:** smelled
**Recommended EN:** would stink
**Reason:** German Konjunktiv II requires a natural English conditional, not simple past ‘smelled’.

### 268. HIGH — `verb-151-stoßen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-151-stoßen
**German:** er stieße
**Field:** imperfektKonjunktiv
**Current EN:** he was pushing
**Recommended EN:** he would push
**Reason:** Konjunktiv II is conditional, whereas ‘was pushing’ is progressive past.

### 269. HIGH — `verb-154-tragen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-154-tragen
**German:** tragen
**Field:** infinitiv
**Current EN:** nest
**Recommended EN:** to carry
**Reason:** ‘Nest’ is unrelated to German ‘tragen’; the English verb is ‘carry’.

### 270. HIGH — `verb-154-tragen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-154-tragen
**German:** getragen
**Field:** partizipVergangenheit
**Current EN:** nests
**Recommended EN:** carried
**Reason:** ‘Nests’ is unrelated to the past participle of ‘carry’.

### 271. HIGH — `verb-155-treffen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-155-treffen
**German:** treffen
**Field:** infinitiv
**Current EN:** sastapt
**Recommended EN:** to meet
**Reason:** The English field contains the unchanged Latvian infinitive.

### 272. HIGH — `verb-155-treffen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-155-treffen
**German:** getroffen
**Field:** partizipVergangenheit
**Current EN:** sastapts
**Recommended EN:** met
**Reason:** The English field contains the unchanged Latvian participle.

### 273. HIGH — `verb-158-trinken` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-158-trinken
**German:** trinken
**Field:** infinitiv
**Current EN:** dzert
**Recommended EN:** to drink
**Reason:** The English field contains the unchanged Latvian infinitive.

### 274. HIGH — `verb-158-trinken` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-158-trinken
**German:** getrunken
**Field:** partizipVergangenheit
**Current EN:** dzerts
**Recommended EN:** drunk
**Reason:** The English field contains the unchanged Latvian participle.

### 275. HIGH — `verb-163-vergessen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-163-vergessen
**German:** vergessen
**Field:** infinitiv
**Current EN:** aizmirst
**Recommended EN:** to forget
**Reason:** The English field contains the Latvian infinitive instead of an English translation.

### 276. HIGH — `verb-163-vergessen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-163-vergessen
**German:** vergessen
**Field:** partizipVergangenheit
**Current EN:** aizmirsts
**Recommended EN:** forgotten
**Reason:** The English field contains the Latvian participle instead of an English translation.

### 277. HIGH — `verb-165-wachsen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-165-wachsen
**German:** wachsen
**Field:** infinitiv
**Current EN:** augt
**Recommended EN:** to grow
**Reason:** The English field contains the Latvian infinitive instead of an English translation.

### 278. HIGH — `verb-165-wachsen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-165-wachsen
**German:** gewachsen (er ist)
**Field:** partizipVergangenheit
**Current EN:** audzis
**Recommended EN:** grown
**Reason:** The English field contains the Latvian participle instead of the English form.

### 279. HIGH — `verb-167-weben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-167-weben
**German:** weben
**Field:** infinitiv
**Current EN:** aust
**Recommended EN:** to weave
**Reason:** The English field contains the Latvian infinitive instead of an English translation.

### 280. HIGH — `verb-167-weben` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-167-weben
**German:** wob
**Field:** imperfektIndikativ
**Current EN:** auda
**Recommended EN:** he wove
**Reason:** The English field contains the Latvian past-tense form instead of English.

### 281. HIGH — `verb-167-weben` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-167-weben
**German:** wob
**Field:** imperfektKonjunktiv
**Current EN:** auda
**Recommended EN:** he would weave
**Reason:** The field contains Latvian and fails to express the German conditional meaning.

### 282. HIGH — `verb-167-weben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-167-weben
**German:** gewoben
**Field:** partizipVergangenheit
**Current EN:** izausts
**Recommended EN:** woven
**Reason:** The English field contains the Latvian participle instead of the English participle.

### 283. HIGH — `verb-168-weichen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-168-weichen
**German:** gewichen (er ist)
**Field:** partizipVergangenheit
**Current EN:** back off
**Recommended EN:** backed off
**Reason:** The English entry is a bare verb, not a past participle matching German gewichen.

### 284. HIGH — `verb-171-werben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-171-werben
**German:** werben
**Field:** infinitiv
**Current EN:** to propose
**Recommended EN:** to advertise / to recruit / to woo
**Reason:** Werben primarily means advertise, recruit, or woo, not propose.

### 285. HIGH — `verb-171-werben` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-171-werben
**German:** er wirbt
**Field:** praesens
**Current EN:** he proposes
**Recommended EN:** he advertises / recruits / woos
**Reason:** “Proposes” is not the normal meaning of er wirbt.

### 286. HIGH — `verb-171-werben` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-171-werben
**German:** er warb
**Field:** imperfektIndikativ
**Current EN:** he proposed
**Recommended EN:** he advertised / recruited / wooed
**Reason:** The German past form means advertised, recruited, or wooed rather than proposed.

### 287. HIGH — `verb-171-werben` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-171-werben
**German:** er würbe
**Field:** imperfektKonjunktiv
**Current EN:** he would propose
**Recommended EN:** he would advertise / recruit / woo
**Reason:** The conditional meaning is mistranslated and the verb sense is wrong.

### 288. HIGH — `verb-171-werben` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-171-werben
**German:** geworben
**Field:** partizipVergangenheit
**Current EN:** proposed to
**Recommended EN:** advertised / recruited / wooed
**Reason:** Geworben means advertised, recruited, or wooed, not “proposed to”.

### 289. HIGH — `verb-172-werden` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-172-werden
**German:** wurde
**Field:** imperfektKonjunktiv
**Current EN:** became
**Recommended EN:** would become
**Reason:** Konjunktiv II requires a conditional English form, not the simple past.

### 290. HIGH — `verb-173-werfen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-173-werfen
**German:** werfen
**Field:** infinitiv
**Current EN:** mest
**Recommended EN:** to throw
**Reason:** The English field contains a Latvian remnant instead of an English infinitive.

### 291. HIGH — `verb-173-werfen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-173-werfen
**German:** er würfe
**Field:** imperfektKonjunktiv
**Current EN:** he threw
**Recommended EN:** he would throw
**Reason:** Konjunktiv II requires “would throw”, not the indicative past “threw”.

### 292. HIGH — `verb-173-werfen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-173-werfen
**German:** geworfen
**Field:** partizipVergangenheit
**Current EN:** mests
**Recommended EN:** thrown
**Reason:** The English field contains a Latvian remnant instead of the English participle.

### 293. HIGH — `verb-175-winden` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-175-winden
**German:** er windet
**Field:** praesens
**Current EN:** he pin
**Recommended EN:** he braids
**Reason:** The present form lacks third-person singular agreement and should be “braids”.

### 294. HIGH — `verb-175-winden` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-175-winden
**German:** er wand
**Field:** imperfektIndikativ
**Current EN:** he braids
**Recommended EN:** he braided
**Reason:** The English form is present tense but the German form is simple past.

### 295. HIGH — `verb-177-wollen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-177-wollen
**German:** wollte
**Field:** imperfektKonjunktiv
**Current EN:** wanted to
**Recommended EN:** would want
**Reason:** Konjunktiv II requires a conditional form, not the indicative past “wanted”.

### 296. HIGH — `verb-178-wringen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-178-wringen
**German:** wringen
**Field:** infinitiv
**Current EN:** izgriezt / izspiest
**Recommended EN:** to wring / to squeeze
**Reason:** The English field consists entirely of Latvian text and the sense is not “cut out”.

### 297. HIGH — `verb-178-wringen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-178-wringen
**German:** er wringt
**Field:** praesens
**Current EN:** he cuts out
**Recommended EN:** he wrings / squeezes
**Reason:** Wringen means wring or squeeze, not cut out.

### 298. HIGH — `verb-178-wringen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-178-wringen
**German:** wrang
**Field:** imperfektIndikativ
**Current EN:** izgrieza
**Recommended EN:** he wrung / squeezed
**Reason:** The English field contains a Latvian remnant and does not express the German past form.

### 299. HIGH — `verb-178-wringen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-178-wringen
**German:** wrang
**Field:** imperfektKonjunktiv
**Current EN:** izgrieza
**Recommended EN:** he would wring / squeeze
**Reason:** The English field contains a Latvian remnant and lacks the required conditional meaning.

### 300. HIGH — `verb-178-wringen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-178-wringen
**German:** gewrungen
**Field:** partizipVergangenheit
**Current EN:** izgriezts
**Recommended EN:** wrung / squeezed
**Reason:** The English field contains a Latvian remnant instead of an English participle.

### 301. HIGH — `verb-179-zeihen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-179-zeihen
**German:** zeihen
**Field:** infinitiv
**Current EN:** vainot
**Recommended EN:** to accuse / to blame
**Reason:** The English field contains a Latvian remnant instead of an English infinitive.

### 302. HIGH — `verb-179-zeihen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-179-zeihen
**German:** zieh
**Field:** imperfektIndikativ
**Current EN:** vainoja
**Recommended EN:** he accused / blamed
**Reason:** The English field contains a Latvian remnant instead of an English past form.

### 303. HIGH — `verb-179-zeihen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-179-zeihen
**German:** zieh
**Field:** imperfektKonjunktiv
**Current EN:** vainoja
**Recommended EN:** he would accuse / blame
**Reason:** The English field contains a Latvian remnant and lacks the conditional meaning.

### 304. HIGH — `verb-179-zeihen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-179-zeihen
**German:** geziehen
**Field:** partizipVergangenheit
**Current EN:** vainojis
**Recommended EN:** accused / blamed
**Reason:** The English field contains a Latvian remnant instead of an English participle.

### 305. HIGH — `verb-180-ziehen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-180-ziehen
**German:** ziehen
**Field:** infinitiv
**Current EN:** vilkt
**Recommended EN:** to pull
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 306. HIGH — `verb-180-ziehen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-180-ziehen
**German:** gezogen
**Field:** partizipVergangenheit
**Current EN:** vilkts
**Recommended EN:** pulled
**Reason:** The English field contains the Latvian source instead of an English participle.

### 307. HIGH — `verb-181-zwingen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-181-zwingen
**German:** zwingen
**Field:** infinitiv
**Current EN:** piespiest
**Recommended EN:** to force
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 308. HIGH — `verb-181-zwingen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-181-zwingen
**German:** gezwungen
**Field:** partizipVergangenheit
**Current EN:** piespiests
**Recommended EN:** forced
**Reason:** The English field contains the Latvian source instead of an English participle.

### 309. HIGH — `verb-185-flechten` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-185-flechten
**German:** er flicht
**Field:** praesens
**Current EN:** he pin
**Recommended EN:** he braids
**Reason:** The third-person singular present requires the -s ending: “he braids”.

### 310. HIGH — `verb-185-flechten` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-185-flechten
**German:** er flocht
**Field:** imperfektIndikativ
**Current EN:** he braids
**Recommended EN:** he braided
**Reason:** The German form is past tense, but the current English form is present tense.

### 311. HIGH — `verb-186-hangen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-186-hangen
**German:** gehangen
**Field:** partizipVergangenheit
**Current EN:** hang on
**Recommended EN:** hung
**Reason:** “Hang on” is a phrasal verb meaning wait or hold on, not the participle of hanging.

### 312. HIGH — `verb-188-verzeihen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-188-verzeihen
**German:** verzeihen
**Field:** infinitiv
**Current EN:** piedot
**Recommended EN:** to forgive
**Reason:** The English field contains the Latvian source instead of an English infinitive.

### 313. HIGH — `verb-188-verzeihen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-188-verzeihen
**German:** verziehen
**Field:** partizipVergangenheit
**Current EN:** piedots
**Recommended EN:** forgiven
**Reason:** The English field contains the Latvian source instead of an English participle.

### 314. MEDIUM — `verb-0-backen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-0-backen
**German:** er buk
**Field:** imperfektIndikativ
**Current EN:** he was baking
**Recommended EN:** he baked
**Reason:** German simple past does not specify the progressive aspect expressed by “was baking”.

### 315. MEDIUM — `verb-4-bergen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-4-bergen
**German:** bergen
**Field:** infinitiv
**Current EN:** hide
**Recommended EN:** to hide
**Reason:** The English infinitive should include the infinitive marker “to”.

### 316. MEDIUM — `verb-5-bersten` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-5-bersten
**German:** bersten
**Field:** infinitiv
**Current EN:** bursting
**Recommended EN:** to burst
**Reason:** “Bursting” is a gerund or participle, not the English infinitive corresponding to bersten.

### 317. MEDIUM — `verb-5-bersten` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-5-bersten
**German:** er barst / er borst
**Field:** imperfektIndikativ
**Current EN:** he burst out
**Recommended EN:** he burst
**Reason:** “Burst out” adds a different phrasal-verb meaning not present in German bersten.

### 318. MEDIUM — `verb-5-bersten` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-5-bersten
**German:** geborsten (er ist)
**Field:** partizipVergangenheit
**Current EN:** broken
**Recommended EN:** burst
**Reason:** The participle of bersten is “burst”; “broken” changes the verb and meaning.

### 319. MEDIUM — `verb-7-biegen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-7-biegen
**German:** biegen
**Field:** infinitiv
**Current EN:** bend
**Recommended EN:** to bend
**Reason:** The English infinitive should include the infinitive marker “to”.

### 320. MEDIUM — `verb-12-gären` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-12-gären
**German:** es gor / es gärte
**Field:** imperfektIndikativ
**Current EN:** it ferments
**Recommended EN:** it fermented
**Reason:** The German forms are past tense, but the English form is present tense.

### 321. MEDIUM — `verb-15-gelten` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-15-gelten
**German:** er gilt
**Field:** praesens
**Current EN:** he fits / is valid
**Recommended EN:** he counts • he is valid
**Reason:** Fit is not the relevant meaning of gelten here, while count and be valid are.

### 322. MEDIUM — `verb-15-gelten` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-15-gelten
**German:** er galt
**Field:** imperfektIndikativ
**Current EN:** he fit / was fit
**Recommended EN:** he counted • he was valid
**Reason:** Fit and was fit do not express the relevant meanings of gelten.

### 323. MEDIUM — `verb-16-genesen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-16-genesen
**German:** genesen
**Field:** infinitiv
**Current EN:** getting well
**Recommended EN:** to recover
**Reason:** The slot requires an English infinitive, not an -ing form.

### 324. MEDIUM — `verb-20-gleichen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-20-gleichen
**German:** er glich
**Field:** imperfektIndikativ
**Current EN:** he emulated
**Recommended EN:** he resembled
**Reason:** The English verb means imitate, not resemble.

### 325. MEDIUM — `verb-20-gleichen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-20-gleichen
**German:** er gliche
**Field:** imperfektKonjunktiv
**Current EN:** he would emulate
**Recommended EN:** he would resemble
**Reason:** The conditional should express resemblance, not imitation.

### 326. MEDIUM — `verb-21-gleiten` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-21-gleiten
**German:** er glitt
**Field:** imperfektIndikativ
**Current EN:** he was sliding
**Recommended EN:** he slid
**Reason:** The German simple past is best rendered with the simple English past here.

### 327. MEDIUM — `verb-21-gleiten` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-21-gleiten
**German:** geglitten (er ist)
**Field:** partizipVergangenheit
**Current EN:** slipped
**Recommended EN:** slid
**Reason:** Gleiten means glide or slide, while slipped usually implies losing one's footing.

### 328. MEDIUM — `verb-22-glimmen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-22-glimmen
**German:** geglimmt / geglommen
**Field:** partizipVergangenheit
**Current EN:** glowing
**Recommended EN:** glowed
**Reason:** The English past participle is glowed, not the present participle glowing.

### 329. MEDIUM — `verb-31-bleichen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-31-bleichen
**German:** bleichen
**Field:** infinitiv
**Current EN:** whiten
**Recommended EN:** to bleach
**Reason:** The infinitive uses a different root and lacks to, unlike the remaining bleach forms.

### 330. MEDIUM — `verb-34-brennen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-34-brennen
**German:** er brennt
**Field:** praesens
**Current EN:** he's on fire
**Recommended EN:** he burns
**Reason:** On fire is an idiomatic state, while brennen directly means burn.

### 331. MEDIUM — `verb-36-denken` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-36-denken
**German:** gedacht
**Field:** partizipVergangenheit
**Current EN:** intended
**Recommended EN:** thought
**Reason:** The participle of denken is thought, not generally intended.

### 332. MEDIUM — `verb-41-dürfen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-41-dürfen
**German:** er darf
**Field:** praesens
**Current EN:** he can
**Recommended EN:** he is allowed to
**Reason:** Dürfen expresses permission, whereas can normally expresses ability.

### 333. MEDIUM — `verb-41-dürfen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-41-dürfen
**German:** gedurft
**Field:** partizipVergangenheit
**Current EN:** allowed
**Recommended EN:** been allowed
**Reason:** The modal participle is best rendered as been allowed in English.

### 334. MEDIUM — `verb-46-essen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-46-essen
**German:** er ass
**Field:** imperfektIndikativ
**Current EN:** he was eating
**Recommended EN:** he ate
**Reason:** The German Präteritum is a simple past form, best matched by he ate.

### 335. MEDIUM — `verb-52-fliehen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-52-fliehen
**German:** fliehen
**Field:** infinitiv
**Current EN:** run away
**Recommended EN:** to flee
**Reason:** The infinitive slot requires an English infinitive and the current form is a bare verb phrase.

### 336. MEDIUM — `verb-54-fressen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-54-fressen
**German:** er fräße
**Field:** imperfektKonjunktiv
**Current EN:** he would eat / breakfast
**Recommended EN:** he would eat / devour
**Reason:** Breakfast is unrelated as a translation of the animal-eating sense of fressen.

### 337. MEDIUM — `verb-57-gedeihen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-57-gedeihen
**German:** er gedeiht
**Field:** praesens
**Current EN:** he succeeds
**Recommended EN:** he thrives
**Reason:** Gedeihen primarily means thrive or prosper, not succeed.

### 338. MEDIUM — `verb-57-gedeihen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-57-gedeihen
**German:** er gedieh
**Field:** imperfektIndikativ
**Current EN:** he succeeded
**Recommended EN:** he thrived
**Reason:** Gedeihen primarily means thrived or prospered, not succeeded.

### 339. MEDIUM — `verb-57-gedeihen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-57-gedeihen
**German:** er gediehe
**Field:** imperfektKonjunktiv
**Current EN:** he would succeed
**Recommended EN:** he would thrive
**Reason:** The conditional should preserve the meaning of gedeihen as thrive.

### 340. MEDIUM — `verb-61-halten` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-61-halten
**German:** halten
**Field:** infinitiv
**Current EN:** hold
**Recommended EN:** to hold
**Reason:** The English infinitive requires the marker to.

### 341. MEDIUM — `verb-65-können` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-65-können
**German:** können
**Field:** infinitiv
**Current EN:** be able to
**Recommended EN:** to be able to
**Reason:** The English infinitive requires the marker to.

### 342. MEDIUM — `verb-65-können` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-65-können
**German:** konnte
**Field:** imperfektKonjunktiv
**Current EN:** could
**Recommended EN:** would be able to
**Reason:** Konjunktiv II should be expressed as a conditional, not only as a past-form modal.

### 343. MEDIUM — `verb-68-lassen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-68-lassen
**German:** lassen
**Field:** infinitiv
**Current EN:** to put, to let
**Recommended EN:** to let • to leave
**Reason:** Lassen does not generally mean to put; let and leave are the core meanings.

### 344. MEDIUM — `verb-68-lassen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-68-lassen
**German:** er lässt
**Field:** praesens
**Current EN:** he puts / lets
**Recommended EN:** he lets • he leaves
**Reason:** The first English sense puts does not match lassen.

### 345. MEDIUM — `verb-68-lassen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-68-lassen
**German:** er ließe
**Field:** imperfektKonjunktiv
**Current EN:** he would put / let
**Recommended EN:** he would let • he would leave
**Reason:** Put is not a core translation of lassen in this paradigm.

### 346. MEDIUM — `verb-68-lassen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-68-lassen
**German:** gelassen
**Field:** partizipVergangenheit
**Current EN:** put / allowed
**Recommended EN:** left • let
**Reason:** The participle gelassen means left or let, not put.

### 347. MEDIUM — `verb-69-laufen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-69-laufen
**German:** gelaufen (er ist)
**Field:** partizipVergangenheit
**Current EN:** ran
**Recommended EN:** has run
**Reason:** Ran is the simple past, not the participial form required here.

### 348. MEDIUM — `verb-79-misslingen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-79-misslingen
**German:** 
**Field:** imperfektKonjunktiv
**Current EN:** 
**Recommended EN:** 
**Reason:** 

### 349. MEDIUM — `verb-85-pflegen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-85-pflegen
**German:** er pflegt
**Field:** praesens
**Current EN:** he cares
**Recommended EN:** he cares for
**Reason:** Pflegen here means care for or tend, requiring the object-oriented particle for.

### 350. MEDIUM — `verb-86-preisen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-86-preisen
**German:** preisen
**Field:** infinitiv
**Current EN:** praise
**Recommended EN:** to praise
**Reason:** This slot consistently requires the English infinitive with to.

### 351. MEDIUM — `verb-90-reißen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-90-reißen
**German:** er reißt
**Field:** praesens
**Current EN:** he snaps
**Recommended EN:** he tears
**Reason:** “Snaps” is possible in some contexts but does not match the primary meaning “tear”.

### 352. MEDIUM — `verb-90-reißen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-90-reißen
**German:** er riss
**Field:** imperfektIndikativ
**Current EN:** he snapped
**Recommended EN:** he tore
**Reason:** The German past form primarily means “tore”, not “snapped”.

### 353. MEDIUM — `verb-92-rennen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-92-rennen
**German:** er rennt
**Field:** praesens
**Current EN:** he is running
**Recommended EN:** he runs
**Reason:** The German simple present is mapped to an unnecessary progressive form.

### 354. MEDIUM — `verb-95-rinnen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-95-rinnen
**German:** geronnen (er ist)
**Field:** partizipVergangenheit
**Current EN:** flowed / coagulated
**Recommended EN:** flowed
**Reason:** “Coagulated” belongs to “gerinnen”, not the primary participle sense of “rinnen”.

### 355. MEDIUM — `verb-98-saufen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-98-saufen
**German:** er säuft
**Field:** praesens
**Current EN:** he is drinking / drinking
**Recommended EN:** he drinks heavily
**Reason:** The entry is fragmented and uses a progressive form instead of the simple present.

### 356. MEDIUM — `verb-99-saugen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-99-saugen
**German:** saugen
**Field:** infinitiv
**Current EN:** suck
**Recommended EN:** to suck
**Reason:** An English infinitive learner form should include “to”.

### 357. MEDIUM — `verb-102-scheiden` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-102-scheiden
**German:** scheiden
**Field:** infinitiv
**Current EN:** divorce / break up
**Recommended EN:** to divorce / to separate
**Reason:** The English infinitive marker is missing, and separate better matches the second German sense.

### 358. MEDIUM — `verb-102-scheiden` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-102-scheiden
**German:** er scheidet
**Field:** praesens
**Current EN:** he is divorcing / divorcing
**Recommended EN:** he divorces / separates
**Reason:** The second variant lacks its verb complement and the pair should reflect both German senses.

### 359. MEDIUM — `verb-102-scheiden` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-102-scheiden
**German:** er schied
**Field:** imperfektIndikativ
**Current EN:** he divorced / divorced
**Recommended EN:** he divorced / separated
**Reason:** The second variant omits the subject and does not express the intransitive sense clearly.

### 360. MEDIUM — `verb-103-scheinen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-103-scheinen
**German:** scheinen
**Field:** infinitiv
**Current EN:** shine / appear
**Recommended EN:** to shine / to appear
**Reason:** The English infinitive marker is missing from both alternatives.

### 361. MEDIUM — `verb-103-scheinen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-103-scheinen
**German:** er schiene
**Field:** imperfektKonjunktiv
**Current EN:** he would shine / seem
**Recommended EN:** he would shine / would seem
**Reason:** The second alternative lacks would, so it is not a complete conditional rendering.

### 362. MEDIUM — `verb-108-schinden` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-108-schinden
**German:** schinden
**Field:** infinitiv
**Current EN:** torment
**Recommended EN:** to torment
**Reason:** The English infinitive marker is missing.

### 363. MEDIUM — `verb-112-schleifen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-112-schleifen
**German:** er schliff
**Field:** imperfektIndikativ
**Current EN:** he grinded
**Recommended EN:** he ground
**Reason:** The past tense of grind is ground, not grinded.

### 364. MEDIUM — `verb-117-schnauben` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-117-schnauben
**German:** geschnaubt vai geschnoben
**Field:** partizipVergangenheit
**Current EN:** snort
**Recommended EN:** snorted
**Reason:** The field uses the bare verb instead of the required past participle.

### 365. MEDIUM — `verb-118-schneiden` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-118-schneiden
**German:** er schnitt
**Field:** imperfektIndikativ
**Current EN:** he was cutting
**Recommended EN:** he cut
**Reason:** The German simple past is best represented by the English simple past here.

### 366. MEDIUM — `verb-121-schreiten` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-121-schreiten
**German:** schreiten
**Field:** infinitiv
**Current EN:** walking
**Recommended EN:** to walk
**Reason:** An English infinitive should use the to-infinitive, not a present participle.

### 367. MEDIUM — `verb-122-schweigen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-122-schweigen
**German:** schweigen
**Field:** infinitiv
**Current EN:** keep quiet
**Recommended EN:** to keep quiet
**Reason:** The English infinitive is missing the infinitive marker to.

### 368. MEDIUM — `verb-122-schweigen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-122-schweigen
**German:** geschwiegen
**Field:** partizipVergangenheit
**Current EN:** silenced
**Recommended EN:** been silent
**Reason:** Silenced means made silent, whereas geschwiegen means having remained silent.

### 369. MEDIUM — `verb-124-schwimmen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-124-schwimmen
**German:** geschwommen (er ist)
**Field:** partizipVergangenheit
**Current EN:** swam
**Recommended EN:** swum
**Reason:** Swam is the simple past, while the required English past participle is swum.

### 370. MEDIUM — `verb-126-schwingen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-126-schwingen
**German:** schwingen
**Field:** infinitiv
**Current EN:** wave
**Recommended EN:** to wave
**Reason:** An English infinitive should use the to-infinitive, not the bare verb.

### 371. MEDIUM — `verb-131-sieden` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-131-sieden
**German:** sott vai siedete
**Field:** imperfektIndikativ
**Current EN:** cooked
**Recommended EN:** boiled
**Reason:** The German verb specifically means boiled here, not the broader cooked.

### 372. MEDIUM — `verb-133-sinken` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-133-sinken
**German:** er sinkt
**Field:** praesens
**Current EN:** he is sinking
**Recommended EN:** he sinks
**Reason:** The German form is simple present, not explicitly progressive.

### 373. MEDIUM — `verb-135-sitzen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-135-sitzen
**German:** er sitzt
**Field:** praesens
**Current EN:** he is sitting
**Recommended EN:** he sits
**Reason:** The German form is simple present, not explicitly progressive.

### 374. MEDIUM — `verb-135-sitzen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-135-sitzen
**German:** er sass
**Field:** imperfektIndikativ
**Current EN:** he was sitting
**Recommended EN:** he sat
**Reason:** The German simple past is best represented by the simple English past sat.

### 375. MEDIUM — `verb-135-sitzen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-135-sitzen
**German:** gesessen
**Field:** partizipVergangenheit
**Current EN:** sat down
**Recommended EN:** sat
**Reason:** Sat down adds a directional meaning absent from the German participle.

### 376. MEDIUM — `verb-136-sollen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-136-sollen
**German:** sollen
**Field:** infinitiv
**Current EN:** need / be obliged
**Recommended EN:** to be supposed to • to be obliged
**Reason:** Sollen expresses obligation or expectation, not generally need.

### 377. MEDIUM — `verb-136-sollen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-136-sollen
**German:** gesollt
**Field:** partizipVergangenheit
**Current EN:** needed
**Recommended EN:** supposed to
**Reason:** Gesollt corresponds to being supposed or required, not needed.

### 378. MEDIUM — `verb-137-speien` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-137-speien
**German:** gespien
**Field:** partizipVergangenheit
**Current EN:** spat out
**Recommended EN:** spat
**Reason:** Out adds a directional particle not present in the German participle.

### 379. MEDIUM — `verb-138-spinnen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-138-spinnen
**German:** spinnen
**Field:** infinitiv
**Current EN:** spin
**Recommended EN:** to spin
**Reason:** The infinitive translation requires the English infinitive marker to.

### 380. MEDIUM — `verb-138-spinnen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-138-spinnen
**German:** er spinnt
**Field:** praesens
**Current EN:** he twists
**Recommended EN:** he spins
**Reason:** Spinnen means spin in this context, not twist.

### 381. MEDIUM — `verb-139-spleißen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-139-spleißen
**German:** er spleißt
**Field:** praesens
**Current EN:** he connects
**Recommended EN:** he splices
**Reason:** Spleißen specifically means splice, not the broader connect.

### 382. MEDIUM — `verb-141-sprießen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-141-sprießen
**German:** er sprießt
**Field:** praesens
**Current EN:** he thrives
**Recommended EN:** he sprouts
**Reason:** Sprießen means sprout or shoot, not thrive.

### 383. MEDIUM — `verb-141-sprießen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-141-sprießen
**German:** er spross
**Field:** imperfektIndikativ
**Current EN:** he thrived
**Recommended EN:** he sprouted
**Reason:** The German verb means sprouted, not thrived.

### 384. MEDIUM — `verb-143-stechen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-143-stechen
**German:** er stach
**Field:** imperfektIndikativ
**Current EN:** he punched
**Recommended EN:** he stabbed
**Reason:** Stechen means stab or pierce here, not punch.

### 385. MEDIUM — `verb-145-stehen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-145-stehen
**German:** gestanden
**Field:** partizipVergangenheit
**Current EN:** standing
**Recommended EN:** stood
**Reason:** Gestanden is the past participle of stand, translated as stood here.

### 386. MEDIUM — `verb-149-stieben` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-149-stieben
**German:** stieben
**Field:** infinitiv
**Current EN:** foam / swirl
**Recommended EN:** to scatter / to swirl
**Reason:** Stieben means scatter or swirl, not foam.

### 387. MEDIUM — `verb-149-stieben` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-149-stieben
**German:** stob vai stiebte
**Field:** imperfektIndikativ
**Current EN:** foamed
**Recommended EN:** it scattered
**Reason:** The German verb describes scattering, not foaming.

### 388. MEDIUM — `verb-149-stieben` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-149-stieben
**German:** gestoben vai gestiebt
**Field:** partizipVergangenheit
**Current EN:** spoiled
**Recommended EN:** scattered
**Reason:** The German participle means scattered or dispersed, not spoiled.

### 389. MEDIUM — `verb-150-stinken` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-150-stinken
**German:** stinken
**Field:** infinitiv
**Current EN:** to smell
**Recommended EN:** to stink
**Reason:** ‘To smell’ is ambiguous and does not clearly convey the German verb ‘stinken’.

### 390. MEDIUM — `verb-150-stinken` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-150-stinken
**German:** stank
**Field:** imperfektIndikativ
**Current EN:** smelled
**Recommended EN:** stank
**Reason:** The German simple past is ‘stank’, not the ambiguous English ‘smelled’.

### 391. MEDIUM — `verb-150-stinken` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-150-stinken
**German:** gestunken
**Field:** partizipVergangenheit
**Current EN:** smelly
**Recommended EN:** stunk
**Reason:** ‘Smelly’ is an adjective, not the past participle of ‘stink’.

### 392. MEDIUM — `verb-152-streichen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-152-streichen
**German:** streichen
**Field:** infinitiv
**Current EN:** paint / strip
**Recommended EN:** to paint • to cross out
**Reason:** The infinitive lacks ‘to’, and ‘strip’ does not express the relevant second meaning.

### 393. MEDIUM — `verb-152-streichen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-152-streichen
**German:** er streicht
**Field:** praesens
**Current EN:** he paints / stripes
**Recommended EN:** he paints • he crosses out
**Reason:** ‘Stripes’ is not the intended sense of German ‘streichen’ here.

### 394. MEDIUM — `verb-152-streichen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-152-streichen
**German:** er strich
**Field:** imperfektIndikativ
**Current EN:** he painted / striped
**Recommended EN:** he painted • he crossed out
**Reason:** ‘Striped’ is not the relevant past-tense translation of ‘streichen’.

### 395. MEDIUM — `verb-152-streichen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-152-streichen
**German:** er striche
**Field:** imperfektKonjunktiv
**Current EN:** he would paint / strip
**Recommended EN:** he would paint • he would cross out
**Reason:** The second conditional meaning should be ‘cross out’, not ‘strip’.

### 396. MEDIUM — `verb-152-streichen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-152-streichen
**German:** gestrichen
**Field:** partizipVergangenheit
**Current EN:** painted / striped
**Recommended EN:** painted • crossed out
**Reason:** ‘Striped’ does not represent the relevant participle sense of ‘streichen’.

### 397. MEDIUM — `verb-153-streiten` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-153-streiten
**German:** er stritt
**Field:** imperfektIndikativ
**Current EN:** he struggled
**Recommended EN:** he fought
**Reason:** ‘Struggled’ changes the meaning; ‘stritt’ means fought or argued.

### 398. MEDIUM — `verb-157-treten` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-157-treten
**German:** er trat
**Field:** imperfektIndikativ
**Current EN:** he stood / walked
**Recommended EN:** he entered • he went
**Reason:** ‘Treten’ in these senses means entering or going, not standing or walking.

### 399. MEDIUM — `verb-157-treten` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-157-treten
**German:** er träte
**Field:** imperfektKonjunktiv
**Current EN:** he would stand / go
**Recommended EN:** he would enter • he would go
**Reason:** The first conditional meaning is entering or stepping, not standing.

### 400. MEDIUM — `verb-157-treten` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-157-treten
**German:** getreten (er ist)
**Field:** partizipVergangenheit
**Current EN:** stood / walked
**Recommended EN:** entered • gone
**Reason:** The participle is not ‘stood / walked’; in context it means entered or gone.

### 401. MEDIUM — `verb-162-verdrießen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-162-verdrießen
**German:** verdrossen
**Field:** partizipVergangenheit
**Current EN:** upset
**Recommended EN:** annoyed
**Reason:** Verdrossen primarily means annoyed or displeased, rather than emotionally upset.

### 402. MEDIUM — `verb-165-wachsen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-165-wachsen
**German:** er wuchs
**Field:** imperfektIndikativ
**Current EN:** he was growing up
**Recommended EN:** he grew
**Reason:** Growing up specifically means maturing, while wachsen means growing generally.

### 403. MEDIUM — `verb-169-weisen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-169-weisen
**German:** weisen
**Field:** infinitiv
**Current EN:** show
**Recommended EN:** to show
**Reason:** The infinitive slot requires the English infinitive marker to.

### 404. MEDIUM — `verb-170-wenden` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-170-wenden
**German:** wenden
**Field:** infinitiv
**Current EN:** modify / crop
**Recommended EN:** to turn / to reverse
**Reason:** Neither “modify” nor “crop” is the primary meaning of wenden.

### 405. MEDIUM — `verb-170-wenden` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-170-wenden
**German:** er wendet
**Field:** praesens
**Current EN:** he twists / turns
**Recommended EN:** he turns / reverses
**Reason:** “Twist” corresponds more closely to drehen or winden than wenden.

### 406. MEDIUM — `verb-170-wenden` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-170-wenden
**German:** er wandte / es wendete
**Field:** imperfektIndikativ
**Current EN:** he twisted / turned
**Recommended EN:** he turned / reversed
**Reason:** “Twisted” is not the usual meaning of wenden in this context.

### 407. MEDIUM — `verb-170-wenden` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-170-wenden
**German:** er wendete
**Field:** imperfektKonjunktiv
**Current EN:** he would amend / reverse
**Recommended EN:** he would turn / reverse
**Reason:** “Amend” is not an appropriate direct meaning of wenden here.

### 408. MEDIUM — `verb-170-wenden` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-170-wenden
**German:** gewandt / gewendet
**Field:** partizipVergangenheit
**Current EN:** amended / reversed
**Recommended EN:** turned / reversed
**Reason:** “Amended” does not represent the participle of wenden in this sense.

### 409. MEDIUM — `verb-174-wiegen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-174-wiegen
**German:** gewogen
**Field:** partizipVergangenheit
**Current EN:** weighted
**Recommended EN:** weighed
**Reason:** “Weighted” means provided with weight, whereas gewogen means measured by weight.

### 410. MEDIUM — `verb-175-winden` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-175-winden
**German:** winden
**Field:** infinitiv
**Current EN:** braid
**Recommended EN:** to braid
**Reason:** The learner-facing English infinitive should include “to”.

### 411. MEDIUM — `verb-177-wollen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-177-wollen
**German:** wollen
**Field:** infinitiv
**Current EN:** want to
**Recommended EN:** to want
**Reason:** The English infinitive should be “to want”, not the incomplete-looking “want to”.

### 412. MEDIUM — `verb-177-wollen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-177-wollen
**German:** gewollt
**Field:** partizipVergangenheit
**Current EN:** wanted to
**Recommended EN:** wanted
**Reason:** The participle is “wanted”, while “wanted to” is an incomplete verb phrase here.

### 413. MEDIUM — `verb-180-ziehen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-180-ziehen
**German:** er zöge
**Field:** imperfektKonjunktiv
**Current EN:** he would drag
**Recommended EN:** he would pull
**Reason:** Zöge primarily means “would pull”; “drag” is a narrower, different sense.

### 414. MEDIUM — `verb-184-fechten` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-184-fechten
**German:** er focht
**Field:** imperfektIndikativ
**Current EN:** he struggled
**Recommended EN:** he fought
**Reason:** Focht is the past form of “fight”; “struggled” changes the core verb meaning.

### 415. MEDIUM — `verb-185-flechten` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-185-flechten
**German:** flechten
**Field:** infinitiv
**Current EN:** braid
**Recommended EN:** to braid
**Reason:** The infinitive field should use the English infinitive marker “to”.

### 416. MEDIUM — `verb-186-hangen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-186-hangen
**German:** er hinge
**Field:** imperfektKonjunktiv
**Current EN:** he would hang himself
**Recommended EN:** he would hang
**Reason:** The reflexive “himself” adds an unintended suicide meaning absent from the German.

### 417. LOW — `verb-58-gehen` / `imperfektIndikativ`

**Severity:** LOW
**Verb ID:** verb-58-gehen
**German:** er ging
**Field:** imperfektIndikativ
**Current EN:** he walked
**Recommended EN:** he went
**Reason:** The primary translation of gehen here is went, while walked adds an unsupported manner of motion.

### 418. LOW — `verb-151-stoßen` / `infinitiv`

**Severity:** LOW
**Verb ID:** verb-151-stoßen
**German:** stoßen
**Field:** infinitiv
**Current EN:** push
**Recommended EN:** to push
**Reason:** The English infinitive requires the marker ‘to’.

### 419. LOW — `verb-153-streiten` / `praesens`

**Severity:** LOW
**Verb ID:** verb-153-streiten
**German:** er streitet
**Field:** praesens
**Current EN:** he is fighting
**Recommended EN:** he fights
**Reason:** The German present is best rendered as simple present, not progressive aspect.

### 420. LOW — `verb-156-treiben` / `infinitiv`

**Severity:** LOW
**Verb ID:** verb-156-treiben
**German:** treiben
**Field:** infinitiv
**Current EN:** chase
**Recommended EN:** to chase
**Reason:** The English infinitive requires the marker ‘to’.

### 421. LOW — `verb-157-treten` / `infinitiv`

**Severity:** LOW
**Verb ID:** verb-157-treten
**German:** treten
**Field:** infinitiv
**Current EN:** enter / go
**Recommended EN:** to enter • to go
**Reason:** The English infinitive requires the marker ‘to’.

---

This is **AUDIT ONLY** — not `FINAL – OWNER ACCEPTED` and not `PRODUCTION READY`.

**Artefakti:**
- `reports/temp/en-verbs-luna-linguistic-findings.json`
- `reports/temp/en-verbs-luna-full-linguistic-audit.json`
- `reports/temp/en-verbs-audit-data.json`