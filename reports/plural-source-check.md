# Plural source check

Šis audits pārbauda daudzskaitli pret Duden un Goethe-Institut. Verdikts NOT_CHECKED vai NOT_IN_SOURCE nenozīmē, ka forma ir pareiza.

DE lauki netiek laboti. Avota forma atskaitē ir atrastā forma, nevis ieteiktais labojums. Šķirkļu teksts repozitorijā netiek glabāts.

## Izdalīšanas noteikumi

1. Duden URL ir /rechtschreibung/<slug> (atstarpe → _, äöüß → ae/oe/ue/ss). HTTP 200 un h1 = lemma ir šķirklis. HTTP 404 nav šķirklis; citus šķirkļus dod sitemap-lexeme saites <slug> un <slug>_.
2. Genus nāk no Wortart: maskulin→der, feminin→die, Neutrum→das. Vairāki dzimumi paliek kopa; de_article atbilst vienam no tiem. Pluralwort → PLURAL_ONLY.
3. Daudzskaitļa forma nāk tikai no 'Plural:' vai 'Plural (…):' pirmā gramatikas <p> un Bedeutung Grammatik rindās. Leņķiekavas, IPA un iekavas noņem. [s]/[n] dod abus rakstījumus. '(Plural selten)' → PLURAL_RARE. Piemēri: Erlaubnis → Erlaubnisse; Pfahlbau → Pfahlbauten; Beton → Betons, Betone.
4. 'nur im Plural' vai Pluralwort ir nominatīva daudzskaitlis = lemma, artikuls die. Piemērs: Eltern, Trümmer. Šķirklis ar slug frueher un formu lemma+n ir datīvs (Trümmern) un netiek ņemts, ja ir aktuālais šķirklis.
5. 'Plural:' forma bez 'ohne Plural' ir PLURAL_FOUND. Piemērs: der Band → Bände. das Band piezīmes 'Plural: Bänder' un 'Plural: Bande' paliek kopa. Ģenitīva aste (Blute, Bargelds) nav daudzskaitlis.
6. Nav 'Plural:' formas un rinda ir tikai dzimte un ģenitīvs (Bargeld, Gepäck, Kosmetik) → NO_PLURAL_LISTED.
7. Forma un 'ohne Plural' kopā ir NEEDS_SOURCE_REVIEW. Piemēri: Schaden, Geld, Anbau. Bez 'Plural:' etiķetes, bet ar (Sorten:), (Arten:), (Fachsprache) vai vārdu Plural (Blut; Sport) → NEEDS_SOURCE_REVIEW. Aste netiek glabāta kā forma.
8. Vairāki šķirkļi (Band der/das/die): patur Genus = de_article. Nulle vai vairāk nekā viens → AMBIGUOUS, visi uzskaitīti.
9. Goethe: A2/B1 'der Anfang, ¨-e'; 'das Fenster, -' = daudzskaitlis vienāds ar vienskaitli; '(Sg.)' = nav daudzskaitļa; '(Pl.)' = tikai daudzskaitlis. SD1 'der Bruder, -ü', 'das Buch, -ü, er'; '–' (das Brötchen, –) = nav daudzskaitļa. Fit1 'r/e/s' = der/die/das un 'ü/-e'. Nav sarakstā → NOT_IN_SOURCE.
10. Salīdzinājums ar de_plural ir determinēts. Kešs ir /tmp/plural-cache. Repozitorijā paliek lemma, artikuls, forma, verdikts, avota ID, URL vai PDF lappuse un datums.

```text
MASTER VERSION: 1.18
AUDIT MODE: LV_DE_PLURAL_SOURCE_CHECK
ORIGIN_MAIN_SHA: f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d
BRANCH: cursor/plural-leakage-audit-f86b
DATE: 2026-10-03
DATASET_PRODUCTION_SHA/BLOB: 508ee76ef05e1bfae1f658ce3c9deceba40f430917de670dc746320d71dc191c
LAST FINAL CLOSURE: NOT_RECORDED_FOR_LV_DE_WORDLIST
LAST FINAL CLOSURE MAIN SHA:
LAST FINAL CLOSURE DATASET BLOB:
UNMERGED CLOSURE/REPAIR FOUND: NOT_CHECKED
BASELINE STATUS: PASS
OWNER HISTORY AVAILABLE: NO
OWNER HISTORY FILES LOADED: 0
OWNER APPROVED FIELDS TOTAL/CHECKED/MATCHING/DRIFTED: 0/0/0/0
OWNER HISTORY GATE: NOT_RUN
RAW AUDIT HISTORY GATE: NOT_APPLICABLE
DISCOVERY CHURN RATE: 0
AUDIT_DISCOVERY_NON_REPRODUCIBILITY: 0
DE READ-ONLY: YES
```

## Avoti

| avots | statuss | URL | SHA-256 | lietvārdi |
|---|---|---|---|---:|
| Duden | LOOKUP | https://www.duden.de/rechtschreibung/<slug> |  |  |
| Goethe-A1-Fit1 | LOADED | https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A1_Fit1_Wortliste.pdf | cf09cb501f80d780a8b8d07f26cb8766be0e9a9d9f4a33f4553c0fb7b734d643 | 278 |
| Goethe-A1-SD1 | LOADED | https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_A1_Start_Deutsch_1_Wortliste.pdf | 45fb648bc0ac02338f7898cae065953e320ab72ed0c14e13e0deffe6f1c5d64e | 176 |
| Goethe-A2 | LOADED | https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf | c9ca0c96c4adb252f253e1cc648b95ea031e417911565db07f7102bccdbdb19e | 516 |
| Goethe-B1 | LOADED | https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf | 8860f7f0c916831b2365f66239a3ceba3be81ddba28e1224846ca8420807fe42 | 1447 |
| Goethe-B2 | NOT_AVAILABLE |  |  | 0 |

## Kontrolkopa

| lemma | Duden artikuls | Duden daudzskaitlis | Duden verdikts | Goethe artikuls | Goethe daudzskaitlis | Goethe verdikts |
|---|---|---|---|---|---|---|
| Schaden | der | Schäden | NEEDS_SOURCE_REVIEW | der | Schäden | PLURAL_FOUND |
| Geld | das | Gelder | NEEDS_SOURCE_REVIEW | das |  | NO_PLURAL_LISTED |
| Pfahlbau | der | Pfahlbauten | PLURAL_FOUND |  |  | NOT_IN_SOURCE |
| Anbau | der | Anbauten | NEEDS_SOURCE_REVIEW |  |  | NOT_IN_SOURCE |
| Erlaubnis | die | Erlaubnisse | PLURAL_RARE | die |  | NO_PLURAL_LISTED |
| Jagderlaubnis |  |  | NOT_IN_SOURCE |  |  | NOT_IN_SOURCE |
| Blut | das |  | NEEDS_SOURCE_REVIEW |  |  | NOT_IN_SOURCE |
| Gepäck | das |  | NO_PLURAL_LISTED | das |  | NO_PLURAL_LISTED |
| Eltern | die | Eltern | PLURAL_ONLY | die | Eltern | PLURAL_ONLY |
| Ferien | die | Ferien | PLURAL_ONLY | die | Ferien | PLURAL_ONLY |
| Kosmetik | die |  | NO_PLURAL_LISTED | die |  | NO_PLURAL_LISTED |
| Band | der:Band_Buch; das:Band_Gewebestreifen; die:Band_Musikergruppe | der:Bände:PLURAL_FOUND; das:Bänder/Bande:PLURAL_FOUND; die:Bands:PLURAL_FOUND | AMBIGUOUS | die | Bands | PLURAL_FOUND |
| See | der:See_Binnengewaesser; die:See_Meer | der:Seen:PLURAL_FOUND; die:Seen:NEEDS_SOURCE_REVIEW | AMBIGUOUS | der | Seen | PLURAL_FOUND |
| Tor | der:Tor_Dummkopf; das:Tor_Treffer | der:Toren:PLURAL_FOUND; das:Tore:PLURAL_FOUND | AMBIGUOUS | das | Tore | PLURAL_FOUND |

## Kopsavilkums

Rindas: 506. CHECK_COMPLETENESS: PASS.

| salīdzinājums | skaits |
|---|---:|
| AMBIGUOUS | 19 |
| CONSISTENT | 236 |
| MISSING_PLURAL_IN_DATA | 60 |
| NEEDS_SOURCE_REVIEW | 109 |
| NOT_IN_SOURCE | 51 |
| PLURAL_FORM_MISMATCH | 1 |
| REVIEW_RARE_PLURAL | 22 |
| SOURCES_DISAGREE | 8 |

| Duden | skaits |
|---|---:|
| AMBIGUOUS | 19 |
| NEEDS_SOURCE_REVIEW | 114 |
| NOT_IN_SOURCE | 53 |
| NO_PLURAL_LISTED | 199 |
| PLURAL_FOUND | 75 |
| PLURAL_ONLY | 24 |
| PLURAL_RARE | 22 |

| Goethe | skaits |
|---|---:|
| AMBIGUOUS | 1 |
| NEEDS_SOURCE_REVIEW | 1 |
| NOT_IN_SOURCE | 441 |
| NO_PLURAL_LISTED | 46 |
| PLURAL_FOUND | 10 |
| PLURAL_ONLY | 7 |

ARTICLE_MISMATCH rindas: 0.

## Goethe saraksti

| saraksts | lietvārdi sarakstā | pārbaudītie vārdi, kas atrasti |
|---|---:|---:|
| Goethe-A1-Fit1 | 278 | 37 |
| Goethe-A1-SD1 | 176 | 6 |
| Goethe-A2 | 516 | 52 |
| Goethe-B1 | 1447 | 12 |
| Goethe-B2 | 0 | 0 |

## MISSING_PLURAL_IN_DATA

Skaits: 60.

### IDENTICAL_TO_SINGULAR

Skaits: 15. Piemēri: 10.

- A1[306] de=Jeans de_article=die de_plural= duden=PLURAL_FOUND:Jeans goethe=PLURAL_ONLY:Jeans note= duden_quote="die Jeans; Genitiv: der Jeans, Plural: die Jeans" goethe_page=Goethe-A1-Fit1 p.14 only Goethe-A2 p.18 only Goethe-B1 p.52 only
- A1[418] de=Morgen de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW:Morgen goethe=PLURAL_FOUND:Morgen note=GOETHE_LISTS_PLURAL duden_quote="der Morgen; Genitiv: des Morgens, Plural: die Morgen" goethe_page=Goethe-A1-Fit1 p.8 -
- A1[453] de=November de_article=der de_plural= duden=PLURAL_FOUND:November goethe=NOT_IN_SOURCE: note= duden_quote="der November; Genitiv: des November[s], Plural: die November" goethe_page=
- A1[464] de=Oktober de_article=der de_plural= duden=PLURAL_FOUND:Oktober goethe=NOT_IN_SOURCE: note= duden_quote="der Oktober; Genitiv: des Oktober[s], Plural: die Oktober" goethe_page=
- A1[546] de=September de_article=der de_plural= duden=PLURAL_FOUND:September goethe=NOT_IN_SOURCE: note= duden_quote="der September; Genitiv: des September[s], Plural: die September" goethe_page=
- A2[93] de=Aschenputtel de_article=das de_plural= duden=PLURAL_FOUND:Aschenputtel goethe=NOT_IN_SOURCE: note= duden_quote="das Aschenputtel; Genitiv: des Aschenputtels, Plural: die Aschenputtel" goethe_page=
- A2[1588] de=Wiedersehen de_article=das de_plural= duden=PLURAL_FOUND:Wiedersehen goethe=PLURAL_FOUND:Wiedersehen note= duden_quote="das Wiedersehen; Genitiv: des Wiedersehens, Plural: die Wiedersehen" goethe_page=Goethe-A1-Fit1 p.20 - Goethe-A2 p.30 -
- B1[1773] de=Lidschatten de_article=der de_plural= duden=PLURAL_FOUND:Lidschatten goethe=NOT_IN_SOURCE: note= duden_quote="der Lidschatten; Genitiv: des Lidschattens, Plural: die Lidschatten" goethe_page=
- B1[2495] de=Schneetreiben de_article=das de_plural= duden=PLURAL_FOUND:Schneetreiben goethe=NOT_IN_SOURCE: note= duden_quote="das Schneetreiben; Genitiv: des Schneetreibens, Plural: die Schneetreiben" goethe_page=
- B1[2868] de=Tauwetter de_article=das de_plural= duden=PLURAL_FOUND:Tauwetter goethe=NOT_IN_SOURCE: note= duden_quote="das Tauwetter; Genitiv: des Tauwetters, Plural: die Tauwetter" goethe_page=

### TECHNICAL_OR_MASS

Skaits: 1. Piemēri: 1.

- B1[402] de=Beton de_article=der de_plural= duden=PLURAL_FOUND:Betons | Betone goethe=NOT_IN_SOURCE: note= duden_quote="der Beton; Genitiv: des Betons, Plural: (Arten:) die Betons, besonders süddeutsch, österreichisch Betone [beˈtoːnə]" goethe_page=

### NORMAL

Skaits: 44. Piemēri: 10.

- A1[161] de=Ende de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Enden goethe=PLURAL_FOUND:Enden note=GOETHE_LISTS_PLURAL duden_quote="das Ende; Genitiv: des Endes, Plural: die Enden" goethe_page=Goethe-A2 p.13 -n
- A1[330] de=Kaffee de_article=der de_plural= duden=PLURAL_FOUND:Kaffees goethe=NEEDS_SOURCE_REVIEW:Kaffees note= duden_quote="der Kaffee; Genitiv: des Kaffees, Plural: die Kaffees" goethe_page=Goethe-A1-Fit1 p.14 none Goethe-A2 p.18 -s
- A1[695] de=Urlaub de_article=der de_plural= duden=PLURAL_FOUND:Urlaube goethe=PLURAL_FOUND:Urlaube note= duden_quote="der Urlaub; Genitiv: des Urlaub[e]s, Plural: die Urlaube" goethe_page=Goethe-A2 p.28 -e Goethe-B1 p.91 -e
- A2[265] de=Blumenkohl de_article=der de_plural= duden=PLURAL_FOUND:Blumenkohle goethe=NOT_IN_SOURCE: note= duden_quote="der Blumenkohl; Genitiv: des Blumenkohls, Blumenkohles, Plural: die Blumenkohle" goethe_page=
- A2[343] de=Dill de_article=der de_plural= duden=PLURAL_FOUND:Dille goethe=NOT_IN_SOURCE: note= duden_quote="der Dill; Genitiv: des Dills, Plural: die Dille" goethe_page=
- A2[613] de=Gymnastik de_article=die de_plural= duden=PLURAL_FOUND:Gymnastiken goethe=NOT_IN_SOURCE: note= duden_quote="die Gymnastik; Genitiv: der Gymnastik, Plural: die Gymnastiken" goethe_page=
- A2[793] de=Ketchup de_article=der de_plural= duden=PLURAL_FOUND:Ketchups goethe=NOT_IN_SOURCE: note= duden_quote="der oder das Ketchup; Genitiv: des Ketchup[s], Plural: die Ketchups" goethe_page=
- A2[1279] de=Senf de_article=der de_plural= duden=PLURAL_FOUND:Senfe goethe=NOT_IN_SOURCE: note= duden_quote="der Senf; Genitiv: des Senf[e]s, Plural: die Senfe" goethe_page=
- A2[1561] de=Wäsche de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Wäschen goethe=PLURAL_FOUND:Wäschen note=GOETHE_LISTS_PLURAL duden_quote="die Wäsche; Genitiv: der Wäsche, Plural: die Wäschen" goethe_page=Goethe-A2 p.30 -n
- A2[1579] de=Werbung de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Werbungen goethe=PLURAL_FOUND:Werbungen note=GOETHE_LISTS_PLURAL duden_quote="die Werbung; Genitiv: der Werbung, Plural: die Werbungen" goethe_page=Goethe-B1 p.97 -en

Apakškategoriju summa ir vienāda ar MISSING_PLURAL_IN_DATA. Pilnās rindas ir CSV.

## PLURAL_FORM_MISMATCH

Skaits: 1.

- B1[1597] de=Kosmetik de_article=die de_plural=die Kosmetika duden=NO_PLURAL_LISTED: goethe=NO_PLURAL_LISTED: note= duden_quote=die Kosmetik; Genitiv: der Kosmetik goethe_page=Goethe-A2 p.19 none

## SOURCES_DISAGREE

Skaits: 8.

- A1[11] de=Alter de_article=das de_plural= duden=PLURAL_FOUND:Alter goethe=NO_PLURAL_LISTED: note= duden_quote="das Alter; Genitiv: des Alters, Plural: die Alter" goethe_page=Goethe-A1-Fit1 p.9 none Goethe-A2 p.8 none
- A1[335] de=Käse de_article=der de_plural= duden=PLURAL_FOUND:Käse goethe=NO_PLURAL_LISTED: note= duden_quote="der Käse; Genitiv: des Käses, Plural: die Käse" goethe_page=Goethe-A1-Fit1 p.14 none Goethe-A2 p.18 none
- A1[405] de=Milch de_article=die de_plural= duden=PLURAL_FOUND:Milche | Milchen goethe=NO_PLURAL_LISTED: note= duden_quote="die Milch; Genitiv: der Milch, Plural: (Fachsprache:) die Milche[n]" goethe_page=Goethe-A1-Fit1 p.16 none Goethe-A2 p.21 none
- A1[520] de=Schokolade de_article=die de_plural= duden=PLURAL_FOUND:Schokoladen goethe=NO_PLURAL_LISTED: note= duden_quote="die Schokolade; Genitiv: der Schokolade, Plural: die Schokoladen" goethe_page=Goethe-A1-Fit1 p.18 none
- A1[692] de=Gemüse de_article=das de_plural= duden=PLURAL_FOUND:Gemüse goethe=NO_PLURAL_LISTED: note= duden_quote="das Gemüse; Genitiv: des Gemüses, Plural: die Gemüse" goethe_page=Goethe-A1-Fit1 p.13 none Goethe-A2 p.16 none
- A2[666] de=Himmel de_article=der de_plural= duden=PLURAL_FOUND:Himmel goethe=NO_PLURAL_LISTED: note= duden_quote="der Himmel; Genitiv: des Himmels, Plural: die Himmel" goethe_page=Goethe-A2 p.17 none
- A2[1404] de=Stress de_article=der de_plural= duden=PLURAL_FOUND:Stresse goethe=NO_PLURAL_LISTED: note= duden_quote="der Stress; Genitiv: des Stresses, Plural: die Stresse" goethe_page=Goethe-A2 p.27 none
- B1[867] de=Fasching de_article=der de_plural= duden=PLURAL_FOUND:Faschinge | Faschings goethe=PLURAL_FOUND:Fasching note= duden_quote="der Fasching; Genitiv: des Faschings, Plural: die Faschinge und Faschings" goethe_page=Goethe-B1 p.39 -

## REVIEW_RARE_PLURAL

Skaits: 22.

- A1[41] de=April de_article=der de_plural= duden=PLURAL_RARE:Aprile goethe=NOT_IN_SOURCE: note= duden_quote="der April; Genitiv: des April[s], Plural: die Aprile (Plural selten)" goethe_page=
- A1[136] de=Dezember de_article=der de_plural= duden=PLURAL_RARE:Dezember goethe=NOT_IN_SOURCE: note= duden_quote="der Dezember; Genitiv: des Dezember[s], Plural: die Dezember (Plural selten)" goethe_page=
- A1[178] de=Februar de_article=der de_plural= duden=PLURAL_RARE:Februare goethe=NOT_IN_SOURCE: note= duden_quote="der Februar; Genitiv: des Februar[s], Plural: die Februare (Plural selten)" goethe_page=
- A1[298] de=Januar de_article=der de_plural= duden=PLURAL_RARE:Januare goethe=NOT_IN_SOURCE: note= duden_quote="der Januar; Genitiv: des Januar[s], Plural: die Januare (Plural selten)" goethe_page=
- A1[305] de=Juni de_article=der de_plural= duden=PLURAL_RARE:Junis goethe=NOT_IN_SOURCE: note= duden_quote="der Juni; Genitiv: des Juni[s], Plural: die Junis (Plural selten)" goethe_page=
- A1[338] de=Kleidung de_article=die de_plural= duden=PLURAL_RARE:Kleidungen goethe=NO_PLURAL_LISTED: note= duden_quote="die Kleidung; Genitiv: der Kleidung, Plural: die Kleidungen (Plural selten)" goethe_page=Goethe-A2 p.19 none
- A1[389] de=Mai de_article=der de_plural= duden=PLURAL_RARE:Maie goethe=NOT_IN_SOURCE: note= duden_quote="der Mai; Genitiv: des Mai[e]s und Mai, dichterisch auch noch: Maien, Plural: die Maie (Plural …" goethe_page=
- A1[396] de=März de_article=der de_plural= duden=PLURAL_RARE:Märze goethe=NOT_IN_SOURCE: note= duden_quote="der März; Genitiv: des März[es], (dichterisch auch noch:) Märzen, Plural: die Märze (Plural selten)" goethe_page=
- A1[689] de=Appetit de_article=der de_plural= duden=PLURAL_RARE:Appetite goethe=NO_PLURAL_LISTED: note= duden_quote="der Appetit; Genitiv: des Appetit[e]s, Plural: die Appetite (Plural selten)" goethe_page=Goethe-A1-Fit1 p.9 none
- A2[217] de=Beginn de_article=der de_plural= duden=PLURAL_RARE:Beginne goethe=NOT_IN_SOURCE: note= duden_quote="der Beginn; Genitiv: des Beginn[e]s, Plural: die Beginne (Plural selten)" goethe_page=
- A2[426] de=Erlaubnis de_article=die de_plural= duden=PLURAL_RARE:Erlaubnisse goethe=NO_PLURAL_LISTED: note= duden_quote="die Erlaubnis; Genitiv: der Erlaubnis, Plural: die Erlaubnisse (Plural selten)" goethe_page=Goethe-A2 p.14 none
- A2[488] de=Fieber de_article=das de_plural= duden=PLURAL_RARE:Fieber goethe=NO_PLURAL_LISTED: note= duden_quote="das Fieber; Genitiv: des Fiebers, Plural: die Fieber (Plural selten)" goethe_page=Goethe-A2 p.14 none
- A2[697] de=Husten de_article=der de_plural= duden=PLURAL_RARE:Husten goethe=NOT_IN_SOURCE: note= duden_quote="der Husten; Genitiv: des Hustens, Plural: die Husten (Plural selten)" goethe_page=
- A2[811] de=Kleidung de_article=die de_plural= duden=PLURAL_RARE:Kleidungen goethe=NO_PLURAL_LISTED: note= duden_quote="die Kleidung; Genitiv: der Kleidung, Plural: die Kleidungen (Plural selten)" goethe_page=Goethe-A2 p.19 none
- A2[1111] de=Publikum de_article=das de_plural= duden=PLURAL_RARE:Publika goethe=NOT_IN_SOURCE: note= duden_quote="das Publikum; Genitiv: des Publikums, Plural: die Publika (Plural selten)" goethe_page=
- A2[1448] de=Tod de_article=der de_plural= duden=PLURAL_RARE:Tode goethe=NOT_IN_SOURCE: note= duden_quote="der Tod; Genitiv: des Tod[e]s, Plural: die Tode (Plural selten)" goethe_page=
- A2[1502] de=Unterricht de_article=der de_plural= duden=PLURAL_RARE:Unterrichte goethe=NO_PLURAL_LISTED: note= duden_quote="der Unterricht; Genitiv: des Unterricht[e]s, Plural: die Unterrichte (Plural selten)" goethe_page=Goethe-A1-Fit1 p.19 none Goethe-A2 p.28 none
- B1[652] de=Eifersucht de_article=die de_plural= duden=PLURAL_RARE:Eifersüchte goethe=NOT_IN_SOURCE: note= duden_quote="die Eifersucht; Genitiv: der Eifersucht, Plural: die Eifersüchte (Plural selten)" goethe_page=
- B1[1175] de=Hagel de_article=der de_plural= duden=PLURAL_RARE:Hagel goethe=NOT_IN_SOURCE: note= duden_quote="der Hagel; Genitiv: des Hagels, Plural: die Hagel (Plural selten)" goethe_page=
- B1[2409] de=Schande de_article=die de_plural= duden=PLURAL_RARE:Schanden goethe=NOT_IN_SOURCE: note= duden_quote="die Schande; Genitiv: der Schande, Plural: die Schanden (Plural selten)" goethe_page=
- B2[1019] de=Götzendienst de_article=der de_plural= duden=PLURAL_RARE:Götzendienste goethe=NOT_IN_SOURCE: note= duden_quote="der Götzendienst; Genitiv: des Götzendiensts, Götzendienstes, Plural: die Götzendienste (Plural selten)" goethe_page=
- C1[451] de=Rechenschaft de_article=die de_plural= duden=PLURAL_RARE:Rechenschaften goethe=NOT_IN_SOURCE: note= duden_quote="die Rechenschaft; Genitiv: der Rechenschaft, Plural: die Rechenschaften (Plural selten)" goethe_page=

## NEEDS_SOURCE_REVIEW

Skaits: 109.

- A1[2] de=Wasser de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Wasser | Wässer goethe=NO_PLURAL_LISTED: note= duden_quote="das Wasser; Genitiv: des Wassers, Plural: die Wasser und Wässer" goethe_page=Goethe-A1-Fit1 p.20 none Goethe-A2 p.30 none
- A1[120] de=Butter de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NO_PLURAL_LISTED: note= duden_quote=die Butter; Genitiv: der Butter (ohne Plural) goethe_page=Goethe-A2 p.11 none
- A1[157] de=Eis de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NO_PLURAL_LISTED: note= duden_quote=das Eis; Genitiv: des Eises (ohne Plural) goethe_page=Goethe-A1-Fit1 p.11 none Goethe-A2 p.13 none
- A1[229] de=Geld de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Gelder goethe=NO_PLURAL_LISTED: note= duden_quote="das Geld; Genitiv: des Geld[e]s, Plural: die Gelder" goethe_page=Goethe-A1-Fit1 p.13 none Goethe-A2 p.16 none
- A1[244] de=Glück de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Glücke goethe=NO_PLURAL_LISTED: note= duden_quote="das Glück; Genitiv: des Glücks, Glückes, Plural: die Glücke (Plural selten)" goethe_page=Goethe-A1-Fit1 p.13 none Goethe-A2 p.16 none
- A1[374] de=Liebe de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Lieben goethe=NOT_IN_SOURCE: note= duden_quote="die Liebe; Genitiv: der Liebe, Plural: die Lieben" goethe_page=
- A1[422] de=Musik de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Musiken goethe=NO_PLURAL_LISTED: note= duden_quote="die Musik; Genitiv: der Musik, Plural: die Musiken" goethe_page=Goethe-A1-Fit1 p.16 none Goethe-A2 p.21 none
- A1[432] de=Natur de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Naturen goethe=NO_PLURAL_LISTED: note= duden_quote="die Natur; Genitiv: der Natur, Plural: die Naturen" goethe_page=Goethe-A2 p.21 none
- A1[479] de=Polizei de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Polizeien goethe=NO_PLURAL_LISTED: note= duden_quote="die Polizei; Genitiv: der Polizei, Plural: die Polizeien" goethe_page=Goethe-A2 p.23 none
- A1[496] de=Reis de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NO_PLURAL_LISTED: note= duden_quote="der Reis; Genitiv: des Reises, (Sorten:) Reise" goethe_page=Goethe-A2 p.24 none
- A1[658] de=Wetter de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Wetter goethe=NO_PLURAL_LISTED: note= duden_quote="das Wetter; Genitiv: des Wetters, Plural: die Wetter" goethe_page=Goethe-A2 p.30 none
- A1[669] de=Zucker de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NO_PLURAL_LISTED: note= duden_quote="der Zucker; Genitiv: des Zuckers, (Sorten:) Zucker" goethe_page=Goethe-A2 p.31 none
- A1[693] de=Obst de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NO_PLURAL_LISTED: note= duden_quote="das Obst; Genitiv: des Obstes, Obsts (ohne Plural)" goethe_page=Goethe-A1-Fit1 p.17 none
- A2[32] de=Alkohol de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Alkohol; Genitiv: des Alkohols, (Fachsprache:) Alkohole" goethe_page=
- A2[205] de=Bauchweh de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=das Bauchweh; Genitiv: des Bauchwehs (ohne Plural) goethe_page=
- A2[231] de=Benzin de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="das Benzin; Genitiv: des Benzins, (Arten:) Benzine" goethe_page=
- A2[270] de=Blut de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="das Blut; Genitiv: des Blut[e]s, (Fachsprache) Blute" goethe_page=
- A2[403] de=Eislauf de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Eislauf; Genitiv: des Eislaufs, Eislaufes (ohne Plural)" goethe_page=
- A2[458] de=Familienstand de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Familienstand; Genitiv: des Familienstands, Familienstandes (ohne Plural)" goethe_page=
- A2[559] de=Gebäck de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="das Gebäck; Genitiv: des Gebäck[e]s, (Sorten:) Gebäcke" goethe_page=
- A2[584] de=Geschirr de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Geschirre goethe=NO_PLURAL_LISTED: note= duden_quote="das Geschirr; Genitiv: des Geschirr[e]s, Plural: die Geschirre" goethe_page=Goethe-A2 p.16 none
- A2[689] de=Hundefutter de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[690] de=Hundegebell de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[715] de=Internet de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NO_PLURAL_LISTED: note= duden_quote=das Internet; Genitiv: des Internets (ohne Plural) goethe_page=Goethe-A1-Fit1 p.14 none Goethe-A2 p.18 none
- A2[796] de=Kinderfunk de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[814] de=Kleingeld de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="das Kleingeld; Genitiv: des Kleingeldes, Kleingelds (ohne Plural)" goethe_page=
- A2[905] de=Lust de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Lüste goethe=NO_PLURAL_LISTED: note= duden_quote="die Lust; Genitiv: der Lust, Plural: die Lüste" goethe_page=Goethe-A1-Fit1 p.16 none Goethe-A2 p.20 none
- A2[925] de=Medizin de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Medizinen goethe=NOT_IN_SOURCE: note= duden_quote="die Medizin; Genitiv: der Medizin, Plural: die Medizinen" goethe_page=
- A2[994] de=Nahrung de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="die Nahrung; Genitiv: der Nahrung, (Fachsprache:) Nahrungen" goethe_page=
- A2[1008] de=Neujahr de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[1065] de=Pech de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Peche goethe=NOT_IN_SOURCE: note= duden_quote="das Pech; Genitiv: des Pechs, seltener: Peches, Plural (Arten): die Peche" goethe_page=
- A2[1135] de=Rechte de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="die/eine Rechte; der/einer Rechten, die Rechten/zwei Rechte" goethe_page=
- A2[1191] de=Sand de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Sand; Genitiv: des Sand[e]s, (besonders Fachsprache:) Sande und Sände" goethe_page=
- A2[1199] de=Schach de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Schachs goethe=NOT_IN_SOURCE: note= duden_quote="das Schach; Genitiv: des Schachs, Plural: die Schachs" goethe_page=
- A2[1273] de=Seilspringen de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=das Seilspringen; Genitiv: des Seilspringens (ohne Plural) goethe_page=
- A2[1281] de=Service de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW:Services goethe=NO_PLURAL_LISTED: note= duden_quote="der, österreichisch auch: das Service; Genitiv: des Service[s], Plural: die Services […vɪs oder …vɪsɪs]" goethe_page=Goethe-A2 p.25 none
- A2[1334] de=Sonnenschein de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Sonnenschein; Genitiv: des Sonnenscheins, Sonnenscheines" goethe_page=
- A2[1347] de=Speck de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Speck; Genitiv: des Speck[e]s, (Sorten:) Specke" goethe_page=
- A2[1348] de=Speiseeis de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=das Speiseeis; Genitiv: des Speiseeises (ohne Plural) goethe_page=
- A2[1356] de=Sport de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NO_PLURAL_LISTED: note= duden_quote="der Sport; Genitiv: des Sport[e]s, (Arten:) Sporte (Plural selten)" goethe_page=Goethe-A1-Fit1 p.19 none Goethe-A2 p.26 none
- A2[1368] de=Staub de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Staub; Genitiv: des Staub[e]s, (Fachsprache:) Staube und Stäube" goethe_page=
- A2[1412] de=Tabak de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Tabak; Genitiv: des Tabaks, (Sorten:) Tabake" goethe_page=
- A2[1517] de=Verkehr de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NO_PLURAL_LISTED: note= duden_quote="der Verkehr; Genitiv: des Verkehrs, selten: Verkehres, (Fachsprache:) Verkehre" goethe_page=Goethe-A2 p.29 none
- B1[90] de=Ackerbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B1[565] de=Dasein de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Daseine goethe=NOT_IN_SOURCE: note= duden_quote="das Dasein; Genitiv: des Daseins, Plural: die Daseine" goethe_page=
- B1[882] de=Feinwäsche de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[977] de=Gänsehaut de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Gänsehaut; Genitiv: der Gänsehaut (ohne Plural) goethe_page=
- B1[982] de=Gartenbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Gartenbau; Genitiv: des Gartenbaus, Gartenbaues (ohne Plural)" goethe_page=
- B1[1294] de=Höhenangst de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B1[1592] de=Körperbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Körperbau; Genitiv: des Körperbaus, Körperbaues (ohne Plural)" goethe_page=
- B1[1608] de=Kraftverkehr de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[1682] de=Kürze de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Kürze; Genitiv: der Kürze goethe_page=
- B1[1783] de=Linke de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="die/eine Linke; der/einer Linken, die Linken/zwei Linke" goethe_page=
- B1[1887] de=Mittelalter de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=das Mittelalter; Genitiv: des Mittelalters (ohne Plural) goethe_page=
- B1[1902] de=Mondschein de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Mondschein; Genitiv: des Mondscheins, Mondscheines (ohne Plural)" goethe_page=
- B1[1909] de=Morgenpost de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[1916] de=Motorsport de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[2530] de=Schüttelfrost de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[2562] de=Schwimmsport de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B1[2573] de=Seegang de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Seegang; Genitiv: des Seeganges, Seegangs (ohne Plural)" goethe_page=
- B1[2579] de=Segelsport de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[2611] de=Sex de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=der Sex; Genitiv: des Sex[es] (ohne Plural) goethe_page=
- B1[3236] de=Weltall de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B1[3239] de=Weltraum de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Weltraum; Genitiv: des Weltraumes, Weltraums (ohne Plural)" goethe_page=
- B2[15] de=Anbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW:Anbauten goethe=NOT_IN_SOURCE: note= duden_quote="der Anbau; Genitiv: des Anbau[e]s, Plural: die Anbauten" goethe_page=
- B2[94] de=Atomenergie de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Atomenergie; Genitiv: der Atomenergie (ohne Plural) goethe_page=
- B2[137] de=Barrenturnen de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[145] de=Bauwesen de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=das Bauwesen; Genitiv: des Bauwesens (ohne Plural) goethe_page=
- B2[191] de=Bergbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Bergbau; Genitiv: des Bergbaus, Bergbaues (ohne Plural)" goethe_page=
- B2[275] de=Blutalkohol de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Blutalkohol; Genitiv: des Blutalkohols, (Fachsprache:) Blutalkohole" goethe_page=
- B2[316] de=Bundeswehr de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Bundeswehr; Genitiv: der Bundeswehr (ohne Plural) goethe_page=
- B2[354] de=Dasein de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW:Daseine goethe=NOT_IN_SOURCE: note= duden_quote="das Dasein; Genitiv: des Daseins, Plural: die Daseine" goethe_page=
- B2[598] de=Eisenbeton de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[753] de=Fahrerflucht de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Fahrerflucht; Genitiv: der Fahrerflucht (ohne Plural) goethe_page=
- B2[808] de=Flugwesen de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=das Flugwesen; Genitiv: des Flugwesens (ohne Plural) goethe_page=
- B2[847] de=Führernatur de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[919] de=Gemüsebau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Gemüsebau; Genitiv: des Gemüsebaus, Gemüsebaues (ohne Plural)" goethe_page=
- B2[936] de=Geratewohl de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[992] de=Glasfiber de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B2[1007] de=Gnadenbrot de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="das Gnadenbrot; Genitiv: des Gnadenbrotes, Gnadenbrots (ohne Plural)" goethe_page=
- B2[1031] de=Grenzverkehr de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1139] de=Hochmut de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B2[1176] de=Keuchhusten de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1210] de=Länderkunde de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Länderkunden goethe=NOT_IN_SOURCE: note= duden_quote="die Länderkunde; Genitiv: der Länderkunde, Plural: die Länderkunden" goethe_page=
- B2[1256] de=Lohnabbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B2[1266] de=Luftfahrt de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW:Luftfahrten goethe=NOT_IN_SOURCE: note= duden_quote="die Luftfahrt; Genitiv: der Luftfahrt, Plural: die Luftfahrten" goethe_page=
- B2[1292] de=Maschinenbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B2[1390] de=Notwehr de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Notwehr; Genitiv: der Notwehr (ohne Plural) goethe_page=
- B2[1399] de=Obstbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- B2[1578] de=Schiffbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Schiffbau; Genitiv: des Schiffbaues, Schiffbaus" goethe_page=
- B2[1624] de=Seenot de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Seenot; Genitiv: der Seenot (ohne Plural) goethe_page=
- B2[1628] de=Sehkraft de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Sehkraft; Genitiv: der Sehkraft (ohne Plural) goethe_page=
- B2[1733] de=Tiefsinn de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Tiefsinn; Genitiv: des Tiefsinnes, Tiefsinns (ohne Plural)" goethe_page=
- B2[1784] de=Ultraschall de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW:Ultraschalle goethe=NOT_IN_SOURCE: note= duden_quote="der Ultraschall; Genitiv: des Ultraschalls, Ultraschalles, Plural: die Ultraschalle" goethe_page=
- B2[2043] de=Wehrpflicht de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=die Wehrpflicht; Genitiv: der Wehrpflicht (ohne Plural) goethe_page=
- B2[2045] de=Weinbau de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Weinbau; Genitiv: des Weinbaus, Weinbaues (ohne Plural)" goethe_page=
- C1[25] de=Flugwetter de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=ohne Plural goethe_page=
- C1[81] de=Hausangestellte de_article=die de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=vgl. Angestellte goethe_page=
- C1[148] de=Stabhochspringen de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[343] de=Gemeineigentum de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[416] de=Leistungssport de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[468] de=Segelflugsport de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[514] de=Verkehrswesen de_article=das de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote=das Verkehrswesen; Genitiv: des Verkehrswesens (ohne Plural) goethe_page=
- C2[145] de=Geschlechtsverkehr de_article=der de_plural= duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote="der Geschlechtsverkehr; Genitiv: des Geschlechtsverkehrs, Geschlechtsverkehres (ohne Plural)" goethe_page=
- A2[737] de=Joghurt / Jogurt de_article=der de_plural=die Joghurts / Jogurts duden=NEEDS_SOURCE_REVIEW:Joghurt | Joghurts goethe=NOT_IN_SOURCE: note= duden_quote="der oder (besonders österreichisch und schweizerisch) das Joghurt; Genitiv: des Joghurt[s], Plural: die Joghurt[s], ostösterreichisch …" goethe_page=
- B1[844] de=Examen de_article=das de_plural=die Examina duden=NEEDS_SOURCE_REVIEW:Examen goethe=NOT_IN_SOURCE: note= duden_quote="das Examen; Genitiv: des Examens, Plural: die Examen, seltener: Examina" goethe_page=
- B1[1312] de=Hörsaal de_article=der de_plural=die Hörsäle duden=NEEDS_SOURCE_REVIEW:Hörsäle goethe=NOT_IN_SOURCE: note= duden_quote="der Hörsaal; Genitiv: des Hörsaales, Hörsaals, Plural: die Hörsäle" goethe_page=
- B1[3201] de=Wartesaal de_article=der de_plural=die Wartesäle duden=NEEDS_SOURCE_REVIEW: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[283] de=Bootsmann de_article=der de_plural=die Bootsleute duden=NEEDS_SOURCE_REVIEW:Bootsleute goethe=NOT_IN_SOURCE: note= duden_quote="der ⟨Plural: Bootsleute, seltener: Bootsmänner⟩" goethe_page=

## NOT_IN_SOURCE

Skaits: 51.

- A1[303] de=Juli de_article=der de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[34] de=Ameisen de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[275] de=Bootfahren de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[279] de=Boxen de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[282] de=Bratkartoffeln de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[691] de=Hundehaare de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[832] de=Kopfschmerzen de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[1025] de=Nudeln de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[1265] de=Schweiß de_article=der de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- A2[1399] de=Straßenverkehr de_article=der de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[227] de=Autoabgase de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[1370] de=Innere de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[1431] de=Judo de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[2351] de=Rudern de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[2694] de=Sportfunk de_article=der de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[2802] de=Strickwaren de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[2959] de=Überstunden de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[3360] de=Erbe de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[227] de=Beute de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[273] de=Blumenzucht de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[301] de=Brettsegeln de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[384] de=Devisen de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[436] de=Dreharbeiten de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[784] de=Festspiele de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[792] de=Firmenkapital de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[923] de=Genmaterial de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[981] de=Gezeiten de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1036] de=Großmut de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1049] de=Güterversand de_article=der de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1155] de=Immobilien de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1195] de=Konsumgüter de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1317] de=Militär de_article=das de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1343] de=Muße de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1366] de=Naturgewalten de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1701] de=Steuergelder de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1704] de=Stoßverkehr de_article=der de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[1709] de=Streitkräfte de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[107] de=Menschenrechte de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[155] de=Tagesnachrichten de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[306] de=Erntearbeiten de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[315] de=Fortbildungskurse de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[325] de=Gebrauchtwaren de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[368] de=Gewissensbisse de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[393] de=Industrieabgase de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[394] de=Industrieabwässer de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[483] de=Steuereinnahmen de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[487] de=Tageseinnahmen de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C1[546] de=Wasserheilanstalt de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C2[28] de=Elementarkenntnisse de_article=die de_plural= duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B1[1404] de=Jagderlaubnis de_article=die de_plural=die Jagderlaubse duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- C2[153] de=gesetzgebende Gewalt de_article=die de_plural=die gesetzgebenden Gewalten duden=NOT_IN_SOURCE: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=

## AMBIGUOUS

Skaits: 19.

- A1[56] de=August de_article=der de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="August; Genitiv: Augusts, August" goethe_page=
- A1[234] de=Geschwister de_article=die de_plural= duden=AMBIGUOUS: goethe=PLURAL_ONLY:Geschwister note= duden_quote="das Geschwister; Genitiv: des Geschwisters, Plural: die Geschwister" goethe_page=Goethe-A1-Fit1 p.6 only Goethe-A1-SD1 p.16 only Goethe-B1 p.45 only
- A1[480] de=Post de_article=die de_plural= duden=AMBIGUOUS: goethe=NO_PLURAL_LISTED: note= duden_quote="der Post; Genitiv: des Posts, Plural: die Posts" goethe_page=Goethe-A1-Fit1 p.17 none Goethe-A2 p.23 none
- A1[691] de=Essen de_article=das de_plural= duden=AMBIGUOUS: goethe=PLURAL_FOUND:Essen note= duden_quote="das Essen; Genitiv: des Essens, Plural: die Essen || Essen; Genitiv: Essens, Essen" goethe_page=Goethe-A1-Fit1 p.12 - Goethe-A2 p.14 - Goethe-B1 p.38 -
- A2[586] de=Geschwister de_article=die de_plural= duden=AMBIGUOUS: goethe=PLURAL_ONLY:Geschwister note= duden_quote="das Geschwister; Genitiv: des Geschwisters, Plural: die Geschwister" goethe_page=Goethe-A1-Fit1 p.6 only Goethe-A1-SD1 p.16 only Goethe-B1 p.45 only
- A2[688] de=Humor de_article=der de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="der Humor; Genitiv: des Humors, Plural: die Humores [huˈmoːreːs] || der Humor; Genitiv: des Humors, Plural: die Humore" goethe_page=
- A2[1129] de=Rauch de_article=der de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote=der Rauch; Genitiv: des Rauchs || der Rauch; Genitiv: des Rauch[e]s goethe_page=
- A2[1227] de=Schlaf de_article=der de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="der Schlaf; Genitiv: des Schlaf[e]s || der Schlaf; Genitiv: des Schlaf[e]s, Schläfe" goethe_page=
- B1[458] de=Blei de_article=das de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="der, (landschaftlich auch:) das Blei; Genitiv: des Blei[e]s, Plural: die Bleie und Bleis || das Blei; Genitiv: des Blei[e]s, (Arten:) Bleie" goethe_page=
- B1[944] de=Freie de_article=das de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="die/eine Freie; der/einer Freien, die Freien/zwei Freie" goethe_page=
- B1[972] de=Futter de_article=das de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="das Futter; Genitiv: des Futters, Plural: die Futter || das Futter; Genitiv: des Futters, Plural: die Futter" goethe_page=
- B1[1661] de=Kunde de_article=die de_plural= duden=AMBIGUOUS: goethe=AMBIGUOUS: note= duden_quote="die Kunde; Genitiv: der Kunde, Plural: die Kunden || die Kunde; Genitiv: der Kunde, Plural: die Kunden (Plural selten)" goethe_page=Goethe-A1-SD1 p.19 -n Goethe-A2 p.19 -n Goethe-B1 p.58 -n
- B1[2633] de=Sitten de_article=die de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="Sitten; Genitiv: Sittens, Sitten" goethe_page=
- B2[222] de=Betracht de_article=der de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote= goethe_page=
- B2[555] de=Eingeweide de_article=die de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="das Eingeweide; Genitiv: des Eingeweides, Plural: die Eingeweide (meist im Plural)" goethe_page=
- B2[796] de=Flaum de_article=der de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote=der Flaum; Genitiv: des Flaum[e]s || der Flaum; Genitiv: des Flaum[e]s goethe_page=
- B2[835] de=Fremde de_article=die de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="die Fremde; Genitiv: der Fremde || die/eine Fremde; der/einer Fremden, die Fremden/zwei Fremde" goethe_page=
- B2[1194] de=Konsum de_article=der de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote="der Konsum; Genitiv: des Konsums, Plural: die Konsums || der Konsum; Genitiv: des Konsums" goethe_page=
- C1[51] de=Büroangestellte de_article=der de_plural= duden=AMBIGUOUS: goethe=NOT_IN_SOURCE: note= duden_quote=vgl. Angestellte goethe_page=

## Galotne -n, kas nav lemma+n

Pluralwort forma netiek izdalīta atsevišķi un šajā sarakstā nav. Kolonna 'kā bija' ir nomestā datīva forma, ja tāda bija; citādi tā sakrīt ar nominatīvu.

Skaits: 39.

- A1[338] de=Kleidung lemma=Kleidung bija=Kleidungen tagad=Kleidungen duden=PLURAL_RARE
- A1[405] de=Milch lemma=Milch bija=Milchen tagad=Milchen duden=PLURAL_FOUND
- A1[418] de=Morgen lemma=Morgen bija=Morgen tagad=Morgen duden=NEEDS_SOURCE_REVIEW
- A1[422] de=Musik lemma=Musik bija=Musiken tagad=Musiken duden=NEEDS_SOURCE_REVIEW
- A1[432] de=Natur lemma=Natur bija=Naturen tagad=Naturen duden=NEEDS_SOURCE_REVIEW
- A1[479] de=Polizei lemma=Polizei bija=Polizeien tagad=Polizeien duden=NEEDS_SOURCE_REVIEW
- A2[613] de=Gymnastik lemma=Gymnastik bija=Gymnastiken tagad=Gymnastiken duden=PLURAL_FOUND
- A2[697] de=Husten lemma=Husten bija=Husten tagad=Husten duden=PLURAL_RARE
- A2[811] de=Kleidung lemma=Kleidung bija=Kleidungen tagad=Kleidungen duden=PLURAL_RARE
- A2[925] de=Medizin lemma=Medizin bija=Medizinen tagad=Medizinen duden=NEEDS_SOURCE_REVIEW
- A2[1579] de=Werbung lemma=Werbung bija=Werbungen tagad=Werbungen duden=NEEDS_SOURCE_REVIEW
- A2[1588] de=Wiedersehen lemma=Wiedersehen bija=Wiedersehen tagad=Wiedersehen duden=PLURAL_FOUND
- B1[1024] de=Gegenwart lemma=Gegenwart bija=Gegenwarten tagad=Gegenwarten duden=PLURAL_FOUND
- B1[1773] de=Lidschatten lemma=Lidschatten bija=Lidschatten tagad=Lidschatten duden=PLURAL_FOUND
- B1[2495] de=Schneetreiben lemma=Schneetreiben bija=Schneetreiben tagad=Schneetreiben duden=PLURAL_FOUND
- B1[3361] de=Schaden lemma=Schaden bija=Schäden tagad=Schäden duden=NEEDS_SOURCE_REVIEW
- B2[15] de=Anbau lemma=Anbau bija=Anbauten tagad=Anbauten duden=NEEDS_SOURCE_REVIEW
- B2[78] de=Abzweigung lemma=Abzweigung bija=Abzweigungen tagad=Abzweigungen duden=PLURAL_FOUND
- B2[475] de=Durchfuhr lemma=Durchfuhr bija=Durchfuhren tagad=Durchfuhren duden=PLURAL_FOUND
- B2[509] de=Ehrenpflicht lemma=Ehrenpflicht bija=Ehrenpflichten tagad=Ehrenpflichten duden=PLURAL_FOUND
- B2[1114] de=Heuschnupfen lemma=Heuschnupfen bija=Heuschnupfen tagad=Heuschnupfen duden=PLURAL_FOUND
- B2[1266] de=Luftfahrt lemma=Luftfahrt bija=Luftfahrten tagad=Luftfahrten duden=NEEDS_SOURCE_REVIEW
- B2[1268] de=Luftpost lemma=Luftpost bija=Luftposten tagad=Luftposten duden=PLURAL_FOUND
- B2[1281] de=Mahnschreiben lemma=Mahnschreiben bija=Mahnschreiben tagad=Mahnschreiben duden=PLURAL_FOUND
- B2[1420] de=Ortszeit lemma=Ortszeit bija=Ortszeiten tagad=Ortszeiten duden=PLURAL_FOUND
- B2[1443] de=Pfahlbau lemma=Pfahlbau bija=Pfahlbauten tagad=Pfahlbauten duden=PLURAL_FOUND
- B2[1488] de=Radioaktivität lemma=Radioaktivität bija=Radioaktivitäten tagad=Radioaktivitäten duden=PLURAL_FOUND
- B2[1661] de=Sorgepflicht lemma=Sorgepflicht bija=Sorgepflichten tagad=Sorgepflichten duden=PLURAL_FOUND
- B2[1762] de=Übereinkommen lemma=Übereinkommen bija=Übereinkommen tagad=Übereinkommen duden=PLURAL_FOUND
- B2[2051] de=Weltraumfahrt lemma=Weltraumfahrt bija=Weltraumfahrten tagad=Weltraumfahrten duden=PLURAL_FOUND
- B2[2085] de=Zuflucht lemma=Zuflucht bija=Zufluchten tagad=Zufluchten duden=PLURAL_FOUND
- C1[451] de=Rechenschaft lemma=Rechenschaft bija=Rechenschaften tagad=Rechenschaften duden=PLURAL_RARE
- C2[7] de=Sorgfaltspflicht lemma=Sorgfaltspflicht bija=Sorgfaltspflichten tagad=Sorgfaltspflichten duden=PLURAL_FOUND
- A2[919] de=Material lemma=Material bija=Materialien tagad=Materialien duden=PLURAL_FOUND
- A2[1362] de=Stadion lemma=Stadion bija=Stadien tagad=Stadien duden=PLURAL_FOUND
- B1[844] de=Examen lemma=Examen bija=Examen tagad=Examen duden=NEEDS_SOURCE_REVIEW
- B1[2162] de=Prinzip lemma=Prinzip bija=Prinzipien tagad=Prinzipien duden=PLURAL_FOUND
- B2[442] de=Dressman lemma=Dressman bija=Dressmen tagad=Dressmen duden=PLURAL_FOUND
- C1[241] de=Beweismaterial lemma=Beweismaterial bija=Beweismaterialien tagad=Beweismaterialien duden=PLURAL_FOUND

## Datīva nomešana

Skaits: 1.

- B1[2932] de=Trümmer bija=Trümmern tagad=Trümmer

## robots.txt

Duden User-agent * neaizliedz /rechtschreibung/ un /sitemap-lexeme: jā. Aizliegts /search/ un /suche/: jā, šie ceļi nav prasīti.
Goethe User-agent * aizliedz /*.pdf?* : jā; PDF pieprasījumi ir bez vaicājuma. Aizliegts /suche/: jā, nav prasīts.
Temps: viens pieprasījums vienlaikus, vismaz 1100 ms starp pieprasījumu sākumiem. HTTP 403 netiek apieta.

## Goethe B2

Statuss: NOT_AVAILABLE. PDF URL: .

- 200 https://www.goethe.de/sitemap.xml
- 200 https://www.goethe.de/de/sitemap.xml
- 200 https://www.goethe.de/ins/de/de/sitemap.xml
- 403 https://www.goethe.de/de/spr/prf/ueb/pb2.html
- 403 https://www.goethe.de/ins/de/de/prf/prf/gzb2/ue9.html
- 403 https://www.goethe.de/ins/de/de/prf/prf/gzb2.html
- 403 https://www.goethe.de/ins/de/de/prf/prf/gzb2/wi9.html

## Salīdzinājums ar iepriekšējo skaitu

Iepriekšējā secība: CONSISTENT / NEEDS_SOURCE_REVIEW / MISSING_PLURAL_IN_DATA / NOT_IN_SOURCE / AMBIGUOUS / SOURCES_DISAGREE / REVIEW_RARE_PLURAL / PLURAL_FORM_MISMATCH = 212 / 114 / 54 / 51 / 42 / 16 / 16 / 1.

| salīdzinājums | iepriekš | tagad | delta |
|---|---:|---:|---:|
| CONSISTENT | 212 | 236 | 24 |
| NEEDS_SOURCE_REVIEW | 114 | 109 | -5 |
| MISSING_PLURAL_IN_DATA | 54 | 60 | 6 |
| NOT_IN_SOURCE | 51 | 51 | 0 |
| AMBIGUOUS | 42 | 19 | -23 |
| SOURCES_DISAGREE | 16 | 8 | -8 |
| REVIEW_RARE_PLURAL | 16 | 22 | 6 |
| PLURAL_FORM_MISMATCH | 1 | 1 | 0 |

Izmaiņu iemesls: tukšs de_plural un Goethe PLURAL_FOUND kopā ar Duden NEEDS_SOURCE_REVIEW, PLURAL_RARE vai NO_PLURAL_LISTED tagad ir MISSING_PLURAL_IN_DATA ar piezīmi GOETHE_LISTS_PLURAL. SOURCES_DISAGREE paliek tikai tad, ja abas formas ir dažādas, vai viens avots ir NO_PLURAL_LISTED un otrs PLURAL_FOUND un šī MISSING kārtula neattiecas. Duden PLURAL_RARE pret Goethe NO_PLURAL_LISTED paliek REVIEW_RARE_PLURAL. Nominatīva izvēle nomet datīvu lemma+n, ja ir Pluralwort šķirklis. ARTICLE_MISMATCH netiek ieskaitīts daudzskaitļa verdiktā.

## Vēl nepārbaudītie lietvārdi

Lietvārdi ar de_article der/die/das: 5036. Šajā 506 kopā: 506. Vēl nav pārbaudīti pret Duden/Goethe: 4530.

| līmenis | nepārbaudīti | atšķirīgas lemmas |
|---|---:|---:|
| A1 | 289 | 289 |
| A2 | 833 | 833 |
| B1 | 1859 | 1856 |
| B2 | 1016 | 1016 |
| C1 | 353 | 353 |
| C2 | 180 | 180 |

Plāns nav izpildīts. Goethe PDF jau ir lokāli. Duden minimums ir viens /rechtschreibung/ pieprasījums katrai vēl nepārbaudītai lemmai: 4491. Pie 1 pieprasījuma/s tas ir 4491 sekundes, ja katra lemma atbild ar 200. Homonymu sitemap-lexeme pieprasījumi šajā skaitā nav iekļauti un tiktu veikti tikai pēc 404. Šie pieprasījumi šajā palaišanā nav izdarīti.

## STAGE RESULT

CHECK_COMPLETENESS: PASS

STAGE RESULT: NEEDS OWNER REVIEW

