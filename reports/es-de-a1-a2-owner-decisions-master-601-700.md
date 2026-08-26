# ES–DE A1+A2 OWNER DECISIONS — MASTER 601–700

**Findings:** 601–700
**OWNER decisions:** 100/100
**DE:** STRICT READ-ONLY
**Production apply:** NAV VEIKTS

> AUTHORITATIVE OWNER MAPPING. Apply tikai `Status: LABOT` rindas ar precīzu `Card ID` + `Field/path` + `CURRENT` exact-match. Mismatch → SKIP. Ierakstīt tieši `NEW`; netulkot, nepārfrāzēt un neimprovizēt.

| # | Finding | Card ID | Field/path | CURRENT | NEW | Status |
|---:|---|---|---|---|---|---|
| 601 | `ES-A1A2-LUNA-0601` | `a1-sie-study-2` | `study.examples[1].lv` | `ella cocina.` | `Usted cocina.` | **LABOT** |
| 602 | `ES-A1A2-LUNA-0602` | `a1-sie-study-2` | `study.examples[2].lv` | `ella come` | `Usted come.` | **LABOT** |
| 603 | `ES-A1A2-LUNA-0603` | `a1-sie-study-2` | `study.examples[3].lv` | `ellos cocinan.` | `Usted cocina.` | **LABOT** |
| 604 | `ES-A1A2-LUNA-0604` | `a1-sie-study-2` | `study.examples[4].lv` | `ellos juegan al fútbol.` | `Usted juega al fútbol.` | **LABOT** |
| 605 | `ES-A1A2-LUNA-0605` | `a1-sie-study-2` | `study.examples[5].lv` | `tu cocinas por favor` | `Usted cocina, por favor.` | **LABOT** |
| 606 | `ES-A1A2-LUNA-0606` | `a1-sitzen` | `study.translation` | `sentarse` | `estar sentado` | **LABOT** |
| 607 | `ES-A1A2-LUNA-0607` | `a1-sitzen` | `study.examples[2].lv` | `él está parado en la puerta.` | `Él está sentado en la puerta.` | **LABOT** |
| 608 | `ES-A1A2-LUNA-0608` | `a1-sitzen` | `study.examples[3].lv` | `el gato está durmiendo en el sofá.` | `El gato está sentado en el sofá.` | **LABOT** |
| 609 | `ES-A1A2-LUNA-0609` | `a1-stehen` | `study.examples[2].lv` | `él está sentado a la mesa.` | `Él está de pie junto a la mesa.` | **LABOT** |
| 610 | `ES-A1A2-LUNA-0610` | `a1-über` | `study.examples[1].lv` | `Estamos hablando de tiempo.` | `Estamos hablando del tiempo.` | **LABOT** |
| 611 | `ES-A1A2-LUNA-0611` | `a1-über` | `study.comparison[1].meaning` | `uz virsmas` | `sobre una superficie` | **LABOT** |
| 612 | `ES-A1A2-LUNA-0612` | `a1-um` | `study.comparison[0].meaning` | `pulksten / ap / lai` | `a las / alrededor de / para` | **LABOT** |
| 613 | `ES-A1A2-LUNA-0613` | `a1-um` | `study.comparison[2].meaning` | `ap laiku / pret` | `a tiempo / contra` | **LABOT** |
| 614 | `ES-A1A2-LUNA-0614` | `a1-unter` | `study.examples[0].lv` | `soma ir zem galda.` | `La bolsa está debajo de la mesa.` | **LABOT** |
| 615 | `ES-A1A2-LUNA-0615` | `a1-unter` | `study.examples[3].lv` | `una lámpara cuelga encima de la mesa.` | `Una lámpara cuelga debajo de la mesa.` | **LABOT** |
| 616 | `ES-A1A2-LUNA-0616` | `a1-unter` | `study.comparison[0].meaning` | `zem / starp` | `debajo / entre` | **LABOT** |
| 617 | `ES-A1A2-LUNA-0617` | `a1-unter` | `study.comparison[1].meaning` | `virs / par` | `encima / sobre` | **LABOT** |
| 618 | `ES-A1A2-LUNA-0618` | `a1-unter` | `study.comparison[3].meaning` | `uz virsmas` | `sobre una superficie` | **LABOT** |
| 619 | `ES-A1A2-LUNA-0619` | `a1-unter` | `study.tip.text` | `Recuerda: zem galda → unter dem Tisch.` | `Recuerda: debajo de la mesa → unter dem Tisch.` | **LABOT** |
| 620 | `ES-A1A2-LUNA-0620` | `a1-verstehen` | `study.examples[0].lv` | `es tevi saprotu.` | `Te entiendo.` | **LABOT** |
| 621 | `ES-A1A2-LUNA-0621` | `a1-verstehen` | `study.examples[2].lv` | `es to nesaprotu.` | `No lo entiendo.` | **LABOT** |
| 622 | `ES-A1A2-LUNA-0622` | `a1-verstehen` | `study.examples[3].lv` | `puedo hablar alemán` | `Puedo entender alemán.` | **LABOT** |
| 623 | `ES-A1A2-LUNA-0623` | `a1-vom` | `study.examples[0].lv` | `vengo de la estacion` | `Vengo de la estación.` | **LABOT** |
| 624 | `ES-A1A2-LUNA-0624` | `a1-vom` | `study.examples[4].lv` | `tas ir no tirgus.` | `Está en el mercado.` | **LABOT** |
| 625 | `ES-A1A2-LUNA-0625` | `a1-vor` | `study.examples[3].lv` | `Después de comer salimos a caminar.` | `Antes de comer salimos a caminar.` | **LABOT** |
| 626 | `ES-A1A2-LUNA-0626` | `a1-was` | `study.translation` | `quién • qué` | `qué` | **LABOT** |
| 627 | `ES-A1A2-LUNA-0627` | `a1-was` | `study.examples[1].lv` | `Kas notika?` | `¿Qué pasó?` | **LABOT** |
| 628 | `ES-A1A2-LUNA-0628` | `a1-was` | `study.examples[2].lv` | `Ko tu tagad dari?` | `¿Qué haces ahora?` | **LABOT** |
| 629 | `ES-A1A2-LUNA-0629` | `a1-was` | `study.examples[3].lv` | `que quieres beber` | `¿Qué quieres beber?` | **LABOT** |
| 630 | `ES-A1A2-LUNA-0630` | `a1-wenn` | `study.examples[0].lv` | `ja tev ir laiks, iegriezies.` | `Si tienes tiempo, pásate.` | **LABOT** |
| 631 | `ES-A1A2-LUNA-0631` | `a1-wenn` | `study.examples[2].lv` | `kad esmu noguris, es dzeru kafiju.` | `Cuando estoy cansado, tomo café.` | **LABOT** |
| 632 | `ES-A1A2-LUNA-0632` | `a1-wenn` | `study.comparison[0].meaning` | `ja / kad` | `si / cuando` | **LABOT** |
| 633 | `ES-A1A2-LUNA-0633` | `a1-wenn` | `study.comparison[2].meaning` | `cuando en cuestión` | `cuándo en una pregunta` | **LABOT** |
| 634 | `ES-A1A2-LUNA-0634` | `a1-wenn` | `study.tip.text` | `Recuerde: condición → wenn; la pregunta "¿cuándo?" → quiero.` | `Recuerde: condición → wenn; la pregunta «¿cuándo?» → wann.` | **LABOT** |
| 635 | `ES-A1A2-LUNA-0635` | `a1-wer` | `study.translation` | `quién • quién` | `quién` | **LABOT** |
| 636 | `ES-A1A2-LUNA-0636` | `a1-wer` | `study.examples[0].lv` | `¿Qué es?` | `¿Quién es?` | **LABOT** |
| 637 | `ES-A1A2-LUNA-0637` | `a1-wer` | `study.examples[1].lv` | `Kas tu esi?` | `¿Quién eres?` | **LABOT** |
| 638 | `ES-A1A2-LUNA-0638` | `a1-wer` | `study.examples[2].lv` | `¿Qué viene hoy?` | `¿Quién viene hoy?` | **LABOT** |
| 639 | `ES-A1A2-LUNA-0639` | `a1-wer` | `study.examples[3].lv` | `quien es tu maestro` | `¿Quién es tu maestro?` | **LABOT** |
| 640 | `ES-A1A2-LUNA-0640` | `a1-wer` | `study.examples[5].lv` | `Kas to teica?` | `¿Quién dijo eso?` | **LABOT** |
| 641 | `ES-A1A2-LUNA-0641` | `a1-werden` | `study.examples[3].lv` | `es esmu noguris.` | `Estoy cansado.` | **LABOT** |
| 642 | `ES-A1A2-LUNA-0642` | `a1-wetter` | `study.examples[0].lv` | `¿qué hora es hoy?` | `¿Qué tiempo hace hoy?` | **LABOT** |
| 643 | `ES-A1A2-LUNA-0643` | `a1-wetter` | `study.examples[1].lv` | `laiks ir jauks.` | `Hace buen tiempo.` | **LABOT** |
| 644 | `ES-A1A2-LUNA-0644` | `a1-wetter` | `study.examples[2].lv` | `laiks ir slikts.` | `Hace mal tiempo.` | **LABOT** |
| 645 | `ES-A1A2-LUNA-0645` | `a1-wetter` | `study.examples[4].lv` | `Estamos hablando de tiempo.` | `Estamos hablando del tiempo.` | **LABOT** |
| 646 | `ES-A1A2-LUNA-0646` | `a1-wie` | `study.examples[0].lv` | `Cómo estás` | `¿Cómo estás?` | **LABOT** |
| 647 | `ES-A1A2-LUNA-0647` | `a1-wie` | `study.examples[1].lv` | `cómo te llamas` | `¿Cómo te llamas?` | **LABOT** |
| 648 | `ES-A1A2-LUNA-0648` | `a1-wie` | `study.examples[2].lv` | `Cuánto cuesta` | `¿Cuánto cuesta?` | **LABOT** |
| 649 | `ES-A1A2-LUNA-0649` | `a1-wie` | `study.examples[3].lv` | `cik tev gadu?` | `¿Cuántos años tienes?` | **LABOT** |
| 650 | `ES-A1A2-LUNA-0650` | `a1-wie` | `study.examples[4].lv` | `cik ilgi ilgst filma?` | `¿Cuánto dura la película?` | **LABOT** |
| 651 | `ES-A1A2-LUNA-0651` | `a1-zu` | `study.examples[1].lv` | `vamos a la escuela.` | `Vamos a la escuela.` | **LABOT** |
| 652 | `ES-A1A2-LUNA-0652` | `a1-zu` | `study.examples[2].lv` | `es demasiado caro.` | `Es demasiado caro.` | **LABOT** |
| 653 | `ES-A1A2-LUNA-0653` | `a1-zug` | `study.examples[1].lv` | `es braucu ar vilcienu.` | `Viajo en tren.` | **LABOT** |
| 654 | `ES-A1A2-LUNA-0654` | `a1-zug` | `study.examples[2].lv` | `vilciens ir pilns.` | `El tren está lleno.` | **LABOT** |
| 655 | `ES-A1A2-LUNA-0655` | `a1-zug` | `study.examples[3].lv` | `el autobús llega más tarde.` | `El autobús llega más tarde.` | **LABOT** |
| 656 | `ES-A1A2-LUNA-0656` | `a1-zum` | `study.examples[1].lv` | `vamos a la estacion.` | `Vamos a la estación.` | **LABOT** |
| 657 | `ES-A1A2-LUNA-0657` | `a1-zum` | `study.examples[7].lv` | `es eju pie friziera.` | `Voy a la peluquería.` | **LABOT** |
| 658 | `ES-A1A2-LUNA-0658` | `a1-zum` | `study.comparison[0].meaning` | `uz / pie (kam?)` | `a / hacia (¿a quién?)` | **LABOT** |
| 659 | `ES-A1A2-LUNA-0659` | `a1-zum` | `study.comparison[1].meaning` | `uz / pie (siev. género)` | `a / hacia (género masculino o neutro)` | **LABOT** |
| 660 | `ES-A1A2-LUNA-0660` | `a1-fernsehen` | `study.tip.leftBlocks[0].text` | `Fernsehen (ich sehe helecho) se utiliza para la acción. Das Fernsehen se utiliza para un programa o medio de televisión.` | `Fernsehen (ich sehe fern) se utiliza para la acción. Das Fernsehen se utiliza para un programa o medio de televisión.` | **LABOT** |
| 661 | `ES-A1A2-LUNA-0661` | `a1-fernsehen` | `study.important.text` | `fernsehen = verbo (ich sehe helecho). das Fernsehen = sustantivo, sólo singular.` | `fernsehen = verbo (ich sehe fern). das Fernsehen = sustantivo, solo singular.` | **LABOT** |
| 662 | `ES-A1A2-LUNA-0662` | `a1-fernsehen-study` | `study.examples[2].lv` | `se está proyectando una película en la televisión.` | `Se está proyectando una película en la televisión.` | **LABOT** |
| 663 | `ES-A1A2-LUNA-0663` | `a1-fernsehen-study` | `study.examples[5].lv` | `¿Qué se muestra en la televisión?` | `¿Qué se muestra en la televisión?` | **LABOT** |
| 664 | `ES-A1A2-LUNA-0664` | `a1-essen` | `study.examples[1].lv` | `que quieres comer` | `¿Qué quieres comer?` | **LABOT** |
| 665 | `ES-A1A2-LUNA-0665` | `a1-essen` | `study.examples[2].lv` | `comemos a las 12 en punto.` | `Comemos a las 12 en punto.` | **LABOT** |
| 666 | `ES-A1A2-LUNA-0666` | `a1-essen` | `study.examples[3].lv` | `la comida está lista.` | `La comida está lista.` | **LABOT** |
| 667 | `ES-A1A2-LUNA-0667` | `a1-essen` | `study.examples[4].lv` | `la comida sabe muy bien.` | `La comida sabe muy bien.` | **LABOT** |
| 668 | `ES-A1A2-LUNA-0668` | `a1-essen` | `study.examples[5].lv` | `la comida sabe bien.` | `La comida sabe bien.` | **LABOT** |
| 669 | `ES-A1A2-LUNA-0669` | `a1-essen-study` | `study.examples[1].lv` | `que quieres comer` | `¿Qué quieres comer?` | **LABOT** |
| 670 | `ES-A1A2-LUNA-0670` | `a1-essen-study` | `study.examples[2].lv` | `comemos a las 12 en punto.` | `Comemos a las 12 en punto.` | **LABOT** |
| 671 | `ES-A1A2-LUNA-0671` | `a1-essen-study` | `study.examples[3].lv` | `la comida está lista.` | `La comida está lista.` | **LABOT** |
| 672 | `ES-A1A2-LUNA-0672` | `a1-essen-study` | `study.examples[4].lv` | `la comida sabe muy bien.` | `La comida sabe muy bien.` | **LABOT** |
| 673 | `ES-A1A2-LUNA-0673` | `a1-essen-study` | `study.examples[5].lv` | `la comida sabe bien.` | `La comida sabe bien.` | **LABOT** |
| 674 | `ES-A1A2-LUNA-0674` | `a1-gemuese` | `study.examples[2].lv` | `las verduras están frescas.` | `Las verduras están frescas.` | **LABOT** |
| 675 | `ES-A1A2-LUNA-0675` | `a1-obst` | `study.examples[1].lv` | `comemos mucha fruta.` | `Comemos mucha fruta.` | **LABOT** |
| 676 | `ES-A1A2-LUNA-0676` | `a1-ferien` | `study.examples[3].lv` | `la escuela está cerrada los días festivos.` | `La escuela está cerrada durante las vacaciones escolares.` | **LABOT** |
| 677 | `ES-A1A2-LUNA-0677` | `a1-ferien` | `study.examples[4].lv` | `los días festivos vamos al mar.` | `Durante las vacaciones escolares vamos al mar.` | **LABOT** |
| 678 | `ES-A1A2-LUNA-0678` | `a1-ferien` | `study.comparison[0].meaning` | `vacaciones escolares/de estudio (solo dsk.)` | `vacaciones escolares (solo para estudiantes)` | **LABOT** |
| 679 | `ES-A1A2-LUNA-0679` | `a1-ferien` | `study.comparison[1].meaning` | `salir del trabajo (solo todos)` | `vacaciones laborales (para trabajadores)` | **LABOT** |
| 680 | `ES-A1A2-LUNA-0680` | `a1-urlaub` | `study.examples[1].lv` | `mi padre está de vacaciones.` | `Mi padre está de vacaciones.` | **LABOT** |
| 681 | `ES-A1A2-LUNA-0681` | `a1-urlaub` | `study.examples[4].lv` | `de vacaciones (trabajo).` | `De vacaciones (por trabajo).` | **LABOT** |
| 682 | `ES-A1A2-LUNA-0682` | `a1-urlaub` | `study.comparison[0].meaning` | `salir del trabajo (solo todos)` | `vacaciones laborales (para trabajadores)` | **LABOT** |
| 683 | `ES-A1A2-LUNA-0683` | `a1-urlaub` | `study.comparison[1].meaning` | `vacaciones escolares/de estudio (solo dsk.)` | `vacaciones escolares (solo para estudiantes)` | **LABOT** |
| 684 | `ES-A1A2-LUNA-0684` | `a1-uhr` | `study.examples[5].lv` | `dispositivo/hora en el reloj; El tiempo` | `dispositivo que indica la hora; la hora` | **LABOT** |
| 685 | `ES-A1A2-LUNA-0685` | `a1-zeit` | `study.examples[0].lv` | `Man nav laika.` | `No tengo tiempo.` | **LABOT** |
| 686 | `ES-A1A2-LUNA-0686` | `a1-zeit` | `study.examples[1].lv` | `man nav laika.` | `No tengo tiempo.` | **LABOT** |
| 687 | `ES-A1A2-LUNA-0687` | `a1-zeit` | `study.examples[2].lv` | `vai tev ir laiks?` | `¿Tienes tiempo?` | **LABOT** |
| 688 | `ES-A1A2-LUNA-0688` | `a1-einmal` | `study.translation` | `una vez • una vez` | `una vez` | **LABOT** |
| 689 | `ES-A1A2-LUNA-0689` | `a1-noch-mal` | `study.examples[1].lv` | `otra vez por favor` | `Otra vez, por favor.` | **LABOT** |
| 690 | `ES-A1A2-LUNA-0690` | `a1-noch-mal` | `study.examples[2].lv` | `dilo de nuevo` | `Dilo de nuevo.` | **LABOT** |
| 691 | `ES-A1A2-LUNA-0691` | `a2-ab-und-zu` | `study.examples[2].lv` | `ik pa laikam man vajag mieru.` | `De vez en cuando necesito tranquilidad.` | **LABOT** |
| 692 | `ES-A1A2-LUNA-0692` | `a2-ab-und-zu` | `study.tip.text` | `Recuerda: irregular → ab und zu.` | `Recuerda: significa «de vez en cuando».` | **LABOT** |
| 693 | `ES-A1A2-LUNA-0693` | `a2-abfahren` | `study.translation` | `dejar` | `salir • partir` | **LABOT** |
| 694 | `ES-A1A2-LUNA-0694` | `a2-abfahren` | `study.examples[3].lv` | `kad atiet tavs vilciens?` | `¿Cuándo sale tu tren?` | **LABOT** |
| 695 | `ES-A1A2-LUNA-0695` | `a2-abfahren` | `study.examples[4].lv` | `poco a poco vamos por este camino.` | `Poco a poco nos ponemos en marcha por este camino.` | **LABOT** |
| 696 | `ES-A1A2-LUNA-0696` | `a2-abfahren` | `study.comparison[3].meaning` | `atiet / noiet` | `salir / partir` | **LABOT** |
| 697 | `ES-A1A2-LUNA-0697` | `a2-abfahren` | `study.tip.leftBlocks[0].text` | `Cuando se trata de horarios de tren o autobús, abfahren generalmente se traduce como licencia.` | `Cuando se trata de horarios de trenes o autobuses, abfahren generalmente se traduce como «salir» o «partir».` | **LABOT** |
| 698 | `ES-A1A2-LUNA-0698` | `a2-abfahren` | `study.important.text` | `abfahren nav “aizvest”.` | `Abfahren no significa «llevar».` | **LABOT** |
| 699 | `ES-A1A2-LUNA-0699` | `a2-abgeben` | `study.examples[0].lv` | `tengo que aplicar mañana.` | `Tengo que entregar esto mañana.` | **LABOT** |
| 700 | `ES-A1A2-LUNA-0700` | `a2-abgeben` | `study.important.text` | `abgeben nav tas pats, kas verkaufen vai ausstrahlen.` | `Abgeben no es lo mismo que verkaufen o ausstrahlen.` | **LABOT** |

## APPLY NOTE

- DE lauki ir **STRICT READ-ONLY**.
- Mainīt tikai tabulā norādīto `Field/path`.
- Pirms katras izmaiņas: actual current value === `CURRENT`.
- Ja exact-match nav: **SKIP** tikai konkrēto rindu.
- Pēc ieraksta: actual value === `NEW`.
- Nekāds papildu cleanup, pārfrāzēšana vai blakus lauku labošana nav atļauta.
