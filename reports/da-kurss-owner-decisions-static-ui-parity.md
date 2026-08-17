# DA–DE Kurss — OWNER decisions — statisko nodarbību UI paritāte

Aizpildi tabulu. **DE = STRICT READ-ONLY.** **LV = etalons.**

**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

| Audit ID | Apgabals | Path | LV_ETALON | DA_CURRENT | PROPOSED_DA | Severity | Category | Statuss | OWNER_DECISION |
|----------|----------|------|-----------|------------|-------------|----------|----------|---------|----------------|
| DA-KURSS-UI-0001 | UI menu | LANGUAGE_UI_STRINGS.kurss.pronunciation + pronunciationDesc | Izruna — Vācu valodas skaņas un izrunas pamati. | Udtale — Grundlæggende tyske lyde og udtale. | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0002 | UI menu | LANGUAGE_UI_STRINGS.kurss.articles + articlesDesc | Artikuli — Der, die, das un lietojuma pamati. | Artikler — Der, die, das og grundlæggende brug. | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0003 | UI menu | LANGUAGE_UI_STRINGS.kurss.pronouns + pronounsDesc | Vietniekvārdi — Nominativ, Akkusativ un Dativ formas. | Pronominer — Former i nominativ, akkusativ og dativ. | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0004 | UI menu | LANGUAGE_UI_STRINGS.kurss.lessons + lessonsDesc | Lekcijas — Mācību lekcijas secīgā kārtībā no 1 līdz 21. | Lektioner — Undervisningslektioner i rækkefølge fra 1 til 21. | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0005 | UI menu | LANGUAGE_UI_STRINGS.kurss.verbBasics + verbBasicsDesc | Darbības vārdu pamati — Personas, formas un biežākie darbības vārdi. | Grundlæggende verber — Personer, former og almindelige verber. | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0006 | UI menu | LANGUAGE_UI_STRINGS.kurss.sentenceStructure + sentenceStructureDesc | Teikumu uzbūve — Vienkārša vārdu secība vācu teikumos. | Sætningsstruktur — Enkel ordstilling i tyske sætninger. | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0007 | UI menu | LANGUAGE_UI_STRINGS.kurss.vowelsTitle + vowelsDesc | Patskaņi — garš un īss — Garie un īsie patskaņi ar piemēriem. | Vokaler — lange og korte — Lange og korte vokaler med eksempler. | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0008 | UI menu | LANGUAGE_UI_STRINGS.kurss.consonantsTitle + consonantsDesc | Līdzskaņi un burtu savienojumi — Svarīgākās līdzskaņu skaņas iesācējam. | Konsonanter og bogstavkombinationer — De vigtigste konsonantlyde for begyndere. | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0009 | UI menu | LANGUAGE_UI_STRINGS.kurss.title + subtitle | Kurss — Vācu valodas pamati soli pa solim | Kursus — Grundlæggende tysk trin for trin | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0010 | UI menu | LANGUAGE_UI_STRINGS.kurss.tipTitle + tipBody | Padoms — Klausies, atkārto un salīdzini. Tava auss ir labākais skolotājs! | Råd — Lyt, gentag og sammenlign. Dit øre er den bedste lærer! | Nav izmaiņu (paritāte OK) | INFO | UI_PARITY | PENDING | |
| DA-KURSS-UI-0011 | Static HTML | COURSE_LESSON_HTML.kurssArticlesLesson | kurssArticlesLesson (6959 chars) — <h3>Artikuli</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Vācu artikuls ne vienmēr sakrīt ar latviešu dzimti. Tāpēc lietvārdus vislabāk mācīties kopā ar artikulu.</d | kurssArticlesLesson (6339 chars) — <h3>Artikler</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Den tyske artikel falder ikke altid sammen med det engelske kønssystem. Derfor læres navneord bedst sammen | Nav izmaiņu (paritāte OK) | INFO | STRUCTURE_OK | PENDING | |
| DA-KURSS-UI-0012 | Static HTML | COURSE_LESSON_HTML.kurssPronounsLesson | kurssPronounsLesson (3371 chars) — <h3>Vietniekvārdi</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ un Dativ — vietniekvārdu formas.</div> </div> <section class="artikuli-block"> <h | kurssPronounsLesson (3320 chars) — <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info"> <span class="artikuli-info-icon">i</span> <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div> </div> <section class="artikuli-block"> <h4 | Nav izmaiņu (paritāte OK) | INFO | STRUCTURE_OK | PENDING | |
| DA-KURSS-UI-0013 | Static HTML | COURSE_LESSON_HTML.kurssPronunciationLesson | kurssPronunciationLesson (8888 chars) — <h3>Patskaņi — garš un īss</h3> <p class="kurss-lesson-intro">Vācu valodā patskaņi var būt gari vai īsi. Tas ietekmē vārda izrunu.</p> <section class="kurss-lesson-section"> <h4>Garš patskanis</h4> <div class="kurss-exam | kurssPronunciationLesson (7913 chars) — <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="ku | Nav izmaiņu (paritāte OK) | INFO | STRUCTURE_OK | PENDING | |
| DA-KURSS-UI-0014 | Static HTML | COURSE_LESSON_HTML.kurssConsonantsLesson | kurssConsonantsLesson (5105 chars) — <h3>Līdzskaņi un burtu savienojumi</h3> <p class="kurss-lesson-intro">Vācu valodā daži līdzskaņi un burtu savienojumi tiek izrunāti citādi nekā tos raksta. Šajā lekcijā ir svarīgākie piemēri iesācējam.</p> <section class | kurssConsonantsLesson (4476 chars) — <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for beg | Nav izmaiņu (paritāte OK) | INFO | STRUCTURE_OK | PENDING | |
| DA-KURSS-UI-0015 | Static HTML | COURSE_LESSON_HTML.kurssVerbBasicsLesson | kurssVerbBasicsLesson (7050 chars) — <h3>Darbības vārdu pamati</h3> <p class="kurss-lesson-intro">1. lekcijas darbības vārdi un locījumi.</p> <section class="kurss-lesson-section"> <h4>Darbības vārdi</h4> <div class="kurss-examples"><div class="kurss-exampl | kurssVerbBasicsLesson (6241 chars) — <h3>Grundlæggende verber</h3> <p class="kurss-lesson-intro">Verber og bøjninger fra lektion 1.</p> <section class="kurss-lesson-section"> <h4>Verber</h4> <div class="kurss-examples"><div class="kurss-example">kommen — at | Nav izmaiņu (paritāte OK) | INFO | STRUCTURE_OK | PENDING | |
| DA-KURSS-UI-0016 | Static HTML | COURSE_LESSON_HTML.kurssSentenceStructureLesson | kurssSentenceStructureLesson (3573 chars) — <h3>Teikumu uzbūve</h3> <p class="kurss-lesson-intro">Jautājuma teikumā darbības vārds vācu valodā parasti stāv pirmajā vietā.</p> <section class="kurss-lesson-section"> <h4>Piemēri</h4> <div class="kurss-examples"><div | kurssSentenceStructureLesson (3238 chars) — <h3>Sætningsstruktur</h3> <p class="kurss-lesson-intro">I en spørgsmålssætning kommer verbet normalt først på tysk.</p> <section class="kurss-lesson-section"> <h4>Eksempler</h4> <div class="kurss-examples"><div class="ku | Nav izmaiņu (paritāte OK) | INFO | STRUCTURE_OK | PENDING | |
| DA-KURSS-UI-0017 | Static HTML | COURSE_LESSON_HTML.kurssPronounsLesson | er — viņš (Nominativ) | Øh — han | er — han | MEDIUM | TRANSLATION | PENDING | |
| DA-KURSS-UI-0018 | Static HTML | COURSE_LESSON_HTML.kurssPronounsLesson | sie — viņi/viņas; Sie — Jūs (pieklājības) | Slips — de/hende; Slips — dig (høflighed) | sie — de/hende; Sie — De (høflighed) | MEDIUM | TRANSLATION | PENDING | |

## Copy/paste — tikai OWNER_DECISION kolonna (secīgi)

```
DA-KURSS-UI-0001	PENDING	
DA-KURSS-UI-0002	PENDING	
DA-KURSS-UI-0003	PENDING	
DA-KURSS-UI-0004	PENDING	
DA-KURSS-UI-0005	PENDING	
DA-KURSS-UI-0006	PENDING	
DA-KURSS-UI-0007	PENDING	
DA-KURSS-UI-0008	PENDING	
DA-KURSS-UI-0009	PENDING	
DA-KURSS-UI-0010	PENDING	
DA-KURSS-UI-0011	PENDING	
DA-KURSS-UI-0012	PENDING	
DA-KURSS-UI-0013	PENDING	
DA-KURSS-UI-0014	PENDING	
DA-KURSS-UI-0015	PENDING	
DA-KURSS-UI-0016	PENDING	
DA-KURSS-UI-0017	PENDING	
DA-KURSS-UI-0018	PENDING	
```

Aizpildījuma piemērs:

```
DA-KURSS-UI-0009	NELABOT	Menu kartīte OK
DA-KURSS-UI-0017	LABOT	er — han
DA-KURSS-UI-0018	LABOT	sie — de/hende; Sie — De (høflighed)
```