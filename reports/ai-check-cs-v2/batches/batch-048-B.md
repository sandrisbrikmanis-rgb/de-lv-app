HOW-TO: šo versiju B saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-048.csv (versija C).
Gemini -> ai-gemini/batch-048.csv (versija A).
ChatGPT -> ai-chatgpt/batch-048.csv (versija B).
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
| cs-004164 | die Fläche | Povrch | (1) virsma | — | — |
| cs-002108 | versagen | Neposlechnout | (1) izrādīties gļēvam un nevarīgam (2) atteikties kalpot (3) neklausīt (4) noraidīt (5) atteikt (6) liegt | — | — |
| cs-002035 | die Brandstätte | Místo požáru | (1) ugunsgrēka vieta | — | — |
| cs-002327 | zusammenfügen | Sestavit | (1) savienot | — | — |
| cs-001326 | hinausgehen | Jít ven | (1) iziet | Ich gehe kurz hinaus. | es uz brīdi izeju ārā. |
| cs-001184 | gelegen | Pohodlný | (1) nomaļš (2) parocīgs (3) izdevīgs (4) ērts | — | — |
| cs-000618 | angeblich | Údajně | (1) šķietami (2) it kā | — | — |
| cs-003319 | der Koalitionspartner | Koaliční partner | (1) koalīcijas partneris | — | — |
| cs-001467 | derartig | Podobný | (1) tamlīdzīgi (2) šāds (3) tāds | — | — |
| cs-002404 | die Schramme | Oděrka | (1) nobrāzums | — | — |
| cs-005564 | der Aufschub | Odložení | (1) atlikšana | — | — |
| cs-002844 | die Entzündung | Vznícení | (1) iekaisums (2) aizdegšana (3) aizdedzināšana | — | — |
| cs-000232 | begegnen | Setkat se | (1) satikt | — | — |
| cs-005570 | das Grundnahrungsmittel | Porušení morálních norem | (1) pārtikas pamatprodukts | — | — |
| cs-000092 | das Bauwesen | Stavebnictví | (1) būvniecība (2) celtniecība | — | — |
| cs-001735 | die Nachfrage | Žádost | (1) pieprasījums | Die Nachfrage nach Wohnungen ist groß. | pieprasījums pēc dzīvokļiem ir liels. |
| cs-004617 | ersparen | Odložit stranou | (1) aiztaupīt (2) atlicināt (3) iekrāt (4) ietaupīt | — | — |
| cs-004322 | der Hinterhalt | Úkryt | (1) slēpnis | — | — |
| cs-004348 | abhängen | Být závislý | (1) būt atkarīgam | Das hängt vom Wetter ab. | tas ir atkarīgs no laikapstākļiem. |
| cs-000084 | die Einfuhrbeschränkung | Omezení dovozu | (1) importa ierobežojums | — | — |
| cs-002248 | dickköpfig | Tvrdohlavý | (1) stūrgalvīgs | — | — |
| cs-000725 | der Bereich | Pole | (1) joma | Sie arbeitet im sozialen Bereich. | viņa strādā sociālajā jomā. |
| cs-004724 | die Überbevölkerung | Přelidnění | (1) pārapdzīvotība | — | — |
| cs-005568 | die Berufserfahrung | Připravenost | (1) darba pieredze | — | — |
| cs-000668 | kein | Žádná | (1) nekāds (2) neviens | Ich habe kein Geld. | man nav naudas. |
| cs-000135 | der Farbige | Člověk jiné než bílé barvy pleti | (1) krāsainais cilvēks | — | — |
| cs-005566 | der Baumstamm | Stromová školka | (1) koka stumbrs | — | — |
| cs-000783 | das Sensenblatt | Čepel kosy | (1) izkapts asmens | — | — |
| cs-004709 | die Gemäldegalerie | Obrazová galerie | (1) gleznu galerija | — | — |
| cs-000921 | smart | Chytrý | (1) viltīgs (2) gudrs | — | — |
| cs-001835 | sich entrüsten | Rozhořčit se | (1) sadumpoties (2) sašust | — | — |
| cs-004737 | zwanzigste | Dvacátý | (1) divdesmitais | — | — |
| cs-002881 | der Tiefsinn | Ohleduplnost | (1) dziļdomīgums | — | — |
| cs-000617 | entgegnen | Odpovědět | (1) atbildēt | — | — |
| cs-005559 | der Aufprall | Náraz | (1) trieciens | — | — |
| cs-005567 | erdrücken | Skličovat | (1) nomākt (2) nospiest | — | — |
| cs-004628 | verbinden | Vázat | (1) pārsiet (2) savienot | Die Brücke verbindet die zwei Stadtteile. | tilts savieno abas pilsētas daļas. |
| cs-000601 | das Opernglas | Divadelní dalekohled | (1) teātra binoklis | — | — |
| cs-000485 | tödlich | Smrtící | (1) nāvējošs | — | — |
| cs-004456 | die Tageseinnahmen | Denní příjmy | (1) dienas ieņēmumi | — | — |
| cs-003321 | beständig | Neměnný | (1) nemainīgs (2) pastāvīgs | — | — |
| cs-003982 | das Geschäftshaus | Obchodní dům | (1) tirdzniecības nams | — | — |
| cs-003180 | die Postkarte | Pohlednice | (1) pastkarte | — | — |
| cs-004310 | der Bezug | Poměr | (1) pārvalks (2) sakars (3) attiecība | — | — |
| cs-000636 | das Knochengewebe | Kostní tkáň | (1) kaulaudi | — | — |
| cs-005565 | vorbereiten | Něco si předsevzít | (1) sagatavot | — | — |
| cs-002598 | unüberlegt | Lehkomyslný | (1) vieglprātīgs (2) neapdomīgs | — | — |
| cs-000199 | der Absatzmarkt | Odbytový trh | (1) noieta tirgus | — | — |
| cs-002647 | rechtsfähig | Právně způsobilý | (1) tiesībspējīgs | — | — |
| cs-003972 | die Liebenswürdigkeit | Laskavost | (1) laipnība | — | — |
| cs-001796 | froh | Šťastný | (1) priecīgs | — | — |
| cs-003636 | miserabel | Ubohý | (1) nožēlojams | — | — |
| cs-003205 | die Strecke | Úsek | (1) posms | — | — |
| cs-003090 | eventuell | Možná | (1) iespējams | — | — |
| cs-001352 | schreiten | Jít | (1) iet (2) soļot | — | — |
| cs-005563 | aufschieben | Odložit | (1) atlikt | — | — |
| cs-003494 | das Eissegeln | Jízda na ledových jachtách | (1) burāšana ar ledusjahtām | — | — |
| cs-003252 | der Marathonlauf | Maratonský běh | (1) maratonskrējiens | — | — |
| cs-000827 | nachträglich | Později | (1) piedevām (2) vēlāk (3) papildu (4) vēlāks | — | — |
| cs-000020 | die Vorliebe | Zvláštní obliba | (1) sevišķa patika | — | — |
| cs-002700 | der Pegel | Vodní hladina | (1) ūdens līmenis | — | — |
| cs-001324 | nüchtern | Ne opilý | (1) neiereibis | Der Fahrer muss nüchtern sein. | vadītājam jābūt neiereibušam. |
| cs-004375 | gewähren | Dát | (1) piešķirt (2) dot | — | — |
| cs-003115 | die Kehrseite | Druhá strana | (1) otrā puse | — | — |
| cs-002273 | recken | Protahovat se | (1) staipīties (2) stiepties (3) staipīt (4) stiept | — | — |
| cs-002940 | der Sonderfall | Výjimečný případ | (1) izņēmuma gadījums | — | — |
| cs-001834 | dehnen | Táhnout se | (1) vilkties (2) staipīties (3) stiepties (4) staipīt (5) stiept | — | — |
| cs-003385 | der Chorleiter | Sbormistr | (1) kormeistars | — | — |
| cs-003471 | die Haushaltung | Úklid domácnosti | (1) mājturība | — | — |
| cs-004014 | der Anwärter | Uchazeč | (1) kandidāts (2) pretendents | — | — |
| cs-003929 | lassen | Dovolit | (1) ļaut (2) atstāt | Ich lasse die Tasche hier. | es atstāju somu šeit. |
| cs-000051 | spitzen | Naostřit | (1) uzasināt | — | — |
| cs-000839 | gliedern | Rozdělit | (1) sadalīt | — | — |
| cs-000230 | die Besinnung | Uvědomění | (1) apziņa (2) samaņa | — | — |
| cs-002922 | erschüttern | Šokovat | (1) iedragāt (2) satriekt (3) satricināt | — | — |
| cs-001100 | sich vergnügen | Bavit se | (1) izklaidēties | — | — |
| cs-003495 | der Umschwung | Zvrat | (1) pagrieziens (2) apvērsums (3) pēkšņa pārmaiņa (4) lūzums (5) apgrieziens | — | — |
| cs-005569 | das Kabinettsmitglied | Rozhodnutí kabinetu | (1) ministrs (2) kabineta loceklis | — | — |
| cs-000578 | aufheben | Zvednout | (1) saglabāt (2) atcelt (3) pacelt | Kannst du bitte den Stift aufheben? | vai vari, lūdzu, pacelt pildspalvu? |
| cs-002201 | vertragen | Tolerovat | (1) panest | — | — |
| cs-005562 | die Aufregung | Vzrušení | (1) uztraukums | — | — |
| cs-000953 | der Geschäftsmann | Podnikatel | (1) uzņēmējs | — | — |
| cs-004324 | einrechnen | Započítat | (1) ieskaitīt (2) ierēķināt | — | — |
| cs-001393 | die Basisforschung | Základní výzkum | (1) pamatpētījums | — | — |
| cs-000705 | die Einbildung | Nadutost | (1) uzpūtība (2) iedomība (3) fantāzija (4) iztēle (5) iedoma | — | — |
| cs-004460 | beschlagnahmen | Zabavit | (1) atsavināt (2) konfiscēt (3) apķīlāt | — | — |
| cs-002776 | wandern | Chodit na túry | (1) pārgājienā iet | — | — |
| cs-002972 | die Kriegsentschädigung | Kompenzace válečných ztrát | (1) reparācijas (2) atlīdzinājums par zaudējumiem karā | — | — |
| cs-001404 | der Wirtschaftsblock | Ekonomický blok | (1) ekonomiskais bloks | — | — |
| cs-005561 | aufregen | Rozčilovat | (1) uztraukt | — | — |
| cs-005560 | aufräumen | Uklidit | (1) sakārtot | — | — |
| cs-002762 | der Fetzen | Hadry | (1) driska (2) skrandas | — | — |
| cs-001867 | das Gesetzbuch | Kodex | (1) likumu krājums (2) kodekss | — | — |
| cs-001174 | jetzt | Aktuálně | (1) pašlaik (2) tagad | — | — |
| cs-003223 | einfarbig | Monochromatický | (1) vienkrāsains | Ich suche ein einfarbiges Hemd. | es meklēju vienkrāsainu kreklu. |
| cs-002311 | angehen | Obrátit se proti | (1) vērsties pret (2) attiekties | — | — |
| cs-003130 | umschließen | Uzavřít | (1) apņemt (2) aptvert (3) ieslēgt | — | — |
| cs-004694 | der Regierungschef | Předseda vlády | (1) valdības galva (2) premjerministrs | — | — |
| cs-001071 | der Reitsport | Jezdecké sporty | (1) jāšanas sports | — | — |
| cs-003164 | sich einlassen | Pouštět se do | (1) ielaisties | — | — |
