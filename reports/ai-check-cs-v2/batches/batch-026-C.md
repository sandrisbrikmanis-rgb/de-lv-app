HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-026.csv (versija B).
Gemini -> ai-gemini/batch-026.csv (versija C).
ChatGPT -> ai-chatgpt/batch-026.csv (versija A).
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
| cs-000290 | die Heilkunde | Léčba | (1) medicīna (2) ārstniecība | — | — |
| cs-001412 | das Schlagwort | Výstižné slovo | (1) trāpīgs vārds (2) lozungs | — | — |
| cs-002510 | vorder | Přední | (1) priekšējs | — | — |
| cs-001982 | einbürgern | Udělit občanství | (1) iesakņoties (2) piešķirt pilsoņa tiesības (3) ieviesties | — | — |
| cs-002152 | die Posse | Hrubý žert | (1) rupjš joks (2) farss (3) joku luga | — | — |
| cs-004366 | sich herausstellen | Ukázat být | (1) izrādīties par | — | — |
| cs-001811 | zuerst | Nejprve | (1) vispirms | — | — |
| cs-004584 | indessen | Mezitím | (1) pa to laiku | — | — |
| cs-005306 | die Prüfzeit | Vysoká škola | (1) pārbaudes laiks | — | — |
| cs-003803 | der Vorsprung | Nadřazenost | (1) pārsvars (2) izcilnis (3) pārākums | — | — |
| cs-002088 | rückständig | Po splatnosti | (1) atpalicis (2) nokavēts par maksājumu | — | — |
| cs-001116 | konjugieren | Časovat sloveso | (1) locīt darbības vārdu | — | — |
| cs-001260 | beispiellos | Bezprecedentní | (1) tāds, kas nav ne ar ko salīdzināms (2) nebijis (3) neredzēts | — | — |
| cs-005305 | der Segelflieger | Plachtařství | (1) planierists | — | — |
| cs-001289 | das Heizkraftwerk | Tepelná elektrárna | (1) termoelektrostacija | — | — |
| cs-001115 | der Aufwand | Úsilí | (1) pūles | Der Aufwand ist zu groß. | pūles ir pārāk lielas. |
| cs-001928 | der Drang | Nutkání | (1) dziņa (2) tieksme | — | — |
| cs-001157 | der Schlager | Hit | (1) hīts | — | — |
| cs-001938 | der Vorbehalt | Podmínka | (1) nosacījums | — | — |
| cs-003556 | edel | Šlechtický | (1) dižciltīgs (2) cēls (3) cildens | — | — |
| cs-003371 | der Güterversand | Odeslání zboží | (1) preču nosūtīšana | — | — |
| cs-001430 | tatsächlich | Ve skutečnosti | (1) patiesībā | — | — |
| cs-004548 | die Erwachsenenbildung | Vzdělávání dospělých | (1) pieaugušo izglītība | — | — |
| cs-000828 | das Versuchsgelände | Zkušební areál | (1) izmēģinājumu poligons | — | — |
| cs-002370 | erringen | Vyhrát | (1) izcīnīt | — | — |
| cs-002988 | machtgierig | Lačný po moci | (1) varaskārs | — | — |
| cs-003459 | der Werkteil | Součást | (1) detaļa | — | — |
| cs-001121 | das Bildnis | Portrét | (1) attēls (2) ģīmetne (3) portrets | — | — |
| cs-005299 | die Musik | Hudba | (1) mūzika | — | — |
| cs-002952 | das Gefüge | Sestava | (1) savienojums (2) salaidums (3) struktūra (4) uzbūve | — | — |
| cs-000939 | durchstellen | Připojit telefonní rozhovor | (1) savienot tālruņa sarunu | — | — |
| cs-005296 | der Morgen | ráno | (1) rīts | Guten Morgen! | Labrīt! |
| cs-000435 | der Nutzeffekt | Koeficient účinnosti | (1) lietderības koeficients | — | — |
| cs-003408 | die Spaltung | Rozštěpení | (1) [sa]šķelšanās (2) skaldīšana (3) [sa]šķelšana | — | — |
| cs-001554 | der Gedankenaustausch | Výměna nápadů | (1) domu apmaiņa | — | — |
| cs-002800 | der Leistungslohn | Úkolová mzda | (1) gabaldarba samaksa | — | — |
| cs-001915 | abziehen | Odečíst | (1) atņemt | — | — |
| cs-003244 | nachsitzen | Zůstat ve škole po hodinách jako trest | (1) skolā palikt pēc stundām par sodu | — | — |
| cs-002945 | hinreißen | Odnést | (1) aizgrābt (2) aizraut | — | — |
| cs-003604 | die Gardine | Okenní závěs | (1) logu aizkars | — | — |
| cs-000566 | die Goldmine | Zlatý důl | (1) zeltraktuve | — | — |
| cs-002759 | mitwirken | Jednat společně | (1) piedalīties (2) darboties līdzi | — | — |
| cs-000914 | das Abgeordnetenhaus | Poslanecká sněmovna | (1) parlaments | — | — |
| cs-003030 | anstatt ... zu | Místo | (1) tā vietā lai | Anstatt zu warten, rufe ich an. | tā vietā lai gaidītu, es zvanu. |
| cs-002622 | verweilen | Setrvat | (1) pakavēties | — | — |
| cs-000805 | bezähmen | Zkrotit | (1) savaldīt | — | — |
| cs-005303 | der Durchschnittsverdienst | Průměrný člověk | (1) vidējā izpeļņa | — | — |
| cs-003119 | die Trümmer | Ruiny | (1) drupas | — | — |
| cs-005298 | der Mund | Ústa | (1) mute | — | — |
| cs-004244 | prima | Prvotřídní | (1) pirmšķirīgs | — | — |
| cs-000114 | vornehmen | Něco si předsevzít | (1) ķerties (2) kaut ko apņemties (3) izdarīt (4) veikt | — | — |
| cs-005302 | angesehen | Navíc | (1) cienījams | — | — |
| cs-000862 | der Profit | Zisk | (1) peļņa | — | — |
| cs-001033 | einsichtig | Chápavý | (1) prātīgs (2) saprātīgs | — | — |
| cs-005295 | morgen | zítra | (1) rīt | Ich komme morgen. | Es nāku rīt. |
| cs-002344 | die Partie | Hra | (1) spēle | — | — |
| cs-001509 | entschädigen | Kompenzovat | (1) kompensēt (2) atlīdzināt | — | — |
| cs-004311 | entkräften | Zpochybnit | (1) atspēkot (2) apgāzt (3) atņemt spēku (4) novājināt | — | — |
| cs-002672 | bändigen | ovládnout | (1) savaldīt (2) apvaldīt | — | — |
| cs-005304 | gratis | Bez náhrady | (1) bez maksas (2) par velti | — | — |
| cs-001980 | abbringen | Odklonit | (1) novirzīt (2) atrunāt (3) atturēt | — | — |
| cs-004294 | hauteng | Těsné oblečení | (1) piegulošs apģērbs | — | — |
| cs-005301 | die Polizeistreife | Policejní jednotka | (1) policijas patruļa | — | — |
| cs-002612 | der Einflussbereich | Sféra vlivu | (1) ietekmes sfēra | — | — |
| cs-001338 | auswärts | Mimo domov | (1) izbraukumā (2) ārpus mājām | — | — |
| cs-002630 | sich herausbilden | Vyvinout se v | (1) izveidoties par | — | — |
| cs-004090 | das Garnknäuel | Klubko příze | (1) kamols | — | — |
| cs-001161 | das Dezernat | Oddělení v policii | (1) nodaļa policijā | — | — |
| cs-003935 | gelegentlich | Někdy | (1) sakarā ar (2) reizēm (3) gadījuma | Er kommt gelegentlich vorbei. | viņš reizēm iegriežas. |
| cs-004496 | der Hort | Dětské denní centrum | (1) pagarinātās dienas grupa (2) bērnu dienas centrs | Mein Sohn geht nach der Schule in den Hort. | mans dēls pēc skolas dodas uz pagarinātās dienas grupu. |
| cs-000183 | sich | Se | (1) sev (2) sevi | Er wäscht sich. | viņš mazgājas. |
| cs-005297 | müde | Unavený | (1) noguris | — | — |
| cs-003605 | vermeiden | Vyhnout se | (1) izvairīties | — | — |
| cs-000598 | die Ringelnatter | Užovka obojková | (1) zalktis | — | — |
| cs-000031 | gelten | Být platný | (1) būt spēkā | Die Regel gilt ab Montag. | noteikums ir spēkā no pirmdienas. |
| cs-001640 | der Kaltwasserhahn | Kohoutek studené vody | (1) aukstā ūdens krāns | — | — |
| cs-000222 | der Bootsverleih | Půjčovna lodí | (1) laivu noma | — | — |
| cs-003129 | die Anregung | Návrh | (1) ierosinājums | — | — |
| cs-002838 | flink | Rychlý | (1) ātrs | — | — |
| cs-005300 | müssen | Muset | (1) vajadzēt | Ich muss gehen. | man jāiet. |
| cs-003006 | das Revier | Okrsek | (1) iecirknis | — | — |
| cs-003352 | die Kundgebung | Demonstrace | (1) demonstrācija | — | — |
| cs-001619 | die Direktion | Ovládání předložek | (1) diprievārdu vadība | — | — |
| cs-001178 | die Bestimmung | Pravidlo | (1) noteikums | — | — |
| cs-000462 | sich äußern | Vyjádřit se | (1) izteikties | — | — |
| cs-002613 | benützen | Používat | (1) lietot | — | — |
| cs-000353 | die Wehe | Závěj | (1) kupena (2) kāpa | — | — |
| cs-004700 | dumpf | Tlumený | (1) sasmacis (2) smacīgs (3) smags (4) nospiests (5) nomācošs (6) dobjš (7) apslāpēts | — | — |
| cs-003617 | sich ausstrecken | Natáhnout se | (1) izstiepties | — | — |
| cs-000610 | unmenschlich | Nehumánní | (1) necilvēcīgs (2) necilvēcisks | — | — |
| cs-001486 | die Industrieabgase | Průmyslové výfukové plyny | (1) rūpnieciskās izplūdes gāzes | — | — |
| cs-000687 | schroff | Nevlídný | (1) skarbs (2) ass (3) nelaipns (4) stāvs (5) kraujš | — | — |
| cs-003300 | die Markthalle | Tržní pavilon | (1) tirgus paviljons | — | — |
| cs-003779 | das Magazin | Časopis | (1) žurnāls | — | — |
| cs-000115 | unbewusst | Instinktivní | (1) nevilšs (2) netīšs (3) neapzināts (4) instinktīvs | — | — |
| cs-001057 | der Straßenbahnführer | Řidič tramvaje | (1) tramvaja vadītājs | — | — |
| cs-001669 | gekünstelt | Nepřirozený | (1) nedabisks (2) samākslots | — | — |
| cs-004140 | beglaubigen | Úředně osvědčit | (1) oficiāli apliecināt (2) notariāli apstiprināt | — | — |
| cs-003334 | die Dämmerung | Úsvit | (1) ausma (2) rītausma (3) krēsla (4) mijkrēslis | — | — |
| cs-002215 | die Werbekampagne | Reklamní kampaň | (1) reklāmas kampaņa | — | — |
