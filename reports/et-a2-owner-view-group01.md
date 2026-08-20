# ET–DE A1 — OWNER VIEW (grupa 1, 1–50)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#610](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/610)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-a2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [et-a2-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-view.md) |
| Decisions (šī grupa) | [et-a2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-decisions-group01.md) |
| Decisions (viss) | [et-a2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-decisions.md) |

Avots: [et-a2-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-full-audit.md)

## ET-A2-0001
**Audit ID:** ET-A2-0001
**Card ID:** `STRUCT`
**Field/path:** `study.count`
**Production file:** `data/et/a2.js`
**Severity:** CRITICAL
**Category:** STRUCTURE
**DE (read-only):** —
**CURRENT:** 232
**PROPOSED_ET (audit ieteikums):** 231
**Problēma:** Study count mismatch LV=231 ET=232
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0045
**Audit ID:** ET-A2-0045
**Card ID:** `a2-borgen`
**Field/path:** `entry[276].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Kannst du mir das Buch leihen? = Vai vari man aizdot grāmatu?
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Ware ist teuer. = Kaup on kallis.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0050
**Audit ID:** ET-A2-0050
**Card ID:** `a2-dafür`
**Field/path:** `entry[318].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Darum bleibe ich zu Hause. = Tāpēc es palieku mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Auflage ist hoch. = Tiraaž on fragments aizstāts ar suur.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0057
**Audit ID:** ET-A2-0057
**Card ID:** `study-der-dank`
**Field/path:** `entry[323].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Vielen Dank für die Hilfe! = Liels paldies par palīdzību!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Wir beginnen die Arbeit. = Me alustame tööd.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0059
**Audit ID:** ET-A2-0059
**Card ID:** `a2-darauf`
**Field/path:** `entry[324].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Danach gehe ich nach Hause. = Pēc tam es eju mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Er ist ehrlich. = HIGH Ta on aus.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0064
**Audit ID:** ET-A2-0064
**Card ID:** `a2-dazu`
**Field/path:** `entry[330].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich war dabei. = Es biju klāt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich gebe dir das Buch. = Ma annan sulle raamatu.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0071
**Audit ID:** ET-A2-0071
**Card ID:** `a2-dick`
**Field/path:** `entry[341].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist stark. = Viņš ir stiprs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich gebe viel Geld aus. = Ma kulutan palju raha.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0084
**Audit ID:** ET-A2-0084
**Card ID:** `a2-einschalten`
**Field/path:** `entry[391].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Mach das Licht an. = Ieslēdz gaismu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Kind zieht sich LV/atlikušās aus. = Laps riietub lahti.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0107
**Audit ID:** ET-A2-0107
**Card ID:** `a2-grund`
**Field/path:** `entry[607].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Aus diesem Grund komme ich nicht. = Šī iemesla dēļ es nenākšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich bewahre die Quittung auf. = valodas Ma hoian kviitungi alles. aizstāts ar
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0124
**Audit ID:** ET-A2-0124
**Card ID:** `a2-nutzen`
**Field/path:** `entry[1029].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nutze die Chance! = Izmanto iespēju!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Glühbirne ist kaputt. = Lambipirn on katki.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0141
**Audit ID:** ET-A2-0141
**Card ID:** `a2-sobald`
**Field/path:** `entry[1325].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Als ich Kind war, spielte ich viel. = Kad biju bērns, daudz spēlējos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** FOREIGN_REMNANT **LABOT** Sie ist nett. = LV/atlikušās Ta on kena.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0170
**Audit ID:** ET-A2-0170
**Card ID:** `a2-während`
**Field/path:** `entry[1553].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** müde. = valodas Seepärast olen ma väsinud.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0171
**Audit ID:** ET-A2-0171
**Card ID:** `a2-während`
**Field/path:** `entry[1553].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Solange du hier bist, bleibe ich. = Kamēr tu esi šeit, es palieku.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Wir sitzen um das Feuer. = Me ümber tule.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0173
**Audit ID:** ET-A2-0173
**Card ID:** `a2-wechseln`
**Field/path:** `entry[1564].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige um. = Es pārsēžos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Auto. = steht ein Maja ees seisab daļa saglabāta
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0177
**Audit ID:** ET-A2-0177
**Card ID:** `a2-Weste-1584`
**Field/path:** `entry[1584].lv`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** vest
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Bettdecke ist weich. = valodas aizstāts ar
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0181
**Audit ID:** ET-A2-0181
**Card ID:** `a2-ziehen`
**Field/path:** `entry[1599].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir ziehen um. = Mēs pārvācamies.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** ich. = Seepärast valodas ma.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0188
**Audit ID:** ET-A2-0188
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** grupp
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0189
**Audit ID:** ET-A2-0189
**Card ID:** `a2-bauen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** mudelit
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0190
**Audit ID:** ET-A2-0190
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** t
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0191
**Audit ID:** ET-A2-0191
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** ö
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0196
**Audit ID:** ET-A2-0196
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** d
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0197
**Audit ID:** ET-A2-0197
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** a
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0198
**Audit ID:** ET-A2-0198
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** m
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0199
**Audit ID:** ET-A2-0199
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** e
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0201
**Audit ID:** ET-A2-0201
**Card ID:** `a2-kamm`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** harja
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0202
**Audit ID:** ET-A2-0202
**Card ID:** `a2-kamm`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** kammi
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0203
**Audit ID:** ET-A2-0203
**Card ID:** `a2-kamm`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** hari
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0204
**Audit ID:** ET-A2-0204
**Card ID:** `a2-lage`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** kiht
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0205
**Audit ID:** ET-A2-0205
**Card ID:** `a2-leitung`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** juhe
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0207
**Audit ID:** ET-A2-0207
**Card ID:** `a2-leitung`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** liin
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0209
**Audit ID:** ET-A2-0209
**Card ID:** `a2-leitung`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** toru
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0211
**Audit ID:** ET-A2-0211
**Card ID:** `a2-rechnen`
**Field/path:** `study.sectionAccents (explanation)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** mit rechnen
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0212
**Audit ID:** ET-A2-0212
**Card ID:** `a2-satz`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** komplekti
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0213
**Audit ID:** ET-A2-0213
**Card ID:** `a2-satz`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** määr
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0215
**Audit ID:** ET-A2-0215
**Card ID:** `a2-satz`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** sete
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0217
**Audit ID:** ET-A2-0217
**Card ID:** `a2-schloss`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** lukku
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0218
**Audit ID:** ET-A2-0218
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** a
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0219
**Audit ID:** ET-A2-0219
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** u
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0220
**Audit ID:** ET-A2-0220
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** t
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0221
**Audit ID:** ET-A2-0221
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** o
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0226
**Audit ID:** ET-A2-0226
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** g
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0228
**Audit ID:** ET-A2-0228
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** v
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0232
**Audit ID:** ET-A2-0232
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** n
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0233
**Audit ID:** ET-A2-0233
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents.comparison.example`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** abfahren
**CURRENT:** Rong
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "Rong" nav atrodams sadaļā comparison
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0234
**Audit ID:** ET-A2-0234
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents.comparison.example`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** abfahren
**CURRENT:** väljub
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "väljub" nav atrodams sadaļā comparison
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0236
**Audit ID:** ET-A2-0236
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents.comparison.example`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** abfahren
**CURRENT:** sõitma
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "sõitma" nav atrodams sadaļā comparison
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0238
**Audit ID:** ET-A2-0238
**Card ID:** `a2-ändern-35`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** ändern
**LV MASTER reference:** mainīt • izmainīt
**CURRENT:** muutma • ümber muutma
**PROPOSED_ET (audit ieteikums):** muutma • ümber tegema
**Problēma:** „Ümber muutma” ei ole loomulik ega tavapärane vaste; „ümber tegema” tähendab ümber muutma või modifitseerima.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0239
**Audit ID:** ET-A2-0239
**Card ID:** `a2-Anlass-53`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Anlass
**LV MASTER reference:** iemesls • gadījums
**CURRENT:** põhjus • sündmus
**PROPOSED_ET (audit ieteikums):** põhjus • puhk
**Problēma:** „Anlass” tähendab lisaks põhjusele ka puhku või ajendit; „sündmus” tähendab lihtsalt sündmust ega kata seda tähendust täpselt.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0240
**Audit ID:** ET-A2-0240
**Card ID:** `a2-Arm-85`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Arm
**LV MASTER reference:** roka
**CURRENT:** käsi
**PROPOSED_ET (audit ieteikums):** käsivars
**Problēma:** „Käsi“ tähendab enamasti kätt; saksa „Arm“ vaste on täpsemalt „käsivars“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0241
**Audit ID:** ET-A2-0241
**Card ID:** `a2-auf der Stelle-101`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** auf der Stelle
**LV MASTER reference:** nekavējoties • uz vietas
**CURRENT:** viivitamatult • otsekohe
**PROPOSED_ET (audit ieteikums):** kohe • kohapeal
**Problēma:** Mõlemad praegused vasted tähendavad „kohe“; fraasi teine tähendus „kohapeal“ on puudu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---