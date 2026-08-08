# BS–DE VERBS TARGETED REGRESSION AUDIT

**Date:** 2026-08-08
**Model:** gpt-5.6-luna
**Mode:** AUDIT ONLY — no data files modified

```text
Audit source: reports/bs-verbs-full-linguistic-audit.md
Repair source: reports/bs-verbs-audit-repair-report.md

Targeted forms: 82
Reviewed: 82 / 82

Changed verbs: 36
Changed verbs reviewed: 36 / 36

Data modifications: NONE

CRITICAL: 0
HIGH: 1
MEDIUM: 4
LOW: 1
SOURCE ISSUES: 0
INFORMATIONAL: 0
PASS: 76 / 82
```

## Structural regression

| Check | Result |
|---|---|
| Verbs | 189 / 189 |
| Forms | 945 / 945 |
| Structural parity | PASS |
| ID parity | PASS |
| Order parity | PASS |
| DE READ-ONLY | PASS |
| JavaScript syntax | PASS |
| Mojibake | PASS |
| Suspicious Unicode | 0 |
| data/bs/verbs.js ≡ www/data/bs/verbs.js | PASS |

## Automatic checks

| Script | Result |
|---|---|
| audit-language-parity.js --lang=bs | PASS |
| verify-bs-de-compliance.js | PASS |
| audit-mojibake.js --lang=bs | PASS (0 hits) |
| audit-translations.js --lang=bs | PASS (no verbs-specific issues) |

## 82-FORM TARGETED VERIFICATION TABLE

| # | Verb ID | German | Field | Current repaired BS | Verdict |
|---:|---|---|---|---|---|
| 1 | `verb-40-dünken` | dünken | imperfektKonjunktiv | Činilo bi se | PASS |
| 2 | `verb-54-fressen` | fressen | partizipVergangenheit | Pojeđen / proždran | PASS |
| 3 | `verb-57-gedeihen` | gedeihen | infinitiv | Napredovati | PASS |
| 4 | `verb-57-gedeihen` | gedeihen | partizipVergangenheit | Napredovalo (on je) | FINDING (MEDIUM) |
| 5 | `verb-60-haben` | haben | infinitiv | Imati / posjedovati | PASS |
| 6 | `verb-68-lassen` | lassen | infinitiv | Ostaviti / pustiti | PASS |
| 7 | `verb-68-lassen` | lassen | praesens | On ostavlja / pušta | PASS |
| 8 | `verb-68-lassen` | lassen | imperfektIndikativ | Ostavio je / pustio je | PASS |
| 9 | `verb-68-lassen` | lassen | imperfektKonjunktiv | Ostavio bi / pustio bi | PASS |
| 10 | `verb-68-lassen` | lassen | partizipVergangenheit | Ostavljen / pušten | PASS |
| 11 | `verb-96-rufen` | rufen | infinitiv | Zvati | PASS |
| 12 | `verb-109-schlafen` | schlafen | infinitiv | Spavati | PASS |
| 13 | `verb-109-schlafen` | schlafen | praesens | On spava | PASS |
| 14 | `verb-109-schlafen` | schlafen | imperfektIndikativ | Spavao je | PASS |
| 15 | `verb-109-schlafen` | schlafen | imperfektKonjunktiv | Spavao bi | PASS |
| 16 | `verb-109-schlafen` | schlafen | partizipVergangenheit | Spavao | PASS |
| 17 | `verb-112-schleifen` | schleifen | partizipVergangenheit | Brušen | PASS |
| 18 | `verb-117-schnauben` | schnauben | imperfektKonjunktiv | On bi frktao | PASS |
| 19 | `verb-129-sein` | sein | imperfektIndikativ | Bio je | PASS |
| 20 | `verb-129-sein` | sein | partizipVergangenheit | Bio | PASS |
| 21 | `verb-131-sieden` | sieden | imperfektKonjunktiv | On bi kuhao | PASS |
| 22 | `verb-136-sollen` | sollen | praesens | On treba | PASS |
| 23 | `verb-136-sollen` | sollen | imperfektIndikativ | Trebao je | PASS |
| 24 | `verb-154-tragen` | tragen | infinitiv | Nositi | PASS |
| 25 | `verb-154-tragen` | tragen | praesens | On nosi | PASS |
| 26 | `verb-154-tragen` | tragen | imperfektIndikativ | Nosio je | PASS |
| 27 | `verb-154-tragen` | tragen | imperfektKonjunktiv | On bi nosio | PASS |
| 28 | `verb-4-bergen` | bergen | infinitiv | Sakriti | FINDING (HIGH) |
| 29 | `verb-4-bergen` | bergen | praesens | On skriva | PASS |
| 30 | `verb-4-bergen` | bergen | imperfektIndikativ | Sakrio je | PASS |
| 31 | `verb-4-bergen` | bergen | imperfektKonjunktiv | On bi sakrio | PASS |
| 32 | `verb-4-bergen` | bergen | partizipVergangenheit | Skriven / spašen | PASS |
| 33 | `verb-7-biegen` | biegen | imperfektIndikativ | Savijao je | PASS |
| 34 | `verb-7-biegen` | biegen | imperfektKonjunktiv | On bi savijao | PASS |
| 35 | `verb-31-bleichen` | bleichen | infinitiv | Izblijediti | FINDING (MEDIUM) |
| 36 | `verb-31-bleichen` | bleichen | praesens | On blijedi | FINDING (MEDIUM) |
| 37 | `verb-33-brechen` | brechen | imperfektKonjunktiv | On bi lomio | PASS |
| 38 | `verb-34-brennen` | brennen | imperfektIndikativ | On je gorio | PASS |
| 39 | `verb-34-brennen` | brennen | imperfektKonjunktiv | On bi gorio | PASS |
| 40 | `verb-34-brennen` | brennen | partizipVergangenheit | Gorio | PASS |
| 41 | `verb-35-bringen` | bringen | partizipVergangenheit | Donesen / dopremljen | PASS |
| 42 | `verb-36-denken` | denken | partizipVergangenheit | Mislio | PASS |
| 43 | `verb-40-dünken` | dünken | partizipVergangenheit | Smatran | FINDING (MEDIUM) |
| 44 | `verb-49-fangen` | fangen | infinitiv | Hvatati | PASS |
| 45 | `verb-184-fechten` | fechten | infinitiv | Boriti se | PASS |
| 46 | `verb-184-fechten` | fechten | praesens | On se bori | PASS |
| 47 | `verb-184-fechten` | fechten | imperfektIndikativ | Borio se | PASS |
| 48 | `verb-184-fechten` | fechten | imperfektKonjunktiv | On bi se borio | PASS |
| 49 | `verb-184-fechten` | fechten | partizipVergangenheit | Borio se | PASS |
| 50 | `verb-185-flechten` | flechten | infinitiv | Plesti | PASS |
| 51 | `verb-185-flechten` | flechten | praesens | On plete | PASS |
| 52 | `verb-185-flechten` | flechten | imperfektIndikativ | On je pleo | PASS |
| 53 | `verb-185-flechten` | flechten | imperfektKonjunktiv | On bi pleo | PASS |
| 54 | `verb-185-flechten` | flechten | partizipVergangenheit | Pleten | PASS |
| 55 | `verb-58-gehen` | gehen | partizipVergangenheit | Išao (on je) | PASS |
| 56 | `verb-18-geschehen` | geschehen | imperfektIndikativ | Dogodilo se | PASS |
| 57 | `verb-18-geschehen` | geschehen | imperfektKonjunktiv | Dogodilo bi se | PASS |
| 58 | `verb-63-helfen` | helfen | infinitiv | Pomagati | PASS |
| 59 | `verb-63-helfen` | helfen | imperfektIndikativ | Pomagao je | PASS |
| 60 | `verb-82-nehmen` | nehmen | infinitiv | Uzimati | PASS |
| 61 | `verb-82-nehmen` | nehmen | imperfektIndikativ | Uzimao je | PASS |
| 62 | `verb-87-quellen` | quellen | infinitiv | Bujati | PASS |
| 63 | `verb-87-quellen` | quellen | praesens | On buja | PASS |
| 64 | `verb-87-quellen` | quellen | imperfektIndikativ | Bujao je | PASS |
| 65 | `verb-87-quellen` | quellen | imperfektKonjunktiv | Bujao bi | PASS |
| 66 | `verb-87-quellen` | quellen | partizipVergangenheit | Nabujao | PASS |
| 67 | `verb-98-saufen` | saufen | partizipVergangenheit | Pio | PASS |
| 68 | `verb-136-sollen` | sollen | partizipVergangenheit | Trebao | PASS |
| 69 | `verb-137-speien` | speien | partizipVergangenheit | Pljuvan | PASS |
| 70 | `verb-144-stecken` | stecken | infinitiv | Umetati / umetnuti | PASS |
| 71 | `verb-144-stecken` | stecken | praesens | On umeće | PASS |
| 72 | `verb-144-stecken` | stecken | imperfektIndikativ | Umetnuo je ili je umećao | PASS |
| 73 | `verb-144-stecken` | stecken | imperfektKonjunktiv | On bi umetnuo | PASS |
| 74 | `verb-144-stecken` | stecken | partizipVergangenheit | Umetnut | PASS |
| 75 | `verb-151-stoßen` | stoßen | infinitiv | Gurati | PASS |
| 76 | `verb-151-stoßen` | stoßen | imperfektIndikativ | Gurao je | PASS |
| 77 | `verb-151-stoßen` | stoßen | imperfektKonjunktiv | On bi gurao | PASS |
| 78 | `verb-151-stoßen` | stoßen | partizipVergangenheit | Guran | PASS |
| 79 | `verb-158-trinken` | trinken | partizipVergangenheit | Pio | PASS |
| 80 | `verb-167-weben` | weben | imperfektKonjunktiv | On bi tkao | PASS |
| 81 | `verb-72-lesen` | lesen | partizipVergangenheit | Čitan | PASS |
| 82 | `verb-145-stehen` | stehen | imperfektKonjunktiv | On bi stajao / On bi stajao | FINDING (LOW) |

## FINDINGS

### MEDIUM — `gedeihen` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-57-gedeihen
**German infinitive:** gedeihen
**Field:** partizipVergangenheit
**Current BS:** Napredovalo (on je)
**Recommended BS:** Napredovao (on je)
**Reason:** German er is masculine; napredovalo is neuter and conflicts with the explicit masculine subject on.

### HIGH — `bergen` / `infinitiv`

**Severity:** HIGH
**Verb ID:** verb-4-bergen
**German infinitive:** bergen
**Field:** infinitiv
**Current BS:** Sakriti
**Recommended BS:** Spasiti
**Reason:** German bergen primarily means to rescue, recover, or salvage; sakriti means to hide and does not match the German sense.

### MEDIUM — `bleichen` / `infinitiv`

**Severity:** MEDIUM
**Verb ID:** verb-31-bleichen
**German infinitive:** bleichen
**Field:** infinitiv
**Current BS:** Izblijediti
**Recommended BS:** Izbijeliti
**Reason:** Izblijediti means ‘to fade’; Latvian balināt and German bleichen here mean ‘to bleach/whiten’.

### MEDIUM — `bleichen` / `praesens`

**Severity:** MEDIUM
**Verb ID:** verb-31-bleichen
**German infinitive:** bleichen
**Field:** praesens
**Current BS:** On blijedi
**Recommended BS:** On izbjeljuje
**Reason:** On blijedi means ‘he fades’, whereas the source and German form express the transitive action ‘he bleaches’.

### MEDIUM — `dünken` / `partizipVergangenheit`

**Severity:** MEDIUM
**Verb ID:** verb-40-dünken
**German infinitive:** dünken
**Field:** partizipVergangenheit
**Current BS:** Smatran
**Recommended BS:** Činilo se
**Reason:** German gedünkt means seemed; Smatran means considered/deemed and changes the meaning.

### LOW — `stehen` / `imperfektKonjunktiv`

**Severity:** LOW
**Verb ID:** verb-145-stehen
**German infinitive:** stehen
**Field:** imperfektKonjunktiv
**Current BS:** On bi stajao / On bi stajao
**Recommended BS:** On bi stajao
**Reason:** The two German variants have the same Bosnian translation; repeating it after the slash is redundant and unnatural.

## Status

**BS–DE VERBS TARGETED REGRESSION: NOT CLOSED**

Findings: 6. Next micro-repair cycle required.

**NEKO NELABOT. AUDIT ONLY.**

## API usage

| Metric | Value |
|---|---:|
| Model | `gpt-5.6-luna` |
| Requests | 6 |
| Total tokens | 31012 |
