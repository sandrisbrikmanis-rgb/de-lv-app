HOW-TO: šo versiju A saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-042.csv (versija C).
Gemini -> ai-gemini/batch-042.csv (versija A).
ChatGPT -> ai-chatgpt/batch-042.csv (versija B).
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
| cs-001700 | die Filmaufnahme | Natáčení | (1) filmas uzņemšana | — | — |
| cs-000913 | auf jeden Fall | V každém případě | (1) katrā gadījumā | — | — |
| cs-003069 | ursprünglich | Počáteční | (1) sākotnējs | — | — |
| cs-001788 | die Handelsklasse | Třída zboží | (1) preces šķira | — | — |
| cs-002105 | der Tagelohn | Denní mzda | (1) dienas alga | — | — |
| cs-001069 | blödsinnig | Šílený | (1) plānprātīgs (2) muļķīgs (3) stulbs (4) vājprātīgs | — | — |
| cs-003541 | vorzüglich | Vynikající | (1) teicams (2) lielisks | — | — |
| cs-000486 | der Cartoon | Karikatura | (1) karikatūra | — | — |
| cs-000034 | empören | Způsobit pobouření | (1) izraisīt sašutumu | — | — |
| cs-000996 | fressen | Zítra | (1) rīt | Der Hund frisst sein Futter. | suns ēd savu barību. |
| cs-002142 | der Rechtsberater | Právní poradce | (1) juriskonsults | — | — |
| cs-004184 | bergen | Sklidit | (1) izglābt (2) novākt ražu (3) glābt | — | — |
| cs-002150 | der Klebestift | Lepicí tyčinka | (1) līmzīmulis | — | — |
| cs-003833 | das Gemisch | Míšenina | (1) sajaukums (2) mistrojums (3) maisījums | — | — |
| cs-002321 | das Gepäcknetz | Síť na zavazadla | (1) bagāžas tīkls | — | — |
| cs-005498 | der Bundesstaat | Tiskový tajemník | (1) federācija (2) federatīva valsts | — | — |
| cs-000596 | sozusagen | Abych tak řekl | (1) tā sakot | — | — |
| cs-003924 | sich verwundern | Podivovat se | (1) brīnīties par | — | — |
| cs-001053 | das Kaffeepulver | Mletá káva | (1) šķīstošā kafija | — | — |
| cs-002360 | das Naschwerk | Cukroví | (1) saldumi | — | — |
| cs-002145 | die Verwirrung | Rozpaky | (1) sajaukšana (2) samulsums | — | — |
| cs-002175 | deinerseits | Z vaší strany | (1) no tavas puses | — | — |
| cs-004562 | die Morgenpost | Ranní pošta | (1) rīta pasts | — | — |
| cs-002796 | die Entbindung | Zproštění | (1) atsvabināšana (2) dzemdības (3) atbrīvošana | — | — |
| cs-005492 | zweite | Druhý | (1) otrais | — | — |
| cs-003038 | der Behinderte | Člověk s handicapem | (1) cilvēks ar invaliditāti | — | — |
| cs-000478 | die Kaufkraft | Také osobní kupní síla | (1) naudas (2) arī personas pirktspēja | — | — |
| cs-003527 | das Gestell | Nosič | (1) statnis (2) šasija (3) statīvs | — | — |
| cs-005488 | zwanzig | Dvacet | (1) divdesmit | — | — |
| cs-001072 | anfangen | Začít | (1) sākt | — | — |
| cs-003698 | einkassieren | Vybírat | (1) iekasēt | — | — |
| cs-002801 | der Löschapparat | Hasicí přístroj | (1) ugunsdzēšamais aparāts | — | — |
| cs-005489 | zwei | Dva | (1) divi | — | — |
| cs-000865 | die Bindung | Citové pouto | (1) savienojums (2) ķīmisks savienojums (3) saite (4) siksnas (5) emocionālā saikne (6) saistījums | — | — |
| cs-001579 | sich empören | Vzbouřit se | (1) sašust (2) sacelties | — | — |
| cs-000961 | der Pantoffel | Pantofle | (1) čība | — | — |
| cs-003627 | schlingen | Ovíjet | (1) vīt | — | — |
| cs-004295 | beerdigen | Pohřbít | (1) apglabāt | — | — |
| cs-003916 | sich fassen | Vzchopit se | (1) saņemties (2) savaldīties (3) sagrābt | — | — |
| cs-000316 | die Stiefmutter | Nevlastní matka | (1) pamāte | — | — |
| cs-004544 | rasen | Ionizovat | (1) joņot | Das Auto rast durch die Stadt. | auto joņo cauri pilsētai. |
| cs-004569 | die Kapitalanlage | Kapitálové investice | (1) kapitālieguldījums | — | — |
| cs-002054 | ins | Kam? | (1) uz iekšu (2) kurp? (3) iekšā | Ich gehe ins Kino. | es eju uz kino. |
| cs-005494 | verschweigen | Zastavit | (1) noklusēt (2) neizpaust | — | — |
| cs-002278 | das Einschreiben | Doporučený dopis nebo balík | (1) ierakstīta vēstule vai sūtījums | — | — |
| cs-005496 | begünstigen | Pozdravit | (1) sekmēt (2) protežēt (3) atbalstīt (4) veicināt | — | — |
| cs-005495 | meinen | Přemýšlet | (1) domāt | Was meinst du? | ko tu domā? |
| cs-004084 | gewiss | Trezor | (1) drošs | Das ist gewiss richtig. | tas noteikti ir pareizi. |
| cs-005487 | zusammen | Spolu | (1) kopā | — | — |
| cs-004189 | das Zivilgesetzbuch | Občanský zákoník | (1) civillikums | — | — |
| cs-004098 | der Erdtrabant | Družice Země | (1) zemes pavadonis | — | — |
| cs-002197 | der Panzerschrank | Trezor | (1) seifs (2) dzelzs skapis | — | — |
| cs-001965 | hetzen | Kopat | (1) kūdīt (2) vajāt (3) trenkāt (4) rīdīt | — | — |
| cs-003813 | die Scheidewand | Příčka | (1) starpsiena | — | — |
| cs-000941 | die Autoabgase | Výfukové plyny | (1) izpūtēja gāzes | — | — |
| cs-000327 | prägen | Vytvářet | (1) iespiest (2) uzspiest (3) veidot (4) darināt (5) kalt naudu | — | — |
| cs-002159 | sich bewerben | Ucházet se | (1) pieteikties | — | — |
| cs-001692 | herkommen | Přijít | (1) atnākt | Komm bitte mal her! | atnāc, lūdzu, šurp! |
| cs-000258 | sich unterhalten | Mluvit | (1) sarunāties | Wir unterhalten uns über die Arbeit. | mēs sarunājamies par darbu. |
| cs-000683 | dauerhaft | Dlouhodobý | (1) ilgs (2) izturīgs (3) ilgstošs | — | — |
| cs-002983 | je | Někdy | (1) jebkad (2) pa | Warst du je in Berlin? | vai tu jebkad esi bijis Berlīnē? |
| cs-000891 | die Beihilfe | Státní příspěvek | (1) valsts pabalsts (2) piemaksa | — | — |
| cs-002967 | bespielen | Nahrávat hudbu na kazetu nebo disketu | (1) ierakstīt mūziku kasetē vai disketē | — | — |
| cs-001823 | einbrechen | Vtrhnout do | (1) ielauzties | Die Diebe sind in das Haus eingebrochen. | zagļi ielauzās mājā. |
| cs-005497 | absolvieren | Znevažující | (1) pabeigt mācības | — | — |
| cs-002493 | die politische Ökonomie | Politická ekonomie | (1) politiskā ekonomija | — | — |
| cs-003899 | entbinden | Uvolnit | (1) atsvabināt (2) dzemdēt (3) atbrīvot | — | — |
| cs-001741 | die Bockwurst | Klobása | (1) desiņa | — | — |
| cs-005491 | zweimal | Dvakrát | (1) divreiz | — | — |
| cs-004153 | untertauchen | Schovat se pod vodu | (1) palīst zem ūdens (2) iemērkt (3) iegremdēt (4) ienirt | — | — |
| cs-005493 | anbelangen | Náročný | (1) attiekties uz | — | — |
| cs-004111 | zuerkennen | Přiznat | (1) piespriest (2) piešķirt | — | — |
| cs-002353 | militant | Agresivní | (1) kareivīgs | — | — |
| cs-003765 | gewaltsam | Násilím | (1) ar varu (2) piespiedu kārtā | — | — |
| cs-003214 | ersticken | Potlačovat | (1) nosmacēt (2) apslāpēt (3) apspiest (4) nomākt (5) noslāpt (6) nosmakt (7) noslāpēt | — | — |
| cs-004006 | das Schneetreiben | Sněhová vánice | (1) spēcīgs sniegputenis | — | — |
| cs-000120 | der Weltteil | Část světa | (1) pasaules daļa | — | — |
| cs-003989 | das Wettrennen | Závod | (1) sacīkstes (2) skrējiens | — | — |
| cs-000820 | der Eifer | Zápal | (1) cītība (2) aizrautība (3) degsme (4) dedzība (5) centība | — | — |
| cs-001433 | die Ehrenpflicht | Čestná povinnost | (1) goda pienākums | — | — |
| cs-001372 | versinken | Potopit se | (1) nogrimt | — | — |
| cs-003143 | die Öffnungszeit | Otevírací doba | (1) darba laiks | — | — |
| cs-005490 | zweihundert | Dvě stě | (1) divsimt | — | — |
| cs-002283 | erwerben | Vydělat | (1) iegūt (2) iemantot (3) nopelnīt | — | — |
| cs-003732 | zusammenfallen | Zhroutit se | (1) sabrukt (2) sagadīties | — | — |
| cs-000419 | trotz | Navzdory | (1) neraugoties uz | Trotz des Regens gehen wir spazieren. | Neraugoties uz lietu, mēs ejam pastaigā. |
| cs-004599 | die Geldbuße | Dobře | (1) naudas sods | — | — |
| cs-002378 | der Erreger | Virus | (1) slimības ierosinātājs (2) vīruss | — | — |
| cs-003886 | abgekürzt | Zkrácený | (1) saīsināts | — | — |
| cs-000648 | nutzlos | Marný | (1) veltīgs | — | — |
| cs-002381 | die Schlittschuhkufe | Nůž brusle | (1) ragavu sliece | — | — |
| cs-000359 | der Selbstbinder | Kravata | (1) kaklasaite | — | — |
| cs-003634 | die Lehre | Výuka | (1) mācība | — | — |
| cs-002413 | laben | Osvěžit | (1) atspirdzināt | — | — |
| cs-002257 | der Gepäckschein | Zavazadlový lístek | (1) bagāžas kvīts | — | — |
| cs-001276 | erlangen | Dosáhnout | (1) sasniegt (2) gūt (3) iegūt (4) aizsniegt | — | — |
| cs-004010 | der Heilige | Svatý | (1) svētais | — | — |
| cs-004508 | an | Na okraji | (1) pie | an der Wand | pie sienas / uz sienas |
| cs-002914 | das Autokennzeichen | Písmena a čísla na poznávací značce auta | (1) burti un cipari uz automašīnas numura zīmes | — | — |
| cs-002750 | provisorisch | Dočasný | (1) pagaidu (2) uz laiku (3) provizorisks | — | — |
