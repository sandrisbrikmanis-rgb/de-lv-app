HOW-TO: šo versiju C saņem Gemini.
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
| cs-000898 | überführen | Převézt na druhou stranu | (1) pārcelt pāri upei (2) pārvest pāri | — | — |
| cs-002314 | die Herdplatte | Varná deska | (1) plīts virsma | — | — |
| cs-000630 | lauschen | Pozorně naslouchat | (1) slepeni noklausīties (2) vērīgi klausīties | — | — |
| cs-005083 | der Buchstabe | Písmeno | (1) burts | — | — |
| cs-000382 | der Bewohner | Rezident | (1) iedzīvotājs | — | — |
| cs-003561 | begünstigen | Chránit | (1) protežēt (2) atbalstīt (3) veicināt (4) sekmēt | — | — |
| cs-002448 | hitzig | Žhavý | (1) straujš (2) ātrs dusmās (3) karsts (4) dedzīgs | — | — |
| cs-004198 | hinuntergehen | Jít dolů | (1) iet lejā | — | — |
| cs-005088 | die Geiselnahme | Mluvení | (1) ķīlnieku saņemšana | — | — |
| cs-001675 | drängen | Popohánět | (1) steidzināt (2) skubināt (3) mudināt (4) grūst (5) spiest | — | — |
| cs-002883 | die Genugtuung | Spokojenost | (1) gandarījums | — | — |
| cs-003104 | die Fremde | Cizí prostředí | (1) svešums (2) svešatne | — | — |
| cs-005085 | aussuchen | Odstavit | (1) izvēlēties | — | — |
| cs-002993 | auf der Stelle | Na místě | (1) uz vietas (2) nekavējoties | — | — |
| cs-002841 | die Schweinezucht | Chov prasat | (1) cūkkopība | — | — |
| cs-001432 | falten | Ohýbat | (1) salocīt (2) locīt | — | — |
| cs-003704 | vererben | Odkázat dědictvím | (1) atstāt (2) nodot mantojumā | — | — |
| cs-001177 | niederlegen | Stávkovat | (1) sākt streikot (2) nolikt (3) pārtraukt darbu | — | — |
| cs-000285 | verwirren | Pomíchat | (1) samulsināt (2) sajaukt (3) samudžināt | — | — |
| cs-000323 | großmütig | Velkorysý | (1) augstsirdīgs | — | — |
| cs-000237 | die Lochkarte | Děrný štítek | (1) perfokarte | — | — |
| cs-001147 | die Vereinigung | Svaz | (1) savienošana (2) savienība (3) sabiedrība | — | — |
| cs-004355 | die Bewerbung | Formulář žádosti | (1) iesniegto dokumentu kopums (2) iesniegums (3) iesnieguma veidlapa | — | — |
| cs-001436 | lenken | Vést | (1) vadīt | — | — |
| cs-002489 | entzückend | Nádherný | (1) burvīgs (2) brīnišķīgs (3) apburošs | — | — |
| cs-000505 | besänftigen | Zmírnit | (1) remdināt (2) apklusināt (3) nomierināt (4) remdēt | — | — |
| cs-005081 | der Bruder | Bratr | (1) brālis | — | — |
| cs-002062 | die Wahlkampagne | Volební kampaň | (1) vēlēšanu kampaņa | — | — |
| cs-001206 | aufrechterhalten | Zachovat v platnosti | (1) uzturēt spēkā | Der Staat erhält die Ordnung auf. | Valsts uztur kārtību spēkā. |
| cs-003323 | anknüpfen | Navázat | (1) piesaistīt | — | — |
| cs-004692 | mitmachen | Zúčastnit se | (1) piedalīties | — | — |
| cs-004533 | vergeuden | Plýtvat | (1) izšķiest (2) izšķērdēt | — | — |
| cs-001077 | schädigen | Způsobit škodu | (1) nodarīt zaudējumus (2) kaitēt | — | — |
| cs-004374 | einhalten | Pozorovat | (1) ievērot | Bitte halten Sie die Regeln ein. | lūdzu, ievērojiet noteikumus. |
| cs-002455 | der Spießbürger | Maloměšťák | (1) mietpilsonis | — | — |
| cs-003227 | dornig | Ostnatý | (1) ērkšķains (2) dzeloņains | — | — |
| cs-000512 | der Rundfunkempfänger | Rádiový přijímač | (1) radiouztvērējs | — | — |
| cs-000395 | sich entzünden | Vznítit se | (1) iekaist (2) aizdegties (3) iedegties | — | — |
| cs-002375 | der Amateurboxer | Amatérský boxer | (1) amatierbokseris | — | — |
| cs-001266 | einüben | Inscenovat | (1) iestudēt (2) iemācīties | — | — |
| cs-005087 | hingeben | Vrátit | (1) atdot (2) aizdot projām | — | — |
| cs-000130 | der Trupp | Jednotka | (1) vienība | — | — |
| cs-004217 | sich versammeln | [se] shromáždit | (1) [sa]pulcēties | — | — |
| cs-004144 | das Können | Dovednost | (1) prasme | Sein Können ist beeindruckend. | viņa prasme ir iespaidīga. |
| cs-001262 | das Gewicht | Hmotnost | (1) svars | — | — |
| cs-000098 | die Böschung | Sráz | (1) uzbērums (2) nogāze (3) nokalne | — | — |
| cs-002324 | die Abenddämmerung | Večerní soumrak | (1) vakara krēsla | — | — |
| cs-000553 | das Plateau | Náhorní plošina | (1) plakankalne | — | — |
| cs-003717 | der Kummer | Smutek | (1) bēdas | — | — |
| cs-002520 | der Erlass | Příkaz | (1) dekrēts (2) atlaišana (3) rīkojums (4) pavēle | — | — |
| cs-004396 | formell | Strnulý | (1) formāls (2) stīvs (3) korekts (4) pieklājīgs | — | — |
| cs-003885 | der Geliebte | Milovaný | (1) mīļākais (2) mīļais (3) mīļotais | — | — |
| cs-003260 | der Grenzbeamte | Důstojník pohraniční stráže | (1) robežapsardzes ierēdnis | — | — |
| cs-003856 | die Eisenbahnbrücke | Železniční most | (1) dzelzceļa tilts | — | — |
| cs-000664 | die Quergasse | Příčná ulice | (1) šķērsiela | — | — |
| cs-001246 | rühmen | Chválit | (1) lielīties (2) dižoties ar kaut ko (3) slavēt (4) slavināt | — | — |
| cs-002002 | der Bestand | Inventář | (1) krājums (2) sastāvs (3) inventārs | — | — |
| cs-000095 | abtragen | Obrousit | (1) nojaukt (2) aiznest (3) nonēsāt | — | — |
| cs-001396 | reiten | Jezdit na koni | (1) jāt | — | — |
| cs-003741 | der Pfannkuchen | Palačinka | (1) pankūka | — | — |
| cs-003477 | eingehen | Vsadit se | (1) ienākt (2) ierauties (3) sarauties (4) piekrist (5) saderēt (6) ieiet (7) pienākt | — | — |
| cs-001103 | dunkeln | Tmavnout | (1) satumst (2) tumst | — | — |
| cs-004020 | sich erhalten | Uchovat se | (1) saglabāties | — | — |
| cs-004747 | exquisit | Vybraný | (1) izmeklēts (2) smalks | — | — |
| cs-001137 | die Führernatur | Vůdčí osobnost | (1) līderis (2) līdera tips | — | — |
| cs-005082 | das Buch | Kniha | (1) grāmata | — | — |
| cs-000541 | die Glut | Zářit | (1) liels karstums (2) svelme (3) kvēle | — | — |
| cs-001311 | der Stoßverkehr | Dopravní špička | (1) pastiprināta satiksme noteiktā diennakts laikā (2) sastrēgumstunda | — | — |
| cs-002850 | weigern | Odmítnout | (1) atteikt | — | — |
| cs-001925 | beieinander | Spolu | (1) kopā | — | — |
| cs-005090 | die Goldlegierung | Šéf | (1) zelta sakausējums | — | — |
| cs-004091 | umstellen | Přeskupit | (1) pārkārtot | — | — |
| cs-001380 | der Devisenkurs | Devizový kurz | (1) valūtas kurss | — | — |
| cs-005079 | das Brötchen | Houska | (1) maizīte | — | — |
| cs-003876 | das Fabrikat | Průmyslový výrobek | (1) rūpnieciska produkcija (2) ražojums | — | — |
| cs-000964 | vollkommen | Dokonale | (1) pavisam (2) pilnīgs (3) pilnīgi | — | — |
| cs-003389 | absagen | Zrušit | (1) atcelt | Ich muss den Termin absagen. | man jāatceļ tikšanās. |
| cs-001869 | bewölkt | Zataženo | (1) mākoņains (2) apmācies | — | — |
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
| cs-002623 | stranden | Najet na mělčinu | (1) ciest avāriju (2) uzskriet uz sēkļa | — | — |
| cs-003046 | die Sämaschine | Secí stroj | (1) sējmašīna | — | — |
| cs-002452 | das Hochzeitspaar | Svatební pár | (1) kāzu pāris (2) jaunlaulātie | — | — |
| cs-000100 | der Militärblock | Vojenský blok | (1) militārais bloks | — | — |
| cs-005084 | das Büro | Kancelář | (1) birojs | — | — |
