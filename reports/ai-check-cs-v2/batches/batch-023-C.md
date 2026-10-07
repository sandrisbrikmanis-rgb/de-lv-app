HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-023.csv (versija B).
Gemini -> ai-gemini/batch-023.csv (versija C).
ChatGPT -> ai-chatgpt/batch-023.csv (versija A).
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
| cs-003799 | der Bon | Účtenka | (1) kases čeks ar preces cenu | — | — |
| cs-000107 | sich abwenden | Odvrátit se od | (1) novērsties no | — | — |
| cs-001658 | die Sonderausgabe | Mimořádné vydání známek | (1) marku speciālizlaidums (2) grāmatas speciālizdevums (3) laikraksta speciāl numurs | — | — |
| cs-001746 | das Rennauto | Závodní auto | (1) sacīkšu automašīna | — | — |
| cs-000279 | entkräften | Oslabit | (1) atspēkot (2) apgāzt (3) atņemt spēku (4) novājināt | — | — |
| cs-003901 | beiläufig | Náhodný | (1) starp citu (2) garām ejot (3) nejaušs (4) gadījuma | — | — |
| cs-004072 | der Verwandte | Příbuzný | (1) radinieks | Er ist ein enger Verwandter. | viņš ir tuvs radinieks. |
| cs-005266 | die Besuchszeit | Obránce | (1) apmeklētāju laiks | — | — |
| cs-002514 | der Hitzkopf | Prchlivec | (1) karstgalvis | — | — |
| cs-001806 | sich gewöhnen | Zvyknout si | (1) pierast | Ich gewöhne mich an die neue Arbeit. | es pierodu pie jaunā darba. |
| cs-002665 | lässig | Nenucené | (1) nepiespiests | — | — |
| cs-000853 | das Belieben | Libost | (1) vēlēšanās (2) patika (3) patikšana | — | — |
| cs-002683 | der Stoff | Tkanina | (1) materiāls (2) audums (3) viela | Der Stoff ist weich. | audums ir mīksts. |
| cs-003662 | das Abendgebet | Večerní modlitba | (1) vakara lūgšana | — | — |
| cs-003398 | eigenwillig | Tvrdohlavý | (1) stūrgalvīgs (2) patvarīgs (3) patvaļīgs (4) ietiepīgs | — | — |
| cs-000424 | missglücken | Nevydařit se | (1) neizdoties (2) neveikties | — | — |
| cs-003268 | das Luftgewehr | Pneumatická puška | (1) pneimatiskais ierocis | — | — |
| cs-001058 | der Gebrauch | Použití | (1) lietošana | — | — |
| cs-000448 | geistesschwach | Slabomyslný | (1) plānprātīgs (2) garā vājš | — | — |
| cs-001979 | verlaufen | Plynout | (1) ritēt (2) norisināties | — | — |
| cs-001400 | die Erkenntnis | Porozumění | (1) izpratne (2) atziņa | — | — |
| cs-001051 | ermutigen | Povzbudit | (1) iedrošināt | — | — |
| cs-005261 | leider | Bohužel | (1) diemžēl | — | — |
| cs-002252 | die Hühnerzucht | Chov drůbeže | (1) vistkopība | — | — |
| cs-002586 | das Rennen | Závod | (1) sacīkstes (2) skrējiens | — | — |
| cs-001613 | der Aufschnitt | Studené nářezy | (1) aukstie uzgriežamie | — | — |
| cs-001831 | verweigern | Odmítat | (1) atteikties (2) liegties | — | — |
| cs-002354 | die Gage | Honorář umělce | (1) mākslinieka honorārs | — | — |
| cs-004320 | gedenken | Mít v úmyslu | (1) atminēties (2) pieminēt (3) būt nodomājušam (4) atcerēties | — | — |
| cs-005264 | das Licht | Světlo | (1) gaisma | — | — |
| cs-005263 | letzte | Poslední | (1) pēdējais | — | — |
| cs-002347 | das Verkehrswesen | Doprava | (1) transports | — | — |
| cs-000467 | die Sorgfaltspflicht | Povinnost péče | (1) rūpības pienākums | — | — |
| cs-001780 | sich wundern | Divit se | (1) brīnīties | — | — |
| cs-001039 | voraussehen | Předpovídat | (1) paredzēt | — | — |
| cs-004634 | überwältigen | Překonat | (1) pārvarēt (2) pārspēt | — | — |
| cs-004345 | die Malerei | Malování | (1) glezniecība | — | — |
| cs-003716 | pokern | Hrát poker | (1) spēlēt pokeru | — | — |
| cs-004529 | der Premier | Ministerský předseda | (1) premjerministrs | — | — |
| cs-001379 | kneifen | Štípnout | (1) iekniebt | — | — |
| cs-000855 | die Glashütte | Sklárna | (1) stikla rūpnīca | — | — |
| cs-001830 | umständlich | Zatěžující | (1) apgrūtinošs (2) sarežģīts (3) ļoti sīks (4) pārāk plašs | — | — |
| cs-000844 | der Neuerer | Zlepšovatel | (1) novators | — | — |
| cs-001131 | das Fundbüro | Úřad ztrát a nálezů | (1) atrasto mantu birojs | — | — |
| cs-001367 | dumpf | Dusivý | (1) sasmacis (2) smacīgs (3) smags (4) nospiests (5) nomācošs (6) dobjš (7) apslāpēts | — | — |
| cs-002505 | undenkbar | Nepředstavitelný | (1) neiedomājams | — | — |
| cs-003987 | der Kabelkanal | Kanál kabelové televize | (1) kabeļtelevīzijas kanāls | — | — |
| cs-003026 | abtreten | Předat | (1) aiziet (2) atkāpties (3) atdot | — | — |
| cs-003336 | gelaunt | Ó | (1) omā | — | — |
| cs-005268 | sich einschmeicheln | Poradit se | (1) pieglai­moties (2) pielabināties | — | — |
| cs-001445 | flauschig | Načechraný | (1) pūkains | — | — |
| cs-002936 | die Großmut | Ušlechtilost | (1) augstsirdība | — | — |
| cs-002706 | die Trauung | Svatební obřad | (1) laulību ceremonija | — | — |
| cs-001036 | die Pacht | Pronájem | (1) noma | — | — |
| cs-001900 | der Unterhalt | Zásobovat | (1) apgādāšana (2) apgādība (3) apgāde | — | — |
| cs-003002 | die Durchschnittsleistung | Průměrný výkon | (1) viduvējs sniegums (2) caurmēra sniegums | — | — |
| cs-004674 | die Reparaturkosten | Náklady na opravu | (1) remonta izmaksas | — | — |
| cs-001672 | die Beschwerdeschrift | Písemná stížnost | (1) sūdzība | — | — |
| cs-003151 | immerfort | Neustále | (1) pastāvīgi | — | — |
| cs-001960 | die Devisen | Platební prostředky v cizí měně | (1) maksāšanas līdzekļi ārzemju valūtā | — | — |
| cs-000406 | scheiden | [Roz]dělit | (1) šķirt (2) sich sch. lassen (3) šķirties (4) izšķirties (5) [at]šķirt (6) atdalīt | — | — |
| cs-004626 | umschulen | Naučit lidi s jedním zaměstnáním jinému zaměstnání | (1) cilvēkiem ar kādu amatu iemācīt citu amatu (2) pārskolot | — | — |
| cs-005262 | lesen | Číst | (1) lasīt | — | — |
| cs-000985 | ebnen | Vyrovnat | (1) nogludināt (2) nolīdzināt | — | — |
| cs-003400 | hierdurch | S tím | (1) ar to (2) ar šo | — | — |
| cs-005267 | herunterkommen | Vyjít nahoru | (1) panīkt (2) pagrimt (3) nonākt lejā (4) nonīkt | — | — |
| cs-000694 | der Güteraustausch | Výměna zboží | (1) preču apmaiņa | — | — |
| cs-005270 | die Mühe | Místo setkání | (1) pūles | — | — |
| cs-004009 | der Schiffsverkehr | Lodní provoz | (1) kuģu satiksme | — | — |
| cs-004431 | sächlich | Střední rod | (1) ~es Geschlecht gram. (2) nekatrā dzimte | — | — |
| cs-005269 | beurteilen | Pozdravit | (1) vērtēt | — | — |
| cs-004482 | der Verschluss | Zámek | (1) aiztaisāmais (2) aizslēgs | — | — |
| cs-002440 | durchqueren | Přejít | (1) šķērsot | — | — |
| cs-003387 | halt! | Stůj! | (1) stāt! | — | — |
| cs-003522 | bedingungslos | Bez podmínek | (1) bez ierunām (2) bez nosacījumiem (3) bezierunu (4) beznosacījumu | — | — |
| cs-003950 | ansehen | Prohlížet | (1) apskatīt (2) noskatīties | Schau dir das an! | apskati šo! |
| cs-003770 | entnehmen | Vyjmout | (1) izņemt (2) secināt (3) ņemt (4) paņemt | — | — |
| cs-003845 | die Angel | Rybářský prut | (1) makšķere | — | — |
| cs-002430 | rätselhaft | Nepochopitelný | (1) neizprotams (2) mīklains | — | — |
| cs-002518 | ausweichend | neurčitý | (1) nenoteikts (2) izvairīgs | — | — |
| cs-002293 | schwärmen | Snít | (1) sapņot (2) aizrauties (3) jūsmot | — | — |
| cs-004296 | der Edelstein | Drahý kámen | (1) dārgakmens | — | — |
| cs-001568 | die Wasserheilanstalt | Vodoléčebné zařízení | (1) ūdensdziedniecības iestāde | — | — |
| cs-005260 | leicht | Snadný | (1) viegls | — | — |
| cs-001625 | sich fügen | Poslouchat | (1) pakļauties (2) pielāgoties | — | — |
| cs-000236 | benachrichtigen | Oznámit | (1) paziņot | — | — |
| cs-004445 | bringen | Odnést | (1) atnest | Ich bringe dir ein Buch. | Es tev atnesu grāmatu. |
| cs-002735 | bewährt | Bezpečný | (1) uzticams (2) pārbaudīts (3) drošs | — | — |
| cs-004138 | zu sein | Být uzavřen | (1) būt slēgtam | — | — |
| cs-005259 | die Lehrerin | Učitelka | (1) skolotāja | — | — |
| cs-005265 | sich umdrehen | Spoléhat na | (1) pagriezties | — | — |
| cs-004283 | die Weltanschauung | Pohled na svět | (1) pasaules uzskats | — | — |
| cs-004537 | der Dom | Rada | (1) katedrāle (2) doms | — | — |
| cs-002031 | einschulen | Přihlásit dítě do školy | (1) bērnu pierakstīt skolā | — | — |
| cs-001371 | das Hautjucken | Svědění kůže | (1) ādas nieze | — | — |
| cs-001988 | nachholen | Dohnat zameškané | (1) atgūt nokavēto | — | — |
| cs-003238 | die Krempe | Okraj klobouku | (1) cepures mala | — | — |
| cs-003275 | die Partei | Večírek | (1) partija (2) puse | Diese Partei gewann die Wahl. | šī partija uzvarēja vēlēšanās. |
| cs-001424 | das Defizit | Nedostatek | (1) deficīts (2) trūkums (3) iztrūkums | — | — |
| cs-004372 | der Lebenslauf | Životopis (CV) | (1) dzīves apraksts (CV) | — | — |
