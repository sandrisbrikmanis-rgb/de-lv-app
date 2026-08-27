# ES Kurss — Lecciones 2–11 OWNER gala COPY-ONLY apply report

**Generated:** 2026-08-27T10:25:42.620Z
**Base SHA:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Authority:** `reports/es-kurss-lessons-02-11-owner-gala-authority.json`

## Shared UI micro-repair (PR #680)

Consolidated duplicate `chooseCasePlural` OWNER targets from lessons 8–11 into one canonical shared UI production target.

```text
154 source OWNER LABOT decisions
→ 3 duplicate shared targets superseded
→ 151 unique production targets
→ 151/151 final exact-match PASS
```

| Item | Value |
|------|-------|
| Shared UI field | `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural` |
| PR value before micro-repair | `¡Escribe la forma conjugada correcta y ponla en plural!` |
| Canonical NEW | `¡Pon la palabra en el caso correcto y forma el plural!` |
| Canonical target ID | `ES-KURSS-LESSONS-LV2-0308` |
| Superseded IDs | `ES-KURSS-LESSONS-LV2-0344`, `ES-KURSS-LESSONS-LV2-0358`, `ES-KURSS-LESSONS-LV2-0424` |
| Shared UI canonical target | **1/1 PASS** |

## Gates

| Gate | Result |
|------|--------|
| Source OWNER LABOT decisions | **154** |
| Duplicate shared decisions superseded | **3** |
| Unique production targets | **151** |
| Unique targets processed | **151/151** |
| Final APPLIED_VERIFIED | **151/151** |
| Final NEW exact-match | **151/151** |
| CURRENT_VALUE_MISMATCH | **0** |
| FAILED | **0** |
| DE changes | **0** |
| Unexpected production changes | **0** |
| Changes outside L2–L11/shared UI scope | **0** |
| primary/www mirror | **PASS** |
| JavaScript syntax | **PASS** |
| Kurss HTML structure | **PASS** |

## Per-lesson unique targets (lesson-only)

| Lesson | Unique targets |
|--------|----------------|
| 2 | 11/11 |
| 3 | 17/17 |
| 4 | 27/27 |
| 5 | 10/10 |
| 6 | 14/14 |
| 7 | 11/11 |
| 8 | 13/13 |
| 9 | 22/22 |
| 10 | 6/6 |
| 11 | 19/19 |
| Shared UI canonical | 1/1 |
| **Total unique** | **151/151** |

## Verdict

**PASS** — 154 source OWNER decisions consolidated to 151 unique production targets; shared UI canonical exact-match verified.

## L2-0062 proof

- Field: `lesson2TrainingCardsEs[13].front`
- Applied NEW: `¿Quién se va?`
- Dialog context: `Nos vamos.` / `Wir gehen.` — `¿Quién se va?` is semantically correct.
