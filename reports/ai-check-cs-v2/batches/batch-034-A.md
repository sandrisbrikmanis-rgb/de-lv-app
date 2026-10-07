HOW-TO: šo versiju A saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-034.csv (versija A).
Gemini -> ai-gemini/batch-034.csv (versija B).
ChatGPT -> ai-chatgpt/batch-034.csv (versija C).
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
| cs-004600 | das Warnsignal | Varovný signál | (1) brīdinājuma signāls | — | — |
| cs-001269 | das Durchfuhrverbot | Zákaz tranzitu | (1) caurbraukšanas aizliegums | — | — |
| cs-002995 | unmissverständlich | Naprosto jasný | (1) nepārprotams | — | — |
| cs-003315 | der Studienfonds | Studijní fond | (1) studiju fonds | — | — |
| cs-003536 | eher | Spíše | (1) drīzāk | Ich würde eher zu Hause bleiben. | es drīzāk paliktu mājās. |
| cs-000434 | schalten | Přepínat | (1) pārslēgt | Ich schalte das Licht ein. | es ieslēdzu gaismu. |
| cs-001402 | sich betragen | Chovat se | (1) uzvesties (2) izturēties | — | — |
| cs-005397 | beispielhaft | Uchvácený | (1) parauga (2) priekšzīmīgs | — | — |
| cs-002424 | die Gedächtnisstörung | Porucha paměti | (1) atmiņas traucējumi | — | — |
| cs-000681 | verrechnen | Vypočítat | (1) aprēķināt | — | — |
| cs-001126 | der Ordner | Složka | (1) mape | — | — |
| cs-005401 | nachträglich | Po kdy | (1) papildu (2) vēlāk (3) piedevām (4) vēlāks | — | — |
| cs-001595 | das Geschehnis | Případ | (1) gadījums (2) atgadījums (3) notikums | — | — |
| cs-004566 | bestürzt | Rozrušený | (1) samulsis (2) apmulsis (3) apjucis (4) pārsteigts | — | — |
| cs-005392 | seit | Od | (1) kopš | — | — |
| cs-005395 | Sie | Vy | (1) jūs | Sie kochen, bitte. | Jūs gatavojat, lūdzu. |
| cs-001942 | sittlich | Ctnostný | (1) tikumīgs | — | — |
| cs-003053 | der Radioamateur | Radioamatér | (1) radioamatieris | — | — |
| cs-000231 | das Schaffen | Činnost | (1) daiļrade (2) darbs (3) darbība (4) radīšana (5) jaunrade | — | — |
| cs-001438 | sich rächen | Pomstít se | (1) atriebties | — | — |
| cs-002415 | die Jeans | Džíny | (1) džinsi | — | — |
| cs-005393 | die Sekunde | Sekunda | (1) sekunde | — | — |
| cs-005400 | vererben | Zastavit | (1) atstāt (2) nodot mantojumā | — | — |
| cs-003538 | beschimpfen | Hanobit | (1) nozākāt (2) noķengāt (3) nolamāt | — | — |
| cs-001203 | gesammelt | Shromážděné | (1) kopots | — | — |
| cs-000514 | einhüllen | Zahálit | (1) satīt (2) ievīstīt (3) ietīt | — | — |
| cs-003055 | normieren | Standardizovat | (1) normēt | — | — |
| cs-002184 | die Sanitätsstelle | Zdravotnické stanoviště | (1) medicīniskais punkts | — | — |
| cs-002202 | unterschlagen | Přivlastňovat si | (1) piesavināties | — | — |
| cs-005402 | ziemlich | Další | (1) diezgan | — | — |
| cs-000473 | die Bitte | Žádost | (1) lūgums | Ich habe eine Bitte. | Man ir lūgums. |
| cs-001822 | der Liegestuhl | Lenoška | (1) atpūtas krēsls | — | — |
| cs-003466 | herb | Hořký | (1) sūrs (2) skābs (3) rūgtens | — | — |
| cs-004221 | der Kriegsgefangene | Válečný zajatec | (1) karagūsteknis | — | — |
| cs-004401 | henken | Oběsit člověka | (1) kārt (2) pakārt cilvēku | — | — |
| cs-004650 | der Buchladen | Knihkupectví | (1) grāmatu veikals | — | — |
| cs-002662 | allmählich | Postupně | (1) pakāpeniski | — | — |
| cs-002400 | die Wärmflasche | Láhev s horkou vodou | (1) termofors | — | — |
| cs-000594 | das Gefolge | Doprovod | (1) svīta (2) pavadoņi | — | — |
| cs-004051 | genesen | Uzdravit se | (1) izveseļoties (2) atveseļoties | — | — |
| cs-002592 | schärfsinnig | Důvtipný | (1) ar asu prātu (2) attapīgs (3) asprātīgs | — | — |
| cs-003148 | innig | Srdečný | (1) sirsnīgs | — | — |
| cs-001984 | das Tagegeld | Diety na pracovní cestu | (1) komandējuma dienasnauda | — | — |
| cs-003589 | die Anmut | Krása | (1) daiļums (2) grācija (3) pievilcība | — | — |
| cs-001231 | die Landung | Vylodění | (1) desants (2) nosēšanās (3) izcelšanās malā | — | — |
| cs-001010 | die Meinungsverschiedenheiten | Neshody | (1) domstarpības | — | — |
| cs-005396 | siebenhundert | Sedm set | (1) septiņsimt | — | — |
| cs-005394 | der September | Září | (1) septembris | — | — |
| cs-003738 | nicken | Kývat hlavou | (1) pamāt ar galvu | — | — |
| cs-001912 | der Geistliche | Duchovní | (1) garīdznieks | — | — |
| cs-002093 | eindringlich | Vytrvalý | (1) neatlaidīgs (2) pārliecinošs | — | — |
| cs-000396 | der Eilbote | Kurýr | (1) ziņnesis (2) kurjers | — | — |
| cs-003762 | der Schutzumschlag | Ochranný přebal | (1) apvāks | — | — |
| cs-004742 | das Meisterschaftsspiel | Mistrovský zápas | (1) meistarsacīkstes | — | — |
| cs-002877 | flüchtig | Krátkodobý | (1) paviršs (2) acumirklīgs (3) ātri pārejošs (4) īslaicīgs (5) gaistošs | — | — |
| cs-003650 | anziehen | Obléknout si | (1) uzvilkt | — | — |
| cs-004070 | die Falltür | Dveře zabudované v podlaze | (1) lūka (2) grīdā iebūvētas durvis | — | — |
| cs-004205 | erst | Nejprve | (1) tikai | Erst lernen, dann spielen. | Vispirms mācies, pēc tam spēlējies. |
| cs-001885 | der Basketball | Basketball | (1) basketbols | — | — |
| cs-005391 | sein | Být | (1) būt | Ich bin hier. | es esmu šeit. |
| cs-001226 | totschlagen | Ubít | (1) nosist | — | — |
| cs-004089 | bejahrt | Pokročilého věku | (1) krietni gados | — | — |
| cs-000001 | das Holzbrett | Dřevěná deska | (1) koka dēlis | — | — |
| cs-000450 | die Aufenthaltsgenehmigung | Povolení k pobytu | (1) uzturēšanās atļauja | — | — |
| cs-001739 | zunächst | Nejprve | (1) vispirms | — | — |
| cs-003599 | die Gunst | Náklonnost | (1) labvēlība | — | — |
| cs-004077 | das Delikt | Trestný čin | (1) noziegums (2) likuma pārkāpums | — | — |
| cs-005398 | das Haarbüschel | Pramen vlasů | (1) matu šķipsna | — | — |
| cs-003061 | waag[e]recht | Horizontální | (1) līmenisks (2) horizontāls | — | — |
| cs-000997 | die Eingebung | Náhlý nápad | (1) iedvesma (2) pēkšņa ideja | — | — |
| cs-001088 | fortwährend | Nepřetržitý | (1) pastāvīgs (2) nepārtraukts | — | — |
| cs-003305 | abschieben | Odstrčit | (1) aizstumt (2) izraidīt | — | — |
| cs-003961 | sich umziehen | Převléknout se | (1) pārģērbties | — | — |
| cs-002562 | die Reifeprüfung | Zkouška zralosti | (1) gatavības pārbaudījums | — | — |
| cs-005399 | schwindeln | Slábnout | (1) reibt | — | — |
| cs-001865 | brach | Ležící ladem | (1) neapstrādāts (2) atstāts atmatā | — | — |
| cs-000940 | der Warteraum | Čekárna | (1) uzgaidāmā telpa | — | — |
| cs-002570 | sich begnügen | Být spokojený s | (1) apmierināties ar | — | — |
| cs-001679 | dampfen | Pařit se | (1) kūpēt (2) izgarot | — | — |
| cs-000557 | die Hupe | Roh | (1) signāltaure (2) taure | Er hupt laut. | viņš skaļi signalizē ar tauri. |
| cs-002250 | die Stadtrundfahrt | Okružní prohlídka města | (1) brauciens pa pilsētu | — | — |
| cs-001360 | die Überlegung | Zvažování | (1) apsvēršana (2) apdoms (3) pārdomāšana | — | — |
| cs-004047 | das Ansehen | Pověst | (1) reputācija | Die Ärztin hat ein hohes Ansehen. | ārstei ir augsta reputācija. |
| cs-000910 | beachten | Brát v úvahu | (1) ievērot (2) ņemt vērā | — | — |
| cs-000561 | meist | Nejčastěji | (1) visbiežāk | — | — |
| cs-000152 | der Elementarbegriff | Základní koncept | (1) pamatjēdziens | — | — |
| cs-001055 | entzünden | Zažehnout | (1) iededzināt (2) iedegt (3) aizdedzināt | — | — |
| cs-000766 | holpern | Cukat | (1) kratīties (2) raustīties | — | — |
| cs-001375 | kunstfertig | Zručný | (1) prasmīgs | — | — |
| cs-002804 | die Verfügung | Příkaz | (1) rīkojums | — | — |
| cs-001113 | vornherein | Na samém začátku | (1) pašā sākumā | — | — |
| cs-000272 | einverstanden | Souhlasit | (1) ar mieru | — | — |
| cs-004278 | erheben | Zvednout | (1) celt (2) sacelt (3) protestēt (4) pacelt | — | — |
| cs-001819 | die Pflichtlektüre | Povinná studijní literatura | (1) obligātā mācību literatūra | — | — |
| cs-000850 | quatschen | Chatovat | (1) pļāpāt | — | — |
| cs-004655 | der Handgriff | Technika | (1) paņēmiens | Mit einem Handgriff war die Tür offen. | ar vienu paņēmienu durvis bija vaļā. |
| cs-000563 | das Schiedsgericht | Arbitrážní soud | (1) šķīrējtiesa | — | — |
| cs-003524 | der Katastrophendienst | Služba při katastrofách | (1) katastrofu dienests | — | — |
| cs-000665 | die Benennung | Název | (1) dēvēšana (2) nosaukums (3) nosaukšana | — | — |
| cs-001583 | die Druckmaschine | Tiskařský lis | (1) iespiedmašīna | — | — |
