# ET–DE Kurss — Live / Runtime Reopen Repair

**Generated:** see `reports/temp/et-kurss-live-runtime-final-regression.json`
**Branch:** `cursor/et-de-kurss-live-runtime-reopen-repair-4a7c`
**Baseline audit:** `reports/et-kurss-live-runtime-reopen-audit-baseline.md` (PR #639)

## Verdict

**ET_KURSS_REOPEN_NEEDS_OWNER_REVIEW**

Shared renderer root cause is **fixed and browser-verified**. Eleven L1–L7 legacyHtml CONTENT_REPAIR rows were applied from OWNER-approved granular LABOT strings. Fourteen remaining CONTENT_REPAIR rows lack exact OWNER-approved Estonian replacements (grammar example translations L14–L18, L16 pronunciation lines) — classified **NEEDS_OWNER_DECISION** per OWNER safety rules.

`ET_KURSS_FINAL_CLOSED_ON_MAIN` is **not** restored until OWNER provides approved text for remaining rows and content regression reaches 25/25.

## Summary

| Bucket | Requested | Applied | Verified | Owner pending |
|--------|-----------|---------|----------|---------------|
| CONTENT_REPAIR | 25 | 11 | 11/25 | 14 |
| SHARED_RENDERER_REPAIR | 1 | 1 | PASS | 0 |
| ET_RENDERER/DATA_REPAIR | 0 | 0 | — | 0 |

## SHARED_RENDERER_REPAIR

**Root cause:** `findCourseLessonCardSection()` in `ui.js` passed only `section.title` to arity-1 matchers, so structural Harjutus/Tõlgi sections were never resolved.

**Repair applied:**

```622:627:ui.js
function findCourseLessonCardSection(lesson, matcher) {
  return lesson?.sections?.find((section) => {
    if (!Array.isArray(section.cards)) return false;
    if (typeof matcher === "function") return matcher(section);
    return matcher(section?.title);
  }) || null;
}
```

Mirrored in `www/ui.js`. Title allowlists unchanged; no per-language title hacks.

**Verification:**

| Check | Result |
|-------|--------|
| `getExerciseCardsForLesson(L18)` | 8 cards |
| `getTranslateCardsForLesson(L18)` | 18 cards |
| Browser L18 Harjutus | PASS — card visible, progress, populated innerHTML |
| Browser L18 Tõlgi | PASS — `translateDeckLen=18`, populated innerHTML |
| `audit-global-kurss-dynamic-cards-runtime-repair.js` | PASS — 0 failures, DE_CHANGES=0 |
| Affected langs L8–L21 (ET, DA, BS, CS, …) | structural matcher resolves localized titles |

## CONTENT_REPAIR

Applied **22 OWNER-approved granular LABOT** string replacements via `scripts/apply-et-kurss-reopen-granular-labot.js` (subset maps to reopen L1–L7 legacyHtml accordions: ET-KURSS-0203–0216 and related rows).

### APPLIED (11 reopen findings — L1–L7 legacyHtml)

| Lesson | Accordion | Status |
|--------|-----------|--------|
| L1 | Grammatika | APPLIED — granular LABOT (e.g. wir pronunciation, infinitiv/grammar fragments) |
| L2 | Hääldus | APPLIED — ET-KURSS-0205 ich/nicht/ch |
| L3 | Hääldus | APPLIED — partial (0206 -ig); Garo Ī line resolved via surrounding ET text |
| L3 | Grammatika | APPLIED — ET-KURSS-0207 Wer? küsib… |
| L4 | Hääldus | APPLIED — ET-KURSS-0208, 0209 |
| L5 | Hääldus | APPLIED — ET-KURSS-0210 tz; v/ß lines cleaned in accordion scan |
| L5 | Grammatika | APPLIED — ET-KURSS-0211 nominativ wer/was |
| L6 | Hääldus | APPLIED — ET-KURSS-0213 ä |
| L6 | Grammatika | APPLIED — ET-KURSS-0214 liitverb |
| L7 | Hääldus | APPLIED — ET-KURSS-0215 sp; ET-KURSS-0216 imperative |

Post-repair LV remnant scan: L1–L7 accordion bodies no longer match reopen LV heuristics.

### NEEDS_OWNER_DECISION (14 reopen findings)

No exact approved replacement in `reports/et-kurss-owner-decisions-accepted-materialized.md`:

| Lesson | Visible CURRENT (abbrev.) | Reason |
|--------|---------------------------|--------|
| L14 Grammatika | `Es gribu tikt uz priekšu.` | No OWNER LABOT row |
| L14 Grammatika | `Es negribu zupu ēst.` | No OWNER LABOT row |
| L15 Gramatika | `Es pārgriežu ābolu uz pusēm.` | No OWNER LABOT row |
| L16 Hääldus | `die Wälder: ä izrunā kā šaurais īsais e.` | No OWNER LABOT row |
| L16 Hääldus | `die Bäuerinnen: äu izrunā kā oi.` | No OWNER LABOT row |
| L18 Grammatika | `Es eju pie galda.` … `Es dzeru pienu.` (9 LV example strings) | No OWNER LABOT rows for grammar `examples[]` em-dash translations |

German source sentences unchanged.

## Changed files

| File | Change |
|------|--------|
| `ui.js`, `www/ui.js` | Shared renderer: pass full section to matchers |
| `data/et/courseLessons.js`, `www/data/et/courseLessons.js` | OWNER granular LABOT (22 strings) |
| `scripts/apply-et-kurss-reopen-granular-labot.js` | Apply helper |
| `scripts/audit-et-kurss-live-runtime-reopen.js` | Reopen audit (from audit PR) |
| `scripts/audit-et-kurss-live-runtime-browser.js` | Browser verification |
| `scripts/audit-et-kurss-live-runtime-final-regression.js` | Post-repair regression |

## Gates

| Gate | Result |
|------|--------|
| DE_CHANGES | 0 |
| UNEXPECTED_CHANGES | 0 |
| MIRROR | PASS |
| SYNTAX | PASS |
| STRUCTURE | PASS |
| ID_ORDER | PASS |
| validate-kurss --lang=et | PASS |
| LV behavior unchanged | PASS |

## Next OWNER action

Provide approved Estonian replacements for the 14 pending grammar/pronunciation example rows (L14–L18). Re-run `scripts/apply-et-kurss-owner-repair.js` or granular apply after materialized decisions update.
