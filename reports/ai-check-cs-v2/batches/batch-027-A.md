HOW-TO: šo versiju A saņem Gemini.
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
| cs-004106 | sich hingeben | Odevzdat se | (1) atdoties (2) nodoties | — | — |
| cs-003288 | die Ritze | Škvíra | (1) sprauga | — | — |
| cs-001059 | schroff | Ostrý | (1) kraujš (2) skarbs (3) ass (4) nelaipns (5) stāvs | — | — |
| cs-005315 | der Pendelbus | Kyvadlový vlak | (1) piepilsētas autobuss | — | — |
| cs-005308 | die Natur | Příroda | (1) daba | — | — |
| cs-002814 | abbringen | Odradit | (1) atturēt (2) novirzīt (3) atrunāt | — | — |
| cs-000812 | die Rauchwaren | Kožešiny | (1) kažokādas (2) kažokādu izstrādājumi | — | — |
| cs-000777 | der Nährboden | Živná půda | (1) barotne | — | — |
| cs-000306 | mahnen | Připomenout | (1) atgādināt | — | — |
| cs-003811 | einspeichern | Zadat data | (1) ievadīt datus (2) saglabāt | — | — |
| cs-004149 | tauschen | Vyměnit | (1) mainīt | — | — |
| cs-004510 | zugeben | Přiznat | (1) atzīt | Ich gebe zu, dass ich einen Fehler gemacht habe. | es atzīstu, ka pieļāvu kļūdu. |
| cs-003033 | geräuschlos | Tiše | (1) klusām (2) bez trokšņa (3) klusi | — | — |
| cs-002225 | die Party | Večírek | (1) ballīte | — | — |
| cs-000140 | sich überzeugen | Ujistěte se | (1) pārliecināties | — | — |
| cs-002739 | das Heizöl | Kapalné palivo | (1) šķidrais kurināmais (2) mazuts | — | — |
| cs-001647 | eitel | Domýšlivý | (1) uzpūtīgs (2) iedomīgs (3) sekls (4) tukšs (5) ārišķīgs (6) godkārīgs | — | — |
| cs-001024 | fluchen | Nadávat | (1) lamāties | — | — |
| cs-002229 | der Drang | Sklon | (1) dziņa (2) tieksme | — | — |
| cs-003601 | rückwärts | Dozadu | (1) atpakaļ | — | — |
| cs-000789 | der Aussichtsturm | Vyhlídková věž | (1) skatu tornis | — | — |
| cs-004521 | achten | Dbát na | (1) ievērot | — | — |
| cs-000221 | gemein | Nečestný | (1) nekrietns | Das war wirklich gemein. | tas bija tiešām nekrietni. |
| cs-001023 | die Heilkunde | Lék | (1) ārstniecība (2) medicīna | — | — |
| cs-002211 | die Industrieabwässer | Průmyslové odpadní vody | (1) rūpnieciskie notekūdeņi | — | — |
| cs-004578 | vermindern | [snížit] | (1) [pa]mazināt | — | — |
| cs-000366 | nachgehen | Zjistit | (1) sekot (2) noskaidrot | — | — |
| cs-001840 | der Gedenktag | Pamětní den | (1) piemiņas diena | — | — |
| cs-002343 | der Prozess | Žaloba | (1) process (2) prāva | Der Prozess dauert mehrere Monate. | process ilgst vairākus mēnešus. |
| cs-003430 | die Kur | Lázeňská léčba | (1) ārstēšana | — | — |
| cs-000835 | der Vorstand | Šéf | (1) priekšniecība (2) vadība (3) priekšnieks (4) valde | — | — |
| cs-003919 | hinreißen | Zmocnit se | (1) aizgrābt (2) aizraut | — | — |
| cs-002472 | die Wehe | Duna | (1) kāpa (2) kupena | — | — |
| cs-001192 | der Brandanschlag | Žhářství | (1) ļaunprātīga dedzināšana | — | — |
| cs-005309 | neben | Vedle | (1) blakus | — | — |
| cs-003597 | das Gasfeuerzeug | Plynový zapalovač | (1) gāzes šķiltavas | — | — |
| cs-001461 | das Selbstgefühl | Sebeuvědomění | (1) pašapziņīgums (2) pašapziņa | — | — |
| cs-000433 | die Ehrung | Slavnostní uctění | (1) godināšana (2) godināšanas ceremonija | — | — |
| cs-000332 | vornehmen | Provést | (1) veikt (2) ķerties (3) kaut ko apņemties (4) izdarīt | — | — |
| cs-002747 | die Garnele | Krevety | (1) garnele | — | — |
| cs-000886 | entziehen | Odpoutat se | (1) atraut (2) izvairīties (3) atrauties (4) izbēgt (5) atņemt | — | — |
| cs-000077 | gemessen | Uvážený | (1) nosvērts (2) apdomāts | — | — |
| cs-002828 | unmöglich | Nemožné | (1) neiespējams | — | — |
| cs-001934 | die Gondel | Lanovka | (1) gondola (2) trošu dzelzceļa kabīne | — | — |
| cs-004045 | einbürgern | Zavést | (1) ieviesties (2) iesakņoties (3) piešķirt pilsoņa tiesības | — | — |
| cs-001563 | der Haarschnitt | Střih | (1) matu griezums (2) frizūra | — | — |
| cs-001017 | sich | Sebe | (1) sevi (2) sev | Er wäscht sich. | viņš mazgājas. |
| cs-000211 | eigentümlich | Svérázný | (1) īpatnējs (2) raksturīgs | — | — |
| cs-003012 | das Vieh | Hospodářská zvířata | (1) lopi | — | — |
| cs-000678 | die Umlaufbahn | Orbita | (1) orbīta | — | — |
| cs-000989 | das Mahnschreiben | Upomínací dopis | (1) atgādinājums | — | — |
| cs-003969 | vordringen | Prorazit vpřed | (1) izlauzties uz priekšu | — | — |
| cs-001738 | das Bildnis | Podobizna | (1) portrets (2) attēls (3) ģīmetne | — | — |
| cs-005316 | das Verfahren | Zásluhy | (1) izturēšanās (2) paņēmiens (3) metode (4) jur. process (5) lieta (6) rīcība | — | — |
| cs-001594 | der Kanten | Patka chleba | (1) maizes dona | — | — |
| cs-005311 | nett | Pěkný | (1) jauks | — | — |
| cs-001383 | der Jünger | Následovník | (1) māceklis (2) sekotājs | Die zwölf Jünger folgten Jesus. | divpadsmit mācekļi sekoja Jēzum. |
| cs-005317 | dunkeln | Rozednívat se | (1) tumst (2) satumst | — | — |
| cs-005314 | übermitteln | Vysílat rozhlasem | (1) nodot (2) nosūtīt vēstuli | — | — |
| cs-004625 | die Ansiedlung | Malá osada | (1) neliela apdzīvota vieta | — | — |
| cs-001794 | konterkarieren | Mařit | (1) izjaukt | — | — |
| cs-000742 | verzweifelt | Beznadějný | (1) izmisīgs (2) izmisuma pilns (3) izmisies | — | — |
| cs-005307 | nass | Mokrý | (1) slapjš | — | — |
| cs-000109 | namens | Příjmením | (1) vārdā (2) uzvārdā | — | — |
| cs-001306 | beratschlagen | Projednávat | (1) apspriesties | — | — |
| cs-002185 | die Werkbank | Dílenský ponk | (1) darbgalda | — | — |
| cs-004261 | der Werkteil | Díl | (1) detaļa | — | — |
| cs-000456 | sich hervortun | Vyčnívat | (1) izcelties | — | — |
| cs-002619 | beispiellos | Nebývalý | (1) neredzēts (2) tāds, kas nav ne ar ko salīdzināms (3) nebijis | — | — |
| cs-003941 | anstellen | Zapnout | (1) ieslēgt | Die Firma stellt neue Mitarbeiter an. | uzņēmums pieņem darbā jaunus darbiniekus. |
| cs-004748 | die Erwägung | Zvažování | (1) apsvēršana (2) apsvērums | — | — |
| cs-002508 | entschädigen | Kompenzovat | (1) atlīdzināt (2) kompensēt | — | — |
| cs-003394 | der Leistungssport | Výkonnostní sport | (1) profesionālais sports | — | — |
| cs-002048 | sich ausweisen | Předložit osobní doklady | (1) uzrādīt personas dokumentus | — | — |
| cs-003051 | der Vorgesetzte | Šéf | (1) priekšnieks | — | — |
| cs-003276 | pro | Pro | (1) par | — | — |
| cs-003913 | das Gefüge | Spojení | (1) uzbūve (2) savienojums (3) salaidums (4) struktūra | — | — |
| cs-001363 | das Richtfest | Oslava dokončení krovu | (1) spāru svētki | — | — |
| cs-000875 | der Einkauf | Nakupování | (1) iepirkšanās (2) pirkums | — | — |
| cs-005310 | nennen | Jmenovat | (1) nosaukt | — | — |
| cs-005312 | neun | Devět | (1) deviņi | — | — |
| cs-003328 | ausüben | Provést | (1) veikt | Sie übt den Beruf seit zehn Jahren aus. | viņa strādā šajā profesijā jau desmit gadus. |
| cs-001784 | duzen | Tyknout | (1) uzrunāt ar «tu» | — | — |
| cs-005318 | versagen | Odtrhnout | (1) atteikt (2) noraidīt (3) neklausīt (4) atteikties kalpot (5) izrādīties gļēvam un nevarīgam (6) liegt | — | — |
| cs-001940 | indiskret | Netaktní | (1) netaktisks | — | — |
| cs-003134 | beharren | Trvat na | (1) pastāvēt (2) palikt | — | — |
| cs-002567 | die Diätkost | Dietní výživa | (1) diētiskais uzturs | — | — |
| cs-002425 | der Schleudersitz | Katapultovací sedadlo letadla | (1) lidmašīnas katapultas sēdeklis | — | — |
| cs-003727 | die Marktlücke | Tržní nika | (1) tirgus niša | — | — |
| cs-001968 | das Abitur | Závěrečná zkouška | (1) gala pārbaudījums | — | — |
| cs-001901 | erröten | Červenat se | (1) nosarkt | — | — |
| cs-004151 | die Speisekarte | Menu | (1) ēdienkarte | — | — |
| cs-001630 | bezähmen | Ovládnout | (1) savaldīt | — | — |
| cs-003035 | das Diskettenlaufwerk | Disketová mechanika | (1) disketes dzinis | — | — |
| cs-000415 | unbewusst | Neúmyslný | (1) instinktīvs (2) nevilšs (3) netīšs (4) neapzināts | — | — |
| cs-004473 | bürgen | Zaručit | (1) galvot | — | — |
| cs-000550 | die Besuchszeit | Návštěvní doba | (1) apmeklētāju laiks | — | — |
| cs-002475 | heben | Zvednout | (1) pacelt | — | — |
| cs-002823 | der Straßenbelag | Povrch vozovky | (1) ielas klātne | — | — |
| cs-005313 | die Hürde | Překážkový závod | (1) barjera | — | — |
