# Global Kurss — dynamic Harjutus / Tõlgi runtime repair

**Verdict:** **GLOBAL_KURSS_DYNAMIC_CARDS_RUNTIME_REPAIR_PASS**

## ROOT_CAUSE

Shared ui.js matched exercise/translate sections only by hardcoded title allowlists; localized titles (e.g. ET Harjutus/Tõlgi) skipped card binding and left blank flashcards.

Secondary failure: without title match, `renderCourseLessonFromData` omitted `data-lesson-id` and mis-tagged translate buttons as exercise cards, so `getExerciseTarget` / `getCourseTranslateTarget` could not bind.

## AFFECTED_LANGUAGES (title allowlist gap, fixed by structural matchers)

- `bg`
- `es`
- `et`
- `fr`
- `gr`
- `hr`
- `hu`
- `mk`
- `pl`
- `pt`
- `ro`
- `ru`
- `sk`
- `sq`
- `sr`
- `tr`
- `uk`

## CHANGED_FILES

- `ui.js`
- `www/ui.js`
- `scripts/lib/kurss-dynamic-card-section-matchers.js`

## Gates

| Gate | Result |
|------|--------|
| GLOBAL_KURSS_DYNAMIC_CARD_RENDER | **PASS** (0 section failures) |
| LV_KURSS_UNCHANGED | **PASS** |
| DE_CHANGES | **0** |
| LINGUISTIC_CONTENT_CHANGES | **0** |
| SYNTAX | **PASS** |
| STRUCTURE | **PASS** |
| validate-kurss | **PASS** |

## L8–L21 regression matrix (sample: ET lesson 18)

| Section | Title | Cards | Simulated attr | Pass |
|---------|-------|-------|----------------|------|
| Exercise (§5) | Harjutus | 8 | `data-course-exercise-card data-lesson-id="lesson18"` | PASS |
| Translate (§6) | Tõlgi | 18 | `data-course-translate-card data-lesson-id="lesson18"` | PASS |

## Before / after behavior

- **Before:** Localized section titles outside allowlists → `getCourseExerciseCards` / `getCourseTranslateCards` returned `[]` → blank flashcard buttons (ET L18 Harjutus/Tõlgi confirmed).
- **After:** Structural card-shape matching binds exercise (`prompt`/`fill`/conjugation) and translate (`lv`+`de` pairs / `translationCards`) sections regardless of localized title; DOM attrs and renderer initialization align with LV.

## Per-language failure summary

- `bg`: failures=0
- `bs`: failures=0
- `cs`: failures=0
- `da`: failures=0
- `en`: failures=0
- `es`: failures=0
- `et`: failures=0
- `fi`: failures=0
- `fr`: failures=0
- `gr`: failures=0
- `hr`: failures=0
- `hu`: failures=0
- `is`: failures=0
- `it`: failures=0
- `lb`: failures=0
- `lt`: failures=0
- `lv`: failures=0
- `mk`: failures=0
- `nb`: failures=0
- `nl`: failures=0
- `nn`: failures=0
- `pl`: failures=0
- `pt`: failures=0
- `ro`: failures=0
- `ru`: failures=0
- `sk`: failures=0
- `sl`: failures=0
- `sq`: failures=0
- `sr`: failures=0
- `sv`: failures=0
- `tr`: failures=0
- `uk`: failures=0
