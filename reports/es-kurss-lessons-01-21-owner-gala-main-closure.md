# ES Kurss L1–21 — OWNER gala main closure

**Generated:** 2026-08-27T10:55:00Z  
**Scope:** Integrate draft PR #679 (L1), #680 (L2–11), #681 (L12–21) onto `main`  
**Method:** COPY-ONLY from OWNER gala authority mappings; no translation or extra cleanup

---

## Integration baseline

| Item | SHA |
|------|-----|
| **MAIN_BEFORE** | `0fe660d136136dd2d3a689f8c71b55242f9f5610` |
| **MAIN_AFTER** | `0233489bccf38ba812d128583e31a53250275bed` |

---

## PR integration sequence

| Step | PR | Action | Original head SHA | Rebased / final head SHA | Merge commit on main |
|------|-----|--------|-------------------|------------------------|----------------------|
| 1 | **#679** Lekcija 1 | Validated & merged | `cd148e8c9e92c8aae23bd9295a9fa74986dfd709` | *(no rebase — merged directly)* | `b67864f8f723835a3536ff3b45fb299c30593918` |
| 2 | **#680** L2–11 | Rebased onto post-#679 `main`; `chooseCasePlural` canonical micro-repair retained; validated & merged | `52cfe76beeebd4b43a2631bef241b3bd357baa17` | `b6410c7556f12e8525769a845e6dd0a53bc20212` (+ apply `fb31656bafdf0ba0f5404020aa1b417aad7f89e8`) | `44025bb38e993006db7cc2750351f0c366647c69` |
| 3 | **#681** L12–21 | Rebased onto post-#680 `main`; conflict in `languages/es/ui.js` `fillCase` resolved to OWNER gala value; validated & merged | `1d58afe196f05ae8ffd8d3d53af3b80e896a242b` | `a202b4731b2c08e72fc734e6f9b4f86c52ac3707` | `0233489bccf38ba812d128583e31a53250275bed` |

### PR #681 conflict resolution (OWNER-only)

| File | Conflict | Resolution |
|------|----------|------------|
| `languages/es/ui.js` + `www/languages/es/ui.js` | `fillCase`: HEAD `Ejercicio I — Usa la conjugación correcta` vs branch `Ejercicio I — Usa el caso correcto` | **Kept OWNER gala:** `Ejercicio I — Usa el caso correcto` |
| same | `chooseCasePlural` | Already identical on both sides — canonical value retained |

---

## OWNER accounting

| Metric | Count |
|--------|------:|
| Source OWNER LABOT (L1) | 14 |
| Source OWNER LABOT (L2–11) | 154 |
| Source OWNER LABOT (L12–21) | 213 |
| **Total source OWNER LABOT** | **381** |
| Superseded shared `chooseCasePlural` (L2–11) | 3 |
| Superseded shared `chooseCasePlural` (L12–21) | 9 |
| **Total superseded shared duplicates** | **12** |
| Unique production targets (L1) | 14 |
| Unique production targets (L2–11) | 151 |
| Unique production targets (L12–21) | 204 |
| **Total unique production targets** | **369** |
| L1 micro-repair (LV2-0036, outside gala LABOT) | 1 |

---

## Closure verification gates (production `main` @ `0233489b`)

| Gate | Required | Result |
|------|----------|--------|
| L1 OWNER targets — gala NEW exact-match | 14/14 | **PASS** |
| L1 LV2-0036 micro-repair | `Sí, se van.` / `Ja, sie gehen.` | **PASS** |
| L2–11 unique targets — gala NEW exact-match | 151/151 | **PASS** |
| L12–21 unique targets — gala NEW exact-match | 204/204 | **PASS** |
| `chooseCasePlural` canonical value | 1/1 | **PASS** |
| CURRENT_VALUE_MISMATCH | 0 | **PASS (0)** |
| FAILED | 0 | **PASS (0)** |
| DE changes (excluding applied OWNER targets) | 0 | **PASS (0)** |
| Neplānotas production izmaiņas | 0 | **PASS (0)** |
| Primary / `www/` mirror | PASS | **PASS** |
| JavaScript syntax | PASS | **PASS** |
| Kurss HTML structure | PASS | **PASS** |
| PR conflicts remaining | 0 | **PASS (0)** |

---

## Per-lesson results (unique production targets verified on main)

| Lesson | L1 | L2–11 | L12–21 | Total unique | Status |
|--------|---:|------:|-------:|-------------:|--------|
| 1 | 14 | — | — | 14 | PASS |
| 2 | — | 11 | — | 11 | PASS |
| 3 | — | 17 | — | 17 | PASS |
| 4 | — | 27 | — | 27 | PASS |
| 5 | — | 10 | — | 10 | PASS |
| 6 | — | 14 | — | 14 | PASS |
| 7 | — | 11 | — | 11 | PASS |
| 8 | — | 13 | — | 13 | PASS |
| 9 | — | 22 | — | 22 | PASS |
| 10 | — | 6 | — | 6 | PASS |
| 11 | — | 19 | — | 19 | PASS |
| 12 | — | — | 15 | 15 | PASS |
| 13 | — | — | 35 | 35 | PASS |
| 14 | — | — | 23 | 23 | PASS |
| 15 | — | — | 16 | 16 | PASS |
| 16 | — | — | 36 | 36 | PASS |
| 17 | — | — | 13 | 13 | PASS |
| 18 | — | — | 18 | 18 | PASS |
| 19 | — | — | 16 | 16 | PASS |
| 20 | — | — | 19 | 19 | PASS |
| 21 | — | — | 12 | 12 | PASS |
| Shared UI `chooseCasePlural` | — | 1 | 1 | 1 (canonical) | PASS |
| **Totals** | **14** | **151** | **204** | **369** | **PASS** |

*Shared UI counted once in totals (L2–11 canonical `LV2-0308` and L12–21 canonical `LV2-0453` converge to the same production field).*

---

## Critical value exact-match proof (production)

### L1 — LV2-0036 (`lesson1TrainingCardsEs[5]`)

| Field | Production value | Expected | Match |
|-------|------------------|----------|-------|
| Dialog prompt (`[4].front`) | `¿Se van?` | unchanged | PASS |
| Response (`[5].front`) | `Sí, se van.` | `Sí, se van.` | **PASS** |
| DE (`[5].back`) | `Ja, sie gehen.` | `Ja, sie gehen.` | **PASS** |

### L17 — LV2-0673 (`kurssLesson17.sections[5].cards[24].lv`)

```
El hermano va con su padre, con su madre, con su maestro, con su tío, con su tía, con su primo y con su prima.
```

**Exact-match:** PASS (includes `con su tía`)

### Shared UI — `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural`

```
¡Pon la palabra en el caso correcto y forma el plural!
```

**Exact-match:** PASS (verified in `languages/es/ui.js` and `www/languages/es/ui.js`)

---

## DE field integrity

| Check | Result |
|-------|--------|
| DE snapshots excluding all 369 applied OWNER target fields | **0 unexpected changes** |
| Training card DE backs (e.g. LV2-0036) | **unchanged** |

---

## Infrastructure checks

| Check | Result |
|-------|--------|
| `data/es/courseLessons.js` ↔ `www/data/es/courseLessons.js` | **PASS** (identical) |
| `data/es/courseTrainingCards.js` ↔ `www/data/es/courseTrainingCards.js` | **PASS** (identical) |
| `languages/es/ui.js` ↔ `www/languages/es/ui.js` | **PASS** (identical) |
| JavaScript syntax (all 6 production files) | **PASS** |
| Kurss HTML structure (lessons 1–7 legacy) | **PASS** |

Production files changed vs MAIN_BEFORE: only the 6 expected `data/` / `www/` mirror paths (plus OWNER authority reports/scripts committed with PRs).

---

## PR status after closure

| PR | GitHub state after push |
|----|-------------------------|
| #679 | MERGED (`b67864f8`) |
| #680 | Integrated on main (`44025bb3`) — branch superseded |
| #681 | Integrated on main (`0233489b`) — branch superseded |

---

## Final status

# ES KURSS L1–21 — OWNER ACCEPTED / CLOSED ON MAIN

All mandatory gates PASS on production `main` @ `0233489bccf38ba812d128583e31a53250275bed`.
