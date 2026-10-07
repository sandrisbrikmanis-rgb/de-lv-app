HOW-TO: šo versiju B saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-030.csv (versija C).
Gemini -> ai-gemini/batch-030.csv (versija A).
ChatGPT -> ai-chatgpt/batch-030.csv (versija B).
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
| cs-004004 | akzeptieren | Přijmout | (1) pieņemt | — | — |
| cs-000619 | die Rübe | Tuřín | (1) rācenis | — | — |
| cs-002449 | vorlesen | Číst nahlas | (1) lasīt priekšā | — | — |
| cs-002543 | das Gemüt | Přirozenost | (1) prāti (2) domas (3) daba (4) raksturs | — | — |
| cs-005346 | putzen | Čistit | (1) tīrīt | — | — |
| cs-003190 | die Dosis | Dóza | (1) deva (2) doza | — | — |
| cs-002902 | das Dragee | Dražé | (1) dražeja | — | — |
| cs-005352 | die Kaffeebohne | Mletá káva | (1) kafijas pupiņa | — | — |
| cs-000384 | der Drops | Lízátka | (1) ledenes (2) skābas augļu karameles | — | — |
| cs-000692 | überbringen | Blahopřání | (1) dāvanu (2) vēstuli (3) apsveikumu (4) nodot ziņu | — | — |
| cs-002752 | die Grenzverletzung | Porušení hranic | (1) robežpārkāpums | — | — |
| cs-003805 | das Marketing | Tržní činnost | (1) tirgzinība (2) marketings | — | — |
| cs-003629 | das Vorspiel | Prolog | (1) uvertīra (2) priekšspēle (3) prologs | — | — |
| cs-001314 | die Bezeichnung | Jméno | (1) nosaukums | — | — |
| cs-002944 | sanieren | Opravit | (1) ek. padarīt rentablu (2) izremontēt | — | — |
| cs-001514 | die Unterstellung | Pomluva | (1) apmelojums | — | — |
| cs-005349 | erwidern | Naspořit | (1) atbildēt | — | — |
| cs-000463 | hinüberfahren | Překročit | (1) pārbraukt pāri (2) pārvest pāri | — | — |
| cs-000905 | der Qualm | Kouř | (1) dūmi | — | — |
| cs-000631 | da | Za kolik | (1) par cik (2) jo | Da ich krank bin, bleibe ich zu Hause. | Tā kā esmu slims, es palieku mājās. |
| cs-001322 | nachvollziehen | Rozumět | (1) sekot loģikai (2) saprast | — | — |
| cs-002737 | siebzehnte | Sedmnáctý | (1) septiņpadsmitais | — | — |
| cs-001927 | sich kümmern | Pečovat o | (1) rūpēties par | — | — |
| cs-002886 | der Waggon | Vůz | (1) vagons | — | — |
| cs-000641 | die Arbeitsgemeinschaft | Pracovní skupina | (1) darba grupa | — | — |
| cs-002326 | mangeln | Chybět | (1) trūkt | — | — |
| cs-002721 | inhaftieren | Vzít do vazby | (1) apcietināt | — | — |
| cs-004342 | die Eigenliebe | Sebeláska | (1) egoisms (2) patmīlība | — | — |
| cs-001636 | genmanipuliert | Geneticky modifikovaný | (1) ar pārveidotiem gēniem | — | — |
| cs-003546 | eitel | Okázalý | (1) ārišķīgs (2) tukšs (3) sekls (4) iedomīgs (5) uzpūtīgs (6) godkārīgs | — | — |
| cs-000719 | abgesehen | Navíc | (1) turklāt (2) lai gan | — | — |
| cs-002342 | die Fahndungsliste | Seznam hledaných osob | (1) meklējamo personu saraksts | — | — |
| cs-001685 | die Geburtenkontrolle | Antikoncepce | (1) dzimstības kontrole | — | — |
| cs-005354 | die Festigkeit | Výjimečný případ | (1) cietība | — | — |
| cs-003651 | der Kartoffelkloß | Bramborový knedlík | (1) kartupeļu klimpa | — | — |
| cs-000380 | nerven | Otravovat | (1) kaitināt | Der Lärm nervt mich seit Stunden. | troksnis mani kaitina jau vairākas stundas. |
| cs-002230 | bereitwillig | Vstřícný | (1) pakalpīgs (2) gatavs pakalpot | — | — |
| cs-004512 | vollbringen | Udělat | (1) izdarīt (2) paveikt | — | — |
| cs-005344 | der Pullover | Svetr | (1) džemperis | — | — |
| cs-004538 | einströmen | Proudit dovnitř | (1) ieplūst | — | — |
| cs-000583 | der Hagel | Kroupy | (1) krusa | — | — |
| cs-002443 | die Personalabteilung | Personální oddělení | (1) personāla daļa | — | — |
| cs-001252 | sich befinden | Nacházet se | (1) atrasties | Das Hotel befindet sich im Zentrum. | viesnīca atrodas centrā. |
| cs-003284 | heil | Zdravý | (1) vesels | — | — |
| cs-001655 | die Maßeinheit | Měrná jednotka | (1) mērvienība | — | — |
| cs-004472 | sich befassen | Řešit | (1) nodarboties ar | — | — |
| cs-002287 | die Kündigung | Ukončení pracovního poměru | (1) darba uzteikums | — | — |
| cs-005353 | das Kleinauto | Zahrádka | (1) mazlitrāžas automašīna | — | — |
| cs-001926 | der Schnappschuss | Momentní snímek | (1) momentuzņēmums fotogrāfijā | — | — |
| cs-003303 | die Äußerlichkeit | zevnějšek | (1) ārišķība | — | — |
| cs-003052 | sich hinreißen lassen | Nechat se strhnout | (1) aizrauties | — | — |
| cs-003653 | der Eisenbahnverkehr | Železniční provoz | (1) dzelzceļa satiksme | — | — |
| cs-000037 | der Strichkode | Čárový kód | (1) svītrkods | — | — |
| cs-005348 | reden | Mluvit | (1) runāt | — | — |
| cs-002169 | das Hoch | Přípitek "ať žije!" | (1) tosts “lai dzīvo!” | Wir bringen ein Hoch auf das Brautpaar aus. | mēs uzsaucam tostu jaunlaulātajiem. |
| cs-003934 | bildlich | Obrázkový | (1) figurāls (2) tēlains (3) gleznains | — | — |
| cs-004265 | das Sorgenkind | Dítě působící starosti | (1) rūpju bērns | — | — |
| cs-002414 | ebenfalls | Podobně | (1) tāpat (2) arī | — | — |
| cs-000047 | texten | Napsat text k písni nebo reklamě | (1) rakstīt tekstu dziesmai vai reklāmai | — | — |
| cs-000321 | erschrecken | Leknout se | (1) sabīties | — | — |
| cs-005345 | der Punkt | Bod | (1) punkts | — | — |
| cs-002782 | bersten | Puknout | (1) plīst (2) sasprāgt (3) saplaisāt (4) plaisāt | — | — |
| cs-005347 | rauchen | Kouřit | (1) smēķēt | — | — |
| cs-000104 | anstrengend | Náročný | (1) saspringts (2) nogurdinošs | Der Job ist anstrengend. | Darbs ir nogurdinošs. |
| cs-003701 | kreativ | Tvůrčí | (1) radošs | — | — |
| cs-000695 | zulassen | Dovolit | (1) pieļaut | — | — |
| cs-000454 | die Windschutzscheibe | Čelní sklo auta | (1) automašīnas priekšējais stikls | — | — |
| cs-005351 | anheizen | Obvinit | (1) iekurt | Wir heizen den Ofen an. | mēs iekuram krāsni. |
| cs-002876 | der Gefängnisaufseher | Vězeňský dozorce | (1) cietuma uzraugs | — | — |
| cs-004234 | barhäuptig | S holou hlavou | (1) ar kailu galvu | — | — |
| cs-005350 | der Bereich | Stát | (1) joma | Sie arbeitet im sozialen Bereich. | viņa strādā sociālajā jomā. |
| cs-000005 | gewissermaßen | Do jisté míry | (1) tā sakot (2) savā ziņā (3) zināmā mērā | — | — |
| cs-005343 | das Programm | Program | (1) programma | — | — |
| cs-002070 | der Brocken | Kus | (1) gabals | — | — |
| cs-004644 | der Kader | Složení | (1) kodols (2) sastāvs | Der Trainer wählt den Kader für das Spiel aus. | treneris izvēlas sastāvu spēlei. |
| cs-001288 | die Abnutzung | Opotřebování | (1) nodilums (2) nolietošanās (3) nolietošana | — | — |
| cs-001130 | schwinden | [zmenšit] | (1) izgaist (2) [iz]zust (3) [sa]mazināties | — | — |
| cs-001875 | die Regenfront | Dešťová fronta | (1) lietus josla | — | — |
| cs-002862 | beistimmen | Souhlasit | (1) atbalstīt (2) piebalsot | — | — |
| cs-004299 | das Alarmsignal | Poplachový signál | (1) trauksmes signāls | — | — |
| cs-004447 | der Badeort | Letovisko | (1) kūrorts | — | — |
| cs-004558 | fortbleiben | Zůstat pryč | (1) neierasties | — | — |
| cs-003777 | das Sauerkraut | Kysané zelí | (1) skābēti kāposti | — | — |
| cs-003855 | die Sportart | Druh sportu | (1) sporta veids | — | — |
| cs-003525 | die Hemmung | Překážka | (1) aizture (2) šķērslis (3) kavēklis | — | — |
| cs-001102 | verneinen | Popřít | (1) noliegt | — | — |
| cs-000074 | entwurzeln | Vymýtit | (1) galīgi izskaust (2) iznīdēt (3) izraut ar visām saknēm | — | — |
| cs-001138 | gemäß | V souladu s tím | (1) atbilstoši (2) saskaņā ar (3) pēc | — | — |
| cs-002398 | ungeachtet | Navzdory | (1) lai gan (2) neraugoties uz | — | — |
| cs-004733 | einfassen | Obklopit | (1) iedarināt apkalumā (2) ierāmēt (3) ietvert | — | — |
| cs-000196 | das Gedeck | Příbory pro jednu osobu | (1) galda piederumi vienai personai | — | — |
| cs-002822 | der Obstsaft | Ovocný džus | (1) augļu sula | — | — |
| cs-002593 | die Intensivstation | Jednotka intenzivní péče v nemocnici | (1) reanimācijas nodaļa slimnīcā | — | — |
| cs-000373 | der Zwischenraum | Prostor | (1) starptelpa (2) atstarpe | — | — |
| cs-002501 | prompt | Ihned | (1) nekavējoties | — | — |
| cs-003755 | einberufen | Odvést do vojenské služby | (1) iesaukt karadienestā (2) sasaukt | — | — |
| cs-002530 | entziehen | Odtrhnout | (1) izbēgt (2) atrauties (3) izvairīties (4) atraut (5) atņemt | — | — |
| cs-004690 | der Lektor | Vysokoškolský lektor | (1) augstskolas lektors | — | — |
| cs-000963 | unterirdisch | Podzemí- | (1) apakšzemes- | — | — |
| cs-001664 | das Darlehen | Úvěr | (1) aizņēmums (2) aizdevums | — | — |
