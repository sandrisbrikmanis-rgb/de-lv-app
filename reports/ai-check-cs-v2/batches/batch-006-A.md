HOW-TO: šo versiju A saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-006.csv (versija C).
Gemini -> ai-gemini/batch-006.csv (versija A).
ChatGPT -> ai-chatgpt/batch-006.csv (versija B).
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
| cs-003362 | das Herzversagen | Zástava srdce | (1) sirds apstāšanās (2) nepietiekamība | — | — |
| cs-002319 | das Standesamt | Matrika | (1) dzimtsarakstu birojs | — | — |
| cs-005060 | besuchen | Navštívit | (1) apmeklēt | Ich besuche das Museum. | Es apmeklēju muzeju. |
| cs-001421 | umschreiben | Popsat | (1) aprakstīt | — | — |
| cs-005065 | sich gedulden | Spoléhat na | (1) paciesties | — | — |
| cs-004743 | der Datenträger | Disketa | (1) diskete | — | — |
| cs-004376 | sich verpflichten | Zavázat se | (1) uzņemties | — | — |
| cs-001763 | das Beweismaterial | Fyzické důkazy | (1) lietiskie pierādījumi | — | — |
| cs-004603 | verfügen | Určit | (1) pavēlēt (2) norīkot (3) noteikt | — | — |
| cs-001825 | die Produktionsweise | Způsob výroby | (1) ražošanas veids | — | — |
| cs-001719 | die Wachsamkeit | Všímavost | (1) modrība (2) vērīgums | — | — |
| cs-003850 | verwenden | Používat | (1) izlietot | — | — |
| cs-002478 | rücksichtslos | Nedbalý | (1) rupjš (2) nesaudzīgs (3) neuzmanīgs | — | — |
| cs-005057 | beste | Nejlepší | (1) vislabākais | — | — |
| cs-000548 | der Goldbarren | Zlatá cihla | (1) zelta stienis | — | — |
| cs-003326 | das Kurbad | Lázně | (1) ārstniecības kūrorts | — | — |
| cs-001642 | reifen | Dozrávat | (1) nogatavoties | — | — |
| cs-001861 | hintereinander | Jeden za druhým | (1) viens aiz otra | — | — |
| cs-000908 | fahnden | Intenzivně hledat | (1) intensīvi meklēt | — | — |
| cs-001556 | die Bäuerin | Farmářka | (1) zemniece | — | — |
| cs-003894 | sich erfrischen | Občerstvit se | (1) atspirdzināties | — | — |
| cs-000680 | starr | Otupělý | (1) sastindzis (2) stīvs (3) nekustīgs | — | — |
| cs-001807 | der Spielplan | Divadelní repertoár | (1) teātra repertuārs | — | — |
| cs-001704 | der Funktionär | Aktivista | (1) aktīvists (2) darbinieks | — | — |
| cs-001357 | glimmen | Zářit | (1) kvēlot (2) gruzdēt (3) gailēt | — | — |
| cs-004553 | bevorzugen | Dát přednost | (1) dot priekšroku | — | — |
| cs-000357 | anklagen | Obvinit | (1) apsūdzēt | — | — |
| cs-002595 | einwenden | Oponovat | (1) iebilst (2) celt iebildumus | — | — |
| cs-003846 | keinesfalls | Za žádných okolností | (1) nekādā gadījumā | — | — |
| cs-001873 | der Ökobauer | Farmář, který vyrábí ekologicky čisté zemědělské produkty | (1) zemnieks, kas ražo ekoloģiski tīru lauksaimniecības produkciju | — | — |
| cs-003917 | die Genossenschaft | Artel | (1) kooperatīvs (2) artelis | — | — |
| cs-000495 | abnehmen | Odstranit | (1) noņemt | Nimm bitte die Brille ab. | lūdzu, noņem brilles. |
| cs-000004 | mitführen | Mít s sebou | (1) vest līdzi | — | — |
| cs-003669 | die Färbung | Zbarvení | (1) krāsojums (2) nokrāsa | — | — |
| cs-000028 | der Beschützer | Obránce | (1) sargs (2) aizstāvis (3) sargātājs | — | — |
| cs-005055 | der Berg | Hora | (1) kalns | — | — |
| cs-000394 | abfällig | Pohrdavý | (1) negatīvs (2) slikts (3) noraidošs (4) nelabvēlīgs | — | — |
| cs-003840 | der Krankheitsüberträger | Přenašeč nemoci | (1) slimības pārnēsātājs | — | — |
| cs-000209 | wehen | Foukat | (1) pūst | — | — |
| cs-003304 | die Klemme | Svěrka | (1) spaile | — | — |
| cs-005062 | der Trupp | Shoda | (1) vienība | — | — |
| cs-001922 | die Begabung | Talent | (1) talants | — | — |
| cs-005066 | der Zwirn | Oslava dokončení krovu | (1) diegs | — | — |
| cs-001416 | die Freikarte | Vstupenka zdarma | (1) brīvbiļete | — | — |
| cs-001339 | das Partikel | Zrno | (1) daļiņa (2) graudiņš | — | — |
| cs-002091 | auflösen | Rozpustit | (1) izšķīdināt | — | — |
| cs-001301 | der Feldmesser | Zeměměřič | (1) mērnieks | — | — |
| cs-004214 | donnern | Hrom řvát | (1) rībēt (2) dārdēt (3) pērkons rūc | — | — |
| cs-001930 | ohne ... zu | Bez (něco dělat) | (1) bez (kaut ko darot) | Er ging, ohne sich zu verabschieden. | viņš aizgāja, neuzvadoties. |
| cs-000317 | die Nebenkosten | Dodatečné náklady | (1) papildu izmaksas | — | — |
| cs-003966 | die Bewaffnung | Vyzbrojování | (1) apbruņošana (2) apbruņojums | — | — |
| cs-003521 | der Betrug | Klamání | (1) mānīšana (2) viltus (3) blēdība (4) krāpšana | — | — |
| cs-002158 | bei | Na | (1) pie | Ich bin bei meinem Freund. | es esmu pie sava drauga. |
| cs-004557 | eingestehen | Přiznat | (1) atzīt | — | — |
| cs-002978 | verbessern | Opravit | (1) uzlabot (2) izlabot | — | — |
| cs-001518 | der Spruch | Výraz | (1) aforisms (2) jur. spriedums (3) izteiciens | — | — |
| cs-003245 | der Pfahlbau | Pilotová konstrukce | (1) pāļu būve | — | — |
| cs-003263 | schwingen | Houpat se | (1) šūpoties | — | — |
| cs-004147 | der Aktienkurs | Cena akcií | (1) akcijas kurss | — | — |
| cs-005063 | die Kartoffelerntemaschine | Bramborový knedlík | (1) kartupeļu novācamais kombains | — | — |
| cs-000229 | hitzig | Rychlý k hněvu | (1) dedzīgs (2) straujš (3) ātrs dusmās (4) karsts | — | — |
| cs-002451 | fünfzehnte | Patnáctý | (1) piecpadsmitais | — | — |
| cs-004712 | sich entsinnen | Vzpomenout si | (1) atminēties (2) atcerēties | — | — |
| cs-002160 | die List | Úskok | (1) viltība | — | — |
| cs-004202 | der Triumphbogen | Vítězný oblouk | (1) triumfa arka | — | — |
| cs-003523 | das Gesuch | Podání | (1) lūgums (2) iesniegums | — | — |
| cs-005056 | besser | Lepší | (1) labāks | — | — |
| cs-001391 | bestärken | Povzbudit | (1) pastiprināt (2) uzmundrināt (3) stiprināt | — | — |
| cs-004505 | dreschen | Šlehat bílek | (1) kult labību (2) kult olas baltumu | — | — |
| cs-001632 | entstellen | Znetvořit | (1) izķēmot (2) sagrozīt (3) izkropļot | — | — |
| cs-005058 | der Besuch | Návštěva | (1) apmeklējums | Der Besuch im Museum war interessant. | Muzeja apmeklējums bija interesants. |
| cs-003456 | das Etikett | Štítek produktu | (1) preces etiķete | — | — |
| cs-003871 | dopen | Používat dopingové prostředky | (1) lietot dopinga līdzekļus | — | — |
| cs-001078 | leihen | Půjčovat | (1) aizdot (2) aizņemties | Kannst du mir dein Auto leihen? | vai vari man aizdot savu mašīnu? |
| cs-004414 | angeordnet | Nařízený | (1) noteikts (2) pavēlēts | — | — |
| cs-002231 | lauern | Čekat v záloze | (1) uzglūnēt | — | — |
| cs-003234 | die Heilstätte | Sanatorium | (1) sanatorija | — | — |
| cs-002763 | expandieren | Expandovat | (1) strauji augt (2) izplesties | — | — |
| cs-003237 | ärgerlich | Nepříjemný | (1) kaitinošs (2) dusmīgs | — | — |
| cs-000559 | grausam | Drsný | (1) nežēlīgs (2) bargs | — | — |
| cs-000945 | der Meineid | Vědomě křivá přísaha u soudu | (1) apzināti nepatiesa liecība tiesā | — | — |
| cs-000499 | die Eisblume | Ledový květ | (1) leduspuķe | — | — |
| cs-001218 | die Fassung | Formulace | (1) apvalums (2) formulējums (3) ietvars | — | — |
| cs-003246 | die Suchaktion | Pátrání organizované policií | (1) policijas organizēta meklēšana | — | — |
| cs-005059 | der Besucher | Návštěvník | (1) apmeklētājs | — | — |
| cs-005061 | die Berühmtheit | Připravenost | (1) slava | Er träumt von Berühmtheit. | viņš sapņo par slavu. |
| cs-000771 | die Unvoreingenommenheit | Neutralita | (1) objektivitāte (2) neitralitāte | — | — |
| cs-003355 | ächten | Ostrakizovat | (1) izstumt (2) sociāli atstumt | — | — |
| cs-005064 | einäschern | Sjednotit | (1) kremēt (2) sadedzināt ugunsgrēkā | — | — |
| cs-002146 | stecken bleiben | Zaseknout se | (1) iestrēgt | — | — |
| cs-003449 | die Mahd | Seč | (1) pļauja | — | — |
| cs-000528 | der Erlass | Nařízení | (1) pavēle (2) dekrēts (3) atlaišana (4) rīkojums | — | — |
| cs-000333 | die Schwarzarbeit | Nelegální práce, za kterou se neplatí žádné daně | (1) nelegāls darbs, par ko nemaksā nodokļus | — | — |
| cs-000139 | der Holzhauer | Dřevorubec | (1) mežcirtējs | — | — |
| cs-002390 | der Ruf | Pláč | (1) sauciens | Ich hörte einen lauten Ruf. | es dzirdēju skaļu saucienu. |
| cs-000301 | formell | Zdvořilý | (1) pieklājīgs (2) formāls (3) stīvs (4) korekts | — | — |
| cs-003864 | dringen | Požadovat | (1) lauzties (2) iespiesties (3) ielauzties (4) prasīt (5) pieprasīt (6) spiesties | — | — |
| cs-003233 | nichtig | Bezvýznamný | (1) anulēts (2) niecīgs (3) nenozīmīgs (4) nederīgs | — | — |
| cs-004370 | ausweisen | Vyhnat | (1) izsūtīt (2) apstiprināt (3) pierādīt (4) izraidīt | — | — |
| cs-004023 | vereinbaren | Dohodnout se | (1) vienoties | — | — |
