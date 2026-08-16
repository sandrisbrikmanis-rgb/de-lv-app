# DA–DE Kurss final post-repair audit

**Generated:** 2026-08-16T18:06:25.361Z
**Mode:** READ-ONLY · GPT-5.6 Luna + deterministic gates

## COVERAGE

| Metric | Value |
|---|---|
| Total lessons | **21** |
| Audited lessons | **21** |
| Total auditable DA fields | **1265** |
| Audited DA fields | **1265** |
| Coverage | **100%** |

| Source | Fields |
|---|---|
| lesson | 1062 |
| html | 6 |
| training | 101 |
| ui | 96 |

## OWNER REGRESSION

| Metric | Count |
|---|---:|
| Total OWNER LABOT (unique paths) | **680** |
| Original repair LABOT | **531** |
| FPR repair LABOT | **157** |
| OWNER_MATCH | **680** |
| OWNER_MISMATCH | **0** |
| Missing in production | **0** |
| LABOT/artifact in production | **0** |

### OWNER regression

All signed LABOT values match production.

## LINGUISTIC FINDINGS

| Severity | Count |
|---|---:|
| CRITICAL | **0** |
| HIGH | **60** |
| MEDIUM | **0** |
| LOW | **0** |
| **TOTAL** | **60** |

## CATEGORY BREAKDOWN

| Category | Count |
|---|---:|
| FOREIGN_REMNANT | 44 |
| STRUCTURE | 16 |

## STRUCTURE / PARITY

| Check | Result |
|---|---|
| Lessons count (21) | **PASS** |
| Structure vs LV MASTER | **FAIL** (16 issues) |
| Renderer parity | **FAIL** |
| Practice/translate cards | **PASS** |
| Mirror data↔www | **PASS** |

## SECTIONACCENTS

| Metric | Value |
|---|---|
| Checked | **0** (Kurss uses legacyHtml — no sectionAccents objects) |
| Validated findings | **0** |

## FOREIGN-LANGUAGE REMNANTS (deterministic sweep)

| Type | Count |
|---|---:|
| LV | **44** |
| EN | **0** |
| Renderer LV titles | **0** |
| OWNER artifacts | **0** |
| Placeholders | **0** |
| Other | **0** |

## TECHNICAL

| Check | Result |
|---|---|
| Syntax | **PASS** |
| Structure | **FAIL** |
| IDs/order | **FAIL** |
| Renderer parity | **FAIL** |
| Practice/Translate parity | **PASS** |
| Placeholders (deterministic) | **0** |
| OWNER artifacts | **0** |
| Foreign-language remnants | **44** |
| DE changes | **0** |
| Production changes (this audit) | **0** |
| Luna batches | **COMPLETE** (26 batches) |

## FINAL STATUS

**NEEDS OWNER REVIEW**



## VALIDATED FINDINGS

| ID | Sev | Category | Lesson | Path | Problem |
|---|---|---|---|---|---|
| DA-KURSS-FPR-0001 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[0].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0002 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[1].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0003 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[2].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0004 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[3].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0005 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[4].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0006 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[5].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0007 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[6].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0008 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[7].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0009 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[8].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0010 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[9].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0011 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[10].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0012 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[11].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0013 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[12].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0014 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[13].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0015 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[14].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0016 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[15].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0017 | HIGH | FOREIGN_REMNANT | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, EN, ZERO_WIDTH |
| DA-KURSS-FPR-0018 | HIGH | FOREIGN_REMNANT | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, EN |
| DA-KURSS-FPR-0019 | HIGH | FOREIGN_REMNANT | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0020 | HIGH | FOREIGN_REMNANT | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0021 | HIGH | FOREIGN_REMNANT | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, EN |
| DA-KURSS-FPR-0022 | HIGH | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, EN |
| DA-KURSS-FPR-0023 | HIGH | FOREIGN_REMNANT | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, ZERO_WIDTH |
| DA-KURSS-FPR-0024 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[16]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0025 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[27]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0026 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[34]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0027 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[35]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0028 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[36]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0029 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0030 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0031 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[3]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0032 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0033 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0034 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0035 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[6]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0036 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[10]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0037 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[11]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0038 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[12]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0039 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0040 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0041 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0042 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0043 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0044 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0045 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0046 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0047 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[6]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0048 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0049 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[16]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0050 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[18]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0051 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0052 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0053 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0054 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0055 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0056 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0057 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0058 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0059 | HIGH | FOREIGN_REMNANT | kurssPronunciationLesson | `COURSE_LESSON_HTML.kurssPronunciationLesson` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0060 | HIGH | FOREIGN_REMNANT | kurssConsonantsLesson | `COURSE_LESSON_HTML.kurssConsonantsLesson` | Foreign/script remnant: LV_DIAC |

> **PROPOSED_DA** values in JSON are Luna suggestions only — not OWNER-approved.
