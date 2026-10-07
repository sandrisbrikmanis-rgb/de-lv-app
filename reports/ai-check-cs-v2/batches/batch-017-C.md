HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-017.csv (versija B).
Gemini -> ai-gemini/batch-017.csv (versija C).
ChatGPT -> ai-chatgpt/batch-017.csv (versija A).
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
| cs-003381 | der Frostschaden | Škody způsobené mrazem | (1) sala nodarītie zaudējumi | — | — |
| cs-001117 | überlassen | K dispozici | (1) atļaut izvēlēties (2) atstāt kāda ziņā (3) rīcībā | — | — |
| cs-004728 | bewandert | Zdatný | (1) lietpratīgs (2) kompetents | — | — |
| cs-004659 | voll beschäftigt | Zaměstnaný na plný úvazek | (1) nodarbināts pilnu darba dienu | — | — |
| cs-001019 | bleihaltig | Obsahující olovo | (1) svinu saturošs | — | — |
| cs-003427 | der Grimm | Velký hněv | (1) piktums (2) lielas dusmas (3) niknums | — | — |
| cs-001496 | der Pokal | Pohár ve sportu | (1) kauss sportā | — | — |
| cs-003975 | übersiedeln | Změnit bydliště | (1) pārcelties uz dzīvi citur (2) mainīt dzīvesvietu | — | — |
| cs-002857 | das Flugwesen | Letectví | (1) aviācija | — | — |
| cs-002110 | die Datei | Kartotéka | (1) kartotēka | — | — |
| cs-001181 | die Führereigenschaften | Vůdcovské kvality | (1) līdera īpašības | — | — |
| cs-004714 | anpflanzen | Zasadit | (1) stādīt | — | — |
| cs-004685 | die Geldeinlage | Vklad peněz | (1) naudas noguldījums (2) depozīts | — | — |
| cs-005193 | sich entzünden | Spoléhat na | (1) iekaist (2) aizdegties (3) iedegties | — | — |
| cs-003429 | entflammen | Zažehnout | (1) sajūsmināt (2) aizdegties (3) aizdedzināt (4) iededzināt | — | — |
| cs-000956 | begehren | Toužit po | (1) tīkot (2) iekārot (3) kārot (4) prasīt (5) pieprasīt | — | — |
| cs-001701 | der Blumenladen | Květinářství | (1) puķu veikals | — | — |
| cs-002358 | sich vertragen | Vycházet spolu | (1) sadzīvot | — | — |
| cs-005195 | die Bootspartie | Půjčovna lodí | (1) izbraukums ar laivu | — | — |
| cs-004708 | der Bügel | Obruč | (1) drēbju pakaramais (2) kāpslis (3) rokturis (4) stīpa | — | — |
| cs-004440 | höchst | Nejvyšší | (1) visaugstākais | — | — |
| cs-002089 | dürr | Vyschlý | (1) nokaltis (2) kalsns (3) sauss (4) izkaltis | — | — |
| cs-003771 | das Liederbuch | Sbírka písní | (1) dziesmu krājums | — | — |
| cs-003067 | der Gönner | Patron | (1) labvēlis (2) mecenāts | — | — |
| cs-004152 | die Energiequelle | Energetický zdroj | (1) enerģijas avots | — | — |
| cs-005196 | ankommen | Vzniknout | (1) ierasties | — | — |
| cs-001237 | auswerfen | vyvrhnout | (1) izsviest (2) izmest | — | — |
| cs-003342 | die Wechselbeziehung | Vzájemná souvislost | (1) savstarpējs sakars | — | — |
| cs-001697 | der Arbeitslose | Nezaměstnaný | (1) bezdarbnieks | — | — |
| cs-004093 | die Volksbefragung | Veřejná konzultace | (1) visas tautas aptauja (2) referendums | — | — |
| cs-001609 | ausströmen | Mokvat | (1) izstarot (2) iztecēt (3) izplūst | — | — |
| cs-002635 | durchsehen | Zkontrolovat | (1) skatīties cauri (2) izskatīt (3) pārbaudīt | — | — |
| cs-002316 | ganztägig | Celý den | (1) veselu dienu ilgs (2) visas dienas garumā | Wir machen einen ganztägigen Ausflug. | mēs dodamies ekskursijā, kas ilgst visu dienu. |
| cs-001702 | durchdringen | Být prostoupen | (1) būt pārņemtam (2) izspiesties (3) izlauzties cauri | — | — |
| cs-004561 | das Bühnenbild | Dekorace | (1) dekorācija | — | — |
| cs-002178 | die Teilzeitarbeit | Práce na částečný úvazek | (1) darbs nepilnu darba dienu | — | — |
| cs-001708 | das Treffen | Zasedání | (1) tikšanās | Das Treffen findet um 18 Uhr statt. | tikšanās notiek pulksten 18. |
| cs-002148 | das Mal | Případ | (1) reize | Das erste Mal war schwer. | pirmo reizi bija grūti. |
| cs-002820 | trotzdem | Nicméně | (1) tik un tā (2) tomēr | Ich bin müde. Trotzdem gehe ich spazieren. | Es esmu noguris. Tomēr es eju pastaigā. |
| cs-001219 | die Achtung | Pozornost | (1) uzmanība (2) cieņa | — | — |
| cs-003868 | strippen | Udělat striptýz | (1) taisīt striptīzu | — | — |
| cs-001557 | verspotten | Vysmívat se | (1) izsmiet (2) izzobot | — | — |
| cs-004687 | hartnäckig | Tvrdohlavý | (1) stūrgalvīgs (2) neatlaidīgs | — | — |
| cs-003953 | der Durchgangsverkehr | Tranzitní doprava | (1) tranzītsatiksme | — | — |
| cs-002279 | der Schauplatz | Aréna | (1) arēna | — | — |
| cs-002310 | das Rauchsignal | Kouřový signál | (1) dūmu signāls | — | — |
| cs-003256 | festhalten | Držte se pevně | (1) turēt cieši | Halte dich gut fest! | turies cieši! |
| cs-005198 | herantreten | Uniknout | (1) pieiet | — | — |
| cs-004680 | die Sensationsmeldung | Senzační zpráva | (1) sensacionāls paziņojums | — | — |
| cs-003737 | gängig | Obvyklý | (1) ejošs | — | — |
| cs-002529 | der Gummizug | Elastický pásek | (1) ieveramā gumija | — | — |
| cs-005191 | das Handtuch | Ručník | (1) dvielis | — | — |
| cs-005188 | die Haltestelle | Zastávka | (1) pietura | — | — |
| cs-004596 | los | Volný | (1) kas notiek (2) brīvs (3) atraisīts | Was ist los? | Kas notiek? (Kas vainas?) |
| cs-003475 | die Kosten | Náklady | (1) izmaksas | Die Kosten sind sehr hoch. | izmaksas ir ļoti augstas. |
| cs-000388 | der Job | Práce | (1) īslaicīgs darbs | — | — |
| cs-001611 | übernehmen | Převzít | (1) pārņemt | Ich übernehme diese Aufgabe. | es pārņemu šo uzdevumu. |
| cs-002085 | menschenfreundlich | Humánní | (1) cilvēcīgs (2) humāns | — | — |
| cs-001910 | schlagfertig | Duchaplný | (1) asprātīgs (2) atjautīgs | — | — |
| cs-001849 | wählen | Vybrat si | (1) izvēlēties | Ich wähle ein Menü. | es izvēlos ēdienkarti • izvēlni |
| cs-004211 | die Hopfenstange | Chmelová tyč | (1) apiņu maikste | — | — |
| cs-003687 | durchkreuzen | Vyškrtnout | (1) šķērsot (2) izjaukt (3) pārsvītrot (4) pārvilkt krustu | — | — |
| cs-002218 | der Nachwuchs | Mladá generace | (1) jaunā paaudze | — | — |
| cs-002641 | die Gewalttat | Akt násilí | (1) vardarbības akts (2) vardarbība | — | — |
| cs-001480 | kleinmütig | Malomyslný | (1) mazdūšīgs | — | — |
| cs-002285 | selbstzufrieden | Samolibý | (1) pašapmierināts | — | — |
| cs-003591 | die Löwenpranke | Lví tlapa | (1) lauvas ķetna | — | — |
| cs-005189 | die Hand | Ruka | (1) plauksta | Ich wasche meine Hände. | es mazgāju rokas. |
| cs-000348 | die Nachsicht | Porozumění | (1) sapratne (2) iecietība | — | — |
| cs-002484 | einmal | Kdysi | (1) reiz (2) vienreiz | Ich war einmal in Berlin. | es reiz biju Berlīnē. |
| cs-000372 | quellen | Vytékat | (1) izmirkt (2) piemirkt (3) piebriest (4) izplūst (5) iztecēt | — | — |
| cs-000201 | die Rechenschaft | Skládání účtů | (1) atbildība (2) atskaite (par savu rīcību) | — | — |
| cs-002334 | die Organbank | Orgánová banka | (1) orgānu banka | — | — |
| cs-004049 | sich füllen | Naplnit se | (1) piepildīties | — | — |
| cs-000682 | das Gästebuch | Návštěvní kniha | (1) viesu grāmata | — | — |
| cs-002365 | sich erregen | Rozčilovat se kvůli | (1) uztraukties par | — | — |
| cs-005190 | die Handtasche | Kabelka | (1) rokassoma | — | — |
| cs-005187 | der Hals | Krk | (1) kakls | — | — |
| cs-004649 | der Staatenlose | Osoba bez státní příslušnosti | (1) bezpavalstnieks | — | — |
| cs-002791 | gebrechlich | Plný vad | (1) gaudens (2) kroplīgs (3) pilns vainām (4) vārgs (5) sanīcis | — | — |
| cs-005194 | der Eilbote | Vyslanec | (1) ziņnesis (2) kurjers | — | — |
| cs-005192 | das Handy | Mobilní telefon | (1) mobilais tālrunis | — | — |
| cs-005197 | der Gesichtskreis | Mluvení | (1) redzesloks (2) apvārsnis | — | — |
| cs-002320 | die Berufswahl | Výběr povolání | (1) profesijas izvēle | — | — |
| cs-002768 | erhitzen | Zahřát | (1) sakarsēt | — | — |
| cs-000673 | na gut | Dobře | (1) nu labi | Na gut, dann machen wir das. | nu labi, tad darīsim tā. |
| cs-003769 | gegenwärtig | V současné době | (1) pašreiz | — | — |
| cs-002112 | die Diele | Zádveří | (1) priekštelpa (2) grīda (3) dēlis | — | — |
| cs-001242 | unbedacht | Zbrklý | (1) neapdomīgs (2) neapdomāts (3) pārsteidzīgs | — | — |
| cs-000787 | die Leistungsfähigkeit | Pracovní kapacita | (1) jauda (2) darbaspējas (3) ražīgums | — | — |
| cs-003784 | verhüten | Chránit před | (1) novērst (2) izsargāties | — | — |
| cs-004532 | rau | Hrubý | (1) rupjš (2) aizsmacis (3) skarbs (4) nelaipns (5) neapstrādāts (6) nelīdzens (7) raupjš | — | — |
| cs-003444 | richten | Řídit | (1) vērst | Sie richtet den Blick nach vorn. | viņa vērš skatienu uz priekšu. |
| cs-002525 | der Unternehmensberater | Firemní konzultant | (1) uzņēmuma konsultants | — | — |
| cs-000613 | absprechen | Dohodnout se | (1) vienoties | — | — |
| cs-004225 | plangemäß | Podle plánu | (1) plānveidīgs | — | — |
| cs-004732 | der Lastkraftwagen | Nákladní automobil | (1) smagā automašīna | — | — |
| cs-002186 | der Ursprung | Zdroj | (1) [pirm]sākums (2) izcelšanās (3) cilme | — | — |
| cs-004105 | bekräftigen | Potvrdit | (1) apstiprināt (2) apliecināt | — | — |
| cs-000569 | außergewöhnlich | Neobvyklý | (1) neparasts | — | — |
