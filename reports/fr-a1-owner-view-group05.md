# FR–DE A1 — OWNER VIEW (grupa 5, 201–250)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#603](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/603)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [fr-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [fr-a1-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view.md) |
| Decisions (šī grupa) | [fr-a1-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group05.md) |
| Decisions (viss) | [fr-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions.md) |

Avots: [fr-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-full-audit.md)

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