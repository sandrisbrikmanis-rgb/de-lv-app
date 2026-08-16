# DA--DE B2 --- OWNER decisions --- 01

**Auditors:** GPT-5.6 Luna (READ-ONLY)\
**Avots:** `reports/da-b2-owner-review-01.md`\
**Findings:** **165--345** (19 ieraksti)

**DE = STRICT READ-ONLY.**

  ---------------------------------------------------------------------------------------------------------------
         Finding Card ID            Field                           CURRENT_DA       OWNER NEW        Statuss
  -------------- ------------------ ------------------------------- ---------------- ---------------- -----------
             165 `b2-sich-fassen`   `lv`                            At gribe • At    At tage sig      LABOT
                                                                    modtage • At     sammen • At      
                                                                    tilbageholde     fatte sig        

             223 `b2-hochwasser`    `study.comparison[0].example`   Es gibt          Es gibt          LABOT
                                                                    Hochwasser. = Ir Hochwasser. =    
                                                                    plūdi.           Der er           
                                                                                     oversvømmelse.   

             224 `b2-hochwasser`    `study.comparison[1].example`   Die              Die              LABOT
                                                                    Überschwemmung   Überschwemmung   
                                                                    zerstörte        zerstörte        
                                                                    Häuser. = Plūdi  Häuser. =        
                                                                    izpostīja mājas. Oversvømmelsen   
                                                                                     ødelagde huse.   

             225 `b2-hochwasser`    `study.comparison[2].example`   Der Pegel        Der Pegel        LABOT
                                                                    steigt. = Ūdens  steigt. =        
                                                                    līmenis ceļas.   Vandstanden      
                                                                                     stiger.          

             237 `b2-nachdruck`     `study.comparison[0].example`   Er legt          Er legt          LABOT
                                                                    Nachdruck auf    Nachdruck auf    
                                                                    die Frist. =     die Frist. = Han 
                                                                    Viņš uzsver      lægger vægt på   
                                                                    termiņu.         fristen.         

             238 `b2-nachdruck`     `study.comparison[1].example`   Der Nachdruck    Der Nachdruck    LABOT
                                                                    erschien im      erschien im      
                                                                    Frühjahr. =      Frühjahr. =      
                                                                    Atkārtotais      Genoptrykket     
                                                                    izdevums iznāca  udkom i foråret. 
                                                                    pavasarī.                         

             239 `b2-nachdruck`     `study.comparison[2].example`   Unter Druck      Unter Druck      LABOT
                                                                    stehen = būt     stehen = at være 
                                                                    spiedienā.       under pres.      

             334 `b2-zuweisen`      `study.comparison[0].example`   Er weist die     Er weist die     LABOT
                                                                    Aufgabe zu. =    Aufgabe zu. =    
                                                                    Viņš piešķir     Han tildeler     
                                                                    uzdevumu.        opgaven.         

             335 `b2-zuweisen`      `study.comparison[1].example`   Er gibt mir die  Er gibt mir die  LABOT
                                                                    Arbeit. = Viņš   Arbeit. = Han    
                                                                    man dod darbu.   giver mig        
                                                                                     arbejdet.        

             336 `b2-zuweisen`      `study.comparison[2].example`   Er verteilt die  Er verteilt die  LABOT
                                                                    Aufgaben. = Viņš Aufgaben. = Han  
                                                                    sadala           fordeler         
                                                                    uzdevumus.       opgaverne.       

             337 `b2-zuwider`       `lv`                            Mod • Modsat •   Imod •           LABOT
                                                                    Kan ikke lide    Modbydelig       

             338 `b2-zuwider`       `study.comparison[1].example`   Es ist mir       Es ist mir       LABOT
                                                                    zuwider. = Man   zuwider. = Det   
                                                                    tas nepatīk.     er mig imod.     

             339 `b2-bieten`        `study.explanation[1]`          Bieten betyder   Bieten betyder   LABOT
                                                                    hovedsageligt:   hovedsageligt:   
                                                                    ​​at give mulighed at give mulighed 
                                                                    / fordel.        / fordel.        

             340 `b2-bieten`        `study.explanation[3]`          Bieten betyder   Bieten betyder   LABOT
                                                                    hovedsageligt:   hovedsageligt:   
                                                                    ​​at give en       at give en       
                                                                    mulighed.        mulighed.        

             341 `b2-anbieten`      `study.comparison[0].example`   Ich biete Hilfe  Ich biete Hilfe  LABOT
                                                                    an. = Es         an. = Jeg        
                                                                    piedāvāju        tilbyder hjælp.  
                                                                    palīdzību.                        

             342 `b2-anbieten`      `study.comparison[1].example`   Er bietet viel   Er bietet viel   LABOT
                                                                    Geld. = Viņš     Geld. = Han      
                                                                    piedāvā daudz    tilbyder mange   
                                                                    naudas.          penge.           

             343 `b2-fordern`       `study.explanation[1]`          Fordern betyder  Fordern betyder  LABOT
                                                                    hovedsageligt:   hovedsageligt:   
                                                                    ​​at kræve / at    at kræve /       
                                                                    kræve.           forlange.        

             344 `b2-fordern`       `study.explanation[3]`          Fordern betyder  Fordern betyder  LABOT
                                                                    hovedsageligt:   hovedsageligt:   
                                                                    ​​at kræve en      at kræve en      
                                                                    standard.        standard.        

             345 `b2-foerdern`      `study.explanation[5]`          Fordern betyder  Fördern betyder  LABOT
                                                                    hovedsageligt:   hovedsageligt:   
                                                                    ​​udvikle talent.  at udvikle       
                                                                                     talent.          
  ---------------------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Pārskatīti: **19/19**
-   LABOT: **19**
-   FALSE_POSITIVE: **0**
-   NELABOT: **0**
-   NEEDS_SOURCE_REVIEW: **0**
-   DE izmaiņas: **0**

## OWNER piezīmes

-   Finding **165**: audita `PROPOSED_DA` netiek pieņemts. `sich fassen`
    nozīmei izmantots **At tage sig sammen • At fatte sig**.
-   Finding **338**: audita variants `Jeg har det nepatīk` nav korekta
    dāņu valoda.
-   Findings **334** un **341**: OWNER variants saglabā DE teikuma
    precīzo saturu, nepievienojot jaunu informāciju.
-   Finding **345**: `Fordern` labots uz **Fördern**, atbilstoši
    kartītes vācu lemmai `fördern`.
