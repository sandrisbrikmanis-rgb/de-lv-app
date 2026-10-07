HOW-TO: šo versiju B saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-045.csv (versija C).
Gemini -> ai-gemini/batch-045.csv (versija A).
ChatGPT -> ai-chatgpt/batch-045.csv (versija B).
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
| cs-005533 | erhaben | Mám | (1) izcils (2) cildens (3) cēls (4) dižens (5) dižs (6) izliekts (7) reljefs | — | — |
| cs-005523 | anklopfen | Zaklepat | (1) pieklauvēt | — | — |
| cs-000995 | die Pollenallergie | Pylová alergie | (1) putekšņu alerģija | — | — |
| cs-002542 | der Facharbeiter | Kvalifikovaný pracovník | (1) kvalificēts strādnieks | — | — |
| cs-005527 | anstecken | Připnout | (1) piespraust | Sie steckt sich eine Brosche an. | viņa piesprauž sev brošu. |
| cs-003838 | der Regenschauer | Dešťová přeháňka | (1) lietusgāze | — | — |
| cs-005526 | annehmen | Přijmout | (1) pieņemt | — | — |
| cs-002494 | sich verlaufen | Zabloudit | (1) apmaldīties | — | — |
| cs-003199 | der Abstecher | Krátký výlet | (1) īss izbrauciens (2) novirzīšanās | — | — |
| cs-000649 | spazieren gehen | Jít na procházku | (1) iet pastaigāties | — | — |
| cs-000090 | die Stichhaltigkeit | Přesvědčivost | (1) pamatotība | — | — |
| cs-002008 | friedfertig | Snášenlivý | (1) saticīgs (2) miermīlīgs | — | — |
| cs-001789 | flimmern | Chvět se před očima | (1) ņirbēt (2) zvīļot (3) vizuļot (4) vizēt (5) mirgot | — | — |
| cs-002754 | die Klappe | Ventil | (1) vārsts (2) vārstulis | — | — |
| cs-005525 | anlegen | Přiložit | (1) pielikt | Bitte legen Sie den Sicherheitsgurt an. | lūdzu, piesprādzējiet drošības jostu. |
| cs-002075 | anfreunden | Spřátelit se | (1) sadraudzēties | — | — |
| cs-005524 | die Ankunft | Příchod | (1) ierašanās | — | — |
| cs-003025 | der Geschenkgutschein | Dárkový poukaz | (1) dāvanu karte | — | — |
| cs-001757 | der Heuschnupfen | Alergická rýma z pylu | (1) alerģiskas iesnas no putekšņiem | — | — |
| cs-004148 | das Nordlicht | Severní polární záře | (1) ziemeļblāzma | — | — |
| cs-000081 | schmerzstillend | Tišící bolest | (1) sāpes remdējošs | — | — |
| cs-004560 | erörtern | Rozebrat | (1) apspriest (2) iztirzāt | — | — |
| cs-002137 | die Einbahnstraße | Jednosměrná cesta | (1) vienvirziena ceļš | — | — |
| cs-000944 | die Geltung | Význam | (1) nozīmība (2) nozīme | — | — |
| cs-002942 | der Telefax | Fax | (1) fakss | — | — |
| cs-000094 | sich widersetzen | Vzpírat se | (1) stāties pretī (2) pretoties | — | — |
| cs-005531 | der Bundesdeutsche | Federace | (1) VFR pilsonis vai pilsone | — | — |
| cs-005534 | stoßen | Nahlédnout dovnitř | (1) grūst | Bitte stoß mich nicht. | lūdzu, negrūd mani. |
| cs-003091 | nähren | Krmit | (1) barot | — | — |
| cs-002205 | gleichen | Podobat se | (1) līdzināties | — | — |
| cs-002554 | die Hausdurchsuchung | Domovní prohlídka | (1) policijas kratīšana | — | — |
| cs-003147 | erleiden | Přestát | (1) tikt sakautam (2) pārciest (3) izciest (4) ciest | — | — |
| cs-002813 | das Segelflugzeug | Kluzák | (1) planieris | — | — |
| cs-003096 | das Geratewohl | Naslepo | (1) laba laime | — | — |
| cs-003900 | der Ersatzspieler | Záložní hráč | (1) rezerves spēlētājs (2) rezervists | — | — |
| cs-003360 | trügerisch | Zdánlivý | (1) māņu (2) mānīgs | — | — |
| cs-000246 | mulmig | Neklidný | (1) bailīgs (2) nedrošs (3) neomulīgs | — | — |
| cs-001211 | befragen | Dotazovat se | (1) iztaujāt | — | — |
| cs-003797 | der Klotz | Blok | (1) klucis | — | — |
| cs-001123 | die Borte | Ozdobný lem | (1) apmale | — | — |
| cs-005528 | das Antibiotikum | Antibiotikum | (1) antibiotika | — | — |
| cs-003081 | der Parteifunktionär | Stranický pracovník | (1) partijas darbinieks | — | — |
| cs-003964 | sich entgegensetzen | Vzepřít se | (1) pretoties | — | — |
| cs-002039 | zum | K | (1) pie (2) uz | Ich gehe zum Arzt. | es eju pie ārsta. |
| cs-003452 | einerlei | Stejně | (1) vienalga | Mir ist das einerlei. | man tas ir vienalga. |
| cs-003883 | veranschaulichen | Názorně vysvětlit | (1) uzskatāmi parādīt | — | — |
| cs-002853 | minder | Menší | (1) mazāk (2) mazāks | — | — |
| cs-001933 | die Volkszählung | Oficiální sčítání lidu | (1) oficiāla tautas skaitīšana | — | — |
| cs-005530 | fortwährend | Dále se rozvíjet | (1) nepārtraukts (2) pastāvīgs | — | — |
| cs-004607 | anderweitig | Jinak | (1) citādi (2) citur | — | — |
| cs-003174 | delikat | Jemný | (1) gards (2) delikāts | — | — |
| cs-003383 | die Autopanne | Porucha auta | (1) kļūme (2) auto bojājums | — | — |
| cs-002021 | die Flottenbasis | Námořní základna | (1) flotes bāze | — | — |
| cs-000127 | raffgierig | Chamtivý | (1) mantrausīgs | — | — |
| cs-002884 | der Silberschmied | Stříbrník | (1) sudrabkalis | — | — |
| cs-000629 | entfernen | Odstranit | (1) noņemt | Bitte entfernen Sie den Fleck sofort. | lūdzu, nekavējoties noņemiet traipu. |
| cs-001699 | gewissenlos | Nečestný | (1) negodīgs (2) bez sirdsapziņas | — | — |
| cs-004630 | die Belastbarkeit | Odolnost proti namáhání | (1) izturība pret slodzi (2) stresa noturība | — | — |
| cs-005532 | herunterkommen | Vyjít nahoru | (1) pagrimt (2) panīkt (3) nonīkt (4) nonākt lejā | — | — |
| cs-004619 | sich einbilden | Představit si | (1) iedomāties | — | — |
| cs-000804 | landen | Posaďte se | (1) nosēsties | Das Flugzeug landet pünktlich. | lidmašīna nosēžas laikā. |
| cs-001651 | die Entwertung | Devalvace | (1) devalvācija (2) vērtības pazemināšana | — | — |
| cs-002916 | sich verabschieden | Rozloučit se | (1) atvadīties | — | — |
| cs-004500 | unterweisen | Poučit | (1) pamācīt (2) ierādīt | — | — |
| cs-001744 | bestechlich | Koupitelný | (1) piekukuļojams (2) pērkams | — | — |
| cs-003884 | das Kettenglied | Řetězový článek | (1) ķēdes posms | — | — |
| cs-005529 | die Eintracht | Úvaha | (1) saderība (2) saticība (3) saskaņa (4) vienprātība | — | — |
| cs-000706 | der Magenkrampf | Žaludeční křeč | (1) kuņģa spazmas | — | — |
| cs-004290 | aufgeben | Vzdát se | (1) padoties | — | — |
| cs-003413 | das Einstellungsgespräch | Pracovní pohovor | (1) darba intervija | — | — |
| cs-000334 | der Chef | Manažer | (1) vadītājs (2) priekšnieks | — | — |
| cs-003226 | die Leistung | Úspěch | (1) sasniegums | Das war eine starke Leistung. | tas bija spēcīgs sniegums. |
| cs-000446 | verstauchen | Vymknout | (1) izmežģīt | — | — |
| cs-003633 | der Belag | Pokrytí | (1) segums | — | — |
| cs-002955 | wahlberechtigt | Ten, kdo má volební právo | (1) tāds, kam ir vēlēšanu tiesības | Alle wahlberechtigten Bürger können wählen. | visi vēlētāji ar vēlēšanu tiesībām var balsot. |
| cs-002584 | derselbe | Tentýž | (1) tas pats | — | — |
| cs-000774 | hierzu | Navíc | (1) turklāt | — | — |
| cs-001128 | beruhen | Zakládat se na | (1) pamatoties (2) dibināties | — | — |
| cs-001941 | die Strafanzeige | Zahájení trestního řízení proti někomu | (1) krimināllietas ierosināšana pret kādu | — | — |
| cs-002247 | der Eifer | Dychtivost | (1) dedzība (2) degsme (3) aizrautība (4) cītība (5) centība | — | — |
| cs-000156 | das Gesamtergebnis | Celkový výsledek | (1) gala rezultāts (2) gala iznākums | — | — |
| cs-004506 | das Barrenturnen | Cvičení na bradlech | (1) vingrošana uz līdztekām | — | — |
| cs-000131 | die Kartoffelerntemaschine | Kombajn na brambory | (1) kartupeļu novācamais kombains | — | — |
| cs-002601 | prägen | Vtisknout | (1) darināt (2) veidot (3) uzspiest (4) iespiest (5) kalt naudu | — | — |
| cs-001709 | abgrenzen | Distancovat se | (1) distancēties (2) norobežot | — | — |
| cs-001652 | zuteilen | Přiřadit | (1) piešķirt (2) iedalīt | — | — |
| cs-001321 | der Pieper | Pípák | (1) peidžeris | — | — |
| cs-001194 | das Ölembargo | Ropné embargo | (1) naftas embargo | — | — |
| cs-004670 | das Nachschlagewerk | Slovník | (1) enciklopēdija (2) vārdnīca (3) uzziņu literatūra | — | — |
| cs-001047 | die Durchführung | Realizace | (1) realizēšana (2) veikšana (3) izdarīšana (4) izpildīšana (5) izvadīšana cauri kaut kam | — | — |
| cs-003642 | der Wettlauf | Spěchat | (1) skriešanās (2) sp. skriešanās sacīkstes | — | — |
| cs-004586 | instand | Provozuschopný | (1) kārtībā | — | — |
| cs-000582 | einliefern | Přivézt | (1) atvest (2) ievest | — | — |
| cs-001366 | erlöschen | Pozbýt platnosti | (1) izbeigties (2) nebūt vairs spēkā (3) nodzist (4) izdzist | — | — |
| cs-001790 | dazwischenkommen | Přihodit se | (1) iejaukties (2) gadīties starpā (3) atgadīties | — | — |
| cs-004679 | die Schnauze | Tlama zvířete | (1) dzīvnieka purns | — | — |
| cs-002536 | rechtlos | Bez práv | (1) beztiesīgs | — | — |
| cs-004407 | jemals | Někdy | (1) jebkad | — | — |
| cs-000602 | die Mühe | Úsilí | (1) pūles | — | — |
| cs-002130 | die Ölpest | Znečištění vody a pobřeží ropou | (1) ūdens un piekrastes piesārņojums ar naftu | — | — |
