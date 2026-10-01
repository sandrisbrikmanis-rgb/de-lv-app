# CS–DE C1 FULL AUDIT

## KOPSAVILKUMS

- Dataset: C1
- Audit mode: READ-ONLY
- Total objects: 572
- Audited objects: 572
- Coverage: 100%
- Batch size: 50
- Batch count: 12
- CRITICAL: 1
- HIGH: 150
- MEDIUM: 102
- LOW: 15
- SOURCE_DE_ISSUE: 0
- NEEDS_OWNER_REVIEW: 0
- FALSE_POSITIVE: 0
- Production changes: 0
- DE changes: 0
- Other-language changes: 0

## DETERMINISTISKĀ VALIDĀCIJA

| Pārbaude | Rezultāts |
|---|---|
| Strukturālā parity | PASS |
| DE READ-ONLY integritāte | PASS |
| Tehniskā kontrole | PASS |
| Ārvalodu atlikumi | FAIL |
| sectionAccents | FAIL |
| data/www sinhronizācija | PASS |
| JS sintakse | PASS |

**Deterministisko atradumu skaits:** 9

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 572/572 |
| Lingvistisko atradumu skaits | 257 |
| API pieprasījumi | 14 |
| Tokeni | 118323 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

- standardStudy: 15
- comparisonStudy: 0
- Study struktūras problēmas: 0

## SECTIONACCENTS VALIDĀCIJA

- sectionAccents atradumi: 0
- Statuss: FAIL

## FINDINGS

### CRITICAL (1)

### Finding 1: c1-Gesetzentwurf-302

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Gesetzentwurf-302
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Účtovat
- **DE source:** Gesetzentwurf
- **LV reference:** likumprojekts
- **Problem:** „Účtovat“ je sloveso účtovat; „Gesetzentwurf“ znamená návrh zákona.
- **Recommended CS:** Návrh zákona
- **Rationale:** Luna linguistic audit (1 confidence)


### HIGH (150)

### Finding 1: c1-Modezeitschrift-110

- **Dataset:** c1
- **Batch:** 101-150
- **Card/Index:** c1-Modezeitschrift-110
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Módní časopis
- **DE source:** Modezeitschrift
- **LV reference:** modes žurnāls
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 2: c1-Modezeitschrift-110

- **Dataset:** c1
- **Batch:** 101-150
- **Card/Index:** c1-Modezeitschrift-110
- **Field:** entry[110].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Módní časopis
- **DE source:** Modezeitschrift
- **LV reference:** modes žurnāls
- **Problem:** Foreign remnant (PL_CHAR) in entry[110].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 3: c1-Schlussverkauf-138

- **Dataset:** c1
- **Batch:** 101-150
- **Card/Index:** c1-Schlussverkauf-138
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Výprodej zboží na konci sezóny za snížené ceny
- **DE source:** Schlussverkauf
- **LV reference:** preču izpārdošana sezonas beigās par pazeminātām cenām
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 4: c1-Schlussverkauf-138

- **Dataset:** c1
- **Batch:** 101-150
- **Card/Index:** c1-Schlussverkauf-138
- **Field:** entry[138].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Výprodej zboží na konci sezóny za snížené ceny
- **DE source:** Schlussverkauf
- **LV reference:** preču izpārdošana sezonas beigās par pazeminātām cenām
- **Problem:** Foreign remnant (PL_CHAR) in entry[138].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 5: c1-verschlüsseln-523

- **Dataset:** c1
- **Batch:** 501-550
- **Card/Index:** c1-verschlüsseln-523
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Zašifrovat • Zakódovat
- **DE source:** verschlüsseln
- **LV reference:** šifrēt • kodēt
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 6: c1-verschlüsseln-523

- **Dataset:** c1
- **Batch:** 501-550
- **Card/Index:** c1-verschlüsseln-523
- **Field:** entry[523].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Zašifrovat • Zakódovat
- **DE source:** verschlüsseln
- **LV reference:** šifrēt • kodēt
- **Problem:** Foreign remnant (PL_CHAR) in entry[523].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 7: c1-gewährleisten-1

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-gewährleisten-1
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Poskytnout
- **DE source:** gewährleisten
- **LV reference:** nodrošināt
- **Problem:** „Poskytnout“ znamená dát nebo poskytnout, zatímco gewährleisten znamená zajistit či garantovat.
- **Recommended CS:** Zajistit
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 8: c1-umstritten-3

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-umstritten-3
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Rozporuplné
- **DE source:** umstritten
- **LV reference:** pretrunīgs
- **Problem:** „Rozporuplné“ znamená nejednoznačné či protichůdné; umstritten znamená kontroverzní nebo sporné.
- **Recommended CS:** Kontroverzní
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 9: c1-Altweibersommer-12

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Altweibersommer-12
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Jaro
- **DE source:** Altweibersommer
- **LV reference:** atvasara
- **Problem:** Altweibersommer označuje teplé období na podzim, nikoli jaro.
- **Recommended CS:** Babí léto
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 10: c1-anfechten-13

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-anfechten-13
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Spor • Otázka
- **DE source:** anfechten
- **LV reference:** apstrīdēt • apšaubīt
- **Problem:** České výrazy jsou podstatná jména; anfechten je sloveso ve významu napadnout nebo zpochybnit.
- **Recommended CS:** Napadnout • Zpochybnit
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 11: c1-Frachtbrief-26

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Frachtbrief-26
- **Field:** csText
- **Severity:** HIGH
- **Status:** ORTHOGRAPHY
- **Current CS text:** Nákladní nákladní list
- **DE source:** Frachtbrief
- **LV reference:** kravas pavadzīme
- **Problem:** Český překlad obsahuje chybnou duplicitu slova „nákladní“; správný termín je „nákladní list“.
- **Recommended CS:** Nákladní list
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 12: c1-Frauenrechtlerin-28

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Frauenrechtlerin-28
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Bojovník za rovnoprávnost žen
- **DE source:** Frauenrechtlerin
- **LV reference:** cīnītāja par sieviešu līdztiesību
- **Problem:** Frauenrechtlerin označuje ženu; český výraz „bojovník“ je v mužském rodě.
- **Recommended CS:** Bojovnice za rovnoprávnost žen
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 13: c1-Kinderschänder-30

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Kinderschänder-30
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Pedofil
- **DE source:** Kinderschänder
- **LV reference:** pedofils
- **Problem:** Kinderschänder označuje pachatele sexuálního zneužívání dětí, ne nutně pedofila jako psychologickou diagnózu.
- **Recommended CS:** Osoba sexuálně zneužívající děti
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 14: c1-Zivilgesetzbuch-32

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Zivilgesetzbuch-32
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Občanské právo
- **DE source:** Zivilgesetzbuch
- **LV reference:** civillikums
- **Problem:** Zivilgesetzbuch je konkrétní zákoník; „občanské právo“ označuje celý právní obor.
- **Recommended CS:** Občanský zákoník
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 15: c1-Aktie-33

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Aktie-33
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Akce
- **DE source:** Aktie
- **LV reference:** akcija
- **Problem:** „Akce“ znamená událost, nabídku nebo činnost; Aktie ve finančním významu je „akcie“.
- **Recommended CS:** Akcie
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 16: c1-sich beschäftigen-43

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-sich beschäftigen-43
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Obsadit
- **DE source:** sich beschäftigen
- **LV reference:** nodarboties
- **Problem:** „Obsadit“ znamená occupy; zvratné sich beschäftigen znamená zabývat se nebo věnovat se něčemu.
- **Recommended CS:** Zabývat se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 17: c1-Gepäckträger-70

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Gepäckträger-70
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Kufr
- **DE source:** Gepäckträger
- **LV reference:** bagāžnieks
- **Problem:** Kufr znamená suitcase; Gepäckträger je nosič zavazadel nebo zavazadlový nosič.
- **Recommended CS:** Nosič zavazadel
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 18: c1-geschäftlich-71

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-geschäftlich-71
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Transakce
- **DE source:** geschäftlich
- **LV reference:** darījumu
- **Problem:** Německé geschäftlich je přídavné jméno „obchodní“; Transakce je podstatné jméno a znamená transakce.
- **Recommended CS:** Obchodní
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 19: c1-Gesichtspunkt-77

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Gesichtspunkt-77
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Názor
- **DE source:** Gesichtspunkt
- **LV reference:** viedoklis
- **Problem:** Gesichtspunkt znamená hledisko nebo aspekt, nikoli názor.
- **Recommended CS:** Hledisko
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 20: c1-Tasteninstrument-90

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Tasteninstrument-90
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Klávesnice
- **DE source:** Tasteninstrument
- **LV reference:** taustiņinstruments
- **Problem:** Tasteninstrument je hudební nástroj s klávesami; Klávesnice znamená keyboard nebo počítačovou klávesnici.
- **Recommended CS:** Klávesový nástroj
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 21: c1-Krankheitsbild-101

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Krankheitsbild-101
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Nemocná scéna
- **DE source:** Krankheitsbild
- **LV reference:** slimības aina
- **Problem:** Doslovný překlad je v češtině nesmyslný; Krankheitsbild znamená klinický obraz či charakteristiku nemoci.
- **Recommended CS:** Klinický obraz
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 22: c1-Morgengymnastik-112

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Morgengymnastik-112
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Svítání
- **DE source:** Morgengymnastik
- **LV reference:** rītarosme
- **Problem:** Morgengymnastik znamená ranní tělocvik nebo cvičení, nikoli svítání.
- **Recommended CS:** Ranní cvičení
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 23: c1-Rennen mit Hindernissen-131

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Rennen mit Hindernissen-131
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Překážkovou dráhu
- **DE source:** Rennen mit Hindernissen
- **LV reference:** šķēršļu skrējiens
- **Problem:** Současný výraz je v akuzativu a znamená překážkovou dráhu; německý výraz označuje překážkový závod.
- **Recommended CS:** Překážkový závod
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 24: c1-Scheibenwischer-136

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Scheibenwischer-136
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Čistič oken automobilů
- **DE source:** Scheibenwischer
- **LV reference:** automašīnas logu tīrītājs
- **Problem:** Scheibenwischer je stěrač, nikoli čistič oken automobilů.
- **Recommended CS:** Stěrač čelního skla
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 25: c1-Schiedsrichter-137

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Schiedsrichter-137
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Soudce
- **DE source:** Schiedsrichter
- **LV reference:** tiesnesis
- **Problem:** Ve sportovním kontextu Schiedsrichter znamená rozhodčí; soudce označuje člena soudu.
- **Recommended CS:** Rozhodčí
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 26: c1-Schutzumschlag-142

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Schutzumschlag-142
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Pokrýt
- **DE source:** Schutzumschlag
- **LV reference:** apvāks
- **Problem:** Pokrýt je sloveso; Schutzumschlag označuje ochranný přebal nebo obal knihy.
- **Recommended CS:** Ochranný přebal
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 27: c1-Stellvertreter-151

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Stellvertreter-151
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Nahradit
- **DE source:** Stellvertreter
- **LV reference:** aizstājējs
- **Problem:** Nahradit je sloveso; Stellvertreter je podstatné jméno označujícího zástupce nebo náhradníka.
- **Recommended CS:** Zástupce
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 28: c1-Strampelhöschen-153

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Strampelhöschen-153
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Dětská prolézačka
- **DE source:** Strampelhöschen
- **LV reference:** zīdaiņa rāpulītis
- **Problem:** Strampelhöschen označuje kojenecké oblečení nebo overal, nikoli dětskou prolézačku.
- **Recommended CS:** Dětský overal
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 29: c1-Stromverbrauch-154

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Stromverbrauch-154
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Aktuální spotřeba
- **DE source:** Stromverbrauch
- **LV reference:** strāvas patēriņš
- **Problem:** Překlad znamená „aktuální spotřeba“ a neuvádí, že jde konkrétně o spotřebu elektřiny.
- **Recommended CS:** Spotřeba elektřiny
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 30: c1-Terminkalender-157

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Terminkalender-157
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Poznámkový kalendář
- **DE source:** Terminkalender
- **LV reference:** piezīmju kalendārs
- **Problem:** Terminkalender je kalendář schůzek a termínů, nikoli poznámkový kalendář.
- **Recommended CS:** Kalendář termínů
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 31: c1-transportieren-160

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-transportieren-160
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** K přepravě
- **DE source:** transportieren
- **LV reference:** transportēt
- **Problem:** Současný text je předložková fráze, nikoli infinitiv slovesa transportieren.
- **Recommended CS:** Přepravovat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 32: c1-Überschwemmung-161

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Überschwemmung-161
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Zaplavit
- **DE source:** Überschwemmung
- **LV reference:** plūdi
- **Problem:** Německé slovo je podstatné jméno; „zaplavit“ je české sloveso.
- **Recommended CS:** Povodeň
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 33: c1-Unternehmen-162

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Unternehmen-162
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Společnost • Event
- **DE source:** Unternehmen
- **LV reference:** uzņēmums • pasākums
- **Problem:** Unternehmen znamená společnost nebo podnik; „Event“ odpovídá spíše německému Veranstaltung.
- **Recommended CS:** Společnost • Podnik
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 34: c1-verantworten-168

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-verantworten-168
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Převzít zodpovědnost za
- **DE source:** verantworten
- **LV reference:** uzņemties atbildību par
- **Problem:** Verantworten znamená být za něco odpovědný nebo něco obhájit, ne převzít odpovědnost.
- **Recommended CS:** Nést odpovědnost za
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 35: c1-verschlucken-175

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-verschlucken-175
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Polykat
- **DE source:** verschlucken
- **LV reference:** norīt
- **Problem:** Verschlucken zde znamená spolknout; „polykat“ vyjadřuje opakovaný nebo nedokonavý děj.
- **Recommended CS:** Spolknout
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 36: c1-sich verständigen-178

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-sich verständigen-178
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vycházet spolu
- **DE source:** sich verständigen
- **LV reference:** saprasties
- **Problem:** Sich verständigen znamená dorozumět se; „vycházet spolu“ znamená mít dobré vztahy.
- **Recommended CS:** Dorozumět se
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 37: c1-sich zufrieden geben-185

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-sich zufrieden geben-185
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Uspokojit
- **DE source:** sich zufrieden geben
- **LV reference:** apmierināties
- **Problem:** Chybí zvratné „se“ a význam se mění z „spokojit se“ na „uspokojit někoho nebo něco“.
- **Recommended CS:** Spokojit se
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 38: c1-Aufmerksamkeit-189

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Aufmerksamkeit-189
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Pozor
- **DE source:** Aufmerksamkeit
- **LV reference:** uzmanība
- **Problem:** Jako podstatné jméno znamená Aufmerksamkeit „pozornost“; „pozor“ je hlavně výzva nebo varování.
- **Recommended CS:** Pozornost
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 39: c1-Abgeordnete-197

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Abgeordnete-197
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zástupce • Zástupce • Delegát
- **DE source:** Abgeordnete
- **LV reference:** deputāts • pārstāvis • delegāts
- **Problem:** Hlavní význam Abgeordnete je poslanec; současný překlad navíc zbytečně opakuje „zástupce“.
- **Recommended CS:** Poslanec • Zástupce • Delegát
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 40: c1-Abschleppdienst-199

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Abschleppdienst-199
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Evakuační služba • Stěhovací služba
- **DE source:** Abschleppdienst
- **LV reference:** evakuācijas dienests • aizvākšanas dienests
- **Problem:** Abschleppdienst je odtahová služba; „stěhovací služba“ označuje přepravu při stěhování.
- **Recommended CS:** Odtahová služba
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 41: c1-Befangenheit-211

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Befangenheit-211
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Rozpaky • Rozpaky
- **DE source:** Befangenheit
- **LV reference:** samulsums • apmulsums
- **Problem:** „Befangenheit“ znamená především podjatost; současný text obsahuje jen duplicitní překlad rozpaků.
- **Recommended CS:** Podjatost • Rozpaky
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 42: c1-beglückwünschen-213

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-beglückwünschen-213
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Přát si štěstí • Blahopřát
- **DE source:** beglückwünschen
- **LV reference:** novēlēt laimes • apsveikt
- **Problem:** „Přát si štěstí“ znamená přát štěstí sobě, nikoli někomu blahopřát.
- **Recommended CS:** Blahopřát
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 43: c1-Zahnbelag-218

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Zahnbelag-218
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Zubního plaku
- **DE source:** Zahnbelag
- **LV reference:** zobu aplikums
- **Problem:** Současný výraz je v genitivu; jako základní heslo musí být v nominativu.
- **Recommended CS:** Zubní plak
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 44: c1-Belegschaft-219

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Belegschaft-219
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Kolektivní • Zaměstnanci
- **DE source:** Belegschaft
- **LV reference:** kolektīvs • personāls
- **Problem:** „Kolektivní“ je přídavné jméno, zatímco německé heslo označuje zaměstnance nebo personál.
- **Recommended CS:** Personál • Zaměstnanci
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 45: c1-bereitwillig-224

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-bereitwillig-224
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Připraven sloužit • Zavazující
- **DE source:** bereitwillig
- **LV reference:** gatavs pakalpot • pakalpīgs
- **Problem:** „Zavazující“ znamená obligující nebo slavnostní; není synonymem německého „bereitwillig“.
- **Recommended CS:** Ochotný • Vstřícný
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 46: c1-Berufsberatung-225

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Berufsberatung-225
- **Field:** csText
- **Severity:** HIGH
- **Status:** NATURALNESS
- **Current CS text:** Konzultace odborné orientace
- **DE source:** Berufsberatung
- **LV reference:** profesionālās orientācijas konsultācija
- **Problem:** Současné spojení je v češtině nepřirozené a neodpovídá běžnému označení kariérového poradenství.
- **Recommended CS:** Profesní poradenství
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 47: c1-Berufsgeheimnis-226

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Berufsgeheimnis-226
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Tajemství úřadu
- **DE source:** Berufsgeheimnis
- **LV reference:** amata noslēpums
- **Problem:** Jde o tajemství vyplývající z povolání, nikoli o tajemství úřadu.
- **Recommended CS:** Profesní tajemství
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 48: c1-Beschaffenheit-229

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Beschaffenheit-229
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Kvalita • Příroda • Podstata
- **DE source:** Beschaffenheit
- **LV reference:** īpašība • daba • būtība
- **Problem:** V tomto významu „daba“ znamená povahu nebo charakter, nikoli přírodu.
- **Recommended CS:** Kvalita • Povaha • Podstata
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 49: c1-Bescheinigung-231

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Bescheinigung-231
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Odkaz • Osvědčení • Atestace • Atest
- **DE source:** Bescheinigung
- **LV reference:** uzziņa • apliecība • apliecinājums • apliecināšana
- **Problem:** „Odkaz“ znamená reference nebo link; není překladem německého potvrzení či osvědčení.
- **Recommended CS:** Potvrzení • Osvědčení • Certifikát
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 50: c1-beschlagnahmen-232

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-beschlagnahmen-232
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zabavit • Zabavit • Vyvlastnit
- **DE source:** beschlagnahmen
- **LV reference:** apķīlāt • konfiscēt • atsavināt
- **Problem:** „Vyvlastnit“ znamená expropriovat, nikoli zabavit; první překlad je navíc duplicitní.
- **Recommended CS:** Zabavit • Konfiskovat
- **Rationale:** Luna linguistic audit (1 confidence)


_... un vēl 100 HIGH atradumi (skat. reports/temp/cs-c1-audit/)._


### MEDIUM (102)

### Finding 1: c1-voraussetzen

- **Dataset:** c1
- **Batch:** 551-572
- **Card/Index:** c1-voraussetzen
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** voraus
- **DE source:** voraussetzen
- **LV reference:** pieņemt kā priekšnoteikumu
- **Problem:** Accent term "voraus" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 2: c1-aufrechterhalten

- **Dataset:** c1
- **Batch:** 551-572
- **Card/Index:** c1-aufrechterhalten
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** erhält
- **DE source:** aufrechterhalten
- **LV reference:** uzturēt spēkā
- **Problem:** Accent term "erhält" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 3: c1-aufrechterhalten

- **Dataset:** c1
- **Batch:** 551-572
- **Card/Index:** c1-aufrechterhalten
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** auf
- **DE source:** aufrechterhalten
- **LV reference:** uzturēt spēkā
- **Problem:** Accent term "auf" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 4: c1-nachvollziehen-5

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-nachvollziehen-5
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Rozumět • Následovat logiku
- **DE source:** nachvollziehen
- **LV reference:** saprast • sekot loģikai
- **Problem:** „Následovat logiku“ je v češtině nepřirozené; běžná kolokace je „sledovat logiku“ či „chápat logiku“.
- **Recommended CS:** Rozumět • Sledovat logiku
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 5: c1-Aktionsprogramm-10

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Aktionsprogramm-10
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Program akcí
- **DE source:** Aktionsprogramm
- **LV reference:** pasākumu programma
- **Problem:** „Program akcí“ označuje program událostí; Aktionsprogramm je akční nebo programový plán opatření.
- **Recommended CS:** Akční program
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 6: c1-Alarmbereitschaft-11

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Alarmbereitschaft-11
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Pohotovosti
- **DE source:** Alarmbereitschaft
- **LV reference:** trauksmes gatavība
- **Problem:** Německé podstatné jméno je v jednotném čísle; český výraz je zde navíc nesprávně v množném čísle.
- **Recommended CS:** Pohotovost
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 7: c1-Frachtgeld-27

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Frachtgeld-27
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Poplatky za přepravu
- **DE source:** Frachtgeld
- **LV reference:** maksa par kravas pārvadāšanu
- **Problem:** Německé slovo je jednotné číslo a označuje přepravné či poplatek za přepravu, ne obecně poplatky.
- **Recommended CS:** Přepravné
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 8: c1-K indesmisshandlung-31

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-K indesmisshandlung-31
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Násilí na dětech
- **DE source:** Kindesmisshandlung
- **LV reference:** vardarbība pret bērniem
- **Problem:** „Násilí na dětech“ je širší a méně přesné; Kindesmisshandlung znamená týrání nebo zneužívání dětí.
- **Recommended CS:** Týrání dětí
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 9: c1-Anwalt-35

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Anwalt-35
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Právník
- **DE source:** Anwalt
- **LV reference:** advokāts
- **Problem:** „Právník“ je obecnější označení; Anwalt v tomto významu označuje advokáta nebo právního zástupce.
- **Recommended CS:** Advokát
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 10: c1-Bäckerhandwerk-39

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Bäckerhandwerk-39
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Práce pekaře
- **DE source:** Bäckerhandwerk
- **LV reference:** maiznieka amats
- **Problem:** Bäckerhandwerk označuje pekařské řemeslo nebo obor, ne pouze práci konkrétního pekaře.
- **Recommended CS:** Pekařské řemeslo
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 11: c1-Beschäftigung-44

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Beschäftigung-44
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Povolání
- **DE source:** Beschäftigung
- **LV reference:** nodarbošanās
- **Problem:** „Povolání“ je jen jeden užší význam; Beschäftigung může znamenat zaměstnání i činnost či aktivitu.
- **Recommended CS:** Zaměstnání • Činnost
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 12: c1-Besichtigung-46

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Besichtigung-46
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Inspekce
- **DE source:** Besichtigung
- **LV reference:** apskate
- **Problem:** „Inspekce“ evokuje úřední kontrolu; Besichtigung běžně znamená prohlídku místa, budovy nebo památky.
- **Recommended CS:** Prohlídka
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 13: c1-Autobahnbrücke-48

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Autobahnbrücke-48
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Silniční nadjezd
- **DE source:** Autobahnbrücke
- **LV reference:** ceļa pārvads
- **Problem:** Autobahnbrücke je most na dálnici nebo dálniční most; „silniční nadjezd“ označuje jiný typ konstrukce.
- **Recommended CS:** Dálniční most
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 14: c1-Lastkraftwagen-102

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Lastkraftwagen-102
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Těžké auto
- **DE source:** Lastkraftwagen
- **LV reference:** smagā automašīna
- **Problem:** Výraz znamená nákladní automobil nebo kamion, nikoli obecně těžké auto.
- **Recommended CS:** Nákladní automobil
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 15: c1-Notarzt-116

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Notarzt-116
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Pohotovostní lékař
- **DE source:** Notarzt
- **LV reference:** ātrās palīdzības ārsts
- **Problem:** Notarzt je lékař zasahující v přednemocniční záchranné službě, ne pouze lékař na pohotovosti.
- **Recommended CS:** Lékař záchranné služby
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 16: c1-Rechtsanwalt-129

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Rechtsanwalt-129
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Právník
- **DE source:** Rechtsanwalt
- **LV reference:** advokāts
- **Problem:** Právník je širší označení; Rechtsanwalt označuje konkrétně advokáta.
- **Recommended CS:** Advokát
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 17: c1-schmerzhaft-139

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-schmerzhaft-139
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Bolestivé
- **DE source:** schmerzhaft
- **LV reference:** sāpīgs
- **Problem:** Samostatný překlad přídavného jména má být v základním, obvykle mužském tvaru; bolestivé je střední rod.
- **Recommended CS:** Bolestivý
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 18: c1-Schwiegereltern-143

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Schwiegereltern-143
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Manželovi rodiče
- **DE source:** Schwiegereltern
- **LV reference:** vīra vecāki
- **Problem:** Schwiegereltern jsou rodiče manžela nebo manželky obecně, ne pouze manželovi rodiče.
- **Recommended CS:** Tchán a tchyně
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 19: c1-Stadtrundfahrt-149

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Stadtrundfahrt-149
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Výlet městem
- **DE source:** Stadtrundfahrt
- **LV reference:** brauciens pa pilsētu
- **Problem:** Stadtrundfahrt je organizovaná prohlídka města, často okružní jízdou; výlet městem je příliš obecný.
- **Recommended CS:** Prohlídka města
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 20: c1-Verlegenheit-173

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Verlegenheit-173
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Zmatek
- **DE source:** Verlegenheit
- **LV reference:** apjukums
- **Problem:** Verlegenheit označuje rozpaky nebo nepříjemné rozpoložení, zatímco „zmatek“ znamená confusion.
- **Recommended CS:** Rozpaky
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 21: c1-Abkommen-198

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Abkommen-198
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Dohoda • Dohoda
- **DE source:** Abkommen
- **LV reference:** nolīgums • vienošanās
- **Problem:** Oba české ekvivalenty jsou stejné, a druhý význam Abkommen může být úmluva nebo smlouva.
- **Recommended CS:** Dohoda • Úmluva
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 22: c1-beachtenswert-207

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-beachtenswert-207
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Pozoruhodný • Značný
- **DE source:** beachtenswert
- **LV reference:** ievērības cienīgs • vērā ņemams
- **Problem:** „Značný“ znamená značný nebo velký, nikoli hodný pozornosti.
- **Recommended CS:** Pozoruhodný
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 23: c1-beklagen-217

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-beklagen-217
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** STUDY
- **Current CS text:** Litovat • Truchlit • Truchlit • Naříkat • Stěžovat si
- **DE source:** beklagen
- **LV reference:** nožēlot • skumt • apraudāt • žēloties • sūdzēties
- **Problem:** „Truchlit“ je duplicitní a nevystihuje dobře význam oplakávat nebo naříkat.
- **Recommended CS:** Litovat • Oplakávat • Naříkat • Stěžovat si
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 24: c1-benachteiligen-220

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-benachteiligen-220
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Škodit • Způsobit škodu • Škodit
- **DE source:** benachteiligen
- **LV reference:** kaitēt • nodarīt zaudējumus • nodarīt pāri
- **Problem:** Heslo znamená znevýhodňovat nebo diskriminovat; současné překlady jsou nepřesné a duplicitní.
- **Recommended CS:** Znevýhodňovat • Poškozovat
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 25: c1-beratschlagen-222

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-beratschlagen-222
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Diskutovat
- **DE source:** beratschlagen
- **LV reference:** apspriesties
- **Problem:** „Beratschlagen“ znamená společně se radit nebo projednávat, ne pouze diskutovat.
- **Recommended CS:** Radit se
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 26: c1-Berufung-227

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Berufung-227
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Volání • Sklon • Apel
- **DE source:** Berufung
- **LV reference:** aicinājums • tieksme • atsaukšanās
- **Problem:** „Berufung“ označuje povolání, právní odvolání nebo jmenování; „apel“ a „sklon“ jsou zde nepřesné.
- **Recommended CS:** Povolání • Odvolání • Jmenování
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 27: c1-bevorstehend-239

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-bevorstehend-239
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Nadcházející • Další
- **DE source:** bevorstehend
- **LV reference:** gaidāmais • nākamais
- **Problem:** „Další“ znamená následující nebo jiný, ale ne nutně brzy nastávající.
- **Recommended CS:** Nadcházející • Blížící se
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 28: c1-Bezugsperson-243

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Bezugsperson-243
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Kontakt • Nejbližší osoba
- **DE source:** Bezugsperson
- **LV reference:** kontaktpersona • tuvākais cilvēks
- **Problem:** „Kontakt“ označuje vztah nebo spojení, nikoli osobu; německé heslo označuje konkrétní osobu.
- **Recommended CS:** Kontaktní osoba • Blízká osoba
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 29: c1-dauerhaft-255

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-dauerhaft-255
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Trvanlivý • Dlouhý • Trvanlivý
- **DE source:** dauerhaft
- **LV reference:** ilgstošs • ilgs • izturīgs
- **Problem:** „Dlouhý“ není vhodný překlad pro trvalost a třetí překlad je duplicitní.
- **Recommended CS:** Trvalý • Dlouhodobý • Odolný
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 30: c1-Eigentumsdelikt-260

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Eigentumsdelikt-260
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Porušení vlastnických práv
- **DE source:** Eigentumsdelikt
- **LV reference:** īpašuma tiesību pārkāpums
- **Problem:** Německé „Delikt“ označuje delikt či trestný čin; současný překlad znamená jen porušení práv.
- **Recommended CS:** Majetkový delikt
- **Rationale:** Luna linguistic audit (0.94 confidence)


_... un vēl 72 MEDIUM atradumi (skat. reports/temp/cs-c1-audit/)._


### LOW (15)

### Finding 1: c1-bedingungslos-210

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-bedingungslos-210
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Bezpodmínečný • Bezpodmínečný • Bez výhrad • Bez podmínek
- **DE source:** bedingungslos
- **LV reference:** bezierunu • beznosacījumu • bez ierunām • bez nosacījumiem
- **Problem:** První překlad je duplicitní; karta má obsahovat odlišné, užitečné ekvivalenty.
- **Recommended CS:** Bezpodmínečný • Bez výhrad • Bez podmínek
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 2: c1-beiderseitig-214

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-beiderseitig-214
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Oboustranný • Oboustranný
- **DE source:** beiderseitig
- **LV reference:** abpusīgs • abpusējs
- **Problem:** Překlad je uveden dvakrát beze změny.
- **Recommended CS:** Oboustranný
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 3: c1-beispielhaft-216

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-beispielhaft-216
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Vzorný • Vzorný
- **DE source:** beispielhaft
- **LV reference:** parauga • priekšzīmīgs
- **Problem:** Překlad je uveden dvakrát; druhý význam lze vyjádřit slovem „příkladný“.
- **Recommended CS:** Vzorný • Příkladný
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 4: c1-beträchtlich-235

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-beträchtlich-235
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Značný • Docela velký • Značný
- **DE source:** beträchtlich
- **LV reference:** ievērojams • krietni liels • krietns
- **Problem:** Třetí překlad je duplicitní; karta má nabídnout odlišné ekvivalenty pro význam „značný“.
- **Recommended CS:** Značný • Poměrně velký • Výrazný
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 5: c1-Währungseinheit-280

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Währungseinheit-280
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Jednotka peněz
- **DE source:** Währungseinheit
- **LV reference:** naudas mērvienība
- **Problem:** Přirozený český termín pro „Währungseinheit“ je „peněžní jednotka“, ne „jednotka peněz“.
- **Recommended CS:** Peněžní jednotka
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 6: c1-Sonnenfinsternis-478

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Sonnenfinsternis-478
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Zatmění slunce
- **DE source:** Sonnenfinsternis
- **LV reference:** saules aptumsums
- **Problem:** V astronomickém názvu se píše vlastní jméno Slunce s velkým písmenem.
- **Recommended CS:** Zatmění Slunce
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 7: c1-Vollversammlung-538

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Vollversammlung-538
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Plénum • Valná hromada • Valná hromada
- **DE source:** Vollversammlung
- **LV reference:** plēnums • pilnsapulce • ģenerālā asambleja
- **Problem:** The third equivalent duplicates the second instead of providing the general-assembly sense.
- **Recommended CS:** Plénum • valná hromada • generální shromáždění
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 8: c1-Hektar-565

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Hektar-565
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Hektar
- **DE source:** Hektar
- **LV reference:** hektārs
- **Problem:** V češtině se obecné podstatné jméno píše s malým počátečním písmenem.
- **Recommended CS:** hektar
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 9: c1-Krüppel-568

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Krüppel-568
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Mrzák
- **DE source:** Krüppel
- **LV reference:** kroplis
- **Problem:** České obecné podstatné jméno se píše s malým počátečním písmenem; význam překladu je odpovídající.
- **Recommended CS:** mrzák
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 10: c1-Matsch-569

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Matsch-569
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Bláto • Břečka
- **DE source:** Matsch
- **LV reference:** dubļi • šļaka
- **Problem:** Obě česká obecná podstatná jména se píší s malým počátečním písmenem.
- **Recommended CS:** bláto • břečka
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 11: c1-Panter-570

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Panter-570
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Panter
- **DE source:** Panter
- **LV reference:** pantera
- **Problem:** České obecné podstatné jméno se píše s malým počátečním písmenem.
- **Recommended CS:** panter
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 12: c1-Panther-571

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-Panther-571
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Panter
- **DE source:** Panther
- **LV reference:** pantera
- **Problem:** České obecné podstatné jméno se píše s malým počátečním písmenem.
- **Recommended CS:** panter
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 13: c1-zusammenfassen

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-zusammenfassen
- **Field:** study.translation
- **Severity:** LOW
- **Status:** TITLE_FORMAT
- **Current CS text:** Shrnout • Shrnout
- **DE source:** zusammenfassen
- **LV reference:** apkopot • rezumēt
- **Problem:** Oba české významy jsou totožné; hlavní překlad má být krátký a nemá opakovat stejný výraz.
- **Recommended CS:** Shrnout
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 14: c1-wahl

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-wahl
- **Field:** study.translation
- **Severity:** LOW
- **Status:** TITLE_FORMAT
- **Current CS text:** Volba • Volba
- **DE source:** Wahl
- **LV reference:** izvēle • vēlēšanas
- **Problem:** Druhý význam v politickém kontextu je množné číslo „volby“, nikoli opakovaná „volba“.
- **Recommended CS:** Volba • Volby
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 15: c1-zuschlag

- **Dataset:** c1
- **Batch:** linguistic
- **Card/Index:** c1-zuschlag
- **Field:** study.tip
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Der Zuschlag = příplatek/příplatek (příplatek), nikoli příloha dokumentu.
- **DE source:** Der Zuschlag
- **LV reference:** der Zuschlag = piemaksa/uzcenojums
- **Problem:** Text obsahuje opakování a nepřirozenou závorku místo jasného rozlišení významů.
- **Recommended CS:** Der Zuschlag = příplatek nebo přirážka, nikoli příloha dokumentu.
- **Rationale:** Luna linguistic audit (0.99 confidence)


## SOURCE_DE_ISSUES

_Nav SOURCE_DE_ISSUE atradumu._


## NEEDS_OWNER_REVIEW

_Nav NEEDS_OWNER_REVIEW atradumu._


## FALSE POSITIVES

_Nav dokumentētu FALSE_POSITIVE._

## GALA STATUSS

- 100% datasets auditēts: **JĀ**
- Neauditēti objekti: 0
- Audits pilnīgs: **JĀ**
- Production dati mainīti: **NĒ (0 izmaiņu)**
- DE READ-ONLY: **PASS**

---

_Audita datums: 2026-08-10_
_Režīms: READ-ONLY — nekādas production izmaiņas_
_Pagaidu artefakti: reports/temp/cs-c1-audit/_
