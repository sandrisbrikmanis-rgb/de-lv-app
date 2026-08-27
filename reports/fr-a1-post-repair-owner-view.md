# FR–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `a2a769e8600291411a7a66eab0483dd4659c9151`
**WORK_BRANCH:** `cursor/fr-a1-owner-gala-copy-only-f5bc`
**Audit PR:** [#683](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/683)
**SCOPE:** FR–DE A1 (`data/fr/a1.js`)
**Findings:** **159** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)

> OBJECT_COVERAGE = 702/702 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [fr-a1-post-repair-owner-decisions.md](fr-a1-post-repair-owner-decisions.md).
> **DE = STRICT READ-ONLY.** Production: `data/fr/a1.js` + `www/data/fr/a1.js`.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [fr-a1-post-repair-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-review-GITHUB.md) |
| OWNER README | [fr-a1-post-repair-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-review-README.md) |
| OWNER DECISIONS | [fr-a1-post-repair-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions.md) |
| Pilns audits | [fr-a1-post-repair-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-audit.md) |
| OWNER authority (filled) | [owner-authority/](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/owner-authority/) | 423 LABOT · 481 NELABOT |

## Grupas (pa 50 findingiem)

| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [fr-a1-post-repair-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group01.md) | [fr-a1-post-repair-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group01.md) |
| 51–100 | 50 | [fr-a1-post-repair-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group02.md) | [fr-a1-post-repair-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group02.md) |
| 101–150 | 50 | [fr-a1-post-repair-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group03.md) | [fr-a1-post-repair-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group03.md) |
| 151–159 | 9 | [fr-a1-post-repair-owner-view-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group04.md) | [fr-a1-post-repair-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group04.md) |

## Īsais saraksts (visi findingi)

- **FR-A1-0008** `a1-besuch` · `entry[87].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0057** `a1-fussball-study` · `entry[218].study.explanation[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0058** `a1-fussball-study` · `entry[218].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0059** `a1-gefallen-study` · `entry[225].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0060** `a1-gefallen-study` · `entry[225].study.comparison[1].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0061** `a1-gefallen-study` · `entry[225].study.tip[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0082** `a1-huebsch` · `entry[288].study.explanation[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0083** `a1-huebsch` · `entry[288].study.explanation[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0084** `a1-huebsch` · `entry[288].study.comparison[0].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0085** `a1-huebsch` · `entry[288].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0086** `a1-huebsch` · `entry[288].study.comparison[1].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0087** `a1-huebsch` · `entry[288].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0088** `a1-huebsch` · `entry[288].study.tip.text` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0089** `a1-huebsch` · `entry[288].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0230** `a1-klein-study` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0231** `a1-klein-study` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0232** `a1-auch-study` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0233** `a1-auch-study` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0234** `a1-aufs` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0235** `a1-baden` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0236** `a1-besuch` · `study.sectionAccents (?)` · HIGH · Missing sectionAccents present in LV
- **FR-A1-0237** `a1-besuchen` · `study.sectionAccents (?)` · HIGH · Missing sectionAccents present in LV
- **FR-A1-0238** `a1-bringen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0239** `a1-bringen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0240** `a1-da` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0241** `a1-dieser` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0248** `a1-fahren` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0249** `a1-finden` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0250** `a1-finden` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0255** `a1-gross-study` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0259** `a1-hoch-study` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0261** `a1-huebsch` · `study.sectionAccents (?)` · HIGH · Missing sectionAccents present in LV
- **FR-A1-0262** `a1-ihr` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0263** `a1-ihr` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0264** `a1-im` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0278** `a1-mögen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0283** `a1-müssen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0289** `a1-ob` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0290** `a1-oder` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0296** `a1-sich` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0297** `a1-sie-study` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0298** `a1-sie-study-2` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0305** `a1-um` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0309** `a1-verstehen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0311** `a1-wer` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0312** `a1-wer` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0313** `a1-werden` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0314** `a1-werden` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0315** `a1-wetter` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0316** `a1-wie` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0319** `a1-urlaub` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0320** `a1-uhr` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0321** `a1-einmal` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0322** `a1-klein` · `study.sectionAccents.examples.lv` · MEDIUM · sectionAccents termins "pièce" nav atrodams sadaļā examples
- **FR-A1-0323** `a1-klein` · `study.sectionAccents.examples.lv` · MEDIUM · sectionAccents termins "L'enfant" nav atrodams sadaļā examples
- **FR-A1-0324** `a1-an` · `study.sectionAccents.tip.left` · MEDIUM · sectionAccents termins "sienas" nav atrodams sadaļā tip
- **FR-A1-0325** `a1-an` · `study.sectionAccents.tip.left` · MEDIUM · sectionAccents termins "loga" nav atrodams sadaļā tip
- **FR-A1-0326** `a1-an` · `study.sectionAccents.tip.left` · MEDIUM · sectionAccents termins "malas" nav atrodams sadaļā tip
- **FR-A1-0327** `a1-du-149` · `frText` · MEDIUM · « du » est un pronom sujet allemand ; « toi » est une forme tonique française, p…
- **FR-A1-0328** `a1-Filzstift-186` · `frText` · LOW · Le nom composé français s’écrit normalement avec un trait d’union : stylo-feutre…
- **FR-A1-0329** `a1-an` · `frMain` · MEDIUM · Le champ learner-facing contient plusieurs traductions séparées par des puces; u…
- **FR-A1-0332** `a1-ab` · `study.comparison[1].meaning` · LOW · Le champ juxtapose plusieurs formulations avec une barre oblique et une puce.
- **FR-A1-0336** `a1-aus` · `frMain` · MEDIUM · Le champ learner-facing contient deux traductions distinctes séparées par une pu…
- **FR-A1-0338** `a1-aufs` · `frMain` · MEDIUM · Le champ learner-facing contient plusieurs traductions séparées par des puces.
- **FR-A1-0340** `a1-aufs` · `study.examples[4].lv` · MEDIUM · « Monter à cheval » signifie pratiquer l'équitation, pas monter sur le cheval co…
- **FR-A1-0341** `a1-baden` · `frMain` · HIGH · « Nager » correspond à schwimmen; baden signifie ici « se baigner ».
- **FR-A1-0342** `a1-baden` · `study.comparison[3].meaning` · MEDIUM · Dans une liste de significations, l'infinitif « aller nager » est requis, non l'…
- **FR-A1-0343** `a1-bei` · `frMain` · MEDIUM · « À » est trop vague et ne rend pas le sens principal de bei, notamment la prése…
- **FR-A1-0344** `a1-bitte` · `study.examples[2].lv` · HIGH · La phrase française ajoute une tasse de café, absente de la source et du sens de…
- **FR-A1-0346** `a1-bleiben` · `study.examples[3].lv` · HIGH · « Je rentre » signifie que je vais ou retourne chez moi, contrairement à bleiben…
- **FR-A1-0348** `a1-da` · `study.examples[1].lv` · LOW · Il manque le point final à cette phrase française complète.
- **FR-A1-0351** `a1-dass` · `study.comparison[1].meaning` · MEDIUM · Le champ contient deux éléments séparés par une puce, mais la traduction françai…
- **FR-A1-0352** `a1-ein` · `frMain` · MEDIUM · Le champ contient plusieurs traductions distinctes et « Quelqu'un » ne traduit p…
- **FR-A1-0356** `a1-eis` · `study.comparison[0].meaning` · MEDIUM · Le champ contient deux traductions distinctes séparées par une barre oblique.
- **FR-A1-0357** `a1-eis` · `study.comparison[1].meaning` · MEDIUM · « Il va neiger » signifie qu'il neigera, tandis que sniegs signifie « neige » co…
- **FR-A1-0360** `a1-erst` · `study.comparison[0].meaning` · MEDIUM · « Premier » ne fonctionne pas comme traduction adverbiale de vispirms.
- **FR-A1-0361** `a1-erst` · `study.comparison[1].meaning` · MEDIUM · « Premièrement » traduit une énumération, pas le sens temporel de vispirms ici.
- **FR-A1-0362** `a1-es` · `frMain` · MEDIUM · Le champ répète « Il » et présente plusieurs traductions séparées par des puces.
- **FR-A1-0366** `a1-etwas` · `study.examples[1].lv` · MEDIUM · La traduction omet le sens quantitatif de nedaudz et la ponctuation interrogativ…
- **FR-A1-0367** `a1-etwas` · `study.tip.text` · LOW · « Légèrement » signifie slightly; « un peu » correspond directement au sens de n…
- **FR-A1-0368** `a1-etwas` · `study.comparison[0].meaning` · MEDIUM · Le champ contient deux traductions distinctes séparées par une barre oblique.
- **FR-A1-0372** `a1-fahren` · `frMain` · MEDIUM · Le champ contient plusieurs traductions distinctes séparées par des puces.
- **FR-A1-0374** `a1-fahren` · `study.comparison[0].meaning` · LOW · « Prendre le transport » est peu naturel en français pour exprimer le déplacemen…
- **FR-A1-0375** `a1-fahren` · `study.comparison[1].meaning` · MEDIUM · L'impératif « Allez » ne convient pas à une entrée lexicale glossée par un infin…
- **FR-A1-0376** `a1-fahren` · `study.comparison[2].meaning` · MEDIUM · « Partir » ne traduit pas iet dans le sens de marcher; le gloss doit rester cohé…
- **FR-A1-0377** `a1-fahren` · `study.comparison[3].meaning` · MEDIUM · Fahren ne signifie pas généralement « apporter/livrer »; pour des personnes, le …
- **FR-A1-0378** `a1-finden` · `frMain` · MEDIUM · Le champ contient plusieurs traductions distinctes séparées par une puce.
- **FR-A1-0380** `a1-finden` · `study.comparison[0].meaning` · MEDIUM · Le champ contient deux traductions distinctes séparées par une barre oblique.
- **FR-A1-0384** `a1-fuer` · `study.examples[3].lv` · MEDIUM · Le français emploie vous, alors que la source utilise le singulier informel tu.
- **FR-A1-0387** `a1-geben` · `study.comparison[2].meaning` · MEDIUM · Deux traductions distinctes sont réunies dans un champ learner-facing avec une b…
- **FR-A1-0388** `a1-geben` · `study.comparison[3].meaning` · MEDIUM · Deux traductions distinctes sont réunies dans un champ learner-facing avec une b…
- **FR-A1-0393** `a1-hand-study` · `study.examples[2].lv` · HIGH · Le français traduit bras, mais le mot allemand cible Hand signifie main.
- **FR-A1-0400** `a1-ins` · `study.examples[3].lv` · MEDIUM · Ins Haus indique l'entrée dans la maison, et non simplement la destination « à l…
- **FR-A1-0402** `a1-kennen-study` · `frMain` · HIGH · Kennen se traduit par « connaître », tandis que « savoir » correspond à wissen.
- **FR-A1-0403** `a1-kennen-study` · `study.examples[2].lv` · MEDIUM · Avec « vous » sujet pluriel, le participe passé pronominal doit s'accorder au pl…
- **FR-A1-0405** `a1-wissen-study` · `study.examples[1].lv` · MEDIUM · Le français emploie « tu » alors que la source utilise la forme formelle/pluriel…
- **FR-A1-0406** `a1-können` · `frMain` · LOW · Deux traductions distinctes sont présentées dans le champ destiné à l'apprenant;…
- **FR-A1-0408** `a1-können` · `study.comparison[0].meaning` · LOW · Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
- **FR-A1-0409** `a1-kosten` · `frMain` · HIGH · Kosten signifie « coûter », tandis que « payer » traduit zahlen.
- **FR-A1-0417** `a1-laden-study` · `frMain` · MEDIUM · « Boutique » est plus spécifique et ne correspond pas exactement au terme allema…
- **FR-A1-0418** `a1-land` · `frMain` · LOW · Deux traductions distinctes sont présentées dans le champ destiné à l'apprenant.
- **FR-A1-0421** `a1-land` · `study.comparison[3].meaning` · LOW · Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
- **FR-A1-0422** `a1-lang` · `frMain` · MEDIUM · La forme masculine « long » est requise pour le sens de « long » sans nom fémini…
- **FR-A1-0424** `a1-lassen` · `frMain` · HIGH · « Partir » traduit partir; lassen signifie ici laisser ou permettre.
- **FR-A1-0427** `a1-laufen` · `frMain` · HIGH · Laufen signifie « courir » ou « fonctionner »; « exécuter » et « utiliser » sont…
- **FR-A1-0430** `a1-laut-study` · `study.examples[1].lv` · MEDIUM · L'exemple décrit l'adjectif « laut » et non le nom « Laut » de cette carte.
- **FR-A1-0432** `a1-laut-study` · `study.examples[3].lv` · MEDIUM · L'exemple décrit l'adjectif « laut » et non le nom « Laut » de cette carte.
- **FR-A1-0433** `a1-legen` · `study.examples[3].lv` · MEDIUM · L'exemple décrit liegen, être situé, et non legen, poser ou déposer.
- **FR-A1-0434** `a1-leise-study` · `study.examples[0].lv` · MEDIUM · Le tutoiement singulier de la source exige « te » et l'impératif singulier « res…
- **FR-A1-0435** `a1-liegen` · `frMain` · MEDIUM · Liegen signifie être allongé ou situé, pas simplement être ou dormir.
- **FR-A1-0437** `a1-liegen` · `study.examples[3].lv` · MEDIUM · L'exemple décrit legen, poser, et non liegen, être situé ou être allongé.
- **FR-A1-0439** `a1-machen` · `frMain` · MEDIUM · The learner-facing field contains duplicated translations separated by •; the in…
- **FR-A1-0441** `a1-mal` · `frMain` · HIGH · Mal means 'fois' when used as the noun for an occurrence, not 'temps' in this vo…
- **FR-A1-0443** `a1-morgen` · `study.examples[1].lv` · LOW · The preposition à requires a grave accent in the fixed expression À demain.
- **FR-A1-0444** `a1-müssen` · `frMain` · HIGH · Müssen expresses obligation or necessity and translates as devoir, not avoir bes…
- **FR-A1-0445** `a1-nach` · `frMain` · MEDIUM · The learner-facing field contains multiple translations separated by •; the inte…
- **FR-A1-0447** `a1-natuerlich` · `frMain` · MEDIUM · The learner-facing field contains multiple translations separated by •; the inte…
- **FR-A1-0449** `a1-natuerlich` · `study.examples[5].lv` · MEDIUM · The learner-facing field contains two alternatives separated by /; the intended …
- **FR-A1-0450** `a1-nehmen` · `frMain` · MEDIUM · The learner-facing field contains duplicated translations separated by •; the in…
- **FR-A1-0452** `a1-noch-study` · `study.examples[1].lv` · LOW · La phrase doit se terminer par un point.
- **FR-A1-0453** `a1-noch-study` · `study.examples[2].lv` · LOW · Il manque le point d'interrogation final.
- **FR-A1-0455** `a1-ob` · `frMain` · HIGH · Ob signifie « si » dans une proposition interrogative indirecte, et non « ou ».
- **FR-A1-0456** `a1-ob` · `study.comparison[2].meaning` · MEDIUM · Ob correspond à « si » et n'exprime pas « quand ».
- **FR-A1-0458** `a1-oder` · `study.comparison[0].meaning` · MEDIUM · « Ou choisissez » change le sens vers un impératif et ne traduit pas le libellé …
- **FR-A1-0459** `a1-passen` · `frMain` · HIGH · « Ajustement » est un nom et ne traduit pas le verbe allemand passen.
- **FR-A1-0464** `a1-probieren` · `study.examples[3].lv` · LOW · Il manque le point d'interrogation final.
- **FR-A1-0465** `a1-probieren` · `study.comparison[0].meaning` · MEDIUM · Le séparateur « / » présente plusieurs formulations dans un champ destiné à l'ap…
- **FR-A1-0466** `a1-schau​en-study` · `frMain` · HIGH · « Montre » signifie « montre-moi » ou « montre » comme nom; le verbe allemand si…
- **FR-A1-0467** `a1-schauen-study` · `study.examples[2].lv` · LOW · La phrase doit se terminer par un point.
- **FR-A1-0468** `a1-schon-study` · `study.examples[0].lv` · LOW · La phrase doit se terminer par un point.
- **FR-A1-0469** `a1-schwimmen` · `study.examples[0].lv` · LOW · La phrase doit se terminer par un point.
- **FR-A1-0470** `a1-schwimmen` · `study.examples[3].lv` · LOW · La phrase doit se terminer par un point.
- **FR-A1-0471** `a1-schwimmen` · `study.comparison[0].meaning` · MEDIUM · Le champ contient plusieurs éléments explicatifs au lieu d'une formulation d'app…
- **FR-A1-0474** `a1-sein` · `frMain` · MEDIUM · « Elle » est au singulier et ne correspond pas à la source, qui indique deux for…
- **FR-A1-0475** `a1-sein` · `study.translation` · MEDIUM · « Elle » est au singulier et ne correspond pas à la source, qui indique deux for…
- **FR-A1-0476** `a1-seite` · `frMain` · LOW · Deux traductions distinctes sont présentées avec « • » ; une décision éditoriale…
- **FR-A1-0478** `a1-sich` · `frMain` · HIGH · « Sich » est un pronom réfléchi général, pas la forme de politesse « vous-même »…
- **FR-A1-0480** `a1-sich` · `study.examples[2].lv` · MEDIUM · Le verbe français actuel exprime un état, tandis que la phrase source exprime un…
- **FR-A1-0481** `a1-sicher` · `frMain` · LOW · Deux traductions distinctes sont présentées avec « • » ; une décision éditoriale…
- **FR-A1-0483** `a1-sie-study` · `frMain` · MEDIUM · La forme allemande « sie » peut être « elle », « ils » ou « elles » ; la forme f…
- **FR-A1-0486** `a1-sie-study-2` · `frMain` · HIGH · Le pronom allemand formel « Sie » se traduit par « vous », pas par le tutoiement…
- **FR-A1-0487** `a1-sie-study-2` · `study.examples[0].lv` · MEDIUM · La phrase source est déclarative ; l'impératif français change le sens.
- **FR-A1-0488** `a1-sie-study-2` · `study.examples[1].lv` · HIGH · Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième pers…
- **FR-A1-0489** `a1-sie-study-2` · `study.examples[2].lv` · HIGH · Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième pers…
- **FR-A1-0490** `a1-sie-study-2` · `study.examples[3].lv` · HIGH · Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième pers…
- **FR-A1-0491** `a1-sie-study-2` · `study.examples[4].lv` · HIGH · Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième pers…
- **FR-A1-0493** `a1-sollen` · `frMain` · MEDIUM · « Devrait » est le conditionnel ; l'infinitif allemand « sollen » correspond ici…
- **FR-A1-0496** `a1-über` · `frMain` · HIGH · « Fini » et « pour » ne correspondent pas aux sens principaux de « über » indiqu…
- **FR-A1-0498** `a1-um` · `frMain` · HIGH · « Heures » n'est pas une traduction française autonome de la préposition alleman…
- **FR-A1-0500** `a1-um` · `study.comparison[2].meaning` · MEDIUM · « Autour du temps » est une formulation non idiomatique pour exprimer une approx…
- **FR-A1-0501** `a1-um` · `study.comparison[3].meaning` · MEDIUM · Le français actuel exprime la provenance ou le sujet, pas le sens « pour / en fa…
- **FR-A1-0502** `a1-verstehen` · `frMain` · HIGH · « Pour comprendre » means « pour comprendre » and does not translate the infinit…
- **FR-A1-0503** `a1-verstehen` · `study.comparison[0].meaning` · HIGH · The comparison's primary meaning should be the infinitive « comprendre », not th…
- **FR-A1-0504** `a1-vom` · `frMain` · HIGH · « Vom » generally means « du/de la » or « de », whereas « depuis » expresses dur…
- **FR-A1-0505** `a1-vom` · `study.comparison[0].meaning` · MEDIUM · The Latvian source indicates origin from a person, not the recipient « pour qui …
- **FR-A1-0506** `a1-vor` · `frMain` · LOW · Two distinct learner-facing translations are separated by a bullet; owner decisi…
- **FR-A1-0508** `a1-was` · `frMain` · HIGH · German « was » means « quoi », not « qui »; « qui » translates wer.
- **FR-A1-0510** `a1-wenn` · `frMain` · LOW · Two distinct learner-facing translations are separated by a bullet; owner decisi…
- **FR-A1-0516** `a1-fernsehen` · `study.comparison[1].meaning` · LOW · Dans ce sens, « média » est au singulier; « médias » désigne plusieurs médias.

## Pilns findingu pārskats (visi findingi)

## FR-A1-0008
**Audit ID:** FR-A1-0008
**Card ID:** `a1-besuch`
**Field/path:** `entry[87].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Danke für deinen Besuch. – Merci pour ta visite.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0057
**Audit ID:** FR-A1-0057
**Card ID:** `a1-fussball-study`
**Field/path:** `entry[218].study.explanation[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** die Fußbälle désigne des ballons de football.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0058
**Audit ID:** FR-A1-0058
**Card ID:** `a1-fussball-study`
**Field/path:** `entry[218].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** die Fußbälle = ballons de football.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0059
**Audit ID:** FR-A1-0059
**Card ID:** `a1-gefallen-study`
**Field/path:** `entry[225].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das gefällt mir. – Cela me plaît.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0060
**Audit ID:** FR-A1-0060
**Card ID:** `a1-gefallen-study`
**Field/path:** `entry[225].study.comparison[1].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** mögen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0061
**Audit ID:** FR-A1-0061
**Card ID:** `a1-gefallen-study`
**Field/path:** `entry[225].study.tip[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** À retenir : Das gefällt mir.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0082
**Audit ID:** FR-A1-0082
**Card ID:** `a1-huebsch`
**Field/path:** `entry[288].study.explanation[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Idée principale : hübsch signifie joli ou agréable à regarder.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0083
**Audit ID:** FR-A1-0083
**Card ID:** `a1-huebsch`
**Field/path:** `entry[288].study.explanation[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hübsch décrit souvent l'apparence.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0084
**Audit ID:** FR-A1-0084
**Card ID:** `a1-huebsch`
**Field/path:** `entry[288].study.comparison[0].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hübsch
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0085
**Audit ID:** FR-A1-0085
**Card ID:** `a1-huebsch`
**Field/path:** `entry[288].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist ein hübsches Kleid. – C'est une jolie robe.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0086
**Audit ID:** FR-A1-0086
**Card ID:** `a1-huebsch`
**Field/path:** `entry[288].study.comparison[1].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** schön
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0087
**Audit ID:** FR-A1-0087
**Card ID:** `a1-huebsch`
**Field/path:** `entry[288].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Garten ist schön. – Le jardin est beau.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0088
**Audit ID:** FR-A1-0088
**Card ID:** `a1-huebsch`
**Field/path:** `entry[288].study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hübsch décrit surtout une jolie apparence ; nett décrit une personne aimable.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0089
**Audit ID:** FR-A1-0089
**Card ID:** `a1-huebsch`
**Field/path:** `entry[288].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hübsch n'est pas une traduction universelle de gentil.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0230
**Audit ID:** FR-A1-0230
**Card ID:** `a1-klein-study`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** pièce
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0231
**Audit ID:** FR-A1-0231
**Card ID:** `a1-klein-study`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** L'enfant
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0232
**Audit ID:** FR-A1-0232
**Card ID:** `a1-auch-study`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** viens
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0233
**Audit ID:** FR-A1-0233
**Card ID:** `a1-auch-study`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Elle
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0234
**Audit ID:** FR-A1-0234
**Card ID:** `a1-aufs`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Venez
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0235
**Audit ID:** FR-A1-0235
**Card ID:** `a1-baden`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** vais
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0236
**Audit ID:** FR-A1-0236
**Card ID:** `a1-besuch`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Missing sectionAccents present in LV
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Missing sectionAccents present in LV
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0237
**Audit ID:** FR-A1-0237
**Card ID:** `a1-besuchen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Missing sectionAccents present in LV
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Missing sectionAccents present in LV
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0238
**Audit ID:** FR-A1-0238
**Card ID:** `a1-bringen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Apportez
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0239
**Audit ID:** FR-A1-0239
**Card ID:** `a1-bringen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** ramènerai
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0240
**Audit ID:** FR-A1-0240
**Card ID:** `a1-da`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Venez
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0241
**Audit ID:** FR-A1-0241
**Card ID:** `a1-dieser`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** J'aime
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0248
**Audit ID:** FR-A1-0248
**Card ID:** `a1-fahren`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** ramènerai
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0249
**Audit ID:** FR-A1-0249
**Card ID:** `a1-finden`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Avez
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0250
**Audit ID:** FR-A1-0250
**Card ID:** `a1-finden`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Cela
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0255
**Audit ID:** FR-A1-0255
**Card ID:** `a1-gross-study`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** maison
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0259
**Audit ID:** FR-A1-0259
**Card ID:** `a1-hoch-study`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** montagne
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0261
**Audit ID:** FR-A1-0261
**Card ID:** `a1-huebsch`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Missing sectionAccents present in LV
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Missing sectionAccents present in LV
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0262
**Audit ID:** FR-A1-0262
**Card ID:** `a1-ihr`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Viens
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0263
**Audit ID:** FR-A1-0263
**Card ID:** `a1-ihr`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** habites
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0264
**Audit ID:** FR-A1-0264
**Card ID:** `a1-im`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** suis
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0278
**Audit ID:** FR-A1-0278
**Card ID:** `a1-mögen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Aimez
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0283
**Audit ID:** FR-A1-0283
**Card ID:** `a1-müssen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Vous
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0289
**Audit ID:** FR-A1-0289
**Card ID:** `a1-ob`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Vous
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0290
**Audit ID:** FR-A1-0290
**Card ID:** `a1-oder`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Vous
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0296
**Audit ID:** FR-A1-0296
**Card ID:** `a1-sich`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** prend
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0297
**Audit ID:** FR-A1-0297
**Card ID:** `a1-sie-study`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** cuisines
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0298
**Audit ID:** FR-A1-0298
**Card ID:** `a1-sie-study-2`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** cuisines
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0305
**Audit ID:** FR-A1-0305
**Card ID:** `a1-um`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** fait
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0309
**Audit ID:** FR-A1-0309
**Card ID:** `a1-verstehen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** peux
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0311
**Audit ID:** FR-A1-0311
**Card ID:** `a1-wer`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Qu'est
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0312
**Audit ID:** FR-A1-0312
**Card ID:** `a1-wer`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Lequel
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0313
**Audit ID:** FR-A1-0313
**Card ID:** `a1-werden`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** fait
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0314
**Audit ID:** FR-A1-0314
**Card ID:** `a1-werden`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** suis
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0315
**Audit ID:** FR-A1-0315
**Card ID:** `a1-wetter`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Quelle
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0316
**Audit ID:** FR-A1-0316
**Card ID:** `a1-wie`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Quel
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0319
**Audit ID:** FR-A1-0319
**Card ID:** `a1-urlaub`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** J'ai
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0320
**Audit ID:** FR-A1-0320
**Card ID:** `a1-uhr`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Appareil/heure
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0321
**Audit ID:** FR-A1-0321
**Card ID:** `a1-einmal`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** J'étais
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0322
**Audit ID:** FR-A1-0322
**Card ID:** `a1-klein`
**Field/path:** `study.sectionAccents.examples.lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** klein
**CURRENT:** pièce
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "pièce" nav atrodams sadaļā examples
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0323
**Audit ID:** FR-A1-0323
**Card ID:** `a1-klein`
**Field/path:** `study.sectionAccents.examples.lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** klein
**CURRENT:** L'enfant
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "L'enfant" nav atrodams sadaļā examples
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0324
**Audit ID:** FR-A1-0324
**Card ID:** `a1-an`
**Field/path:** `study.sectionAccents.tip.left`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** an
**CURRENT:** sienas
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "sienas" nav atrodams sadaļā tip
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0325
**Audit ID:** FR-A1-0325
**Card ID:** `a1-an`
**Field/path:** `study.sectionAccents.tip.left`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** an
**CURRENT:** loga
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "loga" nav atrodams sadaļā tip
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0326
**Audit ID:** FR-A1-0326
**Card ID:** `a1-an`
**Field/path:** `study.sectionAccents.tip.left`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** an
**CURRENT:** malas
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "malas" nav atrodams sadaļā tip
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0327
**Audit ID:** FR-A1-0327
**Card ID:** `a1-du-149`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** du
**LV MASTER reference:** tu
**CURRENT:** Toi
**PROPOSED_ET (audit ieteikums):** Tu
**Problēma:** « du » est un pronom sujet allemand ; « toi » est une forme tonique française, pas le sujet neutre attendu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0328
**Audit ID:** FR-A1-0328
**Card ID:** `a1-Filzstift-186`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Filzstift
**LV MASTER reference:** flomāsters
**CURRENT:** Stylo feutre
**PROPOSED_ET (audit ieteikums):** Stylo-feutre
**Problēma:** Le nom composé français s’écrit normalement avec un trait d’union : stylo-feutre.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0329
**Audit ID:** FR-A1-0329
**Card ID:** `a1-an`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** an
**LV MASTER reference:** pie
**CURRENT:** À • À • Présent
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** Le champ learner-facing contient plusieurs traductions séparées par des puces; un choix éditorial est nécessaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0332
**Audit ID:** FR-A1-0332
**Card ID:** `a1-ab`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** ab
**LV MASTER reference:** no kāda/kaut kā • izcelsme
**CURRENT:** De quelqu'un/quelque chose • Origine
**PROPOSED_ET (audit ieteikums):** De quelqu'un ou de quelque chose (origine)
**Problēma:** Le champ juxtapose plusieurs formulations avec une barre oblique et une puce.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0336
**Audit ID:** FR-A1-0336
**Card ID:** `a1-aus`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** aus
**LV MASTER reference:** no
**CURRENT:** De • Sortie
**PROPOSED_ET (audit ieteikums):** De
**Problēma:** Le champ learner-facing contient deux traductions distinctes séparées par une puce.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0338
**Audit ID:** FR-A1-0338
**Card ID:** `a1-aufs`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** aufs
**LV MASTER reference:** uz
**CURRENT:** Vers • Sur • Où ?
**PROPOSED_ET (audit ieteikums):** Vers
**Problēma:** Le champ learner-facing contient plusieurs traductions séparées par des puces.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0340
**Audit ID:** FR-A1-0340
**Card ID:** `a1-aufs`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** aufs
**LV MASTER reference:** Viņš uzlec zirgam mugurā.
**CURRENT:** Il monte à cheval.
**PROPOSED_ET (audit ieteikums):** Il monte sur le cheval.
**Problēma:** « Monter à cheval » signifie pratiquer l'équitation, pas monter sur le cheval comme le précise la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0341
**Audit ID:** FR-A1-0341
**Card ID:** `a1-baden`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** baden
**CURRENT:** Nager
**PROPOSED_ET (audit ieteikums):** Se baigner
**Problēma:** « Nager » correspond à schwimmen; baden signifie ici « se baigner ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0342
**Audit ID:** FR-A1-0342
**Card ID:** `a1-baden`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** baden
**LV MASTER reference:** iet peldēt
**CURRENT:** Allez nager
**PROPOSED_ET (audit ieteikums):** Aller nager
**Problēma:** Dans une liste de significations, l'infinitif « aller nager » est requis, non l'impératif « allez nager ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0343
**Audit ID:** FR-A1-0343
**Card ID:** `a1-bei`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** bei
**CURRENT:** À
**PROPOSED_ET (audit ieteikums):** Chez
**Problēma:** « À » est trop vague et ne rend pas le sens principal de bei, notamment la présence chez quelqu'un.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0344
**Audit ID:** FR-A1-0344
**Card ID:** `a1-bitte`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** bitte
**LV MASTER reference:** Lūdzu!
**CURRENT:** Une tasse de café, s'il vous plaît.
**PROPOSED_ET (audit ieteikums):** S'il vous plaît !
**Problēma:** La phrase française ajoute une tasse de café, absente de la source et du sens de « Lūdzu ! ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0346
**Audit ID:** FR-A1-0346
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** bleiben
**LV MASTER reference:** es eju mājās.
**CURRENT:** Je rentre à la maison
**PROPOSED_ET (audit ieteikums):** Je reste à la maison.
**Problēma:** « Je rentre » signifie que je vais ou retourne chez moi, contrairement à bleiben (« rester »).
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Rester
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0348
**Audit ID:** FR-A1-0348
**Card ID:** `a1-da`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** da
**LV MASTER reference:** es biju tur.
**CURRENT:** J'étais là
**PROPOSED_ET (audit ieteikums):** J'étais là.
**Problēma:** Il manque le point final à cette phrase française complète.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0351
**Audit ID:** FR-A1-0351
**Card ID:** `a1-dass`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** dass
**LV MASTER reference:** jo • tāpēc ka
**CURRENT:** Parce que • Parce que
**PROPOSED_ET (audit ieteikums):** Parce que
**Problēma:** Le champ contient deux éléments séparés par une puce, mais la traduction française est dupliquée.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0352
**Audit ID:** FR-A1-0352
**Card ID:** `a1-ein`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** ein
**LV MASTER reference:** nenoteiktais artikuls
**CURRENT:** Article indéfini • Un • Quelqu'un
**PROPOSED_ET (audit ieteikums):** Article indéfini
**Problēma:** Le champ contient plusieurs traductions distinctes et « Quelqu'un » ne traduit pas ein.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0356
**Audit ID:** FR-A1-0356
**Card ID:** `a1-eis`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Eis
**LV MASTER reference:** ledus / saldējums
**CURRENT:** Glace / glace
**PROPOSED_ET (audit ieteikums):** Glace
**Problēma:** Le champ contient deux traductions distinctes séparées par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0357
**Audit ID:** FR-A1-0357
**Card ID:** `a1-eis`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Eis
**LV MASTER reference:** sniegs
**CURRENT:** Il va neiger
**PROPOSED_ET (audit ieteikums):** Neige
**Problēma:** « Il va neiger » signifie qu'il neigera, tandis que sniegs signifie « neige » comme nom.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0360
**Audit ID:** FR-A1-0360
**Card ID:** `a1-erst`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** erst
**LV MASTER reference:** vispirms • tikai
**CURRENT:** Premier • Seulement
**PROPOSED_ET (audit ieteikums):** D'abord • Seulement
**Problēma:** « Premier » ne fonctionne pas comme traduction adverbiale de vispirms.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0361
**Audit ID:** FR-A1-0361
**Card ID:** `a1-erst`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** erst
**LV MASTER reference:** vispirms • sākumā
**CURRENT:** Premièrement • Au début
**PROPOSED_ET (audit ieteikums):** D'abord • Au début
**Problēma:** « Premièrement » traduit une énumération, pas le sens temporel de vispirms ici.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0362
**Audit ID:** FR-A1-0362
**Card ID:** `a1-es`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** es
**LV MASTER reference:** tas
**CURRENT:** Il • Il • Forme impersonnelle
**PROPOSED_ET (audit ieteikums):** Il • Forme impersonnelle
**Problēma:** Le champ répète « Il » et présente plusieurs traductions séparées par des puces.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0366
**Audit ID:** FR-A1-0366
**Card ID:** `a1-etwas`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** etwas
**LV MASTER reference:** vai tev ir nedaudz laika?
**CURRENT:** As-tu du temps
**PROPOSED_ET (audit ieteikums):** As-tu un peu de temps ?
**Problēma:** La traduction omet le sens quantitatif de nedaudz et la ponctuation interrogative.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0367
**Audit ID:** FR-A1-0367
**Card ID:** `a1-etwas`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** etwas
**LV MASTER reference:** pakāpe → nedaudz
**CURRENT:** Rappelez-vous : chose → quelque chose • Degré → légèrement.
**PROPOSED_ET (audit ieteikums):** Rappelez-vous : chose → quelque chose • Degré → un peu.
**Problēma:** « Légèrement » signifie slightly; « un peu » correspond directement au sens de nedaudz.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0368
**Audit ID:** FR-A1-0368
**Card ID:** `a1-etwas`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** etwas
**LV MASTER reference:** kaut kas / nedaudz
**CURRENT:** Quelque chose / un peu
**PROPOSED_ET (audit ieteikums):** Quelque chose
**Problēma:** Le champ contient deux traductions distinctes séparées par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0372
**Audit ID:** FR-A1-0372
**Card ID:** `a1-fahren`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** fahren
**LV MASTER reference:** braukt
**CURRENT:** Conduire • Diriger • Emporter
**PROPOSED_ET (audit ieteikums):** Conduire
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par des puces.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0374
**Audit ID:** FR-A1-0374
**Card ID:** `a1-fahren`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** fahren
**LV MASTER reference:** braukt ar transportu
**CURRENT:** Prendre le transport
**PROPOSED_ET (audit ieteikums):** Voyager en véhicule
**Problēma:** « Prendre le transport » est peu naturel en français pour exprimer le déplacement en véhicule.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0375
**Audit ID:** FR-A1-0375
**Card ID:** `a1-fahren`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** fahren
**LV MASTER reference:** iet kājām
**CURRENT:** Allez à pied
**PROPOSED_ET (audit ieteikums):** Aller à pied
**Problēma:** L'impératif « Allez » ne convient pas à une entrée lexicale glossée par un infinitif.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0376
**Audit ID:** FR-A1-0376
**Card ID:** `a1-fahren`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** fahren
**LV MASTER reference:** skriet / iet
**CURRENT:** Courir / partir
**PROPOSED_ET (audit ieteikums):** Courir / marcher
**Problēma:** « Partir » ne traduit pas iet dans le sens de marcher; le gloss doit rester cohérent avec la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0377
**Audit ID:** FR-A1-0377
**Card ID:** `a1-fahren`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** fahren
**LV MASTER reference:** atnest / nogādāt
**CURRENT:** Apporter/livrer
**PROPOSED_ET (audit ieteikums):** Emmener
**Problēma:** Fahren ne signifie pas généralement « apporter/livrer »; pour des personnes, le sens est « emmener ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0378
**Audit ID:** FR-A1-0378
**Card ID:** `a1-finden`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** finden
**LV MASTER reference:** atrast
**CURRENT:** Trouver • Considérer
**PROPOSED_ET (audit ieteikums):** Trouver
**Problēma:** Le champ contient plusieurs traductions distinctes séparées par une puce.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0380
**Audit ID:** FR-A1-0380
**Card ID:** `a1-finden`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** finden
**LV MASTER reference:** atrast / uzskatīt
**CURRENT:** Trouver / considérer
**PROPOSED_ET (audit ieteikums):** Trouver / penser
**Problēma:** Le champ contient deux traductions distinctes séparées par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0384
**Audit ID:** FR-A1-0384
**Card ID:** `a1-fuer`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** für
**LV MASTER reference:** cik tu maksā par auto?
**CURRENT:** Combien payez-vous pour une voiture ?
**PROPOSED_ET (audit ieteikums):** Combien paies-tu pour une voiture ?
**Problēma:** Le français emploie vous, alors que la source utilise le singulier informel tu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0387
**Audit ID:** FR-A1-0387
**Card ID:** `a1-geben`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** geben
**LV MASTER reference:** saņemt / dabūt
**CURRENT:** Recevoir/obtenir
**PROPOSED_ET (audit ieteikums):** Recevoir ou obtenir
**Problēma:** Deux traductions distinctes sont réunies dans un champ learner-facing avec une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0388
**Audit ID:** FR-A1-0388
**Card ID:** `a1-geben`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** geben
**LV MASTER reference:** atnest / nogādāt
**CURRENT:** Apporter/livrer
**PROPOSED_ET (audit ieteikums):** Apporter ou livrer
**Problēma:** Deux traductions distinctes sont réunies dans un champ learner-facing avec une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0393
**Audit ID:** FR-A1-0393
**Card ID:** `a1-hand-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Hand
**LV MASTER reference:** man sāp roka.
**CURRENT:** J'ai mal au bras.
**PROPOSED_ET (audit ieteikums):** J'ai mal à la main.
**Problēma:** Le français traduit bras, mais le mot allemand cible Hand signifie main.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0400
**Audit ID:** FR-A1-0400
**Card ID:** `a1-ins`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ins
**LV MASTER reference:** nāc mājā!
**CURRENT:** Viens à la maison !
**PROPOSED_ET (audit ieteikums):** Entre dans la maison !
**Problēma:** Ins Haus indique l'entrée dans la maison, et non simplement la destination « à la maison ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0402
**Audit ID:** FR-A1-0402
**Card ID:** `a1-kennen-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** kennen
**LV MASTER reference:** pazīt
**CURRENT:** Savoir
**PROPOSED_ET (audit ieteikums):** Connaître
**Problēma:** Kennen se traduit par « connaître », tandis que « savoir » correspond à wissen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0403
**Audit ID:** FR-A1-0403
**Card ID:** `a1-kennen-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** kennen
**LV MASTER reference:** kur jūs iepazināties?
**CURRENT:** Où vous êtes-vous rencontré ?
**PROPOSED_ET (audit ieteikums):** Où vous êtes-vous rencontrés ?
**Problēma:** Avec « vous » sujet pluriel, le participe passé pronominal doit s'accorder au pluriel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0405
**Audit ID:** FR-A1-0405
**Card ID:** `a1-wissen-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** wissen
**LV MASTER reference:** no kurienes jūs to zināt?
**CURRENT:** Comment tu sais ça ?
**PROPOSED_ET (audit ieteikums):** Comment le savez-vous ?
**Problēma:** Le français emploie « tu » alors que la source utilise la forme formelle/plurielle « vous ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0406
**Audit ID:** FR-A1-0406
**Card ID:** `a1-können`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** können
**CURRENT:** Être capable de • Savoir
**Problēma:** Deux traductions distinctes sont présentées dans le champ destiné à l'apprenant; décision éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0408
**Audit ID:** FR-A1-0408
**Card ID:** `a1-können`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** können
**LV MASTER reference:** varēt / prast
**CURRENT:** Pouvoir/savoir
**Problēma:** Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0409
**Audit ID:** FR-A1-0409
**Card ID:** `a1-kosten`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** kosten
**CURRENT:** Payer
**PROPOSED_ET (audit ieteikums):** Coûter
**Problēma:** Kosten signifie « coûter », tandis que « payer » traduit zahlen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0417
**Audit ID:** FR-A1-0417
**Card ID:** `a1-laden-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Laden
**CURRENT:** Boutique
**PROPOSED_ET (audit ieteikums):** Magasin
**Problēma:** « Boutique » est plus spécifique et ne correspond pas exactement au terme allemand général Laden.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0418
**Audit ID:** FR-A1-0418
**Card ID:** `a1-land`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Land
**CURRENT:** Pays • Terrain
**Problēma:** Deux traductions distinctes sont présentées dans le champ destiné à l'apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0421
**Audit ID:** FR-A1-0421
**Card ID:** `a1-land`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Land
**LV MASTER reference:** zeme / planēta
**CURRENT:** Terre / planète
**Problēma:** Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0422
**Audit ID:** FR-A1-0422
**Card ID:** `a1-lang`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** lang
**CURRENT:** Longue • Longue
**PROPOSED_ET (audit ieteikums):** Long • Longue
**Problēma:** La forme masculine « long » est requise pour le sens de « long » sans nom féminin exprimé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0424
**Audit ID:** FR-A1-0424
**Card ID:** `a1-lassen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** lassen
**CURRENT:** Partir • Laisser
**PROPOSED_ET (audit ieteikums):** Laisser • Permettre
**Problēma:** « Partir » traduit partir; lassen signifie ici laisser ou permettre.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0427
**Audit ID:** FR-A1-0427
**Card ID:** `a1-laufen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** laufen
**CURRENT:** Exécuter • Utiliser
**PROPOSED_ET (audit ieteikums):** Courir • Fonctionner
**Problēma:** Laufen signifie « courir » ou « fonctionner »; « exécuter » et « utiliser » sont inadaptés ici.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0430
**Audit ID:** FR-A1-0430
**Card ID:** `a1-laut-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** STRUCTURE
**DE (read-only):** Laut
**LV MASTER reference:** mūzika ir skaļa.
**CURRENT:** La musique est forte.
**Problēma:** L'exemple décrit l'adjectif « laut » et non le nom « Laut » de cette carte.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Le son
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0432
**Audit ID:** FR-A1-0432
**Card ID:** `a1-laut-study`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** STRUCTURE
**DE (read-only):** Laut
**LV MASTER reference:** tas ir ļoti skaļi.
**CURRENT:** C'est très bruyant.
**Problēma:** L'exemple décrit l'adjectif « laut » et non le nom « Laut » de cette carte.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Le son
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0433
**Audit ID:** FR-A1-0433
**Card ID:** `a1-legen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** STRUCTURE
**DE (read-only):** legen
**LV MASTER reference:** grāmata atrodas uz galda.
**CURRENT:** Le livre est sur la table.
**Problēma:** L'exemple décrit liegen, être situé, et non legen, poser ou déposer.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0434
**Audit ID:** FR-A1-0434
**Card ID:** `a1-leise-study`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** leise
**LV MASTER reference:** Lūdzu, esi kluss.
**CURRENT:** S'il vous plaît, restez silencieux.
**PROPOSED_ET (audit ieteikums):** S'il te plaît, reste silencieux.
**Problēma:** Le tutoiement singulier de la source exige « te » et l'impératif singulier « reste ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0435
**Audit ID:** FR-A1-0435
**Card ID:** `a1-liegen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** liegen
**CURRENT:** Être • Dormir
**PROPOSED_ET (audit ieteikums):** Être allongé • Être situé
**Problēma:** Liegen signifie être allongé ou situé, pas simplement être ou dormir.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0437
**Audit ID:** FR-A1-0437
**Card ID:** `a1-liegen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** STRUCTURE
**DE (read-only):** liegen
**LV MASTER reference:** es nolieku grāmatu uz galda.
**CURRENT:** J'ai posé le livre sur la table.
**Problēma:** L'exemple décrit legen, poser, et non liegen, être situé ou être allongé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0439
**Audit ID:** FR-A1-0439
**Card ID:** `a1-machen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** machen
**LV MASTER reference:** darīt • taisīt
**CURRENT:** Faire • Faire
**PROPOSED_ET (audit ieteikums):** Faire
**Problēma:** The learner-facing field contains duplicated translations separated by •; the intended distinction requires an owner decision.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0441
**Audit ID:** FR-A1-0441
**Card ID:** `a1-mal`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Mal
**LV MASTER reference:** reize
**CURRENT:** Temps
**PROPOSED_ET (audit ieteikums):** Fois
**Problēma:** Mal means 'fois' when used as the noun for an occurrence, not 'temps' in this vocabulary context.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0443
**Audit ID:** FR-A1-0443
**Card ID:** `a1-morgen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** morgen
**LV MASTER reference:** līdz rīt!
**CURRENT:** A demain !
**PROPOSED_ET (audit ieteikums):** À demain !
**Problēma:** The preposition à requires a grave accent in the fixed expression À demain.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0444
**Audit ID:** FR-A1-0444
**Card ID:** `a1-müssen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** müssen
**LV MASTER reference:** vajadzēt
**CURRENT:** Avoir besoin
**PROPOSED_ET (audit ieteikums):** Devoir
**Problēma:** Müssen expresses obligation or necessity and translates as devoir, not avoir besoin.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0445
**Audit ID:** FR-A1-0445
**Card ID:** `a1-nach`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nach
**LV MASTER reference:** uz • pēc
**CURRENT:** À • Après
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** The learner-facing field contains multiple translations separated by •; the intended sense presentation requires an owner decision.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0447
**Audit ID:** FR-A1-0447
**Card ID:** `a1-natuerlich`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** natürlich
**LV MASTER reference:** protams • dabisks
**CURRENT:** Bien sûr • Naturel
**PROPOSED_ET (audit ieteikums):** Bien sûr
**Problēma:** The learner-facing field contains multiple translations separated by •; the intended sense presentation requires an owner decision.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0449
**Audit ID:** FR-A1-0449
**Card ID:** `a1-natuerlich`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** natürlich
**LV MASTER reference:** tas ir pilnīgi dabiski/normāli.
**CURRENT:** C'est tout à fait naturel/normal.
**PROPOSED_ET (audit ieteikums):** C'est tout à fait naturel.
**Problēma:** The learner-facing field contains two alternatives separated by /; the intended translation requires an owner decision.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0450
**Audit ID:** FR-A1-0450
**Card ID:** `a1-nehmen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nehmen
**LV MASTER reference:** ņemt • paņemt
**CURRENT:** Prendre • Prendre
**PROPOSED_ET (audit ieteikums):** Prendre
**Problēma:** The learner-facing field contains duplicated translations separated by •; the intended distinction requires an owner decision.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0452
**Audit ID:** FR-A1-0452
**Card ID:** `a1-noch-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** noch
**LV MASTER reference:** es vēl esmu mājās.
**CURRENT:** Je suis toujours à la maison
**PROPOSED_ET (audit ieteikums):** Je suis toujours à la maison.
**Problēma:** La phrase doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Encore
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0453
**Audit ID:** FR-A1-0453
**Card ID:** `a1-noch-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** noch
**LV MASTER reference:** vai tu vēl esi šeit?
**CURRENT:** Es-tu toujours là
**PROPOSED_ET (audit ieteikums):** Es-tu toujours là ?
**Problēma:** Il manque le point d'interrogation final.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Encore
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0455
**Audit ID:** FR-A1-0455
**Card ID:** `a1-ob`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** ob
**LV MASTER reference:** vai
**CURRENT:** Ou
**PROPOSED_ET (audit ieteikums):** Si
**Problēma:** Ob signifie « si » dans une proposition interrogative indirecte, et non « ou ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0456
**Audit ID:** FR-A1-0456
**Card ID:** `a1-ob`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ob
**LV MASTER reference:** ja / kad
**CURRENT:** Si/quand
**PROPOSED_ET (audit ieteikums):** Si
**Problēma:** Ob correspond à « si » et n'exprime pas « quand ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0458
**Audit ID:** FR-A1-0458
**Card ID:** `a1-oder`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** oder
**LV MASTER reference:** vai izvēlē
**CURRENT:** Ou choisissez
**PROPOSED_ET (audit ieteikums):** Ou dans un choix
**Problēma:** « Ou choisissez » change le sens vers un impératif et ne traduit pas le libellé comparatif.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0459
**Audit ID:** FR-A1-0459
**Card ID:** `a1-passen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** passen
**LV MASTER reference:** derēt • piestāvēt
**CURRENT:** Ajustement • Ajustement
**PROPOSED_ET (audit ieteikums):** Aller • Aller à quelqu'un
**Problēma:** « Ajustement » est un nom et ne traduit pas le verbe allemand passen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0464
**Audit ID:** FR-A1-0464
**Card ID:** `a1-probieren`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** probieren
**LV MASTER reference:** vai es varu pielaikot jaku?
**CURRENT:** Puis-je essayer la veste
**PROPOSED_ET (audit ieteikums):** Puis-je essayer la veste ?
**Problēma:** Il manque le point d'interrogation final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0465
**Audit ID:** FR-A1-0465
**Card ID:** `a1-probieren`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** probieren
**LV MASTER reference:** izmēģināt / nogaršot
**CURRENT:** Essayer / goûter
**PROPOSED_ET (audit ieteikums):** Goûter
**Problēma:** Le séparateur « / » présente plusieurs formulations dans un champ destiné à l'apprenant; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0466
**Audit ID:** FR-A1-0466
**Card ID:** `a1-schau​en-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** schauen
**LV MASTER reference:** skatīties
**CURRENT:** Montre
**PROPOSED_ET (audit ieteikums):** Regarder
**Problēma:** « Montre » signifie « montre-moi » ou « montre » comme nom; le verbe allemand signifie « regarder ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0467
**Audit ID:** FR-A1-0467
**Card ID:** `a1-schauen-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** schauen
**LV MASTER reference:** es skatos televizoru.
**CURRENT:** Je regarde la télé
**PROPOSED_ET (audit ieteikums):** Je regarde la télé.
**Problēma:** La phrase doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0468
**Audit ID:** FR-A1-0468
**Card ID:** `a1-schon-study`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** schon
**LV MASTER reference:** es jau esmu mājās.
**CURRENT:** Je suis déjà à la maison
**PROPOSED_ET (audit ieteikums):** Je suis déjà à la maison.
**Problēma:** La phrase doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Déjà
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0469
**Audit ID:** FR-A1-0469
**Card ID:** `a1-schwimmen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** schwimmen
**LV MASTER reference:** man patīk peldēt.
**CURRENT:** J'aime nager
**PROPOSED_ET (audit ieteikums):** J'aime nager.
**Problēma:** La phrase doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0470
**Audit ID:** FR-A1-0470
**Card ID:** `a1-schwimmen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** schwimmen
**LV MASTER reference:** es eju peldēties.
**CURRENT:** Je vais nager
**PROPOSED_ET (audit ieteikums):** Je vais nager.
**Problēma:** La phrase doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0471
**Audit ID:** FR-A1-0471
**Card ID:** `a1-schwimmen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** schwimmen
**LV MASTER reference:** peldēt kā kustība vai sports
**CURRENT:** Nager comme mouvement ou sport
**PROPOSED_ET (audit ieteikums):** Nager
**Problēma:** Le champ contient plusieurs éléments explicatifs au lieu d'une formulation d'apprentissage concise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0474
**Audit ID:** FR-A1-0474
**Card ID:** `a1-sein`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sein
**LV MASTER reference:** viņi / viņas
**CURRENT:** Ils/elle
**PROPOSED_ET (audit ieteikums):** Ils / elles
**Problēma:** « Elle » est au singulier et ne correspond pas à la source, qui indique deux formes plurielles.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0475
**Audit ID:** FR-A1-0475
**Card ID:** `a1-sein`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sein
**LV MASTER reference:** viņi / viņas
**CURRENT:** Ils/elle
**PROPOSED_ET (audit ieteikums):** Ils / elles
**Problēma:** « Elle » est au singulier et ne correspond pas à la source, qui indique deux formes plurielles.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0476
**Audit ID:** FR-A1-0476
**Card ID:** `a1-seite`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Seite
**LV MASTER reference:** lappuse • puse
**CURRENT:** Page • Côté
**PROPOSED_ET (audit ieteikums):** Page
**Problēma:** Deux traductions distinctes sont présentées avec « • » ; une décision éditoriale est nécessaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0478
**Audit ID:** FR-A1-0478
**Card ID:** `a1-sich`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sich
**LV MASTER reference:** sevi • sev
**CURRENT:** Vous-même • Pour vous-même
**PROPOSED_ET (audit ieteikums):** Soi-même • À soi-même
**Problēma:** « Sich » est un pronom réfléchi général, pas la forme de politesse « vous-même ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0480
**Audit ID:** FR-A1-0480
**Card ID:** `a1-sich`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sich
**LV MASTER reference:** viņa priecājas.
**CURRENT:** Elle est heureuse.
**PROPOSED_ET (audit ieteikums):** Elle se réjouit.
**Problēma:** Le verbe français actuel exprime un état, tandis que la phrase source exprime une action de se réjouir.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0481
**Audit ID:** FR-A1-0481
**Card ID:** `a1-sicher`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** sicher
**LV MASTER reference:** drošs • noteikti
**CURRENT:** Sûr • Certainement
**PROPOSED_ET (audit ieteikums):** Sûr
**Problēma:** Deux traductions distinctes sont présentées avec « • » ; une décision éditoriale est nécessaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0483
**Audit ID:** FR-A1-0483
**Card ID:** `a1-sie-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sie
**LV MASTER reference:** viņi / viņas
**CURRENT:** Ils/elle
**PROPOSED_ET (audit ieteikums):** Elle / Ils / Elles
**Problēma:** La forme allemande « sie » peut être « elle », « ils » ou « elles » ; la forme féminine plurielle manque.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0486
**Audit ID:** FR-A1-0486
**Card ID:** `a1-sie-study-2`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Sie
**LV MASTER reference:** jūs
**CURRENT:** Toi
**PROPOSED_ET (audit ieteikums):** Vous
**Problēma:** Le pronom allemand formel « Sie » se traduit par « vous », pas par le tutoiement « toi ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0487
**Audit ID:** FR-A1-0487
**Card ID:** `a1-sie-study-2`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Sie
**LV MASTER reference:** Jūs gatavojat, lūdzu.
**CURRENT:** Cuisinez, s'il vous plaît.
**PROPOSED_ET (audit ieteikums):** Vous cuisinez, s'il vous plaît.
**Problēma:** La phrase source est déclarative ; l'impératif français change le sens.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0488
**Audit ID:** FR-A1-0488
**Card ID:** `a1-sie-study-2`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** COMPARISON
**DE (read-only):** Sie
**LV MASTER reference:** viņa gatavo.
**CURRENT:** Elle cuisine.
**PROPOSED_ET (audit ieteikums):** Vous cuisinez.
**Problēma:** Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième personne « elle ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0489
**Audit ID:** FR-A1-0489
**Card ID:** `a1-sie-study-2`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** COMPARISON
**DE (read-only):** Sie
**LV MASTER reference:** viņa ēd.
**CURRENT:** Elle mange
**PROPOSED_ET (audit ieteikums):** Vous mangez.
**Problēma:** Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième personne « elle ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0490
**Audit ID:** FR-A1-0490
**Card ID:** `a1-sie-study-2`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** COMPARISON
**DE (read-only):** Sie
**LV MASTER reference:** viņi gatavo.
**CURRENT:** Ils cuisinent.
**PROPOSED_ET (audit ieteikums):** Vous cuisinez.
**Problēma:** Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième personne « ils ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0491
**Audit ID:** FR-A1-0491
**Card ID:** `a1-sie-study-2`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** COMPARISON
**DE (read-only):** Sie
**LV MASTER reference:** viņi spēlē futbolu.
**CURRENT:** Ils jouent au football.
**PROPOSED_ET (audit ieteikums):** Vous jouez au football.
**Problēma:** Avec « Sie » majuscule, l'allemand indique le vouvoiement, non la troisième personne « ils ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0493
**Audit ID:** FR-A1-0493
**Card ID:** `a1-sollen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sollen
**LV MASTER reference:** vajadzētu
**CURRENT:** Devrait
**PROPOSED_ET (audit ieteikums):** Devoir
**Problēma:** « Devrait » est le conditionnel ; l'infinitif allemand « sollen » correspond ici à « devoir ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0496
**Audit ID:** FR-A1-0496
**Card ID:** `a1-über`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** über
**LV MASTER reference:** virs • par
**CURRENT:** Fini • Pour
**PROPOSED_ET (audit ieteikums):** Au-dessus • À propos de
**Problēma:** « Fini » et « pour » ne correspondent pas aux sens principaux de « über » indiqués par la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0498
**Audit ID:** FR-A1-0498
**Card ID:** `a1-um`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** um
**LV MASTER reference:** ap • pulksten
**CURRENT:** Vers • Heures
**PROPOSED_ET (audit ieteikums):** Autour • À (pour l'heure)
**Problēma:** « Heures » n'est pas une traduction française autonome de la préposition allemande « um ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0500
**Audit ID:** FR-A1-0500
**Card ID:** `a1-um`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** um
**LV MASTER reference:** ap laiku / pret
**CURRENT:** Autour du temps / contre
**PROPOSED_ET (audit ieteikums):** Vers cette heure / contre
**Problēma:** « Autour du temps » est une formulation non idiomatique pour exprimer une approximation temporelle.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0501
**Audit ID:** FR-A1-0501
**Card ID:** `a1-um`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** um
**LV MASTER reference:** priekš / par labu
**CURRENT:** De/à propos d'une source
**PROPOSED_ET (audit ieteikums):** Pour / en faveur de
**Problēma:** Le français actuel exprime la provenance ou le sujet, pas le sens « pour / en faveur de ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0502
**Audit ID:** FR-A1-0502
**Card ID:** `a1-verstehen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** verstehen
**LV MASTER reference:** saprast
**CURRENT:** Pour comprendre
**PROPOSED_ET (audit ieteikums):** Comprendre
**Problēma:** « Pour comprendre » means « pour comprendre » and does not translate the infinitive verstehen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0503
**Audit ID:** FR-A1-0503
**Card ID:** `a1-verstehen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** verstehen
**LV MASTER reference:** saprast
**CURRENT:** Pour comprendre
**PROPOSED_ET (audit ieteikums):** Comprendre
**Problēma:** The comparison's primary meaning should be the infinitive « comprendre », not the purpose phrase « pour comprendre ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0504
**Audit ID:** FR-A1-0504
**Card ID:** `a1-vom`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** vom
**LV MASTER reference:** no
**CURRENT:** Depuis
**PROPOSED_ET (audit ieteikums):** Du / de la
**Problēma:** « Vom » generally means « du/de la » or « de », whereas « depuis » expresses duration or a starting point in time.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0505
**Audit ID:** FR-A1-0505
**Card ID:** `a1-vom`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** vom
**LV MASTER reference:** no (konkrēta lieta, kam?)
**CURRENT:** De (une chose précise, pour qui ?)
**PROPOSED_ET (audit ieteikums):** De (une chose précise, de qui ?)
**Problēma:** The Latvian source indicates origin from a person, not the recipient « pour qui ? ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0506
**Audit ID:** FR-A1-0506
**Card ID:** `a1-vor`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** vor
**LV MASTER reference:** pirms • priekšā
**CURRENT:** Avant • Devant
**PROPOSED_ET (audit ieteikums):** Avant et devant
**Problēma:** Two distinct learner-facing translations are separated by a bullet; owner decision is required on the intended format.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0508
**Audit ID:** FR-A1-0508
**Card ID:** `a1-was`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** was
**LV MASTER reference:** kas • ko
**CURRENT:** Qui • Quoi
**PROPOSED_ET (audit ieteikums):** Quoi
**Problēma:** German « was » means « quoi », not « qui »; « qui » translates wer.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0510
**Audit ID:** FR-A1-0510
**Card ID:** `a1-wenn`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** wenn
**LV MASTER reference:** ja • kad
**CURRENT:** Si • Quand
**PROPOSED_ET (audit ieteikums):** Si ou quand
**Problēma:** Two distinct learner-facing translations are separated by a bullet; owner decision is required on the intended format.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0516
**Audit ID:** FR-A1-0516
**Card ID:** `a1-fernsehen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** fernsehen
**LV MASTER reference:** televīzija (medijs)
**CURRENT:** Télévision (médias)
**PROPOSED_ET (audit ieteikums):** Télévision (média)
**Problēma:** Dans ce sens, « média » est au singulier; « médias » désigne plusieurs médias.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---