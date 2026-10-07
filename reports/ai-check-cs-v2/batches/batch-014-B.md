HOW-TO: šo versiju B saņem Anthropic.
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
| cs-003330 | der Geselle | Pomocník | (1) amatnieks, kas pēc mācību laika nokārtojis eksāmenu (2) puisis (3) palīgs (4) zellis | — | — |
| cs-001025 | absolvieren | Dokončit studium | (1) pabeigt mācības | — | — |
| cs-003530 | durchbringen | Dostat skrz | (1) izšķērdēt (2) izārstēt (3) panākt (4) iznest cauri (5) izdabūt cauri | — | — |
| cs-002531 | sich verstellen | Vydávat se za | (1) uzdoties par | — | — |
| cs-004716 | die Fußballelf | Fotbalový tým | (1) futbola komanda | — | — |
| cs-003744 | das Konzept | Plán | (1) plāns (2) uzmetums (3) koncepcija | — | — |
| cs-005151 | fünfzig | Padesát | (1) piecdesmit | — | — |
| cs-004323 | lindern | Ulevit od bolesti | (1) atvieglināt sāpes (2) remdēt | — | — |
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
| cs-000757 | die Konsequenz | Závěr | (1) sekas (2) secinājums (3) secība (4) konsekvence | — | — |
| cs-003945 | die Darbietung | Představení | (1) priekšnesums (2) sniegums | — | — |
| cs-002423 | sich erwärmen | Zahřát se | (1) sasilt | — | — |
| cs-005153 | der Fußball | Fotbal | (1) futbols | Ich spiele Fußball. | es spēlēju futbolu. |
| cs-004219 | gefährlich | Riskantní | (1) riskants (2) bīstams | — | — |
| cs-003710 | der Grundsatz | Princip | (1) princips | — | — |
| cs-002787 | die Empörung | Povstání | (1) dumpis (2) sacelšanās (3) sašutums | — | — |
| cs-002290 | überfordern | Klást přehnané požadavky | (1) izvirzīt pārmērīgas prasības | — | — |
| cs-000653 | übermitteln | Odeslat dopis | (1) nosūtīt vēstuli (2) nodot | — | — |
| cs-000984 | der Umkreis | Okolí | (1) apkārtne | — | — |
| cs-003167 | restlos | Zcela | (1) pilnīgi | — | — |
| cs-001852 | beizen | Bejcovat | (1) beicēt (2) kodināt | — | — |
| cs-000022 | vielseitig | Univerzální | (1) daudzpusīgs | — | — |
| cs-001622 | das Fischgericht | Rybí pokrm | (1) zivju ēdiens | — | — |
| cs-002835 | erhaben | Vynikající | (1) izcils (2) cildens (3) cēls (4) dižens (5) dižs (6) izliekts (7) reljefs | — | — |
| cs-001287 | mutlos | Malomyslný | (1) mazdūšīgs | — | — |
| cs-000391 | der Untergang | Zapadání | (1) sabrukums (2) bojāeja (3) norietēšana (4) riets | — | — |
| cs-002961 | klarkommen | Vyrovnat se | (1) tikt galā | — | — |
| cs-003367 | durchmachen | Dokončit | (1) pabeigt (2) izņemt (3) pārdzīvot | — | — |
| cs-002471 | die Abneigung | Antipatie | (1) antipātija (2) nepatika | — | — |
| cs-000521 | der Bote | Kurýr | (1) sūtnis (2) ziņnesis (3) vēstnesis | — | — |
| cs-002880 | rau | Nerovný | (1) neapstrādāts (2) nelaipns (3) skarbs (4) aizsmacis (5) rupjš (6) raupjš (7) nelīdzens | — | — |
| cs-005161 | vornehmen | Odstranit | (1) kaut ko apņemties (2) ķerties (3) veikt (4) izdarīt | — | — |
| cs-005154 | ganz | Celý | (1) vesels | Ich arbeite den ganzen Tag. | es strādāju visu dienu. |
| cs-004190 | fernbleiben | Neúčastnit se | (1) neierasties | — | — |
| cs-000490 | einlassen | Vpustit dovnitř | (1) ielaist | — | — |
| cs-000791 | die Berufsberatung | Profesní poradenství | (1) profesionālās orientācijas konsultācija | — | — |
| cs-005152 | der Fuß | Noha | (1) pēda | — | — |
| cs-001355 | der Springbrunnen | Kašna | (1) strūklaka | — | — |
| cs-001967 | der Anteil | Část | (1) daļa | — | — |
| cs-000884 | der Laie | Diletant | (1) diletants | — | — |
| cs-001491 | die Vertretung | Substituce | (1) pārstāvēšana (2) pārstāvība (3) aizstāšana (4) aizvietošana | — | — |
| cs-003460 | der Mull | Gáza | (1) marle | — | — |
| cs-001532 | ausbessern | Opravit | (1) izlabot | — | — |
| cs-000158 | ausspannen | Vypráhnout | (1) atpūsties (2) atņemt partneri (3) izjūgt | — | — |
| cs-005156 | der Garten | Zahrada | (1) dārzs | — | — |
| cs-004622 | erfreulich | Příjemný | (1) iepriecinošs | — | — |
| cs-001281 | per | Za | (1) pa | — | — |
| cs-003543 | freilich | Bezpochyby | (1) tikai (2) bet (3) bez šaubām (4) protams | — | — |
| cs-000607 | entfallen | Odpadnout | (1) aizmirsties (2) izkrist | — | — |
| cs-003474 | stramm | Napnutý | (1) stingrs | — | — |
| cs-004523 | die Sehkraft | Schopnost vidění | (1) redzes spēja (2) redze | — | — |
| cs-001133 | unanständig | Nevychovaný | (1) neuzvedīgs (2) nepieklājīgs | — | — |
| cs-005160 | das Kollegbuch | Sbírka | (1) studenta atzīmju grāmatiņa | — | — |
| cs-003202 | die Hochachtung | Velká úcta | (1) liela cieņa | — | — |
| cs-003480 | das Brathuhn | Pečené kuře | (1) cepta vista | — | — |
| cs-002364 | die Rate | Příspěvek | (1) iemaksa | Ich zahle das Auto in Raten. | es maksāju par auto pa daļām. |
| cs-004403 | dulden | Vydržet | (1) paciest (2) ciest | — | — |
| cs-001294 | verheiraten | Oženit někoho | (1) apprecināt | — | — |
| cs-003015 | das Leinen | Lněné plátno | (1) linaudekls | — | — |
| cs-002200 | bisschen | Trochu | (1) mazliet | — | — |
| cs-002496 | fristlos | Okamžitý | (1) beztermiņa | — | — |
| cs-003331 | vermitteln | Propagovat | (1) veicināt (2) sagādāt (3) būt par starpnieku | — | — |
| cs-000846 | die Wasserleitung | Vodovodní potrubí | (1) ūdensvads | — | — |
| cs-001418 | pikiert | Uražený | (1) sašutis (2) aizskarts (3) aizvainots | — | — |
| cs-002691 | sättigen | Pohostit | (1) ķīm. piesātināt (2) mielot (3) [labi] paēdināt | — | — |
| cs-005157 | das Einzelkind | Omezení dovozu | (1) vienīgais bērns ģimenē | — | — |
| cs-003113 | der Imbiss | Snack | (1) uzkoda | — | — |
| cs-004181 | die Miederwaren | Podprsenky | (1) krūšturi (2) korsetes | — | — |
| cs-004203 | der Sauger | Dudlík na lahvičce | (1) knupītis uz pudelītes | — | — |
| cs-000732 | bevorstehend | Blížící se | (1) nākamais (2) gaidāmais | — | — |
| cs-003187 | wieweit | Jak daleko | (1) cik tālu | — | — |
| cs-003476 | anmelden | Přihlásit se | (1) pieteikt | Ich melde mich zum Kurs an. | es piesakos kursam. |
| cs-003623 | der Grenzbereich | Hraniční pásmo | (1) teritorija abpus robežai (2) robežzona (3) robežjosla | — | — |
| cs-004186 | die Demission | Demise | (1) demisija (2) atkāpšanās no amata | — | — |
| cs-001453 | der Flugverkehr | Letecký provoz | (1) gaisa satiksme | — | — |
| cs-001842 | horchen | Poslouchat | (1) klausīties | Sie horcht an der Tür. | viņa klausās pie durvīm. |
| cs-001760 | dämpfen | Vařit v páře | (1) sutināt (2) sautēt (3) tvaicēt (4) apslāpēt (5) klusināt | — | — |
| cs-003316 | sich erholen | Odpočinout si | (1) atgūties (2) atpūsties | — | — |
| cs-001962 | austreiben | Vyhnat | (1) atradināt (2) izdzīt | — | — |
| cs-000646 | der Bleigehalt | Obsah olova | (1) svina saturs | — | — |
| cs-005159 | verständig | Neměnný | (1) saprātīgs (2) prātīgs | — | — |
| cs-002064 | zuwider | Proti | (1) nepatikt (2) pretēji (3) pret | Er handelte mir zuwider. | viņš rīkojās pret manu gribu. |
| cs-003659 | das Tiefkühlfach | Mrazicí přihrádka | (1) saldētājkamera | — | — |
| cs-001499 | die Gehaltsabrechnung | Výplatní páska | (1) algas aprēķins | — | — |
| cs-001562 | gurgeln | Vyplachovat ústa | (1) muti (2) skalot rīkli | — | — |
| cs-002829 | die Nudeln | Nudle | (1) nūdeles | — | — |
| cs-005158 | bestreiten | Pozdravit | (1) segt (2) samaksāt (3) apstrīdēt | — | — |
| cs-001637 | das Grußwort | Krátký formální projev | (1) īsa oficiāla uzruna | — | — |
| cs-005162 | der Bergführer | Divadelní repertoár | (1) pavadonis kalnos | — | — |
