HOW-TO: šo versiju B saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-004.csv (versija A).
Gemini -> ai-gemini/batch-004.csv (versija B).
ChatGPT -> ai-chatgpt/batch-004.csv (versija C).
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
| cs-003072 | ausweisen | Poslat | (1) pierādīt (2) apstiprināt (3) izsūtīt (4) izraidīt | — | — |
| cs-003293 | der Berufsboxer | Profesionální boxer | (1) profesionālais bokseris | — | — |
| cs-002465 | der Kraftwagen | Auto | (1) automašīna | — | — |
| cs-000502 | dingen | Souhlasit | (1) salīgt (2) līgt | — | — |
| cs-000760 | exklusiv | Vybraný | (1) aristokrātisks (2) smalks (3) izmeklēts | — | — |
| cs-005035 | aufpassen | Dávat pozor | (1) uzmanīties | — | — |
| cs-001104 | lehren | Učit | (1) mācīt | — | — |
| cs-002733 | sich entschuldigen | Omluvit se | (1) atvainoties | — | — |
| cs-003751 | die Genmanipulation | Genová manipulace | (1) gēnu pārveidošana | — | — |
| cs-005033 | auch | Také | (1) arī | Ich komme auch. | Es arī nāku. |
| cs-005040 | die Einfuhrbeschränkung | Jediné dítě v rodině | (1) importa ierobežojums | — | — |
| cs-001439 | regeln | Vytřídit | (1) kārtot | Wir regeln das morgen. | mēs to nokārtosim rīt. |
| cs-003962 | die Erscheinung | Vzhled | (1) izskats (2) āriene (3) parādīšanās (4) parādība | — | — |
| cs-003102 | die Unterlage | Data | (1) dokumentācija (2) dati (3) balsts (4) paliktnis (5) paklājs (6) paliekamais | — | — |
| cs-001409 | die Vorwahl | Kód jiného města nebo země v telefonickém rozhovoru | (1) tālruņa sarunā citas pilsētas vai valsts kods | — | — |
| cs-003253 | die Landzunge | Pevninský výběžek | (1) zemes mēle | — | — |
| cs-000059 | gleichmütig | Chladnokrevný | (1) aukstasinīgs (2) nosvērts | — | — |
| cs-000296 | das Stabhochspringen | Skok o tyči | (1) kārtslēkšana | — | — |
| cs-002362 | abliefern | Předat | (1) nodot | — | — |
| cs-001285 | sich enthalten | Zdržet se | (1) atturēties no | — | — |
| cs-002419 | funken | Vysílat v rádiu | (1) pārraidīt pa radio | — | — |
| cs-004382 | das Krautwerk | Byliny | (1) garšsaknes | — | — |
| cs-003457 | latent | Neznatelný | (1) nemanāms (2) slēpts | — | — |
| cs-004156 | der Affekt | Výbuch emocí | (1) emociju uzliesmojums | — | — |
| cs-005038 | schmerzstillend | Smutný | (1) sāpes remdējošs | — | — |
| cs-001665 | der Giftmüll | Toxické odpady | (1) indīgās atkritumvielas | — | — |
| cs-005039 | mittels | Mít s sebou | (1) ar kaut kā palīdzību | — | — |
| cs-004520 | das Parfüm | Parfém | (1) smaržas | — | — |
| cs-002263 | eingebildet | Nadutý | (1) uzpūtīgs (2) iedomīgs | — | — |
| cs-000560 | der Berichterstatter | Referent | (1) reportieris (2) korespondents (3) ziņotājs (4) referents | — | — |
| cs-002966 | runzeln | Vrásčit se | (1) saraukt pieri (2) savilkt grumbās | — | — |
| cs-005032 | atmen | Dýchat | (1) elpot | — | — |
| cs-002927 | angrenzen | Hraničit s | (1) robežoties | — | — |
| cs-000240 | die Naturseide | Přírodní hedvábí | (1) dabiskais zīds | — | — |
| cs-004137 | veranschlagen | Kalkulovat | (1) sastādīt tāmi (2) kalkulēt (3) aprēķināt | — | — |
| cs-004513 | neuerdings | Znovu | (1) atkal (2) no jauna (3) šais dienās (4) nesen | — | — |
| cs-002259 | die Fessel | Okovy | (1) važas (2) ķēde | — | — |
| cs-003004 | das Essbesteck | Příbory | (1) galda piederumi | — | — |
| cs-001890 | vervollkommnen | Zlepšit | (1) uzlabot (2) papildināt | — | — |
| cs-000012 | sich verlassen | Spoléhat na | (1) paļauties | — | — |
| cs-001575 | behalten | Ponechat | (1) atcerēties (2) paturēt | Du kannst das Buch behalten. | tu vari paturēt grāmatu. |
| cs-000358 | verdünnen | Oslabit | (1) vājināt (2) ķīm. atšķaidīt (3) padarīt tievāku | — | — |
| cs-001902 | der Zuwachs | Zvýšení | (1) pieaugums | — | — |
| cs-001083 | der Dank | Vděčnost | (1) pateicība | Vielen Dank! | liels paldies! |
| cs-002671 | die Klaue | Dráp ptáka nebo zvířete | (1) putna vai zvēra nags | — | — |
| cs-002629 | spötteln | Ironizovat | (1) ironizēt | — | — |
| cs-003890 | die Brotschnitte | Krajíc chleba | (1) maizes šķēle | — | — |
| cs-002718 | die Fracht | Přepravné | (1) frakts (2) krava | — | — |
| cs-002149 | donnern | Rachot | (1) dārdēt (2) rībēt (3) pērkons rūc | — | — |
| cs-003616 | der Rivale | Konkurent | (1) konkurents (2) sāncensis | — | — |
| cs-001598 | die Limonade | Limonáda | (1) limonāde | — | — |
| cs-001545 | der Personenkraftwagen | Osobní automobil | (1) vieglā automašīna | — | — |
| cs-003619 | die Beute | Zisk | (1) trofeja (2) guvums (3) laupījums | — | — |
| cs-003368 | zürnen | Vztekat se | (1) dusmoties | — | — |
| cs-003978 | gerinnen | Srazit se | (1) sasalt (2) sastingt (3) sakupt (4) saiet (5) sarecēt | — | — |
| cs-000138 | der Hochsprung | Skok vysoký | (1) augstlēkšana | — | — |
| cs-002052 | dies und jenes | Tohle a tamto | (1) šis un tas | — | — |
| cs-000257 | der Schiffbruch | Lodní katastrofa | (1) kuģa bojāeja katastrofa | — | — |
| cs-003042 | schwer fallen | Být obtížné | (1) sagādāt grūtības | — | — |
| cs-004579 | wegschaffen | Odstranit | (1) aizvākt | — | — |
| cs-002025 | der Dunst | Dusno | (1) dūmaka (2) migla (3) tvans (4) izgarojumi (5) garaiņi (6) tvaiks | — | — |
| cs-003792 | die Baumschule | Stromová školka | (1) kokaudzētava | — | — |
| cs-005041 | der Blumenkranz | Kytice květin | (1) ziedu vainags | — | — |
| cs-002986 | der Matsch | bláto | (1) šļaka (2) dubļi | — | — |
| cs-004385 | der Treffer | Hit | (1) trāpījums | — | — |
| cs-002295 | die Schutzhülle | Ochranný kryt | (1) aizsargapvalks | — | — |
| cs-000625 | gratis | Zdarma | (1) par velti (2) bez maksas | — | — |
| cs-000554 | beurteilen | Hodnotit | (1) vērtēt | — | — |
| cs-003289 | angelegt | Investovaný | (1) ieguldīts (2) izveidots | — | — |
| cs-000489 | verfügen | Přikázat | (1) norīkot (2) pavēlēt (3) noteikt | — | — |
| cs-000325 | bestreiten | Hradit | (1) segt (2) samaksāt (3) apstrīdēt | — | — |
| cs-000444 | einweihen | Zasvětit do tajemství | (1) uzticēt noslēpumu (2) svinīgi atklāt | — | — |
| cs-004215 | fade | Nudný | (1) garlaicīgs | — | — |
| cs-005031 | die Ärztin | Lékařka | (1) ārste | — | — |
| cs-005042 | das Abendblatt | Trofej | (1) vakara laikraksts | — | — |
| cs-001277 | der Funkspruch | Radiogram | (1) radiogramma | — | — |
| cs-003718 | die Stufe | Krok | (1) pakāpiens | — | — |
| cs-004086 | die Einreise | Vstup | (1) ieceļošana | — | — |
| cs-003621 | das Besteck | Příbory | (1) galda piederumi | — | — |
| cs-005034 | auf | Na | (1) uz | Ich stelle das Buch auf den Tisch. | es lieku grāmatu uz galda. |
| cs-004252 | entsprechen | Odpovídá | (1) atbilst | Das entspricht den Regeln. | tas atbilst noteikumiem. |
| cs-004493 | der Fehlalarm | Planý poplach | (1) viltus trauksme | — | — |
| cs-002191 | der Speichel | Sliny | (1) siekalas | — | — |
| cs-003560 | dringen | Prodírat se | (1) pieprasīt (2) prasīt (3) ielauzties (4) iespiesties (5) lauzties (6) spiesties | — | — |
| cs-001437 | das Gespür | Intuice | (1) intuīcija | — | — |
| cs-000443 | starrsinnig | Tvrdohlavý | (1) ietiepīgs (2) stūrgalvīgs | — | — |
| cs-002300 | zutrauen | Považovat za schopného | (1) domāt spējīgu (2) gaidīt | — | — |
| cs-003807 | das Heiligtum | Svatost | (1) svētums (2) svētvieta | — | — |
| cs-004150 | die Heftklammer | Sešívací sponka | (1) saspraude | — | — |
| cs-005037 | der Eisenbeton | Slévárna litiny | (1) dzelzsbetons | — | — |
| cs-003050 | ofenfrisch | Čerstvě upečený | (1) svaigi cepts | — | — |
| cs-001028 | hinsichtlich | Kvůli | (1) sakarā ar (2) attiecībā uz | — | — |
| cs-000869 | umkehren | Vrátit se | (1) griezties atpakaļ | — | — |
| cs-002245 | kaputtgehen | Rozbít se | (1) salūzt | — | — |
| cs-000212 | aufkommen | Vzniknout | (1) rasties | — | — |
| cs-005036 | aufstehen | Vstát | (1) piecelties | — | — |
| cs-003932 | fleckig | Plamenný | (1) raibs (2) lāsains (3) plankumains (4) notraipīts (5) traipains | — | — |
| cs-004025 | die Prise | Špetka soli nebo pepře | (1) šķipsniņa sāls vai piparu | — | — |
| cs-004060 | die Unterschätzung | Podcenění | (1) novērtēšana par zemu (2) nepietiekams novērtējums | — | — |
| cs-001067 | misslingen | Nepodařit se | (1) neizdoties | — | — |
