HOW-TO: šo versiju C saņem ChatGPT.
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
| cs-001093 | missbilligen | Odsoudit | (1) nopelt (2) neatzīt par labu | — | — |
| cs-002026 | die Schuhfabrik | Továrna na boty | (1) apavu fabrika | — | — |
| cs-002867 | dringen | Vtlačit se | (1) iespiesties (2) ielauzties (3) prasīt (4) pieprasīt (5) spiesties (6) lauzties | — | — |
| cs-003854 | betrachten | Podívat se | (1) aplūkot | — | — |
| cs-004368 | die Errungenschaft | Úspěch | (1) guvums (2) sasniegums (3) ieguvums | — | — |
| cs-004104 | nachträglich | Pro doplňky | (1) vēlāk (2) piedevām (3) vēlāks (4) papildu | — | — |
| cs-002286 | der Gesichtspunkt | Aspekt | (1) viedoklis | — | — |
| cs-003467 | entlassen | Pustit | (1) atlaist | Die Firma entlässt viele Mitarbeiter. | uzņēmums atlaiž daudz darbinieku. |
| cs-001073 | der Fräser | Fréza | (1) frēze (2) frēzētājs | — | — |
| cs-003582 | aufklären | Objasnit | (1) noskaidrot (2) izskaidrot | — | — |
| cs-003984 | eintauchen | Ponořit se | (1) iegremdēt (2) ienirt (3) iemērkt (4) iemērcēt | — | — |
| cs-005007 | arg | Znevažující | (1) slikts | — | — |
| cs-005006 | sprechen | Mluvit | (1) runāt | Ich spreche Deutsch. | Es runāju vāciski. |
| cs-004102 | die Praline | Čokoládový bonbon s náplní | (1) šokolādes konfekte ar pildījumu | — | — |
| cs-004413 | die Folie | Hliníková fólie | (1) alumīnija folija | — | — |
| cs-004044 | das Glied | Člen řetězu | (1) ķēdes loceklis (2) posms (3) loceklis (4) ekstremitāte | — | — |
| cs-000491 | verboten | Zakázáno | (1) aizliegts | — | — |
| cs-005004 | das Haus | Dům | (1) māja | — | — |
| cs-000174 | der Abstand | Vzdálenost | (1) distance (2) attālums | — | — |
| cs-003731 | die Kinderkrippe | Dětské jesle | (1) mazbērnu novietne | — | — |
| cs-002129 | weder | Ani | (1) nedz | Ich trinke weder Kaffee noch Tee. | es nedzeru nedz kafiju, nedz tēju. |
| cs-001717 | gierig | Lakomý | (1) alkatīgs (2) kārs (3) kārīgs | — | — |
| cs-004494 | der Mars | Mars | (1) marss | — | — |
| cs-000164 | das Konfekt | Bonbony | (1) konfekte | — | — |
| cs-005005 | lernen | Učit se | (1) mācīties | — | — |
| cs-002072 | dienstlich | Úřední | (1) amata (2) dienesta | — | — |
| cs-000167 | die Nationalität | Státní příslušnost | (1) tautība | — | — |
| cs-001570 | die Hautentzündung | Zánět kůže | (1) ādas iekaisums | — | — |
| cs-002394 | spotten | Zesměšňovat | (1) izsmiet (2) zoboties | — | — |
| cs-001997 | extra | Speciální | (1) speciāls | — | — |
| cs-004081 | versagen | Vypovědět službu | (1) noraidīt (2) neklausīt (3) atteikties kalpot (4) izrādīties gļēvam un nevarīgam (5) liegt (6) atteikt | — | — |
| cs-002565 | redigieren | Editovat | (1) rediģēt | — | — |
| cs-005003 | das Wasser | Voda | (1) ūdens | — | — |
| cs-005002 | das Brot | Chléb | (1) maize | — | — |
| cs-004501 | ablegen | Položit | (1) nolikt | Bitte legen Sie den Mantel ab. | lūdzu, novelciet mēteli. |
| cs-002379 | der Sonnenschein | Sluneční svit | (1) saules gaisma | — | — |
| cs-002943 | deplaziert | Nemístný | (1) nelaikā (2) nepiemērots (3) nevietā | — | — |
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
| cs-000740 | korrupt | Úplatný | (1) piekukuļojams (2) pērkams | — | — |
| cs-000144 | die These | Práce | (1) tēze | — | — |
| cs-000712 | erzielen | Dosáhnout | (1) panākt (2) gūt (3) sasniegt | — | — |
| cs-004491 | spöttisch | Zubatý | (1) izsmejošs (2) zobgalīgs | — | — |
| cs-004249 | der Rennfahrer | Závodní jezdec | (1) sacīkšu braucējs | — | — |
| cs-003378 | das Sittlichkeitsdelikt | Porušení morálních norem | (1) tikumības normu pārkāpums | — | — |
| cs-005008 | das Holzbrett | Strach z výšek | (1) koka dēlis | — | — |
| cs-005001 | der Apfel | Jablko | (1) ābols | — | — |
| cs-001182 | die Laienkunst | Umělecká zájmová činnost | (1) mākslinieciskā pašdarbība | — | — |
| cs-000286 | das Gespenst | Duch | (1) spoks | — | — |
| cs-000064 | der Wechsel | Posun | (1) maiņa | Der Wechsel der Jahreszeiten ist schön. | gadalaiku maiņa ir skaista. |
| cs-000126 | austreten | Vystěhovat | (1) izstāties (2) izmīt (3) nomīt | — | — |
| cs-002391 | veranlassen | Povzbudit | (1) mudināt (2) izraisīt (3) ierosināt | — | — |
| cs-000356 | der Bergführer | Horský průvodce | (1) pavadonis kalnos | — | — |
| cs-000479 | die Unterlage | Trvalý | (1) paliktnis (2) balsts (3) dati (4) dokumentācija (5) paliekamais (6) paklājs | — | — |
| cs-002892 | der Aufmarsch | Demonstrace | (1) gājiens (2) demonstrācija | — | — |
| cs-001415 | gelegen | Šikovný | (1) parocīgs (2) nomaļš (3) ērts (4) izdevīgs | — | — |
| cs-002843 | die Täfelung | Stěnový panel | (1) sienas panelis (2) apšuvums | — | — |
| cs-001320 | früh | Brzy | (1) agrs | — | — |
| cs-000267 | die Generalreparatur | Generální oprava | (1) kapitālremonts | — | — |
| cs-001347 | die Betriebskosten | Výrobní náklady | (1) ražošanas izdevumi (2) uzņēmuma ekspluatācijas izdevumi | — | — |
| cs-000224 | das Empfehlungsschreiben | Doporučující dopis | (1) rakstisks ieteikums | — | — |
| cs-000276 | jung | Mladý (o věku) | (1) jauns (par cilvēkiem) | Sie ist noch jung. | viņa ir vēl jauna. |
| cs-003044 | zusammenlegen | Složit [dohromady] | (1) likt (2) salikt [kopā] | — | — |
| cs-001668 | einförmig | Jednotný | (1) vienmuļš (2) vienveidīgs | — | — |
| cs-001076 | angegriffen | Napadený | (1) uzbrukts (2) noguris | — | — |
| cs-003375 | sich entschließen | Rozhodnout se | (1) nolemties | — | — |
| cs-004207 | rege | Pohybující se | (1) kustīgs (2) darbīgs (3) dzīvs (4) rosīgs | — | — |
| cs-000830 | der Fasching | Karneval | (1) karnevāls | — | — |
| cs-002865 | beschwören | Přísahat | (1) ļoti lūgt (2) zvērēt (3) apliecināt ar zvērestu | — | — |
| cs-000801 | verabschieden | Rozloučit se | (1) aizlaist pensijā (2) atbrīvot no darba | — | — |
| cs-003695 | die Briefbombe | Dopisní bomba | (1) vēstuļbumba | — | — |
| cs-000061 | wider | Vs | (1) pret | — | — |
| cs-002087 | das Bergwerk | Šachta | (1) šahta (2) raktuves | — | — |
| cs-000752 | die Liebesbeziehung | Milostný vztah | (1) intīmas attiecības | — | — |
| cs-001517 | die Einbildung | Představivost | (1) fantāzija (2) iedomība (3) uzpūtība (4) iedoma (5) iztēle | — | — |
| cs-000282 | der Hirntumor | Mozkový nádor | (1) smadzeņu audzējs | — | — |
| cs-004454 | das Originalgemälde | Originální malba | (1) oriģinālglezna | — | — |
| cs-003912 | dessen ungeachtet | Navzdory tomu | (1) neskatoties uz to (2) neievērojot to | — | — |
| cs-004391 | angehören | Patřit k | (1) piederēt pie | — | — |
| cs-000947 | der Bodensatz | Spodina | (1) mieles (2) nogulsnes (3) padibenes | — | — |
| cs-004155 | der Korken | Korek | (1) korķis | — | — |
| cs-003809 | die Stripperin | Striptýzová tanečnice | (1) striptīza dejotāja | — | — |
| cs-003078 | die Bauchhöhle | Břišní dutina | (1) vēderdobums | — | — |
| cs-000707 | der Totalschaden | Poškození vozidla, které nelze po nehodě opravit | (1) transporta līdzekļa bojājumi, kas pēc avārijas vairs nav labojami | — | — |
| cs-002226 | beglückwünschen | Blahopřát | (1) apsveikt (2) novēlēt laimes | — | — |
| cs-002753 | festgesetzt | Zadržený | (1) nolikts (2) noteikts (3) nosacīts | — | — |
| cs-001762 | hineingehen | Jít dovnitř | (1) ieiet iekšā | — | — |
| cs-000930 | der Rückgang | Úpadek | (1) samazināšanās (2) panīkums (3) atpakaļiešana | — | — |
