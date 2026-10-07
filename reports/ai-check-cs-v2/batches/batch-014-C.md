HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-014.csv (versija B).
Gemini -> ai-gemini/batch-014.csv (versija C).
ChatGPT -> ai-chatgpt/batch-014.csv (versija A).
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
| cs-000546 | die Tatze | Tlapka | (1) ķepa | — | — |
| cs-003330 | der Geselle | Pomocník | (1) puisis (2) amatnieks, kas pēc mācību laika nokārtojis eksāmenu (3) zellis (4) palīgs | — | — |
| cs-001025 | absolvieren | Dokončit studium | (1) pabeigt mācības | — | — |
| cs-003530 | durchbringen | Dostat skrz | (1) panākt (2) izārstēt (3) izšķērdēt (4) izdabūt cauri (5) iznest cauri | — | — |
| cs-002531 | sich verstellen | Vydávat se za | (1) uzdoties par | — | — |
| cs-004716 | die Fußballelf | Fotbalový tým | (1) futbola komanda | — | — |
| cs-003744 | das Konzept | Plán | (1) plāns (2) koncepcija (3) uzmetums | — | — |
| cs-005151 | fünfzig | Padesát | (1) piecdesmit | — | — |
| cs-004323 | lindern | Ulevit od bolesti | (1) remdēt (2) atvieglināt sāpes | — | — |
| cs-000929 | selbstlos | Obětavý | (1) pašaizliedzīgs (2) nesavtīgs | — | — |
| cs-000071 | der Pilotfilm | Úvodní film série | (1) seriāla ievadfilma | — | — |
| cs-002767 | die Luftverschmutzung | Znečištění ovzduší | (1) gaisa piesārņojums | — | — |
| cs-001623 | die Konsumgüter | Konzumní zboží | (1) patēriņa preces | — | — |
| cs-005155 | die Garage | Garáž | (1) garāža | — | — |
| cs-001581 | maßlos | Nekonečný | (1) bezgalīgs (2) neizmērojams | — | — |
| cs-000863 | scheitern | Selhat | (1) izjukt (2) piedzīvot neveiksmi | — | — |
| cs-002100 | das Präsidium | Prezidium | (1) prezidijs | — | — |
| cs-000299 | die Geschwister | Bratři a sestry | (1) brāļi un māsas | Ich habe zwei Geschwister. | man ir divi brāļi vai māsas. |
| cs-001671 | der Dressman | Model předvádějící na módních přehlídkách | (1) modeļu demonstrētājs modes skatēs | — | — |
| cs-000153 | hantieren | Jednat s čím | (1) darboties ar ko (2) rīkoties | — | — |
| cs-000757 | die Konsequenz | Závěr | (1) secinājums (2) sekas (3) konsekvence (4) secība | — | — |
| cs-003945 | die Darbietung | Představení | (1) sniegums (2) priekšnesums | — | — |
| cs-002423 | sich erwärmen | Zahřát se | (1) sasilt | — | — |
| cs-005153 | der Fußball | Fotbal | (1) futbols | Ich spiele Fußball. | es spēlēju futbolu. |
| cs-004219 | gefährlich | Riskantní | (1) bīstams (2) riskants | — | — |
| cs-003710 | der Grundsatz | Princip | (1) princips | — | — |
| cs-002787 | die Empörung | Povstání | (1) dumpis (2) sašutums (3) sacelšanās | — | — |
| cs-002290 | überfordern | Klást přehnané požadavky | (1) izvirzīt pārmērīgas prasības | — | — |
| cs-000653 | übermitteln | Odeslat dopis | (1) nosūtīt vēstuli (2) nodot | — | — |
| cs-000984 | der Umkreis | Okolí | (1) apkārtne | — | — |
| cs-003167 | restlos | Zcela | (1) pilnīgi | — | — |
| cs-001852 | beizen | Bejcovat | (1) beicēt (2) kodināt | — | — |
| cs-000022 | vielseitig | Univerzální | (1) daudzpusīgs | — | — |
| cs-001622 | das Fischgericht | Rybí pokrm | (1) zivju ēdiens | — | — |
| cs-002835 | erhaben | Vynikající | (1) dižs (2) dižens (3) cēls (4) cildens (5) izcils (6) reljefs (7) izliekts | — | — |
| cs-001287 | mutlos | Malomyslný | (1) mazdūšīgs | — | — |
| cs-000391 | der Untergang | Zapadání | (1) bojāeja (2) sabrukums (3) riets (4) norietēšana | — | — |
| cs-002961 | klarkommen | Vyrovnat se | (1) tikt galā | — | — |
| cs-003367 | durchmachen | Dokončit | (1) pabeigt (2) pārdzīvot (3) izņemt | — | — |
| cs-002471 | die Abneigung | Antipatie | (1) nepatika (2) antipātija | — | — |
| cs-000521 | der Bote | Kurýr | (1) sūtnis (2) vēstnesis (3) ziņnesis | — | — |
| cs-002880 | rau | Nerovný | (1) rupjš (2) aizsmacis (3) skarbs (4) nelaipns (5) neapstrādāts (6) nelīdzens (7) raupjš | — | — |
| cs-005161 | vornehmen | Odstranit | (1) ķerties (2) kaut ko apņemties (3) izdarīt (4) veikt | — | — |
| cs-005154 | ganz | Celý | (1) vesels | Ich arbeite den ganzen Tag. | es strādāju visu dienu. |
| cs-004190 | fernbleiben | Neúčastnit se | (1) neierasties | — | — |
| cs-000490 | einlassen | Vpustit dovnitř | (1) ielaist | — | — |
| cs-000791 | die Berufsberatung | Profesní poradenství | (1) profesionālās orientācijas konsultācija | — | — |
| cs-005152 | der Fuß | Noha | (1) pēda | — | — |
| cs-001355 | der Springbrunnen | Kašna | (1) strūklaka | — | — |
| cs-001967 | der Anteil | Část | (1) daļa | — | — |
| cs-000884 | der Laie | Diletant | (1) diletants | — | — |
| cs-001491 | die Vertretung | Substituce | (1) pārstāvība (2) pārstāvēšana (3) aizvietošana (4) aizstāšana | — | — |
| cs-003460 | der Mull | Gáza | (1) marle | — | — |
| cs-001532 | ausbessern | Opravit | (1) izlabot | — | — |
| cs-000158 | ausspannen | Vypráhnout | (1) atpūsties (2) izjūgt (3) atņemt partneri | — | — |
| cs-005156 | der Garten | Zahrada | (1) dārzs | — | — |
| cs-004622 | erfreulich | Příjemný | (1) iepriecinošs | — | — |
| cs-001281 | per | Za | (1) pa | — | — |
| cs-003543 | freilich | Bezpochyby | (1) bet (2) tikai (3) protams (4) bez šaubām | — | — |
| cs-000607 | entfallen | Odpadnout | (1) aizmirsties (2) izkrist | — | — |
| cs-003474 | stramm | Napnutý | (1) stingrs | — | — |
| cs-004523 | die Sehkraft | Schopnost vidění | (1) redze (2) redzes spēja | — | — |
| cs-001133 | unanständig | Nevychovaný | (1) neuzvedīgs (2) nepieklājīgs | — | — |
| cs-005160 | das Kollegbuch | Sbírka | (1) studenta atzīmju grāmatiņa | — | — |
| cs-003202 | die Hochachtung | Velká úcta | (1) liela cieņa | — | — |
| cs-003480 | das Brathuhn | Pečené kuře | (1) cepta vista | — | — |
| cs-002364 | die Rate | Příspěvek | (1) iemaksa | Ich zahle das Auto in Raten. | es maksāju par auto pa daļām. |
| cs-004403 | dulden | Vydržet | (1) ciest (2) paciest | — | — |
| cs-001294 | verheiraten | Oženit někoho | (1) apprecināt | — | — |
| cs-003015 | das Leinen | Lněné plátno | (1) linaudekls | — | — |
| cs-002200 | bisschen | Trochu | (1) mazliet | — | — |
| cs-002496 | fristlos | Okamžitý | (1) beztermiņa | — | — |
| cs-003331 | vermitteln | Propagovat | (1) veicināt (2) būt par starpnieku (3) sagādāt | — | — |
| cs-000846 | die Wasserleitung | Vodovodní potrubí | (1) ūdensvads | — | — |
| cs-001418 | pikiert | Uražený | (1) sašutis (2) aizvainots (3) aizskarts | — | — |
| cs-002691 | sättigen | Pohostit | (1) ķīm. piesātināt (2) [labi] paēdināt (3) mielot | — | — |
| cs-005157 | das Einzelkind | Omezení dovozu | (1) vienīgais bērns ģimenē | — | — |
| cs-003113 | der Imbiss | Snack | (1) uzkoda | — | — |
| cs-004181 | die Miederwaren | Podprsenky | (1) korsetes (2) krūšturi | — | — |
| cs-004203 | der Sauger | Dudlík na lahvičce | (1) knupītis uz pudelītes | — | — |
| cs-000732 | bevorstehend | Blížící se | (1) nākamais (2) gaidāmais | — | — |
| cs-003187 | wieweit | Jak daleko | (1) cik tālu | — | — |
| cs-003476 | anmelden | Přihlásit se | (1) pieteikt | Ich melde mich zum Kurs an. | es piesakos kursam. |
| cs-003623 | der Grenzbereich | Hraniční pásmo | (1) teritorija abpus robežai (2) robežjosla (3) robežzona | — | — |
| cs-004186 | die Demission | Demise | (1) atkāpšanās no amata (2) demisija | — | — |
| cs-001453 | der Flugverkehr | Letecký provoz | (1) gaisa satiksme | — | — |
| cs-001842 | horchen | Poslouchat | (1) klausīties | Sie horcht an der Tür. | viņa klausās pie durvīm. |
| cs-001760 | dämpfen | Vařit v páře | (1) tvaicēt (2) sautēt (3) sutināt (4) klusināt (5) apslāpēt | — | — |
| cs-003316 | sich erholen | Odpočinout si | (1) atpūsties (2) atgūties | — | — |
| cs-001962 | austreiben | Vyhnat | (1) atradināt (2) izdzīt | — | — |
| cs-000646 | der Bleigehalt | Obsah olova | (1) svina saturs | — | — |
| cs-005159 | verständig | Neměnný | (1) prātīgs (2) saprātīgs | — | — |
| cs-002064 | zuwider | Proti | (1) nepatikt (2) pret (3) pretēji | Er handelte mir zuwider. | viņš rīkojās pret manu gribu. |
| cs-003659 | das Tiefkühlfach | Mrazicí přihrádka | (1) saldētājkamera | — | — |
| cs-001499 | die Gehaltsabrechnung | Výplatní páska | (1) algas aprēķins | — | — |
| cs-001562 | gurgeln | Vyplachovat ústa | (1) muti (2) skalot rīkli | — | — |
| cs-002829 | die Nudeln | Nudle | (1) nūdeles | — | — |
| cs-005158 | bestreiten | Pozdravit | (1) segt (2) apstrīdēt (3) samaksāt | — | — |
| cs-001637 | das Grußwort | Krátký formální projev | (1) īsa oficiāla uzruna | — | — |
| cs-005162 | der Bergführer | Divadelní repertoár | (1) pavadonis kalnos | — | — |
