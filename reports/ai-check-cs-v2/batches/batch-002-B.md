HOW-TO: šo versiju B saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-002.csv (versija B).
Gemini -> ai-gemini/batch-002.csv (versija C).
ChatGPT -> ai-chatgpt/batch-002.csv (versija A).
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
| cs-005010 | anrufen | Zavolat | (1) zvanīt | — | — |
| cs-002348 | sich verheiraten | Vzít se | (1) apprecēties | — | — |
| cs-001993 | wegfahren | Odjet | (1) aizbraukt prom | — | — |
| cs-001753 | die Brieftasche | Peněženka | (1) kabatas portfelis | — | — |
| cs-001070 | eintönig | Fádní | (1) monotons (2) vienmuļīgs (3) vienmuļš | — | — |
| cs-000769 | die Generalversammlung | Valné shromáždění | (1) pilnsapulce | — | — |
| cs-001544 | der Zivildienst | Civilní služba místo vojenské služby | (1) civildienests karadienesta vietā | — | — |
| cs-001889 | verursachen | Být důvodem | (1) būt par iemeslu | — | — |
| cs-001223 | der Schieber | Zástrčka | (1) spekulants (2) bulta (3) aizbīdnis | — | — |
| cs-001804 | sich einschränken | Omezit se | (1) ierobežoties | — | — |
| cs-000408 | das Pack | Balík | (1) paka | — | — |
| cs-000950 | die Forschungsgemeinschaft | Výzkumná skupina | (1) pētniecības grupa | — | — |
| cs-005009 | anders | Jinak | (1) citādi | — | — |
| cs-002154 | der Dachgepäckträger | Střešní nosič auta | (1) automašīnas jumta bagāžnieks | — | — |
| cs-004479 | früher | Dříve | (1) bijušais (2) agrāk | — | — |
| cs-003083 | glühen | Zářit | (1) degt (2) gailēt (3) kaist (4) kvēlot | — | — |
| cs-003100 | die Laienkunst | Amatérské umění | (1) mākslinieciskā pašdarbība | — | — |
| cs-001494 | der Tramper | Stopař | (1) ceļotājs ar autostopu | — | — |
| cs-005015 | austreiben | Vést | (1) atradināt (2) izdzīt | — | — |
| cs-004624 | der Bergmann | Uhelný horník | (1) ogļracis (2) kalnracis | — | — |
| cs-004641 | versagen | Odepřít | (1) izrādīties gļēvam un nevarīgam (2) atteikties kalpot (3) neklausīt (4) noraidīt (5) atteikt (6) liegt | — | — |
| cs-001592 | ablehnen | Odmítnout | (1) noraidīt | — | — |
| cs-000250 | jährlich | Každoročně | (1) ik gadu | — | — |
| cs-000124 | verdoppeln | Zdvojnásobit | (1) dubultot | — | — |
| cs-003125 | angemessen | Vhodný | (1) piemērots | — | — |
| cs-004361 | das Glied | Končetina | (1) posms (2) ķēdes loceklis (3) ekstremitāte (4) loceklis | — | — |
| cs-004433 | die Eingeweide | Vnitřní orgány | (1) iekšējie orgāni (2) iekšas | — | — |
| cs-004616 | dessen ungeachtet | Navzdory tomu | (1) neievērojot to (2) neskatoties uz to | — | — |
| cs-000101 | begrüßen | Pozdravit | (1) sasveicināties (2) sveicināt | — | — |
| cs-002260 | die Strähne | Pramen vlasů | (1) matu šķipsna | — | — |
| cs-001114 | der Fräser | Frézař | (1) frēze (2) frēzētājs | — | — |
| cs-005014 | unbedingt | Zbrklý | (1) noteikti | — | — |
| cs-000955 | schwarzfahren | Jezdit vlakem nebo autobusem bez jízdenky | (1) braukt vilcienā vai autobusā bez biļetes | — | — |
| cs-005017 | der Beschützer | Sláva | (1) aizstāvis (2) sargs (3) sargātājs | — | — |
| cs-002340 | der Hirte | Pastýř | (1) gans | — | — |
| cs-001160 | die Vorstellung | Show | (1) izrāde | Die Vorstellung beginnt um acht Uhr. | izrāde sākas pulksten astoņos. |
| cs-001210 | das Erstaunen | Údiv | (1) izbrīns | — | — |
| cs-004326 | der Faschingsball | Karnevalový ples | (1) karnevāls | — | — |
| cs-003242 | festgesetzt | Určený | (1) nolikts (2) nosacīts (3) noteikts | — | — |
| cs-002183 | die Hautrötung | Zarudnutí kůže | (1) ādas apsarkums | — | — |
| cs-000386 | dringen | Žádat | (1) pieprasīt (2) prasīt (3) ielauzties (4) iespiesties (5) lauzties (6) spiesties | — | — |
| cs-004272 | korrupt | Podplatitelný | (1) piekukuļojams (2) pērkams | — | — |
| cs-000067 | das Krankheitsbild | Klinický obraz | (1) slimības aina | — | — |
| cs-001800 | die Erscheinung | Zevnějšek | (1) izskats (2) āriene (3) parādīšanās (4) parādība | — | — |
| cs-002223 | lediglich | Pouze | (1) tikai | — | — |
| cs-000469 | glaubhaft | Přesvědčivý | (1) pārliecinošs (2) ticams | — | — |
| cs-000060 | besessen | Uchvácený | (1) pārņemts (2) apmāts (3) apsēsts | — | — |
| cs-000810 | relevant | Důležitý | (1) svarīgs (2) nozīmīgs | — | — |
| cs-003144 | hineinsehen | Nahlédnout dovnitř | (1) ieskatīties | — | — |
| cs-001448 | der Gesichtszug | Funkce | (1) vaibsts | — | — |
| cs-002580 | regellos | Nepravidelný | (1) neregulārs | — | — |
| cs-005018 | der Umschwung | Orbita | (1) pagrieziens (2) apvērsums (3) pēkšņa pārmaiņa (4) lūzums (5) apgrieziens | — | — |
| cs-001483 | die Lieferfirma | Dodavatelská společnost | (1) piegādātājfirma | — | — |
| cs-003488 | zuströmen | Proudit k | (1) pieplūst | — | — |
| cs-003949 | veranlassen | Iniciovat | (1) mudināt (2) ierosināt (3) izraisīt | — | — |
| cs-000045 | sprengen | Voda | (1) laistīt (2) apslacīt (3) [uz]spridzināt | — | — |
| cs-002270 | der Spaß | Vtip | (1) jautrība (2) joks | — | — |
| cs-001663 | entlegen | Odloučený | (1) attāls (2) atstats (3) nomaļš | — | — |
| cs-002007 | aufknöpfen | Odepnout | (1) atpogāt | — | — |
| cs-002764 | die Preissenkung | Snížení ceny | (1) cenu pazeminājums | — | — |
| cs-003841 | der Pendelzug | Kyvadlový vlak | (1) piepilsētas vilciens | — | — |
| cs-000946 | verabschieden | Propustit | (1) aizlaist pensijā (2) atbrīvot no darba | — | — |
| cs-001440 | die Unterlage | Podpora | (1) dokumentācija (2) dati (3) balsts (4) paliktnis (5) paklājs (6) paliekamais | — | — |
| cs-004235 | das Spielgerät | Inventář sportovních her | (1) sporta spēļu inventārs | — | — |
| cs-002851 | der Bodensatz | Kvasnice | (1) mieles (2) padibenes (3) nogulsnes | — | — |
| cs-002600 | missfallen | Nelíbit se | (1) nepatikt | — | — |
| cs-000592 | eingehen | Přijít | (1) saderēt (2) piekrist (3) sarauties (4) ierauties (5) ienākt (6) pienākt (7) ieiet | — | — |
| cs-002499 | die Baugenossenschaft | Stavební družstvo | (1) dzīvokļu celtniecības kooperatīvs | — | — |
| cs-000526 | der Kostenanschlag | Odhad výdajů | (1) izdevumu tāme | — | — |
| cs-003766 | die Nationaltracht | Národní kroj | (1) tautastērps | — | — |
| cs-000261 | der Absturz | Havárie | (1) kritiens (2) nogāšanās | — | — |
| cs-000243 | die Kindesmisshandlung | Týrání dětí | (1) vardarbība pret bērniem | — | — |
| cs-005019 | gelten | Malomyslný | (1) būt spēkā | Die Regel gilt ab Montag. | noteikums ir spēkā no pirmdienas. |
| cs-004213 | der Marschflugkörper | Střela s plochou dráhou letu | (1) kruīzraķete (2) kruīza raķete | — | — |
| cs-005013 | das Abendessen | Večeře | (1) vakariņas | — | — |
| cs-002947 | der Behandlungsraum | Ošetřovna | (1) ārsta kabinets | — | — |
| cs-000800 | neuerdings | Nově | (1) atkal (2) no jauna (3) šais dienās (4) nesen | — | — |
| cs-003826 | das Berufsgeheimnis | Profesní tajemství | (1) amata noslēpums | — | — |
| cs-003251 | dienstpflichtig | Podléhající vojenské službě | (1) padots karadienestam | — | — |
| cs-005016 | das Gerede | Oponování | (1) tenkas (2) ļaužu valodas (3) runas (4) runāšana | — | — |
| cs-000931 | die Eröffnung | Objev | (1) atklājums (2) paziņojums (3) atklātne (4) atklāšana (5) atvēršana | — | — |
| cs-003116 | obgleich | Přestože | (1) kaut gan, lai gan | — | — |
| cs-000659 | starren | Upřeně se dívat | (1) blenzt (2) cieši skatīties | — | — |
| cs-002131 | gerinnen | Zmrznout | (1) sasalt (2) sastingt (3) sakupt (4) saiet (5) sarecēt | — | — |
| cs-001385 | das Gespräch | Konverzace | (1) saruna | — | — |
| cs-002726 | der Rentenempfänger | Důchodce | (1) pensijas saņēmējs | — | — |
| cs-002703 | erzielen | Docílit | (1) panākt (2) sasniegt (3) gūt | — | — |
| cs-004640 | umgehen | Obejít se | (1) apieties | Er kann gut mit Kindern umgehen. | viņš prot labi apieties ar bērniem. |
| cs-005012 | der Abend | Večer | (1) vakars | — | — |
| cs-000121 | die Schuld | Odpovědnost | (1) atbildība (2) parāds (3) vaina | Das ist nicht meine Schuld. | tā nav mana vaina. |
| cs-002104 | fabelhaft | Vynikající | (1) lielisks | — | — |
| cs-004563 | die Betriebskosten | Provozní náklady podniku | (1) ražošanas izdevumi (2) uzņēmuma ekspluatācijas izdevumi | — | — |
| cs-005011 | ab | Od | (1) no | ab heute | no šodienas |
| cs-001299 | angegriffen | Unavený | (1) uzbrukts (2) noguris | — | — |
| cs-004373 | betreffen | Vztahovat se k | (1) attiekties | — | — |
| cs-003985 | sich entschließen | Rozhodnout se | (1) izšķirties (2) izlemt | — | — |
| cs-001874 | die Umsicht | Opatrnost | (1) apdomība (2) piesardzība | — | — |
| cs-003652 | zwölfte | Dvanáctý | (1) divpadsmitais | — | — |
| cs-003071 | deplaziert | Nevčasný | (1) nelaikā (2) nevietā (3) nepiemērots | — | — |
| cs-002917 | einfügen | Vložit | (1) ievietot | Füge das Bild in das Dokument ein. | ievieto attēlu dokumentā. |
