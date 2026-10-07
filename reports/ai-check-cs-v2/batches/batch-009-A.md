HOW-TO: šo versiju A saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-009.csv (versija C).
Gemini -> ai-gemini/batch-009.csv (versija A).
ChatGPT -> ai-chatgpt/batch-009.csv (versija B).
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
| cs-001084 | überanstrengen | Přepínat | (1) pārpūlēt (2) sich ü. pārpūlēties | — | — |
| cs-002047 | verfallen | Zhroutit se | (1) sagrūt (2) panīkt (3) pagrimt (4) sabrukt | — | — |
| cs-003031 | überführen | Přepravit přes řeku | (1) pārvest pāri (2) pārcelt pāri upei | — | — |
| cs-001802 | der Grenzbezirk | Pohraniční oblast | (1) pierobežas apgabals | — | — |
| cs-003593 | das Fachabitur | Odborná maturita | (1) pabeigta apmācība arodskolā | — | — |
| cs-001254 | farbenfroh | Barevný | (1) košs | — | — |
| cs-003542 | schütten | [do] nalít | (1) [sa]bērt | — | — |
| cs-002241 | das Gewässer | Vody | (1) ūdeņi | — | — |
| cs-002500 | sich ergeben | Vzdát se | (1) izrietēt (2) padoties | — | — |
| cs-001215 | sich verschlafen | Zaspát | (1) aizgulēties | — | — |
| cs-005101 | eigentümlich | Umíněný | (1) īpatnējs (2) raksturīgs | — | — |
| cs-005102 | die Besinnung | Zdvořilostní návštěva | (1) samaņa (2) apziņa | — | — |
| cs-000475 | der Anfangsbuchstabe | Počáteční písmeno | (1) sākuma burts | — | — |
| cs-003965 | die Bezugsperson | Blízká osoba | (1) kontaktpersona (2) tuvākais cilvēks | — | — |
| cs-002298 | die Schwierigkeit | Potíže | (1) grūtības | — | — |
| cs-003988 | umstritten | Kontroverzní | (1) pretrunīgs | — | — |
| cs-003162 | einheimisch | Místní | (1) vietējs | Die einheimische Bevölkerung kennt die Berge gut. | vietējie iedzīvotāji labi pazīst kalnus. |
| cs-001092 | der Spitzer | Ořezávátko | (1) zīmuļu asināmais | — | — |
| cs-001996 | beisammen | Spolu | (1) kopā | — | — |
| cs-002119 | die Glut | Velký žár | (1) kvēle (2) liels karstums (3) svelme | — | — |
| cs-003032 | das Plädoyer | Projev státního zástupce nebo advokáta u soudu | (1) prokurora vai advokāta runa tiesā | — | — |
| cs-004018 | die Bürde | Zátěž | (1) nasta (2) slogs | — | — |
| cs-003140 | fassungslos | Překvapený | (1) pārsteigts (2) šokēts | — | — |
| cs-001444 | der Kundendienst | Služby zákazníkům | (1) klientu serviss | — | — |
| cs-001049 | aufrüsten | Vyzbrojit | (1) apbruņot | — | — |
| cs-004099 | paarweise | Ve dvojicích | (1) pāros | — | — |
| cs-003764 | verwundern | Způsobit údiv | (1) radīt izbrīnu | — | — |
| cs-001111 | grell | Oslnivý | (1) spožs (2) žilbinošs | — | — |
| cs-002267 | leidlich | Přijatelný | (1) ciešami (2) puslīdz labi (3) paciešams | — | — |
| cs-000747 | der Misserfolg | Selhání | (1) neveiksme | — | — |
| cs-003638 | lesbar | Čitelné | (1) viegli salasāms | — | — |
| cs-002715 | sich erhitzen | Zahřát se | (1) sakarst | — | — |
| cs-004258 | stranden | Mít nehodu | (1) uzskriet uz sēkļa (2) ciest avāriju | — | — |
| cs-001584 | niederlegen | Zastavit práci | (1) pārtraukt darbu (2) sākt streikot (3) nolikt | — | — |
| cs-000102 | das Laufwerk | Mechanika | (1) dzinējs (2) dzinis | — | — |
| cs-002349 | die Walderdbeere | Lesní jahoda | (1) meža zemene | — | — |
| cs-005094 | das Datum | Datum | (1) datums | — | — |
| cs-002380 | großmütig | Ušlechtilý | (1) augstsirdīgs | — | — |
| cs-004330 | rühmen | Honosit se něčím | (1) slavināt (2) lielīties (3) dižoties ar kaut ko (4) slavēt | — | — |
| cs-001809 | erblicken | Vidět | (1) ieraudzīt | — | — |
| cs-003224 | besänftigen | Upokojit | (1) remdēt (2) remdināt (3) apklusināt (4) nomierināt | — | — |
| cs-002794 | vergleichen | Porovnávat | (1) salīdzināt | — | — |
| cs-005095 | dein | Tvůj | (1) tavs | — | — |
| cs-005098 | entweder | Ani | (1) vai nu | — | — |
| cs-003347 | der Rückfall | Relaps | (1) recidīvs | — | — |
| cs-002268 | einüben | Naučit se | (1) iemācīties (2) iestudēt | — | — |
| cs-002507 | dreiviertel | Tři čtvrtiny | (1) trīs ceturtdaļas | — | — |
| cs-005099 | erlassen | Vpustit dovnitř | (1) atlaist (2) atbrīvot (3) izdot | — | — |
| cs-002908 | hitzig | Náruživý | (1) dedzīgs (2) straujš (3) ātrs dusmās (4) karsts | — | — |
| cs-004388 | die Eisenbahnfahrt | Cesta vlakem | (1) brauciens pa dzelzceļu | — | — |
| cs-002755 | durcharbeiten | Důkladně přečíst | (1) rūpīgi izlasīt (2) rūpīgi izmīcīt (3) izstrādāt | — | — |
| cs-004076 | drängen | Pobízet | (1) spiest (2) steidzināt (3) skubināt (4) mudināt (5) grūst | — | — |
| cs-000866 | reizbar | Snadno podrážděný | (1) ātri viegli aizkaitināms | — | — |
| cs-000611 | die Beratung | Konzultace | (1) konsultācija | — | — |
| cs-005093 | dass | Že | (1) ka | Ich weiß, dass du müde bist. | es zinu, ka tu esi noguris. |
| cs-000400 | ankommen | Dorazit | (1) ierasties | — | — |
| cs-001063 | die Marssonde | Marsovská sonda | (1) marsa zonde | — | — |
| cs-004248 | kidnappen | Vzít jako rukojmí | (1) nolaupīt (2) saņemt par ķīlnieku | — | — |
| cs-002421 | gar | Vůbec | (1) pavisam (2) visai (nolieguma teikumos) | Das ist gar nicht so schwer. | Tas nemaz nav tik grūti. |
| cs-001534 | hinzu | Navíc | (1) klāt | — | — |
| cs-003607 | der Firmenchef | Šéf firmy | (1) firmas vadītājs | — | — |
| cs-002980 | der Dieseltreibstoff | Motorová nafta | (1) dīzeļdegviela | — | — |
| cs-000973 | auf und ab | Tam a zpět | (1) šurp un turp (2) augšā un lejā | — | — |
| cs-005092 | dann | Pak | (1) tad | — | — |
| cs-005100 | wehen | Nafouknout | (1) pūst | — | — |
| cs-003904 | eingehen | Souhlasit | (1) pienākt (2) ienākt (3) ierauties (4) sarauties (5) piekrist (6) saderēt (7) ieiet | — | — |
| cs-005097 | abbrechen | Vtrhnout do | (1) pārtraukt | Wir mussten das Gespräch abbrechen. | mums nācās pārtraukt sarunu. |
| cs-005096 | deutsch | Německý | (1) vācu | — | — |
| cs-000314 | das Innere | Vnitřní část | (1) iekšiene (2) iekšējā daļa | — | — |
| cs-003023 | die Lohnerhöhung | Zvýšení platu | (1) darba algas paaugstinājums | — | — |
| cs-000904 | die Abenteuergeschichte | Dobrodružný příběh | (1) dēku stāsts | — | — |
| cs-001263 | abschleppen | Odtáhnout auto | (1) aizvākt automašīnu | — | — |
| cs-000178 | mitnehmen | Vzít s sebou | (1) ņemt līdzi | — | — |
| cs-001020 | der Exot | Exotická osoba | (1) augs (2) dzīvnieks (3) eksotisks cilvēks | — | — |
| cs-001659 | bezweifeln | Pochybovat o | (1) apšaubīt | — | — |
| cs-001920 | die Geographie | Zeměpis | (1) ģeogrāfija | — | — |
| cs-004029 | der Bestand | Složení | (1) inventārs (2) krājums (3) sastāvs | — | — |
| cs-002282 | der Pfiff | Písknutí | (1) svilpiens | — | — |
| cs-000302 | die Knoblauchzehe | Stroužek česneku | (1) ķiploka daiviņa | — | — |
| cs-004604 | vollkommen | Docela | (1) pilnīgi (2) pavisam (3) pilnīgs | — | — |
| cs-000089 | der Bibliotheksausweis | Knihovní průkaz | (1) bibliotēkas apliecība | — | — |
| cs-002684 | die Vereinigung | Společnost | (1) sabiedrība (2) savienošana (3) savienība | — | — |
| cs-005091 | danken | Děkovat | (1) pateikties | — | — |
| cs-001395 | die Quittung | Účtenka | (1) kvīts | — | — |
| cs-000079 | die Sülze | Galert | (1) galerts | — | — |
| cs-003646 | die Herzschwäche | Selhání srdce | (1) sirds vājums | — | — |
| cs-001318 | die Neuerung | Novinka | (1) jauninājums | — | — |
| cs-000841 | der Turner | Gymnasta | (1) vingrotājs | — | — |
| cs-003158 | sterben | Zemřít | (1) nomirt | — | — |
| cs-000177 | weisen | Naznačit | (1) norādīt | — | — |
| cs-001521 | der Homosexuelle | Homosexuál | (1) homoseksuālis | — | — |
| cs-002789 | der Gemüsebau | Zelinářství | (1) sakņkopība (2) dārzeņkopība | — | — |
| cs-003470 | die Friedensbedingungen | Mírové podmínky | (1) miera nosacījumi | — | — |
| cs-003914 | abtragen | Zbořit | (1) nonēsāt (2) nojaukt (3) aiznest | — | — |
| cs-001238 | fortschaffen | Odnést | (1) aizvest projām (2) aiznest projām (3) aizgādāt projām | — | — |
| cs-003788 | begünstigen | Podporovat | (1) sekmēt (2) protežēt (3) atbalstīt (4) veicināt | — | — |
| cs-003089 | das Sägewerk | Pilnice | (1) zāģētava | — | — |
| cs-000432 | das Blitzlicht | Zábleskové světlo | (1) zibspuldzes gaisma | — | — |
| cs-003468 | der Stoßverkehr | Zvýšený provoz v určitou denní dobu | (1) sastrēgumstunda (2) pastiprināta satiksme noteiktā diennakts laikā | — | — |
| cs-004667 | die Führernatur | Vůdčí typ | (1) līdera tips (2) līderis | — | — |
