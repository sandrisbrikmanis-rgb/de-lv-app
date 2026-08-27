# ES Kurss — Lección 1 OWNER gala COPY-ONLY apply report

**Generated:** 2026-08-27T09:50:32.754Z
**Base SHA:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Apply HEAD:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**Authority:** `reports/es-kurss-lesson-01-owner-gala-authority.json`

## Gates

| Gate | Result |
|------|--------|
| Requested LABOT | **14** |
| Processed | **14/14** |
| APPLIED_VERIFIED | **14/14** |
| CURRENT_VALUE_MISMATCH | **0** |
| FAILED | **0** |
| LV2-0036 `Sí, van.` retained | **PASS** |
| `Sí, se van.` in target field | **0 (PASS)** |
| NELABOT unchanged | **23/23** |
| FALSE_POSITIVE unchanged | **7/7** |
| TECHNICAL_DEFER unchanged | **1/1** |
| DE changes | **0** |
| Unexpected production changes | **0** |
| primary/www mirror | **PASS** |
| syntax | **PASS** |
| Kurss HTML structure | **PASS** |

## Verdict

**PASS** — 14/14 APPLIED_VERIFIED; LV2-0036 retained as NELABOT.

## Applied LABOT

| Audit ID | File | CURRENT → NEW | Status |
|----------|------|---------------|--------|
| ES-KURSS-LESSONS-LV2-0015 | `data/es/courseLessons.js` | `iEl La pronunciación aproximada de las p…` → `La pronunciación aproximada de las palab…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0030 | `data/es/courseLessons.js` | `♟Presente terminaciones…` → `♟ Terminaciones del presente…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0031 | `data/es/courseLessons.js` | `?Oraciones de preguntas…` → `?Oraciones interrogativas…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0032 | `data/es/courseLessons.js` | `♣Diferencia de persona…` → `♣Diferencias según la persona…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0025 | `data/es/courseLessons.js` | `er / sie → -er kommt…` → `er / sie → er kommt…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0026 | `data/es/courseLessons.js` | `wir → -wir kommen…` → `wir → wir kommen…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0028 | `data/es/courseLessons.js` | `sie → -Alemán en:…` → `sie → sie kommen…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0023 | `data/es/courseLessons.js` | `ich → -ich komme…` → `ich → ich komme…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0027 | `data/es/courseLessons.js` | `ihr → -En letón:…` → `ihr → ihr kommt…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0024 | `data/es/courseLessons.js` | `du → -du kommst…` → `du → du kommst…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0005 | `data/es/courseLessons.js` | `he / ella va…` → `él / ella va…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-DET-0018 | `data/es/courseTrainingCards.js` | `Albert y Martha van y vienen.…` → `Albert y Marta van y vienen.…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0035 | `data/es/courseTrainingCards.js` | `¿vienes?…` → `¿Vienes?…` | APPLIED_VERIFIED |
| ES-KURSS-LESSONS-LV2-0037 | `data/es/courseTrainingCards.js` | `Vas a ir…` → `¿Vais?…` | APPLIED_VERIFIED |

## LV2-0036 retention proof

- Field: `lesson1TrainingCardsEs[5].front`
- DE: `Ja, sie gehen.`
- Value before: `Sí, van.`
- Value after: `Sí, van.`
- Status: **NELABOT** (excluded from apply)
