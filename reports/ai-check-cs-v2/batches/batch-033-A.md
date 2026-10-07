HOW-TO: šo versiju A saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-033.csv (versija C).
Gemini -> ai-gemini/batch-033.csv (versija A).
ChatGPT -> ai-chatgpt/batch-033.csv (versija B).
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
| cs-005389 | angehoben | Náročný | (1) paaugstināts | — | — |
| cs-003822 | der Ekel | Odpor | (1) riebums (2) pretīgums | — | — |
| cs-004268 | der Banküberfall | Bankovní loupež | (1) bankas aplaupīšana | — | — |
| cs-004246 | die Veranlagung | Schopnosti | (1) dotības (2) spējas | — | — |
| cs-005388 | verabschieden | Rozvážný | (1) atbrīvot no darba (2) aizlaist pensijā | — | — |
| cs-001345 | vorn[e] | Vpředu | (1) priekšā | Er sitzt vorn. | Viņš sēž priekšā. |
| cs-003388 | unterscheiden | Rozlišovat | (1) atšķirt | — | — |
| cs-002082 | das Gerede | Řeči lidí | (1) runas (2) ļaužu valodas (3) tenkas (4) runāšana | — | — |
| cs-005379 | der Schüler | Žák | (1) skolnieks | — | — |
| cs-002964 | ersehen | Rozeznat | (1) redzēt (2) saskatīt | — | — |
| cs-000959 | das Massaker | Krveprolití | (1) asinspirts | — | — |
| cs-003183 | blenden | Klamat | (1) apžilbināt (2) apmulsināt (3) maldināt (4) žilbināt | — | — |
| cs-004543 | beabsichtigen | Plánovat | (1) nodomāt (2) plānot | Er beabsichtigt, das Projekt zu beenden. | Viņš nodomājis pabeigt projektu. |
| cs-004660 | die Jagderlaubnis | Povolení k lovu | (1) medību atļauja | — | — |
| cs-000113 | flüchtig | Pomíjivý | (1) paviršs (2) acumirklīgs (3) ātri pārejošs (4) īslaicīgs (5) gaistošs | — | — |
| cs-001300 | total | Zcela | (1) pilnīgi | — | — |
| cs-001561 | das Hohlmaß | Míra objemu | (1) tilpuma mērs | — | — |
| cs-001604 | schaffen | Splnit | (1) paveikt | — | — |
| cs-004609 | der Oppositionsführer | Vůdce opozice | (1) opozīcijas līderis | — | — |
| cs-000620 | genesen | Zotavit se | (1) izveseļoties (2) atveseļoties | — | — |
| cs-001624 | der Kriegsgefangene | Válečný zajatec | (1) karagūsteknis | — | — |
| cs-000873 | das Tagegeld | Denní cestovní náhrada | (1) komandējuma dienasnauda | — | — |
| cs-003520 | der Gegenstand | Téma | (1) lieta (2) tēma (3) priekšmets | — | — |
| cs-001777 | herb | Kyselý | (1) sūrs (2) skābs (3) rūgtens | — | — |
| cs-002276 | der Kasten | Krabice | (1) kaste | — | — |
| cs-000657 | das Duo | Duet | (1) duets | — | — |
| cs-004159 | bescheinigen | Vydat osvědčení | (1) apliecināt (2) izdot apliecību | — | — |
| cs-002203 | schärfsinnig | S bystrým rozumem | (1) ar asu prātu (2) attapīgs (3) asprātīgs | — | — |
| cs-004550 | das Schiebedach | Střešní okno auta | (1) automašīnas atbīdāmais jumts | — | — |
| cs-001410 | die Reifeprüfung | Maturitní zkouška | (1) gatavības pārbaudījums | — | — |
| cs-000888 | der Buchführer | Účetní | (1) grāmatvedis | — | — |
| cs-005386 | zuerkennen | Být proti mysli | (1) piespriest (2) piešķirt | — | — |
| cs-002058 | anweisen | Nařídit | (1) norādīt | — | — |
| cs-005382 | die Schwester | Sestra | (1) māsa | — | — |
| cs-005380 | schwarz | Černý | (1) melns | — | — |
| cs-000640 | die Eingebung | Inspirace | (1) iedvesma (2) pēkšņa ideja | — | — |
| cs-000441 | sich begeistern | Nadchnout se | (1) sajūsmināties | — | — |
| cs-000770 | verpflichten | Uložit povinnost | (1) uzlikt par pienākumu | — | — |
| cs-000825 | der Liegeplatz | Místo k ležení | (1) guļamvieta vagonā | — | — |
| cs-002681 | sich umziehen | Převléknout se | (1) pārģērbties | — | — |
| cs-005384 | sechs | Šest | (1) seši | — | — |
| cs-001502 | abgetan | Vyřízený | (1) izbeigts (2) nokārtots | — | — |
| cs-002926 | eingerechnet | Započítaný | (1) ieskaitīts (2) pieskaitīts (3) ierēķināts | — | — |
| cs-004458 | die Aufenthaltsdauer | Délka pobytu | (1) uzturēšanās ilgums | — | — |
| cs-003497 | die Staatsangehörigkeit | Občanství | (1) pavalstniecība | — | — |
| cs-004380 | die Abart | Aberace | (1) novirze (2) aberrācija | — | — |
| cs-003925 | die Währungseinheit | Peněžní jednotka | (1) naudas mērvienība | — | — |
| cs-003001 | die Hetze | Podněcování | (1) kūdīšana (2) rīdīšana | — | — |
| cs-002582 | allerseits | Ze všech stran | (1) no visām pusēm | — | — |
| cs-002861 | innewohnen | Domov | (1) piemist | — | — |
| cs-005387 | habsüchtig | Chamtivý | (1) mantkārīgs (2) mantrausīgs | — | — |
| cs-000970 | die Sage | Legenda | (1) teika | — | — |
| cs-000897 | eindringlich | Přesvědčivý | (1) neatlaidīgs (2) pārliecinošs | — | — |
| cs-002696 | normieren | Normovat | (1) normēt | — | — |
| cs-003756 | sich bemächtigen | Zmocnit se | (1) sagrābt (2) saņemt savā varā | — | — |
| cs-001325 | der Radau | Hluk | (1) troksnis | — | — |
| cs-003602 | simulieren | Napodobovat | (1) simulēt (2) imitēt | — | — |
| cs-003101 | die Grütze | Kroupy | (1) putraimi | — | — |
| cs-003157 | geräuchert | Uzený | (1) kūpināts | — | — |
| cs-002432 | bejahrt | Letitý | (1) krietni gados | — | — |
| cs-001018 | meinen | Myslet | (1) domāt | Was meinst du? | ko tu domā? |
| cs-002179 | waag[e]recht | Vodorovný | (1) līmenisks (2) horizontāls | — | — |
| cs-003483 | erheben | Zvednout | (1) celt (2) sacelt (3) protestēt (4) pacelt | — | — |
| cs-005390 | deuten | Zvedat | (1) iztulkot (2) norādīt (3) izskaidrot | — | — |
| cs-002774 | die Fahrtreppe | Eskalátor | (1) eskalators | — | — |
| cs-003927 | die Öffentlichkeit | Společnost | (1) sabiedrība (2) atklātība | Die Öffentlichkeit reagierte kritisch. | sabiedrība reaģēja kritiski. |
| cs-004360 | die Pfirsichhaut | Broskvová slupka | (1) persika miza | — | — |
| cs-004394 | holen | Dojít pro | (1) aiziet pakaļ (2) atnest | Ich hole Wasser. | Es atnesu ūdeni. |
| cs-003526 | das Amtsgeheimnis | Úřední tajemství | (1) amata noslēpums | — | — |
| cs-000291 | die Benennung | Pojmenování | (1) dēvēšana (2) nosaukums (3) nosaukšana | — | — |
| cs-001610 | kundgeben | Oznámit | (1) paziņot | — | — |
| cs-001906 | ehemals | Dříve | (1) agrāk | — | — |
| cs-003675 | das Gefecht | Bitva | (1) kauja (2) cīņa | — | — |
| cs-003339 | eintreffen | Dorazit | (1) ierasties | — | — |
| cs-005381 | das Schwein | Prase | (1) cūka | — | — |
| cs-000867 | der Hammel | Beran | (1) auns | — | — |
| cs-001732 | prüfen | Zkontrolovat | (1) pārbaudīt | — | — |
| cs-003410 | die Bildhauerkunst | Sochařství | (1) tēlniecība | — | — |
| cs-005383 | schwimmen | Plavat | (1) peldēt | Ich schwimme gern. | man patīk peldēt. |
| cs-000849 | die Mathematik | Matematika | (1) matemātika | — | — |
| cs-000992 | der Studienbewerber | Uchazeč o studium | (1) augstskolas reflektants | — | — |
| cs-005385 | abschlagen | Přecedit | (1) atsist (2) atvairīt (3) noraidīt (4) nocirst | — | — |
| cs-000019 | hemmen | Zdržovat | (1) aizkavēt (2) bremzēt (3) kavēt | — | — |
| cs-003915 | fortsetzen | Pokračovat | (1) turpināt | — | — |
| cs-002077 | entzückt | Nadšený | (1) sajūsmināts | — | — |
| cs-003450 | der Dünkel | Arogance | (1) uzpūtība (2) augstprātība (3) iedomība | — | — |
| cs-000928 | der Wahlkampf | Volební kampaň | (1) vēlēšanu cīņa | — | — |
| cs-002996 | das Waisenheim | Sirotčinec | (1) bāreņu patversme | — | — |
| cs-001923 | sich paaren | Pářit se s | (1) pāroties ar | — | — |
| cs-002885 | ungerade | Ne zcela rovný | (1) līks (2) nepārskaitlis (3) ne visai taisns | — | — |
| cs-004371 | die Gedächtnisschwäche | Špatná paměť | (1) slikta atmiņa | — | — |
| cs-003968 | überbringen | Dopis | (1) apsveikumu (2) vēstuli (3) dāvanu (4) nodot ziņu | — | — |
| cs-002511 | zunehmen | Přibrat na váze | (1) pieņemties svarā | Ich habe im Winter zugenommen. | ziemā es pieņēmos svarā. |
| cs-003973 | bestürzt | Zaskočený | (1) samulsis (2) apmulsis (3) apjucis (4) pārsteigts | — | — |
| cs-003902 | damalig | Z té doby | (1) toreizējs (2) tā laika | — | — |
| cs-000482 | der Schuldschein | Směnka | (1) parādzīme | — | — |
| cs-004507 | neunzigste | Devadesátý | (1) deviņdesmitais | — | — |
| cs-001485 | das Dasein | Existence | (1) esamība (2) eksistence | — | — |
| cs-003473 | die Landkarte | Zeměpisná mapa | (1) ģeogrāfiskā karte | — | — |
| cs-004166 | die Drogensucht | Drogová závislost | (1) narkomānija | — | — |
