# OWNER LV papildinājumi — kopsavilkums

Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.

Datu bāze ir PR #866 galva `1071a13e3c6c534542aba7163e00208eaec80d4d`. origin/main `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d` šo PR vēl nav apvienojis. EXTRA rindas nav piemērotas. `OWNER_DECISION` un `OWNER_LV_TEXT` ir tukši.

## A. Pfahlbau

LV B2 indekss 1443 `de` = Pfahlbau. Pievienots `de_plural` = `die Pfahlbauten` 52 failos (`data/b2.js`, `www/data/b2.js` un 25 valodas abos kokos). Jau precīzi `die Pfahlbauten` bija et, fi, is, nb, nn, sv abos kokos (12 faili); tos diff neskar. Citi lauki nav mainīti.

Audio: lietotne nelieto `speechSynthesis`. Vācu vārdu atskaņo gatavs mp3 caur `new Audio()` un `a1AudioSrc` (`ui.js` 5657, `resolveAudioSrc` 5487). Daudzskaitļa fails ir `a1PluralAudioFile` (`ui.js` 5549–5559): `plural_`, tad artikuls, `_`, vienskaitļa lemma un `.mp3`. Pfahlbau tas ir jau esošs `plural_die_pfahlbau.mp3`, nevis fails ar daudzskaitļa tekstu. Jauna faila nav. Maksas API nav vajadzīgs.

| ceļš | baiti | SHA-256 |
|---|---:|---|
| `public/audio/plural_die_pfahlbau.mp3` | 22613 | `da4900728e6f3bb54729fad43a22b98f4511fb6dd64ae5e979b100a8649e8271` |
| `www/public/audio/plural_die_pfahlbau.mp3` | 16800 | `b524b0449e87da8e2632b0196c9d9fdb17cda602b96ad953f2338a6bc4117b53` |

## B. EXTRA grupas

Unikālas grupas: **185**. NEW_CONTENT 180. DUPLICATE_OF_LV_ROW 5. No tām ≥5 valodas: 26. SMALL_GROUP (1–4 valodas): 159, lapa `small-group.md`, bez ieteikuma. DE_VARIANT ir 84 rindās. ORDER_SHIFT: A1 1, pārējie 0; ORDER_SHIFT nav EXTRA.

`data/` un `www/data/` A1–C2 ir baiti identiski, tāpēc valoda skaitās vienu reizi un elements ir abos kokos.

Indeksa EXTRA (`study.examples[i].de`, `study.comparison[i].word`, abi koki) sakrīt ar auditu: A1 998, C1 74, C2 12. B2 indeksa EXTRA pēc Pfahlbau ir 0 (iepriekš 12 bija `de_plural`, ne Study). A2 un B1 indeksa EXTRA ir 0. DE izlīdzinājums tomēr atrod A2 43 un B1 20 grupas: tās ir jauns vācu teksts jau esošā indeksā, ko indeksa audits sauc par TEXT, nevis EXTRA. 998 nav unikālo elementu skaits: tas ir valoda × koks × papildu indeksa lauks. Unikālās grupas ir 185.

| līmenis | grupas | ≥5 valodas | SMALL_GROUP | valodas ar EXTRA |
|---|---:|---:|---:|---:|
| a1 | 85 | 18 | 67 | 30 |
| a2 | 43 | 6 | 37 | 8 |
| b1 | 20 | 1 | 19 | 23 |
| b2 | 0 | 0 | 0 | 0 |
| c1 | 31 | 1 | 30 | 7 |
| c2 | 6 | 0 | 6 | 2 |

A1 nav bs. C1: et, fi, gr, is, nb, nn, sv. C2: et, gr. A2: bg, es, et, hr, mk, ro, ru, sr.

Grupas skaits valodā (cik unikālu elementu valodā ir):

| valoda | a1 | a2 | b1 | b2 | c1 | c2 |
|---|---:|---:|---:|---:|---:|---:|
| bg | 16 | 6 | 0 | 0 | 0 | 0 |
| bs | 0 | 0 | 1 | 0 | 0 | 0 |
| cs | 8 | 0 | 1 | 0 | 0 | 0 |
| da | 25 | 0 | 1 | 0 | 0 | 0 |
| en | 7 | 0 | 0 | 0 | 0 | 0 |
| es | 17 | 3 | 2 | 0 | 0 | 0 |
| et | 22 | 28 | 2 | 0 | 16 | 3 |
| fi | 19 | 0 | 2 | 0 | 1 | 0 |
| fr | 16 | 0 | 1 | 0 | 0 | 0 |
| gr | 24 | 0 | 0 | 0 | 16 | 3 |
| hr | 17 | 6 | 0 | 0 | 0 | 0 |
| hu | 16 | 0 | 2 | 0 | 0 | 0 |
| is | 18 | 0 | 2 | 0 | 1 | 0 |
| it | 16 | 0 | 2 | 0 | 0 | 0 |
| lb | 18 | 0 | 2 | 0 | 0 | 0 |
| lt | 19 | 0 | 2 | 0 | 0 | 0 |
| mk | 16 | 6 | 0 | 0 | 0 | 0 |
| nb | 18 | 0 | 2 | 0 | 1 | 0 |
| nl | 16 | 0 | 2 | 0 | 0 | 0 |
| nn | 24 | 0 | 2 | 0 | 1 | 0 |
| pl | 16 | 0 | 2 | 0 | 0 | 0 |
| pt | 16 | 0 | 2 | 0 | 0 | 0 |
| ro | 16 | 6 | 1 | 0 | 0 | 0 |
| ru | 16 | 6 | 0 | 0 | 0 | 0 |
| sk | 16 | 0 | 2 | 0 | 0 | 0 |
| sl | 16 | 0 | 2 | 0 | 0 | 0 |
| sq | 16 | 0 | 2 | 0 | 0 | 0 |
| sr | 34 | 6 | 0 | 0 | 0 | 0 |
| sv | 18 | 0 | 2 | 0 | 1 | 0 |
| tr | 16 | 0 | 2 | 0 | 0 | 0 |
| uk | 16 | 0 | 0 | 0 | 0 | 0 |

Atrastie masīvi: `study.examples`, `study.comparison`, `study.variants`. `study.words`, `comparisonTable`, `items`, `terms`, `matrix`, `comparisonRows` datos nav. `study.tip` ir tikai `text`; skatīt `tip-text-only.md`. Tie nav vācu kopējamās rindas.

## 10 NEW_CONTENT (≥5 valodas)

| id | līmenis | kartīte | ceļš | klase | valodas | vācu lauki | history |
|---|---|---|---|---|---:|---|---|
| E0001 | a1 | a1-bringen | study.examples | NEW_CONTENT | 29 | de=Ich nehme das Buch. | STILL_IN_LV addba18fc2b96fe2233756d270144aa732799f6a 2026-08-05T17:27:40+00:00 A1 audit block 2: bringen, Bröt |
| E0003 | a1 | a1-klein-study | study.examples | NEW_CONTENT | 29 | de=Das Kind ist klein. | REMOVED dfb9a177aeac557cd31b17545800dab213e71100 2026-08-05T17:05:43+00:00 A1 audit block 1: fix aber, baden,  |
| E0005 | a1 | a1-bis | study.comparison | NEW_CONTENT+DE_VARIANT | 28 | word=bis jetzt, example_de=Bis jetzt ist alles gut. | REMOVED dfb9a177aeac557cd31b17545800dab213e71100 2026-08-05T17:05:43+00:00 A1 audit block 1: fix aber, baden,  |
| E0006 | a1 | a1-bitte | study.examples | NEW_CONTENT | 28 | de=Die Bitte ist wichtig. | REMOVED dfb9a177aeac557cd31b17545800dab213e71100 2026-08-05T17:05:43+00:00 A1 audit block 1: fix aber, baden,  |
| E0007 | a1 | a1-bitte | study.examples | NEW_CONTENT | 28 | de=Ich habe eine Bitte. | STILL_IN_LV 12321968e70809f831a09a9547c593e48f43fabb 2026-07-16T19:44:11+00:00 Split all comparisonStudy cards |
| E0008 | a1 | a1-bitte | study.examples | NEW_CONTENT | 28 | de=Kann ich bitte fragen? | REMOVED dfb9a177aeac557cd31b17545800dab213e71100 2026-08-05T17:05:43+00:00 A1 audit block 1: fix aber, baden,  |
| E0010 | a1 | a1-es | study.examples | NEW_CONTENT | 28 | de=Es schneit. | REMOVED a82681c93288f3015ecf754885713f76e6b48ad2 2026-08-05T17:31:11+00:00 A1 audit block 2C: erst, etwas, es |
| E0011 | a1 | a1-finden | study.comparison | NEW_CONTENT+DE_VARIANT | 28 | word=glauben, example_de=Ich glaube, er kommt. | REMOVED ec708bfbbe11be0a7045f7c88dff3b7c034323fa 2026-08-05T18:04:06+00:00 A1-LF-001/002/003: bringen, Brötche |
| E0012 | a1 | a1-finden | study.comparison | NEW_CONTENT+DE_VARIANT | 28 | word=suchen, example_de=Ich suche den Schlüssel. | REMOVED ec708bfbbe11be0a7045f7c88dff3b7c034323fa 2026-08-05T18:04:06+00:00 A1-LF-001/002/003: bringen, Brötche |
| E0013 | a1 | a1-bitte-study | study.examples | NEW_CONTENT | 27 | de=Die Bitte ist wichtig. | REMOVED dfb9a177aeac557cd31b17545800dab213e71100 2026-08-05T17:05:43+00:00 A1 audit block 1: fix aber, baden,  |

## DUPLICATE_OF_LV_ROW

Klasē ir 5 rindas.

| id | līmenis | kartīte | ceļš | klase | valodas | vācu lauki | history |
|---|---|---|---|---|---:|---|---|
| E0002 | a1 | a1-finden | study.examples | DUPLICATE_OF_LV_ROW | 29 | de=Wie findest du den Film? | STILL_IN_LV 2920011112e9680f9f72b5d1ec4e4494a2d5271c 2026-07-03T17:50:07+02:00 chore: sakārto repozitoriju — p |
| E0004 | a1 | a1-klein-study | study.examples | DUPLICATE_OF_LV_ROW | 29 | de=Ich habe eine kleine Tasche. | STILL_IN_LV 509b81d7af1841b81d9215ed32d1431fb49a3017 2026-07-23T17:52:22+00:00 Fix duplicate cross-level words |
| E0009 | a1 | a1-es | study.examples | DUPLICATE_OF_LV_ROW | 28 | de=Es regnet. | STILL_IN_LV a82681c93288f3015ecf754885713f76e6b48ad2 2026-08-05T17:31:11+00:00 A1 audit block 2C: erst, etwas, |
| E0014 | a1 | a1-bitte-study | study.examples | DUPLICATE_OF_LV_ROW | 27 | de=Ich habe eine Bitte. | STILL_IN_LV 12321968e70809f831a09a9547c593e48f43fabb 2026-07-16T19:44:11+00:00 Split all comparisonStudy cards |
| E0086 | a1 | a1-probieren | study.comparison | SMALL_GROUP/DUPLICATE_OF_LV_ROW+DE_VARIANT | 1 | word=anprobieren, example_de=Ich probiere die Jacke an. |  |

## 10 SMALL_GROUP

Bez ieteikuma. Pilns saraksts: `small-group.md`.

| id | līmenis | kartīte | ceļš | klase | valodas | vācu lauki | history |
|---|---|---|---|---|---:|---|---|
| E0027 | b1 | b1-empfangen | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 4 | word=bekommen, example_de=Ich bekomme eine E-Kirja. |  |
| E0028 | b1 | b1-empfangen | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 4 | word=bekommen, example_de=Ich bekomme eine E-mail. |  |
| E0029 | b1 | b1-richten | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 4 | word=schicken, example_de=Ich schicke dir eine E-Kirja. |  |
| E0030 | a1 | a1-probieren | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 3 | word=Anprobieren, example_de=Ich probiere die Jacke an. |  |
| E0031 | a1 | a1-probieren | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 3 | word=Testen, example_de=Ich probiere die Jacke an. |  |
| E0032 | a1 | a1-liter | study.examples | SMALL_GROUP/NEW_CONTENT | 2 | de=Ich brauche einen Liter Milch. |  |
| E0033 | b1 | b1-empfangen | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 2 | word=bekommen, example_de=Ich bekomme eine E-Pastu. |  |
| E0034 | b1 | b1-empfangen | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 2 | word=bekommen, example_de=Ich bekomme eine E-kirja. |  |
| E0035 | b1 | b1-empfangen | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 2 | word=bekommen, example_de=Ich bekomme eine E-pastu. |  |
| E0036 | b1 | b1-empfangen | study.comparison | SMALL_GROUP/NEW_CONTENT+DE_VARIANT | 2 | word=bekommen, example_de=Ich bekomme eine E-posta aldım. |  |

## a1-bis

E0005. Vācu lauki: word `bis jetzt`, example_de `Bis jetzt ist alles gut.` Tulkojuma lauki: `meaning`, `example_translation`. Vēsture: REMOVED `dfb9a177aeac557cd31b17545800dab213e71100` 2026-08-05 `A1 audit block 1: fix aber, baden, bis, an, aus, aufs, besuchen, Besuch, sprechen, klein, auch, bei, bitte`. `OWNER_LV_TEXT` tukšs. `OWNER_LV_TEXT_PROPOSED`: meaning `līdz šim, līdz šai dienai`, example translation `Līdz šim viss ir labi.` Statuss: PROPOSED, nav apstiprināts.

DE_VARIANT: ro word `Bis jetzt` (E0045); ru word `Бис Джетц` (E0046). Tas pats example_de. bs ceturtās rindas nav.

| language | rows | fourth_word | fourth_example_de |
|---|---:|---|---|
| lv | 3 |  |  |
| bg | 4 | bis jetzt | Bis jetzt ist alles gut. |
| bs | 3 |  |  |
| cs | 4 | bis jetzt | Bis jetzt ist alles gut. |
| da | 4 | bis jetzt | Bis jetzt ist alles gut. |
| en | 4 | bis jetzt | Bis jetzt ist alles gut. |
| es | 4 | bis jetzt | Bis jetzt ist alles gut. |
| et | 4 | bis jetzt | Bis jetzt ist alles gut. |
| fi | 4 | bis jetzt | Bis jetzt ist alles gut. |
| fr | 4 | bis jetzt | Bis jetzt ist alles gut. |
| gr | 4 | bis jetzt | Bis jetzt ist alles gut. |
| hr | 4 | bis jetzt | Bis jetzt ist alles gut. |
| hu | 4 | bis jetzt | Bis jetzt ist alles gut. |
| is | 4 | bis jetzt | Bis jetzt ist alles gut. |
| it | 4 | bis jetzt | Bis jetzt ist alles gut. |
| lb | 4 | bis jetzt | Bis jetzt ist alles gut. |
| lt | 4 | bis jetzt | Bis jetzt ist alles gut. |
| mk | 4 | bis jetzt | Bis jetzt ist alles gut. |
| nb | 4 | bis jetzt | Bis jetzt ist alles gut. |
| nl | 4 | bis jetzt | Bis jetzt ist alles gut. |
| nn | 4 | bis jetzt | Bis jetzt ist alles gut. |
| pl | 4 | bis jetzt | Bis jetzt ist alles gut. |
| pt | 4 | bis jetzt | Bis jetzt ist alles gut. |
| ro | 4 | Bis jetzt | Bis jetzt ist alles gut. |
| ru | 4 | Бис Джетц | Bis jetzt ist alles gut. |
| sk | 4 | bis jetzt | Bis jetzt ist alles gut. |
| sl | 4 | bis jetzt | Bis jetzt ist alles gut. |
| sq | 4 | bis jetzt | Bis jetzt ist alles gut. |
| sr | 4 | bis jetzt | Bis jetzt ist alles gut. |
| sv | 4 | bis jetzt | Bis jetzt ist alles gut. |
| tr | 4 | bis jetzt | Bis jetzt ist alles gut. |
| uk | 4 | bis jetzt | Bis jetzt ist alles gut. |

## Kods

`ui.js` un `www/ui.js` lasa `study.examples`, `study.comparison`, `study.words`, `study.comparisonTable` ar `.map` un `.length` (8199, 8207, 8214, 8431). `sectionAccentRules` ir 8060: `rules[index]`, ja masīvs īsāks, akcents iztrūkst, renderis neapstājas. `languages/*.js` fiksētu indeksu nelasa. Saraksts: `code-index.md`.

## Vārti

Pfahlbau `de_plural` EXTRA 12 → 0. Kopējais EXTRA 1098 → 1086. TEXT, MISSING, ORDER, UNICODE_ONLY nemainās. EMPTY_PLURAL 493 → 492. FINDING 80, REVIEW 51. Skatīt `verification.md`.
