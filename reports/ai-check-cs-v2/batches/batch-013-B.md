HOW-TO: šo versiju B saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-013.csv (versija A).
Gemini -> ai-gemini/batch-013.csv (versija B).
ChatGPT -> ai-chatgpt/batch-013.csv (versija C).
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
| cs-001992 | beurlauben | Poskytnout dovolenou | (1) atbrīvot no darba (2) piešķirt atvaļinājumu | — | — |
| cs-000572 | die Konserve | Konzervované jídlo | (1) konservi | — | — |
| cs-004585 | der Drehbleistift | Automatická tužka | (1) automātiskais zīmulis | — | — |
| cs-000083 | die Hirnzelle | Mozková buňka | (1) smadzeņu šūna | — | — |
| cs-002704 | die Dampfheizung | Parní vytápění | (1) tvaika apkure | — | — |
| cs-000157 | verheimlichen | Skrývat | (1) turēt slepenībā (2) slēpt | — | — |
| cs-000994 | die Geschwindigkeitsmessung | Měření rychlosti | (1) ātruma mērījums | — | — |
| cs-004572 | überhören | Předstírat, že neslyší | (1) izlikties nedzirdam (2) ne[sa]dzirdēt aiz neuzmanības | — | — |
| cs-001674 | durchbringen | Prosadit | (1) izšķērdēt (2) izārstēt (3) panākt (4) iznest cauri (5) izdabūt cauri | — | — |
| cs-005146 | formell | Otupělý | (1) stīvs (2) formāls (3) pieklājīgs (4) korekts | — | — |
| cs-001195 | stoßen | TAM | (1) grūst | Bitte stoß mich nicht. | lūdzu, negrūd mani. |
| cs-005150 | der Prüfer | Nesmysl | (1) auditors | — | — |
| cs-002607 | gedämpft | Potlačený | (1) apslāpēts (2) klusināts (3) sutināts | — | — |
| cs-002420 | beiwohnen | Být přítomen | (1) piedalīties (2) būt klāt | — | — |
| cs-000758 | fristlos | Bez výpovědní lhůty | (1) beztermiņa | — | — |
| cs-005149 | das Schließfach | Nůž brusle | (1) aizslēdzams nodalījums stacijas bagāžas glabātavā | — | — |
| cs-003870 | der Unfug | Pohoršlivé jednání | (1) piedauzīga rīcība (2) nebūšana (3) nedarbs | — | — |
| cs-001006 | freilich | Pouze | (1) tikai (2) bet (3) bez šaubām (4) protams | — | — |
| cs-001781 | die Demission | Odstoupení z funkce | (1) demisija (2) atkāpšanās no amata | — | — |
| cs-003581 | republikanisch | Republikový | (1) republikas (2) republikānisks | — | — |
| cs-002460 | der Anruf | Telefonát | (1) zvans | — | — |
| cs-004693 | der Umgang | Zacházení | (1) apiešanās | — | — |
| cs-004039 | drüben | Tam naproti | (1) tur pāri (2) otrā pusē | — | — |
| cs-001151 | der Pier | Molo | (1) mols | — | — |
| cs-001981 | die Miederwaren | Korzety | (1) krūšturi (2) korsetes | — | — |
| cs-000078 | der Grundriss | Plán | (1) plāns | — | — |
| cs-001382 | der Fluggast | Cestující [v letadle] | (1) [lidmašīnas] pasažieris | — | — |
| cs-000329 | zuwider | Být proti mysli | (1) nepatikt (2) pretēji (3) pret | Er handelte mir zuwider. | viņš rīkojās pret manu gribu. |
| cs-001279 | das Grundnahrungsmittel | Základní potraviny | (1) pārtikas pamatprodukts | — | — |
| cs-004126 | einigermaßen | Do jisté míry | (1) puslīdz | — | — |
| cs-002693 | sich erholen | Odpočívat | (1) atpūsties | — | — |
| cs-003708 | die Tapferkeit | Odvaha | (1) drošsirdība (2) drosme | — | — |
| cs-004718 | die Abmachung | Dohoda | (1) vienošanās | — | — |
| cs-001508 | sich ernähren | Živit se | (1) pārtikt | — | — |
| cs-003895 | die Radspur | Stopa kola | (1) riteņa sliede | — | — |
| cs-005141 | der Freitag | Pátek | (1) piektdiena | — | — |
| cs-005145 | das Verkehrsdelikt | Zásluhy | (1) satiksmes noteikumu pārkāpums | — | — |
| cs-004264 | entehren | Zbavit cti | (1) apkaunot (2) laupīt godu | — | — |
| cs-005147 | sich erheben | Spoléhat na | (1) sacelties (2) pacelties (3) piecelties | — | — |
| cs-002345 | der Binnenhandel | Vnitřní obchod | (1) iekšējā tirdzniecība | — | — |
| cs-001348 | absichtlich | Záměrně | (1) tīšām | — | — |
| cs-000437 | vielfach | Často | (1) bieži | — | — |
| cs-002461 | der Grenzbereich | Území na obou stranách hranice | (1) teritorija abpus robežai (2) robežzona (3) robežjosla | — | — |
| cs-000574 | der Laib | Bochník chleba | (1) klaips | — | — |
| cs-004489 | pfuschen | Ledabyle | (1) pavirši strādāt (2) neprasmīgi (3) slikti | — | — |
| cs-002790 | fein | Vynikající | (1) izsmalcināts (2) smalks | — | — |
| cs-000754 | maßlos | Nezměrný | (1) bezgalīgs (2) neizmērojams | — | — |
| cs-003592 | wie viel | Kolik | (1) cik | — | — |
| cs-004459 | sämtlich | Všichni [bez výjimky] | (1) pilnā sastāvā (2) visi [bez izņēmuma] | — | — |
| cs-003670 | der Hürdenlauf | Překážkový závod | (1) barjerskrējiens | — | — |
| cs-005139 | fragen | Ptát se | (1) jautāt | — | — |
| cs-005140 | frei | Volný | (1) brīvs | — | — |
| cs-003872 | das Telefonat | Telefonický rozhovor | (1) tālruņa saruna | — | — |
| cs-002560 | anmachen | Zapnout | (1) ieslēgt | Mach bitte das Licht an. | lūdzu, ieslēdz gaismu. |
| cs-003075 | vermitteln | Obstarat | (1) veicināt (2) sagādāt (3) būt par starpnieku | — | — |
| cs-002713 | überflüssig | Redundantní | (1) lieks | — | — |
| cs-003380 | das Konzept | Návrh | (1) plāns (2) uzmetums (3) koncepcija | — | — |
| cs-002546 | penibel | Pedantský | (1) pedantisks | — | — |
| cs-002198 | die Elementarregel | Základní pravidlo | (1) pamatlikums | — | — |
| cs-002658 | die Waschanlage | Zařízení na mytí aut | (1) automašīnu mazgāšanas iekārta | — | — |
| cs-001504 | der Geselle | Řemeslník, který složil zkoušku po škole | (1) amatnieks, kas pēc mācību laika nokārtojis eksāmenu (2) puisis (3) palīgs (4) zellis | — | — |
| cs-001449 | die Seenot | Nouze na moři | (1) avārijas situācija uz jūras | — | — |
| cs-001776 | das Leiden | Dlouhá a těžká nemoc | (1) ilga un smaga slimība | Er hat ein schweres Leiden. | viņam ir smaga slimība. |
| cs-000871 | dämpfen | Podusit | (1) sutināt (2) sautēt (3) tvaicēt (4) apslāpēt (5) klusināt | — | — |
| cs-004220 | seitwärts | Do strany | (1) uz sāniem | — | — |
| cs-001641 | durchmachen | Vyjmout | (1) pabeigt (2) izņemt (3) pārdzīvot | — | — |
| cs-002521 | der Sprengstoff | Explozivní | (1) sprāgstviela | — | — |
| cs-000465 | die Notwehr | Nutná obrana | (1) nepieciešamā aizsargāšanās | — | — |
| cs-004343 | klappen | Uspět | (1) izdoties | Hat alles geklappt? | vai viss izdevās? |
| cs-003891 | nachdrücklich | Rázný | (1) pārliecinoši (2) sparīgi (3) pārliecinošs (4) sparīgs (5) uzsvērts | — | — |
| cs-000483 | liegen lassen | Nechat ležet | (1) atstāt | — | — |
| cs-002115 | umziehen | Přestěhovat se | (1) pārvākties | — | — |
| cs-003241 | der Blindgänger | Projektil | (1) šāviņš (2) nesprādzis spridzeklis | — | — |
| cs-004118 | die Funkverbindung | Rádiové komunikace | (1) radiosakari | — | — |
| cs-003481 | das Firmenkapital | Kapitál firmy | (1) firmas kapitāls | — | — |
| cs-004022 | die Vermutung | Hypotéza | (1) hipotēze (2) pieņēmums | — | — |
| cs-000730 | aus | Zevnitř | (1) no | Ich komme aus Deutschland. | es esmu no Vācijas. |
| cs-002427 | sich verstecken | Schovat se | (1) paslēpties | — | — |
| cs-000025 | austreiben | Odstavit | (1) atradināt (2) izdzīt | — | — |
| cs-004398 | die Investition | Kapitálové investice | (1) ieguldīšana (2) kapitāla ieguldījums (3) investēšana (4) investīcija | — | — |
| cs-003852 | grässlich | Ošklivý | (1) nejauks (2) riebīgs (3) briesmīgs (4) drausmīgs | — | — |
| cs-002977 | der Samen | Semínko | (1) sēkla | — | — |
| cs-005142 | der Freund | Přítel | (1) draugs | — | — |
| cs-002446 | die Luftaufnahme | Letecká fotografie | (1) aerofotoattēls (2) gaisa fotogrāfija | — | — |
| cs-003649 | das Bordbuch | Lodní deník | (1) kuģa žurnāls | — | — |
| cs-005148 | abgetan | Znevažující | (1) nokārtots (2) izbeigts | — | — |
| cs-005144 | frisch | Čerstvý | (1) svaigs | — | — |
| cs-001091 | erhaben | Ušlechtilý | (1) izcils (2) cildens (3) cēls (4) dižens (5) dižs (6) izliekts (7) reljefs | — | — |
| cs-001944 | schaudern | [Za]třást se | (1) [no]drebēt (2) šausmināties | — | — |
| cs-003417 | mutieren | Mutovat | (1) mutēt | — | — |
| cs-004745 | aussetzen | podrobit | (1) stāties (2) iebilst (3) pakļaut (4) izlikt | — | — |
| cs-002164 | binnen | Uvnitř | (1) iekšpusē (2) laikā | — | — |
| cs-000288 | erforschen | Zjistit | (1) izdibināt (2) izpētīt | — | — |
| cs-002963 | der Motorsport | Motoristické sporty | (1) motosports | — | — |
| cs-004142 | das Postamt | Pošta | (1) pasts | — | — |
| cs-004439 | die Gegenrede | Námitka | (1) iebildums (2) ieruna | — | — |
| cs-003124 | haften | Být přilepený | (1) būt pielipušam (2) pielipt | — | — |
| cs-005143 | die Freundin | Přítelkyně | (1) draudzene | — | — |
| cs-000108 | hochwertig | Vysoce kvalitní | (1) augstvērtīgs | — | — |
| cs-004654 | die Berufsausbildung | Odborné vzdělání | (1) profesionālā izglītība | — | — |
