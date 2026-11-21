# FR–DE A1 — OWNER VIEW (grupa 9, 401–412)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#603](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/603)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [fr-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [fr-a1-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view.md) |
| Decisions (šī grupa) | [fr-a1-owner-decisions-group09.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group09.md) |
| Decisions (viss) | [fr-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions.md) |

Avots: [fr-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-full-audit.md)

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