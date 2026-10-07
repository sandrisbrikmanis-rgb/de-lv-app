HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-044.csv (versija B).
Gemini -> ai-gemini/batch-044.csv (versija C).
ChatGPT -> ai-chatgpt/batch-044.csv (versija A).
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
| cs-000690 | flimmern | Zableskovat se | (1) vizuļot (2) zvīļot (3) ņirbēt (4) mirgot (5) vizēt | — | — |
| cs-005514 | die Aktivität | Aktivita | (1) aktivitāte | — | — |
| cs-005522 | das Brandmal | Vzdušný pirát | (1) apdegums (2) apdeguma rēta | — | — |
| cs-003836 | die Flinte | [lov] brokovnice | (1) [medību] bise | — | — |
| cs-005516 | allgemein | Obecný | (1) vispārīgs | — | — |
| cs-000398 | die Bootspartie | Výlet lodí | (1) izbraukums ar laivu | — | — |
| cs-002581 | zuschneiden | Přikrojit | (1) piegriezt | — | — |
| cs-005517 | der Aufschluss | Zavírání | (1) izskaidrojums (2) informācija | — | — |
| cs-004242 | zugrunde, zu Grunde | V podstatě | (1) pamatā | — | — |
| cs-004492 | der Teilnehmerausweis | Průkaz účastníka | (1) dalībnieka apliecība | — | — |
| cs-003505 | sich bücken | Sehnout se | (1) pieliekties | — | — |
| cs-005515 | der Alkohol | Alkohol | (1) alkohols | — | — |
| cs-002410 | das Nesselfieber | Kopřivka | (1) nātrene | — | — |
| cs-004612 | nächstens | Brzy | (1) drīzumā | — | — |
| cs-001462 | militärpflichtig | Podléhající vojenské službě | (1) karaklausībai padots | — | — |
| cs-002717 | delikat | Lahodný | (1) gards (2) delikāts | — | — |
| cs-000008 | die Karrierefrau | Kariérní žena | (1) sieviete, kas taisa karjeru | — | — |
| cs-003640 | wachen | Být vzhůru | (1) būt nomodā | Ich wache die ganze Nacht. | es esmu nomodā visu nakti. |
| cs-005520 | die Entziehungskur | Relaxace | (1) ārstniecības kurss alkoholiķiem vai narkomāniem | — | — |
| cs-001087 | der Extremismus | Extremismus | (1) ekstrēmisms | — | — |
| cs-005519 | misslingen | Uspět | (1) neizdoties | — | — |
| cs-003676 | die Bindung | Řemeny | (1) ķīmisks savienojums (2) saite (3) siksnas (4) emocionālā saikne (5) saistījums (6) savienojums | — | — |
| cs-001851 | die Belastbarkeit | Odolnost proti zátěži | (1) izturība pret slodzi (2) stresa noturība | — | — |
| cs-002411 | der Abgeordnete | Delegát | (1) delegāts (2) deputāts (3) pārstāvis | — | — |
| cs-003810 | prämieren | Ocenit | (1) prēmēt | — | — |
| cs-003576 | hetzen | Bít | (1) vajāt (2) trenkāt (3) rīdīt (4) kūdīt | — | — |
| cs-005518 | abstellen | Reprezentovat | (1) atslēgt (2) nolikt (3) novietot | Ich stelle das Fahrrad ab. | es novietoju velosipēdu. |
| cs-000684 | freundlich | Přátelský | (1) laipns | — | — |
| cs-000711 | der Ersatzspieler | Záložní hráč | (1) rezerves spēlētājs (2) rezervists | — | — |
| cs-001244 | die Muttersprache | Rodný jazyk | (1) dzimtā valoda | — | — |
| cs-004173 | lahm legen | Paralyzovat | (1) paralizēt | — | — |
| cs-002418 | unterweisen | Ukázat | (1) pamācīt (2) ierādīt | — | — |
| cs-004232 | die Volksabstimmung | Plebiscit | (1) tautas nobalsošana (2) plebiscīts | — | — |
| cs-003938 | die Stellungnahme | Vyjádření názoru | (1) oficiāls paziņojums (2) viedokļa paušana | — | — |
| cs-003064 | der Gesandte | Posel | (1) sūtnis | — | — |
| cs-003420 | sich verzögern | Zpozdit se | (1) novilcināties (2) aizkavēties | — | — |
| cs-000389 | schmerzlich | Smutný | (1) bēdīgs (2) sāpīgs | — | — |
| cs-000339 | entfalten | Rozložit | (1) attīstīt (2) izvērst (3) attīt (4) atlocīt | — | — |
| cs-000298 | die Klappe | Ventil | (1) vārsts (2) vārstulis | — | — |
| cs-004614 | jeher | Odjakživa | (1) no seniem laikiem | — | — |
| cs-005511 | der Acker | Pole | (1) lauks | — | — |
| cs-000376 | erleiden | Utrpět porážku | (1) pārciest (2) tikt sakautam (3) ciest (4) izciest | — | — |
| cs-000543 | befolgen | Dodržovat | (1) ievērot | — | — |
| cs-000698 | die Automarke | Značka auta | (1) automašīnas marka | — | — |
| cs-000242 | spaßen | Vtipkovat | (1) jokot[ies] | — | — |
| cs-000318 | bestechen | Uplácet | (1) piekukuļot | — | — |
| cs-001344 | dazwischenkommen | Zasáhnout | (1) iejaukties (2) atgadīties (3) gadīties starpā | — | — |
| cs-004461 | der Henkel | Rukojeť | (1) rokturis | — | — |
| cs-000622 | die Polizeistreife | Policejní hlídka | (1) policijas patruļa | — | — |
| cs-001801 | sich verlaufen | Ztratit se | (1) apmaldīties | — | — |
| cs-000281 | der Kleingarten | Zahrádka | (1) mazdārziņš | — | — |
| cs-003730 | der Seuchenherd | Zdroj epidemie | (1) epidēmijas avots | — | — |
| cs-004120 | die Stirnglatze | Odkryté čelo | (1) atsegta piere | — | — |
| cs-005513 | ähnlich | Podobný | (1) līdzīgs | — | — |
| cs-004551 | einkleiden | Obléci | (1) ieģērbt (2) ietērpt | — | — |
| cs-001452 | das Einstandsgeld | Vstupní poplatek | (1) iestāšanās nauda | — | — |
| cs-003632 | der Pater | Příslušník řádu | (1) katoļu priesteris (2) piederīgs kādam ordenim | — | — |
| cs-001221 | der Chaot | Nepořádný člověk | (1) juceklīgs cilvēks | — | — |
| cs-004263 | das Nachschlagewerk | Referenční literatura | (1) enciklopēdija (2) uzziņu literatūra (3) vārdnīca | — | — |
| cs-005521 | blödsinnig | Duševně slabý | (1) muļķīgs (2) stulbs (3) vājprātīgs (4) plānprātīgs | — | — |
| cs-001879 | die Hausangestellte | Hospodyně | (1) mājkalpotāja | — | — |
| cs-003974 | der Werktätige | Zaměstnanec | (1) strādājošais | — | — |
| cs-003443 | trübe | Zakalený | (1) duļķains | — | — |
| cs-004526 | die Schminke | Make-up | (1) grims | — | — |
| cs-003906 | die Entspannung | Snížení napětí | (1) saspīlējuma mazināšanās (2) atslābums (3) atslābšana | — | — |
| cs-003712 | eindeutig | Nezaměnitelný | (1) nepārprotams | Die Antwort ist eindeutig. | atbilde ir nepārprotama. |
| cs-004383 | rauben | Oloupit | (1) nolaupīt | — | — |
| cs-003867 | der Bekannte | Známý | (1) paziņa | — | — |
| cs-003189 | anderweitig | Jinde | (1) citādi (2) citur | — | — |
| cs-003392 | gewieft | Vychytralý | (1) izmanīgs (2) rūdīts | — | — |
| cs-001615 | anfeuern | Povzbuzovat | (1) uzmundrināt | — | — |
| cs-004274 | das Zwielicht | Soumrak | (1) krēsla | — | — |
| cs-000133 | der Parkplatz | Parkovací místo | (1) stāvvieta | — | — |
| cs-002702 | denken | Přemýšlet | (1) domāt | — | — |
| cs-001569 | das Kapitel | Kapitola knihy | (1) grāmatas nodaļa | — | — |
| cs-000689 | erwägen | Zvážit | (1) apsvērt | — | — |
| cs-000194 | instand | V pořádku | (1) kārtībā | — | — |
| cs-000421 | die Ehrenwache | Čestná stráž | (1) godasardze | — | — |
| cs-001273 | erlöschen | Zhasnout | (1) nebūt vairs spēkā (2) izbeigties (3) izdzist (4) nodzist | — | — |
| cs-002889 | verabreden | Domluvit | (1) norunāt | — | — |
| cs-001859 | sich verabreden | Domluvit si schůzku | (1) sarunāt tikšanos | — | — |
| cs-004559 | gleichberechtigt | Se stejnými právy | (1) līdztiesīgs (2) ar vienādām tiesībām | — | — |
| cs-005512 | der Adler | Orel | (1) ērglis | — | — |
| cs-000066 | das Bankgeheimnis | Bankovní tajemství | (1) bankas noslēpums | — | — |
| cs-001487 | der Machtantritt | Nástup k moci | (1) stāšanās pie varas | — | — |
| cs-002280 | die Geldspende | Dar | (1) ziedojums | — | — |
| cs-004487 | verspielen | Promarnit | (1) paspēlēt (2) pazaudēt | — | — |
| cs-004593 | herum | Kolem | (1) apkārt | — | — |
| cs-000530 | das Schwimmbad | Bazén | (1) peldbaseins | — | — |
| cs-002545 | der Regelverstoß | Porušení pravidel | (1) noteikumu pārkāpums | — | — |
| cs-003785 | die Ölgewinnung | Těžba ropy | (1) naftas ieguve | — | — |
| cs-002743 | die Leine | Vodítko | (1) pavada | — | — |
| cs-000192 | das Geratewohl | Nazdařbůh | (1) laba laime | — | — |
| cs-003958 | sich entgegensetzen | Postavit se proti | (1) pretoties | — | — |
| cs-001447 | prägen | Formovat | (1) uzspiest (2) veidot (3) darināt (4) kalt naudu (5) iespiest | — | — |
| cs-001141 | das Gerippe | Kostra konstrukce | (1) karkass (2) skelets (3) ģindenis | — | — |
| cs-001847 | der Eifer | Píle | (1) aizrautība (2) degsme (3) dedzība (4) centība (5) cītība | — | — |
| cs-003041 | auffallen | Upoutat pozornost | (1) iekrist acīs | — | — |
| cs-000294 | abgespannt | Vyčerpaný | (1) pārguris (2) noguris | — | — |
| cs-004146 | berufen | Jmenovat | (1) iecelt (2) aicināt | — | — |
