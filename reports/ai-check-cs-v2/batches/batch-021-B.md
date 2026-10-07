HOW-TO: šo versiju B saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-021.csv (versija C).
Gemini -> ai-gemini/batch-021.csv (versija A).
ChatGPT -> ai-chatgpt/batch-021.csv (versija B).
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
| cs-003462 | zollpflichtig | Povinný k proclení | (1) muitai pakļauts | — | — |
| cs-004237 | rollen | Válet se | (1) ripot | Der Ball rollt über den Boden. | bumba ripo pa grīdu. |
| cs-004571 | anscheinend | Zřejmě | (1) acīmredzot | — | — |
| cs-003287 | die Mailbox | E-mailová schránka | (1) elektroniskā pasta kastīte internetā | — | — |
| cs-000573 | durchlassen | Nechat projít | (1) laist cauri | — | — |
| cs-004450 | entmutigen | Odrazovat | (1) atņemt drosmi | — | — |
| cs-003514 | die Gewähr | Ručení | (1) garantija (2) galvojums (3) drošība | — | — |
| cs-000056 | das Los | Hodně | (1) loze | Jeder Teilnehmer zieht ein Los. | katrs dalībnieks izvelk lozi. |
| cs-004312 | dürsten | Žíznit | (1) alkt (2) būt izslāpušam (3) slāpt | — | — |
| cs-005236 | die Kartoffel | Brambor | (1) kartupelis | — | — |
| cs-002330 | gehörig | Příslušný | (1) piedienīgs (2) pienācīgs (3) piederošs (4) piederīgs | — | — |
| cs-000176 | der Junkie | Narkoman | (1) narkomāns | — | — |
| cs-001054 | der Unterhalt | Zásobovat | (1) apgādāšana (2) apgāde (3) apgādība | — | — |
| cs-003165 | das College | Vysoká škola | (1) koledža | — | — |
| cs-002256 | unbemerkbar | Neznatelný | (1) nepamanāms | — | — |
| cs-003082 | die Fürsprache | Dobré slovo na něčí podporu | (1) aizbilstams labs vārds (2) aizrunāšana | — | — |
| cs-004013 | begehren | Prahnout po | (1) kārot (2) iekārot (3) tīkot (4) pieprasīt (5) prasīt | — | — |
| cs-000701 | übertragen | Přenášet nakažlivé nemoci | (1) [pār]tulkot (2) pārraidīt pa radio (3) pārnēsāt lipīgās slimības (4) pārnest | — | — |
| cs-001428 | nachhaltig | Udržitelný | (1) ilgtspējīgs | — | — |
| cs-003016 | übertreten | Překročit něco | (1) pārkāpt kaut kam pāri (2) pārkāpt likumu | — | — |
| cs-003345 | das Freie | Volné prostranství | (1) brīva daba | — | — |
| cs-003729 | die Krankenversicherung | Zdravotní pojištění | (1) apdrošinājums slimības gadījumā | — | — |
| cs-003439 | der Götzendienst | Sloužit idolu | (1) kalpošana elkam | — | — |
| cs-004720 | die Tierhandlung | Zverimex | (1) zooveikals | — | — |
| cs-002209 | länglich | Protáhlý | (1) iegarens | — | — |
| cs-004610 | die Ameisen | Mravenci | (1) skudras | — | — |
| cs-004750 | die Originalfassung | Původní varianta | (1) oriģinālvariants | — | — |
| cs-000506 | die Besatzungstruppen | Okupační vojska | (1) okupācijas karaspēks | — | — |
| cs-004438 | der Schein | Lesk | (1) spīdums | — | — |
| cs-003247 | abstoßend | Hnusný | (1) pretīgs (2) atbaidošs | — | — |
| cs-002382 | die Oberhand | Převaha | (1) virsroka | — | — |
| cs-003482 | gelangen | Dostat se k | (1) nokļūt | — | — |
| cs-003428 | der Gasableser | Odečítač plynoměru | (1) gāzes skaitītājs | — | — |
| cs-004652 | umkreisen | Vznášet se | (1) riņķot (2) laisties (3) lidināties (4) aplenkt (5) ielenkt | — | — |
| cs-003747 | der Stau | Dopravní zácpa | (1) automašīnu sastrēgums | — | — |
| cs-001349 | sich fortpflanzen | Šířit | (1) izplatīties (2) vairoties | — | — |
| cs-000375 | der Dämpfer | Atenuátor | (1) vājinātājs | — | — |
| cs-005242 | die Funkstation | Rádiová zpráva | (1) raidstacija | — | — |
| cs-000700 | stürzen | Spadnout | (1) gāzties | Er stürzte auf der Treppe. | viņš nokrita uz kāpnēm. |
| cs-003333 | knapp | Nuzný | (1) trūcīgs | Die Zeit ist knapp. | laika ir maz. |
| cs-003577 | finden | Myslet si | (1) atrast | Ich finde meinen Schlüssel. | Es atrodu savu atslēgu. |
| cs-003139 | das Reinemachen | Čištění | (1) uzkopšana | — | — |
| cs-001829 | die Erbkrankheit | Dědičné onemocnění | (1) iedzimta slimība | — | — |
| cs-005245 | besänftigen | Pozdravit | (1) apklusināt (2) remdināt (3) remdēt (4) nomierināt | — | — |
| cs-001426 | der Nebelschwaden | Pás mlhy | (1) miglas vāls | — | — |
| cs-004033 | plump | Neohrabaný | (1) lempīgs | — | — |
| cs-001230 | der Defekt | Porucha | (1) kļūme (2) tehnisks trūkums | — | — |
| cs-001803 | erlernen | Naučit se | (1) iemācīties | — | — |
| cs-000412 | vertagen | Odložit | (1) nolikt (2) atlikt | — | — |
| cs-005241 | durchschnittlich | Radikální | (1) vidēji | — | — |
| cs-001476 | sich gesellen | Připojit se | (1) pievienoties | — | — |
| cs-002830 | die Sonnenbrille | Sluneční brýle | (1) saulesbrilles | — | — |
| cs-002650 | die Order | Nařízení | (1) uzdevums (2) pavēle (3) rīkojums | — | — |
| cs-003801 | das Verhör | [Z] výslechu | (1) [no]pratināšana | — | — |
| cs-004256 | die Reiseroute | Cestovní trasa | (1) ceļojuma maršruts | — | — |
| cs-001580 | schwerfällig | Objemný | (1) tūļīgs (2) smagnējs | — | — |
| cs-005239 | das Kleid | Šaty | (1) kleita | — | — |
| cs-000704 | der Lebenserhaltungstrieb | Pud zachování života | (1) dzīvības dziņa | — | — |
| cs-003166 | die Hängebrücke | Lanový most | (1) vanšu tilts | — | — |
| cs-003835 | der Verfall | Zhroucení | (1) pagrimums (2) panīkums (3) sabrukums | — | — |
| cs-001742 | einschlagen | Udeřit | (1) iesist | — | — |
| cs-005246 | der Goldbarren | Ještěrka | (1) zelta stienis | — | — |
| cs-003324 | das Hartgeld | Mince | (1) monētas | — | — |
| cs-000751 | bohnern | Voskovat podlahu | (1) vaskot grīdu | — | — |
| cs-003222 | die Gewissheit | Určitost | (1) noteiktība (2) drošība (3) skaidrība | — | — |
| cs-003918 | herunterstürzen | Zřítit se | (1) gāzties zemē (2) krist zemē | — | — |
| cs-003335 | durchschlagen | Prorazit díru | (1) izsist caurumu (2) izsisties cauri (3) izlaist caur sietu (4) izkāst | — | — |
| cs-003808 | bewähren, sich | Osvědčit se | (1) attaisnoties (2) izrādīties par patiesu | — | — |
| cs-002359 | halbtags | Na půl úvazku | (1) nepilnu darba dienu | — | — |
| cs-003264 | sesshaft | Usazený | (1) nometnieku (2) vienā vietā dzīvojošs | — | — |
| cs-004699 | belustigen | Bavit | (1) uzjautrināt | — | — |
| cs-005244 | reißen | Odnést | (1) plīst | Das Seil reißt. | virve plīst. |
| cs-005240 | die Kleidung | Oblečení | (1) apģērbs | — | — |
| cs-004675 | imitieren | Napodobovat | (1) imitēt | — | — |
| cs-004353 | der Aufruf | Zvolání | (1) aicinājums (2) uzsaukums | — | — |
| cs-004230 | der Versager | Poražený | (1) neveiksminieks (2) zaudētājs | — | — |
| cs-001978 | das Moment | Rozhodující okolnost | (1) faktors (2) izšķirošais apstāklis | — | — |
| cs-003422 | sich weigern | Odmítnout | (1) atteikties | — | — |
| cs-004580 | ausstrecken | Natáhnout | (1) izstiept | — | — |
| cs-002896 | die Durchfuhr | Tranzit | (1) tranzīts (2) caurbraukšana | — | — |
| cs-005235 | die Karotte | Mrkev | (1) burkāns | — | — |
| cs-005238 | die Katze | Kočka | (1) kaķis | — | — |
| cs-002306 | übrigens | Mimochodem | (1) starp citu | — | — |
| cs-002687 | bebauen | Proces | (1) apbūvēt (2) apstrādāt | — | — |
| cs-000466 | gedenken | Připomínat | (1) pieminēt (2) atminēties (3) atcerēties (4) būt nodomājušam | — | — |
| cs-003688 | der Posten | Pozice | (1) amats | Sie bekam einen neuen Posten im Ministerium. | viņa ieguva jaunu amatu ministrijā. |
| cs-004067 | die Weide | Pastvina | (1) ganības | — | — |
| cs-004141 | vor | Za | (1) priekšā (2) pirms | Vor dem Essen wasche ich die Hände. | pirms ēšanas es mazgāju rokas. |
| cs-000779 | der Blutsverwandte | Pokrevní příbuzný | (1) asinsradinieks | — | — |
| cs-005237 | der Käse | Sýr | (1) siers | — | — |
| cs-001783 | austragen | Doručit | (1) izcīnīt (2) piegādāt (3) iznēsāt | — | — |
| cs-004318 | die Vorbildung | Předchozí znalosti | (1) sagatavotība (2) priekšzināšanas | — | — |
| cs-002544 | dünken | Připadat | (1) šķist (2) likties | — | — |
| cs-000838 | verkümmern | Chřadnout | (1) panīkt | — | — |
| cs-005243 | der Betracht | Soulad | (1) apsvēršana (2) vērā ņemšana | — | — |
| cs-000654 | die Decke | Deka | (1) sega | Die Decke ist warm. | sega ir silta. |
| cs-000039 | der Heimwerker | Domácí mistr | (1) mājmeistars (2) mājamatnieks | — | — |
| cs-000197 | mildern | Zmírnit úsudek | (1) mīkstināt spriedumu (2) remdināt sāpes | — | — |
| cs-001329 | ranzig | Tuku | (1) sviestu (2) taukiem (3) rūgtens par krējumu (4) sasmacis | — | — |
| cs-004471 | umhören, sich | Popovídat se | (1) apklausīties | — | — |
