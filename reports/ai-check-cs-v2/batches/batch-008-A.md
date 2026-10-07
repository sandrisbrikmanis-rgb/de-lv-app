HOW-TO: šo versiju A saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-008.csv (versija B).
Gemini -> ai-gemini/batch-008.csv (versija C).
ChatGPT -> ai-chatgpt/batch-008.csv (versija A).
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
| cs-001493 | stellen | Postavit vzpřímeně | (1) nolikt stāvus | Ich stelle die Flasche auf den Tisch. | Es nolieku pudeli uz galda. |
| cs-003910 | die Marine | Přímořská krajina | (1) jūras kara flote (2) jūras ainava | — | — |
| cs-000898 | überführen | Převézt na druhou stranu | (1) pārvest pāri (2) pārcelt pāri upei | — | — |
| cs-002314 | die Herdplatte | Varná deska | (1) plīts virsma | — | — |
| cs-000630 | lauschen | Pozorně naslouchat | (1) vērīgi klausīties (2) slepeni noklausīties | — | — |
| cs-005083 | der Buchstabe | Písmeno | (1) burts | — | — |
| cs-000382 | der Bewohner | Rezident | (1) iedzīvotājs | — | — |
| cs-003561 | begünstigen | Chránit | (1) sekmēt (2) protežēt (3) atbalstīt (4) veicināt | — | — |
| cs-002448 | hitzig | Žhavý | (1) dedzīgs (2) straujš (3) ātrs dusmās (4) karsts | — | — |
| cs-004198 | hinuntergehen | Jít dolů | (1) iet lejā | — | — |
| cs-005088 | die Geiselnahme | Mluvení | (1) ķīlnieku saņemšana | — | — |
| cs-001675 | drängen | Popohánět | (1) spiest (2) steidzināt (3) skubināt (4) mudināt (5) grūst | — | — |
| cs-002883 | die Genugtuung | Spokojenost | (1) gandarījums | — | — |
| cs-003104 | die Fremde | Cizí prostředí | (1) svešums (2) svešatne | — | — |
| cs-005085 | aussuchen | Odstavit | (1) izvēlēties | — | — |
| cs-002993 | auf der Stelle | Na místě | (1) nekavējoties (2) uz vietas | — | — |
| cs-002841 | die Schweinezucht | Chov prasat | (1) cūkkopība | — | — |
| cs-001432 | falten | Ohýbat | (1) locīt (2) salocīt | — | — |
| cs-003704 | vererben | Odkázat dědictvím | (1) atstāt (2) nodot mantojumā | — | — |
| cs-001177 | niederlegen | Stávkovat | (1) pārtraukt darbu (2) sākt streikot (3) nolikt | — | — |
| cs-000285 | verwirren | Pomíchat | (1) samudžināt (2) samulsināt (3) sajaukt | — | — |
| cs-000323 | großmütig | Velkorysý | (1) augstsirdīgs | — | — |
| cs-000237 | die Lochkarte | Děrný štítek | (1) perfokarte | — | — |
| cs-001147 | die Vereinigung | Svaz | (1) sabiedrība (2) savienošana (3) savienība | — | — |
| cs-004355 | die Bewerbung | Formulář žádosti | (1) iesnieguma veidlapa (2) iesniegto dokumentu kopums (3) iesniegums | — | — |
| cs-001436 | lenken | Vést | (1) vadīt | — | — |
| cs-002489 | entzückend | Nádherný | (1) apburošs (2) burvīgs (3) brīnišķīgs | — | — |
| cs-000505 | besänftigen | Zmírnit | (1) remdēt (2) remdināt (3) apklusināt (4) nomierināt | — | — |
| cs-005081 | der Bruder | Bratr | (1) brālis | — | — |
| cs-002062 | die Wahlkampagne | Volební kampaň | (1) vēlēšanu kampaņa | — | — |
| cs-001206 | aufrechterhalten | Zachovat v platnosti | (1) uzturēt spēkā | Der Staat erhält die Ordnung auf. | Valsts uztur kārtību spēkā. |
| cs-003323 | anknüpfen | Navázat | (1) piesaistīt | — | — |
| cs-004692 | mitmachen | Zúčastnit se | (1) piedalīties | — | — |
| cs-004533 | vergeuden | Plýtvat | (1) izšķiest (2) izšķērdēt | — | — |
| cs-001077 | schädigen | Způsobit škodu | (1) kaitēt (2) nodarīt zaudējumus | — | — |
| cs-004374 | einhalten | Pozorovat | (1) ievērot | Bitte halten Sie die Regeln ein. | lūdzu, ievērojiet noteikumus. |
| cs-002455 | der Spießbürger | Maloměšťák | (1) mietpilsonis | — | — |
| cs-003227 | dornig | Ostnatý | (1) ērkšķains (2) dzeloņains | — | — |
| cs-000512 | der Rundfunkempfänger | Rádiový přijímač | (1) radiouztvērējs | — | — |
| cs-000395 | sich entzünden | Vznítit se | (1) iedegties (2) iekaist (3) aizdegties | — | — |
| cs-002375 | der Amateurboxer | Amatérský boxer | (1) amatierbokseris | — | — |
| cs-001266 | einüben | Inscenovat | (1) iemācīties (2) iestudēt | — | — |
| cs-005087 | hingeben | Vrátit | (1) atdot (2) aizdot projām | — | — |
| cs-000130 | der Trupp | Jednotka | (1) vienība | — | — |
| cs-004217 | sich versammeln | [se] shromáždit | (1) [sa]pulcēties | — | — |
| cs-004144 | das Können | Dovednost | (1) prasme | Sein Können ist beeindruckend. | viņa prasme ir iespaidīga. |
| cs-001262 | das Gewicht | Hmotnost | (1) svars | — | — |
| cs-000098 | die Böschung | Sráz | (1) nokalne (2) uzbērums (3) nogāze | — | — |
| cs-002324 | die Abenddämmerung | Večerní soumrak | (1) vakara krēsla | — | — |
| cs-000553 | das Plateau | Náhorní plošina | (1) plakankalne | — | — |
| cs-003717 | der Kummer | Smutek | (1) bēdas | — | — |
| cs-002520 | der Erlass | Příkaz | (1) pavēle (2) dekrēts (3) atlaišana (4) rīkojums | — | — |
| cs-004396 | formell | Strnulý | (1) pieklājīgs (2) formāls (3) stīvs (4) korekts | — | — |
| cs-003885 | der Geliebte | Milovaný | (1) mīļotais (2) mīļākais (3) mīļais | — | — |
| cs-003260 | der Grenzbeamte | Důstojník pohraniční stráže | (1) robežapsardzes ierēdnis | — | — |
| cs-003856 | die Eisenbahnbrücke | Železniční most | (1) dzelzceļa tilts | — | — |
| cs-000664 | die Quergasse | Příčná ulice | (1) šķērsiela | — | — |
| cs-001246 | rühmen | Chválit | (1) slavināt (2) lielīties (3) dižoties ar kaut ko (4) slavēt | — | — |
| cs-002002 | der Bestand | Inventář | (1) inventārs (2) krājums (3) sastāvs | — | — |
| cs-000095 | abtragen | Obrousit | (1) nonēsāt (2) nojaukt (3) aiznest | — | — |
| cs-001396 | reiten | Jezdit na koni | (1) jāt | — | — |
| cs-003741 | der Pfannkuchen | Palačinka | (1) pankūka | — | — |
| cs-003477 | eingehen | Vsadit se | (1) pienākt (2) ienākt (3) ierauties (4) sarauties (5) piekrist (6) saderēt (7) ieiet | — | — |
| cs-001103 | dunkeln | Tmavnout | (1) tumst (2) satumst | — | — |
| cs-004020 | sich erhalten | Uchovat se | (1) saglabāties | — | — |
| cs-004747 | exquisit | Vybraný | (1) izmeklēts (2) smalks | — | — |
| cs-001137 | die Führernatur | Vůdčí osobnost | (1) līdera tips (2) līderis | — | — |
| cs-005082 | das Buch | Kniha | (1) grāmata | — | — |
| cs-000541 | die Glut | Zářit | (1) kvēle (2) liels karstums (3) svelme | — | — |
| cs-001311 | der Stoßverkehr | Dopravní špička | (1) sastrēgumstunda (2) pastiprināta satiksme noteiktā diennakts laikā | — | — |
| cs-002850 | weigern | Odmítnout | (1) atteikt | — | — |
| cs-001925 | beieinander | Spolu | (1) kopā | — | — |
| cs-005090 | die Goldlegierung | Šéf | (1) zelta sakausējums | — | — |
| cs-004091 | umstellen | Přeskupit | (1) pārkārtot | — | — |
| cs-001380 | der Devisenkurs | Devizový kurz | (1) valūtas kurss | — | — |
| cs-005079 | das Brötchen | Houska | (1) maizīte | — | — |
| cs-003876 | das Fabrikat | Průmyslový výrobek | (1) rūpnieciska produkcija (2) ražojums | — | — |
| cs-000964 | vollkommen | Dokonale | (1) pilnīgi (2) pavisam (3) pilnīgs | — | — |
| cs-003389 | absagen | Zrušit | (1) atcelt | Ich muss den Termin absagen. | man jāatceļ tikšanās. |
| cs-001869 | bewölkt | Zataženo | (1) apmācies (2) mākoņains | — | — |
| cs-003291 | die Neuerscheinung | Nové vydání | (1) jaunums (2) jauns izdevums | — | — |
| cs-002480 | das Blinksignal | Blikající signál | (1) gaismas signāls | — | — |
| cs-002553 | gangbar | Pochozí | (1) ejams | — | — |
| cs-000702 | ökonomisch | Hospodárný | (1) ekonomisks | — | — |
| cs-005089 | schwätzen | Nadchnout se | (1) pļāpāt | — | — |
| cs-005086 | nachvollziehen | Provést | (1) saprast (2) sekot loģikai | — | — |
| cs-005080 | die Brücke | Most | (1) tilts | — | — |
| cs-000580 | der Holzspan | Dřevěná tříska | (1) koka skals | — | — |
| cs-001417 | greifen | Uchopit | (1) satvert | Sie greift nach dem Glas. | viņa sniedzas pēc glāzes. |
| cs-004143 | orten | Lokalizovat pomocí nástrojů | (1) lokalizēt ar instrumentu palīdzību | — | — |
| cs-003105 | die Kluft | Mezera | (1) plaisa | — | — |
| cs-004735 | keuchen | Lapat po dechu | (1) elst | — | — |
| cs-001754 | der Feuerwerkskörper | Pyrotechnický výrobek | (1) raķete uguņošanai | — | — |
| cs-004243 | die Belegschaft | Zaměstnanci | (1) kolektīvs (2) personāls | — | — |
| cs-004327 | das Streichinstrument | Strunný nástroj | (1) stīgu instruments | — | — |
| cs-002623 | stranden | Najet na mělčinu | (1) uzskriet uz sēkļa (2) ciest avāriju | — | — |
| cs-003046 | die Sämaschine | Secí stroj | (1) sējmašīna | — | — |
| cs-002452 | das Hochzeitspaar | Svatební pár | (1) jaunlaulātie (2) kāzu pāris | — | — |
| cs-000100 | der Militärblock | Vojenský blok | (1) militārais bloks | — | — |
| cs-005084 | das Büro | Kancelář | (1) birojs | — | — |
