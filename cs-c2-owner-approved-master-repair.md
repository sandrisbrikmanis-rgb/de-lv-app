# CS--DE C2 --- OWNER APPROVED MASTER REPAIR MAPPINGS

Šis fails apvieno visus CS--DE C2 OWNER apstiprinātos remonta mappingus.

-   Finding kartītes: 75/75
-   Study findings: 0
-   DE = STRICT READ-ONLY
-   Piemērošana: tikai COPY-ONLY ar precīzu CURRENT validāciju
-   Cursor nedrīkst tulkot, pārfrāzēt vai ģenerēt alternatīvus
    labojumus.

------------------------------------------------------------------------

# CS--DE C2 OWNER Repair --- Group 01 (pirmās 50 finding kartītes)

OWNER lingvistiskais review. DE = STRICT READ-ONLY. Cursor drīkst tikai
COPY-ONLY piemērot `LABOT` mappingus, ja faktiskā production vērtība
precīzi sakrīt ar `CURRENT`. Mismatch → SKIP. Nekādu citu izmaiņu.

  ----------------------------------------------------------------------------------------------------------------
        \# Card ID                                   Field      CURRENT              NEW               Status
  -------- ----------------------------------------- ---------- -------------------- ----------------- -----------
         1 `c2-konterkarieren-1`                     `csText`   Rušit                Mařit             **LABOT**

         2 `c2-Stichhaltigkeit-2`                    `csText`   Rozumnost            Opodstatněnost •  **LABOT**
                                                                                     Přesvědčivost     

         3 `c2-unmissverständlich-3`                 `csText`   Nezaměnitelný        Jednoznačný •     **LABOT**
                                                                                     Naprosto jasný    

         4 `c2-veranschaulichen-5`                   `csText`   Prokazatelně ukázat  Znázornit •       **LABOT**
                                                                                     Názorně vysvětlit 

         5 `c2-Teilnehmerausweis-12`                 `csText`   Členská karta        Průkaz účastníka  **LABOT**

         6 `c2-beaufsichtigen-14`                    `csText`   Monitor              Dohlížet •        **LABOT**
                                                                                     Dozorovat         

         7 `c2-Behandlungsraum-16`                   `csText`   Ordinaci lékaře      Ošetřovna •       **LABOT**
                                                                                     Místnost pro      
                                                                                     ošetření          

         8 `c2-entgegenkommen-29`                    `csText`   Narazit              Vyjít vstříc      **LABOT**

         9 `c2-Gehaltsabrechnung-32`                 `csText`   Výpočet mzdy         Výplatní páska •  **LABOT**
                                                                                     Vyúčtování mzdy   

        10 `c2-Katastrophendienst-44`                `csText`   Katastrofická služba Služba při        **LABOT**
                                                                                     katastrofách      

        11 `c2-Kostenerstattung-45`                  `csText`   Náhradu nákladů      Náhrada nákladů   **LABOT**

        12 `c2-Kostensteigerung-46`                  `csText`   Zvyšující se náklady Zvýšení nákladů   **LABOT**

        13 `c2-Krankenversicherung-47`               `csText`   Pojištění pro případ Zdravotní         **LABOT**
                                                                nemoci               pojištění         

        14 `c2-Krankheitssymptom-48`                 `csText`   Příznakem onemocnění Příznak           **LABOT**
                                                                                     onemocnění        

        15 `c2-Lungenentzündung-52`                  `csText`   Rakovina plic        Zápal plic •      **LABOT**
                                                                                     Pneumonie         

        16 `c2-Schlafwagenzimmer-58`                 `csText`   Ložnice              Kupé ve spacím    **LABOT**
                                                                                     voze              

        17 `c2-Schlittschuhkufe-59`                  `csText`   Sklon saní           Nůž brusle        **LABOT**

        18 `c2-selbstverständlich-61`                `csText`   Samovysvětlující     Samozřejmý        **LABOT**

        19 `c2-sicherheitshalber-62`                 `csText`   Pro bezpečnost       Pro jistotu       **LABOT**

        20 `c2-Straßenunterführung-67`               `csText`   Pěší tunel           Silniční podjezd  **LABOT**

        21 `c2-Sehenswürdigkeit-76`                  `csText`   Prominentní místo    Pamětihodnost     **LABOT**

        22 `c2-Abenteuergeschichte-77`               `csText`   Příběh aféry         Dobrodružný       **LABOT**
                                                                                     příběh            

        23 `c2-Abgeordnetenhaus-78`                  `csText`   Parlament            Poslanecká        **LABOT**
                                                                                     sněmovna          

        24 `c2-Baugenossenschaft-82`                 `csText`   Bytové družstvo      Stavební družstvo **LABOT**
                                                                družstvo                               

        25 `c2-Ausbildungsbeihilfe-84`               `csText`   Příspěvek na školné  Příspěvek na      **LABOT**
                                                                                     vzdělávání •      
                                                                                     Příspěvek na      
                                                                                     odbornou přípravu 

        26 `c2-Berichterstatter-86`                  `csText`   Reportér • Reportér  Zpravodaj •       **LABOT**
                                                                • Dopisovatel •      Referent •        
                                                                Reportér             Korespondent •    
                                                                                     Reportér          

        27 `c2-Berufsbezeichnung-87`                 `csText`   Pracovní název       Označení povolání **LABOT**

        28 `c2-Bevölkerungsdichte-90`                `csText`   Hustota obyvatel     Hustota           **LABOT**
                                                                                     obyvatelstva      

        29 `c2-Rauschgiftdezernat-99`                `csText`   Divize narkotik      Oddělení pro boj  **LABOT**
                                                                                     s narkotiky       

        30 `c2-Bereitschaftsdienst-101`              `csText`   Provozní služba      Pohotovostní      **LABOT**
                                                                                     služba            

        31 `c2-durchkreuzen-103`                     `csText`   Vyškrtnout •         Vyškrtnout •      **LABOT**
                                                                Překřížit •          Překřížit •       
                                                                Překřížit • Narušit  Překazit •        
                                                                                     Narušit           

        32 `c2-Empfehlungsschreiben-110`             `csText`   Písemné doporučení   Doporučující      **LABOT**
                                                                                     dopis             

        33 `c2-entgegengesetzt-112`                  `csText`   Opak                 Opačný            **LABOT**

        34 `c2-Entschlossenheit-113`                 `csText`   Jistota • Rozhodnost Rozhodnost •      **LABOT**
                                                                • Nezpochybnitelnost Odhodlanost       

        35 `c2-Entwicklungsland-114`                 `csText`   Země rozvoje         Rozvojová země    **LABOT**

        36 `c2-Errungenschaft-117`                   `csText`   Úspěch • Prospěch •  Úspěch •          **LABOT**
                                                                Zisk                 Výdobytek         

        37 `c2-Fallschirmspringen-119`               `csText`   Skydiving            Parašutismus •    **LABOT**
                                                                                     Seskok padákem    

        38 `c2-Gedächtnisstörung-127`                `csText`   Zhoršení paměti      Porucha paměti    **LABOT**

        39 `c2-Geistesgegenwart-131`                 `csText`   Vynalézavost         Duchapřítomnost   **LABOT**

        40 `c2-Dorfgemeinschaft-136`                 `csText`   Vesničané            Vesnické          **LABOT**
                                                                                     společenství •    
                                                                                     Vesnická komunita 

        41 `c2-Genossenschaft-140`                   `csText`   Družstevní • Artel   Družstvo • Artel  **LABOT**

        42 `c2-Gerechtigkeitsgefühl-141`             `csText`   Spravedlnost • Smysl Smysl pro         **LABOT**
                                                                pro spravedlnost     spravedlnost      

        43 `c2-Schiedsgericht-142`                   `csText`   Arbitráž             Rozhodčí soud •   **LABOT**
                                                                                     Arbitrážní soud   

        44 `c2-Geschäftsordnung-144`                 `csText`   Nařízení • Nařízení  Jednací řád       **LABOT**

        45 `c2-Geschwindigkeitskontrolle-147`        `csText`   Ovládání rychlosti   Kontrola          **LABOT**
                                                                                     rychlosti •       
                                                                                     Měření rychlosti  

        46 `c2-Geschwindigkeitsüberschreitung-149`   `csText`   Nedodržení           Překročení        **LABOT**
                                                                předepsané rychlosti rychlosti         
                                                                • Porušení                             

        47 `c2-gesellschaftlich-150`                 `csText`    • Veřejné           Společenský •     **LABOT**
                                                                společnosti          Sociální          

        48 `c2-Gesellschaftsordnung-151`             `csText`   Veřejné zařízení     Společenské       **LABOT**
                                                                                     uspořádání •      
                                                                                     Společenský řád   

        49 `c2-Gesetzesvorlage-152`                  `csText`   Účtovat              Návrh zákona      **LABOT**

        50 `c2-Gewerkschaftsbeitrag-154`             `csText`   Členské poplatky     Odborový          **LABOT**
                                                                odborů               příspěvek •       
                                                                                     Členský příspěvek 
                                                                                     odborům           
  ----------------------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Pārskatītas finding kartītes: **50/50**
-   LABOT: **50**
-   NELABOT / FALSE_POSITIVE: **0**
-   Study findings: **0**
-   DE izmaiņas: **0**

## OWNER precizējumi

-   `c2-Baugenossenschaft-82`: OWNER variants **Stavební družstvo**,
    nevis audita `Bytové družstvo`; vācu `Baugenossenschaft` nav
    obligāti tikai mājokļu družstvo.
-   `c2-Fallschirmspringen-119`: **Parašutismus • Seskok padákem** ---
    saglabāta gan aktivitātes, gan konkrētas darbības nozīme.
-   `c2-Schlittschuhkufe-59`: **Nůž brusle** ir dabiskāks un precīzāks
    nekā `Bruslařský nůž`.
-   `c2-Geschwindigkeitskontrolle-147`: **Kontrola rychlosti • Měření
    rychlosti** aptver gan kontroli, gan praktisko ātruma mērīšanu.
-   `c2-Gewerkschaftsbeitrag-154`: **Odborový příspěvek • Členský
    příspěvek odborům** precizē gan īso, gan skaidro ekvivalentu.

------------------------------------------------------------------------

# CS--DE C2 OWNER Repair --- Group 02 FINAL (atlikušās 25 finding kartītes)

OWNER lingvistiskais review. DE = STRICT READ-ONLY. Cursor drīkst tikai
COPY-ONLY piemērot `LABOT` mappingus, ja faktiskā production vērtība
precīzi sakrīt ar `CURRENT`. Mismatch → SKIP. Nekādu citu izmaiņu.

  ------------------------------------------------------------------------------------------------------
         \# Card ID                            Field      CURRENT         NEW                Status
  --------- ---------------------------------- ---------- --------------- ------------------ -----------
         51 `c2-Gewinnauszahlung-156`          `csText`   Výplata výher v Výplata zisku      **LABOT**
                                                          loterii                            

         52 `c2-Gleichberechtigung-158`        `csText`   Rovnost         Rovnoprávnost      **LABOT**

         53 `c2-Hausgemeinschaft-161`          `csText`   Rodinní         Společenství       **LABOT**
                                                          příslušníci •   obyvatel domu      
                                                          Obyvatelé domu                     

         54 `c2-Koalitionspartner-167`         `csText`   Koaličním       Koaliční partner   **LABOT**
                                                          partnerem                          

         55 `c2-Lebenserhaltungstrieb-170`     `csText`   Pohon života    Pud zachování      **LABOT**
                                                                          života             

         56 `c2-Lebenshaltungskosten-171`      `csText`   Prostředky k    Životní náklady    **LABOT**
                                                          obživě •                           
                                                          Náklady                            

         57 `c2-Meisterschaftsspiel-177`       `csText`   Mistrovský      Mistrovský zápas   **LABOT**
                                                          závod                              

         58 `c2-menschenfreundlich-178`        `csText`   Humánní •       Humánní • Lidský   **LABOT**
                                                          Humánní                            

         59 `c2-Mutterschaftsurlaub-180`       `csText`   Mateřské        Mateřská dovolená  **LABOT**
                                                          dovolené                           

         60 `c2-Pflichtversicherung-184`       `csText`   Povinné ručení  Povinné pojištění  **LABOT**

         61 `c2-populärwissenschaftlich-186`   `csText`   Populární věda  Populárněvědecký   **LABOT**

         62 `c2-rechtsextremistisch-188`       `csText`   Pravicový       Pravicově          **LABOT**
                                                          extremista      extremistický      

         63 `c2-Satellitenübertragung-189`     `csText`   Satelitní       Satelitní přenos   **LABOT**
                                                          televizní                          
                                                          přenos                             

         64 `c2-Beschwerdeschrift-191`         `csText`   Stížnost        Písemná stížnost   **LABOT**

         65 `c2-Selbstverteidigung-195`        `csText`   Soubor          Sebeobrana         **LABOT**
                                                          sebeobranných                      
                                                          technik                            

         66 `c2-Staatsangehörigkeit-196`       `csText`   Státnosti       Státní příslušnost **LABOT**
                                                                          • Občanství        

         67 `c2-Steuererleichterung-197`       `csText`   Daňové výhody   Daňová úleva       **LABOT**

         68 `c2-Strafgesetzbuch-198`           `csText`   Jur trestní     Trestní zákoník    **LABOT**
                                                          zákoník                            

         69 `c2-Vaterschaftsklage-200`         `csText`   Žalobu o určení Žaloba o určení    **LABOT**
                                                          otcovství       otcovství          

         70 `c2-Verhütungsmittel-202`          `csText`   Antikoncepce    Antikoncepční      **LABOT**
                                                                          prostředek         

         71 `c2-zugrunde, zu Grunde-206`       `csText`   V podstatě      V základu • V      **LABOT**
                                                                          podstatě           

         72 `c2-zugunsten, zu Gunsten-207`     `csText`   Pro dobro • Pro Ve prospěch        **LABOT**
                                                          dobro                              

         73 `c2-instand-210`                   `csText`   V pořadí        V pořádku •        **LABOT**
                                                                          Provozuschopný     

         74 `c2-in Stand-211`                  `csText`   V pořadí        V pořádku • V      **LABOT**
                                                                          provozuschopném    
                                                                          stavu              

         75 `c2-Sachverständige-218`           `csText`   Zdatný •        Odborník • Znalec  **LABOT**
                                                          Odborník                           
  ------------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Atlikušās finding kartītes: **25/25**
-   LABOT: **25**
-   NELABOT / FALSE_POSITIVE: **0**
-   Study findings: **0**
-   DE izmaiņas: **0**
-   Ar šo **C2 OWNER review ir pabeigts: 75/75 finding kartītes**.

## OWNER precizējumi

-   `c2-Staatsangehörigkeit-196`: **Státní příslušnost • Občanství** ---
    abi ir dabiski ekvivalenti atkarībā no konteksta.
-   `c2-Steuererleichterung-197`: izvēlēts vienskaitlis **Daňová
    úleva**, lai atbilstu vācu vienskaitļa lemma formai.
-   `c2-instand-210`: **V pořádku • Provozuschopný** aptver gan
    pienācīgu, gan tehniski darba kārtībā esošu stāvokli.
-   `c2-in Stand-211`: **V pořádku • V provozuschopném stavu** saglabā
    frāzes konstrukciju.
-   `c2-Sachverständige-218`: **Odborník • Znalec** --- `Znalec` īpaši
    precīzi der juridiskā/eksperta kontekstā.
