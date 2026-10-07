HOW-TO: šo versiju B saņem Gemini.
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
| cs-001402 | sich betragen | Chovat se | (1) izturēties (2) uzvesties | — | — |
| cs-005397 | beispielhaft | Uchvácený | (1) priekšzīmīgs (2) parauga | — | — |
| cs-002424 | die Gedächtnisstörung | Porucha paměti | (1) atmiņas traucējumi | — | — |
| cs-000681 | verrechnen | Vypočítat | (1) aprēķināt | — | — |
| cs-001126 | der Ordner | Složka | (1) mape | — | — |
| cs-005401 | nachträglich | Po kdy | (1) piedevām (2) vēlāk (3) papildu (4) vēlāks | — | — |
| cs-001595 | das Geschehnis | Případ | (1) atgadījums (2) gadījums (3) notikums | — | — |
| cs-004566 | bestürzt | Rozrušený | (1) apjucis (2) apmulsis (3) samulsis (4) pārsteigts | — | — |
| cs-005392 | seit | Od | (1) kopš | — | — |
| cs-005395 | Sie | Vy | (1) jūs | Sie kochen, bitte. | Jūs gatavojat, lūdzu. |
| cs-001942 | sittlich | Ctnostný | (1) tikumīgs | — | — |
| cs-003053 | der Radioamateur | Radioamatér | (1) radioamatieris | — | — |
| cs-000231 | das Schaffen | Činnost | (1) radīšana (2) darbība (3) darbs (4) daiļrade (5) jaunrade | — | — |
| cs-001438 | sich rächen | Pomstít se | (1) atriebties | — | — |
| cs-002415 | die Jeans | Džíny | (1) džinsi | — | — |
| cs-005393 | die Sekunde | Sekunda | (1) sekunde | — | — |
| cs-005400 | vererben | Zastavit | (1) nodot mantojumā (2) atstāt | — | — |
| cs-003538 | beschimpfen | Hanobit | (1) noķengāt (2) nozākāt (3) nolamāt | — | — |
| cs-001203 | gesammelt | Shromážděné | (1) kopots | — | — |
| cs-000514 | einhüllen | Zahálit | (1) ievīstīt (2) satīt (3) ietīt | — | — |
| cs-003055 | normieren | Standardizovat | (1) normēt | — | — |
| cs-002184 | die Sanitätsstelle | Zdravotnické stanoviště | (1) medicīniskais punkts | — | — |
| cs-002202 | unterschlagen | Přivlastňovat si | (1) piesavināties | — | — |
| cs-005402 | ziemlich | Další | (1) diezgan | — | — |
| cs-000473 | die Bitte | Žádost | (1) lūgums | Ich habe eine Bitte. | Man ir lūgums. |
| cs-001822 | der Liegestuhl | Lenoška | (1) atpūtas krēsls | — | — |
| cs-003466 | herb | Hořký | (1) skābs (2) sūrs (3) rūgtens | — | — |
| cs-004221 | der Kriegsgefangene | Válečný zajatec | (1) karagūsteknis | — | — |
| cs-004401 | henken | Oběsit člověka | (1) pakārt cilvēku (2) kārt | — | — |
| cs-004650 | der Buchladen | Knihkupectví | (1) grāmatu veikals | — | — |
| cs-002662 | allmählich | Postupně | (1) pakāpeniski | — | — |
| cs-002400 | die Wärmflasche | Láhev s horkou vodou | (1) termofors | — | — |
| cs-000594 | das Gefolge | Doprovod | (1) pavadoņi (2) svīta | — | — |
| cs-004051 | genesen | Uzdravit se | (1) atveseļoties (2) izveseļoties | — | — |
| cs-002592 | schärfsinnig | Důvtipný | (1) attapīgs (2) ar asu prātu (3) asprātīgs | — | — |
| cs-003148 | innig | Srdečný | (1) sirsnīgs | — | — |
| cs-001984 | das Tagegeld | Diety na pracovní cestu | (1) komandējuma dienasnauda | — | — |
| cs-003589 | die Anmut | Krása | (1) grācija (2) daiļums (3) pievilcība | — | — |
| cs-001231 | die Landung | Vylodění | (1) nosēšanās (2) desants (3) izcelšanās malā | — | — |
| cs-001010 | die Meinungsverschiedenheiten | Neshody | (1) domstarpības | — | — |
| cs-005396 | siebenhundert | Sedm set | (1) septiņsimt | — | — |
| cs-005394 | der September | Září | (1) septembris | — | — |
| cs-003738 | nicken | Kývat hlavou | (1) pamāt ar galvu | — | — |
| cs-001912 | der Geistliche | Duchovní | (1) garīdznieks | — | — |
| cs-002093 | eindringlich | Vytrvalý | (1) pārliecinošs (2) neatlaidīgs | — | — |
| cs-000396 | der Eilbote | Kurýr | (1) kurjers (2) ziņnesis | — | — |
| cs-003762 | der Schutzumschlag | Ochranný přebal | (1) apvāks | — | — |
| cs-004742 | das Meisterschaftsspiel | Mistrovský zápas | (1) meistarsacīkstes | — | — |
| cs-002877 | flüchtig | Krátkodobý | (1) īslaicīgs (2) ātri pārejošs (3) acumirklīgs (4) paviršs (5) gaistošs | — | — |
| cs-003650 | anziehen | Obléknout si | (1) uzvilkt | — | — |
| cs-004070 | die Falltür | Dveře zabudované v podlaze | (1) grīdā iebūvētas durvis (2) lūka | — | — |
| cs-004205 | erst | Nejprve | (1) tikai | Erst lernen, dann spielen. | Vispirms mācies, pēc tam spēlējies. |
| cs-001885 | der Basketball | Basketball | (1) basketbols | — | — |
| cs-005391 | sein | Být | (1) būt | Ich bin hier. | es esmu šeit. |
| cs-001226 | totschlagen | Ubít | (1) nosist | — | — |
| cs-004089 | bejahrt | Pokročilého věku | (1) krietni gados | — | — |
| cs-000001 | das Holzbrett | Dřevěná deska | (1) koka dēlis | — | — |
| cs-000450 | die Aufenthaltsgenehmigung | Povolení k pobytu | (1) uzturēšanās atļauja | — | — |
| cs-001739 | zunächst | Nejprve | (1) vispirms | — | — |
| cs-003599 | die Gunst | Náklonnost | (1) labvēlība | — | — |
| cs-004077 | das Delikt | Trestný čin | (1) likuma pārkāpums (2) noziegums | — | — |
| cs-005398 | das Haarbüschel | Pramen vlasů | (1) matu šķipsna | — | — |
| cs-003061 | waag[e]recht | Horizontální | (1) horizontāls (2) līmenisks | — | — |
| cs-000997 | die Eingebung | Náhlý nápad | (1) pēkšņa ideja (2) iedvesma | — | — |
| cs-001088 | fortwährend | Nepřetržitý | (1) nepārtraukts (2) pastāvīgs | — | — |
| cs-003305 | abschieben | Odstrčit | (1) izraidīt (2) aizstumt | — | — |
| cs-003961 | sich umziehen | Převléknout se | (1) pārģērbties | — | — |
| cs-002562 | die Reifeprüfung | Zkouška zralosti | (1) gatavības pārbaudījums | — | — |
| cs-005399 | schwindeln | Slábnout | (1) reibt | — | — |
| cs-001865 | brach | Ležící ladem | (1) atstāts atmatā (2) neapstrādāts | — | — |
| cs-000940 | der Warteraum | Čekárna | (1) uzgaidāmā telpa | — | — |
| cs-002570 | sich begnügen | Být spokojený s | (1) apmierināties ar | — | — |
| cs-001679 | dampfen | Pařit se | (1) izgarot (2) kūpēt | — | — |
| cs-000557 | die Hupe | Roh | (1) taure (2) signāltaure | Er hupt laut. | viņš skaļi signalizē ar tauri. |
| cs-002250 | die Stadtrundfahrt | Okružní prohlídka města | (1) brauciens pa pilsētu | — | — |
| cs-001360 | die Überlegung | Zvažování | (1) apdoms (2) apsvēršana (3) pārdomāšana | — | — |
| cs-004047 | das Ansehen | Pověst | (1) reputācija | Die Ärztin hat ein hohes Ansehen. | ārstei ir augsta reputācija. |
| cs-000910 | beachten | Brát v úvahu | (1) ņemt vērā (2) ievērot | — | — |
| cs-000561 | meist | Nejčastěji | (1) visbiežāk | — | — |
| cs-000152 | der Elementarbegriff | Základní koncept | (1) pamatjēdziens | — | — |
| cs-001055 | entzünden | Zažehnout | (1) iedegt (2) iededzināt (3) aizdedzināt | — | — |
| cs-000766 | holpern | Cukat | (1) raustīties (2) kratīties | — | — |
| cs-001375 | kunstfertig | Zručný | (1) prasmīgs | — | — |
| cs-002804 | die Verfügung | Příkaz | (1) rīkojums | — | — |
| cs-001113 | vornherein | Na samém začátku | (1) pašā sākumā | — | — |
| cs-000272 | einverstanden | Souhlasit | (1) ar mieru | — | — |
| cs-004278 | erheben | Zvednout | (1) protestēt (2) sacelt (3) celt (4) pacelt | — | — |
| cs-001819 | die Pflichtlektüre | Povinná studijní literatura | (1) obligātā mācību literatūra | — | — |
| cs-000850 | quatschen | Chatovat | (1) pļāpāt | — | — |
| cs-004655 | der Handgriff | Technika | (1) paņēmiens | Mit einem Handgriff war die Tür offen. | ar vienu paņēmienu durvis bija vaļā. |
| cs-000563 | das Schiedsgericht | Arbitrážní soud | (1) šķīrējtiesa | — | — |
| cs-003524 | der Katastrophendienst | Služba při katastrofách | (1) katastrofu dienests | — | — |
| cs-000665 | die Benennung | Název | (1) nosaukums (2) dēvēšana (3) nosaukšana | — | — |
| cs-001583 | die Druckmaschine | Tiskařský lis | (1) iespiedmašīna | — | — |
