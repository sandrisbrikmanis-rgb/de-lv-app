# DA–DE Kurss final post-repair audit

**Generated:** 2026-08-16T18:22:03.780Z
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
| Total OWNER LABOT (unique paths) | **640** |
| Original repair LABOT | **531** |
| FPR repair LABOT | **116** |
| OWNER_MATCH | **639** |
| OWNER_MISMATCH | **1** |
| Missing in production | **0** |
| LABOT/artifact in production | **0** |

### OWNER_MISMATCH samples

- `DA-KURSS-L0581` `lesson4TrainingCardsDa[9].front` — value mismatch

## LINGUISTIC FINDINGS

| Severity | Count |
|---|---:|
| CRITICAL | **16** |
| HIGH | **156** |
| MEDIUM | **131** |
| LOW | **27** |
| **TOTAL** | **330** |

## CATEGORY BREAKDOWN

| Category | Count |
|---|---:|
| FOREIGN_REMNANT | 139 |
| SEMANTICS | 69 |
| NATURALNESS | 31 |
| GRAMMAR | 29 |
| TRANSLATION | 24 |
| STRUCTURE | 17 |
| NAMES | 9 |
| CONSISTENCY | 6 |
| ORTHOGRAPHY | 3 |
| REGISTER | 2 |
| OWNER_REGRESSION | 1 |

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

_Note: 27 LOW findings listed separately — not closure blockers per spec._

## VALIDATED FINDINGS

| ID | Sev | Category | Lesson | Path | Problem |
|---|---|---|---|---|---|
| DA-KURSS-FPR-0001 | HIGH | OWNER_REGRESSION | front | `lesson4TrainingCardsDa[9].front` | OWNER_MISMATCH: production ≠ signed LABOT (value) |
| DA-KURSS-FPR-0002 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[0].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0003 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[1].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0004 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[2].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0005 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[3].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0006 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[4].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0007 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[5].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0008 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[6].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0009 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[7].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0010 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[8].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0011 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[9].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0012 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[10].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0013 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[11].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0014 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[12].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0015 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[13].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0016 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[14].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0017 | HIGH | STRUCTURE | lesson7 | `lesson7ExerciseCardsDa[15].lv` | Missing DA native field on exercise card |
| DA-KURSS-FPR-0018 | HIGH | FOREIGN_REMNANT | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, EN, ZERO_WIDTH |
| DA-KURSS-FPR-0019 | HIGH | FOREIGN_REMNANT | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, EN |
| DA-KURSS-FPR-0020 | HIGH | FOREIGN_REMNANT | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD |
| DA-KURSS-FPR-0021 | HIGH | FOREIGN_REMNANT | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0022 | HIGH | FOREIGN_REMNANT | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, EN |
| DA-KURSS-FPR-0023 | HIGH | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, EN |
| DA-KURSS-FPR-0024 | HIGH | FOREIGN_REMNANT | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | Foreign/script remnant: LV_DIAC, LV_WORD, ZERO_WIDTH |
| DA-KURSS-FPR-0025 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[16]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0026 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[27]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0027 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[34]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0028 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[35]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0029 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[36]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0030 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0031 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0032 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[3]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0033 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0034 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0035 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0036 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[6]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0037 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[10]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0038 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[11]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0039 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[12]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0040 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0041 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0042 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0043 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0044 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0045 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0046 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0047 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0048 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[6]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0049 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0050 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[16]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0051 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[18]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0052 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0053 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0054 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0055 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0056 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0057 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0058 | HIGH | FOREIGN_REMNANT | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0059 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0060 | HIGH | FOREIGN_REMNANT | kurssPronunciationLesson | `COURSE_LESSON_HTML.kurssPronunciationLesson` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0061 | HIGH | FOREIGN_REMNANT | kurssConsonantsLesson | `COURSE_LESSON_HTML.kurssConsonantsLesson` | Foreign/script remnant: LV_DIAC |
| DA-KURSS-FPR-0062 | MEDIUM | NATURALNESS | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.subtitle` | “Nuværende tid verber” er unaturligt dansk; “oversæt” bør stå parallelt med de øvrige emneangivelser. |
| DA-KURSS-FPR-0063 | HIGH | SEMANTICS | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#verb-conjugation` | “Du udstøder” er en forkert oversættelse af tysk ihr geht og modsiger både person og betydning. |
| DA-KURSS-FPR-0064 | CRITICAL | FOREIGN_REMNANT | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#word-section` | Hele sætningen er lettisk og er ikke oversat til dansk. |
| DA-KURSS-FPR-0065 | CRITICAL | FOREIGN_REMNANT | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#grammar` | Engelsk tekst, forkert endelse (-da) og manglende dansk oversættelse forekommer i grammatikforklaringen. |
| DA-KURSS-FPR-0066 | HIGH | GRAMMAR | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#examples` | “kommet” er perfektum participium; eksemplet skal vise præsensformen “kommer”. |
| DA-KURSS-FPR-0067 | CRITICAL | STRUCTURE | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#question-examples` | Indholdet er ødelagt med tomme felter og blandede sprog; eksemplerne giver ingen brugbar forklaring. |
| DA-KURSS-FPR-0068 | CRITICAL | FOREIGN_REMNANT | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml#person-difference` | Lettisk resttekst er ikke oversat; den bør mindst have en dansk introduktion eller fjernes fra den danske version. |
| DA-KURSS-FPR-0069 | CRITICAL | SEMANTICS | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#word-list` | Ordlisten er systematisk forskudt: flere tyske ord har forkerte danske betydninger, og “nein” er gentaget med forskellig |
| DA-KURSS-FPR-0070 | CRITICAL | FOREIGN_REMNANT | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#pronunciation` | En hel lettisk sætning står uoversat midt i den danske udtalesektion. |
| DA-KURSS-FPR-0071 | CRITICAL | GRAMMAR | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#grammar-examples` | Eksemplerne indeholder stavefejl, danske/tyske blandinger og meningsløse oversættelser. |
| DA-KURSS-FPR-0072 | MEDIUM | SEMANTICS | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.subtitle` | Lettisk “vietas vārdi” henviser her til stedangivelser som hier/dort, ikke stednavne. |
| DA-KURSS-FPR-0073 | CRITICAL | SEMANTICS | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml#word-list` | Ordlisten er alvorligt forskudt og indeholder både forkerte oversættelser og blandede sprog. |
| DA-KURSS-FPR-0074 | CRITICAL | FOREIGN_REMNANT | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml#grammar` | Lettisk tekst er sammenføjet med dansk uden mellemrum og ødelægger grammatikforklaringen. |
| DA-KURSS-FPR-0075 | MEDIUM | GRAMMAR | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.subtitle` | “oversætte” er infinitiv og passer ikke grammatisk med de øvrige korte emneangivelser. |
| DA-KURSS-FPR-0076 | CRITICAL | SEMANTICS | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#word-list` | Ordlisten har mange systematiske forskydninger, hvor tyske ord er parret med forkerte danske betydninger. |
| DA-KURSS-FPR-0077 | CRITICAL | FOREIGN_REMNANT | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#pronunciation` | Lettisk ordet “Galotnes” står som en uoversat rest og giver en brudt dansk sætning. |
| DA-KURSS-FPR-0078 | HIGH | NATURALNESS | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#grammar` | “mænds skifter runde” er en uforståelig maskinoversættelse af grammatikforklaringen. |
| DA-KURSS-FPR-0079 | CRITICAL | SEMANTICS | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml#word-list` | Flere ord har forkerte betydninger eller forkert lemmatisering, bl.a. wen, loben og der Vater. |
| DA-KURSS-FPR-0080 | HIGH | SEMANTICS | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml#grammar` | Forklaringen siger “på dansk” og angiver forkert, at akkusativ altid svarer til “hvad?”. |
| DA-KURSS-FPR-0081 | CRITICAL | SEMANTICS | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.subtitle` | Undertitlen beskriver et andet emne end lektionens indhold, som handler om tal, flertal, omlyd og substantivernes plural |
| DA-KURSS-FPR-0082 | CRITICAL | SEMANTICS | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml#word-list` | Flere centrale gloser er forkert oversat, bl.a. anspitzen, leicht og hier. |
| DA-KURSS-FPR-0083 | CRITICAL | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml#grammar` | Lettisk tekst, dansk og en stavefejl i tysk “synd” er blandet i samme eksempel. |
| DA-KURSS-FPR-0084 | CRITICAL | SEMANTICS | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#word-list` | Ordlisten indeholder engelske rester og mange forskudte eller forkerte oversættelser. |
| DA-KURSS-FPR-0085 | MEDIUM | NATURALNESS | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#grammar` | Overskriften er grammatisk forkert; “kommandoer udtryk” er ikke idiomatisk dansk. |
| DA-KURSS-FPR-0086 | HIGH | FOREIGN_REMNANT | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#exercise` | Den tyske UI-tekst “Übung” er en unødvendig fremmed rest i den danske version. |
| DA-KURSS-FPR-0087 | MEDIUM | GRAMMAR | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.subtitle` | “ændre” er en forkert verbalform i denne opremsning; der skal bruges substantivet “ændring”. |
| DA-KURSS-FPR-0088 | MEDIUM | GRAMMAR | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[0]` | Der mangler komma mellem de sideordnede adjektiver; gentagelse af »som« gør også formuleringen mere grammatisk klar. |
| DA-KURSS-FPR-0089 | MEDIUM | NATURALNESS | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[19].lv` | På moderne dansk hedder det normalt »hilse på nogen«; den nuværende formulering virker unaturlig eller forældet. |
| DA-KURSS-FPR-0090 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[23].lv` | »Nein« er tysk og står som et fremmedsprogsrest i den danske tekst. |
| DA-KURSS-FPR-0091 | LOW | NATURALNESS | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[37].lv` | »Hr. lærer« er en unaturlig direkte tiltale på dansk; »Lærer« fungerer naturligt som tiltaleform. |
| DA-KURSS-FPR-0092 | MEDIUM | GRAMMAR | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[5].title` | Som sektionsoverskrift er infinitiven »Oversætte« mindre idiomatisk; substantivet »Oversættelse« passer til øvelsens tit |
| DA-KURSS-FPR-0093 | HIGH | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[4].lv` | »Nein« er tysk og står som et fremmedsprogsrest i den danske tekst. |
| DA-KURSS-FPR-0094 | MEDIUM | SEMANTICS | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.subtitle` | "Emner" betyder typisk topics; den latviske reference angiver flere genstande eller objekter. |
| DA-KURSS-FPR-0095 | LOW | NATURALNESS | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.intro` | "Forelæsning" betyder lecture og passer dårligere til kursuslektionen end "lektion". |
| DA-KURSS-FPR-0096 | MEDIUM | TRANSLATION |  | `` |  |
| DA-KURSS-FPR-0097 | HIGH | TRANSLATION | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[0].text` | "Angiv" betyder angiv eller list; referencebetydningen er, at pronominerne skal bøjes som den bestemte artikel. |
| DA-KURSS-FPR-0098 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[3].title` | Den tyske tekst "Übung" er en fremmedsprogsrest i det danske felt. |
| DA-KURSS-FPR-0099 | LOW | NATURALNESS | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].title` | Som øvelsestitel er imperativen "Oversæt" naturligere end infinitiven "Oversætte". |
| DA-KURSS-FPR-0100 | HIGH | FOREIGN_REMNANT | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[2].lv` | "Nein" er tysk og skal oversættes til dansk "Nej". |
| DA-KURSS-FPR-0101 | HIGH | SEMANTICS | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[4].cards[12].lv` | Tysk "Briefe" betyder breve, ikke bogstaver; "bogstaverne" ændrer betydningen. |
| DA-KURSS-FPR-0102 | MEDIUM | CONSISTENCY | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.intro` | "Forelæsning" betyder lecture og er inkonsistent med kursets øvrige brug af "lektion" for lesson. |
| DA-KURSS-FPR-0103 | MEDIUM | GRAMMAR | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].title` | Som sektionsoverskrift er imperativen "Oversæt" naturlig; "Oversætte" er infinitiv og lyder som en emnebetegnelse. |
| DA-KURSS-FPR-0104 | HIGH | FOREIGN_REMNANT | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[5].lv` | “Nein” is German; the Danish negation is “Nej”. |
| DA-KURSS-FPR-0105 | HIGH | SEMANTICS | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[11].lv` | “Wer bist du?” asks who someone is, which is “Hvem er du?” in Danish, not “Hvad er du?”. |
| DA-KURSS-FPR-0106 | HIGH | SEMANTICS | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[18].lv` | The answer refers to a female teacher, but “Læreren” is grammatically masculine/common-gender and does not match “Lehrer |
| DA-KURSS-FPR-0107 | MEDIUM | NATURALNESS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.subtitle` | “Besiddende” is an adjective and is not parallel to the surrounding nouns; “besiddelse” correctly denotes possession. |
| DA-KURSS-FPR-0108 | HIGH | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[22]` | German “die Stühle” is an indefinite plural; Danish “stolene” means “the chairs”. |
| DA-KURSS-FPR-0109 | HIGH | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[29]` | German “die Schwestern” is an indefinite plural; Danish “søstrene” means “the sisters”. |
| DA-KURSS-FPR-0110 | MEDIUM | ORTHOGRAPHY | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[0].text` | The second sentence starts with a lowercase letter, and “t. t.” is an erroneous remnant; Danish uses “osv.” here. |
| DA-KURSS-FPR-0111 | HIGH | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].text` | Teksten hævder fejlagtigt, at dansk har dativ i denne konstruktion; kildereferencen angiver lettisk. Sætningen starter o |
| DA-KURSS-FPR-0112 | MEDIUM | NATURALNESS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[5].text` | “Kommandoformerne” er ikke den naturlige grammatiske betegnelse; “imperativformerne” er præcist og idiomatisk. |
| DA-KURSS-FPR-0113 | MEDIUM | NATURALNESS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[7].text` | “Af det danske sprog” og “det negative ord” er kluntede formuleringer; “på dansk” og “nægtelsesordet” er idiomatisk dans |
| DA-KURSS-FPR-0114 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].text` | “zählt” er et tysk ord midt i den danske tekst. “Et led” er desuden den naturlige danske grammatikterm. |
| DA-KURSS-FPR-0115 | MEDIUM | NATURALNESS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[12].text` | “Sagens første ord” er en fejloversættelse og beskriver ikke korrekt første led i et sammensat navneord. |
| DA-KURSS-FPR-0116 | MEDIUM | GRAMMAR | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].title` | Som instruktionsoverskrift bør imperativen “Oversæt” bruges; “Oversætte” er infinitiv og lyder ufuldstændigt her. |
| DA-KURSS-FPR-0117 | MEDIUM | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[5].lv` | “Hefte” svarer her til “hæfter”, som allerede bruges i den foregående sætning; “notesbøger” ændrer ordvalget. |
| DA-KURSS-FPR-0118 | MEDIUM | NAMES | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv` | Personnavnet er translittereret som “Franc”, men den tyske original har “Franz”; navnet bør være konsekvent. |
| DA-KURSS-FPR-0119 | MEDIUM | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[11].lv` | Den tyske sætning refererer til en bestemt lærer (“der Lehrer”), mens den danske tekst bruger ubestemt form. |
| DA-KURSS-FPR-0120 | HIGH | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[15].lv` | Den danske tekst spørger, hvor Anna er, mens den tyske original spørger, hvad Anna laver. |
| DA-KURSS-FPR-0121 | MEDIUM | NAMES | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[17].lv` | “Francis” matcher ikke navnet “Franz” i den tyske original og er inkonsekvent med den øvrige dialog. |
| DA-KURSS-FPR-0122 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[18].lv` | “Nein” er et tysk remnant i dansk tekst, og “Francis” afviger fra navnet “Franz” i originalen. |
| DA-KURSS-FPR-0123 | HIGH | FOREIGN_REMNANT | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[20].lv` | “Nein” er et tysk ord, der står tilbage i den danske oversættelse. |
| DA-KURSS-FPR-0124 | MEDIUM | NATURALNESS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.subtitle` | “Sammenlignende grader” er ikke idiomatisk dansk; “gradbøjning” er den almindelige grammatiske betegnelse. |
| DA-KURSS-FPR-0125 | MEDIUM | NATURALNESS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.intro` | “Forelæsning” og “sammenlignende grader” passer dårligt til kursusformatet; “lektion” og “gradbøjning” er naturligere. |
| DA-KURSS-FPR-0126 | MEDIUM | GRAMMAR | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[27]` | Den danske oversættelse bør stå i ubestemt form som opslagsord; »blomsten« er bestemt form. |
| DA-KURSS-FPR-0127 | MEDIUM | GRAMMAR | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[30]` | »Kridtet« er bestemt form, mens den danske opslagsform her bør være »kridt«. |
| DA-KURSS-FPR-0128 | LOW | GRAMMAR | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[1]` | Efter »som« mangler den ubestemte artikel »et« i udtrykket »som et almindeligt st«. |
| DA-KURSS-FPR-0129 | HIGH | SEMANTICS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[0].text` | Teksten kalder komparativgraden for superlativgrad, hvilket modsiger overskriften og den efterfølgende parentes. |
| DA-KURSS-FPR-0130 | HIGH | SEMANTICS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].text` | Umlaut forekommer normalt i både komparativ og superlativ, ikke kun i superlativ. |
| DA-KURSS-FPR-0131 | HIGH | TRANSLATION | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[3].text` | »Generelle grad« og især »trafikordet« er fejloversættelser; den tyske grammatiske term er »ordet am«. |
| DA-KURSS-FPR-0132 | MEDIUM | NATURALNESS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[6].lv` | »Hvad hedder han?« er den naturlige og direkte danske ækvivalent til det tyske spørgsmål. |
| DA-KURSS-FPR-0133 | HIGH | NAMES | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].lv` | Det danske personnavn »Jan« matcher ikke det tyske »Johann« og bør ikke ændres til et andet navn. |
| DA-KURSS-FPR-0134 | MEDIUM | REGISTER | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[9].lv` | Det tyske »Sie« er formelt, men det danske »du« er uformelt; tiltaleformen skal være konsekvent. |
| DA-KURSS-FPR-0135 | HIGH | NAMES | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[12].lv` | »Nein« er et tysk remnant, og personnavnet skal matche det tyske »Rudolf«, ikke »Rudolph«. |
| DA-KURSS-FPR-0136 | HIGH | SEMANTICS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[13].lv` | »Hvad« og »det« spørger efter en ting, mens det tyske spørgsmål spørger, hvilken person der er størst. |
| DA-KURSS-FPR-0137 | HIGH | NAMES | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv` | Det danske personnavn »Francis« matcher ikke det tyske »Franz«. Navnet skal bevares fra DE. |
| DA-KURSS-FPR-0138 | LOW | NATURALNESS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[16].lv` | Den nuværende formulering er forståelig, men »lige så gammel som« er mere idiomatisk og matcher »ebenso alt wie« direkte |
| DA-KURSS-FPR-0139 | MEDIUM | TRANSLATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.intro` | “Foredrag Tretten” betyder et foredrag, ikke en lektion, og passer ikke til lektionens titel eller kursuskontekst. |
| DA-KURSS-FPR-0140 | LOW | CONSISTENCY | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[8]` | De øvrige tyske substantiver gengives i bestemt form; “ben” er ubestemt form og bryder derfor mønstret. |
| DA-KURSS-FPR-0141 | MEDIUM | GRAMMAR | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[9]` | “Ben” er ubestemt flertal eller ubestemt ental; den bestemte danske ækvivalent til die Beine er “benene”. |
| DA-KURSS-FPR-0142 | MEDIUM | GRAMMAR | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[11]` | Den danske oversættelse mangler bestemt endelse; “die Füße” svarer til “fødderne”, ikke “fødder”. |
| DA-KURSS-FPR-0143 | LOW | ORTHOGRAPHY | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].text` | Det tyske låneord “umlaut” skrives normalt med lille begyndelsesbogstav på dansk, især når overskriften allerede bruger  |
| DA-KURSS-FPR-0144 | HIGH | TRANSLATION | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].text` | “Går i cirkler” er en fejlagtig oversættelse af betydningen “bøjes”. |
| DA-KURSS-FPR-0145 | LOW | CONSISTENCY | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[12].text` | “Feminine navneord” er forståeligt, men afviger fra den danske fagterm “hunkønsnavneord” i overskriften. |
| DA-KURSS-FPR-0146 | LOW | NATURALNESS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[0]` | Bogstavet bør normalt markeres med den danske bestemte form “h'et”. |
| DA-KURSS-FPR-0147 | LOW | NATURALNESS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[1]` | Bogstavet bør normalt markeres med den danske bestemte form “h'et”. |
| DA-KURSS-FPR-0148 | LOW | NATURALNESS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[2]` | Bogstavet bør normalt markeres med den danske bestemte form “a'et”. |
| DA-KURSS-FPR-0149 | LOW | NATURALNESS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[3]` | Bogstavet bør normalt markeres med den danske bestemte form “a'et”. |
| DA-KURSS-FPR-0150 | LOW | NATURALNESS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].title` | Som dansk sektionsoverskrift er substantivet “Oversættelse” mere idiomatisk end infinitiven “Oversætte”. |
| DA-KURSS-FPR-0151 | HIGH | NAMES | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv` | Det danske navn “Jan” matcher ikke navnet “Johann” i den tyske kildetekst. |
| DA-KURSS-FPR-0152 | HIGH | NAMES | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[30].lv` | Det danske navn Jan svarer ikke til det tyske Johann i kildeteksten. |
| DA-KURSS-FPR-0153 | HIGH | SEMANTICS | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.intro` | Foredrag betyder 'lecture', ikke 'lektion', og stemmer ikke med lektionens titel. |
| DA-KURSS-FPR-0154 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[0]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0155 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[1]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0156 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[2]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0157 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[3]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0158 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[4]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0159 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[5]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0160 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[6]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0161 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[7]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0162 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[8]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0163 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[9]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0164 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[10]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0165 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[11]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0166 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[12]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0167 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[15]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0168 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[16]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0169 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[18]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0170 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[19]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0171 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[20]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0172 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[21]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0173 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[22]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0174 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[23]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0175 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[24]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0176 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[25]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0177 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[26]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0178 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[27]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0179 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[28]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0180 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[29]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0181 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[31]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0182 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[34]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0183 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[35]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0184 | MEDIUM | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[38]` | Den engelske forklaring er en fremmedsprogsrest og skal være på dansk. |
| DA-KURSS-FPR-0185 | MEDIUM | GRAMMAR | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[1].text` | “Nuværende ental” er unaturligt, og person bør stå i ental i denne grammatiske formulering. |
| DA-KURSS-FPR-0186 | HIGH | SEMANTICS | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[1]` | Eksemplerne ich muss og er muss indeholder ss, ikke ß, og modsiger derfor den første regel. |
| DA-KURSS-FPR-0187 | HIGH | SEMANTICS | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[2]` | Reglen er forkert formuleret, og alle eksemplerne viser ss, ikke ß. |
| DA-KURSS-FPR-0188 | HIGH | FOREIGN_REMNANT | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]` | Sætningen indeholder en lettisk rest og bør i stedet bruge det tyske eksempel magst. |
| DA-KURSS-FPR-0189 | MEDIUM | TRANSLATION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[0].lv` | Fleißig betyder flittig, og studere flittigt er mere idiomatisk dansk end studere hårdt. |
| DA-KURSS-FPR-0190 | MEDIUM | TRANSLATION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[1].lv` | Wollen bør oversættes med vil, Schüler med elever, og fleißig med flittigt. |
| DA-KURSS-FPR-0191 | MEDIUM | TRANSLATION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[5].lv` | Fleißig betyder flittig, ikke hård; studere flittigt er den naturlige danske formulering. |
| DA-KURSS-FPR-0192 | MEDIUM | TRANSLATION | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[6].lv` | Die Schüler er eleverne, og fleißig skal gengives med flittigt. |
| DA-KURSS-FPR-0193 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[0]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0194 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[1]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0195 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[2]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0196 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[3]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0197 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[4]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0198 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[5]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0199 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[6]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0200 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[7]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0201 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[8]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0202 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[9]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0203 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[10]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0204 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[11]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0205 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[12]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0206 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[13]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0207 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[19]` | Feltet indeholder engelsk tekst i stedet for dansk. |
| DA-KURSS-FPR-0208 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[26]` | The English gloss “willingly” is a foreign-language remnant; the Danish translation is “gerne”. |
| DA-KURSS-FPR-0209 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[29]` | The English gloss “to take” should be translated into Danish as “at tage”. |
| DA-KURSS-FPR-0210 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[30]` | The English gloss “I take” should be translated into Danish as “jeg tager”. |
| DA-KURSS-FPR-0211 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[31]` | The English gloss “you take” should be translated into Danish as “du tager”. |
| DA-KURSS-FPR-0212 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[32]` | The English gloss “he takes” should be translated into Danish as “han tager”. |
| DA-KURSS-FPR-0213 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[33]` | The English gloss “to eat” should be translated into Danish as “at spise”. |
| DA-KURSS-FPR-0214 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[34]` | The English gloss “I eat” should be translated into Danish as “jeg spiser”. |
| DA-KURSS-FPR-0215 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[35]` | The English gloss “you eat” should be translated into Danish as “du spiser”. |
| DA-KURSS-FPR-0216 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[36]` | The English gloss “he eats” should be translated into Danish as “han spiser”. |
| DA-KURSS-FPR-0217 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[37]` | The English gloss “we eat” should be translated into Danish as “vi spiser”. |
| DA-KURSS-FPR-0218 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[38]` | The English gloss “you eat” should be translated into Danish as “I spiser” for the plural informal pronoun. |
| DA-KURSS-FPR-0219 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[39]` | The gloss contains English text and a duplicated translation; the Danish equivalent is “de spiser”. |
| DA-KURSS-FPR-0220 | HIGH | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[0].text` | “Sollen” expresses obligation or duty, not having a need. The Danish explanation should use “at skulle”. |
| DA-KURSS-FPR-0221 | HIGH | GRAMMAR | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[4].text` | “Essen-buen” is not a Danish grammatical expression; the verb should be described with “bøjes”. |
| DA-KURSS-FPR-0222 | HIGH | ORTHOGRAPHY | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].text` | The German form “ihr est” is misspelled; the correct form is “ihr esst”. |
| DA-KURSS-FPR-0223 | MEDIUM | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[2].lv` | “Darf” expresses permission, which is “må” in Danish; “kan” expresses ability and changes the meaning. |
| DA-KURSS-FPR-0224 | MEDIUM | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[8].lv` | The German definite article “die Birne” corresponds to the Danish definite form “pæren”, not the indefinite “en pære”. |
| DA-KURSS-FPR-0225 | MEDIUM | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[11].lv` | Schüler betyder »elev«, ikke »studerende«; den danske tekst ændrer målgruppen. |
| DA-KURSS-FPR-0226 | HIGH | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[14].lv` | Darf udtrykker tilladelse (»må«), mens »kan« udtrykker evne eller mulighed. |
| DA-KURSS-FPR-0227 | LOW | GRAMMAR | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.subtitle` | »Dativs« er ikke den normale danske form; emnebetegnelsen er »dativ«. |
| DA-KURSS-FPR-0228 | LOW | NATURALNESS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.intro` | »Forelæsning« betyder lecture og passer dårligere end »lektion« til en kursuslektion. |
| DA-KURSS-FPR-0229 | MEDIUM | SEMANTICS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].title` | Afsnittet indeholder ordforråd, ikke personnavne; »Navne« er en betydningsfejl. |
| DA-KURSS-FPR-0230 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[1]` | Den engelske gloss »to give away« er en fremmedrest og skal være dansk. |
| DA-KURSS-FPR-0231 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[2]` | Den engelske gloss »to the son« er en fremmedrest. |
| DA-KURSS-FPR-0232 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[3]` | Den engelske gloss »to the sons« er en fremmedrest. |
| DA-KURSS-FPR-0233 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[10]` | Den engelske gloss »he gives« er en fremmedrest. |
| DA-KURSS-FPR-0234 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[16]` | Den engelske gloss »to belong« er en fremmedrest. |
| DA-KURSS-FPR-0235 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[17]` | Glossene er engelske og gentaget; de skal oversættes til dansk. |
| DA-KURSS-FPR-0236 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[18]` | Glossene er engelske og gentaget; de skal oversættes til dansk. |
| DA-KURSS-FPR-0237 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[20]` | Den engelske gloss »meadows« er en fremmedrest. |
| DA-KURSS-FPR-0238 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[22]` | Den engelske gloss »forests« er en fremmedrest. |
| DA-KURSS-FPR-0239 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[27]` | Den engelske gloss »faithful« er en fremmedrest. |
| DA-KURSS-FPR-0240 | LOW | NATURALNESS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].headin` | »Dativ-e« er forståeligt, men »Dativ på -e« er den naturlige danske formulering. |
| DA-KURSS-FPR-0241 | MEDIUM | NATURALNESS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[0].lv` | Den danske præposition "på" gør formuleringen mindre neutral og gengiver ikke direkte den tyske sætning. |
| DA-KURSS-FPR-0242 | MEDIUM | SEMANTICS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[1].lv` | "sin" tilføjer ejerskab, som ikke findes i den tyske tekst; de bestemte objekter bør gengives som sønnen og datteren. |
| DA-KURSS-FPR-0243 | MEDIUM | TRANSLATION | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.intro` | "Foredrag" betyder lecture/tale og passer ikke til en kursuslektion; den latinske reference angiver en lektion. |
| DA-KURSS-FPR-0244 | MEDIUM | TRANSLATION | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].title` | Afsnittet indeholder ordforråd, ikke personnavne; "Navne" er derfor en misvisende dansk overskrift. |
| DA-KURSS-FPR-0245 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[6]` | Den engelske glosse "catch" er en fremmedsprogsrest i danskfeltet. |
| DA-KURSS-FPR-0246 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[7]` | Glossen indeholder engelsk "to" og "catch" i stedet for rent dansk. |
| DA-KURSS-FPR-0247 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9]` | Den engelske oversættelse "school attendant" er en fremmedsprogsrest i danskfeltet. |
| DA-KURSS-FPR-0248 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[11]` | Den engelske frase "to sweep with a broom" står i danskfeltet. |
| DA-KURSS-FPR-0249 | LOW | GRAMMAR | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]` | Som ordbogsglose bør substantivet stå ubestemt: "gulv", ikke den bestemte form "gulvet". |
| DA-KURSS-FPR-0250 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[13]` | De engelske gloser "rag / cloth" står i danskfeltet. |
| DA-KURSS-FPR-0251 | LOW | NATURALNESS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[14]` | "Tørre" alene betyder normalt dry; det tyske verbum bør her gengives som "tørre af". |
| DA-KURSS-FPR-0252 | MEDIUM | NATURALNESS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[0].text` | »Står med dativkasus« og »dansk:« er ikke idiomatisk dansk i denne grammatiske forklaring. |
| DA-KURSS-FPR-0253 | MEDIUM | NATURALNESS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].text` | Formuleringen »spørgsmålet om med hvem/med hvad« er klodset og mangler en tydelig syntaktisk parallel. |
| DA-KURSS-FPR-0254 | HIGH | SEMANTICS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].text` | Wischen betyder ikke »at feje«, men at tørre eller viske. Den nuværende forklaring sammenblander de to verbers betydning |
| DA-KURSS-FPR-0255 | MEDIUM | TRANSLATION | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.intro` | "foredrag" conflicts with the lesson title and "en" is a typo for the German preposition "an". |
| DA-KURSS-FPR-0256 | MEDIUM | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[1].title` | "Navne" means names, but this section contains vocabulary items; "Ord" is the appropriate Danish heading. |
| DA-KURSS-FPR-0257 | HIGH | FOREIGN_REMNANT | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[14]` | "mugs" is an English remnant and does not translate German "Krüge"; the Danish plural is "kander". |
| DA-KURSS-FPR-0258 | HIGH | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[1].items[21]` | German "Diele" means an entrance hall or hallway here, not a floor; "gulv" translates "Fußboden". |
| DA-KURSS-FPR-0259 | LOW | GRAMMAR | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[0].text` | The original has number agreement and omits "og" in the list; "kan bruges" is the natural Danish formulation. |
| DA-KURSS-FPR-0260 | MEDIUM | NATURALNESS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[1].text` | "retnings- eller stedsændring" is awkward Danish and the sentence lacks the natural phrase "Spørgsmålet er". |
| DA-KURSS-FPR-0261 | MEDIUM | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[5].text` | The section concerns mass nouns, not nouns in general; "Navneord" overgeneralizes the grammar rule. |
| DA-KURSS-FPR-0262 | MEDIUM | GRAMMAR | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[6].text` | The preposition is wrong for a place ("på"), and "omtales" is the appropriate verb in this grammatical explanation. |
| DA-KURSS-FPR-0263 | HIGH | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[7].text` | The text discusses German "in" and must distinguish the directional meaning "ind i" from the locative meaning. |
| DA-KURSS-FPR-0264 | LOW | NATURALNESS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[8].text` | The original phrasing "bruges ofte kortere" is not idiomatic Danish; the forms are used "i en kortere form". |
| DA-KURSS-FPR-0265 | LOW | GRAMMAR | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[3].items[0]` | Kolonet efter h er grammatisk unaturligt; ejestedordet h’et gør formuleringen korrekt på dansk. |
| DA-KURSS-FPR-0266 | LOW | GRAMMAR | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[3].items[1]` | Bogstavnavnet skal have bestemt form: o’et. |
| DA-KURSS-FPR-0267 | MEDIUM | TRANSLATION | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.subtitle` | Wechselpræpositionen er tysk og ikke korrekt dansk; lektionens titel bør være på dansk. |
| DA-KURSS-FPR-0268 | MEDIUM | REGISTER | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.intro` | Forelæsning betyder lecture og passer ikke til en sprogkursuslektion; lektion er den naturlige betegnelse. |
| DA-KURSS-FPR-0269 | MEDIUM | TRANSLATION | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[1].title` | Navne betyder names, mens afsnittet er en ordliste; den danske oversættelse bør være Ord. |
| DA-KURSS-FPR-0270 | HIGH | TRANSLATION | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[1].items[37]` | Det tyske adverbium »so« oversættes til dansk »så«, ikke »so«. |
| DA-KURSS-FPR-0271 | HIGH | FOREIGN_REMNANT | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[0].headin` | Overskriften står på tysk; den bør oversættes til dansk. |
| DA-KURSS-FPR-0272 | MEDIUM | SEMANTICS | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[1].text` | Det tyske målord »wohin?« erstattes fejlagtigt af dansk »hvorhen?«, og formuleringen er grammatisk tung. |
| DA-KURSS-FPR-0273 | MEDIUM | SEMANTICS | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[2].text` | Det tyske målord »wo?« bør stå uændret i forklaringen, og sætningen bør formuleres mere idiomatisk. |
| DA-KURSS-FPR-0274 | MEDIUM | NATURALNESS | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[2].items[6].text` | Sætningen har upræcis tegnsætning, inkonsekvent stort begyndelsesbogstav og den unaturlige formulering »hvis gang«. |
| DA-KURSS-FPR-0275 | LOW | CONSISTENCY | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[3]` | Den fonetiske gengivelse er inkonsekvent med »št« i den foregående udtaleangivelse. |
| DA-KURSS-FPR-0276 | HIGH | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].title` | »Navne« betyder navne på personer eller ting; sektionen er et ordforrådsafsnit og bør hedde »Ordforråd«. |
| DA-KURSS-FPR-0277 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[11]` | De engelske oversættelser attic, floor og ground er ikke oversat til dansk. |
| DA-KURSS-FPR-0278 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[20]` | Oven er et engelsk ord og ikke den danske oversættelse af der Ofen. |
| DA-KURSS-FPR-0279 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].headin` | ar er lettisk og hører ikke hjemme i den danske overskrift. |
| DA-KURSS-FPR-0280 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[0].text` | Teksten nævner ikke, at tidsordene står med dativ, eller at dativ også svarer på wann?; den er derfor ufuldstændig. |
| DA-KURSS-FPR-0281 | MEDIUM | GRAMMAR | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[5].text` | Udtrykket tager stammevokalen a Umlaut er grammatisk og idiomatisk forkert på dansk. |
| DA-KURSS-FPR-0282 | MEDIUM | GRAMMAR | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[1]` | Formuleringen er grammatisk unaturlig; vokalen bør omtales som o'et og forbindes med og. |
| DA-KURSS-FPR-0283 | LOW | NATURALNESS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[2]` | Ingen reel fejl; formuleringen er acceptabel som en enkel udtaleangivelse. |
| DA-KURSS-FPR-0284 | MEDIUM | GRAMMAR | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[3]` | Der mangler artikel og korrekt konstruktion omkring bogstavet h; den nuværende formulering er grammatisk fejlbehæftet. |
| DA-KURSS-FPR-0285 | MEDIUM | GRAMMAR | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[3].items[4]` | Der mangler artikel ved h'et og en ubestemt artikel foran lang vokal; forbindelsen mellem eksemplerne er også forkert. |
| DA-KURSS-FPR-0286 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[2].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0287 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[3].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0288 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[4].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0289 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[5].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0290 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[6].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0291 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[7].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0292 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[8].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0293 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[9].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0294 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[10].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0295 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[11].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0296 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[12].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0297 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[13].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0298 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[14].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0299 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[15].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0300 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[16].task` | “wann” betyder “hvornår” og er ikke relevant for stedkasus; den korrekte modsætning er wo/wohin. |
| DA-KURSS-FPR-0301 | LOW | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[6].lv` | “de ti lejligheder” betyder “de ti bestemte lejligheder”, mens den tyske tekst blot nævner ti lejligheder. |
| DA-KURSS-FPR-0302 | MEDIUM | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[11].lv` | Det tyske “steigt” betyder, at skorstensfejeren klatrer eller stiger, ikke blot går. |
| DA-KURSS-FPR-0303 | LOW | SEMANTICS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[21].lv` | “Hvor ... hen?” gengiver tysk “Wohin” tydeligere og angiver retning, som den nuværende formulering udelader. |
| DA-KURSS-FPR-0304 | MEDIUM | SEMANTICS | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[1].title` | Afsnittet indeholder gloser og ikke person- eller stednavne; “Ord” passer til indholdet. |
| DA-KURSS-FPR-0305 | MEDIUM | GRAMMAR | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[19]` | Som opslagsord er fleißig et adjektiv, så den danske grundform bør være flittig, ikke neutrum/adverbiet flittigt. |
| DA-KURSS-FPR-0306 | HIGH | TRANSLATION | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[1].text` | von er en præposition, ikke et forhold. Den nuværende formulering bruger et forkert dansk grammatisk fagudtryk. |
| DA-KURSS-FPR-0307 | MEDIUM | SEMANTICS | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[10].lv` | Det tyske vom angiver den bestemte ven; den danske formulering bruger ubestemt artikel. |
| DA-KURSS-FPR-0308 | MEDIUM | SEMANTICS | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[11].lv` | Den tyske præposition von der refererer til en bestemt kvindelig ven eller kæreste; dansk har ubestemt artikel. |
| DA-KURSS-FPR-0309 | MEDIUM | SEMANTICS | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[13].lv` | Alle tre tyske præpositionsformer er bestemte; dansk bruger fejlagtigt ubestemte former i de første to led og sidste led |
| DA-KURSS-FPR-0310 | MEDIUM | NAMES | lesson2 | `lesson2TrainingCardsDa[5].front` | Det tyske personnavn Marie er ændret til Maria i den danske tekst. |
| DA-KURSS-FPR-0311 | MEDIUM | NAMES | lesson2 | `lesson2TrainingCardsDa[10].front` | Det tyske personnavn Marie er ændret til Maria i den danske tekst. |
| DA-KURSS-FPR-0312 | HIGH | SEMANTICS | lesson3 | `lesson3TrainingCardsDa[0].front` | Rechnen betyder her at regne/beregne, ikke at tælle. |
| DA-KURSS-FPR-0313 | MEDIUM | SEMANTICS | lesson3 | `lesson3TrainingCardsDa[2].front` | Hvad står der? forstås normalt som et spørgsmål om tekst; derovre gengiver her stedhenvisningen dort. |
| DA-KURSS-FPR-0314 | HIGH | SEMANTICS | lesson3 | `lesson3TrainingCardsDa[3].front` | Den danske tekst ændrer står til er og mister dermed den tyske betydning om bordets placering. |
| DA-KURSS-FPR-0315 | MEDIUM | TRANSLATION | lesson4 | `lesson4TrainingCardsDa[0].front` | DA uses an overly specific and inconsistent term; German Federhalter is naturally rendered as penneholder here. |
| DA-KURSS-FPR-0316 | MEDIUM | CONSISTENCY | lesson4 | `lesson4TrainingCardsDa[1].front` | The noun should be consistent with the corrected term penneholder used elsewhere for Federhalter. |
| DA-KURSS-FPR-0317 | MEDIUM | GRAMMAR | lesson4 | `lesson4TrainingCardsDa[2].front` | German has an indefinite article; DA incorrectly uses the definite form fjeren. |
| DA-KURSS-FPR-0318 | MEDIUM | TRANSLATION | lesson4 | `lesson4TrainingCardsDa[11].front` | DA correctly uses Hun according to the context and source reference; DE incorrectly uses the neuter pronoun Es. |
| DA-KURSS-FPR-0319 | MEDIUM | SEMANTICS | lesson4 | `lesson4TrainingCardsDa[13].front` | DA uses the definite bogen, whereas German specifies an indefinite book. |
| DA-KURSS-FPR-0320 | MEDIUM | CONSISTENCY | lesson5 | `lesson5TrainingCardsDa[9].front` | The previous question identifies a female pupil as elevinden; switching to the generic eleven is inconsistent with the s |
| DA-KURSS-FPR-0321 | HIGH | TRANSLATION | lesson5 | `lesson5TrainingCardsDa[10].front` | DA incorrectly uses indefinite nouns and translates Feder as pen; the German objects are all definite and Feder is fjer  |
| DA-KURSS-FPR-0322 | MEDIUM | TRANSLATION | lesson6 | `lesson6TrainingCardsDa[7].front` | I denne kontekst betyder tysk Teller tallerkener; plader er normalt flade skiver eller plader, ikke bordservice. |
| DA-KURSS-FPR-0323 | MEDIUM | SEMANTICS | lesson6 | `lesson6TrainingCardsDa[16].front` | Den tyske tekst har bestemt form: den Bleistift. Den danske tekst gør blyanten ubestemt og ændrer dermed referencen. |
| DA-KURSS-FPR-0324 | MEDIUM | TRANSLATION | lesson6 | `lesson6TrainingCardsDa[18].front` | Federhalter betyder penneholder. Fyldepenholder er en smallere betydning og svarer til en holder til en fyldepen. |
| DA-KURSS-FPR-0325 | MEDIUM | TRANSLATION | lesson6 | `lesson6TrainingCardsDa[19].front` | Federhalter bør oversættes som penneholder, ikke fyldepenholder, som har en mere specifik betydning. |
| DA-KURSS-FPR-0326 | MEDIUM | TRANSLATION | lesson6 | `lesson6TrainingCardsDa[20].front` | Federhalter bør gengives som penneholder; fyldepenholder indsnævrer betydningen til en fountain-pen-holder. |
| DA-KURSS-FPR-0327 | LOW | GRAMMAR | ui | `LANGUAGE_UI_STRINGS.kurss.pronounsDesc` | Den nuværende formulering mangler en naturlig præposition eller sammensætning mellem kasusnavnene og former. |
| DA-KURSS-FPR-0328 | MEDIUM | NATURALNESS | ui | `LANGUAGE_UI_STRINGS.kurss.verbBasics` | Verbets grundlag er en unaturlig og uklar overskrift på dansk for et afsnit om verbets grundlæggende emner. |
| DA-KURSS-FPR-0329 | MEDIUM | TRANSLATION | ui | `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr` | Den tyske tiltaleform "Ihr" er fejlagtigt erstattet af det danske pronomen "I"; de øvrige labels bevarer de tyske former |
| DA-KURSS-FPR-0330 | MEDIUM | GRAMMAR | ui | `LANGUAGE_UI_STRINGS.kurss.lessonItems.11.menuDesc` | Det korrekte danske fagudtryk for possessive pronominer er "ejestedord"; "ejedord" er ikke standard dansk. |

> **PROPOSED_DA** values in JSON are Luna suggestions only — not OWNER-approved.
