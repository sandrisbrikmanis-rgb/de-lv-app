# EXTRA Study noņemšana — kopsavilkums

Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.

STAGE RESULT: **PARTIAL**

OWNER_DECISION 2026-10-04: LV ir etalons. EXTRA Study elementi (A1–C2) noņemti no mērķvalodām. LV nav papildināts. KEEP_IDS ir tukšs.

Bāze ir PR #869 galva `a8d3c8a2643a3043d1ef273750750e07741dc172` (PR #866 un #869 nav apvienoti). origin/main `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`.

## Ko noņēma

Avots: `reports/owner-lv-additions/owner-lv-additions.csv`, 185 grupas E0001–E0185. Klases NEW_CONTENT, DUPLICATE_OF_LV_ROW un SMALL_GROUP masīvos `study.examples`, `study.comparison`, `study.variants`.

Pirms dzēšanas katrs elements salīdzināts ar LV pēc vācu vērtības un secības (tas pats izlīdzinājums, kas veidoja CSV). Ja elements sakrita ar LV rindu tajā pašā indeksā, tas netika dzēsts. Tādu gadījumu nav (`kept-in-lv.json` ir `[]`). Visas 185 grupas atrastas katrā `languages_with` valodā (`not-found.json` ir `[]`).

Noņemti **1358** elementi (679 katrā kokā, `data/` un `www/data/` paliek baiti identiski). 140 faili. LV `data/a1.js`–`c2.js` un `www/data/a1.js`–`c2.js` nav mainīti. B2 Study grupu nebija, `b2.js` nav šajā diff.

| līmenis | elementi vienā kokā |
|---|---:|
| a1 | 528 |
| a2 | 67 |
| b1 | 41 |
| c1 | 37 |
| c2 | 6 |

| masīvs | elementi vienā kokā |
|---|---:|
| study.examples | 354 |
| study.comparison | 286 |
| study.variants | 39 |

| klase | elementi vienā kokā |
|---|---:|
| NEW_CONTENT | 238 |
| NEW_CONTENT+DE_VARIANT | 147 |
| DUPLICATE_OF_LV_ROW | 113 |
| SMALL_GROUP/NEW_CONTENT | 88 |
| SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 92 |
| SMALL_GROUP/DUPLICATE_OF_LV_ROW+DE_VARIANT | 1 |

Elementi vienā kokā pa valodām: bg 22, bs 1, cs 9, da 26, en 7, es 22, et 71, fi 22, fr 17, gr 43, hr 23, hu 18, is 21, it 18, lb 20, lt 21, mk 22, nb 21, nl 18, nn 27, pl 18, pt 18, ro 23, ru 22, sk 18, sl 18, sq 18, sr 40, sv 21, tr 18, uk 16.

a1-bis ceturtā rinda (`bis jetzt` / `Bis jetzt ist alles gut.`) ir noņemta no mērķvalodām. LV paliek ar trim salīdzinājuma rindām. Piedāvātais latviešu teksts nav ierakstīts.

## ORDER_SHIFT — nav aiztikts

A1: 1 rinda, abi koki. da `a1-besuchen` `study.examples` indekss 0 sakrīt ar LV indeksu 2, vācu teksts `Ich besuche meine Großeltern.` Skatīt `order-shift.json`. Citos līmeņos ORDER_SHIFT nav.

## Atjaunošana

Noņemtie elementi ir `reports/owner-a1-extra/removed-elements/part-01.json` un `part-02.json` (viens fails pārsniedza 500 KB; sk. `removed-elements/README.md`). Katrs ieraksts: valoda, koks, ceļš, indekss, viss elements, precīzs avota fragments un nobīde.

`node scripts/restore-extra-study-elements.js` failus neraksta. Tas ieliek fragmentus atpakaļ sākotnējās nobīdēs un salīdzina SHA-256 ar `restore-proof.json`. Rezultāts: `{"files":140,"failed":0}`.

## Kods

`reports/owner-lv-additions/code-index.md` un šīs pārlases rezultāts: `ui.js` un `www/ui.js` Study masīvus iet ar `.map` un `.length`. `examples[N]`, `comparison[N]`, `variants[N]` ar fiksētu skaitli nav. `languages/*.js` šos masīvus pēc indeksa nelasa.

`sectionAccentRules` (`ui.js` 8060–8062) ir `rules[index]`. Īsāks akcentu masīvs dod `undefined`. `formatStudyText` un `withComparisonFieldFallback` tad lieto rindas tekstu. Īsāks masīvs renderi neapstādina. `COMPARISON_WORD_ACCENTS[index % length]` iet cikliski.

## Verifikācija

| pārbaude | rezultāts |
|---|---|
| git diff | 140 faili, 0 pievienotas rindas, 6070 dzēstas rindas, tikai `data/{lang}/` un `www/data/{lang}/` A1–C2 |
| node --check | 0 kļūdu visos 140 mainītajos failos |
| atjaunošanas SHA-256 | 140/140 sakrīt ar bāzi |
| languages, ui.js, www/ui.js, crowdin/content, esošie scripts | diff tukšs |
| audit-lv-de-verify.js | nemainās: observation 492, emptyPluralNouns 492, finding 80, review 51, stemReview 20, der 168, pass2 NOT_RUN |
| ORDER | 0 → 0 |
| UNICODE_ONLY | 760 → 760 |
| courseLessons EXTRA | 2 → 2 |

`scripts/audit-de-consistency.js` uz pagaidu kopijas, tīkls izslēgts:

| rādītājs | pirms | pēc |
|---|---:|---:|
| EXTRA | 1086 | 6 |
| EXTRA a1 | 998 | 4 |
| EXTRA c1 | 74 | 0 |
| EXTRA c2 | 12 | 0 |
| EXTRA a2, b1, b2 | 0 | 0 |
| EXTRA courseLessons | 2 | 2 |
| TEXT | 5428 | 5628 |
| MISSING | 307 | 507 |
| ORDER | 0 | 0 |

EXTRA A1–C2 nav 0. Paliek 4 lauki: et un gr, abi koki, `a1-liter` `study.examples[0].de` = `Die Flasche fasst zwei Liter.` Šī rinda nebija 185 grupu CSV. Izlīdzinājums to neuzskatīja par vācu elementu (tikai 2 valodas, nav spēcīgā vācu vārda). Pirms dzēšanas tā jau bija indeksa EXTRA pozīcijā `examples[1]`; blakus rinda `Ich brauche einen Liter Milch.` (E0032) ir noņemta, tāpēc atlikusī rinda tagad ir indeksā 0. Tā nav dzēsta, jo tās nav CSV sarakstā.

TEXT +200 un MISSING +200 rodas tāpēc, ka daļa noņemto rindu stāvēja indeksā, kur LV rindai arī ir vārds. Masīvs saīsinās, vēlākie vārdi nobīdās. Indeksa audits to skaita kā TEXT (cits vārds tajā pašā indeksā) vai MISSING (LV vārds, kura valodā vairs nav). Sadalījums: TEXT a2 comparison.word +88, b1 +82, a1 +32, a1 examples.de −2. MISSING b1 comparison.word +82, a1 +60, a2 +56, a1 examples.de +2. ORDER paliek 0.

Tāpēc rezultāts ir PARTIAL, nevis PASS. Noņemšana ir izpildīta pēc CSV. TEXT un MISSING vairs nav bāzes skaitļi, un 4 indeksa EXTRA ārpus CSV paliek.
