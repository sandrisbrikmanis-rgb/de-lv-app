HOW-TO: šo versiju C saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-040.csv (versija A).
Gemini -> ai-gemini/batch-040.csv (versija B).
ChatGPT -> ai-chatgpt/batch-040.csv (versija C).
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
| cs-002981 | affig | Okázalý | (1) uzkrītošs (2) iedomīgs | — | — |
| cs-003515 | der Tadel | Napomenutí | (1) rājiens | — | — |
| cs-002897 | unwiderlegbar | Neoddiskutovatelný | (1) neapgāžams (2) neapstrīdams | — | — |
| cs-001820 | elementar | Základní | (1) elementārs | — | — |
| cs-002705 | die Schalldämmung | Tlumení hluku | (1) trokšņa slāpēšana | — | — |
| cs-003373 | sowie | stejně jako | (1) kā arī | Wir brauchen Milch sowie Brot. | mums vajag pienu, kā arī maizi. |
| cs-004386 | die Zuwendung | Příspěvek | (1) pabalsts | — | — |
| cs-005468 | warum | Proč | (1) kāpēc | — | — |
| cs-001808 | der Weinbau | Vinařství | (1) vīnkopība | — | — |
| cs-000589 | die Verwandte | Relativní | (1) radiniece | Sie ist eine entfernte Verwandte. | viņa ir tāla radiniece. |
| cs-000916 | jahrelang | Léta | (1) gadiem ilgi | — | — |
| cs-004161 | sich versehen | Přehlédnout se | (1) aizmirst (2) aprīkot ar | — | — |
| cs-000549 | sich umdrehen | Otočit se | (1) pagriezties | — | — |
| cs-005466 | warm | Teplý | (1) silts | — | — |
| cs-000746 | die Haltbarkeitsdauer | Doba trvanlivosti | (1) uzglabāšanas laiks | — | — |
| cs-004411 | darlegen | Nastínit | (1) izklāstīt (2) izskaidrot | — | — |
| cs-000807 | gesetzwidrig | Proti zákonu | (1) pretrunā ar likumu | — | — |
| cs-000410 | die Steuergelder | Všechny peníze, které vláda dostává na daních | (1) visa nauda, ko valsts saņem nodokļos | — | — |
| cs-003926 | sich erstrecken | Rozprostírat se | (1) izstiepties (2) izplesties (3) sniegties | — | — |
| cs-001043 | das Augenlid | Oční víčko | (1) acs plaksts | — | — |
| cs-005473 | der Götze | Modlářství | (1) elks | — | — |
| cs-002274 | hervorrufen | Způsobit | (1) radīt (2) modināt (3) izsaukt (4) izraisīt | — | — |
| cs-000795 | der Ernteertrag | Výnos sklizně | (1) raža | — | — |
| cs-002890 | der Bürge | Garant | (1) galvotājs (2) galvinieks | — | — |
| cs-001787 | der Panter | panter | (1) pantera | — | — |
| cs-002339 | dasjenige | Že | (1) tas | — | — |
| cs-003280 | gesetzlos | Nezákonný | (1) nelikumīgs | — | — |
| cs-002793 | die Bluttransfusion | Krevní transfuze | (1) asins pārliešana | — | — |
| cs-000013 | sich einschmeicheln | Vetřít se do přízně | (1) pielabināties (2) pieglai­moties | — | — |
| cs-005464 | der Wald | Les | (1) mežs | — | — |
| cs-002893 | das Jogging | Pomalý běh | (1) lēns skrējiens | — | — |
| cs-000735 | belästigen | Dotírat | (1) uzbāzties (2) apgrūtināt (3) uzmākties | — | — |
| cs-002004 | herbei | Sem | (1) šurp | — | — |
| cs-002563 | die Moosbeere | Brusinka | (1) dzērvene | — | — |
| cs-001224 | die Plakette | Odznak s nápisem | (1) piespraude ar uzrakstu | — | — |
| cs-003800 | die Lebenserwartung | Průměrná délka života | (1) vidējais dzīves ilgums | — | — |
| cs-001085 | der Segelflugsport | Plachtařství | (1) planierisms | — | — |
| cs-000809 | erheblich | Pozoruhodný | (1) svarīgs (2) ievērojams | — | — |
| cs-004351 | die Eheberatung | Manželské poradenství | (1) ģimenes konsultācija | — | — |
| cs-004275 | das Schmerzensgeld | Odškodnění za újmu | (1) sāpju nauda | — | — |
| cs-002870 | die Schlange | Veslovat | (1) čūska (2) rinda | Im Wald sehe ich eine Schlange. | mežā es redzu čūsku. |
| cs-002079 | zurückweisen | Odmítnout | (1) noraidīt | — | — |
| cs-000535 | der Genforscher | Výzkumník genů | (1) gēnu pētnieks | — | — |
| cs-001148 | das Gestell | Vzpěra | (1) šasija (2) statīvs (3) statnis | — | — |
| cs-001914 | die Kapazität | Objem | (1) tilpums (2) ietilpība (3) ražotspēja (4) jauda | — | — |
| cs-003269 | geraten | Narazit | (1) padoties (2) izdoties (3) atsisties (4) nonākt (5) nokļūt | — | — |
| cs-003825 | der Lufthafen | Letiště | (1) lidosta | — | — |
| cs-002591 | mieten | Pronajmout si | (1) īrēt | — | — |
| cs-001081 | abbuchen | Odepsat peníze z účtu | (1) norakstīt naudu no konta | — | — |
| cs-002836 | die Gegenwart | Současnost | (1) tagadne | — | — |
| cs-002805 | das Weidenkätzchen | Jehnědy vrby | (1) pūpols | — | — |
| cs-000788 | unterstellen | Obviňovat | (1) piedēvēt bez pamata (2) pārmest | Man unterstellt mir schlechte Absichten. | Man pārmet man sliktu nodomu. |
| cs-000634 | der Bedarfsartikel | Konzumní zboží | (1) plaša patēriņa prece | — | — |
| cs-002352 | einatmen | Inhalovat | (1) ieelpot | — | — |
| cs-001899 | anbrechen | Začít | (1) uzlauzt (2) sākties | — | — |
| cs-000633 | das Genmaterial | Genetický materiál | (1) ģenētiskais materiāls | — | — |
| cs-005471 | anstiften | Založit | (1) pamudināt | — | — |
| cs-004647 | das Einfamilienhaus | Rodinný dům | (1) vienģimenes māja | Sie wohnen in einem Einfamilienhaus. | viņi dzīvo vienģimenes mājā. |
| cs-004573 | sich beschränken | Omezit se na | (1) ierobežoties ar | — | — |
| cs-000428 | die Befangenheit | Podjatost | (1) apmulsums (2) samulsums | — | — |
| cs-000220 | ertönen | Rozeznít se | (1) ieskanēties (2) atskanēt | — | — |
| cs-001633 | das Erachten | Mínění | (1) ieskats (2) domas | — | — |
| cs-000890 | die Kammer | Pokoj | (1) kambaris | — | — |
| cs-002587 | raffiniert | Mazaný | (1) rafinēts (2) viltīgs | — | — |
| cs-001484 | entbinden | Porodit | (1) dzemdēt (2) atbrīvot (3) atsvabināt | — | — |
| cs-003798 | auf die Schulter klopfen | Poklepat na rameno | (1) uzsist uz pleca | — | — |
| cs-002325 | ersticken | Potlačit | (1) apslāpēt (2) apspiest (3) nomākt (4) noslāpt (5) nosmakt (6) noslāpēt (7) nosmacēt | — | — |
| cs-003040 | der Erdsatellit | Umělá družice Země | (1) mākslīgais Zemes pavadonis | — | — |
| cs-004399 | bezwingen | Porazit | (1) savaldīt (2) pārvarēt (3) uzveikt | — | — |
| cs-003757 | schlau | Mazaný | (1) viltīgs | — | — |
| cs-000575 | vorzeitig | Předčasně nastalý | (1) pāragrs (2) priekšlaicīgs | — | — |
| cs-000411 | die Aussicht | Šance | (1) izredzes | Die Aussicht auf Erfolg ist gut. | izredzes uz panākumiem ir labas. |
| cs-001745 | die Betäubung | Znecitlivění | (1) narkoze (2) anestēzija (3) apdullināšana (4) apdullums | — | — |
| cs-004112 | das Wettschwimmen | Plavecký závod | (1) peldēšanas sacīkstes | — | — |
| cs-002368 | treuherzig | Srdečný | (1) sirsnīgs (2) valsirdīgs | — | — |
| cs-002848 | besichtigen | Prohlédnout si | (1) apskatīt | — | — |
| cs-000793 | der Hausrat | Život | (1) iedzīve | — | — |
| cs-002869 | verseuchen | Znečišťovat | (1) piesārņot | — | — |
| cs-005472 | das Reich | Pole | (1) impērija (2) valsts | — | — |
| cs-003424 | das Mousepad | Podložka pod myš | (1) peles paliktnis | — | — |
| cs-005465 | wann | Kdy | (1) kad | — | — |
| cs-001469 | der Notstand | Katastrofální stav | (1) izņēmuma stāvoklis (2) katastrofāls stāvoklis | — | — |
| cs-001134 | fremd | Neznámý | (1) nepazīstams (2) svešs | — | — |
| cs-005469 | vollkommen | Zcela | (1) pavisam (2) pilnīgs (3) pilnīgi | — | — |
| cs-005474 | der Hackbraten | Mrazicí přihrádka | (1) maltas gaļas cepetis | — | — |
| cs-003625 | pfänden | Zabavit | (1) aprakstīt mantu (2) apķīlāt | — | — |
| cs-002233 | die Eintracht | Jednota | (1) saticība (2) saderība (3) vienprātība (4) saskaņa | — | — |
| cs-004711 | kündigen | Ukončit práci | (1) uzteikt darbu | Ich habe meinen Job gekündigt. | es uzteicu darbu. |
| cs-005470 | die Elementarkenntnisse | Základní koncept | (1) pamatzināšanas | — | — |
| cs-004031 | bedürfen | Být nezbytný | (1) vajadzēt (2) būt nepieciešamam | — | — |
| cs-004564 | das Verfahren | Případ | (1) paņēmiens (2) metode (3) jur. process (4) lieta (5) rīcība (6) izturēšanās | — | — |
| cs-003296 | eingrenzen | Vymezovat | (1) ierobežot (2) norobežot | — | — |
| cs-003933 | nutzbar | Použitelný | (1) izmantojams | — | — |
| cs-005463 | der Vorname | Křestní jméno | (1) vārds | — | — |
| cs-002042 | der Raumausstatter | Interiérový designér | (1) interjerists | — | — |
| cs-002176 | die Fernsehsendung | Televizní show | (1) televīzijas raidījums | — | — |
| cs-004444 | winden | Plést | (1) pīt (2) vīt (3) tīt | — | — |
| cs-005467 | warten | Čekat | (1) gaidīt | — | — |
| cs-004200 | der Kinderschänder | Pachatel sexuálního zneužívání dětí | (1) pedofils | — | — |
| cs-001384 | in Stand | V pořádku | (1) kārtībā | — | — |
