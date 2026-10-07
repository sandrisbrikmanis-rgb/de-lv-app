HOW-TO: šo versiju A saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-039.csv (versija C).
Gemini -> ai-gemini/batch-039.csv (versija A).
ChatGPT -> ai-chatgpt/batch-039.csv (versija B).
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
| cs-002729 | der Bühnenbildner | Scénograf | (1) dekorators | — | — |
| cs-004632 | die Versuchsreihe | Série testů | (1) testu sērija | — | — |
| cs-004193 | abweisen | Odmítnout | (1) noraidīt (2) atraidīt | — | — |
| cs-002168 | die Auszeichnung | čestný odznak | (1) apbalvojums (2) goda zīme (3) apbalvošana | — | — |
| cs-003930 | die Blutkonserve | Konzervovaná krev | (1) konservētas asinis | — | — |
| cs-004037 | die Ferne | Vzdálenost | (1) tālums | — | — |
| cs-002701 | das Morddezernat | Oddělení vražd | (1) kriminālnodaļa | — | — |
| cs-001578 | der Wehrersatzdienst | Civilní služba místo vojenské služby | (1) civildienests karadienesta vietā | — | — |
| cs-002393 | darüber | O tom | (1) par to | Wir sprechen darüber. | mēs runājam par to. |
| cs-001733 | der Kinderfunk | Program pro děti | (1) raidījums bērniem | — | — |
| cs-000517 | das Jagdrevier | Lovecký areál | (1) medību teritorija | — | — |
| cs-000626 | der Segelflieger | Pilot kluzáku | (1) planierists | — | — |
| cs-000576 | gesetzlos | Bezprávný | (1) nelikumīgs | — | — |
| cs-001896 | die Gegend | Oblast | (1) apkārtne (2) apkaime (3) apvidus | — | — |
| cs-005461 | die Abart | Touha po dobrodružství | (1) novirze (2) aberrācija | — | — |
| cs-005458 | die Geltung | Mluvení | (1) nozīme (2) nozīmība | — | — |
| cs-004227 | freisprechen | Ospravedlnit | (1) attaisnot | — | — |
| cs-004280 | der Pannendienst | Pohotovostní služba pro automobily | (1) avārijas dienests automašīnām | — | — |
| cs-000840 | der Gemüsegarten | Zeleninová zahrada | (1) sakņu dārzs | — | — |
| cs-004325 | köstlich | Vynikající | (1) garšīgs | — | — |
| cs-004362 | die Halle | Sál | (1) halle | — | — |
| cs-002962 | der Erbe | Dědicem | (1) mantinieks | Er ist der Erbe seines Onkels. | viņš ir savas onkļa mantinieks. |
| cs-002271 | irreführen | Uvést v omyl | (1) maldināt | — | — |
| cs-001608 | sich versehen | Opatřit se | (1) aizmirst (2) aprīkot ar | — | — |
| cs-004658 | vorweisen | Předložit | (1) uzrādīt | — | — |
| cs-002255 | bezwingen | Zkrotit | (1) uzveikt (2) savaldīt (3) pārvarēt | — | — |
| cs-000768 | die Lawinenwarnung | Varování před lavinou | (1) brīdinājums par lavīnu | — | — |
| cs-003098 | der Sweater | Svetr | (1) svīteris | — | — |
| cs-005455 | vielleicht | Možná | (1) varbūt | — | — |
| cs-001548 | die Betäubung | Narkóza | (1) apdullums (2) narkoze (3) anestēzija (4) apdullināšana | — | — |
| cs-004424 | zurückprallen | Odrazit se | (1) atlēkt atpakaļ | — | — |
| cs-003637 | treten | Kopnout | (1) spert | — | — |
| cs-003432 | schlafwandeln | Chodit ze spaní | (1) būt mēnessērdzīgam | — | — |
| cs-003356 | ekelhaft | Nechutný | (1) pretīgs | — | — |
| cs-003721 | der Eisgang | Chod ledu | (1) ledus iešana | — | — |
| cs-000295 | die Schalldämmung | Zvuková izolace | (1) trokšņa slāpēšana | — | — |
| cs-003138 | geraten | Ocitnout se | (1) nokļūt (2) padoties (3) izdoties (4) atsisties (5) nonākt | — | — |
| cs-005462 | gemäß | Univerzální | (1) saskaņā ar (2) atbilstoši (3) pēc | — | — |
| cs-003057 | der Hausmüll | Domovní odpad | (1) sadzīves atkritumi | — | — |
| cs-001506 | das Wettrudern | Veslařský závod | (1) airēšanas sacīkstes | — | — |
| cs-005454 | viel | Mnoho | (1) daudz | — | — |
| cs-002819 | gesetzlich | Právní | (1) likumīgs | — | — |
| cs-000658 | die Echse | Ještěrka | (1) ķirzaka | — | — |
| cs-002975 | sich blähen | Vzdouvat se | (1) piepūsties (2) uzpūsties | — | — |
| cs-004677 | radieren | Vymazat gumou | (1) dzēst ar gumiju | — | — |
| cs-000015 | hervorrufen | Vytvořit | (1) izraisīt (2) radīt (3) modināt (4) izsaukt | — | — |
| cs-003338 | der Rasenmäher | Sekačka na trávu | (1) zāles pļāvējs | — | — |
| cs-001522 | das Schlusswort | Závěrečné slovo | (1) galavārds | — | — |
| cs-003753 | meutern | Vzbouřit se | (1) dumpoties (2) sacelties | — | — |
| cs-005451 | verkaufen | Prodat | (1) pārdot | — | — |
| cs-000585 | versetzen | Přeložit | (1) pārvietot (2) pārcelt | — | — |
| cs-002605 | die Steuererleichterung | Daňová úleva | (1) nodokļu atvieglojumi | — | — |
| cs-001086 | die Eintracht | Soulad | (1) saskaņa (2) saticība (3) saderība (4) vienprātība | — | — |
| cs-003596 | sich erstrecken | Táhnout se | (1) sniegties (2) izstiepties (3) izplesties | — | — |
| cs-002646 | emsig | Čilý | (1) rosīgs (2) darbīgs (3) čakls | — | — |
| cs-000159 | belästigen | Vnucovat se | (1) uzmākties (2) uzbāzties (3) apgrūtināt | — | — |
| cs-000062 | der Luftfilter | Vzduchový filtr | (1) gaisa filtrs | — | — |
| cs-000418 | das Weidenkätzchen | Kočičky | (1) pūpols | — | — |
| cs-003259 | sich beruhigen | Uklidni se | (1) nomierināties | Beruhig dich bitte. | lūdzu, nomierinies. |
| cs-003277 | das Einverständnis | Porozumění | (1) vienprātība (2) piekrišana (3) saprašanās | — | — |
| cs-000942 | pfänden | Sepsat majetek | (1) aprakstīt mantu (2) apķīlāt | — | — |
| cs-001013 | anbelangen | Týkat se | (1) attiekties uz | — | — |
| cs-003093 | die Kabinettskrise | Kabinetní krize | (1) kabineta krīze | — | — |
| cs-005460 | der Bodensatz | Nerostné suroviny | (1) padibenes (2) mieles (3) nogulsnes | — | — |
| cs-000206 | abbrechen | Zastavit | (1) pārtraukt | Wir mussten das Gespräch abbrechen. | mums nācās pārtraukt sarunu. |
| cs-001639 | darbieten | Předložit | (1) sniegt (2) pasniegt | — | — |
| cs-004046 | ertrinken | Utopit se | (1) noslīkt | — | — |
| cs-003923 | winden | Navíjet | (1) tīt (2) pīt (3) vīt | — | — |
| cs-001975 | das Augenleiden | Oční onemocnění | (1) acu slimība | — | — |
| cs-003270 | die Zusage | Souhlasná odpověď | (1) piekritoša atbilde | — | — |
| cs-005457 | der Streich | Strunný nástroj | (1) joks | — | — |
| cs-003447 | die Augenklinik | Oční klinika | (1) acu klīnika | — | — |
| cs-000790 | unweit | Poblíž | (1) netālu | — | — |
| cs-005459 | verabschieden | Rozvážný | (1) atbrīvot no darba (2) aizlaist pensijā | — | — |
| cs-000399 | nu | Teď | (1) acumirklī | — | — |
| cs-004727 | die Kamera | Fotoaparát | (1) kamera | — | — |
| cs-003074 | das Geschwätz | Lhaní | (1) melošana (2) pļāpas (3) pļāpāšana | — | — |
| cs-004222 | das Gemetzel | Hromadné zabíjení | (1) asinspirts (2) masveida nogalināšana | — | — |
| cs-005452 | verstehen | Pochopit | (1) saprast | Ich verstehe dich. | es tevi saprotu. |
| cs-000413 | bedrücken | Skličovat | (1) nomākt | — | — |
| cs-001004 | der Notstand | Výjimečný stav | (1) katastrofāls stāvoklis (2) izņēmuma stāvoklis | — | — |
| cs-002746 | die Schifffahrt | Lodní doprava | (1) kuģošana | — | — |
| cs-003142 | das Verfahren | Chování | (1) izturēšanās (2) paņēmiens (3) metode (4) jur. process (5) lieta (6) rīcība | — | — |
| cs-004635 | besehen | Podívat se na | (1) apskatīt | — | — |
| cs-003122 | sich sorgen | Dělat si starosti | (1) raizēties | Ich sorge mich um meine Mutter. | es raizējos par savu mammu. |
| cs-004387 | unterlassen | Přestat něco dělat | (1) kaut ko vairs nedarīt (2) neizdarīt | — | — |
| cs-002611 | eingrenzen | Omezovat | (1) ierobežot (2) norobežot | — | — |
| cs-000277 | eilig | Naléhavý | (1) steidzams | — | — |
| cs-002208 | das Eigentumsdelikt | Majetkový delikt | (1) īpašuma tiesību pārkāpums | — | — |
| cs-002574 | sollen | Měl by | (1) vajadzētu | Was soll ich machen? | ko man darīt? |
| cs-001197 | die Plage | Muka | (1) mokas | — | — |
| cs-003406 | ergiebig | Hojný | (1) ienesīgs (2) bagāts (3) bagātīgs (4) ražīgs (5) auglīgs | — | — |
| cs-001577 | ersticken | Utlačovat | (1) nosmacēt (2) apslāpēt (3) apspiest (4) nomākt (5) noslāpt (6) nosmakt (7) noslāpēt | — | — |
| cs-000340 | die Mine | Důl | (1) raktuve | — | — |
| cs-002357 | in flagranti | Chytit | (1) pieķert (2) darot kaut ko aizliegtu | — | — |
| cs-001848 | der Beamte | Státní úředník | (1) ierēdnis | — | — |
| cs-004329 | auf dem Boden | Na podlaze | (1) uz grīdas | — | — |
| cs-001037 | herausstellen | Uhasit | (1) izlikt ārā | — | — |
| cs-005453 | versuchen | Zkusit | (1) mēģināt | — | — |
| cs-005456 | vier | Čtyři | (1) četri | — | — |
