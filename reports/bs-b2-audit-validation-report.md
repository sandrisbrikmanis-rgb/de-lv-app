# BS–DE B2 — audit findings validation / triage

**Datums:** 2026-08-08
**Modelis:** gpt-5.6-luna
**Režīms:** VALIDATION ONLY — datu faili nemainīti

---

## Initial audit

| Kategorija | Skaits |
|---|---:|
| CRITICAL | 32 |
| HIGH | 514 |
| MEDIUM | 530 |
| LOW | 81 |
| Raw total | 1157 |

---

## Pre-validation

| Metrika | Skaits |
|---|---:|
| raw findings | 1157 |
| duplicates | 0 |
| stale | 4 |
| unique findings | 1157 |
| deterministic candidates | 96 |
| Luna candidates | 1057 |

---

## Final verdicts

| Verdict | Count |
|---|---:|
| FIX | 1072 |
| KEEP | 8 |
| STYLE_ONLY | 66 |
| PROJECT_CONVENTION | 0 |
| SOURCE_LV_ISSUE | 4 |
| DE_SOURCE_ISSUE | 1 |
| NEEDS_REVIEW | 2 |
| STALE_AFTER_AUDIT | 4 |

---

## FIX by validation method

| Method | Count |
|---|---:|
| deterministic | 96 |
| Luna | 976 |

---

## Validated severity (FIX only)

| Severity | Count |
|---|---:|
| CRITICAL | 13 |
| HIGH | 694 |
| MEDIUM | 347 |
| LOW | 18 |

---

## Pattern report

| Pattern | candidates | confirmed (FIX) | rejected |
|---|---:|---:|---:|
| ekavism | 53 | 51 | 2 |
| grammar | 219 | 184 | 34 |
| semantic | 792 | 745 | 38 |
| formsLabel | 43 | 43 | 0 |
| en_remnant | 48 | 47 | 0 |
| cache_collision | 2 | 2 | 0 |

---

## Confirmed FIX list (priority order)

| cardId | field | severity | method | current | corrected | reason |
|---|---|---|---|---|---|---|
| b2-entwerfen-646 | lv | CRITICAL | luna | Cast • Obris | Skicirati • Nacrtati | Trenutni unos sadrži riječ na drugom jeziku i imenicu umjesto odgovarajućih glagola. |
| b2-Geldbuße-904 | lv | CRITICAL | luna | U redu | Novčana kazna | Geldbuße znači novčana kazna, dok „u redu“ ima potpuno drugo značenje. |
| b2-luftdicht-1265 | lv | CRITICAL | luna | Propusni za zrak • Hermetički | Nepropusni za zrak • Hermetički zatvoren | „Propusni za zrak“ ima suprotno značenje od luftdicht. |
| b2-Putsch-1479 | lv | CRITICAL | luna | Putsch | Puč | Trenutni tekst je njemačka riječ, a nije bosanski prijevod. |
| b2-sättigen-1552 | lv | CRITICAL | luna | [dobra] hrana • Gozba • Hem. saturate | [dobro] nahraniti • Častiti • Hem. zasititi | Glagol je preveden imenicama, a „saturate“ je riječ iz drugog jezika. |
| b2-schelten-1574 | lv | CRITICAL | luna | Bart • Bart | Grditi • Grditi se | „Bart“ je pogrešan odnosno nelatinski prevod; schelten znači grditi ili koriti. |
| b2-Weib-2044 | lv | CRITICAL | luna | Cf. nije žena | Žena, pogrdno | Tekući tekst nije prevod; Weib je pogrdan ili zastario izraz za ženu. |
| b2-sich-herausshalten | study.explanation | CRITICAL | luna | Sich heraushalten zahtijeva određeni prijedlog aus + kam?. | Sich heraushalten zahtijeva određeni prijedlog aus + čega?. | Latvijsko pitanje "kam" pogrešno je uneseno u bosanski tekst. |
| b2-sich-herausstellen | study.rektion | CRITICAL | luna | als + kas? | als + šta? | "Kas" je latvijsko pitanje, a ne standardni bosanski oblik. |
| b2-sich-hervortun | study.rektion | CRITICAL | luna | in + kur? | in + čemu? | "Kur" je latvijsko pitanje; bosanski oblik je "čemu". |
| b2-sich-paaren | study.rektion | CRITICAL | luna | mit + kam? | mit + kim? | "Kam" je latvijski oblik; bosansko pitanje za osobu je "kim". |
| b2-sich-paaren | study.explanation | CRITICAL | luna | Sich paaren zahtijeva definitivni prijedlog mit + kam?. | Sich paaren zahtijeva određeni prijedlog mit + kim?. | Tekst sadrži latvijsko pitanje i neprirodan kalk "definitivni prijedlog". |
| b2-sich-versehen | study.explanation | CRITICAL | luna | Sich verschein zahtijeva određeni prijedlog mit + kam?. | Sich versehen zahtijeva određeni prijedlog mit + čime?. | Naziv glagola je pogrešno napisan, a "kam" je latvijsko pitanje. |
| b2-Absatzmarkt-56 | lv | HIGH | deterministic | Outlet market | Tržište plasmana | Bosanski prevod je ostao na engleskom; 'Absatzmarkt' znači tržište prodaje ili plasmana. |
| b2-sich-abfinden | study.translation | HIGH | deterministic | Trpiti | Pomiriti se s | Cache collision: Trpiti (endure) wrong for reconcile |
| b2-sich-betaetigen | study.explanation | HIGH | deterministic | Sich betätigen zahtijeva određeni prijedlog u + where?. | Sich betätigen zahtijeva određeni prijedlog in + gdje?. | where? je engleski ostatak, a u + where? nije usklađeno s rekcijom in + gdje?. |
| b2-bewilligen-235 | lv | HIGH | deterministic | Dozvoliti • Dodijeliti • Grant | Dozvoliti • Dodijeliti • Odobriti | 'Grant' je engleska riječ, nije bosanski prevod. |
| b2-Dorsch-423 | lv | HIGH | deterministic | Cod | Bakalar | Cod je engleski naziv; bosanski naziv za Dorsch je bakalar. |
| b2-Eberesche-494 | lv | HIGH | deterministic | Sumporna mahovina • Rowan | Oskoruša • jarebika | Prvi prevod je pogrešan, a drugi je ostao na engleskom; Eberesche je vrsta oskoruše/jarebi |
| b2-eigenhändig-524 | lv | HIGH | deterministic | Self-made | Vlastoručan | Engleski izraz nije bosanski prevod i znači nešto drugo; eigenhändig znači vlastoručan. |
| b2-eingewurzelt-556 | lv | HIGH | deterministic | Rooted | Ukorenjen | Bosanski tekst je na engleskom, a ne na bosanskom; značenje je ukorijenjen. |
| b2-einleiten-566 | lv | HIGH | deterministic | Enter | Uvesti | Tekst je na engleskom, a njemački glagol znači uvesti ili započeti. |
| b2-einweichen-592 | lv | HIGH | deterministic | Dip | Namakati | Tekst je na engleskom; einweichen znači namakati ili potopiti. |
| b2-Eisbrecher-597 | lv | HIGH | deterministic | Ice breaker | Ledolomac | Tekst je na engleskom; bosanski prijevod za Eisbrecher je ledolomac. |
| b2-entgleisen-628 | lv | HIGH | deterministic | Derail | Iskliznuti iz šina | Trenutni oblik je engleska riječ, a ne bosanski prevod. |
| b2-erbrechen-664 | lv | HIGH | deterministic | Break open • Hak | Povratiti | Prema njemačkom značenju erbrechen znači povratiti; LV vjerovatno pripada glagolu aufbrech |
| b2-erschlagen-705 | lv | HIGH | deterministic | Knock off | Usmrtiti udarcem | Trenutni prevod je na engleskom i ne prevodi njemački glagol erschlagen. |
| b2-Espe-729 | lv | HIGH | deterministic | Aspen | Jasika | Aspen je engleski naziv; bosanski naziv za Espe je jasika. |
| b2-Farbstoff-760 | lv | HIGH | deterministic | Dye | Bojilo | Tekst je na engleskom i ne pripada bosanskom prevodu; Farbstoff znači bojilo. |
| b2-Fink-789 | lv | HIGH | deterministic | Finch | Zeba | Tekst je na engleskom; njemački Fink znači zeba. |
| b2-Flosse-803 | lv | HIGH | deterministic | Flipper | Peraja | Flipper je engleski; bosanski prevod za Flosse je peraja. |
| b2-Garde-866 | lv | HIGH | deterministic | Guard | Garda | Bosansko „Guard“ je engleski oblik; njemačko Garde znači garda. |
| b2-Geländelauf-900 | lv | HIGH | deterministic | Cross country | Kros | Bosanski prijevod je ostavljen na engleskom umjesto uobičajenog izraza „kros“. |
| b2-Gestrüpp-966 | lv | HIGH | deterministic | Bush | Šikara | „Bush“ je engleska riječ; Gestrüpp znači šikara ili gusto grmlje. |
| b2-raffgierig-986 | lv | HIGH | deterministic | Spellbinding | Pohlepan | „Spellbinding“ je engleski izraz koji znači očaravajući; raffgierig znači pohlepan ili gra |
| b2-Goldwäscher-1013 | lv | HIGH | deterministic | Gold washer | Ispirač zlata | The current text is English, not Bosnian. |
| b2-grauen-1022 | lv | HIGH | deterministic | Weave | Svitanje | The current entry is English and does not translate the German verb meaning “to dawn.” |
| b2-Hahnenkamm-1058 | lv | HIGH | deterministic | Cock sext | Pijetlova kresta | Trenutni tekst je pogrešan engleski izraz; Hahnenkamm znači pijetlovu krestu. |
| b2-Heldentat-1090 | lv | HIGH | deterministic | Feat | Junačko djelo • Podvig | Trenutni tekst je engleska riječ; Heldentat znači junačko djelo ili podvig. |
| b2-Hitzkopf-1132 | lv | HIGH | deterministic | Hothead | Usijana glava | Hothead je engleski, a nije bosanski prijevod riječi Hitzkopf. |
| b2-kompatibel-1189 | lv | HIGH | deterministic | Connectable | Kompatibilan | Prijevod je na engleskom i ne odgovara jeziku ciljnog polja. |
| b2-List-1251 | lv | HIGH | deterministic | Tricky | Varka | Tekst je na engleskom i pridjev; njemačka imenica List znači varka ili lukavstvo. |
| b2-Litfaßsäule-1253 | lv | HIGH | deterministic | Poster pole | Oglasni stub | Tekst je na engleskom; njemački pojam označava oglasni stub. |
| b2-Massaker-1294 | lv | HIGH | deterministic | Carnage | Pokolj | Tekst je na engleskom; Massaker znači pokolj ili masakr. |
| b2-Milbe-1313 | lv | HIGH | deterministic | Tick | Grinja | „Tick“ je engleska riječ za krpelja; njemačko „Milbe“ znači grinja. |
| b2-normieren-1387 | lv | HIGH | deterministic | To ration | Normirati | Normieren znači normirati ili standardizovati; trenutni prevod je engleski i pogrešan. |
| b2-Regenfront-1512 | lv | HIGH | deterministic | Rain band | Kišna fronta | Prevod je na engleskom, a ne na bosanskom; „Regenfront“ znači kišna fronta. |
| b2-Schmerzensgeld-1593 | lv | HIGH | deterministic | Bol money | Novčana naknada za pretrpljeni bol | Trenutni prevod sadrži englesku riječ i ne predstavlja bosanski izraz za naknadu zbog bola |
| b2-schwelen-1619 | lv | HIGH | deterministic | Glowing | Tinjati | BS je ostavljen na engleskom; schwelen znači tinjati ili žeraviti se. |
| b2-Silberschmied-1645 | lv | HIGH | deterministic | Silversmith | Srebrar | BS je ostavljen na engleskom; Silberschmied znači srebrar, odnosno zanatlija koji obrađuje |
| b2-totschlagen-1741 | lv | HIGH | deterministic | Knock off | Prebiti nasmrt | Prevod je na engleskom i ne predstavlja bosanski ekvivalent glagola „ubiti premlaćivanjem“ |
| b2-Trockenlegung-1755 | lv | HIGH | deterministic | Draining | Isušivanje | Prevod je na engleskom, a ne na bosanskom; njemačka imenica znači isušivanje ili odvodnjav |
| b2-ultimativ-1783 | lv | HIGH | deterministic | Ultimate | Ultimativan | Prevod je engleski i ne odgovara njemačkom pridjevu; bosanski ekvivalent je „ultimativan“. |
| b2-Untergrund-1839 | lv | HIGH | deterministic | Underground | Podzemlje | Underground je engleska riječ, a ne bosanski prevod; odgovarajuće je podzemlje. |
| b2-weben-2037 | lv | HIGH | deterministic | Weave | Tkati | Tekući prevod je engleski, a ne bosanski; glagol znači tkati. |
| b2-Weber-2038 | lv | HIGH | deterministic | Weaver | Tkač | Tekući prevod je engleski; Weber znači tkač. |
| b2-Welpe-2048 | lv | HIGH | deterministic | Puppy | Štene | Tekući prevod je engleski; Welpe znači štene. |
| b2-Windbeutel-2076 | lv | HIGH | deterministic | Wind cake | Krempita | Tekući prevod je engleski; Windbeutel je naziv za krempitu. |
| b2-Zwirn-2107 | lv | HIGH | deterministic | Thread | Konac | Bosanski prijevod je ostao na engleskom; Zwirn znači konac. |
| b2-sich-herausstellen | study.explanation | HIGH | deterministic | Sich herausstellen zahtijeva definitivni prijedlog als + what?. | Sich herausstellen zahtijeva određeni prijedlog als + šta?. | Tekst sadrži englesko "what?" i neprirodno "definitivni prijedlog". |
| b2-sich-hervortun | study.explanation | HIGH | deterministic | Sich hervortun zahtijeva određeni prijedlog u + where?. | Sich hervortun zahtijeva određeni prijedlog u + čemu?. | Tekst sadrži englesko "where?" umjesto bosanskog padežnog pitanja. |
| b2-sich-versoehnen | study.translation | HIGH | deterministic | Trpiti | Pomiriti se s | Cache collision: Trpiti (endure) wrong for reconcile |
| b2-widersprechen-5 | lv | HIGH | luna | Objekt | Protiviti se | „Objekt“ znači predmet; ne prenosi značenje glagola „widersprechen“. |
| b2-anbrechen-25 | lv | HIGH | luna | Za početak • Hakirati | Početi • Načeti | „Za početak“ nije glagolski prevod, a „hakirati“ znači provaliti u sistem. |
| b2-Abenteuerlust-39 | lv | HIGH | luna | Požuda za aferom | Želja za avanturom | „Abenteuerlust“ znači želja za avanturama, ne požuda za aferom. |
| b2-abgesehen-44 | lv | HIGH | luna | Iako • Pored toga | Osim • Ne računajući | „Abgesehen“ znači osim ili ne računajući, a ne iako ili pored toga. |
| b2-ableiten-50 | lv | HIGH | luna | Dovesti • Preusmeriti • Izvesti | Odvoditi • Preusmjeriti • Izvesti | „Dovesti“ je semantički pogrešno, a „preusmeriti“ je ekavski oblik. |
| b2-Abnutzung-52 | lv | HIGH | luna | Iscrpljenost • Iscrpljenost • Iscrpljenost | Trošenje • Istrošenost • Habanje | „Abnutzung“ označava trošenje ili habanje materijala, ne iscrpljenost. |
| b2-abschlagen-59 | lv | HIGH | luna | Smanjiti • Odbiti • Odbiti • Odbiti | Odsjeći • Odbiti • Odbiti • Odbiti | Prvo značenje je odsjeći ili odrubiti, a ne smanjiti. |
| b2-abschleppen-60 | lv | HIGH | luna | Ukloni auto | Odvući automobil | „Abschleppen“ znači odvući vozilo šlep-službom, ne općenito ukloniti automobil. |
| b2-abtragen-71 | lv | HIGH | luna | Odnijeti • Odnijeti • Rušiti | Odnijeti • Istrošiti • Srušiti | Drugi prijevod je pogrešno dupliciran, a treći treba svršeni glagol. |
| b2-abtreten-72 | lv | HIGH | luna | Povući • Dati • Ostaviti | Povući se • Predati • Otići | Nedostaje povratno se, a dati i ostaviti ne prenose navedena značenja. |
| b2-abweichen-73 | lv | HIGH | luna | Razlikovati • Odstupiti | Razlikovati se • Odstupiti | U značenju biti različit potreban je povratni glagol razlikovati se. |
| b2-Abzweigung-78 | lv | HIGH | luna | Filijala • Filijala | Skretanje • Odvojak | Abzweigung znači skretanje ili odvojak, a ne filijala. |
| b2-affig-80 | lv | HIGH | luna | Upadljiv • Umišljen | Afektiran • Umišljen | Affig znači afektiran ili prenaglašen; upadljiv nije precizan ekvivalent. |
| b2-Andeutung-83 | lv | HIGH | luna | Savjet • Indikacija | Nagovještaj • Indikacija | Savjet ne odgovara značenju Andeutung; odgovaraju nagovještaj ili naznaka. |
| b2-andeuten-84 | lv | HIGH | luna | Naznačiti • Nagoveštaj | Naznačiti • Dati naslutiti | Drugi oblik je imenica i ekavski; ovdje treba glagolski ijekavski izraz. |
| b2-Anwärter-88 | lv | HIGH | luna | Podnosilac • Kandidat | Pretendent • Kandidat | Podnosilac znači applicant/submitter, ne Anwärter odnosno pretendent ili kandidat. |
| b2-Areal-89 | lv | HIGH | luna | Domet | Područje | Areal označava područje ili teritoriju, dok domet znači range ili reach. |
| b2-Ausbeutung-96 | lv | HIGH | luna | Operacija | Eksploatacija | Ausbeutung znači eksploatacija ili iskorištavanje, ne operacija. |
| b2-sich aufdrängen-98 | lv | HIGH | luna | Da maltretiraju | Nametati se | Sich aufdrängen znači nametati se ili navaljivati, a ne da maltretiraju. |
| b2-Aufruf-99 | lv | HIGH | luna | Uzvik • Poziv | Poziv • Apel | Aufruf u ovim značenjima znači poziv ili apel, ne uzvik. |
| b2-Augenmaß-102 | lv | HIGH | luna | Acumeter | Osjećaj za mjeru | Augenmaß je osjećaj za mjeru ili procjena od oka, a ne mjerni instrument. |
| b2-Äußerlichkeit-103 | lv | HIGH | luna | Razmetljivost | Vanjski izgled | Äußerlichkeit označava vanjski izgled ili spoljašnjost, ne razmetljivost. |
| b2-aussetzen-105 | lv | HIGH | luna | Post • Subjekt • Protiv • Stav | Postaviti • Izložiti • Suprotstaviti se • Obustaviti | Trenutni oblici su uglavnom imenice/pridjevi; lema je glagol i značenja su pogrešno obliko |
| b2-ausspannen-107 | lv | HIGH | luna | Odvezati se • Oduzeti partnera • Odmoriti | Raspreći • Preoteti partnera • Odmarati se | Prvi oblik ima pogrešno se, drugi je neprecizan, a treći mora biti povratan. |
| b2-ausstatten-108 | lv | HIGH | luna | Isporučiti • Dizajnirati | Opremiti • Urediti | Ausstatten znači opremiti ili urediti; isporučiti i dizajnirati nisu odgovarajući ekvivale |
| b2-ausstopfen-110 | lv | HIGH | luna | Puniti • Puniti • Puniti | Napuniti • Ispuniti • Preparirati | Ponavljanje puniti ne razlikuje značenja, a treće značenje je preparirati životinju. |
| b2-ausströmen-111 | lv | HIGH | luna | Curiti • Emanirati • Zračiti | Isticati • Izlaziti • Zračiti | Curiti znači kapati, dok ausströmen označava isticanje ili izlaženje. |
| b2-austreten-114 | lv | HIGH | luna | Deložirati • Najam • Dati otkaz | Izgaziti • Izgaziti • Istupiti | Trenutni prijevodi ne prenose glagolska značenja gaziti i istupiti. |
| b2-ausweisen-117 | lv | HIGH | luna | Izbaciti • Poslati • Potvrditi • Dokazati | Izgnati • Deportovati • Potvrditi • Dokazati | Izbaciti i poslati su preopći za značenja izgnati i deportovati. |
| b2-auszeichnen-120 | lv | HIGH | luna | Nagrada • Nagrada • Istaći se | Nagraditi • Dodijeliti • Istaknuti se | Prva dva oblika su imenice, a lema je glagol. |
| b2-Blutbank-125 | lv | HIGH | luna | Rezerve krvi | Banka krvi | Blutbank znači banka krvi, ne rezerve krvi. |
| b2-Barren-136 | lv | HIGH | luna | Pritoke | Razboj | Barren u ovom značenju označava gimnastički razboj, ne pritoke. |
| b2-Barrenturnen-137 | lv | HIGH | luna | Vježba na pritokama | Vježbanje na razboju | Barrenturnen se odnosi na vježbanje na gimnastičkom razboju. |
| b2-Bauwesen-145 | lv | HIGH | luna | Izgradnja • Izgradnja | Građevinarstvo • Graditeljstvo | Bauwesen označava građevinarstvo kao oblast, a ne izgradnju. |
| b2-bebauen-146 | lv | HIGH | luna | Proces • Izgraditi | Obrađivati • Izgraditi | Proces nije prijevod glagola; bebauen znači obrađivati ili izgraditi na zemljištu. |
| b2-befallen-148 | lv | HIGH | luna | Doći do • Napada | Zadesiti • Napasti | Trenutni oblici nisu odgovarajuće glagolske natuknice za befallen. |
| b2-Beförderung-150 | lv | HIGH | luna | Dostava • Transport • Promocija • Promocija | Dostava • Prevoz • Unapređenje • Unapređenje | U službenom kontekstu Beförderung znači unapređenje, ne promocija. |
| b2-Befugnis-151 | lv | HIGH | luna | Prava • Autoritet | Pravo • Ovlaštenje | Befugnis znači pravo ili ovlaštenje, a ne autoritet. |
| b2-begehren-152 | lv | HIGH | luna | Potražnja • Potražnja • Kao • Žudi • Žudi | Zahtijevati • Zahtijevati • Željeti • Čeznuti • Žudjeti | Većina trenutnih oblika su imenice ili neispravni oblici umjesto glagola. |
| b2-begierig-153 | lv | HIGH | luna | Žudnja | Željan | Begierig je pridjev, dok je Žudnja imenica. |
| b2-begnadigen-154 | lv | HIGH | luna | Imati milosti | Pomilovati | Begnadigen je pravni glagol pomilovati, a ne općenito imati milosti. |
| b2-begünstigen-156 | lv | HIGH | luna | Promovirati • Olakšati • Zaštititi • Podršku | Pogodovati • Unapređivati • Protežirati • Podržavati | Treći prijevod je semantički pogrešan, a četvrti je imenica. |
| b2-begutachten-157 | lv | HIGH | luna | Dati povratne informacije • Ocijeniti | Stručno procijeniti • Ocijeniti | Begutachten znači stručno pregledati i procijeniti, ne dati povratne informacije. |
| b2-beharren-158 | lv | HIGH | luna | Postojati • Ostati | Ustrajati • Insistirati | Beharren znači ustrajati ili insistirati, ne postojati ili ostati. |
| b2-beharrlich-159 | lv | HIGH | luna | Uporan • Uporan | Uporan • Postojan | Drugi prevod je duplikat i ne prenosi značenje postojan. |
| b2-Beihilfe-161 | lv | HIGH | luna | Državna naknada • Bonus | Državna pomoć • Dodatak | Bonus nije odgovarajući prevod za pomoć ili dodatak. |
| b2-beiläufig-162 | lv | HIGH | luna | Slučajno • Slučajno • Usput • Prolazeći | Slučajan • Usputan • Uzgred • U prolazu | Postoje duplikat, neujednačen oblik i neprirodni prevodi. |
| b2-beispiellos-163 | lv | HIGH | luna | Nije bilo • Neviđeno • Ono što se ne može porediti ni sa čim | Bez presedana • Neviđen • Neuporediv | Nije bilo je pogrešan oblik i ne prevodi pridjevsko značenje. |
| b2-beistimmen-166 | lv | HIGH | luna | Odobriti • Podržati | Složiti se • Podržati | Odobriti znači formalno odobriti, a ne složiti se. |
| b2-beizen-168 | lv | HIGH | luna | Nagrizati • Mrljati | Nagrizati • Bajcovati | Mrljati ne označava obradu materijala bajcovanjem. |
| b2-bejahrt-170 | lv | HIGH | luna | Za mnogo godina | U poodmaklim godinama | Trenutni prevod govori o trajanju, ne o starijoj osobi. |
| b2-bekräftigen-172 | lv | HIGH | luna | Potvrditi • Ovjeriti | Potvrditi • Potkrijepiti | Ovjeriti označava formalnu verifikaciju, ne potvrđivanje tvrdnje. |
| b2-Straßenbelag-174 | lv | HIGH | luna | Prisustvo na ulici | Kolovozna obloga | Prisustvo na ulici potpuno promašuje značenje površinskog sloja kolovoza. |
| b2-belästigen-177 | lv | HIGH | luna | Smetati • Smetati • Zalijepiti se | Smetati • Uznemiravati • Dosadivati | Drugi prevod je duplikat, a zalijepiti se ima drugo značenje. |
| b2-beleibt-181 | lv | HIGH | luna | Debeli • Dragi • Puni | Punašan • Krupan • Puniji | Dragi je pogrešno značenje, a ostali oblici nisu prirodni za ovu odrednicu. |
| b2-belichten-182 | lv | HIGH | luna | Osvetliti • Izložiti | Osvijetliti • Eksponirati | Izložiti znači prikazati ili izložiti predmet, ne fotografski eksponirati. |
| b2-Belieben-183 | lv | HIGH | luna | Sviđalo se • Sviđalo se • Željelo | Volja • Naklonost • Želja | Trenutni prevodi su glagolske fraze, dok je odrednica imenica. |
| b2-Benennung-186 | lv | HIGH | luna | Imenovanje • Imenovanje • Ime | Imenovanje • Nazivanje • Naziv | Drugi prevod je duplikat, a ime je preopšti i neprecizan prevod. |
| b2-berechtigen-188 | lv | HIGH | luna | Da daju prava | Ovlastiti | Da daju prava nije infinitiv i ne odgovara precizno značenju ovlastiti. |
| b2-beredt-189 | lv | HIGH | luna | Pričljiv | Rječit | Pričljiv označava govorljivost, dok beredt znači elokventan ili rječit. |
| b2-bergen-192 | lv | HIGH | luna | Spasiti • Spasiti • Žetvu | Spasiti • Spasiti • Žeti | Treći prevod je imenica umjesto infinitiva glagola. |
| b2-Bergmann-193 | lv | HIGH | luna | Rudar • Rudar | Rudar • Rudar uglja | Drugi prevod gubi specifično značenje rudara uglja. |
| b2-bersten-195 | lv | HIGH | luna | Puknuti • Puknuti • Puknuti • Puknuti | Puknuti • Napuknuti • Prsuti • Raspuknuti se | Sva značenja su nepotrebno svedena na isti prevod. |
| b2-besänftigen-199 | lv | HIGH | luna | Smiriti se • Smiriti • Smiriti • Tišinu | Smiriti • Ublažiti • Ublažiti • Utišati | Prvi prevod je povratan, četvrti imenica, a oba odstupaju od odrednice. |
| b2-Besatzung-200 | lv | HIGH | luna | Komanda • Posada • Posada • Okupacione vojne jedinice | Posada • Posada • Posada • Okupacione vojne jedinice | Komanda nije odgovarajući prevod za posadu u ovom značenju. |
| b2-beschämen-201 | lv | HIGH | luna | Sramota | Posramiti | Sramota je imenica, dok je odrednica glagol. |
| b2-beschatten-202 | lv | HIGH | luna | Zasjeniti • Trag | Zasjeniti • Pratiti | Drugi prevod je imenica i ne prenosi glagolsko značenje pratiti ili nadzirati. |
| b2-beschimpfen-203 | lv | HIGH | luna | Psovati • Krasti • Uhvatiti | Psovati • Ocrniti • Izvrijeđati | Krasti i uhvatiti su pogrešna značenja za beschimpfen. |
| b2-besessen-207 | lv | HIGH | luna | Opsjednut • Preopterećen • Preopterećen | Opsjednut • Obuzet • Zaokupljen | Preopterećen znači overloaded, a ne opsjednut ili obuzet; uz to se prevod ponavlja. |
| b2-besiedeln-208 | lv | HIGH | luna | Logoruju stanovnike | Naseliti stanovništvo | Logorovati stanovnike znači kampovati, ne naseliti ili populirati područje. |
| b2-bestechlich-215 | lv | HIGH | luna | Kupiv • Podmitljiv | Potkupljiv • Podmitljiv | Kupiv je neprirodan i ne označava jasno osobu podložnu mitu. |
| b2-bestrahlen-216 | lv | HIGH | luna | Zračiti • Sjajiti | Zračiti • Osvijetliti | Sjajiti je uglavnom neprelazan glagol i ne znači osvijetliti nešto. |
| b2-bestreiten-217 | lv | HIGH | luna | Spor • Platiti • Pokriće | Osporiti • Platiti • Pokriti | Spor i pokriće su imenice, dok odrednica traži glagolske prevode. |
| b2-Betäubung-220 | lv | HIGH | luna | Zapanjujuće • Stupor • Narkoza • Anestezija | Ošamućivanje • Ošamućenost • Narkoza • Anestezija | Prvi prevod je pridjev, a ne imenica za ošamućivanje ili zatupljivanje. |
| b2-beteuern-221 | lv | HIGH | luna | Certificirati | Ustrajno tvrditi | Certificirati znači tehnički potvrditi, ne uvjeravati ili naglašeno tvrditi. |
| b2-Betrug-225 | lv | HIGH | luna | Prevara • Prevara • Lažna • Prevara | Prevara • Obmana • Varka • Prevara | Lažna je pridjev ženskog roda i nije prevod imenice Betrug. |
| b2-bewähren-229 | lv | HIGH | luna | Zaštititi • Zaštititi • Zaštititi • Spasiti | Dokazati se • Pokazati se uspješnim • Potvrditi se • Dokazati se | Postojeći prevodi znače zaštititi ili spasiti, što je potpuno drugo značenje. |
| b2-bezähmen-237 | lv | HIGH | luna | Očarati • Očarati | Ukrotiti • Obuzdati | Očarati znači opčiniti, a bezähmen znači ukrotiti ili obuzdati. |
| b2-bezeugen-238 | lv | HIGH | luna | Certificirati | Posvjedočiti | Certificirati je tehnički termin i ne odgovara značenju posvjedočiti ili potvrditi. |
| b2-bezwingen-241 | lv | HIGH | luna | Savladati • Poraz • Obuzdati | Savladati • Pobijediti • Obuzdati | Poraz je imenica, dok odrednica bezwingen traži glagolski prevod. |
| b2-Bildnis-247 | lv | HIGH | luna | Prezime • Portret • Slika | Portret • Portret • Slika | 'Prezime' znači surname, dok Bildnis znači portret ili sliku. |
| b2-bildend-257 | lv | HIGH | luna | Maštoviti • Edukativni | Obrazovni • Edukativni | 'Maštoviti' znači imaginative, a bildend znači obrazovni ili formativni. |
| b2-blähen-258 | lv | HIGH | luna | Duvati • Naduvati • Naduvati | Nadimati • Napuhati • Naduvati | 'Duvati' znači blow, dok blähen označava nadimanje ili napuhavanje. |
| b2-sich blähen-259 | lv | HIGH | luna | Naduvati • Naduvati | Nadimati se • Napuhati se | Povratni glagol zahtijeva povratni oblik u bosanskom. |
| b2-bleichen-263 | lv | HIGH | luna | Balat • Balot • Izbjeljivač | Blijediti • Izblijediti • Izbjeljivati | Trenutni oblici nisu odgovarajući bosanski glagoli, a posljednji je imenica. |
| b2-Bodensatz-280 | lv | HIGH | luna | Talog • Šljam • Kvasac | Talog • Šljam • Vinski talog | 'Kvasac' nije značenje riječi Bodensatz u ovom kontekstu. |
| b2-Bodenschätze-281 | lv | HIGH | luna | Minerali | Rudna bogatstva | Bodenschätze označava rudna ili prirodna bogatstva, ne samo minerale. |
| b2-Bootsmann-283 | lv | HIGH | luna | Čamac | Bocman | Bootsmann je pomorsko zvanje, a ne riječ za čamac. |
| b2-Bord-285 | lv | HIGH | luna | Board | Bok broda | Bord u nautičkom značenju označava bok broda; 'Board' nije bosanski prevod. |
| b2-Borte-288 | lv | HIGH | luna | Granica | Ukrasna traka | Borte je ukrasna tekstilna traka ili obrub, ne opća granica. |
| b2-brach-291 | lv | HIGH | luna | Sirovo • Ostavite sa strane | Neobrađeno • Ostavljeno na ugaru | 'Sirovo' nije odgovarajuće značenje, a 'ostavite' je pogrešan glagolski oblik. |
| b2-Brandstätte-293 | lv | HIGH | luna | Kamin | Mjesto požara | Brandstätte označava mjesto požara, ne kamin. |
| b2-Brandanschlag-294 | lv | HIGH | luna | Paljevina | Podmetanje požara | 'Paljevina' ne prenosi jasno značenje napada i podmetanja požara. |
| b2-Brandstifter-296 | lv | HIGH | luna | Podmetati požare | Podmetač požara | Brandstifter je imenica za osobu, dok je trenutni izraz glagolski infinitiv. |
| b2-brauen-298 | lv | HIGH | luna | Praviti pivo • Variti | Praviti pivo • Kuhati pivo | 'Variti' u bosanskom ne znači kuhati ili praviti pivo. |
| b2-brüten-304 | lv | HIGH | luna | Razmišljati • Stalno razmišljati o nečemu | Leći na jaja • Stalno razmišljati o nečemu | Prvo značenje brüten je ležanje na jajima, a ne općenito razmišljanje. |
| b2-Buche-305 | lv | HIGH | luna | Bukva • Grab | Bukva • Bukva | Buche znači bukva; 'grab' potiče iz pogrešnog izvornog LV smisla. |
| b2-Bügel-311 | lv | HIGH | luna | Ručka • Obruč • Vješalica za odjeću • Stepenica | Ručka • Obruč • Vješalica za odjeću • Uzengija | Kāpslis je uzengija, ne stepenica. |
| b2-Bühnenbildner-313 | lv | HIGH | luna | Dekorater | Scenograf | Bühnenbildner označava scenografa, ne općeg dekoratera. |
| b2-Bundesland-314 | lv | HIGH | luna | Savezno zemljište | Savezna pokrajina | Bundesland znači saveznu pokrajinu, ne zemljište. |
| b2-Bündnis-317 | lv | HIGH | luna | Sindikat | Savez | Bündnis znači savez ili alijansa; sindikat je drugo značenje. |
| b2-Bürge-319 | lv | HIGH | luna | Garant • Kolovođa | Garant • Jamac | Bürge znači garant ili jamac; kolovođa nema to značenje. |
| b2-Chaot-322 | lv | HIGH | luna | Neuredna osoba | Haotična osoba | Chaot označava haotičnu osobu, ne samo neurednu osobu. |
| b2-chartern-323 | lv | HIGH | luna | Unajmite avion ili brod za određeno putovanje | Unajmiti avion ili brod za određeno putovanje | Njemački glagol je u infinitivu, a trenutni prevod u imperativu. |
| b2-Chemotherapie-327 | lv | HIGH | luna | Hemoterapije | Kemoterapija | Chemotherapie je kemoterapija, ne hemoterapija. |
| b2-Chirurgie-328 | lv | HIGH | luna | Operacija | Hirurgija | Chirurgie označava hirurgiju kao oblast ili postupak, ne samo operaciju. |
| b2-Dachziegel-337 | lv | HIGH | luna | Pločica | Crijep | Dachziegel je crijep; pločica je širi i ovdje neprecizan izraz. |
| b2-dämmern-341 | lv | HIGH | luna | U sumrak • Pada mrak • Svane • Svjetlo se znoji | Smrkavati se • Smračivati se • Svanjivati • Svjetlucati | Trenutni prvi oblik nije glagol, a posljednji prevod je besmislen. |
| b2-dampfen-343 | lv | HIGH | luna | Dim • Ispari | Pariti se • Isparavati | Oba trenutna oblika odstupaju od infinitivnih glagolskih značenja izvornika. |
| b2-dämpfen-344 | lv | HIGH | luna | Ušutkati • Zagušiti • Popariti • Dinstati • Promiješati | Prigušiti • Utišati • Pariti • Dinstati • Pirjati | Popariti i promiješati nisu odgovarajuća značenja glagola dämpfen. |
| b2-darbieten-347 | lv | HIGH | luna | Obezbediti • Prisutan | Pružiti • Izvesti | Prisutan je pridjev, a darbieten je glagol koji znači pružiti ili izvesti. |
| b2-darlegen-349 | lv | HIGH | luna | Nacrt • Objasniti | Izložiti • Objasniti | Nacrt je imenica, dok darlegen znači izložiti ili objasniti. |
| b2-Darstellung-353 | lv | HIGH | luna | Prikaz • Prikaz • Obris | Prikaz • Prikaz • Izlaganje | Obris znači kontura, ne treće značenje Darstellung: izlaganje. |
| b2-Datei-356 | lv | HIGH | luna | Ormar za arhiviranje | Datoteka | Datei u računarskom značenju znači datoteka, a ne ormar za arhiviranje. |
| b2-Datenträger-358 | lv | HIGH | luna | Disketa | Nosač podataka | Disketa je samo jedna vrsta nosača podataka, ne opće značenje riječi Datenträger. |
| b2-Dattel-359 | lv | HIGH | luna | Datum | Datula | Dattel je plod datule; datum je kalendarska oznaka. |
| b2-Daune-360 | lv | HIGH | luna | Dolje | Paperje | Daune znači paperje ili perje, dok dolje označava smjer. |
| b2-dehnen-367 | lv | HIGH | luna | Rastegnuti • Rastegnuti • Rastegnuti • Rastegnuti • Prevući | Rastezati • Razvlačiti • Istezati se • Razvlačiti se • Odužiti se | Sadašnji oblici su pretežno perfektivni ili pogrešnog značenja za dehnen. |
| b2-Delikt-373 | lv | HIGH | luna | Kriminal • Kršenje zakona | Krivično djelo • Prekršaj | Kriminal je preširoko; Delikt označava krivično djelo ili prekršaj. |
| b2-dementieren-374 | lv | HIGH | luna | Povući informacije | Demantovati | Dementieren znači javno negirati ili opovrgnuti informaciju, ne povući je. |
| b2-deponieren-379 | lv | HIGH | luna | Depozit • Depozit | Deponovati • Uložiti | Deponieren je glagol; depozit je imenica i ne odgovara izvornim oblicima. |
| b2-derjenige-381 | lv | HIGH | luna | To | Onaj | Derjenige je pokazna zamjenica muškog roda, odnosno onaj. |
| b2-Deutung-383 | lv | HIGH | luna | Objašnjenje • Prijevod • Objašnjenje • Prijevod | Tumačenje • Interpretacija • Objašnjenje • Tumačenje | Deutung znači tumačenje ili interpretacija; prijevod je drugo značenje. |
| b2-Devisenbörse-385 | lv | HIGH | luna | Mjenjačnica | Devizna berza | Devisenbörse je berza deviza, a ne mjenjačnica. |
| b2-Morddezernat-388 | lv | HIGH | luna | Krivično odjeljenje | Odjel za ubistva | Morddezernat označava specijalizovani odjel za ubistva, ne opće krivično odjeljenje. |
| b2-dichten-393 | lv | HIGH | luna | Pjevati • Pjevati | Pisati poeziju • Sastavljati stihove | Dichten znači pisati poeziju ili stihove, a ne pjevati. |
| b2-diejenige-397 | lv | HIGH | luna | Tako | Ona | Diejenige je pokazna zamjenica ženskog roda, odnosno ona. |
| b2-dienstlich-400 | lv | HIGH | luna | Servisna pozicija | Službeni • Službeni | Dienstlich znači službeni ili vezan za službu; servisna pozicija je pogrešno značenje. |
| b2-dingen-402 | lv | HIGH | luna | Složiti se • Složiti se | Unajmiti • Angažovati | Dingen znači unajmiti ili angažovati, a ne složiti se. |
| b2-Direktion-403 | lv | HIGH | luna | Kontrola prijedloga | Direkcija • Uprava | Direktion znači direkcija ili uprava; kontrola prijedloga nije povezano značenje. |
| b2-Dohle-411 | lv | HIGH | luna | Covarner | Čavka | Dohle je čavka; Covarner je pogrešno napisana i semantički netačna riječ. |
| b2-Dom-412 | lv | HIGH | luna | Katedrala • Vijeće | Katedrala • Katedralna crkva | Dom u ovom značenju označava katedralu, a vijeće je drugo značenje. |
| b2-donnern-413 | lv | HIGH | luna | Tutnjava • Tutnjava • Tutnjava | Grmjeti • Tutnjati • Odjekivati | Donnern je glagol; sadašnji prevodi su imenice. |
| b2-Doppelzentner-417 | lv | HIGH | luna | Centner | Kvintal (100 kg) | Doppelzentner označava 100 kg; „centner“ nije odgovarajuća mjerna jedinica. |
| b2-Dorn-418 | lv | HIGH | luna | Trn • Ubod | Trn • Žalac | „Ubod“ označava radnju, dok je odgovarajući naziv za dželon/žalac „žalac“. |
| b2-Dotterblume-428 | lv | HIGH | luna | Punoglavac | Kalužnica | „Punoglavac“ znači tadpol, a Dotterblume je biljka kalužnica. |
| b2-Drang-433 | lv | HIGH | luna | Pogon • Nagib | Nagon • Težnja | „Pogon“ i „nagib“ ne označavaju unutrašnji poriv ili težnju. |
| b2-drängen-434 | lv | HIGH | luna | Gurati • Gurati • Požuriti • Požuriti • Ohrabriti | Gurati • Pritiskati • Požurivati • Podsticati • Nagovarati | Lista ima duplikate, a „požuriti“ nije odgovarajući uzročni glagol. |
| b2-Drehung-439 | lv | HIGH | luna | Spin • Revolucija | Okretanje • Obrt | „Revolucija“ ne označava fizičko okretanje u ovom značenju. |
| b2-dreschen-441 | lv | HIGH | luna | Umutite zrno • Umutite bjelanjak | Ovršiti žito • Umutiti bjelanjak | „Umutite zrno“ pogrešno prevodi prvo značenje i koristi drugo lice. |
| b2-dringen-443 | lv | HIGH | luna | Pritisnuti • Prekinuti • Pritisnuti • Provaliti • Zahtijevati • Zahtijevati | Probijati se • Probijati se • Prodrijeti • Provaliti • Zahtijevati • Tražiti | Više prevoda je pogrešno ili duplirano, posebno „pritisnuti“ i „prekinuti“. |
| b2-Drossel-447 | lv | HIGH | luna | Čvorak | Drozd | Drossel je drozd, a ne čvorak. |
| b2-drosseln-448 | lv | HIGH | luna | Zadaviti • Ugušiti | Zadaviti • Prigušiti | Drugo značenje drosseln je prigušiti ili smanjiti, ne ugušiti. |
| b2-Nadeldrucker-449 | lv | HIGH | luna | Digitalni štampač | Iglični štampač | Nadeldrucker je iglični matrični štampač, ne opšti digitalni štampač. |
| b2-dulden-456 | lv | HIGH | luna | Patiti • Izdržati | Trpjeti • Podnositi | „Patiti“ znači suffer, dok dulden znači trpjeti ili podnositi. |
| b2-dumpf-457 | lv | HIGH | luna | Šuplje • Prigušeno • Zagušljivo • Zagušljivo • Teško • Potlačeno • Opresivno | Šuplje • Prigušeno • Ustajalo • Zagušljivo • Teško • Potišteno • Ugnjetavajuće | Treći i četvrti smisao su duplirani; „ustajalo“ i prirodniji završni prevod ispravljaju li |
| b2-düngen-462 | lv | HIGH | luna | Oploditi | Đubriti | „Oploditi“ znači fertilizirati; njemačko „düngen“ znači đubriti ili gnojiti zemlju. |
| b2-dünken-465 | lv | HIGH | luna | Činiti • Izgledati | Činiti se • Izgledati | U ovom značenju bosanski glagol zahtijeva povratnu česticu „se“. |
| b2-Dunst-466 | lv | HIGH | luna | Para • Dim • Dim • Para • Magla • Izmaglica | Para • Isparenja • Isparenja • Zagušljiv zrak • Magla • Izmaglica | Više prevoda ne razlikuje paru, isparenja i zagušljiv zrak. |
| b2-durchbrennen-470 | lv | HIGH | luna | Izgorjeti • Izgorjeti • Izgorjeti • Izgorjeti | Izgorjeti kroz • Pregorjeti • Izgorjeti • Pregorjeti | Identični prevodi gube razliku između progaranja, pregorijevanja i izgaranja. |
| b2-durchbringen-471 | lv | HIGH | luna | Proći • Donijeti • Postići • Izliječiti • Otpad | Provući • Prenijeti • Postići • Izliječiti • Protraćiti | „Otpad“ je imenica i pogrešan je prevod glagola „izšķērdēt“; ostali prevodi su neprecizni. |
| b2-durchdringen-473 | lv | HIGH | luna | Probiti se • Probiti se • Biti preplavljen | Probijati se • Prodrijeti • Biti prožet | „Biti preplavljen“ ne odgovara značenju prožetosti, a prva dva prevoda se ponavljaju. |
| b2-Durchführung-476 | lv | HIGH | luna | Provesti nešto kroz • Raditi • Raditi • Provoditi • Realizirati | Provođenje kroz nešto • Izvršenje • Obavljanje • Sprovođenje • Realizacija | Njemačka riječ je imenica, dok su trenutni prvi prevodi uglavnom glagoli i jedan se ponavl |
| b2-durchlaufen-478 | lv | HIGH | luna | Proći kroz • Proći kroz | Protrčati kroz • Proticati kroz | Drugi smisao označava proticanje tečnosti, a ne opšti prolazak. |
| b2-durchschlagen-483 | lv | HIGH | luna | Procijediti • Proći kroz sito • Probušiti • Probušiti rupu | Procijediti • Proći kroz sito • Probijati se kroz • Probušiti rupu | „Probušiti“ pogrešno prenosi treći smisao, koji znači probiti se kroz prepreku. |
| b2-durchsetzen-485 | lv | HIGH | luna | Proći • Postići | Izgurati • Postići | „Proći“ je preopšte i ne prenosi značenje proguravanja ili ostvarivanja nečega. |
| b2-Dürre-489 | lv | HIGH | luna | Suvoće | Suša | „Dürre“ označava sušu, dok „suvoća“ označava svojstvo suhog. |
| b2-ebenbürtig-493 | lv | HIGH | luna | Ekvivalentno | Ravnopravan • jednakovrijedan | „Ebenbürtig“ označava jednakost po rangu ili vrijednosti, ne prilog „ekvivalentno“. |
| b2-ebnen-495 | lv | HIGH | luna | Nivo • Glatka | Izravnati • zagladiti | Trenutni prevodi su imenica i pridjev, a potrebni su glagolski oblici. |
| b2-edel-497 | lv | HIGH | luna | Plemenit • Uzvišen • Plemenit | Plemenit • Uzvišen • plemićki | Treći prevod duplira „plemenit“ i izostavlja značenje aristokratski ili plemićki. |
| b2-effektvoll-499 | lv | HIGH | luna | Efikasan | Efektan • upečatljiv | „Effektvoll“ znači efektan ili upečatljiv, a ne nužno efikasan. |
| b2-Eheberatung-501 | lv | HIGH | luna | Porodično savjetovanje | Bračno savjetovanje | „Eheberatung“ se odnosi na savjetovanje bračnih partnera, ne općenito porodice. |
| b2-ehelich-502 | lv | HIGH | luna | Brak- | Bračni | „Ehelich“ je pridjev „bračni“, a ne imenica „brak“ s crticom. |
| b2-Eheschließung-504 | lv | HIGH | luna | Brak • Brak | Sklapanje braka • vjenčanje | Duplikat „brak“ ne prenosi značenje sklapanja ili zaključenja braka. |
| b2-ehren-505 | lv | HIGH | luna | Čast • Poštovanje • Čast | Častiti • poštovati • odati počast | „Ehren“ je glagol, dok su trenutni prevodi imenice. |
| b2-Ehrenamt-506 | lv | HIGH | luna | Počasni položaj | Volonterska dužnost | „Ehrenamt“ najčešće označava dobrovoljnu ili neplaćenu funkciju, ne počasni položaj. |
| b2-ehrenamtlich-507 | lv | HIGH | luna | Besplatno • U vršenju počasne dužnosti | Volonterski • obavljajući počasnu dužnost | „Besplatno“ znači bez naknade, a ne dobrovoljno obavljanje dužnosti. |
| b2-Ehrenwort-514 | lv | HIGH | luna | Počasni | Časna riječ | „Ehrenwort“ je imenica „časna riječ“, a „počasni“ je nedovršen pridjev. |
| b2-ehrgeizig-515 | lv | HIGH | luna | Pohlepan | Ambiciozan | „Ehrgeizig“ znači ambiciozan ili željan uspjeha, ne pohlepan. |
| b2-Eidotter-520 | lv | HIGH | luna | Žumanca | Žumanjak | „Žumanca“ je množina, a njemačka natuknica označava jedninu; „žumanjak“ je ispravan bosans |
| b2-eifrig-522 | lv | HIGH | luna | Marljiv • Marljiv • Marljiv • Željan | Marljiv • vrijedan • revan • gorljiv | „Željan“ je semantički pogrešan, a postoje i nepotrebna ponavljanja. |
| b2-eigentümlich-527 | lv | HIGH | luna | Svojstvena • Karakteristika | Svojstven • karakterističan | Trenutni oblici nisu odgovarajuće pridjevske natuknice. |
| b2-eigenwillig-528 | lv | HIGH | luna | Proizvoljan • Tvrdoglav • Tvrdoglav • Nadmoćan | Samovoljan • tvrdoglav • svojeglav • samovoljan | „Nadmoćan“ je pogrešno značenje, a jedan prijevod je nepotrebno ponovljen. |
| b2-Einband-532 | lv | HIGH | luna | Vezivanje | Povez knjige | „Vezivanje“ označava radnju, dok Einband znači knjižni povez ili korice. |
| b2-einberufen-533 | lv | HIGH | luna | Pozivati ​​ • Regrutovati u vojnu službu | Sazvati • pozvati u vojnu službu | Za sastanak ili tijelo treba „sazvati“, a ne opće „pozivati“. |
| b2-Einbildung-534 | lv | HIGH | luna | Maštovitost • Mašta • Fantazija • Uobraženost • Uobraženost | Uobrazilja • mašta • fantazija • umišljenost • uobraženost | „Maštovitost“ nije uobrazilja, a završna dva oblika su duplikat. |
| b2-einbürgern-535 | lv | HIGH | luna | Dati pravo građaninu • Da uvede • Da se ukorijeni | Dati državljanstvo • udomaćiti se • ukorijeniti se | Prvi izraz je neprirodan, a drugi oblik i značenje nisu odgovarajući. |
| b2-eindringen-537 | lv | HIGH | luna | Ugurati • Provaliti • Umočiti • Uroniti | Prodrijeti • provaliti • upiti se • zadubiti se | Više trenutnih prijevoda označava guranje, umakanje ili uranjanje, ne prodiranje. |
| b2-einfältig-539 | lv | HIGH | luna | Samopravedan • Naivan | Priprostan • naivan | „Samopravedan“ znači self-righteous i nije značenje riječi „einfältig“. |
| b2-einfassen-540 | lv | HIGH | luna | Uključuju • Okvir • Okvir | Obuhvatiti • uokviriti • optočiti | Trenutni oblici su konjugirani ili imenice i ne prenose glagolska značenja natuknice. |
| b2-einflussreich-541 | lv | HIGH | luna | Uticajan • Impresivan | Utjecajan • utjecajan | „Impresivan“ znači dojmljiv, a ne onaj koji ima velik utjecaj. |
| b2-Einfuhr-544 | lv | HIGH | luna | Uvod • Uvoz • Unošenje • Uvoz | Uvoz • uvoz • uvoženje • importovanje | „Uvod“ je pogrešno značenje; natuknica označava uvoz i njegove varijante. |
| b2-eingehen-549 | lv | HIGH | luna | Unesite • Stići • Unesite • Uđite • Smanjite • Se slažete • Kladite se | Ući • Stići • Ući • Skupiti se • Smanjiti se • Pristati • Kladiti se | Više prijevoda je u imperativu ili semantički ne odgovara značenjima glagola. |
| b2-eingehend-550 | lv | HIGH | luna | Temeljni • Sitni • Dolazni | Temeljit • Detaljan • Dolazni | „Sitni“ znači mali, a „temeljni“ nije odgovarajući prijevod za detaljan ili temeljit. |
| b2-eingleisig-557 | lv | HIGH | luna | Monorail | Jednokolosiječan | „Monorail“ je jednokolosiječna željeznica, ali nije isto što i opći pridjev „eingleisig“. |
| b2-eingrenzen-558 | lv | HIGH | luna | Granica • Razgraničiti | Ograničiti • Razgraničiti | „Granica“ je imenica, dok njemačka natuknica zahtijeva glagolski prijevod. |
| b2-einhüllen-560 | lv | HIGH | luna | Omot • Namotaj • Omot | Umotati • Zamotati • Uviti | Trenutni prijevodi su imenice, a njemačka natuknica je glagol. |
| b2-Einigkeit-561 | lv | HIGH | luna | Jedinica • Jedinstvo • Konsenzus | Jedinstvo • Jedinstvo • Jednoglasnost | „Jedinica“ znači unit, a ne jedinstvo; ostali oblici trebaju dosljednije značenje. |
| b2-Einklang-563 | lv | HIGH | luna | Sporazum | Sklad | „Sporazum“ označava dogovor, dok Einklang znači sklad ili saglasje. |
| b2-einleuchten-567 | lv | HIGH | luna | Biti shvaćen • Biti jasan | Imati smisla • Biti jasan | „Biti shvaćen“ ne prenosi značenje „imati smisla“; drugi ekvivalent je odgovarajući. |
| b2-einliefern-568 | lv | HIGH | luna | Unijeti • Donijeti | Predati • Smjestiti | „Einliefern“ znači predati ili smjestiti, naročito u ustanovu; „unijeti“ i „donijeti“ su p |
| b2-einrechnen-572 | lv | HIGH | luna | Brojati • Brojati | Uračunati • Uvrstiti | „Brojati“ znači računati broj, ne uračunati ili uključiti u računicu. |
| b2-einströmen-584 | lv | HIGH | luna | Uliti | Ulijevati se | „Einströmen“ je neprelazno strujanje prema unutra; „uliti“ je svršeni prijelazni glagol. |
| b2-einüben-589 | lv | HIGH | luna | Naučiti da • Scenski | Uvježbati • Uvježbati | Oba sadašnja prijevoda imaju pogrešno značenje i vrstu riječi; „einüben“ znači uvježbati. |
| b2-einwilligen-595 | lv | HIGH | luna | Pristati • Biti opušten | Pristati • Biti voljan | „Biti opušten“ znači biti relaksiran, a ne pristati ili biti voljan. |
| b2-Eisgang-602 | lv | HIGH | luna | Hodanje po ledu | Kretanje leda | „Eisgang“ označava kretanje ili prolazak leda, a ne hodanje po ledu. |
| b2-Elster-608 | lv | HIGH | luna | Štucanje | Svraka | „Elster“ znači svraka; „štucanje“ je potpuno drugo značenje. |
| b2-Empfangschef-609 | lv | HIGH | luna | Administrator hotela | Šef recepcije | „Empfangschef“ je rukovodilac recepcije, a ne opći administrator hotela. |
| b2-entbehren-616 | lv | HIGH | luna | Učiniti bez • Izdržati • Nedostatak | Biti bez • Podnositi • Nedostajati | „Učiniti bez“ je neprirodno, a „nedostatak“ je imenica umjesto glagola. |
| b2-entehren-619 | lv | HIGH | luna | Opljačkati čast • Sramota | Obeščastiti • Obeščastiti | Trenutni prevod koristi imenicu i neprirodan kalk umjesto glagolskog ekvivalenta. |
| b2-enteignen-620 | lv | HIGH | luna | Eksproprijacija • Eksproprijacija | Eksproprisati • Eksproprisati | Trenutni oblici su imenice, a njemački infinitiv traži glagolske ekvivalente. |
| b2-entfalten-623 | lv | HIGH | luna | Odmotati • Razviti • Razviti • Razviti | Odmotati • Rasklopiti • Razviti • Raširiti | Tri prevoda su duplicirana i ne razlikuju značenja latvijskih glagola. |
| b2-sich entfalten-624 | lv | HIGH | luna | Otvoriti • Olabaviti • Razviti • Otvoriti | Otvoriti se • Osloboditi se • Razviti se • Raširiti se | Nedostaje povratnost, a „olabaviti“ ne prenosi značenje „atraisīties“. |
| b2-entflammen-625 | lv | HIGH | luna | Zapaliti • Zapaliti • Uzbuditi • Zapaliti se | Zapaliti • Potpaliti • Oduševiti • Planuti | „Uzbuditi“ ne odgovara značenju „sajūsmināt“, a prevodi se nepotrebno ponavljaju. |
| b2-entführen-626 | lv | HIGH | luna | Odvesti • Kidnapovati | Otmicom odvesti • Kidnapovati | „Odvesti“ je preširoko i ne prenosi specifično značenje otmice. |
| b2-entladen-633 | lv | HIGH | luna | Istovar • Istovar | Istovariti • Isprazniti | Trenutni oblici su imenice i dupliciraju dva različita glagolska značenja. |
| b2-entlarven-634 | lv | HIGH | luna | Izložiti | Razotkriti | „Izložiti“ je preširoko; „entlarven“ znači razotkriti ili raskrinkati. |
| b2-entlegen-636 | lv | HIGH | luna | Daljinski • Daljinski • Udaljen | Zabačen • Izolovan • Udaljen | „Daljinski“ ne odgovara prirodno značenju udaljenog ili zabačenog mjesta. |
| b2-entmutigen-637 | lv | HIGH | luna | Oduzimaju hrabrost | Obeshrabriti | Trenutni prevod je oblik trećeg lica množine, ne infinitiv. |
| b2-entstellen-644 | lv | HIGH | luna | Iskriviti • Izbezumiti • Izobličiti | Iskriviti • Unakaziti • Izobličiti | „Izbezumiti“ znači prestrašiti ili izludjeti, ne iznakaziti. |
| b2-entweichen-645 | lv | HIGH | luna | Udaljiti se • Pobjeći • Povući se • Emanirati | Udaljiti se • Pobjeći • Povući se • Ispariti | „Emanirati“ znači širiti ili zračiti, a ne napustiti izvor isparavanjem. |
| b2-Entwerter-647 | lv | HIGH | luna | Komposter | Poništavač karata | „Komposter“ označava uređaj za kompostiranje, ne uređaj za poništavanje karata. |
| b2-entzückt-654 | lv | HIGH | luna | Uzbuđen | Oduševljen | „Uzbuđen“ odgovara značenju excited, dok „entzückt“ znači oduševljen ili ushićen. |
| b2-sich entzünden-656 | lv | HIGH | luna | Zapaliti se • Zapaliti • Zapaliti | Zapaliti se • Planuti • Upaliti se | Druga i treća jedinica nisu povratne i ne odgovaraju značenju „sich entzünden“. |
| b2-Erbauer-662 | lv | HIGH | luna | Lifter | Graditelj | „Lifter“ nije prevod za „Erbauer“, koji označava graditelja ili tvorca. |
| b2-erdrücken-666 | lv | HIGH | luna | Potisnuti • Potisnuti | Zgnječiti • Ugnjetavati | „Potisnuti“ ne prenosi značenja fizičkog gnječenja i psihičkog ugnjetavanja. |
| b2-Erdtrabant-669 | lv | HIGH | luna | Zemljani saputnik | Zemljin satelit | „Zemljani saputnik“ je neprirodan kalk i ne označava Zemljin satelit. |
| b2-erforschen-671 | lv | HIGH | luna | Istražiti • Saznati | Istražiti • Ispitati | „Saznati“ znači doznati, dok „erforschen“ znači istražiti ili ispitati. |
| b2-ergrauen-675 | lv | HIGH | luna | Posijedi | Posijediti | „Posijedi“ je glagolski oblik, dok kartica zahtijeva infinitiv „posijediti“. |
| b2-erhaben-676 | lv | HIGH | luna | Reljef • Konveksan • Odličan • Veliki • Uzvišen • Uzvišen • Odličan | Reljefan • Konveksan • Veličanstven • Velik • Uzvišen • Plemenit • Izvanredan | Prvi oblik je imenica, a postoje i duplicirani ili semantički neprecizni prevodi. |
| b2-sich erheben-678 | lv | HIGH | luna | Diži se • Diži se • Diži se | Ustati • Podići se • Pobuniti se | Trenutni oblici su imperativi i gube tri različita značenja povratnog glagola. |
| b2-erkämpfen-680 | lv | HIGH | luna | Pobijediti | Izboriti se • Izvojevati | Pobijediti znači poraziti, a erkämpfen znači postići ili izboriti nešto naporom. |
| b2-erlassen-684 | lv | HIGH | luna | Izdanje • Izdanje • Izdanje | Izdati • Oprostiti • Osloboditi | Imenički oblici i ponavljanje ne odgovaraju glagolu ni njegovim različitim značenjima. |
| b2-ermitteln-691 | lv | HIGH | luna | Saznati • Saznati | Istražiti • Utvrditi | Saznati ne prenosi sistematsko istraživanje ili utvrđivanje svojstveno glagolu ermitteln. |
| b2-erniedrigen-692 | lv | HIGH | luna | Niži • Poniziti | Sniziti • Poniziti | Niži je pridjev, dok prvi latvijski prevod znači sniziti; drugi prevod je već odgovarajući |
| b2-Ernteertrag-694 | lv | HIGH | luna | Usev | Prinos žetve | Ernteertrag označava prinos ostvaren žetvom, a ne sam usjev. |
| b2-Eröffnung-695 | lv | HIGH | luna | Otvaranje • Otkriće • Razglednica • Najava • Otkriće | Otvaranje • Otvaranje • Razglednica • Najava • Otkriće | Druga jedinica pogrešno je prevedena kao otkriće; razglednica i ostale jedinice odgovaraju |
| b2-erpressen-697 | lv | HIGH | luna | Ucjena | Iznuditi • Ucijeniti | Ucjena je imenica, dok erpressen označava radnju iznuđivanja ili ucjenjivanja. |
| b2-erringen-701 | lv | HIGH | luna | Pobijediti | Izboriti se • Izvojevati | Pobijediti je preusko; erringen znači postići ili izboriti nešto naporom. |
| b2-Erscheinung-703 | lv | HIGH | luna | Pojava • Izgled • Izgled • Izgled | Pojava • Pojavljivanje • Vanjština • Izgled | Ponavljanje izgleda ne prenosi različita značenja pojave, pojavljivanja i vanjštine. |
| b2-erschießen-704 | lv | HIGH | luna | Pucati | Ustrijeliti | Erschießen znači ubiti pucanjem, dok pucati ne podrazumijeva pogođenu ili ubijenu osobu. |
| b2-ersparen-710 | lv | HIGH | luna | Da sačuvate • Da sačuvate • Da rezervišete • Da sačuvate | Uštedjeti • Uštedjeti • Odvojiti • Poštedjeti | Konstrukcije sa da i sačuvati ne odgovaraju infinitivu ni značenjima štednje, odvajanja i  |
| b2-sich erstrecken-714 | lv | HIGH | luna | Raširiti • Proširiti • Ispružiti se | Prostirati se • Pružati se • Protezati se | Prva dva oblika su prijelazna; sich erstrecken zahtijeva povratne glagole. |
| b2-erzürnen-727 | lv | HIGH | luna | Naljutiti se | Naljutiti • Razljutiti | Erzürnen je prijelazan glagol; naljutiti se ima drugo, povratno značenje. |
| b2-Esche-728 | lv | HIGH | luna | Pepeo | Jasen | Esche označava drvo jasen, a pepeo je ostatak sagorijevanja. |
| b2-exklusiv-737 | lv | HIGH | luna | Istražen • Fin • Aristokratski | Ekskluzivan • Profinjen • Aristokratski | Istražen ne znači ekskluzivan, a fin je preširok za značenje profinjenosti. |
| b2-exquisit-742 | lv | HIGH | luna | Istražen • Suptilan | Izvanredan • Profinjen | Istražen i suptilan ne prenose značenja izvanredan i profinjen. |
| b2-Fabrikat-745 | lv | HIGH | luna | Industrijska proizvodnja • Proizvod | Industrijski proizvod • Proizvod | Prvo značenje treba označavati proizvedeni artikl, ne proizvodnju. |
| b2-Fachabitur-746 | lv | HIGH | luna | Završila stručnu školu | Stručna matura | Fachabitur je kvalifikacija, a ne glagolski opis završene škole. |
| b2-fahl-749 | lv | HIGH | luna | Tupo • Blijedo | Blijed • Bez sjaja | Tupo ne odgovara značenju blijedog ili bezsjajnog izgleda. |
| b2-Fahndungsliste-751 | lv | HIGH | luna | Poternica | Lista traženih osoba | Fahndungsliste je lista traženih osoba, ne potjernica. |
| b2-Fahrdamm-752 | lv | HIGH | luna | Provozni dio ulice • Trotoar | Provozni dio ulice • Kolovoz | Drugi prevod pogrešno označava trotoar umjesto kolovoza. |
| b2-Fahrerflucht-753 | lv | HIGH | luna | Napuštajući mjesto nesreće | Bjekstvo s mjesta nesreće | Izvor je imenica; trenutni prevod je glagolski oblik. |
| b2-fahrlässig-754 | lv | HIGH | luna | Nemaran • Neuredan | Nemaran • Nepažljiv | Neuredan opisuje neurednost, a ne nepažljivo ili nemarno ponašanje. |
| b2-Falke-755 | lv | HIGH | luna | A jastreb | Sokol | Falke znači sokol; jastreb je druga ptica, a početno „A“ je suvišno. |
| b2-fälschlich-759 | lv | HIGH | luna | Pogrešio • Pogrešio | Pogrešno • Lažno | Fälschlich je prilog, dok su trenutni oblici glagol u muškom rodu. |
| b2-Faser-767 | lv | HIGH | luna | Vlakna | Vlakno | Faser je imenica u jednini, pa množinski prevod nije odgovarajući. |
| b2-Fassung-769 | lv | HIGH | luna | Okvir • Omotnica • Tekst | Okvir • Omotač • Formulacija | Treće značenje treba označavati formulaciju, a ne opšti tekst. |
| b2-fassungslos-770 | lv | HIGH | luna | Iznenađeni • Šokirani | Zapanjen • Šokiran | Iznenađen je preslab prevod za značenje fassungslos. |
| b2-Faulbaum-771 | lv | HIGH | luna | Eve | Krkavina | Faulbaum je krkavina, dok trenutni prevod označava drugu biljku. |
| b2-fechten-772 | lv | HIGH | luna | Mačevanje | Mačevati se | Fechten je glagol, a mačevanje je imenica. |
| b2-feilen-774 | lv | HIGH | luna | Razočarati | Turpijati | Feilen znači turpijati ili dorađivati, ne razočarati. |
| b2-fernstudieren-779 | lv | HIGH | luna | Dopisno studiranje | Studirati na daljinu | Izvorna riječ je glagol, a trenutni prevod imenica. |
| b2-Fetzen-786 | lv | HIGH | luna | Rizik za stomak | Krpa • Dronjci | Fetzen označava krpu ili komad tkanine, ne rizik za stomak. |
| b2-Lieferfirma-794 | lv | HIGH | luna | Kompanija dobavljača | Dobavljačka firma | Trenutni izraz znači firmu koja pripada dobavljaču, ne firmu koja je dobavljač. |
| b2-flechten-798 | lv | HIGH | luna | Uviti • Pletenicu | Plesti • Uplitati | Flechten je glagol; „pletenicu“ je imenica u akuzativu. |
| b2-fleckig-799 | lv | HIGH | luna | Mrlja • Zamrljana • Mrlja • Prošarana • Mrljasta | Mrljav • Zamrljan • Pjegav • Prošaran • Šaren | Fleckig je pridjev, dok većina trenutnih oblika nije odgovarajuće oblikovana. |
| b2-flimmern-801 | lv | HIGH | luna | Svjetlucati • Svjetlucati • Svjetlucati • Svjetlucati • Svjetlucati | Treperiti • Svjetlucati • Tit­rati • Žmiriti • Nijansirati | Ponavljanje jednog prevoda briše razlike među različitim značenjima glagola. |
| b2-flüchtig-805 | lv | HIGH | luna | Prolazan • Površan • Prolazan • Prolazan • Kratkotrajan | Isparljiv • Površan • Trenutan • Prolazan • Kratkotrajan | Prvo i treće značenje su pogrešno prevedeni kao prolazan. |
| b2-Flunder-809 | lv | HIGH | luna | Koliba | Iverak | Flunder je vrsta ribe, a ne koliba. |
| b2-Flussarm-811 | lv | HIGH | luna | Refluks | Rukavac | Refluks znači povratni tok, dok Flussarm znači rukavac ili ogranak rijeke. |
| b2-Flussbett-812 | lv | HIGH | luna | Krevet | Riječno korito | Krevet je lažni prijatelj; Flussbett znači riječno korito. |
| b2-Förster-819 | lv | HIGH | luna | Ranger | Šumar | Förster označava šumara ili upravitelja šume, ne rendžera. |
| b2-sich fortpflanzen-820 | lv | HIGH | luna | Umnožiti • Širiti | Razmnožavati se • Širiti se | Treba sačuvati povratnost glagola: razmnožavati se i širiti se. |
| b2-fortschaffen-821 | lv | HIGH | luna | Nabaviti • Odnijeti • Odnijeti | Ukloniti • Odvesti • Odnijeti | Fortschaffen znači ukloniti ili odvesti/odnijeti, a ne nabaviti; stavke se ne trebaju pona |
| b2-fortschreiten-822 | lv | HIGH | luna | Dalje razvijati | Napredovati | Fortschreiten je neprijelazni glagol koji znači napredovati, ne dalje razvijati. |
| b2-Fracht-824 | lv | HIGH | luna | Tereta • Tereta | Teret • Vozarina | Prvi oblik treba biti nominativ, a frakts znači vozarina, ne teret. |
| b2-fräsen-828 | lv | HIGH | luna | Mljeti | Glodati | Fräsen znači obrađivati glodanjem; mljeti ima drugo značenje. |
| b2-Fräser-829 | lv | HIGH | luna | Glodalica • Glodalica | Glodač • Glodalo | Fräser označava glodača ili glodalo, ne glodalicu u oba značenja. |
| b2-freisprechen-834 | lv | HIGH | luna | Opravdati | Osloboditi optužbe | U pravnom značenju freisprechen znači osloboditi optužbe, a ne samo opravdati. |
| b2-friedfertig-837 | lv | HIGH | luna | Mirno • Usklađeno | Mirotvoran • Miroljubiv | Friedfertig je pridjev koji znači mirotvoran ili miroljubiv, ne mirno ili usklađeno. |
| b2-fristlos-838 | lv | HIGH | luna | Neodređeno | Bez otkaznog roka | Fristlos se odnosi na odsustvo otkaznog roka, a ne na neodređenost. |
| b2-Fuhre-845 | lv | HIGH | luna | Prevoz • Teret | Tovar • Teret | Fuhre znači tovar ili količinu tereta, ne prevoz. |
| b2-Führernatur-847 | lv | HIGH | luna | Tip vođe • Vođa | Liderski tip • Liderska priroda | Führernatur označava lidersku prirodu ili karakter, ne osobu vođu. |
| b2-Funktionär-854 | lv | HIGH | luna | Aktivista • Zaposlenik | Aktivista • Funkcioner | Funktionär znači funkcioner ili službenik, a ne općenito zaposlenik. |
| b2-Fürsorge-856 | lv | HIGH | luna | Starateljstvo • Starateljstvo | Briga • Starateljstvo | Fürsorge prvenstveno znači briga; ponavljanje starateljstva je netačno. |
| b2-Fürsprache-857 | lv | HIGH | luna | Uvjeravanje • Dobro ime koje se može braniti | Zastupanje • Zauzimanje za nekoga | Fürsprache znači zastupanje ili zauzimanje za nekoga, ne uvjeravanje ili dobro ime. |
| b2-gängig-863 | lv | HIGH | luna | Hodanje | Uobičajen • Uhodan | Gängig znači uobičajen, raširen ili uhodan, ne hodanje. |
| b2-Garnknäuel-868 | lv | HIGH | luna | Gruda | Klupko | Garnknäuel je klupko pređe; gruda ne označava ovu vrstu namotanog konca. |
| b2-Gasableser-870 | lv | HIGH | luna | Plinomjer | Očitač plinomjera | Gasableser označava osobu koja očitava plinomjer, ne sam uređaj. |
| b2-Gebärde-875 | lv | HIGH | luna |  • Funkcija gesta | Gest • Izraz lica | Nedostaje prijevod za žest, a „funkcija gesta“ nije značenje riječi Gebärde. |
| b2-Gefährte-884 | lv | HIGH | luna | Član | Saputnik | Gefährte znači saputnik ili pratilac, dok „član“ znači member. |
| b2-Gegenmittel-892 | lv | HIGH | luna | Protivotrov | Protusredstvo | Gegenmittel je opće protusredstvo; „protuotrov“ označava samo antidot. |
| b2-gehörig-896 | lv | HIGH | luna | Pripadanje • Pripadanje • Ispravno • Pristajanje | Pripadajući • Pripadajući • Primjeren • Pristojan | Prva dva oblika su imenice, a „pristajanje“ nije značenje pridjeva gehörig. |
| b2-gelaunt-903 | lv | HIGH | luna | Oh | Raspoložen | „Oh“ nije prijevod; gelaunt znači raspoložen ili dobre volje. |
| b2-Geliebte-910 | lv | HIGH | luna | Drag • Voljen • Najdraži | Ljubavnik • Voljeni • Miljenik | Der Geliebte je imenica za ljubavnika ili voljenog muškarca, ne samo pridjevi. |
| b2-Gemüsebau-919 | lv | HIGH | luna | Korjenasti usjevi • Povrtarski usjevi | Uzgoj korjenastog povrća • Povrtlarstvo | Prevod označava usjeve, a ne uzgoj povrća i povrtlarstvo. |
| b2-Gepäckwagen-934 | lv | HIGH | luna | Automobil za prtljag | Kolica za prtljag | Gepäckwagen su kolica ili vagon za prtljag, ne automobil. |
| b2-Geratewohl-936 | lv | HIGH | luna | Sretno | Nasumice | Geratewohl označava postupanje nasumice ili bez plana, ne sreću. |
| b2-gerinnen-939 | lv | HIGH | luna | Zgrušavati • Zgušnjavati • Zgušnjavati • Zgušnjavati • Smrzavati | Zgrušavati se • Zgušnjavati se • Skupljati se • Stvrdnjavati se • Zgrušavati se | Gerinnen označava zgrušavanje ili stvrdnjavanje; smrzavati je pogrešno. |
| b2-Gerippe-940 | lv | HIGH | luna | Skelet • Tijelo • Okvir | Skelet • Kostur • Okvir | Tijelo nije ekvivalent za Gerippe; ostali prevodi su prihvatljivi. |
| b2-Gesamtzahl-942 | lv | HIGH | luna | Ukupno | Ukupan broj | Gesamtzahl je imenica ukupan broj, a ne prilog ili pridjev ukupno. |
| b2-Gesandte-943 | lv | HIGH | luna | Glasnik | Izaslanik | Gesandte je izaslanik ili poslanik, ne glasnik. |
| b2-Geschiedene-946 | lv | HIGH | luna | Razvod | Razvedenik | Geschiedene označava razvedenu osobu, a ne razvod kao postupak. |
| b2-Geschwätz-950 | lv | HIGH | luna | Brbljanje • Laganje • Brbljanje | Brbljanje • Prazne priče • Prazne priče | Laganje nije nužno značenje Geschwätz; riječ označava brbljanje ili prazne priče. |
| b2-Geschwür-954 | lv | HIGH | luna | Biljka • Čir | Čir • Čir | Augonis znači čir, dok biljka znači plant. |
| b2-Gespött-959 | lv | HIGH | luna | Nicanje zuba | Podsmijeh | Nicanje zuba je potpuno nepovezano s podsmijehom ili predmetom ismijavanja. |
| b2-Gesuch-967 | lv | HIGH | luna | Zahtjev • Podnošenje | Zahtjev • Molba | Podnošenje označava čin predaje, a Gesuch je zahtjev ili molba. |
| b2-Gewebe-976 | lv | HIGH | luna | Tkanina • Maramica | Tkanina • Tkivo | Gewebe u biološkom značenju znači tkivo, ne maramica. |
| b2-Gewerbe-977 | lv | HIGH | luna | Pozicija • Trgovina • Stalni rad u oblasti trgovine ili zanata ili pružanja usluga | Zanat • Trgovina • Stalni rad u oblasti trgovine ili zanata ili pružanja usluga | Pozicija nije odgovarajuće značenje za Gewerbe; riječ označava zanat ili djelatnost. |
| b2-gewieft-978 | lv | HIGH | luna | Kaljen • Oštrouman | Lukav • Oštrouman | Gewieft znači prepreden ili lukav; kaljen znači hardened. |
| b2-Gewissheit-980 | lv | HIGH | luna | Jasnoća • Sigurnost • Sigurnost | Izvjesnost • Sigurnost • Izvjesnost | “Jasnoća” means clarity, and the current list repeats “Sigurnost” instead of expressing ce |
| b2-Gezeiten-981 | lv | HIGH | luna | Plima | Plima i oseka | “Plima” covers only high tide; “Gezeiten” denotes the tides, including ebb and flow. |
| b2-Glatze-995 | lv | HIGH | luna | Gole glave | Ćelavo tjeme | “Gole glave” is plural and denotes bald heads, not baldness or a bald scalp. |
| b2-Stirnglatze-996 | lv | HIGH | luna | Nepokriveno čelo | Ćelavost na čelu | “Nepokriveno čelo” means an uncovered forehead, not frontal baldness. |
| b2-gleichmütig-997 | lv | HIGH | luna | Sastavljena • Hladnokrvna | Smiren • Hladnokrvan | “Sastavljena” is unrelated and feminine; the entries should be masculine equivalents of “g |
| b2-Gleichnis-998 | lv | HIGH | luna | Sličnost | Parabola • Poređenje | “Sličnost” means similarity, whereas “Gleichnis” means a parable or figurative comparison. |
| b2-glotzen-1003 | lv | HIGH | luna | Škiljiti | Buljiti | “Škiljiti” means to squint, while “glotzen” means to stare or gawk. |
| b2-glühen-1004 | lv | HIGH | luna | Žariti • Gorjeti • Gorjeti • Gorjeti | Žariti • Usijati se • Gorjeti • Gorjeti | The repeated “Gorjeti” loses the distinct sense of becoming intensely hot or glowing. |
| b2-Glut-1005 | lv | HIGH | luna | Sjaj • Sjaj • Velika toplina | Žar • Žeravica • Velika toplina | “Sjaj” means shine; “Glut” refers to heat, embers, or glowing coals. |
| b2-gnädig-1008 | lv | HIGH | luna | Milostiv • Poštovan | Milostiv • Blagonaklon | “Poštovan” means respected, not gracious or merciful. |
| b2-Gondel-1015 | lv | HIGH | luna | Gondola • Žičara | Gondola • Kabina žičare | “Žičara” denotes the cable-car system, not the individual gondola cabin. |
| b2-grinsen-1034 | lv | HIGH | luna | Nasmejati se | Cerekati se | “Nasmejati se” means to smile or laugh; “grinsen” specifically means to grin. |
| b2-Gunst-1043 | lv | HIGH | luna | Uslugu | Naklonost | “Uslugu” means a service or favor, while “Gunst” primarily denotes favor or goodwill. |
| b2-gurgeln-1045 | lv | HIGH | luna | Grlo • Usta | Ispirati grlo • Ispirati usta | The current entries are nouns, not verb phrases corresponding to “gurgeln”. |
| b2-Gutachten-1047 | lv | HIGH | luna | Povratne informacije • Mišljenje stručnjaka | Stručni nalaz • Mišljenje stručnjaka | “Povratne informacije” means feedback, not an expert report or formal assessment. |
| b2-haaren-1053 | lv | HIGH | luna | Baciti pero | Linjati se | “Haaren” means to shed hair or fur, not to throw a feather. |
| b2-Hafengebühr-1056 | lv | HIGH | luna | Lučka dužnost | Lučka pristojba | Gebühr znači pristojba ili naknada, a ne dužnost. |
| b2-Handelsflotte-1060 | lv | HIGH | luna | Trgovačka mornarica | Trgovačka flota | Handelsflotte znači trgovačka flota, ne mornarica. |
| b2-Hängebrücke-1062 | lv | HIGH | luna | Žičani most | Viseći most | Hängebrücke je viseći most; žičani most je širi i nepodudaran pojam. |
| b2-hänseln-1064 | lv | HIGH | luna | Nerrot • Cviliti | Nerrot • Zadirkivati | Cviliti znači proizvoditi piskav zvuk ili jadikovati, ne zadirkivati. |
| b2-hantieren-1065 | lv | HIGH | luna | Djelovati • Djelovati s čim | Rukovati • Raditi s čim | Hantieren označava rukovanje ili praktičan rad s nečim, ne općenito djelovanje. |
| b2-Harsch-1067 | lv | HIGH | luna | Sumpor • Smrznuti snijeg | Snježna kora • Zaleđeni snijeg | Harsch označava stvrdnutu snježnu koru, ne sumpor. |
| b2-härten-1068 | lv | HIGH | luna | Očvrsnuti | Kaliti • Očvrsćivati | Glagol härten je prijelazan: nešto kaliti ili učiniti čvrstim. |
| b2-Haushaltung-1071 | lv | HIGH | luna | Domaćinstvo | Vođenje domaćinstva | Haushaltung označava upravljanje domaćinstvom, a ne samo domaćinstvo. |
| b2-Hausherr-1072 | lv | HIGH | luna | Domaćica • Zabavljač | Domaćin • Gazda kuće | Hausherr je muški domaćin ili gospodar kuće; trenutni izrazi nisu odgovarajući. |
| b2-Hausrat-1073 | lv | HIGH | luna | Život | Pokućstvo | Hausrat znači pokućstvo ili kućne stvari, ne život. |
| b2-Heilpraktiker-1084 | lv | HIGH | luna | Iscelitelj | Praktičar alternativne medicine | Heilpraktiker je praktičar alternativne medicine, a ne opći iscjelitelj. |
| b2-hemmen-1091 | lv | HIGH | luna | Ometati • Kašnjenje • Kočnicu | Ometati • Kočiti • Usporavati | Drugi i treći trenutni ekvivalenti su imenice ili pogrešan oblik, a trebaju biti glagoli. |
| b2-Hemmung-1092 | lv | HIGH | luna | Prepreka • Prepreka • Kašnjenje | Kočnica • Prepreka • Zadrška | Treći ekvivalent je kašnjenje; Hemmung ovdje označava kočenje, prepreku ili zadršku. |
| b2-henken-1093 | lv | HIGH | luna | Jednom • Objesite osobu | Vješati • Pogubiti vješanjem | Prvi izraz je potpuno nepovezan, a drugi je imperativ umjesto glagolskog ekvivalenta. |
| b2-herabsetzen-1094 | lv | HIGH | luna | Niže • Omalovažavati | Sniziti • Omalovažavati | Niže je prilog; herabsetzen zahtijeva glagol sniziti ili omalovažavati. |
| b2-herangehen-1095 | lv | HIGH | luna | Na posao | Prihvatiti se posla | Na posao je samo fragment; herangehen znači prihvatiti se ili pristupiti poslu. |
| b2-herantreten-1096 | lv | HIGH | luna | Pristup | Prići | Pristup je imenica, dok herantreten treba glagolski ekvivalent. |
| b2-heraufkommen-1097 | lv | HIGH | luna | Doći • Ustati | Popeti se • Doći gore | Prijevodi moraju izraziti kretanje prema gore, što doći i ustati ne čine precizno. |
| b2-herausstellen-1101 | lv | HIGH | luna | Ugasiti | Izložiti • Istaknuti | Ugasiti znači isključiti, dok herausstellen znači izložiti ili istaknuti. |
| b2-Herzschwäche-1109 | lv | HIGH | luna | Zatajenje srca | Slabost srca | Herzschwäche znači slabost srca, dok zatajenje srca označava teži medicinski pojam. |
| b2-Herzversagen-1110 | lv | HIGH | luna | Srčani zastoj • Insuficijencija | Srčano zatajenje • Insuficijencija | Herzversagen znači srčano zatajenje, ne srčani zastoj. |
| b2-hetzen-1112 | lv | HIGH | luna | Udarac • Podsticanje • Potjera • Udarac | Raspirivati • Podsticati • Progoniti • Tjerati | Trenutni izrazi uglavnom znače udariti ili potjera, a ne hetzen. |
| b2-heucheln-1113 | lv | HIGH | luna | Pretvarati se • Pretvarati se | Pretvarati se • Licemjeriti | Drugi prijevod je duplikat; heucheln ima i značenje licemjeriti. |
| b2-Hilfsdienst-1117 | lv | HIGH | luna | Help desk | Pomoćna služba | Hilfsdienst znači pomoćna služba, a ne help desk. |
| b2-hingeben-1118 | lv | HIGH | luna | Pokloniti • Posuditi | Predati se • Posvetiti se | Hingeben znači predati se ili posvetiti se, ne posuditi. |
| b2-hinreißen-1120 | lv | HIGH | luna | Zgrabiti • Oduzeti | Ponijeti • Oduševiti | Hinreißen znači ponijeti ili oduševiti, ne zgrabiti ili oduzeti. |
| b2-Hinsicht-1121 | lv | HIGH | luna | Poruka | Aspekt • Pogled | Hinsicht znači aspekt ili pogled, ne poruka. |
| b2-hinsichtlich-1122 | lv | HIGH | luna | U vezi • Zbog | U vezi s • Što se tiče | Prvi izraz je nepotpun, a zbog ne odgovara značenju hinsichtlich. |
| b2-hintergehen-1123 | lv | HIGH | luna | Varati • Razočarati | Prevariti • Izdati | Razočarati znači enttäuschen, ne hintergehen. |
| b2-Hinterhalt-1124 | lv | HIGH | luna | Skrovište | Zasjeda | Hinterhalt znači zasjeda, dok skrovište ima drugo značenje. |
| b2-hinterziehen-1125 | lv | HIGH | luna | Pronevjeriti novac • Ne plaćati porez | Pronevjeriti novac • Utajiti porez | Kod poreza hinterziehen znači utajiti porez, ne samo ne plaćati ga. |
| b2-hinüberfahren-1126 | lv | HIGH | luna | Preći • Preći | Prevesti preko • Preći preko | Hinüberfahren traži značenja prevesti preko i preći preko. |
| b2-Hirschkuh-1130 | lv | HIGH | luna | Majka jelena | Košuta | Hirschkuh označava ženku jelena, odnosno košutu, a ne majku jelena. |
| b2-Hobelbank-1136 | lv | HIGH | luna | Planer | Stolarska klupa | Hobelbank je stolarska radna klupa, ne planer. |
| b2-Hochverrat-1144 | lv | HIGH | luna | Izdaja | Veleizdaja | Hochverrat znači veleizdaja, odnosno izdaja države, a ne opća izdaja. |
| b2-hochwertig-1146 | lv | HIGH | luna | Visoka vrijednost | Visokokvalitetan | Hochwertig je pridjev koji znači visokokvalitetan ili vrijedan. |
| b2-Honorar-1151 | lv | HIGH | luna | Royalty | Honorar | Honorar znači honorar ili naknada, dok royalty znači tantijeme. |
| b2-in flagranti-1158 | lv | HIGH | luna | Uhvatiti • Da radiš nešto nezakonito | Uhvatiti na djelu | In flagranti znači uhvatiti na djelu; drugi segment je neprirodan i nepotpun. |
| b2-innewohnen-1161 | lv | HIGH | luna | Kući | Biti svojstven | Innewohnen znači biti svojstven ili sadržan u nečemu, ne kući. |
| b2-inszenieren-1162 | lv | HIGH | luna | Na pozornicu | Inscenirati | „Na pozornicu“ nije glagolski prijevod njemačkog glagola „inszenieren“. |
| b2-Kapitalist-1171 | lv | HIGH | luna | Kapitalistički | Kapitalista | „Kapitalist“ označava osobu, dok je „kapitalistički“ pridjev. |
| b2-Kaufkraft-1175 | lv | HIGH | luna | Novac • Takođe lična kupovna moć | Kupovna moć • Lična kupovna moć | „Novac“ je pogrešno značenje za „Kaufkraft“. |
| b2-kidnappen-1177 | lv | HIGH | luna | Kidnapovanje • Uzeti za taoca | Oteti • Uzeti za taoca | Njemački glagol treba biti preveden infinitivom, a ne imenicom. |
| b2-Klappe-1179 | lv | HIGH | luna | Ventil • Ventil | Zaklopka • Ventil | Prvi smisao riječi „Klappe“ ovdje je zaklopka, ne ventil. |
| b2-Korps-1198 | lv | HIGH | luna | Tijelo | Korpus | U ovom značenju „Korps“ označava vojni ili organizacijski korpus, ne opće tijelo. |
| b2-Kriegszustand-1203 | lv | HIGH | luna | Vanredno stanje | Ratno stanje | „Vanredno stanje“ znači izvanredno stanje, a ne stanje rata. |
| b2-Laienkunst-1206 | lv | HIGH | luna | Umjetnička samoaktivnost | Amaterska umjetnost | „Umjetnička samoaktivnost“ nije prirodan ni precizan prijevod za umjetnost amatera. |
| b2-Landsmann-1211 | lv | HIGH | luna | Sunarodnjak • Stanovnik županije | Sunarodnjak • Zemljak | „Novadnieks“ znači zemljak, ne konkretno stanovnik županije. |
| b2-Landung-1212 | lv | HIGH | luna | Stajanje • Sletanje • Sletanje | Iskrcavanje • Desant • Slijetanje | „Stajanje“ je pogrešno, a drugi oblik treba biti ijekavski. |
| b2-lauern-1218 | lv | HIGH | luna | Da se ušuškaš | Vrebati | „Da se ušuškaš“ ne odgovara značenju glagola „lauern“ — vrebati. |
| b2-Laufmasche-1220 | lv | HIGH | luna | Šav sa čarape | Izvučena petlja na čarapi | Trenutni prijevod znači šav na čarapi, a ne izvučenu petlju. |
| b2-Laufsteg-1221 | lv | HIGH | luna | Jezik na modnoj reviji | Modna pista | Laufsteg znači modna pista, ne jezik na modnoj reviji. |
| b2-Laufwerk-1222 | lv | HIGH | luna | Motor • Motor | Pogon • Pogonski mehanizam | Motor ne odgovara značenju pogona ili pogonskog mehanizma. |
| b2-Lehrstuhl-1228 | lv | HIGH | luna | Odjelu | Katedra | „Odjelu“ je padežni oblik i označava uži, drugačiji pojam od akademske katedre. |
| b2-Leichenhalle-1231 | lv | HIGH | luna | Na groblju kapele | Mrtvačnica | Leichenhalle znači mrtvačnica, ne kapela na groblju. |
| b2-Leichtgewicht-1232 | lv | HIGH | luna | Mala težina | Laka kategorija | U sportskom značenju ustaljeni izraz je „laka kategorija“, ne „mala težina“. |
| b2-leichtsinnig-1234 | lv | HIGH | luna | Neozbiljan | Lakomislen | „Neozbiljan“ je preširok; leichtsinnig označava lakomisleno ili nepromišljeno ponašanje. |
| b2-lindern-1249 | lv | HIGH | luna | Umiriti • Ublažiti bol | Ublažiti • Olakšati bol | „Umiriti“ nije precizan ekvivalent za ublažiti intenzitet tegobe ili bola. |
| b2-lispeln-1250 | lv | HIGH | luna | Skliznuti | Šuškati | „Skliznuti“ znači proklizati, dok lispeln znači govoriti sa šuštanjem ili šaptanjem. |
| b2-Luftbad-1263 | lv | HIGH | luna | Vazdušno plivanje | Vazdušna kupka | Luftbad znači vazdušna kupka, a ne plivanje u vazduhu. |
| b2-Luftgewehr-1269 | lv | HIGH | luna | Vazdušni pištolj | Vazdušna puška | Gewehr znači puška, pa je „vazdušni pištolj“ pogrešna vrsta oružja. |
| b2-Magister-1276 | lv | HIGH | luna | Magisterij | Magistar | Magister označava osobu ili akademsku titulu, dok „magisterij“ označava studijski stepen. |
| b2-Mahd-1277 | lv | HIGH | luna | Žeti | Košnja | Mahd je imenica za košnju ili pokošenu površinu, ne glagol „žeti“. |
| b2-Mahnschreiben-1281 | lv | HIGH | luna | Podsjetnik | Opomena | Mahnschreiben je službena opomena, a „podsjetnik“ je preblag i semantički uži prevod. |
| b2-Marketing-1287 | lv | HIGH | luna | Marketing • Trgovina | Marketing • Tržišno poslovanje | „Trgovina“ znači trgovinu, dok Marketing označava marketing odnosno tržišno poslovanje. |
| b2-Massenware-1295 | lv | HIGH | luna | Roba široke potrošnje | Roba masovne proizvodnje | Massenware označava masovno ili serijski proizvedenu robu, ne nužno robu široke potrošnje. |
| b2-Matinée-1298 | lv | HIGH | luna | Jutarnja emisija | Prijepodnevna predstava | Matinée je prijepodnevna predstava, a ne jutarnja emisija. |
| b2-mehren-1303 | lv | HIGH | luna | Umnožiti | Uvećavati | Mehren znači povećavati ili umnožavati; „umnožiti“ je svršen i uži oblik. |
| b2-meutern-1309 | lv | HIGH | luna | Buntovnik • Buntovnik | Pobuniti se • Pobuniti se | Meutern je glagol; „buntovnik“ je imenica i ne odgovara vrsti riječi. |
| b2-Mieder-1310 | lv | HIGH | luna | Tajice remen • Steznik | Stezni pojas • Steznik | „Tajice remen“ nije prirodan ni semantički tačan prevod za Mieder. |
| b2-Hausstaubmilbe-1314 | lv | HIGH | luna | Grinja | Grinja kućne prašine | „Grinja“ je preopćenito; Hausstaubmilbe označava grinju kućne prašine. |
| b2-minderwertig-1322 | lv | HIGH | luna | Bezvrijedan | Manje vrijedan | Minderwertig znači manje vrijedan ili nekvalitetan; „bezvrijedan“ je prejako značenje. |
| b2-missachten-1323 | lv | HIGH | luna | Zanemarivanje | Ne poštovati | Missachten je glagol, dok je „zanemarivanje“ glagolska imenica i semantički uži izraz. |
| b2-missbilligen-1324 | lv | HIGH | luna | Ne prepoznati kao dobro • Zaraditi | Ne odobravati • Osuđivati | Postojeći prevodi ne odgovaraju značenjima „missbilligen“: ne odobravati i osuđivati. |
| b2-missbrauchen-1325 | lv | HIGH | luna | Zlostavljanje | Zloupotrebljavati | Missbrauchen je glagol; „zlostavljanje“ je imenica i značenjski uži izraz. |
| b2-missfallen-1326 | lv | HIGH | luna | Ne volim | Ne sviđati se | Missfallen znači „ne sviđati se“, a „ne volim“ izražava drugo značenje i lice. |
| b2-missgönnen-1328 | lv | HIGH | luna | Da ne poželim • Da boli | Ne željeti nekome dobro • Zavidjeti | Postojeći izrazi ne prenose značenje uskraćivanja dobra i zavisti. |
| b2-mitschuldig-1330 | lv | HIGH | luna | Saučesnik | Sukriv | Mitschuldig je pridjev „sukriv“, dok je „saučesnik“ imenica. |
| b2-Mitwisser-1334 | lv | HIGH | luna | Ko-zaverenik | Osoba upućena u tajnu | Mitwisser je osoba koja zna za tajnu, ne nužno saučesnik ili zavjerenik. |
| b2-moderieren-1336 | lv | HIGH | luna | Umjereno | Moderirati | Moderieren je glagol „moderirati“, dok „umjereno“ znači „moderately“. |
| b2-Monatsschrift-1338 | lv | HIGH | luna | Mjesečno | Mjesečnik | Monatsschrift označava mjesečnu publikaciju ili časopis, ne prilog „mjesečno“. |
| b2-münden-1342 | lv | HIGH | luna | Ulivati ​​ • Ulaziti • Izlaziti • Istjecati | Ulijevati se • Ulaziti • Izlaziti • Završavati | Prvi prevod treba povratni infinitiv, a posljednje značenje je završavati. |
| b2-müßig-1344 | lv | HIGH | luna | Mirovanje • Mirovanje | Besposlen • Dokon | Müßig je pridjev, dok su postojeći prevodi imenice. |
| b2-mutieren-1345 | lv | HIGH | luna | Govoriti | Mutirati | Govoriti je semantički potpuno nepovezano s glagolom mutieren. |
| b2-nachgehen-1351 | lv | HIGH | luna | Pratite • Saznajte | Pratiti • Istražiti | Prevodi su u imperativu; natuknica treba infinitive, uz prikladniji drugi glagol. |
| b2-nachgiebig-1352 | lv | HIGH | luna | Snishodljiv | Popustljiv | Snishodljiv znači condescending, a nachgiebig znači popustljiv. |
| b2-nachsitzen-1356 | lv | HIGH | luna | Ostati u školi nakon radnog vremena za kaznu | Ostati u školi nakon nastave kao kaznu | Radno vrijeme nije prirodan školski izraz za zadržavanje nakon nastave. |
| b2-nachträglich-1357 | lv | HIGH | luna | Kasnije • Dodatno • Kasnije • Za suplemente | Naknadno • Dodatno • Kasnije • Dodatno | Za suplemente je pogrešno značenje i treba ga zamijeniti s dodatno. |
| b2-Nährboden-1360 | lv | HIGH | luna | Srednje | Hranljiva podloga | Nährboden označava hranljivu podlogu ili plodno tlo, ne sredinu. |
| b2-namens-1361 | lv | HIGH | luna | U ime • U prezime | U ime • Po prezimenu | U prezime je gramatički neispravno; drugo značenje je po prezimenu. |
| b2-Nebelschwaden-1367 | lv | HIGH | luna | Deo magle | Pramenovi magle | Nebelschwaden su pramenovi ili valovi magle, ne dio magle. |
| b2-Neger-1369 | lv | HIGH | luna | Crnac | Crnac (pogrdno, zastarjelo) | Zastarjeli i uvredljivi registar izvornog izraza mora biti označen. |
| b2-Neuauflage-1373 | lv | HIGH | luna |  • Revidirano izdanje | Novo izdanje • Revidirano izdanje | Prvi prevod nedostaje, a Neuauflage znači novo ili ponovljeno izdanje. |
| b2-neuerdings-1374 | lv | HIGH | luna | Nedavno • Ovih dana • Ponovo • Ponovo | Nedavno • Ovih dana • U posljednje vrijeme • U novije vrijeme | Ponovo znači opet, a neuerdings označava nedavno ili u novije vrijeme. |
| b2-Neuerung-1377 | lv | HIGH | luna | Nadogradnju | Inovacija | Nadogradnja znači upgrade i nije odgovarajuće značenje riječi Neuerung. |
| b2-nichtig-1380 | lv | HIGH | luna | Praznina • Ništavna • Beznačajna • Beznačajna | Nevažeći • Poništen • Ništavan • Beznačajan | Prvi prevod je pogrešan, a ostali imaju pogrešan rod ili ponavljaju značenje. |
| b2-niederlegen-1382 | lv | HIGH | luna | Spusti • Zaustavi rad • Stupi u štrajk | Spustiti • Obustaviti rad • Stupiti u štrajk | Infinitiv treba prevoditi infinitivom; obustaviti rad je prirodniji izraz. |
| b2-Notstand-1389 | lv | HIGH | luna | Katastrofalno stanje • Vanredno stanje | Stanje nužde • Vanredno stanje | Notstand prvenstveno označava stanje nužde ili krajnje potrebe. |
| b2-Notwehr-1390 | lv | HIGH | luna | Neophodna zaštita | Nužna odbrana | Notwehr je precizan pravni izraz za nužnu odbranu. |
| b2-Nutzeffekt-1391 | lv | HIGH | luna | Omjer efikasnosti | Koeficijent korisnog djelovanja | Tehničko značenje je koeficijent korisnog djelovanja, ne opšti omjer efikasnosti. |
| b2-Nutzholz-1392 | lv | HIGH | luna | Dosijea predmeta | Građevinsko drvo | Postojeći prevod je semantički nepovezan; Nutzholz označava korisno ili tehničko drvo. |
| b2-obgleich-1395 | lv | HIGH | luna | Iako iako | Iako • Premda | Trenutni prijevod nepotrebno ponavlja istu riječ. |
| b2-Ölbohrung-1404 | lv | HIGH | luna | Bunar za ulje | Bušenje nafte | Ölbohrung označava bušenje radi nafte, a ne naftni bunar. |
| b2-Ölgewinnung-1405 | lv | HIGH | luna | Ekstrakcija ulja | Eksploatacija nafte | U ovom kontekstu Ölgewinnung znači dobivanje odnosno eksploataciju nafte. |
| b2-Operator-1410 | lv | HIGH | luna | Veliki specijalista kompjuterske ekipe | Operator velikih računara | Trenutni prijevod je gramatički i semantički nejasan. |
| b2-pachten-1424 | lv | HIGH | luna | Za iznajmljivanje | Zakupiti | Njemački glagol treba prevesti glagolom u infinitivu. |
| b2-Parteibuch-1429 | lv | HIGH | luna | Člansku kartu | Partijska knjižica | Parteibuch označava partijsku knjižicu, a ne samo člansku kartu. |
| b2-parteilich-1431 | lv | HIGH | luna | Partizanske stranke | Partijski • stranački | Parteilich je pridjev; trenutni izraz je pogrešna imenička fraza. |
| b2-Personalakte-1442 | lv | HIGH | luna | Licna stvar | Lični dosje | Personalakte znači personalni dosje, a ne lična stvar. |
| b2-Pfahlbau-1443 | lv | HIGH | luna | Konstrukcija šipova | Gradnja na stupovima | Pfahlbau označava građevinu ili naselje podignuto na stupovima. |
| b2-pfänden-1444 | lv | HIGH | luna | Opišite imovinu • Zalog | Zaplijeniti • staviti pod zalog | Prijevod treba zadržati glagolski infinitiv, ne imperativ i imenicu. |
| b2-Pfandschein-1445 | lv | HIGH | luna | Znak zaloge | Potvrda o zalogu | Pfandschein je potvrda ili listić o zalogu. |
| b2-Pflichtbesuch-1446 | lv | HIGH | luna | Poziv iz ljubaznosti | Obavezna posjeta | Pflichtbesuch znači obaveznu posjetu, ne poziv iz ljubaznosti. |
| b2-pfuschen-1447 | lv | HIGH | luna | Loš • Nekvalifikovan • Neuredan rad | Fušeriti • raditi loše • raditi nepažljivo | Glagol pfuschen treba imati glagolske ekvivalente. |
| b2-Pilotsendung-1454 | lv | HIGH | luna | Otvarač serije | Uvodna emisija serije | „Otvarač serije“ nije prirodan ni tačan naziv za pilotsku emisiju. |
| b2-Pilotstudie-1455 | lv | HIGH | luna | Uvod u seriju istraživanja | Pilot-studija | Pilotstudie znači preliminarnu pilot-studiju, ne uvod u seriju istraživanja. |
| b2-prägen-1464 | lv | HIGH | luna | Kovati novac • Pritisnuti • Nametnuti • Formirati • Napraviti | Kovati novac • Utisnuti • Nametnuti • Oblikovati • Izraditi | „Pritisnuti“ i „formirati“ nisu precizni ekvivalenti za utiskivanje i oblikovanje. |
| b2-prägnant-1465 | lv | HIGH | luna | Živo izraženo | Sažet i upečatljiv | „Živo izraženo“ ne obuhvata značenja sažetosti, jasnoće i upečatljivosti. |
| b2-prämieren-1467 | lv | HIGH | luna | Nagrada | Nagraditi | Njemački glagol preveden je imenicom umjesto glagolskim infinitivom. |
| b2-querüber-1483 | lv | HIGH | luna | Suprotno | Poprijeko | „Suprotno“ označava opoziciju, a ne prostorni odnos preko ili poprijeko. |
| b2-Radierung-1487 | lv | HIGH | luna | Oštrenje • Graviranje | Bakropis • Graviranje | „Oštrenje“ znači sharpening, dok „Radierung“ označava tehniku bakropisa. |
| b2-Rain-1491 | lv | HIGH | luna | Jež | Međa | „Rain“ označava među ili pojas zemlje, a ne životinju „jež“. |
| b2-ranzig-1492 | lv | HIGH | luna | Užeglo • Gorko za kremu • Masnoću • Puter | Užeglo • Gorkasto (za pavlaku, masnoću i puter) | Drugi dio je gramatički nepravilan i ne prenosi pravilno nijansu gorkastog okusa. |
| b2-rau-1493 | lv | HIGH | luna | Grubo • Grubo • Grubo • Promuklo • Oštro • Neljubazno • Sirovo | Neravno • Hrapavo • Grubo • Promuklo • Oštro • Neljubazno • Sirovo | Više različitih latvijskih značenja pogrešno je objedinjeno kao „grubo“. |
| b2-rechtlos-1498 | lv | HIGH | luna | Bezakonje | Lišen prava | „Bezakonje“ označava lawlessness, dok „rechtlos“ znači bez pravnih prava. |
| b2-rechtsfähig-1501 | lv | HIGH | luna | Pravna sposobnost | Pravno sposoban | Njemački pridjev preveden je imenicom koja označava pravnu sposobnost. |
| b2-Reifeprüfung-1516 | lv | HIGH | luna | Test spremnosti | Maturski ispit | Reifeprüfung označava završni/maturski ispit, a ne opći test spremnosti. |
| b2-Reifezeugnis-1517 | lv | HIGH | luna | Potvrda o spremnosti | Svjedočanstvo o maturi | Reifezeugnis je svjedočanstvo o položenoj maturi, ne potvrda opće spremnosti. |
| b2-Relief-1520 | lv | HIGH | luna | Teren | Reljef | Relief znači reljef, dok „teren“ označava područje ili zemljište. |
| b2-Richtfest-1524 | lv | HIGH | luna | Festival vretenaca | Proslava završetka krova | Richtfest je proslava nakon završetka odnosno postavljanja krova, ne festival vretenaca. |
| b2-Ringelnatter-1526 | lv | HIGH | luna | Gladan | Bjelouška | Ringelnatter je vrsta zmije, a „gladan“ je potpuno pogrešno značenje. |
| b2-rücksichtslos-1532 | lv | HIGH | luna | Nemaran • Grub • Nemilosrdan | Bezobziran • Grub • Nemilosrdan | „Nemaran“ znači careless, dok rücksichtslos znači bezobziran ili nemilosrdan. |
| b2-rückständig-1533 | lv | HIGH | luna | Kasni • Kasni za plaćanje | Zaostao • U zaostatku s plaćanjem | „Kasni“ ne prenosi prvo značenje, a druga konstrukcija nije prirodna bosanska formulacija. |
| b2-Rüge-1535 | lv | HIGH | luna | Grditi • Grditi | Ukor • Prijekor | Rüge je imenica i znači ukor ili prijekor, ne glagole u infinitivu. |
| b2-sächlich-1544 | lv | HIGH | luna | ~es Geschlecht gram. • Bilo kojeg spola | Srednji rod gram. | „Bilo kojeg spola“ ne odgovara značenju gramatičkog srednjeg roda. |
| b2-sämtlich-1547 | lv | HIGH | luna | Svi [bez izuzetka] • U punoj snazi | Svi [bez izuzetka] • U punom sastavu | „U punoj snazi“ znači s punom snagom, ne u punom sastavu. |
| b2-sausen-1554 | lv | HIGH | luna | Šuštati • Zviždati • Zviždati • Zviždati | Šuštati • Zviždati • Juriti • Hujati | Treće i četvrto značenje sausen označavaju brzo kretanje, ne zviždanje. |
| b2-schädigen-1557 | lv | HIGH | luna | Šteta • Uzrokovati štetu | Naštetiti • Uzrokovati štetu | „Šteta“ je imenica, dok schädigen zahtijeva glagolski prevod. |
| b2-scheiden-1569 | lv | HIGH | luna | [un]odvojen • Odvojen • Odvojen • Sich sch. lassen • Raskinuti • Raskinuti | [ra]zdvojiti • Odvojiti • Razdvojiti • Sich sch. lassen • Razvesti se • Rastati se | Aktivna značenja moraju biti glagoli, a refleksivno značenje uključuje razvod ili rastanak |
| b2-Scheidewand-1570 | lv | HIGH | luna | Septum | Pregradni zid | Scheidewand označava pregradni zid ili pregradu, dok je „septum“ uži anatomski pojam. |
| b2-Scheitel-1571 | lv | HIGH | luna | Glava • Vuča • Put | Teme • Paur • Razdjeljak | Trenutni prevodi ne prenose značenja tjemena, paura i razdjeljka. |
| b2-scheitern-1572 | lv | HIGH | luna | Neuspjeh • Raskinuti | Doživjeti neuspjeh • Propasti | Scheitern je glagol koji znači doživjeti neuspjeh ili propasti, ne neuspjeh/raskinuti. |
| b2-schelmisch-1573 | lv | HIGH | luna | Podjele | Nestašan | Schelmisch znači nestašan, vragolast ili šaljiv, a ne „podjele“. |
| b2-Schieber-1577 | lv | HIGH | luna | Vijak • Strelica • Špekulant | Zasun • Klizač • Špekulant | Vijak i strelica ne odgovaraju tehničkim značenjima; zasun i klizač su precizniji. |
| b2-schillern-1581 | lv | HIGH | luna | Prelivajući • Kupati se u različitim bojama | Prelijevati se • Igrati se u različitim bojama | Potrebni su infinitivi, a „kupati se“ pogrešno prenosi značenje. |
| b2-schlafwandeln-1583 | lv | HIGH | luna | Biti zapanjen | Hodati u snu | Schlafwandeln znači hodati u snu, ne biti zapanjen. |
| b2-Schlaganfall-1584 | lv | HIGH | luna | Paraliza | Moždani udar | Schlaganfall znači moždani udar, dok je paraliza moguća posljedica. |
| b2-Schmarotzer-1591 | lv | HIGH | luna | Proždrljivi • Parazit | Lijenčina • Parazit | „Proždrljivi“ znači halapljiv; Schmarotzer je lijenčina ili parazit. |
| b2-schmollen-1595 | lv | HIGH | luna | Oblačenje | Duriti se | Schmollen znači duriti se ili biti namršten, a ne oblačiti se. |
| b2-Schuldschein-1606 | lv | HIGH | luna | Mjenica | Dužničko pismo | Schuldschein je dužničko pismo, a mjenica druga vrsta vrijednosnice. |
| b2-Schutzimpfung-1609 | lv | HIGH | luna | Zaštitno kalemljenje | Zaštitno cijepljenje | „Kalemljenje“ se odnosi prvenstveno na biljke; ovdje je riječ o cijepljenju. |
| b2-schwärmen-1613 | lv | HIGH | luna | Uzbuditi se • Buncati • Sanjati | Oduševljavati se • Oduševljeno hvaliti • Sanjati | „Buncati“ ne znači oduševljeno govoriti ili hvaliti; ostala značenja treba oblikovati prir |
| b2-Schwebebahn-1617 | lv | HIGH | luna | Suspenzija [željeznica]. | Viseća željeznica | Schwebebahn je viseća željeznica, ne suspenzija. |
| b2-schwinden-1623 | lv | HIGH | luna | [umanjiti] • [ne]pojaviti se • Nestati | Smanjivati se • Nestajati • Izgubiti se | Prva dva oblika ne odgovaraju značenjima smanjivati se i nestajati. |
| b2-Segelflieger-1626 | lv | HIGH | luna | Jedrilica | Pilot jedrilice | Segelflieger označava pilota jedrilice, ne samu jedrilicu. |
| b2-sensibel-1639 | lv | HIGH | luna | Osjetljivo • Osjetljivo | Osjetljiv • Obziran | Prvi oblik nije osnovni pridjev, a drugo značenje je obziran, ne ponovljeno osjetljivo. |
| b2-sickern-1643 | lv | HIGH | luna | Kapanje • Sisati | Kapati • Prodirati | Sickern znači kapati ili prodirati; „sisati“ i imenica „kapanje“ nisu odgovarajući oblici. |
| b2-Sorgenkind-1660 | lv | HIGH | luna | Brigu o djetetu | Dijete koje zadaje brigu | Sorgenkind je dijete koje izaziva brigu, a ne sama briga o djetetu. |
| b2-Sorgerecht-1662 | lv | HIGH | luna | Pravo na brigu | Pravo na starateljstvo | Sorgerecht je pravno pravo na starateljstvo, a ne opće pravo na brigu. |
| b2-Spielgerät-1670 | lv | HIGH | luna | Inventar sportskih igara | Sportska oprema | Trenutni izraz je neprirodan i preusko formulira Spielgerät kao inventar sportskih igara. |
| b2-Spießbürger-1671 | lv | HIGH | luna | Stalni državljanin | Malograđanin | Spießbürger znači malograđanin ili filistar, ne stalni državljanin. |
| b2-Spott-1673 | lv | HIGH | luna | Ruganje • Izbijanje zuba • Opaka šala | Ruganje • Podsmijeh • Zlobna šala | Izbijanje zuba nije značenje riječi Spott. |
| b2-spotten-1675 | lv | HIGH | luna | Lažno • Izbijanje zuba | Ismijavati • Rugati se | Trenutni izrazi ne znače spotten; riječ označava ismijavanje ili ruganje. |
| b2-spöttisch-1676 | lv | HIGH | luna | Podrugljivo • Zubat | Podrugljivo • Izrugivački | Zubat znači 'sa zubima' i nije prijevod za spöttisch. |
| b2-sprengen-1678 | lv | HIGH | luna | [na]blast • Poškropite • Vodom | Raznijeti eksplozijom • Poškropiti • Zalijevati | Trenutni niz sadrži fragment, imperativ i riječ koja nije prijevod glagola. |
| b2-Sprengstoff-1679 | lv | HIGH | luna | Eksplozivno | Eksploziv | Sprengstoff je imenica za eksploziv, dok je 'eksplozivno' pridjev ili prilog. |
| b2-Spross-1680 | lv | HIGH | luna | Bot. potomak • Izdanak • Trans. potomstvo • Potomstvo | Bot. izdanak • Mladica • Pren. potomak • Izdanak | Botaničko i preneseno značenje riječi Spross su u trenutnom tekstu zamijenjeni. |
| b2-Stahlwerk-1692 | lv | HIGH | luna | Livnica čelika | Čeličana | Stahlwerk je čeličana ili čelični pogon, ne nužno livnica čelika. |
| b2-starren-1694 | lv | HIGH | luna | Pažljivo pogledajte • Odsjaj | Zuriti • Buljiti | Trenutni izrazi znače pažljivo gledati i odsjaj, a ne zuriti. |
| b2-Strafanzeige-1705 | lv | HIGH | luna | Pokretanje krivičnog postupka protiv nekoga | Podnošenje krivične prijave | Strafanzeige znači podnošenje krivične prijave, ne pokretanje cijelog postupka. |
| b2-streitbar-1708 | lv | HIGH | luna | Argumentiran | Svadljiv | Streitbar znači svadljiv ili borben, ne argumentiran. |
| b2-Stripper-1711 | lv | HIGH | luna | Striptizeta | Izvođač striptiza | Stripper je ovdje muški izvođač striptiza, a ne striptizeta. |
| b2-Tagelohn-1723 | lv | HIGH | luna | Dnevnica | Dnevna plata | Tagelohn je dnevna plata ili nadnica, dok dnevnica obično označava putni dodatak. |
| b2-Testperson-1730 | lv | HIGH | luna | Suđeno lice | Testna osoba | Testperson znači osoba koja učestvuje u testiranju, ne osoba kojoj se sudilo. |
| b2-Tiefsinn-1733 | lv | HIGH | luna | Promišljenost | Dubokoumnost | „Promišljenost“ označava razboritost, a ne dubinu misli koju izražava „Tiefsinn“. |
| b2-tönen-1735 | lv | HIGH | luna | Za zvuk • Za ton • Za davanje nijanse | Zvučati • Itonirati • Dati nijansu | Trenutni prevod su neprirodni fragmenti s prijedlogom „za“, a ne glagolski infinitivi. |
| b2-Totenschein-1739 | lv | HIGH | luna | Izvod iz matične knjige umrlih | Potvrda o smrti | „Totenschein“ je ljekarska potvrda o smrti, a ne izvod iz matične knjige umrlih. |
| b2-totschießen-1740 | lv | HIGH | luna | Pucati | Ustrijeliti | Glagol znači ubiti pucanjem; „pucati“ ne prenosi značenje usmrćivanja. |
| b2-Trägerrakete-1744 | lv | HIGH | luna | Lanser | Noseća raketa | „Trägerrakete“ je raketa-nosač, dok „lanser“ označava lansirnu napravu. |
| b2-treulos-1751 | lv | HIGH | luna | Nepouzdan • Nepouzdan | Nevjeran • Nelojalan | „Nepouzdan“ znači unreliable, dok „treulos“ označava nevjerstvo ili nelojalnost. |
| b2-trügen-1757 | lv | HIGH | luna | Trik • Obmanuti | Varati • Obmanjivati | Prvi oblik je imenica, a drugi ne odgovara glagolskom vidu i paru izvornog infinitiva. |
| b2-überhören-1769 | lv | HIGH | luna | Ne [da] čuje zbog nepažnje • Pretvarajte se da ne čujete | Ne čuti zbog nepažnje • Praviti se da ne čuješ | Prvi oblik je negramatičan, a drugi je u imperativu umjesto u infinitivu. |
| b2-übersichtlich-1777 | lv | HIGH | luna | Transparentan | Pregledan | „Übersichtlich“ znači pregledan i lako razumljiv, ne transparentan. |
| b2-übertragen-1780 | lv | HIGH | luna | Prenositi • Prenositi zarazne bolesti • Emitirati putem radija • [re]prevoditi | Prenositi • Prenositi zarazne bolesti • Emitirati putem radija • Prevoditi | Oznaka „[re]prevoditi“ pogrešno sugeriše ponovno prevođenje; ostali ekvivalenti su prihvat |
| b2-übertreten-1781 | lv | HIGH | luna | Prekršiti zakon • Prekršiti nešto | Prekršiti zakon • Preći preko nečega | Drugi smisao znači fizički preći preko nečega, a ne prekršiti nešto. |
| b2-umarbeiten-1785 | lv | HIGH | luna | Reciklirati • Preraditi | Preraditi • Prepraviti | „Reciklirati“ ne odgovara značenju prerade teksta ili materijala u drugom obliku. |
| b2-umfassen-1788 | lv | HIGH | luna | Obuhvatiti • Zagrliti • Zagrliti | Obuhvatiti • Obuhvatiti • Zagrliti | Drugi prevod pogrešno je zamijenjen prevodom za grljenje; treba odgovarati značenju obuhva |
| b2-umhören, sich-1791 | lv | HIGH | luna | Da slušam | Raspitati se | Umhören, sich znači raspitati se ili prikupiti informacije, ne slušati. |
| b2-umkreisen-1793 | lv | HIGH | luna | Okružiti • Opsjedati • Lebdjeti • Lansirati • Krug | Okružiti • Opkoliti • Kružiti • Kružiti oko • Kružiti | Lansirati i Krug nisu glagolski prevodi; ostali prevodi ne prate značenja kruženja i opkol |
| b2-umschließen-1797 | lv | HIGH | luna | Uključiti • Obuhvatiti • Obuhvatiti | Okružiti • Obuhvatiti • Obuhvatiti | Uključiti znači aktivirati ili uključiti, dok umschließen znači okružiti ili obuhvatiti. |
| b2-unberechenbar-1818 | lv | HIGH | luna | Neprocjenjivo | Nepredvidivo | Neprocjenjivo znači veoma vrijedno, a unberechenbar znači nepredvidivo ili nesagledivo. |
| b2-Unfug-1827 | lv | HIGH | luna | Zlodjelo • Odsustvo • Razvratno djelo | Zlodjelo • Glupost • Razvratno djelo | Odsustvo znači absence, dok Unfug ovdje znači glupost, besmislicu ili nedjelo. |
| b2-ungerade-1829 | lv | HIGH | luna | Nije sasvim ravno • Krivo • Čudno | Nije sasvim ravno • Krivo • Neparno | U kontekstu brojeva ungerade znači neparno, ne čudno. |
| b2-Union-1830 | lv | HIGH | luna | Sindikat • Sindikat | Savez • Unija | Union znači savez ili unija; Sindikat je prevod za trade union. |
| b2-unterbreiten-1835 | lv | HIGH | luna | Objasniti • Prisutan | Predložiti • Podnijeti | Unterbreiten znači predložiti, iznijeti ili podnijeti, a Prisutan znači present. |
| b2-Unterlage-1843 | lv | HIGH | luna | Trajna • Podloga • Podloga • Podrška • Podaci • Dokumentacija | Podloga • Podloga • Podmetač • Podrška • Podaci • Dokumentacija | Trajna je pogrešna, a treći unos treba razlikovati podmetač od podloge. |
| b2-unterordnen-1845 | lv | HIGH | luna | Podređeni • Subjekt | Podrediti • Podčiniti | Unterordnen je glagol; Podređeni i Subjekt nisu odgovarajući glagolski prevodi. |
| b2-Untertan-1848 | lv | HIGH | luna | Građanin | Podanik | Untertan znači podanik, ne građanin. |
| b2-unterwerfen-1851 | lv | HIGH | luna | Predmet | Podrediti | Predmet je imenica, dok unterwerfen znači podrediti ili pokoriti. |
| b2-sich unterwerfen-1852 | lv | HIGH | luna | Poslušati | Podrediti se | „Poslušati“ znači obey/listen, dok „sich unterwerfen“ znači podrediti se ili pokoriti se. |
| b2-unüberlegt-1854 | lv | HIGH | luna | Bezobziran • Bezobziran | Nepromišljen • Lakomislen | „Bezobziran“ znači neobazriv prema drugima, a ne nepromišljen ili lakomislen. |
| b2-Urkunde-1864 | lv | HIGH | luna | Dokument • Članak | Dokument • Povelja | „Članak“ nije značenje riječi „Urkunde“; odgovarajuće je službeni dokument ili povelja. |
| b2-veranlassen-1872 | lv | HIGH | luna | Uzrok • Inicirati • Ohrabriti | Izazvati • Inicirati • Navesti | „Uzrok“ je imenica, a „ohrabriti“ ne znači navesti ili prouzrokovati. |
| b2-verbittert-1873 | lv | HIGH | luna | Uznemiren | Ogorčen | „Verbittert“ znači ogorčen ili duboko razočaran, ne samo uznemiren. |
| b2-verborgen-1874 | lv | HIGH | luna | Skrivena tajna | Skriven • Tajni | Trenutni izraz znači „skrivena tajna“, a ne dva odgovarajuća pridjeva. |
| b2-verdauen-1875 | lv | HIGH | luna | Variti | Probaviti | „Variti“ znači zavarivati, dok „verdauen“ znači probaviti ili svariti. |
| b2-verehren-1879 | lv | HIGH | luna | Čast • Poštovanje • Komp. [da] daju | Poštovati • Cijeniti • Obožavati | Trenutni oblici su imenica, imenica i nerazumljiva fraza; potreban je glagolski prijevod. |
| b2-vererben-1883 | lv | HIGH | luna | Ostaviti • Naslijediti | Ostaviti • Ostaviti u nasljedstvo | „Naslijediti“ znači primiti nasljedstvo, dok „vererben“ znači ostaviti nekome nasljedstvo. |
| b2-Verfasser-1887 | lv | HIGH | luna | Kompozitor • Autor | Pisac • Autor | „Kompozitor“ znači skladatelj, a „Verfasser“ pisac ili autor. |
| b2-Verfügung-1889 | lv | HIGH | luna | Red | Naredba | „Red“ znači poredak ili redoslijed, a „Verfügung“ znači naredba ili nalog. |
| b2-verhasst-1896 | lv | HIGH | luna | Omražen • Nevidljiv | Omražen • Omrznut | „Nevidljiv“ znači invisible i ne odgovara drugom značenju riječi „verhasst“. |
| b2-verhöhnen-1898 | lv | HIGH | luna | Lažna • Udubljenje | Ismijavati • Izrugivati | Trenutni prijevodi znače „lažna“ i „udubljenje“, a ne ismijavati ili izrugivati. |
| b2-Verhör-1899 | lv | HIGH | luna | [od] ispitivanja | Ispitivanje | Potrebna je imenica u nominativu; „od ispitivanja“ je prijedložni oblik. |
| b2-verhören-1900 | lv | HIGH | luna | [od] ispitivanja | Ispitivati | Njemačka riječ je glagol, dok je trenutni izraz nepravilna imenička sintagma. |
| b2-sich verhören-1901 | lv | HIGH | luna | Slušaj ponovo | Pogrešno čuti | „Sich verhören“ znači pogrešno čuti ili krivo razumjeti, ne slušati ponovo. |
| b2-Verlauf-1903 | lv | HIGH | luna | Napredak • Napredak | Tok • Tijek | „Verlauf“ znači tok ili odvijanje, a „Napredak“ ne prenosi osnovno značenje; prevod je i p |
| b2-Vers-1912 | lv | HIGH | luna | Članak | Stih | „Vers“ znači stih; „članak“ je pogrešan prevod. |
| b2-Versehen-1915 | lv | HIGH | luna | Greška • Revizija | Greška • Previd | „Revizija“ znači kontrolni pregled, ne nenamjerni previd. |
| b2-verkommen-1916 | lv | HIGH | luna | Odbiti • Potonuti • Zalutati | Propasti • Moralno se iskvariti • Skrenuti s pravog puta | „Odbiti“ je pogrešno; glagol označava propadanje i moralno posrnuće. |
| b2-verkörpern-1917 | lv | HIGH | luna | Utjelovljenje | Utjeloviti | Njemačka natuknica je glagol, pa imenica „utjelovljenje“ nije odgovarajuća. |
| b2-verkümmern-1919 | lv | HIGH | luna | Odbiti | Venuti | „Verkümmern“ znači venuti ili propadati, ne odbiti. |
| b2-verleumden-1921 | lv | HIGH | luna | Kleveta • Kleveta | Klevetati • Ocrnjivati | Glagol je preveden ponovljenom imenicom „kleveta“, umjesto glagolskim oblicima. |
| b2-sich vermehren-1923 | lv | HIGH | luna | Množenje | Množiti se • Razmnožavati se | Povratni glagol je pogrešno preveden imenicom „množenje“. |
| b2-vermögend-1927 | lv | HIGH | luna | Bogat • Hranjen | Bogat • Imućan | „Hranjen“ znači fed, a ne bogat ili imućan. |
| b2-verordnen-1930 | lv | HIGH | luna | Odrediti • Red • Med. potpisati | Odrediti • Narediti • Med. propisati | „Red“ je imenica, a medicinsko značenje glagola je „propisati“, ne „potpisati“. |
| b2-verpfänden-1931 | lv | HIGH | luna | Zalog | Založiti | Njemačka natuknica je glagol; „zalog“ je imenica. |
| b2-versagen-1934 | lv | HIGH | luna | Poriču • Odbijaju • Odbacuju • Neposlušnost • Odbijaju da služe • Izgledaju kukavičko i ne | Zakazati • Odbiti • Odbaciti • Ne poslušati • Odbiti služiti • Pokazati se kukavnim i nesp | Prevod miješa oblike i imenicu; više značenja je pogrešno ili neinfinitivno izraženo. |
| b2-verspotten-1943 | lv | HIGH | luna | Dent • Ismijavanje | Izrugivati • Ismijavati | „Dent“ nije bosanska riječ, a „ismijavanje“ je imenica umjesto glagola. |
| b2-verstauchen-1945 | lv | HIGH | luna | Dislocirati | Uganuti | „Verstauchen“ znači uganu ti zglob; „dislocirati“ nije precizan prevod. |
| b2-verweilen-1956 | lv | HIGH | luna | Visi okolo | Zadržavati se | „Visi okolo“ nije infinitiv niti precizan prevod za verweilen. |
| b2-Verweis-1957 | lv | HIGH | luna | Opomena • Opomena | Opomena • Upućivanje | Drugi prevod je dupliciran i nedostaje značenje upućivanja ili reference. |
| b2-verwickeln-1959 | lv | HIGH | luna | Zbuniti • Pril. preplitati • Ometati | Zapetljati • Preneseno: uvući • Uključiti | Postojeći prevodi ne prenose pravilno zaplitanje i uplitanje. |
| b2-verwirren-1960 | lv | HIGH | luna | Zbuniti • Zbuniti • Zbuniti | Pobrkati • Zapetljati • Zbuniti | Ponavljanje „Zbuniti“ gubi različite nijanse značenja. |
| b2-Verwirrung-1961 | lv | HIGH | luna | Zbunjenost • Stid | Pomutnja • Zbunjenost | „Stid“ znači shame, a ne pomutnju ili zbunjenost. |
| b2-verwöhnen-1962 | lv | HIGH | luna | Pokvariti • Pokvariti | Razmaziti • Ugađati | „Pokvariti“ i „ljutiti“ ne odgovaraju značenjima glagola verwöhnen. |
| b2-sich verzögern-1968 | lv | HIGH | luna | Odlagati • Odlagati | Kasniti • Odugovlačiti se | Ponavljano „odlagati“ je aktivno i ne prenosi pravilno povratno značenje. |
| b2-verzollen-1969 | lv | HIGH | luna | Da carine | Ocariniti | Verzollen znači ocariniti, ne „da carine“. |
| b2-verzweifeln-1970 | lv | HIGH | luna | Izašao | Očajavati | „Izašao“ nema semantičku vezu s glagolom verzweifeln. |
| b2-vollzählig-1982 | lv | HIGH | luna | Postoji u potpunosti | U punom broju | Vollzählig označava prisutnost svih članova, ne potpuno postojanje. |
| b2-Volumen-1984 | lv | HIGH | luna | Jačina zvuka • Jačina zvuka | Obim • Zapremina | „Jačina zvuka“ prevodi Lautstärke, ne Volumen. |
| b2-voran-1986 | lv | HIGH | luna | Ispred • Ispred • Na čelu | Naprijed • Ispred • Na čelu | Prvi prevod treba označavati kretanje ili položaj naprijed. |
| b2-Vorbehalt-1989 | lv | HIGH | luna | Stanje | Uslov | „Stanje“ ne odgovara značenju Vorbehalt u ovom kontekstu. |
| b2-vorder-1993 | lv | HIGH | luna | Front | Prednji | Vorder je pridjev; „front“ je imenica i pogrešan oblik. |
| b2-Vorliebe-1999 | lv | HIGH | luna | Posebno dopao | Posebna sklonost | Postojeći izraz je gramatički neispravan i nije imenica. |
| b2-vortragen-2008 | lv | HIGH | luna | Predavanje • Izvoditi • Recitovati • Igrati | Držati predavanje • Izvoditi • Recitovati • Svirati | Prvi prevod je imenica, a „igrati“ nije precizno za izvođenje muzike. |
| b2-Wacholder-2017 | lv | HIGH | luna | Jela • Kleka | Kleka • Kleka | „Jela“ označava fir, dok Wacholder znači kleka ili borovica. |
| b2-Wade-2019 | lv | HIGH | luna | Srna | List | Wade označava list noge, ne srnu. |
| b2-Wählscheibe-2024 | lv | HIGH | luna | Tastatura za biranje telefona | Rotacioni brojčanik telefona | Wählscheibe je rotacioni telefonski brojčanik, ne tastatura. |
| b2-wahren-2025 | lv | HIGH | luna | Spasiti | Čuvati | wahren znači čuvati, sačuvati ili održavati, a ne spasiti. |
| b2-wahrnehmen-2026 | lv | HIGH | luna | Percipe | Percepirati | Percipe nije bosanska riječ; wahrnehmen ovdje znači percipirati ili opažati. |
| b2-wankelmütig-2029 | lv | HIGH | luna | Kolebajući se | Kolebljiv | Njemački pridjev znači neodlučan ili kolebljiv, ne kolebajući se. |
| b2-wanken-2030 | lv | HIGH | luna | Roštiljanje • Pril. fluktuirati | Teturati • pren. kolebati se | Roštiljanje je pogrešno, a fluktuirati nije uobičajen prevod prenesenog značenja. |
| b2-Warenausgabe-2031 | lv | HIGH | luna | Kontrola i izdavanje kupovine | Izdavanje robe | Warenausgabe označava izdavanje robe, ne kontrolu i izdavanje kupovine. |
| b2-Wehrpflicht-2043 | lv | HIGH | luna | Vanredno stanje | Vojna obaveza | Wehrpflicht znači vojnu obavezu ili obavezno služenje vojnog roka, ne vanredno stanje. |
| b2-Weltlage-2049 | lv | HIGH | luna | Međunarodnoj situaciji | Stanje u svijetu | Weltlage je imenička sintagma koja znači stanje u svijetu. |
| b2-Werkbank-2054 | lv | HIGH | luna | Mašinski alat | Radna klupa | Werkbank je radna klupa ili radni sto, a ne mašinski alat. |
| b2-Werktätige-2057 | lv | HIGH | luna | Onaj radni | Radnik | Onaj radni je gramatički neispravno; Werktätige znači radnik ili zaposlena osoba. |
| b2-Wertpapier-2059 | lv | HIGH | luna | Sigurnost | Vrijednosni papir | Wertpapier je finansijski vrijednosni papir, ne sigurnost. |
| b2-Wettlauf-2061 | lv | HIGH | luna | Sp. žurna trka • Žurba | Sp. trka • Trka | Wettlauf znači trka; žurna trka i žurba nisu odgovarajući prevodi. |
| b2-wider-2066 | lv | HIGH | luna | Vs | Protiv | Vs nije bosanski prevod; wider znači protiv. |
| b2-Widmung-2071 | lv | HIGH | luna | Posvećenost | Posveta | Widmung je posveta, naročito tekst posvećen nekome, a ne opšta posvećenost. |
| b2-wiedergeben-2073 | lv | HIGH | luna | Dati • Reprodukovati • Reprodukovati | Vratiti • Reproducirati • Prikazati | Prvi prevod ne prenosi značenje vratiti, a druga i treća stavka su duplirane. |
| b2-Willkür-2075 | lv | HIGH | luna | Proizvoljno | Samovolja | Willkür je imenica; „proizvoljno“ je prilog i ne odgovara značenju. |
| b2-winden-2077 | lv | HIGH | luna | Uviti • Uviti • Pletenicu | Vijati • Motati • Plesti | Prevod treba glagole u infinitivu; „pletenicu“ je imenica i pogrešan oblik. |
| b2-zuerkennen-2084 | lv | HIGH | luna | Naručiti • Dodijeliti | Dosuditi • Dodijeliti | „Naručiti“ znači order; zuerkennen znači dosuditi ili dodijeliti. |
| b2-zureden-2087 | lv | HIGH | luna | Uvjeriti | Nagovarati | Zureden znači nagovarati ili navaljivati, a ne samo uvjeriti. |
| b2-Zusage-2091 | lv | HIGH | luna | Prijatan odgovor | Potvrdan odgovor | Zusage je potvrda ili pristanak, ne prijatan odgovor. |
| b2-zutrauen-2097 | lv | HIGH | luna | Očekivati ​​ • Misliti sposoban | Očekivati • smatrati sposobnim | Drugi izraz je gramatički neispravan i ne prenosi značenje smatrati sposobnim. |
| b2-Zuversicht-2098 | lv | HIGH | luna | Oslanjanje | Pouzdanje | Zuversicht označava pouzdanje ili samouvjerenost, ne oslanjanje. |
| b2-sofern | sectionAccents.explanation | HIGH | luna | sofät | sofern | Oznaka njemačke riječi sadrži pravopisnu grešku. |
| b2-verlaufen | sectionAccents.explanation | HIGH | luna | {"blue":["verlaufen"],"purple":["trčati","Kotrljati se"],"red":["sich verlaufen"]} | {"blue":["verlaufen"],"purple":["Odvijati se","Teći"],"red":["sich verlaufen"]} | Ljubičasti prijevodi pogrešno znače trčati i kotrljati se umjesto odvijati se i teći. |
| b2-sich-bemaechtigen | study.translation | HIGH | luna | Oduzeti • Zauzeti | Ovladati • Dočepati se | Trenutni prijevod znači oduzeti ili okupirati, ne ovladati nečim. |
| b2-sich-berufen | study.translation | HIGH | luna | Referirati na | Pozivati se na | „Sich auf etwas berufen“ znači „pozivati se na nešto“, ne „referirati na“. |
| b2-sich-betaetigen | study.translation | HIGH | luna | Raditi • Učestvovati | Baviti se • Učestvovati | „Raditi“ je preširoko; glagol znači baviti se nečim ili djelovati. |
| b2-sich-einlassen | study.translation | HIGH | luna | Pusti unutra | Upustiti se u | „Pusti unutra“ označava puštanje osobe unutra, a ne upuštanje u nešto. |
| b2-sich-einpraegen | study.explanation | HIGH | luna | Sich einprägen zahtijeva određeni prijedlog u + ko?. | Sich einprägen zahtijeva direktni objekat u akuzativu: šta?. | Glagol nema prijedložnu rekciju; traži direktni akuzativni objekat. |
| b2-sich-empfehlen | study.translation | HIGH | luna | Biti preporučeno | Biti preporučljiv | „Biti preporučeno“ znači biti preporučen, a ne biti vrijedan preporuke. |
| b2-sich-entrüsten | study.translation | HIGH | luna | Naljutiti se • Pobuniti se | Ogorčiti se • Razbjesniti se | Postojeći prevodi su semantički preslabi ili neprecizni za značenje ogorčenja i bijesa. |
| b2-sich-entsinnen | study.translation | HIGH | luna | Zapamtiti • Zapamtiti | Sjetiti se • Prisjetiti se | „Zapamtiti“ znači memorisati, dok sich entsinnen znači sjetiti se ili prisjetiti se. |
| b2-sich-erbarmen | study.translation | HIGH | luna | Smilovati se • Smilovati se | Smilovati se • Sažaliti se | Drugi prevod je dupliciran; treba navesti drugi izvorni sinonim. |
| b2-sich-ergeben | study.translation | HIGH | luna | Rezultirati • Odustati | Proizlaziti • Predati se | „Odustati“ nije odgovarajući prevod značenja „predati se“. |
| b2-sich-erregen | study.translation | HIGH | luna | Brinuti o | uzrujavati se zbog | „Brinuti o“ znači voditi brigu, ne uzrujavati se ili biti ogorčen. |
| b2-sich-erweisen | study.translation | HIGH | luna | Ispostavilo se da jeste | pokazati se kao | Trenutni tekst je prošla rečenica i ne prenosi infinitivnu konstrukciju „als“. |
| b2-sich-fassen | study.translation | HIGH | luna | Uhvatiti • Primiti • Obuzdati | pribrati se • sabrati se • savladati se | Trenutni glagoli ne prenose povratno značenje „sich fassen“. |
| b2-sich-fassen | study.rektion | HIGH | luna | an + kam? | nema obavezne rekcije | „Sich fassen“ nema obavezni prijedlog; „an“ je moguć samo u dodatnim konstrukcijama. |
| b2-sich-fassen | study.explanation | HIGH | luna | Sich fassen zahtijeva definitivni prijedlog an + kam?. | Sich fassen ne zahtijeva određeni prijedlog. | Glagol nema obaveznu prijedložnu rekciju. |
| b2-sich-fassen | study.forms | HIGH | luna | an + kam? | nema obavezne rekcije | „An“ nije obavezna rekcija glagola „sich fassen“. |
| b2-sich-fuegen | study.translation | HIGH | luna | Prilagoditi • Poslušati | prilagoditi se • pokoriti se | Nedostaje povratna zamjenica, a „poslušati“ ne odgovara značenju „pokoriti se“. |
| b2-sich-gestalten | study.translation | HIGH | luna | Formirati u | oblikovati se u | Nedostaje povratna zamjenica i glagol mora označiti oblikovanje subjekta. |
| b2-haube | study.examples[0].lv | HIGH | luna | Ona nosi topli šešir. | Ona nosi toplu kapu. | U ovom kontekstu „Haube“ znači kapa, ne šešir. |
| b2-sich-herausbilden | study.translation | HIGH | luna | Formirati u | Oblikovati se | Nedostaje refleksivno značenje; „Formirati u“ je negramatično i nepotpuno. |
| b2-sich-herausshalten | study.translation | HIGH | luna | Držati podalje od | Držati se podalje od | Bez povratne zamjenice izraz znači aktivno udaljavati nešto, a ne kloniti se. |
| b2-sich-herausstellen | study.translation | HIGH | luna | Ispostavilo se da jeste | Ispostaviti se, pokazati se | Infinitivni njemački glagol preveden je rečeničnim fragmentom u prošlom vremenu. |
| b2-sich-hingeben | study.translation | HIGH | luna | Predaja • Predaja | Predati se • posvetiti se | Imenički prijevod ne odgovara infinitivnom glagolu ni njegovim značenjima. |
| b2-sich-hingeben | study.explanation | HIGH | luna | Sich hingeben zahtijeva + za koga?. | Sich hingeben zahtijeva + kome/čemu?. | Glagol zahtijeva dativ, a "za koga" označava pogrešnu rekciju. |
| b2-leiden-study | study.translation | HIGH | luna | Duga i teška bolest | Patnja • bolest | Leiden prvenstveno označava patnju ili tegobu, ne nužno dugu i tešku bolest. |
| b2-nachdruck | study.comparison[1].meaning | HIGH | luna | Ponovo izdati | Ponovljeno izdanje | Njemačka natuknica je imenica, dok je trenutni prijevod glagolski oblik. |
| b2-sich-paaren | study.translation | HIGH | luna | Za parenje sa | Pariti se s(a) | Trenutni tekst je imenička fraza, a treba prirodan refleksivni glagolski infinitiv. |
| b2-sich-scheren | study.translation | HIGH | luna | Pobrini se | Mariti za • Brinuti se za | "Pobrini se" je imperativ i znači "take care", ne glagolsku natuknicu sich scheren. |
| b2-sofern | study.translation | HIGH | luna | Ako • To pod uvjetom | Ako • Pod uslovom da | Drugi prijevod je gramatički nepotpun jer mu nedostaje veznik "da". |
| b2-sofern | study.examples[0].lv | HIGH | luna | Dolazim kad imam vremena. | Dolazim ako imam vremena. | "Kad" izražava vrijeme, dok izvorna rečenica izražava uvjet. |
| b2-sofern | study.examples[3].lv | HIGH | luna | Budite konkretni ako je moguće. | Budite precizni ako je moguće. | "Precizni" odgovara značenju izvornog latvijskog pridjeva bolje od "konkretni". |
| b2-sich-vereinigen | study.translation | HIGH | luna | Spojiti sa | Ujediniti se s | Nedostaje povratna čestica "se", a "spojiti" je ovdje semantički neprecizno. |
| b2-sich-versehen | study.translation | HIGH | luna | Zaboraviti • Opremiti sa | Pogriješiti • Opremiti se | "Zaboraviti" je pogrešno značenje, a drugi oblik nema potrebnu povratnu česticu. |
| b2-sich-verstellen | study.translation | HIGH | luna | Imitirati | Pretvarati se | "Imitirati" znači oponašati, dok sich verstellen znači pretvarati se. |
| b2-sich-verwundern | study.translation | HIGH | luna | Pitam se | Čuditi se | „Pitam se“ mijenja značenje; sich verwundern znači čuditi se. |
| b2-sich-widersetzen | study.translation | HIGH | luna | Otpor • Lice | Suprotstaviti se • Oduprijeti se | Imenički oblici ne prenose glagolsko značenje sich widersetzen. |
| b2-sich-widersetzen | study.explanation | HIGH | luna | Sich widersetzen zahtijeva + za koga?. | Sich widersetzen zahtijeva + kome?. | Njemački dativ kam? odgovara bosanskom pitanju kome?, ne za koga?. |
| b2-zuweisen | study.translation | HIGH | luna | Dodijeliti • Dodijeliti | Dodijeliti • Rasporediti | Drugi prijevod je duplikat i ne prenosi značenje „norīkot“. |
| b2-zuweisen | study.explanation | HIGH | luna | Glavna ideja: zuweisen znači službeno dodijeliti ili dodijeliti—zadatak, ulogu, resurs ili | Glavna ideja: zuweisen znači službeno dodijeliti ili rasporediti zadatak, ulogu, resurs il | Ispravlja duplikat, ekavizam i nepravilnu crticu te prenosi oba značenja. |
| b2-zuweisen | study.comparison[0].meaning | HIGH | luna | Dodijeliti • Dodijeliti | Dodijeliti • Rasporediti | Drugi smisao iz latvijskog izvora nedostaje u trenutnom tekstu. |
| b2-zuweisen | study.tip.leftBlocks[0].text | HIGH | luna | Zuweisen naglašava formalni zadatak—u radu, administraciji, projektima. | Zuweisen naglašava formalno dodjeljivanje ili raspoređivanje u radu, administraciji i proj | „Formalni zadatak“ pogrešno opisuje značenje; naglasak je na formalnoj dodjeli. |
| b2-zuweisen | study.important.text | HIGH | luna | Zuweisen = dodijeliti ili službeno dodijeliti. Savršeno: dodijeljeno. Deljivo: weise ... z | Zuweisen = službeno dodijeliti ili rasporediti. Perfekt: zugewiesen. Djeljivo: weise ... z | Ispravlja dupliranje, pogrešan prijevod i naziv gramatičkog oblika. |
| b2-zuwider | study.translation | HIGH | luna | Protiv • Suprotno • Nesviđanju | Protiv • Suprotno • Ne sviđati se | „Nesviđanju“ nije prirodna infinitivna konstrukcija u ovoj listi prijevoda. |
| b2-zuwider | study.explanation | HIGH | luna | Glavna ideja: zuwider je riječ s više funkcija. Kao prijedlog + dativ, znači "protiv, prot | Glavna ideja: zuwider je riječ s više funkcija. Kao prijedlog + dativ znači „protiv, supro | Ispravlja dativno značenje i pogrešno navođenje riječi wider. |
| b2-zuwider | study.comparison[1].meaning | HIGH | luna | Nekome se to neće svideti | Nekome se to ne sviđa | Izvor daje opće značenje; trenutni tekst nepotrebno uvodi futur i ekavizam. |
| b2-zuwider | study.comparison[3].meaning | HIGH | luna | Protiviti se • Ne slažem se | Protiviti se • Ne slagati se | Drugi prijevod treba biti infinitiv, kao i prvi. |
| b2-zuwider | study.tip.leftBlocks[0].text | HIGH | luna | Osnovno značenje: protiv / suprotno (mir zuwider). Idiomatski: jemandem zuwider sein/laufe | Osnovno značenje: protiv / suprotno (mir zuwider). Idiomatski: jemandem zuwider sein/laufe | Konstrukcija s dativom znači nekome se ne sviđati, a ne ne voljeti nekoga. |
| b2-zuwider | study.important.text | HIGH | luna | Zuwider + dativ = protiv, suprotno. zuwider sein = ne sviđa mi se. Nije isto što i šire. | Zuwider + dativ = protiv, suprotno. zuwider sein = nekome se ne sviđati. Nije isto što i w | Ispravlja pogrešno lice i zamjenu njemačke riječi wider. |
| b2-aendern | study.translation | HIGH | luna | Promjena • Ispravna | Promijeniti • Ispraviti | Prijevodi trebaju biti glagolski infinitivi, ne imenica i pridjev. |
| b2-wechseln | study.translation | HIGH | luna | Zamijeniti • Zamijeniti | Mijenjati • Zamijeniti | Trenutni prijevodi se dupliraju, dok izvor daje dva različita glagolska smisla. |
| b2-bieten | study.translation | HIGH | luna | Ponuda • Obezbediti | Nuditi • Pružati | Prvi oblik je imenica, drugi ekavski; oba prijevoda trebaju biti glagolski. |
| b2-bieten | study.examples[4].lv | HIGH | luna | Šta nešto pruža • Anbieten | Ono što nešto pruža • Anbieten | „Ono što nešto pruža“ prirodna je i potpuna nominalna konstrukcija. |
| b2-anbieten | study.important.text | HIGH | luna | Anbieten = ponuditi aktivno. Deljivo: cvekla ... an. Savršeno: angeboten. | Anbieten = aktivno nuditi. Djeljivo: biete ... an. Perfekt: angeboten. | „cvekla“ je pogrešan token umjesto „biete“, a „Deljivo“ je ekavski oblik. |
| b2-fordern | study.translation | HIGH | luna | Zahtijevaju • Zahtijevaju | Zahtijevati • Tražiti | Oblici su konjugirani i duplicirani; potrebni su infinitivi s različitim značenjima. |
| b2-foerdern | study.translation | HIGH | luna | Promovirati • Podršku | Poticati • Podržavati | Drugi oblik je imenica umjesto infinitiva; prijevodi trebaju biti glagoli. |
| b2-verlaufen | study.translation | HIGH | luna | Za nastavak • Za kotrljanje | Odvijati se • Teći | Oba postojeća prijevoda semantički su pogrešna za „verlaufen“ bez „sich“. |
| b2-verlaufen | study.explanation | HIGH | luna | Verlaufen (bez sich) znači trčati ili kotrljati se. Nije sinonim za sich verlaufen (izgubi | Verlaufen (bez sich) znači odvijati se ili teći. Nije sinonim za sich verlaufen (izgubiti  | Bez „sich“ glagol znači odvijati se ili teći, a ne trčati ili kotrljati se. |
| b2-sich-abfinden | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-abwenden | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-befassen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-begnuegen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-bemaechtigen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-berufen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-beschraenken | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-betaetigen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-einlassen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-einpraegen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-Anmut-85 | lv | MEDIUM | deterministic | Privlačnost • Lepota • Gracioznost | Privlačnost • Ljepota • Gracioznost | Lepota je ekavski oblik; standardni bosanski ijekavski oblik je ljepota. |
| b2-aussterben-109 | lv | MEDIUM | deterministic | Izumreti | Izumrijeti | Izumreti je ekavski oblik; standardni bosanski ijekavski oblik je izumrijeti. |
| b2-ausweichend-116 | lv | MEDIUM | deterministic | Izbegavajući • Neizvestan | Izbjegavajući • Neizvjestan | Oba oblika su ekavska ili pogrešno ijekavska; bosanski standard traži izbjegavajući i neiz |
| b2-These-1732 | lv | MEDIUM | deterministic | Teza | Teza | Bosanski standard piše „teza“; početno veliko slovo može ostati samo zbog konvencije prika |
| b2-sich-einschleichen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-einschraenken | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-empfehlen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-empören | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-enthalten | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-entledigen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-entrüsten | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-entsinnen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-erbarmen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-ergeben | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-erniedrigen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-erregen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-erweisen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-fassen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-fuegen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-genieren | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-gesellen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-gestalten | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-grauen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-herausbilden | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-herausshalten | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-herausstellen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-hervortun | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-hingeben | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-paaren | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-revanchieren | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-scheren | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-vereinigen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-versehen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-versoehnen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-verstellen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-verwundern | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-sich-widersetzen | study.formsLabel | MEDIUM | deterministic | Menadžment: | Rekcija: | formsLabel must label grammatical rection, not management |
| b2-zustimmen-4 | lv | MEDIUM | luna | Da se složim | Složiti se | Infinitiv treba biti preveden infinitivom, a ne konstrukcijom „da se složim“. |
| b2-Akrobatik-8 | lv | MEDIUM | luna | Akrobacije | Akrobatika | „Akrobatika“ označava disciplinu, dok „akrobacije“ označava pojedinačne izvedbe. |
| b2-anbelangen-13 | lv | MEDIUM | luna | Referirati na | Ticati se | „Referirati na“ znači uputiti na ili pozvati se na, ne ticati se. |
| b2-anführen-17 | lv | MEDIUM | luna | Spomenuti • Voditi | Navesti • Voditi | U ovom značenju „anführen“ znači navesti ili citirati, ne samo spomenuti. |
| b2-angehen-19 | lv | MEDIUM | luna | Odnose na • Okrenuti se protiv | Ticati se • Suprotstaviti se | Prvi prevod je gramatički nepotpun, a drugi ne prenosi značenje djelovati protiv. |
| b2-angeblich-28 | lv | MEDIUM | luna | Kao da • Naizgled | Navodno • Naizgled | „Angeblich“ znači navodno; „kao da“ znači „as if“. |
| b2-angegriffen-33 | lv | MEDIUM | luna | Umorni • Napadnuti | Umoran • Napadnut | Prevod treba biti u osnovnom jednini, kao njemački particip/adjektiv bez množinskog određe |
| b2-abbringen-36 | lv | MEDIUM | luna | Odvratiti • Odvratiti • Odvratiti | Odvratiti • Odvratiti • Preusmjeriti | Treće značenje „abbringen“ je skrenuti ili preusmjeriti, ne ponovo odvratiti. |
| b2-abfällig-41 | lv | MEDIUM | luna | Nepovoljan • Negativan • Loš • Neodobravajući | Pogrdan • Negativan • Loš • Omalovažavajući | „Abfällig“ prvenstveno označava pogrdan ili omalovažavajući stav ili izraz. |
| b2-abfertigen-42 | lv | MEDIUM | luna | Poslati • Poslati • Poslužiti • Postupati neljubazno | Otpremiti • Poslati • Obraditi • Otpraviti grubo | Treće značenje je obraditi, ne poslužiti; ostali unosi trebaju preciznije glagolske prevod |
| b2-abgetan-46 | lv | MEDIUM | luna | Raskinut • Namiren | Završen • Riješen | „Abgetan“ znači završen ili riješen, ne raskinut ili namiren. |
| b2-abgrenzen-47 | lv | MEDIUM | luna | Razgraničite se • Distancirajte | Razgraničiti • Distancirati se | Njemački unos je infinitiv; drugi prevod treba povratnu zamjenicu. |
| b2-absondern-63 | lv | MEDIUM | luna | Odvojeno • Odvojeno • Izolovati | Izlučiti • Odvojiti • Izolovati | Prva dva unosa su adverbijalna; potrebni su glagolski prevodi različitih značenja. |
| b2-Abstecher-65 | lv | MEDIUM | luna | Diverzija • Kratko putovanje | Skretanje • Kratki izlet | „Abstecher“ znači skretanje ili kratki izlet, ne diverziju. |
| b2-abstimmen-66 | lv | MEDIUM | luna | Glasati • Složiti se | Glasati • Uskladiti | Drugo značenje „abstimmen“ je uskladiti, ne složiti se. |
| b2-abstoßend-68 | lv | MEDIUM | luna | Odbojno • Odvratno | Odbojan • Odvratan | Pridjev treba biti u muškom rodu; trenutni oblici su srednji rod/adverbijalni. |
| b2-absurd-70 | lv | MEDIUM | luna | Apsurdno • Besmisleno | Apsurdan • Besmislen | Njemačka lema je pridjev muškog roda, pa srednji rod nije odgovarajući oblik. |
| b2-annähernd-86 | lv | MEDIUM | luna | Približno • Približno | Približan • Približno | Prvo značenje je pridjev, dok je trenutni prvi oblik prilog/srednji rod. |
| b2-aussichtslos-106 | lv | MEDIUM | luna | Beznadežno • Nema perspektive | Beznadežan • Bez izgleda | Prvo treba biti pridjev, a drugi trenutni oblik je neprirodna kalkirana konstrukcija. |
| b2-auswärtig-115 | lv | MEDIUM | luna | Vanjski • Vanjski poslovi | Inostrani • Vanjski poslovi | Prvo značenje auswärtig je inostrani, a ne opći vanjski. |
| b2-autonom-122 | lv | MEDIUM | luna | Autonomna | Autonoman | Natuknica je muškog roda, pa Autonomna nije odgovarajući osnovni oblik. |
| b2-Bankgeheimnis-127 | lv | MEDIUM | luna | Bankovnu tajnu | Bankovna tajna | Trenutni oblik je akuzativ; natuknica treba biti u nominativu. |
| b2-Bankleitzahl-128 | lv | MEDIUM | luna | Indeks banke | Bankarski broj | Bankleitzahl označava bankarski identifikacioni broj, ne indeks banke. |
| b2-Bankrott-132 | lv | MEDIUM | luna | Bankrota | Bankrot | Trenutni oblik je genitiv, a natuknica treba biti u nominativu. |
| b2-barhäuptig-134 | lv | MEDIUM | luna | Golom glavom | Gologlav | Njemačka lema je pridjev, dok je trenutni prijevod instrumentalna fraza. |
| b2-Bauchhöhle-140 | lv | MEDIUM | luna | Trbušne duplje | Trbušna duplja | Bauchhöhle je jednina, dok je trenutni prijevod u množini. |
| b2-bedürfen-147 | lv | MEDIUM | luna | Potrebno • Biti neophodno | Trebati • Biti neophodno | Prvi prijevod je pridjevski oblik, a lema je glagol. |
| b2-sich beleben-180 | lv | MEDIUM | luna | Oživeti | Oživjeti | Oživeti je ekavski oblik; bosanski standard preferira ijekavski oblik. |
| b2-beschwören-206 | lv | MEDIUM | luna | Zaklinjati se • Zaklinjati • Mnogo moliti | Zaklinjati se • Potvrditi zakletvom • Usrdno moliti | Drugi i treći prevod su previše neprecizni za potvrđivanje zakletvom i usrdno moljenje. |
| b2-beständig-212 | lv | MEDIUM | luna | Konstanta • Konstantna | Stalan • Konstantan | Postojeći oblici su imenica i rodno ograničen pridjev, umjesto osnovnih pridjeva. |
| b2-bestärken-213 | lv | MEDIUM | luna | Ojačati • Ojačati • Ojačati | Ojačati • Pojačati • Ohrabriti | Sva tri prevoda su ista, a treće značenje je ohrabriti. |
| b2-bestürzt-218 | lv | MEDIUM | luna | Iznenađen • Zbunjen • Zbunjen • Zbunjen | Potrešen • Zatečen • Zbunjen • Izbezumljen | Iznenađen je preslabo, a postojeći prevodi nepotrebno ponavljaju zbunjen. |
| b2-sich betragen-223 | lv | MEDIUM | luna | Ponašati se • Ponašati | Ponašati se • Ponašati se | Drugi prevod je nepotpun bez povratne čestice se. |
| b2-Betriebsrat-224 | lv | MEDIUM | luna | Savet kompanije | Savjet kompanije | Savet je ekavski oblik; u bosanskom je prirodno Savjet. |
| b2-beurlauben-226 | lv | MEDIUM | luna | Odobravanje odsustva • Otpuštanje s posla | Odobriti odsustvo • Otpustiti s posla | Postojeći prevodi su imenice, dok njemačka odrednica označava glagol. |
| b2-Bewaffnung-228 | lv | MEDIUM | luna | Naoružanje • Naoružanje | Naoružavanje • Naoružanje | Prvi prevod treba označiti proces naoružavanja, a drugi samo naoružanje. |
| b2-Bezug-239 | lv | MEDIUM | luna | Odnos • Priključak • Poklopac | Odnos • Veza • Navlaka | Priključak i poklopac ne odgovaraju značenjima veza i navlaka u ovom kontekstu. |
| b2-bezüglich-240 | lv | MEDIUM | luna | U vezi | U vezi s | U vezi je nedovršena konstrukcija za značenje bezüglich; potreban je prijedlog s. |
| b2-bildlich-246 | lv | MEDIUM | luna | Slikovno • Imaginativno • Figurativno | Slikovit • Prenesen • Figurativan | Imaginativno znači maštovito, a postojeći prvi oblik nije odgovarajući pridjev. |
| b2-billigen-248 | lv | MEDIUM | luna | Priznati kao dobro • Slažem se | Odobriti • Složiti se | Prvi izraz je neprirodan, a drugi nije infinitivni oblik. |
| b2-Blutkonserve-274 | lv | MEDIUM | luna | Krv iz konzerve | Konzervirana krv | 'Krv iz konzerve' je neprirodan doslovni izraz za pohranjenu krv. |
| b2-Blutspender-278 | lv | MEDIUM | luna | Donator | Davalac krvi | 'Donator' je širi pojam i ne navodi da je riječ o davaocu krvi. |
| b2-bürgerlich-321 | lv | MEDIUM | luna | Građanski • Građani • Buržoaski • Buržoaski | Građanski • Građanski • Buržoaski • Buržoazijski | Drugi oblik je imenica, a četvrti treba biti pridjev izveden od buržoazija. |
| b2-Chromosom-332 | lv | MEDIUM | luna | Hromozoma | Hromozom | Hromozoma je genitiv; njemačka lema zahtijeva osnovni oblik hromozom. |
| b2-chronisch-334 | lv | MEDIUM | luna | Hronično | Hroničan | Njemačka lema je pridjev; hronično je srednji rod ili prilog. |
| b2-damalig-339 | lv | MEDIUM | luna | Tada • Tog vremena | Tadašnji • Iz tog vremena | Damalig je pridjev, dok je tada prilog i ne odgovara lemi. |
| b2-Damm-340 | lv | MEDIUM | luna | Brana • Brana • Željeznički nasip | Nasip • Brana • Željeznički nasip | Prvo značenje Damm je nasip; ponavljanje brana briše razlikovanje značenja. |
| b2-Darbietung-348 | lv | MEDIUM | luna | Performanse • Performanse | Izvedba • Predstava | Darbietung je imenica u jednini; performanse je množina i manje prirodan prevod. |
| b2-Darlehen-350 | lv | MEDIUM | luna | Zajam • Pozajmljivanje | Zajam • Pozajmica | Pozajmljivanje označava radnju, a Darlehen novčani zajam ili pozajmicu. |
| b2-Darm-351 | lv | MEDIUM | luna | Crijeva | Crijevo | Darm je imenica u jednini; crijeva je množinski oblik. |
| b2-deplaziert-378 | lv | MEDIUM | luna | Neprikladno • Izvan mjesta • Van vremena | Neumjesno • Na pogrešnom mjestu • U pogrešno vrijeme | Drugi i treći prevod su neprirodni doslovni izrazi za značenje deplaziert. |
| b2-Dezernat-387 | lv | MEDIUM | luna | Odjeljenja u policiji | Odjel u policiji | Njemačka odrednica je jednina, dok je sadašnji prevod u množini. |
| b2-diskret-406 | lv | MEDIUM | luna | Diskretno | Diskretan | Njemački oblik je pridjev, pa prevod treba biti diskretan, ne diskretno. |
| b2-doppelsinnig-416 | lv | MEDIUM | luna | Dvosmisleno | Dvosmislen | Odrednica je pridjev, pa treba muški oblik „dvosmislen“, ne „dvosmisleno“. |
| b2-Dosenmilch-425 | lv | MEDIUM | luna | Kondenzovano mleko u limenkama | Kondenzirano mlijeko u limenkama | „Mleko“ je ekavizam; ijekavski bosanski oblik je „mlijeko“. |
| b2-Dragee-429 | lv | MEDIUM | luna | Dragee | Dražeja | Bosanski naziv za Dragee je „dražeja“; njemački oblik nije standardan prevod. |
| b2-Dreck-435 | lv | MEDIUM | luna | Balega • Prljavština • Blato • Prljavština | Balega • Prljavština • Blato • Đubre | Četvrti prevod je dupliran; „draņķis“ ovdje odgovara „đubre“. |
| b2-Drogensucht-444 | lv | MEDIUM | luna | Ovisnosti o drogama | Ovisnost o drogama | Njemačka odrednica je jednina, pa i bosanski prevod treba biti u jednini. |
| b2-Drohung-445 | lv | MEDIUM | luna | Prijetnje | Prijetnja | Drohung je imenica u jednini; „prijetnje“ je množinski oblik. |
| b2-Drucksache-454 | lv | MEDIUM | luna | Bandrole • Štampa u poštanskim pošiljkama | Banderola • Štampani materijal u poštanskim pošiljkama | „Bandrole“ je pogrešno napisano, a drugi prevod je neprirodan i neprecizan. |
| b2-Drüse-455 | lv | MEDIUM | luna | Žlezda | Žlijezda | „Žlezda“ je ekavizam; bosanski ijekavski oblik je „žlijezda“. |
| b2-Dumpingpreis-459 | lv | MEDIUM | luna | Damping cijena | Dampinška cijena | Pridjevski oblik „dampinška“ gramatički i prirodno povezuje cijenu s dampingom. |
| b2-durchstellen-486 | lv | MEDIUM | luna | Povežite telefonski razgovor | Prespojiti telefonski razgovor | Trenutni prevod je imperativ množine, a njemački oblik je infinitiv. |
| b2-dürr-488 | lv | MEDIUM | luna | Suvo • Osušeno • Uvelo • Mršavo | Suh • isušen • uvenuo • mršav | Prevodi nisu u odgovarajućem obliku; standardni bosanski preferira navedene ijekavske obli |
| b2-einbüßen-536 | lv | MEDIUM | luna | Trpe materijalne gubitke | Pretrpjeti materijalne gubitke | Njemačka natuknica je infinitiv, dok je trenutni prijevod konjugiran u 3. licu množine. |
| b2-einmachen-569 | lv | MEDIUM | luna | Konzervirati • Marinirati • Prokuhati | Konzervirati • Marinirati • Praviti džem | Treće značenje odnosi se na pravljenje džema, a ne općenito na prokuhavanje. |
| b2-einmütig-570 | lv | MEDIUM | luna | Jednoglasno | Jednoglasan | Njemačka riječ je pridjev; „jednoglasno“ je prilog ili srednji rod. |
| b2-Einschnitt-575 | lv | MEDIUM | luna | Rez • Rez • Okret • Zarez | Rez • Posjekotina • Prekretnica • Usjek | „Okret“ i „zarez“ ne pokrivaju značenja prekretnice i usjeka. |
| b2-einspeichern-580 | lv | MEDIUM | luna | Unesite podatke • Sačuvajte | Unijeti podatke • Sačuvati | Infinitivni njemački unos treba imati infinitivne bosanske ekvivalente, ne imperative. |
| b2-einstimmig-583 | lv | MEDIUM | luna | Jednoglasno • Jednoglasno | Jednoglasan • Jednoglasan | „Einstimmig“ je pridjev, pa „jednoglasno“ nije odgovarajući osnovni oblik. |
| b2-eintauchen-585 | lv | MEDIUM | luna | Uronite • Uronite • Uronite • Uronite | Umakati • Umočiti • Uroniti • Zaroniti | Sadašnji oblici su imperativi i brišu razliku između umakanja, uranjanja i zaranjanja. |
| b2-Eintracht-587 | lv | MEDIUM | luna | Konsenzus • Dogovor • Harmonija • Kompatibilnost | Jednoglasnost • Sklad • Sloga • Sloga | „Kompatibilnost“ znači saderljivost, ne sklad ili slogu; ostali unosi traže preciznije ekv |
| b2-Eisenerz-599 | lv | MEDIUM | luna | Gvozdene rude | Željezna ruda | Potrebni su nominativ jednine i bosanski ijekavski oblik „željezna“. |
| b2-Elfenbein-607 | lv | MEDIUM | luna | Slonovače | Slonovača | Njemačka imenica traži nominativ jednine „slonovača“, ne genitivni oblik „slonovače“. |
| b2-Empörung-614 | lv | MEDIUM | luna | Zgražanje • Pobuna • Pobuna | Zgražanje • Ogorčenje • Pobuna | Drugi i treći ekvivalent su duplicirani, pa se gubi nijansa ogorčenja. |
| b2-Entbindung-618 | lv | MEDIUM | luna | Oslobađanje • Oslobođenje • Rođenje | Razrješenje • Oslobađanje • Porođaj | „Rođenje“ je šire značenje; „Entbindung“ u akušerskom smislu znači porođaj. |
| b2-Erdsatellit-668 | lv | MEDIUM | luna | Veštački satelit Zemlje | Vještački satelit Zemlje | „Veštački“ je ekavski oblik; u bosanskom je poželjan ijekavski oblik „vještački“. |
| b2-erheben-677 | lv | MEDIUM | luna | Podići • Podići • Povisiti • Protest | Podići • Uzdići • Povisiti • Protestovati | Posljednja jedinica je imenica; glagolski oblici bolje čuvaju infinitiv i značenja odredni |
| b2-erlöschen-688 | lv | MEDIUM | luna | Ugasiti • Ugasiti • Prestati važiti • Isteći | Ugasiti se • Ugasiti se • Prestati važiti • Isteći | Erlöschen je pretežno neprijelazan; prva dva prevoda trebaju povratni oblik. |
| b2-erschöpfen-706 | lv | MEDIUM | luna | Iscrpljivati ​​ • Umoriti | Iscrpiti • Umoriti | Prvi oblik je nesvršen; ovdje je potreban svršeni infinitiv iscrpiti. |
| b2-ertragen-717 | lv | MEDIUM | luna | Tolerisati • Trpeti | Tolerisati • Trpjeti | Druga jedinica je ekavski oblik; standardni ijekavski bosanski oblik je trpjeti. |
| b2-Erz-725 | lv | MEDIUM | luna | Rude | Ruda | Njemačka odrednica je jednina, pa bosanski prevod treba biti ruda, ne rude. |
| b2-Euter-732 | lv | MEDIUM | luna | Vimena | Vime | Euter je imenica u jednini; vimena je množina ili genitiv. |
| b2-expandieren-739 | lv | MEDIUM | luna | Brzo rastu • Šire se | Brzo rasti • Širiti se | Trenutni oblici su prezent množine, a odrednica je infinitiv. |
| b2-Farbige-761 | lv | MEDIUM | luna | Obojeni čovek | Osoba druge boje kože | Trenutni izraz je ekavski i društveno neprikladan za ovu imenicu. |
| b2-folgern-813 | lv | MEDIUM | luna | Da zaključim | Zaključiti | Natuknica je infinitiv, a trenutni prijevod je lični oblik u prvom licu. |
| b2-Fremde-835 | lv | MEDIUM | luna | Stranstvo • Stranac | Stranstvo • Strankinja | Drugo značenje je ženski oblik strankinja, ne muški oblik stranac. |
| b2-Führerrolle-846 | lv | MEDIUM | luna | Vodeću ulogu | Vodeća uloga | Samostalna imenička natuknica treba biti u nominativu, ne u akuzativu. |
| b2-funken-848 | lv | MEDIUM | luna | Emitovano na radiju | Emitovati putem radija | Natuknica je infinitiv, dok je trenutni prijevod particip u prošlom vremenu. |
| b2-Gage-860 | lv | MEDIUM | luna | Honorar umetnika | Honorar umjetnika | U bosanskom standardu ovdje je potreban ijekavski oblik umjetnika. |
| b2-gebrechlich-877 | lv | MEDIUM | luna | Slab • Osušen • Gauden • Osakaćen • Pun kvarova | Slab • Bolestan • Klonuo • Osakaćen • Pun mana | Nekoliko oblika je neprirodno ili semantički netačno za „slab i boležljiv“. |
| b2-gedeihen-880 | lv | MEDIUM | luna | Dobro • Uspjeti • Napredovati • Napredovati | Dobro uspijevati • Uspijevati • Cvjetati • Napredovati | Prvi oblik je nepotpun, a posljednji prijevod je dupliran. |
| b2-gedenken-881 | lv | MEDIUM | luna | Imati na umu • Zapamtiti • Zapamtiti • Spomenuti | Namjeravati • Sjećati se • Prisjećati se • Spomenuti | „Zapamtiti“ ne odgovara značenju sjećanja, a prijevod je ponovljen. |
| b2-Gedenktag-883 | lv | MEDIUM | luna | Dan sećanja | Dan sjećanja | U bosanskom je prirodniji i standardno poželjan ijekavski oblik „sjećanja“. |
| b2-Gegenrede-893 | lv | MEDIUM | luna | Izjava • Prigovor | Protuargument • Prigovor | „Izjava“ ne prenosi značenje suprotstavljenog govora ili argumenta. |
| b2-Gegensatz-894 | lv | MEDIUM | luna | Suprotno • Kontrast • Kontradikcija | Suprotnost • Kontrast • Proturječnost | Njemačka riječ je imenica, pa „suprotno“ nije odgovarajući oblik. |
| b2-gekünstelt-899 | lv | MEDIUM | luna | Umjetno • Neprirodno | Umjetan • Neprirodan | Kao samostalni pridjevi potrebni su oblici „umjetan“ i „neprirodan“. |
| b2-Gemahlin-914 | lv | MEDIUM | luna | Supruga • Supružnik | Supruga • Životna saputnica | Gemahlin označava ženu; „supružnik“ je muški ili rodno opći oblik. |
| b2-gemessen-916 | lv | MEDIUM | luna | Uravnoteženo • Razmatrano | Izmjereno • Promišljeno | „Uravnoteženo“ ne prenosi značenje odmjerenog, a „razmatrano“ je neprirodno. |
| b2-Gemüt-920 | lv | MEDIUM | luna | Karakter • Priroda • Misli • Umovi | Karakter • Narav • Duh • Um | Misli i naročito umovi nisu prirodni ekvivalenti za Gemüt. |
| b2-Genossin-930 | lv | MEDIUM | luna | Član • Član | Članica • Članica | Genossin označava žensku članicu, ne člana. |
| b2-Gerede-938 | lv | MEDIUM | luna | Govor • Govor • Narodni jezik • Ogovaranje | Brbljanje • Brbljanje • Priče • Ogovaranje | Narodni jezik nije značenje Gerede u ovom kontekstu. |
| b2-Geselle-955 | lv | MEDIUM | luna | Zellis • Pomoćnik • Momak • Zanatlija koji je položio ispit nakon nastave | Kalfa • Pomoćnik • Momak • Zanatlija koji je nakon naukovanja položio ispit | Kalfa je prirodniji standardni bosanski ekvivalent za Geselle od zellis. |
| b2-Gesichtszug-957 | lv | MEDIUM | luna | Karakteristika | Crta lica | Gesichtszug označava pojedinačnu crtu ili izraz lica, ne opštu karakteristiku. |
| b2-Gesinnung-958 | lv | MEDIUM | luna | Uvjerenja • Raspoloženje | Uvjerenja • Stav | Gesinnung znači uvjerenje ili stav; raspoloženje znači mood. |
| b2-getüpfelt-969 | lv | MEDIUM | luna | Tačkasta | Tačkast | Samostalni pridjev treba biti u muškom obliku: tačkast. |
| b2-Gewässer-975 | lv | MEDIUM | luna | Vodama | Vode | Vodama je instrumentalni oblik; kao imenica odgovara vode ili vodene površine. |
| b2-gewissenlos-979 | lv | MEDIUM | luna | Bez savjesti • Nepošteno | Bez savjesti • Nepošten | The second entry should use the masculine adjective dictionary form, not neuter or adverbi |
| b2-rachgierig-985 | lv | MEDIUM | luna | Žudnja za osvetom | Željan osvete | The current noun phrase does not match the adjective headword; an adjectival equivalent is |
| b2-gläsern-991 | lv | MEDIUM | luna | Staklo • Staklasto | Staklen • Staklast | “Staklo” is a noun, while the German adjective requires adjective forms in Bosnian. |
| b2-Glasur-994 | lv | MEDIUM | luna | Glazura • Glazura | Glazura • Glaziranje | The second entry duplicates the coating noun instead of representing the glazing process. |
| b2-gleiten-999 | lv | MEDIUM | luna | Klizi • Lebdi | Kliziti • Lebdjeti | The current entries are finite forms; the German infinitive requires Bosnian infinitives. |
| b2-Gnadenbrot-1007 | lv | MEDIUM | luna | Hleb milosti | Hljeb iz milosrđa | “Hleb” is ekavian; Bosnian prefers the ijekavian “hljeb”, with the phrase clarified natura |
| b2-habsüchtig-1054 | lv | MEDIUM | luna | Pohlepan • Pohlepan | Pohlepan • Gramziv | Drugi ekvivalent je duplikat; treba navesti različit bosanski sinonim. |
| b2-hauteng-1076 | lv | MEDIUM | luna | Uska odeća | Pripijena odjeća | Prijevod je ekavski i manje precizan; hauteng znači tijesno pripijen uz tijelo. |
| b2-Heilquelle-1082 | lv | MEDIUM | luna | Izvor izlječenja | Ljekoviti izvor | Prirodan bosanski izraz za izvor s ljekovitim svojstvima je ljekoviti izvor. |
| b2-Heizkraftwerk-1088 | lv | MEDIUM | luna | Termoelektrane | Termoelektrana | Njemačka imenica je u jednini, pa i bosanski ekvivalent treba biti u jednini. |
| b2-herb-1103 | lv | MEDIUM | luna | Gorko • Kiselo • Kiselo | Gorak • Trpak • Kiseo | Treba koristiti rječničke oblike pridjeva i razlikovati trpak od kiselog. |
| b2-Hirnzelle-1128 | lv | MEDIUM | luna | Moždane ćelije | Moždana ćelija | Hirnzelle je imenica u jednini, pa prijevod treba biti u jednini. |
| b2-hitzig-1131 | lv | MEDIUM | luna | Vruće • Gorljive • Nagle • Brze na ljutnju | Vruć • Gorljiv • Nagao • Brz na ljutnju | Samostalni pridjevi trebaju biti u muškom rodu i međusobno usklađeni. |
| b2-Investition-1164 | lv | MEDIUM | luna | Ulaganja • Ulaganje • Kapitalna ulaganja • Ulaganje | Ulaganje • Ulaganje • Kapitalno ulaganje • Ulaganje | Njemačka imenica je u jednini; množinski oblici trebaju biti u jednini. |
| b2-Knochengewebe-1185 | lv | MEDIUM | luna | Koštanog tkiva | Koštano tkivo | Trenutni prijevod je u genitivu, umjesto u nominativnom rječničkom obliku. |
| b2-Komplott-1191 | lv | MEDIUM | luna | Zavera | Zavjera | Bosanski standardni ijekavski oblik je „zavjera“, ne ekavski „zavera“. |
| b2-Konsequenz-1192 | lv | MEDIUM | luna | Dosljednost • Slijed • Zaključak • Posljedica | Dosljednost • Posljedica | „Slijed“ i „zaključak“ nisu odgovarajući ekvivalenti za „Konsequenz“. |
| b2-langfristig-1214 | lv | MEDIUM | luna | Dugoročni • Dugoročni | Dugoročan • Dugotrajan | Oba unosa su ponovljena; drugi latvijski smisao znači „dugotrajan“. |
| b2-lauschen-1223 | lv | MEDIUM | luna | Da pažljivo slušaju • Prisluškuju | Pažljivo slušati • Prisluškivati | Natuknica treba infinitive, a prvi oblik je u trećem licu uz nepotrebno „da“. |
| b2-Leibwächter-1230 | lv | MEDIUM | luna | Telohranitelj | Tjelohranitelj | „Telohranitelj“ je ekavski oblik; u bosanskom je poželjan ijekavski oblik. |
| b2-Liebesaffäre-1246 | lv | MEDIUM | luna | Intimnu vezu | Intimna veza | Prijevod je u akuzativu, dok natuknica treba biti u nominativu. |
| b2-liebkosten-1247 | lv | MEDIUM | luna | Milovati • Milovati | Milovati • Maziti | Dupliranjem „milovati“ izgubljena je druga značenjska varijanta „maziti“. |
| b2-liederlich-1248 | lv | MEDIUM | luna | Neuredan • Neuredan | Neuredan • Nemaran | Oba ekvivalenta su ista, pa druga varijanta ne dodaje značenje. |
| b2-Luftaufnahme-1264 | lv | MEDIUM | luna | Fotografija iz zraka • Fotografija iz zraka | Fotografija iz zraka • Aerofotografija | Druga varijanta je duplirana umjesto da navede aerofotografiju. |
| b2-Lustspiel-1271 | lv | MEDIUM | luna | Komedija • Igra šale | Komedija • Komična drama | „Igra šale“ nije prirodan naziv za komičnu dramsku predstavu. |
| b2-Marssonde-1289 | lv | MEDIUM | luna | Mars sonda | Marsova sonda | Prirodan bosanski naziv je „Marsova sonda“, ne neprirodni spoj „Mars sonda“. |
| b2-mechanisieren-1299 | lv | MEDIUM | luna | Da mehanizuje | Mehanizirati | Za njemački infinitiv „mechanisieren“ potreban je infinitiv „mehanizirati“. |
| b2-merklich-1308 | lv | MEDIUM | luna | Primetno | Primjetno | „Primetno“ je ekavski oblik; u bosanskom je preferirano „primjetno“. |
| b2-militant-1316 | lv | MEDIUM | luna | Ratoborno | Ratoboran | Militant je pridjev u osnovnom obliku; „ratoborno“ je srednji rod ili prilog. |
| b2-minder-1320 | lv | MEDIUM | luna | Manji • Manji | Manji • Manje | Drugo značenje riječi minder je prilog „manje“, ne pridjev „manji“. |
| b2-Atommüll-1340 | lv | MEDIUM | luna | Radioaktivnog otpada | Radioaktivni otpad | Kao samostalna natuknica potreban je nominativ „radioaktivni otpad“, ne genitiv. |
| b2-Nachlass-1353 | lv | MEDIUM | luna | Nasleđe | Naslijeđe | Nasleđe je ekavski oblik; bosanski standard preferira naslijeđe. |
| b2-Nervenarzt-1371 | lv | MEDIUM | luna | Lekar nervnih bolesti | Ljekar nervnih bolesti | Lekar je ekavski oblik; u bosanskom ijekavskom standardu je ljekar. |
| b2-Oberst-1394 | lv | MEDIUM | luna | Pukovniče | Pukovnik | Rječnička odrednica treba biti u nominativu, ne u vokativu. |
| b2-Organempfänger-1413 | lv | MEDIUM | luna | Primaoca organa za transplantaciju | Primalac organa za transplantaciju | Rječnička forma treba biti nominativ „primalac“, ne genitiv „primaoca“. |
| b2-Ortszeit-1420 | lv | MEDIUM | luna | Lokalnom vremenu | Lokalno vrijeme | Trenutni izraz je u neodgovarajućem padežu za osnovni oblik imenice. |
| b2-Pacht-1422 | lv | MEDIUM | luna | Iznajmljivanje | Zakup | Pacht označava zakup, uži pojam od općeg iznajmljivanja. |
| b2-Peepshow-1437 | lv | MEDIUM | luna | Erotski program koji se gleda odvojeno kroz kutiju | Erotski program koji se gleda pojedinačno kroz prozorčić | Peepshow se gleda kroz mali prozorčić, ne kroz kutiju. |
| b2-pikiert-1451 | lv | MEDIUM | luna | Uvrijeđen • Uvrijeđen • Ogorčen | Uvrijeđen • Povrijeđen • Ogorčen | Prva dva ekvivalenta su duplicirana; treba razlikovati nijansu značenja. |
| b2-Pilotprojekt-1453 | lv | MEDIUM | luna | Pilot projekat | Pilot-projekat | Složeni izraz se u ovom obliku piše s crticom. |
| b2-Plateau-1457 | lv | MEDIUM | luna | Ravno brdo | Visoravan | Standardni geografski ekvivalent za Plateau je „visoravan“. |
| b2-Poltergeist-1458 | lv | MEDIUM | luna | A poltergeist | Poltergeist | Trenutni tekst sadrži suvišno slovo „A“. |
| b2-porös-1460 | lv | MEDIUM | luna | Porozna | Porozan | Rječnička odrednica treba biti u osnovnom muškom rodu. |
| b2-Posse-1461 | lv | MEDIUM | luna | Farsa • Igra šale • Gruba šala | Farsa • Šaljiva igra • Gruba šala | „Igra šale“ je neprirodna sintagma; predloženi izraz je prirodniji u bosanskom. |
| b2-Possen-1462 | lv | MEDIUM | luna | Farsa • Igra šale • Gruba šala | Farsa • Šaljiva igra • Gruba šala | „Igra šale“ je neprirodna sintagma; predloženi izraz je prirodniji u bosanskom. |
| b2-predigen-1469 | lv | MEDIUM | luna | Propovedati | Propovijedati | „Propovedati“ je ekavski oblik; u bosanskom je preferirano „propovijedati“. |
| b2-provisorisch-1476 | lv | MEDIUM | luna | Privremeno • Privremeno • Na određeno vrijeme | Privremeno • Privremeno • Na neko vrijeme | „Na određeno vrijeme“ označava fiksni rok, dok je ovdje prikladnije opće vremensko ogranič |
| b2-qualifizieren-1480 | lv | MEDIUM | luna | Da se kvalifikuju | Kvalifikovati se | Infinitiv je preveden konjugovanim glagolskim oblikom s pomoćnom konstrukcijom. |
| b2-Rabbiner-1486 | lv | MEDIUM | luna | Rabine | Rabin | „Rabine“ je padežni oblik; osnovni oblik njemačke imenice je „rabin“. |
| b2-Referenz-1507 | lv | MEDIUM | luna | Preporuke | Preporuka | Jednina njemačke natuknice treba biti usklađena s bosanskim osnovnim oblikom. |
| b2-Rückgang-1530 | lv | MEDIUM | luna | Pad • Regresija • Pad | Pad • Nazadovanje • Smanjenje | Treći ekvivalent je pogrešno dupliciran; treba ga zamijeniti izrazom „smanjenje“. |
| b2-Sämaschine-1546 | lv | MEDIUM | luna | Mašina za sejanje | Mašina za sijanje | „Sejanje“ je ekavizam; u bosanskom je standardno „sijanje“. |
| b2-schonungslos-1598 | lv | MEDIUM | luna | Nemilosrdni | Nemilosrdan | Potrebni su osnovni oblik pridjeva i muški jedninski nominativ. |
| b2-Schöpfung-1600 | lv | MEDIUM | luna | Stvaranje • Stvaranje • Rad | Stvaranje • Tvorevina • Djelo | Drugo značenje je tvorevina, a treće djelo, ne ponovljeno stvaranje i rad. |
| b2-schreiten-1601 | lv | MEDIUM | luna | Hodanje • Ići | Koračati • Ići | Schreiten je glagol; „hodanje“ je imenica, dok je „koračati“ odgovarajući infinitiv. |
| b2-schutzlos-1610 | lv | MEDIUM | luna | Nezaštićeni | Nezaštićen | Njemački pridjev je u osnovnom obliku, ne u određenom množinskom obliku. |
| b2-siegreich-1644 | lv | MEDIUM | luna | Krunisan pobedama | Ovjenčan pobjedama | Trenutni tekst sadrži ekavizam „pobedama“; predloženi ijekavski oblik je prikladniji. |
| b2-Spruchband-1682 | lv | MEDIUM | luna | Transparentni • Poster | Transparent • Plakat | Potrebna je imenica 'transparent', a ne pridjev 'transparentni'. |
| b2-stranden-1706 | lv | MEDIUM | luna | Nasukati • Imati nesreću | Nasukati se • Doživjeti nesreću | Prvi prijevod treba povratni oblik, a drugi je prirodniji kao 'doživjeti nesreću'. |
| b2-strippen-1710 | lv | MEDIUM | luna | Uradi striptiz | Izvoditi striptiz | Kartica traži infinitiv; trenutni prijevod je neformalni imperativ. |
| b2-Studiengebühr-1716 | lv | MEDIUM | luna | Školarine na univerzitetu | Školarina na univerzitetu | Studiengebühr je imenica u jednini, pa treba 'školarina', ne 'školarine'. |
| b2-Tagegeld-1722 | lv | MEDIUM | luna | Službeni put dnevnica | Dnevnica za službeni put | Trenutni niz je gramatički neispravan; potrebno je izraziti dnevnicu za službeni put. |
| b2-tagen-1725 | lv | MEDIUM | luna | Održati • Sednicu | Održati sjednicu | Trenutni unos je fragmentaran i sadrži ekavski oblik 'sednicu'. |
| b2-Totalschaden-1738 | lv | MEDIUM | luna | Oštećenja na vozilu koja se nakon nezgode ne mogu popraviti | Totalna šteta | Trenutni tekst opisuje pojam umjesto da navede prirodan bosanski naziv za totalnu štetu. |
| b2-Tretmine-1749 | lv | MEDIUM | luna | Protivpješadijske mine | Protivpješadijska mina | Njemačka odrednica je u jednini, pa i bosanski ekvivalent treba biti u jednini. |
| b2-treuherzig-1750 | lv | MEDIUM | luna | Srdačan • Srdačan | Povjerljiv • Srdačan | Prvi prevod „srdačan“ ne prenosi značenje naivne iskrenosti ili povjerljivosti. |
| b2-überbringen-1761 | lv | MEDIUM | luna | Dostaviti poruku • Pozdrav • Pismo • Poklon | Prenijeti poruku • Uputiti pozdrav • Predati pismo • Uručiti poklon | Samo prvi postojeći ekvivalent je glagolska konstrukcija; ostali su fragmenti ili imenice. |
| b2-überfahren-1763 | lv | MEDIUM | luna | Pregazite • Lagano četkajte | Pregaziti • Lagano preći četkom | Prevod je u imperativu, a odrednica zahtijeva infinitivne glagolske oblike. |
| b2-überfordern-1766 | lv | MEDIUM | luna | Postavljaju prevelike zahtjeve | Postavljati prevelike zahtjeve | Trenutni prevod je konjugovan u trećem licu množine umjesto da bude infinitiv. |
| b2-überführen-1767 | lv | MEDIUM | luna | Prevesti • Preći preko rijeke | Prevesti preko • Prevesti preko rijeke | Drugi prevod znači samostalno prelaženje, a ne prevođenje nekoga preko rijeke. |
| b2-Überlastung-1771 | lv | MEDIUM | luna | Preopterećenja | Preopterećenje | Njemačka imenica je u jednini, dok je trenutni bosanski prevod u množini. |
| b2-Überlegung-1772 | lv | MEDIUM | luna | Razmišljanje • Razmatranje • Razmatranje | Razmišljanje • Razmatranje • Promišljanje | Treća stavka ponavlja drugu i ne prenosi zaseban ekvivalent iz izvora. |
| b2-überschreiten-1776 | lv | MEDIUM | luna | Proći • Prestupiti | Preći • Prekršiti | „Proći“ je neprecizno za prelaženje, a „prestupiti“ je manje prirodno od „prekršiti“. |
| b2-überwältigen-1782 | lv | MEDIUM | luna | Savladati • Pobediti | Savladati • Pobijediti | „Pobediti“ je ekavski oblik; u ijekavskom bosanskom standardu je „pobijediti“. |
| b2-Umbruch-1786 | lv | MEDIUM | luna | Velika promena u politici | Velika promjena u politici | „Promena“ je ekavski oblik; bosanski standard preferira ijekavsko „promjena“. |
| b2-Umfeld-1789 | lv | MEDIUM | luna | Okruženje društveno • Političko | Društveno okruženje • Političko okruženje | Bosanski pridjevi prirodno prethode imenici, a drugi prevod treba biti pravilno kapitalizi |
| b2-umschulen-1799 | lv | MEDIUM | luna | Naučiti ljude sa jednim poslom drugom poslu • Da se prekvalifikuju | Prekvalifikovati ljude za drugo zanimanje • Prekvalifikovati se | Prvi prevod je neprirodan, a drugi nije infinitivni oblik. |
| b2-Umschwung-1800 | lv | MEDIUM | luna | Preokret • Prekid • Iznenadna promjena • Preokret • Okret | Preokret • Preokret • Iznenadna promjena • Preokret • Okret | Prekid nije precizan prevod za lūzums u značenju naglog preokreta ili promjene. |
| b2-umständlich-1803 | lv | MEDIUM | luna | Vrlo detaljno • Preširoko • Opterećujuće • Komplikovano | Vrlo detaljan • Preširok • Opterećujući • Komplikovan | Prevodi trebaju biti pridjevi, a ne priloški ili srednjorodni oblici. |
| b2-unanständig-1808 | lv | MEDIUM | luna | Nepristojno • Se loše ponašao | Nepristojan • Nevaspitan | Drugi prevod je rečenica u prošlom vremenu; oba unosa trebaju biti pridjevi. |
| b2-unbebaut-1811 | lv | MEDIUM | luna | Neobrađeno za zemljište • Neizgrađeno | Neobrađeno zemljište • Neizgrađeno | Izraz Neobrađeno za zemljište gramatički je i stilski neprirodan. |
| b2-unbewusst-1821 | lv | MEDIUM | luna | Nesvesno • Instinktivno • Nenamerno • Nenamerno | Nesvjesno • Instinktivno • Nehotice • Nenamjerno | Current text koristi ekavicu i duplira nenamjerni prevod; potrebni su ijekavski i razlikov |
| b2-Untergang-1838 | lv | MEDIUM | luna | Pad • Pad • Propast • Kolaps | Zalazak • Zalaženje • Propast • Kolaps | Pad nije dovoljno precizan samostalan prevod za zalazak ili zalaženje sunca. |
| b2-Unterhalt-1840 | lv | MEDIUM | luna | Snabdevanje • Snabdevanje • Snabdevanje | Snabdijevanje • Snabdijevanje • Snabdijevanje | Bosanski ijekavski oblik je snabdijevanje, dok je snabdevanje ekavski. |
| b2-unzählig-1859 | lv | MEDIUM | luna | Nebrojeno | Nebrojiv | Za „unzählig“ je odgovarajući pridjev „nebrojiv“, a ne neutralni oblik „nebrojeno“. |
| b2-üppig-1861 | lv | MEDIUM | luna | Obilno • Debeljuškasto | Obilno • Bujno | „Debeljuškasto“ se odnosi na tjelesnu građu, ne na značenje „üppig“ ovdje. |
| b2-verfallen-1886 | lv | MEDIUM | luna | Srušiti se • Srušiti • Opadati • Potonuti | Srušiti se • Propasti • Opadati • Pasti | „Srušiti“ je prijelazan glagol i ne odgovara neprijelaznom njemačkom glagolu. |
| b2-verfügen-1888 | lv | MEDIUM | luna | Odrediti • Naredbu • Dodijeliti | Odrediti • Narediti • Dodijeliti | „Naredbu“ je akuzativ imenice; ovdje je potreban glagol „narediti“. |
| b2-vergeblich-1891 | lv | MEDIUM | luna | Uzaludan • Uzaludan | Uzalud • Uzalud | U navedenom značenju „vergeblich“ je prilog „uzalud“, a ne pridjev „uzaludan“. |
| b2-Vergehen-1892 | lv | MEDIUM | luna | Kršenje | Prekršaj | U pravnom značenju „Vergehen“ je prekršaj ili lakše krivično djelo. |
| b2-vergeuden-1893 | lv | MEDIUM | luna | Trošiti • Rasipati | Traćiti • Rasipati | „Trošiti“ ne mora značiti rasipati, dok „vergeuden“ nužno označava uzaludno trošenje. |
| b2-verhüten-1902 | lv | MEDIUM | luna | Spriječiti • Zaštititi od | Spriječiti • Zaštititi se | Drugi prijevod treba biti refleksivan i označavati preduzimanje zaštitnih mjera. |
| b2-Vermögen-1908 | lv | MEDIUM | luna | Imovine | Imovina | Prevod treba biti u nominativu: „imovina“, ne genitiv „imovine“. |
| b2-Versager-1913 | lv | MEDIUM | luna | Gubitnik • Gubitnik | Gubitnik • Neuspješna osoba | Drugi prevod je ponovljen i ne prenosi značenje osobe koja ne uspijeva. |
| b2-verkünden-1920 | lv | MEDIUM | luna | Najaviti • Najaviti | Najaviti • Proglasiti | Drugi prevod je ponovljen; „pasludināt“ zahtijeva „proglasiti“. |
| b2-vermehren-1922 | lv | MEDIUM | luna | Množiti • Množiti | Uvećati • Umnožiti | Prevod je ponovljen i ne razlikuje povećavanje od umnožavanja. |
| b2-vermessen-1924 | lv | MEDIUM | luna | Meriti | Izmjeriti | „Meriti“ je ekavski oblik; bosanski standard je ijekavski „izmjeriti“ ili „mjeriti“. |
| b2-verrechnen-1932 | lv | MEDIUM | luna | Izračunaj | Izračunati | Rječnički prevod treba biti infinitiv, a „izračunaj“ je imperativ. |
| b2-versetzen-1936 | lv | MEDIUM | luna | Premjestiti • Premjestiti | Premjestiti • Prebaciti | Drugi prevod je ponovljen i ne razlikuje značenje premještanja od prebacivanja. |
| b2-versöhnen-1940 | lv | MEDIUM | luna | Da se pomire | Pomiriti | Natuknica je glagol u infinitivu; postojeći prevod je zavisna rečenica i mijenja glagolsku |
| b2-verspielen-1942 | lv | MEDIUM | luna | Igrati • Izgubiti | Prokockati • Izgubiti | „Igrati“ ne prenosi značenje uzaludnog gubljenja ili prokockavanja. |
| b2-verweigern-1955 | lv | MEDIUM | luna | Odbiti • Odbiti | Odbiti • Uskratiti | Prevod je ponovljen i ne razlikuje odbijanje od uskraćivanja. |
| b2-Verwendung-1958 | lv | MEDIUM | luna | Korišćenje | Korištenje | „Korišćenje“ je ekavski oblik; bosanski standard preferira „korištenje“. |
| b2-visuell-1976 | lv | MEDIUM | luna | Vizuelno | Vizuelan | Prevod treba biti pridjev, a „vizuelno“ je prilog ili srednji rod. |
| b2-vollkommen-1980 | lv | MEDIUM | luna | Kompletno • Potpuno • Potpuno | Potpun • Potpuno • Sasvim | Prvi oblik nije odgovarajući pridjev, a treći prevod je nepotrebno dupliciran. |
| b2-vorsätzlich-2003 | lv | MEDIUM | luna | Namjerno • Namjerno | Namjeran • Hotimičan | Njemački pridjev preveden je dupliciranim prilozima. |
| b2-Vorspiel-2004 | lv | MEDIUM | luna | Prolog • Uvod • Uvertira | Prolog • Predigra • Uvertira | „Uvod“ ne prenosi specifično značenje predigre. |
| b2-Vorsprung-2005 | lv | MEDIUM | luna | Nadmoć • Nadmoć • Superiornost | Izbočina • Nadmoć • Prednost | Prvi smisao je izbočina, a postojeći niz nepotrebno ponavlja nadmoć. |
| b2-Vorstand-2006 | lv | MEDIUM | luna | Odbor • Šef • Menadžment • Šef | Upravni odbor • Rukovodstvo • Uprava • Predsjednik | Postojeći niz duplicira „šef“ i ne razlikuje funkcije Vorstanda. |
| b2-Wall-2028 | lv | MEDIUM | luna | Nasip • Nasip | Bedem • Nasip | Prvi smisao je bedem, dok nasip odgovara drugom smislu. |
| b2-Wasserwerfer-2036 | lv | MEDIUM | luna | Policijski auto - vodeni top | Vodeni top | Wasserwerfer znači vodeni top; policijski auto je nepotrebno i pogrešno dodat. |
| b2-Wegstrecke-2039 | lv | MEDIUM | luna | Dionica puta • Kom | Dionica puta • Dionica | Kom je neprirodan i ne odgovara značenju dionice ili dijela puta. |
| b2-Wehe-2041 | lv | MEDIUM | luna | Dina • Kupena | Dina • Snježni nanos | U ovom značenju Wehe označava snježni nanos, ne samo opštu kupu. |
| b2-weitsichtig-2047 | lv | MEDIUM | luna | Dalekovid | Dalekovidan | Standardni bosanski pridjev je dalekovidan, ne dalekovid. |
| b2-Werkhalle-2055 | lv | MEDIUM | luna | Radionica | Proizvodna hala | Werkhalle označava fabričku ili proizvodnu halu, ne radionicu. |
| b2-Werkteil-2058 | lv | MEDIUM | luna | Detalj | Dio | Werkteil znači dio ili komponenta, dok detalj označava pojedinost. |
| b2-Wiederaufbau-2072 | lv | MEDIUM | luna | Restauracija • Rekonstrukcija | Obnova • Rekonstrukcija | Wiederaufbau znači obnova ili ponovna izgradnja; restauracija je uži pojam. |
| b2-zielbewusst-2078 | lv | MEDIUM | luna | Ciljano | Usmjeren ka cilju | Njemački izraz je pridjev, dok je „ciljano“ ovdje prilog. |
| b2-zollpflichtig-2081 | lv | MEDIUM | luna | Podležu carini | Podložan carini | „Podležu carini“ je glagolski oblik, a njemački izraz je pridjev. |
| b2-Zucht-2082 | lv | MEDIUM | luna | Odgoj • Kultivacija | Odgoj • Uzgoj | U drugom značenju Zucht označava uzgoj, ne kultivaciju. |
| b2-zusammenfügen-2092 | lv | MEDIUM | luna | Za povezivanje | Spojiti | Njemački glagol treba infinitiv; „za povezivanje“ izražava namjenu. |
| b2-zuschneiden-2094 | lv | MEDIUM | luna | Rezati | Izrezati po mjeri | Zuschneiden znači izrezati ili skrojiti prema potrebnoj mjeri, ne općenito rezati. |
| b2-zuströmen-2095 | lv | MEDIUM | luna | Uliva se | Pritjecati | Prevod treba infinitiv; „uliva se“ je konjugirani glagolski oblik. |
| b2-haube | sectionAccents.examples[2].lv | MEDIUM | luna | On | haubu | Akcenat treba označiti bosanski ekvivalent riječi Haube, a ne zamjenicu „On“. |
| b2-haube | sectionAccents.examples[3].lv | MEDIUM | luna | je | Hauba | Akcenat treba označiti prevod riječi Motorhaube, a ne pomoćni glagol „je“. |
| b2-sich-abfinden | study.rektion | MEDIUM | luna | mit + kam? | mit + kim/čim? | „kam?“ je latvijski oblik; bosanski dativ traži „kim/čim?“. |
| b2-sich-abfinden | study.forms | MEDIUM | luna | mit + kam? | mit + kim/čim? | „kam?“ je latvijski oblik; bosanski dativ traži „kim/čim?“. |
| b2-sich-abfinden | study.explanation | MEDIUM | luna | Sich abfinden zahtijeva određeni prijedlog mit + kam?. | Sich abfinden zahtijeva određeni prijedlog mit + kim/čim?. | Ispravlja latvijski upit i neprirodan termin „definitivni prijedlog“. |
| b2-sich-abwenden | study.explanation | MEDIUM | luna | Sich abwenden zahtijeva definitivni prijedlog von + kam?. | Sich abwenden zahtijeva određeni prijedlog von + koga/čega?. | „Definitivni“ nije odgovarajući termin, a „kam?“ nije bosanski upit. |
| b2-sich-befassen | study.explanation | MEDIUM | luna | Sich befassen zahtijeva definitivni prijedlog mit + kam?. | Sich befassen zahtijeva određeni prijedlog mit + kim/čim?. | Ispravlja latvijski upit i neprirodan termin „definitivni prijedlog“. |
| b2-sich-begnuegen | study.explanation | MEDIUM | luna | Sich begnügen zahtijeva određeni prijedlog mit + kam?. | Sich begnügen zahtijeva određeni prijedlog mit + kim/čim?. | Ispravlja latvijski upit i neprirodan termin „definitivni prijedlog“. |
| b2-sich-begnuegen | study.forms | MEDIUM | luna | mit + kam? | mit + kim/čim? | „kam?“ je latvijski oblik; bosanski dativ traži „kim/čim?“. |
| b2-sich-berufen | study.explanation | MEDIUM | luna | Sich berufen zahtijeva definitivni prijedlog auf + ko?. | Sich berufen zahtijeva određeni prijedlog auf + šta/koga?. | „Definitivni“ je neprirodan termin, a „ko?“ je preusko pitanje. |
| b2-sich-beschraenken | study.translation | MEDIUM | luna | Ograničite se na | Ograničiti se na | Infinitivna njemačka natuknica ne treba biti prevedena imperativom. |
| b2-sich-beschraenken | study.explanation | MEDIUM | luna | Sich beschränken zahtijeva definitivni prijedlog auf + ko?. | Sich beschränken zahtijeva određeni prijedlog auf + šta/koga?. | Ispravlja termin „definitivni“ i preusko pitanje „ko?“. |
| b2-sich-betaetigen | study.rektion | MEDIUM | luna | in + kur? | in + gdje? | „kur?“ je latvijski oblik; bosanski upit za mjesto je „gdje?“. |
| b2-sich-betaetigen | study.forms | MEDIUM | luna | in + kur? | in + gdje? | „kur?“ je latvijski oblik; bosanski upit za mjesto je „gdje?“. |
| b2-sich-einlassen | study.explanation | MEDIUM | luna | Sich einlassen zahtijeva definitivni prijedlog auf + ko?. | Sich einlassen zahtijeva određeni prijedlog auf + šta/koga?. | Ispravlja neprirodan termin i preusko pitanje „ko?“. |
| b2-sich-einschleichen | study.rektion | MEDIUM | luna | in + ko? | in + šta? | Za neživu akuzativnu dopunu bosanski upit je „šta?“, ne „ko?“. |
| b2-sich-einschleichen | study.explanation | MEDIUM | luna | Sich einschleichen zahtijeva definitivni prijedlog u + ko?. | Sich einschleichen zahtijeva određeni prijedlog in + šta?. | Ispravlja termin „definitivni“ i pogrešno pitanje za neživu dopunu. |
| b2-sich-einschleichen | study.forms | MEDIUM | luna | in + ko? | in + šta? | Za neživu akuzativnu dopunu bosanski upit je „šta?“, ne „ko?“. |
| b2-sich-einschraenken | study.translation | MEDIUM | luna | Ograničite se | Ograničiti se | Infinitiv njemačke natuknice pogrešno je preveden imperativom. |
| b2-sich-einschraenken | study.rektion | MEDIUM | luna | auf + ko? | auf + šta? | Za neživu akuzativnu dopunu bosanski upit je „šta?“, ne „ko?“. |
| b2-sich-einschraenken | study.explanation | MEDIUM | luna | Sich einschränken zahtijeva određeni prijedlog auf + ko?. | Sich einschränken zahtijeva određeni prijedlog auf + šta?. | Za neživu akuzativnu dopunu u bosanskom koristi se pitanje „šta?“, ne „ko?“ |
| b2-sich-einschraenken | study.forms | MEDIUM | luna | auf + ko? | auf + šta? | Za neživu akuzativnu dopunu pravilno je bosansko pitanje „šta?“ |
| b2-sich-empfehlen | study.rektion | MEDIUM | luna | zu + kam? | zu + kome? | Njemačkom dativu zu + wem? u bosanskom odgovara pitanje „kome?“ |
| b2-sich-empfehlen | study.explanation | MEDIUM | luna | Sich empfehlen zahtijeva određeni prijedlog zu + kam?. | Sich empfehlen zahtijeva određeni prijedlog zu + kome?. | Za bosanski dativ standardno pitanje je „kome?“, ne „kam?“ |
| b2-sich-empfehlen | study.forms | MEDIUM | luna | zu + kam? | zu + kome? | Za bosanski dativ pravilno je pitanje „kome?“, ne „kam?“ |
| b2-sich-empören | study.rektion | MEDIUM | luna | über + ko? | über + šta? | Za neživu akuzativnu dopunu u bosanskom koristi se pitanje „šta?“, ne „ko?“ |
| b2-sich-empören | study.explanation | MEDIUM | luna | Sich empören zahtijeva određeni prijedlog über + ko?. | Sich empören zahtijeva određeni prijedlog über + šta?. | Za neživu akuzativnu dopunu pravilno je pitanje „šta?“ |
| b2-sich-empören | study.forms | MEDIUM | luna | über + ko? | über + šta? | Za neživu akuzativnu dopunu pravilno je bosansko pitanje „šta?“ |
| b2-sich-enthalten | study.rektion | MEDIUM | luna | von + kam? | von + čega? | Njemačkom genitivu nakon von u ovom obrascu u bosanskom odgovara pitanje „čega?“ |
| b2-sich-enthalten | study.explanation | MEDIUM | luna | Sich enthalten zahtijeva definitivni prijedlog von + kam?. | Sich enthalten zahtijeva određeni prijedlog von + čega?. | „Definitivni prijedlog“ je neprirodno, a genitivna neživa dopuna traži „čega?“ |
| b2-sich-enthalten | study.forms | MEDIUM | luna | von + kam? | von + čega? | Za bosanski genitiv nežive dopune pravilno je pitanje „čega?“ |
| b2-sich-entledigen | study.rektion | MEDIUM | luna | + posesivni oblik | + genitiv | „Genitiv“ je precizniji naziv padeža od šireg i potencijalno pogrešnog „posvojni oblik“. |
| b2-sich-entledigen | study.explanation | MEDIUM | luna | Sich entledigen se u savremenom njemačkom upotrebljava u posvojnom obliku bez prijedloga. | Sich entledigen se u savremenom njemačkom upotrebljava s genitivom bez prijedloga. | Rekcija se precizno opisuje genitivom, ne posvojnim oblikom. |
| b2-sich-entledigen | study.forms | MEDIUM | luna | + posesivni oblik | + genitiv | Njemačka rekcija se precizno označava nazivom padeža „genitiv“. |
| b2-sich-entrüsten | study.rektion | MEDIUM | luna | über + ko? | über + šta? | Za neživu akuzativnu dopunu u bosanskom koristi se pitanje „šta?“, ne „ko?“ |
| b2-sich-entrüsten | study.explanation | MEDIUM | luna | Sich entrüsten zahtijeva određeni prijedlog über + ko?. | Sich entrüsten zahtijeva određeni prijedlog über + šta?. | Za neživu akuzativnu dopunu pravilno je pitanje „šta?“ |
| b2-sich-entrüsten | study.forms | MEDIUM | luna | über + ko? | über + šta? | Za neživu akuzativnu dopunu pravilno je bosansko pitanje „šta?“ |
| b2-sich-entsinnen | study.rektion | MEDIUM | luna | + posesivni oblik | + genitiv | Njemačka rekcija se preciznije označava nazivom padeža „genitiv“. |
| b2-sich-entsinnen | study.explanation | MEDIUM | luna | Sich entsinnen se koristi u savremenom njemačkom s posvojnim oblikom bez prijedloga, na pr | Sich entsinnen se u savremenom njemačkom koristi s genitivom bez prijedloga, na primjer: I | „Genitiv“ je precizniji gramatički opis od izraza „posvojni oblik“. |
| b2-sich-entsinnen | study.forms | MEDIUM | luna | + posesivni oblik | + genitiv | Njemačka rekcija se precizno označava nazivom padeža „genitiv“. |
| b2-sich-erbarmen | study.rektion | MEDIUM | luna | über + ko? | über + koga? | Uz akuzativnu živu dopunu pitanje je „koga?“, ne „ko?“. |
| b2-sich-erbarmen | study.explanation | MEDIUM | luna | Sich erbarmen zahtijeva određeni prijedlog über + ko?. | Sich erbarmen zahtijeva određeni prijedlog über + koga?. | Za akuzativnu dopunu treba bosansko pitanje „koga?“. |
| b2-sich-erbarmen | study.forms | MEDIUM | luna | über + ko? | über + koga? | Uz akuzativnu dopunu treba pitanje „koga?“. |
| b2-sich-ergeben | study.rektion | MEDIUM | luna | aus + kam? | aus + čega? | Uz „aus“ u značenju „iz čega“ treba pitanje „čega?“. |
| b2-sich-ergeben | study.explanation | MEDIUM | luna | Sich ergeben zahtijeva određeni prijedlog aus + kam?. | Sich ergeben zahtijeva određeni prijedlog aus + čega?. | „Kam?“ je neodgovarajuće pitanje; ovdje treba „čega?“. |
| b2-sich-ergeben | study.forms | MEDIUM | luna | aus + kam? | aus + čega? | Uz „aus“ treba bosansko pitanje „čega?“. |
| b2-sich-erniedrigen | study.translation | MEDIUM | luna | Ponizi se | poniziti se | Trenutni prevod je imperativ, a kartica zahtijeva infinitiv. |
| b2-sich-fuegen | study.explanation | MEDIUM | luna | Sich fügen zahtijeva definitivni prijedlog u + ko?. | Sich fügen zahtijeva određeni prijedlog in + šta?. | U ovoj oznaci treba zadržati njemački prijedlog i upotrijebiti pitanje „šta?“. |
| b2-sich-genieren | study.translation | MEDIUM | luna | Da se stidim | stidjeti se | Trenutni tekst je zavisna rečenica u prvom licu, a treba infinitiv. |
| b2-sich-herausbilden | study.rektion | MEDIUM | luna | zu + kam? | zu + čemu? | Uz „zu“ u ovoj konstrukciji treba bosansko dativno pitanje „čemu?“. |
| b2-sich-herausbilden | study.explanation | MEDIUM | luna | Sich herausbilden zahtijeva određeni prijedlog zu + kam?. | Sich herausbilden zahtijeva određeni prijedlog zu + čemu?. | „Kam?“ nije odgovarajuće bosansko dativno pitanje; treba „čemu?“. |
| b2-sich-herausshalten | study.rektion | MEDIUM | luna | aus + kam? | aus + čega? | Pitanje za dativnu dopunu nije prevedeno na bosanski. |
| b2-hoch-study | study.translation | MEDIUM | luna | Zdravica "živeo!" | Zdravica "živio!" | "Živeo" je ekavski oblik; u ijekavskom bosanskom standardu je "živio". |
| b2-hochwasser | study.tip.leftBlocks[0].text | MEDIUM | luna | Hoch = visoka, Wasser = voda. Hochwasser = visok vodostaj, često znači poplava. | Hoch = visok, Wasser = voda. Hochwasser = visok vodostaj, često znači poplava. | Pridjev uz vodostaj treba biti u muškom rodu: "visok". |
| b2-sofern | study.examples[2].lv | MEDIUM | luna | Pod uslovom lepog vremena idemo u obilazak. | Pod uslovom da vrijeme bude lijepo, idemo na izlet. | Ispravlja ekavizam, nedostatak veznika i neprirodan prijevod ekskurzije. |
| b2-aendern | study.examples[1].lv | MEDIUM | luna | Mozes li promijeniti adresu? | Možeš li promijeniti adresu? | Nedostaju dijakritici u riječi „Možeš“. |
| b2-aendern | study.examples[2].lv | MEDIUM | luna | Menjamo plan. | Mijenjamo svoj plan. | Ispravlja ekavizam „Menjamo“ i vraća izostavljeni posesiv „svoj“. |
| b2-aendern | study.examples[3].lv | MEDIUM | luna | Ja menjam termin. | Ja mijenjam rok. | Ispravlja ekavizam i prirodnije prevodi latvijski izraz za rok. |
| b2-wechseln | study.examples[0].lv | MEDIUM | luna | Menjam školu. | Mijenjam školu. | „Menjam“ je ekavski oblik; bosanski ijekavski oblik je „mijenjam“. |
| b2-wechseln | study.examples[1].lv | MEDIUM | luna | Moram da promenim novac. | Moram da promijenim novac. | Ispravlja ekavizam „promenim“ u bosanski ijekavski oblik. |
| b2-wechseln | study.examples[2].lv | MEDIUM | luna | Menjamo temu. | Mijenjamo temu. | „Menjamo“ je ekavski oblik; bosanski ijekavski oblik je „mijenjamo“. |
| b2-wechseln | study.examples[3].lv | MEDIUM | luna | Menjam školu. | Mijenjam školu. | „Menjam“ je ekavski oblik; bosanski ijekavski oblik je „mijenjam“. |
| b2-wechseln | study.tip | MEDIUM | luna | Promjeniti | Promijeniti | Ispravka ekavskog oblika u ijekavski infinitiv. |
| b2-bieten | study.examples[1].lv | MEDIUM | luna | Mogu li ti ponuditi nešto | Mogu li vam nešto ponuditi? | Formalnom „jums“ odgovara „vam“, a nedostaje upitnik. |
| b2-anbieten | study.explanation | MEDIUM | luna | Glavna ideja: anbieten znači aktivno ponuditi nekome uslugu, piće, posao ili uslugu. Glago | Glavna ideja: anbieten znači aktivno ponuditi nekome pomoć, piće, posao ili uslugu. Glagol | „Uslugu“ je ponovljeno, dok je „pomoć“ izostavljena. |
| b2-anbieten | study.examples[1].lv | MEDIUM | luna | Mogu li ti ponuditi nešto | Mogu li vam nešto ponuditi? | Formalnom „jums“ odgovara „vam“, a nedostaje upitnik. |
| b2-anbieten | study.comparison[0].meaning | MEDIUM | luna | Ponuda (aktivna) | Aktivno nuditi | Značenje glagolske natuknice treba biti izraženo infinitivom, ne imenicom. |
| b2-fordern | study.examples[4].lv | MEDIUM | luna | Zahtijevati • Förden | Zahtijevati • fördern | Njemački glagol je pogrešno napisan kao „Förden“. |
| b2-foerdern | study.important.text | MEDIUM | luna | Förden | Fördern | U njemačkom glagolu nedostaje slovo „r“. |
| b2-sich-verlaufen | study.explanation | MEDIUM | luna | Sich verlaufen znači izgubiti se. Nema fiksni prijedlog. Ne treba mešati sa verlaufenom. | Sich verlaufen znači izgubiti se. Nema ustaljeni prijedlog. Ne treba ga miješati s verlauf | Ispravljeni su ekavizam i neprirodna, gramatički pogrešna deklinacija. |
| b2-Bildbericht-256 | lv | LOW | luna | Foto reportaža | Fotoreportaža | Standardni bosanski pravopis piše ovu složenicu spojeno. |
| b2-Börse-287 | lv | LOW | luna | Berzi | Berza | Rječnička natuknica treba biti u nominativu, a ne u obliku 'berzi'. |
| b2-gedämpft-878 | lv | LOW | luna | Prigušen • Utišan • Prigušen | Kuhan na pari • Prigušen • Utišan | Postoji duplikat, a nedostaje značenje „kuhan na pari“. |
| b2-Gefallen-885 | lv | LOW | luna | Sviđanje • Sviđanje | Sviđanje • Naklonost | Oba prijevoda su ista, a drugo značenje je naklonost ili usluga. |
| b2-Gefecht-888 | lv | LOW | luna | Bitka • Bitka | Bitka • Borba | Drugi prijevod je dupliran umjesto značenja „borba“. |
| b2-Gefüge-890 | lv | LOW | luna | Struktura • Struktura • Veza • Spajanje | Struktura • Ustrojstvo • Veza • Spoj | Prva dva prijevoda su duplirana, a „spoj“ je precizniji od „spajanje“. |
| b2-geläufig-902 | lv | LOW | luna | Poznato • Poznato • Uobičajeno • Tečno • Tečno | Poznat • Poznat • Uobičajen • Tečan • Slobodan | Prijevodi su u srednjem rodu, jedan je dupliran, a „tečno“ se ponavlja. |
| b2-Gemisch-918 | lv | LOW | luna | Mješavina • Mješavina • Mješavina | Mješavina • Smjesa • Miješavina | Sva tri prijevoda su identična umjesto različitih ekvivalenata za Gemisch. |
| b2-Hochachtung-1138 | lv | LOW | luna | Veliko postovanje | Veliko poštovanje | Nedostaje dijakritički znak š u riječi poštovanje. |
| b2-Hochspannung-1141 | lv | LOW | luna | Visokog napona | Visoki napon | Hochspannung je samostalna imenica; prirodan oblik je visoki napon. |
| b2-humanitär-1152 | lv | LOW | luna | Humanitarna | Humanitaran | Izolirani pridjev treba biti u osnovnom muškom rodu. |
| b2-inkompatibel-1159 | lv | LOW | luna | Nekompatibilno | Nekompatibilan | Izolirani pridjev treba biti u muškom rodu, ne u srednjem. |
| b2-Lochkarte-1255 | lv | LOW | luna | Bušene kartice | Bušena kartica | Njemačka natuknica je u jednini, a trenutni prijevod u množini. |
| b2-Löwenpranke-1261 | lv | LOW | luna | Lavlje šape | Lavlja šapa | Pranka je u jednini, ali trenutni prijevod je nepotrebno u množini. |
| b2-Radiobastler-1489 | lv | LOW | luna | Radio amater | Radioamater | Uobičajeni standardni zapis bosanske složenice je spojeno: „radioamater“. |
| b2-unterirdisch-1841 | lv | LOW | luna | Podzemni- | Podzemni | Završna crtica pripada izvornom fragmentu, ali ne bosanskom pridjevu. |
| b2-väterlich-1868 | lv | LOW | luna | Očinski- • Očinski | Očinski • Očinski | Samostalni bosanski pridjev piše se bez završne crtice. |
| b2-sich-entledigen | study.translation | LOW | luna | Osloboditi se • Osloboditi se | Osloboditi se • Riješiti se | Drugi prevod je nepotrebno dupliciran; treba prenijeti drugi izvorni sinonim. |

---

## API usage

| Metrika | Vērtība |
|---|---|
| model | `gpt-5.6-luna` |
| deterministic findings | 96 |
| Luna findings | 976 |
| API requests | 43 |
| successful | 43 |
| failed | 0 |
| retries | 0 |
| input tokens | 129108 |
| cached input tokens | 2996 |
| output tokens | 149521 |
| reasoning tokens | 80232 |
| total tokens | 278629 |
| cost | cost not reliably calculated |

---

## Statuss

**B2 data files changed: 0**

**BS–DE B2 AUDIT FINDINGS VALIDATION = COMPLETE**

Šis NAV QUALITY CYCLE CLOSED, NAV PRODUCTION READY, NAV FINAL – OWNER ACCEPTED.

**NEKO NELABOT. VALIDATION / TRIAGE ONLY.**
