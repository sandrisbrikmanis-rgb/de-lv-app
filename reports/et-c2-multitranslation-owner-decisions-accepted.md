# ET–DE C2 — MULTI-TRANSLATION OWNER DECISIONS ACCEPTED — 19/19

**MASTER:** v1.12  
**Source:** `reports/et-c2-multitranslation-owner-decisions.md`  
**Source review PR:** #656  
**Scope:** all 19 validated C2 multiple-main-translation findings  
**DE:** STRICT READ-ONLY  
**OWNER status:** ACCEPTED

## OWNER mapping

| Audit ID | Card ID | Field/path | DE | CURRENT | OWNER NEW | Status |
|---|---|---|---|---|---|---|
| ET-C2-MT-0001 | `c2-Unvoreingenommenheit-0` | `lv` | Unvoreingenommenheit | objektiivsus • neutraalsus | **objektiivsus** | LABOT |
| ET-C2-MT-0002 | `c2-Berichterstatter-86` | `lv` | Berichterstatter | referent • teataja • korrespondent • reporter | **referent** | LABOT |
| ET-C2-MT-0003 | `c2-Computerwissenschaft-96` | `lv` | Computerwissenschaft | arvutiteadus • informaatika | **arvutiteadus** | LABOT |
| ET-C2-MT-0004 | `c2-durchkreuzen-103` | `lv` | durchkreuzen | läbi kriipsutama • risti tõmbama • läbi lõikama • nurjama | **läbi kriipsutama** | LABOT |
| ET-C2-MT-0005 | `c2-Durchschnittsleistung-106` | `lv` | Durchschnittsleistung | keskpärane sooritus • keskmine sooritus | **keskmine sooritus** | LABOT |
| ET-C2-MT-0006 | `c2-Entschlossenheit-113` | `lv` | Entschlossenheit | otsustavus • sihikindlus • kahtlematus | **otsustavus** | LABOT |
| ET-C2-MT-0007 | `c2-Errungenschaft-117` | `lv` | Errungenschaft | saavutus • saavutis • edusamm | **saavutus** | LABOT |
| ET-C2-MT-0008 | `c2-Geistesgegenwart-131` | `lv` | Geistesgegenwart | kiire taip • meelekindlus | **kiire taip** | LABOT |
| ET-C2-MT-0009 | `c2-Genossenschaft-140` | `lv` | Genossenschaft | ühistu • artell | **ühistu** | LABOT |
| ET-C2-MT-0010 | `c2-Geschäftsordnung-144` | `lv` | Geschäftsordnung | põhimäärus • reglement | **reglement** | LABOT |
| ET-C2-MT-0011 | `c2-gesellschaftlich-150` | `lv` | gesellschaftlich | ühiskondlik • ühiskonna | **ühiskondlik** | LABOT |
| ET-C2-MT-0012 | `c2-Hausgemeinschaft-161` | `lv` | Hausgemeinschaft | majaelanikud • majaelanike kogukond | **majaelanike kogukond** | LABOT |
| ET-C2-MT-0013 | `c2-Kabinettsmitglied-166` | `lv` | Kabinettsmitglied | kabineti liige • minister | **kabineti liige** | LABOT |
| ET-C2-MT-0014 | `c2-Kriegsentschädigung-169` | `lv` | Kriegsentschädigung | sõjakahjude hüvitamine • reparatsioonid | **reparatsioonid** | LABOT |
| ET-C2-MT-0015 | `c2-Leistungsfähigkeit-173` | `lv` | Leistungsfähigkeit | töövõime • tootlikkus • võimsus | **töövõime** | LABOT |
| ET-C2-MT-0016 | `c2-menschenfreundlich-178` | `lv` | menschenfreundlich | humaanne • inimlik | **humaanne** | LABOT |
| ET-C2-MT-0017 | `c2-Parlamentarier-183` | `lv` | Parlamentarier | parlamendisaadik • parlamendiliige | **parlamendiliige** | LABOT |
| ET-C2-MT-0018 | `c2-zugunsten, zu Gunsten-207` | `lv` | zugunsten, zu Gunsten | kasuks • heaks | **kasuks** | LABOT |
| ET-C2-MT-0019 | `c2-Sachverständige-218` | `lv` | Sachverständige | asjatundja • ekspert | **ekspert** | LABOT |

## OWNER overrides vs source recommendation

The following source recommendations are intentionally overridden:

- ET-C2-MT-0005 `Durchschnittsleistung`: **keskmine sooritus**
- ET-C2-MT-0010 `Geschäftsordnung`: **reglement**
- ET-C2-MT-0012 `Hausgemeinschaft`: **majaelanike kogukond**
- ET-C2-MT-0014 `Kriegsentschädigung`: **reparatsioonid**
- ET-C2-MT-0017 `Parlamentarier`: **parlamendiliige**
- ET-C2-MT-0019 `Sachverständige`: **ekspert**

## Apply safety

- COPY-ONLY these 19 exact mappings.
- Before each write: actual production value must equal `CURRENT`.
- Mismatch → `SKIP_CURRENT_VALUE_MISMATCH` for that row only.
- Do not modify DE.
- Do not modify Study explanatory content.
- Do not perform cleanup or neighboring-field edits.
- Mirror `data/et/c2.js` ↔ `www/data/et/c2.js`.

## Mandatory post-apply full C2 scan

```text
C2_CARDS = 219
REQUESTED_LABOT = 19
APPLIED_VERIFIED = 19/19
CURRENT_VALUE_MISMATCH = 0

MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%
MULTI_TRANSLATION_SCAN_COVERAGE = 100%
MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL = 0
MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0
MAIN_TRANSLATION_COUNT_VIOLATIONS = 0

DE_CHANGES = 0
UNEXPECTED_PRODUCTION_CHANGES = 0
MIRROR = PASS
SYNTAX = PASS
STRUCTURE = PASS
ID_ORDER = PASS
```

If any residual multi-translation finding remains outside these 19, do not auto-fix it. Return it for OWNER decision.

**OWNER VERDICT:** `ET_C2_MULTITRANSLATION_OWNER_ACCEPTED_19`
