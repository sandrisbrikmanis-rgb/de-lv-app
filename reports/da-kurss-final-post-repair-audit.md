# DA–DE Kurss final post-repair audit

**Generated:** 2026-08-16T17:32:10.824Z
**Mode:** READ-ONLY · GPT-5.6 Luna + deterministic gates

## COVERAGE

| Metric | Value |
|---|---|
| Total lessons | **21** |
| Audited lessons | **21** |
| Total auditable DA fields | **1266** |
| Audited DA fields | **1266** |
| Coverage | **100%** |

| Source | Fields |
|---|---|
| lesson | 1063 |
| html | 6 |
| training | 101 |
| ui | 96 |

## OWNER REGRESSION

| Metric | Count |
|---|---:|
| Total OWNER LABOT | **531** |
| OWNER_MATCH | **531** |
| OWNER_MISMATCH | **0** |
| Missing in production | **0** |
| LABOT/artifact in production | **0** |

### OWNER regression

All signed LABOT values match production.

## LINGUISTIC FINDINGS

| Severity | Count |
|---|---:|
| CRITICAL | **27** |
| HIGH | **153** |
| MEDIUM | **63** |
| LOW | **5** |
| **TOTAL** | **248** |

## CATEGORY BREAKDOWN

| Category | Count |
|---|---:|
| FOREIGN_REMNANT | 108 |
| SEMANTICS | 53 |
| LOCALIZATION | 19 |
| STRUCTURE | 16 |
| GRAMMAR | 16 |
| CORRUPTION | 11 |
| PEDAGOGY | 8 |
| TRANSLATION | 6 |
| NATURALNESS | 4 |
| CONSISTENCY | 2 |
| NAMES | 2 |
| REGISTER | 2 |
| TERMINOLOGY | 1 |

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
| LV | **72** |
| EN | **1** |
| Renderer LV titles | **0** |
| OWNER artifacts | **0** |
| Placeholders | **0** |
| Other | **4** |

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
| Foreign-language remnants | **73** |
| DE changes | **0** |
| Production changes (this audit) | **0** |
| Luna batches | **COMPLETE** (26 batches) |

## FINAL STATUS

**NEEDS OWNER REVIEW**

_Note: 5 LOW findings listed separately — not closure blockers per spec._

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
| DA-KURSS-FPR-0030 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[1]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0031 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[2]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0032 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[3]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0033 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[0]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0034 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[7]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0035 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[8]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0036 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[10]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0037 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0038 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0039 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0040 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[6]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0041 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[10]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0042 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[11]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0043 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[12]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0044 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0045 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0046 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0047 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0048 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0049 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0050 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[2]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0051 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[3]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0052 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0053 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[5]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0054 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[6]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0055 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0056 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[8]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0057 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0058 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[6]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0059 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0060 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[16]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0061 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[18]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0062 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0063 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0064 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0065 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0066 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0067 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[2]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0068 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].headin` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0069 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0070 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0071 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0072 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[2]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0073 | MEDIUM | FOREIGN_REMNANT | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text` | Foreign/script remnant: ZERO_WIDTH |
| DA-KURSS-FPR-0074 | HIGH | FOREIGN_REMNANT | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[5]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0075 | HIGH | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0076 | HIGH | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[2]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0077 | HIGH | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0078 | HIGH | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0079 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].exampl` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0080 | MEDIUM | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[6].text` | Foreign/script remnant: ZERO_WIDTH |
| DA-KURSS-FPR-0081 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[1]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0082 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[2]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0083 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0084 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0085 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].exampl` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0086 | MEDIUM | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text` | Foreign/script remnant: ZERO_WIDTH |
| DA-KURSS-FPR-0087 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].exampl` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0088 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[3].items[2]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0089 | HIGH | FOREIGN_REMNANT | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[2]` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0090 | MEDIUM | FOREIGN_REMNANT | kurssArticlesLesson | `COURSE_LESSON_HTML.kurssArticlesLesson` | Foreign/script remnant: ZERO_WIDTH |
| DA-KURSS-FPR-0091 | MEDIUM | FOREIGN_REMNANT | kurssPronounsLesson | `COURSE_LESSON_HTML.kurssPronounsLesson` | Foreign/script remnant: EN |
| DA-KURSS-FPR-0092 | HIGH | FOREIGN_REMNANT | kurssPronunciationLesson | `COURSE_LESSON_HTML.kurssPronunciationLesson` | Foreign/script remnant: LV_DIAC, ZERO_WIDTH |
| DA-KURSS-FPR-0093 | HIGH | FOREIGN_REMNANT | kurssConsonantsLesson | `COURSE_LESSON_HTML.kurssConsonantsLesson` | Foreign/script remnant: LV_DIAC, ZERO_WIDTH |
| DA-KURSS-FPR-0094 | HIGH | SEMANTICS | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Conjugation gloss for ihr geht reads "Du udstøder" — semantically wrong (means "you exhale"); should be "I går". |
| DA-KURSS-FPR-0095 | HIGH | GRAMMAR | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Grammar examples include "Er kommet" instead of correct "Er kommt"; incomplete question-sentence section with empty Dani |
| DA-KURSS-FPR-0096 | CRITICAL | SEMANTICS | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | Ord (vocabulary) section is scrambled: German-Danish glosses are misaligned (e.g. nein→arbejde, nicht→spørge, arbeiten→h |
| DA-KURSS-FPR-0097 | HIGH | GRAMMAR | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | Grammar conjugation tables show wrong Danish forms (Du arbeite, Jeg tirsdag for ich tue, Ich recchne). |
| DA-KURSS-FPR-0098 | MEDIUM | NATURALNESS | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | Training card prompt "Wen spørger?" is unnatural Danish; should be "Hvem spørger?". |
| DA-KURSS-FPR-0099 | CRITICAL | SEMANTICS | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | Ord section vocabulary glosses are scrambled/misaligned (e.g. Wer→hvad, was→der, hier→Der Tisch bord). |
| DA-KURSS-FPR-0100 | CRITICAL | SEMANTICS | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | Ord section vocabulary glosses are scrambled (e.g. nehmen→fjerklædt, der Federhalter→show, zeigen→hvid). |
| DA-KURSS-FPR-0101 | MEDIUM | GRAMMAR | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | Adjective section shows "Die Messer synd klein" — "synd" is not Danish (should be "er"). |
| DA-KURSS-FPR-0102 | HIGH | SEMANTICS | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | Vocabulary gloss wen (vēn) — hvad is wrong; wen means "hvem" (accusative of wer). |
| DA-KURSS-FPR-0103 | CRITICAL | SEMANTICS | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | Ord section has multiple wrong glosses (anspitzen→at spytte, der Hammer→forhammer, leicht→lys, hier→hende). |
| DA-KURSS-FPR-0104 | CRITICAL | SEMANTICS | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | Ord section vocabulary is scrambled with English remnants (singt→You, öffnen→mirror, der Spiegel entries misaligned). |
| DA-KURSS-FPR-0105 | MEDIUM | CONSISTENCY | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | Section title mixes German "Übung" with Danish "Øvelse" inconsistently. |
| DA-KURSS-FPR-0106 | MEDIUM | SEMANTICS | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[2]` | Gloss "rejser sig" for stehen auf is imprecise; stehen auf means "står op" (get up), not merely "rejser sig". |
| DA-KURSS-FPR-0107 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[14]` | English gloss "loudly" instead of Danish "højt". |
| DA-KURSS-FPR-0108 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[18]` | English text remains in Danish content. |
| DA-KURSS-FPR-0109 | CRITICAL | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[9]` | Danish text is identical to Latvian master — content was not translated. |
| DA-KURSS-FPR-0110 | HIGH | PEDAGOGY | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[18].lv` | DE uses formal Sie (setzen Sie sich), but DA uses informal "sæt dig" instead of formal "sæt Dem". |
| DA-KURSS-FPR-0111 | HIGH | SEMANTICS | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[0].lv` | DA repeats "læreren" twice; DE distinguishes Lehrer (m) and Lehrerin (f). Missing lærerinden. |
| DA-KURSS-FPR-0112 | HIGH | PEDAGOGY | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[3].lv` | DE uses formal Sie (Was machen Sie?), but DA uses informal "Hvad laver du?". |
| DA-KURSS-FPR-0113 | HIGH | PEDAGOGY | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[6].lv` | DE formal imperative (setzen Sie sich und lesen Sie), DA uses informal du-forms. |
| DA-KURSS-FPR-0114 | HIGH | SEMANTICS | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[10].lv` | DE "Wie ist dieser Teller?" asks about quality/state; DA "Hvad er denne plade?" uses wrong noun (plade vs tallerken) and |
| DA-KURSS-FPR-0115 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[3]` | English gloss "we are" instead of Danish "vi er". |
| DA-KURSS-FPR-0116 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[8]` | English gloss "we can" instead of Danish "vi kan". |
| DA-KURSS-FPR-0117 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[13]` | English gloss "be healthy!" instead of Danish. |
| DA-KURSS-FPR-0118 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[15]` | English gloss "husband, man" instead of Danish "mand, ægtemand". |
| DA-KURSS-FPR-0119 | MEDIUM | NATURALNESS | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[3].items[0].text` | "Hjælpeverb sein - at være bue rodet" is garbled/ungrammatical Danish; likely corruption of "bøjes uregelmæssigt". |
| DA-KURSS-FPR-0120 | CRITICAL | SEMANTICS | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[0].lv` | DE "Bist du gesund?" (Are you healthy?) translated as "Hvor er dine fartøjer?" (Where are your vessels?) — completely un |
| DA-KURSS-FPR-0121 | MEDIUM | NATURALNESS | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[2].lv` | "Er Paul rask?" is unnatural; Danish prefers "Er Paul sund?" to match gesund. |
| DA-KURSS-FPR-0122 | MEDIUM | SEMANTICS | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[13].lv` | DE uses demonstrative diesen (this), but DA uses definite den without denne. |
| DA-KURSS-FPR-0123 | HIGH | PEDAGOGY | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[14].lv` | DE formal Sie imperative, DA uses informal du-form and awkward "vær venlig at". |
| DA-KURSS-FPR-0124 | MEDIUM | SEMANTICS | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[15].lv` | DE jener (that one yonder) rendered as bare den; loses demonstrative distinction taught in lesson. |
| DA-KURSS-FPR-0125 | HIGH | SEMANTICS | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[7].lv` | DE "Wer bist du?" (Who are you?) translated as "Hvad er du?" (What are you?) — wrong question word. |
| DA-KURSS-FPR-0126 | CRITICAL | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[23]` | Danish text is identical to Latvian master — content was not translated. |
| DA-KURSS-FPR-0127 | CRITICAL | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[24]` | Danish text is identical to Latvian master — content was not translated. |
| DA-KURSS-FPR-0128 | CRITICAL | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[0].items[25]` | Danish text is identical to Latvian master — content was not translated. |
| DA-KURSS-FPR-0129 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[7]` | English text remains in Danish content. |
| DA-KURSS-FPR-0130 | MEDIUM | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[2].lv` | DE "Wie sind die Bücher?" asks about quality (how are the books), but DA "Hvad er bøgerne?" asks what they are. |
| DA-KURSS-FPR-0131 | HIGH | PEDAGOGY | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[4].lv` | DE formal Sie (haben Sie Hefte?), DA uses informal "har du". |
| DA-KURSS-FPR-0132 | CRITICAL | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[14].lv` | DE "Was tut Anna?" (What is Anna doing?) translated as "Hvor er Anna?" (Where is Anna?). |
| DA-KURSS-FPR-0133 | LOW | NAMES | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[16].lv` | German name Franz rendered as "Francis" — inconsistent with course convention (Franz elsewhere). |
| DA-KURSS-FPR-0134 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[2]` | English gloss "as old as" instead of Danish "lige så gammel som". |
| DA-KURSS-FPR-0135 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[12]` | English text remains in Danish content. |
| DA-KURSS-FPR-0136 | MEDIUM | NATURALNESS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[4].lv` | "Hvad er dit navn?" for Wie heißt du? is acceptable but less idiomatic than "Hvad hedder du?". |
| DA-KURSS-FPR-0137 | LOW | NAMES | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[6].lv` | German Johann rendered as "Jan" — acceptable localization but inconsistent with other name handling. |
| DA-KURSS-FPR-0138 | HIGH | PEDAGOGY | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[8].lv` | DE formal Sie (Wie heißen Sie?), DA uses informal "Hvad er dit navn?". |
| DA-KURSS-FPR-0139 | HIGH | SEMANTICS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[12].lv` | DE "Wer ist am größten?" (Who is tallest?) translated as "Hvad er det største?" (What is the biggest?). |
| DA-KURSS-FPR-0140 | MEDIUM | REGISTER | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[21].lv` | DE uses formal Sie; DA uses informal du. |
| DA-KURSS-FPR-0141 | MEDIUM | REGISTER | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[31].lv` | DE uses formal Sie (Sind Sie glücklich?); DA uses informal du. |
| DA-KURSS-FPR-0142 | HIGH | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[8]` | English gloss "leg" in DA vocabulary slot; lesson uses Danish elsewhere (e.g. benet). |
| DA-KURSS-FPR-0143 | HIGH | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[9]` | English gloss "legs" instead of Danish ben. |
| DA-KURSS-FPR-0144 | HIGH | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[11]` | English gloss "feet" instead of Danish fødder. |
| DA-KURSS-FPR-0145 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[12]` | English gloss "round" instead of Danish rund. |
| DA-KURSS-FPR-0146 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[13]` | English gloss "long" instead of Danish lang. |
| DA-KURSS-FPR-0147 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[14]` | English gloss "short" instead of Danish kort. |
| DA-KURSS-FPR-0148 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[18]` | English gloss "thin / thin" instead of Danish tynd. |
| DA-KURSS-FPR-0149 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[20]` | English gloss "in front" instead of Danish foran. |
| DA-KURSS-FPR-0150 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[22]` | English gloss "behind" instead of Danish bagved. |
| DA-KURSS-FPR-0151 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[32]` | English gloss "to clean" instead of Danish at rense. |
| DA-KURSS-FPR-0152 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[35]` | English gloss "to do / make" instead of Danish at gøre. |
| DA-KURSS-FPR-0153 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[38]` | English gloss "to stand" instead of Danish at stå. |
| DA-KURSS-FPR-0154 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[45]` | English gloss "hold" instead of Danish at holde. |
| DA-KURSS-FPR-0155 | MEDIUM | LOCALIZATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[48]` | English gloss "deep" instead of Danish dyb/dybt. |
| DA-KURSS-FPR-0156 | HIGH | SEMANTICS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].text` | Tautological/wrong meaning; LV/DE require "unstressed prefix does not separate", not "unstressed means unstressed". |
| DA-KURSS-FPR-0157 | MEDIUM | GRAMMAR | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[12].text` | Mixed English "take" in otherwise Danish grammar note. |
| DA-KURSS-FPR-0158 | CRITICAL | CORRUPTION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[5]` | Latvian source text left in DA pronunciation field. |
| DA-KURSS-FPR-0159 | HIGH | SEMANTICS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[19].lv` | DE turnen means gymnastics/exercises; DA træner means general training. |
| DA-KURSS-FPR-0160 | HIGH | SEMANTICS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[20].lv` | Same turnen vs træner semantic mismatch in question form. |
| DA-KURSS-FPR-0161 | HIGH | SEMANTICS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[22].lv` | DE Arme are arms; DA hænder means hands. |
| DA-KURSS-FPR-0162 | HIGH | CORRUPTION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[26].lv` | German conjunction und left in DA sentence. |
| DA-KURSS-FPR-0163 | MEDIUM | SEMANTICS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv` | DE turnen means gymnastics; DA træner means general training/exercise. |
| DA-KURSS-FPR-0164 | CRITICAL | CORRUPTION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[1]` | Latvian text in DA pronunciation field. |
| DA-KURSS-FPR-0165 | CRITICAL | CORRUPTION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[2]` | Latvian text in DA pronunciation field. |
| DA-KURSS-FPR-0166 | CRITICAL | CORRUPTION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[4]` | Latvian text in DA pronunciation field. |
| DA-KURSS-FPR-0167 | CRITICAL | CORRUPTION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]` | Latvian text in DA pronunciation field. |
| DA-KURSS-FPR-0168 | MEDIUM | TRANSLATION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[4].lv` | DE den Brief (definite); DA missing definite article on brev. |
| DA-KURSS-FPR-0169 | MEDIUM | SEMANTICS | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[7].lv` | Pronoun det does not match feminine/suppe; should be den. |
| DA-KURSS-FPR-0170 | MEDIUM | LOCALIZATION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[16]` | English gloss apple; owner pattern uses Danish (cf. kirsebær). |
| DA-KURSS-FPR-0171 | MEDIUM | LOCALIZATION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[17]` | English gloss apples instead of Danish æbler. |
| DA-KURSS-FPR-0172 | MEDIUM | LOCALIZATION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[22]` | English gloss plum instead of Danish blomme. |
| DA-KURSS-FPR-0173 | MEDIUM | LOCALIZATION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[23]` | English gloss plums instead of Danish blommer. |
| DA-KURSS-FPR-0174 | MEDIUM | LOCALIZATION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[25]` | English gloss cherries; singular kirsebær already localized elsewhere. |
| DA-KURSS-FPR-0175 | HIGH | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[27]` | Nonsense English "come in / ripen"; DE/LV mean ripe/mature. |
| DA-KURSS-FPR-0176 | HIGH | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[28]` | Nonsense English "don't come in / don't ripen"; should mean unripe/immature. |
| DA-KURSS-FPR-0177 | CRITICAL | CORRUPTION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].exampl` | Latvian grammar gloss left in DA field. |
| DA-KURSS-FPR-0178 | CRITICAL | CORRUPTION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[1]` | Latvian text in DA pronunciation field. |
| DA-KURSS-FPR-0179 | CRITICAL | CORRUPTION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[2]` | Latvian text in DA pronunciation field. |
| DA-KURSS-FPR-0180 | CRITICAL | CORRUPTION | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[4]` | Latvian text in DA pronunciation field. |
| DA-KURSS-FPR-0181 | MEDIUM | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[1].lv` | DE darf expresses permission; DA kan means ability/can. |
| DA-KURSS-FPR-0182 | HIGH | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[6].lv` | DE present Isst du; DA uses past Har du spist. |
| DA-KURSS-FPR-0183 | MEDIUM | GRAMMAR | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[9].lv` | Missing definite article; DE die Birne requires Pæren. |
| DA-KURSS-FPR-0184 | CRITICAL | CORRUPTION | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]` | Latvian/English mixed corruption in DA pronunciation field. |
| DA-KURSS-FPR-0185 | HIGH | SEMANTICS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[1].lv` | DE ruft means calls out/summons; DA ringer til implies telephoning. |
| DA-KURSS-FPR-0186 | MEDIUM | GRAMMAR | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[9].lv` | DE die Hunde definite plural; DA hunde lacks definite article. |
| DA-KURSS-FPR-0187 | CRITICAL | SEMANTICS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[12].lv` | Interrogative Hvad (what) used for DE Wer (who); reverses meaning. |
| DA-KURSS-FPR-0188 | HIGH | SEMANTICS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[13].lv` | DE sich nähern = approach; DA henvender sig til = addresses/speaks to. |
| DA-KURSS-FPR-0189 | MEDIUM | PEDAGOGY | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].text` | Grammar note omits the mit wem? vs womit? distinction (persons vs things) that the lesson teaches and that LV master con |
| DA-KURSS-FPR-0190 | MEDIUM | SEMANTICS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[11].lv` | German entzwei (in two/in half) is lost; Danish only asks the instrument, not cutting apart. |
| DA-KURSS-FPR-0191 | HIGH | SEMANTICS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[15].lv` | Spaten is a spade, not a skovl (scoop/shovel); wrong tool noun vs DE. |
| DA-KURSS-FPR-0192 | HIGH | SEMANTICS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[16].lv` | Uses indefinite skovl instead of definite den Spaten; wrong noun (spade vs scoop). |
| DA-KURSS-FPR-0193 | HIGH | GRAMMAR | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[23].lv` | Hvad går … med? is ungrammatical for mit wem; needs med hvem and correct word order. |
| DA-KURSS-FPR-0194 | HIGH | SEMANTICS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv` | En bror (a brother) vs der Bruder (the brother); Vetter/Base rendered as two identical kusine. |
| DA-KURSS-FPR-0195 | HIGH | FOREIGN_REMNANT | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.subtitle` | Latvian vai (or) and ar (with) remain untranslated in the Danish subtitle. |
| DA-KURSS-FPR-0196 | MEDIUM | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[13]` | Krug is a jug or pitcher; mug (krus/kop) is the wrong vessel type. |
| DA-KURSS-FPR-0197 | MEDIUM | PEDAGOGY | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text` | wohin? (where to) glossed as hvor? (where); direction vs location distinction lost. |
| DA-KURSS-FPR-0198 | MEDIUM | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[4].lv` | an das Fenster means against the window; ved vinduet (by/at) does not match DE placement. |
| DA-KURSS-FPR-0199 | HIGH | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[6].lv` | in den Wald is wohin? (into the forest); i skoven is wo? (already in the forest). |
| DA-KURSS-FPR-0200 | MEDIUM | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[7].lv` | suchen means search/look for; plukker (pick) changes the action vs DE. |
| DA-KURSS-FPR-0201 | CRITICAL | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].lv` | Hefte are exercise books/notebooks; Bogstaverne means letters of the alphabet. |
| DA-KURSS-FPR-0202 | MEDIUM | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[15].lv` | in die Klasse is wohin? (into the classroom); i klassen is static location (wo?). |
| DA-KURSS-FPR-0203 | MEDIUM | FOREIGN_REMNANT | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[12]` | English glosses image/picture instead of Danish billede. |
| DA-KURSS-FPR-0204 | HIGH | FOREIGN_REMNANT | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[14]` | Vocabulary gloss is English, not Danish. |
| DA-KURSS-FPR-0205 | HIGH | FOREIGN_REMNANT | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[15]` | Vocabulary gloss is English, not Danish. |
| DA-KURSS-FPR-0206 | HIGH | SEMANTICS | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[3].lv` | Schüler/Schülerinnen are pupils/students, not generic drenge og piger. |
| DA-KURSS-FPR-0207 | HIGH | SEMANTICS | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[4].lv` | ruft … auf means calls on (summons to speak); ringer til implies a phone call. |
| DA-KURSS-FPR-0208 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[1]` | Vocabulary gloss is English floor instead of Danish etage. |
| DA-KURSS-FPR-0209 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[8]` | English glosses hall/corridor instead of Danish. |
| DA-KURSS-FPR-0210 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[11]` | English multi-gloss instead of Danish equivalents. |
| DA-KURSS-FPR-0211 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[14]` | Vocabulary gloss is English, not Danish. |
| DA-KURSS-FPR-0212 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[22]` | Vocabulary gloss is English soon instead of Danish snart. |
| DA-KURSS-FPR-0213 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[24]` | English light instead of Danish lyst (licht = light-colored). |
| DA-KURSS-FPR-0214 | HIGH | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].text` | Trafikord (traffic words) is wrong for temporal wann? words; should be tidsord. |
| DA-KURSS-FPR-0215 | CRITICAL | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[2].headin` | Grammar heading is untranslated Latvian. |
| DA-KURSS-FPR-0216 | MEDIUM | GRAMMAR | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[4].lv` | German uses plural die Türen; Danish uses singular døren. |
| DA-KURSS-FPR-0217 | HIGH | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[20].lv` | Ungrammatical and misaligned: DE asks where to carry wood (wohin/tragen), not have-with. |
| DA-KURSS-FPR-0218 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[23].lv` | hell means brightly; stærkt (strongly) changes the meaning vs DE. |
| DA-KURSS-FPR-0219 | HIGH | FOREIGN_REMNANT | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[8]` | Vocabulary gloss is English instead of Danish. |
| DA-KURSS-FPR-0220 | HIGH | FOREIGN_REMNANT | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[10]` | Conjugation gloss is English instead of Danish. |
| DA-KURSS-FPR-0221 | HIGH | FOREIGN_REMNANT | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[12]` | Vocabulary gloss is English instead of Danish. |
| DA-KURSS-FPR-0222 | HIGH | FOREIGN_REMNANT | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[18]` | Conjugation gloss is English instead of Danish. |
| DA-KURSS-FPR-0223 | MEDIUM | CONSISTENCY | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[5].title` | Section title uses infinitive Oversætte; all other lessons use imperative Oversæt. |
| DA-KURSS-FPR-0224 | CRITICAL | SEMANTICS | kurssArticlesLesson | `COURSE_LESSON_HTML.kurssArticlesLesson` | Section heading renders German article DIE as DØR (door). |
| DA-KURSS-FPR-0225 | HIGH | TRANSLATION | kurssArticlesLesson | `COURSE_LESSON_HTML.kurssArticlesLesson` | Example gloss uses wrong Danish 'Passer' instead of German article example. |
| DA-KURSS-FPR-0226 | CRITICAL | SEMANTICS | kurssPronounsLesson | `COURSE_LESSON_HTML.kurssPronounsLesson` | German er glossed as 'Øh' instead of pronoun Er. |
| DA-KURSS-FPR-0227 | HIGH | GRAMMAR | kurssPronounsLesson | `COURSE_LESSON_HTML.kurssPronounsLesson` | Nominativ du glossed with accusative form dig. |
| DA-KURSS-FPR-0228 | MEDIUM | TRANSLATION | kurssPronounsLesson | `COURSE_LESSON_HTML.kurssPronounsLesson` | Example omits indirect object in Danish gloss; German euch misspelled as Euk. |
| DA-KURSS-FPR-0229 | HIGH | SEMANTICS | kurssPronunciationLesson | `COURSE_LESSON_HTML.kurssPronunciationLesson` | German gut wrongly glossed as Tarm. |
| DA-KURSS-FPR-0230 | HIGH | SEMANTICS | kurssConsonantsLesson | `COURSE_LESSON_HTML.kurssConsonantsLesson` | German Bad glossed as Dårlig. |
| DA-KURSS-FPR-0231 | HIGH | TRANSLATION | kurssSentenceStructureLesson | `COURSE_LESSON_HTML.kurssSentenceStructureLesson` | Danish side repeats German instead of translating. |
| DA-KURSS-FPR-0232 | CRITICAL | SEMANTICS | kurssSentenceStructureLesson | `COURSE_LESSON_HTML.kurssSentenceStructureLesson` | Negation examples pair wrong DE/DA sentences. |
| DA-KURSS-FPR-0233 | LOW | GRAMMAR | lesson3 | `lesson3TrainingCardsDa[0].front` | Question missing final punctuation. |
| DA-KURSS-FPR-0234 | MEDIUM | GRAMMAR | lesson2 | `lesson2TrainingCardsDa[1].front` | DE Paul fragt. is a statement; DA uses inverted question-like word order. |
| DA-KURSS-FPR-0235 | MEDIUM | SEMANTICS | lesson3 | `lesson3TrainingCardsDa[5].front` | DE Hier liegt ein Buch; DA 'Her er bogen' loses the lying-position sense. |
| DA-KURSS-FPR-0236 | LOW | GRAMMAR | lesson3 | `lesson3TrainingCardsDa[21].front` | Redundant second 'der' in DA sentence. |
| DA-KURSS-FPR-0237 | MEDIUM | GRAMMAR | lesson4 | `lesson4TrainingCardsDa[9].front` | DE es ist scharf (neuter); DA uses den for neuter noun. |
| DA-KURSS-FPR-0238 | LOW | GRAMMAR | lesson5 | `lesson5TrainingCardsDa[2].front` | Question missing final punctuation. |
| DA-KURSS-FPR-0239 | MEDIUM | GRAMMAR | lesson5 | `lesson5TrainingCardsDa[5].front` | DE Der Lehrer fragt den Schüler; DA uses inverted V2-breaking order. |
| DA-KURSS-FPR-0240 | HIGH | SEMANTICS | lesson5 | `lesson5TrainingCardsDa[10].front` | DE Federhalter, Feder, Messer; DA replaces pen holder with fjerpen. |
| DA-KURSS-FPR-0241 | MEDIUM | TERMINOLOGY | lesson5 | `lesson5TrainingCardsDa[11].front` | DE Federhalter; DA uses fjerpen instead of established fyldepenholder. |
| DA-KURSS-FPR-0242 | HIGH | SEMANTICS | lesson6 | `lesson6TrainingCardsDa[9].front` | DE Ich lege zwei Nadeln hin; DA uses past tense satte with wrong meaning. |
| DA-KURSS-FPR-0243 | MEDIUM | GRAMMAR | lesson6 | `lesson6TrainingCardsDa[12].front` | DE Das sind Deckel (plural); DA uses singular det er. |
| DA-KURSS-FPR-0244 | MEDIUM | FOREIGN_REMNANT | ui | `LANGUAGE_UI_STRINGS.kurss.sections.exerciseCombined` | German Übung prefix left in combined section label. |
| DA-KURSS-FPR-0245 | MEDIUM | FOREIGN_REMNANT | ui | `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.fillCase` | German Übung label in DA exercise metadata. |
| DA-KURSS-FPR-0246 | MEDIUM | FOREIGN_REMNANT | ui | `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.translate` | German Übung label in DA exercise metadata. |
| DA-KURSS-FPR-0247 | MEDIUM | TRANSLATION | ui | `LANGUAGE_UI_STRINGS.kurss.lessonItems.10.menuDesc` | helbred is archaic/indirect; LV master uses health sense (veselība → sundhed). |
| DA-KURSS-FPR-0248 | MEDIUM | TRANSLATION | ui | `LANGUAGE_UI_STRINGS.kurss.lessonItems.11.menuDesc` | possessiv is not standard Danish UI wording; LV piederība → ejedord. |

> **PROPOSED_DA** values in JSON are Luna suggestions only — not OWNER-approved.
