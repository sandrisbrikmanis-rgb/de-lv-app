# ET--DE A1 --- MISSING STUDY OWNER DECISIONS --- OWNER ACCEPTED

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1\
**MAIN_BASE_SHA:** `8c82df0454dad44636830145e26e5b8e52aa4184`\
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-ba9e`\
**Findings:** **10/10 OWNER resolved**\
**OWNER result:** **LABOT 10 · NELABOT 0 · FALSE_POSITIVE 0 ·
NEEDS_SOURCE_REVIEW 0**

**DE = STRICT READ-ONLY.** Apply tikai pēc
`REPAIR_APPLY_SAFETY_STANDARD.md`.

Šis fails ir autoritatīvais OWNER mapping trūkstošajiem ET A1 Study
objektiem. ET teksts ir sagatavots estiski; LV teksts nav kopēts kā
production saturs.

## OWNER kopsavilkums

  ----------------------------------------------------------------------------------------------------------------------
  Audit ID     Card ID              DE            ET flashcard  Study ID               CURRENT    Severity   OWNER
                                                  lv                                                         STATUS
  ------------ -------------------- ------------- ------------- ---------------------- ---------- ---------- -----------
  ET-A1-0002   a1-Besuch-87         Besuch        külaskäik     a1-besuch              (nav Study HIGH       **LABOT**
                                                                                       objekta)              

  ET-A1-0003   a1-besuchen-89       besuchen      külastama •   a1-besuchen            (nav Study HIGH       **LABOT**
                                                  külla minema                         objekta)              

  ET-A1-0006   a1-Fußball-218       Fußball       jalgpall      a1-fussball-study      (nav Study HIGH       **LABOT**
                                                                                       objekta)              

  ET-A1-0007   a1-ganz-219          ganz          terve         a1-ganz-study          (nav Study HIGH       **LABOT**
                                                                                       objekta)              

  ET-A1-0008   a1-gefallen-225      gefallen      meeldima      a1-gefallen-study      (nav Study HIGH       **LABOT**
                                                                                       objekta)              

  ET-A1-0009   a1-Geschichte-233    Geschichte    lugu •        a1-geschichte-study    (nav Study HIGH       **LABOT**
                                                  ajalugu                              objekta)              

  ET-A1-0010   a1-Geschwister-234   Geschwister   õed-vennad    a1-geschwister-study   (nav Study HIGH       **LABOT**
                                                                                       objekta)              

  ET-A1-0011   a1-Großeltern-251    Großeltern    vanavanemad   a1-grosseltern-study   (nav Study HIGH       **LABOT**
                                                                                       objekta)              

  ET-A1-0012   a1-Hand-267          Hand          käsi (kämmal) a1-hand-study          (nav Study HIGH       **LABOT**
                                                                                       objekta)              

  ET-A1-0013   a1-hübsch-288        hübsch        nägus • kena  a1-huebsch             (nav Study HIGH       **LABOT**
                                                                                       objekta)              
  ----------------------------------------------------------------------------------------------------------------------

## ET-A1-0002 --- Besuch (`a1-besuch`)

**Card ID:** `a1-Besuch-87`\
**Field/path:** `a1-Besuch-87.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       külaskäik • külastus • visiit

  `explanation[0]`                    Põhitähendus: der Besuch tähendab
                                      külastust, külaskäiku või visiiti.

  `explanation[1]`                    Kui räägitakse kohast või
                                      üritusest, sobib eesti keeles
                                      tavaliselt külastus.

  `explanation[2]`                    Kui räägitakse inimese
                                      külastamisest, sobib sageli
                                      külaskäik või visiit.

  `explanation[3]`                    Mitmus on die Besuche.

  `examples[0].lv`                    Muuseumi külastus oli huvitav.

  `examples[1].lv`                    Aitäh külaskäigu eest.

  `examples[2].lv`                    Arst teeb visiidi.

  `comparison[0].meaning`             külastus • külaskäik • visiit

  `comparison[0].example ET daļa`     Aitäh külaskäigu eest.

  `comparison[1].meaning`             külastaja

  `comparison[1].example ET daļa`     Külastaja ootab väljas.

  `comparison[2].meaning`             külastama

  `comparison[2].example ET daļa`     Ma külastan oma vanavanemaid.

  `tip`                               Pea meeles: Besuch on külastus või
                                      visiit, Besucher aga inimene ehk
                                      külastaja.

  `important[0]`                      der Besuch ei tähenda ainult
                                      külaskäiku; see võib olla ka
                                      külastus või visiit.

  `important[1]`                      Mitmus: die Besuche.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0003 --- besuchen (`a1-besuchen`)

**Card ID:** `a1-besuchen-89`\
**Field/path:** `a1-besuchen-89.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       külastama • külla minema

  `explanation[0]`                    Põhitähendus: besuchen kasutatakse
                                      koha, ürituse või inimese
                                      külastamise kohta.

  `explanation[1]`                    Kohta, üritust või kursust eesti
                                      keeles tavaliselt külastatakse.

  `explanation[2]`                    Kui besuchen käib inimese kohta,
                                      võib eesti keeles loomulikult öelda
                                      külastama või külla minema.

  `explanation[3]`                    Saksa keeles kasutatakse besuchen
                                      ilma eessõnata ja akusatiiviga.

  `examples[0].lv`                    Ma külastan muuseumi.

  `examples[1].lv`                    Me käime saksa keele kursusel.

  `examples[2].lv`                    Ma külastan oma vanavanemaid.

  `comparison[0].meaning`             külastama kohta või üritust •
                                      külastama inimest

  `comparison[0].example ET daļa`     Ma külastan oma vanavanemaid.

  `comparison[1].meaning`             kohtuma

  `comparison[1].example ET daļa`     Ma kohtun oma sõbraga.

  `comparison[2].meaning`             kellegi juurde minema

  `comparison[2].example ET daļa`     Ma lähen oma sõbra juurde.

  `tip`                               Pea meeles: kohta või üritust
                                      külastatakse; inimese puhul võib
                                      öelda ka kellegi juurde külla
                                      minema.

  `important[0]`                      besuchen kasutatakse ilma
                                      eessõnata: Ich besuche meine
                                      Freundin.

  `important[1]`                      Eestikeelne vaste sõltub objektist:
                                      külastama kohta, külastama inimest
                                      või külla minema.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0006 --- Fußball (`a1-fussball-study`)

**Card ID:** `a1-Fußball-218`\
**Field/path:** `a1-Fußball-218.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       jalgpall

  `explanation[0]`                    Põhitähendus: Fußball tähendab
                                      enamasti jalgpalli kui spordiala.

  `explanation[1]`                    Artikliga ja loendatavas tähenduses
                                      võib der Fußball tähendada ka
                                      jalgpalli ehk palli.

  `explanation[2]`                    Mitmus die Fußbälle tähendab
                                      jalgpalle ehk palle, mitte mitut
                                      spordiala.

  `examples[0].lv`                    Ma mängin jalgpalli.

  `examples[1].lv`                    Jalgpall on aias.

  `examples[2].lv`                    Me ostame kaks jalgpalli.

  `comparison[0].meaning`             jalgpall kui spordiala

  `comparison[0].example ET daļa`     Ma mängin jalgpalli.

  `comparison[1].meaning`             jalgpall ehk pall

  `comparison[1].example ET daļa`     Jalgpall on uus.

  `tip`                               Ilma artiklita spielen Fußball
                                      tähendab tavaliselt jalgpalli
                                      mängima. Loendatavas tähenduses on
                                      ein Fußball üks jalgpall ja die
                                      Fußbälle jalgpallid.

  `important[0]`                      die Fußbälle tähendab jalgpalle ehk
                                      palle.

  `important[1]`                      Spordiala Fußball kasutatakse
                                      tavaliselt ainsuses.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0007 --- ganz (`a1-ganz-study`)

**Card ID:** `a1-ganz-219`\
**Field/path:** `a1-ganz-219.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       terve • kogu • täiesti

  `explanation[0]`                    Põhitähendus: ganz koos nimisõnaga
                                      tähendab tervet või kogu midagi.

  `explanation[1]`                    Omadus- või määrsõna ees võib ganz
                                      tähendada täiesti, päris või üsna.

  `explanation[2]`                    ganz ei ole sama mis asesõna alles.

  `examples[0].lv`                    Ma töötan terve päeva.

  `examples[1].lv`                    Kogu maja on puhas.

  `examples[2].lv`                    See on täiesti kindel.

  `examples[3].lv`                    Toit on päris hea.

  `comparison[0].meaning`             terve • kogu • täiesti

  `comparison[0].example ET daļa`     terve päev

  `comparison[1].meaning`             kõik

  `comparison[1].example ET daļa`     Kõik on korras.

  `tip`                               Nimisõna ees tähendab ganz sageli
                                      terve või kogu. Omadussõna ees
                                      tähendab see sageli täiesti, päris
                                      või üsna.

  `important[0]`                      der ganze Tag = terve päev.

  `important[1]`                      alles = kõik asesõnana.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0008 --- gefallen (`a1-gefallen-study`)

**Card ID:** `a1-gefallen-225`\
**Field/path:** `a1-gefallen-225.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       meeldima

  `explanation[0]`                    Põhitähendus: gefallen tähendab
                                      meeldima, kuid saksa lauseehitus
                                      erineb eesti keelest.

  `explanation[1]`                    Asi, mis meeldib, on saksa keeles
                                      lause alus.

  `explanation[2]`                    Isik, kellele miski meeldib, on
                                      daativis: mir, dir, ihm, ihr, uns,
                                      euch, ihnen.

  `examples[0].lv`                    See meeldib mulle.

  `examples[1].lv`                    Kas see kleit meeldib sulle?

  `examples[2].lv`                    See film meeldib meile.

  `comparison[0].meaning`             meeldima • isik daativis

  `comparison[0].example ET daļa`     See meeldib mulle.

  `comparison[1].meaning`             meeldima • midagi hea meelega
                                      tahtma või eelistama

  `comparison[1].example ET daļa`     See meeldib mulle.

  `tip`                               Pea meeles konstruktsiooni: Das
                                      gefällt mir. Ära tõlgi saksa
                                      sõnajärge eesti keelde sõna-sõnalt.

  `important[0]`                      gefallen kasutatakse daativiga:
                                      mir, dir, ihm, ihr.

  `important[1]`                      Das gefällt mir = see meeldib
                                      mulle.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0009 --- Geschichte (`a1-geschichte-study`)

**Card ID:** `a1-Geschichte-233`\
**Field/path:** `a1-Geschichte-233.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       lugu • ajalugu

  `explanation[0]`                    Põhitähendus: Geschichte võib
                                      tähendada lugu või ajalugu.

  `explanation[1]`                    Mitmus die Geschichten tähendab
                                      tavaliselt lugusid.

  `explanation[2]`                    Ajaloo tähenduses kasutatakse sõna
                                      Geschichte tavaliselt ainsuses.

  `examples[0].lv`                    Ta jutustab ühe loo.

  `examples[1].lv`                    Ma õpin ajalugu.

  `examples[2].lv`                    See on Saksamaa ajalugu.

  `comparison[0].meaning`             lugu

  `comparison[0].example ET daļa`     huvitav lugu

  `comparison[1].meaning`             ajalugu

  `comparison[1].example ET daļa`     ajalugu õppima

  `tip`                               Artikliga eine ja mitmuses tähendab
                                      Geschichte tavaliselt lugu.
                                      Õppeainena tähendab Geschichte
                                      ajalugu.

  `important[0]`                      die Geschichten = lood.

  `important[1]`                      Geschichte ajaloo tähenduses on
                                      tavaliselt ainsuses.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0010 --- Geschwister (`a1-geschwister-study`)

**Card ID:** `a1-Geschwister-234`\
**Field/path:** `a1-Geschwister-234.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       õed-vennad

  `explanation[0]`                    Põhitähendus: Geschwister tähendab
                                      vendi ja õdesid koos.

  `explanation[1]`                    Seda sõna kasutatakse tavaliselt
                                      ainult mitmuses.

  `explanation[2]`                    Ühe inimese kohta kasutatakse
                                      Bruder või Schwester.

  `examples[0].lv`                    Mul on kaks õde-venda.

  `examples[1].lv`                    Minu õed-vennad elavad Berliinis.

  `comparison[0].meaning`             õed-vennad

  `comparison[0].example ET daļa`     minu õed-vennad

  `comparison[1].meaning`             vend

  `comparison[1].example ET daļa`     minu vend

  `comparison[2].meaning`             õde

  `comparison[2].example ET daļa`     minu õde

  `tip`                               Geschwister kasutatakse tavaliselt
                                      mitmuses. Ühe inimese puhul vali
                                      Bruder või Schwester.

  `important[0]`                      Ära kasuta A1-tasemel ein
                                      Geschwister tavalise
                                      ainsusevormina.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0011 --- Großeltern (`a1-grosseltern-study`)

**Card ID:** `a1-Großeltern-251`\
**Field/path:** `a1-Großeltern-251.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       vanavanemad

  `explanation[0]`                    Põhitähendus: Großeltern tähendab
                                      vanaema ja vanaisa ehk
                                      vanavanemaid.

  `explanation[1]`                    Seda sõna kasutatakse tavaliselt
                                      mitmuses.

  `explanation[2]`                    Ühe vanavanema kohta kasutatakse
                                      Großmutter või Großvater.

  `examples[0].lv`                    Minu vanavanemad elavad maal.

  `examples[1].lv`                    Ma külastan oma vanavanemaid.

  `comparison[0].meaning`             vanavanemad

  `comparison[0].example ET daļa`     minu vanavanemad

  `comparison[1].meaning`             vanaema

  `comparison[1].example ET daļa`     minu vanaema

  `comparison[2].meaning`             vanaisa

  `comparison[2].example ET daļa`     minu vanaisa

  `tip`                               Großeltern tähendab vanavanemaid
                                      koos. Ühe inimese puhul kasuta
                                      Großmutter või Großvater.

  `important[0]`                      Großeltern on mitmusevorm;
                                      tavaliselt ei kasutata seda ühe
                                      vanavanema kohta.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0012 --- Hand (`a1-hand-study`)

**Card ID:** `a1-Hand-267`\
**Field/path:** `a1-Hand-267.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       käsi (kämmal)

  `explanation[0]`                    Põhitähendus: die Hand tähendab
                                      kätt randmest sõrmedeni.

  `explanation[1]`                    der Arm tähendab käsivart või kogu
                                      kätt õlast randmeni.

  `explanation[2]`                    Mitmus on die Hände.

  `examples[0].lv`                    Ma pesen käsi.

  `examples[1].lv`                    Ta hoiab klaasi käes.

  `examples[2].lv`                    Mu käsivars valutab.

  `comparison[0].meaning`             käsi • kämmal

  `comparison[0].example ET daļa`     Ta hoiab klaasi käes.

  `comparison[1].meaning`             käsivars

  `comparison[1].example ET daļa`     Mu käsivars valutab.

  `tip`                               Pea meeles: Hand on käsi randmest
                                      sõrmedeni, Arm on käsivars.

  `important[0]`                      Mitmus: die Hände.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## ET-A1-0013 --- hübsch (`a1-huebsch`)

**Card ID:** `a1-hübsch-288`\
**Field/path:** `a1-hübsch-288.study` (viss objekts)\
**CURRENT:** `(nav Study objekta)`\
**OWNER STATUS:** **LABOT**

  -----------------------------------------------------------------------
  Lauks                               OWNER ET teksts
  ----------------------------------- -----------------------------------
  `translation`                       kena • nägus

  `explanation[0]`                    Põhitähendus: hübsch tähendab kena,
                                      nägusat või meeldiva välimusega.

  `explanation[1]`                    Seda kasutatakse inimeste, riiete,
                                      ruumide ja esemete välimuse
                                      kirjeldamiseks.

  `explanation[2]`                    schön on üldisem sõna ja võib
                                      tähendada ilusat või meeldivat
                                      palju laiemas tähenduses.

  `explanation[3]`                    nett tähendab eelkõige lahket või
                                      meeldivat ning ei ole sama mis
                                      hübsch.

  `examples[0].lv`                    Tal on seljas kena kleit.

  `examples[1].lv`                    Tuba on kena.

  `examples[2].lv`                    See on kena pilt.

  `comparison[0].meaning`             kena • nägus

  `comparison[0].example ET daļa`     kena kleit

  `comparison[1].meaning`             ilus • kaunis

  `comparison[1].example ET daļa`     ilus päev

  `comparison[2].meaning`             lahke • meeldiv

  `comparison[2].example ET daļa`     Ta on väga lahke.

  `tip`                               Pea meeles: hübsch kirjeldab sageli
                                      välimust; nett kirjeldab tavaliselt
                                      inimese meeldivat või lahket
                                      olemust.

  `important[0]`                      hübsch ei tähenda sama mis nett.

  `important[1]`                      schön on tähenduselt laiem kui
                                      hübsch.
  -----------------------------------------------------------------------

**Apply note:** saglabāt LV MASTER Study struktūru un visus DE laukus
precīzi; aizvietot tikai native-language saturu ar augstāk apstiprināto
ET tekstu. `sectionAccents` sinhronizēt ar faktisko ET tekstu; tajos
nedrīkst palikt LV fragmenti.

## APPLY GATE

-   Apply drīkst izmantot tikai šī faila **LABOT** lēmumus.
-   `Card ID`, `Field/path`, `CURRENT` un OWNER ET teksts ir
    autoritatīvi.
-   Ja actual current value vairs nav `(nav Study objekta)`, attiecīgo
    objektu **SKIP / CURRENT_VALUE_MISMATCH** un neimprovizēt.
-   **DE = STRICT READ-ONLY.**
-   Nekādu blakus kartīšu, cleanup, pārfrāzēšanas vai papildu
    tulkošanas.
-   Pēc apply obligāti: **10/10 Study present**, OWNER exact-match
    verifikācija, DE diff = 0, unexpected diff = 0, syntax/structure
    PASS, `sectionAccents` stale/LV remnants = 0, targeted regression
    PASS.
