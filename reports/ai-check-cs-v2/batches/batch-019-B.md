HOW-TO: šo versiju B saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-019.csv (versija A).
Gemini -> ai-gemini/batch-019.csv (versija B).
ChatGPT -> ai-chatgpt/batch-019.csv (versija C).
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
| cs-001909 | der Poltergeist | Poltergeist | (1) poltergeists | — | — |
| cs-001107 | der Laufsteg | Molo na módní přehlídce | (1) mēle modes skatē | — | — |
| cs-003686 | entgegensetzen | Postavit proti | (1) likt pretī (2) nostādīt pretī | — | — |
| cs-001778 | die Dorfgemeinschaft | Vesnická komunita | (1) ciema iedzīvotāji | — | — |
| cs-005212 | der Juli | Červenec | (1) jūlijs | — | — |
| cs-005221 | sachkundig | Dovedný | (1) kompetents (2) lietpratīgs | — | — |
| cs-002664 | einreichen | Předložit | (1) iesniegt | — | — |
| cs-001698 | die Organspende | Darování orgánu k transplantaci | (1) orgāna došana transplantācijai | — | — |
| cs-004197 | überstehen | Vydržet | (1) izturēt nepatikšanas (2) pārciest | — | — |
| cs-005218 | die Aufenthaltsgenehmigung | Vyjasnění | (1) uzturēšanās atļauja | — | — |
| cs-003562 | belauschen | Odposlouchávat | (1) slepeni noklausīties | — | — |
| cs-000597 | das Hafenbecken | Přístavní vodní plocha | (1) ostas akvatorija | — | — |
| cs-002106 | begehren | Žádat | (1) kārot (2) iekārot (3) tīkot (4) pieprasīt (5) prasīt | — | — |
| cs-001621 | das Militär | Armáda | (1) armija (2) karaspēks | — | — |
| cs-003832 | heraufkommen | Dostat se nahoru | (1) tikt uz augšu (2) uznākt augšā | — | — |
| cs-001066 | abstellen | Odstavit | (1) atslēgt (2) novietot (3) nolikt | Ich stelle das Fahrrad ab. | es novietoju velosipēdu. |
| cs-005213 | der Juni | Červen | (1) jūnijs | — | — |
| cs-001991 | übersetzen | Přeložit | (1) tulkot | — | — |
| cs-004442 | der Gänsebraten | Pečená husa | (1) zoss cepetis | — | — |
| cs-000937 | anrichten | Způsobit | (1) nodarīt | — | — |
| cs-005220 | unterordnen | Vysvětlit | (1) pakļaut (2) pakārtot | — | — |
| cs-001457 | bewilligen | Udělit | (1) piešķirt (2) atvēlēt (3) atļaut | — | — |
| cs-000753 | der Atommüll | Radioaktivní odpad | (1) radioaktīvie atkritumi | — | — |
| cs-000043 | die Kostensteigerung | Zvýšení nákladů | (1) izmaksu paaugstināšana | — | — |
| cs-002402 | menschenscheu | Nespolečenský | (1) bikls (2) nesabiedrisks | — | — |
| cs-001068 | die Entziehungskur | Léčebný kurz pro alkoholiky nebo drogově závislé | (1) ārstniecības kurss alkoholiķiem vai narkomāniem | — | — |
| cs-000603 | durchschlagen | Přecedit | (1) izsist caurumu (2) izsisties cauri (3) izlaist caur sietu (4) izkāst | — | — |
| cs-001740 | senkrecht | Vertikální | (1) vertikāls | — | — |
| cs-005216 | kennen | Znát | (1) pazīt | Ich kenne ihn. | Es viņu pazīstu. |
| cs-002698 | der Staffellauf | Štafetový závod | (1) stafetes skrējiens | — | — |
| cs-003054 | haben | Mám | (1) man ir | Ich habe ein Auto. | man ir automašīna. |
| cs-003758 | die Machtgier | Touha po moci | (1) varaskāre | — | — |
| cs-000932 | der Funker | Radista | (1) radists (2) radiotelegrāfists | — | — |
| cs-003486 | unbegreiflich | Nevyzpytatelný | (1) nesaprotams (2) neaptverams | — | — |
| cs-003518 | festlegen | Určit | (1) noteikt | Wir legen den Termin fest. | mēs nosakām termiņu. |
| cs-001271 | das Lochband | Děrná páska | (1) perfolente | — | — |
| cs-000338 | durchgreifend | Radikální | (1) radikāls | — | — |
| cs-002067 | stupid | Hloupý | (1) stulbs | — | — |
| cs-005219 | die Verhandlungen | Zásluhy | (1) sarunas | — | — |
| cs-004179 | um | V (čas) | (1) pulksten (2) ap | Ich komme um acht Uhr. | es atnākšu pulksten astoņos. |
| cs-000335 | der Scheidungsgrund | Důvod k rozvodu | (1) šķiršanās iemesls | — | — |
| cs-004723 | nachahmen | Někoho napodobovat | (1) atdarināt kādu | — | — |
| cs-001645 | kläglich | Ubohý | (1) nožēlojams | — | — |
| cs-003759 | die Führerrolle | Vedoucí role | (1) vadošā loma | — | — |
| cs-002744 | das Flussbett | Říční koryto | (1) gultne | — | — |
| cs-003469 | die Dattel | Datum | (1) datele | — | — |
| cs-002792 | die Sitten | Zvyky | (1) paražas | — | — |
| cs-002688 | geisteskrank | Duševně nemocný | (1) garīgi slims | — | — |
| cs-000150 | die Regenpfütze | Louže | (1) peļķe | — | — |
| cs-005211 | jemand | Někdo | (1) kāds | — | — |
| cs-003391 | der Damm | Přehrada | (1) dzelzceļa uzbērums (2) aizsprosts (3) dambis | — | — |
| cs-004516 | ausströmen | Vyzařovat | (1) izstarot (2) izplūst (3) iztecēt | — | — |
| cs-000010 | der Durchschnittsmensch | Průměrný člověk | (1) vidusmēra cilvēks | — | — |
| cs-005222 | die Straßenkreuzung | Kvalita | (1) ielu krustojums | — | — |
| cs-000165 | der Narkosearzt | Lékař anesteziolog | (1) ārsts anesteziologs | — | — |
| cs-002775 | der Possen | Hrubý žert | (1) rupjš joks (2) joku luga (3) farss | — | — |
| cs-000106 | gefällig | Milý | (1) laipns (2) iztapīgs (3) pakalpīgs (4) patīkams | — | — |
| cs-000172 | verständigen | Oznámit | (1) paziņot (2) informēt | — | — |
| cs-000577 | erkämpfen | Vyhrát | (1) izcīnīt | — | — |
| cs-004623 | die Wegwerfware | Jednorázový předmět | (1) vienreizējās lietošanas priekšmets | — | — |
| cs-002059 | der Jugendliche | Mladistvý | (1) jaunietis | — | — |
| cs-001038 | blähen | Nafouknout | (1) uzpūst (2) piepūst (3) pūst | — | — |
| cs-002040 | der Hausherr | Bavič | (1) namatēvs (2) mājastēvs | — | — |
| cs-004228 | die Vollversammlung | Plénum | (1) ģenerālā asambleja (2) pilnsapulce (3) plēnums | — | — |
| cs-002101 | höher | Výše | (1) augstāk (2) augstāks | — | — |
| cs-003628 | umkreisen | Spustit | (1) riņķot (2) laisties (3) lidināties (4) aplenkt (5) ielenkt | — | — |
| cs-000129 | die Berühmtheit | Sláva | (1) slava | Er träumt von Berühmtheit. | viņš sapņo par slavu. |
| cs-001516 | der Blutalkohol | Množství alkoholu v krvi | (1) alkohola daudzums asinīs | — | — |
| cs-003584 | die Gesinnung | Přesvědčení | (1) noskaņojums (2) uzskati | — | — |
| cs-002534 | das Reibeisen | Kovové nebo plastové struhadlo | (1) metāla vai plastmasas rīve | — | — |
| cs-001202 | vom | Z | (1) no | Ich komme vom Bahnhof. | es nāku no stacijas. |
| cs-002136 | aussprechen | Vyjádřit | (1) izteikt | — | — |
| cs-002924 | dürsten | Mít žízeň | (1) alkt (2) būt izslāpušam (3) slāpt | — | — |
| cs-002053 | dämmern | Rozednívat se | (1) svīst gaisma (2) aust (3) satumst (4) krēslot | — | — |
| cs-000238 | übertragen | Vysílat rozhlasem | (1) [pār]tulkot (2) pārraidīt pa radio (3) pārnēsāt lipīgās slimības (4) pārnest | — | — |
| cs-003203 | gedeihen | Podařit se | (1) plaukt (2) zelt (3) izdoties (4) labi padoties | — | — |
| cs-001520 | die Gewichtseinheit | Jednotka hmotnosti | (1) svara mērvienība | Kilogramm ist eine Gewichtseinheit. | kilograms ir svara mērvienība. |
| cs-002441 | das Unternehmen | Společnost | (1) pasākums (2) uzņēmums | — | — |
| cs-001607 | auszeichnen | Ocenit | (1) izcelties (2) piešķirt (3) apbalvot | — | — |
| cs-001228 | die Affäre | Milostný poměr | (1) mīlas dēka (2) afēra | — | — |
| cs-000974 | platzen | Prasknout | (1) pārsprāgt | — | — |
| cs-005214 | kaufen | Koupit | (1) pirkt | — | — |
| cs-001684 | die Hunderasse | Plemeno psa | (1) suņu suga | — | — |
| cs-002958 | sich verändern | Změnit se | (1) mainīties | — | — |
| cs-005217 | geistesschwach | Do jisté míry | (1) plānprātīgs (2) garā vājš | — | — |
| cs-002244 | luftdicht | Hermetický | (1) hermētisks (2) gaisnecaurlaidīgs | — | — |
| cs-003815 | quellen | Nasáknout | (1) piebriest (2) piemirkt (3) izmirkt (4) iztecēt (5) izplūst | — | — |
| cs-004206 | schmollen | Trucovat | (1) gražoties | — | — |
| cs-002783 | sich erweisen | Prokázat se jako | (1) izrādīties par | — | — |
| cs-001376 | rinnen | Proudit | (1) tecēt | — | — |
| cs-000763 | verkommen | Upadat | (1) paklīst (2) pagrimt (3) panīkt | — | — |
| cs-003552 | die Leistungsfähigkeit | Kapacita | (1) jauda (2) ražīgums (3) darbaspējas | — | — |
| cs-004083 | das Camp | Kemp se stany nebo dřevěnými chatkami | (1) nometne ar teltīm vai koka mājiņām | — | — |
| cs-003817 | der Urheber | Iniciátor | (1) autors (2) iniciators (3) ierosinātājs | — | — |
| cs-005215 | der Keks | Sušenka | (1) cepums | — | — |
| cs-004344 | die Textilwaren | Textilní zboží | (1) tekstilpreces | — | — |
| cs-003720 | der Verdruss | Zklamání | (1) īgnums (2) sarūgtinājums (3) nepatika | — | — |
| cs-000187 | die Nichtbeachtung | Nedodržení | (1) ignorēšana (2) neievērošana | — | — |
| cs-000134 | sich gedulden | Být trpělivý | (1) paciesties | — | — |
| cs-000895 | ziemlich | Docela | (1) diezgan | — | — |
