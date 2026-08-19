# ET–DE A1 — OWNER VIEW (grupa 1, 1–50)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
Avots: `reports/et-a1-full-audit.md`

## ET-A1-0001
**Audit ID:** ET-A1-0001
**Card ID:** `a1-bitte`
**Field/path:** `study.tip.text`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** bitte
**CURRENT:** (tukšs)
**PROPOSED_ET (audit ieteikums):** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0002
**Audit ID:** ET-A1-0002
**Card ID:** `a1-bitte-study`
**Field/path:** `study.tip.text`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Bitte
**CURRENT:** (tukšs)
**PROPOSED_ET (audit ieteikums):** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0003
**Audit ID:** ET-A1-0003
**Card ID:** `a1-Arm-44`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Arm
**LV MASTER reference:** roka
**CURRENT:** käsi
**PROPOSED_ET (audit ieteikums):** käsivars
**Problēma:** Käsi tähendab peamiselt kätt; saksa Arm vaste on täpsemalt käsivars.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0004
**Audit ID:** ET-A1-0004
**Card ID:** `a1-Esslöffel-168`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Esslöffel
**LV MASTER reference:** ēdamkarote
**CURRENT:** supilusikas
**PROPOSED_ET (audit ieteikums):** supilusikas
**Problēma:** German märksõna on ainsuses, kuid Estonian vorm "supilusikas" on siin mitmuse omastav; õige ainsuse nimetav on "supilusikas".
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0005
**Audit ID:** ET-A1-0005
**Card ID:** `a1-Nummer-455`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** Nummer
**LV MASTER reference:** numurs
**CURRENT:** number
**PROPOSED_ET (audit ieteikums):** number
**Problēma:** “number” is English; the Estonian translation is “number”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0006
**Audit ID:** ET-A1-0006
**Card ID:** `a1-von-635`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** von
**LV MASTER reference:** no
**CURRENT:** -st
**PROPOSED_ET (audit ieteikums):** -lt
**Problēma:** Estonian -st usually corresponds to German aus; von is generally expressed with -lt, -l/juurest or alates depending on context.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0007
**Audit ID:** ET-A1-0007
**Card ID:** `a1-Weihnachten-648`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Weihnachten
**LV MASTER reference:** Ziemassvētki
**CURRENT:** Jõulud
**PROPOSED_ET (audit ieteikums):** jõulud
**Problēma:** The Estonian common noun jõulud is normally written lowercase; the uppercase reflects German noun capitalization.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0008
**Audit ID:** ET-A1-0008
**Card ID:** `a1-baden`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** baden
**LV MASTER reference:** viņš ļoti labi peld.
**CURRENT:** ta ujub väga hästi.
**PROPOSED_ET (audit ieteikums):** ta supleb väga hästi.
**Problēma:** “Ta ujub väga hästi” tähendab, et ta schwimmt sehr gut, mitte et ta badet/supleb.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0009
**Audit ID:** ET-A1-0009
**Card ID:** `a1-besuch`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Besuch
**LV MASTER reference:** Ārsts dodas vizītē.
**CURRENT:** Arst teeb visiidi.
**PROPOSED_ET (audit ieteikums):** Arst läheb visiidile.
**Problēma:** „Teeb visiidi” on ebaloomulik; eesti keeles minnakse visiidile.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0010
**Audit ID:** ET-A1-0010
**Card ID:** `a1-bis`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bis
**LV MASTER reference:** Es gaidu tavu ierašanos.
**CURRENT:** ma ootan sinu saabumiseni.
**PROPOSED_ET (audit ieteikums):** Ma ootan sinu saabumiseni.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0011
**Audit ID:** ET-A1-0011
**Card ID:** `a1-bis`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bis
**LV MASTER reference:** paliec šeit, līdz es atgriezīšos.
**CURRENT:** jää siia, kuni ma tagasi tulen.
**PROPOSED_ET (audit ieteikums):** Jää siia, kuni ma tagasi tulen.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0012
**Audit ID:** ET-A1-0012
**Card ID:** `a1-bis`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bis
**LV MASTER reference:** es mācos vācu valodu līdz vakaram.
**CURRENT:** ma õpin saksa keelt õhtuni.
**PROPOSED_ET (audit ieteikums):** Ma õpin saksa keelt õhtuni.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0013
**Audit ID:** ET-A1-0013
**Card ID:** `a1-bis`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bis
**LV MASTER reference:** līdz šim es neko neesmu sapratis.
**CURRENT:** siiani pole ma midagi aru saanud.
**PROPOSED_ET (audit ieteikums):** Siiani pole ma midagi aru saanud.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0014
**Audit ID:** ET-A1-0014
**Card ID:** `a1-bis`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** bis
**LV MASTER reference:** līdz šim
**CURRENT:** seni, kuni
**PROPOSED_ET (audit ieteikums):** siiani
**Problēma:** „Seni, kuni” tähendab „until”; „līdz šim” vaste on „siiani” või „seni”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0015
**Audit ID:** ET-A1-0015
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** es palieku mājās.
**CURRENT:** ma jään koju.
**PROPOSED_ET (audit ieteikums):** Ma jään koju.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0016
**Audit ID:** ET-A1-0016
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** paliec šeit!
**CURRENT:** jää siia!
**PROPOSED_ET (audit ieteikums):** Jää siia!
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0017
**Audit ID:** ET-A1-0017
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** mēs paliekam vēl vienu stundu.
**CURRENT:** me jääme veel üheks tunniks.
**PROPOSED_ET (audit ieteikums):** Me jääme veel üheks tunniks.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0018
**Audit ID:** ET-A1-0018
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** bleiben
**LV MASTER reference:** es eju mājās.
**CURRENT:** ma jään koju.
**PROPOSED_ET (audit ieteikums):** Ma lähen koju.
**Problēma:** Läti lause tähendab „Ma lähen koju”, mitte „Ma jään koju”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0019
**Audit ID:** ET-A1-0019
**Card ID:** `a1-da`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** da
**LV MASTER reference:** tur ir mana mašīna.
**CURRENT:** seal on minu auto.
**PROPOSED_ET (audit ieteikums):** Seal on minu auto.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0020
**Audit ID:** ET-A1-0020
**Card ID:** `a1-da`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** da
**LV MASTER reference:** es biju tur.
**CURRENT:** ma olin seal.
**PROPOSED_ET (audit ieteikums):** Ma olin seal.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0021
**Audit ID:** ET-A1-0021
**Card ID:** `a1-da`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** da
**LV MASTER reference:** te viņš nāk.
**CURRENT:** seal ta tuleb.
**PROPOSED_ET (audit ieteikums):** Seal ta tuleb.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0022
**Audit ID:** ET-A1-0022
**Card ID:** `a1-da`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** da
**LV MASTER reference:** nāc šeit!
**CURRENT:** tule siia!
**PROPOSED_ET (audit ieteikums):** Tule sinna!
**Problēma:** „Da” tähendab siin „sinna/seal”, kuid „siia” vastab sõnale „hier”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0023
**Audit ID:** ET-A1-0023
**Card ID:** `a1-da`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** COMPARISON
**DE (read-only):** da
**LV MASTER reference:** tad
**CURRENT:** siis
**PROPOSED_ET (audit ieteikums):** seal
**Problēma:** „Siis” tähendab aega; „da” tähendus on siin „seal”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0024
**Audit ID:** ET-A1-0024
**Card ID:** `a1-das`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** das
**LV MASTER reference:** tas ir mans auto.
**CURRENT:** see on minu auto.
**PROPOSED_ET (audit ieteikums):** See on minu auto.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0025
**Audit ID:** ET-A1-0025
**Card ID:** `a1-das`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** das
**LV MASTER reference:** tas ir labi.
**CURRENT:** see on hea.
**PROPOSED_ET (audit ieteikums):** See on hea.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0026
**Audit ID:** ET-A1-0026
**Card ID:** `a1-das`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** das
**LV MASTER reference:** grāmata, kuru es lasu, ir interesanta.
**CURRENT:** raamat, mida ma loen, on huvitav.
**PROPOSED_ET (audit ieteikums):** Raamat, mida ma loen, on huvitav.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0027
**Audit ID:** ET-A1-0027
**Card ID:** `a1-dass`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** dass
**LV MASTER reference:** es zinu, ka tu esi noguris.
**CURRENT:** ma tean, et sa oled väsinud.
**PROPOSED_ET (audit ieteikums):** Ma tean, et sa oled väsinud.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0028
**Audit ID:** ET-A1-0028
**Card ID:** `a1-dass`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** dass
**LV MASTER reference:** viņš saka, ka viņš nāks.
**CURRENT:** ta ütleb, et ta tuleb.
**PROPOSED_ET (audit ieteikums):** Ta ütleb, et ta tuleb.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0029
**Audit ID:** ET-A1-0029
**Card ID:** `a1-dass`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** dass
**LV MASTER reference:** es domāju, ka tas ir pareizi.
**CURRENT:** ma arvan, et see on õige.
**PROPOSED_ET (audit ieteikums):** Ma arvan, et see on õige.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0030
**Audit ID:** ET-A1-0030
**Card ID:** `a1-der`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** der
**LV MASTER reference:** vīrietis ir šeit.
**CURRENT:** mees on siin.
**PROPOSED_ET (audit ieteikums):** Mees on siin.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0031
**Audit ID:** ET-A1-0031
**Card ID:** `a1-der`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** der
**LV MASTER reference:** autobuss brauc.
**CURRENT:** buss tuleb.
**PROPOSED_ET (audit ieteikums):** Buss tuleb.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0032
**Audit ID:** ET-A1-0032
**Card ID:** `a1-der`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** der
**LV MASTER reference:** skolotājs runā.
**CURRENT:** õpetaja räägib.
**PROPOSED_ET (audit ieteikums):** Õpetaja räägib.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0033
**Audit ID:** ET-A1-0033
**Card ID:** `a1-die`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** die
**LV MASTER reference:** sieviete ir šeit.
**CURRENT:** naine on siin.
**PROPOSED_ET (audit ieteikums):** Naine on siin.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0034
**Audit ID:** ET-A1-0034
**Card ID:** `a1-die`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** die
**LV MASTER reference:** kaķene guļ.
**CURRENT:** kass magab.
**PROPOSED_ET (audit ieteikums):** Kass magab.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0035
**Audit ID:** ET-A1-0035
**Card ID:** `a1-die`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** die
**LV MASTER reference:** skolotāja skaidro.
**CURRENT:** naisõpetaja selgitab.
**PROPOSED_ET (audit ieteikums):** Naisõpetaja selgitab.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0036
**Audit ID:** ET-A1-0036
**Card ID:** `a1-ein`
**Field/path:** `study.tip.text`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** ein
**LV MASTER reference:** Atceries: ein nav tikai "viens". Bieži tas ir tikai nenoteiktais artikuls.
**CURRENT:** Pea meeles: ebamäärane üks/mingi → ein.
**PROPOSED_ET (audit ieteikums):** Pea meeles: „ein“ ei tähenda ainult „üks“, vaid on sageli lihtsalt umbmäärane artikkel.
**Problēma:** Praegune sõnastus on ebaloomulik ja jätab grammatiliselt puudu selgituse, et ein on sageli artikkel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0037
**Audit ID:** ET-A1-0037
**Card ID:** `a1-euch`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** euch
**LV MASTER reference:** jūs
**CURRENT:** teie
**PROPOSED_ET (audit ieteikums):** te
**Problēma:** „Teie“ on omastav asesõna („jūsu“), kuid „jūs“ vaste selles tähenduses on isikuline „te“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0038
**Audit ID:** ET-A1-0038
**Card ID:** `a1-geben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** geben
**LV MASTER reference:** iedod man, lūdzu, grāmatu.
**CURRENT:** anna mulle palun raamat.
**PROPOSED_ET (audit ieteikums):** Palun anna mulle raamat.
**Problēma:** Estonian sentence starts with a lowercase letter and the word order is less natural without initial “Palun”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0039
**Audit ID:** ET-A1-0039
**Card ID:** `a1-geben`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** geben
**LV MASTER reference:** es paņemu grāmatu.
**CURRENT:** ma võtan raamatu.
**PROPOSED_ET (audit ieteikums):** Ma annan raamatu.
**Problēma:** “Ma võtan raamatu” means “I take the book”, expressing nehmen rather than geben.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0040
**Audit ID:** ET-A1-0040
**Card ID:** `a1-geben`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** geben
**LV MASTER reference:** es saņemu dāvanu.
**CURRENT:** ma saan kingi.
**PROPOSED_ET (audit ieteikums):** Ma annan kingituse.
**Problēma:** “Ma saan kingi” means “I receive a gift”, not “I give a gift” (geben).
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0041
**Audit ID:** ET-A1-0041
**Card ID:** `a1-gleich`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gleich
**LV MASTER reference:** es tūlīt nāku.
**CURRENT:** ma tulen kohe.
**PROPOSED_ET (audit ieteikums):** Ma tulen kohe.
**Problēma:** The Estonian example sentence starts with a lowercase letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0042
**Audit ID:** ET-A1-0042
**Card ID:** `a1-gleich`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gleich
**LV MASTER reference:** tiekamies pēc brīža!
**CURRENT:** näeme kohe!
**PROPOSED_ET (audit ieteikums):** Näeme varsti!
**Problēma:** “Näeme kohe!” suggests seeing someone immediately; “Näeme varsti!” matches “see you shortly”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0043
**Audit ID:** ET-A1-0043
**Card ID:** `a1-haben`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** haben
**LV MASTER reference:** es to izdarīju.
**CURRENT:** ma tegin seda.
**PROPOSED_ET (audit ieteikums):** Mul on see.
**Problēma:** “Ma tegin seda” means “I did it”, expressing machen rather than haben.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0044
**Audit ID:** ET-A1-0044
**Card ID:** `a1-hand-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Hand
**LV MASTER reference:** man sāp roka.
**CURRENT:** Mu käsivars valutab.
**PROPOSED_ET (audit ieteikums):** Mu käsi valutab.
**Problēma:** “Käsivars” means forearm, while German Hand and the source sentence refer to the hand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0045
**Audit ID:** ET-A1-0045
**Card ID:** `a1-heißen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** heißen
**LV MASTER reference:** mani sauc Anna.
**CURRENT:** minu nimi on Anna.
**PROPOSED_ET (audit ieteikums):** Minu nimi on Anna.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0046
**Audit ID:** ET-A1-0046
**Card ID:** `a1-heißen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** heißen
**LV MASTER reference:** kā tevi sauc?
**CURRENT:** kuidas sind kutsutakse?
**PROPOSED_ET (audit ieteikums):** Kuidas sind kutsutakse?
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0047
**Audit ID:** ET-A1-0047
**Card ID:** `a1-heißen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** heißen
**LV MASTER reference:** kā tas saucas vāciski?
**CURRENT:** kuidas seda saksa keeles nimetatakse?
**PROPOSED_ET (audit ieteikums):** Kuidas seda saksa keeles nimetatakse?
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0048
**Audit ID:** ET-A1-0048
**Card ID:** `a1-heißen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** heißen
**LV MASTER reference:** ko tas nozīmē?
**CURRENT:** mida see tähendab?
**PROPOSED_ET (audit ieteikums):** Mida see tähendab?
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0049
**Audit ID:** ET-A1-0049
**Card ID:** `a1-hoch-study`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** kalns ir augsts.
**CURRENT:** Mägi on kõrge.
**PROPOSED_ET (audit ieteikums):** Mägi on kõrge.
**Problēma:** The common noun mägi should not be capitalized mid-sentence; source sentence should begin with Mägi only if retained as a sentence.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0050
**Audit ID:** ET-A1-0050
**Card ID:** `a1-hoch-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** plaukts ir divus metrus augsts.
**CURRENT:** riiul on kaks meetrit kõrge.
**PROPOSED_ET (audit ieteikums):** Riiul on kaks meetrit kõrge.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---