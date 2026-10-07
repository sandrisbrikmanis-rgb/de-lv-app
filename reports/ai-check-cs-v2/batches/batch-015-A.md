HOW-TO: šo versiju A saņem Gemini.
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
| cs-001547 | absondern | Izolovat | (1) atdalīt (2) izolēt (3) izdalīt | — | — |
| cs-001908 | fernstudieren | Studovat dálkově | (1) studēt neklātienē | — | — |
| cs-003499 | bisweilen | Čas od času | (1) dažreiz (2) brīžiem (3) reizēm | — | — |
| cs-004443 | links | Levý | (1) pa kreisi (2) kreisais | — | — |
| cs-001750 | das Fleischgericht | Masový pokrm | (1) gaļas ēdiens | — | — |
| cs-002162 | durchschauen | Prozřít | (1) redzēt cauri (2) atklāt | — | — |
| cs-002032 | annähernd | Přibližně | (1) aptuvens (2) aptuveni | — | — |
| cs-000555 | ausspannen | odloudit partnera | (1) atņemt partneri (2) atpūsties (3) izjūgt | — | — |
| cs-003320 | vierzehnte | Čtrnáctý | (1) četrpadsmitais | — | — |
| cs-003722 | der Gründonnerstag | Zelený čtvrtek před Velikonocemi | (1) zaļā Ceturtdiena pirms Lieldienām | — | — |
| cs-001034 | die Webadresse | Internetová adresa | (1) interneta adrese | — | — |
| cs-000119 | verpfänden | Zastavit | (1) ieķīlāt | — | — |
| cs-000195 | der Landsmann | Obyvatel kraje | (1) tautietis (2) novadnieks | — | — |
| cs-005167 | die Gesundheit | Zdraví | (1) veselība | — | — |
| cs-003088 | die Ratenzahlung | Platba ve splátkách | (1) nomaksa pa daļām | — | — |
| cs-000525 | der Plast | Plast | (1) plastmasa | — | — |
| cs-001538 | die Deutung | Vysvětlení | (1) iztulkošana (2) izskaidrojums (3) iztulkojums (4) izskaidrošana | — | — |
| cs-000803 | die Seifenoper | Telenovela | (1) televīzijas seriāls | — | — |
| cs-002840 | der Dumpingpreis | Dumpingová cena | (1) dempinga cena | — | — |
| cs-005164 | das Gesicht | Tvář | (1) seja | — | — |
| cs-001714 | der Umlauf | Kroužení | (1) riņķošana (2) cirkulācija | — | — |
| cs-005170 | die Nachsicht | Šance | (1) iecietība (2) sapratne | — | — |
| cs-002749 | das Brettsegeln | Windsurfing | (1) vindsērfings | — | — |
| cs-005173 | die Auszeichnung | Jméno | (1) apbalvojums (2) goda zīme (3) apbalvošana | — | — |
| cs-003858 | das Gut | Vlastnictví | (1) īpašums | Das Gut liegt außerhalb der Stadt. | muiža atrodas ārpus pilsētas. |
| cs-001798 | der Innenarchitekt | Interiérový architekt | (1) iekštelpu arhitekts | — | — |
| cs-002685 | mehren | Zvyšovat | (1) vairot | — | — |
| cs-002636 | der Grimm | Hněv | (1) niknums (2) piktums (3) lielas dusmas | — | — |
| cs-004642 | der Antritt | Převzetí úřadu | (1) stāšanās amatā | — | — |
| cs-002798 | dämpfen | Potlačit | (1) apslāpēt (2) tvaicēt (3) sautēt (4) sutināt (5) klusināt | — | — |
| cs-005171 | sich verzögern | Spoléhat na | (1) aizkavēties (2) novilcināties | — | — |
| cs-003361 | wildern | Zapojit se do pytláctví | (1) nodarboties ar malumedniecību | — | — |
| cs-004498 | der Blitzableiter | Bleskosvod | (1) zibensnovedējs | — | — |
| cs-003489 | austreten | Přestat | (1) nomīt (2) izstāties (3) izmīt | — | — |
| cs-004073 | die Endstation | Konečná stanice | (1) galastacija | — | — |
| cs-003921 | münden | Vycházet | (1) ieplūst (2) iziet (3) izbeigties (4) ietecēt | — | — |
| cs-003508 | die Gehaltsabrechnung | Vyúčtování mzdy | (1) algas aprēķins | — | — |
| cs-000362 | der Gewerkschaftsbeitrag | Členský příspěvek odborům | (1) arodbiedrības biedru maksa | — | — |
| cs-000936 | das Rasierzeug | Příslušenství na holení | (1) skūšanās piederumi | — | — |
| cs-000402 | hänseln | Kvičet | (1) nerrot (2) kircināt | — | — |
| cs-001497 | der Untergang | Zhroucení | (1) norietēšana (2) bojāeja (3) sabrukums (4) riets | — | — |
| cs-000851 | pflegeleicht | Snadné na údržbu | (1) viegli kopjams | — | — |
| cs-005172 | missachten | Brát v úvahu | (1) neievērot | — | — |
| cs-003882 | einleuchten | Být srozumitelný | (1) būt saprotamam (2) būt skaidram | — | — |
| cs-004618 | streben | O něco usilovat | (1) tiekties pēc kaut kā | — | — |
| cs-000590 | gebrechlich | Zmrzačený | (1) sanīcis (2) gaudens (3) kroplīgs (4) pilns vainām (5) vārgs | — | — |
| cs-005165 | gestern | Včera | (1) vakar | — | — |
| cs-005174 | unbebaut | Odloučený | (1) neapstrādāts par zemi (2) neapbūvēts | — | — |
| cs-001670 | die Darminfektion | Střevní infekce | (1) zarnu infekcija | — | — |
| cs-002638 | die Konsequenz | Následek | (1) secība (2) secinājums (3) sekas (4) konsekvence | — | — |
| cs-000772 | der Flussarm | Říční rameno | (1) atteka | — | — |
| cs-000814 | der Spross | Dzin | (1) dzinums (2) pārn. pēcnācējs (3) atvase (4) bot. atvase | — | — |
| cs-003472 | scheitern | Rozbít se | (1) piedzīvot neveiksmi (2) izjukt | — | — |
| cs-001335 | der Bote | Vyslanec | (1) ziņnesis (2) sūtnis (3) vēstnesis | — | — |
| cs-000117 | dumm | Pošetilý | (1) muļķīgs (2) dumjš | — | — |
| cs-003979 | ergänzen | Doplnit | (1) papildināt | — | — |
| cs-004540 | überlegen | Promyslet | (1) apdomāt | — | — |
| cs-001282 | die Teilnarkose | Částečná anestezie | (1) daļēja narkoze | — | — |
| cs-000915 | rezeptfrei | Bez předpisu | (1) bez receptes | — | — |
| cs-004313 | selbstständig | Nezávislý | (1) patstāvīgs | — | — |
| cs-001743 | der Schaden | Ztráta | (1) zaudējums (2) bojājums | Am Auto ist ein Schaden. | automašīnai ir bojājums. |
| cs-001431 | übermitteln | Předat | (1) nodot (2) nosūtīt vēstuli | — | — |
| cs-000860 | ausbilden | Vyškolit | (1) apmācīt | — | — |
| cs-004420 | die Obstschale | Mísa na ovoce | (1) augļu trauks | — | — |
| cs-000390 | fälschlich | Pomýlený | (1) maldīgi (2) kļūdaini | — | — |
| cs-005166 | gesund | Zdravý | (1) vesels | — | — |
| cs-000861 | die Fußballweltmeisterschaft | Mistrovství světa ve fotbale | (1) pasaules meistarsacīkstes futbolā | — | — |
| cs-004710 | sättigen | [dobře] nasytit | (1) mielot (2) ķīm. piesātināt (3) [labi] paēdināt | — | — |
| cs-001537 | sich erkälten | Nastydnout | (1) saaukstēties | — | — |
| cs-000591 | das Leid | Utrpení | (1) ciešanas | — | — |
| cs-001359 | bekannt geben | Oznámit | (1) paziņot | — | — |
| cs-001315 | gefühllos | Necitlivý | (1) nejūtīgs | — | — |
| cs-004575 | entfallen | Vypadnout z paměti | (1) izkrist (2) aizmirsties | — | — |
| cs-001553 | bevorstehend | Nadcházející | (1) gaidāmais (2) nākamais | — | — |
| cs-003994 | verhältnismäßig | Poměrně | (1) samērā | — | — |
| cs-004686 | das Lenkrad | Volant auta | (1) automašīnas stūre | — | — |
| cs-000971 | hantieren | Jednat | (1) rīkoties (2) darboties ar ko | — | — |
| cs-002254 | zuwider | V rozporu s | (1) pretēji (2) nepatikt (3) pret | Er handelte mir zuwider. | viņš rīkojās pret manu gribu. |
| cs-000471 | die Hochzeitsfeier | Svatební oslava | (1) kāzu svinības | — | — |
| cs-003282 | die Berufsbezeichnung | Označení povolání | (1) amata nosaukums | — | — |
| cs-001419 | die Gesellschaftsordnung | Společenské uspořádání | (1) sabiedriskā iekārta | — | — |
| cs-001626 | pikiert | Dotčený | (1) aizskarts (2) sašutis (3) aizvainots | — | — |
| cs-004035 | rau | Ostrý | (1) raupjš (2) rupjš (3) aizsmacis (4) skarbs (5) nelaipns (6) neapstrādāts (7) nelīdzens | — | — |
| cs-000821 | die Muße | Chvíle volna | (1) brīvs laiks (2) vaļas brīdis | — | — |
| cs-002903 | erhaben | Reliéfní | (1) izliekts (2) dižs (3) dižens (4) cēls (5) cildens (6) izcils (7) reljefs | — | — |
| cs-005163 | genug | Dost | (1) pietiekami | — | — |
| cs-005169 | der Funkspruch | Vysílací stanice | (1) radiogramma | — | — |
| cs-003382 | das Tierkreiszeichen | Znamení zvěrokruhu | (1) zodiaka zīme | — | — |
| cs-003028 | die Vertretung | Substituce | (1) aizstāšana (2) pārstāvība (3) pārstāvēšana (4) aizvietošana | — | — |
| cs-002049 | die Länderkunde | Regionální geografie | (1) reģionālā ģeogrāfija | — | — |
| cs-000715 | die Kopfschmerzen | Bolest hlavy | (1) galvassāpes | — | — |
| cs-004174 | gutheißen | Odsouhlasit | (1) atzīt par labu | — | — |
| cs-001015 | unausgeglichen | Nevyvážený | (1) nelīdzsvarots | — | — |
| cs-004108 | sich frisieren | Česat se | (1) frizēties | — | — |
| cs-000241 | durchkreuzen | Překřížit | (1) pārvilkt krustu (2) šķērsot (3) izjaukt (4) pārsvītrot | — | — |
| cs-003534 | die Abrechnung | Vyrovnání | (1) norēķins | — | — |
| cs-002140 | sich versöhnen | Smířit se s | (1) samierināties ar | — | — |
| cs-001765 | der Müll | Odpadky | (1) atkritumi | — | — |
