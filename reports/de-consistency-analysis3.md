# DE konsekvences analīze 3

Avots ir `reports/de-consistency-audit.json` un esošais kods. Dati, `www/data`, `languages` un `ui.js` netiek mainīti. Analīze neizvēlas pareizo vācu formu. Sākotnējā audita verdikts paliek PARTIAL, jo `NOT_VERIFIABLE` nav 0.

Audita bāze: zars `cursor/de-consistency-audit-f86b`, datums `2026-10-03`, origin/main `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`.

Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.

## 1. lesson7 izpildes laiks

`data-loader.js` ielādē `./data/{valoda}/courseTrainingCards.js` tikai tad, ja valoda ir iekodētajā sarakstā, datu kopa ir `courseLessons` un fails eksistē. Saraksts: lt, uk, ru, sl, bs, sr, hr, sk, cs, fi, sv, nb, nn, da, nl, lb, fr, it, es, pt, en, hu, is.

`ui.js` `expandExerciseToMicrocards` lesson7 uzvedni veido kā `infinitive + " — " + lv`. Redzamā glosa ir tā klāja `lv` lauks, kuru atgriež `getExerciseSourceCards`. Ja valodas globālis nav definēts, funkcija atgriež `lesson7ExerciseCards` (LV konstante `ui.js`).

| valoda | fails | lesson7 | loader | ui.js lesson7 zars | lesson7 glosa | lesson1–6 klāji failā | ui.js lesson1–6 zars | lesson1–6 glosa | lesson7 verdikts | lesson1–6 verdikts |
|---|---|---|---|---|---|---|---|---|---|---|
| pl | data+www identiski | 16 | nē | jā | LV glosa | 1,2,3,4,5,6 | jā | courseLessons tulkošanas kartītes | LOADER_OMISSION | LOADER_OMISSION |
| ro | data+www identiski | 16 | nē | nē | LV glosa | 1,2,3,4,5,6 | nē | LV glosa | LOADER_OMISSION | LOADER_OMISSION |
| bg | data+www identiski | 16 | nē | nē | LV glosa | 1,2,3,4,5,6 | nē | LV glosa | LOADER_OMISSION | LOADER_OMISSION |
| gr | data+www identiski | 16 | nē | nē | LV glosa | 1,2,3,4,5,6 | nē | LV glosa | LOADER_OMISSION | LOADER_OMISSION |
| tr | data+www identiski | 16 | nē | nē | LV glosa | 1,2,3,4,5,6 | nē | LV glosa | LOADER_OMISSION | LOADER_OMISSION |
| sq | data+www identiski | 16 | nē | nē | LV glosa | 1,2,3,4,5,6 | nē | LV glosa | LOADER_OMISSION | LOADER_OMISSION |
| mk | data+www identiski | 16 | nē | nē | LV glosa | 1,2,3,4,5,6 | nē | LV glosa | LOADER_OMISSION | LOADER_OMISSION |

Secinājums lesson7: visām septiņām valodām verdikts ir **LOADER_OMISSION**. Fails un lesson7 klājs eksistē, bet `data-loader.js` to neielādē, tāpēc globālis paliek nedefinēts un lietotājs redz LV `lesson7ExerciseCards` glosu un LV deklinācijas formas. `pl` ir `ui.js` zars, pārējām sešām zara nav; bez ielādes rezultāts ir tas pats LV kritiens.

lesson1–6 nav tas pats mehānisms. `pl`: `ui.js` zars ir, bet tukšs klājs (fails nav ielādēts) neapstādina funkciju; tā nenokrīt uz LV `lesson1TrainingCards`, bet nolasa `COURSE_LESSON_DATA` tulkošanas kartītes. `ro`, `bg`, `gr`, `tr`, `sq`, `mk`: lesson1–6 zara nav, tāpēc `else if (lang !== "lt")` ņem LV `ui.js` klājus. Arī šīm sešām lesson1–6 verdikts ir **LOADER_OMISSION**, jo mērķa fails netiek ielādēts. **FILE_MISSING** un **OK** šajā septītniekā nav.

- pl lesson7 pirmā kartīte failā lv=`undefined`; ui.js LV lv=`"jautāt"`; lesson1 front failā=`"Idziesz ze mną?"`; ui.js lesson1 front=`"Vai tu nāc?"`.
- ro lesson7 pirmā kartīte failā lv=`undefined`; ui.js LV lv=`"jautāt"`; lesson1 front failā=`"Vii cu mine?"`; ui.js lesson1 front=`"Vai tu nāc?"`.
- bg lesson7 pirmā kartīte failā lv=`undefined`; ui.js LV lv=`"jautāt"`; lesson1 front failā=`"Ще дойдеш ли с мен"`; ui.js lesson1 front=`"Vai tu nāc?"`.
- gr lesson7 pirmā kartīte failā lv=`undefined`; ui.js LV lv=`"jautāt"`; lesson1 front failā=`"Είσαι από Αθήνα • "`; ui.js lesson1 front=`"Vai tu nāc?"`.
- tr lesson7 pirmā kartīte failā lv=`undefined`; ui.js LV lv=`"jautāt"`; lesson1 front failā=`"Idziesz ze mną?"`; ui.js lesson1 front=`"Vai tu nāc?"`.
- sq lesson7 pirmā kartīte failā lv=`undefined`; ui.js LV lv=`"jautāt"`; lesson1 front failā=`"Idziesz ze mną?"`; ui.js lesson1 front=`"Vai tu nāc?"`.
- mk lesson7 pirmā kartīte failā lv=`undefined`; ui.js LV lv=`"jautāt"`; lesson1 front failā=`"Ќе дојдеш ли со мене"`; ui.js lesson1 front=`"Vai tu nāc?"`.

## 2. fr 204 un es 88 courseLessons MISSING

Trūkstošie lauki visi ir `legacyHtml/kurss-example[i]`. Legacy HTML nav `sections` indeksa; sadalījums ir pa `COURSE_LESSON_HTML` atslēgu. Rindas ir data un www; šie faili ir baitiski identiski, tāpēc katra atslēga ir divreiz.

### fr

| HTML atslēga | LV piemēri | mērķa piemēri | MISSING rindas | lielākais trūkstošais indekss |
|---|---:|---:|---:|---:|
| kurssArticlesLesson | 68 | 64 | 8 | 67 |
| kurssLesson1 | 40 | 34 | 10 | 39 |
| kurssLesson2 | 53 | 27 | 52 | 52 |
| kurssLesson4 | 62 | 54 | 14 | 60 |
| kurssLesson5 | 54 | 53 | 2 | 53 |
| kurssSentenceStructureLesson | 35 | 34 | 2 | 34 |
| kurssVerbBasicsLesson | 88 | 30 | 116 | 87 |

MISSING rindas, kuru indekss ir ≥ mērķa saraksta garums: 204. Indekss iekš mērķa saraksta: 0.

Secinājums fr: **TARGET_HAS_FEWER_EXAMPLES**.

- fr `kurssArticlesLesson` `legacyHtml/kurss-example[64]` LV piemēri=68 mērķa piemēri=64 LV=`"das Mädchen "` LANG=`null`
- fr `kurssArticlesLesson` `legacyHtml/kurss-example[65]` LV piemēri=68 mērķa piemēri=64 LV=`"das Auto "` LANG=`null`
- fr `kurssArticlesLesson` `legacyHtml/kurss-example[66]` LV piemēri=68 mērķa piemēri=64 LV=`"der Käse "` LANG=`null`
- fr `kurssArticlesLesson` `legacyHtml/kurss-example[67]` LV piemēri=68 mērķa piemēri=64 LV=`"die Gabel "` LANG=`null`
- fr `kurssLesson1` `legacyHtml/kurss-example[35]` LV piemēri=40 mērķa piemēri=34 LV=`"du kommst "` LANG=`null`
- fr `kurssLesson1` `legacyHtml/kurss-example[36]` LV piemēri=40 mērķa piemēri=34 LV=`"er singt "` LANG=`null`
- fr `kurssLesson1` `legacyHtml/kurss-example[37]` LV piemēri=40 mērķa piemēri=34 LV=`"er kommt "` LANG=`null`
- fr `kurssLesson1` `legacyHtml/kurss-example[38]` LV piemēri=40 mērķa piemēri=34 LV=`"sie kommt "` LANG=`null`
- fr `kurssLesson1` `legacyHtml/kurss-example[39]` LV piemēri=40 mērķa piemēri=34 LV=`"sie kommen "` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[27]` LV piemēri=53 mērķa piemēri=27 LV=`"du arbeitest"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[28]` LV piemēri=53 mērķa piemēri=27 LV=`"er arbeitet"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[29]` LV piemēri=53 mērķa piemēri=27 LV=`"sie arbeitet"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[30]` LV piemēri=53 mērķa piemēri=27 LV=`"wir arbeiten"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[31]` LV piemēri=53 mērķa piemēri=27 LV=`"ihr arbeitet"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[32]` LV piemēri=53 mērķa piemēri=27 LV=`"sie arbeiten"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[33]` LV piemēri=53 mērķa piemēri=27 LV=`"ich rechne"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[34]` LV piemēri=53 mērķa piemēri=27 LV=`"du rechnest"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[35]` LV piemēri=53 mērķa piemēri=27 LV=`"er rechnet"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[36]` LV piemēri=53 mērķa piemēri=27 LV=`"sie rechnet"` LANG=`null`
- fr `kurssLesson2` `legacyHtml/kurss-example[37]` LV piemēri=53 mērķa piemēri=27 LV=`"wir rechnen"` LANG=`null`

### es

| HTML atslēga | LV piemēri | mērķa piemēri | MISSING rindas | lielākais trūkstošais indekss |
|---|---:|---:|---:|---:|
| kurssArticlesLesson | 68 | 63 | 10 | 67 |
| kurssLesson1 | 40 | 34 | 10 | 39 |
| kurssLesson2 | 53 | 27 | 52 | 52 |
| kurssLesson4 | 62 | 54 | 14 | 60 |
| kurssLesson5 | 54 | 53 | 2 | 53 |

MISSING rindas, kuru indekss ir ≥ mērķa saraksta garums: 88. Indekss iekš mērķa saraksta: 0.

Secinājums es: **TARGET_HAS_FEWER_EXAMPLES**.

- es `kurssArticlesLesson` `legacyHtml/kurss-example[63]` LV piemēri=68 mērķa piemēri=63 LV=`"der Mond "` LANG=`null`
- es `kurssArticlesLesson` `legacyHtml/kurss-example[64]` LV piemēri=68 mērķa piemēri=63 LV=`"das Mädchen "` LANG=`null`
- es `kurssArticlesLesson` `legacyHtml/kurss-example[65]` LV piemēri=68 mērķa piemēri=63 LV=`"das Auto "` LANG=`null`
- es `kurssArticlesLesson` `legacyHtml/kurss-example[66]` LV piemēri=68 mērķa piemēri=63 LV=`"der Käse "` LANG=`null`
- es `kurssArticlesLesson` `legacyHtml/kurss-example[67]` LV piemēri=68 mērķa piemēri=63 LV=`"die Gabel "` LANG=`null`
- es `kurssLesson1` `legacyHtml/kurss-example[35]` LV piemēri=40 mērķa piemēri=34 LV=`"du kommst "` LANG=`null`
- es `kurssLesson1` `legacyHtml/kurss-example[36]` LV piemēri=40 mērķa piemēri=34 LV=`"er singt "` LANG=`null`
- es `kurssLesson1` `legacyHtml/kurss-example[37]` LV piemēri=40 mērķa piemēri=34 LV=`"er kommt "` LANG=`null`
- es `kurssLesson1` `legacyHtml/kurss-example[38]` LV piemēri=40 mērķa piemēri=34 LV=`"sie kommt "` LANG=`null`
- es `kurssLesson1` `legacyHtml/kurss-example[39]` LV piemēri=40 mērķa piemēri=34 LV=`"sie kommen "` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[27]` LV piemēri=53 mērķa piemēri=27 LV=`"du arbeitest"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[28]` LV piemēri=53 mērķa piemēri=27 LV=`"er arbeitet"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[29]` LV piemēri=53 mērķa piemēri=27 LV=`"sie arbeitet"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[30]` LV piemēri=53 mērķa piemēri=27 LV=`"wir arbeiten"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[31]` LV piemēri=53 mērķa piemēri=27 LV=`"ihr arbeitet"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[32]` LV piemēri=53 mērķa piemēri=27 LV=`"sie arbeiten"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[33]` LV piemēri=53 mērķa piemēri=27 LV=`"ich rechne"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[34]` LV piemēri=53 mērķa piemēri=27 LV=`"du rechnest"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[35]` LV piemēri=53 mērķa piemēri=27 LV=`"er rechnet"` LANG=`null`
- es `kurssLesson2` `legacyHtml/kurss-example[36]` LV piemēri=53 mērķa piemēri=27 LV=`"sie rechnet"` LANG=`null`

## 3. UNCLASSIFIED 758

Prioritāte, bez pārklāšanās: `PRONUNCIATION_NOTE`, ja LV vai LANG satur `(...)`; citādi `REFLEXIVE_MISSING`, ja `\bsich\b` ir tikai vienā pusē; citādi `PRONOUN_TRANSLATED`, ja LV pēc apgriešanas sākas ar ich/du/er/sie/es/wir/ihr/ihn/ihm/ihnen/mich/dich/sich/mir/dir; citādi `SHORT_REPLACEMENT`, ja LV ir ne vairāk kā 3 vārdi; citādi `OTHER`.

| kopa | rindas |
|---|---:|
| PRONUNCIATION_NOTE | 404 |
| REFLEXIVE_MISSING | 2 |
| PRONOUN_TRANSLATED | 84 |
| SHORT_REPLACEMENT | 244 |
| OTHER | 24 |
| summa | 758 |

### PRONUNCIATION_NOTE

Pirmie 10 pēc stabilas kārtošanas.

- bg `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[11]` koks=`data` LV=`"noch (noh) "` LANG=`"Noch (nokh) "`
- bg `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[77]` koks=`data` LV=`"kürzer (kurcer) "` LANG=`"Kürzer (kurzer)"`
- bg `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[78]` koks=`data` LV=`"Kunst (kunst) "` LANG=`"Kunst"`
- bg `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[79]` koks=`data` LV=`"Künste (künste) "` LANG=`"Künste"`
- bg `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[80]` koks=`data` LV=`"Mutter (muter) "` LANG=`"Mutter (mutter) "`
- bg `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[84]` koks=`data` LV=`"Haus (haus) "` LANG=`"Haus (house)"`
- bg `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[98]` koks=`data` LV=`"arbeiten (arbaiten) "` LANG=`"Arbeiten (arbeiten)"`
- bg `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[11]` koks=`www` LV=`"noch (noh) "` LANG=`"Noch (nokh) "`
- bg `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[77]` koks=`www` LV=`"kürzer (kurcer) "` LANG=`"Kürzer (kurzer)"`
- bg `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[78]` koks=`www` LV=`"Kunst (kunst) "` LANG=`"Kunst"`

### REFLEXIVE_MISSING

Kopā 2 rindas, tāpēc piemēru ir 2.

- sr `a1` `a1-sitzen` `study.comparison[3].word` koks=`data` LV=`"setzen"` LANG=`"sich setzen"`
- sr `a1` `a1-sitzen` `study.comparison[3].word` koks=`www` LV=`"setzen"` LANG=`"sich setzen"`

### PRONOUN_TRANSLATED

Pirmie 10 pēc stabilas kārtošanas.

- da `courseLessons` `kurssLesson1` `legacyHtml/kurss-example[29]` koks=`data` LV=`"ich komme"` LANG=`"ich → -Ich komme"`
- da `courseLessons` `kurssLesson1` `legacyHtml/kurss-example[30]` koks=`data` LV=`"du kommst"` LANG=`"du → -Du kommst"`
- da `courseLessons` `kurssLesson1` `legacyHtml/kurss-example[31]` koks=`data` LV=`"er kommt"` LANG=`"er / sie → -Er kommer"`
- da `courseLessons` `kurssLesson1` `legacyHtml/kurss-example[32]` koks=`data` LV=`"wir kommen"` LANG=`"wir → -Wir kommen"`
- da `courseLessons` `kurssLesson1` `legacyHtml/kurss-example[35]` koks=`data` LV=`"du kommst "` LANG=`"ich komme<br>"`
- da `courseLessons` `kurssLesson1` `legacyHtml/kurss-example[36]` koks=`data` LV=`"er singt "` LANG=`"du kommst<br>"`
- da `courseLessons` `kurssLesson1` `legacyHtml/kurss-example[38]` koks=`data` LV=`"sie kommt "` LANG=`"wir kommen"`
- da `courseLessons` `kurssLesson2` `legacyHtml/kurss-example[27]` koks=`data` LV=`"du arbeitest"` LANG=`"Du arbeite"`
- da `courseLessons` `kurssLesson2` `legacyHtml/kurss-example[28]` koks=`data` LV=`"er arbeitet"` LANG=`"Er arbeit"`
- da `courseLessons` `kurssLesson2` `legacyHtml/kurss-example[29]` koks=`data` LV=`"sie arbeitet"` LANG=`"Sie arbeit"`

### SHORT_REPLACEMENT

Pirmie 10 pēc stabilas kārtošanas.

- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[54]` koks=`data` LV=`"das Häuschen "` LANG=`"Das Hoixen"`
- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` koks=`data` LV=`"das Auto "` LANG=`"Das auto"`
- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[54]` koks=`www` LV=`"das Häuschen "` LANG=`"Das Hoixen"`
- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` koks=`www` LV=`"das Auto "` LANG=`"Das auto"`
- da `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[16]` koks=`data` LV=`"der August "` LANG=`"Passer til august"`
- da `courseLessons` `kurssLesson2` `legacyHtml/kurss-example[18]` koks=`data` LV=`"antworten "` LANG=`"was tut er? "`
- da `courseLessons` `kurssLesson2` `legacyHtml/kurss-example[19]` koks=`data` LV=`"rechnen "` LANG=`"was tun sie? "`
- da `courseLessons` `kurssLesson2` `legacyHtml/kurss-example[20]` koks=`data` LV=`"zeichnen "` LANG=`"aber "`
- da `courseLessons` `kurssLesson3` `legacyHtml/kurss-example[18]` koks=`data` LV=`"die Bank "` LANG=`"der Tisch "`
- da `courseLessons` `kurssLesson3` `legacyHtml/kurss-example[19]` koks=`data` LV=`"eine Bank "` LANG=`"ein Tisch "`

### OTHER

Kopā 24 rindas, tāpēc piemēru ir 24.

- da `courseLessons` `kurssLesson3` `legacyHtml/kurss-example[21]` koks=`data` LV=`"liegt hier ein Buch? "` LANG=`"eine Bank "`
- da `courseLessons` `kurssLesson4` `legacyHtml/kurss-example[55]` koks=`data` LV=`"der Federhalter ist klein"` LANG=`"ihr nehmt"`
- da `courseLessons` `kurssLesson4` `legacyHtml/kurss-example[56]` koks=`data` LV=`"die Feder ist klein"` LANG=`"sie nehmen"`
- da `courseLessons` `kurssLesson5` `legacyHtml/kurss-example[46]` koks=`data` LV=`"Wen fragt der Lehrer?"` LANG=`"sie sitzen"`
- da `courseLessons` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"Nein, ich spiele nicht, ich arbeite. "` LANG=`"Spielst du? "`
- da `courseLessons` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[20]` koks=`data` LV=`"Nein, ich arbeite nicht, ich singe. "` LANG=`"Arbeitest du? "`
- da `courseLessons` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[25]` koks=`data` LV=`"Paul spielt, aber Marie singt. "` LANG=`"Sie singt. "`
- da `courseLessons` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Nein, wir singen nicht, wir arbeiten. "` LANG=`"Singt ihr? "`
- da `courseLessons` `kurssLesson3` `legacyHtml/kurss-example[21]` koks=`www` LV=`"liegt hier ein Buch? "` LANG=`"eine Bank "`
- da `courseLessons` `kurssLesson4` `legacyHtml/kurss-example[55]` koks=`www` LV=`"der Federhalter ist klein"` LANG=`"ihr nehmt"`
- da `courseLessons` `kurssLesson4` `legacyHtml/kurss-example[56]` koks=`www` LV=`"die Feder ist klein"` LANG=`"sie nehmen"`
- da `courseLessons` `kurssLesson5` `legacyHtml/kurss-example[46]` koks=`www` LV=`"Wen fragt der Lehrer?"` LANG=`"sie sitzen"`
- da `courseLessons` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[17]` koks=`www` LV=`"Nein, ich spiele nicht, ich arbeite. "` LANG=`"Spielst du? "`
- da `courseLessons` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[20]` koks=`www` LV=`"Nein, ich arbeite nicht, ich singe. "` LANG=`"Arbeitest du? "`
- da `courseLessons` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[25]` koks=`www` LV=`"Paul spielt, aber Marie singt. "` LANG=`"Sie singt. "`
- da `courseLessons` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[27]` koks=`www` LV=`"Nein, wir singen nicht, wir arbeiten. "` LANG=`"Singt ihr? "`
- es `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[45]` koks=`data` LV=`" das Zentrum, das Museum"` LANG=`" das Hotel"`
- es `courseLessons` `lesson13` `kurssLesson13.sections[0].items[6]` koks=`data` LV=`"Das Bein ist dick."` LANG=`"La pierna es gruesa."`
- es `courseLessons` `lesson13` `kurssLesson13.sections[0].items[7]` koks=`data` LV=`"Der Fuß ist dünn."` LANG=`"El pie es delgado."`
- es `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[45]` koks=`www` LV=`" das Zentrum, das Museum"` LANG=`" das Hotel"`
- es `courseLessons` `lesson13` `kurssLesson13.sections[0].items[6]` koks=`www` LV=`"Das Bein ist dick."` LANG=`"La pierna es gruesa."`
- es `courseLessons` `lesson13` `kurssLesson13.sections[0].items[7]` koks=`www` LV=`"Der Fuß ist dünn."` LANG=`"El pie es delgado."`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[22]` koks=`data` LV=`" die Freiheit, die Gesundheit"` LANG=`" la Freiheit, la Gesundheit"`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[22]` koks=`www` LV=`" die Freiheit, die Gesundheit"` LANG=`" la Freiheit, la Gesundheit"`

## 4. DE aplēse NOT_VERIFIABLE rakstzīmēs

ESTIMATE. Audita `NOT_VERIFIABLE_CHARS` 4287734 ir LV teksts, saskaitīts katrai no 31 mērķvalodām un abiem kokiem. Viena koka LV masa ir 69157 rakstzīmes un 178 lauki; 69157 × 2 × 31 = 4287734. Tā nav mērķa HTML masa.

Leksika: visi vārdi no LV A1–C2 `de` / `de_article` / `de_plural` / study DE laukiem, `sentences.de`, verbu formu `de`, plus fiksēts vācu funkcijvārdu saraksts. Pirms meklēšanas no teksta tiek izņemti HTML tagi, lai `details`, `training` un `block` klases vārdos netiktu skaitīti. Rakstzīme skaitās DE, ja tā ir vismaz 2 burtu vārdā, kura mazie burti ir šajā leksikā. Latviešu burti ar diakritiku šajā skaitītājā neietilpst. `es` un `man` ir gan vācu funkcijvārdi, gan latviešu vārdi; tie paliek aplēsē. Saucējs joprojām ir audita neapstrādātā masa, ieskaitot tagus.

Viena LV koka aplēse: 1598 DE rakstzīmes no 69157 neapstrādātām rakstzīmēm (21129 pēc tagu izņemšanas). Vienai valodai (data+www): 3196 / 138314. Kopā 31 valodā: 99076 / 4287734.

COVERAGE_DE_ESTIMATE = aplēstās DE rakstzīmes / audita NOT_VERIFIABLE rakstzīmes = 2.3107%. Skaitlis ir vienāds visām valodām, jo masa ir tas pats LV teksts.

CHECKED_CHARS 23442586 ir iepriekšējā --chars-only mērījums un šeit netiek pārrēķināts. Ja aplēstās DE rakstzīmes pieskaita pārbaudītajām, globālā COVERAGE_WITH_DE_ESTIMATE = 84.895%. Arī tas ir ESTIMATE.

| valoda | NOT_VERIFIABLE_CHARS | ESTIMATE_DE_CHARS | COVERAGE_DE_ESTIMATE |
|---|---:|---:|---:|
| bg | 138314 | 3196 | 2.3107% |
| bs | 138314 | 3196 | 2.3107% |
| cs | 138314 | 3196 | 2.3107% |
| da | 138314 | 3196 | 2.3107% |
| en | 138314 | 3196 | 2.3107% |
| es | 138314 | 3196 | 2.3107% |
| et | 138314 | 3196 | 2.3107% |
| fi | 138314 | 3196 | 2.3107% |
| fr | 138314 | 3196 | 2.3107% |
| gr | 138314 | 3196 | 2.3107% |
| hr | 138314 | 3196 | 2.3107% |
| hu | 138314 | 3196 | 2.3107% |
| is | 138314 | 3196 | 2.3107% |
| it | 138314 | 3196 | 2.3107% |
| lb | 138314 | 3196 | 2.3107% |
| lt | 138314 | 3196 | 2.3107% |
| mk | 138314 | 3196 | 2.3107% |
| nb | 138314 | 3196 | 2.3107% |
| nl | 138314 | 3196 | 2.3107% |
| nn | 138314 | 3196 | 2.3107% |
| pl | 138314 | 3196 | 2.3107% |
| pt | 138314 | 3196 | 2.3107% |
| ro | 138314 | 3196 | 2.3107% |
| ru | 138314 | 3196 | 2.3107% |
| sk | 138314 | 3196 | 2.3107% |
| sl | 138314 | 3196 | 2.3107% |
| sq | 138314 | 3196 | 2.3107% |
| sr | 138314 | 3196 | 2.3107% |
| sv | 138314 | 3196 | 2.3107% |
| tr | 138314 | 3196 | 2.3107% |
| uk | 138314 | 3196 | 2.3107% |

Biežākie leksikas trāpījumi vienā LV kokā (rakstzīmes): der=96, fragen=42, sie=42, nicht=35, das=33, ir=32, die=30, stehen=30, schüler=28, vai=27, arbeiten=24, da=24, kommen=24, nehmen=24, zeichnen=24, ich=21, rechnen=21, dativ=20, ja=20, komm=20.

## 5. CASE grupas un pirmais burts

Predikāts: LV un mērķa virkne ir vienāda garuma, atšķiras tikai pirmā koda vienība, LV pirmais burts ir mazais, mērķa pirmais burts ir tā lielais variants, pārējais ir identisks.

| grupa | rindas | predikāts turas | izņēmumi | izņēmumi, kas pēc beigu tukšuma noņemšanas turas |
|---|---:|---:|---:|---:|
| CASE_ONLY | 2548 | 2548 | 0 | 0 |
| CASE_PLUS_TRAILING_SPACE | 794 | 0 | 794 | 792 |
| CASE_ONLY_OTHER | 150 | 0 | 150 | 0 |

CASE_ONLY izņēmumu nav: visās 2548 rindās LV sākas ar mazo burtu un mērķa vērtība ir tā pati virkne ar lielo pirmo burtu.
CASE_PLUS_TRAILING_SPACE raw predikāts neizpildās 794 rindās, jo garums atšķiras par beigu tukšumu. Pēc beigu tukšuma noņemšanas predikāts turas 792 rindās. Īstie izņēmumi ir rindas, kas neizpildās arī pēc tam.
CASE_ONLY_OTHER ir iekšēja reģistra maiņa, nevis tikai pirmais burts, tāpēc visas 150 rindas ir izņēmumi.

### CASE_ONLY izņēmumi

Izņēmumu nav.

### CASE_PLUS_TRAILING_SPACE izņēmumi

- en `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"Sie "` LANG=`"sie"`
- en `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[17]` koks=`www` LV=`"Sie "` LANG=`"sie"`

### CASE_ONLY_OTHER izņēmumi

- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Dich</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">ihn</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Ihn</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[28]` koks=`data` LV=`"Wir mögen <span class=\"case-red\">euch</span>. "` LANG=`"Wir mögen <span class=\"case-red\">Euch</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[29]` koks=`data` LV=`"Ich helfe <span class=\"case-green\">dir</span>. "` LANG=`"Ich helfe <span class=\"case-green\">Dir</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[30]` koks=`data` LV=`"Ich gebe <span class=\"case-green\">ihm</span> ein Buch. "` LANG=`"Ich gebe <span class=\"case-green\">Ihm</span> ein Buch. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[31]` koks=`data` LV=`"Wir danken <span class=\"case-green\">euch</span>. "` LANG=`"Wir danken <span class=\"case-green\">Euch</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`www` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Dich</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[27]` koks=`www` LV=`"Ich sehe <span class=\"case-red\">ihn</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Ihn</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[28]` koks=`www` LV=`"Wir mögen <span class=\"case-red\">euch</span>. "` LANG=`"Wir mögen <span class=\"case-red\">Euch</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[29]` koks=`www` LV=`"Ich helfe <span class=\"case-green\">dir</span>. "` LANG=`"Ich helfe <span class=\"case-green\">Dir</span>. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[30]` koks=`www` LV=`"Ich gebe <span class=\"case-green\">ihm</span> ein Buch. "` LANG=`"Ich gebe <span class=\"case-green\">Ihm</span> ein Buch. "`
- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[31]` koks=`www` LV=`"Wir danken <span class=\"case-green\">euch</span>. "` LANG=`"Wir danken <span class=\"case-green\">Euch</span>. "`
- fi `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Dich</span>. "`
- fi `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">ihn</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Ihn</span>. "`
- fi `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[28]` koks=`data` LV=`"Wir mögen <span class=\"case-red\">euch</span>. "` LANG=`"Wir mögen <span class=\"case-red\">Euch</span>. "`

## 6. Verifikācija

`git diff -- data www/data languages ui.js` šīs palaišanas laikā ir tukšs.

Ģenerators neliek atskaitē laikspiedogu. Divu secīgu palaišanu SHA ir jāsalīdzina ārpus faila.

## 7. kurss-example izlīdzināšana

Izlīdzināšana ir Needleman–Wunsch. Atslēga ir izvilktās DE puses galva pirms ` (`, mazajiem burtiem, sakļautām atstarpēm. Vienādas atslēgas dod +2, atšķirīgas −1, iztrūkums −1. Vienāda rezultāta gadījumā priekšroka ir diagonālei, tad LV iztrūkumam. Pēc izlīdzināšanas pāris tiek salīdzināts ar audita izvilkumu (`legacyExampleDe` / `legacyExampleLang`), bez normalizācijas.

Sapludināts ieraksts: mērķa atslēga satur divu secīgu LV atslēgu savienojumu ar atstarpi un nav vienāda ar nevienu no tām. Trūkstošs ieraksts: izlīdzināšanas iztrūkums LV pusē, un LV piemērs ir pārbaudāms DE lauks.

www courseLessons atšķiras no data: nevienā valodā. Izlīdzināšana mērīta data kokā; identiskam www kokam abu koku skaits ir divkāršs.

| mērs | data koks | data+www, ja www identisks |
|---|---:|---:|
| INDEX_TEXT | abi koki 5230 | 5230 |
| INDEX_MISSING | abi koki 292 | 292 |
| INDEX_EXTRA | abi koki 2 | 2 |
| ALIGNED_MATCH | 15105 | 30210 |
| ALIGNED_MISMATCH | 2840 | 5680 |
| ALIGNED_MISSING | 159 | 318 |
| ALIGNED_EXTRA | 27 | 54 |
| MERGED | 250 | 500 |

INDEX rindu skaits jau ir abu koku summa no JSON. ALIGNED un MERGED ir data koka mērījums. MERGED ir gadījumi, nevis unikāli paraugi: unikālo (atslēga, LV pāris, mērķa atslēga) paraugu ir 9.
fr data koks pēc izlīdzināšanas: MATCH 331, ALIGNED_MISMATCH 146, ALIGNED_MISSING 107.
es data koks pēc izlīdzināšanas: MATCH 456, ALIGNED_MISMATCH 85, ALIGNED_MISSING 43.

### ALIGNED_MISMATCH piemēri

- bg `kurssArticlesLesson` LV[39]↔LANG[39] LV=`"die Nation "` LANG=`"Умри нация"`
- bs `kurssPronunciationLesson` LV[11]↔LANG[11] LV=`"bald (balt) "` LANG=`"ćelav (bijel)"`
- cs `kurssConsonantsLesson` LV[35]↔LANG[35] LV=`"Villa (villa) "` LANG=`"Vila (vila)"`
- da `kurssArticlesLesson` LV[16]↔LANG[16] LV=`"der August "` LANG=`"Passer til august"`
- en `kurssPronounsLesson` LV[13]↔LANG[13] LV=`"es "` LANG=`"me"`
- es `kurssLesson1` LV[23]↔LANG[23] LV=`" -e"` LANG=`" -ich komme"`
- fr `kurssArticlesLesson` LV[15]↔LANG[15] LV=`"der Montag "` LANG=`"Convient du lundi au lundi"`
- gr `kurssArticlesLesson` LV[44]↔LANG[44] LV=`" das Instrument"` LANG=`" das Όργανο"`
- hr `kurssArticlesLesson` LV[1]↔LANG[1] LV=`"die Tür "` LANG=`"Die Tür-vrata"`
- hu `kurssArticlesLesson` LV[16]↔LANG[16] LV=`"der August "` LANG=`"Augusztus"`
- it `kurssArticlesLesson` LV[17]↔LANG[17] LV=`"der Sommer "` LANG=`"Der zomer "`
- lb `kurssArticlesLesson` LV[8]↔LANG[8] LV=`" der Lehrer, der Arzt"` LANG=`" Professeur De Professeur, De Docteur"`
- mk `kurssArticlesLesson` LV[14]↔LANG[14] LV=`"der Vater "` LANG=`"Дер Ватер"`
- nl `kurssArticlesLesson` LV[17]↔LANG[17] LV=`"der Sommer "` LANG=`"Der zomer "`
- pl `kurssPronounsLesson` LV[26]↔LANG[26] LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"To jest <span class=\"case-red\">dich</span>. "`
- pt `kurssArticlesLesson` LV[16]↔LANG[16] LV=`"der August "` LANG=`"Der agosto"`
- ro `kurssPronounsLesson` LV[14]↔LANG[14] LV=`"uns "` LANG=`"Noi"`
- ru `kurssArticlesLesson` LV[13]↔LANG[13] LV=`"der Mann "` LANG=`"Дер Манн"`
- sk `kurssPronounsLesson` LV[26]↔LANG[26] LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"To jest <span class=\"case-red\">Dich</span>. "`
- sl `kurssPronounsLesson` LV[2]↔LANG[2] LV=`"er "` LANG=`"Hm"`

### Sapludinātie

- bg `kurssLesson1` LV[18]+LV[19] → LANG[32] atslēga=`"wir kommen"`
- bg `kurssLesson3` LV[29]+LV[30] → LANG[8] atslēga=`"wie ist das buch?<br>das buch ist dick."`
- bg `kurssLesson3` LV[29]+LV[30] → LANG[9] atslēga=`"wie ist das heft?<br>das heft ist dünn."`
- bg `kurssLesson3` LV[29]+LV[30] → LANG[10] atslēga=`"wie ist die bank?<br>die bank ist niedrig."`
- bg `kurssLesson3` LV[29]+LV[30] → LANG[11] atslēga=`"wie ist der tisch?<br>der tisch ist hoch."`
- bg `kurssLesson3` LV[30]+LV[31] → LANG[8] atslēga=`"wie ist das buch?<br>das buch ist dick."`
- bg `kurssLesson5` LV[18]+LV[19] → LANG[5] atslēga=`"ist der schüler klein oder groß? er ist klein."`
- bg `kurssLesson7` LV[23]+LV[24] → LANG[4] atslēga=`"hans und olga, zählt die teller! was tun hans und olga? sie zählen die teller."`
- bs `kurssLesson1` LV[18]+LV[19] → LANG[32] atslēga=`"wir kommen"`
- bs `kurssLesson3` LV[29]+LV[30] → LANG[8] atslēga=`"wie ist das buch?<br>das buch ist dick."`

### Trūkstošie pēc izlīdzināšanas

- da `kurssLesson4` LV[54] `" Marie geht hinaus"`
- da `kurssLesson4` LV[55] `"der Federhalter ist klein"`
- da `kurssLesson4` LV[56] `"die Feder ist klein"`
- da `kurssLesson4` LV[57] `"das Messer ist klein"`
- da `kurssLesson4` LV[58] `"die Messer sind klein"`
- da `kurssLesson4` LV[59] `"der Federhalter ist nicht weiß"`
- da `kurssLesson4` LV[60] `"das Messer ist nicht scharf"`
- da `kurssLesson5` LV[53] `"Das Mädchen geht dann hinaus und arbeitet."`
- da `kurssSentenceStructureLesson` LV[34] `"Sie kommen, sie fragen, sie antworten, sie arbeiten, sie spielen, sie singen, sie gehen. "`
- es `kurssArticlesLesson` LV[24] `" die Mannschaft"`

## 8. Izruna iekavās

Tikai `kurssPronunciationLesson` un `kurssConsonantsLesson`. Salīdzināmā vācu daļa ir teksts pirms pirmā ` (`. Iekavu saturs ir `PRONUNCIATION_LOCAL` un netiek salīdzināts ar LV.

Data kokā pēc izlīdzināšanas vācu galva sakrīt un atšķiras tikai iekavu saturs: 207. Tās ir PRONUNCIATION_LOCAL. Galvas atšķiras: 642. Abu koku PRONUNCIATION_LOCAL, ja www ir identisks: 414.

`ALIGNED_MISMATCH` 7. sadaļā joprojām skaita pilnas virknes atšķirību. Pēc šī likuma no data koka ALIGNED_MISMATCH jāatskaita izrunas iekavas: 2633.

- bg `kurssPronunciationLesson` galva=`"Garten"` LV iekavas=`"garten"` LANG iekavas=`"градина"`
- bg `kurssPronunciationLesson` galva=`"Kunst"` LV iekavas=`"kunst"` LANG iekavas=`null`
- bg `kurssPronunciationLesson` galva=`"Künste"` LV iekavas=`"künste"` LANG iekavas=`null`
- bg `kurssPronunciationLesson` galva=`"Mutter"` LV iekavas=`"muter"` LANG iekavas=`"mutter"`
- bg `kurssPronunciationLesson` galva=`"Haus"` LV iekavas=`"haus"` LANG iekavas=`"house"`
- cs `kurssConsonantsLesson` galva=`"Nacht"` LV iekavas=`"naht"` LANG iekavas=`"nacht"`
- cs `kurssPronunciationLesson` galva=`"Mütter"` LV iekavas=`"mutter"` LANG iekavas=`"müter"`
- da `kurssConsonantsLesson` galva=`"Zink"` LV iekavas=`"cink"` LANG iekavas=`"zink"`
- da `kurssPronunciationLesson` galva=`"Feld"` LV iekavas=`"felt"` LANG iekavas=`"filt"`
- da `kurssPronunciationLesson` galva=`"Mütter"` LV iekavas=`"mutter"` LANG iekavas=`"mumler"`

## 9. NOT_VERIFIABLE no mērķa HTML un vācu salas

Šeit NOT_VERIFIABLE tiek rēķināts no katras mērķvalodas paša `courseLessons.js` ar to pašu izvilkuma likumu, nevis no LV. ESTIMATE ir tā pati leksikas aplēse šajā mērķa masā pēc HTML tagu izņemšanas. GERMAN_ISLAND_CANDIDATES ir heuristika: vācu leksikas vārdi garumā ≥ 4, kas nav funkcijvārdi un stāv redzamajā HTML atlikumā ārpus `kurss-example` un conjugation `<strong>` iekšienes. Vienādi rakstīts tulkojuma vārds, piemēram artikel vai grammatik, paliek kandidāts.

| valoda | mērķa lauki | mērķa rakstzīmes | ESTIMATE_DE_CHARS | COVERAGE_DE_ESTIMATE | salas | unikāli | arī LV | tikai mērķī |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| bg | 180 | 69874 | 1238 | 1.7718% | 46 | 34 | 34 | 0 |
| bs | 134 | 68614 | 1360 | 1.9821% | 49 | 35 | 33 | 2 |
| cs | 132 | 68880 | 1370 | 1.989% | 43 | 30 | 30 | 0 |
| da | 106 | 61323 | 1349 | 2.1998% | 81 | 57 | 33 | 24 |
| en | 145 | 62495 | 1547 | 2.4754% | 80 | 51 | 31 | 20 |
| es | 169 | 66583 | 1977 | 2.9692% | 83 | 56 | 33 | 23 |
| et | 84 | 67761 | 1123 | 1.6573% | 47 | 35 | 33 | 2 |
| fi | 122 | 68541 | 1380 | 2.0134% | 48 | 35 | 33 | 2 |
| fr | 129 | 65733 | 1919 | 2.9194% | 112 | 75 | 31 | 44 |
| gr | 166 | 70734 | 1216 | 1.7191% | 29 | 23 | 23 | 0 |
| hr | 187 | 69995 | 1211 | 1.7301% | 42 | 31 | 31 | 0 |
| hu | 130 | 68827 | 1200 | 1.7435% | 38 | 27 | 25 | 2 |
| is | 122 | 68543 | 1376 | 2.0075% | 47 | 35 | 33 | 2 |
| it | 177 | 69178 | 1586 | 2.2926% | 50 | 35 | 33 | 2 |
| lb | 177 | 69164 | 1605 | 2.3206% | 52 | 39 | 34 | 5 |
| lt | 178 | 69786 | 1626 | 2.33% | 51 | 36 | 34 | 2 |
| mk | 191 | 70047 | 1212 | 1.7303% | 42 | 31 | 31 | 0 |
| nb | 122 | 68543 | 1376 | 2.0075% | 47 | 35 | 33 | 2 |
| nl | 177 | 69165 | 1608 | 2.3249% | 51 | 36 | 34 | 2 |
| nn | 122 | 68543 | 1376 | 2.0075% | 47 | 35 | 33 | 2 |
| pl | 99 | 68997 | 1173 | 1.7001% | 50 | 37 | 34 | 3 |
| pt | 168 | 69062 | 1489 | 2.156% | 51 | 35 | 25 | 10 |
| ro | 123 | 69012 | 1312 | 1.9011% | 63 | 46 | 34 | 12 |
| ru | 232 | 70588 | 1278 | 1.8105% | 45 | 34 | 34 | 0 |
| sk | 99 | 69019 | 1160 | 1.6807% | 46 | 35 | 32 | 3 |
| sl | 177 | 69180 | 1580 | 2.2839% | 47 | 34 | 34 | 0 |
| sq | 99 | 68676 | 1149 | 1.6731% | 46 | 34 | 30 | 4 |
| sr | 187 | 69995 | 1211 | 1.7301% | 42 | 31 | 31 | 0 |
| sv | 122 | 68541 | 1380 | 2.0134% | 48 | 35 | 33 | 2 |
| tr | 99 | 68682 | 1151 | 1.6758% | 46 | 34 | 30 | 4 |
| uk | 240 | 70730 | 1760 | 2.4883% | 49 | 34 | 34 | 0 |

Data koka summa: mērķa rakstzīmes 2124811, ESTIMATE_DE_CHARS 43298, GERMAN_ISLAND_CANDIDATES 1618. www ir identisks, tāpēc abu koku rakstzīmju summa ir 4249622. Šie skaitļi nav audita 4287734.

### GERMAN_ISLAND_CANDIDATES piemēri, kuru vārda nav tādas pašas LV atslēgas atlikumā

- bs `kurssLesson3` subjekt konteksts=`" 4. Gramatika ⌄ 1 Subjekt rečenice Subjekt rečenice na njem"`
- da `kurssArticlesLesson` artikel konteksts=`"lære substantiver sammen med deres artikel. • Eksempler på artikler "`
- en `kurssArticlesLesson` system konteksts=`"s coincide with the English gender system. Therefore, nouns are best learned"`
- es `kurssArticlesLesson` mannschaft konteksts=`"érminos -schaft → die Mannschaft -ion → die Nation -tät → die U"`
- et `kurssArticlesLesson` neid konteksts=`"ta lõpu või eesti keele soo järgi. Neid on kõige parem õppida koos artikli"`
- fi `kurssArticlesLesson` neid konteksts=`"ta lõpu või eesti keele soo järgi. Neid on kõige parem õppida koos artikli"`
- fr `kurssArticlesLesson` genre konteksts=`"de pas toujours avec le système de genre anglais. Par conséquent, il est pr"`
- hu `kurssPronounsLesson` form konteksts=`"tiv, Akkusativ és Dativ - névmások formái. N "`
- is `kurssArticlesLesson` neid konteksts=`"ta lõpu või eesti keele soo järgi. Neid on kõige parem õppida koos artikli"`
- it `kurssLesson1` staat konteksts=`" ich Es stāvu du Jij staat er / sie Viņš / viņa stāv wir"`
- lb `kurssLesson1` staat konteksts=`" ich Es stāvu du Jij staat er / sie Viņš / viņa stāv wir"`
- lt `kurssArticlesLesson` artikel konteksts=`" Artikeliai i Vokiešu arti"`
- nb `kurssArticlesLesson` neid konteksts=`"ta lõpu või eesti keele soo järgi. Neid on kõige parem õppida koos artikli"`
- nl `kurssLesson1` staat konteksts=`" ich Es stāvu du Jij staat er / sie Viņš / viņa stāv wir"`
- nn `kurssArticlesLesson` neid konteksts=`"ta lõpu või eesti keele soo järgi. Neid on kõige parem õppida koos artikli"`
- pl `kurssConsonantsLesson` liter konteksts=`" Spółgłoski i kombinacje liter W języku niemieckim "`
- pt `kurssConsonantsLesson` links konteksts=`"am. Links médicos "`
- ro `kurssArticlesLesson` termin konteksts=`"impuri și unele cuvinte cu anumite terminații. Noteikumi "`
- sk `kurssConsonantsLesson` liter konteksts=`" Spółgłoski i kombinacje liter W języku niemieckim "`
- sq `kurssConsonantsLesson` liter konteksts=`" Spółgłoski i kombinacje liter W języku niemieckim "`

## 10. FOREIGN_WORD_IN_DE_SLOT

DE slots šeit ir audita TEXT rinda data kokā: mērķa vērtība nav baitiski vienāda ar LV. Vārds ir ārpus leksikas, ja tā mazie burti nav LV vācu leksikā un nav funkcijvārdu sarakstā. `OTHER_ALPHABET`: burtam nav latīņu alfabēta. `TRANSLATION`: rindas kategorija ir TRANSLATED_GERMAN. `WRONG_LANGUAGE`: pārējie latīņu vārdi ārpus leksikas. Kategorija nenosauc, vai vārds ir nl vai en.

| kopa | vārdi |
|---|---:|
| OTHER_ALPHABET | 344 |
| TRANSLATION | 689 |
| WRONG_LANGUAGE | 1498 |

### OTHER_ALPHABET

- bg `Аз` `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[20]` LV=`"ihm "` LANG=`"Аз съм за него / за това"`
- bg `Ами` `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[2]` LV=`"er "` LANG=`"Ами"`
- bg `Арбайтер` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[25]` LV=`"Arbeiter (arbaiter) "` LANG=`"Арбайтер (arbeiter)"`
- bg `брайтер` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[28]` LV=`"breiter (braiter) "` LANG=`"Брайтер (брайтер) "`
- bg `Брайтер` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[28]` LV=`"breiter (braiter) "` LANG=`"Брайтер (брайтер) "`
- bg `бял` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[11]` LV=`"bald (balt) "` LANG=`"Плешив (бял) "`
- bg `Габел` `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[67]` LV=`"die Gabel "` LANG=`"Ди Габел"`
- bg `градина` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[17]` LV=`"Garten (garten) "` LANG=`"Garten (градина) "`
- bg `Ди` `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[67]` LV=`"die Gabel "` LANG=`"Ди Габел"`
- bg `за` `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[20]` LV=`"ihm "` LANG=`"Аз съм за него / за това"`

### TRANSLATION

- bg `heuser` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[26]` LV=`"Häuser (hoizer) "` LANG=`"Heuser (heuser)"`
- bg `Heuser` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[26]` LV=`"Häuser (hoizer) "` LANG=`"Heuser (heuser)"`
- bg `heuser` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[85]` LV=`"Häuser (hoizer) "` LANG=`"Heuser (heuser)"`
- bg `Heuser` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[85]` LV=`"Häuser (hoizer) "` LANG=`"Heuser (heuser)"`
- bg `Inen` `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[25]` LV=`"Ihnen "` LANG=`"Inen"`
- bg `kurc` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[76]` LV=`"kurz (kurc) "` LANG=`"Kurc ​​​​(kurc)"`
- bg `Kurc` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[76]` LV=`"kurz (kurc) "` LANG=`"Kurc ​​​​(kurc)"`
- bg `noin` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[93]` LV=`"neun (noin) "` LANG=`"Nein (noin) "`
- bg `Pilc` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[8]` LV=`"Pilz (pilc) "` LANG=`"Pilc "`
- bg `Rehnen` `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[4]` LV=`"rechnen (rehnen) "` LANG=`"Rehnen (renen)"`

### WRONG_LANGUAGE

- bg `caihnen` `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[5]` LV=`"zeichnen (caihnen) "` LANG=`"Zeichnen (caihnen)"`
- bg `Hoixen` `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[54]` LV=`"das Häuschen "` LANG=`"Das Hoixen"`
- bg `house` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[84]` LV=`"Haus (haus) "` LANG=`"Haus (house)"`
- bg `kurzer` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[77]` LV=`"kürzer (kurcer) "` LANG=`"Kürzer (kurzer)"`
- bg `Kürzer` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[77]` LV=`"kürzer (kurcer) "` LANG=`"Kürzer (kurzer)"`
- bg `nokh` `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[11]` LV=`"noch (noh) "` LANG=`"Noch (nokh) "`
- bg `zain` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[96]` LV=`"sein (zain) "` LANG=`"Sein (zain) "`
- bg `zingen` `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[26]` LV=`"singen (zingen) "` LANG=`"Singen (zingen)"`
- bg `zingen` `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[15]` LV=`"singen (zingen) "` LANG=`"Singen (zingen)"`
- cs `A` `a1` `a1-kennen-study` `id` LV=`"a1-kennen"` LANG=`"A1-kennen"`

### Kopēšanas ģimenes

Ģimene ir valodu kopa, kurai data kokā ir identiska TEXT `langValue`. www nav skaitīts otrreiz.

| valodas | kopīgās vērtības |
|---|---:|
| bg,hr,mk,sr | 27 |
| hr,mk,sr | 13 |
| es,fr | 7 |
| cs,fi,gr,hr,hu,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr | 6 |
| hr,sr | 6 |
| et,fi,gr,is,nb,nn,sv | 5 |
| et,fi,is,nb,nn,sv | 5 |
| fi,gr,hr,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr | 5 |
| fi,gr,is,it,lb,nb,nl,nn,sk,sl,sq,sv,tr | 5 |
| sq,tr | 5 |
| da,fr | 4 |
| fi,gr,hu,is,it,lb,nb,nl,nn,pt,sk,sl,sq,sv,tr | 4 |
| fi,gr,hu,is,it,lb,nb,nl,nn,sk,sl,sq,sv,tr | 4 |
| fi,gr,is,it,lb,nb,nl,nn,pt,sk,sl,sq,sv,tr | 4 |
| fi,gr,is,nb,nn,sv | 3 |
| bg,cs,da,fr,hr,hu,mk,ro,sr | 2 |
| bg,cs,da,fr,hr,mk,ro,ru,sr | 2 |
| bg,mk,ru | 2 |
| cs,da | 2 |
| cs,da,fr,hu,pt | 2 |
| cs,da,fr,hu,pt,ro | 2 |
| cs,da,fr,hu,ro | 2 |
| cs,da,fr,pt | 2 |
| cs,da,hu | 2 |
| cs,fi,gr,hr,hu,is,it,lb,mk,nb,nl,nn,pt,sk,sl,sq,sr,sv,tr | 2 |
| cs,fi,gr,hr,is,it,lb,mk,nb,nl,nn,sk,sl,sr,sv | 2 |
| cs,fi,gr,hu,is,it,lb,nb,nl,nn,ro,sk,sl,sq,sv,tr | 2 |
| cs,fi,gr,is,it,lb,nb,nl,nn,sk,sl,sv | 2 |
| da,es,fr | 2 |
| da,fr,hu,pt | 2 |
| da,fr,pt | 2 |
| da,pt | 2 |
| es,et,fi,is,nb,nn,sv | 2 |
| fi,gr,hr,hu,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr | 2 |
| fr,pt | 2 |
| it,lb,nl | 2 |
| it,pt | 2 |
| bg,cs,da,fi,gr,hr,is,it,lb,mk,nb,nl,nn,pt,ru,sk,sl,sq,sr,sv,tr | 1 |
| bg,cs,da,fr,hr,mk,pt,ro,sl,sr | 1 |
| bg,cs,da,fr,hr,mk,pt,ro,sr | 1 |
| bg,cs,da,fr,pt,ro | 1 |
| bg,cs,da,hr,hu,mk,pt,ro,sr | 1 |
| bg,cs,da,hr,hu,mk,ro,sr | 1 |
| bg,cs,da,hr,mk,pt,ro,ru,sr | 1 |
| bg,cs,da,hr,mk,pt,ro,sr | 1 |
| bg,cs,da,hr,mk,ro,sr | 1 |
| bg,cs,fi,gr,hr,is,it,lb,mk,nb,nl,nn,pt,sk,sl,sq,sr,sv,tr | 1 |
| bg,cs,fi,gr,hr,is,it,lb,mk,nb,nl,nn,ru,sk,sl,sq,sr,sv,tr | 1 |
| bg,cs,fi,gr,hr,is,mk,nb,nn,pt,ru,sk,sl,sr,sv | 1 |
| bg,cs,fr,hr,mk,pt,ro,sr | 1 |
| bg,da,fr,gr,hr,hu,it,lb,mk,nl,pt,ro,ru,sk,sq,sr,tr | 1 |
| bg,da,fr,hr,mk,pt,ro,sr | 1 |
| bg,da,fr,hr,mk,pt,sq,sr,tr | 1 |
| bg,da,fr,hr,mk,pt,sr | 1 |
| cs,da,fr,hr,hu,mk,sr | 1 |
| cs,da,fr,hu | 1 |
| cs,da,fr,hu,it,lb,nl,pt | 1 |
| cs,da,fr,ro | 1 |
| cs,da,hu,pt,ro | 1 |
| cs,da,hu,ro | 1 |
| cs,da,ro | 1 |
| cs,da,sl | 1 |
| cs,es | 1 |
| cs,fi,gr,hr,hu,is,it,lb,mk,nb,nl,nn,ro,sk,sl,sr,sv | 1 |
| cs,fi,gr,hr,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr | 1 |
| cs,fi,gr,hr,is,it,lb,mk,nb,nl,nn,sk,sr,sv | 1 |
| cs,fi,gr,hr,is,lb,mk,nb,nl,nn,sk,sl,sr,sv | 1 |
| cs,fi,gr,hu,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sv,tr | 1 |
| cs,fi,gr,hu,is,it,lb,mk,nb,nl,nn,sk,sl,sv | 1 |
| cs,fi,gr,hu,is,it,lb,nb,nl,nn,ro,sk,sl,sv | 1 |
| cs,fi,gr,hu,is,it,lb,nb,nl,nn,ru,sk,sl,sq,sv,tr | 1 |
| cs,fi,gr,hu,is,nb,nn,sk,sl,sq,sv,tr | 1 |
| cs,fi,gr,is,it,lb,nb,nl,nn,sk,sl,sq,sv,tr | 1 |
| cs,fi,gr,is,it,lb,nb,nl,nn,sk,sq,sv,tr | 1 |
| cs,fi,hr,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr | 1 |
| cs,fi,hr,is,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr | 1 |
| cs,fi,hu,is,it,lb,nb,nl,nn,pt,sk,sl,sv | 1 |
| cs,fi,is,it,lb,nb,nl,nn,pt,sk,sv | 1 |
| cs,fi,is,it,lb,nb,nl,nn,sk,sl,sq,sv,tr | 1 |
| cs,gr | 1 |
| cs,hu,pt,ro | 1 |
| cs,it,lb,nl,pt,ro,sk,sl,sq,tr | 1 |
| da,en,fr,hu | 1 |
| da,fi,fr,is,it,lb,nb,nl,nn,pt,sk,sl,sv | 1 |
| da,fi,gr,hu,is,it,lb,nb,nl,nn,pt,sk,sl,sv | 1 |
| da,fi,gr,is,it,lb,nb,nl,nn,sk,sl,sv | 1 |
| da,fi,hr,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr | 1 |
| da,fi,hu,is,nb,nn,sk,sl,sq,sv,tr | 1 |
| da,fi,is,it,lb,nb,nl,nn,sv | 1 |
| da,fr,hr,mk,pt,sq,sr,tr | 1 |
| da,fr,hr,mk,sr | 1 |
| da,fr,hu,it,lb,nl,ro,sq,tr | 1 |
| da,fr,hu,pt,ro | 1 |
| da,fr,hu,pt,ro,sq,tr | 1 |
| da,fr,hu,ro | 1 |
| da,fr,ro,sq,tr | 1 |
| da,fr,sq,tr | 1 |
| da,hu,pt | 1 |
| da,hu,pt,sl | 1 |
| da,hu,pt,sq,tr | 1 |
| da,pt,sq,tr | 1 |
| da,sq,tr | 1 |
| es,et,fi,gr,is,nb,nn,sv | 1 |
| fi,gr,hr,hu,is,it,lb,mk,nb,nl,nn,pt,sk,sq,sr,sv,tr | 1 |
| fi,gr,hr,is,it,lb,mk,nb,nl,nn,pt,sk,sl,sq,sr,sv,tr | 1 |
| fi,gr,hr,is,mk,nb,nn,sk,sl,sq,sr,sv,tr | 1 |
| fi,gr,hu,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sv,tr | 1 |
| fi,gr,hu,is,it,lb,nb,nl,nn,ru,sk,sl,sq,sv,tr | 1 |
| fi,gr,hu,is,it,lb,nb,nl,nn,sk,sq,sv,tr | 1 |
| fi,gr,is,it,lb,nb,nl,nn,pt,ru,sk,sl,sq,sv,tr | 1 |
| fi,gr,is,it,nb,nl,nn,pt,sk,sl,sq,sv,tr | 1 |
| fi,gr,is,it,nb,nl,nn,sk,sl,sq,sv,tr | 1 |
| fi,hu,is,it,lb,nb,nl,nn,sk,sl,sq,sv,tr | 1 |
| fi,is,it,lb,nb,nl,nn,pt,sk,sl,sq,sv,tr | 1 |
| fr,hu,sq,tr | 1 |
| fr,pt,ro | 1 |
| hr,hu,mk,sr | 1 |
| hr,pt,sr | 1 |
| hu,it,lb,nl,ru,sk,sl,sq,tr | 1 |
| hu,pt | 1 |
| hu,ro | 1 |
| it,lb,nl,pt,sk,sl,sq,tr | 1 |
| ro,sq,tr | 1 |
| ru,uk | 1 |

Vērtības, kas ir vienlaikus it, lb un nl: 75.
Vērtības, kas ir vienlaikus hr, sr un mk: 91.
Vērtības, kas ir vienlaikus it un lb: 75.
Vērtības, kas ir vienlaikus hr un sr: 98.
Vērtības, kas ir vienlaikus sr un mk: 91.

- bg,hr,mk,sr: `"Arbeiten (arbeiten)"`; `"Das auto"`; `"Das Hoixen"`; `"Frei (пържени) "`; `"Heuser (heuser)"`
- hr,mk,sr: `"Ich helfe <span class=\"case-green\">Dir</span>."`; `"Ich sehe <span class=\"case-red\">Дич</span>. "`; `"Pilc"`; `"Wir danken <span class=\"case-green\">Еуч</span>."`; `"Wir mögen <span class=\"case-red\">Еуч</span>."`
- es,fr: `" das Eisen, das Sauerstoff"`; `" die Autos, die Häuser"`; `" die Frau, die Mutter"`; `"-chen → das Mädchen, das Häuschen"`; `"-lein → das Fräulein"`
- cs,fi,gr,hr,hu,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr: `"Das Museum "`; `"Das Zentrum "`; `"Dich "`; `"Dich (dih) "`; `"Die Polizei "`
- hr,sr: `"Barje (mōr) "`; `"C-she"`; `"Die Sonne-saule"`; `"Die Tür-vrata"`; `"Holter"`
- et,fi,gr,is,nb,nn,sv: `"Bogen (boogen) "`; `"Mütter (mütter) "`; `"Ofen (oofen) "`; `"Ohr (oor) "`; `"Rose (rooze) "`
- et,fi,is,nb,nn,sv: `"Boot (boot) "`; `"Hof (hoof) "`; `"Kohle (koole) "`; `"Moor (moor) "`; `"Moos (moos) "`
- fi,gr,hr,is,it,lb,mk,nb,nl,nn,sk,sl,sq,sr,sv,tr: `"Der August "`; `"Der Käse "`; `"Der Schmetterling "`; `"Neu (noi) "`; `"Nicht (niht) "`

## 11. A1 TEXT

Rindas: 14.

- cs koks=`data` id=`a1-kennen-study` lauks=`id` LV=`"a1-kennen"` LANG=`"A1-kennen"`
- cs koks=`data` id=`a1-wissen-study` lauks=`id` LV=`"a1-wissen"` LANG=`"A1-wissen"`
- cs koks=`www` id=`a1-kennen-study` lauks=`id` LV=`"a1-kennen"` LANG=`"A1-kennen"`
- cs koks=`www` id=`a1-wissen-study` lauks=`id` LV=`"a1-wissen"` LANG=`"A1-wissen"`
- da koks=`data` id=`a1-besuchen` lauks=`study.examples[0].de` LV=`"Ich besuche das Museum."` LANG=`"Ich besuche meine Großeltern."`
- da koks=`data` id=`a1-besuchen` lauks=`study.examples[1].de` LV=`"Wir besuchen einen Deutschkurs."` LANG=`"Wir besuchen das Museum."`
- da koks=`data` id=`a1-besuchen` lauks=`study.examples[2].de` LV=`"Ich besuche meine Großeltern."` LANG=`"Er besucht einen Freund."`
- da koks=`www` id=`a1-besuchen` lauks=`study.examples[0].de` LV=`"Ich besuche das Museum."` LANG=`"Ich besuche meine Großeltern."`
- da koks=`www` id=`a1-besuchen` lauks=`study.examples[1].de` LV=`"Wir besuchen einen Deutschkurs."` LANG=`"Wir besuchen das Museum."`
- da koks=`www` id=`a1-besuchen` lauks=`study.examples[2].de` LV=`"Ich besuche meine Großeltern."` LANG=`"Er besucht einen Freund."`
- en koks=`data` id=`a1-liter` lauks=`study.id` LV=`"a1-liter"` LANG=`"a1-litre"`
- en koks=`www` id=`a1-liter` lauks=`study.id` LV=`"a1-liter"` LANG=`"a1-litre"`
- sr koks=`data` id=`a1-sitzen` lauks=`study.comparison[3].word` LV=`"setzen"` LANG=`"sich setzen"`
- sr koks=`www` id=`a1-sitzen` lauks=`study.comparison[3].word` LV=`"setzen"` LANG=`"sich setzen"`

## 12. A1 EXTRA

Unikāla atslēga ir kartes id, lauka ceļš un mērķa vērtība. Valodu skaits ir unikālās valodas data un www kokos. LV vērtība netiek papildināta.

EXTRA rindas 998, unikālas kombinācijas 54.

- id=`a1-bis` ceļš=`study.comparison[3].word` vērtība=`"bis jetzt"` valodas=28 (bg,cs,da,en,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[91].study.comparison[2].word, data/a1.js:$[91].study.sectionAccents.comparison[2].word.green[0], data/sentences.js:$[271].de
- id=`a1-bis` ceļš=`study.comparison[3].word` vērtība=`"Bis jetzt"` valodas=1 (ro) LV=data/a1.js:$[91].study.sectionAccents.comparison[2].example.blue[0], data/a1.js:$[91].study.sectionAccents.examples[3].blue[0]
- id=`a1-bis` ceļš=`study.comparison[3].word` vērtība=`"Бис Джетц"` valodas=1 (ru) LV=LV_ABSENT
- id=`a1-bitte-study` ceļš=`study.examples[3].de` vērtība=`"Kann ich bitte fragen?"` valodas=27 (bg,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a2.js:$[257].study.examples[3].de
- id=`a1-bitte-study` ceļš=`study.examples[4].de` vērtība=`"Ich habe eine Bitte."` valodas=27 (bg,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[94].study.examples[0].de, data/a2.js:$[257].study.examples[0].de, data/a2.js:$[257].study.examples[4].de
- id=`a1-bitte-study` ceļš=`study.examples[5].de` vērtība=`"Die Bitte ist wichtig."` valodas=27 (bg,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a2.js:$[257].study.examples[5].de
- id=`a1-bitte` ceļš=`study.examples[3].de` vērtība=`"Kann ich bitte fragen?"` valodas=28 (bg,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a2.js:$[257].study.examples[3].de
- id=`a1-bitte` ceļš=`study.examples[4].de` vērtība=`"Ich habe eine Bitte."` valodas=28 (bg,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[94].study.examples[0].de, data/a2.js:$[257].study.examples[0].de, data/a2.js:$[257].study.examples[4].de
- id=`a1-bitte` ceļš=`study.examples[5].de` vērtība=`"Die Bitte ist wichtig."` valodas=28 (bg,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a2.js:$[257].study.examples[5].de
- id=`a1-bringen` ceļš=`study.examples[3].de` vērtība=`"Ich nehme das Buch."` valodas=29 (bg,cs,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[223].study.comparison[1].example, data/a1.js:$[223].study.examples[2].de
- id=`a1-es` ceļš=`study.examples[4].de` vērtība=`"Es regnet."` valodas=28 (bg,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[167].study.examples[0].de, data/dialogueIdMap.js:window.DIALOGUE_ID_MAP.diag_081.de, data/sentences.js:$[551].de
- id=`a1-es` ceļš=`study.examples[5].de` vērtība=`"Es schneit."` valodas=28 (bg,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/dialogueIdMap.js:window.DIALOGUE_ID_MAP.diag_093.de, data/sentences.js:$[563].de
- id=`a1-finden` ceļš=`study.comparison[1].word` vērtība=`"suchen"` valodas=28 (bg,cs,da,en,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[187].study.sectionAccents.comparison[1].word.green[0], data/a1.js:$[584].de, data/a2.js:$[1380].study.sectionAccents.important[0].example.red[4]
- id=`a1-finden` ceļš=`study.comparison[1].word` vērtība=`"Suchen"` valodas=1 (ro) LV=LV_ABSENT
- id=`a1-finden` ceļš=`study.comparison[1].word` vērtība=`"Сучен"` valodas=1 (ru) LV=LV_ABSENT
- id=`a1-finden` ceļš=`study.comparison[2].word` vērtība=`"denken"` valodas=28 (bg,cs,da,en,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[133].de, data/a1.js:$[187].study.sectionAccents.comparison[2].word.green[0], data/a1.js:$[265].study.comparison[3].word
- id=`a1-finden` ceļš=`study.comparison[2].word` vērtība=`"Gandeste-te"` valodas=1 (ro) LV=LV_ABSENT
- id=`a1-finden` ceļš=`study.comparison[2].word` vērtība=`"Думать"` valodas=1 (ru) LV=LV_ABSENT
- id=`a1-finden` ceļš=`study.comparison[3].word` vērtība=`"glauben"` valodas=28 (bg,cs,da,en,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[187].study.sectionAccents.comparison[3].word.green[0], data/a1.js:$[242].de, data/a2.js:$[783].study.sectionAccents.examples[5].de.green[0]
- id=`a1-finden` ceļš=`study.comparison[3].word` vērtība=`"Glauben"` valodas=1 (ro) LV=LV_ABSENT
- id=`a1-finden` ceļš=`study.comparison[3].word` vērtība=`"Глаубен"` valodas=1 (ru) LV=LV_ABSENT
- id=`a1-finden` ceļš=`study.examples[3].de` vērtība=`"Wie findest du den Film?"` valodas=29 (bg,cs,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[187].study.examples[2].de
- id=`a1-klein-study` ceļš=`study.examples[3].de` vērtība=`"Ich habe eine kleine Tasche."` valodas=29 (bg,cs,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a1.js:$[6].study.examples[2].de, data/a2.js:$[1630].study.examples[3].de
- id=`a1-klein-study` ceļš=`study.examples[4].de` vērtība=`"Das Kind ist klein."` valodas=29 (bg,cs,da,es,et,fi,fr,gr,hr,hu,is,it,lb,lt,mk,nb,nl,nn,pl,pt,ro,ru,sk,sl,sq,sr,sv,tr,uk) LV=data/a2.js:$[1630].study.examples[4].de
- id=`a1-liter` ceļš=`study.comparison[0].word` vērtība=`"der Liter"` valodas=1 (et) LV=data/a1.js:$[382].study.sectionAccents.explanation.green[0]
- id=`a1-liter` ceļš=`study.comparison[0].word` vērtība=`"Der Liter"` valodas=1 (gr) LV=LV_ABSENT
- id=`a1-liter` ceļš=`study.comparison[1].word` vērtība=`"das Liter"` valodas=1 (et) LV=data/a1.js:$[382].study.sectionAccents.explanation.blue[0]
- id=`a1-liter` ceļš=`study.comparison[1].word` vērtība=`"Das Liter"` valodas=1 (gr) LV=LV_ABSENT
- id=`a1-liter` ceļš=`study.comparison[2].word` vērtība=`"die Liter"` valodas=1 (et) LV=data/a1.js:$[382].de_plural, data/a1.js:$[382].study.sectionAccents.explanation.purple[0]
- id=`a1-liter` ceļš=`study.comparison[2].word` vērtība=`"Die Liter"` valodas=1 (gr) LV=LV_ABSENT
- id=`a1-liter` ceļš=`study.examples[0].de` vērtība=`"Ich brauche einen Liter Milch."` valodas=2 (et,gr) LV=LV_ABSENT
- id=`a1-liter` ceļš=`study.examples[1].de` vērtība=`"Die Flasche fasst zwei Liter."` valodas=2 (et,gr) LV=LV_ABSENT
- id=`a1-morgen-study` ceļš=`study.comparison[0].word` vērtība=`"Morgen"` valodas=1 (sr) LV=data/a1.js:$[259].study.sectionAccents.important[2].blue[1], data/a1.js:$[418].de, data/a1.js:$[418].study.sectionAccents.explanation.yellow[0]
- id=`a1-morgen-study` ceļš=`study.comparison[1].word` vērtība=`"morgen"` valodas=1 (sr) LV=data/a1.js:$[417].de, data/a1.js:$[417].study.sectionAccents.examples[0].de.blue[0], data/a1.js:$[417].study.sectionAccents.examples[0].de.blue[1]
- id=`a1-morgen` ceļš=`study.comparison[0].word` vērtība=`"morgen"` valodas=1 (sr) LV=data/a1.js:$[417].de, data/a1.js:$[417].study.sectionAccents.examples[0].de.blue[0], data/a1.js:$[417].study.sectionAccents.examples[0].de.blue[1]
- id=`a1-morgen` ceļš=`study.comparison[1].word` vērtība=`"Morgen"` valodas=1 (sr) LV=data/a1.js:$[259].study.sectionAccents.important[2].blue[1], data/a1.js:$[418].de, data/a1.js:$[418].study.sectionAccents.explanation.yellow[0]
- id=`a1-probieren` ceļš=`study.comparison[4].word` vērtība=`"anprobieren"` valodas=1 (et) LV=data/a1.js:$[482].study.comparison[3].word, data/a1.js:$[482].study.sectionAccents.comparison[3].word.green[0], data/a1.js:$[482].study.sectionAccents.examples[3].de.green[0]
- id=`a1-probieren` ceļš=`study.comparison[4].word` vērtība=`"Anprobieren"` valodas=3 (fi,gr,sv) LV=LV_ABSENT
- id=`a1-probieren` ceļš=`study.comparison[4].word` vērtība=`"Testen"` valodas=3 (is,nb,nn) LV=LV_ABSENT
- id=`a1-probieren` ceļš=`study.examples[4].de` vērtība=`"Wir testen die neue Software."` valodas=7 (et,fi,gr,is,nb,nn,sv) LV=LV_ABSENT
- id=`a1-seite` ceļš=`study.comparison[0].word` vērtība=`"Seite"` valodas=1 (sr) LV=data/a1.js:$[544].de, data/a1.js:$[544].study.sectionAccents.examples[0].de.blue[0], data/a1.js:$[544].study.sectionAccents.examples[1].de.green[0]
- id=`a1-seite` ceļš=`study.comparison[1].word` vērtība=`"Blatt"` valodas=1 (sr) LV=data/a1.js:$[99].de, data/b1.js:$[3241].study.sectionAccents.examples[1].de.yellow
- id=`a1-sicher` ceļš=`study.comparison[0].word` vērtība=`"sicher"` valodas=1 (sr) LV=data/a1.js:$[548].de, data/a1.js:$[548].study.sectionAccents.examples[0].de.blue[0], data/a1.js:$[548].study.sectionAccents.examples[2].de.green[0]
- id=`a1-sicher` ceļš=`study.comparison[1].word` vērtība=`"bestimmt"` valodas=1 (sr) LV=data/a2.js:$[244].de, data/a2.js:$[244].study.accents.blue[0], data/a2.js:$[244].study.comparison[0].word
- id=`a1-sie-study-2` ceļš=`study.comparison[0].word` vērtība=`"Sie"` valodas=1 (sr) LV=data/a1.js:$[167].study.sectionAccents.examples[2].red[0], data/a1.js:$[292].study.sectionAccents.important[1].blue[0], data/a1.js:$[292].study.sectionAccents.important[2].blue[0]
- id=`a1-sie-study-2` ceļš=`study.comparison[1].word` vērtība=`"sie + једнина"` valodas=1 (sr) LV=LV_ABSENT
- id=`a1-sie-study-2` ceļš=`study.comparison[2].word` vērtība=`"sie + множина"` valodas=1 (sr) LV=LV_ABSENT
- id=`a1-sie-study` ceļš=`study.comparison[0].word` vērtība=`"sie + једнина"` valodas=1 (sr) LV=LV_ABSENT
- id=`a1-sie-study` ceļš=`study.comparison[1].word` vērtība=`"sie + множина"` valodas=1 (sr) LV=LV_ABSENT
- id=`a1-sie-study` ceļš=`study.comparison[2].word` vērtība=`"Sie"` valodas=1 (sr) LV=data/a1.js:$[167].study.sectionAccents.examples[2].red[0], data/a1.js:$[292].study.sectionAccents.important[1].blue[0], data/a1.js:$[292].study.sectionAccents.important[2].blue[0]
- id=`a1-wie` ceļš=`study.comparison[0].word` vērtība=`"wie"` valodas=1 (nn) LV=data/a1.js:$[660].de, data/a1.js:$[660].study.sectionAccents.examples[5].de.blue[0], data/a1.js:$[660].study.sectionAccents.explanation.blue[0]
- id=`a1-wie` ceļš=`study.comparison[1].word` vērtība=`"wie viel"` valodas=1 (nn) LV=data/a1.js:$[662].de
- id=`a1-wie` ceļš=`study.comparison[2].word` vērtība=`"wie alt"` valodas=1 (nn) LV=LV_ABSENT
- id=`a1-wie` ceļš=`study.comparison[3].word` vērtība=`"wie lange"` valodas=1 (nn) LV=data/a1.js:$[352].study.sectionAccents.important[1].green[0]

## 13. LV anomālijas

Vārdšķira nāk tikai no LV laukiem. Atstarpe `de` vērtībā ir PHRASE. Slēgtais vietniekvārdu saraksts ir PRONOUN. Lielais sākumburts ir NOUN. Mazais vārds ar -en/-eln/-ern ir VERB_CANDIDATE. Cits mazais vārds ir ADJECTIVE_CANDIDATE. Īpašības vārdu un darbības vārdu LV dati neatdala ar atsevišķu lauku.

SINGULARE_TANTUM_CANDIDATE ir NOUN apakškopa: artikuls ir `der` vai `das`, un nevienā LV ierakstā ar to pašu `de` nav `de_plural`. Tas nav pierādījums, ka vārds ir singulare tantum; tā izskatās arī neaizpildīts daudzskaitlis. `die` ar tukšu daudzskaitli netiek marķēts: sieviešu dzimte un plurale tantum LV laukos izskatās vienādi. PLURALE_TANTUM: 0.

### EMPTY_ARTICLE

| vārdšķira | rindas |
|---|---:|
| NOUN | 4 |
| PHRASE | 1 |
| PRONOUN | 1 |
| summa | 6 |

SINGULARE_TANTUM_CANDIDATE apakškopa: 0. `die` ar tukšu daudzskaitli, bez tantum marķējuma: 0. PLURALE_TANTUM: 0.

#### NOUN

- A1[467] de=`"Ostern"` lv=`"Lieldienas"` article=`""` plural=`""`
- A1[648] de=`"Weihnachten"` lv=`"Ziemassvētki"` article=`""` plural=`""`
- B2[1134] de=`"HIV-negativ"` lv=`"HIV negatīvs"` article=`""` plural=`""`
- B2[1135] de=`"HIV-positiv"` lv=`"HIV pozitīvs"` article=`""` plural=`""`

#### PHRASE

- A1[488] de=`"Rad fahren"` lv=`"braukt ar divriteni"` article=`""` plural=`""`

#### PRONOUN

- A1[550] de=`"Sie"` lv=`"jūs"` article=`""` plural=`""`

### EMPTY_PLURAL

| vārdšķira | rindas |
|---|---:|
| NOUN | 501 |
| PHRASE | 1 |
| PRONOUN | 1 |
| summa | 503 |

SINGULARE_TANTUM_CANDIDATE apakškopa: 300. `die` ar tukšu daudzskaitli, bez tantum marķējuma: 191. PLURALE_TANTUM: 0.

#### NOUN

- A1[11] de=`"Alter"` lv=`"vecums"` article=`"das"` plural=`""` SINGULARE_TANTUM_CANDIDATE
- A1[120] de=`"Butter"` lv=`"sviests"` article=`"die"` plural=`""`
- A1[136] de=`"Dezember"` lv=`"decembris"` article=`"der"` plural=`""` SINGULARE_TANTUM_CANDIDATE
- A1[157] de=`"Eis"` lv=`"ledus • saldējums"` article=`"das"` plural=`""` SINGULARE_TANTUM_CANDIDATE
- A1[160] de=`"Eltern"` lv=`"vecāki"` article=`"die"` plural=`""`
- A1[161] de=`"Ende"` lv=`"beigas"` article=`"das"` plural=`""` SINGULARE_TANTUM_CANDIDATE
- A1[178] de=`"Februar"` lv=`"februāris"` article=`"der"` plural=`""` SINGULARE_TANTUM_CANDIDATE
- A1[191] de=`"Fleisch"` lv=`"gaļa"` article=`"das"` plural=`""` SINGULARE_TANTUM_CANDIDATE
- A1[2] de=`"Wasser"` lv=`"ūdens"` article=`"das"` plural=`""` SINGULARE_TANTUM_CANDIDATE
- A1[229] de=`"Geld"` lv=`"nauda"` article=`"das"` plural=`""` SINGULARE_TANTUM_CANDIDATE

#### PHRASE

- A1[488] de=`"Rad fahren"` lv=`"braukt ar divriteni"` article=`""` plural=`""`

#### PRONOUN

- A1[550] de=`"Sie"` lv=`"jūs"` article=`""` plural=`""`

### SAME_DE_DIFFERENT_ARTICLE

- de=`"Band"` līmenis=`A2,B1` detail=`"das | der"` LV: A2[193] lv=`"lente • saite"` article=`"das"` plural=`"die Bänder"`; B1[238] lv=`"sējums"` article=`"der"` plural=`"die Bände"`
- de=`"Erbe"` līmenis=`B1` detail=`"der | das"` LV: B1[3359] lv=`"mantinieks"` article=`"der"` plural=`"die Erben"`; B1[3360] lv=`"mantojums"` article=`"das"` plural=`""`
- de=`"Flur"` līmenis=`A2,B2` detail=`"der | die"` LV: A2[505] lv=`"priekšnams • koridors"` article=`"der"` plural=`"die Flure"`; B2[810] lv=`"lauks • klajums"` article=`"die"` plural=`"die Fluren"`
- de=`"Fremde"` līmenis=`B1,B2` detail=`"der | die"` LV: B1[948] lv=`"svešinieks"` article=`"der"` plural=`"die Fremden"`; B2[835] lv=`"svešums • svešatne"` article=`"die"` plural=`""`
- de=`"Gefallen"` līmenis=`B1,B2` detail=`"der | das"` LV: B1[1014] lv=`"pakalpojums"` article=`"der"` plural=`"die Gefallen"`; B2[885] lv=`"patikšana • patika"` article=`"das"` plural=`""`
- de=`"Gehalt"` līmenis=`B1` detail=`"das | der"` LV: B1[1027] lv=`"alga"` article=`"das"` plural=`"die Gehälter"`; B1[1028] lv=`"saturs"` article=`"der"` plural=`"die Gehalte"`
- de=`"Kunde"` līmenis=`B1` detail=`"der | die"` LV: B1[1660] lv=`"klients"` article=`"der"` plural=`"die Kunden"`; B1[1661] lv=`"vēsts"` article=`"die"` plural=`""`
- de=`"Moment"` līmenis=`A2,B2` detail=`"der | das"` LV: A2[959] lv=`"brīdis"` article=`"der"` plural=`"die Momente"`; B2[1337] lv=`"izšķirošais apstāklis • faktors"` article=`"das"` plural=`"die Momente"`
- de=`"Schild"` līmenis=`A2,B1` detail=`"das | der"` LV: A2[1224] lv=`"izkārtne • plāksnīte • etiķete uz pudelēm • burtnīcām u. tml"` article=`"das"` plural=`"die Schilder"`; B1[2432] lv=`"vairogs"` article=`"der"` plural=`"die Schilder"`
- de=`"See"` līmenis=`A2,B1` detail=`"der | die"` LV: A2[1271] lv=`"ezers"` article=`"der"` plural=`"die Seen"`; B1[2572] lv=`"jūra"` article=`"die"` plural=`"die Seen"`
- de=`"Steuer"` līmenis=`B1` detail=`"die | das"` LV: B1[3332] lv=`"nodoklis"` article=`"die"` plural=`"die Steuern"`; B1[3333] lv=`"stūre"` article=`"das"` plural=`"die Steuer"`
- de=`"Tau"` līmenis=`B1` detail=`"der | das"` LV: B1[2856] lv=`"rasa"` article=`"der"` plural=`""`; B1[2857] lv=`"kuģa tauva"` article=`"das"` plural=`"die Taue"`
- de=`"Tor"` līmenis=`A2,B2` detail=`"das | der"` LV: A2[1452] lv=`"vārti"` article=`"das"` plural=`"die Tore"`; B2[1737] lv=`"muļķis • nelga"` article=`"der"` plural=`"die Toren"`
- de=`"Verwandte"` līmenis=`B1` detail=`"der | die"` LV: B1[3132] lv=`"radinieks"` article=`"der"` plural=`"die Verwandten"`; B1[3133] lv=`"radiniece"` article=`"die"` plural=`"die Verwandten"`
- de=`"Weise"` līmenis=`A2,B1,B2` detail=`"die | der"` LV: A2[1575] lv=`"veids"` article=`"die"` plural=`"die Weisen"`; B1[3228] lv=`"gudrs"` article=`"die"` plural=`"die Weisen"`; B2[2046] lv=`"gudrais"` article=`"der"` plural=`"die Weisen"`

### DUPLICATE_IN_LEVEL

- de=`"Erbe"` līmenis=`B1` detail=`"count=2"` LV: B1[3359] lv=`"mantinieks"` article=`"der"` plural=`"die Erben"`; B1[3360] lv=`"mantojums"` article=`"das"` plural=`""`
- de=`"Gehalt"` līmenis=`B1` detail=`"count=2"` LV: B1[1027] lv=`"alga"` article=`"das"` plural=`"die Gehälter"`; B1[1028] lv=`"saturs"` article=`"der"` plural=`"die Gehalte"`
- de=`"Kunde"` līmenis=`B1` detail=`"count=2"` LV: B1[1660] lv=`"klients"` article=`"der"` plural=`"die Kunden"`; B1[1661] lv=`"vēsts"` article=`"die"` plural=`""`
- de=`"Steuer"` līmenis=`B1` detail=`"count=2"` LV: B1[3332] lv=`"nodoklis"` article=`"die"` plural=`"die Steuern"`; B1[3333] lv=`"stūre"` article=`"das"` plural=`"die Steuer"`
- de=`"Tau"` līmenis=`B1` detail=`"count=2"` LV: B1[2856] lv=`"rasa"` article=`"der"` plural=`""`; B1[2857] lv=`"kuģa tauva"` article=`"das"` plural=`"die Taue"`
- de=`"Verwandte"` līmenis=`B1` detail=`"count=2"` LV: B1[3132] lv=`"radinieks"` article=`"der"` plural=`"die Verwandten"`; B1[3133] lv=`"radiniece"` article=`"die"` plural=`"die Verwandten"`

### DUPLICATE_ACROSS_LEVELS

- de=`"Aal"` līmenis=`B1,C1` detail=`"B1,C1"` LV: B1[35] lv=`"zutis"` article=`"der"` plural=`"die Aale"`; C1[18] lv=`"zutis"` article=`"der"` plural=`"die Aale"`
- de=`"ändern"` līmenis=`A2,B2` detail=`"A2,B2"` LV: A2[35] lv=`"mainīt • izmainīt"` article=`""` plural=`""`; B2[2110] lv=`"mainīt • labot"` article=`""` plural=`""`
- de=`"Arm"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[44] lv=`"roka"` article=`"der"` plural=`"die Arme"`; A2[85] lv=`"roka"` article=`"der"` plural=`"die Arme"`
- de=`"auch"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[48] lv=`"arī"` article=`""` plural=`""`; A2[1639] lv=`"arī"` article=`""` plural=`""`
- de=`"Band"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[193] lv=`"lente • saite"` article=`"das"` plural=`"die Bänder"`; B1[238] lv=`"sējums"` article=`"der"` plural=`"die Bände"`
- de=`"Besucher"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[88] lv=`"apmeklētājs"` article=`"der"` plural=`"die Besucher"`; A2[245] lv=`"apmeklētājs"` article=`"der"` plural=`"die Besucher"`
- de=`"bieten"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[449] lv=`"piedāvāt"` article=`""` plural=`""`; B2[2112] lv=`"piedāvāt • sniegt"` article=`""` plural=`""`
- de=`"Bitte"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[94] lv=`"lūgums"` article=`"die"` plural=`"die Bitten"`; A2[257] lv=`"lūgums"` article=`"die"` plural=`"die Bitten"`
- de=`"bringen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[111] lv=`"atnest"` article=`""` plural=`""`; A2[9] lv=`"atnest • nogādāt"` article=`""` plural=`""`
- de=`"da"` līmenis=`A1,B1` detail=`"A1,B1"` LV: A1[126] lv=`"tur"` article=`""` plural=`""`; B1[3337] lv=`"jo • par cik"` article=`""` plural=`""`
- de=`"Dank"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[323] lv=`"pateicība"` article=`"der"` plural=`""`; B1[559] lv=`"pateicība"` article=`"der"` plural=`""`
- de=`"Dasein"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[565] lv=`"esamība • eksistence"` article=`"das"` plural=`""`; B2[354] lv=`"esamība • eksistence"` article=`"das"` plural=`""`
- de=`"Ehe"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[375] lv=`"laulība"` article=`"die"` plural=`"die Ehen"`; B1[644] lv=`"laulība"` article=`"die"` plural=`"die Ehen"`
- de=`"Einschreiben"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[705] lv=`"ierakstīta vēstule"` article=`"das"` plural=`"die Einschreiben"`; B2[577] lv=`"ierakstīta vēstule vai sūtījums"` article=`"das"` plural=`"die Einschreiben"`
- de=`"erst"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[165] lv=`"tikai"` article=`""` plural=`""`; A2[1634] lv=`"vēl tikai • ne agrāk kā"` article=`""` plural=`""`
- de=`"Flur"` līmenis=`A2,B2` detail=`"A2,B2"` LV: A2[505] lv=`"priekšnams • koridors"` article=`"der"` plural=`"die Flure"`; B2[810] lv=`"lauks • klajums"` article=`"die"` plural=`"die Fluren"`
- de=`"fordern"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[931] lv=`"pieprasīt"` article=`""` plural=`""`; B2[2114] lv=`"pieprasīt • prasīt"` article=`""` plural=`""`
- de=`"fördern"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[932] lv=`"veicināt"` article=`""` plural=`""`; B2[2115] lv=`"veicināt • atbalstīt"` article=`""` plural=`""`
- de=`"Fremde"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[948] lv=`"svešinieks"` article=`"der"` plural=`"die Fremden"`; B2[835] lv=`"svešums • svešatne"` article=`"die"` plural=`""`
- de=`"Gefallen"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[1014] lv=`"pakalpojums"` article=`"der"` plural=`"die Gefallen"`; B2[885] lv=`"patikšana • patika"` article=`"das"` plural=`""`
- de=`"Geschwister"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[234] lv=`"brāļi un māsas"` article=`"die"` plural=`""`; A2[586] lv=`"brāļi un māsas"` article=`"die"` plural=`""`
- de=`"gleich"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[243] lv=`"tūlīt"` article=`""` plural=`""`; A2[1638] lv=`"vienāds • tūlīt"` article=`""` plural=`""`
- de=`"groß"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[250] lv=`"liels"` article=`""` plural=`""`; A2[1628] lv=`"liels"` article=`""` plural=`""`
- de=`"hoch"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[285] lv=`"augsts"` article=`""` plural=`""`; A2[1629] lv=`"augsts"` article=`""` plural=`""`
- de=`"höflich"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[286] lv=`"pieklājīgs"` article=`""` plural=`""`; A2[679] lv=`"pieklājīgs"` article=`""` plural=`""`
- de=`"holen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[8] lv=`"aiziet pakaļ • atnest"` article=`""` plural=`""`; B1[1298] lv=`"atnest"` article=`""` plural=`""`
- de=`"hören"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[287] lv=`"dzirdēt • klausīties"` article=`""` plural=`""`; A2[1625] lv=`"dzirdēt • klausīties"` article=`""` plural=`""`
- de=`"Johannisbeere"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[738] lv=`"jāņoga"` article=`"die"` plural=`"die Johannisbeeren"`; B1[271] lv=`"jāņoga"` article=`"die"` plural=`"die Johannisbeeren"`
- de=`"Kabinettskrise"` līmenis=`B2,C1` detail=`"B2,C1"` LV: B2[1167] lv=`"kabineta krīze"` article=`"die"` plural=`"die Kabinettskrisen"`; C1[410] lv=`"kabineta krīze"` article=`"die"` plural=`"die Kabinettskrisen"`
- de=`"Karre"` līmenis=`C1,C2` detail=`"C1,C2"` LV: C1[566] lv=`"ķerra"` article=`"die"` plural=`"die Karren"`; C2[214] lv=`"ķerra"` article=`"die"` plural=`"die Karren"`
- de=`"Karren"` līmenis=`C1,C2` detail=`"C1,C2"` LV: C1[567] lv=`"ķerra"` article=`"der"` plural=`"die Karren"`; C2[215] lv=`"ķerra"` article=`"der"` plural=`"die Karren"`
- de=`"kennen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[310] lv=`"pazīt"` article=`""` plural=`""`; A2[788] lv=`"pazīt"` article=`""` plural=`""`
- de=`"Kinderheim"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[797] lv=`"bērnunams"` article=`"das"` plural=`"die Kinderheime"`; B1[1230] lv=`"bērnunams"` article=`"das"` plural=`"die Kinderheime"`
- de=`"Kleidung"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[338] lv=`"apģērbs"` article=`"die"` plural=`""`; A2[811] lv=`"apģērbs"` article=`"die"` plural=`""`
- de=`"klein"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[6] lv=`"mazs"` article=`""` plural=`""`; A2[1630] lv=`"mazs"` article=`""` plural=`""`
- de=`"Kriegsbeschädigte"` līmenis=`C1,C2` detail=`"C1,C2"` LV: C1[408] lv=`"kara invalīds"` article=`"der"` plural=`"die Kriegsbeschädigten"`; C2[216] lv=`"kara invalīds"` article=`"der"` plural=`"die Kriegsbeschädigten"`
- de=`"Kriegsgefangene"` līmenis=`C1,C2` detail=`"C1,C2"` LV: C1[409] lv=`"karagūsteknis"` article=`"der"` plural=`"die Kriegsgefangenen"`; C2[217] lv=`"karagūsteknis"` article=`"der"` plural=`"die Kriegsgefangenen"`
- de=`"Krüppel"` līmenis=`B1,C1` detail=`"B1,C1"` LV: B1[1651] lv=`"kroplis"` article=`"der"` plural=`"die Krüppel"`; C1[568] lv=`"kroplis"` article=`"der"` plural=`"die Krüppel"`
- de=`"Laut"` līmenis=`A1,B1` detail=`"A1,B1"` LV: A1[359] lv=`"skaņa"` article=`"der"` plural=`"die Laute"`; B1[1736] lv=`"skaņa"` article=`"der"` plural=`"die Laute"`
- de=`"legen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[363] lv=`"nolikt"` article=`""` plural=`""`; A2[890] lv=`"nolikt guļus"` article=`""` plural=`""`
- de=`"Leid"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[876] lv=`"ciešanas • bēdas"` article=`"das"` plural=`""`; B1[1755] lv=`"ciešanas"` article=`"das"` plural=`"die Leide"`
- de=`"leise"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[368] lv=`"kluss"` article=`""` plural=`""`; A2[1631] lv=`"kluss"` article=`""` plural=`""`
- de=`"liegen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[377] lv=`"atrasties • gulēt"` article=`""` plural=`""`; A2[889] lv=`"gulēt • atrasties"` article=`""` plural=`""`
- de=`"Mal"` līmenis=`A1,B1` detail=`"A1,B1"` LV: A1[390] lv=`"reize"` article=`"das"` plural=`"die Male"`; B1[1826] lv=`"zīme"` article=`"das"` plural=`"die Male"`
- de=`"Moment"` līmenis=`A2,B2` detail=`"A2,B2"` LV: A2[959] lv=`"brīdis"` article=`"der"` plural=`"die Momente"`; B2[1337] lv=`"izšķirošais apstāklis • faktors"` article=`"das"` plural=`"die Momente"`
- de=`"noch"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[451] lv=`"vēl"` article=`""` plural=`""`; A2[1633] lv=`"vēl"` article=`""` plural=`""`
- de=`"nur"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[456] lv=`"tikai • vienīgi"` article=`""` plural=`""`; A2[1635] lv=`"tikai • vienīgi"` article=`""` plural=`""`
- de=`"obwohl"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1035] lv=`"lai gan"` article=`""` plural=`""`; B1[3338] lv=`"kaut gan • lai gan"` article=`""` plural=`""`
- de=`"Orange"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[466] lv=`"apelsīns"` article=`"die"` plural=`"die Orangen"`; A2[1043] lv=`"apelsīns"` article=`"die"` plural=`"die Orangen"`
- de=`"Regen"` līmenis=`A1,B2` detail=`"A1,B2"` LV: A1[493] lv=`"lietus"` article=`"der"` plural=`""`; B2[1511] lv=`"lietus"` article=`"der"` plural=`"die Regen"`
- de=`"Reich"` līmenis=`A2,B2` detail=`"A2,B2"` LV: A2[1143] lv=`"valsts • impērija • karaliste"` article=`"das"` plural=`"die Reiche"`; B2[1515] lv=`"impērija • valsts"` article=`"das"` plural=`"die Reiche"`
- de=`"Rennen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1154] lv=`"skrējiens • sacīkstes"` article=`"das"` plural=`"die Rennen"`; B1[2291] lv=`"sacīkstes"` article=`"das"` plural=`"die Rennen"`
- de=`"sagen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[505] lv=`"teikt"` article=`""` plural=`""`; A2[1626] lv=`"teikt"` article=`""` plural=`""`
- de=`"schauen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[510] lv=`"skatīties"` article=`""` plural=`""`; A2[1623] lv=`"skatīties"` article=`""` plural=`""`
- de=`"Schild"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1224] lv=`"izkārtne • plāksnīte • etiķete uz pudelēm • burtnīcām u. tml"` article=`"das"` plural=`"die Schilder"`; B1[2432] lv=`"vairogs"` article=`"der"` plural=`"die Schilder"`
- de=`"schon"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[521] lv=`"jau"` article=`""` plural=`""`; A2[1632] lv=`"jau"` article=`""` plural=`""`
- de=`"Schuld"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1256] lv=`"vaina • parāds • atbildība"` article=`"die"` plural=`"die Schulden"`; B1[2526] lv=`"būt vainīgam"` article=`"die"` plural=`"die Schulden"`
- de=`"See"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1271] lv=`"ezers"` article=`"der"` plural=`"die Seen"`; B1[2572] lv=`"jūra"` article=`"die"` plural=`"die Seen"`
- de=`"sehen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[539] lv=`"redzēt"` article=`""` plural=`""`; A2[1622] lv=`"redzēt"` article=`""` plural=`""`
- de=`"sich bedanken"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1289] lv=`"pateikties"` article=`""` plural=`""`; B1[3342] lv=`"pateikties"` article=`""` plural=`""`
- de=`"sich beeilen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1290] lv=`"pasteigties"` article=`""` plural=`""`; B1[3343] lv=`"steigties"` article=`""` plural=`""`
- de=`"sich befinden"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1291] lv=`"atrasties"` article=`""` plural=`""`; B1[3344] lv=`"atrasties"` article=`""` plural=`""`
- de=`"sich entschließen"` līmenis=`B1,C1` detail=`"B1,C1"` LV: B1[3346] lv=`"nolemties"` article=`""` plural=`""`; C1[299] lv=`"izlemt • izšķirties"` article=`""` plural=`""`
- de=`"sich entschuldigen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1292] lv=`"atvainoties"` article=`""` plural=`""`; B1[3347] lv=`"atvainoties"` article=`""` plural=`""`
- de=`"sich erholen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1293] lv=`"atpūsties • atgūties"` article=`""` plural=`""`; B1[3349] lv=`"atpūsties"` article=`""` plural=`""`
- de=`"sich erkälten"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1294] lv=`"saaukstēties"` article=`""` plural=`""`; B1[3350] lv=`"saaukstēties"` article=`""` plural=`""`
- de=`"sich freuen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1295] lv=`"priecāties"` article=`""` plural=`""`; B1[3351] lv=`"priecāties"` article=`""` plural=`""`
- de=`"sich umziehen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1304] lv=`"pārģērbties"` article=`""` plural=`""`; B1[3355] lv=`"pārģērbties"` article=`""` plural=`""`
- de=`"sich verlaufen"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[3087] lv=`"norisināties"` article=`""` plural=`""`; B2[2116] lv=`"apmaldīties"` article=`""` plural=`""`
- de=`"sich verlieben"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1309] lv=`"iemīlēties"` article=`""` plural=`""`; B1[3357] lv=`"iemīlēties"` article=`""` plural=`""`
- de=`"sitzen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[558] lv=`"sēdēt"` article=`""` plural=`""`; A2[1320] lv=`"sēdēt"` article=`""` plural=`""`
- de=`"sprechen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[5] lv=`"runāt"` article=`""` plural=`""`; A2[1627] lv=`"runāt"` article=`""` plural=`""`
- de=`"Staat"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[697] lv=`"valsts"` article=`"der"` plural=`"die Staaten"`; A2[1361] lv=`"valsts"` article=`"der"` plural=`"die Staaten"`
- de=`"stehen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[576] lv=`"stāvēt"` article=`""` plural=`""`; A2[1373] lv=`"stāvēt"` article=`""` plural=`""`
- de=`"Tor"` līmenis=`A2,B2` detail=`"A2,B2"` LV: A2[1452] lv=`"vārti"` article=`"das"` plural=`"die Tore"`; B2[1737] lv=`"muļķis • nelga"` article=`"der"` plural=`"die Toren"`
- de=`"Tropfen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1475] lv=`"piliens"` article=`"der"` plural=`"die Tropfen"`; B1[2927] lv=`"piliens"` article=`"der"` plural=`"die Tropfen"`
- de=`"über"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[608] lv=`"virs • par"` article=`""` plural=`""`; A2[1636] lv=`"virs • pāri • par"` article=`""` plural=`""`
- de=`"Urlaub"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[695] lv=`"atvaļinājums"` article=`"der"` plural=`""`; A2[1509] lv=`"atvaļinājums"` article=`"der"` plural=`"die Urlaube"`
- de=`"Verantwortung"` līmenis=`B2,C1` detail=`"B2,C1"` LV: B2[0] lv=`"atbildība"` article=`"die"` plural=`"die Verantwortungen"`; C1[169] lv=`"atbildība"` article=`"die"` plural=`"die Verantwortungen"`
- de=`"Verdienst"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[3059] lv=`"peļņa"` article=`"der"` plural=`"die Verdienste"`; B2[1876] lv=`"nopelns"` article=`"der"` plural=`"die Verdienste"`
- de=`"Vergehen"` līmenis=`B1,B2` detail=`"B1,B2"` LV: B1[3064] lv=`"pārkāpums"` article=`"das"` plural=`"die Vergehen"`; B2[1892] lv=`"pārkāpums"` article=`"das"` plural=`"die Vergehen"`
- de=`"Versprechen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1526] lv=`"solījums"` article=`"das"` plural=`"die Versprechen"`; B1[3114] lv=`"solījums"` article=`"das"` plural=`"die Versprechen"`
- de=`"voraussetzen"` līmenis=`B2,C1` detail=`"B2,C1"` LV: B2[1988] lv=`"prasīt • būt par priekšnoteikumu"` article=`""` plural=`""`; C1[562] lv=`"pieņemt kā priekšnoteikumu"` article=`""` plural=`""`
- de=`"Wagen"` līmenis=`A2,B1` detail=`"A2,B1"` LV: A2[1550] lv=`"automašīna • vagons"` article=`"der"` plural=`"die Wagen"`; B1[3185] lv=`"automašīna • vagons"` article=`"der"` plural=`"die Wagen"`
- de=`"wechseln"` līmenis=`A2,B2` detail=`"A2,B2"` LV: A2[1564] lv=`"mainīt • samainīt"` article=`""` plural=`""`; B2[2111] lv=`"samainīt • nomainīt"` article=`""` plural=`""`
- de=`"Weg"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[647] lv=`"ceļš"` article=`"der"` plural=`"die Wege"`; A2[1567] lv=`"ceļš"` article=`"der"` plural=`"die Wege"`
- de=`"Weise"` līmenis=`A2,B1,B2` detail=`"A2,B1,B2"` LV: A2[1575] lv=`"veids"` article=`"die"` plural=`"die Weisen"`; B1[3228] lv=`"gudrs"` article=`"die"` plural=`"die Weisen"`; B2[2046] lv=`"gudrais"` article=`"der"` plural=`"die Weisen"`
- de=`"wissen"` līmenis=`A1,A2` detail=`"A1,A2"` LV: A1[311] lv=`"zināt"` article=`""` plural=`""`; A2[789] lv=`"zināt"` article=`""` plural=`""`

## 14. Izrunas iekavas un FOREIGN_SCRIPT

Avots ir `kurssPronunciationLesson` un `kurssConsonantsLesson`, iekavas DE pusē pirms `–`/`—`. Aiz svītras iekavu nav. www `courseLessons.js` ir baitiski identisks data, tāpēc 14.a un 14.b skaita vienu koku.

Latviešu diakritika ir `āčēģīķļņšūž`. Burti, kas ir arī mērķvalodas ortogrāfijā, nav negaidīti: `lt` č š ž ū; `cs`, `sk`, `sl`, `hr`, `bs` č š ž. Pārējās mērķvalodās viss šis komplekts ir negaidīts. `sr` paredzētais alfabēts ir kirilica, tāpēc č š ž tur nav paredzēti.

Paredzētais iekavu alfabēts: `ru`, `bg`, `uk`, `mk`, `sr` kirilica; `gr` grieķu; pārējām latīņu. LATIN_REMAINING ir kirilicas vai grieķu valoda, kuras iekavas joprojām ir latīņu. OTHER_SCRIPT ir cits alfabēts, arī jauktas iekavas.

| valoda | iekavas | paredzētais | LOCAL | LATIN_REMAINING | OTHER_SCRIPT | bez burtiem | LV diakritika negaidīta | tikai kopīgie burti |
|---|---:|---|---:|---:|---:|---:|---:|---:|
| bg | 124 | Cyrillic | 39 | 83 | 2 | 0 | 12 | 0 |
| bs | 132 | Latin | 130 | 0 | 2 | 0 | 22 | 10 |
| cs | 139 | Latin | 138 | 0 | 1 | 0 | 16 | 20 |
| da | 138 | Latin | 138 | 0 | 0 | 0 | 45 | 0 |
| en | 138 | Latin | 138 | 0 | 0 | 0 | 45 | 0 |
| es | 144 | Latin | 144 | 0 | 0 | 0 | 75 | 0 |
| et | 144 | Latin | 144 | 0 | 0 | 0 | 22 | 0 |
| fi | 144 | Latin | 144 | 0 | 0 | 0 | 22 | 0 |
| fr | 132 | Latin | 132 | 0 | 0 | 0 | 31 | 0 |
| gr | 138 | Greek | 42 | 96 | 0 | 0 | 6 | 0 |
| hr | 121 | Latin | 80 | 0 | 41 | 0 | 9 | 3 |
| hu | 132 | Latin | 127 | 0 | 5 | 0 | 25 | 0 |
| is | 144 | Latin | 144 | 0 | 0 | 0 | 22 | 0 |
| it | 144 | Latin | 144 | 0 | 0 | 0 | 77 | 0 |
| lb | 144 | Latin | 144 | 0 | 0 | 0 | 77 | 0 |
| lt | 144 | Latin | 144 | 0 | 0 | 0 | 53 | 25 |
| mk | 124 | Cyrillic | 42 | 80 | 2 | 0 | 12 | 0 |
| nb | 144 | Latin | 144 | 0 | 0 | 0 | 22 | 0 |
| nl | 144 | Latin | 144 | 0 | 0 | 0 | 77 | 0 |
| nn | 144 | Latin | 144 | 0 | 0 | 0 | 22 | 0 |
| pl | 83 | Latin | 83 | 0 | 0 | 0 | 0 | 0 |
| pt | 144 | Latin | 144 | 0 | 0 | 0 | 68 | 0 |
| ro | 129 | Latin | 124 | 0 | 5 | 0 | 18 | 0 |
| ru | 132 | Cyrillic | 63 | 67 | 2 | 0 | 12 | 0 |
| sk | 83 | Latin | 83 | 0 | 0 | 0 | 0 | 0 |
| sl | 144 | Latin | 144 | 0 | 0 | 0 | 65 | 12 |
| sq | 83 | Latin | 83 | 0 | 0 | 0 | 0 | 0 |
| sr | 121 | Cyrillic | 39 | 80 | 2 | 0 | 12 | 0 |
| sv | 144 | Latin | 144 | 0 | 0 | 0 | 22 | 0 |
| tr | 83 | Latin | 83 | 0 | 0 | 0 | 0 | 0 |
| uk | 144 | Cyrillic | 132 | 12 | 0 | 0 | 0 | 0 |

### LV diakritika iekavās, kur tai nav jābūt

- bg `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- bs `kurssPronunciationLesson` [1] iekavas=`"gūt"` burti=`"ū"`
- cs `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- da `kurssPronunciationLesson` [1] iekavas=`"gūt"` burti=`"ū"`
- en `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- es `kurssPronunciationLesson` [1] iekavas=`"gūt"` burti=`"ū"`
- et `kurssPronunciationLesson` [7] iekavas=`"šlaaf"` burti=`"š"`
- fi `kurssPronunciationLesson` [7] iekavas=`"šlaaf"` burti=`"š"`
- fr `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- gr `kurssPronunciationLesson` [86] iekavas=`"štrauh"` burti=`"š"`
- hr `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- hu `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- is `kurssPronunciationLesson` [7] iekavas=`"šlaaf"` burti=`"š"`
- it `kurssPronunciationLesson` [1] iekavas=`"gūt"` burti=`"ū"`
- lb `kurssPronunciationLesson` [1] iekavas=`"gūt"` burti=`"ū"`
- lt `kurssPronunciationLesson` [2] iekavas=`"tāt"` burti=`"ā"`
- mk `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- nb `kurssPronunciationLesson` [7] iekavas=`"šlaaf"` burti=`"š"`
- nl `kurssPronunciationLesson` [1] iekavas=`"gūt"` burti=`"ū"`
- nn `kurssPronunciationLesson` [7] iekavas=`"šlaaf"` burti=`"š"`
- pt `kurssPronunciationLesson` [1] iekavas=`"gūt"` burti=`"ū"`
- ro `kurssPronunciationLesson` [5] iekavas=`"hūt"` burti=`"ū"`
- ru `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- sl `kurssPronunciationLesson` [1] iekavas=`"gūt"` burti=`"ū"`
- sr `kurssPronunciationLesson` [3] iekavas=`"flūr"` burti=`"ū"`
- sv `kurssPronunciationLesson` [7] iekavas=`"šlaaf"` burti=`"š"`

### LATIN_REMAINING

- bg `kurssPronunciationLesson` [0] iekavas=`"varm"`
- gr `kurssPronunciationLesson` [0] iekavas=`"varm"`
- mk `kurssPronunciationLesson` [0] iekavas=`"varm"`
- ru `kurssPronunciationLesson` [0] iekavas=`"varm"`
- sr `kurssPronunciationLesson` [0] iekavas=`"varm"`
- uk `kurssPronunciationLesson` [6] iekavas=`"hōf"`

### OTHER_SCRIPT iekavās

- bg `kurssPronunciationLesson` [49] Devanagari iekavas=`"दीप"`
- bs `kurssPronunciationLesson` [49] Devanagari iekavas=`"दीप"`
- cs `kurssPronunciationLesson` [56] Cyrillic iekavas=`"бет"`
- hr `kurssPronunciationLesson` [1] Cyrillic iekavas=`"да получи"`
- hu `kurssPronunciationLesson` [12] Cyrillic iekavas=`"шарф"`
- mk `kurssPronunciationLesson` [49] Devanagari iekavas=`"दीप"`
- ro `kurssPronunciationLesson` [12] Cyrillic iekavas=`"шарф"`
- ru `kurssPronunciationLesson` [49] Devanagari iekavas=`"दीप"`
- sr `kurssPronunciationLesson` [49] Devanagari iekavas=`"दीप"`

### FOREIGN_SCRIPT sadalījums

Sadalījums ir visu audita FOREIGN_SCRIPT rindu, data un www. Ja svešais alfabēts ir vācu daļā pirms ` (`, rinda ir FOREIGN_SCRIPT_IN_DE_WORD. Ja tas ir tikai iekavās, rinda ir FOREIGN_SCRIPT_IN_PRONUNCIATION. Paredzēts nozīmē, ka iekavu alfabēts ir šīs valodas paredzētais alfabēts.

Kopā FOREIGN_SCRIPT 466: FOREIGN_SCRIPT_IN_DE_WORD 318, FOREIGN_SCRIPT_IN_PRONUNCIATION 148. No izrunas rindām paredzētajā alfabētā ir 146, citā alfabētā 2. DE_WORD rindās, kur svešais alfabēts ir arī iekavās: 114.

| valoda | FOREIGN_SCRIPT | IN_DE_WORD | IN_PRONUNCIATION | no tām paredzētais alfabēts |
|---|---:|---:|---:|---:|
| bg | 32 | 28 | 4 | 4 |
| gr | 62 | 52 | 10 | 10 |
| hr | 50 | 48 | 2 | 0 |
| mk | 54 | 52 | 2 | 2 |
| ru | 100 | 80 | 20 | 20 |
| sr | 50 | 48 | 2 | 2 |
| uk | 118 | 10 | 108 | 108 |

### FOREIGN_SCRIPT_IN_DE_WORD

- bg `kurssPronunciationLesson` `legacyHtml/kurss-example[11]` Cyrillic LV=`"bald (balt) "` LANG=`"Плешив (бял) "`
- gr `kurssPronunciationLesson` `legacyHtml/kurss-example[0]` Greek LV=`"warm (varm) "` LANG=`"Ζεστός (varm) "`
- hr `kurssPronunciationLesson` `legacyHtml/kurss-example[11]` Cyrillic LV=`"bald (balt) "` LANG=`"Плешив (бял) "`
- mk `kurssPronunciationLesson` `legacyHtml/kurss-example[11]` Cyrillic LV=`"bald (balt) "` LANG=`"Плешив (бял) "`
- ru `kurssConsonantsLesson` `legacyHtml/kurss-example[11]` Cyrillic LV=`"noch (noh) "` LANG=`"Ноч (нох) "`
- sr `kurssPronunciationLesson` `legacyHtml/kurss-example[11]` Cyrillic LV=`"bald (balt) "` LANG=`"Плешив (бял) "`
- uk `lesson13` `kurssLesson13.sections[4].cards[11].er` Cyrillic LV=`"Er atmet tief."` LANG=`"Er відкидає tief."`

### FOREIGN_SCRIPT_IN_PRONUNCIATION paredzētajā alfabētā

- bg `kurssPronunciationLesson` `legacyHtml/kurss-example[17]` Cyrillic LV=`"Garten (garten) "` LANG=`"Garten (градина) "`
- gr `kurssConsonantsLesson` `legacyHtml/kurss-example[11]` Greek LV=`"noch (noh) "` LANG=`"Noch (καλά) "`
- mk `kurssPronunciationLesson` `legacyHtml/kurss-example[97]` Cyrillic LV=`"frei (frai) "` LANG=`"Frei (пържени) "`
- ru `kurssPronunciationLesson` `legacyHtml/kurss-example[15]` Cyrillic LV=`"singen (zingen) "` LANG=`"Singen (зинген) "`
- sr `kurssPronunciationLesson` `legacyHtml/kurss-example[97]` Cyrillic LV=`"frei (frai) "` LANG=`"Frei (пържени) "`
- uk `kurssPronunciationLesson` `legacyHtml/kurss-example[0]` Cyrillic LV=`"warm (varm) "` LANG=`"warm (варм) "`

### FOREIGN_SCRIPT_IN_PRONUNCIATION citā alfabētā

- hr `kurssPronunciationLesson` `legacyHtml/kurss-example[97]` Cyrillic LV=`"frei (frai) "` LANG=`"Frei (пържени) "`

## STAGE RESULT

STAGE RESULT: PASS

Šis PASS attiecas uz analīzes 1.–13. punktu. Sākotnējais DE konsekvences audits paliek PARTIAL.
