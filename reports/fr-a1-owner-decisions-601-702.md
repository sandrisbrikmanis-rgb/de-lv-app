# FR–DE A1 — OWNER DECISIONS (601–702)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Kartītes:** **102** (no **702** kopā) · **Rindas:** **140**
**WORK_BRANCH:** `cursor/fr-de-a1-full-audit-f5bc`
**Audita avots:** [fr-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-full-audit.md)
**DE:** STRICT READ-ONLY

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

> Viena rinda = viens precīzs **(Card ID, Field)** atradums. Kartei ar vairākiem atradumiem — vairākas rindas.

## GitHub

| | |
|---|---|
| Rediģēt | [fr-a1-owner-decisions-601-702.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/edit/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-601-702.md) |
| Raw | [fr-a1-owner-decisions-601-702.md](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-601-702.md) |

## Tabula

| Card # | Card ID | DE | Field | CURRENT | PROPOSED_FR | Severity | Category | Audit ID | OWNER STATUS | OWNER NEW | Piezīme |
|--------|---------|----|-------|---------|-------------|----------|----------|----------|--------------|-----------|---------|
| 601 | a1-Tochter-600 | Tochter | lv | Fille |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 602 | a1-Toilette-601 | Toilette | lv | Toilettes |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 603 | a1-Tomate-602 | Tomate | lv | Tomate |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 604 | a1-Treppe-603 | Treppe | frText | Escaliers | Escalier | MEDIUM | SEMANTICS | FR-A1-0384 | | | Le mot allemand est au singulier; « escalier » est l’équivalent français correspondant. |
| 605 | a1-trinken-604 | trinken | lv | Boire |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 606 | a1-tun-605 | tun | lv | Faire |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 607 | a1-Tür-606 | Tür | lv | La porte |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 608 | a1-U-Bahn-607 | U-Bahn | lv | Métro |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 609 | a1-über | über | study.comparison[0].meaning | Au-dessus/au-dessus/à travers | Au-dessus / à propos de / à travers | LOW | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0681 | | | Plusieurs traductions distinctes sont séparées par « / »; la formulation contient aussi un doublon. |
| 609 | a1-über | über | study.examples[1].lv | Nous parlons de temps. | Nous parlons du temps. | MEDIUM | TRANSLATION | FR-A1-0680 | | | « Parler du temps » est la formulation française naturelle pour parler de la météo. |
| 609 | a1-über | über | study.tip.text | Rappelez-vous : sujet de conversation → über • Au-dessus du tableau → über. | Rappelez-vous : sujet de conversation → über • Au-dessus de la table → über. | CRITICAL | FOREIGN_REMNANT | FR-A1-0682 | | | « Tableau » traduit mal « galda » dans cet exemple; il faut « table ». |
| 610 | a1-überall-609 | überall | lv | Partout |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 611 | a1-übermorgen-610 | übermorgen | lv | Après-demain |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 612 | a1-um | um | study.comparison[0].meaning | À / vers / vers | À / autour de / pour | LOW | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0686 | | | Trois traductions distinctes sont séparées par « / »; décision de présentation requise. |
| 612 | a1-um | um | study.examples[2].lv | Il fait le tour du coin. | Il tourne au coin de la rue. | MEDIUM | TRANSLATION | FR-A1-0684 | | | « Faire le tour du coin » est peu naturel et ne rend pas clairement le déplacement au coin. |
| 612 | a1-um | um | study.examples[3].lv | J'apprends à parler allemand. | J'apprends l'allemand pour pouvoir le parler. | MEDIUM | SEMANTICS | FR-A1-0685 | | | Le français actuel exprime seulement l'apprentissage, pas explicitement le but « pour parler allemand ». |
| 612 | a1-um | um | study.tip.text | Rappelez-vous : um acht = huit heures. | Rappelez-vous : um acht = à huit heures. | MEDIUM | TRANSLATION | FR-A1-0687 | | | L’heure française nécessite la préposition « à ». |
| 613 | a1-und-612 | und | lv | Et |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 614 | a1-unser-613 | unser | lv | Notre |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 615 | a1-unten-614 | unten | lv | En bas |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 616 | a1-unter | unter | study.comparison[0].meaning | Sous / entre | Sous / entre | LOW | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0689 | | | Deux traductions distinctes sont séparées par « / »; décision de présentation requise. |
| 616 | a1-unter | unter | study.comparison[1].meaning | Plus / pour | Au-dessus / à propos de | MEDIUM | TRANSLATION | FR-A1-0690 | | | « Plus » ne traduit pas « virs » et « pour » ne traduit pas « par » dans ces contrastes. |
| 616 | a1-unter | unter | study.examples[3].lv | Une lampe est suspendue au-dessus de la table. | Une lampe est suspendue sous la table. | HIGH | SEMANTICS | FR-A1-0688 | | | Le français contredit le sens allemand « unter »; « au-dessus » correspond à « über ». |
| 616 | a1-unter | unter | study.tip.text | Atceries : zem galda → unter dem Tisch. | Rappelez-vous : sous la table → unter dem Tisch. | CRITICAL | FOREIGN_REMNANT | FR-A1-0691 | | | Le texte actuel contient du letton au lieu du français. |
| 617 | a1-Vase-616 | Vase | lv | Vase |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 618 | a1-Vater-617 | Vater | lv | Père |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 619 | a1-verheiratet-618 | verheiratet | lv | Marié |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 620 | a1-verkaufen-619 | verkaufen | lv | Vendre |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 621 | a1-verlieren-620 | verlieren | lv | Perdre |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 622 | a1-verstehen | verstehen | study.comparison[3].meaning | Savoir | Connaître | MEDIUM | TRANSLATION | FR-A1-0694 | | | « Pazīt » signifie « connaître », tandis que « savoir » traduit « zināt ». |
| 622 | a1-verstehen | verstehen | study.examples[3].lv | Je peux parler allemand | Je comprends l'allemand. | HIGH | SEMANTICS | FR-A1-0693 | | | La phrase actuelle traduit « können », pas « verstehen ». |
| 622 | a1-verstehen | verstehen | study.translation | Pour comprendre | Comprendre | MEDIUM | TRANSLATION | FR-A1-0692 | | | L’infinitif français « pour comprendre » ajoute un but absent du mot allemand. |
| 623 | a1-versuchen-622 | versuchen | frText | Pour essayer | Essayer | MEDIUM | TRANSLATION | FR-A1-0385 | | | « Pour essayer » signifie « in order to try »; l’infinitif allemand correspond à « essayer ». |
| 624 | a1-viel-623 | viel | lv | Beaucoup |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 625 | a1-vielleicht-624 | vielleicht | frText | Peut être | Peut-être | MEDIUM | ORTHOGRAPHY | FR-A1-0386 | | | L’adverbe français s’écrit avec un trait d’union. |
| 626 | a1-vier-625 | vier | lv | Quatre |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 627 | a1-vierhundert-626 | vierhundert | lv | Quatre cents |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 628 | a1-vierte-627 | vierte | lv | Le quatrième |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 629 | a1-vierzehn-628 | vierzehn | lv | Quatorze |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 630 | a1-vierzehnte-629 | vierzehnte | lv | Le quatorzième |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 631 | a1-vierzig-630 | vierzig | lv | Quarante |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 632 | a1-vierzigste-631 | vierzigste | lv | Le quarantième |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 633 | a1-Vogel-632 | Vogel | lv | Un oiseau |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 634 | a1-voll-633 | voll | lv | Complet |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 635 | a1-vom | vom | study.translation | Depuis | Du / de la | HIGH | TRANSLATION | FR-A1-0695 | | | « Vom » est la contraction de « von dem » et signifie généralement « du », non « depuis ». |
| 636 | a1-von-635 | von | frText | Depuis | De | HIGH | TRANSLATION | FR-A1-0387 | | | « Depuis » exprime une durée ou un point de départ temporel; « von » se traduit ici par « de ». |
| 637 | a1-vor | vor | study.tip.text | Rappelez-vous : avant l'heure, devant la place → vor. | Rappelez-vous : avant dans le temps, devant dans l'espace → vor. | MEDIUM | NATURALNESS | FR-A1-0696 | | | « Devant la place » ne rend pas l’opposition temps/espace du texte source. |
| 638 | a1-Vorname-637 | Vorname | frText | Mot | Prénom | HIGH | TRANSLATION | FR-A1-0388 | | | « Mot » signifie word; « Vorname » désigne le prénom. |
| 639 | a1-Wald-638 | Wald | lv | Forêt |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 640 | a1-Wand-639 | Wand | lv | Mur |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 641 | a1-wann-640 | wann | lv | Quand |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 642 | a1-warm-641 | warm | lv | Chaud |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 643 | a1-warten-642 | warten | lv | Attendre |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 644 | a1-warum-643 | warum | lv | Pourquoi |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 645 | a1-was | was | study.examples[1].lv | Ce qui s'est passé? | Qu'est-ce qui s'est passé ? | HIGH | GRAMMAR | FR-A1-0698 | | | La phrase actuelle est une proposition relative, pas une question française complète. |
| 645 | a1-was | was | study.examples[5].lv | Quel est votre plat préféré ? | Quel est ton plat préféré ? | MEDIUM | COMPARISON | FR-A1-0699 | | | Le tutoiement du texte source est remplacé sans justification par le vouvoiement. |
| 645 | a1-was | was | study.examples[6].lv | Qu'est-ce que vous avez dit | Qu'est-ce que tu as dit ? | MEDIUM | GRAMMAR | FR-A1-0700 | | | Le pronom ne correspond pas au tutoiement source et le point d'interrogation manque. |
| 646 | a1-waschen-645 | waschen | frText | Se laver | Laver | MEDIUM | SEMANTICS | FR-A1-0389 | | | « Se laver » est pronominal et signifie wash oneself; « waschen » est ici le verbe transitif « laver ». |
| 647 | a1-sich waschen-646 | sich waschen | lv | Se laver |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 648 | a1-Weg-647 | Weg | lv | Route |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 649 | a1-Weihnachten-648 | Weihnachten | lv | Noël |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 650 | a1-Wein-649 | Wein | lv | Vin |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 651 | a1-weinen-650 | weinen | lv | Pleurer |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 652 | a1-weiß-651 | weiß | lv | Blanc |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 653 | a1-welcher-652 | welcher | frText | OMS | Lequel | HIGH | TRANSLATION | FR-A1-0390 | | | « OMS » est l’abréviation de l’Organisation mondiale de la santé; « welcher » signifie « lequel ». |
| 654 | a1-Welt-653 | Welt | lv | Le monde |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 655 | a1-wenig-654 | wenig | lv | Pas beaucoup |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 656 | a1-wenn | wenn | study.comparison[1].meaning | Ou dans une question indirecte | Si dans une question indirecte | HIGH | TRANSLATION | FR-A1-0701 | | | « Vai » signifie ici « si », pas la conjonction « ou ». |
| 656 | a1-wenn | wenn | study.comparison[2].meaning | En cas de question | Dans une question avec « quand » | MEDIUM | TRANSLATION | FR-A1-0702 | | | La traduction actuelle perd la référence au mot interrogatif « quand ». |
| 656 | a1-wenn | wenn | study.tip.text | Rappelez-vous : condition → wenn • La question "quand?" → veux. | Rappelez-vous : condition → wenn • La question « quand ? » → wann. | HIGH | SEMANTICS | FR-A1-0703 | | | « Veux » est le verbe français « vouloir » et remplace incorrectement le mot allemand « wann ». |
| 657 | a1-wer | wer | study.examples[0].lv | Qu'est-ce que c'est? | Qui est-ce ? | HIGH | SEMANTICS | FR-A1-0704 | | | « Qu'est-ce que c'est ? » correspond à « was », tandis que « wer » demande « qui ». |
| 657 | a1-wer | wer | study.examples[2].lv | Qu'est-ce qui arrive aujourd'hui ? | Qui arrive aujourd'hui ? | HIGH | SEMANTICS | FR-A1-0705 | | | « Qu'est-ce qui » demande une chose; « wer » demande une personne. |
| 657 | a1-wer | wer | study.examples[4].lv | Lequel d'entre vous parle allemand ? | Qui parmi vous parle allemand ? | MEDIUM | TRANSLATION | FR-A1-0706 | | | Avec « wer », « qui parmi vous » est plus fidèle que le pronom « lequel ». |
| 658 | a1-werden | werden | study.examples[1].lv | Il fait froid. | Il se met à faire froid. | HIGH | SEMANTICS | FR-A1-0707 | | | La phrase actuelle décrit un état; « werden » exprime le changement d’état. |
| 658 | a1-werden | werden | study.examples[3].lv | Je suis fatigué | Je deviens fatigué. | HIGH | SEMANTICS | FR-A1-0708 | | | « Je suis fatigué » traduit « sein », pas « werden »; le sens allemand est incohérent avec la source. |
| 659 | a1-wetter | Wetter | study.examples[0].lv | Quelle heure est-il aujourd'hui ? | Quel temps fait-il aujourd'hui ? | HIGH | SEMANTICS | FR-A1-0709 | | | La phrase actuelle demande l'heure, alors que « Wetter » concerne la météo. |
| 659 | a1-wetter | Wetter | study.examples[4].lv | Nous parlons de temps. | Nous parlons du temps. | MEDIUM | NATURALNESS | FR-A1-0710 | | | La tournure française naturelle est « parler du temps » pour parler de la météo. |
| 660 | a1-wichtig-659 | wichtig | lv | Important |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 661 | a1-wie | wie | study.examples[1].lv | Quel est ton nom | Comment t'appelles-tu ? | HIGH | TRANSLATION | FR-A1-0711 | | | La question source demande comment la personne s'appelle; la version actuelle est moins fidèle et incomplète. |
| 662 | a1-wieder-661 | wieder | lv | Encore |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 663 | a1-wie viel-662 | wie viel | lv | Combien |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 664 | a1-Wind-663 | Wind | lv | Le vent |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 665 | a1-Zigarette-664 | Zigarette | lv | Une cigarette |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 666 | a1-Zimmer-665 | Zimmer | frText | Chambre | La chambre | MEDIUM | GRAMMAR | FR-A1-0391 | | | Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire. |
| 667 | a1-Zitrone-666 | Zitrone | frText | Citron | Le citron | MEDIUM | GRAMMAR | FR-A1-0392 | | | Le nom français est masculin et l’article défini manque dans la fiche. |
| 668 | a1-Zoo-667 | Zoo | lv | Le zoo |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 669 | a1-zu | zu | frMain | À • À | À | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0712 | | | The learner-facing field combines distinct meanings with a separator; owner decision is required. |
| 669 | a1-zu | zu | study.comparison[0].meaning | À / à / aussi / infinitif | À / à / trop / infinitif | HIGH | TRANSLATION | FR-A1-0714 | | | In this contrast, Latvian pārāk corresponds to French trop, not aussi. |
| 670 | a1-Zucker-669 | Zucker | frText | Sucre | Le sucre | MEDIUM | GRAMMAR | FR-A1-0393 | | | Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire. |
| 671 | a1-zuerst-670 | zuerst | lv | Tout d'abord |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 672 | a1-zug | Zug | study.comparison[1].meaning | Chemin de fer / voyager en train | Chemin de fer | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0715 | | | The comparison field lists distinct meanings with a separator; owner decision is required. |
| 673 | a1-zum | zum | frMain | À • À | À | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0716 | | | The learner-facing field combines distinct meanings with a separator; owner decision is required. |
| 673 | a1-zum | zum | study.comparison[0].meaning | À/chez (qui ?) | À | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0718 | | | The comparison field lists distinct translations with a separator; owner decision is required. |
| 673 | a1-zum | zum | study.comparison[1].meaning | À/à (famille de l'épouse) | À (féminin) | HIGH | TRANSLATION | FR-A1-0719 | | | Latvian siev. dzimte means feminine gender, not the wife's family. |
| 673 | a1-zum | zum | study.comparison[2].meaning | À / à / aussi | À / à / trop | HIGH | TRANSLATION | FR-A1-0720 | | | In this contrast, Latvian pārāk corresponds to French trop, not aussi. |
| 673 | a1-zum | zum | study.comparison[3].meaning | Vers (villes/pays) | Vers | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0721 | | | The comparison field contains separated alternatives/context labels; owner decision is required. |
| 674 | a1-zumachen-673 | zumachen | frText | Gros plan | Fermer | CRITICAL | TRANSLATION | FR-A1-0394 | | | « Gros plan » signifie close-up; zumachen signifie fermer. |
| 675 | a1-zurück-674 | zurück | frText | Dos | En arrière | HIGH | TRANSLATION | FR-A1-0395 | | | « Dos » est le nom d’une partie du corps; zurück est un adverbe signifiant en arrière. |
| 676 | a1-zusammen-675 | zusammen | lv | Ensemble |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 677 | a1-zu viel-676 | zu viel | lv | Trop |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 678 | a1-zwanzig-677 | zwanzig | lv | Vingt |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 679 | a1-zwanzigste-678 | zwanzigste | lv | Le vingtième |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 680 | a1-zwei-679 | zwei | lv | Deux |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 681 | a1-zweihundert-680 | zweihundert | frText | Deux cent | Deux cents | MEDIUM | ORTHOGRAPHY | FR-A1-0396 | | | « Cent » prend un s dans « deux cents » lorsqu’il n’est pas suivi d’un autre nombre. |
| 682 | a1-zweimal-681 | zweimal | lv | Deux fois |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 683 | a1-zweite-682 | zweite | lv | La deuxième |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 684 | a1-Zwiebel-683 | Zwiebel | frText | Oignon | L’oignon | MEDIUM | GRAMMAR | FR-A1-0397 | | | Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire. |
| 685 | a1-zwischen-684 | zwischen | lv | Entre |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 686 | a1-zwölf-685 | zwölf | lv | Douze |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 687 | a1-zwölfte-686 | zwölfte | lv | Le douzième |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 688 | a1-fernsehen | fernsehen | study.important.text | Fernsehen = verbe (ich sehe fougère). das Fernsehen = nom, singulier seulement. | Fernsehen = verbe (ich sehe fern). das Fernsehen = nom, singulier seulement. | CRITICAL | FOREIGN_REMNANT | FR-A1-0723 | | | Fougère is an erroneous French substitution for the German word fern. |
| 688 | a1-fernsehen | fernsehen | study.tip.leftBlocks[0].text | Fernsehen (ich sehe fougère) est utilisé pour l'action. Das Fernsehen est utilisé pour un programme … | Fernsehen (ich sehe fern) est utilisé pour l'action. Das Fernsehen est utilisé pour un programme ou … | CRITICAL | FOREIGN_REMNANT | FR-A1-0722 | | | Fougère is an erroneous French substitution for the German word fern. |
| 689 | a1-fernsehen-study | Fernsehen | lv | Télévision |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 690 | a1-appetit | Appetit | lv | Appétit |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 691 | a1-essen | essen | study.examples[1].lv | Que veux-tu manger | Que voulez-vous manger ? | MEDIUM | SEMANTICS | FR-A1-0724 | | | The Latvian source uses the formal/plural pronoun jūs, so French tu is inconsistent; punctuation is also missing. |
| 692 | a1-essen-study | Essen | frMain | Alimentation • Repas | Alimentation | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0725 | | | The learner-facing field combines distinct meanings with a separator; owner decision is required. |
| 692 | a1-essen-study | Essen | study.examples[1].lv | Que veux-tu manger | Que voulez-vous manger ? | MEDIUM | SEMANTICS | FR-A1-0727 | | | The Latvian source uses the formal/plural pronoun jūs, so French tu is inconsistent; punctuation is also missing. |
| 693 | a1-gemuese | Gemüse | lv | Légumes |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 694 | a1-obst | Obst | lv | Fruits |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 695 | a1-ferien | Ferien | study.comparison[0].meaning | Pause scolaire/études (dsk. uniquement) | Pause scolaire/études (au pluriel uniquement) | MEDIUM | FOREIGN_REMNANT | FR-A1-0731 | | | The abbreviation dsk. is not French and should be replaced with a French grammatical label. |
| 695 | a1-ferien | Ferien | study.comparison[1].meaning | Congé du travail (uniquement tous) | Congé du travail (au singulier uniquement) | HIGH | GRAMMAR | FR-A1-0732 | | | Tous is incorrect here; the Latvian source specifies singular, which is au singulier in French. |
| 695 | a1-ferien | Ferien | study.examples[0].lv | Le week-end, nous allons à la mer. | Pendant les vacances, nous allons à la mer. | HIGH | SEMANTICS | FR-A1-0728 | | | Ferien means holidays, not specifically the weekend. |
| 695 | a1-ferien | Ferien | study.examples[2].lv | Que fais-tu en vacances | Que faites-vous pendant les vacances ? | MEDIUM | SEMANTICS | FR-A1-0729 | | | The Latvian source uses formal/plural jūs, so French tu is inconsistent; punctuation is also missing. |
| 695 | a1-ferien | Ferien | study.examples[3].lv | L'école est fermée les jours fériés. | L'école est fermée pendant les vacances scolaires. | HIGH | TRANSLATION | FR-A1-0730 | | | Jours fériés means public holidays, whereas Ferien here means school holidays. |
| 696 | a1-urlaub | Urlaub | study.comparison[0].meaning | Congé du travail (uniquement tous) | Congé du travail (au singulier uniquement) | HIGH | GRAMMAR | FR-A1-0734 | | | Tous is incorrect here; the Latvian source specifies singular, which is au singulier in French. |
| 696 | a1-urlaub | Urlaub | study.comparison[1].meaning | Pause scolaire/études (dsk. uniquement) | Pause scolaire/études (au pluriel uniquement) | MEDIUM | FOREIGN_REMNANT | FR-A1-0735 | | | The abbreviation dsk. is not French and should be replaced with a French grammatical label. |
| 696 | a1-urlaub | Urlaub | study.examples[2].lv | J'ai des vacances la semaine prochaine. | Je suis en vacances la semaine prochaine. | MEDIUM | NATURALNESS | FR-A1-0733 | | | French normally says être en vacances rather than avoir des vacances in this context. |
| 697 | a1-Stadt-696 | Stadt | frText | Ville | La ville | MEDIUM | GRAMMAR | FR-A1-0398 | | | Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire. |
| 698 | a1-Staat-697 | Staat | frText | Pays | L’État | HIGH | SEMANTICS | FR-A1-0399 | | | Staat signifie « État »; « pays » correspond plutôt à Land ou Staat dans un autre sens contextuel. |
| 699 | a1-uhr | Uhr | study.examples[0].lv | Il est huit (huit heures). | Il est huit heures. | MEDIUM | GRAMMAR | FR-A1-0736 | | | « Il est huit » est incomplet en français standard ; la parenthèse crée une formulation maladroite. |
| 699 | a1-uhr | Uhr | study.examples[1].lv | Il est huit (huit heures). | Il est huit heures. | MEDIUM | GRAMMAR | FR-A1-0737 | | | « Il est huit » est incomplet en français standard ; la parenthèse crée une formulation maladroite. |
| 699 | a1-uhr | Uhr | study.examples[5].lv | Appareil/heure sur l'horloge • Die Zeit | Appareil ou heure sur l'horloge | HIGH | FOREIGN_REMNANT | FR-A1-0738 | | | « Die Zeit » est un segment allemand résiduel dans un champ français. |
| 700 | a1-zeit | Zeit | frMain | Temps (instant / période de temps) | Temps (instant ou période de temps) | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0739 | | | La barre oblique sépare deux sens dans le champ learner-facing ; une formulation unifiée est préférable. |
| 700 | a1-zeit | Zeit | study.examples[1].lv | Je n'ai pas le temps | Je n'ai pas le temps. | LOW | ORTHOGRAPHY | FR-A1-0741 | | | Le point final manque dans cet exemple français. |
| 700 | a1-zeit | Zeit | study.examples[2].lv | As-tu le temps | As-tu le temps ? | LOW | ORTHOGRAPHY | FR-A1-0742 | | | Le point d'interrogation manque dans cette question française. |
| 701 | a1-einmal | einmal | frMain | Une fois • Une fois | Une fois | LOW | STUDY | FR-A1-0743 | | | La traduction est répétée deux fois, ce qui crée une entrée d'étude redondante. |
| 701 | a1-einmal | einmal | study.examples[0].lv | J'étais une fois à Berlin. | Je suis allé une fois à Berlin. | MEDIUM | NATURALNESS | FR-A1-0745 | | | « J'étais une fois à Berlin » est un calque peu naturel pour exprimer une visite passée. |
| 701 | a1-einmal | einmal | study.examples[1].lv | J'étais une fois à Berlin. | Je suis allé une fois à Berlin. | MEDIUM | NATURALNESS | FR-A1-0746 | | | « J'étais une fois à Berlin » est un calque peu naturel pour exprimer une visite passée. |
| 702 | a1-noch-mal | noch mal | study.examples[1].lv | Encore une fois s'il te plaît | Encore une fois, s'il vous plaît. | LOW | NATURALNESS | FR-A1-0747 | | | La source est polie ; « te » est incohérent avec « s'il vous plaît », et la ponctuation manque. |
| 702 | a1-noch-mal | noch mal | study.examples[2].lv | Dis-le encore | Dis-le encore. | LOW | ORTHOGRAPHY | FR-A1-0748 | | | Le point final manque dans cet exemple français. |

## Lokālais kopsavilkums

| Metrika | Skaits |
|---------|--------|
| Kartītes diapazonā | 102 |
| Rindas kopā | 140 |
| Atradumu rindas | 78 |
| NO_FINDING rindas | 62 |
| Kartītes ar atradumiem | 40 |

> Aizpildiet kolonnas **OWNER STATUS** un **OWNER NEW**. PROPOSED_FR nav automātisks OWNER lēmums.