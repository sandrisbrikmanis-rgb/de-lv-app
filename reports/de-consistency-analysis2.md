# DE consistency analysis 2

Šis fails klasificē `reports/de-consistency-audit.json` un pārrēķina rakstzīmes. Tas neizvēlas pareizo variantu.

## 1. OTHER 1890

Prioritāte: CASE_PLUS_TRAILING_SPACE, CASE_ONLY_OTHER, GERMAN_SENTENCE_DIFFERENT, LATIN_DIACRITIC_DIFF, NUMERIC_OR_SYMBOL, UNCLASSIFIED.

- CASE_PLUS_TRAILING_SPACE: pēc noslēguma tukšumu noņemšanas atlikušajām virknēm atšķiras tikai pirmā rakstzīme, un tikai ar reģistru, un vismaz vienā pusē noslēguma tukšums bija.
- CASE_ONLY_OTHER: pilnas virknes pēc `toLowerCase()` sakrīt, bet tā nav tikai pirmā burta atšķirība.
- GERMAN_SENTENCE_DIFFERENT: abās pusēs ir vismaz trīs vārdi ar vismaz trim burtiem, un visi burti ir `A–Z a–z äöüß`.
- LATIN_DIACRITIC_DIFF: ir latīņu burts ārpus `A–Z a–z äöüß`, un pēc NFD diakritiku noņemšanas un `toLowerCase()` virknes sakrīt.
- NUMERIC_OR_SYMBOL: pēc ciparu, tukšumu, pieturzīmju un simbolu noņemšanas atlikušie burti sakrīt.
- UNCLASSIFIED: pārējais.

| kategorija | skaits |
| --- | ---: |
| CASE_PLUS_TRAILING_SPACE | 794 |
| CASE_ONLY_OTHER | 150 |
| GERMAN_SENTENCE_DIFFERENT | 184 |
| LATIN_DIACRITIC_DIFF | 4 |
| NUMERIC_OR_SYMBOL | 0 |
| UNCLASSIFIED | 758 |
| SUMMA | 1890 |

### CASE_PLUS_TRAILING_SPACE

- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[13]` koks=`data` LV=`"der Mann "` LANG=`"Der Mann"`
- cs `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[1]` koks=`data` LV=`"die Tür "` LANG=`"Die Tür"`
- da `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch"`
- en `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"Sie "` LANG=`"sie"`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch"`
- gr `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[12]` koks=`data` LV=`"sie "` LANG=`"Sie"`
- hr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[13]` koks=`data` LV=`"der Mann "` LANG=`"Der Mann"`
- hu `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch"`
- it `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[16]` koks=`data` LV=`"sie "` LANG=`"Sie"`
- lb `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[16]` koks=`data` LV=`"sie "` LANG=`"Sie"`

### CASE_ONLY_OTHER

- da `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Dich</span>. "`
- fi `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Dich</span>. "`
- fr `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">ihn</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Ihn</span>. "`
- gr `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[28]` koks=`data` LV=`"Wir mögen <span class=\"case-red\">euch</span>. "` LANG=`"Wir mögen <span class=\"case-red\">Euch</span>. "`
- hr `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[30]` koks=`data` LV=`"Ich gebe <span class=\"case-green\">ihm</span> ein Buch. "` LANG=`"Ich gebe <span class=\"case-green\">Ihm</span> ein Buch. "`
- hu `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[29]` koks=`data` LV=`"Ich helfe <span class=\"case-green\">dir</span>. "` LANG=`"Ich helfe <span class=\"case-green\">Dir</span>. "`
- is `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Dich</span>. "`
- it `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Dich</span>. "`
- lb `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[26]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">dich</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Dich</span>. "`
- mk `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[30]` koks=`data` LV=`"Ich gebe <span class=\"case-green\">ihm</span> ein Buch. "` LANG=`"Ich gebe <span class=\"case-green\">Ihm</span> ein Buch. "`

### GERMAN_SENTENCE_DIFFERENT

- cs `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">ihn</span>. "` LANG=`"Ich sehe <span class=\"case-red\">dich</span>. "`
- da `a1` `a1-besuchen` `study.examples[0].de` koks=`data` LV=`"Ich besuche das Museum."` LANG=`"Ich besuche meine Großeltern."`
- es `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`" die Polizei, die Bäckerei"` LANG=`" die Autos, die Häuser"`
- et `courseLessons` `lesson8` `kurssLesson8.sections[3].items[9]` koks=`data` LV=`"Präsens: ich setze mich, du setzt dich, er/sie/es setzt sich, wir setzen uns, ihr setzt euch, sie setzen sich."` LANG=`"Olevik: ich setze mich, du setzt dich, er/sie/es setzt sich, wir setzen uns, ihr setzt euch, sie setzen sich."`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`" die Polizei, die Bäckerei"` LANG=`" die Autos, die Häuser"`
- hr `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">ihn</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Ihn</span>."`
- hu `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[29]` koks=`data` LV=`" die Harley-Davidson, die Yamaha"` LANG=`" Harley-Davidson, Yamaha"`
- it `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[29]` koks=`data` LV=`"Ich helfe <span class=\"case-green\">dir</span>. "` LANG=`"Ich helfe <span class=\"case-green\">Richt</span>. "`
- lb `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[29]` koks=`data` LV=`"Ich helfe <span class=\"case-green\">dir</span>. "` LANG=`"Ich helfe <span class=\"case-green\">Richt</span>. "`
- mk `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Ich sehe <span class=\"case-red\">ihn</span>. "` LANG=`"Ich sehe <span class=\"case-red\">Ihn</span>."`

### LATIN_DIACRITIC_DIFF

- es `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[18]` koks=`data` LV=`"Vogel (fogel) "` LANG=`"Vogel (fōgel) "`
- pt `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[59]` koks=`data` LV=`"Moos (mōs) "` LANG=`"Moos (mos) "`

### NUMERIC_OR_SYMBOL

Piemēru nav.

### UNCLASSIFIED

- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[54]` koks=`data` LV=`"das Häuschen "` LANG=`"Das Hoixen"`
- cs `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[11]` koks=`data` LV=`"noch (noh) "` LANG=`"Noch (noch) "`
- da `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[16]` koks=`data` LV=`"der August "` LANG=`"Passer til august"`
- en `a1` `a1-liter` `study.id` koks=`data` LV=`"a1-liter"` LANG=`"a1-litre"`
- es `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[24]` koks=`data` LV=`" die Mannschaft"` LANG=`" die Polizei, die Bäckerei"`
- et `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- fi `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- fr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[15]` koks=`data` LV=`"der Montag "` LANG=`"Convient du lundi au lundi"`
- gr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` koks=`data` LV=`"das Auto "` LANG=`"Das Car "`
- hr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[1]` koks=`data` LV=`"die Tür "` LANG=`"Die Tür-vrata"`
- hu `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[14]` koks=`data` LV=`"uns "` LANG=`"Mi "`
- is `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- it `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"der Sommer "` LANG=`"Der zomer "`
- lb `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"der Sommer "` LANG=`"Der zomer "`
- mk `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[54]` koks=`data` LV=`"das Häuschen "` LANG=`"Das Hoixen"`
- nb `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- nl `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"der Sommer "` LANG=`"Der zomer "`
- nn `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- pt `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[16]` koks=`data` LV=`"der August "` LANG=`"Der agosto"`
- ro `courseLessons` `kurssPronunciationLesson` `legacyHtml/kurss-example[17]` koks=`data` LV=`"Garten (garten) "` LANG=`"Garten (gradina)"`
- sl `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[2]` koks=`data` LV=`"er "` LANG=`"Hm"`
- sq `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[30]` koks=`data` LV=`"Zink (cink) "` LANG=`"Zink (zink) "`
- sr `a1` `a1-sitzen` `study.comparison[3].word` koks=`data` LV=`"setzen"` LANG=`"sich setzen"`
- sv `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[27]` koks=`data` LV=`"Rose (rōze) "` LANG=`"Rose (rooze) "`
- bg `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` koks=`data` LV=`"das Auto "` LANG=`"Das auto"`
- cs `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[12]` koks=`data` LV=`"Nacht (naht) "` LANG=`"Nacht (nacht) "`
- da `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[11]` koks=`data` LV=`"noch (noh) "` LANG=`"Noch (nej)"`
- en `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[30]` koks=`data` LV=`"Zink (cink) "` LANG=`"Zink (zinc)"`
- es `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[25]` koks=`data` LV=`" die Nation"` LANG=`" die Frau, die Mutter"`
- et `courseLessons` `kurssConsonantsLesson` `legacyHtml/kurss-example[29]` koks=`data` LV=`"Zeit (cait) "` LANG=`"Zeit (tsait) "`

## 2. Valoda × datasets pa veidiem

TEXT ir sadalīts sākotnējās kategorijās, un OTHER ir aizstāts ar sešām apakškategorijām. UNICODE_ONLY, MISSING un EXTRA ir audita veidi. Summa pa visiem TEXT stabiem ir 5428.

### a1

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 46 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 8 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 46 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 60 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| cs | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 16 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 36 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 36 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 36 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 44 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 26 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 36 |

### a2

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### b1

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### b2

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |

### c1

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 32 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |

### c2

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### sentences

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### verbs

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### courseLessons

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 16 | 0 | 0 | 100 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 10 | 0 | 0 |
| uk | 0 | 0 | 0 | 118 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 6 | 0 | 0 | 0 | 2 | 0 | 0 | 34 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 12 | 228 | 0 | 0 |
| ro | 12 | 0 | 6 | 0 | 72 | 0 | 0 | 0 | 0 | 4 | 28 | 0 | 0 |
| bg | 10 | 0 | 20 | 32 | 38 | 0 | 0 | 0 | 0 | 18 | 8 | 0 | 0 |
| gr | 144 | 0 | 0 | 62 | 4 | 4 | 0 | 0 | 0 | 28 | 0 | 0 | 0 |
| tr | 130 | 0 | 8 | 0 | 36 | 4 | 2 | 0 | 0 | 0 | 6 | 0 | 0 |
| sq | 130 | 0 | 10 | 0 | 36 | 4 | 2 | 0 | 0 | 2 | 6 | 0 | 0 |
| mk | 74 | 0 | 18 | 54 | 46 | 2 | 4 | 0 | 0 | 16 | 0 | 0 | 0 |
| sl | 158 | 0 | 4 | 0 | 6 | 10 | 2 | 0 | 0 | 2 | 2 | 0 | 0 |
| bs | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 |
| sr | 66 | 0 | 24 | 50 | 46 | 2 | 4 | 0 | 0 | 26 | 0 | 0 | 0 |
| hr | 66 | 0 | 24 | 50 | 46 | 2 | 4 | 0 | 0 | 26 | 0 | 0 | 0 |
| sk | 164 | 0 | 0 | 0 | 4 | 10 | 2 | 0 | 0 | 0 | 6 | 0 | 0 |
| cs | 120 | 0 | 12 | 0 | 78 | 0 | 10 | 0 | 0 | 8 | 58 | 0 | 2 |
| fi | 162 | 0 | 0 | 0 | 0 | 12 | 0 | 0 | 0 | 34 | 0 | 0 | 0 |
| sv | 162 | 0 | 0 | 0 | 0 | 12 | 0 | 0 | 0 | 34 | 0 | 0 | 0 |
| nb | 162 | 0 | 0 | 0 | 0 | 12 | 0 | 0 | 0 | 34 | 0 | 0 | 0 |
| nn | 162 | 0 | 0 | 0 | 0 | 12 | 0 | 0 | 0 | 34 | 0 | 0 | 0 |
| da | 48 | 0 | 118 | 0 | 142 | 12 | 66 | 0 | 0 | 172 | 92 | 0 | 0 |
| nl | 160 | 0 | 0 | 0 | 6 | 10 | 2 | 0 | 0 | 2 | 2 | 0 | 0 |
| lb | 156 | 0 | 8 | 0 | 6 | 10 | 2 | 0 | 0 | 4 | 2 | 0 | 0 |
| fr | 0 | 0 | 88 | 0 | 62 | 2 | 14 | 0 | 0 | 92 | 50 | 204 | 0 |
| it | 156 | 0 | 6 | 0 | 6 | 10 | 2 | 0 | 0 | 4 | 2 | 0 | 0 |
| es | 0 | 0 | 88 | 0 | 0 | 0 | 32 | 2 | 0 | 82 | 76 | 88 | 0 |
| pt | 48 | 0 | 52 | 0 | 80 | 4 | 16 | 2 | 0 | 42 | 40 | 0 | 0 |
| hu | 76 | 0 | 28 | 0 | 70 | 4 | 10 | 0 | 0 | 10 | 56 | 0 | 0 |
| is | 162 | 0 | 0 | 0 | 0 | 12 | 0 | 0 | 0 | 34 | 0 | 0 | 0 |

### courseTrainingCards

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### nounArticles

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### dialogueIdMap

| valoda | CASE_ONLY | PUNCT_OR_SPACE_ONLY | TRANSLATED_GERMAN | FOREIGN_SCRIPT | CASE_PLUS_TRAILING_SPACE | CASE_ONLY_OTHER | GERMAN_SENTENCE_DIFFERENT | LATIN_DIACRITIC_DIFF | NUMERIC_OR_SYMBOL | UNCLASSIFIED | UNICODE_ONLY | MISSING | EXTRA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ru | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| lt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| et | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| en | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fi | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sv | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nn | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| da | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| lb | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fr | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| es | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pt | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## 3. CASE_ONLY 2548

Forma ir noteikta no LV vērtības, nevis no tā, kurš variants ir pareizs. SENTENCE_START: ir `.!?` vai vismaz pieci vārdi. LIST_OR_DICTIONARY: lauks ir `kurss-example` vai LV virkne sākas ar `der/die/das/ein/eine/ihn/ihm/ihr/wir/du/ich/sie/es`. OTHER_SHAPE: pārējās CASE_ONLY rindas, piemēram id.

| forma | skaits |
| --- | ---: |
| LIST_OR_DICTIONARY | 2502 |
| SENTENCE_START | 0 |
| OTHER_SHAPE | 46 |

### a1

| valoda | CASE_ONLY |
| --- | ---: |
| cs | 4 |

### courseLessons

| valoda | CASE_ONLY |
| --- | ---: |
| ru | 16 |
| ro | 12 |
| bg | 10 |
| gr | 144 |
| tr | 130 |
| sq | 130 |
| mk | 74 |
| sl | 158 |
| sr | 66 |
| hr | 66 |
| sk | 164 |
| cs | 120 |
| fi | 162 |
| sv | 162 |
| nb | 162 |
| nn | 162 |
| da | 48 |
| nl | 160 |
| lb | 156 |
| it | 156 |
| pt | 48 |
| hu | 76 |
| is | 162 |

### 20 piemēri

- bg `courseLessons` `kurssPronounsLesson` `legacyHtml/kurss-example[11]` koks=`data` LV=`"ihn "` LANG=`"Ihn "` forma=`LIST_OR_DICTIONARY`
- cs `a1` `a1-kennen-study` `id` koks=`data` LV=`"a1-kennen"` LANG=`"A1-kennen"` forma=`OTHER_SHAPE`
- da `courseLessons` `kurssLesson2` `legacyHtml/kurss-example[30]` koks=`data` LV=`"wir arbeiten"` LANG=`"Wir arbeiten"` forma=`LIST_OR_DICTIONARY`
- fi `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- gr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- hr `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- hu `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[1]` koks=`data` LV=`"die Tür "` LANG=`"Die Tür "` forma=`LIST_OR_DICTIONARY`
- is `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- it `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- lb `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- mk `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- nb `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- nl `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- nn `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- pt `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[15]` koks=`data` LV=`"der Montag "` LANG=`"Der Montag "` forma=`LIST_OR_DICTIONARY`
- ro `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[39]` koks=`data` LV=`"die Nation "` LANG=`"Die Nation "` forma=`LIST_OR_DICTIONARY`
- ru `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[34]` koks=`data` LV=`"die Wohnung "` LANG=`"Die Wohnung "` forma=`LIST_OR_DICTIONARY`
- sk `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- sl `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`
- sq `courseLessons` `kurssArticlesLesson` `legacyHtml/kurss-example[0]` koks=`data` LV=`"der Tisch "` LANG=`"Der Tisch "` forma=`LIST_OR_DICTIONARY`

## 4. fr 204 un es 88 MISSING courseLessons

Skaiti ir `data` + `www`. `langValue` visās šajās rindās ir `null`. LV vērtība ir izvilktais DE segments. Tās nav tukšas virknes esošā laukā: valodas HTML ir īsāks `kurss-example` saraksts, tāpēc augstākie indeksi LV pusē neeksistē mērķa failā.

### fr

Rindas: 204. Koki: data, www. LV tukšas vērtības: 0. LV ne-tukšas: 204.

- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[64]` LV_NONEMPTY=true LV=`"das Mädchen "`
- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` LV_NONEMPTY=true LV=`"das Auto "`
- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[66]` LV_NONEMPTY=true LV=`"der Käse "`
- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[67]` LV_NONEMPTY=true LV=`"die Gabel "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"du kommst "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"er singt "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"er kommt "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"sie kommt "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"sie kommen "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[27]` LV_NONEMPTY=true LV=`"du arbeitest"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[28]` LV_NONEMPTY=true LV=`"er arbeitet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[29]` LV_NONEMPTY=true LV=`"sie arbeitet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[30]` LV_NONEMPTY=true LV=`"wir arbeiten"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[31]` LV_NONEMPTY=true LV=`"ihr arbeitet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[32]` LV_NONEMPTY=true LV=`"sie arbeiten"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[33]` LV_NONEMPTY=true LV=`"ich rechne"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[34]` LV_NONEMPTY=true LV=`"du rechnest"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"er rechnet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"sie rechnet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"wir rechnen"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"ihr rechnet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"sie rechnen"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[40]` LV_NONEMPTY=true LV=`"ich tue"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[41]` LV_NONEMPTY=true LV=`"du tust"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[42]` LV_NONEMPTY=true LV=`"er tut"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[43]` LV_NONEMPTY=true LV=`"sie tut"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[44]` LV_NONEMPTY=true LV=`"wir tun"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[45]` LV_NONEMPTY=true LV=`"ihr tut"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[46]` LV_NONEMPTY=true LV=`"sie tun"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[47]` LV_NONEMPTY=true LV=`"Was tust du? "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[48]` LV_NONEMPTY=true LV=`"Was tut er? "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[49]` LV_NONEMPTY=true LV=`"Was tut sie? "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[50]` LV_NONEMPTY=true LV=`"Was tun sie? "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[51]` LV_NONEMPTY=true LV=`"Er kommt nicht. "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[52]` LV_NONEMPTY=true LV=`"Sie singen nicht. "`
- `data` `kurssLesson4` `legacyHtml/kurss-example[54]` LV_NONEMPTY=true LV=`" Marie geht hinaus"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[55]` LV_NONEMPTY=true LV=`"der Federhalter ist klein"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[56]` LV_NONEMPTY=true LV=`"die Feder ist klein"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[57]` LV_NONEMPTY=true LV=`"das Messer ist klein"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[58]` LV_NONEMPTY=true LV=`"die Messer sind klein"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[59]` LV_NONEMPTY=true LV=`"der Federhalter ist nicht weiß"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[60]` LV_NONEMPTY=true LV=`"das Messer ist nicht scharf"`
- `data` `kurssLesson5` `legacyHtml/kurss-example[53]` LV_NONEMPTY=true LV=`"Das Mädchen geht dann hinaus und arbeitet."`
- `data` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[34]` LV_NONEMPTY=true LV=`"Sie kommen, sie fragen, sie antworten, sie arbeiten, sie spielen, sie singen, sie gehen. "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[30]` LV_NONEMPTY=true LV=`"ihr singt "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[31]` LV_NONEMPTY=true LV=`"sie singen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[32]` LV_NONEMPTY=true LV=`"spielen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[33]` LV_NONEMPTY=true LV=`"arbeiten "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[34]` LV_NONEMPTY=true LV=`"fragen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"antworten "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"rechnen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"zeichnen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"tun "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"ich spiele "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[40]` LV_NONEMPTY=true LV=`"du spielst "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[41]` LV_NONEMPTY=true LV=`"er spielt "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[42]` LV_NONEMPTY=true LV=`"sie spielt "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[43]` LV_NONEMPTY=true LV=`"wir spielen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[44]` LV_NONEMPTY=true LV=`"ihr spielt "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[45]` LV_NONEMPTY=true LV=`"sie spielen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[46]` LV_NONEMPTY=true LV=`"ich arbeite "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[47]` LV_NONEMPTY=true LV=`"du arbeitest "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[48]` LV_NONEMPTY=true LV=`"er arbeitet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[49]` LV_NONEMPTY=true LV=`"sie arbeitet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[50]` LV_NONEMPTY=true LV=`"wir arbeiten "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[51]` LV_NONEMPTY=true LV=`"ihr arbeitet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[52]` LV_NONEMPTY=true LV=`"sie arbeiten "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[53]` LV_NONEMPTY=true LV=`"ich frage "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[54]` LV_NONEMPTY=true LV=`"du fragst "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[55]` LV_NONEMPTY=true LV=`"er fragt "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[56]` LV_NONEMPTY=true LV=`"sie fragt "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[57]` LV_NONEMPTY=true LV=`"wir fragen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[58]` LV_NONEMPTY=true LV=`"ihr fragt "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[59]` LV_NONEMPTY=true LV=`"sie fragen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[60]` LV_NONEMPTY=true LV=`"ich antworte "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[61]` LV_NONEMPTY=true LV=`"du antwortest "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[62]` LV_NONEMPTY=true LV=`"er antwortet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[63]` LV_NONEMPTY=true LV=`"sie antwortet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[64]` LV_NONEMPTY=true LV=`"wir antworten "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[65]` LV_NONEMPTY=true LV=`"ihr antwortet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[66]` LV_NONEMPTY=true LV=`"sie antworten "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[67]` LV_NONEMPTY=true LV=`"ich rechne "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[68]` LV_NONEMPTY=true LV=`"du rechnest "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[69]` LV_NONEMPTY=true LV=`"er rechnet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[70]` LV_NONEMPTY=true LV=`"sie rechnet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[71]` LV_NONEMPTY=true LV=`"wir rechnen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[72]` LV_NONEMPTY=true LV=`"ihr rechnet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[73]` LV_NONEMPTY=true LV=`"sie rechnen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[74]` LV_NONEMPTY=true LV=`"ich zeichne "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[75]` LV_NONEMPTY=true LV=`"du zeichnest "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[76]` LV_NONEMPTY=true LV=`"er zeichnet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[77]` LV_NONEMPTY=true LV=`"sie zeichnet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[78]` LV_NONEMPTY=true LV=`"wir zeichnen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[79]` LV_NONEMPTY=true LV=`"ihr zeichnet "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[80]` LV_NONEMPTY=true LV=`"sie zeichnen "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[81]` LV_NONEMPTY=true LV=`"ich tue "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[82]` LV_NONEMPTY=true LV=`"du tust "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[83]` LV_NONEMPTY=true LV=`"er tut "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[84]` LV_NONEMPTY=true LV=`"sie tut "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[85]` LV_NONEMPTY=true LV=`"wir tun "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[86]` LV_NONEMPTY=true LV=`"ihr tut "`
- `data` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[87]` LV_NONEMPTY=true LV=`"sie tun "`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[64]` LV_NONEMPTY=true LV=`"das Mädchen "`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` LV_NONEMPTY=true LV=`"das Auto "`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[66]` LV_NONEMPTY=true LV=`"der Käse "`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[67]` LV_NONEMPTY=true LV=`"die Gabel "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"du kommst "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"er singt "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"er kommt "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"sie kommt "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"sie kommen "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[27]` LV_NONEMPTY=true LV=`"du arbeitest"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[28]` LV_NONEMPTY=true LV=`"er arbeitet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[29]` LV_NONEMPTY=true LV=`"sie arbeitet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[30]` LV_NONEMPTY=true LV=`"wir arbeiten"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[31]` LV_NONEMPTY=true LV=`"ihr arbeitet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[32]` LV_NONEMPTY=true LV=`"sie arbeiten"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[33]` LV_NONEMPTY=true LV=`"ich rechne"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[34]` LV_NONEMPTY=true LV=`"du rechnest"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"er rechnet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"sie rechnet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"wir rechnen"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"ihr rechnet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"sie rechnen"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[40]` LV_NONEMPTY=true LV=`"ich tue"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[41]` LV_NONEMPTY=true LV=`"du tust"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[42]` LV_NONEMPTY=true LV=`"er tut"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[43]` LV_NONEMPTY=true LV=`"sie tut"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[44]` LV_NONEMPTY=true LV=`"wir tun"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[45]` LV_NONEMPTY=true LV=`"ihr tut"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[46]` LV_NONEMPTY=true LV=`"sie tun"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[47]` LV_NONEMPTY=true LV=`"Was tust du? "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[48]` LV_NONEMPTY=true LV=`"Was tut er? "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[49]` LV_NONEMPTY=true LV=`"Was tut sie? "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[50]` LV_NONEMPTY=true LV=`"Was tun sie? "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[51]` LV_NONEMPTY=true LV=`"Er kommt nicht. "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[52]` LV_NONEMPTY=true LV=`"Sie singen nicht. "`
- `www` `kurssLesson4` `legacyHtml/kurss-example[54]` LV_NONEMPTY=true LV=`" Marie geht hinaus"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[55]` LV_NONEMPTY=true LV=`"der Federhalter ist klein"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[56]` LV_NONEMPTY=true LV=`"die Feder ist klein"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[57]` LV_NONEMPTY=true LV=`"das Messer ist klein"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[58]` LV_NONEMPTY=true LV=`"die Messer sind klein"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[59]` LV_NONEMPTY=true LV=`"der Federhalter ist nicht weiß"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[60]` LV_NONEMPTY=true LV=`"das Messer ist nicht scharf"`
- `www` `kurssLesson5` `legacyHtml/kurss-example[53]` LV_NONEMPTY=true LV=`"Das Mädchen geht dann hinaus und arbeitet."`
- `www` `kurssSentenceStructureLesson` `legacyHtml/kurss-example[34]` LV_NONEMPTY=true LV=`"Sie kommen, sie fragen, sie antworten, sie arbeiten, sie spielen, sie singen, sie gehen. "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[30]` LV_NONEMPTY=true LV=`"ihr singt "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[31]` LV_NONEMPTY=true LV=`"sie singen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[32]` LV_NONEMPTY=true LV=`"spielen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[33]` LV_NONEMPTY=true LV=`"arbeiten "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[34]` LV_NONEMPTY=true LV=`"fragen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"antworten "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"rechnen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"zeichnen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"tun "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"ich spiele "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[40]` LV_NONEMPTY=true LV=`"du spielst "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[41]` LV_NONEMPTY=true LV=`"er spielt "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[42]` LV_NONEMPTY=true LV=`"sie spielt "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[43]` LV_NONEMPTY=true LV=`"wir spielen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[44]` LV_NONEMPTY=true LV=`"ihr spielt "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[45]` LV_NONEMPTY=true LV=`"sie spielen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[46]` LV_NONEMPTY=true LV=`"ich arbeite "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[47]` LV_NONEMPTY=true LV=`"du arbeitest "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[48]` LV_NONEMPTY=true LV=`"er arbeitet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[49]` LV_NONEMPTY=true LV=`"sie arbeitet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[50]` LV_NONEMPTY=true LV=`"wir arbeiten "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[51]` LV_NONEMPTY=true LV=`"ihr arbeitet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[52]` LV_NONEMPTY=true LV=`"sie arbeiten "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[53]` LV_NONEMPTY=true LV=`"ich frage "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[54]` LV_NONEMPTY=true LV=`"du fragst "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[55]` LV_NONEMPTY=true LV=`"er fragt "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[56]` LV_NONEMPTY=true LV=`"sie fragt "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[57]` LV_NONEMPTY=true LV=`"wir fragen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[58]` LV_NONEMPTY=true LV=`"ihr fragt "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[59]` LV_NONEMPTY=true LV=`"sie fragen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[60]` LV_NONEMPTY=true LV=`"ich antworte "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[61]` LV_NONEMPTY=true LV=`"du antwortest "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[62]` LV_NONEMPTY=true LV=`"er antwortet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[63]` LV_NONEMPTY=true LV=`"sie antwortet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[64]` LV_NONEMPTY=true LV=`"wir antworten "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[65]` LV_NONEMPTY=true LV=`"ihr antwortet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[66]` LV_NONEMPTY=true LV=`"sie antworten "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[67]` LV_NONEMPTY=true LV=`"ich rechne "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[68]` LV_NONEMPTY=true LV=`"du rechnest "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[69]` LV_NONEMPTY=true LV=`"er rechnet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[70]` LV_NONEMPTY=true LV=`"sie rechnet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[71]` LV_NONEMPTY=true LV=`"wir rechnen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[72]` LV_NONEMPTY=true LV=`"ihr rechnet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[73]` LV_NONEMPTY=true LV=`"sie rechnen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[74]` LV_NONEMPTY=true LV=`"ich zeichne "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[75]` LV_NONEMPTY=true LV=`"du zeichnest "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[76]` LV_NONEMPTY=true LV=`"er zeichnet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[77]` LV_NONEMPTY=true LV=`"sie zeichnet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[78]` LV_NONEMPTY=true LV=`"wir zeichnen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[79]` LV_NONEMPTY=true LV=`"ihr zeichnet "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[80]` LV_NONEMPTY=true LV=`"sie zeichnen "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[81]` LV_NONEMPTY=true LV=`"ich tue "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[82]` LV_NONEMPTY=true LV=`"du tust "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[83]` LV_NONEMPTY=true LV=`"er tut "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[84]` LV_NONEMPTY=true LV=`"sie tut "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[85]` LV_NONEMPTY=true LV=`"wir tun "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[86]` LV_NONEMPTY=true LV=`"ihr tut "`
- `www` `kurssVerbBasicsLesson` `legacyHtml/kurss-example[87]` LV_NONEMPTY=true LV=`"sie tun "`

### es

Rindas: 88. Koki: data, www. LV tukšas vērtības: 0. LV ne-tukšas: 88.

- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[63]` LV_NONEMPTY=true LV=`"der Mond "`
- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[64]` LV_NONEMPTY=true LV=`"das Mädchen "`
- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` LV_NONEMPTY=true LV=`"das Auto "`
- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[66]` LV_NONEMPTY=true LV=`"der Käse "`
- `data` `kurssArticlesLesson` `legacyHtml/kurss-example[67]` LV_NONEMPTY=true LV=`"die Gabel "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"du kommst "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"er singt "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"er kommt "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"sie kommt "`
- `data` `kurssLesson1` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"sie kommen "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[27]` LV_NONEMPTY=true LV=`"du arbeitest"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[28]` LV_NONEMPTY=true LV=`"er arbeitet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[29]` LV_NONEMPTY=true LV=`"sie arbeitet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[30]` LV_NONEMPTY=true LV=`"wir arbeiten"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[31]` LV_NONEMPTY=true LV=`"ihr arbeitet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[32]` LV_NONEMPTY=true LV=`"sie arbeiten"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[33]` LV_NONEMPTY=true LV=`"ich rechne"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[34]` LV_NONEMPTY=true LV=`"du rechnest"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"er rechnet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"sie rechnet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"wir rechnen"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"ihr rechnet"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"sie rechnen"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[40]` LV_NONEMPTY=true LV=`"ich tue"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[41]` LV_NONEMPTY=true LV=`"du tust"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[42]` LV_NONEMPTY=true LV=`"er tut"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[43]` LV_NONEMPTY=true LV=`"sie tut"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[44]` LV_NONEMPTY=true LV=`"wir tun"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[45]` LV_NONEMPTY=true LV=`"ihr tut"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[46]` LV_NONEMPTY=true LV=`"sie tun"`
- `data` `kurssLesson2` `legacyHtml/kurss-example[47]` LV_NONEMPTY=true LV=`"Was tust du? "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[48]` LV_NONEMPTY=true LV=`"Was tut er? "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[49]` LV_NONEMPTY=true LV=`"Was tut sie? "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[50]` LV_NONEMPTY=true LV=`"Was tun sie? "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[51]` LV_NONEMPTY=true LV=`"Er kommt nicht. "`
- `data` `kurssLesson2` `legacyHtml/kurss-example[52]` LV_NONEMPTY=true LV=`"Sie singen nicht. "`
- `data` `kurssLesson4` `legacyHtml/kurss-example[54]` LV_NONEMPTY=true LV=`" Marie geht hinaus"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[55]` LV_NONEMPTY=true LV=`"der Federhalter ist klein"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[56]` LV_NONEMPTY=true LV=`"die Feder ist klein"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[57]` LV_NONEMPTY=true LV=`"das Messer ist klein"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[58]` LV_NONEMPTY=true LV=`"die Messer sind klein"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[59]` LV_NONEMPTY=true LV=`"der Federhalter ist nicht weiß"`
- `data` `kurssLesson4` `legacyHtml/kurss-example[60]` LV_NONEMPTY=true LV=`"das Messer ist nicht scharf"`
- `data` `kurssLesson5` `legacyHtml/kurss-example[53]` LV_NONEMPTY=true LV=`"Das Mädchen geht dann hinaus und arbeitet."`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[63]` LV_NONEMPTY=true LV=`"der Mond "`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[64]` LV_NONEMPTY=true LV=`"das Mädchen "`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[65]` LV_NONEMPTY=true LV=`"das Auto "`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[66]` LV_NONEMPTY=true LV=`"der Käse "`
- `www` `kurssArticlesLesson` `legacyHtml/kurss-example[67]` LV_NONEMPTY=true LV=`"die Gabel "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"du kommst "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"er singt "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"er kommt "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"sie kommt "`
- `www` `kurssLesson1` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"sie kommen "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[27]` LV_NONEMPTY=true LV=`"du arbeitest"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[28]` LV_NONEMPTY=true LV=`"er arbeitet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[29]` LV_NONEMPTY=true LV=`"sie arbeitet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[30]` LV_NONEMPTY=true LV=`"wir arbeiten"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[31]` LV_NONEMPTY=true LV=`"ihr arbeitet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[32]` LV_NONEMPTY=true LV=`"sie arbeiten"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[33]` LV_NONEMPTY=true LV=`"ich rechne"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[34]` LV_NONEMPTY=true LV=`"du rechnest"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[35]` LV_NONEMPTY=true LV=`"er rechnet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[36]` LV_NONEMPTY=true LV=`"sie rechnet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[37]` LV_NONEMPTY=true LV=`"wir rechnen"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[38]` LV_NONEMPTY=true LV=`"ihr rechnet"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[39]` LV_NONEMPTY=true LV=`"sie rechnen"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[40]` LV_NONEMPTY=true LV=`"ich tue"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[41]` LV_NONEMPTY=true LV=`"du tust"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[42]` LV_NONEMPTY=true LV=`"er tut"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[43]` LV_NONEMPTY=true LV=`"sie tut"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[44]` LV_NONEMPTY=true LV=`"wir tun"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[45]` LV_NONEMPTY=true LV=`"ihr tut"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[46]` LV_NONEMPTY=true LV=`"sie tun"`
- `www` `kurssLesson2` `legacyHtml/kurss-example[47]` LV_NONEMPTY=true LV=`"Was tust du? "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[48]` LV_NONEMPTY=true LV=`"Was tut er? "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[49]` LV_NONEMPTY=true LV=`"Was tut sie? "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[50]` LV_NONEMPTY=true LV=`"Was tun sie? "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[51]` LV_NONEMPTY=true LV=`"Er kommt nicht. "`
- `www` `kurssLesson2` `legacyHtml/kurss-example[52]` LV_NONEMPTY=true LV=`"Sie singen nicht. "`
- `www` `kurssLesson4` `legacyHtml/kurss-example[54]` LV_NONEMPTY=true LV=`" Marie geht hinaus"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[55]` LV_NONEMPTY=true LV=`"der Federhalter ist klein"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[56]` LV_NONEMPTY=true LV=`"die Feder ist klein"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[57]` LV_NONEMPTY=true LV=`"das Messer ist klein"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[58]` LV_NONEMPTY=true LV=`"die Messer sind klein"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[59]` LV_NONEMPTY=true LV=`"der Federhalter ist nicht weiß"`
- `www` `kurssLesson4` `legacyHtml/kurss-example[60]` LV_NONEMPTY=true LV=`"das Messer ist nicht scharf"`
- `www` `kurssLesson5` `legacyHtml/kurss-example[53]` LV_NONEMPTY=true LV=`"Das Mädchen geht dann hinaus und arbeitet."`

## 5. EXTRA 1098

Kartītes id ir audita rindas `id`. LV id kopa ir `data/a1.js`–`data/c2.js` `id` un `study.id`. Ja id ir šajā kopā, kartīte LV eksistē un EXTRA ir papildu lauks. Ja nav, pāris pēc `de`+`level` neatbilda LV kartītei.

Unikālas valoda+datasets+id grupas: 243. No tām A1–C2 id vai study.id eksistē: 236. Šajā kopā nav: 7.

`cs` / `courseLessons` / `kurssPronounsLesson` nav A1–C2 id. Tā ir LV `COURSE_LESSON_HTML` atslēga. `1443:Pfahlbau` ir pozīcijas id `indekss:de`. LV `data/b2.js` ieraksts ar `de=Pfahlbau` ir, tam nav `id` un `study.id`, un LV `de_plural` nav. EXTRA šajās grupās ir papildu lauks, ne jauna kartīte bez LV vārda.

| valoda | dataset | id | EXTRA lauki | LV id eksistē |
| --- | --- | --- | ---: | --- |
| bg | a1 | a1-bis | 2 | true |
| bg | a1 | a1-bitte | 6 | true |
| bg | a1 | a1-bitte-study | 6 | true |
| bg | a1 | a1-bringen | 2 | true |
| bg | a1 | a1-es | 4 | true |
| bg | a1 | a1-finden | 8 | true |
| bg | a1 | a1-klein-study | 4 | true |
| cs | a1 | a1-bis | 2 | true |
| cs | a1 | a1-bringen | 2 | true |
| cs | a1 | a1-finden | 8 | true |
| cs | a1 | a1-klein-study | 4 | true |
| cs | courseLessons | kurssPronounsLesson | 2 | false |
| da | a1 | a1-bis | 2 | true |
| da | a1 | a1-bitte | 6 | true |
| da | a1 | a1-bringen | 2 | true |
| da | a1 | a1-es | 4 | true |
| da | a1 | a1-finden | 8 | true |
| da | a1 | a1-klein-study | 4 | true |
| en | a1 | a1-bis | 2 | true |
| en | a1 | a1-finden | 6 | true |
| es | a1 | a1-bis | 2 | true |
| es | a1 | a1-bitte | 6 | true |
| es | a1 | a1-bitte-study | 6 | true |
| es | a1 | a1-bringen | 2 | true |
| es | a1 | a1-es | 4 | true |
| es | a1 | a1-finden | 8 | true |
| es | a1 | a1-klein-study | 4 | true |
| et | a1 | a1-bis | 2 | true |
| et | a1 | a1-bitte | 6 | true |
| et | a1 | a1-bitte-study | 6 | true |
| et | a1 | a1-bringen | 2 | true |
| et | a1 | a1-es | 4 | true |
| et | a1 | a1-finden | 8 | true |
| et | a1 | a1-klein-study | 4 | true |
| et | a1 | a1-liter | 10 | true |
| et | a1 | a1-probieren | 4 | true |
| et | b2 | 1443:Pfahlbau | 2 | false |
| et | c1 | c1-beziehen-sich-beziehen-auf | 2 | true |
| et | c1 | c1-einfamilienhaus | 6 | true |
| et | c1 | c1-offentlichkeit | 6 | true |
| et | c1 | c1-partei | 6 | true |
| et | c1 | c1-prozess | 6 | true |
| et | c1 | c1-wahl | 6 | true |
| et | c2 | c2-gewichtseinheit | 6 | true |
| fi | a1 | a1-bis | 2 | true |
| fi | a1 | a1-bitte | 6 | true |
| fi | a1 | a1-bitte-study | 6 | true |
| fi | a1 | a1-bringen | 2 | true |
| fi | a1 | a1-es | 4 | true |
| fi | a1 | a1-finden | 8 | true |
| fi | a1 | a1-klein-study | 4 | true |
| fi | a1 | a1-probieren | 4 | true |
| fi | b2 | 1443:Pfahlbau | 2 | false |
| fi | c1 | c1-beziehen-sich-beziehen-auf | 2 | true |
| fr | a1 | a1-bis | 2 | true |
| fr | a1 | a1-bitte | 6 | true |
| fr | a1 | a1-bitte-study | 6 | true |
| fr | a1 | a1-bringen | 2 | true |
| fr | a1 | a1-es | 4 | true |
| fr | a1 | a1-finden | 8 | true |
| fr | a1 | a1-klein-study | 4 | true |
| gr | a1 | a1-bis | 2 | true |
| gr | a1 | a1-bitte | 6 | true |
| gr | a1 | a1-bitte-study | 6 | true |
| gr | a1 | a1-bringen | 2 | true |
| gr | a1 | a1-es | 4 | true |
| gr | a1 | a1-finden | 8 | true |
| gr | a1 | a1-klein-study | 4 | true |
| gr | a1 | a1-liter | 10 | true |
| gr | a1 | a1-probieren | 4 | true |
| gr | c1 | c1-beziehen-sich-beziehen-auf | 2 | true |
| gr | c1 | c1-einfamilienhaus | 6 | true |
| gr | c1 | c1-offentlichkeit | 6 | true |
| gr | c1 | c1-partei | 6 | true |
| gr | c1 | c1-prozess | 6 | true |
| gr | c1 | c1-wahl | 6 | true |
| gr | c2 | c2-gewichtseinheit | 6 | true |
| hr | a1 | a1-bis | 2 | true |
| hr | a1 | a1-bitte | 6 | true |
| hr | a1 | a1-bitte-study | 6 | true |
| hr | a1 | a1-bringen | 2 | true |
| hr | a1 | a1-es | 4 | true |
| hr | a1 | a1-finden | 8 | true |
| hr | a1 | a1-klein-study | 4 | true |
| hu | a1 | a1-bis | 2 | true |
| hu | a1 | a1-bitte | 6 | true |
| hu | a1 | a1-bitte-study | 6 | true |
| hu | a1 | a1-bringen | 2 | true |
| hu | a1 | a1-es | 4 | true |
| hu | a1 | a1-finden | 8 | true |
| hu | a1 | a1-klein-study | 4 | true |
| is | a1 | a1-bis | 2 | true |
| is | a1 | a1-bitte | 6 | true |
| is | a1 | a1-bitte-study | 6 | true |
| is | a1 | a1-bringen | 2 | true |
| is | a1 | a1-es | 4 | true |
| is | a1 | a1-finden | 8 | true |
| is | a1 | a1-klein-study | 4 | true |
| is | a1 | a1-probieren | 4 | true |
| is | b2 | 1443:Pfahlbau | 2 | false |
| is | c1 | c1-beziehen-sich-beziehen-auf | 2 | true |
| it | a1 | a1-bis | 2 | true |
| it | a1 | a1-bitte | 6 | true |
| it | a1 | a1-bitte-study | 6 | true |
| it | a1 | a1-bringen | 2 | true |
| it | a1 | a1-es | 4 | true |
| it | a1 | a1-finden | 8 | true |
| it | a1 | a1-klein-study | 4 | true |
| lb | a1 | a1-bis | 2 | true |
| lb | a1 | a1-bitte | 6 | true |
| lb | a1 | a1-bitte-study | 6 | true |
| lb | a1 | a1-bringen | 2 | true |
| lb | a1 | a1-es | 4 | true |
| lb | a1 | a1-finden | 8 | true |
| lb | a1 | a1-klein-study | 4 | true |
| lt | a1 | a1-bis | 2 | true |
| lt | a1 | a1-bitte | 6 | true |
| lt | a1 | a1-bitte-study | 6 | true |
| lt | a1 | a1-bringen | 2 | true |
| lt | a1 | a1-es | 4 | true |
| lt | a1 | a1-finden | 8 | true |
| lt | a1 | a1-klein-study | 4 | true |
| mk | a1 | a1-bis | 2 | true |
| mk | a1 | a1-bitte | 6 | true |
| mk | a1 | a1-bitte-study | 6 | true |
| mk | a1 | a1-bringen | 2 | true |
| mk | a1 | a1-es | 4 | true |
| mk | a1 | a1-finden | 8 | true |
| mk | a1 | a1-klein-study | 4 | true |
| nb | a1 | a1-bis | 2 | true |
| nb | a1 | a1-bitte | 6 | true |
| nb | a1 | a1-bitte-study | 6 | true |
| nb | a1 | a1-bringen | 2 | true |
| nb | a1 | a1-es | 4 | true |
| nb | a1 | a1-finden | 8 | true |
| nb | a1 | a1-klein-study | 4 | true |
| nb | a1 | a1-probieren | 4 | true |
| nb | b2 | 1443:Pfahlbau | 2 | false |
| nb | c1 | c1-beziehen-sich-beziehen-auf | 2 | true |
| nl | a1 | a1-bis | 2 | true |
| nl | a1 | a1-bitte | 6 | true |
| nl | a1 | a1-bitte-study | 6 | true |
| nl | a1 | a1-bringen | 2 | true |
| nl | a1 | a1-es | 4 | true |
| nl | a1 | a1-finden | 8 | true |
| nl | a1 | a1-klein-study | 4 | true |
| nn | a1 | a1-bis | 2 | true |
| nn | a1 | a1-bitte | 6 | true |
| nn | a1 | a1-bitte-study | 6 | true |
| nn | a1 | a1-bringen | 2 | true |
| nn | a1 | a1-es | 4 | true |
| nn | a1 | a1-finden | 8 | true |
| nn | a1 | a1-klein-study | 4 | true |
| nn | a1 | a1-probieren | 4 | true |
| nn | a1 | a1-wie | 8 | true |
| nn | b2 | 1443:Pfahlbau | 2 | false |
| nn | c1 | c1-beziehen-sich-beziehen-auf | 2 | true |
| pl | a1 | a1-bis | 2 | true |
| pl | a1 | a1-bitte | 6 | true |
| pl | a1 | a1-bitte-study | 6 | true |
| pl | a1 | a1-bringen | 2 | true |
| pl | a1 | a1-es | 4 | true |
| pl | a1 | a1-finden | 8 | true |
| pl | a1 | a1-klein-study | 4 | true |
| pt | a1 | a1-bis | 2 | true |
| pt | a1 | a1-bitte | 6 | true |
| pt | a1 | a1-bitte-study | 6 | true |
| pt | a1 | a1-bringen | 2 | true |
| pt | a1 | a1-es | 4 | true |
| pt | a1 | a1-finden | 8 | true |
| pt | a1 | a1-klein-study | 4 | true |
| ro | a1 | a1-bis | 2 | true |
| ro | a1 | a1-bitte | 6 | true |
| ro | a1 | a1-bitte-study | 6 | true |
| ro | a1 | a1-bringen | 2 | true |
| ro | a1 | a1-es | 4 | true |
| ro | a1 | a1-finden | 8 | true |
| ro | a1 | a1-klein-study | 4 | true |
| ru | a1 | a1-bis | 2 | true |
| ru | a1 | a1-bitte | 6 | true |
| ru | a1 | a1-bitte-study | 6 | true |
| ru | a1 | a1-bringen | 2 | true |
| ru | a1 | a1-es | 4 | true |
| ru | a1 | a1-finden | 8 | true |
| ru | a1 | a1-klein-study | 4 | true |
| sk | a1 | a1-bis | 2 | true |
| sk | a1 | a1-bitte | 6 | true |
| sk | a1 | a1-bitte-study | 6 | true |
| sk | a1 | a1-bringen | 2 | true |
| sk | a1 | a1-es | 4 | true |
| sk | a1 | a1-finden | 8 | true |
| sk | a1 | a1-klein-study | 4 | true |
| sl | a1 | a1-bis | 2 | true |
| sl | a1 | a1-bitte | 6 | true |
| sl | a1 | a1-bitte-study | 6 | true |
| sl | a1 | a1-bringen | 2 | true |
| sl | a1 | a1-es | 4 | true |
| sl | a1 | a1-finden | 8 | true |
| sl | a1 | a1-klein-study | 4 | true |
| sq | a1 | a1-bis | 2 | true |
| sq | a1 | a1-bitte | 6 | true |
| sq | a1 | a1-bitte-study | 6 | true |
| sq | a1 | a1-bringen | 2 | true |
| sq | a1 | a1-es | 4 | true |
| sq | a1 | a1-finden | 8 | true |
| sq | a1 | a1-klein-study | 4 | true |
| sr | a1 | a1-bis | 2 | true |
| sr | a1 | a1-bitte | 6 | true |
| sr | a1 | a1-bitte-study | 6 | true |
| sr | a1 | a1-bringen | 2 | true |
| sr | a1 | a1-es | 4 | true |
| sr | a1 | a1-finden | 8 | true |
| sr | a1 | a1-klein-study | 4 | true |
| sr | a1 | a1-morgen | 4 | true |
| sr | a1 | a1-morgen-study | 4 | true |
| sr | a1 | a1-seite | 4 | true |
| sr | a1 | a1-sicher | 4 | true |
| sr | a1 | a1-sie-study | 6 | true |
| sr | a1 | a1-sie-study-2 | 6 | true |
| sv | a1 | a1-bis | 2 | true |
| sv | a1 | a1-bitte | 6 | true |
| sv | a1 | a1-bitte-study | 6 | true |
| sv | a1 | a1-bringen | 2 | true |
| sv | a1 | a1-es | 4 | true |
| sv | a1 | a1-finden | 8 | true |
| sv | a1 | a1-klein-study | 4 | true |
| sv | a1 | a1-probieren | 4 | true |
| sv | b2 | 1443:Pfahlbau | 2 | false |
| sv | c1 | c1-beziehen-sich-beziehen-auf | 2 | true |
| tr | a1 | a1-bis | 2 | true |
| tr | a1 | a1-bitte | 6 | true |
| tr | a1 | a1-bitte-study | 6 | true |
| tr | a1 | a1-bringen | 2 | true |
| tr | a1 | a1-es | 4 | true |
| tr | a1 | a1-finden | 8 | true |
| tr | a1 | a1-klein-study | 4 | true |
| uk | a1 | a1-bis | 2 | true |
| uk | a1 | a1-bitte | 6 | true |
| uk | a1 | a1-bitte-study | 6 | true |
| uk | a1 | a1-bringen | 2 | true |
| uk | a1 | a1-es | 4 | true |
| uk | a1 | a1-finden | 8 | true |
| uk | a1 | a1-klein-study | 4 | true |

### 20 piemēri

- bg `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- cs `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- da `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- en `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- es `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- et `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- fi `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- fr `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- gr `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- hr `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- hu `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- is `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- it `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- lb `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- lt `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- mk `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- nb `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- nl `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- nn `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true
- pl `a1` `a1-bis` `study.comparison[3].word` koks=`data` LV=`null` LANG=`"bis jetzt"` lvIdExists=true

## 6. COVERAGE_CHARS

CHECKED_CHARS ir LV vērtības JavaScript garums katrā `addCompare` izsaukumā `data` un `www` kokos. Tas ir tas pats gājiens, kas deva CHECKED_FIELDS. NOT_VERIFIABLE_CHARS ir no saglabātā audita.

CHECKED_CHARS = 23442586
NOT_VERIFIABLE_CHARS = 4287734
COVERAGE_CHARS = 23442586 / (23442586 + 4287734) = 84.5377

lesson7 DE lauki šajā skaitlī nav, jo sākotnējais audits tos nesalīdzināja. To atsevišķais apjoms ir 8. sadaļā.

## 7. dialogueIdMap lauks lv

`languages/data-loader.js` `lv` lauku nelasa. Tas tikai ielādē dataset skriptu. `ui.js` `DIALOGUE_ID_MAP` nolasa tikai `migrateSarunasProgress`: `mapped.lv` ieiet saglabātajā progresa atslēgā `Sätze:${mapped.de}:${mapped.lv}`. Šī funkcija tekstu neieraksta `innerHTML` un `textContent`.

Redzamās teikumu kartītes nāk no `sentences.js` caur `getSentenceEntries`: ekrānā nonāk šo ierakstu `de` un `lv`, nevis `dialogueIdMap.lv`. `lt` un `uk` `sentences.js` ir savs fails, tāpēc fallback uz LV `dialogueIdMap.js` neaizstāj redzamo teikuma tulkojumu. Fallback ieliek latviešu `lv` virkni tikai vecā `Sarunas` progresa migrācijas atslēgā, ja šī migrācija notiek.

## 8. lesson7ExerciseCards

Sākotnējais audits salīdzināja `lesson1`–`lesson6` training `back` laukus. `lesson7ExerciseCards` DE lauki `infinitive`, `du`, `ihr`, `sie` tur nebija. `lv` ir dzimtās valodas glosa, ne DE lauks. Šajā analīzē tie DE lauki ir salīdzināti exact-match pret `ui.js` `const lesson7ExerciseCards`.

`ui.js` satur `lesson7ExerciseCards` un `lesson7ExerciseCardsEt`. Pārējās valodas ir `data/{lang}/courseTrainingCards.js` un `www` spogulī. `data-loader.js` šo failu ielādē tikai fiksētajam sarakstam pie `courseLessons`. Sarakstā nav `pl`, `ro`, `bg`, `gr`, `tr`, `sq`, `mk`, `et`. `et` kartītes tomēr ir `ui.js` konstante, un `getExerciseSourceCards` to izmanto. Minētajām septiņām valodām ielādētājs failu neielādē, tāpēc izpildes laikā `getExerciseSourceCards` nokrīt uz LV `lesson7ExerciseCards`: lietotājs redz LV glosu `lv` un LV DE formas, nevis neielādētā faila saturu.

Salīdzināti lauki: 3968. Salīdzinātās LV rakstzīmes: 34162. Nesakritības: 0. Nepārbaudīti lauki: 0. Nepārbaudītās LV rakstzīmes: 0.

Salīdzinātajās valodās `infinitive`, `du`, `ihr` un `sie` sakrīt ar LV.

Valodas bez lesson7 klāja failā: nav.

STAGE RESULT: PASS
