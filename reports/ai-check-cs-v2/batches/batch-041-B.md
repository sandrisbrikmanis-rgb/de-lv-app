HOW-TO: šo versiju B saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-041.csv (versija B).
Gemini -> ai-gemini/batch-041.csv (versija C).
ChatGPT -> ai-chatgpt/batch-041.csv (versija A).
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
| cs-003399 | gewaltsam | Nuceně | (1) piespiedu kārtā (2) ar varu | — | — |
| cs-001856 | die Entbindung | Propuštění | (1) dzemdības (2) atsvabināšana (3) atbrīvošana | — | — |
| cs-004266 | das Wiederhören | Na slyšenou! | (1) uz sadzirdēšanos! | — | — |
| cs-000141 | die Morgengymnastik | Ranní cvičení | (1) rītarosme | — | — |
| cs-005476 | wenig | Málo | (1) maz | — | — |
| cs-001193 | das Gestell | Podvozek | (1) šasija (2) statnis (3) statīvs | — | — |
| cs-003594 | die Scheidewand | Dělicí stěna | (1) starpsiena | — | — |
| cs-003188 | der Begleiter | Společník | (1) pavadonis | — | — |
| cs-000797 | zuerkennen | Přidělit | (1) piešķirt (2) piespriest | — | — |
| cs-002124 | ragen | Vyčnívat | (1) slieties | — | — |
| cs-000693 | die Eheschließung | Uzavření manželství | (1) salaulāšanās (2) laulības | — | — |
| cs-000111 | provisorisch | Na čas | (1) uz laiku (2) pagaidu (3) provizorisks | — | — |
| cs-003860 | hereinlassen | Vpustit dovnitř | (1) ielaist | — | — |
| cs-000901 | der Panther | panter | (1) pantera | — | — |
| cs-000371 | bergen | Vyprostit | (1) novākt ražu (2) izglābt (3) glābt | — | — |
| cs-005477 | das Wetter | Počasí | (1) laiks (laikapstākļi) | Wie ist das Wetter heute? | kāds laiks šodien? |
| cs-005478 | wieder | Znovu | (1) atkal | — | — |
| cs-004240 | der Büroangestellte | Kancelářský pracovník | (1) biroja darbinieks | — | — |
| cs-004541 | darlegen | Vysvětlit | (1) izskaidrot (2) izklāstīt | — | — |
| cs-002621 | die Auswirkung | Vliv | (1) ietekme | — | — |
| cs-004169 | empfehlen | Doporučit | (1) ieteikt | — | — |
| cs-005486 | der Kassenpatient | Internetová adresa | (1) slimokasē apdrošināts pacients | — | — |
| cs-003746 | der Hautausschlag | Kožní vyrážka | (1) ādas izsitumi | — | — |
| cs-003384 | das Juwel | Drahokam | (1) dārgakmens | — | — |
| cs-004423 | die Handelsfirma | Obchodní společnost | (1) tirdzniecības firma | — | — |
| cs-001475 | anbremsen | Začít brzdit | (1) sākt bremzēt | — | — |
| cs-001358 | der Luftpirat | Vzdušný pirát | (1) gaisa pirāts | — | — |
| cs-000278 | die Steuersenkung | Snížení daní | (1) nodokļu pazemināšana | — | — |
| cs-001585 | der Genosse | Druh | (1) biedrs | — | — |
| cs-002834 | der Sekt | Šumivé víno | (1) dzirkstošais vīns | — | — |
| cs-004606 | das Schmerzmittel | Lék proti bolesti | (1) pretsāpju līdzeklis | — | — |
| cs-003056 | das Erachten | Názor | (1) ieskats (2) domas | — | — |
| cs-003169 | die Platte | Talíř | (1) plāksne | — | — |
| cs-000105 | das Autogeschäft | Prodejna aut | (1) automašīnu veikals | — | — |
| cs-000249 | schleunigst | Ihned | (1) cik iespējams ātri (2) nekavējoties | — | — |
| cs-003250 | der Raumflug | Meziplanetární kosmický let | (1) kosmiskais starpplanētu lidojums (2) lidojums kosmosā | — | — |
| cs-000048 | der Kinderwagen | Dětský kočárek | (1) bērnu ratiņi | — | — |
| cs-000750 | dehnbar | Natahovací | (1) staipīgs (2) staipāms (3) stiepjams | — | — |
| cs-003109 | nutzen | Používat | (1) izmantot | Ich nutze die Zeit zum Lernen. | es izmantoju laiku mācībām. |
| cs-000792 | die Festigkeit | Tvrdost | (1) cietība | — | — |
| cs-004576 | das Einkaufszentrum | Nákupní centrum | (1) tirdzniecības centrs | — | — |
| cs-003692 | affig | Namyšlený | (1) iedomīgs (2) uzkrītošs | — | — |
| cs-004429 | die Kapazität | Výrobní kapacita | (1) ietilpība (2) tilpums (3) jauda (4) ražotspēja | — | — |
| cs-000552 | sich einschmeicheln | Podlézat | (1) pielabināties (2) pieglai­moties | — | — |
| cs-001731 | sich bessern | Zlepšit se | (1) uzlaboties | — | — |
| cs-004270 | geraten | Dostat se | (1) atsisties (2) izdoties (3) padoties (4) nokļūt (5) nonākt | — | — |
| cs-002895 | einbegriffen | Včetně | (1) ieskaitot | — | — |
| cs-000965 | jawohl | Ano, jistě | (1) tieši tā | — | — |
| cs-003971 | fremdgehen | Stát se nevěrným | (1) kļūt neuzticīgam | — | — |
| cs-003620 | der Erdteil | Kontinent | (1) pasaules daļa | — | — |
| cs-000054 | sich umkleiden | Převléknout se | (1) pārģērbties | — | — |
| cs-005485 | abrichten | Znevažující | (1) dresēt dzīvnieku | — | — |
| cs-004480 | die Betäubung | Anestezie | (1) anestēzija (2) narkoze (3) apdullums (4) apdullināšana | — | — |
| cs-005483 | der Betracht | Soulad | (1) apsvēršana (2) vērā ņemšana | — | — |
| cs-003703 | der Ernteertrag | Úroda | (1) raža | — | — |
| cs-000542 | die Befangenheit | Rozpaky | (1) apmulsums (2) samulsums | — | — |
| cs-002444 | unterstellen | Přičítat bez podkladu | (1) piedēvēt bez pamata (2) pārmest | Man unterstellt mir schlechte Absichten. | Man pārmet man sliktu nodomu. |
| cs-004055 | zusammenbringen | Dát dohromady | (1) savest kopā | — | — |
| cs-000843 | treulos | Nespolehlivý | (1) neuzticams (2) neuzticīgs | — | — |
| cs-003666 | künftig | Od nynějška | (1) turpmāk | — | — |
| cs-002299 | sich fassen | Ovládnout se | (1) savaldīties (2) saņemties (3) sagrābt | — | — |
| cs-005484 | der Studienbewerber | Školné na univerzitě | (1) augstskolas reflektants | — | — |
| cs-000263 | die Kandidatenliste | Seznam kandidátů | (1) kandidātu saraksts | — | — |
| cs-001274 | die Schleuse | Plavební komora | (1) slūžas | — | — |
| cs-000806 | abdecken | Zakrýt | (1) pārklāt | Bitte deck den Kuchen ab. | lūdzu, pārklāj kūku. |
| cs-002578 | mild | Mírný | (1) maigs | — | — |
| cs-003563 | vorziehen | Dát přednost | (1) dot priekšroku | Ich ziehe Tee dem Kaffee vor. | es dodu priekšroku tējai, nevis kafijai. |
| cs-002481 | ersticken | Zadusit se | (1) nosmakt (2) noslāpt (3) nomākt (4) apspiest (5) apslāpēt (6) nosmacēt (7) noslāpēt | — | — |
| cs-000872 | der Tagebau | Otevřená těžba nerostů | (1) derīgo izrakteņu atklātā ieguve | — | — |
| cs-002044 | in Stand | V provozuschopném stavu | (1) kārtībā | — | — |
| cs-005480 | die Zigarette | Cigareta | (1) cigarete | — | — |
| cs-003615 | die Leberwurst | Játrová klobása | (1) aknu desa | — | — |
| cs-001465 | sowohl | Jak... tak | (1) gan... gan | — | — |
| cs-002625 | das Wettrennen | Závod | (1) skrējiens (2) sacīkstes | — | — |
| cs-003194 | einkassieren | Inkásovat | (1) iekasēt | — | — |
| cs-005481 | die Blutarmut | Množství alkoholu v krvi | (1) mazasinība | — | — |
| cs-001343 | der Panzerschrank | Železná skříň | (1) dzelzs skapis (2) seifs | — | — |
| cs-002748 | das Musikstück | Hudební skladba | (1) skaņdarbs | — | — |
| cs-004730 | das Verfahren | Technika | (1) lieta (2) jur. process (3) metode (4) paņēmiens (5) izturēšanās (6) rīcība | — | — |
| cs-000186 | die Geiselnahme | Braní rukojmí | (1) ķīlnieku saņemšana | — | — |
| cs-002785 | der Weltraum | Vesmírný prostor | (1) kosmoss | — | — |
| cs-003219 | besiegen | Porazit | (1) uzvarēt | — | — |
| cs-002899 | versiegeln | Utěsnit | (1) aizzīmogot | — | — |
| cs-005479 | der Wind | Vítr | (1) vējš | — | — |
| cs-003213 | getüpfelt | Tečkovaný | (1) punktots | — | — |
| cs-003612 | hervorrufen | Probudit | (1) modināt (2) radīt (3) izraisīt (4) izsaukt | — | — |
| cs-000271 | die Äußerung | Výpověď | (1) izpausme (2) izpaudums (3) izteikums | — | — |
| cs-002006 | erheblich | Důležitý | (1) svarīgs (2) ievērojams | — | — |
| cs-005482 | gelegen | Dát stranou | (1) nomaļš (2) parocīgs (3) izdevīgs (4) ērts | — | — |
| cs-003571 | entbinden | Propustit | (1) dzemdēt (2) atsvabināt (3) atbrīvot | — | — |
| cs-004715 | die Verwendung | Využití | (1) izlietošana | — | — |
| cs-003566 | erwachen | Probudit se | (1) pamosties | — | — |
| cs-002080 | auf einmal | Najednou | (1) piepeši (2) pēkšņi | — | — |
| cs-000532 | beendigen | Dokončit | (1) pabeigt | — | — |
| cs-000842 | unwohl | Necítit se dobře | (1) nevesels | — | — |
| cs-001000 | blödsinnig | Pošetilý | (1) stulbs (2) muļķīgs (3) plānprātīgs (4) vājprātīgs | — | — |
| cs-001662 | die Blutuntersuchung | Rozbor krve | (1) asinsanalīze | — | — |
| cs-001303 | das Gepäck | Zavazadla | (1) bagāža | — | — |
| cs-001812 | sich verwundern | Divit se něčemu | (1) brīnīties par | — | — |
| cs-005475 | die Welt | Svět | (1) pasaule | — | — |
