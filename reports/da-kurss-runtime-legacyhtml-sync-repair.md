# DA–DE Kurss — runtime legacyHtml sync repair

**Generated:** 2026-08-16T19:06:52.582Z
**Dry run:** false

## Runtime source

Renderer (`www/ui.js` → `renderCourseLessonFromData`):

```javascript
if (target && lesson?.legacyHtml) {
    target.innerHTML = lesson.legacyHtml;
}
```

**Runtime source before:** `COURSE_LESSON_DATA.kurssLessonN.legacyHtml` (inline duplicated HTML strings; PR #571 fixes lived here, PR #572 fixes in HTML map only)

## Sync method

**Chosen (2-step COPY-ONLY):**
1. Build canonical `COURSE_LESSON_HTML.kurssLesson1..7` by copying PR #571 inline DATA legacyHtml, then re-applying PR #572 structured micro-repair replacements.
2. Convert `COURSE_LESSON_DATA.kurssLesson1..7.legacyHtml` to `COURSE_LESSON_HTML.kurssLessonN` references (UK/TR/SV pattern).

**Why safe:**
- Canonical HTML map now contains all signed OWNER legacyHtml values from both repair passes
- JS module evaluation resolves references at load time → `lesson.legacyHtml` remains the full HTML string at runtime
- Renderer behavior unchanged (`innerHTML = lesson.legacyHtml`)
- Eliminates duplicated inline copies and future DATA ↔ HTML drift
- No DE text touched; no translation or HTML restructuring

## Metrics

| Metric | Value |
|--------|-------|
| Signed LABOT | **244** |
| Runtime MATCH before | **235** |
| Runtime MISMATCH before | **9** |
| Runtime MATCH after | **244** |
| Runtime MISMATCH after | **0** |

### 9 targeted runtime repairs

| Metric | Value |
|--------|-------|
| Mapped | **9/9** |
| Applied | **9/9** |
| Match after | **9/9** |

| Audit ID | Path | Result |
|----------|------|--------|
| DA-KURSS-FPR-0069 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#word-list` | **MATCH** |
| DA-KURSS-FPR-0070 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#pronunciation` | **MATCH** |
| DA-KURSS-FPR-0071 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#grammar-examples` | **MATCH** |
| DA-KURSS-FPR-0073 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml#word-list` | **MATCH** |
| DA-KURSS-FPR-0076 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#word-list` | **MATCH** |
| DA-KURSS-FPR-0079 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml#word-list` | **MATCH** |
| DA-KURSS-FPR-0082 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml#word-list` | **MATCH** |
| DA-KURSS-FPR-0084 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#word-list` | **MATCH** |
| DA-KURSS-FPR-0086 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#exercise` | **MATCH** |

### legacyHtml DATA ↔ HTML

| Metric | Value |
|--------|-------|
| legacyHtml OWNER paths checked | **21** |
| DATA ↔ HTML MATCH | **21** |
| DATA ↔ HTML DIVERGENCE | **0** |

### Change gates

| Gate | Value |
|------|-------|
| DE changes | **0** |
| Unexpected changes | **0** |
| Reference conversions (lessons 1–7) | **7** |

### Technical gates

| Gate | Result |
|------|--------|
| Syntax | **PASS** |
| validate-kurss | **PASS** |
| Mirror | **PASS** |
| Structure | **PASS** |
| IDs/order | **PASS** |
| Renderer compatibility | **PASS** |

## FINAL STATUS: **DA–DE KURSS RUNTIME LEGACYHTML SYNC REPAIR — PASS**
