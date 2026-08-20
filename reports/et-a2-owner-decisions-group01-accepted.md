# ET--DE A2 --- OWNER DECISIONS ACCEPTED (grupa 01, 1--50)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8\
**Audit PR:** `#610`\
**OWNER review:** ChatGPT / OWNER-prep\
**DE:** STRICT READ-ONLY\
**Apply rule:** COPY-ONLY tikai `OWNER STATUS = LABOT` ar precīzu
`CURRENT` → `OWNER_DECISION`.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Audit ID     Card ID          Field                                        CURRENT           NEW               Severity   Category          OWNER STATUS              OWNER_DECISION    Piezīme
  ------------ ---------------- -------------------------------------------- ----------------- ----------------- ---------- ----------------- ------------------------- ----------------- ---------------------
  ET-A2-0001   STRUCT           study.count                                  232                                 CRITICAL   STRUCTURE         **NEEDS_SOURCE_REVIEW**                     ET Study 232 vs LV
                                                                                                                                                                                          MASTER 231. Pirms
                                                                                                                                                                                          dzēšanas jāidentificē
                                                                                                                                                                                          konkrētais
                                                                                                                                                                                          liekais/trūkstošais
                                                                                                                                                                                          Study objekts; count
                                                                                                                                                                                          vien nepierāda, kuru
                                                                                                                                                                                          objektu mainīt.

  ET-A2-0002   a2-abfahren      entry\[2\].study.comparison\[1\].example     Ich fahre morgen  Ich fahre morgen  HIGH       FOREIGN_REMNANT   **LABOT**                 Ich fahre morgen  LV/atlikušās valodas
                                                                             weg. = Es rīt     weg. = Ma sõidan                                                         weg. = Ma sõidan  fragments aizstāts ar
                                                                             aizbraucu prom.   homme ära.                                                               homme ära.        dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0003   a2-abfahren      entry\[2\].study.comparison\[2\].example     Wir fahren jetzt  Wir fahren jetzt  HIGH       FOREIGN_REMNANT   **LABOT**                 Wir fahren jetzt  LV/atlikušās valodas
                                                                             los. = Mēs tagad  los. = Me asume                                                          los. = Me asume   fragments aizstāts ar
                                                                             sākam braukt.     nüüd teele.                                                              nüüd teele.       dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0004   a2-abfahren      entry\[2\].study.comparison\[3\].example     Der Bus geht      Der Bus geht      HIGH       FOREIGN_REMNANT   **LABOT**                 Der Bus geht      LV/atlikušās valodas
                                                                             gleich ab. =      gleich ab. = Buss                                                        gleich ab. = Buss fragments aizstāts ar
                                                                             Autobuss tūlīt    väljub kohe.                                                             väljub kohe.      dabisku ET; DE daļa
                                                                             atiet.                                                                                                       saglabāta nemainīta.

  ET-A2-0005   a2-abgeben       entry\[5\].study.comparison\[1\].example     Ich gebe dir den  Ich gebe dir den  HIGH       FOREIGN_REMNANT   **LABOT**                 Ich gebe dir den  LV/atlikušās valodas
                                                                             Schlüssel. = Es   Schlüssel. = Ma                                                          Schlüssel. = Ma   fragments aizstāts ar
                                                                             tev dodu atslēgu. annan sulle                                                              annan sulle       dabisku ET; DE daļa
                                                                                               võtme.                                                                   võtme.            saglabāta nemainīta.

  ET-A2-0006   a2-abgeben       entry\[5\].study.comparison\[2\].example     Ich gebe das Buch Ich gebe das Buch HIGH       FOREIGN_REMNANT   **LABOT**                 Ich gebe das Buch LV/atlikušās valodas
                                                                             zurück. = Es      zurück. = Ma                                                             zurück. = Ma      fragments aizstāts ar
                                                                             atdodu grāmatu    annan raamatu                                                            annan raamatu     dabisku ET; DE daļa
                                                                             atpakaļ.          tagasi.                                                                  tagasi.           saglabāta nemainīta.

  ET-A2-0007   a2-abgeben       entry\[5\].study.comparison\[4\].example     Ich verkaufe mein Ich verkaufe mein HIGH       FOREIGN_REMNANT   **LABOT**                 Ich verkaufe mein LV/atlikušās valodas
                                                                             Fahrrad. = Es     Fahrrad. = Ma                                                            Fahrrad. = Ma     fragments aizstāts ar
                                                                             pārdodu savu      müün oma                                                                 müün oma          dabisku ET; DE daļa
                                                                             velosipēdu.       jalgratta.                                                               jalgratta.        saglabāta nemainīta.

  ET-A2-0008   a2-absagen       entry\[11\].study.comparison\[0\].example    Ich sage den      Ich sage den      HIGH       FOREIGN_REMNANT   **LABOT**                 Ich sage den      LV/atlikušās valodas
                                                                             Termin ab. = Es   Termin ab. = Ma                                                          Termin ab. = Ma   fragments aizstāts ar
                                                                             atceļu tikšanos.  tühistan                                                                 tühistan          dabisku ET; DE daļa
                                                                                               kohtumise.                                                               kohtumise.        saglabāta nemainīta.

  ET-A2-0009   a2-absagen       entry\[11\].study.comparison\[1\].example    Ich lehne das     Ich lehne das     HIGH       FOREIGN_REMNANT   **LABOT**                 Ich lehne das     LV/atlikušās valodas
                                                                             Angebot ab. = Es  Angebot ab. = Ma                                                         Angebot ab. = Ma  fragments aizstāts ar
                                                                             noraidu           lükkan pakkumise                                                         lükkan pakkumise  dabisku ET; DE daļa
                                                                             piedāvājumu.      tagasi.                                                                  tagasi.           saglabāta nemainīta.

  ET-A2-0010   a2-absagen       entry\[11\].study.comparison\[2\].example    Ich kündige den   Ich kündige den   HIGH       FOREIGN_REMNANT   **LABOT**                 Ich kündige den   LV/atlikušās valodas
                                                                             Vertrag. = Es     Vertrag. = Ma                                                            Vertrag. = Ma     fragments aizstāts ar
                                                                             uzteicu līgumu.   ütlen lepingu                                                            ütlen lepingu     dabisku ET; DE daļa
                                                                                               üles.                                                                    üles.             saglabāta nemainīta.

  ET-A2-0011   a2-absagen       entry\[11\].study.comparison\[3\].example    Ich storniere die Ich storniere die HIGH       FOREIGN_REMNANT   **LABOT**                 Ich storniere die LV/atlikušās valodas
                                                                             Buchung. = Es     Buchung. = Ma                                                            Buchung. = Ma     fragments aizstāts ar
                                                                             atceļu            tühistan                                                                 tühistan          dabisku ET; DE daļa
                                                                             rezervāciju.      broneeringu.                                                             broneeringu.      saglabāta nemainīta.

  ET-A2-0012   a2-absagen       entry\[11\].study.comparison\[4\].example    Er sagt nein. =   Er sagt nein. =   HIGH       FOREIGN_REMNANT   **LABOT**                 Er sagt nein. =   LV/atlikušās valodas
                                                                             Viņš saka nē.     Ta ütleb ei.                                                             Ta ütleb ei.      fragments aizstāts ar
                                                                                                                                                                                          dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0013   a2-abschließen   entry\[13\].study.comparison\[0\].example    Ich schließe die  Ich schließe die  HIGH       FOREIGN_REMNANT   **LABOT**                 Ich schließe die  LV/atlikušās valodas
                                                                             Tür ab. = Es      Tür ab. = Ma                                                             Tür ab. = Ma      fragments aizstāts ar
                                                                             aizslēdzu durvis. lukustan ukse.                                                           lukustan ukse.    dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0014   a2-abschließen   entry\[13\].study.comparison\[3\].example    Ich unterschreibe Ich unterschreibe HIGH       FOREIGN_REMNANT   **LABOT**                 Ich unterschreibe LV/atlikušās valodas
                                                                             den Vertrag. = Es den Vertrag. = Ma                                                        den Vertrag. = Ma fragments aizstāts ar
                                                                             parakstu līgumu.  allkirjastan                                                             allkirjastan      dabisku ET; DE daļa
                                                                                               lepingu.                                                                 lepingu.          saglabāta nemainīta.

  ET-A2-0015   a2-abstellen     entry\[16\].study.comparison\[0\].example    Ich stelle das    Ich stelle das    HIGH       FOREIGN_REMNANT   **LABOT**                 Ich stelle das    LV/atlikušās valodas
                                                                             Fahrrad ab. = Es  Fahrrad ab. = Ma                                                         Fahrrad ab. = Ma  fragments aizstāts ar
                                                                             novietoju         panen jalgratta                                                          panen jalgratta   dabisku ET; DE daļa
                                                                             velosipēdu.       ära.                                                                     ära.              saglabāta nemainīta.

  ET-A2-0016   a2-abstellen     entry\[16\].study.comparison\[1\].example    Ich schalte den   Ich schalte den   HIGH       FOREIGN_REMNANT   **LABOT**                 Ich schalte den   LV/atlikušās valodas
                                                                             Computer aus. =   Computer aus. =                                                          Computer aus. =   fragments aizstāts ar
                                                                             Es izslēdzu       Ma lülitan arvuti                                                        Ma lülitan arvuti dabisku ET; DE daļa
                                                                             datoru.           välja.                                                                   välja.            saglabāta nemainīta.

  ET-A2-0017   a2-abstellen     entry\[16\].study.comparison\[2\].example    Der Bus hält an.  Der Bus hält an.  HIGH       FOREIGN_REMNANT   **LABOT**                 Der Bus hält an.  LV/atlikušās valodas
                                                                             = Autobuss        = Buss peatub.                                                           = Buss peatub.    fragments aizstāts ar
                                                                             apstājas.                                                                                                    dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0018   a2-abstellen     entry\[16\].study.comparison\[3\].example    Der Fahrer stoppt Der Fahrer stoppt HIGH       FOREIGN_REMNANT   **LABOT**                 Der Fahrer stoppt LV/atlikušās valodas
                                                                             das Auto. =       das Auto. = Juht                                                         das Auto. = Juht  fragments aizstāts ar
                                                                             Vadītājs aptur    peatab auto.                                                             peatab auto.      dabisku ET; DE daļa
                                                                             auto.                                                                                                        saglabāta nemainīta.

  ET-A2-0019   a2-abstellen     entry\[16\].study.comparison\[4\].example    Ich stelle die    Ich stelle die    HIGH       FOREIGN_REMNANT   **LABOT**                 Ich stelle die    LV/atlikušās valodas
                                                                             Tasche neben die  Tasche neben die                                                         Tasche neben die  fragments aizstāts ar
                                                                             Tür. = Es nolieku Tür. = Ma panen                                                          Tür. = Ma panen   dabisku ET; DE daļa
                                                                             somu pie durvīm.  koti ukse                                                                koti ukse         saglabāta nemainīta.
                                                                                               kõrvale.                                                                 kõrvale.          

  ET-A2-0020   a2-angewandt     entry\[41\].study.comparison\[0\].example    Diese Methode     Diese Methode     HIGH       FOREIGN_REMNANT   **LABOT**                 Diese Methode     LV/atlikušās valodas
                                                                             wird angewandt. = wird angewandt. =                                                        wird angewandt. = fragments aizstāts ar
                                                                             Šī metode tiek    Seda meetodit                                                            Seda meetodit     dabisku ET; DE daļa
                                                                             pielietota.       rakendatakse.                                                            rakendatakse.     saglabāta nemainīta.

  ET-A2-0021   a2-angewandt     entry\[41\].study.comparison\[1\].example    Das ist eine      Das ist eine      HIGH       FOREIGN_REMNANT   **LABOT**                 Das ist eine      LV/atlikušās valodas
                                                                             praktische        praktische                                                               praktische        fragments aizstāts ar
                                                                             Lösung. = Tas ir  Lösung. = See on                                                         Lösung. = See on  dabisku ET; DE daļa
                                                                             praktisks         praktiline                                                               praktiline        saglabāta nemainīta.
                                                                             risinājums.       lahendus.                                                                lahendus.         

  ET-A2-0022   a2-angreifen     entry\[42\].study.comparison\[0\].example    Der Hund greift   Der Hund greift   HIGH       FOREIGN_REMNANT   **LABOT**                 Der Hund greift   LV/atlikušās valodas
                                                                             an. = Suns        an. = Koer                                                               an. = Koer        fragments aizstāts ar
                                                                             uzbrūk.           ründab.                                                                  ründab.           dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0023   a2-angreifen     entry\[42\].study.comparison\[1\].example    Die Gruppe        Die Gruppe        HIGH       FOREIGN_REMNANT   **LABOT**                 Die Gruppe        LV/atlikušās valodas
                                                                             attackiert ihn. = attackiert ihn. =                                                        attackiert ihn. = fragments aizstāts ar
                                                                             Grupa viņam       Rühm ründab teda.                                                        Rühm ründab teda. dabisku ET; DE daļa
                                                                             uzbrūk.                                                                                                      saglabāta nemainīta.

  ET-A2-0024   a2-angreifen     entry\[42\].study.comparison\[2\].example    Er beleidigt      Er beleidigt      HIGH       FOREIGN_REMNANT   **LABOT**                 Er beleidigt      LV/atlikušās valodas
                                                                             mich. = Viņš mani mich. = Ta solvab                                                        mich. = Ta solvab fragments aizstāts ar
                                                                             apvaino.          mind.                                                                    mind.             dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0025   a2-angreifen     entry\[42\].study.comparison\[3\].example    Sie kritisiert    Sie kritisiert    HIGH       FOREIGN_REMNANT   **LABOT**                 Sie kritisiert    LV/atlikušās valodas
                                                                             den Vorschlag. =  den Vorschlag. =                                                         den Vorschlag. =  fragments aizstāts ar
                                                                             Viņa kritizē      Ta kritiseerib                                                           Ta kritiseerib    dabisku ET; DE daļa
                                                                             priekšlikumu.     ettepanekut.                                                             ettepanekut.      saglabāta nemainīta.

  ET-A2-0026   a2-anhänger      entry\[44\].study.comparison\[1\].example    Er ist ein Fan    Er ist ein Fan    HIGH       FOREIGN_REMNANT   **LABOT**                 Er ist ein Fan    LV/atlikušās valodas
                                                                             der Mannschaft. = der Mannschaft. =                                                        der Mannschaft. = fragments aizstāts ar
                                                                             Viņš ir komandas  Ta on meeskonna                                                          Ta on meeskonna   dabisku ET; DE daļa
                                                                             fans.             fänn.                                                                    fänn.             saglabāta nemainīta.

  ET-A2-0027   a2-anhänger      entry\[44\].study.comparison\[2\].example    Sie hat viele     Sie hat viele     HIGH       FOREIGN_REMNANT   **LABOT**                 Sie hat viele     LV/atlikušās valodas
                                                                             Unterstützer. =   Unterstützer. =                                                          Unterstützer. =   fragments aizstāts ar
                                                                             Viņai ir daudz    Tal on palju                                                             Tal on palju      dabisku ET; DE daļa
                                                                             atbalstītāju.     toetajaid.                                                               toetajaid.        saglabāta nemainīta.

  ET-A2-0028   a2-anhänger      entry\[44\].study.comparison\[3\].example    Der Wohnwagen     Der Wohnwagen     HIGH       FOREIGN_REMNANT   **LABOT**                 Der Wohnwagen     LV/atlikušās valodas
                                                                             steht am See. =   steht am See. =                                                          steht am See. =   fragments aizstāts ar
                                                                             Dzīvojamā piekabe Haagissuvila                                                             Haagissuvila      dabisku ET; DE daļa
                                                                             stāv pie ezera.   seisab järve                                                             seisab järve      saglabāta nemainīta.
                                                                                               ääres.                                                                   ääres.            

  ET-A2-0029   a2-anheizen      entry\[45\].study.comparison\[0\].example    Ich heize den     Ich heize den     HIGH       FOREIGN_REMNANT   **LABOT**                 Ich heize den     LV/atlikušās valodas
                                                                             Ofen an. = Es     Ofen an. = Ma                                                            Ofen an. = Ma     fragments aizstāts ar
                                                                             iekuru krāsni.    panen ahju                                                               panen ahju        dabisku ET; DE daļa
                                                                                               küdema.                                                                  küdema.           saglabāta nemainīta.

  ET-A2-0030   a2-anheizen      entry\[45\].study.comparison\[1\].example    Wir heizen die    Wir heizen die    HIGH       FOREIGN_REMNANT   **LABOT**                 Wir heizen die    LV/atlikušās valodas
                                                                             Wohnung. = Mēs    Wohnung. = Me                                                            Wohnung. = Me     fragments aizstāts ar
                                                                             apkurinām         kütame korterit.                                                         kütame korterit.  dabisku ET; DE daļa
                                                                             dzīvokli.                                                                                                    saglabāta nemainīta.

  ET-A2-0031   a2-anheizen      entry\[45\].study.comparison\[3\].example    Das verschärft    Das verschärft    HIGH       FOREIGN_REMNANT   **LABOT**                 Das verschärft    LV/atlikušās valodas
                                                                             den Streit. = Tas den Streit. = See                                                        den Streit. = See fragments aizstāts ar
                                                                             saasina strīdu.   teravdab tüli.                                                           teravdab tüli.    dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0032   a2-anlegen       entry\[55\].study.comparison\[1\].example    Ich lege das Buch Ich lege das Buch HIGH       FOREIGN_REMNANT   **LABOT**                 Ich lege das Buch LV/atlikušās valodas
                                                                             auf den Tisch. =  auf den Tisch. =                                                         auf den Tisch. =  fragments aizstāts ar
                                                                             Es nolieku        Ma panen raamatu                                                         Ma panen raamatu  dabisku ET; DE daļa
                                                                             grāmatu uz galda. lauale.                                                                  lauale.           saglabāta nemainīta.

  ET-A2-0033   a2-anmelden      entry\[57\].study.comparison\[1\].example    Melden Sie sich   Melden Sie sich   HIGH       FOREIGN_REMNANT   **LABOT**                 Melden Sie sich   LV/atlikušās valodas
                                                                             bitte an. =       bitte an. = Palun                                                        bitte an. = Palun fragments aizstāts ar
                                                                             Lūdzu,            registreeruge.                                                           registreeruge.    dabisku ET; DE daļa
                                                                             piesakieties.                                                                                                saglabāta nemainīta.

  ET-A2-0034   a2-anmelden      entry\[57\].study.comparison\[2\].example    Ich registriere   Ich registriere   HIGH       FOREIGN_REMNANT   **LABOT**                 Ich registriere   LV/atlikušās valodas
                                                                             mein Konto. = Es  mein Konto. = Ma                                                         mein Konto. = Ma  fragments aizstāts ar
                                                                             reģistrēju savu   registreerin oma                                                         registreerin oma  dabisku ET; DE daļa
                                                                             kontu.            konto.                                                                   konto.            saglabāta nemainīta.

  ET-A2-0035   a2-anmelden      entry\[57\].study.comparison\[3\].example    Ich buche einen   Ich buche einen   HIGH       FOREIGN_REMNANT   **LABOT**                 Ich buche einen   LV/atlikušās valodas
                                                                             Termin. = Es      Termin. = Ma                                                             Termin. = Ma      fragments aizstāts ar
                                                                             rezervēju laiku.  broneerin aja.                                                           broneerin aja.    dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0036   a2-anmelden      entry\[57\].study.comparison\[4\].example    Ich melde das     Ich melde das     HIGH       FOREIGN_REMNANT   **LABOT**                 Ich melde das     LV/atlikušās valodas
                                                                             Problem. = Es     Problem. = Ma                                                            Problem. = Ma     fragments aizstāts ar
                                                                             ziņoju par        teatan                                                                   teatan            dabisku ET; DE daļa
                                                                             problēmu.         probleemist.                                                             probleemist.      saglabāta nemainīta.

  ET-A2-0037   a2-anstecken     entry\[63\].study.comparison\[1\].example    Der Schlüssel     Der Schlüssel     HIGH       FOREIGN_REMNANT   **LABOT**                 Der Schlüssel     LV/atlikušās valodas
                                                                             steckt im         steckt im                                                                steckt im         fragments aizstāts ar
                                                                             Schloss. =        Schloss. = Võti                                                          Schloss. = Võti   dabisku ET; DE daļa
                                                                             Atslēga ir        on lukus.                                                                on lukus.         saglabāta nemainīta.
                                                                             slēdzenē.                                                                                                    

  ET-A2-0038   a2-anstecken     entry\[63\].study.comparison\[3\].example    Ich habe mich     Ich habe mich     HIGH       FOREIGN_REMNANT   **LABOT**                 Ich habe mich     LV/atlikušās valodas
                                                                             angesteckt. = Es  angesteckt. = Ma                                                         angesteckt. = Ma  fragments aizstāts ar
                                                                             inficējos.        nakatusin.                                                               nakatusin.        dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0039   a2-anstellen     entry\[65\].study.comparison\[0\].example    Die Firma stellt  Die Firma stellt  HIGH       FOREIGN_REMNANT   **LABOT**                 Die Firma stellt  LV/atlikušās valodas
                                                                             ihn an. = Firma   ihn an. = Firma                                                          ihn an. = Firma   fragments aizstāts ar
                                                                             viņu pieņem       võtab ta tööle.                                                          võtab ta tööle.   dabisku ET; DE daļa
                                                                             darbā.                                                                                                       saglabāta nemainīta.

  ET-A2-0040   a2-anstellen     entry\[65\].study.comparison\[1\].example    Wir stellen neue  Wir stellen neue  HIGH       FOREIGN_REMNANT   **LABOT**                 Wir stellen neue  LV/atlikušās valodas
                                                                             Leute ein. = Mēs  Leute ein. = Me                                                          Leute ein. = Me   fragments aizstāts ar
                                                                             pieņemam darbā    võtame uusi                                                              võtame uusi       dabisku ET; DE daļa
                                                                             jaunus cilvēkus.  inimesi tööle.                                                           inimesi tööle.    saglabāta nemainīta.

  ET-A2-0041   a2-anstellen     entry\[65\].study.comparison\[2\].example    Ich schalte das   Ich schalte das   HIGH       FOREIGN_REMNANT   **LABOT**                 Ich schalte das   LV/atlikušās valodas
                                                                             Licht an. = Es    Licht an. = Ma                                                           Licht an. = Ma    fragments aizstāts ar
                                                                             ieslēdzu gaismu.  lülitan tule                                                             lülitan tule      dabisku ET; DE daļa
                                                                                               sisse.                                                                   sisse.            saglabāta nemainīta.

  ET-A2-0042   a2-anstellen     entry\[65\].study.comparison\[3\].example    Ich stelle mich   Ich stelle mich   HIGH       FOREIGN_REMNANT   **LABOT**                 Ich stelle mich   LV/atlikušās valodas
                                                                             an. = Es nostājos an. = Ma lähen                                                           an. = Ma lähen    fragments aizstāts ar
                                                                             rindā.            järjekorda.                                                              järjekorda.       dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0043   a2-artikel       entry\[90\].study.comparison\[0\].example    Der Artikel ist   Der Artikel ist   HIGH       FOREIGN_REMNANT   **LABOT**                 Der Artikel ist   LV/atlikušās valodas
                                                                             kurz. = Raksts ir kurz. = Artikkel                                                         kurz. = Artikkel  fragments aizstāts ar
                                                                             īss.              on lühike.                                                               on lühike.        dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0044   a2-artikel       entry\[90\].study.comparison\[1\].example    Der               Der               HIGH       FOREIGN_REMNANT   **LABOT**                 Der               LV/atlikušās valodas
                                                                             Zeitungsartikel   Zeitungsartikel                                                          Zeitungsartikel   fragments aizstāts ar
                                                                             ist neu. = Avīzes ist neu. =                                                               ist neu. =        dabisku ET; DE daļa
                                                                             raksts ir jauns.  Ajaleheartikkel                                                          Ajaleheartikkel   saglabāta nemainīta.
                                                                                               on uus.                                                                  on uus.           

  ET-A2-0045   a2-artikel       entry\[90\].study.comparison\[2\].example    Die Ware ist      Die Ware ist      HIGH       FOREIGN_REMNANT   **LABOT**                 Die Ware ist      LV/atlikušās valodas
                                                                             teuer. = Prece ir teuer. = Kaup on                                                         teuer. = Kaup on  fragments aizstāts ar
                                                                             dārga.            kallis.                                                                  kallis.           dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0046   a2-artikel       entry\[90\].study.comparison\[4\].example    Der Paragraph ist Der Paragraph ist HIGH       FOREIGN_REMNANT   **LABOT**                 Der Paragraph ist LV/atlikušās valodas
                                                                             wichtig. = Pants  wichtig. =                                                               wichtig. =        fragments aizstāts ar
                                                                             ir svarīgs.       Paragrahv on                                                             Paragrahv on      dabisku ET; DE daļa
                                                                                               oluline.                                                                 oluline.          saglabāta nemainīta.

  ET-A2-0047   a2-aufheben      entry\[118\].study.comparison\[0\].example   Ich hebe den      Ich hebe den      HIGH       FOREIGN_REMNANT   **LABOT**                 Ich hebe den      LV/atlikušās valodas
                                                                             Schlüssel auf. =  Schlüssel auf. =                                                         Schlüssel auf. =  fragments aizstāts ar
                                                                             Es paceļu         Ma korjan võtme                                                          Ma korjan võtme   dabisku ET; DE daļa
                                                                             atslēgu.          üles.                                                                    üles.             saglabāta nemainīta.

  ET-A2-0048   a2-aufheben      entry\[118\].study.comparison\[1\].example   Ich hebe die      Ich hebe die      HIGH       FOREIGN_REMNANT   **LABOT**                 Ich hebe die      LV/atlikušās valodas
                                                                             Hand. = Es paceļu Hand. = Ma tõstan                                                        Hand. = Ma tõstan fragments aizstāts ar
                                                                             roku.             käe.                                                                     käe.              dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.

  ET-A2-0049   a2-aufheben      entry\[118\].study.comparison\[2\].example   Wir sagen den     Wir sagen den     HIGH       FOREIGN_REMNANT   **LABOT**                 Wir sagen den     LV/atlikušās valodas
                                                                             Termin ab. = Mēs  Termin ab. = Me                                                          Termin ab. = Me   fragments aizstāts ar
                                                                             atceļam tikšanos. tühistame                                                                tühistame         dabisku ET; DE daļa
                                                                                               kohtumise.                                                               kohtumise.        saglabāta nemainīta.

  ET-A2-0050   a2-auflage       entry\[127\].study.comparison\[0\].example   Die Auflage ist   Die Auflage ist   HIGH       FOREIGN_REMNANT   **LABOT**                 Die Auflage ist   LV/atlikušās valodas
                                                                             hoch. = Tirāža ir hoch. = Tiraaž on                                                        hoch. = Tiraaž on fragments aizstāts ar
                                                                             liela.            suur.                                                                    suur.             dabisku ET; DE daļa
                                                                                                                                                                                          saglabāta nemainīta.
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
