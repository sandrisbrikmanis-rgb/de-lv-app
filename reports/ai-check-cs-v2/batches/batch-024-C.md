HOW-TO: šo versiju C saņem Anthropic.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-024.csv (versija C).
Gemini -> ai-gemini/batch-024.csv (versija A).
ChatGPT -> ai-chatgpt/batch-024.csv (versija B).
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
| cs-002920 | das Rennboot | Závodní loď | (1) sacīkšu laiva | — | — |
| cs-002976 | die Devisenbörse | Devizová burza | (1) valūtas birža | — | — |
| cs-000310 | sich auf den Weg machen | Vydat se na cestu | (1) doties ceļā | — | — |
| cs-001466 | schärfsichtig | S ostrým pohledem | (1) vērīgs (2) ar asu skatienu | — | — |
| cs-002009 | entkräften | Vyvrátit | (1) atspēkot (2) apgāzt (3) atņemt spēku (4) novājināt | — | — |
| cs-002639 | die Haube | Čepice | (1) cepurīte (2) pārsegs | Sie trägt eine warme Haube. | viņa valkā siltu cepurīti. |
| cs-004250 | das Lustspiel | Komedie | (1) komēdija (2) joku luga | — | — |
| cs-001747 | die Rettungsstelle | Bod první pomoci | (1) ātrās palīdzības punkts | — | — |
| cs-005271 | der Löffel | Lžíce | (1) karote | — | — |
| cs-003149 | die Anklage | Obvinění | (1) apsūdzība | — | — |
| cs-001098 | die Erntearbeiten | Sklizňové práce | (1) ražas novākšanas darbi | — | — |
| cs-002538 | geistesschwach | Duševně slabý | (1) plānprātīgs (2) garā vājš | — | — |
| cs-000493 | auswerten | analyzovat | (1) izvērtēt (2) novērtēt | — | — |
| cs-002445 | erniedrigen | Snížit | (1) pazemot (2) pazemināt | — | — |
| cs-001413 | unbarmherzig | Bezcitný | (1) bezsirdīgs (2) nežēlīgs | — | — |
| cs-003990 | die Durchschnittsleistung | Průměrný výkon | (1) viduvējs sniegums (2) caurmēra sniegums | — | — |
| cs-000651 | die Hürde | Bariéra | (1) barjera | — | — |
| cs-000893 | der Pressesprecher | Tiskový tajemník | (1) preses sekretārs | — | — |
| cs-004419 | der Auftrag | Úkol | (1) uzdevums | Ich habe einen wichtigen Auftrag bekommen. | es saņēmu svarīgu uzdevumu. |
| cs-005281 | aufheben | Zvedat | (1) saglabāt (2) pacelt (3) atcelt | Kannst du bitte den Stift aufheben? | vai vari, lūdzu, pacelt pildspalvu? |
| cs-001591 | zu viel | Příliš mnoho | (1) par daudz | — | — |
| cs-005273 | das Mädchen | Dívka | (1) meitene | — | — |
| cs-005272 | die Luft | Vzduch | (1) gaiss | — | — |
| cs-003586 | das Rennen | Závod | (1) sacīkstes | — | — |
| cs-002679 | unerschütterlich | Neotřesitelný | (1) nesatricināms | — | — |
| cs-002802 | sich wärmen | Zahřát se | (1) sasildīties | — | — |
| cs-000248 | das Augenmaß | smysl pro míru | (1) acumērs | — | — |
| cs-003565 | der Geburtsschein | Rodný list | (1) dzimšanas apliecība | — | — |
| cs-002107 | entschlossen | Rozhodný | (1) nešaubīgs (2) noteikts (3) apņēmīgs | — | — |
| cs-000858 | geldgierig | Chtivý peněz | (1) naudaskārs | — | — |
| cs-002046 | umständlich | Složitý | (1) apgrūtinošs (2) sarežģīts (3) ļoti sīks (4) pārāk plašs | — | — |
| cs-000755 | das Fußballfeld | Fotbalové hřiště | (1) futbola laukums | — | — |
| cs-003875 | das Abfallprodukt | Odpadní produkt | (1) atkritumprodukts | — | — |
| cs-003068 | die Gnade | Prominout | (1) žēlastība (2) apžēlošana | — | — |
| cs-005279 | gesetzlos | Do jisté míry | (1) nelikumīgs | — | — |
| cs-001183 | der Verstorbene | Zesnulý | (1) mirušais (2) aizgājējs | — | — |
| cs-003794 | ansehnlich | Pozoruhodný | (1) ievērojams | — | — |
| cs-001661 | der Kabinettsbeschluss | Rozhodnutí kabinetu | (1) kabineta lēmums | — | — |
| cs-003066 | die Weltlage | Mezinárodní situace | (1) starptautiskais stāvoklis | — | — |
| cs-001291 | sich grauen | Bát se | (1) biedēties no | — | — |
| cs-001188 | scheiden | Rozvést se | (1) šķirt (2) sich sch. lassen (3) šķirties (4) izšķirties (5) [at]šķirt (6) atdalīt | — | — |
| cs-000670 | gelegentlich | Kvůli | (1) sakarā ar (2) reizēm (3) gadījuma | Er kommt gelegentlich vorbei. | viņš reizēm iegriežas. |
| cs-000173 | populärwissenschaftlich | Populárněvědecký | (1) populārzinātnisks | — | — |
| cs-001479 | der Vorsprung | Nadřazenost | (1) pārsvars (2) izcilnis (3) pārākums | — | — |
| cs-001080 | ebnen | Uhladit | (1) nogludināt (2) nolīdzināt | — | — |
| cs-001939 | die Garbe | Svazeček | (1) kūlītis (2) kūlis | — | — |
| cs-004525 | der Eierkuchen | Palačinka | (1) pankūka | — | — |
| cs-004117 | missglücken | Nezdařit se | (1) neveikties (2) neizdoties | — | — |
| cs-003132 | räumen | Uvolnění | (1) atbrīvot | Die Polizei räumt die Straße. | policija atbrīvo ielu. |
| cs-002959 | der Verweis | Napomenutí | (1) aizrādījums (2) rājiens | — | — |
| cs-005277 | die Konserve | Závěr | (1) konservi | — | — |
| cs-001397 | die Wegstrecke | Úsek | (1) gabals (2) ceļa posms | — | — |
| cs-003240 | dumpf | Utlačovaný | (1) sasmacis (2) smacīgs (3) smags (4) nospiests (5) nomācošs (6) dobjš (7) apslāpēts | — | — |
| cs-005280 | erkämpfen | Naspořit | (1) izcīnīt | — | — |
| cs-003767 | haltbar | Odolný | (1) izturīgs | — | — |
| cs-002678 | die Sonderausgabe | Zvláštní vydání knihy | (1) marku speciālizlaidums (2) grāmatas speciālizdevums (3) laikraksta speciāl numurs | — | — |
| cs-003685 | der Stoßzahn | Sloní kel | (1) ziloņa ilknis | — | — |
| cs-005275 | der Mai | Květen | (1) maijs | — | — |
| cs-000498 | durchschnittlich | V průměru | (1) vidēji | — | — |
| cs-002682 | der Hitzkopf | Horká hlava | (1) karstgalvis | — | — |
| cs-005274 | die Mahlzeit | Jídlo | (1) maltīte | — | — |
| cs-002905 | das Heck | Záď lodi | (1) kuģa pakaļgals | — | — |
| cs-003070 | der Leichtathlet | Lehkoatlet | (1) vieglatlēts | — | — |
| cs-003507 | flechten | Splétat | (1) vīt (2) pīt | — | — |
| cs-003648 | abwarten | Čekat | (1) nogaidīt | — | — |
| cs-000981 | der Doppelzentner | Dvojitý cent | (1) centners | — | — |
| cs-001267 | der Bootsmann | Bocman | (1) bocmanis | — | — |
| cs-003613 | säen | Síti | (1) sēt | — | — |
| cs-000312 | die Tretmine | Protipěchotní mina | (1) kājnieku mīna | — | — |
| cs-000600 | das Vermächtnis | Testament | (1) testaments | — | — |
| cs-001588 | das Belieben | Zalíbení | (1) vēlēšanās (2) patika (3) patikšana | — | — |
| cs-001871 | beziehen / sich beziehen auf | Aplikovat na | (1) attiekties uz (2) attiecināt | beziehen / sich beziehen auf. | attiecināt • attiekties uz |
| cs-002495 | imstande | Schopný | (1) spējīgs | — | — |
| cs-001164 | vorbereiten | Připravit | (1) sagatavot | — | — |
| cs-005282 | lauschen | Chválit | (1) vērīgi klausīties (2) slepeni noklausīties | — | — |
| cs-003185 | das Denkmal | Památka | (1) piemineklis | — | — |
| cs-003272 | nachprüfen | Zkontrolovat | (1) pārbaudīt | — | — |
| cs-000070 | die Mannschaft | Tým | (1) komanda | — | — |
| cs-001378 | die soziale Fürsorge | Sociální péče | (1) sociālā apgāde | — | — |
| cs-004069 | beiläufig | Příležitostný | (1) starp citu (2) garām ejot (3) nejaušs (4) gadījuma | — | — |
| cs-004196 | bedingungslos | Bez výhrad | (1) bez ierunām (2) bez nosacījumiem (3) bezierunu (4) beznosacījumu | — | — |
| cs-004066 | verweigern | Zapírat | (1) liegties (2) atteikties | — | — |
| cs-004511 | die Parkgebühr | Poplatek za parkování | (1) maksa par automašīnu stāvvietu | — | — |
| cs-002632 | sich fügen | Přizpůsobovat | (1) pielāgoties (2) pakļauties | — | — |
| cs-005278 | durchlassen | Dovolit vybrat | (1) laist cauri | — | — |
| cs-001152 | einsehen | Přiznat | (1) atzīt | — | — |
| cs-001008 | lästig | Zatěžující | (1) apgrūtinošs | — | — |
| cs-000185 | hingeben | Rozdávat | (1) aizdot projām (2) atdot | — | — |
| cs-004434 | brummen | Hučet | (1) dūkt | — | — |
| cs-002602 | die Krisensituation | Krizová situace | (1) krīze (2) krīzes situācija | — | — |
| cs-001235 | benachteiligen | Poškozovat | (1) nodarīt pāri (2) kaitēt (3) nodarīt zaudējumus | — | — |
| cs-003198 | die Beschäftigung | Činnost | (1) nodarbošanās | — | — |
| cs-000773 | der Güterbahnhof | Nákladní stanice | (1) preču stacija | — | — |
| cs-005276 | manchmal | Někdy | (1) dažreiz | — | — |
| cs-003506 | eigenwillig | Svérázný | (1) stūrgalvīgs (2) patvarīgs (3) patvaļīgs (4) ietiepīgs | — | — |
| cs-003999 | verlegen | Pohybovat se | (1) pārcelt | Wir verlegen den Termin auf Freitag. | mēs pārceļam termiņu uz piektdienu. |
| cs-001799 | knifflig | Složitý | (1) sarežģīts | — | — |
| cs-001296 | der Schlafwagen | Spací vůz | (1) guļamvagons | — | — |
| cs-003859 | die Partei | Večírek | (1) partija (2) puse | Diese Partei gewann die Wahl. | šī partija uzvarēja vēlēšanās. |
| cs-003281 | der Notarzt | Lékař záchranné služby | (1) ātrās palīdzības ārsts | — | — |
