# ET–DE A1 — OWNER VIEW (grupa 1, 1–16)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#603](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/603)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [et-a1-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-view.md) |
| Decisions (šī grupa) | [et-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-decisions-group01.md) |
| Decisions (viss) | [et-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-decisions.md) |

Avots: [et-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-full-audit.md)

## ET-A1-0001
**Audit ID:** ET-A1-0001
**Card ID:** `a1-besuch`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Besuch
**LV MASTER reference:** Ārsts dodas vizītē.
**CURRENT:** Arst teeb visiidi.
**PROPOSED_ET (audit ieteikums):** Arst läheb visiidile.
**PR603 audit ID:** ET-A1-0002
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Arst läheb visiidile” vastab loomulikumalt tähendusele „läheb visiidile”; praegune väljend võib tähendada visiidi tegemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0002
**Audit ID:** ET-A1-0002
**Card ID:** `a1-besuchen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** besuchen
**LV MASTER reference:** Es apciemoju savus vecvecākus.
**CURRENT:** Ma külastan oma vanavanemaid.
**PROPOSED_ET (audit ieteikums):** Ma külastasin oma vanavanemaid.
**PR603 audit ID:** ET-A1-0003
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Läti lähte lause on minevikus („apciemoju”), kuid praegune eestikeelne verb on olevikus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0003
**Audit ID:** ET-A1-0003
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** es palieku mājās.
**CURRENT:** ma jään koju.
**PROPOSED_ET (audit ieteikums):** Ma jään koju.
**PR603 audit ID:** ET-A1-0004
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Täislause peab algama suure tähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0004
**Audit ID:** ET-A1-0004
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** paliec šeit!
**CURRENT:** jää siia!
**PROPOSED_ET (audit ieteikums):** Jää siia!
**PR603 audit ID:** ET-A1-0005
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Täislause peab algama suure tähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0005
**Audit ID:** ET-A1-0005
**Card ID:** `a1-halten`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** halten
**LV MASTER reference:** domāt
**CURRENT:** mõtlema
**PROPOSED_ET (audit ieteikums):** pidama
**PR603 audit ID:** ET-A1-0007
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Halten in this sense means to consider/regard, as in „etwas für richtig halten“, not simply to think.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0006
**Audit ID:** ET-A1-0006
**Card ID:** `a1-hand-study`
**Field/path:** `study.translation`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Hand
**LV MASTER reference:** plauksta
**CURRENT:** käsi (kämmal)
**PROPOSED_ET (audit ieteikums):** käsi
**PR603 audit ID:** ET-A1-0008
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Hand means „käsi“; „kämmal“ means palm and unnecessarily narrows the German meaning.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0007
**Audit ID:** ET-A1-0007
**Card ID:** `a1-im`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** im
**LV MASTER reference:** iekšā / uz (bez artikula)
**CURRENT:** sees / sisse (ilma artiklita)
**PROPOSED_ET (audit ieteikums):** sees / sisse (kindla artikliga)
**PR603 audit ID:** ET-A1-0009
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** im on in + dem, seega kasutatakse seda koos kindla artikliga, mitte ilma artiklita.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0008
**Audit ID:** ET-A1-0008
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** ins
**LV MASTER reference:** iekšā / uz iekšu (ar patstāvīgu artikulu)
**CURRENT:** sees / sisse (eraldi artikliga)
**PROPOSED_ET (audit ieteikums):** sees / sisse (kokkusulanud kindla artikliga)
**PR603 audit ID:** ET-A1-0010
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** ins on in + das kokkusulanud vorm; artikkel ei esine eraldi sõnana.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0009
**Audit ID:** ET-A1-0009
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** nehmen
**LV MASTER reference:** es braucu ar autobusu.
**CURRENT:** ma sõidan bussiga.
**PROPOSED_ET (audit ieteikums):** Ma võtan bussi.
**PR603 audit ID:** ET-A1-0025
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Näide väljendab sõitmist, mitte saksa verbi nehmen tähendust „võtma“ ehk bussi võtma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0010
**Audit ID:** ET-A1-0010
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** nehmen
**LV MASTER reference:** es tev atnesu grāmatu.
**CURRENT:** ma toon sulle raamatu.
**PROPOSED_ET (audit ieteikums):** Ma võtan raamatu.
**PR603 audit ID:** ET-A1-0026
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Toon“ tähendab bringen ehk tooma; nehmen tähendab siin võtma, mitte kellelegi midagi tooma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0011
**Audit ID:** ET-A1-0011
**Card ID:** `a1-sollen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sollen
**LV MASTER reference:** tev jāatnāk.
**CURRENT:** sa pead tulema.
**PROPOSED_ET (audit ieteikums):** sa peaksid tulema.
**PR603 audit ID:** ET-A1-0027
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Näide kasutab kohustust väljendavat „pead“, kuid kaardi tähendus „peaks“ vajab siin vormi „peaksid“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0012
**Audit ID:** ET-A1-0012
**Card ID:** `a1-sollen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sollen
**LV MASTER reference:** man jāpaliek mājās.
**CURRENT:** ma pean koju jääma.
**PROPOSED_ET (audit ieteikums):** ma peaksin koju jääma.
**PR603 audit ID:** ET-A1-0028
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Ma pean“ tähendab peab/must; see ei ühti kaardi „sollen“ tähenduseks antud vormiga „peaksin“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0013
**Audit ID:** ET-A1-0013
**Card ID:** `a1-sollen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sollen
**LV MASTER reference:** man tagad jāiet.
**CURRENT:** ma pean nüüd minema.
**PROPOSED_ET (audit ieteikums):** ma peaksin nüüd minema.
**PR603 audit ID:** ET-A1-0029
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Näide väljendab „pean“, mitte kaardi põhitähendust „peaksin“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0014
**Audit ID:** ET-A1-0014
**Card ID:** `a1-über`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** über
**LV MASTER reference:** no / par no kāda avota
**CURRENT:** -st / kohta mingist allikast
**PROPOSED_ET (audit ieteikums):** allikast / mingi allika kohta
**PR603 audit ID:** ET-A1-0031
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Praegune sõnajärg ja ühend „kohta mingist allikast“ on eesti keeles ebakorrektne ja raskesti mõistetav.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0015
**Audit ID:** ET-A1-0015
**Card ID:** `a1-vom`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** vom
**LV MASTER reference:** no (konkrēta lieta, kam?)
**CURRENT:** -st (konkreetne asi, Dativ)
**PROPOSED_ET (audit ieteikums):** -st (konkreetse asja puhul, saksa keeles datiiv)
**PR603 audit ID:** ET-A1-0032
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Fraas on eesti keeles grammatiliselt vigane ja võib segi ajada eesti elatiivi saksa datiiviga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0016
**Audit ID:** ET-A1-0016
**Card ID:** `a1-zu`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** zu
**LV MASTER reference:** iekšā / uz vietu
**CURRENT:** sees / mingisse kohta
**PROPOSED_ET (audit ieteikums):** sisse / mingisse kohta
**PR603 audit ID:** ET-A1-0033
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Sees” väljendab asukohta, kuid lähtekoha vastandus nõuab suunda väljendavat „sisse”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---