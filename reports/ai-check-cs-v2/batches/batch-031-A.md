HOW-TO: šo versiju A saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-031.csv (versija A).
Gemini -> ai-gemini/batch-031.csv (versija B).
ChatGPT -> ai-chatgpt/batch-031.csv (versija C).
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
| cs-001603 | die Ursache | Důvod | (1) iemesls | — | — |
| cs-001528 | der Gefängnisinsasse | Vězeň | (1) cietumnieks | — | — |
| cs-001858 | das Schauspiel | Divadelní představení | (1) luga | — | — |
| cs-005366 | der Cup | Duet | (1) kauss sporta sacensībās | — | — |
| cs-002023 | gemütvoll | Srdečný | (1) sirsnīgs (2) omulīgs | — | — |
| cs-000422 | erheben | Zvedat | (1) celt (2) sacelt (3) protestēt (4) pacelt | — | — |
| cs-004068 | die Hemmung | Zdržení | (1) šķērslis (2) aizture (3) kavēklis | — | — |
| cs-000599 | der Bankauszug | Bankovní výpis | (1) bankas izraksts | — | — |
| cs-004615 | vernichten | Devastovat | (1) iznīcināt (2) izpostīt | — | — |
| cs-004113 | bildlich | Imaginativní | (1) tēlains (2) figurāls (3) gleznains | — | — |
| cs-000756 | die Grillkohle | Grilovací uhlí | (1) grila ogles | — | — |
| cs-003681 | sich befinden | Být lokalizován | (1) atrasties | Das Hotel befindet sich im Zentrum. | viesnīca atrodas centrā. |
| cs-002037 | der Drops | Kyselé ovocné karamely | (1) skābas augļu karameles (2) ledenes | — | — |
| cs-000266 | das Hochhaus | Výšková budova | (1) augstceltne | — | — |
| cs-004592 | eitel | Prázdný | (1) uzpūtīgs (2) iedomīgs (3) sekls (4) tukšs (5) ārišķīgs (6) godkārīgs | — | — |
| cs-005358 | die Sache | Věc | (1) lieta | — | — |
| cs-002317 | die Fahrerflucht | Opuštění místa nehody | (1) aizbraukšana no negadījuma vietas | — | — |
| cs-002458 | gewissermaßen | Tak říkajíc | (1) savā ziņā (2) tā sakot (3) zināmā mērā | — | — |
| cs-002904 | bersten | Roztrhnout se | (1) saplaisāt (2) sasprāgt (3) plīst (4) plaisāt | — | — |
| cs-004233 | die Personalakte | Osobní spis | (1) personas lieta | — | — |
| cs-005360 | sagen | Říct | (1) teikt | Was hast du gesagt? | ko tu pateici? |
| cs-003294 | das Sorgerecht | Právo péče o dítě | (1) tiesības rūpēties | — | — |
| cs-000474 | vorletzt | Předposlední | (1) priekšpēdējais | — | — |
| cs-001434 | toasten | Opékat toast | (1) grauzdēt maizītes | — | — |
| cs-000460 | der Kriegsbeschädigte | Válečný invalida | (1) kara invalīds | — | — |
| cs-002712 | die Biegung | Zakřivení | (1) līkums (2) izliekums | — | — |
| cs-005359 | der Saft | Šťáva | (1) sula | — | — |
| cs-001118 | die Dotterblume | Blatouch | (1) purene | — | — |
| cs-002561 | barmherzig | Soucitný | (1) žēlsirdīgs (2) līdzcietīgs | — | — |
| cs-004187 | die Äußerlichkeit | Vnějškovost | (1) ārišķība | — | — |
| cs-004251 | das Darlehen | Půjčka | (1) aizdevums (2) aizņēmums | — | — |
| cs-000347 | der Schnuller | Dětský dudlík | (1) zīdaiņu knupītis | — | — |
| cs-003679 | zuletzt | Naposledy | (1) beidzot | — | — |
| cs-005365 | die Konsequenz | Konzervované jídlo | (1) secība (2) secinājums (3) sekas (4) konsekvence | — | — |
| cs-003694 | ebenso viel | Stejně tolik | (1) tikpat daudz | — | — |
| cs-005356 | rund | Kulatý | (1) apaļš | — | — |
| cs-004457 | anstößig | Neslušný | (1) nepieklājīgs | — | — |
| cs-003977 | heimatlos | Bez vlasti | (1) bez dzimtenes | — | — |
| cs-001648 | die Sprechanlage | Interkomový systém doma | (1) domofons | — | — |
| cs-002011 | geradeaus | Přímo vpřed | (1) taisni uz priekšu | — | — |
| cs-001793 | das Altenheim | Pečovatelský dům pro seniory | (1) veco ļaužu pansionāts | — | — |
| cs-003547 | die Massenherstellung | Hromadná výroba | (1) masveida ražošana | — | — |
| cs-000381 | der Zwischenraum | Meziprostor | (1) atstarpe (2) starptelpa | — | — |
| cs-002431 | unterjochen | Podmanit si | (1) pakļaut jūgā | — | — |
| cs-002513 | die Arbeitslosenbeihilfe | Podpora v nezaměstnanosti | (1) bezdarbnieka pabalsts | — | — |
| cs-002214 | fortlaufen | Utéci | (1) aizskriet | — | — |
| cs-002575 | das Maskenfest | Maškarní slavnost | (1) masku balle | — | — |
| cs-001208 | der Olympiasieger | Vítěz olympijských her | (1) uzvarētājs olimpiskajās spēlēs | — | — |
| cs-005363 | die Liebesbeziehung | Intimní spojení | (1) intīmas attiecības | — | — |
| cs-002610 | ungeachtet | Ačkoli | (1) neraugoties uz (2) lai gan | — | — |
| cs-000429 | neu | Nový (o věcech) | (1) jauns (par lietām) | Mein Handy ist neu. | mans telefons ir jauns. |
| cs-001715 | siebzigste | Sedmdesátý | (1) septiņdesmitais | — | — |
| cs-001312 | abgesehen | Kromě | (1) lai gan (2) turklāt | — | — |
| cs-002866 | prächtvoll | Nádherný | (1) krāšņs | — | — |
| cs-005362 | der Pressevertreter | Tiskový tajemník | (1) preses pārstāvis | — | — |
| cs-005355 | rufen | Volat | (1) saukt | — | — |
| cs-000170 | namhaft | Pozoruhodný | (1) slavens (2) ievērojams | — | — |
| cs-001905 | erschweren | Učinit obtížnějším | (1) apgrūtināt (2) padarīt grūtāku | — | — |
| cs-004040 | der Strick | Lano | (1) virve | — | — |
| cs-004389 | dabei sein | Být přítomen | (1) būt klāt | — | — |
| cs-002281 | die Wirtschaftsblockade | Ekonomická blokáda | (1) ekonomiskā blokāde | — | — |
| cs-001190 | die Geburtenrate | Porodnost | (1) dzimstības līmenis | — | — |
| cs-003553 | der Liefertermin | Termín dodání | (1) piegādes termiņš | — | — |
| cs-000798 | die Intervention | Zásah | (1) intervencija | — | — |
| cs-000021 | inhaltsreich | Bohatý na obsah | (1) saturīgs | — | — |
| cs-004114 | der Hahnenkamm | Kohoutí sext | (1) gaiļa sekste | — | — |
| cs-002541 | die Einfuhr | Dovážení | (1) imports (2) ievešana (3) importēšana (4) ievedums | — | — |
| cs-001999 | mechanisieren | Mechanizovat | (1) mehanizēt | — | — |
| cs-000080 | der Eisenbeton | Železobeton | (1) dzelzsbetons | — | — |
| cs-005361 | einstellen | Reprezentovat | (1) noregulēt | Ich stelle die Heizung auf 20 Grad ein. | es noregulēju apkuri uz 20 grādiem. |
| cs-005357 | die Rose | Růže | (1) roze | — | — |
| cs-001351 | überbringen | Dárek | (1) apsveikumu (2) vēstuli (3) dāvanu (4) nodot ziņu | — | — |
| cs-004347 | der Quirl | Napěňovač | (1) putotājs | — | — |
| cs-001292 | saurer Rahm | Zakysaná smetana | (1) skābs krējums | — | — |
| cs-002397 | hinüberfahren | Překročit | (1) pārvest pāri (2) pārbraukt pāri | — | — |
| cs-002666 | die Kürzung | Snížení | (1) samazinājums | — | — |
| cs-000027 | das Gerede | Mluvení | (1) runas (2) ļaužu valodas (3) tenkas (4) runāšana | — | — |
| cs-001082 | der Kassenpatient | Pacient pojištěný u zdravotní pojišťovny | (1) slimokasē apdrošināts pacients | — | — |
| cs-000055 | vorfristig | Předčasný | (1) pirmstermiņa (2) pirms termiņa | — | — |
| cs-001676 | bejahen | Potvrdit | (1) apstiprināt (2) apgalvot | — | — |
| cs-002167 | das Drehbuch | Filmový scénář | (1) filmas scenārijs | — | — |
| cs-002261 | kreuzen | Přejít | (1) šķērsot | Wir kreuzen die Straße. | mēs šķērsojam ielu. |
| cs-003156 | die Regung | Nával citu | (1) jūtu uzplūdums (2) tieksme (3) kustība | — | — |
| cs-003436 | sich lohnen | Vyplatit se | (1) atmaksāties | — | — |
| cs-003344 | der Wagon | Vůz | (1) vagons | — | — |
| cs-001513 | entwurzeln | Zcela odstranit | (1) iznīdēt (2) galīgi izskaust (3) izraut ar visām saknēm | — | — |
| cs-000480 | die Rüstung | Výzbroj | (1) bruņošanās (2) bruņojums | — | — |
| cs-002090 | berichten | Nahlásit | (1) ziņot | Die Zeitung berichtet über den Unfall. | avīze ziņo par negadījumu. |
| cs-000494 | einstöckig | Jednopodlažní | (1) vienstāva- | — | — |
| cs-000355 | eingerechnet | Připočtený | (1) ieskaitīts (2) pieskaitīts (3) ierēķināts | — | — |
| cs-001149 | das Vorstellungsgespräch | Pracovní pohovor | (1) darba intervija | — | — |
| cs-003816 | die Abnutzung | Opotřebování | (1) nolietošanās (2) nodilums (3) nolietošana | — | — |
| cs-000344 | allerdings | Však | (1) tomēr | — | — |
| cs-005364 | das Fußballfeld | Mistrovství světa ve fotbale | (1) futbola laukums | — | — |
| cs-002637 | sich revanchieren | Odplatit | (1) atmaksāt (2) atriebties | — | — |
| cs-001403 | das Gedränge | Dav | (1) drūzma | — | — |
| cs-001150 | schwinden | [zmizet] | (1) [iz]zust (2) izgaist (3) [sa]mazināties | — | — |
| cs-001729 | sich befreunden | Spřátelit se | (1) sadraudzēties | — | — |
| cs-003207 | eindringen | Ponořit se do | (1) ielauzties (2) iesūkties (3) iedziļināties (4) iespiesties | — | — |
| cs-003073 | der Brotlaib | Bochník chleba | (1) maizes klaips | — | — |
