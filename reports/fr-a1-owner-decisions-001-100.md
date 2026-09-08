# FR–DE A1 — OWNER DECISIONS (1–100)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Kartītes:** **100** (no **702** kopā) · **Rindas:** **135**
**WORK_BRANCH:** `cursor/fr-de-a1-full-audit-f5bc`
**Audita avots:** [fr-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-full-audit.md)
**DE:** STRICT READ-ONLY

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

> Viena rinda = viens precīzs **(Card ID, Field)** atradums. Kartei ar vairākiem atradumiem — vairākas rindas.

## GitHub

| | |
|---|---|
| Rediģēt | [fr-a1-owner-decisions-001-100.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/edit/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-001-100.md) |
| Raw | [fr-a1-owner-decisions-001-100.md](https://raw.githubusercontent.com/sandrisbrikmanis-rgb/de-lv-app/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-001-100.md) |

## Tabula

| Card # | Card ID | DE | Field | CURRENT | PROPOSED_FR | Severity | Category | Audit ID | OWNER STATUS | OWNER NEW | Piezīme |
|--------|---------|----|-------|---------|-------------|----------|----------|----------|--------------|-----------|---------|
| 1 | a1-Apfel-0 | Apfel | lv | Une pomme |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 2 | a1-Brot-1 | Brot | lv | Pain |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 3 | a1-Wasser-2 | Wasser | lv | Eau |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 4 | a1-Haus-3 | Haus | lv | Maison |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 5 | a1-lernen-4 | lernen | frText | Pour apprendre | Apprendre | MEDIUM | TRANSLATION | FR-A1-0294 | | | « Pour apprendre » signifie « afin d'apprendre » et ajoute une notion de but absente de l'infinitif allemand. |
| 6 | a1-sprechen-study | sprechen | study.comparison[1].meaning | Raconter (un texte spécifique) | Dire (un texte précis) | HIGH | SEMANTICS | FR-A1-0401 | | | Raconter signifie narrer; le contraste attendu est dire, non raconter. |
| 6 | a1-sprechen-study | sprechen | study.examples[2].lv | Je parle allemand | Elle parle avec son professeur. | HIGH | TRANSLATION | FR-A1-0400 | | | La phrase française ne correspond ni au sujet ni au complément de la source. |
| 7 | a1-klein-study | klein | study.examples[1].lv | La pièce est petite. | L'enfant est encore petit. | HIGH | TRANSLATION | FR-A1-0402 | | | La traduction reprend la phrase précédente au lieu de traduire l'enfant. |
| 7 | a1-klein-study | klein | study.examples[2].lv | L'enfant est encore petit. | J'ai un petit sac. | HIGH | TRANSLATION | FR-A1-0403 | | | La traduction correspond à l'exemple précédent, pas au sac. |
| 8 | a1-alle-7 | alle | lv | Tout le monde |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 9 | a1-allein-8 | allein | lv | Seul |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 10 | a1-alles-9 | alles | lv | Tout |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 11 | a1-alt-10 | alt | lv | Vieux |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 12 | a1-Alter-11 | Alter | lv | Âge |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 13 | a1-an | an | study.examples[0].lv | Sur le mur / sur le mur | Au mur / sur le mur | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0405 | | | Deux formulations distinctes sont séparées par une barre et la répétition semble accidentelle. |
| 13 | a1-an | an | study.examples[1].lv | A la fenêtre | À la fenêtre | LOW | ORTHOGRAPHY | FR-A1-0406 | | | La préposition française prend un accent grave. |
| 13 | a1-an | an | study.tip.text | Atceries : tarte sienas/loga/malas → an. | À retenir : au mur/à la fenêtre/au bord → an. | CRITICAL | FOREIGN_REMNANT | FR-A1-0407 | | | Le texte contient du letton et « tarte », qui n'est pas une traduction française correcte. |
| 14 | a1-Anfang-13 | Anfang | lv | Début |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 15 | a1-anfangen-14 | anfangen | frText | Pour commencer | Commencer | MEDIUM | TRANSLATION | FR-A1-0295 | | | « Pour commencer » signifie « afin de commencer » ; le lemme allemand correspond à « commencer ». |
| 16 | a1-anders-15 | anders | frText | Sinon | Autrement | HIGH | SEMANTICS | FR-A1-0296 | | | « Sinon » signifie « otherwise » ou « if not » ; « anders » signifie « autrement » ou « différemment ». |
| 17 | a1-anrufen-16 | anrufen | frText | Pour appeler | Appeler | MEDIUM | TRANSLATION | FR-A1-0297 | | | « Pour appeler » ajoute une notion de but ; l'infinitif allemand correspond à « appeler ». |
| 18 | a1-ab | ab | study.comparison[2].meaning | De l'intérieur | À partir de l'intérieur | HIGH | SEMANTICS | FR-A1-0412 | | | La formulation actuelle traduit plutôt aus; elle ne présente pas le point de départ de ab. |
| 18 | a1-ab | ab | study.examples[0].lv | A partir d'aujourd'hui | À partir d'aujourd'hui | LOW | ORTHOGRAPHY | FR-A1-0409 | | | La préposition À doit porter un accent grave. |
| 18 | a1-ab | ab | study.examples[1].lv | A partir de lundi | À partir de lundi | LOW | ORTHOGRAPHY | FR-A1-0410 | | | La préposition À doit porter un accent grave. |
| 18 | a1-ab | ab | study.examples[2].lv | À partir de 8 | À partir de 8 h | LOW | NATURALNESS | FR-A1-0411 | | | L'heure est incomplète en français sans indication temporelle. |
| 18 | a1-ab | ab | study.translation | Depuis | À partir de | HIGH | SEMANTICS | FR-A1-0408 | | | Ab indique un point de départ; depuis exprime généralement une durée écoulée. |
| 19 | a1-Abend-18 | Abend | lv | Soirée |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 20 | a1-Abendessen-19 | Abendessen | lv | Dîner |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 21 | a1-abends-20 | abends | lv | Dans la soirée |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 22 | a1-aber | aber | study.comparison[0].meaning | Contraire • Objection • Cependant | Cependant | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0413 | | | Le champ learner-facing contient plusieurs équivalents séparés par des puces. |
| 22 | a1-aber | aber | study.comparison[1].meaning | Non • Mais | Pas…, mais… | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0414 | | | La structure française est incomplète et plusieurs éléments sont séparés par une puce. |
| 22 | a1-aber | aber | study.tip.text | Atceries : pretstats/iebilde → aber. | À retenir : opposition/objection → aber. | CRITICAL | FOREIGN_REMNANT | FR-A1-0415 | | | Le texte du champ français est entièrement en letton. |
| 23 | a1-achten-22 | achten | frText | A observer | Faire attention | HIGH | TRANSLATION | FR-A1-0298 | | | « A observer » signifie observer ; « achten » signifie faire attention. L'accent de « À » manque aussi. |
| 24 | a1-Adresse-23 | Adresse | lv | Adresse |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 25 | a1-Affe-24 | Affe | lv | Singe |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 26 | a1-Album-25 | Album | lv | Album |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 27 | a1-also | also | study.comparison[0].meaning | Alors • Donc | Donc | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0416 | | | Le champ learner-facing contient plusieurs traductions séparées par une puce. |
| 27 | a1-also | also | study.comparison[1].meaning | Aussi | Également | HIGH | SEMANTICS | FR-A1-0417 | | | Aussi en français signifie généralement auch; ce sens ne correspond pas à also allemand. |
| 27 | a1-also | also | study.tip.text | Rappelez-vous : conclusion → aussi. | À retenir : conclusion → donc. | HIGH | SEMANTICS | FR-A1-0418 | | | Le mot français « aussi » correspond à auch, pas à also dans ce contexte. |
| 28 | a1-Ameise-27 | Ameise | lv | Fourmi |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 29 | a1-ankommen-28 | ankommen | frText | Pour arriver | Arriver | MEDIUM | TRANSLATION | FR-A1-0299 | | | « Pour arriver » signifie « afin d'arriver » ; le lemme allemand correspond à « arriver ». |
| 30 | a1-anschauen-29 | anschauen | lv | Regarder |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 31 | a1-anziehen-30 | anziehen | frText | Mettez | Mettre | MEDIUM | GRAMMAR | FR-A1-0300 | | | « Mettez » est un impératif à la 2e personne du pluriel, tandis que « anziehen » est un infinitif. |
| 32 | a1-anhalten-31 | anhalten | frText | Pour arrêter | S'arrêter | MEDIUM | SEMANTICS | FR-A1-0301 | | | La source lettone indique l'action de s'arrêter ; « arrêter » sans pronom est transitif et change le sens. |
| 33 | a1-Angst-32 | Angst | lv | Peur |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 34 | a1-angenehm-33 | angenehm | lv | Agréable |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 35 | a1-Antenne-34 | Antenne | lv | Antenne |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 36 | a1-Antwort-35 | Antwort | lv | La réponse |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 37 | a1-antworten-36 | antworten | frText | Pour répondre | Répondre | MEDIUM | TRANSLATION | FR-A1-0302 | | | « Pour répondre » ajoute une notion de but ; l'infinitif allemand correspond à « répondre ». |
| 38 | a1-Anzug-37 | Anzug | lv | Un costume |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 39 | a1-Apfelbaum-38 | Apfelbaum | lv | Pommier |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 40 | a1-Apfelsine-39 | Apfelsine | lv | Une orange |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 41 | a1-Aprikose-40 | Aprikose | lv | Abricot |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 42 | a1-April-41 | April | lv | Avril |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 43 | a1-Arbeit-42 | Arbeit | lv | Travail |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 44 | a1-arbeiten-43 | arbeiten | lv | Travailler |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 45 | a1-Arm-44 | Arm | frText | Main | Bras | HIGH | SEMANTICS | FR-A1-0303 | | | « Arm » signifie « bras » ; « main » correspond à l'allemand « Hand ». |
| 46 | a1-Armbanduhr-45 | Armbanduhr | lv | Montre-bracelet |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 47 | a1-Ärztin-46 | Ärztin | frText | Un médecin | Une médecin | HIGH | GRAMMAR | FR-A1-0304 | | | « Ärztin » est explicitement féminin ; l'article masculin « un » ne respecte pas le genre. |
| 48 | a1-atmen-47 | atmen | lv | Respirer |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 49 | a1-auch-study | auch | study.examples[1].lv | Je viens aussi | Elle travaille aussi ici. | HIGH | TRANSLATION | FR-A1-0419 | | | La traduction ne correspond ni au sujet ni au verbe de la source. |
| 49 | a1-auch-study | auch | study.examples[2].lv | Elle travaille également ici. | Je vous souhaite aussi une bonne journée. | HIGH | TRANSLATION | FR-A1-0420 | | | La phrase française traduit l'exemple précédent, pas le souhait de bonne journée. |
| 50 | a1-auf | auf | study.comparison[0].meaning | Vers (surface ou vers le haut) | Sur / vers le haut | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0422 | | | La formulation mélange deux valeurs et ne rend pas clairement la valeur de surface. |
| 50 | a1-auf | auf | study.comparison[1].meaning | À (surface verticale) | Sur (surface verticale) | HIGH | SEMANTICS | FR-A1-0423 | | | Pour une surface, le français emploie sur, non à. |
| 50 | a1-auf | auf | study.comparison[2].meaning | À l'intérieur | Sur / à | HIGH | SEMANTICS | FR-A1-0424 | | | « À l'intérieur » correspond plutôt à in; auf exprime une surface ou une direction selon le contexte. |
| 50 | a1-auf | auf | study.translation | À | Sur / à | HIGH | SEMANTICS | FR-A1-0421 | | | Auf exprime notamment sur et certains déplacements vers; « à » seul est trop limité. |
| 51 | a1-aufmachen-50 | aufmachen | frText | Pour ouvrir | Ouvrir | MEDIUM | TRANSLATION | FR-A1-0305 | | | « Pour ouvrir » signifie « afin d'ouvrir » ; le lemme allemand correspond à « ouvrir ». |
| 52 | a1-aufpassen-51 | aufpassen | frText | Sois prudent | Faire attention | MEDIUM | GRAMMAR | FR-A1-0306 | | | « Sois prudent » est un impératif adressé à une personne ; « aufpassen » est ici présenté à l'infinitif. |
| 53 | a1-aufstehen-52 | aufstehen | lv | Se lever |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 54 | a1-aufwärts-53 | aufwärts | frText | En haut | Vers le haut | MEDIUM | SEMANTICS | FR-A1-0307 | | | « En haut » indique une position ; « aufwärts » exprime une direction ascendante, « vers le haut ». |
| 55 | a1-Auge-54 | Auge | lv | Œil |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 56 | a1-Augenblick-55 | Augenblick | lv | Un instant |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 57 | a1-August-56 | August | lv | Août |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 58 | a1-aus | aus | study.comparison[2].meaning | À partir d'un point ou d'une heure | À partir d'un point ou d'un moment | HIGH | SEMANTICS | FR-A1-0426 | | | Cette définition correspond à ab, non à aus. |
| 59 | a1-auf dem Boden-58 | auf dem Boden | lv | Sur le sol |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 60 | a1-auf dem Bahnhof-59 | auf dem Bahnhof | frText | A la gare | À la gare | LOW | ORTHOGRAPHY | FR-A1-0308 | | | The French preposition requires a grave accent: « À ». |
| 61 | a1-aufs | aufs | study.comparison[0].meaning | À un cas précis (Akk.) | Vers une chose précise (accusatif) | MEDIUM | SEMANTICS | FR-A1-0429 | | | Un cas grammatical n'est pas une chose; la définition doit expliquer la destination. |
| 61 | a1-aufs | aufs | study.comparison[2].meaning | Sur une surface verticale | Près d'une surface verticale | HIGH | SEMANTICS | FR-A1-0430 | | | Une surface verticale relève plutôt de an; aufs exprime une destination sur une surface. |
| 61 | a1-aufs | aufs | study.comparison[4].meaning | À/chez (qui ?) | Vers / chez quelqu'un | MEDIUM | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0431 | | | Le champ contient plusieurs équivalents séparés par une barre. |
| 61 | a1-aufs | aufs | study.examples[6].lv | Venez vite au bateau ! | Montez vite sur le bateau ! | HIGH | TRANSLATION | FR-A1-0428 | | | Aufs Boot indique le mouvement vers le bateau ou à bord, pas simplement « au bateau ». |
| 62 | a1-Augenbraue-61 | Augenbraue | lv | Sourcil |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 63 | a1-Augenfarbe-62 | Augenfarbe | lv | Couleur des yeux |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 64 | a1-Auto-63 | Auto | lv | Voiture |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 65 | a1-Bad-64 | Bad | lv | Salle de bain |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 66 | a1-Badezimmer-65 | Badezimmer | lv | Salle de bain |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 67 | a1-Schwimmbad-66 | Schwimmbad | lv | Piscine |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 68 | a1-Sauna-67 | Sauna | lv | Sauna |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 69 | a1-baden | baden | study.comparison[0].meaning | Nager / être dans l'eau / se laver | Se baigner / être dans l'eau / se laver | HIGH | SEMANTICS | FR-A1-0436 | | | Le premier équivalent français traduit schwimmen, pas baden. |
| 69 | a1-baden | baden | study.examples[0].lv | Je vais nager | Je vais me baigner. | HIGH | TRANSLATION | FR-A1-0433 | | | La traduction française emploie nager au lieu de se baigner. |
| 69 | a1-baden | baden | study.examples[1].lv | Nous allons nager dans le lac. | Nous allons nous baigner dans le lac. | HIGH | TRANSLATION | FR-A1-0434 | | | Le sens de baden est se baigner, non pratiquer la nage. |
| 69 | a1-baden | baden | study.examples[3].lv | Je vais nager tous les lundis. | Je me baigne tous les lundis. | HIGH | TRANSLATION | FR-A1-0435 | | | Le champ est rattaché à baden; la traduction doit employer se baigner. |
| 69 | a1-baden | baden | study.tip.text | N'oubliez pas : reposez-vous dans l'eau → baden • Mouvement de nage → schwimmen. | À retenir : se baigner dans l'eau → baden • Mouvement de nage → nager. | CRITICAL | FOREIGN_REMNANT | FR-A1-0437 | | | Le mot allemand schwimmen reste dans le texte français et « reposez-vous » ne signifie pas se baigner. |
| 69 | a1-baden | baden | study.translation | Nager | Se baigner | HIGH | SEMANTICS | FR-A1-0432 | | | Baden signifie se baigner; nager correspond principalement à schwimmen. |
| 70 | a1-bald-69 | bald | lv | Bientôt |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 71 | a1-Balkon-70 | Balkon | lv | Balcon |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 72 | a1-Ball-71 | Ball | lv | Balle |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 73 | a1-Banane-72 | Banane | lv | Banane |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 74 | a1-Bauch-73 | Bauch | frText | Estomac | Ventre | MEDIUM | SEMANTICS | FR-A1-0309 | | | « Bauch » means belly or abdomen; « estomac » corresponds more closely to German « Magen ». |
| 75 | a1-Baum-74 | Baum | lv | Un arbre |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 76 | a1-bedeuten-75 | bedeuten | lv | Signifier |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 77 | a1-Erdbeere-76 | Erdbeere | lv | Fraise |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 78 | a1-beginnen-77 | beginnen | frText | Pour commencer | Commencer | MEDIUM | TRANSLATION | FR-A1-0310 | | | The current phrase means « in order to begin »; the German infinitive is simply « commencer ». |
| 79 | a1-bei | bei | study.comparison[1].meaning | Au mur, au bord, au rivage, au bord de la surface | Près du mur, au bord, près du rivage, au bord de la surface | MEDIUM | SEMANTICS | FR-A1-0439 | | | Au mur signifie généralement sur le mur; bei exprime ici la proximité. |
| 79 | a1-bei | bei | study.comparison[2].meaning | Qui va (direction) | Aller chez quelqu'un (direction) | HIGH | SEMANTICS | FR-A1-0440 | | | La formulation actuelle est agrammaticale et ne rend pas le sens directionnel. |
| 79 | a1-bei | bei | study.tip.text | N'oubliez pas : à personne/lieu/entreprise → bei. | À retenir : chez une personne, dans un lieu ou auprès d'une entreprise → bei. | MEDIUM | GRAMMAR | FR-A1-0441 | | | La suite « à personne/lieu/entreprise » est agrammaticale et trop elliptique. |
| 79 | a1-bei | bei | study.translation | À | Chez / auprès de | MEDIUM | SEMANTICS | FR-A1-0438 | | | Bei se traduit selon le contexte par chez ou auprès de; « à » seul est trop vague. |
| 80 | a1-beide-79 | beide | lv | Les deux |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 81 | a1-Bein-80 | Bein | lv | Jambe |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 82 | a1-Beispiel-81 | Beispiel | lv | Un exemple |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 83 | a1-bekommen-82 | bekommen | frText | Pour recevoir | Recevoir | MEDIUM | TRANSLATION | FR-A1-0311 | | | The current phrase means « in order to receive »; the German infinitive is simply « recevoir ». |
| 84 | a1-benutzen-83 | benutzen | lv | Utiliser |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 85 | a1-Berg-84 | Berg | lv | Montagne |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 86 | a1-besser-85 | besser | lv | Mieux |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 87 | a1-beste-86 | beste | lv | Le meilleur |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 88 | a1-Besuch-87 | Besuch | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | FR-A1-0002 | | | Trūkst Study objekta vārdam Besuch |
| 89 | a1-Besucher-88 | Besucher | lv | Visiteur |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 90 | a1-besuchen-89 | besuchen | frText | Pour assister • Pour visiter | Visiter | HIGH | MULTIPLE_TRANSLATIONS_DETECTED | FR-A1-0312 | | | The learner-facing field contains multiple translations; « assister » means attend, not visit. |
| 90 | a1-besuchen-89 | besuchen | study | (nav Study objekta) | Pievienot pilnu Study objektu pēc LV etalona | HIGH | STRUCTURE | FR-A1-0003 | | | Trūkst Study objekta vārdam besuchen |
| 91 | a1-Bett-90 | Bett | lv | Le lit |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 92 | a1-bis | bis | study.examples[0].lv | J'attends votre arrivée. | J'attends ton arrivée. | MEDIUM | GRAMMAR | FR-A1-0442 | | | Le letton emploie le possessif informel « ta », mais le français utilise le vouvoiement. |
| 92 | a1-bis | bis | study.examples[3].lv | Pour l'instant je n'ai rien compris. | Jusqu'à présent, je n'ai rien compris. | MEDIUM | SEMANTICS | FR-A1-0443 | | | « Līdz šim » signifie « jusqu'à présent », et non « pour l'instant ». |
| 93 | a1-bisschen-92 | bisschen | lv | Un peu |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 94 | a1-bitte | bitte | study.comparison[0].meaning | lūdzu | S'il vous plaît | CRITICAL | FOREIGN_REMNANT | FR-A1-0446 | | | Le champ français contient un mot letton au lieu de sa traduction française. |
| 94 | a1-bitte | bitte | study.comparison[1].meaning | lūgums | Demande | CRITICAL | FOREIGN_REMNANT | FR-A1-0447 | | | Le champ français contient un mot letton au lieu de sa traduction française. |
| 94 | a1-bitte | bitte | study.examples[0].lv | S'il te plaît! | Une tasse de café, s'il vous plaît. | HIGH | SEMANTICS | FR-A1-0444 | | | La phrase française omet la demande de café présente dans la source. |
| 94 | a1-bitte | bitte | study.examples[1].lv | S'il te plaît! | Entrez, s'il vous plaît. | HIGH | SEMANTICS | FR-A1-0445 | | | La traduction omet l'instruction « entrez » présente dans la source. |
| 95 | a1-bitte-study | Bitte | study.comparison[0].meaning | lūgums | Demande | CRITICAL | FOREIGN_REMNANT | FR-A1-0450 | | | Le champ français contient un mot letton au lieu de sa traduction française. |
| 95 | a1-bitte-study | Bitte | study.comparison[1].meaning | lūdzu | S'il vous plaît | CRITICAL | FOREIGN_REMNANT | FR-A1-0451 | | | Le champ français contient un mot letton au lieu de sa traduction française. |
| 95 | a1-bitte-study | Bitte | study.examples[1].lv | S'il te plaît! | Il exécute ma demande. | HIGH | SEMANTICS | FR-A1-0448 | | | La phrase française est une formule de politesse et ne traduit pas « il exécute ma demande ». |
| 95 | a1-bitte-study | Bitte | study.examples[2].lv | Une tasse de café, s'il vous plaît. | Elle a deux demandes. | HIGH | SEMANTICS | FR-A1-0449 | | | La traduction française ne correspond pas au sujet ni au nombre de demandes de la source. |
| 96 | a1-billig-95 | billig | lv | Bon marché |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 97 | a1-Bier-96 | Bier | lv | Bière |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 98 | a1-Bild-97 | Bild | lv | Image |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 99 | a1-bitten-98 | bitten | lv | Demander |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |
| 100 | a1-Blatt-99 | Blatt | lv | Page |  | — | NO_FINDING | — | | | Nav audit atraduma — apstiprināt CURRENT vai norādīt NEW |

## Lokālais kopsavilkums

| Metrika | Skaits |
|---------|--------|
| Kartītes diapazonā | 100 |
| Rindas kopā | 135 |
| Atradumu rindas | 70 |
| NO_FINDING rindas | 65 |
| Kartītes ar atradumiem | 35 |

> Aizpildiet kolonnas **OWNER STATUS** un **OWNER NEW**. PROPOSED_FR nav automātisks OWNER lēmums.