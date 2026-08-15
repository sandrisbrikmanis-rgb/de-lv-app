# CS–DE KURS — FULL QUALITY AUDIT

## CS–DE KURS — FULL AUDIT SUMMARY

| Metrika | Vērtība |
|---|---|
| Auditētie production faili | data/cs/courseLessons.js, www/data/cs/courseLessons.js, data/cs/courseTrainingCards.js, www/data/cs/courseTrainingCards.js, languages/cs/ui.js |
| LV MASTER faili | data/courseLessons.js, ui.js (lesson1-7 training cards) |
| Lessons skaits | 21 |
| Sections skaits | — |
| Practice/training kartīšu skaits | 381 (translate/training) |
| Exercise kartīšu skaits | 138 |
| Auditēto CS teksta vienību skaits | 1445 |
| Luna auditētas vienības | 1389/1445 |
| Findings skaits | 629 |
| Unique affected objects | 623 |
| SOURCE_DE_ISSUE | 0 |
| DE_PARITY_ISSUE | 1 |
| FALSE_POSITIVE | 0 |
| OWNER_REVIEW | 628 |
| CRITICAL | 1 |
| HIGH | 624 |
| MEDIUM | 4 |
| LOW | 0 |
| Production changes | **0** |
| Linguistic audit | GPT-5.6 Luna (gpt-5.6-luna) + deterministic/heuristic |
| Luna tokens | 319652 (55 requests) |

## OBLIGĀTIE GATES

| Gate | Rezultāts |
|---|---|
| STRUCTURAL PARITY | **PASS** |
| DE READ ONLY PARITY | **FAIL** |
| CS LINGUISTIC QUALITY | **FAIL** |
| PEDAGOGICAL PARITY | **FAIL** |
| PRACTICE TRAINING | **PASS** |
| TRANSLATE SYSTEM | **PASS** |
| UI I18N | **FAIL** |
| JAVASCRIPT | **PASS** |
| MOJIBAKE UNICODE | **PASS** |
| LV LEFTOVERS | **372 / 440** |
| EN LEFTOVERS | **0 / 0** |
| OTHER LEFTOVERS | **1 / 1** |
| PRIMARY WWW SYNC | **PASS** |
| PRODUCTION CHANGES | **0** |

## FINAL VERDICT: **CS–DE KURS — OWNER REVIEW / REPAIRS REQUIRED**

---

## FINDINGS TABLE

| # | Severity | Status | File | Lesson/Section | ID/Location | Field | CURRENT | Proposed / Recommendation | Reason |
| - | -------- | ------ | ---- | -------------- | ----------- | ----- | ------- | ------------------------- | ------ |
| 1 | CRITICAL | DE_PARITY_ISSUE | data/cs/courseLessons.js | kurssLesson10 | sections[4].cards[11].back | back | Was bist du? | Wer bist du? | CS DE pole neodpovídá LV MASTER DE obsahu |
| 2 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssArticlesLesson | kurssArticlesLesson/legacyHtml | legacyHtml(stripped) | Články i Německý článek se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem. • Příklady článků Der Tisch - stol Die Tür - dveře Das Messer - nůž Das Mädchen - dívka ♂ Často DER DER jsou často mužské osoby, dny, měsíce, roční období a některá slova s ​​určitými … | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 3 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssPronounsLesson | kurssPronounsLesson/legacyHtml | legacyHtml(stripped) | Zájmena Nominativ, Akkusativ a Dativ - tvary zájmen. Nominativ - co? Ich - já Du - ty E - on Sie - ona Já - to Wir - my Ihr — ty Sie - oni / její Sie - Vy (s laskavým svolením) Akkusativ - co? Mich - já Dich — ty Ihn - jejich (v.) Sie - jeho (s.) Já - to My - my Euch — ty Sie - oni / její Sie - Vy (… | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 4 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssPronunciationLesson | kurssPronunciationLesson/legacyHtml | COURSE_LESSON_HTML |              <h3>Samohlásky - dlouhé a krátké</h3>             <p class="kurss-lesson-intro">V němčině mohou být samohlásky dlouhé nebo krátké. To má vliv na výslovnost slova.</p>              <section class="kurss-lesson-section">               <h4>Dlouhá samohláska</h4>               <div class="k… | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 5 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssPronunciationLesson | kurssPronunciationLesson/legacyHtml | legacyHtml(stripped) | Samohlásky - dlouhé a krátké V němčině mohou být samohlásky dlouhé nebo krátké. To má vliv na výslovnost slova. Dlouhá samohláska Teplý (varm) — teplý Střevo (dostat) — dobrý Tat (tat) - práce / akce Flur (flūr) - chodba Weg (weg) - silnice Hut (hūt) - klobouk Hof (hōf) - dvůr Schlaf - spánek Pokud … | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: RU_CYRILLIC |
| 6 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssConsonantsLesson | kurssConsonantsLesson/legacyHtml | COURSE_LESSON_HTML |              <h3>Souhlásky a kombinace písmen</h3>             <p class="kurss-lesson-intro">V němčině se některé souhlásky a kombinace písmen vyslovují jinak, než se píší. Tato přednáška obsahuje nejdůležitější příklady pro začátečníky.</p>              <section class="kurss-lesson-section">       … | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 7 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssConsonantsLesson | kurssConsonantsLesson/legacyHtml | legacyHtml(stripped) | Souhlásky a kombinace písmen V němčině se některé souhlásky a kombinace písmen vyslovují jinak, než se píší. Tato přednáška obsahuje nejdůležitější příklady pro začátečníky. Souhlásky Das Rad (rāt) — kolo Die Räder (räder) - kola Bad (bāt) – koupel Bäder (bäder) - koupele Souhlásky na konci slova se… | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 8 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssSentenceStructureLesson | kurssSentenceStructureLesson/legacyHtml | COURSE_LESSON_HTML |              <h3>Struktura vět</h3>             <p class="kurss-lesson-intro">V tázací větě je sloveso v němčině obvykle na prvním místě.</p>              <section class="kurss-lesson-section">               <h4>Příklady</h4>               <div class="kurss-examples"><div class="kurss-example">Du co… | (OWNER: Czech replacement per LV MASTER meaning) | Chybný tvar „commst“ místo „kommst“ v české vrstvě |
| 9 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssSentenceStructureLesson | kurssSentenceStructureLesson/legacyHtml | legacyHtml(stripped) | Struktura vět V tázací větě je sloveso v němčině obvykle na prvním místě. Příklady Du commst. - Pojďte. Odkud pocházíš? "Jdeš?" Er singt. — Zpívá. Zpívej, že? — On zpívá? Spěcháš? "Stojíš?" Ano, jsem tu. — Ano, stojím. Get a? "Jdeš?" Jasně. - Ano, jdeme. Otázky s "byl" Pokud otázka začíná tázacím sl… | (OWNER: Czech replacement per LV MASTER meaning) | Chybný tvar „commst“ místo „kommst“ v české vrstvě |
| 10 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson6 | kurssLesson6/legacyHtml | COURSE_LESSON_HTML |      <h3>Přednáška 6</h3>     <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>      <details class="lesson1-accordion" open>       <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogy / věty</span><span class="lesson1-chev… | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 11 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson6 | kurssLesson6/legacyHtml | legacyHtml(stripped) | Přednáška 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogy / věty ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Messer, zwei Messer, drei Messer. Er legt die Messer wieder hin. Alle Messer sind scharf. Dann je wieder ein Messer. Er macht das Mes… | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 12 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson5 | kurssLesson5/legacyHtml | legacyHtml(stripped) | Přednáška 5 Wen?, akuzativ, sitzen, fragen a -in koncovka. 1. Dialogy / věty ⌄ Wer sitzt und fragt? Der Lehrer sitzt und fragt. Kdo stojí a odpovídá? Der Schüler stojí a odpovídá. Co antwortet der Schüler? Der Schüler antwortet gut. Wen lobt der Lehrer? Der Lehrer lobt den Schüler. Wie ist der Schül… | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 13 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson4 | kurssLesson4/legacyHtml | legacyHtml(stripped) | Přednáška 4 Akuzativ, nehmen, hinlegen, hinausgehen a přídavná jména. 1. Dialogy / věty ⌃ Paul kommt und nimmt einen Federhalter. Er zeigt den Federhalter. Er fragt: "Wie ist der Federhalter?" Olga odpovídá: "Der Federhalter ist schwarz." Je Federhalter weiß? Ne, der Federhalter ist nicht weiß, er i… | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 14 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson6 | kurssLesson6/legacyHtml | legacyHtml |      <h3>Přednáška 6</h3>     <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>      <details class="lesson1-accordion" open>       <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogy / věty</span><span class="lesson1-chev… | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 15 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[2] | sections[1].items[2] | Stehen auf — pieceļas | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 16 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[3] | sections[1].items[3] | Grüßen (grüsen) — sveicināt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 17 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[6] | sections[1].items[6] | Der Morgen — rīts | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 18 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[9] | sections[1].items[9] | Die Kinder — bērni | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 19 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[10] | sections[1].items[10] | Setzt euch (zect oich) — sēstieties! | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 20 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[11] | sections[1].items[11] | Sie setzen sich — viņi apsēžas | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 21 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[12] | sections[1].items[12] | Fragen (ar akuzatīvu) — jautāt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 22 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[13] | sections[1].items[13] | Sprechen — runāt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 23 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[16] | sections[1].items[16] | Sehr (zēr) — ļoti | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 24 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[18] | sections[1].items[18] | Laut — skaļi | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 25 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[25] | sections[1].items[25] | Schreiben — rakstīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 26 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[27] | sections[1].items[27] | Erzählen (ercēlen) — stāstīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 27 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[28] | sections[1].items[28] | Zuhören — klausīties | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 28 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[29] | sections[1].items[29] | Sie hören zu — viņi klausās | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 29 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[31] | sections[1].items[31] | Der Arbeiter — strādnieks | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 30 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[34] | sections[1].items[34] | Der Bäcker (dēr beker) — maiznieks | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 31 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[35] | sections[1].items[35] | Der Schneider (dēr šneider) — drēbnieks | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 32 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[36] | sections[1].items[36] | Der Gärtner (dēr gertner) — dārznieks | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 33 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[2]/item[0] | sections[2].items[0] | Ä, kā jau minēts, izrunā gan kā šauro īso vai garo e skaņu. Piemēri: der Bäcker (bēker), das Mädchen (mētchen). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 34 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[2]/item[1] | sections[2].items[1] | Ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 35 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[2]/item[3] | sections[2].items[3] | Ie izrunā kā garo ī: liest (līst). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 36 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[2]/item[4] | sections[2].items[4] | SS izrunā kā s: grüßen (grüsen). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 37 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[2]/item[5] | sections[2].items[5] | Eu izrunā kā oi: deutlich (doitlich). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 38 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[3]/item[7] | sections[3].items[7] | Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht! | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 39 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[3]/item[8] | sections[3].items[8] | Český valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu sich. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 40 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[0] | sections[1].items[0] | Mehrere (mērere) — vairāki, vairākas | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 41 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[1] | sections[1].items[1] | Hier (hīr) — šeit, te | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 42 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[3] | sections[1].items[3] | Auch — arī | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 43 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[4] | sections[1].items[4] | Langsam (lankzām) — lēni | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 44 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[5] | sections[1].items[5] | Schnell (šnel) — ātri | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 45 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[6] | sections[1].items[6] | Mehr (mēr) — vairāk | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 46 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[7] | sections[1].items[7] | Zumachen — aiztaisīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 47 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[9] | sections[1].items[9] | Sitzen (zicen) — sēdēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 48 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[10] | sections[1].items[10] | Ruhig (rū-ich) — mierīgi | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 49 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[11] | sections[1].items[11] | Dieser (dīzer) — šis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 50 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[12] | sections[1].items[12] | Jener (jēner) — tas | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 51 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[13] | sections[1].items[13] | Der Brief (dēr brīf) — vēstule | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 52 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[14] | sections[1].items[14] | Die Briefe — vēstules | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 53 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[15] | sections[1].items[15] | Kurz (kurc) — īss | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 54 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[16] | sections[1].items[16] | Rein — tīrs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 55 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[1]/item[17] | sections[1].items[17] | Schmutzig (šmucich) — netīrs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 56 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[0]/forms[0]/task | sections[3].cards[0].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 57 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[0]/forms[1]/task | sections[3].cards[0].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 58 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[0]/forms[2]/task | sections[3].cards[0].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 59 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[0]/forms[3]/task | sections[3].cards[0].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 60 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[1]/forms[0]/task | sections[3].cards[1].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 61 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[1]/forms[1]/task | sections[3].cards[1].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 62 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[1]/forms[2]/task | sections[3].cards[1].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 63 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[1]/forms[3]/task | sections[3].cards[1].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 64 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[2]/forms[0]/task | sections[3].cards[2].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 65 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[2]/forms[1]/task | sections[3].cards[2].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 66 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[2]/forms[2]/task | sections[3].cards[2].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 67 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[2]/forms[3]/task | sections[3].cards[2].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 68 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[3]/forms[0]/task | sections[3].cards[3].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 69 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[3]/forms[1]/task | sections[3].cards[3].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 70 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[3]/forms[2]/task | sections[3].cards[3].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 71 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[3]/forms[3]/task | sections[3].cards[3].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 72 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[4]/forms[0]/task | sections[3].cards[4].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 73 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[4]/forms[1]/task | sections[3].cards[4].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 74 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[4]/forms[2]/task | sections[3].cards[4].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 75 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[4]/forms[3]/task | sections[3].cards[4].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 76 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[5]/forms[0]/task | sections[3].cards[5].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 77 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[5]/forms[1]/task | sections[3].cards[5].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 78 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[5]/forms[2]/task | sections[3].cards[5].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 79 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[5]/forms[3]/task | sections[3].cards[5].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 80 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[6]/forms[0]/task | sections[3].cards[6].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 81 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[6]/forms[1]/task | sections[3].cards[6].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 82 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[6]/forms[2]/task | sections[3].cards[6].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 83 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[6]/forms[3]/task | sections[3].cards[6].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 84 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[7]/forms[0]/task | sections[3].cards[7].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 85 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[7]/forms[1]/task | sections[3].cards[7].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 86 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[7]/forms[2]/task | sections[3].cards[7].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 87 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[7]/forms[3]/task | sections[3].cards[7].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 88 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/forms[0]/task | sections[3].cards[8].forms[0].task | Pārveido šo teikumu 3. personā vienskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 89 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/forms[1]/task | sections[3].cards[8].forms[1].task | Pārveido sākuma teikumu 1. personā daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 90 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/forms[2]/task | sections[3].cards[8].forms[2].task | Lieto lietas vārdu vienskaitļa vietā daudzskaitli. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 91 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/forms[3]/task | sections[3].cards[8].forms[3].task | Gatavs. Nākamais klikšķis rāda nākamo kartīti. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 92 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[3] | sections[1].items[3] | Wir sind — mēs esam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 93 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[4] | sections[1].items[4] | Ihr seid (īr zeit) — jūs esat | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 94 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[7] | sections[1].items[7] | Er kann — viņš var | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 95 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[8] | sections[1].items[8] | Wir können — mēs varam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 96 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[9] | sections[1].items[9] | Ihr könnt — jūs varat | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 97 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[10] | sections[1].items[10] | Sie können — viņi var | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 98 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[13] | sections[1].items[13] | Seien Sie gesund — esiet Jūs veseli! | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 99 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[14] | sections[1].items[14] | Der Knabe (dēr knābe) — zēns | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 100 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[15] | sections[1].items[15] | Der Mann — vīrs, vīrietis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 101 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[17] | sections[1].items[17] | Der Großvater (dēr grōsfāter) — vectēvs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 102 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[20] | sections[1].items[20] | Lernen — mācīties | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 103 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[22] | sections[1].items[22] | Das Jahr (jār) — gads | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 104 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[24] | sections[1].items[24] | Wie — kā, kāds, cik | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 105 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[2]/item[1] | sections[2].items[1] | Ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 106 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[2]/item[2] | sections[2].items[2] | Ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 107 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[2]/item[6] | sections[2].items[6] | Český valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 108 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[2] | sections[1].items[2] | Er hat — viņam ir | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 109 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[4] | sections[1].items[4] | Ihr habt — jums ir | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_WORD |
| 110 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[5] | sections[1].items[5] | Sie haben — viņiem ir | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 111 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[6] | sections[1].items[6] | Der Bruder (dēr brūder) — brālis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 112 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[7] | sections[1].items[7] | Die Brüder — brāļi | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 113 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[13] | sections[1].items[13] | Der Schreibtisch (dēr šreibtīš) — rakstāmgalds | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 114 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[16] | sections[1].items[16] | Zusammen (cuzāmen) — kopā | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 115 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[18] | sections[1].items[18] | Der Freund (dēr froint) — draugs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 116 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[21] | sections[1].items[21] | Der Stuhl (dēr štūl) — krēsls | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 117 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[22] | sections[1].items[22] | Die Stühle — krēsli | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 118 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[24] | sections[1].items[24] | Das Bücherbrett — grāmatu plaukts | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 119 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[25] | sections[1].items[25] | Die Landkarte (dī lantkarte) — ģeogrāfijas karte | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 120 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[26] | sections[1].items[26] | Glücklich — laimīgs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 121 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[28] | sections[1].items[28] | Die Schwester (dī švester) — māsa | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 122 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[1]/item[29] | sections[1].items[29] | Die Schwestern — māsas | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 123 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[2]/item[0] | sections[2].items[0] | Eu izrunā kā oi: der Freund (dēr froint), neun (noin). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 124 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[2]/item[1] | sections[2].items[1] | H pa lielākai daļai ir garumzīme iepriekšējam patskanim: der Stuhl (dēr štūl), zehn (cēn). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 125 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[2]/item[2] | sections[2].items[2] | Z izrunā kā český c: Franz (franc), das Zimmer (cimer). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 126 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[1] | sections[1].items[1] | Wie heißt du — kā tevi sauc | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 127 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[8] | sections[1].items[8] | Kleiner als ich — mazāks par mani | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 128 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[11] | sections[1].items[11] | Jünger als ich — jaunāks par mani | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 129 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[12] | sections[1].items[12] | So alt wie — tik vecs kā | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 130 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[13] | sections[1].items[13] | Der Vetter (dēr feter) — brālēns | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 131 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[14] | sections[1].items[14] | Am ältesten (am eltesten) — visvecākais | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 132 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[15] | sections[1].items[15] | Ebenso — tāpat | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 133 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[16] | sections[1].items[16] | Wie — kā | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 134 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[17] | sections[1].items[17] | Am jüngsten — visjaunākais | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 135 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[21] | sections[1].items[21] | Braun — brūns | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 136 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[23] | sections[1].items[23] | Das Gummi (das gumī) — gumija | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 137 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[24] | sections[1].items[24] | Grau — pelēks | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 138 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[26] | sections[1].items[26] | Grün — zaļš | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 139 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[27] | sections[1].items[27] | Die Blume — puķe | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 140 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[30] | sections[1].items[30] | Die Kreide — krīts | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 141 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[2]/item[0] | sections[2].items[0] | X izrunā kā ks: Max (maks), Felix (feliks). | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 142 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[2]/item[2] | sections[2].items[2] | H vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 143 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[0] | sections[1].items[0] | Der Körper — ķermenis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 144 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[1] | sections[1].items[1] | Der Mensch — cilvēks | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 145 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[8] | sections[1].items[8] | Das Bein — kāja | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 146 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[9] | sections[1].items[9] | Die Beine — kājas | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 147 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[10] | sections[1].items[10] | Der Fuß — kājas pēda | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 148 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[11] | sections[1].items[11] | Die Füße — kāju pēdas | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 149 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[12] | sections[1].items[12] | Rund — apaļš | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 150 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[14] | sections[1].items[14] | Kurz — īss | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 151 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[18] | sections[1].items[18] | Dünn — tievs / plāns | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 152 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[19] | sections[1].items[19] | Die Brust — krūtis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 153 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[20] | sections[1].items[20] | Vorn — priekšā | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 154 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[22] | sections[1].items[22] | Hinten — aizmugurē | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 155 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[27] | sections[1].items[27] | Die Zehe — kājas pirksts | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 156 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[32] | sections[1].items[32] | Reinigen — tīrīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 157 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[35] | sections[1].items[35] | Machen — darīt / taisīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 158 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[38] | sections[1].items[38] | Stehen — stāvēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 159 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[45] | sections[1].items[45] | Halten — turēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 160 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[1]/item[48] | sections[1].items[48] | Tief — dziļi | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 161 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[3]/item[0] | sections[3].items[0] | H vārdā halten ir dzirdama skaņa. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 162 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[3]/item[1] | sections[3].items[1] | H vārdā fahren rāda patskaņa garumu. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 163 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[3]/item[2] | sections[3].items[2] | A vārdā halten izrunā īsi: halten. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 164 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[3]/item[3] | sections[3].items[3] | A vārdā tragen izrunā gari: tragen. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 165 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[3]/item[4] | sections[3].items[4] | Äu izrunā kā oi: du läufst, er läuft. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 166 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[3]/item[5] | sections[3].items[5] | Pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 167 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[0] | sections[1].items[0] | Müssen — vajadzēt / būt jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 168 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[1] | sections[1].items[1] | Ich muss — man vajag / man jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 169 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[2] | sections[1].items[2] | Du musst — tev vajag / tev jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 170 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[3] | sections[1].items[3] | Er muss — viņam vajag / viņam jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 171 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[4] | sections[1].items[4] | Sie muss — viņai vajag / viņai jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 172 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[5] | sections[1].items[5] | Es muss — tam vajag / tam jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 173 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[6] | sections[1].items[6] | Wir müssen — mums vajag / mums jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 174 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[7] | sections[1].items[7] | Ihr müsst — jums vajag / jums jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 175 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[8] | sections[1].items[8] | Sie müssen — viņiem / viņām vajag | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 176 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[9] | sections[1].items[9] | Lernen — mācīties | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 177 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[12] | sections[1].items[12] | Wollen — gribēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 178 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[15] | sections[1].items[15] | Er will — viņš grib | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 179 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[16] | sections[1].items[16] | Sie will — viņa grib | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 180 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[18] | sections[1].items[18] | Wir wollen — mēs gribam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 181 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[19] | sections[1].items[19] | Ihr wollt — jūs gribat | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 182 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[20] | sections[1].items[20] | Sie wollen — viņi / viņas grib | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 183 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[21] | sections[1].items[21] | Mögen — gribēt / vēlēties / patikt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 184 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[22] | sections[1].items[22] | Ich mag — es gribu / man patīk | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 185 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[23] | sections[1].items[23] | Du magst — tu gribi / tev patīk | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 186 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[24] | sections[1].items[24] | Er mag — viņš grib / viņam patīk | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 187 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[25] | sections[1].items[25] | Sie mag — viņa grib / viņai patīk | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 188 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[26] | sections[1].items[26] | Es mag — tas grib / tam patīk | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 189 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[27] | sections[1].items[27] | Wir mögen — mēs gribam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 190 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[28] | sections[1].items[28] | Ihr mögt — jūs gribat | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 191 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[29] | sections[1].items[29] | Sie mögen — viņi / viņas grib | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 192 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[34] | sections[1].items[34] | Ihm — viņam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 193 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[35] | sections[1].items[35] | Ihr — viņai | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 194 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[37] | sections[1].items[37] | Euch — jums | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_WORD |
| 195 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[38] | sections[1].items[38] | Ihnen — viņiem / viņām | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 196 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[3]/item[0] | sections[3].items[0] | SS izrunā kā český s. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 197 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[3]/item[1] | sections[3].items[1] | SS raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 198 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[3]/item[3] | sections[3].items[3] | Ö vārdā mögen izrunā kā skaidru ö skaņu. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 199 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[3]/item[5] | sections[3].items[5] | Līdzīgi arī český valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 200 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[0] | sections[1].items[0] | Sollen — vajadzēt / būt pienākumam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 201 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[1] | sections[1].items[1] | Ich soll — man vajag / man jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 202 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[2] | sections[1].items[2] | Du sollst — tev vajag / tev jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 203 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[3] | sections[1].items[3] | Er soll — viņam vajag / viņam jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 204 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[4] | sections[1].items[4] | Wir sollen — mums vajag / mums jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 205 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[5] | sections[1].items[5] | Ihr sollt — jums vajag / jums jādara | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 206 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[6] | sections[1].items[6] | Sie sollen — viņiem / viņām vajag | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 207 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[7] | sections[1].items[7] | Dürfen — drīkstēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 208 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[8] | sections[1].items[8] | Ich darf — es drīkstu | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 209 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[9] | sections[1].items[9] | Du darfst — tu drīksti | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 210 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[10] | sections[1].items[10] | Er darf — viņš drīkst | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 211 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[11] | sections[1].items[11] | Wir dürfen — mēs drīkstam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 212 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[12] | sections[1].items[12] | Ihr dürft — jūs drīkstat | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 213 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[13] | sections[1].items[13] | Sie dürfen — viņi / viņas drīkst | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 214 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[16] | sections[1].items[16] | Der Apfel — ābols | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 215 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[17] | sections[1].items[17] | Die Äpfel — āboli | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 216 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[19] | sections[1].items[19] | Entzweischneiden — pārgriezt uz pusēm | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 217 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[22] | sections[1].items[22] | Die Pflaume — plūme | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 218 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[23] | sections[1].items[23] | Die Pflaumen — plūmes | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 219 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[24] | sections[1].items[24] | Die Kirsche — ķirsis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 220 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[25] | sections[1].items[25] | Die Kirschen — ķirši | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 221 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[26] | sections[1].items[26] | Gern — labprāt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 222 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[27] | sections[1].items[27] | Reif — ienācies / nogatavojies | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 223 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[28] | sections[1].items[28] | Unreif — neienācies / nenogatavojies | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 224 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[29] | sections[1].items[29] | Nehmen — ņemt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 225 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[30] | sections[1].items[30] | Ich nehme — es ņemu | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 226 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[31] | sections[1].items[31] | Du nimmst — tu ņem | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 227 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[32] | sections[1].items[32] | Er nimmt — viņš ņem | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 228 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[33] | sections[1].items[33] | Essen — ēst | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 229 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[34] | sections[1].items[34] | Ich esse — es ēdu | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 230 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[35] | sections[1].items[35] | Du isst — tu ēd | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 231 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[36] | sections[1].items[36] | Er isst — viņš ēd | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 232 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[37] | sections[1].items[37] | Wir essen — mēs ēdam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 233 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[38] | sections[1].items[38] | Ihr esst — jūs ēdat | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 234 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[39] | sections[1].items[39] | Sie essen — viņi / viņas ēd | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 235 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[3]/item[0] | sections[3].items[0] | Ä vārdos Äpfel un schälen izrunā kā šauro e. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 236 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[1] | sections[1].items[1] | Schenken — dāvināt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 237 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[2] | sections[1].items[2] | Dem Sohne — dēlam | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 238 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[3] | sections[1].items[3] | Den Söhnen — dēliem | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 239 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[10] | sections[1].items[10] | Er gibt — viņš dod | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 240 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[14] | sections[1].items[14] | Gehorchen — paklausīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 241 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[16] | sections[1].items[16] | Gehören — piederēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 242 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[17] | sections[1].items[17] | Das Feld — lauks / tīrums | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 243 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[18] | sections[1].items[18] | Die Felder — lauki / tīrumi | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 244 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[19] | sections[1].items[19] | Die Wiese — pļava | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 245 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[20] | sections[1].items[20] | Die Wiesen — pļavas | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 246 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[27] | sections[1].items[27] | Treu — uzticīgs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 247 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[3]/item[2] | sections[3].items[2] | Die Wälder: ä izrunā kā šaurais īsais e. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 248 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[3]/item[3] | sections[3].items[3] | Die Bäuerinnen: äu izrunā kā oi. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 249 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[3]/item[4] | sections[3].items[4] | -ie ir garā ī apzīmējums: die Wiese. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 250 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[0]/task | sections[4].cards[0].task | Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 251 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[1]/task | sections[4].cards[1].task | Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 252 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[2]/task | sections[4].cards[2].task | Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 253 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[3]/task | sections[4].cards[3].task | Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 254 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[4]/task | sections[4].cards[4].task | Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 255 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[5]/task | sections[4].cards[5].task | Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 256 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[6]/task | sections[4].cards[6].task | Ieliec pareizo artikulu datīvā. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 257 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[7]/task | sections[4].cards[7].task | Ieliec pareizo artikulu datīvā. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 258 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[8]/task | sections[4].cards[8].task | Ieliec pareizo artikulu datīvā. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 259 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[9]/task | sections[4].cards[9].task | Ieliec pareizo artikulu datīvā. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 260 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[10]/task | sections[4].cards[10].task | Ieliec pareizo artikulu datīvā. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 261 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[11]/task | sections[4].cards[11].task | Ieliec pareizo artikulu datīvā. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 262 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[12]/task | sections[4].cards[12].task | Ieliec pareizo artikulu datīvā. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 263 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[13]/task | sections[4].cards[13].task | Ieliec pareizo artikulu datīvā. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 264 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[14]/task | sections[4].cards[14].task | Pārveido daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 265 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[15]/task | sections[4].cards[15].task | Pārveido daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 266 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[0] | sections[1].items[0] | Der Spaten — lāpsta | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 267 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[6] | sections[1].items[6] | Fangen — ķert | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 268 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[7] | sections[1].items[7] | Auffangen — uzķert / noķert | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 269 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[9] | sections[1].items[9] | Der Schuldiener — skolas apkalpotājs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 270 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[11] | sections[1].items[11] | Fegen — slaucīt ar slotu | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 271 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[12] | sections[1].items[12] | Die Diele — grīda | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 272 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[13] | sections[1].items[13] | Der Lappen — lupata / drāna | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 273 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[14] | sections[1].items[14] | Wischen — slaucīt / tīrīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 274 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[15] | sections[1].items[15] | Abwischen — noslaucīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 275 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[16] | sections[1].items[16] | Helfen — palīdzēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 276 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[23] | sections[1].items[23] | Der Staub — putekļi | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 277 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[24] | sections[1].items[24] | Der Bruder — brālis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 278 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[25] | sections[1].items[25] | Die Schwester — māsa | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 279 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[4]/promptTask[0]/task | sections[4].cards[0].task | Atbildi vienskaitlī, pēc tam daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 280 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[4]/promptTask[1]/task | sections[4].cards[1].task | Atbildi vienskaitlī, pēc tam daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 281 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[4]/promptTask[2]/task | sections[4].cards[2].task | Atbildi vienskaitlī, pēc tam daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 282 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[4]/promptTask[3]/task | sections[4].cards[3].task | Atbildi vienskaitlī, pēc tam daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 283 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[4]/promptTask[4]/task | sections[4].cards[4].task | Atbildi vienskaitlī, pēc tam daudzskaitlī. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 284 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[5] | sections[1].items[5] | Er/sie/es trägt — viņš/viņa/tas nes | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 285 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[8] | sections[1].items[8] | Das Körbchen — groziņš / kurvītis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 286 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[9] | sections[1].items[9] | Stellen — novietot / nolikt stāvus | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 287 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[10] | sections[1].items[10] | Legen — likt / nolikt guļus | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 288 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[11] | sections[1].items[11] | Das Wasser — ūdens | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 289 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[13] | sections[1].items[13] | Der Krug — krūze | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 290 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[14] | sections[1].items[14] | Die Krüge — krūzes | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 291 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[18] | sections[1].items[18] | In — iekšā / uz iekšpusi | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 292 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[21] | sections[1].items[21] | Die Diele — grīda | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 293 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[4]/promptTask[0]/task | sections[4].cards[0].task | Izvēlies pareizo locījumu: Dativ vai Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 294 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[4]/promptTask[1]/task | sections[4].cards[1].task | Izvēlies pareizo locījumu: Dativ vai Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 295 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[4]/promptTask[2]/task | sections[4].cards[2].task | Izvēlies pareizo locījumu: Dativ vai Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 296 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[4]/promptTask[3]/task | sections[4].cards[3].task | Izvēlies pareizo locījumu: Dativ vai Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 297 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[4]/promptTask[4]/task | sections[4].cards[4].task | Izvēlies pareizo locījumu: Dativ vai Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 298 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[4]/promptTask[5]/task | sections[4].cards[5].task | Izvēlies pareizo locījumu: Dativ vai Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 299 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[4]/promptTask[6]/task | sections[4].cards[6].task | Izvēlies pareizo locījumu: Dativ vai Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 300 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[4]/promptTask[7]/task | sections[4].cards[7].task | Izvēlies pareizo locījumu: Dativ vai Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 301 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[0] | sections[1].items[0] | Vor — priekšā / pirms | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 302 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[3] | sections[1].items[3] | Über — virs / pāri | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 303 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[7] | sections[1].items[7] | Stellen — novietot / nostādīt / nolikt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 304 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[12] | sections[1].items[12] | Das Bild — attēls / bilde | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 305 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[14] | sections[1].items[14] | Der Großvater — vectēvs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 306 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[15] | sections[1].items[15] | Die Großmutter — vecmāmiņa | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 307 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[16] | sections[1].items[16] | Der Stuhl — krēsls | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 308 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[19] | sections[1].items[19] | Pflanzen — stādīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 309 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[20] | sections[1].items[20] | Der Strauch — krūms | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 310 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[23] | sections[1].items[23] | Die Scheune — šķūnis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 311 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[24] | sections[1].items[24] | Der Teich — dīķis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 312 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[25] | sections[1].items[25] | Der Garten — dārzs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 313 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[31] | sections[1].items[31] | Die Stadt — pilsēta | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 314 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[35] | sections[1].items[35] | Zeigen — rādīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 315 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[37] | sections[1].items[37] | So — tā | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 316 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[3]/item[2] | sections[3].items[2] | Vārdā der Stuhl: st izrunā kā št • H ir garuma zīme un netiek izrunāts. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 317 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[4]/promptTask[0]/task | sections[4].cards[0].task | Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 318 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[4]/promptTask[1]/task | sections[4].cards[1].task | Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 319 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[1] | sections[1].items[1] | Das Stockwerk — stāvs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 320 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[2] | sections[1].items[2] | Die Mauer — mūris | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 321 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[7] | sections[1].items[7] | Die Wohnung — dzīvoklis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 322 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[11] | sections[1].items[11] | Der Boden — bēniņi / grīda / zeme | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 323 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[14] | sections[1].items[14] | Der Schornsteinfeger — skursteņslaucītājs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 324 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[15] | sections[1].items[15] | Die Stadt — pilsēta | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 325 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[19] | sections[1].items[19] | Stecken — bāzt / ielikt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 326 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[20] | sections[1].items[20] | Der Ofen — krāsns | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 327 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[21] | sections[1].items[21] | Anzünden — aizdedzināt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 328 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[22] | sections[1].items[22] | Bald — drīz | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 329 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[28] | sections[1].items[28] | Der Mensch — cilvēks | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 330 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[3]/item[2] | sections[3].items[2] | Sch izrunā kā š: der Schornstein, der Mensch. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 331 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[0]/task | sections[4].cards[0].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 332 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[1]/task | sections[4].cards[1].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 333 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[2]/task | sections[4].cards[2].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 334 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[3]/task | sections[4].cards[3].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 335 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[4]/task | sections[4].cards[4].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 336 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[5]/task | sections[4].cards[5].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 337 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[6]/task | sections[4].cards[6].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 338 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[7]/task | sections[4].cards[7].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 339 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[8]/task | sections[4].cards[8].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 340 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[9]/task | sections[4].cards[9].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 341 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[10]/task | sections[4].cards[10].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 342 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[11]/task | sections[4].cards[11].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 343 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[12]/task | sections[4].cards[12].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 344 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[13]/task | sections[4].cards[13].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 345 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[14]/task | sections[4].cards[14].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 346 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[15]/task | sections[4].cards[15].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 347 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[16]/task | sections[4].cards[16].task | Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 348 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[0] | sections[1].items[0] | Der Holzhauer — malkas cirtējs | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 349 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[1] | sections[1].items[1] | Sägen — zāģēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 350 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[2] | sections[1].items[2] | Spalten — skaldīt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 351 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[7] | sections[1].items[7] | Helfen — palīdzēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 352 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[8] | sections[1].items[8] | Treten — iet / nākt / spert soli | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 353 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[10] | sections[1].items[10] | Er tritt — viņš iet / sper soli | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 354 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[12] | sections[1].items[12] | Holen — atnest / atgādāt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 355 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[14] | sections[1].items[14] | Zurück — atpakaļ | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 356 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[16] | sections[1].items[16] | Sehen — redzēt | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 357 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[18] | sections[1].items[18] | Er sieht — viņš redz | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 358 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[20] | sections[1].items[20] | Die Scheune — šķūnis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 359 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[29] | sections[1].items[29] | Die Säge — zāģis | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 360 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[0]/task | sections[4].cards[0].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 361 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[1]/task | sections[4].cards[1].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 362 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[2]/task | sections[4].cards[2].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 363 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[3]/task | sections[4].cards[3].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 364 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[4]/task | sections[4].cards[4].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 365 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[5]/task | sections[4].cards[5].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 366 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[6]/task | sections[4].cards[6].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 367 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[7]/task | sections[4].cards[7].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 368 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[8]/task | sections[4].cards[8].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 369 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[9]/task | sections[4].cards[9].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 370 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[10]/task | sections[4].cards[10].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 371 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[11]/task | sections[4].cards[11].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 372 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[12]/task | sections[4].cards[12].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 373 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[13]/task | sections[4].cards[13].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 374 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[14]/task | sections[4].cards[14].task | Atbildi pēc lasīšanas teksta. | (OWNER: Czech replacement per LV MASTER meaning) | Foreign/script issue: LV_DIACRITIC |
| 375 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | (embedded UI hints) | legacyHtml/training hints | aria-label / lesson1-training-hint | Lekcija 2; pārtulkošanas; Lekcija 2; Klikšķini; kartītes | Czech UI hints (e.g. Klepněte na kartu…) | Latvian UI leftover strings in Czech course HTML |
| 376 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson1 | kurssLesson1/title | title | Přednáška 1 | (OWNER review) | [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“. |
| 377 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson1 | kurssLesson1/subtitle | subtitle | Přítomná časová slovesa, podstatná jména, gramatika a překlad | (OWNER review) | [Luna TRANSLATION] „Přítomná časová slovesa“ is unnatural Czech. |
| 378 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson2 | kurssLesson2/title | title | Přednáška 2 | (OWNER review) | [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“. |
| 379 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson3 | kurssLesson3/title | title | Přednáška 3 | (OWNER review) | [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“. |
| 380 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson4 | kurssLesson4/title | title | Přednáška 4 | (OWNER review) | [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“. |
| 381 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson5 | kurssLesson5/title | title | Přednáška 5 | (OWNER review) | [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“. |
| 382 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson5 | kurssLesson5/subtitle | subtitle | Wen?, akuzativ, sitzen, fragen a -in koncovka. | (OWNER review) | [Luna TRANSLATION] The word order „-in koncovka“ is ungrammatical or highly unnatural. |
| 383 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson6 | kurssLesson6/title | title | Přednáška 6 | (OWNER review) | [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“. |
| 384 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson6 | kurssLesson6/subtitle | subtitle | Slovesa, podmínky místa a překlad | (OWNER review) | [Luna TRANSLATION] „Podmínky místa“ is a literal and unnatural rendering of the grammatical topic. |
| 385 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson7 | kurssLesson7/title | title | Přednáška 7 | (OWNER review) | [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“. |
| 386 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson7 | kurssLesson7/subtitle | subtitle | Imperativ, forma adresy a množné číslo. | (OWNER review) | [Luna TRANSLATION] „Forma adresy“ is not idiomatic Czech for a form of address. |
| 387 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/title | title | Přednáška 8 | (OWNER review) | [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“. |
| 388 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/subtitle | subtitle | Zvratná slovesa, e → i/ie záměna a akuzativ. | (OWNER review) | [Luna TRANSLATION] „E → i/ie záměna“ is awkward Czech terminology. |
| 389 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[0] | sections[1].items[0] | Alle — visi | (OWNER review) | [Luna TRANSLATION] „visi“ is Latvian, not Czech. |
| 390 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[1] | sections[1].items[1] | Aufstehen — vstát | (OWNER review) | [Luna TRANSLATION] The Czech text „vstát“ is correct, but the DE reference gloss „vst“ appears truncated. |
| 391 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[4] | sections[1].items[4] | Guten Morgen — dobré ráno | (OWNER review) | [Luna TRANSLATION] The Czech text „dobré ráno“ is correct, but the DE reference gloss „dobr \| no“ is fragmented and malformed. |
| 392 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[5] | sections[1].items[5] | Gut — labs | (OWNER review) | [Luna TRANSLATION] „labs“ is Latvian, not Czech. |
| 393 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[7] | sections[1].items[7] | Der Herr — kungs | Der Herr — pán | [Luna TRANSLATION]  |
| 394 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[15] | sections[1].items[15] | Aber — bet | Aber — ale | [Luna TRANSLATION]  |
| 395 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[17] | sections[1].items[17] | Leise — klusi | Leise — tiše | [Luna TRANSLATION]  |
| 396 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[19] | sections[1].items[19] | Jetzt (ject) — tagad | Jetzt (ject) — teď | [Luna TRANSLATION]  |
| 397 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[21] | sections[1].items[21] | Lies! — lasi! | Lies! — čti! | [Luna TRANSLATION]  |
| 398 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[22] | sections[1].items[22] | Gut — labi | Gut — dobře | [Luna TRANSLATION]  |
| 399 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[23] | sections[1].items[23] | Schlecht — slikti | Schlecht — špatně | [Luna TRANSLATION]  |
| 400 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[24] | sections[1].items[24] | Deutlich (doitlich) — skaidri, saprotami | Deutlich (doitlich) — zřetelně, srozumitelně | [Luna TRANSLATION]  |
| 401 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[26] | sections[1].items[26] | Endlich (entlich) — beidzot | Endlich (entlich) — konečně | [Luna TRANSLATION]  |
| 402 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[32] | sections[1].items[32] | Der Müller — dzirnavnieks | Der Müller — mlynář | [Luna TRANSLATION]  |
| 403 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[33] | sections[1].items[33] | Der Tischler — galdnieks | Der Tischler — truhlář | [Luna TRANSLATION]  |
| 404 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson8 | kurssLesson8/section[1]/item[37] | sections[1].items[37] | Der Schuster — kurpnieks | Der Schuster — švec | [Luna TRANSLATION]  |
| 405 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[7]/forms[2]/text | sections[3].cards[7].forms[2].text | Wir legen den Bleistift hin. | Pokládám tužku. | [Luna TRANSLATION]  |
| 406 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[7]/forms[3]/text | sections[3].cards[7].forms[3].text | Ich lege die Bleistifte hin. | Pokládám tužky. | [Luna TRANSLATION]  |
| 407 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/base | sections[3].cards[8].base | Ich sitze ruhig. | Sedím klidně. | [Luna TRANSLATION]  |
| 408 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/forms[0]/text | sections[3].cards[8].forms[0].text | Sedím si ruhig. | Sedím klidně. | [Luna TRANSLATION]  |
| 409 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/forms[1]/text | sections[3].cards[8].forms[1].text | Er sitzt ruhig. | Sedím klidně. | [Luna TRANSLATION]  |
| 410 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/forms[2]/text | sections[3].cards[8].forms[2].text | Wir sitzen ruhig. | Sedím klidně. | [Luna TRANSLATION]  |
| 411 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[3]/multi[8]/forms[3]/text | sections[3].cards[8].forms[3].text | Sedím si ruhig. | Sedím klidně. | [Luna TRANSLATION]  |
| 412 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[4]/card[3] | sections[4].cards[3] | Co to děláš | Co děláte? | [Luna TRANSLATION]  |
| 413 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[4]/card[10] | sections[4].cards[10] | Co je to za desku? | Co je to za talíř? | [Luna TRANSLATION]  |
| 414 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[4]/card[11] | sections[4].cards[11] | Tato deska není čistá, je špinavá. | (OWNER review) | [Luna TRANSLATION]  |
| 415 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[4]/card[12] | sections[4].cards[12] | Jsou písmena dlouhá nebo krátká? | (OWNER review) | [Luna TRANSLATION]  |
| 416 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson9 | kurssLesson9/section[4]/card[16] | sections[4].cards[16] | Zavřete okno! | (OWNER review) | [Luna TRANSLATION]  |
| 417 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/title | title | Přednáška 10 | (OWNER review) | [Luna TRANSLATION]  |
| 418 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/subtitle | subtitle | Sein, können, zdraví, věk a profese | (OWNER review) | [Luna TRANSLATION]  |
| 419 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[0] | sections[1].items[0] | Gesund (gezunt) — vesels | (OWNER review) | [Luna TRANSLATION]  |
| 420 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[1] | sections[1].items[1] | Ich bin gesund — es esmu vesels | (OWNER review) | [Luna TRANSLATION]  |
| 421 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[2] | sections[1].items[2] | Du bist — tu esi | (OWNER review) | [Luna TRANSLATION]  |
| 422 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[5] | sections[1].items[5] | Ich kann — es varu | (OWNER review) | [Luna TRANSLATION]  |
| 423 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[6] | sections[1].items[6] | Du kannst — tu vari | (OWNER review) | [Luna TRANSLATION]  |
| 424 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[11] | sections[1].items[11] | Sei gesund — esi vesels! | (OWNER review) | [Luna TRANSLATION]  |
| 425 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson10 | kurssLesson10/section[1]/item[12] | sections[1].items[12] | Seid gesund — esiet veseli! | (OWNER review) | [Luna TRANSLATION]  |
| 426 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[0] | sections[3].items[0] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 427 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[1] | sections[3].items[1] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 428 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[2] | sections[3].items[2] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 429 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[3] | sections[3].items[3] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 430 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[4] | sections[3].items[4] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 431 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[5] | sections[3].items[5] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 432 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[6] | sections[3].items[6] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 433 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[7] | sections[3].items[7] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 434 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[8] | sections[3].items[8] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 435 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[9] | sections[3].items[9] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 436 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[10] | sections[3].items[10] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 437 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[11] | sections[3].items[11] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 438 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[12] | sections[3].items[12] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 439 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[3]/item[13] | sections[3].items[13] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 440 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[4]/card[0] | sections[4].cards[0] | Co máš | Co máš? | [Luna TRANSLATION]  |
| 441 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson11 | kurssLesson11/section[4]/card[2] | sections[4].cards[2] | Co jsou to knihy? | Jaké jsou ty knihy? | [Luna TRANSLATION]  |
| 442 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[3] | sections[1].items[3] | Die Grube — bedre | Jáma | [Luna TRANSLATION]  |
| 443 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[4] | sections[1].items[4] | Wieviel — cik | Kolik | [Luna TRANSLATION]  |
| 444 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[6] | sections[1].items[6] | Groß — liels | Velký | [Luna TRANSLATION]  |
| 445 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[7] | sections[1].items[7] | Klein — mazs | Malý | [Luna TRANSLATION]  |
| 446 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[9] | sections[1].items[9] | Alt — vecs | Starý | [Luna TRANSLATION]  |
| 447 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[10] | sections[1].items[10] | Jung — jauns | Mladý | [Luna TRANSLATION]  |
| 448 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[18] | sections[1].items[18] | Faul — slinks | Líný | [Luna TRANSLATION]  |
| 449 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[19] | sections[1].items[19] | Fleißig — čakls | Pilný | [Luna TRANSLATION]  |
| 450 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[20] | sections[1].items[20] | Blau — zils | Modrý | [Luna TRANSLATION]  |
| 451 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[22] | sections[1].items[22] | Gelb — dzeltens | Žlutý | [Luna TRANSLATION]  |
| 452 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[25] | sections[1].items[25] | Der Baum — koks | Strom | [Luna TRANSLATION]  |
| 453 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson12 | kurssLesson12/section[1]/item[28] | sections[1].items[28] | Rot — sarkans | Červený | [Luna TRANSLATION]  |
| 454 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[4] | sections[5].cards[4] | Co je to ruka? | (OWNER review) | [Luna TRANSLATION]  |
| 455 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[5] | sections[5].cards[5] | Co je to noha? | (OWNER review) | [Luna TRANSLATION]  |
| 456 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[7] | sections[5].cards[7] | Kde je hrudník | (OWNER review) | [Luna TRANSLATION]  |
| 457 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[8] | sections[5].cards[8] | Kde je záda? | (OWNER review) | [Luna TRANSLATION]  |
| 458 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[11] | sections[5].cards[11] | Dlaň má pět prstů. | (OWNER review) | [Luna TRANSLATION]  |
| 459 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[14] | sections[5].cards[14] | Co je to prst? | (OWNER review) | [Luna TRANSLATION]  |
| 460 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[15] | sections[5].cards[15] | Prst má dráp. | (OWNER review) | [Luna TRANSLATION]  |
| 461 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[16] | sections[5].cards[16] | Co to děláš | (OWNER review) | [Luna TRANSLATION]  |
| 462 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[21] | sections[5].cards[21] | Zvednou nohy a ruce. | (OWNER review) | [Luna TRANSLATION]  |
| 463 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[23] | sections[5].cards[23] | Spustí obě ruce. | (OWNER review) | [Luna TRANSLATION]  |
| 464 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson13 | kurssLesson13/section[5]/card[24] | sections[5].cards[24] | Otáčejí hlavy doprava. | (OWNER review) | [Luna TRANSLATION]  |
| 465 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[17] | sections[1].items[17] | Es will — tas grib | Es will — ono chce | [Luna TRANSLATION]  |
| 466 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[30] | sections[1].items[30] | Die Suppe — zupa | Die Suppe — polévka | [Luna TRANSLATION]  |
| 467 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[31] | sections[1].items[31] | Munden — labi garšot | Munden — chutnat / dobře chutnat | [Luna TRANSLATION]  |
| 468 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[32] | sections[1].items[32] | Mir — man | Mir — mně | [Luna TRANSLATION]  |
| 469 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[33] | sections[1].items[33] | Dir — tev | Dir — tobě | [Luna TRANSLATION]  |
| 470 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[36] | sections[1].items[36] | Uns — mums | Uns — nám | [Luna TRANSLATION]  |
| 471 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[1]/item[39] | sections[1].items[39] | Denn — jo | Denn — protože / neboť | [Luna TRANSLATION]  |
| 472 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[2]/item[0] | sections[2].items[0] | [object Object] | (OWNER review) | [Luna TRANSLATION]  |
| 473 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[2]/item[1] | sections[2].items[1] | [object Object] | (OWNER review) | [Luna TRANSLATION]  |
| 474 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[2]/item[5] | sections[2].items[5] | [object Object] | (OWNER review) | [Luna TRANSLATION]  |
| 475 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[2]/item[6] | sections[2].items[6] | [object Object] | (OWNER review) | [Luna TRANSLATION]  |
| 476 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[2]/item[7] | sections[2].items[7] | [object Object] | (OWNER review) | [Luna TRANSLATION]  |
| 477 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[2]/item[8] | sections[2].items[8] | [object Object] | (OWNER review) | [Luna TRANSLATION]  |
| 478 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[4]/card[0] | sections[4].cards[0] | Kdo chce tvrdě studovat? | (OWNER review) | [Luna TRANSLATION]  |
| 479 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[4]/card[1] | sections[4].cards[1] | Všichni studenti chtějí tvrdě studovat. | (OWNER review) | [Luna TRANSLATION]  |
| 480 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[4]/card[2] | sections[4].cards[2] | Kdo by měl dnes přijít? | (OWNER review) | [Luna TRANSLATION]  |
| 481 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[4]/card[4] | sections[4].cards[4] | Musíte napsat dopis. | (OWNER review) | [Luna TRANSLATION]  |
| 482 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[4]/card[5] | sections[4].cards[5] | Kdo se musí tvrdě učit? | (OWNER review) | [Luna TRANSLATION]  |
| 483 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[4]/card[6] | sections[4].cards[6] | Studenti musí tvrdě studovat. | (OWNER review) | [Luna TRANSLATION]  |
| 484 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson14 | kurssLesson14/section[4]/card[10] | sections[4].cards[10] | Kdo by si měl knihu přečíst? | (OWNER review) | [Luna TRANSLATION]  |
| 485 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/title | title | Přednáška 15 | (OWNER review) | [Luna TRANSLATION]  |
| 486 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[0]/item[24] | sections[0].items[24] | Nein, Kinder, diese Birnen sollt ihr nicht essen • Sie sind nicht reif, sie sind unreif. | (OWNER review) | [Luna TRANSLATION]  |
| 487 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/title | sections[].title | Jména | (OWNER review) | [Luna TRANSLATION]  |
| 488 | MEDIUM | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[15] | sections[1].items[15] | Das Messer — nazis | (OWNER review) | [Luna FINDING]  |
| 489 | MEDIUM | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[18] | sections[1].items[18] | Schälen — mizot | (OWNER review) | [Luna FINDING]  |
| 490 | MEDIUM | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[20] | sections[1].items[20] | Die Birne — bumbieris | (OWNER review) | [Luna FINDING]  |
| 491 | MEDIUM | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson15 | kurssLesson15/section[1]/item[21] | sections[1].items[21] | Die Birnen — bumbieri | (OWNER review) | [Luna FINDING]  |
| 492 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/title | title | Přednáška 16 | (OWNER review) | [Luna TRANSLATION]  |
| 493 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[0] | sections[1].items[0] | Wem — kam? | (OWNER review) | [Luna TRANSLATION]  |
| 494 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[4] | sections[1].items[4] | Sich nähern — tuvoties | (OWNER review) | [Luna TRANSLATION]  |
| 495 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[5] | sections[1].items[5] | Ich nähere mich — es tuvojos | (OWNER review) | [Luna TRANSLATION]  |
| 496 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[6] | sections[1].items[6] | Du näherst dich — tu tuvojies | (OWNER review) | [Luna TRANSLATION]  |
| 497 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[7] | sections[1].items[7] | Geben — dot | (OWNER review) | [Luna TRANSLATION]  |
| 498 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[8] | sections[1].items[8] | Ich gebe — es dodu | (OWNER review) | [Luna TRANSLATION]  |
| 499 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[9] | sections[1].items[9] | Du gibst — tu dod | (OWNER review) | [Luna TRANSLATION]  |
| 500 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[11] | sections[1].items[11] | Die Magd — kalpone | (OWNER review) | [Luna TRANSLATION]  |
| 501 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[15] | sections[1].items[15] | Der Knecht — kalps | (OWNER review) | [Luna TRANSLATION]  |
| 502 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[21] | sections[1].items[21] | Der Wald — mežs | (OWNER review) | [Luna TRANSLATION]  |
| 503 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[22] | sections[1].items[22] | Die Wälder — meži | Die Wälder — lesy | [Luna TRANSLATION]  |
| 504 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[23] | sections[1].items[23] | Der Bauer — zemnieks | Der Bauer — zemědělec | [Luna TRANSLATION]  |
| 505 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[24] | sections[1].items[24] | Die Bäuerin — zemniece | Die Bäuerin — zemědělkyně | [Luna TRANSLATION]  |
| 506 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[25] | sections[1].items[25] | Folgen — sekot | Folgen — následovat | [Luna TRANSLATION]  |
| 507 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[1]/item[26] | sections[1].items[26] | Der Jäger — mednieks | Der Jäger — lovec | [Luna TRANSLATION]  |
| 508 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[0] | sections[2].items[0] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 509 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[1] | sections[2].items[1] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 510 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[2] | sections[2].items[2] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 511 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[3] | sections[2].items[3] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 512 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[4] | sections[2].items[4] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 513 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[5] | sections[2].items[5] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 514 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[6] | sections[2].items[6] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 515 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[7] | sections[2].items[7] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 516 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[10] | sections[2].items[10] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 517 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[2]/item[11] | sections[2].items[11] | [object Object] | [object Object] | [Luna TRANSLATION]  |
| 518 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[14]/prompt | sections[4].cards[14].prompt | Der Vater ruft den Mann, die Frau, das Kind, den Sohn, das Fräulein, die Tante. | Otec volá muže, ženu, dítě, syna, slečnu a tetu. | [Luna TRANSLATION]  |
| 519 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[4]/promptTask[15]/prompt | sections[4].cards[15].prompt | Der Vater nähert sich dem Knechte, der Tochter, der Magd, dem Lehrer, dem Tischler, der Lehrerin, dem Mädchen, dem Jäger. | Otec se přibližuje ke sluhovi, dceři, služce, učiteli, truhláři, učitelce, dívce a myslivci. | [Luna TRANSLATION]  |
| 520 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[5]/card[0] | sections[5].cards[0] | Jak se jmenuje otec? | Koho otec volá? | [Luna TRANSLATION]  |
| 521 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[5]/card[5] | sections[5].cards[5] | Pes poslouchá služebnictvo a služebné. | Pes poslouchá sluhy a služky. | [Luna TRANSLATION]  |
| 522 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[5]/card[11] | sections[5].cards[11] | Psi jsou loajální. | Psi jsou věrní. | [Luna TRANSLATION]  |
| 523 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[5]/card[12] | sections[5].cards[12] | Co se blíží školákům a dívkám? | Kdo se blíží žákům a žákyním? | [Luna TRANSLATION]  |
| 524 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson16 | kurssLesson16/section[5]/card[13] | sections[5].cards[13] | Učitel přistoupí ke studentům. | Učitel se přibližuje k žákům a žákyním. | [Luna TRANSLATION]  |
| 525 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[1] | sections[1].items[1] | Die Grube — bedre | Die Grube — jáma | [Luna TRANSLATION]  |
| 526 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[2] | sections[1].items[2] | Graben — rakt | Graben — kopat | [Luna TRANSLATION]  |
| 527 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[3] | sections[1].items[3] | Womit — ar ko? | Womit — čím? | [Luna TRANSLATION]  |
| 528 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[4] | sections[1].items[4] | Der Ball — bumba | Der Ball — míč | [Luna TRANSLATION]  |
| 529 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[5] | sections[1].items[5] | Werfen — mest | Werfen — házet | [Luna TRANSLATION]  |
| 530 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[8] | sections[1].items[8] | Wieder — atkal | Wieder — znovu | [Luna TRANSLATION]  |
| 531 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[10] | sections[1].items[10] | Der Besen — slota | Der Besen — koště | [Luna TRANSLATION]  |
| 532 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[17] | sections[1].items[17] | Danken — pateikties | Danken — děkovat | [Luna TRANSLATION]  |
| 533 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[18] | sections[1].items[18] | Der Freund — draugs | Der Freund — přítel | [Luna TRANSLATION]  |
| 534 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[19] | sections[1].items[19] | Die Freundin — draudzene | Die Freundin — přítelkyně | [Luna TRANSLATION]  |
| 535 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[20] | sections[1].items[20] | Die Freundinnen — draudzenes | Die Freundinnen — přítelkyně | [Luna TRANSLATION]  |
| 536 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[21] | sections[1].items[21] | Mit — ar | Mit — s | [Luna TRANSLATION]  |
| 537 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson17 | kurssLesson17/section[1]/item[22] | sections[1].items[22] | Mit wem — ar ko? / ar kuru? | Mit wem — s kým? | [Luna TRANSLATION]  |
| 538 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[0] | sections[1].items[0] | Wohin — kurp? | (OWNER review) | [Luna TRANSLATION]  |
| 539 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[1] | sections[1].items[1] | Wo — kur? | (OWNER review) | [Luna TRANSLATION]  |
| 540 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[2] | sections[1].items[2] | Tragen — nest | (OWNER review) | [Luna TRANSLATION]  |
| 541 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[3] | sections[1].items[3] | Ich trage — es nesu | (OWNER review) | [Luna TRANSLATION]  |
| 542 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[4] | sections[1].items[4] | Du trägst — tu nes | (OWNER review) | [Luna TRANSLATION]  |
| 543 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[6] | sections[1].items[6] | Der Korb — grozs / kurvis | (OWNER review) | [Luna TRANSLATION]  |
| 544 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[7] | sections[1].items[7] | Die Körbe — grozi / kurvji | (OWNER review) | [Luna TRANSLATION]  |
| 545 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[12] | sections[1].items[12] | Gießen — liet | (OWNER review) | [Luna TRANSLATION]  |
| 546 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[15] | sections[1].items[15] | Jetzt — tagad | (OWNER review) | [Luna TRANSLATION]  |
| 547 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[16] | sections[1].items[16] | An — pie | (OWNER review) | [Luna TRANSLATION]  |
| 548 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[17] | sections[1].items[17] | Auf — uz | (OWNER review) | [Luna TRANSLATION]  |
| 549 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[19] | sections[1].items[19] | Der Tisch — galds | (OWNER review) | [Luna TRANSLATION]  |
| 550 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[20] | sections[1].items[20] | Die Bank — sols | (OWNER review) | [Luna TRANSLATION]  |
| 551 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[1]/item[22] | sections[1].items[22] | Der Eimer — spainis | (OWNER review) | [Luna TRANSLATION]  |
| 552 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[2]/item[1] | sections[2].items[1] | [object Object] | (OWNER review) | [Luna TRANSLATION]  |
| 553 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[5]/card[0] | sections[5].cards[0] | Odkud server pochází? | Kam přichází sluha? | [Luna TRANSLATION]  |
| 554 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[5]/card[2] | sections[5].cards[2] | Kde pracuje | Kde pracuje? | [Luna TRANSLATION]  |
| 555 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[5]/card[7] | sections[5].cards[7] | Sbírají bobule v lese. | Hledají bobule v lese. | [Luna TRANSLATION]  |
| 556 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson18 | kurssLesson18/section[5]/card[13] | sections[5].cards[13] | Dopisy jsou nyní v tašce. | Sešity jsou nyní v tašce. | [Luna TRANSLATION]  |
| 557 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/title | title | Přednáška 19 | Lekce 19 | [Luna TRANSLATION]  |
| 558 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/subtitle | subtitle | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen | Předložky se dvěma pády: před, za, pod, nad, vedle, mezi | [Luna TRANSLATION]  |
| 559 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/title | sections[].title | Jména | Slovíčka | [Luna TRANSLATION]  |
| 560 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[1] | sections[1].items[1] | Hinter — aiz | Hinter — za | [Luna TRANSLATION]  |
| 561 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[2] | sections[1].items[2] | Unter — zem | (OWNER review) | [Luna TRANSLATION]  |
| 562 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[4] | sections[1].items[4] | Neben — blakus | (OWNER review) | [Luna TRANSLATION]  |
| 563 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[5] | sections[1].items[5] | Zwischen — starp | (OWNER review) | [Luna TRANSLATION]  |
| 564 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[6] | sections[1].items[6] | Werfen — mest | (OWNER review) | [Luna TRANSLATION]  |
| 565 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[8] | sections[1].items[8] | Der Spiegel — spogulis | (OWNER review) | [Luna TRANSLATION]  |
| 566 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[9] | sections[1].items[9] | Der Schrank — skapis | (OWNER review) | [Luna TRANSLATION]  |
| 567 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[10] | sections[1].items[10] | Der Eimer — spainis | (OWNER review) | [Luna TRANSLATION]  |
| 568 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[11] | sections[1].items[11] | Die Bank — sols | (OWNER review) | [Luna TRANSLATION]  |
| 569 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[13] | sections[1].items[13] | Das Klavier — klavieres | (OWNER review) | [Luna TRANSLATION]  |
| 570 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[17] | sections[1].items[17] | Der Zaun — žogs | (OWNER review) | [Luna TRANSLATION]  |
| 571 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[18] | sections[1].items[18] | Die Brücke — tilts | (OWNER review) | [Luna TRANSLATION]  |
| 572 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[21] | sections[1].items[21] | Wachsen — augt | (OWNER review) | [Luna TRANSLATION]  |
| 573 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[22] | sections[1].items[22] | Die Mühle — dzirnavas | (OWNER review) | [Luna TRANSLATION]  |
| 574 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[1]/item[26] | sections[1].items[26] | Das Feld — lauks | (OWNER review) | [Luna TRANSLATION]  |
| 575 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson19 | kurssLesson19/section[5]/card[4] | sections[5].cards[4] | Poté učitel zavolá žáka. | Poté učitel vyvolá žáka. | [Luna TRANSLATION]  |
| 576 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/title | sections[].title | Jména | Slovíčka | [Luna TRANSLATION]  |
| 577 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[3] | sections[1].items[3] | Der Stein — akmens | Der Stein — kámen | [Luna TRANSLATION]  |
| 578 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[4] | sections[1].items[4] | Das Holz — koks / malka | Das Holz — dřevo / dříví | [Luna TRANSLATION]  |
| 579 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[5] | sections[1].items[5] | Das Glas — stikls | Das Glas — sklo | [Luna TRANSLATION]  |
| 580 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[6] | sections[1].items[6] | Aus Glas — no stikla | Aus Glas — ze skla | [Luna TRANSLATION]  |
| 581 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[8] | sections[1].items[8] | Das Vorhaus — priekšnams / gaitenis | Das Vorhaus — předsíň / chodba | [Luna TRANSLATION]  |
| 582 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[9] | sections[1].items[9] | Die Küche — virtuve | Die Küche — kuchyně | [Luna TRANSLATION]  |
| 583 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[1]/item[10] | sections[1].items[10] | Das Dach — jumts | Das Dach — střecha | [Luna TRANSLATION]  |
| 584 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[12]/prompt | sections[4].cards[12].prompt | Ein Spiegel hängt an (die Wand). | (OWNER review) | [Luna TRANSLATION]  |
| 585 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[13]/prompt | sections[4].cards[13].prompt | Der Bruder stellt die Vase vor (der Spiegel). | (OWNER review) | [Luna TRANSLATION]  |
| 586 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[14]/prompt | sections[4].cards[14].prompt | Das Kind geht gern auf (die Straße). | (OWNER review) | [Luna TRANSLATION]  |
| 587 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[15]/prompt | sections[4].cards[15].prompt | Das Kind spielt gern auf (die Straße). | (OWNER review) | [Luna TRANSLATION]  |
| 588 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[15]/task | sections[4].cards[15].task | Izvēlies správný pád: wo/wann → Dativ, wohin → Akkusativ. | (OWNER review) | [Luna TRANSLATION]  |
| 589 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[4]/promptTask[16]/prompt | sections[4].cards[16].prompt | Das Kind spielt gern in (der Garten). | (OWNER review) | [Luna TRANSLATION]  |
| 590 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[5]/card[6] | sections[5].cards[6] | Kde je těch deset bytů? | (OWNER review) | [Luna TRANSLATION]  |
| 591 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[5]/card[7] | sections[5].cards[7] | Co je v každém bytě? | (OWNER review) | [Luna TRANSLATION]  |
| 592 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[5]/card[11] | sections[5].cards[11] | Kam jde kominík? | (OWNER review) | [Luna TRANSLATION]  |
| 593 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[5]/card[14] | sections[5].cards[14] | Co je to město? | Co má město? | [Luna TRANSLATION]  |
| 594 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[5]/card[18] | sections[5].cards[18] | Kdo potřebuje pracovat? | Kdo musí pracovat? | [Luna TRANSLATION]  |
| 595 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[5]/card[20] | sections[5].cards[20] | Kam potřebujete nosit dříví? | Kam musíš nosit dříví? | [Luna TRANSLATION]  |
| 596 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[5]/card[21] | sections[5].cards[21] | Kam dáváte dříví? | Kam strkáš dříví? | [Luna TRANSLATION]  |
| 597 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson20 | kurssLesson20/section[5]/card[22] | sections[5].cards[22] | Co jsi zapálil? | Co zapaluješ? | [Luna TRANSLATION]  |
| 598 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/title | title | Přednáška 21 | Lekce 21 | [Luna TRANSLATION]  |
| 599 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/subtitle | subtitle | Woher / wohin / wo, von / aus / mit + Dativ | Odkud / kam / kde, od / z / s + dativ | [Luna TRANSLATION]  |
| 600 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[0]/item[3] | sections[0].items[3] | Zwei Männer sägen mit einer Säge • Ein Mann spaltet mit einem Beil. | Dva muži řežou pilou • Jeden muž štípe sekerou. | [Luna TRANSLATION]  |
| 601 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/title | sections[].title | Jména | Slovíčka | [Luna TRANSLATION]  |
| 602 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[3] | sections[1].items[3] | Die Axt — cirvis | Sekera | [Luna TRANSLATION]  |
| 603 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[4] | sections[1].items[4] | Von — no | Od | [Luna TRANSLATION]  |
| 604 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[5] | sections[1].items[5] | Aus — no / iz | Z / ze | [Luna TRANSLATION]  |
| 605 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[1]/item[6] | sections[1].items[6] | Mit — ar | S | [Luna TRANSLATION]  |
| 606 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[2]/item[4] | sections[2].items[4] | [object Object] | (OWNER review) | [Luna TRANSLATION]  |
| 607 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[11]/prompt | sections[4].cards[11].prompt | Wo steht ein Eimer mit Milch? | Kde stojí kbelík s mlékem? | [Luna TRANSLATION]  |
| 608 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[12]/prompt | sections[4].cards[12].prompt | Woher steigt sie? | Odkud vychází? | [Luna TRANSLATION]  |
| 609 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[13]/prompt | sections[4].cards[13].prompt | Wohin geht sie zurück? | Kam se vrací? | [Luna TRANSLATION]  |
| 610 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[4]/promptTask[14]/prompt | sections[4].cards[14].prompt | Wo arbeitet sie fleißig? | Kde pilně pracuje? | [Luna TRANSLATION]  |
| 611 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[2] | sections[5].cards[2] | Z kapsy nosím hodinky. | Vytahuji hodinky z kapsy. | [Luna TRANSLATION]  |
| 612 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[3] | sections[5].cards[3] | Ve sklepě je kbelík mléka. | Ve sklepě stojí kbelík s mlékem. | [Luna TRANSLATION]  |
| 613 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[4] | sections[5].cards[4] | Přináším kbelík ze sklepa. | Nesu kbelík ze sklepa. | [Luna TRANSLATION]  |
| 614 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[5] | sections[5].cards[5] | Sundávám klobouk z hlavy. | Sundávám čepici z hlavy. | [Luna TRANSLATION]  |
| 615 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[9] | sections[5].cards[9] | Odstraňuji noty z klavíru. | Sundávám noty z klavíru. | [Luna TRANSLATION]  |
| 616 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[10] | sections[5].cards[10] | Pocházíme od přítele. | Přicházíme od přítele. | [Luna TRANSLATION]  |
| 617 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[11] | sections[5].cards[11] | Pocházíme od přítelkyně. | Přicházíme od přítelkyně. | [Luna TRANSLATION]  |
| 618 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[12] | sections[5].cards[12] | Pocházíme od učitele. | Přicházíme od učitele. | [Luna TRANSLATION]  |
| 619 | HIGH | OWNER_REVIEW | data/cs/courseLessons.js | kurssLesson21 | kurssLesson21/section[5]/card[13] | sections[5].cards[13] | Všechny pocházejí od přítele, od přítelkyně, od učitele. | Všichni přicházejí od přítele, od přítelkyně, od učitele. | [Luna TRANSLATION]  |
| 620 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson1 | training/lesson1/card[1] | lesson1TrainingCardsCs[1].front | Ano, jdu. | (OWNER review) | [Luna TRANSLATION]  |
| 621 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson1 | training/lesson1/card[3] | lesson1TrainingCardsCs[3].front | Martha zpívá. | (OWNER review) | [Luna TRANSLATION]  |
| 622 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson1 | training/lesson1/card[9] | lesson1TrainingCardsCs[9].front | Jdeš? | (OWNER review) | [Luna TRANSLATION]  |
| 623 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson1 | training/lesson1/card[10] | lesson1TrainingCardsCs[10].front | Albert a Martha přicházejí a odcházejí. | (OWNER review) | [Luna TRANSLATION]  |
| 624 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson2 | training/lesson2/card[5] | lesson2TrainingCardsCs[5].front | Zpívají Paul a Mary? | (OWNER review) | [Luna TRANSLATION]  |
| 625 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson2 | training/lesson2/card[7] | lesson2TrainingCardsCs[7].front | Co to děláš | (OWNER review) | [Luna TRANSLATION]  |
| 626 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson2 | training/lesson2/card[9] | lesson2TrainingCardsCs[9].front | Kreslíš? | (OWNER review) | [Luna TRANSLATION]  |
| 627 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson2 | training/lesson2/card[10] | lesson2TrainingCardsCs[10].front | Ano, kreslíme, ale Maria hraje. | (OWNER review) | [Luna TRANSLATION]  |
| 628 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson2 | training/lesson2/card[11] | lesson2TrainingCardsCs[11].front | Co to děláš | (OWNER review) | [Luna TRANSLATION]  |
| 629 | HIGH | OWNER_REVIEW | data/cs/courseTrainingCards.js | lesson2 | training/lesson2/card[13] | lesson2TrainingCardsCs[13].front | Co se děje? | (OWNER review) | [Luna TRANSLATION]  |

---

## GROUPING BY OBJECT (OWNER REVIEW)

### data/cs/courseLessons.js :: kurssLesson10 :: sections[4].cards[11].back

- **#1** [CRITICAL] DE_PARITY_ISSUE — `back`: CS DE pole neodpovídá LV MASTER DE obsahu
  - Source: deterministic
  - CURRENT: Was bist du?

### data/cs/courseLessons.js :: kurssArticlesLesson :: kurssArticlesLesson/legacyHtml

- **#2** [HIGH] OWNER_REVIEW — `legacyHtml(stripped)`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Články i Německý článek se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem. • Příklady článků Der Tisch - stol Die Tür - dveře Das Messer - nůž Das Mädchen - dí

### data/cs/courseLessons.js :: kurssPronounsLesson :: kurssPronounsLesson/legacyHtml

- **#3** [HIGH] OWNER_REVIEW — `legacyHtml(stripped)`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Zájmena Nominativ, Akkusativ a Dativ - tvary zájmen. Nominativ - co? Ich - já Du - ty E - on Sie - ona Já - to Wir - my Ihr — ty Sie - oni / její Sie - Vy (s laskavým svolením) Akkusativ - co? Mich - 

### data/cs/courseLessons.js :: kurssPronunciationLesson :: kurssPronunciationLesson/legacyHtml

- **#4** [HIGH] OWNER_REVIEW — `COURSE_LESSON_HTML`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: 
            <h3>Samohlásky - dlouhé a krátké</h3>
            <p class="kurss-lesson-intro">V němčině mohou být samohlásky dlouhé nebo krátké. To má vliv na výslovnost slova.</p>

            <sectio
- **#5** [HIGH] OWNER_REVIEW — `legacyHtml(stripped)`: Foreign/script issue: RU_CYRILLIC
  - Source: deterministic
  - CURRENT: Samohlásky - dlouhé a krátké V němčině mohou být samohlásky dlouhé nebo krátké. To má vliv na výslovnost slova. Dlouhá samohláska Teplý (varm) — teplý Střevo (dostat) — dobrý Tat (tat) - práce / akce 

### data/cs/courseLessons.js :: kurssConsonantsLesson :: kurssConsonantsLesson/legacyHtml

- **#6** [HIGH] OWNER_REVIEW — `COURSE_LESSON_HTML`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: 
            <h3>Souhlásky a kombinace písmen</h3>
            <p class="kurss-lesson-intro">V němčině se některé souhlásky a kombinace písmen vyslovují jinak, než se píší. Tato přednáška obsahuje nej
- **#7** [HIGH] OWNER_REVIEW — `legacyHtml(stripped)`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Souhlásky a kombinace písmen V němčině se některé souhlásky a kombinace písmen vyslovují jinak, než se píší. Tato přednáška obsahuje nejdůležitější příklady pro začátečníky. Souhlásky Das Rad (rāt) — 

### data/cs/courseLessons.js :: kurssSentenceStructureLesson :: kurssSentenceStructureLesson/legacyHtml

- **#8** [HIGH] OWNER_REVIEW — `COURSE_LESSON_HTML`: Chybný tvar „commst“ místo „kommst“ v české vrstvě
  - Source: deterministic
  - CURRENT: 
            <h3>Struktura vět</h3>
            <p class="kurss-lesson-intro">V tázací větě je sloveso v němčině obvykle na prvním místě.</p>

            <section class="kurss-lesson-section">
      
- **#9** [HIGH] OWNER_REVIEW — `legacyHtml(stripped)`: Chybný tvar „commst“ místo „kommst“ v české vrstvě
  - Source: deterministic
  - CURRENT: Struktura vět V tázací větě je sloveso v němčině obvykle na prvním místě. Příklady Du commst. - Pojďte. Odkud pocházíš? "Jdeš?" Er singt. — Zpívá. Zpívej, že? — On zpívá? Spěcháš? "Stojíš?" Ano, jsem 

### data/cs/courseLessons.js :: kurssLesson6 :: kurssLesson6/legacyHtml

- **#10** [HIGH] OWNER_REVIEW — `COURSE_LESSON_HTML`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: 
    <h3>Přednáška 6</h3>
    <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>

    <details class="lesson1-accordion" open>
      <summary><span cla
- **#11** [HIGH] OWNER_REVIEW — `legacyHtml(stripped)`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Přednáška 6 Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. 1. Dialogy / věty ⌄ Hier liegt ein Bleistift. Dort liegen einige Messer. Edgar nimmt ein Messer, zwei Messer, drei Messer.
- **#14** [HIGH] OWNER_REVIEW — `legacyHtml`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: 
    <h3>Přednáška 6</h3>
    <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>

    <details class="lesson1-accordion" open>
      <summary><span cla

### data/cs/courseLessons.js :: kurssLesson5 :: kurssLesson5/legacyHtml

- **#12** [HIGH] OWNER_REVIEW — `legacyHtml(stripped)`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Přednáška 5 Wen?, akuzativ, sitzen, fragen a -in koncovka. 1. Dialogy / věty ⌄ Wer sitzt und fragt? Der Lehrer sitzt und fragt. Kdo stojí a odpovídá? Der Schüler stojí a odpovídá. Co antwortet der Sch

### data/cs/courseLessons.js :: kurssLesson4 :: kurssLesson4/legacyHtml

- **#13** [HIGH] OWNER_REVIEW — `legacyHtml(stripped)`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Přednáška 4 Akuzativ, nehmen, hinlegen, hinausgehen a přídavná jména. 1. Dialogy / věty ⌃ Paul kommt und nimmt einen Federhalter. Er zeigt den Federhalter. Er fragt: "Wie ist der Federhalter?" Olga od

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[2]

- **#15** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Stehen auf — pieceļas

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[3]

- **#16** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Grüßen (grüsen) — sveicināt

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[6]

- **#17** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Morgen — rīts

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[9]

- **#18** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Kinder — bērni

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[10]

- **#19** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Setzt euch (zect oich) — sēstieties!

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[11]

- **#20** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie setzen sich — viņi apsēžas

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[12]

- **#21** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Fragen (ar akuzatīvu) — jautāt

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[13]

- **#22** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sprechen — runāt

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[16]

- **#23** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sehr (zēr) — ļoti

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[18]

- **#24** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Laut — skaļi

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[25]

- **#25** [HIGH] OWNER_REVIEW — `sections[1].items[25]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Schreiben — rakstīt

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[27]

- **#26** [HIGH] OWNER_REVIEW — `sections[1].items[27]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Erzählen (ercēlen) — stāstīt

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[28]

- **#27** [HIGH] OWNER_REVIEW — `sections[1].items[28]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Zuhören — klausīties

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[29]

- **#28** [HIGH] OWNER_REVIEW — `sections[1].items[29]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie hören zu — viņi klausās

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[31]

- **#29** [HIGH] OWNER_REVIEW — `sections[1].items[31]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Arbeiter — strādnieks

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[34]

- **#30** [HIGH] OWNER_REVIEW — `sections[1].items[34]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Bäcker (dēr beker) — maiznieks

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[35]

- **#31** [HIGH] OWNER_REVIEW — `sections[1].items[35]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Schneider (dēr šneider) — drēbnieks

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[36]

- **#32** [HIGH] OWNER_REVIEW — `sections[1].items[36]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Gärtner (dēr gertner) — dārznieks

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[2]/item[0]

- **#33** [HIGH] OWNER_REVIEW — `sections[2].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ä, kā jau minēts, izrunā gan kā šauro īso vai garo e skaņu. Piemēri: der Bäcker (bēker), das Mädchen (mētchen).

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[2]/item[1]

- **#34** [HIGH] OWNER_REVIEW — `sections[2].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[2]/item[3]

- **#35** [HIGH] OWNER_REVIEW — `sections[2].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ie izrunā kā garo ī: liest (līst).

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[2]/item[4]

- **#36** [HIGH] OWNER_REVIEW — `sections[2].items[4]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: SS izrunā kā s: grüßen (grüsen).

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[2]/item[5]

- **#37** [HIGH] OWNER_REVIEW — `sections[2].items[5]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Eu izrunā kā oi: deutlich (doitlich).

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[3]/item[7]

- **#38** [HIGH] OWNER_REVIEW — `sections[3].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[3]/item[8]

- **#39** [HIGH] OWNER_REVIEW — `sections[3].items[8]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Český valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu si

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[0]

- **#40** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Mehrere (mērere) — vairāki, vairākas

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[1]

- **#41** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Hier (hīr) — šeit, te

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[3]

- **#42** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Auch — arī

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[4]

- **#43** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Langsam (lankzām) — lēni

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[5]

- **#44** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Schnell (šnel) — ātri

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[6]

- **#45** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Mehr (mēr) — vairāk

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[7]

- **#46** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Zumachen — aiztaisīt

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[9]

- **#47** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sitzen (zicen) — sēdēt

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[10]

- **#48** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ruhig (rū-ich) — mierīgi

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[11]

- **#49** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Dieser (dīzer) — šis

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[12]

- **#50** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Jener (jēner) — tas

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[13]

- **#51** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Brief (dēr brīf) — vēstule

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[14]

- **#52** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Briefe — vēstules

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[15]

- **#53** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Kurz (kurc) — īss

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[16]

- **#54** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Rein — tīrs

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[1]/item[17]

- **#55** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Schmutzig (šmucich) — netīrs

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[0]/forms[0]/task

- **#56** [HIGH] OWNER_REVIEW — `sections[3].cards[0].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[0]/forms[1]/task

- **#57** [HIGH] OWNER_REVIEW — `sections[3].cards[0].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[0]/forms[2]/task

- **#58** [HIGH] OWNER_REVIEW — `sections[3].cards[0].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[0]/forms[3]/task

- **#59** [HIGH] OWNER_REVIEW — `sections[3].cards[0].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[1]/forms[0]/task

- **#60** [HIGH] OWNER_REVIEW — `sections[3].cards[1].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[1]/forms[1]/task

- **#61** [HIGH] OWNER_REVIEW — `sections[3].cards[1].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[1]/forms[2]/task

- **#62** [HIGH] OWNER_REVIEW — `sections[3].cards[1].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[1]/forms[3]/task

- **#63** [HIGH] OWNER_REVIEW — `sections[3].cards[1].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[2]/forms[0]/task

- **#64** [HIGH] OWNER_REVIEW — `sections[3].cards[2].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[2]/forms[1]/task

- **#65** [HIGH] OWNER_REVIEW — `sections[3].cards[2].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[2]/forms[2]/task

- **#66** [HIGH] OWNER_REVIEW — `sections[3].cards[2].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[2]/forms[3]/task

- **#67** [HIGH] OWNER_REVIEW — `sections[3].cards[2].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[3]/forms[0]/task

- **#68** [HIGH] OWNER_REVIEW — `sections[3].cards[3].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[3]/forms[1]/task

- **#69** [HIGH] OWNER_REVIEW — `sections[3].cards[3].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[3]/forms[2]/task

- **#70** [HIGH] OWNER_REVIEW — `sections[3].cards[3].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[3]/forms[3]/task

- **#71** [HIGH] OWNER_REVIEW — `sections[3].cards[3].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[4]/forms[0]/task

- **#72** [HIGH] OWNER_REVIEW — `sections[3].cards[4].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[4]/forms[1]/task

- **#73** [HIGH] OWNER_REVIEW — `sections[3].cards[4].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[4]/forms[2]/task

- **#74** [HIGH] OWNER_REVIEW — `sections[3].cards[4].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[4]/forms[3]/task

- **#75** [HIGH] OWNER_REVIEW — `sections[3].cards[4].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[5]/forms[0]/task

- **#76** [HIGH] OWNER_REVIEW — `sections[3].cards[5].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[5]/forms[1]/task

- **#77** [HIGH] OWNER_REVIEW — `sections[3].cards[5].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[5]/forms[2]/task

- **#78** [HIGH] OWNER_REVIEW — `sections[3].cards[5].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[5]/forms[3]/task

- **#79** [HIGH] OWNER_REVIEW — `sections[3].cards[5].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[6]/forms[0]/task

- **#80** [HIGH] OWNER_REVIEW — `sections[3].cards[6].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[6]/forms[1]/task

- **#81** [HIGH] OWNER_REVIEW — `sections[3].cards[6].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[6]/forms[2]/task

- **#82** [HIGH] OWNER_REVIEW — `sections[3].cards[6].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[6]/forms[3]/task

- **#83** [HIGH] OWNER_REVIEW — `sections[3].cards[6].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[7]/forms[0]/task

- **#84** [HIGH] OWNER_REVIEW — `sections[3].cards[7].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[7]/forms[1]/task

- **#85** [HIGH] OWNER_REVIEW — `sections[3].cards[7].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[7]/forms[2]/task

- **#86** [HIGH] OWNER_REVIEW — `sections[3].cards[7].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[7]/forms[3]/task

- **#87** [HIGH] OWNER_REVIEW — `sections[3].cards[7].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/forms[0]/task

- **#88** [HIGH] OWNER_REVIEW — `sections[3].cards[8].forms[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido šo teikumu 3. personā vienskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/forms[1]/task

- **#89** [HIGH] OWNER_REVIEW — `sections[3].cards[8].forms[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido sākuma teikumu 1. personā daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/forms[2]/task

- **#90** [HIGH] OWNER_REVIEW — `sections[3].cards[8].forms[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lieto lietas vārdu vienskaitļa vietā daudzskaitli.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/forms[3]/task

- **#91** [HIGH] OWNER_REVIEW — `sections[3].cards[8].forms[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gatavs. Nākamais klikšķis rāda nākamo kartīti.

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[3]

- **#92** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wir sind — mēs esam

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[4]

- **#93** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr seid (īr zeit) — jūs esat

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[7]

- **#94** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er kann — viņš var

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[8]

- **#95** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wir können — mēs varam

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[9]

- **#96** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr könnt — jūs varat

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[10]

- **#97** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie können — viņi var

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[13]

- **#98** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Seien Sie gesund — esiet Jūs veseli!

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[14]

- **#99** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Knabe (dēr knābe) — zēns

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[15]

- **#100** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Mann — vīrs, vīrietis

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[17]

- **#101** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Großvater (dēr grōsfāter) — vectēvs

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[20]

- **#102** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lernen — mācīties

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[22]

- **#103** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Jahr (jār) — gads

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[24]

- **#104** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wie — kā, kāds, cik

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[2]/item[1]

- **#105** [HIGH] OWNER_REVIEW — `sections[2].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[2]/item[2]

- **#106** [HIGH] OWNER_REVIEW — `sections[2].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[2]/item[6]

- **#107** [HIGH] OWNER_REVIEW — `sections[2].items[6]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Český valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[2]

- **#108** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er hat — viņam ir

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[4]

- **#109** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: Foreign/script issue: LV_WORD
  - Source: deterministic
  - CURRENT: Ihr habt — jums ir

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[5]

- **#110** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie haben — viņiem ir

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[6]

- **#111** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Bruder (dēr brūder) — brālis

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[7]

- **#112** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Brüder — brāļi

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[13]

- **#113** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Schreibtisch (dēr šreibtīš) — rakstāmgalds

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[16]

- **#114** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Zusammen (cuzāmen) — kopā

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[18]

- **#115** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Freund (dēr froint) — draugs

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[21]

- **#116** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Stuhl (dēr štūl) — krēsls

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[22]

- **#117** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Stühle — krēsli

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[24]

- **#118** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Bücherbrett — grāmatu plaukts

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[25]

- **#119** [HIGH] OWNER_REVIEW — `sections[1].items[25]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Landkarte (dī lantkarte) — ģeogrāfijas karte

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[26]

- **#120** [HIGH] OWNER_REVIEW — `sections[1].items[26]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Glücklich — laimīgs

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[28]

- **#121** [HIGH] OWNER_REVIEW — `sections[1].items[28]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Schwester (dī švester) — māsa

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[1]/item[29]

- **#122** [HIGH] OWNER_REVIEW — `sections[1].items[29]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Schwestern — māsas

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[2]/item[0]

- **#123** [HIGH] OWNER_REVIEW — `sections[2].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Eu izrunā kā oi: der Freund (dēr froint), neun (noin).

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[2]/item[1]

- **#124** [HIGH] OWNER_REVIEW — `sections[2].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: H pa lielākai daļai ir garumzīme iepriekšējam patskanim: der Stuhl (dēr štūl), zehn (cēn).

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[2]/item[2]

- **#125** [HIGH] OWNER_REVIEW — `sections[2].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Z izrunā kā český c: Franz (franc), das Zimmer (cimer).

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[1]

- **#126** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wie heißt du — kā tevi sauc

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[8]

- **#127** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Kleiner als ich — mazāks par mani

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[11]

- **#128** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Jünger als ich — jaunāks par mani

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[12]

- **#129** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: So alt wie — tik vecs kā

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[13]

- **#130** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Vetter (dēr feter) — brālēns

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[14]

- **#131** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Am ältesten (am eltesten) — visvecākais

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[15]

- **#132** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ebenso — tāpat

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[16]

- **#133** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wie — kā

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[17]

- **#134** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Am jüngsten — visjaunākais

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[21]

- **#135** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Braun — brūns

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[23]

- **#136** [HIGH] OWNER_REVIEW — `sections[1].items[23]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Gummi (das gumī) — gumija

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[24]

- **#137** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Grau — pelēks

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[26]

- **#138** [HIGH] OWNER_REVIEW — `sections[1].items[26]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Grün — zaļš

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[27]

- **#139** [HIGH] OWNER_REVIEW — `sections[1].items[27]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Blume — puķe

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[30]

- **#140** [HIGH] OWNER_REVIEW — `sections[1].items[30]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Kreide — krīts

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[2]/item[0]

- **#141** [HIGH] OWNER_REVIEW — `sections[2].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: X izrunā kā ks: Max (maks), Felix (feliks).

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[2]/item[2]

- **#142** [HIGH] OWNER_REVIEW — `sections[2].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: H vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[0]

- **#143** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Körper — ķermenis

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[1]

- **#144** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Mensch — cilvēks

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[8]

- **#145** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Bein — kāja

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[9]

- **#146** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Beine — kājas

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[10]

- **#147** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Fuß — kājas pēda

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[11]

- **#148** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Füße — kāju pēdas

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[12]

- **#149** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Rund — apaļš

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[14]

- **#150** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Kurz — īss

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[18]

- **#151** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Dünn — tievs / plāns

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[19]

- **#152** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Brust — krūtis

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[20]

- **#153** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Vorn — priekšā

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[22]

- **#154** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Hinten — aizmugurē

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[27]

- **#155** [HIGH] OWNER_REVIEW — `sections[1].items[27]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Zehe — kājas pirksts

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[32]

- **#156** [HIGH] OWNER_REVIEW — `sections[1].items[32]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Reinigen — tīrīt

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[35]

- **#157** [HIGH] OWNER_REVIEW — `sections[1].items[35]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Machen — darīt / taisīt

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[38]

- **#158** [HIGH] OWNER_REVIEW — `sections[1].items[38]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Stehen — stāvēt

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[45]

- **#159** [HIGH] OWNER_REVIEW — `sections[1].items[45]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Halten — turēt

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[1]/item[48]

- **#160** [HIGH] OWNER_REVIEW — `sections[1].items[48]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Tief — dziļi

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[3]/item[0]

- **#161** [HIGH] OWNER_REVIEW — `sections[3].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: H vārdā halten ir dzirdama skaņa.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[3]/item[1]

- **#162** [HIGH] OWNER_REVIEW — `sections[3].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: H vārdā fahren rāda patskaņa garumu.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[3]/item[2]

- **#163** [HIGH] OWNER_REVIEW — `sections[3].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: A vārdā halten izrunā īsi: halten.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[3]/item[3]

- **#164** [HIGH] OWNER_REVIEW — `sections[3].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: A vārdā tragen izrunā gari: tragen.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[3]/item[4]

- **#165** [HIGH] OWNER_REVIEW — `sections[3].items[4]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Äu izrunā kā oi: du läufst, er läuft.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[3]/item[5]

- **#166** [HIGH] OWNER_REVIEW — `sections[3].items[5]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[0]

- **#167** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Müssen — vajadzēt / būt jādara

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[1]

- **#168** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ich muss — man vajag / man jādara

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[2]

- **#169** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Du musst — tev vajag / tev jādara

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[3]

- **#170** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er muss — viņam vajag / viņam jādara

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[4]

- **#171** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie muss — viņai vajag / viņai jādara

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[5]

- **#172** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Es muss — tam vajag / tam jādara

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[6]

- **#173** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wir müssen — mums vajag / mums jādara

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[7]

- **#174** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr müsst — jums vajag / jums jādara

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[8]

- **#175** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie müssen — viņiem / viņām vajag

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[9]

- **#176** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Lernen — mācīties

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[12]

- **#177** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wollen — gribēt

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[15]

- **#178** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er will — viņš grib

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[16]

- **#179** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie will — viņa grib

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[18]

- **#180** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wir wollen — mēs gribam

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[19]

- **#181** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr wollt — jūs gribat

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[20]

- **#182** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie wollen — viņi / viņas grib

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[21]

- **#183** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Mögen — gribēt / vēlēties / patikt

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[22]

- **#184** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ich mag — es gribu / man patīk

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[23]

- **#185** [HIGH] OWNER_REVIEW — `sections[1].items[23]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Du magst — tu gribi / tev patīk

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[24]

- **#186** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er mag — viņš grib / viņam patīk

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[25]

- **#187** [HIGH] OWNER_REVIEW — `sections[1].items[25]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie mag — viņa grib / viņai patīk

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[26]

- **#188** [HIGH] OWNER_REVIEW — `sections[1].items[26]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Es mag — tas grib / tam patīk

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[27]

- **#189** [HIGH] OWNER_REVIEW — `sections[1].items[27]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wir mögen — mēs gribam

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[28]

- **#190** [HIGH] OWNER_REVIEW — `sections[1].items[28]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr mögt — jūs gribat

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[29]

- **#191** [HIGH] OWNER_REVIEW — `sections[1].items[29]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie mögen — viņi / viņas grib

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[34]

- **#192** [HIGH] OWNER_REVIEW — `sections[1].items[34]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihm — viņam

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[35]

- **#193** [HIGH] OWNER_REVIEW — `sections[1].items[35]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr — viņai

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[37]

- **#194** [HIGH] OWNER_REVIEW — `sections[1].items[37]`: Foreign/script issue: LV_WORD
  - Source: deterministic
  - CURRENT: Euch — jums

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[38]

- **#195** [HIGH] OWNER_REVIEW — `sections[1].items[38]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihnen — viņiem / viņām

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[3]/item[0]

- **#196** [HIGH] OWNER_REVIEW — `sections[3].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: SS izrunā kā český s.

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[3]/item[1]

- **#197** [HIGH] OWNER_REVIEW — `sections[3].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: SS raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[3]/item[3]

- **#198** [HIGH] OWNER_REVIEW — `sections[3].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ö vārdā mögen izrunā kā skaidru ö skaņu.

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[3]/item[5]

- **#199** [HIGH] OWNER_REVIEW — `sections[3].items[5]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Līdzīgi arī český valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[0]

- **#200** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sollen — vajadzēt / būt pienākumam

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[1]

- **#201** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ich soll — man vajag / man jādara

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[2]

- **#202** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Du sollst — tev vajag / tev jādara

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[3]

- **#203** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er soll — viņam vajag / viņam jādara

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[4]

- **#204** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wir sollen — mums vajag / mums jādara

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[5]

- **#205** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr sollt — jums vajag / jums jādara

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[6]

- **#206** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie sollen — viņiem / viņām vajag

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[7]

- **#207** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Dürfen — drīkstēt

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[8]

- **#208** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ich darf — es drīkstu

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[9]

- **#209** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Du darfst — tu drīksti

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[10]

- **#210** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er darf — viņš drīkst

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[11]

- **#211** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wir dürfen — mēs drīkstam

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[12]

- **#212** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr dürft — jūs drīkstat

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[13]

- **#213** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie dürfen — viņi / viņas drīkst

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[16]

- **#214** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Apfel — ābols

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[17]

- **#215** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Äpfel — āboli

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[19]

- **#216** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Entzweischneiden — pārgriezt uz pusēm

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[22]

- **#217** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Pflaume — plūme

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[23]

- **#218** [HIGH] OWNER_REVIEW — `sections[1].items[23]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Pflaumen — plūmes

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[24]

- **#219** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Kirsche — ķirsis

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[25]

- **#220** [HIGH] OWNER_REVIEW — `sections[1].items[25]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Kirschen — ķirši

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[26]

- **#221** [HIGH] OWNER_REVIEW — `sections[1].items[26]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gern — labprāt

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[27]

- **#222** [HIGH] OWNER_REVIEW — `sections[1].items[27]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Reif — ienācies / nogatavojies

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[28]

- **#223** [HIGH] OWNER_REVIEW — `sections[1].items[28]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Unreif — neienācies / nenogatavojies

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[29]

- **#224** [HIGH] OWNER_REVIEW — `sections[1].items[29]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Nehmen — ņemt

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[30]

- **#225** [HIGH] OWNER_REVIEW — `sections[1].items[30]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ich nehme — es ņemu

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[31]

- **#226** [HIGH] OWNER_REVIEW — `sections[1].items[31]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Du nimmst — tu ņem

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[32]

- **#227** [HIGH] OWNER_REVIEW — `sections[1].items[32]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er nimmt — viņš ņem

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[33]

- **#228** [HIGH] OWNER_REVIEW — `sections[1].items[33]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Essen — ēst

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[34]

- **#229** [HIGH] OWNER_REVIEW — `sections[1].items[34]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ich esse — es ēdu

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[35]

- **#230** [HIGH] OWNER_REVIEW — `sections[1].items[35]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Du isst — tu ēd

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[36]

- **#231** [HIGH] OWNER_REVIEW — `sections[1].items[36]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er isst — viņš ēd

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[37]

- **#232** [HIGH] OWNER_REVIEW — `sections[1].items[37]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wir essen — mēs ēdam

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[38]

- **#233** [HIGH] OWNER_REVIEW — `sections[1].items[38]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ihr esst — jūs ēdat

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[39]

- **#234** [HIGH] OWNER_REVIEW — `sections[1].items[39]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sie essen — viņi / viņas ēd

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[3]/item[0]

- **#235** [HIGH] OWNER_REVIEW — `sections[3].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ä vārdos Äpfel un schälen izrunā kā šauro e.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[1]

- **#236** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Schenken — dāvināt

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[2]

- **#237** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Dem Sohne — dēlam

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[3]

- **#238** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Den Söhnen — dēliem

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[10]

- **#239** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er gibt — viņš dod

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[14]

- **#240** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gehorchen — paklausīt

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[16]

- **#241** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Gehören — piederēt

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[17]

- **#242** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Feld — lauks / tīrums

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[18]

- **#243** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Felder — lauki / tīrumi

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[19]

- **#244** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Wiese — pļava

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[20]

- **#245** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Wiesen — pļavas

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[27]

- **#246** [HIGH] OWNER_REVIEW — `sections[1].items[27]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Treu — uzticīgs

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[3]/item[2]

- **#247** [HIGH] OWNER_REVIEW — `sections[3].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Wälder: ä izrunā kā šaurais īsais e.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[3]/item[3]

- **#248** [HIGH] OWNER_REVIEW — `sections[3].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Bäuerinnen: äu izrunā kā oi.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[3]/item[4]

- **#249** [HIGH] OWNER_REVIEW — `sections[3].items[4]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: -ie ir garā ī apzīmējums: die Wiese.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[0]/task

- **#250** [HIGH] OWNER_REVIEW — `sections[4].cards[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[1]/task

- **#251** [HIGH] OWNER_REVIEW — `sections[4].cards[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[2]/task

- **#252** [HIGH] OWNER_REVIEW — `sections[4].cards[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[3]/task

- **#253** [HIGH] OWNER_REVIEW — `sections[4].cards[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[4]/task

- **#254** [HIGH] OWNER_REVIEW — `sections[4].cards[4].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[5]/task

- **#255** [HIGH] OWNER_REVIEW — `sections[4].cards[5].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[6]/task

- **#256** [HIGH] OWNER_REVIEW — `sections[4].cards[6].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[7]/task

- **#257** [HIGH] OWNER_REVIEW — `sections[4].cards[7].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[8]/task

- **#258** [HIGH] OWNER_REVIEW — `sections[4].cards[8].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[9]/task

- **#259** [HIGH] OWNER_REVIEW — `sections[4].cards[9].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[10]/task

- **#260** [HIGH] OWNER_REVIEW — `sections[4].cards[10].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[11]/task

- **#261** [HIGH] OWNER_REVIEW — `sections[4].cards[11].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[12]/task

- **#262** [HIGH] OWNER_REVIEW — `sections[4].cards[12].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[13]/task

- **#263** [HIGH] OWNER_REVIEW — `sections[4].cards[13].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Ieliec pareizo artikulu datīvā.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[14]/task

- **#264** [HIGH] OWNER_REVIEW — `sections[4].cards[14].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[15]/task

- **#265** [HIGH] OWNER_REVIEW — `sections[4].cards[15].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pārveido daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[0]

- **#266** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Spaten — lāpsta

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[6]

- **#267** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Fangen — ķert

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[7]

- **#268** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Auffangen — uzķert / noķert

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[9]

- **#269** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Schuldiener — skolas apkalpotājs

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[11]

- **#270** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Fegen — slaucīt ar slotu

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[12]

- **#271** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Diele — grīda

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[13]

- **#272** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Lappen — lupata / drāna

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[14]

- **#273** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Wischen — slaucīt / tīrīt

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[15]

- **#274** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Abwischen — noslaucīt

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[16]

- **#275** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Helfen — palīdzēt

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[23]

- **#276** [HIGH] OWNER_REVIEW — `sections[1].items[23]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Staub — putekļi

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[24]

- **#277** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Bruder — brālis

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[25]

- **#278** [HIGH] OWNER_REVIEW — `sections[1].items[25]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Schwester — māsa

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[4]/promptTask[0]/task

- **#279** [HIGH] OWNER_REVIEW — `sections[4].cards[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi vienskaitlī, pēc tam daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[4]/promptTask[1]/task

- **#280** [HIGH] OWNER_REVIEW — `sections[4].cards[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi vienskaitlī, pēc tam daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[4]/promptTask[2]/task

- **#281** [HIGH] OWNER_REVIEW — `sections[4].cards[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi vienskaitlī, pēc tam daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[4]/promptTask[3]/task

- **#282** [HIGH] OWNER_REVIEW — `sections[4].cards[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi vienskaitlī, pēc tam daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[4]/promptTask[4]/task

- **#283** [HIGH] OWNER_REVIEW — `sections[4].cards[4].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi vienskaitlī, pēc tam daudzskaitlī.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[5]

- **#284** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er/sie/es trägt — viņš/viņa/tas nes

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[8]

- **#285** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Körbchen — groziņš / kurvītis

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[9]

- **#286** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Stellen — novietot / nolikt stāvus

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[10]

- **#287** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Legen — likt / nolikt guļus

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[11]

- **#288** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Wasser — ūdens

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[13]

- **#289** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Krug — krūze

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[14]

- **#290** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Krüge — krūzes

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[18]

- **#291** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: In — iekšā / uz iekšpusi

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[21]

- **#292** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Diele — grīda

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[4]/promptTask[0]/task

- **#293** [HIGH] OWNER_REVIEW — `sections[4].cards[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: Dativ vai Akkusativ.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[4]/promptTask[1]/task

- **#294** [HIGH] OWNER_REVIEW — `sections[4].cards[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: Dativ vai Akkusativ.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[4]/promptTask[2]/task

- **#295** [HIGH] OWNER_REVIEW — `sections[4].cards[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: Dativ vai Akkusativ.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[4]/promptTask[3]/task

- **#296** [HIGH] OWNER_REVIEW — `sections[4].cards[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: Dativ vai Akkusativ.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[4]/promptTask[4]/task

- **#297** [HIGH] OWNER_REVIEW — `sections[4].cards[4].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: Dativ vai Akkusativ.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[4]/promptTask[5]/task

- **#298** [HIGH] OWNER_REVIEW — `sections[4].cards[5].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: Dativ vai Akkusativ.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[4]/promptTask[6]/task

- **#299** [HIGH] OWNER_REVIEW — `sections[4].cards[6].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: Dativ vai Akkusativ.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[4]/promptTask[7]/task

- **#300** [HIGH] OWNER_REVIEW — `sections[4].cards[7].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: Dativ vai Akkusativ.

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[0]

- **#301** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Vor — priekšā / pirms

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[3]

- **#302** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Über — virs / pāri

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[7]

- **#303** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Stellen — novietot / nostādīt / nolikt

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[12]

- **#304** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Bild — attēls / bilde

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[14]

- **#305** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Großvater — vectēvs

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[15]

- **#306** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Großmutter — vecmāmiņa

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[16]

- **#307** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Stuhl — krēsls

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[19]

- **#308** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Pflanzen — stādīt

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[20]

- **#309** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Strauch — krūms

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[23]

- **#310** [HIGH] OWNER_REVIEW — `sections[1].items[23]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Scheune — šķūnis

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[24]

- **#311** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Teich — dīķis

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[25]

- **#312** [HIGH] OWNER_REVIEW — `sections[1].items[25]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Garten — dārzs

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[31]

- **#313** [HIGH] OWNER_REVIEW — `sections[1].items[31]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Stadt — pilsēta

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[35]

- **#314** [HIGH] OWNER_REVIEW — `sections[1].items[35]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Zeigen — rādīt

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[37]

- **#315** [HIGH] OWNER_REVIEW — `sections[1].items[37]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: So — tā

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[3]/item[2]

- **#316** [HIGH] OWNER_REVIEW — `sections[3].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Vārdā der Stuhl: st izrunā kā št • H ir garuma zīme un netiek izrunāts.

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[4]/promptTask[0]/task

- **#317** [HIGH] OWNER_REVIEW — `sections[4].cards[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[4]/promptTask[1]/task

- **#318** [HIGH] OWNER_REVIEW — `sections[4].cards[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[1]

- **#319** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Das Stockwerk — stāvs

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[2]

- **#320** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Mauer — mūris

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[7]

- **#321** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Wohnung — dzīvoklis

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[11]

- **#322** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Boden — bēniņi / grīda / zeme

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[14]

- **#323** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Schornsteinfeger — skursteņslaucītājs

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[15]

- **#324** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Stadt — pilsēta

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[19]

- **#325** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Stecken — bāzt / ielikt

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[20]

- **#326** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Ofen — krāsns

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[21]

- **#327** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Anzünden — aizdedzināt

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[22]

- **#328** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Bald — drīz

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[28]

- **#329** [HIGH] OWNER_REVIEW — `sections[1].items[28]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Mensch — cilvēks

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[3]/item[2]

- **#330** [HIGH] OWNER_REVIEW — `sections[3].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sch izrunā kā š: der Schornstein, der Mensch.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[0]/task

- **#331** [HIGH] OWNER_REVIEW — `sections[4].cards[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[1]/task

- **#332** [HIGH] OWNER_REVIEW — `sections[4].cards[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[2]/task

- **#333** [HIGH] OWNER_REVIEW — `sections[4].cards[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[3]/task

- **#334** [HIGH] OWNER_REVIEW — `sections[4].cards[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[4]/task

- **#335** [HIGH] OWNER_REVIEW — `sections[4].cards[4].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[5]/task

- **#336** [HIGH] OWNER_REVIEW — `sections[4].cards[5].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[6]/task

- **#337** [HIGH] OWNER_REVIEW — `sections[4].cards[6].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[7]/task

- **#338** [HIGH] OWNER_REVIEW — `sections[4].cards[7].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[8]/task

- **#339** [HIGH] OWNER_REVIEW — `sections[4].cards[8].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[9]/task

- **#340** [HIGH] OWNER_REVIEW — `sections[4].cards[9].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[10]/task

- **#341** [HIGH] OWNER_REVIEW — `sections[4].cards[10].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[11]/task

- **#342** [HIGH] OWNER_REVIEW — `sections[4].cards[11].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[12]/task

- **#343** [HIGH] OWNER_REVIEW — `sections[4].cards[12].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[13]/task

- **#344** [HIGH] OWNER_REVIEW — `sections[4].cards[13].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[14]/task

- **#345** [HIGH] OWNER_REVIEW — `sections[4].cards[14].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[15]/task

- **#346** [HIGH] OWNER_REVIEW — `sections[4].cards[15].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
- **#588** [HIGH] OWNER_REVIEW — `sections[4].cards[15].task`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Izvēlies správný pád: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[16]/task

- **#347** [HIGH] OWNER_REVIEW — `sections[4].cards[16].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[0]

- **#348** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Der Holzhauer — malkas cirtējs

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[1]

- **#349** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sägen — zāģēt

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[2]

- **#350** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Spalten — skaldīt

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[7]

- **#351** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Helfen — palīdzēt

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[8]

- **#352** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Treten — iet / nākt / spert soli

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[10]

- **#353** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er tritt — viņš iet / sper soli

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[12]

- **#354** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Holen — atnest / atgādāt

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[14]

- **#355** [HIGH] OWNER_REVIEW — `sections[1].items[14]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Zurück — atpakaļ

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[16]

- **#356** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Sehen — redzēt

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[18]

- **#357** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Er sieht — viņš redz

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[20]

- **#358** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Scheune — šķūnis

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[29]

- **#359** [HIGH] OWNER_REVIEW — `sections[1].items[29]`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Die Säge — zāģis

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[0]/task

- **#360** [HIGH] OWNER_REVIEW — `sections[4].cards[0].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[1]/task

- **#361** [HIGH] OWNER_REVIEW — `sections[4].cards[1].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[2]/task

- **#362** [HIGH] OWNER_REVIEW — `sections[4].cards[2].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[3]/task

- **#363** [HIGH] OWNER_REVIEW — `sections[4].cards[3].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[4]/task

- **#364** [HIGH] OWNER_REVIEW — `sections[4].cards[4].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[5]/task

- **#365** [HIGH] OWNER_REVIEW — `sections[4].cards[5].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[6]/task

- **#366** [HIGH] OWNER_REVIEW — `sections[4].cards[6].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[7]/task

- **#367** [HIGH] OWNER_REVIEW — `sections[4].cards[7].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[8]/task

- **#368** [HIGH] OWNER_REVIEW — `sections[4].cards[8].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[9]/task

- **#369** [HIGH] OWNER_REVIEW — `sections[4].cards[9].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[10]/task

- **#370** [HIGH] OWNER_REVIEW — `sections[4].cards[10].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[11]/task

- **#371** [HIGH] OWNER_REVIEW — `sections[4].cards[11].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[12]/task

- **#372** [HIGH] OWNER_REVIEW — `sections[4].cards[12].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[13]/task

- **#373** [HIGH] OWNER_REVIEW — `sections[4].cards[13].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[14]/task

- **#374** [HIGH] OWNER_REVIEW — `sections[4].cards[14].task`: Foreign/script issue: LV_DIACRITIC
  - Source: deterministic
  - CURRENT: Atbildi pēc lasīšanas teksta.

### data/cs/courseLessons.js :: (embedded UI hints) :: legacyHtml/training hints

- **#375** [HIGH] OWNER_REVIEW — `aria-label / lesson1-training-hint`: Latvian UI leftover strings in Czech course HTML
  - Source: deterministic
  - CURRENT: Lekcija 2; pārtulkošanas; Lekcija 2; Klikšķini; kartītes

### data/cs/courseLessons.js :: kurssLesson1 :: kurssLesson1/title

- **#376** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
  - Source: luna
  - CURRENT: Přednáška 1

### data/cs/courseLessons.js :: kurssLesson1 :: kurssLesson1/subtitle

- **#377** [HIGH] OWNER_REVIEW — `subtitle`: [Luna TRANSLATION] „Přítomná časová slovesa“ is unnatural Czech.
  - Source: luna
  - CURRENT: Přítomná časová slovesa, podstatná jména, gramatika a překlad

### data/cs/courseLessons.js :: kurssLesson2 :: kurssLesson2/title

- **#378** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
  - Source: luna
  - CURRENT: Přednáška 2

### data/cs/courseLessons.js :: kurssLesson3 :: kurssLesson3/title

- **#379** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
  - Source: luna
  - CURRENT: Přednáška 3

### data/cs/courseLessons.js :: kurssLesson4 :: kurssLesson4/title

- **#380** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
  - Source: luna
  - CURRENT: Přednáška 4

### data/cs/courseLessons.js :: kurssLesson5 :: kurssLesson5/title

- **#381** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
  - Source: luna
  - CURRENT: Přednáška 5

### data/cs/courseLessons.js :: kurssLesson5 :: kurssLesson5/subtitle

- **#382** [HIGH] OWNER_REVIEW — `subtitle`: [Luna TRANSLATION] The word order „-in koncovka“ is ungrammatical or highly unnatural.
  - Source: luna
  - CURRENT: Wen?, akuzativ, sitzen, fragen a -in koncovka.

### data/cs/courseLessons.js :: kurssLesson6 :: kurssLesson6/title

- **#383** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
  - Source: luna
  - CURRENT: Přednáška 6

### data/cs/courseLessons.js :: kurssLesson6 :: kurssLesson6/subtitle

- **#384** [HIGH] OWNER_REVIEW — `subtitle`: [Luna TRANSLATION] „Podmínky místa“ is a literal and unnatural rendering of the grammatical topic.
  - Source: luna
  - CURRENT: Slovesa, podmínky místa a překlad

### data/cs/courseLessons.js :: kurssLesson7 :: kurssLesson7/title

- **#385** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
  - Source: luna
  - CURRENT: Přednáška 7

### data/cs/courseLessons.js :: kurssLesson7 :: kurssLesson7/subtitle

- **#386** [HIGH] OWNER_REVIEW — `subtitle`: [Luna TRANSLATION] „Forma adresy“ is not idiomatic Czech for a form of address.
  - Source: luna
  - CURRENT: Imperativ, forma adresy a množné číslo.

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/title

- **#387** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] „Přednáška“ means lecture, whereas the German reference is „lesson“.
  - Source: luna
  - CURRENT: Přednáška 8

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/subtitle

- **#388** [HIGH] OWNER_REVIEW — `subtitle`: [Luna TRANSLATION] „E → i/ie záměna“ is awkward Czech terminology.
  - Source: luna
  - CURRENT: Zvratná slovesa, e → i/ie záměna a akuzativ.

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[0]

- **#389** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: [Luna TRANSLATION] „visi“ is Latvian, not Czech.
  - Source: luna
  - CURRENT: Alle — visi

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[1]

- **#390** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: [Luna TRANSLATION] The Czech text „vstát“ is correct, but the DE reference gloss „vst“ appears truncated.
  - Source: luna
  - CURRENT: Aufstehen — vstát

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[4]

- **#391** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: [Luna TRANSLATION] The Czech text „dobré ráno“ is correct, but the DE reference gloss „dobr | no“ is fragmented and malformed.
  - Source: luna
  - CURRENT: Guten Morgen — dobré ráno

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[5]

- **#392** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: [Luna TRANSLATION] „labs“ is Latvian, not Czech.
  - Source: luna
  - CURRENT: Gut — labs

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[7]

- **#393** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Herr — kungs

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[15]

- **#394** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Aber — bet

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[17]

- **#395** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Leise — klusi

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[19]

- **#396** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jetzt (ject) — tagad

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[21]

- **#397** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Lies! — lasi!

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[22]

- **#398** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Gut — labi

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[23]

- **#399** [HIGH] OWNER_REVIEW — `sections[1].items[23]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Schlecht — slikti

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[24]

- **#400** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Deutlich (doitlich) — skaidri, saprotami

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[26]

- **#401** [HIGH] OWNER_REVIEW — `sections[1].items[26]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Endlich (entlich) — beidzot

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[32]

- **#402** [HIGH] OWNER_REVIEW — `sections[1].items[32]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Müller — dzirnavnieks

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[33]

- **#403** [HIGH] OWNER_REVIEW — `sections[1].items[33]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Tischler — galdnieks

### data/cs/courseLessons.js :: kurssLesson8 :: kurssLesson8/section[1]/item[37]

- **#404** [HIGH] OWNER_REVIEW — `sections[1].items[37]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Schuster — kurpnieks

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[7]/forms[2]/text

- **#405** [HIGH] OWNER_REVIEW — `sections[3].cards[7].forms[2].text`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wir legen den Bleistift hin.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[7]/forms[3]/text

- **#406** [HIGH] OWNER_REVIEW — `sections[3].cards[7].forms[3].text`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ich lege die Bleistifte hin.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/base

- **#407** [HIGH] OWNER_REVIEW — `sections[3].cards[8].base`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ich sitze ruhig.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/forms[0]/text

- **#408** [HIGH] OWNER_REVIEW — `sections[3].cards[8].forms[0].text`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Sedím si ruhig.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/forms[1]/text

- **#409** [HIGH] OWNER_REVIEW — `sections[3].cards[8].forms[1].text`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Er sitzt ruhig.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/forms[2]/text

- **#410** [HIGH] OWNER_REVIEW — `sections[3].cards[8].forms[2].text`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wir sitzen ruhig.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[3]/multi[8]/forms[3]/text

- **#411** [HIGH] OWNER_REVIEW — `sections[3].cards[8].forms[3].text`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Sedím si ruhig.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[4]/card[3]

- **#412** [HIGH] OWNER_REVIEW — `sections[4].cards[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co to děláš

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[4]/card[10]

- **#413** [HIGH] OWNER_REVIEW — `sections[4].cards[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co je to za desku?

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[4]/card[11]

- **#414** [HIGH] OWNER_REVIEW — `sections[4].cards[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Tato deska není čistá, je špinavá.

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[4]/card[12]

- **#415** [HIGH] OWNER_REVIEW — `sections[4].cards[12]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jsou písmena dlouhá nebo krátká?

### data/cs/courseLessons.js :: kurssLesson9 :: kurssLesson9/section[4]/card[16]

- **#416** [HIGH] OWNER_REVIEW — `sections[4].cards[16]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Zavřete okno!

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/title

- **#417** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Přednáška 10

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/subtitle

- **#418** [HIGH] OWNER_REVIEW — `subtitle`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Sein, können, zdraví, věk a profese

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[0]

- **#419** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Gesund (gezunt) — vesels

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[1]

- **#420** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ich bin gesund — es esmu vesels

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[2]

- **#421** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Du bist — tu esi

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[5]

- **#422** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ich kann — es varu

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[6]

- **#423** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Du kannst — tu vari

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[11]

- **#424** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Sei gesund — esi vesels!

### data/cs/courseLessons.js :: kurssLesson10 :: kurssLesson10/section[1]/item[12]

- **#425** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Seid gesund — esiet veseli!

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[0]

- **#426** [HIGH] OWNER_REVIEW — `sections[3].items[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[1]

- **#427** [HIGH] OWNER_REVIEW — `sections[3].items[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[2]

- **#428** [HIGH] OWNER_REVIEW — `sections[3].items[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[3]

- **#429** [HIGH] OWNER_REVIEW — `sections[3].items[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[4]

- **#430** [HIGH] OWNER_REVIEW — `sections[3].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[5]

- **#431** [HIGH] OWNER_REVIEW — `sections[3].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[6]

- **#432** [HIGH] OWNER_REVIEW — `sections[3].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[7]

- **#433** [HIGH] OWNER_REVIEW — `sections[3].items[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[8]

- **#434** [HIGH] OWNER_REVIEW — `sections[3].items[8]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[9]

- **#435** [HIGH] OWNER_REVIEW — `sections[3].items[9]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[10]

- **#436** [HIGH] OWNER_REVIEW — `sections[3].items[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[11]

- **#437** [HIGH] OWNER_REVIEW — `sections[3].items[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[12]

- **#438** [HIGH] OWNER_REVIEW — `sections[3].items[12]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[3]/item[13]

- **#439** [HIGH] OWNER_REVIEW — `sections[3].items[13]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[4]/card[0]

- **#440** [HIGH] OWNER_REVIEW — `sections[4].cards[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co máš

### data/cs/courseLessons.js :: kurssLesson11 :: kurssLesson11/section[4]/card[2]

- **#441** [HIGH] OWNER_REVIEW — `sections[4].cards[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co jsou to knihy?

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[3]

- **#442** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Grube — bedre

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[4]

- **#443** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wieviel — cik

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[6]

- **#444** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Groß — liels

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[7]

- **#445** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Klein — mazs

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[9]

- **#446** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Alt — vecs

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[10]

- **#447** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jung — jauns

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[18]

- **#448** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Faul — slinks

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[19]

- **#449** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Fleißig — čakls

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[20]

- **#450** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Blau — zils

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[22]

- **#451** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Gelb — dzeltens

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[25]

- **#452** [HIGH] OWNER_REVIEW — `sections[1].items[25]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Baum — koks

### data/cs/courseLessons.js :: kurssLesson12 :: kurssLesson12/section[1]/item[28]

- **#453** [HIGH] OWNER_REVIEW — `sections[1].items[28]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Rot — sarkans

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[4]

- **#454** [HIGH] OWNER_REVIEW — `sections[5].cards[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co je to ruka?

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[5]

- **#455** [HIGH] OWNER_REVIEW — `sections[5].cards[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co je to noha?

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[7]

- **#456** [HIGH] OWNER_REVIEW — `sections[5].cards[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kde je hrudník

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[8]

- **#457** [HIGH] OWNER_REVIEW — `sections[5].cards[8]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kde je záda?

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[11]

- **#458** [HIGH] OWNER_REVIEW — `sections[5].cards[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Dlaň má pět prstů.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[14]

- **#459** [HIGH] OWNER_REVIEW — `sections[5].cards[14]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co je to prst?

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[15]

- **#460** [HIGH] OWNER_REVIEW — `sections[5].cards[15]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Prst má dráp.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[16]

- **#461** [HIGH] OWNER_REVIEW — `sections[5].cards[16]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co to děláš

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[21]

- **#462** [HIGH] OWNER_REVIEW — `sections[5].cards[21]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Zvednou nohy a ruce.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[23]

- **#463** [HIGH] OWNER_REVIEW — `sections[5].cards[23]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Spustí obě ruce.

### data/cs/courseLessons.js :: kurssLesson13 :: kurssLesson13/section[5]/card[24]

- **#464** [HIGH] OWNER_REVIEW — `sections[5].cards[24]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Otáčejí hlavy doprava.

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[17]

- **#465** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Es will — tas grib

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[30]

- **#466** [HIGH] OWNER_REVIEW — `sections[1].items[30]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Suppe — zupa

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[31]

- **#467** [HIGH] OWNER_REVIEW — `sections[1].items[31]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Munden — labi garšot

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[32]

- **#468** [HIGH] OWNER_REVIEW — `sections[1].items[32]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Mir — man

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[33]

- **#469** [HIGH] OWNER_REVIEW — `sections[1].items[33]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Dir — tev

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[36]

- **#470** [HIGH] OWNER_REVIEW — `sections[1].items[36]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Uns — mums

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[1]/item[39]

- **#471** [HIGH] OWNER_REVIEW — `sections[1].items[39]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Denn — jo

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[2]/item[0]

- **#472** [HIGH] OWNER_REVIEW — `sections[2].items[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[2]/item[1]

- **#473** [HIGH] OWNER_REVIEW — `sections[2].items[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[2]/item[5]

- **#474** [HIGH] OWNER_REVIEW — `sections[2].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[2]/item[6]

- **#475** [HIGH] OWNER_REVIEW — `sections[2].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[2]/item[7]

- **#476** [HIGH] OWNER_REVIEW — `sections[2].items[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[2]/item[8]

- **#477** [HIGH] OWNER_REVIEW — `sections[2].items[8]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[4]/card[0]

- **#478** [HIGH] OWNER_REVIEW — `sections[4].cards[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kdo chce tvrdě studovat?

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[4]/card[1]

- **#479** [HIGH] OWNER_REVIEW — `sections[4].cards[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Všichni studenti chtějí tvrdě studovat.

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[4]/card[2]

- **#480** [HIGH] OWNER_REVIEW — `sections[4].cards[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kdo by měl dnes přijít?

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[4]/card[4]

- **#481** [HIGH] OWNER_REVIEW — `sections[4].cards[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Musíte napsat dopis.

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[4]/card[5]

- **#482** [HIGH] OWNER_REVIEW — `sections[4].cards[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kdo se musí tvrdě učit?

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[4]/card[6]

- **#483** [HIGH] OWNER_REVIEW — `sections[4].cards[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Studenti musí tvrdě studovat.

### data/cs/courseLessons.js :: kurssLesson14 :: kurssLesson14/section[4]/card[10]

- **#484** [HIGH] OWNER_REVIEW — `sections[4].cards[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kdo by si měl knihu přečíst?

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/title

- **#485** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Přednáška 15

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[0]/item[24]

- **#486** [HIGH] OWNER_REVIEW — `sections[0].items[24]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Nein, Kinder, diese Birnen sollt ihr nicht essen • Sie sind nicht reif, sie sind unreif.

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/title

- **#487** [HIGH] OWNER_REVIEW — `sections[].title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jména

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[15]

- **#488** [MEDIUM] OWNER_REVIEW — `sections[1].items[15]`: [Luna FINDING] 
  - Source: luna
  - CURRENT: Das Messer — nazis

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[18]

- **#489** [MEDIUM] OWNER_REVIEW — `sections[1].items[18]`: [Luna FINDING] 
  - Source: luna
  - CURRENT: Schälen — mizot

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[20]

- **#490** [MEDIUM] OWNER_REVIEW — `sections[1].items[20]`: [Luna FINDING] 
  - Source: luna
  - CURRENT: Die Birne — bumbieris

### data/cs/courseLessons.js :: kurssLesson15 :: kurssLesson15/section[1]/item[21]

- **#491** [MEDIUM] OWNER_REVIEW — `sections[1].items[21]`: [Luna FINDING] 
  - Source: luna
  - CURRENT: Die Birnen — bumbieri

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/title

- **#492** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Přednáška 16

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[0]

- **#493** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wem — kam?

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[4]

- **#494** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Sich nähern — tuvoties

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[5]

- **#495** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ich nähere mich — es tuvojos

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[6]

- **#496** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Du näherst dich — tu tuvojies

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[7]

- **#497** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Geben — dot

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[8]

- **#498** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ich gebe — es dodu

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[9]

- **#499** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Du gibst — tu dod

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[11]

- **#500** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Magd — kalpone

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[15]

- **#501** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Knecht — kalps

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[21]

- **#502** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Wald — mežs

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[22]

- **#503** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Wälder — meži

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[23]

- **#504** [HIGH] OWNER_REVIEW — `sections[1].items[23]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Bauer — zemnieks

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[24]

- **#505** [HIGH] OWNER_REVIEW — `sections[1].items[24]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Bäuerin — zemniece

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[25]

- **#506** [HIGH] OWNER_REVIEW — `sections[1].items[25]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Folgen — sekot

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[1]/item[26]

- **#507** [HIGH] OWNER_REVIEW — `sections[1].items[26]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Jäger — mednieks

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[0]

- **#508** [HIGH] OWNER_REVIEW — `sections[2].items[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[1]

- **#509** [HIGH] OWNER_REVIEW — `sections[2].items[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[2]

- **#510** [HIGH] OWNER_REVIEW — `sections[2].items[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[3]

- **#511** [HIGH] OWNER_REVIEW — `sections[2].items[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[4]

- **#512** [HIGH] OWNER_REVIEW — `sections[2].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[5]

- **#513** [HIGH] OWNER_REVIEW — `sections[2].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[6]

- **#514** [HIGH] OWNER_REVIEW — `sections[2].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[7]

- **#515** [HIGH] OWNER_REVIEW — `sections[2].items[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[10]

- **#516** [HIGH] OWNER_REVIEW — `sections[2].items[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[2]/item[11]

- **#517** [HIGH] OWNER_REVIEW — `sections[2].items[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[14]/prompt

- **#518** [HIGH] OWNER_REVIEW — `sections[4].cards[14].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Vater ruft den Mann, die Frau, das Kind, den Sohn, das Fräulein, die Tante.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[4]/promptTask[15]/prompt

- **#519** [HIGH] OWNER_REVIEW — `sections[4].cards[15].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Vater nähert sich dem Knechte, der Tochter, der Magd, dem Lehrer, dem Tischler, der Lehrerin, dem Mädchen, dem Jäger.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[5]/card[0]

- **#520** [HIGH] OWNER_REVIEW — `sections[5].cards[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jak se jmenuje otec?

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[5]/card[5]

- **#521** [HIGH] OWNER_REVIEW — `sections[5].cards[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Pes poslouchá služebnictvo a služebné.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[5]/card[11]

- **#522** [HIGH] OWNER_REVIEW — `sections[5].cards[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Psi jsou loajální.

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[5]/card[12]

- **#523** [HIGH] OWNER_REVIEW — `sections[5].cards[12]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co se blíží školákům a dívkám?

### data/cs/courseLessons.js :: kurssLesson16 :: kurssLesson16/section[5]/card[13]

- **#524** [HIGH] OWNER_REVIEW — `sections[5].cards[13]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Učitel přistoupí ke studentům.

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[1]

- **#525** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Grube — bedre

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[2]

- **#526** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Graben — rakt

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[3]

- **#527** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Womit — ar ko?

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[4]

- **#528** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Ball — bumba

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[5]

- **#529** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Werfen — mest

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[8]

- **#530** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wieder — atkal

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[10]

- **#531** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Besen — slota

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[17]

- **#532** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Danken — pateikties

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[18]

- **#533** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Freund — draugs

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[19]

- **#534** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Freundin — draudzene

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[20]

- **#535** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Freundinnen — draudzenes

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[21]

- **#536** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Mit — ar

### data/cs/courseLessons.js :: kurssLesson17 :: kurssLesson17/section[1]/item[22]

- **#537** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Mit wem — ar ko? / ar kuru?

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[0]

- **#538** [HIGH] OWNER_REVIEW — `sections[1].items[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wohin — kurp?

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[1]

- **#539** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wo — kur?

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[2]

- **#540** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Tragen — nest

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[3]

- **#541** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ich trage — es nesu

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[4]

- **#542** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Du trägst — tu nes

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[6]

- **#543** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Korb — grozs / kurvis

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[7]

- **#544** [HIGH] OWNER_REVIEW — `sections[1].items[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Körbe — grozi / kurvji

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[12]

- **#545** [HIGH] OWNER_REVIEW — `sections[1].items[12]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Gießen — liet

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[15]

- **#546** [HIGH] OWNER_REVIEW — `sections[1].items[15]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jetzt — tagad

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[16]

- **#547** [HIGH] OWNER_REVIEW — `sections[1].items[16]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: An — pie

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[17]

- **#548** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Auf — uz

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[19]

- **#549** [HIGH] OWNER_REVIEW — `sections[1].items[19]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Tisch — galds

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[20]

- **#550** [HIGH] OWNER_REVIEW — `sections[1].items[20]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Bank — sols

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[1]/item[22]

- **#551** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Eimer — spainis

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[2]/item[1]

- **#552** [HIGH] OWNER_REVIEW — `sections[2].items[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[5]/card[0]

- **#553** [HIGH] OWNER_REVIEW — `sections[5].cards[0]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Odkud server pochází?

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[5]/card[2]

- **#554** [HIGH] OWNER_REVIEW — `sections[5].cards[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kde pracuje

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[5]/card[7]

- **#555** [HIGH] OWNER_REVIEW — `sections[5].cards[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Sbírají bobule v lese.

### data/cs/courseLessons.js :: kurssLesson18 :: kurssLesson18/section[5]/card[13]

- **#556** [HIGH] OWNER_REVIEW — `sections[5].cards[13]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Dopisy jsou nyní v tašce.

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/title

- **#557** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Přednáška 19

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/subtitle

- **#558** [HIGH] OWNER_REVIEW — `subtitle`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/title

- **#559** [HIGH] OWNER_REVIEW — `sections[].title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jména

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[1]

- **#560** [HIGH] OWNER_REVIEW — `sections[1].items[1]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Hinter — aiz

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[2]

- **#561** [HIGH] OWNER_REVIEW — `sections[1].items[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Unter — zem

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[4]

- **#562** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Neben — blakus

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[5]

- **#563** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Zwischen — starp

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[6]

- **#564** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Werfen — mest

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[8]

- **#565** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Spiegel — spogulis

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[9]

- **#566** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Schrank — skapis

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[10]

- **#567** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Eimer — spainis

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[11]

- **#568** [HIGH] OWNER_REVIEW — `sections[1].items[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Bank — sols

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[13]

- **#569** [HIGH] OWNER_REVIEW — `sections[1].items[13]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Klavier — klavieres

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[17]

- **#570** [HIGH] OWNER_REVIEW — `sections[1].items[17]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Zaun — žogs

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[18]

- **#571** [HIGH] OWNER_REVIEW — `sections[1].items[18]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Brücke — tilts

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[21]

- **#572** [HIGH] OWNER_REVIEW — `sections[1].items[21]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wachsen — augt

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[22]

- **#573** [HIGH] OWNER_REVIEW — `sections[1].items[22]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Mühle — dzirnavas

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[1]/item[26]

- **#574** [HIGH] OWNER_REVIEW — `sections[1].items[26]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Feld — lauks

### data/cs/courseLessons.js :: kurssLesson19 :: kurssLesson19/section[5]/card[4]

- **#575** [HIGH] OWNER_REVIEW — `sections[5].cards[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Poté učitel zavolá žáka.

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/title

- **#576** [HIGH] OWNER_REVIEW — `sections[].title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jména

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[3]

- **#577** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Stein — akmens

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[4]

- **#578** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Holz — koks / malka

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[5]

- **#579** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Glas — stikls

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[6]

- **#580** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Aus Glas — no stikla

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[8]

- **#581** [HIGH] OWNER_REVIEW — `sections[1].items[8]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Vorhaus — priekšnams / gaitenis

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[9]

- **#582** [HIGH] OWNER_REVIEW — `sections[1].items[9]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Küche — virtuve

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[1]/item[10]

- **#583** [HIGH] OWNER_REVIEW — `sections[1].items[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Dach — jumts

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[12]/prompt

- **#584** [HIGH] OWNER_REVIEW — `sections[4].cards[12].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ein Spiegel hängt an (die Wand).

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[13]/prompt

- **#585** [HIGH] OWNER_REVIEW — `sections[4].cards[13].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Der Bruder stellt die Vase vor (der Spiegel).

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[14]/prompt

- **#586** [HIGH] OWNER_REVIEW — `sections[4].cards[14].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Kind geht gern auf (die Straße).

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[15]/prompt

- **#587** [HIGH] OWNER_REVIEW — `sections[4].cards[15].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Kind spielt gern auf (die Straße).

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[4]/promptTask[16]/prompt

- **#589** [HIGH] OWNER_REVIEW — `sections[4].cards[16].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Das Kind spielt gern in (der Garten).

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[5]/card[6]

- **#590** [HIGH] OWNER_REVIEW — `sections[5].cards[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kde je těch deset bytů?

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[5]/card[7]

- **#591** [HIGH] OWNER_REVIEW — `sections[5].cards[7]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co je v každém bytě?

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[5]/card[11]

- **#592** [HIGH] OWNER_REVIEW — `sections[5].cards[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kam jde kominík?

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[5]/card[14]

- **#593** [HIGH] OWNER_REVIEW — `sections[5].cards[14]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co je to město?

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[5]/card[18]

- **#594** [HIGH] OWNER_REVIEW — `sections[5].cards[18]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kdo potřebuje pracovat?

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[5]/card[20]

- **#595** [HIGH] OWNER_REVIEW — `sections[5].cards[20]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kam potřebujete nosit dříví?

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[5]/card[21]

- **#596** [HIGH] OWNER_REVIEW — `sections[5].cards[21]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kam dáváte dříví?

### data/cs/courseLessons.js :: kurssLesson20 :: kurssLesson20/section[5]/card[22]

- **#597** [HIGH] OWNER_REVIEW — `sections[5].cards[22]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co jsi zapálil?

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/title

- **#598** [HIGH] OWNER_REVIEW — `title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Přednáška 21

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/subtitle

- **#599** [HIGH] OWNER_REVIEW — `subtitle`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Woher / wohin / wo, von / aus / mit + Dativ

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[0]/item[3]

- **#600** [HIGH] OWNER_REVIEW — `sections[0].items[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Zwei Männer sägen mit einer Säge • Ein Mann spaltet mit einem Beil.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/title

- **#601** [HIGH] OWNER_REVIEW — `sections[].title`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jména

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[3]

- **#602** [HIGH] OWNER_REVIEW — `sections[1].items[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Die Axt — cirvis

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[4]

- **#603** [HIGH] OWNER_REVIEW — `sections[1].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Von — no

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[5]

- **#604** [HIGH] OWNER_REVIEW — `sections[1].items[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Aus — no / iz

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[1]/item[6]

- **#605** [HIGH] OWNER_REVIEW — `sections[1].items[6]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Mit — ar

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[2]/item[4]

- **#606** [HIGH] OWNER_REVIEW — `sections[2].items[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: [object Object]

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[11]/prompt

- **#607** [HIGH] OWNER_REVIEW — `sections[4].cards[11].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wo steht ein Eimer mit Milch?

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[12]/prompt

- **#608** [HIGH] OWNER_REVIEW — `sections[4].cards[12].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Woher steigt sie?

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[13]/prompt

- **#609** [HIGH] OWNER_REVIEW — `sections[4].cards[13].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wohin geht sie zurück?

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[4]/promptTask[14]/prompt

- **#610** [HIGH] OWNER_REVIEW — `sections[4].cards[14].prompt`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Wo arbeitet sie fleißig?

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[2]

- **#611** [HIGH] OWNER_REVIEW — `sections[5].cards[2]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Z kapsy nosím hodinky.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[3]

- **#612** [HIGH] OWNER_REVIEW — `sections[5].cards[3]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ve sklepě je kbelík mléka.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[4]

- **#613** [HIGH] OWNER_REVIEW — `sections[5].cards[4]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Přináším kbelík ze sklepa.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[5]

- **#614** [HIGH] OWNER_REVIEW — `sections[5].cards[5]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Sundávám klobouk z hlavy.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[9]

- **#615** [HIGH] OWNER_REVIEW — `sections[5].cards[9]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Odstraňuji noty z klavíru.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[10]

- **#616** [HIGH] OWNER_REVIEW — `sections[5].cards[10]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Pocházíme od přítele.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[11]

- **#617** [HIGH] OWNER_REVIEW — `sections[5].cards[11]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Pocházíme od přítelkyně.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[12]

- **#618** [HIGH] OWNER_REVIEW — `sections[5].cards[12]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Pocházíme od učitele.

### data/cs/courseLessons.js :: kurssLesson21 :: kurssLesson21/section[5]/card[13]

- **#619** [HIGH] OWNER_REVIEW — `sections[5].cards[13]`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Všechny pocházejí od přítele, od přítelkyně, od učitele.

### data/cs/courseTrainingCards.js :: lesson1 :: training/lesson1/card[1]

- **#620** [HIGH] OWNER_REVIEW — `lesson1TrainingCardsCs[1].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ano, jdu.

### data/cs/courseTrainingCards.js :: lesson1 :: training/lesson1/card[3]

- **#621** [HIGH] OWNER_REVIEW — `lesson1TrainingCardsCs[3].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Martha zpívá.

### data/cs/courseTrainingCards.js :: lesson1 :: training/lesson1/card[9]

- **#622** [HIGH] OWNER_REVIEW — `lesson1TrainingCardsCs[9].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Jdeš?

### data/cs/courseTrainingCards.js :: lesson1 :: training/lesson1/card[10]

- **#623** [HIGH] OWNER_REVIEW — `lesson1TrainingCardsCs[10].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Albert a Martha přicházejí a odcházejí.

### data/cs/courseTrainingCards.js :: lesson2 :: training/lesson2/card[5]

- **#624** [HIGH] OWNER_REVIEW — `lesson2TrainingCardsCs[5].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Zpívají Paul a Mary?

### data/cs/courseTrainingCards.js :: lesson2 :: training/lesson2/card[7]

- **#625** [HIGH] OWNER_REVIEW — `lesson2TrainingCardsCs[7].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co to děláš

### data/cs/courseTrainingCards.js :: lesson2 :: training/lesson2/card[9]

- **#626** [HIGH] OWNER_REVIEW — `lesson2TrainingCardsCs[9].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Kreslíš?

### data/cs/courseTrainingCards.js :: lesson2 :: training/lesson2/card[10]

- **#627** [HIGH] OWNER_REVIEW — `lesson2TrainingCardsCs[10].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Ano, kreslíme, ale Maria hraje.

### data/cs/courseTrainingCards.js :: lesson2 :: training/lesson2/card[11]

- **#628** [HIGH] OWNER_REVIEW — `lesson2TrainingCardsCs[11].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co to děláš

### data/cs/courseTrainingCards.js :: lesson2 :: training/lesson2/card[13]

- **#629** [HIGH] OWNER_REVIEW — `lesson2TrainingCardsCs[13].front`: [Luna TRANSLATION] 
  - Source: luna
  - CURRENT: Co se děje?
