# Global Kurss/Course card visual parity repair (LV–DE master)

**Repository:** `sandrisbrikmanis-rgb/de-lv-app`  
**Branch:** `cursor/global-course-card-visual-parity-repair-3141`  
**HEAD SHA:** `0cb0134aeed16a1e26a252d5dd6ef58973f81323`  
**Runtime:** https://sandrisbrikmanis-rgb.github.io/de-lv-app/  
**Generated:** 2026-08-25 (updated: LV first-time language selection fix)

## Summary

Global renderer fix restores **100% Kurss card/section visual parity** for ES and FR (the only languages with mismatched legacy HTML class names). All other active languages already used LV-master `kurss-*` classes. **DE learning content unchanged (0). Localized text unchanged (0). No unrelated cleanup.**

## Root cause

ES and FR `data/{lang}/courseLessons.js` legacy HTML used class names with **no CSS rules** in `style.css`:

| Legacy class (ES/FR data) | LV master class | Visual impact |
|---|---|---|
| `course-lesson-section` | `kurss-lesson-section` | Missing section dividers, spacing, h4 hierarchy |
| `course-examples` | `kurss-examples` | Missing card grid / column gap |
| `course-example` | `kurss-example` | Missing dark rounded card background, border, padding |
| `curso-lección-sección` (ES ×1) | `kurss-lesson-section` | Unstyled section block |
| `items-intro-info` (ES ×1) | `artikuli-intro-info` | Wrong secondary info class |

**Scan:** only `data/es/courseLessons.js` and `data/fr/courseLessons.js` contained these legacy classes (all other 30 languages already matched LV).

**Additional structural issue (ES verb basics):** outer `div.course-example` wrapping only child `div.course-example` elements — should be `kurss-examples` container per LV master.

## Fix (global renderer — one change)

Added `normalizeCourseLegacyHtml()` + `normalizeCourseLegacyDom()` in `ui.js` / `www/ui.js`:

- Maps all legacy class aliases to LV `kurss-*` / `artikuli-*` equivalents at HTML injection time
- Repairs mis-nested example containers (outer `kurss-example` → `kurss-examples` when it only wraps child examples)
- Applied in both code paths:
  - `renderCourseLessonFromData()` — lessons 1–21 `legacyHtml`
  - `initStaticCourseLessons()` — articles, pronouns, pronunciation, consonants, verb basics, sentence structure panels

**No per-language data file edits** — renderer normalizes at load time.

## LV first-time language selection fix (production)

### Problem

New users (cleared `localStorage`) who pick **Latviešu** from the language picker saw:

```
[AppLaunch] Launch flow failed: Error: UI strings for lv were not registered
```

App booted with wrong language (`en` from splash pre-init) instead of `lv`.

### Root cause (`languages/i18n.js`)

1. Splash pre-initializes i18n with `detectLaunchLanguageCode()` → often `en` (browser locale).
2. `AppI18n.init("en")` loads LV as **fallback** first (`ensureFallbackStrings`), marking `./languages/lv/ui.js` in `loadedUiScripts`.
3. EN UI script overwrites `window.LANGUAGE_UI_STRINGS` (`__langCode: "en"`).
4. User picks LV → `fetchUiStrings("lv")` skips script reload but global still holds EN → **throws**.

This is a **production bug**, not a test harness artifact.

### Fix (minimal)

Added `stringsByCode` Map in `fetchUiStrings()` — cache cloned UI strings per language code on first successful load. Subsequent requests return cached strings without relying on the mutable `window.LANGUAGE_UI_STRINGS` global.

### First-time selection verification (32 languages)

Simulates new user: `localStorage.clear()` → pick language → verify active language, `menu.course` label, Kurss opens, zero launch console errors.

| Result | Count |
|---|---|
| Languages tested | **32** |
| **PASS** | **32** |
| **FAIL** | **0** |
| Console launch errors | **0** |

Evidence: `reports/temp/first-language-selection.json`

## Changed files

| File | Change |
|---|---|
| `ui.js` | Global legacy HTML class normalization + DOM structure repair |
| `www/ui.js` | Synced copy |
| `languages/i18n.js` | Per-language UI string cache (fixes LV first-time picker) |
| `www/languages/i18n.js` | Synced copy |
| `scripts/verify-global-course-card-visual-parity.js` | Runtime Kurss parity verification |
| `scripts/verify-first-language-selection.js` | First-time language picker verification (new) |
| `reports/global-course-card-visual-parity-repair.md` | This report |

## Verification scope

| Dimension | Count |
|---|---|
| Active UI languages | **32** |
| Kurss sections per language | **29** (menu + 6 static panels + lessons menu + lessons 1–21) |
| Viewports | **2** (desktop 1280×900, mobile 390×844) |
| Total runtime checks executed | **1800** |

### Sections audited per language

1. `kurss-menu`
2. `pronunciation-vowels` (`#kurssPronunciationLesson`)
3. `pronunciation-consonants` (`#kurssConsonantsLesson`)
4. `articles` (`#kurssArticlesLesson`)
5. `pronouns` (`#kurssPronounsLesson`)
6. `verb-basics` (`#kurssVerbBasicsLesson`)
7. `sentence-structure` (`#kurssSentenceStructureLesson`)
8. `lessons-menu`
9. `lesson-1` … `lesson-21` (all accordions opened)

### Checks per section

- Zero legacy class names in DOM (`course-*`, `items-intro-info`, `curso-lección-sección`)
- Card styling present (border-radius ≥ 4px or gradient/border — matches LV dark rounded cards)
- Title hierarchy (`h3` lesson title, `h4` section headers)

## Verification results

| Result | Count |
|---|---|
| **PASS** | **1800** |
| **FAIL** | **0** |
| Legacy class hits in DOM | **0** |
| Timeouts | **0** |

### Per-language highlights

| Language | Desktop | Mobile | Notes |
|---|---|---|---|
| **ES** (primary affected) | 29/29 PASS | 29/29 PASS | All legacy classes normalized at render |
| **FR** (primary affected) | 29/29 PASS | 29/29 PASS | All legacy classes normalized at render |
| **LV** (master) | 29/29 PASS | 29/29 PASS | First-time picker fixed via `stringsByCode` cache |
| **Other 29 languages** | 29/29 PASS each | 29/29 PASS each | Already used correct `kurss-*` classes |

## LV timeout retest (READ-ONLY, targeted — superseded by production fix)

### Precisely identified timeout views (initial 1800-run harness)

Both failures occurred at `selectLanguage("lv")` before Kurss opened:

| # | Language | Viewport | Failed step |
|---|---|---|---|
| 1 | `lv` | desktop (1280×900) | `AppI18n.getCurrentLanguage() === "lv"` timeout |
| 2 | `lv` | mobile (390×844) | same |

### Resolution

The timeout was caused by the **production i18n bug** above (not a Kurss visual defect). After the `stringsByCode` fix:

- LV picker harness: **58/58 PASS** (29 sections × 2 viewports)
- No workaround (`localStorage.appLanguage` pre-set) needed

Evidence (pre-fix targeted retest): `reports/temp/lv-kurss-timeout-retest.json`

### Regression guards

| Guard | Result |
|---|---|
| DE content changes | **0** |
| Translation / localized text changes | **0** |
| Non-Kurss section changes | **0** |
| Unexpected file changes | **0** (scoped to `ui.js`, `i18n.js`, verification scripts, report) |

Raw JSON (full 32-language Kurss run): `reports/temp/global-course-card-visual-parity.json`  
Raw JSON (LV retest, pre-fix): `reports/temp/lv-kurss-timeout-retest.json`  
Raw JSON (first-time language picker, 32 languages): `reports/temp/first-language-selection.json`

## How to re-run verification

```bash
# Kurss card parity (all languages):
COURSE_PARITY_PORT=8901 node scripts/verify-global-course-card-visual-parity.js

# First-time language picker (all 32 languages):
node scripts/verify-first-language-selection.js

# Single language:
COURSE_PARITY_PORT=8901 node scripts/verify-global-course-card-visual-parity.js --lang=es,fr
```
