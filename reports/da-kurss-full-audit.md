# DA–DE Kurss — pilns lingvistiskais audits (READ-ONLY)

Audita datums: 2026-08-18
Auditors: deterministiskā pārbaude + GPT-5.6 Luna

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| DA lauki (coverage) | **1280** |
| Lekcijas | **21** |
| Extra HTML topics | **6** |
| UI kurss atslēgas | **96** |
| CRITICAL | **7** |
| HIGH | **23** |
| MEDIUM | **32** |
| LOW | **7** |
| Kopā findings | **69** |
| Luna batches | **26** (1280 fields) |
| Luna loaded | **26/26** |
| Production changes | **0** |

> **PROPOSED_DA** nav automātiski OWNER apstiprināts labojums.

## COVERAGE

| Avots | Lauki |
|---|---|
| lesson | 1061 |
| html | 6 |
| training | 117 |
| ui | 96 |

## TECHNICAL GATES

| Gate | Result |
|---|---|
| Syntax (courseLessons) | **PASS** |
| validate-kurss.js | **PASS** |
| Structure vs LV MASTER | **PASS** (0 issues) |
| Mirror data↔www | **PASS** |
| DE baseline changes | **2** (note) |
| Luna coverage | **PASS** |

## Verdict

**NEEDS OWNER REVIEW** — atlikuši validated findings.

## Findings

### DA-KURSS-0001 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <h3>Lektion 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="lesso
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

### DA-KURSS-0008 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">gut — god</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><div class
- **Problem:** Foreign/script: LV_DIAC, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-0009 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for begynderen.</p> <section class="kurss-lesson-section"> <h4>Konsonanter</h4> <div class="kurss-examples"><div class="kurss-example">Das Rad (rāt) - hjul</div><div class="kurss-example">Die Räder (rēder) - hjul</div><div class="kurss-example">Bad — bad</div><div class="kurss-example">
- **Problem:** Foreign/script: LV_DIAC, ZERO_WIDTH
- **PROPOSED_DA:** (OWNER: Danish replacement per DE/LV meaning)
- **Avots:** deterministic

### DA-KURSS-L0001 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
- **DA_CURRENT:** <h3>Lektion 1</h3> ...
- **Problem:** Feltet indeholder lettisk tekst samt flere upræcise eller fejlagtige danske grammatik- og oversættelsesfragmenter.
- **PROPOSED_DA:** Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
- **Avots:** luna

### DA-KURSS-L0002 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 2</h3> ...
- **Problem:** Feltet indeholder lettiske sætninger og en ordliste med alvorligt forkerte danske betydninger, fx »was tun sie? — beregne« og »antworten — Marie«.
- **PROPOSED_DA:** Līdzskaņu kopojumu sp udtales som šp: spielen (špīlen).
- **Avots:** luna

### DA-KURSS-L0003 [HIGH] SEMANTICS

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.subtitle`
- **DA_CURRENT:** Dialoger, ord, udtale, grammatik og oversættelse
- **Problem:** Indholdet svarer ikke til strukturreferencen: lektionen handler om artikler, stedord og oversættelse, ikke dialoger, udtale og grammatik.
- **PROPOSED_DA:** Artikler, stedord og oversættelse
- **Avots:** luna

### DA-KURSS-L0004 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 3</h3> ...
- **Problem:** Feltet indeholder omfattende lettiske rester, forkerte ordlistebetydninger og en ødelagt Markdown-/HTML-lignende placeholder i træningskortet.
- **PROPOSED_DA:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
- **Avots:** luna

### DA-KURSS-L0005 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 4</h3> ...
- **Problem:** Feltet indeholder lettiske rester og flere alvorlige ordlistefejl, fx »einen Federhalter — sort« og »antworten — Marie«-lignende fejloversættelser.
- **PROPOSED_DA:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
- **Avots:** luna

### DA-KURSS-L0006 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 5</h3> ...
- **Problem:** Feltet indeholder lettisk tekst i grammatikafsnittene og en forkert dansk gloss »wen — hvem«, hvor akkusativbetydningen bør fremgå som »hvem/den hvem«.
- **PROPOSED_DA:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
- **Avots:** luna

### DA-KURSS-L0007 [NEEDS_SOURCE_REVIEW] SEMANTICS

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.subtitle`
- **DA_CURRENT:** Tal, flertal, omlyd og flertalsformer af substantiver
- **Problem:** Dansk tekst er sprogligt plausibel, men strukturreferencen beskriver et andet emne: verber, stedets adverbier og oversættelse.
- **PROPOSED_DA:** Tal, flertal, omlyd og substantivernes flertalsformer
- **Avots:** luna

### DA-KURSS-L0008 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
- **DA_CURRENT:** <h3>Foredrag 6</h3> ...
- **Problem:** Feltet er stærkt forurenet med lettisk tekst samt blandede, uoversatte og semantisk forkerte danske fragmenter.
- **PROPOSED_DA:** Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.
- **Avots:** luna

### DA-KURSS-L0009 [LOW] NATURALNESS

- **Lesson/ID:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
- **DA_CURRENT:** <h3>Lektion 7</h3> ...
- **Problem:** Dansk indhold er overordnet korrekt. Ordlisteformen »singen — synge« bør dog helst have infinitivmarkør for konsekvent præsentation: »at synge«.
- **PROPOSED_DA:** singen — synge
- **Avots:** luna

### DA-KURSS-L0010 [MEDIUM] TRANSLATION

- **Lesson/ID:** ``
- **Path:** ``
- **DA_CURRENT:** 
- **Problem:** 
- **Avots:** luna

### DA-KURSS-L0011 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[31].lv`
- **DE_CURRENT:** Die Schülerin liest laut und deutlich.
- **DA_CURRENT:** Eleven læser højt og tydeligt.
- **Problem:** Den tyske tekst angiver specifikt en kvindelig elev; det danske 'eleven' er kønsneutralt.
- **PROPOSED_DA:** Den kvindelige elev læser højt og tydeligt.
- **Avots:** luna

### DA-KURSS-L0012 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[3].lv`
- **DE_CURRENT:** Hast du das Fenster geöffnet?
- **DA_CURRENT:** Åbnede du vinduet?
- **Problem:** Det tyske perfektum er oversat med dansk præteritum; i denne parallelle øvelse bør perfektum bevares.
- **PROPOSED_DA:** Har du åbnet vinduet?
- **Avots:** luna

### DA-KURSS-L0013 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson8`
- **Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[4].lv`
- **DE_CURRENT:** Nein, ich habe das Fenster nicht geöffnet.
- **DA_CURRENT:** Nej, jeg åbnede ikke vinduet.
- **Problem:** Det tyske perfektum er oversat med dansk præteritum; den danske perfektumform matcher øvelsens tempus bedre.
- **PROPOSED_DA:** Nej, jeg har ikke åbnet vinduet.
- **Avots:** luna

### DA-KURSS-L0014 [MEDIUM] NAMES

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
- **DE_CURRENT:** Franz hat keine Feder und keinen Bleistift.
- **DA_CURRENT:** Franc har ingen pen og ingen blyant.
- **Problem:** Personnavnet afviger fra den tyske kilde og fra den konsekvente form Franz i de følgende kort.
- **PROPOSED_DA:** Franz har ingen pen og ingen blyant.
- **Avots:** luna

### DA-KURSS-L0015 [MEDIUM] NAMES

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[17].lv`
- **DE_CURRENT:** Schreibt Franz auch?
- **DA_CURRENT:** Skriver Francis også?
- **Problem:** Personnavnet Francis afviger fra den tyske kilde Franz og fra den øvrige navnebrug i lektionen.
- **PROPOSED_DA:** Skriver Franz også?
- **Avots:** luna

### DA-KURSS-L0016 [MEDIUM] NAMES

- **Lesson/ID:** `lesson11`
- **Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[18].lv`
- **DE_CURRENT:** Nein, Franz schreibt nicht, er zeichnet.
- **DA_CURRENT:** Nej, Franz skriver ikke, han tegner.
- **Problem:** Navnet Franz er korrekt, men forekomsten bør fastholdes som konsekvent standardform efter varianterne Franc og Francis.
- **PROPOSED_DA:** Nej, Franz skriver ikke, han tegner.
- **Avots:** luna

### DA-KURSS-L0017 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]`
- **DE_CURRENT:** das Gummi
- **DA_CURRENT:** das Gummi — viskelæder
- **Problem:** Gummi betyder gummi på dansk; viskelæder svarer normalt til tysk Radiergummi.
- **PROPOSED_DA:** das Gummi — gummi
- **Avots:** luna

### DA-KURSS-L0018 [MEDIUM] NAMES

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].lv`
- **DE_CURRENT:** Er heißt Johann.
- **DA_CURRENT:** Han hedder Jan.
- **Problem:** Det danske navn Jan matcher ikke det tyske kildesætnings navn Johann.
- **PROPOSED_DA:** Han hedder Johann.
- **Avots:** luna

### DA-KURSS-L0019 [MEDIUM] NAMES

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv`
- **DE_CURRENT:** Franz ist am größten.
- **DA_CURRENT:** Frans er den største.
- **Problem:** Det danske navn Frans matcher ikke navnet Franz i den tyske kildesætning.
- **PROPOSED_DA:** Franz er den største.
- **Avots:** luna

### DA-KURSS-L0020 [LOW] NATURALNESS

- **Lesson/ID:** `lesson12`
- **Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[19].lv`
- **DE_CURRENT:** Wie heißen sie?
- **DA_CURRENT:** Hvad er deres navne?
- **Problem:** Hvad hedder de? er den idiomatiske danske formulering; Hvad er deres navne? lyder som en direkte oversættelse.
- **PROPOSED_DA:** Hvad hedder de?
- **Avots:** luna

### DA-KURSS-L0021 [MEDIUM] NAMES

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
- **DE_CURRENT:** Nein, Robert und Johann turnen nicht.
- **DA_CURRENT:** Nej, Robert og Jan laver ikke gymnastik.
- **Problem:** Det danske navn Jan svarer ikke til Johann i den tyske kildetekst og bryder navnekonsistensen.
- **PROPOSED_DA:** Nej, Robert og Johann laver ikke gymnastik.
- **Avots:** luna

### DA-KURSS-L0022 [MEDIUM] NAMES

- **Lesson/ID:** `lesson13`
- **Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[30].lv`
- **DE_CURRENT:** Robert und Johann, turnt!
- **DA_CURRENT:** Robert og Jan, lav gymnastik!
- **Problem:** Personnavnet Jan svarer ikke til Johann i den tyske kildetekst.
- **PROPOSED_DA:** Robert og Johann, lav gymnastik!
- **Avots:** luna

### DA-KURSS-L0023 [LOW] NATURALNESS

- **Lesson/ID:** `lesson14`
- **Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[7].text`
- **DA_CURRENT:** Wollen betyder bevidst at ville gøre noget.
- **Problem:** Formuleringen er forståelig, men "betyder bevidst at ville" lyder unaturlig på dansk.
- **PROPOSED_DA:** Wollen udtrykker et bevidst ønske om at gøre noget.
- **Avots:** luna

### DA-KURSS-L0024 [LOW] NATURALNESS

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].text`
- **DA_CURRENT:** Hvis projektet bruger moderne skrift, kan du skrive: du isst, er/sie/es isst, ihr esst.
- **Problem:** “Moderne stavemåde” er mere præcist og konsekvent med overskriften “Moderne stavemåde”.
- **PROPOSED_DA:** Hvis projektet bruger moderne stavemåde, kan du skrive: du isst, er/sie/es isst, ihr esst.
- **Avots:** luna

### DA-KURSS-L0025 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson15`
- **Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[4].lv`
- **DE_CURRENT:** Mutter, darf ich die Pflaumen essen?
- **DA_CURRENT:** Mor, må jeg spise blommer?
- **Problem:** Den tyske bestemthed i “die Pflaumen” bør gengives med det danske “blommerne”, ikke det ubestemte “blommer”.
- **PROPOSED_DA:** Mor, må jeg spise blommerne?
- **Avots:** luna

### DA-KURSS-L0026 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[6].text`
- **DA_CURRENT:** Dativartikel og navneord i flertal har ofte endelsen -n.
- **Problem:** I tysk får dativartiklen ikke generelt endelsen -n; det er især navneordet, der ofte får denne endelse.
- **PROPOSED_DA:** I dativ flertal får artiklen formen den, og navneordet får ofte endelsen -n.
- **Avots:** luna

### DA-KURSS-L0027 [MEDIUM] GRAMMAR

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].text`
- **DA_CURRENT:** Ord, der ofte bruges uden artiklen: die Milch, das Brot.
- **Problem:** Den generelle formulering på dansk er normalt “uden artikel”, ikke “uden artiklen”.
- **PROPOSED_DA:** Ord, der ofte bruges uden artikel: die Milch, das Brot.
- **Avots:** luna

### DA-KURSS-L0028 [MEDIUM] NATURALNESS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[0].task`
- **DE_CURRENT:** Der Vater ruft den Mann.
- **DA_CURRENT:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
- **Problem:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
- **PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
- **Avots:** luna

### DA-KURSS-L0029 [MEDIUM] NATURALNESS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[1].task`
- **DE_CURRENT:** Der Vater ruft die Frau.
- **DA_CURRENT:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
- **Problem:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
- **PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
- **Avots:** luna

### DA-KURSS-L0030 [MEDIUM] NATURALNESS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[2].task`
- **DE_CURRENT:** Der Vater ruft das Kind.
- **DA_CURRENT:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
- **Problem:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
- **PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
- **Avots:** luna

### DA-KURSS-L0031 [MEDIUM] NATURALNESS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[3].task`
- **DE_CURRENT:** Der Vater ruft den Sohn.
- **DA_CURRENT:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
- **Problem:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
- **PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
- **Avots:** luna

### DA-KURSS-L0032 [MEDIUM] NATURALNESS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[4].task`
- **DE_CURRENT:** Der Vater ruft das Fräulein.
- **DA_CURRENT:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
- **Problem:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
- **PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
- **Avots:** luna

### DA-KURSS-L0033 [MEDIUM] NATURALNESS

- **Lesson/ID:** `lesson16`
- **Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[5].task`
- **DE_CURRENT:** Der Vater ruft die Tante.
- **DA_CURRENT:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
- **Problem:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
- **PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
- **Avots:** luna

### DA-KURSS-L0034 [MEDIUM] SEMANTICS

- **Lesson/ID:** `lesson17`
- **Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[8].lv`
- **DE_CURRENT:** Nein, sie spricht mit den Freunden.
- **DA_CURRENT:** Nej, hun taler med sine venner.
- **Problem:** Det tyske »den Freunden« er bestemt flertal; »sine venner« tilføjer et possessivt pronomen, som ikke findes i kildesætningen.
- **PROPOSED_DA:** Nej, hun taler med vennerne.
- **Avots:** luna

### DA-KURSS-L0035 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson21`
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[0].lv`
- **DE_CURRENT:** Alle Hefte sind in der Mappe.
- **DA_CURRENT:** Alle notesbøgerne er i tasken.
- **Problem:** DA ændrer både substantivet og beholderen: Hefte svarer til hæfte, og Mappe til mappe; desuden er bestemthed tilføjet.
- **PROPOSED_DA:** Alle hæfter er i mappen.
- **Avots:** luna

### DA-KURSS-L0036 [MEDIUM] TRANSLATION

- **Lesson/ID:** `lesson21`
- **Path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv`
- **DE_CURRENT:** Ich nehme die Hefte aus der Mappe.
- **DA_CURRENT:** Jeg tager notesbøgerne op af min taske.
- **Problem:** DA oversætter Hefte/Mappe som notesbøger/taske og ændrer dermed betydningen af begge substantiver.
- **PROPOSED_DA:** Jeg tager hæfterne ud af mappen.
- **Avots:** luna

### DA-KURSS-L0037 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** <h3>Artikler</h3> ...
- **Problem:** HTML-feltet indeholder mange engelske rester og fejlagtige oversættelser, bl.a. "often DER", "DØR ofte" og "egnet til BMW".
- **PROPOSED_DA:** <h3>Artikler</h3> ...
- **Avots:** luna

### DA-KURSS-L0038 [MEDIUM] SEMANTICS

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** <p class="artikuli-explain">For nogle ord kan artiklen ikke bestemmes pålideligt af slutningen eller den lettiske oprindelse. ...</p>
- **Problem:** "lettiske oprindelse" er en rest fra kildesproget og passer ikke til dansk måltekst.
- **PROPOSED_DA:** <p class="artikuli-explain">For nogle ord kan artiklen ikke bestemmes pålideligt af slutningen eller det danske køn. De studeres bedst sammen med artiklen.</p>
- **Avots:** luna

### DA-KURSS-L0039 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** <div class="kurss-example">-er → often DER, for example: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
- **Problem:** Eksemplet indeholder engelsk tekst i et dansk felt.
- **PROPOSED_DA:** <div class="kurss-example">-er → ofte DER, for eksempel: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
- **Avots:** luna

### DA-KURSS-L0040 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssArticlesLesson`
- **Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
- **DA_CURRENT:** <h4 class="artikuli-header"><span>♀</span>DØR ofte</h4>
- **Problem:** "DØR" er den danske betydning af die, ikke det tyske artikelnavn.
- **PROPOSED_DA:** <h4 class="artikuli-header"><span>♀</span>Ofte DIE</h4>
- **Avots:** luna

### DA-KURSS-L0041 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
- **DA_CURRENT:** <div class="kurss-example">Ihn - hans (v.)</div><div class="kurss-example">Sie - hans (s.)</div><div class="kurss-example">Mig - det</div><div class="kurss-example">Han - os</div>
- **Problem:** Akkusativ-tabellen har flere alvorlige betydningsfejl: køn, pronominer og tyske former er blandet sammen.
- **PROPOSED_DA:** <div class="kurss-example">Ihn - ham (m.)</div><div class="kurss-example">Sie - hende (f.)</div><div class="kurss-example">Es - det</div><div class="kurss-example">Uns - os</div>
- **Avots:** luna

### DA-KURSS-L0042 [CRITICAL] ORTHOGRAPHY

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
- **DA_CURRENT:** <div class="kurss-example">Wir mögen <span class="case-red">Euk</span>. – Vi kan lide dig.</div><div class="kurss-example">Wir danken <span class="case-green">Euk</span>. – Vi takker.</div>
- **Problem:** "Euk" er en stavefejl i den tyske form, og dansk "dig" er forkert ved flertalspronomenet euch.
- **PROPOSED_DA:** <div class="kurss-example">Wir mögen <span class="case-red">Euch</span>. – Vi kan lide jer.</div><div class="kurss-example">Wir danken <span class="case-green">Euch</span>. – Vi takker jer.</div>
- **Avots:** luna

### DA-KURSS-L0043 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
- **DA_CURRENT:** <li><span class="case-blue">Nominativ</span> - subject of the sentence (who does?)</li><li><span class="case-red">Akkusativ</span> - direct object (what?)</li><li><span class="case-green">Dativ</span> - indirect object (to whom?)</li>
- **Problem:** Oversigten står delvist på engelsk i et ellers dansk HTML-felt.
- **PROPOSED_DA:** <li><span class="case-blue">Nominativ</span> - sætningens subjekt (hvem gør noget?)</li><li><span class="case-red">Akkusativ</span> - direkte objekt (hvad?)</li><li><span class="case-green">Dativ</span> - indirekte objekt (til hvem?)</li>
- **Avots:** luna

### DA-KURSS-L0044 [HIGH] FOREIGN_REMNANT

- **Lesson/ID:** `kurssPronounsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
- **DA_CURRENT:** <div>The Nominative is always the subject of the sentence, while the Akkusativ and Dativ are the objects. Look at the verb and ask: <span class="case-red">Hvad?</span> or <span class="case-green">Wen?</span></div>
- **Problem:** Infoboksen er på engelsk, og "Wen?" er tysk i en dansk forklaring; dansk bør være "Hvem?".
- **PROPOSED_DA:** <div>Nominativ er altid sætningens subjekt, mens Akkusativ og Dativ er objekterne. Se på verbet, og spørg: <span class="case-red">Hvad?</span> eller <span class="case-green">Hvem?</span></div>
- **Avots:** luna

### DA-KURSS-L0045 [HIGH] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** <div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">Hytte (hūt) - hat</div><div class="kurss-example">Schlaf — sov</div>
- **Problem:** De tyske eksempelord er oversat eller erstattet med danske ord, og Schlaf mangler dansk betydelse og udtalehint.
- **PROPOSED_DA:** <div class="kurss-example">warm (varm) - varm</div><div class="kurss-example">Hut (hūt) - hat</div><div class="kurss-example">Schlaf (šlāf) - søvn</div>
- **Avots:** luna

### DA-KURSS-L0046 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** <div class="kurss-example">Scharf (tørklæde) - ass</div><div class="kurss-example">Häuser (hoizer) - hjem</div><div class="kurss-example">Ihm (īm) - for skinke</div>
- **Problem:** Flere eksempler har alvorligt forkerte danske betydninger, herunder "tørklæde", "hjem" og "for skinke".
- **PROPOSED_DA:** <div class="kurss-example">scharf (šarf) - skarp</div><div class="kurss-example">Häuser (hoizer) - huse</div><div class="kurss-example">ihm (īm) - ham</div>
- **Avots:** luna

### DA-KURSS-L0047 [CRITICAL] TRANSLATION

- **Lesson/ID:** `kurssPronunciationLesson`
- **Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
- **DA_CURRENT:** <h4>Langt i = dvs</h4> ... <p>Langt i på tysk skrives ofte som dvs.</p>
- **Problem:** "dvs." er dansk forkortelse for "det vil sige"; her skulle den tyske stavemåde "ie" stå.
- **PROPOSED_DA:** <h4>Langt i = ie</h4> ... <p>Langt i på tysk skrives ofte som ie.</p>
- **Avots:** luna

### DA-KURSS-L0048 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** <div class="kurss-example">Zeichnen (caihnen) - uafgjort</div><div class="kurss-example">Zahl (kylling) - nummer</div>
- **Problem:** Betydningerne er forkerte: zeichnen betyder "tegne", og Zahl betyder "tal"; "kylling" er en fejl.
- **PROPOSED_DA:** <div class="kurss-example">Zeichnen (caihnen) - tegne</div><div class="kurss-example">Zahl (cāl) - tal</div>
- **Avots:** luna

### DA-KURSS-L0049 [HIGH] ORTHOGRAPHY

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** <p>''et' i begyndelsen af ​​et ord lyder ofte som et 'z'.</p>
- **Problem:** Forklaringen indeholder en ødelagt tekstrest ("''et'") og identificerer ikke bogstavet s korrekt.
- **PROPOSED_DA:** <p>"s" i begyndelsen af et ord lyder ofte som "z".</p>
- **Avots:** luna

### DA-KURSS-L0050 [CRITICAL] SEMANTICS

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** <div class="kurss-example">Vater (fäter) - langt</div><div class="kurss-example">Vier (fīr) - ild</div>
- **Problem:** Vater betyder "far", og vier betyder "fire"; de nuværende danske betydninger er forkerte.
- **PROPOSED_DA:** <div class="kurss-example">Vater (fāter) - far</div><div class="kurss-example">Vier (fīr) - fire</div>
- **Avots:** luna

### DA-KURSS-L0051 [MEDIUM] TRANSLATION

- **Lesson/ID:** `kurssConsonantsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
- **DA_CURRENT:** <div class="kurss-example">SS → s</li>
- **Problem:** Opsummeringen bruger SS, mens lektionen handler om det tyske bogstav ß.
- **PROPOSED_DA:** <div class="kurss-example">ß → s</li>
- **Avots:** luna

### DA-KURSS-L0052 [NEEDS_SOURCE_REVIEW] STRUCTURE

- **Lesson/ID:** `kurssVerbBasicsLesson`
- **Path:** `COURSE_LESSON_HTML.kurssVerbBasicsLesson`
- **DA_CURRENT:** <h3>Grundlæggende verber</h3> ...
- **Problem:** Dansk HTML afviger i flere punkter fra referenceindholdet; fuld kontrol af struktur og komplethed er nødvendig.
- **PROPOSED_DA:** <h3>Grundlæggende verber</h3> ...
- **Avots:** luna

### DA-KURSS-L0053 [CRITICAL] FOREIGN_REMNANT

- **Lesson/ID:** `kurssSentenceStructureLesson`
- **Path:** `COURSE_LESSON_HTML.kurssSentenceStructureLesson`
- **DA_CURRENT:** <div class="kurss-example">Sie singen nicht. — Spiller du?</div> ... <div class="kurss-example">Wen arbejder?</div> ... <div class="kurss-example">Vi zählt og tegner.</div>
- **Problem:** Dialogeksemplerne er fejljusteret, indeholder den tyske rest "Wen" og en ikke-dansk rest "zählt".
- **PROPOSED_DA:** <div class="kurss-example">Sie singen nicht. — De synger ikke.</div> ... <div class="kurss-example">Hvem arbejder?</div> ... <div class="kurss-example">Vi regner og tegner.</div>
- **Avots:** luna

### DA-KURSS-L0054 [NEEDS_SOURCE_REVIEW] SEMANTICS

- **Lesson/ID:** `lesson4`
- **Path:** `lesson4TrainingCardsDa[11].front`
- **DE_CURRENT:** Es geht hinaus und arbeitet.
- **DA_CURRENT:** Hun går ud og arbejder.
- **Problem:** Det tyske subjekt „Es“ stemmer ikke med pigen/hun; den danske tekst er korrekt.
- **PROPOSED_DA:** Hun går ud og arbejder.
- **Avots:** luna

### DA-KURSS-L0055 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson5`
- **Path:** `lesson5TrainingCardsDa[9].front`
- **DE_CURRENT:** Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut.
- **DA_CURRENT:** Nej, eleven svarer ikke dårligt, hun svarer godt.
- **Problem:** „Eleven“ er generisk, men den foregående sætning identificerer personen som „elevinden“; brug samme feminine betegnelse.
- **PROPOSED_DA:** Nej, elevinden svarer ikke dårligt, hun svarer godt.
- **Avots:** luna

### DA-KURSS-L0056 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson6`
- **Path:** `lesson6TrainingCardsDa[19].front`
- **DE_CURRENT:** Wie ist der Federhalter?
- **DA_CURRENT:** Hvordan er fyldepenholderen?
- **Problem:** Terminologien bør følge den tidligere oversættelse »penneholder«; »fyldepenholder« betegner specifikt en holder til en fyldepen.
- **PROPOSED_DA:** Hvordan er penneholderen?
- **Avots:** luna

### DA-KURSS-L0057 [MEDIUM] CONSISTENCY

- **Lesson/ID:** `lesson6`
- **Path:** `lesson6TrainingCardsDa[20].front`
- **DE_CURRENT:** Der Federhalter ist schwarz.
- **DA_CURRENT:** Fyldepenholderen er sort.
- **Problem:** Substantivet bør være »penneholderen« for at stemme overens med kort 18 og den foreslåede formulering på kort 19.
- **PROPOSED_DA:** Penneholderen er sort.
- **Avots:** luna

### DA-KURSS-L0058 [LOW] CONSISTENCY

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[0].lv`
- **DE_CURRENT:** fragen
- **DA_CURRENT:** at spørge
- **Problem:** The current entry is correct.
- **PROPOSED_DA:** at spørge
- **Avots:** luna

### DA-KURSS-L0059 [LOW] CONSISTENCY

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[4].lv`
- **DE_CURRENT:** zählen
- **DA_CURRENT:** tælle
- **Problem:** De øvrige infinitiver i denne liste har »at«; tilføj præpositionen for ensartethed.
- **PROPOSED_DA:** at tælle
- **Avots:** luna

### DA-KURSS-L0060 [LOW] CONSISTENCY

- **Lesson/ID:** `lesson7`
- **Path:** `lesson7ExerciseCardsDa[12].lv`
- **DE_CURRENT:** öffnen
- **DA_CURRENT:** åbne
- **Problem:** De øvrige infinitiver i denne liste har »at«; tilføj præpositionen for ensartethed.
- **PROPOSED_DA:** at åbne
- **Avots:** luna
