HOW-TO: šo versiju A saņem ChatGPT.
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
| cs-001468 | die Bewaffnung | Výzbroj | (1) apbruņošana (2) apbruņojums | — | — |
| cs-005048 | der Bauch | Břicho | (1) vēders | — | — |
| cs-001129 | die Fassung | Rámec | (1) apvalums (2) formulējums (3) ietvars | — | — |
| cs-002469 | ändern | Opravit | (1) mainīt (2) labot | Ich ändere den Termin. | Es mainu termiņu. |
| cs-003839 | behindern | Bránit | (1) traucēt | — | — |
| cs-003942 | umkleiden | Převléknout se | (1) pārģērbt | — | — |
| cs-002396 | der Rudersport | Veslařský sport | (1) airēšanas sports | — | — |
| cs-000146 | der Zwirn | Skací příze | (1) diegs | — | — |
| cs-001552 | der Personenzug | Osobní vlak | (1) pasažieru vilciens | — | — |
| cs-002195 | das Bettzeug | Ložní prádlo | (1) gultas drēbes | — | — |
| cs-002918 | der Dunst | Zplodiny | (1) garaiņi (2) izgarojumi (3) tvans (4) migla (5) dūmaka (6) tvaiks | — | — |
| cs-003412 | der Datenspeicher | Paměti počítače | (1) datoratmiņa | — | — |
| cs-000568 | einweihen | Slavnostně otevřít | (1) svinīgi atklāt (2) uzticēt noslēpumu | — | — |
| cs-005050 | gefällig | Pohrdavý | (1) pakalpīgs (2) iztapīgs (3) laipns (4) patīkams | — | — |
| cs-002860 | stechen | Bodnout | (1) durt | — | — |
| cs-002194 | dreschen | Mlátit obilí | (1) kult labību (2) kult olas baltumu | — | — |
| cs-000417 | sich entscheiden | Rozhodnout se | (1) izšķirties | — | — |
| cs-004390 | das Krisengebiet | Krizový region | (1) krīzes reģions | — | — |
| cs-000721 | eingehend | Příchozí | (1) sīks (2) ienākošs (3) pamatīgs | — | — |
| cs-004358 | das Essen | Pokrm | (1) ēdiens (2) maltīte | Das Essen schmeckt gut. | Ēdiens garšo labi. |
| cs-000191 | der Meerbusen | Mořský záliv | (1) jūras līcis | — | — |
| cs-003479 | die Klausur | Písemný test | (1) rakstisks pārbaudījums | — | — |
| cs-004594 | sich vermehren | Rozmnožovat se | (1) vairoties | — | — |
| cs-000854 | die Beförderung | Doručení | (1) pārvadāšana (2) paaugstināšana (3) paaugstinājums (4) nogādāšana | — | — |
| cs-005046 | der Ball | Míč | (1) bumba | — | — |
| cs-004096 | bestreiten | Krýt | (1) samaksāt (2) segt (3) apstrīdēt | — | — |
| cs-003768 | der Feierabend | Konec pracovní doby | (1) darba laika beigas | — | — |
| cs-004405 | gleichmütig | Vyrovnaný | (1) nosvērts (2) aukstasinīgs | — | — |
| cs-004017 | die Heilquelle | Zdroj uzdravení | (1) ārstniecības avots | — | — |
| cs-001682 | fördern | Napomáhat | (1) veicināt (2) atbalstīt | Sport fördert die Gesundheit. | Sports veicina veselību. |
| cs-005044 | bald | Brzy | (1) drīz | — | — |
| cs-005047 | die Banane | Banán | (1) banāns | — | — |
| cs-001772 | bevollmächtigen | Udělit pravomoc | (1) pilnvarot (2) piešķirt pilnvaru | — | — |
| cs-005049 | anstrengend | Údajně | (1) nogurdinošs (2) saspringts | Der Job ist anstrengend. | Darbs ir nogurdinošs. |
| cs-001317 | die Genmutation | Genová mutace | (1) gēnu mutācija | — | — |
| cs-001492 | regungslos | Bez hnutí | (1) nekustīgs | — | — |
| cs-002069 | expandieren | Rychle růst | (1) strauji augt (2) izplesties | — | — |
| cs-000587 | die Nebenbeschäftigung | Vedlejší práce | (1) blakus darbs | — | — |
| cs-002795 | verbessern | Zlepšit | (1) uzlabot (2) izlabot | — | — |
| cs-003888 | sich entsinnen | Rozpomenout se | (1) atminēties (2) atcerēties | — | — |
| cs-002673 | der Berichterstatter | Korespondent | (1) ziņotājs (2) korespondents (3) reportieris (4) referents | — | — |
| cs-002173 | verehren | Vážit si | (1) cienīt (2) sar. [uz]dāvināt (3) godāt | — | — |
| cs-004527 | zutrauen | Očekávat | (1) gaidīt (2) domāt spējīgu | — | — |
| cs-002262 | die Bundeswehr | Německé ozbrojené síly | (1) Vācijas bruņotie spēki | — | — |
| cs-005045 | der Balkon | Balkón | (1) balkons | — | — |
| cs-005052 | die Entspannung | Léčebný kurz pro alkoholiky nebo drogově závislé | (1) atslābšana (2) saspīlējuma mazināšanās (3) atslābums | — | — |
| cs-003781 | der Speisewagen | Restaurační vůz | (1) restorānvagons | — | — |
| cs-004260 | angeordnet | Stanovený | (1) noteikts (2) pavēlēts | — | — |
| cs-001170 | der Glücksbringer | Talisman | (1) talismans | — | — |
| cs-001105 | nichtig | Zrušený | (1) anulēts (2) niecīgs (3) nenozīmīgs (4) nederīgs | — | — |
| cs-003421 | der Krankheitserreger | Původce onemocnění | (1) slimības ierosinātājs | — | — |
| cs-000149 | das Herzversagen | Nedostatečnost | (1) sirds apstāšanās (2) nepietiekamība | — | — |
| cs-003516 | weh | Bolavý | (1) sāpīgs | — | — |
| cs-002832 | die Mahd | Senoseč | (1) pļauja | — | — |
| cs-003177 | fahl | Matný | (1) blāvs (2) bāls | — | — |
| cs-000614 | der Schiffbruch | Ztroskotání lodi | (1) kuģa bojāeja katastrofa | — | — |
| cs-004547 | die Stärke | Pevnost | (1) stiprums | — | — |
| cs-003998 | verwandeln | Transformovat | (1) pārveidot | — | — |
| cs-003306 | aufladen | Nabít | (1) uzlādēt | — | — |
| cs-003478 | runzeln | Mračit se | (1) savilkt grumbās (2) saraukt pieri | — | — |
| cs-004524 | gerinnen | Ztuhnout | (1) saiet (2) sakupt (3) sastingt (4) sasalt (5) sarecēt | — | — |
| cs-003574 | entstehen | Dojít | (1) rasties | Hier entsteht ein neues Gebäude. | šeit top jauna ēka. |
| cs-003435 | das Gestein | Skála | (1) iezis | — | — |
| cs-000824 | schwindeln | Podvádět | (1) reibt | — | — |
| cs-001526 | der Funktionär | Zaměstnanec | (1) aktīvists (2) darbinieks | — | — |
| cs-004080 | spötteln | Posmívat se | (1) ironizēt | — | — |
| cs-001543 | ablösen | Nahradit | (1) nomainīt | — | — |
| cs-004314 | die Unterschätzung | Podceňování | (1) nepietiekams novērtējums (2) novērtēšana par zemu | — | — |
| cs-003673 | dringen | Vniknout | (1) lauzties (2) iespiesties (3) ielauzties (4) prasīt (5) pieprasīt (6) spiesties | — | — |
| cs-000228 | abfällig | Znevažující | (1) negatīvs (2) slikts (3) noraidošs (4) nelabvēlīgs | — | — |
| cs-004645 | das Parteibuch | Karta člena strany | (1) partijas biedra karte | — | — |
| cs-000487 | lauern | Číhat | (1) uzglūnēt | — | — |
| cs-000305 | der Hochzeitsbrauch | Svatební zvyk | (1) kāzu paraža | — | — |
| cs-002758 | die Einstandsgebühr | Vstupní poplatek | (1) iestāšanās maksa | — | — |
| cs-004170 | die Probe | Inspekce | (1) pārbaude | Die Probe war erfolgreich. | pārbaude bija veiksmīga. |
| cs-004088 | die Fessel | Řetěz | (1) ķēde (2) važas | — | — |
| cs-005053 | das Schneewittchen | Čepel | (1) pasaku tēls Sniegbaltīte | — | — |
| cs-003572 | die Schutzimpfung | Ochranné očkování | (1) aizsargpotēšana | — | — |
| cs-003991 | ausweisen | Dokázat | (1) izsūtīt (2) apstiprināt (3) pierādīt (4) izraidīt | — | — |
| cs-005043 | das Bad | Koupelna | (1) vannas istaba | — | — |
| cs-004194 | donnern | Rachot | (1) rībēt (2) dārdēt (3) pērkons rūc | — | — |
| cs-004192 | das Stahlwerk | Slévárna oceli | (1) tēraudlietuve | — | — |
| cs-002297 | offen | OTEVŘENO | (1) atvērts | Die Tür ist offen. | durvis ir vaļā. |
| cs-004176 | fleckig | Kropenatý | (1) notraipīts (2) plankumains (3) lāsains (4) raibs (5) traipains | — | — |
| cs-001723 | verfügen | Přiřadit | (1) pavēlēt (2) norīkot (3) noteikt | — | — |
| cs-000878 | dieser | Tenhle | (1) šis | Dieser Mann ist nett. | šis vīrietis ir jauks. |
| cs-001791 | leichtgläubig | Naivní | (1) lētticīgs | — | — |
| cs-004517 | der Betrieb | Společnost | (1) uzņēmums | Der Betrieb hat 50 Mitarbeiter. | uzņēmumā ir 50 darbinieku. |
| cs-003354 | miteinander | Jeden s druhým | (1) cits ar citu | — | — |
| cs-001096 | der Akt | Dokument | (1) akts (2) dokuments | — | — |
