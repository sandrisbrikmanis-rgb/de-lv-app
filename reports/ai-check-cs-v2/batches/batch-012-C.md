HOW-TO: šo versiju C saņem Anthropic.
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
| cs-002979 | ausstopfen | naplnit | (1) izbāzt (2) aizpildīt (3) piepildīt | — | — |
| cs-000053 | die Tagesordnung | Agenda | (1) darba kārtība | — | — |
| cs-000731 | der Bildhauer | Skulptér | (1) skulptors (2) tēlnieks | — | — |
| cs-003372 | die Seemacht | Námořní [vel]moc | (1) jūras [liel]valsts | — | — |
| cs-005128 | fett | Tučný | (1) trekns | — | — |
| cs-001110 | der Hüftumfang | Obvod boků | (1) gurnu apkārtmērs | — | — |
| cs-001618 | die Ablösung | Nahrazení | (1) nomaiņa | — | — |
| cs-003778 | momentan | V současné době | (1) pašlaik | — | — |
| cs-003261 | nachdrücklich | Rázně | (1) pārliecinošs (2) sparīgi (3) pārliecinoši (4) uzsvērts (5) sparīgs | — | — |
| cs-005135 | der Kleingarten | Malé auto | (1) mazdārziņš | — | — |
| cs-004317 | wie | Kolik | (1) kā (2) cik | Wie geht es dir? | kā tev iet? |
| cs-004107 | stoppen | Zastavit | (1) apturēt | — | — |
| cs-002139 | sich erniedrigen | Pokořit se | (1) pazemoties | — | — |
| cs-002017 | das Kabinettsmitglied | Ministr | (1) kabineta loceklis (2) ministrs | — | — |
| cs-005138 | der Hochzeitsbrauch | Vodoléčebné zařízení | (1) kāzu paraža | — | — |
| cs-001095 | der Grillspieß | Grilovací špíz | (1) grila iesms | — | — |
| cs-002222 | die Funkstörung | Rušení přenosu | (1) traucējumi pārraidē | — | — |
| cs-000328 | der Sachverständige | Odborník | (1) eksperts (2) lietpratējs | — | — |
| cs-001307 | das Bord | Bok lodi | (1) borts | — | — |
| cs-000966 | die Elementarkenntnisse | Základní znalosti | (1) pamatzināšanas | — | — |
| cs-004282 | fegen | Zametat | (1) slaucīt | — | — |
| cs-000099 | sämtlich | V plném počtu | (1) pilnā sastāvā (2) visi [bez izņēmuma] | — | — |
| cs-004409 | das Lehrmittel | Učební pomůcka | (1) mācību līdzeklis | — | — |
| cs-005137 | der Anlass | Nařízení | (1) iemesls (2) gadījums | — | — |
| cs-003504 | die Warnanlage | Signalizační zařízení | (1) signalizācijas ierīce | — | — |
| cs-003431 | großartig | Vynikající | (1) lielisks | — | — |
| cs-000436 | erforderlich | Nutné | (1) nepieciešams | — | — |
| cs-004422 | hochmütig | Nadutý | (1) augstprātīgs (2) uzpūtīgs | — | — |
| cs-003828 | überfallen | Náhle zaútočit | (1) pēkšņi uzbrukt | — | — |
| cs-002409 | verheeren | Zničit | (1) izpostīt | — | — |
| cs-000392 | durchbringen | Vyléčit | (1) panākt (2) izārstēt (3) izšķērdēt (4) izdabūt cauri (5) iznest cauri | — | — |
| cs-000778 | der Sprachführer | Konverzační slovník | (1) sarunvārdnīca | — | — |
| cs-003570 | umwickeln | Zabalit | (1) aptīt (2) ievīstīt | — | — |
| cs-002289 | die Cornflakes | Kukuřičné vločky | (1) kukurūzas pārslas | — | — |
| cs-005127 | der Fernseher | Televizor | (1) televizors | — | — |
| cs-001582 | anlässlich | U příležitosti | (1) sakarā ar | — | — |
| cs-004028 | die Luftabwehr | Protivzdušná obrana | (1) pretgaisa aizsardzība | — | — |
| cs-001214 | seekrank | Trpící mořskou nemocí | (1) slims ar jūras slimību | — | — |
| cs-003126 | die Hinterlassenschaft | Dědictví | (1) mantojums | — | — |
| cs-002742 | beitreten | Připojit se | (1) iestāties | — | — |
| cs-002336 | die Vermutung | Předpoklad | (1) pieņēmums (2) hipotēze | — | — |
| cs-000251 | sich verspäten | Být pozdě | (1) kavēties | — | — |
| cs-000337 | das Popcorn | Popcorn | (1) popkorns | — | — |
| cs-000510 | die Radioübertragung | Rozhlasové vysílání | (1) radiopārraide | — | — |
| cs-003819 | aussetzen | přerušit | (1) iebilst (2) stāties (3) izlikt (4) pakļaut | — | — |
| cs-000416 | einigen | Sjednotit | (1) apvienot | — | — |
| cs-003897 | die Notbremse | Nouzová brzda | (1) avārijas bremze | — | — |
| cs-001031 | sich erheben | Zvednout se | (1) sacelties (2) piecelties (3) pacelties | — | — |
| cs-003168 | das Ferienhaus | Rekreační dům | (1) brīvdienu māja | — | — |
| cs-005130 | der Filzstift | Fix | (1) flomāsters | — | — |
| cs-001691 | passieren | Stát se | (1) notikt | Was ist passiert? | kas notika? |
| cs-002177 | das Tau | Lodní vlek | (1) kuģa tauva | Das Schiff liegt am Tau. | kuģis ir pie tauvas. |
| cs-003955 | drosseln | Dusit | (1) žņaugt (2) apslāpēt | — | — |
| cs-003454 | liegen | Být položený | (1) atrasties (2) gulēt | Das Buch liegt auf dem Tisch. | grāmata atrodas uz galda. |
| cs-004432 | durchbrennen | Propálit skrz | (1) izdegt (2) pārdegt (3) izdedzināt cauri (4) pārdedzināt | — | — |
| cs-000420 | freilich | Ale | (1) bet (2) tikai (3) protams (4) bez šaubām | — | — |
| cs-001535 | beurlauben | Uvolnit z práce | (1) atbrīvot no darba (2) piešķirt atvaļinājumu | — | — |
| cs-001724 | überhören | Neslyšet z nedbalosti | (1) ne[sa]dzirdēt aiz neuzmanības (2) izlikties nedzirdam | — | — |
| cs-001044 | entehren | Zneuctít | (1) apkaunot (2) laupīt godu | — | — |
| cs-005129 | der Film | Film | (1) filma | — | — |
| cs-000982 | erhaben | Majestátní | (1) dižs (2) dižens (3) cēls (4) cildens (5) izcils (6) reljefs (7) izliekts | — | — |
| cs-003133 | der Anorak | Sportovní bunda s kapucí | (1) sportiska jaka ar kapuci | — | — |
| cs-004499 | durchbrechen | Objevit se | (1) parādīties (2) pārraut (3) pārlauzt (4) izlauzties | — | — |
| cs-005136 | verkünden | Zdvojnásobit | (1) paziņot (2) pasludināt | — | — |
| cs-005134 | entkräften | Vymýtit | (1) atspēkot (2) apgāzt (3) atņemt spēku (4) novājināt | — | — |
| cs-003401 | der Pickel | Pupínek | (1) pūtīte | — | — |
| cs-000917 | die Gegenrede | Oponování | (1) iebildums (2) ieruna | — | — |
| cs-005131 | der Finger | Prst | (1) pirksts | — | — |
| cs-002626 | die Bergwanderung | Horská turistika | (1) kalnu tūrisms | — | — |
| cs-003595 | die Investition | Investování | (1) kapitāla ieguldījums (2) ieguldīšana (3) investīcija (4) investēšana | — | — |
| cs-005132 | der Fisch | Ryba | (1) zivs | — | — |
| cs-003327 | liebkosten | Hladit | (1) glāstīt (2) apmīļot | — | — |
| cs-001240 | absichern | Zabezpečit | (1) nodrošināt | — | — |
| cs-004122 | pfuschen | Pracovat špatně | (1) pavirši strādāt (2) slikti (3) neprasmīgi | — | — |
| cs-001917 | der Flottenstützpunkt | Námořní základna | (1) jūras bāze | — | — |
| cs-005133 | die Steuersenkung | Všechny peníze, které vláda dostává na daních | (1) nodokļu pazemināšana | — | — |
| cs-000887 | der Blindgänger | Nevybuchlá bomba | (1) šāviņš (2) nesprādzis spridzeklis | — | — |
| cs-002151 | der Umbruch | Velká změna v politice | (1) lielas pārmaiņas politikā | — | — |
| cs-004011 | augenscheinlich | Zřejmě | (1) acīmredzot | — | — |
| cs-002363 | billigen | Uznat jako dobrý | (1) atzīt par labu (2) piekrist | — | — |
| cs-000166 | die Geschwindigkeitskontrolle | Měření rychlosti | (1) ātruma kontrole | — | — |
| cs-003851 | voraussetzen | Brát jako podmínku | (1) pieņemt kā priekšnoteikumu | Wir setzen Grundkenntnisse voraus. | Mēs pieņemam pamatzināšanas kā priekšnoteikumu. |
| cs-002858 | die Matinée | Dopolední představení | (1) priekšpusdienas izrāde | — | — |
| cs-003804 | folgern | Vyvodit závěr | (1) secināt | — | — |
| cs-003981 | der Mobilfunk | Mobilní telefonní síť | (1) mobilā tālruņa tīkls | — | — |
| cs-000011 | der Dramatiker | Autor divadelních her | (1) lugu rakstnieks (2) dramaturgs | — | — |
| cs-004639 | das Gnadenbrot | Chléb milosti | (1) žēlastības maize | — | — |
| cs-001217 | der Grenzbereich | Hraniční pás | (1) teritorija abpus robežai (2) robežjosla (3) robežzona | — | — |
| cs-004689 | klanglos | Bez zvuku | (1) neskanīgs | — | — |
| cs-003112 | der Unfug | Nesmysl | (1) piedauzīga rīcība (2) nedarbs (3) nebūšana | — | — |
