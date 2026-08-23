# ET–DE Kurss — pilns FULL_DISCOVERY audits (READ-ONLY)

**AUTHORITATIVE STANDARD:** `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.9**
**AUDIT MODE:** FIRST_FULL_DISCOVERY
**WORK_BRANCH:** `cursor/et-de-kurss-full-audit-4a7c`
**DE:** STRICT READ-ONLY · **LV Kurss:** MASTER (structure only)

Audita datums: 2026-08-23
Auditors: deterministiskā pārbaude + GPT-5.6 Luna (FULL_DISCOVERY)
Production changes: **0** (audit run only)

**ORIGIN_MAIN_SHA:** `0cfef081`

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| ET lauki (coverage) | **1510** |
| Lekcijas | **21** |
| Extra HTML topics | **6** |
| UI kurss atslēgas | **96** |
| OBJECT_COVERAGE | **100%** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_BACKLOG_FINAL | **323** |
| CRITICAL | **0** |
| HIGH | **249** |
| MEDIUM | **68** |
| LOW | **6** |
| Luna batches | **31** |
| Luna loaded | **31/31** |
| Production changes | **0** |

> **PROPOSED_ET** ir auditora ieteikums — **nav** automātiski OWNER apstiprināts.

## COVERAGE

| Avots | Lauki |
|---|---|
| lesson | 1291 |
| html | 6 |
| training | 117 |
| ui | 96 |

## TECHNICAL GATES

| Gate | Result |
|---|---|
| Syntax | **PASS** |
| validate-kurss.js | **PASS** |
| Structure vs LV MASTER | **PASS** (0 issues) |
| Mirror data↔www | **PASS** |
| DE baseline changes | **0** (PASS) |
| Luna coverage | **PASS** |
| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **N/A** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

## Discovery stability

| Root cause | Count |
|---|---|
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **323** |

## Stage verdict

**ET_KURSS_FULL_AUDIT_NEEDS_OWNER_REVIEW**

## Findings

### ET-KURSS-0001 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **CURRENT_ET:**             <h3>1. õppetund</h3>
            <p class="kurss-lesson-intro">Esimene õppetund: tegusõnad olevikus, sõnad, hääldus, grammatika ja tõlkimine.</p>
            <details class="lesson1-accordion" open>
              <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Tegusõnad olevikus</span><span class="lesson1-chevron">⌃</span></summary>
              <div class="lesson1-content">
                <div class="lesson1-info">Tegusõnad ja nende pöörded olevikus.</div>

- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0002 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **CURRENT_ET:**             <h3>2. õppetund</h3>
            <p class="kurss-lesson-intro">Teine õppetund: dialoogid, sõnad, hääldus, grammatika ja tõlkimine.</p>
            <details class="lesson1-accordion" open>
              <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoogid / laused</span><span class="lesson1-chevron">⌃</span></summary>
              <div class="lesson1-content">
                <div class="lesson1-card-grid">
                  <div class="kurss-example">Spi
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0003 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **CURRENT_ET:**             <h3>3. õppetund</h3>
            <p class="kurss-lesson-intro">Kolmas õppetund: dialoogid, sõnad, hääldus, grammatika ja tõlkimine.</p>
            <details class="lesson1-accordion" open>
              <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoogid / laused</span><span class="lesson1-chevron">⌃</span></summary>
              <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechn
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0004 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **CURRENT_ET:**             <h3>4. õppetund</h3>
            <p class="kurss-lesson-intro">Akusatiiv, nehmen, hinlegen, hinausgehen ja omadussõnad.</p>
            <details class="lesson1-accordion" open>
              <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoogid / laused</span><span class="lesson1-chevron">⌃</span></summary>
              <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div 
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0005 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **CURRENT_ET:** 
    <h3>5. õppetund</h3>
    <p class="kurss-lesson-intro">Wen?, akusatiiv, sitzen, fragen ja -in lõpp.</p>

    <details class="lesson1-accordion" open>
      <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoogid / laused</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid">
        <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div>
        <div class="kurss-example">W
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0006 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **CURRENT_ET:** 
    <h3>6. õppetund</h3>
    <p class="kurss-lesson-intro">Arvsõnad, mitmus, täishäälikumuutused ja nimisõnade mitmuse vormid.</p>

    <details class="lesson1-accordion" open>
      <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoogid / laused</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige 
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0007 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- **CURRENT_ET:**             <h3>7. õppetund</h3>
            <p class="kurss-lesson-intro">Seitsmes õppetund: käskiv kõneviis, viisakusvorm ja mitmus.</p>
            <details class="lesson1-accordion" open>
              <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoogid / laused</span><span class="lesson1-chevron">⌃</span></summary>
              <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was tust du? Ich singe ei
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0008 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[12]`
- **DE (read-only):** fragen (ar akuzatīvu)
- **CURRENT_ET:** fragen (ar akuzatīvu) — küsima
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0009 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[16]`
- **DE (read-only):** sehr (zēr)
- **CURRENT_ET:** sehr (zēr) — väga
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0010 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[27]`
- **DE (read-only):** erzählen (ercēlen)
- **CURRENT_ET:** erzählen (ercēlen) — jutustama
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0011 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[34]`
- **DE (read-only):** der Bäcker (dēr beker)
- **CURRENT_ET:** der Bäcker (dēr beker) — pagar
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0012 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[35]`
- **DE (read-only):** der Schneider (dēr šneider)
- **CURRENT_ET:** der Schneider (dēr šneider) — rätsepp
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0013 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[36]`
- **DE (read-only):** der Gärtner (dēr gertner)
- **CURRENT_ET:** der Gärtner (dēr gertner) — aednik
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0014 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[0]`
- **CURRENT_ET:** ä, kā jau minēts, izrunā gan kā šauro īso vai garo e skaņu. Piemēri: der Bäcker (bēker), das Mädchen (mētchen).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0015 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[1]`
- **CURRENT_ET:** ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0016 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[2]`
- **DE (read-only):** Vārdos Schüler, Bücher
- **CURRENT_ET:** Vārdos Schüler, Bücher — Sõnades Schüler, Bücher on ü pikk, aga sõnas Müller on ü lühike.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0017 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[3]`
- **CURRENT_ET:** ie izrunā kā garo ī: liest (līst).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0018 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[4]`
- **CURRENT_ET:** ß izrunā kā s: grüßen (grüsen).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0019 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[5]`
- **CURRENT_ET:** eu izrunā kā oi: deutlich (doitlich).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0020 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[0]`
- **CURRENT_ET:** Daudziem darbības vārdiem ar patskani e celmā vienskaitļa 2. un 3. personā tagadnē e vietā ir i vai ie.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0021 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[7]`
- **CURRENT_ET:** Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0022 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[8]`
- **CURRENT_ET:** Latviešu valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu sich.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0023 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[10]`
- **CURRENT_ET:** Pavēles izteiksme: setz(e) dich!, setzt euch!, setzen Sie sich!
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0024 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].title`
- **CURRENT_ET:** Übung / Vingrinājums
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0025 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0026 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[0]`
- **DE (read-only):** mehrere (mērere)
- **CURRENT_ET:** mehrere (mērere) — mitu, mitmed
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0027 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[1]`
- **DE (read-only):** hier (hīr)
- **CURRENT_ET:** hier (hīr) — siin
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0028 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[4]`
- **DE (read-only):** langsam (lankzām)
- **CURRENT_ET:** langsam (lankzām) — aeglaselt
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0029 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[6]`
- **DE (read-only):** mehr (mēr)
- **CURRENT_ET:** mehr (mēr) — rohkem
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0030 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[10]`
- **DE (read-only):** ruhig (rū
- **CURRENT_ET:** ruhig (rū-ih) — rahulikult
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0031 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[11]`
- **DE (read-only):** dieser (dīzer)
- **CURRENT_ET:** dieser (dīzer) — see
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0032 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[12]`
- **DE (read-only):** jener (jēner)
- **CURRENT_ET:** jener (jēner) — too
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0033 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[13]`
- **DE (read-only):** der Brief (dēr brīf)
- **CURRENT_ET:** der Brief (dēr brīf) — kiri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0034 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[0].heading`
- **CURRENT_ET:** Norādāmie vietniekvārdi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0035 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[3].title`
- **CURRENT_ET:** Übung / Vingrinājums
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0036 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson9`
- **Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[4].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0037 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]`
- **DE (read-only):** ihr seid (īr zeit)
- **CURRENT_ET:** ihr seid (īr zeit) — teie olete
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0038 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]`
- **DE (read-only):** der Knabe (dēr knābe)
- **CURRENT_ET:** der Knabe (dēr knābe) — poiss
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0039 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]`
- **DE (read-only):** der Großvater (dēr grōsfāter)
- **CURRENT_ET:** der Großvater (dēr grōsfāter) — vanaisa
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0040 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]`
- **DE (read-only):** das Jahr (jār)
- **CURRENT_ET:** das Jahr (jār) — aasta
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0041 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[0]`
- **CURRENT_ET:** Pareizi jāizrunā patskaņu pārkaņojumi.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0042 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[1]`
- **CURRENT_ET:** ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0043 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[2]`
- **CURRENT_ET:** ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0044 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[3]`
- **CURRENT_ET:** Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0045 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]`
- **CURRENT_ET:** Ja patskanim seko viens līdzskanis, patskani izrunā gari: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0046 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[5]`
- **CURRENT_ET:** Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0047 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[6]`
- **CURRENT_ET:** Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0048 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]`
- **CURRENT_ET:** Pareizi izrunā: der Großvater (dēr grōsfāter).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0049 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[8]`
- **CURRENT_ET:** Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0050 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]`
- **CURRENT_ET:** Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0051 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson10`
- **Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[4].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0052 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[6]`
- **DE (read-only):** der Bruder (dēr brūder)
- **CURRENT_ET:** der Bruder (dēr brūder) — vend
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0053 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]`
- **DE (read-only):** der Schreibtisch (dēr šreibtīš)
- **CURRENT_ET:** der Schreibtisch (dēr šreibtīš) — kirjutuslaud
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0054 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[16]`
- **DE (read-only):** zusammen (cuzāmen)
- **CURRENT_ET:** zusammen (cuzāmen) — koos
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0055 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[18]`
- **DE (read-only):** der Freund (dēr froint)
- **CURRENT_ET:** der Freund (dēr froint) — sõber
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0056 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]`
- **DE (read-only):** der Stuhl (dēr štūl)
- **CURRENT_ET:** der Stuhl (dēr štūl) — tool
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0057 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]`
- **DE (read-only):** die Landkarte (dī lantkarte)
- **CURRENT_ET:** die Landkarte (dī lantkarte) — maakaart
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0058 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]`
- **DE (read-only):** die Schwester (dī švester)
- **CURRENT_ET:** die Schwester (dī švester) — õde
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0059 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]`
- **CURRENT_ET:** eu izrunā kā oi: der Freund (dēr froint), neun (noin).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0060 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]`
- **CURRENT_ET:** h pa lielākai daļai ir garumzīme iepriekšējam patskanim: der Stuhl (dēr štūl), zehn (cēn).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0061 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[2]`
- **CURRENT_ET:** z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0062 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].heading`
- **CURRENT_ET:** Latviešu datīvs un vācu nominatīvs/akuzatīvs
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0063 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[3].heading`
- **CURRENT_ET:** Piemēri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0064 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[4].heading`
- **CURRENT_ET:** Salīdzinājums ar citām valodām
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0065 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[4].examples[1]`
- **CURRENT_ET:** angļu: I have a book; the father has a pencil.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0066 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].heading`
- **CURRENT_ET:** Imperativ — piemēri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0067 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].examples[0]`
- **DE (read-only):** habe Geduld!
- **CURRENT_ET:** habe Geduld! — pacietību! / lai tev ir pacietība!
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0068 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[6].examples[1]`
- **DE (read-only):** habt Geduld!
- **CURRENT_ET:** habt Geduld! — lai jums ir pacietība!
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0069 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].heading`
- **CURRENT_ET:** Vārdu kārtība ar denn
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0070 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[11].heading`
- **CURRENT_ET:** Denn — piemēri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0071 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[12].heading`
- **CURRENT_ET:** Saliktie lietvārdi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0072 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[13].heading`
- **CURRENT_ET:** Saliktie lietvārdi — piemēri
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0073 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0074 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13]`
- **DE (read-only):** der Vetter (dēr feter)
- **CURRENT_ET:** der Vetter (dēr feter) — nõbu
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0075 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]`
- **DE (read-only):** das Gummi (das gumī)
- **CURRENT_ET:** das Gummi (das gumī) — kustutuskumm
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0076 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[0]`
- **CURRENT_ET:** x izrunā kā ks: Max (maks), Felix (feliks).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0077 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[1]`
- **CURRENT_ET:** Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0078 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[2]`
- **DE (read-only):** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn
- **CURRENT_ET:** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — h sõnas der Federhalter on hääldatav häälik, aga sõnas der Sohn on see pikendusmärk.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0079 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].heading`
- **CURRENT_ET:** Umlaut pārākajā pakāpē
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0080 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[2].heading`
- **CURRENT_ET:** Salīdzināšana ar wie un als
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0081 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[4].heading`
- **CURRENT_ET:** Neregulārās salīdzināmās pakāpes
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0082 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0083 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].heading`
- **CURRENT_ET:** Umlaut tagadnē
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0084 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[1].heading`
- **CURRENT_ET:** Atgriezeniskais darbības vārds
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0085 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[2].heading`
- **CURRENT_ET:** Pavēles forma ar sich umkehren
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0086 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[3].heading`
- **CURRENT_ET:** Darbības vārds atmen
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0087 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[4].heading`
- **CURRENT_ET:** Pavēles forma ar atmen
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0088 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].heading`
- **CURRENT_ET:** Saliktie darbības vārdi
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0089 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[6].heading`
- **CURRENT_ET:** Neatdalāmie priedēkļi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0090 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[7].heading`
- **CURRENT_ET:** Vietniekvārds jeder
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0091 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[12].heading`
- **CURRENT_ET:** Sieviešu kārtas lietvārdi ar -in
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0092 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[0]`
- **CURRENT_ET:** h vārdā halten ir dzirdama skaņa.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0093 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[1]`
- **CURRENT_ET:** h vārdā fahren rāda patskaņa garumu.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0094 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[2]`
- **CURRENT_ET:** a vārdā halten izrunā īsi: halten.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0095 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[3]`
- **CURRENT_ET:** a vārdā tragen izrunā gari: tragen.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0096 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[4]`
- **CURRENT_ET:** äu izrunā kā oi: du läufst, er läuft.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0097 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[5]`
- **CURRENT_ET:** pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0098 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[4].title`
- **CURRENT_ET:** Vingrinājums
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0099 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0100 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[0].heading`
- **CURRENT_ET:** Modālie darbības vārdi
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0101 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[1].heading`
- **CURRENT_ET:** 1. un 3. persona vienskaitlī
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0102 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[5].heading`
- **CURRENT_ET:** Celma patskaņu maiņa
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0103 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[9].heading`
- **CURRENT_ET:** Svarīgi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0104 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[0]`
- **CURRENT_ET:** ß izrunā kā latviešu s.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0105 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[1]`
- **CURRENT_ET:** ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0106 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[2]`
- **CURRENT_ET:** Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0107 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[3]`
- **CURRENT_ET:** ö vārdā mögen izrunā kā skaidru ö skaņu.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0108 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[4]`
- **CURRENT_ET:** Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0109 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]`
- **CURRENT_ET:** Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0110 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0111 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].heading`
- **CURRENT_ET:** Salīdzinājums
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0112 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[0]`
- **DE (read-only):** müssen
- **CURRENT_ET:** müssen — vajadzēt aiz nepieciešamības vai pārliecības
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0113 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[1]`
- **DE (read-only):** sollen
- **CURRENT_ET:** sollen — vajadzēt pienākuma nozīmē
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0114 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].heading`
- **CURRENT_ET:** Mūsdienu rakstība
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0115 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[0]`
- **CURRENT_ET:** ä vārdos Äpfel un schälen izrunā kā šauro e.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0116 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[1]`
- **CURRENT_ET:** Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0117 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[2]`
- **CURRENT_ET:** Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0118 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[3]`
- **CURRENT_ET:** Vārdā gern e ir īss un plats.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0119 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[4]`
- **CURRENT_ET:** Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0120 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0121 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].heading`
- **CURRENT_ET:** Datīva -e
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0122 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[4].heading`
- **CURRENT_ET:** Sieviešu kārta datīvā
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0123 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[5].heading`
- **CURRENT_ET:** Nenoteiktais artikuls datīvā
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0124 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[6].heading`
- **CURRENT_ET:** Daudzskaitļa datīvs
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0125 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]`
- **DE (read-only):** Vārdos wem, dem, den, der
- **CURRENT_ET:** Vārdos wem, dem, den, der — Sõnades wem, dem, den, der on e pikk ja kitsas.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0126 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[1]`
- **DE (read-only):** Vārdā gehorchen h ir dzirdams: ge
- **CURRENT_ET:** Vārdā gehorchen h ir dzirdams: ge-hor-chen.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0127 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].title`
- **CURRENT_ET:** Vingrinājums
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0128 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0129 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].examples[0]`
- **DE (read-only):** Mit wem spricht der Bruder?
- **CURRENT_ET:** Mit wem spricht der Bruder? — Ar ko runā brālis?
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0130 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].examples[1]`
- **DE (read-only):** Womit gräbt der Knabe die Grube?
- **CURRENT_ET:** Womit gräbt der Knabe die Grube? — Ar ko zēns rok bedri?
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0131 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].heading`
- **CURRENT_ET:** Atdalāmie priedēkļi
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0132 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].examples[0]`
- **DE (read-only):** fegen
- **CURRENT_ET:** fegen — slaucīt ar slotu
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0133 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].examples[2]`
- **DE (read-only):** wischen / abwischen
- **CURRENT_ET:** wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0134 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[3].items[0]`
- **CURRENT_ET:** Vārdā werfen pirmais e ir plats: werfen.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0135 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[3].items[1]`
- **CURRENT_ET:** Vārdā wieder e ir plats: wieder.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0136 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[3].items[2]`
- **CURRENT_ET:** Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0137 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[3].items[3]`
- **CURRENT_ET:** Vārdā der Spaten sp izrunā kā šp: der Spaten.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0138 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[4].title`
- **CURRENT_ET:** Vingrinājums
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0139 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].title`
- **CURRENT_ET:** Pārtulko
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0140 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].heading`
- **CURRENT_ET:** Darbības vārdi ar wohin?
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0141 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[1]`
- **DE (read-only):** kommen
- **CURRENT_ET:** kommen — nākt
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0142 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[5]`
- **DE (read-only):** springen
- **CURRENT_ET:** springen — lēkt
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0143 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[6]`
- **DE (read-only):** kriechen
- **CURRENT_ET:** kriechen — rāpot
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0144 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[7]`
- **DE (read-only):** schleichen
- **CURRENT_ET:** schleichen — līst
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0145 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[8]`
- **DE (read-only):** hängen
- **CURRENT_ET:** hängen — kārt
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0146 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[9]`
- **DE (read-only):** sich setzen
- **CURRENT_ET:** sich setzen — apsēsties
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0147 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[10]`
- **DE (read-only):** sich stellen
- **CURRENT_ET:** sich stellen — nostāties
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0148 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].examples[12]`
- **DE (read-only):** reiten
- **CURRENT_ET:** reiten — jāt
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0149 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].heading`
- **CURRENT_ET:** Darbības vārdi ar wo?
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

### ET-KURSS-0150 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson18`
- **Path:** `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].examples[0]`
- **DE (read-only):** sein
- **CURRENT_ET:** sein — būt
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ET:** (OWNER: Estonian replacement per DE/LV meaning)
- **Root cause:** GENUINELY_NEW_VALIDATED_REAL_FINDING
- **Avots:** deterministic

_… and 173 more in JSON._
