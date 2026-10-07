HOW-TO: šo versiju C saņem Anthropic.
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
| cs-002660 | einhüllen | Zabalit | (1) ievīstīt (2) ietīt (3) satīt | — | — |
| cs-000179 | das Gegenmittel | Protijed | (1) pretlīdzeklis | — | — |
| cs-001420 | das Düngemittel | Minerální hnojivo | (1) minerālmēsli (2) mēslošanas līdzeklis | — | — |
| cs-005417 | die Straße | Ulice | (1) iela | — | — |
| cs-005426 | die Forschungsgemeinschaft | Měření rychlosti | (1) pētniecības grupa | — | — |
| cs-005421 | umkehren | Příliš široký | (1) griezties atpakaļ | — | — |
| cs-001500 | der Eingriff | Operace | (1) operācija (2) iejaukšanās | — | — |
| cs-001159 | beklagen | Stěžovat si | (1) apraudāt (2) žēloties (3) sūdzēties (4) nožēlot (5) skumt | — | — |
| cs-004304 | die Durchfuhrerlaubnis | Tranzitní povolení | (1) caurbraukšanas atļauja | — | — |
| cs-002463 | die Höchstleistung | Rekord | (1) rekords (2) augstākais sasniegums (3) vislielākā jauda | — | — |
| cs-001904 | das Areal | Oblast | (1) areāls | — | — |
| cs-002301 | beschädigen | Poškodit | (1) bojāt | — | — |
| cs-005424 | der Einkauf | Omezení dovozu | (1) iepirkšanās (2) pirkums | — | — |
| cs-000190 | darstellen | Reprezentovat | (1) attēlot | Die Grafik stellt die Zahlen dar. | grafiks attēlo skaitļus. |
| cs-003706 | untragbar | Nepřijatelný | (1) nepieņemams (2) neizturams | — | — |
| cs-001168 | erdrücken | Rozdrtit | (1) nomākt (2) nospiest | — | — |
| cs-000002 | arg | Špatný | (1) slikts | — | — |
| cs-001163 | der Orgasmus | Orgasmus | (1) orgasms | — | — |
| cs-000551 | herunterkommen | Upadat | (1) panīkt (2) pagrimt (3) nonākt lejā (4) nonīkt | — | — |
| cs-002074 | schelmisch | Rozpustilý | (1) šķelmīgs | — | — |
| cs-001180 | der Baukredit | Úvěr na zahájení stavby | (1) kredīts celtniecības uzsākšanai | — | — |
| cs-003533 | beaufsichtigen | Dozorovat | (1) uzraudzīt | — | — |
| cs-005419 | das Stück | Kus | (1) gabals | — | — |
| cs-003920 | der Wassersport | Vodní sporty | (1) ūdenssports | — | — |
| cs-000848 | der Lohn | Plat | (1) alga | — | — |
| cs-002810 | der Rahm | Sladká smetana | (1) krējums salds | — | — |
| cs-005416 | der Stern | Hvězda | (1) zvaigzne | — | — |
| cs-005422 | dämpfen | Utlačovat | (1) tvaicēt (2) sautēt (3) sutināt (4) klusināt (5) apslāpēt | — | — |
| cs-004490 | der Niedergang | Chátrání | (1) pagrimšana (2) riets (3) pagrimums | — | — |
| cs-000367 | herangehen | Pustit se do práce | (1) ķerties pie darba | — | — |
| cs-002407 | der Geldwechsel | Směna peněz | (1) naudas maiņa | — | — |
| cs-001369 | der Kelch | Pohár | (1) kauss | — | — |
| cs-002909 | observieren | Stopovat | (1) izsekot (2) novērot | — | — |
| cs-004392 | die Sachkenntnis | Odbornost | (1) lietpratība (2) kompetence | — | — |
| cs-000544 | unterbreiten | Vysvětlit | (1) iesniegt (2) paskaidrot | — | — |
| cs-000796 | abschlagen | Odmítnout | (1) atvairīt (2) noraidīt (3) nocirst (4) atsist | — | — |
| cs-000155 | sich betätigen | Působit | (1) piedalīties (2) darboties | — | — |
| cs-002435 | ab und zu | Občas | (1) šad un tad (2) reizēm | Ich gehe ab und zu ins Kino. | es šad un tad eju uz kino. |
| cs-004162 | der Bund | Unie | (1) savienība | Der Bund unterstützt die Länder. | federācija atbalsta zemes. |
| cs-005415 | stehen | Stát | (1) stāvēt | Ich stehe an der Tür. | es stāvu pie durvīm. |
| cs-005418 | die Straßenbahn | Tramvaj | (1) tramvajs | — | — |
| cs-001327 | fraglos | Nepochybný | (1) neapstrīdams (2) neapšaubāms | — | — |
| cs-005425 | weglegen | Pohodlný | (1) nolikt malā | — | — |
| cs-002109 | das Schaffen | Umělecká tvorba | (1) darbs (2) darbība (3) radīšana (4) jaunrade (5) daiļrade | — | — |
| cs-003302 | das Geschehnis | Incident | (1) atgadījums (2) notikums (3) gadījums | — | — |
| cs-002537 | quittieren | Podepsat pro příjem | (1) parakstīties par saņemšanu | — | — |
| cs-000319 | geschweige | Ani nemluvě | (1) nemaz nerunājot | — | — |
| cs-002113 | die Fasanenjagd | Lov bažantů | (1) fazānu medības | — | — |
| cs-001572 | der Entwerter | Kompostér | (1) kompostrs | — | — |
| cs-004124 | ehrenhaft | Úctyhodný | (1) cienījams (2) godīgs (3) godājams | — | — |
| cs-001937 | zurzeit | V současné době | (1) pašlaik | Ich arbeite zurzeit viel. | pašlaik es daudz strādāju. |
| cs-000425 | die Zeit | Čas (okamžik / časový úsek) | (1) laiks (brīdis / laika posms) | Ich habe keine Zeit. | Man nav laika. |
| cs-001040 | die Aufführung | Show | (1) izrāde | — | — |
| cs-001862 | melden | Oznámit | (1) paziņot | — | — |
| cs-005423 | sich blähen | Poradit se | (1) piepūsties (2) uzpūsties | — | — |
| cs-002935 | sich benehmen | Chovat se | (1) uzvesties | — | — |
| cs-001705 | das Schlafwagenzimmer | Kupé ve spacím voze | (1) guļamistaba | — | — |
| cs-002864 | das Hängsel | Šité ramínko na šaty | (1) piešūtais drēbju pakaramais | — | — |
| cs-004364 | flüchtig | Pomíjivý | (1) acumirklīgs (2) ātri pārejošs (3) īslaicīgs (4) gaistošs (5) paviršs | — | — |
| cs-002277 | die Blumenzwiebel | Květinová cibulka | (1) puķu sīpols | — | — |
| cs-002272 | wiedergeben | Ztvárnit | (1) atveidot (2) atdot (3) reproducēt | — | — |
| cs-002932 | der Stücklohn | Platba za kusovou práci | (1) samaksa par gabaldarbu | — | — |
| cs-001323 | die Pille | Tableta | (1) tablete | — | — |
| cs-003137 | noch mal | Znovu | (1) vēlreiz | Noch mal, bitte. | Vēlreiz, lūdzu. |
| cs-002486 | die Sternschnuppe | Padající hvězda | (1) krītošā zvaigzne | — | — |
| cs-003535 | die Einigkeit | Sjednocenost | (1) vienprātība (2) vienība (3) vienotība | — | — |
| cs-001551 | die Beschaffenheit | Podstata | (1) būtība (2) īpašība (3) daba | — | — |
| cs-003230 | einfrieren | Pozastavit | (1) pārtraukt (2) sasaldēt (3) iesaldēt | — | — |
| cs-001832 | sich unterwerfen | Podřídit se | (1) pakļauties | — | — |
| cs-000977 | ertappen | Chytit | (1) pieķert | — | — |
| cs-002770 | die Vernehmung | Policejní výslech | (1) nopratināšana policijā | — | — |
| cs-002372 | sich entfalten | Rozvinout se | (1) attīstīties (2) izvērsties (3) atvērties (4) atraisīties | — | — |
| cs-001779 | sich scheren | Pečovat o | (1) rūpēties par | — | — |
| cs-002464 | die Melkerin | Dojička | (1) slaucēja | — | — |
| cs-002442 | brauen | Pivovarsky vařit | (1) darīt alu (2) brūvēt | — | — |
| cs-004707 | so weit | Do té míry | (1) tiktāl | — | — |
| cs-001727 | erregen | Rozrušit | (1) radīt (2) izraisīt (3) modināt (4) uztraukt (5) satraukt | — | — |
| cs-002663 | bewerben, sich | Přihlásit se | (1) censties (2) tiekties (3) pretendēt (4) kandidēt | — | — |
| cs-004449 | die Kachel | Kachle | (1) krāsns podiņš | — | — |
| cs-001931 | das Wertpapier | Zabezpečení | (1) vērtspapīrs | — | — |
| cs-000409 | kurzfristig | Na krátkou dobu | (1) uz īsu brīdi (2) īstermiņa | — | — |
| cs-000378 | das Eingemachte | Konzervované ovoce | (1) konservēti augļi (2) ievārījums | — | — |
| cs-004683 | die Gefängniszelle | Vězeňská cela | (1) cietuma kamera | — | — |
| cs-001234 | im | Kde? | (1) kur? (2) iekšā (-ā) | Ich bin im Park. | es esmu parkā. |
| cs-002385 | das Umfeld | Sociální prostředí | (1) vide sociālā (2) politiskā | — | — |
| cs-001737 | vorsehen | Naplánovat | (1) paredzēt | — | — |
| cs-001954 | inszenieren | Na jeviště | (1) inscenēt | — | — |
| cs-002697 | treffend | Významný | (1) trāpīgs (2) zīmīgs | — | — |
| cs-005420 | der Student | Student | (1) students | — | — |
| cs-000404 | das Ministerium | Ministerstvo | (1) ministrija | — | — |
| cs-004229 | verschieben | Přesunout | (1) pārcelt | — | — |
| cs-001616 | geradebiegen | Opravit | (1) izlabot (2) iztaisnot | — | — |
| cs-003654 | die Laube | Altán | (1) lapene | — | — |
| cs-002188 | die Güte | Kvalita | (1) labums (2) labsirdība (3) kvalitāte | — | — |
