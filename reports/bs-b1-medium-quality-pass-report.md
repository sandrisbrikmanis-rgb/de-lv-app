# BS–DE B1 Medium Quality Pass Report

**Date:** 2026-08-08
**Branch:** `cursor/bs-b1-medium-quality-pass-c1b5`
**Model:** gpt-5.6-luna

---

## Consolidation

| Kategorija | Skaits |
|---|---:|
| Historical MEDIUM | 725 |
| Duplicates (problem) | 0 |
| Field duplicates merged | 38 |
| STALE_AFTER_FIX | 31 |
| STALE_PATH | 36 |
| Local-resolvable / excluded | 0 |
| Luna audit candidates | 620 |
| Unique cards (candidates) | 466 |

---

## Luna verdicts

| Verdict | Skaits |
|---|---:|
| FIX | 577 |
| KEEP | 17 |
| STYLE_ONLY | 3 |
| SOURCE_LV_ISSUE | 8 |
| DE_READ_ONLY | 0 |
| NEEDS_REVIEW | 15 |

---

## Fix applied

| Metric | Count |
|---|---:|
| FIX verdicts | 577 |
| Applied | 577 |
| Skipped | 0 |
| Main translations changed | 257 |
| Study fields changed | 320 |
| Study cards changed | 207 |
| sectionAccents sync (fix script) | 82 cards |

### HIGH regression fixes (17 — post-medium pass)

Targeted regression found 17 HIGH (mostly swapped comparison meanings). All fixed locally ($0 API):

`b1-dadurch`, `b1-durchfall`, `b1-einfahrt`, `b1-einfarbig`, `b1-längeneinheit`, `b1-kastanie`, `b1-leistung`, `b1-löschen`, `b1-rausch`, `b1-rollen`, `b1-schmelzen`, `b1-senken`, `b1-sitz`, `b1-spannung`, `b1-taufen`, `b1-übernehmen`, `b1-wachen`

No unexpected CRITICAL during fix apply.

### NEEDS_REVIEW (not auto-fixed)

- `b1-sich-bemühen` | study.examples[0] | Tekst je prikazan kao [object Object], pa se ne može provjeriti.
- `b1-beziehen` | study.examples[1] | Tekst je prikazan kao [object Object], pa se ne može provjeriti.
- `b1-knapp` | study.examples[2] | Tekst je prikazan kao [object Object], pa se ne može provjeriti.
- `b1-sprung` | study.examples[1] | Tekst je prikazan kao [object Object], pa se ne može provjeriti.
- `b1-trennen` | study.examples[2] | Tekst je prikazan kao [object Object], pa se ne može provjeriti.
- `b1-überholen` | study.examples[1] | Tekst je prikazan kao [object Object], pa se ne može provjeriti.
- `b1-aufführen` | study.examples[2] | Tekst je prikazan kao [object Object], pa se ne može provjeriti.
- `b1-bemerken` | study.examples[2] | Tekst je prikazan kao [object Object], pa se ne može provjeriti.
- `b1-block` | study.examples[2] | Izvorni i trenutni tekst nisu dostupni za sigurnu procjenu.
- `b1-nachdem` | study.examples[0] | Izvorni i trenutni tekst nisu dostupni za sigurnu procjenu.
- `b1-pflegen` | study.examples[2] | Izvorni i trenutni tekst nisu dostupni za sigurnu procjenu.
- `b1-zünden` | study.examples[0] | Izvorni i trenutni tekst nisu dostupni za sigurnu procjenu.
- `b1-zünden` | study.examples[1] | Izvorni i trenutni tekst nisu dostupni za sigurnu procjenu.
- `b1-einführen` | study.comparison[2].meaning | Njemačko značenje i latvijski izvor ne podudaraju se jasno.
- `b1-kurs` | study.comparison[2].meaning | Njemački „Kurs” i latvijski izvor upućuju na različita značenja.

### SOURCE/LV ISSUES (BS unchanged)

- `b1-Stiftung-2760` | lv | „Fond” odgovara latvijskom izvoru, ali ne njemačkom značenju „fondacija”.
- `b1-holen` | study.examples[2].lv | LV izvor znači pozvati doktora, a ne otići po njega.
- `b1-hort` | study.examples[3].lv | LV izvor govori o vrtiću, dok Hort znači produženi boravak.
- `b1-kurs` | study.examples[0].lv | Latvijski glagol ne razjašnjava sadašnje ili prošlo vrijeme ni rod.
- `b1-gehalt-2` | study.comparison[0].meaning | Bosanski prati latvijski izvor, ali izvor odgovara značenju das Gehalt, ne der Gehalt.
- `b1-taufen` | study.comparison[2].meaning | Taufen znači „krstiti“, dok latvijski izvor znači „vjenčati se“.
- `b1-einheit` | study.comparison[1].meaning | BS odgovara izvoru „mjerna jedinica“, ali LV sužava DE „Einheit“.
- `b1-jahrgang` | study.comparison[2].meaning | „Godište“ je ispravan prevod za Jahrgang; problem je latvijski izvor.

---

## API usage

| Metric | Value |
|---|---:|
| Model | gpt-5.6-luna |
| Historical MEDIUM | 725 |
| Luna candidates (post-consolidation) | 620 |
| Luna audited | 590 |
| Batch requests | 36 |
| Retry requests | 0 |
| Input tokens | 70229 |
| Cached input tokens | 0 |
| Output tokens | 75504 |
| Reasoning tokens | 40461 |
| Total tokens | 145733 |

**cost not reliably calculated**

---

## Targeted medium regression

| Metric | Value |
|---|---:|
| Scope cards | 444 |
| Regression findings | 88 |
| CRITICAL | 0 |
| HIGH (before fix) | 17 |
| HIGH (after fix) | **0** |
| MEDIUM | 58 |
| Regression batch requests | 42 |
| Regression tokens | 201054 |

---

## Validation

| Check | Result |
|---|---|
| JavaScript syntax | **PASS** |
| UTF-8 | **PASS** |
| mojibake | **PASS** |
| Entries | **3367** |
| Study | **324** |
| standardStudy | **323** |
| minimalStudy | **1** |
| DE READ-ONLY | **PASS** |
| data ≡ www | **PASS** |
| sectionAccents TECHNICAL | **0** |
| LV remnants | **0** |
| EN remnants | **0** |
| Data hash | `9f02b62b1bad41c761e907d87c6ab0cb` |

---

## Status

| Statuss | Rezultāts |
|---|---|
| CRITICAL/HIGH CYCLE | **CLOSED** |
| MEDIUM CONSOLIDATED | **PASS** |
| MEDIUM AI REVIEWED | **PASS** |
| MEDIUM FIX APPLIED | **PASS** |
| SOURCE/LV ISSUES | **8** |
| NEEDS_REVIEW | **15** |
| sectionAccents TECHNICAL | **PASS** |
| sectionAccents LANGUAGE | **PASS** |
| DE READ-ONLY | **PASS** |
| STRUCTURAL PASS | **PASS** |
| MEDIUM REGRESSION REQUIRED | **YES** |

---

**FINAL – OWNER ACCEPTED: NOT ASSIGNED** — targeted medium regression must complete first.
