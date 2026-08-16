# DA–DE Kurss final closure audit
**Generated:** 2026-08-16T18:56:44.488Z
**Mode:** READ-ONLY
## FINAL STATUS
**PREREQUISITE_FAIL**
Audit stopped before GPT-5.6 Luna closure pass because runtime production does not reflect all 244 signed OWNER LABOT values.
## Prerequisite — OWNER repair completeness
| Metric | Value |
|--------|-------|
| Signed findings (330 cycle) | **330** |
| Signed LABOT | **244** |
| PR #571 apply log (applied) | **235** |
| PR #572 micro-repair (applied) | **9** |
| Runtime OWNER_MATCH | **235/244** |
| Runtime OWNER_MISMATCH | **9** |
| COURSE_LESSON_HTML map match (legacyHtml LABOT) | **10** |
| DATA ↔ HTML divergence (legacyHtml LABOT) | **20** |
### Root cause (9 runtime mismatches — PR #572)
Renderer uses `COURSE_LESSON_DATA.kurssLessonN.legacyHtml` inline HTML (`www/ui.js` → `renderCourseLessonFromData`). PR #572 updated `COURSE_LESSON_HTML.kurssLessonN` but **did not sync** the inline `legacyHtml` copies in `COURSE_LESSON_DATA` for lessons 2–7.
Affected Audit IDs:
- `DA-KURSS-FPR-0069` — `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#word-list` (htmlMapOk: true)
- `DA-KURSS-FPR-0070` — `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#pronunciation` (htmlMapOk: true)
- `DA-KURSS-FPR-0071` — `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#grammar-examples` (htmlMapOk: true)
- `DA-KURSS-FPR-0073` — `COURSE_LESSON_DATA.kurssLesson3.legacyHtml#word-list` (htmlMapOk: true)
- `DA-KURSS-FPR-0076` — `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#word-list` (htmlMapOk: true)
- `DA-KURSS-FPR-0079` — `COURSE_LESSON_DATA.kurssLesson5.legacyHtml#word-list` (htmlMapOk: true)
- `DA-KURSS-FPR-0082` — `COURSE_LESSON_DATA.kurssLesson6.legacyHtml#word-list` (htmlMapOk: true)
- `DA-KURSS-FPR-0084` — `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#word-list` (htmlMapOk: true)
- `DA-KURSS-FPR-0086` — `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#exercise` (htmlMapOk: true)
### DATA ↔ HTML divergence samples
| Audit ID | Runtime OK | HTML map OK |
|----------|------------|-------------|
| DA-KURSS-FPR-0063 | true | false |
| DA-KURSS-FPR-0064 | true | false |
| DA-KURSS-FPR-0065 | true | false |
| DA-KURSS-FPR-0066 | true | false |
| DA-KURSS-FPR-0067 | true | false |
| DA-KURSS-FPR-0068 | true | false |
| DA-KURSS-FPR-0069 | false | true |
| DA-KURSS-FPR-0070 | false | true |
| DA-KURSS-FPR-0071 | false | true |
| DA-KURSS-FPR-0073 | false | true |
| DA-KURSS-FPR-0074 | true | false |
| DA-KURSS-FPR-0076 | false | true |
| DA-KURSS-FPR-0077 | true | false |
| DA-KURSS-FPR-0078 | true | false |
| DA-KURSS-FPR-0079 | false | true |
## Luna
| Metric | Value |
|--------|-------|
| Model | GPT-5.6 Luna |
| Real model audit | **NO** |
| Reason | Blocked by PREREQUISITE_FAIL |
## Technical gates (deterministic)
| Check | Result |
|-------|--------|
| Syntax | **PASS** |
| validate-kurss | **PASS** |
| Mirror | **PASS** |
| DE changes | **0** |
| Production changes (this run) | **0** |
## Closure criteria
OWNER ACCEPTED / CLOSED requires prerequisite PASS + Luna YES + 0 validated findings. Not met.
**Next step:** Sync `COURSE_LESSON_DATA.kurssLessonN.legacyHtml` inline copies with signed OWNER values (or convert to `COURSE_LESSON_HTML.kurssLessonN` references like other locales), then re-run this audit with `--run-luna`.