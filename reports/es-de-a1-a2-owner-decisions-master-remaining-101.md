# ES–DE A1+A2 OWNER DECISIONS — MASTER REMAINING (401–500 + 1011)

**Findings:** 401–500 + corrected 1011
**OWNER decisions:** 101/101
**DE:** STRICT READ-ONLY
**Production apply:** NAV VEIKTS

> AUTHORITATIVE OWNER MAPPING. Apply tikai `Status: LABOT` rindas ar precīzu `Card ID` + `Field/path` + `CURRENT` exact-match. Mismatch → SKIP. Ierakstīt tieši `NEW`; netulkot, nepārfrāzēt un neimprovizēt.

> **1011 korekcija:** Luna norādīja `study.examples[0].lv`, bet production `es uzskatu, ka tas ir pareizi.` atrodas `study.examples[1].lv` (pēc 1012 apply uz [0]).

| # | Finding | Card ID | Field/path | CURRENT | NEW | Status |
|---:|---|---|---|---|---|---|
| 401 | `ES-A1A2-LUNA-0401` | `a1-bei` | `study.examples[0].lv` | `es esmu pie sava drauga.` | `Estoy en casa de mi amigo.` | **LABOT** |
| 402 | `ES-A1A2-LUNA-0402` | `a1-bei` | `study.comparison[1].meaning` | `pie sienas, malas, krasta, virsmas malas` | `junto a una pared, un borde o la orilla` | **LABOT** |
| 403 | `ES-A1A2-LUNA-0403` | `a1-bei` | `study.comparison[2].meaning` | `quien va a (dirección)` | `a (dirección)` | **LABOT** |
| 404 | `ES-A1A2-LUNA-0404` | `a1-bitte` | `study.comparison[0].meaning` | `lūdzu` | `por favor` | **LABOT** |
| 405 | `ES-A1A2-LUNA-0405` | `a1-bitte` | `study.comparison[1].meaning` | `lūgums` | `petición` | **LABOT** |
| 406 | `ES-A1A2-LUNA-0406` | `a1-bitte-study` | `study.comparison[0].meaning` | `lūgums` | `petición` | **LABOT** |
| 407 | `ES-A1A2-LUNA-0407` | `a1-bitte-study` | `study.comparison[1].meaning` | `lūdzu` | `por favor` | **LABOT** |
| 408 | `ES-A1A2-LUNA-0408` | `a1-bleiben` | `study.comparison[2].meaning` | `braukt / doties ar transportu` | `conducir / desplazarse en transporte` | **LABOT** |
| 409 | `ES-A1A2-LUNA-0409` | `a1-bringen` | `study.translation` | `traer • quitar` | `traer • llevar` | **LABOT** |
| 410 | `ES-A1A2-LUNA-0410` | `a1-bringen` | `study.comparison[4].meaning` | `paņemt` | `tomar` | **LABOT** |
| 411 | `ES-A1A2-LUNA-0411` | `a1-da` | `study.examples[1].lv` | `es biju tur.` | `yo estuve allí.` | **LABOT** |
| 412 | `ES-A1A2-LUNA-0412` | `a1-das` | `study.examples[0].lv` | `tas ir mans auto.` | `ese es mi coche.` | **LABOT** |
| 413 | `ES-A1A2-LUNA-0413` | `a1-das` | `study.examples[1].lv` | `tas ir labi.` | `eso está bien.` | **LABOT** |
| 414 | `ES-A1A2-LUNA-0414` | `a1-das` | `study.comparison[0].meaning` | `it (artículo / pronombre)` | `eso (pronombre)` | **LABOT** |
| 415 | `ES-A1A2-LUNA-0415` | `a1-das` | `study.tip.text` | `Recuerda: vidus género → das; ka → dass.` | `Recuerda: género neutro → das; que → dass.` | **LABOT** |
| 416 | `ES-A1A2-LUNA-0416` | `a1-dass` | `study.translation` | `eso` | `que` | **LABOT** |
| 417 | `ES-A1A2-LUNA-0417` | `a1-dass` | `study.examples[0].lv` | `es zinu, ka tu esi noguris.` | `sé que estás cansado.` | **LABOT** |
| 418 | `ES-A1A2-LUNA-0418` | `a1-dass` | `study.comparison[0].meaning` | `eso` | `que` | **LABOT** |
| 419 | `ES-A1A2-LUNA-0419` | `a1-dass` | `study.comparison[1].meaning` | `porque • porque` | `que` | **LABOT** |
| 420 | `ES-A1A2-LUNA-0420` | `a1-dass` | `study.comparison[2].meaning` | `lai` | `que` | **LABOT** |
| 421 | `ES-A1A2-LUNA-0421` | `a1-dass` | `study.comparison[3].meaning` | `o` | `que` | **LABOT** |
| 422 | `ES-A1A2-LUNA-0422` | `a1-dass` | `study.tip.text` | `Recuerda: ka → dass.` | `Recuerda: que → dass.` | **LABOT** |
| 423 | `ES-A1A2-LUNA-0423` | `a1-der` | `study.examples[1].lv` | `autobuss brauc.` | `el autobús circula.` | **LABOT** |
| 424 | `ES-A1A2-LUNA-0424` | `a1-der` | `study.tip.text` | `Recuerde: masculino → encaja.` | `Recuerda: masculino → der.` | **LABOT** |
| 425 | `ES-A1A2-LUNA-0425` | `a1-die` | `study.examples[1].lv` | `el gatito está durmiendo.` | `la gatita está durmiendo.` | **LABOT** |
| 426 | `ES-A1A2-LUNA-0426` | `a1-die` | `study.examples[2].lv` | `explica el profesor.` | `explica la profesora.` | **LABOT** |
| 427 | `ES-A1A2-LUNA-0427` | `a1-die` | `study.tip.text` | `Recuerda: femenino → morir.` | `Recuerda: femenino → die.` | **LABOT** |
| 428 | `ES-A1A2-LUNA-0428` | `a1-ein` | `study.examples[3].lv` | `Bērns spēlējas.` | `El niño juega.` | **LABOT** |
| 429 | `ES-A1A2-LUNA-0429` | `a1-ein` | `study.comparison[0].meaning` | `vīriešu dzimte` | `género masculino` | **LABOT** |
| 430 | `ES-A1A2-LUNA-0430` | `a1-ein` | `study.comparison[1].meaning` | `sieviešu dzimte` | `género femenino` | **LABOT** |
| 431 | `ES-A1A2-LUNA-0431` | `a1-ein` | `study.comparison[2].meaning` | `vidus dzimte` | `género neutro` | **LABOT** |
| 432 | `ES-A1A2-LUNA-0432` | `a1-ein` | `study.comparison[3].meaning` | `akuzatīvs` | `acusativo` | **LABOT** |
| 433 | `ES-A1A2-LUNA-0433` | `a1-eis` | `study.examples[3].lv` | `ledus ir auksts.` | `El hielo está frío.` | **LABOT** |
| 434 | `ES-A1A2-LUNA-0434` | `a1-erst` | `study.examples[0].lv` | `vispirms dzert, tad braukt.` | `Primero beber y luego conducir.` | **LABOT** |
| 435 | `ES-A1A2-LUNA-0435` | `a1-erst` | `study.tip.text` | `Recuerda: laiks/skaits → erst; daudzums → nur.` | `Recuerda: tiempo/cantidad → erst; cantidad → nur.` | **LABOT** |
| 436 | `ES-A1A2-LUNA-0436` | `a1-es` | `study.examples[5].lv` | `snieg.` | `Nieva.` | **LABOT** |
| 437 | `ES-A1A2-LUNA-0437` | `a1-es` | `study.tip.text` | `Recuerde: "es" letón → ich, no es alemán.` | `Recuerde: en letón, «es» significa «yo»; no es el «es» alemán.` | **LABOT** |
| 438 | `ES-A1A2-LUNA-0438` | `a1-es` | `study.comparison[0].meaning` | `tas • bezpersoniska forma` | `eso • forma impersonal` | **LABOT** |
| 439 | `ES-A1A2-LUNA-0439` | `a1-etwas` | `study.examples[1].lv` | `vai tev ir nedaudz laika?` | `¿Tienes un poco de tiempo?` | **LABOT** |
| 440 | `ES-A1A2-LUNA-0440` | `a1-etwas` | `study.examples[2].lv` | `es esmu nedaudz noguris.` | `Estoy un poco cansado.` | **LABOT** |
| 441 | `ES-A1A2-LUNA-0441` | `a1-etwas` | `study.examples[3].lv` | `man tev ir kaut kas.` | `Tengo algo para ti.` | **LABOT** |
| 442 | `ES-A1A2-LUNA-0442` | `a1-etwas` | `study.comparison[0].meaning` | `kaut kas / nedaudz` | `algo / un poco` | **LABOT** |
| 443 | `ES-A1A2-LUNA-0443` | `a1-euch` | `study.translation` | `usted • usted` | `os • os` | **LABOT** |
| 444 | `ES-A1A2-LUNA-0444` | `a1-euch` | `study.examples[0].lv` | `te veo` | `Os veo.` | **LABOT** |
| 445 | `ES-A1A2-LUNA-0445` | `a1-euch` | `study.examples[1].lv` | `yo te ayudo` | `Os ayudo.` | **LABOT** |
| 446 | `ES-A1A2-LUNA-0446` | `a1-euch` | `study.examples[2].lv` | `te regalo un libro` | `Os regalo un libro.` | **LABOT** |
| 447 | `ES-A1A2-LUNA-0447` | `a1-euch` | `study.examples[3].lv` | `es jums pateicos.` | `Os doy las gracias.` | **LABOT** |
| 448 | `ES-A1A2-LUNA-0448` | `a1-euch` | `study.examples[4].lv` | `tu recuerdas` | `Vosotros recordáis.` | **LABOT** |
| 449 | `ES-A1A2-LUNA-0449` | `a1-euch` | `study.comparison[0].meaning` | `tú` | `vosotros` | **LABOT** |
| 450 | `ES-A1A2-LUNA-0450` | `a1-euch` | `study.comparison[1].meaning` | `tu/a ti` | `vosotros/a vosotros` | **LABOT** |
| 451 | `ES-A1A2-LUNA-0451` | `a1-fahren` | `study.translation` | `conducir • liderar • llevar` | `conducir • viajar • llevar` | **LABOT** |
| 452 | `ES-A1A2-LUNA-0452` | `a1-fahren` | `study.examples[1].lv` | `es braucu ar auto.` | `Voy en coche.` | **LABOT** |
| 453 | `ES-A1A2-LUNA-0453` | `a1-fahren` | `study.examples[2].lv` | `es vedu savu meitu uz skolu.` | `Llevo a mi hija al colegio.` | **LABOT** |
| 454 | `ES-A1A2-LUNA-0454` | `a1-fahren` | `study.examples[4].lv` | `mañana nos vamos a Munich.` | `Mañana nos vamos a Múnich.` | **LABOT** |
| 455 | `ES-A1A2-LUNA-0455` | `a1-fahren` | `study.comparison[0].meaning` | `braukt ar transportu` | `viajar en un vehículo` | **LABOT** |
| 456 | `ES-A1A2-LUNA-0456` | `a1-fahren` | `study.comparison[2].meaning` | `skriet / iet` | `correr / caminar` | **LABOT** |
| 457 | `ES-A1A2-LUNA-0457` | `a1-fahren` | `study.important.text` | `fahren ≠ tikai “braukt”` | `fahren ≠ solo «conducir»` | **LABOT** |
| 458 | `ES-A1A2-LUNA-0458` | `a1-finden` | `study.examples[1].lv` | `vai tu atradi savu telefonu?` | `¿Encontraste tu teléfono?` | **LABOT** |
| 459 | `ES-A1A2-LUNA-0459` | `a1-frau` | `study.examples[1].lv` | `tas ir mana sieva.` | `Esta es mi esposa.` | **LABOT** |
| 460 | `ES-A1A2-LUNA-0460` | `a1-fuer` | `study.translation` | `para • para` | `para • por` | **LABOT** |
| 461 | `ES-A1A2-LUNA-0461` | `a1-fuer` | `study.examples[3].lv` | `¿cuanto pagas por un auto?` | `¿Cuánto pagas por un coche?` | **LABOT** |
| 462 | `ES-A1A2-LUNA-0462` | `a1-gross-study` | `study.examples[2].lv` | `el es alto.` | `Él es alto.` | **LABOT** |
| 463 | `ES-A1A2-LUNA-0463` | `a1-gross-study` | `study.examples[3].lv` | `istaba ir liela.` | `La habitación es grande.` | **LABOT** |
| 464 | `ES-A1A2-LUNA-0464` | `a1-haben` | `study.examples[1].lv` | `vai tev ir laiks?` | `¿Tienes tiempo?` | **LABOT** |
| 465 | `ES-A1A2-LUNA-0465` | `a1-haben` | `study.examples[3].lv` | `lo hice` | `lo tengo` | **LABOT** |
| 466 | `ES-A1A2-LUNA-0466` | `a1-haben` | `study.tip.text` | `Recuerda: Ich habe → man ir.` | `Recuerda: Ich habe → tengo.` | **LABOT** |
| 467 | `ES-A1A2-LUNA-0467` | `a1-halten` | `study.examples[0].lv` | `es turu somu.` | `sostengo la bolsa.` | **LABOT** |
| 468 | `ES-A1A2-LUNA-0468` | `a1-halten` | `study.examples[3].lv` | `es to uzskatu par pareizu.` | `considero que es correcto.` | **LABOT** |
| 469 | `ES-A1A2-LUNA-0469` | `a1-halten` | `study.tip.text` | `Recuerde: en la mano → detener; transporte → hält/stops.` | `Recuerda: en la mano → sostener; transporte → hält/se detiene.` | **LABOT** |
| 470 | `ES-A1A2-LUNA-0470` | `a1-heißen` | `study.examples[0].lv` | `mani sauc Anna.` | `Me llamo Anna.` | **LABOT** |
| 471 | `ES-A1A2-LUNA-0471` | `a1-heißen` | `study.comparison[1].meaning` | `saukt / nosaukt` | `llamarse / nombrar` | **LABOT** |
| 472 | `ES-A1A2-LUNA-0472` | `a1-heißen` | `study.comparison[4].meaning` | `zvanīt` | `llamar` | **LABOT** |
| 473 | `ES-A1A2-LUNA-0473` | `a1-heißen` | `study.tip.text` | `Recuerda: Ich heiße... → mani sauc...` | `Recuerda: Ich heiße... → me llamo...` | **LABOT** |
| 474 | `ES-A1A2-LUNA-0474` | `a1-hoch-study` | `study.examples[0].lv` | `Kalns ir augsts.` | `La montaña es alta.` | **LABOT** |
| 475 | `ES-A1A2-LUNA-0475` | `a1-hoch-study` | `study.examples[1].lv` | `kalns ir augsts.` | `La montaña es alta.` | **LABOT** |
| 476 | `ES-A1A2-LUNA-0476` | `a1-hoch-study` | `study.examples[3].lv` | `siena ir augsta.` | `La pared es alta.` | **LABOT** |
| 477 | `ES-A1A2-LUNA-0477` | `a1-hoch-study` | `study.examples[4].lv` | `cenas ir augstas.` | `Los precios son altos.` | **LABOT** |
| 478 | `ES-A1A2-LUNA-0478` | `a1-hoeren-study` | `study.examples[2].lv` | `es tevi dzirdu.` | `Te oigo.` | **LABOT** |
| 479 | `ES-A1A2-LUNA-0479` | `a1-ihr` | `study.translation` | `usted • ella` | `ustedes • ella • su` | **LABOT** |
| 480 | `ES-A1A2-LUNA-0480` | `a1-ihr` | `study.examples[0].lv` | `¿vienes esta noche?` | `¿Venís esta noche?` | **LABOT** |
| 481 | `ES-A1A2-LUNA-0481` | `a1-ihr` | `study.examples[4].lv` | `vai jums ir laiks?` | `¿Tienen tiempo?` | **LABOT** |
| 482 | `ES-A1A2-LUNA-0482` | `a1-im` | `study.comparison[3].meaning` | `pie, kur? (kam?)` | `¿En dónde? (¿A quién?)` | **LABOT** |
| 483 | `ES-A1A2-LUNA-0483` | `a1-im` | `study.comparison[4].meaning` | `uz virsmas` | `sobre una superficie` | **LABOT** |
| 484 | `ES-A1A2-LUNA-0484` | `a1-in` | `study.examples[1].lv` | `es eju uz skolu.` | `Voy a la escuela.` | **LABOT** |
| 485 | `ES-A1A2-LUNA-0485` | `a1-in` | `study.tip.text` | `Recuerde: pulg/pulg → pulg.` | `Recuerda: in significa «en» o «dentro de».` | **LABOT** |
| 486 | `ES-A1A2-LUNA-0486` | `a1-ins` | `study.translation` | `en • en • ¿dónde?` | `a • al • ¿adónde?` | **LABOT** |
| 487 | `ES-A1A2-LUNA-0487` | `a1-ins` | `study.examples[0].lv` | `es eju uz kino.` | `Voy al cine.` | **LABOT** |
| 488 | `ES-A1A2-LUNA-0488` | `a1-ins` | `study.comparison[3].meaning` | `uz virsmu (Akk.)` | `hacia una superficie (acusativo)` | **LABOT** |
| 489 | `ES-A1A2-LUNA-0489` | `a1-ins` | `study.comparison[4].meaning` | `uz / pie (kam?)` | `a / hacia (¿a quién?)` | **LABOT** |
| 490 | `ES-A1A2-LUNA-0490` | `a1-jung` | `study.examples[1].lv` | `suns ir jauns.` | `El perro es joven.` | **LABOT** |
| 491 | `ES-A1A2-LUNA-0491` | `a1-jung` | `study.examples[4].lv` | `es una nueva pareja.` | `Es una pareja joven.` | **LABOT** |
| 492 | `ES-A1A2-LUNA-0492` | `a1-kein` | `study.translation` | `nadie • nada` | `ningún • ninguna` | **LABOT** |
| 493 | `ES-A1A2-LUNA-0493` | `a1-kein` | `study.examples[0].lv` | `man nav naudas.` | `No tengo dinero.` | **LABOT** |
| 494 | `ES-A1A2-LUNA-0494` | `a1-kein` | `study.examples[1].lv` | `piena vairs nav nemaz.` | `Ya no hay nada de leche.` | **LABOT** |
| 495 | `ES-A1A2-LUNA-0495` | `a1-kein` | `study.examples[3].lv` | `man nav laika.` | `No tengo tiempo.` | **LABOT** |
| 496 | `ES-A1A2-LUNA-0496` | `a1-kennen-study` | `study.translation` | `saber` | `conocer` | **LABOT** |
| 497 | `ES-A1A2-LUNA-0497` | `a1-kennen-study` | `study.examples[4].lv` | `saber sabias` | `conocer, conocías` | **LABOT** |
| 498 | `ES-A1A2-LUNA-0498` | `a1-kennen-study` | `study.comparison[0].meaning` | `saber (persona, lugar, cosa)` | `conocer (persona, lugar, cosa)` | **LABOT** |
| 499 | `ES-A1A2-LUNA-0499` | `a1-wissen-study` | `study.examples[2].lv` | `es zinu atbildi.` | `Sé la respuesta.` | **LABOT** |
| 500 | `ES-A1A2-LUNA-0500` | `a1-wissen-study` | `study.comparison[1].meaning` | `saber (persona, lugar, cosa)` | `conocer (persona, lugar, cosa)` | **LABOT** |
| 1011 | `ES-A1A2-LUNA-1011` | `a2-meinen` | `study.examples[1].lv` | `es uzskatu, ka tas ir pareizi.` | `Creo que es correcto.` | **LABOT** |
