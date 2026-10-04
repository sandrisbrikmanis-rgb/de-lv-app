# Study spraugu analīze

Tikai lasāms salīdzinājums. Dati un kods nav mainīti. Labojumi nav ierosināti.

Bāze #870 `bd8c8ff7cf3177417957b03c911fd5a791a46bac`. Salīdzinājuma bāze #869 `a8d3c8a2643a3043d1ef273750750e07741dc172`.

## Šūnas

Jauna šūna ir TEXT vai MISSING, kas ir #870 auditā un nav #869 auditā. Atslēga: kind, valoda, koks, līmenis, kartītes id, lauks.

| rādītājs | #869 | #870 | jaunas | pazudušas | neto |
|---|---:|---:|---:|---:|---:|
| TEXT | 5428 | 5628 | 204 | 4 | +200 |
| MISSING | 307 | 507 | 200 | 0 | +200 |

Jaunās šūnas: 404. No tām 202 ir `data/` un 202 ir `www/`; katrai `data` šūnai ir tāda pati `www` šūna. Pilns saraksts ir `cells.json`: valoda, koks, līmenis, kartītes id, masīva ceļš, indekss, LV vācu lauki, valodas pašreizējā rinda, noņemtais elements ar sākotnējo indeksu.

Noņemtais elements šajā vietā ir `removed-elements` ieraksts ar to pašu valodu, koku, kartīti, masīvu un indeksu, kas vienāds ar audita indeksu. Tāds ir 198 šūnām no 404. Pārējām 206 šūnām šajā indeksā nekas nav noņemts; noņemšana ir citā indeksā tajā pašā masīvā.

Pazudušās 4 TEXT šūnas (nav jaunajā kopā):

- sr data a1 a1-sitzen study.comparison[3].word LV `setzen` valoda `sich setzen`
- sr www a1 a1-sitzen study.comparison[3].word LV `setzen` valoda `sich setzen`
- da data a1 a1-besuchen study.examples[2].de LV `Ich besuche meine Großeltern.` valoda `Er besucht einen Freund.`
- da www a1 a1-besuchen study.examples[2].de LV `Ich besuche meine Großeltern.` valoda `Er besucht einen Freund.`

## Klasifikācija

Galvenais vārds: `study.comparison` lauks `word`, `study.examples` lauks `de`. Skaits ir pēc reģistra salīdzinājuma.

SHIFT_ONLY: šīs LV rindas galvenā vārda skaits valodā joprojām ir vismaz tik liels kā LV. Indeksā teksts atšķiras vai lauka nav, bet pati rinda masīvā vēl ir.

Ja skaits ir mazāks, meklē noņemto elementu tajā pašā kartītē un masīvā ar to pašu galveno vārdu. Tas pats vārds nozīmē vienādu tekstu pēc reģistra, vai vienādu latīņu saliekumu, vai kirilicas/latīņu pāri ar Levenšteina attālumu līdz 2. Vācu teksts drīkst atšķirties tikai ar vārdiem, kuru nav LV vācu leksikā, ar pareizrakstību (attālums līdz 1) vai ar reģistru. Leksikas vārdu drīkst aizstāt svešs vārds (E-kirja pret E-Mail). Tad klase ir VARIANT_OF_LV_ROW. Citādi TRUE_GAP.

| klase | šūnas | data | www |
|---|---:|---:|---:|
| VARIANT_OF_LV_ROW | 132 | 66 | 66 |
| TRUE_GAP | 66 | 33 | 33 |
| SHIFT_ONLY | 206 | 103 | 103 |

Pēc veida: MISSING SHIFT_ONLY 144, MISSING VARIANT_OF_LV_ROW 28, MISSING TRUE_GAP 28, TEXT VARIANT_OF_LV_ROW 104, TEXT TRUE_GAP 38, TEXT SHIFT_ONLY 62.

| līmenis | šūnas | VARIANT | TRUE_GAP | SHIFT | TEXT | MISSING |
|---|---:|---:|---:|---:|---:|---:|
| a1 | 96 | 24 | 36 | 36 | 34 | 62 |
| a2 | 144 | 26 | 30 | 88 | 88 | 56 |
| b1 | 164 | 82 | 0 | 82 | 82 | 82 |

| masīvs | šūnas | VARIANT | TRUE_GAP | SHIFT | TEXT | MISSING |
|---|---:|---:|---:|---:|---:|---:|
| study.comparison | 402 | 132 | 66 | 204 | 204 | 198 |
| study.examples | 2 | 0 | 0 | 2 | 0 | 2 |

bg, mk, ru un uk jaunās TEXT/MISSING šūnas nav. Pārējās 27 valodas ir tabulā. Skaiti ietver abus kokus.

| valoda | šūnas | VARIANT | TRUE_GAP | SHIFT | TEXT | MISSING |
|---|---:|---:|---:|---:|---:|---:|
| bg | 0 | 0 | 0 | 0 | 0 | 0 |
| bs | 4 | 2 | 0 | 2 | 2 | 2 |
| cs | 4 | 2 | 0 | 2 | 2 | 2 |
| da | 30 | 20 | 4 | 6 | 4 | 26 |
| en | 8 | 0 | 6 | 2 | 2 | 6 |
| es | 10 | 6 | 0 | 4 | 4 | 6 |
| et | 152 | 30 | 30 | 92 | 92 | 60 |
| fi | 12 | 4 | 2 | 6 | 6 | 6 |
| fr | 4 | 2 | 0 | 2 | 2 | 2 |
| gr | 10 | 4 | 0 | 6 | 6 | 4 |
| hr | 8 | 0 | 2 | 6 | 6 | 2 |
| hu | 8 | 4 | 0 | 4 | 4 | 4 |
| is | 8 | 4 | 0 | 4 | 4 | 4 |
| it | 8 | 4 | 0 | 4 | 4 | 4 |
| lb | 16 | 4 | 4 | 8 | 8 | 8 |
| lt | 16 | 4 | 6 | 6 | 6 | 10 |
| mk | 0 | 0 | 0 | 0 | 0 | 0 |
| nb | 8 | 4 | 0 | 4 | 4 | 4 |
| nl | 8 | 4 | 0 | 4 | 4 | 4 |
| nn | 20 | 4 | 4 | 12 | 12 | 8 |
| pl | 8 | 4 | 0 | 4 | 4 | 4 |
| pt | 8 | 4 | 0 | 4 | 4 | 4 |
| ro | 4 | 2 | 0 | 2 | 2 | 2 |
| ru | 0 | 0 | 0 | 0 | 0 | 0 |
| sk | 8 | 4 | 0 | 4 | 4 | 4 |
| sl | 8 | 4 | 0 | 4 | 4 | 4 |
| sq | 8 | 4 | 0 | 4 | 4 | 4 |
| sr | 10 | 0 | 8 | 2 | 2 | 8 |
| sv | 8 | 4 | 0 | 4 | 4 | 4 |
| tr | 8 | 4 | 0 | 4 | 4 | 4 |
| uk | 0 | 0 | 0 | 0 | 0 | 0 |

Nosauktie paraugi, kas ir jaunajās šūnās un klasē VARIANT_OF_LV_ROW: E-kirja 24 (12 data + 12 www), E-pastu/E-Pastu 16, E-posta 8. `Bis jetzt` / `bis jetzt` un `Бис Джетц` jaunajās TEXT/MISSING šūnās nav.

VARIANT_OF_LV_ROW, pirmās 10 dažādās data rindas pēc valodas, kartītes un galvenā vārda:

- MISSING da a1 a1-bitte study.comparison[0] LV {"example_de":"Komm bitte herein.","word":"bitte"} now null removed E0047@0 {"article":null,"de":null,"example":"Komm bitte herein. -- Kom venligst ind.","plural":null,"word":"bitte"}
- MISSING da a1 a1-bitte study.comparison[1] LV {"example_de":"Ich habe eine Bitte.","word":"die Bitte"} now null removed E0048@1 {"article":null,"de":null,"example":"Ich habe eine Bitte. -- Jeg har en anmodning.","plural":null,"word":"die Bitte"}
- MISSING da a1 a1-bitte-study study.comparison[0] LV {"example_de":"Ich habe eine Bitte.","word":"die Bitte"} now null removed E0050@0 {"article":null,"de":null,"example":"Ich habe eine Bitte. -- Jeg har en anmodning.","plural":null,"word":"die Bitte"}
- MISSING da a1 a1-bitte-study study.comparison[1] LV {"example_de":"Komm bitte herein.","word":"bitte"} now null removed E0049@1 {"article":null,"de":null,"example":"Komm bitte herein. -- Kom venligst ind.","plural":null,"word":"bitte"}
- MISSING da a1 a1-bringen study.comparison[1] LV {"example_de":"Ich bringe das Paket zur Post.","word":"bringen"} now null removed E0051@1 {"article":null,"de":null,"example":"Ich bringe das Paket zur Post. -- Jeg bringer pakken til posthuset.","plural":null,"word":"bringen"}
- MISSING da a1 a1-bringen study.comparison[4] LV {"example_de":"Ich nehme das Buch.","word":"nehmen"} now null removed E0054@4 {"article":null,"de":null,"example":"Ich nehme das Buch. -- Jeg tager bogen.","plural":null,"word":"nehmen"}
- MISSING da a1 a1-es study.comparison[1] LV {"example_de":"Ich lerne Deutsch.","word":"ich"} now null removed E0060@1 {"article":null,"de":null,"example":"Ich lerne Deutsch. -- Jeg lærer tysk.","plural":null,"word":"ich"}
- MISSING es a1 a1-müssen study.comparison[3] LV {"example_de":"Darf ich gehen?","word":"dürfen"} now null removed E0083@3 {"article":null,"de":null,"example":"¿Darf ich gehen?","plural":null,"word":"dürfen"}
- MISSING gr a1 a1-müssen study.comparison[3] LV {"example_de":"Darf ich gehen?","word":"dürfen"} now null removed E0082@3 {"article":null,"de":null,"example":"Darf ich gehen;","plural":null,"word":"dürfen"}
- MISSING et a2 a2-abstellen study.comparison[4] LV {"example_de":"Ich stelle die Tasche neben die Tür.","word":"stellen"} now null removed E0105@4 {"article":null,"de":null,"example":"Ich stelle die Tür. = Tasche neben die Ma panen koti ukse kõrvale.","plural":null,"word":"stellen"}

TRUE_GAP, pirmās 10:

- MISSING da a1 a1-fussball-study study.comparison[1] LV {"example_de":"Der Fußball ist neu.","word":"der Fußball"} now null removed E0069@1 {"article":null,"de":null,"example":"Der Fußball liegt im Garten. – Fodbolden ligger i haven.","plural":null,"word":"der Fußball"}
- MISSING en a1 a1-ein study.comparison[3] LV {"example_de":"einen Mann","word":"einen Mann"} now null removed E0059@3 {"article":null,"de":null,"example":"Ich sehe einen Mann. – I see a man.","plural":null,"word":"einen Mann"}
- MISSING en a1 a1-nach study.comparison[3] LV {"example_de":"Vor dem Essen wasche ich die Hände.","word":"vor"} now null removed E0084@3 {"article":null,"de":null,"example":"Vor dem Essen wasche ich mir die Hände. – Before the meal, I wash my hands.","plural":null,"word":"vor"}
- MISSING lb a1 a1-etwas study.comparison[3] LV {"example_de":"Ich brauche nichts.","word":"nichts"} now null removed E0062@3 {"article":null,"de":null,"example":"Ich sehe nichts. – Ech gesinn näischt.","plural":null,"word":"nichts"}
- MISSING lt a1 a1-ein study.comparison[1] LV {"example_de":"eine Frau","word":"eine Frau"} now null removed E0057@1 {"article":null,"de":null,"example":"Ich dusche am Morgen.","plural":null,"word":"eine Frau"}
- MISSING lt a1 a1-ein study.comparison[3] LV {"example_de":"einen Mann","word":"einen Mann"} now null removed E0058@3 {"article":null,"de":null,"example":"Ich gehe baden.","plural":null,"word":"einen Mann"}
- MISSING sr a1 a1-auf study.comparison[1] LV {"example_de":"Ich hänge das Bild an die Wand.","word":"an"} now null removed E0042@1 {"article":null,"de":null,"example":"an die Wand – на зид","plural":null,"word":"an"}
- MISSING sr a1 a1-sitzen study.comparison[3] LV {"example_de":"Ich setze mich.","word":"setzen"} now null removed E0097@3 {"article":null,"de":null,"example":"Ich setze mich. – Седам.","plural":null,"word":"sich setzen"}
- MISSING sr a1 a1-wenn study.comparison[3] LV {"example_de":"Ich bleibe, weil ich krank bin.","word":"weil"} now null removed E0100@3 {"article":null,"de":null,"example":"weil ich krank bin – јер сам болестан/болесна","plural":null,"word":"weil"}
- MISSING et a2 a2-dabei study.comparison[4] LV {"example_de":"Trotzdem komme ich.","word":"trotzdem"} now null removed E0112@4 {"article":null,"de":null,"example":"ich. = Sellest hoolimata tulen ma.","plural":null,"word":"trotzdem"}

SHIFT_ONLY, pirmās 10. 204 no 206 SHIFT šūnām šajā indeksā noņemta elementa nav.

- MISSING da a1 a1-besuchen study.examples[2] LV {"de":"Ich besuche meine Großeltern."} now null removed E0044@2 {"article":null,"de":"Er besucht einen Freund.","example":null,"plural":null,"word":null}
- MISSING da a1 a1-land study.comparison[3] LV {"example_de":"Die Erde ist rund.","word":"die Erde"} now null removed —
- MISSING en a1 a1-ein study.comparison[2] LV {"example_de":"Ich habe ein Buch.","word":"ein Buch"} now null removed —
- MISSING fi a1 a1-aber study.comparison[2] LV {"example_de":"Es ist kalt, jedoch sonnig.","word":"jedoch"} now null removed —
- MISSING gr a1 a1-sollen study.comparison[3] LV {"example_de":"Ich will bleiben.","word":"wollen"} now null removed —
- MISSING hr a1 a1-passen study.comparison[3] LV {"example_de":"Das funktioniert.","word":"funktionieren"} now null removed —
- MISSING lb a1 a1-etwas study.comparison[2] LV {"example_de":"Ich bin ein bisschen müde.","word":"ein bisschen"} now null removed —
- MISSING lt a1 a1-ein study.comparison[2] LV {"example_de":"Ich habe ein Buch.","word":"ein Buch"} now null removed —
- MISSING nn a1 a1-land study.comparison[3] LV {"example_de":"Die Erde ist rund.","word":"die Erde"} now null removed —
- MISSING nn a1 a1-verstehen study.comparison[3] LV {"example_de":"Ich kenne ihn.","word":"kennen"} now null removed —

## a1-liter un a1-besuchen

Četras EXTRA rindas paliek indeksa auditā. LV `a1-liter` `study.examples` ir tukšs un `study.comparison` ir tukšs. Valodā ir viena piemēru rinda indeksā 0.

- et data study.examples[0].de = `Die Flasche fasst zwei Liter.`
- et www study.examples[0].de = `Die Flasche fasst zwei Liter.`
- gr data study.examples[0].de = `Die Flasche fasst zwei Liter.`
- gr www study.examples[0].de = `Die Flasche fasst zwei Liter.`

da `a1-besuchen` `study.examples` secība pret LV:

| indekss | LV | da #869 | da #870 |
|---:|---|---|---|
| 0 | Ich besuche das Museum. | Ich besuche meine Großeltern. | Ich besuche meine Großeltern. |
| 1 | Wir besuchen einen Deutschkurs. | Wir besuchen das Museum. | Wir besuchen das Museum. |
| 2 | Ich besuche meine Großeltern. | Er besucht einen Freund. | — |

da indekss 0 `Ich besuche meine Großeltern.` ir LV indekss 2. Tā ir ORDER_SHIFT rinda no `order-shift.json`; tā nav dzēsta. #869 indeksā 2 bija TEXT (`Er besucht einen Freund.` pret LV `Ich besuche meine Großeltern.`). #870 šī TEXT šūna ir pazudusi, un indekss 2 ir MISSING, klase SHIFT_ONLY, jo LV teikums ir da indeksā 0. Noņemtais elements šajā indeksā ir E0044 `Er besucht einen Freund.`

## Akcenti

Mainītie Study bloki ir kartītes, kurām `removed-elements` ir data koka ieraksts. Salīdzināti `sectionAccents.examples`, `sectionAccents.comparison` un `sectionAccents.variants` ar tā paša nosaukuma masīva garumu. Akcentu masīvs #870 ir tāds pats garums kā #869 visās 447 sadaļās, kur satura garums mainījās vai garumi jau nesakrita. Akcentu masīvs nav pārbīdīts līdz ar dzēstajām rindām.

Pēc noņemšanas akcentu garums nesakrīt ar satura garumu 255 sadaļās, 56 failos. Starpība akcents mīnus saturs: -1: 28, 1: 128, 2: 34, 3: 38, 4: 25, 5: 2. Sadaļas: comparison 169, examples 86. LV šajās pašās sadaļās jau nesakrīt 174 reizes. Pilna tabula ir `accents.json`.

| valoda | nesakritības #870 |
|---|---:|
| bg | 5 |
| bs | 1 |
| cs | 5 |
| da | 11 |
| en | 4 |
| es | 7 |
| et | 38 |
| fi | 9 |
| fr | 7 |
| gr | 8 |
| hr | 7 |
| hu | 8 |
| is | 8 |
| it | 8 |
| lb | 9 |
| lt | 10 |
| mk | 6 |
| nb | 8 |
| nl | 8 |
| nn | 9 |
| pl | 8 |
| pt | 8 |
| ro | 7 |
| ru | 6 |
| sk | 8 |
| sl | 8 |
| sq | 8 |
| sr | 6 |
| sv | 8 |
| tr | 6 |
| uk | 6 |

LV `a1-bringen`: examples saturs 3, akcenti 4; comparison saturs 5, akcenti 4.

`data/en/a1.js` `a1-ein` rindas 4645–4656 ir `study.comparison` ar 2 rindām (`ein Mann`, `ein Buch`). `sectionAccents.comparison` garums ir 4. `sectionAccents.examples` garums ir 4 un examples saturs ir 4.

`data/da/a1.js` `a1-bringen` rindas 3437–3442 ir `study.comparison` ar 1 rindu (`bringen`, piemērs `Bringst du Brot mit?`). `sectionAccents.comparison` garums ir 4. examples saturs ir 3, `sectionAccents.examples` garums ir 4.

`data/et/a2.js`: 24 mainītas kartītes. comparison akcents īsāks par saturu nav; 24 kartītēm comparison akcentu garums ir lielāks par saturu pēc noņemšanas. Pirms noņemšanas šīm kartītēm comparison garumi sakrita. LV comparison garumi šīm kartītēm sakrīt.

## Rezultāts

STAGE RESULT: PASS

