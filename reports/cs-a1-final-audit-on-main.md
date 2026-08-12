# CS–DE A1 FINAL AUDIT ON MAIN

## FINAL STATUS

CS–DE A1 = NOT CLOSED



### Coverage

| Metric | Value |
|---|---|
| production cards | 702 |
| submitted | 702 |
| audited | 702 |
| missing | 0 |
| duplicates | 0 |
| simple batches | 12 |
| study batches | 13 |

### Validated linguistic findings

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 53 |
| MEDIUM | 89 |
| LOW | 18 |

### Validation classification

| Status | Count |
|---|---|
| CONFIRMED_REAL | 160 |
| FALSE_POSITIVE | 42 |
| STALE_ALREADY_FIXED | 46 |
| OWNER_KEEP | 2 |
| OWNER_OVERRIDE_FALSE_POSITIVE | 2 |
| VALID_CONTEXT_DIFFERENCE | 1 |
| CONFIRMED_REPAIR_REGRESSION | 0 |
| NEEDS_OWNER_REVIEW | 0 |

### Structural

MISSING_STUDY_PARITY unique cards = 14

- a1-Besuch-87
- a1-besuchen-89
- a1-bitte
- a1-bitte-study
- a1-ein
- a1-es
- a1-Fußball-218
- a1-ganz-219
- a1-gefallen-225
- a1-Geschichte-233
- a1-Geschwister-234
- a1-Großeltern-251
- a1-Hand-267
- a1-hübsch-288

### Foreign remnants

| Metric | Count |
|---|---|
| raw | 15 |
| REAL | 0 |
| FALSE_POSITIVE | 9 |

### sectionAccents

| Metric | Count |
|---|---|
| raw | 63 |
| REAL | 20 |
| FALSE_POSITIVE | 2 |
| stale | 41 |

### DE integrity

| Metric | Value |
|---|---|
| DE production changes | 0 |
| SOURCE_DE_ISSUE | 0 |
| DE_PARITY_ISSUE | 2 |

### Repair retention

| Metric | Value |
|---|---|
| expected repairs checked | 297 |
| retained | 293 |
| owner_keep | 0 |
| conflicting | 0 |
| card_not_found | 0 |
| reverted | 0 |
| regressions | 0 |

### Technical integrity

| Check | Result |
|---|---|
| cards | 702 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| unexpected production changes | 0 |

### Remaining REAL work

#### MAIN-A1-00066

- **cardId:** a1-Alter-11
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Stáří
- **proposedCs:** Věk
- **reason:** „Stáří“ označuje hlavně pokročilý věk; běžný význam „Alter“ zde odpovídá českému „věk“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00071

- **cardId:** a1-jawohl-299
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Přesně tak
- **proposedCs:** Ano, jistě
- **reason:** „Jawohl“ je důrazné potvrzení, zatímco „Přesně tak“ primárně vyjadřuje shodu s tvrzením.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00072

- **cardId:** a1-malen-391
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Malovat • Malovat
- **proposedCs:** Malovat • Vybarvovat
- **reason:** Duplicitní „Malovat“ nerozlišuje významy kreslit a barvit, které jsou ve zdroji uvedeny odděleně.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00073

- **cardId:** a1-schnell-519
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Rychle
- **proposedCs:** Rychlý • Rychle
- **reason:** „Rychle“ je pouze příslovce; německé „schnell“ má v tomto záznamu také přídavný význam „rychlý“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00074

- **cardId:** a1-unten-614
- **field:** lv
- **severity:** HIGH
- **currentCs:** Na dně
- **proposedCs:** Dole
- **reason:** „Na dně“ označuje dno nádoby či útvaru, nikoli obecnou polohu „dole“ vyjádřenou slovem „unten“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00075

- **cardId:** a1-sich waschen-646
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Umýt se
- **proposedCs:** Mýt se
- **reason:** „Sich waschen“ je nedokonavé; české „umýt se“ vyjadřuje dokončený jednorázový děj.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00076

- **cardId:** a1-an
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Na stěně / na stěně
- **proposedCs:** U zdi / na zdi
- **reason:** Příklad opakuje stejnou variantu a nerozlišuje významy „u zdi“ a „na zdi“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00077

- **cardId:** a1-ab
- **field:** lv
- **severity:** HIGH
- **currentCs:** Z
- **proposedCs:** Od
- **reason:** České „z“ neodpovídá předložce „ab“; její základní český ekvivalent je „od“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00078

- **cardId:** a1-aber
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Ne • Ale
- **proposedCs:** Ne..., ale...
- **reason:** „Ne • Ale“ nevyjadřuje úplnou českou konstrukci odpovídající německému „sondern“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00079

- **cardId:** a1-also
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Proto
- **proposedCs:** Tedy • Takže
- **reason:** V tomto významu „also“ vyjadřuje závěr „tedy“ nebo „takže“, nikoli běžné kauzální „proto“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00081

- **cardId:** a1-also
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Jsi nemocný, tak nechoď do práce.
- **proposedCs:** Jsi nemocný, takže nejdeš do práce.
- **reason:** „Nechoď“ je rozkaz, zatímco německá věta oznamuje, že adresát nejde do práce.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00082

- **cardId:** a1-auch-study
- **field:** study.examples[0].lv
- **severity:** MEDIUM
- **currentCs:** Já jdu taky.
- **proposedCs:** Já také přijdu.
- **reason:** „Jdu“ znamená odcházím nebo kráčím, nikoli přijdu; český překlad mění význam německého „komme“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00085

- **cardId:** a1-aufs
- **field:** study.tip.text
- **severity:** MEDIUM
- **currentCs:** Pamatujte: auf + das → aufs (kde?, kde?).
- **proposedCs:** Pamatujte: auf + das → aufs (kam?).
- **reason:** Studijní tip v produkci chybí; doplnění otázky „kam?“ správně vysvětlí akuzativní směr.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00086

- **cardId:** a1-aufs
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Na svislém povrchu
- **proposedCs:** Na svislý povrch
- **reason:** „An die Wand“ vyjadřuje směr k povrchu, nikoli polohu na něm.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00087

- **cardId:** a1-aufs
- **field:** study.comparison[4].meaning
- **severity:** MEDIUM
- **currentCs:** Komu / u (koho?)
- **proposedCs:** K (někomu/něčemu)
- **reason:** „Zum“ je zkrácené „zu dem“ a označuje směr k někomu nebo něčemu, nikoli „u koho“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00090

- **cardId:** a1-baden
- **field:** lv
- **severity:** HIGH
- **currentCs:** Plavat
- **proposedCs:** Koupat se
- **reason:** „Baden“ znamená koupat se nebo pobývat ve vodě; české „plavat“ odpovídá spíše německému „schwimmen“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00094

- **cardId:** a1-bis
- **field:** study.comparison[2].word
- **severity:** HIGH
- **currentCs:** bis dass
- **proposedCs:** bis jetzt
- **reason:** Produkce uvádí „bis dass“ místo zdrojového výrazu „bis jetzt“, takže obsahuje jinou německou vazbu.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00095

- **cardId:** a1-bis
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Až
- **proposedCs:** Až doteď
- **reason:** „Bis jetzt“ znamená „až dosud“ nebo „doteď“, nikoli samotné české „až“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00096

- **cardId:** a1-bitte
- **field:** study.examples[0].lv
- **severity:** MEDIUM
- **currentCs:** Prosím!
- **proposedCs:** Jeden šálek kávy, prosím.
- **reason:** Produkce zkracuje větu o objednávce kávy na obecné „Prosím!“ a vynechává její hlavní obsah.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00097

- **cardId:** a1-bitte
- **field:** study.examples[2].lv
- **severity:** MEDIUM
- **currentCs:** Jeden šálek kávy, prosím.
- **proposedCs:** Prosím!
- **reason:** Produkce překládá „Bitte schön!“ jako objednávku kávy, takže zaměňuje význam celého příkladu.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00098

- **cardId:** a1-bitte
- **field:** study.important[0]
- **severity:** LOW
- **currentCs:** Bitte je malá písmena – je to zdvořilé slovo, nikoli podstatné jméno.
- **proposedCs:** Bitte se píše s malým písmenem – je to zdvořilostní výraz, nikoli podstatné jméno.
- **reason:** Současná česká věta je gramaticky chybná; správně je „píše se s malým písmenem“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00100

- **cardId:** a1-bitte-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Prosím!
- **proposedCs:** Plní mou prosbu.
- **reason:** Překlad „Prosím!“ odpovídá zdvořilostnímu bitte, nikoli podstatnému jménu Bitte ve větě.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00101

- **cardId:** a1-bitte-study
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Jeden šálek kávy, prosím.
- **proposedCs:** Má dvě prosby.
- **reason:** Současný text překládá jinou větu; Bitten zde znamená prosby nebo žádosti.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00102

- **cardId:** a1-bitte-study
- **field:** study.important[0]
- **severity:** LOW
- **currentCs:** Bitte je malá písmena – je to zdvořilé slovo, nikoli podstatné jméno.
- **proposedCs:** Bitte se píše s malým písmenem – je to zdvořilostní výraz, nikoli podstatné jméno.
- **reason:** Současná česká věta je gramaticky chybná; správně je „píše se s malým písmenem“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00103

- **cardId:** a1-bleiben
- **field:** lv
- **severity:** HIGH
- **currentCs:** Pobyt
- **proposedCs:** Zůstat
- **reason:** „Pobyt“ je podstatné jméno, zatímco bleiben je německý infinitiv slovesa „zůstat“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00104

- **cardId:** a1-bringen
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Přinést / vzít / dodat
- **proposedCs:** Přinést / odnést / dodat
- **reason:** „Vzít“ běžně znamená nehmen, ne bringen; v tomto srovnání má být význam „odnést“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00107

- **cardId:** a1-das
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** To (článek / zájmeno)
- **proposedCs:** To (člen / zájmeno)
- **reason:** V české gramatické terminologii je Artikel „člen“, nikoli „článek“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00108

- **cardId:** a1-das
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Na úrovni A1 je das nejprve studován jako článek středního rodu.
- **proposedCs:** Na úrovni A1 je das nejprve studován jako určitý člen středního rodu.
- **reason:** Pro gramatický termín Artikel je v češtině správné označení „určitý člen“, ne „článek“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00113

- **cardId:** a1-ein
- **field:** lv
- **severity:** HIGH
- **currentCs:** Neurčitý člen • Jeden • Někdo
- **proposedCs:** Neurčitý člen • Jeden
- **reason:** „Někdo“ odpovídá německému jemand, nikoli ein; v hlavním překladu jde o chybný význam.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00114

- **cardId:** a1-eis
- **field:** lv
- **severity:** HIGH
- **currentCs:** Zmrzlina • Zmrzlina
- **proposedCs:** Led • Zmrzlina
- **reason:** Hlavní překlad je duplicitní a vynechává běžný význam Eis = led.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00115

- **cardId:** a1-erst
- **field:** lv
- **severity:** HIGH
- **currentCs:** První • Pouze
- **proposedCs:** Nejprve • Až / teprve
- **reason:** První není příslovce pro nejprve a Pouze nevyjadřuje význam až/teprve.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00116

- **cardId:** a1-erst
- **field:** study.examples[3].lv
- **severity:** MEDIUM
- **currentCs:** Jíme jen v osm.
- **proposedCs:** Jíme až v osm.
- **reason:** Jen v osm vyjadřuje výhradnost, zatímco erst um acht znamená až v osm.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00117

- **cardId:** a1-erst
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** První • Na začátku
- **proposedCs:** Nejprve • Na začátku
- **reason:** Zuerst je zde příslovce a přirozený český překlad je nejprve, nikoli první.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00118

- **cardId:** a1-es
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** To • To • Neosobní podoba
- **proposedCs:** To • Ono • Neosobní podoba
- **reason:** Hlavní překlad obsahuje duplicitní To a chybí běžný osobní význam ono.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00119

- **cardId:** a1-fahren
- **field:** lv
- **severity:** HIGH
- **currentCs:** Řídit • Vést • Odvézt
- **proposedCs:** Jet • Jezdit • Vézt / odvézt
- **reason:** Řídit a vést zužují či posouvají význam fahren; chybí základní význam jet/jezdit.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00120

- **cardId:** a1-fahren
- **field:** study.comparison[0].meaning
- **severity:** LOW
- **currentCs:** Jezdit transportem
- **proposedCs:** Jezdit dopravním prostředkem
- **reason:** Jezdit transportem není přirozená česká kolokace; vhodné je jezdit dopravním prostředkem.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00121

- **cardId:** a1-finden
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Najít • Zvážit
- **proposedCs:** Najít • Myslet si
- **reason:** Zvážit neodpovídá zde významu finden jako vyjádření názoru; vhodné je myslet si.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00122

- **cardId:** a1-finden
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Našel jsi svůj telefon
- **proposedCs:** Zdá se mi to dobré.
- **reason:** Český příklad neodpovídá německé větě a zaměňuje názor za nalezení telefonu.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00123

- **cardId:** a1-finden
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Zdá se mi to dobré.
- **proposedCs:** Co si myslíš o filmu?
- **reason:** Český text neodpovídá otázce na názor na film.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00124

- **cardId:** a1-finden
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Najít / zvážit
- **proposedCs:** Najít / Myslet si
- **reason:** Zvážit není v tomto kontextu vhodný překlad vyjádření názoru pomocí finden.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00125

- **cardId:** a1-finden
- **field:** study.important[1]
- **severity:** MEDIUM
- **currentCs:** Ich finde das gut znamená „považuji to za dobré“, nikoli „považuji to za dobré“.
- **proposedCs:** Ich finde das gut znamená „považuji to za dobré“, nikoli „najdu to dobře“.
- **reason:** Vysvětlení opakuje stejný překlad na obou stranách a neuvádí chybný význam najdu to dobře.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00126

- **cardId:** a1-frau
- **field:** study.important[1]
- **severity:** LOW
- **currentCs:** Meine Frau = moje žena (nikoli 'moje žena').
- **proposedCs:** Meine Frau = moje žena.
- **reason:** Poznámka uvádí jako správný i chybný překlad totožné znění, takže postrádá smysluplný kontrast.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00127

- **cardId:** a1-fuer
- **field:** study.examples[1].lv
- **severity:** MEDIUM
- **currentCs:** Děkuji za vaši pomoc.
- **proposedCs:** Děkuji za pomoc.
- **reason:** Český překlad přidává přivlastnění vaši, které v německé větě není.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00128

- **cardId:** a1-fuer
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Koupím dárek pro maminku.
- **proposedCs:** Kupuji dárek pro maminku.
- **reason:** Koupím vyjadřuje budoucnost, zatímco německý prézens zde odpovídá českému Kupuji.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00129

- **cardId:** a1-geben
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Dej mi knihu prosím
- **proposedCs:** Dej mi prosím knihu.
- **reason:** Chybí čárka u vsuvky „prosím“ a přirozenější je její umístění před předmětem.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00130

- **cardId:** a1-geben
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Vzít / vzít
- **proposedCs:** Brát / vzít
- **reason:** Obě varianty jsou totožné a neposkytují studentovi rozdíl mezi nedokonavým a dokonavým významem.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00131

- **cardId:** a1-geben
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Přijímat / dostávat
- **proposedCs:** Dostat / obdržet
- **reason:** „Přijímat“ označuje aktivní přijímání; pro bekommen je zde přesnější „dostat“ nebo „obdržet“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00132

- **cardId:** a1-gleich
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Hned • Rovný
- **proposedCs:** Hned • Stejný
- **reason:** V uvedeném významu gleich znamená „stejný“, nikoli „rovný“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00133

- **cardId:** a1-gleich
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Gleich = okamžitě (čas) NEBO rovno (srovnání).
- **proposedCs:** Gleich = hned (čas) NEBO stejný (srovnání).
- **reason:** „Rovno“ je příslovce a neodpovídá zde významu přídavného jména gleich.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00134

- **cardId:** a1-gleich
- **field:** study.tip[0]
- **severity:** LOW
- **currentCs:** Za chvíli (za chvíli) → hned.
- **proposedCs:** Za chvíli → hned.
- **reason:** Závorka opakuje stejný výraz a představuje zbytečnou duplicitu.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00135

- **cardId:** a1-gross-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Dům je velký.
- **proposedCs:** Berlín je velké město.
- **reason:** Česká věta neodpovídá německému originálu a opakuje význam jiné věty.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00136

- **cardId:** a1-gut-study
- **field:** study.important[2]
- **severity:** HIGH
- **currentCs:** Guten Tag/Morgen/Abend - střevní změny končící po skloňování.
- **proposedCs:** Guten Tag/Morgen/Abend – tvarové změny s koncovkou -en po skloňování.
- **reason:** „Střevní změny“ je zjevný významový překlep; text má vysvětlovat tvarové změny a koncovku.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00138

- **cardId:** a1-haben
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Přijímat
- **proposedCs:** Dostat
- **reason:** V tomto příkladu bekommen znamená „dostat“, nikoli obecně „přijímat“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00139

- **cardId:** a1-haben
- **field:** study.important[2]
- **severity:** LOW
- **currentCs:** Dokonalé: Ich habe gelernt = naučil jsem se.
- **proposedCs:** Perfektum: Ich habe gelernt = naučil jsem se.
- **reason:** „Dokonalé“ není běžný ani přesný český název německého času Perfekt.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00140

- **cardId:** a1-heißen
- **field:** lv
- **severity:** HIGH
- **currentCs:** Být nazýván • Podlý
- **proposedCs:** Jmenovat se • Znamenat
- **reason:** „Podlý“ je chybný význam slova heißen; správně jde o jmenování se nebo znamenání.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00141

- **cardId:** a1-heißen
- **field:** study.comparison[3].meaning
- **severity:** MEDIUM
- **currentCs:** Volat / volat
- **proposedCs:** Volat / zavolat
- **reason:** Obě varianty jsou totožné a nerozlišují nedokonavý a dokonavý význam slovesa rufen.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00142

- **cardId:** a1-heißen
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Wie heißt du? znamená "Jak se jmenuješ?", ne doslova "jak se jmenuješ?".
- **proposedCs:** Wie heißt du? znamená „Jak se jmenuješ?“.
- **reason:** Text nesmyslně uvádí stejnou českou větu jako správný i doslovný údajně nesprávný překlad.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00146

- **cardId:** a1-hoch-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Police je vysoká dva metry.
- **proposedCs:** Hora je vysoká.
- **reason:** Český překlad popisuje polici, zatímco německá věta mluví o hoře.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00147

- **cardId:** a1-hoch-study
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: Vysoká svisle, úroveň nebo výška.
- **proposedCs:** Hlavní myšlenka: Vysoký ve svislém směru, na úrovni nebo do výšky.
- **reason:** Současná formulace je gramaticky i významově nejasná a spojení „vysoká svisle“ není přirozené.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00148

- **cardId:** a1-ihr
- **field:** lv
- **severity:** HIGH
- **currentCs:** Vy • Ji
- **proposedCs:** Vy • Jí • Její
- **reason:** „Ji“ je nesprávný pád a překlad vynechává přivlastňovací význam „její“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00149

- **cardId:** a1-ihr
- **field:** study.tip[1]
- **severity:** MEDIUM
- **currentCs:** Kontrola: Habt ihr...? / Kommt ihr...? = ty • Ich gebe ihr... / ihr Buch = pro ni/její.
- **proposedCs:** Kontrola: Habt ihr...? / Kommt ihr...? = vy • Ich gebe ihr... / ihr Buch = jí/její.
- **reason:** V kontextu „Habt ihr?“ znamená ihr „vy“ a v „Ich gebe ihr“ znamená „jí“, nikoli „ty“ a „ji“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00150

- **cardId:** a1-ihr
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Ihr = vy (adresa několika) NEBO její (dativ) NEBO její (přivlastňovací) – v závislosti na kontextu.
- **proposedCs:** Ihr = vy (oslovení více lidí) NEBO jí (dativ) NEBO její (přivlastňovací) – v závislosti na kontextu.
- **reason:** Český dativ zájmena ona je „jí“, zatímco „její“ je přivlastňovací tvar.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00151

- **cardId:** a1-ins
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** V • Do • Kam?
- **proposedCs:** Do • Kam?
- **reason:** Ins vyjadřuje směr dovnitř a v češtině se zde překládá jako „do“, ne jako polohové „v“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00152

- **cardId:** a1-ins
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** V • Do • Kam?
- **proposedCs:** Do • Kam?
- **reason:** Hlavní překlad obsahuje polohové „v“, přestože ins označuje pohyb do něčeho.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00153

- **cardId:** a1-ins
- **field:** study.comparison[2].meaning
- **severity:** LOW
- **currentCs:** V / do (s nezávislým článkem)
- **proposedCs:** V / do (se samostatným členem)
- **reason:** V české gramatické terminologii je německý Artikel „člen“, nikoli „článek“; formulace je proto terminologicky chybná.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00154

- **cardId:** a1-jung
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Mladý (o lidech)
- **proposedCs:** Mladý (o věku)
- **reason:** Jung se může vztahovat k věku lidí i zvířat; doplněk „o lidech“ význam nepřiměřeně zužuje.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00157

- **cardId:** a1-kein
- **field:** lv
- **severity:** HIGH
- **currentCs:** Nikdo • Nic
- **proposedCs:** Žádný • Žádná • Žádné
- **reason:** Kein je záporný člen a podle kontextu znamená „žádný/žádná/žádné“, ne obecně „nikdo“ nebo „nic“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00159

- **cardId:** a1-kennen-study
- **field:** study.examples[2].lv
- **severity:** MEDIUM
- **currentCs:** Kde jste se potkali?
- **proposedCs:** Kde jste se poznali?
- **reason:** Kennengelernt znamená seznámit se nebo poznat se; „potkali“ nevyjadřuje tento význam dostatečně přesně.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00160

- **cardId:** a1-wissen-study
- **field:** study.examples[1].lv
- **severity:** MEDIUM
- **currentCs:** Jak to víš?
- **proposedCs:** Jak to víte?
- **reason:** Německé Sie vyžaduje zdvořilý český plurál „víte“, nikoli neformální singulár „víš“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00161

- **cardId:** a1-können
- **field:** study.sectionAccents.examples[1].lv.purple[0]
- **severity:** LOW
- **currentCs:** Můžete
- **proposedCs:** Můžeš
- **reason:** Zvýrazněné „Můžete“ neodpovídá německému neformálnímu „Kannst du“ ani českému překladu věty.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00162

- **cardId:** a1-kosten
- **field:** lv
- **severity:** HIGH
- **currentCs:** Platit
- **proposedCs:** Stát
- **reason:** Kosten ve významu ceny znamená česky „stát“, nikoli „platit“ jako provádět platbu.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00163

- **cardId:** a1-kosten
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** České slovo platit je v tomto kontextu správné: Das kostet 5 Euro. = Stojí 5 eur.
- **proposedCs:** České slovo stát je v tomto kontextu správné: Das kostet 5 Euro. = Stojí 5 eur.
- **reason:** V uvedené větě je správným českým ekvivalentem německého kosten sloveso „stát“, nikoli „platit“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00164

- **cardId:** a1-kosten
- **field:** study.sectionAccents.comparison[0].meaning.purple[0]
- **severity:** LOW
- **currentCs:** Zaplatit
- **proposedCs:** Stát
- **reason:** „Zaplatit“ znamená provést platbu, nikoli stát o ceně; zvýraznění neodpovídá významu pole.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00165

- **cardId:** a1-laden-study
- **field:** lv
- **severity:** HIGH
- **currentCs:** Nakupovat
- **proposedCs:** Obchod
- **reason:** Velké německé „Laden“ je podstatné jméno „obchod“, takže české „Nakupovat“ má nesprávný význam.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00166

- **cardId:** a1-laden-study
- **field:** study.examples[3].lv
- **severity:** MEDIUM
- **currentCs:** Potřebuji nabít telefon.
- **proposedCs:** Musím nabít telefon.
- **reason:** „Müssen“ vyjadřuje nutnost; „Potřebuji“ zde význam oslabuje a není přesným překladem.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00167

- **cardId:** a1-land
- **field:** lv
- **severity:** HIGH
- **currentCs:** Země • Země
- **proposedCs:** Země • Venkov
- **reason:** Dva stejné významy opakují „Země“ a chybí význam „venkov“, který je pro „Land“ relevantní.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00168

- **cardId:** a1-land
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: das Land nejčastěji znamená zemi nebo pozemek za městem.
- **proposedCs:** Hlavní myšlenka: das Land nejčastěji znamená zemi nebo venkov.
- **reason:** V uvedeném kontextu „das Land“ označuje venkov; „pozemek za městem“ je zde zavádějící.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00170

- **cardId:** a1-lang
- **field:** lv
- **severity:** HIGH
- **currentCs:** Dlouhý • Dlouhý
- **proposedCs:** Dlouhý • Dlouho
- **reason:** Druhý význam „lang“ je příslovce „dlouho“, nikoli opakování přídavného jména „dlouhý“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00172

- **cardId:** a1-lang
- **field:** study.tip[1]
- **severity:** MEDIUM
- **currentCs:** O čase (den, čekání, film) → dlouhý.
- **proposedCs:** O čase (den, film) → dlouhý; o trvání (čekání) → dlouho.
- **reason:** Ve spojení „dlouho čekám“ je „lange“ příslovce; tip nesprávně uvádí přídavné jméno „dlouhý“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00174

- **cardId:** a1-lassen
- **field:** lv
- **severity:** HIGH
- **currentCs:** Opustit • Nechat
- **proposedCs:** Nechat • Dovolit
- **reason:** Pro výukový význam „lassen“ jsou zde vhodnější „nechat“ a „dovolit“; „opustit“ mate se slovem „verlassen“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00177

- **cardId:** a1-legen
- **field:** study.sectionAccents.examples[0].lv.purple[0]
- **severity:** LOW
- **currentCs:** Položil
- **proposedCs:** Pokládám
- **reason:** Německý příklad je v přítomném čase, ale zvýraznění „Položil“ je minulý čas.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00178

- **cardId:** a1-mal
- **field:** lv
- **severity:** HIGH
- **currentCs:** Krát • Případ
- **proposedCs:** Případ • Opakování
- **reason:** „Krát“ není samostatný český význam slova „Mal“; jde o význam případu nebo opakování.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00179

- **cardId:** a1-mal
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Krát • Případ
- **proposedCs:** Případ • Opakování
- **reason:** „Krát“ není samostatný český význam slova „Mal“; jde o význam případu nebo opakování.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00180

- **cardId:** a1-mal
- **field:** study.tip.text
- **severity:** MEDIUM
- **currentCs:** Pamatujte: das Mal = krát/případ (podstatné jméno) • mal bez členu = hovorová částice.
- **proposedCs:** Pamatujte: das Mal = případ / opakování • mal bez členu = hovorová částice.
- **reason:** „Krát“ je chybný český překlad; německé Mal zde znamená případ nebo opakování.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00182

- **cardId:** a1-morgen
- **field:** study.explanation
- **severity:** MEDIUM
- **currentCs:** ["Hlavní myšlenka: Příslovce času je malé. Znamená další den – zítra.","Morgen hlavně znamená: druhý den.","Často charakterizováno: počasím.","Morgen především znamená: část dne.","Často popisuje: podstatné jméno (der).","Morgen v podstatě znamená: několik ran.","Často charakterizováno: podstatné jméno (pl.).","Morgen s malým počátečním písmenem znamená „zítra“ (Ich komme morgen = Přijdu zítra, Bis morgen!)."]
- **proposedCs:** Hlavní myšlenka: morgen s malým písmenem znamená zítra.,Morgen s velkým písmenem je podstatné jméno a znamená ráno.,Nezaměňujte morgen ve větě Ich komme morgen s Morgen ve spojení Guten Morgen!.,Ich komme morgen = Přijdu zítra. Guten Morgen! = Dobré ráno!
- **reason:** Výklad obsahuje nesouvisející tvrzení „několik ran“ a chybně míchá významy morgen a Morgen.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00184

- **cardId:** a1-morgen-study
- **field:** study.explanation
- **severity:** MEDIUM
- **currentCs:** ["Hlavní myšlenka: Podstatné jméno se členem se hodí a je velké. Denní část – dopoledne.","Der Morgen hlavně znamená ráno, tedy část dne.","Často charakterizováno: počasím.","Der Morgen primárně znamená: část dne.","Často popisuje: podstatné jméno (der).","Der Morgen v podstatě znamená: několik ran.","Často charakterizováno: podstatné jméno (pl.).","Morgen s malým počátečním písmenem znamená zítra - pozítří (Ich komme morgen = přijdu zítra, Bis morgen!"]
- **proposedCs:** Hlavní myšlenka: Der Morgen je podstatné jméno, které znamená ráno.,Používá se s velkým písmenem: der Morgen, am Morgen.,Nezaměňujte ho s morgen s malým písmenem, které znamená zítra.,Guten Morgen! = Dobré ráno! Ich komme morgen = Přijdu zítra.
- **reason:** Výklad chybně uvádí „několik ran“ a nesprávně rozšiřuje význam malého morgen na „zítra – pozítří“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00185

- **cardId:** a1-müssen
- **field:** lv
- **severity:** HIGH
- **currentCs:** Musit
- **proposedCs:** Muset
- **reason:** Český infinitiv slovesa müssen je „muset“, nikoli nesprávný tvar „musit“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00186

- **cardId:** a1-müssen
- **field:** study.sectionAccents.examples[1].lv.purple[0]
- **severity:** MEDIUM
- **currentCs:** Musíte
- **proposedCs:** Musíš
- **reason:** Du musst je 2. osoba jednotného čísla, proto český překlad musí být „musíš“, ne „musíte“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00188

- **cardId:** a1-nach
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** V / na místo s článkem
- **proposedCs:** Do / v nebo na místo s členem
- **reason:** „Článkem“ je zde chybný český gramatický termín; německý výraz se používá s členem.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00189

- **cardId:** a1-nehmen
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: nehmen znamená vzít nebo vzít.
- **proposedCs:** Hlavní myšlenka: nehmen znamená brát nebo vzít.
- **reason:** Výklad opakuje „vzít“ a neuvádí běžný nedokonavý protějšek „brát“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00190

- **cardId:** a1-nehmen
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** Holen znamená jít za a aportovat/vzít.
- **proposedCs:** Holen znamená jít pro něco nebo někoho vyzvednout a přinést.
- **reason:** Český popis slovesa holen chybně uvádí „jít za“ a „aportovat/vzít“ místo jít pro někoho či něco a přinést.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00191

- **cardId:** a1-nehmen
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: vezměte si pro sebe → nehmen • Někoho přivést → přivést.
- **proposedCs:** Pamatujte: vezměte si něco pro sebe → nehmen • přineste něco někomu → bringen.
- **reason:** Druhá část nesprávně používá český překlad místo německého slovesa bringen a mění význam přinést na přivést.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00192

- **cardId:** a1-nehmen
- **field:** study.sectionAccents.examples[2].lv.red[0]
- **severity:** MEDIUM
- **currentCs:** Přinesl
- **proposedCs:** Přináším
- **reason:** Překlad německého tvaru bringe je v přítomném čase „Přináším“, nikoli minulý čas „Přinesl“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00193

- **cardId:** a1-nehmen
- **field:** study.sectionAccents.examples[2].lv.yellow[0]
- **severity:** MEDIUM
- **currentCs:** Přinesl
- **proposedCs:** knihu
- **reason:** Německé Buch znamená „knihu“; současný překlad „Přinesl“ je chybný a opakuje jinou část věty.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00194

- **cardId:** a1-nehmen
- **field:** study.sectionAccents.examples[3].lv.red[0]
- **severity:** MEDIUM
- **currentCs:** Vezmu
- **proposedCs:** Vyzvednu
- **reason:** Tvar hole dich ab v daném příkladu znamená „vyzvednu tě“, nikoli obecné „vezmu“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00195

- **cardId:** a1-nehmen
- **field:** study.sectionAccents.examples[3].lv.green[0]
- **severity:** MEDIUM
- **currentCs:** Vezmu
- **proposedCs:** tě
- **reason:** The highlighted Czech text does not correspond to German “dich”; the correct equivalent is “tě”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00196

- **cardId:** a1-neu
- **field:** study.examples[6].lv
- **severity:** LOW
- **currentCs:** Co je nového
- **proposedCs:** Co je nového?
- **reason:** The Czech question is missing its closing question mark.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00197

- **cardId:** a1-neu
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Neu popisuje věci a zprávy, ani věk člověka nebo zvířete.
- **proposedCs:** Neu popisuje věci a zprávy, ne věk člověka nebo zvířete.
- **reason:** “Ani” is incorrect in this affirmative contrast; the sentence requires “ne”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00198

- **cardId:** a1-neu
- **field:** study.sectionAccents.examples[0].lv.purple[0]
- **severity:** MEDIUM
- **currentCs:** Můj
- **proposedCs:** nový
- **reason:** The highlighted Czech word “Můj” does not express German “neu”; it should be “nový”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00199

- **cardId:** a1-neu
- **field:** study.sectionAccents.examples[1].lv.purple[0]
- **severity:** MEDIUM
- **currentCs:** Máme
- **proposedCs:** nové
- **reason:** The highlighted Czech word “Máme” does not correspond to German “neues”; the correct word is “nové”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00200

- **cardId:** a1-noch-study
- **field:** study.sectionAccents.examples[0].lv.purple[0]
- **severity:** MEDIUM
- **currentCs:** Jsem
- **proposedCs:** pořád
- **reason:** The highlighted Czech word “Jsem” does not translate German “noch”; the intended equivalent is “pořád”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00203

- **cardId:** a1-ob
- **field:** study.sectionAccents.comparison[0].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Nebo
- **proposedCs:** Zda
- **reason:** In an indirect question, German “ob” means “zda/jestli”, not “nebo”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00204

- **cardId:** a1-ob
- **field:** study.sectionAccents.comparison[0].meaning.purple[1]
- **severity:** HIGH
- **currentCs:** Nebo
- **proposedCs:** jestli
- **reason:** The highlighted meaning of German “ob” is incorrect; “jestli” is the appropriate Czech equivalent.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00206

- **cardId:** a1-oder
- **field:** study.sectionAccents.examples[0].lv.yellow[1]
- **severity:** MEDIUM
- **currentCs:** Káva
- **proposedCs:** čaj
- **reason:** German “Tee” corresponds to Czech “čaj”, not “Káva”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00207

- **cardId:** a1-oder
- **field:** study.sectionAccents.comparison[1].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Nebo
- **proposedCs:** Zda
- **reason:** In an indirect question, German “ob” means “zda/jestli”, not “nebo”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00208

- **cardId:** a1-oder
- **field:** study.sectionAccents.comparison[1].meaning.purple[1]
- **severity:** HIGH
- **currentCs:** Nebo
- **proposedCs:** jestli
- **reason:** The highlighted Czech meaning for German “ob” is incorrect; “jestli” is appropriate.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00209

- **cardId:** a1-passen
- **field:** study.sectionAccents.comparison[0].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Fit
- **proposedCs:** Pasovat
- **reason:** “Fit” is an unsuitable anglicism for this Czech teaching gloss; “Pasovat” correctly represents German “passen”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00210

- **cardId:** a1-passen
- **field:** study.sectionAccents.comparison[1].meaning.purple[0]
- **severity:** MEDIUM
- **currentCs:** Stát
- **proposedCs:** Slušet
- **reason:** V kontextu oblečení znamená passen „slušet“, nikoli pouze „stát“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00211

- **cardId:** a1-passen
- **field:** study.sectionAccents.comparison[3].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Provozovat
- **proposedCs:** Fungovat
- **reason:** Funktionieren znamená „fungovat“; „provozovat“ má jiný, přechodný význam.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00212

- **cardId:** a1-probieren
- **field:** study.examples[3].lv
- **severity:** MEDIUM
- **currentCs:** Můžu zkusit bundu
- **proposedCs:** Můžu si tu bundu vyzkoušet?
- **reason:** U zkoušení oblečení český překlad přirozeně vyžaduje zvratné „si“ a vhodnější sloveso „vyzkoušet“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00213

- **cardId:** a1-probieren
- **field:** study.comparison[3].meaning
- **severity:** MEDIUM
- **currentCs:** Vyzkoušet
- **proposedCs:** Vyzkoušet si (oblečení)
- **reason:** Samotné „vyzkoušet“ nerozlišuje zkoušení oblečení od obecného probieren.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00215

- **cardId:** a1-sagen-study
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Mluvit (jazyk, mluvit)
- **proposedCs:** Mluvit (jazykem, hovořit)
- **reason:** Po slovese „mluvit“ je správný instrumentál „jazykem“ a opakování slovesa je nevhodné.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00216

- **cardId:** a1-schauen-study
- **field:** lv
- **severity:** HIGH
- **currentCs:** Hodinky
- **proposedCs:** Dívat se
- **reason:** „Hodinky“ je české podstatné jméno a neodpovídá německému slovesu schauen.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00218

- **cardId:** a1-schwimmen
- **field:** study.important[1]
- **severity:** LOW
- **currentCs:** česky se často říká „plavat“, ale v němčině musíte zkontrolovat, zda jde o pohyb nebo koupání.
- **proposedCs:** Česky se často říká „plavat“, ale v němčině musíte zkontrolovat, zda jde o pohyb nebo koupání.
- **reason:** Samostatná česká položka má začínat velkým písmenem.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00223

- **cardId:** a1-sich
- **field:** study.examples[2].lv
- **severity:** MEDIUM
- **currentCs:** Je šťastná.
- **proposedCs:** Má radost.
- **reason:** Freut sich vyjadřuje radost z něčeho, zatímco „je šťastná“ popisuje obecnější stav.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00224

- **cardId:** a1-sich
- **field:** study.sectionAccents.examples[0].lv.purple[0]
- **severity:** HIGH
- **currentCs:** Koupe
- **proposedCs:** Myje
- **reason:** „Koupe“ znamená, že někdo koupe jinou osobu; wäscht sich znamená „myje se“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00225

- **cardId:** a1-sicher
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Přijdeš zítra - určitě!
- **proposedCs:** Přijdeš zítra – určitě!
- **reason:** V českém textu je mezi replikami vhodná pomlčka, nikoli spojovník.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00226

- **cardId:** a1-sie-study-2
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: Zdvořilostní adresa - vždy s velkým S. Latviski: vy. Často se slovesem v množném čísle.
- **proposedCs:** Hlavní myšlenka: Zdvořilostní oslovení – vždy s velkým S. Česky: vy. Často se slovesem v množném čísle.
- **reason:** Text obsahuje latvský remnant „Latviski“ a typograficky nevhodný spojovník místo pomlčky.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00227

- **cardId:** a1-sitzen
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Spát / ležet
- **proposedCs:** Ležet
- **reason:** „Liegen“ znamená „ležet“; přidané „spát“ je nesprávný význam a může vést k chybnému rozlišení sloves.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00229

- **cardId:** a1-sollen
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** By měl
- **proposedCs:** Měl by
- **reason:** Jako samostatný český překlad je přirozené pořadí „měl by“, nikoli neúplně působící „by měl“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00230

- **cardId:** a1-sollen
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** By měl
- **proposedCs:** Měl by
- **reason:** Jako samostatný český překlad je přirozené pořadí „měl by“, nikoli neúplně působící „by měl“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00231

- **cardId:** a1-sollen
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Musit / být nutné
- **proposedCs:** Muset / být nutné
- **reason:** Správný infinitiv českého slovesa je „muset“, nikoli „musit“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00233

- **cardId:** a1-stehen
- **field:** study.examples[1].lv
- **severity:** MEDIUM
- **currentCs:** Židle je v kuchyni.
- **proposedCs:** Židle stojí v kuchyni.
- **reason:** V kontrastu se stehen/liegen obecné „je“ zamlčuje význam „stojí“ a oslabuje učební cíl příkladu.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00234

- **cardId:** a1-stehen
- **field:** study.examples[3].lv
- **severity:** MEDIUM
- **currentCs:** Kniha je na stole.
- **proposedCs:** Kniha leží na stole.
- **reason:** V kontrastním příkladu má být význam německého liegen vyjádřen konkrétně jako „ležet“, ne pouze obecným „být“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00235

- **cardId:** a1-stehen
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Spát / ležet
- **proposedCs:** Ležet
- **reason:** „Liegen“ znamená „ležet“; „spát“ je zde nesprávný význam.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00237

- **cardId:** a1-über
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Přes • Pro
- **proposedCs:** Nad • O • Přes
- **reason:** „Pro“ není zde vhodný základní překlad über a současně chybí běžné významy „nad“ a „o“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00238

- **cardId:** a1-über
- **field:** study.comparison[3].meaning
- **severity:** MEDIUM
- **currentCs:** Z / asi z nějakého zdroje
- **proposedCs:** Z / od
- **reason:** „Von“ zde znamená „z“ nebo „od“; „asi“ je chybný významový doplněk.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00239

- **cardId:** a1-um
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Kolem • Hodiny
- **proposedCs:** Kolem • V (čas) • Aby
- **reason:** „Hodiny“ není překlad předložky um; chybí časový význam „v“ a účelový význam „aby“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00240

- **cardId:** a1-um
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Kolem • Hodiny
- **proposedCs:** Kolem • V (čas) • Aby
- **reason:** „Hodiny“ není překlad předložky um; chybí časový význam „v“ a účelový význam „aby“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00241

- **cardId:** a1-um
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** V / kolem / do
- **proposedCs:** V / kolem / aby
- **reason:** Účelové um ... zu se překládá „aby“, nikoli „do“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00242

- **cardId:** a1-um
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Za den / v
- **proposedCs:** V (den) / u
- **reason:** Ve spojení am Montag znamená am „v“, nikoli „za den“; druhý význam „u“ je kontextově správný.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00243

- **cardId:** a1-um
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Kolem času / vs
- **proposedCs:** Kolem času / proti
- **reason:** „Vs“ není české označení významu a v tomto kontrastu má být uvedeno „proti“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00244

- **cardId:** a1-um
- **field:** study.tip.text
- **severity:** MEDIUM
- **currentCs:** Pamatujte: um acht = osm hodin.
- **proposedCs:** Pamatujte: um acht = v osm.
- **reason:** Český časový výraz vyžaduje předložku „v“: „um acht“ znamená „v osm“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00245

- **cardId:** a1-unter
- **field:** study.examples[1].lv
- **severity:** MEDIUM
- **currentCs:** Kočka spí pod židlí.
- **proposedCs:** Kočka leží pod židlí.
- **reason:** „Liegen“ znamená ležet; české „spí“ mění význam německé věty.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00250

- **cardId:** a1-was
- **field:** study.tip[0]
- **severity:** HIGH
- **currentCs:** Was samo o sobě se nemění - v němčině je to vždy bylo • V češtině vyberte koho nebo co podle části věty.
- **proposedCs:** Was samo o sobě se nemění – v němčině má vždy stejný tvar • V češtině vyberte „kdo“ nebo „co“ podle části věty.
- **reason:** Text obsahuje chybný a zavádějící český převod „vždy bylo“; vysvětlení má popsat neměnný německý tvar.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00251

- **cardId:** a1-was
- **field:** study.tip[1]
- **severity:** HIGH
- **currentCs:** Rychlý trik: pokud lze na otázku odpovědět „Je to...“, použijte kdo • Pokud je odpověď za slovesem jako doplněk, použijte ko.
- **proposedCs:** Rychlý trik: pokud lze na otázku odpovědět „Je to…“, použijte co • Pokud je was po slovese jako předmět, použijte co.
- **reason:** Text používá slovenské „ko“ a nesprávně doporučuje „kdo“ pro věci; v češtině je zde „co“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00252

- **cardId:** a1-was
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Byl dotazován na věci, události a fakta – nikdy na osoby.
- **proposedCs:** Ptá se na věci, události a fakta – nikdy na osoby.
- **reason:** Pasivní minulý opis „Byl dotazován“ je zde gramaticky i významově nevhodný; text popisuje funkci slova obecně.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00253

- **cardId:** a1-was
- **field:** study.important[3]
- **severity:** HIGH
- **currentCs:** Špatně: Wer ist passiert? → Správně: Bylo to passiert?
- **proposedCs:** Špatně: Wer ist passiert? → Správně: Was ist passiert?
- **reason:** Příklad je v produkci jazykově smíšený a obsahuje české „Bylo to“ místo německého „Was ist“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00254

- **cardId:** a1-wer
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** Ptali se na lidi, ne na věci nebo události.
- **proposedCs:** Ptá se na lidi, ne na věci nebo události.
- **reason:** Minulý čas „Ptali se“ neodpovídá obecnému výkladu významu zájmena wer v přítomném čase.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00255

- **cardId:** a1-wer
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Věci a události jsou žádány s was, ne wer.
- **proposedCs:** Na věci a události se ptáme pomocí was, ne wer.
- **reason:** „Věci a události jsou žádány“ je nepřirozený doslovný překlad; čeština zde vyžaduje vazbu „ptát se na“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00257

- **cardId:** a1-wer
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Ptali jsme se pouze na osoby, nikdy ne na věci.
- **proposedCs:** Ptáme se pouze na osoby, nikdy ne na věci.
- **reason:** Minulý čas „Ptali jsme se“ neodpovídá obecnému tvrzení o použití zájmena wer.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00258

- **cardId:** a1-wer
- **field:** study.important[3]
- **severity:** HIGH
- **currentCs:** Špatně: Wer ist passiert? → Správně: Bylo to passiert?
- **proposedCs:** Špatně: Wer ist passiert? → Správně: Was ist passiert?
- **reason:** Příklad je v produkci jazykově smíšený a obsahuje české „Bylo to“ místo německého „Was ist“.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00261

- **cardId:** a1-wetter
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Povídejte si o počasí v přírodě s dasem Wetterem: Wie ist das Wetter heute?
- **proposedCs:** O počasí se mluví s výrazem das Wetter: Wie ist das Wetter heute?
- **reason:** „s dasem Wetterem“ je chybná a nepřirozená konstrukce; německý výraz má být uveden jako das Wetter.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00262

- **cardId:** a1-wetter
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** Das Wetter se často používá ve větě spolu se slovy jako teplý nebo kalt.
- **proposedCs:** Das Wetter se často používá ve větě spolu se slovy jako warm nebo kalt.
- **reason:** Text míchá české „teplý“ s německým „kalt“; příklady německých slov mají být jazykově konzistentní.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00266

- **cardId:** a1-zu
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** V konstrukci zu + neurčito pomáhá tvořit neurčito: zu lernen, zu gehen.
- **proposedCs:** V konstrukci zu + infinitiv se zu používá před infinitivem: zu lernen, zu gehen.
- **reason:** „Neurčito“ není správný český gramatický termín; německé označení je infinitiv.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00268

- **cardId:** a1-zum
- **field:** lv
- **severity:** HIGH
- **currentCs:** Do • At
- **proposedCs:** K • Ke
- **reason:** Current Czech contains English “At” and does not correctly translate German zum.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00270

- **cardId:** a1-zum
- **field:** study.important[3]
- **severity:** MEDIUM
- **currentCs:** Nezaměňovat s bei (nachází se na) nebo nach (do měst bez článku).
- **proposedCs:** Nezaměňovat s bei (nachází se u) nebo nach (do měst bez článku).
- **reason:** For the intended location meaning of bei, Czech “u” is correct; “na” is misleading here.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00271

- **cardId:** a1-fernsehen
- **field:** study.comparison[1].meaning
- **severity:** LOW
- **currentCs:** Televize (média)
- **proposedCs:** Televize (médium)
- **reason:** Das Fernsehen refers to television as a medium; the plural “média” is broader and semantically inaccurate.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00273

- **cardId:** a1-essen-study
- **field:** lv
- **severity:** HIGH
- **currentCs:** Jídlo • Jídlo
- **proposedCs:** Jídlo • Pokrm
- **reason:** The two Czech meanings are identical, omitting the distinct meaning “pokrm”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00278

- **cardId:** a1-ferien
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Die Ferien v podstatě znamená: školní prázdniny.
- **proposedCs:** Die Ferien v podstatě znamenají: školní prázdniny.
- **reason:** Ferien is plural, so the Czech verb must be plural: “znamenají”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00279

- **cardId:** a1-ferien
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Často charakterizováno: pouze množné číslo.
- **proposedCs:** Často charakterizovány: pouze množné číslo.
- **reason:** The participle must agree with the plural noun Ferien: “charakterizovány”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00280

- **cardId:** a1-ferien
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** Die Ferien je pouze množné číslo — vždy v množném čísle (in den Ferien).
- **proposedCs:** Die Ferien jsou pouze v množném čísle — vždy v množném čísle (in den Ferien).
- **reason:** The current text uses singular “je” and lacks the required preposition in “v množném čísle”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00282

- **cardId:** a1-urlaub
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: pouze jednotné číslo. Odejít z práce - vždy v jednotném čísle.
- **proposedCs:** Hlavní myšlenka: pouze jednotné číslo. Dovolená z práce – vždy v jednotném čísle.
- **reason:** “Odejít z práce” means leaving employment, not taking a vacation, so the current explanation changes the meaning.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00283

- **cardId:** a1-urlaub
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Často charakterizováno: pouze jednotné číslo.
- **proposedCs:** Často charakterizován: pouze jednotné číslo.
- **reason:** Urlaub is masculine in the displayed German phrase Der Urlaub; the Czech participle must be masculine.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00284

- **cardId:** a1-urlaub
- **field:** study.explanation[3]
- **severity:** LOW
- **currentCs:** Der Urlaub je pouze jednotné číslo - dovolená z práce (im Urlaub).
- **proposedCs:** Der Urlaub je pouze v jednotném čísle – dovolená z práce (im Urlaub).
- **reason:** The current Czech phrase is ungrammatical; it needs “v jednotném čísle”.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00285

- **cardId:** a1-urlaub
- **field:** study.comparison[1].meaning
- **severity:** HIGH
- **currentCs:** Školní/studijní přestávka (pouze dsk.)
- **proposedCs:** Školní/studijní prázdniny (pouze mn. č.)
- **reason:** „Ferien“ znamená školní prázdniny; současný překlad je významově chybný a zkratka „dsk.“ je nepřirozená.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00286

- **cardId:** a1-uhr
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Často charakterizováno: konkrétním časem.
- **proposedCs:** Často označuje konkrétní čas.
- **reason:** Současná formulace je gramaticky neúplná a nepřirozená; chybí určitý slovesný tvar.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00287

- **cardId:** a1-zeit
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Die Zeit znamená především: okamžik, příležitost.
- **proposedCs:** Die Zeit znamená především čas; podle kontextu také okamžik nebo příležitost.
- **reason:** Současný text opomíjí základní význam „čas“ a uvádí jen užší významy.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00288

- **cardId:** a1-zeit
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Často se vyznačuje: abstraktním pojmem.
- **proposedCs:** Označuje abstraktní pojem.
- **reason:** Spojení „vyznačuje se abstraktním pojmem“ je v češtině nepřirozené a významově nejasné.
- **status:** CONFIRMED_REAL

#### MAIN-A1-00289

- **cardId:** a1-einmal
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** Einmal odkazuje na jeden čas nebo minulost (jednou jsem...).
- **proposedCs:** Einmal odkazuje na jednu příležitost nebo minulost (jednou jsem...).
- **reason:** Současné „jeden čas“ je v tomto vysvětlení nejasné; vhodnější je vyjádřit jednu příležitost nebo minulost.
- **status:** CONFIRMED_REAL




---

- Model: GPT-5.6 Luna
- Audit mode: READ-ONLY
- Main SHA: 72f376484bd1804f57803f53c4a3cdb182358709
- Raw deterministic findings: 65
- Raw Luna findings: 224
- Validated findings total: 269
- Consolidated JSON: `reports/temp/cs-a1-final-audit-on-main.json`
- Validated JSON: `reports/temp/cs-a1-final-audit-on-main-validated.json`
- Batch artifacts: `reports/temp/cs-a1-final-audit-on-main/`

_Audita datums: 2026-08-12_
_Production changes: 0 | DE READ-ONLY_
