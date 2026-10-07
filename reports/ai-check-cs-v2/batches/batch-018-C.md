HOW-TO: šo versiju C saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-018.csv (versija C).
Gemini -> ai-gemini/batch-018.csv (versija A).
ChatGPT -> ai-chatgpt/batch-018.csv (versija B).
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
| cs-000823 | das Haarbüschel | Chomáč vlasů | (1) matu šķipsna | — | — |
| cs-001201 | überstehen | Snášet potíže | (1) izturēt nepatikšanas (2) pārciest | — | — |
| cs-003862 | festigen | Posílit | (1) stiprināt (2) nostiprināt | — | — |
| cs-003707 | die Kostensenkung | Snížení nákladů | (1) izmaksu pazemināšana | — | — |
| cs-002675 | plantschen | Cachtat se | (1) plunčāties | — | — |
| cs-002707 | quellen | Promoknout | (1) izmirkt (2) piemirkt (3) piebriest (4) izplūst (5) iztecēt | — | — |
| cs-001247 | die Gewerkschaft | Odborová organizace | (1) arodbiedrība | — | — |
| cs-002157 | der Gutschein | Poukaz | (1) kupons | — | — |
| cs-000385 | die Nachsicht | Tolerance | (1) sapratne (2) iecietība | — | — |
| cs-004725 | strömen | Proudit | (1) plūst | — | — |
| cs-001512 | sich vervollkommnen | Zdokonalit se | (1) papildināt savas zināšanas | — | — |
| cs-003908 | die Diele | Deska | (1) priekštelpa (2) grīda (3) dēlis | — | — |
| cs-003048 | dürr | Chudý | (1) nokaltis (2) kalsns (3) sauss (4) izkaltis | — | — |
| cs-000527 | das Trommelfell | Ušní bubínek | (1) bungādiņa | — | — |
| cs-002606 | die Datenübermittlung | Přenos dat | (1) datu pārraide | — | — |
| cs-001995 | der Nacken | Zátylek | (1) skausts | — | — |
| cs-001564 | die Gesinnung | Nálada | (1) noskaņojums (2) uzskati | — | — |
| cs-001145 | das Loch | Otvor | (1) caurums | — | — |
| cs-000894 | belagern | Obklíčit | (1) ielenkt (2) aplenkt | — | — |
| cs-005208 | erheben | Naspořit | (1) sacelt (2) protestēt (3) pacelt (4) celt | — | — |
| cs-004601 | ganztägig | Celý den | (1) visas dienas garumā (2) veselu dienu ilgs | Wir machen einen ganztägigen Ausflug. | mēs dodamies ekskursijā, kas ilgst visu dienu. |
| cs-001711 | abstatten | Navštívit | (1) apmeklēt | — | — |
| cs-001407 | das Bündnis | Aliance | (1) savienība | — | — |
| cs-000368 | wärmen | Zahřívat | (1) sildīt | — | — |
| cs-002690 | sich fürchten | Se bát | (1) baidīties | — | — |
| cs-001629 | der Lauch | Pórek | (1) puravs | — | — |
| cs-004415 | die Adventszeit | Adventní období | (1) adventa laiks | — | — |
| cs-001280 | entgegensetzen | Postavit proti | (1) likt pretī (2) nostādīt pretī | — | — |
| cs-000829 | der Blumenstrauß | Kytice květin | (1) puķu pušķis | — | — |
| cs-004239 | menschenfreundlich | Lidský | (1) humāns (2) cilvēcīgs | — | — |
| cs-003736 | durchkreuzen | Narušit | (1) šķērsot (2) izjaukt (3) pārsvītrot (4) pārvilkt krustu | — | — |
| cs-001390 | begehren | Požadovat | (1) tīkot (2) iekārot (3) kārot (4) prasīt (5) pieprasīt | — | — |
| cs-005210 | gedenken | Dokonalý | (1) atminēties (2) pieminēt (3) būt nodomājušam (4) atcerēties | — | — |
| cs-004185 | die Entbindungsanstalt | Porodnice | (1) dzemdību nams | — | — |
| cs-000834 | die Wechselwirkung | Interakce | (1) mijiedarbība | — | — |
| cs-000488 | höchstens | Nejvýše | (1) ne vairāk kā (2) augstākais | — | — |
| cs-005199 | der Herr | Pan | (1) kungs | — | — |
| cs-002474 | der Unterricht | Lekce | (1) nodarbība | — | — |
| cs-001527 | die Sinnestäuschung | Smyslová iluze | (1) halucinācija | — | — |
| cs-004116 | die Hundehaare | Psí chlupy | (1) suņa spalva | — | — |
| cs-003464 | haaren | Hodit pírko | (1) mest spalvu | — | — |
| cs-002894 | der Polarfuchs | Polární liška | (1) polārlapsa | — | — |
| cs-001005 | anregen | Navrhnout | (1) ierosināt | — | — |
| cs-001501 | das Flugwetter | Povětrnostní podmínky pro létání | (1) laika apstākļi lidošanai | — | — |
| cs-003684 | durchsehen | Dívat se skrz | (1) skatīties cauri (2) izskatīt (3) pārbaudīt | — | — |
| cs-002573 | der Verdruss | Nechuť | (1) īgnums (2) nepatika (3) sarūgtinājums | — | — |
| cs-003986 | verkehrt | Nesprávný | (1) nepareizs | — | — |
| cs-001720 | ausströmen | Vycházet | (1) izstarot (2) iztecēt (3) izplūst | — | — |
| cs-003396 | die Vollversammlung | Generální shromáždění | (1) ģenerālā asambleja (2) plēnums (3) pilnsapulce | — | — |
| cs-003175 | die Machtergreifung | Uchopení moci | (1) varas sagrābšana | — | — |
| cs-001346 | um | Aby | (1) pulksten (2) ap | Ich komme um acht Uhr. | es atnākšu pulksten astoņos. |
| cs-002913 | durchfallen | Propadnout | (1) izgāzties | — | — |
| cs-005204 | hoch | Vysoký | (1) augsts | Der Berg ist hoch. | kalns ir augsts. |
| cs-000459 | erinnern | Připomenout | (1) atgādināt | Kannst du mich morgen daran erinnern? | vai vari man rīt to atgādināt? |
| cs-004154 | die Testperson | Soudná osoba | (1) izmēģinājuma persona | — | — |
| cs-001278 | heraufkommen | Vyjít nahoru | (1) tikt uz augšu (2) uznākt augšā | — | — |
| cs-000864 | der Damm | Železniční násep | (1) dzelzceļa uzbērums (2) dambis (3) aizsprosts | — | — |
| cs-005202 | die Hilfe | Pomoc | (1) palīdzība | — | — |
| cs-001542 | schmollen | Mračit se | (1) gražoties | — | — |
| cs-000912 | der Possen | Žertová hra | (1) rupjš joks (2) farss (3) joku luga | — | — |
| cs-004079 | auswerfen | Vyhodit | (1) izmest (2) izsviest | — | — |
| cs-003820 | der Staatsangehörige | Občan | (1) pavalstnieks | — | — |
| cs-001146 | ringsum | Všude kolem | (1) visapkārt | — | — |
| cs-005206 | freilich | Samozřejmě | (1) bet (2) tikai (3) protams (4) bez šaubām | — | — |
| cs-002724 | sich erregen | Znepokojovat se kvůli | (1) uztraukties par | — | — |
| cs-005201 | hier | Zde | (1) šeit | — | — |
| cs-000669 | vollziehen | Provést | (1) izpildīt | — | — |
| cs-002971 | gedeihen | Vzkvétat | (1) zelt (2) plaukt (3) labi padoties (4) izdoties | — | — |
| cs-005207 | die Ehrenwache | Čestná povinnost | (1) godasardze | — | — |
| cs-002485 | einreden | Přesvědčovat | (1) mēģināt pārliecināt (2) iestāstīt (3) iegalvot | — | — |
| cs-004289 | klicken | Kliknout | (1) klikšķēt | — | — |
| cs-004427 | selbständig | Nezávislý | (1) patstāvīgs | — | — |
| cs-003210 | aussichtslos | Bez vyhlídek | (1) bezcerīgs (2) bez izredzēm | — | — |
| cs-001233 | blutarm | Anemický | (1) mazasinīgs | — | — |
| cs-001264 | der Armsessel | Křeslo | (1) atzveltnes krēsls | — | — |
| cs-002910 | übersehen | Nevšímat si | (1) nepamanīt | Ich habe den Fehler übersehen. | es nepamanīju kļūdu. |
| cs-000868 | das Rauschgiftdezernat | Oddělení pro boj s narkotiky | (1) narkotiku apkarošanas nodaļa | — | — |
| cs-005209 | missglücken | Ignorovat | (1) neveikties (2) neizdoties | — | — |
| cs-002328 | verspotten | Zesměšnit | (1) izzobot (2) izsmiet | — | — |
| cs-000983 | die Rechte | Pravá ruka | (1) labā roka | — | — |
| cs-000024 | unbedingt | Rozhodně | (1) noteikti | — | — |
| cs-002488 | nach außen | Navenek | (1) uz āru | — | — |
| cs-002821 | die Führerpersönlichkeit | Vůdčí osobnost | (1) līdera personība | — | — |
| cs-001290 | der Durchmesser | Diametr | (1) caurmērs (2) diametrs | — | — |
| cs-005200 | heute | Dnes | (1) šodien | — | — |
| cs-002901 | der Fruchtsaft | Ovocný džus | (1) augļu sula | — | — |
| cs-004704 | losfahren | Vyjet | (1) sākt braukt | — | — |
| cs-000509 | bewilligen | Přidělit | (1) piešķirt (2) atļaut (3) atvēlēt | — | — |
| cs-002699 | der Scheibenwischer | Stěrač | (1) automašīnas logu tīrītājs | — | — |
| cs-005205 | trotz | Stejně | (1) neraugoties uz | Trotz des Regens gehen wir spazieren. | Neraugoties uz lietu, mēs ejam pastaigā. |
| cs-003957 | überlassen | Ponechat někomu na starost | (1) atļaut izvēlēties (2) atstāt kāda ziņā (3) rīcībā | — | — |
| cs-004673 | der Joghurt / Jogurt | Jogurt | (1) jogurts | — | — |
| cs-003283 | der Gönner | Dobrodinec | (1) labvēlis (2) mecenāts | — | — |
| cs-001605 | umkreisen | Obležet | (1) lidināties (2) laisties (3) riņķot (4) ielenkt (5) aplenkt | — | — |
| cs-002305 | die Organentnahme | Odebrání orgánu | (1) orgāna izņemšana | — | — |
| cs-002786 | geistesabwesend | Roztržitý | (1) izklaidīgs | — | — |
| cs-002614 | die Leistungsfähigkeit | Produktivita | (1) jauda (2) darbaspējas (3) ražīgums | — | — |
| cs-005203 | hinter | Za | (1) aiz | — | — |
| cs-004356 | das Mal | Opakování | (1) reize | Das erste Mal war schwer. | pirmo reizi bija grūti. |
| cs-002694 | die Berufung | Jmenování | (1) atsaukšanās (2) aicinājums (3) tieksme | — | — |
