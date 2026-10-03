# Plural source check

Šis audits pārbauda daudzskaitli pret Duden un Goethe-Institut. Verdikts NOT_CHECKED vai NOT_IN_SOURCE nenozīmē, ka forma ir pareiza.

DE lauki netiek laboti. Avota forma atskaitē ir atrastā forma, nevis ieteiktais labojums. Šķirkļu teksts repozitorijā netiek glabāts.

## Izdalīšanas noteikumi

1. Duden URL ir /rechtschreibung/<slug> (atstarpe → _, äöüß → ae/oe/ue/ss). HTTP 200 un h1 = lemma ir šķirklis. HTTP 404 nav šķirklis; citus šķirkļus dod sitemap-lexeme saites <slug> un <slug>_.
2. Genus nāk no Wortart: maskulin→der, feminin→die, Neutrum→das. Vairāki dzimumi paliek kopa; de_article atbilst vienam no tiem. Pluralwort → PLURAL_ONLY.
3. Daudzskaitļa forma nāk tikai no 'Plural:' vai 'Plural (…):' pirmā gramatikas <p> un Bedeutung Grammatik rindās. Leņķiekavas, IPA un iekavas noņem. [s]/[n] dod abus rakstījumus. '(Plural selten)' → PLURAL_RARE. Piemēri: Erlaubnis → Erlaubnisse; Pfahlbau → Pfahlbauten; Beton → Betons, Betone.
4. 'nur im Plural' vai Pluralwort bez atsevišķas formas ir PLURAL_ONLY. Piemērs: Eltern.
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
| Goethe-B2 | NOT_IN_SOURCE | https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B2_Wortliste.pdf |  | 0 |

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
| Eltern |  |  | PLURAL_ONLY | die | Eltern | PLURAL_ONLY |
| Ferien |  |  | PLURAL_ONLY | die | Ferien | PLURAL_ONLY |
| Kosmetik | die |  | NO_PLURAL_LISTED | die |  | NO_PLURAL_LISTED |
| Band | der:Band_Buch; das:Band_Gewebestreifen; die:Band_Musikergruppe | der:Bände:PLURAL_FOUND; das:Bänder/Bande:PLURAL_FOUND; die:Bands:PLURAL_FOUND | AMBIGUOUS | die | Bands | PLURAL_FOUND |
| See | der:See_Binnengewaesser; die:See_Meer | der:Seen:PLURAL_FOUND; die:Seen:NEEDS_SOURCE_REVIEW | AMBIGUOUS | der | Seen | PLURAL_FOUND |
| Tor | der:Tor_Dummkopf; das:Tor_Treffer | der:Toren:PLURAL_FOUND; das:Tore:PLURAL_FOUND | AMBIGUOUS | das | Tore | PLURAL_FOUND |

## Kopsavilkums

Rindas: 506. CHECK_COMPLETENESS: PASS.

| salīdzinājums | skaits |
|---|---:|
| AMBIGUOUS | 42 |
| CONSISTENT | 212 |
| MISSING_PLURAL_IN_DATA | 54 |
| NEEDS_SOURCE_REVIEW | 114 |
| NOT_IN_SOURCE | 51 |
| PLURAL_FORM_MISMATCH | 1 |
| REVIEW_RARE_PLURAL | 16 |
| SOURCES_DISAGREE | 16 |

| Duden | skaits |
|---|---:|
| AMBIGUOUS | 42 |
| NEEDS_SOURCE_REVIEW | 114 |
| NOT_IN_SOURCE | 53 |
| NO_PLURAL_LISTED | 199 |
| PLURAL_FOUND | 76 |
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

Skaits: 54.

- A1[330] de=Kaffee de_article=der de_plural= duden=Kaffees goethe=Kaffees ref=Duden https://www.duden.de/rechtschreibung/Kaffee; Goethe-A1-Fit1 p.14; Goethe-A2 p.18
- A1[453] de=November de_article=der de_plural= duden=November goethe= ref=Duden https://www.duden.de/rechtschreibung/November
- A1[464] de=Oktober de_article=der de_plural= duden=Oktober goethe= ref=Duden https://www.duden.de/rechtschreibung/Oktober
- A1[546] de=September de_article=der de_plural= duden=September goethe= ref=Duden https://www.duden.de/rechtschreibung/September
- A1[695] de=Urlaub de_article=der de_plural= duden=Urlaube goethe=Urlaube ref=Duden https://www.duden.de/rechtschreibung/Urlaub; Goethe-A2 p.28; Goethe-B1 p.91
- A2[93] de=Aschenputtel de_article=das de_plural= duden=Aschenputtel goethe= ref=Duden https://www.duden.de/rechtschreibung/Aschenputtel
- A2[265] de=Blumenkohl de_article=der de_plural= duden=Blumenkohle goethe= ref=Duden https://www.duden.de/rechtschreibung/Blumenkohl
- A2[343] de=Dill de_article=der de_plural= duden=Dille goethe= ref=Duden https://www.duden.de/rechtschreibung/Dill
- A2[613] de=Gymnastik de_article=die de_plural= duden=Gymnastiken goethe= ref=Duden https://www.duden.de/rechtschreibung/Gymnastik
- A2[793] de=Ketchup de_article=der de_plural= duden=Ketchups goethe= ref=Duden https://www.duden.de/rechtschreibung/Ketchup
- A2[1279] de=Senf de_article=der de_plural= duden=Senfe goethe= ref=Duden https://www.duden.de/rechtschreibung/Senf
- A2[1588] de=Wiedersehen de_article=das de_plural= duden=Wiedersehen goethe=Wiedersehen ref=Duden https://www.duden.de/rechtschreibung/Wiedersehen; Goethe-A1-Fit1 p.20; Goethe-A2 p.30
- A2[1593] de=Wille de_article=der de_plural= duden=Willen goethe= ref=Duden https://www.duden.de/rechtschreibung/Wille
- B1[402] de=Beton de_article=der de_plural= duden=Betons | Betone goethe= ref=Duden https://www.duden.de/rechtschreibung/Beton
- B1[437] de=Biathlon de_article=das de_plural= duden=Biathlons goethe= ref=Duden https://www.duden.de/rechtschreibung/Biathlon
- B1[1024] de=Gegenwart de_article=die de_plural= duden=Gegenwarten goethe= ref=Duden https://www.duden.de/rechtschreibung/Gegenwart
- B1[1403] de=Jagdbeute de_article=die de_plural= duden=Jagdbeuten goethe= ref=Duden https://www.duden.de/rechtschreibung/Jagdbeute
- B1[1773] de=Lidschatten de_article=der de_plural= duden=Lidschatten goethe= ref=Duden https://www.duden.de/rechtschreibung/Lidschatten
- B1[2495] de=Schneetreiben de_article=das de_plural= duden=Schneetreiben goethe= ref=Duden https://www.duden.de/rechtschreibung/Schneetreiben
- B1[2868] de=Tauwetter de_article=das de_plural= duden=Tauwetter goethe= ref=Duden https://www.duden.de/rechtschreibung/Tauwetter
- B1[2932] de=Trümmer de_article=die de_plural= duden=Trümmern goethe= ref=Duden https://www.duden.de/rechtschreibung/Truemmer_Bruchstueck_frueher
- B1[3304] de=Zutritt de_article=der de_plural= duden=Zutritte goethe= ref=Duden https://www.duden.de/rechtschreibung/Zutritt
- B2[78] de=Abzweigung de_article=die de_plural= duden=Abzweigungen goethe= ref=Duden https://www.duden.de/rechtschreibung/Abzweigung
- B2[252] de=Bienenwachs de_article=das de_plural= duden=Bienenwachse goethe= ref=Duden https://www.duden.de/rechtschreibung/Bienenwachs
- B2[330] de=Cholesterin de_article=das de_plural= duden=Cholesterine goethe= ref=Duden https://www.duden.de/rechtschreibung/Cholesterin
- B2[475] de=Durchfuhr de_article=die de_plural= duden=Durchfuhren goethe= ref=Duden https://www.duden.de/rechtschreibung/Durchfuhr
- B2[509] de=Ehrenpflicht de_article=die de_plural= duden=Ehrenpflichten goethe= ref=Duden https://www.duden.de/rechtschreibung/Ehrenpflicht
- B2[776] de=Feingefühl de_article=das de_plural= duden=Feingefühle goethe= ref=Duden https://www.duden.de/rechtschreibung/Feingefuehl
- B2[807] de=Flugverkehr de_article=der de_plural= duden=Flugverkehre goethe= ref=Duden https://www.duden.de/rechtschreibung/Flugverkehr
- B2[1081] de=Heilkunde de_article=die de_plural= duden=Heilkunden goethe= ref=Duden https://www.duden.de/rechtschreibung/Heilkunde
- B2[1114] de=Heuschnupfen de_article=der de_plural= duden=Heuschnupfen goethe= ref=Duden https://www.duden.de/rechtschreibung/Heuschnupfen
- B2[1175] de=Kaufkraft de_article=die de_plural= duden=Kaufkräfte goethe= ref=Duden https://www.duden.de/rechtschreibung/Kaufkraft
- B2[1206] de=Laienkunst de_article=die de_plural= duden=Laienkünste goethe= ref=Duden https://www.duden.de/rechtschreibung/Laienkunst
- B2[1268] de=Luftpost de_article=die de_plural= duden=Luftposten goethe= ref=Duden https://www.duden.de/rechtschreibung/Luftpost
- B2[1281] de=Mahnschreiben de_article=das de_plural= duden=Mahnschreiben goethe= ref=Duden https://www.duden.de/rechtschreibung/Mahnschreiben
- B2[1295] de=Massenware de_article=die de_plural= duden=Massenwaren goethe= ref=Duden https://www.duden.de/rechtschreibung/Massenware
- B2[1372] de=Nesselfieber de_article=das de_plural= duden=Nesselfieber goethe= ref=Duden https://www.duden.de/rechtschreibung/Nesselfieber
- B2[1420] de=Ortszeit de_article=die de_plural= duden=Ortszeiten goethe= ref=Duden https://www.duden.de/rechtschreibung/Ortszeit
- B2[1443] de=Pfahlbau de_article=der de_plural= duden=Pfahlbauten goethe= ref=Duden https://www.duden.de/rechtschreibung/Pfahlbau
- B2[1459] de=Porno de_article=der de_plural= duden=Pornos goethe= ref=Duden https://www.duden.de/rechtschreibung/Porno
- B2[1488] de=Radioaktivität de_article=die de_plural= duden=Radioaktivitäten goethe= ref=Duden https://www.duden.de/rechtschreibung/Radioaktivitaet
- B2[1629] de=Naturseide de_article=die de_plural= duden=Naturseiden goethe= ref=Duden https://www.duden.de/rechtschreibung/Naturseide
- B2[1661] de=Sorgepflicht de_article=die de_plural= duden=Sorgepflichten goethe= ref=Duden https://www.duden.de/rechtschreibung/Sorgepflicht
- B2[1713] de=Striptease de_article=der de_plural= duden=Stripteases goethe= ref=Duden https://www.duden.de/rechtschreibung/Striptease
- B2[1752] de=Triebkraft de_article=die de_plural= duden=Triebkräfte goethe= ref=Duden https://www.duden.de/rechtschreibung/Triebkraft
- B2[1762] de=Übereinkommen de_article=das de_plural= duden=Übereinkommen goethe= ref=Duden https://www.duden.de/rechtschreibung/Uebereinkommen
- B2[2051] de=Weltraumfahrt de_article=die de_plural= duden=Weltraumfahrten goethe= ref=Duden https://www.duden.de/rechtschreibung/Weltraumfahrt
- B2[2085] de=Zuflucht de_article=die de_plural= duden=Zufluchten goethe= ref=Duden https://www.duden.de/rechtschreibung/Zuflucht
- C1[244] de=Bildhauerkunst de_article=die de_plural= duden=Bildhauerkünste goethe= ref=Duden https://www.duden.de/rechtschreibung/Bildhauerkunst
- C1[276] de=Durchgangsverkehr de_article=der de_plural= duden=Durchgangsverkehre goethe= ref=Duden https://www.duden.de/rechtschreibung/Durchgangsverkehr
- C1[550] de=Wehrersatzdienst de_article=der de_plural= duden=Wehrersatzdienste goethe= ref=Duden https://www.duden.de/rechtschreibung/Wehrersatzdienst
- C2[7] de=Sorgfaltspflicht de_article=die de_plural= duden=Sorgfaltspflichten goethe= ref=Duden https://www.duden.de/rechtschreibung/Sorgfaltspflicht
- C2[44] de=Katastrophendienst de_article=der de_plural= duden=Katastrophendienste goethe= ref=Duden https://www.duden.de/rechtschreibung/Katastrophendienst
- C2[97] de=Informationsdefizit de_article=das de_plural= duden=Informationsdefizite goethe= ref=Duden https://www.duden.de/rechtschreibung/Informationsdefizit

## PLURAL_FORM_MISMATCH

Skaits: 1.

- B1[1597] de=Kosmetik de_article=die de_plural=die Kosmetika duden= goethe= ref=Duden https://www.duden.de/rechtschreibung/Kosmetik; Goethe-A2 p.19

## SOURCES_DISAGREE

Skaits: 16.

- A1[11] de=Alter de_article=das de_plural= duden=Alter goethe= ref=Duden https://www.duden.de/rechtschreibung/Alter_Lebensabschnitt; Goethe-A1-Fit1 p.9; Goethe-A2 p.8
- A1[306] de=Jeans de_article=die de_plural= duden=Jeans goethe=Jeans ref=Duden https://www.duden.de/rechtschreibung/Jeans_Hose; Goethe-A1-Fit1 p.14; Goethe-A2 p.18; Goethe-B1 p.52
- A1[335] de=Käse de_article=der de_plural= duden=Käse goethe= ref=Duden https://www.duden.de/rechtschreibung/Kaese; Goethe-A1-Fit1 p.14; Goethe-A2 p.18
- A1[338] de=Kleidung de_article=die de_plural= duden=Kleidungen goethe= ref=Duden https://www.duden.de/rechtschreibung/Kleidung; Goethe-A2 p.19
- A1[405] de=Milch de_article=die de_plural= duden=Milche | Milchen goethe= ref=Duden https://www.duden.de/rechtschreibung/Milch; Goethe-A1-Fit1 p.16; Goethe-A2 p.21
- A1[520] de=Schokolade de_article=die de_plural= duden=Schokoladen goethe= ref=Duden https://www.duden.de/rechtschreibung/Schokolade; Goethe-A1-Fit1 p.18
- A1[689] de=Appetit de_article=der de_plural= duden=Appetite goethe= ref=Duden https://www.duden.de/rechtschreibung/Appetit; Goethe-A1-Fit1 p.9
- A1[692] de=Gemüse de_article=das de_plural= duden=Gemüse goethe= ref=Duden https://www.duden.de/rechtschreibung/Gemuese; Goethe-A1-Fit1 p.13; Goethe-A2 p.16
- A2[426] de=Erlaubnis de_article=die de_plural= duden=Erlaubnisse goethe= ref=Duden https://www.duden.de/rechtschreibung/Erlaubnis; Goethe-A2 p.14
- A2[488] de=Fieber de_article=das de_plural= duden=Fieber goethe= ref=Duden https://www.duden.de/rechtschreibung/Fieber; Goethe-A2 p.14
- A2[666] de=Himmel de_article=der de_plural= duden=Himmel goethe= ref=Duden https://www.duden.de/rechtschreibung/Himmel; Goethe-A2 p.17
- A2[811] de=Kleidung de_article=die de_plural= duden=Kleidungen goethe= ref=Duden https://www.duden.de/rechtschreibung/Kleidung; Goethe-A2 p.19
- A2[1404] de=Stress de_article=der de_plural= duden=Stresse goethe= ref=Duden https://www.duden.de/rechtschreibung/Stress; Goethe-A2 p.27
- A2[1502] de=Unterricht de_article=der de_plural= duden=Unterrichte goethe= ref=Duden https://www.duden.de/rechtschreibung/Unterricht; Goethe-A1-Fit1 p.19; Goethe-A2 p.28
- B1[867] de=Fasching de_article=der de_plural= duden=Faschinge | Faschings goethe=Fasching ref=Duden https://www.duden.de/rechtschreibung/Fasching; Goethe-B1 p.39
- B1[3260] de=Wiederhören de_article=das de_plural= duden= goethe=Wiederhören ref=Duden https://www.duden.de/rechtschreibung/Wiederhoeren; Goethe-A2 p.30

## REVIEW_RARE_PLURAL

Skaits: 16.

- A1[41] de=April de_article=der de_plural= duden=Aprile goethe= ref=Duden https://www.duden.de/rechtschreibung/April
- A1[136] de=Dezember de_article=der de_plural= duden=Dezember goethe= ref=Duden https://www.duden.de/rechtschreibung/Dezember
- A1[178] de=Februar de_article=der de_plural= duden=Februare goethe= ref=Duden https://www.duden.de/rechtschreibung/Februar
- A1[298] de=Januar de_article=der de_plural= duden=Januare goethe= ref=Duden https://www.duden.de/rechtschreibung/Januar
- A1[305] de=Juni de_article=der de_plural= duden=Junis goethe= ref=Duden https://www.duden.de/rechtschreibung/Juni
- A1[389] de=Mai de_article=der de_plural= duden=Maie goethe= ref=Duden https://www.duden.de/rechtschreibung/Mai
- A1[396] de=März de_article=der de_plural= duden=Märze goethe= ref=Duden https://www.duden.de/rechtschreibung/Maerz
- A2[217] de=Beginn de_article=der de_plural= duden=Beginne goethe= ref=Duden https://www.duden.de/rechtschreibung/Beginn
- A2[697] de=Husten de_article=der de_plural= duden=Husten goethe= ref=Duden https://www.duden.de/rechtschreibung/Husten
- A2[1111] de=Publikum de_article=das de_plural= duden=Publika goethe= ref=Duden https://www.duden.de/rechtschreibung/Publikum
- A2[1448] de=Tod de_article=der de_plural= duden=Tode goethe= ref=Duden https://www.duden.de/rechtschreibung/Tod
- B1[652] de=Eifersucht de_article=die de_plural= duden=Eifersüchte goethe= ref=Duden https://www.duden.de/rechtschreibung/Eifersucht
- B1[1175] de=Hagel de_article=der de_plural= duden=Hagel goethe= ref=Duden https://www.duden.de/rechtschreibung/Hagel
- B1[2409] de=Schande de_article=die de_plural= duden=Schanden goethe= ref=Duden https://www.duden.de/rechtschreibung/Schande
- B2[1019] de=Götzendienst de_article=der de_plural= duden=Götzendienste goethe= ref=Duden https://www.duden.de/rechtschreibung/Goetzendienst
- C1[451] de=Rechenschaft de_article=die de_plural= duden=Rechenschaften goethe= ref=Duden https://www.duden.de/rechtschreibung/Rechenschaft

## STAGE RESULT

CHECK_COMPLETENESS: PASS

STAGE RESULT: NEEDS OWNER REVIEW

