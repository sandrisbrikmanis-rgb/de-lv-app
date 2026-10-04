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
BRANCH: cursor/lv-de-verify-f86b
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
| MISSING_PLURAL_IN_DATA | 59 |
| NEEDS_SOURCE_REVIEW | 109 |
| NOT_IN_SOURCE | 51 |
| PLURAL_FORM_MISMATCH | 1 |
| REVIEW_RARE_PLURAL | 22 |
| SOURCES_DISAGREE | 9 |

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

Skaits: 59.

### IDENTICAL_TO_SINGULAR

Skaits: 14.

- A1[306] de=Jeans de_article=die de_plural= duden=Jeans goethe=Jeans note= duden_quote="die Jeans; Genitiv: der Jeans, Plural: die Jeans" goethe_page=Goethe-A1-Fit1 p.14 only Goethe-A2 p.18 only Goethe-B1 p.52 only
- A1[418] de=Morgen de_article=der de_plural= duden=Morgen goethe=Morgen note=GOETHE_LISTS_PLURAL duden_quote="der Morgen; Genitiv: des Morgens, Plural: die Morgen" goethe_page=Goethe-A1-Fit1 p.8 -
- A1[453] de=November de_article=der de_plural= duden=November goethe= note= duden_quote="der November; Genitiv: des November[s], Plural: die November" goethe_page=
- A1[464] de=Oktober de_article=der de_plural= duden=Oktober goethe= note= duden_quote="der Oktober; Genitiv: des Oktober[s], Plural: die Oktober" goethe_page=
- A1[546] de=September de_article=der de_plural= duden=September goethe= note= duden_quote="der September; Genitiv: des September[s], Plural: die September" goethe_page=
- A2[93] de=Aschenputtel de_article=das de_plural= duden=Aschenputtel goethe= note= duden_quote="das Aschenputtel; Genitiv: des Aschenputtels, Plural: die Aschenputtel" goethe_page=
- A2[1588] de=Wiedersehen de_article=das de_plural= duden=Wiedersehen goethe=Wiedersehen note= duden_quote="das Wiedersehen; Genitiv: des Wiedersehens, Plural: die Wiedersehen" goethe_page=Goethe-A1-Fit1 p.20 - Goethe-A2 p.30 -
- B1[1773] de=Lidschatten de_article=der de_plural= duden=Lidschatten goethe= note= duden_quote="der Lidschatten; Genitiv: des Lidschattens, Plural: die Lidschatten" goethe_page=
- B1[2495] de=Schneetreiben de_article=das de_plural= duden=Schneetreiben goethe= note= duden_quote="das Schneetreiben; Genitiv: des Schneetreibens, Plural: die Schneetreiben" goethe_page=
- B1[2868] de=Tauwetter de_article=das de_plural= duden=Tauwetter goethe= note= duden_quote="das Tauwetter; Genitiv: des Tauwetters, Plural: die Tauwetter" goethe_page=
- B2[1114] de=Heuschnupfen de_article=der de_plural= duden=Heuschnupfen goethe= note= duden_quote="der Heuschnupfen; Genitiv: des Heuschnupfens, Plural: die Heuschnupfen" goethe_page=
- B2[1281] de=Mahnschreiben de_article=das de_plural= duden=Mahnschreiben goethe= note= duden_quote="das Mahnschreiben; Genitiv: des Mahnschreibens, Plural: die Mahnschreiben" goethe_page=
- B2[1372] de=Nesselfieber de_article=das de_plural= duden=Nesselfieber goethe= note= duden_quote="das Nesselfieber; Genitiv: des Nesselfiebers, Plural: die Nesselfieber" goethe_page=
- B2[1762] de=Übereinkommen de_article=das de_plural= duden=Übereinkommen goethe= note= duden_quote="das Übereinkommen; Genitiv: des Übereinkommens, Plural: die Übereinkommen" goethe_page=

### TECHNICAL_OR_MASS

Skaits: 1.

- B1[402] de=Beton de_article=der de_plural= duden=Betons | Betone goethe= note= duden_quote="der Beton; Genitiv: des Betons, Plural: (Arten:) die Betons, besonders süddeutsch, österreichisch Betone [beˈtoːnə]" goethe_page=

### NORMAL

Skaits: 44.

- A1[161] de=Ende de_article=das de_plural= duden=Enden goethe=Enden note=GOETHE_LISTS_PLURAL duden_quote="das Ende; Genitiv: des Endes, Plural: die Enden" goethe_page=Goethe-A2 p.13 -n
- A1[330] de=Kaffee de_article=der de_plural= duden=Kaffees goethe=Kaffees note= duden_quote="der Kaffee; Genitiv: des Kaffees, Plural: die Kaffees" goethe_page=Goethe-A1-Fit1 p.14 none Goethe-A2 p.18 -s
- A1[695] de=Urlaub de_article=der de_plural= duden=Urlaube goethe=Urlaube note= duden_quote="der Urlaub; Genitiv: des Urlaub[e]s, Plural: die Urlaube" goethe_page=Goethe-A2 p.28 -e Goethe-B1 p.91 -e
- A2[265] de=Blumenkohl de_article=der de_plural= duden=Blumenkohle goethe= note= duden_quote="der Blumenkohl; Genitiv: des Blumenkohls, Blumenkohles, Plural: die Blumenkohle" goethe_page=
- A2[343] de=Dill de_article=der de_plural= duden=Dille goethe= note= duden_quote="der Dill; Genitiv: des Dills, Plural: die Dille" goethe_page=
- A2[613] de=Gymnastik de_article=die de_plural= duden=Gymnastiken goethe= note= duden_quote="die Gymnastik; Genitiv: der Gymnastik, Plural: die Gymnastiken" goethe_page=
- A2[793] de=Ketchup de_article=der de_plural= duden=Ketchups goethe= note= duden_quote="der oder das Ketchup; Genitiv: des Ketchup[s], Plural: die Ketchups" goethe_page=
- A2[1279] de=Senf de_article=der de_plural= duden=Senfe goethe= note= duden_quote="der Senf; Genitiv: des Senf[e]s, Plural: die Senfe" goethe_page=
- A2[1561] de=Wäsche de_article=die de_plural= duden=Wäschen goethe=Wäschen note=GOETHE_LISTS_PLURAL duden_quote="die Wäsche; Genitiv: der Wäsche, Plural: die Wäschen" goethe_page=Goethe-A2 p.30 -n
- A2[1579] de=Werbung de_article=die de_plural= duden=Werbungen goethe=Werbungen note=GOETHE_LISTS_PLURAL duden_quote="die Werbung; Genitiv: der Werbung, Plural: die Werbungen" goethe_page=Goethe-B1 p.97 -en
- A2[1593] de=Wille de_article=der de_plural= duden=Willen goethe= note= duden_quote="der Wille; Genitiv: des Willens, Plural: die Willen" goethe_page=
- B1[437] de=Biathlon de_article=das de_plural= duden=Biathlons goethe= note= duden_quote="der und das Biathlon; Genitiv: des Biathlons, Plural: die Biathlons" goethe_page=
- B1[1024] de=Gegenwart de_article=die de_plural= duden=Gegenwarten goethe= note= duden_quote="die Gegenwart; Genitiv: der Gegenwart, Plural: die Gegenwarten" goethe_page=
- B1[1403] de=Jagdbeute de_article=die de_plural= duden=Jagdbeuten goethe= note= duden_quote="die Jagdbeute; Genitiv: der Jagdbeute, Plural: die Jagdbeuten" goethe_page=
- B1[3304] de=Zutritt de_article=der de_plural= duden=Zutritte goethe= note= duden_quote="der Zutritt; Genitiv: des Zutritt[e]s, Plural: die Zutritte" goethe_page=
- B1[3361] de=Schaden de_article=der de_plural= duden=Schäden goethe=Schäden note=GOETHE_LISTS_PLURAL duden_quote="der Schaden; Genitiv: des Schadens, Plural: die Schäden" goethe_page=Goethe-B1 p.76 ¨-
- B2[78] de=Abzweigung de_article=die de_plural= duden=Abzweigungen goethe= note= duden_quote="die Abzweigung; Genitiv: der Abzweigung, Plural: die Abzweigungen" goethe_page=
- B2[252] de=Bienenwachs de_article=das de_plural= duden=Bienenwachse goethe= note= duden_quote="das Bienenwachs; Genitiv: des Bienenwachses, Plural: die Bienenwachse" goethe_page=
- B2[330] de=Cholesterin de_article=das de_plural= duden=Cholesterine goethe= note= duden_quote="das Cholesterin; Genitiv: des Cholesterins, Plural: die Cholesterine" goethe_page=
- B2[475] de=Durchfuhr de_article=die de_plural= duden=Durchfuhren goethe= note= duden_quote="die Durchfuhr; Genitiv: der Durchfuhr, Plural: die Durchfuhren" goethe_page=
- B2[509] de=Ehrenpflicht de_article=die de_plural= duden=Ehrenpflichten goethe= note= duden_quote="die Ehrenpflicht; Genitiv: der Ehrenpflicht, Plural: die Ehrenpflichten" goethe_page=
- B2[776] de=Feingefühl de_article=das de_plural= duden=Feingefühle goethe= note= duden_quote="das Feingefühl; Genitiv: des Feingefühls, Feingefühles, Plural: die Feingefühle" goethe_page=
- B2[807] de=Flugverkehr de_article=der de_plural= duden=Flugverkehre goethe= note= duden_quote="der Flugverkehr; Genitiv: des Flugverkehres, Flugverkehrs, Plural: die Flugverkehre" goethe_page=
- B2[1081] de=Heilkunde de_article=die de_plural= duden=Heilkunden goethe= note= duden_quote="die Heilkunde; Genitiv: der Heilkunde, Plural: die Heilkunden" goethe_page=
- B2[1175] de=Kaufkraft de_article=die de_plural= duden=Kaufkräfte goethe= note= duden_quote="die Kaufkraft; Genitiv: der Kaufkraft, Plural: die Kaufkräfte" goethe_page=
- B2[1206] de=Laienkunst de_article=die de_plural= duden=Laienkünste goethe= note= duden_quote="die Laienkunst; Genitiv: der Laienkunst, Plural: die Laienkünste" goethe_page=
- B2[1268] de=Luftpost de_article=die de_plural= duden=Luftposten goethe= note= duden_quote="die Luftpost; Genitiv: der Luftpost, Plural: die Luftposten" goethe_page=
- B2[1295] de=Massenware de_article=die de_plural= duden=Massenwaren goethe= note= duden_quote="die Massenware; Genitiv: der Massenware, Plural: die Massenwaren" goethe_page=
- B2[1420] de=Ortszeit de_article=die de_plural= duden=Ortszeiten goethe= note= duden_quote="die Ortszeit; Genitiv: der Ortszeit, Plural: die Ortszeiten" goethe_page=
- B2[1443] de=Pfahlbau de_article=der de_plural= duden=Pfahlbauten goethe= note= duden_quote=der ⟨Plural: Pfahlbauten⟩ goethe_page=
- B2[1459] de=Porno de_article=der de_plural= duden=Pornos goethe= note= duden_quote="der Porno; Genitiv: des Pornos, Plural: die Pornos" goethe_page=
- B2[1488] de=Radioaktivität de_article=die de_plural= duden=Radioaktivitäten goethe= note= duden_quote="die Radioaktivität; Genitiv: der Radioaktivität, Plural: die Radioaktivitäten" goethe_page=
- B2[1629] de=Naturseide de_article=die de_plural= duden=Naturseiden goethe= note= duden_quote="die Naturseide; Genitiv: der Naturseide, Plural: die Naturseiden" goethe_page=
- B2[1661] de=Sorgepflicht de_article=die de_plural= duden=Sorgepflichten goethe= note= duden_quote="die Sorgepflicht; Genitiv: der Sorgepflicht, Plural: die Sorgepflichten" goethe_page=
- B2[1713] de=Striptease de_article=der de_plural= duden=Stripteases goethe= note= duden_quote="der, auch: das Striptease; Genitiv: des Striptease, Plural: die Stripteases […tiːzəs]" goethe_page=
- B2[1752] de=Triebkraft de_article=die de_plural= duden=Triebkräfte goethe= note= duden_quote="die Triebkraft; Genitiv: der Triebkraft, Plural: die Triebkräfte" goethe_page=
- B2[2051] de=Weltraumfahrt de_article=die de_plural= duden=Weltraumfahrten goethe= note= duden_quote="die Weltraumfahrt; Genitiv: der Weltraumfahrt, Plural: die Weltraumfahrten" goethe_page=
- B2[2085] de=Zuflucht de_article=die de_plural= duden=Zufluchten goethe= note= duden_quote="die Zuflucht; Genitiv: der Zuflucht, Plural: die Zufluchten" goethe_page=
- C1[244] de=Bildhauerkunst de_article=die de_plural= duden=Bildhauerkünste goethe= note= duden_quote="die Bildhauerkunst; Genitiv: der Bildhauerkunst, Plural: die Bildhauerkünste" goethe_page=
- C1[276] de=Durchgangsverkehr de_article=der de_plural= duden=Durchgangsverkehre goethe= note= duden_quote="der Durchgangsverkehr; Genitiv: des Durchgangsverkehrs, Durchgangsverkehres, Plural: die Durchgangsverkehre" goethe_page=
- C1[550] de=Wehrersatzdienst de_article=der de_plural= duden=Wehrersatzdienste goethe= note= duden_quote="der Wehrersatzdienst; Genitiv: des Wehrersatzdiensts, Wehrersatzdienstes, Plural: die Wehrersatzdienste" goethe_page=
- C2[7] de=Sorgfaltspflicht de_article=die de_plural= duden=Sorgfaltspflichten goethe= note= duden_quote="die Sorgfaltspflicht; Genitiv: der Sorgfaltspflicht, Plural: die Sorgfaltspflichten" goethe_page=
- C2[44] de=Katastrophendienst de_article=der de_plural= duden=Katastrophendienste goethe= note= duden_quote="der Katastrophendienst; Genitiv: des Katastrophendiensts, Katastrophendienstes, Plural: die Katastrophendienste" goethe_page=
- C2[97] de=Informationsdefizit de_article=das de_plural= duden=Informationsdefizite goethe= note= duden_quote="das Informationsdefizit; Genitiv: des Informationsdefizits, Plural: die Informationsdefizite" goethe_page=

## PLURAL_FORM_MISMATCH

Skaits: 1.

- B1[1597] de=Kosmetik de_article=die de_plural=die Kosmetika duden= goethe= note= duden_quote=die Kosmetik; Genitiv: der Kosmetik goethe_page=Goethe-A2 p.19 none

## SOURCES_DISAGREE

Skaits: 9.

- A1[11] de=Alter de_article=das de_plural= duden=Alter goethe= note= duden_quote="das Alter; Genitiv: des Alters, Plural: die Alter" goethe_page=Goethe-A1-Fit1 p.9 none Goethe-A2 p.8 none
- A1[335] de=Käse de_article=der de_plural= duden=Käse goethe= note= duden_quote="der Käse; Genitiv: des Käses, Plural: die Käse" goethe_page=Goethe-A1-Fit1 p.14 none Goethe-A2 p.18 none
- A1[405] de=Milch de_article=die de_plural= duden=Milche | Milchen goethe= note= duden_quote="die Milch; Genitiv: der Milch, Plural: (Fachsprache:) die Milche[n]" goethe_page=Goethe-A1-Fit1 p.16 none Goethe-A2 p.21 none
- A1[520] de=Schokolade de_article=die de_plural= duden=Schokoladen goethe= note= duden_quote="die Schokolade; Genitiv: der Schokolade, Plural: die Schokoladen" goethe_page=Goethe-A1-Fit1 p.18 none
- A1[692] de=Gemüse de_article=das de_plural= duden=Gemüse goethe= note= duden_quote="das Gemüse; Genitiv: des Gemüses, Plural: die Gemüse" goethe_page=Goethe-A1-Fit1 p.13 none Goethe-A2 p.16 none
- A2[666] de=Himmel de_article=der de_plural= duden=Himmel goethe= note= duden_quote="der Himmel; Genitiv: des Himmels, Plural: die Himmel" goethe_page=Goethe-A2 p.17 none
- A2[1404] de=Stress de_article=der de_plural= duden=Stresse goethe= note= duden_quote="der Stress; Genitiv: des Stresses, Plural: die Stresse" goethe_page=Goethe-A2 p.27 none
- B1[867] de=Fasching de_article=der de_plural= duden=Faschinge | Faschings goethe=Fasching note= duden_quote="der Fasching; Genitiv: des Faschings, Plural: die Faschinge und Faschings" goethe_page=Goethe-B1 p.39 -
- B1[3260] de=Wiederhören de_article=das de_plural= duden= goethe=Wiederhören note= duden_quote=das Wiederhören; Genitiv: des Wiederhörens goethe_page=Goethe-A2 p.30 -

## REVIEW_RARE_PLURAL

Skaits: 22.

- A1[41] de=April de_article=der de_plural= duden=Aprile goethe= note= duden_quote="der April; Genitiv: des April[s], Plural: die Aprile (Plural selten)" goethe_page=
- A1[136] de=Dezember de_article=der de_plural= duden=Dezember goethe= note= duden_quote="der Dezember; Genitiv: des Dezember[s], Plural: die Dezember (Plural selten)" goethe_page=
- A1[178] de=Februar de_article=der de_plural= duden=Februare goethe= note= duden_quote="der Februar; Genitiv: des Februar[s], Plural: die Februare (Plural selten)" goethe_page=
- A1[298] de=Januar de_article=der de_plural= duden=Januare goethe= note= duden_quote="der Januar; Genitiv: des Januar[s], Plural: die Januare (Plural selten)" goethe_page=
- A1[305] de=Juni de_article=der de_plural= duden=Junis goethe= note= duden_quote="der Juni; Genitiv: des Juni[s], Plural: die Junis (Plural selten)" goethe_page=
- A1[338] de=Kleidung de_article=die de_plural= duden=Kleidungen goethe= note= duden_quote="die Kleidung; Genitiv: der Kleidung, Plural: die Kleidungen (Plural selten)" goethe_page=Goethe-A2 p.19 none
- A1[389] de=Mai de_article=der de_plural= duden=Maie goethe= note= duden_quote="der Mai; Genitiv: des Mai[e]s und Mai, dichterisch auch noch: Maien, Plural: die Maie (Plural …" goethe_page=
- A1[396] de=März de_article=der de_plural= duden=Märze goethe= note= duden_quote="der März; Genitiv: des März[es], (dichterisch auch noch:) Märzen, Plural: die Märze (Plural selten)" goethe_page=
- A1[689] de=Appetit de_article=der de_plural= duden=Appetite goethe= note= duden_quote="der Appetit; Genitiv: des Appetit[e]s, Plural: die Appetite (Plural selten)" goethe_page=Goethe-A1-Fit1 p.9 none
- A2[217] de=Beginn de_article=der de_plural= duden=Beginne goethe= note= duden_quote="der Beginn; Genitiv: des Beginn[e]s, Plural: die Beginne (Plural selten)" goethe_page=
- A2[426] de=Erlaubnis de_article=die de_plural= duden=Erlaubnisse goethe= note= duden_quote="die Erlaubnis; Genitiv: der Erlaubnis, Plural: die Erlaubnisse (Plural selten)" goethe_page=Goethe-A2 p.14 none
- A2[488] de=Fieber de_article=das de_plural= duden=Fieber goethe= note= duden_quote="das Fieber; Genitiv: des Fiebers, Plural: die Fieber (Plural selten)" goethe_page=Goethe-A2 p.14 none
- A2[697] de=Husten de_article=der de_plural= duden=Husten goethe= note= duden_quote="der Husten; Genitiv: des Hustens, Plural: die Husten (Plural selten)" goethe_page=
- A2[811] de=Kleidung de_article=die de_plural= duden=Kleidungen goethe= note= duden_quote="die Kleidung; Genitiv: der Kleidung, Plural: die Kleidungen (Plural selten)" goethe_page=Goethe-A2 p.19 none
- A2[1111] de=Publikum de_article=das de_plural= duden=Publika goethe= note= duden_quote="das Publikum; Genitiv: des Publikums, Plural: die Publika (Plural selten)" goethe_page=
- A2[1448] de=Tod de_article=der de_plural= duden=Tode goethe= note= duden_quote="der Tod; Genitiv: des Tod[e]s, Plural: die Tode (Plural selten)" goethe_page=
- A2[1502] de=Unterricht de_article=der de_plural= duden=Unterrichte goethe= note= duden_quote="der Unterricht; Genitiv: des Unterricht[e]s, Plural: die Unterrichte (Plural selten)" goethe_page=Goethe-A1-Fit1 p.19 none Goethe-A2 p.28 none
- B1[652] de=Eifersucht de_article=die de_plural= duden=Eifersüchte goethe= note= duden_quote="die Eifersucht; Genitiv: der Eifersucht, Plural: die Eifersüchte (Plural selten)" goethe_page=
- B1[1175] de=Hagel de_article=der de_plural= duden=Hagel goethe= note= duden_quote="der Hagel; Genitiv: des Hagels, Plural: die Hagel (Plural selten)" goethe_page=
- B1[2409] de=Schande de_article=die de_plural= duden=Schanden goethe= note= duden_quote="die Schande; Genitiv: der Schande, Plural: die Schanden (Plural selten)" goethe_page=
- B2[1019] de=Götzendienst de_article=der de_plural= duden=Götzendienste goethe= note= duden_quote="der Götzendienst; Genitiv: des Götzendiensts, Götzendienstes, Plural: die Götzendienste (Plural selten)" goethe_page=
- C1[451] de=Rechenschaft de_article=die de_plural= duden=Rechenschaften goethe= note= duden_quote="die Rechenschaft; Genitiv: der Rechenschaft, Plural: die Rechenschaften (Plural selten)" goethe_page=

## NEEDS_SOURCE_REVIEW

Skaits: 109.

- A1[2] de=Wasser de_article=das de_plural= duden=Wasser | Wässer goethe= note= duden_quote="das Wasser; Genitiv: des Wassers, Plural: die Wasser und Wässer" goethe_page=Goethe-A1-Fit1 p.20 none Goethe-A2 p.30 none
- A1[120] de=Butter de_article=die de_plural= duden= goethe= note= duden_quote=die Butter; Genitiv: der Butter (ohne Plural) goethe_page=Goethe-A2 p.11 none
- A1[157] de=Eis de_article=das de_plural= duden= goethe= note= duden_quote=das Eis; Genitiv: des Eises (ohne Plural) goethe_page=Goethe-A1-Fit1 p.11 none Goethe-A2 p.13 none
- A1[229] de=Geld de_article=das de_plural= duden=Gelder goethe= note= duden_quote="das Geld; Genitiv: des Geld[e]s, Plural: die Gelder" goethe_page=Goethe-A1-Fit1 p.13 none Goethe-A2 p.16 none
- A1[244] de=Glück de_article=das de_plural= duden=Glücke goethe= note= duden_quote="das Glück; Genitiv: des Glücks, Glückes, Plural: die Glücke (Plural selten)" goethe_page=Goethe-A1-Fit1 p.13 none Goethe-A2 p.16 none
- A1[374] de=Liebe de_article=die de_plural= duden=Lieben goethe= note= duden_quote="die Liebe; Genitiv: der Liebe, Plural: die Lieben" goethe_page=
- A1[422] de=Musik de_article=die de_plural= duden=Musiken goethe= note= duden_quote="die Musik; Genitiv: der Musik, Plural: die Musiken" goethe_page=Goethe-A1-Fit1 p.16 none Goethe-A2 p.21 none
- A1[432] de=Natur de_article=die de_plural= duden=Naturen goethe= note= duden_quote="die Natur; Genitiv: der Natur, Plural: die Naturen" goethe_page=Goethe-A2 p.21 none
- A1[479] de=Polizei de_article=die de_plural= duden=Polizeien goethe= note= duden_quote="die Polizei; Genitiv: der Polizei, Plural: die Polizeien" goethe_page=Goethe-A2 p.23 none
- A1[496] de=Reis de_article=der de_plural= duden= goethe= note= duden_quote="der Reis; Genitiv: des Reises, (Sorten:) Reise" goethe_page=Goethe-A2 p.24 none
- A1[658] de=Wetter de_article=das de_plural= duden=Wetter goethe= note= duden_quote="das Wetter; Genitiv: des Wetters, Plural: die Wetter" goethe_page=Goethe-A2 p.30 none
- A1[669] de=Zucker de_article=der de_plural= duden= goethe= note= duden_quote="der Zucker; Genitiv: des Zuckers, (Sorten:) Zucker" goethe_page=Goethe-A2 p.31 none
- A1[693] de=Obst de_article=das de_plural= duden= goethe= note= duden_quote="das Obst; Genitiv: des Obstes, Obsts (ohne Plural)" goethe_page=Goethe-A1-Fit1 p.17 none
- A2[32] de=Alkohol de_article=der de_plural= duden= goethe= note= duden_quote="der Alkohol; Genitiv: des Alkohols, (Fachsprache:) Alkohole" goethe_page=
- A2[205] de=Bauchweh de_article=das de_plural= duden= goethe= note= duden_quote=das Bauchweh; Genitiv: des Bauchwehs (ohne Plural) goethe_page=
- A2[231] de=Benzin de_article=das de_plural= duden= goethe= note= duden_quote="das Benzin; Genitiv: des Benzins, (Arten:) Benzine" goethe_page=
- A2[270] de=Blut de_article=das de_plural= duden= goethe= note= duden_quote="das Blut; Genitiv: des Blut[e]s, (Fachsprache) Blute" goethe_page=
- A2[403] de=Eislauf de_article=der de_plural= duden= goethe= note= duden_quote="der Eislauf; Genitiv: des Eislaufs, Eislaufes (ohne Plural)" goethe_page=
- A2[458] de=Familienstand de_article=der de_plural= duden= goethe= note= duden_quote="der Familienstand; Genitiv: des Familienstands, Familienstandes (ohne Plural)" goethe_page=
- A2[559] de=Gebäck de_article=das de_plural= duden= goethe= note= duden_quote="das Gebäck; Genitiv: des Gebäck[e]s, (Sorten:) Gebäcke" goethe_page=
- A2[584] de=Geschirr de_article=das de_plural= duden=Geschirre goethe= note= duden_quote="das Geschirr; Genitiv: des Geschirr[e]s, Plural: die Geschirre" goethe_page=Goethe-A2 p.16 none
- A2[689] de=Hundefutter de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[690] de=Hundegebell de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[715] de=Internet de_article=das de_plural= duden= goethe= note= duden_quote=das Internet; Genitiv: des Internets (ohne Plural) goethe_page=Goethe-A1-Fit1 p.14 none Goethe-A2 p.18 none
- A2[796] de=Kinderfunk de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[814] de=Kleingeld de_article=das de_plural= duden= goethe= note= duden_quote="das Kleingeld; Genitiv: des Kleingeldes, Kleingelds (ohne Plural)" goethe_page=
- A2[905] de=Lust de_article=die de_plural= duden=Lüste goethe= note= duden_quote="die Lust; Genitiv: der Lust, Plural: die Lüste" goethe_page=Goethe-A1-Fit1 p.16 none Goethe-A2 p.20 none
- A2[925] de=Medizin de_article=die de_plural= duden=Medizinen goethe= note= duden_quote="die Medizin; Genitiv: der Medizin, Plural: die Medizinen" goethe_page=
- A2[994] de=Nahrung de_article=die de_plural= duden= goethe= note= duden_quote="die Nahrung; Genitiv: der Nahrung, (Fachsprache:) Nahrungen" goethe_page=
- A2[1008] de=Neujahr de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[1065] de=Pech de_article=das de_plural= duden=Peche goethe= note= duden_quote="das Pech; Genitiv: des Pechs, seltener: Peches, Plural (Arten): die Peche" goethe_page=
- A2[1135] de=Rechte de_article=die de_plural= duden= goethe= note= duden_quote="die/eine Rechte; der/einer Rechten, die Rechten/zwei Rechte" goethe_page=
- A2[1191] de=Sand de_article=der de_plural= duden= goethe= note= duden_quote="der Sand; Genitiv: des Sand[e]s, (besonders Fachsprache:) Sande und Sände" goethe_page=
- A2[1199] de=Schach de_article=das de_plural= duden=Schachs goethe= note= duden_quote="das Schach; Genitiv: des Schachs, Plural: die Schachs" goethe_page=
- A2[1273] de=Seilspringen de_article=das de_plural= duden= goethe= note= duden_quote=das Seilspringen; Genitiv: des Seilspringens (ohne Plural) goethe_page=
- A2[1281] de=Service de_article=der de_plural= duden=Services goethe= note= duden_quote="der, österreichisch auch: das Service; Genitiv: des Service[s], Plural: die Services […vɪs oder …vɪsɪs]" goethe_page=Goethe-A2 p.25 none
- A2[1334] de=Sonnenschein de_article=der de_plural= duden= goethe= note= duden_quote="der Sonnenschein; Genitiv: des Sonnenscheins, Sonnenscheines" goethe_page=
- A2[1347] de=Speck de_article=der de_plural= duden= goethe= note= duden_quote="der Speck; Genitiv: des Speck[e]s, (Sorten:) Specke" goethe_page=
- A2[1348] de=Speiseeis de_article=das de_plural= duden= goethe= note= duden_quote=das Speiseeis; Genitiv: des Speiseeises (ohne Plural) goethe_page=
- A2[1356] de=Sport de_article=der de_plural= duden= goethe= note= duden_quote="der Sport; Genitiv: des Sport[e]s, (Arten:) Sporte (Plural selten)" goethe_page=Goethe-A1-Fit1 p.19 none Goethe-A2 p.26 none
- A2[1368] de=Staub de_article=der de_plural= duden= goethe= note= duden_quote="der Staub; Genitiv: des Staub[e]s, (Fachsprache:) Staube und Stäube" goethe_page=
- A2[1412] de=Tabak de_article=der de_plural= duden= goethe= note= duden_quote="der Tabak; Genitiv: des Tabaks, (Sorten:) Tabake" goethe_page=
- A2[1517] de=Verkehr de_article=der de_plural= duden= goethe= note= duden_quote="der Verkehr; Genitiv: des Verkehrs, selten: Verkehres, (Fachsprache:) Verkehre" goethe_page=Goethe-A2 p.29 none
- B1[90] de=Ackerbau de_article=der de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B1[565] de=Dasein de_article=das de_plural= duden=Daseine goethe= note= duden_quote="das Dasein; Genitiv: des Daseins, Plural: die Daseine" goethe_page=
- B1[882] de=Feinwäsche de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[977] de=Gänsehaut de_article=die de_plural= duden= goethe= note= duden_quote=die Gänsehaut; Genitiv: der Gänsehaut (ohne Plural) goethe_page=
- B1[982] de=Gartenbau de_article=der de_plural= duden= goethe= note= duden_quote="der Gartenbau; Genitiv: des Gartenbaus, Gartenbaues (ohne Plural)" goethe_page=
- B1[1294] de=Höhenangst de_article=die de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B1[1592] de=Körperbau de_article=der de_plural= duden= goethe= note= duden_quote="der Körperbau; Genitiv: des Körperbaus, Körperbaues (ohne Plural)" goethe_page=
- B1[1608] de=Kraftverkehr de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[1682] de=Kürze de_article=die de_plural= duden= goethe= note= duden_quote=die Kürze; Genitiv: der Kürze goethe_page=
- B1[1783] de=Linke de_article=die de_plural= duden= goethe= note= duden_quote="die/eine Linke; der/einer Linken, die Linken/zwei Linke" goethe_page=
- B1[1887] de=Mittelalter de_article=das de_plural= duden= goethe= note= duden_quote=das Mittelalter; Genitiv: des Mittelalters (ohne Plural) goethe_page=
- B1[1902] de=Mondschein de_article=der de_plural= duden= goethe= note= duden_quote="der Mondschein; Genitiv: des Mondscheins, Mondscheines (ohne Plural)" goethe_page=
- B1[1909] de=Morgenpost de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[1916] de=Motorsport de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[2530] de=Schüttelfrost de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[2562] de=Schwimmsport de_article=der de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B1[2573] de=Seegang de_article=der de_plural= duden= goethe= note= duden_quote="der Seegang; Genitiv: des Seeganges, Seegangs (ohne Plural)" goethe_page=
- B1[2579] de=Segelsport de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[2611] de=Sex de_article=der de_plural= duden= goethe= note= duden_quote=der Sex; Genitiv: des Sex[es] (ohne Plural) goethe_page=
- B1[3236] de=Weltall de_article=das de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B1[3239] de=Weltraum de_article=der de_plural= duden= goethe= note= duden_quote="der Weltraum; Genitiv: des Weltraumes, Weltraums (ohne Plural)" goethe_page=
- B2[15] de=Anbau de_article=der de_plural= duden=Anbauten goethe= note= duden_quote="der Anbau; Genitiv: des Anbau[e]s, Plural: die Anbauten" goethe_page=
- B2[94] de=Atomenergie de_article=die de_plural= duden= goethe= note= duden_quote=die Atomenergie; Genitiv: der Atomenergie (ohne Plural) goethe_page=
- B2[137] de=Barrenturnen de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[145] de=Bauwesen de_article=das de_plural= duden= goethe= note= duden_quote=das Bauwesen; Genitiv: des Bauwesens (ohne Plural) goethe_page=
- B2[191] de=Bergbau de_article=der de_plural= duden= goethe= note= duden_quote="der Bergbau; Genitiv: des Bergbaus, Bergbaues (ohne Plural)" goethe_page=
- B2[275] de=Blutalkohol de_article=der de_plural= duden= goethe= note= duden_quote="der Blutalkohol; Genitiv: des Blutalkohols, (Fachsprache:) Blutalkohole" goethe_page=
- B2[316] de=Bundeswehr de_article=die de_plural= duden= goethe= note= duden_quote=die Bundeswehr; Genitiv: der Bundeswehr (ohne Plural) goethe_page=
- B2[354] de=Dasein de_article=das de_plural= duden=Daseine goethe= note= duden_quote="das Dasein; Genitiv: des Daseins, Plural: die Daseine" goethe_page=
- B2[598] de=Eisenbeton de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[753] de=Fahrerflucht de_article=die de_plural= duden= goethe= note= duden_quote=die Fahrerflucht; Genitiv: der Fahrerflucht (ohne Plural) goethe_page=
- B2[808] de=Flugwesen de_article=das de_plural= duden= goethe= note= duden_quote=das Flugwesen; Genitiv: des Flugwesens (ohne Plural) goethe_page=
- B2[847] de=Führernatur de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[919] de=Gemüsebau de_article=der de_plural= duden= goethe= note= duden_quote="der Gemüsebau; Genitiv: des Gemüsebaus, Gemüsebaues (ohne Plural)" goethe_page=
- B2[936] de=Geratewohl de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[992] de=Glasfiber de_article=die de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B2[1007] de=Gnadenbrot de_article=das de_plural= duden= goethe= note= duden_quote="das Gnadenbrot; Genitiv: des Gnadenbrotes, Gnadenbrots (ohne Plural)" goethe_page=
- B2[1031] de=Grenzverkehr de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1139] de=Hochmut de_article=der de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B2[1176] de=Keuchhusten de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1210] de=Länderkunde de_article=die de_plural= duden=Länderkunden goethe= note= duden_quote="die Länderkunde; Genitiv: der Länderkunde, Plural: die Länderkunden" goethe_page=
- B2[1256] de=Lohnabbau de_article=der de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B2[1266] de=Luftfahrt de_article=die de_plural= duden=Luftfahrten goethe= note= duden_quote="die Luftfahrt; Genitiv: der Luftfahrt, Plural: die Luftfahrten" goethe_page=
- B2[1292] de=Maschinenbau de_article=der de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B2[1390] de=Notwehr de_article=die de_plural= duden= goethe= note= duden_quote=die Notwehr; Genitiv: der Notwehr (ohne Plural) goethe_page=
- B2[1399] de=Obstbau de_article=der de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- B2[1578] de=Schiffbau de_article=der de_plural= duden= goethe= note= duden_quote="der Schiffbau; Genitiv: des Schiffbaues, Schiffbaus" goethe_page=
- B2[1624] de=Seenot de_article=die de_plural= duden= goethe= note= duden_quote=die Seenot; Genitiv: der Seenot (ohne Plural) goethe_page=
- B2[1628] de=Sehkraft de_article=die de_plural= duden= goethe= note= duden_quote=die Sehkraft; Genitiv: der Sehkraft (ohne Plural) goethe_page=
- B2[1733] de=Tiefsinn de_article=der de_plural= duden= goethe= note= duden_quote="der Tiefsinn; Genitiv: des Tiefsinnes, Tiefsinns (ohne Plural)" goethe_page=
- B2[1784] de=Ultraschall de_article=der de_plural= duden=Ultraschalle goethe= note= duden_quote="der Ultraschall; Genitiv: des Ultraschalls, Ultraschalles, Plural: die Ultraschalle" goethe_page=
- B2[2043] de=Wehrpflicht de_article=die de_plural= duden= goethe= note= duden_quote=die Wehrpflicht; Genitiv: der Wehrpflicht (ohne Plural) goethe_page=
- B2[2045] de=Weinbau de_article=der de_plural= duden= goethe= note= duden_quote="der Weinbau; Genitiv: des Weinbaus, Weinbaues (ohne Plural)" goethe_page=
- C1[25] de=Flugwetter de_article=das de_plural= duden= goethe= note= duden_quote=ohne Plural goethe_page=
- C1[81] de=Hausangestellte de_article=die de_plural= duden= goethe= note= duden_quote=vgl. Angestellte goethe_page=
- C1[148] de=Stabhochspringen de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[343] de=Gemeineigentum de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[416] de=Leistungssport de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[468] de=Segelflugsport de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[514] de=Verkehrswesen de_article=das de_plural= duden= goethe= note= duden_quote=das Verkehrswesen; Genitiv: des Verkehrswesens (ohne Plural) goethe_page=
- C2[145] de=Geschlechtsverkehr de_article=der de_plural= duden= goethe= note= duden_quote="der Geschlechtsverkehr; Genitiv: des Geschlechtsverkehrs, Geschlechtsverkehres (ohne Plural)" goethe_page=
- A2[737] de=Joghurt / Jogurt de_article=der de_plural=die Joghurts / Jogurts duden=Joghurt | Joghurts goethe= note= duden_quote="der oder (besonders österreichisch und schweizerisch) das Joghurt; Genitiv: des Joghurt[s], Plural: die Joghurt[s], ostösterreichisch …" goethe_page=
- B1[844] de=Examen de_article=das de_plural=die Examina duden=Examen goethe= note= duden_quote="das Examen; Genitiv: des Examens, Plural: die Examen, seltener: Examina" goethe_page=
- B1[1312] de=Hörsaal de_article=der de_plural=die Hörsäle duden=Hörsäle goethe= note= duden_quote="der Hörsaal; Genitiv: des Hörsaales, Hörsaals, Plural: die Hörsäle" goethe_page=
- B1[3201] de=Wartesaal de_article=der de_plural=die Wartesäle duden= goethe= note= duden_quote= goethe_page=
- B2[283] de=Bootsmann de_article=der de_plural=die Bootsleute duden=Bootsleute goethe= note= duden_quote="der ⟨Plural: Bootsleute, seltener: Bootsmänner⟩" goethe_page=

## NOT_IN_SOURCE

Skaits: 51.

- A1[303] de=Juli de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[34] de=Ameisen de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[275] de=Bootfahren de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[279] de=Boxen de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[282] de=Bratkartoffeln de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[691] de=Hundehaare de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[832] de=Kopfschmerzen de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[1025] de=Nudeln de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[1265] de=Schweiß de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- A2[1399] de=Straßenverkehr de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[227] de=Autoabgase de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[1370] de=Innere de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[1431] de=Judo de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[2351] de=Rudern de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[2694] de=Sportfunk de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[2802] de=Strickwaren de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[2959] de=Überstunden de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[3360] de=Erbe de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[227] de=Beute de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[273] de=Blumenzucht de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[301] de=Brettsegeln de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[384] de=Devisen de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[436] de=Dreharbeiten de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[784] de=Festspiele de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[792] de=Firmenkapital de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[923] de=Genmaterial de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[981] de=Gezeiten de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1036] de=Großmut de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1049] de=Güterversand de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1155] de=Immobilien de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1195] de=Konsumgüter de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1317] de=Militär de_article=das de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1343] de=Muße de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1366] de=Naturgewalten de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1701] de=Steuergelder de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1704] de=Stoßverkehr de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[1709] de=Streitkräfte de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[107] de=Menschenrechte de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[155] de=Tagesnachrichten de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[306] de=Erntearbeiten de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[315] de=Fortbildungskurse de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[325] de=Gebrauchtwaren de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[368] de=Gewissensbisse de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[393] de=Industrieabgase de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[394] de=Industrieabwässer de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[483] de=Steuereinnahmen de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[487] de=Tageseinnahmen de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C1[546] de=Wasserheilanstalt de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- C2[28] de=Elementarkenntnisse de_article=die de_plural= duden= goethe= note= duden_quote= goethe_page=
- B1[1404] de=Jagderlaubnis de_article=die de_plural=die Jagderlaubse duden= goethe= note= duden_quote= goethe_page=
- C2[153] de=gesetzgebende Gewalt de_article=die de_plural=die gesetzgebenden Gewalten duden= goethe= note= duden_quote= goethe_page=

## AMBIGUOUS

Skaits: 19.

- A1[56] de=August de_article=der de_plural= duden= goethe= note= duden_quote="August; Genitiv: Augusts, August" goethe_page=
- A1[234] de=Geschwister de_article=die de_plural= duden= goethe=Geschwister note= duden_quote="das Geschwister; Genitiv: des Geschwisters, Plural: die Geschwister" goethe_page=Goethe-A1-Fit1 p.6 only Goethe-A1-SD1 p.16 only Goethe-B1 p.45 only
- A1[480] de=Post de_article=die de_plural= duden= goethe= note= duden_quote="der Post; Genitiv: des Posts, Plural: die Posts" goethe_page=Goethe-A1-Fit1 p.17 none Goethe-A2 p.23 none
- A1[691] de=Essen de_article=das de_plural= duden= goethe=Essen note= duden_quote="das Essen; Genitiv: des Essens, Plural: die Essen || Essen; Genitiv: Essens, Essen" goethe_page=Goethe-A1-Fit1 p.12 - Goethe-A2 p.14 - Goethe-B1 p.38 -
- A2[586] de=Geschwister de_article=die de_plural= duden= goethe=Geschwister note= duden_quote="das Geschwister; Genitiv: des Geschwisters, Plural: die Geschwister" goethe_page=Goethe-A1-Fit1 p.6 only Goethe-A1-SD1 p.16 only Goethe-B1 p.45 only
- A2[688] de=Humor de_article=der de_plural= duden= goethe= note= duden_quote="der Humor; Genitiv: des Humors, Plural: die Humores [huˈmoːreːs] || der Humor; Genitiv: des Humors, Plural: die Humore" goethe_page=
- A2[1129] de=Rauch de_article=der de_plural= duden= goethe= note= duden_quote=der Rauch; Genitiv: des Rauchs || der Rauch; Genitiv: des Rauch[e]s goethe_page=
- A2[1227] de=Schlaf de_article=der de_plural= duden= goethe= note= duden_quote="der Schlaf; Genitiv: des Schlaf[e]s || der Schlaf; Genitiv: des Schlaf[e]s, Schläfe" goethe_page=
- B1[458] de=Blei de_article=das de_plural= duden= goethe= note= duden_quote="der, (landschaftlich auch:) das Blei; Genitiv: des Blei[e]s, Plural: die Bleie und Bleis || das Blei; Genitiv: des Blei[e]s, (Arten:) Bleie" goethe_page=
- B1[944] de=Freie de_article=das de_plural= duden= goethe= note= duden_quote="die/eine Freie; der/einer Freien, die Freien/zwei Freie" goethe_page=
- B1[972] de=Futter de_article=das de_plural= duden= goethe= note= duden_quote="das Futter; Genitiv: des Futters, Plural: die Futter || das Futter; Genitiv: des Futters, Plural: die Futter" goethe_page=
- B1[1661] de=Kunde de_article=die de_plural= duden= goethe= note= duden_quote="die Kunde; Genitiv: der Kunde, Plural: die Kunden || die Kunde; Genitiv: der Kunde, Plural: die Kunden (Plural selten)" goethe_page=Goethe-A1-SD1 p.19 -n Goethe-A2 p.19 -n Goethe-B1 p.58 -n
- B1[2633] de=Sitten de_article=die de_plural= duden= goethe= note= duden_quote="Sitten; Genitiv: Sittens, Sitten" goethe_page=
- B2[222] de=Betracht de_article=der de_plural= duden= goethe= note= duden_quote= goethe_page=
- B2[555] de=Eingeweide de_article=die de_plural= duden= goethe= note= duden_quote="das Eingeweide; Genitiv: des Eingeweides, Plural: die Eingeweide (meist im Plural)" goethe_page=
- B2[796] de=Flaum de_article=der de_plural= duden= goethe= note= duden_quote=der Flaum; Genitiv: des Flaum[e]s || der Flaum; Genitiv: des Flaum[e]s goethe_page=
- B2[835] de=Fremde de_article=die de_plural= duden= goethe= note= duden_quote="die Fremde; Genitiv: der Fremde || die/eine Fremde; der/einer Fremden, die Fremden/zwei Fremde" goethe_page=
- B2[1194] de=Konsum de_article=der de_plural= duden= goethe= note= duden_quote="der Konsum; Genitiv: des Konsums, Plural: die Konsums || der Konsum; Genitiv: des Konsums" goethe_page=
- C1[51] de=Büroangestellte de_article=der de_plural= duden= goethe= note= duden_quote=vgl. Angestellte goethe_page=

## Galotne -n, kas nav lemma+n

Sarakstā ir izvēlētā Duden forma, kas beidzas ar n un nav vienāda ar lemma+n. Nominatīvs Trümmer nav šajā sarakstā.

Skaits: 57.

- A1[160] de=Eltern lemma=Eltern form=Eltern duden=PLURAL_ONLY
- A1[338] de=Kleidung lemma=Kleidung form=Kleidungen duden=PLURAL_RARE
- A1[405] de=Milch lemma=Milch form=Milchen duden=PLURAL_FOUND
- A1[418] de=Morgen lemma=Morgen form=Morgen duden=NEEDS_SOURCE_REVIEW
- A1[422] de=Musik lemma=Musik form=Musiken duden=NEEDS_SOURCE_REVIEW
- A1[432] de=Natur lemma=Natur form=Naturen duden=NEEDS_SOURCE_REVIEW
- A1[479] de=Polizei lemma=Polizei form=Polizeien duden=NEEDS_SOURCE_REVIEW
- A1[694] de=Ferien lemma=Ferien form=Ferien duden=PLURAL_ONLY
- A2[153] de=Augentropfen lemma=Augentropfen form=Augentropfen duden=PLURAL_ONLY
- A2[613] de=Gymnastik lemma=Gymnastik form=Gymnastiken duden=PLURAL_FOUND
- A2[619] de=Haferflocken lemma=Haferflocken form=Haferflocken duden=PLURAL_ONLY
- A2[697] de=Husten lemma=Husten form=Husten duden=PLURAL_RARE
- A2[811] de=Kleidung lemma=Kleidung form=Kleidungen duden=PLURAL_RARE
- A2[925] de=Medizin lemma=Medizin form=Medizinen duden=NEEDS_SOURCE_REVIEW
- A2[1579] de=Werbung lemma=Werbung form=Werbungen duden=NEEDS_SOURCE_REVIEW
- A2[1588] de=Wiedersehen lemma=Wiedersehen form=Wiedersehen duden=PLURAL_FOUND
- B1[247] de=Baukosten lemma=Baukosten form=Baukosten duden=PLURAL_ONLY
- B1[1024] de=Gegenwart lemma=Gegenwart form=Gegenwarten duden=PLURAL_FOUND
- B1[1773] de=Lidschatten lemma=Lidschatten form=Lidschatten duden=PLURAL_FOUND
- B1[1841] de=Masern lemma=Masern form=Masern duden=PLURAL_ONLY
- B1[1966] de=Nebenkosten lemma=Nebenkosten form=Nebenkosten duden=PLURAL_ONLY
- B1[2274] de=Reisespesen lemma=Reisespesen form=Reisespesen duden=PLURAL_ONLY
- B1[2495] de=Schneetreiben lemma=Schneetreiben form=Schneetreiben duden=PLURAL_FOUND
- B1[2884] de=Textilwaren lemma=Textilwaren form=Textilwaren duden=PLURAL_ONLY
- B1[2926] de=Tropen lemma=Tropen form=Tropen duden=PLURAL_ONLY
- B1[3361] de=Schaden lemma=Schaden form=Schäden duden=NEEDS_SOURCE_REVIEW
- B2[15] de=Anbau lemma=Anbau form=Anbauten duden=NEEDS_SOURCE_REVIEW
- B2[78] de=Abzweigung lemma=Abzweigung form=Abzweigungen duden=PLURAL_FOUND
- B2[475] de=Durchfuhr lemma=Durchfuhr form=Durchfuhren duden=PLURAL_FOUND
- B2[509] de=Ehrenpflicht lemma=Ehrenpflicht form=Ehrenpflichten duden=PLURAL_FOUND
- B2[1114] de=Heuschnupfen lemma=Heuschnupfen form=Heuschnupfen duden=PLURAL_FOUND
- B2[1266] de=Luftfahrt lemma=Luftfahrt form=Luftfahrten duden=NEEDS_SOURCE_REVIEW
- B2[1268] de=Luftpost lemma=Luftpost form=Luftposten duden=PLURAL_FOUND
- B2[1281] de=Mahnschreiben lemma=Mahnschreiben form=Mahnschreiben duden=PLURAL_FOUND
- B2[1311] de=Miederwaren lemma=Miederwaren form=Miederwaren duden=PLURAL_ONLY
- B2[1420] de=Ortszeit lemma=Ortszeit form=Ortszeiten duden=PLURAL_FOUND
- B2[1443] de=Pfahlbau lemma=Pfahlbau form=Pfahlbauten duden=PLURAL_FOUND
- B2[1488] de=Radioaktivität lemma=Radioaktivität form=Radioaktivitäten duden=PLURAL_FOUND
- B2[1494] de=Rauchwaren lemma=Rauchwaren form=Rauchwaren duden=PLURAL_ONLY
- B2[1632] de=Selbstkosten lemma=Selbstkosten form=Selbstkosten duden=PLURAL_ONLY
- B2[1661] de=Sorgepflicht lemma=Sorgepflicht form=Sorgepflichten duden=PLURAL_FOUND
- B2[1762] de=Übereinkommen lemma=Übereinkommen form=Übereinkommen duden=PLURAL_FOUND
- B2[1831] de=Unkosten lemma=Unkosten form=Unkosten duden=PLURAL_ONLY
- B2[2051] de=Weltraumfahrt lemma=Weltraumfahrt form=Weltraumfahrten duden=PLURAL_FOUND
- B2[2085] de=Zuflucht lemma=Zuflucht form=Zufluchten duden=PLURAL_FOUND
- C1[132] de=Reparaturkosten lemma=Reparaturkosten form=Reparaturkosten duden=PLURAL_ONLY
- C1[143] de=Schwiegereltern lemma=Schwiegereltern form=Schwiegereltern duden=PLURAL_ONLY
- C1[236] de=Betriebskosten lemma=Betriebskosten form=Betriebskosten duden=PLURAL_ONLY
- C1[446] de=Produktionskosten lemma=Produktionskosten form=Produktionskosten duden=PLURAL_ONLY
- C1[451] de=Rechenschaft lemma=Rechenschaft form=Rechenschaften duden=PLURAL_RARE
- C2[7] de=Sorgfaltspflicht lemma=Sorgfaltspflicht form=Sorgfaltspflichten duden=PLURAL_FOUND
- A2[919] de=Material lemma=Material form=Materialien duden=PLURAL_FOUND
- A2[1362] de=Stadion lemma=Stadion form=Stadien duden=PLURAL_FOUND
- B1[844] de=Examen lemma=Examen form=Examen duden=NEEDS_SOURCE_REVIEW
- B1[2162] de=Prinzip lemma=Prinzip form=Prinzipien duden=PLURAL_FOUND
- B2[442] de=Dressman lemma=Dressman form=Dressmen duden=PLURAL_FOUND
- C1[241] de=Beweismaterial lemma=Beweismaterial form=Beweismaterialien duden=PLURAL_FOUND

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

## STAGE RESULT

CHECK_COMPLETENESS: PASS

STAGE RESULT: NEEDS OWNER REVIEW

