HOW-TO: šo versiju A saņem Anthropic.
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
| cs-002061 | hetzen | Podněcovat | (1) kūdīt (2) vajāt (3) trenkāt (4) rīdīt | — | — |
| cs-005500 | das Obst | Ovoce | (1) augļi | Wir essen viel Obst. | Mēs ēdam daudz augļu. |
| cs-001261 | der Abgeordnete | Zástupce | (1) pārstāvis (2) delegāts (3) deputāts | — | — |
| cs-001971 | die Karamelle | Karamela | (1) karameles | — | — |
| cs-005499 | das Gemüse | Zelenina | (1) dārzeņi | Ich esse gern Gemüse. | Es labprāt ēdu dārzeņus. |
| cs-004115 | das Einspruchsrecht | Právo podat námitku | (1) protesta tiesības (2) veto tiesības | — | — |
| cs-004410 | der Champagner | Šampaňské | (1) šampanietis | — | — |
| cs-002596 | das Bahngleis | Železniční kolej | (1) sliedes | — | — |
| cs-000379 | befallen | Napadnout | (1) uznākt (2) uzbrukt | — | — |
| cs-004395 | die Schläfe | Spánky | (1) deniņi | — | — |
| cs-003441 | einkleiden | Odít | (1) ieģērbt (2) ietērpt | — | — |
| cs-004328 | gewöhnen | Zvyknout si | (1) pieradināt | — | — |
| cs-005502 | die Stadt | Město | (1) pilsēta | — | — |
| cs-005507 | die Aufführung | Realizace | (1) izrāde | — | — |
| cs-004132 | erlangen | Dospět k | (1) sasniegt (2) gūt (3) iegūt (4) aizsniegt | — | — |
| cs-000481 | der Wendepunkt | Zlomový bod | (1) pavērsiena punkts | — | — |
| cs-000184 | die Mundart | Dialekt | (1) dialekts | — | — |
| cs-004539 | zusammenhängen | Být spojen (s) | (1) būt saistītam (ar) | — | — |
| cs-002122 | gewieft | Ostřílený | (1) rūdīts (2) izmanīgs | — | — |
| cs-004212 | zugrunde, zu Grunde | V základu | (1) pamatā | — | — |
| cs-000738 | prämieren | Odměnit | (1) prēmēt | — | — |
| cs-000652 | raspeln | Strouhat | (1) rīvēt | — | — |
| cs-000667 | besprechen | Diskutovat | (1) apspriest | — | — |
| cs-004701 | an | Na povrchu | (1) pie | an der Wand | pie sienas / uz sienas |
| cs-003337 | aufeinander | Na sebe navzájem | (1) viens uz otra | — | — |
| cs-002498 | der Lüftungsschacht | Ventilační šachta | (1) ventilācijas šahta | — | — |
| cs-004036 | laden | Načíst | (1) iekraut | Wir laden die Kisten ins Auto. | mēs iekraujam kastes mašīnā. |
| cs-000350 | sich verzögern | Protahovat se | (1) aizkavēties (2) novilcināties | — | — |
| cs-001450 | schmelzen | Pohybující se | (1) kust | Der Schnee schmilzt in der Sonne. | sniegs kūst saulē. |
| cs-001907 | die Ölbohrung | Ropný vrt | (1) naftas urbums | — | — |
| cs-002887 | dauerhaft | Odolný | (1) ilgs (2) izturīgs (3) ilgstošs | — | — |
| cs-005505 | blähen | Foukat | (1) piepūst (2) uzpūst (3) pūst | — | — |
| cs-005504 | die Uhr | Hodiny | (1) pulkstenis | Es ist acht Uhr. | Ir astoņi (pulksten astoņi). |
| cs-005509 | das Augenlid | smysl pro míru | (1) acs plaksts | — | — |
| cs-002784 | der Erreger | Původce choroby | (1) slimības ierosinātājs (2) vīruss | — | — |
| cs-001511 | die Stellungnahme | Úřední vyjádření | (1) oficiāls paziņojums (2) viedokļa paušana | — | — |
| cs-001094 | der Senat | Vědecká rada | (1) senāts (2) zinātniskā padome | — | — |
| cs-001125 | die Kaufkraft | Peníze | (1) naudas (2) arī personas pirktspēja | — | — |
| cs-001185 | jedes Mal | Pokaždé | (1) katru reizi | — | — |
| cs-001489 | die Bindung | Chemická vazba | (1) savienojums (2) ķīmisks savienojums (3) saite (4) siksnas (5) emocionālā saikne (6) saistījums | — | — |
| cs-001600 | der Eifer | Nadšení | (1) cītība (2) aizrautība (3) degsme (4) dedzība (5) centība | — | — |
| cs-002680 | sich unterscheiden | Lišit se | (1) atšķirties | — | — |
| cs-004381 | das Gemisch | Směsice | (1) sajaukums (2) mistrojums (3) maisījums | — | — |
| cs-000986 | das Zollamt | Celní úřad | (1) muitnīca | — | — |
| cs-000935 | spalten | Rozštípit | (1) sašķelt | — | — |
| cs-001919 | der Gepäckträger | Nosič zavazadel | (1) bagāžnieks | — | — |
| cs-004638 | das Kapitalverbrechen | Zvlášť závažný zločin | (1) sevišķi smags noziegums | — | — |
| cs-003682 | dementieren | Odvolat informaci | (1) atsaukt informāciju | — | — |
| cs-003390 | ins | Do | (1) uz iekšu (2) kurp? (3) iekšā | Ich gehe ins Kino. | es eju uz kino. |
| cs-005506 | voraussehen | Něco si předsevzít | (1) paredzēt | — | — |
| cs-005508 | das Druckpapier | Tiskařský lis | (1) iespiedpapīrs | — | — |
| cs-001124 | erlöschen | Zaniknout | (1) nodzist (2) nebūt vairs spēkā (3) izbeigties (4) izdzist | — | — |
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
| cs-000449 | prägen | Razit peníze | (1) iespiest (2) uzspiest (3) veidot (4) darināt (5) kalt naudu | — | — |
| cs-000273 | die Viehzucht | Chov zvířat | (1) lopkopība | — | — |
| cs-003907 | das Nebenprodukt | Vedlejší produkt | (1) blakusprodukts | — | — |
| cs-002066 | trotzig | Tvrdohlavý | (1) spītīgs | — | — |
| cs-002765 | die Beihilfe | Příplatek | (1) valsts pabalsts (2) piemaksa | — | — |
| cs-003062 | abgemacht | Domluveno | (1) nolemts (2) norunāts (3) nokārtots | — | — |
| cs-002723 | die Polizeieinheit | Policejní jednotka | (1) policijas vienība | — | — |
| cs-004369 | entbehren | Obejít se bez | (1) pieciest (2) trūkt (3) iztikt bez | — | — |
| cs-005510 | die Führernatur | Rámec | (1) līdera tips (2) līderis | — | — |
| cs-000128 | vage | Nepřesný | (1) neskaidrs (2) neprecīzs | — | — |
| cs-004050 | sich fassen | Sebrat se | (1) saņemties (2) savaldīties (3) sagrābt | — | — |
| cs-001256 | militärfrei | Nepodléhají branné povinnosti | (1) karaklausībai nepadots | — | — |
| cs-000223 | flimmern | Mihotat se | (1) vizēt (2) vizuļot (3) zvīļot (4) ņirbēt (5) mirgot | — | — |
| cs-001710 | die Handlung | Akce | (1) darbība | — | — |
| cs-001340 | der Heiratsantrag | Žádost o ruku | (1) bildinājums | — | — |
| cs-004285 | anfertigen | Vyrobit | (1) izgatavot | — | — |
| cs-000307 | der Pater | Katolický kněz | (1) katoļu priesteris (2) piederīgs kādam ordenim | — | — |
| cs-003493 | vorübergehen | Projít kolem | (1) paiet garām | — | — |
| cs-003609 | der Kleinbus | Minibus | (1) mikroautobuss | — | — |
| cs-002855 | sich empören | Zlobit se | (1) sašust (2) sacelties | — | — |
| cs-000112 | das Schneewittchen | Pohádková postava Sněhurka | (1) pasaku tēls Sniegbaltīte | — | — |
| cs-001805 | die Bodenschätze | Nerostné suroviny | (1) derīgie izrakteņi | — | — |
| cs-000724 | erwidern | Odpovědět | (1) atbildēt | — | — |
| cs-000118 | die Finanzblockade | Finanční blokáda | (1) finanšu blokāde | — | — |
| cs-004719 | die Autobahnbrücke | Dálniční most | (1) ceļa pārvads | — | — |
| cs-002548 | blödsinnig | Hloupý | (1) plānprātīgs (2) muļķīgs (3) stulbs (4) vājprātīgs | — | — |
| cs-002033 | freuen | Potěšit | (1) iepriecināt | — | — |
| cs-000472 | sich blamieren | Ztrapnit se | (1) izblamēties | — | — |
| cs-002438 | der Redakteur | Editor | (1) redaktors | — | — |
| cs-003278 | das Gerechtigkeitsgefühl | Smysl pro spravedlnost | (1) taisnīgums (2) taisnības izjūta | — | — |
| cs-000110 | die Entspannung | Relaxace | (1) atslābšana (2) saspīlējuma mazināšanās (3) atslābums | — | — |
| cs-002403 | der Ertrag | Zisk | (1) peļņa | — | — |
| cs-005503 | der Staat | Stát | (1) valsts | — | — |
| cs-002206 | berufen | Pozvat | (1) iecelt (2) aicināt | — | — |
| cs-000531 | das Nachschlagewerk | Encyklopedie | (1) vārdnīca (2) enciklopēdija (3) uzziņu literatūra | — | — |
| cs-001936 | einbüßen | Utrpět materiální ztráty | (1) ciest materiālus zaudējumus | — | — |
| cs-000767 | versorgen | Dodávat | (1) apgādāt | — | — |
| cs-004555 | untertauchen | Ponořit se | (1) palīst zem ūdens (2) iemērkt (3) iegremdēt (4) ienirt | — | — |
