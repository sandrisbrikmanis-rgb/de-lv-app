# BS–DE B2 — pilns lingvistiskais audits (GPT-5.6 Luna)

**Datums:** 2026-08-08
**Audita modelis:** gpt-5.6-luna
**Režīms:** AUDIT ONLY — datu faili nemainīti

---

## Scope

| Metrika | Vērtība |
|---|---:|
| cards expected | 2118 |
| cards audited | 2118 |
| cards skipped | 0 |
| study expected | 60 |
| study audited | 60 |
| standardStudy | 15 |
| minimalStudy | 45 |

---

## Deterministic validation

| Check | Result |
|---|---|
| Syntax | PASS |
| UTF-8 | PASS |
| Mojibake | PASS |
| Structural parity | PASS |
| ID parity/order | PASS |
| DE READ-ONLY | PASS |
| LV remnants | 0 |
| EN remnants | 0 |
| sectionAccents TECHNICAL | 0 |
| data ≡ www | PASS |

---

## Linguistic findings

| Severity | Count |
|---|---:|
| CRITICAL | 32 |
| HIGH | 514 |
| MEDIUM | 530 |
| LOW | 81 |

---

## Non-error classifications

| Verdict | Count |
|---|---:|
| STYLE_ONLY | 0 |
| PROJECT_CONVENTION | 0 |
| SOURCE_LV_ISSUE | 0 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_REVIEW | 0 |

---

## Sistemiskās problēmas (patterns)

| Pattern | Count | Sample cards |
|---|---:|---|
| other | 624 | b2-zustimmen-4, b2-widersprechen-5, b2-anbelangen-13, b2-anführen-17, b2-angeblich-28, b2-angegriffen-33, b2-abbringen-36, b2-Abenteuerlust-39 |
| ekavism | 405 | b2-Akrobatik-8, b2-anbrechen-25, b2-ableiten-50, b2-sich-abfinden, b2-sich-abwenden, b2-sich-abwenden, b2-sich-befassen, b2-sich-befassen |
| grammar | 115 | b2-angehen-19, b2-Absatzmarkt-56, b2-abstoßend-68, b2-absurd-70, b2-autonom-122, b2-beiläufig-162, b2-beleibt-181, b2-belustigen-184 |
| semantics | 7 | b2-dreschen-441, b2-erlassen-684, b2-Geltung-912, b2-grauen-1022, b2-mutieren-1345, b2-spotten-1675, b2-sich-entrüsten |
| calque | 3 | b2-aussichtslos-106, b2-dumpf-457, b2-entehren-619 |
| cache_collision | 2 | b2-sich-abfinden, b2-sich-versoehnen |
| comparison | 1 | b2-Gleichnis-998 |

---

## Findings saraksts

| cardId | field/path | severity | current BS | proposed BS | reason |
|---|---|---|---|---|---|
| b2-Barren-136 | lv | CRITICAL | Pritoke | Razboj | Barren u gimnastici znači razboj; pritoke su vodeni tokovi koji se ulijevaju u r |
| b2-Barrenturnen-137 | lv | CRITICAL | Vježba na pritokama | Vježbanje na razboju | Prevod pogrešno tumači Barren kao pritoke umjesto gimnastičkog razboja. |
| b2-Straßenbelag-174 | lv | CRITICAL | Prisustvo na ulici | Kolovozna obloga | Trenutni prevod znači prisustvo na ulici; Straßenbelag je površinski sloj kolovo |
| b2-bewähren-229 | lv | CRITICAL | Zaštititi • Zaštititi • Zaštititi • Spasiti | Dokazati se • Pokazati se uspješnim • Potvrditi se • Dokazati se | DE 'bewähren' znači dokazati se/proći provjeru; LV i BS daju značenja glagola 'š |
| b2-bezähmen-237 | lv | CRITICAL | Očarati • Očarati | Ukrotiti • Obuzdati | DE znači ukrotiti/obuzdati; 'očarati' znači opčiniti i pripada drugom glagolskom |
| b2-Eberesche-494 | lv | CRITICAL | Sumporna mahovina • Rowan | Oskoruša • jarebika | Prvi prevod je pogrešan, a drugi je ostao na engleskom; Eberesche je vrsta oskor |
| b2-eigenhändig-524 | lv | CRITICAL | Self-made | Vlastoručan | Engleski izraz nije bosanski prevod i znači nešto drugo; eigenhändig znači vlast |
| b2-Elster-608 | lv | CRITICAL | Štucanje | Svraka | Elster je svraka, dok štucanje znači hiccup i potpuno je drugo značenje. |
| b2-erbrechen-664 | lv | CRITICAL | Break open • Hak | Povratiti | Prema njemačkom značenju erbrechen znači povratiti; LV vjerovatno pripada glagol |
| b2-erschlagen-705 | lv | CRITICAL | Knock off | Usmrtiti udarcem | Trenutni prevod je na engleskom i ne prevodi njemački glagol erschlagen. |
| b2-Geldbuße-904 | lv | CRITICAL | U redu | Novčana kazna | Geldbuße znači novčana kazna; „u redu“ znači okay. |
| b2-Gespött-959 | lv | CRITICAL | Nicanje zuba | Podsmijeh | Gespött znači podsmijeh ili predmet ismijavanja; „nicanje zuba“ je potpuno drugo |
| b2-Gestrüpp-966 | lv | CRITICAL | Bush | Šikara | „Bush“ je engleska riječ; Gestrüpp znači šikara ili gusto grmlje. |
| b2-raffgierig-986 | lv | CRITICAL | Spellbinding | Pohlepan | „Spellbinding“ je engleski izraz koji znači očaravajući; raffgierig znači pohlep |
| b2-grauen-1022 | lv | CRITICAL | Weave | Svitanje | The current entry is English and does not translate the German verb meaning “to  |
| b2-luftdicht-1265 | lv | CRITICAL | Propusni za zrak • Hermetički | Nepropusni za zrak • Hermetički zatvoren | Propusni za zrak je suprotno od luftdicht, koji znači nepropusan za vazduh. |
| b2-mutieren-1345 | lv | CRITICAL | Govoriti | Mutirati | „Govoriti“ nema nikakvu semantičku vezu s njemačkim glagolom „mutieren“. |
| b2-Personalakte-1442 | lv | CRITICAL | Licna stvar | Lični dosje | Personalakte znači personalni dosje ili kadrovski spis, a ne lična stvar. |
| b2-Poltergeist-1458 | lv | CRITICAL | A poltergeist | Poltergeist | Prijevod sadrži suvišno slovo i nije prilagođen bosanskom tekstu. |
| b2-Richtfest-1524 | lv | CRITICAL | Festival vretenaca | Proslava završetka krova | „Vretenac“ je dragonfly; Richtfest je ceremonija nakon postavljanja krova. |
| b2-totschlagen-1741 | lv | CRITICAL | Knock off | Prebiti nasmrt | Prevod je na engleskom i ne predstavlja bosanski ekvivalent glagola „ubiti preml |
| b2-Trockenlegung-1755 | lv | CRITICAL | Draining | Isušivanje | Prevod je na engleskom, a ne na bosanskom; njemačka imenica znači isušivanje ili |
| b2-verzweifeln-1970 | lv | CRITICAL | Izašao | Očajavati | 'Izašao' znači izašao, što nema veze sa značenjem očajavati. |
| b2-Wade-2019 | lv | CRITICAL | Srna | List | 'Srna' je deer; Wade označava list noge. |
| b2-weben-2037 | lv | CRITICAL | Weave | Tkati | Tekući prevod je engleski, a ne bosanski; glagol znači tkati. |
| b2-Weber-2038 | lv | CRITICAL | Weaver | Tkač | Tekući prevod je engleski; Weber znači tkač. |
| b2-Wehrpflicht-2043 | lv | CRITICAL | Vanredno stanje | Vojna obaveza | Wehrpflicht znači obavezno služenje vojnog roka, ne vanredno stanje. |
| b2-Weib-2044 | lv | CRITICAL | Cf. nije žena | Žena, pogrdno | Tekući tekst nije prevod; Weib je pogrdan ili zastario izraz za ženu. |
| b2-Welpe-2048 | lv | CRITICAL | Puppy | Štene | Tekući prevod je engleski; Welpe znači štene. |
| b2-Wertpapier-2059 | lv | CRITICAL | Sigurnost | Vrijednosni papir | Wertpapier je finansijski vrijednosni papir, ne sigurnost. |
| b2-Windbeutel-2076 | lv | CRITICAL | Wind cake | Krempita | Tekući prevod je engleski; Windbeutel je naziv za krempitu. |
| b2-verlaufen | study.translation | CRITICAL | Za nastavak • Za kotrljanje | Odvijati se • Teći | Oba prijevoda su semantički pogrešna i ne prenose značenje „odvijati se/teći“. |
| b2-widersprechen-5 | lv | HIGH | Objekt | Protiviti se | 'Objekt' znači predmet; ne prenosi značenje protivljenja ili proturječenja. |
| b2-anbrechen-25 | lv | HIGH | Za početak • Hakirati | Početi • Načeti | 'Za početak' nije glagolski prevod, a 'hakirati' znači provaliti u računarski si |
| b2-Abenteuerlust-39 | lv | HIGH | Požuda za aferom | Želja za avanturom | 'Abenteuerlust' znači želja za avanturama; 'afera' ima značenje ljubavne ili ska |
| b2-abgesehen-44 | lv | HIGH | Iako • Pored toga | Osim • Ne računajući | 'Abgesehen' znači osim ili ne računajući; 'iako' i 'pored toga' imaju druga znač |
| b2-Abnutzung-52 | lv | HIGH | Iscrpljenost • Iscrpljenost • Iscrpljenost | Trošenje • Istrošenost • Habanje | 'Iscrpljenost' znači fizičku ili mentalnu iscrpljenost, ne habanje ili trošenje  |
| b2-Absatzmarkt-56 | lv | HIGH | Outlet market | Tržište plasmana | Bosanski prevod je ostao na engleskom; 'Absatzmarkt' znači tržište prodaje ili p |
| b2-abschlagen-59 | lv | HIGH | Smanjiti • Odbiti • Odbiti • Odbiti | Odsjeći • Odbiti • Odbiti • Odbiti | Prvo značenje 'abschlagen' je odsjeći/odrubiti, a 'smanjiti' znači reducirati. |
| b2-abschleppen-60 | lv | HIGH | Ukloni auto | Odvući automobil | 'Ukloni auto' je imperativ i znači ukloniti, dok 'abschleppen' znači odvući vozi |
| b2-sich-abfinden | study.translation | HIGH | Trpiti | Pomiriti se s | Trpiti znači podnositi, a ne pomiriti se s nečim. |
| b2-sich-bemaechtigen | study.translation | HIGH | Oduzeti • Zauzeti | Ovladati • Dočepati se | Oduzeti znači uzeti od nekoga, a zauzeti znači okupirati; ne prenose značenje ov |
| b2-sich-berufen | study.translation | HIGH | Referirati na | Pozivati se na | sich auf etwas berufen znači pozivati se na nešto, ne referirati na nešto. |
| b2-sich-einlassen | study.translation | HIGH | Pusti unutra | Upustiti se u | Pusti unutra znači pustiti nekoga unutra, dok sich einlassen auf znači upustiti  |
| b2-Abzweigung-78 | lv | HIGH | Filijala • Filijala | Skretanje • Odvojak | Filijala je poslovnica/podružnica, ne odvojak ili skretanje puta. |
| b2-Areal-89 | lv | HIGH | Domet | Područje | Domet znači range/reach; Areal označava područje ili teritoriju. |
| b2-Ausbeutung-96 | lv | HIGH | Operacija | Eksploatacija | Operacija znači operation, dok Ausbeutung znači eksploatacija ili iskorištavanje |
| b2-sich aufdrängen-98 | lv | HIGH | Da maltretiraju | Nametati se | Trenutni tekst znači da maltretiraju; glagol znači nametati se ili navaljivati. |
| b2-Augenmaß-102 | lv | HIGH | Acumeter | Osjećaj za mjeru | Augenmaß znači osjećaj za mjeru ili procjenu od oka, ne naziv mjernog instrument |
| b2-Äußerlichkeit-103 | lv | HIGH | Razmetljivost | Vanjski izgled | Razmetljivost znači ostentativnost; Äußerlichkeit označava vanjski izgled ili sp |
| b2-aussetzen-105 | lv | HIGH | Post • Subjekt • Protiv • Stav | Postaviti • Izložiti • Suprotstaviti se • Obustaviti | Svi trenutni oblici su imenice ili pridjevi; njemačka lema je glagol. |
| b2-ausspannen-107 | lv | HIGH | Odvezati se • Oduzeti partnera • Odmoriti | Raspreći • Preoteti partnera • Odmarati se | Nedostaje precizno značenje raspreći; zadnji oblik treba povratno se. |
| b2-ausstatten-108 | lv | HIGH | Isporučiti • Dizajnirati | Opremiti • Urediti | Isporučiti znači deliver, ne opremiti; dizajnirati nije prirodan ekvivalent za u |
| b2-austreten-114 | lv | HIGH | Deložirati • Najam • Dati otkaz | Izgaziti • Izgaziti • Istupiti | Deložirati i najam ne odgovaraju značenjima; austreten znači izgaziti ili istupi |
| b2-auszeichnen-120 | lv | HIGH | Nagrada • Nagrada • Istaći se | Nagraditi • Dodijeliti • Istaknuti se | Prva dva prijevoda su imenice, dok je njemačka lema glagol. |
| b2-Blutbank-125 | lv | HIGH | Rezerve krvi | Banka krvi | Blutbank znači banka krvi, a ne zalihe ili rezerve krvi. |
| b2-Bauwesen-145 | lv | HIGH | Izgradnja • Izgradnja | Građevinarstvo • Graditeljstvo | Oba prevoda su pogrešno ista i znače izgradnju, ne građevinarstvo kao oblast. |
| b2-bebauen-146 | lv | HIGH | Proces • Izgraditi | Obrađivati • Izgraditi | Proces nije prevod glagola; bebauen znači obrađivati zemljište ili izgraditi na  |
| b2-befallen-148 | lv | HIGH | Doći do • Napada | Zadesiti • Napasti | Trenutni oblici nisu odgovarajuće glagolske natuknice i ne prenose značenje zade |
| b2-Befugnis-151 | lv | HIGH | Prava • Autoritet | Pravo • Ovlaštenje | Autoritet znači ugled/autoritet, a Befugnis znači ovlaštenje ili pravo. |
| b2-begehren-152 | lv | HIGH | Potražnja • Potražnja • Kao • Žudi • Žudi | Zahtijevati • Zahtijevati • Željeti • Čeznuti • Žudjeti | Više prevoda su imenice ili neispravni oblici; natuknica treba imati glagolske e |
| b2-begierig-153 | lv | HIGH | Žudnja | Željan | Žudnja je imenica, dok je begierig pridjev. |
| b2-begnadigen-154 | lv | HIGH | Imati milosti | Pomilovati | Begnadigen je pravni glagol pomilovati, a ne opšta fraza imati milosti. |
| b2-begünstigen-156 | lv | HIGH | Promovirati • Olakšati • Zaštititi • Podršku | Pogodovati • Unapređivati • Protežirati • Podržavati | Treći oblik je pogrešan, a četvrti je imenica; značenja favorizovati/podržavati  |
| b2-beharren-158 | lv | HIGH | Postojati • Ostati | Ustrajati • Insistirati | Beharren znači ustrajati ili insistirati, ne postojati ili ostati. |
| b2-beistimmen-166 | lv | HIGH | Odobriti • Podržati | Složiti se • Podržati | Glavno značenje je složiti se/saglasiti se; odobriti znači formalno odobriti. |
| b2-bejahrt-170 | lv | HIGH | Za mnogo godina | U poodmaklim godinama | Trenutni izraz znači trajanje kroz mnogo godina, ne osobu starije dobi. |
| b2-belästigen-177 | lv | HIGH | Smetati • Smetati • Zalijepiti se | Smetati • Uznemiravati • Dosadivati | Drugi prevod je dupliran, a zalijepiti se ne znači uznemiravati ili dosađivati. |
| b2-beleibt-181 | lv | HIGH | Debeli • Dragi • Puni | Punašan • Krupan • Puniji | Dragi znači beloved/dear, a trenutni prevodi ne prenose prirodno značenje krupan |
| b2-Belieben-183 | lv | HIGH | Sviđalo se • Sviđalo se • Željelo | Volja • Naklonost • Želja | Trenutni oblici su glagolske fraze u prošlom vremenu, a njemačka natuknica je im |
| b2-berechtigen-188 | lv | HIGH | Da daju prava | Ovlastiti | Prevod je glagolska fraza u pogrešnom licu umjesto infinitiva. |
| b2-besänftigen-199 | lv | HIGH | Smiriti se • Smiriti • Smiriti • Tišinu | Smiriti • Ublažiti • Ublažiti • Utišati | Prvi prevod je povratni, a četvrti je imenica; oba odstupaju od infinitiva i zna |
| b2-beschämen-201 | lv | HIGH | Sramota | Posramiti | Odrednica je glagol, a trenutni prevod je imenica. |
| b2-beschatten-202 | lv | HIGH | Zasjeniti • Trag | Zasjeniti • Pratiti | Drugi prevod je imenica i ne znači 'izbjeđivati/pratiti nekoga'. |
| b2-beschimpfen-203 | lv | HIGH | Psovati • Krasti • Uhvatiti | Psovati • Ocrniti • Izvrijeđati | Drugi i treći prevod znače 'krasti' i 'uhvatiti', što nije značenje odrednice. |
| b2-besessen-207 | lv | HIGH | Opsjednut • Preopterećen • Preopterećen | Opsjednut • Obuzet • Zaokupljen | 'Preopterećen' znači overloaded, ne opsjednut/obuzet. |
| b2-bestreiten-217 | lv | HIGH | Spor • Platiti • Pokriće | Osporiti • Platiti • Pokriti | Prvi i treći prevod su imenice umjesto glagola. |
| b2-Betäubung-220 | lv | HIGH | Zapanjujuće • Stupor • Narkoza • Anestezija | Ošamućivanje • Ošamućenost • Narkoza • Anestezija | Prvi oblik je pridjev, ne imenica, i ne znači anesteziranje/zatupljivanje. |
| b2-beteuern-221 | lv | HIGH | Certificirati | Ustrajno tvrditi | Beteuern znači uvjeravati ili naglašeno tvrditi, ne tehnički certificirati. |
| b2-Betrug-225 | lv | HIGH | Prevara • Prevara • Lažna • Prevara | Prevara • Obmana • Varka • Prevara | 'Lažna' je pridjev ženskog roda i nije odgovarajući prevod imenice Betrug. |
| b2-bewilligen-235 | lv | HIGH | Dozvoliti • Dodijeliti • Grant | Dozvoliti • Dodijeliti • Odobriti | 'Grant' je engleska riječ, nije bosanski prevod. |
| b2-bezeugen-238 | lv | HIGH | Certificirati | Posvjedočiti | Bezeugen znači posvjedočiti ili potvrditi, ne certificirati. |
| b2-bezwingen-241 | lv | HIGH | Savladati • Poraz • Obuzdati | Savladati • Pobijediti • Obuzdati | 'Poraz' je imenica, dok je njemačka odrednica glagol. |
| b2-Bildnis-247 | lv | HIGH | Prezime • Portret • Slika | Portret • Portret • Slika | 'Prezime' znači surname, ne portret/slika. |
| b2-bleichen-263 | lv | HIGH | Balat • Balot • Izbjeljivač | Blijediti • Izblijediti • Izbjeljivati | Prva dva oblika nisu standardni odgovarajući glagoli, a izbjeljivač je imenica. |
| b2-Bootsmann-283 | lv | HIGH | Čamac | Bocman | Bootsmann je pomorsko zvanje, a ne čamac. |
| b2-Bord-285 | lv | HIGH | Board | Bok broda | Board nije bosanska riječ; u nautičkom značenju Bord označava bok broda. |
| b2-brach-291 | lv | HIGH | Sirovo • Ostavite sa strane | Neobrađeno • Ostavljeno na ugaru | Sirovo ne znači neobrađeno zemljište, a drugi izraz je pogrešan imperativ. |
| b2-Brandstätte-293 | lv | HIGH | Kamin | Mjesto požara | Brandstätte označava mjesto požara, a Kamin znači kamin. |
| b2-Brandstifter-296 | lv | HIGH | Podmetati požare | Podmetač požara | Njemačka riječ je imenica za osobu, dok je trenutni oblik glagolski infinitiv. |
| b2-Bundesland-314 | lv | HIGH | Savezno zemljište | Savezna pokrajina | Zemljište znači land/zemlja u fizičkom smislu; Bundesland je savezna pokrajina. |
| b2-Bündnis-317 | lv | HIGH | Sindikat | Savez | Bündnis znači savez ili alijansa; sindikat je Gewerkschaft. |
| b2-Bürge-319 | lv | HIGH | Garant • Kolovođa | Garant • Jamac | Bürge je garant/jamac; kolovođa znači vođa grupe. |
| b2-chartern-323 | lv | HIGH | Unajmite avion ili brod za određeno putovanje | Unajmiti avion ili brod za određeno putovanje | BS prevod je u imperativu; njemački glagol treba infinitiv. |
| b2-Chemotherapie-327 | lv | HIGH | Hemoterapije | Kemoterapija | Hemoterapija je terapija krvlju; Chemotherapie je kemoterapija. |
| b2-Chirurgie-328 | lv | HIGH | Operacija | Hirurgija | Chirurgie označava hirurgiju kao oblast ili postupak, a ne pojedinačnu operaciju |
| b2-Chromosom-332 | lv | HIGH | Hromozoma | Hromozom | Hromozoma je genitiv; osnovni oblik imenice je hromozom. |
| b2-dämmern-341 | lv | HIGH | U sumrak • Pada mrak • Svane • Svjetlo se znoji | Smrkavati se • Smračivati se • Svanjivati • Svjetlucati | Prvi oblik nije glagol, a ‘svjetlo se znoji’ je besmislen prevod. |
| b2-dampfen-343 | lv | HIGH | Dim • Ispari | Pariti se • Isparavati | Oba trenutna oblika su pogrešnog glagolskog oblika ili vrste riječi. |
| b2-dämpfen-344 | lv | HIGH | Ušutkati • Zagušiti • Popariti • Dinstati • Promiješati | Prigušiti • Utišati • Pariti • Dinstati • Pirjati | Promiješati znači miješati, a popariti nije isto što i kuhati na pari. |
| b2-darbieten-347 | lv | HIGH | Obezbediti • Prisutan | Pružiti • Izvesti | Prisutan je pridjev, a darbieten znači pružiti, predstaviti ili izvesti. |
| b2-darlegen-349 | lv | HIGH | Nacrt • Objasniti | Izložiti • Objasniti | Nacrt je imenica i znači plan/skica; darlegen je glagol izložiti ili objasniti. |
| b2-Datei-356 | lv | HIGH | Ormar za arhiviranje | Datoteka | Datei u računarskom značenju je datoteka, ne ormar za arhiviranje. |
| b2-Datenträger-358 | lv | HIGH | Disketa | Nosač podataka | Datenträger je opći nosač podataka; disketa je samo jedna njegova vrsta. |
| b2-Dattel-359 | lv | HIGH | Datum | Datula | Dattel je plod datule; datum znači kalendarski datum. |
| b2-Daune-360 | lv | HIGH | Dolje | Paperje | Daune znači paperje/perje; dolje znači smjer prema nižem položaju. |
| b2-dehnen-367 | lv | HIGH | Rastegnuti • Rastegnuti • Rastegnuti • Rastegnuti • Prevući | Rastezati • Razvlačiti • Istezati se • Razvlačiti se • Odužiti se | Trenutni oblici su uglavnom perfektivni ili pogrešni; prevući ne znači ‘trajati  |
| b2-dementieren-374 | lv | HIGH | Povući informacije | Demantovati | Dementieren znači javno negirati ili opovrgnuti informaciju, ne povući je. |
| b2-deponieren-379 | lv | HIGH | Depozit • Depozit | Deponovati • Uložiti | Deponieren je glagol; depozit je imenica i ne odgovara nijednom navedenom obliku |
| b2-derjenige-381 | lv | HIGH | To | Onaj | Derjenige je pokazna zamjenica muškog roda: onaj, a ne srednji rod to. |
| b2-Devisenbörse-385 | lv | HIGH | Mjenjačnica | Devizna berza | Devisenbörse je berza deviza, dok je mjenjačnica mjesto za neposrednu zamjenu va |
| b2-Morddezernat-388 | lv | HIGH | Krivično odjeljenje | Odjel za ubistva | Morddezernat je odjel za ubistva, ne općenito krivično odjeljenje. |
| b2-dichten-393 | lv | HIGH | Pjevati • Pjevati | Pisati poeziju • Sastavljati stihove | Dichten znači pisati poeziju ili stihove, a ne pjevati. |
| b2-diejenige-397 | lv | HIGH | Tako | Ona | Diejenige je pokazna zamjenica ženskog roda: ona, a tako je prilog. |
| b2-dienstlich-400 | lv | HIGH | Servisna pozicija | Službeni • Službeni | Dienstlich znači službeni ili vezan za službu; servisna pozicija je pogrešno zna |
| b2-dingen-402 | lv | HIGH | Složiti se • Složiti se | Unajmiti • Angažovati | Dingen znači unajmiti ili angažovati, ne složiti se. |
| b2-Direktion-403 | lv | HIGH | Kontrola prijedloga | Direkcija • Uprava | Direktion znači direkcija ili uprava; kontrola prijedloga nije povezano značenje |
| b2-Dohle-411 | lv | HIGH | Covarner | Čavka | Bosanska riječ je čavka; Covarner je pogrešno napisana i ne označava ovu pticu. |
| b2-Dom-412 | lv | HIGH | Katedrala • Vijeće | Katedrala • Katedralna crkva | Dom u njemačkom znači katedrala; vijeće je potpuno drugo značenje. |
| b2-Dorsch-423 | lv | HIGH | Cod | Bakalar | Cod je engleski naziv; bosanski naziv za Dorsch je bakalar. |
| b2-Dotterblume-428 | lv | HIGH | Punoglavac | Kalužnica | Punoglavac znači tadpol; Dotterblume je močvarna biljka kalužnica. |
| b2-Drang-433 | lv | HIGH | Pogon • Nagib | Nagon • Težnja | Pogon znači drive/mehanizam, a nagib inclination; oba promašuju značenje unutraš |
| b2-drängen-434 | lv | HIGH | Gurati • Gurati • Požuriti • Požuriti • Ohrabriti | Gurati • Pritiskati • Požurivati • Podsticati • Nagovarati | Lista ima duplikate i infinitivni oblik Požuriti ne odgovara značenju uzrokovanj |
| b2-dreschen-441 | lv | HIGH | Umutite zrno • Umutite bjelanjak | Ovršiti žito • Umutiti bjelanjak | Dreschen znači vršiti žito; Umutite zrno je semantički pogrešno i u drugom licu. |
| b2-dringen-443 | lv | HIGH | Pritisnuti • Prekinuti • Pritisnuti • Provaliti • Zahtijevati • Zahtijevati | Probijati se • Probijati se • Prodrijeti • Provaliti • Zahtijevati • Tražiti | Prekinuti i Pritisnuti ne odgovaraju odgovarajućim značenjima prodora/probijanja |
| b2-Drossel-447 | lv | HIGH | Čvorak | Drozd | Drossel je drozd (thrush), dok čvorak označava drugu vrstu ptice. |
| b2-Nadeldrucker-449 | lv | HIGH | Digitalni štampač | Iglični štampač | Nadeldrucker je iglični matrični štampač, a ne opšti digitalni štampač. |
| b2-dulden-456 | lv | HIGH | Patiti • Izdržati | Trpjeti • Podnositi | Patiti znači suffer, a dulden znači tolerisati/podnositi; prvi prevod je pogreša |
| b2-düngen-462 | lv | HIGH | Oploditi | Đubriti | Düngen znači đubriti/gnojiti zemlju; oploditi znači fertilizirati u biološkom sm |
| b2-durchbrennen-470 | lv | HIGH | Izgorjeti • Izgorjeti • Izgorjeti • Izgorjeti | Izgorjeti kroz • Pregorjeti • Izgorjeti • Pregorjeti | Svi prevodi su isti i gube razliku između uzročnih i neuzročnih značenja. |
| b2-durchbringen-471 | lv | HIGH | Proći • Donijeti • Postići • Izliječiti • Otpad | Provući • Prenijeti • Postići • Izliječiti • Protraćiti | Otpad je imenica i potpuno pogrešan prevod za glagol izšķērdēt; ostali oblici su |
| b2-durchdringen-473 | lv | HIGH | Probiti se • Probiti se • Biti preplavljen | Probijati se • Prodrijeti • Biti prožet | Biti preplavljen znači overwhelmed, a ne biti prožet; druga dva oblika ne prate  |
| b2-Durchführung-476 | lv | HIGH | Provesti nešto kroz • Raditi • Raditi • Provoditi • Realizirati | Provođenje kroz nešto • Izvršenje • Obavljanje • Sprovođenje • Realizacija | Njemačka riječ je imenica, ali prva četiri bosanska prevoda uglavnom su glagoli  |
| b2-durchschlagen-483 | lv | HIGH | Procijediti • Proći kroz sito • Probušiti • Probušiti rupu | Procijediti • Proći kroz sito • Probijati se kroz • Probušiti rupu | Treći smisao je probiti se kroz prepreku, a ne napraviti rupu; razlikovanje je v |
| b2-Dürre-489 | lv | HIGH | Suvoće | Suša | Dürre označava sušu, posebno dugotrajan nedostatak padavina; „suvoća“ znači dryn |
| b2-ebenbürtig-493 | lv | HIGH | Ekvivalentno | Ravnopravan • jednakovrijedan | „Ekvivalentno“ je prilog/srednji rod, a riječ znači jednak po rangu ili vrijedno |
| b2-ebnen-495 | lv | HIGH | Nivo • Glatka | Izravnati • zagladiti | Trenutni oblici su imenica i pridjev, ne glagolski prevodi za „izravnati“ i „zag |
| b2-effektvoll-499 | lv | HIGH | Efikasan | Efektan • upečatljiv | „Efikasan“ znači djelotvoran, dok „effektvoll“ znači efektan ili upečatljiv. |
| b2-ehelich-502 | lv | HIGH | Brak- | Bračni | Bosanski pridjev je „bračni“, ne imenica „brak“ s crticom. |
| b2-ehren-505 | lv | HIGH | Čast • Poštovanje • Čast | Častiti • poštovati • odati počast | Njemački glagol je preveden imenicama; potrebni su glagolski oblici. |
| b2-ehrenamtlich-507 | lv | HIGH | Besplatno • U vršenju počasne dužnosti | Volonterski • obavljajući počasnu dužnost | „Besplatno“ znači free of charge, a ne dobrovoljno/neplaćeno obavljanje dužnosti |
| b2-Ehrenwort-514 | lv | HIGH | Počasni | Časna riječ | „Počasni“ je nedovršen pridjev; imenica znači „časna riječ“. |
| b2-ehrgeizig-515 | lv | HIGH | Pohlepan | Ambiciozan | „Pohlepan“ znači greedy, dok ehrgeizig znači ambiciozan ili željan uspjeha. |
| b2-eigentümlich-527 | lv | HIGH | Svojstvena • Karakteristika | Svojstven • karakterističan | Prvi oblik je ženskog roda, a drugi je imenica; oba trebaju biti pridjevi. |
| b2-eigenwillig-528 | lv | HIGH | Proizvoljan • Tvrdoglav • Tvrdoglav • Nadmoćan | Samovoljan • tvrdoglav • svojeglav • samovoljan | „Nadmoćan“ znači superioran, a ponavljanje i „proizvoljan“ ne pokrivaju pravilno |
| b2-Einband-532 | lv | HIGH | Vezivanje | Povez knjige | Einband je knjižni povez/korice, dok „vezivanje“ označava radnju vezivanja općen |
| b2-Einbildung-534 | lv | HIGH | Maštovitost • Mašta • Fantazija • Uobraženost • Uobraženost | Uobrazilja • mašta • fantazija • umišljenost • uobraženost | „Maštovitost“ znači imaginativnost, ne uobrazilju; završna dva prevoda su nepotr |
| b2-einbürgern-535 | lv | HIGH | Dati pravo građaninu • Da uvede • Da se ukorijeni | Dati državljanstvo • udomaćiti se • ukorijeniti se | Prvi izraz je neprirodan, a drugi je pogrešan glagolski oblik i značenje. |
| b2-eindringen-537 | lv | HIGH | Ugurati • Provaliti • Umočiti • Uroniti | Prodrijeti • provaliti • upiti se • zadubiti se | „Ugurati“, „umočiti“ i „uroniti“ ne odgovaraju značenjima prodiranja, upijanja i |
| b2-einfältig-539 | lv | HIGH | Samopravedan • Naivan | Priprostan • naivan | „Samopravedan“ znači self-righteous i nije značenje riječi einfältig. |
| b2-einfassen-540 | lv | HIGH | Uključuju • Okvir • Okvir | Obuhvatiti • uokviriti • optočiti | Trenutni oblici su konjugirani glagol i imenice/pridjevi, uz gubitak značenja um |
| b2-Einfuhr-544 | lv | HIGH | Uvod • Uvoz • Unošenje • Uvoz | Uvoz • uvoz • uvoženje • importovanje | „Uvod“ znači introduction, a „unošenje“ nije odgovarajući ekonomski termin za uv |
| b2-Eingabe-546 | lv | HIGH | Aplikacija • Unos podataka u računar | Podnesak • unos podataka u računar | Eingabe može značiti podnesak/prijavu ili unos podataka; „aplikacija“ nije prvi  |
| b2-eingehen-549 | lv | HIGH | Unesite • Stići • Unesite • Uđite • Smanjite • Se slažete • Kladite se | Ući • Stići • Ući • Skupiti se • Smanjiti se • Pristati • Kladiti se | Više prijevoda su u imperativu ili semantički netačni; eingehen znači ući, prist |
| b2-eingewurzelt-556 | lv | HIGH | Rooted | Ukorenjen | Bosanski tekst je na engleskom, a ne na bosanskom; značenje je ukorijenjen. |
| b2-eingleisig-557 | lv | HIGH | Monorail | Jednokolosiječan | Eingleisig znači jednokolosiječan ili jednopružan, ne monorail. |
| b2-eingrenzen-558 | lv | HIGH | Granica • Razgraničiti | Ograničiti • Razgraničiti | Granica je imenica, dok je njemački glagol; prvi prijevod treba biti ograničiti. |
| b2-einhüllen-560 | lv | HIGH | Omot • Namotaj • Omot | Umotati • Zamotati • Uviti | Trenutni oblici su imenice i ne odgovaraju njemačkom glagolu einhüllen. |
| b2-einleiten-566 | lv | HIGH | Enter | Uvesti | Tekst je na engleskom, a njemački glagol znači uvesti ili započeti. |
| b2-einliefern-568 | lv | HIGH | Unijeti • Donijeti | Predati • Smjestiti | Einliefern znači predati ili smjestiti, naročito u bolnicu ili zatvor; unijeti i |
| b2-einrechnen-572 | lv | HIGH | Brojati • Brojati | Uračunati • Uvrstiti | Brojati znači count, a ne uračunati ili uključiti u računicu. |
| b2-einströmen-584 | lv | HIGH | Uliti | Uteći | Einströmen znači ulijevati se ili pritjecati; uliti je svršeni prijelazni glagol |
| b2-einüben-589 | lv | HIGH | Naučiti da • Scenski | Uvježbati • Uvježbati | Naučiti da je nedovršena konstrukcija, a scenski je pridjev; einüben znači uvjež |
| b2-einweichen-592 | lv | HIGH | Dip | Namakati | Tekst je na engleskom; einweichen znači namakati ili potopiti. |
| b2-einwilligen-595 | lv | HIGH | Pristati • Biti opušten | Pristati • Biti voljan | Biti opušten znači be relaxed, a ne biti s voljom ili pristati. |
| b2-Eisbrecher-597 | lv | HIGH | Ice breaker | Ledolomac | Tekst je na engleskom; bosanski prijevod za Eisbrecher je ledolomac. |
| b2-Eisenerz-599 | lv | HIGH | Gvozdene rude | Željezna ruda | Bosanski prijevod je u pogrešnom padežu i broju te koristi ekavski oblik gvozdo. |
| b2-Eisgang-602 | lv | HIGH | Hodanje po ledu | Kretanje leda | Eisgang označava kretanje ili prolazak leda, ne hodanje po ledu. |
| b2-entbehren-616 | lv | HIGH | Učiniti bez • Izdržati • Nedostatak | Biti bez • Podnositi • Nedostajati | Prvi izraz je neprirodan, a treći je imenica umjesto glagola. |
| b2-entehren-619 | lv | HIGH | Opljačkati čast • Sramota | Obeščastiti • Obeščastiti | Prvi izraz je neprirodan doslovni kalk, a „Sramota“ je imenica umjesto glagola. |
| b2-enteignen-620 | lv | HIGH | Eksproprijacija • Eksproprijacija | Eksproprisati • Eksproprisati | Bosanski karton traži glagol; trenutni oblik je imenica i ne odgovara njemačkom  |
| b2-entgleisen-628 | lv | HIGH | Derail | Iskliznuti iz šina | Trenutni oblik je engleska riječ, a ne bosanski prevod. |
| b2-entladen-633 | lv | HIGH | Istovar • Istovar | Istovariti • Isprazniti | Trenutni oblici su imenice i duplicirani; njemački unos je glagol s dva različit |
| b2-entlarven-634 | lv | HIGH | Izložiti | Razotkriti | „Izložiti“ znači staviti na uvid, dok entlarven znači razotkriti ili raskrinkati |
| b2-entlegen-636 | lv | HIGH | Daljinski • Daljinski • Udaljen | Zabačen • Izolovan • Udaljen | „Daljinski“ se prvenstveno odnosi na daljinsko upravljanje, ne na udaljeno ili z |
| b2-entmutigen-637 | lv | HIGH | Oduzimaju hrabrost | Obeshrabriti | Trenutni oblik je glagol u 3. licu množine, a kartica traži infinitiv. |
| b2-entstellen-644 | lv | HIGH | Iskriviti • Izbezumiti • Izobličiti | Iskriviti • Unakaziti • Izobličiti | „Izbezumiti“ znači prestrašiti ili izludjeti, ne iznakaziti odnosno unakaziti. |
| b2-entwerfen-646 | lv | HIGH | Cast • Obris | Skicirati • Nacrtati | Trenutni oblici nisu odgovarajući bosanski glagolski ekvivalenti. |
| b2-Entwerter-647 | lv | HIGH | Komposter | Poništavač karata | „Komposter“ je uređaj za kompostiranje; Entwerter je uređaj za poništavanje kara |
| b2-entzückt-654 | lv | HIGH | Uzbuđen | Oduševljen | „Uzbuđen“ znači excited, dok entzückt znači oduševljen ili ushićen. |
| b2-sich entzünden-656 | lv | HIGH | Zapaliti se • Zapaliti • Zapaliti | Zapaliti se • Planuti • Upaliti se | Druga i treća jedinica nisu povratne i ne prenose pravilno značenje „zapaliti se |
| b2-Erbauer-662 | lv | HIGH | Lifter | Graditelj | „Lifter“ nije bosanski prevod; Erbauer znači graditelj ili onaj koji nešto izgra |
| b2-erdrücken-666 | lv | HIGH | Potisnuti • Potisnuti | Zgnječiti • Ugnjetavati | „Potisnuti“ znači gurnuti ili potisnuti, dok erdrücken znači zgnječiti ili ugnje |
| b2-Erdtrabant-669 | lv | HIGH | Zemljani saputnik | Zemljin satelit | Doslovni izraz „zemljani saputnik“ nije prirodan ni semantički odgovarajući term |
| b2-ergrauen-675 | lv | HIGH | Posijedi | Posijediti | „Posijedi“ je glagolski oblik u prezentu ili imperativu; infinitiv je „posijedit |
| b2-erhaben-676 | lv | HIGH | Reljef • Konveksan • Odličan • Veliki • Uzvišen • Uzvišen • Odličan | Reljefan • Konveksan • Veličanstven • Velik • Uzvišen • Plemenit • Izvanredan | Prva jedinica je imenica, a više značenja je duplicirano ili pogrešno prevedeno. |
| b2-erheben-677 | lv | HIGH | Podići • Podići • Povisiti • Protest | Podići • Uzdići • Povećati • Protestovati | Posljednja jedinica je imenica umjesto glagola; prethodne dvije su nepotrebno du |
| b2-sich erheben-678 | lv | HIGH | Diži se • Diži se • Diži se | Ustati • Podići se • Pobuniti se | Trenutni oblici su imperativi i ne odgovaraju infinitivu; ujedno su sve tri jedi |
| b2-erkämpfen-680 | lv | HIGH | Pobijediti | Izboriti se • izvojevati | Pobijediti znači poraziti, dok erkämpfen znači izboriti ili izvojevati nešto. |
| b2-erlassen-684 | lv | HIGH | Izdanje • Izdanje • Izdanje | Izdati • oprostiti • osloboditi | Izdanje je imenica i ne odgovara glagolu erlassen; sva tri prevoda su ista i sem |
| b2-erniedrigen-692 | lv | HIGH | Niži • Poniziti | Sniziti • poniziti | Niži je pridjev, a er­niedrigen je glagol; drugi prevod je odgovarajući. |
| b2-Ernteertrag-694 | lv | HIGH | Usev | Prinos žetve | Ernteertrag označava prinos, odnosno količinu dobijenu žetvom, a ne sam usjev. |
| b2-erpressen-697 | lv | HIGH | Ucjena | Iznuditi • ucijeniti | Ucjena je imenica, dok erpressen znači iznuditi ili ucijeniti. |
| b2-erringen-701 | lv | HIGH | Pobijediti | Izboriti se • izvojevati | Erringen znači postići ili izboriti nešto naporom, a ne samo poraziti protivnika |
| b2-erschießen-704 | lv | HIGH | Pucati | Ustrijeliti | Erschießen znači ubiti pucanjem, dok pucati ne podrazumijeva da je osoba pogođen |
| b2-ersparen-710 | lv | HIGH | Da sačuvate • Da sačuvate • Da rezervišete • Da sačuvate | Uštedjeti • uštedjeti • odvojiti • poštedjeti | Infinitiv je zamijenjen konstrukcijom sa da; sačuvati i rezervisati ne prenose z |
| b2-sich erstrecken-714 | lv | HIGH | Raširiti • Proširiti • Ispružiti se | Prostirati se • pružati se • protezati se | Prva dva prevoda su prijelazni glagoli; sich erstrecken znači prostirati se, pru |
| b2-erzürnen-727 | lv | HIGH | Naljutiti se | Naljutiti • razljutiti | Erzürnen je prijelazan glagol: naljutiti nekoga; naljutiti se ima povratno, drug |
| b2-Esche-728 | lv | HIGH | Pepeo | Jasen | Esche je drvo jasen, dok pepeo označava ostatak sagorijevanja. |
| b2-Espe-729 | lv | HIGH | Aspen | Jasika | Aspen je engleski naziv; bosanski naziv za Espe je jasika. |
| b2-exklusiv-737 | lv | HIGH | Istražen • Fin • Aristokratski | Ekskluzivan • profinjen • aristokratski | Istražen znači researched, ne ekskluzivan; fin je preopćenit i ne prenosi smisao |
| b2-exportieren-741 | lv | HIGH | Izvoz • Izvoziti | Izvoziti • izvesti | Izvoz je imenica, a glagol exportieren treba biti izvoziti; drugi prevod treba s |
| b2-exquisit-742 | lv | HIGH | Istražen • Suptilan | Izvanredan • profinjen | Istražen znači researched, a suptilan znači subtle; nijedno ne znači exquisit od |
| b2-Fachabitur-746 | lv | HIGH | Završila stručnu školu | Stručna matura | Prevod je glagolska, rodno određena rečenica i ne označava kvalifikaciju Fachabi |
| b2-Fahndungsliste-751 | lv | HIGH | Poternica | Lista traženih osoba | Potjernica je nalog za hapšenje, a Fahndungsliste je spisak traženih osoba. |
| b2-Fahrdamm-752 | lv | HIGH | Provozni dio ulice • Trotoar | Provozni dio ulice • Kolovoz | Trotoar je pločnik, dok Fahrdamm označava kolovoz odnosno vozni dio puta. |
| b2-Fahrerflucht-753 | lv | HIGH | Napuštajući mjesto nesreće | Bjekstvo s mjesta nesreće | Gerund ne odgovara njemačkoj imenici; potreban je imenički prevod. |
| b2-Falke-755 | lv | HIGH | A jastreb | Sokol | Falke je sokol; jastreb označava drugu pticu, a početno ‘A’ je suvišno. |
| b2-fälschlich-759 | lv | HIGH | Pogrešio • Pogrešio | Pogrešno • Lažno | Pogrešio je glagolski oblik u muškom rodu, a njemačka riječ je prilog. |
| b2-Farbstoff-760 | lv | HIGH | Dye | Bojilo | Tekst je na engleskom i ne pripada bosanskom prevodu; Farbstoff znači bojilo. |
| b2-Farbige-761 | lv | HIGH | Obojeni čovek | Osoba druge boje kože | Prevod je neprirodan, ekavski i društveno neprimjeren; njemačka imenica označava |
| b2-Faser-767 | lv | HIGH | Vlakna | Vlakno | Njemačka riječ je imenica u jednini, dok je trenutni prevod množina. |
| b2-Faulbaum-771 | lv | HIGH | Eve | Krkavina | Faulbaum je krkavina, a ‘eva’ označava drugu biljku; latvijski izvor se ne podud |
| b2-fechten-772 | lv | HIGH | Mačevanje | Mačevati se | Njemačka riječ je glagol, dok je mačevanje imenica. |
| b2-feilen-774 | lv | HIGH | Razočarati | Turpijati | Razočarati znači ‘enttäuschen’; feilen znači turpijati ili pažljivo dorađivati. |
| b2-fernstudieren-779 | lv | HIGH | Dopisno studiranje | Studirati na daljinu | Trenutni prevod je imenica, a izvorna riječ je glagol. |
| b2-Fetzen-786 | lv | HIGH | Rizik za stomak | Krpa • Dronjci | Trenutni prevod nema značenjsku vezu s Fetzen; riječ znači krpa ili komad tkanin |
| b2-Fink-789 | lv | HIGH | Finch | Zeba | Tekst je na engleskom; njemački Fink znači zeba. |
| b2-flechten-798 | lv | HIGH | Uviti • Pletenicu | Plesti • Uplitati | Pletenicu je imenica u akuzativu, a izvorna riječ je glagol; uviti mijenja znače |
| b2-fleckig-799 | lv | HIGH | Mrlja • Zamrljana • Mrlja • Prošarana • Mrljasta | Mrljav • Zamrljan • Pjegav • Prošaran • Šaren | Većina oblika su imenice ili rodno ograničeni oblici, a fleckig je pridjev. |
| b2-Flosse-803 | lv | HIGH | Flipper | Peraja | Flipper je engleski; bosanski prevod za Flosse je peraja. |
| b2-Flunder-809 | lv | HIGH | Koliba | Iverak | Flunder je vrsta ribe, a koliba znači hut. |
| b2-Flussarm-811 | lv | HIGH | Refluks | Rukavac | Flussarm je rukavac ili ogranak rijeke; refluks znači povratni tok. |
| b2-Flussbett-812 | lv | HIGH | Krevet | Riječno korito | Flussbett znači riječno korito; krevet je lažni prijatelj zbog značenja riječnog |
| b2-sich fortpflanzen-820 | lv | HIGH | Umnožiti • Širiti | Razmnožavati se • Širiti se | Njemački glagol je povratan i znači razmnožavati se ili širiti se. |
| b2-fortschaffen-821 | lv | HIGH | Nabaviti • Odnijeti • Odnijeti | Ukloniti • Odvesti • Odnijeti | Nabaviti znači pribaviti, suprotno značenju ukloniti; druga i treća stavka nepot |
| b2-fortschreiten-822 | lv | HIGH | Dalje razvijati | Napredovati | Fortschreiten je neprijelazno napredovati; razvijati je prijelazni glagol s drug |
| b2-fräsen-828 | lv | HIGH | Mljeti | Glodati | Fräsen je obrađivati materijal glodanjem; mljeti znači usitnjavati trenjem. |
| b2-Fräser-829 | lv | HIGH | Glodalica • Glodalica | Glodač • Glodalo | Glodalica je mašina, dok Fräser označava glodača ili glodalo; sadašnja oba prije |
| b2-friedfertig-837 | lv | HIGH | Mirno • Usklađeno | Mirotvoran • Miroljubiv | Prijevodi su prilozi ili srednji rod, a njemački pridjev znači miroljubiv ili mi |
| b2-fristlos-838 | lv | HIGH | Neodređeno | Bez otkaznog roka | Fristlos posebno znači bez otkaznog roka, ne općenito neodređeno. |
| b2-funken-848 | lv | HIGH | Emitovano na radiju | Emitovati putem radija | Natuknica je infinitiv, dok je trenutni prijevod particip u prošlom vremenu. |
| b2-Fürsprache-857 | lv | HIGH | Uvjeravanje • Dobro ime koje se može braniti | Zastupanje • Zauzimanje za nekoga | Fürsprache znači posredovanje, zagovaranje ili dobro zalaganje za nekoga, ne uvj |
| b2-gängig-863 | lv | HIGH | Hodanje | Uobičajen • Uhodan | Gängig znači uobičajen, raširen ili uhodan; hodanje označava radnju hoda. |
| b2-Garde-866 | lv | HIGH | Guard | Garda | Bosansko „Guard“ je engleski oblik; njemačko Garde znači garda. |
| b2-Garnknäuel-868 | lv | HIGH | Gruda | Klupko | Garnknäuel je klupko pređe; „gruda“ označava grudvu ili komad. |
| b2-Gasableser-870 | lv | HIGH | Plinomjer | Očitač plinomjera | Gasableser je osoba koja očitava plinomjer, a ne sam mjerni uređaj. |
| b2-Gebärde-875 | lv | HIGH |  • Funkcija gesta | Gest • Izraz lica | Prvi prijevod nedostaje, a „funkcija gesta“ ne znači Gebärde. |
| b2-Gefährte-884 | lv | HIGH | Član | Saputnik | Gefährte znači saputnik ili drug; „član“ znači member. |
| b2-Gegenmittel-892 | lv | HIGH | Protivotrov | Protusredstvo | Gegenmittel je opće protusredstvo; „protuotrov“ je samo antidot. |
| b2-gehörig-896 | lv | HIGH | Pripadanje • Pripadanje • Ispravno • Pristajanje | Pripadajući • Pripadajući • Primjeren • Pristojan | Prva dva oblika su imenice, ne pridjevi, a „pristajanje“ nije značenje pridjeva  |
| b2-gelaunt-903 | lv | HIGH | Oh | Raspoložen | „Oh“ nije bosanska riječ ni prijevod za gelaunt; riječ znači raspoložen ili dobr |
| b2-Geliebte-910 | lv | HIGH | Drag • Voljen • Najdraži | Ljubavnik • Voljeni • Miljenik | Der Geliebte je imenica za ljubavnika/voljenog muškarca, a trenutni oblici su sa |
| b2-Gemüsebau-919 | lv | HIGH | Korjenasti usjevi • Povrtarski usjevi | Uzgoj korjenastog povrća • Povrtlarstvo | Gemüsebau označava uzgoj/proizvodnju povrća, ne same usjeve. |
| b2-gemütvoll-921 | lv | HIGH | Toplo • Udobno | Srdačan • Topao | „Udobno“ znači comfortable, ne warm-hearted; „toplo“ nije pravilan pridjevski ob |
| b2-Gepäckwagen-934 | lv | HIGH | Automobil za prtljag | Kolica za prtljag | Gepäckwagen je kolica za prtljag, a ne automobil za prtljag. |
| b2-Geratewohl-936 | lv | HIGH | Sretno | Nasumice | Geratewohl označava postupanje bez plana, odnosno nasumično, a ne želju za srećo |
| b2-Gerippe-940 | lv | HIGH | Skelet • Tijelo • Okvir | Kostur • Kostur • Okvir | „Tijelo“ ne znači skeleton; Gerippe se prevodi kao „kostur“ u tom značenju. |
| b2-Gesandte-943 | lv | HIGH | Glasnik | Izaslanik | Gesandte je izaslanik ili poslanik; „glasnik“ znači messenger. |
| b2-Geschiedene-946 | lv | HIGH | Razvod | Razvedenik | Geschiedene označava razvedenu osobu, dok „razvod“ označava sam čin razvoda. |
| b2-Geschwür-954 | lv | HIGH | Biljka • Čir | Čir • Čir | „Augonis“ znači čir ili gnojni čir; „biljka“ znači plant. |
| b2-Getriebe-968 | lv | HIGH | Motor | Mjenjač | Getriebe znači mjenjač ili prijenos, a ne motor; latvijski izvor se ne podudara  |
| b2-Gewebe-976 | lv | HIGH | Tkanina • Maramica | Tkanina • Tkivo | Gewebe u drugom značenju znači biološko tkivo, ne maramica. |
| b2-Gezeiten-981 | lv | HIGH | Plima | Plima i oseka | Gezeiten su plima i oseka, dok „plima“ označava samo high tide. |
| b2-Glatze-995 | lv | HIGH | Gole glave | Ćelavo tjeme | The plural “gole glave” means bald heads, not baldness or a bald scalp. |
| b2-Stirnglatze-996 | lv | HIGH | Nepokriveno čelo | Ćelavost na čelu | “Nepokriveno čelo” means an uncovered forehead, not frontal baldness. |
| b2-gleichmütig-997 | lv | HIGH | Sastavljena • Hladnokrvna | Smiren • Hladnokrvan | “Sastavljena” means assembled and is unrelated; the adjective should be masculin |
| b2-Gleichnis-998 | lv | HIGH | Sličnost | Parabola • Poređenje | “Sličnost” means similarity, whereas Gleichnis means a parable or figurative com |
| b2-glotzen-1003 | lv | HIGH | Škiljiti | Buljiti | “Škiljiti” means to squint; glotzen means to stare or gawk. |
| b2-Glut-1005 | lv | HIGH | Sjaj • Sjaj • Velika toplina | Žar • Žeravica • Velika toplina | “Sjaj” means shine, while Glut refers to heat, embers, or glowing coals. |
| b2-gnädig-1008 | lv | HIGH | Milostiv • Poštovan | Milostiv • Blagonaklon | “Poštovan” means respected, not gracious or merciful. |
| b2-Goldwäscher-1013 | lv | HIGH | Gold washer | Ispirač zlata | The current text is English, not Bosnian. |
| b2-grinsen-1034 | lv | HIGH | Nasmejati se | Cerekati se | “Nasmejati se” means to smile or laugh; grinsen specifically means to grin. |
| b2-Gunst-1043 | lv | HIGH | Uslugu | Naklonost | “Usluga” means a favor or service; Gunst means favor, goodwill, or benevolence. |
| b2-gurgeln-1045 | lv | HIGH | Grlo • Usta | Ispirati grlo • Ispirati usta | The current entries are nouns, not the verb “to gargle.” |
| b2-Gutachten-1047 | lv | HIGH | Povratne informacije • Mišljenje stručnjaka | Stručni nalaz • Mišljenje stručnjaka | “Povratne informacije” means feedback, not an expert report or formal assessment |
| b2-haaren-1053 | lv | HIGH | Baciti pero | Linjati se | Haaren znači linjati se, a ne baciti jedno pero. |
| b2-Hafengebühr-1056 | lv | HIGH | Lučka dužnost | Lučka pristojba | Gebühr je pristojba ili naknada, ne dužnost. |
| b2-Hahnenkamm-1058 | lv | HIGH | Cock sext | Pijetlova kresta | Trenutni tekst je pogrešan engleski izraz; Hahnenkamm znači pijetlovu krestu. |
| b2-Hängebrücke-1062 | lv | HIGH | Žičani most | Viseći most | Žičani most je širi pojam; Hängebrücke je viseći most. |
| b2-hänseln-1064 | lv | HIGH | Nerrot • Cviliti | Nerrot • Zadirkivati | Cviliti znači pištati ili jadikovati, ne zadirkivati. |
| b2-Harsch-1067 | lv | HIGH | Sumpor • Smrznuti snijeg | Snježna kora • Zaleđeni snijeg | Harsch je stvrdnuta snježna kora; Sumpor je pogrešno tumačenje riječi sērsna. |
| b2-Hausherr-1072 | lv | HIGH | Domaćica • Zabavljač | Domaćin • Gazda kuće | Hausherr je muški domaćin ili gospodar kuće; oba trenutna ekvivalenta su pogrešn |
| b2-Hausrat-1073 | lv | HIGH | Život | Pokućstvo | Hausrat znači kućne stvari ili pokućstvo, ne život. |
| b2-hauteng-1076 | lv | HIGH | Uska odeća | Pripijena odjeća | Značenje je tijesno pripijen uz tijelo; trenutni tekst je ekavski i manje preciz |
| b2-Heilpraktiker-1084 | lv | HIGH | Iscelitelj | Praktičar alternativne medicine | Heilpraktiker je praktičar alternativne medicine, ne općenito iscjelitelj. |
| b2-Heldentat-1090 | lv | HIGH | Feat | Junačko djelo • Podvig | Trenutni tekst je engleska riječ; Heldentat znači junačko djelo ili podvig. |
| b2-hemmen-1091 | lv | HIGH | Ometati • Kašnjenje • Kočnicu | Ometati • Kočiti • Usporavati | Glagol hemmen traži glagolske ekvivalente; Kašnjenje i Kočnicu su pogrešni oblic |
| b2-henken-1093 | lv | HIGH | Jednom • Objesite osobu | Vješati • Pogubiti vješanjem | Jednom nema veze sa značenjem; drugi izraz je imperativ umjesto rječničkog glago |
| b2-herabsetzen-1094 | lv | HIGH | Niže • Omalovažavati | Sniziti • Omalovažavati | Niže je prilog, a herabsetzen je glagol koji znači sniziti ili omalovažavati. |
| b2-herangehen-1095 | lv | HIGH | Na posao | Prihvatiti se posla | Na posao je samo frazni fragment; značenje je prihvatiti se ili pristupiti poslu |
| b2-herausstellen-1101 | lv | HIGH | Ugasiti | Izložiti • Istaknuti | Ugasiti znači isključiti; herausstellen znači izložiti, istaknuti ili iznijeti. |
| b2-herb-1103 | lv | HIGH | Gorko • Kiselo • Kiselo | Gorak • Trpak • Kiseo | Pridjevi su navedeni u neprikladnom obliku, a kiselo je nepotrebno duplirano umj |
| b2-hetzen-1112 | lv | HIGH | Udarac • Podsticanje • Potjera • Udarac | Raspirivati • Podsticati • Progoniti • Tjerati | Udarac znači blow; hetzen traži glagole za podsticanje, progon i tjeranje. |
| b2-Hilfsdienst-1117 | lv | HIGH | Help desk | Pomoćna služba | Hilfsdienst znači pomoćna služba, a ne help desk. |
| b2-hingeben-1118 | lv | HIGH | Pokloniti • Posuditi | Predati se • Posvetiti se | Hingeben znači predati se ili posvetiti se; posuditi je pogrešno. |
| b2-hinreißen-1120 | lv | HIGH | Zgrabiti • Oduzeti | Ponijeti • Oduševiti | Hinreißen znači ponijeti ili oduševiti, ne zgrabiti ili oduzeti. |
| b2-Hinsicht-1121 | lv | HIGH | Poruka | Aspekt • Pogled | Hinsicht znači aspekt ili pogled, a ne poruka. |
| b2-hintergehen-1123 | lv | HIGH | Varati • Razočarati | Prevariti • Izdati | Hintergehen znači prevariti ili izdati; razočarati ima drugo značenje. |
| b2-Hinterhalt-1124 | lv | HIGH | Skrovište | Zasjeda | Hinterhalt je zasjeda, dok skrovište znači skrovište ili utočište. |
| b2-Hirschkuh-1130 | lv | HIGH | Majka jelena | Košuta | Hirschkuh označava ženku jelena, odnosno košutu, ne majku jelena. |
| b2-Hitzkopf-1132 | lv | HIGH | Hothead | Usijana glava | Hothead je engleski, a nije bosanski prijevod riječi Hitzkopf. |
| b2-Hobelbank-1136 | lv | HIGH | Planer | Stolarska klupa | Hobelbank je stolarska radna klupa; planer označava drugi alat i nije odgovaraju |
| b2-Hochverrat-1144 | lv | HIGH | Izdaja | Veleizdaja | Hochverrat je veleizdaja, odnosno izdaja države; opće izdaja je preširoko. |
| b2-hochwertig-1146 | lv | HIGH | Visoka vrijednost | Visokokvalitetan | Hochwertig znači visokokvalitetan ili vrijedan, ne visoka vrijednost. |
| b2-Honorar-1151 | lv | HIGH | Royalty | Honorar | Honorar je honorar ili naknada; royalty označava tantijeme. |
| b2-innewohnen-1161 | lv | HIGH | Kući | Biti svojstven | Innewohnen znači biti svojstven ili biti sadržan u nečemu, ne kući. |
| b2-inszenieren-1162 | lv | HIGH | Na pozornicu | Inscenirati | Inszenieren znači inscenirati ili postaviti na scenu; na pozornicu nije glagolsk |
| b2-Kapitalist-1171 | lv | HIGH | Kapitalistički | Kapitalista | Kapitalist je imenica za osobu; kapitalistički je pridjev. |
| b2-Kaufkraft-1175 | lv | HIGH | Novac • Takođe lična kupovna moć | Kupovna moć • Lična kupovna moć | Kaufkraft znači kupovna moć; novac je pogrešno značenje. |
| b2-kidnappen-1177 | lv | HIGH | Kidnapovanje • Uzeti za taoca | Oteti • Uzeti za taoca | Njemački glagol treba biti preveden infinitivom; „kidnapovanje“ je imenica. |
| b2-kompatibel-1189 | lv | HIGH | Connectable | Kompatibilan | Prijevod je na engleskom i ne odgovara jeziku ciljnog polja. |
| b2-Korps-1198 | lv | HIGH | Tijelo | Korpus | „Korps“ je vojna ili organizacijska formacija, ne opće „tijelo“. |
| b2-Kriegszustand-1203 | lv | HIGH | Vanredno stanje | Ratno stanje | „Vanredno stanje“ znači izvanredno stanje, a ne stanje rata. |
| b2-Laienkunst-1206 | lv | HIGH | Umjetnička samoaktivnost | Amaterska umjetnost | Sadašnji izraz je neprirodan; riječ označava umjetnost amatera. |
| b2-Landung-1212 | lv | HIGH | Stajanje • Sletanje • Sletanje | Iskrcavanje • Desant • Slijetanje | „Stajanje“ je pogrešno; riječ označava iskrcavanje, desant ili slijetanje. |
| b2-lauern-1218 | lv | HIGH | Da se ušuškaš | Vrebati | Sadašnji prijevod znači ušuškati se i ne odgovara glagolu „lauern“. |
| b2-Laufmasche-1220 | lv | HIGH | Šav sa čarape | Izvučena petlja na čarapi | Sadašnji izraz je gramatički neispravan i ne označava izvučenu petlju. |
| b2-Laufsteg-1221 | lv | HIGH | Jezik na modnoj reviji | Modna pista | Laufsteg je modna pista, a ne „jezik“ na modnoj reviji. |
| b2-Lehrstuhl-1228 | lv | HIGH | Odjelu | Katedra | Lehrstuhl je akademska katedra; „odjelu“ je padežni oblik i semantički uži termi |
| b2-Leichenhalle-1231 | lv | HIGH | Na groblju kapele | Mrtvačnica | Leichenhalle znači mrtvačnica, a sadašnji prijevod znači kapela na groblju. |
| b2-lispeln-1250 | lv | HIGH | Skliznuti | Šuškati | Skliznuti znači proklizati; lispeln znači govoriti sa šuštanjem ili šaptanjem. |
| b2-List-1251 | lv | HIGH | Tricky | Varka | Tekst je na engleskom i pridjev; njemačka imenica List znači varka ili lukavstvo |
| b2-Litfaßsäule-1253 | lv | HIGH | Poster pole | Oglasni stub | Tekst je na engleskom; njemački pojam označava oglasni stub. |
| b2-Luftbad-1263 | lv | HIGH | Vazdušno plivanje | Vazdušna kupka | Luftbad znači vazdušna kupka, ne plivanje u vazduhu. |
| b2-Luftgewehr-1269 | lv | HIGH | Vazdušni pištolj | Vazdušna puška | Gewehr znači puška; Luftgewehr je vazdušna puška, a ne vazdušni pištolj. |
| b2-Mahd-1277 | lv | HIGH | Žeti | Košnja | Mahd je imenica za košnju ili pokošenu površinu, dok je žeti glagol. |
| b2-Mahnschreiben-1281 | lv | HIGH | Podsjetnik | Opomena | Mahnschreiben je službena opomena za dug ili neispunjenu obavezu, a ne obični po |
| b2-Massaker-1294 | lv | HIGH | Carnage | Pokolj | Tekst je na engleskom; Massaker znači pokolj ili masakr. |
| b2-Matinée-1298 | lv | HIGH | Jutarnja emisija | Prijepodnevna predstava | Matinée je prijepodnevna predstava, a ne jutarnja emisija. |
| b2-meutern-1309 | lv | HIGH | Buntovnik • Buntovnik | Pobuniti se • Pobuniti se | Njemačka riječ je glagol „pobuniti se“, dok je „buntovnik“ imenica. |
| b2-Mieder-1310 | lv | HIGH | Tajice remen • Steznik | Stezni pojas • Steznik | „Tajice remen“ nije prirodan ni semantički tačan naziv za Mieder. |
| b2-Milbe-1313 | lv | HIGH | Tick | Grinja | „Tick“ je engleska riječ za krpelja; njemačko „Milbe“ znači grinja. |
| b2-missachten-1323 | lv | HIGH | Zanemarivanje | Ne poštovati | Njemačka riječ je glagol, dok je „zanemarivanje“ glagolska imenica. |
| b2-missbilligen-1324 | lv | HIGH | Ne prepoznati kao dobro • Zaraditi | Ne odobravati • Osuđivati | Oba postojeća prevoda su netačna ili neprirodna za „missbilligen“. |
| b2-missbrauchen-1325 | lv | HIGH | Zlostavljanje | Zloupotrebljavati | Njemačka riječ je glagol; „zlostavljanje“ je imenica i užeg značenja. |
| b2-missfallen-1326 | lv | HIGH | Ne volim | Ne sviđati se | „Missfallen“ znači ne sviđati se, a „ne volim“ znači ne voljeti. |
| b2-missgönnen-1328 | lv | HIGH | Da ne poželim • Da boli | Ne željeti nekome dobro • Zavidjeti | Postojeći izrazi ne prenose značenje zavisti i uskraćivanja dobra drugome. |
| b2-mitschuldig-1330 | lv | HIGH | Saučesnik | Sukriv | „Mitschuldig“ je pridjev „sukriv“, dok je „saučesnik“ imenica za accomplice. |
| b2-Mitwisser-1334 | lv | HIGH | Ko-zaverenik | Saučesnik upućen u tajnu | Mitwisser je osoba koja zna za tajnu, ne nužno suzavjerenik. |
| b2-moderieren-1336 | lv | HIGH | Umjereno | Moderirati | „Umjereno“ znači moderately; glagol „moderieren“ prevodi se kao „moderirati“. |
| b2-Monatsschrift-1338 | lv | HIGH | Mjesečno | Mjesečnik | Riječ označava mjesečnu publikaciju ili časopis, ne samo prilog „mjesečno“. |
| b2-müßig-1344 | lv | HIGH | Mirovanje • Mirovanje | Besposlen • Dokon | Njemačka riječ je pridjev, dok su postojeći prevodi imenice. |
| b2-nachgehen-1351 | lv | HIGH | Pratite • Saznajte | Pratiti • Istražiti | Prevod je u imperativu; natuknica treba infinitiv, a „saznati“ je aspektualno ne |
| b2-nachgiebig-1352 | lv | HIGH | Snishodljiv | Popustljiv | „Snishodljiv“ znači condescending, dok „nachgiebig“ znači popustljiv ili podloža |
| b2-nachträglich-1357 | lv | HIGH | Kasnije • Dodatno • Kasnije • Za suplemente | Naknadni • Dodatni • Naknadno • Dodatno | „Za suplemente“ je pogrešno; riječ znači naknadno, dodatno ili poslije. |
| b2-Nährboden-1360 | lv | HIGH | Srednje | Hranljiva podloga | Srednje znači 'middle'; Nährboden je hranljiva podloga ili plodno tlo. |
| b2-Nebelschwaden-1367 | lv | HIGH | Deo magle | Pramenovi magle | Nebelschwaden su pramenovi ili valovi magle, a ne dio magle. |
| b2-Neger-1369 | lv | HIGH | Crnac | Crnac (pogrdno, zastarjelo) | Njemački izraz je zastario i uvredljiv; bosanski prevod treba označiti njegov re |
| b2-Neuauflage-1373 | lv | HIGH |  • Revidirano izdanje | Novo izdanje • Revidirano izdanje | Prvi prevod nedostaje; Neuauflage znači novo ili ponovljeno izdanje. |
| b2-Neuerung-1377 | lv | HIGH | Nadogradnju | Inovacija | Neuerung znači inovacija ili novina; 'nadogradnju' znači upgrade i još je u pogr |
| b2-nichtig-1380 | lv | HIGH | Praznina • Ništavna • Beznačajna • Beznačajna | Nevažeći • Poništen • Ništavan • Beznačajan | Prvi prevod je pogrešan, a ostali imaju pogrešan rod ili ponavljaju isto značenj |
| b2-normieren-1387 | lv | HIGH | To ration | Normirati | Normieren znači normirati ili standardizovati; trenutni prevod je engleski i pog |
| b2-Notwehr-1390 | lv | HIGH | Neophodna zaštita | Nužna odbrana | Notwehr je pravni izraz 'nužna odbrana', a ne opšta neophodna zaštita. |
| b2-Nutzholz-1392 | lv | HIGH | Dosijea predmeta | Građevinsko drvo | Nutzholz znači korisno, odnosno obrađeno drvo; trenutni prevod znači predmetni d |
| b2-obgleich-1395 | lv | HIGH | Iako iako | Iako • Premda | Prevod nepotrebno ponavlja istu riječ; potrebni su različiti prirodni ekvivalent |
| b2-Ölbohrung-1404 | lv | HIGH | Bunar za ulje | Bušenje nafte | Ölbohrung je bušenje radi nafte, a ne naftni bunar. |
| b2-Operator-1410 | lv | HIGH | Veliki specijalista kompjuterske ekipe | Operator velikih računara | Trenutni prevod je gramatički i semantički nejasan; znači operator velikih račun |
| b2-Organempfänger-1413 | lv | HIGH | Primaoca organa za transplantaciju | Primalac organa za transplantaciju | 'Primaoca' je genitiv; rječnička forma treba nominativ 'primalac'. |
| b2-pachten-1424 | lv | HIGH | Za iznajmljivanje | Zakupiti | Njemački glagol preveden je kao prijedložna imenička fraza. |
| b2-Parteibuch-1429 | lv | HIGH | Člansku kartu | Partijska knjižica | Parteibuch je partijska knjižica ili članska knjižica, ne samo članska karta. |
| b2-parteilich-1431 | lv | HIGH | Partizanske stranke | Partijski • stranački | Prijevod je pogrešna imenička fraza; pridjev znači partijski ili stranački. |
| b2-pfänden-1444 | lv | HIGH | Opišite imovinu • Zalog | Zaplijeniti • staviti pod zalog | Prijevod koristi imperativ i imenicu umjesto infinitiva glagola. |
| b2-Pfandschein-1445 | lv | HIGH | Znak zaloge | Potvrda o zalogu | Pfandschein je potvrda ili listić o zalogu, ne znak zaloge. |
| b2-Pflichtbesuch-1446 | lv | HIGH | Poziv iz ljubaznosti | Obavezna posjeta | Besuch je posjeta, a ne poziv; Pflicht označava obaveznost. |
| b2-pfuschen-1447 | lv | HIGH | Loš • Nekvalifikovan • Neuredan rad | Fušeriti • raditi loše • raditi nepažljivo | Njemački glagol preveden je pridjevima i imenicom, bez glagolskog značenja. |
| b2-Pilotsendung-1454 | lv | HIGH | Otvarač serije | Uvodna emisija serije | Otvarač nije prirodan ni tačan naziv za uvodnu televizijsku emisiju. |
| b2-Pilotstudie-1455 | lv | HIGH | Uvod u seriju istraživanja | Pilot-studija | Pilotstudija je preliminarna studija, a ne uvod u seriju istraživanja. |
| b2-porös-1460 | lv | HIGH | Porozna | Porozan | Pridjev je u ženskom rodu umjesto osnovnog muškog oblika. |
| b2-prämieren-1467 | lv | HIGH | Nagrada | Nagraditi | Glagol je pogrešno preveden imenicom. |
| b2-predigen-1469 | lv | HIGH | Propovedati | Propovijedati | Oblik je ekavski; u standardnom bosanskom treba ijekavski oblik propovijedati. |
| b2-PS-1477 | lv | HIGH | Konjskih snaga | Konjska snaga | Prijevod je u genitivu množine i nije osnovni oblik termina. |
| b2-Putsch-1479 | lv | HIGH | Putsch | Puč | Njemačka riječ nije prevedena; standardni bosanski ekvivalent je puč. |
| b2-querüber-1483 | lv | HIGH | Suprotno | Poprijeko | „Suprotno“ znači contrary/opposite, a ne prostorni pojam „preko/poprijeko“. |
| b2-Rabbiner-1486 | lv | HIGH | Rabine | Rabin | „Rabine“ je vokativ ili akuzativ; osnovni oblik imenice je „rabin“. |
| b2-Rain-1491 | lv | HIGH | Jež | Međa | „Rain“ je međa ili uski pojas zemlje između parcela, a ne životinja „jež“. |
| b2-rechtlos-1498 | lv | HIGH | Bezakonje | Lišen prava | „Bezakonje“ je lawlessness; „rechtlos“ opisuje osobu ili stanje bez pravnih prav |
| b2-rechtsfähig-1501 | lv | HIGH | Pravna sposobnost | Pravno sposoban | Bosanski prevod je imenica, a njemačka riječ je pridjev. |
| b2-Regenfront-1512 | lv | HIGH | Rain band | Kišna fronta | Prevod je na engleskom, a ne na bosanskom; „Regenfront“ znači kišna fronta. |
| b2-Reifeprüfung-1516 | lv | HIGH | Test spremnosti | Maturski ispit | Riječ označava završni/maturski ispit, ne opći test spremnosti. |
| b2-Reifezeugnis-1517 | lv | HIGH | Potvrda o spremnosti | Svjedočanstvo o maturi | Označava svjedočanstvo o položenoj maturi, a ne potvrdu opće spremnosti. |
| b2-Relief-1520 | lv | HIGH | Teren | Reljef | „Relief“ je reljefna skulptura ili reljef, dok „teren“ znači area/terrain. |
| b2-Ringelnatter-1526 | lv | HIGH | Gladan | Bjelouška | „Gladan“ znači hungry; Ringelnatter je zmija bjelouška/grass snake. |
| b2-Rüge-1535 | lv | HIGH | Grditi • Grditi | Ukor • Prijekor | Njemačka riječ je imenica, a trenutni prevod su glagoli u infinitivu. |
| b2-sächlich-1544 | lv | HIGH | ~es Geschlecht gram. • Bilo kojeg spola | Srednji rod gram. | „Bilo kojeg spola“ znači bilo koji spol, a ne gramatički srednji rod. |
| b2-sättigen-1552 | lv | HIGH | [dobra] hrana • Gozba • Hem. saturate | [dobro] nahraniti • Častiti • Hem. zasititi | Prva dva oblika su imenice, a „saturate“ nije bosanska riječ; njemački glagol tr |
| b2-sausen-1554 | lv | HIGH | Šuštati • Zviždati • Zviždati • Zviždati | Šuštati • Zviždati • Juriti • Hujati | Treće i četvrto značenje pogrešno su ponovljeni kao „zviždati“ umjesto kretanja  |
| b2-scheiden-1569 | lv | HIGH | [un]odvojen • Odvojen • Odvojen • Sich sch. lassen • Raskinuti • Raskinuti | [ra]zdvojiti • Odvojiti • Razdvojiti • Sich sch. lassen • Razvesti se • Rastati  | Aktivna značenja su prevedena pridjevima, a refleksivno značenje „scheiden lasse |
| b2-Scheitel-1571 | lv | HIGH | Glava • Vuča • Put | Teme • Paur • Razdjeljak | „Glava“, „vuča“ i „put“ ne prenose značenja tjemena, paur(a) i razdjeljka. |
| b2-scheitern-1572 | lv | HIGH | Neuspjeh • Raskinuti | Doživjeti neuspjeh • Propasti | Oba trenutna oblika nisu odgovarajući glagolski prevodi; „raskinuti“ znači preki |
| b2-schelmisch-1573 | lv | HIGH | Podjele | Nestašan | „Podjele“ znači divisions; schelmisch znači nestašan, vragolast ili šaljiv. |
| b2-schelten-1574 | lv | HIGH | Bart • Bart | Grditi • Grditi se | „Bart“ je pogrešan oblik; glagol schelten znači grditi ili koriti. |
| b2-Schieber-1577 | lv | HIGH | Vijak • Strelica • Špekulant | Zasun • Klizač • Špekulant | „Vijak“ i „strelica“ nisu odgovarajući prevodi za tehničke značenja Schieber. |
| b2-schillern-1581 | lv | HIGH | Prelivajući • Kupati se u različitim bojama | Prelivati se • Igrati u različitim bojama | Trenutni oblici nisu glagolski infinitivi, a „kupati se u bojama“ ne odgovara zn |
| b2-schlafwandeln-1583 | lv | HIGH | Biti zapanjen | Hodati u snu | „Biti zapanjen“ znači biti zatečen ili omamljen, a ne hodati u snu. |
| b2-Schlaganfall-1584 | lv | HIGH | Paraliza | Moždani udar | Paraliza može biti posljedica, ali Schlaganfall znači moždani udar. |
| b2-Schmarotzer-1591 | lv | HIGH | Proždrljivi • Parazit | Lijenčina • Parazit | „Proždrljivi“ znači halapljiv, dok Schmarotzer označava lijenčinu ili parazita. |
| b2-Schmerzensgeld-1593 | lv | HIGH | Bol money | Novčana naknada za pretrpljeni bol | Trenutni prevod sadrži englesku riječ i ne predstavlja bosanski izraz za naknadu |
| b2-schmollen-1595 | lv | HIGH | Oblačenje | Duriti se | „Oblačenje“ znači odijevanje, dok schmollen znači duriti se ili mrštiti se. |
| b2-Schuldschein-1606 | lv | HIGH | Mjenica | Dužničko pismo | Schuldschein je dužničko pismo/IOU, dok mjenica označava drugu vrstu vrijednosni |
| b2-Schutzimpfung-1609 | lv | HIGH | Zaštitno kalemljenje | Zaštitno cijepljenje | Kalemljenje znači cijepljenje biljaka; za vakcinaciju se u bosanskom koristi cij |
| b2-Schwarm-1612 | lv | HIGH | Strast • Zanos | Roj • Jato • Gomila | Schwarm prvenstveno znači roj/jato ili grupu; strast i zanos pripadaju drugom zn |
| b2-Schwebebahn-1617 | lv | HIGH | Suspenzija [željeznica]. | Viseća željeznica | Suspenzija označava ovjes/apstraktni pojam, ne vrstu željeznice. |
| b2-schwelen-1619 | lv | HIGH | Glowing | Tinjati | BS je ostavljen na engleskom; schwelen znači tinjati ili žeraviti se. |
| b2-schwinden-1623 | lv | HIGH | [umanjiti] • [ne]pojaviti se • Nestati | Smanjivati se • Nestajati • Izgubiti se | Umanjiti je tranzitivno, a ne pojaviti se znači suprotno od nestati. |
| b2-Segelflieger-1626 | lv | HIGH | Jedrilica | Pilot jedrilice | Segelflieger označava osobu koja upravlja jedrilicom, ne samu letjelicu. |
| b2-sickern-1643 | lv | HIGH | Kapanje • Sisati | Kapati • Prodirati | Sickern je glagol za kapanje/prodiranje; sisati znači vući tečnost ili dojiti. |
| b2-Silberschmied-1645 | lv | HIGH | Silversmith | Srebrar | BS je ostavljen na engleskom; Silberschmied znači srebrar, odnosno zanatlija koj |
| b2-Sorgenkind-1660 | lv | HIGH | Brigu o djetetu | Dijete koje zadaje brigu | Trenutni izraz znači brigu o djetetu, dok Sorgenkind znači dijete koje izaziva b |
| b2-Spießbürger-1671 | lv | HIGH | Stalni državljanin | Malograđanin | Spießbürger znači malograđanin, ne stalni državljanin. |
| b2-Spott-1673 | lv | HIGH | Ruganje • Izbijanje zuba • Opaka šala | Ruganje • Podsmijeh • Zlobna šala | Izbijanje zuba nema značenje Spott; odgovarajući smisao je podsmijeh ili izrugiv |
| b2-spotten-1675 | lv | HIGH | Lažno • Izbijanje zuba | Ismijavati • Rugati se | Oba trenutna izraza su semantički pogrešna za glagol spotten. |
| b2-sprengen-1678 | lv | HIGH | [na]blast • Poškropite • Vodom | Raznijeti eksplozijom • Poškropiti • Zalijevati | Trenutni oblici su neujednačeni, a 'Vodom' nije prevod glagola. |
| b2-Sprengstoff-1679 | lv | HIGH | Eksplozivno | Eksploziv | Eksplozivno je pridjev/prilog, dok je Sprengstoff imenica: eksploziv. |
| b2-Spross-1680 | lv | HIGH | Bot. potomak • Izdanak • Trans. potomstvo • Potomstvo | Bot. izdanak • Mladica • Pren. potomak • Izdanak | Botaničko i preneseno značenje su zamijenjeni, a 'Trans.' nije odgovarajuća ozna |
| b2-starren-1694 | lv | HIGH | Pažljivo pogledajte • Odsjaj | Zuriti • Buljiti | Prvi izraz je imperativ, a 'ods j aj' je imenica; oba promašuju značenje zurenja |
| b2-streitbar-1708 | lv | HIGH | Argumentiran | Svadljiv | Streitbar znači svadljiv ili borben, dok 'argumentiran' znači dobro obrazložen. |
| b2-Stripper-1711 | lv | HIGH | Striptizeta | Izvođač striptiza | Striptizeta označava žensku izvođačicu, dok je Stripper ovdje muška imenica. |
| b2-Tagegeld-1722 | lv | HIGH | Službeni put dnevnica | Dnevnica za službeni put | Trenutni niz riječi je gramatički neispravan i neprirodan. |
| b2-Tagelohn-1723 | lv | HIGH | Dnevnica | Dnevna plata | Tagelohn je dnevna plata/nadnica, dok dnevnica obično znači dnevni dodatak za tr |
| b2-Testperson-1730 | lv | HIGH | Suđeno lice | Testna osoba | „Suđeno lice“ znači osoba kojoj se sudilo, a ne osoba koja učestvuje u testiranj |
| b2-tönen-1735 | lv | HIGH | Za zvuk • Za ton • Za davanje nijanse | Zvučati • Itonirati • Dati nijansu | Trenutni tekst je negramatičan i sastoji se od neprirodnih fragmenta s prijedlog |
| b2-totschießen-1740 | lv | HIGH | Pucati | Ustrijeliti | Glagol uključuje značenje ubiti pucanjem; „pucati“ znači samo ispaljivati hice. |
| b2-Trägerrakete-1744 | lv | HIGH | Lanser | Noseća raketa | „Lanser“ je bacač/lansirna naprava, dok Trägerrakete označava raketu-nosač. |
| b2-treulos-1751 | lv | HIGH | Nepouzdan • Nepouzdan | Nevjeran • Nelojalan | „Nepouzdan“ znači unreliable, dok treulos znači nevjeran ili nelojalan. |
| b2-trügen-1757 | lv | HIGH | Trik • Obmanuti | Varati • Obmanjivati | Prvi oblik je imenica, a drugi svršeni glagol; oba ne odgovaraju prirodno njemač |
| b2-überhören-1769 | lv | HIGH | Ne [da] čuje zbog nepažnje • Pretvarajte se da ne čujete | Ne čuti zbog nepažnje • Pravити se da ne čuješ | Prvi prevod je negramatičan, a drugi je u imperativu umjesto u infinitivu. |
| b2-übersichtlich-1777 | lv | HIGH | Transparentan | Pregledan | „Transparentan“ znači proziran ili transparentan, dok übersichtlich znači pregle |
| b2-ultimativ-1783 | lv | HIGH | Ultimate | Ultimativan | Prevod je engleski i ne odgovara njemačkom pridjevu; bosanski ekvivalent je „ult |
| b2-umhören, sich-1791 | lv | HIGH | Da slušam | Raspitati se | Sich umhören znači raspitati se ili prikupiti informacije, a ne slušati. |
| b2-umkreisen-1793 | lv | HIGH | Okružiti • Opsjedati • Lebdjeti • Lansirati • Krug | Okružiti • Opkoliti • Kružiti • Kružiti oko • Kružiti | Lansirati i Krug nisu odgovarajući glagolski prevodi za umkreisen. |
| b2-umschließen-1797 | lv | HIGH | Uključiti • Obuhvatiti • Obuhvatiti | Okružiti • Obuhvatiti • Obuhvatiti | Uključiti znači uključiti ili aktivirati, ne zatvoriti odnosno okružiti. |
| b2-unangebracht-1807 | lv | HIGH | Van mjesta | Nije na mjestu | Van mjesta nije prirodan bosanski izraz za neprimjereno ili neumjesno. |
| b2-unberechenbar-1818 | lv | HIGH | Neprocjenjivo | Nepredvidivo | Neprocjenjivo znači veoma vrijedno, dok unberechenbar znači nepredvidivo ili nes |
| b2-Unfug-1827 | lv | HIGH | Zlodjelo • Odsustvo • Razvratno djelo | Zlodjelo • Glupost • Razvratno djelo | Odsustvo znači absence, a Unfug u ovom smislu znači glupost, besmislica ili nedj |
| b2-Union-1830 | lv | HIGH | Sindikat • Sindikat | Savez • Unija | Sindikat je trade union, dok Union znači savez ili unija. |
| b2-unterbreiten-1835 | lv | HIGH | Objasniti • Prisutan | Predložiti • Podnijeti | Unterbreiten znači predložiti, iznijeti ili podnijeti; Prisutan znači present. |
| b2-Unterlage-1843 | lv | HIGH | Trajna • Podloga • Podloga • Podrška • Podaci • Dokumentacija | Podloga • Podloga • Podmetač • Potpora • Podaci • Dokumentacija | Trajna ne odgovara značenju podloge, a Podloga je ponovljena tamo gdje odgovara  |
| b2-unterordnen-1845 | lv | HIGH | Podređeni • Subjekt | Podrediti • Podčiniti | Bosanski tekstovi su imenice/pridjevi i ne odgovaraju glagolu „unterordnen“. |
| b2-Untertan-1848 | lv | HIGH | Građanin | Podanik | „Untertan“ znači podanik, a ne građanin. |
| b2-unterwerfen-1851 | lv | HIGH | Predmet | Podrediti | „Predmet“ je imenica; njemački glagol znači podrediti ili pokoriti. |
| b2-sich unterwerfen-1852 | lv | HIGH | Poslušati | Podrediti se | Glagol znači podrediti se/pokoriti se, ne samo slušati. |
| b2-unüberlegt-1854 | lv | HIGH | Bezobziran • Bezobziran | Nepromišljen • Neobazriv | „Bezobziran“ znači nesmotren prema drugima, dok „unüberlegt“ znači nepromišljen. |
| b2-Urkunde-1864 | lv | HIGH | Dokument • Članak | Dokument • Povelja | „Članak“ znači članak, dok „Urkunde“ znači službeni dokument, isprava ili povelj |
| b2-veranlassen-1872 | lv | HIGH | Uzrok • Inicirati • Ohrabriti | Izazvati • Inicirati • Navesti | Prvi oblik je imenica, a „ohrabriti“ znači ohrabriti, ne navesti ili prouzrokova |
| b2-verbittert-1873 | lv | HIGH | Uznemiren | Ogorčen | „Verbittert“ znači ogorčen ili ogorčeno razočaran, ne samo uznemiren. |
| b2-verborgen-1874 | lv | HIGH | Skrivena tajna | Skriven • Tajni | Trenutni izraz znači „skrivena tajna“ i nije odgovarajući niz pridjeva. |
| b2-verdauen-1875 | lv | HIGH | Variti | Probaviti | „Variti“ znači zavarivati; „verdauen“ znači probaviti ili svariti. |
| b2-verehren-1879 | lv | HIGH | Čast • Poštovanje • Komp. [da] daju | Poštovati • Cijeniti • Razg. Darivati | Prva dva oblika su imenice, a treći je nerazumljiv; njemački izraz je glagol. |
| b2-vererben-1883 | lv | HIGH | Ostaviti • Naslijediti | Ostaviti • Ostaviti u naslijeđe | „Naslijediti“ znači primiti nasljedstvo, dok „vererben“ znači ostaviti nekome u  |
| b2-Verfasser-1887 | lv | HIGH | Kompozitor • Autor | Pisac • Autor | „Kompozitor“ znači skladatelj, a „Verfasser“ znači pisac ili autor. |
| b2-Verfügung-1889 | lv | HIGH | Red | Naredba | „Verfügung“ znači naredba ili nalog; „red“ prvenstveno znači poredak ili redosli |
| b2-verhasst-1896 | lv | HIGH | Omražen • Nevidljiv | Omražen • Omrznut | „Nevidljiv“ znači invisible; drugi prijevod mora označavati ono što je omraženo. |
| b2-verhöhnen-1898 | lv | HIGH | Lažna • Udubljenje | Ismijavati • Izrugivati | Trenutni prijevodi znače „lažna“ i „udubljenje“, a ne ismijavati ili izrugivati. |
| b2-Verhör-1899 | lv | HIGH | [od] ispitivanja | Ispitivanje | Potrebna je imenica u nominativu; trenutni izraz znači „od ispitivanja“. |
| b2-verhören-1900 | lv | HIGH | [od] ispitivanja | Ispitivati | Njemačka riječ je glagol, dok je trenutni bosanski izraz nepravilna imenička sin |
| b2-sich verhören-1901 | lv | HIGH | Slušaj ponovo | Pogrešno čuti | „Sich verhören“ znači pogrešno čuti ili krivo razumjeti, ne slušati ponovo. |
| b2-Verlauf-1903 | lv | HIGH | Napredak • Napredak | Tok • Tijek | „Verlauf“ znači tok ili tijek događaja/procesa, a ne napredak. |
| b2-Vers-1912 | lv | HIGH | Članak | Stih | „Vers“ znači stih, dok „članak“ znači Artikel. |
| b2-Versehen-1915 | lv | HIGH | Greška • Revizija | Greška • Previd | „Revizija“ znači pregled ili kontrolu, ne nenamjerni previd. |
| b2-verkommen-1916 | lv | HIGH | Odbiti • Potonuti • Zalutati | Propasti • Moralno se iskvariti • Skrenuti s pravog puta | „Odbiti“ i „zalutati“ ne odgovaraju značenju propadanja i moralnog posrnuća. |
| b2-verkörpern-1917 | lv | HIGH | Utjelovljenje | Utjeloviti | Njemačka riječ je glagol, dok je „utjelovljenje“ imenica. |
| b2-verkümmern-1919 | lv | HIGH | Odbiti | Venuti | „Verkümmern“ znači venuti ili propadati, a ne odbiti. |
| b2-verleumden-1921 | lv | HIGH | Kleveta • Kleveta | Klevetati • Ocrnjivati | Njemačka riječ je glagol, a postojeći prevod je imenica i ponovljen je. |
| b2-sich vermehren-1923 | lv | HIGH | Množenje | Množiti se • Razmnožavati se | Njemačka riječ je povratni glagol, dok je „množenje“ imenica. |
| b2-vermessen-1924 | lv | HIGH | Meriti | Izmjeriti | „Meriti“ je ekavski oblik; standardni bosanski koristi ijekavski „mjeriti“ ili „ |
| b2-vermögend-1927 | lv | HIGH | Bogat • Hranjen | Bogat • Imućan | „Hranjen“ znači fed, a ne bogat ili imućan. |
| b2-verordnen-1930 | lv | HIGH | Odrediti • Red • Med. potpisati | Odrediti • Narediti • Med. propisati | „Red“ nije glagolski prevod, a medicinsko značenje je propisati, ne potpisati. |
| b2-verpfänden-1931 | lv | HIGH | Zalog | Založiti | Njemačka riječ je glagol, dok je „zalog“ imenica. |
| b2-versagen-1934 | lv | HIGH | Poriču • Odbijaju • Odbacuju • Neposlušnost • Odbijaju da služe • Izgledaju kuka | Zakazati • Odbiti • Odbaciti • Ne poslušati • Odbiti služiti • Pokazati se kukav | Prevod miješa glagolske oblike i imenicu te nije u infinitivu; neki oblici su i  |
| b2-verspotten-1943 | lv | HIGH | Dent • Ismijavanje | Izrugivati • Ismijavati | „Dent“ nije bosanska riječ, a „ismijavanje“ je imenica umjesto glagola. |
| b2-verstauchen-1945 | lv | HIGH | Dislocirati | Uganu ti | „Verstauchen“ znači uganu ti ili iščašiti zglob, dok „dislocirati“ nije precizno |
| b2-verweilen-1956 | lv | HIGH | Visi okolo | Visiti okolo | „Visi“ je glagolski oblik za treće lice, a natuknica treba infinitiv „visiti“. |
| b2-verwickeln-1959 | lv | HIGH | Zbuniti • Pril. preplitati • Ometati | Zapetljati • Preneseno: uvući • Uključiti | Prevod sadrži pogrešne ili neprirodne ekvivalente i ne prenosi značenje uplitanj |
| b2-Verwirrung-1961 | lv | HIGH | Zbunjenost • Stid | Pomutnja • Zbunjenost | „Stid“ znači shame, a ne confusion ili bewilderment. |
| b2-verwöhnen-1962 | lv | HIGH | Pokvariti • Pokvariti | Razmaziti • Ljutiti | „Pokvariti“ znači ruin; glagol „verwöhnen“ znači razmaziti ili ugađati. |
| b2-sich verzögern-1968 | lv | HIGH | Odlagati • Odlagati | Kasniti • Odgađati se | Povratni njemački glagol preveden je aktivnim, ekavskim i ponovljenim oblikom. |
| b2-verzollen-1969 | lv | HIGH | Da carine | Ocariniti | Glagol znači ocariniti, a ne 'da carine'. |
| b2-vollzählig-1982 | lv | HIGH | Postoji u potpunosti | U punom broju | Izraz znači da je neko ili nešto prisutno u punom broju, ne da 'postoji u potpun |
| b2-Volumen-1984 | lv | HIGH | Jačina zvuka • Jačina zvuka | Obim • Zapremina | 'Jačina zvuka' znači Lautstärke; Volumen označava obim ili zapreminu. |
| b2-Vorbehalt-1989 | lv | HIGH | Stanje | Uslov | 'Stanje' znači stanje/status; Vorbehalt u ovom smislu znači uslov ili ograda. |
| b2-vorder-1993 | lv | HIGH | Front | Prednji | Njemačka riječ je pridjev, a 'front' je imenica i nije odgovarajući bosanski pre |
| b2-Vorliebe-1999 | lv | HIGH | Posebno dopao | Posebna sklonost | 'Posebno dopao' je gramatički neispravno i ne predstavlja imenicu Vorliebe. |
| b2-vortragen-2008 | lv | HIGH | Predavanje • Izvoditi • Recitovati • Igrati | Držati predavanje • Izvoditi • Recitovati • Svirati | Prvi prevod je imenica umjesto glagola, a 'igrati' nije precizno za izvođenje mu |
| b2-Wacholder-2017 | lv | HIGH | Jela • Kleka | Kleka • Kleka | 'Jela' je fir; Wacholder znači kleka odnosno borovica. |
| b2-Wählscheibe-2024 | lv | HIGH | Tastatura za biranje telefona | Rotacioni brojčanik telefona | Wählscheibe je rotacioni telefonski brojčanik, a ne tastatura. |
| b2-wahren-2025 | lv | HIGH | Spasiti | Čuvati | Glagol znači čuvati, sačuvati ili održavati, a 'spasiti' znači izbaviti. |
| b2-wahrnehmen-2026 | lv | HIGH | Percipe | Perципirati | 'Percipe' nije bosanska riječ niti odgovarajući glagolski oblik. |
| b2-wankelmütig-2029 | lv | HIGH | Kolebajući se | Kolebljiv | Bosanski izraz je glagolski prilog, a njemačka riječ je pridjev koji znači neodl |
| b2-wanken-2030 | lv | HIGH | Roštiljanje • Pril. fluktuirati | Teturati • pren. kolebati se | Prvi prevod je pogrešan, a fluktuirati ne odgovara uobičajenom prenesenom značen |
| b2-Warenausgabe-2031 | lv | HIGH | Kontrola i izdavanje kupovine | Izdavanje robe | Warenausgabe znači izdavanje robe, ne kontrolu i izdavanje kupovine. |
| b2-Weltlage-2049 | lv | HIGH | Međunarodnoj situaciji | Stanje u svijetu | Tekući izraz je padežno zavisan i dodaje međunarodno; potrebna je imenička sinta |
| b2-Werkbank-2054 | lv | HIGH | Mašinski alat | Radna klupa | Werkbank je radna klupa ili radni sto, a ne mašinski alat. |
| b2-Werktätige-2057 | lv | HIGH | Onaj radni | Radnik | Tekući izraz je gramatički neispravan i ne znači radnik ili zaposlena osoba. |
| b2-Wettlauf-2061 | lv | HIGH | Sp. žurna trka • Žurba | Sp. trka • Trka | Žurna trka je pogrešan izraz, a žurba ne znači trka u ovom kontekstu. |
| b2-wider-2066 | lv | HIGH | Vs | Protiv | Vs nije bosanski prevod niti odgovarajuća standardna skraćenica za pret. |
| b2-Willkür-2075 | lv | HIGH | Proizvoljno | Samovolja | Njemačka riječ je imenica; proizvoljno je prilog ili pridjev, a ne odgovarajući  |
| b2-winden-2077 | lv | HIGH | Uviti • Uviti • Pletenicu | Vijati • Motati • Plesti | Treća stavka je imenica u akuzativu, a prevodi se glagolima vijati, motati i ple |
| b2-zuerkennen-2084 | lv | HIGH | Naručiti • Dodijeliti | Dosuditi • Dodijeliti | Naručiti znači order; zuerkennen u prvom značenju znači dosuditi ili priznati. |
| b2-Zusage-2091 | lv | HIGH | Prijatan odgovor | Potvrdan odgovor | „Prijatan odgovor“ znači ugodan odgovor, a Zusage je potvrdan ili saglasan odgov |
| b2-zutrauen-2097 | lv | HIGH | Očekivati ​​ • Misliti sposoban | Očekivati • smatrati sposobnim | Drugi prijevod je gramatički neispravan; treba značiti smatrati nekoga sposobnim |
| b2-Zuversicht-2098 | lv | HIGH | Oslanjanje | Pouzdanje | Zuversicht znači pouzdanje ili samouvjerenost, dok „oslanjanje“ označava relianc |
| b2-Zwirn-2107 | lv | HIGH | Thread | Konac | Bosanski prijevod je ostao na engleskom; Zwirn znači konac. |
| b2-sich-einschraenken | study.translation | HIGH | Ograničite se | Ograničiti se | Infinitiv njemačke natuknice preveden je kao imperativ u 2. licu množine. |
| b2-sich-entsinnen | study.translation | HIGH | Zapamtiti • Zapamtiti | Sjetiti se • Prisjetiti se | „Zapamtiti“ znači memorisati, a ne sjetiti se ili prisjetiti se. |
| b2-sich-ergeben | study.translation | HIGH | Rezultirati • Odustati | Proizlaziti • Predati se | „Odustati“ znači prestati pokušavati, dok sich ergeben u ovom smislu znači preda |
| b2-sich-erniedrigen | study.translation | HIGH | Ponizi se | poniziti se | Trenutni oblik je imperativ; treba infinitiv s povratnom zamjenicom. |
| b2-sich-erregen | study.translation | HIGH | Brinuti o | uzrujavati se zbog | Brinuti o znači voditi brigu o, a ne uzrujavati se ili biti ogorčen zbog nečega. |
| b2-sich-erweisen | study.translation | HIGH | Ispostavilo se da jeste | pokazati se kao | Trenutni tekst je glagolska rečenica u prošlom vremenu, ne infinitiv i ne prenos |
| b2-sich-fassen | study.translation | HIGH | Uhvatiti • Primiti • Obuzdati | pribrati se • sabrati se • savladati se | Navedeni glagoli uglavnom nisu povratni i ne znače sabrati se ili povratiti pris |
| b2-sich-fassen | study.rektion | HIGH | an + kam? | nema obavezne rekcije | Sich fassen se koristi bez obaveznog prijedloga; an je moguć samo u dodatnim kon |
| b2-sich-fassen | study.explanation | HIGH | Sich fassen zahtijeva definitivni prijedlog an + kam?. | Sich fassen ne zahtijeva određeni prijedlog. | Glagol nema obaveznu prijedložnu rekciju. |
| b2-sich-fassen | study.forms | HIGH | an + kam? | nema obavezne rekcije | An nije obavezna rekcija glagola sich fassen. |
| b2-sich-fuegen | study.translation | HIGH | Prilagoditi • Poslušati | prilagoditi se • pokoriti se | Nedostaje povratna zamjenica, a poslušati ne odgovara značenju pokoriti se. |
| b2-sich-genieren | study.translation | HIGH | Da se stidim | stidjeti se | Trenutni tekst je zavisna rečenica u prvom licu, a treba infinitiv. |
| b2-sich-gestalten | study.translation | HIGH | Formirati u | oblikovati se u | Nedostaje povratna zamjenica, a glagol formirati ima drugačiju valencije i znače |
| b2-sich-herausbilden | study.translation | HIGH | Formirati u | Oblikovati se | Nedostaje refleksivno značenje; "formirati u" je negramatično i semantički nepot |
| b2-sich-herausshalten | study.translation | HIGH | Držati podalje od | Držati se podalje od | Nedostaje refleksivno se, pa se značenje mijenja u aktivno držati nešto podalje. |
| b2-sich-herausstellen | study.translation | HIGH | Ispostavilo se da jeste | Ispostaviti se, pokazati se | Sadašnji oblik je rečenični fragment i ne prenosi infinitivno značenje glagola. |
| b2-sich-herausstellen | study.explanation | HIGH | Sich herausstellen zahtijeva definitivni prijedlog als + what?. | Sich herausstellen zahtijeva određeni prijedlog als + šta?. | Tekst sadrži englesko "what?" i neprirodno "definitivni prijedlog". |
| b2-sich-hervortun | study.explanation | HIGH | Sich hervortun zahtijeva određeni prijedlog u + where?. | Sich hervortun zahtijeva određeni prijedlog u + čemu?. | Tekst sadrži englesko "where?" umjesto bosanskog padežnog pitanja. |
| b2-sich-hingeben | study.translation | HIGH | Predaja • Predaja | Predati se • posvetiti se | Imenice ne odgovaraju infinitivnom glagolu i ne razlikuju navedena značenja. |
| b2-sich-hingeben | study.explanation | HIGH | Sich hingeben zahtijeva + za koga?. | Sich hingeben zahtijeva + kome/čemu?. | Glagol se veže s dativom, ne s konstrukcijom "za koga". |
| b2-hochwasser | study.comparison[1].meaning | HIGH | Ponovo izdati | Ponovljeno izdanje | Bosanski tekst je glagol, dok je njemačka natuknica imenica za ponovljeno izdanj |
| b2-leiden-study | study.translation | HIGH | Duga i teška bolest | Patnja • bolest | Das Leiden prvenstveno znači patnju ili tegobu, a ne nužno dugu i tešku bolest. |
| b2-nachdruck | study.comparison[1].meaning | HIGH | Ponovo izdati | Ponovljeno izdanje | Bosanski tekst je glagol, dok je njemačka natuknica imenica. |
| b2-sich-paaren | study.translation | HIGH | Za parenje sa | Pariti se s(a) | Sadašnji izraz je imenica s prijedlogom, a ne prirodan refleksivni glagolski pre |
| b2-sich-paaren | study.explanation | HIGH | Sich paaren zahtijeva definitivni prijedlog mit + kam?. | Sich paaren zahtijeva određeni prijedlog mit + kim?. | "Definitivni" je neprirodno, a "kam" nije bosansko pitanje za instrumental. |
| b2-sich-scheren | study.translation | HIGH | Pobrini se | Mariti za • Brinuti se za | Pobrini se je imperativ i znači 'take care'; sich scheren znači mariti ili brinu |
| b2-sofern | study.translation | HIGH | Ako • To pod uvjetom | Ako • Pod uslovom da | Drugi prijevod je gramatički nepotpun i treba veznik da. |
| b2-sofern | sectionAccents.explanation | HIGH | sofät | sofern | Njemačka riječ u oznaci je pogrešno napisana. |
| b2-sich-vereinigen | study.translation | HIGH | Spojiti sa | Ujediniti se s | Nedostaje povratna čestica se, a spojiti znači spojiti nešto, ne ujediniti se s  |
| b2-sich-versehen | study.translation | HIGH | Zaboraviti • Opremiti sa | Pogriješiti • Opremiti se | sich versehen znači pogriješiti ili opremiti se; zaboraviti je pogrešno značenje |
| b2-sich-versehen | study.explanation | HIGH | Sich verschein zahtijeva određeni prijedlog mit + kam?. | Sich versehen zahtijeva određeni prijedlog mit + kam?. | Njemački glagol je u tekstu pogrešno napisan kao verschein. |
| b2-sich-versoehnen | study.translation | HIGH | Trpiti | Pomiriti se s | Trpiti znači patiti; sich versöhnen znači pomiriti se ili izmiriti se s nekim. |
| b2-sich-verstellen | study.translation | HIGH | Imitirati | Pretvarati se | Imitirati znači oponašati; sich verstellen znači pretvarati se ili prikazivati s |
| b2-sich-verwundern | study.translation | HIGH | Pitam se | Čuditi se | Pitam se znači 'wonder about' u prvom licu; infinitivni prijevod je čuditi se. |
| b2-sich-widersetzen | study.translation | HIGH | Otpor • Lice | Suprotstaviti se • Oduprijeti se | Postojeći oblici su imenice i ne prenose značenje glagola sich widersetzen. |
| b2-sich-widersetzen | study.explanation | HIGH | Sich widersetzen zahtijeva + za koga?. | Sich widersetzen zahtijeva + kome?. | Njemački dativ kam? odgovara bosanskom pitanju kome?, a ne za koga?. |
| b2-zuweisen | study.translation | HIGH | Dodijeliti • Dodijeliti | Dodijeliti • Rasporediti | Drugi prijevod duplira prvi i ne prenosi značenje „norīkot“ (rasporediti/norirat |
| b2-zuweisen | study.explanation | HIGH | Glavna ideja: zuweisen znači službeno dodijeliti ili dodijeliti—zadatak, ulogu,  | Glavna ideja: zuweisen znači službeno dodijeliti ili rasporediti zadatak, ulogu, | Ponavlja „dodijeliti“ umjesto „rasporediti“; „Deljivo“ je ekavizam, a crtica je  |
| b2-zuweisen | study.comparison[0].meaning | HIGH | Dodijeliti • Dodijeliti | Dodijeliti • Rasporediti | Drugi navedeni smisao nije preveden. |
| b2-zuweisen | study.important.text | HIGH | Zuweisen = dodijeliti ili službeno dodijeliti. Savršeno: dodijeljeno. Deljivo: w | Zuweisen = službeno dodijeliti ili rasporediti. Perfekt: zugewiesen. Djeljivo: w | Duplira prijevod, pogrešno prevodi norīkot i koristi nepravilan naziv „Savršeno“ |
| b2-zuwider | study.translation | HIGH | Protiv • Suprotno • Nesviđanju | Protiv • Suprotno • Ne sviđati se | „Nesviđanju“ nije pravilna infinitivna konstrukcija ni prirodan bosanski izraz. |
| b2-zuwider | study.explanation | HIGH | Glavna ideja: zuwider je riječ s više funkcija. Kao prijedlog + dativ, znači "pr | Glavna ideja: zuwider je riječ s više funkcija. Kao prijedlog + dativ znači „pro | „Ne voljeti nekoga“ mijenja dativni smisao; „širim“ je pogrešna riječ umjesto „w |
| b2-zuwider | study.tip.leftBlocks[0].text | HIGH | Osnovno značenje: protiv / suprotno (mir zuwider). Idiomatski: jemandem zuwider  | Osnovno značenje: protiv / suprotno (mir zuwider). Idiomatski: jemandem zuwider  | „Ne voljeti nekoga“ pogrešno predstavlja konstrukciju s dativom. |
| b2-aendern | study.translation | HIGH | Promjena • Ispravna | Promijeniti • Ispraviti | Prijevodi su imenica i pridjev, a trebaju biti glagolski infinitivi. |
| b2-wechseln | study.translation | HIGH | Zamijeniti • Zamijeniti | Mijenjati • Zamijeniti | Prijevodi se dupliraju; prvi latvijski smisao znači mijenjati, a drugi zamijenit |
| b2-bieten | study.translation | HIGH | Ponuda • Obezbediti | Nuditi • Pružati | Prvi oblik je imenica, drugi je ekavski i semantički slabiji prijevod za „s pruž |
| b2-bieten | study.examples[4].lv | HIGH | Šta nešto pruža • Anbieten | Ono što nešto pruža • Anbieten | „Šta nešto pruža“ nije gramatički potpuna bosanska konstrukcija. |
| b2-anbieten | study.important.text | HIGH | Anbieten = ponuditi aktivno. Deljivo: cvekla ... an. Savršeno: angeboten. | Anbieten = aktivno nuditi. Djeljivo: biete ... an. Perfekt: angeboten. | „cvekla“ je očigledno pogrešna riječ umjesto „biete“, a „Deljivo“ je ekavizam. |
| b2-fordern | study.translation | HIGH | Zahtijevaju • Zahtijevaju | Zahtijevati • Tražiti | Oba oblika su 3. lice množine i dupliraju se; trebaju infinitivi s dva različita |
| b2-foerdern | study.translation | HIGH | Promovirati • Podršku | Poticati • Podržavati | Drugi oblik je imenica, a oba prijevoda trebaju biti glagoli; „poticati“ bolje o |
| b2-foerdern | study.important.text | HIGH | Förden | Fördern | U njemačkoj riječi nedostaje slovo „r“. |
| b2-verlaufen | study.explanation | HIGH | Verlaufen (bez sich) znači trčati ili kotrljati se. Nije sinonim za sich verlauf | Verlaufen (bez sich) znači odvijati se ili teći. Nije sinonim za sich verlaufen  | „Trčati ili kotrljati se“ pogrešno prevodi osnovno značenje glagola u ovom kontr |
| b2-verlaufen | sectionAccents.explanation | HIGH | {"blue":["verlaufen"],"purple":["trčati","Kotrljati se"],"red":["sich verlaufen" | {"blue":["verlaufen"],"purple":["Odvijati se","Teći"],"red":["sich verlaufen"]} | Ljubičasti naglasci ponavljaju pogrešne bosanske prijevode iz objašnjenja. |
| b2-zustimmen-4 | lv | MEDIUM | Da se složim | Složiti se | Infinitiv je preveden kao konstrukcija 'da se složim', koja znači 'da bih se slo |
| b2-Akrobatik-8 | lv | MEDIUM | Akrobacije | Akrobatika | 'Akrobacije' označava pojedinačne vratolomije, dok je njemačka imenica naziv dis |
| b2-anbelangen-13 | lv | MEDIUM | Referirati na | Ticati se | 'Referirati na' znači uputiti na ili pozvati se na, a ne 'ticati se'. |
| b2-anführen-17 | lv | MEDIUM | Spomenuti • Voditi | Navesti • Voditi | U ovom značenju 'anführen' znači navesti ili citirati, ne samo usputno spomenuti |
| b2-angehen-19 | lv | MEDIUM | Odnose na • Okrenuti se protiv | Ticati se • Suprotstaviti se | 'Odnose na' je gramatički nepotpuno bez 'se', a drugi prevod ne odgovara značenj |
| b2-angeblich-28 | lv | MEDIUM | Kao da • Naizgled | Navodno • Naizgled | 'Kao da' znači 'as if', dok 'angeblich' znači navodno ili prema navodima. |
| b2-angegriffen-33 | lv | MEDIUM | Umorni • Napadnuti | Umoran • Napadnut | Prevod je u množini, dok je njemački oblik particip/adjektiv bez određenja množi |
| b2-abbringen-36 | lv | MEDIUM | Odvratiti • Odvratiti • Odvratiti | Odvratiti • Odvratiti • Preusmjeriti | Treće značenje je 'skrenuti/preusmjeriti', a ne ponovo 'odvratiti'. |
| b2-abfällig-41 | lv | MEDIUM | Nepovoljan • Negativan • Loš • Neodobravajući | Pogrdan • Negativan • Loš • Omalovažavajući | Njemačko 'abfällig' prvenstveno označava pogrdan ili omalovažavajući stav/izraz. |
| b2-abfertigen-42 | lv | MEDIUM | Poslati • Poslati • Poslužiti • Postupati neljubazno | Otpremiti • Poslati • Obraditi • Otpraviti grubo | 'Poslužiti' znači poslužiti nekoga, a ne obraditi ili formalno otpremiti putnika |
| b2-abgetan-46 | lv | MEDIUM | Raskinut • Namiren | Završen • Riješen | 'Raskinut' znači prekinut/okončan odnos, a ne općenito završen ili otklonjen. |
| b2-abgrenzen-47 | lv | MEDIUM | Razgraničite se • Distancirajte | Razgraničiti • Distancirati se | Prevod je u imperativu i drugi glagol nema povratnu zamjenicu; njemački oblik je |
| b2-ableiten-50 | lv | MEDIUM | Dovesti • Preusmeriti • Izvesti | Odvoditi • Preusmjeriti • Izvesti | 'Dovesti' znači dovesti, ne odvoditi; 'Preusmeriti' je ekavski oblik, nepriklada |
| b2-sich-abfinden | study.rektion | MEDIUM | mit + kam? | mit + kim/čim? | kam? je latvijski oblik; bosanski upit za dativ je kim/čim? |
| b2-sich-abfinden | study.forms | MEDIUM | mit + kam? | mit + kim/čim? | kam? je latvijski oblik; bosanski upit za dativ je kim/čim? |
| b2-sich-abfinden | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-abwenden | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-befassen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-begnuegen | study.translation | MEDIUM | Biti zadovoljan sa | Zadovoljiti se | Njemački glagol znači zadovoljiti se nečim; trenutni izraz je manje precizan i n |
| b2-sich-begnuegen | study.forms | MEDIUM | mit + kam? | mit + kim/čim? | kam? je latvijski oblik; bosanski upit za dativ je kim/čim?. |
| b2-sich-begnuegen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-bemaechtigen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-berufen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-beschraenken | study.translation | MEDIUM | Ograničite se na | Ograničiti se na | Trenutni oblik je imperativ množine, a prijevod lekseme treba biti infinitiv. |
| b2-sich-beschraenken | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-betaetigen | study.translation | MEDIUM | Raditi • Učestvovati | Baviti se • Učestvovati | Sich betätigen znači baviti se nečim ili djelovati, a raditi je preširoko. |
| b2-sich-betaetigen | study.rektion | MEDIUM | in + kur? | in + gdje? | kur? je latvijski oblik; bosanski upit za mjesto je gdje?. |
| b2-sich-betaetigen | study.explanation | MEDIUM | Sich betätigen zahtijeva određeni prijedlog u + where?. | Sich betätigen zahtijeva određeni prijedlog in + gdje?. | where? je engleski ostatak, a u + where? nije usklađeno s rekcijom in + gdje?. |
| b2-sich-betaetigen | study.forms | MEDIUM | in + kur? | in + gdje? | kur? je latvijski oblik; bosanski upit za mjesto je gdje?. |
| b2-sich-betaetigen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-einlassen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-sich-einpraegen | study.explanation | MEDIUM | Sich einprägen zahtijeva određeni prijedlog u + ko?. | Sich einprägen zahtijeva određeni prijedlog in + šta?. | Glagol traži stvar kao objekt; ko? označava osobu, a u + ko? mijenja njemačku re |
| b2-sich-einpraegen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment znači upravljanje, a ovdje je riječ o gramatičkoj rekciji. |
| b2-Abschrift-62 | lv | MEDIUM | Transkript • Kopija | Prijepis • Kopija | Transkript znači zapis/transkript, ne noraksts odnosno prijepis. |
| b2-absondern-63 | lv | MEDIUM | Odvojeno • Odvojeno • Izolovati | Izlučiti • Odvojiti • Izolovati | Prevedeni oblici su adverbijalni ili ne razlikuju značenja; potrebni su glagoli. |
| b2-Abstecher-65 | lv | MEDIUM | Diverzija • Kratko putovanje | Skretanje • Kratki izlet | Diverzija znači odvraćanje pažnje ili vojnu operaciju, ne skretanje s puta. |
| b2-abstimmen-66 | lv | MEDIUM | Glasati • Složiti se | Glasati • Uskladiti | Složiti se znači biti saglasan, dok drugo značenje glagola jeste uskladiti. |
| b2-abtragen-71 | lv | MEDIUM | Odnijeti • Odnijeti • Rušiti | Odnijeti • Istrošiti • Srušiti | Drugo značenje je istrošiti/iznositi, a treći oblik treba biti precizniji svršen |
| b2-abtreten-72 | lv | MEDIUM | Povući • Dati • Ostaviti | Povući se • Predati • Otići | Nedostaje povratno se, a dati i ostaviti ne prenose značenja predati i otići. |
| b2-abweichen-73 | lv | MEDIUM | Razlikovati • Odstupiti | Razlikovati se • Odstupiti | U značenju razlikovati se glagol mora imati povratnu česticu se. |
| b2-Affäre-76 | lv | MEDIUM | Afera • Roman | Afera • Ljubavna veza | Roman znači književno djelo; ljubavna veza ili romansa odgovara drugom značenju. |
| b2-affig-80 | lv | MEDIUM | Upadljiv • Umišljen | Afektiran • Umišljen | Affig znači afektiran ili prenaglašen; upadljiv nije precizno prvo značenje. |
| b2-Andeutung-83 | lv | MEDIUM | Savjet • Indikacija | Nagovještaj • Indikacija | Savjet znači preporuka, a Andeutung označava nagovještaj ili naznaku. |
| b2-andeuten-84 | lv | MEDIUM | Naznačiti • Nagoveštaj | Naznačiti • Dati naslutiti | Nagoveštaj je imenica i ekavski oblik; ovdje je potreban glagolski ijekavski izr |
| b2-Anwärter-88 | lv | MEDIUM | Podnosilac • Kandidat | Pretendent • Kandidat | Podnosilac je applicant/submitter, dok Anwärter znači pretendent ili kandidat. |
| b2-Aufruf-99 | lv | MEDIUM | Uzvik • Poziv | Poziv • Apel | Uzvik je uzvik/exclamation, dok Aufruf u ovom smislu znači poziv ili apel. |
| b2-ausstopfen-110 | lv | MEDIUM | Puniti • Puniti • Puniti | Napuniti • Ispuniti • Preparirati | Sva tri prijevoda su ista i ne prenose posebno značenje izbavljanja/prepariranja |
| b2-ausströmen-111 | lv | MEDIUM | Curiti • Emanirati • Zračiti | Isticati • Izlaziti • Zračiti | Curiti znači kapati ili procurivati, a drugo značenje treba biti opće izlaziti/i |
| b2-austragen-112 | lv | MEDIUM | Nositi • Dostaviti • Pobijediti | Izložiti • Dostaviti • Izboriti | Pobijediti znači defeat, dok austragen u trećem smislu znači izboriti ili iznije |
| b2-auswärtig-115 | lv | MEDIUM | Vanjski • Vanjski poslovi | Inostrani • Vanjski poslovi | Prvo značenje je inostrani/strani, dok vanjski ne prenosi nužno značenje izvan z |
| b2-ausweichend-116 | lv | MEDIUM | Izbegavajući • Neizvestan | Izbjegavajući • Neizvjestan | Oba oblika su ekavska ili pogrešno ijekavska; bosanski standard traži izbjegavaj |
| b2-ausweisen-117 | lv | MEDIUM | Izbaciti • Poslati • Potvrditi • Dokazati | Izgnati • Deportovati • Potvrditi • Dokazati | Izbaciti i poslati su preopći; ovdje su potrebna značenja izgnati i deportovati. |
| b2-autonom-122 | lv | MEDIUM | Autonomna | Autonoman | Samostalnička natuknica treba biti u osnovnom muškom rodu, ne u ženskom rodu. |
| b2-Bankgeheimnis-127 | lv | MEDIUM | Bankovnu tajnu | Bankovna tajna | Prevod je u akuzativu; natuknica treba biti u nominativu. |
| b2-Bankleitzahl-128 | lv | MEDIUM | Indeks banke | Bankarski broj | Bankleitzahl je bankarski identifikacioni broj, ne doslovno indeks banke. |
| b2-Bankrott-132 | lv | MEDIUM | Bankrota | Bankrot | Oblik je u genitivu; natuknica treba biti u nominativu. |
| b2-barhäuptig-134 | lv | MEDIUM | Golom glavom | Gologlav | Njemačka natuknica je pridjev, dok je trenutni prevod instrumentalna fraza. |
| b2-Bauchhöhle-140 | lv | MEDIUM | Trbušne duplje | Trbušna duplja | Njemačka natuknica je jednina, a trenutni prevod je množina. |
| b2-bedürfen-147 | lv | MEDIUM | Potrebno • Biti neophodno | Trebati • Biti neophodno | Potrebno je pridjev/prilog, a natuknica je glagol. |
| b2-Beförderung-150 | lv | MEDIUM | Dostava • Transport • Promocija • Promocija | Dostava • Prevoz • Unapređenje • Unapređenje | Promocija ne odgovara značenju službenog unapređenja u ovom kontekstu. |
| b2-begutachten-157 | lv | MEDIUM | Dati povratne informacije • Ocijeniti | Stručno procijeniti • Ocijeniti | Begutachten znači pregledati i stručno procijeniti, ne dati povratnu informaciju |
| b2-Beihilfe-161 | lv | MEDIUM | Državna naknada • Bonus | Državna pomoć • Dodatak | Bonus nije opšti prevod za piemaksa/dodatak ili pomoć. |
| b2-beiläufig-162 | lv | MEDIUM | Slučajno • Slučajno • Usput • Prolazeći | Slučajan • Usputan • Uzgred • U prolazu | Drugi prevod je dupliran, a prvi i četvrti nisu u prirodnom obliku natuknice. |
| b2-beispiellos-163 | lv | MEDIUM | Nije bilo • Neviđeno • Ono što se ne može porediti ni sa čim | Bez presedana • Neviđen • Neuporediv | Nije bilo nije pridjevski prevod značenja neviđenog ili bez presedana. |
| b2-beizen-168 | lv | MEDIUM | Nagrizati • Mrljati | Nagrizati • Bajcovati | Mrljati znači uprljati mrljama, dok beizen u obradi materijala znači bajcovati/b |
| b2-bekräftigen-172 | lv | MEDIUM | Potvrditi • Ovjeriti | Potvrditi • Potkrijepiti | Ovjeriti znači formalno verificirati dokument, dok bekräftigen znači potvrditi i |
| b2-belichten-182 | lv | MEDIUM | Osvetliti • Izložiti | Osvijetliti • Eksponirati | Izložiti znači exhibit/display, a belichten u fotografiji znači eksponirati. |
| b2-belustigen-184 | lv | MEDIUM | Zabaviti | Zabavljati | Infinitiv ne prenosi prirodno značenje 'zabavljati/razveseljavati'. |
| b2-Benennung-186 | lv | MEDIUM | Imenovanje • Imenovanje • Ime | Imenovanje • Nazivanje • Naziv | Drugi i treći prevod nepotrebno ponavljaju prvi ili su previše opšti. |
| b2-beredt-189 | lv | MEDIUM | Pričljiv | Rječit | 'Pričljiv' znači talkative; 'beredt' znači rječit, elokventan. |
| b2-Bergbau-191 | lv | MEDIUM | Rudarska industrija | Rudarstvo | Uobičajeni bosanski naziv za Bergbau je 'rudarstvo', ne doslovna industrijska fr |
| b2-bergen-192 | lv | MEDIUM | Spasiti • Spasiti • Žetvu | Spasiti • Spasiti • Žeti | Treći prevod je imenica, a njemačka odrednica je infinitiv. |
| b2-bersten-195 | lv | MEDIUM | Puknuti • Puknuti • Puknuti • Puknuti | Puknuti • Napuknuti • Prsuti • Raspuknuti se | Sva četiri različita glagolska značenja svedena su na isti prevod. |
| b2-Besatzung-200 | lv | MEDIUM | Komanda • Posada • Posada • Okupacione vojne jedinice | Posada • Posada • Posada • Okupacione vojne jedinice | 'Komanda' znači command/team, dok Besatzung u ovom značenju znači posada. |
| b2-beschwören-206 | lv | MEDIUM | Zaklinjati se • Zaklinjati • Mnogo moliti | Zaklinjati se • Potvrditi zakletvom • Usrdno moliti | Drugi i treći prevod ne prenose precizno 'potvrditi zakletvom' i 'usrdno moliti' |
| b2-besiedeln-208 | lv | MEDIUM | Logoruju stanovnike | Naseliti stanovništvo | 'Logorovati' znači kampovati, a besiedeln znači naseliti/populirati područje. |
| b2-beständig-212 | lv | MEDIUM | Konstanta • Konstantna | Stalan • Konstantan | Prvi oblik je imenica, a drugi zahtijeva neizraženi ženski rod; potrebni su prid |
| b2-bestärken-213 | lv | MEDIUM | Ojačati • Ojačati • Ojačati | Ojačati • Pojačati • Ohrabriti | Treće značenje 'uzmundriti/ohrabriti' nije isto što i ojačati. |
| b2-bestrahlen-216 | lv | MEDIUM | Zračiti • Sjajiti | Zračiti • Osvijetliti | 'Sjajiti' je uglavnom neprelazno; apspīdēt znači osvijetliti nešto. |
| b2-bestürzt-218 | lv | MEDIUM | Iznenađen • Zbunjen • Zbunjen • Zbunjen | Potrešen • Zatečen • Zbunjen • Izbezumljen | 'Bestürzt' znači duboko potrešen/zatečen; 'iznenađen' je preslabo, a značenja se |
| b2-sich betragen-223 | lv | MEDIUM | Ponašati se • Ponašati | Ponašati se • Ponašati se | Drugi prevod gubi obaveznu povratnu česticu. |
| b2-Betriebsrat-224 | lv | MEDIUM | Savet kompanije | Savjet preduzeća | 'Savet' je ekavski oblik; 'preduzeće' je preciznije za Betriebsrat. |
| b2-beurlauben-226 | lv | MEDIUM | Odobravanje odsustva • Otpuštanje s posla | Odobriti odsustvo • Otpustiti s posla | Trenutni oblici su imenice, dok je njemačka odrednica glagol. |
| b2-Bewaffnung-228 | lv | MEDIUM | Naoružanje • Naoružanje | Naoružavanje • Naoružanje | Prvo značenje označava proces naoružavanja, a drugo oružje/naoružanje. |
| b2-Bezug-239 | lv | MEDIUM | Odnos • Priključak • Poklopac | Odnos • Veza • Navlaka | 'Priključak' je tehnički connection, a 'poklopac' je lid; ovdje su prirodniji ve |
| b2-bezüglich-240 | lv | MEDIUM | U vezi | U vezi s | Fraza je nedovršena bez prijedloga i dopune: 'u vezi s nečim'. |
| b2-bildlich-246 | lv | MEDIUM | Slikovno • Imaginativno • Figurativno | Slikovit • Prenesen • Figurativan | 'Imaginativno' znači maštovito, ne slikovito/preneseno. |
| b2-billigen-248 | lv | MEDIUM | Priznati kao dobro • Slažem se | Odobriti • Složiti se | Prvi izraz je neprirodan, a drugi je lični oblik umjesto infinitiva. |
| b2-bildend-257 | lv | MEDIUM | Maštoviti • Edukativni | Obrazovni • Edukativni | Maštovit znači imaginativan, ne obrazovan ili formativan. |
| b2-blähen-258 | lv | MEDIUM | Duvati • Naduvati • Naduvati | Nadimati • Napuhati • Naduvati | Duvati znači puhati; blähen znači nadimati ili napuhati. |
| b2-sich blähen-259 | lv | MEDIUM | Naduvati • Naduvati | Nadimati se • Napuhati se | Povratni njemački glagol zahtijeva povratni oblik u bosanskom. |
| b2-bleihaltig-262 | lv | MEDIUM | Koji sadrže olovo | Koji sadrži olovo | Opisni izraz treba biti u jednini, kao i njemački pridjev. |
| b2-Blutkonserve-274 | lv | MEDIUM | Krv iz konzerve | Konzervirana krv | Doslovni izraz 'krv iz konzerve' neprirodan je; riječ je o pohranjenoj krvi. |
| b2-Blutspender-278 | lv | MEDIUM | Donator | Davalac krvi | Donator je opći pojam; njemački izraz precizno znači davalac krvi. |
| b2-Bodensatz-280 | lv | MEDIUM | Talog • Šljam • Kvasac | Talog • Šljam • Vinski talog | Kvasac nije značenje riječi mieles; treći smisao označava talog, naročito vinski |
| b2-Bodenschätze-281 | lv | MEDIUM | Minerali | Rudna bogatstva | Bodenschätze znači prirodna odnosno rudna bogatstva, ne samo minerale. |
| b2-Borte-288 | lv | MEDIUM | Granica | Ukrasna traka | Borte je ukrasna tekstilna traka ili obrub, ne opća granica. |
| b2-Brandanschlag-294 | lv | MEDIUM | Paljevina | Podmetanje požara | Paljevina označava požar ili arson, ali ne prenosi jasno čin napada/podmetanja. |
| b2-brauen-298 | lv | MEDIUM | Praviti pivo • Variti | Praviti pivo • Kuhati pivo | Variti u bosanskom prvenstveno znači spajati metal; za brauen je kuhati ili prav |
| b2-brüten-304 | lv | MEDIUM | Razmišljati • Stalno razmišljati o nečemu | Leći na jaja • Stalno razmišljati o nečemu | Prvi smisao brüten je leći na jajima odnosno inkubirati, ne općenito razmišljati |
| b2-Buche-305 | lv | MEDIUM | Bukva • Grab | Bukva • Bukva | DE Buche znači bukva; grab je hornbeam i potiče iz konfliktnog latvijskog izvora |
| b2-Bügel-311 | lv | MEDIUM | Ručka • Obruč • Vješalica za odjeću • Stepenica | Ručka • Obruč • Vješalica za odjeću • Uzengija | Kāpslis označava uzengiju, ne stepenicu. |
| b2-Bühnenbildner-313 | lv | MEDIUM | Dekorater | Scenograf | Bühnenbildner je scenograf, stručnjak za scenografiju, a ne opći dekorater. |
| b2-Bundeswehr-316 | lv | MEDIUM | Nemačke oružane snage | Njemačke oružane snage | U bosanskom standardu koristi se ijekavski oblik Njemačke. |
| b2-bürgerlich-321 | lv | MEDIUM | Građanski • Građani • Buržoaski • Buržoaski | Građanski • Građanski • Buržoaski • Buržoazijski | Građani je imenica, ne pridjev; buržoazijski bolje odgovara značenju ‘buržoazije |
| b2-Chaot-322 | lv | MEDIUM | Neuredna osoba | Haotična osoba | Chaot označava haotičnu osobu, ne samo neurednu osobu. |
| b2-Chorleiter-331 | lv | MEDIUM | Hor majstor | Horovođa | Horovođa je prirodniji i ustaljeniji bosanski naziv za voditelja hora. |
| b2-chronisch-334 | lv | MEDIUM | Hronično | Hroničan | Njemački oblik je pridjev; hronično je srednji rod ili prilog. |
| b2-Dachziegel-337 | lv | MEDIUM | Pločica | Crijep | Dachziegel je crijep, dok pločica obično označava keramičku ili drugu ploču. |
| b2-damalig-339 | lv | MEDIUM | Tada • Tog vremena | Tadašnji • Iz tog vremena | Tada je prilog, a damalig je pridjev. |
| b2-Damm-340 | lv | MEDIUM | Brana • Brana • Željeznički nasip | Nasip • Brana • Željeznički nasip | Prvo značenje dambis je nasip; ponavljanje brana gubi razlikovanje značenja. |
| b2-Darbietung-348 | lv | MEDIUM | Performanse • Performanse | Izvedba • Predstava | Njemačka imenica je u jednini; performanse je množina i manje prirodan izbor ovd |
| b2-Darlehen-350 | lv | MEDIUM | Zajam • Pozajmljivanje | Zajam • Pozajmica | Pozajmljivanje označava radnju posuđivanja, ne zajam kao predmet ili sredstva. |
| b2-Darm-351 | lv | MEDIUM | Crijeva | Crijevo | Njemački oblik je jednina; crijeva su množina. |
| b2-Darstellung-353 | lv | MEDIUM | Prikaz • Prikaz • Obris | Prikaz • Prikaz • Izlaganje | Obris znači outline/kontura, dok treće značenje Darstellung ovdje znači izlaganj |
| b2-Delikt-373 | lv | MEDIUM | Kriminal • Kršenje zakona | Krivično djelo • Prekršaj | Kriminal je preširoko i neprirodno; Delikt znači krivično djelo ili prekršaj. |
| b2-deplaziert-378 | lv | MEDIUM | Neprikladno • Izvan mjesta • Van vremena | Neumjesno • Na pogrešnom mjestu • U pogrešno vrijeme | Izvan mjesta i van vremena nisu prirodni izrazi za značenje neprikladnosti i nep |
| b2-Deutung-383 | lv | MEDIUM | Objašnjenje • Prijevod • Objašnjenje • Prijevod | Tumačenje • Interpretacija • Objašnjenje • Tumačenje | Deutung znači tumačenje ili interpretacija; prijevod je uobičajeno prevod, ne De |
| b2-Dezernat-387 | lv | MEDIUM | Odjeljenja u policiji | Odjel u policiji | Njemačka odrednica je jednina; trenutni prevod je množina i zvuči neprirodno. |
| b2-diskret-406 | lv | MEDIUM | Diskretno | Diskretan | Njemački pridjev treba biti preveden pridjevom diskretan, ne prilogom diskretno. |
| b2-donnern-413 | lv | MEDIUM | Tutnjava • Tutnjava • Tutnjava | Grmjeti • Tutnjati • Odjekivati | Njemačka odrednica je glagol, dok su svi trenutni prevodi imenice. |
| b2-dopen-414 | lv | MEDIUM | Koristiti doping sredstva | Uzimati doping | Izraz doping sredstva je neprirodan; glagol znači uzimati ili koristiti doping. |
| b2-Doping-415 | lv | MEDIUM | Doping agens | Doping • Doping-sredstvo | Doping agens nije prirodan bosanski izraz; agens ne odgovara značenju doping-sre |
| b2-doppelsinnig-416 | lv | MEDIUM | Dvosmisleno | Dvosmislen | Odrednica je pridjev; dvosmisleno je prilog ili oblik srednjeg roda. |
| b2-Doppelzentner-417 | lv | MEDIUM | Centner | Kvintal (100 kg) | Doppelzentner je 100 kg; centner obično označava drugu, manju mjernu jedinicu. |
| b2-Dorn-418 | lv | MEDIUM | Trn • Ubod | Trn • Žalac | Ubod označava čin ubadanja, dok je Dorn u drugom značenju žalac ili bodlja. |
| b2-Dosenmilch-425 | lv | MEDIUM | Kondenzovano mleko u limenkama | Kondenzirano mlijeko u limenkama | Prevod sadrži ekavizam mleko; standardni ijekavski bosanski oblik je mlijeko, uz |
| b2-Dragee-429 | lv | MEDIUM | Dragee | Dražeja | Bosanski prirodan naziv je dražeja; njemački oblik nije uobičajen bosanski prevo |
| b2-Dreck-435 | lv | MEDIUM | Balega • Prljavština • Blato • Prljavština | Balega • Prljavština • Blato • Đubre | Četvrti smisao draņķis označava smeće/prljavštinu, ali je ponovljen prethodni pr |
| b2-Drehung-439 | lv | MEDIUM | Spin • Revolucija | Okretanje • Obrt | Revolucija prvenstveno znači društvenu promjenu; ovdje je potreban fizički okret |
| b2-Dreisprung-440 | lv | MEDIUM | Trostruki skok | Troskok | Standardni naziv atletske discipline u bosanskom je troskok. |
| b2-Drogensucht-444 | lv | MEDIUM | Ovisnosti o drogama | Ovisnost o drogama | Njemačka imenica je u jednini; bosanski prevod je nepotrebno u množini. |
| b2-Drohung-445 | lv | MEDIUM | Prijetnje | Prijetnja | Drohung je imenica u jednini, pa prevod treba biti u jednini. |
| b2-drosseln-448 | lv | MEDIUM | Zadaviti • Ugušiti | Zadaviti • Prigušiti | U drugom smislu drosseln znači prigušiti/smanjiti, ne ugušiti. |
| b2-Drucksache-454 | lv | MEDIUM | Bandrole • Štampa u poštanskim pošiljkama | Banderola • Štampani materijal u poštanskim pošiljkama | Bandrole je pogrešno napisano, a drugi prevod je neprirodan i neprecizan. |
| b2-Drüse-455 | lv | MEDIUM | Žlezda | Žlijezda | Žlezda je ekavski oblik; standardni bosanski ijekavski oblik je žlijezda. |
| b2-dumpf-457 | lv | MEDIUM | Šuplje • Prigušeno • Zagušljivo • Zagušljivo • Teško • Potlačeno • Opresivno | Šuplje • Prigušeno • Ustajalo • Zagušljivo • Teško • Potišteno • Ugnjetavajuće | Treći i četvrti smisao su duplirani, a sasmacis znači ustajao; završni prevod je |
| b2-Dumpingpreis-459 | lv | MEDIUM | Damping cijena | Dampinška cijena | Pridjevski oblik dampinška prirodnije i gramatički tačnije povezuje cijenu s dam |
| b2-dünken-465 | lv | MEDIUM | Činiti • Izgledati | Činiti se • Izgledati | Glagol činiti u ovom značenju zahtijeva povratnu česticu se. |
| b2-Dunst-466 | lv | MEDIUM | Para • Dim • Dim • Para • Magla • Izmaglica | Para • Isparenja • Isparenja • Zagušljiv zrak • Magla • Izmaglica | Dim nije precizan prevod za garaiņi/izgarojumi, a para ne odgovara značenju tvan |
| b2-durchlaufen-478 | lv | MEDIUM | Proći kroz • Proći kroz | Protrčati kroz • Proticati kroz | Drugi smisao odnosi se na tečnost koja protiče, ne na opšti prolazak. |
| b2-Durchreise-482 | lv | MEDIUM | Vidjeti kroz • Otkriti | Vidjeti kroz • Prozreti | U prenesenom smislu durchschauen znači prozreti nekoga/nešto, ne samo otkriti. |
| b2-durchsetzen-485 | lv | MEDIUM | Proći • Postići | Izgurati • Postići | Proći je preopšti i ne prenosi značenje izboriti/progurati nešto. |
| b2-durchstellen-486 | lv | MEDIUM | Povežite telefonski razgovor | Prespojiti telefonski razgovor | Prevod je u imperativu množine, dok je njemački oblik infinitiv; prespojiti je p |
| b2-dürr-488 | lv | MEDIUM | Suvo • Osušeno • Uvelo • Mršavo | Suh • isušen • uvenuo • mršav | Pridjevi su u pogrešnom rodu/obliku, a bosanski standard traži ijekavske oblike. |
| b2-edel-497 | lv | MEDIUM | Plemenit • Uzvišen • Plemenit | Plemenit • uzvišen • plemićki | Treći prevod ponavlja prvi i gubi značenje „aristokratski/plemićki“. |
| b2-Eheberatung-501 | lv | MEDIUM | Porodično savjetovanje | Bračno savjetovanje | Eheberatung je savjetovanje bračnih partnera, ne općenito porodično savjetovanje |
| b2-Eheschließung-504 | lv | MEDIUM | Brak • Brak | Sklapanje braka • vjenčanje | Duplikat „brak“ ne prenosi značenje sklapanja/zaključenja braka. |
| b2-Ehrenamt-506 | lv | MEDIUM | Počasni položaj | Volonterska dužnost | Ehrenamt najčešće označava dobrovoljnu/neplaćenu funkciju ili rad, ne počasni po |
| b2-Eidotter-520 | lv | MEDIUM | Žumanca | Žumanjak | Njemačka riječ je jednina, dok je „žumanca“ množina; standardni bosanski oblik j |
| b2-eifrig-522 | lv | MEDIUM | Marljiv • Marljiv • Marljiv • Željan | Marljiv • vrijedan • revan • gorljiv | „Željan“ znači desirous, a ne „eifrig“; ponavljanja također ne pokrivaju sve nij |
| b2-einberufen-533 | lv | MEDIUM | Pozivati ​​ • Regrutovati u vojnu službu | Sazvati • pozvati u vojnu službu | Za sastanak ili tijelo glagol je „sazvati“, ne „pozivati“; drugi prevod je prihv |
| b2-einbüßen-536 | lv | MEDIUM | Trpe materijalne gubitke | Pretrpjeti materijalne gubitke | Prevod je konjugiran u 3. licu množine umjesto infinitiva kao u njemačkoj natukn |
| b2-einflussreich-541 | lv | MEDIUM | Uticajan • Impresivan | Utjecajan • utjecajan | „Impresivan“ znači impressive, dok riječ označava osobu ili stvar s velikim utje |
| b2-eingehend-550 | lv | MEDIUM | Temeljni • Sitni • Dolazni | Temeljit • Detaljan • Dolazni | Sitni znači mali, a ne detaljan; njemački eingehend u ovom značenju znači detalj |
| b2-Einigkeit-561 | lv | MEDIUM | Jedinica • Jedinstvo • Konsenzus | Jedinstvo • Jedinstvo • Jednoglasnost | Jedinica znači unit, a ne jedinstvo; Einigkeit označava jedinstvo ili jednoglasn |
| b2-einkassieren-562 | lv | MEDIUM | Prikupiti | Naplatiti | Einkassieren znači naplatiti ili inkasirati novac; prikupiti ne prenosi jasno fi |
| b2-Einklang-563 | lv | MEDIUM | Sporazum | Sklad | Einklang znači sklad ili saglasje; sporazum je dogovor i ne odgovara osnovnom zn |
| b2-einkleiden-564 | lv | MEDIUM | Dotjerati se • Dotjerati | Odjenuti • Odjenuti | Einkleiden znači odjenuti ili obući; dotjerati znači uljepšati ili urediti. |
| b2-einmachen-569 | lv | MEDIUM | Konzervirati • Marinirati • Prokuhati | Konzervirati • Marinirati • Skuhati džem | Prokuhati znači prokuhati, dok einmachen u trećem značenju znači ukuhati ili nap |
| b2-einmütig-570 | lv | MEDIUM | Jednoglasno | Jednoglasan | Einmütig je pridjev, dok je jednoglasno prilog; potreban je pridjevski oblik jed |
| b2-Einschnitt-575 | lv | MEDIUM | Rez • Rez • Okret • Zarez | Rez • Posjekotina • Prekretnica • Usjek | Okret i zarez ne odgovaraju značenjima Einschnitt; riječ može označavati i prekr |
| b2-einspeichern-580 | lv | MEDIUM | Unesite podatke • Sačuvajte | Unijeti podatke • Sačuvati | Njemački unos je infinitiv; trenutni prijevodi su imperativne rečenice. |
| b2-einstimmig-583 | lv | MEDIUM | Jednoglasno • Jednoglasno | Jednoglasan • Jednoglasan | Einstimmig je pridjev, a jednoglasno je prilog; treba upotrijebiti jednoglasan. |
| b2-eintauchen-585 | lv | MEDIUM | Uronite • Uronite • Uronite • Uronite | Umočiti • Umočiti • Uroniti • Zaroniti | Svi oblici su imperativni i gube razliku između umakanja, uranjanja i zaranjanja |
| b2-Eintracht-587 | lv | MEDIUM | Konsenzus • Dogovor • Harmonija • Kompatibilnost | Jednoglasnost • Sklad • Sloga • Sloga | Kompatibilnost znači kompatibilnost, ne satiću ili slogu; Eintracht označava sk |
| b2-einwenden-594 | lv | MEDIUM | Suprotstaviti se • Iznositi prigovore | Prigovoriti • Iznijeti prigovore | Suprotstaviti se znači oppose, dok einwenden precizno znači prigovoriti ili izni |
| b2-Eisengießerei-600 | lv | MEDIUM | Livnica livenog gvožđa | Livnica željeza | Trenutni oblik je ekavski i znači livnica livenog gvožđa; standardno je livnica  |
| b2-Elfenbein-607 | lv | MEDIUM | Slonovače | Slonovača | Slonovače je genitiv ili množinski oblik; njemačka imenica ovdje traži nominativ |
| b2-Empfangschef-609 | lv | MEDIUM | Administrator hotela | Šef recepcije | Empfangschef je rukovodilac hotelske recepcije, a ne opšti administrator hotela. |
| b2-empören-612 | lv | MEDIUM | Izazvati bijes | Izazvati ogorčenje | Empören znači izazvati sažaljenje/ogorčenje, ne bijes u smislu rage. |
| b2-Entbindung-618 | lv | MEDIUM | Oslobađanje • Oslobođenje • Rođenje | Razrješenje • Oslobađanje • Porođaj | „Rođenje“ označava birth, dok je njemačko Entbindung u ovom smislu „porođaj“; pr |
| b2-entfalten-623 | lv | MEDIUM | Odmotati • Razviti • Razviti • Razviti | Odmotati • Rasklopiti • Razviti • Raširiti | Tri od četiri jedinice su nepotrebno duplicirane i ne razlikuju ključna značenja |
| b2-sich entfalten-624 | lv | MEDIUM | Otvoriti • Olabaviti • Razviti • Otvoriti | Otvoriti se • Osloboditi se • Razviti se • Raširiti se | Nedostaje povratnost, a „olabaviti“ ne znači „osloboditi se“ u ovom kontekstu. |
| b2-entflammen-625 | lv | MEDIUM | Zapaliti • Zapaliti • Uzbuditi • Zapaliti se | Zapaliti • Potpaliti • Oduševiti • Planuti | „Uzbuditi“ znači uznemiriti ili seksualno uzbuditi, ne „oduševiti“ odnosno „insp |
| b2-entführen-626 | lv | MEDIUM | Odvesti • Kidnapovati | Otmicom odvesti • Kidnapovati | „Odvesti“ je preširoko i ne prenosi značenje otmice. |
| b2-entkräften-632 | lv | MEDIUM | Oslabiti • Oslabiti • Opovrgnuti • Prevrnuti | Oslabiti • Oslabiti • Opovrgnuti • Pobiti | „Prevrnuti“ znači fizički prevrnuti; za argument ili tvrdnju odgovara „pobiti“. |
| b2-entweichen-645 | lv | MEDIUM | Udaljiti se • Pobjeći • Povući se • Emanirati | Udaljiti se • Pobjeći • Povući se • Ispariti | „Emanirati“ znači širiti ili zračiti iz izvora, a ne iscuriti ili ispariti. |
| b2-Erachten-660 | lv | MEDIUM | Misli • Uvid | Mišljenje • Procjena | „Erachten“ je vjerovatno izvorna greška za Erachten; trenutni prevod ne odgovara |
| b2-Erdsatellit-668 | lv | MEDIUM | Veštački satelit Zemlje | Vještački satelit Zemlje | „Veštački“ je ekavski oblik; standardni ijekavski bosanski oblik je „vještački“. |
| b2-erforschen-671 | lv | MEDIUM | Istražiti • Saznati | Istražiti • Ispitati | „Saznati“ znači doznati, dok erforschen u drugom smislu znači istražiti ili ispi |
| b2-erlöschen-688 | lv | MEDIUM | Ugasiti • Ugasiti • Prestati važiti • Isteći | Ugasiti se • ugasiti se • prestati važiti • isteći | Erlöschen je uglavnom neprijelazni glagol; ugasiti treba biti ugasiti se. |
| b2-ermitteln-691 | lv | MEDIUM | Saznati • Saznati | Istražiti • utvrditi | Ermitteln znači sistematski istražiti ili utvrditi, a saznati je preširoko i ne  |
| b2-Eröffnung-695 | lv | MEDIUM | Otvaranje • Otkriće • Razglednica • Najava • Otkriće | Otvaranje • otvaranje • inauguracija • najava • otkriće | Razglednica i ponovljeno otkriće ne odgovaraju značenjima riječi Eröffnung. |
| b2-Erscheinung-703 | lv | MEDIUM | Pojava • Izgled • Izgled • Izgled | Pojava • pojavljivanje • vanjština • izgled | Tri ista prevoda ne pokrivaju različita značenja: pojava, pojavljivanje, vanjšti |
| b2-erschöpfen-706 | lv | MEDIUM | Iscrpljivati ​​ • Umoriti | Iscrpiti • umoriti | Iscrpljivati je nesvršeni oblik, dok erschöpfen ovdje znači iscrpiti ili potroši |
| b2-ertragen-717 | lv | MEDIUM | Tolerisati • Trpeti | Tolerirati • trpjeti | Trpeti je ekavski oblik, a standardni ijekavski bosanski je trpjeti; prirodnije  |
| b2-Erz-725 | lv | MEDIUM | Rude | Ruda | Njemačka odrednica je jednina; rude je množina, dok je odgovarajući bosanski obl |
| b2-Euter-732 | lv | MEDIUM | Vimena | Vime | Njemačka odrednica je jednina, a vime je odgovarajući bosanski oblik; vimena je  |
| b2-expandieren-739 | lv | MEDIUM | Brzo rastu • Šire se | Brzo rasti • širiti se | Trenutni oblici su glagoli u prezentu množine, a odrednica je infinitiv. |
| b2-Fabrikat-745 | lv | MEDIUM | Industrijska proizvodnja • Proizvod | Industrijski proizvod • Proizvod | Prvi prevod označava proizvodnju, a ne proizvedeni artikl. |
| b2-fahl-749 | lv | MEDIUM | Tupo • Blijedo | Blijed • Bez sjaja | Tupo znači ‘not sharp’ i ne odgovara značenju fahl u ovom kontekstu. |
| b2-fahrlässig-754 | lv | MEDIUM | Nemaran • Neuredan | Nemaran • Nepažljiv | Neuredan znači ‘neuredan’, a ne ‘nepažljiv’ ili ‘nemaran’. |
| b2-Fassung-769 | lv | MEDIUM | Okvir • Omotnica • Tekst | Okvir • Omotač • Formulacija | Tekst ne odgovara značenju Fassung kao formulacija ili verzija teksta. |
| b2-fassungslos-770 | lv | MEDIUM | Iznenađeni • Šokirani | Zapanjen • Šokiran | Trenutni prevod slabi značenje; fassungslos znači zapanjen ili bez riječi. |
| b2-Lieferfirma-794 | lv | MEDIUM | Kompanija dobavljača | Dobavljačka firma | Trenutni prevod znači kompanija koja pripada dobavljaču, ne firma koja je dobavl |
| b2-fliederfarben-800 | lv | MEDIUM | Lila boja | Jorgovanast | Trenutni prevod je imenica, dok je izvorna riječ pridjev za boju. |
| b2-flüchtig-805 | lv | MEDIUM | Prolazan • Površan • Prolazan • Prolazan • Kratkotrajan | Isparljiv • Površan • Trenutan • Prolazan • Kratkotrajan | Prvo značenje znači isparljiv, a treće je nepotrebno ponavljanje prolazan umjest |
| b2-folgern-813 | lv | MEDIUM | Da zaključim | Zaključiti | Infinitiv folgern preveden je ličnim oblikom u prvom licu umjesto infinitivom. |
| b2-Förster-819 | lv | MEDIUM | Ranger | Šumar | Förster je šumar ili upravitelj šume; Ranger označava čuvara prirode/parka. |
| b2-Fracht-824 | lv | MEDIUM | Tereta • Tereta | Teret • Vozarina | Oba oblika su genitiv; prvi prijevod treba biti nominativ, a frakts znači vozari |
| b2-freisprechen-834 | lv | MEDIUM | Opravdati | Osloboditi optužbe | U pravnom smislu freisprechen znači osloboditi optužbe, a ne samo opravdati. |
| b2-Fremde-835 | lv | MEDIUM | Stranstvo • Stranac | Stranstvo • Strankinja | Imenica je ženskog roda; drugo značenje treba biti strankinja, ne muški oblik st |
| b2-Fuhre-845 | lv | MEDIUM | Prevoz • Teret | Tovar • Teret | Fuhre znači količina tereta ili tovar; prevoz označava transport, a ne teret. |
| b2-Führerrolle-846 | lv | MEDIUM | Vodeću ulogu | Vodeća uloga | Prijevod je u akuzativu, dok imenica kao samostalna natuknica treba nominativ. |
| b2-Führernatur-847 | lv | MEDIUM | Tip vođe • Vođa | Liderski tip • Liderska priroda | Drugi prijevod vođa označava osobu, a Führernatur znači liderska priroda ili kar |
| b2-Funktionär-854 | lv | MEDIUM | Aktivista • Zaposlenik | Aktivista • Funkcioner | Funktionär znači funkcioner ili službenik, ne općenito zaposlenik. |
| b2-Fürsorge-856 | lv | MEDIUM | Starateljstvo • Starateljstvo | Briga • Starateljstvo | Prvo značenje je opća briga, dok starateljstvo odgovara pravnoj zaštiti ili skrb |
| b2-gebrechlich-877 | lv | MEDIUM | Slab • Osušen • Gauden • Osakaćen • Pun kvarova | Slab • Bolestan • Klonuo • Osakaćen • Pun mana | „Osušen“, „gauden“ i „pun kvarova“ nisu prirodni ekvivalenti za slab i boležljiv |
| b2-gedeihen-880 | lv | MEDIUM | Dobro • Uspjeti • Napredovati • Napredovati | Dobro uspijevati • Uspijevati • Cvjetati • Napredovati | „Dobro“ samo po sebi nije prijevod glagola, a posljednja dva oblika su duplikat. |
| b2-gedenken-881 | lv | MEDIUM | Imati na umu • Zapamtiti • Zapamtiti • Spomenuti | Namjeravati • Sjećati se • Prisjećati se • Spomenuti | „Zapamtiti“ znači memorisati, a ne sjećati se; ponovljen je isti prijevod. |
| b2-Gegenrede-893 | lv | MEDIUM | Izjava • Prigovor | Protuargument • Prigovor | „Izjava“ znači statement i ne prenosi značenje suprotstavljenog govora ili argum |
| b2-Gegensatz-894 | lv | MEDIUM | Suprotno • Kontrast • Kontradikcija | Suprotnost • Kontrast • Proturječnost | Njemačka riječ je imenica; „suprotno“ je prilog/pridjev, a „proturječnost“ je pr |
| b2-gekünstelt-899 | lv | MEDIUM | Umjetno • Neprirodno | Umjetan • Neprirodan | Kao samostalni pridjevski ekvivalenti potrebni su oblici „umjetan“ i „neprirodan |
| b2-Geländelauf-900 | lv | MEDIUM | Cross country | Kros | Bosanski prijevod je ostavljen na engleskom umjesto uobičajenog izraza „kros“. |
| b2-Geldumlauf-907 | lv | MEDIUM | Opticaj novca | Optjecaj novca | U bosanskom standardu pravilno je „optjecaj“, ne „opticaj“. |
| b2-Geltung-912 | lv | MEDIUM | Značenje • Značaj | Važnost • Značaj | „Značenje“ znači meaning, dok Geltung u ovom kontekstu znači važnost ili značaj. |
| b2-Gemahlin-914 | lv | MEDIUM | Supruga • Supružnik | Supruga • Životna saputnica | „Supružnik“ je muški ili rodno opći oblik, dok Gemahlin označava ženu. |
| b2-gemessen-916 | lv | MEDIUM | Uravnoteženo • Razmatrano | Izmjereno • Promišljeno | „Uravnoteženo“ znači balanced, a ne measured; drugi prijevod je prihvatljiviji k |
| b2-Gemüt-920 | lv | MEDIUM | Karakter • Priroda • Misli • Umovi | Karakter • Narav • Duh • Um | „Misli“ i naročito plural „umovi“ nisu prirodni ekvivalenti za Gemüt u ovom znač |
| b2-Genossin-930 | lv | MEDIUM | Član • Član | Članica • Članica | Genossin označava žensku osobu; „član“ je muški rod. |
| b2-Gerede-938 | lv | MEDIUM | Govor • Govor • Narodni jezik • Ogovaranje | Brbljanje • Brbljanje • Priče • Ogovaranje | „Narodni jezik“ znači language of the people, ne „priče“ ili prazne priče. |
| b2-gerinnen-939 | lv | MEDIUM | Zgrušavati • Zgušnjavati • Zgušnjavati • Zgušnjavati • Smrzavati | Zgrušavati se • Zgušnjavati se • Skupljati se • Stvrdnjavati se • Zgrušavati se | „Smrzavati“ znači freeze, dok gerinnen označava zgrušavanje, zgušnjavanje ili st |
| b2-Gesamtzahl-942 | lv | MEDIUM | Ukupno | Ukupan broj | Gesamtzahl je imenica „ukupan broj“, dok je „ukupno“ prilog ili pridjev. |
| b2-Geschwätz-950 | lv | MEDIUM | Brbljanje • Laganje • Brbljanje | Brbljanje • Prazne priče • Prazne priče | Geschwätz znači brbljanje ili prazne priče, ne nužno laganje. |
| b2-Geselle-955 | lv | MEDIUM | Zellis • Pomoćnik • Momak • Zanatlija koji je položio ispit nakon nastave | Kalfa • Pomoćnik • Momak • Zanatlija koji je nakon naukovanja položio ispit | „Zellis“ nije prirodan standardni bosanski izraz; Geselle je naročito „kalfa“. |
| b2-Gesichtszug-957 | lv | MEDIUM | Karakteristika | Crta lica | Gesichtszug označava pojedinačnu crtu ili izraz lica, ne opštu karakteristiku. |
| b2-Gesinnung-958 | lv | MEDIUM | Uvjerenja • Raspoloženje | Uvjerenja • Stav | Gesinnung znači uvjerenje ili stav; „raspoloženje“ znači mood. |
| b2-Gesuch-967 | lv | MEDIUM | Zahtjev • Podnošenje | Zahtjev • Molba | Gesuch je zahtjev ili molba; „podnošenje“ označava čin predaje dokumenta. |
| b2-getüpfelt-969 | lv | MEDIUM | Tačkasta | Tačkast | Za samostalni pridjev bez imenice potreban je muški oblik „tačkast“, ne „tačkast |
| b2-Gewässer-975 | lv | MEDIUM | Vodama | Vode | „Vodama“ je instrumental; kao samostalni prevod imenice treba „vode“ ili „vodene |
| b2-Gewerbe-977 | lv | MEDIUM | Pozicija • Trgovina • Stalni rad u oblasti trgovine ili zanata ili pružanja uslu | Zanat • Trgovina • Stalni rad u oblasti trgovine ili zanata ili pružanja usluga | „Pozicija“ znači position, dok Gewerbe u ovom kontekstu označava zanat ili djela |
| b2-gewieft-978 | lv | MEDIUM | Kaljen • Oštrouman | Lukav • Oštrouman | gewieft znači prepreden ili lukav; „kaljen“ znači hardened. |
| b2-Gewissheit-980 | lv | MEDIUM | Jasnoća • Sigurnost • Sigurnost | Izvjesnost • Sigurnost • Izvjesnost | Gewissheit prvenstveno znači izvjesnost ili sigurnost, a „jasnoća“ znači clarity |
| b2-rachgierig-985 | lv | MEDIUM | Žudnja za osvetom | Željan osvete | Njemački pridjev treba pridjevski bosanski ekvivalent, ne imeničku sintagmu. |
| b2-gläsern-991 | lv | MEDIUM | Staklo • Staklasto | Staklen • Staklast | Bosnian requires adjective forms; “staklo” is a noun, not the adjective “glass-l |
| b2-Glasur-994 | lv | MEDIUM | Glazura • Glazura | Glazura • Glaziranje | The second entry repeats the coating noun instead of representing the process of |
| b2-gleiten-999 | lv | MEDIUM | Klizi • Lebdi | Kliziti • Lebdjeti | The Bosnian entries are finite third-person forms; the German headword is an inf |
| b2-glühen-1004 | lv | MEDIUM | Žariti • Gorjeti • Gorjeti • Gorjeti | Žariti • Usijati se • Gorjeti • Gorjeti | The repeated “gorjeti” loses the distinct sense of becoming intensely hot or glo |
| b2-Gnadenbrot-1007 | lv | MEDIUM | Hleb milosti | Hljeb iz milosrđa | “Hleb” is ekavian; standard Bosnian ijekavian spelling is “hljeb,” and the phras |
| b2-Gondel-1015 | lv | MEDIUM | Gondola • Žičara | Gondola • Kabina žičare | “Žičara” is the cable-car system, not its cabin. |
| b2-grausam-1024 | lv | MEDIUM | Okrutan • Oštar | Okrutan • Strog | “Oštar” means sharp; the second sense here is harsh or severe, best rendered “st |
| b2-Güte-1048 | lv | MEDIUM | Ljubaznost • Kvalitet • Korist | Dobrota • Kvalitet • Korist | “Ljubaznost” means politeness; Güte in this sense means goodness or kindness. |
| b2-Handelsflotte-1060 | lv | MEDIUM | Trgovačka mornarica | Trgovačka flota | Handelsflotte znači trgovačka flota, dok mornarica označava vojnu ili pomorsku s |
| b2-hantieren-1065 | lv | MEDIUM | Djelovati • Djelovati s čim | Rukovati • Raditi s čim | Hantieren označava rukovanje ili praktičan rad s nečim, a ne općenito djelovanje |
| b2-härten-1068 | lv | MEDIUM | Očvrsnuti | Kaliti • Očvrsćivati | Njemački glagol je prijelazan: nešto učiniti tvrdim ili kaliti, ne samo očvrsnut |
| b2-Haushaltung-1071 | lv | MEDIUM | Domaćinstvo | Vođenje domaćinstva | Haushaltung označava upravljanje domaćinstvom, a ne samo domaćinstvo kao kućnu z |
| b2-Heilquelle-1082 | lv | MEDIUM | Izvor izlječenja | Ljekoviti izvor | Prirodan bosanski naziv za izvor s ljekovitim svojstvima je ljekoviti izvor. |
| b2-Heizkraftwerk-1088 | lv | MEDIUM | Termoelektrane | Termoelektrana | Njemačka riječ je imenica u jednini, pa bosanski ekvivalent treba biti u jednini |
| b2-Hemmung-1092 | lv | MEDIUM | Prepreka • Prepreka • Kašnjenje | Kočnica • Prepreka • Zadrška | Kašnjenje znači delay, dok Hemmung u ovom značenju označava kočenje, prepreku il |
| b2-herantreten-1096 | lv | MEDIUM | Pristup | Prići | Pristup je imenica, dok je herantreten glagol koji znači prići ili pristupiti. |
| b2-heraufkommen-1097 | lv | MEDIUM | Doći • Ustati | Popeti se • Doći gore | Treba izraziti kretanje prema gore; doći i ustati bez tog smjera su nedovoljno p |
| b2-Herzschwäche-1109 | lv | MEDIUM | Zatajenje srca | Slabost srca | Herzschwäche znači slabost srca; zatajenje srca označava teži i drugačiji medici |
| b2-Herzversagen-1110 | lv | MEDIUM | Srčani zastoj • Insuficijencija | Srčano zatajenje • Insuficijencija | Herzversagen je zatajenje srca; srčani zastoj je cardiac arrest i nije potpuno i |
| b2-heucheln-1113 | lv | MEDIUM | Pretvarati se • Pretvarati se | Pretvarati se • Licemjeriti | Drugi ekvivalent je nepotrebno dupliran; heucheln u drugom značenju znači licemj |
| b2-hinsichtlich-1122 | lv | MEDIUM | U vezi • Zbog | U vezi s • Što se tiče | Prvi izraz je nepotpun, a zbog ne znači hinsichtlich. |
| b2-hinterziehen-1125 | lv | MEDIUM | Pronevjeriti novac • Ne plaćati porez | Pronevjeriti novac • Utajiti porez | Kod poreza hinterziehen znači utajiti ili izbjegavati plaćanje poreza. |
| b2-hinüberfahren-1126 | lv | MEDIUM | Preći • Preći | Prevesti preko • Preći preko | Prvi smisao je prevesti nekoga ili nešto preko, a ne samo preći. |
| b2-Hirnzelle-1128 | lv | MEDIUM | Moždane ćelije | Moždana ćelija | Njemačka riječ je u jednini, pa i bosanski prijevod treba biti u jednini. |
| b2-hitzig-1131 | lv | MEDIUM | Vruće • Gorljive • Nagle • Brze na ljutnju | Vruć • Gorljiv • Nagao • Brz na ljutnju | Samostalni pridjevi trebaju biti u muškom rodu i usklađeni međusobno. |
| b2-in flagranti-1158 | lv | MEDIUM | Uhvatiti • Da radiš nešto nezakonito | Uhvatiti na djelu | Izraz in flagranti znači uhvatiti na djelu; sadašnji drugi segment je neprirodan |
| b2-Klappe-1179 | lv | MEDIUM | Ventil • Ventil | Zaklopka • Ventil | Prvi njemački smisao odgovara zaklopci, a ne ventilu. |
| b2-Knochengewebe-1185 | lv | MEDIUM | Koštanog tkiva | Koštano tkivo | Sadašnji oblik je genitiv; samostalni prijevod treba biti nominativ. |
| b2-Komplott-1191 | lv | MEDIUM | Zavera | Zavjera | U bosanskom standardu ijekavski oblik je „zavjera“. |
| b2-Konsequenz-1192 | lv | MEDIUM | Dosljednost • Slijed • Zaključak • Posljedica | Dosljednost • Posljedica | „Slijed“ i „zaključak“ nisu uobičajeni ekvivalenti njemačke riječi „Konsequenz“. |
| b2-korrupt-1200 | lv | MEDIUM | Kupiv • Podmitljiv | Korumpiran • Podmitljiv | „Kupiv“ nije prirodan bosanski ekvivalent za korumpiran ili podmitljiv. |
| b2-Landenge-1209 | lv | MEDIUM | Prevlaka zemlje | Kopnena prevlaka | „Prevlaka zemlje“ je neprirodan izraz; geografski termin je „kopnena prevlaka“. |
| b2-Landsmann-1211 | lv | MEDIUM | Sunarodnjak • Stanovnik županije | Sunarodnjak • Zemljak | „Landsmann“ ne znači konkretno stanovnik županije. |
| b2-Landzunge-1213 | lv | MEDIUM | Jezik zemlje | Kopneni jezik | Doslovni izraz „jezik zemlje“ nije prirodan geografski prijevod. |
| b2-lästig-1216 | lv | MEDIUM | Opterećujuće | Dosadan | „Opterećujuće“ je neprirodno kao samostalni rječnički ekvivalent za lästig. |
| b2-Staffellauf-1219 | lv | MEDIUM | Štafeta | Štafetna trka | „Štafeta“ prvenstveno označava palicu ili ekipu, ne samu štafetnu trku. |
| b2-Laufwerk-1222 | lv | MEDIUM | Motor • Motor | Pogon • Pogonski mehanizam | „Laufwerk“ je pogon ili pogonski mehanizam, ne motor; prijevod je i nepotrebno p |
| b2-lauschen-1223 | lv | MEDIUM | Da pažljivo slušaju • Prisluškuju | Pažljivo slušati • Prisluškivati | Prijevodi nisu u infinitivu, a prvi oblik ima nepotrebno „da“ i treće lice množi |
| b2-leiblich-1229 | lv | MEDIUM | Karnal | Tjelesan | „Karnal“ uglavnom označava puteno ili tjelesno u seksualnom smislu, ne biološko/ |
| b2-Leibwächter-1230 | lv | MEDIUM | Telohranitelj | Tjelohranitelj | Bosanski standard koristi ijekavski oblik „tjelohranitelj“. |
| b2-Leichtgewicht-1232 | lv | MEDIUM | Mala težina | Laka kategorija | U sportskom smislu prirodan izraz je „laka kategorija“, ne doslovno „mala težina |
| b2-leichtsinnig-1234 | lv | MEDIUM | Neozbiljan | Lakomislen | „Neozbiljan“ je preširoko; Leichtsinnig znači lakomislen, nepromišljen ili bezob |
| b2-Liebesaffäre-1246 | lv | MEDIUM | Intimnu vezu | Intimna veza | Prijevod je u akuzativu; natuknica treba biti u nominativu. |
| b2-liebkosten-1247 | lv | MEDIUM | Milovati • Milovati | Milovati • Maziti | Oba bosanska ekvivalenta su identična, pa se gubi druga značenjska varijanta. |
| b2-liederlich-1248 | lv | MEDIUM | Neuredan • Neuredan | Neuredan • Nemaran | Oba ekvivalenta su identična; treba navesti dvije različite prirodne varijante. |
| b2-lindern-1249 | lv | MEDIUM | Umiriti • Ublažiti bol | Ublažiti • Olakšati bol | Umiriti znači smiriti, a ne ublažiti intenzitet tegobe ili bola. |
| b2-Lochband-1254 | lv | MEDIUM | Perfolent | Perforirana traka | Prirodan bosanski naziv za perforiranu traku nije „perfolent“. |
| b2-Lösegeld-1258 | lv | MEDIUM | Otkupna naknada | Otkupnina | U bosanskom je ustaljeni naziv za Lösegeld „otkupnina“, a ne „otkupna naknada“. |
| b2-Löwenpranke-1261 | lv | MEDIUM | Lavlje šape | Lavlja šapa | Pranka je jednina i znači šapa; prijevod je nepotrebno prebačen u množinu. |
| b2-Luftaufnahme-1264 | lv | MEDIUM | Fotografija iz zraka • Fotografija iz zraka | Fotografija iz zraka • Aerofotografija | Oba bosanska ekvivalenta su identična; druga varijanta treba biti aerofotografij |
| b2-Lustspiel-1271 | lv | MEDIUM | Komedija • Igra šale | Komedija • Komična drama | „Igra šale“ nije prirodan bosanski naziv za komičnu pozorišnu predstavu. |
| b2-Magister-1276 | lv | MEDIUM | Magisterij | Magistar | Magister označava osobu ili akademsku titulu, dok magisterij označava studijski  |
| b2-Marketing-1287 | lv | MEDIUM | Marketing • Trgovina | Marketing • Tržišno poslovanje | Trgovina znači trgovinu, ne marketing odnosno tržišno poslovanje. |
| b2-Marssonde-1289 | lv | MEDIUM | Mars sonda | Marsova sonda | U bosanskom je prirodno „Marsova sonda“, ne spoj „Mars sonda“. |
| b2-Massenware-1295 | lv | MEDIUM | Roba široke potrošnje | Roba masovne proizvodnje | Massenware označava serijski ili masovno proizvedenu robu, ne nužno robu široke  |
| b2-mechanisieren-1299 | lv | MEDIUM | Da mehanizuje | Mehanizirati | Prevod treba biti infinitiv; „da mehanizuje“ je lični glagolski oblik. |
| b2-mehren-1303 | lv | MEDIUM | Umnožiti | Uvećavati | Glagol znači povećavati ili umnožavati; svršen oblik „umnožiti“ nije najprikladn |
| b2-merklich-1308 | lv | MEDIUM | Primetno | Primjetno | „Primetno“ je ekavski oblik; standardni bosanski koristi ijekavski oblik „primje |
| b2-Hausstaubmilbe-1314 | lv | MEDIUM | Grinja | Grinja kućne prašine | Prevod je previše općenit i ne prenosi značenje kućne grinje. |
| b2-militant-1316 | lv | MEDIUM | Ratoborno | Ratoboran | Njemačka riječ je pridjev; „ratoborno“ je prilog ili srednji rod. |
| b2-minder-1320 | lv | MEDIUM | Manji • Manji | Manji • Manje | Drugo značenje je prilog „manje“, a ne pridjev „manji“. |
| b2-minderwertig-1322 | lv | MEDIUM | Bezvrijedan | Manje vrijedan | „Minderwertig“ znači manje vrijedan ili nekvalitetan, ne nužno bezvrijedan. |
| b2-Atommüll-1340 | lv | MEDIUM | Radioaktivnog otpada | Radioaktivni otpad | Prevod je u genitivu; kao samostalna natuknica treba nominativ „radioaktivni otp |
| b2-münden-1342 | lv | MEDIUM | Ulivati ​​ • Ulaziti • Izlaziti • Istjecati | Ulijevati se • Ulaziti • Izlaziti • Završavati | Prvi glagol treba povratni oblik, a posljednje značenje je „završavati“, ne „ist |
| b2-Nachlass-1353 | lv | MEDIUM | Nasleđe | Naslijeđe | „Nasleđe“ je ekavski oblik; standardni bosanski koristi „naslijeđe“. |
| b2-nachsitzen-1356 | lv | MEDIUM | Ostati u školi nakon radnog vremena za kaznu | Ostati u školi nakon nastave kao kaznu | „Radno vrijeme“ nije prirodno za školu; uobičajeno je „nakon nastave“. |
| b2-namens-1361 | lv | MEDIUM | U ime • U prezime | U ime • Po prezimenu | 'U prezime' je gramatički pogrešno; drugo značenje treba izraziti kao 'po prezim |
| b2-Nervenarzt-1371 | lv | MEDIUM | Lekar nervnih bolesti | Ljekar nervnih bolesti | U ijekavskom bosanskom standardu piše se 'ljekar', ne 'lekar'. |
| b2-neuerdings-1374 | lv | MEDIUM | Nedavno • Ovih dana • Ponovo • Ponovo | Nedavno • Ovih dana • U posljednje vrijeme • U novije vrijeme | Neuerdings znači 'nedavno/u posljednje vrijeme', a ne 'ponovo'. |
| b2-Niedergang-1381 | lv | MEDIUM | Zalazak sunca • Pad • Pad | Zalazak sunca • Pad • Propadanje | Treće značenje se nepotrebno ponavlja; pagrimšana je propadanje ili opadanje. |
| b2-niederlegen-1382 | lv | MEDIUM | Spusti • Zaustavi rad • Stupi u štrajk | Spustiti • Obustaviti rad • Stupiti u štrajk | Njemački infinitiv treba dosljedno prevoditi infinitivima, a 'obustaviti rad' je |
| b2-Notstand-1389 | lv | MEDIUM | Katastrofalno stanje • Vanredno stanje | Stanje nužde • Vanredno stanje | Notstand prvenstveno znači stanje nužde ili krajnje potrebe, ne 'katastrofalno s |
| b2-Nutzeffekt-1391 | lv | MEDIUM | Omjer efikasnosti | Koeficijent korisnog djelovanja | Tehničko značenje je koeficijent korisnog djelovanja, ne opšti omjer efikasnosti |
| b2-Oberst-1394 | lv | MEDIUM | Pukovniče | Pukovnik | 'Pukovniče' je vokativ; kao rječnička odrednica potreban je nominativ 'pukovnik' |
| b2-Ölgewinnung-1405 | lv | MEDIUM | Ekstrakcija ulja | Eksploatacija nafte | U ovom kontekstu riječ je o eksploataciji nafte, ne o ekstrakciji običnog ulja. |
| b2-Ortszeit-1420 | lv | MEDIUM | Lokalnom vremenu | Lokalno vrijeme | Prijevod je u pogrešnom padežu i ne odgovara osnovnom obliku imenice. |
| b2-Pacht-1422 | lv | MEDIUM | Iznajmljivanje | Zakup | Pacht označava zakup, a ne općenito iznajmljivanje. |
| b2-Peepshow-1437 | lv | MEDIUM | Erotski program koji se gleda odvojeno kroz kutiju | Erotski program koji se gleda pojedinačno kroz prozorčić | Kroz kutiju je pogrešno; riječ je o gledanju kroz mali prozorčić. |
| b2-Pfahlbau-1443 | lv | MEDIUM | Konstrukcija šipova | Gradnja na stupovima | Izraz označava građevinu ili naselje podignuto na stupovima, ne konstrukciju sam |
| b2-pikiert-1451 | lv | MEDIUM | Uvrijeđen • Uvrijeđen • Ogorčen | Uvrijeđen • Povrijeđen • Ogorčen | Prva dva bosanska ekvivalenta su nepotrebno duplicirana; drugi treba razlikovati |
| b2-Pilotprojekt-1453 | lv | MEDIUM | Pilot projekat | Pilot-projekat | Složeni izraz treba pisati kao složenicu s crticom, ne kao dvije odvojene riječi |
| b2-Plateau-1457 | lv | MEDIUM | Ravno brdo | Visoravan | Ravno brdo je opisno i neprirodno; standardni geografski izraz je visoravan. |
| b2-Posse-1461 | lv | MEDIUM | Farsa • Igra šale • Gruba šala | Farsa • Šaljiva igra • Gruba šala | Igra šale nije prirodna bosanska sintagma u ovom značenju. |
| b2-Possen-1462 | lv | MEDIUM | Farsa • Igra šale • Gruba šala | Farsa • Šaljiva igra • Gruba šala | Igra šale nije prirodna bosanska sintagma u ovom značenju. |
| b2-prägen-1464 | lv | MEDIUM | Kovati novac • Pritisnuti • Nametnuti • Formirati • Napraviti | Kovati novac • Utisnuti • Nametnuti • Oblikovati • Izraditi | Pritisnuti i formirati nisu precizni ekvivalenti za utiskivanje i oblikovanje. |
| b2-prägnant-1465 | lv | MEDIUM | Živo izraženo | Sažet i upečatljiv | Prägnant znači sažet, jasan i upečatljiv, a ne samo živo izražen. |
| b2-Präsidium-1468 | lv | MEDIUM | Prezidijum | Predsjedništvo | Prezidijum nije standardan i prirodan bosanski oblik; odgovarajući izraz je pred |
| b2-Presseagentur-1471 | lv | MEDIUM | Press agencija | Novinska agencija | Novinska agencija je prirodniji i standardniji bosanski izraz za Presseagentur. |
| b2-provisorisch-1476 | lv | MEDIUM | Privremeno • Privremeno • Na određeno vrijeme | Privremeno • Privremeno • Na neko vrijeme | Na određeno vrijeme znači vremenski ograničeno, ne nužno privremeno ili provizor |
| b2-qualifizieren-1480 | lv | MEDIUM | Da se kvalifikuju | Kvalifikovati se | Njemački infinitiv preveden je kao glagolski oblik u 3. licu množine. |
| b2-Quantität-1481 | lv | MEDIUM | Količina • Količina | Količina • Kvantitet | Oba bosanska ekvivalenta su identična, pa se gubi korisna razlika u značenju. |
| b2-Radierung-1487 | lv | MEDIUM | Oštrenje • Graviranje | Bakropis • Graviranje | „Oštrenje“ znači sharpening, ne umjetničku tehniku etching/bakropis. |
| b2-ranzig-1492 | lv | MEDIUM | Užeglo • Gorko za kremu • Masnoću • Puter | Užeglo • Gorkasto (za pavlaku, masnoću i puter) | Drugi dio je gramatički i semantički neprirodan; „ranzig“ znači užegao, ne samo  |
| b2-rau-1493 | lv | MEDIUM | Grubo • Grubo • Grubo • Promuklo • Oštro • Neljubazno • Sirovo | Neravno • Hrapavo • Grubo • Promuklo • Oštro • Neljubazno • Sirovo | Prvo značenje „nelīdzens“ je „neravan“, ne „grub“. |
| b2-rechtmäßig-1499 | lv | MEDIUM | Legalno | Zakonit | Njemački je pridjev, dok „legalno“ ovdje djeluje kao prilog ili srednji rod. |
| b2-Redefreiheit-1504 | lv | MEDIUM | Sloboda izražavanja | Sloboda govora | „Redefreiheit“ precizno znači sloboda govora; „izražavanja“ je širi pojam expres |
| b2-Referenz-1507 | lv | MEDIUM | Preporuke | Preporuka | Njemačka natuknica je u jednini, dok je bosanski prevod u množini. |
| b2-Resolution-1522 | lv | MEDIUM | Rezoluciju | Rezolucija | Natuknica je u nominativu, ali bosanski oblik je akuzativ. |
| b2-Rückgang-1530 | lv | MEDIUM | Pad • Regresija • Pad | Pad • Nazadovanje • Smanjenje | Treći ekvivalent je nepotrebno dupliran, a „smanjenje“ bolje pokriva treće znače |
| b2-rücksichtslos-1532 | lv | MEDIUM | Nemaran • Grub • Nemilosrdan | Bezobziran • Grub • Nemilosrdan | „Nemaran“ znači careless; rücksichtslos u ovom kontekstu znači bezobziran. |
| b2-rückständig-1533 | lv | MEDIUM | Kasni • Kasni za plaćanje | Zaostao • U zaostatku s plaćanjem | Prvo značenje je „zaostao“, a drugi izraz treba prirodniju bosansku konstrukciju |
| b2-Rücktritt-1534 | lv | MEDIUM | Ostavku | Ostavka | Natuknica je imenica u nominativu, dok je „ostavku“ akuzativ. |
| b2-Sämaschine-1546 | lv | MEDIUM | Mašina za sejanje | Mašina za sijanje | „Sejanje“ je ekavizam; u standardnom bosanskom treba ijekavski oblik „sijanje“. |
| b2-sämtlich-1547 | lv | MEDIUM | Svi [bez izuzetka] • U punoj snazi | Svi [bez izuzetka] • U punom sastavu | „U punoj snazi“ znači s punom snagom, a ne u punom sastavu. |
| b2-Schadenersatz-1556 | lv | MEDIUM | Materijalnu naknadu za gubitke | Naknada štete | Trenutni prevod je u akuzativu; rječnički oblik treba biti nominativ. |
| b2-schädigen-1557 | lv | MEDIUM | Šteta • Uzrokovati štetu | Naštetiti • Uzrokovati štetu | „Šteta“ je imenica, dok njemački glagol zahtijeva glagolski prevod. |
| b2-Schalldämmung-1559 | lv | MEDIUM | Potiskivanje buke | Zvučna izolacija | „Zvučna izolacija“ je prirodniji i stručniji bosanski izraz za Schalldämmung. |
| b2-Scheidewand-1570 | lv | MEDIUM | Septum | Pregradni zid | „Septum“ najčešće označava anatomsku pregradu, dok Scheidewand znači pregradni z |
| b2-schonungslos-1598 | lv | MEDIUM | Nemilosrdni | Nemilosrdan | Rječnički oblik pridjeva treba biti muški jedninski nominativ, ne određeni množi |
| b2-Schöpfung-1600 | lv | MEDIUM | Stvaranje • Stvaranje • Rad | Stvaranje • Tvorevina • Djelo | „Darinājums“ označava tvorevinu ili djelo, ne drugo ponavljanje imenice „stvaran |
| b2-schreiten-1601 | lv | MEDIUM | Hodanje • Ići | Koračati • Ići | Prvi prevod je imenica, a njemački glagol treba infinitiv; „koračati“ je precizn |
| b2-schutzlos-1610 | lv | MEDIUM | Nezaštićeni | Nezaštićen | Njemački je pridjev u osnovnom obliku; nezaštićeni je određeni muški množinski o |
| b2-schwärmen-1613 | lv | MEDIUM | Uzbuditi se • Buncati • Sanjati | Oduševljavati se • Hvaliti s oduševljenjem • Rojiti se | Buncati i sanjati ne prenose standardna značenja glagola schwärmen u ovom nizu. |
| b2-Schwarze-1615 | lv | MEDIUM | Osoba sa crnom bojom kože | Crna osoba | Izraz osoba sa crnom bojom kože je neprirodan; crna osoba je uobičajen neutralan |
| b2-Schwerpunkt-1622 | lv | MEDIUM | Tačka gravitacije | Težište | U bosanskom je ustaljeni termin za Schwerpunkt u fizičkom značenju težište. |
| b2-Seemacht-1625 | lv | MEDIUM | Mora [velika] snaga | Pomorska sila | Pomorska sila je prirodan bosanski izraz za državu ili snagu na moru. |
| b2-sensibel-1639 | lv | MEDIUM | Osjetljivo • Osjetljivo | Osjetljiv • Obziran | Osjetljivo je neuter/adverbijalni oblik; osnovni pridjev je osjetljiv, a drugi s |
| b2-siegreich-1644 | lv | MEDIUM | Krunisan pobedama | Ovjenčan pobjedama | Pobjedama je ijekavski bosanski oblik, a ovjenčan pobjedama prirodnije prevodi z |
| b2-Sorgerecht-1662 | lv | MEDIUM | Pravo na brigu | Pravo na starateljstvo | U pravnom kontekstu Sorgerecht znači pravo na starateljstvo, ne općenito pravo n |
| b2-Spielgerät-1670 | lv | MEDIUM | Inventar sportskih igara | Sportska oprema | Izraz znači opremu za igru ili sport, a ne inventar sportskih igara. |
| b2-spöttisch-1676 | lv | MEDIUM | Podrugljivo • Zubat | Podrugljivo • Izrugivački | Zubat znači 'sa zubima' i nije sinonim za podrugljiv. |
| b2-Sprechanlage-1677 | lv | MEDIUM | Interfonski sistem kod kuće | Interfonski uređaj | Njemački izraz je opći interkom-sistem; 'kod kuće' nepotrebno sužava značenje. |
| b2-Spruchband-1682 | lv | MEDIUM | Transparentni • Poster | Transparent • Plakat | 'Transparentni' je pridjev, dok je potrebno imenica 'transparent'. |
| b2-Stahlwerk-1692 | lv | MEDIUM | Livnica čelika | Čeličana | Stahlwerk je čeličana odnosno čeličana/čelični pogon, ne nužno livnica čelika. |
| b2-steril-1700 | lv | MEDIUM | Sterilno | Sterilan | 'Sterilno' je srednji rod/prilog; osnovni bosanski pridjev treba biti 'sterilan' |
| b2-Strafanzeige-1705 | lv | MEDIUM | Pokretanje krivičnog postupka protiv nekoga | Podnošenje krivične prijave | Strafanzeige je krivična prijava, koja ne mora automatski pokrenuti cijeli postu |
| b2-stranden-1706 | lv | MEDIUM | Nasukati • Imati nesreću | Nasukati se • Doživjeti nesreću | Prvi glagol zahtijeva povratni oblik; drugi je prirodniji kao 'doživjeti nesreću |
| b2-strippen-1710 | lv | MEDIUM | Uradi striptiz | Izvoditi striptiz | Kartica traži infinitiv, a trenutni izraz je neformalni imperativ. |
| b2-Studiengebühr-1716 | lv | MEDIUM | Školarine na univerzitetu | Školarina na univerzitetu | Njemačka riječ je u jednini; trenutni oblik je množina bez konteksta koji je opr |
| b2-Tagebau-1721 | lv | MEDIUM | Otvoreno kopanje minerala | Površinski kop | 'Površinski kop' je ustaljeni bosanski termin za Tagebau. |
| b2-tagen-1725 | lv | MEDIUM | Održati • Sednicu | Održati sjednicu | Drugi prevod je ekavski i fragmentaran; prirodno je „održati sjednicu“. |
| b2-Tiefsinn-1733 | lv | MEDIUM | Promišljenost | Dubokoumnost | „Promišljenost“ znači razboritost; Tiefsinn označava dubinu misli ili dubokoumno |
| b2-Totalschaden-1738 | lv | MEDIUM | Oštećenja na vozilu koja se nakon nezgode ne mogu popraviti | Potpuna šteta na vozilu nakon nesreće, kada popravka više nije moguća | Značenje je razumljivo, ali množina i opisna formulacija nisu prirodan naziv za  |
| b2-Totenschein-1739 | lv | MEDIUM | Izvod iz matične knjige umrlih | Potvrda o smrti | Totenschein je potvrda lekara o smrti, a ne izvod iz matične knjige umrlih. |
| b2-Tretmine-1749 | lv | MEDIUM | Protivpješadijske mine | Protivpješadijska mina | Njemačka odrednica je u jednini, a trenutni prevod je u množini. |
| b2-treuherzig-1750 | lv | MEDIUM | Srdačan • Srdačan | Povjerljiv • Srdačan | „Treuherzig“ znači naivno iskren ili povjerljiv; „srdačan“ ne prenosi prvi smisa |
| b2-überbringen-1761 | lv | MEDIUM | Dostaviti poruku • Pozdrav • Pismo • Poklon | Prenijeti poruku • Uputiti pozdrav • Predati pismo • Uručiti poklon | Samo prvi objekat je preveden glagolskom konstrukcijom; ostali su neprirodni fra |
| b2-überfahren-1763 | lv | MEDIUM | Pregazite • Lagano četkajte | Pregaziti • Lagano preći četkom | Prevod koristi glagolske oblike za obraćanje, umjesto infinitiva kao u njemačkoj |
| b2-überfallen-1764 | lv | MEDIUM | Da napadne iznenada | Iznenada napasti | „Da napadne“ je zavisna konstrukcija i ne odgovara infinitivu odrednice. |
| b2-überfordern-1766 | lv | MEDIUM | Postavljaju prevelike zahtjeve | Postavljati prevelike zahtjeve | Trenutni prevod je konjugovan u trećem licu množine, a treba infinitiv. |
| b2-überführen-1767 | lv | MEDIUM | Prevesti • Preći preko rijeke | Prevesti preko • Prevesti preko rijeke | „Preći preko rijeke“ znači sam preći, a ne prevesti ili prebaciti nekoga preko r |
| b2-Überlastung-1771 | lv | MEDIUM | Preopterećenja | Preopterećenje | Njemačka imenica je u jednini, dok je trenutni bosanski oblik u množini. |
| b2-überschreiten-1776 | lv | MEDIUM | Proći • Prestupiti | Preći • Prekršiti | „Proći“ nije precizan ekvivalent za fizičko prelaženje, a „prekršiti“ je prirodn |
| b2-übertreten-1781 | lv | MEDIUM | Prekršiti zakon • Prekršiti nešto | Prekršiti zakon • Preći preko nečega | Drugi smisao je fizički preći preko nečega, a ne prekršiti nešto. |
| b2-umarbeiten-1785 | lv | MEDIUM | Reciklirati • Preraditi | Preraditi • Preraditi | Reciklirati znači reciklirati, dok umarbeiten znači preraditi ili doraditi. |
| b2-Umbruch-1786 | lv | MEDIUM | Velika promena u politici | Velika promjena u politici | U bosanskom standardu koristi se ijekavski oblik promjena. |
| b2-umschulen-1799 | lv | MEDIUM | Naučiti ljude sa jednim poslom drugom poslu • Da se prekvalifikuju | Prekvalifikovati ljude za drugo zanimanje • Prekvalifikovati se | Prvi dio je gramatički neprirodan, a drugi nije infinitivni prevod. |
| b2-Umschwung-1800 | lv | MEDIUM | Preokret • Prekid • Iznenadna promjena • Preokret • Okret | Preokret • Preokret • Iznenadna promjena • Preokret • Okret | Prekid znači prekid, a ne nagli preokret ili promjenu. |
| b2-umständlich-1803 | lv | MEDIUM | Vrlo detaljno • Preširoko • Opterećujuće • Komplikovano | Vrlo detaljan • Preširok • Opterećujući • Komplikovan | Prevodi su uglavnom u srednjem rodu ili priloškom obliku, umjesto u osnovnom pri |
| b2-unanständig-1808 | lv | MEDIUM | Nepristojno • Se loše ponašao | Nepristojan • Nevaspitan | Drugi element je rečenica u prošlom vremenu, a treba biti pridjev kao i njemačka |
| b2-unbebaut-1811 | lv | MEDIUM | Neobrađeno za zemljište • Neizgrađeno | Neobrađeno zemljište • Neizgrađeno | Izraz za zemljište je gramatički i stilski neprirodan. |
| b2-unbewusst-1821 | lv | MEDIUM | Nesvesno • Instinktivno • Nenamerno • Nenamerno | Nesvjesno • Instinktivno • Nenamjerno • Nenamjerno | Potrebni su ijekavski oblici, a treći i četvrti prevod su nepotrebno duplirani. |
| b2-ungerade-1829 | lv | MEDIUM | Nije sasvim ravno • Krivo • Čudno | Nije sasvim ravno • Krivo • Neparno | U kontekstu brojeva ungerade znači neparno, ne čudno. |
| b2-Untergang-1838 | lv | MEDIUM | Pad • Pad • Propast • Kolaps | Zalazak • Zalaženje • Propast • Kolaps | Pad nije precizan prevod za zalazak sunca; prikladni su zalazak i zalaženje. |
| b2-Untergrund-1839 | lv | MEDIUM | Underground | Podzemlje | Underground je engleska riječ, a ne bosanski prevod; odgovarajuće je podzemlje. |
| b2-Unterhalt-1840 | lv | MEDIUM | Snabdevanje • Snabdevanje • Snabdevanje | Snabdijevanje • Snabdijevanje • Snabdijevanje | Bosanski ijekavski oblik je snabdijevanje, ne ekavski oblik snabdevanje. |
| b2-unzählig-1859 | lv | MEDIUM | Nebrojeno | Nebrojiv | „Nebrojiv“ znači bezbrojan; „nebrojeno“ znači neizbrojeno ili neuračunato. |
| b2-üppig-1861 | lv | MEDIUM | Obilno • Debeljuškasto | Obilno • Bujno | „Debeljuškasto“ znači blago debelo, a „üppig“ ovdje znači bujno ili raskošno. |
| b2-verfallen-1886 | lv | MEDIUM | Srušiti se • Srušiti • Opadati • Potonuti | Srušiti se • Propasti • Opadati • Pasti | „Srušiti“ je prijelazni glagol, dok je njemački glagol ovdje neprijelazan. |
| b2-verfügen-1888 | lv | MEDIUM | Odrediti • Naredbu • Dodijeliti | Odrediti • Narediti • Dodijeliti | „Naredbu“ je akuzativ imenice; potreban je glagol „narediti“. |
| b2-vergeblich-1891 | lv | MEDIUM | Uzaludan • Uzaludan | Uzalud • Uzalud | U ovom značenju njemački oblik je prilog: „uzalud“, a ne pridjev „uzaludan“. |
| b2-Vergehen-1892 | lv | MEDIUM | Kršenje | Prekršaj | Kao pravni pojam „Vergehen“ znači prekršaj ili lakše krivično djelo. |
| b2-vergeuden-1893 | lv | MEDIUM | Trošiti • Rasipati | Traćiti • Rasipati | „Trošiti“ znači koristiti ili potrošiti, bez nužnog značenja rasipanja. |
| b2-verhüten-1902 | lv | MEDIUM | Spriječiti • Zaštititi od | Spriječiti • Zaštititi se | Drugi izraz treba biti refleksivan i označavati preduzimanje zaštitnih mjera. |
| b2-Vermögen-1908 | lv | MEDIUM | Imovine | Imovina | Nominativni oblik imenice treba biti „imovina“, a ne genitivni oblik „imovine“. |
| b2-Versager-1913 | lv | MEDIUM | Gubitnik • Gubitnik | Gubitnik • Neuspješna osoba | Drugi prevod ponavlja prvi i ne prenosi značenje osobe koja ne uspijeva. |
| b2-verkraften-1918 | lv | MEDIUM | Sačuvati moralnu snagu da prebrodi nešto neprijatno | Izdržati nešto neprijatno | Bosanski prevod je neprirodna kalkirana konstrukcija; glagol znači izdržati ili  |
| b2-verkünden-1920 | lv | MEDIUM | Najaviti • Najaviti | Najaviti • Proglasiti | Drugi prevod treba prenijeti značenje javnog proglašavanja. |
| b2-vermehren-1922 | lv | MEDIUM | Množiti • Množiti | Uvećati • Umnožiti | Prevod je nepotrebno ponovljen i ne razlikuje povećavanje od umnožavanja. |
| b2-verrechnen-1932 | lv | MEDIUM | Izračunaj | Izračunati | „Izračunaj“ je imperativ; prevod rječničke natuknice treba biti infinitiv. |
| b2-versetzen-1936 | lv | MEDIUM | Premjestiti • Premjestiti | Premjestiti • Prebaciti | Drugi prevod je ponovljen i ne razlikuje drugo značenje premještanja/prebacivanj |
| b2-versöhnen-1940 | lv | MEDIUM | Da se pomire | Pomiriti se | Prevod treba biti infinitiv; postojeći oblik je zavisna rečenica. |
| b2-verspielen-1942 | lv | MEDIUM | Igrati • Izgubiti | Prokockati • Izgubiti | „Igrati“ ne prenosi značenje uzaludnog gubljenja ili prokockavanja. |
| b2-verweigern-1955 | lv | MEDIUM | Odbiti • Odbiti | Odbiti • Uskratiti | Prevod je ponovljen i ne razlikuje odbijanje od uskraćivanja. |
| b2-Verweis-1957 | lv | MEDIUM | Opomena • Opomena | Opomena • Upućivanje | Drugi prevod je ponovljen; „Verweis“ može značiti i upućivanje/reference. |
| b2-Verwendung-1958 | lv | MEDIUM | Korišćenje | Korištenje | „Korišćenje“ je ekavski/primarno srpski oblik; standardni bosanski je „korištenj |
| b2-verwirren-1960 | lv | MEDIUM | Zbuniti • Zbuniti • Zbuniti | Pobrkati • Zapetljati • Zbuniti | Tri različita značenja prevedena su istom riječju, čime se gubi razlikovanje nij |
| b2-visuell-1976 | lv | MEDIUM | Vizuelno | Vizualan | Njemački je pridjev, dok je 'vizuelno' prilog ili srednji rod pridjeva. |
| b2-vorsätzlich-2003 | lv | MEDIUM | Namjerno • Namjerno | Namjeran • Hotimičan | Njemačka riječ je pridjev; oba postojeća prevoda su prilozi i nepotrebno su dupl |
| b2-Vorspiel-2004 | lv | MEDIUM | Prolog • Uvod • Uvertira | Prolog • Predigra • Uvertira | 'Uvod' ne prenosi smisao predigre; odgovarajući prevod je 'predigra'. |
| b2-Vorsprung-2005 | lv | MEDIUM | Nadmoć • Nadmoć • Superiornost | Izbočina • Nadmoć • Prednost | Prvi smisao je fizička izbočina, a niz neopravdano ponavlja 'nadmoć'. |
| b2-Vorstand-2006 | lv | MEDIUM | Odbor • Šef • Menadžment • Šef | Upravni odbor • Rukovodstvo • Uprava • Predsjednik | Drugi i četvrti prevod su duplicirani, a 'šef' ne pokriva različite funkcije rij |
| b2-Wall-2028 | lv | MEDIUM | Nasip • Nasip | Bedem • Nasip | Prvi smisao je bedem/zemljani zid; 'nasip' odgovara samo drugom smislu. |
| b2-Wasserwerfer-2036 | lv | MEDIUM | Policijski auto - vodeni top | Vodeni top | Wasserwerfer je vodeni top; policijski auto je dodatno i nepotrebno značenje. |
| b2-Wegstrecke-2039 | lv | MEDIUM | Dionica puta • Kom | Dionica puta • Dionica | Kom je neprirodan i ne odgovara značenju dionica ili dio puta. |
| b2-Wehe-2041 | lv | MEDIUM | Dina • Kupena | Dina • Snježni nanos | U ovom značenju Wehe označava snježni nanos, a kupena je samo opšta gomila. |
| b2-weitsichtig-2047 | lv | MEDIUM | Dalekovid | Dalekovidan | Standardni bosanski pridjev je dalekovidan, ne dalekovid. |
| b2-Werkhalle-2055 | lv | MEDIUM | Radionica | Proizvodna hala | Werkhalle označava fabričku ili proizvodnu halu, ne radionicu. |
| b2-Werkteil-2058 | lv | MEDIUM | Detalj | Dio | Werkteil znači dio ili komponenta, dok detalj označava pojedinost. |
| b2-widerlich-2068 | lv | MEDIUM | Odvratno • Odvratno | Odvratno • Gnusno | Dva različita njemačka sinonima prevedena su istim izrazom, uz nepotrebno ponavl |
| b2-Widmung-2071 | lv | MEDIUM | Posvećenost | Posveta | Widmung je posveta, naročito tekst posvećen nekome, a ne opšta posvećenost. |
| b2-Wiederaufbau-2072 | lv | MEDIUM | Restauracija • Rekonstrukcija | Obnova • Rekonstrukcija | Wiederaufbau znači obnova ili ponovna izgradnja; restauracija je uži pojam. |
| b2-wiedergeben-2073 | lv | MEDIUM | Dati • Reprodukovati • Reprodukovati | Vratiti • Reproducirati • Prikazati | Prvi prevod gubi značenje vratiti, a druga i treća stavka su nepotrebno dupliran |
| b2-zielbewusst-2078 | lv | MEDIUM | Ciljano | Usmjeren ka cilju | Ciljano je prilog; njemačka riječ je pridjev koji znači usmjeren ka cilju ili ci |
| b2-zollpflichtig-2081 | lv | MEDIUM | Podležu carini | Podložan carini | Tekući oblik je glagol u prvom licu; potrebna je pridjevska konstrukcija. |
| b2-Zucht-2082 | lv | MEDIUM | Odgoj • Kultivacija | Odgoj • Uzgoj | U drugom značenju Zucht znači uzgoj; kultivacija je neprirodna i manje precizna  |
| b2-zureden-2087 | lv | MEDIUM | Uvjeriti | Nagovarati | Zureden znači nagovarati ili navaljivati, dok uvjeriti znači convince i ne preno |
| b2-zusammenfügen-2092 | lv | MEDIUM | Za povezivanje | Spojiti | Bosanski izraz označava namjenu („za povezivanje“), a njemački glagol traži infi |
| b2-zuschneiden-2094 | lv | MEDIUM | Rezati | Izrezati po mjeri | „Rezati“ je preširoko; zuschneiden znači izrezati ili skrojiti prema potrebnoj m |
| b2-zuströmen-2095 | lv | MEDIUM | Uliva se | Pritjecati | Potrebni su infinitiv i ijekavski oblik; značenje je „pritjecati, navirati“. |
| b2-sich-einschleichen | study.rektion | MEDIUM | in + ko? | in + šta? | Bosansko pitanje za neživu akuzativnu dopunu nije „ko?“, nego „šta?“. |
| b2-sich-einschleichen | study.explanation | MEDIUM | Sich einschleichen zahtijeva definitivni prijedlog u + ko?. | Sich einschleichen zahtijeva određeni prijedlog u + šta?. | „Definitivni prijedlog“ nije prirodan izraz, a „ko?“ je pogrešno pitanje za neži |
| b2-sich-einschleichen | study.forms | MEDIUM | in + ko? | in + šta? | Bosansko pitanje za neživu akuzativnu dopunu nije „ko?“, nego „šta?“. |
| b2-sich-einschleichen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | U gramatičkom kontekstu „Menadžment“ nije odgovarajući prevod za latvijsko „Vadī |
| b2-sich-einschraenken | study.rektion | MEDIUM | auf + ko? | auf + šta? | Bosansko pitanje za neživu akuzativnu dopunu nije „ko?“, nego „šta?“. |
| b2-sich-einschraenken | study.explanation | MEDIUM | Sich einschränken zahtijeva određeni prijedlog auf + ko?. | Sich einschränken zahtijeva određeni prijedlog auf + šta?. | „Ko?“ ne odgovara neživoj akuzativnoj dopuni u bosanskom. |
| b2-sich-einschraenken | study.forms | MEDIUM | auf + ko? | auf + šta? | Bosansko pitanje za neživu akuzativnu dopunu nije „ko?“, nego „šta?“. |
| b2-sich-einschraenken | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-empfehlen | study.translation | MEDIUM | Biti preporučeno | Biti preporučljiv | „Preporučeno“ je pasivni particip, dok ovdje treba pridjev za značenje „biti vri |
| b2-sich-empfehlen | study.rektion | MEDIUM | zu + kam? | zu + kome? | Latvijsko „kam?“ ne treba prenositi kao bosansko „kam?“; odgovarajući oblik je „ |
| b2-sich-empfehlen | study.explanation | MEDIUM | Sich empfehlen zahtijeva određeni prijedlog zu + kam?. | Sich empfehlen zahtijeva određeni prijedlog zu + kome?. | „Kam?“ nije standardno bosansko pitanje; za dativ treba „kome?“. |
| b2-sich-empfehlen | study.forms | MEDIUM | zu + kam? | zu + kome? | Za bosanski dativ odgovara pitanje „kome?“, ne „kam?“. |
| b2-sich-empfehlen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-empören | study.translation | MEDIUM | Naljutiti se • Pobuniti se | Ogorčiti se • Pobuniti se | „Naljutiti se“ je preslabo i ne prenosi značenje ogorčenog protesta. |
| b2-sich-empören | study.rektion | MEDIUM | über + ko? | über + šta? | Bosansko pitanje za neživu akuzativnu dopunu nije „ko?“, nego „šta?“. |
| b2-sich-empören | study.explanation | MEDIUM | Sich empören zahtijeva određeni prijedlog über + ko?. | Sich empören zahtijeva određeni prijedlog über + šta?. | „Ko?“ je pogrešno bosansko pitanje za neživu dopunu. |
| b2-sich-empören | study.forms | MEDIUM | über + ko? | über + šta? | Bosansko pitanje za neživu akuzativnu dopunu nije „ko?“, nego „šta?“. |
| b2-sich-empören | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-enthalten | study.rektion | MEDIUM | von + kam? | von + čega? | Za bosanski genitiv nežive dopune odgovara pitanje „čega?“, ne „kam?“. |
| b2-sich-enthalten | study.explanation | MEDIUM | Sich enthalten zahtijeva definitivni prijedlog von + kam?. | Sich enthalten zahtijeva određeni prijedlog von + čega?. | Izraz „definitivni prijedlog“ je neprirodan, a padežno pitanje je pogrešno. |
| b2-sich-enthalten | study.forms | MEDIUM | von + kam? | von + čega? | Za bosanski genitiv nežive dopune odgovara pitanje „čega?“. |
| b2-sich-enthalten | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-entledigen | study.rektion | MEDIUM | + posesivni oblik | + genitiv | Njemačka rekcija se preciznije i standardnije označava nazivom padeža „genitiv“. |
| b2-sich-entledigen | study.explanation | MEDIUM | Sich entledigen se u savremenom njemačkom upotrebljava u posvojnom obliku bez pr | Sich entledigen se u savremenom njemačkom upotrebljava s genitivom bez prijedlog | „Genitiv“ je precizniji gramatički opis od općeg izraza „posvojni oblik“. |
| b2-sich-entledigen | study.forms | MEDIUM | + posesivni oblik | + genitiv | Njemačka rekcija se preciznije označava nazivom padeža „genitiv“. |
| b2-sich-entledigen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-entrüsten | study.translation | MEDIUM | Naljutiti se • Pobuniti se | Ogorčiti se • Razbjesniti se | Oba postojeća prevoda su semantički slabija ili netačnija od „ogorčiti se“ i „ra |
| b2-sich-entrüsten | study.rektion | MEDIUM | über + ko? | über + šta? | Bosansko pitanje za neživu akuzativnu dopunu nije „ko?“, nego „šta?“. |
| b2-sich-entrüsten | study.explanation | MEDIUM | Sich entrüsten zahtijeva određeni prijedlog über + ko?. | Sich entrüsten zahtijeva određeni prijedlog über + šta?. | „Ko?“ je pogrešno bosansko pitanje za neživu dopunu. |
| b2-sich-entrüsten | study.forms | MEDIUM | über + ko? | über + šta? | Bosansko pitanje za neživu akuzativnu dopunu nije „ko?“, nego „šta?“. |
| b2-sich-entrüsten | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-entsinnen | study.rektion | MEDIUM | + posesivni oblik | + genitiv | Njemačka rekcija se preciznije označava nazivom padeža „genitiv“. |
| b2-sich-entsinnen | study.explanation | MEDIUM | Sich entsinnen se koristi u savremenom njemačkom s posvojnim oblikom bez prijedl | Sich entsinnen se u savremenom njemačkom koristi s genitivom bez prijedloga, na  | „Genitiv“ je precizniji gramatički opis od „posvojni oblik“. |
| b2-sich-entsinnen | study.forms | MEDIUM | + posesivni oblik | + genitiv | Njemačka rekcija se preciznije označava nazivom padeža „genitiv“. |
| b2-sich-entsinnen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-erbarmen | study.rektion | MEDIUM | über + ko? | über + koga? | Ako se zadržava rekcija s osobom, bosansko pitanje za akuzativ je „koga?“, ne „k |
| b2-sich-erbarmen | study.explanation | MEDIUM | Sich erbarmen zahtijeva određeni prijedlog über + ko?. | Sich erbarmen zahtijeva određeni prijedlog über + koga?. | Za živu akuzativnu dopunu u bosanskom treba „koga?“. |
| b2-sich-erbarmen | study.forms | MEDIUM | über + ko? | über + koga? | Za živu akuzativnu dopunu u bosanskom treba „koga?“. |
| b2-sich-erbarmen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-ergeben | study.rektion | MEDIUM | aus + kam? | aus + čega? | Za bosanski dativ nakon „aus“ ovdje treba pitanje „čega?“ u značenju „iz čega“. |
| b2-sich-ergeben | study.explanation | MEDIUM | Sich ergeben zahtijeva određeni prijedlog aus + kam?. | Sich ergeben zahtijeva određeni prijedlog aus + čega?. | „Kam?“ je neodgovarajuće bosansko pitanje za ovu dopunu; treba „čega?“. |
| b2-sich-ergeben | study.forms | MEDIUM | aus + kam? | aus + čega? | Za bosanski oblik nakon „aus“ treba pitanje „čega?“. |
| b2-sich-ergeben | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | „Menadžment“ nije odgovarajući gramatički termin za rekciju. |
| b2-sich-erniedrigen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-sich-erregen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-sich-erweisen | study.explanation | MEDIUM | Sich erweisen zahtijeva definitivni prijedlog über + what?. | Sich erweisen zahtijeva određeni prijedlog als + šta?. | Prepisana je pogrešna rekcija; definitivni i englesko what? nisu bosanski standa |
| b2-sich-erweisen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-sich-fassen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-sich-fuegen | study.explanation | MEDIUM | Sich fügen zahtijeva definitivni prijedlog u + ko?. | Sich fügen zahtijeva određeni prijedlog in + šta?. | Njemački prijedlog ne treba prevoditi u ovoj gramatičkoj oznaci; definitivni je  |
| b2-sich-fuegen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-sich-genieren | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-sich-gesellen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-sich-gestalten | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-sich-grauen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment nije odgovarajući gramatički naziv za glagolsku rekciju. |
| b2-haube | study.examples[0].lv | MEDIUM | Ona nosi topli šešir. | Ona nosi toplu kapu. | Haube u ovom kontekstu znači kapa; šešir je druga vrsta pokrivala za glavu. |
| b2-haube | sectionAccents.examples[2].lv | MEDIUM | On | haubu | Akcenat je postavljen na On, umjesto na bosanski ekvivalent Haube: haubu. |
| b2-haube | sectionAccents.examples[3].lv | MEDIUM | je | Hauba | Akcenat je postavljen na je, umjesto na prevod njemačke riječi: Hauba. |
| b2-sich-herausbilden | study.rektion | MEDIUM | zu + kam? | zu + čemu? | Pitanje za dativ nije prevedeno na bosanski; uz zu ovdje treba čemu? |
| b2-sich-herausbilden | study.explanation | MEDIUM | Sich herausbilden zahtijeva određeni prijedlog zu + kam?. | Sich herausbilden zahtijeva određeni prijedlog zu + čemu?. | Bosanski padežno pitanje "kam" nije odgovarajuće; treba dativno "čemu". |
| b2-sich-herausbilden | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment ne označava gramatičku rekciju glagola. |
| b2-sich-herausshalten | study.rektion | MEDIUM | aus + kam? | aus + čega? | Pitanje za dativ nije prevedeno na bosanski. |
| b2-sich-herausshalten | study.explanation | MEDIUM | Sich heraushalten zahtijeva određeni prijedlog aus + kam?. | Sich heraushalten zahtijeva određeni prijedlog aus + čega?. | Treba bosansko padežno pitanje "čega", a ne "kam". |
| b2-sich-herausshalten | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment ne označava gramatičku rekciju glagola. |
| b2-sich-herausstellen | study.rektion | MEDIUM | als + kas? | als + šta? | Bosansko pitanje za akuzativ nije prevedeno prirodno; "kas" nije standardni bosa |
| b2-sich-herausstellen | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment ne označava gramatičku rekciju glagola. |
| b2-sich-hervortun | study.rektion | MEDIUM | in + kur? | in + čemu? | Pitanje za lokativ/dativ nije prevedeno na bosanski; "kur" je latvijski oblik. |
| b2-sich-hervortun | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment ne označava gramatičku rekciju glagola. |
| b2-sich-hingeben | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment ne označava gramatičku rekciju glagola. |
| b2-hoch-study | study.translation | MEDIUM | Zdravica "živeo!" | Zdravica "živio!" | "Živeo" je ekavski oblik; u standardnom ijekavskom bosanskom treba "živio". |
| b2-hochwasser | study.tip.leftBlocks[0].text | MEDIUM | Hoch = visoka, Wasser = voda. Hochwasser = visok vodostaj, često znači poplava. | Hoch = visok, Wasser = voda. Hochwasser = visok vodostaj, često znači poplava. | "Hoch" je ovdje pridjev muškog roda uz vodostaj, pa treba "visok", ne "visoka". |
| b2-sich-paaren | study.rektion | MEDIUM | mit + kam? | mit + kim? | Njemačka rekcija je zadržana, ali pitanje za osobu treba prevesti kao "kim". |
| b2-sich-paaren | study.formsLabel | MEDIUM | Menadžment: | Rekcija: | Menadžment ne označava gramatičku rekciju glagola. |
| b2-sich-revanchieren | study.translation | MEDIUM | Vratiti • Osvetiti se | Uzvratiti • Osvetiti se | Uzvratiti je precizniji prijevod za uzvraćanje usluge ili postupka od općeg glag |
| b2-sich-revanchieren | study.explanation | MEDIUM | Sich revanchieren zahtijeva definitivni prijedlog bei + kam?. | Sich revanchieren zahtijeva određeni prijedlog bei + kam?. | Definitivni prijedlog je neprirodan kalk; standardno je određeni prijedlog. |
| b2-sofern | study.examples[0].lv | MEDIUM | Dolazim kad imam vremena. | Dolazim ako imam vremena. | Latvijski ja i njemački sofern izražavaju uvjet, ne vremensko značenje kad. |
| b2-sofern | study.examples[2].lv | MEDIUM | Pod uslovom lepog vremena idemo u obilazak. | Pod uslovom da vrijeme bude lijepo, idemo na izlet. | Lepog je ekavizam, nedostaje da, a ekskursija se prirodnije prevodi kao izlet. |
| b2-sich-verwundern | study.explanation | MEDIUM | Sich verwundern zahtijeva definitivni prijedlog über + ko?. | Sich verwundern zahtijeva određeni prijedlog über + ko?. | Definitivni prijedlog je neprirodan kalk; standardno je određeni prijedlog. |
| b2-zuweisen | study.examples[0].lv | MEDIUM | Šef mu daje novi zadatak. | Šef mu dodjeljuje novi zadatak. | „Daje“ je preširoko; izvor naglašava službeno dodjeljivanje zadatka. |
| b2-zuweisen | study.tip.leftBlocks[0].text | MEDIUM | Zuweisen naglašava formalni zadatak—u radu, administraciji, projektima. | Zuweisen naglašava formalno dodjeljivanje ili raspoređivanje u radu, administrac | „Formalni zadatak“ ne prevodi „oficiālu piešķiršanu“ i mijenja značenje. |
| b2-zuwider | study.comparison[1].meaning | MEDIUM | Nekome se to neće svideti | Nekome se to ne sviđa | Uveden je futur, a „svideti“ je ekavski oblik; izvor daje opći glagolski smisao. |
| b2-zuwider | study.comparison[3].meaning | MEDIUM | Protiviti se • Ne slažem se | Protiviti se • Ne slagati se | Drugi prijevod je glagol u 1. licu, a ostali su infinitivi. |
| b2-zuwider | study.important.text | MEDIUM | Zuwider + dativ = protiv, suprotno. zuwider sein = ne sviđa mi se. Nije isto što | Zuwider + dativ = protiv, suprotno. zuwider sein = nekome se ne sviđati. Nije is | „šire“ je pogrešan oblik; treba ostati njemačka riječ „wider“. |
| b2-aendern | study.examples[2].lv | MEDIUM | Menjamo plan. | Mijenjamo svoj plan. | „Menjamo“ je ekavizam, a izostavljen je posesiv „svoj“. |
| b2-aendern | study.examples[3].lv | MEDIUM | Ja menjam termin. | Ja mijenjam rok. | „Menjam“ je ekavizam; „rok“ je prirodniji prijevod za rok/termin u ovom kontekst |
| b2-wechseln | study.examples[0].lv | MEDIUM | Menjam školu. | Mijenjam školu. | „Menjam“ je ekavizam; standardni ijekavski oblik je „mijenjam“. |
| b2-wechseln | study.examples[1].lv | MEDIUM | Moram da promenim novac. | Moram da promijenim novac. | „promenim“ je ekavizam; treba ijekavski oblik „promijenim“. |
| b2-wechseln | study.examples[2].lv | MEDIUM | Menjamo temu. | Mijenjamo temu. | „Menjamo“ je ekavizam. |
| b2-wechseln | study.examples[3].lv | MEDIUM | Menjam školu. | Mijenjam školu. | „Menjam“ je ekavizam. |
| b2-wechseln | study.tip | MEDIUM | Promjeniti | Promijeniti | Nedostaje ijekavsko „ije“ u glagolu. |
| b2-bieten | study.examples[1].lv | MEDIUM | Mogu li ti ponuditi nešto | Mogu li vam nešto ponuditi? | „Jums“ zahtijeva formalno „vam“, a nedostaje upitnik. |
| b2-anbieten | study.explanation | MEDIUM | Glavna ideja: anbieten znači aktivno ponuditi nekome uslugu, piće, posao ili usl | Glavna ideja: anbieten znači aktivno ponuditi nekome pomoć, piće, posao ili uslu | „Uslugu“ je navedeno dvaput, a „pomoć“ je pogrešno izostavljena. |
| b2-anbieten | study.examples[1].lv | MEDIUM | Mogu li ti ponuditi nešto | Mogu li vam nešto ponuditi? | „Jums“ zahtijeva formalno „vam“, a nedostaje upitnik. |
| b2-anbieten | study.comparison[0].meaning | MEDIUM | Ponuda (aktivna) | Aktivno nuditi | Prijevod je imenica umjesto infinitiva i ne odgovara glagolskoj natuknici. |
| b2-fordern | study.examples[4].lv | MEDIUM | Zahtijevati • Förden | Zahtijevati • fördern | Njemačka riječ u BS tekstu ima pravopisnu grešku: nedostaje slovo „r“. |
| b2-sich-verlaufen | study.explanation | MEDIUM | Sich verlaufen znači izgubiti se. Nema fiksni prijedlog. Ne treba mešati sa verl | Sich verlaufen znači izgubiti se. Nema ustaljeni prijedlog. Ne treba ga miješati | „mešati“ je ekavizam, a „verlaufenom“ je neprirodna i gramatički pogrešna deklin |
| b2-abhören-49 | lv | LOW | Prisluškivati ​​ • Prisluškivati | Prisluškivati • Prisluškivati | Prvi unos sadrži suvišne razmake i nevidljive Unicode znakove. |
| b2-sich-abfinden | study.explanation | LOW | Sich abfinden zahtijeva određeni prijedlog mit + kam?. | Sich abfinden zahtijeva određeni prijedlog mit + kim/čim?. | Bosanski upit treba biti kim/čim?, ne latvijsko kam?. |
| b2-sich-abwenden | study.explanation | LOW | Sich abwenden zahtijeva definitivni prijedlog von + kam?. | Sich abwenden zahtijeva određeni prijedlog von + koga/čega?. | Definitivni nije odgovarajući gramatički termin, a kam? je latvijski oblik. |
| b2-sich-befassen | study.explanation | LOW | Sich befassen zahtijeva definitivni prijedlog mit + kam?. | Sich befassen zahtijeva određeni prijedlog mit + kim/čim?. | Definitivni nije odgovarajući gramatički termin, a kam? je latvijski oblik. |
| b2-sich-begnuegen | study.explanation | LOW | Sich begnügen zahtijeva određeni prijedlog mit + kam?. | Sich begnügen zahtijeva određeni prijedlog mit + kim/čim?. | kam? je latvijski oblik; bosanski upit za dativ je kim/čim?. |
| b2-sich-berufen | study.explanation | LOW | Sich berufen zahtijeva definitivni prijedlog auf + ko?. | Sich berufen zahtijeva određeni prijedlog auf + šta/koga?. | Definitivni nije odgovarajući gramatički termin; ko? je ovdje preusko. |
| b2-sich-beschraenken | study.explanation | LOW | Sich beschränken zahtijeva definitivni prijedlog auf + ko?. | Sich beschränken zahtijeva određeni prijedlog auf + šta/koga?. | Definitivni nije odgovarajući gramatički termin; ko? je ovdje preusko. |
| b2-sich-einlassen | study.explanation | LOW | Sich einlassen zahtijeva definitivni prijedlog auf + ko?. | Sich einlassen zahtijeva određeni prijedlog auf + šta/koga?. | Definitivni nije odgovarajući gramatički termin; ko? je ovdje preusko. |
| b2-abstoßend-68 | lv | LOW | Odbojno • Odvratno | Odbojan • Odvratan | Prevod je u srednjem rodu/adverbijalnom obliku; lema je pridjev muškog roda. |
| b2-absurd-70 | lv | LOW | Apsurdno • Besmisleno | Apsurdan • Besmislen | Njemački pridjev treba biti preveden pridjevom, a ne srednjim rodom/adverbijalno |
| b2-Anmut-85 | lv | LOW | Privlačnost • Lepota • Gracioznost | Privlačnost • Ljepota • Gracioznost | Lepota je ekavski oblik; standardni bosanski ijekavski oblik je ljepota. |
| b2-annähernd-86 | lv | LOW | Približno • Približno | Približan • Približno | Prvo latvijsko značenje je pridjev, pa treba razlikovati približan od približno. |
| b2-aussichtslos-106 | lv | LOW | Beznadežno • Nema perspektive | Beznadežan • Bez izgleda | Prvi oblik je srednji rod/adverbijalan, a drugi je neprirodna kalkirana konstruk |
| b2-aussterben-109 | lv | LOW | Izumreti | Izumrijeti | Izumreti je ekavski oblik; standardni bosanski ijekavski oblik je izumrijeti. |
| b2-beharrlich-159 | lv | LOW | Uporan • Uporan | Uporan • Postojan | Drugi prevod nepotrebno ponavlja prvi i ne prenosi značenje pastāvīgs. |
| b2-sich beleben-180 | lv | LOW | Oživeti | Oživjeti | Oživeti je ekavski oblik; u bosanskom standardu treba ijekavski oblik oživjeti. |
| b2-Bergmann-193 | lv | LOW | Rudar • Rudar | Rudar • Rudar uglja | Izgubljena je specifičnost drugog značenja: rudar uglja. |
| b2-bestechlich-215 | lv | LOW | Kupiv • Podmitljiv | Potkupljiv • Podmitljiv | 'Kupiv' je neprirodno i nejasno u bosanskom za osobu podložnu mitu. |
| b2-Bildbericht-256 | lv | LOW | Foto reportaža | Fotoreportaža | Bosanski standardni oblik je spojeno: fotoreportaža. |
| b2-blödsinnig-271 | lv | LOW | Luda • Budalasta • Budalasta • Glupa | Lud • Budalast • Budalast • Glup | Pridjevi su navedeni u ženskome rodu umjesto uobičajenog osnovnog oblika. |
| b2-blutarm-276 | lv | LOW | Anemična | Anemičan | Pridjev je naveden u ženskome rodu bez konteksta; osnovni oblik je muški rod. |
| b2-Börse-287 | lv | LOW | Berzi | Berza | Navedeni je padežni oblik; kao rječnička natuknica treba nominativ. |
| b2-Dressman-442 | lv | LOW | Model demonstrator na modnim revijama | Muški maneken na modnim revijama | Trenutni izraz je razumljiv, ali neprirodan; uobičajen bosanski naziv je muški m |
| b2-Eilbrief-530 | lv | LOW | Hitno pismo | Ekspresno pismo | „Hitno pismo“ je razumljivo, ali „Eilbrief“ se prirodnije prevodi kao „ekspresno |
| b2-einleuchten-567 | lv | LOW | Biti shvaćen • Biti jasan | Imati smisla • Biti jasan | Biti shvaćen je pasivno i neprirodno za einleuchten; uobičajeno je imati smisla  |
| b2-Empörung-614 | lv | LOW | Zgražanje • Pobuna • Pobuna | Zgražanje • Ogorčenje • Pobuna | Treća i druga jedinica su duplicirane; različiti bosanski ekvivalenti bolje pokr |
| b2-entbinden-617 | lv | LOW | Osloboditi • Osloboditi • Roditi | Osloboditi • Razriješiti • Poroditi | Dva prva ekvivalenta su duplicirana; „poroditi“ preciznije označava akušersko zn |
| b2-europaweit-731 | lv | LOW | Na panevropskoj skali | Širom Evrope | Trenutni izraz je razumljiv, ali neprirodan; širom Evrope prirodnije prenosi zna |
| b2-flimmern-801 | lv | LOW | Svjetlucati • Svjetlucati • Svjetlucati • Svjetlucati • Svjetlucati | Treperiti • Svjetlucati • Tit­rati • Žmiriti • Nijansirati | Ponavljanje jednog prevoda briše važne razlike između treperenja, titranja i svj |
| b2-Funkstation-851 | lv | LOW | Radiodifuzna stanica | Radio-stanica | Radiodifuzna stanica je uži pojam; Funkstation općenito znači radio-stanica. |
| b2-Gage-860 | lv | LOW | Honorar umetnika | Honorar umjetnika | U bosanskom standardu koristi se ijekavski oblik umjetnik, ne ekavski umetnik. |
| b2-gedämpft-878 | lv | LOW | Prigušen • Utišan • Prigušen | Kuhan na pari • Prigušen • Utišan | Prvi i treći prijevod su duplikat; nedostaje značenje „kuhan na pari“. |
| b2-Gedenktag-883 | lv | LOW | Dan sećanja | Dan sjećanja | U bosanskom standardu koristi se ijekavski oblik „sjećanja“. |
| b2-Gefallen-885 | lv | LOW | Sviđanje • Sviđanje | Sviđanje • Naklonost | Oba bosanska prijevoda su identična; drugi treba razlikovati kao „naklonost“. |
| b2-Gefecht-888 | lv | LOW | Bitka • Bitka | Bitka • Borba | Oba bosanska prijevoda su identična; drugi treba dati kao „borba“. |
| b2-Gefüge-890 | lv | LOW | Struktura • Struktura • Veza • Spajanje | Struktura • Ustrojstvo • Veza • Spoj | Prva dva prijevoda su duplikat, a „spajanje“ je manje precizno od „spoj“. |
| b2-geläufig-902 | lv | LOW | Poznato • Poznato • Uobičajeno • Tečno • Tečno | Poznat • Poznat • Uobičajen • Tečan • Slobodan | Pridjevi su u srednjem rodu, jedan oblik je dupliran, a „tečno“ se ponavlja. |
| b2-Gemisch-918 | lv | LOW | Mješavina • Mješavina • Mješavina | Mješavina • Smjesa • Miješavina | Sva tri bosanska prijevoda su identična; treba prikazati različite ekvivalente. |
| b2-gewissenlos-979 | lv | LOW | Bez savjesti • Nepošteno | Bez savjesti • Nepošten | Uz imenicu ili pridjev muškog roda treba „nepošten“, ne adverbijalno/neuterno „n |
| b2-gutmütig-1052 | lv | LOW | Ljubaznog srca | Dobrodušan | Značenje je razumljivo, ali pridjevska fraza nije prirodan rječnički ekvivalent  |
| b2-habsüchtig-1054 | lv | LOW | Pohlepan • Pohlepan | Pohlepan • Gramziv | Oba bosanska ekvivalenta su ista; drugi sinonim treba biti različit radi učenja. |
| b2-Hochachtung-1138 | lv | LOW | Veliko postovanje | Veliko poštovanje | Nedostaje bosanski dijakritički znak š. |
| b2-Hochspannung-1141 | lv | LOW | Visokog napona | Visoki napon | Za samostalnu imenicu prirodniji i gramatički odgovarajući oblik je visoki napon |
| b2-humanitär-1152 | lv | LOW | Humanitarna | Humanitaran | Pridjev je naveden bez imenice i treba biti u osnovnom muškom rodu. |
| b2-inkompatibel-1159 | lv | LOW | Nekompatibilno | Nekompatibilan | Samostalni pridjev treba biti u osnovnom muškom rodu, ne u srednjem rodu. |
| b2-Investition-1164 | lv | LOW | Ulaganja • Ulaganje • Kapitalna ulaganja • Ulaganje | Ulaganje • Ulaganje • Kapitalno ulaganje • Ulaganje | Njemačka imenica je u jednini; prvi i treći bosanski ekvivalenti su u množini. |
| b2-Karrierefrau-1174 | lv | LOW | Žena od karijere | Žena koja gradi karijeru | Žena od karijere je neprirodan i neprecizan izraz za ženu koja gradi karijeru. |
| b2-knifflig-1184 | lv | LOW | Komplikovano | Komplikovan | Rječnički oblik pridjeva treba biti muški rod: komplikovan. |
| b2-langfristig-1214 | lv | LOW | Dugoročni • Dugoročni | Dugoročan • Dugotrajan | Oba oblika su pogrešno ponovljena i prvi je neodgovarajuće određeni oblik. |
| b2-länglich-1215 | lv | LOW | Izduženo | Izdužen | Za rječnički oblik pridjeva potreban je muški rod: izdužen. |
| b2-latent-1217 | lv | LOW | Skriveno • Neprimjetno | Skriven • Neprimjetan | Pridjevi su navedeni u srednjem rodu umjesto osnovnog muškog oblika. |
| b2-Lochkarte-1255 | lv | LOW | Bušene kartice | Bušena kartica | Njemačka natuknica je jednina, ali bosanski prijevod je u množini. |
| b2-Narkosearzt-1363 | lv | LOW | Doktor anesteziolog | Ljekar anesteziolog | U bosanskom je prirodniji i standardniji izraz 'ljekar anesteziolog'. |
| b2-Neuerscheinung-1376 | lv | LOW | Novo • Novo izdanje | Novitet • Novo izdanje | 'Novo' samo po sebi nije prirodna imenica za novu publikaciju ili novitet. |
| b2-Radiobastler-1489 | lv | LOW | Radio amater | Radioamater | U bosanskom se složenica standardno piše spojeno: „radioamater“. |
| b2-Schnappschuss-1597 | lv | LOW | Snimak na fotografiji | Trenutni snimak | „Snimak na fotografiji“ je neprirodno i tautološko; Schnappschuss je trenutna fo |
| b2-These-1732 | lv | LOW | Teza | Teza | Bosanski standard piše „teza“; početno veliko slovo može ostati samo zbog konven |
| b2-Überlegung-1772 | lv | LOW | Razmišljanje • Razmatranje • Razmatranje | Razmišljanje • Razmatranje • Promišljanje | Treća stavka nepotrebno ponavlja drugu; različit ekvivalent bolje pokriva navede |
| b2-übertragen-1780 | lv | LOW | Prenositi • Prenositi zarazne bolesti • Emitirati putem radija • [re]prevoditi | Prenositi • Prenositi zarazne bolesti • Emitovati putem radija • Prevoditi | „[re]prevoditi“ je neprirodan označeni oblik i može značiti ponovo prevesti; ovd |
| b2-überwältigen-1782 | lv | LOW | Savladati • Pobediti | Savladati • Pobijediti | „Pobediti“ je ekavski oblik; standardni ijekavski bosanski oblik je „pobijediti“ |
| b2-umfassen-1788 | lv | LOW | Obuhvatiti • Zagrliti • Zagrliti | Obuhvatiti • Obuhvatiti • Zagrliti | Drugi prevod treba biti obuhvatiti; Zagrliti je odgovarajući samo za apskaut. |
| b2-Umfeld-1789 | lv | LOW | Okruženje društveno • Političko | Društveno okruženje • Političko okruženje | Pridjevi neprirodno stoje iza imenice i drugi je element nepotrebno kapitalizira |
| b2-unentgeltlich-1824 | lv | LOW | Bez naknade • Besplatno • Za ništa | Bez naknade • Besplatno • Besplatno | Za ništa može značiti uzalud ili bez vrijednosti, pa nije precizan prevod za bes |
| b2-unterirdisch-1841 | lv | LOW | Podzemni- | Podzemni | Završna crtica pripada izvornom fragmentu, ali nije dio bosanskog pridjeva. |
| b2-väterlich-1868 | lv | LOW | Očinski- • Očinski | Očinski • Očinski | Bosanski pridjev ne piše se s crticom kada stoji samostalno. |
| b2-vollkommen-1980 | lv | LOW | Kompletno • Potpuno • Potpuno | Potpun • Potpuno • Sasvim | Treći prevod treba prenijeti značenje 'sasvim'; postojeći niz je i stilski neuje |
| b2-voran-1986 | lv | LOW | Ispred • Ispred • Na čelu | Naprijed • Ispred • Na čelu | Prvi smisao je 'naprijed'; ponavljanjem 'ispred' gubi se značenje kretanja unapr |
| b2-sich-einschleichen | study.translation | LOW | Ušuljati se • Ušuljati se | Ušuljati se • Uvući se neprimjetno | Drugi prevod je nepotrebno dupliciran i ne prenosi zaseban nijansirani smisao. |
| b2-sich-entledigen | study.translation | LOW | Osloboditi se • Osloboditi se | Osloboditi se • Riješiti se | Drugi prevod je dupliciran umjesto da prenese drugi izvorni sinonim. |
| b2-sich-erbarmen | study.translation | LOW | Smilovati se • Smilovati se | Smilovati se • Sažaliti se | Drugi prevod je dupliciran umjesto drugog izvornog sinonima. |
| b2-nachdruck | study.comparison[2].meaning | LOW | Pritisak / print | Pritisak / štampa | "Štampa" je standardniji i precizniji bosanski ekvivalent za Druck u značenju pr |
| b2-sich-revanchieren | study.formsLabel | LOW | Menadžment: | Rekcija: | U gramatičkom kontekstu Vadība znači rekcija, a ne menadžment. |
| b2-sich-scheren | study.formsLabel | LOW | Menadžment: | Rekcija: | U gramatičkom kontekstu Vadība znači rekcija, a ne menadžment. |
| b2-sofern | study.examples[3].lv | LOW | Budite konkretni ako je moguće. | Budite precizni ako je moguće. | U ovom kontekstu precizni odgovara značenju 'tačni', dok konkretni znači određen |
| b2-sich-vereinigen | study.formsLabel | LOW | Menadžment: | Rekcija: | U gramatičkom kontekstu Vadība znači rekcija, a ne menadžment. |
| b2-sich-versehen | study.formsLabel | LOW | Menadžment: | Rekcija: | U gramatičkom kontekstu Vadība znači rekcija, a ne menadžment. |
| b2-sich-versoehnen | study.formsLabel | LOW | Menadžment: | Rekcija: | U gramatičkom kontekstu Vadība znači rekcija, a ne menadžment. |
| b2-sich-verstellen | study.formsLabel | LOW | Menadžment: | Rekcija: | U gramatičkom kontekstu Vadība znači rekcija, a ne menadžment. |
| b2-sich-verwundern | study.formsLabel | LOW | Menadžment: | Rekcija: | U gramatičkom kontekstu Vadība znači rekcija, a ne menadžment. |
| b2-sich-widersetzen | study.formsLabel | LOW | Menadžment: | Rekcija: | U gramatičkom kontekstu Vadība znači rekcija, a ne menadžment. |
| b2-aendern | study.examples[1].lv | LOW | Mozes li promijeniti adresu? | Možeš li promijeniti adresu? | Nedostaju dijakritici u „Možeš“. |

---

## API usage

| Metrika | Vērtība |
|---|---:|
| model | `gpt-5.6-luna` |
| API requests | 41 (2 pilot + 39 full) |
| successful | 39 |
| failed | 0 |
| retries | 0 |
| input tokens | 141424 |
| cached input tokens | 0 |
| output tokens | 214862 |
| reasoning tokens | 87433 |
| total tokens | 356286 |

---

## Statuss

**B2 data files changed: 0**

**BS–DE B2 FULL LINGUISTIC AUDIT = COMPLETE** (1157 quality findings)

Šis NAV `FINAL – OWNER ACCEPTED` un NAV `PRODUCTION READY`.

**NEKO NELABOT. AUDIT ONLY.**
