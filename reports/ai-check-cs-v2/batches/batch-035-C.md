HOW-TO: šo versiju C saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-035.csv (versija B).
Gemini -> ai-gemini/batch-035.csv (versija C).
ChatGPT -> ai-chatgpt/batch-035.csv (versija A).
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
| cs-000608 | das Gefrierfach | Mrazicí přihrádka | (1) saldētava | — | — |
| cs-000856 | verreisen | Odjet | (1) aizceļot | — | — |
| cs-002284 | unterwerfen | Podřídit | (1) pakļaut | — | — |
| cs-003358 | der Wasserspiegel | Vodní plocha | (1) ūdens līmenis (2) ūdens virsma | — | — |
| cs-002781 | holpern | Třást se | (1) raustīties (2) kratīties | — | — |
| cs-000270 | das Dörrgemüse | Sušená zelenina | (1) kaltēti dārzeņi | — | — |
| cs-000256 | die Stellung | Stav | (1) stāvoklis | Die Stellung des Körpers ist wichtig. | ķermeņa stāvoklis ir svarīgs. |
| cs-002811 | die Götzenverehrung | Modlářství | (1) elku pielūgšana | — | — |
| cs-005414 | smart | Úřední | (1) gudrs (2) viltīgs | — | — |
| cs-001328 | der Radiobastler | Radioamatér | (1) radioamatieris | — | — |
| cs-005405 | der Sohn | Syn | (1) dēls | — | — |
| cs-001558 | einhüllen | Zavinout | (1) ievīstīt (2) ietīt (3) satīt | — | — |
| cs-003363 | der Stöckelschuh | Bota na vysokém podpatku | (1) augstpapēžu kurpe | — | — |
| cs-003209 | der Eilbote | Rychlý posel | (1) ziņnesis (2) kurjers | — | — |
| cs-005407 | der Samstag | Sobota | (1) sestdiena | — | — |
| cs-003231 | kuppeln | Připojit se | (1) savienot | Die Maschine kuppelt die Wagen zusammen. | mašīna sakabina vagonus kopā. |
| cs-004736 | das Delikt | Porušení zákona | (1) noziegums (2) likuma pārkāpums | — | — |
| cs-002769 | der Niedergang | Západ | (1) pagrimšana (2) riets (3) pagrimums | — | — |
| cs-001456 | das Schaffen | Práce | (1) darbs (2) darbība (3) radīšana (4) jaunrade (5) daiļrade | — | — |
| cs-001003 | erregen | Znepokojit | (1) radīt (2) izraisīt (3) modināt (4) uztraukt (5) satraukt | — | — |
| cs-002323 | gesamt | Celkový | (1) viss | — | — |
| cs-004749 | daran | O tom | (1) par to | Ich denke daran. | es domāju par to. |
| cs-004277 | brach | Neobdělávaný | (1) neapstrādāts (2) atstāts atmatā | — | — |
| cs-003285 | die Einigkeit | Shoda | (1) vienprātība (2) vienība (3) vienotība | — | — |
| cs-005410 | die Wasserleitung | Vodolečebný ústav | (1) ūdensvads | — | — |
| cs-004653 | beschließen | Rozhodnout | (1) nolemt | Wir haben beschlossen, umzuziehen. | mēs nolēmām pārvākties. |
| cs-000879 | herabsetzen | Znevažovat | (1) noniecināt (2) pazemināt | — | — |
| cs-004545 | die Vergünstigung | Úleva | (1) atvieglojums (2) priekšrocība (3) privilēģija | — | — |
| cs-000341 | meistens | Obvykle | (1) parasti | — | — |
| cs-000414 | alltäglich | Každodenní | (1) ikdienas | — | — |
| cs-003618 | ehrenamtlich | Při výkonu čestné funkce | (1) bez maksas (2) goda pienākumu izpildot | — | — |
| cs-001530 | querüber | Naproti | (1) iepretī | — | — |
| cs-005412 | quatschen | Klábosit | (1) pļāpāt | — | — |
| cs-003254 | das Ansuchen | Žádost | (1) lūgums | — | — |
| cs-003995 | abschieben | Vyhostit | (1) aizstumt (2) izraidīt | — | — |
| cs-001331 | sich unterwerfen | Podrobit se | (1) pakļauties | — | — |
| cs-000741 | sich beleben | Ožít | (1) atdzīvoties | — | — |
| cs-003009 | das Schild | Vývěsní štít | (1) etiķete uz pudelēm (2) burtnīcām u. tml (3) izkārtne (4) plāksnīte | — | — |
| cs-002043 | nimmermehr | Už nikdy | (1) nekad vairs | — | — |
| cs-001766 | das Geschehnis | Událost | (1) atgadījums (2) notikums (3) gadījums | — | — |
| cs-002408 | der Harsch | Síra | (1) apledojis sniegs (2) sērsna | — | — |
| cs-003702 | so viel | Tolik | (1) tik daudz (2) cik | — | — |
| cs-000262 | scharf | Pikantní | (1) pikants (2) ass | Das Messer ist scharf. | nazis ir ass. |
| cs-002939 | einwandfrei | Dokonalý | (1) nevainojams | — | — |
| cs-005411 | anlehnen | Odmítnout | (1) piesliet | — | — |
| cs-002165 | die Meldefrist | Uzávěrka přihlášek | (1) pieteikšanās termiņš | — | — |
| cs-003369 | die Drucksache | Tiskovina jako poštovní zásilka | (1) bandrole (2) iespieddarbs pasta sūtījumos | — | — |
| cs-005413 | das Belieben | Obránce | (1) vēlēšanās (2) patika (3) patikšana | — | — |
| cs-003366 | die Benennung | Označení | (1) nosaukums (2) nosaukšana (3) dēvēšana | — | — |
| cs-001827 | erstarren | Zamrznout | (1) sastingt | — | — |
| cs-001478 | die Wäscheschleuder | Odstředivka na prádlo | (1) veļas centrifūga | — | — |
| cs-001401 | die Langeweile | Nuda | (1) garlaicība | — | — |
| cs-000116 | der Linksextremismus | Levicový extremismus | (1) kreisais ekstrēmisms | — | — |
| cs-003153 | flüchtig | Povrchní | (1) acumirklīgs (2) ātri pārejošs (3) īslaicīgs (4) gaistošs (5) paviršs | — | — |
| cs-001310 | wiedergeben | Vrátit | (1) atveidot (2) atdot (3) reproducēt | — | — |
| cs-001179 | zureden | Přesvědčit | (1) pierunāt | — | — |
| cs-005403 | das Sofa | Pohovka | (1) dīvāns | — | — |
| cs-002356 | die Pfote | Tlapka | (1) ķepa | — | — |
| cs-002891 | der Bauer | Farmář | (1) zemnieks | Der Bauer arbeitet auf dem Feld. | zemnieks strādā uz lauka. |
| cs-002555 | der Buchweizen | Pohanka | (1) griķi | — | — |
| cs-000244 | sich entfalten | Rozvinout se | (1) attīstīties (2) izvērsties (3) atvērties (4) atraisīties | — | — |
| cs-001222 | geradebiegen | Narovnat | (1) izlabot (2) iztaisnot | — | — |
| cs-000786 | einfrieren | Zamrazit | (1) pārtraukt (2) sasaldēt (3) iesaldēt | — | — |
| cs-002812 | der Organempfänger | Příjemce transplantovaného orgánu | (1) transplantācijas orgāna saņēmējs | — | — |
| cs-001373 | die Satellitenübertragung | Satelitní přenos | (1) satelīttelevīzijas pārraide | — | — |
| cs-000962 | die Sachkenntnis | Způsobilost | (1) kompetence (2) lietpratība | — | — |
| cs-002429 | der Kauf | Nákup | (1) pirkums | — | — |
| cs-004100 | die Anmut | Přitažlivost | (1) grācija (2) pievilcība (3) daiļums | — | — |
| cs-002121 | die Kabinettsitzung | Zasedání kabinetu | (1) kabineta sēde | — | — |
| cs-000253 | beklagen | Oplakávat | (1) apraudāt (2) žēloties (3) sūdzēties (4) nožēlot (5) skumt | — | — |
| cs-002302 | beanspruchen | Být zatížen | (1) būt noslogotam (2) prasīt (3) pretendēt | — | — |
| cs-000666 | die Hupe | Roh | (1) taure (2) signāltaure | Er hupt laut. | viņš skaļi signalizē ar tauri. |
| cs-004103 | herb | Kyselý | (1) skābs (2) rūgtens (3) sūrs | — | — |
| cs-003580 | das Mieder | Korzetový pás | (1) stīvdrēbes josta (2) ņieburs | — | — |
| cs-004611 | die Geflügelzucht | Chov drůbeže | (1) putnkopība | — | — |
| cs-003110 | entzünden | Rozsvítit | (1) iedegt (2) aizdedzināt (3) iededzināt | — | — |
| cs-003034 | trampen | Stopovat | (1) ceļot ar autostopu | — | — |
| cs-002313 | bewerben, sich | Usilovat o | (1) censties (2) tiekties (3) pretendēt (4) kandidēt | — | — |
| cs-004062 | arbeitslos | Bez práce | (1) bez darba | — | — |
| cs-003084 | der Empfangschef | Vedoucí recepce | (1) administrators viesnīcā | — | — |
| cs-001683 | der Geldumlauf | Peněžní oběh | (1) naudas apgrozījums | — | — |
| cs-001021 | das Web | Internet | (1) internets | — | — |
| cs-005409 | der Neuerer | Novinka | (1) novators | — | — |
| cs-000289 | observieren | Pozorovat | (1) novērot (2) izsekot | — | — |
| cs-005408 | die Sonne | Slunce | (1) saule | — | — |
| cs-001498 | das Umfeld | Politické prostředí | (1) politiskā (2) vide sociālā | — | — |
| cs-001751 | sich betragen | Vystupovat | (1) izturēties (2) uzvesties | — | — |
| cs-005404 | sofort | Ihned | (1) tūlīt | — | — |
| cs-003193 | insbesondere | Zejména | (1) īpaši | — | — |
| cs-004082 | das Hundegebell | Štěkot psa | (1) suņa rejas | — | — |
| cs-002845 | die Blumenzucht | Pěstování květin | (1) puķkopība | — | — |
| cs-000529 | die Familienbeihilfe | Rodinný přídavek | (1) ģimenes pabalsts | — | — |
| cs-005406 | der Sommer | Léto | (1) vasara | — | — |
| cs-000458 | der Schwangerschaftsabbruch | Ukončení těhotenství | (1) grūtniecības pārtraukšana | — | — |
| cs-004682 | sich scheiden | Rozvést se | (1) šķirties | — | — |
| cs-000911 | fraglich | Diskutabilní | (1) apstrīdams (2) apšaubāms | — | — |
| cs-003114 | die Überlegung | Přemýšlení | (1) apdoms (2) pārdomāšana (3) apsvēršana | — | — |
| cs-001964 | vorsagen | Napovídat | (1) teikt priekšā | — | — |
| cs-004620 | unmissverständlich | Jednoznačný | (1) nepārprotams | — | — |
| cs-000952 | die Auffassungsgabe | Schopnost chápání | (1) uztveres spēja | — | — |
