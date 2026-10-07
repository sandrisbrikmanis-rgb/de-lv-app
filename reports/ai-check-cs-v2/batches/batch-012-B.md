HOW-TO: šo versiju B saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-012.csv (versija C).
Gemini -> ai-gemini/batch-012.csv (versija A).
ChatGPT -> ai-chatgpt/batch-012.csv (versija B).
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
| cs-001505 | gedruckt | Vytištěný | (1) iespiests | — | — |
| cs-001394 | die Computerwissenschaft | Informatika | (1) informātika (2) datorzinātne | — | — |
| cs-001550 | schaudern | Děsit se | (1) [no]drebēt (2) šausmināties | — | — |
| cs-004224 | der Laderaum | Nákladový prostor | (1) kravas telpa | — | — |
| cs-001443 | rentabel | Ziskový | (1) rentabls | — | — |
| cs-000764 | der Gemütsmensch | Dobrosrdečný člověk | (1) laipns un labsirdīgs cilvēks | — | — |
| cs-003243 | die Konfliktsituation | Konfliktní situace | (1) konflikta situācija | — | — |
| cs-001155 | haften | Přilnout | (1) būt pielipušam (2) pielipt | — | — |
| cs-000628 | verhöhnen | Promáčknout | (1) izzobot (2) izsmiet | — | — |
| cs-002589 | verzögern | Zdržovat | (1) novilcināt | — | — |
| cs-002979 | ausstopfen | naplnit | (1) izbāzt (2) piepildīt (3) aizpildīt | — | — |
| cs-000053 | die Tagesordnung | Agenda | (1) darba kārtība | — | — |
| cs-000731 | der Bildhauer | Skulptér | (1) skulptors (2) tēlnieks | — | — |
| cs-003372 | die Seemacht | Námořní [vel]moc | (1) jūras [liel]valsts | — | — |
| cs-005128 | fett | Tučný | (1) trekns | — | — |
| cs-001110 | der Hüftumfang | Obvod boků | (1) gurnu apkārtmērs | — | — |
| cs-001618 | die Ablösung | Nahrazení | (1) nomaiņa | — | — |
| cs-003778 | momentan | V současné době | (1) pašlaik | — | — |
| cs-003261 | nachdrücklich | Rázně | (1) pārliecinoši (2) sparīgi (3) pārliecinošs (4) sparīgs (5) uzsvērts | — | — |
| cs-005135 | der Kleingarten | Malé auto | (1) mazdārziņš | — | — |
| cs-004317 | wie | Kolik | (1) cik (2) kā | Wie geht es dir? | kā tev iet? |
| cs-004107 | stoppen | Zastavit | (1) apturēt | — | — |
| cs-002139 | sich erniedrigen | Pokořit se | (1) pazemoties | — | — |
| cs-002017 | das Kabinettsmitglied | Ministr | (1) ministrs (2) kabineta loceklis | — | — |
| cs-005138 | der Hochzeitsbrauch | Vodoléčebné zařízení | (1) kāzu paraža | — | — |
| cs-001095 | der Grillspieß | Grilovací špíz | (1) grila iesms | — | — |
| cs-002222 | die Funkstörung | Rušení přenosu | (1) traucējumi pārraidē | — | — |
| cs-000328 | der Sachverständige | Odborník | (1) eksperts (2) lietpratējs | — | — |
| cs-001307 | das Bord | Bok lodi | (1) borts | — | — |
| cs-000966 | die Elementarkenntnisse | Základní znalosti | (1) pamatzināšanas | — | — |
| cs-004282 | fegen | Zametat | (1) slaucīt | — | — |
| cs-000099 | sämtlich | V plném počtu | (1) pilnā sastāvā (2) visi [bez izņēmuma] | — | — |
| cs-004409 | das Lehrmittel | Učební pomůcka | (1) mācību līdzeklis | — | — |
| cs-005137 | der Anlass | Nařízení | (1) gadījums (2) iemesls | — | — |
| cs-003504 | die Warnanlage | Signalizační zařízení | (1) signalizācijas ierīce | — | — |
| cs-003431 | großartig | Vynikající | (1) lielisks | — | — |
| cs-000436 | erforderlich | Nutné | (1) nepieciešams | — | — |
| cs-004422 | hochmütig | Nadutý | (1) uzpūtīgs (2) augstprātīgs | — | — |
| cs-003828 | überfallen | Náhle zaútočit | (1) pēkšņi uzbrukt | — | — |
| cs-002409 | verheeren | Zničit | (1) izpostīt | — | — |
| cs-000392 | durchbringen | Vyléčit | (1) izšķērdēt (2) izārstēt (3) panākt (4) iznest cauri (5) izdabūt cauri | — | — |
| cs-000778 | der Sprachführer | Konverzační slovník | (1) sarunvārdnīca | — | — |
| cs-003570 | umwickeln | Zabalit | (1) ievīstīt (2) aptīt | — | — |
| cs-002289 | die Cornflakes | Kukuřičné vločky | (1) kukurūzas pārslas | — | — |
| cs-005127 | der Fernseher | Televizor | (1) televizors | — | — |
| cs-001582 | anlässlich | U příležitosti | (1) sakarā ar | — | — |
| cs-004028 | die Luftabwehr | Protivzdušná obrana | (1) pretgaisa aizsardzība | — | — |
| cs-001214 | seekrank | Trpící mořskou nemocí | (1) slims ar jūras slimību | — | — |
| cs-003126 | die Hinterlassenschaft | Dědictví | (1) mantojums | — | — |
| cs-002742 | beitreten | Připojit se | (1) iestāties | — | — |
| cs-002336 | die Vermutung | Předpoklad | (1) hipotēze (2) pieņēmums | — | — |
| cs-000251 | sich verspäten | Být pozdě | (1) kavēties | — | — |
| cs-000337 | das Popcorn | Popcorn | (1) popkorns | — | — |
| cs-000510 | die Radioübertragung | Rozhlasové vysílání | (1) radiopārraide | — | — |
| cs-003819 | aussetzen | přerušit | (1) stāties (2) iebilst (3) pakļaut (4) izlikt | — | — |
| cs-000416 | einigen | Sjednotit | (1) apvienot | — | — |
| cs-003897 | die Notbremse | Nouzová brzda | (1) avārijas bremze | — | — |
| cs-001031 | sich erheben | Zvednout se | (1) sacelties (2) pacelties (3) piecelties | — | — |
| cs-003168 | das Ferienhaus | Rekreační dům | (1) brīvdienu māja | — | — |
| cs-005130 | der Filzstift | Fix | (1) flomāsters | — | — |
| cs-001691 | passieren | Stát se | (1) notikt | Was ist passiert? | kas notika? |
| cs-002177 | das Tau | Lodní vlek | (1) kuģa tauva | Das Schiff liegt am Tau. | kuģis ir pie tauvas. |
| cs-003955 | drosseln | Dusit | (1) apslāpēt (2) žņaugt | — | — |
| cs-003454 | liegen | Být položený | (1) gulēt (2) atrasties | Das Buch liegt auf dem Tisch. | grāmata atrodas uz galda. |
| cs-004432 | durchbrennen | Propálit skrz | (1) pārdegt (2) izdegt (3) pārdedzināt (4) izdedzināt cauri | — | — |
| cs-000420 | freilich | Ale | (1) tikai (2) bet (3) bez šaubām (4) protams | — | — |
| cs-001535 | beurlauben | Uvolnit z práce | (1) atbrīvot no darba (2) piešķirt atvaļinājumu | — | — |
| cs-001724 | überhören | Neslyšet z nedbalosti | (1) izlikties nedzirdam (2) ne[sa]dzirdēt aiz neuzmanības | — | — |
| cs-001044 | entehren | Zneuctít | (1) apkaunot (2) laupīt godu | — | — |
| cs-005129 | der Film | Film | (1) filma | — | — |
| cs-000982 | erhaben | Majestátní | (1) izcils (2) cildens (3) cēls (4) dižens (5) dižs (6) izliekts (7) reljefs | — | — |
| cs-003133 | der Anorak | Sportovní bunda s kapucí | (1) sportiska jaka ar kapuci | — | — |
| cs-004499 | durchbrechen | Objevit se | (1) pārraut (2) parādīties (3) izlauzties (4) pārlauzt | — | — |
| cs-005136 | verkünden | Zdvojnásobit | (1) pasludināt (2) paziņot | — | — |
| cs-005134 | entkräften | Vymýtit | (1) apgāzt (2) atspēkot (3) novājināt (4) atņemt spēku | — | — |
| cs-003401 | der Pickel | Pupínek | (1) pūtīte | — | — |
| cs-000917 | die Gegenrede | Oponování | (1) iebildums (2) ieruna | — | — |
| cs-005131 | der Finger | Prst | (1) pirksts | — | — |
| cs-002626 | die Bergwanderung | Horská turistika | (1) kalnu tūrisms | — | — |
| cs-003595 | die Investition | Investování | (1) ieguldīšana (2) kapitāla ieguldījums (3) investēšana (4) investīcija | — | — |
| cs-005132 | der Fisch | Ryba | (1) zivs | — | — |
| cs-003327 | liebkosten | Hladit | (1) apmīļot (2) glāstīt | — | — |
| cs-001240 | absichern | Zabezpečit | (1) nodrošināt | — | — |
| cs-004122 | pfuschen | Pracovat špatně | (1) pavirši strādāt (2) neprasmīgi (3) slikti | — | — |
| cs-001917 | der Flottenstützpunkt | Námořní základna | (1) jūras bāze | — | — |
| cs-005133 | die Steuersenkung | Všechny peníze, které vláda dostává na daních | (1) nodokļu pazemināšana | — | — |
| cs-000887 | der Blindgänger | Nevybuchlá bomba | (1) šāviņš (2) nesprādzis spridzeklis | — | — |
| cs-002151 | der Umbruch | Velká změna v politice | (1) lielas pārmaiņas politikā | — | — |
| cs-004011 | augenscheinlich | Zřejmě | (1) acīmredzot | — | — |
| cs-002363 | billigen | Uznat jako dobrý | (1) piekrist (2) atzīt par labu | — | — |
| cs-000166 | die Geschwindigkeitskontrolle | Měření rychlosti | (1) ātruma kontrole | — | — |
| cs-003851 | voraussetzen | Brát jako podmínku | (1) pieņemt kā priekšnoteikumu | Wir setzen Grundkenntnisse voraus. | Mēs pieņemam pamatzināšanas kā priekšnoteikumu. |
| cs-002858 | die Matinée | Dopolední představení | (1) priekšpusdienas izrāde | — | — |
| cs-003804 | folgern | Vyvodit závěr | (1) secināt | — | — |
| cs-003981 | der Mobilfunk | Mobilní telefonní síť | (1) mobilā tālruņa tīkls | — | — |
| cs-000011 | der Dramatiker | Autor divadelních her | (1) lugu rakstnieks (2) dramaturgs | — | — |
| cs-004639 | das Gnadenbrot | Chléb milosti | (1) žēlastības maize | — | — |
| cs-001217 | der Grenzbereich | Hraniční pás | (1) teritorija abpus robežai (2) robežzona (3) robežjosla | — | — |
| cs-004689 | klanglos | Bez zvuku | (1) neskanīgs | — | — |
| cs-003112 | der Unfug | Nesmysl | (1) piedauzīga rīcība (2) nebūšana (3) nedarbs | — | — |
