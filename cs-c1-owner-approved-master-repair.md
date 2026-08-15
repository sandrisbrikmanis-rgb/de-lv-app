# CS--DE C1 --- OWNER APPROVED MASTER REPAIR MAPPINGS

Šis fails apvieno visus C1 OWNER apstiprinātos remonta mappingus. DE =
STRICT READ-ONLY. Piemēro tikai COPY-ONLY ar precīzu CURRENT validāciju.

------------------------------------------------------------------------

# CS--DE C1 OWNER Repair --- Group 01 (pirmās 50 parastās finding kartītes)

Metodika: OWNER lingvistiskais lēmums. DE = STRICT READ-ONLY. Cursor
drīkst tikai COPY-ONLY piemērot rindas ar statusu `LABOT`, ja faktiskā
production vērtība precīzi sakrīt ar `CURRENT`. `NELABOT` rindas
izlaist. Nekādu citu izmaiņu.

  ----------------------------------------------------------------------------------------------------
         \# Card ID                            Field      CURRENT         NEW            Status
  --------- ---------------------------------- ---------- --------------- -------------- -------------
          1 `c1-gewährleisten-1`               `csText`   Poskytnout      Zajistit       **LABOT**

          2 `c1-umstritten-3`                  `csText`   Rozporuplné     Kontroverzní • **LABOT**
                                                                          Sporný         

          3 `c1-nachvollziehen-5`              `csText`   Rozumět •       Rozumět •      **LABOT**
                                                          Následovat      Sledovat       
                                                          logiku          logiku         

          4 `c1-Aktionsprogramm-10`            `csText`   Program akcí    Akční program  **LABOT**

          5 `c1-Alarmbereitschaft-11`          `csText`   Pohotovosti     Pohotovost     **LABOT**

          6 `c1-Altweibersommer-12`            `csText`   Jaro            Babí léto      **LABOT**

          7 `c1-anfechten-13`                  `csText`   Spor • Otázka   Napadnout •    **LABOT**
                                                                          Zpochybnit     

          8 `c1-Frachtbrief-26`                `csText`   Nákladní        Nákladní list  **LABOT**
                                                          nákladní list                  

          9 `c1-Frachtgeld-27`                 `csText`   Poplatky za     Přepravné      **LABOT**
                                                          přepravu                       

         10 `c1-Frauenrechtlerin-28`           `csText`   Bojovník za     Bojovnice za   **LABOT**
                                                          rovnoprávnost   práva žen      
                                                          žen                            

         11 `c1-Kinderschänder-30`             `csText`   Pedofil         Pachatel       **LABOT**
                                                                          sexuálního     
                                                                          zneužívání     
                                                                          dětí           

         12 `c1-Kindesmisshandlung-31`         `csText`   Násilí na       Týrání dětí    **LABOT**
                                                          dětech                         

         13 `c1-Zivilgesetzbuch-32`            `csText`   Občanské právo  Občanský       **LABOT**
                                                                          zákoník        

         14 `c1-Aktie-33`                      `csText`   Akce            Akcie          **LABOT**

         15 `c1-Anwalt-35`                     `csText`   Právník         Advokát        **LABOT**

         16 `c1-Bäckerhandwerk-39`             `csText`   Práce pekaře    Pekařské       **LABOT**
                                                                          řemeslo        

         17 `c1-sich beschäftigen-43`          `csText`   Obsadit         Zabývat se     **LABOT**

         18 `c1-Beschäftigung-44`              `csText`   Povolání        Zaměstnání •   **LABOT**
                                                                          Činnost        

         19 `c1-Besichtigung-46`               `csText`   Inspekce        Prohlídka      **LABOT**

         20 `c1-Autobahnbrücke-48`             `csText`   Silniční        Dálniční most  **LABOT**
                                                          nadjezd                        

         21 `c1-Gepäckträger-70`               `csText`   Kufr            Nosič          **LABOT**
                                                                          zavazadel      

         22 `c1-geschäftlich-71`               `csText`   Transakce       Obchodní       **LABOT**

         23 `c1-Gesichtspunkt-77`              `csText`   Názor           Hledisko •     **LABOT**
                                                                          Aspekt         

         24 `c1-Tasteninstrument-90`           `csText`   Klávesnice      Klávesový      **LABOT**
                                                                          nástroj        

         25 `c1-Krankheitsbild-101`            `csText`   Nemocná scéna   Klinický obraz **LABOT**

         26 `c1-Lastkraftwagen-102`            `csText`   Těžké auto      Nákladní       **LABOT**
                                                                          automobil      

         27 `c1-Modezeitschrift-110`           `csText`   Módní časopis   Módní časopis  **NELABOT**

         28 `c1-Morgengymnastik-112`           `csText`   Svítání         Ranní cvičení  **LABOT**

         29 `c1-Notarzt-116`                   `csText`   Pohotovostní    Lékař          **LABOT**
                                                          lékař           záchranné      
                                                                          služby         

         30 `c1-Rechtsanwalt-129`              `csText`   Právník         Advokát        **LABOT**

         31 `c1-Rennen mit Hindernissen-131`   `csText`   Překážkovou     Překážkový     **LABOT**
                                                          dráhu           závod          

         32 `c1-Scheibenwischer-136`           `csText`   Čistič oken     Stěrač         **LABOT**
                                                          automobilů                     

         33 `c1-Schiedsrichter-137`            `csText`   Soudce          Rozhodčí       **LABOT**

         34 `c1-Schlussverkauf-138`            `csText`   Výprodej zboží  Výprodej zboží **NELABOT**
                                                          na konci sezóny na konci       
                                                          za snížené ceny sezóny za      
                                                                          snížené ceny   

         35 `c1-schmerzhaft-139`               `csText`   Bolestivé       Bolestivý      **LABOT**

         36 `c1-Schutzumschlag-142`            `csText`   Pokrýt          Ochranný       **LABOT**
                                                                          přebal         

         37 `c1-Schwiegereltern-143`           `csText`   Manželovi       Tchán a tchyně **LABOT**
                                                          rodiče                         

         38 `c1-Stadtrundfahrt-149`            `csText`   Výlet městem    Okružní        **LABOT**
                                                                          prohlídka      
                                                                          města          

         39 `c1-Stellvertreter-151`            `csText`   Nahradit        Zástupce       **LABOT**

         40 `c1-Strampelhöschen-153`           `csText`   Dětská          Dupačky        **LABOT**
                                                          prolézačka                     

         41 `c1-Stromverbrauch-154`            `csText`   Aktuální        Spotřeba       **LABOT**
                                                          spotřeba        elektřiny      

         42 `c1-Terminkalender-157`            `csText`   Poznámkový      Kalendář       **LABOT**
                                                          kalendář        termínů        

         43 `c1-transportieren-160`            `csText`   K přepravě      Přepravovat    **LABOT**

         44 `c1-Überschwemmung-161`            `csText`   Zaplavit        Povodeň •      **LABOT**
                                                                          Záplava        

         45 `c1-Unternehmen-162`               `csText`   Společnost •    Podnik •       **LABOT**
                                                          Event           Společnost     

         46 `c1-verantworten-168`              `csText`   Převzít         Nést           **LABOT**
                                                          zodpovědnost za odpovědnost za 

         47 `c1-Verlegenheit-173`              `csText`   Zmatek          Rozpaky        **LABOT**

         48 `c1-verschlucken-175`              `csText`   Polykat         Spolknout      **LABOT**

         49 `c1-sich verständigen-178`         `csText`   Vycházet spolu  Dorozumět se   **LABOT**

         50 `c1-sich zufrieden geben-185`      `csText`   Uspokojit       Spokojit se    **LABOT**
  ----------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Kartītes pārskatītas: **50/50**
-   LABOT: **48**
-   NELABOT / FALSE POSITIVE: **2**
-   Study kartītes šajā grupā: **0** --- tās tiek apstrādātas atsevišķi
    pa 10.
-   DE izmaiņas: **0**

### OWNER piezīmes

-   `c1-Modezeitschrift-110`: **NELABOT** --- `Módní časopis` ir pareizs
    čehu teksts; `ó` nav poļu atlikuma pierādījums.
-   `c1-Schlussverkauf-138`: **NELABOT** --- pašreizējais teksts ir
    korekts čehu valodā; `ó` validatora findings ir false positive.
-   Vairākos gadījumos OWNER variants apzināti atšķiras no audita
    proposed replacement, ja precīzāks vai dabiskāks čehu variants ir
    labāks (piem., `Dupačky`, `Okružní prohlídka města`, `Stěrač`).

------------------------------------------------------------------------

# CS--DE C1 OWNER Repair --- Group 02 (parastās finding kartītes 51--100)

DE = STRICT READ-ONLY. Cursor drīkst tikai COPY-ONLY piemērot `LABOT`
mappingus, ja faktiskā production vērtība precīzi sakrīt ar `CURRENT`.
Mismatch → SKIP. Nekādu citu izmaiņu.

  ------------------------------------------------------------------------------------------------
          \# Card ID                        Field      CURRENT         NEW             Status
  ---------- ------------------------------ ---------- --------------- --------------- -----------
          51 `c1-Aufmerksamkeit-189`        `csText`   Pozor           Pozornost       **LABOT**

          52 `c1-Abgeordnete-197`           `csText`   Zástupce •      Poslanec •      **LABOT**
                                                       Zástupce •      Zástupce •      
                                                       Delegát         Delegát         

          53 `c1-Abkommen-198`              `csText`   Dohoda • Dohoda Dohoda • Úmluva **LABOT**

          54 `c1-Abschleppdienst-199`       `csText`   Evakuační       Odtahová služba **LABOT**
                                                       služba •                        
                                                       Stěhovací                       
                                                       služba                          

          55 `c1-beachtenswert-207`         `csText`   Pozoruhodný •   Pozoruhodný     **LABOT**
                                                       Značný                          

          56 `c1-bedingungslos-210`         `csText`   Bezpodmínečný • Bezpodmínečný • **LABOT**
                                                       Bezpodmínečný • Bez výhrad •    
                                                       Bez výhrad •    Bez podmínek    
                                                       Bez podmínek                    

          57 `c1-Befangenheit-211`          `csText`   Rozpaky •       Podjatost •     **LABOT**
                                                       Rozpaky         Rozpaky         

          58 `c1-beglückwünschen-213`       `csText`   Přát si štěstí  Blahopřát       **LABOT**
                                                       • Blahopřát                     

          59 `c1-beiderseitig-214`          `csText`   Oboustranný •   Oboustranný     **LABOT**
                                                       Oboustranný                     

          60 `c1-beispielhaft-216`          `csText`   Vzorný • Vzorný Vzorný •        **LABOT**
                                                                       Příkladný       

          61 `c1-beklagen-217`              `csText`   Litovat •       Litovat •       **LABOT**
                                                       Truchlit •      Oplakávat •     
                                                       Truchlit •      Naříkat •       
                                                       Naříkat •       Stěžovat si     
                                                       Stěžovat si                     

          62 `c1-Zahnbelag-218`             `csText`   Zubního plaku   Zubní plak      **LABOT**

          63 `c1-Belegschaft-219`           `csText`   Kolektivní •    Personál •      **LABOT**
                                                       Zaměstnanci     Zaměstnanci     

          64 `c1-benachteiligen-220`        `csText`   Škodit •        Znevýhodňovat • **LABOT**
                                                       Způsobit škodu  Poškozovat      
                                                       • Škodit                        

          65 `c1-beratschlagen-222`         `csText`   Diskutovat      Radit se •      **LABOT**
                                                                       Projednávat     

          66 `c1-bereitwillig-224`          `csText`   Připraven       Ochotný •       **LABOT**
                                                       sloužit •       Vstřícný        
                                                       Zavazující                      

          67 `c1-Berufsberatung-225`        `csText`   Konzultace      Profesní        **LABOT**
                                                       odborné         poradenství     
                                                       orientace                       

          68 `c1-Berufsgeheimnis-226`       `csText`   Tajemství úřadu Profesní        **LABOT**
                                                                       tajemství       

          69 `c1-Berufung-227`              `csText`   Volání • Sklon  Povolání •      **LABOT**
                                                       • Apel          Odvolání •      
                                                                       Jmenování       

          70 `c1-Beschaffenheit-229`        `csText`   Kvalita •       Kvalita •       **LABOT**
                                                       Příroda •       Povaha •        
                                                       Podstata        Podstata        

          71 `c1-Bescheinigung-231`         `csText`   Odkaz •         Potvrzení •     **LABOT**
                                                       Osvědčení •     Osvědčení •     
                                                       Atestace •      Certifikát      
                                                       Atest                           

          72 `c1-beschlagnahmen-232`        `csText`   Zabavit •       Zabavit •       **LABOT**
                                                       Zabavit •       Konfiskovat     
                                                       Vyvlastnit                      

          73 `c1-beschuldigen-233`          `csText`   Obviňovat •     Obviňovat •     **LABOT**
                                                       Urážet          Nařknout        

          74 `c1-beträchtlich-235`          `csText`   Značný • Docela Značný •        **LABOT**
                                                       velký • Značný  Poměrně velký • 
                                                                       Výrazný         

          75 `c1-Betriebssystem-237`        `csText`   Počítačový      Operační systém **LABOT**
                                                       instalační                      
                                                       systém                          

          76 `c1-bevorstehend-239`          `csText`   Nadcházející •  Nadcházející •  **LABOT**
                                                       Další           Blížící se      

          77 `c1-bewähren, sich-240`        `csText`   Ukázat se jako  Osvědčit se •   **LABOT**
                                                       pravdivé •      Obstát          
                                                       Ospravedlnit                    

          78 `c1-bewerben, sich-242`        `csText`   Uplatnit •      Ucházet se •    **LABOT**
                                                       Běžet •         Přihlásit se •  
                                                       Usilovat •      Usilovat o      
                                                       Aspirovat                       

          79 `c1-Bezugsperson-243`          `csText`   Kontakt •       Kontaktní osoba **LABOT**
                                                       Nejbližší osoba • Blízká osoba  

          80 `c1-Bilanz-245`                `csText`   Váhy            Bilance         **LABOT**

          81 `c1-Bundesdeutsche-250`        `csText`   Občan FFR       Občan SRN       **LABOT**

          82 `c1-dauerhaft-255`             `csText`   Trvanlivý •     Trvalý •        **LABOT**
                                                       Dlouhý •        Dlouhodobý •    
                                                       Trvanlivý       Odolný          

          83 `c1-dazwischenkommen-256`      `csText`   Stát se • Stát  Přihodit se •   **LABOT**
                                                       se mezi •       Vměšovat se •   
                                                       Zasáhnout       Zasáhnout       

          84 `c1-Eigentumsdelikt-260`       `csText`   Porušení        Majetkový       **LABOT**
                                                       vlastnických    delikt          
                                                       práv                            

          85 `c1-Nachrichtendienst-264`     `csText`   Státní tajná    Zpravodajská    **LABOT**
                                                       služba          služba          

          86 `c1-Dienstleistung-266`        `csText`   Domácí služba   Služba          **LABOT**

          87 `c1-dienstpflichtig-267`       `csText`   Podroben        Podléhající     **LABOT**
                                                       vojenské službě vojenské službě 

          88 `c1-Durchfuhrverbot-275`       `csText`   Zákaz průjezdu  Zákaz tranzitu  **LABOT**

          89 `c1-eingeschrieben-279`        `csText`   Zaznamenané •   Zapsaný •       **LABOT**
                                                       Registrované    Registrovaný    

          90 `c1-Währungseinheit-280`       `csText`   Jednotka peněz  Peněžní         **LABOT**
                                                                       jednotka        

          91 `c1-einreden-283`              `csText`   Říct • Naléhat  Namluvit •      **LABOT**
                                                       • Snažit se     Přesvědčovat    
                                                       přesvědčit                      

          92 `c1-sich einschmeicheln-284`   `csText`   Lichotit •      Vetřít se do    **LABOT**
                                                       Lichotit        přízně •        
                                                                       Podlézat        

          93 `c1-Einspruchsrecht-286`       `csText`   Právo protestu  Právo podat     **LABOT**
                                                       • Právo veta    námitku         

          94 `c1-Elementarregel-293`        `csText`   Základní zákon  Základní        **LABOT**
                                                                       pravidlo        

          95 `c1-sich entgegensetzen-297`   `csText`   Odolat          Postavit se     **LABOT**
                                                                       proti • Vzepřít 
                                                                       se              

          96 `c1-sich entschließen-299`     `csText`   Rozhodnout se • Rozhodnout se • **LABOT**
                                                       Rozhodnout      Odhodlat se     

          97 `c1-entschlossen-300`          `csText`   Odhodlaný •     Rozhodný •      **LABOT**
                                                       Odhodlaný •     Odhodlaný •     
                                                       Neochvějný      Neochvějný      

          98 `c1-Gesetzentwurf-302`         `csText`   Účtovat         Návrh zákona    **LABOT**

          99 `c1-Erbkrankheit-304`          `csText`   Vrozené         Dědičné         **LABOT**
                                                       onemocnění      onemocnění      

         100 `c1-Erntearbeiten-306`         `csText`   Sklizňové       Sklizňové práce **LABOT**
                                                       operace                         
  ------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Pārskatītas parastās finding kartītes: **50/50**
-   LABOT: **50**
-   NELABOT / FALSE_POSITIVE: **0**
-   Study kartītes: **nav iekļautas** --- tās paliek atsevišķam review
    pa 10.
-   DE izmaiņas: **0**

## OWNER precizējumi pret audita priekšlikumiem

-   `c1-beratschlagen-222`: `Radit se • Projednávat` --- saglabā gan
    kopīgas apspriešanās, gan jautājuma izskatīšanas nozīmi.
-   `c1-dazwischenkommen-256`: `Přihodit se • Vměšovat se • Zasáhnout`
    --- dabiskāk aptver gan negaidīti atgadīties, gan iejaukties.
-   `c1-eingeschrieben-279`: `Zapsaný • Registrovaný` --- pamatforma
    vīriešu dzimtes nominatīvā, nevis `Zapsané • Registrované`.
-   `c1-einreden-283`: `Namluvit • Přesvědčovat` --- izņemti pārāk
    vispārīgie/neprecīzie varianti.
-   `c1-sich entgegensetzen-297`: `Postavit se proti • Vzepřít se` ---
    precīzāk atspoguļo refleksīvo konstrukciju.

------------------------------------------------------------------------

# CS--DE C1 OWNER Repair --- Group 03 (parastās finding kartītes 101--150)

OWNER lingvistiskais review. DE = STRICT READ-ONLY. Cursor drīkst tikai
COPY-ONLY piemērot `LABOT` mappingus, ja faktiskā production vērtība
precīzi sakrīt ar `CURRENT`. Mismatch → SKIP. Nekādu citu izmaiņu.

  ---------------------------------------------------------------------------------------------------
         \# Card ID                          Field      CURRENT           NEW             Status
  --------- -------------------------------- ---------- ----------------- --------------- -----------
        101 `c1-festgesetzt-309`             `csText`   Určený •          Určený •        **LABOT**
                                                        Podmíněný •       Stanovený •     
                                                        Stanovený         Zadržený        

        102 `c1-feuergefährlich-310`         `csText`   Ohnivzdorný       Hořlavý         **LABOT**

        103 `c1-Feuerwerkskörper-312`        `csText`   Raketa pro        Pyrotechnický   **LABOT**
                                                        ohňostroje        výrobek         

        104 `c1-fortgeschritten-316`         `csText`   Relativně pozdě   Pokročilý       **LABOT**
                                                        ve vývoji                         

        105 `c1-Führunternehmen-322`         `csText`   Společnost pro    Dopravní podnik **LABOT**
                                                        nákladní dopravu                  

        106 `c1-soziale Fürsorge-323`        `csText`   Sociální          Sociální péče   **LABOT**
                                                        zabezpečení                       

        107 `c1-Auffassungsgabe-324`         `csText`   Schopnost vnímat  Schopnost       **LABOT**
                                                                          chápání         

        108 `c1-Beichtgeheimnis-332`         `csText`   Přiznané          Zpovědní        **LABOT**
                                                        tajemství         tajemství       

        109 `c1-geistesschwach-337`          `csText`   Slabý duchem •    Duševně slabý • **LABOT**
                                                        Svévolný          Slabomyslný     

        110 `c1-Geländefahrt-338`            `csText`   Výlet na běžkách  Jízda v terénu  **LABOT**

        111 `c1-Gemeineigentum-343`          `csText`   Veřejný majetek   Společný        **LABOT**
                                                                          majetek         

        112 `c1-Gemütsmensch-344`            `csText`   Laskavý a laskavý Citově založený **LABOT**
                                                        člověk            • Dobrosrdečný  
                                                                          člověk          

        113 `c1-Genmanipulation-345`         `csText`   Modifikace genu   Genová          **LABOT**
                                                                          manipulace      

        114 `c1-genmanipuliert-348`          `csText`   S upravenými geny Geneticky       **LABOT**
                                                                          modifikovaný    

        115 `c1-Gepäckschein-349`            `csText`   Příjem zavazadel  Zavazadlový     **LABOT**
                                                                          lístek          

        116 `c1-Gepflogenheit-350`           `csText`   Vlastní • Vlastní Zvyklost • Zvyk **LABOT**

        117 `c1-Gerichtshof-353`             `csText`   Soudní síň •      Soudní dvůr •   **LABOT**
                                                        Tribunál          Tribunál        

        118 `c1-Gesamtergebnis-356`          `csText`   Konečný výsledek  Celkový         **LABOT**
                                                        • Konečný         výsledek        
                                                        výsledek                          

        119 `c1-Gesandtschaft-357`           `csText`   Velvyslanectví    Vyslanectví     **LABOT**

        120 `c1-Geschäftsjahr-359`           `csText`   Farmářský rok     Hospodářský rok **LABOT**
                                                                          • Účetní rok    

        121 `c1-geschlechtsreif-360`         `csText`   Dosáhl pohlavní   Pohlavně        **LABOT**
                                                        dospělosti        dospělý         

        122 `c1-gesetzgebend-362`            `csText`   Zákonodárce       Zákonodárný     **LABOT**

        123 `c1-gesetzlos-363`               `csText`   Ilegální          Bezprávný •     **LABOT**
                                                                          Nezákonný       

        124 `c1-gesetzmäßig-364`             `csText`   Zákonný • Zákonný Zákonný •       **LABOT**
                                                                          Zákonitý        

        125 `c1-Gesichtskreis-366`           `csText`   Horizont •        Horizont •      **LABOT**
                                                        Horizont          Obzor           

        126 `c1-Gewissensbisse-368`          `csText`   Lítost            Výčitky svědomí **LABOT**

        127 `c1-gleichberechtigt-371`        `csText`   Rovný • Se        Rovnoprávný •   **LABOT**
                                                        stejnými právy    Se stejnými     
                                                                          právy           

        128 `c1-Haft-376`                    `csText`   Zadržení •        Vazba • Vězení  **LABOT**
                                                        Zatčení                           

        129 `c1-haften-378`                  `csText`   Přilepit • Být    Přilnout • Být  **LABOT**
                                                        přilepený         přilepený       

        130 `c1-Haltbarkeitsdauer-380`       `csText`   Doba skladování   Doba            **LABOT**
                                                                          trvanlivosti    

        131 `c1-Handelspartner-381`          `csText`   Obchodního        Obchodní        **LABOT**
                                                        partnera          partner         

        132 `c1-Hausdurchsuchung-384`        `csText`   Policejní pátrání Domovní         **LABOT**
                                                                          prohlídka       

        133 `c1-herunterkommen-390`          `csText`   Sestoupit •       Sestoupit •     **LABOT**
                                                        Chátrat • Klesat  Chátrat •       
                                                        • Klesat          Upadat •        
                                                                          Zchudnout       

        134 `c1-herunterstürzen-391`         `csText`   Spadnout na zem • Spadnout dolů • **LABOT**
                                                        Spadnout na zem   Zřítit se       

        135 `c1-sich hinreißen lassen-392`   `csText`   Vzrušit se        Nechat se       **LABOT**
                                                                          strhnout •      
                                                                          Nechat se unést 

        136 `c1-Industrieanlage-395`         `csText`   Průmyslový        Průmyslové      **LABOT**
                                                        komplex           zařízení •      
                                                                          Průmyslový      
                                                                          provoz          

        137 `c1-inhaftieren-396`             `csText`   Zatknout          Uvěznit • Vzít  **LABOT**
                                                                          do vazby        

        138 `c1-Justiz-401`                  `csText`   Spravedlnost •    Justice •       **LABOT**
                                                        Právní případy    Soudnictví      

        139 `c1-Kaution-404`                 `csText`   Zástava • Ručení  Kauce • Jistota **LABOT**
                                                        • Kauce • Záruka                  

        140 `c1-Lebensgefährte-414`          `csText`   Manžel v          Životní partner **LABOT**
                                                        neregistrovaném                   
                                                        manželství                        

        141 `c1-Leistungssport-416`          `csText`   Profesionální     Výkonnostní     **LABOT**
                                                        sport             sport •         
                                                                          Vrcholový sport 

        142 `c1-Liebesbeziehung-418`         `csText`   Intimní vztahy    Milostný vztah  **LABOT**

        143 `c1-Liebeserklärung-419`         `csText`   Objevení lásky    Vyznání lásky   **LABOT**

        144 `c1-Machtübernahme-422`          `csText`   Uchopení moci     Převzetí moci   **LABOT**

        145 `c1-Marschflugkörper-424`        `csText`   Řízená střela •   Střela s        **LABOT**
                                                        Řízená střela     plochou dráhou  
                                                                          letu            

        146 `c1-Massenherstellung-425`       `csText`   Sériová výroba    Hromadná výroba **LABOT**

        147 `c1-Presseerklärung-445`         `csText`   Tisková zpráva    Tiskové         **LABOT**
                                                                          prohlášení      

        148 `c1-Produktionsweise-447`        `csText`   Druh výroby       Způsob výroby   **LABOT**

        149 `c1-Rangierbahnhof-448`          `csText`   Kolejiště         Seřaďovací      **LABOT**
                                                                          nádraží         

        150 `c1-Rechenschaft-451`            `csText`   Odpovědnost (za   Skládání účtů • **LABOT**
                                                        své činy) •       Odpovědnost     
                                                        Odpovědnost                       
  ---------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Pārskatītas parastās finding kartītes: **50/50**
-   LABOT: **50**
-   NELABOT / FALSE_POSITIVE: **0**
-   Study kartītes: **nav iekļautas** --- `c1-gelegentlich` ir Study un
    paliek atsevišķam Study review pa 10.
-   DE izmaiņas: **0**

## OWNER precizējumi

-   `c1-Führunternehmen-322`: auditā nebija gatava replacement; OWNER
    variants --- **Dopravní podnik**, nevis pārāk šaurais
    `Společnost pro nákladní dopravu`.
-   `c1-Feuerwerkskörper-312`: **Pyrotechnický výrobek** ir precīzāks
    vispārīgs ekvivalents nekā tikai konkrēta ohňostroja rakete.
-   `c1-Gemütsmensch-344`: **Citově založený • Dobrosrdečný člověk**
    labāk saglabā vācu vārda nozīmes niansi nekā vienkārša īpašības
    vārda atkārtošana.
-   `c1-Geschäftsjahr-359`: pievienots **Účetní rok** kā dabisks un
    biežs kontekstuāls ekvivalents.
-   `c1-Massenherstellung-425`: OWNER variants **Hromadná výroba**; čehu
    terminoloģijā tas ir dabiskāks par burtisko `Masová výroba`.

------------------------------------------------------------------------

# CS--DE C1 OWNER Repair --- Group 04 (parastās finding kartītes 151--200)

DE = STRICT READ-ONLY. Cursor drīkst tikai COPY-ONLY piemērot `LABOT`
mappingus, ja faktiskā production vērtība precīzi sakrīt ar `CURRENT`.
Mismatch → SKIP. `NELABOT` izlaist. Nekādu citu izmaiņu.

  --------------------------------------------------------------------------------------------------
         \# Card ID                        Field      CURRENT         NEW              Status
  --------- ------------------------------ ---------- --------------- ---------------- -------------
        151 `c1-republikanisch-459`        `csText`   Republikánské • Republikánský •  **LABOT**
                                                      Republiky       Republikový      

        152 `c1-sanktionieren-461`         `csText`   Podpora •       Sankcionovat     **LABOT**
                                                      Sankce                           

        153 `c1-schmerzstillend-465`       `csText`   Lék proti       Tišící bolest    **LABOT**
                                                      bolesti                          

        154 `c1-Selbstverwaltung-469`      `csText`   Obec            Samospráva       **LABOT**

        155 `c1-Sensationsmeldung-471`     `csText`   Senzační        Senzační zpráva  **LABOT**
                                                      prohlášení                       

        156 `c1-sesshaft-472`              `csText`   Bydlení na      Usazený          **LABOT**
                                                      jednom místě •                   
                                                      Táborník                         

        157 `c1-Sinnestäuschung-474`       `csText`   Halucinace      Smyslový klam •  **LABOT**
                                                                      Smyslová iluze   

        158 `c1-Krisensituation-476`       `csText`   Krizová situace Krizová situace  **LABOT**
                                                      • Krize                          

        159 `c1-Sonnenfinsternis-478`      `csText`   Zatmění slunce  Zatmění Slunce   **LABOT**

        160 `c1-Spitzenleistung-479`       `csText`   Rekord •        Špičkový výkon • **LABOT**
                                                      Nejvyšší výkon  Vynikající výkon 
                                                      • Tech.                          
                                                      maximální výkon                  

        161 `c1-Staatsanwalt-481`          `csText`   Žalobce         Státní zástupce  **LABOT**

        162 `c1-Steuereinnahmen-483`       `csText`   Daňový příjem   Daňové příjmy    **LABOT**

        163 `c1-stimmberechtigt-484`       `csText`   Oprávněn volit  Oprávněný        **LABOT**
                                                                      hlasovat         

        164 `c1-Studienbewerber-485`       `csText`   Uchazeč o       Uchazeč o        **LABOT**
                                                      vysokou školu   studium          

        165 `c1-synchronisieren-486`       `csText`   Dabovat film    Synchronizovat   **LABOT**

        166 `c1-Tageseinnahmen-487`        `csText`   Denní výdělek   Denní příjmy •   **LABOT**
                                                                      Denní tržby      

        167 `c1-Transfusion-488`           `csText`   Přímou          Transfuze        **LABOT**
                                                      transfuzi krve                   
                                                      z jedné osoby                    
                                                      na druhou                        

        168 `c1-überanstrengen-489`        `csText`   Přetěžovat •    Přetěžovat •     **LABOT**
                                                      Sich ü. k       Přepínat         
                                                      přepracování                     

        169 `c1-Überbleibsel-491`          `csText`   Přebytek •      Pozůstatek •     **LABOT**
                                                      Zůstává         Zbytek           

        170 `c1-übereinstimmen-492`        `csText`   Souhlasit •     Shodovat se •    **LABOT**
                                                      Souhlasit s     Souhlasit        
                                                      někým                            

        171 `c1-Überschuss-493`            `csText`   Zbytek •        Přebytek •       **LABOT**
                                                      Přebytek •      Nadbytek         
                                                      Likvidace                        

        172 `c1-Unannehmlichkeit-495`      `csText`   Potíže •        Nepříjemnost •   **LABOT**
                                                      Nepříjemná      Potíže           
                                                      příležitost                      

        173 `c1-Unterschätzung-498`        `csText`   Podceňovat •    Podcenění •      **LABOT**
                                                      Podceňovat      Podceňování      

        174 `c1-verabschieden-500`         `csText`   Uvolnění z      Rozloučit se •   **LABOT**
                                                      práce • Odejít  Propustit •      
                                                      do důchodu      Schválit         

        175 `c1-veranschlagen-502`         `csText`   Počítat •       Odhadovat •      **LABOT**
                                                      Počítat •       Kalkulovat •     
                                                      Odhadovat       Rozpočtovat      

        176 `c1-verdrießlich-503`          `csText`   Nepříjemný •    Mrzutý •         **LABOT**
                                                      Mrzutý • Mrzutý Rozmrzelý •      
                                                                      Nepříjemný       

        177 `c1-vergewaltigen-506`         `csText`   Znásilnění      Znásilnit        **LABOT**

        178 `c1-sich vergewissern-507`     `csText`   Ujistěte se     Ujistit se       **LABOT**

        179 `c1-Verhandlungen-511`         `csText`   Rozhovory       Jednání •        **LABOT**
                                                                      Vyjednávání      

        180 `c1-Verpflichtung-515`         `csText`   Povinnost •     Povinnost •      **LABOT**
                                                      Povinnost       Závazek          

        181 `c1-vernachlässigen-518`       `csText`   Zanedbávat •    Zanedbávat •     **LABOT**
                                                      Být nedbalý     Opomíjet         

        182 `c1-verpflichten-519`          `csText`   Zavázat se      Zavázat • Uložit **LABOT**
                                                                      povinnost        

        183 `c1-sich verpflichten-520`     `csText`   Podniknout      Zavázat se       **LABOT**

        184 `c1-sich verschließen-521`     `csText`   Vypnout •       Uzavřít se •     **LABOT**
                                                      Vypnout         Bránit se něčemu 

        185 `c1-verschlossen-522`          `csText`   Zamčený •       Zamčený •        **LABOT**
                                                      Zavřený • Přel. Uzavřený •       
                                                      uzavřený •      Zamlklý          
                                                      Soběstačný                       

        186 `c1-verschlüsseln-523`         `csText`   Zašifrovat •    Zašifrovat •     **NELABOT**
                                                      Zakódovat       Zakódovat        

        187 `c1-verschreiben-524`          `csText`   Med. podepsat   Předepsat        **LABOT**

        188 `c1-verschweigen-525`          `csText`   Zadržet •       Zamlčet •        **LABOT**
                                                      Neprozradit     Neprozradit      

        189 `c1-Versuchsgelände-528`       `csText`   Testovací       Zkušební areál   **LABOT**
                                                      hřiště                           

        190 `c1-verunglücken-530`          `csText`   Trpět při       Mít nehodu •     **LABOT**
                                                      nehodě • Trpět  Utrpět nehodu    
                                                      při nehodě                       

        191 `c1-vervollkommnen-533`        `csText`   Doplnit •       Zdokonalit •     **LABOT**
                                                      Zlepšit         Zlepšit          

        192 `c1-sich vervollkommnen-534`   `csText`   Doplnit si      Zdokonalit se    **LABOT**
                                                      znalosti                         

        193 `c1-Volksbefragung-537`        `csText`   Anketa všech    Veřejná          **LABOT**
                                                      lidí •          konzultace •     
                                                      Referendum      Referendum       

        194 `c1-Vollversammlung-538`       `csText`   Plénum • Valná  Plénum • Valná   **LABOT**
                                                      hromada • Valná hromada •        
                                                      hromada         Generální        
                                                                      shromáždění      

        195 `c1-waag[e]recht-540`          `csText`   Úroveň •        Vodorovný •      **LABOT**
                                                      Horizontální    Horizontální     

        196 `c1-Wasserheilanstalt-546`     `csText`   Zařízení na     Vodolečebný      **LABOT**
                                                      úpravu vody     ústav •          
                                                                      Vodoléčebné      
                                                                      zařízení         

        197 `c1-Wasserversorgung-548`      `csText`   Vodovod         Zásobování vodou **LABOT**

        198 `c1-Wechselbeziehung-549`      `csText`   Vzájemná        Vzájemný vztah • **LABOT**
                                                      komunikace      Vzájemná         
                                                                      souvislost       

        199 `c1-Wehrersatzdienst-550`      `csText`   Civilní službu  Civilní služba   **LABOT**
                                                      místo vojenské  místo vojenské   
                                                      služby          služby           

        200 `c1-Weidenkätzchen-551`        `csText`   Mák             Kočičky •        **LABOT**
                                                                      Jehnědy vrby     
  --------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Pārskatītas parastās finding kartītes: **50/50**
-   LABOT: **49**
-   NELABOT / FALSE_POSITIVE: **1**
-   Study kartītes nav iekļautas.
-   DE izmaiņas: **0**

## OWNER piezīmes

-   `c1-verschlüsseln-523`: **NELABOT** --- `Zašifrovat • Zakódovat` ir
    korekts čehu teksts; `ó` šeit ir normāla čehu rakstzīme, tāpēc
    PL_CHAR findings ir false positive.
-   `c1-verabschieden-500`: OWNER variants paplašināts uz **Rozloučit se
    • Propustit • Schválit**, jo *verabschieden* nav tikai
    atlaišana/pensionēšana; bieži nozīmē arī atvadīties un formāli
    pieņemt/schválit likumu.
-   `c1-stimmberechtigt-484`: **Oprávněný hlasovat** ir precīzāks par
    `Oprávněný volit`, jo *Stimme* aptver balsstiesības arī ārpus
    vēlēšanām.
-   `c1-Weidenkätzchen-551`: **Kočičky • Jehnědy vrby** saglabā gan
    dabisko sarunvalodas, gan botāniski skaidro variantu.

------------------------------------------------------------------------

# CS--DE C1 OWNER Repair --- Group 05 (atlikušās parastās finding kartītes)

DE = STRICT READ-ONLY. Cursor drīkst tikai COPY-ONLY piemērot `LABOT`
mappingus, ja faktiskā production vērtība precīzi sakrīt ar `CURRENT`.
Mismatch → SKIP. Nekādu citu izmaiņu.

  ---------------------------------------------------------------------------------------
           \# Card ID                    Field      CURRENT     NEW           Status
  ----------- -------------------------- ---------- ----------- ------------- -----------
          201 `c1-Wetterleuchten-553`    `csText`   Rez         Vzdálené      **LABOT**
                                                                blýskání      

          202 `c1-widerrechtlich-554`    `csText`   Ilegální    Protiprávní   **LABOT**

          203 `c1-zusammenfallen-556`    `csText`   Zhroucení • Zhroutit se • **LABOT**
                                                    Stát se     Shodovat se   

          204 `c1-zusammenstellen-557`   `csText`   Skládat     Sestavit      **LABOT**

          205 `c1-Hektar-565`            `csText`   Hektar      hektar        **LABOT**

          206 `c1-Karre-566`             `csText`   Kolečko     kára          **LABOT**

          207 `c1-Karren-567`            `csText`   Kolečko     kára • vozík  **LABOT**

          208 `c1-Krüppel-568`           `csText`   Mrzák       mrzák         **LABOT**

          209 `c1-Matsch-569`            `csText`   Bláto •     bláto •       **LABOT**
                                                    Břečka      břečka        

          210 `c1-Panter-570`            `csText`   Panter      panter        **LABOT**

          211 `c1-Panther-571`           `csText`   Panter      panter        **LABOT**
  ---------------------------------------------------------------------------------------

## Kopsavilkums

-   Atlikušās parastās finding kartītes: **11/11**
-   LABOT: **11**
-   NELABOT / FALSE_POSITIVE: **0**
-   DE izmaiņas: **0**
-   Ar šo parasto (Simple) finding kartīšu OWNER review ir pabeigts.

## OWNER piezīmes

-   `c1-Karren-567`: izvēlēts **kára • vozík**, jo `Karren` ir plašāks
    par vienu `kára` ekvivalentu.
-   `c1-Krüppel-568`: mainīta tikai čehu vārdnīcas formas sākumburta
    rakstība; pats ekvivalents saglabāts.
-   `c1-Hektar-565`, `c1-Matsch-569`, `c1-Panter-570`, `c1-Panther-571`:
    labojums ir tikai čehu vispārīgo lietvārdu sākumburts.

------------------------------------------------------------------------

# CS--DE C1 OWNER Repair --- Study Group 01 (pirmās 10 Study kartītes)

OWNER lingvistiskais review. DE production puse = STRICT READ-ONLY.
Cursor drīkst tikai COPY-ONLY piemērot `LABOT` mappingus, ja faktiskā
production vērtība precīzi sakrīt ar `CURRENT`. Mismatch → SKIP. Nekādu
citu izmaiņu.

**Study kartītes:** `c1-offentlichkeit`, `c1-partei`, `c1-prozess`,
`c1-zusammenfassen`, `c1-wahl`, `c1-gelegentlich`, `c1-wahlberechtigt`,
`c1-zuschlag`, `c1-beziehen-sich-beziehen-auf`, `c1-beabsichtigen`.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     \# Card ID                           Field                                          CURRENT                                   NEW                                        Status
  ----- --------------------------------- ---------------------------------------------- ----------------------------------------- ------------------------------------------ -----------
      1 `c1-offentlichkeit`               `study.translation`                            Společnost • Otevřenost                   Veřejnost • Veřejný prostor                **LABOT**

      2 `c1-offentlichkeit`               `study.examples[1].lv`                         Případ vyšel najevo.                      Případ se dostal na veřejnost.             **LABOT**

      3 `c1-partei`                       `study.translation`                            Večírek • Večírek                         Politická strana • Strana                  **LABOT**

      4 `c1-partei`                       `study.explanation`                            Hlavní myšlenka: die Partei je obvykle    Hlavní myšlenka: die Partei je obvykle     **LABOT**
                                                                                         politická strana. V právnickém nebo       politická strana. V právním nebo           
                                                                                         konfliktním jazyce to může znamenat i     konfliktním kontextu může znamenat také    
                                                                                         večírek.                                  stranu.                                    

      5 `c1-prozess`                      `study.translation`                            Proces • Žaloba                           Proces • Soudní řízení                     **LABOT**

      6 `c1-prozess`                      `study.explanation`                            Hlavní myšlenka: der Prozess je proces    Hlavní myšlenka: der Prozess znamená       **LABOT**
                                                                                         nebo postup. U soudu der Prozess znamená  proces nebo postup. V právním kontextu     
                                                                                         soud.                                     znamená soudní řízení.                     

      7 `c1-prozess`                      `study.examples[1].lv`                         Soud začíná zítra.                        Soudní proces začíná zítra.                **LABOT**

      8 `c1-zusammenfassen`               `study.translation`                            Shrnout • Shrnout                         Shrnout                                    **LABOT**

      9 `c1-zusammenfassen`               `study.explanation[4]`                         Stejně jako mnoho německých sloves se     Podstatné jméno od slovesa zusammenfassen  **LABOT**
                                                                                         zusammenfassen může stát velkým jménem a  je die Zusammenfassung.                    
                                                                                         členem: zusammenfassen → die                                                         
                                                                                         Zusammenfassen (substantivizace).                                                    

     10 `c1-zusammenfassen`               `study.examples[2].lv`                         Stručně shrnul recenzi.                   Stručně shrnul zprávu.                     **LABOT**

     11 `c1-zusammenfassen`               `study.important[2]`                           Nesprávně: die zusammenfassen → Správně:  Nesprávně: die zusammenfassen → Správně:   **LABOT**
                                                                                         die Zusammenfassen (podstatné jméno vždy  die Zusammenfassung.                       
                                                                                         s velkým písmenem).                                                                  

     12 `c1-wahl`                         `study.translation`                            Volba • Volba                             Volba • Volby                              **LABOT**

     13 `c1-gelegentlich`                 `study.translation`                            Někdy • Příležitost • Kvůli               Občas • Příležitostný • U příležitosti     **LABOT**

     14 `c1-gelegentlich`                 `study.explanation`                            Hlavní myšlenka: gelegentlich je slovo se Hlavní myšlenka: gelegentlich má tři       **LABOT**
                                                                                         třemi funkcemi. Přídavné jméno:           funkce. Jako přídavné jméno znamená        
                                                                                         příležitostný (ein gelegentlicher         příležitostný (ein gelegentlicher Besuch). 
                                                                                         Besuch). Příslovce: někdy, čas od času    Jako příslovce znamená občas, někdy (Er    
                                                                                         (Er kommt gelegentlich). Předložka +      kommt gelegentlich). V předložkovém užití  
                                                                                         dativ: kvůli (gelegentlich des Festes).   s genitivem znamená u příležitosti         
                                                                                                                                   (gelegentlich des Festes).                 

     15 `c1-gelegentlich`                 `study.examples[1].lv`                         Stačí občasná návštěva.                   Stačí příležitostná návštěva.              **LABOT**

     16 `c1-gelegentlich`                 `study.comparison[1].meaning`                  Náhodný • Náhodný                         Příležitostný • Občasný                    **LABOT**

     17 `c1-gelegentlich`                 `study.comparison[2].meaning`                  Kvůli                                     U příležitosti                             **LABOT**

     18 `c1-gelegentlich`                 `study.important.text`                         Příl.: ležérní. Adv.: někdy. Přípravka. + Adj.: příležitostný. Adv.: občas, někdy.   **LABOT**
                                                                                         Gen.: kvůli. Kontext určuje význam.       Předložkové užití + genitiv: u             
                                                                                                                                   příležitosti. Kontext určuje význam.       

     19 `c1-wahlberechtigt`               `study.explanation`                            Hlavní myšlenka: wahlberechtig je         Hlavní myšlenka: wahlberechtigt je         **LABOT**
                                                                                         přídavné jméno, které znamená, že osoba   přídavné jméno, které znamená, že osoba má 
                                                                                         má právo účastnit se voleb -- volit nebo  právo volit. Složení: Wahl (volby) +       
                                                                                         kandidovat ve volbách. Složení: Wahl      berechtigt (oprávněný).                    
                                                                                         (volby) + behrechtig (oprávněný).                                                    

     20 `c1-wahlberechtigt`               `study.comparison[1].meaning`                  Přát si • Volit                           Vybrat • Volit                             **LABOT**

     21 `c1-wahlberechtigt`               `study.tip.leftBlocks[0].text`                 Wahl = volba, behrechtig = způsobilý.     Wahl = volba, berechtigt = oprávněný.      **LABOT**
                                                                                         Běžné v tisku a právních textech.         Běžné v tisku a právních textech.          

     22 `c1-wahlberechtigt`               `study.important.text`                         Wahlberechtig = s právem volit. Naproti:  Wahlberechtigt = s právem volit. Opak:     **LABOT**
                                                                                         nicht wahlberechtigkeit.                  nicht wahlberechtigt.                      

     23 `c1-wahlberechtigt`               `study.sectionAccents.explanation.blue`        \["wahlberechtig","Wahl","behrechtig"\]   \["wahlberechtigt","Wahl","berechtigt"\]   **LABOT**

     24 `c1-zuschlag`                     `study.translation`                            Prémie • Přirážka                         Příplatek • Přirážka                       **LABOT**

     25 `c1-zuschlag`                     `study.tip[0]`                                 Der Zuschlag = příplatek/příplatek        Der Zuschlag = příplatek nebo přirážka,    **LABOT**
                                                                                         (příplatek), nikoli příloha dokumentu.    nikoli příloha dokumentu.                  

     26 `c1-beziehen-sich-beziehen-auf`   `study.translation`                            Aplikovat • Aplikovat na                  Pobírat • Vztahovat se na                  **LABOT**

     27 `c1-beziehen-sich-beziehen-auf`   `study.explanation[0]`                         Hlavní myšlenka: Formální registr:        Hlavní myšlenka: beziehen může znamenat    **LABOT**
                                                                                         atribut zdroje, pravidelný příjem o       pobírat důchod nebo plat či nastěhovat se  
                                                                                         důchodu/platu nebo stěhování do bytu.     do bytu; sich beziehen auf znamená         
                                                                                                                                   vztahovat se na něco.                      

     28 `c1-beziehen-sich-beziehen-auf`   `study.examples[0].lv`                         Aplikovat • Aplikovat na                  Pobírat • Vztahovat se na                  **LABOT**

     29 `c1-beabsichtigen`                `study.examples[1].lv`                         Co myslíš touto událostí?                 Co zamýšlíte tímto opatřením?              **LABOT**

     30 `c1-beabsichtigen`                `study.explanation[5]`                         Beabsichtigen znamená záměrně zamýšlet    Beabsichtigen znamená zamýšlet nebo        **LABOT**
                                                                                         nebo plánovat akci -- ne vztah, ale       plánovat určitou činnost -- jde o záměr,   
                                                                                         záměr.                                    nikoli o vztah.                            

     31 `c1-beabsichtigen`                `study.tip[1]`                                 Beabsichtigen = myslet                    Beabsichtigen = zamýšlet • mít v úmyslu    **LABOT**

     32 `c1-beabsichtigen`                `study.important[0]`                           Beabsichtigen + zu + nepravidelnost: Er   Beabsichtigen + zu + infinitiv: Er         **LABOT**
                                                                                         beabsichtigt zu gehen.                    beabsichtigt zu gehen.                     

     33 `c1-beabsichtigen`                `study.sectionAccents.examples[1].lv.purple`   \["myslíš"\]                              \["zamýšlíte"\]                            **LABOT**

     34 `c1-beabsichtigen`                `study.sectionAccents.tip[1]`                  {"purple":\["Pokud"\]}                    {"green":\["Beabsichtigen"\]}              **LABOT**
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Study kartītes pārskatītas: **10/10**
-   Precīzi LABOT mappingi: **34**
-   NELABOT / FALSE_POSITIVE: **0**
-   DE production izmaiņas: **0**

## OWNER precizējumi

-   `c1-offentlichkeit`: audita `Veřejnost • Veřejnost` netika pieņemts
    kā dublikāts; OWNER variants ir **Veřejnost • Veřejný prostor**.
-   `c1-prozess`: juridiskajai nozīmei izvēlēts precīzāks **Soudní
    řízení**.
-   `c1-zusammenfassen`: audita broad `study.explanation` finding
    sašaurināts līdz faktiskajam kļūdainajam `study.explanation[4]`;
    netiek pārrakstīts viss explanation masīvs.
-   `c1-gelegentlich`: izlabota arī gramatiskā rekcija --- šajā
    lietojumā **+ genitiv**, nevis dativ.
-   `c1-wahlberechtigt`: pēc teksta labošanas sinhronizēts arī
    `sectionAccents.explanation.blue`, lai nepaliktu stale
    `wahlberechtig/behrechtig` termini.
-   `c1-beabsichtigen`: auditā norādītais `study.explanation[4]`
    neatbilda faktiskajam kļūdainajam production elementam; OWNER
    mapping mērķē precīzi uz `study.explanation[5]`. Sinhronizēti arī
    divi acīmredzami stale `sectionAccents` ieraksti, kurus mainītais
    teksts citādi vairs nesaturētu.

------------------------------------------------------------------------

# CS--DE C1 OWNER Repair --- Study Group 02 FINAL (atlikušās 4 Study kartītes)

OWNER lingvistiskais review. DE production puse = STRICT READ-ONLY.
Cursor drīkst tikai COPY-ONLY piemērot `LABOT` mappingus, ja faktiskā
production vērtība precīzi sakrīt ar `CURRENT`. Mismatch → SKIP. Nekādu
citu izmaiņu.

**Study kartītes:** `c1-unterstellen`, `c1-voraussetzen`, `c1-bewahren`,
`c1-aufrechterhalten`.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    \# Card ID                 Field                                          CURRENT                                                       NEW                                                  Status
  ---- ----------------------- ---------------------------------------------- ------------------------------------------------------------- ---------------------------------------------------- -----------
     1 `c1-unterstellen`       `study.examples[0].lv`                         Jsem obviněn ze špatných úmyslů.                              Přičítají mi špatné úmysly.                          **LABOT**

     2 `c1-unterstellen`       `study.examples[1].lv`                         Nic mě neobviňujte!                                           Nic mi nepodsouvejte!                                **LABOT**

     3 `c1-unterstellen`       `study.examples[2].lv`                         Nikdo by neměl být nespravedlivě obviněn ze zrady.            Nikomu by se neměla bezdůvodně přičítat zrada.       **LABOT**

     4 `c1-unterstellen`       `study.examples[3].lv`                         Je obviněn z nedůvěry.                                        Je mu přičítána nevěra.                              **LABOT**

     5 `c1-unterstellen`       `study.examples[4].lv`                         Neoprávněná vina • Předpověď                                  Neoprávněné obvinění • Předpoklad                    **LABOT**

     6 `c1-unterstellen`       `study.explanation[2]`                         Často charakterizováno: obviňováním / přitažlivostí.          Často charakterizováno: obviňováním / připisováním.  **LABOT**

     7 `c1-voraussetzen`       `study.sectionAccents.explanation`             {"green":\["voraussetzen","voraus"\],"purple":\["Hlavní"\]}   {"green":\["voraussetzen"\],"purple":\["Hlavní"\]}   **LABOT**

     8 `c1-voraussetzen`       `study.examples[0].lv`                         Základní znalosti akceptujeme jako předpoklad.                Předpokládáme základní znalosti.                     **LABOT**

     9 `c1-voraussetzen`       `study.examples[1].lv`                         Základní znalosti přijímáme jako předpoklad.                  Předpokládáme základní znalosti.                     **LABOT**

    10 `c1-voraussetzen`       `study.tip[0]`                                 Voraussetzen = předpokládat předpoklad                        Voraussetzen = předpokládat                          **LABOT**

    11 `c1-voraussetzen`       `study.important[0]`                           Voraussetzen je střední rod --- předložka.                    Voraussetzen je sloveso znamenající „předpokládat";  **LABOT**
                                                                                                                                            vyjadřuje předpoklad.                                

    12 `c1-bewahren`           `study.translation`                            Chránit • Chránit                                             Chránit • Zachovat                                   **LABOT**

    13 `c1-bewahren`           `study.examples[0].lv`                         Dodržujeme tradice.                                           Zachováváme tradice.                                 **LABOT**

    14 `c1-bewahren`           `study.examples[2].lv`                         Dodržujeme tradice.                                           Zachováváme tradice.                                 **LABOT**

    15 `c1-bewahren`           `study.examples[3].lv`                         Chránit/zachovat • Aufrechterhalten                           Chránit/zachovat • Udržovat v platnosti              **LABOT**

    16 `c1-bewahren`           `study.important[2]`                           Bewahren → chránit, chránit.                                  Bewahren → chránit, zachovat.                        **LABOT**

    17 `c1-bewahren`           `study.sectionAccents.examples[0].lv.purple`   \["Dodržujeme"\]                                              \["Zachováváme"\]                                    **LABOT**

    18 `c1-bewahren`           `study.sectionAccents.examples[2].lv.purple`   \["Dodržujeme"\]                                              \["Zachováváme"\]                                    **LABOT**

    19 `c1-aufrechterhalten`   `study.sectionAccents.explanation`             {"green":\["aufrechterhalten","erhält","auf"\]}               {"green":\["aufrechterhalten"\]}                     **LABOT**

    20 `c1-aufrechterhalten`   `study.examples[0].lv`                         Stát udržuje pořádek v platnosti.                             Stát udržuje pořádek.                                **LABOT**

    21 `c1-aufrechterhalten`   `study.examples[1].lv`                         Musí akci ponechat v platnosti.                               Je třeba udržovat provoz v chodu.                    **LABOT**

    22 `c1-aufrechterhalten`   `study.examples[2].lv`                         Stát udržuje pořádek v platnosti.                             Stát udržuje pořádek.                                **LABOT**

    23 `c1-aufrechterhalten`   `study.explanation[2]`                         Často charakterizováno: udržováním kondice.                   Často charakterizováno: udržováním stavu.            **LABOT**
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Atlikušās Study kartītes: **4/4**
-   Precīzi LABOT mappingi: **23**
-   NELABOT / FALSE_POSITIVE: **0**
-   DE production izmaiņas: **0**
-   Ar šo **C1 Study OWNER review ir pabeigts: 14/14 Study kartītes**.

## OWNER precizējumi

-   `c1-unterstellen`: pieņemti seši lingvistiskie labojumi; tie atjauno
    vācu konstrukcijas `jemandem etwas unterstellen` nozīmi un labo
    `Untreue` → `nevěra`.
-   `c1-voraussetzen`: stale `voraus` izņemts no `sectionAccents`; tas
    nav atrodams čehu explanation tekstā. Abi dublētie piemēri apzināti
    iegūst vienu un to pašu precīzo tulkojumu, jo arī DE teikumi ir
    identiski.
-   `c1-bewahren`: audita finding `study.examples[4].lv` faktiski
    attiecas uz production `examples[3]`, jo objektā ir tikai četri
    piemēri. Mapping mērķē faktisko production indeksu. Papildus
    sinhronizēti divi `sectionAccents` ieraksti pēc `Dodržujeme` →
    `Zachováváme`.
-   `c1-aufrechterhalten`: `erhält` un `auf` ir stale explanation
    accents; explanation satur `aufrechterhalten`, bet ne šīs atdalītās
    formas. Tāpēc saglabāts tikai `aufrechterhalten`.

## C1 OWNER REVIEW STATUSS

-   Parastās finding kartītes: **pabeigtas**
-   Study finding kartītes: **14/14 pabeigtas**
-   Nākamais posms: apvienot sagatavotos C1 OWNER mapping failus un dot
    Cursoram vienu COPY-ONLY APPLY uzdevumu.
