HOW-TO: šo versiju B saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-047.csv (versija B).
Gemini -> ai-gemini/batch-047.csv (versija C).
ChatGPT -> ai-chatgpt/batch-047.csv (versija A).
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
| cs-001293 | bestrahlen | Osvětlovat | (1) apspīdēt (2) apstarot | — | — |
| cs-003498 | der Fahrdamm | Dláždění | (1) bruģis (2) ielas braucamā daļa | — | — |
| cs-002428 | das Geschäftsjahr | Hospodářský rok | (1) saimniecības gads | — | — |
| cs-002522 | der Regierungschef | Předseda vlády | (1) valdības galva (2) premjerministrs | — | — |
| cs-001949 | entgegenkommen | Vyjít vstříc | (1) nākt pretī | — | — |
| cs-000326 | verständig | Rozvážný | (1) saprātīgs (2) prātīgs | — | — |
| cs-000492 | die Straßenkreuzung | Křižovatka ulic | (1) ielu krustojums | — | — |
| cs-003719 | die Ölraffinerie | Ropná rafinérie | (1) naftas rafinērija | — | — |
| cs-000507 | umschließen | Obklopit | (1) apņemt (2) aptvert (3) ieslēgt | — | — |
| cs-003491 | der Chefingenieur | Hlavní inženýr | (1) galvenais inženieris | — | — |
| cs-001298 | das Geschwür | Rostlina | (1) čūla (2) augonis | — | — |
| cs-002123 | dichten | Skládat básně | (1) sadzejot (2) dzejot | — | — |
| cs-001209 | tätig | Aktivní | (1) aktīvs | — | — |
| cs-000765 | unwillkürlich | Neúmyslný | (1) neapzināts (2) netīšs (3) nevilšs | — | — |
| cs-003568 | abholen | Vyzvednout | (1) izņemt (2) paņemt | Ich hole dich ab. | Es tevi paņemšu. |
| cs-001593 | wahrscheinlich | Pravděpodobně | (1) droši vien | Er kommt wahrscheinlich später. | viņš droši vien atnāks vēlāk. |
| cs-003172 | schonungslos | Nemilosrdný | (1) nesaudzīgs | — | — |
| cs-002337 | hinaufklettern | Vylézt nahoru | (1) kāpt augšā | — | — |
| cs-001973 | angebracht | Připevněný | (1) iederīgs (2) piemērots | — | — |
| cs-002620 | der Umschwung | Převrat | (1) pagrieziens (2) apvērsums (3) pēkšņa pārmaiņa (4) lūzums (5) apgrieziens | — | — |
| cs-001892 | zusammenfügen | Spojit | (1) savienot | — | — |
| cs-001977 | der Reiter | Jezdec na koni | (1) jātnieks | — | — |
| cs-000990 | gelegen | Pohodlný | (1) nomaļš (2) parocīgs (3) izdevīgs (4) ērts | — | — |
| cs-000205 | smart | Mazaný | (1) viltīgs (2) gudrs | — | — |
| cs-002577 | die Entzündung | Zapálení | (1) iekaisums (2) aizdegšana (3) aizdedzināšana | — | — |
| cs-001205 | dehnen | Protahovat se | (1) vilkties (2) staipīties (3) stiepties (4) staipīt (5) stiept | — | — |
| cs-002900 | der Hilfsfonds | Pomocný fond | (1) palīdzības fonds | — | — |
| cs-002014 | der Terminkalender | Kalendář termínů | (1) piezīmju kalendārs | — | — |
| cs-003123 | die Nachbildung | Imitace | (1) imitācija (2) atdarinājums | — | — |
| cs-002974 | spionieren | Špehovat | (1) izspiegot (2) spiegot | — | — |
| cs-001833 | gleiten | Plachtit | (1) planēt (2) slīdēt | — | — |
| cs-003709 | das Eisenbahnunglück | Železniční katastrofa | (1) dzelzceļa katastrofa | — | — |
| cs-005558 | das Gewerbe | Zdvořilostní návštěva | (1) pastāvīgs darbs tirdzniecības vai amatniecības jomā vai pakalpojumu sniegšana (2) arods (3) amats | — | — |
| cs-001144 | das Nutzholz | Užitkové dřevo | (1) lietaskoki | — | — |
| cs-005555 | das Gerippe | Nazdařbůh | (1) karkass (2) ģindenis (3) skelets | — | — |
| cs-000729 | das Kleinauto | Malé auto | (1) mazlitrāžas automašīna | — | — |
| cs-002628 | die Vorkehrung | Ochranná opatření | (1) aizsardzības pasākumi | — | — |
| cs-004254 | einfallen | Přijít na mysl | (1) ienākt prātā | Mir fällt eine Idee ein. | man ienāk prātā ideja. |
| cs-004418 | ersparen | Ušetřit někoho něčeho | (1) aiztaupīt (2) atlicināt (3) iekrāt (4) ietaupīt | — | — |
| cs-005553 | gemäß | Do jisté míry | (1) atbilstoši (2) saskaņā ar (3) pēc | — | — |
| cs-001283 | die Barbarei | Barbarství | (1) barbarisms | — | — |
| cs-004591 | ermächtigen | Pověřit | (1) pilnvarot | — | — |
| cs-004746 | der Geschäftsführer | Manažer společnosti | (1) uzņēmuma vadītājs | — | — |
| cs-005552 | auffordern | Vyzvat | (1) aicināt | — | — |
| cs-003790 | verantworten | Nést odpovědnost za | (1) uzņemties atbildību par | — | — |
| cs-001009 | der Abonnent | Odběratel | (1) abonents | — | — |
| cs-005557 | die Vereinigung | Zásluhy | (1) savienošana (2) sabiedrība (3) savienība | — | — |
| cs-005547 | athletisch | Atletický | (1) atlētisks | — | — |
| cs-004741 | das Selbstbestimmungsrecht | Právo na sebeurčení | (1) pašnoteikšanās tiesības | — | — |
| cs-002041 | die Durchführung | Splnění | (1) realizēšana (2) veikšana (3) izdarīšana (4) izpildīšana (5) izvadīšana cauri kaut kam | — | — |
| cs-005550 | der Aufenthalt | Pobyt | (1) uzturēšanās | — | — |
| cs-004722 | die Besatzung | Velení | (1) okupācijas militārās vienības (2) apkalpe (3) ekipāža (4) komanda | — | — |
| cs-003814 | der Benzinkanister | Kanystr na benzín | (1) benzīna kanna | — | — |
| cs-005554 | die Parole | Výstižné slovo | (1) lozungs (2) parole | — | — |
| cs-005551 | auffassen | Pochopit | (1) saprast | — | — |
| cs-001667 | frisieren | Upravovat vlasy | (1) frizēt | — | — |
| cs-001654 | aufhalten | Zdržovat | (1) aizkavēt | — | — |
| cs-004333 | denkbar | Domnělý | (1) iespējams (2) iedomājams (3) domājams | — | — |
| cs-001913 | die Einflusssphäre | Sféra vlivu | (1) ietekmes sfēra | — | — |
| cs-001062 | der Pastor | Luteránský pastor | (1) luterāņu mācītājs | — | — |
| cs-001199 | einrechnen | Zahrnout | (1) ieskaitīt (2) ierēķināt | — | — |
| cs-004726 | sich einigen | Dohodnout se | (1) vienoties | — | — |
| cs-000198 | die Kaution | Jistota | (1) garantija (2) drošības nauda (3) galvojums (4) ķīla | — | — |
| cs-000745 | die Postanweisung | Převod peněz | (1) naudas pārvedums | — | — |
| cs-001559 | die Haushaltshilfe | Placená výpomoc v domácnosti | (1) algota palīdze mājsaimniecībā | — | — |
| cs-004226 | befühlen | Dotýkat se | (1) aptaustīt | — | — |
| cs-001730 | gewähren | Přidělit | (1) piešķirt (2) dot | — | — |
| cs-002756 | der Mannschaftskampf | Týmová soutěž | (1) komandu sacensības | — | — |
| cs-000685 | die Tageseinnahmen | Denní tržby | (1) dienas ieņēmumi | — | — |
| cs-004119 | sich entledigen | Zbavit se | (1) tikt vaļā (2) atbrīvoties | — | — |
| cs-004335 | beschlagnahmen | Konfiskovat | (1) atsavināt (2) konfiscēt (3) apķīlāt | — | — |
| cs-002588 | das Baugelände | Stavební pozemek | (1) apbūves gabals | — | — |
| cs-001599 | interpretieren | Vysvětlovat | (1) izskaidrot (2) interpretēt | — | — |
| cs-005548 | das Atom | Atom | (1) atoms | — | — |
| cs-002171 | der Slipper | Bota bez tkaniček | (1) kurpe bez aukliņām | — | — |
| cs-004300 | langfristig | Trvalejší | (1) ilgstošs (2) ilgtermiņa | — | — |
| cs-003423 | die Box | Krabice s víkem | (1) kaste ar vāku | — | — |
| cs-002015 | recken | Protahovat | (1) staipīties (2) stiepties (3) staipīt (4) stiept | — | — |
| cs-001903 | der Wink | Náznak | (1) mājiens | — | — |
| cs-003442 | der Bezug | Kryt | (1) pārvalks (2) sakars (3) attiecība | — | — |
| cs-002649 | der Knüller | Trhák | (1) grāvējs | — | — |
| cs-004448 | mulmig | Nejistý | (1) bailīgs (2) nedrošs (3) neomulīgs | — | — |
| cs-005556 | klarstellen | Vysvětlit | (1) paskaidrot | — | — |
| cs-004365 | jetzig | Současný | (1) tagadējs | — | — |
| cs-002856 | die Klasse | Kategorie | (1) kategorija (2) klase (3) sabiedrības šķira | — | — |
| cs-002506 | anfechten | Napadnout | (1) apšaubīt (2) apstrīdēt | — | — |
| cs-001943 | die Lesekarte | Čtenářská karta | (1) lasītāja kartīte | — | — |
| cs-000744 | der Fallschirmturm | Parašutistická věž | (1) izpletņlēcēju tornis | — | — |
| cs-002720 | der Anwärter | Uchazeč | (1) kandidāts (2) pretendents | — | — |
| cs-003879 | europaweit | V celoevropském měřítku | (1) visas Eiropas mērogā | — | — |
| cs-005549 | attraktiv | Atraktivní | (1) pievilcīgs | — | — |
| cs-000501 | nötigenfalls | V případě potřeby | (1) vajadzības gadījumā | — | — |
| cs-001268 | sich vergewissern | Ujistit se | (1) pārliecināties | — | — |
| cs-002590 | mindestens | Alespoň | (1) vismaz | — | — |
| cs-003578 | die Gemäldeausstellung | Výstava obrazů | (1) gleznu izstāde | — | — |
| cs-002615 | die Flut | Povodeň | (1) plūdi | — | — |
| cs-003940 | die Schonkost | Šetřící dieta | (1) diētisks uzturs | — | — |
| cs-000714 | versagen | Ukázat se jako zbabělý a bezmocný | (1) izrādīties gļēvam un nevarīgam (2) atteikties kalpot (3) neklausīt (4) noraidīt (5) atteikt (6) liegt | — | — |
| cs-003141 | rechts | Doprava | (1) labais (2) pa labi | — | — |
| cs-003043 | zwanglos | Volný | (1) nepiespiests (2) brīvs | — | — |
