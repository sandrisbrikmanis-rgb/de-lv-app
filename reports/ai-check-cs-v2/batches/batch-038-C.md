HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-038.csv (versija B).
Gemini -> ai-gemini/batch-038.csv (versija C).
ChatGPT -> ai-chatgpt/batch-038.csv (versija A).
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
| cs-005448 | kippen | Převrátit | (1) apgāzt | Das Glas kippt um. | glāze apgāžas. |
| cs-001427 | die Eberesche | Jeřáb ptačí | (1) pīlādzis (2) sērmūkslis | — | — |
| cs-005443 | die Tür | Dveře | (1) durvis | — | — |
| cs-000642 | bedenken | Zvážit | (1) apsvērt | — | — |
| cs-000951 | eingeschrieben | Registrovaný | (1) reģistrēts (2) ierakstīts | — | — |
| cs-001726 | die Versuchsanlage | Testovací zařízení | (1) izmēģinājumu iekārta | — | — |
| cs-004172 | merken | Všímat si | (1) pamanīt (2) iegaumēt | Ich merke, dass du müde bist. | es pamanu, ka tu esi noguris. |
| cs-000354 | die Auszeichnung | ocenění | (1) goda zīme (2) apbalvošana (3) apbalvojums | — | — |
| cs-001258 | sich erstrecken | Sahat | (1) izstiepties (2) izplesties (3) sniegties | — | — |
| cs-004305 | das Gemeineigentum | Společný majetek | (1) sabiedriskais īpašums | — | — |
| cs-005446 | rezeptfrei | Na předpis | (1) bez receptes | — | — |
| cs-003370 | herunterkommen | Sestoupit | (1) panīkt (2) pagrimt (3) nonākt lejā (4) nonīkt | — | — |
| cs-001883 | der Geländelauf | Přespolní běh | (1) kross | — | — |
| cs-003029 | beleibt | Statný | (1) pilnīgs (2) tukls (3) brangs | — | — |
| cs-002219 | das Geschwätz | Tláchání | (1) pļāpas (2) pļāpāšana (3) melošana | — | — |
| cs-002826 | sich setzen | Posadit se | (1) apsēsties | — | — |
| cs-001755 | der Erbanspruch | Dědická práva | (1) mantojuma tiesības | — | — |
| cs-001953 | inwieweit | Do jaké míry | (1) cik lielā mērā | — | — |
| cs-002001 | solcher | Takový | (1) tāds | — | — |
| cs-002312 | emsig | Pracovitý | (1) darbīgs (2) čakls (3) rosīgs | — | — |
| cs-002992 | die Kabinettskrise | Kabinetní krize | (1) kabineta krīze | — | — |
| cs-001961 | herausgeben | Vydat | (1) izdot | Der Verlag gibt ein neues Buch heraus. | izdevniecība izdod jaunu grāmatu. |
| cs-004676 | der Lottoschein | Los | (1) loterijas biļete | — | — |
| cs-000874 | sich blähen | Nadouvat se | (1) uzpūsties (2) piepūsties | — | — |
| cs-000639 | der Baumwipfel | Vrcholek stromu | (1) koka galotne | — | — |
| cs-002617 | darunter | Včetně | (1) tostarp | Viele Gäste kamen, darunter auch Kinder. | atnāca daudz viesu, tostarp arī bērni. |
| cs-002153 | die Haftung | Odpovědnost | (1) atbildība | — | — |
| cs-002227 | die Aufnahme | Záznam | (1) fotoattēls (2) uzņemšana (3) ieraksts | Die Aufnahme ist sehr scharf. | fotoattēls ir ļoti ass. |
| cs-002643 | notieren | Zapsat | (1) pierakstīt | — | — |
| cs-003739 | die Beschaffenheit | Kvalita | (1) būtība (2) īpašība (3) daba | — | — |
| cs-004367 | das Schloss | Hrad | (1) pils (2) slēdzene | Wir besuchen ein altes Schloss. | mēs apmeklējam vecu pili. |
| cs-004587 | wiederherstellen | Obnovit | (1) atjaunot (2) restaurēt | — | — |
| cs-002872 | kuscheln | Mazlit se | (1) paglausties | — | — |
| cs-003664 | das Vergehen | Přestupek | (1) pārkāpums | — | — |
| cs-005442 | tun | Dělat | (1) darīt | — | — |
| cs-005439 | die Tomate | Rajče | (1) tomāts | — | — |
| cs-002133 | sich verschließen | Uzavřít se | (1) norobežoties (2) noslēgties | — | — |
| cs-001810 | die Schiene | Kolej | (1) sliede | — | — |
| cs-003357 | gesellschaftlich | Sociální | (1) sabiedrisks (2) sabiedrības | — | — |
| cs-004293 | Rad fahren | Jezdit na kole | (1) braukt ar divriteni | — | — |
| cs-002172 | die Gefäßverengung | Zúžení krevních cév | (1) asinsvadu sašaurināšanās | — | — |
| cs-001014 | verschweigen | Neprozradit | (1) neizpaust (2) noklusēt | — | — |
| cs-003610 | ertragen | Tolerovat | (1) paciest (2) panest | — | — |
| cs-003353 | erregen | Způsobit | (1) radīt (2) izraisīt (3) modināt (4) uztraukt (5) satraukt | — | — |
| cs-000691 | die Steuererhöhung | Zvýšení daní | (1) nodokļu paaugstināšana | — | — |
| cs-004094 | geschwind | Hbitý | (1) veikls (2) ātrs (3) žigls | — | — |
| cs-005444 | überall | Všude | (1) visur | — | — |
| cs-000233 | der Eisgang | Pohyb ledových ker | (1) ledus iešana | — | — |
| cs-000132 | einäschern | Spálit v ohni | (1) sadedzināt ugunsgrēkā (2) kremēt | — | — |
| cs-001612 | das Ehrenamt | Čestná funkce | (1) goda amats | — | — |
| cs-005449 | aussetzen | Používat | (1) iebilst (2) stāties (3) izlikt (4) pakļaut | — | — |
| cs-003699 | die Kaffeekanne | Konvička na kávu | (1) kafijas kanna | — | — |
| cs-000813 | sich berufen | Odvolávat se na | (1) atsaukties uz | — | — |
| cs-005447 | die Gegenrede | Mluvení | (1) ieruna (2) iebildums | — | — |
| cs-000369 | darbieten | Poskytnout | (1) pasniegt (2) sniegt | — | — |
| cs-004393 | die Lawinengefahr | Lavinové nebezpečí | (1) lavīnas draudi | — | — |
| cs-003656 | die Sachlage | Okolnosti | (1) situācija (2) stāvoklis (3) apstākļi | — | — |
| cs-000737 | zurückkommen | Vrátit se | (1) atgriezties | — | — |
| cs-005441 | trinken | Pít | (1) dzert | — | — |
| cs-003446 | die Einlage | Příspěvek | (1) pielikums vēstulei (2) iemaksa (3) noguldījums | — | — |
| cs-000662 | die Pilotstudie | Úvodní studie výzkumné série | (1) pētījumu sērijas ievads | — | — |
| cs-000322 | vortrefflich | Vynikající | (1) lielisks (2) teicams | — | — |
| cs-001533 | geraten | Poddat se | (1) padoties (2) izdoties (3) atsisties (4) nonākt (5) nokļūt | — | — |
| cs-000852 | die Blutbank | Krevní rezervy | (1) asins rezerves | — | — |
| cs-001350 | beschützen | Chránit | (1) aizsargāt | — | — |
| cs-003647 | der Ketchup | Kečup | (1) kečups | — | — |
| cs-000818 | ergiebig | Bohatý | (1) bagāts (2) bagātīgs (3) ražīgs (4) auglīgs (5) ienesīgs | — | — |
| cs-001519 | unterlassen | Nedělat | (1) neizdarīt (2) kaut ko vairs nedarīt | — | — |
| cs-002234 | der Schwule | Homosexuál | (1) homoseksuālis | — | — |
| cs-001966 | das Aufsehen | Pozornost | (1) ievērība | — | — |
| cs-001112 | der Bundesstaat | Federace | (1) federatīva valsts (2) federācija | — | — |
| cs-003754 | das Wetterleuchten | Vzdálené blýskání | (1) tālais zibens | — | — |
| cs-001703 | bezwingen | Překonat | (1) savaldīt (2) pārvarēt (3) uzveikt | — | — |
| cs-005440 | die Treppe | Schody | (1) kāpnes | — | — |
| cs-003939 | auf dem Bahnhof | Na nádraží | (1) stacijā | — | — |
| cs-003554 | freimütig | Otevřený | (1) vaļsirdīgs (2) atklāts | — | — |
| cs-003097 | der Palmsonntag | Neděle před Velikonocemi | (1) svētdiena pirms Lieldienām (2) pūpolsvētdiena | — | — |
| cs-004019 | trennen | Oddělit | (1) atdalīt | Bitte trenne Papier und Plastik. | lūdzu, atdali papīru un plastmasu. |
| cs-004441 | schillern | Hrát různými barvami | (1) zaigot (2) laistīties dažādās krāsās | — | — |
| cs-002849 | abweisen | Odmítnout | (1) noraidīt (2) atraidīt | — | — |
| cs-001139 | das Jackett | Sako | (1) žakete | — | — |
| cs-002102 | alsogleich | Ihned | (1) uzreiz | — | — |
| cs-001309 | der Stützpunkt | Vojenská základna | (1) militāra bāze | — | — |
| cs-004656 | eigensinnig | Tvrdohlavý | (1) ietiepīgs (2) stūrgalvīgs | — | — |
| cs-005445 | das Abgeordnetenhaus | Touha po dobrodružství | (1) parlaments | — | — |
| cs-005450 | gebrauchen | Chatovat | (1) lietot | — | — |
| cs-000049 | die Zucht | Výchova | (1) audzēšana (2) audzināšana | — | — |
| cs-001828 | in flagranti | Dělat něco nezákonného | (1) darot kaut ko aizliegtu (2) pieķert | — | — |
| cs-003509 | das Moor | Rašeliniště | (1) purvs | — | — |
| cs-004598 | die Ferien | Prázdniny (škola) | (1) brīvdienas (skola) | In den Ferien fahren wir ans Meer. | Brīvdienās mēs braucam pie jūras. |
| cs-001628 | das Einverständnis | Konsensus | (1) piekrišana (2) saprašanās (3) vienprātība | — | — |
| cs-004043 | der Haushaltsausschuss | Rozpočtová komise | (1) budžeta komisija | — | — |
| cs-000214 | abblitzen | Odmítnout | (1) noraidīt | — | — |
| cs-004110 | der Ranzen | Školní aktovka | (1) skolēna mugursoma | — | — |
| cs-000722 | der Wegweiser | Směrovka | (1) ceļa rādītājs | — | — |
| cs-004245 | der Niederschlag | Usazenina | (1) nogulsnes (2) nokrišņi | — | — |
| cs-002467 | unverständlich | Nepochopitelný | (1) nesaprotams | — | — |
| cs-000656 | das Verfahren | Chování | (1) paņēmiens (2) metode (3) jur. process (4) lieta (5) rīcība (6) izturēšanās | — | — |
| cs-001863 | parteilich | Stranický | (1) partijas (2) partijisks | — | — |
| cs-003314 | die Militärbasis | Vojenská základna | (1) militārā bāze | — | — |
