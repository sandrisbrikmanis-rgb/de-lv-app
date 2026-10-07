HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-005.csv (versija B).
Gemini -> ai-gemini/batch-005.csv (versija C).
ChatGPT -> ai-chatgpt/batch-005.csv (versija A).
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
| cs-000726 | anheizen | Zatopit | (1) iekurt | Wir heizen den Ofen an. | mēs iekuram krāsni. |
| cs-002135 | die Wache | Hlídat | (1) sardze | Die Wache steht vor dem Eingang. | sardze stāv pie ieejas. |
| cs-003983 | die Frauenmannschaft | Ženské družstvo | (1) sieviešu komanda | — | — |
| cs-004549 | hinten | V zadní části | (1) aizmugurē | — | — |
| cs-005051 | sich abwenden | Vydat se na cestu | (1) novērsties no | — | — |
| cs-001046 | grauen | Šedivět | (1) aust | — | — |
| cs-002898 | die Linke | Levá ruka | (1) kreisā roka | — | — |
| cs-005054 | dumm | U příležitosti | (1) muļķīgs (2) dumjš | — | — |
| cs-004059 | karg | Nuzný | (1) trūcīgs | — | — |
| cs-003196 | der Treffpunkt | Místo setkání | (1) tikšanās vieta | — | — |
| cs-001468 | die Bewaffnung | Výzbroj | (1) apbruņojums (2) apbruņošana | — | — |
| cs-005048 | der Bauch | Břicho | (1) vēders | — | — |
| cs-001129 | die Fassung | Rámec | (1) formulējums (2) ietvars (3) apvalums | — | — |
| cs-002469 | ändern | Opravit | (1) labot (2) mainīt | Ich ändere den Termin. | Es mainu termiņu. |
| cs-003839 | behindern | Bránit | (1) traucēt | — | — |
| cs-003942 | umkleiden | Převléknout se | (1) pārģērbt | — | — |
| cs-002396 | der Rudersport | Veslařský sport | (1) airēšanas sports | — | — |
| cs-000146 | der Zwirn | Skací příze | (1) diegs | — | — |
| cs-001552 | der Personenzug | Osobní vlak | (1) pasažieru vilciens | — | — |
| cs-002195 | das Bettzeug | Ložní prádlo | (1) gultas drēbes | — | — |
| cs-002918 | der Dunst | Zplodiny | (1) izgarojumi (2) tvans (3) migla (4) dūmaka (5) tvaiks (6) garaiņi | — | — |
| cs-003412 | der Datenspeicher | Paměti počítače | (1) datoratmiņa | — | — |
| cs-000568 | einweihen | Slavnostně otevřít | (1) uzticēt noslēpumu (2) svinīgi atklāt | — | — |
| cs-005050 | gefällig | Pohrdavý | (1) iztapīgs (2) laipns (3) patīkams (4) pakalpīgs | — | — |
| cs-002860 | stechen | Bodnout | (1) durt | — | — |
| cs-002194 | dreschen | Mlátit obilí | (1) kult olas baltumu (2) kult labību | — | — |
| cs-000417 | sich entscheiden | Rozhodnout se | (1) izšķirties | — | — |
| cs-004390 | das Krisengebiet | Krizový region | (1) krīzes reģions | — | — |
| cs-000721 | eingehend | Příchozí | (1) ienākošs (2) pamatīgs (3) sīks | — | — |
| cs-004358 | das Essen | Pokrm | (1) ēdiens (2) maltīte | Das Essen schmeckt gut. | Ēdiens garšo labi. |
| cs-000191 | der Meerbusen | Mořský záliv | (1) jūras līcis | — | — |
| cs-003479 | die Klausur | Písemný test | (1) rakstisks pārbaudījums | — | — |
| cs-004594 | sich vermehren | Rozmnožovat se | (1) vairoties | — | — |
| cs-000854 | die Beförderung | Doručení | (1) paaugstināšana (2) paaugstinājums (3) nogādāšana (4) pārvadāšana | — | — |
| cs-005046 | der Ball | Míč | (1) bumba | — | — |
| cs-004096 | bestreiten | Krýt | (1) segt (2) apstrīdēt (3) samaksāt | — | — |
| cs-003768 | der Feierabend | Konec pracovní doby | (1) darba laika beigas | — | — |
| cs-004405 | gleichmütig | Vyrovnaný | (1) nosvērts (2) aukstasinīgs | — | — |
| cs-004017 | die Heilquelle | Zdroj uzdravení | (1) ārstniecības avots | — | — |
| cs-001682 | fördern | Napomáhat | (1) atbalstīt (2) veicināt | Sport fördert die Gesundheit. | Sports veicina veselību. |
| cs-005044 | bald | Brzy | (1) drīz | — | — |
| cs-005047 | die Banane | Banán | (1) banāns | — | — |
| cs-001772 | bevollmächtigen | Udělit pravomoc | (1) piešķirt pilnvaru (2) pilnvarot | — | — |
| cs-005049 | anstrengend | Údajně | (1) nogurdinošs (2) saspringts | Der Job ist anstrengend. | Darbs ir nogurdinošs. |
| cs-001317 | die Genmutation | Genová mutace | (1) gēnu mutācija | — | — |
| cs-001492 | regungslos | Bez hnutí | (1) nekustīgs | — | — |
| cs-002069 | expandieren | Rychle růst | (1) izplesties (2) strauji augt | — | — |
| cs-000587 | die Nebenbeschäftigung | Vedlejší práce | (1) blakus darbs | — | — |
| cs-002795 | verbessern | Zlepšit | (1) izlabot (2) uzlabot | — | — |
| cs-003888 | sich entsinnen | Rozpomenout se | (1) atminēties (2) atcerēties | — | — |
| cs-002673 | der Berichterstatter | Korespondent | (1) korespondents (2) reportieris (3) referents (4) ziņotājs | — | — |
| cs-002173 | verehren | Vážit si | (1) sar. [uz]dāvināt (2) godāt (3) cienīt | — | — |
| cs-004527 | zutrauen | Očekávat | (1) gaidīt (2) domāt spējīgu | — | — |
| cs-002262 | die Bundeswehr | Německé ozbrojené síly | (1) Vācijas bruņotie spēki | — | — |
| cs-005045 | der Balkon | Balkón | (1) balkons | — | — |
| cs-005052 | die Entspannung | Léčebný kurz pro alkoholiky nebo drogově závislé | (1) saspīlējuma mazināšanās (2) atslābums (3) atslābšana | — | — |
| cs-003781 | der Speisewagen | Restaurační vůz | (1) restorānvagons | — | — |
| cs-004260 | angeordnet | Stanovený | (1) noteikts (2) pavēlēts | — | — |
| cs-001170 | der Glücksbringer | Talisman | (1) talismans | — | — |
| cs-001105 | nichtig | Zrušený | (1) niecīgs (2) nenozīmīgs (3) nederīgs (4) anulēts | — | — |
| cs-003421 | der Krankheitserreger | Původce onemocnění | (1) slimības ierosinātājs | — | — |
| cs-000149 | das Herzversagen | Nedostatečnost | (1) nepietiekamība (2) sirds apstāšanās | — | — |
| cs-003516 | weh | Bolavý | (1) sāpīgs | — | — |
| cs-002832 | die Mahd | Senoseč | (1) pļauja | — | — |
| cs-003177 | fahl | Matný | (1) blāvs (2) bāls | — | — |
| cs-000614 | der Schiffbruch | Ztroskotání lodi | (1) kuģa bojāeja katastrofa | — | — |
| cs-004547 | die Stärke | Pevnost | (1) stiprums | — | — |
| cs-003998 | verwandeln | Transformovat | (1) pārveidot | — | — |
| cs-003306 | aufladen | Nabít | (1) uzlādēt | — | — |
| cs-003478 | runzeln | Mračit se | (1) savilkt grumbās (2) saraukt pieri | — | — |
| cs-004524 | gerinnen | Ztuhnout | (1) sakupt (2) sastingt (3) sasalt (4) sarecēt (5) saiet | — | — |
| cs-003574 | entstehen | Dojít | (1) rasties | Hier entsteht ein neues Gebäude. | šeit top jauna ēka. |
| cs-003435 | das Gestein | Skála | (1) iezis | — | — |
| cs-000824 | schwindeln | Podvádět | (1) reibt | — | — |
| cs-001526 | der Funktionär | Zaměstnanec | (1) darbinieks (2) aktīvists | — | — |
| cs-004080 | spötteln | Posmívat se | (1) ironizēt | — | — |
| cs-001543 | ablösen | Nahradit | (1) nomainīt | — | — |
| cs-004314 | die Unterschätzung | Podceňování | (1) nepietiekams novērtējums (2) novērtēšana par zemu | — | — |
| cs-003673 | dringen | Vniknout | (1) iespiesties (2) ielauzties (3) prasīt (4) pieprasīt (5) spiesties (6) lauzties | — | — |
| cs-000228 | abfällig | Znevažující | (1) slikts (2) noraidošs (3) nelabvēlīgs (4) negatīvs | — | — |
| cs-004645 | das Parteibuch | Karta člena strany | (1) partijas biedra karte | — | — |
| cs-000487 | lauern | Číhat | (1) uzglūnēt | — | — |
| cs-000305 | der Hochzeitsbrauch | Svatební zvyk | (1) kāzu paraža | — | — |
| cs-002758 | die Einstandsgebühr | Vstupní poplatek | (1) iestāšanās maksa | — | — |
| cs-004170 | die Probe | Inspekce | (1) pārbaude | Die Probe war erfolgreich. | pārbaude bija veiksmīga. |
| cs-004088 | die Fessel | Řetěz | (1) ķēde (2) važas | — | — |
| cs-005053 | das Schneewittchen | Čepel | (1) pasaku tēls Sniegbaltīte | — | — |
| cs-003572 | die Schutzimpfung | Ochranné očkování | (1) aizsargpotēšana | — | — |
| cs-003991 | ausweisen | Dokázat | (1) apstiprināt (2) pierādīt (3) izraidīt (4) izsūtīt | — | — |
| cs-005043 | das Bad | Koupelna | (1) vannas istaba | — | — |
| cs-004194 | donnern | Rachot | (1) dārdēt (2) pērkons rūc (3) rībēt | — | — |
| cs-004192 | das Stahlwerk | Slévárna oceli | (1) tēraudlietuve | — | — |
| cs-002297 | offen | OTEVŘENO | (1) atvērts | Die Tür ist offen. | durvis ir vaļā. |
| cs-004176 | fleckig | Kropenatý | (1) plankumains (2) lāsains (3) raibs (4) traipains (5) notraipīts | — | — |
| cs-001723 | verfügen | Přiřadit | (1) norīkot (2) noteikt (3) pavēlēt | — | — |
| cs-000878 | dieser | Tenhle | (1) šis | Dieser Mann ist nett. | šis vīrietis ir jauks. |
| cs-001791 | leichtgläubig | Naivní | (1) lētticīgs | — | — |
| cs-004517 | der Betrieb | Společnost | (1) uzņēmums | Der Betrieb hat 50 Mitarbeiter. | uzņēmumā ir 50 darbinieku. |
| cs-003354 | miteinander | Jeden s druhým | (1) cits ar citu | — | — |
| cs-001096 | der Akt | Dokument | (1) dokuments (2) akts | — | — |
