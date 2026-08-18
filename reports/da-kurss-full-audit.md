# DA–DE Kurss — pilns lingvistiskais audits (READ-ONLY)

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.1**  
**STAGE:** FULL READ-ONLY AUDIT (Kurss dataset)  
**MAIN_BASE_SHA:** `bd02b6f7`  
**WORK_BRANCH:** `cursor/da-kurss-master-v11-audit-fffe`  
**DE:** STRICT READ-ONLY · **LV Kurss:** MASTER (structure only)

Audita datums: 2026-08-18  
Auditors: deterministiskā pārbaude (§7.7) + GPT-5.6 Luna (§7.8)  
Production changes: **0**

## MASTER v1.1 audit phases

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | Struktūra / mirror / syntax / validate-kurss | **DONE** |
| 2–6 | Kurss 21 lekcijas + 6 HTML + training + UI (1264 lauki) | **DONE** (Luna 26/26 batches) |
| 7 | Vizuālā/ekrānuzņēmumu salīdzinājums | **NOT RUN** (manuāls — ārpus šī run) |
| 8 | Native speaker izlase (~5%, min 30) | **NOT RUN** (cilvēka QA — ārpus šī run) |

## MASTER v1.1 quality gates (Kurss scope)

| Gate | MASTER | Result |
|------|--------|--------|
| Syntax `node --check` | §6.1 | **PASS** |
| validate-kurss.js `--lang=da` | §7.7 | **PASS** |
| audit-mojibake.js `--lang=da` | §7.7 | **PASS** (0 hits) |
| Mirror data↔www | §6.1 | **PASS** |
| DE baseline diff | §1.2 | **0** (PASS) |
| registry.js `dataStatus`/`hasStudyData` | §7.12 | **PASS** (`complete` / `true`) |
| Browser console / smoke-test-ui | §6.1, §7.9 | **NOT RUN** |
| Luna linguistic audit | §7.8 | **PASS** (26/26 batches loaded) |

> **Automātiskie skripti nav OWNER lēmums** (MASTER §7.3). Findings ar avotu `deterministic`/`structure` ietver zināmus false-positive riskus (DE dialogi legacyHtml, udtale macron `(rāt)`, lesson7 imperative kartes bez `.lv` — skat. OWNER review).

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| DA lauki (coverage) | **1264** |
| Lekcijas | **21** |
| Extra HTML topics | **6** |
| UI kurss atslēgas | **96** |
| CRITICAL | **17** |
| HIGH | **52** |
| MEDIUM | **21** |
| LOW | **5** |
| Kopā findings | **95** |
| Luna batches | **26** (1264 fields) |
| Luna loaded | **26/26** |
| Production changes | **0** |

> **PROPOSED_DA** nav automātiski OWNER apstiprināts labojums.

## COVERAGE

| Avots | Lauki |
|---|---|
| lesson | 1061 |
| html | 6 |
| training | 101 |
| ui | 96 |

## TECHNICAL GATES

| Gate | Result |
|---|---|
| Syntax (courseLessons) | **PASS** |
| validate-kurss.js | **PASS** |
| Structure vs LV MASTER | **FAIL** (16 issues) |
| Mirror data↔www | **PASS** |
| DE baseline changes | **0** (PASS) |
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

### DA-KURSS-STR-lesson7ExerciseCardsDa[4].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[4].lv`
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

### DA-KURSS-STR-lesson7ExerciseCardsDa[12].lv [HIGH] STRUCTURE

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[12].lv`
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
- **DA_CURRENT:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">Tarm (få) - godt</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><di
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

### DA-KURSS-L0001 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 1</h3> …
- **Problem:** Feltet indeholder lettiske rester som “Vārdu pareiza izruna…” samt den fejlbehæftede tekst “remove -da”.
- **PROPOSED_DA:** Dette bør også følges i fremtidige forelæsninger.
- **Avots:** luna

### DA-KURSS-L0002 [HIGH] TRANSLATION

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 2</h3> …
- **Problem:** Ordlisten indeholder flere forkerte eller meningsløse oversættelser, bl.a. “fragen — hvad gør de?” og “antworten — Marie”.
- **PROPOSED_DA:** Was tun sie? — hvad gør de?
- **Avots:** luna

### DA-KURSS-L0003 [HIGH] TECHNICAL

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** [Hvem spørger?]{.lesson1-training-text}
- **Problem:** Markdown-attributsyntaks er indlejret i HTML og kan blive vist som rå tekst eller ødelægge rendererens styling.
- **PROPOSED_DA:** <span class="lesson1-training-text">Hvem spørger?</span>
- **Avots:** luna

### DA-KURSS-L0004 [HIGH] TRANSLATION

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 3</h3> …
- **Problem:** Ordlisten er alvorligt fejloversat: flere tyske ord har lettiske eller forkerte danske betydninger, fx “wer — her” og “die Bank — ligge ned”.
- **PROPOSED_DA:** wer — hvem
- **Avots:** luna

### DA-KURSS-L0005 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** Vārdos arbeiten, zeichnen divskani ei izrunā …
- **Problem:** Afsnittet indeholder omfattende lettisk tekst og uoversatte grammatikelementer.
- **PROPOSED_DA:** I ordene arbeiten og zeichnen udtales diftongen ei omtrent som dansk aj.
- **Avots:** luna

### DA-KURSS-L0006 [HIGH] TRANSLATION

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 4</h3> …
- **Problem:** Ordlisten indeholder dubletter og forkerte betydninger, fx “er nimmt — fjerklædt” og “der Federhalter — show”.
- **PROPOSED_DA:** Nehmen (nēmen) — at tage
- **Avots:** luna

### DA-KURSS-L0007 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** Ja h ir garumzīme, to neizrunā kā skaņu …
- **Problem:** Grammatik- og udtaleafsnittene indeholder lettiske rester, som ikke er oversat til dansk.
- **PROPOSED_DA:** Hvis h er en længdemarkør, udtales det ikke som en lyd: nehmen (nēmen).
- **Avots:** luna

### DA-KURSS-L0008 [HIGH] TRANSLATION

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 5</h3> …
- **Problem:** Ordlisten har en stavefejl i det tyske lemma: “loben” skal være “loben” med korrekt indhold, mens flere øvrige punkter er uoversatte lettiske rester.
- **PROPOSED_DA:** loben — at rose
- **Avots:** luna

### DA-KURSS-L0009 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **DA_CURRENT:** Daudz sieviešu kārtas vārdu atvasina ar galotni -Dø Lehrerin
- **Problem:** Grammatikafsnittet indeholder lettisk tekst og en ødelagt placeholder/tekststreng “-Dø Lehrerin”.
- **PROPOSED_DA:** Mange feminine substantiver dannes med endelsen -in: die Lehrerin.
- **Avots:** luna

### DA-KURSS-L0010 [HIGH] SEMANTICS

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.subtitle`
- **DA_CURRENT:** Tal, flertal, omlyd og flertalsformer af substantiver
- **Problem:** Undertitlen beskriver tal og substantivflertal, men referenceindholdet handler om verber, stedsadverbier og oversættelse.
- **PROPOSED_DA:** Verber, stedsadverbier og oversættelse
- **Avots:** luna

### DA-KURSS-L0011 [HIGH] TRANSLATION

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 6</h3> …
- **Problem:** Ordlisten indeholder fejloversættelser og rester fra andre sprog, fx “liegt — er, er, ligger” og flere lettiske grammatikafsnit.
- **PROPOSED_DA:** liegt — ligger
- **Avots:** luna

### DA-KURSS-L0012 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** Piemēri: fünf, der Schlüssel (šlūsel). …
- **Problem:** Grammatikafsnittet består delvist af lettisk tekst og indeholder ødelagte, ufuldstændige sætninger.
- **PROPOSED_DA:** Eksempler: fünf, der Schlüssel (šlūsel).
- **Avots:** luna

### DA-KURSS-L0013 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[6]`
- **DE_CURRENT:** der Morgen
- **DA_CURRENT:** der Morgen — morgenen
- **Problem:** Opslagsformen bør være “morgen”, ikke den bestemte form “morgenen”.
- **PROPOSED_DA:** der Morgen — morgen
- **Avots:** luna

### DA-KURSS-L0014 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[31]`
- **DE_CURRENT:** der Arbeiter
- **DA_CURRENT:** der Arbeiter — arbejderen
- **Problem:** Ordlisten bruger bestemt form, mens tysk lemma og øvrige gloser bør gengives i ubestemt dansk form.
- **PROPOSED_DA:** der Arbeiter — arbejder
- **Avots:** luna

### DA-KURSS-L0015 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[34]`
- **DE_CURRENT:** der Bäcker
- **DA_CURRENT:** der Bäcker — bageren
- **Problem:** Opslagsformen bør være “bager”, ikke den bestemte form “bageren”.
- **PROPOSED_DA:** der Bäcker — bager
- **Avots:** luna

### DA-KURSS-L0016 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[35]`
- **DE_CURRENT:** der Schneider
- **DA_CURRENT:** der Schneider — skrædderen
- **Problem:** Opslagsformen bør være “skrædder”, ikke den bestemte form “skrædderen”.
- **PROPOSED_DA:** der Schneider — skrædder
- **Avots:** luna

### DA-KURSS-L0017 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[36]`
- **DE_CURRENT:** der Gärtner
- **DA_CURRENT:** der Gärtner — gartneren
- **Problem:** Opslagsformen bør være “gartner”, ikke den bestemte form “gartneren”.
- **PROPOSED_DA:** der Gärtner — gartner
- **Avots:** luna

### DA-KURSS-L0018 [LOW] NATURALNESS

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[14].lv`
- **DE_CURRENT:** Sprich nicht leise!
- **DA_CURRENT:** Tal ikke stille!
- **Problem:** “Tal ikke stille!” er forståeligt, men “Tal ikke lavt!” er den mere idiomatiske danske formulering.
- **PROPOSED_DA:** Tal ikke lavt!
- **Avots:** luna

### DA-KURSS-L0019 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.intro`
- **DA_CURRENT:** Elvte forelæsning: haben, negation med kein, besiddelse, sammensatte navneord og ordstilling med denn.
- **Problem:** "Forelæsning" er mindre naturligt og inkonsistent med lektionens titel "Lektion 11"; "lektion" passer bedre til kursusindholdet.
- **PROPOSED_DA:** Elvte lektion: haben, negation med kein, besiddelse, sammensatte navneord og ordstilling med denn.
- **Avots:** luna

### DA-KURSS-L0020 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[0].text`
- **DA_CURRENT:** Hjælpeverbet haben på tysk udtrykker begrebet tilhørsforhold. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.
- **Problem:** "Tilhørsforhold" betyder primært affiliation eller belonging og beskriver ikke præcist haben som udtryk for ejerskab eller besiddelse.
- **PROPOSED_DA:** Hjælpeverbet haben på tysk udtrykker ofte ejerskab eller besiddelse. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.
- **Avots:** luna

### DA-KURSS-L0021 [MEDIUM] NAMES

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
- **DE_CURRENT:** Franz hat keine Feder und keinen Bleistift.
- **DA_CURRENT:** Franc har ingen pen og ingen blyant.
- **Problem:** Personnavnet er Franc på dansk, men Franz i den tyske tekst og øvrige navnehenvisninger.
- **PROPOSED_DA:** Franz har ingen pen og ingen blyant.
- **Avots:** luna

### DA-KURSS-L0022 [MEDIUM] NAMES

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[17].lv`
- **DE_CURRENT:** Schreibt Franz auch?
- **DA_CURRENT:** Skriver Francis også?
- **Problem:** Navnet Francis afviger fra Franz i den tyske tekst og fra den konsekvente navneform i den relaterede danske sætning.
- **PROPOSED_DA:** Skriver Franz også?
- **Avots:** luna

### DA-KURSS-L0023 [MEDIUM] NAMES

- **Lesson/ID:** ``
- **Path:** ``
- **DE_CURRENT:** Er heißt Johann.
- **DA_CURRENT:** Han hedder Jan.
- **Problem:** Det danske navn Jan matcher ikke det tyske kildenavn Johann.
- **PROPOSED_DA:** Han hedder Johann.
- **Avots:** luna

### DA-KURSS-L0024 [MEDIUM] NAMES

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[20].lv`
- **DE_CURRENT:** Sie heißen Elsa, Martha und Alma.
- **DA_CURRENT:** Deres navne er Elsa, Marta og Alma.
- **Problem:** Personnavnet afviger fra den tyske kilde: Martha er gengivet som Marta.
- **PROPOSED_DA:** Deres navne er Elsa, Martha og Alma.
- **Avots:** luna

### DA-KURSS-L0025 [HIGH] NAMES

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
- **DE_CURRENT:** Nein, Robert und Johann turnen nicht.
- **DA_CURRENT:** Nej, Robert og Jan laver ikke gymnastik.
- **Problem:** Det danske navn Jan svarer ikke til Johann i den tyske kildetekst.
- **PROPOSED_DA:** Nej, Robert og Johann laver ikke gymnastik.
- **Avots:** luna

### DA-KURSS-L0026 [LOW] ORTHOGRAPHY

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[13].lv`
- **DE_CURRENT:** Ja, er will vorwärts kommen.
- **DA_CURRENT:** Ja, han vil gerne frem.
- **Problem:** Kommaet efter "Ja" er korrekt; ingen sproglig rettelse er nødvendig.
- **PROPOSED_DA:** Ja, han vil gerne frem.
- **Avots:** luna

### DA-KURSS-L0027 [LOW] GRAMMAR

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].text`
- **DA_CURRENT:** Ord, der ofte bruges uden artiklen: die Milch, das Brot.
- **Problem:** Den generiske formulering kræver normalt ubestemt form: “uden artikel”, ikke “uden artiklen”.
- **PROPOSED_DA:** Ord, der ofte bruges uden artikel: die Milch, das Brot.
- **Avots:** luna

### DA-KURSS-L0028 [LOW] NATURALNESS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]`
- **DA_CURRENT:** I ordene wem, dem, den og der udtales e langt og lukket.
- **Problem:** “udtales e langt” er grammatisk og idiomatisk ufuldstændigt på dansk; “e-lyden” gør formuleringen naturlig.
- **PROPOSED_DA:** I ordene wem, dem, den og der er e-lyden lang og lukket.
- **Avots:** luna

### DA-KURSS-L0029 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]`
- **DE_CURRENT:** die Diele
- **DA_CURRENT:** die Diele — gulv
- **Problem:** På moderne tysk betyder “die Diele” normalt entré eller gang, ikke “gulv”.
- **PROPOSED_DA:** die Diele — entré
- **Avots:** luna

### DA-KURSS-L0030 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson20`
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[10].prompt`
- **DE_CURRENT:** Dieser Mann geht über die Brücke.
- **DA_CURRENT:** Dieser Mann geht über (die Brücke).
- **Problem:** Prompten er ikke oversat til dansk og indeholder den tyske originalsætning.
- **PROPOSED_DA:** Denne mand går over (broen).
- **Avots:** luna

### DA-KURSS-L0031 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson20`
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[11].prompt`
- **DE_CURRENT:** Jener Mann steht unter der Brücke.
- **DA_CURRENT:** Jener Mann steht unter (die Brücke).
- **Problem:** Prompten er ikke oversat til dansk og indeholder den tyske originalsætning.
- **PROPOSED_DA:** Den mand står under (broen).
- **Avots:** luna

### DA-KURSS-L0032 [NEEDS_SOURCE_REVIEW] SEMANTICS

- **Lesson/ID:** `lesson20`
- **Path:** `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[9].lv`
- **DE_CURRENT:** Wo ist der Boden?
- **DA_CURRENT:** Hvor er loftet?
- **Problem:** Det danske betyder 'Wo ist der Dachboden?'. Den tyske tekst 'Boden' stemmer ikke med loft/bēniņi i referencen.
- **PROPOSED_DA:** Hvor er loftet?
- **Avots:** luna

### DA-KURSS-L0033 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson21`
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv`
- **DE_CURRENT:** Ich nehme die Hefte aus der Mappe.
- **DA_CURRENT:** Jeg tager notesbøgerne op af min taske.
- **Problem:** DA ændrer både præpositionen og den bestemte reference; teksten bør svare til at tage notesbøgerne ud af tasken.
- **PROPOSED_DA:** Jeg tager notesbøgerne ud af tasken.
- **Avots:** luna

### DA-KURSS-L0034 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: article examples`
- **DA_CURRENT:** <div class="kurss-example">Bilmærker → egnet til BMW, egnet til Mercedes</div>
- **Problem:** The Danish text is malformed and omits the German articles shown in the reference.
- **PROPOSED_DA:** <div class="kurss-example">Bilmærker → der BMW, der Mercedes</div>
- **Avots:** luna

### DA-KURSS-L0035 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: DIE heading`
- **DA_CURRENT:** <h4 class="artikuli-header"><span>♀</span>DØR ofte</h4>
- **Problem:** DØR is a Danish word, not the German article DIE; the heading is a clear translation error.
- **PROPOSED_DA:** <h4 class="artikuli-header"><span>♀</span>Ofte DIE</h4>
- **Avots:** luna

### DA-KURSS-L0036 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: foreign remnants`
- **DA_CURRENT:** <div class="kurss-example">-er → often DER, for example: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
- **Problem:** The sentence contains English remnants in otherwise Danish course content.
- **PROPOSED_DA:** <div class="kurss-example">-er → ofte DER, fx: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
- **Avots:** luna

### DA-KURSS-L0037 [MEDIUM] TRANSLATION

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: rules heading`
- **DA_CURRENT:** <h5 class="artikuli-subtitle">Vilkår</h5>
- **Problem:** Vilkår means conditions/terms; the Latvian source’s Noteikumi means rules in this instructional context.
- **PROPOSED_DA:** <h5 class="artikuli-subtitle">Regler</h5>
- **Avots:** luna

### DA-KURSS-L0038 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: exception explanation`
- **DA_CURRENT:** For nogle ord kan artiklen ikke bestemmes pålideligt af slutningen eller den lettiske oprindelse.
- **Problem:** The reference concerns German gender, but the Danish text incorrectly mentions Latvian origin.
- **PROPOSED_DA:** For nogle ord kan artiklen ikke bestemmes pålideligt ud fra endelsen eller andre regler.
- **Avots:** luna

### DA-KURSS-L0039 [LOW] ORTHOGRAPHY

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: learning example`
- **DA_CURRENT:** <div class="kurss-example">Das Lernen - Læring</div>
- **Problem:** The Danish common noun is incorrectly capitalized.
- **PROPOSED_DA:** <div class="kurss-example">Das Lernen - læring</div>
- **Avots:** luna

### DA-KURSS-L0040 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson :: English examples`
- **DA_CURRENT:** <div class="kurss-example">Passer mandag - mandag</div>
- **Problem:** The example is corrupted and does not contain the German noun phrase from the reference.
- **PROPOSED_DA:** <div class="kurss-example">Der Montag - mandag</div>
- **Avots:** luna

### DA-KURSS-L0041 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: Akkusativ forms`
- **DA_CURRENT:** <div class="kurss-example">Ihn - hans (v.)</div><div class="kurss-example">Sie - hans (s.)</div><div class="kurss-example">Mig - det</div><div class="kurss-example">Han - os</div><div class="kurss-example">Euch - dig</div>
- **Problem:** Several accusative pronoun forms are mistranslated or replaced by Danish pronouns with the wrong meaning.
- **PROPOSED_DA:** <div class="kurss-example">Ihn - ham (m.)</div><div class="kurss-example">Sie - hende (f.)</div><div class="kurss-example">Es - det</div><div class="kurss-example">Uns - os</div><div class="kurss-example">Euch - jer</div>
- **Avots:** luna

### DA-KURSS-L0042 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: English remnants`
- **DA_CURRENT:** <li><span class="case-blue">Nominativ</span> - subject of the sentence (who does?)</li><li><span class="case-red">Akkusativ</span> - direct object (what?)</li><li><span class="case-green">Dativ</span> - indirect object (to whom?)</li>
- **Problem:** The summary is partly in English and therefore not suitable for Danish learners.
- **PROPOSED_DA:** <li><span class="case-blue">Nominativ</span> - sætningens grundled (hvem gør noget?)</li><li><span class="case-red">Akkusativ</span> - direkte objekt (hvad? hvem?)</li><li><span class="case-green">Dativ</span> - indirekte objekt (til hvem?)</li>
- **Avots:** luna

### DA-KURSS-L0043 [CRITICAL] ORTHOGRAPHY

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: examples`
- **DA_CURRENT:** Wir mögen <span class="case-red">Euk</span>. – Vi kan lide dig.
- **Problem:** Euk is a typo for Euch, and the Danish object pronoun must be jer, not dig.
- **PROPOSED_DA:** Wir mögen <span class="case-red">Euch</span>. – Vi kan lide jer.
- **Avots:** luna

### DA-KURSS-L0044 [CRITICAL] ORTHOGRAPHY

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: examples`
- **DA_CURRENT:** Wir danken <span class="case-green">Euk</span>. – Vi takker.
- **Problem:** Euk is a typo for Euch; the Danish translation is incomplete.
- **PROPOSED_DA:** Wir danken <span class="case-green">Euch</span>. – Vi takker jer.
- **Avots:** luna

### DA-KURSS-L0045 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson :: bottom note`
- **DA_CURRENT:** The Nominative is always the subject of the sentence, while the Akkusativ and Dativ are the objects. Look at the verb and ask: <span class="case-red">Hvad?</span> or <span class="case-green">Wen?</span>
- **Problem:** The note is in English and incorrectly leaves the German question word Wen in the Danish explanation.
- **PROPOSED_DA:** Nominativ er altid sætningens grundled, mens Akkusativ og Dativ er objekter. Se på verbet, og spørg: <span class="case-red">Hvad?</span> eller <span class="case-green">Hvem?</span>
- **Avots:** luna

### DA-KURSS-L0046 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: long-vowel examples`
- **DA_CURRENT:** <div class="kurss-example">Tarm (få) - godt</div><div class="kurss-example">Hytte (hūt) - hat</div><div class="kurss-example">Schlaf — sov</div>
- **Problem:** Several German headwords and Danish meanings are corrupted or mismatched.
- **PROPOSED_DA:** <div class="kurss-example">Gut (gūt) - god</div><div class="kurss-example">Hut (hūt) - hat</div><div class="kurss-example">Schlaf — søvn</div>
- **Avots:** luna

### DA-KURSS-L0047 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: short-vowel examples`
- **DA_CURRENT:** <div class="kurss-example">Skaldet (balt) - snart</div><div class="kurss-example">Scharf (tørklæde) - ass</div>
- **Problem:** Skaldet and tørklæde are incorrect substitutions for the German examples bald and scharf.
- **PROPOSED_DA:** <div class="kurss-example">Bald (balt) - snart</div><div class="kurss-example">Scharf (šarf) - skarp</div>
- **Avots:** luna

### DA-KURSS-L0048 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: h examples`
- **DA_CURRENT:** <div class="kurss-example">Ihn (īn) - hans</div><div class="kurss-example">Ihm (īm) - for skinke</div><div class="kurss-example">Nahm (nām) - tog</div>
- **Problem:** Ihn and ihm have incorrect Danish meanings; the source meaning of nahm is past-tense tog and is correct.
- **PROPOSED_DA:** <div class="kurss-example">Ihn (īn) - ham</div><div class="kurss-example">Ihm (īm) - ham</div><div class="kurss-example">Nahm (nām) - tog</div>
- **Avots:** luna

### DA-KURSS-L0049 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: long i section`
- **DA_CURRENT:** <h4>Langt i = dvs</h4><div class="kurss-example">Dø (dī) - artiklen "dø"</div><div class="kurss-example">Hier (hīr) - hende</div>
- **Problem:** The heading and examples contain severe mistranslations: dvs/dø and hende do not represent ie, die, and hier.
- **PROPOSED_DA:** <h4>Langt i = ie</h4><div class="kurss-example">Die (dī) - artiklen "die"</div><div class="kurss-example">Hier (hīr) - her</div>
- **Avots:** luna

### DA-KURSS-L0050 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: double-vowel examples`
- **DA_CURRENT:** <div class="kurss-example">Saal (græs) - græs</div><div class="kurss-example">Se (se) - sø / hav</div><div class="kurss-example">Roer (bēt) - seng</div><div class="kurss-example">Støvle (bōt) - båd</div>
- **Problem:** Multiple German headwords were replaced by Danish words, and Saal, Beet and Boot have incorrect meanings.
- **PROPOSED_DA:** <div class="kurss-example">Saal (zāl) - sal</div><div class="kurss-example">See (zē) - sø / hav</div><div class="kurss-example">Beet (bēt) - bed</div><div class="kurss-example">Boot (bōt) - båd</div>
- **Avots:** luna

### DA-KURSS-L0051 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: umlaut explanations`
- **DA_CURRENT:** Ä er en tuning af en.
- **Problem:** Tuning is an English remnant and the linguistic term is omlyd; the source describes ä as an umlaut of a.
- **PROPOSED_DA:** Ä er en omlyd af a.
- **Avots:** luna

### DA-KURSS-L0052 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson :: summary`
- **DA_CURRENT:** <li>Dvs ofte betyder lang i</li>
- **Problem:** Dvs is an erroneous remnant of the source’s explanation of the spelling ie.
- **PROPOSED_DA:** <li>Ie betyder ofte langt i</li>
- **Avots:** luna

### DA-KURSS-L0053 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: consonant examples`
- **DA_CURRENT:** <div class="kurss-example">Dårlig (bāt) - dårlig</div>
- **Problem:** Dårlig is Danish, not the German headword Bad; the entry contains a foreign-language substitution.
- **PROPOSED_DA:** <div class="kurss-example">Bad (bāt) - bad</div>
- **Avots:** luna

### DA-KURSS-L0054 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: ch examples`
- **DA_CURRENT:** <div class="kurss-example">Zeichnen (caihnen) - uafgjort</div><div class="kurss-example">Noch (nej) - stadig</div>
- **Problem:** Zeichnen means tegne, not uafgjort; noch has an incorrect pronunciation hint.
- **PROPOSED_DA:** <div class="kurss-example">Zeichnen (caihnen) - tegne</div><div class="kurss-example">Noch (noh) - stadig</div>
- **Avots:** luna

### DA-KURSS-L0055 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: sp/st examples`
- **DA_CURRENT:** <div class="kurss-example">Stald (štal) - stald</div><div class="kurss-example">Stå (štant) - stilling / sted</div>
- **Problem:** The German headwords Stall and Stand were incorrectly replaced with Danish words.
- **PROPOSED_DA:** <div class="kurss-example">Stall (štal) - stald</div><div class="kurss-example">Stand (štant) - stilling / sted</div>
- **Avots:** luna

### DA-KURSS-L0056 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: s/z examples`
- **DA_CURRENT:** <p>''et' i begyndelsen af ​​et ord lyder ofte som et 'z'.</p><div class="kurss-example">Synge (zingen) - at synge</div><div class="kurss-example">Zahl (kylling) - nummer</div>
- **Problem:** The rule contains a corrupted quoted letter; singen is misspelled and Zahl has the wrong pronunciation and meaning.
- **PROPOSED_DA:** <p>'s' i begyndelsen af et ord lyder ofte som 'z'.</p><div class="kurss-example">Singen (zingen) - at synge</div><div class="kurss-example">Zahl (cāl) - tal</div>
- **Avots:** luna

### DA-KURSS-L0057 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: v examples`
- **DA_CURRENT:** <div class="kurss-example">Vater (fäter) - langt</div><div class="kurss-example">Von (fon) - no</div><div class="kurss-example">Vier (fīr) - ild</div>
- **Problem:** All three Danish meanings are wrong: Vater means far, von means fra, and vier means fire.
- **PROPOSED_DA:** <div class="kurss-example">Vater (fäter) - far</div><div class="kurss-example">Von (fon) - fra</div><div class="kurss-example">Vier (fīr) - fire</div>
- **Avots:** luna

### DA-KURSS-L0058 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: x/y examples`
- **DA_CURRENT:** <div class="kurss-example">Mythe (mund) - myte</div>
- **Problem:** The Danish meaning is correct, but the pronunciation hint mund is wrong and conflicts with the source.
- **PROPOSED_DA:** <div class="kurss-example">Mythe (mūte) - myte</div>
- **Avots:** luna

### DA-KURSS-L0059 [HIGH] CONSISTENCY

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson :: summary`
- **DA_CURRENT:** <li>SS → s</li>
- **Problem:** The summary lists SS although the lesson section teaches the German letter ß.
- **PROPOSED_DA:** <li>ß → s</li>
- **Avots:** luna

### DA-KURSS-L0060 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: was examples`
- **DA_CURRENT:** <div class="kurss-example">Was tust du? — Was machst du?</div>
- **Problem:** The Danish translation was replaced by a German sentence, leaving the example untranslated.
- **PROPOSED_DA:** <div class="kurss-example">Was tust du? — Hvad laver du?</div>
- **Avots:** luna

### DA-KURSS-L0061 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: negation examples`
- **DA_CURRENT:** <div class="kurss-example">Ich spiele nicht. — Paul spørger ikke.</div><div class="kurss-example">Paul fragt nicht. — Han kommer ikke.</div><div class="kurss-example">Er kommt nicht. — De/de synger ikke.</div>
- **Problem:** The Danish translations are shifted to the wrong German sentences, and De/de is inconsistent and ambiguous.
- **PROPOSED_DA:** <div class="kurss-example">Ich spiele nicht. — Jeg spiller ikke.</div><div class="kurss-example">Paul fragt nicht. — Paul spørger ikke.</div><div class="kurss-example">Er kommt nicht. — Han kommer ikke.</div>
- **Avots:** luna

### DA-KURSS-L0062 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: lecture examples`
- **DA_CURRENT:** <div class="kurss-example">Sie singen nicht. — Spiller du?</div>
- **Problem:** The Danish translation does not correspond to the German sentence.
- **PROPOSED_DA:** <div class="kurss-example">Sie singen nicht. — De synger ikke.</div>
- **Avots:** luna

### DA-KURSS-L0063 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: lecture examples`
- **DA_CURRENT:** <div class="kurss-example">Spielst du? — Nein, jeg spiller ikke, jeg arbejder.</div>
- **Problem:** Translations are offset: the Danish answer belongs to the following German sentence, not to Spielst du?
- **PROPOSED_DA:** <div class="kurss-example">Spielst du? — Spiller du?</div>
- **Avots:** luna

### DA-KURSS-L0064 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: lecture examples`
- **DA_CURRENT:** <div class="kurss-example">Wer arbeitet? — Wen arbejder?</div><div class="kurss-example">Wir rechnen und zeichnen. — Vi zählt og tegner.</div>
- **Problem:** Wen and zählt are German remnants in the Danish translations; the Danish sentences are malformed.
- **PROPOSED_DA:** <div class="kurss-example">Wer arbeitet? — Hvem arbejder?</div><div class="kurss-example">Wir rechnen und zeichnen. — Vi regner og tegner.</div>
- **Avots:** luna

### DA-KURSS-L0065 [PASS] TRANSLATION

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson :: final example`
- **DA_CURRENT:** <div class="kurss-example">Sie antworten nicht. — De svarer ikke.</div>
- **Problem:** The German sentence and Danish translation correspond correctly.
- **PROPOSED_DA:** <div class="kurss-example">Sie antworten nicht. — De svarer ikke.</div>
- **Avots:** luna

### DA-KURSS-L0066 [PASS] TRANSLATION

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
- **DA_CURRENT:** <h3>Sætningsstruktur</h3>
- **Problem:** The heading is correct Danish.
- **PROPOSED_DA:** <h3>Sætningsstruktur</h3>
- **Avots:** luna

### DA-KURSS-L0067 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson5`
- **Path:** `lesson5TrainingCardsDa[9].front`
- **DE_CURRENT:** Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut.
- **DA_CURRENT:** Nej, eleven svarer ikke dårligt, hun svarer godt.
- **Problem:** The response refers to the female student as “eleven” instead of matching the feminine noun “elevinden” used in the preceding card.
- **PROPOSED_DA:** Nej, elevinden svarer ikke dårligt, hun svarer godt.
- **Avots:** luna

### DA-KURSS-L0068 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson6`
- **Path:** `lesson6TrainingCardsDa[19].front`
- **DE_CURRENT:** Wie ist der Federhalter?
- **DA_CURRENT:** Hvordan er fyldepenholderen?
- **Problem:** Terminologien skifter fra penneholder i den foregående sætning til fyldepenholder, selv om den tyske betegnelse er den samme.
- **PROPOSED_DA:** Hvordan er penneholderen?
- **Avots:** luna

### DA-KURSS-L0069 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson6`
- **Path:** `lesson6TrainingCardsDa[20].front`
- **DE_CURRENT:** Der Federhalter ist schwarz.
- **DA_CURRENT:** Fyldepenholderen er sort.
- **Problem:** Terminologien bør være den samme som i den foregående sætning: penneholderen, ikke fyldepenholderen.
- **PROPOSED_DA:** Penneholderen er sort.
- **Avots:** luna
