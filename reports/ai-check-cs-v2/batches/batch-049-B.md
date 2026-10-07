HOW-TO: šo versiju B saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-049.csv (versija A).
Gemini -> ai-gemini/batch-049.csv (versija B).
ChatGPT -> ai-chatgpt/batch-049.csv (versija C).
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
| cs-002220 | eintauchen | Potopit | (1) ienirt (2) iegremdēt (3) iemērcēt (4) iemērkt | — | — |
| cs-005571 | aufzeichnen | Zaznamenat | (1) ierakstīt | Wir zeichnen das Gespräch auf. | mēs ierakstām sarunu. |
| cs-005574 | ausgraben | Vykopat | (1) izrakt | — | — |
| cs-002695 | die Täfelung | Obklad | (1) apšuvums (2) sienas panelis | — | — |
| cs-001797 | nachträglich | Později | (1) piedevām (2) vēlāk (3) papildu (4) vēlāks | — | — |
| cs-001460 | jobben | Pracovat | (1) īslaicīgi strādāt | — | — |
| cs-000802 | angehoben | Zvýšený | (1) paaugstināts | — | — |
| cs-004668 | das Beichtgeheimnis | Zpovědní tajemství | (1) bikts noslēpums | — | — |
| cs-000292 | die Hausstaubmilbe | Prachový roztoč | (1) putekļu ērcīte | — | — |
| cs-002210 | der Korb | Košík | (1) grozs | — | — |
| cs-002384 | verborgen | Tajný | (1) slepens (2) apslēpts | — | — |
| cs-002878 | derartig | Tohoto druhu | (1) tamlīdzīgi (2) šāds (3) tāds | — | — |
| cs-003008 | der Bergbau | Těžební průmysl | (1) kalnrūpniecība | — | — |
| cs-000647 | spotten | Prořezávání zoubků | (1) zoboties (2) izsmiet | — | — |
| cs-000781 | die Einfuhrsperre | Blokáda dovozu | (1) importa blokāde | — | — |
| cs-003232 | einfältig | Naivní | (1) naivs (2) vientiesīgs | — | — |
| cs-004452 | die Vorschrift | Pravidlo | (1) noteikums | — | — |
| cs-001768 | die Postleitzahl | PSČ | (1) pasta indekss | — | — |
| cs-000461 | der Wächter | Strážný | (1) sargs | — | — |
| cs-005577 | die Geburtenrate | Generální oprava | (1) dzimstības līmenis | — | — |
| cs-002558 | der Aufmarsch | Pochod | (1) demonstrācija (2) gājiens | — | — |
| cs-004210 | der Titel | Jméno | (1) nosaukums | Der Titel des Buches ist kurz. | grāmatas nosaukums ir īss. |
| cs-000447 | die Kieme | Žábry | (1) žaunas | — | — |
| cs-000558 | zusammenlegen | Položit | (1) salikt [kopā] (2) likt | — | — |
| cs-000655 | der Pendelbus | Kyvadlový autobus | (1) piepilsētas autobuss | — | — |
| cs-002457 | sich entrüsten | Pobouřit se | (1) sadumpoties (2) sašust | — | — |
| cs-001336 | gelegen | Na samotě | (1) nomaļš (2) parocīgs (3) izdevīgs (4) ērts | — | — |
| cs-001846 | der Sonnenbrand | Spálení od slunce | (1) saules apdegums | — | — |
| cs-001987 | spurlos | Beze zprávy | (1) bez vēsts (2) bez pēdām | — | — |
| cs-000571 | die Bratkartoffeln | Opékané brambory | (1) cepti kartupeļi | — | — |
| cs-001617 | gierig | Dychtivý | (1) alkatīgs (2) kārīgs (3) kārs | — | — |
| cs-003301 | der Abschnitt | Fáze | (1) posms | Dieser Abschnitt ist schwer. | šis posms ir grūts. |
| cs-000331 | das Kollegbuch | Sešit na přednášky | (1) studenta atzīmju grāmatiņa | — | — |
| cs-003997 | laufen | Fungovat | (1) darboties (2) skriet | Er läuft sehr schnell. | viņš skrien ļoti ātri. |
| cs-005581 | versteigern | Rozvážný | (1) pārdot izsolē | — | — |
| cs-003425 | die Folge | Následky | (1) sekas | Das war die Folge des Unfalls. | tās bija negadījuma sekas. |
| cs-003121 | rege | Činný | (1) darbīgs (2) kustīgs (3) rosīgs (4) dzīvs | — | — |
| cs-004574 | die Gemäldesammlung | Sbírka obrazů | (1) gleznu kolekcija | — | — |
| cs-005572 | der Augenarzt | Oční lékař | (1) acu ārsts | — | — |
| cs-003796 | die Nahrung | Jídlo | (1) pārtika | — | — |
| cs-005575 | ausstrahlen | Vyzařovat | (1) izstarot | — | — |
| cs-000351 | missachten | Ignorovat | (1) neievērot | — | — |
| cs-003674 | umschließen | Zahrnout | (1) apņemt (2) aptvert (3) ieslēgt | — | — |
| cs-002656 | die Errungenschaft | Výdobytek | (1) guvums (2) ieguvums (3) sasniegums | — | — |
| cs-002030 | aufheitern | Zlepšit náladu | (1) uzlabot garastāvokli | — | — |
| cs-002199 | tönen | Dát odstín | (1) piešķirt nokrāsu (2) ietonēt (3) skanēt | — | — |
| cs-001451 | sich vergrößern | Zvětšit se | (1) palielināties | — | — |
| cs-003010 | versagen | Odmítnout | (1) izrādīties gļēvam un nevarīgam (2) atteikties kalpot (3) neklausīt (4) noraidīt (5) atteikt (6) liegt | — | — |
| cs-004092 | das Gesetzbuch | Sbírka zákonů | (1) likumu krājums (2) kodekss | — | — |
| cs-000837 | das Opernhaus | Operní dům | (1) opera | — | — |
| cs-004406 | glotzen | Šilhat | (1) blenzt | — | — |
| cs-003317 | die Besinnung | Vědomí | (1) apziņa (2) samaņa | — | — |
| cs-002716 | zwecklos | Marný | (1) veltīgs | — | — |
| cs-002875 | der Rekorder | Rekordér | (1) atskaņotājs | — | — |
| cs-002309 | das Eiweiß | Protein | (1) olbaltums | — | — |
| cs-002081 | das Geschöpf | Bytost | (1) būtne (2) radība (3) radījums | — | — |
| cs-000122 | fruchtlos | Neplodný | (1) neauglīgs | — | — |
| cs-000782 | die Einbildung | Představa | (1) uzpūtība (2) iedomība (3) fantāzija (4) iztēle (5) iedoma | — | — |
| cs-003017 | unüberlegt | Neuvážený | (1) vieglprātīgs (2) neapdomīgs | — | — |
| cs-000954 | diensthabend | Ve službě | (1) dežurējošs | — | — |
| cs-003672 | der Hinweis | Návod | (1) norādījums | Danke für den Hinweis. | paldies par norādījumu. |
| cs-003290 | die Liebesaffäre | Intimní spojení | (1) intīms sakars | — | — |
| cs-004702 | rechtswidrig | Ilegální | (1) nelikumīgi | — | — |
| cs-001540 | die Baskenmütze | Baret | (1) berete | — | — |
| cs-002434 | festgesetzt | Stanovený | (1) nolikts (2) nosacīts (3) noteikts | — | — |
| cs-002490 | hindurch | Přes | (1) cauri | — | — |
| cs-005582 | testen | Vyhlazovat | (1) izmēģināt | — | — |
| cs-003325 | das Setzei | Volské oko | (1) vēršacs | — | — |
| cs-004257 | der Umschwung | Zlom | (1) pagrieziens (2) apvērsums (3) pēkšņa pārmaiņa (4) lūzums (5) apgrieziens | — | — |
| cs-004338 | beteuern | Ujišťovat | (1) apliecināt | — | — |
| cs-003877 | der Marktpreis | Tržní cena | (1) tirgus cena | — | — |
| cs-004315 | die Schrankwand | Skříňová stěna | (1) liela sekcija pa visu sienu | — | — |
| cs-004087 | die Überstunden | Přesčasy | (1) virsstundas | — | — |
| cs-001029 | kein | Žádné | (1) nekāds (2) neviens | Ich habe kein Geld. | man nav naudas. |
| cs-005578 | der Zuschlag | Výchova | (1) uzcenojums (2) piemaksa | Für den ICE muss man einen Zuschlag zahlen. | par ICE vilcienu jāmaksā piemaksa. |
| cs-003092 | erschüttern | Podkopat | (1) iedragāt (2) satriekt (3) satricināt | — | — |
| cs-000363 | der Rückgang | Snížení | (1) samazināšanās (2) atpakaļiešana (3) panīkums | — | — |
| cs-004684 | der Fetzen | Cáry | (1) driska (2) skrandas | — | — |
| cs-002022 | dehnen | Protahovat | (1) vilkties (2) staipīties (3) stiepties (4) staipīt (5) stiept | — | — |
| cs-003549 | sich einmischen | Zasahovat | (1) iejaukties | — | — |
| cs-003786 | die Streitkräfte | Všechny vojenské organizace a vojenské síly země | (1) valsts visas militārās organizācijas un militārie spēki | — | — |
| cs-000565 | der Bodensatz | Sediment | (1) mieles (2) padibenes (3) nogulsnes | — | — |
| cs-005576 | austrinken | Vypít | (1) izdzert | — | — |
| cs-003598 | beginnen | Začít | (1) sākt | — | — |
| cs-003837 | abhören | Poslouchat | (1) slepeni noklausīties (2) noklausīties | — | — |
| cs-001270 | enthüllen | Odkrýt | (1) atsegt (2) atklāt | — | — |
| cs-005573 | ausarbeiten | Vypracovat | (1) izstrādāt | — | — |
| cs-000775 | wankelmütig | Kolísavý | (1) svārstīgs | — | — |
| cs-004129 | angeblich | Zřejmě | (1) šķietami (2) it kā | — | — |
| cs-000014 | schräg | Nakloněný | (1) slīps | — | — |
| cs-004648 | ob | Jestli | (1) vai | Ich weiß nicht, ob er kommt. | es nezinu, vai viņš nāks. |
| cs-005580 | das Gestell | Duch | (1) šasija (2) statnis (3) statīvs | — | — |
| cs-002083 | beschwören | Naléhavě prosit | (1) ļoti lūgt (2) apliecināt ar zvērestu (3) zvērēt | — | — |
| cs-004286 | die Kriegsentschädigung | Reparace | (1) reparācijas (2) atlīdzinājums par zaudējumiem karā | — | — |
| cs-001225 | exekutieren | Vykonávat trest smrti | (1) izpildīt nāvessodu | — | — |
| cs-002633 | vertraut | Známý | (1) pazīstams | — | — |
| cs-005579 | der Brandanschlag | Jizva po popálení | (1) ļaunprātīga dedzināšana | — | — |
| cs-003458 | der Clip | Klip | (1) klips | — | — |
| cs-000401 | der Gesichtskreis | Horizont | (1) apvārsnis (2) redzesloks | — | — |
| cs-003379 | der Farn | Kapradina | (1) paparde | — | — |
