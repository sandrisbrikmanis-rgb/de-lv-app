# ET–DE Kurss — Live / Runtime Reopen Repair

**Generated:** see `reports/temp/et-kurss-live-runtime-final-regression.json`
**Branch:** `cursor/et-de-kurss-live-runtime-reopen-repair-4a7c`
**Baseline audit:** `reports/et-kurss-live-runtime-reopen-audit-baseline.md` (PR #639)

## Verdict

**ET_KURSS_REOPEN_NEEDS_OWNER_REVIEW** (1 duplicate-path residual)

Shared renderer **PASS**. CONTENT_REPAIR **24/25** reopen targets verified after OWNER **14/14** COPY-ONLY apply (`reports/et-kurss-reopen-owner-decisions-accepted-14.md`). One L18 duplicate LV line remains at `Kindel aine` (same CURRENT as REOPEN-OWNER-009 but not in OWNER path list).

`ET_KURSS_FINAL_CLOSED_ON_MAIN` is **not** restored until the residual duplicate path is OWNER-resolved.

## Summary

| Bucket | Requested | Applied | Verified | Owner pending |
|--------|-----------|---------|----------|---------------|
| CONTENT_REPAIR | 25 | 25 | 24/25 | 1 (duplicate path) |
| SHARED_RENDERER_REPAIR | 1 | 1 | PASS | 0 |
| ET_RENDERER/DATA_REPAIR | 0 | 0 | — | 0 |

| OWNER batch (REOPEN-001..014) | REQUESTED | APPLIED | VERIFIED |
|-------------------------------|-----------|---------|----------|
| L14–L18 COPY-ONLY | 14 | 14 | 14/14 |

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

### APPLIED — OWNER REOPEN batch (14/14)

`scripts/apply-et-kurss-reopen-owner-14.js` — exact CURRENT→NEW from `reports/et-kurss-reopen-owner-decisions-accepted-14.md`:

| ID | Lesson | Status |
|----|--------|--------|
| REOPEN-OWNER-001–002 | L14 Grammatika (Wollen, Mögen) | APPLIED |
| REOPEN-OWNER-003 | L15 Gramatika (entzweischneiden) | APPLIED |
| REOPEN-OWNER-004–005 | L16 Hääldus (Wälder, Bäuerinnen) | APPLIED |
| REOPEN-OWNER-006–014 | L18 Gramatika examples | APPLIED |

`REQUESTED_LABOT = 14` · `APPLIED_VERIFIED = 14/14` · `CURRENT_VALUE_MISMATCH = 0`

### Residual (1) — duplicate path

| Path | CURRENT | Reason |
|------|---------|--------|
| `kurssLesson18` → Gramatika → Kindel aine → examples[0] | `Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.` | Identical CURRENT to REOPEN-OWNER-009 but **not** in OWNER path list; COPY-ONLY skipped |

### Changed files

| File | Change |
|------|--------|
| `ui.js`, `www/ui.js` | Shared renderer: pass full section to matchers |
| `data/et/courseLessons.js`, `www/data/et/courseLessons.js` | OWNER granular LABOT (22 strings) |
| `scripts/apply-et-kurss-reopen-granular-labot.js` | L1–L7 granular LABOT apply |
| `scripts/apply-et-kurss-reopen-owner-14.js` | OWNER REOPEN 14 COPY-ONLY apply |
| `reports/et-kurss-reopen-owner-decisions-accepted-14.md` | OWNER accepted mapping |
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

Provide OWNER path + approved NEW for L18 `Kindel aine` duplicate (`Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.`) or authorize global apply of REOPEN-OWNER-009 NEW to all identical CURRENT occurrences.
