HOW-TO: šo versiju C saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-043.csv (versija A).
Gemini -> ai-gemini/batch-043.csv (versija B).
ChatGPT -> ai-chatgpt/batch-043.csv (versija C).
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
| cs-002061 | hetzen | Podněcovat | (1) vajāt (2) trenkāt (3) rīdīt (4) kūdīt | — | — |
| cs-005500 | das Obst | Ovoce | (1) augļi | Wir essen viel Obst. | Mēs ēdam daudz augļu. |
| cs-001261 | der Abgeordnete | Zástupce | (1) delegāts (2) deputāts (3) pārstāvis | — | — |
| cs-001971 | die Karamelle | Karamela | (1) karameles | — | — |
| cs-005499 | das Gemüse | Zelenina | (1) dārzeņi | Ich esse gern Gemüse. | Es labprāt ēdu dārzeņus. |
| cs-004115 | das Einspruchsrecht | Právo podat námitku | (1) protesta tiesības (2) veto tiesības | — | — |
| cs-004410 | der Champagner | Šampaňské | (1) šampanietis | — | — |
| cs-002596 | das Bahngleis | Železniční kolej | (1) sliedes | — | — |
| cs-000379 | befallen | Napadnout | (1) uzbrukt (2) uznākt | — | — |
| cs-004395 | die Schläfe | Spánky | (1) deniņi | — | — |
| cs-003441 | einkleiden | Odít | (1) ieģērbt (2) ietērpt | — | — |
| cs-004328 | gewöhnen | Zvyknout si | (1) pieradināt | — | — |
| cs-005502 | die Stadt | Město | (1) pilsēta | — | — |
| cs-005507 | die Aufführung | Realizace | (1) izrāde | — | — |
| cs-004132 | erlangen | Dospět k | (1) gūt (2) iegūt (3) aizsniegt (4) sasniegt | — | — |
| cs-000481 | der Wendepunkt | Zlomový bod | (1) pavērsiena punkts | — | — |
| cs-000184 | die Mundart | Dialekt | (1) dialekts | — | — |
| cs-004539 | zusammenhängen | Být spojen (s) | (1) būt saistītam (ar) | — | — |
| cs-002122 | gewieft | Ostřílený | (1) izmanīgs (2) rūdīts | — | — |
| cs-004212 | zugrunde, zu Grunde | V základu | (1) pamatā | — | — |
| cs-000738 | prämieren | Odměnit | (1) prēmēt | — | — |
| cs-000652 | raspeln | Strouhat | (1) rīvēt | — | — |
| cs-000667 | besprechen | Diskutovat | (1) apspriest | — | — |
| cs-004701 | an | Na povrchu | (1) pie | an der Wand | pie sienas / uz sienas |
| cs-003337 | aufeinander | Na sebe navzájem | (1) viens uz otra | — | — |
| cs-002498 | der Lüftungsschacht | Ventilační šachta | (1) ventilācijas šahta | — | — |
| cs-004036 | laden | Načíst | (1) iekraut | Wir laden die Kisten ins Auto. | mēs iekraujam kastes mašīnā. |
| cs-000350 | sich verzögern | Protahovat se | (1) novilcināties (2) aizkavēties | — | — |
| cs-001450 | schmelzen | Pohybující se | (1) kust | Der Schnee schmilzt in der Sonne. | sniegs kūst saulē. |
| cs-001907 | die Ölbohrung | Ropný vrt | (1) naftas urbums | — | — |
| cs-002887 | dauerhaft | Odolný | (1) izturīgs (2) ilgstošs (3) ilgs | — | — |
| cs-005505 | blähen | Foukat | (1) uzpūst (2) pūst (3) piepūst | — | — |
| cs-005504 | die Uhr | Hodiny | (1) pulkstenis | Es ist acht Uhr. | Ir astoņi (pulksten astoņi). |
| cs-005509 | das Augenlid | smysl pro míru | (1) acs plaksts | — | — |
| cs-002784 | der Erreger | Původce choroby | (1) slimības ierosinātājs (2) vīruss | — | — |
| cs-001511 | die Stellungnahme | Úřední vyjádření | (1) viedokļa paušana (2) oficiāls paziņojums | — | — |
| cs-001094 | der Senat | Vědecká rada | (1) zinātniskā padome (2) senāts | — | — |
| cs-001125 | die Kaufkraft | Peníze | (1) arī personas pirktspēja (2) naudas | — | — |
| cs-001185 | jedes Mal | Pokaždé | (1) katru reizi | — | — |
| cs-001489 | die Bindung | Chemická vazba | (1) ķīmisks savienojums (2) saite (3) siksnas (4) emocionālā saikne (5) saistījums (6) savienojums | — | — |
| cs-001600 | der Eifer | Nadšení | (1) aizrautība (2) degsme (3) dedzība (4) centība (5) cītība | — | — |
| cs-002680 | sich unterscheiden | Lišit se | (1) atšķirties | — | — |
| cs-004381 | das Gemisch | Směsice | (1) mistrojums (2) maisījums (3) sajaukums | — | — |
| cs-000986 | das Zollamt | Celní úřad | (1) muitnīca | — | — |
| cs-000935 | spalten | Rozštípit | (1) sašķelt | — | — |
| cs-001919 | der Gepäckträger | Nosič zavazadel | (1) bagāžnieks | — | — |
| cs-004638 | das Kapitalverbrechen | Zvlášť závažný zločin | (1) sevišķi smags noziegums | — | — |
| cs-003682 | dementieren | Odvolat informaci | (1) atsaukt informāciju | — | — |
| cs-003390 | ins | Do | (1) kurp? (2) iekšā (3) uz iekšu | Ich gehe ins Kino. | es eju uz kino. |
| cs-005506 | voraussehen | Něco si předsevzít | (1) paredzēt | — | — |
| cs-005508 | das Druckpapier | Tiskařský lis | (1) iespiedpapīrs | — | — |
| cs-001124 | erlöschen | Zaniknout | (1) nebūt vairs spēkā (2) izbeigties (3) izdzist (4) nodzist | — | — |
| cs-003146 | nächst | Další | (1) nākamais | — | — |
| cs-005501 | der Urlaub | Dovolená | (1) atvaļinājums | Mein Vater ist im Urlaub. | Mans tēvs ir atvaļinājumā. |
| cs-002318 | herrlich | Vynikající | (1) lielisks | — | — |
| cs-003249 | der Tagelöhner | Nádeník | (1) dienas strādnieks | — | — |
| cs-001821 | die Leichenhalle | Smuteční síň | (1) kapliča kapos | — | — |
| cs-004095 | die Ehrensache | Věc cti | (1) goda lieta | — | — |
| cs-000006 | die Stiftung | Fond | (1) fonds | — | — |
| cs-004178 | der Behindertenausweis | Průkaz invalidity | (1) invalīda apliecība | — | — |
| cs-000320 | die Geldentwertung | Inflace | (1) inflācija | — | — |
| cs-002879 | der Pappbecher | Kartonový kelímek | (1) kartona glāze | — | — |
| cs-000449 | prägen | Razit peníze | (1) uzspiest (2) veidot (3) darināt (4) kalt naudu (5) iespiest | — | — |
| cs-000273 | die Viehzucht | Chov zvířat | (1) lopkopība | — | — |
| cs-003907 | das Nebenprodukt | Vedlejší produkt | (1) blakusprodukts | — | — |
| cs-002066 | trotzig | Tvrdohlavý | (1) spītīgs | — | — |
| cs-002765 | die Beihilfe | Příplatek | (1) valsts pabalsts (2) piemaksa | — | — |
| cs-003062 | abgemacht | Domluveno | (1) norunāts (2) nokārtots (3) nolemts | — | — |
| cs-002723 | die Polizeieinheit | Policejní jednotka | (1) policijas vienība | — | — |
| cs-004369 | entbehren | Obejít se bez | (1) trūkt (2) iztikt bez (3) pieciest | — | — |
| cs-005510 | die Führernatur | Rámec | (1) līdera tips (2) līderis | — | — |
| cs-000128 | vage | Nepřesný | (1) neprecīzs (2) neskaidrs | — | — |
| cs-004050 | sich fassen | Sebrat se | (1) savaldīties (2) sagrābt (3) saņemties | — | — |
| cs-001256 | militärfrei | Nepodléhají branné povinnosti | (1) karaklausībai nepadots | — | — |
| cs-000223 | flimmern | Mihotat se | (1) vizuļot (2) zvīļot (3) ņirbēt (4) mirgot (5) vizēt | — | — |
| cs-001710 | die Handlung | Akce | (1) darbība | — | — |
| cs-001340 | der Heiratsantrag | Žádost o ruku | (1) bildinājums | — | — |
| cs-004285 | anfertigen | Vyrobit | (1) izgatavot | — | — |
| cs-000307 | der Pater | Katolický kněz | (1) piederīgs kādam ordenim (2) katoļu priesteris | — | — |
| cs-003493 | vorübergehen | Projít kolem | (1) paiet garām | — | — |
| cs-003609 | der Kleinbus | Minibus | (1) mikroautobuss | — | — |
| cs-002855 | sich empören | Zlobit se | (1) sašust (2) sacelties | — | — |
| cs-000112 | das Schneewittchen | Pohádková postava Sněhurka | (1) pasaku tēls Sniegbaltīte | — | — |
| cs-001805 | die Bodenschätze | Nerostné suroviny | (1) derīgie izrakteņi | — | — |
| cs-000724 | erwidern | Odpovědět | (1) atbildēt | — | — |
| cs-000118 | die Finanzblockade | Finanční blokáda | (1) finanšu blokāde | — | — |
| cs-004719 | die Autobahnbrücke | Dálniční most | (1) ceļa pārvads | — | — |
| cs-002548 | blödsinnig | Hloupý | (1) muļķīgs (2) stulbs (3) vājprātīgs (4) plānprātīgs | — | — |
| cs-002033 | freuen | Potěšit | (1) iepriecināt | — | — |
| cs-000472 | sich blamieren | Ztrapnit se | (1) izblamēties | — | — |
| cs-002438 | der Redakteur | Editor | (1) redaktors | — | — |
| cs-003278 | das Gerechtigkeitsgefühl | Smysl pro spravedlnost | (1) taisnīgums (2) taisnības izjūta | — | — |
| cs-000110 | die Entspannung | Relaxace | (1) saspīlējuma mazināšanās (2) atslābums (3) atslābšana | — | — |
| cs-002403 | der Ertrag | Zisk | (1) peļņa | — | — |
| cs-005503 | der Staat | Stát | (1) valsts | — | — |
| cs-002206 | berufen | Pozvat | (1) iecelt (2) aicināt | — | — |
| cs-000531 | das Nachschlagewerk | Encyklopedie | (1) enciklopēdija (2) uzziņu literatūra (3) vārdnīca | — | — |
| cs-001936 | einbüßen | Utrpět materiální ztráty | (1) ciest materiālus zaudējumus | — | — |
| cs-000767 | versorgen | Dodávat | (1) apgādāt | — | — |
| cs-004555 | untertauchen | Ponořit se | (1) iemērkt (2) iegremdēt (3) ienirt (4) palīst zem ūdens | — | — |
