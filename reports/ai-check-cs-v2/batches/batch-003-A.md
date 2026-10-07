HOW-TO: šo versiju A saņem Gemini.
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
| cs-004567 | veranlassen | Způsobit | (1) ierosināt (2) mudināt (3) izraisīt | — | — |
| cs-001721 | eintönig | Monotónní | (1) vienmuļīgs (2) monotons (3) vienmuļš | — | — |
| cs-003107 | zünden | Zapálit | (1) aizdedzināt | Er zündet die Kerze an. | viņš aizdedzina sveci. |
| cs-000925 | die Baugrube | Stavební jáma | (1) būvbedre | — | — |
| cs-004463 | die Heckklappe | Zadní dveře kufru auta | (1) automašīnas aizmugures bagāžnieka durvis | — | — |
| cs-001713 | angelegt | Vytvořený | (1) izveidots (2) ieguldīts | — | — |
| cs-002055 | lehnen | Opírat se | (1) piesliet | — | — |
| cs-005022 | die Antwort | Odpověď | (1) atbilde | — | — |
| cs-002019 | der Dachziegel | Střešní taška | (1) dakstiņš | — | — |
| cs-003221 | relevant | Významný | (1) nozīmīgs (2) svarīgs | — | — |
| cs-003258 | gnädig | Vážený | (1) žēlīgs (2) cienīts | — | — |
| cs-001275 | sich entschuldigen | Omluvit se | (1) atvainoties | — | — |
| cs-000365 | exklusiv | Aristokratický | (1) smalks (2) aristokrātisks (3) izmeklēts | — | — |
| cs-001186 | sprengen | [na]tryskat | (1) apslacīt (2) laistīt (3) [uz]spridzināt | — | — |
| cs-003714 | die Einnahme | Příjmy | (1) ieņēmumi | — | — |
| cs-000280 | der Maskenbildner | Profesionální maskér a kadeřník | (1) profesionāls aktieru grimētājs un frizieris | — | — |
| cs-001200 | die Vorstrafe | Předchozí trestní rejstřík | (1) iepriekšēja sodāmība | — | — |
| cs-000881 | der Ackerbau | Rostlinná výroba | (1) zemkopība | — | — |
| cs-003350 | gerinnen | Zhrudkovatět | (1) saiet (2) sakupt (3) sastingt (4) sasalt (5) sarecēt | — | — |
| cs-002504 | glaubhaft | Uvěřitelný | (1) ticams (2) pārliecinošs | — | — |
| cs-004514 | der Riegel | Západka | (1) aizbīdnis | — | — |
| cs-000605 | betreiben | Vést | (1) vadīt | — | — |
| cs-002736 | die Eröffnung | Odhalení | (1) atklāšana (2) atklātne (3) paziņojums (4) atklājums (5) atvēršana | — | — |
| cs-000393 | der Personalausweis | Průkaz totožnosti | (1) personas apliecība | — | — |
| cs-005027 | vorfristig | Vynikající | (1) pirmstermiņa (2) pirms termiņa | — | — |
| cs-005025 | die Tagesordnung | Denní tržby | (1) darba kārtība | — | — |
| cs-000716 | das Erzeugnis | Produkt | (1) produkts | — | — |
| cs-003416 | veranschlagen | Rozpočtovat | (1) kalkulēt (2) sastādīt tāmi (3) aprēķināt | — | — |
| cs-000539 | das Panzerglas | Pancéřové sklo | (1) bruņustikls | — | — |
| cs-000794 | der Dunst | Opar | (1) garaiņi (2) izgarojumi (3) tvans (4) migla (5) dūmaka (6) tvaiks | — | — |
| cs-002147 | ausweisen | Potvrdit | (1) izsūtīt (2) apstiprināt (3) pierādīt (4) izraidīt | — | — |
| cs-000239 | das Heiligtum | Svaté místo | (1) svētvieta (2) svētums | — | — |
| cs-003827 | der Speer | Kopí | (1) šķēps | — | — |
| cs-000009 | diensttauglich | Způsobilý pro vojenskou službu | (1) derīgs karadienestam | — | — |
| cs-000880 | eingehen | Zmenšit se | (1) pienākt (2) ienākt (3) ierauties (4) sarauties (5) piekrist (6) saderēt (7) ieiet | — | — |
| cs-002437 | das Spruchband | Plakát | (1) transparents (2) plakāts | — | — |
| cs-003763 | verdrießlich | Nepříjemný | (1) īgns (2) sapīcis (3) nepatīkams | — | — |
| cs-000623 | angesehen | Uznávaný | (1) cienījams | — | — |
| cs-000743 | sich verhören | Přeslechnout se | (1) pārklausīties | — | — |
| cs-002228 | schwelen | Řeřavý | (1) kvēlot | — | — |
| cs-001958 | dringen | Tlačit se | (1) lauzties (2) iespiesties (3) ielauzties (4) prasīt (5) pieprasīt (6) spiesties | — | — |
| cs-003780 | fachmännisch | Dovedný | (1) lietpratīgs | — | — |
| cs-003267 | missgönnen | Závidět | (1) nenovēlēt (2) skaust | — | — |
| cs-001524 | der Berufsberater | Pracovní poradce | (1) darba konsultants | — | — |
| cs-002719 | neuerdings | V poslední době | (1) šais dienās (2) no jauna (3) atkal (4) nesen | — | — |
| cs-001011 | die Brotkruste | Chlebová kůrka | (1) maizes garoza | — | — |
| cs-000892 | fleckig | Strakatý | (1) notraipīts (2) plankumains (3) lāsains (4) raibs (5) traipains | — | — |
| cs-004177 | frühzeitig | Včasný | (1) savlaicīgs | — | — |
| cs-000073 | der Kraftverkehr | Automobilový provoz | (1) autosatiksme | — | — |
| cs-001297 | vervielfältigen | Násobit | (1) pavairot | — | — |
| cs-000902 | die Beute | Trofej | (1) guvums (2) trofeja (3) laupījums | — | — |
| cs-003761 | zuströmen | Přitékat | (1) pieplūst | — | — |
| cs-005026 | sich umkleiden | Spoléhat na | (1) pārģērbties | — | — |
| cs-000784 | einführen | Představit | (1) ieviest | Die Schule führt neue Regeln ein. | skola ievieš jaunus noteikumus. |
| cs-003700 | die Genesung | Zotavení | (1) izveseļošanās (2) atveseļošanās | — | — |
| cs-002447 | die Umsicht | Rozvaha | (1) piesardzība (2) apdomība | — | — |
| cs-000297 | dingen | Souhlasit | (1) līgt (2) salīgt | — | — |
| cs-000226 | regelmäßig | Pravidelně | (1) regulāri | — | — |
| cs-003409 | deplaziert | Nevhodný | (1) nevietā (2) nelaikā (3) nepiemērots | — | — |
| cs-001870 | umgestalten | Transformovat | (1) pārveidot | — | — |
| cs-003976 | der Schieber | Spekulant | (1) bulta (2) spekulants (3) aizbīdnis | — | — |
| cs-000723 | ableiten | Odklonit | (1) novirzīt (2) atvasināt (3) novadīt | — | — |
| cs-001586 | die Studiengebühr | Školné na univerzitě | (1) mācību maksa augstskolā | — | — |
| cs-004469 | der Faulbaum | Krušina olšová | (1) ieva | — | — |
| cs-000018 | obwohl | I když | (1) kaut gan (2) lai gan | Obwohl es müde bin, gehe ich spazieren. | Kaut gan esmu noguris, es eju pastaigā. |
| cs-003418 | der Transvestit | Transvestita | (1) transvestīts | — | — |
| cs-000038 | die Kiste | Krabice | (1) kaste | — | — |
| cs-002503 | begutachten | Ohodnotit | (1) dot atsauksmi (2) novērtēt | — | — |
| cs-001191 | der Zuschlag | Prémie | (1) piemaksa (2) uzcenojums | Für den ICE muss man einen Zuschlag zahlen. | par ICE vilcienu jāmaksā piemaksa. |
| cs-005024 | der Anzug | Oblek | (1) uzvalks | — | — |
| cs-000877 | weglegen | Dát stranou | (1) nolikt malā | — | — |
| cs-002468 | das Besatzungsregime | Okupační režim | (1) okupācijas režīms | — | — |
| cs-005029 | schwinden | Podvádět | (1) [iz]zust (2) izgaist (3) [sa]mazināties | — | — |
| cs-002757 | starrköpfig | Umíněný | (1) stūrgalvīgs (2) ietiepīgs | — | — |
| cs-000175 | die Schutzfarbe | Ochranný nátěr | (1) aizsargkrāsa | — | — |
| cs-004633 | der Gewinnanteil | Podíl na zisku | (1) peļņas daļa | — | — |
| cs-003014 | die Unterlage | Dokumentace | (1) paklājs (2) paliktnis (3) balsts (4) dati (5) dokumentācija (6) paliekamais | — | — |
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
| cs-002224 | besessen | Omámený | (1) apmāts (2) pārņemts (3) apsēsts | — | — |
| cs-003021 | die Landzunge | Mys | (1) zemes mēle | — | — |
| cs-005028 | natürlich | Ale | (1) protams (2) dabisks | Kommst du mit? – Natürlich! | vai nāc līdzi? – protams! |
| cs-004483 | der Hochmut | Nadutost | (1) augstprātība (2) uzpūtība | — | — |
| cs-000736 | die Lieferung | Dodání | (1) piegāde | — | — |
| cs-005030 | der Luftfilter | Oční víčko | (1) gaisa filtrs | — | — |
| cs-003415 | der Behandlungsraum | Místnost pro ošetření | (1) ārsta kabinets | — | — |
| cs-003279 | die Erscheinung | Objevení se | (1) parādīšanās (2) āriene (3) izskats (4) parādība | — | — |
| cs-004464 | hinfallen | Spadnout | (1) nokrist | — | — |
| cs-002532 | latent | Skrytý | (1) slēpts (2) nemanāms | — | — |
| cs-001891 | das Gespött | Terč posměchu | (1) zobošanās | — | — |
| cs-000346 | der Funkspruch | Rádiová zpráva | (1) radiogramma | — | — |
| cs-003095 | die Pressekampagne | Tisková kampaň | (1) preses kampaņa | — | — |
