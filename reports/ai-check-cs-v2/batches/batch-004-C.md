HOW-TO: šo versiju C saņem ChatGPT.
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
| cs-003072 | ausweisen | Poslat | (1) apstiprināt (2) pierādīt (3) izraidīt (4) izsūtīt | — | — |
| cs-003293 | der Berufsboxer | Profesionální boxer | (1) profesionālais bokseris | — | — |
| cs-002465 | der Kraftwagen | Auto | (1) automašīna | — | — |
| cs-000502 | dingen | Souhlasit | (1) salīgt (2) līgt | — | — |
| cs-000760 | exklusiv | Vybraný | (1) aristokrātisks (2) izmeklēts (3) smalks | — | — |
| cs-005035 | aufpassen | Dávat pozor | (1) uzmanīties | — | — |
| cs-001104 | lehren | Učit | (1) mācīt | — | — |
| cs-002733 | sich entschuldigen | Omluvit se | (1) atvainoties | — | — |
| cs-003751 | die Genmanipulation | Genová manipulace | (1) gēnu pārveidošana | — | — |
| cs-005033 | auch | Také | (1) arī | Ich komme auch. | Es arī nāku. |
| cs-005040 | die Einfuhrbeschränkung | Jediné dítě v rodině | (1) importa ierobežojums | — | — |
| cs-001439 | regeln | Vytřídit | (1) kārtot | Wir regeln das morgen. | mēs to nokārtosim rīt. |
| cs-003962 | die Erscheinung | Vzhled | (1) āriene (2) izskats (3) parādība (4) parādīšanās | — | — |
| cs-003102 | die Unterlage | Data | (1) paliktnis (2) balsts (3) dati (4) dokumentācija (5) paliekamais (6) paklājs | — | — |
| cs-001409 | die Vorwahl | Kód jiného města nebo země v telefonickém rozhovoru | (1) tālruņa sarunā citas pilsētas vai valsts kods | — | — |
| cs-003253 | die Landzunge | Pevninský výběžek | (1) zemes mēle | — | — |
| cs-000059 | gleichmütig | Chladnokrevný | (1) aukstasinīgs (2) nosvērts | — | — |
| cs-000296 | das Stabhochspringen | Skok o tyči | (1) kārtslēkšana | — | — |
| cs-002362 | abliefern | Předat | (1) nodot | — | — |
| cs-001285 | sich enthalten | Zdržet se | (1) atturēties no | — | — |
| cs-002419 | funken | Vysílat v rádiu | (1) pārraidīt pa radio | — | — |
| cs-004382 | das Krautwerk | Byliny | (1) garšsaknes | — | — |
| cs-003457 | latent | Neznatelný | (1) slēpts (2) nemanāms | — | — |
| cs-004156 | der Affekt | Výbuch emocí | (1) emociju uzliesmojums | — | — |
| cs-005038 | schmerzstillend | Smutný | (1) sāpes remdējošs | — | — |
| cs-001665 | der Giftmüll | Toxické odpady | (1) indīgās atkritumvielas | — | — |
| cs-005039 | mittels | Mít s sebou | (1) ar kaut kā palīdzību | — | — |
| cs-004520 | das Parfüm | Parfém | (1) smaržas | — | — |
| cs-002263 | eingebildet | Nadutý | (1) uzpūtīgs (2) iedomīgs | — | — |
| cs-000560 | der Berichterstatter | Referent | (1) korespondents (2) reportieris (3) referents (4) ziņotājs | — | — |
| cs-002966 | runzeln | Vrásčit se | (1) savilkt grumbās (2) saraukt pieri | — | — |
| cs-005032 | atmen | Dýchat | (1) elpot | — | — |
| cs-002927 | angrenzen | Hraničit s | (1) robežoties | — | — |
| cs-000240 | die Naturseide | Přírodní hedvábí | (1) dabiskais zīds | — | — |
| cs-004137 | veranschlagen | Kalkulovat | (1) sastādīt tāmi (2) aprēķināt (3) kalkulēt | — | — |
| cs-004513 | neuerdings | Znovu | (1) no jauna (2) atkal (3) nesen (4) šais dienās | — | — |
| cs-002259 | die Fessel | Okovy | (1) važas (2) ķēde | — | — |
| cs-003004 | das Essbesteck | Příbory | (1) galda piederumi | — | — |
| cs-001890 | vervollkommnen | Zlepšit | (1) uzlabot (2) papildināt | — | — |
| cs-000012 | sich verlassen | Spoléhat na | (1) paļauties | — | — |
| cs-001575 | behalten | Ponechat | (1) atcerēties (2) paturēt | Du kannst das Buch behalten. | tu vari paturēt grāmatu. |
| cs-000358 | verdünnen | Oslabit | (1) vājināt (2) padarīt tievāku (3) ķīm. atšķaidīt | — | — |
| cs-001902 | der Zuwachs | Zvýšení | (1) pieaugums | — | — |
| cs-001083 | der Dank | Vděčnost | (1) pateicība | Vielen Dank! | liels paldies! |
| cs-002671 | die Klaue | Dráp ptáka nebo zvířete | (1) putna vai zvēra nags | — | — |
| cs-002629 | spötteln | Ironizovat | (1) ironizēt | — | — |
| cs-003890 | die Brotschnitte | Krajíc chleba | (1) maizes šķēle | — | — |
| cs-002718 | die Fracht | Přepravné | (1) krava (2) frakts | — | — |
| cs-002149 | donnern | Rachot | (1) dārdēt (2) pērkons rūc (3) rībēt | — | — |
| cs-003616 | der Rivale | Konkurent | (1) sāncensis (2) konkurents | — | — |
| cs-001598 | die Limonade | Limonáda | (1) limonāde | — | — |
| cs-001545 | der Personenkraftwagen | Osobní automobil | (1) vieglā automašīna | — | — |
| cs-003619 | die Beute | Zisk | (1) trofeja (2) laupījums (3) guvums | — | — |
| cs-003368 | zürnen | Vztekat se | (1) dusmoties | — | — |
| cs-003978 | gerinnen | Srazit se | (1) sakupt (2) sastingt (3) sasalt (4) sarecēt (5) saiet | — | — |
| cs-000138 | der Hochsprung | Skok vysoký | (1) augstlēkšana | — | — |
| cs-002052 | dies und jenes | Tohle a tamto | (1) šis un tas | — | — |
| cs-000257 | der Schiffbruch | Lodní katastrofa | (1) kuģa bojāeja katastrofa | — | — |
| cs-003042 | schwer fallen | Být obtížné | (1) sagādāt grūtības | — | — |
| cs-004579 | wegschaffen | Odstranit | (1) aizvākt | — | — |
| cs-002025 | der Dunst | Dusno | (1) izgarojumi (2) tvans (3) migla (4) dūmaka (5) tvaiks (6) garaiņi | — | — |
| cs-003792 | die Baumschule | Stromová školka | (1) kokaudzētava | — | — |
| cs-005041 | der Blumenkranz | Kytice květin | (1) ziedu vainags | — | — |
| cs-002986 | der Matsch | bláto | (1) dubļi (2) šļaka | — | — |
| cs-004385 | der Treffer | Hit | (1) trāpījums | — | — |
| cs-002295 | die Schutzhülle | Ochranný kryt | (1) aizsargapvalks | — | — |
| cs-000625 | gratis | Zdarma | (1) par velti (2) bez maksas | — | — |
| cs-000554 | beurteilen | Hodnotit | (1) vērtēt | — | — |
| cs-003289 | angelegt | Investovaný | (1) izveidots (2) ieguldīts | — | — |
| cs-000489 | verfügen | Přikázat | (1) norīkot (2) noteikt (3) pavēlēt | — | — |
| cs-000325 | bestreiten | Hradit | (1) segt (2) apstrīdēt (3) samaksāt | — | — |
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
| cs-003560 | dringen | Prodírat se | (1) iespiesties (2) ielauzties (3) prasīt (4) pieprasīt (5) spiesties (6) lauzties | — | — |
| cs-001437 | das Gespür | Intuice | (1) intuīcija | — | — |
| cs-000443 | starrsinnig | Tvrdohlavý | (1) ietiepīgs (2) stūrgalvīgs | — | — |
| cs-002300 | zutrauen | Považovat za schopného | (1) gaidīt (2) domāt spējīgu | — | — |
| cs-003807 | das Heiligtum | Svatost | (1) svētvieta (2) svētums | — | — |
| cs-004150 | die Heftklammer | Sešívací sponka | (1) saspraude | — | — |
| cs-005037 | der Eisenbeton | Slévárna litiny | (1) dzelzsbetons | — | — |
| cs-003050 | ofenfrisch | Čerstvě upečený | (1) svaigi cepts | — | — |
| cs-001028 | hinsichtlich | Kvůli | (1) sakarā ar (2) attiecībā uz | — | — |
| cs-000869 | umkehren | Vrátit se | (1) griezties atpakaļ | — | — |
| cs-002245 | kaputtgehen | Rozbít se | (1) salūzt | — | — |
| cs-000212 | aufkommen | Vzniknout | (1) rasties | — | — |
| cs-005036 | aufstehen | Vstát | (1) piecelties | — | — |
| cs-003932 | fleckig | Plamenný | (1) plankumains (2) lāsains (3) raibs (4) traipains (5) notraipīts | — | — |
| cs-004025 | die Prise | Špetka soli nebo pepře | (1) šķipsniņa sāls vai piparu | — | — |
| cs-004060 | die Unterschätzung | Podcenění | (1) nepietiekams novērtējums (2) novērtēšana par zemu | — | — |
| cs-001067 | misslingen | Nepodařit se | (1) neizdoties | — | — |
