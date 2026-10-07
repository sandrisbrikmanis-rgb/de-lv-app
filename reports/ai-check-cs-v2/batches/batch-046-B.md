HOW-TO: šo versiju B saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-046.csv (versija A).
Gemini -> ai-gemini/batch-046.csv (versija B).
ChatGPT -> ai-chatgpt/batch-046.csv (versija C).
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
| cs-001795 | die Klasse | Společenská třída | (1) kategorija (2) klase (3) sabiedrības šķira | — | — |
| cs-004435 | der Magnetstreifen | Magnetický proužek (na kreditní kartě) | (1) magnētiskā josla (uz kredītkartes) | — | — |
| cs-005537 | das Armband | Náramek | (1) rokassprādze | — | — |
| cs-002369 | die Schneide | Čepel | (1) asmens | — | — |
| cs-003569 | das Sein | Existence | (1) esamība | Das menschliche Sein ist komplex. | cilvēka esamība ir sarežģīta. |
| cs-000567 | raffgierig | Hrabivý | (1) mantrausīgs | — | — |
| cs-000036 | ersparen | Naspořit | (1) aiztaupīt (2) atlicināt (3) iekrāt (4) ietaupīt | — | — |
| cs-002341 | täglich | Každý den | (1) katru dienu | — | — |
| cs-002797 | sich vereinigen | Splynout s | (1) apvienoties ar | — | — |
| cs-000097 | unwillkürlich | Nevědomý | (1) neapzināts (2) netīšs (3) nevilšs | — | — |
| cs-004629 | minderwertig | Bezcenný | (1) mazvērtīgs | — | — |
| cs-004451 | der Benzingutschein | Kupon na benzín | (1) benzīna talons | — | — |
| cs-003661 | der Abstecher | Odklon | (1) īss izbrauciens (2) novirzīšanās | — | — |
| cs-004379 | die Entwertung | Snížení hodnoty | (1) devalvācija (2) vērtības pazemināšana | — | — |
| cs-004139 | die Boutique | Módní obchod | (1) modes preču veikals | — | — |
| cs-002740 | die Müllkippe | Skládka odpadků | (1) atkritumu izgāztuve | — | — |
| cs-000615 | interpretieren | Vykládat | (1) izskaidrot (2) interpretēt | — | — |
| cs-000857 | der Facharzt | Lékař specialista | (1) ārsts speciālists | — | — |
| cs-002594 | zuweisen | Určit | (1) norīkot (2) piešķirt | Der Chef weist ihm eine neue Aufgabe zu. | priekšnieks viņam piešķir jaunu uzdevumu. |
| cs-002436 | mulmig | Ustrašený | (1) bailīgs (2) nedrošs (3) neomulīgs | — | — |
| cs-003793 | die Hausgemeinschaft | Společenství obyvatel domu | (1) mājas iedzīvotāji (2) ģimenes locekļi | — | — |
| cs-000643 | es | Neosobní podoba | (1) tas | Es regnet. | Līst. |
| cs-000957 | der Geschiedene | Rozvedený muž | (1) šķirtenis | — | — |
| cs-001963 | friedlich | Mírumilovný | (1) mierīgs | — | — |
| cs-002120 | die Besatzung | Okupační vojenské jednotky | (1) okupācijas militārās vienības (2) apkalpe (3) ekipāža (4) komanda | — | — |
| cs-004188 | die Einfahrt | Příjezdová cesta | (1) iebrauktuve | Bitte parken Sie nicht vor der Einfahrt. | lūdzu, nenovietojiet auto pie iebrauktuves. |
| cs-001887 | das Nummernschild | Poznávací značka vozu | (1) automašīnas numura zīme | Wo ir tavam Nummernschild? | Kur ir tava numura zīme? |
| cs-002925 | der Widerstandskämpfer | Člen hnutí odporu | (1) pretošanās kustības dalībnieks | — | — |
| cs-002929 | sperren | Zablokovat | (1) bloķēt | Die Polizei sperrt die Straße. | policija bloķē ielu. |
| cs-005535 | der Arbeiter | Pracovník | (1) strādnieks | — | — |
| cs-000845 | die Geländefahrt | Jízda v terénu | (1) apvidus brauciens | — | — |
| cs-002618 | zum | Ke | (1) pie (2) uz | Ich gehe zum Arzt. | es eju pie ārsta. |
| cs-000720 | entführen | Odvést | (1) nolaupīt (2) aizvest | — | — |
| cs-003723 | das Bauchweh | Bolest břicha | (1) vēdersāpes | — | — |
| cs-001646 | beruhen | Spočívat | (1) pamatoties (2) dibināties | — | — |
| cs-002659 | die Polstergarnitur | Sestava čalouněného nábytku | (1) mīksto mēbeļu garnitūra | — | — |
| cs-003005 | sich verlaufen | Ztratit se | (1) norisināties | — | — |
| cs-001566 | die Flur | Paseka | (1) klajums (2) lauks | — | — |
| cs-001198 | versteigern | Prodat v aukci | (1) pārdot izsolē | — | — |
| cs-002098 | wahren | Uchovat | (1) saglabāt | — | — |
| cs-002640 | nämlich | A to | (1) proti | — | — |
| cs-001122 | anführen | Zmiňovat | (1) vadīt (2) minēt | — | — |
| cs-000815 | anfechten | Zpochybnit | (1) apšaubīt (2) apstrīdēt | — | — |
| cs-002956 | sich eingewöhnen | Zvyknout si | (1) pierast | Ich muss mich erst an die neue Arbeit eingewöhnen. | man vispirms jāpierod pie jaunā darba. |
| cs-005539 | die Art | Druh | (1) veids | Auf diese Art lernen wir schneller. | šādā veidā mēs mācāmies ātrāk. |
| cs-003024 | lang | Dlouho | (1) ilgs (2) garš | Der Tisch ist sehr lang. | galds ir ļoti garš. |
| cs-005546 | geradebiegen | Zavázat se | (1) izlabot (2) iztaisnot | — | — |
| cs-005545 | abfällig | Milý | (1) noraidošs (2) slikts (3) negatīvs (4) nelabvēlīgs | — | — |
| cs-005541 | der Aufwand | Zeď | (1) pūles | Der Aufwand ist zu groß. | pūles ir pārāk lielas. |
| cs-000345 | der Fahrdamm | Vozovka | (1) bruģis (2) ielas braucamā daļa | — | — |
| cs-000975 | der Hilfsdienst | Help desk | (1) palīdzības dienests | — | — |
| cs-004503 | die Kartoffellegemaschine | Stroj na sázení brambor | (1) kartupeļu stādāmā mašīna | — | — |
| cs-001074 | die Durchführung | Provedení skrz | (1) realizēšana (2) veikšana (3) izdarīšana (4) izpildīšana (5) izvadīšana cauri kaut kam | — | — |
| cs-003501 | rechtmäßig | Oprávněný | (1) likumīgs | — | — |
| cs-003118 | bestimmt | Určitě | (1) noteikti | Das ist bestimmt richtig. | tas noteikti ir pareizi. |
| cs-004437 | die Stichhaltigkeit | Opodstatněnost | (1) pamatotība | — | — |
| cs-003197 | gleichzeitig | Ve stejnou dobu | (1) vienlaikus | — | — |
| cs-001972 | der Knochenbruch | Zlomenina kosti | (1) kaula lūzums | — | — |
| cs-002099 | die Lesbe | Lesbička | (1) lesbiete | — | — |
| cs-005536 | der Arm | Ruka | (1) roka | — | — |
| cs-004136 | dazwischenkommen | Vměšovat se | (1) iejaukties (2) gadīties starpā (3) atgadīties | — | — |
| cs-000068 | das Geschäftsjahr | Účetní rok | (1) saimniecības gads | — | — |
| cs-001187 | die Bankleitzahl | Bankovní index | (1) bankas indekss | — | — |
| cs-004125 | der Termin | Schůzka | (1) termiņš (2) norunāta tikšanās | Ich habe morgen einen Termin beim Arzt. | man rīt ir pieraksts pie ārsta. |
| cs-004486 | der Reisegefährte | Společník na cesty | (1) ceļabiedrs | — | — |
| cs-002888 | sich widersetzen | Postavit se proti | (1) stāties pretī (2) pretoties | — | — |
| cs-002839 | der Pieper | Pager | (1) peidžeris | — | — |
| cs-004030 | einerseits | Na jedné straně | (1) no vienas puses | Einerseits ist die Wohnung schön, andererseits ist sie teuer. | no vienas puses, dzīvoklis ir skaists, no otras puses, tas ir dārgs. |
| cs-001470 | sich entledigen | Oprostit se od | (1) tikt vaļā (2) atbrīvoties | — | — |
| cs-004502 | prägen | Otisknout | (1) darināt (2) veidot (3) uzspiest (4) iespiest (5) kalt naudu | — | — |
| cs-003787 | flimmern | Blikat | (1) ņirbēt (2) zvīļot (3) vizuļot (4) vizēt (5) mirgot | — | — |
| cs-005543 | umdenken | Připomínat | (1) mainīt viedokli atkarībā no situācijas | — | — |
| cs-004669 | der Chefarzt | Vedoucí lékař | (1) galvenais ārsts | — | — |
| cs-003773 | gewissenlos | Bez svědomí | (1) negodīgs (2) bez sirdsapziņas | — | — |
| cs-000029 | der Umschwung | Náhlá změna | (1) pagrieziens (2) apvērsums (3) pēkšņa pārmaiņa (4) lūzums (5) apgrieziens | — | — |
| cs-001771 | das Übereinkommen | Ujednání | (1) noruna (2) vienošanās | — | — |
| cs-002251 | die Straßenbahnstrecke | Tramvajová trať | (1) tramvaja līnija | — | — |
| cs-001472 | veranstalten | Organizovat | (1) organizēt | — | — |
| cs-005540 | artig | Poslušný | (1) paklausīgs | — | — |
| cs-004664 | befördern | Přepravovat | (1) pārvadāt | — | — |
| cs-000595 | abhalten | Odradit | (1) atturēt | — | — |
| cs-003952 | aufgehen | Otevřít se | (1) atvērties | — | — |
| cs-002984 | schnurren | Vrnět | (1) murrāt | — | — |
| cs-003311 | die Ölpflanze | Olejnatá rostlina | (1) eļļas augs | — | — |
| cs-003660 | denkbar | Představitelný | (1) iespējams (2) iedomājams (3) domājams | — | — |
| cs-000870 | deuten | Naznačit | (1) norādīt (2) iztulkot (3) izskaidrot | — | — |
| cs-003484 | der Passagier | Cestující | (1) pasažieris | — | — |
| cs-004738 | hinaufgehen | Jít nahoru | (1) iet augšā | — | — |
| cs-000324 | das Einzelkind | Jediné dítě v rodině | (1) vienīgais bērns ģimenē | — | — |
| cs-002351 | das Geschoss | Projektil | (1) šāviņš | — | — |
| cs-001065 | das Keyboard | Klávesnice | (1) tastatūra | — | — |
| cs-005544 | erlöschen | Zprostit | (1) izbeigties (2) nebūt vairs spēkā (3) nodzist (4) izdzist | — | — |
| cs-001894 | der Bezug | Spojení | (1) pārvalks (2) sakars (3) attiecība | — | — |
| cs-005538 | der Ärmel | Rukáv | (1) piedurkne | — | — |
| cs-001119 | ermächtigen | Zmocnit | (1) pilnvarot | — | — |
| cs-003931 | einliefern | Dopravit | (1) atvest (2) ievest | — | — |
| cs-003742 | jemanden baden | Koupat někoho | (1) mazgāt vannā (2) peldināt | — | — |
| cs-000515 | der Slalomlauf | Slalom | (1) slaloms | — | — |
| cs-004157 | die Vollnarkose | Plná narkóza | (1) pilna narkoze | — | — |
| cs-005542 | überlassen | Nechat projít | (1) atļaut izvēlēties (2) rīcībā (3) atstāt kāda ziņā | — | — |
