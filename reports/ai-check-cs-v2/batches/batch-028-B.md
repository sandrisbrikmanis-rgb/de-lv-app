HOW-TO: šo versiju B saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-028.csv (versija A).
Gemini -> ai-gemini/batch-028.csv (versija B).
ChatGPT -> ai-chatgpt/batch-028.csv (versija C).
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
| cs-000616 | die Werkhalle | Provozní hala | (1) cehs | — | — |
| cs-003830 | der Brandschaden | Ztráta způsobená požárem | (1) ugunsgrēka nodarītais zaudējums | — | — |
| cs-002027 | eitel | Povrchní | (1) ārišķīgs (2) tukšs (3) sekls (4) iedomīgs (5) uzpūtīgs (6) godkārīgs | — | — |
| cs-000637 | die Beule | Bou­le | (1) puns | — | — |
| cs-003191 | beispiellos | Nesrovnatelný | (1) tāds, kas nav ne ar ko salīdzināms (2) neredzēts (3) nebijis | — | — |
| cs-001284 | gemessen | Vyvážený | (1) apdomāts (2) nosvērts | — | — |
| cs-005324 | oben | Nahoře | (1) augšā | — | — |
| cs-004588 | die Gartenerdbeere | Zahradní jahoda | (1) dārza zemene | — | — |
| cs-000859 | sicher | Jistě | (1) noteikti (2) drošs | Ist das Wasser sicher? | vai ūdens ir drošs? |
| cs-001761 | unentgeltlich | Bez náhrady | (1) par velti (2) bezmaksas (3) bez atlīdzības | — | — |
| cs-003184 | folgend | Další | (1) nākamais (2) šāds | — | — |
| cs-000163 | das Gemüt | Myšlenky | (1) prāti (2) domas (3) daba (4) raksturs | — | — |
| cs-004331 | sich interessieren | Mít zájem | (1) interesēties | — | — |
| cs-000979 | der Leitartikel | Úvodní článek | (1) ievadraksts | — | — |
| cs-004165 | sich hingeben | Odevzdat se | (1) nodoties (2) atdoties | — | — |
| cs-001171 | das Rind | Dobytek | (1) liellops | — | — |
| cs-001536 | der Vorstand | Vedení | (1) priekšnieks (2) vadība (3) priekšniecība (4) valde | — | — |
| cs-002817 | die Kurve | Ohyb | (1) līkums | — | — |
| cs-000440 | der Strauß | Kytice květin | (1) puķu pušķis | — | — |
| cs-004613 | der Wacholder | Jalovec obecný | (1) kadiķis (2) paeglis | — | — |
| cs-004349 | bereden | Diskutovat | (1) pārrunāt | — | — |
| cs-004352 | beharren | Setrvat | (1) palikt (2) pastāvēt | — | — |
| cs-001302 | hinterziehen | Zpronevěřit peníze | (1) nenomaksāt nodokļus (2) piesavināties naudu | — | — |
| cs-003944 | die Peepshow | Erotický program, který je sledován samostatně prostřednictvím boxu | (1) erotiska programma, ko noskatās atsevišķi caur lodziņu | — | — |
| cs-003229 | das Abrüstungsabkommen | Odzbrojovací smlouva | (1) atbruņošanās līgums | — | — |
| cs-004298 | das Volumen | Kapacita | (1) tilpums (2) apjoms | — | — |
| cs-003880 | der Gefangene | Vězeň | (1) gūsteknis | — | — |
| cs-001523 | die Industrieanlage | Průmyslový provoz | (1) rūpniecības komplekss | — | — |
| cs-005326 | die Umlaufbahn | Náhlá změna | (1) orbīta | — | — |
| cs-002329 | eigentümlich | Charakteristický | (1) raksturīgs (2) īpatnējs | — | — |
| cs-001539 | entziehen | Vyhnout se | (1) izbēgt (2) atrauties (3) izvairīties (4) atraut (5) atņemt | — | — |
| cs-005327 | ausstopfen | Odstavit | (1) izbāzt (2) piepildīt (3) aizpildīt | — | — |
| cs-001880 | korrumpieren | Uplácet | (1) piekukuļot | — | — |
| cs-000876 | die Unannehmlichkeit | Potíže | (1) nepatīkams gadījums (2) nepatikšanas | — | — |
| cs-000057 | natürlich | Samozřejmě | (1) dabisks (2) protams | Kommst du mit? – Natürlich! | vai nāc līdzi? – protams! |
| cs-005328 | starr | Tvrdohlavý | (1) stīvs (2) sastindzis (3) nekustīgs | — | — |
| cs-005325 | die Computerwissenschaft | Počítačový jazyk | (1) informātika (2) datorzinātne | — | — |
| cs-002624 | ineinander | V sobě navzájem | (1) viens otrā | — | — |
| cs-005320 | normal | Normální | (1) normāls | — | — |
| cs-001236 | erscheinen | Se objeví | (1) parādīties | Er erschien plötzlich im Zimmer. | viņš pēkšņi parādījās istabā. |
| cs-000927 | einfassen | Vsadit do obruby | (1) iedarināt apkalumā (2) ierāmēt (3) ietvert | — | — |
| cs-000663 | der Einschnitt | Vryp | (1) robs (2) grieziens (3) griezums (4) iegriezums | — | — |
| cs-001560 | nachgehen | Sledovat | (1) noskaidrot (2) sekot | — | — |
| cs-000330 | der Prüfer | Auditor | (1) auditors | — | — |
| cs-003461 | vermutlich | Pravděpodobně | (1) laikam | — | — |
| cs-005322 | die Null | Nula | (1) nulle | — | — |
| cs-003657 | das Gebot | Požadavek | (1) bauslis (2) prasība (3) pavēle | — | — |
| cs-001165 | das Brandmal | Jizva po popálení | (1) apdeguma rēta (2) apdegums | — | — |
| cs-004075 | die Ehrung | Uctění | (1) godināšanas ceremonija (2) godināšana | — | — |
| cs-003217 | die Gottheit | Božstvo | (1) dievība | — | — |
| cs-002777 | probieren | Vyzkoušet | (1) nogaršot (2) izmēģināt | Probier mal die Suppe! | pagaršo zupu! |
| cs-002609 | unnütz | Marný | (1) veltīgs (2) nevajadzīgs (3) nederīgs | — | — |
| cs-003490 | die Marktwirtschaft | Tržní ekonomika | (1) tirgus ekonomika | — | — |
| cs-000137 | der Dreck | Hnůj | (1) draņķis (2) dubļi (3) netīrumi (4) mēsli | — | — |
| cs-001571 | entweichen | Vzdálit se | (1) izplūst (2) atkāpties (3) izbēgt (4) attālināties | — | — |
| cs-005330 | korrupt | Nahoru | (1) piekukuļojams (2) pērkams | — | — |
| cs-005329 | verrechnen | Zahrnout | (1) aprēķināt | — | — |
| cs-003960 | das Doping | Dopingový prostředek | (1) dopinga līdzeklis | — | — |
| cs-000967 | anstiften | Podněcovat | (1) pamudināt | — | — |
| cs-005323 | die Nummer | Číslo | (1) numurs | — | — |
| cs-000518 | abfertigen | Chovat se nevlídně | (1) izturēties nelaipni (2) apkalpot (3) aizsūtīt (4) nosūtīt | — | — |
| cs-000734 | das Make-up | Make-up | (1) grims | — | — |
| cs-000204 | der Schlussverkauf | Výprodej zboží na konci sezóny za snížené ceny | (1) preču izpārdošana sezonas beigās par pazeminātām cenām | — | — |
| cs-003667 | geräuschlos | Bez hluku | (1) bez trokšņa (2) klusām (3) klusi | — | — |
| cs-000978 | zugleich | Ve stejnou dobu | (1) vienlaikus | — | — |
| cs-002401 | dörren | Vysoušet | (1) žāvēt (2) kaltēt | — | — |
| cs-003551 | teils | Částečně | (1) daļēji | — | — |
| cs-001097 | das Herzflattern | Bušení srdce | (1) sirdsklauves | — | — |
| cs-002519 | der Autounfall | Dopravní nehoda | (1) avārija (2) satiksmes negadījums | — | — |
| cs-002117 | bange | Vyděšený | (1) nobijies | — | — |
| cs-001529 | das Selbstgefühl | Sebevědomí | (1) pašapziņa (2) pašapziņīgums | — | — |
| cs-005321 | der November | Listopad | (1) novembris | — | — |
| cs-000193 | sich beeilen | Pospíšit si | (1) pasteigties | — | — |
| cs-002213 | schroff | Drsný | (1) nelaipns (2) ass (3) skarbs (4) kraujš (5) stāvs | — | — |
| cs-002661 | verzweifelt | Plný zoufalství | (1) izmisuma pilns (2) izmisīgs (3) izmisies | — | — |
| cs-001056 | der Hackbraten | Pečeně z mletého masa | (1) maltas gaļas cepetis | — | — |
| cs-004717 | gemütlich | Příjemný | (1) ērts (2) patīkams (3) omulīgs | — | — |
| cs-001227 | die Sphäre | Oblast | (1) joma (2) sfēra | — | — |
| cs-001627 | chartern | Pronajmout si letadlo nebo loď na konkrétní cestu | (1) īrēt lidmašīnu vai kuģi noteiktam braucienam | — | — |
| cs-002163 | die Widerrede | Námitka | (1) iebildums | — | — |
| cs-001286 | die Rohkost | Syrové potraviny | (1) neapstrādāta pārtika | — | — |
| cs-004336 | rührselig | Sentimentální | (1) sentimentāls | — | — |
| cs-001877 | die Heimkehr | Do vlasti | (1) dzimtenē (2) atgriešanās mājās | — | — |
| cs-002181 | die Erzählung | Příběh | (1) stāsts | — | — |
| cs-000293 | die Anwendung | Použití | (1) pielietojums (2) lietošana | — | — |
| cs-001374 | heften | Připevnit | (1) piestiprināt | — | — |
| cs-000674 | der Wiederaufbau | Obnova | (1) rekonstrukcija (2) atjaunošana | — | — |
| cs-003271 | vorhanden | K dispozici | (1) pieejams | — | — |
| cs-000710 | vornehmen | Udělat | (1) kaut ko apņemties (2) ķerties (3) veikt (4) izdarīt | — | — |
| cs-002238 | der Karren | Kolečko | (1) ķerra | — | — |
| cs-002127 | der Ober | Číšník | (1) viesmīlis | — | — |
| cs-002462 | malen | Vybarvovat | (1) krāsot (2) gleznot | — | — |
| cs-004002 | adressieren | Oslovit | (1) adresēt | — | — |
| cs-001976 | der Jünger | Žák | (1) sekotājs (2) māceklis | Die zwölf Jünger folgten Jesus. | divpadsmit mācekļi sekoja Jēzum. |
| cs-004346 | die Rauchwaren | Kožešinové výrobky | (1) kažokādu izstrādājumi (2) kažokādas | — | — |
| cs-002808 | sich ausziehen | Svléknout se | (1) izģērbties | — | — |
| cs-005319 | noch | Ještě | (1) vēl | Ich bin noch zu Hause. | Es vēl esmu mājās. |
| cs-001643 | einstecken | Strčit | (1) iebāzt | — | — |
| cs-003402 | die Dohle | Covarner | (1) kovārnis | — | — |
| cs-001635 | bieten | Nabídnout | (1) sniegt (2) piedāvāt | Die Schule bietet viele Kurse. | Skola piedāvā daudz kursu. |
