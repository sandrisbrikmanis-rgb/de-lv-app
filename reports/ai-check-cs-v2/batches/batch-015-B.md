HOW-TO: šo versiju B saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-015.csv (versija C).
Gemini -> ai-gemini/batch-015.csv (versija A).
ChatGPT -> ai-chatgpt/batch-015.csv (versija B).
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
| cs-005168 | das Getränk | Nápoj | (1) dzēriens | — | — |
| cs-001142 | klarstellen | Objasnit | (1) paskaidrot | — | — |
| cs-001547 | absondern | Izolovat | (1) izolēt (2) atdalīt (3) izdalīt | — | — |
| cs-001908 | fernstudieren | Studovat dálkově | (1) studēt neklātienē | — | — |
| cs-003499 | bisweilen | Čas od času | (1) brīžiem (2) dažreiz (3) reizēm | — | — |
| cs-004443 | links | Levý | (1) kreisais (2) pa kreisi | — | — |
| cs-001750 | das Fleischgericht | Masový pokrm | (1) gaļas ēdiens | — | — |
| cs-002162 | durchschauen | Prozřít | (1) atklāt (2) redzēt cauri | — | — |
| cs-002032 | annähernd | Přibližně | (1) aptuveni (2) aptuvens | — | — |
| cs-000555 | ausspannen | odloudit partnera | (1) atpūsties (2) atņemt partneri (3) izjūgt | — | — |
| cs-003320 | vierzehnte | Čtrnáctý | (1) četrpadsmitais | — | — |
| cs-003722 | der Gründonnerstag | Zelený čtvrtek před Velikonocemi | (1) zaļā Ceturtdiena pirms Lieldienām | — | — |
| cs-001034 | die Webadresse | Internetová adresa | (1) interneta adrese | — | — |
| cs-000119 | verpfänden | Zastavit | (1) ieķīlāt | — | — |
| cs-000195 | der Landsmann | Obyvatel kraje | (1) novadnieks (2) tautietis | — | — |
| cs-005167 | die Gesundheit | Zdraví | (1) veselība | — | — |
| cs-003088 | die Ratenzahlung | Platba ve splátkách | (1) nomaksa pa daļām | — | — |
| cs-000525 | der Plast | Plast | (1) plastmasa | — | — |
| cs-001538 | die Deutung | Vysvětlení | (1) iztulkojums (2) izskaidrojums (3) iztulkošana (4) izskaidrošana | — | — |
| cs-000803 | die Seifenoper | Telenovela | (1) televīzijas seriāls | — | — |
| cs-002840 | der Dumpingpreis | Dumpingová cena | (1) dempinga cena | — | — |
| cs-005164 | das Gesicht | Tvář | (1) seja | — | — |
| cs-001714 | der Umlauf | Kroužení | (1) cirkulācija (2) riņķošana | — | — |
| cs-005170 | die Nachsicht | Šance | (1) sapratne (2) iecietība | — | — |
| cs-002749 | das Brettsegeln | Windsurfing | (1) vindsērfings | — | — |
| cs-005173 | die Auszeichnung | Jméno | (1) goda zīme (2) apbalvojums (3) apbalvošana | — | — |
| cs-003858 | das Gut | Vlastnictví | (1) īpašums | Das Gut liegt außerhalb der Stadt. | muiža atrodas ārpus pilsētas. |
| cs-001798 | der Innenarchitekt | Interiérový architekt | (1) iekštelpu arhitekts | — | — |
| cs-002685 | mehren | Zvyšovat | (1) vairot | — | — |
| cs-002636 | der Grimm | Hněv | (1) piktums (2) niknums (3) lielas dusmas | — | — |
| cs-004642 | der Antritt | Převzetí úřadu | (1) stāšanās amatā | — | — |
| cs-002798 | dämpfen | Potlačit | (1) sutināt (2) sautēt (3) tvaicēt (4) apslāpēt (5) klusināt | — | — |
| cs-005171 | sich verzögern | Spoléhat na | (1) novilcināties (2) aizkavēties | — | — |
| cs-003361 | wildern | Zapojit se do pytláctví | (1) nodarboties ar malumedniecību | — | — |
| cs-004498 | der Blitzableiter | Bleskosvod | (1) zibensnovedējs | — | — |
| cs-003489 | austreten | Přestat | (1) izstāties (2) nomīt (3) izmīt | — | — |
| cs-004073 | die Endstation | Konečná stanice | (1) galastacija | — | — |
| cs-003921 | münden | Vycházet | (1) izbeigties (2) iziet (3) ieplūst (4) ietecēt | — | — |
| cs-003508 | die Gehaltsabrechnung | Vyúčtování mzdy | (1) algas aprēķins | — | — |
| cs-000362 | der Gewerkschaftsbeitrag | Členský příspěvek odborům | (1) arodbiedrības biedru maksa | — | — |
| cs-000936 | das Rasierzeug | Příslušenství na holení | (1) skūšanās piederumi | — | — |
| cs-000402 | hänseln | Kvičet | (1) kircināt (2) nerrot | — | — |
| cs-001497 | der Untergang | Zhroucení | (1) sabrukums (2) bojāeja (3) norietēšana (4) riets | — | — |
| cs-000851 | pflegeleicht | Snadné na údržbu | (1) viegli kopjams | — | — |
| cs-005172 | missachten | Brát v úvahu | (1) neievērot | — | — |
| cs-003882 | einleuchten | Být srozumitelný | (1) būt skaidram (2) būt saprotamam | — | — |
| cs-004618 | streben | O něco usilovat | (1) tiekties pēc kaut kā | — | — |
| cs-000590 | gebrechlich | Zmrzačený | (1) pilns vainām (2) kroplīgs (3) gaudens (4) sanīcis (5) vārgs | — | — |
| cs-005165 | gestern | Včera | (1) vakar | — | — |
| cs-005174 | unbebaut | Odloučený | (1) neapbūvēts (2) neapstrādāts par zemi | — | — |
| cs-001670 | die Darminfektion | Střevní infekce | (1) zarnu infekcija | — | — |
| cs-002638 | die Konsequenz | Následek | (1) sekas (2) secinājums (3) secība (4) konsekvence | — | — |
| cs-000772 | der Flussarm | Říční rameno | (1) atteka | — | — |
| cs-000814 | der Spross | Dzin | (1) atvase (2) pārn. pēcnācējs (3) dzinums (4) bot. atvase | — | — |
| cs-003472 | scheitern | Rozbít se | (1) izjukt (2) piedzīvot neveiksmi | — | — |
| cs-001335 | der Bote | Vyslanec | (1) sūtnis (2) ziņnesis (3) vēstnesis | — | — |
| cs-000117 | dumm | Pošetilý | (1) dumjš (2) muļķīgs | — | — |
| cs-003979 | ergänzen | Doplnit | (1) papildināt | — | — |
| cs-004540 | überlegen | Promyslet | (1) apdomāt | — | — |
| cs-001282 | die Teilnarkose | Částečná anestezie | (1) daļēja narkoze | — | — |
| cs-000915 | rezeptfrei | Bez předpisu | (1) bez receptes | — | — |
| cs-004313 | selbstständig | Nezávislý | (1) patstāvīgs | — | — |
| cs-001743 | der Schaden | Ztráta | (1) bojājums (2) zaudējums | Am Auto ist ein Schaden. | automašīnai ir bojājums. |
| cs-001431 | übermitteln | Předat | (1) nosūtīt vēstuli (2) nodot | — | — |
| cs-000860 | ausbilden | Vyškolit | (1) apmācīt | — | — |
| cs-004420 | die Obstschale | Mísa na ovoce | (1) augļu trauks | — | — |
| cs-000390 | fälschlich | Pomýlený | (1) kļūdaini (2) maldīgi | — | — |
| cs-005166 | gesund | Zdravý | (1) vesels | — | — |
| cs-000861 | die Fußballweltmeisterschaft | Mistrovství světa ve fotbale | (1) pasaules meistarsacīkstes futbolā | — | — |
| cs-004710 | sättigen | [dobře] nasytit | (1) ķīm. piesātināt (2) mielot (3) [labi] paēdināt | — | — |
| cs-001537 | sich erkälten | Nastydnout | (1) saaukstēties | — | — |
| cs-000591 | das Leid | Utrpení | (1) ciešanas | — | — |
| cs-001359 | bekannt geben | Oznámit | (1) paziņot | — | — |
| cs-001315 | gefühllos | Necitlivý | (1) nejūtīgs | — | — |
| cs-004575 | entfallen | Vypadnout z paměti | (1) aizmirsties (2) izkrist | — | — |
| cs-001553 | bevorstehend | Nadcházející | (1) nākamais (2) gaidāmais | — | — |
| cs-003994 | verhältnismäßig | Poměrně | (1) samērā | — | — |
| cs-004686 | das Lenkrad | Volant auta | (1) automašīnas stūre | — | — |
| cs-000971 | hantieren | Jednat | (1) darboties ar ko (2) rīkoties | — | — |
| cs-002254 | zuwider | V rozporu s | (1) nepatikt (2) pretēji (3) pret | Er handelte mir zuwider. | viņš rīkojās pret manu gribu. |
| cs-000471 | die Hochzeitsfeier | Svatební oslava | (1) kāzu svinības | — | — |
| cs-003282 | die Berufsbezeichnung | Označení povolání | (1) amata nosaukums | — | — |
| cs-001419 | die Gesellschaftsordnung | Společenské uspořádání | (1) sabiedriskā iekārta | — | — |
| cs-001626 | pikiert | Dotčený | (1) sašutis (2) aizskarts (3) aizvainots | — | — |
| cs-004035 | rau | Ostrý | (1) neapstrādāts (2) nelaipns (3) skarbs (4) aizsmacis (5) rupjš (6) raupjš (7) nelīdzens | — | — |
| cs-000821 | die Muße | Chvíle volna | (1) vaļas brīdis (2) brīvs laiks | — | — |
| cs-002903 | erhaben | Reliéfní | (1) izcils (2) cildens (3) cēls (4) dižens (5) dižs (6) izliekts (7) reljefs | — | — |
| cs-005163 | genug | Dost | (1) pietiekami | — | — |
| cs-005169 | der Funkspruch | Vysílací stanice | (1) radiogramma | — | — |
| cs-003382 | das Tierkreiszeichen | Znamení zvěrokruhu | (1) zodiaka zīme | — | — |
| cs-003028 | die Vertretung | Substituce | (1) pārstāvēšana (2) pārstāvība (3) aizstāšana (4) aizvietošana | — | — |
| cs-002049 | die Länderkunde | Regionální geografie | (1) reģionālā ģeogrāfija | — | — |
| cs-000715 | die Kopfschmerzen | Bolest hlavy | (1) galvassāpes | — | — |
| cs-004174 | gutheißen | Odsouhlasit | (1) atzīt par labu | — | — |
| cs-001015 | unausgeglichen | Nevyvážený | (1) nelīdzsvarots | — | — |
| cs-004108 | sich frisieren | Česat se | (1) frizēties | — | — |
| cs-000241 | durchkreuzen | Překřížit | (1) izjaukt (2) šķērsot (3) pārvilkt krustu (4) pārsvītrot | — | — |
| cs-003534 | die Abrechnung | Vyrovnání | (1) norēķins | — | — |
| cs-002140 | sich versöhnen | Smířit se s | (1) samierināties ar | — | — |
| cs-001765 | der Müll | Odpadky | (1) atkritumi | — | — |
