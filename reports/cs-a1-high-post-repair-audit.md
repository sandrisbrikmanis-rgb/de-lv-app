# CS–DE A1 HIGH POST-REPAIR AUDIT

## KOPSAVILKUMS

- Audit type: HIGH POST-REPAIR GALA VALIDATION / MICRO-REGRESSION (read-only)
- Model: GPT-5.6 Luna
- Baseline: `539d4fbd` (pirms HIGH repair block 1)
- Production changes šajā auditā: **0**
- **CS–DE A1 HIGH = NOT CLOSED**

## HIGH COVERAGE

| Metrika | Vērtība |
|---|---|
| original raw HIGH | 371 |
| original CONFIRMED_REAL | 287 |
| repair-targeted (REPAIRED + ALREADY_CORRECT) | 285 |
| OWNER override | 1 |
| accounted | 287/287 |
| missing | 0 |
| duplicate repair applications | 0 |
| unresolved mismatches | 1 |

### Reconciliation breakdown

| Gala statuss | Skaits |
|---|---|
| REPAIRED | 285 |
| ALREADY_CORRECT | 0 |
| OWNER_OVERRIDE_FALSE_POSITIVE | 1 |
| CURRENT_VALUE_MISMATCH | 1 |
| MISSING_FROM_REPAIR_SCOPE | 0 |

### Bloķējošie / neatrisinātie

- HIGH-362 `a1-essen` `study.explanation` → **CURRENT_VALUE_MISMATCH** (block 5, report: CURRENT_VALUE_MISMATCH)


## REPAIR EXECUTION

| Metrika | Vērtība |
|---|---|
| expected repair fields (blocks 1–6) | 286 |
| retained correct PĒC values | 285/286 |
| missing/wrong PĒC | 1 |
| PIRMS still present (wrong) | 0 |
| unexpected changed fields | 0 |
| missing expected changes | 0 |

### Missing PĒC

- block 5 #230 `a1-essen` `study.explanation`: got "[\"Hlavní myšlenka: Sloveso - jíst jídlo.\",\"Essen především znamená: konzumovat jídlo.\",\"Často popisuje: akce.\",\"Essen v podstatě znamená: jídlo nebo jídlo.\",\"Často popisuje: déšť.\",\"Essen znamená jíst.\",\"Das Essen může znamenat jídlo nebo jídlo obecně.\"]"


## LUNA MICRO-REGRESSION

| Metrika | Vērtība |
|---|---|
| changed cards audited | 155/154 |
| CONFIRMED_REPAIR_REGRESSION | 31 |
| PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR | 165 |
| FALSE_POSITIVE | 123 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_OWNER_REVIEW | 0 |

### CONFIRMED_REPAIR_REGRESSION

- **a1-blond-103** `csText`: Blondý is not a standard Czech adjective form; blond correctly translates German blond.
- **a1-blond-103** `card`: The repair replaced the noun Blondýnka with the nonstandard Czech form Blondý, leaving an incorrect adjective form.
- **a1-ins** `study.comparison[4].meaning`: Zum je zkratka zu dem a vyjadřuje dativní vztah k/ke; otázka kam? není jeho základní pádová otázka a může význam plést s ins.
- **a1-ins** `card`: Většina oprav je správná, ale HIGH oprava významu zum zachovala zavádějící vazbu na otázku kam?.
- **a1-kennen-study** `csMain`: Po opravě study.translation zůstal hlavní český překlad „Vědět“, což odporuje významu slovesa kennen a vytváří regresivní nekonzistenci.
- **a1-kennen-study** `card`: Oprava study.translation na „Znát“ je správná, ale nezměněný csMain stále uvádí opačný význam „Vědět“, takže karta je vnitřně nekonzistentní.
- **a1-können** `csMain`: Hlavní český překlad nebyl synchronizován s opraveným study.translation a stále přisuzuje können význam „vědět“.
- **a1-können** `study.explanation[0]`: Po změně překladu na „Umět • Moci“ zůstalo v hlavní myšlence chybné „vědět“, takže opravený význam není v celém bloku konzistentní.
- **a1-können** `card`: Oprava study.translation na „Umět • Moci“ je správná, ale csMain a část vysvětlení stále obsahují „Vědět“, což po opravě vytváří významový rozpor.
- **a1-lassen** `study.sectionAccents.examples[0].lv`: Zvýraznění zůstalo ve starém minulém čase, zatímco opravený překlad je v přítomném čase.
- **a1-lassen** `study.sectionAccents.comparison[1].meaning`: Zvýraznění ponechává původní chybný význam „Pobyt“, ačkoliv opravené pole nyní správně uvádí „Zůstat“.
- **a1-lassen** `card`: Opravené české věty jsou správné, ale zvýraznění v plném kontextu ponechává staré tvary a významy.
- **a1-laufen** `study.sectionAccents.comparison[0].meaning`: Zvýraznění neodpovídá opravenému významu s dvojicí „Běžet / fungovat“ a ponechává starý význam „Spustit“.
- **a1-laufen** `study.sectionAccents.comparison[3].meaning`: Zvýraznění ponechává původní „Provozovat“, zatímco opravené srovnání správně uvádí „Fungovat“.
- **a1-laufen** `card`: Opravená studijní pole správně používají „fungovat“, ale hlavní překlad a zvýraznění stále obsahují starý význam „provozovat“.
- **a1-seite** `csMain`: The card-level primary translation was not synchronized with the repaired study.translation, leaving the first meaning linguistically wrong.
- **a1-seite** `card`: The repaired study translation is correct, but the card-level CS main value still preserves the obsolete meaning Strana • Strana.
- **a1-sich** `csMain`: The card-level primary translation remains inconsistent with the repaired study.translation and preserves an incorrect reflexive gloss.
- **a1-sich** `card`: The repaired study translation and comparison meanings are correct, but the card-level CS main value still contains the obsolete wording.
- **a1-sie-study** `study.sectionAccents.examples[5].lv`: The formal German address example now correctly translates as Vařte, prosím., while the linked Czech annotation still says informal Vaříš.
- **a1-sie-study** `card`: The repaired Czech example is correct, but its linked accent annotation still contains the obsolete informal singular form.
- **a1-sollen** `study.sectionAccents.examples[1].lv`: Du sollst kommen is correctly translated as Máš přijít., but the linked annotation still uses the formal plural Musíte.
- **a1-sollen** `study.sectionAccents.examples[2].lv`: Ich soll zu Hause bleiben is correctly translated as Mám zůstat doma., but the linked annotation retains the stronger müssen meaning Musím.
- **a1-sollen** `card`: The repaired Czech examples correctly distinguish second-person and first-person obligation, but linked accent annotations retain the old person and force wording.
- **a1-essen** `study.explanation`: The field has seven strings, including nonsensical statements about Essen meaning food and describing rain; the required format is an array of four Czech strings.
- **a1-essen** `card`: The repaired explanation is not applied correctly: it remains a seven-item array with duplicated and incorrect content, but must contain exactly four Czech strings.
- **a1-sprechen-study** `study.examples[2].lv`: Český překlad je významově i gramaticky neslučitelný s uvedenou německou větou „Ich spreche Deutsch“ a oprava tento nesoulad způsobila.
- **a1-sprechen-study** `card`: Opravený český příklad neodpovídá německé větě: „Ich spreche Deutsch“ znamená „Mluvím německy“, ne „Mluví se svou učitelkou“.
- **a1-auch-study** `study.examples[1].lv`: German “Ich komme auch.” means “Já jdu taky”, not “Ona zde také pracuje.”
- **a1-auch-study** `study.examples[2].lv`: German “Sie arbeitet auch hier.” means “Ona zde také pracuje”, not a greeting.
- **a1-auch-study** `card`: The HIGH repair shifted example translations between rows, leaving both German-Czech example pairs semantically mismatched.


## OWNER PROTECTION

| Check | Result |
|---|---|
| a1-in / Berlīnē | PASS (actual: "Berlīnē") |
| unauthorized changes to 7 NEEDS_OWNER_REVIEW | 1 |
| unauthorized structural-gap repairs | 0 |

## INTEGRITY

| Check | Result |
|---|---|
| DE changes | 0 |
| cards | 702 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| unexpected production changes | 0 |
| study created | 0 |
| study deleted | 0 |

## PASS CRITERIA

| Kritērijs | Rezultāts |
|---|---|
| 287/287 CONFIRMED_REAL accounted | PASS |
| missing = 0 | PASS |
| duplicate repair application = 0 | PASS |
| unresolved CURRENT_VALUE_MISMATCH = 0 | FAIL |
| OWNER override Berlīnē = PASS | PASS |
| CONFIRMED_REPAIR_REGRESSION = 0 | FAIL |
| DE changes = 0 | PASS |
| unexpected changes = 0 | PASS |
| syntax / ID/order / mirror = PASS | PASS |

---

_Audita datums: 2026-08-12_
_Luna requests: 39, tokens: 290953_
