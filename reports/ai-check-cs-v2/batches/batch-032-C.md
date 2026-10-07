HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-032.csv (versija B).
Gemini -> ai-gemini/batch-032.csv (versija C).
ChatGPT -> ai-chatgpt/batch-032.csv (versija A).
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
| cs-001207 | der Schrecken | Děs | (1) izbailes | — | — |
| cs-003922 | heißen | Jmenovat se | (1) saukties | Ich heiße Anna. | mani sauc Anna. |
| cs-003531 | toll | Skvělý | (1) brīnišķīgs (2) lielisks (3) foršs | Das Konzert war toll! | koncerts bija lielisks! |
| cs-005375 | grenzen | Distancovat se | (1) robežoties | — | — |
| cs-005371 | der Schnee | Sníh | (1) sniegs | — | — |
| cs-004476 | der Eiskaffee | Káva se zmrzlinou | (1) kafija ar saldējumu | — | — |
| cs-002965 | präzise | Přesný | (1) precīzs | — | — |
| cs-005377 | die Einbildung | Příprava | (1) fantāzija (2) iedomība (3) uzpūtība (4) iedoma (5) iztēle | — | — |
| cs-004363 | sich revanchieren | Pomstít se | (1) atmaksāt (2) atriebties | — | — |
| cs-003340 | gewissermaßen | V jistém smyslu | (1) tā sakot (2) zināmā mērā (3) savā ziņā | — | — |
| cs-003954 | das Gefallen | Libost | (1) patikšana (2) patika | — | — |
| cs-002029 | die Gebärde | Výraz | (1) vaibsts (2) žests | — | — |
| cs-004488 | die Abnutzung | Opotřebování | (1) nodilums (2) nolietošana (3) nolietošanās | — | — |
| cs-002745 | die Sprechstunde | Přijímací hodiny | (1) pieņemšanas laiks | — | — |
| cs-002221 | der Lieferwagen | Malý nákladní vůz pro odvoz zboží | (1) neliela kravas automašīna preču izvadāšanai | — | — |
| cs-002773 | sich nähern | Přiblížit se | (1) tuvoties | — | — |
| cs-005368 | der Schlüssel | Klíč | (1) atslēga | — | — |
| cs-002450 | egal | Je mi to jedno | (1) vienalga | — | — |
| cs-001565 | die Wählscheibe | Otočný číselník telefonu | (1) tālruņa ciparu ripa | — | — |
| cs-005374 | der Blutsverwandte | Náhlé krvácení z úst nebo nosu | (1) asinsradinieks | — | — |
| cs-003313 | erheben | Protestovat | (1) sacelt (2) protestēt (3) pacelt (4) celt | — | — |
| cs-001503 | dadurch | Tedy | (1) tādējādi | Er hat viel gelernt. Dadurch hat er bestanden. | viņš daudz mācījās. Tādējādi viņš nokārtoja eksāmenu. |
| cs-000308 | abgetan | Ukončený | (1) nokārtots (2) izbeigts | — | — |
| cs-000762 | entzückt | Okouzlený | (1) sajūsmināts | — | — |
| cs-001154 | der Gegensatz | Kontrast | (1) pretruna (2) pretstats (3) kontrasts | — | — |
| cs-002288 | die Hetze | Podněcování | (1) rīdīšana (2) kūdīšana | — | — |
| cs-001567 | sich begeben | Vydat se | (1) doties | — | — |
| cs-001660 | die Grundkenntnis | Základní znalosti | (1) pamatzināšanas | — | — |
| cs-000644 | schärfsinnig | Bystrý | (1) attapīgs (2) asprātīgs (3) ar asu prātu | — | — |
| cs-004354 | neunzehnte | Devatenáctý | (1) deviņpadsmitais | — | — |
| cs-002355 | bejahen | Tvrdit | (1) apgalvot (2) apstiprināt | — | — |
| cs-005378 | die Geländefahrt | Životní partner | (1) apvidus brauciens | — | — |
| cs-003844 | die Einfuhr | Importování | (1) ievešana (2) importēšana (3) ievedums (4) imports | — | — |
| cs-004713 | die Fahrprüfung | Řidičský test | (1) braukšanas eksāmens | — | — |
| cs-002603 | der Operator | Specialista obsluhy velkých počítačů | (1) lielu datoru apkalpes speciālists | — | — |
| cs-002296 | bestürzt | Zmatený | (1) apmulsis (2) apjucis (3) pārsteigts (4) samulsis | — | — |
| cs-004703 | der Kassettenrecorder | Kazetový magnetofon | (1) kasešu magnetofons | — | — |
| cs-001855 | ungerade | Křivý | (1) nepārskaitlis (2) ne visai taisns (3) līks | — | — |
| cs-000452 | unterordnen | Podrobit | (1) pakļaut (2) pakārtot | — | — |
| cs-001132 | der Dünkel | Namyšlenost | (1) augstprātība (2) iedomība (3) uzpūtība | — | — |
| cs-005367 | schlecht | Špatný | (1) slikts | — | — |
| cs-000581 | fortschreiten | Dále se rozvíjet | (1) attīstīties tālāk | — | — |
| cs-003136 | die Saat | Semínko | (1) sēkla | Die Saat geht auf. | sējums dīgst. |
| cs-003349 | das Maß | Starosta | (1) mērs | Alles hat sein Maß. | visam ir savs mērs. |
| cs-005370 | schmutzig | Špinavý | (1) netīrs | — | — |
| cs-000457 | der Rachen | Hrdlo | (1) rīkle | — | — |
| cs-002239 | das Altersheim | Pečovatelský dům pro seniory | (1) veco ļaužu pansionāts | — | — |
| cs-002827 | gemütvoll | Útulný | (1) sirsnīgs (2) omulīgs | — | — |
| cs-000696 | die Jagdbeute | Lovecká kořist | (1) medījums | — | — |
| cs-000717 | das Dasein | Existence | (1) eksistence (2) esamība | — | — |
| cs-003948 | die Regung | Sklon | (1) tieksme (2) kustība (3) jūtu uzplūdums | — | — |
| cs-002559 | eingerechnet | Zahrnutý | (1) pieskaitīts (2) ierēķināts (3) ieskaitīts | — | — |
| cs-001694 | antifaschistisch | Protifašistický | (1) antifašistisks | — | — |
| cs-004042 | allerhand | Různý | (1) visādi (2) dažādi | — | — |
| cs-002951 | siegreich | Úspěšný | (1) uzvarām vainagots | — | — |
| cs-005369 | schmecken | Chutnat | (1) garšot | — | — |
| cs-004408 | das Wahlfach | Volitelný předmět na škole nebo univerzitě | (1) fakultatīvs priekšmets skolā vai augstskolā | — | — |
| cs-002350 | der Stromverbrauch | Spotřeba elektřiny | (1) strāvas patēriņš | — | — |
| cs-001001 | das Gerede | Drby | (1) ļaužu valodas (2) tenkas (3) runāšana (4) runas | — | — |
| cs-001515 | die Droge | Drogy | (1) narkotikas | — | — |
| cs-001764 | namhaft | Slavný | (1) ievērojams (2) slavens | — | — |
| cs-000096 | flüchtig | Pomíjivý | (1) acumirklīgs (2) ātri pārejošs (3) īslaicīgs (4) gaistošs (5) paviršs | — | — |
| cs-000896 | holen | Přinést | (1) atnest | Ich hole die Kinder von der Schule ab. | es paņemu bērnus no skolas. |
| cs-000708 | injizieren | Aplikovat injekci | (1) injicēt | — | — |
| cs-002761 | sich bemächtigen | Zmocnit se | (1) sagrābt (2) saņemt savā varā | — | — |
| cs-003750 | gern | Rád | (1) labprāt | — | — |
| cs-002566 | berücksichtigen | Vzít v úvahu | (1) ņemt vērā | — | — |
| cs-004602 | die Massenware | Konzumní zboží | (1) plaša patēriņa prece | — | — |
| cs-002539 | der Kriegsbeschädigte | Válečný invalida | (1) kara invalīds | — | — |
| cs-002141 | die Athletik | Atletika | (1) atlētika | — | — |
| cs-005373 | der Güterbahnhof | Přeprava zboží | (1) preču stacija | — | — |
| cs-001272 | der Wahlbezirk | Volební obvod | (1) vēlēšanu apgabals | — | — |
| cs-004453 | erschöpfen | Unavit | (1) izsmelt (2) nogurdināt | — | — |
| cs-001042 | das Druckpapier | Tiskový papír | (1) iespiedpapīrs | — | — |
| cs-000202 | sausen | Hvízdat | (1) drāzties (2) brāzties (3) šalkt (4) svilpt | — | — |
| cs-005372 | schneien | Sněžit | (1) snigt | — | — |
| cs-004404 | die Bierstube | Pivní hospoda | (1) alus krodziņš | — | — |
| cs-002837 | die Landenge | Pevninská šíje | (1) zemes šaurums | — | — |
| cs-002376 | das Hochwasser | Vysoká hladina vody | (1) plūdi (2) augsts ūdens līmenis | Nach dem Regen gibt es Hochwasser. | pēc lietus ir plūdi. |
| cs-001361 | der Brühwürfel | Bujónová kostka | (1) buljona kubiņš | — | — |
| cs-000733 | der Halt | Podpora | (1) atbalsts | — | — |
| cs-000948 | die Abart | Odchylka | (1) aberrācija (2) novirze | — | — |
| cs-001295 | mehr | Více | (1) vairāk | — | — |
| cs-001334 | die Pfeife | Píšťalka | (1) svilpe | — | — |
| cs-003433 | die Vaterschaftsklage | Žaloba o určení otcovství | (1) sūdzība tiesā paternitātes noteikšanai | — | — |
| cs-001574 | der Bankscheck | Bankovní šek | (1) bankas čeks | — | — |
| cs-001748 | blenden | Mást | (1) apmulsināt (2) maldināt (3) žilbināt (4) apžilbināt | — | — |
| cs-004303 | eindringen | Vsáknout | (1) iesūkties (2) iedziļināties (3) iespiesties (4) ielauzties | — | — |
| cs-002556 | vorläufig | Dočasný | (1) pagaidu | — | — |
| cs-002710 | einteilen | Přiřadit | (1) iedalīt | — | — |
| cs-004204 | das Schaustück | Exponát | (1) eksponāts | — | — |
| cs-001866 | verordnen | Stanovit | (1) med. parakstīt (2) noteikt (3) dot rīkojumu | — | — |
| cs-001649 | überbringen | Předat zprávu | (1) vēstuli (2) dāvanu (3) nodot ziņu (4) apsveikumu | — | — |
| cs-004466 | kriegerisch | Válečnický | (1) kareivīgs | — | — |
| cs-003869 | die Öffentlichkeit | Otevřenost | (1) sabiedrība (2) atklātība | Die Öffentlichkeit reagierte kritisch. | sabiedrība reaģēja kritiski. |
| cs-002003 | zumachen | Zavřít | (1) aiztaisīt | — | — |
| cs-004581 | das Sorgerecht | Rodičovská péče | (1) tiesības rūpēties | — | — |
| cs-005376 | die Einfuhrsperre | Omezení dovozu | (1) importa blokāde | — | — |
| cs-000235 | vorfristig | Před termínem | (1) pirms termiņa (2) pirmstermiņa | — | — |
| cs-002155 | batteriebetrieben | Na baterie | (1) darbināms ar bateriju | — | — |
