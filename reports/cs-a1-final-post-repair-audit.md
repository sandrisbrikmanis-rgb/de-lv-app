# CS–DE A1 FINAL POST-REPAIR AUDIT

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
| CRITICAL | 17 |
| HIGH | 294 |
| MEDIUM | 109 |
| LOW | 20 |

### Validation classification

| Status | Count |
|---|---|
| CONFIRMED_REAL | 416 |
| FALSE_POSITIVE | 46 |
| STALE_ALREADY_FIXED | 42 |
| OWNER_KEEP | 5 |
| OWNER_OVERRIDE_FALSE_POSITIVE | 4 |
| VALID_CONTEXT_DIFFERENCE | 1 |
| CONFIRMED_REPAIR_REGRESSION | 24 |
| NEEDS_OWNER_REVIEW | 7 |

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
| raw | 59 |
| REAL | 14 |
| FALSE_POSITIVE | 10 |

### sectionAccents

| Metric | Count |
|---|---|
| raw | 75 |
| REAL | 13 |
| FALSE_POSITIVE | 4 |
| stale | 27 |

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
| retained | 290 |
| reverted | 0 |
| regressions | 58 |

### Technical integrity

| Check | Result |
|---|---|
| cards | 702 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| unexpected production changes | 0 |

### Remaining REAL work

#### FINAL-A1-00015

- **cardId:** a1-es
- **field:** study.info[0]
- **severity:** CRITICAL
- **currentCs:** Český “es” = vācu “ich”
- **proposedCs:** České „es“ znamená „to“.
- **reason:** The production text is Latvian rather than Czech and incorrectly uses Latvian wording for the German pronoun.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00016

- **cardId:** a1-es
- **field:** study.info[1]
- **severity:** CRITICAL
- **currentCs:** Vācu “es” = tas • Tā • Bezpersoniska forma
- **proposedCs:** Německé „es“ = to • to • neosobní podoba
- **reason:** The production text is Latvian rather than Czech, including Latvian diacritics and vocabulary.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00017

- **cardId:** a1-fahren
- **field:** study.important.example
- **severity:** CRITICAL
- **currentCs:** Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • Vest • Aizvest atkarībā no konteksta.
- **proposedCs:** V němčině může stejné sloveso podle kontextu znamenat: řídit • vést • odvézt.
- **reason:** The production example is Latvian and does not provide the required Czech explanation.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00018

- **cardId:** a1-fahren
- **field:** study.accents.purple[0]
- **severity:** HIGH
- **currentCs:** Braukt
- **proposedCs:** Řídit
- **reason:** The production accent contains the Latvian word „Braukt“ instead of the Czech equivalent.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00019

- **cardId:** a1-fahren
- **field:** study.accents.purple[2]
- **severity:** HIGH
- **currentCs:** Vest
- **proposedCs:** Vést
- **reason:** The production accent contains a Latvian word rather than the Czech equivalent.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00020

- **cardId:** a1-fahren
- **field:** study.accents.purple[4]
- **severity:** HIGH
- **currentCs:** Aizvest
- **proposedCs:** Odvézt
- **reason:** The production accent contains the Latvian word „Aizvest“ instead of Czech.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00021

- **cardId:** a1-fahren
- **field:** study.accents.green[1]
- **severity:** CRITICAL
- **currentCs:** Transportlīdzekli
- **proposedCs:** vozidlo
- **reason:** The production accent contains a Latvian inflected form with Latvian diacritics, not Czech text.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00022

- **cardId:** a1-fahren
- **field:** study.accents.green[5]
- **severity:** CRITICAL
- **currentCs:** Velosipēdu
- **proposedCs:** jízdní kolo
- **reason:** The production accent contains the Latvian form „Velosipēdu“ rather than Czech.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00023

- **cardId:** a1-fahren
- **field:** study.sectionAccents.explanation.purple[1]
- **severity:** HIGH
- **currentCs:** vest
- **proposedCs:** vést
- **reason:** The production explanation contains the Latvian word „vest“ instead of the Czech equivalent.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00024

- **cardId:** a1-fahren
- **field:** study.sectionAccents.important[0].text.purple[0]
- **severity:** HIGH
- **currentCs:** braukt
- **proposedCs:** řídit
- **reason:** The production text contains the Latvian word „braukt“ instead of the Czech equivalent.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00025

- **cardId:** a1-fahren
- **field:** study.sectionAccents.important[0].example.purple[0]
- **severity:** HIGH
- **currentCs:** braukt
- **proposedCs:** řídit
- **reason:** The production example contains the Latvian word „braukt“ instead of Czech text.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00026

- **cardId:** a1-fahren
- **field:** study.sectionAccents.important[0].example.purple[1]
- **severity:** HIGH
- **currentCs:** vest
- **proposedCs:** vést
- **reason:** The production example contains the Latvian word „vest“ instead of the Czech equivalent.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00027

- **cardId:** a1-fahren
- **field:** study.sectionAccents.important[0].example.purple[2]
- **severity:** HIGH
- **currentCs:** aizvest
- **proposedCs:** odvézt
- **reason:** The production example contains the Latvian word „aizvest“ instead of the Czech equivalent.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00082

- **cardId:** a1-verstehen
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Lotyšštinu zde většinou nemusíte „umět“ ani „učit“ • Jsou častěji können.
- **proposedCs:** Lotyšštinu zde většinou nemusíte „umět“ ani „učit“ • Častěji se používá „können“.
- **reason:** The production text contains malformed Czech and an untranslated fragment: “Jsou častěji können.” It does not form a valid explanation.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00091

- **cardId:** a1-alle-7
- **field:** lv
- **severity:** HIGH
- **currentCs:** Každý
- **proposedCs:** Všichni • všechny • všechno
- **reason:** Každý znamená „each/every“, nikoli obecné „all“; překlad nevyjadřuje běžné tvary alle.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00092

- **cardId:** a1-Alter-11
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Stáří
- **proposedCs:** Věk
- **reason:** Alter zde znamená obecný věk; „stáří“ označuje spíše pokročilý věk nebo starobu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00093

- **cardId:** a1-achten-22
- **field:** lv
- **severity:** HIGH
- **currentCs:** Pozorovat
- **proposedCs:** Dávat pozor
- **reason:** Achten znamená věnovat pozornost nebo dávat pozor, zatímco „pozorovat“ znamená sledovat či observe.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00094

- **cardId:** a1-anziehen-30
- **field:** lv
- **severity:** HIGH
- **currentCs:** Nasadit
- **proposedCs:** Obléct si
- **reason:** Anziehen u oděvu znamená obléct si; „nasadit“ se týká především předmětu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00095

- **cardId:** a1-Ärztin-46
- **field:** lv
- **severity:** HIGH
- **currentCs:** Lékař
- **proposedCs:** Lékařka
- **reason:** Ärztin je žena lékařka; současný překlad používá mužský rod.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00096

- **cardId:** a1-aufpassen-51
- **field:** lv
- **severity:** HIGH
- **currentCs:** Buďte opatrní
- **proposedCs:** Dávat pozor
- **reason:** Současný text je vykací imperativ, nikoli infinitivní heslo odpovídající německému aufpassen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00097

- **cardId:** a1-aufstehen-52
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Postavit se
- **proposedCs:** Vstát
- **reason:** Aufstehen zde znamená vstát; „postavit se“ označuje zaujetí stojící polohy.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00098

- **cardId:** a1-Bauch-73
- **field:** lv
- **severity:** HIGH
- **currentCs:** Žaludek
- **proposedCs:** Břicho
- **reason:** Bauch znamená břicho; žaludek je německy Magen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00099

- **cardId:** a1-bedeuten-75
- **field:** lv
- **severity:** HIGH
- **currentCs:** Střední
- **proposedCs:** Znamenat
- **reason:** Bedeuten je sloveso „znamenat“; „střední“ odpovídá jinému německému výrazu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00100

- **cardId:** a1-benutzen-83
- **field:** lv
- **severity:** HIGH
- **currentCs:** Použití
- **proposedCs:** Používat
- **reason:** Benutzen je sloveso „používat“, zatímco „použití“ je podstatné jméno.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00102

- **cardId:** a1-bitten-98
- **field:** lv
- **severity:** HIGH
- **currentCs:** Zeptat se
- **proposedCs:** Prosit
- **reason:** Bitten znamená prosit nebo požádat; „zeptat se“ odpovídá německému fragen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00103

- **cardId:** a1-blond-103
- **field:** lv
- **severity:** HIGH
- **currentCs:** Blondýnka
- **proposedCs:** Blond
- **reason:** Blond je přídavné jméno; „blondýnka“ označuje blond ženu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00104

- **cardId:** a1-Buch-116
- **field:** lv
- **severity:** HIGH
- **currentCs:** Rezervovat
- **proposedCs:** Kniha
- **reason:** Buch znamená kniha; „rezervovat“ je německy buchen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00105

- **cardId:** a1-Buchstabe-117
- **field:** lv
- **severity:** HIGH
- **currentCs:** Dopis
- **proposedCs:** Písmeno
- **reason:** Buchstabe znamená písmeno; „dopis“ označuje psanou korespondenci.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00106

- **cardId:** a1-Cousine-125
- **field:** lv
- **severity:** HIGH
- **currentCs:** Bratranec
- **proposedCs:** Sestřenice
- **reason:** „Bratranec“ označuje mužského bratrance, ale „Cousine“ je ženská sestřenice.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00107

- **cardId:** a1-dein-132
- **field:** lv
- **severity:** HIGH
- **currentCs:** Vaše
- **proposedCs:** Tvůj
- **reason:** „Dein“ je neformální jednotné číslo; „vaše“ vyjadřuje vykání nebo množné číslo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00108

- **cardId:** a1-deutsch-135
- **field:** lv
- **severity:** HIGH
- **currentCs:** Němec
- **proposedCs:** Německý
- **reason:** „Deutsch“ je zde přídavné jméno „německý“, nikoli osoba „Němec“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00109

- **cardId:** a1-du-149
- **field:** lv
- **severity:** HIGH
- **currentCs:** Vy
- **proposedCs:** Ty
- **reason:** „Du“ je neformální zájmeno jednotného čísla; správně odpovídá „ty“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00110

- **cardId:** a1-Ecke-152
- **field:** lv
- **severity:** HIGH
- **currentCs:** Rohu
- **proposedCs:** Roh
- **reason:** „Rohu“ je nepřímý pád; základní český tvar pro „Ecke“ je „roh“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00111

- **cardId:** a1-eins-156
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Jedna
- **proposedCs:** Jeden
- **reason:** Základní český tvar číslovky je „jeden“; „jedna“ je pouze ženský rod.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00112

- **cardId:** a1-Erde-164
- **field:** lv
- **severity:** HIGH
- **currentCs:** Přistát
- **proposedCs:** Země
- **reason:** „Erde“ je podstatné jméno „země“, zatímco „přistát“ je sloveso s jiným významem.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00113

- **cardId:** a1-euer-171
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Vaše
- **proposedCs:** Váš
- **reason:** Základní český tvar přivlastňovacího zájmena „euer“ je „váš“, ne konkrétní tvar „vaše“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00114

- **cardId:** a1-fett-184
- **field:** lv
- **severity:** HIGH
- **currentCs:** Tuk
- **proposedCs:** Tučný
- **reason:** „Fett“ je přídavné jméno „tučný“ nebo „mastný“; „tuk“ je podstatné jméno.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00115

- **cardId:** a1-frei-199
- **field:** lv
- **severity:** HIGH
- **currentCs:** Uvolnit
- **proposedCs:** Volný
- **reason:** „Frei“ je přídavné jméno „volný“; „uvolnit“ je sloveso s jiným významem.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00116

- **cardId:** a1-freundlich-203
- **field:** lv
- **severity:** HIGH
- **currentCs:** Druh
- **proposedCs:** Přátelský
- **reason:** „Freundlich“ je přídavné jméno „přátelský“; „druh“ je podstatné jméno.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00117

- **cardId:** a1-ganz-219
- **field:** lv
- **severity:** HIGH
- **currentCs:** Všechno
- **proposedCs:** Celý
- **reason:** „Ganz“ znamená „celý“ nebo „úplný“; „všechno“ odpovídá německému „alles“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00118

- **cardId:** a1-gelb-228
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Žluť
- **proposedCs:** Žlutý
- **reason:** „Gelb“ je přídavné jméno „žlutý“; „žluť“ je podstatné jméno.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00119

- **cardId:** a1-Glas-241
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Sklenici
- **proposedCs:** Sklenice
- **reason:** „Sklenici“ je akuzativ; základní český tvar podstatného jména je „sklenice“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00120

- **cardId:** a1-halb-262
- **field:** lv
- **severity:** HIGH
- **currentCs:** Strana
- **proposedCs:** Půl
- **reason:** „Halb“ znamená „půl“ nebo „poloviční“; „strana“ odpovídá jinému významu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00121

- **cardId:** a1-Hälfte-263
- **field:** lv
- **severity:** HIGH
- **currentCs:** Strana
- **proposedCs:** Polovina
- **reason:** „Strana“ means side/page, not the German noun „Hälfte“; the current Czech translation is semantically wrong.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00122

- **cardId:** a1-Handschuh-268
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Rukavici
- **proposedCs:** Rukavice
- **reason:** The current accusative form „Rukavici“ is not the appropriate dictionary form for the German noun „Handschuh“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00123

- **cardId:** a1-Heft-273
- **field:** lv
- **severity:** HIGH
- **currentCs:** Notebook
- **proposedCs:** Sešit
- **reason:** In this context „Heft“ means a notebook or exercise book; Czech „Notebook“ means a portable computer.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00124

- **cardId:** a1-Hemd-278
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Košili
- **proposedCs:** Košile
- **reason:** The current accusative form „Košili“ is not the appropriate dictionary form for the German noun „Hemd“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00125

- **cardId:** a1-ich-291
- **field:** lv
- **severity:** HIGH
- **currentCs:** Mě
- **proposedCs:** Já
- **reason:** German nominative „ich“ corresponds to Czech nominative „já“, not the oblique form „mě“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00126

- **cardId:** a1-Keks-309
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Cookie
- **proposedCs:** Sušenka
- **reason:** Czech „Cookie“ primarily denotes an internet file; German „Keks“ means a biscuit or cookie as food.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00127

- **cardId:** a1-Hut-328
- **field:** lv
- **severity:** HIGH
- **currentCs:** Čepice
- **proposedCs:** Klobouk
- **reason:** German „Hut“ corresponds to Czech „klobouk“; „čepice“ more closely corresponds to „Mütze“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00128

- **cardId:** a1-Koch-340
- **field:** lv
- **severity:** HIGH
- **currentCs:** Vařit
- **proposedCs:** Kuchař
- **reason:** German „Koch“ is the noun for a male cook or chef, whereas „Vařit“ is a verb.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00129

- **cardId:** a1-Köchin-341
- **field:** lv
- **severity:** HIGH
- **currentCs:** Vařit
- **proposedCs:** Kuchařka
- **reason:** German feminine noun „Köchin“ corresponds to Czech „kuchařka“, not the verb „Vařit“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00130

- **cardId:** a1-Kopf-342
- **field:** lv
- **severity:** HIGH
- **currentCs:** Hlavu
- **proposedCs:** Hlava
- **reason:** The current accusative form „Hlavu“ is not the appropriate dictionary form for the German noun „Kopf“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00131

- **cardId:** a1-Lehrerin-365
- **field:** lv
- **severity:** HIGH
- **currentCs:** Učitel
- **proposedCs:** Učitelka
- **reason:** German feminine noun „Lehrerin“ requires the Czech feminine equivalent „učitelka“, not masculine „učitel“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00132

- **cardId:** a1-links-380
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Vlevo • Vlevo
- **proposedCs:** Vlevo • Levý
- **reason:** The second German sense is the adjective „left“, which is Czech „levý“, not a duplicate adverb „vlevo“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00133

- **cardId:** a1-lustig-385
- **field:** lv
- **severity:** HIGH
- **currentCs:** Zábava
- **proposedCs:** Veselý
- **reason:** German „lustig“ is an adjective; Czech „zábava“ is a noun and does not match the part of speech or meaning.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00134

- **cardId:** a1-malen-391
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Malovat • Malovat
- **proposedCs:** Malovat
- **reason:** The production value repeats „Malovat“ for both senses, creating a redundant duplicate instead of one clean Czech entry.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00135

- **cardId:** a1-März-396
- **field:** lv
- **severity:** HIGH
- **currentCs:** Pochod
- **proposedCs:** Březen
- **reason:** German „März“ is the month „březen“; Czech „pochod“ means a march or procession.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00136

- **cardId:** a1-Million-406
- **field:** lv
- **severity:** LOW
- **currentCs:** Milión
- **proposedCs:** Milion
- **reason:** The standard Czech spelling is „milion“ without an acute accent; production has the nonstandard accented form.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00137

- **cardId:** a1-Minute-407
- **field:** lv
- **severity:** HIGH
- **currentCs:** Minutu
- **proposedCs:** Minuta
- **reason:** „Minutu“ is accusative; the standalone Czech lemma corresponding to „die Minute“ is nominative „minuta“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00138

- **cardId:** a1-Mittag-410
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Oběd
- **proposedCs:** Poledne
- **reason:** „Oběd“ means lunch, while „Mittag“ primarily denotes midday or noon; „poledne“ is the correct noun.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00139

- **cardId:** a1-nein-436
- **field:** lv
- **severity:** HIGH
- **currentCs:** Žádný
- **proposedCs:** Ne
- **reason:** „Žádný“ means „kein/none“, not the Czech negation „ne“ corresponding to German „nein“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00140

- **cardId:** a1-nicht-447
- **field:** lv
- **severity:** HIGH
- **currentCs:** Žádný
- **proposedCs:** Ne
- **reason:** „Žádný“ means „kein/none“; German „nicht“ translates as Czech „ne“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00141

- **cardId:** a1-Ostern-467
- **field:** lv
- **severity:** HIGH
- **currentCs:** Velikonoční
- **proposedCs:** Velikonoce
- **reason:** „Velikonoční“ is an adjective; the German noun „Ostern“ corresponds to Czech „Velikonoce“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00142

- **cardId:** a1-Pferd-474
- **field:** lv
- **severity:** HIGH
- **currentCs:** Koně
- **proposedCs:** Kůň
- **reason:** „Koně“ is inflected or plural; the Czech nominative singular lemma for „Pferd“ is „kůň“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00143

- **cardId:** a1-Programm-484
- **field:** lv
- **severity:** HIGH
- **currentCs:** Naprogramovat
- **proposedCs:** Program
- **reason:** „Naprogramovat“ is a verb; German „Programm“ is the Czech noun „program“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00144

- **cardId:** a1-richtig-497
- **field:** lv
- **severity:** HIGH
- **currentCs:** Opravit
- **proposedCs:** Správný
- **reason:** „Opravit“ means repair or correct; German „richtig“ corresponds to Czech „správný“ here.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00145

- **cardId:** a1-rund-501
- **field:** lv
- **severity:** HIGH
- **currentCs:** Kolo
- **proposedCs:** Kulatý
- **reason:** „Kolo“ is a noun meaning wheel or bicycle; German adjective „rund“ translates as „kulatý“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00146

- **cardId:** a1-schmecken-515
- **field:** lv
- **severity:** HIGH
- **currentCs:** Ochutnat
- **proposedCs:** Chutnat
- **reason:** „Ochutnat“ means taste or sample; German „schmecken“ corresponds to Czech „chutnat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00147

- **cardId:** a1-Schnee-517
- **field:** lv
- **severity:** HIGH
- **currentCs:** Bude sněžit
- **proposedCs:** Sníh
- **reason:** „Bude sněžit“ is a future-tense sentence; German noun „Schnee“ translates as „sníh“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00148

- **cardId:** a1-Sekunde-545
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Sekundu
- **proposedCs:** Sekunda
- **reason:** „Sekundu“ is accusative; the standalone Czech noun corresponding to „Sekunde“ is „sekunda“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00149

- **cardId:** a1-siebzehnte-554
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Sedmnáctého
- **proposedCs:** Sedmnáctý
- **reason:** „Sedmnáctého“ is an inflected form; the standalone ordinal lemma is „sedmnáctý“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00150

- **cardId:** a1-Sommer-565
- **field:** lv
- **severity:** HIGH
- **currentCs:** Letní
- **proposedCs:** Léto
- **reason:** „Letní“ is an adjective; German noun „Sommer“ corresponds to Czech „léto“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00151

- **cardId:** a1-Spiel-571
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Hru
- **proposedCs:** Hra
- **reason:** Production contains accusative „Hru“ as the standalone Czech equivalent; nominative „Hra“ is required.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00152

- **cardId:** a1-Stuhl-582
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Židli
- **proposedCs:** Židle
- **reason:** Production contains accusative „Židli“ as the standalone Czech equivalent; nominative „Židle“ is required.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00153

- **cardId:** a1-Stunde-583
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Hodinu
- **proposedCs:** Hodina
- **reason:** Production contains accusative „Hodinu“ as the standalone Czech equivalent; nominative „Hodina“ is required.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00154

- **cardId:** a1-Tasche-589
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Tašku
- **proposedCs:** Taška
- **reason:** Production contains accusative „Tašku“ as the standalone Czech equivalent; nominative „Taška“ is required.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00155

- **cardId:** a1-Tasse-590
- **field:** lv
- **severity:** HIGH
- **currentCs:** Pohár
- **proposedCs:** Šálek
- **reason:** „Pohár“ means a goblet or glass, not the usual Czech equivalent „Šálek“ for German „Tasse“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00156

- **cardId:** a1-telefonieren-594
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Zavolat na telefon
- **proposedCs:** Telefonovat
- **reason:** „Zavolat na telefon“ is unnatural and perfective; German „telefonieren“ corresponds to „Telefonovat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00157

- **cardId:** a1-Tisch-599
- **field:** lv
- **severity:** HIGH
- **currentCs:** Tabulka
- **proposedCs:** Stůl
- **reason:** „Tabulka“ means a chart or table; German „Tisch“ means the Czech furniture noun „Stůl“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00158

- **cardId:** a1-unten-614
- **field:** lv
- **severity:** HIGH
- **currentCs:** Na dně
- **proposedCs:** Dole
- **reason:** „Na dně“ means at the bottom, especially of a container; German „unten“ means „Dole“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00159

- **cardId:** a1-Vorname-637
- **field:** lv
- **severity:** HIGH
- **currentCs:** Slovo
- **proposedCs:** Křestní jméno
- **reason:** „Slovo“ means a word; German „Vorname“ means a given or first name, „Křestní jméno“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00160

- **cardId:** a1-wann-640
- **field:** lv
- **severity:** HIGH
- **currentCs:** Když
- **proposedCs:** Kdy
- **reason:** German „wann“ is the interrogative adverb „Kdy“; „Když“ corresponds to „wenn“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00161

- **cardId:** a1-waschen-645
- **field:** lv
- **severity:** HIGH
- **currentCs:** Umýt se
- **proposedCs:** Mýt
- **reason:** „Umýt se“ is reflexive and means wash oneself; non-reflexive German „waschen“ is „Mýt“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00162

- **cardId:** a1-Weg-647
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Silnice
- **proposedCs:** Cesta
- **reason:** „Silnice“ specifically means a road or highway; the general German „Weg“ is better translated as „Cesta“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00163

- **cardId:** a1-wenig-654
- **field:** lv
- **severity:** HIGH
- **currentCs:** Nic moc
- **proposedCs:** Málo
- **reason:** „Nic moc“ means not much or not great; German „wenig“ directly corresponds to „Málo“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00164

- **cardId:** a1-zumachen-673
- **field:** lv
- **severity:** CRITICAL
- **currentCs:** Zblízka
- **proposedCs:** Zavřít
- **reason:** „Zblízka“ means from nearby; German „zumachen“ means „Zavřít“ or „Zavírat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00165

- **cardId:** a1-zurück-674
- **field:** lv
- **severity:** HIGH
- **currentCs:** Zadní
- **proposedCs:** Zpět
- **reason:** „Zadní“ is an adjective meaning rear; German „zurück“ is the adverb „Zpět“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00166

- **cardId:** a1-klein-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Pokoj je malý.
- **proposedCs:** Dítě je ještě malé.
- **reason:** The Czech sentence means “The room is small,” but the German and Latvian sources refer to a child being small.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00167

- **cardId:** a1-klein-study
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Dítě je ještě malé.
- **proposedCs:** Mám malou tašku.
- **reason:** The Czech sentence repeats the preceding child example; the German and Latvian sources refer to having a small bag.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00169

- **cardId:** a1-ab
- **field:** lv
- **severity:** HIGH
- **currentCs:** Z
- **proposedCs:** Od
- **reason:** For German ab in this context, Czech “z” is the wrong prepositional meaning; “od” expresses the starting point.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00170

- **cardId:** a1-ab
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Z
- **proposedCs:** Od
- **reason:** The main Czech translation “Z” corresponds to other German prepositions, while ab means “od” or “počínaje”.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00172

- **cardId:** a1-also
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Proto
- **proposedCs:** Tedy • Takže
- **reason:** In this discourse-marker sense, German also means “tedy/takže”; Czech “proto” more directly suggests deshalb.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00173

- **cardId:** a1-also
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Proto
- **proposedCs:** Tedy • Takže
- **reason:** The main translation should distinguish German also (“tedy/takže”) from deshalb (“proto”).
- **status:** CONFIRMED_REAL

#### FINAL-A1-00174

- **cardId:** a1-also
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Jsi nemocný, tak nechoď do práce.
- **proposedCs:** Jsi nemocný, takže nejdeš do práce.
- **reason:** The Czech imperative “nechoď” changes the German statement into a command; the source states a consequence.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00175

- **cardId:** a1-also
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: závěr → také.
- **proposedCs:** Pamatujte: závěr → tedy/takže.
- **reason:** Czech “také” means “auch”, not the concluding discourse marker German also.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00176

- **cardId:** a1-also
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Také ukazuje závěr: další myšlenka vyplývá z toho, co bylo řečeno výše.
- **proposedCs:** Tedy ukazuje závěr: další myšlenka vyplývá z toho, co bylo řečeno výše.
- **reason:** The explanatory text incorrectly uses “Také”, which means “also/auch”, for the concluding meaning of German also.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00177

- **cardId:** a1-auch-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Já jdu taky
- **proposedCs:** Ona zde také pracuje.
- **reason:** The production sentence is the wrong example: it says “I go too”, not that she also works here.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00178

- **cardId:** a1-auch-study
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Ona zde také pracuje.
- **proposedCs:** Také vám přeji hezký den.
- **reason:** The production sentence repeats the previous example instead of expressing the wish for a pleasant day in the German source.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00180

- **cardId:** a1-auf
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Pokud je něco blízko svislého povrchu, často potřebujete • Pokud jste dovnitř, musíte dovnitř.
- **proposedCs:** Pokud je něco u svislého povrchu, často použijete an; pokud je něco uvnitř, použijete in.
- **reason:** The production text is grammatically broken and does not explain the contrast between auf/an and in in the intended context.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00181

- **cardId:** a1-aus
- **field:** lv
- **severity:** HIGH
- **currentCs:** Od • Ven
- **proposedCs:** Z • Zevnitř
- **reason:** German aus is translated here as Czech “z/ze”; production “od” and “ven” express different meanings.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00182

- **cardId:** a1-aus
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Od • Ven
- **proposedCs:** Z • Zevnitř
- **reason:** The main Czech translation does not represent aus in the intended extraction/interior context; “z/zevnitř” does.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00185

- **cardId:** a1-aufs
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Používá se, když akce ukazuje směr ke konkrétní věci nebo povrchu – odpovídá na otázku kde?
- **proposedCs:** Používá se, když děj vyjadřuje směr ke konkrétní věci nebo povrchu – odpovídá na otázku kam?
- **reason:** Vysvětlení chybně uvádí otázku „kde?“ místo „kam?“, takže zaměňuje směr s místem.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00186

- **cardId:** a1-aufs
- **field:** study.comparison[0].example
- **severity:** HIGH
- **currentCs:** aufs Dach – Na střeše
- **proposedCs:** aufs Dach – Na střechu
- **reason:** Aufs Dach vyjadřuje směr na střechu, nikoli pobyt na střeše.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00187

- **cardId:** a1-aufs
- **field:** study.comparison[1].example
- **severity:** HIGH
- **currentCs:** auf den Tisch – Na stole
- **proposedCs:** auf den Tisch – Na stůl
- **reason:** Auf den Tisch v akuzativu vyjadřuje směr na stůl; „na stole“ označuje místo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00188

- **cardId:** a1-aufs
- **field:** study.comparison[2].example
- **severity:** HIGH
- **currentCs:** an die Wand – U zdi
- **proposedCs:** an die Wand – Na zeď
- **reason:** An die Wand vyjadřuje směr na zeď, nikoli polohu u zdi.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00189

- **cardId:** a1-aufs
- **field:** study.comparison[3].example
- **severity:** HIGH
- **currentCs:** ins Zimmer – V místnosti
- **proposedCs:** ins Zimmer – Do místnosti
- **reason:** Ins Zimmer vyjadřuje směr dovnitř, zatímco „v místnosti“ označuje místo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00190

- **cardId:** a1-aufs
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Aufs = auf das, pouze s podstatným jménem libovolného rodu, kde? ve skloňování.
- **proposedCs:** Aufs = auf das; používá se před podstatnými jmény středního rodu v akuzativu.
- **reason:** Text chybně připouští libovolný rod a používá otázku „kde?“; aufs je auf das před středním rodem v akuzativu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00191

- **cardId:** a1-aufs
- **field:** study.important[2]
- **severity:** MEDIUM
- **currentCs:** Na vodorovné ploše se místo aufs často používá auf den.
- **proposedCs:** U mužského rodu se pro směr na vodorovnou plochu často používá auf den, ne aufs.
- **reason:** Formulace zobecňuje auf den bez uvedení, že jde o mužský rod; volba tvaru závisí na rodu podstatného jména.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00194

- **cardId:** a1-baden
- **field:** lv
- **severity:** HIGH
- **currentCs:** Plavat
- **proposedCs:** Koupat se
- **reason:** Baden znamená koupat se, nikoli plavat; plavat odpovídá především německému schwimmen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00195

- **cardId:** a1-baden
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Plavat
- **proposedCs:** Koupat se
- **reason:** Hlavní překlad zaměňuje baden za schwimmen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00196

- **cardId:** a1-bei
- **field:** lv
- **severity:** HIGH
- **currentCs:** Na
- **proposedCs:** U
- **reason:** Základní význam bei je „u“; samotné „na“ je zde zavádějící jako obecný překlad.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00197

- **cardId:** a1-bei
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Na
- **proposedCs:** U
- **reason:** Hlavní překlad uvádí zavádějící „na“ místo základního českého ekvivalentu „u“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00198

- **cardId:** a1-bei
- **field:** study.examples[0].lv
- **severity:** HIGH
- **currentCs:** Jsem v domě svého přítele.
- **proposedCs:** Jsem u svého přítele.
- **reason:** Bei meinem Freund znamená „u svého přítele“, ne konkrétně „v domě svého přítele“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00199

- **cardId:** a1-bis
- **field:** study.comparison[2].word
- **severity:** MEDIUM
- **currentCs:** bis dass
- **proposedCs:** bis jetzt
- **reason:** Český údaj „bis dass“ neodpovídá německému spojení bis jetzt.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00200

- **cardId:** a1-bis
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Až
- **proposedCs:** Dosud
- **reason:** „Až“ samo o sobě nevyjadřuje význam německého „bis jetzt“ ve smyslu dosud nebo až doteď.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00201

- **cardId:** a1-bitte
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: Zdvořilé slovo s malými písmeny. Byl jsem zdvořilý - prosím.
- **proposedCs:** Hlavní myšlenka: bitte s malým písmenem je zdvořilé slovo znamenající „prosím“.
- **reason:** Vysvětlení je gramaticky i významově nesrozumitelné a obsahuje chybnou větu „Byl jsem zdvořilý“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00202

- **cardId:** a1-bitte
- **field:** study.explanation[4]
- **severity:** HIGH
- **currentCs:** Často charakterizováno: podstatné jméno (zemřít).
- **proposedCs:** Jako podstatné jméno se píše die Bitte a znamená prosba nebo žádost.
- **reason:** Text je nesrozumitelný a chybně překládá die jako „zemřít“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00203

- **cardId:** a1-bitte
- **field:** study.explanation[7]
- **severity:** HIGH
- **currentCs:** Množné číslo: zemřít pokousán.
- **proposedCs:** Množné číslo: die Bitten znamená prosby nebo žádosti.
- **reason:** Text je nesrozumitelný a obsahuje chybné překlady členu i podstatného jména.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00204

- **cardId:** a1-bitte
- **field:** study.tip[1]
- **severity:** MEDIUM
- **currentCs:** Zdvořilost malými písmeny. Byl jsem zdvořilý - prosím.
- **proposedCs:** Bitte s malým písmenem znamená „prosím“; die Bitte s velkým písmenem znamená „prosba“ nebo „žádost“.
- **reason:** Tip je nesrozumitelný a obsahuje chybnou strojovou formulaci místo vysvětlení rozdílu mezi bitte a die Bitte.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00205

- **cardId:** a1-bleiben
- **field:** lv
- **severity:** HIGH
- **currentCs:** Pobyt
- **proposedCs:** Zůstat
- **reason:** České „pobyt“ je podstatné jméno, zatímco bleiben je sloveso „zůstat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00206

- **cardId:** a1-bleiben
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Pobyt
- **proposedCs:** Zůstat
- **reason:** Hlavní překlad používá podstatné jméno místo infinitivu německého slovesa.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00211

- **cardId:** a1-bringen
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: přinést někomu něco přinést, nést nebo doručit.
- **proposedCs:** Hlavní myšlenka: bringen znamená něco přinést, odnést, dovést nebo doručit.
- **reason:** Vysvětlení obsahuje zjevné opakování a gramaticky chybnou konstrukci.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00212

- **cardId:** a1-bringen
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** Holen znamená jít za a aportovat nebo brát.
- **proposedCs:** Holen znamená jít pro něco nebo někoho a přinést či přivézt ho.
- **reason:** Výklad holen je nepřirozený a „jít za“ ani „aportovat“ přesně nevystihují běžný význam jít pro a přinést.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00214

- **cardId:** a1-bringen
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Jít za / aport
- **proposedCs:** Jít pro / přinést
- **reason:** „Jít za / aport“ je nepřesné a zavádějící; holen běžně znamená jít pro něco a přinést to.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00215

- **cardId:** a1-bringen
- **field:** study.comparison[3].meaning
- **severity:** MEDIUM
- **currentCs:** Odnést a přinést
- **proposedCs:** Přinést s sebou
- **reason:** Mitbringen znamená přinést s sebou, nikoli obecnou kombinaci „odnést a přinést“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00216

- **cardId:** a1-bringen
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: přestěhovat se k někomu → přinést • Vzít si pro sebe → nehmen.
- **proposedCs:** Pamatujte: něco někomu nebo někam dopravit → bringen • vzít si něco pro sebe → nehmen.
- **reason:** Text incorrectly equates bringen with moving house and uses an incorrect contrast with nehmen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00217

- **cardId:** a1-bringen
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Přinesený ukazuje někomu směr nebo místo.
- **proposedCs:** Bringen vyjadřuje směr k osobě nebo na určité místo.
- **reason:** The current sentence is semantically incoherent and does not explain bringen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00220

- **cardId:** a1-das
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Kdo • Který • Kdo
- **proposedCs:** Který • která • které
- **reason:** The final meaning incorrectly says kdo; welches refers to a thing and should use the neuter form které.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00221

- **cardId:** a1-das
- **field:** study.tip.text
- **severity:** MEDIUM
- **currentCs:** Pamatujte: střední genitiv → das • Že → dass.
- **proposedCs:** Pamatujte: střední rod → das • že → dass.
- **reason:** Das is associated here with grammatical gender, not genitive case.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00222

- **cardId:** a1-das
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Das není totéž co dass – das může být člen nebo zájmeno, dass znamená 'to'.
- **proposedCs:** Das není totéž co dass – das může být člen nebo zájmeno, dass znamená „že“.
- **reason:** The current explanation mistranslates dass as to; the conjunction means že.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00223

- **cardId:** a1-dass
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Na
- **proposedCs:** Aby
- **reason:** Damit introducing a purpose clause means aby, not the preposition na.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00224

- **cardId:** a1-dass
- **field:** study.comparison[3].meaning
- **severity:** HIGH
- **currentCs:** Nebo
- **proposedCs:** Zda • jestli
- **reason:** Ob introduces an indirect question and means zda or jestli, not nebo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00225

- **cardId:** a1-dass
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: to → dass.
- **proposedCs:** Pamatujte: že → dass.
- **reason:** The Czech equivalent of dass is že, while to is not correct in this reminder.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00226

- **cardId:** a1-dass
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Dass znamená „to“ a zavádí pomocnou klauzuli.
- **proposedCs:** Dass znamená „že“ a uvádí vedlejší větu.
- **reason:** The text mistranslates dass and uses an unsuitable grammatical description.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00229

- **cardId:** a1-der
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: mužský → sedí.
- **proposedCs:** Pamatujte: mužský rod → der.
- **reason:** Sedí is an incorrect translation and makes the reminder semantically wrong.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00233

- **cardId:** a1-die
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Kotě spí.
- **proposedCs:** Kočka spí.
- **reason:** Katze znamená „kočka“, nikoli „kotě“. Aktuální český překlad mění význam německé věty.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00234

- **cardId:** a1-die
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Vysvětluje učitel.
- **proposedCs:** Učitelka vysvětluje.
- **reason:** Lehrerin znamená „učitelka“. Aktuální překlad nesprávně mění rod podmětu na mužský.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00235

- **cardId:** a1-die
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: ženský → zemřít.
- **proposedCs:** Pamatujte: ženský rod → die.
- **reason:** „Zemřít“ je chybný význam slova die; tip má vysvětlovat ženský rod a určitý člen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00236

- **cardId:** a1-die
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Množné číslo kostky se také používá pro všechna pohlaví.
- **proposedCs:** V množném čísle se die používá pro všechna tři gramatická rody.
- **reason:** Text obsahuje chybný překlad „kostky“ a nevysvětluje správně užití die v množném čísle.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00237

- **cardId:** a1-dieser
- **field:** study.explanation
- **severity:** MEDIUM
- **currentCs:** Ukazuje na blízkou osobu, věc nebo zvíře. Používá se s podstatným jménem mužského rodu.
- **proposedCs:** Ukazuje na konkrétní nebo zvlášť zdůrazněnou osobu, věc či zvíře. Používá se s podstatným jménem mužského rodu.
- **reason:** Vysvětlení zužuje význam dieser pouze na blízkost, a tím opomíjí obecné ukazovací a zdůrazňovací užití.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00238

- **cardId:** a1-ein
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Neurčitý člen • Jeden • Někdo
- **proposedCs:** Neurčitý člen • Jeden
- **reason:** Ein není samostatný český význam „někdo“; titul obsahuje nesprávný význam a opakuje jej v hlavním názvu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00240

- **cardId:** a1-ein
- **field:** study.explanation
- **severity:** HIGH
- **currentCs:** Používá se s podstatným jménem mužského rodu. Ukázání na jednu věc nebo osobu z několika možností.
- **proposedCs:** Používá se s podstatnými jmény mužského a středního rodu v 1. pádě. Označuje jednu neurčitou věc nebo osobu; v ženském rodě má tvar eine.
- **reason:** Výklad neprávem omezuje ein na mužský rod a druhá věta je neúplná; chybí střední rod a tvar eine.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00241

- **cardId:** a1-eis
- **field:** lv
- **severity:** HIGH
- **currentCs:** Zmrzlina • Zmrzlina
- **proposedCs:** Led • Zmrzlina
- **reason:** Titul opakuje „zmrzlina“ a vynechává běžný význam Eis jako „led“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00242

- **cardId:** a1-eis
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Zmrzlina • Zmrzlina
- **proposedCs:** Led • Zmrzlina
- **reason:** Titul opakuje „zmrzlina“ a vynechává běžný český význam německého Eis jako „led“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00243

- **cardId:** a1-eis
- **field:** study.explanation[0]
- **severity:** CRITICAL
- **currentCs:** Hlavní myšlenka: das Eis může znamenat jak zmrzlinu, tak zmrzlinu.
- **proposedCs:** Hlavní myšlenka: das Eis může znamenat jak led, tak zmrzlinu.
- **reason:** Věta chybně uvádí oba významy jako „zmrzlina“ a vynechává význam „led“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00244

- **cardId:** a1-eis
- **field:** study.important[0]
- **severity:** CRITICAL
- **currentCs:** V češtině jsou zmrzlina a zmrzlina dvě různá slova, ale v němčině se pro obojí často používá das Eis.
- **proposedCs:** V češtině jsou led a zmrzlina dvě různá slova, ale v němčině se pro obojí často používá das Eis.
- **reason:** Text opakuje „zmrzlina“ místo dvojice „led a zmrzlina“, takže uvádí nesprávné české rozlišení.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00245

- **cardId:** a1-eis
- **field:** study.comparison[1].meaning
- **severity:** HIGH
- **currentCs:** Bude sněžit
- **proposedCs:** Sníh
- **reason:** Schnee znamená „sníh“, nikoli slovesné vyjádření „bude sněžit“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00246

- **cardId:** a1-erst
- **field:** lv
- **severity:** HIGH
- **currentCs:** První • Pouze
- **proposedCs:** Nejprve • Teprve • Až
- **reason:** „První“ není běžný adverbiální význam erst; titul má uvádět například „nejprve“, „teprve“ nebo „až“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00247

- **cardId:** a1-erst
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** První • Pouze
- **proposedCs:** Nejprve • Teprve • Až
- **reason:** „První“ je chybný slovní druh i význam; erst se zde překládá jako nejprve, teprve nebo až.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00248

- **cardId:** a1-erst
- **field:** study.examples[0].lv
- **severity:** HIGH
- **currentCs:** Nejdřív pij, pak řiď.
- **proposedCs:** Nejdřív se uč, pak si hraj.
- **reason:** Český překlad neodpovídá německé větě; zaměňuje učení a hraní za pití a řízení.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00249

- **cardId:** a1-erst
- **field:** study.examples[3].lv
- **severity:** MEDIUM
- **currentCs:** Jíme jen v osm.
- **proposedCs:** Jíme až v osm.
- **reason:** V tomto časovém kontextu erst znamená „až“, nikoli pouze „jen“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00250

- **cardId:** a1-erst
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** První • Pouze
- **proposedCs:** Nejprve • Teprve/Až
- **reason:** „První“ není vhodný adverbiální překlad erst.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00251

- **cardId:** a1-erst
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** První • Na začátku
- **proposedCs:** Nejprve • Na začátku
- **reason:** zuerst znamená „nejprve“; „první“ je zde chybný slovní druh i význam.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00252

- **cardId:** a1-erst
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: čas/číslo → erst • Množství → ne.
- **proposedCs:** Pamatujte: čas/číslo → erst • množství → nur.
- **reason:** Tip obsahuje chybný překlad „ne“ místo německého nur.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00253

- **cardId:** a1-es
- **field:** study.explanation
- **severity:** CRITICAL
- **currentCs:** Německé „já“ není zvyklé mluvit o sobě. Používá se k označení: to, to nebo neosobní tvar (počasí, čas, různé neosobní věty).
- **proposedCs:** Německé „es“ je zájmeno. Používá se ve významu „to“ a v neosobních větách, například o počasí nebo čase.
- **reason:** Text chybně zaměňuje německé es za české „já“ a opakuje „to“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00254

- **cardId:** a1-es
- **field:** study.examples[0].lv
- **severity:** HIGH
- **currentCs:** Učím se německy.
- **proposedCs:** Prší.
- **reason:** Překlad neodpovídá větě Es regnet; jde o překlad jiné věty.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00255

- **cardId:** a1-es
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Je unavený.
- **proposedCs:** Je chladno.
- **reason:** Překlad odpovídá větě Er ist müde, nikoli neosobní větě Es ist kalt.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00256

- **cardId:** a1-es
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Ona tady pracuje.
- **proposedCs:** Dítě spí.
- **reason:** Překlad neodpovídá větě Das Kind schläft; jde o překlad jiné věty.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00257

- **cardId:** a1-es
- **field:** study.examples[3].lv
- **severity:** HIGH
- **currentCs:** Je to moje kniha.
- **proposedCs:** Je unavené.
- **reason:** Překlad neodpovídá větě Es ist müde; jde o překlad jiné věty.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00258

- **cardId:** a1-es
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: českýé "es" → ich, ne německé es.
- **proposedCs:** Pamatujte: české „já“ je německy ich, ne es.
- **reason:** Text obsahuje překlep „českýé“ a zaměňuje české „já“ za německé es.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00261

- **cardId:** a1-euch
- **field:** lv
- **severity:** HIGH
- **currentCs:** Ty • Ty
- **proposedCs:** Vás • Vám
- **reason:** euch je zájmeno 2. osoby množného čísla; podle pádu znamená „vás“ nebo „vám“, ne „ty“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00262

- **cardId:** a1-euch
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Ty • Ty
- **proposedCs:** Vás • Vám
- **reason:** „euch“ je množné číslo; české „Ty“ je nesprávný překlad v jednotném čísle.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00263

- **cardId:** a1-euch
- **field:** study.explanation
- **severity:** HIGH
- **currentCs:** „euch“ je zájmeno 2. osoby množného čísla. Používá se jak jako přímý doplněk (kde?) – „vy“ tak jako nepřímý doplněk (ke komu?) – „k vám“.
- **proposedCs:** „euch“ je zájmeno 2. osoby množného čísla. Používá se jako přímý předmět (koho?) – „vás“ i jako nepřímý předmět (komu?) – „vám“.
- **reason:** Vysvětlení má chybnou pádovou otázku i nesprávné české tvary pro přímý a nepřímý předmět.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00264

- **cardId:** a1-euch
- **field:** study.examples[0].lv
- **severity:** HIGH
- **currentCs:** Vidím tě
- **proposedCs:** Vidím vás.
- **reason:** Německé „euch“ označuje více osob, ale český překlad používá jednotné číslo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00265

- **cardId:** a1-euch
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Pomáhám ti
- **proposedCs:** Pomáhám vám.
- **reason:** Dativní „euch“ je množné číslo; české „ti“ je nesprávný jednotný tvar.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00266

- **cardId:** a1-euch
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Dávám ti knihu
- **proposedCs:** Dávám vám knihu.
- **reason:** Dativní „euch“ vyžaduje české množné číslo „vám“, nikoli „ti“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00267

- **cardId:** a1-euch
- **field:** study.examples[3].lv
- **severity:** HIGH
- **currentCs:** Děkuji ti
- **proposedCs:** Děkuji vám.
- **reason:** „euch“ je dativ množného čísla, zatímco české „ti“ je jednotné číslo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00268

- **cardId:** a1-euch
- **field:** study.examples[4].lv
- **severity:** HIGH
- **currentCs:** Pamatuješ
- **proposedCs:** Pamatujete si.
- **reason:** Podmět „ihr“ i zájmeno „euch“ jsou množné; český překlad nesprávně používá jednotné číslo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00270

- **cardId:** a1-fahren
- **field:** lv
- **severity:** HIGH
- **currentCs:** Řídit • Vést • Odvézt
- **proposedCs:** Jet • Jezdit • Vézt
- **reason:** Výčet neuvádí základní významy „jet/jezdit“ a obsahuje nepřesné „vést“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00271

- **cardId:** a1-fahren
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Řídit • Vést • Odvézt
- **proposedCs:** Jet • Jezdit • Vézt
- **reason:** Výčet neuvádí základní významy „jet/jezdit“ a obsahuje nepřesné „vést“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00272

- **cardId:** a1-fahren
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: fahren znamená řídit vozidlo a v některých větách také někoho vzít nebo vzít.
- **proposedCs:** Hlavní myšlenka: fahren znamená jet nebo jezdit dopravním prostředkem a v některých větách také někoho vézt či odvézt.
- **reason:** Vysvětlení zaměňuje základní význam fahren za „řídit“ a dvakrát používá neurčité „vzít“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00273

- **cardId:** a1-fahren
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Když má věta jako předmět osobu, fahren může znamenat vést nebo odnést.
- **proposedCs:** Když je předmětem věty osoba, fahren může znamenat vézt nebo odvézt ji.
- **reason:** „Vést“ a „odnést“ nejsou přesné české ekvivalenty fahren při přepravě osoby.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00279

- **cardId:** a1-finden
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Najít • Zvážit
- **proposedCs:** Najít • Myslet si
- **reason:** „Zvážit“ nevyjadřuje běžný názorový význam finden; vhodnější je „myslet si“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00280

- **cardId:** a1-finden
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Najít / zvážit
- **proposedCs:** Najít / Myslet si
- **reason:** V názorovém významu finden znamená „myslet si“ nebo „považovat“, ne „zvážit“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00281

- **cardId:** a1-finden
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Pokud jde o ztracenou věc, překládá se to jako nález.
- **proposedCs:** Pokud jde o ztracenou věc, překládá se jako najít.
- **reason:** Nález je podstatné jméno, ale německé finden zde vyžaduje český infinitiv najít.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00282

- **cardId:** a1-finden
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: ztracená věc → nalezená • Názor → najdu...
- **proposedCs:** Pamatujte: ztracená věc → najít • Názor → myslet si...
- **reason:** Tip zaměňuje české tvary nalezená a najdu za infinitivní významy najít a myslet si.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00283

- **cardId:** a1-finden
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Ich finde das gut znamená „považuji to za dobré“, nikoli „považuji to za dobré“.
- **proposedCs:** Ich finde das gut znamená „považuji to za dobré“, nikoli „najdu to dobré“.
- **reason:** Obě české části jsou totožné, takže upozornění neodlišuje najít od významu považovat.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00284

- **cardId:** a1-fuer
- **field:** lv
- **severity:** HIGH
- **currentCs:** Pro • Pro
- **proposedCs:** Pro • Za
- **reason:** České významy für jsou neúplné; ve vazbách jako danke für a bezahlen für se běžně překládá za.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00285

- **cardId:** a1-fuer
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Pro • Pro
- **proposedCs:** Pro • Za
- **reason:** Druhý hlavní český význam für je za, nikoli opakování pro.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00286

- **cardId:** a1-fuer
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Když mluvíme o příjemci nebo záměru, für = pro (für dich = pro vás).
- **proposedCs:** Když mluvíme o příjemci nebo záměru, für = pro (für dich = pro tebe).
- **reason:** Dich je neformální jednotné číslo a odpovídá českému tebe, ne vykacímu vás.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00287

- **cardId:** a1-fuer
- **field:** study.examples[1].lv
- **severity:** MEDIUM
- **currentCs:** Děkuji za vaši pomoc.
- **proposedCs:** Děkuji za pomoc.
- **reason:** Český překlad přidává přivlastnění, které v německém originálu není a zbytečně zužuje význam.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00288

- **cardId:** a1-fuer
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Danke für / bezahlen für = 'pro', nikoli 'před'.
- **proposedCs:** Danke für / bezahlen für = „za“, nikoli „před“.
- **reason:** V uvedených vazbách se für překládá za; současné upozornění navíc uvádí chybné před.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00290

- **cardId:** a1-geben
- **field:** study.comparison[1].meaning
- **severity:** LOW
- **currentCs:** Vzít / vzít
- **proposedCs:** Brát / vzít
- **reason:** Porovnání ztrácí české aspektové rozlišení mezi brát a vzít.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00291

- **cardId:** a1-geben
- **field:** study.tip.text
- **severity:** MEDIUM
- **currentCs:** Pamatujte: rozdat → geben • Vzít si pro sebe → nehmen.
- **proposedCs:** Pamatujte: dávat → geben • Vzít si pro sebe → nehmen.
- **reason:** Rozdat označuje pouze rozdání; běžný význam geben je obecnější dávat.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00292

- **cardId:** a1-gleich
- **field:** study.explanation[2]
- **severity:** LOW
- **currentCs:** Pokud jde o srovnání, gleich = stejný/stejný (die gleiche Farbe = stejná barva).
- **proposedCs:** Pokud jde o srovnání, gleich = stejný nebo stejný jako (die gleiche Farbe = stejná barva).
- **reason:** Opakování stejný/stejný je chybná a nepřirozená formulace českého významu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00294

- **cardId:** a1-gleich
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Dobře! = brzy se uvidíme! — běžná rozlučovací fráze.
- **proposedCs:** Bis gleich! = brzy se uvidíme! — běžná rozlučovací fráze.
- **reason:** Bis gleich! je rozlučovací fráze; české Dobře! neodpovídá německému originálu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00295

- **cardId:** a1-gut-study
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: střevo je přídavné jméno/příslovce – dobrý, úspěšný, v pořádku.
- **proposedCs:** Hlavní myšlenka: gut je přídavné jméno nebo příslovce – dobrý, dobře, v pořádku.
- **reason:** Střevo je chybné doslovné podstatné jméno; gut je přídavné jméno nebo příslovce.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00296

- **cardId:** a1-gut-study
- **field:** study.tip[0]
- **severity:** HIGH
- **currentCs:** Střevo bez článku je přídavné jméno/příslovce – dobrý/dobře.
- **proposedCs:** Gut bez členu je přídavné jméno nebo příslovce – dobrý/dobře.
- **reason:** „Střevo“ je chybný překlad slova gut a mění význam celé české studijní poznámky.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00297

- **cardId:** a1-gut-study
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Střevo = dobrý/dobře (přídavné jméno/přívlastek).
- **proposedCs:** Gut = dobrý/dobře (přídavné jméno nebo příslovce).
- **reason:** „Střevo“ je nesouvisející překlad a neodpovídá německému slovu gut.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00298

- **cardId:** a1-gut-study
- **field:** study.important[2]
- **severity:** HIGH
- **currentCs:** Guten Tag/Morgen/Abend - střevní změny končící po skloňování.
- **proposedCs:** Guten Tag/Morgen/Abend – koncovka přídavného jména gut se mění podle skloňování.
- **reason:** „Střevní změny“ jsou nesmyslný překlad; text má vysvětlovat skloňování přídavného jména gut.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00299

- **cardId:** a1-halten
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Prosím přestaň
- **proposedCs:** Prosím, zastavte.
- **reason:** Sie vyjadřuje vykání nebo množné číslo a halten Sie an zde znamená „zastavte“, nikoli neformální „přestaň“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00300

- **cardId:** a1-halten
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: zastavit znamená držet, ale s přepravou nebo pohybem může znamenat zastavit nebo zastavit.
- **proposedCs:** Hlavní myšlenka: halten znamená držet; u dopravy může znamenat zastavit nebo mít zastávku.
- **reason:** Vysvětlení zaměňuje základní význam halten „držet“ za „zastavit“ a obsahuje chybnou formulaci.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00301

- **cardId:** a1-halten
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: v ruce → zastavit • Doprava → zastavení/zastávky.
- **proposedCs:** Pamatujte: předmět v ruce → držet • zastavit se → anhalten; doprava → halten.
- **reason:** Tip chybně překládá držení jako zastavení a neodlišuje halten od anhalten.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00302

- **cardId:** a1-heißen
- **field:** lv
- **severity:** HIGH
- **currentCs:** Být nazýván • Podlý
- **proposedCs:** Jmenovat se • Znamenat
- **reason:** „Podlý“ je chybný význam; heißen v této úrovni znamená „jmenovat se“ nebo „znamenat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00303

- **cardId:** a1-heißen
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Být nazýván • Podlý
- **proposedCs:** Jmenovat se • Znamenat
- **reason:** „Podlý“ je zcela nesouvisející překlad druhého významu slovesa heißen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00304

- **cardId:** a1-heißen
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Střední
- **proposedCs:** Znamenat
- **reason:** Německé bedeuten znamená „znamenat“, nikoli „střední“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00305

- **cardId:** a1-heißen
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Byl heißt das? často znamená "Co to znamená?".
- **proposedCs:** Was heißt das? často znamená „Co to znamená?“.
- **reason:** „Byl heißt das?“ je chybná věta; správné německé zájmeno je Was.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00306

- **cardId:** a1-hoch-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Hora je vysoká.
- **proposedCs:** Regál je vysoký dva metry.
- **reason:** Překlad „Hora je vysoká“ neodpovídá větě o regálu vysokém dva metry.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00307

- **cardId:** a1-hoch-study
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: Vysoká svisle, úroveň nebo výška.
- **proposedCs:** Hlavní myšlenka: Vysoký ve svislém směru nebo na vysoké úrovni.
- **reason:** Vysvětlení je gramaticky neúplné a nesprávně používá ženský rod místo obecného významu vysoký.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00308

- **cardId:** a1-hoeren-study
- **field:** study.examples[1].lv
- **severity:** MEDIUM
- **currentCs:** Děti poslouchají pohádku.
- **proposedCs:** Děti poslouchají příběh.
- **reason:** Geschichte znamená příběh nebo vyprávění; „pohádka“ je užší význam než německý originál.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00310

- **cardId:** a1-ihr
- **field:** study.examples[0].lv
- **severity:** HIGH
- **currentCs:** Přijdeš dnes večer?
- **proposedCs:** Přijdete dnes večer?
- **reason:** Německé ihr je 2. osoba množného čísla, proto český překlad vyžaduje vykání nebo množné číslo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00311

- **cardId:** a1-ihr
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Kde bydlíš
- **proposedCs:** Kde bydlíte?
- **reason:** German ihr is plural or formal you; Czech requires the plural/formal form and the question mark.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00312

- **cardId:** a1-ihr
- **field:** study.examples[4].lv
- **severity:** HIGH
- **currentCs:** Máš čas?
- **proposedCs:** Máte čas?
- **reason:** German ihr is plural you, so the Czech verb must use the plural or formal form.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00313

- **cardId:** a1-ihr
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Ihr jako přivlastňovací zájmeno znamená ji (ihr Buch = její kniha).
- **proposedCs:** Ihr jako přivlastňovací zájmeno znamená její (ihr Buch = její kniha).
- **reason:** As a possessive pronoun, ihr means její, not ji.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00314

- **cardId:** a1-ihr
- **field:** study.tip[1]
- **severity:** HIGH
- **currentCs:** Kontrola: Habt ihr...? / Kommt ihr...? = ty • Ich gebe ihr... / ihr Buch = pro ni/její.
- **proposedCs:** Kontrola: Habt ihr...? / Kommt ihr...? = vy • Ich gebe ihr... / ihr Buch = jí/její.
- **reason:** Habt ihr and kommt ihr mean vy; dative ihr means jí, while possessive ihr means její.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00315

- **cardId:** a1-ihr
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Ihr = vy (adresa několika) NEBO její (dativ) NEBO její (přivlastňovací) – v závislosti na kontextu.
- **proposedCs:** Ihr = vy (adresa několika) NEBO jí (dativ) NEBO její (přivlastňovací) – v závislosti na kontextu.
- **reason:** The dative pronoun ihr is jí; její is the possessive meaning.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00316

- **cardId:** a1-im
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Uvnitř kde? (komu?)
- **proposedCs:** V / uvnitř, kde? (3. pád)
- **reason:** Im is a dative contraction and indicates location, answering kde?, not komu? in this context.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00317

- **cardId:** a1-im
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Dovnitř, kam? (účet)
- **proposedCs:** Dovnitř, kam? (4. pád)
- **reason:** Akk. is the abbreviation for accusative, not the Czech word účet.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00318

- **cardId:** a1-im
- **field:** study.comparison[2].meaning
- **severity:** LOW
- **currentCs:** V / do (žádný článek)
- **proposedCs:** V / do (bez členu)
- **reason:** The Czech grammatical term is člen; bez členu is the appropriate phrasing here.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00319

- **cardId:** a1-im
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Plná forma: in dem (komu?).
- **proposedCs:** Plná forma: in dem (3. pád, kde?).
- **reason:** In dem is dative and, with im, expresses location answering kde?, not komu?.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00320

- **cardId:** a1-im
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Odpovědi kam?, ne kde? — umístění, nikoli pohyb.
- **proposedCs:** Odpovídá na otázku kde?, ne kam? — označuje umístění, nikoli pohyb.
- **reason:** Im expresses stationary location and answers kde?, whereas kam? indicates movement.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00321

- **cardId:** a1-im
- **field:** study.important[3]
- **severity:** HIGH
- **currentCs:** Pro ženy: in der Schule, ne im Schule.
- **proposedCs:** Pro ženský rod: in der Schule, ne im Schule.
- **reason:** Der refers to grammatical feminine gender, not women as people.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00322

- **cardId:** a1-ins
- **field:** study.examples[7].lv
- **severity:** HIGH
- **currentCs:** Prosím jděte do centra.
- **proposedCs:** Jeďte prosím do centra.
- **reason:** Fahr denotes travel by vehicle, so jeďte is the semantically accurate Czech imperative.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00323

- **cardId:** a1-ins
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Dovnitř, kam? (účet)
- **proposedCs:** Dovnitř, kam? (4. pád)
- **reason:** Akk. is the abbreviation for accusative, not the Czech word účet.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00324

- **cardId:** a1-ins
- **field:** study.comparison[4].meaning
- **severity:** MEDIUM
- **currentCs:** Komu / u (koho?)
- **proposedCs:** K / ke (3. pád)
- **reason:** Zum is zu dem and primarily corresponds here to k/ke with the Czech dative.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00325

- **cardId:** a1-ins
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** Plná forma: v das (kde?).
- **proposedCs:** Plná forma: in das (kam?).
- **reason:** The full German form is in das, and ins expresses direction answering kam?, not location kde?.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00326

- **cardId:** a1-ins
- **field:** study.explanation[4]
- **severity:** HIGH
- **currentCs:** V praxi se téměř vždy používá místo plného indas.
- **proposedCs:** V praxi se téměř vždy používá místo plného in das.
- **reason:** Text obsahuje cizí chybné spojení „indas“ místo německého „in das“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00327

- **cardId:** a1-ins
- **field:** study.tip[1]
- **severity:** HIGH
- **currentCs:** Kde? → ins • Kde? → im - to je hlavní rozdíl!
- **proposedCs:** Kam? → ins • Kde? → im – to je hlavní rozdíl!
- **reason:** U ins je správná otázka kam?, zatímco kde? patří k im.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00328

- **cardId:** a1-in
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: v/v → v.
- **proposedCs:** Pamatujte: uvnitř / v prostoru → in.
- **reason:** Tip je významově nesmyslný a nevysvětluje význam předložky in.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00329

- **cardId:** a1-jung
- **field:** study.examples[4].lv
- **severity:** HIGH
- **currentCs:** Je to nový pár.
- **proposedCs:** Je to mladý pár.
- **reason:** Junges Paar znamená mladý pár; „nový pár“ mění význam německé věty.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00330

- **cardId:** a1-kein
- **field:** lv
- **severity:** HIGH
- **currentCs:** Nikdo • Nic
- **proposedCs:** Žádný • Žádná • Žádné
- **reason:** Kein je záporný člen před podstatným jménem, nikoli česká zájmena nikdo a nic.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00331

- **cardId:** a1-kein
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Nikdo • Nic
- **proposedCs:** Žádný • Žádná • Žádné
- **reason:** Kein je záporný člen před podstatným jménem, nikoli česká zájmena nikdo a nic.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00332

- **cardId:** a1-kennen-study
- **field:** lv
- **severity:** HIGH
- **currentCs:** Vědět
- **proposedCs:** Znát
- **reason:** Kennen znamená znát; české „vědět“ odpovídá německému wissen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00333

- **cardId:** a1-kennen-study
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Vědět
- **proposedCs:** Znát
- **reason:** Kennen znamená znát; české „vědět“ odpovídá německému wissen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00334

- **cardId:** a1-kennen-study
- **field:** study.examples[4].lv
- **severity:** HIGH
- **currentCs:** Poznat moudrý
- **proposedCs:** Znát; wissen = vědět
- **reason:** Text je nesrozumitelný a obsahuje významovou kontaminaci mezi kennen a wissen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00335

- **cardId:** a1-wissen-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Jak to víš?
- **proposedCs:** Jak to víte?
- **reason:** Německé Sie vyžaduje české vykání, nikoli tykání.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00336

- **cardId:** a1-können
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Umět • Vědět
- **proposedCs:** Umět • Moci
- **reason:** Können vyjadřuje schopnost nebo možnost; „vědět“ je chybný význam.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00337

- **cardId:** a1-können
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** Pokud jde o schopnosti nebo dovednosti, češtině často říká vědět.
- **proposedCs:** Pokud jde o schopnosti nebo dovednosti, čeština často používá sloveso umět.
- **reason:** Vysvětlení chybně uvádí vědět místo umět pro schopnosti a dovednosti.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00338

- **cardId:** a1-können
- **field:** study.comparison[0].meaning
- **severity:** HIGH
- **currentCs:** Být schopen / vědět
- **proposedCs:** Umět / moci
- **reason:** Položka obsahuje chybný význam vědět; können odpovídá umět nebo moci.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00339

- **cardId:** a1-können
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Potřebovat / být ano-
- **proposedCs:** Muset / být nucen
- **reason:** Položka je poškozená a významově chybná; müssen znamená muset nebo být nucen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00342

- **cardId:** a1-kosten
- **field:** lv
- **severity:** HIGH
- **currentCs:** Platit
- **proposedCs:** Stát
- **reason:** Německé kosten označuje cenu nebo náklad; české „platit“ označuje provedení platby.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00343

- **cardId:** a1-kosten
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Platit
- **proposedCs:** Stát
- **reason:** Studijní překlad zaměňuje cenu za činnost placení.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00344

- **cardId:** a1-kosten
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Zaplatit (cena) • Kolik
- **proposedCs:** Stát (cenu) • Kolik stát
- **reason:** „Zaplatit“ znamená provést platbu, nikoli vyjádřit cenu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00345

- **cardId:** a1-laden-study
- **field:** lv
- **severity:** HIGH
- **currentCs:** Nakupovat
- **proposedCs:** Obchod
- **reason:** Velké německé Laden je podstatné jméno „obchod“, nikoli sloveso „nakupovat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00346

- **cardId:** a1-laden-study
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Nakupovat
- **proposedCs:** Obchod
- **reason:** Studijní překlad zaměňuje podstatné jméno Laden za sloveso „nakupovat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00347

- **cardId:** a1-laden-study
- **field:** study.examples[3].lv
- **severity:** MEDIUM
- **currentCs:** Potřebuji nabít telefon.
- **proposedCs:** Musím nabít telefon.
- **reason:** V této větě muss vyjadřuje povinnost „musím“, ne potřebu „potřebuji“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00348

- **cardId:** a1-land
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Země • Země
- **proposedCs:** Země • Venkov
- **reason:** Duplicitní „země“ nerozlišuje význam venkova oproti státu nebo zemi.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00349

- **cardId:** a1-land
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Obec
- **proposedCs:** Vesnice
- **reason:** Dorf znamená konkrétně „vesnice“; „obec“ je širší administrativní pojem.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00350

- **cardId:** a1-land
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Aufs Land znamená „na venkov“, nikoli „na venkov“.
- **proposedCs:** Aufs Land znamená „na venkov“, nikoli „do státu“.
- **reason:** Věta opakuje stejný význam a neodlišuje venkov od státu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00351

- **cardId:** a1-lang
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Dlouhý • Dlouhý
- **proposedCs:** Dlouhý • Dlouho
- **reason:** Druhý význam lang je příslovečné „dlouho“, ne opakované přídavné jméno „dlouhý“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00352

- **cardId:** a1-lang
- **field:** lv
- **severity:** HIGH
- **currentCs:** Dlouhý • Dlouhý
- **proposedCs:** Dlouhý • Dlouho
- **reason:** Hlavní překlad nerozlišuje prostorový význam „dlouhý“ a časový význam „dlouho“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00353

- **cardId:** a1-lang
- **field:** study.explanation[4]
- **severity:** HIGH
- **currentCs:** České „dlouhý“ a „dlouhý“ jsou dvě různá slova, ale německý jazyk zahrnuje oba významy.
- **proposedCs:** České „dlouhý“ a „dlouho“ jsou dvě různé formy, zatímco německé lang pokrývá oba významy.
- **reason:** Vysvětlení označuje dvě identická česká slova za různá a je proto nesrozumitelné.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00354

- **cardId:** a1-lang
- **field:** study.examples[5].lv
- **severity:** MEDIUM
- **currentCs:** Celý den (na délku).
- **proposedCs:** Celý den.
- **reason:** Dodatek „na délku“ je v této české větě nepřirozený a zavádějící.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00355

- **cardId:** a1-lassen
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Opustit • Nechat
- **proposedCs:** Nechat • Dovolit
- **reason:** V uvedeném základním významu lassen znamená „nechat“ nebo „dovolit“, ne „opustit“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00356

- **cardId:** a1-lassen
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** Pokud něco zůstane na místě, lassen se překládá jako odejít.
- **proposedCs:** Pokud něco necháte na místě, lassen se překládá jako nechat.
- **reason:** Vysvětlení chybně překládá lassen jako „odejít“ místo „nechat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00357

- **cardId:** a1-lassen
- **field:** study.examples[0].lv
- **severity:** MEDIUM
- **currentCs:** Nechal jsem tu tašku
- **proposedCs:** Nechávám tu tašku
- **reason:** Český překlad je v minulém čase, zatímco německý originál je v přítomném čase.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00358

- **cardId:** a1-lassen
- **field:** study.examples[2].lv
- **severity:** MEDIUM
- **currentCs:** Rodiče mě nechali jít.
- **proposedCs:** Rodiče mě nechávají jít.
- **reason:** Český překlad je v minulém čase, německá věta však používá přítomný čas.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00359

- **cardId:** a1-lassen
- **field:** study.comparison[1].meaning
- **severity:** HIGH
- **currentCs:** Pobyt
- **proposedCs:** Zůstat
- **reason:** Sloveso bleiben znamená „zůstat“, nikoli podstatné jméno „pobyt“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00360

- **cardId:** a1-lassen
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Lass mich v Ruhe! existuje velmi častá věta: "Nech mě na pokoji!"
- **proposedCs:** Lass mich in Ruhe! je velmi častá věta: „Nech mě na pokoji!“
- **reason:** Německá fráze obsahuje překlep; oprava zároveň sjednocuje české uvozovky.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00361

- **cardId:** a1-laufen
- **field:** lv
- **severity:** HIGH
- **currentCs:** Běžet • Provozovat
- **proposedCs:** Běžet • Fungovat
- **reason:** U zařízení, filmu nebo programu laufen znamená „fungovat“ či „běžet“, ne „provozovat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00362

- **cardId:** a1-laufen
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Běžet • Provozovat
- **proposedCs:** Běžet • Fungovat
- **reason:** Druhý význam slovesa laufen popisuje stav nebo průběh, nikoli činnost provozování něčeho.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00363

- **cardId:** a1-laufen
- **field:** study.comparison[0].meaning
- **severity:** HIGH
- **currentCs:** Spustit / provozovat
- **proposedCs:** Běžet / fungovat
- **reason:** Laufen zde vyjadřuje, že něco běží nebo funguje, nikoli kauzativní činnosti „spustit“ či „provozovat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00364

- **cardId:** a1-laufen
- **field:** study.comparison[3].meaning
- **severity:** HIGH
- **currentCs:** Provozovat
- **proposedCs:** Fungovat
- **reason:** Funktionieren je nepřechodné sloveso s významem „fungovat“, nikoli „provozovat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00365

- **cardId:** a1-laut
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** Laut v podstatě znamená: zvukový signál.
- **proposedCs:** Laut znamená „hlasitý“; „zvukový signál“ je význam podstatného jména der Laut.
- **reason:** Text zaměňuje přídavné jméno laut s podstatným jménem der Laut.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00366

- **cardId:** a1-laut
- **field:** study.explanation[4]
- **severity:** MEDIUM
- **currentCs:** Často popisuje: podstatné jméno (der).
- **proposedCs:** Je to přídavné jméno, které popisuje podstatné jméno.
- **reason:** Současná formulace je gramaticky neúplná a nesrozumitelná.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00367

- **cardId:** a1-laut
- **field:** study.tip[1]
- **severity:** HIGH
- **currentCs:** Laut = zvuk
- **proposedCs:** Der Laut = zvuk; laut = hlasitý
- **reason:** Tip bez členu zaměňuje význam přídavného jména laut s významem podstatného jména der Laut.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00368

- **cardId:** a1-laut
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Laut je malá písmena a nemá žádný člen - je to přídavné jméno.
- **proposedCs:** Laut se píše s malým písmenem a bez členu; je to přídavné jméno.
- **reason:** Současná formulace je gramaticky chybná a nesprávně popisuje zápis přídavného jména.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00369

- **cardId:** a1-laut-study
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** Der Laut primárně znamená: hlasitý zvuk.
- **proposedCs:** Der Laut primárně znamená zvuk nebo hlásku.
- **reason:** Der Laut znamená zvuk nebo hlásku; význam „hlasitý“ patří přídavnému jménu laut.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00370

- **cardId:** a1-legen
- **field:** study.examples[0].lv
- **severity:** MEDIUM
- **currentCs:** Položil jsem knihu na stůl.
- **proposedCs:** Pokládám knihu na stůl.
- **reason:** Český překlad je v minulém čase, zatímco německý originál je v přítomném čase.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00371

- **cardId:** a1-legen
- **field:** study.comparison[1].meaning
- **severity:** HIGH
- **currentCs:** Být / spát
- **proposedCs:** Ležet / nacházet se
- **reason:** Liegen znamená „ležet“ nebo „nacházet se“, nikoli obecně „být“ či „spát“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00372

- **cardId:** a1-legen
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** Na úrovni A1 je nejdůležitější rozdíl: legen = ležet, liegen = ležet.
- **proposedCs:** Na úrovni A1 je nejdůležitější rozdíl: legen = položit, liegen = ležet.
- **reason:** Legen means to lay or put down, while liegen means to lie; the current explanation gives both the same incorrect Czech meaning.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00373

- **cardId:** a1-legen
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: ležíte → legen • Ta věc už tam je → liegen.
- **proposedCs:** Pamatujte: pokládáte → legen • Ta věc už leží → liegen.
- **reason:** The tip incorrectly associates ležíte with legen; legen describes placing something, while liegen describes its resulting position.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00374

- **cardId:** a1-legen
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Ich lege das Buch = knihu jsem odložil. Das Buch liegt = kniha lže.
- **proposedCs:** Ich lege das Buch = Položím knihu. Das Buch liegt = Kniha leží.
- **reason:** The first translation changes the tense and the second contains the typo lže instead of leží, creating a semantic error.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00375

- **cardId:** a1-leise-study
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Klid
- **proposedCs:** Tichý • Potichu
- **reason:** Klid means calm or peace, not the core meaning of leise, which is quiet or softly.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00376

- **cardId:** a1-leise-study
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Prosím mluv potichu.
- **proposedCs:** Prosím, mluv potichu.
- **reason:** The Czech vocative-like introductory request Prosím requires a comma before the imperative.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00377

- **cardId:** a1-leise-study
- **field:** study.important[1]
- **severity:** MEDIUM
- **currentCs:** Leise = objem.
- **proposedCs:** Leise = hlasitost.
- **reason:** Objem means volume or quantity; in this context leise concerns loudness, expressed as hlasitost.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00379

- **cardId:** a1-liegen
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Liegen ukazuje stát nebo umístění.
- **proposedCs:** Liegen ukazuje polohu nebo umístění.
- **reason:** Stát means to stand, corresponding to stehen, not liegen. The wording should describe position or location.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00380

- **cardId:** a1-liegen
- **field:** study.sectionAccents.examples[2].lv.purple[0]
- **severity:** MEDIUM
- **currentCs:** Spí
- **proposedCs:** Leží
- **reason:** For Er liegt im Bett, the highlighted Czech meaning should be leží; spí adds the separate meaning sleeps.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00381

- **cardId:** a1-machen
- **field:** study.examples[0].lv
- **severity:** MEDIUM
- **currentCs:** Co to děláš
- **proposedCs:** Co děláš?
- **reason:** The Czech sentence is missing a question mark. Removing to is a natural concise rendering of the German question.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00382

- **cardId:** a1-machen
- **field:** study.tip.text
- **severity:** CRITICAL
- **currentCs:** Pamatujte: Byl machst du? = Co děláš?
- **proposedCs:** Pamatujte: Was machst du? = Co děláš?
- **reason:** Byl machst du? is invalid German and does not reproduce the source phrase Was machst du?
- **status:** CONFIRMED_REAL

#### FINAL-A1-00383

- **cardId:** a1-mal
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Čas
- **proposedCs:** Krát • Příležitost
- **reason:** In the cited expressions, Mal means a time or occasion, not the general concept of time.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00384

- **cardId:** a1-mal
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: das Mal znamená jednou jako událost nebo příležitost.
- **proposedCs:** Hlavní myšlenka: das Mal znamená krát nebo příležitost jako událost.
- **reason:** Jednou primarily translates einmal; das Mal denotes a time or occasion as an occurrence.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00385

- **cardId:** a1-mal
- **field:** study.important[1]
- **severity:** LOW
- **currentCs:** Ein Mal, zwei Mal - počítat časy.
- **proposedCs:** Ein Mal, zwei Mal – počítat opakování.
- **reason:** Počítat časy is unnatural here and can suggest measuring time; the intended meaning is counting repetitions.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00386

- **cardId:** a1-mann
- **field:** study.sectionAccents.tip[1].purple[0]
- **severity:** MEDIUM
- **currentCs:** Přivlastňovací
- **proposedCs:** Bez přivlastňovacího zájmena
- **reason:** Der Mann and ein Mann are used without a possessive pronoun; the current highlighted label states the opposite.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00387

- **cardId:** a1-mit
- **field:** study.important[1]
- **severity:** CRITICAL
- **currentCs:** Kde bydlíš? znamená "Půjdeš se mnou?"
- **proposedCs:** Kommst du mit? znamená „Půjdeš se mnou?“
- **reason:** Kde bydlíš? means Where do you live? and is unrelated to the German phrase Kommst du mit?
- **status:** CONFIRMED_REAL

#### FINAL-A1-00388

- **cardId:** a1-morgen
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Přijdu zítra
- **proposedCs:** Přijdu zítra.
- **reason:** Oznamovací věta v produkci skutečně postrádá koncovou tečku.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00389

- **cardId:** a1-morgen
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Zítra je pondělí
- **proposedCs:** Zítra je pondělí.
- **reason:** Oznamovací věta v produkci skutečně postrádá koncovou tečku.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00390

- **cardId:** a1-morgen-study
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** Der Morgen hlavně znamená: druhý den.
- **proposedCs:** Der Morgen hlavně znamená: ráno.
- **reason:** Produkční výklad zaměňuje německé podstatné jméno Morgen za význam zítřka.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00391

- **cardId:** a1-morgen-study
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Často charakterizováno: počasím.
- **proposedCs:** Často označuje část dne.
- **reason:** Produkční text nesprávně spojuje význam slova Morgen s počasím.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00393

- **cardId:** a1-morgen-study
- **field:** study.explanation[4]
- **severity:** MEDIUM
- **currentCs:** Často popisuje: podstatné jméno (der).
- **proposedCs:** Je to podstatné jméno mužského rodu se členem der.
- **reason:** Produkční formulace je nepřirozená a neúplně popisuje rod a člen podstatného jména.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00394

- **cardId:** a1-morgen-study
- **field:** study.explanation[5]
- **severity:** HIGH
- **currentCs:** Der Morgen v podstatě znamená: několik ran.
- **proposedCs:** Množné číslo die Morgen znamená rána.
- **reason:** Produkce chybně uvádí význam jednotného čísla jako několik ran.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00395

- **cardId:** a1-morgen-study
- **field:** study.explanation[6]
- **severity:** MEDIUM
- **currentCs:** Často charakterizováno: podstatné jméno (pl.).
- **proposedCs:** Množné číslo je die Morgen.
- **reason:** Produkční text je gramaticky neúplný a neuvádí přímo tvar množného čísla.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00396

- **cardId:** a1-morgen-study
- **field:** study.explanation[7]
- **severity:** HIGH
- **currentCs:** Morgen s malým počátečním písmenem znamená zítra - pozítří (Ich komme morgen = přijdu zítra, Bis morgen!
- **proposedCs:** morgen s malým počátečním písmenem znamená zítra (Ich komme morgen = přijdu zítra, Bis morgen!).
- **reason:** Produkce uvádí chybný význam pozítří a obsahuje neuzavřenou závorku.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00397

- **cardId:** a1-morgen-study
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Morgen je malé písmeno - je to časové příslovce (zítra).
- **proposedCs:** morgen se píše s malým písmenem – je to časové příslovce (zítra).
- **reason:** Produkční věta nesprávně označuje Morgen s velkým písmenem za malé písmeno.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00398

- **cardId:** a1-morgen-study
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Přijdu zítra
- **proposedCs:** Přijdu zítra.
- **reason:** Oznamovací věta v produkci skutečně postrádá koncovou tečku.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00399

- **cardId:** a1-morgen-study
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Zítra je pondělí
- **proposedCs:** Zítra je pondělí.
- **reason:** Oznamovací věta v produkci skutečně postrádá koncovou tečku.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00400

- **cardId:** a1-müssen
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Musit
- **proposedCs:** Muset
- **reason:** Český infinitiv slovesa müssen je „muset“, nikoli produkční „musit“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00401

- **cardId:** a1-müssen
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: müssen znamená něco dělat.
- **proposedCs:** Hlavní myšlenka: müssen znamená, že je nutné něco dělat.
- **reason:** Produkční výklad vynechává význam nutnosti a je významově neúplný.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00402

- **cardId:** a1-müssen
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** V češtině se müssen často překládá jako „já ano...“, „ty ano...“, „my ano...“.
- **proposedCs:** V češtině se müssen často překládá jako „já musím...“, „ty musíš...“, „my musíme...“.
- **reason:** Produkční české příklady „já ano“ chybně překládají modální nutnost.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00403

- **cardId:** a1-müssen
- **field:** study.sectionAccents.examples[1].lv.purple[0]
- **severity:** MEDIUM
- **currentCs:** Musíte
- **proposedCs:** Musíš
- **reason:** Český překlad je ve vykání nebo množném čísle, zatímco německý příklad používá neformální jednotné číslo.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00405

- **cardId:** a1-nach
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: nach znamená to s místy a potom s časem nebo posloupností.
- **proposedCs:** Hlavní myšlenka: nach se používá s místy pro směr a s časem nebo posloupností pro význam „po“.
- **reason:** Současné vysvětlení je gramaticky chybné a nejasně popisuje význam směru i význam „po“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00406

- **cardId:** a1-nach
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** S městy a zeměmi bez článku nach často znamená.
- **proposedCs:** S městy a zeměmi bez členu nach často znamená „do“.
- **reason:** Vysvětlení nedokončuje význam konstrukce; u měst a zemí má nach často význam „do“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00407

- **cardId:** a1-nach
- **field:** study.important[1]
- **severity:** MEDIUM
- **currentCs:** Do školy se obvykle chodí v die Schule, ne nach Schule.
- **proposedCs:** Do školy se obvykle chodí „in die Schule“, ne „nach Schule“.
- **reason:** Citovaná německá fráze je chybně uvedena jako české „v die Schule“ místo „in die Schule“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00408

- **cardId:** a1-nehmen
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Přinesl jsem ti knihu
- **proposedCs:** Přinesu ti knihu.
- **reason:** Český minulý čas neodpovídá německému přítomnému času v daném příkladu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00409

- **cardId:** a1-nehmen
- **field:** study.examples[3].lv
- **severity:** HIGH
- **currentCs:** Vezmu tě
- **proposedCs:** Vyzvednu tě.
- **reason:** Sloveso abholen v tomto kontextu znamená někoho vyzvednout, nikoli pouze vzít.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00410

- **cardId:** a1-nehmen
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Jít za / aport
- **proposedCs:** Jít pro / vyzvednout
- **reason:** Výrazy „jít za“ a „aport“ nejsou vhodnými českými ekvivalenty pro význam slovesa holen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00411

- **cardId:** a1-nehmen
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: nehmen znamená vzít nebo vzít.
- **proposedCs:** Hlavní myšlenka: nehmen znamená brát nebo vzít.
- **reason:** Současné vysvětlení opakuje stejné sloveso a nevyjadřuje dvojici českých významů brát a vzít.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00412

- **cardId:** a1-nehmen
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Není to totéž jako přinesený, protože přinesený znamená někomu přinést nebo vzít.
- **proposedCs:** Není to totéž jako bringen, protože bringen znamená někomu něco přinést nebo odnést.
- **reason:** Text obsahuje chybný tvar a zaměňuje české vysvětlení za německé sloveso bringen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00413

- **cardId:** a1-nehmen
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** Holen znamená jít za a aportovat/vzít.
- **proposedCs:** Holen znamená jít pro něco nebo někoho vyzvednout.
- **reason:** „Aportovat“ není obecný český překlad slovesa holen; význam je jít pro něco nebo někoho vyzvednout.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00414

- **cardId:** a1-nehmen
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Ich nehme den Bus znamená v češtině „řídím autobus“.
- **proposedCs:** Ich nehme den Bus znamená v češtině „jedu autobusem“.
- **reason:** nehmen den Bus znamená jet autobusem, nikoli řídit autobus.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00415

- **cardId:** a1-nehmen
- **field:** study.tip.text
- **severity:** MEDIUM
- **currentCs:** Pamatujte: vezměte si pro sebe → nehmen • Někoho přivést → přivést.
- **proposedCs:** Pamatujte: vezměte si něco pro sebe → nehmen • přineste něco někomu → bringen.
- **reason:** Druhá část nesprávně používá české sloveso přivést a opakuje překlad místo slovesa bringen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00416

- **cardId:** a1-neu
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** V češtině má slovo mladý dva významy: mladý ve věku (jung) a mladý/nedávno vytvořený (neu).
- **proposedCs:** V češtině se „nový“ používá pro věci a „mladý“ pro věk člověka nebo zvířete (jung).
- **reason:** Současný text nesprávně připisuje češtině význam „mladý“ pro nově vytvořené věci; správné rozlišení je nový versus mladý.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00417

- **cardId:** a1-neu
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Neu popisuje věci a zprávy, ani věk člověka nebo zvířete.
- **proposedCs:** Neu popisuje věci a zprávy, ne věk člověka nebo zvířete.
- **reason:** Spojení „ani věk“ zde nenavazuje na zápor a věta je gramaticky nesprávná.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00418

- **cardId:** a1-neu
- **field:** study.examples[6].lv
- **severity:** LOW
- **currentCs:** Co je nového
- **proposedCs:** Co je nového?
- **reason:** Přímá otázka v češtině vyžaduje otazník.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00419

- **cardId:** a1-ob
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: ob zavádí nepřímou otázku a v češtině nejčastěji znamená popř.
- **proposedCs:** Hlavní myšlenka: ob zavádí nepřímou otázku a v češtině nejčastěji znamená „zda“ nebo „jestli“.
- **reason:** „Popř.“ znamená „případně“, nikoli „zda“ nebo „jestli“; význam ob je tím zkreslen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00420

- **cardId:** a1-ob
- **field:** study.comparison[0].meaning
- **severity:** HIGH
- **currentCs:** Nebo v nepřímé otázce
- **proposedCs:** Zda nebo jestli v nepřímé otázce
- **reason:** „Ob“ v tomto kontextu uvádí nepřímou otázku, nikoli volbu ve významu „nebo“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00421

- **cardId:** a1-ob
- **field:** study.sectionAccents.comparison[0].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Nebo
- **proposedCs:** Zda
- **reason:** Akcentace opakuje chybný překlad spojky ob jako „nebo“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00422

- **cardId:** a1-oder
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** V češtině oder nejčastěji znamená popř.
- **proposedCs:** V češtině oder nejčastěji znamená „nebo“.
- **reason:** „Popř.“ znamená „případně“, ne základní český význam spojky oder.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00424

- **cardId:** a1-oder
- **field:** study.sectionAccents.comparison[1].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Nebo
- **proposedCs:** Zda
- **reason:** Akcentace u ob používá „nebo“, čímž stírá rozdíl mezi ob a oder.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00425

- **cardId:** a1-passen
- **field:** study.comparison[0].meaning
- **severity:** HIGH
- **currentCs:** Fit / fit
- **proposedCs:** Pasovat / slušet
- **reason:** Anglické „Fit / fit“ je cizí remnant v českém studijním poli.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00426

- **cardId:** a1-passen
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Stát / stát
- **proposedCs:** Slušet / stát
- **reason:** V uvedeném významu stehen znamená „slušet“; „stát“ tento význam ztrácí.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00427

- **cardId:** a1-passen
- **field:** study.comparison[3].meaning
- **severity:** HIGH
- **currentCs:** Provozovat
- **proposedCs:** Fungovat
- **reason:** Německé funktionieren znamená „fungovat“, nikoli „provozovat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00428

- **cardId:** a1-passen
- **field:** study.sectionAccents.comparison[0].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Fit
- **proposedCs:** Pasovat
- **reason:** Akcentace obsahuje anglické slovo místo českého překladu passen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00429

- **cardId:** a1-passen
- **field:** study.sectionAccents.comparison[1].meaning.purple[0]
- **severity:** MEDIUM
- **currentCs:** Stát
- **proposedCs:** Slušet
- **reason:** V příkladu „Rot steht dir gut“ znamená stehen „slušet“, ne „stát“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00431

- **cardId:** a1-probieren
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: jídlo → probieren = podle chuti.
- **proposedCs:** Pamatujte: jídlo → probieren = ochutnat.
- **reason:** „Podle chuti“ vyjadřuje osobní preferenci; německé probieren u jídla znamená „ochutnat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00433

- **cardId:** a1-probieren
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Můžu zkusit bundu
- **proposedCs:** Můžu si vyzkoušet bundu?
- **reason:** Věta postrádá otazník a přirozenější význam „vyzkoušet si“ pro zkoušení oblečení.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00436

- **cardId:** a1-reis
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Jím rýži
- **proposedCs:** Jím rýži.
- **reason:** Česká ukázková věta postrádá koncovou tečku.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00437

- **cardId:** a1-sagen-study
- **field:** study.examples[0].lv
- **severity:** HIGH
- **currentCs:** Co jsi říkal
- **proposedCs:** Co jsi řekl?
- **reason:** Perfektum gesagt zde odpovídá dokonavému „řekl“ a tázací věta vyžaduje otazník.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00438

- **cardId:** a1-sagen-study
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Mluvit (jazyk, mluvit)
- **proposedCs:** Mluvit (jazykem, hovořit)
- **reason:** Po „mluvit“ je správný instrumentál „jazykem“; původní druhá část je navíc redundantní.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00439

- **cardId:** a1-sagen-study
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Sagen = vyprávět.
- **proposedCs:** Sagen = říct.
- **reason:** Sagen znamená především „říct“ nebo „sdělit“, zatímco „vyprávět“ odpovídá spíše erzählen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00440

- **cardId:** a1-schauen-study
- **field:** study.translation
- **severity:** CRITICAL
- **currentCs:** Hodinky
- **proposedCs:** Dívat se
- **reason:** „Hodinky“ jsou podstatné jméno a představují zjevně chybný překlad německého slovesa schauen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00442

- **cardId:** a1-schauen-study
- **field:** study.important[1]
- **severity:** MEDIUM
- **currentCs:** Aktivně se dívat nebo dívat.
- **proposedCs:** Aktivně se dívat nebo pohlédnout.
- **reason:** Samostatné „dívat“ je zde neúplné a věta je gramaticky i stylisticky nepřirozená.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00444

- **cardId:** a1-schwimmen
- **field:** study.examples[3].lv
- **severity:** HIGH
- **currentCs:** Chodím plavat
- **proposedCs:** Jdu se koupat.
- **reason:** Baden znamená koupat se, nikoli chodit plavat; současný překlad mění význam německé věty.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00445

- **cardId:** a1-schwimmen
- **field:** study.important[1]
- **severity:** LOW
- **currentCs:** česky se často říká „plavat“, ale v němčině musíte zkontrolovat, zda jde o pohyb nebo koupání.
- **proposedCs:** Česky se často říká „plavat“, ale v němčině musíte zkontrolovat, zda jde o pohyb nebo koupání.
- **reason:** Věta začíná nesprávně malým písmenem.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00446

- **cardId:** a1-sehen
- **field:** study.comparison[1].meaning
- **severity:** CRITICAL
- **currentCs:** Hodinky
- **proposedCs:** Dívat se
- **reason:** „Hodinky“ jsou podstatné jméno a jde o zjevně chybný překlad slovesa v porovnání.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00447

- **cardId:** a1-sehen
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Pohled / pohled
- **proposedCs:** Prohlédnout si / dívat se na
- **reason:** „Pohled“ je podstatné jméno; ansehen je sloveso „prohlédnout si“ nebo „dívat se na“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00448

- **cardId:** a1-sehen
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Vidím tě
- **proposedCs:** Vidím tě.
- **reason:** Česká ukázková věta postrádá koncovou tečku.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00449

- **cardId:** a1-sein
- **field:** study.comparison[3].meaning
- **severity:** HIGH
- **currentCs:** Pobyt
- **proposedCs:** Zůstat
- **reason:** „Pobyt“ je podstatné jméno, nikoli význam slovesa bleiben; správně je „zůstat“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00450

- **cardId:** a1-seite
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Strana • Strana
- **proposedCs:** Stránka • Strana
- **reason:** Stejný překlad nerozlišuje významy Seite; „stránka“ a „strana“ významy vhodně odlišují.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00452

- **cardId:** a1-sich
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Sebe • Pro sebe
- **proposedCs:** Sebe • Sobě
- **reason:** „Pro sebe“ není vhodný základní protějšek druhého významu; zde má být pádová varianta „sobě“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00453

- **cardId:** a1-sich
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** V češtině se často překládá jako já nebo já.
- **proposedCs:** V češtině se často překládá jako se, sebe nebo sobě.
- **reason:** Vysvětlení obsahuje chybný překlad „já“ a neposkytuje správné české reflexivní tvary.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00454

- **cardId:** a1-sich
- **field:** study.comparison[0].meaning
- **severity:** HIGH
- **currentCs:** Já / sebe
- **proposedCs:** Sebe / sobě
- **reason:** „Já“ je osobní zájmeno a neodpovídá významu německého reflexivního sich.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00455

- **cardId:** a1-sich
- **field:** study.comparison[1].meaning
- **severity:** HIGH
- **currentCs:** Já / já v ich
- **proposedCs:** Mě / sebe u ich
- **reason:** Mich znamená „mě“, případně reflexivní „sebe“, nikoli „já“; současné vysvětlení je věcně chybné.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00456

- **cardId:** a1-sich
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Ty / já v du
- **proposedCs:** Tě / sebe u du
- **reason:** Dich znamená „tě“, případně reflexivní „sebe“, nikoli „ty“ ani „já“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00458

- **cardId:** a1-sich
- **field:** study.examples[2].lv
- **severity:** MEDIUM
- **currentCs:** Je šťastná.
- **proposedCs:** Raduje se.
- **reason:** „Je šťastná“ posouvá význam freuen sich; vhodnější je „raduje se“ nebo „těší se“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00459

- **cardId:** a1-sich
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Sich není samostatné podstatné jméno.
- **proposedCs:** Sich není samostatné zájmeno.
- **reason:** Sich je zájmeno, konkrétně zvratné zájmeno, nikoli podstatné jméno.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00460

- **cardId:** a1-sie-study
- **field:** study.examples[5].lv
- **severity:** HIGH
- **currentCs:** Vaříš prosím
- **proposedCs:** Vařte, prosím.
- **reason:** Formální Sie kochen vyžaduje české vykání „Vařte“, nikoli neformální jednotné „Vaříš“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00461

- **cardId:** a1-sie-study-2
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: Zdvořilostní adresa - vždy s velkým S. Latviski: vy. Často se slovesem v množném čísle.
- **proposedCs:** Hlavní myšlenka: Zdvořilostní oslovení – vždy s velkým S. Česky: vy. Často se slovesem v množném čísle.
- **reason:** Text obsahuje latvinský remnant „Latviski“ a nepřirozené označení „zdvořilostní adresa“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00462

- **cardId:** a1-sitzen
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Spát / ležet
- **proposedCs:** Ležet
- **reason:** Liegen znamená „ležet“; „spát“ je jiný význam a do této položky nepatří.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00466

- **cardId:** a1-sollen
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Musíte přijít
- **proposedCs:** Máš přijít.
- **reason:** „Musíte“ vyjadřuje vykání nebo množné číslo a mění sollen na význam müssen; Du vyžaduje jednotné neformální oslovení.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00467

- **cardId:** a1-sollen
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Musím zůstat doma
- **proposedCs:** Mám zůstat doma.
- **reason:** „Musím“ znamená nutnost odpovídající müssen, nikoli pokyn nebo očekávání vyjádřené sollen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00468

- **cardId:** a1-sollen
- **field:** study.examples[3].lv
- **severity:** HIGH
- **currentCs:** Už musím jít
- **proposedCs:** Už mám jít.
- **reason:** České „musím“ vyjadřuje nutnost, zatímco zde sollen znamená, že mám jít nebo se očekává, že půjdu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00469

- **cardId:** a1-sollen
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Byl soll ich machen? je velmi častá věta.
- **proposedCs:** Was soll ich machen? je velmi častá věta.
- **reason:** „Byl soll“ je chybný český text a obsahuje německý výraz v nesprávné větné podobě.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00470

- **cardId:** a1-sollen
- **field:** study.comparison[1].meaning
- **severity:** LOW
- **currentCs:** Musit / být nutné
- **proposedCs:** musit / být nutné
- **reason:** Český infinitiv se v této významové položce píše s malým počátečním písmenem.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00471

- **cardId:** a1-stehen
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Sedí u stolu.
- **proposedCs:** Stojí u stolu.
- **reason:** Při autoritativním německém stehen je „Sedí u stolu“ významově chybně; správně jde o stání.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00472

- **cardId:** a1-stehen
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Spát / ležet
- **proposedCs:** Ležet
- **reason:** Liegen znamená „ležet“; „spát“ je jiný význam a v této srovnávací položce je navíc.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00473

- **cardId:** a1-stehen
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Postavit předmět vzpřímeně je šmrnc, ne stehen.
- **proposedCs:** Postavit předmět vzpřímeně je stellen, ne stehen.
- **reason:** „Je šmrnc“ je nesmyslný český překlad a neodpovídá významu stellen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00474

- **cardId:** a1-über
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Přes • Pro
- **proposedCs:** Nad • O • Přes
- **reason:** Běžné významy über zde zahrnují „nad“, „o“ a „přes“; „pro“ je v této sadě chybná náhrada.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00475

- **cardId:** a1-über
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Pokud jde o konverzaci, text nebo téma, über znamená asi.
- **proposedCs:** Pokud jde o konverzaci, text nebo téma, über znamená o.
- **reason:** U konverzace, textu nebo tématu über znamená české „o“, nikoli „asi“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00476

- **cardId:** a1-über
- **field:** study.examples[1].lv
- **severity:** MEDIUM
- **currentCs:** Mluvíme o čase.
- **proposedCs:** Mluvíme o počasí.
- **reason:** Německé Wetter znamená „počasí“, nikoli „čas“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00477

- **cardId:** a1-über
- **field:** study.comparison[0].meaning
- **severity:** HIGH
- **currentCs:** Přes / přes / přes
- **proposedCs:** Nad / o / přes
- **reason:** Tři odlišné významy über jsou chybně sjednoceny na „přes“; správné pořadí je „nad / o / přes“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00479

- **cardId:** a1-um
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Kolem • Hodiny
- **proposedCs:** V • Kolem • Aby
- **reason:** „Hodiny“ samo o sobě není správný překlad časového um; chybí významy „v“ a účelové „aby“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00480

- **cardId:** a1-um
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Za den / v
- **proposedCs:** V (dnech) / u
- **reason:** Am Montag znamená „v pondělí“, nikoli „za den“; současné srovnání uvádí chybný význam.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00481

- **cardId:** a1-um
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Hm s časem jsou obvykle 'hodiny'.
- **proposedCs:** Um s časem obvykle znamená „v“ nebo „v ... hodin“ .
- **reason:** Text obsahuje překlep „Hm“ místo „Um“ a nepřesně vysvětluje použití předložky s časem.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00482

- **cardId:** a1-um
- **field:** study.important[1]
- **severity:** MEDIUM
- **currentCs:** Um ... zu často znamená "do ...".
- **proposedCs:** Um ... zu často znamená „aby ...“.
- **reason:** Vazba um ... zu vyjadřuje účel, tedy „aby ...“, nikoli obecně „do ...“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00483

- **cardId:** a1-unter
- **field:** study.examples[1].lv
- **severity:** MEDIUM
- **currentCs:** Kočka spí pod židlí.
- **proposedCs:** Kočka leží pod židlí.
- **reason:** Německé liegen znamená „ležet“; české „spí“ odpovídá jinému slovesu schlafen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00484

- **cardId:** a1-unter
- **field:** study.comparison[1].meaning
- **severity:** HIGH
- **currentCs:** Přes / pro
- **proposedCs:** Nad / o
- **reason:** V uvedeném srovnání jsou významy über „přes / pro“ chybné; odpovídající významy jsou „nad / o“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00487

- **cardId:** a1-verstehen
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Znát skutečnost
- **proposedCs:** Vědět skutečnost
- **reason:** Výuka rozlišuje wissen = vědět a kennen = znát; současné „Znát skutečnost“ toto rozlišení vede chybně.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00489

- **cardId:** a1-verstehen
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Verstehen není kořenem slova „rozumět“.
- **proposedCs:** Verstehen není hlavní sloveso pro význam „umět“ nebo „ovládat dovednost“.
- **reason:** Současná věta je nesrozumitelná a nevysvětluje rozdíl mezi verstehen a können.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00490

- **cardId:** a1-vom
- **field:** study.tip[0]
- **severity:** MEDIUM
- **currentCs:** Pamatujte: von + dem → vom (pro koho?).
- **proposedCs:** Pamatujte: von + dem → vom (od koho? od čeho?).
- **reason:** Von znamená „od“, nikoli „pro“; tip má uvádět otázky „od koho?“ a „od čeho?“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00492

- **cardId:** a1-vor
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Je pět až osm.
- **proposedCs:** Je za pět minut osm.
- **reason:** V určování času vor fünf bedeutet „za pět minut“; „pět až osm“ je v češtině chybná formulace.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00494

- **cardId:** a1-was
- **field:** lv
- **severity:** HIGH
- **currentCs:** Kdo • Co
- **proposedCs:** Co
- **reason:** Německé was znamená „co“, nikoli „kdo“. Překlad „Kdo • Co“ obsahuje nesprávný význam.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00495

- **cardId:** a1-was
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Kdo • Co
- **proposedCs:** Co
- **reason:** Německé was znamená „co“, nikoli „kdo“. Studijní překlad obsahuje nesprávnou možnost.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00496

- **cardId:** a1-was
- **field:** study.examples[5].lv
- **severity:** MEDIUM
- **currentCs:** Jaké je vaše oblíbené jídlo?
- **proposedCs:** Jaké je tvé oblíbené jídlo?
- **reason:** Dein je neformální jednotné oslovení; české „vaše“ mění osobu nebo registr oproti německému originálu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00497

- **cardId:** a1-was
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: co je tázací slovo o věcech a událostech - v češtině je to co nebo co, v závislosti na části věty.
- **proposedCs:** Hlavní myšlenka: was je tázací slovo pro věci a události; v češtině znamená podle větné funkce „co“ nebo „jaké“.
- **reason:** Vysvětlení obsahuje nesmyslné opakování „co nebo co“ a neposkytuje správné české významy.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00498

- **cardId:** a1-was
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** Byl dotazován na věci, události a fakta, nikoli na osoby.
- **proposedCs:** Slovem was se ptáme na věci, události a fakta, nikoli na osoby.
- **reason:** Pasivní formulace je v tomto výkladu nepřirozená a nejasně vyjadřuje, kdo a na co se slovem was ptá.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00499

- **cardId:** a1-was
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** V němčině se was nemění po skloňování - vždy to vypadá jako bylo.
- **proposedCs:** V němčině se was při skloňování nemění – vždy má stejný tvar.
- **reason:** Část „vypadá jako bylo“ chybně překládá a popisuje slovo was.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00501

- **cardId:** a1-was
- **field:** study.important[3]
- **severity:** CRITICAL
- **currentCs:** Špatně: Wer ist passiert? → Správně: Bylo to passiert?
- **proposedCs:** Špatně: Wer ist passiert? → Správně: Co se stalo?
- **reason:** Současný text obsahuje německo-českou směs a nepřekládá správně větu Was ist passiert?
- **status:** CONFIRMED_REAL

#### FINAL-A1-00502

- **cardId:** a1-wenn
- **field:** study.tip.text
- **severity:** HIGH
- **currentCs:** Pamatujte: podmínka → wenn • Otázka "kdy?" → chtít.
- **proposedCs:** Pamatujte: podmínka nebo opakovaný čas → wenn • Otázka „kdy?“ → wann.
- **reason:** „Chtít“ je chybný český ekvivalent; otázka „kdy?“ odpovídá německému wann.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00503

- **cardId:** a1-wenn
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Pokud je to podmínka, přeložte jako kdyby.
- **proposedCs:** Pokud jde o podmínku, přeložte jako jestli, pokud nebo když.
- **reason:** Kdyby vyjadřuje hypotetickou podmínku, zatímco wenn má podle kontextu význam jestli, pokud nebo když.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00504

- **cardId:** a1-wenn
- **field:** study.comparison[1].meaning
- **severity:** HIGH
- **currentCs:** Nebo v nepřímé otázce
- **proposedCs:** Zda nebo jestli v nepřímé otázce
- **reason:** Německé ob v nepřímé otázce znamená „zda“ nebo „jestli“, nikoli „nebo“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00505

- **cardId:** a1-wenn
- **field:** study.important[1]
- **severity:** MEDIUM
- **currentCs:** Kdy přijedeš? je tu otázka. Wenn du kom­meš... je stav/napětí.
- **proposedCs:** „Kdy přijedeš?“ je otázka. „Wenn du kommst…“ vyjadřuje podmínku nebo čas.
- **reason:** Výraz „stav/napětí“ je v tomto kontrastu nesmyslný a neposkytuje studentovi význam wenn du kommst.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00506

- **cardId:** a1-wer
- **field:** study.examples[0].lv
- **severity:** HIGH
- **currentCs:** Co je to?
- **proposedCs:** Kdo je to?
- **reason:** Wer se ptá na osobu, proto český překlad musí být „Kdo je to?“, nikoli „Co je to?“
- **status:** CONFIRMED_REAL

#### FINAL-A1-00507

- **cardId:** a1-wer
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Co přijde dnes?
- **proposedCs:** Kdo dnes přijde?
- **reason:** Wer znamená „kdo“; současný překlad mění otázku na osobu na otázku o věci a ději.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00508

- **cardId:** a1-wer
- **field:** study.examples[3].lv
- **severity:** HIGH
- **currentCs:** Kdo je tvůj učitel
- **proposedCs:** Kdo je tvoje učitelka?
- **reason:** Lehrerin je ženský rod. Překlad má mužský rod a chybí mu otazník.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00509

- **cardId:** a1-wer
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** Wer je v němčině obvykle předmětem věty (nominativu) — Wer ist das? = co je to?
- **proposedCs:** Wer je v němčině obvykle podmětem věty v nominativu — Wer ist das? = Kdo je to?
- **reason:** Wer je podmět v nominativu; český překlad „co“ je chybný.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00510

- **cardId:** a1-wer
- **field:** study.important[3]
- **severity:** CRITICAL
- **currentCs:** Špatně: Wer ist passiert? → Správně: Bylo to passiert?
- **proposedCs:** Špatně: Wer ist passiert? → Správně: Co se stalo?
- **reason:** Současný text obsahuje nesprávnou německou větu i českoněmecký překlad.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00511

- **cardId:** a1-werden
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Jsem unavený.
- **proposedCs:** Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Začínám být unavený.
- **reason:** Werden zde vyjadřuje změnu stavu, nikoli prostý stav „jsem unavený“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00513

- **cardId:** a1-wetter
- **field:** lv
- **severity:** HIGH
- **currentCs:** Čas (počasí)
- **proposedCs:** Počasí
- **reason:** Hlavní český význam Wetter je „počasí“; „čas“ zde význam zkresluje.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00514

- **cardId:** a1-wetter
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Čas (počasí)
- **proposedCs:** Počasí
- **reason:** Hlavní český význam Wetter je „počasí“; „čas“ zde význam zkresluje.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00515

- **cardId:** a1-wetter
- **field:** study.examples[0].lv
- **severity:** CRITICAL
- **currentCs:** Kolik je dnes hodin?
- **proposedCs:** Jaké je dnes počasí?
- **reason:** Věta se ptá na počasí, nikoli na čas na hodinách.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00516

- **cardId:** a1-wetter
- **field:** study.examples[4].lv
- **severity:** HIGH
- **currentCs:** Mluvíme o čase.
- **proposedCs:** Mluvíme o počasí.
- **reason:** Das Wetter znamená počasí; současný překlad zaměňuje Wetter za Zeit.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00517

- **cardId:** a1-wetter
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Povídejte si o počasí v přírodě s dasem Wetterem: Wie ist das Wetter heute?
- **proposedCs:** O počasí mluvíme s výrazem das Wetter: Wie ist das Wetter heute?
- **reason:** Současné „s dasem Wetterem“ je gramaticky i stylisticky nepřirozené.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00518

- **cardId:** a1-wetter
- **field:** study.tip[1]
- **severity:** CRITICAL
- **currentCs:** Pamatujte: Wie ist das Wetter? = Kolik je hodin? (ne hodiny).
- **proposedCs:** Pamatujte: Wie ist das Wetter? = Jaké je počasí? (ne „Kolik je hodin?“).
- **reason:** Překlad otázky Wie ist das Wetter? je chybný a zaměňuje počasí za čas.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00519

- **cardId:** a1-wie
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Jak se jmenuješ
- **proposedCs:** Jak se jmenuješ?
- **reason:** Přímá česká otázka vyžaduje koncový otazník.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00520

- **cardId:** a1-wie
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Kolik to stojí
- **proposedCs:** Kolik to stojí?
- **reason:** Přímá česká otázka vyžaduje koncový otazník.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00522

- **cardId:** a1-zu
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Do • At
- **proposedCs:** K • Do • Příliš
- **reason:** Text obsahuje angličtinu a vynechává význam „příliš“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00523

- **cardId:** a1-zu
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: zu velmi často znamená to nebo at, ale má také roli s infinitivem.
- **proposedCs:** Hlavní myšlenka: zu velmi často znamená k nebo do, ale používá se také s infinitivem.
- **reason:** Současné vysvětlení obsahuje anglické výrazy místo českých významů.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00524

- **cardId:** a1-zu
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** V konstrukci zu + neurčito pomáhá tvořit neurčito: zu lernen, zu gehen.
- **proposedCs:** V konstrukci zu + infinitiv stojí zu před slovesem: zu lernen, zu gehen.
- **reason:** „Neurčito“ není vhodný český gramatický termín ani přirozené vysvětlení konstrukce.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00525

- **cardId:** a1-zu
- **field:** study.comparison[0].meaning
- **severity:** HIGH
- **currentCs:** To / at / too / infinitiv
- **proposedCs:** K / do / příliš / infinitiv
- **reason:** Srovnávací význam obsahuje angličtinu místo českých významů.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00526

- **cardId:** a1-zum
- **field:** lv
- **severity:** HIGH
- **currentCs:** Do • At
- **proposedCs:** K • Ke
- **reason:** Produkční překlad obsahuje anglické „At“ a významově nevystihuje české k/ke.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00527

- **cardId:** a1-zum
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Do • At
- **proposedCs:** K • Ke
- **reason:** Produkční překlad je chybný a obsahuje anglické slovo; základní český význam je k/ke.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00532

- **cardId:** a1-zum
- **field:** study.sectionAccents.comparison[2].meaning.purple
- **severity:** MEDIUM
- **currentCs:** ["také","také","také"]
- **proposedCs:** ["k","ke","příliš"]
- **reason:** Akcentované významy „také“ jsou pro německé zu nesprávné.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00533

- **cardId:** a1-fernsehen
- **field:** study.tip.leftBlocks[0].text
- **severity:** MEDIUM
- **currentCs:** K akci se používá Fernsehen (ich sehe fern). Das Fernsehen se používá pro televizní program nebo médium.
- **proposedCs:** K činnosti se používá fernsehen (ich sehe fern). Das Fernsehen se používá pro televizní program nebo médium.
- **reason:** Ve vysvětlení je sloveso fernsehen chybně napsané s velkým písmenem.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00534

- **cardId:** a1-fernsehen
- **field:** study.important.text
- **severity:** MEDIUM
- **currentCs:** Fernsehen = sloveso (ich sehe fern). das Fernsehen = podstatné jméno, pouze jednotné číslo.
- **proposedCs:** fernsehen = sloveso (ich sehe fern). das Fernsehen = podstatné jméno, pouze jednotné číslo.
- **reason:** Infinitivní sloveso má být fernsehen; Fernsehen je zde podstatné jméno.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00537

- **cardId:** a1-essen
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Co chceš jíst
- **proposedCs:** Co chcete jíst?
- **reason:** Německé ihr vyžaduje české „chcete“ a věta potřebuje otazník.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00538

- **cardId:** a1-essen
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** Essen v podstatě znamená: jídlo nebo jídlo.
- **proposedCs:** Essen v podstatě znamená: jíst nebo konzumovat jídlo.
- **reason:** Výklad slovesa obsahuje opakované „jídlo“ a neuvádí slovesný význam.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00539

- **cardId:** a1-essen
- **field:** study.explanation[4]
- **severity:** HIGH
- **currentCs:** Často popisuje: déšť.
- **proposedCs:** Často popisuje: činnost.
- **reason:** „Déšť“ je v tomto výkladu nesouvisející významová chyba u slovesa essen.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00541

- **cardId:** a1-essen-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Co chceš jíst
- **proposedCs:** Co chcete jíst?
- **reason:** Německé ihr vyžaduje české „chcete“ a věta potřebuje otazník.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00542

- **cardId:** a1-essen-study
- **field:** study.explanation[1]
- **severity:** HIGH
- **currentCs:** Das Essen znamená především: konzumovat jídlo.
- **proposedCs:** Das Essen znamená především: jídlo nebo pokrm.
- **reason:** Das Essen je podstatné jméno pro jídlo či pokrm, ne sloveso označující konzumaci.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00543

- **cardId:** a1-essen-study
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Často popisuje: akce.
- **proposedCs:** Často označuje: věc nebo pokrm.
- **reason:** U podstatného jména Das Essen je „akce“ chybná charakteristika.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00544

- **cardId:** a1-essen-study
- **field:** study.explanation[4]
- **severity:** HIGH
- **currentCs:** Často popisuje: déšť.
- **proposedCs:** Často označuje: věc nebo pokrm.
- **reason:** „Déšť“ je v tomto výkladu zjevně nesouvisející významová chyba.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00546

- **cardId:** a1-ferien
- **field:** study.examples[0].lv
- **severity:** HIGH
- **currentCs:** O víkendech jezdíme k moři.
- **proposedCs:** O prázdninách jezdíme k moři.
- **reason:** Německé In den Ferien znamená o prázdninách, nikoli o víkendech.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00547

- **cardId:** a1-ferien
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Co děláš o prázdninách
- **proposedCs:** Co děláte o prázdninách?
- **reason:** Německé ihr vyžaduje množné číslo „děláte“ a věta potřebuje otazník.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00548

- **cardId:** a1-ferien
- **field:** study.comparison[1].meaning
- **severity:** HIGH
- **currentCs:** Odejít z práce (pouze všichni)
- **proposedCs:** Dovolená z práce (pouze jednotné číslo)
- **reason:** Význam je chybný: „Odejít z práce“ neodpovídá Urlaub a „pouze všichni“ je nesrozumitelné.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00549

- **cardId:** a1-urlaub
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: pouze jednotné číslo. Odejít z práce - vždy v jednotném čísle.
- **proposedCs:** Hlavní myšlenka: pouze jednotné číslo. Dovolená nebo volno z práce – vždy v jednotném čísle.
- **reason:** Text nesprávně popisuje Urlaub jako odchod z práce místo dovolené nebo pracovního volna.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00550

- **cardId:** a1-urlaub
- **field:** study.comparison[0].meaning
- **severity:** HIGH
- **currentCs:** Odejít z práce (pouze všichni)
- **proposedCs:** Dovolená z práce (pouze jednotné číslo)
- **reason:** Současný význam je nesrozumitelný a významově neodpovídá slovu Urlaub.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00551

- **cardId:** a1-urlaub
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Školní/studijní přestávka (pouze dsk.)
- **proposedCs:** Školní/studijní prázdniny (pouze množné číslo)
- **reason:** Ferien označuje školní nebo studijní prázdniny, nikoli obecnou přestávku; „dsk.“ je nevhodná zkratka.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00552

- **cardId:** a1-urlaub
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Nesprávně: die Ferie, der Urlabe (na úrovni A1).
- **proposedCs:** Nesprávně: die Ferie, der Urlaube (na úrovni A1).
- **reason:** „Urlabe“ je v aktuálním textu chybný německý tvar; oprava odstraňuje pravopisnou chybu v učebním příkladu.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00553

- **cardId:** a1-uhr
- **field:** study.examples[5].lv
- **severity:** MEDIUM
- **currentCs:** Zařízení/čas na hodinách • Die Zeit
- **proposedCs:** Zařízení/čas na hodinách
- **reason:** České pole obsahuje nepřeložený německý remnant „Die Zeit“, který nesouvisí s významem die Uhr.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00556

- **cardId:** a1-zeit
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Die Zeit znamená především: okamžik, příležitost.
- **proposedCs:** Die Zeit znamená především: čas a časový úsek.
- **reason:** Vysvětlení opomíjí základní význam Zeit jako času a nepřesně ho omezuje na okamžik a příležitost.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00557

- **cardId:** a1-einmal
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Jednou • Jednou
- **proposedCs:** Jednou • Kdysi
- **reason:** Oba české významy jsou identické, takže se ztrácí rozdíl mezi „jednou“ a „kdysi“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00558

- **cardId:** a1-einmal
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Jednou • Jednou
- **proposedCs:** Jednou • Kdysi
- **reason:** Oba české významy jsou identické, takže se ztrácí rozdíl mezi „jednou“ a „kdysi“.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00559

- **cardId:** a1-einmal
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Často charakterizované: povětrnostními podmínkami.
- **proposedCs:** Často se používá jako časové příslovce.
- **reason:** Text mylně spojuje einmal s povětrnostními podmínkami místo jeho použití jako časového příslovce.
- **status:** CONFIRMED_REAL

#### FINAL-A1-00561

- **cardId:** a1-noch-mal
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Řekni to znovu
- **proposedCs:** Řekni to znovu.
- **reason:** Samostatná česká věta v příkladu postrádá koncovou tečku.
- **status:** CONFIRMED_REAL

#### REG-a1-land-study.sectionAccents.explanation

- **cardId:** a1-land
- **field:** study.sectionAccents.explanation
- **severity:** HIGH
- **currentCs:** planēta
- **proposedCs:** —
- **reason:** Stale accent "planēta" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-land-study.sectionAccents.tip

- **cardId:** a1-land
- **field:** study.sectionAccents.tip
- **severity:** HIGH
- **currentCs:** planēta
- **proposedCs:** —
- **reason:** Stale accent "planēta" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-land-study.sectionAccents.important

- **cardId:** a1-land
- **field:** study.sectionAccents.important
- **severity:** HIGH
- **currentCs:** planēta
- **proposedCs:** —
- **reason:** Stale accent "planēta" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-land-study.sectionAccents.examples

- **cardId:** a1-land
- **field:** study.sectionAccents.examples
- **severity:** HIGH
- **currentCs:** planēta
- **proposedCs:** —
- **reason:** Stale accent "planēta" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-land-study.sectionAccents.comparison

- **cardId:** a1-land
- **field:** study.sectionAccents.comparison
- **severity:** HIGH
- **currentCs:** planēta
- **proposedCs:** —
- **reason:** Stale accent "planēta" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-sitzen-study.sectionAccents.explanation

- **cardId:** a1-sitzen
- **field:** study.sectionAccents.explanation
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-sitzen-study.sectionAccents.tip

- **cardId:** a1-sitzen
- **field:** study.sectionAccents.tip
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-sitzen-study.sectionAccents.important

- **cardId:** a1-sitzen
- **field:** study.sectionAccents.important
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-sitzen-study.sectionAccents.examples

- **cardId:** a1-sitzen
- **field:** study.sectionAccents.examples
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-sitzen-study.sectionAccents.comparison

- **cardId:** a1-sitzen
- **field:** study.sectionAccents.comparison
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-stehen-study.sectionAccents.explanation

- **cardId:** a1-stehen
- **field:** study.sectionAccents.explanation
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-stehen-study.sectionAccents.tip

- **cardId:** a1-stehen
- **field:** study.sectionAccents.tip
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-stehen-study.sectionAccents.important

- **cardId:** a1-stehen
- **field:** study.sectionAccents.important
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-stehen-study.sectionAccents.examples

- **cardId:** a1-stehen
- **field:** study.sectionAccents.examples
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-stehen-study.sectionAccents.comparison

- **cardId:** a1-stehen
- **field:** study.sectionAccents.comparison
- **severity:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** —
- **reason:** Stale accent "sēdēt" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-über-study.sectionAccents.explanation

- **cardId:** a1-über
- **field:** study.sectionAccents.explanation
- **severity:** HIGH
- **currentCs:** tēma
- **proposedCs:** —
- **reason:** Stale accent "tēma" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-über-study.sectionAccents.tip

- **cardId:** a1-über
- **field:** study.sectionAccents.tip
- **severity:** HIGH
- **currentCs:** tēma
- **proposedCs:** —
- **reason:** Stale accent "tēma" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-über-study.sectionAccents.important

- **cardId:** a1-über
- **field:** study.sectionAccents.important
- **severity:** HIGH
- **currentCs:** tēma
- **proposedCs:** —
- **reason:** Stale accent "tēma" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-über-study.sectionAccents.examples

- **cardId:** a1-über
- **field:** study.sectionAccents.examples
- **severity:** HIGH
- **currentCs:** tēma
- **proposedCs:** —
- **reason:** Stale accent "tēma" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-über-study.sectionAccents.comparison

- **cardId:** a1-über
- **field:** study.sectionAccents.comparison
- **severity:** HIGH
- **currentCs:** tēma
- **proposedCs:** —
- **reason:** Stale accent "tēma" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-essen-study.sectionAccents.explanation

- **cardId:** a1-essen
- **field:** study.sectionAccents.explanation
- **severity:** HIGH
- **currentCs:** ēst
- **proposedCs:** —
- **reason:** Stale accent "ēst" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-essen-study.sectionAccents.tip

- **cardId:** a1-essen
- **field:** study.sectionAccents.tip
- **severity:** HIGH
- **currentCs:** ēst
- **proposedCs:** —
- **reason:** Stale accent "ēst" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-essen-study.sectionAccents.important

- **cardId:** a1-essen
- **field:** study.sectionAccents.important
- **severity:** HIGH
- **currentCs:** ēst
- **proposedCs:** —
- **reason:** Stale accent "ēst" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION

#### REG-a1-essen-study.sectionAccents.examples

- **cardId:** a1-essen
- **field:** study.sectionAccents.examples
- **severity:** HIGH
- **currentCs:** ēst
- **proposedCs:** —
- **reason:** Stale accent "ēst" after repair does not match section text
- **status:** CONFIRMED_REPAIR_REGRESSION


### NEEDS_OWNER_REVIEW (7)

- **FINAL-A1-00064** a1-land `study.sectionAccents.comparison[3].meaning.purple[1]`: LV remnant in sectionAccents — needs owner repair decision
- **FINAL-A1-00070** a1-sitzen `study.sectionAccents.explanation.purple[0]`: LV remnant in sectionAccents — needs owner repair decision
- **FINAL-A1-00071** a1-sitzen `study.sectionAccents.explanation.purple[1]`: LV remnant in sectionAccents — needs owner repair decision
- **FINAL-A1-00072** a1-sitzen `study.sectionAccents.comparison[0].meaning.purple[0]`: LV remnant in sectionAccents — needs owner repair decision
- **FINAL-A1-00077** a1-stehen `study.sectionAccents.comparison[1].meaning.purple[0]`: LV remnant in sectionAccents — needs owner repair decision
- **FINAL-A1-00079** a1-über `study.sectionAccents.tip.left.purple[0]`: LV remnant in sectionAccents — needs owner repair decision
- **FINAL-A1-00087** a1-essen `study.sectionAccents.explanation.purple[0]`: LV remnant in sectionAccents — needs owner repair decision


---

- Model: GPT-5.6 Luna
- Audit mode: READ-ONLY
- Raw deterministic findings: 90
- Raw Luna findings: 471
- Validated findings total: 561
- Consolidated JSON: `reports/temp/cs-a1-final-post-repair-audit.json`
- Validated JSON: `reports/temp/cs-a1-final-post-repair-audit-validated.json`
- Batch artifacts: `reports/temp/cs-a1-final-post-repair-audit/`

_Audita datums: 2026-08-12_
_Production changes: 0 | DE READ-ONLY_
