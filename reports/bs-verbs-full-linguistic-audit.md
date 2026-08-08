# BS–DE VERBS FULL LINGUISTIC AUDIT

**Date:** 2026-08-08
**Model:** GPT-5.6 Luna (verb-form audit, 10 verbs/batch)
**Mode:** AUDIT ONLY — no data files modified
**Baseline:** Post-translation `data/bs/verbs.js` (PR #326)

---

## Summary

```text
Verbs reviewed: 189 / 189
Forms reviewed: 945 / 945

infinitiv: 189 / 189
praesens: 189 / 189
imperfektIndikativ: 189 / 189
imperfektKonjunktiv: 189 / 189
partizipVergangenheit: 189 / 189

Data modifications: NONE

CRITICAL: 0
HIGH: 27
MEDIUM: 53
LOW: 2
SOURCE ISSUES: 0
INFORMATIONAL: 0
Clean verbs: 153 / 189
```

---

## Structural regression

| Check | Result |
|---|---|
| LV verbs = BS verbs (189) | PASS |
| Structural parity | PASS |
| ID parity | PASS |
| Order parity | PASS |
| DE READ-ONLY | PASS |
| JavaScript syntax | PASS |
| Mojibake | PASS |
| data/bs/verbs.js ≡ www/data/bs/verbs.js | PASS |

---

## Automatic checks

| Script | Result |
|---|---|
| `node scripts/audit-language-parity.js --lang=bs` | PASS |
| `node scripts/verify-bs-de-compliance.js` | PASS |
| `node scripts/audit-mojibake.js --lang=bs` | PASS (0 hits) |
| `node scripts/audit-translations.js --lang=bs` | PASS (no verbs-specific issues) |
| `node --check data/bs/verbs.js` | PASS |

---

## Audit methodology

- Each of 189 verbs audited with all 5 form slots in context.
- Luna evaluated DE meaning (primary), LV semantic intent (secondary), current BS form.
- Cross-form paradigm consistency checked per verb.
- Post-translation Konjunktiv II fixes from translation phase re-verified.
- 5 duplicate phantom IDs (`verb-125-schwindet`) from Luna response normalized; all 945 forms covered.

---

## Key finding patterns

1. **sein / haben confusion** — `sein` imperfektIndikativ/partizip used `Imao` instead of `Bio` (HIGH).
2. **schlafen** — `Ležati` used instead of `Spavati` across all 5 forms (HIGH, paradigm break).
3. **lassen vs staviti** — `Staviti` does not match German *lassen* (let/allow); should be `Ostaviti` (HIGH, 5 forms).
4. **tragen** — `Donijeti` (bring) instead of `Nositi` (wear/carry) (HIGH, 4 forms).
5. **Konjunktiv II** — residual issues: `dünken` (`Činilo se` → `Činilo bi se`), `sieden` impersonal vs personal.
6. **Partizip** — active past (`Pojeo`) vs passive participle (`Pojeđen`) for `fressen`, `schleifen` spelling.
7. **Reflexivity** — `rufen` infinitiv `Zvati se` should be `Zvati` (non-reflexive call).

---

## Findings (82 confirmed BS quality issues)

### 1. HIGH — `dünken` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-40-dünken
**German infinitive:** dünken
**Field:** imperfektKonjunktiv
**Current BS:** Činilo se
**Recommended BS:** Činilo bi se
**Reason:** Konjunktiv II mora biti izražen konstrukcijom s bi, ne jednostavnim prošlim vremenom.

### 2. HIGH — `fressen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-54-fressen
**German infinitive:** fressen
**Field:** partizipVergangenheit
**Current BS:** Pojeo / progutan
**Recommended BS:** Pojeđen / proždran
**Reason:** Forms do not match the participle’s eaten/devoured meaning: progutan means swallowed, and pojeo is active rather than passive.

### 3. HIGH — `gedeihen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-57-gedeihen
**German infinitive:** gedeihen
**Field:** infinitiv
**Current BS:** Uspjeti
**Recommended BS:** Napredovati
**Reason:** Gedeihen means to thrive or flourish; uspjeti means to succeed, which is a different verb meaning.

### 4. HIGH — `gedeihen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-57-gedeihen
**German infinitive:** gedeihen
**Field:** partizipVergangenheit
**Current BS:** Uspjelo
**Recommended BS:** Napredovalo (on je)
**Reason:** Uspjelo means succeeded, not thrived or flourished; the participle must retain gedeihen’s growth/prosperity meaning.

### 5. HIGH — `haben` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-60-haben
**German infinitive:** haben
**Field:** infinitiv
**Current BS:** Biti / posjedovati
**Recommended BS:** Imati / posjedovati
**Reason:** Biti means ‘to be’, not German haben. The correct Bosnian equivalent is imati; posjedovati is acceptable for possession.

### 6. HIGH — `lassen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-68-lassen
**German infinitive:** lassen
**Field:** infinitiv
**Current BS:** Staviti / pustiti
**Recommended BS:** Ostaviti / pustiti
**Reason:** Staviti means ‘to put’, not lassen. Ostaviti or pustiti expresses leaving or allowing.

### 7. HIGH — `lassen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-68-lassen
**German infinitive:** lassen
**Field:** praesens
**Current BS:** On stavlja / pušta
**Recommended BS:** On ostavlja / pušta
**Reason:** On stavlja means ‘he puts’, which does not match lassen. On ostavlja matches the ‘leave’ sense.

### 8. HIGH — `lassen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-68-lassen
**German infinitive:** lassen
**Field:** imperfektIndikativ
**Current BS:** Stavio je / pustio je
**Recommended BS:** Ostavio je / pustio je
**Reason:** Stavio je means ‘he put’; the corresponding lassen sense is ‘he left’ or ‘he let’.

### 9. HIGH — `lassen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-68-lassen
**German infinitive:** lassen
**Field:** imperfektKonjunktiv
**Current BS:** Stavio bi / pustio bi
**Recommended BS:** Ostavio bi / pustio bi
**Reason:** Stavio bi means ‘he would put’, not ‘he would leave/allow’. Ostavio bi matches lassen.

### 10. HIGH — `lassen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-68-lassen
**German infinitive:** lassen
**Field:** partizipVergangenheit
**Current BS:** Stavljen / pušten
**Recommended BS:** Ostavljen / pušten
**Reason:** Stavljen means ‘placed’, not the participial sense of lassen. Ostavljen matches ‘left’; pušten matches ‘allowed/released’.

### 11. HIGH — `rufen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-96-rufen
**German infinitive:** rufen
**Field:** infinitiv
**Current BS:** Zvati se
**Recommended BS:** Zvati
**Reason:** Rufen znači zvati; refleksivno zvati se znači biti nazvan, što ne odgovara njemačkom glagolu rufen.

### 12. HIGH — `schlafen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-109-schlafen
**German infinitive:** schlafen
**Field:** infinitiv
**Current BS:** Ležati
**Recommended BS:** Spavati
**Reason:** Ležati znači 'liegen', nicht 'schlafen'; der deutsche Infinitiv bezeichnet Schlafen.

### 13. HIGH — `schlafen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-109-schlafen
**German infinitive:** schlafen
**Field:** praesens
**Current BS:** On leži
**Recommended BS:** On spava
**Reason:** Leži bedeutet 'liegt'; als Übersetzung von er schläft ist 'On spava' erforderlich.

### 14. HIGH — `schlafen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-109-schlafen
**German infinitive:** schlafen
**Field:** imperfektIndikativ
**Current BS:** Ležao je
**Recommended BS:** Spavao je
**Reason:** Ležao je bedeutet 'er lag' und nicht 'er schlief'; die Vergangenheitsform muss semantisch schlafen ausdrücken.

### 15. HIGH — `schlafen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-109-schlafen
**German infinitive:** schlafen
**Field:** imperfektKonjunktiv
**Current BS:** Ležao bi
**Recommended BS:** Spavao bi
**Reason:** Ležao bi bedeutet 'er würde liegen'; korrekt für er schliefe ist 'Spavao bi'.

### 16. HIGH — `schlafen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-109-schlafen
**German infinitive:** schlafen
**Field:** partizipVergangenheit
**Current BS:** Ležao
**Recommended BS:** Spavao
**Reason:** Ležao bedeutet 'gelegen'; das deutsche Partizip geschlafen verlangt die semantische Entsprechung 'Spavao'.

### 17. HIGH — `schleifen` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-112-schleifen
**German infinitive:** schleifen
**Field:** partizipVergangenheit
**Current BS:** Brusen
**Recommended BS:** Brušen
**Reason:** Bosnian participle of brusiti is brušen; the current form lacks the required š diacritic.

### 18. HIGH — `schnauben` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-117-schnauben
**German infinitive:** schnauben
**Field:** imperfektKonjunktiv
**Current BS:** On bi frknuo
**Recommended BS:** On bi frktao
**Reason:** The conditional uses perfective frknuti, implying a single snort; schnauben requires the imperfective conditional frktati.

### 19. HIGH — `sein` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-129-sein
**German infinitive:** sein
**Field:** imperfektIndikativ
**Current BS:** Imao je
**Recommended BS:** Bio je
**Reason:** Imao je means 'he had'; war means 'he was'.

### 20. HIGH — `sein` / `partizipVergangenheit`

**Severity:** HIGH
**Verb ID:** verb-129-sein
**German infinitive:** sein
**Field:** partizipVergangenheit
**Current BS:** Imao
**Recommended BS:** Bio
**Reason:** Imao means 'had'; gewesen is the past participle of biti: bio.

### 21. HIGH — `sieden` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-131-sieden
**German infinitive:** sieden
**Field:** imperfektKonjunktiv
**Current BS:** Kuvalo bi
**Recommended BS:** On bi kuhao
**Reason:** Neuter kuvalo bi does not match the project’s masculine er-form convention and means it would boil rather than he would boil.

### 22. HIGH — `sollen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-136-sollen
**German infinitive:** sollen
**Field:** praesens
**Current BS:** On mora
**Recommended BS:** On treba
**Reason:** Mora means must and translates German müssen; sollen expresses should, ought to, or be expected to.

### 23. HIGH — `sollen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-136-sollen
**German infinitive:** sollen
**Field:** imperfektIndikativ
**Current BS:** Morao je
**Recommended BS:** Trebao je
**Reason:** Morao je means he had to, corresponding to musste; sollte means he should or was expected to.

### 24. HIGH — `tragen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-154-tragen
**German infinitive:** tragen
**Field:** infinitiv
**Current BS:** Donijeti
**Recommended BS:** Nositi
**Reason:** „Donijeti“ znači donijeti, dok „tragen“ i LV „nest“ znače nositi.

### 25. HIGH — `tragen` / `praesens`

**Severity:** HIGH
**Verb ID:** verb-154-tragen
**German infinitive:** tragen
**Field:** praesens
**Current BS:** On donosi
**Recommended BS:** On nosi
**Reason:** „Donosi“ znači donosi/bringing; za „tragen“ treba „nosi“.

### 26. HIGH — `tragen` / `imperfektIndikativ`

**Severity:** HIGH
**Verb ID:** verb-154-tragen
**German infinitive:** tragen
**Field:** imperfektIndikativ
**Current BS:** On je donio
**Recommended BS:** Nosio je
**Reason:** „Donio je“ znači donio je; njemački oblik znači nosio je.

### 27. HIGH — `tragen` / `imperfektKonjunktiv`

**Severity:** HIGH
**Verb ID:** verb-154-tragen
**German infinitive:** tragen
**Field:** imperfektKonjunktiv
**Current BS:** On bi donio
**Recommended BS:** On bi nosio
**Reason:** Kondicional je preveden glagolom „donijeti“, ali „tragen“ zahtijeva „nositi“.

### 28. MEDIUM — `bergen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-4-bergen
**German infinitive:** bergen
**Field:** infinitiv
**Current BS:** Skloniti
**Recommended BS:** Sakriti
**Reason:** Skloniti primarily means move aside or shelter, not hide; sakriti matches the DE/LV hiding sense.

### 29. MEDIUM — `bergen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-4-bergen
**German infinitive:** bergen
**Field:** praesens
**Current BS:** On sklanja
**Recommended BS:** On skriva
**Reason:** Sklanja means moves aside; skriva means hides and matches birgt/slēpj.

### 30. MEDIUM — `bergen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-4-bergen
**German infinitive:** bergen
**Field:** imperfektIndikativ
**Current BS:** Sklonio je
**Recommended BS:** Sakrio je
**Reason:** Sklonio je means moved aside/sheltered; sakrio je expresses hid.

### 31. MEDIUM — `bergen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-4-bergen
**German infinitive:** bergen
**Field:** imperfektKonjunktiv
**Current BS:** On bi sklonio
**Recommended BS:** On bi sakrio
**Reason:** The current conditional means would move aside; sakrio matches the hiding sense of bergen.

### 32. MEDIUM — `bergen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-4-bergen
**German infinitive:** bergen
**Field:** partizipVergangenheit
**Current BS:** Sklonjen / spašen
**Recommended BS:** Skriven / spašen
**Reason:** Sklonjen means put aside or sheltered; skriven directly matches the hidden sense while preserving spašen.

### 33. MEDIUM — `biegen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-7-biegen
**German infinitive:** biegen
**Field:** imperfektIndikativ
**Current BS:** Savio je
**Recommended BS:** Savijao je
**Reason:** The LV source and infinitive use the imperfective bending sense; savio je is perfective and breaks paradigm aspect.

### 34. MEDIUM — `biegen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-7-biegen
**German infinitive:** biegen
**Field:** imperfektKonjunktiv
**Current BS:** On bi savio
**Recommended BS:** On bi savijao
**Reason:** The conditional should preserve the imperfective bending sense indicated by locītu and Savijati.

### 35. MEDIUM — `bleichen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-31-bleichen
**German infinitive:** bleichen
**Field:** infinitiv
**Current BS:** Izbijeliti
**Recommended BS:** Izblijediti
**Reason:** The supplied German paradigm uses intransitive bleichen/geblichen (‘fade’), while Izbijeliti means ‘bleach/whiten’ transitively.

### 36. MEDIUM — `bleichen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-31-bleichen
**German infinitive:** bleichen
**Field:** praesens
**Current BS:** On izbjeljuje
**Recommended BS:** On blijedi
**Reason:** Izbjeljuje means ‘bleaches’; the German form aligns with the intransitive meaning ‘fades’, confirmed by geblichen.

### 37. MEDIUM — `brechen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-33-brechen
**German infinitive:** brechen
**Field:** imperfektKonjunktiv
**Current BS:** On bi slomio
**Recommended BS:** On bi lomio
**Reason:** Slomio is perfective ‘would break’; bräche/lauztu requires the imperfective conditional ‘would be breaking’.

### 38. MEDIUM — `brennen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-34-brennen
**German infinitive:** brennen
**Field:** imperfektIndikativ
**Current BS:** Gorjelo je
**Recommended BS:** On je gorio
**Reason:** Gorjelo je is neuter ‘it burned’; the German er-form requires masculine On je gorio.

### 39. MEDIUM — `brennen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-34-brennen
**German infinitive:** brennen
**Field:** imperfektKonjunktiv
**Current BS:** Gorjelo bi
**Recommended BS:** On bi gorio
**Reason:** Gorjelo bi is neuter; this er-form must use the masculine subject and participle: On bi gorio.

### 40. MEDIUM — `brennen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-34-brennen
**German infinitive:** brennen
**Field:** partizipVergangenheit
**Current BS:** Gorjelo
**Recommended BS:** Gorio
**Reason:** Gorjelo is a neuter form; the masculine participle corresponding to er is gorio.

### 41. MEDIUM — `bringen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-35-bringen
**German infinitive:** bringen
**Field:** partizipVergangenheit
**Current BS:** Nošen / donesen
**Recommended BS:** Donesen / dopremljen
**Reason:** Nošen means ‘carried/worn’, not ‘brought’; both alternatives should express brought/delivered.

### 42. MEDIUM — `denken` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-36-denken
**German infinitive:** denken
**Field:** partizipVergangenheit
**Current BS:** Zamišljen
**Recommended BS:** Mislio
**Reason:** Zamišljen means ‘imagined/designed’; gedacht in this paradigm corresponds to the thought form mislio.

### 43. MEDIUM — `dünken` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-40-dünken
**German infinitive:** dünken
**Field:** partizipVergangenheit
**Current BS:** Činilo se
**Recommended BS:** Smatran
**Reason:** „Činilo se“ je finitna prošla fraza, a ne particip; „smatran“ je odgovarajući participni ekvivalent.

### 44. MEDIUM — `fangen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-49-fangen
**German infinitive:** fangen
**Field:** infinitiv
**Current BS:** Uhvatiti
**Recommended BS:** Hvatati
**Reason:** LV izvor je nesvršeni glagol „ķert“, a „uhvatiti“ je svršen; osnovno značenje treba biti „hvatati“.

### 45. MEDIUM — `fechten` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-184-fechten
**German infinitive:** fechten
**Field:** infinitiv
**Current BS:** Svađati se
**Recommended BS:** Boriti se
**Reason:** Svađati se znači prepirati se, dok fechten u ovom izvoru znači boriti se.

### 46. MEDIUM — `fechten` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-184-fechten
**German infinitive:** fechten
**Field:** praesens
**Current BS:** On se svađa
**Recommended BS:** On se bori
**Reason:** Svađati se ne odgovara značenju boriti se/cīniti se.

### 47. MEDIUM — `fechten` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-184-fechten
**German infinitive:** fechten
**Field:** imperfektIndikativ
**Current BS:** Svađao se
**Recommended BS:** Borio se
**Reason:** Bosanski oblik znači da se prepirao, a ne da se borio.

### 48. MEDIUM — `fechten` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-184-fechten
**German infinitive:** fechten
**Field:** imperfektKonjunktiv
**Current BS:** On bi se svađao
**Recommended BS:** On bi se borio
**Reason:** Konjunktiv je gramatički ispravan, ali glagol svađati se semantički ne odgovara fechten.

### 49. MEDIUM — `fechten` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-184-fechten
**German infinitive:** fechten
**Field:** partizipVergangenheit
**Current BS:** Svađao se
**Recommended BS:** Borio se
**Reason:** Oblik izražava prepiranje, dok gefochten ovdje znači borio se.

### 50. MEDIUM — `flechten` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-185-flechten
**German infinitive:** flechten
**Field:** infinitiv
**Current BS:** Viti
**Recommended BS:** Plesti
**Reason:** Flechten znači plesti ili preplitati; viti prvenstveno znači uvijati ili savijati.

### 51. MEDIUM — `flechten` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-185-flechten
**German infinitive:** flechten
**Field:** praesens
**Current BS:** On vije
**Recommended BS:** On plete
**Reason:** Vije znači uvija, dok njemački oblik ovdje znači plete.

### 52. MEDIUM — `flechten` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-185-flechten
**German infinitive:** flechten
**Field:** imperfektIndikativ
**Current BS:** On je vio
**Recommended BS:** On je pleo
**Reason:** Bosanski vio znači uvijao, a flechten u ovom kontekstu znači plesti.

### 53. MEDIUM — `flechten` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-185-flechten
**German infinitive:** flechten
**Field:** imperfektKonjunktiv
**Current BS:** On bi vio
**Recommended BS:** On bi pleo
**Reason:** Bi-konstrukcija je ispravna, ali vio ne prenosi značenje plesti.

### 54. MEDIUM — `flechten` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-185-flechten
**German infinitive:** flechten
**Field:** partizipVergangenheit
**Current BS:** Vijen
**Recommended BS:** Pleten
**Reason:** Vijen znači uvijen ili namotan; geflochten znači pleten.

### 55. MEDIUM — `gehen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-58-gehen
**German infinitive:** gehen
**Field:** partizipVergangenheit
**Current BS:** Otišao (on je)
**Recommended BS:** Išao (on je)
**Reason:** Otišao means departed or went away, narrowing gehen; išao preserves the general meaning and matches the infinitive paradigm.

### 56. MEDIUM — `geschehen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-18-geschehen
**German infinitive:** geschehen
**Field:** imperfektIndikativ
**Current BS:** Događalo se
**Recommended BS:** Dogodilo se
**Reason:** Geschah denotes a completed happening; the imperfective Događalo se means 'was happening' rather than 'happened'.

### 57. MEDIUM — `geschehen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-18-geschehen
**German infinitive:** geschehen
**Field:** imperfektKonjunktiv
**Current BS:** Događalo bi se
**Recommended BS:** Dogodilo bi se
**Reason:** The perfective conditional better matches 'would happen'; Događalo bi se means 'would be happening'.

### 58. MEDIUM — `helfen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-63-helfen
**German infinitive:** helfen
**Field:** infinitiv
**Current BS:** Pomoći
**Recommended BS:** Pomagati
**Reason:** Pomoći is perfective ‘to help once’; helfen and LV palīdzēt express the imperfective activity pomagati.

### 59. MEDIUM — `helfen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-63-helfen
**German infinitive:** helfen
**Field:** imperfektIndikativ
**Current BS:** Pomogao je
**Recommended BS:** Pomagao je
**Reason:** Pomogao je is perfective ‘helped once’, while German er half and LV palīdzēja indicate ongoing or repeated helping.

### 60. MEDIUM — `nehmen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-82-nehmen
**German infinitive:** nehmen
**Field:** infinitiv
**Current BS:** Uzeti
**Recommended BS:** Uzimati
**Reason:** Uzeti is perfective ('take once'); German nehmen and Latvian ņemt are imperfective.

### 61. MEDIUM — `nehmen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-82-nehmen
**German infinitive:** nehmen
**Field:** imperfektIndikativ
**Current BS:** Uzeo je
**Recommended BS:** Uzimao je
**Reason:** Uzeo je is perfective; the German past and Latvian source express ongoing or habitual taking.

### 62. MEDIUM — `quellen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-87-quellen
**German infinitive:** quellen
**Field:** infinitiv
**Current BS:** Nabujati
**Recommended BS:** Bujati
**Reason:** Nabujati is perfective ('swell up'); German quellen and Latvian briest describe an imperfective process.

### 63. MEDIUM — `quellen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-87-quellen
**German infinitive:** quellen
**Field:** praesens
**Current BS:** On nabuja
**Recommended BS:** On buja
**Reason:** Nabuja is perfective; the German present and Latvian source require the imperfective bujati.

### 64. MEDIUM — `quellen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-87-quellen
**German infinitive:** quellen
**Field:** imperfektIndikativ
**Current BS:** Nabujala je
**Recommended BS:** Bujao je
**Reason:** The form is feminine and perfective, but German er and Latvian viņš require masculine imperfective bujao je.

### 65. MEDIUM — `quellen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-87-quellen
**German infinitive:** quellen
**Field:** imperfektKonjunktiv
**Current BS:** Nabujala bi
**Recommended BS:** Bujao bi
**Reason:** Nabujala bi is feminine and perfective; the German and Latvian sources require masculine conditional bujao bi.

### 66. MEDIUM — `quellen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-87-quellen
**German infinitive:** quellen
**Field:** partizipVergangenheit
**Current BS:** Nabujalo
**Recommended BS:** Nabujao
**Reason:** The current form is neuter, while German er ist and Latvian uzbriedis require a masculine participle.

### 67. MEDIUM — `saufen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-98-saufen
**German infinitive:** saufen
**Field:** partizipVergangenheit
**Current BS:** Popio
**Recommended BS:** Pio
**Reason:** Popio je perfektivno 'popiti' i znači popio do kraja; njemačko gesoffen ovdje odgovara nesvršenom pio, kao i navedenom piti.

### 68. MEDIUM — `sollen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-136-sollen
**German infinitive:** sollen
**Field:** partizipVergangenheit
**Current BS:** Morao
**Recommended BS:** Trebao
**Reason:** Morao means had to and corresponds to morao/morati; gesollt is better represented by trebao.

### 69. MEDIUM — `speien` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-137-speien
**German infinitive:** speien
**Field:** partizipVergangenheit
**Current BS:** Ispljuvan
**Recommended BS:** Pljuvan
**Reason:** Ispljuvan adds the meaning spat out; German gespien means spat or spewed without the directional prefix.

### 70. MEDIUM — `stecken` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-144-stecken
**German infinitive:** stecken
**Field:** infinitiv
**Current BS:** Gurati / utaknuti
**Recommended BS:** Umetati / umetnuti
**Reason:** Gurati znači gurati/potisnuti, ne precizno umetati ili zabosti; drugi oblik je odgovarajući za drugi navedeni aspekt.

### 71. MEDIUM — `stecken` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-144-stecken
**German infinitive:** stecken
**Field:** praesens
**Current BS:** On gura
**Recommended BS:** On umeće
**Reason:** Gura znači 'pushes', dok njemačko steckt i LV bāž označavaju umetanje ili stavljanje u nešto.

### 72. MEDIUM — `stecken` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-144-stecken
**German infinitive:** stecken
**Field:** imperfektIndikativ
**Current BS:** Gurnuo je ili je gurao
**Recommended BS:** Umetnuo je ili je umećao
**Reason:** Gurnuo/gurao prvenstveno znači 'pushed/was pushing', a izvorno značenje je umetanje ili stavljanje.

### 73. MEDIUM — `stecken` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-144-stecken
**German infinitive:** stecken
**Field:** imperfektKonjunktiv
**Current BS:** On bi gurnuo
**Recommended BS:** On bi umetnuo
**Reason:** Konstrukcija bi je pravilna, ali gurnuo mijenja značenje u 'pogurao'; potrebno je zadržati značenje umetanja.

### 74. MEDIUM — `stecken` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-144-stecken
**German infinitive:** stecken
**Field:** partizipVergangenheit
**Current BS:** Gurnut
**Recommended BS:** Umetnut
**Reason:** Gurnut znači 'gurnut/poguran', ne 'umetnut'; LV iebāzts i gesteckt označavaju umetnut predmet.

### 75. MEDIUM — `stoßen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-151-stoßen
**German infinitive:** stoßen
**Field:** infinitiv
**Current BS:** Gurnuti
**Recommended BS:** Gurati
**Reason:** „Gurnuti“ je svršen i označava jednokratno guranje; njemački i LV izvor ovdje traže nesvršeni glagol.

### 76. MEDIUM — `stoßen` / `imperfektIndikativ`

**Severity:** MEDIUM
**Verb ID:** verb-151-stoßen
**German infinitive:** stoßen
**Field:** imperfektIndikativ
**Current BS:** Gurnuo je
**Recommended BS:** Gurao je
**Reason:** Sadašnji oblik je od „gurati“, ali prošli oblik je prešao na svršeni „gurnuti“; treba uskladiti paradigmu.

### 77. MEDIUM — `stoßen` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-151-stoßen
**German infinitive:** stoßen
**Field:** imperfektKonjunktiv
**Current BS:** On bi gurnuo
**Recommended BS:** On bi gurao
**Reason:** Kondicional treba ostati u nesvršenoj paradigmi „gurati“, u skladu s infinitivom i prezentom.

### 78. MEDIUM — `stoßen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-151-stoßen
**German infinitive:** stoßen
**Field:** partizipVergangenheit
**Current BS:** Gurnut
**Recommended BS:** Guran
**Reason:** „Gurnut“ pripada svršenom „gurnuti“; za paradigmu „gurati“ potreban je particip „guran“.

### 79. MEDIUM — `trinken` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-158-trinken
**German infinitive:** trinken
**Field:** partizipVergangenheit
**Current BS:** Popio
**Recommended BS:** Pio
**Reason:** „Popio“ dodaje svršenost i značenje „popio do kraja“; njemačko „getrunken“ ovdje odgovara nesvršenom „pio“.

### 80. MEDIUM — `weben` / `imperfektKonjunktiv`

**Severity:** MEDIUM
**Verb ID:** verb-167-weben
**German infinitive:** weben
**Field:** imperfektKonjunktiv
**Current BS:** On bi tkala
**Recommended BS:** On bi tkao
**Reason:** The German form is third-person singular; the Bosnian conditional incorrectly uses feminine past form tkala instead of masculine tkao.

### 81. LOW — `lesen` / `partizipVergangenheit`

**Severity:** LOW
**Verb ID:** verb-72-lesen
**German infinitive:** lesen
**Field:** partizipVergangenheit
**Current BS:** Pročitan
**Recommended BS:** Čitan
**Reason:** Pročitan is perfective 'read through'; čitan matches German gelesen and the imperfective paradigm more directly.

### 82. LOW — `stehen` / `imperfektKonjunktiv`

**Severity:** LOW
**Verb ID:** verb-145-stehen
**German infinitive:** stehen
**Field:** imperfektKonjunktiv
**Current BS:** On bi stajao / on bi stajao
**Recommended BS:** On bi stajao / On bi stajao
**Reason:** Projektna konvencija zahtijeva početno veliko 'On' u oba er-oblika.

---

## CONFIRMED REPAIRS

Machine-actionable repair list for next cycle.

### HIGH (27)

**verb-40-dünken** — `dünken` / `imperfektKonjunktiv`

```text
Current BS: Činilo se
→
Exact recommended BS: Činilo bi se
Severity: HIGH
```

**verb-54-fressen** — `fressen` / `partizipVergangenheit`

```text
Current BS: Pojeo / progutan
→
Exact recommended BS: Pojeđen / proždran
Severity: HIGH
```

**verb-57-gedeihen** — `gedeihen` / `infinitiv`

```text
Current BS: Uspjeti
→
Exact recommended BS: Napredovati
Severity: HIGH
```

**verb-57-gedeihen** — `gedeihen` / `partizipVergangenheit`

```text
Current BS: Uspjelo
→
Exact recommended BS: Napredovalo (on je)
Severity: HIGH
```

**verb-60-haben** — `haben` / `infinitiv`

```text
Current BS: Biti / posjedovati
→
Exact recommended BS: Imati / posjedovati
Severity: HIGH
```

**verb-68-lassen** — `lassen` / `infinitiv`

```text
Current BS: Staviti / pustiti
→
Exact recommended BS: Ostaviti / pustiti
Severity: HIGH
```

**verb-68-lassen** — `lassen` / `praesens`

```text
Current BS: On stavlja / pušta
→
Exact recommended BS: On ostavlja / pušta
Severity: HIGH
```

**verb-68-lassen** — `lassen` / `imperfektIndikativ`

```text
Current BS: Stavio je / pustio je
→
Exact recommended BS: Ostavio je / pustio je
Severity: HIGH
```

**verb-68-lassen** — `lassen` / `imperfektKonjunktiv`

```text
Current BS: Stavio bi / pustio bi
→
Exact recommended BS: Ostavio bi / pustio bi
Severity: HIGH
```

**verb-68-lassen** — `lassen` / `partizipVergangenheit`

```text
Current BS: Stavljen / pušten
→
Exact recommended BS: Ostavljen / pušten
Severity: HIGH
```

**verb-96-rufen** — `rufen` / `infinitiv`

```text
Current BS: Zvati se
→
Exact recommended BS: Zvati
Severity: HIGH
```

**verb-109-schlafen** — `schlafen` / `infinitiv`

```text
Current BS: Ležati
→
Exact recommended BS: Spavati
Severity: HIGH
```

**verb-109-schlafen** — `schlafen` / `praesens`

```text
Current BS: On leži
→
Exact recommended BS: On spava
Severity: HIGH
```

**verb-109-schlafen** — `schlafen` / `imperfektIndikativ`

```text
Current BS: Ležao je
→
Exact recommended BS: Spavao je
Severity: HIGH
```

**verb-109-schlafen** — `schlafen` / `imperfektKonjunktiv`

```text
Current BS: Ležao bi
→
Exact recommended BS: Spavao bi
Severity: HIGH
```

**verb-109-schlafen** — `schlafen` / `partizipVergangenheit`

```text
Current BS: Ležao
→
Exact recommended BS: Spavao
Severity: HIGH
```

**verb-112-schleifen** — `schleifen` / `partizipVergangenheit`

```text
Current BS: Brusen
→
Exact recommended BS: Brušen
Severity: HIGH
```

**verb-117-schnauben** — `schnauben` / `imperfektKonjunktiv`

```text
Current BS: On bi frknuo
→
Exact recommended BS: On bi frktao
Severity: HIGH
```

**verb-129-sein** — `sein` / `imperfektIndikativ`

```text
Current BS: Imao je
→
Exact recommended BS: Bio je
Severity: HIGH
```

**verb-129-sein** — `sein` / `partizipVergangenheit`

```text
Current BS: Imao
→
Exact recommended BS: Bio
Severity: HIGH
```

**verb-131-sieden** — `sieden` / `imperfektKonjunktiv`

```text
Current BS: Kuvalo bi
→
Exact recommended BS: On bi kuhao
Severity: HIGH
```

**verb-136-sollen** — `sollen` / `praesens`

```text
Current BS: On mora
→
Exact recommended BS: On treba
Severity: HIGH
```

**verb-136-sollen** — `sollen` / `imperfektIndikativ`

```text
Current BS: Morao je
→
Exact recommended BS: Trebao je
Severity: HIGH
```

**verb-154-tragen** — `tragen` / `infinitiv`

```text
Current BS: Donijeti
→
Exact recommended BS: Nositi
Severity: HIGH
```

**verb-154-tragen** — `tragen` / `praesens`

```text
Current BS: On donosi
→
Exact recommended BS: On nosi
Severity: HIGH
```

**verb-154-tragen** — `tragen` / `imperfektIndikativ`

```text
Current BS: On je donio
→
Exact recommended BS: Nosio je
Severity: HIGH
```

**verb-154-tragen** — `tragen` / `imperfektKonjunktiv`

```text
Current BS: On bi donio
→
Exact recommended BS: On bi nosio
Severity: HIGH
```

### MEDIUM (53)

**verb-4-bergen** — `bergen` / `infinitiv`

```text
Current BS: Skloniti
→
Exact recommended BS: Sakriti
Severity: MEDIUM
```

**verb-4-bergen** — `bergen` / `praesens`

```text
Current BS: On sklanja
→
Exact recommended BS: On skriva
Severity: MEDIUM
```

**verb-4-bergen** — `bergen` / `imperfektIndikativ`

```text
Current BS: Sklonio je
→
Exact recommended BS: Sakrio je
Severity: MEDIUM
```

**verb-4-bergen** — `bergen` / `imperfektKonjunktiv`

```text
Current BS: On bi sklonio
→
Exact recommended BS: On bi sakrio
Severity: MEDIUM
```

**verb-4-bergen** — `bergen` / `partizipVergangenheit`

```text
Current BS: Sklonjen / spašen
→
Exact recommended BS: Skriven / spašen
Severity: MEDIUM
```

**verb-7-biegen** — `biegen` / `imperfektIndikativ`

```text
Current BS: Savio je
→
Exact recommended BS: Savijao je
Severity: MEDIUM
```

**verb-7-biegen** — `biegen` / `imperfektKonjunktiv`

```text
Current BS: On bi savio
→
Exact recommended BS: On bi savijao
Severity: MEDIUM
```

**verb-31-bleichen** — `bleichen` / `infinitiv`

```text
Current BS: Izbijeliti
→
Exact recommended BS: Izblijediti
Severity: MEDIUM
```

**verb-31-bleichen** — `bleichen` / `praesens`

```text
Current BS: On izbjeljuje
→
Exact recommended BS: On blijedi
Severity: MEDIUM
```

**verb-33-brechen** — `brechen` / `imperfektKonjunktiv`

```text
Current BS: On bi slomio
→
Exact recommended BS: On bi lomio
Severity: MEDIUM
```

**verb-34-brennen** — `brennen` / `imperfektIndikativ`

```text
Current BS: Gorjelo je
→
Exact recommended BS: On je gorio
Severity: MEDIUM
```

**verb-34-brennen** — `brennen` / `imperfektKonjunktiv`

```text
Current BS: Gorjelo bi
→
Exact recommended BS: On bi gorio
Severity: MEDIUM
```

**verb-34-brennen** — `brennen` / `partizipVergangenheit`

```text
Current BS: Gorjelo
→
Exact recommended BS: Gorio
Severity: MEDIUM
```

**verb-35-bringen** — `bringen` / `partizipVergangenheit`

```text
Current BS: Nošen / donesen
→
Exact recommended BS: Donesen / dopremljen
Severity: MEDIUM
```

**verb-36-denken** — `denken` / `partizipVergangenheit`

```text
Current BS: Zamišljen
→
Exact recommended BS: Mislio
Severity: MEDIUM
```

**verb-40-dünken** — `dünken` / `partizipVergangenheit`

```text
Current BS: Činilo se
→
Exact recommended BS: Smatran
Severity: MEDIUM
```

**verb-49-fangen** — `fangen` / `infinitiv`

```text
Current BS: Uhvatiti
→
Exact recommended BS: Hvatati
Severity: MEDIUM
```

**verb-184-fechten** — `fechten` / `infinitiv`

```text
Current BS: Svađati se
→
Exact recommended BS: Boriti se
Severity: MEDIUM
```

**verb-184-fechten** — `fechten` / `praesens`

```text
Current BS: On se svađa
→
Exact recommended BS: On se bori
Severity: MEDIUM
```

**verb-184-fechten** — `fechten` / `imperfektIndikativ`

```text
Current BS: Svađao se
→
Exact recommended BS: Borio se
Severity: MEDIUM
```

**verb-184-fechten** — `fechten` / `imperfektKonjunktiv`

```text
Current BS: On bi se svađao
→
Exact recommended BS: On bi se borio
Severity: MEDIUM
```

**verb-184-fechten** — `fechten` / `partizipVergangenheit`

```text
Current BS: Svađao se
→
Exact recommended BS: Borio se
Severity: MEDIUM
```

**verb-185-flechten** — `flechten` / `infinitiv`

```text
Current BS: Viti
→
Exact recommended BS: Plesti
Severity: MEDIUM
```

**verb-185-flechten** — `flechten` / `praesens`

```text
Current BS: On vije
→
Exact recommended BS: On plete
Severity: MEDIUM
```

**verb-185-flechten** — `flechten` / `imperfektIndikativ`

```text
Current BS: On je vio
→
Exact recommended BS: On je pleo
Severity: MEDIUM
```

**verb-185-flechten** — `flechten` / `imperfektKonjunktiv`

```text
Current BS: On bi vio
→
Exact recommended BS: On bi pleo
Severity: MEDIUM
```

**verb-185-flechten** — `flechten` / `partizipVergangenheit`

```text
Current BS: Vijen
→
Exact recommended BS: Pleten
Severity: MEDIUM
```

**verb-58-gehen** — `gehen` / `partizipVergangenheit`

```text
Current BS: Otišao (on je)
→
Exact recommended BS: Išao (on je)
Severity: MEDIUM
```

**verb-18-geschehen** — `geschehen` / `imperfektIndikativ`

```text
Current BS: Događalo se
→
Exact recommended BS: Dogodilo se
Severity: MEDIUM
```

**verb-18-geschehen** — `geschehen` / `imperfektKonjunktiv`

```text
Current BS: Događalo bi se
→
Exact recommended BS: Dogodilo bi se
Severity: MEDIUM
```

**verb-63-helfen** — `helfen` / `infinitiv`

```text
Current BS: Pomoći
→
Exact recommended BS: Pomagati
Severity: MEDIUM
```

**verb-63-helfen** — `helfen` / `imperfektIndikativ`

```text
Current BS: Pomogao je
→
Exact recommended BS: Pomagao je
Severity: MEDIUM
```

**verb-82-nehmen** — `nehmen` / `infinitiv`

```text
Current BS: Uzeti
→
Exact recommended BS: Uzimati
Severity: MEDIUM
```

**verb-82-nehmen** — `nehmen` / `imperfektIndikativ`

```text
Current BS: Uzeo je
→
Exact recommended BS: Uzimao je
Severity: MEDIUM
```

**verb-87-quellen** — `quellen` / `infinitiv`

```text
Current BS: Nabujati
→
Exact recommended BS: Bujati
Severity: MEDIUM
```

**verb-87-quellen** — `quellen` / `praesens`

```text
Current BS: On nabuja
→
Exact recommended BS: On buja
Severity: MEDIUM
```

**verb-87-quellen** — `quellen` / `imperfektIndikativ`

```text
Current BS: Nabujala je
→
Exact recommended BS: Bujao je
Severity: MEDIUM
```

**verb-87-quellen** — `quellen` / `imperfektKonjunktiv`

```text
Current BS: Nabujala bi
→
Exact recommended BS: Bujao bi
Severity: MEDIUM
```

**verb-87-quellen** — `quellen` / `partizipVergangenheit`

```text
Current BS: Nabujalo
→
Exact recommended BS: Nabujao
Severity: MEDIUM
```

**verb-98-saufen** — `saufen` / `partizipVergangenheit`

```text
Current BS: Popio
→
Exact recommended BS: Pio
Severity: MEDIUM
```

**verb-136-sollen** — `sollen` / `partizipVergangenheit`

```text
Current BS: Morao
→
Exact recommended BS: Trebao
Severity: MEDIUM
```

**verb-137-speien** — `speien` / `partizipVergangenheit`

```text
Current BS: Ispljuvan
→
Exact recommended BS: Pljuvan
Severity: MEDIUM
```

**verb-144-stecken** — `stecken` / `infinitiv`

```text
Current BS: Gurati / utaknuti
→
Exact recommended BS: Umetati / umetnuti
Severity: MEDIUM
```

**verb-144-stecken** — `stecken` / `praesens`

```text
Current BS: On gura
→
Exact recommended BS: On umeće
Severity: MEDIUM
```

**verb-144-stecken** — `stecken` / `imperfektIndikativ`

```text
Current BS: Gurnuo je ili je gurao
→
Exact recommended BS: Umetnuo je ili je umećao
Severity: MEDIUM
```

**verb-144-stecken** — `stecken` / `imperfektKonjunktiv`

```text
Current BS: On bi gurnuo
→
Exact recommended BS: On bi umetnuo
Severity: MEDIUM
```

**verb-144-stecken** — `stecken` / `partizipVergangenheit`

```text
Current BS: Gurnut
→
Exact recommended BS: Umetnut
Severity: MEDIUM
```

**verb-151-stoßen** — `stoßen` / `infinitiv`

```text
Current BS: Gurnuti
→
Exact recommended BS: Gurati
Severity: MEDIUM
```

**verb-151-stoßen** — `stoßen` / `imperfektIndikativ`

```text
Current BS: Gurnuo je
→
Exact recommended BS: Gurao je
Severity: MEDIUM
```

**verb-151-stoßen** — `stoßen` / `imperfektKonjunktiv`

```text
Current BS: On bi gurnuo
→
Exact recommended BS: On bi gurao
Severity: MEDIUM
```

**verb-151-stoßen** — `stoßen` / `partizipVergangenheit`

```text
Current BS: Gurnut
→
Exact recommended BS: Guran
Severity: MEDIUM
```

**verb-158-trinken** — `trinken` / `partizipVergangenheit`

```text
Current BS: Popio
→
Exact recommended BS: Pio
Severity: MEDIUM
```

**verb-167-weben** — `weben` / `imperfektKonjunktiv`

```text
Current BS: On bi tkala
→
Exact recommended BS: On bi tkao
Severity: MEDIUM
```

### LOW (2)

**verb-72-lesen** — `lesen` / `partizipVergangenheit`

```text
Current BS: Pročitan
→
Exact recommended BS: Čitan
Severity: LOW
```

**verb-145-stehen** — `stehen` / `imperfektKonjunktiv`

```text
Current BS: On bi stajao / on bi stajao
→
Exact recommended BS: On bi stajao / On bi stajao
Severity: LOW
```

---

## SOURCE ISSUES — DO NOT FIX IN BS VERBS

**NONE**

---

## 189-VERB VERIFICATION TABLE

| # | ID | German | 5 forms reviewed | Verdict | Findings |
|---:|---|---|---|---|---:|
| 1 | `verb-0-backen` | backen | 5/5 | PASS | 0 |
| 2 | `verb-1-befehlen` | befehlen | 5/5 | PASS | 0 |
| 3 | `verb-2-beginnen` | beginnen | 5/5 | PASS | 0 |
| 4 | `verb-3-beißen` | beißen | 5/5 | PASS | 0 |
| 5 | `verb-4-bergen` | bergen | 5/5 | FINDING | 5 |
| 6 | `verb-5-bersten` | bersten | 5/5 | PASS | 0 |
| 7 | `verb-6-bewegen` | bewegen | 5/5 | PASS | 0 |
| 8 | `verb-7-biegen` | biegen | 5/5 | FINDING | 2 |
| 9 | `verb-8-bieten` | bieten | 5/5 | PASS | 0 |
| 10 | `verb-9-binden` | binden | 5/5 | PASS | 0 |
| 11 | `verb-10-bitten` | bitten | 5/5 | PASS | 0 |
| 12 | `verb-11-blasen` | blasen | 5/5 | PASS | 0 |
| 13 | `verb-12-gären` | gären | 5/5 | PASS | 0 |
| 14 | `verb-13-gebären` | gebären | 5/5 | PASS | 0 |
| 15 | `verb-14-gelingen` | gelingen | 5/5 | PASS | 0 |
| 16 | `verb-15-gelten` | gelten | 5/5 | PASS | 0 |
| 17 | `verb-16-genesen` | genesen | 5/5 | PASS | 0 |
| 18 | `verb-17-genießen` | genießen | 5/5 | PASS | 0 |
| 19 | `verb-18-geschehen` | geschehen | 5/5 | FINDING | 2 |
| 20 | `verb-19-gießen` | gießen | 5/5 | PASS | 0 |
| 21 | `verb-20-gleichen` | gleichen | 5/5 | PASS | 0 |
| 22 | `verb-21-gleiten` | gleiten | 5/5 | PASS | 0 |
| 23 | `verb-22-glimmen` | glimmen | 5/5 | PASS | 0 |
| 24 | `verb-23-graben` | graben | 5/5 | PASS | 0 |
| 25 | `verb-24-greifen` | greifen | 5/5 | PASS | 0 |
| 26 | `verb-25-hauen` | hauen | 5/5 | PASS | 0 |
| 27 | `verb-26-heben` | heben | 5/5 | PASS | 0 |
| 28 | `verb-27-kennen` | kennen | 5/5 | PASS | 0 |
| 29 | `verb-28-klingen` | klingen | 5/5 | PASS | 0 |
| 30 | `verb-29-kneifen` | kneifen | 5/5 | PASS | 0 |
| 31 | `verb-30-bleiben` | bleiben | 5/5 | PASS | 0 |
| 32 | `verb-31-bleichen` | bleichen | 5/5 | FINDING | 2 |
| 33 | `verb-32-braten` | braten | 5/5 | PASS | 0 |
| 34 | `verb-33-brechen` | brechen | 5/5 | FINDING | 1 |
| 35 | `verb-34-brennen` | brennen | 5/5 | FINDING | 3 |
| 36 | `verb-35-bringen` | bringen | 5/5 | FINDING | 1 |
| 37 | `verb-36-denken` | denken | 5/5 | FINDING | 1 |
| 38 | `verb-37-dingen` | dingen | 5/5 | PASS | 0 |
| 39 | `verb-38-dreschen` | dreschen | 5/5 | PASS | 0 |
| 40 | `verb-39-dringen` | dringen | 5/5 | PASS | 0 |
| 41 | `verb-40-dünken` | dünken | 5/5 | FINDING | 2 |
| 42 | `verb-41-dürfen` | dürfen | 5/5 | PASS | 0 |
| 43 | `verb-42-empfehlen` | empfehlen | 5/5 | PASS | 0 |
| 44 | `verb-43-empfinden` | empfinden | 5/5 | PASS | 0 |
| 45 | `verb-44-erlöschen` | erlöschen | 5/5 | PASS | 0 |
| 46 | `verb-45-erschrecken` | erschrecken | 5/5 | PASS | 0 |
| 47 | `verb-46-essen` | essen | 5/5 | PASS | 0 |
| 48 | `verb-47-fahren` | fahren | 5/5 | PASS | 0 |
| 49 | `verb-48-fallen` | fallen | 5/5 | PASS | 0 |
| 50 | `verb-49-fangen` | fangen | 5/5 | FINDING | 1 |
| 51 | `verb-50-finden` | finden | 5/5 | PASS | 0 |
| 52 | `verb-51-fliegen` | fliegen | 5/5 | PASS | 0 |
| 53 | `verb-52-fliehen` | fliehen | 5/5 | PASS | 0 |
| 54 | `verb-53-fließen` | fließen | 5/5 | PASS | 0 |
| 55 | `verb-54-fressen` | fressen | 5/5 | FINDING | 1 |
| 56 | `verb-55-frieren` | frieren | 5/5 | PASS | 0 |
| 57 | `verb-56-geben` | geben | 5/5 | PASS | 0 |
| 58 | `verb-57-gedeihen` | gedeihen | 5/5 | FINDING | 2 |
| 59 | `verb-58-gehen` | gehen | 5/5 | FINDING | 1 |
| 60 | `verb-59-gewinnen` | gewinnen | 5/5 | PASS | 0 |
| 61 | `verb-60-haben` | haben | 5/5 | FINDING | 1 |
| 62 | `verb-61-halten` | halten | 5/5 | PASS | 0 |
| 63 | `verb-62-heißen` | heißen | 5/5 | PASS | 0 |
| 64 | `verb-63-helfen` | helfen | 5/5 | FINDING | 2 |
| 65 | `verb-64-kommen` | kommen | 5/5 | PASS | 0 |
| 66 | `verb-65-können` | können | 5/5 | PASS | 0 |
| 67 | `verb-66-kriechen` | kriechen | 5/5 | PASS | 0 |
| 68 | `verb-67-laden` | laden | 5/5 | PASS | 0 |
| 69 | `verb-68-lassen` | lassen | 5/5 | FINDING | 5 |
| 70 | `verb-69-laufen` | laufen | 5/5 | PASS | 0 |
| 71 | `verb-70-leiden` | leiden | 5/5 | PASS | 0 |
| 72 | `verb-71-leihen` | leihen | 5/5 | PASS | 0 |
| 73 | `verb-72-lesen` | lesen | 5/5 | FINDING | 1 |
| 74 | `verb-73-liegen` | liegen | 5/5 | PASS | 0 |
| 75 | `verb-74-lügen` | lügen | 5/5 | PASS | 0 |
| 76 | `verb-75-mahlen` | mahlen | 5/5 | PASS | 0 |
| 77 | `verb-76-meiden` | meiden | 5/5 | PASS | 0 |
| 78 | `verb-77-melken` | melken | 5/5 | PASS | 0 |
| 79 | `verb-78-messen` | messen | 5/5 | PASS | 0 |
| 80 | `verb-79-misslingen` | misslingen | 5/5 | PASS | 0 |
| 81 | `verb-80-mögen` | mögen | 5/5 | PASS | 0 |
| 82 | `verb-81-müssen` | müssen | 5/5 | PASS | 0 |
| 83 | `verb-82-nehmen` | nehmen | 5/5 | FINDING | 2 |
| 84 | `verb-83-nennen` | nennen | 5/5 | PASS | 0 |
| 85 | `verb-84-pfeifen` | pfeifen | 5/5 | PASS | 0 |
| 86 | `verb-85-pflegen` | pflegen | 5/5 | PASS | 0 |
| 87 | `verb-86-preisen` | preisen | 5/5 | PASS | 0 |
| 88 | `verb-87-quellen` | quellen | 5/5 | FINDING | 5 |
| 89 | `verb-88-raten` | raten | 5/5 | PASS | 0 |
| 90 | `verb-89-reiben` | reiben | 5/5 | PASS | 0 |
| 91 | `verb-90-reißen` | reißen | 5/5 | PASS | 0 |
| 92 | `verb-91-reiten` | reiten | 5/5 | PASS | 0 |
| 93 | `verb-92-rennen` | rennen | 5/5 | PASS | 0 |
| 94 | `verb-93-riechen` | riechen | 5/5 | PASS | 0 |
| 95 | `verb-94-ringen` | ringen | 5/5 | PASS | 0 |
| 96 | `verb-95-rinnen` | rinnen | 5/5 | PASS | 0 |
| 97 | `verb-96-rufen` | rufen | 5/5 | FINDING | 1 |
| 98 | `verb-97-salzen` | salzen | 5/5 | PASS | 0 |
| 99 | `verb-98-saufen` | saufen | 5/5 | FINDING | 1 |
| 100 | `verb-99-saugen` | saugen | 5/5 | PASS | 0 |
| 101 | `verb-100-schaffen` | schaffen | 5/5 | PASS | 0 |
| 102 | `verb-101-schallen` | schallen | 5/5 | PASS | 0 |
| 103 | `verb-102-scheiden` | scheiden | 5/5 | PASS | 0 |
| 104 | `verb-103-scheinen` | scheinen | 5/5 | PASS | 0 |
| 105 | `verb-104-schelten` | schelten | 5/5 | PASS | 0 |
| 106 | `verb-105-scheren` | scheren | 5/5 | PASS | 0 |
| 107 | `verb-106-schieben` | schieben | 5/5 | PASS | 0 |
| 108 | `verb-107-schießen` | schießen | 5/5 | PASS | 0 |
| 109 | `verb-108-schinden` | schinden | 5/5 | PASS | 0 |
| 110 | `verb-109-schlafen` | schlafen | 5/5 | FINDING | 5 |
| 111 | `verb-110-schlagen` | schlagen | 5/5 | PASS | 0 |
| 112 | `verb-111-schleichen` | schleichen | 5/5 | PASS | 0 |
| 113 | `verb-112-schleifen` | schleifen | 5/5 | FINDING | 1 |
| 114 | `verb-113-schließen` | schließen | 5/5 | PASS | 0 |
| 115 | `verb-114-schlingen` | schlingen | 5/5 | PASS | 0 |
| 116 | `verb-115-schmeißen` | schmeißen | 5/5 | PASS | 0 |
| 117 | `verb-116-schmelzen` | schmelzen | 5/5 | PASS | 0 |
| 118 | `verb-117-schnauben` | schnauben | 5/5 | FINDING | 1 |
| 119 | `verb-118-schneiden` | schneiden | 5/5 | PASS | 0 |
| 120 | `verb-119-schreiben` | schreiben | 5/5 | PASS | 0 |
| 121 | `verb-120-schreien` | schreien | 5/5 | PASS | 0 |
| 122 | `verb-121-schreiten` | schreiten | 5/5 | PASS | 0 |
| 123 | `verb-122-schweigen` | schweigen | 5/5 | PASS | 0 |
| 124 | `verb-123-schwellen` | schwellen | 5/5 | PASS | 0 |
| 125 | `verb-124-schwimmen` | schwimmen | 5/5 | PASS | 0 |
| 126 | `verb-125-schwinden` | schwinden | 5/5 | PASS | 0 |
| 127 | `verb-126-schwingen` | schwingen | 5/5 | PASS | 0 |
| 128 | `verb-127-schwören` | schwören | 5/5 | PASS | 0 |
| 129 | `verb-128-sehen` | sehen | 5/5 | PASS | 0 |
| 130 | `verb-129-sein` | sein | 5/5 | FINDING | 2 |
| 131 | `verb-130-senden` | senden | 5/5 | PASS | 0 |
| 132 | `verb-131-sieden` | sieden | 5/5 | FINDING | 1 |
| 133 | `verb-132-singen` | singen | 5/5 | PASS | 0 |
| 134 | `verb-133-sinken` | sinken | 5/5 | PASS | 0 |
| 135 | `verb-134-sinnen` | sinnen | 5/5 | PASS | 0 |
| 136 | `verb-135-sitzen` | sitzen | 5/5 | PASS | 0 |
| 137 | `verb-136-sollen` | sollen | 5/5 | FINDING | 3 |
| 138 | `verb-137-speien` | speien | 5/5 | FINDING | 1 |
| 139 | `verb-138-spinnen` | spinnen | 5/5 | PASS | 0 |
| 140 | `verb-139-spleißen` | spleißen | 5/5 | PASS | 0 |
| 141 | `verb-140-sprechen` | sprechen | 5/5 | PASS | 0 |
| 142 | `verb-141-sprießen` | sprießen | 5/5 | PASS | 0 |
| 143 | `verb-142-springen` | springen | 5/5 | PASS | 0 |
| 144 | `verb-143-stechen` | stechen | 5/5 | PASS | 0 |
| 145 | `verb-144-stecken` | stecken | 5/5 | FINDING | 5 |
| 146 | `verb-145-stehen` | stehen | 5/5 | FINDING | 1 |
| 147 | `verb-146-stehlen` | stehlen | 5/5 | PASS | 0 |
| 148 | `verb-147-steigen` | steigen | 5/5 | PASS | 0 |
| 149 | `verb-148-sterben` | sterben | 5/5 | PASS | 0 |
| 150 | `verb-149-stieben` | stieben | 5/5 | PASS | 0 |
| 151 | `verb-150-stinken` | stinken | 5/5 | PASS | 0 |
| 152 | `verb-151-stoßen` | stoßen | 5/5 | FINDING | 4 |
| 153 | `verb-152-streichen` | streichen | 5/5 | PASS | 0 |
| 154 | `verb-153-streiten` | streiten | 5/5 | PASS | 0 |
| 155 | `verb-154-tragen` | tragen | 5/5 | FINDING | 4 |
| 156 | `verb-155-treffen` | treffen | 5/5 | PASS | 0 |
| 157 | `verb-156-treiben` | treiben | 5/5 | PASS | 0 |
| 158 | `verb-157-treten` | treten | 5/5 | PASS | 0 |
| 159 | `verb-158-trinken` | trinken | 5/5 | FINDING | 1 |
| 160 | `verb-159-trügen` | trügen | 5/5 | PASS | 0 |
| 161 | `verb-160-tun` | tun | 5/5 | PASS | 0 |
| 162 | `verb-161-verderben` | verderben | 5/5 | PASS | 0 |
| 163 | `verb-162-verdrießen` | verdrießen | 5/5 | PASS | 0 |
| 164 | `verb-163-vergessen` | vergessen | 5/5 | PASS | 0 |
| 165 | `verb-164-verlieren` | verlieren | 5/5 | PASS | 0 |
| 166 | `verb-165-wachsen` | wachsen | 5/5 | PASS | 0 |
| 167 | `verb-166-waschen` | waschen | 5/5 | PASS | 0 |
| 168 | `verb-167-weben` | weben | 5/5 | FINDING | 1 |
| 169 | `verb-168-weichen` | weichen | 5/5 | PASS | 0 |
| 170 | `verb-169-weisen` | weisen | 5/5 | PASS | 0 |
| 171 | `verb-170-wenden` | wenden | 5/5 | PASS | 0 |
| 172 | `verb-171-werben` | werben | 5/5 | PASS | 0 |
| 173 | `verb-172-werden` | werden | 5/5 | PASS | 0 |
| 174 | `verb-173-werfen` | werfen | 5/5 | PASS | 0 |
| 175 | `verb-174-wiegen` | wiegen | 5/5 | PASS | 0 |
| 176 | `verb-175-winden` | winden | 5/5 | PASS | 0 |
| 177 | `verb-176-wissen` | wissen | 5/5 | PASS | 0 |
| 178 | `verb-177-wollen` | wollen | 5/5 | PASS | 0 |
| 179 | `verb-178-wringen` | wringen | 5/5 | PASS | 0 |
| 180 | `verb-179-zeihen` | zeihen | 5/5 | PASS | 0 |
| 181 | `verb-180-ziehen` | ziehen | 5/5 | PASS | 0 |
| 182 | `verb-181-zwingen` | zwingen | 5/5 | PASS | 0 |
| 183 | `verb-182-empfangen` | empfangen | 5/5 | PASS | 0 |
| 184 | `verb-183-erwägen` | erwägen | 5/5 | PASS | 0 |
| 185 | `verb-184-fechten` | fechten | 5/5 | FINDING | 5 |
| 186 | `verb-185-flechten` | flechten | 5/5 | FINDING | 5 |
| 187 | `verb-186-hangen` | hangen | 5/5 | PASS | 0 |
| 188 | `verb-187-spalten` | spalten | 5/5 | PASS | 0 |
| 189 | `verb-188-verzeihen` | verzeihen | 5/5 | PASS | 0 |

---

## API usage

| Metric | Value |
|---|---:|
| Model | `gpt-5.6-luna` |
| API requests | 19 |
| Retries | 0 |
| Total tokens | 113601 |

---

## Status

**BS–DE VERBS FULL LINGUISTIC AUDIT = COMPLETE**

- Verbs reviewed: **189 / 189**
- Forms reviewed: **945 / 945**
- Data files changed: **0**
- Confirmed BS repairs: **82**

This audit is **not** `FINAL – OWNER ACCEPTED`.
Next step: **CONFIRMED REPAIRS** → targeted Luna regression on changed forms only.

**NEKO NELABOT. AUDIT ONLY.**
