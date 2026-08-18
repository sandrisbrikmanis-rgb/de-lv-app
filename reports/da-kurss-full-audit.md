# DA–DE Kurss — pilns lingvistiskais audits (READ-ONLY)

Audita datums: 2026-08-18
Auditors: deterministiskā pārbaude + GPT-5.6 Luna

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| DA lauki (coverage) | **1266** |
| Lekcijas | **21** |
| Extra HTML topics | **6** |
| UI kurss atslēgas | **96** |
| CRITICAL | **32** |
| HIGH | **51** |
| MEDIUM | **33** |
| LOW | **5** |
| Kopā findings | **121** |
| Luna batches | **26** (1266 fields) |
| Luna loaded | **26/26** |
| Production changes | **0** |

> **PROPOSED_DA** nav automātiski OWNER apstiprināts labojums.

## COVERAGE

| Avots | Lauki |
|---|---|
| lesson | 1061 |
| html | 6 |
| training | 103 |
| ui | 96 |

## TECHNICAL GATES

| Gate | Result |
|---|---|
| Syntax (courseLessons) | **PASS** |
| validate-kurss.js | **PASS** |
| Structure vs LV MASTER | **FAIL** (14 issues) |
| Mirror data↔www | **PASS** |
| DE baseline changes | **2** (note) |
| Luna coverage | **PASS** |

## Verdict

**NEEDS OWNER REVIEW** — atlikuši validated findings.

## Findings

### DA-KURSS-STR-lesson7ExerciseCardsDa[0].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[0].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[1].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[1].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[2].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[2].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[3].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[3].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[5].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[5].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[6].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[6].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[7].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[7].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[8].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[8].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[9].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[9].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[10].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[10].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[11].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[11].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[13].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[13].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[14].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[14].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-STR-lesson7ExerciseCardsDa[15].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[15].lv`
- **DA_CURRENT:** missing
- **Problem:** Missing DA native field on exercise card
- **PROPOSED_DA:** (align with LV MASTER structure)
- **Avots:** structure

### DA-KURSS-0001 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0002 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic
- **Problem:** Foreign/script: LV_DIAC, LV_WORD, EN
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0003 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 3</h3> <p class="kurss-lesson-intro">Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0004 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0005 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 5</h3> <p class="kurss-lesson-intro">Wen?, akkusativ, sitzen, fragen og -in endelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"> <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div> <div class="kurss-example">Wer steht und antwortet? Der Schüler st
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0006 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 6</h3> <p class="kurss-lesson-intro">Tal, flertal, omlyd og flertalsformer af substantiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0007 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- **DA_CURRENT:** <h3>Lektion 7</h3><p class="kurss-lesson-intro">Syvende lektion: imperativ, tiltaleform og flertal.</p><details class="lesson1-accordion" open><summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Was tust du?
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0008 [MEDIUM] FOREIGN_REMNANT

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** <h3>Artikler</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Det grammatiske køn på tysk svarer ikke altid til det grammatiske køn på dansk. Derfor er det bedst at lære substantiver sammen med deres artikel.</div> </div> <section class="artikuli-block"> <h4 class="artikuli-header"><span>•</span>Eksempler på artikler</h4> <div class="artikuli-grid"> <div class="kurss-example">Der Tisch - bord</div> <div class="kurss-example">Die Tür - døren</div
- **Problem:** Foreign/script: ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0009 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">warm (varm) - varm</div><div class="kurss-example">Tarm (få) - godt</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><di
- **Problem:** Foreign/script: LV_DIAC, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0010 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for begynderen.</p> <section class="kurss-lesson-section"> <h4>Konsonanter</h4> <div class="kurss-examples"><div class="kurss-example">Das Rad (rāt) - hjul</div><div class="kurss-example">Die Räder (rēder) - hjul</div><div class="kurss-example">Dårlig (bāt) - dårlig</div><div class="kur
- **Problem:** Foreign/script: LV_DIAC, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-L0001 [MEDIUM] REGISTER

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 1</h3>
- **Problem:** »Foredrag« er en unaturlig og inkonsekvent betegnelse for en lektion i kursusindholdet.
- **PROPOSED_DA:** <h3>Lektion 1</h3>
- **Avots:** luna

### DA-KURSS-L0002 [HIGH] GRAMMAR

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <span>De / Du kommer</span>
- **Problem:** »Du« er forkert her; tysk »Sie« oversættes til formelt »De«, mens »sie« kan oversættes til »de«.
- **PROPOSED_DA:** <span>De / de kommer</span>
- **Avots:** luna

### DA-KURSS-L0003 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <span>Tu nāc.<br>Vai tu nāc?</span>
- **Problem:** Latvisk tekst står uforklaret i den danske grammatiksektion og bør erstattes med dansk.
- **PROPOSED_DA:** <span>Du kommer.<br>Kommer du?</span>
- **Avots:** luna

### DA-KURSS-L0004 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <strong>remove <span class="lesson1-ending-accent">-da</span></strong>
- **Problem:** Engelsk »remove« og fejlagtigt »-da« er rester/fejl; den tyske infinitivendelse er »-en«.
- **PROPOSED_DA:** <strong>fjern <span class="lesson1-ending-accent">-en</span></strong>
- **Avots:** luna

### DA-KURSS-L0005 [HIGH] TRANSLATION

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <div>er / sie → -Er kommer</div>
- **Problem:** Eksemplet blander tysk pronomen med dansk bøjning og har et fejlagtigt stort begyndelsesbogstav efter pilen.
- **PROPOSED_DA:** <div>er / sie → Han/hun kommer</div>
- **Avots:** luna

### DA-KURSS-L0006 [PASS] TRANSLATION

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.title`
- **DA_CURRENT:** Lektion 2
- **Problem:** Korrekt dansk titel.
- **PROPOSED_DA:** Lektion 2
- **Avots:** luna

### DA-KURSS-L0007 [PASS] TRANSLATION

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.subtitle`
- **DA_CURRENT:** Dialoger, ord, udtale, grammatik og oversættelse
- **Problem:** Korrekt og naturlig dansk formulering.
- **PROPOSED_DA:** Dialoger, ord, udtale, grammatik og oversættelse
- **Avots:** luna

### DA-KURSS-L0008 [CRITICAL] SEMANTICS

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">fragen — hvad gør de/de?</div>
- **Problem:** Ordlisteposten har forkert dansk betydning og mangler den korrekte oversættelse af »rechnen«; flere poster er forskudt.
- **PROPOSED_DA:** <div class="kurss-example">rechnen — at regne</div>
- **Avots:** luna

### DA-KURSS-L0009 [CRITICAL] SEMANTICS

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">was tut er? — svar</div>
- **Problem:** »was tut er?« er oversat til »svar«, og flere efterfølgende opslag indeholder forkerte forskydninger.
- **PROPOSED_DA:** <div class="kurss-example">antworten — at svare</div>
- **Avots:** luna

### DA-KURSS-L0010 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.</div>
- **Problem:** Latvisk tekst står uforklaret i den danske grammatiksektion.
- **PROPOSED_DA:** <div class="kurss-example">I ordene arbeiten og zeichnen udtales diftongen ei omtrent som dansk aj.</div>
- **Avots:** luna

### DA-KURSS-L0011 [PASS] TRANSLATION

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.title`
- **DA_CURRENT:** Lektion 3
- **Problem:** Korrekt dansk titel.
- **PROPOSED_DA:** Lektion 3
- **Avots:** luna

### DA-KURSS-L0012 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.subtitle`
- **DA_CURRENT:** Artikler, pronominer og oversættelse
- **Problem:** Undertitlen stemmer ikke med lektionens indhold, som også omfatter dialoger, ord, udtale og grammatik.
- **PROPOSED_DA:** Dialoger, ord, udtale, grammatik og oversættelse
- **Avots:** luna

### DA-KURSS-L0013 [CRITICAL] SEMANTICS

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">wer — her</div>
- **Problem:** Ordlisteposten »wer — her« er forkert; »wer« betyder »hvem«, mens »hier« betyder »her«. Flere poster er forskudt.
- **PROPOSED_DA:** <div class="kurss-example">hier — her</div>
- **Avots:** luna

### DA-KURSS-L0014 [CRITICAL] SEMANTICS

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">die Bank — ligge ned</div>
- **Problem:** »die Bank« er oversat med et verbum i stedet for substantivet »bænk«; resten af ordlisten er tilsvarende forskudt.
- **PROPOSED_DA:** <div class="kurss-example">die Bank — bænk</div>
- **Avots:** luna

### DA-KURSS-L0015 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Ja galotne -Er hvad? spørger om emner.</div>
- **Problem:** Sætningen indeholder lettisk tekst og et uforståeligt dansk fragment.
- **PROPOSED_DA:** <div class="kurss-example">Med was? spørger man om genstande.</div>
- **Avots:** luna

### DA-KURSS-L0016 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).</div>
- **Problem:** Latvisk tekst står uforklaret i den danske udtalesektion.
- **PROPOSED_DA:** <div class="kurss-example">Den lange i-lyd på tysk skrives ie: liegen (līgen), hier (hīr), wie (vī).</div>
- **Avots:** luna

### DA-KURSS-L0017 [PASS] TRANSLATION

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.title`
- **DA_CURRENT:** Lektion 4
- **Problem:** Korrekt dansk titel.
- **PROPOSED_DA:** Lektion 4
- **Avots:** luna

### DA-KURSS-L0018 [PASS] TRANSLATION

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.subtitle`
- **DA_CURRENT:** Genstande i klasseværelset, egenskaber og oversættelse
- **Problem:** Korrekt og naturlig dansk formulering.
- **PROPOSED_DA:** Genstande i klasseværelset, egenskaber og oversættelse
- **Avots:** luna

### DA-KURSS-L0019 [CRITICAL] SEMANTICS

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">er nimmt (nimt) — fjerklædt</div>
- **Problem:** »er nimmt« er fejlagtigt oversat til »fjerklædt«; flere efterfølgende opslag er forskudt og har forkerte betydninger.
- **PROPOSED_DA:** <div class="kurss-example">er nimmt (nimt) — han tager</div>
- **Avots:** luna

### DA-KURSS-L0020 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).</div>
- **Problem:** Latvisk tekst står uforklaret i den danske grammatiksektion.
- **PROPOSED_DA:** <div class="kurss-example">Hvis h er en længdemarkør, udtales det ikke som en lyd: nehmen (nēmen).</div>
- **Avots:** luna

### DA-KURSS-L0021 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Pigen tager et fjerskaft.</div>
- **Problem:** »Federhalter« betyder »penneholder«; »fjerskaft« er en misvisende og unaturlig oversættelse.
- **PROPOSED_DA:** <div class="kurss-example">Pigen tager en penneholder.</div>
- **Avots:** luna

### DA-KURSS-L0022 [PASS] TRANSLATION

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.title`
- **DA_CURRENT:** Lektion 5
- **Problem:** Korrekt dansk titel.
- **PROPOSED_DA:** Lektion 5
- **Avots:** luna

### DA-KURSS-L0023 [PASS] TRANSLATION

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.subtitle`
- **DA_CURRENT:** Wen?, akkusativ, sitzen, fragen og endelsen -in.
- **Problem:** Korrekt dansk formulering med relevante tyske grammatiktermer.
- **PROPOSED_DA:** Wen?, akkusativ, sitzen, fragen og endelsen -in.
- **Avots:** luna

### DA-KURSS-L0024 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Daudz sieviešu kārtas vārdu atvasina ar galotni -Dø Lehrerin</div>
- **Problem:** Latvisk tekst, en ødelagt endelse og manglende dansk oversættelse forekommer i grammatiksektionen.
- **PROPOSED_DA:** <div class="kurss-example">Mange ord for personer af hunkøn dannes med endelsen -in: die Lehrerin.</div>
- **Avots:** luna

### DA-KURSS-L0025 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).</div>
- **Problem:** Latvisk tekst står uforklaret i den danske udtalesektion.
- **PROPOSED_DA:** <div class="kurss-example">tz er et dobbelt z, som udtales som z: sitzen (zicen).</div>
- **Avots:** luna

### DA-KURSS-L0026 [PASS] TRANSLATION

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.title`
- **DA_CURRENT:** Lektion 6
- **Problem:** Korrekt dansk titel.
- **PROPOSED_DA:** Lektion 6
- **Avots:** luna

### DA-KURSS-L0027 [PASS] TRANSLATION

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.subtitle`
- **DA_CURRENT:** Tal, flertal, omlyd og flertalsformer af substantiver
- **Problem:** Undertitlen er korrekt dansk og stemmer med lektionens danske indhold.
- **PROPOSED_DA:** Tal, flertal, omlyd og flertalsformer af substantiver
- **Avots:** luna

### DA-KURSS-L0028 [HIGH] SEMANTICS

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">liegt — er, er, ligger</div>
- **Problem:** Ordlisteposten indeholder gentagelser og et fejlagtigt dansk fragment.
- **PROPOSED_DA:** <div class="kurss-example">liegt — ligger</div>
- **Avots:** luna

### DA-KURSS-L0029 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Piemēri: fünf, der Schlüssel (šlūsel).</div>
- **Problem:** Latvisk tekst forekommer i den danske grammatiksektion; mange efterfølgende forklaringer er også på lettisk.
- **PROPOSED_DA:** <div class="kurss-example">Eksempler: fünf, der Schlüssel (šlūsel).</div>
- **Avots:** luna

### DA-KURSS-L0030 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (mødre) • Die Tochter (datter) — die Töchter (døtre).</div>
- **Problem:** Sætningen er en blanding af lettisk og dansk og mangler en grammatisk sammenhængende forklaring.
- **PROPOSED_DA:** <div class="kurss-example">Substantiver af hankøn og intetkøn med endelserne -er, -el og -en får ofte ingen ny endelse i flertal.</div>
- **Avots:** luna

### DA-KURSS-L0031 [PASS] TRANSLATION

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.title`
- **DA_CURRENT:** Lektion 7
- **Problem:** Korrekt dansk titel.
- **PROPOSED_DA:** Lektion 7
- **Avots:** luna

### DA-KURSS-L0032 [PASS] TRANSLATION

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.subtitle`
- **DA_CURRENT:** Imperativ, tiltaleform og flertal.
- **Problem:** Korrekt og naturlig dansk formulering.
- **PROPOSED_DA:** Imperativ, tiltaleform og flertal.
- **Avots:** luna

### DA-KURSS-L0033 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- **DA_CURRENT:** <div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div>
- **Problem:** Dialogen bruger både »Was machst du?« og »Was tust du?« for samme tyske kursusmønster; standardisér til »Was tust du?«.
- **PROPOSED_DA:** <div class="kurss-example">Hans, singe ein Lied! Was tust du? Ich singe ein Lied.</div>
- **Avots:** luna

### DA-KURSS-L0034 [PASS] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.title`
- **DA_CURRENT:** Lektion 8
- **Problem:** Korrekt dansk titel.
- **PROPOSED_DA:** Lektion 8
- **Avots:** luna

### DA-KURSS-L0035 [PASS] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.subtitle`
- **DA_CURRENT:** Refleksive verber, e → i/ie-ændring og akkusativ
- **Problem:** Korrekt dansk formulering.
- **PROPOSED_DA:** Refleksive verber, e → i/ie-ændring og akkusativ
- **Avots:** luna

### DA-KURSS-L0036 [HIGH] SEMANTICS

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[8]`
- **DA_CURRENT:** På dansk har refleksive verber ikke en særlig bøjning. På tysk bøjes de som andre verber, men med det refleksive pronomen sich.
- **Problem:** Teksten siger fejlagtigt »På dansk«, selv om afsnittet sammenligner lettisk med tysk.
- **PROPOSED_DA:** På lettisk har refleksive verber en særlig bøjning. På tysk bøjes de som andre verber, men med det refleksive pronomen sich.
- **Avots:** luna

### DA-KURSS-L0037 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[23].lv`
- **DE_CURRENT:** Nein, ich habe das Fenster nicht geöffnet.
- **DA_CURRENT:** Nej, jeg åbnede ikke vinduet.
- **Problem:** Den tyske perfektum er oversat med dansk præteritum; det bør være perfektum for at bevare øvelsens tempus.
- **PROPOSED_DA:** Nej, jeg har ikke åbnet vinduet.
- **Avots:** luna

### DA-KURSS-L0038 [LOW] CONSISTENCY

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[27].lv`
- **DE_CURRENT:** Sprich nicht leise!
- **DA_CURRENT:** Tal ikke stille!
- **Problem:** Samme tyske sætning er oversat som »Tal ikke lavt!« andetsteds; den formulering er også mere idiomatisk og konsekvent.
- **PROPOSED_DA:** Tal ikke lavt!
- **Avots:** luna

### DA-KURSS-L0039 [LOW] CONSISTENCY

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[33].lv`
- **DE_CURRENT:** Sprich nicht leise!
- **DA_CURRENT:** Tal ikke stille!
- **Problem:** Samme tyske sætning er oversat som »Tal ikke lavt!« andetsteds; den formulering er også mere idiomatisk og konsekvent.
- **PROPOSED_DA:** Tal ikke lavt!
- **Avots:** luna

### DA-KURSS-L0040 [MEDIUM] NATURALNESS

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.intro`
- **DA_CURRENT:** Elvte forelæsning: haben, negation med kein, besiddelse, sammensatte navneord og ordstilling med denn.
- **Problem:** "Forelæsning" betyder lecture og er ikke den naturlige betegnelse for en sprogkursuslektion her.
- **PROPOSED_DA:** Elvte lektion: haben, negation med kein, besiddelse, sammensatte navneord og ordstilling med denn.
- **Avots:** luna

### DA-KURSS-L0041 [HIGH] SEMANTICS

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[22]`
- **DE_CURRENT:** die Stühle
- **DA_CURRENT:** die Stühle — stolene
- **Problem:** Den tyske flertalsform er ubestemt i betydningen "stole"; "stolene" er bestemt form og ændrer betydningen.
- **PROPOSED_DA:** die Stühle — stole
- **Avots:** luna

### DA-KURSS-L0042 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[0].text`
- **DA_CURRENT:** Hjælpeverbet haben på tysk udtrykker begrebet tilhørsforhold. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.
- **Problem:** I denne betydning er haben et verbum for at have noget, ikke et hjælpeverbum; "tilhørsforhold" er også upræcist.
- **PROPOSED_DA:** Verbet haben på tysk udtrykker, at man har noget. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.
- **Avots:** luna

### DA-KURSS-L0043 [MEDIUM] NAMES

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
- **DE_CURRENT:** Franz hat keine Feder und keinen Bleistift.
- **DA_CURRENT:** Frans har ingen pen og ingen blyant.
- **Problem:** Personnavnet bør bevare den tyske form Franz, som i den tyske kildetekst; Frans er en anden dansk navneform.
- **PROPOSED_DA:** Franz har ingen pen og ingen blyant.
- **Avots:** luna

### DA-KURSS-L0044 [MEDIUM] NAMES

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[17].lv`
- **DE_CURRENT:** Schreibt Franz auch?
- **DA_CURRENT:** Skriver Frans også?
- **Problem:** Personnavnet bør bevare den tyske form Franz, som i den tyske kildetekst; Frans er en anden dansk navneform.
- **PROPOSED_DA:** Skriver Franz også?
- **Avots:** luna

### DA-KURSS-L0045 [MEDIUM] NAMES

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[18].lv`
- **DE_CURRENT:** Nein, Franz schreibt nicht, er zeichnet.
- **DA_CURRENT:** Nej, Frans skriver ikke, han tegner.
- **Problem:** Personnavnet bør bevare den tyske form Franz, som i den tyske kildetekst; Frans er en anden dansk navneform.
- **PROPOSED_DA:** Nej, Franz skriver ikke, han tegner.
- **Avots:** luna

### DA-KURSS-L0046 [HIGH] NAMES

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].lv`
- **DE_CURRENT:** Er heißt Johann.
- **DA_CURRENT:** Han hedder Jan.
- **Problem:** Det danske navn Jan svarer ikke til navnet Johann i den tyske kildetekst.
- **PROPOSED_DA:** Han hedder Johann.
- **Avots:** luna

### DA-KURSS-L0047 [MEDIUM] NAMES

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv`
- **DE_CURRENT:** Franz ist am größten.
- **DA_CURRENT:** Frans er den største.
- **Problem:** Navnet Frans afviger fra Franz i den tyske kildetekst og bør bevares som samme personnavn.
- **PROPOSED_DA:** Franz er den største.
- **Avots:** luna

### DA-KURSS-L0048 [MEDIUM] NAMES

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[20].lv`
- **DE_CURRENT:** Sie heißen Elsa, Martha und Alma.
- **DA_CURRENT:** Deres navne er Elsa, Marta og Alma.
- **Problem:** Personnavnet bør følge den tyske kildetekst: Martha, ikke Marta.
- **PROPOSED_DA:** Deres navne er Elsa, Martha og Alma.
- **Avots:** luna

### DA-KURSS-L0049 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[21].lv`
- **DE_CURRENT:** Sie heben die Beine und die Arme.
- **DA_CURRENT:** De løfter deres ben og arme.
- **Problem:** De tyske bestemte artikler svarer her til dansk bestemt form; »deres« tilføjer en unødvendig possessiv betydning.
- **PROPOSED_DA:** De løfter benene og armene.
- **Avots:** luna

### DA-KURSS-L0050 [MEDIUM] NAMES

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
- **DE_CURRENT:** Nein, Robert und Johann turnen nicht.
- **DA_CURRENT:** Nej, Robert og Jan laver ikke gymnastik.
- **Problem:** Navnet »Jan« svarer ikke til navnet »Johann« i den tyske kildetekst; personnavnet bør være konsekvent.
- **PROPOSED_DA:** Nej, Robert og Johann laver ikke gymnastik.
- **Avots:** luna

### DA-KURSS-L0051 [MEDIUM] NAMES

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[30].lv`
- **DE_CURRENT:** Robert und Johann, turnt!
- **DA_CURRENT:** Robert og Jan, lav gymnastik!
- **Problem:** Det tyske Johann er gengivet som Jan. Personnavnet bør bevares i overensstemmelse med kildeteksten.
- **PROPOSED_DA:** Robert og Johann, lav gymnastik!
- **Avots:** luna

### DA-KURSS-L0052 [LOW] GRAMMAR

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[7]`
- **DE_CURRENT:** dürfen
- **DA_CURRENT:** dürfen — at måtte / have lov til
- **Problem:** Den anden danske infinitiv mangler infinitivmarkøren "at"; parallelformen bør være "at have lov til".
- **PROPOSED_DA:** dürfen — at måtte / at have lov til
- **Avots:** luna

### DA-KURSS-L0053 [NEEDS_SOURCE_REVIEW] SEMANTICS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].text`
- **DA_CURRENT:** Ord, der ofte bruges uden artikel: die Milch, das Brot.
- **Problem:** Teksten siger, at ordene bruges uden artikel, men eksemplerne indeholder die/das. Det kræver afklaring af den tilsigtede regel.
- **PROPOSED_DA:** Ord, der ofte bruges med artikel: die Milch, das Brot.
- **Avots:** luna

### DA-KURSS-L0054 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson19`
- **Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[1]`
- **DA_CURRENT:** I ordet hinter udtales h, og e er åbent.
- **Problem:** Hinter indeholder i, ikke e. Desuden er den tyske vokal en kort i-lyd.
- **PROPOSED_DA:** I ordet hinter udtales i som en kort i-lyd.
- **Avots:** luna

### DA-KURSS-L0055 [MEDIUM] TRANSLATION

- **Lesson/ID:** ``
- **Path:** ``
- **DA_CURRENT:** 
- **Problem:** Danish loftet means attic/ceiling, while German Boden means floor. The German source conflicts with the Latvian reference and likely needs review.
- **Avots:** luna

### DA-KURSS-L0056 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** Bilmærker → egnet til BMW, egnet til Mercedes
- **Problem:** Teksten er grammatisk og semantisk forkert; 'egnet til' betyder suitable for og gengiver ikke artikellisten.
- **PROPOSED_DA:** Bilmærker → BMW, Mercedes
- **Avots:** luna

### DA-KURSS-L0057 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** Passer mandag - mandag
- **Problem:** Dette eksempel er blevet forvansket og mangler den tyske artikel og det tyske ord.
- **PROPOSED_DA:** Der Montag - mandag
- **Avots:** luna

### DA-KURSS-L0058 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** Passer til august - august
- **Problem:** Eksemplet er ikke en dansk oversættelse af artikel- og ordparret.
- **PROPOSED_DA:** Der August - august
- **Avots:** luna

### DA-KURSS-L0059 [LOW] ORTHOGRAPHY

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** Das Lernen - Læring
- **Problem:** Danske navneord skrives ikke med stort begyndelsesbogstav.
- **PROPOSED_DA:** Das Lernen - læring
- **Avots:** luna

### DA-KURSS-L0061 [HIGH] SEMANTICS

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
- **DA_CURRENT:** Euch - dig
- **Problem:** Euch er 2. person flertal i akkusativ og betyder jer, ikke dig.
- **PROPOSED_DA:** Euch - jer
- **Avots:** luna

### DA-KURSS-L0062 [HIGH] SEMANTICS

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
- **DA_CURRENT:** Sie - Dig (høflighed)
- **Problem:** Den høflige akkusativform Sie oversættes til Dem, ikke Dig.
- **PROPOSED_DA:** Sie - Dem (høflighed)
- **Avots:** luna

### DA-KURSS-L0064 [HIGH] SEMANTICS

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
- **DA_CURRENT:** Ihnen - til dig (høflighed)
- **Problem:** Den høflige dativform Ihnen skal oversættes til Dem.
- **PROPOSED_DA:** Ihnen - til Dem (høflighed)
- **Avots:** luna

### DA-KURSS-L0065 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
- **DA_CURRENT:** Ich gebe Ihm ein Buch. — I give him the book.
- **Problem:** Den engelske sætning er en fremmedsprogsrest i danskfeltet.
- **PROPOSED_DA:** Ich gebe Ihm ein Buch. — Jeg giver ham bogen.
- **Avots:** luna

### DA-KURSS-L0066 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Tarm (få) - godt
- **Problem:** Det tyske eksempel er erstattet af det danske ord 'Tarm', og oversættelsen 'godt' har forkert køn/form.
- **PROPOSED_DA:** gut (gūt) - god
- **Avots:** luna

### DA-KURSS-L0067 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Flur (flūr) - bande
- **Problem:** Flur betyder gang eller entré, ikke bande.
- **PROPOSED_DA:** Flur (flūr) - gang
- **Avots:** luna

### DA-KURSS-L0068 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Skaldet (balt) - snart
- **Problem:** Det danske ord 'Skaldet' står fejlagtigt som det tyske eksempel bald.
- **PROPOSED_DA:** bald (balt) - snart
- **Avots:** luna

### DA-KURSS-L0069 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Have (have) - have
- **Problem:** Garten er erstattet af det danske ord 'Have'; den tyske eksempeltekst mangler.
- **PROPOSED_DA:** Garten (garten) - have
- **Avots:** luna

### DA-KURSS-L0070 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Grime (grime) - holder
- **Problem:** Det tyske ord Halter er fejlagtigt erstattet af det danske ord 'Grime'.
- **PROPOSED_DA:** Halter (halter) - holder
- **Avots:** luna

### DA-KURSS-L0071 [HIGH] ORTHOGRAPHY

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Breiter (lysere) - bredere
- **Problem:** Udtaleangivelsen og betydningen er blandet sammen; breiter betyder bredere og udtales braiter.
- **PROPOSED_DA:** breiter (braiter) - bredere
- **Avots:** luna

### DA-KURSS-L0072 [HIGH] SEMANTICS

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Ihn (īn) - hans
- **Problem:** ihn er akkusativ af han og betyder ham, ikke hans.
- **PROPOSED_DA:** ihn (īn) - ham
- **Avots:** luna

### DA-KURSS-L0073 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Dø (dī) - artiklen "dø"
- **Problem:** Det tyske ord die er fejlagtigt oversat/transskriberet som det danske ord 'Dø'.
- **PROPOSED_DA:** die (dī) - artiklen "die"
- **Avots:** luna

### DA-KURSS-L0074 [HIGH] SEMANTICS

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Hier (hīr) - hende
- **Problem:** hier er et stedadverbium og betyder her, ikke hende.
- **PROPOSED_DA:** hier (hīr) - her
- **Avots:** luna

### DA-KURSS-L0075 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Se (se) - sø / hav
- **Problem:** Det tyske ord See er fejlagtigt erstattet af det danske ord 'Se'.
- **PROPOSED_DA:** See (zē) - sø / hav
- **Avots:** luna

### DA-KURSS-L0076 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Roer (bēt) - seng
- **Problem:** Beet er fejlagtigt erstattet af det danske ord 'Roer'; betydningen er også forkert.
- **PROPOSED_DA:** Beet (bēt) - bed
- **Avots:** luna

### DA-KURSS-L0077 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Støvle (bōt) - båd
- **Problem:** Det tyske ord Boot er fejlagtigt erstattet af det danske ord 'Støvle'.
- **PROPOSED_DA:** Boot (bōt) - båd
- **Avots:** luna

### DA-KURSS-L0078 [HIGH] SEMANTICS

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Vater (fäter) - langt
- **Problem:** Vater betyder far; 'langt' er en forkert oversættelse.
- **PROPOSED_DA:** Vater (fāter) - far
- **Avots:** luna

### DA-KURSS-L0079 [HIGH] ORTHOGRAPHY

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Tal (fjern) - dal
- **Problem:** Udtaleangivelsen 'fjern' er forkert og er ikke en dansk lydgengivelse af Tal.
- **PROPOSED_DA:** Tal (tāl) - dal
- **Avots:** luna

### DA-KURSS-L0080 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Ä er en tuning af en.
- **Problem:** 'Tuning' er en fejloversættelse og uidiomatisk dansk; LV-kilden beskriver umlaut/omlyd af a.
- **PROPOSED_DA:** Ä er en omlyd af a.
- **Avots:** luna

### DA-KURSS-L0081 [MEDIUM] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Ö er en transponering af o.
- **Problem:** 'Transponering' er ikke den korrekte danske grammatiske term i denne forklaring.
- **PROPOSED_DA:** Ö er en omlyd af o.
- **Avots:** luna

### DA-KURSS-L0082 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Mumler (muter) - mor
- **Problem:** Det tyske ord Mutter er fejlagtigt erstattet af det danske ord 'Mumler'.
- **PROPOSED_DA:** Mutter (muter) - mor
- **Avots:** luna

### DA-KURSS-L0083 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Dip lyde: äu
- **Problem:** Overskriften 'Dip lyde' er en fejloversættelse af diftonger.
- **PROPOSED_DA:** Diftong: äu
- **Avots:** luna

### DA-KURSS-L0084 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Diplomatik: ei
- **Problem:** 'Diplomatik' er en meningsløs fejloversættelse; afsnittet handler om diftongen ei.
- **PROPOSED_DA:** Diftong: ei
- **Avots:** luna

### DA-KURSS-L0085 [HIGH] SEMANTICS

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** Dvs ofte betyder lang i
- **Problem:** Opsummeringen er ufuldstændig og indeholder en klar skrivefejl: Dvs i stedet for ie.
- **PROPOSED_DA:** ie betyder ofte langt i
- **Avots:** luna

### DA-KURSS-L0086 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** Dårlig (bāt) - dårlig
- **Problem:** Det tyske eksempel Bad er fejlagtigt erstattet af dansk 'Dårlig', og betydningen er forkert.
- **PROPOSED_DA:** Bad (bāt) - badekar
- **Avots:** luna

### DA-KURSS-L0087 [HIGH] SEMANTICS

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** Bäder (bäder) - bade
- **Problem:** Bäder betyder badekar i flertal, ikke det uklare 'bade'; udtalen er også fejlbehæftet.
- **PROPOSED_DA:** Bäder (bēder) - badekar
- **Avots:** luna

### DA-KURSS-L0088 [HIGH] ORTHOGRAPHY

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** Noch (nej) - stadig
- **Problem:** Udtaleangivelsen 'nej' er forkert for noch.
- **PROPOSED_DA:** noch (noh) - stadig
- **Avots:** luna

### DA-KURSS-L0089 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** Stald (štal) - stald
- **Problem:** Det tyske ord Stall er fejlagtigt erstattet af det danske ord 'Stald'.
- **PROPOSED_DA:** Stall (štal) - stald
- **Avots:** luna

### DA-KURSS-L0090 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** Stå (štant) - stilling / sted
- **Problem:** Det tyske ord Stand er fejlagtigt erstattet af det danske infinitivverbum 'Stå'.
- **PROPOSED_DA:** Stand (štant) - stilling / sted
- **Avots:** luna

### DA-KURSS-L0091 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** Synge (zingen) - at synge
- **Problem:** Det tyske eksempel singen er fejlagtigt erstattet af det danske ord 'Synge'.
- **PROPOSED_DA:** singen (zingen) - at synge
- **Avots:** luna

### DA-KURSS-L0092 [HIGH] ORTHOGRAPHY

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** Zink (zink) - zink
- **Problem:** Tysk z udtales som dansk c i denne transskriptionskonvention; den nuværende form er inkonsistent.
- **PROPOSED_DA:** Zink (cink) - zink
- **Avots:** luna

### DA-KURSS-L0093 [HIGH] ORTHOGRAPHY

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** Mythe (mund) - myte
- **Problem:** Udtalen 'mund' er forkert og ligner en dansk rest; den angivne lyd skal være mūte.
- **PROPOSED_DA:** Mythe (mūte) - myte
- **Avots:** luna

### DA-KURSS-L0094 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
- **DA_CURRENT:** Was tust du? — Was machst du?
- **Problem:** Den danske oversættelse mangler, og den tyske kildesætning er gentaget som dansk indhold.
- **PROPOSED_DA:** Was tust du? — Hvad laver du?
- **Avots:** luna

### DA-KURSS-L0095 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
- **DA_CURRENT:** Ich spiele nicht. — Paul spørger ikke.
- **Problem:** Den tyske sætning og den danske oversættelse hører ikke sammen; Ich spiele nicht betyder Jeg spiller ikke.
- **PROPOSED_DA:** Paul fragt nicht. — Paul spørger ikke.
- **Avots:** luna

### DA-KURSS-L0096 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
- **DA_CURRENT:** Paul fragt nicht. — Han kommer ikke.
- **Problem:** Paul fragt nicht betyder Paul spørger ikke; oversættelsen passer til den efterfølgende tyske sætning.
- **PROPOSED_DA:** Er kommt nicht. — Han kommer ikke.
- **Avots:** luna

### DA-KURSS-L0097 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
- **DA_CURRENT:** Er kommt nicht. — De/de synger ikke.
- **Problem:** Den danske oversættelse passer ikke til Er kommt nicht og indeholder desuden ukorrekt 'de/de'.
- **PROPOSED_DA:** Sie singen nicht. — De synger ikke.
- **Avots:** luna

### DA-KURSS-L0098 [HIGH] STRUCTURE

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
- **DA_CURRENT:** De kommer, spørger, svarer, arbejder, leger, synger og går.
- **Problem:** Den sidste danske oversættelse mangler helt efter den tyske sætning Sie kommen ...
- **PROPOSED_DA:** De kommer, spørger, svarer, arbejder, leger, synger og går.
- **Avots:** luna

### DA-KURSS-L0099 [LOW] ORTHOGRAPHY

- **Lesson/ID:** `ui`
- **Path:** `LANGUAGE_UI_STRINGS.kurss.lessonItems.7.menuDesc`
- **DA_CURRENT:** imperativ, tiltaleform og flertal.
- **Problem:** Teksten begynder med et egennavnslignende fagudtryk, men står med lille begyndelsesbogstav.
- **PROPOSED_DA:** Imperativ, tiltaleform og flertal.
- **Avots:** luna
