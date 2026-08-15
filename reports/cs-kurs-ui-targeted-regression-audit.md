# CS–DE Kurss UI — targeted regression audit

**Mode:** READ-ONLY regression audit (GPT-5.6 Luna scope — deterministic closure primary)
**Authority:** reports/temp/cs-kurs-ui-owner-apply-map.json (OWNER NEW, not Luna PROPOSED)
**Baseline audit:** reports/cs-kurs-ui-full-linguistic-audit.md (55 findings)

## Executive verdict

**TARGETED REGRESSION = FAIL**

**OWNER UI COPY/registry repair was NOT detected in production.** Branch contains audit/OWNER artifacts only; languages/cs/ui.js and ui.js match main with zero production diff.

## Original findings closure (55/55)

| Status | Count |
|--------|-------|
| accounted (original findings) | **55/55** |
| RESOLVED_EXACT | 0 |
| OWNER_NELABOT_RETAINED | 1 |
| UNRESOLVED | 54 |
| WRONG_REPLACEMENT | 0 |
| TARGET_MISSING | 0 |
| REGRESSION | 0 |

Field-level apply map entries: 55 UI keys + 3 renderer = 58 (Finding 01 spans 4 keys).

### UNRESOLVED UI keys (sample)

- **kurss.panelLabel** — production: „Kurs" → expected OWNER: „Kurz"
- **kurss.title** — production: „Kurs" → expected OWNER: „Kurz"
- **menu.course** — production: „Kurs" → expected OWNER: „Kurz"
- **progress.courseHeading** — production: „Kurs" → expected OWNER: „Kurz"
- **kurss.tipTitle** — production: „Poradenství" → expected OWNER: „Tip"
- **kurss.articles** — production: „Články" → expected OWNER: „Členy"
- **kurss.pronounsDesc** — production: „Formy nominativ, akkusativ a dativ." → expected OWNER: „Tvary v nominativu, akuzativu a dativu."
- **kurss.lessons** — production: „Přednášky" → expected OWNER: „Lekce"
- **kurss.lessonsDesc** — production: „Výuka přednášek v sekvenčním pořadí od 1 do 21." → expected OWNER: „Lekce v pořadí od 1 do 21."
- **kurss.verbBasicsDesc** — production: „Osoby, tvary a obecná slovesa." → expected OWNER: „Osoby, tvary a běžná slovesa."
- **kurss.pronounsSubtitle** — production: „Nominativ, Akkusativ a Dativ - tvary zájmen." → expected OWNER: „Tvary zájmen v nominativu, akuzativu a dativu."
- **kurss.vowelsSubtitle** — production: „Samohlásky - dlouhé a krátké" → expected OWNER: „Dlouhé a krátké samohlásky"
- **kurss.lessonsSubtitle** — production: „Výuka přednášek v sekvenčním pořadí od 1 do 21." → expected OWNER: „Lekce v pořadí od 1 do 21."
- **kurss.vowelsTitle** — production: „Samohlásky - dlouhé a krátké" → expected OWNER: „Dlouhé a krátké samohlásky"
- **kurss.consonantsDesc** — production: „Nejdůležitější zvuky souhlásek pro začátečníky." → expected OWNER: „Nejdůležitější souhláskové zvuky pro začátečníky."
- … and 39 more UNRESOLVED UI keys

## Functional / renderer

| Check | Result |
|-------|--------|
| Přeložit in COURSE_TRANSLATE_SECTION_TITLES | **NO** |
| Cvičení in COURSE_EXERCISE_SECTION_TITLES | **NO** |
| Übung / Cvičení in exercise registry | NO |
| Translate lookup failures (lessons 8+) | 14 |
| Exercise lookup failures | 9 |
| Legacy Übung / Cvičení still in data/ui | YES (lessons 8,9) |

Translate sections with registry/lookup gap:

- Lesson 8: registry=false, lookup=title_not_in_registry, sectionCards=19
- Lesson 9: registry=false, lookup=title_not_in_registry, sectionCards=19
- Lesson 10: registry=false, lookup=title_not_in_registry, sectionCards=21
- Lesson 11: registry=false, lookup=title_not_in_registry, sectionCards=21
- Lesson 12: registry=false, lookup=title_not_in_registry, sectionCards=33
- Lesson 13: registry=false, lookup=title_not_in_registry, sectionCards=33
- Lesson 14: registry=false, lookup=title_not_in_registry, sectionCards=14
- Lesson 15: registry=false, lookup=title_not_in_registry, sectionCards=16
- Lesson 16: registry=false, lookup=title_not_in_registry, sectionCards=14
- Lesson 17: registry=false, lookup=title_not_in_registry, sectionCards=25
- Lesson 18: registry=false, lookup=title_not_in_registry, sectionCards=18
- Lesson 19: registry=false, lookup=title_not_in_registry, sectionCards=9
- Lesson 20: registry=false, lookup=title_not_in_registry, sectionCards=24
- Lesson 21: registry=false, lookup=title_not_in_registry, sectionCards=14

Exercise sections with registry/lookup gap:

- Lesson 8 (Übung / Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=38
- Lesson 9 (Übung / Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=9
- Lesson 13 (Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=12
- Lesson 16 (Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=16
- Lesson 17 (Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=5
- Lesson 18 (Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=8
- Lesson 19 (Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=2
- Lesson 20 (Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=17
- Lesson 21 (Cvičení): registry=false, lookup=title_not_in_registry, sectionCards=15

## Regression sweep (repair-induced)

| Item | Count |
|------|-------|
| New repair regressions | 0 (no production repair diff) |
| Foreign leftovers Übung I/II in exerciseMeta | 2 (kurss.exerciseMeta.fillCase, kurss.exerciseMeta.translate) |
| Přednáška/Přednášky still in audited UI keys | 24 keys |

## Integrity gates

| Gate | Status |
|------|--------|
| primary ↔ www languages/cs/ui.js | PASS |
| primary ↔ www ui.js | PASS |
| DE changes vs main | PASS (0) |
| LV MASTER changes vs main | PASS (0) |
| Structural parity | PASS |
| Unexpected production changes | NONE (repair not applied) |

## Closure criteria checklist

- PASS: original findings accounted = 55/55
- **FAIL**: all LABOT OWNER = exact expected
- PASS: kurss.back NELABOT retained
- **FAIL**: Translate functional PASS
- **FAIL**: Exercise functional PASS
- **FAIL**: universal registry PASS
- PASS: primary ↔ www PASS
- PASS: DE changes = 0
- PASS: LV changes = 0
- **FAIL**: foreign Übung I/II UI leftovers = 0
- **FAIL**: repair actually applied

## OWNER NELABOT check

- kurss.back: production „‹ Kurz" — **OWNER_NELABOT_RETAINED**

## Next step

Execute OWNER apply phase from `reports/temp/cs-kurs-ui-owner-apply-map.json` (51 UI COPY + 3 registry entries), then re-run this regression audit.

## Luna note

Deterministic closure against OWNER map is authoritative for this regression. Luna targeted pass deferred: no production repair diff detected; running Luna on unchanged strings would duplicate initial audit, not regression validation.
