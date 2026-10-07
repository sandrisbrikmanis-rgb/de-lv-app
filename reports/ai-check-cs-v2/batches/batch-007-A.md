HOW-TO: šo versiju A saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-007.csv (versija A).
Gemini -> ai-gemini/batch-007.csv (versija B).
ChatGPT -> ai-chatgpt/batch-007.csv (versija C).
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
| cs-001127 | abfällig | Opovržlivý | (1) negatīvs (2) slikts (3) noraidošs (4) nelabvēlīgs | — | — |
| cs-002005 | weich gekocht | Uvařený naměkko | (1) mīksti vārīts | — | — |
| cs-004085 | der Krautmarkt | Zeleninový trh | (1) dārzeņu tirgus | — | — |
| cs-001590 | sich verrechnen | Špatně se spočítat | (1) pārrēķināties | — | — |
| cs-003212 | der Pfandschein | Zástavní lístek | (1) ķīlu zīme | — | — |
| cs-001989 | die Eisdiele | Zmrzlinárna | (1) saldējuma kafejnīca | — | — |
| cs-001050 | auf der Stelle | Ihned | (1) nekavējoties (2) uz vietas | — | — |
| cs-004337 | die Klimaanlage | Klimatizační jednotka | (1) gaisa kondicionēšanas iekārta | — | — |
| cs-000360 | äußerst | Velmi | (1) ārkārtīgi | — | — |
| cs-000160 | sich entzünden | Vzplanout | (1) iedegties (2) iekaist (3) aizdegties | — | — |
| cs-003397 | die Heizperiode | Topná sezóna | (1) apkures sezona | — | — |
| cs-001216 | der Erlass | Dekret | (1) pavēle (2) dekrēts (3) atlaišana (4) rīkojums | — | — |
| cs-005071 | der Bleistift | Tužka | (1) zīmulis | — | — |
| cs-004377 | ächten | Společensky ostrakizovat | (1) izstumt (2) sociāli atstumt | — | — |
| cs-004530 | aufmachen | Otevřít | (1) atvērt | — | — |
| cs-002806 | exquisit | Vytříbený | (1) izmeklēts (2) smalks | — | — |
| cs-003558 | fünfzigste | Padesátý | (1) piecdesmitais | — | — |
| cs-000826 | vererben | Zanechat | (1) atstāt (2) nodot mantojumā | — | — |
| cs-002686 | verfolgen | Následovat | (1) sekot | Die Polizei verfolgt den Täter. | policija vajā noziedznieku. |
| cs-005076 | ausspannen | Odstavit | (1) atņemt partneri (2) atpūsties (3) izjūgt | — | — |
| cs-002946 | das Standlicht | Obrysové světlo | (1) gabarītugunis automašīnām | — | — |
| cs-003532 | kennen lernen | Seznámit se | (1) iepazīties | — | — |
| cs-004182 | orientalisch | Z Orientu | (1) austrumniecisks (2) austrumu (3) orientāls | — | — |
| cs-001722 | das Hochzeitspaar | Novomanželé | (1) jaunlaulātie (2) kāzu pāris | — | — |
| cs-005078 | der Abstand | Make-up | (1) attālums (2) distance | — | — |
| cs-000217 | vollkommen | Úplný | (1) pilnīgi (2) pavisam (3) pilnīgs | — | — |
| cs-000545 | eingewurzelt | Zakořeněný | (1) iesakņojies | — | — |
| cs-002642 | bestärken | Posílit | (1) pastiprināt (2) uzmundrināt (3) stiprināt | — | — |
| cs-000189 | schwätzen | Klábosit | (1) pļāpāt | — | — |
| cs-005068 | das Blatt | List | (1) lapa | — | — |
| cs-004481 | der Dealer | Nelegální drogový dealer | (1) nelegāls narkotiku tirgotājs | — | — |
| cs-004436 | der Beutel | Taška | (1) maisiņš | — | — |
| cs-004470 | das Blasorchester | Dechový orchestr | (1) pūtēju orķestris | — | — |
| cs-001022 | begünstigen | Podporovat | (1) sekmēt (2) protežēt (3) atbalstīt (4) veicināt | — | — |
| cs-001911 | beibringen | Učit | (1) iemācīt | — | — |
| cs-000252 | sich erfüllen | Splnit se | (1) piepildīties | — | — |
| cs-004134 | gravierend | Významný | (1) nozīmīgs | — | — |
| cs-000247 | bewähren | Osvědčit se | (1) pierādīt sevi | — | — |
| cs-004127 | die Abbildung | Obraz | (1) attēls | — | — |
| cs-000336 | drängen | Strkat | (1) spiest (2) steidzināt (3) skubināt (4) mudināt (5) grūst | — | — |
| cs-003517 | der Mikrowellenherd | Mikrovlnná trouba | (1) mikroviļņu krāsns | — | — |
| cs-000072 | die Neuauflage | Přepracované vydání | (1) atkārtots (2) pārstrādāts izdevums | — | — |
| cs-001850 | der Holzklotz | Dřevěný blok | (1) koka klucis | — | — |
| cs-004627 | fahrlässig | Neopatrný | (1) neuzmanīgs (2) paviršs | — | — |
| cs-001644 | die Waffenruhe | Přestávka v boji | (1) cīņu pārtraukums | — | — |
| cs-003567 | der Ferienkurs | Studijní kurz o prázdninách | (1) mācību kurss brīvlaikā | — | — |
| cs-000430 | die Bewerbung | Soubor předložených dokumentů | (1) iesnieguma veidlapa (2) iesniegto dokumentu kopums (3) iesniegums | — | — |
| cs-004696 | mitgehen | Jít spolu | (1) iet līdzi | — | — |
| cs-000686 | die Prüfzeit | Doba zkoušky | (1) pārbaudes laiks | — | — |
| cs-003295 | eingehen | Srazit se | (1) pienākt (2) ienākt (3) ierauties (4) sarauties (5) piekrist (6) saderēt (7) ieiet | — | — |
| cs-002957 | der Spielplatz | Dětské hřiště | (1) spēļu laukums | — | — |
| cs-000370 | der Goldwäscher | Zlatá podložka | (1) zelta skalotājs | — | — |
| cs-000504 | reißen | Prasknutí | (1) plīst | Das Seil reißt. | virve plīst. |
| cs-004416 | glimmen | Zářit | (1) kvēlot (2) gruzdēt (3) gailēt | — | — |
| cs-001693 | die Schwebebahn | Zavěšení [železnice]. | (1) piekaru [dzelz]ceļš | — | — |
| cs-003905 | die Unvoreingenommenheit | Objektivita | (1) objektivitāte (2) neitralitāte | — | — |
| cs-003928 | die Färbung | Odstín | (1) krāsojums (2) nokrāsa | — | — |
| cs-005077 | belästigen | Pozdravit | (1) uzmākties (2) uzbāzties (3) apgrūtināt | — | — |
| cs-003980 | die Sucht | Závislost | (1) atkarība | — | — |
| cs-002332 | doppelsinnig | Dvojznačný | (1) divdomīgs | — | — |
| cs-000207 | entweder | Buď | (1) vai nu | — | — |
| cs-004504 | das Kuscheltier | Plyšová hračka | (1) mīkstā rotaļlieta | — | — |
| cs-004597 | umsiedeln | Násilně přemístit do jiného bydliště | (1) pārvietot uz citu dzīvesvietu piespiedu kārtā | — | — |
| cs-005072 | blond | Blond | (1) blonds | — | — |
| cs-004446 | leisten | Provést | (1) veikt | Sie leistet gute Arbeit. | viņa veic labu darbu. |
| cs-005070 | bleiben | Zůstat | (1) palikt | Ich bleibe zu Hause. | es palieku mājās. |
| cs-000536 | stehen bleiben | Zastavit se | (1) apstāties | — | — |
| cs-005073 | sich betätigen | Spoléhat na | (1) darboties (2) piedalīties | — | — |
| cs-003060 | der Beschützer | Strážce | (1) sargs (2) aizstāvis (3) sargātājs | — | — |
| cs-001362 | die Litfaßsäule | Plakátovací sloup | (1) afišu stabs | — | — |
| cs-002990 | rücksichtslos | Hrubý | (1) rupjš (2) nesaudzīgs (3) neuzmanīgs | — | — |
| cs-001319 | formell | Korektní | (1) pieklājīgs (2) formāls (3) stīvs (4) korekts | — | — |
| cs-001998 | starr | Nehybný | (1) sastindzis (2) stīvs (3) nekustīgs | — | — |
| cs-001507 | der Alkoholtest | Test na alkohol | (1) alkohola tests | — | — |
| cs-003127 | das Exil | Vyhoštění | (1) trimda (2) izsūtījums | — | — |
| cs-002016 | der Spruch | Aforismus | (1) aforisms (2) jur. spriedums (3) izteiciens | — | — |
| cs-000065 | lauschen | Odposlouchávat | (1) vērīgi klausīties (2) slepeni noklausīties | — | — |
| cs-005067 | bitten | Požádat | (1) lūgt | — | — |
| cs-003108 | ankleiden | Obléci | (1) apģērbt | — | — |
| cs-003027 | einwenden | Vznášet námitky | (1) iebilst (2) celt iebildumus | — | — |
| cs-004288 | der Ruhetag | Odpočinkový den | (1) atpūtas diena | — | — |
| cs-005075 | verheimlichen | Zastavit | (1) slēpt (2) turēt slepenībā | — | — |
| cs-002824 | die Marine | Válečné námořnictvo | (1) jūras kara flote (2) jūras ainava | — | — |
| cs-000900 | hitzig | Zbrklý | (1) dedzīgs (2) straujš (3) ātrs dusmās (4) karsts | — | — |
| cs-003200 | die Fassung | Obálka | (1) apvalums (2) formulējums (3) ietvars | — | — |
| cs-002809 | die Begrüßung | Pozdrav | (1) sveiciens (2) sasveicināšanās | — | — |
| cs-000993 | abrichten | Vycvičit zvíře | (1) dresēt dzīvnieku | — | — |
| cs-004577 | nichtig | Neplatný | (1) anulēts (2) niecīgs (3) nenozīmīgs (4) nederīgs | — | — |
| cs-003329 | die Börse | Burza cenných papírů | (1) birža | — | — |
| cs-005074 | das Gesamtergebnis | Mluvení | (1) gala iznākums (2) gala rezultāts | — | — |
| cs-000442 | die Genossin | Družka | (1) biedre (2) biedrene | — | — |
| cs-004269 | verwickeln | Zatahovat | (1) pārn. iepīt (2) iejaukt (3) samudžināt | — | — |
| cs-000661 | dunkeln | Stmívat se | (1) tumst (2) satumst | — | — |
| cs-002190 | das Pflichtfach | Povinný předmět | (1) obligātais priekšmets | — | — |
| cs-003135 | hintergehen | Zklamat | (1) piekrāpt (2) pievilt | — | — |
| cs-005069 | blau | Modrý | (1) zils | — | — |
| cs-001411 | der Trotz | Tvrdohlavost | (1) spīts (2) spītība | Er macht es aus Trotz. | viņš to dara spīta pēc. |
| cs-003783 | der Geliebte | Miláček | (1) mīļotais (2) mīļākais (3) mīļais | — | — |
| cs-001253 | das Gewerbe | Stálá práce v oblasti obchodu, řemesel nebo služeb | (1) arods (2) pastāvīgs darbs tirdzniecības vai amatniecības jomā vai pakalpojumu sniegšana (3) amats | — | — |
| cs-002923 | die Freilichtbühne | Divadlo pod širým nebem | (1) brīvdabas teātris | — | — |
