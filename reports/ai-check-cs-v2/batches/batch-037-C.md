HOW-TO: šo versiju C saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-037.csv (versija A).
Gemini -> ai-gemini/batch-037.csv (versija B).
ChatGPT -> ai-chatgpt/batch-037.csv (versija C).
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
| cs-003201 | brauen | Vařit pivo | (1) darīt alu (2) brūvēt | — | — |
| cs-005429 | das Taxi | Taxi | (1) taksometrs | — | — |
| cs-002583 | sich entfalten | Uvolnit se | (1) attīstīties (2) izvērsties (3) atvērties (4) atraisīties | — | — |
| cs-004651 | zurückkehren | Vrátit se | (1) atgriezties | — | — |
| cs-003445 | die Einlage | Příloha dopisu | (1) pielikums vēstulei (2) iemaksa (3) noguldījums | — | — |
| cs-005438 | der Hilfsdienst | Relaxace | (1) palīdzības dienests | — | — |
| cs-001229 | das Eingemachte | Zavařenina | (1) konservēti augļi (2) ievārījums | — | — |
| cs-001341 | erteilen | Poskytnout | (1) sniegt | — | — |
| cs-000645 | parteilich | Strany | (1) partijas (2) partijisks | — | — |
| cs-001886 | der Eingriff | Intervence | (1) operācija (2) iejaukšanās | — | — |
| cs-001898 | die Steuereinnahmen | Daňové příjmy | (1) nodokļu ieņēmumi | — | — |
| cs-000309 | das Schließfach | Zamykatelná skříňka | (1) aizslēdzams nodalījums stacijas bagāžas glabātavā | — | — |
| cs-002954 | geschäftig | Aktivní | (1) darbīgs (2) rosīgs | — | — |
| cs-003049 | das Schaffen | Vytváření | (1) darbs (2) darbība (3) radīšana (4) jaunrade (5) daiļrade | — | — |
| cs-002509 | die Höchstleistung | Největší síla | (1) rekords (2) augstākais sasniegums (3) vislielākā jauda | — | — |
| cs-005437 | eindringlich | Souhlasit | (1) neatlaidīgs (2) pārliecinošs | — | — |
| cs-003087 | der Lohnabbau | Snížení mezd | (1) darba algas pazeminājums | — | — |
| cs-002063 | beleibt | Plný | (1) pilnīgs (2) tukls (3) brangs | — | — |
| cs-002249 | die Ausbildungsbeihilfe | Příspěvek na odbornou přípravu | (1) mācību pabalsts | — | — |
| cs-002731 | im | V | (1) kur? (2) iekšā (-ā) | Ich bin im Park. | es esmu parkā. |
| cs-003725 | eifrig | Pilný | (1) uzcītīgs (2) dedzīgs (3) centīgs (4) cītīgs | — | — |
| cs-002086 | das Wesen | Příroda | (1) būtība (2) raksturs (3) būtne (4) radījums | — | — |
| cs-004357 | der Gelegenheitsarbeiter | Příležitostný dělník | (1) gadījuma darbu strādnieks | — | — |
| cs-004661 | der Wasserwerfer | Policejní vozidlo – vodní dělo | (1) policijas automašīna – ūdensmetējs | — | — |
| cs-000017 | sich beraten | Poradit se | (1) apspriesties | — | — |
| cs-000534 | emsig | Činorodý | (1) darbīgs (2) čakls (3) rosīgs | — | — |
| cs-004397 | sofern | Za předpokladu, že | (1) ja (2) ar noteikumu, ka | Ich komme, sofern ich Zeit habe. | es nāku, ja man ir laiks. |
| cs-000216 | darum | Proto | (1) tāpēc | Ich bin krank, darum bleibe ich zu Hause. | es esmu slims, tāpēc palieku mājās. |
| cs-000516 | die Aufklärung | Vyjasnění | (1) noskaidrošana | — | — |
| cs-005435 | belagern | Pozdravit | (1) aplenkt (2) ielenkt | — | — |
| cs-003186 | sich senken | Klesat | (1) kristies | — | — |
| cs-005430 | der Tee | Čaj | (1) tēja | — | — |
| cs-001405 | das Gelöbnis | Slavnostní slib | (1) svinīgs solījums | — | — |
| cs-002242 | unterbreiten | Předložit | (1) iesniegt (2) paskaidrot | — | — |
| cs-002189 | einziehen | Nastěhovat se | (1) ievākties | Wir ziehen morgen in die neue Wohnung ein. | mēs rīt ievācamies jaunajā dzīvoklī. |
| cs-005432 | telefonieren | Telefonovat | (1) zvanīt pa tālruni | — | — |
| cs-002714 | der Niederschlag | Srážky | (1) nokrišņi (2) nogulsnes | — | — |
| cs-003255 | die Dürre | Suchost | (1) sausums | — | — |
| cs-000227 | eingeschrieben | Zapsaný | (1) reģistrēts (2) ierakstīts | — | — |
| cs-003528 | das Ehepaar | Manželský pár | (1) laulāts pāris | — | — |
| cs-001974 | die Schau | Výstava | (1) izstāde | — | — |
| cs-003861 | bewerben, sich | Ucházet se | (1) censties (2) tiekties (3) pretendēt (4) kandidēt | — | — |
| cs-005431 | das Telefon | Telefon | (1) telefons | — | — |
| cs-001089 | der Bundesdeutsche | Občan SRN | (1) VFR pilsonis vai pilsone | — | — |
| cs-003332 | abschlagen | Useknout | (1) atvairīt (2) noraidīt (3) nocirst (4) atsist | — | — |
| cs-000727 | die Kaffeebohne | Kávové zrno | (1) kafijas pupiņa | — | — |
| cs-001090 | herunterkommen | Zchudnout | (1) panīkt (2) pagrimt (3) nonākt lejā (4) nonīkt | — | — |
| cs-004101 | das Mobbing | Psychoteror | (1) psihoterors | — | — |
| cs-005436 | holen | Vyzvednout | (1) atnest | Ich hole die Kinder von der Schule ab. | es paņemu bērnus no skolas. |
| cs-001950 | erregen | Vyvolat | (1) radīt (2) izraisīt (3) modināt (4) uztraukt (5) satraukt | — | — |
| cs-000998 | geraten | Podařit se | (1) padoties (2) izdoties (3) atsisties (4) nonākt (5) nokļūt | — | — |
| cs-002831 | rachgierig | Touha po pomstě | (1) atriebības kārs | — | — |
| cs-003103 | der Entwurf | Projekt | (1) projekts (2) uzmetums (3) skice | — | — |
| cs-003853 | beschäftigt | Zaneprázdněný | (1) aizņemts | — | — |
| cs-000148 | kuschelig | Útulný | (1) omulīgs | — | — |
| cs-002670 | also | Takže | (1) tātad | Es regnet, also bleibe ich zu Hause. | līst lietus, tāpēc es palieku mājās. |
| cs-002727 | erdrücken | Udusit tlakem | (1) nomākt (2) nospiest | — | — |
| cs-001414 | die Laufmasche | Z ponožky vypadl steh | (1) zeķei noiris valdziņš | — | — |
| cs-000958 | das Geschwätz | Klábosení | (1) pļāpas (2) pļāpāšana (3) melošana | — | — |
| cs-002010 | treiben | Obsadit | (1) nodarboties | Er treibt viel Sport. | viņš daudz nodarbojas ar sportu. |
| cs-001813 | abberufen | Propustit | (1) atbrīvot no amata (2) atsaukt | — | — |
| cs-001956 | menschenfeindlich | Nepřátelský k lidem | (1) naidīgs cilvēkiem | — | — |
| cs-004109 | der Stürmer | Fotbalový útočník | (1) sp. uzbrucējs | — | — |
| cs-003297 | sich betätigen | Účastnit se | (1) darboties (2) piedalīties | — | — |
| cs-002502 | schildern | Popsat | (1) aprakstīt | — | — |
| cs-002456 | die Hafengebühr | Přístavní povinnost | (1) ostas nodeva | — | — |
| cs-000438 | herantreten | Přiblížit se | (1) pieiet | — | — |
| cs-002634 | die Gefäßerweiterung | Dilataci krevních cév | (1) asinsvadu paplašināšanās | — | — |
| cs-003179 | der Rain | Hranice pole | (1) eža | — | — |
| cs-002232 | das Vergehen | Porušení | (1) pārkāpums | — | — |
| cs-001707 | sich verschließen | Bránit se něčemu | (1) norobežoties (2) noslēgties | — | — |
| cs-000464 | das Attest | Potvrzení lékaře | (1) ārsta izziņa | — | — |
| cs-001454 | die Sachlage | Situace | (1) situācija (2) stāvoklis (3) apstākļi | — | — |
| cs-003641 | vortragen | Hrát | (1) deklamēt (2) atskaņot (3) lasīt lekciju (4) izpildīt | — | — |
| cs-003248 | der Overall | Pracovní kombinéza | (1) darba kombinezons | — | — |
| cs-002303 | freilassen | Propustit | (1) atbrīvot | — | — |
| cs-000524 | das Informationsdefizit | Informační deficit | (1) informācijas deficīts | — | — |
| cs-001166 | der Baumstamm | Kmen stromu | (1) koka stumbrs | — | — |
| cs-005433 | die Beihilfe | Obránce | (1) valsts pabalsts (2) piemaksa | — | — |
| cs-004279 | der Schwarze | Člověk s černou barvou pleti | (1) cilvēks ar melnu ādas krāsu | — | — |
| cs-002950 | unvermeidlich | Neodvratný | (1) nenovēršams (2) neizbēgams | — | — |
| cs-001477 | intakt | Nepoškozený | (1) darbojošs | — | — |
| cs-002118 | geschwind | Hbitý | (1) veikls (2) ātrs (3) žigls | — | — |
| cs-000833 | die Feder | Peří | (1) spalva | — | — |
| cs-002550 | der Keller | Suterén | (1) pagrabs | — | — |
| cs-002859 | die Beschaffenheit | Povaha | (1) būtība (2) īpašība (3) daba | — | — |
| cs-002483 | nochmals | Znovu | (1) vēlreiz | — | — |
| cs-001041 | arrangieren | Organizovat | (1) organizēt | — | — |
| cs-002389 | die Zolldeklaration | Celní prohlášení | (1) muitas deklarācija | — | — |
| cs-005428 | die Tasse | Šálek | (1) tase | — | — |
| cs-002551 | verschlucken | Spolknout | (1) norīt | — | — |
| cs-002928 | die Vernunft | Zdravý rozum | (1) saprāts | — | — |
| cs-005427 | die Tasche | Taška | (1) soma | — | — |
| cs-003626 | wiederherstellen | Obnovit | (1) atjaunot (2) restaurēt | — | — |
| cs-002833 | die Mensa | Studentská jídelna | (1) studentu ēdnīca | — | — |
| cs-004005 | die Pilotsendung | Úvodní pořad série | (1) sērijas ievadraidījums | — | — |
| cs-001769 | der Haushaltsartikel | Předmět pro domácnost | (1) saimniecības prece | — | — |
| cs-005434 | der Pressesprecher | Tiskový zástupce | (1) preses sekretārs | — | — |
| cs-000907 | bedecken | Zakrýt | (1) apklāt | — | — |
| cs-000988 | die Blutarmut | Anémie | (1) mazasinība | — | — |
