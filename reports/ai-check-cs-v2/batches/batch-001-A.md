HOW-TO: šo versiju A saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-001.csv (versija A).
Gemini -> ai-gemini/batch-001.csv (versija B).
ChatGPT -> ai-chatgpt/batch-001.csv (versija C).
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
| cs-000817 | der Cup | Pohár ve sportovních soutěžích | (1) kauss sporta sacensībās | — | — |
| cs-002517 | der Zahnbelag | Zubní plak | (1) zobu aplikums | — | — |
| cs-004238 | sich verhalten | Chovat se | (1) izturēties | — | — |
| cs-000588 | schuldig | Vinen | (1) vainīgs | Er ist schuldig. | viņš ir vainīgs. |
| cs-001093 | missbilligen | Odsoudit | (1) neatzīt par labu (2) nopelt | — | — |
| cs-002026 | die Schuhfabrik | Továrna na boty | (1) apavu fabrika | — | — |
| cs-002867 | dringen | Vtlačit se | (1) lauzties (2) iespiesties (3) ielauzties (4) prasīt (5) pieprasīt (6) spiesties | — | — |
| cs-003854 | betrachten | Podívat se | (1) aplūkot | — | — |
| cs-004368 | die Errungenschaft | Úspěch | (1) ieguvums (2) guvums (3) sasniegums | — | — |
| cs-004104 | nachträglich | Pro doplňky | (1) papildu (2) vēlāk (3) piedevām (4) vēlāks | — | — |
| cs-002286 | der Gesichtspunkt | Aspekt | (1) viedoklis | — | — |
| cs-003467 | entlassen | Pustit | (1) atlaist | Die Firma entlässt viele Mitarbeiter. | uzņēmums atlaiž daudz darbinieku. |
| cs-001073 | der Fräser | Fréza | (1) frēzētājs (2) frēze | — | — |
| cs-003582 | aufklären | Objasnit | (1) noskaidrot (2) izskaidrot | — | — |
| cs-003984 | eintauchen | Ponořit se | (1) iemērcēt (2) iegremdēt (3) ienirt (4) iemērkt | — | — |
| cs-005007 | arg | Znevažující | (1) slikts | — | — |
| cs-005006 | sprechen | Mluvit | (1) runāt | Ich spreche Deutsch. | Es runāju vāciski. |
| cs-004102 | die Praline | Čokoládový bonbon s náplní | (1) šokolādes konfekte ar pildījumu | — | — |
| cs-004413 | die Folie | Hliníková fólie | (1) alumīnija folija | — | — |
| cs-004044 | das Glied | Člen řetězu | (1) ekstremitāte (2) ķēdes loceklis (3) posms (4) loceklis | — | — |
| cs-000491 | verboten | Zakázáno | (1) aizliegts | — | — |
| cs-005004 | das Haus | Dům | (1) māja | — | — |
| cs-000174 | der Abstand | Vzdálenost | (1) attālums (2) distance | — | — |
| cs-003731 | die Kinderkrippe | Dětské jesle | (1) mazbērnu novietne | — | — |
| cs-002129 | weder | Ani | (1) nedz | Ich trinke weder Kaffee noch Tee. | es nedzeru nedz kafiju, nedz tēju. |
| cs-001717 | gierig | Lakomý | (1) kārīgs (2) alkatīgs (3) kārs | — | — |
| cs-004494 | der Mars | Mars | (1) marss | — | — |
| cs-000164 | das Konfekt | Bonbony | (1) konfekte | — | — |
| cs-005005 | lernen | Učit se | (1) mācīties | — | — |
| cs-002072 | dienstlich | Úřední | (1) dienesta (2) amata | — | — |
| cs-000167 | die Nationalität | Státní příslušnost | (1) tautība | — | — |
| cs-001570 | die Hautentzündung | Zánět kůže | (1) ādas iekaisums | — | — |
| cs-002394 | spotten | Zesměšňovat | (1) izsmiet (2) zoboties | — | — |
| cs-001997 | extra | Speciální | (1) speciāls | — | — |
| cs-004081 | versagen | Vypovědět službu | (1) atteikt (2) noraidīt (3) neklausīt (4) atteikties kalpot (5) izrādīties gļēvam un nevarīgam (6) liegt | — | — |
| cs-002565 | redigieren | Editovat | (1) rediģēt | — | — |
| cs-005003 | das Wasser | Voda | (1) ūdens | — | — |
| cs-005002 | das Brot | Chléb | (1) maize | — | — |
| cs-004501 | ablegen | Položit | (1) nolikt | Bitte legen Sie den Mantel ab. | lūdzu, novelciet mēteli. |
| cs-002379 | der Sonnenschein | Sluneční svit | (1) saules gaisma | — | — |
| cs-002943 | deplaziert | Nemístný | (1) nevietā (2) nelaikā (3) nepiemērots | — | — |
| cs-003996 | der Pendelverkehr | Místní příměstská doprava | (1) vietējā piepilsētas satiksme | — | — |
| cs-001718 | glätten | Vyhlazovat | (1) nogludināt | — | — |
| cs-002477 | die Eingabe | Zadávání dat do počítače | (1) iesniegums (2) datu ievadīšana datorā | — | — |
| cs-002018 | zweifellos | Nezpochybnitelný | (1) neapšaubāms | — | — |
| cs-003544 | die Vorsicht | Pozor | (1) piesardzība | — | — |
| cs-002416 | verunglücken | Utrpět nehodu | (1) ciest nelaimes gadījumā (2) ciest avārijā | — | — |
| cs-002728 | lebensgefährlich | Život ohrožující | (1) dzīvību apdraudošs (2) bīstams | — | — |
| cs-001770 | obere | Ten horní | (1) augšējais | — | — |
| cs-004007 | sich einprägen | Zapamatovat si | (1) iegaumēt | — | — |
| cs-001120 | umdenken | Měnit názor podle situace | (1) mainīt viedokli atkarībā no situācijas | — | — |
| cs-000740 | korrupt | Úplatný | (1) pērkams (2) piekukuļojams | — | — |
| cs-000144 | die These | Práce | (1) tēze | — | — |
| cs-000712 | erzielen | Dosáhnout | (1) sasniegt (2) panākt (3) gūt | — | — |
| cs-004491 | spöttisch | Zubatý | (1) izsmejošs (2) zobgalīgs | — | — |
| cs-004249 | der Rennfahrer | Závodní jezdec | (1) sacīkšu braucējs | — | — |
| cs-003378 | das Sittlichkeitsdelikt | Porušení morálních norem | (1) tikumības normu pārkāpums | — | — |
| cs-005008 | das Holzbrett | Strach z výšek | (1) koka dēlis | — | — |
| cs-005001 | der Apfel | Jablko | (1) ābols | — | — |
| cs-001182 | die Laienkunst | Umělecká zájmová činnost | (1) mākslinieciskā pašdarbība | — | — |
| cs-000286 | das Gespenst | Duch | (1) spoks | — | — |
| cs-000064 | der Wechsel | Posun | (1) maiņa | Der Wechsel der Jahreszeiten ist schön. | gadalaiku maiņa ir skaista. |
| cs-000126 | austreten | Vystěhovat | (1) nomīt (2) izstāties (3) izmīt | — | — |
| cs-002391 | veranlassen | Povzbudit | (1) ierosināt (2) mudināt (3) izraisīt | — | — |
| cs-000356 | der Bergführer | Horský průvodce | (1) pavadonis kalnos | — | — |
| cs-000479 | die Unterlage | Trvalý | (1) paklājs (2) paliktnis (3) balsts (4) dati (5) dokumentācija (6) paliekamais | — | — |
| cs-002892 | der Aufmarsch | Demonstrace | (1) gājiens (2) demonstrācija | — | — |
| cs-001415 | gelegen | Šikovný | (1) izdevīgs (2) parocīgs (3) nomaļš (4) ērts | — | — |
| cs-002843 | die Täfelung | Stěnový panel | (1) sienas panelis (2) apšuvums | — | — |
| cs-001320 | früh | Brzy | (1) agrs | — | — |
| cs-000267 | die Generalreparatur | Generální oprava | (1) kapitālremonts | — | — |
| cs-001347 | die Betriebskosten | Výrobní náklady | (1) uzņēmuma ekspluatācijas izdevumi (2) ražošanas izdevumi | — | — |
| cs-000224 | das Empfehlungsschreiben | Doporučující dopis | (1) rakstisks ieteikums | — | — |
| cs-000276 | jung | Mladý (o věku) | (1) jauns (par cilvēkiem) | Sie ist noch jung. | viņa ir vēl jauna. |
| cs-003044 | zusammenlegen | Složit [dohromady] | (1) likt (2) salikt [kopā] | — | — |
| cs-001668 | einförmig | Jednotný | (1) vienveidīgs (2) vienmuļš | — | — |
| cs-001076 | angegriffen | Napadený | (1) noguris (2) uzbrukts | — | — |
| cs-003375 | sich entschließen | Rozhodnout se | (1) nolemties | — | — |
| cs-004207 | rege | Pohybující se | (1) rosīgs (2) kustīgs (3) darbīgs (4) dzīvs | — | — |
| cs-000830 | der Fasching | Karneval | (1) karnevāls | — | — |
| cs-002865 | beschwören | Přísahat | (1) apliecināt ar zvērestu (2) ļoti lūgt (3) zvērēt | — | — |
| cs-000801 | verabschieden | Rozloučit se | (1) atbrīvot no darba (2) aizlaist pensijā | — | — |
| cs-003695 | die Briefbombe | Dopisní bomba | (1) vēstuļbumba | — | — |
| cs-000061 | wider | Vs | (1) pret | — | — |
| cs-002087 | das Bergwerk | Šachta | (1) raktuves (2) šahta | — | — |
| cs-000752 | die Liebesbeziehung | Milostný vztah | (1) intīmas attiecības | — | — |
| cs-001517 | die Einbildung | Představivost | (1) iztēle (2) fantāzija (3) iedomība (4) uzpūtība (5) iedoma | — | — |
| cs-000282 | der Hirntumor | Mozkový nádor | (1) smadzeņu audzējs | — | — |
| cs-004454 | das Originalgemälde | Originální malba | (1) oriģinālglezna | — | — |
| cs-003912 | dessen ungeachtet | Navzdory tomu | (1) neskatoties uz to (2) neievērojot to | — | — |
| cs-004391 | angehören | Patřit k | (1) piederēt pie | — | — |
| cs-000947 | der Bodensatz | Spodina | (1) padibenes (2) mieles (3) nogulsnes | — | — |
| cs-004155 | der Korken | Korek | (1) korķis | — | — |
| cs-003809 | die Stripperin | Striptýzová tanečnice | (1) striptīza dejotāja | — | — |
| cs-003078 | die Bauchhöhle | Břišní dutina | (1) vēderdobums | — | — |
| cs-000707 | der Totalschaden | Poškození vozidla, které nelze po nehodě opravit | (1) transporta līdzekļa bojājumi, kas pēc avārijas vairs nav labojami | — | — |
| cs-002226 | beglückwünschen | Blahopřát | (1) novēlēt laimes (2) apsveikt | — | — |
| cs-002753 | festgesetzt | Zadržený | (1) nosacīts (2) nolikts (3) noteikts | — | — |
| cs-001762 | hineingehen | Jít dovnitř | (1) ieiet iekšā | — | — |
| cs-000930 | der Rückgang | Úpadek | (1) atpakaļiešana (2) samazināšanās (3) panīkums | — | — |
