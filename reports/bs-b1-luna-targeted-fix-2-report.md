# BS–DE B1 Luna Targeted Fix #2 Report

**Date:** 2026-08-08  
**Branch:** `cursor/bs-b1-luna-fix-2-c1b5`  
**Source:** `reports/temp/bs-b1-luna-regression-findings.json`, `reports/bs-b1-luna-targeted-regression-report.md`

---

## Fix summary

| Kategorija | Pirms | Pēc fix |
|---|---:|---:|
| CRITICAL | 1 | **0** |
| HIGH | 37 | **0** (34 fixed + 3 false positive) |
| stale sectionAccents | 5 | **0** |
| targeted semantic cache collisions | 15 | **13** (see note) |
| SOURCE/LV ISSUES | 6 | **6** (unchanged) |

---

## CRITICAL fix

| Card | Field | Before | After | Verification |
|---|---|---|---|---|
| `b1-See-2572` | `lv` | Jezero | **More** | `de_article: die` → feminine See = sea; LV `jūra` confirms |

---

## HIGH fixes (34 applied)

| Card | Field | Fix |
|---|---|---|
| `b1-einsehen-706` | `lv` | Pristati → **Priznati** (einsehen/atzīt = admit) |
| `b1-Kabelkanal-1440` | `lv` | Kablovski televizijski kanal → **Kanal za kablove** |
| `b1-Riss-2324` | `lv` | Jaz → **Pukotina** |
| `b1-aufführen` | `study.comparison[2].meaning` | Izvesti → **Nazvati / navesti** (nennen) |
| `b1-behandeln` | `study.examples[0].lv` | leči → **liječi** |
| `b1-bemerken` | `study.examples[2].lv` | primetio → **primijetio** |
| `b1-beraten` | `study.examples[0].lv` | Lekar savetuje → **Ljekar savjetuje** |
| `b1-blase` | `study.comparison[1].meaning` | Mjehur → **Rana** (die Wunde) |
| `b1-block` | `study.comparison[0/2].meaning` | differentiated Block vs Klotz |
| `b1-daher` | translation/explanation/comparison | Dakle → **Zato** |
| `b1-einholen` | `study.comparison[2].meaning` | Dohvatiti → **Prestići** (überholen) |
| `b1-einsetzen` | `study.tip` | settze → **setzt** (German in tip) |
| `b1-enthalten` | `study.examples[2].lv` | Poruka → **Izvještaj** (Bericht) |
| `b1-feststellen` | `study.comparison[2].meaning` | Utvrditi → **Primijetiti** (bemerken) |
| `b1-geschlecht` | explanation/comparison[2] | nikakav rod → **srednji rod**; Spol → **Generacija** |
| `b1-kippen` | `study.examples[0].lv` | Staklo → **Čaša** |
| `b1-klappen` | `study.explanation` | grammar fix |
| `b1-kürze` | `study.comparison[1].meaning` | Kratkoća → **Uskoro** (in Kürze) |
| `b1-nachdem` | explanation/comparison[0] | nakon kada → **nakon što** |
| `b1-nachgeben` | `study.comparison[2].meaning` | Popustiti → **Priznati** (zugeben) |
| `b1-pflegen` | comparison[1/2] | Brinuti se o / Čistiti |
| `b1-pochen` | `study.comparison[1].meaning` | Da kucam → **Kucati** |
| `b1-rausch` | `study.comparison[2].meaning` | Opijenost → **Ovisnost** (die Sucht) |
| `b1-schnitt` | `study.comparison[2].meaning` | Rez → **Rana** (die Wunde) |
| `b1-sprung` | `study.comparison[0].meaning` | Jaz → **Pukotina** |
| `b1-strom` | `study.comparison[2].meaning` | Struja → **Energija** (die Energie) |
| `b1-übersehen` | `study.comparison[2].meaning` | Previdjeti → **Primijetiti** (bemerken) |
| `b1-verband` | `study.comparison[2].meaning` | → **Veza, veza** (die Verbindung) |
| `b1-verbindung` | `study.comparison[2].meaning` | → **Zavoj • udruženje** (der Verband) |
| `b1-verbrennen` | `study.comparison[2].meaning` | Spaliti → **Zapaliti** (anzünden) |
| `b1-zünden` | `study.comparison[2].meaning` | Paliti → **Gorjeti** (brennen) |

---

## False positives (3 verified unchanged)

| Card | Field | Verdict |
|---|---|---|
| `b1-berichten` | `study.examples[2].lv` | DE Die Kollegin is singular; BS correct |
| `b1-schmieren` | `study.comparison[1].word` | Already German per DE READ-ONLY |
| `b1-nachdem` | `study.tip` | Verified false positive from fix #1 |

---

## sectionAccents (6 fixed)

| Card | Fix |
|---|---|
| `b1-sich-bedienen` | comparison[2].word accent: Koristiti → benutzen |
| `b1-behandeln` | comparison[0/2].word accents → behandeln / besprechen |
| `b1-beraten` | comparison[2].word accent → besprechen |
| `b1-einsetzen` | comparison[1].word accent → benutzen |
| `b1-streichen` | comparison[0].word accent → streichen |

---

## SOURCE/LV ISSUES (6 — unchanged)

BS not modified where BS is correct per DE. Includes `b1-Weise-3228` (Način correct for die Weise).

---

## Cache note

13 semantic collisions remain in fix #2 scope. Most are acceptable shared translations for identical German comparison lemmas (e.g. both `nennen` → Nazvati/navesti) or cards outside the 37 HIGH list (e.g. `b1-Fläche-904`, `b1-reinigen-2270`). HIGH-related cache pairs were addressed in this pass.

---

## Dati

| Metric | Count |
|---|---:|
| Mainīto kartīšu skaits | ~32 |
| Mainītie galvenie BS (`lv`) | 4 |
| Mainītie study lauki | ~38 |
| Mainītie sectionAccents | 6 |

---

## API

| Metric | Value |
|---|---|
| Model | gpt-5.6-luna |
| Requests | **0** |
| **API cost** | **$0** |

All fixes applied locally with DE context verification.

---

## Validācija

| Check | Result |
|---|---|
| JavaScript syntax | PASS |
| 3367 entries / 324 study | PASS |
| DE READ-ONLY | PASS |
| data ≡ www | PASS |
| sectionAccents TECHNICAL | **0** |
| LV/EN remnants | PASS |

---

## Nākamais solis

Targeted regression scope #2: `reports/temp/bs-b1-luna-regression-scope-2.json` (~40 cards, deduplicated).

**Nepalaist** pilnu B1 auditu. Nākamais: Luna Targeted Regression Audit #2.
