# CS–DE A1 HIGH Micro-Regression #2 / Final Closure

**Date:** 2026-08-12
**Mode:** READ-ONLY
**Model:** GPT-5.6 Luna (linguistic); Composer (deterministic)
**Baseline:** `539d4fbd`

## Prerequisite (gala repair)

| Check | Value |
|-------|-------|
| Report | found |
| Processed | 18/18 |
| Repair mismatch (report) | 1 |

_Note: repair report shows CURRENT_VALUE_MISMATCH > 0; closure cannot be CLOSED until resolved._


## Coverage

| Metric | Value |
|--------|-------|
| repair fields | 18 |
| retained | 17/18 |
| reverted | 0 |
| mismatch | 1 |
| missing fields | 0 |
| changed cards audited | 13/13 |
| actual repair card count | 13 |

### Retention detail

| # | cardId | field | status | current |
|---|--------|-------|--------|---------|
| 1 | a1-blond-103 | csText | **RETAINED** | "Blond" |
| 2 | a1-ins | study.comparison[4].meaning | **RETAINED** | "K / ke (komu/čemu?, 3. pád)" |
| 3 | a1-kennen-study | csMain | **RETAINED** | "Znát" |
| 4 | a1-können | csMain | **RETAINED** | "Umět • Moci" |
| 5 | a1-können | study.explanation[0] | **CURRENT_VALUE_MISMATCH** | "Hlavní myšlenka: können znamená umět nebo vědět, jak něco udělat." |
| 6 | a1-lassen | study.sectionAccents.examples[0].lv | **RETAINED** | "Nechávám" |
| 7 | a1-lassen | study.sectionAccents.comparison[1].meaning | **RETAINED** | "Zůstat" |
| 8 | a1-laufen | study.sectionAccents.comparison[0].meaning | **RETAINED** | "Běžet / Fungovat" |
| 9 | a1-laufen | study.sectionAccents.comparison[3].meaning | **RETAINED** | "Fungovat" |
| 10 | a1-seite | csMain | **RETAINED** | "Stránka • Strana" |
| 11 | a1-sich | csMain | **RETAINED** | "Se • Sebe" |
| 12 | a1-sie-study | study.sectionAccents.examples[5].lv | **RETAINED** | "Vařte, prosím." |
| 13 | a1-sollen | study.sectionAccents.examples[1].lv | **RETAINED** | "Máš" |
| 14 | a1-sollen | study.sectionAccents.examples[2].lv | **RETAINED** | "Mám" |
| 15 | a1-essen | study.explanation | **RETAINED** | "[\"Hlavní myšlenka: essen znamená jíst nebo konzumovat jídlo.\",\"Používá se jako sloveso pro konzumaci jídla.\",\"Das Essen je podstatné jméno a znamená jídlo.\",\"Essen a das Essen nejsou totéž.\"]" |
| 16 | a1-sprechen-study | study.examples[2].lv | **RETAINED** | "Mluvím německy." |
| 17 | a1-auch-study | study.examples[1].lv | **RETAINED** | "Já také přijdu." |
| 18 | a1-auch-study | study.examples[2].lv | **RETAINED** | "Ona zde také pracuje." |

## HIGH-362

- **a1-essen study.explanation:** RESOLVED

## Luna findings

| Status | Count |
|--------|-------|
| CONFIRMED_REPAIR_REGRESSION | 2 |
| PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR | 7 |
| FALSE_POSITIVE | 9 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_OWNER_REVIEW | 0 |

### Finding list

- **a1-blond-103** [`FALSE_POSITIVE`] (card): csText matches the PEC value, and the full card has no study content or identified regression.
- **a1-ins** [`FALSE_POSITIVE`] (card): study.comparison[4].meaning matches the PEC value and correctly describes zum as a dative-direction preposition.
- **a1-kennen-study** [`PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR`] study.comparison[0].meaning: kennen refers to knowing or being familiar with a person, place, or thing, so Vědět conflicts with the repaired Znát meaning.
- **a1-kennen-study** [`PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR`] study.tip[0]: The tip contradicts the consistent Czech translation Znát and the card explanation.
- **a1-kennen-study** [`PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR`] study.important[1]: This repeated summary retains the same incorrect Czech gloss for kennen.
- **a1-können** [`CONFIRMED_REPAIR_REGRESSION`] study.explanation[0]: The retained value is explicitly marked CURRENT_VALUE_MISMATCH and still says vědět instead of the gala-repair wording moci.
- **a1-lassen** [`FALSE_POSITIVE`] (card): The repaired Czech accent values are present, old values are absent, and csMain matches study.translation.
- **a1-laufen** [`CONFIRMED_REPAIR_REGRESSION`] csMain: csMain disagrees with study.translation, leaving the repaired card header inconsistent.
- **a1-seite** [`FALSE_POSITIVE`] (card): csMain and study.translation both contain Stránka • Strana, and the repaired card context is consistent.
- **a1-sich** [`PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR`] study.examples[0].lv: The current Czech sentence means bathes, while the source sentence means washes himself.
- **a1-sich** [`PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR`] study.sectionAccents.comparison[2].meaning: The accent metadata is empty although the corresponding comparison meaning has Czech text.
- **a1-sich** [`PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR`] study.sectionAccents.comparison[3].meaning: The accent metadata is empty although the corresponding comparison meaning has Czech text.
- **a1-sie-study** [`FALSE_POSITIVE`] study.sectionAccents.examples[5].lv: Current value matches PEC; the old value Vaříš is absent.
- **a1-sollen** [`FALSE_POSITIVE`] study.sectionAccents.examples[1].lv: Current value matches the example Du sollst kommen and PEC; Musíte is absent.
- **a1-sollen** [`FALSE_POSITIVE`] study.sectionAccents.examples[2].lv: Current value matches the example Ich soll zu Hause bleiben and PEC; Musím is absent.
- **a1-essen** [`FALSE_POSITIVE`] study.explanation: Current explanation exactly matches PEC and satisfies all specified structural and semantic checks.
- **a1-sprechen-study** [`FALSE_POSITIVE`] study.examples[2].lv: Current value matches PEC and the German example; the previous swapped translation is absent.
- **a1-auch-study** [`PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR`] study.sectionAccents.examples[1].lv.purple[0]: The second example now says „Já také přijdu“, but its accent still marks the old wording „jdu“; this path was not repaired.

## Owner protection

| Check | Result |
|-------|--------|
| a1-in / Berlīnē | PASS |
| Status | OWNER_OVERRIDE_FALSE_POSITIVE |
| Current | `Berlīnē` |

## Integrity

| Check | Result |
|-------|--------|
| DE changes | 0 |
| unexpected production changes | 0 |
| cards | 702 |
| ID uniqueness | PASS |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| Study created/deleted | 0/0 |

## Luna batches

- `reports/temp/cs-a1-high-micro-regression-02/batch-01.json`
- `reports/temp/cs-a1-high-micro-regression-02/batch-02.json`
- `reports/temp/cs-a1-high-micro-regression-02/batch-03.json`
- `reports/temp/cs-a1-high-micro-regression-02/batch-04.json`

_Luna requests: 4, tokens: 34804_

## Closure

### CS–DE A1 HIGH = **NOT CLOSED**

**Blocking criteria:**

- retention 17/18 (expected 18/18)
- CURRENT_VALUE_MISMATCH=1
- CONFIRMED_REPAIR_REGRESSION=2

