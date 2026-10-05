# Čehu apgrieztā pārbaude T1c

STAGE RESULT: NEEDS OWNER REVIEW

Standarts: MASTER 1.20, `origin/main` `9b44e89506a66a39e6ca375d6106566396ef8f10`. A soļa fails ir #878 satura commits `466207ea56ee2dfc0755c4c1f73b48f342be79c4`. B solis nav izpildīts.

Avots: `pons-de-cs`, virziens čehu→vācu, `https://de.pons.com/übersetzung/tschechisch-deutsch/{vārds}` bez `?`. `robots.txt` šo ceļu neaizliedz. Aizliegti ir tulkošanas URL ar vaicājumu un `/dict/results/`. Temps: 1 pieprasījums sekundē, 1 vienlaikus. Kešs ir `/tmp`, ārpus repozitorija.

A verdikti sakrīt ar gaidītajiem: MATCH 4448, PARTIAL_MATCH 607, NO_MATCH 2687, NOT_IN_SOURCE 752, AMBIGUOUS 124. Ieraksti: 8618. Unikālas `de` formas: 8523. Unikālas pēc casefold: 8492. A soļa kešā ir 8493 vaicājumi, jo četras slīpsvītras lemmas tika meklētas kā piecas daļas. Kartīšu pārklājums pret `data/cs` ir 8618/8618.

Apgrieztajai pārbaudei ņemti NO_MATCH, PARTIAL_MATCH un AMBIGUOUS: 3418 ieraksti, 5077 daļas, 4193 unikāli čehu vārdi. Tīkls: 4193 pieprasījumi un viens atkārtojums pēc HTTP 503 vārdam Převést. Pārējie statusi ir 200. 20% vārtos prognoze bija 7462 sekundes, zem 4 stundām. Kopējais tīkla laiks: 7597 sekundes.

B avots Ústav pro jazyk český, id `registry-3-cs`, paliek SOURCE_UNAVAILABLE. `robots.txt` aizliedz `/?slovo=` un `/?id=`. Pieprasījumi nav sūtīti.

## Gala statuss

- CONFIRMED_BILINGUAL: 4448 (51.61%)
- CONFIRMED_BILINGUAL_PARTIAL: 607 (7.04%)
- CONFIRMED_REVERSE: 478 (5.55%)
- PARTIAL_CONFIRMED: 129 (1.50%)
- WRONG_BY_SOURCE: 708 (8.22%)
- CZECH_WORD_NOT_IN_SOURCE: 1199 (13.91%)
- NEEDS_REVIEW: 297 (3.45%)
- NEEDS_SOURCE_REVIEW: 752 (8.73%)

NO_MATCH, kas kļuva CONFIRMED_REVERSE: 478 no 2687 (17.79%).

## Pārejas matrica

| A verdikts | CONFIRMED_BILINGUAL | CONFIRMED_BILINGUAL_PARTIAL | CONFIRMED_REVERSE | PARTIAL_CONFIRMED | WRONG_BY_SOURCE | CZECH_WORD_NOT_IN_SOURCE | NEEDS_REVIEW | NEEDS_SOURCE_REVIEW | kopā |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| MATCH | 4448 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4448 |
| PARTIAL_MATCH | 0 | 607 | 0 | 0 | 0 | 0 | 0 | 0 | 607 |
| NO_MATCH | 0 | 0 | 478 | 129 | 708 | 1199 | 173 | 0 | 2687 |
| NOT_IN_SOURCE | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 752 | 752 |
| AMBIGUOUS | 0 | 0 | 0 | 0 | 0 | 0 | 124 | 0 | 124 |

Procenti no visiem 8618 ierakstiem:

| A verdikts | CONFIRMED_BILINGUAL | CONFIRMED_BILINGUAL_PARTIAL | CONFIRMED_REVERSE | PARTIAL_CONFIRMED | WRONG_BY_SOURCE | CZECH_WORD_NOT_IN_SOURCE | NEEDS_REVIEW | NEEDS_SOURCE_REVIEW | kopā |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| MATCH | 51.61 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 51.61 |
| PARTIAL_MATCH | 0.00 | 7.04 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 7.04 |
| NO_MATCH | 0.00 | 0.00 | 5.55 | 1.50 | 8.22 | 13.91 | 2.01 | 0.00 | 31.18 |
| NOT_IN_SOURCE | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 8.73 | 8.73 |
| AMBIGUOUS | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 1.44 | 0.00 | 1.44 |

## Pa līmeņiem

| līmenis | ieraksti | CONFIRMED_BILINGUAL | CONFIRMED_BILINGUAL_PARTIAL | CONFIRMED_REVERSE | PARTIAL_CONFIRMED | WRONG_BY_SOURCE | CZECH_WORD_NOT_IN_SOURCE | NEEDS_REVIEW | NEEDS_SOURCE_REVIEW |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| a1 | 702 | 564 | 31 | 22 | 4 | 16 | 21 | 18 | 26 |
| a2 | 1640 | 1132 | 29 | 124 | 3 | 97 | 144 | 47 | 64 |
| b1 | 3367 | 2022 | 6 | 249 | 1 | 361 | 450 | 126 | 152 |
| b2 | 2118 | 487 | 480 | 62 | 108 | 195 | 423 | 82 | 281 |
| c1 | 572 | 179 | 52 | 18 | 11 | 31 | 117 | 20 | 144 |
| c2 | 219 | 64 | 9 | 3 | 2 | 8 | 44 | 4 | 85 |

## Piemēri

Līdz 5 apgrieztajiem vācu vārdiem. Vārdnīcas teksts nav iekļauts.

### CONFIRMED_REVERSE

| level | index | de | de_article | cs | A ekvivalenti | apgrieztie | URL |
|---|---:|---|---|---|---|---|---|
| a1 | 31 | anhalten |  | Zastavit | zastavovat | anhalten aufhalten zurückhalten abstellen stilllegen | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Zastavit |
| a1 | 36 | antworten |  | Odpovědět | odpovídat | antworten | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Odpov%C4%9Bd%C4%9Bt |
| a1 | 82 | bekommen |  | Dostat | dostávat | bekommen erhalten kriegen fassen geraten | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Dostat |
| a1 | 89 | besuchen |  | Navštívit | navštěvovat | besuchen | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Nav%C5%A1t%C3%ADvit |
| a1 | 98 | bitten |  | Požádat | prosit | ersuchen bitten um Hilfe | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Po%C5%BE%C3%A1dat |
| a1 | 101 | bleiben |  | Zůstat | zůstávat | bleiben übrig zurückbleiben zum Essen | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Z%C5%AFstat |
| a1 | 113 | Brötchen | das | Houska | chlebíček | Semmel Brötchen Wecken Mohnsemmel Semmelbrösel | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Houska |
| a1 | 171 | euer |  | Vaše | vás | euer eure Ihr Ihrerseits | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Va%C5%A1e |
| a1 | 173 | falsch |  | Nesprávný | falešný | unrichtig falsch | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Nespr%C3%A1vn%C3%BD |
| a1 | 177 | fast |  | Téměř | skoro | beinahe fast | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/T%C3%A9m%C4%9B%C5%99 |

### WRONG_BY_SOURCE

| level | index | de | de_article | cs | A ekvivalenti | apgrieztie | URL |
|---|---:|---|---|---|---|---|---|
| a1 | 28 | ankommen |  | Dorazit | přicházet | zuschlagen den Todesstoß versetzen Rest | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Dorazit |
| a1 | 50 | aufmachen |  | Otevřít | ot vírat | öffnen eröffnen | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Otev%C5%99%C3%ADt |
| a1 | 66 | Schwimmbad | das | Bazén | koupaliště | Bassin Schwimmbecken | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Baz%C3%A9n |
| a1 | 78 | bei |  | Na | u | auf an dem Feld das | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Na |
| a1 | 92 | bisschen |  | Trochu |  | ein bisschen wenig | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Trochu |
| a1 | 94 | Bitte | die | Žádost | prosba | Verlangen Ersuchen Gesuch Begierde | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/%C5%BD%C3%A1dost |
| a1 | 163 | Erbse | die | Hrášek | hrách | grüne Erbsen Rosenkranzperle | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Hr%C3%A1%C5%A1ek |
| a1 | 203 | freundlich |  | Přátelský | přívětivý | freundschaftlich | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/P%C5%99%C3%A1telsk%C3%BD |
| a1 | 332 | Kamera | die | Fotoaparát | kamera | Fotoapparat | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Fotoapar%C3%A1t |
| a1 | 343 | Kraftwagen | der | Auto | motorové vozidlo | Auto Personenauto Lastwagen fahren lenken | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Auto |

### CZECH_WORD_NOT_IN_SOURCE

| level | index | de | de_article | cs | A ekvivalenti | apgrieztie | URL |
|---|---:|---|---|---|---|---|---|
| a1 | 22 | achten |  | Dbát na | vážit si |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Db%C3%A1t%20na |
| a1 | 29 | anschauen |  | Podívat se na | dívat se |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Pod%C3%ADvat%20se%20na |
| a1 | 30 | anziehen |  | Obléknout si | přitahovat |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Obl%C3%A9knout%20si |
| a1 | 68 | baden |  | Koupat se | koupat |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Koupat%20se |
| a1 | 110 | Brille | die | Brýle | brýle brejle |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Br%C3%BDle |
| a1 | 129 | das |  | Určitý člen středního rodu | bleibt unübersetzt |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Ur%C4%8Dit%C3%BD%20%C4%8Dlen%20st%C5%99edn%C3%ADho%20rodu |
| a1 | 134 | der |  | Určitý člen mužského rodu | bleibt unübersetzt |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Ur%C4%8Dit%C3%BD%20%C4%8Dlen%20mu%C5%BEsk%C3%A9ho%20rodu |
| a1 | 137 | die |  | Ženský určitý člen | bleibt unübersetzt |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/%C5%BDensk%C3%BD%20ur%C4%8Dit%C3%BD%20%C4%8Dlen |
| a1 | 139 | dieser |  | Tenhle | ten |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Tenhle |
| a1 | 159 | E-Mail | die | E-mail | e - mail |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/E-mail |

### NEEDS_REVIEW

| level | index | de | de_article | cs | A ekvivalenti | apgrieztie | URL |
|---|---:|---|---|---|---|---|---|
| a1 | 14 | anfangen |  | Začít | začínat | beginnen anfangen sich mit jemandem | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Za%C4%8D%C3%ADt |
| a1 | 77 | beginnen |  | Začít | počínat | beginnen anfangen sich mit jemandem | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Za%C4%8D%C3%ADt |
| a1 | 133 | denken |  | Přemýšlet | myslet | nachdenken überlegen | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/P%C5%99em%C3%BD%C5%A1let |
| a1 | 138 | Dienstag | der | Úterý | úterý úterek | am Dienstag | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/%C3%9Ater%C3%BD |
| a1 | 160 | Eltern | die | Rodiče | rodiče |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Rodi%C4%8De |
| a1 | 205 | früh |  | Brzy | časný | bald zeitig | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Brzy |
| a1 | 225 | gefallen |  | Líbit se | líbit se zalíbit | gefallen das lasse ich mir | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/L%C3%ADbit%20se |
| a1 | 234 | Geschwister | die | Bratři a sestry | sourozenci |  | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Brat%C5%99i%20a%20sestry |
| a1 | 251 | Großeltern | die | Prarodiče | prarodiče | Urgroßeltern | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/Prarodi%C4%8De |
| a1 | 261 | haben |  | Mám | mít | mir geht es gut | https://de.pons.com/%C3%BCbersetzung/tschechisch-deutsch/M%C3%A1m |

## Cilvēka izlase

200 rindas: 50 CONFIRMED_BILINGUAL, 50 CONFIRMED_REVERSE, 50 WRONG_BY_SOURCE, 50 NEEDS_REVIEW. Katra grupa ir lielāka par 50, tāpēc no CZECH_WORD_NOT_IN_SOURCE nekas nav papildināts. Kārta: līmenis a1…c2, tad index. OWNER un OWNER_NOTE ir tukšas.

## Citas valodas

T0 maršruts no #878 `readiness.md`. Čehu apgrieztā pārbaude izmērīja 4194 pieprasījumus un 7598 sekundes, ap 1,8 sekundēm uz vārdu.

A+apgrieztais, jo T0 tabulā ir tīmekļa avots abos virzienos: cs (`pons-de-cs` un `pons-cs-de`, arī Langenscheidt abi virzieni), lt (`ekalba-de-lt` un `ekalba-lt-de`), sk (`langenscheidt-de-sk` un `langenscheidt-sk-de`), ro (`tdrg3-solirom` un `tdrg3-solirom-ro-de`). Ja temps paliek 1 pieprasījums sekundē, A solis ap 8493 lemmām ir ap 2,4 stundām. Apgrieztais solis ir atkarīgs no daļu skaita; čehu gadījumā tas bija 4193 unikāli vārdi un 2,1 stunda.

Tikai A, jo T0 maršruts ir A+B, bet otrs virziens tabulā nav atsevišķs avots: bg, et, fr, hr, hu, it, nl, nn, pl, pt, sl, sq, sr, sv, uk. PDF un archive.org avotiem pieprasījums ir uz tekstu, ne uz katru lemmu.

Tikai B: bs, is, mk. Neviens no T0: da, en, es, fi, gr, lb, nb, ru, tr (NOT_TESTED).

Labojumi nav izdarīti. WRONG_BY_SOURCE ir verdikts, nevis ierosināts tulkojums.
