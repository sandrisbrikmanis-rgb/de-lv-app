HOW-TO: šo versiju B saņem ChatGPT.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-027.csv (versija C).
Gemini -> ai-gemini/batch-027.csv (versija A).
ChatGPT -> ai-chatgpt/batch-027.csv (versija B).
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
| cs-004106 | sich hingeben | Odevzdat se | (1) nodoties (2) atdoties | — | — |
| cs-003288 | die Ritze | Škvíra | (1) sprauga | — | — |
| cs-001059 | schroff | Ostrý | (1) nelaipns (2) ass (3) skarbs (4) kraujš (5) stāvs | — | — |
| cs-005315 | der Pendelbus | Kyvadlový vlak | (1) piepilsētas autobuss | — | — |
| cs-005308 | die Natur | Příroda | (1) daba | — | — |
| cs-002814 | abbringen | Odradit | (1) novirzīt (2) atturēt (3) atrunāt | — | — |
| cs-000812 | die Rauchwaren | Kožešiny | (1) kažokādu izstrādājumi (2) kažokādas | — | — |
| cs-000777 | der Nährboden | Živná půda | (1) barotne | — | — |
| cs-000306 | mahnen | Připomenout | (1) atgādināt | — | — |
| cs-003811 | einspeichern | Zadat data | (1) saglabāt (2) ievadīt datus | — | — |
| cs-004149 | tauschen | Vyměnit | (1) mainīt | — | — |
| cs-004510 | zugeben | Přiznat | (1) atzīt | Ich gebe zu, dass ich einen Fehler gemacht habe. | es atzīstu, ka pieļāvu kļūdu. |
| cs-003033 | geräuschlos | Tiše | (1) bez trokšņa (2) klusām (3) klusi | — | — |
| cs-002225 | die Party | Večírek | (1) ballīte | — | — |
| cs-000140 | sich überzeugen | Ujistěte se | (1) pārliecināties | — | — |
| cs-002739 | das Heizöl | Kapalné palivo | (1) mazuts (2) šķidrais kurināmais | — | — |
| cs-001647 | eitel | Domýšlivý | (1) ārišķīgs (2) tukšs (3) sekls (4) iedomīgs (5) uzpūtīgs (6) godkārīgs | — | — |
| cs-001024 | fluchen | Nadávat | (1) lamāties | — | — |
| cs-002229 | der Drang | Sklon | (1) tieksme (2) dziņa | — | — |
| cs-003601 | rückwärts | Dozadu | (1) atpakaļ | — | — |
| cs-000789 | der Aussichtsturm | Vyhlídková věž | (1) skatu tornis | — | — |
| cs-004521 | achten | Dbát na | (1) ievērot | — | — |
| cs-000221 | gemein | Nečestný | (1) nekrietns | Das war wirklich gemein. | tas bija tiešām nekrietni. |
| cs-001023 | die Heilkunde | Lék | (1) medicīna (2) ārstniecība | — | — |
| cs-002211 | die Industrieabwässer | Průmyslové odpadní vody | (1) rūpnieciskie notekūdeņi | — | — |
| cs-004578 | vermindern | [snížit] | (1) [pa]mazināt | — | — |
| cs-000366 | nachgehen | Zjistit | (1) noskaidrot (2) sekot | — | — |
| cs-001840 | der Gedenktag | Pamětní den | (1) piemiņas diena | — | — |
| cs-002343 | der Prozess | Žaloba | (1) prāva (2) process | Der Prozess dauert mehrere Monate. | process ilgst vairākus mēnešus. |
| cs-003430 | die Kur | Lázeňská léčba | (1) ārstēšana | — | — |
| cs-000835 | der Vorstand | Šéf | (1) priekšnieks (2) vadība (3) priekšniecība (4) valde | — | — |
| cs-003919 | hinreißen | Zmocnit se | (1) aizraut (2) aizgrābt | — | — |
| cs-002472 | die Wehe | Duna | (1) kupena (2) kāpa | — | — |
| cs-001192 | der Brandanschlag | Žhářství | (1) ļaunprātīga dedzināšana | — | — |
| cs-005309 | neben | Vedle | (1) blakus | — | — |
| cs-003597 | das Gasfeuerzeug | Plynový zapalovač | (1) gāzes šķiltavas | — | — |
| cs-001461 | das Selbstgefühl | Sebeuvědomění | (1) pašapziņa (2) pašapziņīgums | — | — |
| cs-000433 | die Ehrung | Slavnostní uctění | (1) godināšanas ceremonija (2) godināšana | — | — |
| cs-000332 | vornehmen | Provést | (1) kaut ko apņemties (2) ķerties (3) veikt (4) izdarīt | — | — |
| cs-002747 | die Garnele | Krevety | (1) garnele | — | — |
| cs-000886 | entziehen | Odpoutat se | (1) izbēgt (2) atrauties (3) izvairīties (4) atraut (5) atņemt | — | — |
| cs-000077 | gemessen | Uvážený | (1) apdomāts (2) nosvērts | — | — |
| cs-002828 | unmöglich | Nemožné | (1) neiespējams | — | — |
| cs-001934 | die Gondel | Lanovka | (1) trošu dzelzceļa kabīne (2) gondola | — | — |
| cs-004045 | einbürgern | Zavést | (1) iesakņoties (2) ieviesties (3) piešķirt pilsoņa tiesības | — | — |
| cs-001563 | der Haarschnitt | Střih | (1) frizūra (2) matu griezums | — | — |
| cs-001017 | sich | Sebe | (1) sev (2) sevi | Er wäscht sich. | viņš mazgājas. |
| cs-000211 | eigentümlich | Svérázný | (1) raksturīgs (2) īpatnējs | — | — |
| cs-003012 | das Vieh | Hospodářská zvířata | (1) lopi | — | — |
| cs-000678 | die Umlaufbahn | Orbita | (1) orbīta | — | — |
| cs-000989 | das Mahnschreiben | Upomínací dopis | (1) atgādinājums | — | — |
| cs-003969 | vordringen | Prorazit vpřed | (1) izlauzties uz priekšu | — | — |
| cs-001738 | das Bildnis | Podobizna | (1) attēls (2) portrets (3) ģīmetne | — | — |
| cs-005316 | das Verfahren | Zásluhy | (1) lieta (2) jur. process (3) metode (4) paņēmiens (5) izturēšanās (6) rīcība | — | — |
| cs-001594 | der Kanten | Patka chleba | (1) maizes dona | — | — |
| cs-005311 | nett | Pěkný | (1) jauks | — | — |
| cs-001383 | der Jünger | Následovník | (1) sekotājs (2) māceklis | Die zwölf Jünger folgten Jesus. | divpadsmit mācekļi sekoja Jēzum. |
| cs-005317 | dunkeln | Rozednívat se | (1) satumst (2) tumst | — | — |
| cs-005314 | übermitteln | Vysílat rozhlasem | (1) nosūtīt vēstuli (2) nodot | — | — |
| cs-004625 | die Ansiedlung | Malá osada | (1) neliela apdzīvota vieta | — | — |
| cs-001794 | konterkarieren | Mařit | (1) izjaukt | — | — |
| cs-000742 | verzweifelt | Beznadějný | (1) izmisuma pilns (2) izmisīgs (3) izmisies | — | — |
| cs-005307 | nass | Mokrý | (1) slapjš | — | — |
| cs-000109 | namens | Příjmením | (1) uzvārdā (2) vārdā | — | — |
| cs-001306 | beratschlagen | Projednávat | (1) apspriesties | — | — |
| cs-002185 | die Werkbank | Dílenský ponk | (1) darbgalda | — | — |
| cs-004261 | der Werkteil | Díl | (1) detaļa | — | — |
| cs-000456 | sich hervortun | Vyčnívat | (1) izcelties | — | — |
| cs-002619 | beispiellos | Nebývalý | (1) tāds, kas nav ne ar ko salīdzināms (2) neredzēts (3) nebijis | — | — |
| cs-003941 | anstellen | Zapnout | (1) ieslēgt | Die Firma stellt neue Mitarbeiter an. | uzņēmums pieņem darbā jaunus darbiniekus. |
| cs-004748 | die Erwägung | Zvažování | (1) apsvērums (2) apsvēršana | — | — |
| cs-002508 | entschädigen | Kompenzovat | (1) kompensēt (2) atlīdzināt | — | — |
| cs-003394 | der Leistungssport | Výkonnostní sport | (1) profesionālais sports | — | — |
| cs-002048 | sich ausweisen | Předložit osobní doklady | (1) uzrādīt personas dokumentus | — | — |
| cs-003051 | der Vorgesetzte | Šéf | (1) priekšnieks | — | — |
| cs-003276 | pro | Pro | (1) par | — | — |
| cs-003913 | das Gefüge | Spojení | (1) salaidums (2) savienojums (3) uzbūve (4) struktūra | — | — |
| cs-001363 | das Richtfest | Oslava dokončení krovu | (1) spāru svētki | — | — |
| cs-000875 | der Einkauf | Nakupování | (1) pirkums (2) iepirkšanās | — | — |
| cs-005310 | nennen | Jmenovat | (1) nosaukt | — | — |
| cs-005312 | neun | Devět | (1) deviņi | — | — |
| cs-003328 | ausüben | Provést | (1) veikt | Sie übt den Beruf seit zehn Jahren aus. | viņa strādā šajā profesijā jau desmit gadus. |
| cs-001784 | duzen | Tyknout | (1) uzrunāt ar «tu» | — | — |
| cs-005318 | versagen | Odtrhnout | (1) izrādīties gļēvam un nevarīgam (2) atteikties kalpot (3) neklausīt (4) noraidīt (5) atteikt (6) liegt | — | — |
| cs-001940 | indiskret | Netaktní | (1) netaktisks | — | — |
| cs-003134 | beharren | Trvat na | (1) palikt (2) pastāvēt | — | — |
| cs-002567 | die Diätkost | Dietní výživa | (1) diētiskais uzturs | — | — |
| cs-002425 | der Schleudersitz | Katapultovací sedadlo letadla | (1) lidmašīnas katapultas sēdeklis | — | — |
| cs-003727 | die Marktlücke | Tržní nika | (1) tirgus niša | — | — |
| cs-001968 | das Abitur | Závěrečná zkouška | (1) gala pārbaudījums | — | — |
| cs-001901 | erröten | Červenat se | (1) nosarkt | — | — |
| cs-004151 | die Speisekarte | Menu | (1) ēdienkarte | — | — |
| cs-001630 | bezähmen | Ovládnout | (1) savaldīt | — | — |
| cs-003035 | das Diskettenlaufwerk | Disketová mechanika | (1) disketes dzinis | — | — |
| cs-000415 | unbewusst | Neúmyslný | (1) netīšs (2) nevilšs (3) instinktīvs (4) neapzināts | — | — |
| cs-004473 | bürgen | Zaručit | (1) galvot | — | — |
| cs-000550 | die Besuchszeit | Návštěvní doba | (1) apmeklētāju laiks | — | — |
| cs-002475 | heben | Zvednout | (1) pacelt | — | — |
| cs-002823 | der Straßenbelag | Povrch vozovky | (1) ielas klātne | — | — |
| cs-005313 | die Hürde | Překážkový závod | (1) barjera | — | — |
