HOW-TO: šo versiju C saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-003.csv (versija C).
Gemini -> ai-gemini/batch-003.csv (versija A).
ChatGPT -> ai-chatgpt/batch-003.csv (versija B).
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
| cs-004567 | veranlassen | Způsobit | (1) mudināt (2) izraisīt (3) ierosināt | — | — |
| cs-001721 | eintönig | Monotónní | (1) monotons (2) vienmuļš (3) vienmuļīgs | — | — |
| cs-003107 | zünden | Zapálit | (1) aizdedzināt | Er zündet die Kerze an. | viņš aizdedzina sveci. |
| cs-000925 | die Baugrube | Stavební jáma | (1) būvbedre | — | — |
| cs-004463 | die Heckklappe | Zadní dveře kufru auta | (1) automašīnas aizmugures bagāžnieka durvis | — | — |
| cs-001713 | angelegt | Vytvořený | (1) ieguldīts (2) izveidots | — | — |
| cs-002055 | lehnen | Opírat se | (1) piesliet | — | — |
| cs-005022 | die Antwort | Odpověď | (1) atbilde | — | — |
| cs-002019 | der Dachziegel | Střešní taška | (1) dakstiņš | — | — |
| cs-003221 | relevant | Významný | (1) nozīmīgs (2) svarīgs | — | — |
| cs-003258 | gnädig | Vážený | (1) žēlīgs (2) cienīts | — | — |
| cs-001275 | sich entschuldigen | Omluvit se | (1) atvainoties | — | — |
| cs-000365 | exklusiv | Aristokratický | (1) aristokrātisks (2) izmeklēts (3) smalks | — | — |
| cs-001186 | sprengen | [na]tryskat | (1) laistīt (2) [uz]spridzināt (3) apslacīt | — | — |
| cs-003714 | die Einnahme | Příjmy | (1) ieņēmumi | — | — |
| cs-000280 | der Maskenbildner | Profesionální maskér a kadeřník | (1) profesionāls aktieru grimētājs un frizieris | — | — |
| cs-001200 | die Vorstrafe | Předchozí trestní rejstřík | (1) iepriekšēja sodāmība | — | — |
| cs-000881 | der Ackerbau | Rostlinná výroba | (1) zemkopība | — | — |
| cs-003350 | gerinnen | Zhrudkovatět | (1) sakupt (2) sastingt (3) sasalt (4) sarecēt (5) saiet | — | — |
| cs-002504 | glaubhaft | Uvěřitelný | (1) pārliecinošs (2) ticams | — | — |
| cs-004514 | der Riegel | Západka | (1) aizbīdnis | — | — |
| cs-000605 | betreiben | Vést | (1) vadīt | — | — |
| cs-002736 | die Eröffnung | Odhalení | (1) atklātne (2) paziņojums (3) atklājums (4) atvēršana (5) atklāšana | — | — |
| cs-000393 | der Personalausweis | Průkaz totožnosti | (1) personas apliecība | — | — |
| cs-005027 | vorfristig | Vynikající | (1) pirmstermiņa (2) pirms termiņa | — | — |
| cs-005025 | die Tagesordnung | Denní tržby | (1) darba kārtība | — | — |
| cs-000716 | das Erzeugnis | Produkt | (1) produkts | — | — |
| cs-003416 | veranschlagen | Rozpočtovat | (1) sastādīt tāmi (2) aprēķināt (3) kalkulēt | — | — |
| cs-000539 | das Panzerglas | Pancéřové sklo | (1) bruņustikls | — | — |
| cs-000794 | der Dunst | Opar | (1) izgarojumi (2) tvans (3) migla (4) dūmaka (5) tvaiks (6) garaiņi | — | — |
| cs-002147 | ausweisen | Potvrdit | (1) apstiprināt (2) pierādīt (3) izraidīt (4) izsūtīt | — | — |
| cs-000239 | das Heiligtum | Svaté místo | (1) svētums (2) svētvieta | — | — |
| cs-003827 | der Speer | Kopí | (1) šķēps | — | — |
| cs-000009 | diensttauglich | Způsobilý pro vojenskou službu | (1) derīgs karadienestam | — | — |
| cs-000880 | eingehen | Zmenšit se | (1) ienākt (2) ierauties (3) sarauties (4) piekrist (5) saderēt (6) ieiet (7) pienākt | — | — |
| cs-002437 | das Spruchband | Plakát | (1) plakāts (2) transparents | — | — |
| cs-003763 | verdrießlich | Nepříjemný | (1) sapīcis (2) nepatīkams (3) īgns | — | — |
| cs-000623 | angesehen | Uznávaný | (1) cienījams | — | — |
| cs-000743 | sich verhören | Přeslechnout se | (1) pārklausīties | — | — |
| cs-002228 | schwelen | Řeřavý | (1) kvēlot | — | — |
| cs-001958 | dringen | Tlačit se | (1) iespiesties (2) ielauzties (3) prasīt (4) pieprasīt (5) spiesties (6) lauzties | — | — |
| cs-003780 | fachmännisch | Dovedný | (1) lietpratīgs | — | — |
| cs-003267 | missgönnen | Závidět | (1) nenovēlēt (2) skaust | — | — |
| cs-001524 | der Berufsberater | Pracovní poradce | (1) darba konsultants | — | — |
| cs-002719 | neuerdings | V poslední době | (1) no jauna (2) atkal (3) nesen (4) šais dienās | — | — |
| cs-001011 | die Brotkruste | Chlebová kůrka | (1) maizes garoza | — | — |
| cs-000892 | fleckig | Strakatý | (1) plankumains (2) lāsains (3) raibs (4) traipains (5) notraipīts | — | — |
| cs-004177 | frühzeitig | Včasný | (1) savlaicīgs | — | — |
| cs-000073 | der Kraftverkehr | Automobilový provoz | (1) autosatiksme | — | — |
| cs-001297 | vervielfältigen | Násobit | (1) pavairot | — | — |
| cs-000902 | die Beute | Trofej | (1) trofeja (2) laupījums (3) guvums | — | — |
| cs-003761 | zuströmen | Přitékat | (1) pieplūst | — | — |
| cs-005026 | sich umkleiden | Spoléhat na | (1) pārģērbties | — | — |
| cs-000784 | einführen | Představit | (1) ieviest | Die Schule führt neue Regeln ein. | skola ievieš jaunus noteikumus. |
| cs-003700 | die Genesung | Zotavení | (1) izveseļošanās (2) atveseļošanās | — | — |
| cs-002447 | die Umsicht | Rozvaha | (1) apdomība (2) piesardzība | — | — |
| cs-000297 | dingen | Souhlasit | (1) salīgt (2) līgt | — | — |
| cs-000226 | regelmäßig | Pravidelně | (1) regulāri | — | — |
| cs-003409 | deplaziert | Nevhodný | (1) nelaikā (2) nepiemērots (3) nevietā | — | — |
| cs-001870 | umgestalten | Transformovat | (1) pārveidot | — | — |
| cs-003976 | der Schieber | Spekulant | (1) spekulants (2) aizbīdnis (3) bulta | — | — |
| cs-000723 | ableiten | Odklonit | (1) atvasināt (2) novadīt (3) novirzīt | — | — |
| cs-001586 | die Studiengebühr | Školné na univerzitě | (1) mācību maksa augstskolā | — | — |
| cs-004469 | der Faulbaum | Krušina olšová | (1) ieva | — | — |
| cs-000018 | obwohl | I když | (1) lai gan (2) kaut gan | Obwohl es müde bin, gehe ich spazieren. | Kaut gan esmu noguris, es eju pastaigā. |
| cs-003418 | der Transvestit | Transvestita | (1) transvestīts | — | — |
| cs-000038 | die Kiste | Krabice | (1) kaste | — | — |
| cs-002503 | begutachten | Ohodnotit | (1) novērtēt (2) dot atsauksmi | — | — |
| cs-001191 | der Zuschlag | Prémie | (1) uzcenojums (2) piemaksa | Für den ICE muss man einen Zuschlag zahlen. | par ICE vilcienu jāmaksā piemaksa. |
| cs-005024 | der Anzug | Oblek | (1) uzvalks | — | — |
| cs-000877 | weglegen | Dát stranou | (1) nolikt malā | — | — |
| cs-002468 | das Besatzungsregime | Okupační režim | (1) okupācijas režīms | — | — |
| cs-005029 | schwinden | Podvádět | (1) izgaist (2) [sa]mazināties (3) [iz]zust | — | — |
| cs-002757 | starrköpfig | Umíněný | (1) stūrgalvīgs (2) ietiepīgs | — | — |
| cs-000175 | die Schutzfarbe | Ochranný nátěr | (1) aizsargkrāsa | — | — |
| cs-004633 | der Gewinnanteil | Podíl na zisku | (1) peļņas daļa | — | — |
| cs-003014 | die Unterlage | Dokumentace | (1) paliktnis (2) balsts (3) dati (4) dokumentācija (5) paliekamais (6) paklājs | — | — |
| cs-001677 | das Krankheitssymptom | Příznak onemocnění | (1) slimības simptoms | — | — |
| cs-001158 | die Fortbildungskurse | Kurzy profesního rozvoje | (1) kvalifikācijas paaugstināšanas kursi | — | — |
| cs-001815 | sich empfehlen | Být doporučeníhodný | (1) būt ieteicamam | — | — |
| cs-005021 | die Antenne | Anténa | (1) antena | — | — |
| cs-004038 | entsagen | Vzdát se | (1) atsacīties (2) atteikties | — | — |
| cs-002094 | kapitalistisch | Kapitalista | (1) kapitālistisks | — | — |
| cs-002144 | die Naturgewalten | Přírodní síly | (1) dabas spēki | — | — |
| cs-003631 | aufkochen | Přivést k varu | (1) uzvārīt | — | — |
| cs-005023 | antworten | Odpovědět | (1) atbildēt | — | — |
| cs-005020 | angenehm | Příjemný | (1) patīkams | — | — |
| cs-002224 | besessen | Omámený | (1) pārņemts (2) apsēsts (3) apmāts | — | — |
| cs-003021 | die Landzunge | Mys | (1) zemes mēle | — | — |
| cs-005028 | natürlich | Ale | (1) protams (2) dabisks | Kommst du mit? – Natürlich! | vai nāc līdzi? – protams! |
| cs-004483 | der Hochmut | Nadutost | (1) augstprātība (2) uzpūtība | — | — |
| cs-000736 | die Lieferung | Dodání | (1) piegāde | — | — |
| cs-005030 | der Luftfilter | Oční víčko | (1) gaisa filtrs | — | — |
| cs-003415 | der Behandlungsraum | Místnost pro ošetření | (1) ārsta kabinets | — | — |
| cs-003279 | die Erscheinung | Objevení se | (1) āriene (2) izskats (3) parādība (4) parādīšanās | — | — |
| cs-004464 | hinfallen | Spadnout | (1) nokrist | — | — |
| cs-002532 | latent | Skrytý | (1) nemanāms (2) slēpts | — | — |
| cs-001891 | das Gespött | Terč posměchu | (1) zobošanās | — | — |
| cs-000346 | der Funkspruch | Rádiová zpráva | (1) radiogramma | — | — |
| cs-003095 | die Pressekampagne | Tisková kampaň | (1) preses kampaņa | — | — |
