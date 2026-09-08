# EN–DE B1 FULL LINGUISTIC & QUALITY AUDIT

**Generated:** 2026-08-08T18:56:00.481Z
**Mode:** READ-ONLY — no production data modified
**Audited files:** `data/en/b1.js`, mirror `www/data/en/b1.js`
**Master reference:** `data/b1.js` (LV–DE)
**Luna linguistic pass:** NOT_RUN — OPENAI_API_KEY unavailable in audit environment

---

## Dataset

- Cards audited: **3367 / 3367**
- Normal cards: **3043**
- standardStudy: **323**
- comparisonStudy: **0**
- minimalStudy: **1**
- LV study count: **324** | EN study count: **324**

## Severity

- CRITICAL: **0**
- HIGH: **45**
- MEDIUM: **12**
- LOW: **0**
- WARNING: **0**
- DE SOURCE ISSUE: **0**

## Translation quality

- Main translations OK: **3367**
- Main translations findings: **0**
## Study

- Study cards audited: **324 / 324**
- Missing Study objects: **0**
- Learner-language leftovers (LV scan): **37**
- Meta-pedagogy (Latvian-framed): **12**
- sectionAccents verified real issues (heuristic): **10**
- sectionAccents orphan rows: **0**
- comparison structure issues: **0**

## DE parity

- DE READ-ONLY differences: **0**
- DE SOURCE ISSUE (reported): **0**

---

## Validator: raw vs verified (sectionAccents)

- RAW VALIDATOR ISSUES (B1): **0**
- VERIFIED REAL ISSUES (heuristic, excl. expected parity): **10**
- EXPECTED PARITY / casing-skipped: **0** (not listed as repair items)

---

## VALIDATION REPORT

| Check | Result |
|---|---|
| Structural parity | **PASS** |
| Card count parity | **PASS** |
| ID/order parity | **PASS** |
| Study object parity | **PASS** |
| DE READ-ONLY | **PASS** (0 diffs) |
| Unique IDs | **PASS** (no duplicate study IDs in scan) |
| JavaScript | **PASS** (node --check) |
| audit-language-parity | **PASS** |
| audit-translations | **PASS** |
| validate-study-design (B1 sectionAccentIssues) | **PASS** (raw: 0) |
| Mojibake | **PASS** |
| LV leftovers (learner fields) | **37** |
| Other-language leftovers | **0** |
| primary ↔ www | **PASS** |

---

## ROOT CAUSE SUMMARY

1. **Structural parity** — card count and study count match LV master (3367 / 324).
2. **DE READ-ONLY** — automated DE field parity vs LV master.
3. **LV learner leftovers** — Study tips/important/explanation still reference Latvian or contain Latvian words (`lieto`, `parasti`, `darba vietu`, etc.).
4. **Meta-pedagogy** — phrases like "in Latvian…" / "Latvian usually…" need English-learner reframing.
5. **sectionAccents** — LV tokens in accent maps; orphan row detection vs example counts.
6. **Luna full linguistic pass** — not executed (no API key in audit environment); heuristic + structural audit only.

---

## FULL FINDINGS TABLE

Total findings: **57** | Repair candidates (excl. DE SOURCE): **57**

| Severity | Type | Card ID | DE | Field | Current EN | Recommended EN | Reason |
|---|---|---|---|---|---|---|---|
| HIGH | LV leftover reference | b1-abhängen | abhängen | entry[53].study.important.text | abhängen von is a stable construction; in Latvian it is not translated literally as "to hang". | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover reference | b1-abschnitt | Abschnitt | entry[74].study.important.text | In Latvian, "fragment" does not always fit; der Abschnitt is more often a section or section. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-antrag | Antrag | entry[157].study.important.text | Darba pieteikums parasti ir die Bewerbung, nevis der Antrag. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-berichten | berichten | entry[363].study.important.text | berichten parasti lieto ar über + ko? vai von + kam?. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-blase | Blase | entry[455].study.important.text | On the foot, Blase is usually "blister" in Latvian, not "bladder". In medicine Blase can also be bladder. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-bloß | bloß | entry[467].study.sectionAccents.tip.leftBlocks[0].text.purple[0] | tikai | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-entlassen | entlassen | entry[756].study.explanation | Main idea: entlassen means to dismiss or release from an institution. The Latvian translation changes depending on the place: the company fires, the hospital discharges, the prison | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover reference | b1-entlassen | entlassen | entry[756].study.tip.leftBlocks[0].text | Firma entlässt, Krankenhaus entlässt, Gefängnis entlässt - choose by location in Latvian. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover reference | b1-entlassen | entlassen | entry[756].study.important.text | From the hospital, entlassen is usually "discharge" in Latvian, not "dismiss". | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-fördern | fördern | entry[932].study.important.text | Nejauc fördern un fordern: viens veicina vai atbalsta, otrs prasa. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-handeln | handeln | entry[1193].study.sectionAccents.tip.leftBlocks[0].text.purple[1] | par ko ir teksts | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-hort | Hort | entry[1314].study.explanation[3] | In Latvian, the closest match is an extended day group or a children's day centre. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover reference | b1-jagen | jagen | entry[1406].study.important.text | Not every Latvian "drive" is jagen; the choice is determined by the context. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover reference | b1-kader | Kader | entry[1444].study.explanation[3] | Not to be confused with Latvian 'kadr' (film frame) - in German it is das Bild or die Einstellung, ne der Kader. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-kader | Kader | entry[1444].study.explanation[3] | Not to be confused with Latvian 'kadr' (film frame) - in German it is das Bild or die Einstellung, ne der Kader. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-kader | Kader | entry[1444].study.tip[1] | Latvian 'frame' (films) ≠ der Kader - film frame in German is das Bild/die Einstellung. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover reference | b1-kern | Kern | entry[1497].study.important.text | Kern is sometimes translated as a seed or stone in Latvian for fruits; the context determines the translation. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-kommando | Kommando | entry[1570].study.important | Sporta komanda parasti ir die Mannschaft vai das Team, nevis das Kommando. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-kurs | Kurs | entry[1679].study.important | In Latvian, 'course' can have several meanings, but in German, the context determines whether it is about lessons, direction or price. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover reference | b1-kurs | Kurs | entry[1679].study.sectionAccents.important.purple[0] | Latvian | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-kastanie | Kastanie | entry[1711].study.tip | Koks vai auglis? Skaties kontekstu ap die Kastanie. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-kastanie | Kastanie | entry[1711].study.important | In Latvian, it is often necessary to distinguish chestnut as a tree and chestnut as a fruit. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-rasen | rasen | entry[2216].study.sectionAccents.comparison[1].meaning.purple | braukt | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-rasen | rasen | entry[2216].study.sectionAccents.important.red | braukt | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-schale | Schale | entry[2405].study.important | Koka mizai parasti lieto die Rinde, nevis die Schale. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-schale | Schale | entry[2405].study.sectionAccents.comparison[1].meaning.purple | koka miza | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-schlag | Schlag | entry[2447].study.important | Schlag is highly contextual; lightning often means kick in Latvian. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-senken | senken | entry[2603].study.important | senken ir ar objektu; sinken parasti notiek pats. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-sich-sorgen | sich sorgen | entry[2655].study.important | sich sorgen lieto ar um: sich um jemanden sorgen. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-stellung | Stellung | entry[2743].study.sectionAccents.examples[1].lv.red | darba vietu | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-stellung | Stellung | entry[2743].study.sectionAccents.important.red | darba vietu | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-tank | Tank | entry[2841].study.important.text | Latvian tank in German is usually der Panzer, not der Tank. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-teilnehmen | teilnehmen | entry[2872].study.important.text | Saki an dem Kurs teilnehmen vai am Kurs teilnehmen, nevis den Kurs teilnehmen. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-verlegen | verlegen | entry[3088].study.important.text | Schlüssel verlegen nav tas pats, kas verlieren: lieta parasti ir kaut kur nolikta. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover text | b1-weder | weder | entry[3215].study.sectionAccents.comparison[1].meaning.purple | vai nu | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| HIGH | LV leftover reference | b1-zeugnis | Zeugnis | entry[3270].study.important.text | ärztliches Zeugnis is often a doctor's certificate in Latvian, not a school certificate. | Rewrite for English learners (remove Latvian references/words) | Study/main text references Latvian instead of English learner context. |
| HIGH | LV leftover text | b1-sich-befinden-study | sich befinden | entry[3344].study.tip.leftBlocks[1].text | Ja gribi pateikt “justies”, lieto sich fühlen, nevis sich befinden. | Rewrite for English learners (remove Latvian references/words) | Latvian word or diacritics found in EN learner-language field. |
| MEDIUM | meta-pedagogy learner perspective | b1-abhängen | abhängen | entry[53].study.important.text | abhängen von is a stable construction; in Latvian it is not translated literally as "to hang". | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-abschnitt | Abschnitt | entry[74].study.important.text | In Latvian, "fragment" does not always fit; der Abschnitt is more often a section or section. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-blase | Blase | entry[455].study.important.text | On the foot, Blase is usually "blister" in Latvian, not "bladder". In medicine Blase can also be bladder. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-entlassen | entlassen | entry[756].study.explanation | Main idea: entlassen means to dismiss or release from an institution. The Latvian translation changes depending on the place: the company fires, the hospital discharges, the prison | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-entlassen | entlassen | entry[756].study.tip.leftBlocks[0].text | Firma entlässt, Krankenhaus entlässt, Gefängnis entlässt - choose by location in Latvian. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-entlassen | entlassen | entry[756].study.important.text | From the hospital, entlassen is usually "discharge" in Latvian, not "dismiss". | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-hort | Hort | entry[1314].study.explanation[3] | In Latvian, the closest match is an extended day group or a children's day centre. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-kern | Kern | entry[1497].study.important.text | Kern is sometimes translated as a seed or stone in Latvian for fruits; the context determines the translation. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-kurs | Kurs | entry[1679].study.important | In Latvian, 'course' can have several meanings, but in German, the context determines whether it is about lessons, direction or price. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-kastanie | Kastanie | entry[1711].study.important | In Latvian, it is often necessary to distinguish chestnut as a tree and chestnut as a fruit. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-schlag | Schlag | entry[2447].study.important | Schlag is highly contextual; lightning often means kick in Latvian. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| MEDIUM | meta-pedagogy learner perspective | b1-zeugnis | Zeugnis | entry[3270].study.important.text | ärztliches Zeugnis is often a doctor's certificate in Latvian, not a school certificate. | Rephrase for English learner perspective (not Latvian comparison) | Localized text still frames pedagogy around Latvian rather than English usage. |
| HIGH | LV leftover in sectionAccents | b1-bloß | bloß | study.sectionAccents (accent) | tikai | Replace with exact English term from study section text | LV remnant in sectionAccents |
| HIGH | LV leftover in sectionAccents | b1-handeln | handeln | study.sectionAccents (accent) | par ko ir teksts | Replace with exact English term from study section text | LV remnant in sectionAccents |
| HIGH | LV leftover in sectionAccents | b1-kurs | Kurs | study.sectionAccents (accent) | Latvian | Replace with exact English term from study section text | LV remnant in sectionAccents |
| HIGH | LV leftover in sectionAccents | b1-rasen | rasen | study.sectionAccents (accent) | braukt | Replace with exact English term from study section text | LV remnant in sectionAccents |
| HIGH | LV leftover in sectionAccents | b1-schale | Schale | study.sectionAccents (accent) | koka miza | Replace with exact English term from study section text | LV remnant in sectionAccents |
| HIGH | LV leftover in sectionAccents | b1-stellung | Stellung | study.sectionAccents (accent) | darba vietu | Replace with exact English term from study section text | LV remnant in sectionAccents |
| HIGH | LV leftover in sectionAccents | b1-weder | weder | study.sectionAccents (accent) | vai nu | Replace with exact English term from study section text | LV remnant in sectionAccents |
| HIGH | LV leftover in sectionAccents | b1-beruf | Beruf | study.sectionAccents (accent) | darba | Replace with exact English term from study section text | LV remnant in sectionAccents |


---

## FINAL VERDICT

## EN–DE B1 — REPAIRS REQUIRED

**Repair candidates:** **57**

Next step: OWNER REVIEW → DETERMINISTIC REPAIR → TARGETED REGRESSION AUDIT

---

## MACHINE-READABLE ARTEFACTS

- reports/en-b1-full-audit.md
- reports/temp/en-b1-audit-data.json
- reports/temp/en-b1-findings-consolidated.json
- reports/temp/en-b1-full-audit-collect.js