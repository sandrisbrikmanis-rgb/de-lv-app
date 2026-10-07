HOW-TO: šo versiju A saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-020.csv (versija B).
Gemini -> ai-gemini/batch-020.csv (versija C).
ChatGPT -> ai-chatgpt/batch-020.csv (versija A).
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
| cs-001918 | die Fürsorge | Opatrovnictví | (1) gādība (2) aizgādība | — | — |
| cs-001916 | die Wehrpflicht | Povinná vojenská služba | (1) karaklausība | — | — |
| cs-005224 | küssen | Líbat | (1) skūpstīt | — | — |
| cs-003405 | der Scheidungsprozess | Rozvodové řízení | (1) šķiršanās prāva | — | — |
| cs-000923 | die Sommerhitze | Letní horko | (1) vasaras svelme | — | — |
| cs-004321 | die Nichtbeachtung | Ignorování | (1) neievērošana (2) ignorēšana | — | — |
| cs-002738 | der Porno | Dílo obsahující pornografii | (1) pornogrāfiju saturošs darbs | — | — |
| cs-004236 | feststellen | Založit | (1) konstatēt | Der Arzt stellt eine Krankheit fest. | ārsts konstatē slimību. |
| cs-003937 | ausstatten | opatřit | (1) apgādāt (2) noformēt | — | — |
| cs-003007 | auszeichnen | vynikat | (1) piešķirt (2) izcelties (3) apbalvot | — | — |
| cs-002989 | das Militär | Vojska | (1) karaspēks (2) armija | — | — |
| cs-003426 | hageln | Padají kroupy | (1) birst krusa | — | — |
| cs-004074 | sich erweisen | Ukázat se jako | (1) izrādīties par | — | — |
| cs-005227 | der Honig | Med | (1) medus | — | — |
| cs-002788 | anschauen | Podívat se na | (1) apskatīt | — | — |
| cs-000624 | der Durchschnittsverdienst | Průměrný výdělek | (1) vidējā izpeļņa | — | — |
| cs-002711 | das Hafengelände | Přístavní oblast | (1) ostas teritorija | — | — |
| cs-002994 | der Possen | Fraška | (1) joku luga (2) rupjš joks (3) farss | — | — |
| cs-005226 | lachen | Smát se | (1) smieties | — | — |
| cs-004477 | gedeihen | Prosperovat | (1) izdoties (2) zelt (3) plaukt (4) labi padoties | — | — |
| cs-001841 | rivalisieren | Soutěžit | (1) konkurēt | — | — |
| cs-005230 | die Bitte | Podání | (1) lūgums | Ich habe eine Bitte. | Man ir lūgums. |
| cs-000313 | die Hypothek | Zástavní právo | (1) hipotēka | — | — |
| cs-005228 | die Hose | Kalhoty | (1) bikses | — | — |
| cs-004191 | umkreisen | Obklíčit | (1) aplenkt (2) lidināties (3) laisties (4) riņķot (5) ielenkt | — | — |
| cs-004475 | belichten | Vystavit | (1) izgaismot (2) eksponēt | — | — |
| cs-004341 | der Standpunkt | Názor | (1) viedoklis | — | — |
| cs-003322 | die Daune | Chmýří | (1) dūna | — | — |
| cs-003395 | begehren | Dychtit po | (1) pieprasīt (2) tīkot (3) iekārot (4) kārot (5) prasīt | — | — |
| cs-005231 | vorletzt | Předčasný | (1) priekšpēdējais | — | — |
| cs-002161 | zollfrei | Osvobozený od cla | (1) brīvs no muitas | — | — |
| cs-003806 | von klein auf | Od dětství | (1) kopš bērnības | — | — |
| cs-002399 | die Reisebeschreibung | Popis cesty | (1) ceļojuma apraksts | — | — |
| cs-000468 | übertragen | [Pře]kládat | (1) pārnēsāt lipīgās slimības (2) pārraidīt pa radio (3) [pār]tulkot (4) pārnest | — | — |
| cs-003896 | der Versager | Neúspěšný člověk | (1) zaudētājs (2) neveiksminieks | — | — |
| cs-000304 | das Lokal | Restaurace | (1) restorāns | — | — |
| cs-005225 | lächeln | Usmívat se | (1) smaidīt | — | — |
| cs-001576 | herunterstürzen | Spadnout dolů | (1) krist zemē (2) gāzties zemē | — | — |
| cs-000968 | das Reich | Stát | (1) impērija (2) valsts | — | — |
| cs-005234 | sich erinnern | Strčit | (1) atcerēties | — | — |
| cs-000311 | nachdem | Po kdy | (1) pēc tam kad | Nachdem ich gegessen hatte, ging ich schlafen. | pēc tam kad biju paēdis, es gāju gulēt. |
| cs-000254 | der Verdienst | Zásluhy | (1) nopelns | — | — |
| cs-003376 | entmutigen | Vzít odvahu | (1) atņemt drosmi | — | — |
| cs-003548 | durchhalten | Vydržet do konce | (1) izturēt līdz galam | — | — |
| cs-004734 | das Casting | Casting | (1) aktieru atlase | — | — |
| cs-000143 | austragen | Nést | (1) piegādāt (2) izcīnīt (3) iznēsāt | — | — |
| cs-003262 | dämmern | Stmívat se | (1) satumst (2) aust (3) svīst gaisma (4) krēslot | — | — |
| cs-002246 | das Unwetter | Silná bouře | (1) slikts laiks | — | — |
| cs-005233 | die Unterlage | Příloha dopisu | (1) paklājs (2) paliktnis (3) balsts (4) dati (5) dokumentācija (6) paliekamais | — | — |
| cs-003734 | das Frachtgeld | Přepravné | (1) maksa par kravas pārvadāšanu | — | — |
| cs-004034 | abstimmen | Koordinovat | (1) nobalsot (2) saskaņot | — | — |
| cs-005223 | kommen | Přijít | (1) nākt | — | — |
| cs-000208 | erlassen | Zprostit | (1) atlaist (2) atbrīvot (3) izdot | — | — |
| cs-002196 | umhören, sich | Vyptat se | (1) apklausīties | — | — |
| cs-002114 | verständigen | Informovat | (1) informēt (2) paziņot | — | — |
| cs-003131 | der Leader | Vůdce | (1) līderis | — | — |
| cs-000264 | die Order | Rozkaz | (1) pavēle (2) uzdevums (3) rīkojums | — | — |
| cs-001212 | der Defekt | Technický nedostatek | (1) tehnisks trūkums (2) kļūme | — | — |
| cs-003812 | sich genieren | Stydět se | (1) kaunēties | — | — |
| cs-003892 | der Futtertrog | Krmný žlab | (1) barības sile | — | — |
| cs-000969 | der Götze | Idol | (1) elks | — | — |
| cs-001259 | übertreten | Porušit zákon | (1) pārkāpt likumu (2) pārkāpt kaut kam pāri | — | — |
| cs-003693 | dürsten | Toužit | (1) būt izslāpušam (2) alkt (3) slāpt | — | — |
| cs-000899 | einschenken | Nalít | (1) ieliet | — | — |
| cs-004412 | im Stande | Schopný | (1) spējīgs | — | — |
| cs-004273 | übrig | Zbývající | (1) atlicis (2) pārējais | Es ist noch etwas Geld übrig. | vēl ir atlikusi nedaudz naudas. |
| cs-003500 | stur | Umíněný | (1) ietiepīgs (2) stūrgalvīgs | — | — |
| cs-002487 | der Junggeselle | Svobodný mládenec | (1) vecpuisis | — | — |
| cs-002533 | die Originalausgabe | Původní vydání | (1) oriģinālizdevums | — | — |
| cs-002243 | geistige Getränke | Alkoholické nápoje | (1) alkoholiskie dzērieni | — | — |
| cs-004015 | verkraften | Zachovat morální sílu překonat něco nepříjemného | (1) uzturēt morālu spēku, lai pārvarētu kaut ko nepatīkamu | — | — |
| cs-002807 | sich vorbereiten | Připravit se | (1) sagatavoties | — | — |
| cs-004218 | menschenscheu | Nesmělý | (1) nesabiedrisks (2) bikls | — | — |
| cs-001601 | die Besatzungsmacht | Okupační moc | (1) okupācijas vara | — | — |
| cs-001782 | die Dorfgemeinschaft | Vesnické společenství | (1) ciema iedzīvotāji | — | — |
| cs-002669 | die Krankenkasse | Zdravotní pojišťovna | (1) slimokase | — | — |
| cs-003829 | die Gewinnauszahlung | Výplata zisku | (1) loterijas laimesta izmaksa | — | — |
| cs-001406 | die Gewissheit | Jasnost | (1) drošība (2) noteiktība (3) skaidrība | — | — |
| cs-000811 | ranzig | Hořký o smetaně | (1) rūgtens par krējumu (2) taukiem (3) sviestu (4) sasmacis | — | — |
| cs-002921 | sensibel | Vnímavý | (1) jūtīgs (2) smalkjūtīgs | — | — |
| cs-005232 | der Anfangsbuchstabe | Zkoušení | (1) sākuma burts | — | — |
| cs-004284 | der Blutsturz | Náhlé krvácení z úst nebo nosu | (1) pēkšņa asiņošana no mutes vai deguna | — | — |
| cs-000387 | blättern | Prolistovat | (1) šķirstīt | — | — |
| cs-002216 | die Epoche | Éra | (1) laikmets | — | — |
| cs-003448 | die Maifeier | Oslava 1. máje | (1) pirmā Maija svētki | — | — |
| cs-003857 | der Hausherr | Domácí kutil | (1) mājastēvs (2) namatēvs | — | — |
| cs-004608 | lustig | Zábavný | (1) jautrs | — | — |
| cs-000219 | klären | Zjistit | (1) noskaidrot | — | — |
| cs-004666 | plaudern | Chatovat | (1) tērzēt | — | — |
| cs-002657 | die Aktenmappe | Složka na dokumenty | (1) dokumentu mape | — | — |
| cs-005229 | sich blamieren | Spoléhat na | (1) izblamēties | — | — |
| cs-001060 | durchschlagen | Probít se | (1) izlaist caur sietu (2) izsisties cauri (3) izsist caurumu (4) izkāst | — | — |
| cs-001881 | bewähren, sich | Obstát | (1) izrādīties par patiesu (2) attaisnoties | — | — |
| cs-000007 | der Nebelscheinwerfer | Mlhové světlo pro auta | (1) miglas lukturis automašīnām | — | — |
| cs-001488 | unbegründet | Neopodstatněný | (1) nedibināts (2) nepamatots | — | — |
| cs-004662 | der Auflauf | Zapečené jídlo | (1) sacepums | — | — |
| cs-000259 | schwerfällig | Těžký | (1) smagnējs (2) tūļīgs | — | — |
| cs-003776 | die Thermosflasche | Termoska | (1) termoss | — | — |
| cs-002997 | die Vorbildung | Příprava | (1) priekšzināšanas (2) sagatavotība | — | — |
| cs-002492 | gefällig | Úslužný | (1) pakalpīgs (2) iztapīgs (3) laipns (4) patīkams | — | — |
