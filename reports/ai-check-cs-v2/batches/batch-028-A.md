HOW-TO: šo versiju A saņem Anthropic.
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
| cs-002027 | eitel | Povrchní | (1) uzpūtīgs (2) iedomīgs (3) sekls (4) tukšs (5) ārišķīgs (6) godkārīgs | — | — |
| cs-000637 | die Beule | Bou­le | (1) puns | — | — |
| cs-003191 | beispiellos | Nesrovnatelný | (1) neredzēts (2) tāds, kas nav ne ar ko salīdzināms (3) nebijis | — | — |
| cs-001284 | gemessen | Vyvážený | (1) nosvērts (2) apdomāts | — | — |
| cs-005324 | oben | Nahoře | (1) augšā | — | — |
| cs-004588 | die Gartenerdbeere | Zahradní jahoda | (1) dārza zemene | — | — |
| cs-000859 | sicher | Jistě | (1) drošs (2) noteikti | Ist das Wasser sicher? | vai ūdens ir drošs? |
| cs-001761 | unentgeltlich | Bez náhrady | (1) bezmaksas (2) par velti (3) bez atlīdzības | — | — |
| cs-003184 | folgend | Další | (1) šāds (2) nākamais | — | — |
| cs-000163 | das Gemüt | Myšlenky | (1) daba (2) domas (3) prāti (4) raksturs | — | — |
| cs-004331 | sich interessieren | Mít zájem | (1) interesēties | — | — |
| cs-000979 | der Leitartikel | Úvodní článek | (1) ievadraksts | — | — |
| cs-004165 | sich hingeben | Odevzdat se | (1) atdoties (2) nodoties | — | — |
| cs-001171 | das Rind | Dobytek | (1) liellops | — | — |
| cs-001536 | der Vorstand | Vedení | (1) priekšniecība (2) vadība (3) priekšnieks (4) valde | — | — |
| cs-002817 | die Kurve | Ohyb | (1) līkums | — | — |
| cs-000440 | der Strauß | Kytice květin | (1) puķu pušķis | — | — |
| cs-004613 | der Wacholder | Jalovec obecný | (1) paeglis (2) kadiķis | — | — |
| cs-004349 | bereden | Diskutovat | (1) pārrunāt | — | — |
| cs-004352 | beharren | Setrvat | (1) pastāvēt (2) palikt | — | — |
| cs-001302 | hinterziehen | Zpronevěřit peníze | (1) piesavināties naudu (2) nenomaksāt nodokļus | — | — |
| cs-003944 | die Peepshow | Erotický program, který je sledován samostatně prostřednictvím boxu | (1) erotiska programma, ko noskatās atsevišķi caur lodziņu | — | — |
| cs-003229 | das Abrüstungsabkommen | Odzbrojovací smlouva | (1) atbruņošanās līgums | — | — |
| cs-004298 | das Volumen | Kapacita | (1) apjoms (2) tilpums | — | — |
| cs-003880 | der Gefangene | Vězeň | (1) gūsteknis | — | — |
| cs-001523 | die Industrieanlage | Průmyslový provoz | (1) rūpniecības komplekss | — | — |
| cs-005326 | die Umlaufbahn | Náhlá změna | (1) orbīta | — | — |
| cs-002329 | eigentümlich | Charakteristický | (1) īpatnējs (2) raksturīgs | — | — |
| cs-001539 | entziehen | Vyhnout se | (1) atraut (2) izvairīties (3) atrauties (4) izbēgt (5) atņemt | — | — |
| cs-005327 | ausstopfen | Odstavit | (1) piepildīt (2) izbāzt (3) aizpildīt | — | — |
| cs-001880 | korrumpieren | Uplácet | (1) piekukuļot | — | — |
| cs-000876 | die Unannehmlichkeit | Potíže | (1) nepatikšanas (2) nepatīkams gadījums | — | — |
| cs-000057 | natürlich | Samozřejmě | (1) protams (2) dabisks | Kommst du mit? – Natürlich! | vai nāc līdzi? – protams! |
| cs-005328 | starr | Tvrdohlavý | (1) sastindzis (2) stīvs (3) nekustīgs | — | — |
| cs-005325 | die Computerwissenschaft | Počítačový jazyk | (1) datorzinātne (2) informātika | — | — |
| cs-002624 | ineinander | V sobě navzájem | (1) viens otrā | — | — |
| cs-005320 | normal | Normální | (1) normāls | — | — |
| cs-001236 | erscheinen | Se objeví | (1) parādīties | Er erschien plötzlich im Zimmer. | viņš pēkšņi parādījās istabā. |
| cs-000927 | einfassen | Vsadit do obruby | (1) ierāmēt (2) iedarināt apkalumā (3) ietvert | — | — |
| cs-000663 | der Einschnitt | Vryp | (1) griezums (2) grieziens (3) robs (4) iegriezums | — | — |
| cs-001560 | nachgehen | Sledovat | (1) sekot (2) noskaidrot | — | — |
| cs-000330 | der Prüfer | Auditor | (1) auditors | — | — |
| cs-003461 | vermutlich | Pravděpodobně | (1) laikam | — | — |
| cs-005322 | die Null | Nula | (1) nulle | — | — |
| cs-003657 | das Gebot | Požadavek | (1) prasība (2) bauslis (3) pavēle | — | — |
| cs-001165 | das Brandmal | Jizva po popálení | (1) apdegums (2) apdeguma rēta | — | — |
| cs-004075 | die Ehrung | Uctění | (1) godināšana (2) godināšanas ceremonija | — | — |
| cs-003217 | die Gottheit | Božstvo | (1) dievība | — | — |
| cs-002777 | probieren | Vyzkoušet | (1) izmēģināt (2) nogaršot | Probier mal die Suppe! | pagaršo zupu! |
| cs-002609 | unnütz | Marný | (1) nevajadzīgs (2) veltīgs (3) nederīgs | — | — |
| cs-003490 | die Marktwirtschaft | Tržní ekonomika | (1) tirgus ekonomika | — | — |
| cs-000137 | der Dreck | Hnůj | (1) netīrumi (2) dubļi (3) draņķis (4) mēsli | — | — |
| cs-001571 | entweichen | Vzdálit se | (1) izbēgt (2) atkāpties (3) izplūst (4) attālināties | — | — |
| cs-005330 | korrupt | Nahoru | (1) pērkams (2) piekukuļojams | — | — |
| cs-005329 | verrechnen | Zahrnout | (1) aprēķināt | — | — |
| cs-003960 | das Doping | Dopingový prostředek | (1) dopinga līdzeklis | — | — |
| cs-000967 | anstiften | Podněcovat | (1) pamudināt | — | — |
| cs-005323 | die Nummer | Číslo | (1) numurs | — | — |
| cs-000518 | abfertigen | Chovat se nevlídně | (1) aizsūtīt (2) apkalpot (3) izturēties nelaipni (4) nosūtīt | — | — |
| cs-000734 | das Make-up | Make-up | (1) grims | — | — |
| cs-000204 | der Schlussverkauf | Výprodej zboží na konci sezóny za snížené ceny | (1) preču izpārdošana sezonas beigās par pazeminātām cenām | — | — |
| cs-003667 | geräuschlos | Bez hluku | (1) klusām (2) bez trokšņa (3) klusi | — | — |
| cs-000978 | zugleich | Ve stejnou dobu | (1) vienlaikus | — | — |
| cs-002401 | dörren | Vysoušet | (1) kaltēt (2) žāvēt | — | — |
| cs-003551 | teils | Částečně | (1) daļēji | — | — |
| cs-001097 | das Herzflattern | Bušení srdce | (1) sirdsklauves | — | — |
| cs-002519 | der Autounfall | Dopravní nehoda | (1) satiksmes negadījums (2) avārija | — | — |
| cs-002117 | bange | Vyděšený | (1) nobijies | — | — |
| cs-001529 | das Selbstgefühl | Sebevědomí | (1) pašapziņīgums (2) pašapziņa | — | — |
| cs-005321 | der November | Listopad | (1) novembris | — | — |
| cs-000193 | sich beeilen | Pospíšit si | (1) pasteigties | — | — |
| cs-002213 | schroff | Drsný | (1) kraujš (2) skarbs (3) ass (4) nelaipns (5) stāvs | — | — |
| cs-002661 | verzweifelt | Plný zoufalství | (1) izmisīgs (2) izmisuma pilns (3) izmisies | — | — |
| cs-001056 | der Hackbraten | Pečeně z mletého masa | (1) maltas gaļas cepetis | — | — |
| cs-004717 | gemütlich | Příjemný | (1) patīkams (2) ērts (3) omulīgs | — | — |
| cs-001227 | die Sphäre | Oblast | (1) sfēra (2) joma | — | — |
| cs-001627 | chartern | Pronajmout si letadlo nebo loď na konkrétní cestu | (1) īrēt lidmašīnu vai kuģi noteiktam braucienam | — | — |
| cs-002163 | die Widerrede | Námitka | (1) iebildums | — | — |
| cs-001286 | die Rohkost | Syrové potraviny | (1) neapstrādāta pārtika | — | — |
| cs-004336 | rührselig | Sentimentální | (1) sentimentāls | — | — |
| cs-001877 | die Heimkehr | Do vlasti | (1) atgriešanās mājās (2) dzimtenē | — | — |
| cs-002181 | die Erzählung | Příběh | (1) stāsts | — | — |
| cs-000293 | die Anwendung | Použití | (1) lietošana (2) pielietojums | — | — |
| cs-001374 | heften | Připevnit | (1) piestiprināt | — | — |
| cs-000674 | der Wiederaufbau | Obnova | (1) atjaunošana (2) rekonstrukcija | — | — |
| cs-003271 | vorhanden | K dispozici | (1) pieejams | — | — |
| cs-000710 | vornehmen | Udělat | (1) veikt (2) ķerties (3) kaut ko apņemties (4) izdarīt | — | — |
| cs-002238 | der Karren | Kolečko | (1) ķerra | — | — |
| cs-002127 | der Ober | Číšník | (1) viesmīlis | — | — |
| cs-002462 | malen | Vybarvovat | (1) gleznot (2) krāsot | — | — |
| cs-004002 | adressieren | Oslovit | (1) adresēt | — | — |
| cs-001976 | der Jünger | Žák | (1) māceklis (2) sekotājs | Die zwölf Jünger folgten Jesus. | divpadsmit mācekļi sekoja Jēzum. |
| cs-004346 | die Rauchwaren | Kožešinové výrobky | (1) kažokādas (2) kažokādu izstrādājumi | — | — |
| cs-002808 | sich ausziehen | Svléknout se | (1) izģērbties | — | — |
| cs-005319 | noch | Ještě | (1) vēl | Ich bin noch zu Hause. | Es vēl esmu mājās. |
| cs-001643 | einstecken | Strčit | (1) iebāzt | — | — |
| cs-003402 | die Dohle | Covarner | (1) kovārnis | — | — |
| cs-001635 | bieten | Nabídnout | (1) piedāvāt (2) sniegt | Die Schule bietet viele Kurse. | Skola piedāvā daudz kursu. |
