HOW-TO: šo versiju B saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-036.csv (versija C).
Gemini -> ai-gemini/batch-036.csv (versija A).
ChatGPT -> ai-chatgpt/batch-036.csv (versija B).
Katru AI lieto jaunā sesijā. Otra AI atbildi nerāda. Kontroļu atslēgu partijā neliek.
Ja divi AI nesakrīt vai kāds saka NONE vai UNSURE, trešajam AI dod tikai tās rindas.

Tu palīdzi pārbaudīt vārdu tulkojumus no vācu valodas uz čehu mācību lietotnei. Katrai rindai tu saņem: id, vācu vārdu (ar artikulu, ja ir), vienu čehu vārdu un latviešu
nozīmju sarakstu ar numuriem. Uzdevums: noteikt, kurai latviešu nozīmei (numuram) čehu vārds ir pareizs tulkojums vācu vārdam. Ja nevienai, raksti NONE. Ja neesi drošs, raksti UNSURE.
Noteikumi: 1) Seko latviešu nozīmēm, nevis vācu vārda citām nozīmēm. 2) Pārbaudi, vai čehu vārds ir īsts, mūsdienās lietots vārds, nevis izdomāts, burtisks kalks, saīsinājums vai svešvalodas
fragments. 3) Ignorē lielo vai mazo sākuma burtu, dokonāto vai nedokonāto veidu un atgriezenisko 'se/si'. 4) NEIERAKSTI un neieteic jaunu tulkojumu. Tikai numurs, NONE vai UNSURE.
Atbildi tikai kā CSV ar kolonnām id,meaning,confidence (confidence: high, medium vai low). Bez paskaidrojumiem.
Ja piemēra teikums neizšķir nozīmi, atbildi UNSURE.

| id | vācu vārds (ar artikulu) | čehu vārds | LV nozīmes (1) … (2) … | vācu piemērs | LV piemērs |
|---|---|---|---|---|---|
| cs-002549 | die saure Sahne | Zakysaná smetana | (1) skābs krējums | — | — |
| cs-002071 | als ob | Jako by | (1) it kā | — | — |
| cs-000882 | die Ausbildungsbeihilfe | Příspěvek na vzdělávání | (1) mācību pabalsts | — | — |
| cs-002512 | der Hausarzt | Rodinný lékař | (1) ģimenes ārsts | — | — |
| cs-001153 | der Schwangerschaftstest | Těhotenský test | (1) grūtniecības tests | — | — |
| cs-000484 | einzeln | Samostatný | (1) atsevišķs | — | — |
| cs-002660 | einhüllen | Zabalit | (1) ievīstīt (2) satīt (3) ietīt | — | — |
| cs-000179 | das Gegenmittel | Protijed | (1) pretlīdzeklis | — | — |
| cs-001420 | das Düngemittel | Minerální hnojivo | (1) minerālmēsli (2) mēslošanas līdzeklis | — | — |
| cs-005417 | die Straße | Ulice | (1) iela | — | — |
| cs-005426 | die Forschungsgemeinschaft | Měření rychlosti | (1) pētniecības grupa | — | — |
| cs-005421 | umkehren | Příliš široký | (1) griezties atpakaļ | — | — |
| cs-001500 | der Eingriff | Operace | (1) operācija (2) iejaukšanās | — | — |
| cs-001159 | beklagen | Stěžovat si | (1) sūdzēties (2) žēloties (3) apraudāt (4) skumt (5) nožēlot | — | — |
| cs-004304 | die Durchfuhrerlaubnis | Tranzitní povolení | (1) caurbraukšanas atļauja | — | — |
| cs-002463 | die Höchstleistung | Rekord | (1) rekords (2) vislielākā jauda (3) augstākais sasniegums | — | — |
| cs-001904 | das Areal | Oblast | (1) areāls | — | — |
| cs-002301 | beschädigen | Poškodit | (1) bojāt | — | — |
| cs-005424 | der Einkauf | Omezení dovozu | (1) pirkums (2) iepirkšanās | — | — |
| cs-000190 | darstellen | Reprezentovat | (1) attēlot | Die Grafik stellt die Zahlen dar. | grafiks attēlo skaitļus. |
| cs-003706 | untragbar | Nepřijatelný | (1) neizturams (2) nepieņemams | — | — |
| cs-001168 | erdrücken | Rozdrtit | (1) nomākt (2) nospiest | — | — |
| cs-000002 | arg | Špatný | (1) slikts | — | — |
| cs-001163 | der Orgasmus | Orgasmus | (1) orgasms | — | — |
| cs-000551 | herunterkommen | Upadat | (1) pagrimt (2) panīkt (3) nonīkt (4) nonākt lejā | — | — |
| cs-002074 | schelmisch | Rozpustilý | (1) šķelmīgs | — | — |
| cs-001180 | der Baukredit | Úvěr na zahájení stavby | (1) kredīts celtniecības uzsākšanai | — | — |
| cs-003533 | beaufsichtigen | Dozorovat | (1) uzraudzīt | — | — |
| cs-005419 | das Stück | Kus | (1) gabals | — | — |
| cs-003920 | der Wassersport | Vodní sporty | (1) ūdenssports | — | — |
| cs-000848 | der Lohn | Plat | (1) alga | — | — |
| cs-002810 | der Rahm | Sladká smetana | (1) krējums salds | — | — |
| cs-005416 | der Stern | Hvězda | (1) zvaigzne | — | — |
| cs-005422 | dämpfen | Utlačovat | (1) sutināt (2) sautēt (3) tvaicēt (4) apslāpēt (5) klusināt | — | — |
| cs-004490 | der Niedergang | Chátrání | (1) pagrimšana (2) pagrimums (3) riets | — | — |
| cs-000367 | herangehen | Pustit se do práce | (1) ķerties pie darba | — | — |
| cs-002407 | der Geldwechsel | Směna peněz | (1) naudas maiņa | — | — |
| cs-001369 | der Kelch | Pohár | (1) kauss | — | — |
| cs-002909 | observieren | Stopovat | (1) novērot (2) izsekot | — | — |
| cs-004392 | die Sachkenntnis | Odbornost | (1) kompetence (2) lietpratība | — | — |
| cs-000544 | unterbreiten | Vysvětlit | (1) iesniegt (2) paskaidrot | — | — |
| cs-000796 | abschlagen | Odmítnout | (1) noraidīt (2) atvairīt (3) atsist (4) nocirst | — | — |
| cs-000155 | sich betätigen | Působit | (1) piedalīties (2) darboties | — | — |
| cs-002435 | ab und zu | Občas | (1) reizēm (2) šad un tad | Ich gehe ab und zu ins Kino. | es šad un tad eju uz kino. |
| cs-004162 | der Bund | Unie | (1) savienība | Der Bund unterstützt die Länder. | federācija atbalsta zemes. |
| cs-005415 | stehen | Stát | (1) stāvēt | Ich stehe an der Tür. | es stāvu pie durvīm. |
| cs-005418 | die Straßenbahn | Tramvaj | (1) tramvajs | — | — |
| cs-001327 | fraglos | Nepochybný | (1) neapstrīdams (2) neapšaubāms | — | — |
| cs-005425 | weglegen | Pohodlný | (1) nolikt malā | — | — |
| cs-002109 | das Schaffen | Umělecká tvorba | (1) radīšana (2) darbība (3) darbs (4) daiļrade (5) jaunrade | — | — |
| cs-003302 | das Geschehnis | Incident | (1) atgadījums (2) gadījums (3) notikums | — | — |
| cs-002537 | quittieren | Podepsat pro příjem | (1) parakstīties par saņemšanu | — | — |
| cs-000319 | geschweige | Ani nemluvě | (1) nemaz nerunājot | — | — |
| cs-002113 | die Fasanenjagd | Lov bažantů | (1) fazānu medības | — | — |
| cs-001572 | der Entwerter | Kompostér | (1) kompostrs | — | — |
| cs-004124 | ehrenhaft | Úctyhodný | (1) cienījams (2) godājams (3) godīgs | — | — |
| cs-001937 | zurzeit | V současné době | (1) pašlaik | Ich arbeite zurzeit viel. | pašlaik es daudz strādāju. |
| cs-000425 | die Zeit | Čas (okamžik / časový úsek) | (1) laiks (brīdis / laika posms) | Ich habe keine Zeit. | Man nav laika. |
| cs-001040 | die Aufführung | Show | (1) izrāde | — | — |
| cs-001862 | melden | Oznámit | (1) paziņot | — | — |
| cs-005423 | sich blähen | Poradit se | (1) uzpūsties (2) piepūsties | — | — |
| cs-002935 | sich benehmen | Chovat se | (1) uzvesties | — | — |
| cs-001705 | das Schlafwagenzimmer | Kupé ve spacím voze | (1) guļamistaba | — | — |
| cs-002864 | das Hängsel | Šité ramínko na šaty | (1) piešūtais drēbju pakaramais | — | — |
| cs-004364 | flüchtig | Pomíjivý | (1) īslaicīgs (2) ātri pārejošs (3) acumirklīgs (4) paviršs (5) gaistošs | — | — |
| cs-002277 | die Blumenzwiebel | Květinová cibulka | (1) puķu sīpols | — | — |
| cs-002272 | wiedergeben | Ztvárnit | (1) atveidot (2) reproducēt (3) atdot | — | — |
| cs-002932 | der Stücklohn | Platba za kusovou práci | (1) samaksa par gabaldarbu | — | — |
| cs-001323 | die Pille | Tableta | (1) tablete | — | — |
| cs-003137 | noch mal | Znovu | (1) vēlreiz | Noch mal, bitte. | Vēlreiz, lūdzu. |
| cs-002486 | die Sternschnuppe | Padající hvězda | (1) krītošā zvaigzne | — | — |
| cs-003535 | die Einigkeit | Sjednocenost | (1) vienprātība (2) vienotība (3) vienība | — | — |
| cs-001551 | die Beschaffenheit | Podstata | (1) būtība (2) daba (3) īpašība | — | — |
| cs-003230 | einfrieren | Pozastavit | (1) pārtraukt (2) iesaldēt (3) sasaldēt | — | — |
| cs-001832 | sich unterwerfen | Podřídit se | (1) pakļauties | — | — |
| cs-000977 | ertappen | Chytit | (1) pieķert | — | — |
| cs-002770 | die Vernehmung | Policejní výslech | (1) nopratināšana policijā | — | — |
| cs-002372 | sich entfalten | Rozvinout se | (1) izvērsties (2) attīstīties (3) atraisīties (4) atvērties | — | — |
| cs-001779 | sich scheren | Pečovat o | (1) rūpēties par | — | — |
| cs-002464 | die Melkerin | Dojička | (1) slaucēja | — | — |
| cs-002442 | brauen | Pivovarsky vařit | (1) brūvēt (2) darīt alu | — | — |
| cs-004707 | so weit | Do té míry | (1) tiktāl | — | — |
| cs-001727 | erregen | Rozrušit | (1) modināt (2) izraisīt (3) radīt (4) satraukt (5) uztraukt | — | — |
| cs-002663 | bewerben, sich | Přihlásit se | (1) tiekties (2) censties (3) kandidēt (4) pretendēt | — | — |
| cs-004449 | die Kachel | Kachle | (1) krāsns podiņš | — | — |
| cs-001931 | das Wertpapier | Zabezpečení | (1) vērtspapīrs | — | — |
| cs-000409 | kurzfristig | Na krátkou dobu | (1) uz īsu brīdi (2) īstermiņa | — | — |
| cs-000378 | das Eingemachte | Konzervované ovoce | (1) konservēti augļi (2) ievārījums | — | — |
| cs-004683 | die Gefängniszelle | Vězeňská cela | (1) cietuma kamera | — | — |
| cs-001234 | im | Kde? | (1) kur? (2) iekšā (-ā) | Ich bin im Park. | es esmu parkā. |
| cs-002385 | das Umfeld | Sociální prostředí | (1) politiskā (2) vide sociālā | — | — |
| cs-001737 | vorsehen | Naplánovat | (1) paredzēt | — | — |
| cs-001954 | inszenieren | Na jeviště | (1) inscenēt | — | — |
| cs-002697 | treffend | Významný | (1) zīmīgs (2) trāpīgs | — | — |
| cs-005420 | der Student | Student | (1) students | — | — |
| cs-000404 | das Ministerium | Ministerstvo | (1) ministrija | — | — |
| cs-004229 | verschieben | Přesunout | (1) pārcelt | — | — |
| cs-001616 | geradebiegen | Opravit | (1) izlabot (2) iztaisnot | — | — |
| cs-003654 | die Laube | Altán | (1) lapene | — | — |
| cs-002188 | die Güte | Kvalita | (1) labums (2) kvalitāte (3) labsirdība | — | — |
