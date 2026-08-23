# ET–DE B2 — OWNER DECISIONS ACCEPTED

**Source audit:** PR #628 · MASTER v1.9
**OWNER review:** linguistic/semantic review of all 355 OWNER backlog findings
**Scope:** ET–DE B2 only
**DE:** STRICT READ-ONLY

## Coverage

- SOURCE_FINDINGS: **355**
- OWNER_RESOLVED: **355/355**
- PENDING: **0**
- LABOT: **345**
- NELABOT: **0**
- FALSE_POSITIVE: **10**
- NEEDS_SOURCE_REVIEW: **0**

## OWNER decisions

| Audit ID | Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW | OWNER NOTE |
|---|---|---|---|---|---|---|
| ET-B2-0001 | STRUCT | study.count | 64 | FALSE_POSITIVE |  | Study parity: 4 TRUE_EXTRA_STUDY (Genosse, Genossin, Neger, Pacht) eemaldatud; ET=60 vastab LV MASTER-ile. |
| ET-B2-0002 | b2-hochwasser | entry[1145].study.comparison[0].example | Es gibt Hochwasser. = Ir plūdi. | LABOT | Es gibt Hochwasser. = On on üleujutused. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0003 | b2-hochwasser | entry[1145].study.comparison[1].example | Die Überschwemmung zerstörte Häuser. = Plūdi izpostīja mājas. | LABOT | Die Überschwemmung zerstörte Häuser. = Üleujutused hävitasid maju. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0004 | b2-hochwasser | entry[1145].study.comparison[2].example | Der Pegel steigt. = Ūdens līmenis ceļas. | LABOT | Der Pegel steigt. = Veetase tõuseb. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0005 | b2-nachdruck | entry[1349].study.comparison[0].example | Er legt Nachdruck auf die Frist. = Viņš uzsver termiņu. | LABOT | Er legt Nachdruck auf die Frist. = Ta rõhutab tähtaega. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0006 | b2-nachdruck | entry[1349].study.comparison[1].example | Der Nachdruck erschien im Frühjahr. = Atkārtotais izdevums iznāca pavasarī. | LABOT | Der Nachdruck erschien im Frühjahr. = Kordustrükk ilmus kevadel. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0007 | b2-nachdruck | entry[1349].study.comparison[2].example | Unter Druck stehen = būt spiedienā. | LABOT | Unter Druck stehen = olema surve all. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0008 | b2-zuweisen | entry[2100].study.comparison[0].example | Er weist die Aufgabe zu. = Viņš piešķir uzdevumu. | LABOT | Er weist die Aufgabe zu. = Ta määrab ülesande. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0009 | b2-zuweisen | entry[2100].study.comparison[1].example | Er gibt mir die Arbeit. = Viņš man dod darbu. | LABOT | Er gibt mir die Arbeit. = Ta annab mulle töö. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0010 | b2-zuweisen | entry[2100].study.comparison[2].example | Er verteilt die Aufgaben. = Viņš sadala uzdevumus. | LABOT | Er verteilt die Aufgaben. = Ta jagab ülesanded. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0011 | b2-zuwider | entry[2102].study.comparison[1].example | Es ist mir zuwider. = Man tas nepatīk. | LABOT | Es ist mir zuwider. = See ei meeldi mulle. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0012 | b2-anbieten | entry[2113].study.comparison[0].example | Ich biete Hilfe an. = Es piedāvāju palīdzību. | LABOT | Ich biete Hilfe an. = Ma pakun abi. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0013 | b2-anbieten | entry[2113].study.comparison[1].example | Er bietet viel Geld. = Viņš piedāvā daudz naudas. | LABOT | Er bietet viel Geld. = Ta pakub palju raha. | LV jäänuk asendatud loomuliku eesti tõlkega comparison näites. |
| ET-B2-0014 | b2-genosse | study.sectionAccents | {"explanation":{"blue":"Genosse","purple":"seltsiline","green":"Mitglied","yellow":"liige","red":"Kamerad"},"examples":[{"de":{"blue":"Genosse"},"lv":{"purple":"seltsiline"}},{"de":{"green":"Mitglied"},"lv":{"yellow":"liige"}},{"de":{"red":"Kamerad"},"lv":{"purple":"seltsimees"}}],"comparison":[{"word":{"blue":"der Genosse"},"meaning":{"purple":"seltsiline"},"example":{"blue":"Genosse"}},{"word":{"green":"das Mitglied"},"meaning":{"yellow":"liige"},"example":{"green":"Mitglied"}},{"word":{"red":"der Kamerad"},"meaning":{"purple":"seltsimees"},"example":{"red":"Kamerad"}}],"tip":{"blue":"Genosse","green":"Mitglied"},"important":{"blue":"Genosse","green":"Mitglied"}} | FALSE_POSITIVE |  | sectionAccents char-split artefakt; lahendub TRUE_EXTRA_STUDY eemaldamisega (4 kaardil). |
| ET-B2-0015 | b2-genossin | study.sectionAccents | {"explanation":{"blue":"Genossin","purple":"seltsiline","green":"Mitglied","yellow":"liige","red":"Kameradin"},"examples":[{"de":{"blue":"Genossin"},"lv":{"purple":"seltsiline"}},{"de":{"green":"Mitglied"},"lv":{"yellow":"liige"}},{"de":{"red":"Kameradin"},"lv":{"purple":"seltsimees"}}],"comparison":[{"word":{"blue":"die Genossin"},"meaning":{"purple":"seltsiline"},"example":{"blue":"Genossin"}},{"word":{"green":"das Mitglied"},"meaning":{"yellow":"liige"},"example":{"green":"Mitglied"}},{"word":{"red":"die Kameradin"},"meaning":{"purple":"seltsimees"},"example":{"red":"Kameradin"}}],"tip":{"blue":"Genossin","green":"Mitglied"},"important":{"blue":"Genossin","green":"Mitglied"}} | FALSE_POSITIVE |  | sectionAccents char-split artefakt; lahendub TRUE_EXTRA_STUDY eemaldamisega (4 kaardil). |
| ET-B2-0016 | b2-neger | study.sectionAccents | {"explanation":{"blue":"Neger","purple":"neeger","red":"solvav","green":"schwarze Person"},"examples":[{"de":{"blue":"Neger"},"lv":{"purple":"neeger"}},{"de":{"green":"schwarze Person"},"lv":{"purple":"mustanahaline inimene"}}],"comparison":[{"word":{"blue":"Neger"},"meaning":{"red":"solvav"},"example":{"blue":"Neger"}},{"word":{"green":"schwarze Person"},"meaning":{"purple":"neutraalne"},"example":{"green":"schwarze Person"}}],"tip":{"blue":"Neger","red":"solvav"},"important":{"blue":"Neger","red":"solvav","green":"schwarze Person"}} | FALSE_POSITIVE |  | sectionAccents char-split artefakt; lahendub TRUE_EXTRA_STUDY eemaldamisega (4 kaardil). |
| ET-B2-0017 | b2-neger | study.sectionAccents (examples) | {"explanation":{"blue":"Neger","purple":"neeger","red":"solvav","green":"schwarze Person"},"examples":[{"de":{"blue":"Neger"},"lv":{"purple":"neeger"}},{"de":{"green":"schwarze Person"},"lv":{"purple":"mustanahaline inimene"}}],"comparison":[{"word":{"blue":"Neger"},"meaning":{"red":"solvav"},"example":{"blue":"Neger"}},{"word":{"green":"schwarze Person"},"meaning":{"purple":"neutraalne"},"example":{"green":"schwarze Person"}}],"tip":{"blue":"Neger","red":"solvav"},"important":{"blue":"Neger","red":"solvav","green":"schwarze Person"}} | FALSE_POSITIVE |  | sectionAccents char-split artefakt; lahendub TRUE_EXTRA_STUDY eemaldamisega (4 kaardil). |
| ET-B2-0018 | b2-pacht | study.sectionAccents | {"explanation":{"blue":"die Pacht","purple":"rent","green":"die Miete","yellow":"üür"},"examples":[{"de":{"blue":"Pacht","yellow":"Feld"},"lv":{"purple":"renti"}},{"de":{"green":"Miete","yellow":"Wohnung"},"lv":{"yellow":"üür"}},{"de":{"blue":"Pachtvertrag"},"lv":{"purple":"rendileping"}}],"comparison":[{"word":{"blue":"die Pacht"},"meaning":{"purple":"rent"},"example":{"blue":"Pacht"}},{"word":{"green":"die Miete"},"meaning":{"yellow":"üür"},"example":{"green":"Miete"}},{"word":{"blue":"der Pachtvertrag"},"meaning":{"purple":"rendileping"},"example":{"blue":"Pachtvertrag"}}],"tip":{"blue":"Pacht","green":"Miete"},"important":{"blue":"Pacht","green":"Miete"}} | FALSE_POSITIVE |  | sectionAccents char-split artefakt; lahendub TRUE_EXTRA_STUDY eemaldamisega (4 kaardil). |
| ET-B2-0019 | b2-anbelangen-13 | lv | puudutama, käima kohta | LABOT | puudutama | „Käima kohta“ on selles tähenduses ebaloomulik ja vigane; „anbelangen“ tähendab eeskätt „puudutama“. |
| ET-B2-0020 | b2-angehen-19 | lv | puudutama • pöörduma vastu | LABOT | puudutama • vastu astuma | „Pöörduma vastu“ ei ole ründamise või vastandumise tähenduses loomulik eesti vaste. |
| ET-B2-0021 | b2-Aktienkurs-21 | lv | aktsia kurss | LABOT | aktsiakurss | Eesti keeles kirjutatakse see liitsõnana: „aktsiakurss“. |
| ET-B2-0022 | b2-angeblich-28 | lv | justkui • näiliselt | LABOT | väidetavalt • oletatav | „Angeblich“ väljendab väidetavust, mitte lihtsalt „justkui“ või „näiliselt“. |
| ET-B2-0023 | b2-abbringen-36 | lv | ümber veenma • hoiatama • kõrvale juhtima | LABOT | ümber veenma • ära hoidma • kõrvale juhtima | „Hoiatama“ tähendab hoiatamist, mitte kellegi heidutamist või millegi ärahoidmist. |
| ET-B2-0024 | b2-abgesehen-44 | lv | kuigi • pealegi | LABOT | välja arvatud • kõrvale jättes | „Abgesehen“ tähendab „välja arvatud“ või „kõrvale jättes“, mitte „kuigi“. |
| ET-B2-0025 | b2-abgetan-46 | lv | lõpetatud • korraldatud | LABOT | lõpetatud • lahendatud | Teine vaste „korraldatud“ tähendab organiseeritud, mitte lõpetatud või lahendatud. |
| ET-B2-0026 | b2-abhören-49 | lv | kuulama • pealt kuulama | LABOT | pealt kuulama • salaja pealt kuulama | „Abhören“ tähendab sihipärast kuulamist või pealtkuulamist; üldine „kuulama“ on liiga lai. |
| ET-B2-0027 | b2-ableiten-50 | lv | juhtima • kõrvale juhtima • tuletama | LABOT | ära juhtima • kõrvale juhtima • tuletama | Esimene vaste „juhtima“ ei väljenda vedeliku või energia ärajuhtimise tähendust. |
| ET-B2-0028 | b2-Abnutzung-52 | lv | kulumine • amortiseerumine • kulu | LABOT | kulumine • amortiseerumine | „Kulu” tähendab eeskätt kulu või tarbimist, mitte kulumist ega amortiseerumist. |
| ET-B2-0029 | b2-Absatzmarkt-56 | lv | turustusturg | LABOT | müügiturg | „Müügiturg” on saksa Absatzmarkt loomulikum ja tavapärasem eestikeelne vaste. |
| ET-B2-0030 | b2-abtragen-71 | lv | ära kandma • kulutama (kandes) • lammutama | LABOT | ära kandma • kulutama • lammutama | Sulund „(kandes)” on ebaloomulik ja ei kuulu vaste tähendusse; „kulutama” katab kulumise tähenduse. |
| ET-B2-0031 | b2-affig-80 | lv | silmatorkav • edev | LABOT | afekteeritud • edvistav | „Affig” tähendab ebaloomulikult edvistavat või afekteeritud, mitte lihtsalt silmatorkavat. |
| ET-B2-0032 | b2-Anorak-87 | lv | kapuutsiga dressijakk | LABOT | kapuutsiga jope | „Dressijakk” tähendab spordidressi jakki; Anorak on üldisem kapuutsiga jope või tuulepluus. |
| ET-B2-0033 | b2-Aster-92 | lv | astra | LABOT | aster | Taime nimetus on eesti keeles „aster”; „astra” ei ole siin korrektne ainsuse nimetav kuju. |
| ET-B2-0034 | b2-Ausbeutung-96 | lv | ekspluatatsioon | LABOT | ekspluateerimine | Inimeste või ressursside ärakasutamise tähenduses on eesti keeles tavapärane „ekspluateerimine”. |
| ET-B2-0035 | b2-Äußerlichkeit-103 | lv | väline sära | LABOT | välisus • pealiskaudsus | „Väline sära” tähendab välist hiilgust, kuid Äußerlichkeit tähendab välisust või pealiskaudsust. |
| ET-B2-0036 | b2-Äußerung-104 | lv | väljendus • avaldumine • ilming | LABOT | väljendus • avaldus • ütlus | „Avaldumine” ja „ilming” ei tähenda tavaliselt inimese sõnalist väljendust või avaldust. |
| ET-B2-0037 | b2-aussetzen-105 | lv | eksponeerima • allutama • vastu vaidlema • astuma | LABOT | ohustama • allutama • vastu vaidlema • välja panema | „Eksponeerima” on peamiselt näitamiseks välja panema ning „astuma” ei anna neljandat tähendust edasi. |
| ET-B2-0038 | b2-aussichtslos-106 | lv | lootusetu • väljavaadeteta | LABOT | lootusetu • väljavaatetu | „Väljavaadeteta” ei ole loomulik eestikeelne vaste; tavapärane on „väljavaatetu”. |
| ET-B2-0039 | b2-ausstatten-108 | lv | varustama • vormistama | LABOT | varustama • sisustama | „Vormistama” tähendab dokumentide vormistamist, mitte millegi varustamist või sisustamist. |
| ET-B2-0040 | b2-austragen-112 | lv | kandma • kohale toimetama • välja võitlema | LABOT | laiali kandma • kohale toimetama • välja võitlema | Üksi „kandma” on esimese tähenduse jaoks liiga üldine; siin on mõte midagi laiali kanda või levitada. |
| ET-B2-0041 | b2-austreten-114 | lv | sisse tallama • maha tallama • välja astuma | LABOT | välja tallama • maha tallama • välja astuma | „Sisse tallama” tähendab millegi sisse või pinnasesse tallamist, mitte saksa austreten-vormi põhitähendust. |
| ET-B2-0042 | b2-auswärtig-115 | lv | välismaine • välisasjade | LABOT | välismaine • välisasjadega seotud | „Välisasjade” on üksinda genitiivne sõnaühendi osa, mitte loomulik iseseisev eestikeelne vaste. |
| ET-B2-0043 | b2-ausweisen-117 | lv | välja saatma • välja saatma • kinnitama • tõestama | LABOT | välja saatma • välja tõrjuma • kinnitama • tõestama | Kaks esimest vastet on identsed ega erista väljasaatmise ja väljatõrjumise tähendust. |
| ET-B2-0044 | b2-auszeichnen-120 | lv | autasustama • andma • silma paistma | LABOT | autasustama • esile tõstma • silma paistma | Üldine „andma” ei väljenda tähendust „millegi poolest eristama või esile tõstma”. |
| ET-B2-0045 | b2-Schwebebalken-123 | lv | tasakaalupulk | LABOT | võimlemispoom | Schwebebalken on võimlemises standardterminina „võimlemispoom”, mitte „tasakaalupulk”. |
| ET-B2-0046 | b2-Blutbank-125 | lv | verevaru | LABOT | verepank | „Verevaru” tähendab verevaru, kuid Blutbank on asutus või süsteem ehk „verepank”. |
| ET-B2-0047 | b2-Baugrube-142 | lv | ehituskraav | LABOT | ehituskaevik | Baugrube on ehituseks rajatud süvend või kaevik; „ehituskraav” seostub pigem pika kraaviga. |
| ET-B2-0048 | b2-bebauen-146 | lv | töötlema • hoonestama | LABOT | harima • hoonestama | Maa puhul tähendab bebauen eeskätt harima või hoonestama; „töötlema” on liiga üldine. |
| ET-B2-0049 | b2-befallen-148 | lv | peale tulema • ründama | LABOT | tabama • ründama | „Peale tulema” ei ole loomulik vaste tähendusele „kedagi tabama või kedagi vallutama”. |
| ET-B2-0050 | b2-beispiellos-163 | lv | enneolematu • nähtamatu • võrreldamatu | LABOT | enneolematu • enneolematu • võrreldamatu | „Nähtamatu” tähendab nähtamatut, mitte enneolematut või pretsedenditut. |
| ET-B2-0051 | b2-beistimmen-166 | lv | kaasa hääletama • toetama | LABOT | nõustuma • heaks kiitma | „Beistimmen” tähendab kellegagi nõustumist või millegi heakskiitmist, mitte kaasa hääletamist. |
| ET-B2-0052 | b2-Straßenbelag-174 | lv | tänavakate | LABOT | teekate | Tee või tänava pinnakatte tavapärane eestikeelne termin on „teekate”. |
| ET-B2-0053 | b2-belästigen-177 | lv | koormama • pealetükkivalt käituma • peale suruma | LABOT | häirima • tülitama • ahistama | „Belästigen” tähendab häirima, tülitama või ahistama; „koormama” tähendab pigem koormamist. |
| ET-B2-0054 | b2-beleibt-181 | lv | täidlane • priske • täielik | LABOT | täidlane • priske • tüse | „Täielik” tähendab complete/full, mitte inimest kirjeldavat tüsedat või kogukat. |
| ET-B2-0055 | b2-beredt-189 | lv | jutukas | LABOT | sõnaosav | „Beredt” tähendab väljendusrikast või sõnaosavat, „jutukas” aga peamiselt palju rääkivat. |
| ET-B2-0056 | b2-bergen-192 | lv | päästma • koristama saaki | LABOT | päästma • saaki koristama | Eestikeelne loomulikum sõnajärg on „saaki koristama”, mitte „koristama saaki”. |
| ET-B2-0057 | b2-beruhen-198 | lv | asutatama • põhinema | LABOT | põhinema | „Asutatama” tähendab asutamist või rajamist, mitte millelgi põhine mist. |
| ET-B2-0058 | b2-beschimpfen-203 | lv | sõimama • halvustama • laimama | LABOT | sõimama • halvustama • solvama | „Laimama” tähendab kellegi kohta laimava info levitamist, mitte otseselt sõimamist või solvamist. |
| ET-B2-0059 | b2-besessen-207 | lv | kinnisideeks muutunud • vaevatud • haaratud | LABOT | kinnisideest haaratud • vaevatud • haaratud | „Kinnisideeks muutunud” tähendab millekski kinnisideeks muutumist, mitte inimese kinnisideest haaratud olekut. |
| ET-B2-0060 | b2-besiedeln-208 | lv | elanikke ümber asustama | LABOT | asustama | „Besiedeln” tähendab ala asustama; „ümber asustama” lisab saksa verbis puuduva ümberasustamise tähenduse. |
| ET-B2-0061 | b2-bestürzt-218 | lv | üllatunud • segaduses • hämmingus | LABOT | vapustatud • segaduses • hämmeldunud | „Bestürzt” väljendab tugevat vapustust või kohkumist, mitte lihtsalt üllatust. |
| ET-B2-0062 | b2-beteuern-221 | lv | tõendama | LABOT | kinnitama | „Beteuern” tähendab millegi tungivalt või veendunult kinnitamist; „tõendama” tähendab tõestama. |
| ET-B2-0063 | b2-Betriebsrat-224 | lv | ettevõtte nõukogu | LABOT | töönõukogu | „Betriebsrat” on töötajate esindusorgan ehk töönõukogu, mitte ettevõtte juhtkonna või omanike nõukogu. |
| ET-B2-0064 | b2-Betrug-225 | lv | pettus • mahhineerimine • võltsing • kelmus | LABOT | pettus • petmine • kelmus | „Võltsing” tähendab võltsitud eset või dokumenti, mitte üldiselt pettust, mida „Betrug” tähistab. |
| ET-B2-0065 | b2-Beute-227 | lv | saak • võit • trofee | LABOT | saak • saagis • trofee | „Võit” tähendab eeskätt võitu, samas kui „Beute” tähendab saaki või röövsaaki. |
| ET-B2-0066 | b2-bewähren-229 | lv | kaitsma • ära kaitsma • hoidma • päästma | LABOT | ennast tõestama • end õigustama | Praegused vasted tähendavad kaitsmist või päästmist; „bewähren” tähendab end tõestama või ennast õigustama. |
| ET-B2-0067 | b2-bezähmen-237 | lv | nõiduma • lummama | LABOT | taltsutama • ohjeldama | Praegused vasted tähendavad nõidumist või lummamist; „bezähmen” tähendab taltsutama või ohjeldama. |
| ET-B2-0068 | b2-Binnenhandel-251 | lv | siseturg | LABOT | sisekaubandus | „Binnenhandel” tähendab sisekaubandust; „siseturg” tähendab siseturgu, mis on teine mõiste. |
| ET-B2-0069 | b2-Blutkonserve-274 | lv | konserveeritud veri | LABOT | verekonserv | Eesti keeles on selle meditsiinilise mõiste loomulik vaste „verekonserv“, mitte sõnasõnaline „konserveeritud veri“. |
| ET-B2-0070 | b2-Bodensatz-280 | lv | sete • pärme | LABOT | sete • pärm | Sõnavarakaardil peaks vaste olema algvormis; „pärme“ on partitiiv, samas kui mõiste vaste on „pärm“. |
| ET-B2-0071 | b2-Bootsmann-283 | lv | bootsman | LABOT | pootsman | Eestikeelne merendustermin on „pootsman“; kuju „bootsman“ ei vasta eesti õigekirjale. |
| ET-B2-0072 | b2-Borte-288 | lv | äärekivi | LABOT | ääris | „Äärekivi“ tähendab äärekivi või curb'i; Borte on dekoratiivne ääris, pael või kant. |
| ET-B2-0073 | b2-Brandschaden-292 | lv | tulekahjukahju | LABOT | tulekahju tekitatud kahju | „Tulekahjukahju“ on ebaloomulik ja tähenduslikult kohmakas liitsõna; mõte on tulekahju põhjustatud kahju. |
| ET-B2-0074 | b2-Brandanschlag-294 | lv | süütamine | LABOT | süütamisrünnak | „Süütamine“ tähendab tule süütamist, kuid Brandanschlag on sihilik süütamisrünnak või süütamisakt. |
| ET-B2-0075 | b2-Brandmal-295 | lv | põletus • põletusarm | LABOT | põletusjälg • põletusarm | Brandmal tähendab põletusjälge või -armi; „põletus“ üksi tähendab pigem põletust ennast. |
| ET-B2-0076 | b2-Brettsegeln-301 | lv | purjelaud | LABOT | purjelauasõit | „Purjelaud“ on vahend ehk laud; Brettsegeln tähistab purjelauasõitu ehk windsurfing'u harrastamist. |
| ET-B2-0077 | b2-bürgerlich-321 | lv | kodanlik • kodanike • kodanlik | LABOT | kodanlik • kodaniku- • kodanlik | Teine vaste „kodanike” on mitmuse omastav, mitte omadussõna või korrektne liitsõna tüvi. |
| ET-B2-0078 | b2-Datei-356 | lv | kartoteek | LABOT | fail | Saksa „Datei” tähendab arvutifaili; „kartoteek” tähendab kaartide või kirjete registrit. |
| ET-B2-0079 | b2-Datenträger-358 | lv | diskett | LABOT | andmekandja | Datenträger tähendab üldiselt andmekandjat, mitte ainult disketti. |
| ET-B2-0080 | b2-Dealer-361 | lv | nartkootikumide illegaalne müüja | LABOT | illegaalne narkootikumide müüja | Sõnas nartkootikumide on kirjaviga ning eestikeelne sõnajärg on ebaloomulik. |
| ET-B2-0081 | b2-dehnen-367 | lv | venitama • sirutama • venima • sirutuma • vinduma | LABOT | venitama • sirutama • venima • sirutuma | Vinduma tähendab virelema või vinduma, mitte venitama ega venima. |
| ET-B2-0082 | b2-dementieren-374 | lv | teavet tagasi kutsuma | LABOT | ümber lükkama • eitama | Dementieren tähendab väidet või teadet ümber lükkama, mitte teavet tagasi kutsuma. |
| ET-B2-0083 | b2-derartig-380 | lv | selline • samasugune | FALSE_POSITIVE |  | „samasugune“ on õige kirjapilt; audit PROPOSED oli identne CURRENT-iga. |
| ET-B2-0084 | b2-diejenige-397 | lv | nõnda | LABOT | see | Diejenige tähendab 'see (naissoost isik või asi)', mitte 'nõnda'. |
| ET-B2-0085 | b2-dingen-402 | lv | sõlmima kokkulepet | LABOT | palkama • tööle võtma | Dingen tähendab kellegi palkamist või tööle võtmist, mitte lihtsalt kokkuleppe sõlmimist. |
| ET-B2-0086 | b2-Dörrgemüse-421 | lv | kuivatatud juurviljad | LABOT | kuivatatud köögiviljad | Juurviljad tähendab eeskätt juurvilju, kuid saksa Gemüse hõlmab kõiki köögivilju. |
| ET-B2-0087 | b2-Dotterblume-428 | lv | tulikas | LABOT | kullerkupp | Dotterblume on kullerkupp; tulikas tähistab eesti keeles teist taime, võilillede sugukonna tulikat. |
| ET-B2-0088 | b2-Dragee-429 | lv | draažee | LABOT | dražee | Eesti kirjakeeles on sõna kuju „dražee“, mitte „draažee“. |
| ET-B2-0089 | b2-Drehung-439 | lv | pöörlemine • pöörde | LABOT | pöörlemine • pööre | Teine vaste peab olema nimetavas käändes; „pöörde“ on omastav vorm, mitte märksõna. |
| ET-B2-0090 | b2-Drossel-447 | lv | kuldnokk | LABOT | rästas | Drossel tähendab rästast; kuldnokk on teine linnuliik, starling. |
| ET-B2-0091 | b2-drosseln-448 | lv | kägistama • lämmatama | LABOT | kägistama • lämmatama • piirama | Lisaks lämmatamisele tähendab drosseln ka võimsuse, kiiruse või hulga vähendamist ja piiramist. |
| ET-B2-0092 | b2-Dunst-466 | lv | aur • aurud • eritis • ummehtus • udu • sudu | LABOT | aur • aurud • udu • sudu | „eritis” tähendab eritist või väljutist, mitte saksa „Dunsti” ehk auru või udu. |
| ET-B2-0093 | b2-durchbringen-471 | lv | läbi viima • välja kannatama • saavutama • välja ravima • raiskama | LABOT | läbi viima • läbi aitama • saavutama • välja ravima • raiskama | „durchbringen” tähendab kellegi või millegi läbi aitamist; „välja kannatama” tähendab taluma. |
| ET-B2-0094 | b2-durchmachen-479 | lv | üle elama • välja võtma • lõpetama | LABOT | üle elama • läbi tegema • lõpetama | „välja võtma” tähendab välja võtma, mitte millegi läbielamist või läbimist. |
| ET-B2-0095 | b2-durchsetzen-486 | lv | läbi viima • saavutama | LABOT | läbi suruma • saavutama | „durchsetzen” tähendab millegi läbisurumist või maksmapanekut; „läbi viima” tähendab ellu viima. |
| ET-B2-0096 | b2-Dürre-489 | lv | kuivus | LABOT | põud | „Dürre” tähendab põuda ehk pikaajalist sademete puudumist, mitte üldist kuivust. |
| ET-B2-0097 | b2-edel-497 | lv | õilis • ülev • aadlik | LABOT | õilis • ülev • aadellik | „aadlik” on nimisõna; omadussõnana on õige „aadellik”. |
| ET-B2-0098 | b2-Eheberatung-501 | lv | pereabi nõustamine | LABOT | abielunõustamine | „Eheberatung” tähendab abielu- või paarinõustamist; „pereabi nõustamine” on teise tähendusega. |
| ET-B2-0099 | b2-Eheschließung-504 | lv | abielu • laulumine | LABOT | abiellumine • laulatamine | „laulumine” tähendab laulmist; abielu sõlmimise tähenduses on õiged „abiellumine” ja „laulatamine”. |
| ET-B2-0100 | b2-ehren-505 | lv | austama • lugu pidama • auhindama | LABOT | austama • lugu pidama • au sees hoidma | „auhindama” tähendab auhinna andmist, mitte austamist või au sees hoidmist. |
| ET-B2-0101 | b2-ehrenamtlich-507 | lv | tasuta • auülesannet täites | LABOT | vabatahtlikult • auameti korras | „ehrenamtlich” tähendab vabatahtlikult või auameti korras, mitte lihtsalt tasuta. |
| ET-B2-0102 | b2-Ehrenpflicht-509 | lv | auülesanne | LABOT | aukohustus | Ehrenpflicht tähendab aukohustust; auülesanne viitab pigem aukohustuse asemel ülesandele. |
| ET-B2-0103 | b2-eigenhändig-524 | lv | isetehtud | LABOT | oma käega tehtud | Iset tehtud tähendab isetehtud või omavalmistatud; eigenhändig tähendab oma käega tehtud või isiklikult. |
| ET-B2-0104 | b2-einfassen-540 | lv | sisaldama • raamima • kinnitama | LABOT | ääristama • raamima • ehtesse kinnitama | Sisaldama tähendab sisaldama, mitte millegi ümber ääristamist; ehtetermin vajab täpsustust. |
| ET-B2-0105 | b2-einflussreich-541 | lv | mõjukas • muljetavaldav | LABOT | mõjukas | Muljetavaldav tähendab impressive, mitte mõjuvõimas; see on einflussreichi tähendusest erinev. |
| ET-B2-0106 | b2-einfrieren-543 | lv | külmutama • sisse külmutama • katkestama | LABOT | külmutama • peatama | Sisse külmutama on ebaloomulik otsetõlge; raha või tegevuse puhul kasutatakse külmutama või peatama. |
| ET-B2-0107 | b2-eingehend-550 | lv | põhjalik • pisiasjaline • sissetulev | LABOT | põhjalik • üksikasjalik • sissetulev | Pisiasjaline on selles tähenduses ebaloomulikum; tavapärane vaste on üksikasjalik. |
| ET-B2-0108 | b2-eingleisig-557 | lv | monorööpa- | LABOT | üherööpmeline | Monorööpa- tähendab monoraili ehk üherööpalist süsteemi; eingleisig tähendab ühe rööpapaariga või üherööpmelist. |
| ET-B2-0109 | b2-eingrenzen-558 | lv | piirama • eraldama | LABOT | piirama • piiritlema | „Eraldama” tähendab eraldamist, mitte tähenduse või ulatuse piiritlemist. |
| ET-B2-0110 | b2-Einigkeit-561 | lv | üksus • ühtsus • üksmeel | LABOT | ühtsus • üksmeel | „Üksus” tähendab eeskätt üksikut ühikut või struktuuriüksust, mitte üksmeelt või ühtsust. |
| ET-B2-0111 | b2-einleiten-566 | lv | sisestama | LABOT | sisse juhatama • algatama | „Einleiten” tähendab millegi alustamist või sissejuhatamist; „sisestama” tähendab andmete sisestamist. |
| ET-B2-0112 | b2-einliefern-568 | lv | sisse tooma • kohale tooma | LABOT | sisse andma • (haiglasse) toimetama | „Einliefern” tähendab inimese või saadetise asutusse üleandmist, sageli haiglasse toimetamist. |
| ET-B2-0113 | b2-einmachen-569 | lv | konserveerima • marineerima • keetma | LABOT | konserveerima • marineerima • moosiks keetma | Üldine „keetma” ei väljenda toidu säilitamiseks või moosiks valmistamist. |
| ET-B2-0114 | b2-einüben-589 | lv | õppima • lavastama | LABOT | harjutama • selgeks õppima | „Einüben” tähendab harjutamist või millegi selgeks õppimist; „lavastama” tähendab lavastuse loomist. |
| ET-B2-0115 | b2-eitel-605 | lv | auahne • ülbe • edev • pinnapealne • tühine • näidislik | LABOT | edev • ennasttäis • asjatu • tühine | „Auahne”, „ülbe”, „pinnapealne” ja „näidislik” ei vasta täpselt sõna põhitähendustele „edev” ja „asjatu”. |
| ET-B2-0116 | b2-entbehren-616 | lv | läbi ajama • kannatama • puuduma | LABOT | läbi ajama • ilma olema • puudust kannatama | „Puuduma” tähendab puudulik olema, mitte millestki ilma olema või ilma hakkama saama. |
| ET-B2-0117 | b2-entehren-619 | lv | au röövima • häbistama | LABOT | au teotama • häbistama | „Au röövima” ei ole loomulik ega täpne eesti väljend; tähendus on kellegi au teotama või häbistama. |
| ET-B2-0118 | b2-enterben-621 | lv | pärandit ära võtma | LABOT | pärandist ilma jätma | Tähendus on arusaadav, kuid loomulikum ja täpsem vaste on „pärandist ilma jätma”. |
| ET-B2-0119 | b2-entfallen-622 | lv | välja kukkuma • unustuma | LABOT | ära jääma • välja langema • ununema | „Välja kukkuma” tähendab füüsiliselt kukkumist ega vasta tavapärasele tähendusele „ära jääma” või „välja langema”. |
| ET-B2-0120 | b2-entfalten-623 | lv | lahti keerama • lahti voltima • arendama • laiendama | LABOT | lahti rullima • lahti voltima • arendama • laiendama | „Lahti keerama” tähendab pigem lahti kruvimist; „entfalten” tähendab lahti rullima või lahti voltima. |
| ET-B2-0121 | b2-sich entfalten-624 | lv | avanema • vabanema • arenema • laienema | LABOT | avanema • arenema • õitsele puhkema • välja kujunema | „Vabanema” tähendab vabaks saama, mitte arenema või oma potentsiaali avaldama. |
| ET-B2-0122 | b2-enthüllen-630 | lv | avastama • avama | LABOT | paljastama • avalikustama | „Avastama” tähendab midagi esimest korda leidma ning „avama” avamist; mõte on paljastada või avalikustada. |
| ET-B2-0123 | b2-entmutigen-637 | lv | julgust võtma | LABOT | julgust vähendama • heidutama | „Julgust võtma” tähendab julgust koguma, seega on tähendus vastupidine sõnale „entmutigen”. |
| ET-B2-0124 | b2-Entwerter-647 | lv | pilettempler | LABOT | piletikomposter | „Piletitempler” ei ole tavapärane eesti vaste; pileti kehtetuks tegemise seade on „piletikomposter”. |
| ET-B2-0125 | b2-Erachten-660 | lv | mõtted • arusaam | LABOT | arvamus • hinnang | „Erachten” tähendab arvamust või hinnangut, mitte üldiselt mõtteid või arusaama. |
| ET-B2-0126 | b2-Erbauer-662 | lv | kraana | LABOT | ehitaja • rajaja | „Kraana” tähendab tõsteseadet ega ole seotud ehitaja või rajajaga. |
| ET-B2-0127 | b2-erbrechen-664 | lv | lahti murdma • sisse murdma | LABOT | oksendama | Praegused vasted tähendavad lahti või sisse murdma; „erbrechen” tähendab oksendama. |
| ET-B2-0128 | b2-Erdrutsch-667 | lv | varing | LABOT | maalihe | „Varing” on üldine kokkuvarisemine; „Erdrutsch” täpne eesti vaste on „maalihe”. |
| ET-B2-0129 | b2-erlangen-682 | lv | ulatuma • saavutama • omandama | LABOT | saavutama • omandama • kätte saama | „Ulatuma” tähendab ulatuma või küündima, mitte millegi saavutamist või omandamist. |
| ET-B2-0130 | b2-Erlass-683 | lv | korraldus • käsk • dekreet • vallandamine | LABOT | korraldus • käsk • dekreet • võlast vabastamine | Erlass tähendab määrust või korraldust; „vallandamine” on siin eksitav tähendus. |
| ET-B2-0131 | b2-erlassen-684 | lv | väljastama • vallandama • vabastama | LABOT | välja andma • vabastama • maha kandma | Seaduse või võla kohta ei tähenda „erlassen” vallandamist; sobivad „välja andma” ja „maha kandma”. |
| ET-B2-0132 | b2-erleiden-687 | lv | kannatama • üle elama • saama alistatud | LABOT | kannatama • üle elama • lüüasaamist kannatama | „Saama alistatud” on ebaloomulik ning tähendab pigem aktiivset alistamist, mitte kaotuse kannatamist. |
| ET-B2-0133 | b2-Eröffnung-695 | lv | avamine • avastamine • postkaart • teadaanne • avastus | LABOT | avamine • pidulik avamine • avasõna | „Avastamine”, „postkaart” ja „avastus” tähendavad discovery või postcard, mitte avamist. |
| ET-B2-0134 | b2-Erreger-700 | lv | haigustekitaja • viirus | LABOT | haigustekitaja | „Erreger” on üldmõiste haigustekitaja kohta ega tähenda tingimata viirust. |
| ET-B2-0135 | b2-ersehen-709 | lv | nägema • märkama | LABOT | välja lugema • järeldama | „Etwas ersehen” tähendab kontekstist välja lugemist või järeldamist, mitte lihtsalt nägemist või märkamist. |
| ET-B2-0136 | b2-ertönen-716 | lv | kõlama hakkama | LABOT | kõlama • kostma | „Kõlama hakkama” lisab algamise tähenduse; ertönen tähendab heli kõlamist või kostmist. |
| ET-B2-0137 | b2-Fachabitur-746 | lv | lõpetatud kutseõpe | LABOT | erialane küpsustunnistus | Fachabitur on erialane kõrgkooli sisseastumise kvalifikatsioon, mitte lõpetatud kutseõpe. |
| ET-B2-0138 | b2-Fahrdamm-752 | lv | sõidutee • sillutis | LABOT | sõidutee | Fahrdamm tähendab sõiduteed, mitte üldiselt sillutist või teekattematerjali. |
| ET-B2-0139 | b2-fahrlässig-754 | lv | hooletu • pealiskaudne | LABOT | hooletu | Pealiskaudne tähendab „superficial” ega vasta saksa sõna tähendusele „hooletu/negligent”. |
| ET-B2-0140 | b2-Falke-755 | lv | kull | LABOT | pistrik | Kull tähendab eesti keeles hawk; Falke on pistrik ehk falcon. |
| ET-B2-0141 | b2-Faulbaum-771 | lv | toomingas | LABOT | paakspuu | Faulbaum on paakspuu; toomingas tähendab bird cherry ja on teine taim. |
| ET-B2-0142 | b2-Fessel-781 | lv | kett • ahelad | LABOT | kett • köidik | Teine vaste on mitmuses, kuigi saksa märksõna on ainsuses; „köidik” on täpsem ahela või köite vaste. |
| ET-B2-0143 | b2-Fetzen-786 | lv | räbalad | LABOT | räbal • ribad | Saksa märksõna on ainsuses; „räbalad” on ainult mitmus ja ei vasta märksõna põhivormile. |
| ET-B2-0144 | b2-fliederfarben-800 | lv | lilla värvi | LABOT | sirelililla | „Lilla värvi” on üldine purple, kuid „fliederfarben” tähendab täpsemalt sirelilillat ehk sireli värvi. |
| ET-B2-0145 | b2-Flussarm-811 | lv | hargjõgi | LABOT | jõeharu | „Hargjõgi” tähistab pigem harunenud jõge või jõeharu; saksa Flussarm täpne vaste on „jõeharu”. |
| ET-B2-0146 | b2-Flussbett-812 | lv | sängi (jõe) | LABOT | jõesäng | „Sängi” on käändevorm, mitte märksõna põhivorm; loomulik ja täpne vaste on liitsõna „jõesäng”. |
| ET-B2-0147 | b2-freilich-831 | lv | muidugi • kahtlemata • aga • ainult | LABOT | muidugi • kahtlemata • aga | Freilich tähendab siin „muidugi/kahtlemata” või vastandavat „aga”, mitte iseseisvalt „ainult”. |
| ET-B2-0148 | b2-freisprechen-834 | lv | õigustama | LABOT | õigeks mõistma | Õigustama tähendab põhjendama või õigustama; freisprechen tähendab süüdistatava õigeks mõistmist. |
| ET-B2-0149 | b2-fremdgehen-836 | lv | ebalojaalseks muutuma | LABOT | truudust murdma | Fremdgehen tähendab eelkõige suhtes truudusetu olema või abielu rikkuma, mitte üldiselt ebalojaalseks muutuma. |
| ET-B2-0150 | b2-friedfertig-837 | lv | rahumeelne • sallija | LABOT | rahumeelne • rahuarmastav | Sallija on salliv inimene; friedfertig tähendab rahumeelset või rahuarmastavat. |
| ET-B2-0151 | b2-fristlos-838 | lv | tähtajatu | LABOT | etteteatamistähtajata | Fristlos tähendab etteteatamistähtajata või ilma tähtajata lõpetamist, mitte üldiselt tähtajatut. |
| ET-B2-0152 | b2-Führernatur-847 | lv | liidritüüp • liider | LABOT | liidri loomus • juhivõimed | Führernatur tähistab juhi loomust või juhtimisomadusi, mitte lihtsalt liidrit ennast. |
| ET-B2-0153 | b2-Funkstation-851 | lv | saatejaam | LABOT | raadiojaam | Funkstation on raadiojaam või raadiosidejaam; saatejaam viitab pigem ringhäälingu edastusjaamale. |
| ET-B2-0154 | b2-Funkstörung-852 | lv | ülekandehäired | LABOT | raadiosidehäire | Funkstörung tähendab raadioside- või raadiohäiret; ülekandehäired on liiga üldine. |
| ET-B2-0155 | b2-Funktionär-854 | lv | aktivist • töötaja | LABOT | funktsionäär | Funktionär on ametnik või organisatsiooni funktsionäär, mitte üldiselt aktivist või töötaja. |
| ET-B2-0156 | b2-Furche-855 | lv | vagu • kortsujoon | LABOT | vagu • korts | Kortsujoon on ebaloomulik; Furche tähistab kortsu või vagu. |
| ET-B2-0157 | b2-gängig-863 | lv | käiv | LABOT | levinud • tavapärane | Gängig tähendab tavaliselt levinud, tavapärast või üldkasutatavat; käiv tähendab pigem töötavat või toimivat. |
| ET-B2-0158 | b2-Gasableser-870 | lv | gaasiarvesti | LABOT | gaasinäidu lugeja | Gasableser on gaasimõõtja näidu lugeja ehk inimene, mitte gaasiarvesti ise. |
| ET-B2-0159 | b2-gebrechlich-877 | lv | nõrk • kidur • vilets • vigane • vigadega | LABOT | nõrk • kidur • vilets • põdur | „Vigane” ja „vigadega” tähendavad defektset või vigadega, mitte füüsiliselt nõrka ja põdurat. |
| ET-B2-0160 | b2-gedeihen-880 | lv | hästi õnnestuma • õnnestuma • õitsema | LABOT | edenema • õitsema • hästi kasvama | „Gedeihen” tähendab edenemist ja head kasvamist; „õnnestuma” tähendab peamiselt õnnestumist. |
| ET-B2-0161 | b2-gedenken-881 | lv | kavatsema • meenutama • mainima | LABOT | kavatsema • meenutama • mälestama | „Mainima” tähendab mainimist, mitte kellegi või millegi mälestamist, mis on „gedenken” keskne tähendus. |
| ET-B2-0162 | b2-Gefährte-884 | lv | liige | LABOT | kaaslane • seltsiline | „Gefährte” tähendab kaaslast või seltsilist; „liige” tähendab organisatsiooni või rühma liiget. |
| ET-B2-0163 | b2-Gefallen-885 | lv | meeldivus | LABOT | meeldimine • heameel | „Gefallen” tähendab meeldimist või heameelt; „meeldivus” tähistab pigem meeldivat omadust. |
| ET-B2-0164 | b2-gefällig-886 | lv | meeldiv • teenistusvalmis • lahke | LABOT | meeldiv • vastutulelik • lahke | „Teenistusvalmis” tähendab teenistuseks valmis, mitte inimestele vastutulelikku või abivalmit. |
| ET-B2-0165 | b2-gelaunt-903 | lv | meeleolu | LABOT | meeleolus | Saksa „gelaunt” on omadussõna; „meeleolu” on nimisõna. Vastav eestikeelne omadussõnaline vaste on „meeleolus”. |
| ET-B2-0166 | b2-Geliebte-910 | lv | kallis • armastatud • lemmik | LABOT | armastatu (mees) • kallim | Meessoost nimisõnana tähendab „Geliebte” armastatut või kallimat; „lemmik” tähendab eeskätt lemmikut. |
| ET-B2-0167 | b2-Gemisch-918 | lv | segu • segamini • kokteil | LABOT | segu • segum • kokteil | „Segamini” on määrsõna või omadussõna, kuid saksa „Gemisch” ja teised vasted on nimisõnad. |
| ET-B2-0168 | b2-Gemüt-920 | lv | iseloom • loomus • mõtted | LABOT | meel • loomus • iseloom | „Gemüt” viitab inimese sisemisele loomusele või meelelaadile, mitte otseselt tema mõtetele. |
| ET-B2-0169 | b2-geraten-935 | lv | sattuma • jõudma • alistuma • õnnestuma • loobuma | LABOT | sattuma • õnnestuma | „alistuma” ja „loobuma” tähendavad alistumist ja loobumist, mitte saksa verbi geraten põhitähendusi. |
| ET-B2-0170 | b2-Geratewohl-936 | lv | hea õnn | LABOT | juhus | Geratewohl tähendab juhuslikkust või juhuse hooleks jätmist, mitte lihtsalt head õnne. |
| ET-B2-0171 | b2-Gerede-938 | lv | jutt • kõned • kuulujutud | LABOT | jutt • lobisemine • kuulujutud | „kõned” tähendab kõnesid või telefonikõnesid, mitte Gerede tähenduses lobisemist ega tühja juttu. |
| ET-B2-0172 | b2-Gerippe-940 | lv | luukere • korjus • karkass | LABOT | luukere • karkass | „korjus” tähendab surnud looma või inimese keha, mitte luustikku ega karkassi. |
| ET-B2-0173 | b2-Gesamtzahl-942 | lv | kogusumma | LABOT | koguarv | Gesamtzahl tähendab koguarvu ehk elementide koguhulka; „kogusumma” viitab summaarsele väärtusele. |
| ET-B2-0174 | b2-Geschwätz-950 | lv | lobisemine • valetamine • lobajutt | LABOT | lobisemine • tühi jutt • lobajutt | Geschwätz on lobisemine või tühi jutt; „valetamine” tähendab teadlikult ebatõe rääkimist. |
| ET-B2-0175 | b2-Gesinnung-958 | lv | vaated • meeleolu | LABOT | vaated • hoiak | Gesinnung tähendab inimese hoiakuid, veendumusi või maailmavaadet; „meeleolu” tähendab emotsionaalset tuju. |
| ET-B2-0176 | b2-Gestein-964 | lv | kaljurahn | LABOT | kivim | Gestein tähendab kivimit või kivimainet; „kaljurahn” on üksik suur kivimürakas. |
| ET-B2-0177 | b2-getüpfelt-969 | lv | punktiirjooneline | LABOT | täpiline | Getüpfelt tähendab täpilist või täppidega kaetud; „punktiirjooneline” kirjeldab katkendlikku joont. |
| ET-B2-0178 | b2-Gewässer-975 | lv | veed | LABOT | veekogu | Gewässer tähistab veekogu või veekogusid; „veed” on selles tähenduses liiga üldine ja vähem loomulik. |
| ET-B2-0179 | b2-gewieft-978 | lv | karastunud • kaval | LABOT | kaval • nutikas | Gewieft tähendab kavalat, nutikat või elukogenult osavat; „karastunud” tähendab pigem sitkeks muutunud või väljaõppinud. |
| ET-B2-0180 | b2-Gewissheit-980 | lv | selgus • kindlus | LABOT | kindlus • veendumus | „Selgus“ tähendab eeskätt clarity, mitte certainty; „kindlus“ ja „veendumus“ vastavad saksa sõnale täpsemalt. |
| ET-B2-0181 | b2-Gezeiten-981 | lv | tõus-mõõn | LABOT | tõus ja mõõn | Eesti keeles kasutatakse selle nähtuse nimetuses loomulikult ühendit „tõus ja mõõn“, mitte sellist sidekriipsuga kuju. |
| ET-B2-0182 | b2-Gipsverband-989 | lv | gipsplaastr | LABOT | kipsiside | „Gipsplaastr“ tähendab pigem kipsplaastrit; „Gipsverband“ on kipsiside või kipslahas. |
| ET-B2-0183 | b2-Glatze-995 | lv | paljas peanahk | LABOT | kiilaspäisus | „Paljas peanahk“ kirjeldab nähtavat peanahka, kuid „Glatze“ tähendab kiilaspäisust või kiilast pead. |
| ET-B2-0184 | b2-Stirnglatze-996 | lv | avatud laup | LABOT | otsmiku kiilaspäisus | „Avatud laup“ ei tähenda kiilaspäisust; sõna viitab juuksepiiri taandumisele või kiilaspäisusele otsmikul. |
| ET-B2-0185 | b2-Gleichnis-998 | lv | sarnasus | LABOT | tähendamissõna • võrdum | „Sarnasus“ tähendab similarity; „Gleichnis“ on tähendamissõna või võrdum. |
| ET-B2-0186 | b2-gleiten-999 | lv | libisema • planeerima | LABOT | libisema • liuglema | „Planeerima“ tähendab planning; liikumist õhus või pinnal tähistab siin „liuglema“. |
| ET-B2-0187 | b2-gliedern-1001 | lv | jagama | LABOT | liigendama • jaotama | „Gliedern“ tähendab millegi liigendamist või struktureerimist; „jagama“ on liiga üldine ega anna seda tähendust täpselt edasi. |
| ET-B2-0188 | b2-gnädig-1008 | lv | armulik • austatud | LABOT | armuline • halastav | „Austatud“ tähendab respected, mitte gracious või merciful; teine vaste muudab tähenduse ebatäpseks. |
| ET-B2-0189 | b2-grauen-1022 | lv | kuduma | LABOT | koitma | „Kuduma“ tähendab weaving; „grauen“ tähenduses dawn on eesti keeles „koitma“. |
| ET-B2-0190 | b2-Grußwort-1041 | lv | lühike ametlik kõne | LABOT | tervituskõne | Tõlge tähendab üldist lühikest ametlikku kõnet ega anna edasi tervituse või tervituskõne tähendust. |
| ET-B2-0191 | b2-Günstling-1044 | lv | lemmik • soositav | LABOT | lemmik • soosik | Soositav on omadussõna; Günstling on nimisõna inimese kohta, keda mõjukas isik soosib. |
| ET-B2-0192 | b2-gurgeln-1045 | lv | kurku • suud loputama | LABOT | kuristama • suud loputama | Kurku on siinses tõlkes vigane sõnaühendi fragment; saksa verb tähendab kuristama. |
| ET-B2-0193 | b2-Güte-1048 | lv | heasüdamlikkus • kvaliteet • kasu | LABOT | heasüdamlikkus • kvaliteet | Kasu tähendab benefit/profit, mitte Güte tähendustena headus, heatahtlikkus või kvaliteet. |
| ET-B2-0194 | b2-haaren-1053 | lv | sulgima (lindudel) | LABOT | karva ajama • sulgima | Praegune tõlge piirdub lindude sulgimisega; haaren tähendab üldiselt karvade või sulgede eraldumist. |
| ET-B2-0195 | b2-Hängebrücke-1062 | lv | vantsild | LABOT | rippsild | Vantsild on tross-sild ehk cable-stayed bridge; Hängebrücke on ripp- ehk suspension bridge. |
| ET-B2-0196 | b2-Hängsel-1063 | lv | õmmeldud riidepuu | LABOT | õmmeldud riputusaas | Riidepuu tähendab clothes hanger; Hängsel on rõivale õmmeldud riputusaas või aas. |
| ET-B2-0197 | b2-Harsch-1067 | lv | hangelumi | LABOT | lumekoorik | Harsch tähendab külmunud kõva lumekoorikut; hangelumi on tuule kuhjatud või hanges olev lumi. |
| ET-B2-0198 | b2-Haushaltung-1071 | lv | majapidamisõpetus | LABOT | majapidamine | Majapidamisõpetus tähendab kodundusõpetust kui õppeainet; Haushaltung tähendab majapidamist või majapidamise korraldamist. |
| ET-B2-0199 | b2-Heilkunde-1081 | lv | ravi • meditsiin | LABOT | arstiteadus • meditsiin | Ravi tähendab treatment; Heilkunde viitab ravikunstile või meditsiiniteadusele kui valdkonnale. |
| ET-B2-0200 | b2-Heimkehr-1086 | lv | koju • kodumaale naasmine | LABOT | kojutulek • kodumaale naasmine | „Koju” tähendab suunda „koju”, mitte tagasipöördumist kui nimisõna. |
| ET-B2-0201 | b2-Heimwerker-1087 | lv | kodune käsitööline | LABOT | kodumeister | „Kodune käsitööline” viitab pigem kodus käsitöö tegijale; Heimwerker on kodumeister või isetegija. |
| ET-B2-0202 | b2-Hemmung-1092 | lv | takistus • viivitus | LABOT | takistus • pidurdus | „Viivitus” tähendab viivitust, kuid Hemmung tähendab siin pidurdust, tõrget või pärssimist. |
| ET-B2-0203 | b2-hingeben-1118 | lv | ära andma • laenuks andma | LABOT | ära andma • pühenduma | „Laenuks andma” tähendab välja laenama, kuid hingeben tähendab ka end millelegi pühendama või ohverdama. |
| ET-B2-0204 | b2-Hinsicht-1121 | lv | teade | LABOT | aspekt • seisukoht | „Teade” tähendab sõnumit või teadet ega vasta Hinsicht tähendustele „aspekt” ja „seisukoht”. |
| ET-B2-0205 | b2-Hinterhalt-1124 | lv | peidik | LABOT | varitsus | Hinterhalt on varitsus või varitsusrünnak; „peidik” tähendab peidupaika. |
| ET-B2-0206 | b2-hinterziehen-1125 | lv | raha omastama • makse mitte tasuma | LABOT | raha omastama • maksudest kõrvale hoidma | Maksudest kõrvalehoidmine on tahtlik maksupettus, mitte lihtsalt maksete tasumata jätmine. |
| ET-B2-0207 | b2-hitzig-1131 | lv | kuum • õhin • järsk • kiiresti vihastuv | LABOT | kuum • tuline • äge • kiiresti vihastuv | „Õhin” on nimisõna ega sobi omadussõnana; hitzig tähendab ka tulist või ägedat. |
| ET-B2-0208 | b2-hochwertig-1146 | lv | kõrgväärtuslik | LABOT | kvaliteetne | Tähendab eeskätt kvaliteetset või kõrgeklassilist, mitte lihtsalt kõrge väärtusega eset. |
| ET-B2-0209 | b2-holpern-1150 | lv | raputama • vappuma | LABOT | hüplema • rappuma | Holpern kirjeldab konarlikul pinnal hüplevat või rappuvat liikumist; raputama on enamasti transitiivne. |
| ET-B2-0210 | b2-in flagranti-1158 | lv | tabama keelatud teo pealt | LABOT | teolt tabama | Eestikeelne püsiühend on „teolt tabama“; „keelatud teo pealt“ on ebaloomulik ja liiga sõnasõnaline. |
| ET-B2-0211 | b2-Kapazität-1168 | lv | tootlikkus • võimsus • maht | LABOT | mahutavus • võimsus • suutlikkus | Tootlikkus tähendab produktiivsust, mitte tavaliselt võimekust või maksimaalset mahutavust. |
| ET-B2-0212 | b2-Karrierefrau-1174 | lv | karjääri tegev naine | LABOT | karjäärinaine | „Karjäärinaine“ on loomulik ja levinud vaste; praegune väljend on kohmakas. |
| ET-B2-0213 | b2-Kaufkraft-1175 | lv | raha • ka isiku ostujõud | LABOT | ostujõud | Kaufkraft tähendab ostujõudu, mitte raha; praegune esimene vaste on tähenduselt vale. |
| ET-B2-0214 | b2-Konsequenz-1192 | lv | järjekindlus • järjekord • järeldus • tagajärg | LABOT | järjekindlus • järeldus • tagajärg | „Järjekord” tähendab järjestust, mitte Konsequenz tähendust; ülejäänud vasted on sobivad. |
| ET-B2-0215 | b2-korrumpieren-1199 | lv | altkäemaksu andma | LABOT | ära ostma • korrumpeerima | Praegune vaste tähendab altkäemaksu andmist; korrumpieren tähendab kellegi äraostmist või korrumpeerimist. |
| ET-B2-0216 | b2-korrupt-1200 | lv | ostetav • altkäemaksuga mõjutatav | LABOT | korruptne • äraostetav | Praegused vasted tähendavad peamiselt äraostetavat, kuid korrupt hõlmab ka otseselt korrumpeerunud tähendust. |
| ET-B2-0217 | b2-Laie-1205 | lv | diletant | LABOT | võhik • asjaarmastaja | Laie tähendab mittespetsialisti või võhikut; „diletant” viitab pigem asjaarmastajale ja võib olla halvustav. |
| ET-B2-0218 | b2-Laufwerk-1222 | lv | mootor • ajav jõud | LABOT | mootor • ajam | „Ajav jõud” tähendab edasiviivat jõudu; Laufwerk tähendab tehnilist ajamit või mehhanismi. |
| ET-B2-0219 | b2-Lehrstuhl-1228 | lv | katedra | LABOT | õppetool | Ülikooli Lehrstuhl on õppetool või professuur; „katedra” tähendab pigem õppe- või teadusüksust. |
| ET-B2-0220 | b2-Leichenhalle-1231 | lv | kabel kalmistul | LABOT | surnukuur | Leichenhalle tähendab surnukuuri või surnusaali, mitte kalmistul asuvat kabelit. |
| ET-B2-0221 | b2-lispeln-1250 | lv | sosistama • pudistama | LABOT | susistama • pudistama | „Sosistama” tähendab sosistamist; „susistama” tähistab kõnelemist susistades ehk š-iga. |
| ET-B2-0222 | b2-Marssonde-1289 | lv | Marsi-sond | LABOT | Marsisond | Estoniakeelne liitsõna kirjutatakse kokku; sidekriips on siin põhjendamatu. |
| ET-B2-0223 | b2-maßlos-1296 | lv | mõõtmatu • lõputu | LABOT | mõõdutundetu • piiritu | Tähendus on pigem mõõdutundetu või ülemäärane, mitte sõna-sõnalt mõõtmatu või lõputu. |
| ET-B2-0224 | b2-Meerenge-1301 | lv | merekitsus | LABOT | väin | Meerenge tähendab eesti keeles standardterminina väina; „merekitsus” ei ole loomulik vaste. |
| ET-B2-0225 | b2-menschenscheu-1307 | lv | ebasotsiaalne • arg | LABOT | inimpelglik • inimestest hoiduv | „Arg” tähendab kartlikku või julgetut, mitte inimestest hoiduvat; põhitähendus on inimpelglik. |
| ET-B2-0226 | b2-Milbe-1313 | lv | puuk | LABOT | lest | Milbe on lest; „puuk” tähendab puuki ehk teistsugust ämblikulaadset. |
| ET-B2-0227 | b2-militärfrei-1319 | lv | ajateenistuskõlbmatu | LABOT | ajateenistusest vabastatud | „Militärfrei” tähendab sõjaväeteenistusest vabastatut, mitte tingimata ajateenistuseks kõlbmatut. |
| ET-B2-0228 | b2-minderwertig-1322 | lv | vähene väärtusega | LABOT | väheväärtuslik | Praeguses vastes on käändeviga: „vähene väärtusega” ei ole korrektne ega loomulik eesti väljend. |
| ET-B2-0229 | b2-Müllentsorgung-1339 | lv | jäätmete hävitamine | LABOT | jäätmete kõrvaldamine | Entsorgung tähendab jäätmete kõrvaldamist või käitlemist, mitte tingimata nende hävitamist. |
| ET-B2-0230 | b2-namens-1361 | lv | eesnimeliselt • perekonnanimeliselt | LABOT | nimel • nimega | namens tähendab üldiselt „nimel” või „nimega”, mitte tingimata ees- ja perekonnanime järgi. |
| ET-B2-0231 | b2-Nesselfieber-1372 | lv | nõgesvõrk (haigus) | LABOT | nõgestõbi | Nesselfieber on eesti keeles „nõgestõbi” või „urtikaaria”; „nõgesvõrk” ei tähista seda haigust. |
| ET-B2-0232 | b2-neuerdings-1374 | lv | hiljuti • neil päevil • uuesti | LABOT | hiljuti • neil päevil • viimasel ajal | „uuesti” tähendab „again”, kuid neuerdings tähendab „hiljuti” või „viimasel ajal”. |
| ET-B2-0233 | b2-Niederschlag-1383 | lv | sademed | LABOT | sademed • sete | Niederschlag tähendab nii sademeid kui ka ladestist; „sademed” jätab teise põhitähenduse välja. |
| ET-B2-0234 | b2-Nutzeffekt-1391 | lv | kasuteguri koefitsient | LABOT | kasutegur | „Kasuteguri koefitsient” on eesti keeles tarbetult kordav; Nutzeffekt vastab terminile „kasutegur”. |
| ET-B2-0235 | b2-Nutzholz-1392 | lv | kasutusmets | LABOT | tarbepuit | „Kasutusmets“ tähendab kasutamiseks majandatavat metsa, mitte kasutuseks mõeldud puitu ehk tarbepuitu. |
| ET-B2-0236 | b2-Ölbohrung-1404 | lv | naftapuurauk | LABOT | naftapuurimine | „Naftapuurauk“ tähendab naftakaevu või puurauku; „Ölbohrung“ tähistab nafta puurimist kui tegevust. |
| ET-B2-0237 | b2-Ölgewinnung-1405 | lv | naftatootmine | LABOT | nafta ammutamine | „Ölgewinnung“ tähendab nafta ammutamist või ekstraheerimist, mitte üldiselt naftatootmist. |
| ET-B2-0238 | b2-Ölpest-1407 | lv | vee ja ranniku naftareostus | LABOT | naftareostus vees ja rannikul | Praegune liitsõnaline väljend on ebaloomulik; tähendus on selgem kujul „naftareostus vees ja rannikul“. |
| ET-B2-0239 | b2-Operator-1410 | lv | suurarvutite hooldusspetsialist | LABOT | operaator | Saksa „Operator“ on üldine operaator või seadme juht; praegune vaste piirab tähenduse ainult suurarvutite hooldajaks. |
| ET-B2-0240 | b2-Pachtvertrag-1423 | lv | üürileping | LABOT | rendileping | „Pachtvertrag“ on eelkõige rendileping, eriti maa või ettevõtte kasutusse andmisel; „üürileping“ tähendab tavaliselt üürisuhet. |
| ET-B2-0241 | b2-pachten-1424 | lv | üürima | LABOT | rentima | „Pachten“ tähendab maa, talu või ettevõtte rentimist; eesti keeles on selle täpsem vaste „rentima“. |
| ET-B2-0242 | b2-Pendelverkehr-1439 | lv | kohalik eeslinnaliiklus | LABOT | pendelliiklus | „Pendelverkehr“ tähendab regulaarset edasi-tagasi või shuttle-liiklust, mitte lihtsalt kohalikku eeslinnaliiklust. |
| ET-B2-0243 | b2-Pfandschein-1445 | lv | pandimärk | LABOT | pandipilet | Pfandschein tähendab pandipiletit ehk pandimaja väljastatud tõendit; „pandimärk“ tähistab pigem pandi märgistust. |
| ET-B2-0244 | b2-Pilotstudie-1455 | lv | uurimissarja sissejuhatus | LABOT | pilootuuring | Pilotstudie on pilootuuring, mitte uurimissarja sissejuhatus. |
| ET-B2-0245 | b2-Possen-1462 | lv | farss • naljamäng • jäme nali | LABOT | jäme nali • tembutus | „Der Possen“ tähendab üksikut jämedat nalja või tembutust, mitte farsši või naljamängu. |
| ET-B2-0246 | b2-prägnant-1465 | lv | eredalt väljendunud | LABOT | tabav • lühidalt ja selgelt väljendatud | Prägnant tähendab eelkõige tabavat, lühikest ja selget väljendust; „eredalt väljendunud“ ei kata seda tähendust. |
| ET-B2-0247 | b2-quittieren-1484 | lv | vastuvõtmist allkirjastama | LABOT | kättesaamist kinnitama | „Kättesaamist kinnitama“ on loomulikum ja katab saksa verbi tähenduse; praegune ühend on ebaloomulik. |
| ET-B2-0248 | b2-ranzig-1492 | lv | hallitanud maitsega • kibedavõitu (koore, rasva, või kohta) | LABOT | rääsunud • kibedavõitu (koore, rasva ja või kohta) | Ranzig tähendab rääsunud, mitte hallitanud; esimene vaste annab toidu riknemise kohta teise tähenduse. |
| ET-B2-0249 | b2-Regenfront-1512 | lv | vihmavöönd | LABOT | vihmafront | Regenfront tähendab meteoroloogilist vihmafronti; „vihmavöönd“ tähendab pigem vihmariba või -ala. |
| ET-B2-0250 | b2-relevant-1519 | lv | märkimisväärne • tähtis | LABOT | asjakohane • tähtis | „Märkimisväärne“ tähendab tähelepanuväärset, mitte tingimata asjakohast või relevantset. |
| ET-B2-0251 | b2-rücksichtslos-1532 | lv | hooletu • jäme • armutu | LABOT | hoolimatu • jäme • armutu | „Hooletu“ tähendab careless/negligent; rücksichtslos on eelkõige hoolimatu või teistega mittearvestav. |
| ET-B2-0252 | b2-rückständig-1533 | lv | hilinenud • maksega viivituses | LABOT | mahajäänud • maksetega võlgnevuses | „Hilinenud“ tähendab hiljaks jäänud, mitte mahajäänud; teine vaste vajab loomulikumat ja täpsemat sõnastust. |
| ET-B2-0253 | b2-sächlich-1544 | lv | gram. neutraalne sugu | LABOT | gram. kesksugu | Grammatilise termini „neuter“ eestikeelne vaste on „kesksugu“, mitte „neutraalne sugu“. |
| ET-B2-0254 | b2-Sandbank-1548 | lv | madalik | LABOT | liivamadal | „Madalaik” on liiga üldine; Sandbank tähendab konkreetselt liivamadalat või liivast leetseljakut. |
| ET-B2-0255 | b2-Satellit-1551 | lv | poliitiline satelliit • astr. kaaslane | LABOT | poliitiline satelliit • astronoomiline satelliit | Astronoomiline „kaaslane” ei ole siin piisavalt täpne ega loomulik vaste sõnale Satellit. |
| ET-B2-0256 | b2-Schadenersatz-1556 | lv | materiaalne hüvitis kahju eest | LABOT | kahjuhüvitis | Praegune väljend on arusaadav, kuid eesti õiguskeeles on loomulik ja täpne termin „kahjuhüvitis”. |
| ET-B2-0257 | b2-Schaffen-1558 | lv | looming • teos • tegevus • loomine | LABOT | looming • loometöö • tegevus • loomine | „Teos” tähendab üksikut loodud kunstiteost, Schaffen aga loomingulist tegevust või loometööd. |
| ET-B2-0258 | b2-Scheitel-1571 | lv | juuksejoon • lagi (pea) | LABOT | juukselahk • pealagi | „Juuksejoon” tähendab juuste piirjoont ehk juuksepiiri, mitte lahku või pealae keskosa. |
| ET-B2-0259 | b2-scheitern-1572 | lv | ebaõnnestuma • lagunema | LABOT | ebaõnnestuma • luhtuma | „Lagunema” tähendab füüsiliselt koost lagunemist; scheitern teises tähenduses tähendab nurjumist või luhtumist. |
| ET-B2-0260 | b2-Schieber-1577 | lv | riiv • polt • spekulant | LABOT | riiv • siiber • spekulant | „Polt” tähendab polti, Schieber tehnilises tähenduses aga siibrit või liugklappi. |
| ET-B2-0261 | b2-schlafwandeln-1583 | lv | olema unerändaja | LABOT | unes kõndima | Praegune vaste tähendab „olema unerändaja”, mitte tegevust „unes kõndima” ehk somnambuulselt kõndima. |
| ET-B2-0262 | b2-Schmuggel-1596 | lv | salakaup | LABOT | salakaubandus | Salakaup tähendab smugeldatud kaupa; Schmuggel tähendab salakaubandust või smugeldamist. |
| ET-B2-0263 | b2-Schnappschuss-1597 | lv | hetkevõte fotol | LABOT | hetktõmmis | Hetkevõte fotol on arusaadav, kuid standardsem ja loomulikum vaste on hetktõmmis. |
| ET-B2-0264 | b2-Bittschrift-1602 | lv | palve | LABOT | palvekiri | Bittschrift on ametlik kirjalik palve või avaldus, mitte religioosne palve. |
| ET-B2-0265 | b2-schrill-1603 | lv | kimeda • lõikav | LABOT | kime • lõikav | Kimeda on sõna kimeda käändevorm; omadussõna märksõnavorm on kime. |
| ET-B2-0266 | b2-schroff-1604 | lv | järsk • kalju • karm • terav • ebasõbralik | LABOT | järsk • karm • terav • ebasõbralik | Kalju on nimisõna ega tähenda siin schroff’i omadust; järsk katab tähenduse paremini. |
| ET-B2-0267 | b2-Schuldschein-1606 | lv | võlakiri | LABOT | võlatunnistus | Schuldschein on võlatunnistus või võlakohustuse dokument, mitte vabalt kaubeldav võlakiri. |
| ET-B2-0268 | b2-Schwarm-1612 | lv | kirg • vaimustus | LABOT | parv • sülem | Schwarm tähendab parve või sülemit; kirg ja vaimustus kirjeldavad pigem schwärmen tähendust. |
| ET-B2-0269 | b2-Schwarze-1615 | lv | tumedanahaline inimene | LABOT | mustanahaline inimene | Tumedanahaline tähendab üldiselt tumeda nahaga inimest; Schwarze viitab mustanahalisele inimesele. |
| ET-B2-0270 | b2-Schwerathletik-1620 | lv | sp. tõstespordid | LABOT | raskejõustik | Schwerathletik hõlmab raskejõustikku laiemalt; tõstespordid on liiga kitsas ja mitmuses. |
| ET-B2-0271 | b2-Seenot-1624 | lv | avariiolukord merel | LABOT | hädaseisund merel | Seenot tähendab merehäda või hädaseisundit merel, mitte ainult avariiolukorda. |
| ET-B2-0272 | b2-Naturseide-1629 | lv | loomulik siid | LABOT | looduslik siid | Materjali puhul on loomulikum ja täpsem omadussõna looduslik, mitte loomulik. |
| ET-B2-0273 | b2-Selbstgefühl-1631 | lv | enesekindlus | LABOT | eneseväärtustunne | Selbstgefühl tähendab eneseväärtuse või enesetaju tunnet; enesekindlus on confidence. |
| ET-B2-0274 | b2-Sonderausgabe-1656 | lv | raamatu erilaadumine • ajalehe erinumber • margi eriväljalase | LABOT | raamatu eriväljaanne • ajalehe erinumber • margi eriväljaanne | „Erilaadumine” ei tähenda eriväljaannet; esimene vaste on väär ning „eriväljalase” on siin ebaloomulik. |
| ET-B2-0275 | b2-Sorgenkind-1660 | lv | hoolealune laps | LABOT | murelaps | „Hoolealune laps” tähendab hooldusel olevat last, mitte murettekitavat või muret põhjustavat last. |
| ET-B2-0276 | b2-spärlich-1666 | lv | tühine • ihne • harv | LABOT | napp • hõre • vähene | „Ihne” tähendab kitsi, mitte vähest või kasinat; „tühine” ei kata hästi tähendust „spärlich”. |
| ET-B2-0277 | b2-Stahlwerk-1692 | lv | terasevalukoda | LABOT | terasetehas | „Terasevalukoda” tähendab terase valamise tehast ehk valukoda; „Stahlwerk” on üldisem terasetehas või terasetehas-kompleks. |
| ET-B2-0278 | b2-Strafanzeige-1705 | lv | kriminaalasja algatamine kellegi vastu | LABOT | kuriteoteade | Tähendab kriminaalasja algatamist, mitte kuriteoteadet või politseile esitatud avaldust. |
| ET-B2-0279 | b2-streitbar-1708 | lv | tülinorija | LABOT | tülivõimeline | Praegune vaste on nimisõna „tülinorija“, kuid saksa märksõna on omadussõna. |
| ET-B2-0280 | b2-Streitkräfte-1709 | lv | riigi kõik sõjalised organisatsioonid ja väed | LABOT | relvajõud | Saksa sõna tavapärane ja täpne eesti vaste on „relvajõud“; praegune on kohmakas ümberütlus. |
| ET-B2-0281 | b2-Tagebau-1721 | lv | maavarade karjääripõline kaevandamine | LABOT | pealmaakaevandamine | Praegune liitsõnaühend on ebaloomulik; „pealmaakaevandamine“ on tavapärane vaste. |
| ET-B2-0282 | b2-Töpferscheibe-1736 | lv | pottsepakäi | LABOT | potikeder | Töpferscheibe tähendab eesti keeles „potikeder“; „pottsepakäi“ ei ole selle tähenduse tavapärane vaste. |
| ET-B2-0283 | b2-treuherzig-1750 | lv | südamlik | LABOT | siiras ja lihtsameelne | Südamlik tähendab peamiselt sooja ja südamlikku; treuherzig rõhutab siirust ja lihtsameelset usaldavust. |
| ET-B2-0284 | b2-Triumphzug-1754 | lv | triumfirong | LABOT | võidurongkäik | Triumfirong on ebaloomulik ja võib tähendada triumfirongi; mõeldud on võidukat rongkäiku. |
| ET-B2-0285 | b2-überhören-1769 | lv | hooletusest mitte kuulma • end mitte kuulvana teesklema | LABOT | tähelepanematusest kuulmata jätma • kuulmatust teesklema | Teine vaste on grammatikavigane; kuulvana tähendab kuuluvana, mitte kuulmist teeseldes. |
| ET-B2-0286 | b2-überlassen-1770 | lv | jätma kellegi otsustada • käsutusse jätma • valikut lubama | LABOT | kellegi otsustada jätma • käsutusse jätma • valida laskma | Valikut lubama on ebaloomulik; loomulikum vaste on valida laskma. |
| ET-B2-0287 | b2-Übermüdung-1774 | lv | ülekurnatus | LABOT | üleväsimus | Ülekurnatus ei ole selles tähenduses loomulik ega tavapärane vaste; Übermüdung tähendab üleväsimust. |
| ET-B2-0288 | b2-überschätzen-1775 | lv | ümber hindama | LABOT | üle hindama | Ümber hindama tähendab uuesti hindama või ümber hindama; üle hindama tähendab millegi väärtust liiga suureks pidama. |
| ET-B2-0289 | b2-überschreiten-1776 | lv | üle minema • rikkuma | LABOT | ületama • seadust rikkuma | Üle minema on siin liiga ebatäpne ning rikkuma vajab seaduse konteksti. |
| ET-B2-0290 | b2-umdenken-1787 | lv | arvamust olukorrast sõltuvalt muutma | LABOT | ümber mõtlema | Umdenken tähendab oma mõtteviisi või seisukoha muutmist, mitte tingimata olukorrast sõltuvat arvamuse muutmist. |
| ET-B2-0291 | b2-umhören, sich-1791 | lv | kuulatlema | LABOT | ringi küsitlema | Kuulatlema tähendab tähelepanelikult kuulama; sich umhören tähendab teiste käest järele uurima või ringi küsitlema. |
| ET-B2-0292 | b2-umschließen-1797 | lv | sisse lülitama • hõlmama • ümbritsema | LABOT | sulgema sisse • hõlmama • ümbritsema | Sisse lülitama tähendab seadme aktiveerimist, mitte millegi sisse sulgemist või ümbritsemist. |
| ET-B2-0293 | b2-umschreiben-1798 | lv | kirjeldama | LABOT | ümber sõnastama | „Kirjeldama” ei väljenda peamist tähendust „ümber sõnastama” või „ümber kirjutama”; lisaks on vorm gerundiiv. |
| ET-B2-0294 | b2-umständlich-1803 | lv | väga pisike • liiga ulatuslik • koormav • keeruline | LABOT | tülikas • liiga üksikasjalik • koormav • keeruline | „Väga pisike” tähendab väga väikest, mitte tülikat või kohmakat; see on saksa omadussõna tähendusega vastuolus. |
| ET-B2-0295 | b2-unterbreiten-1835 | lv | selgitama • esitama | LABOT | ette panema • esitama | „Unterbreiten” tähendab ettepaneku, palve või dokumendi esitamist; „selgitama” tähendab seletama ja on siin vale vaste. |
| ET-B2-0296 | b2-Untertan-1848 | lv | kodanik | LABOT | alam | „Untertan“ tähendab valitseja alamat, mitte kodanikku. |
| ET-B2-0297 | b2-untertauchen-1849 | lv | sukelduma • vee alla minema • kastma | LABOT | sukelduma • vee alla minema • peitu minema | „Kastma“ tähendab millegi vedelikku kastmist; „untertauchen“ võib tähendada ka peitu minemist. |
| ET-B2-0298 | b2-unüberlegt-1854 | lv | ettevaatamatu • kergemeelne | LABOT | läbimõtlematu • kaalutlematu | „Unüberlegt“ tähendab läbimõtlematut või kaalutlematut; praegused vasted tähendavad pigem ettevaatamatut ja kergemeelset. |
| ET-B2-0299 | b2-verbittert-1873 | lv | pettunud | LABOT | kibestunud | „Verbittert“ tähendab kibestunud või vimma täis; „pettunud“ tähendab enttäuscht ehk pettunud. |
| ET-B2-0300 | b2-Verdruss-1877 | lv | vastumeelsus • pettumus • tusk | LABOT | meelehärm • pahameel • tusk | „Verdruss“ tähendab pahameelt või meelehärmi; „pettumus“ tähendab pettumust, mitte tüdimust või pahameelt. |
| ET-B2-0301 | b2-sich verhören-1901 | lv | üle kuulama (proovi) | LABOT | valesti kuulma | Tähendab midagi valesti kuulma või mööda kuulma, mitte kedagi üle kuulama. |
| ET-B2-0302 | b2-verhüten-1902 | lv | ära hoidma • hoiduma | LABOT | ära hoidma • rasestumisvastaseid vahendeid kasutama | Teine tähendus viitab rasestumisvastastele vahenditele; „hoiduma” tähendab lihtsalt millestki hoidumist. |
| ET-B2-0303 | b2-Verleih-1905 | lv | üür | LABOT | laenutus • renditeenus | „Verleih” tähendab laenutamist või renditeenust, mitte üksnes üüri kui tasu. |
| ET-B2-0304 | b2-Vermächtnis-1906 | lv | testament | LABOT | pärand | „Vermächtnis” on pärand või annak; „testament” on dokument, millega pärand määratakse. |
| ET-B2-0305 | b2-Vermögen-1908 | lv | omand | LABOT | vara | „Vermögen” tähendab üldiselt vara või varandust; „omand” tähistab pigem omandisuhet või omatud eset. |
| ET-B2-0306 | b2-Vernehmung-1910 | lv | ülekuulamine politseis | LABOT | ülekuulamine | Saksa sõna ei piirdu politseis toimuva ülekuulamisega; „politseis” kitsendab tähendust põhjendamatult. |
| ET-B2-0307 | b2-verkommen-1916 | lv | alla käima • kaduma | LABOT | alla käima • manduma | „Kaduma” tähendab kaduma või ära haihtuma, mitte allakäimist, mandumist või kõlbelist langust. |
| ET-B2-0308 | b2-verkraften-1918 | lv | moraalset jõudu säilitama, et millestki ebameeldivast üle saada | LABOT | välja kannatama • üle elama | Praegune on ebaloomulik kirjeldus; verb tähendab millegi ebameeldiva talumist või üleelamist. |
| ET-B2-0309 | b2-versagen-1934 | lv | keelduma • tagasi lükkama • mitte kuulama • teenimast keelduma • argaks jääma | LABOT | ebaõnnestuma • üles ütlema • keelduma • tagasi lükkama • mitte kuuletuma | Puudub põhitähendus „ebaõnnestuma” või „mitte toimima”; praegune loetelu keskendub üksnes keeldumisega seotud tähendustele. |
| ET-B2-0310 | b2-versöhnen-1940 | lv | leppima panema | LABOT | lepitama | „Leppima panema” on kohmakas; loomulik transitiivne vaste on „lepitama”. |
| ET-B2-0311 | b2-verspielen-1942 | lv | kaotama (mängus) | LABOT | mängides kaotama • maha mängima | Sõna tähendab ka millegi hooletult kaotamist või maha mängimist, mitte ainult mängus kaotamist. |
| ET-B2-0312 | b2-verstauchen-1945 | lv | nihestama | LABOT | välja väänama | „Verstauchen” tähendab liigese nikastamist või välja väänamist; „nihestama” tähendab liigese paigast nihutamist. |
| ET-B2-0313 | b2-verweilen-1956 | lv | peatuma (mõttes) | LABOT | peatuma • viibima | Praegune vaste piirab tähenduse mõtisklemisega; saksa sõna tähendab üldiselt peatuma või viibima. |
| ET-B2-0314 | b2-Verwüstung-1965 | lv | hävitamine | LABOT | laastamine | Hävitamine tähendab üldiselt hävitamist; Verwüstung viitab ulatuslikule laastamisele või hävingule. |
| ET-B2-0315 | b2-sich verzögern-1968 | lv | hilinema • venitama | LABOT | hilinema • edasi lükkuma | Venitama on transitiivne ja tähendab millegi viivitamist; refleksiivne saksa verb tähendab ise viibima või edasi lükkuma. |
| ET-B2-0316 | b2-verzollen-1969 | lv | tolliima | LABOT | tollima | Eesti kirjakeeles on verbi korrektne kuju tollima, mitte tolliima. |
| ET-B2-0317 | b2-vollkommen-1980 | lv | täielik • täielikult • hoopis | LABOT | täielik • täielikult • täiesti | Hoopis tähendab pigem 'instead/quite', mitte 'completely'; see ei vasta siin saksa sõna määrsõnalisele tähendusele. |
| ET-B2-0318 | b2-vollzählig-1982 | lv | täisarvuline | LABOT | täielikus koosseisus | Täisarvuline tähendab integer-valued; vollzählig tähendab täielikus arvus või täielikus koosseisus. |
| ET-B2-0319 | b2-Vorbildung-1992 | lv | eelteadmised • valmisolek | LABOT | eelteadmised • ettevalmistus | Valmisolek tähendab readiness; Vorbildung tähendab varasemat haridust, ettevalmistust või eelteadmisi. |
| ET-B2-0320 | b2-vornherein-2001 | lv | just alguses | LABOT | algusest peale | Von vornherein tähendab algusest peale või ette, mitte lihtsalt 'just alguses'. |
| ET-B2-0321 | b2-vorsätzlich-2003 | lv | teadlik • tahtlik | LABOT | tahtlik | “Teadlik” tähendab teadlikku, mitte tingimata tahtlikku tegevust; “tahtlik” vastab saksa sõnale täpsemalt. |
| ET-B2-0322 | b2-Wählscheibe-2024 | lv | telefoni valikuketas | LABOT | telefoni valimisketas | “Valikuketas” tähendab valikuketast; telefoninumbri ketas on eesti keeles “valimisketas”. |
| ET-B2-0323 | b2-Warenausgabe-2031 | lv | ostude kontroll ja väljastamine | LABOT | kauba väljastamine | “Warenausgabe” tähendab kaupade väljastamist; ostude kontrollimine ei kuulu saksa sõna põhitähendusse. |
| ET-B2-0324 | b2-Wegstrecke-2039 | lv | teelõik • tükk | LABOT | teelõik | “Tükk” tähendab eset või osa üldiselt, kuid “Wegstrecke” on konkreetsemalt teelõik või läbitav vahemaa. |
| ET-B2-0325 | b2-Wehe-2041 | lv | luide • hang | LABOT | sünnitusvalu • tuhu | Saksa “Wehe” tähendab sünnitusvalu või emaka kokkutõmmet, mitte liivaluidet ega lumehangi. |
| ET-B2-0326 | b2-Wehrpflicht-2043 | lv | ajateenistus | LABOT | ajateenistuskohustus | “Wehrpflicht” on kohustus teenida, “ajateenistus” aga teenistuse enda tähendus. |
| ET-B2-0327 | b2-Werkhalle-2055 | lv | tsehh | LABOT | tootmishall | Werkhalle tähendab tootmis- või tehasehalli; „tsehh” tähistab pigem tootmisüksust või töökoda. |
| ET-B2-0328 | b2-Windbeutel-2076 | lv | tuulelohe | LABOT | tuuletasku | „Tuulelohe” tähendab eesti keeles lohet ehk kite’i; Windbeutel on kreemitäidisega küpsetis ehk tuuletasku. |
| ET-B2-0329 | b2-zürnen-2088 | lv | vihastama | LABOT | vihastuma | zürnen on intransitiivne ‘vihane olema’; „vihastama” tähendab tavaliselt kellegi vihaseks ajamist. |
| ET-B2-0330 | b2-zuschneiden-2094 | lv | lõikama (lõikeks) | LABOT | sobivasse mõõtu lõikama | „Lõikama (lõikeks)” on ebaloomulik ja ebaselge; zuschneiden tähendab millegi mõõtu või kuju järgi lõikamist. |
| ET-B2-0331 | b2-zutrauen-2097 | lv | ootama • võimeliseks pidama | LABOT | võimeliseks pidama | „Zutrauen” tähendab kellelegi võimekuse omistamist; „ootama” ei ole selle verbi tähendus. |
| ET-B2-0332 | b2-Zuversicht-2098 | lv | usaldus | LABOT | kindlustunne | Zuversicht tähendab lootusrikast kindlustunnet või usku edusse, mitte lihtsalt usaldust. |
| ET-B2-0333 | b2-sich-abwenden | study.translation | pöörduma millestki ära | LABOT | millestki ära pöörduma | Estonian word order is unnatural; the complement normally precedes ära pöörduma. |
| ET-B2-0334 | b2-sich-einpraegen | study.translation | meelde jätma | LABOT | meelde jääma | The reflexive German verb means to become firmly remembered, not to memorize something actively. |
| ET-B2-0335 | b2-sich-erweisen | study.translation | osutuma milleks | LABOT | osutuma millekski | Üldises vastefraasis nõuab osutuma translatiivi: osutuma millekski. |
| ET-B2-0336 | b2-sich-fassen | study.translation | haarama • end koguma • end valitsema | LABOT | end koguma • end valitsema | Haarama on tavalise fassen-verbi vaste, kuid sich fassen tähendab siin enese kogumist või valitsemist. |
| ET-B2-0337 | b2-genosse | study.translation | liige | FALSE_POSITIVE |  | TRUE_EXTRA_STUDY — study objekt eemaldatakse; finding superseded. |
| ET-B2-0338 | b2-genossin | study.translation | liige (naine) | FALSE_POSITIVE |  | TRUE_EXTRA_STUDY — study objekt eemaldatakse; finding superseded. |
| ET-B2-0339 | b2-sich-gestalten | study.translation | kujunema milleks | LABOT | kujunema | Eesti põhisõnavaste on „kujunema”; „milleks” jätab vaste ebamääraseks ja mõjub siin ebaloomulikult. |
| ET-B2-0340 | b2-haube | study.examples[2].lv | ta avab auto mootorikapoti. | LABOT | ta avab auto kapoti. | Eesti keeles nimetatakse auto mootorikatet tavaliselt lihtsalt kapotiks; „mootorikapott” on ebaharilik liitsõna. |
| ET-B2-0341 | b2-haube | study.examples[3].lv | mootorikapott on katki. | LABOT | auto kapott on katki. | „Auto kapott” on loomulikum ja tavapärasem kui „mootorikapott”. |
| ET-B2-0342 | b2-haube | study.examples[5].lv | pane kaas pajale kattena. | LABOT | pane pajale kaas. | „Kaas pajale kattena” on kohmakas; loomulik eestikeelne käsk on „pane pajale kaas”. |
| ET-B2-0343 | b2-sich-herausbilden | study.translation | välja kujunema milleks | LABOT | välja kujunema | „Sich herausbilden” vaste on „välja kujunema”; lisand „milleks” ei ole siin loomulik ega vajalik. |
| ET-B2-0344 | b2-sich-herausstellen | study.translation | selguma milleks | LABOT | osutuma millekski | „Sich herausstellen” tähendab sageli millekski osutumist; praegune „selguma milleks” on ebatäpne ja kohmakas. |
| ET-B2-0345 | b2-leiden-study | study.translation | pikaajaline ja raske haigus | LABOT | haigus • kannatused | Leiden tähendab haigust või kannatusi, kuid mitte tingimata pikaajalist ja rasket haigust. |
| ET-B2-0346 | b2-neger | study.translation | neeger | FALSE_POSITIVE |  | TRUE_EXTRA_STUDY — study objekt eemaldatakse; finding superseded. |
| ET-B2-0347 | b2-sich-paaren | study.translation | paarduma millegaga | LABOT | paarituma | Sich paaren tähendab eeskätt paarituma; praegune väljend on ebatäpne ja „millegagi” ei sobi. |
| ET-B2-0348 | b2-sich-vereinigen | study.translation | ühinema millegaga | LABOT | ühinema millegagi | Verb ühinema nõuab sihitise puhul kaassõnalist vormi millegagi, mitte millegaga. |
| ET-B2-0349 | b2-sich-versehen | study.translation | eksima • varustama millegaga | LABOT | eksima • varustama millegagi | Väljend „varustama millegagi” nõuab indefiniitse asesõna vormi millegagi. |
| ET-B2-0350 | b2-sich-versoehnen | study.translation | leppima millegaga | LABOT | ära leppima kellegagi | Sich versöhnen tähendab kellegagi ära leppima; millegagi leppima tähendab millegi aktsepteerimist. |
| ET-B2-0351 | b2-sich-verstellen | study.translation | teesklema keda | LABOT | teesklema | Küsimusõna keda ei sobi tõlkesse; sich verstellen tähendab siin teesklema või võltsilt käituma. |
| ET-B2-0352 | b2-zuwider | study.examples[2].lv | see ei meeldi mulle / see kurvastab mind. | LABOT | see ei meeldi mulle | Zuwider sein tähendab mitte meeldima või vastumeelne olema, mitte tingimata kurvastama. |
| ET-B2-0353 | b2-zuwider | study.comparison[3].meaning | vaidlema • mitte nõustuma | LABOT | vastu vaidlema • mitte nõustuma | Iebilst tähendab vastu vaidlema või vastuväiteid esitama; vaidlema on liiga üldine. |
| ET-B2-0354 | b2-aendern | etMain | muutma • parandama | LABOT | muutma | Ändern tähendab muutma või ümber tegema; parandama viitab pigem vigade parandamisele või verbessern'ile. |
| ET-B2-0355 | b2-aendern | study.translation | muutma • parandama | LABOT | muutma | Ändern tähendab muutma või ümber tegema; parandama viitab pigem vigade parandamisele või verbessern'ile. |

**OWNER verdict:** `ET_B2_OWNER_REVIEW_355_COMPLETE`
