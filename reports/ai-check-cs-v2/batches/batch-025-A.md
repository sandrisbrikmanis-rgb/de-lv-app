HOW-TO: šo versiju A saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-025.csv (versija A).
Gemini -> ai-gemini/batch-025.csv (versija B).
ChatGPT -> ai-chatgpt/batch-025.csv (versija C).
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
| cs-001423 | die Ersparnis | Úspory | (1) ietaupījums (2) ietaupījumi | — | — |
| cs-004519 | beiläufig | Letmo | (1) gadījuma (2) starp citu (3) garām ejot (4) nejaušs | — | — |
| cs-000315 | einsetzen | Používat | (1) izmantot | Wir setzen moderne Technik im Unterricht ein. | mēs izmantojam modernu tehniku mācībās. |
| cs-005289 | das Hafenbecken | Přístavní povinnost | (1) ostas akvatorija | — | — |
| cs-004552 | unbarmherzig | Krutý | (1) nežēlīgs (2) bezsirdīgs | — | — |
| cs-001990 | ungeheuer | Obrovský | (1) milzīgs | — | — |
| cs-004531 | die Krücke | Berlička | (1) kruķis | — | — |
| cs-002915 | nachschlagen | Vyhledat | (1) uzmeklēt | — | — |
| cs-003588 | das Länderspiel | Mezinárodní zápas | (1) starptautiskās sacensības | — | — |
| cs-000063 | die Anprobe | Zkoušení | (1) pielaikošana | — | — |
| cs-003440 | dumpf | Těžký | (1) apslāpēts (2) sasmacis (3) smacīgs (4) smags (5) nospiests (6) nomācošs (7) dobjš | — | — |
| cs-005286 | die Million | Milión | (1) miljons | — | — |
| cs-003216 | der Kaffeeautomat | Kávovar | (1) kafijas automāts | — | — |
| cs-003697 | das Augenmaß | Odhad | (1) acumērs | — | — |
| cs-003590 | der Schlaganfall | Cévní mozková příhoda | (1) trieka | — | — |
| cs-003579 | beneiden | Závidět | (1) apskaust | — | — |
| cs-003419 | die Garderobe | Šatní skříň | (1) garderobe (2) ģērbtuve | — | — |
| cs-001785 | tagen | Konat zasedání | (1) noturēt sēdi (2) sesiju | — | — |
| cs-005285 | die Milch | Mléko | (1) piens | — | — |
| cs-004247 | der Leim | Lepidlo | (1) līme | — | — |
| cs-000274 | gekünstelt | Umělý | (1) samākslots (2) nedabisks | — | — |
| cs-000168 | das Schlagwort | Slogan | (1) lozungs (2) trāpīgs vārds | — | — |
| cs-003465 | scheiden | Rozejít se | (1) atdalīt (2) šķirt (3) sich sch. lassen (4) šķirties (5) izšķirties (6) [at]šķirt | — | — |
| cs-005283 | das Messer | Nůž | (1) nazis | — | — |
| cs-002166 | sich zufrieden geben | Spokojit se | (1) apmierināties | — | — |
| cs-003128 | ernähren | Krmit | (1) barot | — | — |
| cs-002953 | vermehren | Zvětšovat | (1) vairot (2) pavairot | — | — |
| cs-001354 | das Abgas | Výfukový plyn | (1) izplūdes gāze | — | — |
| cs-003878 | schärfsichtig | Pozorný | (1) ar asu skatienu (2) vērīgs | — | — |
| cs-003749 | der Nudelauflauf | Zapečené těstoviny | (1) makaronu sacepums | — | — |
| cs-003622 | der Bootssteg | Přístaviště lodí | (1) laivu piestātne | — | — |
| cs-001816 | der Eilbrief | Naléhavý dopis | (1) steidzama vēstule | — | — |
| cs-001135 | hauen | Hit | (1) sist | Er haut mit der Faust auf den Tisch. | viņš sit ar dūri pa galdu. |
| cs-002667 | entkräften | Zbavit síly | (1) novājināt (2) atspēkot (3) apgāzt (4) atņemt spēku | — | — |
| cs-000087 | fliederfarben | Šeříkový | (1) ceriņu krāsā | — | — |
| cs-004003 | postlagernd | K vyzvednutí na poště | (1) pēc pieprasījuma | — | — |
| cs-001845 | auswärtig | zahraničněpolitický | (1) ārzemju (2) ārlietu | — | — |
| cs-000200 | die Goldlegierung | Slitina zlata | (1) zelta sakausējums | — | — |
| cs-000749 | der Pressevertreter | Tiskový zástupce | (1) preses pārstāvis | — | — |
| cs-000136 | machen | Vyrábět | (1) darīt (2) taisīt | Was machst du? | ko tu dari? |
| cs-000497 | das Deo | Deodorant | (1) dezodorants | — | — |
| cs-004467 | sich aufhalten | Zůstat | (1) uzturēties | Wir halten uns im Garten auf. | mēs uzturamies dārzā. |
| cs-002395 | der Vorsprung | Prvenství | (1) pārākums (2) pārsvars (3) izcilnis | — | — |
| cs-002941 | edel | Vznešený | (1) cildens (2) dižciltīgs (3) cēls | — | — |
| cs-005291 | das Opernglas | Operní dům | (1) teātra binoklis | — | — |
| cs-002308 | hingeben | Půjčovat | (1) atdot (2) aizdot projām | — | — |
| cs-005294 | starren | Být prostoupen | (1) cieši skatīties (2) blenzt | — | — |
| cs-001868 | das Führunternehmen | Dopravní podnik | (1) kravas transporta uzņēmums | — | — |
| cs-000523 | der Gütertransport | Přeprava zboží | (1) preču pārvadājumi | — | — |
| cs-001843 | sich herausbilden | Vytvořit se jako | (1) izveidoties par | — | — |
| cs-001689 | die Mappe | Složka | (1) mape | — | — |
| cs-003463 | die Haube | Kapuce | (1) cepurīte (2) pārsegs | Sie trägt eine warme Haube. | viņa valkā siltu cepurīti. |
| cs-003159 | umständlich | Velmi podrobný | (1) pārāk plašs (2) apgrūtinošs (3) sarežģīts (4) ļoti sīks | — | — |
| cs-004061 | beziehen / sich beziehen auf | Aplikovat | (1) attiecināt (2) attiekties uz | beziehen / sich beziehen auf. | attiecināt • attiekties uz |
| cs-001250 | mitwirken | Účastnit se | (1) piedalīties (2) darboties līdzi | — | — |
| cs-002547 | die Dichtung | Poezie | (1) dzeja | — | — |
| cs-002433 | durchsetzen | Dosáhnout | (1) izdabūt cauri (2) panākt | — | — |
| cs-002388 | das Gefüge | Stavba | (1) uzbūve (2) savienojums (3) salaidums (4) struktūra | — | — |
| cs-003893 | das Versehen | Přehlédnutí | (1) kļūda (2) pārskatīšanās | — | — |
| cs-003635 | der Verstorbene | Zemřelý | (1) aizgājējs (2) mirušais | — | — |
| cs-004739 | indem | Tím, že | (1) darot | Du lernst Deutsch, indem du jeden Tag übst. | tu mācies vācu valodu, katru dienu trenējoties. |
| cs-001140 | die Parole | Slogan | (1) parole (2) lozungs | — | — |
| cs-004297 | der Hort | Rozšířená denní skupina | (1) pagarinātās dienas grupa (2) bērnu dienas centrs | Mein Sohn geht nach der Schule in den Hort. | mans dēls pēc skolas dodas uz pagarinātās dienas grupu. |
| cs-003745 | die Ringbahn | Okružní železnice | (1) loka dzelzceļš | — | — |
| cs-004671 | das Heftpflaster | Leukoplast | (1) leikoplasts | — | — |
| cs-002527 | kompetent | Zdatný | (1) kompetents (2) lietpratīgs | — | — |
| cs-003705 | der Auftritt | Výkon | (1) uzstāšanās | — | — |
| cs-004495 | vorbestraft | S předchozím odsouzením | (1) ar iepriekšēju sodāmību | — | — |
| cs-001948 | die Trockenlegung | Odvodnění | (1) nosusināšana | — | — |
| cs-000537 | zucken | Škubat se | (1) raustīties | — | — |
| cs-005287 | die Minute | Minuta | (1) minūte | — | — |
| cs-000033 | die Spaghetti | Špagety | (1) spageti | — | — |
| cs-005293 | das Fallschirmspringen | Parašutistická věž | (1) lēkšana ar izpletni | — | — |
| cs-004012 | rösten | Na opékání | (1) grauzdēt | Wir rösten Kaffee. | mēs grauzdējam kafiju. |
| cs-005290 | das Vermächtnis | Zásluhy | (1) testaments | — | — |
| cs-003772 | der Doppelzentner | 100 kg | (1) centners | — | — |
| cs-005284 | der Meter | Metr | (1) metrs | — | — |
| cs-004568 | der Strandkorb | Plážové křeslo | (1) sauļošanās grozs pludmalē | — | — |
| cs-003022 | die Weltraumfahrt | Vesmírný let | (1) kosmiskais lidojums | — | — |
| cs-002779 | beglaubigen | Notářsky ověřit | (1) oficiāli apliecināt (2) notariāli apstiprināt | — | — |
| cs-002024 | die Wegstrecke | Úsek cesty | (1) ceļa posms (2) gabals | — | — |
| cs-000275 | brüten | Dumat | (1) perēt (2) nemitīgi domāt par kaut ko | — | — |
| cs-001725 | einbürgern | Zakořenit | (1) ieviesties (2) iesakņoties (3) piešķirt pilsoņa tiesības | — | — |
| cs-004643 | die Besonderheit | Podivnost | (1) īpatnība (2) savādība | — | — |
| cs-000564 | der Viehbestand | [celkový] počet hospodářských zvířat | (1) lopu [kop]skaits | — | — |
| cs-003117 | entschlossen | Neochvějný | (1) apņēmīgs (2) nešaubīgs (3) noteikts | — | — |
| cs-001232 | verweilen | Pozdržet se | (1) pakavēties | — | — |
| cs-000903 | die Immobilien | Nemovitost | (1) nekustamais īpašums | — | — |
| cs-001678 | die Posse | Žertová hra | (1) joku luga (2) rupjš joks (3) farss | — | — |
| cs-003220 | das Rennen mit Hindernissen | Překážkový závod | (1) šķēršļu skrējiens | — | — |
| cs-004024 | anspielen | Dát nápovědu | (1) dot mājienu | — | — |
| cs-000225 | die Dämmerung | Svítání | (1) mijkrēslis (2) ausma (3) rītausma (4) krēsla | — | — |
| cs-002374 | gelegentlich | Příležitost | (1) gadījuma (2) sakarā ar (3) reizēm | Er kommt gelegentlich vorbei. | viņš reizēm iegriežas. |
| cs-003407 | der Gedanke | Nápad | (1) doma (2) ideja | — | — |
| cs-004509 | die Sonderausgabe | Mimořádné vydání novin | (1) laikraksta speciāl numurs (2) marku speciālizlaidums (3) grāmatas speciālizdevums | — | — |
| cs-004339 | sich heraushalten | Drž se dál od | (1) turēties nost no | — | — |
| cs-005288 | mit | s | (1) ar | Ich komme mit dir. | es nāku ar tevi. |
| cs-005292 | durchschlagen | Odmítnout | (1) izlaist caur sietu (2) izsisties cauri (3) izsist caurumu (4) izkāst | — | — |
| cs-003312 | abweichen | Lišit se | (1) atšķirties (2) novirzīties | — | — |
| cs-002383 | gelingen | Uspět | (1) izdoties | — | — |
