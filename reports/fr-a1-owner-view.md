# FR–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `a2a769e8600291411a7a66eab0483dd4659c9151`
**WORK_BRANCH:** `cursor/fr-de-a1-full-audit-f5bc`
**Audit PR:** [#603](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/603)
**SCOPE:** FR–DE A1 (`data/fr/a1.js`)
**Findings:** **412** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)

> OBJECT_COVERAGE = 702/702 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [fr-a1-owner-decisions.md](fr-a1-owner-decisions.md).
> **DE = STRICT READ-ONLY.** Production: `data/fr/a1.js` + `www/data/fr/a1.js`.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [fr-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-review-GITHUB.md) |
| OWNER README | [fr-a1-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-review-README.md) |
| OWNER DECISIONS | [fr-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions.md) |
| Pilns audits | [fr-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-full-audit.md) |
| History validation | [fr-a1-pr603-owner-history-validation.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-pr603-owner-history-validation.md) |

## Grupas (pa 50 findingiem)

| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [fr-a1-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group01.md) | [fr-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group01.md) |
| 51–100 | 50 | [fr-a1-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group02.md) | [fr-a1-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group02.md) |
| 101–150 | 50 | [fr-a1-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group03.md) | [fr-a1-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group03.md) |
| 151–200 | 50 | [fr-a1-owner-view-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group04.md) | [fr-a1-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group04.md) |
| 201–250 | 50 | [fr-a1-owner-view-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group05.md) | [fr-a1-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group05.md) |
| 251–300 | 50 | [fr-a1-owner-view-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group06.md) | [fr-a1-owner-decisions-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group06.md) |
| 301–350 | 50 | [fr-a1-owner-view-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group07.md) | [fr-a1-owner-decisions-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group07.md) |
| 351–400 | 50 | [fr-a1-owner-view-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group08.md) | [fr-a1-owner-decisions-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group08.md) |
| 401–412 | 12 | [fr-a1-owner-view-group09.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group09.md) | [fr-a1-owner-decisions-group09.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group09.md) |

## Īsais saraksts (visi findingi)

- **FR-A1-0294** `a1-lernen-4` · `frText` · MEDIUM · « Pour apprendre » signifie « afin d'apprendre » et ajoute une notion de but abs…
- **FR-A1-0295** `a1-anfangen-14` · `frText` · MEDIUM · « Pour commencer » signifie « afin de commencer » ; le lemme allemand correspond…
- **FR-A1-0296** `a1-anders-15` · `frText` · HIGH · « Sinon » signifie « otherwise » ou « if not » ; « anders » signifie « autrement…
- **FR-A1-0297** `a1-anrufen-16` · `frText` · MEDIUM · « Pour appeler » ajoute une notion de but ; l'infinitif allemand correspond à « …
- **FR-A1-0298** `a1-achten-22` · `frText` · HIGH · « A observer » signifie observer ; « achten » signifie faire attention. L'accent…
- **FR-A1-0299** `a1-ankommen-28` · `frText` · MEDIUM · « Pour arriver » signifie « afin d'arriver » ; le lemme allemand correspond à « …
- **FR-A1-0300** `a1-anziehen-30` · `frText` · MEDIUM · « Mettez » est un impératif à la 2e personne du pluriel, tandis que « anziehen »…
- **FR-A1-0301** `a1-anhalten-31` · `frText` · MEDIUM · La source lettone indique l'action de s'arrêter ; « arrêter » sans pronom est tr…
- **FR-A1-0302** `a1-antworten-36` · `frText` · MEDIUM · « Pour répondre » ajoute une notion de but ; l'infinitif allemand correspond à «…
- **FR-A1-0303** `a1-Arm-44` · `frText` · HIGH · « Arm » signifie « bras » ; « main » correspond à l'allemand « Hand ».
- **FR-A1-0304** `a1-Ärztin-46` · `frText` · HIGH · « Ärztin » est explicitement féminin ; l'article masculin « un » ne respecte pas…
- **FR-A1-0305** `a1-aufmachen-50` · `frText` · MEDIUM · « Pour ouvrir » signifie « afin d'ouvrir » ; le lemme allemand correspond à « ou…
- **FR-A1-0306** `a1-aufpassen-51` · `frText` · MEDIUM · « Sois prudent » est un impératif adressé à une personne ; « aufpassen » est ici…
- **FR-A1-0307** `a1-aufwärts-53` · `frText` · MEDIUM · « En haut » indique une position ; « aufwärts » exprime une direction ascendante…
- **FR-A1-0308** `a1-auf dem Bahnhof-59` · `frText` · LOW · The French preposition requires a grave accent: « À ».
- **FR-A1-0309** `a1-Bauch-73` · `frText` · MEDIUM · « Bauch » means belly or abdomen; « estomac » corresponds more closely to German…
- **FR-A1-0310** `a1-beginnen-77` · `frText` · MEDIUM · The current phrase means « in order to begin »; the German infinitive is simply …
- **FR-A1-0311** `a1-bekommen-82` · `frText` · MEDIUM · The current phrase means « in order to receive »; the German infinitive is simpl…
- **FR-A1-0312** `a1-besuchen-89` · `frText` · HIGH · The learner-facing field contains multiple translations; « assister » means atte…
- **FR-A1-0313** `a1-Brötchen-113` · `frText` · HIGH · « Chignon » means a hair bun; « Brötchen » is a small bread roll.
- **FR-A1-0314** `a1-Cousine-125` · `frText` · HIGH · Le nom français doit être au féminin pour correspondre à « Cousine ».
- **FR-A1-0315** `a1-danken-127` · `frText` · MEDIUM · « Pour remercier » exprime un but, tandis que l’infinitif allemand signifie « re…
- **FR-A1-0316** `a1-dein-132` · `frText` · HIGH · « Dein » est un déterminant possessif (« ton/ta/tes »), pas le pronom « le vôtre…
- **FR-A1-0317** `a1-dürfen-150` · `frText` · MEDIUM · Le verbe modal « dürfen » exprime la permission ; « avoir le droit de » est l’éq…
- **FR-A1-0318** `a1-Ei-153` · `frText` · LOW · Le mot français s’écrit avec la ligature « œ » : « œuf ».
- **FR-A1-0319** `a1-Erde-164` · `frText` · HIGH · « Erde » signifie « terre », tandis que « atterrir » est le verbe allemand « lan…
- **FR-A1-0320** `a1-Esslöffel-168` · `frText` · MEDIUM · « Cuillerée » désigne une quantité ; « Esslöffel » désigne l’ustensile, une cuil…
- **FR-A1-0321** `a1-euer-171` · `frText` · HIGH · « Euer » est un déterminant possessif (« votre »), pas le pronom « le vôtre ».
- **FR-A1-0322** `a1-Fernseher-182` · `frText` · MEDIUM · Le terme allemand désigne l'appareil, tandis que « télévision » désigne surtout …
- **FR-A1-0323** `a1-fett-184` · `frText` · HIGH · « Fett » est un adjectif allemand signifiant « gras » ; « graisse » est un nom f…
- **FR-A1-0324** `a1-Foto-195` · `frText` · HIGH · « Foto » est un nom désignant une photographie ; « photographier » est le verbe …
- **FR-A1-0325** `a1-frei-199` · `frText` · MEDIUM · « Frei » signifie ici « libre » ; « gratuit » ne couvre qu'un sens particulier d…
- **FR-A1-0326** `a1-Freundin-202` · `frText` · MEDIUM · « Freundin » peut signifier amie ou petite amie ; « petite amie » impose un sens…
- **FR-A1-0327** `a1-Fußball-218` · `frText` · CRITICAL · « Fußball » désigne le football, tandis que « football américain » désigne un au…
- **FR-A1-0328** `a1-geboren-224` · `frText` · MEDIUM · Le français actuel ajoute un verbe conjugué et un sujet masculin implicite ; l'a…
- **FR-A1-0329** `a1-gefallen-225` · `frText` · HIGH · Dans ce sens, « gefallen » signifie « plaire » ; « aimer » ne rend pas la constr…
- **FR-A1-0330** `a1-Geschichte-233` · `frText` · LOW · Le champ learner-facing contient deux traductions séparées par une puce ; la rép…
- **FR-A1-0331** `a1-Gesicht-235` · `frText` · HIGH · « Affronter » signifie faire face à, tandis que « Gesicht » signifie « visage ».
- **FR-A1-0332** `a1-Getränk-239` · `frText` · HIGH · « Getränk » signifie « boisson » ; « un verre » désigne le récipient ou son cont…
- **FR-A1-0333** `a1-grüßen-257` · `frText` · MEDIUM · L’infinitif allemand « grüßen » se traduit directement par « saluer », sans « po…
- **FR-A1-0334** `a1-halb-262` · `frText` · HIGH · « Halb » signifie « demi » ou « à moitié » ; « côté » signifie « Seite » en alle…
- **FR-A1-0335** `a1-Hälfte-263` · `frText` · HIGH · « Hälfte » signifie « moitié », tandis que « côté » signifie « Seite » en allema…
- **FR-A1-0336** `a1-helfen-277` · `frText` · MEDIUM · L’infinitif allemand « helfen » se traduit directement par « aider », sans « pou…
- **FR-A1-0337** `a1-Herr-280` · `frText` · HIGH · « M » seul n’est pas une traduction française correcte de « Herr » ; le terme A1…
- **FR-A1-0338** `a1-hübsch-288` · `frText` · HIGH · Le champ contient plusieurs traductions ; « hübsch » signifie ici « joli ». Une …
- **FR-A1-0339** `a1-hundert-289` · `frText` · MEDIUM · « Hundert » correspond au nombre exact « cent » ; « une centaine » signifie appr…
- **FR-A1-0340** `a1-ich-291` · `frText` · MEDIUM · Le pronom sujet allemand « ich » se traduit par « je » ; « moi » est une forme t…
- **FR-A1-0341** `a1-jawohl-299` · `frText` · MEDIUM · Jawohl exprime un oui affirmatif ou emphatique, pas « exactement comme ça ».
- **FR-A1-0342** `a1-jetzt-302` · `frText` · MEDIUM · Le séparateur « • » présente plusieurs traductions dans le champ destiné à l’app…
- **FR-A1-0343** `a1-kommen-318` · `frText` · MEDIUM · Le mot allemand est un infinitif; « à venir » est une locution et ne traduit pas…
- **FR-A1-0344** `a1-Honig-324` · `frText` · HIGH · « Chéri » est un terme affectueux; le nom allemand signifie « miel ».
- **FR-A1-0345** `a1-Koch-340` · `frText` · HIGH · « Koch » est un nom désignant une personne; « cuisiner » est le verbe.
- **FR-A1-0346** `a1-Köchin-341` · `frText` · HIGH · « Köchin » est le nom féminin de la cuisinière; « cuisiner » est le verbe.
- **FR-A1-0347** `a1-Lehrerin-365` · `frText` · HIGH · Le nom allemand désigne une enseignante ; l’article et le genre français sont in…
- **FR-A1-0348** `a1-lesen-369` · `frText` · MEDIUM · Le verbe allemand à l’infinitif doit être traduit par l’infinitif français, sans…
- **FR-A1-0349** `a1-links-380` · `frText` · MEDIUM · Le séparateur « • » expose plusieurs traductions dans le champ apprenant ; le ch…
- **FR-A1-0350** `a1-Mai-389` · `frText` · HIGH · « Peut » est une forme du verbe pouvoir ; le mois allemand Mai se traduit par « …
- **FR-A1-0351** `a1-malen-391` · `frText` · MEDIUM · Le séparateur « • » expose plusieurs traductions dans le champ apprenant ; le ch…
- **FR-A1-0352** `a1-Mandarine-393` · `frText` · HIGH · Le fruit « Mandarine » est féminin en français ; « Mandarin » désigne notamment …
- **FR-A1-0353** `a1-mein-401` · `frText` · MEDIUM · « Mein » est un possessif déterminant (« mon »), tandis que « le mien » signifie…
- **FR-A1-0354** `a1-mitnehmen-409` · `frText` · HIGH · « Emportez » est un impératif ; le mot allemand est un infinitif et se traduit i…
- **FR-A1-0355** `a1-Mittag-410` · `frText` · HIGH · « Mittag » signifie midi ou milieu de la journée ; « déjeuner » désigne le repas…
- **FR-A1-0356** `a1-Mütze-425` · `frText` · HIGH · « Mütze » désigne un bonnet ou une casquette, pas un chapeau au sens général.
- **FR-A1-0357** `a1-Natur-432` · `frText` · HIGH · Le texte français est tronqué et ne traduit pas le nom allemand.
- **FR-A1-0358** `a1-neben-434` · `frText` · MEDIUM · « Neben » exprime principalement la position juste à côté de, plus précisément q…
- **FR-A1-0359** `a1-nennen-437` · `frText` · MEDIUM · « Pour nommer » ajoute un sens de but absent de l’infinitif allemand.
- **FR-A1-0360** `a1-nett-438` · `frText` · HIGH · « Nett » signifie « gentil » ou « sympathique », tandis que « bon » signifie « g…
- **FR-A1-0361** `a1-nicht-447` · `frText` · HIGH · « Nicht » exprime la négation, alors que « non » traduit « nein » ou une réponse…
- **FR-A1-0362** `a1-normal-452` · `frText` · MEDIUM · La forme française masculine non marquée correspondant au lemme allemand est « n…
- **FR-A1-0363** `a1-Nummer-455` · `frText` · HIGH · « Nummer » signifie « numéro » ; « nombre » correspond à « Zahl ».
- **FR-A1-0364** `a1-oben-458` · `frText` · MEDIUM · « Au-dessus de » est une préposition nécessitant un complément, tandis que « obe…
- **FR-A1-0365** `a1-öffnen-460` · `frText` · MEDIUM · « Pour ouvrir » ajoute une notion de but absente de l'infinitif allemand « öffne…
- **FR-A1-0366** `a1-Pflanze-475` · `frText` · CRITICAL · « Pflanze » signifie « plante » ; « usine » signifie une factory et ne correspon…
- **FR-A1-0367** `a1-Post-480` · `frText` · HIGH · « E-mail » signifie courrier électronique, pas « Post » au sens de poste ou cour…
- **FR-A1-0368** `a1-Punkt-486` · `frText` · HIGH · « Indiquer » signifie « angeben » ; le nom allemand « Punkt » se traduit par « p…
- **FR-A1-0369** `a1-putzen-487` · `frText` · MEDIUM · « Pour nettoyer » signifie « afin de nettoyer » ; la fiche doit donner l’infinit…
- **FR-A1-0370** `a1-rechts-491` · `frText` · LOW · Deux traductions distinctes sont séparées par « • » ; une décision de propriétai…
- **FR-A1-0371** `a1-regnen-495` · `frText` · MEDIUM · « Il pleut » est une phrase conjuguée ; l’équivalent lexical de l’infinitif alle…
- **FR-A1-0372** `a1-rufen-500` · `frText` · MEDIUM · « Pour appeler » signifie « afin d’appeler » ; la fiche doit donner l’infinitif …
- **FR-A1-0373** `a1-sauber-508` · `frText` · HIGH · « Faire le ménage » est une locution verbale ; « sauber » est l’adjectif « propr…
- **FR-A1-0374** `a1-schicken-511` · `frText` · MEDIUM · « Pour envoyer » signifie « afin d’envoyer » ; la fiche doit donner l’infinitif …
- **FR-A1-0375** `a1-schmecken-515` · `frText` · HIGH · « À déguster » signifie « à goûter » et ne traduit pas le verbe « schmecken » au…
- **FR-A1-0376** `a1-Schnee-517` · `frText` · HIGH · « Il va neiger » signifie « Es wird schneien » ; le nom « Schnee » se traduit pa…
- **FR-A1-0377** `a1-schneien-518` · `frText` · MEDIUM · « Il neige » est une phrase conjuguée ; l’équivalent lexical de l’infinitif alle…
- **FR-A1-0378** `a1-Schüler-527` · `frText` · HIGH · « Un étudiant » désigne généralement un étudiant de l’enseignement supérieur ; «…
- **FR-A1-0379** `a1-spät-569` · `frText` · MEDIUM · «Spät» signifie «tard»; «en retard» signifie être late ou retardé, avec une nuan…
- **FR-A1-0380** `a1-spielen-572` · `frText` · MEDIUM · Le français «pour jouer» ajoute une préposition et exprime un but; l’infinitif a…
- **FR-A1-0381** `a1-suchen-584` · `frText` · MEDIUM · «Pour rechercher» exprime le but et ne correspond pas à l’infinitif allemand iso…
- **FR-A1-0382** `a1-Teller-595` · `frText` · HIGH · Un «Teller» est une assiette; «plaque» désigne une plaque ou une surface plate, …
- **FR-A1-0383** `a1-Tisch-599` · `frText` · HIGH · « Tableau » signifie picture/board; le sens correct de « Tisch » est « table ».
- **FR-A1-0384** `a1-Treppe-603` · `frText` · MEDIUM · Le mot allemand est au singulier; « escalier » est l’équivalent français corresp…
- **FR-A1-0385** `a1-versuchen-622` · `frText` · MEDIUM · « Pour essayer » signifie « in order to try »; l’infinitif allemand correspond à…
- **FR-A1-0386** `a1-vielleicht-624` · `frText` · MEDIUM · L’adverbe français s’écrit avec un trait d’union.
- **FR-A1-0387** `a1-von-635` · `frText` · HIGH · « Depuis » exprime une durée ou un point de départ temporel; « von » se traduit …
- **FR-A1-0388** `a1-Vorname-637` · `frText` · HIGH · « Mot » signifie word; « Vorname » désigne le prénom.
- **FR-A1-0389** `a1-waschen-645` · `frText` · MEDIUM · « Se laver » est pronominal et signifie wash oneself; « waschen » est ici le ver…
- **FR-A1-0390** `a1-welcher-652` · `frText` · HIGH · « OMS » est l’abréviation de l’Organisation mondiale de la santé; « welcher » si…
- **FR-A1-0391** `a1-Zimmer-665` · `frText` · MEDIUM · Le nom français doit normalement être présenté avec son article dans cette fiche…
- **FR-A1-0392** `a1-Zitrone-666` · `frText` · MEDIUM · Le nom français est masculin et l’article défini manque dans la fiche.
- **FR-A1-0393** `a1-Zucker-669` · `frText` · MEDIUM · Le nom français doit normalement être présenté avec son article dans cette fiche…
- **FR-A1-0394** `a1-zumachen-673` · `frText` · CRITICAL · « Gros plan » signifie close-up; zumachen signifie fermer.
- **FR-A1-0395** `a1-zurück-674` · `frText` · HIGH · « Dos » est le nom d’une partie du corps; zurück est un adverbe signifiant en ar…
- **FR-A1-0396** `a1-zweihundert-680` · `frText` · MEDIUM · « Cent » prend un s dans « deux cents » lorsqu’il n’est pas suivi d’un autre nom…
- **FR-A1-0397** `a1-Zwiebel-683` · `frText` · MEDIUM · Le nom français doit normalement être présenté avec son article dans cette fiche…
- **FR-A1-0398** `a1-Stadt-696` · `frText` · MEDIUM · Le nom français doit normalement être présenté avec son article dans cette fiche…
- **FR-A1-0399** `a1-Staat-697` · `frText` · HIGH · Staat signifie « État »; « pays » correspond plutôt à Land ou Staat dans un autr…
- **FR-A1-0400** `a1-sprechen-study` · `study.examples[2].lv` · HIGH · La phrase française ne correspond ni au sujet ni au complément de la source.
- **FR-A1-0401** `a1-sprechen-study` · `study.comparison[1].meaning` · HIGH · Raconter signifie narrer; le contraste attendu est dire, non raconter.
- **FR-A1-0402** `a1-klein-study` · `study.examples[1].lv` · HIGH · La traduction reprend la phrase précédente au lieu de traduire l'enfant.
- **FR-A1-0403** `a1-klein-study` · `study.examples[2].lv` · HIGH · La traduction correspond à l'exemple précédent, pas au sac.
- **FR-A1-0405** `a1-an` · `study.examples[0].lv` · MEDIUM · Deux formulations distinctes sont séparées par une barre et la répétition semble…
- **FR-A1-0406** `a1-an` · `study.examples[1].lv` · LOW · La préposition française prend un accent grave.
- **FR-A1-0407** `a1-an` · `study.tip.text` · CRITICAL · Le texte contient du letton et « tarte », qui n'est pas une traduction française…
- **FR-A1-0408** `a1-ab` · `study.translation` · HIGH · Ab indique un point de départ; depuis exprime généralement une durée écoulée.
- **FR-A1-0409** `a1-ab` · `study.examples[0].lv` · LOW · La préposition À doit porter un accent grave.
- **FR-A1-0410** `a1-ab` · `study.examples[1].lv` · LOW · La préposition À doit porter un accent grave.
- **FR-A1-0411** `a1-ab` · `study.examples[2].lv` · LOW · L'heure est incomplète en français sans indication temporelle.
- **FR-A1-0412** `a1-ab` · `study.comparison[2].meaning` · HIGH · La formulation actuelle traduit plutôt aus; elle ne présente pas le point de dép…
- **FR-A1-0413** `a1-aber` · `study.comparison[0].meaning` · MEDIUM · Le champ learner-facing contient plusieurs équivalents séparés par des puces.
- **FR-A1-0414** `a1-aber` · `study.comparison[1].meaning` · MEDIUM · La structure française est incomplète et plusieurs éléments sont séparés par une…
- **FR-A1-0415** `a1-aber` · `study.tip.text` · CRITICAL · Le texte du champ français est entièrement en letton.
- **FR-A1-0416** `a1-also` · `study.comparison[0].meaning` · MEDIUM · Le champ learner-facing contient plusieurs traductions séparées par une puce.
- **FR-A1-0417** `a1-also` · `study.comparison[1].meaning` · HIGH · Aussi en français signifie généralement auch; ce sens ne correspond pas à also a…
- **FR-A1-0418** `a1-also` · `study.tip.text` · HIGH · Le mot français « aussi » correspond à auch, pas à also dans ce contexte.
- **FR-A1-0419** `a1-auch-study` · `study.examples[1].lv` · HIGH · La traduction ne correspond ni au sujet ni au verbe de la source.
- **FR-A1-0420** `a1-auch-study` · `study.examples[2].lv` · HIGH · La phrase française traduit l'exemple précédent, pas le souhait de bonne journée…
- **FR-A1-0421** `a1-auf` · `study.translation` · HIGH · Auf exprime notamment sur et certains déplacements vers; « à » seul est trop lim…
- **FR-A1-0422** `a1-auf` · `study.comparison[0].meaning` · MEDIUM · La formulation mélange deux valeurs et ne rend pas clairement la valeur de surfa…
- **FR-A1-0423** `a1-auf` · `study.comparison[1].meaning` · HIGH · Pour une surface, le français emploie sur, non à.
- **FR-A1-0424** `a1-auf` · `study.comparison[2].meaning` · HIGH · « À l'intérieur » correspond plutôt à in; auf exprime une surface ou une directi…
- **FR-A1-0426** `a1-aus` · `study.comparison[2].meaning` · HIGH · Cette définition correspond à ab, non à aus.
- **FR-A1-0428** `a1-aufs` · `study.examples[6].lv` · HIGH · Aufs Boot indique le mouvement vers le bateau ou à bord, pas simplement « au bat…
- **FR-A1-0429** `a1-aufs` · `study.comparison[0].meaning` · MEDIUM · Un cas grammatical n'est pas une chose; la définition doit expliquer la destinat…
- **FR-A1-0430** `a1-aufs` · `study.comparison[2].meaning` · HIGH · Une surface verticale relève plutôt de an; aufs exprime une destination sur une …
- **FR-A1-0431** `a1-aufs` · `study.comparison[4].meaning` · MEDIUM · Le champ contient plusieurs équivalents séparés par une barre.
- **FR-A1-0432** `a1-baden` · `study.translation` · HIGH · Baden signifie se baigner; nager correspond principalement à schwimmen.
- **FR-A1-0433** `a1-baden` · `study.examples[0].lv` · HIGH · La traduction française emploie nager au lieu de se baigner.
- **FR-A1-0434** `a1-baden` · `study.examples[1].lv` · HIGH · Le sens de baden est se baigner, non pratiquer la nage.
- **FR-A1-0435** `a1-baden` · `study.examples[3].lv` · HIGH · Le champ est rattaché à baden; la traduction doit employer se baigner.
- **FR-A1-0436** `a1-baden` · `study.comparison[0].meaning` · HIGH · Le premier équivalent français traduit schwimmen, pas baden.
- **FR-A1-0437** `a1-baden` · `study.tip.text` · CRITICAL · Le mot allemand schwimmen reste dans le texte français et « reposez-vous » ne si…
- **FR-A1-0438** `a1-bei` · `study.translation` · MEDIUM · Bei se traduit selon le contexte par chez ou auprès de; « à » seul est trop vagu…
- **FR-A1-0439** `a1-bei` · `study.comparison[1].meaning` · MEDIUM · Au mur signifie généralement sur le mur; bei exprime ici la proximité.
- **FR-A1-0440** `a1-bei` · `study.comparison[2].meaning` · HIGH · La formulation actuelle est agrammaticale et ne rend pas le sens directionnel.
- **FR-A1-0441** `a1-bei` · `study.tip.text` · MEDIUM · La suite « à personne/lieu/entreprise » est agrammaticale et trop elliptique.
- **FR-A1-0442** `a1-bis` · `study.examples[0].lv` · MEDIUM · Le letton emploie le possessif informel « ta », mais le français utilise le vouv…
- **FR-A1-0443** `a1-bis` · `study.examples[3].lv` · MEDIUM · « Līdz šim » signifie « jusqu'à présent », et non « pour l'instant ».
- **FR-A1-0444** `a1-bitte` · `study.examples[0].lv` · HIGH · La phrase française omet la demande de café présente dans la source.
- **FR-A1-0445** `a1-bitte` · `study.examples[1].lv` · HIGH · La traduction omet l'instruction « entrez » présente dans la source.
- **FR-A1-0446** `a1-bitte` · `study.comparison[0].meaning` · CRITICAL · Le champ français contient un mot letton au lieu de sa traduction française.
- **FR-A1-0447** `a1-bitte` · `study.comparison[1].meaning` · CRITICAL · Le champ français contient un mot letton au lieu de sa traduction française.
- **FR-A1-0448** `a1-bitte-study` · `study.examples[1].lv` · HIGH · La phrase française est une formule de politesse et ne traduit pas « il exécute …
- **FR-A1-0449** `a1-bitte-study` · `study.examples[2].lv` · HIGH · La traduction française ne correspond pas au sujet ni au nombre de demandes de l…
- **FR-A1-0450** `a1-bitte-study` · `study.comparison[0].meaning` · CRITICAL · Le champ français contient un mot letton au lieu de sa traduction française.
- **FR-A1-0451** `a1-bitte-study` · `study.comparison[1].meaning` · CRITICAL · Le champ français contient un mot letton au lieu de sa traduction française.
- **FR-A1-0453** `a1-bringen` · `study.examples[0].lv` · HIGH · La phrase française demande de l'eau, tandis que la source dit « je t'apporte un…
- **FR-A1-0454** `a1-bringen` · `study.examples[1].lv` · HIGH · La traduction française parle de ramener quelqu'un chez lui, pas d'apporter un c…
- **FR-A1-0455** `a1-bringen` · `study.examples[2].lv` · HIGH · Le sujet, l'objet et le nombre ne correspondent pas à la source.
- **FR-A1-0456** `a1-bringen` · `study.comparison[0].meaning` · MEDIUM · Le champ juxtapose plusieurs traductions et inclut des sens qui ne sont pas équi…
- **FR-A1-0457** `a1-bringen` · `study.comparison[1].meaning` · MEDIUM · La traduction est dupliquée et « prendre » ne rend pas précisément le sens de la…
- **FR-A1-0458** `a1-bringen` · `study.comparison[2].meaning` · MEDIUM · Les deux propositions ne correspondent pas au sens de transporter quelqu'un vers…
- **FR-A1-0459** `a1-bringen` · `study.comparison[3].meaning` · MEDIUM · La formulation est maladroite et ne traduit pas naturellement l'idée d'acheminer…
- **FR-A1-0460** `a1-bringen` · `study.comparison[4].meaning` · CRITICAL · Le champ français contient un mot letton au lieu de sa traduction française.
- **FR-A1-0461** `a1-bringen` · `study.tip.text` · MEDIUM · « Passer à quelqu'un » ne traduit pas clairement bringen dans ce contexte.
- **FR-A1-0462** `a1-da` · `study.examples[3].lv` · MEDIUM · La source emploie l'impératif singulier informel ; « venez » est formel ou pluri…
- **FR-A1-0463** `a1-da` · `study.comparison[0].meaning` · MEDIUM · Le champ contient plusieurs traductions distinctes ; le choix de la forme princi…
- **FR-A1-0464** `a1-da` · `study.tip.text` · MEDIUM · La barre oblique juxtapose plusieurs équivalents dans un champ learner-facing.
- **FR-A1-0465** `a1-das` · `study.comparison[0].meaning` · HIGH · « Das » ne se traduit pas par « il » ; il correspond à l'article neutre ou au pr…
- **FR-A1-0466** `a1-das` · `study.comparison[2].meaning` · MEDIUM · Les équivalents français sont incorrects ou répétés et plusieurs formes sont jux…
- **FR-A1-0467** `a1-das` · `study.tip.text` · CRITICAL · Le texte contient plusieurs mots lettons dans le champ français.
- **FR-A1-0468** `a1-dass` · `study.comparison[2].meaning` · MEDIUM · « Lai » exprime généralement le but, traduit ici par « pour que », et non par « …
- **FR-A1-0469** `a1-dass` · `study.comparison[3].meaning` · MEDIUM · Dans une proposition indirecte, « vai » correspond à « si », pas à la conjonctio…
- **FR-A1-0470** `a1-dass` · `study.tip.text` · CRITICAL · Le champ français contient le mot letton « Atceries » et « ka ».
- **FR-A1-0471** `a1-der` · `study.tip.text` · HIGH · « Convient » ne traduit pas le lien grammatical entre masculin et der.
- **FR-A1-0472** `a1-die` · `study.examples[1].lv` · MEDIUM · « Kaķene » désigne une chatte ; « chaton » change l'âge et ne précise pas le sex…
- **FR-A1-0473** `a1-die` · `study.tip.text` · HIGH · « Mourir » est une traduction erronée de die dans ce contexte grammatical.
- **FR-A1-0474** `a1-dieser` · `study.examples[1].lv` · HIGH · Le verbe français « aimer » ne traduit pas le verbe source « voir ».
- **FR-A1-0475** `a1-dieser` · `study.tip.text` · CRITICAL · Le mot anglais « this » apparaît dans le champ français.
- **FR-A1-0477** `a1-ein` · `study.examples[3].lv` · CRITICAL · Le champ français reprend directement le texte letton.
- **FR-A1-0478** `a1-ein` · `study.comparison[0].meaning` · CRITICAL · Le champ français contient du letton au lieu du terme grammatical français.
- **FR-A1-0479** `a1-ein` · `study.comparison[1].meaning` · CRITICAL · Le champ français contient du letton au lieu du terme grammatical français.
- **FR-A1-0480** `a1-ein` · `study.comparison[2].meaning` · CRITICAL · Le champ français contient du letton au lieu du terme grammatical français.
- **FR-A1-0481** `a1-ein` · `study.comparison[3].meaning` · CRITICAL · Le champ français contient du letton au lieu du terme grammatical français.
- **FR-A1-0482** `a1-ein` · `study.tip.text` · MEDIUM · La formulation répète « quelqu'un » et ne décrit pas correctement l'emploi de ei…
- **FR-A1-0483** `a1-eis` · `frMain` · MEDIUM · Deux sens distincts sont séparés par « • » mais rendus par le même mot français;…
- **FR-A1-0485** `a1-erst` · `frMain` · MEDIUM · Le premier sens adverbial de « erst » se traduit plus naturellement par « d'abor…
- **FR-A1-0487** `a1-erst` · `study.examples[0].lv` · HIGH · La phrase française ne correspond pas à la source: elle parle de boire et de con…
- **FR-A1-0488** `a1-erst` · `study.tip.text` · CRITICAL · Le texte destiné à l'apprenant est en letton, avec des mots allemands non tradui…
- **FR-A1-0490** `a1-es` · `study.examples[0].lv` · HIGH · La traduction française ne correspond pas à « Il pleut » et introduit une action…
- **FR-A1-0491** `a1-es` · `study.examples[1].lv` · HIGH · « Il est fatigué » ne traduit pas la phrase source « Il fait froid ».
- **FR-A1-0492** `a1-es` · `study.examples[2].lv` · HIGH · La phrase française ne correspond ni au sujet ni à l'action de la source.
- **FR-A1-0493** `a1-es` · `study.examples[3].lv` · HIGH · « C'est mon livre » ne traduit pas « Il est fatigué ».
- **FR-A1-0494** `a1-es` · `study.comparison[0].meaning` · CRITICAL · Le champ français contient deux segments lettons non traduits.
- **FR-A1-0495** `a1-es` · `study.comparison[1].meaning` · HIGH · Le contenu français conserve « persona » en letton et le mot allemand sans expli…
- **FR-A1-0496** `a1-etwas` · `frMain` · MEDIUM · Deux sens distincts sont présentés avec « • »; décision de présentation requise.
- **FR-A1-0498** `a1-euch` · `frMain` · MEDIUM · Deux fonctions sont séparées par « • » mais ont la même forme française; décisio…
- **FR-A1-0500** `a1-euch` · `study.examples[0].lv` · HIGH · « euch » est le pronom de deuxième personne du pluriel; « te » est singulier et …
- **FR-A1-0501** `a1-euch` · `study.examples[1].lv` · HIGH · Le pronom français doit être « vous », correspondant au pluriel de « euch ».
- **FR-A1-0502** `a1-euch` · `study.examples[2].lv` · HIGH · « te » est singulier; la source et « euch » exigent « vous ».
- **FR-A1-0503** `a1-euch` · `study.examples[3].lv` · HIGH · Le complément doit être le pluriel « vous », pas le singulier « te ».
- **FR-A1-0504** `a1-euch` · `study.examples[4].lv` · HIGH · La traduction utilise « tu » alors que la source et le mot allemand indiquent le…
- **FR-A1-0505** `a1-euch` · `study.comparison[0].meaning` · HIGH · « Toi » est singulier; « jūs » et « euch » correspondent ici à « vous ».
- **FR-A1-0506** `a1-euch` · `study.comparison[1].meaning` · HIGH · Les deux formes françaises sont au singulier, contrairement à la source pluriell…
- **FR-A1-0507** `a1-euch` · `study.comparison[2].meaning` · HIGH · « Le vôtre » traduit un possessif, pas le pronom personnel « euch »; le sens de …
- **FR-A1-0509** `a1-fahren` · `study.examples[3].lv` · MEDIUM · La source est au présent; le futur français « ramènerai » change le temps verbal…
- **FR-A1-0510** `a1-fahren` · `study.important.text` · CRITICAL · Le texte français contient les mots lettons « tikai » et « braukt ».
- **FR-A1-0512** `a1-finden` · `study.examples[0].lv` · HIGH · La négation française contredit la source, qui signifie « Je trouve ma clé ».
- **FR-A1-0513** `a1-finden` · `study.examples[1].lv` · HIGH · La phrase française parle d'un téléphone et d'une question, sans rapport avec l'…
- **FR-A1-0514** `a1-finden` · `study.examples[2].lv` · HIGH · La traduction française ne correspond pas à la question sur le film.
- **FR-A1-0515** `a1-finden` · `study.tip.text` · LOW · « trouvée » est un participe passé alors que le conseil porte sur l'infinitif « …
- **FR-A1-0516** `a1-frau` · `frMain` · MEDIUM · Deux sens distincts sont séparés par « • »; décision de présentation requise.
- **FR-A1-0518** `a1-fuer` · `frMain` · MEDIUM · Deux fonctions sont séparées par « • » mais rendues par la même forme française;…
- **FR-A1-0520** `a1-gleich` · `frMain` · MEDIUM · Deux sens distincts sont séparés par « • »; décision de présentation requise.
- **FR-A1-0522** `a1-gross-study` · `study.examples[1].lv` · HIGH · La traduction française remplace Berlin et la ville par une maison.
- **FR-A1-0523** `a1-gut-study` · `study.examples[1].lv` · MEDIUM · La formulation française est peu naturelle et la ponctuation de la question est …
- **FR-A1-0524** `a1-haben` · `study.examples[0].lv` · LOW · Il manque le point final dans la phrase d'exemple.
- **FR-A1-0525** `a1-haben` · `study.examples[1].lv` · LOW · Il manque le point d'interrogation final.
- **FR-A1-0526** `a1-haben` · `study.examples[3].lv` · LOW · Il manque le point final dans la phrase d'exemple.
- **FR-A1-0527** `a1-haben` · `study.comparison[2].meaning` · MEDIUM · Le français doit donner l'infinitif correspondant, sans la préposition « pour ».
- **FR-A1-0528** `a1-haben` · `study.comparison[3].meaning` · MEDIUM · Le champ contient deux traductions séparées par une barre oblique et répète le m…
- **FR-A1-0529** `a1-haben` · `study.tip.text` · CRITICAL · Le texte contient des segments lettons dans un champ français.
- **FR-A1-0530** `a1-halten` · `frMain` · MEDIUM · Le champ principal contient plusieurs traductions distinctes et nécessite une dé…
- **FR-A1-0532** `a1-halten` · `study.examples[2].lv` · MEDIUM · Le letton emploie une forme polie/plurielle, mais le français est au tutoiement …
- **FR-A1-0533** `a1-halten` · `study.comparison[0].meaning` · MEDIUM · Le champ contient plusieurs traductions séparées par une barre oblique.
- **FR-A1-0534** `a1-halten` · `study.comparison[2].meaning` · MEDIUM · « Pour arrêter » ne traduit pas les deux emplois verbaux indiqués par la source.
- **FR-A1-0535** `a1-halten` · `study.tip.text` · CRITICAL · Le texte français est tronqué et ne reprend pas correctement les informations de…
- **FR-A1-0536** `a1-heißen` · `frMain` · MEDIUM · « Moyen » est une traduction erronée de l'emploi « signifier » de heißen.
- **FR-A1-0538** `a1-heißen` · `study.comparison[0].meaning` · MEDIUM · « méchant » ne correspond pas au sens verbal de nozīmēt, qui signifie « signifie…
- **FR-A1-0539** `a1-heißen` · `study.comparison[3].meaning` · LOW · Le champ contient plusieurs traductions séparées par une barre oblique et répète…
- **FR-A1-0540** `a1-heißen` · `study.comparison[4].meaning` · CRITICAL · Le champ français contient un mot letton non traduit.
- **FR-A1-0541** `a1-heißen` · `study.tip.text` · CRITICAL · Le texte contient des segments lettons dans un champ français.
- **FR-A1-0542** `a1-hoch-study` · `study.examples[1].lv` · HIGH · La phrase française parle d'une montagne au lieu d'une étagère de deux mètres.
- **FR-A1-0544** `a1-ihr` · `study.examples[0].lv` · HIGH · Le letton emploie le pluriel/politesse, mais le français est au singulier inform…
- **FR-A1-0545** `a1-ihr` · `study.examples[2].lv` · HIGH · Le sujet letton est pluriel ou de politesse ; le français doit employer vous.
- **FR-A1-0546** `a1-ihr` · `study.examples[4].lv` · HIGH · Le letton emploie le pluriel ou la politesse, contrairement au tutoiement frança…
- **FR-A1-0547** `a1-im` · `study.examples[5].lv` · MEDIUM · Le français passe au passé alors que la source exprime une action au présent.
- **FR-A1-0548** `a1-im` · `study.comparison[0].meaning` · MEDIUM · Le datif allemand n'est pas le sens « à qui ? » dans cette explication grammatic…
- **FR-A1-0549** `a1-in` · `study.translation` · MEDIUM · La traduction omet l'emploi directionnel de in, rendu ici par « à » selon le con…
- **FR-A1-0550** `a1-in` · `study.tip.text` · MEDIUM · La formulation actuelle répète « dans » et n'explique pas clairement le mot alle…
- **FR-A1-0551** `a1-ins` · `study.comparison[0].meaning` · LOW · L'abréviation grammaticale devrait être cohérente en français.
- **FR-A1-0552** `a1-ins` · `study.comparison[1].meaning` · LOW · Il manque l'accent grave et l'annotation « à qui ? » est une explication grammat…
- **FR-A1-0553** `a1-jung` · `study.translation` · MEDIUM · Le français restreint à tort jung aux personnes ; le mot s'emploie aussi pour le…
- **FR-A1-0554** `a1-jung` · `study.examples[4].lv` · MEDIUM · Dans « junges Paar », jung signifie « jeune », et non « nouveau ».
- **FR-A1-0556** `a1-kennen-study` · `study.translation` · HIGH · « Kennen » signifie connaître, tandis que « savoir » correspond à « wissen ».
- **FR-A1-0557** `a1-kennen-study` · `study.examples[1].lv` · LOW · Il manque le point d’interrogation final.
- **FR-A1-0558** `a1-kennen-study` · `study.examples[4].lv` · HIGH · « La sagesse » ne traduit pas « wissen » dans cette opposition lexicale.
- **FR-A1-0559** `a1-kennen-study` · `study.comparison[1].meaning` · HIGH · Pour les faits et informations, le verbe français est « savoir », pas « connaîtr…
- **FR-A1-0560** `a1-wissen-study` · `study.examples[2].lv` · HIGH · « Wissen » se traduit ici par « savoir » : on sait une réponse.
- **FR-A1-0561** `a1-wissen-study` · `study.comparison[0].meaning` · HIGH · Cette ligne décrit « wissen », qui signifie « savoir ».
- **FR-A1-0562** `a1-wissen-study` · `study.comparison[1].meaning` · HIGH · Le sens est correct, mais les articles rendent l’énumération française complète …
- **FR-A1-0564** `a1-können` · `study.comparison[2].meaning` · HIGH · « Besoin / être oui- » est incompréhensible et ne traduit pas le verbe modal cor…
- **FR-A1-0565** `a1-kosten` · `study.translation` · HIGH · « Kosten » signifie coûter ; « payer » correspond à « bezahlen ».
- **FR-A1-0566** `a1-kosten` · `study.comparison[0].meaning` · HIGH · La traduction principale est erronée et deux sens sont séparés par « • » ; décis…
- **FR-A1-0567** `a1-kosten` · `study.comparison[1].meaning` · MEDIUM · Deux traductions distinctes sont séparées par « • » et le contraste coûter/payer…
- **FR-A1-0568** `a1-kosten` · `study.comparison[2].meaning` · MEDIUM · Deux sens distincts sont séparés par « • », mais les deux entrées françaises son…
- **FR-A1-0569** `a1-laden-study` · `study.translation` · MEDIUM · « Laden » signifie généralement « magasin » ; « boutique » est plus spécifique e…
- **FR-A1-0571** `a1-land` · `study.comparison[0].meaning` · MEDIUM · Plusieurs sens distincts sont réunis dans un champ séparé par des barres oblique…
- **FR-A1-0573** `a1-lang` · `study.examples[5].lv` · MEDIUM · « En longueur » est un calque maladroit ; « toute la journée » exprime naturelle…
- **FR-A1-0575** `a1-lassen` · `study.comparison[0].meaning` · MEDIUM · « Partir » est erroné dans cette opposition et deux sens sont séparés par une ba…
- **FR-A1-0576** `a1-lassen` · `study.tip.text` · HIGH · « Atceries » est un mot letton resté dans le texte français.
- **FR-A1-0578** `a1-laufen` · `study.comparison[0].meaning` · HIGH · Les deux sens sont séparés par une barre oblique et les traductions actuelles so…
- **FR-A1-0579** `a1-laufen` · `study.comparison[1].meaning` · MEDIUM · Une entrée lexicale doit être à l’infinitif ; « allez » est une forme impérative…
- **FR-A1-0580** `a1-laufen` · `study.comparison[3].meaning` · MEDIUM · « Pour opérer » est une formulation maladroite et ne donne pas le lemme français…
- **FR-A1-0581** `a1-legen` · `study.comparison[1].meaning` · HIGH · « Liegen » signifie se trouver ou être allongé, pas nécessairement dormir.
- **FR-A1-0582** `a1-legen` · `study.comparison[3].meaning` · HIGH · Les deux sens sont identiques dans le texte actuel et sont séparés par une barre…
- **FR-A1-0583** `a1-legen` · `study.tip.text` · HIGH · Le champ contient plusieurs segments lettons non traduits en français.
- **FR-A1-0584** `a1-leise-study` · `study.translation` · MEDIUM · « Leise » signifie silencieux ou doucement, tandis que « calme » signifie surtou…
- **FR-A1-0585** `a1-leise-study` · `study.examples[1].lv` · MEDIUM · « Tais-toi » signifie « shut up » et ne traduit pas une demande de parler doucem…
- **FR-A1-0586** `a1-leise-study` · `study.examples[2].lv` · LOW · Pour une musique « leise », « douce » est plus naturel que « calme ».
- **FR-A1-0588** `a1-liegen` · `study.examples[2].lv` · HIGH · « Liegen » signifie être allongé, non dormir; le français actuel suit le sens le…
- **FR-A1-0589** `a1-liegen` · `study.comparison[0].meaning` · LOW · Deux traductions distinctes sont séparées par « / »; une décision éditoriale est…
- **FR-A1-0590** `a1-liegen` · `study.comparison[1].meaning` · LOW · Le champ comporte une structure de comparaison à traductions multiples; vérifica…
- **FR-A1-0591** `a1-liegen` · `study.comparison[2].meaning` · LOW · Deux traductions distinctes sont séparées par « / »; une décision éditoriale est…
- **FR-A1-0592** `a1-liegen` · `study.comparison[3].meaning` · LOW · Le champ comporte une structure de comparaison à traductions multiples; vérifica…
- **FR-A1-0594** `a1-machen` · `study.tip.text` · CRITICAL · Le champ contient du letton et la question allemande est mal traduite en françai…
- **FR-A1-0595** `a1-mal` · `study.translation` · HIGH · Le nom allemand « Mal » se traduit ici par « fois », pas « temps ».
- **FR-A1-0596** `a1-mal` · `study.tip.text` · HIGH · « Das Mal » signifie « la fois »; « temps » est une traduction erronée dans ce c…
- **FR-A1-0598** `a1-mit` · `study.comparison[0].meaning` · LOW · Deux variantes sont séparées par « / »; une décision éditoriale est requise.
- **FR-A1-0599** `a1-mit` · `study.comparison[1].meaning` · LOW · Le champ comporte une structure de comparaison à traductions multiples; vérifica…
- **FR-A1-0600** `a1-mit` · `study.comparison[2].meaning` · LOW · Deux variantes sont séparées par « / »; une décision éditoriale est requise.
- **FR-A1-0601** `a1-mit` · `study.comparison[3].meaning` · LOW · Deux variantes sont séparées par « / »; une décision éditoriale est requise.
- **FR-A1-0602** `a1-mögen` · `study.examples[1].lv` · MEDIUM · Le letton emploie le singulier informel « tev »; « vous » ne correspond pas, et …
- **FR-A1-0603** `a1-mögen` · `study.comparison[0].meaning` · LOW · Le champ comporte une structure de comparaison à traductions multiples; vérifica…
- **FR-A1-0604** `a1-mögen` · `study.comparison[1].meaning` · LOW · Le champ comporte une structure de comparaison à traductions multiples; vérifica…
- **FR-A1-0605** `a1-mögen` · `study.comparison[2].meaning` · LOW · Le champ comporte une structure de comparaison à traductions multiples; vérifica…
- **FR-A1-0606** `a1-mögen` · `study.comparison[3].meaning` · LOW · Le champ comporte une structure de comparaison à traductions multiples; vérifica…
- **FR-A1-0607** `a1-morgen` · `study.examples[5].lv` · MEDIUM · 
- **FR-A1-0608** `a1-morgen-study` · `study.examples[1].lv` · MEDIUM · 
- **FR-A1-0609** `a1-morgen-study` · `study.examples[2].lv` · MEDIUM · 
- **FR-A1-0610** `a1-morgen-study` · `study.examples[3].lv` · MEDIUM · 
- **FR-A1-0611** `a1-müssen` · `study.translation` · HIGH · « Müssen » exprime l'obligation et se traduit par « devoir », non « avoir besoin…
- **FR-A1-0612** `a1-müssen` · `study.examples[1].lv` · MEDIUM · Le letton utilise le singulier informel « tev »; le pronom français devrait être…
- **FR-A1-0613** `a1-müssen` · `study.comparison[0].meaning` · MEDIUM · « Besoin » ne traduit pas l'obligation exprimée par « müssen ».
- **FR-A1-0614** `a1-müssen` · `study.comparison[1].meaning` · LOW · Deux traductions distinctes sont séparées par « / »; une décision éditoriale est…
- **FR-A1-0615** `a1-müssen` · `study.comparison[3].meaning` · LOW · Le champ comporte une structure de comparaison à traductions multiples; vérifica…
- **FR-A1-0617** `a1-nach` · `study.comparison[0].meaning` · LOW · Deux traductions distinctes sont séparées par « / »; une décision éditoriale est…
- **FR-A1-0618** `a1-nach` · `study.comparison[1].meaning` · LOW · Deux variantes sont séparées par « / »; une décision éditoriale est requise.
- **FR-A1-0619** `a1-nach` · `study.comparison[2].meaning` · LOW · Deux traductions distinctes sont séparées par « / »; une décision éditoriale est…
- **FR-A1-0620** `a1-nach` · `study.comparison[3].meaning` · LOW · Deux traductions distinctes sont séparées par « / »; une décision éditoriale est…
- **FR-A1-0622** `a1-natuerlich` · `study.examples[2].lv` · LOW · Le letton emploie le tutoiement tev, mais la traduction française emploie vous.
- **FR-A1-0623** `a1-nehmen` · `study.examples[0].lv` · HIGH · La phrase signifie prendre le bus, et non partir en bus.
- **FR-A1-0624** `a1-nehmen` · `study.comparison[0].meaning` · MEDIUM · Deux traductions séparées par une barre oblique sont proposées ; une décision éd…
- **FR-A1-0625** `a1-nehmen` · `study.comparison[1].meaning` · MEDIUM · Trois sens distincts sont séparés par des barres obliques ; le choix de présenta…
- **FR-A1-0626** `a1-nehmen` · `study.comparison[2].meaning` · MEDIUM · Deux sens distincts sont séparés par une barre oblique et le premier sens est ma…
- **FR-A1-0627** `a1-nehmen` · `study.tip.text` · MEDIUM · La seconde partie traduit bringen par amener, alors qu'il s'agit ici d'apporter …
- **FR-A1-0628** `a1-neu` · `study.examples[6].lv` · LOW · Le point d'interrogation manque dans cette question française.
- **FR-A1-0629** `a1-nur-study` · `study.examples[2].lv` · LOW · Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
- **FR-A1-0630** `a1-ob` · `study.translation` · HIGH · La conjonction allemande ob signifie si dans une interrogation indirecte, et non…
- **FR-A1-0631** `a1-ob` · `study.examples[3].lv` · LOW · Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
- **FR-A1-0632** `a1-ob` · `study.comparison[0].meaning` · HIGH · Dans une question indirecte, vai se traduit par si, pas par ou.
- **FR-A1-0633** `a1-ob` · `study.comparison[1].meaning` · MEDIUM · La formulation actuelle est un impératif incomplet et ne décrit pas clairement l…
- **FR-A1-0634** `a1-oder` · `study.examples[2].lv` · LOW · Le letton emploie le tutoiement tu, mais la traduction française emploie vous et…
- **FR-A1-0635** `a1-oder` · `study.examples[3].lv` · LOW · Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
- **FR-A1-0636** `a1-oder` · `study.comparison[1].meaning` · HIGH · Dans une question indirecte, vai correspond à si et relève de ob, non de oder.
- **FR-A1-0638** `a1-passen` · `study.comparison[0].meaning` · HIGH · Deux sens sont séparés par une barre oblique et le nom ajustement ne traduit pas…
- **FR-A1-0639** `a1-passen` · `study.comparison[1].meaning` · HIGH · Les deux sens lettons sont confondus et la traduction actuelle répète le même se…
- **FR-A1-0640** `a1-passen` · `study.comparison[3].meaning` · MEDIUM · Darboties signifie fonctionner ici ; opérer ne convient pas à ce sens général.
- **FR-A1-0641** `a1-passen` · `study.tip.text` · HIGH · Le mot allemand passt est mal écrit passé et la phrase française contient un fra…
- **FR-A1-0643** `a1-probieren` · `study.comparison[1].meaning` · LOW · La préposition Pour n'est pas présente dans le sens nominal source et rend l'ent…
- **FR-A1-0644** `a1-probieren` · `study.comparison[2].meaning` · LOW · La préposition Pour n'est pas nécessaire dans cette entrée lexicale.
- **FR-A1-0645** `a1-probieren` · `study.comparison[3].meaning` · LOW · L'infinitif français doit être essayer, sans préposition dans cette liste de sen…
- **FR-A1-0646** `a1-reis` · `study.examples[2].lv` · LOW · Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
- **FR-A1-0647** `a1-reis` · `study.tip.text` · MEDIUM · La phrase actuelle affirme que riz est le terme letton, alors que le source donn…
- **FR-A1-0648** `a1-sagen-study` · `study.examples[0].lv` · LOW · Le letton emploie le tutoiement tu, mais la traduction française emploie vous et…
- **FR-A1-0649** `a1-sagen-study` · `study.comparison[0].meaning` · HIGH · Pasacīt signifie dire quelque chose de précis, pas raconter une histoire.
- **FR-A1-0650** `a1-sagen-study` · `study.comparison[1].meaning` · MEDIUM · La traduction actuelle est redondante et langage ne correspond pas à l'expressio…
- **FR-A1-0651** `a1-schauen-study` · `study.translation` · HIGH · Montre est un nom ou une forme de montrer ; schauen signifie regarder.
- **FR-A1-0652** `a1-schwimmen` · `study.comparison[1].meaning` · LOW · Deux sens distincts sont séparés par une barre oblique; le choix de présentation…
- **FR-A1-0653** `a1-schwimmen` · `study.comparison[2].meaning` · MEDIUM · Dans une liste de sens, l'infinitif français est requis; « Allez nager » est un …
- **FR-A1-0654** `a1-sehen` · `study.comparison[1].meaning` · HIGH · « Montre » signifie montrer ou une montre; il ne traduit pas le verbe letton « s…
- **FR-A1-0655** `a1-sehen` · `study.comparison[2].meaning` · LOW · Deux traductions distinctes sont séparées par une barre oblique; le format doit …
- **FR-A1-0656** `a1-sehen` · `study.comparison[3].meaning` · HIGH · Le français actuel signifie « pour entendre » et ne correspond pas à l'infinitif…
- **FR-A1-0657** `a1-sein` · `study.tip.text` · CRITICAL · Le texte contient des éléments lettons (« Atceries », « es esmu », « tu esi ») d…
- **FR-A1-0660** `a1-sich` · `study.examples[0].lv` · HIGH · La phrase française signifie prendre un bain, tandis que la source signifie se l…
- **FR-A1-0661** `a1-sich` · `study.comparison[0].meaning` · LOW · Deux traductions distinctes sont séparées par une barre oblique; le format doit …
- **FR-A1-0662** `a1-sich` · `study.comparison[1].meaning` · MEDIUM · La préposition « à ich » est incorrecte et le pronom réfléchi doit être distingu…
- **FR-A1-0663** `a1-sich` · `study.comparison[2].meaning` · MEDIUM · La construction « moi-même à du » est incorrecte et ne correspond pas au pronom …
- **FR-A1-0665** `a1-sicher` · `study.examples[1].lv` · MEDIUM · « Définitivement » est peu naturel pour « certainement » dans cette réponse; la …
- **FR-A1-0667** `a1-sie-study` · `study.examples[5].lv` · HIGH · Pour « sie » minuscule, « tu » est incompatible avec les référents allemands; il…
- **FR-A1-0668** `a1-sie-study-2` · `study.translation` · HIGH · « Sie » majuscule est le pronom de politesse allemand et se traduit par « vous »…
- **FR-A1-0669** `a1-sie-study-2` · `study.examples[5].lv` · HIGH · Le pronom français « tu » contredit le « Sie » allemand de politesse.
- **FR-A1-0670** `a1-sitzen` · `study.translation` · HIGH · « Sitzen » décrit une position (« être assis »); « s'asseoir » décrit le mouveme…
- **FR-A1-0671** `a1-sitzen` · `study.comparison[0].meaning` · HIGH · Le sens statique de « sēdēt » se traduit par « être assis », pas par l'action « …
- **FR-A1-0672** `a1-sitzen` · `study.comparison[2].meaning` · MEDIUM · « S'allonger » signifie prendre la position couchée; « atrasties guļus » signifi…
- **FR-A1-0673** `a1-sitzen` · `study.comparison[3].meaning` · MEDIUM · « Nosēdināt » est causatif; il se traduit par « faire asseoir », pas par « s'ass…
- **FR-A1-0674** `a1-sollen` · `study.translation` · MEDIUM · Le champ traduit un infinitif allemand; « devrait » est une forme conjuguée à la…
- **FR-A1-0675** `a1-sollen` · `study.comparison[0].meaning` · LOW · Le champ contient deux formulations séparées par une barre oblique; présentation…
- **FR-A1-0676** `a1-stehen` · `study.comparison[0].meaning` · LOW · Deux formulations distinctes sont séparées par une barre oblique; le format doit…
- **FR-A1-0677** `a1-stehen` · `study.comparison[1].meaning` · HIGH · « Sēdēt » décrit une position statique et se traduit par « être assis », non « s…
- **FR-A1-0678** `a1-stehen` · `study.comparison[2].meaning` · MEDIUM · « Atrasties guļus » signifie être couché, tandis que « s'allonger » désigne le m…
- **FR-A1-0680** `a1-über` · `study.examples[1].lv` · MEDIUM · « Parler du temps » est la formulation française naturelle pour parler de la mét…
- **FR-A1-0681** `a1-über` · `study.comparison[0].meaning` · LOW · Plusieurs traductions distinctes sont séparées par « / »; la formulation contien…
- **FR-A1-0682** `a1-über` · `study.tip.text` · CRITICAL · « Tableau » traduit mal « galda » dans cet exemple; il faut « table ».
- **FR-A1-0684** `a1-um` · `study.examples[2].lv` · MEDIUM · « Faire le tour du coin » est peu naturel et ne rend pas clairement le déplaceme…
- **FR-A1-0685** `a1-um` · `study.examples[3].lv` · MEDIUM · Le français actuel exprime seulement l'apprentissage, pas explicitement le but «…
- **FR-A1-0686** `a1-um` · `study.comparison[0].meaning` · LOW · Trois traductions distinctes sont séparées par « / »; décision de présentation r…
- **FR-A1-0687** `a1-um` · `study.tip.text` · MEDIUM · L’heure française nécessite la préposition « à ».
- **FR-A1-0688** `a1-unter` · `study.examples[3].lv` · HIGH · Le français contredit le sens allemand « unter »; « au-dessus » correspond à « ü…
- **FR-A1-0689** `a1-unter` · `study.comparison[0].meaning` · LOW · Deux traductions distinctes sont séparées par « / »; décision de présentation re…
- **FR-A1-0690** `a1-unter` · `study.comparison[1].meaning` · MEDIUM · « Plus » ne traduit pas « virs » et « pour » ne traduit pas « par » dans ces con…
- **FR-A1-0691** `a1-unter` · `study.tip.text` · CRITICAL · Le texte actuel contient du letton au lieu du français.
- **FR-A1-0692** `a1-verstehen` · `study.translation` · MEDIUM · L’infinitif français « pour comprendre » ajoute un but absent du mot allemand.
- **FR-A1-0693** `a1-verstehen` · `study.examples[3].lv` · HIGH · La phrase actuelle traduit « können », pas « verstehen ».
- **FR-A1-0694** `a1-verstehen` · `study.comparison[3].meaning` · MEDIUM · « Pazīt » signifie « connaître », tandis que « savoir » traduit « zināt ».
- **FR-A1-0695** `a1-vom` · `study.translation` · HIGH · « Vom » est la contraction de « von dem » et signifie généralement « du », non «…
- **FR-A1-0696** `a1-vor` · `study.tip.text` · MEDIUM · « Devant la place » ne rend pas l’opposition temps/espace du texte source.
- **FR-A1-0698** `a1-was` · `study.examples[1].lv` · HIGH · La phrase actuelle est une proposition relative, pas une question française comp…
- **FR-A1-0699** `a1-was` · `study.examples[5].lv` · MEDIUM · Le tutoiement du texte source est remplacé sans justification par le vouvoiement…
- **FR-A1-0700** `a1-was` · `study.examples[6].lv` · MEDIUM · Le pronom ne correspond pas au tutoiement source et le point d'interrogation man…
- **FR-A1-0701** `a1-wenn` · `study.comparison[1].meaning` · HIGH · « Vai » signifie ici « si », pas la conjonction « ou ».
- **FR-A1-0702** `a1-wenn` · `study.comparison[2].meaning` · MEDIUM · La traduction actuelle perd la référence au mot interrogatif « quand ».
- **FR-A1-0703** `a1-wenn` · `study.tip.text` · HIGH · « Veux » est le verbe français « vouloir » et remplace incorrectement le mot all…
- **FR-A1-0704** `a1-wer` · `study.examples[0].lv` · HIGH · « Qu'est-ce que c'est ? » correspond à « was », tandis que « wer » demande « qui…
- **FR-A1-0705** `a1-wer` · `study.examples[2].lv` · HIGH · « Qu'est-ce qui » demande une chose; « wer » demande une personne.
- **FR-A1-0706** `a1-wer` · `study.examples[4].lv` · MEDIUM · Avec « wer », « qui parmi vous » est plus fidèle que le pronom « lequel ».
- **FR-A1-0707** `a1-werden` · `study.examples[1].lv` · HIGH · La phrase actuelle décrit un état; « werden » exprime le changement d’état.
- **FR-A1-0708** `a1-werden` · `study.examples[3].lv` · HIGH · « Je suis fatigué » traduit « sein », pas « werden »; le sens allemand est incoh…
- **FR-A1-0709** `a1-wetter` · `study.examples[0].lv` · HIGH · La phrase actuelle demande l'heure, alors que « Wetter » concerne la météo.
- **FR-A1-0710** `a1-wetter` · `study.examples[4].lv` · MEDIUM · La tournure française naturelle est « parler du temps » pour parler de la météo.
- **FR-A1-0711** `a1-wie` · `study.examples[1].lv` · HIGH · La question source demande comment la personne s'appelle; la version actuelle es…
- **FR-A1-0712** `a1-zu` · `frMain` · MEDIUM · The learner-facing field combines distinct meanings with a separator; owner deci…
- **FR-A1-0714** `a1-zu` · `study.comparison[0].meaning` · HIGH · In this contrast, Latvian pārāk corresponds to French trop, not aussi.
- **FR-A1-0715** `a1-zug` · `study.comparison[1].meaning` · MEDIUM · The comparison field lists distinct meanings with a separator; owner decision is…
- **FR-A1-0716** `a1-zum` · `frMain` · MEDIUM · The learner-facing field combines distinct meanings with a separator; owner deci…
- **FR-A1-0718** `a1-zum` · `study.comparison[0].meaning` · MEDIUM · The comparison field lists distinct translations with a separator; owner decisio…
- **FR-A1-0719** `a1-zum` · `study.comparison[1].meaning` · HIGH · Latvian siev. dzimte means feminine gender, not the wife's family.
- **FR-A1-0720** `a1-zum` · `study.comparison[2].meaning` · HIGH · In this contrast, Latvian pārāk corresponds to French trop, not aussi.
- **FR-A1-0721** `a1-zum` · `study.comparison[3].meaning` · MEDIUM · The comparison field contains separated alternatives/context labels; owner decis…
- **FR-A1-0722** `a1-fernsehen` · `study.tip.leftBlocks[0].text` · CRITICAL · Fougère is an erroneous French substitution for the German word fern.
- **FR-A1-0723** `a1-fernsehen` · `study.important.text` · CRITICAL · Fougère is an erroneous French substitution for the German word fern.
- **FR-A1-0724** `a1-essen` · `study.examples[1].lv` · MEDIUM · The Latvian source uses the formal/plural pronoun jūs, so French tu is inconsist…
- **FR-A1-0725** `a1-essen-study` · `frMain` · MEDIUM · The learner-facing field combines distinct meanings with a separator; owner deci…
- **FR-A1-0727** `a1-essen-study` · `study.examples[1].lv` · MEDIUM · The Latvian source uses the formal/plural pronoun jūs, so French tu is inconsist…
- **FR-A1-0728** `a1-ferien` · `study.examples[0].lv` · HIGH · Ferien means holidays, not specifically the weekend.
- **FR-A1-0729** `a1-ferien` · `study.examples[2].lv` · MEDIUM · The Latvian source uses formal/plural jūs, so French tu is inconsistent; punctua…
- **FR-A1-0730** `a1-ferien` · `study.examples[3].lv` · HIGH · Jours fériés means public holidays, whereas Ferien here means school holidays.
- **FR-A1-0731** `a1-ferien` · `study.comparison[0].meaning` · MEDIUM · The abbreviation dsk. is not French and should be replaced with a French grammat…
- **FR-A1-0732** `a1-ferien` · `study.comparison[1].meaning` · HIGH · Tous is incorrect here; the Latvian source specifies singular, which is au singu…
- **FR-A1-0733** `a1-urlaub` · `study.examples[2].lv` · MEDIUM · French normally says être en vacances rather than avoir des vacances in this con…
- **FR-A1-0734** `a1-urlaub` · `study.comparison[0].meaning` · HIGH · Tous is incorrect here; the Latvian source specifies singular, which is au singu…
- **FR-A1-0735** `a1-urlaub` · `study.comparison[1].meaning` · MEDIUM · The abbreviation dsk. is not French and should be replaced with a French grammat…
- **FR-A1-0736** `a1-uhr` · `study.examples[0].lv` · MEDIUM · « Il est huit » est incomplet en français standard ; la parenthèse crée une form…
- **FR-A1-0737** `a1-uhr` · `study.examples[1].lv` · MEDIUM · « Il est huit » est incomplet en français standard ; la parenthèse crée une form…
- **FR-A1-0738** `a1-uhr` · `study.examples[5].lv` · HIGH · « Die Zeit » est un segment allemand résiduel dans un champ français.
- **FR-A1-0739** `a1-zeit` · `frMain` · MEDIUM · La barre oblique sépare deux sens dans le champ learner-facing ; une formulation…
- **FR-A1-0741** `a1-zeit` · `study.examples[1].lv` · LOW · Le point final manque dans cet exemple français.
- **FR-A1-0742** `a1-zeit` · `study.examples[2].lv` · LOW · Le point d'interrogation manque dans cette question française.
- **FR-A1-0743** `a1-einmal` · `frMain` · LOW · La traduction est répétée deux fois, ce qui crée une entrée d'étude redondante.
- **FR-A1-0745** `a1-einmal` · `study.examples[0].lv` · MEDIUM · « J'étais une fois à Berlin » est un calque peu naturel pour exprimer une visite…
- **FR-A1-0746** `a1-einmal` · `study.examples[1].lv` · MEDIUM · « J'étais une fois à Berlin » est un calque peu naturel pour exprimer une visite…
- **FR-A1-0747** `a1-noch-mal` · `study.examples[1].lv` · LOW · La source est polie ; « te » est incohérent avec « s'il vous plaît », et la ponc…
- **FR-A1-0748** `a1-noch-mal` · `study.examples[2].lv` · LOW · Le point final manque dans cet exemple français.

## Pilns findingu pārskats (visi findingi)

## FR-A1-0294
**Audit ID:** FR-A1-0294
**Card ID:** `a1-lernen-4`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** lernen
**LV MASTER reference:** mācīties
**CURRENT:** Pour apprendre
**PROPOSED_ET (audit ieteikums):** Apprendre
**Problēma:** « Pour apprendre » signifie « afin d'apprendre » et ajoute une notion de but absente de l'infinitif allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0295
**Audit ID:** FR-A1-0295
**Card ID:** `a1-anfangen-14`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** anfangen
**LV MASTER reference:** sākt
**CURRENT:** Pour commencer
**PROPOSED_ET (audit ieteikums):** Commencer
**Problēma:** « Pour commencer » signifie « afin de commencer » ; le lemme allemand correspond à « commencer ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0296
**Audit ID:** FR-A1-0296
**Card ID:** `a1-anders-15`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** anders
**LV MASTER reference:** citādi
**CURRENT:** Sinon
**PROPOSED_ET (audit ieteikums):** Autrement
**Problēma:** « Sinon » signifie « otherwise » ou « if not » ; « anders » signifie « autrement » ou « différemment ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0297
**Audit ID:** FR-A1-0297
**Card ID:** `a1-anrufen-16`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** anrufen
**LV MASTER reference:** zvanīt
**CURRENT:** Pour appeler
**PROPOSED_ET (audit ieteikums):** Appeler
**Problēma:** « Pour appeler » ajoute une notion de but ; l'infinitif allemand correspond à « appeler ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0298
**Audit ID:** FR-A1-0298
**Card ID:** `a1-achten-22`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** achten
**LV MASTER reference:** ievērot
**CURRENT:** A observer
**PROPOSED_ET (audit ieteikums):** Faire attention
**Problēma:** « A observer » signifie observer ; « achten » signifie faire attention. L'accent de « À » manque aussi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0299
**Audit ID:** FR-A1-0299
**Card ID:** `a1-ankommen-28`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** ankommen
**LV MASTER reference:** ierasties
**CURRENT:** Pour arriver
**PROPOSED_ET (audit ieteikums):** Arriver
**Problēma:** « Pour arriver » signifie « afin d'arriver » ; le lemme allemand correspond à « arriver ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0300
**Audit ID:** FR-A1-0300
**Card ID:** `a1-anziehen-30`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** anziehen
**LV MASTER reference:** uzvilkt
**CURRENT:** Mettez
**PROPOSED_ET (audit ieteikums):** Mettre
**Problēma:** « Mettez » est un impératif à la 2e personne du pluriel, tandis que « anziehen » est un infinitif.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0301
**Audit ID:** FR-A1-0301
**Card ID:** `a1-anhalten-31`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** anhalten
**LV MASTER reference:** apstāties
**CURRENT:** Pour arrêter
**PROPOSED_ET (audit ieteikums):** S'arrêter
**Problēma:** La source lettone indique l'action de s'arrêter ; « arrêter » sans pronom est transitif et change le sens.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0302
**Audit ID:** FR-A1-0302
**Card ID:** `a1-antworten-36`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** antworten
**LV MASTER reference:** atbildēt
**CURRENT:** Pour répondre
**PROPOSED_ET (audit ieteikums):** Répondre
**Problēma:** « Pour répondre » ajoute une notion de but ; l'infinitif allemand correspond à « répondre ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0303
**Audit ID:** FR-A1-0303
**Card ID:** `a1-Arm-44`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Arm
**LV MASTER reference:** roka
**CURRENT:** Main
**PROPOSED_ET (audit ieteikums):** Bras
**Problēma:** « Arm » signifie « bras » ; « main » correspond à l'allemand « Hand ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0304
**Audit ID:** FR-A1-0304
**Card ID:** `a1-Ärztin-46`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** Ärztin
**LV MASTER reference:** ārste
**CURRENT:** Un médecin
**PROPOSED_ET (audit ieteikums):** Une médecin
**Problēma:** « Ärztin » est explicitement féminin ; l'article masculin « un » ne respecte pas le genre.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0305
**Audit ID:** FR-A1-0305
**Card ID:** `a1-aufmachen-50`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** aufmachen
**LV MASTER reference:** atvērt
**CURRENT:** Pour ouvrir
**PROPOSED_ET (audit ieteikums):** Ouvrir
**Problēma:** « Pour ouvrir » signifie « afin d'ouvrir » ; le lemme allemand correspond à « ouvrir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0306
**Audit ID:** FR-A1-0306
**Card ID:** `a1-aufpassen-51`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** aufpassen
**LV MASTER reference:** uzmanīties
**CURRENT:** Sois prudent
**PROPOSED_ET (audit ieteikums):** Faire attention
**Problēma:** « Sois prudent » est un impératif adressé à une personne ; « aufpassen » est ici présenté à l'infinitif.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0307
**Audit ID:** FR-A1-0307
**Card ID:** `a1-aufwärts-53`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** aufwärts
**LV MASTER reference:** uz augšu
**CURRENT:** En haut
**PROPOSED_ET (audit ieteikums):** Vers le haut
**Problēma:** « En haut » indique une position ; « aufwärts » exprime une direction ascendante, « vers le haut ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0308
**Audit ID:** FR-A1-0308
**Card ID:** `a1-auf dem Bahnhof-59`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** auf dem Bahnhof
**LV MASTER reference:** stacijā
**CURRENT:** A la gare
**PROPOSED_ET (audit ieteikums):** À la gare
**Problēma:** The French preposition requires a grave accent: « À ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0309
**Audit ID:** FR-A1-0309
**Card ID:** `a1-Bauch-73`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Bauch
**LV MASTER reference:** vēders
**CURRENT:** Estomac
**PROPOSED_ET (audit ieteikums):** Ventre
**Problēma:** « Bauch » means belly or abdomen; « estomac » corresponds more closely to German « Magen ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0310
**Audit ID:** FR-A1-0310
**Card ID:** `a1-beginnen-77`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** beginnen
**LV MASTER reference:** sākt
**CURRENT:** Pour commencer
**PROPOSED_ET (audit ieteikums):** Commencer
**Problēma:** The current phrase means « in order to begin »; the German infinitive is simply « commencer ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0311
**Audit ID:** FR-A1-0311
**Card ID:** `a1-bekommen-82`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** bekommen
**LV MASTER reference:** saņemt
**CURRENT:** Pour recevoir
**PROPOSED_ET (audit ieteikums):** Recevoir
**Problēma:** The current phrase means « in order to receive »; the German infinitive is simply « recevoir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0312
**Audit ID:** FR-A1-0312
**Card ID:** `a1-besuchen-89`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** besuchen
**LV MASTER reference:** apmeklēt
**CURRENT:** Pour assister • Pour visiter
**PROPOSED_ET (audit ieteikums):** Visiter
**Problēma:** The learner-facing field contains multiple translations; « assister » means attend, not visit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0313
**Audit ID:** FR-A1-0313
**Card ID:** `a1-Brötchen-113`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Brötchen
**LV MASTER reference:** maizīte
**CURRENT:** Un chignon
**PROPOSED_ET (audit ieteikums):** Un petit pain
**Problēma:** « Chignon » means a hair bun; « Brötchen » is a small bread roll.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0314
**Audit ID:** FR-A1-0314
**Card ID:** `a1-Cousine-125`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** Cousine
**LV MASTER reference:** māsīca
**CURRENT:** Cousin
**PROPOSED_ET (audit ieteikums):** Cousine
**Problēma:** Le nom français doit être au féminin pour correspondre à « Cousine ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0315
**Audit ID:** FR-A1-0315
**Card ID:** `a1-danken-127`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** danken
**LV MASTER reference:** pateikties
**CURRENT:** Pour remercier
**PROPOSED_ET (audit ieteikums):** Remercier
**Problēma:** « Pour remercier » exprime un but, tandis que l’infinitif allemand signifie « remercier ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0316
**Audit ID:** FR-A1-0316
**Card ID:** `a1-dein-132`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** dein
**LV MASTER reference:** tavs
**CURRENT:** Le vôtre
**PROPOSED_ET (audit ieteikums):** Ton
**Problēma:** « Dein » est un déterminant possessif (« ton/ta/tes »), pas le pronom « le vôtre ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0317
**Audit ID:** FR-A1-0317
**Card ID:** `a1-dürfen-150`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** dürfen
**LV MASTER reference:** drīkstēt
**CURRENT:** Être autorisé
**PROPOSED_ET (audit ieteikums):** Avoir le droit de
**Problēma:** Le verbe modal « dürfen » exprime la permission ; « avoir le droit de » est l’équivalent direct.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0318
**Audit ID:** FR-A1-0318
**Card ID:** `a1-Ei-153`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Ei
**LV MASTER reference:** ola
**CURRENT:** Un oeuf
**PROPOSED_ET (audit ieteikums):** Un œuf
**Problēma:** Le mot français s’écrit avec la ligature « œ » : « œuf ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0319
**Audit ID:** FR-A1-0319
**Card ID:** `a1-Erde-164`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Erde
**LV MASTER reference:** zeme
**CURRENT:** Atterrir
**PROPOSED_ET (audit ieteikums):** Terre
**Problēma:** « Erde » signifie « terre », tandis que « atterrir » est le verbe allemand « landen ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0320
**Audit ID:** FR-A1-0320
**Card ID:** `a1-Esslöffel-168`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Esslöffel
**LV MASTER reference:** ēdamkarote
**CURRENT:** Cuillerée à soupe
**PROPOSED_ET (audit ieteikums):** Cuillère à soupe
**Problēma:** « Cuillerée » désigne une quantité ; « Esslöffel » désigne l’ustensile, une cuillère à soupe.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0321
**Audit ID:** FR-A1-0321
**Card ID:** `a1-euer-171`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** euer
**LV MASTER reference:** jūsu
**CURRENT:** Le vôtre
**PROPOSED_ET (audit ieteikums):** Votre
**Problēma:** « Euer » est un déterminant possessif (« votre »), pas le pronom « le vôtre ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0322
**Audit ID:** FR-A1-0322
**Card ID:** `a1-Fernseher-182`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Fernseher
**LV MASTER reference:** televizors
**CURRENT:** Télévision
**PROPOSED_ET (audit ieteikums):** Téléviseur
**Problēma:** Le terme allemand désigne l'appareil, tandis que « télévision » désigne surtout le média ou le service.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0323
**Audit ID:** FR-A1-0323
**Card ID:** `a1-fett-184`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** fett
**LV MASTER reference:** trekns
**CURRENT:** Graisse
**PROPOSED_ET (audit ieteikums):** Gras
**Problēma:** « Fett » est un adjectif allemand signifiant « gras » ; « graisse » est un nom français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0324
**Audit ID:** FR-A1-0324
**Card ID:** `a1-Foto-195`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Foto
**LV MASTER reference:** fotogrāfija
**CURRENT:** Photographier
**PROPOSED_ET (audit ieteikums):** Photo
**Problēma:** « Foto » est un nom désignant une photographie ; « photographier » est le verbe correspondant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0325
**Audit ID:** FR-A1-0325
**Card ID:** `a1-frei-199`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** frei
**LV MASTER reference:** brīvs
**CURRENT:** Gratuit
**PROPOSED_ET (audit ieteikums):** Libre
**Problēma:** « Frei » signifie ici « libre » ; « gratuit » ne couvre qu'un sens particulier de l'allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0326
**Audit ID:** FR-A1-0326
**Card ID:** `a1-Freundin-202`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Freundin
**LV MASTER reference:** draudzene
**CURRENT:** Petite amie
**PROPOSED_ET (audit ieteikums):** Amie
**Problēma:** « Freundin » peut signifier amie ou petite amie ; « petite amie » impose un sens amoureux absent du contexte allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0327
**Audit ID:** FR-A1-0327
**Card ID:** `a1-Fußball-218`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** SEMANTICS
**DE (read-only):** Fußball
**LV MASTER reference:** futbols
**CURRENT:** Football américain
**PROPOSED_ET (audit ieteikums):** Football
**Problēma:** « Fußball » désigne le football, tandis que « football américain » désigne un autre sport.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0328
**Audit ID:** FR-A1-0328
**Card ID:** `a1-geboren-224`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** geboren
**LV MASTER reference:** dzimis
**CURRENT:** Est né
**PROPOSED_ET (audit ieteikums):** Né
**Problēma:** Le français actuel ajoute un verbe conjugué et un sujet masculin implicite ; l'allemand est un participe/adjectif seul.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0329
**Audit ID:** FR-A1-0329
**Card ID:** `a1-gefallen-225`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** gefallen
**LV MASTER reference:** patikt
**CURRENT:** Aimer
**PROPOSED_ET (audit ieteikums):** Plaire
**Problēma:** Dans ce sens, « gefallen » signifie « plaire » ; « aimer » ne rend pas la construction et le sens allemands.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0330
**Audit ID:** FR-A1-0330
**Card ID:** `a1-Geschichte-233`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Geschichte
**LV MASTER reference:** stāsts
**CURRENT:** Histoire • Histoire
**PROPOSED_ET (audit ieteikums):** Histoire
**Problēma:** Le champ learner-facing contient deux traductions séparées par une puce ; la répétition doit être supprimée.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0331
**Audit ID:** FR-A1-0331
**Card ID:** `a1-Gesicht-235`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Gesicht
**LV MASTER reference:** seja
**CURRENT:** Affronter
**PROPOSED_ET (audit ieteikums):** Visage
**Problēma:** « Affronter » signifie faire face à, tandis que « Gesicht » signifie « visage ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0332
**Audit ID:** FR-A1-0332
**Card ID:** `a1-Getränk-239`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Getränk
**LV MASTER reference:** dzēriens
**CURRENT:** Un verre
**PROPOSED_ET (audit ieteikums):** Boisson
**Problēma:** « Getränk » signifie « boisson » ; « un verre » désigne le récipient ou son contenu servi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0333
**Audit ID:** FR-A1-0333
**Card ID:** `a1-grüßen-257`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** grüßen
**LV MASTER reference:** sveicināt
**CURRENT:** Pour saluer
**PROPOSED_ET (audit ieteikums):** Saluer
**Problēma:** L’infinitif allemand « grüßen » se traduit directement par « saluer », sans « pour ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0334
**Audit ID:** FR-A1-0334
**Card ID:** `a1-halb-262`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** halb
**LV MASTER reference:** pus
**CURRENT:** Côté
**PROPOSED_ET (audit ieteikums):** Demi
**Problēma:** « Halb » signifie « demi » ou « à moitié » ; « côté » signifie « Seite » en allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0335
**Audit ID:** FR-A1-0335
**Card ID:** `a1-Hälfte-263`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Hälfte
**LV MASTER reference:** puse
**CURRENT:** Côté
**PROPOSED_ET (audit ieteikums):** Moitié
**Problēma:** « Hälfte » signifie « moitié », tandis que « côté » signifie « Seite » en allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0336
**Audit ID:** FR-A1-0336
**Card ID:** `a1-helfen-277`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** helfen
**LV MASTER reference:** palīdzēt
**CURRENT:** Pour aider
**PROPOSED_ET (audit ieteikums):** Aider
**Problēma:** L’infinitif allemand « helfen » se traduit directement par « aider », sans « pour ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0337
**Audit ID:** FR-A1-0337
**Card ID:** `a1-Herr-280`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Herr
**LV MASTER reference:** kungs
**CURRENT:** M
**PROPOSED_ET (audit ieteikums):** Monsieur
**Problēma:** « M » seul n’est pas une traduction française correcte de « Herr » ; le terme A1 attendu est « Monsieur ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0338
**Audit ID:** FR-A1-0338
**Card ID:** `a1-hübsch-288`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** hübsch
**LV MASTER reference:** glīts
**CURRENT:** Propre • Agréable
**PROPOSED_ET (audit ieteikums):** Joli
**Problēma:** Le champ contient plusieurs traductions ; « hübsch » signifie ici « joli ». Une seule forme est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0339
**Audit ID:** FR-A1-0339
**Card ID:** `a1-hundert-289`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** hundert
**LV MASTER reference:** simts
**CURRENT:** Une centaine
**PROPOSED_ET (audit ieteikums):** Cent
**Problēma:** « Hundert » correspond au nombre exact « cent » ; « une centaine » signifie approximativement cent.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0340
**Audit ID:** FR-A1-0340
**Card ID:** `a1-ich-291`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** ich
**LV MASTER reference:** es
**CURRENT:** Moi
**PROPOSED_ET (audit ieteikums):** Je
**Problēma:** Le pronom sujet allemand « ich » se traduit par « je » ; « moi » est une forme tonique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0341
**Audit ID:** FR-A1-0341
**Card ID:** `a1-jawohl-299`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** jawohl
**LV MASTER reference:** tieši tā
**CURRENT:** Exactement comme ça
**PROPOSED_ET (audit ieteikums):** Oui, absolument
**Problēma:** Jawohl exprime un oui affirmatif ou emphatique, pas « exactement comme ça ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0342
**Audit ID:** FR-A1-0342
**Card ID:** `a1-jetzt-302`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** jetzt
**LV MASTER reference:** tagad • pašlaik
**CURRENT:** Maintenant • Actuellement
**PROPOSED_ET (audit ieteikums):** Maintenant
**Problēma:** Le séparateur « • » présente plusieurs traductions dans le champ destiné à l’apprenant; un choix est requis.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0343
**Audit ID:** FR-A1-0343
**Card ID:** `a1-kommen-318`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** kommen
**LV MASTER reference:** nākt
**CURRENT:** A venir
**PROPOSED_ET (audit ieteikums):** Venir
**Problēma:** Le mot allemand est un infinitif; « à venir » est une locution et ne traduit pas directement venir.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0344
**Audit ID:** FR-A1-0344
**Card ID:** `a1-Honig-324`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Honig
**LV MASTER reference:** medus
**CURRENT:** Chéri
**PROPOSED_ET (audit ieteikums):** Miel
**Problēma:** « Chéri » est un terme affectueux; le nom allemand signifie « miel ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0345
**Audit ID:** FR-A1-0345
**Card ID:** `a1-Koch-340`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Koch
**LV MASTER reference:** pavārs
**CURRENT:** Cuisiner
**PROPOSED_ET (audit ieteikums):** Cuisinier
**Problēma:** « Koch » est un nom désignant une personne; « cuisiner » est le verbe.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0346
**Audit ID:** FR-A1-0346
**Card ID:** `a1-Köchin-341`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Köchin
**LV MASTER reference:** pavāre
**CURRENT:** Cuisiner
**PROPOSED_ET (audit ieteikums):** Cuisinière
**Problēma:** « Köchin » est le nom féminin de la cuisinière; « cuisiner » est le verbe.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0347
**Audit ID:** FR-A1-0347
**Card ID:** `a1-Lehrerin-365`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** Lehrerin
**LV MASTER reference:** skolotāja
**CURRENT:** Un professeur
**PROPOSED_ET (audit ieteikums):** Une professeure
**Problēma:** Le nom allemand désigne une enseignante ; l’article et le genre français sont incorrects.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0348
**Audit ID:** FR-A1-0348
**Card ID:** `a1-lesen-369`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** lesen
**LV MASTER reference:** lasīt
**CURRENT:** A lire
**PROPOSED_ET (audit ieteikums):** Lire
**Problēma:** Le verbe allemand à l’infinitif doit être traduit par l’infinitif français, sans la préposition « à ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0349
**Audit ID:** FR-A1-0349
**Card ID:** `a1-links-380`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** links
**LV MASTER reference:** pa kreisi • kreisais
**CURRENT:** Gauche • Gauche
**PROPOSED_ET (audit ieteikums):** Gauche
**Problēma:** Le séparateur « • » expose plusieurs traductions dans le champ apprenant ; le choix doit être validé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0350
**Audit ID:** FR-A1-0350
**Card ID:** `a1-Mai-389`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Mai
**LV MASTER reference:** maijs
**CURRENT:** Peut
**PROPOSED_ET (audit ieteikums):** Mai
**Problēma:** « Peut » est une forme du verbe pouvoir ; le mois allemand Mai se traduit par « mai ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0351
**Audit ID:** FR-A1-0351
**Card ID:** `a1-malen-391`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** malen
**LV MASTER reference:** gleznot • krāsot
**CURRENT:** Peindre • Peindre
**PROPOSED_ET (audit ieteikums):** Peindre
**Problēma:** Le séparateur « • » expose plusieurs traductions dans le champ apprenant ; le choix doit être validé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0352
**Audit ID:** FR-A1-0352
**Card ID:** `a1-Mandarine-393`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** Mandarine
**LV MASTER reference:** mandarīns
**CURRENT:** Mandarin
**PROPOSED_ET (audit ieteikums):** Mandarine
**Problēma:** Le fruit « Mandarine » est féminin en français ; « Mandarin » désigne notamment une personne ou une langue.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0353
**Audit ID:** FR-A1-0353
**Card ID:** `a1-mein-401`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** mein
**LV MASTER reference:** mans
**CURRENT:** Le mien
**PROPOSED_ET (audit ieteikums):** Mon
**Problēma:** « Mein » est un possessif déterminant (« mon »), tandis que « le mien » signifie « mine » avec un nom omis.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0354
**Audit ID:** FR-A1-0354
**Card ID:** `a1-mitnehmen-409`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** mitnehmen
**LV MASTER reference:** ņemt līdzi
**CURRENT:** Emportez avec vous
**PROPOSED_ET (audit ieteikums):** Emporter
**Problēma:** « Emportez » est un impératif ; le mot allemand est un infinitif et se traduit ici par « emporter ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0355
**Audit ID:** FR-A1-0355
**Card ID:** `a1-Mittag-410`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Mittag
**LV MASTER reference:** pusdiena
**CURRENT:** Déjeuner
**PROPOSED_ET (audit ieteikums):** Midi
**Problēma:** « Mittag » signifie midi ou milieu de la journée ; « déjeuner » désigne le repas de midi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0356
**Audit ID:** FR-A1-0356
**Card ID:** `a1-Mütze-425`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Mütze
**LV MASTER reference:** cepure
**CURRENT:** Chapeau
**PROPOSED_ET (audit ieteikums):** Bonnet
**Problēma:** « Mütze » désigne un bonnet ou une casquette, pas un chapeau au sens général.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0357
**Audit ID:** FR-A1-0357
**Card ID:** `a1-Natur-432`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Natur
**LV MASTER reference:** daba
**CURRENT:** N
**PROPOSED_ET (audit ieteikums):** Nature
**Problēma:** Le texte français est tronqué et ne traduit pas le nom allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0358
**Audit ID:** FR-A1-0358
**Card ID:** `a1-neben-434`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** neben
**LV MASTER reference:** blakus
**CURRENT:** Près de
**PROPOSED_ET (audit ieteikums):** À côté de
**Problēma:** « Neben » exprime principalement la position juste à côté de, plus précisément que « près de ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0359
**Audit ID:** FR-A1-0359
**Card ID:** `a1-nennen-437`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** nennen
**LV MASTER reference:** nosaukt
**CURRENT:** Pour nommer
**PROPOSED_ET (audit ieteikums):** Nommer
**Problēma:** « Pour nommer » ajoute un sens de but absent de l’infinitif allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0360
**Audit ID:** FR-A1-0360
**Card ID:** `a1-nett-438`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** nett
**LV MASTER reference:** jauks
**CURRENT:** Bon
**PROPOSED_ET (audit ieteikums):** Gentil
**Problēma:** « Nett » signifie « gentil » ou « sympathique », tandis que « bon » signifie « gut » ou « good ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0361
**Audit ID:** FR-A1-0361
**Card ID:** `a1-nicht-447`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** nicht
**LV MASTER reference:** ne
**CURRENT:** Non
**PROPOSED_ET (audit ieteikums):** Ne... pas
**Problēma:** « Nicht » exprime la négation, alors que « non » traduit « nein » ou une réponse négative.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0362
**Audit ID:** FR-A1-0362
**Card ID:** `a1-normal-452`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** normal
**LV MASTER reference:** normāls
**CURRENT:** Normale
**PROPOSED_ET (audit ieteikums):** Normal
**Problēma:** La forme française masculine non marquée correspondant au lemme allemand est « normal », pas « normale ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0363
**Audit ID:** FR-A1-0363
**Card ID:** `a1-Nummer-455`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Nummer
**LV MASTER reference:** numurs
**CURRENT:** Nombre
**PROPOSED_ET (audit ieteikums):** Numéro
**Problēma:** « Nummer » signifie « numéro » ; « nombre » correspond à « Zahl ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0364
**Audit ID:** FR-A1-0364
**Card ID:** `a1-oben-458`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** oben
**LV MASTER reference:** augšā
**CURRENT:** Au-dessus de
**PROPOSED_ET (audit ieteikums):** En haut
**Problēma:** « Au-dessus de » est une préposition nécessitant un complément, tandis que « oben » est un adverbe.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0365
**Audit ID:** FR-A1-0365
**Card ID:** `a1-öffnen-460`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** öffnen
**LV MASTER reference:** atvērt
**CURRENT:** Pour ouvrir
**PROPOSED_ET (audit ieteikums):** Ouvrir
**Problēma:** « Pour ouvrir » ajoute une notion de but absente de l'infinitif allemand « öffnen ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0366
**Audit ID:** FR-A1-0366
**Card ID:** `a1-Pflanze-475`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** SEMANTICS
**DE (read-only):** Pflanze
**LV MASTER reference:** augs
**CURRENT:** Usine
**PROPOSED_ET (audit ieteikums):** Plante
**Problēma:** « Pflanze » signifie « plante » ; « usine » signifie une factory et ne correspond pas au sens allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0367
**Audit ID:** FR-A1-0367
**Card ID:** `a1-Post-480`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Post
**LV MASTER reference:** pasts
**CURRENT:** E-mail
**PROPOSED_ET (audit ieteikums):** Poste
**Problēma:** « E-mail » signifie courrier électronique, pas « Post » au sens de poste ou courrier.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0368
**Audit ID:** FR-A1-0368
**Card ID:** `a1-Punkt-486`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Punkt
**LV MASTER reference:** punkts
**CURRENT:** Indiquer
**PROPOSED_ET (audit ieteikums):** Point
**Problēma:** « Indiquer » signifie « angeben » ; le nom allemand « Punkt » se traduit par « point ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0369
**Audit ID:** FR-A1-0369
**Card ID:** `a1-putzen-487`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** putzen
**LV MASTER reference:** tīrīt
**CURRENT:** Pour nettoyer
**PROPOSED_ET (audit ieteikums):** Nettoyer
**Problēma:** « Pour nettoyer » signifie « afin de nettoyer » ; la fiche doit donner l’infinitif français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0370
**Audit ID:** FR-A1-0370
**Card ID:** `a1-rechts-491`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** rechts
**LV MASTER reference:** pa labi • labais
**CURRENT:** À droite • La droite
**PROPOSED_ET (audit ieteikums):** À droite
**Problēma:** Deux traductions distinctes sont séparées par « • » ; une décision de propriétaire est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0371
**Audit ID:** FR-A1-0371
**Card ID:** `a1-regnen-495`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** regnen
**LV MASTER reference:** līt
**CURRENT:** Il pleut
**PROPOSED_ET (audit ieteikums):** Pleuvoir
**Problēma:** « Il pleut » est une phrase conjuguée ; l’équivalent lexical de l’infinitif allemand est « pleuvoir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0372
**Audit ID:** FR-A1-0372
**Card ID:** `a1-rufen-500`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** rufen
**LV MASTER reference:** saukt
**CURRENT:** Pour appeler
**PROPOSED_ET (audit ieteikums):** Appeler
**Problēma:** « Pour appeler » signifie « afin d’appeler » ; la fiche doit donner l’infinitif français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0373
**Audit ID:** FR-A1-0373
**Card ID:** `a1-sauber-508`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sauber
**LV MASTER reference:** tīrs
**CURRENT:** Faire le ménage
**PROPOSED_ET (audit ieteikums):** Propre
**Problēma:** « Faire le ménage » est une locution verbale ; « sauber » est l’adjectif « propre ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0374
**Audit ID:** FR-A1-0374
**Card ID:** `a1-schicken-511`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** schicken
**LV MASTER reference:** sūtīt
**CURRENT:** Pour envoyer
**PROPOSED_ET (audit ieteikums):** Envoyer
**Problēma:** « Pour envoyer » signifie « afin d’envoyer » ; la fiche doit donner l’infinitif français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0375
**Audit ID:** FR-A1-0375
**Card ID:** `a1-schmecken-515`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** schmecken
**LV MASTER reference:** garšot
**CURRENT:** A déguster
**PROPOSED_ET (audit ieteikums):** Avoir bon goût
**Problēma:** « À déguster » signifie « à goûter » et ne traduit pas le verbe « schmecken » au sens de « avoir bon goût ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0376
**Audit ID:** FR-A1-0376
**Card ID:** `a1-Schnee-517`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Schnee
**LV MASTER reference:** sniegs
**CURRENT:** Il va neiger
**PROPOSED_ET (audit ieteikums):** Neige
**Problēma:** « Il va neiger » signifie « Es wird schneien » ; le nom « Schnee » se traduit par « neige ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0377
**Audit ID:** FR-A1-0377
**Card ID:** `a1-schneien-518`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** schneien
**LV MASTER reference:** snigt
**CURRENT:** Il neige
**PROPOSED_ET (audit ieteikums):** Neiger
**Problēma:** « Il neige » est une phrase conjuguée ; l’équivalent lexical de l’infinitif allemand est « neiger ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0378
**Audit ID:** FR-A1-0378
**Card ID:** `a1-Schüler-527`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Schüler
**LV MASTER reference:** skolnieks
**CURRENT:** Un étudiant
**PROPOSED_ET (audit ieteikums):** Élève
**Problēma:** « Un étudiant » désigne généralement un étudiant de l’enseignement supérieur ; « Schüler » signifie « élève ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0379
**Audit ID:** FR-A1-0379
**Card ID:** `a1-spät-569`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** spät
**LV MASTER reference:** vēls
**CURRENT:** En retard
**PROPOSED_ET (audit ieteikums):** Tard
**Problēma:** «Spät» signifie «tard»; «en retard» signifie être late ou retardé, avec une nuance différente.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0380
**Audit ID:** FR-A1-0380
**Card ID:** `a1-spielen-572`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** spielen
**LV MASTER reference:** spēlēt
**CURRENT:** Pour jouer
**PROPOSED_ET (audit ieteikums):** Jouer
**Problēma:** Le français «pour jouer» ajoute une préposition et exprime un but; l’infinitif allemand se traduit par «jouer».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0381
**Audit ID:** FR-A1-0381
**Card ID:** `a1-suchen-584`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** suchen
**LV MASTER reference:** meklēt
**CURRENT:** Pour rechercher
**PROPOSED_ET (audit ieteikums):** Chercher
**Problēma:** «Pour rechercher» exprime le but et ne correspond pas à l’infinitif allemand isolé «suchen».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0382
**Audit ID:** FR-A1-0382
**Card ID:** `a1-Teller-595`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Teller
**LV MASTER reference:** šķīvis
**CURRENT:** Plaque
**PROPOSED_ET (audit ieteikums):** Assiette
**Problēma:** Un «Teller» est une assiette; «plaque» désigne une plaque ou une surface plate, pas une assiette de table.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0383
**Audit ID:** FR-A1-0383
**Card ID:** `a1-Tisch-599`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Tisch
**LV MASTER reference:** galds
**CURRENT:** Tableau
**PROPOSED_ET (audit ieteikums):** Table
**Problēma:** « Tableau » signifie picture/board; le sens correct de « Tisch » est « table ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0384
**Audit ID:** FR-A1-0384
**Card ID:** `a1-Treppe-603`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Treppe
**LV MASTER reference:** kāpnes
**CURRENT:** Escaliers
**PROPOSED_ET (audit ieteikums):** Escalier
**Problēma:** Le mot allemand est au singulier; « escalier » est l’équivalent français correspondant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0385
**Audit ID:** FR-A1-0385
**Card ID:** `a1-versuchen-622`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** versuchen
**LV MASTER reference:** mēģināt
**CURRENT:** Pour essayer
**PROPOSED_ET (audit ieteikums):** Essayer
**Problēma:** « Pour essayer » signifie « in order to try »; l’infinitif allemand correspond à « essayer ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0386
**Audit ID:** FR-A1-0386
**Card ID:** `a1-vielleicht-624`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** vielleicht
**LV MASTER reference:** varbūt
**CURRENT:** Peut être
**PROPOSED_ET (audit ieteikums):** Peut-être
**Problēma:** L’adverbe français s’écrit avec un trait d’union.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0387
**Audit ID:** FR-A1-0387
**Card ID:** `a1-von-635`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** von
**LV MASTER reference:** no
**CURRENT:** Depuis
**PROPOSED_ET (audit ieteikums):** De
**Problēma:** « Depuis » exprime une durée ou un point de départ temporel; « von » se traduit ici par « de ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0388
**Audit ID:** FR-A1-0388
**Card ID:** `a1-Vorname-637`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Vorname
**LV MASTER reference:** vārds
**CURRENT:** Mot
**PROPOSED_ET (audit ieteikums):** Prénom
**Problēma:** « Mot » signifie word; « Vorname » désigne le prénom.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0389
**Audit ID:** FR-A1-0389
**Card ID:** `a1-waschen-645`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** waschen
**LV MASTER reference:** mazgāt
**CURRENT:** Se laver
**PROPOSED_ET (audit ieteikums):** Laver
**Problēma:** « Se laver » est pronominal et signifie wash oneself; « waschen » est ici le verbe transitif « laver ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0390
**Audit ID:** FR-A1-0390
**Card ID:** `a1-welcher-652`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** welcher
**LV MASTER reference:** kurš
**CURRENT:** OMS
**PROPOSED_ET (audit ieteikums):** Lequel
**Problēma:** « OMS » est l’abréviation de l’Organisation mondiale de la santé; « welcher » signifie « lequel ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0391
**Audit ID:** FR-A1-0391
**Card ID:** `a1-Zimmer-665`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Zimmer
**LV MASTER reference:** istaba
**CURRENT:** Chambre
**PROPOSED_ET (audit ieteikums):** La chambre
**Problēma:** Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0392
**Audit ID:** FR-A1-0392
**Card ID:** `a1-Zitrone-666`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Zitrone
**LV MASTER reference:** citrons
**CURRENT:** Citron
**PROPOSED_ET (audit ieteikums):** Le citron
**Problēma:** Le nom français est masculin et l’article défini manque dans la fiche.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0393
**Audit ID:** FR-A1-0393
**Card ID:** `a1-Zucker-669`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Zucker
**LV MASTER reference:** cukurs
**CURRENT:** Sucre
**PROPOSED_ET (audit ieteikums):** Le sucre
**Problēma:** Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0394
**Audit ID:** FR-A1-0394
**Card ID:** `a1-zumachen-673`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** TRANSLATION
**DE (read-only):** zumachen
**LV MASTER reference:** aiztaisīt
**CURRENT:** Gros plan
**PROPOSED_ET (audit ieteikums):** Fermer
**Problēma:** « Gros plan » signifie close-up; zumachen signifie fermer.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0395
**Audit ID:** FR-A1-0395
**Card ID:** `a1-zurück-674`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** zurück
**LV MASTER reference:** atpakaļ
**CURRENT:** Dos
**PROPOSED_ET (audit ieteikums):** En arrière
**Problēma:** « Dos » est le nom d’une partie du corps; zurück est un adverbe signifiant en arrière.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0396
**Audit ID:** FR-A1-0396
**Card ID:** `a1-zweihundert-680`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** zweihundert
**LV MASTER reference:** divsimt
**CURRENT:** Deux cent
**PROPOSED_ET (audit ieteikums):** Deux cents
**Problēma:** « Cent » prend un s dans « deux cents » lorsqu’il n’est pas suivi d’un autre nombre.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0397
**Audit ID:** FR-A1-0397
**Card ID:** `a1-Zwiebel-683`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Zwiebel
**LV MASTER reference:** sīpols
**CURRENT:** Oignon
**PROPOSED_ET (audit ieteikums):** L’oignon
**Problēma:** Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0398
**Audit ID:** FR-A1-0398
**Card ID:** `a1-Stadt-696`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Stadt
**LV MASTER reference:** pilsēta
**CURRENT:** Ville
**PROPOSED_ET (audit ieteikums):** La ville
**Problēma:** Le nom français doit normalement être présenté avec son article dans cette fiche de vocabulaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0399
**Audit ID:** FR-A1-0399
**Card ID:** `a1-Staat-697`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Staat
**LV MASTER reference:** valsts
**CURRENT:** Pays
**PROPOSED_ET (audit ieteikums):** L’État
**Problēma:** Staat signifie « État »; « pays » correspond plutôt à Land ou Staat dans un autre sens contextuel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0400
**Audit ID:** FR-A1-0400
**Card ID:** `a1-sprechen-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sprechen
**LV MASTER reference:** Viņa runā ar savu skolotāju.
**CURRENT:** Je parle allemand
**PROPOSED_ET (audit ieteikums):** Elle parle avec son professeur.
**Problēma:** La phrase française ne correspond ni au sujet ni au complément de la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0401
**Audit ID:** FR-A1-0401
**Card ID:** `a1-sprechen-study`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sprechen
**LV MASTER reference:** pasacīt (konkrētu tekstu)
**CURRENT:** Raconter (un texte spécifique)
**PROPOSED_ET (audit ieteikums):** Dire (un texte précis)
**Problēma:** Raconter signifie narrer; le contraste attendu est dire, non raconter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0402
**Audit ID:** FR-A1-0402
**Card ID:** `a1-klein-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** klein
**LV MASTER reference:** Bērns vēl ir mazs.
**CURRENT:** La pièce est petite.
**PROPOSED_ET (audit ieteikums):** L'enfant est encore petit.
**Problēma:** La traduction reprend la phrase précédente au lieu de traduire l'enfant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0403
**Audit ID:** FR-A1-0403
**Card ID:** `a1-klein-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** klein
**LV MASTER reference:** Man ir maza soma.
**CURRENT:** L'enfant est encore petit.
**PROPOSED_ET (audit ieteikums):** J'ai un petit sac.
**Problēma:** La traduction correspond à l'exemple précédent, pas au sac.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0405
**Audit ID:** FR-A1-0405
**Card ID:** `a1-an`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** an
**LV MASTER reference:** pie sienas / uz sienas
**CURRENT:** Sur le mur / sur le mur
**PROPOSED_ET (audit ieteikums):** Au mur / sur le mur
**Problēma:** Deux formulations distinctes sont séparées par une barre et la répétition semble accidentelle.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0406
**Audit ID:** FR-A1-0406
**Card ID:** `a1-an`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** an
**LV MASTER reference:** pie loga
**CURRENT:** A la fenêtre
**PROPOSED_ET (audit ieteikums):** À la fenêtre
**Problēma:** La préposition française prend un accent grave.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0407
**Audit ID:** FR-A1-0407
**Card ID:** `a1-an`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** an
**LV MASTER reference:** Atceries: pie sienas/loga/malas → an.
**CURRENT:** Atceries : tarte sienas/loga/malas → an.
**PROPOSED_ET (audit ieteikums):** À retenir : au mur/à la fenêtre/au bord → an.
**Problēma:** Le texte contient du letton et « tarte », qui n'est pas une traduction française correcte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0408
**Audit ID:** FR-A1-0408
**Card ID:** `a1-ab`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** ab
**LV MASTER reference:** no
**CURRENT:** Depuis
**PROPOSED_ET (audit ieteikums):** À partir de
**Problēma:** Ab indique un point de départ; depuis exprime généralement une durée écoulée.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0409
**Audit ID:** FR-A1-0409
**Card ID:** `a1-ab`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ab
**LV MASTER reference:** no šodienas
**CURRENT:** A partir d'aujourd'hui
**PROPOSED_ET (audit ieteikums):** À partir d'aujourd'hui
**Problēma:** La préposition À doit porter un accent grave.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0410
**Audit ID:** FR-A1-0410
**Card ID:** `a1-ab`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ab
**LV MASTER reference:** no pirmdienas
**CURRENT:** A partir de lundi
**PROPOSED_ET (audit ieteikums):** À partir de lundi
**Problēma:** La préposition À doit porter un accent grave.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0411
**Audit ID:** FR-A1-0411
**Card ID:** `a1-ab`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** ab
**LV MASTER reference:** no plkst. 8
**CURRENT:** À partir de 8
**PROPOSED_ET (audit ieteikums):** À partir de 8 h
**Problēma:** L'heure est incomplète en français sans indication temporelle.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0412
**Audit ID:** FR-A1-0412
**Card ID:** `a1-ab`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** ab
**LV MASTER reference:** ārā no iekšienes
**CURRENT:** De l'intérieur
**PROPOSED_ET (audit ieteikums):** À partir de l'intérieur
**Problēma:** La formulation actuelle traduit plutôt aus; elle ne présente pas le point de départ de ab.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0413
**Audit ID:** FR-A1-0413
**Card ID:** `a1-aber`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** aber
**LV MASTER reference:** pretstats • iebilde • tomēr
**CURRENT:** Contraire • Objection • Cependant
**PROPOSED_ET (audit ieteikums):** Cependant
**Problēma:** Le champ learner-facing contient plusieurs équivalents séparés par des puces.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0414
**Audit ID:** FR-A1-0414
**Card ID:** `a1-aber`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** aber
**LV MASTER reference:** nevis • bet gan
**CURRENT:** Non • Mais
**PROPOSED_ET (audit ieteikums):** Pas…, mais…
**Problēma:** La structure française est incomplète et plusieurs éléments sont séparés par une puce.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0415
**Audit ID:** FR-A1-0415
**Card ID:** `a1-aber`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** aber
**LV MASTER reference:** Atceries: pretstats/iebilde → aber.
**CURRENT:** Atceries : pretstats/iebilde → aber.
**PROPOSED_ET (audit ieteikums):** À retenir : opposition/objection → aber.
**Problēma:** Le texte du champ français est entièrement en letton.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0416
**Audit ID:** FR-A1-0416
**Card ID:** `a1-also`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** also
**LV MASTER reference:** tātad • līdz ar to
**CURRENT:** Alors • Donc
**PROPOSED_ET (audit ieteikums):** Donc
**Problēma:** Le champ learner-facing contient plusieurs traductions séparées par une puce.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0417
**Audit ID:** FR-A1-0417
**Card ID:** `a1-also`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** also
**LV MASTER reference:** arī
**CURRENT:** Aussi
**PROPOSED_ET (audit ieteikums):** Également
**Problēma:** Aussi en français signifie généralement auch; ce sens ne correspond pas à also allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0418
**Audit ID:** FR-A1-0418
**Card ID:** `a1-also`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** also
**LV MASTER reference:** Atceries: secinājums → also.
**CURRENT:** Rappelez-vous : conclusion → aussi.
**PROPOSED_ET (audit ieteikums):** À retenir : conclusion → donc.
**Problēma:** Le mot français « aussi » correspond à auch, pas à also dans ce contexte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0419
**Audit ID:** FR-A1-0419
**Card ID:** `a1-auch-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** auch
**LV MASTER reference:** Viņa arī strādā šeit.
**CURRENT:** Je viens aussi
**PROPOSED_ET (audit ieteikums):** Elle travaille aussi ici.
**Problēma:** La traduction ne correspond ni au sujet ni au verbe de la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0420
**Audit ID:** FR-A1-0420
**Card ID:** `a1-auch-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** auch
**LV MASTER reference:** Es arī novēlu jums jauku dienu.
**CURRENT:** Elle travaille également ici.
**PROPOSED_ET (audit ieteikums):** Je vous souhaite aussi une bonne journée.
**Problēma:** La phrase française traduit l'exemple précédent, pas le souhait de bonne journée.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0421
**Audit ID:** FR-A1-0421
**Card ID:** `a1-auf`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** auf
**LV MASTER reference:** uz
**CURRENT:** À
**PROPOSED_ET (audit ieteikums):** Sur / à
**Problēma:** Auf exprime notamment sur et certains déplacements vers; « à » seul est trop limité.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0422
**Audit ID:** FR-A1-0422
**Card ID:** `a1-auf`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** auf
**LV MASTER reference:** uz (virsmas vai augšup)
**CURRENT:** Vers (surface ou vers le haut)
**PROPOSED_ET (audit ieteikums):** Sur / vers le haut
**Problēma:** La formulation mélange deux valeurs et ne rend pas clairement la valeur de surface.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0423
**Audit ID:** FR-A1-0423
**Card ID:** `a1-auf`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** auf
**LV MASTER reference:** pie (vertikālas virsmas)
**CURRENT:** À (surface verticale)
**PROPOSED_ET (audit ieteikums):** Sur (surface verticale)
**Problēma:** Pour une surface, le français emploie sur, non à.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0424
**Audit ID:** FR-A1-0424
**Card ID:** `a1-auf`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** auf
**LV MASTER reference:** iekšā
**CURRENT:** À l'intérieur
**PROPOSED_ET (audit ieteikums):** Sur / à
**Problēma:** « À l'intérieur » correspond plutôt à in; auf exprime une surface ou une direction selon le contexte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0426
**Audit ID:** FR-A1-0426
**Card ID:** `a1-aus`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** aus
**LV MASTER reference:** sākot no punkta vai laika
**CURRENT:** À partir d'un point ou d'une heure
**PROPOSED_ET (audit ieteikums):** À partir d'un point ou d'un moment
**Problēma:** Cette définition correspond à ab, non à aus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0428
**Audit ID:** FR-A1-0428
**Card ID:** `a1-aufs`
**Field/path:** `study.examples[6].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** aufs
**LV MASTER reference:** Kāp ātri laivā!
**CURRENT:** Venez vite au bateau !
**PROPOSED_ET (audit ieteikums):** Montez vite sur le bateau !
**Problēma:** Aufs Boot indique le mouvement vers le bateau ou à bord, pas simplement « au bateau ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0429
**Audit ID:** FR-A1-0429
**Card ID:** `a1-aufs`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** aufs
**LV MASTER reference:** uz konkrētu lietu (Akk.)
**CURRENT:** À un cas précis (Akk.)
**PROPOSED_ET (audit ieteikums):** Vers une chose précise (accusatif)
**Problēma:** Un cas grammatical n'est pas une chose; la définition doit expliquer la destination.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0430
**Audit ID:** FR-A1-0430
**Card ID:** `a1-aufs`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** aufs
**LV MASTER reference:** pie vertikālas virsmas
**CURRENT:** Sur une surface verticale
**PROPOSED_ET (audit ieteikums):** Près d'une surface verticale
**Problēma:** Une surface verticale relève plutôt de an; aufs exprime une destination sur une surface.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0431
**Audit ID:** FR-A1-0431
**Card ID:** `a1-aufs`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** aufs
**LV MASTER reference:** uz / pie (kam?)
**CURRENT:** À/chez (qui ?)
**PROPOSED_ET (audit ieteikums):** Vers / chez quelqu'un
**Problēma:** Le champ contient plusieurs équivalents séparés par une barre.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0432
**Audit ID:** FR-A1-0432
**Card ID:** `a1-baden`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** baden
**LV MASTER reference:** peldēties
**CURRENT:** Nager
**PROPOSED_ET (audit ieteikums):** Se baigner
**Problēma:** Baden signifie se baigner; nager correspond principalement à schwimmen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0433
**Audit ID:** FR-A1-0433
**Card ID:** `a1-baden`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** baden
**LV MASTER reference:** es eju peldēties.
**CURRENT:** Je vais nager
**PROPOSED_ET (audit ieteikums):** Je vais me baigner.
**Problēma:** La traduction française emploie nager au lieu de se baigner.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0434
**Audit ID:** FR-A1-0434
**Card ID:** `a1-baden`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** baden
**LV MASTER reference:** mēs ejam peldēties ezerā.
**CURRENT:** Nous allons nager dans le lac.
**PROPOSED_ET (audit ieteikums):** Nous allons nous baigner dans le lac.
**Problēma:** Le sens de baden est se baigner, non pratiquer la nage.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0435
**Audit ID:** FR-A1-0435
**Card ID:** `a1-baden`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** baden
**LV MASTER reference:** Es peldu katru pirmdienu.
**CURRENT:** Je vais nager tous les lundis.
**PROPOSED_ET (audit ieteikums):** Je me baigne tous les lundis.
**Problēma:** Le champ est rattaché à baden; la traduction doit employer se baigner.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0436
**Audit ID:** FR-A1-0436
**Card ID:** `a1-baden`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** baden
**LV MASTER reference:** peldēties / atrasties ūdenī / mazgāties
**CURRENT:** Nager / être dans l'eau / se laver
**PROPOSED_ET (audit ieteikums):** Se baigner / être dans l'eau / se laver
**Problēma:** Le premier équivalent français traduit schwimmen, pas baden.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0437
**Audit ID:** FR-A1-0437
**Card ID:** `a1-baden`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** baden
**LV MASTER reference:** Atceries: atpūta ūdenī → baden; peldēšanas kustība → schwimmen.
**CURRENT:** N'oubliez pas : reposez-vous dans l'eau → baden • Mouvement de nage → schwimmen.
**PROPOSED_ET (audit ieteikums):** À retenir : se baigner dans l'eau → baden • Mouvement de nage → nager.
**Problēma:** Le mot allemand schwimmen reste dans le texte français et « reposez-vous » ne signifie pas se baigner.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0438
**Audit ID:** FR-A1-0438
**Card ID:** `a1-bei`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** bei
**LV MASTER reference:** pie
**CURRENT:** À
**PROPOSED_ET (audit ieteikums):** Chez / auprès de
**Problēma:** Bei se traduit selon le contexte par chez ou auprès de; « à » seul est trop vague.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0439
**Audit ID:** FR-A1-0439
**Card ID:** `a1-bei`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** bei
**LV MASTER reference:** pie sienas, malas, krasta, virsmas malas
**CURRENT:** Au mur, au bord, au rivage, au bord de la surface
**PROPOSED_ET (audit ieteikums):** Près du mur, au bord, près du rivage, au bord de la surface
**Problēma:** Au mur signifie généralement sur le mur; bei exprime ici la proximité.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0440
**Audit ID:** FR-A1-0440
**Card ID:** `a1-bei`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** bei
**LV MASTER reference:** pie kāda dodas (virziens)
**CURRENT:** Qui va (direction)
**PROPOSED_ET (audit ieteikums):** Aller chez quelqu'un (direction)
**Problēma:** La formulation actuelle est agrammaticale et ne rend pas le sens directionnel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0441
**Audit ID:** FR-A1-0441
**Card ID:** `a1-bei`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** bei
**LV MASTER reference:** Atceries: pie cilvēka/vietas/uzņēmuma → bei.
**CURRENT:** N'oubliez pas : à personne/lieu/entreprise → bei.
**PROPOSED_ET (audit ieteikums):** À retenir : chez une personne, dans un lieu ou auprès d'une entreprise → bei.
**Problēma:** La suite « à personne/lieu/entreprise » est agrammaticale et trop elliptique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0442
**Audit ID:** FR-A1-0442
**Card ID:** `a1-bis`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** bis
**LV MASTER reference:** Es gaidu tavu ierašanos.
**CURRENT:** J'attends votre arrivée.
**PROPOSED_ET (audit ieteikums):** J'attends ton arrivée.
**Problēma:** Le letton emploie le possessif informel « ta », mais le français utilise le vouvoiement.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0443
**Audit ID:** FR-A1-0443
**Card ID:** `a1-bis`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** bis
**LV MASTER reference:** līdz šim es neko neesmu sapratis.
**CURRENT:** Pour l'instant je n'ai rien compris.
**PROPOSED_ET (audit ieteikums):** Jusqu'à présent, je n'ai rien compris.
**Problēma:** « Līdz šim » signifie « jusqu'à présent », et non « pour l'instant ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0444
**Audit ID:** FR-A1-0444
**Card ID:** `a1-bitte`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** bitte
**LV MASTER reference:** Vienu tasi kafijas, lūdzu.
**CURRENT:** S'il te plaît!
**PROPOSED_ET (audit ieteikums):** Une tasse de café, s'il vous plaît.
**Problēma:** La phrase française omet la demande de café présente dans la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0445
**Audit ID:** FR-A1-0445
**Card ID:** `a1-bitte`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** bitte
**LV MASTER reference:** Lūdzu, nāc iekšā.
**CURRENT:** S'il te plaît!
**PROPOSED_ET (audit ieteikums):** Entrez, s'il vous plaît.
**Problēma:** La traduction omet l'instruction « entrez » présente dans la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0446
**Audit ID:** FR-A1-0446
**Card ID:** `a1-bitte`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** bitte
**LV MASTER reference:** lūdzu
**CURRENT:** lūdzu
**PROPOSED_ET (audit ieteikums):** S'il vous plaît
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0447
**Audit ID:** FR-A1-0447
**Card ID:** `a1-bitte`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** bitte
**LV MASTER reference:** lūgums
**CURRENT:** lūgums
**PROPOSED_ET (audit ieteikums):** Demande
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0448
**Audit ID:** FR-A1-0448
**Card ID:** `a1-bitte-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Bitte
**LV MASTER reference:** Viņš izpilda manu lūgumu.
**CURRENT:** S'il te plaît!
**PROPOSED_ET (audit ieteikums):** Il exécute ma demande.
**Problēma:** La phrase française est une formule de politesse et ne traduit pas « il exécute ma demande ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0449
**Audit ID:** FR-A1-0449
**Card ID:** `a1-bitte-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Bitte
**LV MASTER reference:** Viņai ir divi lūgumi.
**CURRENT:** Une tasse de café, s'il vous plaît.
**PROPOSED_ET (audit ieteikums):** Elle a deux demandes.
**Problēma:** La traduction française ne correspond pas au sujet ni au nombre de demandes de la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0450
**Audit ID:** FR-A1-0450
**Card ID:** `a1-bitte-study`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** Bitte
**LV MASTER reference:** lūgums
**CURRENT:** lūgums
**PROPOSED_ET (audit ieteikums):** Demande
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0451
**Audit ID:** FR-A1-0451
**Card ID:** `a1-bitte-study`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** Bitte
**LV MASTER reference:** lūdzu
**CURRENT:** lūdzu
**PROPOSED_ET (audit ieteikums):** S'il vous plaît
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0453
**Audit ID:** FR-A1-0453
**Card ID:** `a1-bringen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** bringen
**LV MASTER reference:** Es tev atnesu grāmatu.
**CURRENT:** Apportez-moi de l'eau s'il vous plaît
**PROPOSED_ET (audit ieteikums):** Je t'apporte un livre.
**Problēma:** La phrase française demande de l'eau, tandis que la source dit « je t'apporte un livre ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0454
**Audit ID:** FR-A1-0454
**Card ID:** `a1-bringen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** bringen
**LV MASTER reference:** Es aiznesu paku uz pastu.
**CURRENT:** Je te ramènerai à la maison
**PROPOSED_ET (audit ieteikums):** J'apporte le colis à la poste.
**Problēma:** La traduction française parle de ramener quelqu'un chez lui, pas d'apporter un colis à la poste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0455
**Audit ID:** FR-A1-0455
**Card ID:** `a1-bringen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** bringen
**LV MASTER reference:** Es aizvedu bērnus uz skolu.
**CURRENT:** Il emmène le livre à l'école.
**PROPOSED_ET (audit ieteikums):** J'emmène les enfants à l'école.
**Problēma:** Le sujet, l'objet et le nombre ne correspondent pas à la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0456
**Audit ID:** FR-A1-0456
**Card ID:** `a1-bringen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** bringen
**LV MASTER reference:** atnest
**CURRENT:** Apporter/prendre/livrer
**PROPOSED_ET (audit ieteikums):** Apporter
**Problēma:** Le champ juxtapose plusieurs traductions et inclut des sens qui ne sont pas équivalents.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0457
**Audit ID:** FR-A1-0457
**Card ID:** `a1-bringen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** bringen
**LV MASTER reference:** aiznest
**CURRENT:** Prendre / prendre
**PROPOSED_ET (audit ieteikums):** Emporter
**Problēma:** La traduction est dupliquée et « prendre » ne rend pas précisément le sens de la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0458
**Audit ID:** FR-A1-0458
**Card ID:** `a1-bringen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** bringen
**LV MASTER reference:** aizvest
**CURRENT:** Poursuivre/aller chercher
**PROPOSED_ET (audit ieteikums):** Emmener
**Problēma:** Les deux propositions ne correspondent pas au sens de transporter quelqu'un vers un lieu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0459
**Audit ID:** FR-A1-0459
**Card ID:** `a1-bringen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** bringen
**LV MASTER reference:** nogādāt
**CURRENT:** A emporter et à apporter
**PROPOSED_ET (audit ieteikums):** Transporter
**Problēma:** La formulation est maladroite et ne traduit pas naturellement l'idée d'acheminer.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0460
**Audit ID:** FR-A1-0460
**Card ID:** `a1-bringen`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** bringen
**LV MASTER reference:** paņemt
**CURRENT:** paņemt
**PROPOSED_ET (audit ieteikums):** Prendre
**Problēma:** Le champ français contient un mot letton au lieu de sa traduction française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0461
**Audit ID:** FR-A1-0461
**Card ID:** `a1-bringen`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** bringen
**LV MASTER reference:** Ja priekšmets nonāk pie citas personas vai citā vietā, vācu valodā ļoti bieži lieto bringen.
**CURRENT:** Rappelez-vous : passer à quelqu'un → bringen • Prends pour toi → nehmen.
**PROPOSED_ET (audit ieteikums):** Rappel : apporter à quelqu'un → bringen • prendre pour soi → nehmen.
**Problēma:** « Passer à quelqu'un » ne traduit pas clairement bringen dans ce contexte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0462
**Audit ID:** FR-A1-0462
**Card ID:** `a1-da`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** da
**LV MASTER reference:** nāc šeit!
**CURRENT:** Venez ici!
**PROPOSED_ET (audit ieteikums):** Viens ici !
**Problēma:** La source emploie l'impératif singulier informel ; « venez » est formel ou pluriel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0463
**Audit ID:** FR-A1-0463
**Card ID:** `a1-da`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** da
**LV MASTER reference:** tur • te • šeit (vispārīgi)
**CURRENT:** Là • Ici • Ici (général)
**PROPOSED_ET (audit ieteikums):** Là
**Problēma:** Le champ contient plusieurs traductions distinctes ; le choix de la forme principale doit être validé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0464
**Audit ID:** FR-A1-0464
**Card ID:** `a1-da`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** da
**LV MASTER reference:** Atceries: vispārīgs tur/te → da.
**CURRENT:** Rappelez-vous : général là/te → da.
**PROPOSED_ET (audit ieteikums):** Rappel : en général, là → da.
**Problēma:** La barre oblique juxtapose plusieurs équivalents dans un champ learner-facing.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0465
**Audit ID:** FR-A1-0465
**Card ID:** `a1-das`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** das
**LV MASTER reference:** tas (artikuls / vietniekvārds)
**CURRENT:** Il (article / pronom)
**PROPOSED_ET (audit ieteikums):** Le (article) / cela (pronom)
**Problēma:** « Das » ne se traduit pas par « il » ; il correspond à l'article neutre ou au pronom « cela » selon le contexte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0466
**Audit ID:** FR-A1-0466
**Card ID:** `a1-das`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** das
**LV MASTER reference:** kurš • kura • kuru
**CURRENT:** Qui • Lequel • Qui
**PROPOSED_ET (audit ieteikums):** Lequel • laquelle • que
**Problēma:** Les équivalents français sont incorrects ou répétés et plusieurs formes sont juxtaposées.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0467
**Audit ID:** FR-A1-0467
**Card ID:** `a1-das`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** das
**LV MASTER reference:** Atceries: vidus dzimte → das; ka → dass.
**CURRENT:** Atceries : vidus dzimte → das • Ka → dass.
**PROPOSED_ET (audit ieteikums):** Rappel : neutre → das • que → dass.
**Problēma:** Le texte contient plusieurs mots lettons dans le champ français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0468
**Audit ID:** FR-A1-0468
**Card ID:** `a1-dass`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** dass
**LV MASTER reference:** lai
**CURRENT:** À
**PROPOSED_ET (audit ieteikums):** Pour que
**Problēma:** « Lai » exprime généralement le but, traduit ici par « pour que », et non par « à ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0469
**Audit ID:** FR-A1-0469
**Card ID:** `a1-dass`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** dass
**LV MASTER reference:** vai
**CURRENT:** Ou
**PROPOSED_ET (audit ieteikums):** Si
**Problēma:** Dans une proposition indirecte, « vai » correspond à « si », pas à la conjonction « ou ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0470
**Audit ID:** FR-A1-0470
**Card ID:** `a1-dass`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** dass
**LV MASTER reference:** Atceries: ka → dass.
**CURRENT:** Atceries : ka → dass.
**PROPOSED_ET (audit ieteikums):** Rappel : que → dass.
**Problēma:** Le champ français contient le mot letton « Atceries » et « ka ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0471
**Audit ID:** FR-A1-0471
**Card ID:** `a1-der`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** der
**LV MASTER reference:** Atceries: vīriešu dzimte → der.
**CURRENT:** Rappelez-vous : masculin → convient.
**PROPOSED_ET (audit ieteikums):** Rappel : masculin → der.
**Problēma:** « Convient » ne traduit pas le lien grammatical entre masculin et der.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0472
**Audit ID:** FR-A1-0472
**Card ID:** `a1-die`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** die
**LV MASTER reference:** kaķene guļ.
**CURRENT:** Le chaton dort.
**PROPOSED_ET (audit ieteikums):** La chatte dort.
**Problēma:** « Kaķene » désigne une chatte ; « chaton » change l'âge et ne précise pas le sexe.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0473
**Audit ID:** FR-A1-0473
**Card ID:** `a1-die`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** die
**LV MASTER reference:** Atceries: sieviešu dzimte → die.
**CURRENT:** Rappelez-vous : féminin → mourir.
**PROPOSED_ET (audit ieteikums):** Rappel : féminin → die.
**Problēma:** « Mourir » est une traduction erronée de die dans ce contexte grammatical.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0474
**Audit ID:** FR-A1-0474
**Card ID:** `a1-dieser`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** dieser
**LV MASTER reference:** Es redzu šo suni.
**CURRENT:** J'aime ce chien
**PROPOSED_ET (audit ieteikums):** Je vois ce chien.
**Problēma:** Le verbe français « aimer » ne traduit pas le verbe source « voir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0475
**Audit ID:** FR-A1-0475
**Card ID:** `a1-dieser`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** dieser
**LV MASTER reference:** Atceries: šis + vīriešu dzimte → dieser.
**CURRENT:** Rappelez-vous : this + masculin → dieser.
**PROPOSED_ET (audit ieteikums):** Rappel : ce + masculin → dieser.
**Problēma:** Le mot anglais « this » apparaît dans le champ français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0477
**Audit ID:** FR-A1-0477
**Card ID:** `a1-ein`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** ein
**LV MASTER reference:** Bērns spēlējas.
**CURRENT:** Bērns spēlējas.
**PROPOSED_ET (audit ieteikums):** L'enfant joue.
**Problēma:** Le champ français reprend directement le texte letton.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0478
**Audit ID:** FR-A1-0478
**Card ID:** `a1-ein`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** ein
**LV MASTER reference:** vīriešu dzimte
**CURRENT:** vīriešu dzimte
**PROPOSED_ET (audit ieteikums):** masculin
**Problēma:** Le champ français contient du letton au lieu du terme grammatical français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0479
**Audit ID:** FR-A1-0479
**Card ID:** `a1-ein`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** ein
**LV MASTER reference:** sieviešu dzimte
**CURRENT:** sieviešu dzimte
**PROPOSED_ET (audit ieteikums):** féminin
**Problēma:** Le champ français contient du letton au lieu du terme grammatical français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0480
**Audit ID:** FR-A1-0480
**Card ID:** `a1-ein`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** ein
**LV MASTER reference:** vidus dzimte
**CURRENT:** vidus dzimte
**PROPOSED_ET (audit ieteikums):** neutre
**Problēma:** Le champ français contient du letton au lieu du terme grammatical français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0481
**Audit ID:** FR-A1-0481
**Card ID:** `a1-ein`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** ein
**LV MASTER reference:** akuzatīvs
**CURRENT:** akuzatīvs
**PROPOSED_ET (audit ieteikums):** accusatif
**Problēma:** Le champ français contient du letton au lieu du terme grammatical français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0482
**Audit ID:** FR-A1-0482
**Card ID:** `a1-ein`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** ein
**LV MASTER reference:** Atceries: ein nav tikai "viens". Bieži tas ir tikai nenoteiktais artikuls.
**CURRENT:** Rappelez-vous : quelqu'un/quelqu'un non spécifique → ein.
**PROPOSED_ET (audit ieteikums):** Rappel : ein n'est pas seulement « un » ; c'est souvent l'article indéfini.
**Problēma:** La formulation répète « quelqu'un » et ne décrit pas correctement l'emploi de ein.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0483
**Audit ID:** FR-A1-0483
**Card ID:** `a1-eis`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Eis
**LV MASTER reference:** ledus • saldējums
**CURRENT:** Glace • Glace
**PROPOSED_ET (audit ieteikums):** Glace • Glace
**Problēma:** Deux sens distincts sont séparés par « • » mais rendus par le même mot français; décision de présentation requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0485
**Audit ID:** FR-A1-0485
**Card ID:** `a1-erst`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** erst
**LV MASTER reference:** tikai
**CURRENT:** Premier • Seulement
**PROPOSED_ET (audit ieteikums):** D'abord • Seulement
**Problēma:** Le premier sens adverbial de « erst » se traduit plus naturellement par « d'abord », et plusieurs traductions sont affichées.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0487
**Audit ID:** FR-A1-0487
**Card ID:** `a1-erst`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** erst
**LV MASTER reference:** Vispirms mācies, pēc tam spēlējies.
**CURRENT:** Boire d’abord, puis conduire.
**PROPOSED_ET (audit ieteikums):** Étudie d’abord, puis joue.
**Problēma:** La phrase française ne correspond pas à la source: elle parle de boire et de conduire au lieu d'étudier et jouer.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0488
**Audit ID:** FR-A1-0488
**Card ID:** `a1-erst`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** erst
**LV MASTER reference:** Atceries: laiks/skaits → erst; daudzums → nur.
**CURRENT:** Atceries : laiks/skaits → erst • Daudzums → nur.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : le temps ou le nombre → erst • la quantité → nur.
**Problēma:** Le texte destiné à l'apprenant est en letton, avec des mots allemands non traduits dans l'explication française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0490
**Audit ID:** FR-A1-0490
**Card ID:** `a1-es`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** es
**LV MASTER reference:** Līst.
**CURRENT:** J'apprends l'allemand.
**PROPOSED_ET (audit ieteikums):** Il pleut.
**Problēma:** La traduction française ne correspond pas à « Il pleut » et introduit une action sans rapport.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0491
**Audit ID:** FR-A1-0491
**Card ID:** `a1-es`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** es
**LV MASTER reference:** Ir auksts.
**CURRENT:** Il est fatigué.
**PROPOSED_ET (audit ieteikums):** Il fait froid.
**Problēma:** « Il est fatigué » ne traduit pas la phrase source « Il fait froid ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0492
**Audit ID:** FR-A1-0492
**Card ID:** `a1-es`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** es
**LV MASTER reference:** Bērns guļ.
**CURRENT:** Elle travaille ici.
**PROPOSED_ET (audit ieteikums):** L'enfant dort.
**Problēma:** La phrase française ne correspond ni au sujet ni à l'action de la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0493
**Audit ID:** FR-A1-0493
**Card ID:** `a1-es`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** es
**LV MASTER reference:** Tas ir noguris.
**CURRENT:** C'est mon livre.
**PROPOSED_ET (audit ieteikums):** Il est fatigué.
**Problēma:** « C'est mon livre » ne traduit pas « Il est fatigué ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0494
**Audit ID:** FR-A1-0494
**Card ID:** `a1-es`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** es
**LV MASTER reference:** tas • bezpersoniska forma
**CURRENT:** tas • bezpersoniska forma
**PROPOSED_ET (audit ieteikums):** Il • forme impersonnelle
**Problēma:** Le champ français contient deux segments lettons non traduits.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0495
**Audit ID:** FR-A1-0495
**Card ID:** `a1-es`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** es
**LV MASTER reference:** es (persona)
**CURRENT:** es (persona)
**PROPOSED_ET (audit ieteikums):** es (personne)
**Problēma:** Le contenu français conserve « persona » en letton et le mot allemand sans explication française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0496
**Audit ID:** FR-A1-0496
**Card ID:** `a1-etwas`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** etwas
**LV MASTER reference:** kaut kas
**CURRENT:** Quelque chose • Un peu
**PROPOSED_ET (audit ieteikums):** Quelque chose • Un peu
**Problēma:** Deux sens distincts sont présentés avec « • »; décision de présentation requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0498
**Audit ID:** FR-A1-0498
**Card ID:** `a1-euch`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** euch
**LV MASTER reference:** jūs • jums
**CURRENT:** Vous • Vous
**PROPOSED_ET (audit ieteikums):** Vous • Vous
**Problēma:** Deux fonctions sont séparées par « • » mais ont la même forme française; décision de présentation requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0500
**Audit ID:** FR-A1-0500
**Card ID:** `a1-euch`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** euch
**LV MASTER reference:** es redzu jūs.
**CURRENT:** Je te vois
**PROPOSED_ET (audit ieteikums):** Je vous vois
**Problēma:** « euch » est le pronom de deuxième personne du pluriel; « te » est singulier et informel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0501
**Audit ID:** FR-A1-0501
**Card ID:** `a1-euch`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** euch
**LV MASTER reference:** es jums palīdzu.
**CURRENT:** Je t'aide
**PROPOSED_ET (audit ieteikums):** Je vous aide
**Problēma:** Le pronom français doit être « vous », correspondant au pluriel de « euch ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0502
**Audit ID:** FR-A1-0502
**Card ID:** `a1-euch`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** euch
**LV MASTER reference:** es jums dodu grāmatu.
**CURRENT:** Je te donne un livre
**PROPOSED_ET (audit ieteikums):** Je vous donne un livre
**Problēma:** « te » est singulier; la source et « euch » exigent « vous ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0503
**Audit ID:** FR-A1-0503
**Card ID:** `a1-euch`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** euch
**LV MASTER reference:** es jums pateicos.
**CURRENT:** Je te remercie
**PROPOSED_ET (audit ieteikums):** Je vous remercie
**Problēma:** Le complément doit être le pluriel « vous », pas le singulier « te ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0504
**Audit ID:** FR-A1-0504
**Card ID:** `a1-euch`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** euch
**LV MASTER reference:** jūs atceraties.
**CURRENT:** Tu te souviens
**PROPOSED_ET (audit ieteikums):** Vous vous souvenez
**Problēma:** La traduction utilise « tu » alors que la source et le mot allemand indiquent le pluriel « vous ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0505
**Audit ID:** FR-A1-0505
**Card ID:** `a1-euch`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** euch
**LV MASTER reference:** jūs
**CURRENT:** Toi
**PROPOSED_ET (audit ieteikums):** Vous
**Problēma:** « Toi » est singulier; « jūs » et « euch » correspondent ici à « vous ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0506
**Audit ID:** FR-A1-0506
**Card ID:** `a1-euch`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** euch
**LV MASTER reference:** jūs / jums
**CURRENT:** Toi / à toi
**PROPOSED_ET (audit ieteikums):** Vous / à vous
**Problēma:** Les deux formes françaises sont au singulier, contrairement à la source plurielle.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0507
**Audit ID:** FR-A1-0507
**Card ID:** `a1-euch`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** euch
**LV MASTER reference:** jūsu
**CURRENT:** Le vôtre
**PROPOSED_ET (audit ieteikums):** Le vôtre
**Problēma:** « Le vôtre » traduit un possessif, pas le pronom personnel « euch »; le sens de comparaison est incorrect.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0509
**Audit ID:** FR-A1-0509
**Card ID:** `a1-fahren`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** fahren
**LV MASTER reference:** es tevi aizvedu mājās.
**CURRENT:** Je te ramènerai à la maison
**PROPOSED_ET (audit ieteikums):** Je te ramène à la maison
**Problēma:** La source est au présent; le futur français « ramènerai » change le temps verbal.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0510
**Audit ID:** FR-A1-0510
**Card ID:** `a1-fahren`
**Field/path:** `study.important.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** fahren
**LV MASTER reference:** fahren ≠ tikai “braukt”
**CURRENT:** Fahren ≠ tikai « braukt »
**PROPOSED_ET (audit ieteikums):** Fahren ≠ seulement « conduire »
**Problēma:** Le texte français contient les mots lettons « tikai » et « braukt ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0512
**Audit ID:** FR-A1-0512
**Card ID:** `a1-finden`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** finden
**LV MASTER reference:** Es atrodu savu atslēgu.
**CURRENT:** Je ne trouve pas ma clé
**PROPOSED_ET (audit ieteikums):** Je trouve ma clé
**Problēma:** La négation française contredit la source, qui signifie « Je trouve ma clé ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0513
**Audit ID:** FR-A1-0513
**Card ID:** `a1-finden`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** finden
**LV MASTER reference:** Man tas šķiet labi.
**CURRENT:** Avez-vous trouvé votre téléphone
**PROPOSED_ET (audit ieteikums):** Je trouve cela bien
**Problēma:** La phrase française parle d'un téléphone et d'une question, sans rapport avec l'opinion de la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0514
**Audit ID:** FR-A1-0514
**Card ID:** `a1-finden`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** finden
**LV MASTER reference:** ko tu domā par filmu?
**CURRENT:** Cela me semble bon.
**PROPOSED_ET (audit ieteikums):** Que penses-tu du film ?
**Problēma:** La traduction française ne correspond pas à la question sur le film.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0515
**Audit ID:** FR-A1-0515
**Card ID:** `a1-finden`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** finden
**LV MASTER reference:** Atceries: pazaudēta lieta → finden; viedoklis → ich finde...
**CURRENT:** Rappelez-vous : chose perdue → trouvée • Opinion → je trouve...
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : objet perdu → trouver ; opinion → je trouve…
**Problēma:** « trouvée » est un participe passé alors que le conseil porte sur l'infinitif « finden »; la formulation est peu naturelle.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0516
**Audit ID:** FR-A1-0516
**Card ID:** `a1-frau`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Frau
**LV MASTER reference:** sieviete
**CURRENT:** Femme • Épouse
**PROPOSED_ET (audit ieteikums):** Femme • Épouse
**Problēma:** Deux sens distincts sont séparés par « • »; décision de présentation requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0518
**Audit ID:** FR-A1-0518
**Card ID:** `a1-fuer`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** für
**LV MASTER reference:** priekš
**CURRENT:** Pour • Pour
**PROPOSED_ET (audit ieteikums):** Pour • Pour
**Problēma:** Deux fonctions sont séparées par « • » mais rendues par la même forme française; décision requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0520
**Audit ID:** FR-A1-0520
**Card ID:** `a1-gleich`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** gleich
**LV MASTER reference:** tūlīt
**CURRENT:** Immédiatement • Égal
**PROPOSED_ET (audit ieteikums):** Tout de suite • Égal
**Problēma:** Deux sens distincts sont séparés par « • »; décision de présentation requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0522
**Audit ID:** FR-A1-0522
**Card ID:** `a1-gross-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** groß
**LV MASTER reference:** Berlīne ir liela pilsēta.
**CURRENT:** La maison est grande.
**PROPOSED_ET (audit ieteikums):** Berlin est une grande ville.
**Problēma:** La traduction française remplace Berlin et la ville par une maison.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0523
**Audit ID:** FR-A1-0523
**Card ID:** `a1-gut-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** gut
**LV MASTER reference:** kā tev iet? – labi, paldies!
**CURRENT:** Comment vas-tu - ok, merci !
**PROPOSED_ET (audit ieteikums):** Comment vas-tu ? — Ça va bien, merci !
**Problēma:** La formulation française est peu naturelle et la ponctuation de la question est incorrecte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0524
**Audit ID:** FR-A1-0524
**Card ID:** `a1-haben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** haben
**LV MASTER reference:** man ir automašīna.
**CURRENT:** J'ai une voiture
**PROPOSED_ET (audit ieteikums):** J'ai une voiture.
**Problēma:** Il manque le point final dans la phrase d'exemple.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0525
**Audit ID:** FR-A1-0525
**Card ID:** `a1-haben`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** haben
**LV MASTER reference:** vai tev ir laiks?
**CURRENT:** As-tu le temps
**PROPOSED_ET (audit ieteikums):** As-tu le temps ?
**Problēma:** Il manque le point d'interrogation final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0526
**Audit ID:** FR-A1-0526
**Card ID:** `a1-haben`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** haben
**LV MASTER reference:** es to izdarīju.
**CURRENT:** Je l'ai fait
**PROPOSED_ET (audit ieteikums):** Je l'ai fait.
**Problēma:** Il manque le point final dans la phrase d'exemple.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0527
**Audit ID:** FR-A1-0527
**Card ID:** `a1-haben`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** haben
**LV MASTER reference:** saņemt
**CURRENT:** Pour recevoir
**PROPOSED_ET (audit ieteikums):** Recevoir
**Problēma:** Le français doit donner l'infinitif correspondant, sans la préposition « pour ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0528
**Audit ID:** FR-A1-0528
**Card ID:** `a1-haben`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** haben
**LV MASTER reference:** darīt / taisīt
**CURRENT:** Faire/faire
**PROPOSED_ET (audit ieteikums):** Faire
**Problēma:** Le champ contient deux traductions séparées par une barre oblique et répète le même mot.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0529
**Audit ID:** FR-A1-0529
**Card ID:** `a1-haben`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** haben
**LV MASTER reference:** Atceries: Ich habe → man ir.
**CURRENT:** Atceries : Ich habe → man ir.
**PROPOSED_ET (audit ieteikums):** Retiens : Ich habe → j'ai.
**Problēma:** Le texte contient des segments lettons dans un champ français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0530
**Audit ID:** FR-A1-0530
**Card ID:** `a1-halten`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** halten
**LV MASTER reference:** turēt
**CURRENT:** Maintenir • Arrêter
**PROPOSED_ET (audit ieteikums):** Maintenir
**Problēma:** Le champ principal contient plusieurs traductions distinctes et nécessite une décision éditoriale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0532
**Audit ID:** FR-A1-0532
**Card ID:** `a1-halten`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** halten
**LV MASTER reference:** lūdzu, apstājieties.
**CURRENT:** S'il te plaît, arrête
**PROPOSED_ET (audit ieteikums):** S'il vous plaît, arrêtez.
**Problēma:** Le letton emploie une forme polie/plurielle, mais le français est au tutoiement singulier.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0533
**Audit ID:** FR-A1-0533
**Card ID:** `a1-halten`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** halten
**LV MASTER reference:** turēt • transportam arī pieturēt
**CURRENT:** Maintenir / arrêter
**PROPOSED_ET (audit ieteikums):** Maintenir
**Problēma:** Le champ contient plusieurs traductions séparées par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0534
**Audit ID:** FR-A1-0534
**Card ID:** `a1-halten`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** halten
**LV MASTER reference:** apstāties • apturēt
**CURRENT:** Pour arrêter
**PROPOSED_ET (audit ieteikums):** S'arrêter • Arrêter
**Problēma:** « Pour arrêter » ne traduit pas les deux emplois verbaux indiqués par la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0535
**Audit ID:** FR-A1-0535
**Card ID:** `a1-halten`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** halten
**LV MASTER reference:** Atceries: priekšmetu turēt → halten; apstāties → anhalten; transports pietur → hält.
**CURRENT:** Rappelez-vous : en main → halten • Transport → halte/arrêts.
**PROPOSED_ET (audit ieteikums):** Retiens : tenir un objet → halten ; s'arrêter → anhalten ; les transports s'arrêtent → hält.
**Problēma:** Le texte français est tronqué et ne reprend pas correctement les informations de la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0536
**Audit ID:** FR-A1-0536
**Card ID:** `a1-heißen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** heißen
**LV MASTER reference:** saukties
**CURRENT:** Être appelé • Moyen
**PROPOSED_ET (audit ieteikums):** S'appeler • Signifier
**Problēma:** « Moyen » est une traduction erronée de l'emploi « signifier » de heißen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0538
**Audit ID:** FR-A1-0538
**Card ID:** `a1-heißen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** heißen
**LV MASTER reference:** saukties / nozīmēt
**CURRENT:** Être appelé / méchant
**PROPOSED_ET (audit ieteikums):** S'appeler / signifier
**Problēma:** « méchant » ne correspond pas au sens verbal de nozīmēt, qui signifie « signifier ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0539
**Audit ID:** FR-A1-0539
**Card ID:** `a1-heißen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** heißen
**LV MASTER reference:** saukt • pasaukt
**CURRENT:** Appeler / appeler
**PROPOSED_ET (audit ieteikums):** Appeler
**Problēma:** Le champ contient plusieurs traductions séparées par une barre oblique et répète le même mot.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0540
**Audit ID:** FR-A1-0540
**Card ID:** `a1-heißen`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** heißen
**LV MASTER reference:** zvanīt
**CURRENT:** zvanīt
**PROPOSED_ET (audit ieteikums):** Téléphoner
**Problēma:** Le champ français contient un mot letton non traduit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0541
**Audit ID:** FR-A1-0541
**Card ID:** `a1-heißen`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** heißen
**LV MASTER reference:** Atceries: Ich heiße... → mani sauc...
**CURRENT:** Atceries : Ich heiße... → mani sauc...
**PROPOSED_ET (audit ieteikums):** Retiens : Ich heiße... → je m'appelle...
**Problēma:** Le texte contient des segments lettons dans un champ français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0542
**Audit ID:** FR-A1-0542
**Card ID:** `a1-hoch-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** hoch
**LV MASTER reference:** plaukts ir divus metrus augsts.
**CURRENT:** La montagne est haute.
**PROPOSED_ET (audit ieteikums):** L'étagère mesure deux mètres de haut.
**Problēma:** La phrase française parle d'une montagne au lieu d'une étagère de deux mètres.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0544
**Audit ID:** FR-A1-0544
**Card ID:** `a1-ihr`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** ihr
**LV MASTER reference:** vai jūs nākat šovakar?
**CURRENT:** Viens-tu ce soir
**PROPOSED_ET (audit ieteikums):** Venez-vous ce soir ?
**Problēma:** Le letton emploie le pluriel/politesse, mais le français est au singulier informel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0545
**Audit ID:** FR-A1-0545
**Card ID:** `a1-ihr`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** ihr
**LV MASTER reference:** kur jūs dzīvojat?
**CURRENT:** Où habites-tu
**PROPOSED_ET (audit ieteikums):** Où habitez-vous ?
**Problēma:** Le sujet letton est pluriel ou de politesse ; le français doit employer vous.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0546
**Audit ID:** FR-A1-0546
**Card ID:** `a1-ihr`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** ihr
**LV MASTER reference:** vai jums ir laiks?
**CURRENT:** As-tu le temps
**PROPOSED_ET (audit ieteikums):** Avez-vous le temps ?
**Problēma:** Le letton emploie le pluriel ou la politesse, contrairement au tutoiement français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0547
**Audit ID:** FR-A1-0547
**Card ID:** `a1-im`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** im
**LV MASTER reference:** janvārī es braucu uz Vīni.
**CURRENT:** Je suis allé à Vienne en janvier.
**PROPOSED_ET (audit ieteikums):** Je vais à Vienne en janvier.
**Problēma:** Le français passe au passé alors que la source exprime une action au présent.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0548
**Audit ID:** FR-A1-0548
**Card ID:** `a1-im`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** im
**LV MASTER reference:** iekšā, kur? (kam?)
**CURRENT:** A l'intérieur où ? (à qui ?)
**PROPOSED_ET (audit ieteikums):** À l'intérieur, où ? (datif)
**Problēma:** Le datif allemand n'est pas le sens « à qui ? » dans cette explication grammaticale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0549
**Audit ID:** FR-A1-0549
**Card ID:** `a1-in`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** in
**LV MASTER reference:** iekšā • uz
**CURRENT:** Dans
**PROPOSED_ET (audit ieteikums):** Dans • À
**Problēma:** La traduction omet l'emploi directionnel de in, rendu ici par « à » selon le contexte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0550
**Audit ID:** FR-A1-0550
**Card ID:** `a1-in`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** in
**LV MASTER reference:** Atceries: iekšā/telpā → in.
**CURRENT:** Rappelez-vous : dans/dans → dans.
**PROPOSED_ET (audit ieteikums):** Retiens : à l'intérieur / dans un lieu → in.
**Problēma:** La formulation actuelle répète « dans » et n'explique pas clairement le mot allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0551
**Audit ID:** FR-A1-0551
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ins
**LV MASTER reference:** uz iekšu, kurp? (Akk.)
**CURRENT:** Vers l'intérieur, où ? (Acc.)
**PROPOSED_ET (audit ieteikums):** Vers l'intérieur, où ? (accusatif)
**Problēma:** L'abréviation grammaticale devrait être cohérente en français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0552
**Audit ID:** FR-A1-0552
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ins
**LV MASTER reference:** iekšā, kur? (kam?)
**CURRENT:** A l'intérieur où ? (à qui ?)
**PROPOSED_ET (audit ieteikums):** À l'intérieur, où ? (datif)
**Problēma:** Il manque l'accent grave et l'annotation « à qui ? » est une explication grammaticale incorrecte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0553
**Audit ID:** FR-A1-0553
**Card ID:** `a1-jung`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** jung
**LV MASTER reference:** jauns (par cilvēkiem)
**CURRENT:** Jeune (à propos des gens)
**PROPOSED_ET (audit ieteikums):** Jeune
**Problēma:** Le français restreint à tort jung aux personnes ; le mot s'emploie aussi pour les animaux et les choses.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0554
**Audit ID:** FR-A1-0554
**Card ID:** `a1-jung`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** jung
**LV MASTER reference:** tas ir jauns pāris.
**CURRENT:** C'est un nouveau couple.
**PROPOSED_ET (audit ieteikums):** C'est un jeune couple.
**Problēma:** Dans « junges Paar », jung signifie « jeune », et non « nouveau ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0556
**Audit ID:** FR-A1-0556
**Card ID:** `a1-kennen-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** kennen
**LV MASTER reference:** pazīt
**CURRENT:** Savoir
**PROPOSED_ET (audit ieteikums):** Connaître
**Problēma:** « Kennen » signifie connaître, tandis que « savoir » correspond à « wissen ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0557
**Audit ID:** FR-A1-0557
**Card ID:** `a1-kennen-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** kennen
**LV MASTER reference:** vai jūs pazīstat šo sievieti?
**CURRENT:** Connaissez-vous cette femme
**PROPOSED_ET (audit ieteikums):** Connaissez-vous cette femme ?
**Problēma:** Il manque le point d’interrogation final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0558
**Audit ID:** FR-A1-0558
**Card ID:** `a1-kennen-study`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** kennen
**LV MASTER reference:** pazīt; wissen
**CURRENT:** Connaître la sagesse
**PROPOSED_ET (audit ieteikums):** Connaître ; savoir
**Problēma:** « La sagesse » ne traduit pas « wissen » dans cette opposition lexicale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0559
**Audit ID:** FR-A1-0559
**Card ID:** `a1-kennen-study`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** kennen
**LV MASTER reference:** zināt (faktu, informāciju)
**CURRENT:** Connaître (fait, information)
**PROPOSED_ET (audit ieteikums):** Savoir (un fait, une information)
**Problēma:** Pour les faits et informations, le verbe français est « savoir », pas « connaître ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0560
**Audit ID:** FR-A1-0560
**Card ID:** `a1-wissen-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** wissen
**LV MASTER reference:** es zinu atbildi.
**CURRENT:** Je connais la réponse.
**PROPOSED_ET (audit ieteikums):** Je sais la réponse.
**Problēma:** « Wissen » se traduit ici par « savoir » : on sait une réponse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0561
**Audit ID:** FR-A1-0561
**Card ID:** `a1-wissen-study`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** wissen
**LV MASTER reference:** zināt (faktu, informāciju)
**CURRENT:** Connaître (fait, information)
**PROPOSED_ET (audit ieteikums):** Savoir (un fait, une information)
**Problēma:** Cette ligne décrit « wissen », qui signifie « savoir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0562
**Audit ID:** FR-A1-0562
**Card ID:** `a1-wissen-study`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** wissen
**LV MASTER reference:** pazīt (cilvēku, vietu, lietu)
**CURRENT:** Connaître (personne, lieu, chose)
**PROPOSED_ET (audit ieteikums):** Connaître (une personne, un lieu, une chose)
**Problēma:** Le sens est correct, mais les articles rendent l’énumération française complète et naturelle.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0564
**Audit ID:** FR-A1-0564
**Card ID:** `a1-können`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** können
**LV MASTER reference:** vajadzēt / būt jā-
**CURRENT:** Besoin / être oui-
**PROPOSED_ET (audit ieteikums):** Devoir
**Problēma:** « Besoin / être oui- » est incompréhensible et ne traduit pas le verbe modal correspondant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0565
**Audit ID:** FR-A1-0565
**Card ID:** `a1-kosten`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** kosten
**LV MASTER reference:** maksāt
**CURRENT:** Payer
**PROPOSED_ET (audit ieteikums):** Coûter
**Problēma:** « Kosten » signifie coûter ; « payer » correspond à « bezahlen ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0566
**Audit ID:** FR-A1-0566
**Card ID:** `a1-kosten`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** kosten
**LV MASTER reference:** maksāt (cenu) • cik maksā
**CURRENT:** Payer (prix) • Combien
**PROPOSED_ET (audit ieteikums):** Coûter (un prix) • Combien ça coûte
**Problēma:** La traduction principale est erronée et deux sens sont séparés par « • » ; décision éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0567
**Audit ID:** FR-A1-0567
**Card ID:** `a1-kosten`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** kosten
**LV MASTER reference:** maksāt • samaksāt (naudu)
**CURRENT:** Payer • Payer (argent)
**PROPOSED_ET (audit ieteikums):** Coûter • Payer (de l’argent)
**Problēma:** Deux traductions distinctes sont séparées par « • » et le contraste coûter/payer est absent.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0568
**Audit ID:** FR-A1-0568
**Card ID:** `a1-kosten`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** kosten
**LV MASTER reference:** maksāt • samaksāt
**CURRENT:** Payer • Payer
**PROPOSED_ET (audit ieteikums):** Coûter • Payer
**Problēma:** Deux sens distincts sont séparés par « • », mais les deux entrées françaises sont identiques.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0569
**Audit ID:** FR-A1-0569
**Card ID:** `a1-laden-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Laden
**LV MASTER reference:** veikals
**CURRENT:** Boutique
**PROPOSED_ET (audit ieteikums):** Magasin
**Problēma:** « Laden » signifie généralement « magasin » ; « boutique » est plus spécifique et plus étroit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0571
**Audit ID:** FR-A1-0571
**Card ID:** `a1-land`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Land
**LV MASTER reference:** valsts / zeme / lauki
**CURRENT:** Pays/terre/campagne
**PROPOSED_ET (audit ieteikums):** Pays / terre / campagne
**Problēma:** Plusieurs sens distincts sont réunis dans un champ séparé par des barres obliques ; décision éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0573
**Audit ID:** FR-A1-0573
**Card ID:** `a1-lang`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** lang
**LV MASTER reference:** visu dienu (garumā).
**CURRENT:** Toute la journée (en longueur).
**PROPOSED_ET (audit ieteikums):** Toute la journée.
**Problēma:** « En longueur » est un calque maladroit ; « toute la journée » exprime naturellement le sens.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0575
**Audit ID:** FR-A1-0575
**Card ID:** `a1-lassen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** lassen
**LV MASTER reference:** atstāt / ļaut
**CURRENT:** Partir / laisser
**PROPOSED_ET (audit ieteikums):** Laisser / permettre
**Problēma:** « Partir » est erroné dans cette opposition et deux sens sont séparés par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0576
**Audit ID:** FR-A1-0576
**Card ID:** `a1-lassen`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** lassen
**LV MASTER reference:** Atceries: kaut kas paliek → lassen; kādam atļauj → lassen.
**CURRENT:** Atceries : quelque chose reste → lassen • Quelqu'un est autorisé → lassen.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : quelque chose reste → lassen • Quelqu'un est autorisé → lassen.
**Problēma:** « Atceries » est un mot letton resté dans le texte français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0578
**Audit ID:** FR-A1-0578
**Card ID:** `a1-laufen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** laufen
**LV MASTER reference:** skriet / darboties
**CURRENT:** Exécuter / exploiter
**PROPOSED_ET (audit ieteikums):** Courir / fonctionner
**Problēma:** Les deux sens sont séparés par une barre oblique et les traductions actuelles sont inadaptées.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0579
**Audit ID:** FR-A1-0579
**Card ID:** `a1-laufen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** laufen
**LV MASTER reference:** iet kājām
**CURRENT:** Allez à pied
**PROPOSED_ET (audit ieteikums):** Marcher
**Problēma:** Une entrée lexicale doit être à l’infinitif ; « allez » est une forme impérative et change le registre.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0580
**Audit ID:** FR-A1-0580
**Card ID:** `a1-laufen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** laufen
**LV MASTER reference:** darboties
**CURRENT:** Pour opérer
**PROPOSED_ET (audit ieteikums):** Fonctionner
**Problēma:** « Pour opérer » est une formulation maladroite et ne donne pas le lemme français attendu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0581
**Audit ID:** FR-A1-0581
**Card ID:** `a1-legen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** legen
**LV MASTER reference:** atrasties / gulēt
**CURRENT:** Être / dormir
**PROPOSED_ET (audit ieteikums):** Se trouver / être allongé
**Problēma:** « Liegen » signifie se trouver ou être allongé, pas nécessairement dormir.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0582
**Audit ID:** FR-A1-0582
**Card ID:** `a1-legen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** legen
**LV MASTER reference:** nosēdināt / apsēsties
**CURRENT:** Asseyez-vous / asseyez-vous
**PROPOSED_ET (audit ieteikums):** Faire asseoir / s’asseoir
**Problēma:** Les deux sens sont identiques dans le texte actuel et sont séparés par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0583
**Audit ID:** FR-A1-0583
**Card ID:** `a1-legen`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** legen
**LV MASTER reference:** Atceries: tu noliec → legen; lieta jau atrodas → liegen.
**CURRENT:** Atceries : tu noliec → legen • Lieta jau atrodas → liegen.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : vous posez → legen • L’objet est déjà posé → liegen.
**Problēma:** Le champ contient plusieurs segments lettons non traduits en français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0584
**Audit ID:** FR-A1-0584
**Card ID:** `a1-leise-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** leise
**LV MASTER reference:** kluss
**CURRENT:** Calme
**PROPOSED_ET (audit ieteikums):** Silencieux
**Problēma:** « Leise » signifie silencieux ou doucement, tandis que « calme » signifie surtout tranquille.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0585
**Audit ID:** FR-A1-0585
**Card ID:** `a1-leise-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** leise
**LV MASTER reference:** lūdzu, esi kluss.
**CURRENT:** S'il te plaît, tais-toi
**PROPOSED_ET (audit ieteikums):** S'il te plaît, parle moins fort.
**Problēma:** « Tais-toi » signifie « shut up » et ne traduit pas une demande de parler doucement.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0586
**Audit ID:** FR-A1-0586
**Card ID:** `a1-leise-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** leise
**LV MASTER reference:** mūzika ir klusa.
**CURRENT:** La musique est calme.
**PROPOSED_ET (audit ieteikums):** La musique est douce.
**Problēma:** Pour une musique « leise », « douce » est plus naturel que « calme ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0588
**Audit ID:** FR-A1-0588
**Card ID:** `a1-liegen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** liegen
**LV MASTER reference:** viņš guļ gultā.
**CURRENT:** Il dort au lit.
**PROPOSED_ET (audit ieteikums):** Il est couché dans son lit.
**Problēma:** « Liegen » signifie être allongé, non dormir; le français actuel suit le sens letton plutôt que l'allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0589
**Audit ID:** FR-A1-0589
**Card ID:** `a1-liegen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** liegen
**LV MASTER reference:** atrasties / gulēt
**CURRENT:** Être / dormir
**PROPOSED_ET (audit ieteikums):** Être situé ou dormir
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0590
**Audit ID:** FR-A1-0590
**Card ID:** `a1-liegen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** liegen
**LV MASTER reference:** nolikt
**CURRENT:** Déposer
**PROPOSED_ET (audit ieteikums):** Déposer
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0591
**Audit ID:** FR-A1-0591
**Card ID:** `a1-liegen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** liegen
**LV MASTER reference:** stāvēt / atrasties stāvus
**CURRENT:** Se tenir debout/être debout
**PROPOSED_ET (audit ieteikums):** Se tenir debout ou être debout
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0592
**Audit ID:** FR-A1-0592
**Card ID:** `a1-liegen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** liegen
**LV MASTER reference:** būt
**CURRENT:** Être
**PROPOSED_ET (audit ieteikums):** Être
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0594
**Audit ID:** FR-A1-0594
**Card ID:** `a1-machen`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** machen
**LV MASTER reference:** Atceries: Was machst du? = Ko tu dari?
**CURRENT:** Atceries : Était-ce machst du ? = Ko tu dari ?
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : Was machst du ? = Que fais-tu ?
**Problēma:** Le champ contient du letton et la question allemande est mal traduite en français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0595
**Audit ID:** FR-A1-0595
**Card ID:** `a1-mal`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Mal
**LV MASTER reference:** reize
**CURRENT:** Temps
**PROPOSED_ET (audit ieteikums):** Fois
**Problēma:** Le nom allemand « Mal » se traduit ici par « fois », pas « temps ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0596
**Audit ID:** FR-A1-0596
**Card ID:** `a1-mal`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Mal
**LV MASTER reference:** das Mal = reize
**CURRENT:** Rappelez-vous : das Mal = temps (nom) • Mal sans article = particule familière.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : das Mal = fois (nom) • Mal sans article = particule familière.
**Problēma:** « Das Mal » signifie « la fois »; « temps » est une traduction erronée dans ce contexte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0598
**Audit ID:** FR-A1-0598
**Card ID:** `a1-mit`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** mit
**LV MASTER reference:** ar / kopā ar
**CURRENT:** Avec / avec
**PROPOSED_ET (audit ieteikums):** Avec
**Problēma:** Deux variantes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0599
**Audit ID:** FR-A1-0599
**Card ID:** `a1-mit`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** mit
**LV MASTER reference:** bez
**CURRENT:** Sans
**PROPOSED_ET (audit ieteikums):** Sans
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0600
**Audit ID:** FR-A1-0600
**Card ID:** `a1-mit`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** mit
**LV MASTER reference:** pie / pie kāda
**CURRENT:** Chez / chez quelqu'un
**PROPOSED_ET (audit ieteikums):** Chez quelqu'un
**Problēma:** Deux variantes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0601
**Audit ID:** FR-A1-0601
**Card ID:** `a1-mit`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** mit
**LV MASTER reference:** uz / pie
**CURRENT:** À / à
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** Deux variantes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0602
**Audit ID:** FR-A1-0602
**Card ID:** `a1-mögen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** mögen
**LV MASTER reference:** vai tev garšo kafija?
**CURRENT:** Aimez-vous le café
**PROPOSED_ET (audit ieteikums):** Aimes-tu le café ?
**Problēma:** Le letton emploie le singulier informel « tev »; « vous » ne correspond pas, et le point d'interrogation manque.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0603
**Audit ID:** FR-A1-0603
**Card ID:** `a1-mögen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** mögen
**LV MASTER reference:** patikt
**CURRENT:** Aimer
**PROPOSED_ET (audit ieteikums):** Aimer
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0604
**Audit ID:** FR-A1-0604
**Card ID:** `a1-mögen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** mögen
**LV MASTER reference:** gribētu
**CURRENT:** Voudrais
**PROPOSED_ET (audit ieteikums):** Voudrais
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0605
**Audit ID:** FR-A1-0605
**Card ID:** `a1-mögen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** mögen
**LV MASTER reference:** gribēt
**CURRENT:** Je veux
**PROPOSED_ET (audit ieteikums):** Je veux
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0606
**Audit ID:** FR-A1-0606
**Card ID:** `a1-mögen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** mögen
**LV MASTER reference:** mīlēt
**CURRENT:** Aimer
**PROPOSED_ET (audit ieteikums):** Aimer
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0607
**Audit ID:** FR-A1-0607
**Card ID:** `a1-morgen`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** —
**CURRENT:** 
**Problēma:** —
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0608
**Audit ID:** FR-A1-0608
**Card ID:** `a1-morgen-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** —
**CURRENT:** 
**Problēma:** —
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0609
**Audit ID:** FR-A1-0609
**Card ID:** `a1-morgen-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** —
**CURRENT:** 
**Problēma:** —
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0610
**Audit ID:** FR-A1-0610
**Card ID:** `a1-morgen-study`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** —
**CURRENT:** 
**Problēma:** —
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0611
**Audit ID:** FR-A1-0611
**Card ID:** `a1-müssen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** müssen
**LV MASTER reference:** vajadzēt
**CURRENT:** Avoir besoin
**PROPOSED_ET (audit ieteikums):** Devoir
**Problēma:** « Müssen » exprime l'obligation et se traduit par « devoir », non « avoir besoin ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0612
**Audit ID:** FR-A1-0612
**Card ID:** `a1-müssen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** müssen
**LV MASTER reference:** tev jāgaida.
**CURRENT:** Vous devez attendre.
**PROPOSED_ET (audit ieteikums):** Tu dois attendre.
**Problēma:** Le letton utilise le singulier informel « tev »; le pronom français devrait être « tu ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0613
**Audit ID:** FR-A1-0613
**Card ID:** `a1-müssen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** müssen
**LV MASTER reference:** vajadzēt / būt jādara
**CURRENT:** Besoin / devoir faire
**PROPOSED_ET (audit ieteikums):** Devoir ou être obligé de faire
**Problēma:** « Besoin » ne traduit pas l'obligation exprimée par « müssen ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0614
**Audit ID:** FR-A1-0614
**Card ID:** `a1-müssen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** müssen
**LV MASTER reference:** varēt / prast
**CURRENT:** Pouvoir/savoir
**PROPOSED_ET (audit ieteikums):** Pouvoir ou savoir
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0615
**Audit ID:** FR-A1-0615
**Card ID:** `a1-müssen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** müssen
**LV MASTER reference:** drīkstēt
**CURRENT:** Être autorisé
**PROPOSED_ET (audit ieteikums):** Être autorisé
**Problēma:** Le champ comporte une structure de comparaison à traductions multiples; vérification éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0617
**Audit ID:** FR-A1-0617
**Card ID:** `a1-nach`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nach
**LV MASTER reference:** uz / pēc
**CURRENT:** À / après
**PROPOSED_ET (audit ieteikums):** À ou après
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0618
**Audit ID:** FR-A1-0618
**Card ID:** `a1-nach`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nach
**LV MASTER reference:** uz / pie
**CURRENT:** À / à
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** Deux variantes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0619
**Audit ID:** FR-A1-0619
**Card ID:** `a1-nach`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nach
**LV MASTER reference:** iekšā / uz vietu ar artikulu
**CURRENT:** Dans / vers le lieu avec l'article
**PROPOSED_ET (audit ieteikums):** Dans ou vers le lieu avec l'article
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0620
**Audit ID:** FR-A1-0620
**Card ID:** `a1-nach`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nach
**LV MASTER reference:** pirms / priekšā
**CURRENT:** Avant / devant
**PROPOSED_ET (audit ieteikums):** Avant ou devant
**Problēma:** Deux traductions distinctes sont séparées par « / »; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0622
**Audit ID:** FR-A1-0622
**Card ID:** `a1-natuerlich`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** natürlich
**LV MASTER reference:** protams, es tev palīdzēšu.
**CURRENT:** Bien sûr, je vais vous aider.
**PROPOSED_ET (audit ieteikums):** Bien sûr, je vais t'aider.
**Problēma:** Le letton emploie le tutoiement tev, mais la traduction française emploie vous.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0623
**Audit ID:** FR-A1-0623
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** nehmen
**LV MASTER reference:** es braucu ar autobusu.
**CURRENT:** Je pars en bus
**PROPOSED_ET (audit ieteikums):** Je prends le bus.
**Problēma:** La phrase signifie prendre le bus, et non partir en bus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0624
**Audit ID:** FR-A1-0624
**Card ID:** `a1-nehmen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nehmen
**LV MASTER reference:** ņemt / paņemt
**CURRENT:** Prendre / prendre
**PROPOSED_ET (audit ieteikums):** Prendre / prendre
**Problēma:** Deux traductions séparées par une barre oblique sont proposées ; une décision éditoriale est nécessaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0625
**Audit ID:** FR-A1-0625
**Card ID:** `a1-nehmen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nehmen
**LV MASTER reference:** atnest / aiznest / nogādāt
**CURRENT:** Apporter/prendre/livrer
**PROPOSED_ET (audit ieteikums):** Apporter / emporter / livrer
**Problēma:** Trois sens distincts sont séparés par des barres obliques ; le choix de présentation doit être validé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0626
**Audit ID:** FR-A1-0626
**Card ID:** `a1-nehmen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nehmen
**LV MASTER reference:** aiziet pakaļ / atnest
**CURRENT:** Poursuivre/aller chercher
**PROPOSED_ET (audit ieteikums):** Aller chercher / apporter
**Problēma:** Deux sens distincts sont séparés par une barre oblique et le premier sens est mal traduit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0627
**Audit ID:** FR-A1-0627
**Card ID:** `a1-nehmen`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** nehmen
**LV MASTER reference:** Atceries: paņem sev → nehmen; atnes kādam → bringen.
**CURRENT:** Rappelez-vous : prenez pour vous → nehmen • Amener quelqu'un → amener.
**PROPOSED_ET (audit ieteikums):** Souviens-toi : prends pour toi → nehmen • apporte à quelqu'un → bringen.
**Problēma:** La seconde partie traduit bringen par amener, alors qu'il s'agit ici d'apporter quelque chose à quelqu'un.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0628
**Audit ID:** FR-A1-0628
**Card ID:** `a1-neu`
**Field/path:** `study.examples[6].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** neu
**LV MASTER reference:** kas jauns?
**CURRENT:** Quoi de neuf
**PROPOSED_ET (audit ieteikums):** Quoi de neuf ?
**Problēma:** Le point d'interrogation manque dans cette question française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0629
**Audit ID:** FR-A1-0629
**Card ID:** `a1-nur-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** nur
**LV MASTER reference:** tikai tu vari man palīdzēt.
**CURRENT:** Vous seul pouvez m'aider.
**PROPOSED_ET (audit ieteikums):** Toi seul peux m'aider.
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0630
**Audit ID:** FR-A1-0630
**Card ID:** `a1-ob`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** ob
**LV MASTER reference:** vai
**CURRENT:** Ou
**PROPOSED_ET (audit ieteikums):** Si
**Problēma:** La conjonction allemande ob signifie si dans une interrogation indirecte, et non ou.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0631
**Audit ID:** FR-A1-0631
**Card ID:** `a1-ob`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** ob
**LV MASTER reference:** vai tu nāksi šodien vai rīt?
**CURRENT:** Vous venez aujourd'hui ou demain ?
**PROPOSED_ET (audit ieteikums):** Tu viens aujourd'hui ou demain ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0632
**Audit ID:** FR-A1-0632
**Card ID:** `a1-ob`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** ob
**LV MASTER reference:** vai netiešā jautājumā
**CURRENT:** Ou dans une question indirecte
**PROPOSED_ET (audit ieteikums):** Si dans une question indirecte
**Problēma:** Dans une question indirecte, vai se traduit par si, pas par ou.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0633
**Audit ID:** FR-A1-0633
**Card ID:** `a1-ob`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** ob
**LV MASTER reference:** vai izvēlē starp variantiem
**CURRENT:** Ou choisissez entre les options
**PROPOSED_ET (audit ieteikums):** Ou dans un choix entre plusieurs options
**Problēma:** La formulation actuelle est un impératif incomplet et ne décrit pas clairement le sens comparé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0634
**Audit ID:** FR-A1-0634
**Card ID:** `a1-oder`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** oder
**LV MASTER reference:** vai tu gribi picu vai salātus?
**CURRENT:** Voulez-vous une pizza ou une salade
**PROPOSED_ET (audit ieteikums):** Tu veux une pizza ou une salade ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous et omet le point d'interrogation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0635
**Audit ID:** FR-A1-0635
**Card ID:** `a1-oder`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** oder
**LV MASTER reference:** tu nāksi, vai ne?
**CURRENT:** Vous viendrez, n'est-ce pas ?
**PROPOSED_ET (audit ieteikums):** Tu viendras, n'est-ce pas ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0636
**Audit ID:** FR-A1-0636
**Card ID:** `a1-oder`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** oder
**LV MASTER reference:** vai netiešā jautājumā
**CURRENT:** Ou dans une question indirecte
**PROPOSED_ET (audit ieteikums):** Si dans une question indirecte
**Problēma:** Dans une question indirecte, vai correspond à si et relève de ob, non de oder.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0638
**Audit ID:** FR-A1-0638
**Card ID:** `a1-passen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** passen
**LV MASTER reference:** derēt / piestāvēt
**CURRENT:** Ajustement / ajustement
**PROPOSED_ET (audit ieteikums):** Aller / aller à quelqu'un
**Problēma:** Deux sens sont séparés par une barre oblique et le nom ajustement ne traduit pas le verbe allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0639
**Audit ID:** FR-A1-0639
**Card ID:** `a1-passen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** passen
**LV MASTER reference:** piestāvēt / stāvēt
**CURRENT:** Se tenir debout / se tenir debout
**PROPOSED_ET (audit ieteikums):** Aller à quelqu'un / être debout
**Problēma:** Les deux sens lettons sont confondus et la traduction actuelle répète le même sens.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0640
**Audit ID:** FR-A1-0640
**Card ID:** `a1-passen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** passen
**LV MASTER reference:** darboties
**CURRENT:** Pour opérer
**PROPOSED_ET (audit ieteikums):** Fonctionner
**Problēma:** Darboties signifie fonctionner ici ; opérer ne convient pas à ce sens général.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0641
**Audit ID:** FR-A1-0641
**Card ID:** `a1-passen`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**DE (read-only):** passen
**LV MASTER reference:** Atceries: Das passt. = Tas der.
**CURRENT:** Atceries: Das passé. = Tas der.
**PROPOSED_ET (audit ieteikums):** Souviens-toi : Das passt. = Ça va.
**Problēma:** Le mot allemand passt est mal écrit passé et la phrase française contient un fragment letton.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0643
**Audit ID:** FR-A1-0643
**Card ID:** `a1-probieren`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** probieren
**LV MASTER reference:** mēģināt
**CURRENT:** Pour essayer
**PROPOSED_ET (audit ieteikums):** Essayer
**Problēma:** La préposition Pour n'est pas présente dans le sens nominal source et rend l'entrée moins adaptée à une liste de vocabulaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0644
**Audit ID:** FR-A1-0644
**Card ID:** `a1-probieren`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** probieren
**LV MASTER reference:** pārbaudīt
**CURRENT:** Pour vérifier
**PROPOSED_ET (audit ieteikums):** Vérifier
**Problēma:** La préposition Pour n'est pas nécessaire dans cette entrée lexicale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0645
**Audit ID:** FR-A1-0645
**Card ID:** `a1-probieren`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** probieren
**LV MASTER reference:** pielaikot
**CURRENT:** A essayer
**PROPOSED_ET (audit ieteikums):** Essayer
**Problēma:** L'infinitif français doit être essayer, sans préposition dans cette liste de sens.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0646
**Audit ID:** FR-A1-0646
**Card ID:** `a1-reis`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** Reis
**LV MASTER reference:** vai tu gatavo rīsus?
**CURRENT:** Cuisinez-vous du riz ?
**PROPOSED_ET (audit ieteikums):** Tu cuisines du riz ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0647
**Audit ID:** FR-A1-0647
**Card ID:** `a1-reis`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Reis
**LV MASTER reference:** Atceries: der Reis ir vienskaitlis vāciski, bet latviski parasti — rīsi.
**CURRENT:** N'oubliez pas : der Reis est au singulier en allemand, mais généralement riz en letton.
**PROPOSED_ET (audit ieteikums):** Souvenez-vous : der Reis est au singulier en allemand, mais on dit généralement rīsi en letton.
**Problēma:** La phrase actuelle affirme que riz est le terme letton, alors que le source donne rīsi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0648
**Audit ID:** FR-A1-0648
**Card ID:** `a1-sagen-study`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** sagen
**LV MASTER reference:** ko tu pateici?
**CURRENT:** Qu'est-ce que vous avez dit
**PROPOSED_ET (audit ieteikums):** Qu'est-ce que tu as dit ?
**Problēma:** Le letton emploie le tutoiement tu, mais la traduction française emploie vous et omet le point d'interrogation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0649
**Audit ID:** FR-A1-0649
**Card ID:** `a1-sagen-study`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sagen
**LV MASTER reference:** pasacīt (konkrētu tekstu)
**CURRENT:** Raconter (un texte spécifique)
**PROPOSED_ET (audit ieteikums):** Dire (un texte précis)
**Problēma:** Pasacīt signifie dire quelque chose de précis, pas raconter une histoire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0650
**Audit ID:** FR-A1-0650
**Card ID:** `a1-sagen-study`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** sagen
**LV MASTER reference:** runāt (valodu, sarunāties)
**CURRENT:** Parler (langage, parler)
**PROPOSED_ET (audit ieteikums):** Parler (une langue, converser)
**Problēma:** La traduction actuelle est redondante et langage ne correspond pas à l'expression parler une langue.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0651
**Audit ID:** FR-A1-0651
**Card ID:** `a1-schauen-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** schauen
**LV MASTER reference:** skatīties
**CURRENT:** Montre
**PROPOSED_ET (audit ieteikums):** Regarder
**Problēma:** Montre est un nom ou une forme de montrer ; schauen signifie regarder.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0652
**Audit ID:** FR-A1-0652
**Card ID:** `a1-schwimmen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** schwimmen
**LV MASTER reference:** peldēties / atrasties ūdenī
**CURRENT:** Nager / être dans l'eau
**PROPOSED_ET (audit ieteikums):** Nager / être dans l'eau
**Problēma:** Deux sens distincts sont séparés par une barre oblique; le choix de présentation doit être validé par le propriétaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0653
**Audit ID:** FR-A1-0653
**Card ID:** `a1-schwimmen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** schwimmen
**LV MASTER reference:** iet peldēt
**CURRENT:** Allez nager
**PROPOSED_ET (audit ieteikums):** Aller nager
**Problēma:** Dans une liste de sens, l'infinitif français est requis; « Allez nager » est un impératif formel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0654
**Audit ID:** FR-A1-0654
**Card ID:** `a1-sehen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sehen
**LV MASTER reference:** skatīties
**CURRENT:** Montre
**PROPOSED_ET (audit ieteikums):** Regarder
**Problēma:** « Montre » signifie montrer ou une montre; il ne traduit pas le verbe letton « skatīties ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0655
**Audit ID:** FR-A1-0655
**Card ID:** `a1-sehen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** sehen
**LV MASTER reference:** apskatīt / skatīties
**CURRENT:** Voir / regarder
**PROPOSED_ET (audit ieteikums):** Voir / regarder
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique; le format doit être validé par le propriétaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0656
**Audit ID:** FR-A1-0656
**Card ID:** `a1-sehen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sehen
**LV MASTER reference:** dzirdēt
**CURRENT:** Pour entendre
**PROPOSED_ET (audit ieteikums):** Entendre
**Problēma:** Le français actuel signifie « pour entendre » et ne correspond pas à l'infinitif demandé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0657
**Audit ID:** FR-A1-0657
**Card ID:** `a1-sein`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** sein
**LV MASTER reference:** Atceries: ich bin = es esmu; du bist = tu esi.
**CURRENT:** Atceries : ich bin = es esmu • Du bist = tu esi.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : ich bin = je suis • du bist = tu es.
**Problēma:** Le texte contient des éléments lettons (« Atceries », « es esmu », « tu esi ») dans le champ français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0660
**Audit ID:** FR-A1-0660
**Card ID:** `a1-sich`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sich
**LV MASTER reference:** viņš mazgājas.
**CURRENT:** Il prend un bain.
**PROPOSED_ET (audit ieteikums):** Il se lave.
**Problēma:** La phrase française signifie prendre un bain, tandis que la source signifie se laver.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0661
**Audit ID:** FR-A1-0661
**Card ID:** `a1-sich`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** sich
**LV MASTER reference:** sevi / sev
**CURRENT:** Moi/moi-même
**PROPOSED_ET (audit ieteikums):** Soi-même / à soi-même
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique; le format doit être validé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0662
**Audit ID:** FR-A1-0662
**Card ID:** `a1-sich`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** sich
**LV MASTER reference:** mani / sevi pie ich
**CURRENT:** Moi / moi-même à ich
**PROPOSED_ET (audit ieteikums):** Me / moi-même avec ich
**Problēma:** La préposition « à ich » est incorrecte et le pronom réfléchi doit être distingué du pronom objet.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0663
**Audit ID:** FR-A1-0663
**Card ID:** `a1-sich`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** sich
**LV MASTER reference:** tevi / sevi pie du
**CURRENT:** Toi/moi-même à du
**PROPOSED_ET (audit ieteikums):** Te / toi-même avec du
**Problēma:** La construction « moi-même à du » est incorrecte et ne correspond pas au pronom lié à « du ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0665
**Audit ID:** FR-A1-0665
**Card ID:** `a1-sicher`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** sicher
**LV MASTER reference:** vai tu nāc rīt? – noteikti!
**CURRENT:** Vous venez demain - définitivement !
**PROPOSED_ET (audit ieteikums):** Vous venez demain ? — Certainement !
**Problēma:** « Définitivement » est peu naturel pour « certainement » dans cette réponse; la ponctuation de la question manque aussi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0667
**Audit ID:** FR-A1-0667
**Card ID:** `a1-sie-study`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sie
**LV MASTER reference:** jūs gatavojat, lūdzu.
**CURRENT:** Tu cuisines s'il te plaît
**PROPOSED_ET (audit ieteikums):** Ils cuisinent, s'il vous plaît.
**Problēma:** Pour « sie » minuscule, « tu » est incompatible avec les référents allemands; il faut employer « ils » ou « elles ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0668
**Audit ID:** FR-A1-0668
**Card ID:** `a1-sie-study-2`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Sie
**LV MASTER reference:** jūs
**CURRENT:** Toi
**PROPOSED_ET (audit ieteikums):** Vous
**Problēma:** « Sie » majuscule est le pronom de politesse allemand et se traduit par « vous », non « toi ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0669
**Audit ID:** FR-A1-0669
**Card ID:** `a1-sie-study-2`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Sie
**LV MASTER reference:** jūs gatavojat, lūdzu.
**CURRENT:** Tu cuisines s'il te plaît
**PROPOSED_ET (audit ieteikums):** Vous cuisinez, s'il vous plaît.
**Problēma:** Le pronom français « tu » contredit le « Sie » allemand de politesse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0670
**Audit ID:** FR-A1-0670
**Card ID:** `a1-sitzen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sitzen
**LV MASTER reference:** sēdēt
**CURRENT:** S'asseoir
**PROPOSED_ET (audit ieteikums):** Être assis
**Problēma:** « Sitzen » décrit une position (« être assis »); « s'asseoir » décrit le mouvement pour prendre cette position.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0671
**Audit ID:** FR-A1-0671
**Card ID:** `a1-sitzen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sitzen
**LV MASTER reference:** sēdēt
**CURRENT:** S'asseoir
**PROPOSED_ET (audit ieteikums):** Être assis
**Problēma:** Le sens statique de « sēdēt » se traduit par « être assis », pas par l'action « s'asseoir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0672
**Audit ID:** FR-A1-0672
**Card ID:** `a1-sitzen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** sitzen
**LV MASTER reference:** gulēt / atrasties guļus
**CURRENT:** Dormir / s'allonger
**PROPOSED_ET (audit ieteikums):** Dormir / être couché
**Problēma:** « S'allonger » signifie prendre la position couchée; « atrasties guļus » signifie y être déjà.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0673
**Audit ID:** FR-A1-0673
**Card ID:** `a1-sitzen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** sitzen
**LV MASTER reference:** apsēsties / nosēdināt
**CURRENT:** S'asseoir / s'asseoir
**PROPOSED_ET (audit ieteikums):** S'asseoir / faire asseoir
**Problēma:** « Nosēdināt » est causatif; il se traduit par « faire asseoir », pas par « s'asseoir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0674
**Audit ID:** FR-A1-0674
**Card ID:** `a1-sollen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** sollen
**LV MASTER reference:** vajadzētu
**CURRENT:** Devrait
**PROPOSED_ET (audit ieteikums):** Devoir
**Problēma:** Le champ traduit un infinitif allemand; « devrait » est une forme conjuguée à la troisième personne.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0675
**Audit ID:** FR-A1-0675
**Card ID:** `a1-sollen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** sollen
**LV MASTER reference:** vajadzētu / jādara pēc norādes
**CURRENT:** Devrait/devrait faire comme indiqué
**PROPOSED_ET (audit ieteikums):** Devoir selon une consigne
**Problēma:** Le champ contient deux formulations séparées par une barre oblique; présentation à valider.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0676
**Audit ID:** FR-A1-0676
**Card ID:** `a1-stehen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** stehen
**LV MASTER reference:** stāvēt / atrasties stāvus
**CURRENT:** Se tenir debout/être debout
**PROPOSED_ET (audit ieteikums):** Se tenir debout / être debout
**Problēma:** Deux formulations distinctes sont séparées par une barre oblique; le format doit être validé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0677
**Audit ID:** FR-A1-0677
**Card ID:** `a1-stehen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** stehen
**LV MASTER reference:** sēdēt
**CURRENT:** S'asseoir
**PROPOSED_ET (audit ieteikums):** Être assis
**Problēma:** « Sēdēt » décrit une position statique et se traduit par « être assis », non « s'asseoir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0678
**Audit ID:** FR-A1-0678
**Card ID:** `a1-stehen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** stehen
**LV MASTER reference:** gulēt / atrasties guļus
**CURRENT:** Dormir / s'allonger
**PROPOSED_ET (audit ieteikums):** Dormir / être couché
**Problēma:** « Atrasties guļus » signifie être couché, tandis que « s'allonger » désigne le mouvement.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0680
**Audit ID:** FR-A1-0680
**Card ID:** `a1-über`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** über
**LV MASTER reference:** mēs runājam par laiku.
**CURRENT:** Nous parlons de temps.
**PROPOSED_ET (audit ieteikums):** Nous parlons du temps.
**Problēma:** « Parler du temps » est la formulation française naturelle pour parler de la météo.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0681
**Audit ID:** FR-A1-0681
**Card ID:** `a1-über`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** über
**LV MASTER reference:** virs / par / pāri
**CURRENT:** Au-dessus/au-dessus/à travers
**PROPOSED_ET (audit ieteikums):** Au-dessus / à propos de / à travers
**Problēma:** Plusieurs traductions distinctes sont séparées par « / »; la formulation contient aussi un doublon.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0682
**Audit ID:** FR-A1-0682
**Card ID:** `a1-über`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** über
**LV MASTER reference:** Atceries: tēma sarunā → über; virs galda → über.
**CURRENT:** Rappelez-vous : sujet de conversation → über • Au-dessus du tableau → über.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : sujet de conversation → über • Au-dessus de la table → über.
**Problēma:** « Tableau » traduit mal « galda » dans cet exemple; il faut « table ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0684
**Audit ID:** FR-A1-0684
**Card ID:** `a1-um`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** um
**LV MASTER reference:** viņš iet ap stūri.
**CURRENT:** Il fait le tour du coin.
**PROPOSED_ET (audit ieteikums):** Il tourne au coin de la rue.
**Problēma:** « Faire le tour du coin » est peu naturel et ne rend pas clairement le déplacement au coin.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0685
**Audit ID:** FR-A1-0685
**Card ID:** `a1-um`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** um
**LV MASTER reference:** es mācos, lai runātu vāciski.
**CURRENT:** J'apprends à parler allemand.
**PROPOSED_ET (audit ieteikums):** J'apprends l'allemand pour pouvoir le parler.
**Problēma:** Le français actuel exprime seulement l'apprentissage, pas explicitement le but « pour parler allemand ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0686
**Audit ID:** FR-A1-0686
**Card ID:** `a1-um`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** um
**LV MASTER reference:** pulksten / ap / lai
**CURRENT:** À / vers / vers
**PROPOSED_ET (audit ieteikums):** À / autour de / pour
**Problēma:** Trois traductions distinctes sont séparées par « / »; décision de présentation requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0687
**Audit ID:** FR-A1-0687
**Card ID:** `a1-um`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** um
**LV MASTER reference:** Atceries: um acht = pulksten astoņos.
**CURRENT:** Rappelez-vous : um acht = huit heures.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : um acht = à huit heures.
**Problēma:** L’heure française nécessite la préposition « à ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0688
**Audit ID:** FR-A1-0688
**Card ID:** `a1-unter`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** unter
**LV MASTER reference:** lampa karājas virs galda.
**CURRENT:** Une lampe est suspendue au-dessus de la table.
**PROPOSED_ET (audit ieteikums):** Une lampe est suspendue sous la table.
**Problēma:** Le français contredit le sens allemand « unter »; « au-dessus » correspond à « über ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0689
**Audit ID:** FR-A1-0689
**Card ID:** `a1-unter`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** unter
**LV MASTER reference:** zem / starp
**CURRENT:** Sous / entre
**PROPOSED_ET (audit ieteikums):** Sous / entre
**Problēma:** Deux traductions distinctes sont séparées par « / »; décision de présentation requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0690
**Audit ID:** FR-A1-0690
**Card ID:** `a1-unter`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** unter
**LV MASTER reference:** virs / par
**CURRENT:** Plus / pour
**PROPOSED_ET (audit ieteikums):** Au-dessus / à propos de
**Problēma:** « Plus » ne traduit pas « virs » et « pour » ne traduit pas « par » dans ces contrastes.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0691
**Audit ID:** FR-A1-0691
**Card ID:** `a1-unter`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** unter
**LV MASTER reference:** Atceries: zem galda → unter dem Tisch.
**CURRENT:** Atceries : zem galda → unter dem Tisch.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : sous la table → unter dem Tisch.
**Problēma:** Le texte actuel contient du letton au lieu du français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0692
**Audit ID:** FR-A1-0692
**Card ID:** `a1-verstehen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** verstehen
**LV MASTER reference:** saprast
**CURRENT:** Pour comprendre
**PROPOSED_ET (audit ieteikums):** Comprendre
**Problēma:** L’infinitif français « pour comprendre » ajoute un but absent du mot allemand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0693
**Audit ID:** FR-A1-0693
**Card ID:** `a1-verstehen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** verstehen
**LV MASTER reference:** es protu runāt vāciski.
**CURRENT:** Je peux parler allemand
**PROPOSED_ET (audit ieteikums):** Je comprends l'allemand.
**Problēma:** La phrase actuelle traduit « können », pas « verstehen ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0694
**Audit ID:** FR-A1-0694
**Card ID:** `a1-verstehen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** verstehen
**LV MASTER reference:** pazīt
**CURRENT:** Savoir
**PROPOSED_ET (audit ieteikums):** Connaître
**Problēma:** « Pazīt » signifie « connaître », tandis que « savoir » traduit « zināt ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0695
**Audit ID:** FR-A1-0695
**Card ID:** `a1-vom`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** vom
**LV MASTER reference:** no
**CURRENT:** Depuis
**PROPOSED_ET (audit ieteikums):** Du / de la
**Problēma:** « Vom » est la contraction de « von dem » et signifie généralement « du », non « depuis ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0696
**Audit ID:** FR-A1-0696
**Card ID:** `a1-vor`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** vor
**LV MASTER reference:** Atceries: pirms laikā, priekšā vietā → vor.
**CURRENT:** Rappelez-vous : avant l'heure, devant la place → vor.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : avant dans le temps, devant dans l'espace → vor.
**Problēma:** « Devant la place » ne rend pas l’opposition temps/espace du texte source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0698
**Audit ID:** FR-A1-0698
**Card ID:** `a1-was`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** was
**LV MASTER reference:** Kas notika?
**CURRENT:** Ce qui s'est passé?
**PROPOSED_ET (audit ieteikums):** Qu'est-ce qui s'est passé ?
**Problēma:** La phrase actuelle est une proposition relative, pas une question française complète.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0699
**Audit ID:** FR-A1-0699
**Card ID:** `a1-was`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** COMPARISON
**DE (read-only):** was
**LV MASTER reference:** Kas ir tavs mīļākais ēdiens?
**CURRENT:** Quel est votre plat préféré ?
**PROPOSED_ET (audit ieteikums):** Quel est ton plat préféré ?
**Problēma:** Le tutoiement du texte source est remplacé sans justification par le vouvoiement.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0700
**Audit ID:** FR-A1-0700
**Card ID:** `a1-was`
**Field/path:** `study.examples[6].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** was
**LV MASTER reference:** Ko tu pasacīji?
**CURRENT:** Qu'est-ce que vous avez dit
**PROPOSED_ET (audit ieteikums):** Qu'est-ce que tu as dit ?
**Problēma:** Le pronom ne correspond pas au tutoiement source et le point d'interrogation manque.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0701
**Audit ID:** FR-A1-0701
**Card ID:** `a1-wenn`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** wenn
**LV MASTER reference:** vai netiešā jautājumā
**CURRENT:** Ou dans une question indirecte
**PROPOSED_ET (audit ieteikums):** Si dans une question indirecte
**Problēma:** « Vai » signifie ici « si », pas la conjonction « ou ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0702
**Audit ID:** FR-A1-0702
**Card ID:** `a1-wenn`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** wenn
**LV MASTER reference:** kad jautājumā
**CURRENT:** En cas de question
**PROPOSED_ET (audit ieteikums):** Dans une question avec « quand »
**Problēma:** La traduction actuelle perd la référence au mot interrogatif « quand ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0703
**Audit ID:** FR-A1-0703
**Card ID:** `a1-wenn`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** wenn
**LV MASTER reference:** Atceries: nosacījums → wenn; jautājums “kad?” → wann.
**CURRENT:** Rappelez-vous : condition → wenn • La question "quand?" → veux.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : condition → wenn • La question « quand ? » → wann.
**Problēma:** « Veux » est le verbe français « vouloir » et remplace incorrectement le mot allemand « wann ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0704
**Audit ID:** FR-A1-0704
**Card ID:** `a1-wer`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** wer
**LV MASTER reference:** Kas tas ir?
**CURRENT:** Qu'est-ce que c'est?
**PROPOSED_ET (audit ieteikums):** Qui est-ce ?
**Problēma:** « Qu'est-ce que c'est ? » correspond à « was », tandis que « wer » demande « qui ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0705
**Audit ID:** FR-A1-0705
**Card ID:** `a1-wer`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** wer
**LV MASTER reference:** Kas šodien nāk?
**CURRENT:** Qu'est-ce qui arrive aujourd'hui ?
**PROPOSED_ET (audit ieteikums):** Qui arrive aujourd'hui ?
**Problēma:** « Qu'est-ce qui » demande une chose; « wer » demande une personne.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0706
**Audit ID:** FR-A1-0706
**Card ID:** `a1-wer`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** wer
**LV MASTER reference:** Kurš no jums runā vāciski?
**CURRENT:** Lequel d'entre vous parle allemand ?
**PROPOSED_ET (audit ieteikums):** Qui parmi vous parle allemand ?
**Problēma:** Avec « wer », « qui parmi vous » est plus fidèle que le pronom « lequel ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0707
**Audit ID:** FR-A1-0707
**Card ID:** `a1-werden`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** werden
**LV MASTER reference:** kļūst auksti.
**CURRENT:** Il fait froid.
**PROPOSED_ET (audit ieteikums):** Il se met à faire froid.
**Problēma:** La phrase actuelle décrit un état; « werden » exprime le changement d’état.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0708
**Audit ID:** FR-A1-0708
**Card ID:** `a1-werden`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** werden
**LV MASTER reference:** es esmu noguris.
**CURRENT:** Je suis fatigué
**PROPOSED_ET (audit ieteikums):** Je deviens fatigué.
**Problēma:** « Je suis fatigué » traduit « sein », pas « werden »; le sens allemand est incohérent avec la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0709
**Audit ID:** FR-A1-0709
**Card ID:** `a1-wetter`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Wetter
**LV MASTER reference:** kāds laiks šodien?
**CURRENT:** Quelle heure est-il aujourd'hui ?
**PROPOSED_ET (audit ieteikums):** Quel temps fait-il aujourd'hui ?
**Problēma:** La phrase actuelle demande l'heure, alors que « Wetter » concerne la météo.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0710
**Audit ID:** FR-A1-0710
**Card ID:** `a1-wetter`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Wetter
**LV MASTER reference:** mēs runājam par laiku.
**CURRENT:** Nous parlons de temps.
**PROPOSED_ET (audit ieteikums):** Nous parlons du temps.
**Problēma:** La tournure française naturelle est « parler du temps » pour parler de la météo.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0711
**Audit ID:** FR-A1-0711
**Card ID:** `a1-wie`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** wie
**LV MASTER reference:** kā tevi sauc?
**CURRENT:** Quel est ton nom
**PROPOSED_ET (audit ieteikums):** Comment t'appelles-tu ?
**Problēma:** La question source demande comment la personne s'appelle; la version actuelle est moins fidèle et incomplète.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0712
**Audit ID:** FR-A1-0712
**Card ID:** `a1-zu`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zu
**LV MASTER reference:** uz • pie
**CURRENT:** À • À
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0714
**Audit ID:** FR-A1-0714
**Card ID:** `a1-zu`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** zu
**LV MASTER reference:** uz / pie / pārāk / infinitīvs
**CURRENT:** À / à / aussi / infinitif
**PROPOSED_ET (audit ieteikums):** À / à / trop / infinitif
**Problēma:** In this contrast, Latvian pārāk corresponds to French trop, not aussi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0715
**Audit ID:** FR-A1-0715
**Card ID:** `a1-zug`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Zug
**LV MASTER reference:** dzelzceļš / braukšana ar vilcienu
**CURRENT:** Chemin de fer / voyager en train
**PROPOSED_ET (audit ieteikums):** Chemin de fer
**Problēma:** The comparison field lists distinct meanings with a separator; owner decision is required.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0716
**Audit ID:** FR-A1-0716
**Card ID:** `a1-zum`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zum
**LV MASTER reference:** uz • pie
**CURRENT:** À • À
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0718
**Audit ID:** FR-A1-0718
**Card ID:** `a1-zum`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zum
**LV MASTER reference:** uz / pie (kam?)
**CURRENT:** À/chez (qui ?)
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** The comparison field lists distinct translations with a separator; owner decision is required.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0719
**Audit ID:** FR-A1-0719
**Card ID:** `a1-zum`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** zum
**LV MASTER reference:** uz / pie (siev. dzimte)
**CURRENT:** À/à (famille de l'épouse)
**PROPOSED_ET (audit ieteikums):** À (féminin)
**Problēma:** Latvian siev. dzimte means feminine gender, not the wife's family.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0720
**Audit ID:** FR-A1-0720
**Card ID:** `a1-zum`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** zum
**LV MASTER reference:** uz / pie / pārāk
**CURRENT:** À / à / aussi
**PROPOSED_ET (audit ieteikums):** À / à / trop
**Problēma:** In this contrast, Latvian pārāk corresponds to French trop, not aussi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0721
**Audit ID:** FR-A1-0721
**Card ID:** `a1-zum`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zum
**LV MASTER reference:** uz (pilsētas/valstis)
**CURRENT:** Vers (villes/pays)
**PROPOSED_ET (audit ieteikums):** Vers
**Problēma:** The comparison field contains separated alternatives/context labels; owner decision is required.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0722
**Audit ID:** FR-A1-0722
**Card ID:** `a1-fernsehen`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** fernsehen
**LV MASTER reference:** Par darbību lieto fernsehen (ich sehe fern). Par TV programmu vai mediju lieto das Fernsehen.
**CURRENT:** Fernsehen (ich sehe fougère) est utilisé pour l'action. Das Fernsehen est utilisé pour un programme ou un média télévisé.
**PROPOSED_ET (audit ieteikums):** Fernsehen (ich sehe fern) est utilisé pour l'action. Das Fernsehen est utilisé pour un programme ou un média télévisé.
**Problēma:** Fougère is an erroneous French substitution for the German word fern.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0723
**Audit ID:** FR-A1-0723
**Card ID:** `a1-fernsehen`
**Field/path:** `study.important.text`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** fernsehen
**LV MASTER reference:** fernsehen = darbības vārds (ich sehe fern). das Fernsehen = lietvārds, tikai vienskaitlis.
**CURRENT:** Fernsehen = verbe (ich sehe fougère). das Fernsehen = nom, singulier seulement.
**PROPOSED_ET (audit ieteikums):** Fernsehen = verbe (ich sehe fern). das Fernsehen = nom, singulier seulement.
**Problēma:** Fougère is an erroneous French substitution for the German word fern.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0724
**Audit ID:** FR-A1-0724
**Card ID:** `a1-essen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** essen
**LV MASTER reference:** ko jūs gribat ēst?
**CURRENT:** Que veux-tu manger
**PROPOSED_ET (audit ieteikums):** Que voulez-vous manger ?
**Problēma:** The Latvian source uses the formal/plural pronoun jūs, so French tu is inconsistent; punctuation is also missing.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0725
**Audit ID:** FR-A1-0725
**Card ID:** `a1-essen-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Essen
**LV MASTER reference:** ēdiens • maltīte
**CURRENT:** Alimentation • Repas
**PROPOSED_ET (audit ieteikums):** Alimentation
**Problēma:** The learner-facing field combines distinct meanings with a separator; owner decision is required.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0727
**Audit ID:** FR-A1-0727
**Card ID:** `a1-essen-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Essen
**LV MASTER reference:** ko jūs gribat ēst?
**CURRENT:** Que veux-tu manger
**PROPOSED_ET (audit ieteikums):** Que voulez-vous manger ?
**Problēma:** The Latvian source uses the formal/plural pronoun jūs, so French tu is inconsistent; punctuation is also missing.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0728
**Audit ID:** FR-A1-0728
**Card ID:** `a1-ferien`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Ferien
**LV MASTER reference:** Brīvdienās mēs braucam pie jūras.
**CURRENT:** Le week-end, nous allons à la mer.
**PROPOSED_ET (audit ieteikums):** Pendant les vacances, nous allons à la mer.
**Problēma:** Ferien means holidays, not specifically the weekend.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0729
**Audit ID:** FR-A1-0729
**Card ID:** `a1-ferien`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Ferien
**LV MASTER reference:** ko jūs darāt brīvdienās?
**CURRENT:** Que fais-tu en vacances
**PROPOSED_ET (audit ieteikums):** Que faites-vous pendant les vacances ?
**Problēma:** The Latvian source uses formal/plural jūs, so French tu is inconsistent; punctuation is also missing.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0730
**Audit ID:** FR-A1-0730
**Card ID:** `a1-ferien`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Ferien
**LV MASTER reference:** skola brīvdienās ir slēgta.
**CURRENT:** L'école est fermée les jours fériés.
**PROPOSED_ET (audit ieteikums):** L'école est fermée pendant les vacances scolaires.
**Problēma:** Jours fériés means public holidays, whereas Ferien here means school holidays.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0731
**Audit ID:** FR-A1-0731
**Card ID:** `a1-ferien`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**DE (read-only):** Ferien
**LV MASTER reference:** skolas/studiju brīvlaiks (tikai dsk.)
**CURRENT:** Pause scolaire/études (dsk. uniquement)
**PROPOSED_ET (audit ieteikums):** Pause scolaire/études (au pluriel uniquement)
**Problēma:** The abbreviation dsk. is not French and should be replaced with a French grammatical label.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0732
**Audit ID:** FR-A1-0732
**Card ID:** `a1-ferien`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** Ferien
**LV MASTER reference:** atvaļinājums no darba (tikai vsk.)
**CURRENT:** Congé du travail (uniquement tous)
**PROPOSED_ET (audit ieteikums):** Congé du travail (au singulier uniquement)
**Problēma:** Tous is incorrect here; the Latvian source specifies singular, which is au singulier in French.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0733
**Audit ID:** FR-A1-0733
**Card ID:** `a1-urlaub`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Urlaub
**LV MASTER reference:** nākamnedēļ man ir atvaļinājums.
**CURRENT:** J'ai des vacances la semaine prochaine.
**PROPOSED_ET (audit ieteikums):** Je suis en vacances la semaine prochaine.
**Problēma:** French normally says être en vacances rather than avoir des vacances in this context.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0734
**Audit ID:** FR-A1-0734
**Card ID:** `a1-urlaub`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** Urlaub
**LV MASTER reference:** atvaļinājums no darba (tikai vsk.)
**CURRENT:** Congé du travail (uniquement tous)
**PROPOSED_ET (audit ieteikums):** Congé du travail (au singulier uniquement)
**Problēma:** Tous is incorrect here; the Latvian source specifies singular, which is au singulier in French.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0735
**Audit ID:** FR-A1-0735
**Card ID:** `a1-urlaub`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**DE (read-only):** Urlaub
**LV MASTER reference:** skolas/studiju brīvlaiks (dsk. tikai)
**CURRENT:** Pause scolaire/études (dsk. uniquement)
**PROPOSED_ET (audit ieteikums):** Pause scolaire/études (au pluriel uniquement)
**Problēma:** The abbreviation dsk. is not French and should be replaced with a French grammatical label.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0736
**Audit ID:** FR-A1-0736
**Card ID:** `a1-uhr`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Uhr
**LV MASTER reference:** Ir astoņi (pulksten astoņi).
**CURRENT:** Il est huit (huit heures).
**PROPOSED_ET (audit ieteikums):** Il est huit heures.
**Problēma:** « Il est huit » est incomplet en français standard ; la parenthèse crée une formulation maladroite.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0737
**Audit ID:** FR-A1-0737
**Card ID:** `a1-uhr`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Uhr
**LV MASTER reference:** ir astoņi (pulksten astoņi).
**CURRENT:** Il est huit (huit heures).
**PROPOSED_ET (audit ieteikums):** Il est huit heures.
**Problēma:** « Il est huit » est incomplet en français standard ; la parenthèse crée une formulation maladroite.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0738
**Audit ID:** FR-A1-0738
**Card ID:** `a1-uhr`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** Uhr
**LV MASTER reference:** ierīce/laiks pulkstenī; die Zeit
**CURRENT:** Appareil/heure sur l'horloge • Die Zeit
**PROPOSED_ET (audit ieteikums):** Appareil ou heure sur l'horloge
**Problēma:** « Die Zeit » est un segment allemand résiduel dans un champ français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0739
**Audit ID:** FR-A1-0739
**Card ID:** `a1-zeit`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Zeit
**LV MASTER reference:** laiks (brīdis / laika posms)
**CURRENT:** Temps (instant / période de temps)
**PROPOSED_ET (audit ieteikums):** Temps (instant ou période de temps)
**Problēma:** La barre oblique sépare deux sens dans le champ learner-facing ; une formulation unifiée est préférable.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0741
**Audit ID:** FR-A1-0741
**Card ID:** `a1-zeit`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Zeit
**LV MASTER reference:** man nav laika.
**CURRENT:** Je n'ai pas le temps
**PROPOSED_ET (audit ieteikums):** Je n'ai pas le temps.
**Problēma:** Le point final manque dans cet exemple français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0742
**Audit ID:** FR-A1-0742
**Card ID:** `a1-zeit`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Zeit
**LV MASTER reference:** vai tev ir laiks?
**CURRENT:** As-tu le temps
**PROPOSED_ET (audit ieteikums):** As-tu le temps ?
**Problēma:** Le point d'interrogation manque dans cette question française.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0743
**Audit ID:** FR-A1-0743
**Card ID:** `a1-einmal`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** STUDY
**DE (read-only):** einmal
**LV MASTER reference:** vienreiz • reiz
**CURRENT:** Une fois • Une fois
**PROPOSED_ET (audit ieteikums):** Une fois
**Problēma:** La traduction est répétée deux fois, ce qui crée une entrée d'étude redondante.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0745
**Audit ID:** FR-A1-0745
**Card ID:** `a1-einmal`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** einmal
**LV MASTER reference:** es reiz biju Berlīnē.
**CURRENT:** J'étais une fois à Berlin.
**PROPOSED_ET (audit ieteikums):** Je suis allé une fois à Berlin.
**Problēma:** « J'étais une fois à Berlin » est un calque peu naturel pour exprimer une visite passée.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0746
**Audit ID:** FR-A1-0746
**Card ID:** `a1-einmal`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** einmal
**LV MASTER reference:** Es reiz biju Berlīnē.
**CURRENT:** J'étais une fois à Berlin.
**PROPOSED_ET (audit ieteikums):** Je suis allé une fois à Berlin.
**Problēma:** « J'étais une fois à Berlin » est un calque peu naturel pour exprimer une visite passée.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0747
**Audit ID:** FR-A1-0747
**Card ID:** `a1-noch-mal`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** noch mal
**LV MASTER reference:** vēlreiz, lūdzu.
**CURRENT:** Encore une fois s'il te plaît
**PROPOSED_ET (audit ieteikums):** Encore une fois, s'il vous plaît.
**Problēma:** La source est polie ; « te » est incohérent avec « s'il vous plaît », et la ponctuation manque.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0748
**Audit ID:** FR-A1-0748
**Card ID:** `a1-noch-mal`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** noch mal
**LV MASTER reference:** pasaki to vēlreiz.
**CURRENT:** Dis-le encore
**PROPOSED_ET (audit ieteikums):** Dis-le encore.
**Problēma:** Le point final manque dans cet exemple français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---