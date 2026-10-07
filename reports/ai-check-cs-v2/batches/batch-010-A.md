HOW-TO: šo versiju A saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-010.csv (versija A).
Gemini -> ai-gemini/batch-010.csv (versija B).
ChatGPT -> ai-chatgpt/batch-010.csv (versija C).
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
| cs-002253 | die Friedensverhandlungen | Mírové rozhovory | (1) miera sarunas | — | — |
| cs-002998 | gebogen | Zakřivený | (1) izliekts | — | — |
| cs-000780 | grenzen | Hraničit | (1) robežoties | — | — |
| cs-005105 | dritte | Třetí | (1) trešais | — | — |
| cs-003292 | die Losung | Parola | (1) lozungs (2) parole | — | — |
| cs-003058 | der Angehörige | Příbuzný | (1) piederīgais | — | — |
| cs-003865 | das Gitter | Mřížka | (1) režģis | Vor dem Fenster ist ein Gitter. | pie loga ir režģis. |
| cs-000883 | der Kühler | Chladič auta | (1) automašīnas radiators | — | — |
| cs-001555 | die Cafeteria | Jídelna | (1) kafetērija | — | — |
| cs-000260 | sechzehnte | Šestnáctý | (1) sešpadsmitais | — | — |
| cs-004021 | die Bezugsperson | Kontaktní osoba | (1) kontaktpersona (2) tuvākais cilvēks | — | — |
| cs-001458 | der Mittelsmann | Prostředník mezi protivníky nebo partnery | (1) starpnieks starp pretiniekiem vai partneriem | — | — |
| cs-004554 | der Gemüsebau | Pěstování okopanin | (1) sakņkopība (2) dārzeņkopība | — | — |
| cs-000042 | die Abenteuerlust | Touha po dobrodružství | (1) dēku kāre | — | — |
| cs-002760 | einheitlich | Sjednocený | (1) vienots | Wir brauchen einheitliche Regeln. | mums vajag vienotus noteikumus. |
| cs-000405 | das Taschenbuch | Brožovaná kniha | (1) kabatas grāmata | — | — |
| cs-000847 | anlehnen | Opřít | (1) piesliet | — | — |
| cs-005112 | vorfristig | Vynikající | (1) pirmstermiņa (2) pirms termiņa | — | — |
| cs-001387 | empor | Nahoru | (1) uz augšu (2) augšup | — | — |
| cs-003863 | hinüber | Přes | (1) pāri | — | — |
| cs-000503 | der Betracht | Úvaha | (1) vērā ņemšana (2) apsvēršana | — | — |
| cs-000604 | das Fallschirmspringen | Seskok padákem | (1) lēkšana ar izpletni | — | — |
| cs-005103 | dreißig | Třicet | (1) trīsdesmit | — | — |
| cs-001332 | der Grenzkonflikt | Hraniční konflikt | (1) robežkonflikts | — | — |
| cs-005114 | der Verdienst | Honorář umělce | (1) nopelns | — | — |
| cs-003080 | die Garnspule | Cívka | (1) spole (2) spolīte | — | — |
| cs-001442 | beträchtlich | Výrazný | (1) krietni liels (2) krietns (3) ievērojams | — | — |
| cs-000477 | der Tusch | Fanfára | (1) fanfāra | — | — |
| cs-005106 | du | Ty | (1) tu | — | — |
| cs-000709 | nachdrücklich | Přesvědčivě | (1) sparīgs (2) pārliecinošs (3) sparīgi (4) pārliecinoši (5) uzsvērts | — | — |
| cs-002476 | lesegeschützt | Text, který lze přečíst pouze po zadání hesla | (1) teksts, ko var nolasīt tikai pēc paroles ievadīšanas | — | — |
| cs-004332 | abtragen | Odnést | (1) nonēsāt (2) nojaukt (3) aiznest | — | — |
| cs-005104 | dreizehn | Třináct | (1) trīspadsmit | — | — |
| cs-003782 | der Bildbericht | Fotoreportáž | (1) fotoreportāža | — | — |
| cs-002266 | fassen | Uchopit | (1) satvert | Sie fasst mich am Arm. | viņa satver mani aiz rokas. |
| cs-003519 | die Koalitionsregierung | Koaliční vláda | (1) koalīcijas valdība | — | — |
| cs-000377 | streitbar | Hádavý | (1) ķildīgs | — | — |
| cs-001876 | auf und ab | Nahoru a dolů | (1) šurp un turp (2) augšā un lejā | — | — |
| cs-005111 | das Belieben | Obránce | (1) patikšana (2) vēlēšanās (3) patika | — | — |
| cs-001052 | umtauschen | Vyměnit | (1) apmainīt | — | — |
| cs-003645 | sich ergeben | Vyústit | (1) izrietēt (2) padoties | — | — |
| cs-001587 | durchbrennen | Vyhořet | (1) pārdedzināt (2) izdegt (3) pārdegt (4) izdedzināt cauri | — | — |
| cs-005107 | dürfen | Smět | (1) drīkstēt | — | — |
| cs-004267 | die Marssonde | Sonda k Marsu | (1) marsa zonde | — | — |
| cs-000086 | der Tor | Prosťáček | (1) muļķis (2) nelga | — | — |
| cs-001364 | fortschaffen | Odpravit | (1) aizvest projām (2) aiznest projām (3) aizgādāt projām | — | — |
| cs-005110 | begegnen | Odpovědět | (1) satikt | — | — |
| cs-001446 | die Not | Nedostatek | (1) trūkums | Viele Menschen leben in Not. | daudzi cilvēki dzīvo trūkumā. |
| cs-000822 | beispielhaft | Vzorný | (1) parauga (2) priekšzīmīgs | — | — |
| cs-002204 | sich versichern | Pojistit se | (1) apdrošināties | — | — |
| cs-002907 | leidlich | Docela dobrý | (1) ciešami (2) puslīdz labi (3) paciešams | — | — |
| cs-001525 | der Exot | Zvíře | (1) augs (2) dzīvnieks (3) eksotisks cilvēks | — | — |
| cs-002709 | werben | Inzerovat | (1) reklamēt | Die Firma wirbt für ein neues Produkt. | uzņēmums reklamē jaunu produktu. |
| cs-003453 | die Glut | Zářit | (1) kvēle (2) liels karstums (3) svelme | — | — |
| cs-000520 | sich erinnern | Pamatovat si | (1) atcerēties | — | — |
| cs-003644 | verfallen | Zřítit se | (1) sagrūt (2) panīkt (3) pagrimt (4) sabrukt | — | — |
| cs-000926 | aufs | Na | (1) uz | Ich gehe aufs Dach. | Es eju uz jumta. |
| cs-002882 | dreizehnte | Třináctý | (1) trīspadsmitais | — | — |
| cs-003161 | fassungslos | Šokovaný | (1) pārsteigts (2) šokēts | — | — |
| cs-001455 | absenden | Poslat | (1) nosūtīt | — | — |
| cs-004056 | begünstigen | Usnadňovat | (1) sekmēt (2) protežēt (3) atbalstīt (4) veicināt | — | — |
| cs-005109 | das Schaffen | Akce | (1) daiļrade (2) darbs (3) darbība (4) radīšana (5) jaunrade | — | — |
| cs-002012 | killen | Zabít | (1) nogalināt | — | — |
| cs-002182 | die Schöpfung | Dílo | (1) darinājums (2) darbs (3) radīšana | — | — |
| cs-000586 | der Dirigentenstab | Dirigentská taktovka | (1) diriģenta zizlis | — | — |
| cs-003611 | die Gepflogenheit | Zvyklost | (1) paradums (2) paraža | — | — |
| cs-000082 | mittels | S pomocí něčeho | (1) ar kaut kā palīdzību | — | — |
| cs-000161 | verzichten | Vzdát se | (1) atteikties | — | — |
| cs-000041 | übereinander | Jeden nad druhým | (1) viens virs otra | — | — |
| cs-000799 | habsüchtig | Lakomý | (1) mantkārīgs (2) mantrausīgs | — | — |
| cs-002371 | das Lawinenopfer | Oběť laviny | (1) lavīnas upuris | — | — |
| cs-002367 | stiften | Založit | (1) dibināt | — | — |
| cs-003341 | reizend | Kouzelný | (1) jauks | — | — |
| cs-005113 | benachrichtigen | Pozdravit | (1) paziņot | — | — |
| cs-000245 | der Sportfunk | Sportovní rozhlasové pořady | (1) sporta raidījumi | — | — |
| cs-001136 | pachten | Pronajmout | (1) nomāt | — | — |
| cs-004542 | das Polizeirevier | Policejní stanice | (1) policijas iecirknis | — | — |
| cs-002871 | die Eisenbahnstation | Nádraží | (1) dzelzceļa stacija | — | — |
| cs-004167 | eingehen | Dorazit | (1) pienākt (2) ienākt (3) ierauties (4) sarauties (5) piekrist (6) saderēt (7) ieiet | — | — |
| cs-002170 | voraussetzen | Vyžadovat | (1) prasīt (2) būt par priekšnoteikumu | — | — |
| cs-003911 | die Herztransplantation | Transplantaci srdce | (1) sirds transplantācija | — | — |
| cs-002689 | übergehen | Přehlédnout | (1) ignorēt (2) izlaist (3) nepamanīt | — | — |
| cs-003365 | niederlegen | Odložit | (1) pārtraukt darbu (2) sākt streikot (3) nolikt | — | — |
| cs-003624 | bezüglich | Ohledně | (1) attiecībā uz | — | — |
| cs-004259 | die Tabakmischung | Směs tabáku | (1) tabakas maisījums | — | — |
| cs-000451 | die Verhandlungen | Vyjednávání | (1) sarunas | — | — |
| cs-004528 | der Huf | Kopyto pro koně | (1) nags zirgam | — | — |
| cs-000154 | die Bereitschaft | Připravenost | (1) gatavība | — | — |
| cs-003404 | durcharbeiten | Důkladně prohníst | (1) rūpīgi izlasīt (2) rūpīgi izmīcīt (3) izstrādāt | — | — |
| cs-002540 | das Innere | Interiér | (1) iekšiene (2) iekšējā daļa | — | — |
| cs-004534 | das Blockhaus | Srubový dům | (1) guļbūves māja | — | — |
| cs-000612 | erfahren | Dozvědět se | (1) uzzināt (2) pieredzēt | Ich habe die Nachricht erst heute erfahren. | es uzzināju ziņu tikai šodien. |
| cs-002096 | der Pflichtbesuch | Zdvořilostní návštěva | (1) pieklājības vizīte | — | — |
| cs-000470 | verhandeln | Diskutovat | (1) apspriesties (2) vest sarunas | — | — |
| cs-000836 | die Wand | Zeď | (1) siena | — | — |
| cs-002564 | die Radierung | Ofort | (1) asējums (2) oforts | — | — |
| cs-001860 | der Firmeninhaber | Majitel společnosti | (1) firmas īpašnieks | — | — |
| cs-003760 | der Rückhalt | Podpora | (1) balsts (2) atbalsts | — | — |
| cs-005108 | die Dusche | Sprcha | (1) duša | — | — |
| cs-000453 | sachkundig | Zdatný | (1) lietpratīgs (2) kompetents | — | — |
