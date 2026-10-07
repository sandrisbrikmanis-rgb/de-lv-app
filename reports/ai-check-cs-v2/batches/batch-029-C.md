HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-029.csv (versija B).
Gemini -> ai-gemini/batch-029.csv (versija C).
ChatGPT -> ai-chatgpt/batch-029.csv (versija A).
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
| cs-002138 | die Körperkultur | Tělesná kultura | (1) fiziskā kultūra | — | — |
| cs-002987 | checken | Zkontrolovat | (1) pārbaudīt | — | — |
| cs-002387 | vorkommen | Stát se | (1) gadīties | So etwas kommt in der Praxis oft vor. | tādas lietas praksē bieži gadās. |
| cs-001970 | bersten | Popraskat | (1) sasprāgt (2) plīst (3) plaisāt (4) saplaisāt | — | — |
| cs-000703 | die Marmelade | Džem | (1) ievārījums | — | — |
| cs-000058 | schwinden | Slábnout | (1) izgaist (2) [sa]mazināties (3) [iz]zust | — | — |
| cs-000675 | folgendermaßen | Následovně | (1) šādi | — | — |
| cs-001929 | der Gefrierpunkt | Bod nula | (1) nullpunkts (2) sasalšanas punkts | — | — |
| cs-001994 | beistimmen | Podpořit | (1) atbalstīt (2) piebalsot | — | — |
| cs-002459 | neigen | Snažit se | (1) tiekties | Er neigt zu schnellen Entscheidungen. | viņam ir nosliece uz ātriem lēmumiem. |
| cs-002999 | sich konzentrieren | Soustředit se | (1) koncentrēties | — | — |
| cs-002275 | zugunsten, zu Gunsten | Ve prospěch | (1) par labu (2) labā | — | — |
| cs-000920 | die Bewässerung | Zavlažovací systém | (1) apūdeņošanas sistēma (2) apūdeņošana | — | — |
| cs-000938 | die Widerstandsbewegung | Hnutí odporu | (1) pretošanās kustība | — | — |
| cs-003451 | der Autoverleih | Půjčovna aut | (1) automašīnu noma | — | — |
| cs-000182 | nachvollziehen | Sledovat logiku | (1) sekot loģikai (2) saprast | — | — |
| cs-001030 | gemäß | V souladu s | (1) atbilstoši (2) pēc (3) saskaņā ar | — | — |
| cs-000776 | das Sandkorn | Zrnko písku | (1) smilšu grauds | — | — |
| cs-002585 | das HIV | HIV (virus lidské imunodeficience) | (1) HIV (cilvēka imūndeficīta vīruss) | — | — |
| cs-003309 | rüsten | Připravit | (1) sagatavoties | Wir rüsten uns für den Winter. | mēs gatavojamies ziemai. |
| cs-003181 | das Aktionsprogramm | Akční program | (1) pasākumu programma | — | — |
| cs-000255 | kostenlos | Zadarmo | (1) par velti | — | — |
| cs-002579 | das Dosenfleisch | Masové konzervy | (1) gaļas konservi | — | — |
| cs-003377 | sich beeilen | Pospíšit si | (1) steigties | — | — |
| cs-003639 | beredt | Hovorný | (1) runīgs | — | — |
| cs-002818 | die Grabung | Vykopávky | (1) izrakumi | — | — |
| cs-001932 | die Werkhalle | Výrobní hala | (1) cehs | — | — |
| cs-002406 | das Mark | Kostní dřeň | (1) kaulu smadzenes | — | — |
| cs-002778 | untereinander | Vzájemně | (1) savā starpā (2) savstarpēji | — | — |
| cs-002269 | anstreichen | Natřít | (1) pasvītrot (2) nokrāsot | — | — |
| cs-000943 | der Streich | Žertík | (1) joks | — | — |
| cs-002187 | entziehen | Uniknout | (1) izvairīties (2) atrauties (3) izbēgt (4) atņemt (5) atraut | — | — |
| cs-005338 | der Lebenserhaltungstrieb | Životní partner | (1) dzīvības dziņa | — | — |
| cs-005340 | nachdrücklich | Po kdy | (1) pārliecinošs (2) sparīgi (3) pārliecinoši (4) uzsvērts (5) sparīgs | — | — |
| cs-002361 | das Gemüt | Povaha | (1) domas (2) prāti (3) raksturs (4) daba | — | — |
| cs-002417 | der Einspruch | Výhrada | (1) protests (2) iebildums (3) ieruna | — | — |
| cs-002692 | der Leitfaden | Průvodce | (1) rokasgrāmata | — | — |
| cs-004705 | das Brandmal | Vypálená značka | (1) apdegums (2) apdeguma rēta | — | — |
| cs-002934 | mancher | Některý | (1) dažs | — | — |
| cs-003711 | die Gebrauchtwaren | Použité zboží | (1) lietotas mantas | — | — |
| cs-002732 | vollbringen | Splnit | (1) paveikt (2) izdarīt | — | — |
| cs-000268 | die Regenfront | Dešťové pásmo | (1) lietus josla | — | — |
| cs-003154 | die Pellkartoffel | Brambor vařený se slupkou | (1) ar mizu vārīts kartupelis | — | — |
| cs-000688 | der Karteizettel | Indexová karta | (1) kartotēkas kartīte | — | — |
| cs-005336 | das Pferd | Kůň | (1) zirgs | — | — |
| cs-002631 | der Waffenschein | Zbrojní průkaz | (1) ieroča atļauja | — | — |
| cs-004231 | das Vorrecht | Přednostní právo | (1) pirmtiesības (2) privilēģija | — | — |
| cs-000748 | einstellen | Upravit | (1) noregulēt | Ich stelle die Heizung auf 20 Grad ein. | es noregulēju apkuri uz 20 grādiem. |
| cs-002854 | der Dreck | Svinstvo | (1) dubļi (2) draņķis (3) mēsli (4) netīrumi | — | — |
| cs-000349 | bar | V hotovosti | (1) skaidrā naudā | — | — |
| cs-002968 | heftig | Silný | (1) spēcīgs | — | — |
| cs-001688 | vernachlässigen | Opomíjet | (1) nevērīgi izturēties (2) atstāt novārtā | — | — |
| cs-000924 | der Haftbefehl | Zatýkací rozkaz | (1) apcietināšanas orderis | — | — |
| cs-000093 | der Kader | Jádro | (1) kodols (2) sastāvs | Der Trainer wählt den Kader für das Spiel aus. | treneris izvēlas sastāvu spēlei. |
| cs-001839 | die Innenpolitik | Domácí politiku | (1) iekšpolitika | — | — |
| cs-005334 | die Pause | Přestávka | (1) pārtraukums | — | — |
| cs-002377 | erschlagen | Usmrtit úderem | (1) nosist | — | — |
| cs-000125 | sickern | Vsakovat se | (1) sūkties (2) pilēt | — | — |
| cs-005333 | der Park | Park | (1) parks | — | — |
| cs-004145 | die Heimkehr | Návrat domů | (1) atgriešanās mājās (2) dzimtenē | — | — |
| cs-003298 | das Gebäck | Sušenky | (1) cepumi (2) konditorejas izstrādājumi | — | — |
| cs-002060 | einfassen | Zarámovat | (1) iedarināt apkalumā (2) ietvert (3) ierāmēt | — | — |
| cs-001265 | infolge | Kvůli | (1) dēļ | — | — |
| cs-005341 | der Ersatzspieler | Hrášek | (1) rezervists (2) rezerves spēlētājs | — | — |
| cs-002426 | hinterziehen | Neplatit daně | (1) piesavināties naudu (2) nenomaksāt nodokļus | — | — |
| cs-002412 | die Exekutive | Výkonný orgán | (1) izpildinstitūcija | — | — |
| cs-002497 | der Psychoterror | Psychoteror | (1) psihoterors | — | — |
| cs-003086 | eitel | Nadutý | (1) iedomīgs (2) sekls (3) tukšs (4) ārišķīgs (5) godkārīgs (6) uzpūtīgs | — | — |
| cs-002937 | genießen | Užívat si | (1) baudīt | — | — |
| cs-004054 | adrett | Upravený | (1) sakopts | — | — |
| cs-001370 | die Dosenmilch | Kondenzované mléko v plechovkách | (1) iebiezinātais piens kārbās | — | — |
| cs-003211 | unentgeltlich | Za nic | (1) par velti (2) bez atlīdzības (3) bezmaksas | — | — |
| cs-002863 | die Spitzenleistung | Vynikající výkon | (1) tehn. maksimālā jauda (2) rekords (3) augstākais sasniegums | — | — |
| cs-003849 | geräuschlos | Neslyšně | (1) bez trokšņa (2) klusi (3) klusām | — | — |
| cs-004428 | e-mailen | Poslat e-mail | (1) nosūtīt e-pastu | — | — |
| cs-001305 | testen | Zkusit | (1) izmēģināt | — | — |
| cs-001837 | der Vorstand | Šéf | (1) vadība (2) priekšnieks (3) valde (4) priekšniecība | — | — |
| cs-005337 | übertragen | Obrousit | (1) pārraidīt pa radio (2) [pār]tulkot (3) pārnest (4) pārnēsāt lipīgās slimības | — | — |
| cs-003045 | der Schmuggel | Pašování | (1) kontrabanda | — | — |
| cs-000980 | abfertigen | Poslat pryč | (1) apkalpot (2) izturēties nelaipni (3) nosūtīt (4) aizsūtīt | — | — |
| cs-005342 | versorgen | Naučit se | (1) apgādāt | — | — |
| cs-001657 | bieten | Nabídnout | (1) piedāvāt | Die Schule bietet viele Kurse an. | skola piedāvā daudz kursu. |
| cs-002422 | einberufen | Povolat | (1) iesaukt karadienestā (2) sasaukt | — | — |
| cs-000718 | prominent | Významný | (1) ievērojams | — | — |
| cs-003059 | entweichen | Ustoupit | (1) atkāpties (2) izplūst (3) attālināties (4) izbēgt | — | — |
| cs-002013 | die Rutschbahn | Dětská skluzavka | (1) bērnu slidkalniņš | — | — |
| cs-003019 | die Eigenliebe | Egoismus | (1) patmīlība (2) egoisms | — | — |
| cs-004729 | der Obstbau | Ovocnářství | (1) augļkopība | — | — |
| cs-005331 | das Paar | Pár | (1) pāris | — | — |
| cs-002568 | die Unstimmigkeit | Neshody | (1) nesaskaņas | — | — |
| cs-002557 | sich hinreißen lassen | Nechat se unést | (1) aizrauties | — | — |
| cs-005332 | das Papier | Papír | (1) papīrs | — | — |
| cs-000889 | das Sorgenkind | Problémové dítě | (1) rūpju bērns | — | — |
| cs-003308 | der Briefumschlag | Dopisní obálka | (1) vēstuļu aploksne | — | — |
| cs-005335 | die Person | Osoba | (1) persona | — | — |
| cs-005339 | die Einbildung | Příprava | (1) fantāzija (2) iedomība (3) uzpūtība (4) iedoma (5) iztēle | — | — |
| cs-004301 | die Anzeige | Reklama | (1) sludinājums (2) paziņojums | — | — |
| cs-002366 | vornehmen | Pustit se do | (1) ķerties (2) kaut ko apņemties (3) izdarīt (4) veikt | — | — |
| cs-001399 | der Wiederaufbau | Rekonstrukce | (1) rekonstrukcija (2) atjaunošana | — | — |
| cs-001482 | sich bedienen | Obsloužit se | (1) apkalpoties | Bitte bedienen Sie sich. | lūdzu, ņemiet paši. |
