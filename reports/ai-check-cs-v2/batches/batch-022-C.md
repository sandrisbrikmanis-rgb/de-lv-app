HOW-TO: šo versiju C saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-022.csv (versija A).
Gemini -> ai-gemini/batch-022.csv (versija B).
ChatGPT -> ai-chatgpt/batch-022.csv (versija C).
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
| cs-001854 | der Unterhalt | Zásobovat | (1) apgādāšana (2) apgādība (3) apgāde | — | — |
| cs-001650 | entnehmen | Usoudit | (1) izņemt (2) secināt (3) ņemt (4) paņemt | — | — |
| cs-004334 | austragen | Vyhrát | (1) izcīnīt (2) iznēsāt (3) piegādāt | — | — |
| cs-004535 | dünken | Zdát se | (1) likties (2) šķist | — | — |
| cs-000181 | aussuchen | Vybrat si | (1) izvēlēties | — | — |
| cs-001012 | umständlich | Příliš široký | (1) apgrūtinošs (2) sarežģīts (3) ļoti sīks (4) pārāk plašs | — | — |
| cs-001817 | schwärmen | Nadchnout se | (1) sapņot (2) aizrauties (3) jūsmot | — | — |
| cs-000188 | der Düsenantrieb | Tryskový motor | (1) reaktīvais dzinējs | — | — |
| cs-002235 | unbrauchbar | Nepoužitelný | (1) nelietojams | — | — |
| cs-001897 | gelassen | Zdrženlivý | (1) savaldīgs (2) mierīgs | — | — |
| cs-001048 | einschließen | Zahrnout | (1) ieskaitīt | — | — |
| cs-002097 | fix | Rychle | (1) ātrs | — | — |
| cs-000300 | das Verkehrsdelikt | Porušení pravidel silničního provozu | (1) satiksmes noteikumu pārkāpums | — | — |
| cs-002569 | durchlaufen | Protéct | (1) iztecēt cauri (2) izskriet cauri | — | — |
| cs-003403 | die Ortschaft | Malá osada | (1) neliela apdzīvota vieta | — | — |
| cs-003564 | lärmen | Dělat hluk | (1) trokšņot | — | — |
| cs-001389 | stützen | Podporovat | (1) atbalstīt | — | — |
| cs-002092 | die Tracht | Národní kroj | (1) tautastērps | — | — |
| cs-005253 | der Gütertransport | Výměna zboží | (1) preču pārvadājumi | — | — |
| cs-004698 | die Gabe | Talent | (1) talants | — | — |
| cs-000343 | die Erbse | Hrášek | (1) zirnis | — | — |
| cs-001947 | nachher | Později | (1) vēlāk | — | — |
| cs-003643 | durchschlagen | Protlačit sítem | (1) izsisties cauri (2) izsist caurumu (3) izkāst (4) izlaist caur sietu | — | — |
| cs-001706 | das Remis | Remíza v šachu | (1) neizšķirts rezultāts šahā | — | — |
| cs-003218 | vertagen | Odložit | (1) nolikt (2) atlikt | — | — |
| cs-000091 | das Abendblatt | Večerní noviny | (1) vakara laikraksts | — | — |
| cs-005257 | das Schwimmbad | Potíže | (1) peldbaseins | — | — |
| cs-004071 | mildern | Mírnit bolest | (1) remdināt sāpes (2) mīkstināt spriedumu | — | — |
| cs-004287 | abstürzen | Spadnout | (1) nogāzties | — | — |
| cs-000519 | rosten | Rezivět | (1) rūsēt | — | — |
| cs-003039 | die Oberhand | Navrch | (1) virsroka | — | — |
| cs-004199 | der Kabelanschluss | Připojení kabelové televize | (1) televīzijas kabeļpieslēgums | — | — |
| cs-005248 | der Kuss | Polibek | (1) skūpsts | — | — |
| cs-001792 | knattern | Chrastit | (1) tarkšķēt | — | — |
| cs-004518 | das Deck | Paluba lodi | (1) kuģa klājs | — | — |
| cs-002103 | ermuntern | Povzbudit | (1) uzmundrināt | — | — |
| cs-004302 | ranzig | Másle | (1) taukiem (2) sviestu (3) sasmacis (4) rūgtens par krējumu | — | — |
| cs-003585 | überwältigen | Porazit | (1) pārvarēt (2) pārspēt | — | — |
| cs-002815 | gehörig | Slušný | (1) pienācīgs (2) piedienīgs (3) piederīgs (4) piederošs | — | — |
| cs-001983 | voran | V čele | (1) priekšgalā (2) pa priekšu (3) priekšā | — | — |
| cs-003359 | der Dom | Katedrála | (1) katedrāle (2) doms | — | — |
| cs-003257 | umschulen | Rekvalifikovat se | (1) cilvēkiem ar kādu amatu iemācīt citu amatu (2) pārskolot | — | — |
| cs-002076 | der Lebensgefährte | Životní partner | (1) dzīvesbiedrs nereģistrētā laulībā | — | — |
| cs-001356 | halt machen | Zastavit se | (1) apstāties | — | — |
| cs-002912 | der Heimwerker | Domácí řemeslník | (1) mājmeistars (2) mājamatnieks | — | — |
| cs-005255 | der Kostenanschlag | Náklady | (1) izdevumu tāme | — | — |
| cs-000976 | zu | At | (1) pie (2) uz | Ich gehe zum Arzt. | es eju pie ārsta. |
| cs-002111 | der Günstling | Chráněnec | (1) protežējamais (2) favorīts | — | — |
| cs-004308 | anschreiben | Zapsat | (1) pierakstīt | — | — |
| cs-001957 | hierdurch | S tímto | (1) ar šo (2) ar to | — | — |
| cs-005256 | der Erlass | Důvod | (1) dekrēts (2) atlaišana (3) rīkojums (4) pavēle | — | — |
| cs-000816 | der Verleih | Pronájem | (1) noma | — | — |
| cs-004309 | der Gasgeruch | Zápach plynu | (1) gāzes smaka | — | — |
| cs-002193 | sich abfinden | Smířit se s | (1) samierināties ar | — | — |
| cs-003677 | sich wenden | Otočit se | (1) pagriezties | — | — |
| cs-002236 | das Friedensangebot | Mírová nabídka | (1) miera piedāvājums | — | — |
| cs-003155 | sich gestalten | Formovat do | (1) veidoties par | — | — |
| cs-002930 | die Bescheinigung | Certifikát | (1) apliecinājums (2) apliecināšana (3) uzziņa (4) apliecība | — | — |
| cs-003614 | die Order | Úkol | (1) uzdevums (2) rīkojums (3) pavēle | — | — |
| cs-003606 | das Moment | Činitel | (1) izšķirošais apstāklis (2) faktors | — | — |
| cs-003696 | brillant | Vynikající | (1) lielisks (2) teicams | — | — |
| cs-001459 | der Preisträger | Držitel ceny | (1) laureāts (2) godalgas ieguvējs | — | — |
| cs-001696 | immens | Velmi velký | (1) ļoti liels | — | — |
| cs-000234 | das Belieben | Vůle | (1) vēlēšanās (2) patika (3) patikšana | — | — |
| cs-001064 | der Aufschluss | Informace | (1) informācija (2) izskaidrojums | — | — |
| cs-003063 | der Verschluss | Zavírání | (1) aizslēgs (2) aiztaisāmais | — | — |
| cs-004027 | bebauen | Stavět | (1) apstrādāt (2) apbūvēt | — | — |
| cs-005258 | vorzeitig | Podzemí- | (1) priekšlaicīgs (2) pāragrs | — | — |
| cs-001884 | der Steckbrief | Popis hledaného na policii | (1) meklējamās personas apraksts policijā | — | — |
| cs-001481 | bewährt | Spolehlivý | (1) uzticams (2) pārbaudīts (3) drošs | — | — |
| cs-003963 | das Luftbad | Vzdušná lázeň | (1) gaisa pelde | — | — |
| cs-003726 | die Makulatur | Odpadový papír | (1) makulatūra | — | — |
| cs-004484 | die Durchfuhr | Průvoz | (1) caurbraukšana (2) tranzīts | — | — |
| cs-004133 | pochen | Zaklepat | (1) klauvēt | Jemand pocht laut an die Tür. | kāds skaļi klauvē pie durvīm. |
| cs-000283 | verkünden | Oznámit | (1) pasludināt (2) paziņot | — | — |
| cs-001951 | die Reisespesen | Cestovní výdaje | (1) ceļojuma izdevumi | — | — |
| cs-003160 | die Kreation | Stvoření | (1) radīšana | — | — |
| cs-000671 | die Sorgepflicht | Povinnost péče | (1) pienākums rūpēties | — | — |
| cs-000003 | die Höhenangst | Strach z výšek | (1) bailes no augstuma | — | — |
| cs-005249 | der Laden | Obchod | (1) veikals | Ich gehe in den Laden. | es eju uz veikalu. |
| cs-005252 | langweilig | Nudný | (1) garlaicīgs | — | — |
| cs-005250 | lange | Dlouho | (1) ilgi | — | — |
| cs-002766 | die Deklaration | Prohlášení | (1) deklarācija | — | — |
| cs-000606 | die Wasserheilanstalt | Vodolečebný ústav | (1) ūdensdziedniecības iestāde | — | — |
| cs-003943 | das Haushaltsdefizit | Rozpočtový deficit | (1) budžeta deficīts | — | — |
| cs-000522 | dumpf | Tísnivý | (1) sasmacis (2) smacīgs (3) smags (4) nospiests (5) nomācošs (6) dobjš (7) apslāpēts | — | — |
| cs-004663 | bemerken | Všímat si | (1) pamanīt | Ich habe den Fehler sofort bemerkt. | es uzreiz pamanīju kļūdu. |
| cs-003236 | sich fortpflanzen | Množit se | (1) vairoties (2) izplatīties | — | — |
| cs-000909 | der Nervenarzt | Lékař nervových chorob | (1) ārsts nervu slimībās | — | — |
| cs-002057 | der Bogen | Kruh | (1) loks | Der Bogen ist aus Holz. | loks ir no koka. |
| cs-001596 | eigenwillig | Umíněný | (1) stūrgalvīgs (2) patvarīgs (3) patvaļīgs (4) ietiepīgs | — | — |
| cs-002552 | die Großmut | Velkorysost | (1) augstsirdība | — | — |
| cs-002143 | die Weintraube | Hroznové víno | (1) vīnoga | — | — |
| cs-005254 | der Plast | Plastový kelímek | (1) plastmasa | — | — |
| cs-004000 | gedenken | Vzpomínat | (1) atminēties (2) pieminēt (3) būt nodomājušam (4) atcerēties | — | — |
| cs-000570 | die Andeutung | Indicie | (1) norāde (2) mājiens | — | — |
| cs-005251 | langsam | Pomalý | (1) lēns | — | — |
| cs-005247 | der Kühlschrank | Lednička | (1) ledusskapis | — | — |
| cs-004319 | der Scheitel | Vršek hlavy | (1) celiņš (2) galvvidus (3) pauris | — | — |
| cs-003789 | die Glasfiber | Skleněné vlákno | (1) stikla šķiedra | — | — |
