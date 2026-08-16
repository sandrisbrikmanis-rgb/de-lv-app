# CS–DE Kurss — pilns valodas audits (READ-ONLY)

Audita datums: 2026-08-16
Auditors: deterministiskā pārbaude + GPT-5.6 Luna (gpt-5.6-luna)

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Audited units | 1421/1421 |
| Lekcijas | 21 + verb-basics + sentence-structure + speciālās (articles, pronouns, pronunciation, consonants) |
| CRITICAL | 0 |
| HIGH | 84 |
| MEDIUM | 134 |
| LOW | 0 |
| LV remnants (signāli) | 144 |
| placeholders | 0 |
| DE_SOURCE_ISSUE | 0 |
| FALSE_POSITIVE (izslēgti no tabulas) | 14 |
| Reāli findings (PENDING_OWNER_REVIEW) | 218 |
| CS production changes | **0** |
| DE production changes | **0** |
| unexpected changes | **0** |
| Luna tokens | 260689 (55 requests) |

> **PROPOSED_CS** nav automātiski OWNER apstiprināts labojums.

## Metodoloģija

- DE lauki: STRICT READ-ONLY (tikai salīdzināšanai)
- CS production: READ-ONLY
- Avots: `data/cs/courseLessons.js`, `data/cs/courseTrainingCards.js`, `languages/cs/ui.js`
- LV reference: `data/courseLessons.js`, `ui.js`
- DE avota problēma → `DE_SOURCE_ISSUE`; kļūdains automātiskais atradums → `FALSE_POSITIVE`

## Findings

### 1. kurssArticlesLesson / kurssArticlesLesson/legacyHtml

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `legacyHtml(stripped)`
- **LV reference:** <h3>Artikuli</h3>    <div class="artikuli-info artikuli-intro-info">     <span class="artikuli-info-icon">i</span>     <div>Vācu artikuls ne vienmēr sakrīt ar latviešu dzimti. Tāpēc lietvārdus vislabāk mācīties kopā ar artikulu.</div>   </div>    <section class="artikuli-block">     <h4 class="artikuli-header"><span>•</span>Artikulu piemēri</h4>     <div class="artikuli-grid">       <div class="kurss-example">der Tisch — galds</div>       <div class="kurss-example">die Tür — durvis</div>       <
- **CURRENT_CS:** Články i Německý článek se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem. • Příklady článků Der Tisch - stol Die Tür - dveře Das Messer - nůž Das Mädchen - dívka ♂ Často DER DER jsou často mužské osoby, dny, měsíce, roční období a některá slova s ​​určitými …
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 2. kurssPronunciationLesson / kurssPronunciationLesson/legacyHtml

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `COURSE_LESSON_HTML`
- **LV reference:** <h3>Patskaņi — garš un īss</h3>             <p class="kurss-lesson-intro">Vācu valodā patskaņi var būt gari vai īsi. Tas ietekmē vārda izrunu.</p>              <section class="kurss-lesson-section">               <h4>Garš patskanis</h4>               <div class="kurss-examples"><div class="kurss-example">warm (varm) — silts</div><div class="kurss-example">gut (gūt) — labs</div><div class="kurss-example">Tat (tāt) — darbs / rīcība</div><div class="kurss-example">Flur (flūr) — gaitenis</div><div c
- **CURRENT_CS:** <h3>Samohlásky - dlouhé a krátké</h3>             <p class="kurss-lesson-intro">V němčině mohou být samohlásky dlouhé nebo krátké. To má vliv na výslovnost slova.</p>              <section class="kurss-lesson-section">               <h4>Dlouhá samohláska</h4>               <div class="k…
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 3. kurssConsonantsLesson / kurssConsonantsLesson/legacyHtml

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `COURSE_LESSON_HTML`
- **LV reference:** <h3>Līdzskaņi un burtu savienojumi</h3>             <p class="kurss-lesson-intro">Vācu valodā daži līdzskaņi un burtu savienojumi tiek izrunāti citādi nekā tos raksta. Šajā lekcijā ir svarīgākie piemēri iesācējam.</p>              <section class="kurss-lesson-section">               <h4>Līdzskaņi</h4>               <div class="kurss-examples"><div class="kurss-example">das Rad (rāt) — ritenis</div><div class="kurss-example">die Räder (rēder) — riteņi</div><div class="kurss-example">Bad (bāt) — v
- **CURRENT_CS:** <h3>Souhlásky a kombinace písmen</h3>             <p class="kurss-lesson-intro">V němčině se některé souhlásky a kombinace písmen vyslovují jinak, než se píší. Tato přednáška obsahuje nejdůležitější příklady pro začátečníky.</p>              <section class="kurss-lesson-section">       …
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 4. kurssLesson5 / kurssLesson5/legacyHtml

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `legacyHtml(stripped)`
- **LV reference:** <h3>Lekcija 5</h3>     <p class="kurss-lesson-intro">Wen?, akuzatīvs, sitzen, fragen un -in galotne.</p>      <details class="lesson1-accordion" open>       <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌄</span></summary>       <div class="lesson1-content"><div class="lesson1-card-grid">         <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div>         <div class="kurss-example">Wer st
- **CURRENT_CS:** Přednáška 5 Wen?, akuzativ, sitzen, fragen a 1. 1\. Dialogy / věty ⌄ Wer sitzt und fragt? Der Lehrer sitzt und fragt. Wer steht und antwortet? Der Schüler steht und antwortet. Wie antwortet der Schüler? Der Schüler antwortet gut. Wen lobt der Lehrer? Der Lehrer lobt den Schüler. Wie ist der Schüler?…
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 5. kurssLesson8 / kurssLesson8/section[1]/item[12]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[12]`
- **LV reference:** fragen (ar akuzatīvu) — jautāt
- **CURRENT_CS:** fragen (ar akuzatīvu) — ptát se
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 6. kurssLesson8 / kurssLesson8/section[1]/item[34]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[34]`
- **LV reference:** der Bäcker (dēr beker) — maiznieks
- **CURRENT_CS:** der Bäcker (dēr beker) — pekař
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 7. kurssLesson8 / kurssLesson8/section[1]/item[35]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[35]`
- **LV reference:** der Schneider (dēr šneider) — drēbnieks
- **CURRENT_CS:** der Schneider (dēr šneider) — krejčí
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 8. kurssLesson8 / kurssLesson8/section[1]/item[36]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[36]`
- **LV reference:** der Gärtner (dēr gertner) — dārznieks
- **CURRENT_CS:** der Gärtner (dēr gertner) — zahradník
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 9. kurssLesson8 / kurssLesson8/section[2]/item[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[2].items[1]`
- **LV reference:** ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
- **CURRENT_CS:** ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 10. kurssLesson8 / kurssLesson8/section[3]/item[7]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[7]`
- **LV reference:** Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **CURRENT_CS:** Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 11. kurssLesson9 / kurssLesson9/section[1]/item[10]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[10]`
- **LV reference:** ruhig (rū-ich) — mierīgi
- **CURRENT_CS:** ruhig (rū-klidně
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 12. kurssLesson9 / kurssLesson9/section[1]/item[13]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[13]`
- **LV reference:** der Brief (dēr brīf) — vēstule
- **CURRENT_CS:** der Brief (dēr brīf) — dopis
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 13. kurssLesson10 / kurssLesson10/section[1]/item[4]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[4]`
- **LV reference:** ihr seid (īr zeit) — jūs esat
- **CURRENT_CS:** ihr seid (īr zeit) — vy jste
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 14. kurssLesson10 / kurssLesson10/section[1]/item[14]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[14]`
- **LV reference:** der Knabe (dēr knābe) — zēns
- **CURRENT_CS:** der Knabe (dēr knābe) — chlapec
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 15. kurssLesson10 / kurssLesson10/section[1]/item[17]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[17]`
- **LV reference:** der Großvater (dēr grōsfāter) — vectēvs
- **CURRENT_CS:** der Großvater (dēr grōsfāter) — dědeček
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 16. kurssLesson10 / kurssLesson10/section[2]/item[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[2].items[1]`
- **LV reference:** ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
- **CURRENT_CS:** ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 17. kurssLesson10 / kurssLesson10/section[2]/item[2]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[2].items[2]`
- **LV reference:** ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
- **CURRENT_CS:** ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 18. kurssLesson11 / kurssLesson11/section[1]/item[6]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[6]`
- **LV reference:** der Bruder (dēr brūder) — brālis
- **CURRENT_CS:** der Bruder (dēr brūder) — bratr
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 19. kurssLesson11 / kurssLesson11/section[1]/item[13]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[13]`
- **LV reference:** der Schreibtisch (dēr šreibtīš) — rakstāmgalds
- **CURRENT_CS:** der Schreibtisch (dēr šreibtīš) — psací stůl
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 20. kurssLesson11 / kurssLesson11/section[1]/item[18]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[18]`
- **LV reference:** der Freund (dēr froint) — draugs
- **CURRENT_CS:** der Freund (dēr froint) — přítel
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 21. kurssLesson11 / kurssLesson11/section[1]/item[21]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[21]`
- **LV reference:** der Stuhl (dēr štūl) — krēsls
- **CURRENT_CS:** der Stuhl (dēr štūl) — židle
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 22. kurssLesson11 / kurssLesson11/section[1]/item[25]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[25]`
- **LV reference:** die Landkarte (dī lantkarte) — ģeogrāfijas karte
- **CURRENT_CS:** die Landkarte (dī lantkarte) — mapa
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 23. kurssLesson11 / kurssLesson11/section[1]/item[28]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[28]`
- **LV reference:** die Schwester (dī švester) — māsa
- **CURRENT_CS:** die Schwester (dī švester) — sestra
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 24. kurssLesson12 / kurssLesson12/section[1]/item[13]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[13]`
- **LV reference:** der Vetter (dēr feter) — brālēns
- **CURRENT_CS:** der Vetter (dēr feter) — bratranec
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 25. kurssLesson12 / kurssLesson12/section[1]/item[23]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[1].items[23]`
- **LV reference:** das Gummi (das gumī) — gumija
- **CURRENT_CS:** das Gummi (das gumī) — guma
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 26. kurssLesson12 / kurssLesson12/section[2]/item[2]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[2].items[2]`
- **LV reference:** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme.
- **CURRENT_CS:** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — Ve slově der Federhalter se h vyslovuje jako hláska, zatímco ve slově der Sohn označuje délku předcházející samohlásky.
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 27. kurssLesson13 / kurssLesson13/section[3]/item[4]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[4]`
- **LV reference:** äu izrunā kā oi: du läufst, er läuft.
- **CURRENT_CS:** äu izrunā kā oi: du läufst, er läuft.
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 28. kurssLesson14 / kurssLesson14/section[3]/item[3]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[3]`
- **LV reference:** ö vārdā mögen izrunā kā skaidru ö skaņu.
- **CURRENT_CS:** ö vārdā mögen izrunā kā skaidru ö skaņu.
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 29. kurssLesson15 / kurssLesson15/section[3]/item[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[0]`
- **LV reference:** ä vārdos Äpfel un schälen izrunā kā šauro e.
- **CURRENT_CS:** ä vārdos Äpfel un schälen izrunā kā šauro e.
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 30. kurssLesson16 / kurssLesson16/section[3]/item[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[0]`
- **LV reference:** Vārdos wem, dem, den, der — e ir garš un šaurs.
- **CURRENT_CS:** Vārdos wem, dem, den, der — Ve slovech wem, dem, den a der je e dlouhé a vyslovuje se přibližně jako české é.
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 31. kurssLesson16 / kurssLesson16/section[3]/item[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[1]`
- **LV reference:** Vārdā gehorchen h ir dzirdams: ge-hor-chen.
- **CURRENT_CS:** Vārdā gehorchen h ir dzirdams: ge-chen.
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 32. kurssLesson20 / kurssLesson20/section[3]/item[5]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[5]`
- **LV reference:** Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut.
- **CURRENT_CS:** Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-hláska [ç], která v češtině nemá přesný ekvivalent.
- **PROPOSED_CS:** (OWNER: Czech replacement per LV MASTER meaning)
- **Pamatojums:** Foreign/script issue: LV_DIACRITIC
- **Avots:** deterministic

### 33. (embedded UI hints) / legacyHtml/training hints

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `aria-label / lesson1-training-hint`
- **LV reference:** (see LV MASTER)
- **CURRENT_CS:** Lekcija 2; pārtulkošanas; Lekcija 2; Lekcija 6; pārtulkošanas
- **PROPOSED_CS:** Czech UI hints (e.g. Klepněte na kartu…)
- **Pamatojums:** Latvian UI leftover strings in Czech course HTML
- **Avots:** deterministic

### 34. kurssLesson11 / kurssLesson11/section[3]/item[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[1]`
- **LV reference:** [object Object]
- **CURRENT_CS:** [object Object]
- **PROPOSED_CS:** [object Object]
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 35. kurssLesson11 / kurssLesson11/section[3]/item[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[2]`
- **LV reference:** [object Object]
- **CURRENT_CS:** [object Object]
- **PROPOSED_CS:** [object Object]
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 36. kurssLesson11 / kurssLesson11/section[3]/item[3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[3]`
- **LV reference:** [object Object]
- **CURRENT_CS:** [object Object]
- **PROPOSED_CS:** [object Object]
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 37. kurssLesson11 / kurssLesson11/section[3]/item[4]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[4]`
- **LV reference:** [object Object]
- **CURRENT_CS:** [object Object]
- **PROPOSED_CS:** [object Object]
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 38. kurssLesson11 / kurssLesson11/section[3]/item[6]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[3].items[6]`
- **LV reference:** [object Object]
- **CURRENT_CS:** [object Object]
- **PROPOSED_CS:** [object Object]
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 39. kurssLesson16 / kurssLesson16/subtitle

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `subtitle`
- **LV reference:** Dativs, geben, sich nähern
- **CURRENT_CS:** Dativ, geben, sich nähern
- **PROPOSED_CS:** Dativ, dávat, přibližovat se
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 40. kurssLesson20 / kurssLesson20/section[4]/promptTask[10]/task

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[10].task`
- **LV reference:** Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
- **CURRENT_CS:** Vyber správný pád: wo/wann → Dativ, wohin → Akkusativ.
- **PROPOSED_CS:** Vyber správný pád: wo → Dativ, wohin → Akkusativ.
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 41. kurssLesson20 / kurssLesson20/section[4]/promptTask[11]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[11].prompt`
- **LV reference:** Jener Mann steht unter (die Brücke).
- **CURRENT_CS:** Jener Mann steht unter (die Brücke).
- **PROPOSED_CS:** Tento muž stojí pod (most).
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 42. kurssLesson20 / kurssLesson20/section[4]/promptTask[11]/task

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[11].task`
- **LV reference:** Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
- **CURRENT_CS:** Vyber správný pád: wo/wann → Dativ, wohin → Akkusativ.
- **PROPOSED_CS:** Vyber správný pád: wo → Dativ, wohin → Akkusativ.
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 43. kurssLesson20 / kurssLesson20/section[4]/promptTask[12]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[12].prompt`
- **LV reference:** Ein Spiegel hängt an (die Wand).
- **CURRENT_CS:** Ein Spiegel hängt an (die Wand).
- **PROPOSED_CS:** Zrcadlo visí na (zeď).
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 44. kurssLesson20 / kurssLesson20/section[4]/promptTask[12]/task

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[12].task`
- **LV reference:** Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
- **CURRENT_CS:** Vyber správný pád: wo/wann → Dativ, wohin → Akkusativ.
- **PROPOSED_CS:** Vyber správný pád: wo → Dativ, wohin → Akkusativ.
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 45. kurssLesson20 / kurssLesson20/section[4]/promptTask[13]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[13].prompt`
- **LV reference:** Der Bruder stellt die Vase vor (der Spiegel).
- **CURRENT_CS:** Der Bruder stellt die Vase vor (der Spiegel).
- **PROPOSED_CS:** Bratr staví vázu před (zrcadlo).
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 46. kurssLesson20 / kurssLesson20/section[4]/promptTask[13]/task

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[13].task`
- **LV reference:** Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
- **CURRENT_CS:** Vyber správný pád: wo/wann → Dativ, wohin → Akkusativ.
- **PROPOSED_CS:** Vyber správný pád: wo → Dativ, wohin → Akkusativ.
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 47. kurssLesson20 / kurssLesson20/section[4]/promptTask[14]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[14].prompt`
- **LV reference:** Das Kind geht gern auf (die Straße).
- **CURRENT_CS:** Das Kind geht gern auf (die Straße).
- **PROPOSED_CS:** Dítě rádo chodí na (ulice).
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 48. kurssLesson20 / kurssLesson20/section[4]/promptTask[14]/task

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[14].task`
- **LV reference:** Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
- **CURRENT_CS:** Vyber správný pád: wo/wann → Dativ, wohin → Akkusativ.
- **PROPOSED_CS:** Vyber správný pád: wo → Dativ, wohin → Akkusativ.
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 49. kurssLesson20 / kurssLesson20/section[4]/promptTask[15]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[15].prompt`
- **LV reference:** Das Kind spielt gern auf (die Straße).
- **CURRENT_CS:** Das Kind spielt gern auf (die Straße).
- **PROPOSED_CS:** Dítě si rádo hraje na (ulice).
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 50. kurssLesson20 / kurssLesson20/section[4]/promptTask[15]/task

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[15].task`
- **LV reference:** Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
- **CURRENT_CS:** Vyber správný pád: wo/wann → Dativ, wohin → Akkusativ.
- **PROPOSED_CS:** Vyber správný pád: wo → Dativ, wohin → Akkusativ.
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 51. kurssLesson20 / kurssLesson20/section[4]/promptTask[16]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[16].prompt`
- **LV reference:** Das Kind spielt gern in (der Garten).
- **CURRENT_CS:** Das Kind spielt gern in (der Garten).
- **PROPOSED_CS:** Dítě si rádo hraje v (zahrada).
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 52. kurssLesson20 / kurssLesson20/section[4]/promptTask[16]/task

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[16].task`
- **LV reference:** Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.
- **CURRENT_CS:** Vyber správný pád: wo/wann → Dativ, wohin → Akkusativ.
- **PROPOSED_CS:** Vyber správný pád: wo → Dativ, wohin → Akkusativ.
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 53. kurssLesson21 / kurssLesson21/section[4]/promptTask[10]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[10].prompt`
- **LV reference:** Wohin eilt sie?
- **CURRENT_CS:** Wohin eilt sie?
- **PROPOSED_CS:** Kam spěchá?
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 54. kurssLesson21 / kurssLesson21/section[4]/promptTask[11]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[11].prompt`
- **LV reference:** Wo steht ein Eimer mit Milch?
- **CURRENT_CS:** Wo steht ein Eimer mit Milch?
- **PROPOSED_CS:** Kde stojí kbelík s mlékem?
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 55. kurssLesson21 / kurssLesson21/section[4]/promptTask[12]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[12].prompt`
- **LV reference:** Woher steigt sie?
- **CURRENT_CS:** Woher steigt sie?
- **PROPOSED_CS:** Odkud vystupuje?
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 56. kurssLesson21 / kurssLesson21/section[4]/promptTask[13]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[13].prompt`
- **LV reference:** Wohin geht sie zurück?
- **CURRENT_CS:** Wohin geht sie zurück?
- **PROPOSED_CS:** Kam se vrací?
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 57. kurssLesson21 / kurssLesson21/section[4]/promptTask[14]/prompt

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `sections[4].cards[14].prompt`
- **LV reference:** Wo arbeitet sie fleißig?
- **CURRENT_CS:** Wo arbeitet sie fleißig?
- **PROPOSED_CS:** Kde pilně pracuje?
- **Pamatojums:** [TRANSLATION]
- **Avots:** luna

### 58. kurssLesson1 / kurssLesson1

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `kurssLesson1`
- **LV reference:** <h3>Lekcija 1</h3>             <p class="kurss-lesson-intro">Pirmā lekcija: darbības vārdi tagadnē, vārdiņi, izruna, gramatika un pārtulko.</p>             <details class="lesson1-accordion" open>               <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Darbības vārdi tagadnē</span><span class="lesson1-chevron">⌃</span></summary>               <div class="lesson1-content">                 <div class="lesson1-info">Darbības vārdi un to locījumi tagadnē.</div>         
- **CURRENT_CS:** <h3>Přednáška 1</h3>             <p class="kurss-lesson-intro">První přednáška: slovesa v přítomném čase, slovíčka, výslovnost, gramatika a překlad.</p>             <details class="lesson1-accordion" open>               <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Slovesa v přítomném čase</span><span class="lesson1-chevron">⌃</span></summary>               <div class="lesson1-content">                 <div class="lesson1-info">Slovesa a jejich časování v přítomném čase.</div>                 <div class="lesson1-verb-cards">                   <article class="lesson1-verb-card">                     <h4><span class="lesson1-verb-icon">♟</span>kommen — přicházet</h4>                     <div class="lesson1-conjugation"><span>ich</span><strong>komme</strong><span>přic
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 59. kurssLesson2 / kurssLesson2

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `kurssLesson2`
- **LV reference:** <h3>Lekcija 2</h3>             <p class="kurss-lesson-intro">Otrā lekcija: dialogi, vārdi, izruna, gramatika un pārtulkošana.</p>             <details class="lesson1-accordion" open>               <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌃</span></summary>               <div class="lesson1-content">                 <div class="lesson1-card-grid">                   <div class="kurss-example">Spielst du?<br>Nein, 
- **CURRENT_CS:** <h3>Přednáška 2</h3>             <p class="kurss-lesson-intro">Druhá přednáška: dialogy, slovíčka, výslovnost, gramatika a překlad.</p>             <details class="lesson1-accordion" open>               <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogy / věty</span><span class="lesson1-chevron">⌃</span></summary>               <div class="lesson1-content">                 <div class="lesson1-card-grid">                   <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div>                   <div class="kurss-example">Paul fragt nicht, er arbeitet.</div>                   <div class="kurss-example">Arbeitest du?<br>Nein, ich arbeite nicht, ich singe.</div>                   <div class="kurss-example">Was tut Paul?<br>Er spielt.</
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 60. kurssLesson5 / kurssLesson5

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `kurssLesson5`
- **LV reference:** <h3>Lekcija 5</h3>     <p class="kurss-lesson-intro">Wen?, akuzatīvs, sitzen, fragen un -in galotne.</p>      <details class="lesson1-accordion" open>       <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌄</span></summary>       <div class="lesson1-content"><div class="lesson1-card-grid">         <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div>         <div class="kurss-example">Wer st
- **CURRENT_CS:** <h3>Přednáška 5</h3>     <p class="kurss-lesson-intro">Wen?, akuzativ, sitzen, fragen a</p>      <details class="lesson1-accordion" open>       <summary><span class="lesson1-number lesson1-number-red">1.</span><span>1\. Dialogy / věty</span><span class="lesson1-chevron">⌄</span></summary>       <div class="lesson1-content"><div class="lesson1-card-grid">         <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div>         <div class="kurss-example">Wer steht und antwortet? Der Schüler steht und antwortet.</div>         <div class="kurss-example">Wie antwortet der Schüler? Der Schüler antwortet gut.</div>         <div class="kurss-example">Wen lobt der Lehrer? Der Lehrer lobt den Schüler.</div>         <div class="kurss-example">Wie ist der Schüler? Der Schüler 
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 61. kurssLesson6 / kurssLesson6

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `kurssLesson6`
- **LV reference:** <h3>Lekcija 6</h3>     <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>      <details class="lesson1-accordion" open>       <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌄</span></summary>       <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</d
- **CURRENT_CS:** <h3>Přednáška 6</h3>     <p class="kurss-lesson-intro">Číslovky, množné číslo, přehlásky a tvary množného čísla podstatných jmen.</p>      <details class="lesson1-accordion" open>       <summary><span class="lesson1-number lesson1-number-red">1.</span><span>1\. Dialogy / věty</span><span class="lesson1-chevron">⌄</span></summary>       <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example">Edgar nimmt ein Messer, zwei Messer, drei Messer.</div><div class="kurss-example">Er legt die Messer wieder hin.</div><div class="kurss-example">Alle Messer sind scharf.</div><div class="kurss-example">Dann nimmt er wieder ein Messer.</div><div class="kurss-
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 62. kurssLesson7 / kurssLesson7

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `kurssLesson7`
- **LV reference:** <h3>Lekcija 7</h3>             <p class="kurss-lesson-intro">Septītā lekcija: pavēles izteiksme, uzrunas forma un daudzskaitlis.</p>             <details class="lesson1-accordion" open>               <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌃</span></summary>               <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was tust du? Ich singe ein Lied.
- **CURRENT_CS:** <h3>Přednáška 7</h3>             <p class="kurss-lesson-intro">Sedmá přednáška: rozkazovací způsob, zdvořilostní forma a množné číslo.</p>             <details class="lesson1-accordion" open>               <summary><span class="lesson1-number lesson1-number-red">1.</span><span>1\. Dialogy / věty</span><span class="lesson1-chevron">⌃</span></summary>               <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was tust du? Ich singe ein Lied.</div><div class="kurss-example">Hans und Olga, singt ein Lied! Was tut ihr? Wir singen ein Lied.</div><div class="kurss-example">Fräulein Müller, singen Sie, bitte, ein Lied! Was tun Sie? Ich singe ein Lied.</div><div class="kurss-example">Hans, zähle die Teller! Was tut Hans? Er zählt die T
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 63. kurssLesson8 / kurssLesson8.sections[1].items[12]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** fragen (ar akuzatīvu) — jautāt
- **CURRENT_CS:** fragen (ar akuzatīvu) — ptát se
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 64. kurssLesson8 / kurssLesson8.sections[2].items[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
- **CURRENT_CS:** ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 65. kurssLesson8 / kurssLesson8.sections[2].items[4]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ß izrunā kā s: grüßen (grüsen).
- **CURRENT_CS:** ß izrunā kā s: grüßen (grüsen).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 66. kurssLesson8 / kurssLesson8.sections[2].items[5]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** eu izrunā kā oi: deutlich (doitlich).
- **CURRENT_CS:** eu izrunā kā oi: deutlich (doitlich).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 67. kurssLesson8 / kurssLesson8.sections[3].items[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Daudziem darbības vārdiem ar patskani e celmā vienskaitļa 2. un 3. personā tagadnē e vietā ir i vai ie.
- **CURRENT_CS:** Daudziem darbības vārdiem ar patskani e celmā vienskaitļa 2. un 3. personā tagadnē e vietā ir i vai ie.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 68. kurssLesson8 / kurssLesson8.sections[3].items[7]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **CURRENT_CS:** Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 69. kurssLesson8 / kurssLesson8.sections[3].items[8]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Latviešu valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu sich.
- **CURRENT_CS:** Latviešu valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu sich.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 70. kurssLesson8 / kurssLesson8.sections[3].items[10]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Pavēles izteiksme: setz(e) dich!, setzt euch!, setzen Sie sich!
- **CURRENT_CS:** Pavēles izteiksme: setz(e) dich!, setzt euch!, setzen Sie sich!
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 71. kurssLesson9 / kurssLesson9.sections[1].items[10]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ruhig (rū-ich) — mierīgi
- **CURRENT_CS:** ruhig (rū-klidně
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 72. kurssLesson9 / kurssLesson9.sections[2].items[0].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Norādāmie vietniekvārdi
- **CURRENT_CS:** Norādāmie vietniekvārdi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 73. kurssLesson10 / kurssLesson10.sections[2].items[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Pareizi jāizrunā patskaņu pārkaņojumi.
- **CURRENT_CS:** Pareizi jāizrunā patskaņu pārkaņojumi.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 74. kurssLesson10 / kurssLesson10.sections[2].items[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
- **CURRENT_CS:** ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 75. kurssLesson10 / kurssLesson10.sections[2].items[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
- **CURRENT_CS:** ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 76. kurssLesson10 / kurssLesson10.sections[2].items[3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
- **CURRENT_CS:** Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 77. kurssLesson10 / kurssLesson10.sections[2].items[5]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
- **CURRENT_CS:** Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 78. kurssLesson10 / kurssLesson10.sections[2].items[6]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
- **CURRENT_CS:** Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 79. kurssLesson10 / kurssLesson10.sections[2].items[7]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Pareizi izrunā: der Großvater (dēr grōsfāter).
- **CURRENT_CS:** Pareizi izrunā: der Großvater (dēr grōsfāter).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 80. kurssLesson10 / kurssLesson10.sections[2].items[8]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
- **CURRENT_CS:** Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 81. kurssLesson10 / kurssLesson10.sections[2].items[9]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
- **CURRENT_CS:** Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 82. kurssLesson11 / kurssLesson11.sections[2].items[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** eu izrunā kā oi: der Freund (dēr froint), neun (noin).
- **CURRENT_CS:** eu izrunā kā oi: der Freund (dēr froint), neun (noin).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 83. kurssLesson11 / kurssLesson11.sections[2].items[2]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).
- **CURRENT_CS:** z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 84. kurssLesson11 / kurssLesson11.sections[3].items[1].table[2][1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** viņam/viņai/tam ir
- **CURRENT_CS:** viņam/viņai/tam ir
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 85. kurssLesson11 / kurssLesson11.sections[3].items[1].table[5][1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** viņiem ir
- **CURRENT_CS:** viņiem ir
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 86. kurssLesson11 / kurssLesson11.sections[3].items[2].heading

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Latviešu datīvs un vācu nominatīvs/akuzatīvs
- **CURRENT_CS:** Latviešu datīvs un vācu nominatīvs/akuzatīvs
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 87. kurssLesson11 / kurssLesson11.sections[3].items[3].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Piemēri
- **CURRENT_CS:** Piemēri
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 88. kurssLesson11 / kurssLesson11.sections[3].items[4].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Salīdzinājums ar citām valodām
- **CURRENT_CS:** Salīdzinājums ar citām valodām
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 89. kurssLesson11 / kurssLesson11.sections[3].items[4].examples[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** angļu: I have a book; the father has a pencil.
- **CURRENT_CS:** angļu: I have a book; the father has a pencil.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 90. kurssLesson11 / kurssLesson11.sections[3].items[6].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Imperativ — piemēri
- **CURRENT_CS:** Imperativ — piemēri
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 91. kurssLesson11 / kurssLesson11.sections[3].items[6].examples[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** habe Geduld! — pacietību! / lai tev ir pacietība!
- **CURRENT_CS:** habe Geduld! — pacietību! / lai tev ir pacietība!
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 92. kurssLesson11 / kurssLesson11.sections[3].items[6].examples[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** habt Geduld! — lai jums ir pacietība!
- **CURRENT_CS:** habt Geduld! — lai jums ir pacietība!
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 93. kurssLesson11 / kurssLesson11.sections[3].items[10].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Vārdu kārtība ar denn
- **CURRENT_CS:** Vārdu kārtība ar denn
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 94. kurssLesson11 / kurssLesson11.sections[3].items[11].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Denn — piemēri
- **CURRENT_CS:** Denn — piemēri
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 95. kurssLesson11 / kurssLesson11.sections[3].items[12].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Saliktie lietvārdi
- **CURRENT_CS:** Saliktie lietvārdi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 96. kurssLesson11 / kurssLesson11.sections[3].items[13].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Saliktie lietvārdi — piemēri
- **CURRENT_CS:** Saliktie lietvārdi — piemēri
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 97. kurssLesson12 / kurssLesson12.sections[2].items[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** x izrunā kā ks: Max (maks), Felix (feliks).
- **CURRENT_CS:** x izrunā kā ks: Max (maks), Felix (feliks).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 98. kurssLesson12 / kurssLesson12.sections[2].items[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
- **CURRENT_CS:** Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 99. kurssLesson12 / kurssLesson12.sections[2].items[2]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme.
- **CURRENT_CS:** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — Ve slově der Federhalter se h vyslovuje jako hláska, zatímco ve slově der Sohn označuje délku předcházející samohlásky.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 100. kurssLesson12 / kurssLesson12.sections[3].items[1].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Umlaut pārākajā pakāpē
- **CURRENT_CS:** Umlaut pārākajā pakāpē
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 101. kurssLesson12 / kurssLesson12.sections[3].items[2].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Salīdzināšana ar wie un als
- **CURRENT_CS:** Salīdzināšana ar wie un als
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 102. kurssLesson12 / kurssLesson12.sections[3].items[4].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Neregulārās salīdzināmās pakāpes
- **CURRENT_CS:** Neregulārās salīdzināmās pakāpes
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 103. kurssLesson13 / kurssLesson13.sections[2].items[0].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Umlaut tagadnē
- **CURRENT_CS:** Umlaut tagadnē
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 104. kurssLesson13 / kurssLesson13.sections[2].items[1].heading

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Atgriezeniskais darbības vārds
- **CURRENT_CS:** Atgriezeniskais darbības vārds
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 105. kurssLesson13 / kurssLesson13.sections[2].items[2].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Pavēles forma ar sich umkehren
- **CURRENT_CS:** Pavēles forma ar sich umkehren
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 106. kurssLesson13 / kurssLesson13.sections[2].items[3].heading

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Darbības vārds atmen
- **CURRENT_CS:** Darbības vārds atmen
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 107. kurssLesson13 / kurssLesson13.sections[2].items[4].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Pavēles forma ar atmen
- **CURRENT_CS:** Pavēles forma ar atmen
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 108. kurssLesson13 / kurssLesson13.sections[2].items[5].heading

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Saliktie darbības vārdi
- **CURRENT_CS:** Saliktie darbības vārdi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 109. kurssLesson13 / kurssLesson13.sections[2].items[6].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Neatdalāmie priedēkļi
- **CURRENT_CS:** Neatdalāmie priedēkļi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 110. kurssLesson13 / kurssLesson13.sections[2].items[7].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Vietniekvārds jeder
- **CURRENT_CS:** Vietniekvārds jeder
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 111. kurssLesson13 / kurssLesson13.sections[2].items[7].table[0][1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** Vīriešu
- **CURRENT_CS:** Vīriešu
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 112. kurssLesson13 / kurssLesson13.sections[2].items[7].table[0][3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** Vidējā
- **CURRENT_CS:** Vidējā
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 113. kurssLesson13 / kurssLesson13.sections[2].items[7].table[1][0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** Nominatīvs
- **CURRENT_CS:** Nominatīvs
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 114. kurssLesson13 / kurssLesson13.sections[2].items[7].table[2][0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** Akuzatīvs
- **CURRENT_CS:** Akuzatīvs
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 115. kurssLesson13 / kurssLesson13.sections[3].items[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** h vārdā halten ir dzirdama skaņa.
- **CURRENT_CS:** h vārdā halten ir dzirdama skaņa.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 116. kurssLesson13 / kurssLesson13.sections[3].items[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** h vārdā fahren rāda patskaņa garumu.
- **CURRENT_CS:** h vārdā fahren rāda patskaņa garumu.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 117. kurssLesson13 / kurssLesson13.sections[3].items[2]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** a vārdā halten izrunā īsi: halten.
- **CURRENT_CS:** a vārdā halten izrunā īsi: halten.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 118. kurssLesson13 / kurssLesson13.sections[3].items[3]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** a vārdā tragen izrunā gari: tragen.
- **CURRENT_CS:** a vārdā tragen izrunā gari: tragen.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 119. kurssLesson13 / kurssLesson13.sections[3].items[4]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** äu izrunā kā oi: du läufst, er läuft.
- **CURRENT_CS:** äu izrunā kā oi: du läufst, er läuft.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 120. kurssLesson13 / kurssLesson13.sections[3].items[5]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
- **CURRENT_CS:** pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 121. kurssLesson14 / kurssLesson14.sections[2].items[0].heading

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Modālie darbības vārdi
- **CURRENT_CS:** Modālie darbības vārdi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 122. kurssLesson14 / kurssLesson14.sections[2].items[1].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** 1. un 3. persona vienskaitlī
- **CURRENT_CS:** 1. un 3. persona vienskaitlī
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 123. kurssLesson14 / kurssLesson14.sections[2].items[5].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Celma patskaņu maiņa
- **CURRENT_CS:** Celma patskaņu maiņa
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 124. kurssLesson14 / kurssLesson14.sections[2].items[9].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Svarīgi
- **CURRENT_CS:** Svarīgi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 125. kurssLesson14 / kurssLesson14.sections[3].items[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ß izrunā kā latviešu s.
- **CURRENT_CS:** ß izrunā kā latviešu s.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 126. kurssLesson14 / kurssLesson14.sections[3].items[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
- **CURRENT_CS:** ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 127. kurssLesson14 / kurssLesson14.sections[3].items[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
- **CURRENT_CS:** Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 128. kurssLesson14 / kurssLesson14.sections[3].items[3]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ö vārdā mögen izrunā kā skaidru ö skaņu.
- **CURRENT_CS:** ö vārdā mögen izrunā kā skaidru ö skaņu.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 129. kurssLesson14 / kurssLesson14.sections[3].items[4]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
- **CURRENT_CS:** Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 130. kurssLesson14 / kurssLesson14.sections[3].items[5]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
- **CURRENT_CS:** Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 131. kurssLesson15 / kurssLesson15.sections[2].items[1].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Salīdzinājums
- **CURRENT_CS:** Salīdzinājums
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 132. kurssLesson15 / kurssLesson15.sections[2].items[1].examples[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** müssen — vajadzēt aiz nepieciešamības vai pārliecības
- **CURRENT_CS:** müssen — vajadzēt aiz nepieciešamības vai pārliecības
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 133. kurssLesson15 / kurssLesson15.sections[2].items[1].examples[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** sollen — vajadzēt pienākuma nozīmē
- **CURRENT_CS:** sollen — vajadzēt pienākuma nozīmē
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 134. kurssLesson15 / kurssLesson15.sections[2].items[5].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Mūsdienu rakstība
- **CURRENT_CS:** Mūsdienu rakstība
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 135. kurssLesson15 / kurssLesson15.sections[3].items[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** ä vārdos Äpfel un schälen izrunā kā šauro e.
- **CURRENT_CS:** ä vārdos Äpfel un schälen izrunā kā šauro e.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 136. kurssLesson15 / kurssLesson15.sections[3].items[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
- **CURRENT_CS:** Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 137. kurssLesson15 / kurssLesson15.sections[3].items[2]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
- **CURRENT_CS:** Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 138. kurssLesson15 / kurssLesson15.sections[3].items[3]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā gern e ir īss un plats.
- **CURRENT_CS:** Vārdā gern e ir īss un plats.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 139. kurssLesson15 / kurssLesson15.sections[3].items[4]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
- **CURRENT_CS:** Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 140. kurssLesson16 / kurssLesson16.sections[2].items[1].table[0][1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** Vīriešu
- **CURRENT_CS:** Vīriešu
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 141. kurssLesson16 / kurssLesson16.sections[2].items[1].table[0][3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** Vidējā
- **CURRENT_CS:** Vidējā
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 142. kurssLesson16 / kurssLesson16.sections[2].items[2].table[0][1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** Vīriešu
- **CURRENT_CS:** Vīriešu
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 143. kurssLesson16 / kurssLesson16.sections[2].items[2].table[0][3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `table`
- **LV reference:** Vidējā
- **CURRENT_CS:** Vidējā
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 144. kurssLesson16 / kurssLesson16.sections[2].items[3].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Datīva -e
- **CURRENT_CS:** Datīva -e
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 145. kurssLesson16 / kurssLesson16.sections[2].items[5].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Nenoteiktais artikuls datīvā
- **CURRENT_CS:** Nenoteiktais artikuls datīvā
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 146. kurssLesson16 / kurssLesson16.sections[2].items[6].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Daudzskaitļa datīvs
- **CURRENT_CS:** Daudzskaitļa datīvs
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 147. kurssLesson16 / kurssLesson16.sections[3].items[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos wem, dem, den, der — e ir garš un šaurs.
- **CURRENT_CS:** Vārdos wem, dem, den, der — Ve slovech wem, dem, den a der je e dlouhé a vyslovuje se přibližně jako české é.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 148. kurssLesson16 / kurssLesson16.sections[3].items[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā gehorchen h ir dzirdams: ge-hor-chen.
- **CURRENT_CS:** Vārdā gehorchen h ir dzirdams: ge-chen.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 149. kurssLesson17 / kurssLesson17.sections[2].items[1].examples[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** Mit wem spricht der Bruder? — Ar ko runā brālis?
- **CURRENT_CS:** Mit wem spricht der Bruder? — Ar ko runā brālis?
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 150. kurssLesson17 / kurssLesson17.sections[2].items[1].examples[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** Womit gräbt der Knabe die Grube? — Ar ko zēns rok bedri?
- **CURRENT_CS:** Womit gräbt der Knabe die Grube? — Ar ko zēns rok bedri?
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 151. kurssLesson17 / kurssLesson17.sections[2].items[5].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Atdalāmie priedēkļi
- **CURRENT_CS:** Atdalāmie priedēkļi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 152. kurssLesson17 / kurssLesson17.sections[2].items[6].examples[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** fegen — slaucīt ar slotu
- **CURRENT_CS:** fegen — slaucīt ar slotu
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 153. kurssLesson17 / kurssLesson17.sections[2].items[6].examples[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus
- **CURRENT_CS:** wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 154. kurssLesson17 / kurssLesson17.sections[3].items[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā werfen pirmais e ir plats: werfen.
- **CURRENT_CS:** Vārdā werfen pirmais e ir plats: werfen.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 155. kurssLesson17 / kurssLesson17.sections[3].items[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā wieder e ir plats: wieder.
- **CURRENT_CS:** Vārdā wieder e ir plats: wieder.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 156. kurssLesson17 / kurssLesson17.sections[3].items[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.
- **CURRENT_CS:** Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 157. kurssLesson17 / kurssLesson17.sections[3].items[3]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā der Spaten sp izrunā kā šp: der Spaten.
- **CURRENT_CS:** Vārdā der Spaten sp izrunā kā šp: der Spaten.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 158. kurssLesson17 / kurssLesson17.sections[4].cards[0].task2

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `task2`
- **LV reference:** Tagad atbildi daudzskaitlī.
- **CURRENT_CS:** Tagad atbildi daudzskaitlī.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 159. kurssLesson17 / kurssLesson17.sections[4].cards[1].task2

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `task2`
- **LV reference:** Tagad atbildi daudzskaitlī.
- **CURRENT_CS:** Tagad atbildi daudzskaitlī.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 160. kurssLesson17 / kurssLesson17.sections[4].cards[2].task2

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `task2`
- **LV reference:** Tagad atbildi daudzskaitlī.
- **CURRENT_CS:** Tagad atbildi daudzskaitlī.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 161. kurssLesson17 / kurssLesson17.sections[4].cards[3].task2

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `task2`
- **LV reference:** Tagad atbildi daudzskaitlī.
- **CURRENT_CS:** Tagad atbildi daudzskaitlī.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 162. kurssLesson17 / kurssLesson17.sections[4].cards[4].task2

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `task2`
- **LV reference:** Tagad atbildi daudzskaitlī.
- **CURRENT_CS:** Tagad atbildi daudzskaitlī.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 163. kurssLesson18 / kurssLesson18.sections[2].items[3].heading

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Darbības vārdi ar wohin?
- **CURRENT_CS:** Darbības vārdi ar wohin?
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 164. kurssLesson18 / kurssLesson18.sections[2].items[3].examples[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** kommen — nākt
- **CURRENT_CS:** kommen — nākt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 165. kurssLesson18 / kurssLesson18.sections[2].items[3].examples[5]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** springen — lēkt
- **CURRENT_CS:** springen — lēkt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 166. kurssLesson18 / kurssLesson18.sections[2].items[3].examples[6]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** kriechen — rāpot
- **CURRENT_CS:** kriechen — rāpot
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 167. kurssLesson18 / kurssLesson18.sections[2].items[3].examples[7]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** schleichen — līst
- **CURRENT_CS:** schleichen — līst
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 168. kurssLesson18 / kurssLesson18.sections[2].items[3].examples[8]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** hängen — kārt
- **CURRENT_CS:** hängen — kārt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 169. kurssLesson18 / kurssLesson18.sections[2].items[3].examples[9]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** sich setzen — apsēsties
- **CURRENT_CS:** sich setzen — apsēsties
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 170. kurssLesson18 / kurssLesson18.sections[2].items[3].examples[10]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** sich stellen — nostāties
- **CURRENT_CS:** sich stellen — nostāties
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 171. kurssLesson18 / kurssLesson18.sections[2].items[3].examples[12]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** reiten — jāt
- **CURRENT_CS:** reiten — jāt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 172. kurssLesson18 / kurssLesson18.sections[2].items[4].heading

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Darbības vārdi ar wo?
- **CURRENT_CS:** Darbības vārdi ar wo?
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 173. kurssLesson18 / kurssLesson18.sections[2].items[4].examples[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** sein — būt
- **CURRENT_CS:** sein — būt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 174. kurssLesson18 / kurssLesson18.sections[2].items[4].examples[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** arbeiten — strādāt
- **CURRENT_CS:** arbeiten — strādāt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 175. kurssLesson18 / kurssLesson18.sections[2].items[4].examples[3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** liegen — gulēt / atrasties guļus
- **CURRENT_CS:** liegen — gulēt / atrasties guļus
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 176. kurssLesson18 / kurssLesson18.sections[2].items[4].examples[4]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** sitzen — sēdēt
- **CURRENT_CS:** sitzen — sēdēt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 177. kurssLesson18 / kurssLesson18.sections[2].items[4].examples[5]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** hängen — karāties
- **CURRENT_CS:** hängen — karāties
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 178. kurssLesson18 / kurssLesson18.sections[2].items[4].examples[7]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** suchen — meklēt
- **CURRENT_CS:** suchen — meklēt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 179. kurssLesson18 / kurssLesson18.sections[2].items[4].examples[8]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** spielen — spēlēt
- **CURRENT_CS:** spielen — spēlēt
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 180. kurssLesson18 / kurssLesson18.sections[2].items[5].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Vielu vārdi
- **CURRENT_CS:** Vielu vārdi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 181. kurssLesson18 / kurssLesson18.sections[2].items[5].examples[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** In dem Eimer ist Wasser. — Spainī ir ūdens.
- **CURRENT_CS:** In dem Eimer ist Wasser. — Spainī ir ūdens.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 182. kurssLesson18 / kurssLesson18.sections[2].items[6].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Konkrēta viela
- **CURRENT_CS:** Konkrēta viela
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 183. kurssLesson18 / kurssLesson18.sections[2].items[7].examples[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** in dem Eimer — spainī
- **CURRENT_CS:** in dem Eimer — spainī
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 184. kurssLesson18 / kurssLesson18.sections[2].items[7].examples[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** in dem Zimmer — istabā
- **CURRENT_CS:** in dem Zimmer — istabā
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 185. kurssLesson18 / kurssLesson18.sections[2].items[8].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Mūsdienu formas
- **CURRENT_CS:** Mūsdienu formas
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 186. kurssLesson18 / kurssLesson18.sections[3].items[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā wohin h ir dzirdams: wo-hin.
- **CURRENT_CS:** Vārdā wohin h ir dzirdams: wo-hin.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 187. kurssLesson18 / kurssLesson18.sections[3].items[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā wo o ir garš: wo.
- **CURRENT_CS:** Vārdā wo o ir garš: wo.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 188. kurssLesson19 / kurssLesson19.sections[2].items[3].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Prievārdi
- **CURRENT_CS:** Prievārdi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 189. kurssLesson19 / kurssLesson19.sections[2].items[3].examples[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** vor — priekšā
- **CURRENT_CS:** vor — priekšā
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 190. kurssLesson19 / kurssLesson19.sections[2].items[3].examples[3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** über — virs / pāri
- **CURRENT_CS:** über — virs / pāri
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 191. kurssLesson19 / kurssLesson19.sections[3].items[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā vor o izrunā gari.
- **CURRENT_CS:** Vārdā vor o izrunā gari.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 192. kurssLesson19 / kurssLesson19.sections[3].items[1]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā hinter h ir dzirdams, un e ir plats.
- **CURRENT_CS:** Vārdā hinter h ir dzirdams, un e ir plats.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 193. kurssLesson19 / kurssLesson19.sections[3].items[2]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā der Stuhl: st izrunā kā št; h ir garuma zīme un netiek izrunāts.
- **CURRENT_CS:** Vārdā der Stuhl: st izrunā kā št; h ir garuma zīme un netiek izrunāts.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 194. kurssLesson19 / kurssLesson19.sections[3].items[3]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā der Strauch: st izrunā kā št.
- **CURRENT_CS:** Vārdā der Strauch: st izrunā kā št.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 195. kurssLesson19 / kurssLesson19.sections[3].items[4]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā wachsen: ch izrunā kā k.
- **CURRENT_CS:** Vārdā wachsen: ch izrunā kā k.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 196. kurssLesson20 / kurssLesson20.sections[2].items[0].examples[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** an dem Tage / am Tage — dienā
- **CURRENT_CS:** an dem Tage / am Tage — dienā
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 197. kurssLesson20 / kurssLesson20.sections[2].items[0].examples[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** in der Nacht — naktī
- **CURRENT_CS:** in der Nacht — naktī
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 198. kurssLesson20 / kurssLesson20.sections[2].items[0].examples[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** in dem Sommer / im Sommer — vasarā
- **CURRENT_CS:** in dem Sommer / im Sommer — vasarā
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 199. kurssLesson20 / kurssLesson20.sections[2].items[0].examples[3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** in dem Januar / im Januar — janvārī
- **CURRENT_CS:** in dem Januar / im Januar — janvārī
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 200. kurssLesson20 / kurssLesson20.sections[2].items[0].examples[4]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** vor drei Tagen — pirms trīs dienām
- **CURRENT_CS:** vor drei Tagen — pirms trīs dienām
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 201. kurssLesson20 / kurssLesson20.sections[2].items[1].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Prievārds + artikuls
- **CURRENT_CS:** Prievārds + artikuls
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 202. kurssLesson20 / kurssLesson20.sections[2].items[3].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Saliktie lietvārdi
- **CURRENT_CS:** Saliktie lietvārdi
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 203. kurssLesson20 / kurssLesson20.sections[2].items[4].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Salikto lietvārdu veidošana
- **CURRENT_CS:** Salikto lietvārdu veidošana
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 204. kurssLesson20 / kurssLesson20.sections[3].items[0]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št.
- **CURRENT_CS:** Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 205. kurssLesson20 / kurssLesson20.sections[3].items[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos der Ofen, der Boden: o ir garš.
- **CURRENT_CS:** Vārdos der Ofen, der Boden: o ir garš.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 206. kurssLesson20 / kurssLesson20.sections[3].items[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** sch izrunā kā š: der Schornstein, der Mensch.
- **CURRENT_CS:** sch izrunā kā š: der Schornstein, der Mensch.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 207. kurssLesson20 / kurssLesson20.sections[3].items[3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā.
- **CURRENT_CS:** Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 208. kurssLesson20 / kurssLesson20.sections[3].items[4]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā.
- **CURRENT_CS:** Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 209. kurssLesson20 / kurssLesson20.sections[3].items[5]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut.
- **CURRENT_CS:** Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-hláska [ç], která v češtině nemá přesný ekvivalent.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 210. kurssLesson20 / kurssLesson20.sections[3].items[6]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā das Vorhaus: v izrunā kā f.
- **CURRENT_CS:** Vārdā das Vorhaus: v izrunā kā f.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 211. kurssLesson21 / kurssLesson21.sections[2].items[0].examples[3]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** mit dem Mann — ar vīru
- **CURRENT_CS:** mit dem Mann — ar vīru
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 212. kurssLesson21 / kurssLesson21.sections[2].items[1].examples[2]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `examples`
- **LV reference:** Mūsdienu forma: vom Feld, vom Berg.
- **CURRENT_CS:** Mūsdienu forma: vom Feld, vom Berg.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 213. kurssLesson21 / kurssLesson21.sections[2].items[4].heading

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `heading`
- **LV reference:** Materiāls
- **CURRENT_CS:** Materiāls
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 214. kurssLesson21 / kurssLesson21.sections[3].items[0]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā die Axt: x izrunā kā ks.
- **CURRENT_CS:** Vārdā die Axt: x izrunā kā ks.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 215. kurssLesson21 / kurssLesson21.sections[3].items[1]

- **Severity:** MEDIUM
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai.
- **CURRENT_CS:** Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 216. kurssLesson21 / kurssLesson21.sections[3].items[2]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā die Scheune: eu izrunā kā oi.
- **CURRENT_CS:** Vārdā die Scheune: eu izrunā kā oi.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 217. kurssLesson21 / kurssLesson21.sections[3].items[3]

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `items`
- **LV reference:** Vārdā die Brücke: ck izrunā kā dubultu k.
- **CURRENT_CS:** Vārdā die Brücke: ck izrunā kā dubultu k.
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

### 218. kurssArticlesLesson / kurssArticlesLesson

- **Severity:** HIGH
- **Status:** PENDING_OWNER_REVIEW
- **Field:** `kurssArticlesLesson`
- **LV reference:** <h3>Artikuli</h3>    <div class="artikuli-info artikuli-intro-info">     <span class="artikuli-info-icon">i</span>     <div>Vācu artikuls ne vienmēr sakrīt ar latviešu dzimti. Tāpēc lietvārdus vislabāk mācīties kopā ar artikulu.</div>   </div>    <section class="artikuli-block">     <h4 class="artikuli-header"><span>•</span>Artikulu piemēri</h4>     <div class="artikuli-grid">       <div class="kurss-example">der Tisch — galds</div>       <div class="kurss-example">die Tür — durvis</div>       <
- **CURRENT_CS:** <h3>Články</h3>    <div class="artikuli-info artikuli-intro-info">     <span class="artikuli-info-icon">i</span>     <div>Německý článek se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem.</div>   </div>    <section class="artikuli-block">     <h4 class="artikuli-header"><span>•</span>Příklady článků</h4>     <div class="artikuli-grid">       <div class="kurss-example">Der Tisch - stol</div>       <div class="kurss-example">Die Tür - dveře</div>       <div class="kurss-example">Das Messer - nůž</div>       <div class="kurss-example">Das Mädchen - dívka</div>     </div>   </section>    <section class="artikuli-block">     <h4 class="artikuli-header"><span>♂</span>Často DER</h4>     <p class="artikuli-explain">DER jsou často mužské osoby, dny, měsíce, 
- **PROPOSED_CS:** (přeložit do češtiny podle LV reference)
- **Pamatojums:** LV atliegums / jauktā valoda v české vrstvě
- **Avots:** deep-scan

## Strukturālā pārbaude

| Gate | Rezultāts |
|---|---|
| structuralParity | PASS |
| deReadOnlyParity | PASS |
| csLinguisticQuality | FAIL |
| pedagogicalParity | PASS |
| practiceTraining | PASS |
| translateSystem | PASS |
| uiI18n | FAIL |
| javascript | PASS |
| mojibakeUnicode | PASS |
| lvLeftovers | 47 / 67 |
| enLeftovers | 0 / 0 |
| otherLeftovers | 0 / 0 |
| primaryWwwSync | PASS |
| productionChanges | 0 |

**Verdict:** CS–DE KURS — OWNER REVIEW / REPAIRS REQUIRED
