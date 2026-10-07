HOW-TO: šo versiju A saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-011.csv (versija B).
Gemini -> ai-gemini/batch-011.csv (versija C).
ChatGPT -> ai-chatgpt/batch-011.csv (versija A).
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
| cs-000808 | parteiisch | Zaujatý | (1) neobjektīvs | — | — |
| cs-005118 | euer | Vaše | (1) jūsu | — | — |
| cs-005116 | erste | První | (1) pirmais | — | — |
| cs-005122 | kostenlos | Zdarma | (1) par velti | — | — |
| cs-003076 | pfuschen | Neodborně | (1) neprasmīgi (2) pavirši strādāt (3) slikti | — | — |
| cs-002535 | folgern | Usoudit | (1) secināt | — | — |
| cs-001656 | die Matinée | Matiné | (1) priekšpusdienas izrāde | — | — |
| cs-003992 | die Warenausgabe | Kontrola nákupů a výdej zboží | (1) pirkumu kontrole un izsniegšana | — | — |
| cs-005120 | die Familie | Rodina | (1) ģimene | — | — |
| cs-001774 | umwerfen | Převrátit | (1) apgāzt | — | — |
| cs-000403 | beistehen | Pomoci | (1) palīdzēt | — | — |
| cs-001589 | die Abfallbeseitigung | Likvidace odpadu | (1) atkritumu iznīcināšana | — | — |
| cs-004474 | sechzigste | Šedesátý | (1) sešdesmitais | — | — |
| cs-002973 | voraussetzen | Být předpokladem | (1) prasīt (2) būt par priekšnoteikumu | — | — |
| cs-001690 | liebkosten | Mazlit se | (1) glāstīt (2) apmīļot | — | — |
| cs-003239 | die Lotion | Tělové mléko | (1) losjons | — | — |
| cs-001463 | bildend | Zobrazující | (1) tēlojošs (2) izglītojošs | — | — |
| cs-002919 | fortschaffen | Odvézt | (1) aizvest projām (2) aiznest projām (3) aizgādāt projām | — | — |
| cs-003678 | durchbrechen | Přelomit | (1) izlauzties (2) parādīties (3) pārraut (4) pārlauzt | — | — |
| cs-005125 | sich unterhalten | Spoléhat na | (1) sarunāties | Wir unterhalten uns über die Arbeit. | mēs sarunājamies par darbu. |
| cs-002948 | absetzen | Položit | (1) nolikt | Setz bitte den Rucksack ab. | lūdzu, noliec mugursomu. |
| cs-004582 | das Polster | Polštář na pohovku | (1) polsteris dīvānam | — | — |
| cs-003555 | lichtempfindlich | Fotosenzitivní | (1) gaismjutīgs | — | — |
| cs-001002 | gebrauchen | Používat | (1) lietot | — | — |
| cs-001061 | überfahren | Lehce přetřít štětcem | (1) sabraukt (2) pārvilkt viegli pāri ar otu | — | — |
| cs-000960 | die Investition | Investování | (1) investēšana (2) kapitāla ieguldījums (3) ieguldīšana (4) investīcija | — | — |
| cs-003318 | die Kollektion | Sbírka | (1) kolekcija | — | — |
| cs-003559 | empor | Nahoru | (1) uz augšu (2) augšup | — | — |
| cs-002677 | der Dokumentarfilm | Dokumentární film | (1) dokumentālā filma | — | — |
| cs-001510 | die Notaufnahme | Pohotovostní oddělení | (1) ātrās palīdzības uzņemšanas nodaļa | — | — |
| cs-003487 | faxen | Poslat faxem | (1) nosūtīt pa faksu | — | — |
| cs-003824 | die Verhandlungen | Jednání | (1) sarunas | — | — |
| cs-002730 | das Lebensmittelgeschäft | Obchod s potravinami | (1) pārtikas veikals | — | — |
| cs-005126 | der Maskenbildner | Horká hlava | (1) profesionāls aktieru grimētājs un frizieris | — | — |
| cs-005124 | der Schiffbruch | Lodní doprava | (1) kuģa bojāeja katastrofa | — | — |
| cs-002949 | der Bildberichterstatter | Fotokorespondent | (1) fotokorespondents | — | — |
| cs-000579 | erfassen | Uchopit | (1) aptvert (2) saprast | — | — |
| cs-000303 | sich erheben | Vstát | (1) pacelties (2) sacelties (3) piecelties | — | — |
| cs-001985 | nachdrücklich | Přesvědčivý | (1) sparīgs (2) pārliecinošs (3) sparīgi (4) pārliecinoši (5) uzsvērts | — | — |
| cs-003434 | das Gleichnis | Přirovnání | (1) līdzība | — | — |
| cs-000676 | die Computerwissenschaft | Informatika | (1) datorzinātne (2) informātika | — | — |
| cs-004195 | verhasst | Neviděný | (1) ienīsts (2) neieredzēts | — | — |
| cs-002126 | mitten | Uprostřed | (1) vidū | — | — |
| cs-003228 | die Gesamtsumme | Celková částka | (1) kopsumma | — | — |
| cs-003774 | einholen | Sbírat | (1) ievākt | Wir holen Informationen ein. | mēs ievācam informāciju. |
| cs-002051 | der Exot | Rostlina | (1) augs (2) dzīvnieks (3) eksotisks cilvēks | — | — |
| cs-002084 | durchbrennen | Přepálit se | (1) pārdedzināt (2) izdegt (3) pārdegt (4) izdedzināt cauri | — | — |
| cs-001377 | die Eisengießerei | Slévárna litiny | (1) čuguna lietuve | — | — |
| cs-004121 | werden | Stát se | (1) kļūt | Ich werde müde. | es kļūstu noguris. |
| cs-003510 | die Garnspule | Cívka | (1) spole (2) spolīte | — | — |
| cs-002045 | verzweifeln | Propadat zoufalství | (1) izmist | — | — |
| cs-003946 | der Tor | Hlupák | (1) muļķis (2) nelga | — | — |
| cs-004350 | der Lackentferner | Odlakovač na nehty | (1) nagu lakas šķīdinātājs | — | — |
| cs-001653 | die Computersprache | Počítačový jazyk | (1) datorvaloda | — | — |
| cs-003540 | streitbar | Svárný | (1) ķildīgs | — | — |
| cs-005121 | beklagen | Obvinit | (1) skumt (2) apraudāt (3) žēloties (4) sūdzēties (5) nožēlot | — | — |
| cs-005117 | der Esslöffel | Polévková lžíce | (1) ēdamkarote | — | — |
| cs-001712 | sich versorgen | Postarat se o sebe | (1) nodrošināties | — | — |
| cs-000739 | der Gemütsmensch | Citově založený | (1) laipns un labsirdīgs cilvēks | — | — |
| cs-004183 | der Umbau | Rekonstrukce | (1) pārbūve | — | — |
| cs-001857 | anliegend | V příloze | (1) pielikumā | — | — |
| cs-004695 | übergehen | Vynechat | (1) ignorēt (2) izlaist (3) nepamanīt | — | — |
| cs-001631 | die Tagesnachrichten | Zprávy dne | (1) dienas ziņas | — | — |
| cs-003393 | sich erkundigen | Informovat se | (1) apvaicāties | — | — |
| cs-001606 | der Mitwisser | Spoluvědoucí | (1) līdzzinātājs | — | — |
| cs-001196 | reizvoll | Atraktivní | (1) pievilcīgs | — | — |
| cs-000679 | ausstopfen | Vyplnit | (1) piepildīt (2) izbāzt (3) aizpildīt | — | — |
| cs-000342 | durchbringen | Pronést skrz | (1) iznest cauri (2) panākt (3) izārstēt (4) izšķērdēt (5) izdabūt cauri | — | — |
| cs-000500 | die Funkstation | Vysílací stanice | (1) raidstacija | — | — |
| cs-000533 | hinübergehen | Přejít | (1) pāriet pāri | — | — |
| cs-000287 | erhaben | Vypouklý | (1) izliekts (2) dižs (3) dižens (4) cēls (5) cildens (6) izcils (7) reljefs | — | — |
| cs-004241 | sachkundig | Kompetentní | (1) lietpratīgs (2) kompetents | — | — |
| cs-003274 | die Hinsicht | Zpráva | (1) ziņa | — | — |
| cs-001775 | das Feingefühl | Takt | (1) smalkjūtība (2) takts | — | — |
| cs-002482 | grinsen | Cenit zuby | (1) sminēt | — | — |
| cs-003970 | aufspringen | Vyskočit | (1) uzlēkt (2) atsprāgt vaļā | — | — |
| cs-000215 | verhöhnen | Vysmívat se | (1) izsmiet (2) izzobot | — | — |
| cs-005123 | die Stellung | Obrys | (1) stāvoklis | Die Stellung des Körpers ist wichtig. | ķermeņa stāvoklis ir svarīgs. |
| cs-003795 | die Seefahrt | Námořní plavba | (1) kuģošana | — | — |
| cs-003152 | beträchtlich | Poměrně velký | (1) krietni liels (2) krietns (3) ievērojams | — | — |
| cs-002050 | der Spott | Zlý vtip | (1) zobošanās (2) ļauns joks (3) izsmiekls | — | — |
| cs-005115 | die Erde | Země | (1) zeme | — | — |
| cs-000785 | still | Klidný | (1) kluss (2) rāms | — | — |
| cs-001435 | der Fleckenentferner | Odstraňovač skvrn | (1) traipu tīrāmais līdzeklis | — | — |
| cs-002207 | das Tasteninstrument | Klávesový nástroj | (1) taustiņinstruments | — | — |
| cs-001172 | das Kabinettsmitglied | Člen kabinetu | (1) kabineta loceklis (2) ministrs | — | — |
| cs-003550 | die Bergbahn | Horská lanovka | (1) pacēlājs kalnos | — | — |
| cs-000918 | kippen | Převrácení | (1) apgāzt | Das Glas kippt um. | glāze apgāžas. |
| cs-004041 | der Pfropfen | Korek | (1) korķis | — | — |
| cs-004123 | der Rückstrahler | Zadní odrazka na kolo nebo auto | (1) velosipēda vai automašīnas aizmugures atstarotājs | — | — |
| cs-001602 | der Grillrost | Grilovací rošt | (1) grila režģis | — | — |
| cs-005119 | falsch | Nesprávný | (1) nepareizs | — | — |
| cs-002597 | der Hörsaal | Přednáškový sál | (1) auditorija | — | — |
| cs-000284 | der Anlass | Důvod | (1) iemesls (2) gadījums | — | — |
| cs-002386 | habsüchtig | Lakomý | (1) mantkārīgs (2) mantrausīgs | — | — |
| cs-002608 | die Radiosendung | Rozhlasový pořad | (1) radioraidījums | — | — |
| cs-000991 | der Betracht | Zřetel | (1) vērā ņemšana (2) apsvēršana | — | — |
| cs-001614 | das Bootfahren | Plavba lodí | (1) braukšana ar laivu | — | — |
| cs-000919 | aussetzen | namítat | (1) pakļaut (2) iebilst (3) stāties (4) izlikt | — | — |
| cs-003898 | dritt | Třetí | (1) treškārt | — | — |
